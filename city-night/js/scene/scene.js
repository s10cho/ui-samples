/*
 * 3D 장면 — 강을 낀 작은 도시 (설계서 3-1·3-2·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영.
 * 건물·창문·가로등·나무·차·전구처럼 많이 반복되는 것은 InstancedMesh 로 종류마다 한 번에 그린다.
 */
import {
  AdditiveBlending,
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Fog,
  Group,
  HemisphereLight,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Raycaster,
  Scene,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { BREAKPOINT, CAMERA, PERIOD, QUALITY, SCENE_COLOR, SCENE_LIGHT } from '../tokens.js';
import { fitDistance, posterDistance } from '../framing.js';

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const UP = new Vector3(0, 1, 0);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/** 같은 도시 모양이 매번 나오도록 고정 씨앗 난수를 쓴다 */
function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- 도시 배치 — x 는 동쪽, z 는 남쪽이 + ---------- */

const RIVER = { base: -1.0, amp: 0.7, k: 0.12, phase: 0.4, half: 2.4, water: -1.1, wallBottom: -1.6 };
const riverZ = (x) => RIVER.base + RIVER.amp * Math.sin(RIVER.k * x + RIVER.phase);
const southEdge = (x) => riverZ(x) + RIVER.half;
const northEdge = (x) => riverZ(x) - RIVER.half;
/** 둑에서 산책로(0.8)·강변 도로(1.4)를 지나 건물이 설 수 있는 곳까지 */
const STREET = { promenade: 0.8, road: 1.4 };
const LOT_GAP = STREET.promenade + STREET.road + 0.2;
const FAR = 260;

const AVENUE = { x0: 0.2, x1: 1.8, mid: 1.0 };
const SOUTH_ROAD = { z0: 9.0, z1: 10.4 };
const RAIL = { z0: 7.0, z1: 8.2, rails: [7.35, 7.85], end: -4.4 };
const STATION = { x0: -11.8, x1: -4.8, z0: 4.1, z1: 6.3, h: 1.7 };
const PLATFORM = { z0: 6.3, z1: 6.95 };
const CLOCK = { x: -3.7, z: 4.8, w: 1.0, h: 4.4 };
const MARKET = { x0: 3.2, x1: 10.8, rowN: [4.4, 5.5], rowS: [6.7, 7.8] };
const ALLEY_Z = (MARKET.rowN[1] + MARKET.rowS[0]) / 2;
const PARK = { x0: -2.6, x1: 5.4, z0: 10.9, z1: 16.6 };
const FOUNTAIN = { x: 1.4, z: 13.35 };
const HILL = { x: -5.2, z: -11.2, r: 3.4, h: 1.0 };
const TOWER = { x: HILL.x, z: HILL.z, base: HILL.h, deck: 9.6, top: 13.6 };
const BRIDGE = {
  x: AVENUE.mid,
  deckY: 0.04,
  south: southEdge(AVENUE.mid),
  north: northEdge(AVENUE.mid),
  mid: riverZ(AVENUE.mid),
  rise: 2.6,
};

/** 명소마다 표지 위치와 고를 때의 시점 */
const LANDMARK_3D = {
  tower: { anchor: [TOWER.x, TOWER.base + TOWER.top + 0.9, TOWER.z], target: [TOWER.x, 7.6, TOWER.z], distance: 36, azimuth: 18, elevation: 14 },
  bridge: { anchor: [BRIDGE.x, BRIDGE.rise + 1.0, BRIDGE.mid], target: [BRIDGE.x, 0.6, BRIDGE.mid], distance: 19, azimuth: 52, elevation: 28 },
  station: { anchor: [CLOCK.x, CLOCK.h + 1.7, CLOCK.z], target: [-6.4, 1.4, 5.5], distance: 21, azimuth: 18, elevation: 30 },
  market: { anchor: [7.0, 2.7, ALLEY_Z], target: [7.0, 0.5, ALLEY_Z], distance: 16, azimuth: 78, elevation: 40 },
  fountain: { anchor: [FOUNTAIN.x, 2.4, FOUNTAIN.z], target: [FOUNTAIN.x, 0.6, FOUNTAIN.z - 0.8], distance: 15, azimuth: 8, elevation: 36 },
};

const HOME_TARGET = new Vector3(0.0, 1.8, 1.2);
/** 포스터를 찍는 장면 시각. 실시간 장면도 같은 시각에서 시작해 교체할 때 차·배 위치가 튀지 않는다(설계서 3-2절) */
const POSTER_TIME = 7.4;

const inRect = (x, z, r, x0, x1, z0, z1) => x + r > x0 && x - r < x1 && z + r > z0 && z - r < z1;

/** 건물을 세우면 안 되는 곳 — 강·둑·길·기찻길·명소 자리 */
function blockedLot(x, z, r) {
  const rz = riverZ(x);
  if (z + r > rz - RIVER.half - LOT_GAP && z - r < rz + RIVER.half + LOT_GAP) return true;
  if (z - r < SOUTH_ROAD.z1 && x + r > AVENUE.x0 - 0.45 && x - r < AVENUE.x1 + 0.45) return true;
  if (z + r > SOUTH_ROAD.z0 - 0.35 && z - r < SOUTH_ROAD.z1 + 0.35) return true;
  if (x - r < RAIL.end + 0.6 && z + r > RAIL.z0 - 0.25 && z - r < RAIL.z1 + 0.25) return true;
  if (inRect(x, z, r, STATION.x0 - 0.5, CLOCK.x + CLOCK.w / 2 + 0.4, STATION.z0 - 0.3, PLATFORM.z1 + 0.2)) return true;
  if (inRect(x, z, r, MARKET.x0 - 0.3, MARKET.x1 + 0.3, MARKET.rowN[0] - 0.3, MARKET.rowS[1] + 0.3)) return true;
  if (inRect(x, z, r, PARK.x0 - 0.4, PARK.x1 + 0.4, PARK.z0 - 0.4, PARK.z1 + 0.4)) return true;
  return Math.hypot(x - HILL.x, z - HILL.z) < HILL.r + 0.4 + r;
}

/** 처음 시점이 담는 블록(명소가 있는 곳). 그 밖은 안개 속으로 이어지는 낮은 건물이다 */
const inCore = (x, z) => Math.abs(x) <= 15.5 && z >= -16.5 && z <= 17.5;

/* ---------- 도형 도우미 ---------- */

function geometryFrom(positions) {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(positions, 3));
  g.computeVertexNormals();
  return g;
}

/** 삼각형 하나를 원하는 쪽(want)을 보게 넣는다 */
function pushTri(out, a, b, c, want) {
  const ux = b[0] - a[0];
  const uy = b[1] - a[1];
  const uz = b[2] - a[2];
  const vx = c[0] - a[0];
  const vy = c[1] - a[1];
  const vz = c[2] - a[2];
  const n = [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
  if (n[0] * want[0] + n[1] * want[1] + n[2] * want[2] < 0) out.push(...a, ...c, ...b);
  else out.push(...a, ...b, ...c);
}

function pushQuad(out, a, b, c, d, want) {
  pushTri(out, a, b, c, want);
  pushTri(out, a, c, d, want);
}

/** 강을 따라 굽은 띠(강변 도로 등) — 둑에서 from~to 만큼 떨어진 곳 */
function bankStrip(xs, edge, from, to, y, side) {
  const out = [];
  for (let i = 0; i < xs.length - 1; i += 1) {
    const [x0, x1] = [xs[i], xs[i + 1]];
    const e0 = edge(x0);
    const e1 = edge(x1);
    pushQuad(
      out,
      [x0, y, e0 + side * from],
      [x1, y, e1 + side * from],
      [x1, y, e1 + side * to],
      [x0, y, e0 + side * to],
      [0, 1, 0],
    );
  }
  return geometryFrom(out);
}

/** 두 점을 잇는 원기둥(기둥·다리 줄) */
function beam(from, to, radius, material, segments = 6) {
  const dir = new Vector3().subVectors(to, from);
  const length = dir.length();
  const mesh = new Mesh(new CylinderGeometry(radius, radius, length, segments, 1), material);
  mesh.position.copy(from).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
  return mesh;
}

function box(w, h, d, material) {
  return new Mesh(new BoxGeometry(w, h, d), material);
}

/** 네모뿔 지붕 */
function pyramid(radius, height, material) {
  const mesh = new Mesh(new ConeGeometry(radius, height, 4, 1), material);
  mesh.rotation.y = Math.PI / 4;
  return mesh;
}

/** 박공지붕(세모 기둥) — x 방향으로 길이 1, 밑변 폭 1, 높이 1, 밑면이 y=0 */
function gableGeometry() {
  const R = 1 / Math.sqrt(3);
  return new CylinderGeometry(R, R, 1, 3, 1)
    .rotateZ(Math.PI / 2)
    .rotateX(-Math.PI / 2)
    .translate(0, R / 2, 0)
    .scale(1, 1 / (1.5 * R), 1);
}

/**
 * 같은 모양을 여러 번 그리는 묶음. 넣은 뒤 build() 로 InstancedMesh 를 만든다.
 * 항목마다 블록 가운데에서의 거리(r)를 받아, 낮은 품질에서는 먼 것부터 그리지 않는다.
 */
function instances(geometry, material, { colors = false } = {}) {
  const items = [];
  const dummy = new Object3D();
  return {
    items,
    add(item) {
      items.push(item);
    },
    build(lowRadius) {
      items.sort((a, b) => a.r - b.r);
      const mesh = new InstancedMesh(geometry, material, Math.max(1, items.length));
      items.forEach((it, i) => {
        dummy.position.set(it.x, it.y, it.z);
        dummy.rotation.set(0, it.ry || 0, 0);
        dummy.scale.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        if (colors) mesh.setColorAt(i, new Color(it.color));
      });
      mesh.count = items.length;
      mesh.userData.full = items.length;
      mesh.userData.low = items.filter((it) => it.r <= lowRadius).length;
      return mesh;
    },
  };
}

/** 가로등 아래 빛 — 가운데가 밝고 가장자리로 갈수록 옅어지는 원판(가산 혼합) */
function poolGeometry() {
  const g = new CircleGeometry(1, 16).rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  const fade = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i += 1) {
    const k = Math.pow(1 - Math.min(1, Math.hypot(pos.getX(i), pos.getZ(i))), 1.5);
    fade.set([k, k, k], i * 3);
  }
  g.setAttribute('color', new Float32BufferAttribute(fade, 3));
  return g;
}

