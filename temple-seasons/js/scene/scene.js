/*
 * 3D 장면 — 사계절 산사 마을 (설계서 3-1·3-2·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영.
 * 움직이는 것(입자·새·연기·물결·자동으로 둘러보기)은 전부 장면 시각 t 의 함수다.
 * 같은 t 면 늘 같은 자리라, 포스터와 실시간 첫 프레임이 겹친다.
 */
import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  RingGeometry,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import {
  BREAKPOINT,
  CAMERA,
  LANDMARK,
  MOTION_PERIOD,
  POSTER,
  QUALITY,
  SCENE_COLOR,
  SEASON,
  TERRACE,
} from '../tokens.js';
import { closestDistance, liveView, posterView } from '../framing.js';

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const UP = new Vector3(0, 1, 0);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
/** 두 값 가운데 큰 쪽을 고르되 이음매를 둥글게 한다(봉우리끼리 붙는 자리) */
const smoothMax = (a, b, k) => {
  const h = clamp(0.5 + (0.5 * (a - b)) / k, 0, 1);
  return lerp(b, a, h) + k * h * (1 - h);
};

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

/* ---------- 높이 함수 ---------- */

function hash2(ix, iz) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

/** 격자 값 노이즈 — 결과는 -1~1 */
function valueNoise(x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sz = fz * fz * (3 - 2 * fz);
  const a = lerp(hash2(ix, iz), hash2(ix + 1, iz), sx);
  const b = lerp(hash2(ix, iz + 1), hash2(ix + 1, iz + 1), sx);
  return lerp(a, b, sz) * 2 - 1;
}

function fbm(x, z, octaves = 4) {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i += 1) {
    sum += amp * valueNoise(x * freq + i * 17.3, z * freq - i * 9.1);
    freq *= 2.03;
    amp *= 0.5;
  }
  return sum;
}

/* ---------- 장면 배치 ---------- */

const TERRAIN = { size: 112, cz: -8 }; // 지형 격자 — 북쪽 산까지 담도록 가운데를 북쪽으로 옮겼다
const POND = { x: LANDMARK.pond.x, z: LANDMARK.pond.z, rx: 4.2, rz: 2.6, water: 0.06, bed: -0.55 };
const FIELDS = { x0: 10.5, x1: 20, z0: 6, z1: 14, y: 0.22 };
const BRIDGE = { x: POND.x, z0: 14.9, z1: 8.1, rise: 1.35, width: 1.7 };

/** 흙길(마을에서 돌다리를 지나 산문까지). 지형 색과 나무 자리가 같이 쓴다 */
const PATH = [
  [2.5, 24],
  [3.6, 18.6],
  [6.5, 15.4],
  [6.5, 7.7],
  [3.6, 6.1],
  [-0.6, 5.5],
  [-2.5, 5.2],
];

/** 마을 집 — x, z, 돌림, 지붕(tile 기와 · thatch 초가), 굴뚝 연기 */
const HOUSES = [
  [-9.5, 12.6, 0.15, 'tile', true],
  [-13.2, 15.4, -0.2, 'thatch', false],
  [-7.0, 16.2, 0.05, 'thatch', true],
  [-10.6, 19.0, 0.25, 'tile', false],
  [-15.6, 11.2, -0.1, 'thatch', false],
  [-4.6, 13.0, -0.12, 'tile', false],
  [-1.0, 19.6, 0.1, 'thatch', true],
  [-5.8, 20.6, -0.2, 'tile', false],
  [1.2, 13.8, 0.18, 'thatch', false],
  [10.4, 16.2, -0.15, 'tile', true],
  [13.6, 18.8, 0.1, 'thatch', false],
  [8.4, 19.8, 0.2, 'tile', false],
  [16.2, 15.8, -0.25, 'thatch', false],
  [12.2, 21.8, 0.05, 'tile', false],
  [-12.8, 22.4, 0.1, 'thatch', false],
  [6.4, 22.6, -0.1, 'thatch', false],
];

function distToSegment(px, pz, ax, az, bx, bz) {
  const vx = bx - ax;
  const vz = bz - az;
  const t = clamp(((px - ax) * vx + (pz - az) * vz) / (vx * vx + vz * vz || 1), 0, 1);
  return Math.hypot(px - (ax + vx * t), pz - (az + vz * t));
}

function pathDistance(x, z) {
  let d = Infinity;
  for (let i = 1; i < PATH.length; i += 1) {
    d = Math.min(d, distToSegment(x, z, PATH[i - 1][0], PATH[i - 1][1], PATH[i][0], PATH[i][1]));
  }
  return d;
}

/** 둥근 네모 모양 단의 가리개 — 안쪽 1, 바깥 soft 거리에서 0 */
function terraceMask(x, z, t, soft) {
  const r = 1.2;
  const dx = Math.abs(x - t.x) - (t.rx - r);
  const dz = Math.abs(z - t.z) - (t.rz - r);
  const d = Math.hypot(Math.max(dx, 0), Math.max(dz, 0)) + Math.min(Math.max(dx, dz), 0) - r;
  return 1 - smoothstep(0, soft, d);
}

const pondMask = (x, z) => 1 - smoothstep(0.9, 1.15, Math.hypot((x - POND.x) / POND.rx, (z - POND.z) / POND.rz));

function fieldMask(x, z) {
  const d = Math.max(FIELDS.x0 - x, x - FIELDS.x1, FIELDS.z0 - z, z - FIELDS.z1);
  return 1 - smoothstep(-0.4, 0.6, d);
}

/** 북쪽 큰 산, 동서 봉우리, 절을 감싸는 낮은 능선, 마을 둘레 낮은 언덕 */
function mountains(x, z) {
  const peak = (cx, cz, sx, sz, r, h, p) => h * Math.pow(clamp(1 - Math.hypot((x - cx) / sx, (z - cz) / sz) / r, 0, 1), p);
  // 큰 산은 종 모양(꼭대기가 둥글다) — 뾰족한 피라미드로 보이지 않게
  const dome = (cx, cz, sx, sz, r, h) => h * smoothstep(0, 1, 1 - Math.hypot((x - cx) / sx, (z - cz) / sz) / r);
  const main = dome(-2, -34, 1.2, 1, 32, 25);
  const west = dome(-30, -26, 1, 1.1, 22, 19);
  const east = dome(27, -26, 1, 1.15, 20, 17);
  const wRidge = peak(-20, -2, 7.5, 14, 1, 8.5, 1.3);
  const eRidge = peak(21, 0, 7.5, 13, 1, 7, 1.3);
  const swHill = dome(-30, 12, 1, 1, 13, 8.5);
  const wHill = dome(-44, -6, 1, 1.2, 15, 12);
  const seHill = peak(28, 18, 8, 8, 1, 4.5, 1.4);
  const back = smoothMax(smoothMax(main, smoothMax(west, east, 2), 2), wHill, 2);
  return smoothMax(back, smoothMax(smoothMax(wRidge, eRidge, 1.5), smoothMax(swHill, seHill, 1.5), 1.5), 2);
}

/** 절이 앉은 언덕 — 마을(남쪽)에서 산(북쪽)으로 오른다 */
const foothill = (x, z) => 8.2 * smoothstep(9.5, -13, z) * (1 - smoothstep(11, 20, Math.abs(x - 0.5)));

/** 지형 격자 바깥쪽은 골짜기 바닥 높이로 녹인다 */
const edgeFade = (x, z) => 1 - smoothstep(40, 54, Math.max(Math.abs(x), Math.abs(z - TERRAIN.cz)));

function baseHeight(x, z) {
  return smoothMax(mountains(x, z), foothill(x, z), 2.5) * edgeFade(x, z);
}

function rawHeight(x, z) {
  const base = baseHeight(x, z);
  const relief = smoothstep(0.5, 6, base);
  const detail = fbm(x * 0.1 + 3.1, z * 0.1 - 1.7) * 1.5 * relief * (0.4 + base / 21);
  const bump = (fbm(x * 0.08 - 7, z * 0.08 + 2, 2) + 1) * 0.18 * edgeFade(x, z);
  let h = Math.max(base + detail, 0) + bump * (1 - relief);
  // 마을 평지와 논밭
  const village = smoothstep(6.5, 9.5, z) * (1 - smoothstep(1.0, 3.5, base));
  h = lerp(h, TERRACE.village + bump * 0.4, village);
  h = lerp(h, FIELDS.y, fieldMask(x, z) * (1 - smoothstep(1.5, 3.5, base)));
  // 흙길은 둘레보다 조금 낮고 고르게
  const onPath = 1 - smoothstep(0.6, 1.6, pathDistance(x, z));
  h = lerp(h, Math.min(h, TERRACE.village + 0.05), onPath * village);
  // 절의 단(산문 앞, 앞마당, 본당 단 순서로 높아진다)
  h = lerp(h, TERRACE.gate.y, terraceMask(x, z, TERRACE.gate, 1.8));
  h = lerp(h, TERRACE.yard.y, terraceMask(x, z, TERRACE.yard, 0.9));
  h = lerp(h, TERRACE.hall.y, terraceMask(x, z, TERRACE.hall, 0.6));
  // 연못 바닥
  return lerp(h, POND.bed, pondMask(x, z));
}

