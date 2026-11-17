/*
 * 3D 장면 — 지구 궤도의 작은 정거장 (설계서 3-1·3-2·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영.
 * 실존 정거장·우주선을 본뜨지 않은 가상의 모양이다(설계서 3-1절).
 */
import {
  BackSide,
  BoxGeometry,
  BufferGeometry,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { BREAKPOINT, CAMERA, EARTH, PERIOD, POSTER, QUALITY, SCENE_COLOR, SCENE_LIGHT } from '../tokens.js';
import { classDistance, effectiveDistance, freeArea } from '../framing.js';

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const UP = new Vector3(0, 1, 0);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const smooth = (t) => t * t * (3 - 2 * t);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/** 같은 모양이 매번 나오도록 고정 씨앗 난수를 쓴다 */
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

/** 3차원 값 잡음(0~1) — 지구 바다·땅·구름 무늬. 텍스처 대신 면마다 색을 고른다 */
function valueNoise(seed) {
  const hash = (x, y, z) => {
    let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647) ^ seed;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const noise = (x, y, z) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const zi = Math.floor(z);
    const [u, v, w] = [smooth(x - xi), smooth(y - yi), smooth(z - zi)];
    const c = (dx, dy, dz) => hash(xi + dx, yi + dy, zi + dz);
    const x00 = lerp(c(0, 0, 0), c(1, 0, 0), u);
    const x10 = lerp(c(0, 1, 0), c(1, 1, 0), u);
    const x01 = lerp(c(0, 0, 1), c(1, 0, 1), u);
    const x11 = lerp(c(0, 1, 1), c(1, 1, 1), u);
    return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w);
  };
  return (x, y, z, octaves = 3) => {
    let sum = 0;
    let amp = 1;
    let norm = 0;
    let f = 1;
    for (let i = 0; i < octaves; i += 1) {
      sum += noise(x * f, y * f, z * f) * amp;
      norm += amp;
      amp *= 0.5;
      f *= 2.03;
    }
    return sum / norm;
  };
}

/* ---------- 정거장 치수 — 가운데 마디가 원점. x 는 앞(나아가는 쪽), y 는 위, z 는 옆 ---------- */

const HUB = { r: 1.8, len: 2.6 };
const HABITAT = { x0: 1.3, x1: 9.3, r: 1.5, bands: [2.4, 5.3, 8.2], windows: [3.0, 3.7, 4.4, 6.2, 6.9, 7.6] };
const DOCK = { x0: 9.3, x1: 10.4, collar: 10.6, r: 0.95 };
const LAB = { x0: -8.7, x1: -1.3, r: 1.4, bands: [-2.6, -7.4], boxes: [-3.3, -5.1, -6.9] };
const CUPOLA = { at: new Vector3(-9.15, -0.2, 0.15), dir: new Vector3(-1, -0.28, 0.32).normalize() };
const TRUSS = { z0: 2.3, z1: 12.8, w: 0.42 };
const WING = { z: 7.9, len: 9.0, width: 3.2, inner: 0.4, cols: 2, rows: 6, gap: 0.12, base: -40 * DEG, sweep: 14 * DEG };
const FREIGHTER = { len: 2.2, r: 0.55, travel: 26 };
const DOCKED_X = DOCK.collar + 0.2 + 0.35 + FREIGHTER.len / 2;

/** 명소 — 표지 자리(anchor)와 고를 때의 시점. distance 는 실효 거리(렌즈 배율 1 기준) */
const LANDMARK_3D = {
  habitat: { anchor: [5.3, 1.7, 0], target: [5.3, 0.2, 0], azimuth: 28, elevation: 22, distance: 24 },
  lab: { anchor: [-4.2, 1.6, 0], target: [-5.0, 0.3, 0], azimuth: -24, elevation: 26, distance: 24 },
  solar: { anchor: [0, 1.4, WING.z], target: [0.4, 0, 7.4], azimuth: 62, elevation: 38, distance: 30 },
  dock: { anchor: [10.7, 1.25, 0], target: [12.2, 0, 0], azimuth: 58, elevation: 18, distance: 21 },
  window: { anchor: [-10.3, 0.5, 0.45], target: [-9.4, -0.2, 0.2], azimuth: -68, elevation: 12, distance: 20 },
};

const HOME_TARGET = new Vector3(0.6, 0, 0);
/** 포스터를 찍은 장면 시각(초). 3D 첫 프레임도 이 시각에서 시작한다 — 화물선이 도킹 포트 앞 약 6 에 있다 */
const POSTER_TIME = 19.8;

/** 해(낮 쪽)·달빛(밤 쪽)이 오는 방향. 해는 오른쪽 위에서 비춰 전지판이 처음 시점 쪽으로 기운다 */
const SUN_DIR = new Vector3(0.62, 0.72, 0.3).normalize();
const MOON_DIR = new Vector3(-0.4, 0.75, -0.3).normalize();

