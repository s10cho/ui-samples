/*
 * 3D 장면 — 4층짜리 가상의 박물관(설계서 3-1·3-2·3-3·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영, 그림자 계산 없음.
 * 층 하나의 움직이지 않는 물체는 정점 색을 가진 도형 하나로 합쳐 층마다 그리기 호출 1번으로 그린다.
 */
import {
  BoxGeometry,
  BufferGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  InstancedMesh,
  Mesh,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { BREAKPOINT, BUILDING, CAMERA, FADE, PERIOD, POSTER_WINDOW, QUALITY, SCENE_COLOR, SCENE_LIGHT } from '../tokens.js';
import { HOME, boxPoints, closestDistance, fitDistance, homeScale, stackedHome, zoomFor } from '../framing.js';
import { CORE, FACILITY_ANCHORS, PARTITIONS, RESTROOM_FLOORS, ROOMS, VISITOR_PATHS } from './layout.js';

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/** 포스터를 찍는 장면 시각. 실시간 장면도 이 시각에서 시작해 엘리베이터·관람객 위치가 튀지 않는다(설계서 3-2절) */
const POSTER_TIME = 6.0;
/** 엘리베이터가 서는 층 순서(0 = 1층) */
const ELEVATOR_STOPS = [0, 1, 2, 3, 2, 1];
const HALF_W = BUILDING.width / 2;
const HALF_D = BUILDING.depth / 2;
const WALL_T = 0.2;
const PART_T = 0.12;

/* ---------- 도형 도우미 ---------- */

const UNIT_BOX = new BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
const UNIT_CYL = (seg) => new CylinderGeometry(1, 1, 1, seg, 1).translate(0, 0.5, 0);
const CYL6 = UNIT_CYL(6);
const CYL10 = UNIT_CYL(10);
const CONE4 = new ConeGeometry(1, 1, 4, 1).rotateY(Math.PI / 4).translate(0, 0.5, 0);
const CONE7 = new ConeGeometry(1, 1, 7, 1).translate(0, 0.5, 0);
const SPHERE = new SphereGeometry(1, 8, 6);

/**
 * 여러 물체를 정점 색을 가진 도형 하나로 합친다. 같은 층·같은 재질이면 그리기 호출이 한 번이다.
 * top 색을 주면 위를 보는 면만 그 색으로 칠한다(벽 윗면·바닥판 윗면).
 */
function geometryBuilder() {
  const pos = [];
  const col = [];
  const dummy = new Object3D();
  const side = new Color();
  const top = new Color();
  return {
    add(geometry, { x = 0, y = 0, z = 0, ry = 0, sx = 1, sy = 1, sz = 1 }, color, topColor) {
      dummy.position.set(x, y, z);
      dummy.rotation.set(0, ry, 0);
      dummy.scale.set(sx, sy, sz);
      dummy.updateMatrix();
      const g = (geometry.index ? geometry.toNonIndexed() : geometry.clone()).applyMatrix4(dummy.matrix);
      g.computeVertexNormals();
      const p = g.attributes.position;
      const n = g.attributes.normal;
      side.set(color);
      if (topColor !== undefined) top.set(topColor);
      for (let i = 0; i < p.count; i += 1) {
        pos.push(p.getX(i), p.getY(i), p.getZ(i));
        const c = topColor !== undefined && n.getY(i) > 0.7 ? top : side;
        col.push(c.r, c.g, c.b);
      }
      g.dispose();
    },
    box(x, y, z, w, h, d, color, topColor, ry = 0) {
      this.add(UNIT_BOX, { x, y, z, sx: w, sy: h, sz: d, ry }, color, topColor);
    },
    get empty() {
      return pos.length === 0;
    },
    build() {
      const g = new BufferGeometry();
      g.setAttribute('position', new Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new Float32BufferAttribute(col, 3));
      g.computeVertexNormals();
      return g;
    },
  };
}

/** 관람객 1명이 도는 길 — 점 사이를 걷고, 점마다 잠깐 멈춘다 */
function walker(points, offset) {
  const legs = points.map((p, i) => {
    const q = points[(i + 1) % points.length];
    return { from: p, to: q, time: Math.hypot(q[0] - p[0], q[1] - p[1]) / PERIOD.visitorSpeed };
  });
  const total = legs.reduce((sum, leg) => sum + leg.time + PERIOD.visitorDwell, 0);
  return (t, out) => {
    let u = (((t + offset) % total) + total) % total;
    for (const leg of legs) {
      if (u < PERIOD.visitorDwell) {
        out[0] = leg.from[0];
        out[1] = leg.from[1];
        return out;
      }
      u -= PERIOD.visitorDwell;
      if (u < leg.time) {
        const k = easeInOut(u / leg.time);
        out[0] = lerp(leg.from[0], leg.to[0], k);
        out[1] = lerp(leg.from[1], leg.to[1], k);
        return out;
      }
      u -= leg.time;
    }
    out[0] = points[0][0];
    out[1] = points[0][1];
    return out;
  };
}

/* ---------- 층 하나 만들기 ---------- */

/** 바깥벽 아래쪽(0~0.9) — 모든 층. 1층 남쪽 벽에는 입구가 있다 */
function addBaseWalls(b, floor) {
  const h = BUILDING.wallLow;
  const C = SCENE_COLOR;
  b.box(0, 0, -HALF_D + WALL_T / 2, BUILDING.width, h, WALL_T, C.wall, C.wallTop);
  b.box(-HALF_W + WALL_T / 2, 0, 0, WALL_T, h, BUILDING.depth, C.wall, C.wallTop);
  b.box(HALF_W - WALL_T / 2, 0, 0, WALL_T, h, BUILDING.depth, C.wall, C.wallTop);
  const z = HALF_D - WALL_T / 2;
  if (floor === 0) {
    const { x0, x1 } = CORE.entrance;
    b.box((-HALF_W + x0) / 2, 0, z, x0 + HALF_W, h, WALL_T, C.wall, C.wallTop);
    b.box((x1 + HALF_W) / 2, 0, z, HALF_W - x1, h, WALL_T, C.wall, C.wallTop);
  } else {
    b.box(0, 0, z, BUILDING.width, h, WALL_T, C.wall, C.wallTop);
  }
}

/** 바깥벽 위쪽(0.9~2.3) — 쌓아 보기 때만 올라온다. 가운데에 창 띠 */
function upperWallGeometry() {
  const b = geometryBuilder();
  const C = SCENE_COLOR;
  const rise = BUILDING.wallFull - BUILDING.wallLow;
  const bands = [
    [0, 0.3, C.wall],
    [0.3, rise - 0.3, C.glass],
    [rise - 0.3, rise, C.wall],
  ];
  bands.forEach(([y0, y1, color]) => {
    const h = y1 - y0;
    b.box(0, y0, -HALF_D + WALL_T / 2, BUILDING.width, h, WALL_T, color, C.wallTop);
    b.box(0, y0, HALF_D - WALL_T / 2, BUILDING.width, h, WALL_T, color, C.wallTop);
    b.box(-HALF_W + WALL_T / 2, y0, 0, WALL_T, h, BUILDING.depth, color, C.wallTop);
    b.box(HALF_W - WALL_T / 2, y0, 0, WALL_T, h, BUILDING.depth, color, C.wallTop);
  });
  return b.build();
}

function addPartitions(b, floor) {
  const h = BUILDING.wallLow;
  PARTITIONS[floor].forEach(([x0, z0, x1, z1]) => {
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const w = Math.abs(x1 - x0) || PART_T;
    const d = Math.abs(z1 - z0) || PART_T;
    b.box(cx, 0, cz, w, h, d, SCENE_COLOR.partition, SCENE_COLOR.wallTop);
  });
}

/** 뒤쪽 띠 — 복도 바닥, 계단, 엘리베이터 앞, 화장실 */
function addCore(b, floor) {
  const C = SCENE_COLOR;
  b.box(0, 0, (-HALF_D + BUILDING.coreZ) / 2, BUILDING.width - 0.1, 0.025, HALF_D + BUILDING.coreZ - 0.05, C.hall);
  // 계단: 북쪽으로 오르는 5칸
  const s = CORE.stairs;
  for (let i = 0; i < 5; i += 1) {
    b.box((s.x0 + s.x1) / 2 + 0.05, 0, s.z1 - 0.35 - i * 0.45, s.x1 - s.x0 - 0.3, 0.3 * (i + 1), 0.45, C.stairs);
  }
  // 엘리베이터 앞 발판
  b.box(0, 0, CORE.elevator.z1 + 0.35, 1.8, 0.04, 0.6, C.door);
  if (RESTROOM_FLOORS.includes(floor)) {
    const r = CORE.restroom;
    b.box((r.x0 + r.x1) / 2 + 0.05, 0, (r.z0 + r.z1) / 2, r.x1 - r.x0 - 0.1, 0.03, r.z1 - r.z0 - 0.1, C.restroom);
    const h = BUILDING.wallLow;
    b.box(r.x0, 0, (r.z0 + r.doorZ0) / 2, PART_T, h, r.doorZ0 - r.z0, C.partition, C.wallTop);
    b.box(r.x0, 0, (r.doorZ1 + r.z1) / 2, PART_T, h, r.z1 - r.doorZ1, C.partition, C.wallTop);
    b.box((r.x0 + r.x1) / 2, 0, r.z1, r.x1 - r.x0, h, PART_T, C.partition, C.wallTop);
    b.box(r.x1 - 0.5, 0, -3.7, 0.4, 0.6, 1.2, C.plinth); // 세면대
  }
}

/** 받침 위 유리장 */
function addCase(b, x, z, w, d) {
  b.box(x, 0, z, w, 0.55, d, SCENE_COLOR.plinth);
  b.box(x, 0.55, z, w * 0.92, 0.5, d * 0.92, SCENE_COLOR.caseGlass);
}

function addTree(b, x, z, s = 1) {
  b.add(CYL6, { x, z, sx: 0.1 * s, sy: 0.7 * s, sz: 0.1 * s }, SCENE_COLOR.trunk);
  b.add(CONE7, { x, y: 0.5 * s, z, sx: 0.62 * s, sy: 1.7 * s, sz: 0.62 * s }, SCENE_COLOR.leaf);
}

function addPot(b, x, y, z, color) {
  b.add(SPHERE, { x, y: y + 0.24, z, sx: 0.2, sy: 0.24, sz: 0.2 }, color);
  b.add(CYL6, { x, y: y + 0.4, z, sx: 0.09, sy: 0.14, sz: 0.09 }, color);
}

/** 전시실마다 놓인 것(설계서 3-1절) */
function addProps(b, floor) {
  const C = SCENE_COLOR;
  if (floor === 0) {
    // 로비: 안내 데스크, 조각 받침, 긴 의자, "지금 여기" 원판·기둥
    const [dx, dz] = CORE.desk;
    b.box(dx, 0, dz, 2.2, 0.8, 0.7, C.wood, C.ink);
    b.box(-4.4, 0, 0.0, 1.0, 0.5, 1.0, C.plinth);
    b.add(CONE7, { x: -4.4, y: 0.5, z: 0.0, sx: 0.36, sy: 1.1, sz: 0.36 }, C.ink);
    b.box(-0.8, 0, 1.6, 2.0, 0.35, 0.5, C.wood);
    b.box(-0.8, 0, -0.6, 2.0, 0.35, 0.5, C.wood);
    // "지금 여기" — 입구 앞 마당 위(마당 윗면은 층 바닥보다 0.32 낮다)
    const [hx, hz] = CORE.here;
    const gy = -0.32;
    b.add(CYL10, { x: hx, y: gy, z: hz, sx: 0.55, sy: 0.04, sz: 0.55 }, C.here);
    b.add(CYL6, { x: hx, y: gy, z: hz, sx: 0.06, sy: 1.0, sz: 0.06 }, C.here);
    b.add(SPHERE, { x: hx, y: gy + 1.05, z: hz, sx: 0.16, sy: 0.16, sz: 0.16 }, C.here);
    // 기념품 가게: 진열대, 계산대
    b.box(7.55, 0, -0.6, 0.45, 1.1, 2.6, C.wood);
    b.box(6.0, 0, -1.95, 2.2, 1.1, 0.45, C.wood);
    b.box(4.4, 0, -0.5, 1.4, 0.8, 0.8, C.plinth);
    b.box(3.0, 0, 0.55, 1.2, 0.8, 0.6, C.ink);
    // 어린이 체험실: 둥근 탁자, 블록, 낮은 선반, 매트
    b.add(CYL10, { x: 5.2, z: 3.2, sx: 0.8, sy: 0.4, sz: 0.8 }, C.wood);
    b.box(3.4, 0, 3.6, 1.6, 0.03, 1.4, C.blocks[1]);
    [
      [3.0, 0, 3.2, 0],
      [3.5, 0, 3.0, 1],
      [3.2, 0.35, 3.1, 2],
      [3.9, 0, 3.9, 3],
    ].forEach(([x, y, z, i]) => b.box(x, y, z, 0.35, 0.35, 0.35, C.blocks[i]));
    b.box(7.55, 0, 3.2, 0.45, 0.6, 2.4, C.plinth);
  } else if (floor === 1) {
    // 옛 생활: 벽을 따라 유리장, 가운데 초가 모형
    [-1.2, 0.8, 2.8].forEach((z) => addCase(b, -7.35, z, 0.8, 1.6));
    addCase(b, -5.0, -1.85, 2.2, 0.6);
    b.box(-4.0, 0, 1.8, 1.8, 0.5, 1.4, C.plinth);
    b.box(-4.0, 0.5, 1.8, 1.0, 0.45, 0.7, C.wood);
    b.add(CONE4, { x: -4.0, y: 0.95, z: 1.8, sx: 0.8, sy: 0.5, sz: 0.6 }, C.pot[2]);
    // 도자기: 받침 위 항아리, 동쪽 벽 유리장
    [
      [1.6, -1.4, 0],
      [3.4, -1.4, 1],
      [5.2, -1.4, 2],
      [3.0, 0.3, 3],
      [5.0, 0.3, 0],
    ].forEach(([x, z, i]) => {
      b.add(CYL6, { x, z, sx: 0.3, sy: 0.7, sz: 0.3 }, C.plinth);
      addPot(b, x, 0.7, z, C.pot[i]);
    });
    addCase(b, 7.35, -0.5, 0.8, 2.6);
    // 영상실: 동쪽 벽 화면, 의자 줄
    b.box(7.7, 0.1, 3.2, 0.12, 1.3, 2.8, C.screen);
    [2.4, 3.8, 5.2].forEach((x) => b.box(x, 0, 3.2, 0.5, 0.35, 2.4, C.wood));
  } else if (floor === 2) {
    // 그림 전시실: 벽을 따라 세운 판에 액자, 가운데 의자
    b.box(-7.45, 0, 1.3, 0.12, 1.5, 5.0, C.wall, C.wallTop);
    [-0.4, 1.3, 3.0].forEach((z, i) => b.box(-7.37, 0.5, z, 0.04, 0.75, 1.0, C.art[i]));
    b.box(-4.0, 0, 4.5, 5.6, 1.5, 0.12, C.wall, C.wallTop);
    [-6.0, -4.0, -2.0].forEach((x, i) => b.box(x, 0.5, 4.42, 1.0, 0.75, 0.04, C.art[(i + 1) % 4]));
    b.box(-4.0, 0, 1.2, 2.4, 0.4, 0.6, C.wood);
    // 기획 전시실: 비스듬히 세운 칸막이, 받침 위 전시물
    b.box(2.8, 0, 0.6, 0.12, 1.4, 2.6, C.wall, C.wallTop, 0.5);
    b.box(5.2, 0, 2.8, 0.12, 1.4, 2.6, C.wall, C.wallTop, -0.5);
    [
      [6.6, -1.3, 0],
      [3.6, 3.8, 1],
      [6.8, 4.0, 2],
    ].forEach(([x, z, i]) => {
      b.box(x, 0, z, 0.8, 0.8, 0.8, C.plinth);
      b.add(SPHERE, { x, y: 1.05, z, sx: 0.28, sy: 0.28, sz: 0.28 }, C.art[i]);
    });
  } else {
    // 옥상 정원: 나무, 화단, 긴 의자
    addTree(b, -6.6, -0.8, 1.0);
    addTree(b, -6.3, 3.4, 1.1);
    addTree(b, -0.4, -1.1, 0.9);
    addTree(b, -1.0, 3.8, 1.0);
    b.box(-3.6, 0, -1.4, 2.6, 0.4, 0.7, C.plinth);
    b.box(-3.6, 0.4, -1.4, 2.3, 0.25, 0.45, C.leaf);
    b.box(-3.6, 0, 1.6, 1.8, 0.35, 0.5, C.wood);
    // 카페: 계산대, 탁자와 의자
    b.box(6.4, 0, -1.7, 2.6, 0.9, 0.7, C.wood, C.ink);
    [
      [3.0, 0.6],
      [5.0, 0.6],
      [3.0, 2.8],
      [5.0, 2.8],
      [6.9, 2.8],
    ].forEach(([x, z]) => {
      b.add(CYL10, { x, z, sx: 0.42, sy: 0.7, sz: 0.42 }, C.plinth);
      b.box(x - 0.6, 0, z, 0.35, 0.45, 0.35, C.wood);
      b.box(x + 0.6, 0, z, 0.35, 0.45, 0.35, C.wood);
    });
  }
}

/* ---------- 장면 만들기 ---------- */

export async function createScene(opts) {
  const {
    container,
    labelLayer,
    floors: floorInfo, // [{ id: '1', name: '1층' }, …] 1층부터
    rooms: roomInfo, // { pottery: { name, floor: '2' }, … }
    hereLabel,
    canvasLabel,
    getFreeRect,
    durations,
    onSelectFloor = () => {},
    onSelectRoom = () => {},
    onInteract = () => {},
    onZoomLimits = () => {},
    onContextLost = () => {},
    onContextRestored = () => {},
  } = opts;

  const poster = Boolean(opts.poster);
  const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);
  const isWide = () => wideQuery.matches;

  let quality = opts.quality || (isWide() ? 'high' : 'low');
  let motion = opts.motion !== false;
  let reduced = Boolean(opts.reduced);
  let viewMode = 'exploded';
  let facilitiesOn = opts.facilities !== false;
  let selFloor = null; // 층 번호(0 = 1층)
  let selRoom = null;

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(viewMode));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const scene = new Scene();
  const bgColor = new Color(SCENE_COLOR.bg);
  scene.background = bgColor;
  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 400);

  /* 빛 — 그림자 없음 */
  scene.add(new HemisphereLight(SCENE_LIGHT.hemiSky, SCENE_LIGHT.hemiGround, SCENE_LIGHT.hemi));
  const key = new DirectionalLight(SCENE_LIGHT.key, SCENE_LIGHT.keyIntensity);
  key.position.set(...SCENE_LIGHT.keyPosition);
  scene.add(key);

  const lambert = (extra) => new MeshLambertMaterial({ flatShading: true, ...extra });
  const materials = [];
  const track = (m) => {
    materials.push(m);
    return m;
  };

  /* 마당 — 1층 아래 넓은 바닥판과 입구 앞 길 */
  const ground = geometryBuilder();
  ground.box(0, -0.52, 1.2, 21, 0.2, 15, SCENE_COLOR.plaza);
  ground.box(CORE.here[0], -0.32, 7.0, 2.2, 0.02, 3.4, SCENE_COLOR.plazaPath);
  const plaza = new Mesh(ground.build(), track(lambert({ vertexColors: true })));
  scene.add(plaza);

  /* 층 4개 */
  const visitorGeometry = (() => {
    const b = geometryBuilder();
    b.add(CYL6, { sx: 0.16, sy: 0.56, sz: 0.16 }, SCENE_COLOR.instanceBase);
    b.add(SPHERE, { y: 0.72, sx: 0.14, sy: 0.14, sz: 0.14 }, SCENE_COLOR.instanceBase);
    const g = b.build();
    g.deleteAttribute('color');
    return g;
  })();
  const upperGeometry = upperWallGeometry();
  const dummy = new Object3D();

  const floors = floorInfo.map((info, i) => {
    const group = new Group();
    scene.add(group);
    const b = geometryBuilder();
    b.box(0, -BUILDING.slab, 0, BUILDING.width, BUILDING.slab, BUILDING.depth, SCENE_COLOR.slabSide, SCENE_COLOR.slabTop);
    addBaseWalls(b, i);
    addPartitions(b, i);
    addCore(b, i);
    addProps(b, i);
    const material = track(lambert({ vertexColors: true }));
    const body = new Mesh(b.build(), material);
    group.add(body);

    // 쌓아 보기 때 올라오는 바깥벽 위쪽. 4층(지붕 위)에는 없다
    let upper = null;
    if (i < BUILDING.floors - 1) {
      upper = new Mesh(upperGeometry, material);
      upper.position.y = BUILDING.wallLow;
      upper.scale.y = 0.001;
      upper.visible = false;
      group.add(upper);
    }

    // 전시실 바닥 — 고르면 색이 바뀌어 따로 둔다
    const rooms = Object.entries(ROOMS)
      .filter(([, r]) => r.floor === i)
      .map(([id, r]) => {
        const color = new Color(SCENE_COLOR.room[id]);
        const mat = track(lambert({ color: color.clone() }));
        const mesh = new Mesh(UNIT_BOX, mat);
        mesh.scale.set(r.x1 - r.x0 - 0.06, 0.03, r.z1 - r.z0 - 0.06);
        mesh.position.set((r.x0 + r.x1) / 2, 0, (r.z0 + r.z1) / 2);
        group.add(mesh);
        return { id, mesh, mat, base: color };
      });

    // 관람객 점
    const visitorMat = track(lambert({ color: SCENE_COLOR.instanceBase }));
    const paths = VISITOR_PATHS[i];
    const visitors = new InstancedMesh(visitorGeometry, visitorMat, paths.length);
    paths.forEach((_, v) => visitors.setColorAt(v, new Color(SCENE_COLOR.visitors[(i * 3 + v) % SCENE_COLOR.visitors.length])));
    visitors.frustumCulled = false; // 관람객이 움직여 묶음의 경계 구가 낡는다
    group.add(visitors);
    const walkers = paths.map((points, v) => walker(points, v * 7.3 + i * 3.1));

    return {
      index: i,
      id: info.id,
      group,
      body,
      upper,
      material,
      rooms,
      visitors,
      visitorMat,
      walkers,
      y: 0,
      fade: 0,
      wall: 0,
    };
  });

  /* 고른 전시실 테두리 — 고른 층 그룹으로 옮겨 붙인다 */
  const outlineMat = track(lambert({ color: SCENE_COLOR.accent }));
  const outline = new Group();
  for (let i = 0; i < 4; i += 1) outline.add(new Mesh(UNIT_BOX, outlineMat));
  outline.visible = false;

  /* 엘리베이터 — 층을 꿰는 기둥 넷과 오르내리는 칸 */
  const E = CORE.elevator;
  const shaftMat = track(lambert({ color: SCENE_COLOR.shaft }));
  const posts = [
    [E.x0, E.z0],
    [E.x1, E.z0],
    [E.x0, E.z1],
    [E.x1, E.z1],
  ].map(([x, z]) => {
    const post = new Mesh(CYL6, shaftMat);
    post.position.set(x, -BUILDING.slab, z);
    post.scale.set(0.06, 1, 0.06);
    scene.add(post);
    return post;
  });
  const carGeometry = (() => {
    const b = geometryBuilder();
    b.box(0, 0.02, 0, E.x1 - E.x0 - 0.3, 1.7, E.z1 - E.z0 - 0.25, SCENE_COLOR.car);
    b.box(0, 0.15, (E.z1 - E.z0) / 2 - 0.12, 0.9, 1.4, 0.04, SCENE_COLOR.carFront);
    return b.build();
  })();
  const car = new Mesh(carGeometry, track(lambert({ vertexColors: true })));
  car.position.set((E.x0 + E.x1) / 2, 0, (E.z0 + E.z1) / 2);
  scene.add(car);

  /* ---------- 층 배치: 보는 방식·고른 층 ---------- */

  const floorTarget = (i, mode = viewMode, sel = selFloor) => {
    const y = i * BUILDING.gap[mode] + (sel !== null && i > sel ? BUILDING.lift[mode] : 0);
    const fade = sel !== null && i !== sel ? 1 : 0;
    const wall = mode === 'stacked' && (sel === null || i !== sel) ? 1 : 0;
    return { y, fade, wall };
  };

  let layoutTween = null;
  const bgFade = new Color();

  function applyFloor(f) {
    f.group.position.y = f.y;
    const k = FADE * f.fade;
    bgFade.copy(bgColor).multiplyScalar(k);
    f.material.color.setScalar(1 - k);
    f.material.emissive.copy(bgFade);
    f.visitorMat.color.setScalar(1 - k);
    f.visitorMat.emissive.copy(bgFade);
    f.rooms.forEach((r) => {
      const base = r.id === selRoom ? roomSelectedColor : r.base;
      r.mat.color.copy(base).multiplyScalar(1 - k);
      r.mat.emissive.copy(bgFade);
    });
    if (f.upper) {
      f.upper.scale.y = Math.max(0.001, f.wall);
      f.upper.visible = f.wall > 0.01;
    }
  }
  const roomSelectedColor = new Color(SCENE_COLOR.roomSelected);

  function applyLayout() {
    floors.forEach(applyFloor);
    // 엘리베이터 기둥은 4층 엘리베이터 칸 높이까지만 올라간다
    const top = floors[floors.length - 1].y + 1.8;
    posts.forEach((post) => {
      post.scale.y = top + BUILDING.slab;
    });
  }

  function setLayout(animate) {
    const to = floors.map((f) => floorTarget(f.index));
    if (!animate || reduced || !motion) {
      layoutTween = null;
      floors.forEach((f, i) => Object.assign(f, to[i]));
      applyLayout();
      requestRender();
      return;
    }
    layoutTween = {
      from: floors.map((f) => ({ y: f.y, fade: f.fade, wall: f.wall })),
      to,
      start: performance.now(),
      duration: durations.floorShift,
    };
    requestRender();
  }

  function stepLayoutTween(now) {
    if (!layoutTween) return;
    const { from, to, start, duration } = layoutTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    floors.forEach((f, i) => {
      f.y = lerp(from[i].y, to[i].y, k);
      f.fade = lerp(from[i].fade, to[i].fade, k);
      f.wall = lerp(from[i].wall, to[i].wall, k);
    });
    applyLayout();
    if (k >= 1) layoutTween = null;
  }

  function placeOutline() {
    const r = selRoom ? ROOMS[selRoom] : null;
    outline.visible = Boolean(r);
    if (!r) return;
    floors[r.floor].group.add(outline);
    const t = 0.1;
    const h = 0.07;
    const w = r.x1 - r.x0;
    const d = r.z1 - r.z0;
    const cx = (r.x0 + r.x1) / 2;
    const cz = (r.z0 + r.z1) / 2;
    const [a, b2, c, e] = outline.children;
    a.scale.set(w, h, t);
    a.position.set(cx, 0.02, r.z0 + t / 2 + 0.03);
    b2.scale.set(w, h, t);
    b2.position.set(cx, 0.02, r.z1 - t / 2 - 0.03);
    c.scale.set(t, h, d);
    c.position.set(r.x0 + t / 2 + 0.03, 0.02, cz);
    e.scale.set(t, h, d);
    e.position.set(r.x1 - t / 2 - 0.03, 0.02, cz);
  }

  /* ---------- 움직이는 것 ---------- */

  const spot = [0, 0];
  function updateVisitors(t) {
    floors.forEach((f) => {
      f.walkers.forEach((walk, v) => {
        walk(t, spot);
        dummy.position.set(spot[0], 0, spot[1]);
        dummy.updateMatrix();
        f.visitors.setMatrixAt(v, dummy.matrix);
      });
      f.visitors.instanceMatrix.needsUpdate = true;
    });
  }

  function updateElevator(t) {
    const L = PERIOD.elevatorTravel + PERIOD.elevatorDwell;
    const n = ELEVATOR_STOPS.length;
    const u = ((t % (L * n)) + L * n) % (L * n);
    const i = Math.floor(u / L);
    const p = u - i * L;
    const a = floors[ELEVATOR_STOPS[i]].y;
    const b = floors[ELEVATOR_STOPS[(i + 1) % n]].y;
    car.position.y = p < PERIOD.elevatorDwell ? a : lerp(a, b, easeInOut((p - PERIOD.elevatorDwell) / PERIOD.elevatorTravel));
  }

  /* ---------- 품질 ---------- */

  function pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (poster) return 1;
    return Math.min(dpr, quality === 'high' ? QUALITY.pixelRatioHigh : QUALITY.pixelRatioLow);
  }

  function setQuality(next) {
    if (next === quality) return;
    quality = next;
    resize();
  }

  /* ---------- 시점 ---------- */

  const elMin = CAMERA.elevationMin * DEG;
  const elMax = CAMERA.elevationMax * DEG;
  const cam = {
    az: HOME.azimuth,
    el: HOME.elevation,
    dist: HOME.distance,
    target: new Vector3(...HOME.target),
  };
  let frame = { k: 1, rect: { cx: 0, cy: 0, width: 1, height: 1 }, insetLeft: 0 };
  let minDist = 10;
  let maxDist = HOME.distance * CAMERA.maxDistanceFactor;
  let fitted = true; // 사용자가 시점을 직접 바꾸기 전까지는 크기가 바뀌면 지금 보는 것에 다시 맞춘다
  let userInteracted = false;
  let camTween = null;
  let lastLimits = '';

  const clampDist = (d) => clamp(d, minDist, maxDist);

  function reportLimits() {
    const atMin = cam.dist <= minDist + 0.01;
    const atMax = cam.dist >= maxDist - 0.01;
    const keyStr = `${atMin}|${atMax}`;
    if (keyStr !== lastLimits) {
      lastLimits = keyStr;
      onZoomLimits({ atMin, atMax });
    }
  }

  function applyCamera() {
    const { az, el, dist, target } = cam;
    camera.position.set(
      target.x + dist * Math.cos(el) * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + dist * Math.cos(el) * Math.cos(az),
    );
    camera.lookAt(target);
    reportLimits();
  }

  /** 지금 고른 것에 맞는 시점(설계서 3-2절). 층 높이는 옮겨 갈 자리(목표값)로 계산한다 */
  function viewFor() {
    const { rect, k } = frame;
    if (selRoom) {
      const r = ROOMS[selRoom];
      const y = floorTarget(r.floor).y;
      const v = CAMERA.roomView;
      const center = [(r.x0 + r.x1) / 2, y + 0.5, (r.z0 + r.z1) / 2];
      const pts = boxPoints(center, [r.x1 - r.x0, 1.4, r.z1 - r.z0]);
      const d = fitDistance(pts, center, v.azimuth * DEG, v.elevation * DEG, k, (rect.width / 2) * v.shareW, (rect.height / 2) * v.shareH);
      return { az: v.azimuth * DEG, el: v.elevation * DEG, dist: Math.max(d, minDist), target: new Vector3(...center) };
    }
    if (selFloor !== null) {
      const y = floorTarget(selFloor).y;
      const v = CAMERA.floorView;
      const center = [0, y + 0.6, 0];
      const pts = boxPoints(center, [BUILDING.width, 1.6, BUILDING.depth]);
      const d = fitDistance(pts, center, v.azimuth * DEG, v.elevation * DEG, k, (rect.width / 2) * v.share, (rect.height / 2) * v.share);
      return { az: v.azimuth * DEG, el: v.elevation * DEG, dist: Math.max(d, minDist), target: new Vector3(...center) };
    }
    if (viewMode === 'stacked') {
      const s = stackedHome(rect, k);
      return { az: HOME.azimuth, el: HOME.elevation, dist: s.distance, target: new Vector3(...s.target) };
    }
    return { az: HOME.azimuth, el: HOME.elevation, dist: HOME.distance, target: new Vector3(...HOME.target) };
  }

  function startCameraTween(goal, duration) {
    const to = {
      az: cam.az + wrapAngle((goal.az ?? cam.az) - cam.az),
      el: clamp(goal.el ?? cam.el, elMin, elMax),
      dist: clampDist(goal.dist ?? cam.dist),
      target: (goal.target ?? cam.target).clone(),
    };
    if (reduced || duration <= 0) {
      Object.assign(cam, { az: to.az, el: to.el, dist: to.dist });
      cam.target.copy(to.target);
      camTween = null;
      requestRender();
      return;
    }
    camTween = { from: { az: cam.az, el: cam.el, dist: cam.dist, target: cam.target.clone() }, to, start: performance.now(), duration };
    requestRender();
  }

  function stepCameraTween(now) {
    if (!camTween) return;
    const { from, to, start, duration } = camTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    cam.az = lerp(from.az, to.az, k);
    cam.el = lerp(from.el, to.el, k);
    cam.dist = lerp(from.dist, to.dist, k);
    cam.target.lerpVectors(from.target, to.target, k);
    if (k >= 1) camTween = null;
  }

  function goToView(animate) {
    fitted = true;
    startCameraTween(viewFor(), animate ? durations.camera : 0);
  }

  function interact() {
    camTween = null;
    fitted = false;
    if (!userInteracted) {
      userInteracted = true;
      onInteract();
    }
  }

  /* ---------- 표지 ---------- */

  const markers = [];
  const iconSvg = (name) =>
    `<svg class="icon icon--sm" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;

  function makeMarker(kind, text, onClick) {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `marker marker--${kind} is-hidden`;
    el.tabIndex = -1;
    const pill = document.createElement('span');
    pill.className = 'marker__pill';
    const label = document.createElement('span');
    label.className = 'marker__text';
    label.textContent = text;
    pill.append(label);
    el.append(pill);
    el.addEventListener('click', onClick);
    labelLayer.append(el);
    return el;
  }

  floors.forEach((f, i) => {
    markers.push({
      kind: 'floor',
      floor: i,
      id: f.id,
      el: makeMarker('floor', floorInfo[i].name, () => onSelectFloor(f.id)),
      anchor: new Vector3(),
      corner: true,
    });
  });
  Object.entries(roomInfo).forEach(([id, info]) => {
    const r = ROOMS[id];
    if (!r) return;
    markers.push({
      kind: 'room',
      floor: r.floor,
      id,
      el: makeMarker('room', info.name, () => onSelectRoom(id)),
      local: [(r.x0 + r.x1) / 2, 1.8, (r.z0 + r.z1) / 2],
      anchor: new Vector3(),
    });
  });
  markers.push({
    kind: 'here',
    floor: 0,
    id: 'here',
    el: makeMarker('here', hereLabel, () => onSelectFloor(floors[0].id)),
    // 알약은 기둥 밑동 아래(마당 쪽)에 먼저 단다 — 위에 달면 회전 중 2층 바닥 위에 놓여 2층으로 읽혔다.
    // 아래 자리가 버튼·장면 끝에 막히면 기둥 머리 위에 단다
    local: [CORE.here[0], -0.32, CORE.here[1]],
    localTop: [CORE.here[0], 0.9, CORE.here[1]],
    anchor: new Vector3(),
    anchorTop: new Vector3(),
    below: true,
  });
  floors.forEach((f, i) => {
    const types = ['stairs', 'elevator'];
    if (RESTROOM_FLOORS.includes(i)) types.push('restroom');
    if (i === 0) types.push('info');
    types.forEach((type) => {
      const el = document.createElement('div');
      el.className = 'facility-badge is-hidden';
      el.innerHTML = iconSvg(type);
      labelLayer.append(el);
      markers.push({ kind: 'facility', floor: i, id: `${type}-${f.id}`, el, local: FACILITY_ANCHORS[type], anchor: new Vector3(), center: true });
    });
  });
  markers.forEach((m) => Object.assign(m, { occluded: false, shown: false, current: false, w: null, h: 0, boxW: 0, boxH: 0 }));

  let labelsEnabled = false;
  const projected = new Vector3();
  const rayDir = new Vector3();
  const raycaster = new Raycaster();
  let lastOcclusion = 0;
  const avoid = opts.avoid || [];
  const occluders = floors.flatMap((f) => (f.upper ? [f.body, f.upper] : [f.body]));
  const PRIORITY = { here: 1, floor: 2, room: 2, facility: 3 };

  function markerWanted(m) {
    if (m.kind === 'floor') return selFloor === null || (m.floor === selFloor && !selRoom);
    if (m.kind === 'room') return selFloor === m.floor;
    if (m.kind === 'here') return selFloor === null || selFloor === 0;
    return facilitiesOn && (selFloor === null || selFloor === m.floor);
  }

  function updateAnchors() {
    // 층 표지는 카메라에 가장 가까운 층 모서리에 붙인다 — 회전해도 앞쪽에 남는다(설계서 3-3절)
    const sx = Math.sign(camera.position.x) || 1;
    const sz = Math.sign(camera.position.z) || 1;
    markers.forEach((m) => {
      const fy = floors[m.floor].y;
      if (m.corner) m.anchor.set(sx * (HALF_W + 0.15), fy + 0.05, sz * (HALF_D + 0.15));
      else m.anchor.set(m.local[0], fy + m.local[1], m.local[2]);
      if (m.localTop) m.anchorTop.set(m.localTop[0], fy + m.localTop[1], m.localTop[2]);
    });
  }

  function updateLabels(now) {
    if (!labelsEnabled) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const checkOcclusion = now - lastOcclusion > 120;
    if (checkOcclusion) lastOcclusion = now;
    markers.forEach((m) => {
      if (m.w === null) {
        const box = m.center ? m.el : m.el.firstElementChild;
        m.w = m.el.offsetWidth;
        m.h = m.el.offsetHeight;
        m.boxW = box.offsetWidth;
        m.boxH = box.offsetHeight;
      }
    });
    const base = container.getBoundingClientRect();
    const blocked = avoid
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top }));
    const edge = 4;
    const hit = (a, b) => a.l < b.r + edge && a.r > b.l - edge && a.t < b.b + edge && a.b > b.t - edge;
    // 알약 표지는 상자 아래 끝이 y, 아이콘은 가운데가 y
    const visualBox = (m, x, y) => {
      const cy = m.center ? y : y - m.h / 2;
      return { l: x - m.boxW / 2, r: x + m.boxW / 2, t: cy - m.boxH / 2, b: cy + m.boxH / 2 };
    };
    updateAnchors();
    const inset = frame.insetLeft;

    const items = markers.map((m) => {
      const wanted = markerWanted(m);
      if (wanted && checkOcclusion) {
        rayDir.subVectors(m.anchor, camera.position);
        const distance = rayDir.length();
        raycaster.set(camera.position, rayDir.normalize());
        raycaster.far = distance;
        const hits = raycaster.intersectObjects(occluders, false);
        m.occluded = hits.length > 0 && hits[0].distance < distance - 0.6;
      }
      projected.copy(m.anchor).project(camera);
      const rawX = (projected.x * 0.5 + 0.5) * w;
      const rawY = (-projected.y * 0.5 + 0.5) * h;
      const onScreen = projected.z < 1 && rawX > inset && rawX < w && rawY > 0 && rawY < h;
      const half = m.w / 2;
      const minX = inset + half + edge;
      const x = clamp(rawX, minX, Math.max(minX, w - half - edge));
      const lowY = m.center ? m.h / 2 + edge : m.h + edge;
      const y = clamp(rawY, lowY, Math.max(lowY, h - edge - (m.center ? m.h / 2 : 0)));
      const depth = projected.z;
      let yTop = y;
      if (m.anchorTop) {
        projected.copy(m.anchorTop).project(camera);
        yTop = clamp((-projected.y * 0.5 + 0.5) * h, m.h + edge, Math.max(m.h + edge, h - edge));
      }
      return { m, x, y: m.below ? rawY : y, yTop, depth, candidate: wanted && onScreen && !m.occluded };
    });

    // 고른 것, 지금 여기, 층·전시실, 편의시설 순으로 자리를 준다. 같은 순위는 가까운 것부터.
    // 장면 위 버튼이나 먼저 놓인 표지와 겹치면 숨긴다. 고른 표지는 버튼을 비켜 위아래로 옮겨 본다.
    const rank = (m) => (m.current ? 0 : PRIORITY[m.kind]);
    items.sort((a, b) => rank(a.m) - rank(b.m) || a.depth - b.depth);
    const placed = [];
    const free = (box) => !blocked.some((r) => hit(box, r)) && !placed.some((p) => hit(box, p));
    items.forEach((it) => {
      let { y } = it;
      let show = it.candidate;
      let shift = it.m.center ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)';
      if (it.m.below) {
        // 아래에 달기(상자 위 끝이 y) → 막히면 기둥 머리 위에 달기
        const below = { l: it.x - it.m.boxW / 2, r: it.x + it.m.boxW / 2, t: y + (it.m.h - it.m.boxH) / 2, b: y + (it.m.h + it.m.boxH) / 2 };
        const fitsBelow = y + it.m.h <= h - edge;
        if (show && fitsBelow && free(below)) {
          placed.push(below);
          shift = 'translate(-50%, 0)';
        } else {
          y = it.yTop;
          const above = visualBox(it.m, it.x, y);
          if (show && free(above)) placed.push(above);
          else show = false;
        }
      } else if (show) {
        let box = visualBox(it.m, it.x, y);
        const block = it.m.current && blocked.find((r) => hit(box, r));
        if (block) {
          y += block.t > h / 2 ? block.t - edge * 2 - box.b : block.b + edge * 2 - box.t;
          y = clamp(y, it.m.h + edge, Math.max(it.m.h + edge, h - edge));
          box = visualBox(it.m, it.x, y);
        }
        if (free(box)) placed.push(box);
        else show = false;
      }
      it.m.el.style.transform = `translate3d(${it.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) ${shift}`;
      if (show !== it.m.shown) {
        it.m.shown = show;
        it.m.el.classList.toggle('is-hidden', !show);
      }
    });
  }

  function syncMarkerState() {
    markers.forEach((m) => {
      const current = (m.kind === 'room' && m.id === selRoom) || (m.kind === 'floor' && m.floor === selFloor && !selRoom);
      if (current !== m.current) {
        m.current = current;
        m.el.classList.toggle('is-current', current);
        m.w = null;
      }
    });
  }

  /* ---------- 그리기 ---------- */

  let sceneTime = POSTER_TIME;
  let raf = 0;
  let last = 0;
  let visible = !document.hidden;
  let inView = true;
  let lost = false;
  let disposed = false;
  const perf = { warmUntil: 0, frames: 0, total: 0, prev: 0 };

  const shouldAnimate = () => motion && !poster;

  function requestRender() {
    if (!raf && visible && inView && !lost && !disposed) raf = requestAnimationFrame(drawFrame);
  }

  function samplePerformance(now, continuous) {
    if (!continuous || quality !== 'high' || poster || opts.quality) {
      perf.warmUntil = 0;
      perf.prev = 0;
      return;
    }
    if (!perf.warmUntil) {
      Object.assign(perf, { warmUntil: now + QUALITY.warmupMs, frames: 0, total: 0, prev: now });
      return;
    }
    const delta = now - perf.prev;
    perf.prev = now;
    if (now < perf.warmUntil) return;
    perf.frames += 1;
    perf.total += delta;
    if (perf.total >= QUALITY.sampleWindowMs) {
      if (perf.total / perf.frames > QUALITY.slowFrameMs) setQuality('low');
      perf.frames = 0;
      perf.total = 0;
    }
  }

  function drawFrame(now) {
    raf = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    const animating = shouldAnimate();
    if (animating) {
      sceneTime += dt;
      // 자동 회전: 처음 들어와 아무것도 고르기 전에만, 사용자가 조작하면 끈다
      if (!userInteracted && !reduced && !camTween && selFloor === null) cam.az += (dt / PERIOD.autoRotate) * TAU;
    }
    stepCameraTween(now);
    stepLayoutTween(now);
    updateElevator(sceneTime);
    updateVisitors(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || layoutTween) requestRender();
    else last = 0;
  }

  /* ---------- 크기 ---------- */

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(pixelRatio());
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    let rect;
    let k;
    if (poster) {
      // 포스터 촬영: 캔버스 = 포스터 크기. 중심점을 가운데 두고 POSTER_WINDOW 범위를 꽉 채운다
      rect = { cx: w / 2, cy: h / 2, width: w, height: h };
      k = Math.min(w / (2 * POSTER_WINDOW.tx), h / (2 * POSTER_WINDOW.ty));
    } else {
      const r = getFreeRect();
      rect = { cx: (r.left + r.right) / 2, cy: (r.top + r.bottom) / 2, width: Math.max(40, r.right - r.left), height: Math.max(40, r.bottom - r.top) };
      k = homeScale(rect);
      frame.insetLeft = r.insetLeft || 0;
    }
    frame = { ...frame, rect, k };
    // 화면 크기 차이는 시야 배율과 시야 이동으로만 맞춘다. 카메라 위치는 그대로다(설계서 3-2절)
    camera.zoom = zoomFor(k, h);
    camera.setViewOffset(w, h, w / 2 - rect.cx, h / 2 - rect.cy, w, h);
    camera.updateProjectionMatrix();
    minDist = closestDistance(k, rect);
    maxDist = HOME.distance * CAMERA.maxDistanceFactor;
    markers.forEach((m) => {
      m.w = null;
    });
    if (fitted) {
      const v = viewFor();
      if (camTween) {
        camTween.to.dist = v.dist;
        camTween.to.target.copy(v.target);
      } else {
        cam.dist = v.dist;
        cam.target.copy(v.target);
        // 처음 시점의 자동 회전 방위는 그대로 둔다
        if (selFloor !== null || userInteracted) {
          cam.az = v.az;
          cam.el = v.el;
        }
      }
    } else {
      cam.dist = clampDist(cam.dist);
    }
    last = 0;
    requestRender();
  }

  /* ---------- 입력 ---------- */

  const listeners = new AbortController();
  const { signal } = listeners;
  const pointers = new Map();
  let pinch = null;

  const pinchState = () => {
    const [a, b] = [...pointers.values()];
    return { d: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)), my: (a.y + b.y) / 2 };
  };

  canvas.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      interact();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
      if (e.pointerType === 'mouse') canvas.setPointerCapture(e.pointerId);
      pinch = pointers.size === 2 ? pinchState() : null;
    },
    { signal },
  );

  canvas.addEventListener(
    'pointermove',
    (e) => {
      const p = pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      const speed = Math.PI / Math.max(320, container.clientHeight);
      if (pointers.size === 1) {
        cam.az -= dx * speed * 1.3;
        if (p.type === 'mouse' || isWide()) cam.el = clamp(cam.el + dy * speed, elMin, elMax);
      } else if (pointers.size === 2 && pinch) {
        const s = pinchState();
        cam.dist = clampDist(cam.dist * (pinch.d / s.d));
        cam.el = clamp(cam.el + (s.my - pinch.my) * speed, elMin, elMax);
        pinch = s;
      }
      requestRender();
    },
    { signal },
  );

  const release = (e) => {
    pointers.delete(e.pointerId);
    pinch = pointers.size === 2 ? pinchState() : null;
  };
  canvas.addEventListener('pointerup', release, { signal });
  canvas.addEventListener('pointercancel', release, { signal });

  canvas.addEventListener(
    'wheel',
    (e) => {
      if (!isWide()) return;
      e.preventDefault();
      interact();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      cam.dist = clampDist(cam.dist * Math.exp(delta * 0.0012));
      requestRender();
    },
    { passive: false, signal },
  );

  canvas.addEventListener(
    'webglcontextlost',
    (e) => {
      e.preventDefault();
      lost = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      onContextLost();
    },
    { signal },
  );
  canvas.addEventListener(
    'webglcontextrestored',
    () => {
      lost = false;
      last = 0;
      requestRender();
      onContextRestored();
    },
    { signal },
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      visible = !document.hidden;
      last = 0;
      requestRender();
    },
    { signal },
  );

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(container);
  const viewObserver = new IntersectionObserver((entries) => {
    inView = entries.some((entry) => entry.isIntersecting);
    last = 0;
    requestRender();
  });
  viewObserver.observe(container);
  wideQuery.addEventListener('change', () => resize(), { signal });

  floors.forEach((f) => Object.assign(f, floorTarget(f.index)));
  applyLayout();
  resize();

  /* 첫 프레임을 그린 뒤 돌려준다 */
  await new Promise((resolve) => {
    requestAnimationFrame((now) => {
      drawFrame(now);
      resolve();
    });
  });
  labelsEnabled = true;

  /* ---------- 바깥에서 쓰는 기능 ---------- */

  const floorIndex = (id) => floors.findIndex((f) => f.id === id);

  return {
    canvas,
    /** 장면 크기는 같아도 패널·버튼 묶음 크기가 바뀌면(글자 확대 등) 다시 맞춘다 */
    relayout() {
      resize();
    },
    /** 층(id)·전시실(id)을 고른다. 둘 다 null 이면 고르기 전 */
    setSelection(floorId, roomId, animate = true) {
      const nextFloor = floorId === null ? null : floorIndex(floorId);
      const nextRoom = roomId && ROOMS[roomId] ? roomId : null;
      if (nextFloor === selFloor && nextRoom === selRoom) return;
      if (nextFloor !== null || nextRoom) interact();
      selFloor = nextFloor < 0 ? null : nextFloor;
      selRoom = nextRoom;
      placeOutline();
      syncMarkerState();
      setLayout(animate);
      goToView(animate);
    },
    /** 처음 시점 — 고르기를 풀고 지금 보는 방식의 처음 시점으로 */
    reset(animate = true) {
      selFloor = null;
      selRoom = null;
      placeOutline();
      syncMarkerState();
      setLayout(animate);
      camTween = null;
      goToView(animate);
    },
    setView(mode, animate = true) {
      if (mode === viewMode) return;
      viewMode = mode;
      canvas.setAttribute('aria-label', canvasLabel(viewMode));
      setLayout(animate);
      if (fitted) goToView(animate);
      else requestRender();
    },
    setFacilities(on) {
      facilitiesOn = on;
      requestRender();
    },
    rotateStep(direction) {
      interact();
      startCameraTween({ az: cam.az + direction * CAMERA.stepRotate * DEG }, durations.cameraStep);
    },
    zoomStep(direction) {
      interact();
      const factor = direction > 0 ? CAMERA.stepZoom : 1 / CAMERA.stepZoom;
      startCameraTween({ dist: clampDist(cam.dist * factor) }, durations.cameraStep);
    },
    setMotion(on) {
      motion = on;
      last = 0;
      requestRender();
    },
    setReduced(on) {
      reduced = on;
      requestRender();
    },
    loseContextForTest() {
      renderer.forceContextLoss();
    },
    get quality() {
      return quality;
    },
    /** 검수용 — 지금 시점 값 */
    cameraState() {
      return {
        azimuth: cam.az / DEG,
        elevation: cam.el / DEG,
        distance: cam.dist,
        minDistance: minDist,
        maxDistance: maxDist,
        zoom: camera.zoom,
        k: frame.k,
        rect: frame.rect,
        target: cam.target.toArray(),
        tweening: Boolean(camTween || layoutTween),
      };
    },
    stats() {
      return {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        quality,
        pixelRatio: renderer.getPixelRatio(),
        visitors: floors.reduce((n, f) => n + f.visitors.count, 0),
        markers: markers.filter((m) => m.shown).map((m) => m.id),
      };
    },
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      listeners.abort();
      resizeObserver.disconnect();
      viewObserver.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      canvas.remove();
      markers.forEach((m) => m.el.remove());
    },
  };
}