/** 지형 높이 — 지형 격자·나무·집·표지 가림·카메라가 모두 이 함수를 쓴다 */
const terrainHeight = rawHeight;

/** 절 마당·단·길처럼 나무와 숲 바닥을 두지 않는 곳 */
function isCleared(x, z, margin = 0) {
  if (terraceMask(x, z, TERRACE.yard, 1.2 + margin) > 0.01) return true;
  if (terraceMask(x, z, TERRACE.hall, 1.2 + margin) > 0.01) return true;
  if (terraceMask(x, z, TERRACE.gate, 2.4 + margin) > 0.01) return true;
  if (Math.hypot((x - POND.x) / (POND.rx + 1.6 + margin), (z - POND.z) / (POND.rz + 1.6 + margin)) < 1) return true;
  if (fieldMask(x, z) > 0.01) return true;
  if (pathDistance(x, z) < 1.8 + margin) return true;
  // 산문에서 앞마당으로 오르는 계단
  if (Math.abs(x - LANDMARK.gate.x) < 2.4 && z > 1 && z < 6) return true;
  return HOUSES.some(([hx, hz]) => Math.hypot(x - hx, z - hz) < 2.4 + margin);
}

/** 활엽수 숲 자리 — 지형 색(숲 바닥)과 나무 자리가 같은 조건을 쓴다 */
function isForest(x, z, h) {
  if (h < 0.9 || h > 15) return false;
  if (valueNoise(x * 0.13 - 2, z * 0.13 + 8) < -0.3) return false;
  if (Math.hypot(x / 42, (z + 6) / 34) > 1) return false;
  return !isCleared(x, z);
}

/* ---------- 도형 도우미 ---------- */

/** 원뿔 꼭짓점을 흔들어 울퉁불퉁한 산으로 — 이음매(0°·360°) 꼭짓점이 같은 값을 받도록 각도·줄 번호로 해시한다 */
function roughenCone(geometry, radialSegments, spread, lift, seed) {
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i += 1) {
    const y = p.getY(i);
    if (y > 0.49) continue;
    const seg = Math.round((((Math.atan2(p.getZ(i), p.getX(i)) + TAU) % TAU) / TAU) * radialSegments) % radialSegments;
    const row = Math.round((0.5 - y) * 10);
    const k = 1 + (hash2(seg, row + seed) - 0.5) * spread;
    p.setXYZ(i, p.getX(i) * k, y + (hash2(seg, row + seed + 7) - 0.5) * lift * (y + 0.5), p.getZ(i) * k);
  }
  geometry.computeVertexNormals();
  return geometry;
}


function box(w, h, d, material) {
  return new Mesh(new BoxGeometry(w, h, d), material);
}

/** 두 점을 잇는 원기둥(종 고리 등) */
function beam(from, to, radius, material, segments = 6) {
  const dir = new Vector3().subVectors(to, from);
  const length = dir.length();
  const mesh = new Mesh(new CylinderGeometry(radius, radius, length, segments, 1), material);
  mesh.position.copy(from).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
  return mesh;
}

/**
 * 기와지붕 — 처마 끝(네 모서리)이 살짝 들린 모임지붕. 바닥 가운데가 원점, 앞이 +z.
 * w·d: 처마 폭·깊이, h: 용마루 높이, ridge: 용마루 길이 비율, lift: 모서리를 드는 높이
 */
function hipRoof(w, d, h, ridge, lift) {
  const L = -w / 2;
  const R = w / 2;
  const F = d / 2;
  const B = -d / 2;
  const rw = (w * ridge) / 2;
  const P = {
    FL: [L, lift, F],
    FR: [R, lift, F],
    BR: [R, lift, B],
    BL: [L, lift, B],
    FM: [0, 0, F],
    BM: [0, 0, B],
    LM: [L, lift * 0.35, 0],
    RM: [R, lift * 0.35, 0],
    A: [-rw, h, 0],
    Bq: [rw, h, 0],
    C: [0, 0.02, 0],
  };
  const tris = [
    ['FL', 'FM', 'A'],
    ['FM', 'Bq', 'A'],
    ['FM', 'FR', 'Bq'],
    ['BR', 'BM', 'Bq'],
    ['BM', 'A', 'Bq'],
    ['BM', 'BL', 'A'],
    ['BL', 'LM', 'A'],
    ['LM', 'FL', 'A'],
    ['FR', 'RM', 'Bq'],
    ['RM', 'BR', 'Bq'],
    // 처마 밑면
    ['FL', 'FM', 'C'],
    ['FM', 'FR', 'C'],
    ['FR', 'RM', 'C'],
    ['RM', 'BR', 'C'],
    ['BR', 'BM', 'C'],
    ['BM', 'BL', 'C'],
    ['BL', 'LM', 'C'],
    ['LM', 'FL', 'C'],
  ];
  const center = new Vector3(0, h * 0.35, 0);
  const pos = [];
  const a = new Vector3();
  const b = new Vector3();
  const c = new Vector3();
  const n = new Vector3();
  const mid = new Vector3();
  tris.forEach(([i, j, k], index) => {
    a.fromArray(P[i]);
    b.fromArray(P[j]);
    c.fromArray(P[k]);
    n.subVectors(b, a).cross(c.clone().sub(a));
    mid.copy(a).add(b).add(c).divideScalar(3);
    // 밑면(10번째부터)은 아래를, 나머지는 바깥을 보게 감는 방향을 맞춘다
    const outward = index >= 10 ? new Vector3(0, -1, 0) : mid.clone().sub(center);
    if (n.dot(outward) < 0) pos.push(...P[i], ...P[k], ...P[j]);
    else pos.push(...P[i], ...P[j], ...P[k]);
  });
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/** 입자 모양(32×32) — 색 함수 없이 픽셀로 그린다. shape: round · petal · leaf */
function particleTexture(shape) {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const cos = Math.cos(0.6);
  const sin = Math.sin(0.6);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x + 0.5 - size / 2) / (size / 2);
      const dy = (y + 0.5 - size / 2) / (size / 2);
      let d;
      if (shape === 'petal') d = Math.hypot(dx / 0.9, dy / 0.62);
      else if (shape === 'leaf') d = Math.hypot((dx * cos - dy * sin) / 0.95, (dx * sin + dy * cos) / 0.48);
      else d = Math.hypot(dx, dy);
      const i = (y * size + x) * 4;
      image.data[i] = 255;
      image.data[i + 1] = 255;
      image.data[i + 2] = 255;
      image.data[i + 3] = Math.round(255 * (1 - smoothstep(shape === 'round' ? 0.35 : 0.7, 1, d)));
    }
  }
  ctx.putImageData(image, 0, 0);
  return new CanvasTexture(canvas);
}

/** 명소마다 고를 때의 시점(거리는 zoom 1 기준) */
const VIEWS = {
  gate: { target: [LANDMARK.gate.x, 2.8, LANDMARK.gate.z], distance: 32, azimuth: 28, elevation: 22 },
  hall: { target: [LANDMARK.hall.x, 9.2, LANDMARK.hall.z], distance: 38, azimuth: 8, elevation: 24 },
  pagoda: { target: [LANDMARK.pagoda.x, 7.0, LANDMARK.pagoda.z], distance: 31, azimuth: -22, elevation: 22 },
  pond: { target: [LANDMARK.pond.x, 0.9, LANDMARK.pond.z], distance: 32, azimuth: 32, elevation: 30 },
  bell: { target: [LANDMARK.bell.x, 7.2, LANDMARK.bell.z], distance: 31, azimuth: 48, elevation: 22 },
};

const HOME_TARGET = new Vector3(...CAMERA.homeTarget);

/* ---------- 계절 값 ---------- */

const COLOR_KEYS = ['sky', 'key', 'ground', 'forest', 'field', 'path', 'valley', 'rock', 'tile', 'thatch', 'pineCap', 'water'];
const NUMBER_KEYS = ['keyIntensity', 'hemi', 'shadow', 'fogNear', 'fogFar', 'leafScale', 'lotus', 'ripple'];
const PARTICLE_KINDS = ['petal', 'leaf', 'snow'];

/* ---------- 장면 만들기 ---------- */