/** 화물선이 도킹 포트에서 떨어진 거리 — 다가오기(0~47%) · 머물기(~67%) · 물러나기(~100%) */
function freighterGap(t) {
  const u = (((t / PERIOD.freighter) % 1) + 1) % 1;
  if (u < 0.47) return FREIGHTER.travel * (1 - smooth(u / 0.47));
  if (u < 0.67) return 0;
  return FREIGHTER.travel * smooth((u - 0.67) / 0.33);
}

/* ---------- 장면 만들기 ---------- */

export async function createScene(opts) {
  const {
    container,
    labelLayer,
    landmarks,
    canvasLabel,
    getInsets = () => ({ left: 0, top: 0, bottom: 0 }),
    durations,
    onSelect = () => {},
    onInteract = () => {},
    onZoomLimits = () => {},
    onContextLost = () => {},
    onContextRestored = () => {},
  } = opts;

  const poster = Boolean(opts.poster);
  const posterSize = POSTER[opts.posterSize] ? opts.posterSize : 'wide';
  const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);
  const mediumQuery = window.matchMedia(`(min-width: ${BREAKPOINT.medium}px)`);
  const isWide = () => wideQuery.matches;
  /** 폭 구간 — 카메라 거리와 기본 품질을 정한다. 포스터 촬영 모드는 찍는 포스터의 구간 */
  const sizeClass = () => {
    if (poster) return posterSize;
    if (isWide()) return 'wide';
    return mediumQuery.matches ? 'medium' : 'narrow';
  };

  // 그 폭 구간의 기본 품질 — 포스터도 같은 단계로 찍는다(설계서 4절 포스터)
  let quality = opts.quality || (sizeClass() === 'wide' ? 'high' : 'low');
  let motion = opts.motion !== false;
  let reduced = Boolean(opts.reduced);
  let side = opts.side === 'night' ? 'night' : 'day';

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(side));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    powerPreference: 'high-performance',
  });
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  scene.background = new Color(SCENE_COLOR.space);

  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 9000);

  /* 재질 */
  const lambert = (color, extra = {}) => new MeshLambertMaterial({ color, flatShading: true, ...extra });
  const basic = (color, extra = {}) => new MeshBasicMaterial({ color, ...extra });
  const mat = {
    hull: lambert(SCENE_COLOR.hull),
    node: lambert(SCENE_COLOR.node),
    box: lambert(SCENE_COLOR.box),
    frame: lambert(SCENE_COLOR.frame),
    gold: lambert(SCENE_COLOR.gold),
    cell: lambert(SCENE_COLOR.cell[0]),
    freighter: lambert(SCENE_COLOR.freighter),
    glass: basic(SCENE_COLOR.glass[0]),
    lamp: basic(SCENE_COLOR.dockLamp[0]),
    navRed: basic(SCENE_COLOR.navRed),
    navGreen: basic(SCENE_COLOR.navGreen),
    earth: new MeshBasicMaterial({ vertexColors: true }),
    cloud: basic(SCENE_COLOR.cloud[0], { transparent: true, opacity: SCENE_LIGHT.day.cloud, depthWrite: false }),
    atmosphere: basic(SCENE_COLOR.atmosphere[0], {
      transparent: true,
      opacity: SCENE_LIGHT.day.atmosphere,
      side: BackSide,
      depthWrite: false,
    }),
  };

  const dummy = new Object3D();
  const occluders = [];
  const station = new Group();
  scene.add(station);

  const add = (geometry, material, parent = station) => {
    const m = new Mesh(geometry, material);
    parent.add(m);
    return m;
  };
  /** x 축으로 누운 원통(top 이 +x 쪽) */
  const tubeX = (rTop, rBottom, length, segments, material, cx) => {
    const m = add(new CylinderGeometry(rTop, rBottom, length, segments).rotateZ(-Math.PI / 2), material);
    m.position.x = cx;
    return m;
  };

  /* ---------- 빛 ---------- */

  const hemi = new HemisphereLight(SCENE_COLOR.hemiSky[0], SCENE_COLOR.hemiGround[0], SCENE_LIGHT.day.hemi);
  scene.add(hemi);

  const key = new DirectionalLight(SCENE_COLOR.keyLight[0], SCENE_LIGHT.day.key);
  key.shadow.mapSize.set(QUALITY.shadowMapSize, QUALITY.shadowMapSize);
  Object.assign(key.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 140 });
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.03;
  scene.add(key, key.target);

  // 밤 쪽의 실제 점광원은 하나뿐이다(설계서 4-2절): 도킹 포트 작업등
  const workLight = new PointLight(SCENE_COLOR.workLight, 0, 16, 2);
  workLight.position.set(12.4, 2.2, 1.6);
  scene.add(workLight);

  /* ---------- 가운데 마디 ---------- */

  occluders.push(tubeX(HUB.r, HUB.r, HUB.len, 12, mat.node, 0));
  [-1, 1].forEach((s) => {
    const port = add(new CylinderGeometry(0.72, 0.72, 0.9, 10).rotateX(Math.PI / 2), mat.node);
    port.position.z = s * (HUB.r + 0.2);
  });
  const mast = add(new CylinderGeometry(0.08, 0.08, 1.3, 6), mat.frame);
  mast.position.set(-0.3, HUB.r + 0.55, 0);
  const dish = add(new CylinderGeometry(0.85, 0.16, 0.32, 12), mat.hull);
  dish.position.set(-0.3, HUB.r + 1.3, 0);
  dish.rotation.z = 0.35;

  /* ---------- 거주 모듈 · 도킹 포트 ---------- */

  const habitatLength = HABITAT.x1 - HABITAT.x0;
  occluders.push(tubeX(HABITAT.r, HABITAT.r, habitatLength, 14, mat.hull, (HABITAT.x0 + HABITAT.x1) / 2));
  HABITAT.bands.forEach((x) => tubeX(HABITAT.r + 0.04, HABITAT.r + 0.04, 0.36, 14, mat.gold, x));

  // 둥근 창 — 양옆에 한 줄씩. 낮 쪽은 어두운 유리, 밤 쪽은 불이 켜진다
  const windowMesh = new InstancedMesh(new CircleGeometry(0.26, 10), mat.glass, HABITAT.windows.length * 2);
  let wi = 0;
  [-1, 1].forEach((s) => {
    HABITAT.windows.forEach((x) => {
      dummy.position.set(x, 0.3, s * (HABITAT.r + 0.03));
      dummy.rotation.set(0, s > 0 ? 0 : Math.PI, 0);
      dummy.updateMatrix();
      windowMesh.setMatrixAt(wi, dummy.matrix);
      wi += 1;
    });
  });
  station.add(windowMesh);

  occluders.push(tubeX(DOCK.r, HABITAT.r, DOCK.x1 - DOCK.x0, 14, mat.frame, (DOCK.x0 + DOCK.x1) / 2));
  tubeX(DOCK.r + 0.12, DOCK.r + 0.12, 0.4, 16, mat.node, DOCK.collar);
  const dockLamps = new InstancedMesh(new BoxGeometry(0.16, 0.16, 0.16), mat.lamp, 8);
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU;
    dummy.position.set(DOCK.collar + 0.22, Math.sin(a) * (DOCK.r + 0.12), Math.cos(a) * (DOCK.r + 0.12));
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    dockLamps.setMatrixAt(i, dummy.matrix);
  }
  station.add(dockLamps);

  /* ---------- 실험실 모듈 · 관측 창 ---------- */

  occluders.push(tubeX(LAB.r, LAB.r, LAB.x1 - LAB.x0, 14, mat.hull, (LAB.x0 + LAB.x1) / 2));
  LAB.bands.forEach((x) => tubeX(LAB.r + 0.04, LAB.r + 0.04, 0.36, 14, mat.gold, x));
  const boxes = new InstancedMesh(new BoxGeometry(0.95, 0.55, 0.95), mat.box, LAB.boxes.length);
  LAB.boxes.forEach((x, i) => {
    dummy.position.set(x, LAB.r + 0.22, 0);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    boxes.setMatrixAt(i, dummy.matrix);
  });
  station.add(boxes);
  occluders.push(boxes);

  // 관측 창 — 실험실 뒤 끝에서 지구 쪽으로 기운 여섯 면 창(꼭대기 창 포함)
  tubeX(LAB.r, 1.05, 0.5, 14, mat.node, LAB.x0 - 0.25);
  const cupola = new Group();
  cupola.position.copy(CUPOLA.at);
  cupola.quaternion.setFromUnitVectors(UP, CUPOLA.dir);
  station.add(cupola);
  const cupolaRing = add(new CylinderGeometry(1.12, 1.12, 0.22, 12), mat.gold, cupola);
  cupolaRing.position.y = 0.11;
  const cupolaGlass = add(new CylinderGeometry(0.58, 1.02, 0.78, 6), mat.glass, cupola);
  cupolaGlass.position.y = 0.6;
  const cupolaCap = add(new CylinderGeometry(0.62, 0.62, 0.06, 6), mat.frame, cupola);
  cupolaCap.position.y = 1.0;
  const cupolaTop = add(new CylinderGeometry(0.44, 0.44, 0.04, 6), mat.glass, cupola);
  cupolaTop.position.y = 1.04;
  occluders.push(cupolaRing);

  /* ---------- 태양 전지판 ---------- */

  const wingPivots = [];
  const wingFrames = [];
  const cellW = (WING.width - WING.gap * (WING.cols + 1)) / WING.cols;
  const cellL = (WING.len - WING.gap * (WING.rows + 1)) / WING.rows;
  [-1, 1].forEach((s) => {
    const truss = add(new BoxGeometry(TRUSS.w, TRUSS.w, TRUSS.z1 - TRUSS.z0), mat.frame);
    truss.position.z = s * (TRUSS.z0 + TRUSS.z1) / 2;
    occluders.push(truss);

    const pivot = new Group();
    pivot.position.z = s * WING.z;
    station.add(pivot);
    wingPivots.push(pivot);

    const cells = new InstancedMesh(new BoxGeometry(cellW, 0.09, cellL), mat.cell, WING.cols * WING.rows * 2);
    let ci = 0;
    [-1, 1].forEach((px) => {
      const cx = px * (WING.inner + WING.width / 2);
      const frame = add(new BoxGeometry(WING.width, 0.06, WING.len), mat.gold, pivot);
      frame.position.x = cx;
      wingFrames.push(frame);
      for (let c = 0; c < WING.cols; c += 1) {
        for (let r = 0; r < WING.rows; r += 1) {
          dummy.position.set(
            cx - WING.width / 2 + WING.gap + cellW / 2 + c * (cellW + WING.gap),
            0,
            -WING.len / 2 + WING.gap + cellL / 2 + r * (cellL + WING.gap),
          );
          dummy.rotation.set(0, 0, 0);
          dummy.updateMatrix();
          cells.setMatrixAt(ci, dummy.matrix);
          ci += 1;
        }
      }
    });
    pivot.add(cells);
    // 뼈대 뿌리의 작은 상태 등
    const status = add(new BoxGeometry(0.18, 0.18, 0.18), mat.lamp);
    status.position.set(0, TRUSS.w / 2 + 0.09, s * (TRUSS.z0 + 0.3));
  });
  occluders.push(...wingFrames);

  // 위치 표시등 — 뼈대 끝. 한쪽 붉은빛, 한쪽 초록빛
  const navRed = add(new SphereGeometry(0.2, 8, 6), mat.navRed);
  navRed.position.set(0, 0, -(TRUSS.z1 + 0.15));
  const navGreen = add(new SphereGeometry(0.2, 8, 6), mat.navGreen);
  navGreen.position.set(0, 0, TRUSS.z1 + 0.15);
  const navBase = { red: new Color(SCENE_COLOR.navRed), green: new Color(SCENE_COLOR.navGreen) };

  /* ---------- 화물선 ---------- */

  const freighter = new Group();
  scene.add(freighter);
  const fBody = add(new CylinderGeometry(FREIGHTER.r, FREIGHTER.r, FREIGHTER.len, 10).rotateZ(-Math.PI / 2), mat.freighter, freighter);
  const fNose = add(new ConeGeometry(FREIGHTER.r, 0.55, 10).rotateZ(Math.PI / 2), mat.frame, freighter);
  fNose.position.x = -FREIGHTER.len / 2 - 0.27;
  const fEngine = add(new CylinderGeometry(0.35, 0.5, 0.45, 8).rotateZ(-Math.PI / 2), mat.frame, freighter);
  fEngine.position.x = FREIGHTER.len / 2 + 0.22;
  const fBand = add(new CylinderGeometry(FREIGHTER.r + 0.03, FREIGHTER.r + 0.03, 0.22, 10).rotateZ(-Math.PI / 2), mat.gold, freighter);
  fBand.position.x = -0.3;
  [-1, 1].forEach((s) => {
    const wing = add(new BoxGeometry(0.7, 0.05, 1.5), mat.cell, freighter);
    wing.position.set(0.25, 0, s * (FREIGHTER.r + 0.8));
  });
  const fLight = add(new BoxGeometry(0.12, 0.12, 0.12), mat.lamp, freighter);
  fLight.position.set(-FREIGHTER.len / 2 - 0.05, FREIGHTER.r * 0.7, 0);
  occluders.push(fBody);

  function placeFreighter(t) {
    freighter.position.set(DOCKED_X + freighterGap(t), 0, 0);
  }

  /* 그림자 — 정거장과 화물선끼리만(지구는 빛을 받지 않는 재질) */
  [station, freighter].forEach((group) => {
    group.traverse((m) => {
      if (m.isMesh && m.material !== mat.glass && m.material !== mat.lamp) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });
  });

  /* ---------- 지구 ---------- */

  const earth = new Group();
  earth.position.y = -(EARTH.radius + EARTH.altitude);
  scene.add(earth);

  /**
   * 정이십면체를 잘게 나눈 구에서 윗부분(꼭대기에서 capDeg 안쪽) 면만 만든다.
   * 윗부분에 걸치는 큰 면만 나누므로 구 전체를 나누는 것보다 훨씬 가볍다.
   */
  function capFaces(detail, capDeg) {
    const capCos = Math.cos(capDeg * DEG);
    const t = (1 + Math.sqrt(5)) / 2;
    const v = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t],
      [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ].map((p) => new Vector3(...p).normalize());
    const ico = [
      0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
      3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
    ];
    // 큰 면 하나의 각 반지름은 약 37° — 그만큼 넉넉히 잡아 윗부분에 걸치는 면을 고른다
    const reach = Math.cos(Math.min(Math.PI, (capDeg + 40) * DEG));
    const faces = [];
    const grid = [];
    const point = (a, b, c, i, j) => {
      const w = detail;
      return new Vector3()
        .addScaledVector(a, (w - i - j) / w)
        .addScaledVector(b, i / w)
        .addScaledVector(c, j / w)
        .normalize();
    };
    const pushFace = (p0, p1, p2) => {
      const c = new Vector3().add(p0).add(p1).add(p2).normalize();
      if (c.y < capCos) return;
      faces.push({ v: [p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z], c: [c.x, c.y, c.z] });
    };
    for (let f = 0; f < ico.length; f += 3) {
      const [a, b, c] = [v[ico[f]], v[ico[f + 1]], v[ico[f + 2]]];
      const centre = new Vector3().add(a).add(b).add(c).normalize();
      if (centre.y < reach) continue;
      grid.length = 0;
      for (let i = 0; i <= detail; i += 1) {
        grid[i] = [];
        for (let j = 0; j <= detail - i; j += 1) grid[i][j] = point(a, b, c, i, j);
      }
      for (let i = 0; i < detail; i += 1) {
        for (let j = 0; j < detail - i; j += 1) {
          pushFace(grid[i][j], grid[i + 1][j], grid[i][j + 1]);
          if (j < detail - i - 1) pushFace(grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]);
        }
      }
    }
    return faces;
  }

  function shellGeometry(faces, radius) {
    const pos = new Float32Array(faces.length * 9);
    faces.forEach((f, i) => {
      for (let k = 0; k < 9; k += 1) pos[i * 9 + k] = f.v[k] * radius;
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(pos, 3));
    return geometry;
  }

  const terrain = valueNoise(7);
  const tint = valueNoise(19);
  const cloudNoise = valueNoise(31);
  const surface = (c) => terrain(c[0] * 9 + 3.1, c[1] * 9, c[2] * 9 - 1.7, 4);

  // 땅이 약 32% 가 되도록 문턱을 정한다(무늬 분포와 관계없이 같은 비율)
  const earthFaces = capFaces(EARTH.detail, EARTH.capDeg);
  const heights = earthFaces.map((f) => surface(f.c)).sort((a, b) => a - b);
  const landLevel = heights[Math.floor(heights.length * 0.68)];
  const rand = seeded(23);
  /** 면마다 색 종류와 밝기 흔들림 — 저폴리 면이 보이게 면마다 밝기를 조금씩 다르게 한다 */
  const faceKind = earthFaces.map((f) => {
    const h = surface(f.c);
    const jitter = 0.96 + rand() * 0.06;
    if (h >= landLevel) {
      const k = tint(f.c[0] * 14, f.c[1] * 14 + 5, f.c[2] * 14, 2);
      return { group: 'land', index: k < 0.42 ? 0 : k < 0.62 ? 1 : 2, jitter };
    }
    return { group: 'ocean', index: h > landLevel - 0.03 ? 1 : 0, jitter };
  });
  const earthGeometry = shellGeometry(earthFaces, EARTH.radius);
  earthGeometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(earthFaces.length * 9), 3));
  const earthMesh = new Mesh(earthGeometry, mat.earth);
  earth.add(earthMesh);

  // 구름 — 조금 큰 껍질에서 구름 면만 남긴다(약 30%)
  const cloudAt = (c) => cloudNoise(c[0] * 46, c[1] * 46 - 2, c[2] * 46 + 4, 3);
  const cloudAll = capFaces(EARTH.cloudDetail, EARTH.capDeg);
  const cloudValues = cloudAll.map((f) => cloudAt(f.c)).sort((a, b) => a - b);
  const cloudLevel = cloudValues[Math.floor(cloudValues.length * 0.7)];
  const cloudFaces = cloudAll.filter((f) => cloudAt(f.c) >= cloudLevel);
  const clouds = new Mesh(shellGeometry(cloudFaces, EARTH.radius + EARTH.cloudLift), mat.cloud);
  clouds.position.y = earth.position.y;
  scene.add(clouds);

  // 대기 띠 — 한 색의 반투명 껍질. 뒷면만 그려 지구 둘레에만 띠로 보인다
  const atmosphere = new Mesh(
    shellGeometry(capFaces(EARTH.atmosphereDetail, EARTH.atmosphereCapDeg), EARTH.radius + EARTH.atmosphereLift),
    mat.atmosphere,
  );
  atmosphere.position.y = earth.position.y;
  scene.add(atmosphere);

  // 도시 불빛 — 보이는 땅(정거장 아래 24° 안) 위 무리 둘레에 흩는다. 무리를 돌아가며 놓아 앞부분(낮은 품질)도 고르게 퍼진다
  const nearCos = Math.cos(24 * DEG);
  const landFaces = earthFaces.filter((f, i) => faceKind[i].group === 'land' && f.c[1] >= nearCos);
  const clusters = [];
  for (let i = 0; i < 70 && landFaces.length; i += 1) clusters.push(landFaces[Math.floor(rand() * landFaces.length)].c);
  const cityPositions = new Float32Array(QUALITY.cityHigh * 3);
  const cityColors = new Float32Array(QUALITY.cityHigh * 3);
  const cityBase = new Color(SCENE_COLOR.cityLight);
  const probe = new Vector3();
  for (let n = 0, tries = 0; n < QUALITY.cityHigh && tries < QUALITY.cityHigh * 20; tries += 1) {
    const c = clusters[n % clusters.length];
    const spread = 0.004 + rand() * 0.012;
    probe.set(c[0] + (rand() - 0.5) * spread, c[1] + (rand() - 0.5) * spread, c[2] + (rand() - 0.5) * spread).normalize();
    if (surface([probe.x, probe.y, probe.z]) < landLevel) continue;
    probe.multiplyScalar(EARTH.radius + 0.8);
    cityPositions.set([probe.x, probe.y, probe.z], n * 3);
    const b = 0.55 + rand() * 0.45;
    cityColors.set([cityBase.r * b, cityBase.g * b, cityBase.b * b], n * 3);
    n += 1;
  }
  const cityGeometry = new BufferGeometry();
  cityGeometry.setAttribute('position', new Float32BufferAttribute(cityPositions, 3));
  cityGeometry.setAttribute('color', new Float32BufferAttribute(cityColors, 3));
  mat.city = new PointsMaterial({
    size: QUALITY.cityPx,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const cityLights = new Points(cityGeometry, mat.city);
  cityLights.frustumCulled = false;
  earth.add(cityLights);

  /* ---------- 별 ---------- */

  const STAR_RADIUS = 6000;
  const starPositions = new Float32Array(QUALITY.starsHigh * 3);
  const starColors = new Float32Array(QUALITY.starsHigh * 3);
  const starTwinkle = new Float32Array(QUALITY.starsHigh * 4);
  const starTints = SCENE_COLOR.stars.map((hex) => new Color(hex));
  const srand = seeded(41);
  for (let i = 0; i < QUALITY.starsHigh; i += 1) {
    // 지평선 위 하늘 위주로 흩는다(아래쪽은 지구에 가려진다)
    const y = -0.42 + srand() * 1.42;
    const a = srand() * TAU;
    const r = Math.sqrt(1 - y * y);
    starPositions.set([Math.cos(a) * r * STAR_RADIUS, y * STAR_RADIUS, Math.sin(a) * r * STAR_RADIUS], i * 3);
    const tintColor = starTints[Math.floor(srand() * starTints.length)];
    const b = 0.45 + srand() * 0.55;
    starColors.set([tintColor.r * b, tintColor.g * b, tintColor.b * b], i * 3);
    // 반짝임: 위상, 빠르기(주기 1.5~4초), 세기, 점 크기 배율
    const period = 1.5 + srand() * 2.5;
    starTwinkle.set([srand() * TAU, TAU / period, 0.2 + srand() * 0.35, 0.75 + srand() * 0.6], i * 4);
  }
  const starGeometry = new BufferGeometry();
  starGeometry.setAttribute('position', new Float32BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('color', new Float32BufferAttribute(starColors, 3));
  starGeometry.setAttribute('twinkle', new Float32BufferAttribute(starTwinkle, 4));
  const twinkleTime = { value: POSTER_TIME };
  mat.stars = new PointsMaterial({
    size: QUALITY.starPx,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: SCENE_LIGHT.day.stars,
    depthWrite: false,
  });
  // 별마다 밝기만 천천히 바꾼다(번쩍이지 않는다). 시각은 장면 시각이라 움직임을 멈추면 함께 멈춘다
  mat.stars.onBeforeCompile = (shader) => {
    shader.uniforms.twinkleTime = twinkleTime;
    shader.vertexShader = `uniform float twinkleTime;\nattribute vec4 twinkle;\n${shader.vertexShader}`
      .replace(
        '#include <color_vertex>',
        '#include <color_vertex>\n\tvColor *= 1.0 - twinkle.z * ( 0.5 + 0.5 * sin( twinkleTime * twinkle.y + twinkle.x ) );',
      )
      .replace('gl_PointSize = size;', 'gl_PointSize = size * twinkle.w;');
  };
  const stars = new Points(starGeometry, mat.stars);
  stars.frustumCulled = false;
  scene.add(stars);

  /* ---------- 낮 쪽 · 밤 쪽 ---------- */

  const L0 = SCENE_LIGHT.day;
  const L1 = SCENE_LIGHT.night;
  const colorOf = (pair, t, out) => out.set(pair[0]).lerp(new Color(pair[1]), t);
  const palette = {
    ocean: SCENE_COLOR.ocean.map((pair) => pair.map((hex) => new Color(hex))),
    land: SCENE_COLOR.land.map((pair) => pair.map((hex) => new Color(hex))),
  };
  const earthColor = earthGeometry.attributes.color;
  const work = new Color();
  let nightness = side === 'night' ? 1 : 0;
  let navLevel = 1;

  function applyNav() {
    const k = lerp(L0.nav, L1.nav, nightness) * navLevel;
    mat.navRed.color.copy(navBase.red).multiplyScalar(k);
    mat.navGreen.color.copy(navBase.green).multiplyScalar(k);
  }

  function applyNightness(t) {
    colorOf(SCENE_COLOR.hemiSky, t, hemi.color);
    colorOf(SCENE_COLOR.hemiGround, t, hemi.groundColor);
    hemi.intensity = lerp(L0.hemi, L1.hemi, t);
    colorOf(SCENE_COLOR.keyLight, t, key.color);
    key.intensity = lerp(L0.key, L1.key, t);
    key.position.lerpVectors(SUN_DIR, MOON_DIR, t).normalize().multiplyScalar(60);
    workLight.intensity = lerp(L0.work, L1.work, t);
    colorOf(SCENE_COLOR.cell, t, mat.cell.color);
    colorOf(SCENE_COLOR.glass, t, mat.glass.color);
    colorOf(SCENE_COLOR.dockLamp, t, mat.lamp.color);
    colorOf(SCENE_COLOR.cloud, t, mat.cloud.color);
    mat.cloud.opacity = lerp(L0.cloud, L1.cloud, t);
    colorOf(SCENE_COLOR.atmosphere, t, mat.atmosphere.color);
    mat.atmosphere.opacity = lerp(L0.atmosphere, L1.atmosphere, t);
    mat.city.opacity = lerp(L0.city, L1.city, t);
    cityLights.visible = mat.city.opacity > 0.001;
    mat.stars.opacity = lerp(L0.stars, L1.stars, t);
    for (let i = 0; i < faceKind.length; i += 1) {
      const { group, index, jitter } = faceKind[i];
      const pair = palette[group][index];
      work.copy(pair[0]).lerp(pair[1], t).multiplyScalar(jitter);
      for (let v = 0; v < 3; v += 1) earthColor.setXYZ(i * 3 + v, work.r, work.g, work.b);
    }
    earthColor.needsUpdate = true;
    applyNav();
  }
  applyNightness(nightness);

  /* ---------- 움직임 — 같은 장면 시각이면 늘 같은 자리(포스터와 첫 프레임이 맞는다) ---------- */

  function applyMotion(t) {
    earth.rotation.y = (t / PERIOD.earth) * TAU;
    clouds.rotation.y = (t / PERIOD.cloud) * TAU;
    const angle = WING.base + WING.sweep * Math.sin((t / PERIOD.panel) * TAU);
    wingPivots.forEach((p) => {
      p.rotation.z = angle;
    });
    placeFreighter(t);
    twinkleTime.value = t;
  }

  /* ---------- 품질 ---------- */

  const starCount = () => (quality === 'high' ? QUALITY.starsHigh : QUALITY.starsLow);
  const cityCount = () => (quality === 'high' ? QUALITY.cityHigh : QUALITY.cityLow);

  function pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (poster) return 1;
    return Math.min(dpr, quality === 'high' ? QUALITY.pixelRatioHigh : QUALITY.pixelRatioLow);
  }

  function applyQuality() {
    key.castShadow = quality === 'high';
    // 낮은 품질의 점은 높은 품질 점들의 앞부분이다(같은 자리)
    starGeometry.setDrawRange(0, starCount());
    cityGeometry.setDrawRange(0, cityCount());
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
    dist: 60,
    target: HOME_TARGET.clone(),
  };
  let homeDist = 60;
  let lens = 1;
  let viewAspect = 1;
  let insetPx = 0;
  let minDist = CAMERA.minEffective;
  let maxDist = 100;
  let atHome = true;
  let userInteracted = false;
  let camTween = null;
  let sideTween = null;
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

  function stepSideTween(now) {
    if (!sideTween) return;
    const { from, to, start, duration } = sideTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    nightness = lerp(from, to, k);
    applyNightness(nightness);
    if (k >= 1) sideTween = null;
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
  const solarMarker = markers.find((m) => m.id === 'solar');

  function updateLabels(now) {
    if (!labelsEnabled) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const checkOcclusion = now - lastOcclusion > 120;
    if (checkOcclusion) lastOcclusion = now;
    // 태양 전지판 표지는 카메라에 가까운 쪽 날개에 붙는다 — 먼 날개는 화면 위쪽(장면 토글 쪽)으로 간다
    if (solarMarker) solarMarker.anchor.z = (camera.position.z >= 0 ? 1 : -1) * WING.z;
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
    // 위치 표시등 — 번쩍이지 않고 천천히 밝기만 바꾼다. 움직임을 멈추면 켜진 채로 둔다
    navLevel = animating ? 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((sceneTime / PERIOD.nav) * TAU)) : 1;
    applyNav();
    stepCameraTween(now);
    stepSideTween(now);
    applyMotion(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || sideTween) {
      requestRender();
    } else {
      last = 0;
    }
  }

  /* ---------- 크기 ---------- */

  /** 1단위 px 의 비 — 실시간 장면 ÷ 포스터 기준. 별·도시 불빛 점 크기를 정거장 배율에 맞춘다 */
  function pointScale(h, effective) {
    if (poster) return 1;
    const ref = POSTER[sizeClass()];
    return (h / effective) / (ref.refHeight / classDistance(sizeClass()));
  }

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(pixelRatio());
    renderer.setSize(w, h, false);
    const size = sizeClass();
    homeDist = classDistance(size);
    let effective;
    if (poster) {
      // 포스터: 3D와 같은 카메라 거리에서 기준 빈 자리만큼을 같은 배율로 그리고, 캔버스가 큰 만큼은 시야만 넓힌다
      const ref = POSTER[size];
      camera.aspect = ref.refWidth / ref.refHeight;
      camera.zoom = 1;
      camera.setViewOffset(ref.refWidth, ref.refHeight, -(w - ref.refWidth) / 2, -(h - ref.refHeight) / 2, w, h);
      insetPx = 0;
      viewAspect = ref.refWidth / ref.refHeight;
      lens = 1;
      effective = homeDist;
    } else {
      const raw = getInsets() || {};
      const insets = { left: Math.min(raw.left || 0, w * 0.6), top: raw.top || 0, bottom: raw.bottom || 0 };
      const free = freeArea(w, h, insets);
      effective = effectiveDistance(w, h, insets);
      // 카메라 거리는 폭 구간마다 고정 — 화면 비율 차이는 렌즈 배율과 시야 이동으로만 맞춘다
      lens = homeDist / effective;
      camera.aspect = w / h;
      camera.zoom = lens;
      const dx = -insets.left / 2;
      const dy = -(insets.top - insets.bottom) / 2;
      if (dx || dy) camera.setViewOffset(w, h, dx, dy, w, h);
      else camera.clearViewOffset();
      insetPx = insets.left;
      viewAspect = free.width / free.height;
    }
    camera.updateProjectionMatrix();
    const scale = pointScale(h, effective) * pixelRatio();
    mat.stars.size = QUALITY.starPx * scale;
    mat.city.size = QUALITY.cityPx * scale;
    markers.forEach((m) => {
      m.half = null;
    });
    minDist = CAMERA.minEffective * lens;
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
  mediumQuery.addEventListener('change', () => resize(), { signal });

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
    /** 장면 크기는 같아도 정보 패널·버튼 묶음 크기가 바뀌면(글자 확대 등) 배치를 다시 계산한다 */
    relayout() {
      resize();
    },
    focus(id) {
      const view = LANDMARK_3D[id];
      if (!view) return;
      interact();
      // 세로로 긴 장면에서는 같은 명소가 옆으로 넘치지 않게 더 멀리서 본다. 가장 가까운 거리보다 가깝지 않다
      const effective = Math.max(CAMERA.minEffective, view.distance * clamp(1.25 / viewAspect, 1, 2));
      startCameraTween(
        {
          az: view.azimuth * DEG,
          el: view.elevation * DEG,
          dist: effective * lens,
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
    setSide(next, animate) {
      side = next;
      canvas.setAttribute('aria-label', canvasLabel(side));
      const to = next === 'night' ? 1 : 0;
      if (!animate || reduced || !motion) {
        sideTween = null;
        nightness = to;
        applyNightness(nightness);
        requestRender();
        return;
      }
      sideTween = { from: nightness, to, start: performance.now(), duration: durations.sideShift };
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
    /** 검수용 — 지금 시점 값과 시점 이동 중인지. distance 는 카메라 거리, effective 는 실효 거리 */
    cameraState() {
      return {
        azimuth: cam.az / DEG,
        elevation: cam.el / DEG,
        distance: cam.dist,
        effective: cam.dist / lens,
        lens,
        minEffective: minDist / lens,
        target: cam.target.toArray(),
        tweening: Boolean(camTween),
        sceneTime,
      };
    },
    stats() {
      return {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        points: renderer.info.render.points,
        quality,
        stars: starCount(),
        cityLights: cityCount(),
        earthFaces: earthFaces.length,
        cloudFaces: cloudFaces.length,
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