/* ---------- 물결 ---------- */

const WAVE = { amp: 0.045, kx: 0.5, kz: 0.9 };

function waveHeight(x, z, t) {
  const w = TAU / PERIOD.wave;
  return WAVE.amp * 0.5 * (Math.sin(x * WAVE.kx + t * w) + Math.sin(z * WAVE.kz - t * w * 0.8 + 1.3));
}

/* ---------- 장면 만들기 ---------- */

export async function createScene(opts) {
  const {
    container,
    labelLayer,
    landmarks,
    canvasLabel,
    getInsetLeft = () => 0,
    durations,
    onSelect = () => {},
    onInteract = () => {},
    onZoomLimits = () => {},
    onContextLost = () => {},
    onContextRestored = () => {},
  } = opts;

  const poster = Boolean(opts.poster);
  const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);
  const isWide = () => wideQuery.matches;

  let quality = opts.quality || (poster || isWide() ? 'high' : 'low');
  let motion = opts.motion !== false;
  let reduced = Boolean(opts.reduced);
  let time = opts.time === 'night' ? 'night' : 'dusk';

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(time));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    powerPreference: 'high-performance',
  });
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  const fog = new Fog(SCENE_COLOR.dusk.sky, 60, 200);
  scene.fog = fog;
  scene.background = new Color(SCENE_COLOR.dusk.sky);

  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 3000);

  /* 재질 */
  const lambert = (color, extra = {}) => new MeshLambertMaterial({ color, flatShading: true, ...extra });
  const basic = (color, extra = {}) => new MeshBasicMaterial({ color, ...extra });
  const mat = {
    pavement: lambert(SCENE_COLOR.pavement),
    road: lambert(SCENE_COLOR.road, { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
    grass: lambert(SCENE_COLOR.grass, { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
    path: lambert(SCENE_COLOR.pavement, { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    tree: lambert(SCENE_COLOR.tree),
    trunk: lambert(SCENE_COLOR.trunk),
    stone: lambert(SCENE_COLOR.stone),
    roof: lambert(SCENE_COLOR.instanceBase), // 지붕마다 색을 따로 준다(instanceColor)
    structure: lambert(SCENE_COLOR.structure),
    accent: lambert(SCENE_COLOR.accent),
    wall: lambert(SCENE_COLOR.instanceBase), // 건물마다 색을 따로 준다(instanceColor)
    car: lambert(SCENE_COLOR.instanceBase),
    carGlass: lambert(SCENE_COLOR.carGlass),
    bulb: lambert(SCENE_COLOR.structure, { emissive: SCENE_COLOR.bulb, emissiveIntensity: 0 }),
    clock: lambert(SCENE_COLOR.clockFace, { emissive: SCENE_COLOR.clockGlow, emissiveIntensity: 0 }),
    jet: lambert(SCENE_COLOR.fountain, { emissive: SCENE_COLOR.bulb, emissiveIntensity: 0, transparent: true, opacity: 0.7 }),
    water: new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    farWater: lambert(SCENE_COLOR.dusk.riverDeep),
    pondWater: lambert(SCENE_COLOR.dusk.riverDeep),
    windowEarly: basic(SCENE_COLOR.window.early[0]),
    windowLate: basic(SCENE_COLOR.window.late[0]),
    windowOff: basic(SCENE_COLOR.window.off[0]),
    headlight: basic(SCENE_COLOR.headlight[0]),
    taillight: basic(SCENE_COLOR.taillight[0]),
    beacon: basic(SCENE_COLOR.beacon),
    pool: basic(SCENE_COLOR.bulb, { vertexColors: true, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }),
    blob: basic(SCENE_COLOR.shadow, { transparent: true, opacity: 0.16, depthWrite: false }),
  };

  const dummy = new Object3D();
  const occluders = [];
  const casters = [];
  const blobs = new Group();
  scene.add(blobs);
  const rand = seeded(11);

  const addBlob = (x, z, r) => {
    const m = new Mesh(new CircleGeometry(r, 12).rotateX(-Math.PI / 2), mat.blob);
    m.position.set(x, 0.03, z);
    blobs.add(m);
  };

  /* ---------- 빛 ---------- */

  const hemi = new HemisphereLight(SCENE_COLOR.dusk.hemiSky, SCENE_COLOR.dusk.ground, SCENE_LIGHT.dusk.hemi);
  scene.add(hemi);

  const SUN_POS = new Vector3(-26, 10.5, 9);
  const MOON_POS = new Vector3(-12, 26, -16);
  const key = new DirectionalLight(SCENE_COLOR.dusk.keyLight, SCENE_LIGHT.dusk.key);
  key.position.copy(SUN_POS);
  key.shadow.mapSize.set(QUALITY.shadowMapSize, QUALITY.shadowMapSize);
  Object.assign(key.shadow.camera, { left: -21, right: 21, top: 21, bottom: -21, near: 1, far: 90 });
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.03;
  scene.add(key, key.target);

  // 밤의 실제 점광원은 둘뿐이다(설계서 4-2절): 시장 골목, 아치 다리
  const marketLight = new PointLight(SCENE_COLOR.bulb, 0, 9, 2);
  marketLight.position.set((MARKET.x0 + MARKET.x1) / 2, 1.9, ALLEY_Z);
  const bridgeLight = new PointLight(SCENE_COLOR.bulb, 0, 9, 2);
  bridgeLight.position.set(BRIDGE.x, 1.6, BRIDGE.mid);
  scene.add(marketLight, bridgeLight);

  /* ---------- 땅과 둑 ---------- */

  const xs = [-FAR, -200, -140, -100, -70, -50];
  for (let x = -45; x <= 45.001; x += 1.5) xs.push(x);
  xs.push(50, 70, 100, 140, 200, FAR);

  const groundTris = [];
  const wallTris = [];
  for (let i = 0; i < xs.length - 1; i += 1) {
    const [x0, x1] = [xs[i], xs[i + 1]];
    const s0 = southEdge(x0);
    const s1 = southEdge(x1);
    const n0 = northEdge(x0);
    const n1 = northEdge(x1);
    pushQuad(groundTris, [x0, 0, s0], [x1, 0, s1], [x1, 0, FAR], [x0, 0, FAR], [0, 1, 0]);
    pushQuad(groundTris, [x0, 0, -FAR], [x1, 0, -FAR], [x1, 0, n1], [x0, 0, n0], [0, 1, 0]);
    const b = RIVER.wallBottom;
    pushQuad(wallTris, [x0, 0, s0], [x1, 0, s1], [x1, b, s1], [x0, b, s0], [0, 0, -1]);
    pushQuad(wallTris, [x0, 0, n0], [x1, 0, n1], [x1, b, n1], [x0, b, n0], [0, 0, 1]);
  }
  const ground = new Mesh(geometryFrom(groundTris), mat.pavement);
  const walls = new Mesh(geometryFrom(wallTris), mat.stone);
  ground.receiveShadow = true;
  walls.receiveShadow = true;
  scene.add(ground, walls);
  occluders.push(ground);

  /* 길 — 강변 도로 둘, 남북 큰길, 남쪽 동서 도로 */
  const nearXs = xs.filter((x) => Math.abs(x) <= 70);
  const roads = new Group();
  roads.add(
    new Mesh(bankStrip(nearXs, southEdge, STREET.promenade, STREET.promenade + STREET.road, 0.012, 1), mat.road),
    new Mesh(bankStrip(nearXs, northEdge, STREET.promenade, STREET.promenade + STREET.road, 0.012, -1), mat.road),
  );
  const flatRect = (x0, x1, z0, z1, material, y = 0.012) => {
    const m = new Mesh(new PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2), material);
    m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    m.userData.flat = true;
    return m;
  };
  roads.add(
    flatRect(-70, 70, SOUTH_ROAD.z0, SOUTH_ROAD.z1, mat.road),
    flatRect(AVENUE.x0, AVENUE.x1, southEdge(AVENUE.mid) + STREET.promenade, SOUTH_ROAD.z0, mat.road),
    flatRect(AVENUE.x0, AVENUE.x1, -70, northEdge(AVENUE.mid) - STREET.promenade, mat.road),
  );
  roads.traverse((m) => {
    m.receiveShadow = true;
  });
  scene.add(roads);

  /* ---------- 강 ---------- */

  const riverSeg = quality === 'high' ? QUALITY.riverSegmentsHigh : QUALITY.riverSegmentsLow;
  const RIVER_SPAN = { x: 120, z: 7.8, cz: RIVER.base - 0.4 };
  const waterGeometry = new PlaneGeometry(RIVER_SPAN.x, RIVER_SPAN.z, riverSeg[0], riverSeg[1])
    .rotateX(-Math.PI / 2)
    .translate(0, 0, RIVER_SPAN.cz);
  const waterPos = waterGeometry.attributes.position;
  const waterBase = new Float32Array(waterPos.count * 2);
  const waterDepth = new Float32Array(waterPos.count);
  for (let i = 0; i < waterPos.count; i += 1) {
    const x = waterPos.getX(i);
    const z = waterPos.getZ(i);
    waterBase[i * 2] = x;
    waterBase[i * 2 + 1] = z;
    waterDepth[i] = 1 - clamp(Math.abs(z - riverZ(x)) / RIVER.half, 0, 1);
  }
  waterGeometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(waterPos.count * 3), 3));
  const water = new Mesh(waterGeometry, mat.water);
  water.position.y = RIVER.water;
  water.receiveShadow = true;
  scene.add(water);

  const farWater = new Mesh(new PlaneGeometry(FAR * 2, RIVER_SPAN.z).rotateX(-Math.PI / 2), mat.farWater);
  farWater.position.set(0, RIVER.water - 0.08, RIVER_SPAN.cz);
  scene.add(farWater);

  const updateWaves = (t) => {
    for (let i = 0; i < waterPos.count; i += 1) {
      waterPos.setY(i, waveHeight(waterBase[i * 2], waterBase[i * 2 + 1], t));
    }
    waterPos.needsUpdate = true;
  };

  /* 밤 불빛이 비친 강 — 불빛 가까운 물결 색을 데운다(따로 그리는 면이 없다) */
  const glowSpots = [
    [BRIDGE.x, BRIDGE.mid, 3.2],
    [7.0, southEdge(7.0) - 0.4, 3.0],
    [-8.0, southEdge(-8.0) - 0.4, 2.6],
    [8.0, northEdge(8.0) + 0.4, 2.8],
    [-10.0, northEdge(-10.0) + 0.4, 2.4],
  ];
  const waterGlow = new Float32Array(waterPos.count);
  for (let i = 0; i < waterPos.count; i += 1) {
    const x = waterBase[i * 2];
    const z = waterBase[i * 2 + 1];
    let g = 0;
    glowSpots.forEach(([gx, gz, r]) => {
      g += Math.exp(-((x - gx) ** 2 + (z - gz) ** 2) / (r * r));
    });
    waterGlow[i] = Math.min(1, g);
  }

  /* ---------- 반복 물체 묶음 ---------- */

  const unitBox = new BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const buildings = instances(unitBox, mat.wall, { colors: true });
  const fillerBuildings = instances(unitBox, mat.wall, { colors: true });
  const gable = gableGeometry();
  const roofs = instances(gable, mat.roof, { colors: true });
  const fillerRoofs = instances(gable, mat.roof, { colors: true });
  const rooftops = instances(unitBox, mat.structure);
  const windowGeometry = new PlaneGeometry(0.26, 0.32);
  const windows = {
    early: instances(windowGeometry, mat.windowEarly, { colors: true }),
    late: instances(windowGeometry, mat.windowLate, { colors: true }),
    off: instances(windowGeometry, mat.windowOff),
  };
  const bulbs = instances(new SphereGeometry(0.07, 6, 4), mat.bulb);
  const lampPoles = instances(new CylinderGeometry(0.035, 0.045, 1, 5).translate(0, 0.5, 0), mat.stone);
  const lampHeads = instances(new SphereGeometry(0.1, 6, 4), mat.bulb);
  const pools = instances(poolGeometry(), mat.pool);
  const crowns = instances(new ConeGeometry(0.5, 1.3, 6).translate(0, 0.65, 0), mat.tree);
  const trunks = instances(new CylinderGeometry(0.08, 0.1, 1, 5).translate(0, 0.5, 0), mat.trunk);

  const WIN = { colStep: 0.52, floorStep: 0.62, base: 0.42 };
  const warmTints = SCENE_COLOR.windowTints;

  /** 상자 건물의 네 면에 창문을 단다. 켜짐 무리는 확률로 고른다 */
  function addWindows(cx, cz, w, d, h, { r, early = 0.1, late = 0.5, skip = 0, base = WIN.base, faces = 'all' }) {
    const sides = [
      { nx: 0, nz: 1, width: w, ox: 0, oz: d / 2 },
      { nx: 0, nz: -1, width: w, ox: 0, oz: -d / 2 },
      { nx: 1, nz: 0, width: d, ox: w / 2, oz: 0 },
      { nx: -1, nz: 0, width: d, ox: -w / 2, oz: 0 },
    ].filter((s) => faces === 'all' || faces.includes(`${s.nx},${s.nz}`));
    // 창 가운데 = base + 0.2 + 층 × 0.62, 창 윗변이 지붕선보다 0.06 아래에 오는 층까지만 단다
    const floors = Math.floor((h - base - 0.42) / WIN.floorStep) + 1;
    if (floors < 1) return;
    sides.forEach((s) => {
      const cols = Math.max(1, Math.floor((s.width - 0.24) / WIN.colStep));
      for (let f = 0; f < floors; f += 1) {
        for (let c = 0; c < cols; c += 1) {
          if (rand() < skip) continue;
          const along = (c - (cols - 1) / 2) * WIN.colStep;
          const item = {
            x: cx + s.ox + s.nx * 0.012 + s.nz * along,
            y: base + 0.2 + f * WIN.floorStep,
            z: cz + s.oz + s.nz * 0.012 - s.nx * along,
            ry: Math.atan2(s.nx, s.nz),
            r,
            color: warmTints[Math.floor(rand() * warmTints.length)],
          };
          const k = rand();
          if (k < early) windows.early.add(item);
          else if (k < early + late) windows.late.add(item);
          else windows.off.add(item);
        }
      }
    });
  }

  /** 상자 건물 하나. roof: 박공지붕, top: 옥상 상자 */
  function addBuilding(set, x, z, w, d, h, { color, roof = false, top = false, win }) {
    const r = Math.hypot(x, z);
    set.add({ x, y: 0, z, sx: w, sy: h, sz: d, r, color });
    if (roof) {
      const alongX = w >= d;
      (set === fillerBuildings ? fillerRoofs : roofs).add({
        x,
        y: h,
        z,
        ry: alongX ? 0 : Math.PI / 2,
        sx: (alongX ? w : d) + 0.12,
        sy: Math.min(w, d) * 0.42,
        sz: (alongX ? d : w) + 0.14,
        r,
        color: SCENE_COLOR.roofs[rand() < 0.6 ? 0 : 1],
      });
    }
    if (top) {
      rooftops.add({ x: x + (rand() - 0.5) * w * 0.3, y: h, z: z + (rand() - 0.5) * d * 0.3, sx: w * 0.35, sy: 0.35, sz: d * 0.35, r });
    }
    addWindows(x, z, w, d, h, { r, ...win });
  }

  /* ---------- 블록 안 건물 ---------- */

  const wallColor = (warm) => {
    const palette = SCENE_COLOR.walls;
    const i = warm ? [0, 1, 3][Math.floor(rand() * 3)] : Math.floor(rand() * palette.length);
    return palette[i];
  };

  const STEP = 2.25;
  for (let gx = -15; gx <= 15.01; gx += STEP) {
    for (let gz = -16.5; gz <= 17.5; gz += STEP) {
      const x = gx + (rand() - 0.5) * 0.4;
      const z = gz + (rand() - 0.5) * 0.4;
      const w = 1.3 + rand() * 0.6;
      const d = 1.3 + rand() * 0.6;
      if (!inCore(x, z) || blockedLot(x, z, Math.max(w, d) / 2)) continue;
      const north = z < riverZ(x);
      if (north) {
        const h = Math.min(7.2, 2.6 + rand() * 3.0 + (x > 2 ? rand() * 1.8 : 0));
        addBuilding(buildings, x, z, w, d, h, { color: wallColor(false), top: rand() < 0.5, win: { early: 0.12, late: 0.56 } });
      } else {
        const h = 1.1 + rand() * 1.4;
        addBuilding(buildings, x, z, w, d, h, { color: wallColor(true), roof: rand() < 0.6, top: rand() < 0.3, win: { early: 0.1, late: 0.5, skip: 0.15 } });
      }
    }
  }

  /* ---------- 블록 밖 건물 — 안개 속까지 이어지는 낮은 시가지 ---------- */

  const FSTEP = 3.3;
  for (let gx = -QUALITY.fillerRadiusHigh; gx <= QUALITY.fillerRadiusHigh; gx += FSTEP) {
    for (let gz = -QUALITY.fillerRadiusHigh; gz <= QUALITY.fillerRadiusHigh; gz += FSTEP) {
      const x = gx + (rand() - 0.5) * 0.6;
      const z = gz + (rand() - 0.5) * 0.6;
      const w = 1.4 + rand() * 0.8;
      const d = 1.4 + rand() * 0.8;
      if (inCore(x, z) || Math.hypot(x, z) > QUALITY.fillerRadiusHigh) continue;
      if (rand() < 0.22 || blockedLot(x, z, Math.max(w, d) / 2)) continue;
      const north = z < riverZ(x);
      const h = north ? 1.4 + rand() * 2.8 : 0.8 + rand() * 1.3;
      addBuilding(fillerBuildings, x, z, w, d, h, {
        color: wallColor(!north),
        roof: !north && rand() < 0.45,
        win: { early: 0.1, late: 0.5, skip: 0.6 },
      });
    }
  }

  /* ---------- 아치 다리 ---------- */

  const bridge = (() => {
    const g = new Group();
    const length = BRIDGE.south - BRIDGE.north + 1.2;
    const deck = box(2.3, 0.3, length, mat.structure);
    deck.position.set(BRIDGE.x, BRIDGE.deckY - 0.15, (BRIDGE.south + BRIDGE.north) / 2);
    const lanes = box(1.6, 0.02, length, mat.road);
    lanes.position.set(BRIDGE.x, BRIDGE.deckY + 0.005, deck.position.z);
    g.add(deck, lanes);

    const span = (BRIDGE.south - BRIDGE.north) / 2;
    [-1.2, 1.2].forEach((dx) => {
      const x = BRIDGE.x + dx;
      const points = [];
      for (let i = 0; i <= 10; i += 1) {
        const u = i / 10;
        const z = lerp(BRIDGE.north, BRIDGE.south, u);
        const y = BRIDGE.deckY + BRIDGE.rise * (1 - ((z - BRIDGE.mid) / span) ** 2);
        points.push(new Vector3(x, y, z));
      }
      const curve = new CatmullRomCurve3(points);
      g.add(new Mesh(new TubeGeometry(curve, 28, 0.09, 5, false), mat.structure));
      // 다리 줄
      for (let i = 1; i < 8; i += 1) {
        const p = curve.getPointAt(i / 8);
        g.add(beam(new Vector3(x, BRIDGE.deckY, p.z), p, 0.022, mat.structure, 4));
      }
      // 밤에 켜지는 전구
      for (let i = 0; i <= 14; i += 1) {
        const p = curve.getPointAt(i / 14);
        bulbs.add({ x: p.x, y: p.y + 0.1, z: p.z, r: 0 });
      }
    });
    scene.add(g);
    return { group: g };
  })();

  /* ---------- 전망 타워 ---------- */

  (() => {
    const g = new Group();
    g.position.set(TOWER.x, 0, TOWER.z);
    const hill = new Mesh(new CylinderGeometry(HILL.r - 1.0, HILL.r, HILL.h, 10, 1), mat.grass);
    hill.position.y = HILL.h / 2;
    hill.rotation.y = 0.2;
    hill.receiveShadow = true;
    g.add(hill);
    occluders.push(hill);

    const base = TOWER.base;
    // 세 다리
    for (let i = 0; i < 3; i += 1) {
      const a = (i / 3) * TAU + 0.4;
      g.add(beam(new Vector3(Math.cos(a) * 1.1, base, Math.sin(a) * 1.1), new Vector3(0, base + 3.2, 0), 0.12, mat.structure, 5));
    }
    const shaft = new Mesh(new CylinderGeometry(0.3, 0.5, TOWER.deck - 0.4, 8, 1), mat.structure);
    shaft.position.y = base + (TOWER.deck - 0.4) / 2;
    g.add(shaft);
    occluders.push(shaft);
    [3.6, 6.4].forEach((y) => {
      const ring = new Mesh(new CylinderGeometry(0.47 - y * 0.02, 0.5 - y * 0.02, 0.32, 8, 1), mat.accent);
      ring.position.y = base + y;
      g.add(ring);
    });
    const deck = new Mesh(new CylinderGeometry(1.15, 0.85, 0.9, 12, 1), mat.structure);
    deck.position.y = base + TOWER.deck;
    const band = new Mesh(new CylinderGeometry(1.17, 1.12, 0.32, 12, 1), mat.bulb);
    band.position.y = base + TOWER.deck + 0.12;
    const cap = new Mesh(new CylinderGeometry(0.55, 1.0, 0.45, 12, 1), mat.accent);
    cap.position.y = base + TOWER.deck + 0.68;
    g.add(deck, band, cap);
    g.add(beam(new Vector3(0, base + TOWER.deck + 0.9, 0), new Vector3(0, base + TOWER.top, 0), 0.06, mat.structure, 5));
    const beacon = new Mesh(new SphereGeometry(0.16, 8, 6), mat.beacon);
    beacon.position.y = base + TOWER.top + 0.05;
    g.add(beacon);
    scene.add(g);
    casters.push(g);
    addBlob(TOWER.x, TOWER.z, 1.4);
  })();

  /* ---------- 시계탑 기차역 ---------- */

  const clockHands = [];
  (() => {
    const g = new Group();
    const w = STATION.x1 - STATION.x0;
    const d = STATION.z1 - STATION.z0;
    const cx = (STATION.x0 + STATION.x1) / 2;
    const cz = (STATION.z0 + STATION.z1) / 2;
    const hall = box(w, STATION.h, d, mat.structure);
    hall.position.set(cx, STATION.h / 2, cz);
    g.add(hall);
    occluders.push(hall);
    roofs.add({ x: cx, y: STATION.h, z: cz, sx: w + 0.2, sy: 0.9, sz: d + 0.2, r: Math.hypot(cx, cz), color: SCENE_COLOR.roofs[1] });
    addWindows(cx, cz, w, d, STATION.h, { r: Math.hypot(cx, cz), early: 0.5, late: 0.5, base: 0.25 });

    // 승강장과 지붕
    const platform = box(w + 0.6, 0.22, PLATFORM.z1 - PLATFORM.z0, mat.pavement);
    platform.position.set(cx - 0.3, 0.11, (PLATFORM.z0 + PLATFORM.z1) / 2);
    const canopy = box(w - 0.6, 0.08, 0.9, mat.accent);
    canopy.position.set(cx - 0.3, 1.25, PLATFORM.z0 + 0.38);
    g.add(platform, canopy);
    for (let x = STATION.x0 + 0.4; x < STATION.x1 - 0.2; x += 1.6) {
      g.add(beam(new Vector3(x, 0.22, PLATFORM.z1 - 0.12), new Vector3(x, 1.22, PLATFORM.z1 - 0.12), 0.04, mat.structure, 4));
    }

    // 시계탑
    const clock = new Group();
    clock.position.set(CLOCK.x, 0, CLOCK.z);
    const shaft = box(CLOCK.w, CLOCK.h, CLOCK.w, mat.structure);
    shaft.position.y = CLOCK.h / 2;
    occluders.push(shaft);
    const roof = pyramid(CLOCK.w * 0.82, 1.1, mat.accent);
    roof.position.y = CLOCK.h + 0.55;
    clock.add(shaft, roof);
    const faceY = CLOCK.h - 0.55;
    [0, Math.PI / 2, Math.PI, -Math.PI / 2].forEach((ry) => {
      const face = new Group();
      face.rotation.y = ry;
      face.position.set(Math.sin(ry) * (CLOCK.w / 2 + 0.01), faceY, Math.cos(ry) * (CLOCK.w / 2 + 0.01));
      const rim = new Mesh(new CircleGeometry(0.4, 16), mat.carGlass);
      const dial = new Mesh(new CircleGeometry(0.34, 16), mat.clock);
      dial.position.z = 0.006;
      face.add(rim, dial);
      [
        { len: 0.2, width: 0.05, kind: 'hour' },
        { len: 0.3, width: 0.035, kind: 'minute' },
      ].forEach((h) => {
        const pivot = new Group();
        pivot.position.z = 0.012;
        const hand = new Mesh(new BoxGeometry(h.width, h.len, 0.01).translate(0, h.len / 2 - 0.03, 0), mat.carGlass);
        pivot.add(hand);
        face.add(pivot);
        clockHands.push({ pivot, kind: h.kind });
      });
      clock.add(face);
    });
    g.add(clock);
    addWindows(CLOCK.x, CLOCK.z, CLOCK.w, CLOCK.w, CLOCK.h - 1.1, { r: 6, early: 0.4, late: 0.6, base: 0.5 });

    // 기찻길 — 서쪽 안개 속으로 이어진다
    const ballast = box(RAIL.end + 120, 0.05, RAIL.z1 - RAIL.z0, mat.stone);
    ballast.position.set((RAIL.end - 120) / 2, 0.025, (RAIL.z0 + RAIL.z1) / 2);
    g.add(ballast);
    RAIL.rails.forEach((z) => {
      const rail = box(RAIL.end + 120, 0.06, 0.06, mat.structure);
      rail.position.set((RAIL.end - 120) / 2, 0.1, z);
      g.add(rail);
    });
    const ties = new InstancedMesh(new BoxGeometry(0.14, 0.04, 0.9), mat.trunk, 110);
    let n = 0;
    for (let x = RAIL.end - 0.2; n < 110; x -= 0.55, n += 1) {
      dummy.position.set(x, 0.07, (RAIL.z0 + RAIL.z1) / 2);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      ties.setMatrixAt(n, dummy.matrix);
    }
    g.add(ties);
    const stop = box(0.3, 0.4, 0.9, mat.accent);
    stop.position.set(RAIL.end + 0.1, 0.2, (RAIL.z0 + RAIL.z1) / 2);
    g.add(stop);

    // 서 있는 기차 한 편성
    const trainZ = (RAIL.rails[0] + RAIL.rails[1]) / 2;
    for (let i = 0; i < 3; i += 1) {
      const x = RAIL.end - 1.6 - i * 2.45;
      const car = box(2.3, 0.72, 0.74, mat.structure);
      car.position.set(x, 0.5, trainZ);
      const stripe = box(2.32, 0.12, 0.76, mat.accent);
      stripe.position.set(x, 0.36, trainZ);
      g.add(car, stripe);
      addWindows(x, trainZ, 2.3, 0.74, 0.86, { r: Math.hypot(x, trainZ), early: 0.6, late: 0.4, base: 0.36, faces: ['0,1', '0,-1'] });
    }
    scene.add(g);
    casters.push(g);
    addBlob(cx, cz, 2.4);
  })();

  /* ---------- 시장 골목 ---------- */

  (() => {
    const g = new Group();
    const shopW = (MARKET.x1 - MARKET.x0) / 5;
    const awnings = new InstancedMesh(new BoxGeometry(1, 0.05, 0.55), mat.accent, 10);
    let k = 0;
    [
      { z0: MARKET.rowN[0], z1: MARKET.rowN[1], side: 1 },
      { z0: MARKET.rowS[0], z1: MARKET.rowS[1], side: -1 },
    ].forEach((row) => {
      for (let i = 0; i < 5; i += 1) {
        const x = MARKET.x0 + shopW * (i + 0.5);
        const z = (row.z0 + row.z1) / 2;
        const d = row.z1 - row.z0;
        const h = 1.2 + rand() * 0.7;
        addBuilding(buildings, x, z, shopW - 0.06, d, h, {
          color: wallColor(true),
          roof: true,
          win: { early: 0.35, late: 0.6, base: 0.9 },
        });
        // 골목 쪽 가게 앞 큰 창(밤에 켜진다)
        windows.early.add({ x, y: 0.32, z: z + (row.side * d) / 2 + row.side * 0.013, ry: row.side > 0 ? 0 : Math.PI, sx: 3.6, sy: 1.0, r: 8, color: SCENE_COLOR.instanceBase });
        // 차양
        dummy.position.set(x, 0.78, z + row.side * (d / 2 + 0.24));
        dummy.rotation.set(-row.side * 0.32, 0, 0);
        dummy.scale.set(shopW - 0.24, 1, 1);
        dummy.updateMatrix();
        awnings.setMatrixAt(k, dummy.matrix);
        k += 1;
      }
    });
    g.add(awnings);
    // 골목 위 전구 줄 — 북쪽 가게와 남쪽 가게 지붕선 사이에 늘어진다
    for (let s = 0; s < 5; s += 1) {
      const x0 = MARKET.x0 + 0.5 + s * 1.6;
      for (let i = 0; i <= 8; i += 1) {
        const u = i / 8;
        bulbs.add({
          x: x0 + u * 0.9,
          y: 1.22 - Math.sin(u * Math.PI) * 0.22,
          z: lerp(MARKET.rowN[1], MARKET.rowS[0], u),
          r: 8,
        });
      }
    }
    scene.add(g);
    casters.push(g);
  })();

  /* ---------- 공원 분수 ---------- */

  const fountain = (() => {
    const g = new Group();
    g.add(flatRect(PARK.x0, PARK.x1, PARK.z0, PARK.z1, mat.grass, 0.014));
    g.add(flatRect(FOUNTAIN.x - 0.5, FOUNTAIN.x + 0.5, PARK.z0, PARK.z1, mat.path, 0.02));
    g.add(flatRect(PARK.x0, PARK.x1, FOUNTAIN.z - 0.45, FOUNTAIN.z + 0.45, mat.path, 0.02));
    const plaza = new Mesh(new CircleGeometry(2.0, 18).rotateX(-Math.PI / 2), mat.path);
    plaza.position.set(FOUNTAIN.x, 0.025, FOUNTAIN.z);
    plaza.userData.flat = true;
    g.add(plaza);
    const basin = new Mesh(new CylinderGeometry(1.3, 1.38, 0.3, 18, 1), mat.structure);
    basin.position.set(FOUNTAIN.x, 0.15, FOUNTAIN.z);
    const pond = new Mesh(new CircleGeometry(1.16, 18).rotateX(-Math.PI / 2), mat.pondWater);
    pond.position.set(FOUNTAIN.x, 0.26, FOUNTAIN.z);
    const column = new Mesh(new CylinderGeometry(0.16, 0.22, 0.6, 8, 1), mat.structure);
    column.position.set(FOUNTAIN.x, 0.4, FOUNTAIN.z);
    const bowl = new Mesh(new CylinderGeometry(0.5, 0.2, 0.18, 12, 1), mat.structure);
    bowl.position.set(FOUNTAIN.x, 0.74, FOUNTAIN.z);
    const jet = new Mesh(new CylinderGeometry(0.11, 0.05, 1, 8, 1, true).translate(0, 0.5, 0), mat.jet);
    jet.position.set(FOUNTAIN.x, 0.8, FOUNTAIN.z);
    const spray = new Mesh(new CylinderGeometry(0.36, 0.1, 0.3, 10, 1, true).translate(0, -0.15, 0), mat.jet);
    spray.position.set(FOUNTAIN.x, 1.8, FOUNTAIN.z);
    g.add(basin, pond, column, bowl, jet, spray);
    // 둘레에서 가운데로 휘어 떨어지는 물줄기
    for (let i = 0; i < 8; i += 1) {
      const a = (i / 8) * TAU + 0.2;
      const p = (r, y) => new Vector3(FOUNTAIN.x + Math.cos(a) * r, y, FOUNTAIN.z + Math.sin(a) * r);
      const arc = new CatmullRomCurve3([p(1.12, 0.3), p(0.95, 0.72), p(0.7, 0.86), p(0.48, 0.62), p(0.36, 0.3)]);
      g.add(new Mesh(new TubeGeometry(arc, 10, 0.03, 4, false), mat.jet));
    }
    for (let i = 0; i < 12; i += 1) {
      const a = (i / 12) * TAU;
      bulbs.add({ x: FOUNTAIN.x + Math.cos(a) * 1.34, y: 0.34, z: FOUNTAIN.z + Math.sin(a) * 1.34, r: 13 });
    }
    scene.add(g);
    casters.push(g);
    addBlob(FOUNTAIN.x, FOUNTAIN.z, 1.6);
    return {
      group: g,
      update(t) {
        const k = 0.5 + 0.5 * Math.sin((t / PERIOD.fountain) * TAU);
        jet.scale.set(1, 0.75 + k * 0.5, 1);
        spray.position.y = 0.8 + jet.scale.y;
        spray.scale.set(0.85 + k * 0.3, 1, 0.85 + k * 0.3);
      },
    };
  })();

  /* ---------- 나무 ---------- */

  const addTree = (x, z, s, y0 = 0) => {
    const r = Math.hypot(x, z);
    trunks.add({ x, y: y0, z, sx: s, sy: 0.45 * s, sz: s, r });
    crowns.add({ x, y: y0 + 0.38 * s, z, sx: s, sy: s, sz: s, ry: rand() * TAU, r });
  };
  for (let i = 0; i < 10; i += 1) {
    const a = (i / 10) * TAU + 0.3;
    const x = FOUNTAIN.x + Math.cos(a) * 3.0;
    const z = FOUNTAIN.z + Math.sin(a) * 2.0;
    if (Math.abs(x - FOUNTAIN.x) < 0.8 || Math.abs(z - FOUNTAIN.z) < 0.7) continue;
    addTree(x, z, 0.8 + rand() * 0.3);
  }
  [
    [PARK.x0 + 0.5, PARK.z1 - 0.5],
    [PARK.x1 - 0.5, PARK.z1 - 0.5],
    [PARK.x0 + 0.5, PARK.z0 + 0.5],
    [PARK.x1 - 0.5, PARK.z0 + 0.5],
  ].forEach(([x, z]) => addTree(x, z, 0.9));
  for (let i = 0; i < 7; i += 1) {
    const a = (i / 7) * TAU + 0.5;
    addTree(HILL.x + Math.cos(a) * 1.95, HILL.z + Math.sin(a) * 1.95, 0.7 + rand() * 0.3, HILL.h);
  }

  /* ---------- 가로등 ---------- */

  const lamp = (x, z) => {
    const r = Math.hypot(x, z);
    lampPoles.add({ x, y: 0, z, sy: 1.15, r });
    lampHeads.add({ x, y: 1.2, z, r });
    pools.add({ x, y: 0.03, z, sx: 1.1, sz: 1.1, r });
  };
  for (let x = -14.4; x <= 14.5; x += 3.2) {
    if (Math.abs(x - BRIDGE.x) >= 1.8) lamp(x, southEdge(x) + 0.42);
    if (Math.abs(x + 1.6 - BRIDGE.x) >= 1.8) lamp(x + 1.6, northEdge(x + 1.6) - 0.42);
  }
  [3.6, 6.0, 8.4].forEach((z) => {
    lamp(AVENUE.x0 - 0.2, z);
    lamp(AVENUE.x1 + 0.2, z);
  });
  [-5.4, -8.0, -10.6].forEach((z) => {
    lamp(AVENUE.x0 - 0.2, z);
    lamp(AVENUE.x1 + 0.2, z);
  });
  [
    [-1.6, -1.6],
    [1.6, -1.6],
    [-1.6, 1.6],
    [1.6, 1.6],
  ].forEach(([dx, dz]) => lamp(FOUNTAIN.x + dx * 1.15, FOUNTAIN.z + dz * 0.95));
  [-12, -8, -4.6, 4, 8, 12].forEach((x) => lamp(x, SOUTH_ROAD.z0 - 0.25));

  /* ---------- 차 — 남북 큰길과 남쪽 동서 도로를 오간다 ---------- */

  const LANE = { south: AVENUE.mid - 0.4, north: AVENUE.mid + 0.4, west: SOUTH_ROAD.z0 + 0.35 };
  const carPaths = [
    // 남쪽으로: 북쪽 안개에서 다리와 큰길을 지나, 남쪽 도로에서 서쪽으로 간다
    [
      [LANE.south, -64],
      [LANE.south, LANE.west],
      [-64, LANE.west],
    ],
    // 북쪽으로: 동쪽 안개에서 남쪽 도로를 지나, 큰길과 다리를 건너 북쪽 안개로 간다
    [
      [64, LANE.west],
      [LANE.north, LANE.west],
      [LANE.north, -64],
    ],
  ].map((points) => {
    const segs = [];
    let total = 0;
    for (let i = 0; i < points.length - 1; i += 1) {
      const [ax, az] = points[i];
      const [bx, bz] = points[i + 1];
      const len = Math.hypot(bx - ax, bz - az);
      segs.push({ ax, az, bx, bz, len, start: total });
      total += len;
    }
    return { segs, total };
  });

  function pointOnPath(path, u, out) {
    const d = u * path.total;
    const seg = path.segs.find((s) => d <= s.start + s.len) || path.segs[path.segs.length - 1];
    const k = (d - seg.start) / seg.len;
    out.x = lerp(seg.ax, seg.bx, k);
    out.z = lerp(seg.az, seg.bz, k);
    out.ry = Math.atan2(seg.bx - seg.ax, seg.bz - seg.az);
    return out;
  }

  const cars = (() => {
    const perPath = 4;
    const total = perPath * carPaths.length;
    const bodies = new InstancedMesh(new BoxGeometry(0.42, 0.24, 0.86).translate(0, 0.17, 0), mat.car, total);
    const cabins = new InstancedMesh(new BoxGeometry(0.36, 0.18, 0.44).translate(0, 0.36, -0.04), mat.carGlass, total);
    const heads = new InstancedMesh(new BoxGeometry(0.1, 0.06, 0.03), mat.headlight, total * 2);
    const tails = new InstancedMesh(new BoxGeometry(0.1, 0.06, 0.03), mat.taillight, total * 2);
    const list = [];
    carPaths.forEach((path, p) => {
      for (let i = 0; i < perPath; i += 1) {
        list.push({ path, offset: (i + p * 0.37 + rand() * 0.3) / perPath });
        bodies.setColorAt(list.length - 1, new Color(SCENE_COLOR.carBody[(i + p * 2) % SCENE_COLOR.carBody.length]));
      }
    });
    [bodies, cabins, heads, tails].forEach((m) => {
      m.frustumCulled = false;
      scene.add(m);
    });
    bodies.castShadow = true;
    const at = { x: 0, z: 0, ry: 0 };
    const place = (mesh, index, x, y, z, ry) => {
      dummy.position.set(x, y, z);
      dummy.rotation.set(0, ry, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
    };
    return {
      update(t) {
        list.forEach((car, i) => {
          pointOnPath(car.path, (t / PERIOD.car + car.offset) % 1, at);
          const y = 0.02 + (Math.abs(at.x - BRIDGE.x) < 1.2 && at.z > BRIDGE.north - 0.6 && at.z < BRIDGE.south + 0.6 ? BRIDGE.deckY : 0);
          place(bodies, i, at.x, y, at.z, at.ry);
          place(cabins, i, at.x, y, at.z, at.ry);
          const fx = Math.sin(at.ry);
          const fz = Math.cos(at.ry);
          [-0.13, 0.13].forEach((side, j) => {
            const sx = fz * side;
            const sz = -fx * side;
            place(heads, i * 2 + j, at.x + fx * 0.44 + sx, y + 0.18, at.z + fz * 0.44 + sz, at.ry);
            place(tails, i * 2 + j, at.x - fx * 0.44 + sx, y + 0.18, at.z - fz * 0.44 + sz, at.ry);
          });
        });
        [bodies, cabins, heads, tails].forEach((m) => {
          m.instanceMatrix.needsUpdate = true;
        });
      },
    };
  })();

  /* ---------- 배 ---------- */

  const boat = (() => {
    const g = new Group();
    const hull = box(0.7, 0.3, 1.9, mat.structure);
    hull.position.y = 0.1;
    const stripe = box(0.72, 0.08, 1.92, mat.accent);
    stripe.position.y = 0.2;
    const cabin = box(0.52, 0.3, 0.8, mat.structure);
    cabin.position.set(0, 0.4, -0.2);
    const light = new Mesh(new SphereGeometry(0.07, 6, 4), mat.bulb);
    light.position.set(0, 0.62, -0.2);
    g.add(hull, stripe, cabin, light);
    g.traverse((m) => {
      m.castShadow = true;
    });
    scene.add(g);
    const span = 140;
    return {
      update(t) {
        const x = ((t / PERIOD.boat) % 1) * span - span / 2;
        const z = riverZ(x) + 0.7;
        const dz = RIVER.amp * RIVER.k * Math.cos(RIVER.k * x + RIVER.phase);
        g.position.set(x, RIVER.water + waveHeight(x, z, t) * 0.8, z);
        g.rotation.set(0, Math.atan2(1, dz), Math.sin(t * 1.3) * 0.03);
      },
    };
  })();

  /* ---------- 묶음을 장면에 넣는다 ---------- */

  const lowR = QUALITY.fillerRadiusLow;
  const coreMesh = buildings.build(lowR);
  const fillerMesh = fillerBuildings.build(lowR);
  const roofMesh = roofs.build(lowR);
  const fillerRoofMesh = fillerRoofs.build(lowR);
  const rooftopMesh = rooftops.build(lowR);
  const windowMeshes = [windows.early.build(lowR), windows.late.build(lowR), windows.off.build(lowR)];
  const lampMeshes = [lampPoles.build(lowR), lampHeads.build(lowR)];
  const poolMesh = pools.build(lowR);
  const bulbMesh = bulbs.build(lowR);
  const treeMeshes = [crowns.build(lowR), trunks.build(lowR)];
  const reducible = [fillerMesh, fillerRoofMesh, rooftopMesh, ...windowMeshes];

  scene.add(coreMesh, fillerMesh, roofMesh, fillerRoofMesh, rooftopMesh, ...windowMeshes, ...lampMeshes, poolMesh, bulbMesh, ...treeMeshes);
  occluders.push(coreMesh);
  [coreMesh, roofMesh, rooftopMesh, ...treeMeshes, ...lampMeshes].forEach((m) => {
    m.castShadow = true;
    m.receiveShadow = true;
  });
  fillerMesh.receiveShadow = true;
  fillerRoofMesh.receiveShadow = true;
  casters.forEach((obj) =>
    obj.traverse((m) => {
      if (m.isMesh && m.material !== mat.jet && !m.userData.flat) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    }),
  );
  bridge.group.traverse((m) => {
    if (m.isMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
  });
  scene.traverse((m) => {
    if (m.userData.flat) m.receiveShadow = true;
  });

  /* ---------- 해 질 녘·밤 ---------- */

  let nightness = time === 'night' ? 1 : 0;
  const tmpA = new Color();
  const tmpB = new Color();
  const colorOf = (pair, t, target) => target.copy(tmpA.set(pair[0])).lerp(tmpB.set(pair[1]), t);
  const D = SCENE_COLOR.dusk;
  const N = SCENE_COLOR.night;
  const L0 = SCENE_LIGHT.dusk;
  const L1 = SCENE_LIGHT.night;
  const riverShallow = new Color();
  const riverDeep = new Color();
  const waterColor = waterGeometry.attributes.color;
  const work = new Color();
  const glowColor = new Color(SCENE_COLOR.bulb);
  const beaconBase = new Color(SCENE_COLOR.beacon);
  let beaconLevel = 1;

  function applyClock(t) {
    // 해 질 녘 6시 반에서 밤 9시까지
    const minutes = lerp(18 * 60 + 30, 21 * 60, t);
    clockHands.forEach(({ pivot, kind }) => {
      const turn = kind === 'hour' ? (minutes % 720) / 720 : (minutes % 60) / 60;
      pivot.rotation.z = -turn * TAU;
    });
  }

  function applyBeacon() {
    mat.beacon.color.copy(beaconBase).multiplyScalar(lerp(L0.beacon, L1.beacon, nightness) * beaconLevel);
  }

  function applyNightness(t) {
    colorOf([D.sky, N.sky], t, scene.background);
    fog.color.copy(scene.background);
    colorOf([D.hemiSky, N.hemiSky], t, hemi.color);
    colorOf([D.ground, N.ground], t, hemi.groundColor);
    hemi.intensity = lerp(L0.hemi, L1.hemi, t);
    colorOf([D.keyLight, N.keyLight], t, key.color);
    key.intensity = lerp(L0.key, L1.key, t);
    key.position.lerpVectors(SUN_POS, MOON_POS, t);
    marketLight.intensity = lerp(L0.point, L1.point, t);
    bridgeLight.intensity = marketLight.intensity;
    mat.bulb.emissiveIntensity = lerp(L0.bulb, L1.bulb, t);
    mat.clock.emissiveIntensity = lerp(L0.clock, L1.clock, t);
    mat.jet.emissiveIntensity = lerp(L0.fountain, L1.fountain, t);
    mat.pool.opacity = lerp(L0.pool, L1.pool, t);
    poolMesh.visible = mat.pool.opacity > 0.001;
    colorOf(SCENE_COLOR.window.early, t, mat.windowEarly.color);
    colorOf(SCENE_COLOR.window.late, t, mat.windowLate.color);
    colorOf(SCENE_COLOR.window.off, t, mat.windowOff.color);
    colorOf(SCENE_COLOR.headlight, t, mat.headlight.color);
    colorOf(SCENE_COLOR.taillight, t, mat.taillight.color);
    colorOf([D.riverDeep, N.riverDeep], t, mat.farWater.color);
    colorOf([D.riverDeep, N.riverDeep], t, mat.pondWater.color);
    colorOf([D.riverShallow, N.riverShallow], t, riverShallow);
    colorOf([D.riverDeep, N.riverDeep], t, riverDeep);
    const glow = lerp(L0.riverGlow, L1.riverGlow, t);
    for (let i = 0; i < waterColor.count; i += 1) {
      work.copy(riverShallow).lerp(riverDeep, waterDepth[i]);
      const k = waterGlow[i] * glow;
      waterColor.setXYZ(i, work.r + glowColor.r * k, work.g + glowColor.g * k, work.b + glowColor.b * k);
    }
    waterColor.needsUpdate = true;
    applyClock(t);
    applyBeacon();
  }
  applyNightness(nightness);

  /* ---------- 품질 ---------- */

  function pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (poster) return 1;
    return Math.min(dpr, quality === 'high' ? QUALITY.pixelRatioHigh : QUALITY.pixelRatioLow);
  }

  function applyQuality() {
    key.castShadow = quality === 'high';
    blobs.visible = quality !== 'high';
    // 낮은 품질에서는 블록 밖 먼 건물과 그 창문을 그리지 않는다(가까운 것부터 정렬해 두었다)
    reducible.forEach((m) => {
      m.count = quality === 'high' ? m.userData.full : m.userData.low;
    });
  }
  applyQuality();

  function setQuality(next) {
    if (next === quality) return;
    quality = next;
    applyQuality();
    resize();
  }

  /* ---------- 시점 ---------- */

  const elMin = CAMERA.elevationMin * DEG;
  const elMax = CAMERA.elevationMax * DEG;
  const cam = {
    az: CAMERA.startAzimuth * DEG,
    el: CAMERA.startElevation * DEG,
    dist: 50,
    target: HOME_TARGET.clone(),
  };
  let homeDist = 50;
  let viewAspect = 1;
  let insetPx = 0;
  let maxDist = 80;
  let atHome = true;
  let userInteracted = false;
  let camTween = null;
  let nightTween = null;
  let lastLimits = '';

  const clampDist = (d) => clamp(d, CAMERA.minDistance, maxDist);

  function reportLimits() {
    const atMin = cam.dist <= CAMERA.minDistance + 0.01;
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
    fog.near = dist + 14;
    fog.far = dist + 120;
    reportLimits();
  }

  function startCameraTween(goal, duration) {
    const to = {
      az: cam.az + wrapAngle((goal.az ?? cam.az) - cam.az),
      el: clamp(goal.el ?? cam.el, elMin, elMax),
      dist: clampDist(goal.dist ?? cam.dist),
      target: (goal.target ?? cam.target).clone(),
    };
    if (reduced || duration <= 0) {
      cam.az = to.az;
      cam.el = to.el;
      cam.dist = to.dist;
      cam.target.copy(to.target);
      camTween = null;
      requestRender();
      return;
    }
    camTween = {
      from: { az: cam.az, el: cam.el, dist: cam.dist, target: cam.target.clone() },
      to,
      start: performance.now(),
      duration,
    };
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

  function stepNightTween(now) {
    if (!nightTween) return;
    const { from, to, start, duration } = nightTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    nightness = lerp(from, to, k);
    applyNightness(nightness);
    if (k >= 1) nightTween = null;
  }

  function interact() {
    camTween = null;
    atHome = false;
    if (!userInteracted) {
      userInteracted = true;
      onInteract();
    }
  }

  /* ---------- 표지 ---------- */

  const markers = landmarks.map(({ id, name }) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'marker is-hidden';
    el.tabIndex = -1;
    el.dataset.id = id;
    const pill = document.createElement('span');
    pill.className = 'marker__pill';
    const text = document.createElement('span');
    text.className = 'marker__text';
    text.textContent = name;
    pill.append(text);
    el.append(pill);
    el.addEventListener('click', () => onSelect(id));
    labelLayer.append(el);
    return {
      id,
      el,
      anchor: new Vector3(...LANDMARK_3D[id].anchor),
      occluded: false,
      shown: false,
      current: false,
      half: null,
      height: 0,
      pillW: 0,
      pillH: 0,
    };
  });

  let labelsEnabled = false;
  const projected = new Vector3();
  const rayDir = new Vector3();
  const raycaster = new Raycaster();
  let lastOcclusion = 0;

  /** 표지가 피해야 할 장면 위 버튼 묶음(토글·시점 버튼) */
  const avoid = opts.avoid || [];

  function updateLabels(now) {
    if (!labelsEnabled) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const checkOcclusion = now - lastOcclusion > 120;
    if (checkOcclusion) lastOcclusion = now;
    // 읽기를 쓰기보다 먼저 몰아서 한다: 표지 크기(바뀔 때만), 장면 위 버튼 묶음 자리(매번)
    markers.forEach((m) => {
      if (m.half === null) {
        m.half = m.el.offsetWidth / 2;
        m.height = m.el.offsetHeight;
        m.pillW = m.el.firstElementChild.offsetWidth;
        m.pillH = m.el.firstElementChild.offsetHeight;
      }
    });
    const base = container.getBoundingClientRect();
    const blocked = avoid
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top }));
    const edge = 4;
    const hit = (a, b) => a.l < b.r + edge && a.r > b.l - edge && a.t < b.b + edge && a.b > b.t - edge;
    // 표지 상자의 아래 끝이 y 이고, 보이는 알약은 상자 세로 가운데에 있다
    const pillBox = (m, x, y) => {
      const cy = y - m.height / 2;
      return { l: x - m.pillW / 2, r: x + m.pillW / 2, t: cy - m.pillH / 2, b: cy + m.pillH / 2 };
    };

    const items = markers.map((m) => {
      if (checkOcclusion) {
        rayDir.subVectors(m.anchor, camera.position);
        const distance = rayDir.length();
        raycaster.set(camera.position, rayDir.normalize());
        raycaster.far = distance;
        const hits = raycaster.intersectObjects(occluders, false);
        m.occluded = hits.length > 0 && hits[0].distance < distance - 0.6;
      }
      projected.copy(m.anchor).project(camera);
      const rawX = (projected.x * 0.5 + 0.5) * w;
      // 넓은 폭에서는 정보 패널 뒤(insetPx 왼쪽)에 있는 표지를 숨긴다
      const onScreen =
        projected.z < 1 && rawX > insetPx && projected.x < 1.02 && projected.y > -1.02 && projected.y < 1.08;
      // 표지가 장면·패널 가장자리에서 잘리지 않게 안쪽으로 당긴다
      const minX = insetPx + m.half + edge;
      const x = clamp(rawX, minX, Math.max(minX, w - m.half - edge));
      const y = clamp((-projected.y * 0.5 + 0.5) * h, m.height + edge, Math.max(m.height + edge, h - edge));
      return { m, x, y, depth: projected.z, candidate: onScreen && !m.occluded };
    });

    // 고른 표지에 먼저 자리를 주고, 나머지는 가까운 것부터 준다.
    // 장면 위 버튼이나 먼저 놓인 표지와 겹치면 숨긴다. 고른 표지는 버튼을 비켜 위아래로 옮겨 본다.
    items.sort((a, b) => Number(b.m.current) - Number(a.m.current) || a.depth - b.depth);
    const placed = [];
    items.forEach((it) => {
      let { y } = it;
      let show = it.candidate;
      if (show) {
        let pill = pillBox(it.m, it.x, y);
        const block = it.m.current && blocked.find((r) => hit(pill, r));
        if (block) {
          y += block.t > h / 2 ? block.t - edge * 2 - pill.b : block.b + edge * 2 - pill.t;
          y = clamp(y, it.m.height + edge, Math.max(it.m.height + edge, h - edge));
          pill = pillBox(it.m, it.x, y);
        }
        if (blocked.some((r) => hit(pill, r)) || placed.some((p) => hit(pill, p))) show = false;
        else placed.push(pill);
      }
      it.m.el.style.transform = `translate3d(${it.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      if (show !== it.m.shown) {
        it.m.shown = show;
        it.m.el.classList.toggle('is-hidden', !show);
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

  function shouldAnimate() {
    return motion && !poster;
  }

  function requestRender() {
    if (!raf && visible && inView && !lost && !disposed) raf = requestAnimationFrame(frame);
  }

  function samplePerformance(now, continuous) {
    if (!continuous || quality !== 'high' || poster || opts.quality) {
      perf.warmUntil = 0;
      perf.prev = 0;
      return;
    }
    if (!perf.warmUntil) {
      perf.warmUntil = now + QUALITY.warmupMs;
      perf.frames = 0;
      perf.total = 0;
      perf.prev = now;
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

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    const animating = shouldAnimate();
    if (animating) {
      sceneTime += dt;
      if (!userInteracted && !reduced && !camTween) {
        cam.az += (dt / PERIOD.autoRotate) * TAU;
      }
    }
    // 타워 꼭대기 불빛 — 번쩍이지 않고 천천히 밝기만 바꾼다. 움직임을 멈추면 켜진 채로 둔다
    beaconLevel = animating ? 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((sceneTime / PERIOD.beacon) * TAU)) : 1;
    applyBeacon();
    stepCameraTween(now);
    stepNightTween(now);
    cars.update(sceneTime);
    boat.update(sceneTime);
    fountain.update(sceneTime);
    updateWaves(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || nightTween) {
      requestRender();
    } else {
      last = 0;
    }
  }

  /* ---------- 크기 ---------- */

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(pixelRatio());
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const inset = Math.min(getInsetLeft(), w * 0.6);
    if (inset > 0) camera.setViewOffset(w, h, -inset / 2, 0, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
    insetPx = inset;
    viewAspect = (w - inset) / h;
    // 포스터 촬영 모드는 캔버스에 여백을 두고 기준 장면과 같은 배율로 찍는다(js/framing.js)
    homeDist = poster ? posterDistance(opts.posterSize || 'wide') : fitDistance(w - inset, h);
    markers.forEach((m) => {
      m.half = null;
    });
    maxDist = homeDist * CAMERA.maxDistanceFactor;
    if (atHome && !camTween) cam.dist = homeDist;
    cam.dist = clampDist(cam.dist);
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

  resize();

  /* 첫 프레임을 그린 뒤 돌려준다 */
  await new Promise((resolve) => {
    requestAnimationFrame((now) => {
      frame(now);
      resolve();
    });
  });
  labelsEnabled = true;

  /* ---------- 바깥에서 쓰는 기능 ---------- */

  const goHome = (duration) =>
    startCameraTween(
      { az: CAMERA.startAzimuth * DEG, el: CAMERA.startElevation * DEG, dist: homeDist, target: HOME_TARGET },
      duration,
    );

  return {
    canvas,
    /** 장면 크기는 같아도 정보 패널 폭이 바뀌면(글자 확대 등) 배치를 다시 계산한다 */
    relayout() {
      resize();
    },
    focus(id) {
      const view = LANDMARK_3D[id];
      if (!view) return;
      interact();
      startCameraTween(
        {
          az: view.azimuth * DEG,
          el: view.elevation * DEG,
          // 세로로 긴 장면에서는 같은 명소가 옆으로 넘치지 않게 더 멀리서 본다
          dist: view.distance * clamp(1.25 / viewAspect, 1, 2),
          target: new Vector3(...view.target),
        },
        durations.camera,
      );
    },
    reset() {
      camTween = null;
      goHome(durations.camera);
      atHome = true;
    },
    rotateStep(direction) {
      interact();
      startCameraTween({ az: cam.az + direction * CAMERA.stepRotate * DEG }, durations.cameraStep);
    },
    zoomStep(direction) {
      interact();
      const factor = direction > 0 ? CAMERA.stepZoom : 1 / CAMERA.stepZoom;
      startCameraTween({ dist: cam.dist * factor }, durations.cameraStep);
    },
    setSelected(id) {
      markers.forEach((m) => {
        m.current = m.id === id;
        m.el.classList.toggle('is-current', m.current);
        m.half = null;
      });
      requestRender();
    },
    setTime(next, animate) {
      time = next;
      canvas.setAttribute('aria-label', canvasLabel(time));
      const to = next === 'night' ? 1 : 0;
      if (!animate || reduced || !motion) {
        nightTween = null;
        nightness = to;
        applyNightness(nightness);
        requestRender();
        return;
      }
      nightTween = { from: nightness, to, start: performance.now(), duration: durations.timeShift };
      requestRender();
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
    /** 검수용 — 지금 시점 값과 시점 이동 중인지 */
    cameraState() {
      return {
        azimuth: cam.az / DEG,
        elevation: cam.el / DEG,
        distance: cam.dist,
        target: cam.target.toArray(),
        tweening: Boolean(camTween),
      };
    },
    stats() {
      return {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        quality,
        buildings: coreMesh.count + fillerMesh.count,
        windows: windowMeshes.reduce((n, m) => n + m.count, 0),
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
      Object.values(mat).forEach((m) => m.dispose());
      renderer.dispose();
      canvas.remove();
      markers.forEach((m) => m.el.remove());
    },
  };
}