export async function createScene(opts) {
  const {
    container,
    labelLayer,
    landmarks,
    canvasLabel,
    getFrame = () => ({}),
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
  const isWide = () => wideQuery.matches;

  // 포스터는 그 폭의 기본 품질로 찍는다(넓은 폭 high, 좁은·중간 폭 low) — 실시간 첫 프레임과 같은 품질
  let quality = opts.quality || (poster ? POSTER[posterSize].quality : isWide() ? 'high' : 'low');
  let motion = opts.motion !== false;
  let reduced = Boolean(opts.reduced);
  let season = SEASON[opts.season] ? opts.season : 'autumn';

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(season));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    powerPreference: 'high-performance',
  });
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  const fog = new Fog(SEASON.autumn.sky, 60, 300);
  scene.fog = fog;
  scene.background = new Color(SEASON.autumn.sky);

  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 3000);

  /* 재질 */
  const lambert = (color, extra = {}) => new MeshLambertMaterial({ color, flatShading: true, ...extra });
  const mat = {
    terrain: new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    valley: lambert(SEASON.autumn.valley),
    farPeak: new MeshBasicMaterial({ color: 0xffffff }), // 먼 산은 빛을 받지 않는 실루엣 — 산마다 색을 따로 준다(instanceColor)
    pillar: lambert(SCENE_COLOR.pillar),
    band: lambert(SCENE_COLOR.band),
    plaster: lambert(SCENE_COLOR.plaster),
    timber: lambert(SCENE_COLOR.timber),
    granite: lambert(SCENE_COLOR.granite),
    ridge: lambert(SCENE_COLOR.ridge),
    bell: lambert(SCENE_COLOR.bell),
    tile: lambert(SEASON.autumn.tile),
    thatch: lambert(SEASON.autumn.thatch),
    trunk: lambert(SCENE_COLOR.trunk),
    leaves: lambert(0xffffff), // 나무마다 색을 따로 준다(instanceColor)
    pine: lambert(SCENE_COLOR.pine),
    pineCap: lambert(SEASON.autumn.pineCap),
    water: lambert(SEASON.autumn.water),
    lotus: lambert(SCENE_COLOR.lotus),
    bird: new MeshBasicMaterial({ color: SCENE_COLOR.bird, side: DoubleSide }),
    smoke: lambert(SCENE_COLOR.smoke, { transparent: true, opacity: 0.7, depthWrite: false }),
    blob: new MeshBasicMaterial({ color: SCENE_COLOR.shadow, transparent: true, opacity: 0.14, depthWrite: false }),
  };
  const rippleMats = [];

  const dummy = new Object3D();
  const blobs = new Group();
  scene.add(blobs);
  const casters = [];

  const addBlob = (x, z, r, y = terrainHeight(x, z)) => {
    const m = new Mesh(new CircleGeometry(r, 12).rotateX(-Math.PI / 2), mat.blob);
    m.position.set(x, y + 0.04, z);
    blobs.add(m);
  };

  /* ---------- 빛 ---------- */

  const hemi = new HemisphereLight(SEASON.autumn.sky, SEASON.autumn.ground, SEASON.autumn.hemi);
  scene.add(hemi);

  const key = new DirectionalLight(SEASON.autumn.key, SEASON.autumn.keyIntensity);
  key.position.set(-30, 40, 26); // 남서쪽 위의 해
  key.target.position.set(0, 0, 2);
  scene.add(key.target);
  key.shadow.mapSize.set(QUALITY.shadowMapSize, QUALITY.shadowMapSize);
  Object.assign(key.shadow.camera, { left: -34, right: 34, top: 34, bottom: -34, near: 1, far: 150 });
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.04;
  scene.add(key);

  /* ---------- 지형 ---------- */

  const segments = quality === 'high' ? QUALITY.terrainSegmentsHigh : QUALITY.terrainSegmentsLow;
  const grid = new PlaneGeometry(TERRAIN.size, TERRAIN.size, segments, segments).rotateX(-Math.PI / 2);
  grid.translate(0, 0, TERRAIN.cz);
  const gridPos = grid.attributes.position;
  for (let i = 0; i < gridPos.count; i += 1) {
    gridPos.setY(i, terrainHeight(gridPos.getX(i), gridPos.getZ(i)));
  }
  const terrainGeometry = grid.toNonIndexed();
  grid.dispose();
  terrainGeometry.computeVertexNormals();
  terrainGeometry.computeBoundingSphere();

  /* 삼각형마다 종류와 밝기 — 계절이 바뀌면 종류별 색만 바꿔 다시 칠한다 */
  const CAT = { ground: 0, forest: 1, rock: 2, path: 3, field: 4, valley: 5, pond: 6 };
  const triCount = terrainGeometry.attributes.position.count / 3;
  const triCat = new Uint8Array(triCount);
  const triShade = new Float32Array(triCount);
  {
    const pos = terrainGeometry.attributes.position;
    const a = new Vector3();
    const b = new Vector3();
    const c = new Vector3();
    const ab = new Vector3();
    const ac = new Vector3();
    for (let t = 0; t < triCount; t += 1) {
      a.fromBufferAttribute(pos, t * 3);
      b.fromBufferAttribute(pos, t * 3 + 1);
      c.fromBufferAttribute(pos, t * 3 + 2);
      const ny = ab.subVectors(b, a).cross(ac.subVectors(c, a)).normalize().y;
      const cx = (a.x + b.x + c.x) / 3;
      const cz = (a.z + b.z + c.z) / 3;
      const cy = (a.y + b.y + c.y) / 3;
      let cat = CAT.ground;
      if (pondMask(cx, cz) > 0.5) cat = CAT.pond;
      else if (
        terraceMask(cx, cz, TERRACE.yard, 0.5) > 0.5 ||
        terraceMask(cx, cz, TERRACE.hall, 0.5) > 0.5 ||
        terraceMask(cx, cz, TERRACE.gate, 1.0) > 0.5 ||
        (pathDistance(cx, cz) < 0.9 && cz > 5)
      )
        cat = CAT.path;
      else if (fieldMask(cx, cz) > 0.6) cat = CAT.field;
      else if (Math.abs(ny) < 0.72 && cy > 1.5) cat = CAT.rock;
      else if (cy > 15 && valueNoise(cx * 0.5, cz * 0.5) > 0.2) cat = CAT.rock;
      else if (isForest(cx, cz, cy)) cat = CAT.forest;
      else if (edgeFade(cx, cz) < 0.6 || Math.hypot(cx, (cz - 4) * 1.2) > 40) cat = CAT.valley;
      triCat[t] = cat;
      // 논은 칸마다 밝기를 조금 달리해 논배미가 보이게 한다
      const paddy = cat === CAT.field ? (hash2(Math.floor(cx / 2.4), Math.floor(cz / 2.2)) - 0.5) * 0.12 : 0;
      // 넓은 풀밭이 단색으로 보이지 않게 큰 얼룩을 더한다. 골짜기(지형 끝)는 바닥 평면과 같은 색으로 녹인다
      const far = smoothstep(30, 44, Math.hypot(cx, (cz - 4) * 1.2));
      const patch = valueNoise(cx * 0.09 + 4, cz * 0.09 - 3) * 0.06 * (1 - far);
      triShade[t] = cat === CAT.valley ? 1 : 1 + ((hash2(t, 7) - 0.5) * 0.05 + paddy + patch) * (1 - far);
    }
  }
  const terrainColors = new Float32Array(triCount * 9);
  terrainGeometry.setAttribute('color', new Float32BufferAttribute(terrainColors, 3));
  const terrainColorArray = terrainGeometry.attributes.color.array;
  const terrain = new Mesh(terrainGeometry, mat.terrain);
  terrain.receiveShadow = true;
  scene.add(terrain);

  const valleyFloor = new Mesh(new PlaneGeometry(1600, 1600).rotateX(-Math.PI / 2), mat.valley);
  valleyFloor.position.y = -0.05;
  valleyFloor.receiveShadow = true;
  scene.add(valleyFloor);

  /* 먼 산 — 둘레에 낮게. 안개에 흐려진다 */
  {
    const rand = seeded(5);
    const farGeometry = roughenCone(new ConeGeometry(1, 1, 9, 3, true), 9, 0.5, 0.12, 3);
    const count = 16;
    const far = new InstancedMesh(farGeometry, mat.farPeak, count);
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * TAU + rand() * 0.25;
      const dist = 190 + rand() * 50;
      const h = 9 + rand() * 9;
      const r = 40 + rand() * 20;
      dummy.position.set(Math.sin(angle) * dist, h / 2 - 1, -Math.cos(angle) * dist);
      dummy.rotation.set(0, rand() * TAU, 0);
      dummy.scale.set(r, h, r);
      dummy.updateMatrix();
      far.setMatrixAt(i, dummy.matrix);
      far.setColorAt(i, new Color(SCENE_COLOR.farPeak).multiplyScalar(1.02 + rand() * 0.08));
    }
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    far.frustumCulled = false;
    scene.add(far);
  }

  /* 뒤쪽 산줄기 — 절 뒤로 겹겹이 선 큰 산. 지형 격자 밖이라 원뿔로 그린다 */
  {
    const rand = seeded(17);
    const ridgeGeometry = roughenCone(new ConeGeometry(1, 1, 9, 3, true), 9, 0.45, 0.1, 5);
    const count = 11;
    const ridges = new InstancedMesh(ridgeGeometry, mat.farPeak, count);
    for (let i = 0; i < count; i += 1) {
      const angle = lerp(-1.05, 1.2, i / (count - 1)) + (rand() - 0.5) * 0.15; // 절 뒤(북쪽) 부채꼴
      const dist = 122 + rand() * 30;
      const h = 17 + rand() * 11;
      const r = 40 + rand() * 18;
      dummy.position.set(Math.sin(angle) * dist, h / 2 - 2, -10 - Math.cos(angle) * dist);
      dummy.rotation.set(0, rand() * TAU, 0);
      dummy.scale.set(r, h, r);
      dummy.updateMatrix();
      ridges.setMatrixAt(i, dummy.matrix);
      // 가까운 산줄기는 조금 진하게, 먼 산줄기는 옅게 — 겹친 산이 층으로 보인다
      ridges.setColorAt(i, new Color(SCENE_COLOR.farPeak).multiplyScalar(lerp(0.82, 0.98, (dist - 122) / 30)));
    }
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    ridges.frustumCulled = false;
    scene.add(ridges);
  }

  /* ---------- 돌 — 축대·계단·돌다리를 상자 하나로 몰아 그린다 ---------- */

  const stones = [];
  const addStone = (x, y, z, w, h, d, rx = 0, ry = 0) => stones.push({ x, y, z, w, h, d, rx, ry });

  // 앞마당 앞 축대(산문 계단 자리를 비운다)와 본당 단 앞 축대(본당 계단 자리를 비운다)
  addStone(-6.125, 2.62, 1.75, 4.95, 4.05, 0.6);
  addStone(4.625, 2.62, 1.75, 11.95, 4.05, 0.6);
  addStone(-4.65, 5.37, -6.25, 7.1, 2.15, 0.6);
  addStone(4.65, 5.37, -6.25, 7.1, 2.15, 0.6);
  // 산문에서 앞마당으로 오르는 계단 8칸, 앞마당에서 본당 단으로 오르는 계단 4칸
  for (let i = 0; i < 8; i += 1) {
    const top = TERRACE.gate.y + (i + 1) * 0.45;
    addStone(LANDMARK.gate.x, (top + 0.6) / 2, 4.15 - (i + 0.5) * 0.32, 2.2, top - 0.6, 0.34);
  }
  for (let i = 0; i < 4; i += 1) {
    const top = TERRACE.yard.y + (i + 1) * 0.45;
    addStone(0, (top + 4.3) / 2, -5.3 - (i + 0.5) * 0.32, 2.2, top - 4.3, 0.34);
  }
  // 둥글게 휜 돌다리 — 다리 바닥 10칸 + 양쪽 난간
  {
    const n = 10;
    const at = (s) => [BRIDGE.z0 + (BRIDGE.z1 - BRIDGE.z0) * s, 0.28 + BRIDGE.rise * Math.sin(Math.PI * s)];
    for (let i = 0; i < n; i += 1) {
      const [za, ya] = at(i / n);
      const [zb, yb] = at((i + 1) / n);
      const len = Math.hypot(zb - za, yb - ya) + 0.06;
      const tilt = Math.atan2(yb - ya, za - zb);
      const zc = (za + zb) / 2;
      const yc = (ya + yb) / 2;
      addStone(BRIDGE.x, yc, zc, BRIDGE.width, 0.36, len, tilt);
      [-1, 1].forEach((side) => addStone(BRIDGE.x + side * (BRIDGE.width / 2 - 0.08), yc + 0.3, zc, 0.16, 0.28, len, tilt));
    }
    addStone(BRIDGE.x, 0.2, BRIDGE.z0 + 0.25, 2.1, 0.6, 0.8);
    addStone(BRIDGE.x, 0.2, BRIDGE.z1 - 0.25, 2.1, 0.6, 0.8);
  }
  {
    const stoneMesh = new InstancedMesh(new BoxGeometry(1, 1, 1), mat.granite, stones.length);
    stones.forEach((s, i) => {
      dummy.position.set(s.x, s.y, s.z);
      dummy.rotation.set(s.rx, s.ry, 0);
      dummy.scale.set(s.w, s.h, s.d);
      dummy.updateMatrix();
      stoneMesh.setMatrixAt(i, dummy.matrix);
    });
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    stoneMesh.frustumCulled = false;
    scene.add(stoneMesh);
    casters.push(stoneMesh);
  }

  /* ---------- 본당 ---------- */

  {
    const L = LANDMARK.hall;
    const g = new Group();
    g.position.set(L.x, L.base, L.z);
    const platform = box(9.6, 0.7, 5.8, mat.granite);
    platform.position.y = 0.35;
    const step = box(2.6, 0.35, 0.45, mat.granite);
    step.position.set(0, 0.175, 3.12);
    const body = box(8.0, 2.35, 4.2, mat.plaster);
    body.position.y = 0.7 + 1.175;
    const doors = box(7.4, 1.95, 0.08, mat.timber);
    doors.position.set(0, 0.7 + 1.0, 2.12);
    g.add(platform, step, body, doors);
    [-3.9, -2.34, -0.78, 0.78, 2.34, 3.9].forEach((x) => {
      const p = new Mesh(new CylinderGeometry(0.15, 0.17, 2.35, 6), mat.pillar);
      p.position.set(x, 0.7 + 1.175, 2.24);
      g.add(p);
    });
    [-3.9, 3.9].forEach((x) => {
      const p = new Mesh(new CylinderGeometry(0.15, 0.17, 2.35, 6), mat.pillar);
      p.position.set(x, 0.7 + 1.175, -2.2);
      g.add(p);
    });
    const band = box(8.5, 0.34, 4.7, mat.band);
    band.position.y = 0.7 + 2.35 + 0.1;
    const roof = new Mesh(hipRoof(11.6, 7.6, 2.9, 0.42, 0.42), mat.tile);
    roof.position.y = 0.7 + 2.35 + 0.25;
    const ridge = box(5.2, 0.32, 0.4, mat.ridge);
    ridge.position.y = roof.position.y + 2.9 + 0.06;
    g.add(band, roof, ridge);
    scene.add(g);
    casters.push(g);
    addBlob(L.x, L.z, 5.2, L.base);
  }

  /* ---------- 석탑 ---------- */

  {
    const L = LANDMARK.pagoda;
    const g = new Group();
    g.position.set(L.x, L.base, L.z);
    let y = 0;
    [
      [2.8, 0.45],
      [2.2, 0.55],
    ].forEach(([w, h]) => {
      const b = box(w, h, w, mat.granite);
      b.position.y = y + h / 2;
      g.add(b);
      y += h;
    });
    // 몸돌 + 지붕돌(위가 좁은 네모 판) 3층
    [
      [1.15, 0.8, 1.0, 0.55],
      [0.95, 0.6, 0.86, 0.47],
      [0.8, 0.5, 0.74, 0.4],
    ].forEach(([bw, bh, rb, rt]) => {
      const b = box(bw, bh, bw, mat.granite);
      b.position.y = y + bh / 2;
      const r = new Mesh(new CylinderGeometry(rt * Math.SQRT2, rb * Math.SQRT2, 0.28, 4), mat.granite);
      r.rotation.y = Math.PI / 4;
      r.position.y = y + bh + 0.14;
      g.add(b, r);
      y += bh + 0.28;
    });
    const spire = new Mesh(new CylinderGeometry(0.06, 0.08, 1.0, 6), mat.granite);
    spire.position.y = y + 0.5;
    const knob = new Mesh(new SphereGeometry(0.14, 6, 4), mat.granite);
    knob.position.y = y + 1.0;
    g.add(spire, knob);
    scene.add(g);
    casters.push(g);
    addBlob(L.x, L.z, 1.9, L.base);
  }

  /* ---------- 종각 ---------- */

  {
    const L = LANDMARK.bell;
    const g = new Group();
    g.position.set(L.x, L.base, L.z);
    g.rotation.y = -0.25;
    const base = box(3.4, 0.45, 3.4, mat.granite);
    base.position.y = 0.225;
    g.add(base);
    [
      [-1.2, -1.2],
      [1.2, -1.2],
      [1.2, 1.2],
      [-1.2, 1.2],
    ].forEach(([x, z]) => {
      const p = new Mesh(new CylinderGeometry(0.13, 0.15, 2.55, 6), mat.pillar);
      p.position.set(x, 0.45 + 1.275, z);
      g.add(p);
    });
    const ceiling = box(2.9, 0.28, 2.9, mat.band);
    ceiling.position.y = 0.45 + 2.55 + 0.14;
    const roof = new Mesh(hipRoof(4.8, 4.8, 1.9, 0.06, 0.4), mat.tile);
    roof.position.y = 0.45 + 2.55 + 0.28;
    const ridge = box(0.4, 0.26, 0.4, mat.ridge);
    ridge.position.y = roof.position.y + 1.9;
    const bellBody = new Mesh(new CylinderGeometry(0.4, 0.56, 1.15, 10), mat.bell);
    bellBody.position.y = 0.45 + 2.55 - 0.35 - 0.575;
    const bellTop = new Mesh(new CylinderGeometry(0.16, 0.4, 0.22, 10), mat.bell);
    bellTop.position.y = bellBody.position.y + 0.575 + 0.11;
    const hook = beam(new Vector3(0, bellTop.position.y + 0.1, 0), new Vector3(0, 0.45 + 2.55, 0), 0.05, mat.ridge, 4);
    g.add(ceiling, roof, ridge, bellBody, bellTop, hook);
    scene.add(g);
    casters.push(g);
    addBlob(L.x, L.z, 2.4, L.base);
  }

  /* ---------- 산문(문 + 양쪽 담) ---------- */

  {
    const L = LANDMARK.gate;
    const g = new Group();
    g.position.set(L.x, L.base, L.z);
    [
      [-1.25, -0.55],
      [1.25, -0.55],
      [1.25, 0.55],
      [-1.25, 0.55],
    ].forEach(([x, z]) => {
      const p = new Mesh(new CylinderGeometry(0.13, 0.15, 2.3, 6), mat.pillar);
      p.position.set(x, 1.15, z);
      g.add(p);
    });
    const lintel = box(2.9, 0.3, 1.4, mat.band);
    lintel.position.y = 2.3 + 0.15;
    const roof = new Mesh(hipRoof(4.6, 2.9, 1.35, 0.55, 0.32), mat.tile);
    roof.position.y = 2.3 + 0.3;
    const ridge = box(2.4, 0.22, 0.3, mat.ridge);
    ridge.position.y = roof.position.y + 1.35 + 0.04;
    g.add(lintel, roof, ridge);
    [-1, 1].forEach((side) => {
      const wall = box(3.2, 1.35, 0.36, mat.plaster);
      wall.position.set(side * (1.35 + 1.6), 0.675, 0);
      const cap = box(3.4, 0.22, 0.72, mat.tile);
      cap.position.set(side * (1.35 + 1.6), 1.35 + 0.11, 0);
      g.add(wall, cap);
    });
    scene.add(g);
    casters.push(g);
    addBlob(L.x, L.z, 2.4, L.base);
  }

  /* ---------- 마을 ---------- */

  const chimneys = [];
  {
    const n = HOUSES.length;
    const bodies = new InstancedMesh(new BoxGeometry(1, 1, 1), mat.plaster, n);
    const tileHouses = HOUSES.filter((h) => h[3] === 'tile');
    const thatchHouses = HOUSES.filter((h) => h[3] === 'thatch');
    const tileRoofs = new InstancedMesh(hipRoof(3.3, 2.5, 1.1, 0.5, 0.16), mat.tile, tileHouses.length);
    const thatchRoofs = new InstancedMesh(hipRoof(3.1, 2.3, 1.25, 0.3, 0), mat.thatch, thatchHouses.length);
    const stacks = new InstancedMesh(new BoxGeometry(0.34, 1.0, 0.34), mat.granite, HOUSES.filter((h) => h[4]).length);
    let ti = 0;
    let hi = 0;
    let ci = 0;
    HOUSES.forEach(([x, z, rot, roofKind, smoke], i) => {
      const s = 0.85 + hash2(i, 5) * 0.25;
      const y = terrainHeight(x, z);
      dummy.position.set(x, y + 0.6 * s, z);
      dummy.rotation.set(0, rot, 0);
      dummy.scale.set(2.6 * s, 1.25 * s, 1.7 * s);
      dummy.updateMatrix();
      bodies.setMatrixAt(i, dummy.matrix);
      dummy.position.set(x, y + 1.2 * s, z);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      if (roofKind === 'tile') tileRoofs.setMatrixAt(ti++, dummy.matrix);
      else thatchRoofs.setMatrixAt(hi++, dummy.matrix);
      if (smoke) {
        // 굴뚝은 집 뒤쪽 옆에 낮게 선다
        const lx = 1.15 * s;
        const lz = -1.15 * s;
        const cx = x + lx * Math.cos(rot) + lz * Math.sin(rot);
        const cz = z - lx * Math.sin(rot) + lz * Math.cos(rot);
        const stack = 1.0 + 0.5 * s;
        dummy.position.set(cx, y + stack / 2, cz);
        dummy.rotation.set(0, rot, 0);
        dummy.scale.set(1, stack, 1);
        dummy.updateMatrix();
        stacks.setMatrixAt(ci++, dummy.matrix);
        chimneys.push([cx, y + stack + 0.15, cz]);
      }
      addBlob(x, z, 1.7 * s, y);
    });
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    const g = new Group();
    [bodies, tileRoofs, thatchRoofs, stacks].forEach((m) => {
      m.frustumCulled = false;
      g.add(m);
    });
    scene.add(g);
    casters.push(g);
  }

  /* ---------- 연못 ---------- */

  const water = new Mesh(new CircleGeometry(1, 28).rotateX(-Math.PI / 2), mat.water);
  water.scale.set(POND.rx * 0.98, 1, POND.rz * 0.98);
  water.position.set(POND.x, POND.water, POND.z);
  water.receiveShadow = true;
  scene.add(water);

  const lotus = (() => {
    const rand = seeded(33);
    const spots = [];
    for (let tries = 0; tries < 400 && spots.length < 12; tries += 1) {
      const a = rand() * TAU;
      const r = Math.sqrt(rand()) * 0.82;
      const x = POND.x + Math.cos(a) * r * POND.rx;
      const z = POND.z + Math.sin(a) * r * POND.rz;
      if (Math.abs(x - BRIDGE.x) < 1.4) continue;
      if (spots.some((s) => Math.hypot(x - s.x, z - s.z) < 0.85)) continue;
      spots.push({ x, z, s: 0.75 + rand() * 0.5, r: rand() * TAU });
    }
    const mesh = new InstancedMesh(new CircleGeometry(0.45, 7).rotateX(-Math.PI / 2), mat.lotus, spots.length);
    mesh.frustumCulled = false;
    scene.add(mesh);
    return {
      apply(k) {
        spots.forEach((s, i) => {
          dummy.position.set(s.x, POND.water + 0.03, s.z);
          dummy.rotation.set(0, s.r, 0);
          dummy.scale.setScalar(Math.max(0.0001, s.s * k));
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        });
        dummy.scale.setScalar(1);
        dummy.rotation.set(0, 0, 0);
        mesh.instanceMatrix.needsUpdate = true;
        mesh.visible = k > 0.02;
      },
    };
  })();

  /* 물결 — 고리가 번지며 옅어진다. 겨울에는 얼어서 없다 */
  const ripples = [
    [-2.3, -0.5, 0],
    [2.2, 0.6, 0.38],
    [-1.6, 1.0, 0.7],
  ].map(([dx, dz, phase]) => {
    const m = new MeshBasicMaterial({ color: SCENE_COLOR.ripple, transparent: true, opacity: 0, depthWrite: false });
    rippleMats.push(m);
    const ring = new Mesh(new RingGeometry(0.86, 1, 24).rotateX(-Math.PI / 2), m);
    ring.position.set(POND.x + dx, POND.water + 0.02, POND.z + dz);
    scene.add(ring);
    return { ring, mat: m, phase };
  });

  /* ---------- 나무 ---------- */

  const trees = (() => {
    const rand = seeded(21);
    const steep = (x, z) => {
      const dx = terrainHeight(x + 0.5, z) - terrainHeight(x - 0.5, z);
      const dz = terrainHeight(x, z + 0.5) - terrainHeight(x, z - 0.5);
      return Math.hypot(dx, dz);
    };
    const nearLandmark = (x, z) =>
      Math.hypot(x - LANDMARK.gate.x, z - LANDMARK.gate.z) < 4.2 || Math.hypot(x - LANDMARK.bell.x, z - LANDMARK.bell.z) < 3;
    // 활엽수: 절 둘레 비탈과 마을. 정해 둔 나무(마을 큰 나무·앞마당 나무)를 먼저 둔다
    const leafy = [
      { x: -3.4, z: 16.8, s: 2.0 },
      { x: -7.8, z: 0.4, s: 1.15 },
      { x: -8.0, z: -5.3, s: 1.2 },
      { x: 10.0, z: -5.6, s: 1.1 },
      { x: 9.6, z: 7.6, s: 1.3 },
      { x: 2.8, z: 9.6, s: 1.2 },
      { x: -12.6, z: 9.4, s: 1.4 },
    ].map((t) => ({ ...t, y: terrainHeight(t.x, t.z), r: rand() * TAU }));
    for (let tries = 0; tries < 12000 && leafy.length < 250; tries += 1) {
      const x = (rand() * 2 - 1) * 38;
      const z = -34 + rand() * 58;
      const h = terrainHeight(x, z);
      const villageTree = h < 1 && z > 8 && rand() < 0.08;
      if (!(isForest(x, z, h) || (villageTree && !isCleared(x, z, 0.4)))) continue;
      if (steep(x, z) > 1.25 || nearLandmark(x, z)) continue;
      if (leafy.some((s) => Math.hypot(x - s.x, z - s.z) < 1.45)) continue;
      leafy.push({ x, z, y: h, s: 0.8 + rand() * 0.45, r: rand() * TAU });
    }
    // 소나무: 높은 비탈과 능선. 낮은 곳에는 드문드문
    const pines = [];
    for (let tries = 0; tries < 12000 && pines.length < 220; tries += 1) {
      const x = (rand() * 2 - 1) * 46;
      const z = -54 + rand() * 60;
      const h = terrainHeight(x, z);
      if (h < 6.5 && !(h > 2.5 && valueNoise(x * 0.2, z * 0.2) > 0.35)) continue;
      if (h > 24 || steep(x, z) > 1.5 || isCleared(x, z, 0.6) || nearLandmark(x, z)) continue;
      if (Math.hypot(x / 48, (z + 20) / 40) > 1) continue;
      if (pines.some((s) => Math.hypot(x - s.x, z - s.z) < 1.25) || leafy.some((s) => Math.hypot(x - s.x, z - s.z) < 1.2)) continue;
      pines.push({ x, z, y: h, s: 0.8 + rand() * 0.5, r: rand() * TAU });
    }

    const trunk = new InstancedMesh(new CylinderGeometry(0.12, 0.17, 1.3, 5, 1, true), mat.trunk, leafy.length);
    const crown = new InstancedMesh(new IcosahedronGeometry(1, 0), mat.leaves, leafy.length);
    leafy.forEach((t, i) => {
      dummy.position.set(t.x, t.y + 0.6 * t.s, t.z);
      dummy.rotation.set(0, t.r, 0);
      dummy.scale.setScalar(t.s);
      dummy.updateMatrix();
      trunk.setMatrixAt(i, dummy.matrix);
      t.pick = Math.floor(hash2(i, 41) * 4);
      t.shade = 1 + (hash2(i, 43) - 0.5) * 0.12;
    });
    const pineTiers = [
      [new ConeGeometry(0.85, 1.6, 6, 1, true), mat.pine, 0.9],
      [new ConeGeometry(0.6, 1.3, 6, 1, true), mat.pine, 1.85],
      [new ConeGeometry(0.36, 0.8, 6, 1, true), mat.pineCap, 2.55],
    ].map(([geometry, material, y]) => [new InstancedMesh(geometry, material, pines.length), y]);
    pines.forEach((t, i) => {
      dummy.rotation.set(0, t.r, 0);
      dummy.scale.setScalar(t.s);
      pineTiers.forEach(([mesh, y]) => {
        dummy.position.set(t.x, t.y + y * t.s, t.z);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
    });
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);

    const shadowGroup = new Group();
    [crown, ...pineTiers.map(([m]) => m)].forEach((m) => {
      m.frustumCulled = false;
      shadowGroup.add(m);
    });
    trunk.frustumCulled = false;
    scene.add(shadowGroup, trunk);
    casters.push(shadowGroup);
    trunk.receiveShadow = true;

    const tmp = new Color();
    return {
      count: leafy.length + pines.length,
      /** 잎 색(colors: 나무마다 r,g,b)과 잎 덩어리 크기 */
      apply(colors, scale) {
        leafy.forEach((t, i) => {
          const s = t.s * scale;
          dummy.position.set(t.x, t.y + (1.3 + 0.85) * t.s, t.z);
          dummy.rotation.set(0, t.r, 0);
          dummy.scale.set(1.25 * s, 1.05 * s, 1.25 * s);
          dummy.updateMatrix();
          crown.setMatrixAt(i, dummy.matrix);
          crown.setColorAt(i, tmp.setRGB(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]));
        });
        dummy.scale.setScalar(1);
        dummy.rotation.set(0, 0, 0);
        crown.instanceMatrix.needsUpdate = true;
        crown.instanceColor.needsUpdate = true;
      },
      /** 계절의 잎 색을 나무마다 고른다 */
      colorsFor(palette) {
        const out = new Float32Array(leafy.length * 3);
        leafy.forEach((t, i) => {
          tmp.set(palette[t.pick]).multiplyScalar(t.shade);
          out[i * 3] = tmp.r;
          out[i * 3 + 1] = tmp.g;
          out[i * 3 + 2] = tmp.b;
        });
        return out;
      },
    };
  })();

  /* ---------- 새 — 종각 위를 천천히 돈다 ---------- */

  const birds = (() => {
    const wing = (side) => {
      const g = new BufferGeometry();
      g.setAttribute('position', new Float32BufferAttribute([0, 0, 0.22, 0, 0, -0.2, side * 0.85, 0, -0.08], 3));
      g.computeVertexNormals();
      return g;
    };
    const list = [0, 1, 2, 3, 4].map((i) => ({
      r: 4.2 + i * 0.8,
      y: 12.4 + (i % 3) * 0.7,
      period: MOTION_PERIOD.bird * (0.8 + i * 0.12),
      phase: i * 1.3,
      dir: i % 2 ? 1 : -1,
    }));
    const left = new InstancedMesh(wing(-1), mat.bird, list.length);
    const right = new InstancedMesh(wing(1), mat.bird, list.length);
    [left, right].forEach((m) => {
      m.frustumCulled = false;
      scene.add(m);
    });
    const c = LANDMARK.bell;
    return {
      update(t) {
        list.forEach((b, i) => {
          const a = b.dir * ((t / b.period) * TAU) + b.phase;
          const x = c.x + Math.cos(a) * b.r;
          const z = c.z + Math.sin(a) * b.r;
          const y = b.y + Math.sin(t * 0.7 + b.phase) * 0.3;
          const heading = Math.atan2(-Math.sin(a) * b.dir, Math.cos(a) * b.dir);
          const flap = Math.sin(t * 9 + b.phase * 3) * 0.55;
          [
            [left, flap],
            [right, -flap],
          ].forEach(([mesh, roll]) => {
            dummy.position.set(x, y, z);
            dummy.rotation.set(0, heading, roll, 'YXZ');
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
          });
        });
        dummy.rotation.set(0, 0, 0, 'XYZ');
        left.instanceMatrix.needsUpdate = true;
        right.instanceMatrix.needsUpdate = true;
      },
    };
  })();

  /* ---------- 굴뚝 연기 ---------- */

  const smoke = (() => {
    const per = 6;
    const mesh = new InstancedMesh(new IcosahedronGeometry(0.5, 0), mat.smoke, chimneys.length * per);
    mesh.frustumCulled = false;
    scene.add(mesh);
    return {
      update(t) {
        chimneys.forEach(([x, y, z], c) => {
          for (let k = 0; k < per; k += 1) {
            const age = (t / MOTION_PERIOD.smoke + k / per + c * 0.29) % 1;
            const s = (0.35 + age * 1.1) * (1 - smoothstep(0.72, 1, age));
            dummy.position.set(x + age * 2.2, y + age * 3.4, z + age * 0.9);
            dummy.rotation.set(age * 2 + c, age * 3 + k, 0);
            dummy.scale.setScalar(Math.max(0.0001, s));
            dummy.updateMatrix();
            mesh.setMatrixAt(c * per + k, dummy.matrix);
          }
        });
        dummy.scale.setScalar(1);
        dummy.rotation.set(0, 0, 0);
        mesh.instanceMatrix.needsUpdate = true;
      },
    };
  })();

  /* ---------- 계절 입자 — 꽃잎·낙엽·눈 ---------- */

  const BOX = { x: 32, z0: -26, z1: 28, top: 22 };
  const MOVE = {
    petal: { fall: [0.35, 0.7], wind: 0.5, sway: 0.9, freq: 0.7, size: 0.68, shape: 'petal' },
    leaf: { fall: [0.6, 1.1], wind: 0.35, sway: 1.1, freq: 0.9, size: 0.72, shape: 'leaf' },
    snow: { fall: [1.0, 2.0], wind: 0.6, sway: 0.4, freq: 0.8, size: 0.7, shape: 'round' },
  };
  const maxPointSize = { value: QUALITY.particleMaxPx };
  const particleMaps = [];
  const particles = PARTICLE_KINDS.map((kind, k) => {
    const max = QUALITY.particles[kind].high;
    const m = MOVE[kind];
    const seeds = new Float32Array(max * 5);
    const colors = new Float32Array(max * 3);
    const rand = seeded(91 + k * 7);
    const palette = SCENE_COLOR[kind].map((c) => new Color(c));
    for (let i = 0; i < max; i += 1) {
      seeds.set(
        [(rand() * 2 - 1) * BOX.x, lerp(BOX.z0, BOX.z1, rand()), rand() * BOX.top, lerp(m.fall[0], m.fall[1], rand()), rand() * TAU],
        i * 5,
      );
      const c = palette[Math.floor(rand() * palette.length)];
      colors.set([c.r, c.g, c.b], i * 3);
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(max * 3), 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    const map = particleTexture(m.shape);
    particleMaps.push(map);
    const material = new PointsMaterial({
      size: m.size,
      map,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    // 카메라 가까이 온 입자가 커다란 점이 되지 않게 화면 크기를 막는다
    material.onBeforeCompile = (shader) => {
      shader.uniforms.maxPointSize = maxPointSize;
      shader.vertexShader = `uniform float maxPointSize;\n${shader.vertexShader.replace(
        '#include <fog_vertex>',
        'gl_PointSize = min( gl_PointSize, maxPointSize );\n#include <fog_vertex>',
      )}`;
    };
    mat[`particle_${kind}`] = material;
    const points = new Points(geometry, material);
    points.frustumCulled = false;
    points.visible = false;
    scene.add(points);
    return { kind, m, seeds, geometry, positions: geometry.attributes.position.array, points, material };
  });

  const particleCount = (kind) => QUALITY.particles[kind][quality === 'high' ? 'high' : 'low'];

  /** 시각 t 의 입자 자리 — 같은 t 면 늘 같은 자리라 포스터와 첫 프레임이 맞는다 */
  function updateParticles(t) {
    const span = BOX.x * 2;
    particles.forEach((p) => {
      if (!p.points.visible) return;
      const n = particleCount(p.kind);
      const { seeds, positions, m } = p;
      for (let i = 0; i < n; i += 1) {
        const s = i * 5;
        const phase = seeds[s + 4];
        let y = (seeds[s + 2] - seeds[s + 3] * t) % BOX.top;
        if (y < 0) y += BOX.top;
        let x = seeds[s] + m.wind * t + Math.sin(t * m.freq + phase) * m.sway + BOX.x;
        x = (((x % span) + span) % span) - BOX.x;
        const z = seeds[s + 1] + Math.cos(t * m.freq * 0.8 + phase) * m.sway * 0.6;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      p.geometry.setDrawRange(0, n);
      p.geometry.attributes.position.needsUpdate = true;
    });
  }

  /* 그림자 설정 */
  casters.forEach((obj) => {
    obj.traverse((m) => {
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });
  });

  /* ---------- 계절 ---------- */

  /** 계절 하나의 장면 값(색은 Color, 잎 색은 나무마다) */
  function seasonValues(id) {
    const s = SEASON[id];
    const v = {};
    COLOR_KEYS.forEach((k) => {
      v[k] = new Color(s[k]);
    });
    NUMBER_KEYS.forEach((k) => {
      v[k] = s[k];
    });
    PARTICLE_KINDS.forEach((k) => {
      v[k] = s.particles[k];
    });
    v.leafColors = trees.colorsFor(s.leaves);
    return v;
  }

  function cloneValues(v) {
    const out = { ...v };
    COLOR_KEYS.forEach((k) => {
      out[k] = v[k].clone();
    });
    out.leafColors = v.leafColors.slice();
    return out;
  }

  function mixValues(a, b, k, out) {
    COLOR_KEYS.forEach((key) => out[key].copy(a[key]).lerp(b[key], k));
    NUMBER_KEYS.forEach((key) => {
      out[key] = lerp(a[key], b[key], k);
    });
    PARTICLE_KINDS.forEach((key) => {
      out[key] = lerp(a[key], b[key], k);
    });
    for (let i = 0; i < out.leafColors.length; i += 1) out.leafColors[i] = lerp(a.leafColors[i], b.leafColors[i], k);
  }

  const pondColor = new Color(SCENE_COLOR.pondBed);
  const fogOffset = { near: 40, far: 250 };
  let rippleStrength = 1;

  function paintTerrain(v) {
    const palette = [v.ground, v.forest, v.rock, v.path, v.field, v.valley, pondColor];
    const arr = terrainColorArray;
    for (let t = 0; t < triCount; t += 1) {
      const c = palette[triCat[t]];
      const k = triShade[t];
      const r = c.r * k;
      const g = c.g * k;
      const b = c.b * k;
      const o = t * 9;
      arr[o] = r;
      arr[o + 1] = g;
      arr[o + 2] = b;
      arr[o + 3] = r;
      arr[o + 4] = g;
      arr[o + 5] = b;
      arr[o + 6] = r;
      arr[o + 7] = g;
      arr[o + 8] = b;
    }
    terrainGeometry.attributes.color.needsUpdate = true;
  }

  function applySeason(v) {
    scene.background.copy(v.sky);
    fog.color.copy(v.sky);
    hemi.color.copy(v.sky);
    hemi.groundColor.copy(v.ground);
    hemi.intensity = v.hemi;
    key.color.copy(v.key);
    key.intensity = v.keyIntensity;
    key.shadow.intensity = v.shadow;
    fogOffset.near = v.fogNear;
    fogOffset.far = v.fogFar;
    paintTerrain(v);
    mat.valley.color.copy(v.valley);
    mat.tile.color.copy(v.tile);
    mat.thatch.color.copy(v.thatch);
    mat.pineCap.color.copy(v.pineCap);
    mat.water.color.copy(v.water);
    trees.apply(v.leafColors, v.leafScale);
    lotus.apply(v.lotus);
    rippleStrength = v.ripple;
    particles.forEach((p) => {
      p.material.opacity = v[p.kind];
      p.points.visible = p.material.opacity > 0.01;
    });
  }

  const current = seasonValues(season);
  applySeason(current);

  /* ---------- 품질 ---------- */

  function pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (poster) return 1;
    return Math.min(dpr, quality === 'high' ? QUALITY.pixelRatioHigh : QUALITY.pixelRatioLow);
  }

  function applyQuality() {
    key.castShadow = quality === 'high';
    blobs.visible = quality !== 'high';
  }
  applyQuality();

  /* ---------- 시점 ---------- */

  const elMin = CAMERA.elevationMin * DEG;
  const elMax = CAMERA.elevationMax * DEG;
  const homeAz = CAMERA.startAzimuth * DEG;
  const homeDist = CAMERA.homeDistance;
  // mix: 시야 이동을 처음 시점(0)과 명소 시점(1, 회전 중심이 맞춤 영역 가운데) 사이에서 섞는다
  const cam = {
    az: homeAz,
    el: CAMERA.startElevation * DEG,
    dist: homeDist,
    mix: 0,
    target: HOME_TARGET.clone(),
  };
  let fit = { zoom: 1, ox: 0, oy: 0, focusOx: 0, focusOy: 0 };
  let viewW = 1;
  let viewH = 1;
  let lastOffset = '';
  let viewAspect = 1;
  let insetPx = 0;
  let minDist = 20;
  const maxDist = homeDist * CAMERA.maxDistanceFactor;
  let atHome = true;
  let userInteracted = false;
  let swayTime = 0;
  let camTween = null;
  let seasonTween = null;
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

  function applyViewOffset() {
    const ox = lerp(fit.ox, fit.focusOx, cam.mix);
    const oy = lerp(fit.oy, fit.focusOy, cam.mix);
    const keyStr = `${ox.toFixed(2)}|${oy.toFixed(2)}|${viewW}|${viewH}|${fit.zoom}`;
    if (keyStr === lastOffset) return;
    lastOffset = keyStr;
    camera.setViewOffset(viewW, viewH, ox, oy, viewW, viewH);
    camera.updateProjectionMatrix();
  }

  function applyCamera() {
    applyViewOffset();
    const { az, el, dist, target } = cam;
    camera.position.set(
      target.x + dist * Math.cos(el) * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + dist * Math.cos(el) * Math.cos(az),
    );
    // 명소 가까이에서 돌면 카메라가 산비탈 안으로 들어갈 수 있다 — 지형 위로 올린다
    const ground = terrainHeight(camera.position.x, camera.position.z) + CAMERA.groundClearance;
    if (camera.position.y < ground) camera.position.y = ground;
    camera.lookAt(target);
    fog.near = dist + fogOffset.near;
    fog.far = dist + fogOffset.far;
    reportLimits();
  }

  function startCameraTween(goal, duration) {
    const to = {
      az: cam.az + wrapAngle((goal.az ?? cam.az) - cam.az),
      el: clamp(goal.el ?? cam.el, elMin, elMax),
      dist: clampDist(goal.dist ?? cam.dist),
      mix: goal.mix ?? cam.mix,
      target: (goal.target ?? cam.target).clone(),
    };
    if (reduced || duration <= 0) {
      cam.az = to.az;
      cam.el = to.el;
      cam.dist = to.dist;
      cam.mix = to.mix;
      cam.target.copy(to.target);
      camTween = null;
      requestRender();
      return;
    }
    camTween = {
      from: { az: cam.az, el: cam.el, dist: cam.dist, mix: cam.mix, target: cam.target.clone() },
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
    cam.mix = lerp(from.mix, to.mix, k);
    cam.target.lerpVectors(from.target, to.target, k);
    if (k >= 1) camTween = null;
  }

  function stepSeasonTween(now) {
    if (!seasonTween) return;
    const { from, to, start, duration } = seasonTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    mixValues(from, to, k, current);
    applySeason(current);
    if (k >= 1) seasonTween = null;
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
    const L = LANDMARK[id];
    return {
      id,
      el,
      anchor: new Vector3(L.x, L.top, L.z),
      priority: L.priority || 0,
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
  let lastOcclusion = 0;

  /** 카메라에서 표지까지 높이 함수를 따라가며 산등성이가 가리는지 본다 */
  function hiddenByRidge(anchor) {
    const steps = 28;
    const from = camera.position;
    for (let i = 1; i < steps; i += 1) {
      const t = i / steps;
      const x = lerp(from.x, anchor.x, t);
      const y = lerp(from.y, anchor.y, t);
      const z = lerp(from.z, anchor.z, t);
      if (y < terrainHeight(x, z) - 0.25) return true;
    }
    return false;
  }

  /** 표지가 피해야 할 장면 위 버튼 묶음(토글·시점 버튼) */
  const avoid = opts.avoid || [];

  function updateLabels(now) {
    if (!labelsEnabled) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const checkOcclusion = now - lastOcclusion > 120;
    if (checkOcclusion) lastOcclusion = now;
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
    const pillBox = (m, x, y) => {
      const cy = y - m.height / 2;
      return { l: x - m.pillW / 2, r: x + m.pillW / 2, t: cy - m.pillH / 2, b: cy + m.pillH / 2 };
    };

    const items = markers.map((m) => {
      if (checkOcclusion) m.occluded = hiddenByRidge(m.anchor);
      projected.copy(m.anchor).project(camera);
      const rawX = (projected.x * 0.5 + 0.5) * w;
      const onScreen =
        projected.z < 1 && rawX > insetPx && projected.x < 1.02 && projected.y > -1.02 && projected.y < 1.08;
      const minX = insetPx + m.half + edge;
      const x = clamp(rawX, minX, Math.max(minX, w - m.half - edge));
      const y = clamp((-projected.y * 0.5 + 0.5) * h, m.height + edge, Math.max(m.height + edge, h - edge));
      return { m, x, y, depth: projected.z, candidate: onScreen && !m.occluded };
    });

    // 고른 표지에 먼저 자리를 주고, 다음은 가장 높은 명소(본당), 나머지는 가까운 것부터 준다.
    items.sort(
      (a, b) => Number(b.m.current) - Number(a.m.current) || b.m.priority - a.m.priority || a.depth - b.depth,
    );
    const placed = [];
    items.forEach((it) => {
      let { y } = it;
      let show = it.candidate;
      if (show) {
        let rect = pillBox(it.m, it.x, y);
        const block = it.m.current && blocked.find((r) => hit(rect, r));
        if (block) {
          y += block.t > h / 2 ? block.t - edge * 2 - rect.b : block.b + edge * 2 - rect.t;
          y = clamp(y, it.m.height + edge, Math.max(it.m.height + edge, h - edge));
          rect = pillBox(it.m, it.x, y);
        }
        if (blocked.some((r) => hit(rect, r)) || placed.some((p) => hit(rect, p))) show = false;
        else placed.push(rect);
      }
      it.m.el.style.transform = `translate3d(${it.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      if (show !== it.m.shown) {
        it.m.shown = show;
        it.m.el.classList.toggle('is-hidden', !show);
      }
    });
  }

  /* ---------- 그리기 ---------- */

  // 포스터를 찍은 시각에서 시작한다 — 포스터에서 실시간 장면으로 바뀔 때 입자·새·연기·물결 자리가 튀지 않는다
  const POSTER_TIME = 7.4;
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

  function setQuality(next) {
    if (next === quality) return;
    quality = next;
    applyQuality();
    resize();
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

  function updateRipples(t) {
    ripples.forEach((r) => {
      const age = (t / MOTION_PERIOD.ripple + r.phase) % 1;
      r.ring.scale.setScalar(0.25 + age * 1.5);
      r.mat.opacity = 0.55 * (1 - age) * rippleStrength;
      r.ring.visible = r.mat.opacity > 0.01;
    });
  }

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    const animating = shouldAnimate();
    if (animating) {
      sceneTime += dt;
      // 처음 들어왔을 때만 좌우로 천천히 흔든다(한 바퀴 돌지 않는다). 회전 중심이 본당이라 본당 표지는 움직이지 않는다
      if (!userInteracted && !reduced && !camTween && atHome) {
        swayTime += dt;
        cam.az = homeAz + CAMERA.swayDegrees * DEG * Math.sin((swayTime / MOTION_PERIOD.sway) * TAU);
      }
    }
    stepCameraTween(now);
    stepSeasonTween(now);
    birds.update(sceneTime);
    smoke.update(sceneTime);
    updateRipples(sceneTime);
    updateParticles(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || seasonTween) {
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
    maxPointSize.value = QUALITY.particleMaxPx * renderer.getPixelRatio();
    camera.aspect = w / h;
    // 카메라 자리는 그대로 두고, 화면 크기 차이는 시야 배율과 시야 이동으로만 맞춘다(framing.js)
    const frameBox = poster ? {} : getFrame();
    fit = poster ? posterView(posterSize) : liveView(w, h, frameBox);
    camera.zoom = fit.zoom;
    viewW = w;
    viewH = h;
    lastOffset = '';
    applyViewOffset();
    insetPx = poster ? 0 : Math.min(frameBox.inset || 0, w * 0.6);
    viewAspect = (w - insetPx) / h;
    minDist = closestDistance(fit.zoom);
    markers.forEach((m) => {
      m.half = null;
    });
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
    startCameraTween({ az: homeAz, el: CAMERA.startElevation * DEG, dist: homeDist, mix: 0, target: HOME_TARGET }, duration);

  return {
    canvas,
    /** 장면 크기는 같아도 정보 패널 폭이나 버튼 묶음 높이가 바뀌면(글자 확대 등) 맞춤을 다시 계산한다 */
    relayout() {
      resize();
    },
    focus(id) {
      const view = VIEWS[id];
      if (!view) return;
      interact();
      startCameraTween(
        {
          az: view.azimuth * DEG,
          el: view.elevation * DEG,
          // 거리는 zoom 1 기준이다. 세로로 긴 장면에서는 같은 명소가 옆으로 넘치지 않게 더 멀리서 본다
          dist: view.distance * fit.zoom * clamp(1.25 / viewAspect, 1, 2),
          mix: 1,
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
    setSeason(next, animate) {
      if (!SEASON[next]) return;
      season = next;
      canvas.setAttribute('aria-label', canvasLabel(season));
      const to = seasonValues(next);
      if (!animate || reduced || !motion) {
        seasonTween = null;
        mixValues(to, to, 1, current);
        applySeason(current);
        requestRender();
        return;
      }
      // 바뀌는 중에 다른 계절을 고르면 지금 섞인 상태에서 이어 바꾼다
      seasonTween = { from: cloneValues(current), to, start: performance.now(), duration: durations.seasonShift };
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
        minDistance: minDist,
        maxDistance: maxDist,
        zoom: fit.zoom,
        target: cam.target.toArray(),
        tweening: Boolean(camTween),
        seasonTweening: Boolean(seasonTween),
      };
    },
    /** 검수용 — 명소 표지 자리(장면 좌표 px)와 보이는지 */
    markerState() {
      return markers.map((m) => {
        const r = m.el.getBoundingClientRect();
        const base = container.getBoundingClientRect();
        return { id: m.id, shown: m.shown, x: r.left - base.left + r.width / 2, y: r.bottom - base.top };
      });
    },
    stats() {
      return {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        points: renderer.info.render.points,
        trees: trees.count,
        quality,
        season,
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
      rippleMats.forEach((m) => m.dispose());
      particleMaps.forEach((m) => m.dispose());
      renderer.dispose();
      canvas.remove();
      markers.forEach((m) => m.el.remove());
    },
  };
}
