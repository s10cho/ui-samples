/*
 * 3D 장면 — 겨울 산 스키장 (설계서 3-1·3-2·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영.
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
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { BREAKPOINT, CAMERA, MOTION_PERIOD, QUALITY, SCENE_COLOR, WEATHER_COLOR, WEATHER_LIGHT } from '../tokens.js';
import { fitDistance, posterDistance } from '../framing.js';

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

/** 같은 산 모양이 매번 나오도록 고정 씨앗 난수를 쓴다 */
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

/* ---------- 산 크기와 명소 자리 ---------- */

const TERRAIN_SIZE = 72;
const PEAK = { x: 0, z: -6, h: 19 };
const PLAZA = { x: 0.6, z: 16.6, rx: 10.5, rz: 4.4, y: 0.3 };
const LODGE = { x: -2.6, z: 17.4, rot: 0.2 };
const LIFT = { bottom: [2.4, 14.4], top: [0.9, -2.0], towers: 5, chairs: 22, gauge: 0.55 };

/** 점 여러 개를 지나는 부드러운 길(uniform Catmull-Rom)을 촘촘한 꺾은선으로 */
function sampleCurve(points, perSegment) {
  const p = [points[0], ...points, points[points.length - 1]];
  const out = [];
  const at = (a, b, c, d, t, k) => {
    const t2 = t * t;
    const t3 = t2 * t;
    return 0.5 * (2 * b[k] + (c[k] - a[k]) * t + (2 * a[k] - 5 * b[k] + 4 * c[k] - d[k]) * t2 + (3 * b[k] - a[k] - 3 * c[k] + d[k]) * t3);
  };
  for (let i = 1; i < p.length - 2; i += 1) {
    for (let s = 0; s < perSegment; s += 1) {
      const t = s / perSegment;
      out.push([at(p[i - 1], p[i], p[i + 1], p[i + 2], t, 0), at(p[i - 1], p[i], p[i + 1], p[i + 2], t, 1)]);
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

function distToSegment(px, pz, ax, az, bx, bz) {
  const vx = bx - ax;
  const vz = bz - az;
  const t = clamp(((px - ax) * vx + (pz - az) * vz) / (vx * vx + vz * vz || 1), 0, 1);
  return Math.hypot(px - (ax + vx * t), pz - (az + vz * t));
}

/** 꺾은선 — 길이 비율로 자리 찾기, 점까지 거리 */
function polyline(samples) {
  const cum = [0];
  for (let i = 1; i < samples.length; i += 1) {
    cum.push(cum[i - 1] + Math.hypot(samples[i][0] - samples[i - 1][0], samples[i][1] - samples[i - 1][1]));
  }
  const length = cum[cum.length - 1];
  const xs = samples.map((s) => s[0]);
  const zs = samples.map((s) => s[1]);
  const box = { x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(...zs) };
  return {
    length,
    /** u(0~1) 자리의 점과 진행 방향 */
    at(u, out) {
      const s = clamp(u, 0, 1) * length;
      let i = 1;
      while (i < cum.length - 1 && cum[i] < s) i += 1;
      const seg = cum[i] - cum[i - 1] || 1;
      const k = (s - cum[i - 1]) / seg;
      const a = samples[i - 1];
      const b = samples[i];
      out.x = lerp(a[0], b[0], k);
      out.z = lerp(a[1], b[1], k);
      out.tx = (b[0] - a[0]) / seg;
      out.tz = (b[1] - a[1]) / seg;
      return out;
    },
    distance(x, z, far) {
      if (x < box.x0 - far || x > box.x1 + far || z < box.z0 - far || z > box.z1 + far) return Infinity;
      let d = Infinity;
      for (let i = 1; i < samples.length; i += 1) {
        const a = samples[i - 1];
        const b = samples[i];
        d = Math.min(d, distToSegment(x, z, a[0], a[1], b[0], b[1]));
      }
      return d;
    },
  };
}

/** 슬로프 길(위에서 아래로, xz). 같은 길로 지형을 다지고 스키어가 내려온다 */
const RUNS = {
  easy: {
    half: 1.9,
    line: polyline(sampleCurve([[4.6, -1.4], [8.9, 2.4], [6.2, 6.4], [9.9, 10.2], [6.0, 14.4]], 10)),
  },
  expert: {
    half: 1.35,
    line: polyline(sampleCurve([[-2.6, -3.2], [-5.2, 2.0], [-7.0, 7.8], [-5.4, 14.0]], 10)),
  },
};
const RUN_LIST = Object.values(RUNS);
const GROOM_FADE = 1.6;

function massif(x, z) {
  const main = PEAK.h * Math.pow(clamp(1 - Math.hypot(x - PEAK.x, (z - PEAK.z) / 0.92) / 25, 0, 1), 1.7);
  const west = 11.5 * Math.pow(clamp(1 - Math.hypot(x + 13.5, z + 9) / 12.5, 0, 1), 1.5);
  const east = 8.6 * Math.pow(clamp(1 - Math.hypot((x - 12.5) / 1.35, z + 8.5) / 11, 0, 1), 1.4);
  return smoothMax(main, smoothMax(west, east, 1.5), 1.5);
}

/** 슬로프 길 위(1)에서 바깥(0)까지 — 다진 눈의 정도 */
function groomMask(x, z) {
  let g = 0;
  RUN_LIST.forEach((run) => {
    const d = run.line.distance(x, z, run.half + GROOM_FADE);
    if (d < Infinity) g = Math.max(g, 1 - smoothstep(run.half, run.half + GROOM_FADE, d));
  });
  return g;
}

function plazaMask(x, z) {
  const d = Math.hypot((x - PLAZA.x) / PLAZA.rx, (z - PLAZA.z) / PLAZA.rz);
  return 1 - smoothstep(0.8, 1.25, d);
}

/** 지형 격자 바깥쪽은 골짜기 바닥과 같은 높이·색으로 둥글게 녹인다 */
const edgeFade = (x, z) => 1 - smoothstep(22, 32, Math.hypot(x, z - 2));

function rawHeight(x, z) {
  const base = massif(x, z);
  const relief = smoothstep(0.3, 5, base);
  const ridge = 1 - Math.abs(valueNoise(x * 0.07 + 11, z * 0.07 + 5));
  const detail = (fbm(x * 0.11 + 3.1, z * 0.11 - 1.7) * 1.7 + (ridge - 0.5) * 1.5) * (0.5 + base / PEAK.h);
  const g = groomMask(x, z);
  let h = base + relief * detail * (1 - 0.85 * g);
  const bump = (fbm(x * 0.08 - 7, z * 0.08 + 2, 2) + 1) * 0.25 * edgeFade(x, z);
  h = Math.max(h, 0) + bump * (1 - relief);
  return lerp(h, PLAZA.y, plazaMask(x, z));
}

const SUMMIT_Y = rawHeight(PEAK.x, PEAK.z);

/** 지형 높이 — 지형 격자·나무·건물·스키어·표지 가림·카메라가 모두 이 함수를 쓴다 */
function terrainHeight(x, z) {
  const h = rawHeight(x, z);
  const top = 1 - smoothstep(1.2, 2.4, Math.hypot(x - PEAK.x, z - PEAK.z));
  return lerp(h, SUMMIT_Y, top);
}

const liftDistance = (x, z) => distToSegment(x, z, LIFT.bottom[0], LIFT.bottom[1], LIFT.top[0], LIFT.top[1]);

/** 나무 선 아래 숲인가 — 지형 색(숲 바닥)과 나무 자리가 같은 조건을 쓴다 */
function isForest(x, z, h) {
  const treeLine = 8.2 + valueNoise(x * 0.18 + 4, z * 0.18) * 1.6;
  if (h > treeLine) return false;
  // 숲은 산 둘레 타원 안에만 둔다 — 지형 격자의 네모난 끝이 드러나지 않게
  const reach = Math.hypot(x / 25, (z - 2.5) / 22) + valueNoise(x * 0.16 - 6, z * 0.16 + 3) * 0.12;
  if (reach > 1) return false;
  if (valueNoise(x * 0.13 - 2, z * 0.13 + 8) < -0.22) return false;
  if (plazaMask(x, z) > 0.02 || groomMask(x, z) > 0.02) return false;
  if (liftDistance(x, z) < 1.8) return false;
  return Math.hypot(x - PEAK.x, z - PEAK.z) > 3;
}

/** 명소마다 표지 위치와 고를 때의 시점 */
function landmarkViews() {
  const run = (key, u) => {
    const p = RUNS[key].line.at(u, {});
    return [p.x, terrainHeight(p.x, p.z), p.z];
  };
  const easyMark = run('easy', 0.42);
  const easyMid = run('easy', 0.5);
  const expertMark = run('expert', 0.5);
  const expertMid = run('expert', 0.5);
  const lodgeY = terrainHeight(LODGE.x, LODGE.z);
  const liftMid = [(LIFT.bottom[0] + LIFT.top[0]) / 2, 0, (LIFT.bottom[1] + LIFT.top[1]) / 2];
  liftMid[1] = terrainHeight(liftMid[0], liftMid[2]);
  // 리프트 표지는 줄 위쪽(68% 지점)에 단다 — 줄 가운데에 달면 상급 슬로프 표지와 겹친다
  const f = 0.68;
  const lx = lerp(LIFT.bottom[0], LIFT.top[0], f);
  const lz = lerp(LIFT.bottom[1], LIFT.top[1], f);
  const cable = lerp(terrainHeight(...LIFT.bottom) + 2.0, terrainHeight(...LIFT.top) + 2.0, f);
  const liftY = Math.max(terrainHeight(lx, lz) + 2.8, cable) + 1.8;
  return {
    lift: { anchor: [lx, liftY, lz], target: [liftMid[0], liftMid[1] + 3.0, liftMid[2] - 0.8], distance: 44, azimuth: 64, elevation: 24 },
    easy: { anchor: [easyMark[0], easyMark[1] + 2.0, easyMark[2]], target: [easyMid[0], easyMid[1] + 1.0, easyMid[2]], distance: 36, azimuth: 40, elevation: 26 },
    expert: { anchor: [expertMark[0], expertMark[1] + 2.0, expertMark[2]], target: [expertMid[0], expertMid[1] + 1.0, expertMid[2]], distance: 36, azimuth: -34, elevation: 24 },
    lodge: { anchor: [LODGE.x, lodgeY + 3.6, LODGE.z], target: [LODGE.x + 1.2, lodgeY + 1.0, LODGE.z - 0.6], distance: 23, azimuth: 18, elevation: 26 },
    summit: { anchor: [PEAK.x, SUMMIT_Y + 3.4, PEAK.z], target: [PEAK.x, SUMMIT_Y - 0.6, PEAK.z], distance: 24, azimuth: -42, elevation: 28 },
  };
}

const HOME_TARGET = new Vector3(0.4, 6.4, 2.6);

/* ---------- 도형 도우미 ---------- */

/** 두 점을 잇는 원기둥(철탑·줄·깃대) */
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

/** 눈 입자 모양 — 가장자리가 흐린 작은 원(32×32). 색 함수 없이 픽셀로 그린다 */
function flakeTexture() {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const d = Math.hypot(x + 0.5 - size / 2, y + 0.5 - size / 2) / (size / 2);
      const i = (y * size + x) * 4;
      image.data[i] = 255;
      image.data[i + 1] = 255;
      image.data[i + 2] = 255;
      image.data[i + 3] = Math.round(255 * (1 - smoothstep(0.35, 1, d)));
    }
  }
  ctx.putImageData(image, 0, 0);
  return new CanvasTexture(canvas);
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
  let weather = opts.weather === 'snow' ? 'snow' : 'clear';

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(weather));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    powerPreference: 'high-performance',
  });
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  const fog = new Fog(WEATHER_COLOR.clear.sky, 60, 300);
  scene.fog = fog;
  scene.background = new Color(WEATHER_COLOR.clear.sky);

  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 3000);

  /* 재질 */
  const lambert = (color, extra = {}) => new MeshLambertMaterial({ color, flatShading: true, ...extra });
  const mat = {
    terrain: new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    valley: lambert(SCENE_COLOR.valley),
    farPeak: lambert(SCENE_COLOR.farPeak),
    tree: lambert(SCENE_COLOR.tree),
    treeSnow: lambert(SCENE_COLOR.treeSnow),
    rock: lambert(SCENE_COLOR.rock),
    structure: lambert(SCENE_COLOR.structure),
    accent: lambert(SCENE_COLOR.accent),
    wood: lambert(SCENE_COLOR.wood),
    dark: lambert(SCENE_COLOR.jacketDark),
    blob: new MeshBasicMaterial({ color: SCENE_COLOR.shadow, transparent: true, opacity: 0.14, depthWrite: false }),
  };

  const dummy = new Object3D();
  const blobs = new Group();
  scene.add(blobs);
  const casters = [];

  const addBlob = (x, z, r) => {
    const m = new Mesh(new CircleGeometry(r, 12).rotateX(-Math.PI / 2), mat.blob);
    m.position.set(x, terrainHeight(x, z) + 0.04, z);
    blobs.add(m);
  };

  /* ---------- 빛 ---------- */

  const hemi = new HemisphereLight(WEATHER_COLOR.clear.sky, SCENE_COLOR.snowCover, WEATHER_LIGHT.clear.hemi);
  scene.add(hemi);

  const key = new DirectionalLight(WEATHER_COLOR.clear.keyLight, WEATHER_LIGHT.clear.key);
  key.position.set(-24, 30, 22); // 남서쪽 위의 낮은 겨울 해
  key.shadow.mapSize.set(QUALITY.shadowMapSize, QUALITY.shadowMapSize);
  Object.assign(key.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 110 });
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.04;
  scene.add(key);

  /* ---------- 지형 ---------- */

  const segments = quality === 'high' ? QUALITY.terrainSegmentsHigh : QUALITY.terrainSegmentsLow;
  const grid = new PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, segments, segments).rotateX(-Math.PI / 2);
  const gridPos = grid.attributes.position;
  for (let i = 0; i < gridPos.count; i += 1) {
    gridPos.setY(i, terrainHeight(gridPos.getX(i), gridPos.getZ(i)));
  }
  const terrainGeometry = grid.toNonIndexed();
  grid.dispose();
  terrainGeometry.computeVertexNormals();
  terrainGeometry.computeBoundingSphere();

  /* 꼭짓점 색 — 삼각형마다 한 색. 다진 눈 > 바위 > 숲 바닥 > 골짜기 > 눈 */
  {
    const pos = terrainGeometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const palette = {
      groomed: new Color(SCENE_COLOR.groomed),
      rock: new Color(SCENE_COLOR.rock),
      forest: new Color(SCENE_COLOR.forestFloor),
      valley: new Color(SCENE_COLOR.valley),
      snow: new Color(SCENE_COLOR.snowCover),
    };
    const a = new Vector3();
    const b = new Vector3();
    const c = new Vector3();
    const ab = new Vector3();
    const ac = new Vector3();
    for (let t = 0; t < pos.count / 3; t += 1) {
      a.fromBufferAttribute(pos, t * 3);
      b.fromBufferAttribute(pos, t * 3 + 1);
      c.fromBufferAttribute(pos, t * 3 + 2);
      const ny = ab.subVectors(b, a).cross(ac.subVectors(c, a)).normalize().y;
      const cx = (a.x + b.x + c.x) / 3;
      const cz = (a.z + b.z + c.z) / 3;
      const cy = (a.y + b.y + c.y) / 3;
      let col = palette.snow;
      if (plazaMask(cx, cz) > 0.5 || groomMask(cx, cz) > 0.55) col = palette.groomed;
      else if (Math.abs(ny) < 0.78 && cy > 1.5) col = palette.rock;
      else if (cy > 11.5 && valueNoise(cx * 0.5, cz * 0.5) > 0.35) col = palette.rock;
      else if (isForest(cx, cz, cy)) col = palette.forest;
      else if ((cy < 0.6 && massif(cx, cz) < 0.3) || edgeFade(cx, cz) < 0.5) col = palette.valley;
      const shade = 1 + (hash2(t, 7) - 0.5) * 0.05;
      for (let k = 0; k < 3; k += 1) {
        colors.set([col.r * shade, col.g * shade, col.b * shade], (t * 3 + k) * 3);
      }
    }
    terrainGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  }
  const terrain = new Mesh(terrainGeometry, mat.terrain);
  terrain.receiveShadow = true;
  scene.add(terrain);

  const valleyFloor = new Mesh(new PlaneGeometry(1600, 1600).rotateX(-Math.PI / 2), mat.valley);
  valleyFloor.position.y = -0.08;
  valleyFloor.receiveShadow = true;
  scene.add(valleyFloor);

  /* 먼 산 — 둘레에 낮게. 안개에 흐려진다 */
  {
    const rand = seeded(5);
    // 꼭짓점을 흔들어 매끈한 원뿔이 아니라 울퉁불퉁한 산으로 보이게 한다
    const farGeometry = new ConeGeometry(1, 1, 9, 3, true);
    const fp = farGeometry.attributes.position;
    for (let i = 0; i < fp.count; i += 1) {
      const y = fp.getY(i);
      if (y > 0.49) continue;
      const k = 1 + (hash2(i, 3) - 0.5) * 0.5;
      fp.setXYZ(i, fp.getX(i) * k, y + (hash2(i, 11) - 0.5) * 0.12 * (y + 0.5), fp.getZ(i) * k);
    }
    const count = 16;
    const far = new InstancedMesh(farGeometry, mat.farPeak, count);
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * TAU + rand() * 0.25;
      const dist = 210 + rand() * 50;
      const h = 5 + rand() * 5;
      const r = 40 + rand() * 20;
      dummy.position.set(Math.sin(angle) * dist, h / 2 - 1, -Math.cos(angle) * dist);
      dummy.rotation.set(0, rand() * TAU, 0);
      dummy.scale.set(r, h, r);
      dummy.updateMatrix();
      far.setMatrixAt(i, dummy.matrix);
    }
    farGeometry.computeVertexNormals();
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    far.frustumCulled = false;
    scene.add(far);
  }

  /* ---------- 리프트 ---------- */

  const lift = (() => {
    const g = new Group();
    const [bx, bz] = LIFT.bottom;
    const [tx, tz] = LIFT.top;
    const dirX = tx - bx;
    const dirZ = tz - bz;
    const run = Math.hypot(dirX, dirZ);
    const ux = dirX / run;
    const uz = dirZ / run;
    const sideX = -uz; // 오르는 줄 쪽(진행 방향의 왼쪽)
    const sideZ = ux;
    const yaw = Math.atan2(ux, uz);
    const bottomY = terrainHeight(bx, bz) + 2.0;
    const topY = terrainHeight(tx, tz) + 2.0;

    // 줄이 지나는 점: 아래 정류장, 철탑들, 위 정류장 순서
    const stops = [{ x: bx, z: bz, y: bottomY }];
    for (let i = 1; i <= LIFT.towers; i += 1) {
      const f = i / (LIFT.towers + 1);
      const x = lerp(bx, tx, f);
      const z = lerp(bz, tz, f);
      const ground = terrainHeight(x, z);
      const y = Math.max(lerp(bottomY, topY, f), ground + 2.8);
      stops.push({ x, z, y });
      g.add(beam(new Vector3(x, ground - 0.3, z), new Vector3(x, y + 0.12, z), 0.09, mat.rock));
      const arm = box(LIFT.gauge * 2 + 0.3, 0.12, 0.14, mat.rock);
      arm.position.set(x, y + 0.12, z);
      arm.rotation.y = yaw;
      g.add(arm);
    }
    stops.push({ x: tx, z: tz, y: topY });

    // 정류장 두 곳 — 몸통 + 지붕 + 바퀴
    [
      [bx, bz],
      [tx, tz],
    ].forEach(([x, z], i) => {
      const ground = terrainHeight(x, z);
      const station = new Group();
      station.position.set(x, ground, z);
      station.rotation.y = yaw;
      const body = box(1.9, 1.3, 1.7, mat.structure);
      body.position.y = 0.45;
      const roof = box(2.3, 0.18, 2.1, mat.accent);
      roof.position.y = 1.2;
      const wheel = new Mesh(new CylinderGeometry(LIFT.gauge + 0.05, LIFT.gauge + 0.05, 0.1, 14), mat.rock);
      wheel.position.set(0, 2.0, i === 0 ? -0.9 : 0.9);
      station.add(body, roof, wheel);
      g.add(station);
      if (i === 0) addBlob(x, z, 1.5);
    });

    // 줄 두 가닥
    [1, -1].forEach((s) => {
      for (let i = 1; i < stops.length; i += 1) {
        const p = stops[i - 1];
        const q = stops[i];
        g.add(
          beam(
            new Vector3(p.x + sideX * LIFT.gauge * s, p.y, p.z + sideZ * LIFT.gauge * s),
            new Vector3(q.x + sideX * LIFT.gauge * s, q.y, q.z + sideZ * LIFT.gauge * s),
            0.025,
            mat.rock,
            4,
          ),
        );
      }
    });

    // 의자가 도는 고리: 오르는 줄(위로) 다음에 내려오는 줄(아래로)
    const loop = [
      ...stops.map((p) => [p.x + sideX * LIFT.gauge, p.y, p.z + sideZ * LIFT.gauge]),
      ...stops
        .slice()
        .reverse()
        .map((p) => [p.x - sideX * LIFT.gauge, p.y, p.z - sideZ * LIFT.gauge]),
    ];
    loop.push(loop[0]);
    const cum = [0];
    for (let i = 1; i < loop.length; i += 1) {
      cum.push(cum[i - 1] + Math.hypot(loop[i][0] - loop[i - 1][0], loop[i][1] - loop[i - 1][1], loop[i][2] - loop[i - 1][2]));
    }
    const total = cum[cum.length - 1];

    const hanger = new BoxGeometry(0.05, 0.75, 0.05).translate(0, -0.375, 0);
    const seat = new BoxGeometry(0.62, 0.08, 0.34).translate(0, -0.8, 0.05);
    const back = new BoxGeometry(0.62, 0.34, 0.06).translate(0, -0.62, -0.13);
    const hangers = new InstancedMesh(hanger, mat.rock, LIFT.chairs);
    const seats = new InstancedMesh(seat, mat.accent, LIFT.chairs);
    const backs = new InstancedMesh(back, mat.accent, LIFT.chairs);
    [hangers, seats, backs].forEach((m) => {
      m.frustumCulled = false;
      g.add(m);
    });

    scene.add(g);
    casters.push(g);

    return {
      group: g,
      update(t) {
        const shift = ((t / MOTION_PERIOD.lift) % 1) * total;
        for (let c = 0; c < LIFT.chairs; c += 1) {
          const s = (shift + (c / LIFT.chairs) * total) % total;
          let i = 1;
          while (i < cum.length - 1 && cum[i] < s) i += 1;
          const k = (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
          const p = loop[i - 1];
          const q = loop[i];
          dummy.position.set(lerp(p[0], q[0], k), lerp(p[1], q[1], k), lerp(p[2], q[2], k));
          dummy.rotation.set(0, Math.atan2(q[0] - p[0], q[2] - p[2]), 0);
          dummy.updateMatrix();
          hangers.setMatrixAt(c, dummy.matrix);
          seats.setMatrixAt(c, dummy.matrix);
          backs.setMatrixAt(c, dummy.matrix);
        }
        dummy.rotation.set(0, 0, 0);
        hangers.instanceMatrix.needsUpdate = true;
        seats.instanceMatrix.needsUpdate = true;
        backs.instanceMatrix.needsUpdate = true;
      },
    };
  })();

  /* ---------- 산장 ---------- */

  {
    const g = new Group();
    g.position.set(LODGE.x, terrainHeight(LODGE.x, LODGE.z), LODGE.z);
    g.rotation.y = LODGE.rot;
    const body = box(3.2, 1.3, 2.2, mat.wood);
    body.position.y = 0.6;
    // 세모 지붕 — 세 모서리 원기둥을 눕혀 꼭짓점이 위로 오게 한다
    const roofR = 1.45;
    const roof = new Mesh(new CylinderGeometry(roofR, roofR, 3.7, 3, 1, false, Math.PI / 2).rotateZ(Math.PI / 2), mat.accent);
    roof.position.y = 1.25 + roofR / 2;
    const chimney = box(0.36, 0.9, 0.36, mat.rock);
    chimney.position.set(0.9, 2.5, -0.35);
    const door = box(0.6, 0.9, 0.06, mat.dark);
    door.position.set(-0.6, 0.45, 1.11);
    [0.35, 1.15].forEach((x) => {
      const pane = box(0.5, 0.42, 0.06, mat.structure);
      pane.position.set(x, 0.72, 1.11);
      g.add(pane);
    });
    const hut = box(1.2, 0.9, 1.0, mat.structure);
    hut.position.set(3.4, 0.45, 0.6);
    const hutRoof = box(1.4, 0.14, 1.2, mat.accent);
    hutRoof.position.set(3.4, 0.97, 0.6);
    g.add(body, roof, chimney, door, hut, hutRoof);
    scene.add(g);
    casters.push(g);
    addBlob(LODGE.x, LODGE.z, 2.3);
  }

  /* ---------- 정상 전망대 ---------- */

  {
    const g = new Group();
    g.position.set(PEAK.x, SUMMIT_Y, PEAK.z);
    const base = new Mesh(new CylinderGeometry(1.1, 1.5, 1.6, 8), mat.rock);
    base.position.y = -0.5;
    const deck = new Mesh(new CylinderGeometry(1.7, 1.7, 0.16, 8), mat.structure);
    deck.position.y = 0.38;
    const cabin = new Mesh(new CylinderGeometry(0.72, 0.78, 0.9, 8), mat.structure);
    cabin.position.y = 0.91;
    const cap = new Mesh(new ConeGeometry(1.0, 0.7, 8), mat.accent);
    cap.position.y = 1.71;
    g.add(base, deck, cabin, cap);
    g.add(beam(new Vector3(1.3, 0.4, 0.4), new Vector3(1.3, 2.4, 0.4), 0.04, mat.rock, 4));
    const flag = box(0.06, 0.36, 0.6, mat.accent);
    flag.position.set(1.3, 2.2, 0.72);
    g.add(flag);
    scene.add(g);
    casters.push(g);
  }

  /* ---------- 나무 ---------- */

  const trees = (() => {
    const rand = seeded(21);
    const spots = [];
    const steep = (x, z) => {
      const dx = terrainHeight(x + 0.5, z) - terrainHeight(x - 0.5, z);
      const dz = terrainHeight(x, z + 0.5) - terrainHeight(x, z - 0.5);
      return Math.hypot(dx, dz);
    };
    const nearBuilding = (x, z) =>
      Math.hypot(x - LODGE.x, z - LODGE.z) < 4.6 ||
      Math.hypot(x - LIFT.bottom[0], z - LIFT.bottom[1]) < 2.6 ||
      Math.hypot(x - LIFT.top[0], z - LIFT.top[1]) < 2.6;
    for (let tries = 0; tries < 6000 && spots.length < 240; tries += 1) {
      const x = (rand() * 2 - 1) * 30;
      const z = (rand() * 2 - 1) * 30;
      const h = terrainHeight(x, z);
      if (!isForest(x, z, h) || steep(x, z) > 1.1 || nearBuilding(x, z)) continue;
      if (spots.some((s) => Math.hypot(x - s.x, z - s.z) < 1.05)) continue;
      spots.push({ x, z, y: h, s: 0.8 + rand() * 0.5, r: rand() * TAU });
    }
    const lower = new InstancedMesh(new ConeGeometry(0.62, 1.15, 6, 1, true), mat.tree, spots.length);
    const upper = new InstancedMesh(new ConeGeometry(0.46, 0.95, 6, 1, true), mat.tree, spots.length);
    const cap = new InstancedMesh(new ConeGeometry(0.27, 0.46, 6, 1, true), mat.treeSnow, spots.length);
    const tiers = [
      [lower, 0.62],
      [upper, 1.28],
      [cap, 1.66],
    ];
    spots.forEach((s, i) => {
      dummy.rotation.set(0, s.r, 0);
      dummy.scale.setScalar(s.s);
      tiers.forEach(([mesh, y]) => {
        dummy.position.set(s.x, s.y + y * s.s, s.z);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
    });
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    const g = new Group();
    tiers.forEach(([mesh]) => {
      mesh.frustumCulled = false;
      g.add(mesh);
    });
    scene.add(g);
    casters.push(g);
    return { count: spots.length };
  })();

  /* ---------- 슬로프 가장자리 막대 ---------- */

  {
    const spots = [];
    const q = {};
    RUN_LIST.forEach((run) => {
      const steps = Math.floor(run.line.length / 2.4);
      for (let i = 1; i < steps; i += 1) {
        run.line.at(i / steps, q);
        [1, -1].forEach((side) => {
          const x = q.x - q.tz * (run.half + 0.35) * side;
          const z = q.z + q.tx * (run.half + 0.35) * side;
          spots.push([x, terrainHeight(x, z), z]);
        });
      }
    });
    const poles = new InstancedMesh(new BoxGeometry(0.08, 0.7, 0.08).translate(0, 0.35, 0), mat.accent, spots.length);
    spots.forEach(([x, y, z], i) => {
      dummy.position.set(x, y - 0.05, z);
      dummy.updateMatrix();
      poles.setMatrixAt(i, dummy.matrix);
    });
    poles.frustumCulled = false;
    scene.add(poles);
  }

  /* ---------- 스키어 ---------- */

  const skiers = (() => {
    const bodyGeometry = new BoxGeometry(0.3, 0.46, 0.24);
    const headGeometry = new SphereGeometry(0.13, 8, 6);
    const skiGeometry = new BoxGeometry(0.34, 0.04, 1.0);
    const list = [
      { run: 'easy', period: MOTION_PERIOD.easyRun, phase: 0.1, turns: 5, jacket: mat.accent },
      { run: 'easy', period: MOTION_PERIOD.easyRun, phase: 0.6, turns: 4, jacket: mat.dark },
      { run: 'expert', period: MOTION_PERIOD.expertRun, phase: 0.25, turns: 6, jacket: mat.dark },
      { run: 'expert', period: MOTION_PERIOD.expertRun, phase: 0.75, turns: 6, jacket: mat.accent },
    ].map((def) => {
      const g = new Group();
      const body = new Mesh(bodyGeometry, def.jacket);
      body.position.y = 0.33;
      const head = new Mesh(headGeometry, mat.structure);
      head.position.y = 0.7;
      const ski = new Mesh(skiGeometry, mat.dark);
      ski.position.y = 0.03;
      g.add(body, head, ski);
      g.rotation.order = 'YXZ';
      scene.add(g);
      casters.push(g);
      return { ...def, group: g, line: RUNS[def.run].line, half: RUNS[def.run].half };
    });

    const p = {};
    return {
      update(t) {
        list.forEach((sk) => {
          const u = (t / sk.period + sk.phase) % 1;
          sk.line.at(u, p);
          const wave = u * sk.turns * TAU;
          const amp = sk.half * 0.55;
          const lateral = Math.sin(wave) * amp;
          // 옆으로 흔들리는 만큼 진행 방향을 틀고, 도는 쪽으로 몸을 기울인다
          const slope = (Math.cos(wave) * amp * sk.turns * TAU) / sk.line.length;
          const nx = -p.tz;
          const nz = p.tx;
          const x = p.x + nx * lateral;
          const z = p.z + nz * lateral;
          const dx = p.tx + nx * slope;
          const dz = p.tz + nz * slope;
          const len = Math.hypot(dx, dz) || 1;
          const y = terrainHeight(x, z);
          const ahead = terrainHeight(x + (dx / len) * 0.5, z + (dz / len) * 0.5);
          sk.group.position.set(x, y, z);
          sk.group.rotation.set(Math.atan2(y - ahead, 0.5), Math.atan2(dx, dz), -slope * 0.6);
          sk.group.visible = u > 0.015 && u < 0.985;
        });
      },
    };
  })();

  /* ---------- 눈 입자 ---------- */

  const FLAKE_BOX = { x: 34, z0: -30, z1: 34, top: 28, wind: 0.6 };
  const flakeSeeds = new Float32Array(QUALITY.flakesHigh * 5);
  {
    const rand = seeded(91);
    for (let i = 0; i < QUALITY.flakesHigh; i += 1) {
      flakeSeeds.set(
        [
          (rand() * 2 - 1) * FLAKE_BOX.x,
          lerp(FLAKE_BOX.z0, FLAKE_BOX.z1, rand()),
          rand() * FLAKE_BOX.top,
          1.1 + rand() * 1.1, // 떨어지는 빠르기(초당)
          rand() * TAU,
        ],
        i * 5,
      );
    }
  }
  const flakeGeometry = new BufferGeometry();
  flakeGeometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(QUALITY.flakesHigh * 3), 3));
  // Float32BufferAttribute 는 넘긴 배열을 복사한다 — 그리는 배열을 직접 고쳐야 한다
  const flakePositions = flakeGeometry.attributes.position.array;
  const maxPointSize = { value: QUALITY.flakeMaxPx };
  const flakeMap = flakeTexture();
  mat.flake = new PointsMaterial({
    color: SCENE_COLOR.flake,
    size: 0.85,
    map: flakeMap,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  // 카메라 가까이 온 입자가 커다란 점이 되지 않게 화면 크기를 막는다
  mat.flake.onBeforeCompile = (shader) => {
    shader.uniforms.maxPointSize = maxPointSize;
    shader.vertexShader = `uniform float maxPointSize;\n${shader.vertexShader.replace(
      '#include <fog_vertex>',
      'gl_PointSize = min( gl_PointSize, maxPointSize );\n#include <fog_vertex>',
    )}`;
  };
  const flakes = new Points(flakeGeometry, mat.flake);
  flakes.frustumCulled = false;
  flakes.visible = false;
  scene.add(flakes);

  const flakeCount = () => (quality === 'high' ? QUALITY.flakesHigh : QUALITY.flakesLow);

  /** 시각 t 의 입자 자리 — 같은 t 면 늘 같은 자리라 포스터와 첫 프레임이 맞는다 */
  function updateFlakes(t) {
    const n = flakeCount();
    const span = FLAKE_BOX.x * 2;
    for (let i = 0; i < n; i += 1) {
      const s = i * 5;
      const phase = flakeSeeds[s + 4];
      let y = (flakeSeeds[s + 2] - flakeSeeds[s + 3] * t) % FLAKE_BOX.top;
      if (y < 0) y += FLAKE_BOX.top;
      let x = flakeSeeds[s] + FLAKE_BOX.wind * t + Math.sin(t * 0.8 + phase) * 0.4 + FLAKE_BOX.x;
      x = (((x % span) + span) % span) - FLAKE_BOX.x;
      const z = flakeSeeds[s + 1] + Math.cos(t * 0.6 + phase) * 0.4;
      flakePositions[i * 3] = x;
      flakePositions[i * 3 + 1] = y;
      flakePositions[i * 3 + 2] = z;
    }
    flakeGeometry.setDrawRange(0, n);
    flakeGeometry.attributes.position.needsUpdate = true;
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

  /* ---------- 맑음·눈 내림 ---------- */

  let snowness = weather === 'snow' ? 1 : 0;
  const fogOffset = { near: WEATHER_LIGHT.clear.fogNear, far: WEATHER_LIGHT.clear.fogFar };
  const tmpA = new Color();
  const tmpB = new Color();
  const colorOf = (fromHex, toHex, t, target) => target.copy(tmpA.set(fromHex)).lerp(tmpB.set(toHex), t);
  const W = WEATHER_LIGHT;

  function applyWeather(k) {
    colorOf(WEATHER_COLOR.clear.sky, WEATHER_COLOR.snow.sky, k, scene.background);
    fog.color.copy(scene.background);
    hemi.color.copy(scene.background);
    hemi.intensity = lerp(W.clear.hemi, W.snow.hemi, k);
    colorOf(WEATHER_COLOR.clear.keyLight, WEATHER_COLOR.snow.keyLight, k, key.color);
    key.intensity = lerp(W.clear.key, W.snow.key, k);
    key.shadow.intensity = lerp(W.clear.shadow, W.snow.shadow, k);
    fogOffset.near = lerp(W.clear.fogNear, W.snow.fogNear, k);
    fogOffset.far = lerp(W.clear.fogFar, W.snow.fogFar, k);
    mat.flake.opacity = lerp(W.clear.flakes, W.snow.flakes, k);
    flakes.visible = mat.flake.opacity > 0.01;
  }
  applyWeather(snowness);

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
  const cam = {
    az: CAMERA.startAzimuth * DEG,
    el: CAMERA.startElevation * DEG,
    dist: 60,
    target: HOME_TARGET.clone(),
  };
  let homeDist = 60;
  let viewAspect = 1;
  let insetPx = 0;
  let maxDist = 90;
  let atHome = true;
  let userInteracted = false;
  let camTween = null;
  let weatherTween = null;
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

  function stepWeatherTween(now) {
    if (!weatherTween) return;
    const { from, to, start, duration } = weatherTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    snowness = lerp(from, to, k);
    applyWeather(snowness);
    if (k >= 1) weatherTween = null;
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

  const VIEWS = landmarkViews();

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
      anchor: new Vector3(...VIEWS[id].anchor),
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
      if (checkOcclusion) m.occluded = hiddenByRidge(m.anchor);
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

  // 포스터를 찍은 시각에서 시작한다 — 포스터에서 실시간 장면으로 바뀔 때 의자·스키어 자리가 튀지 않는다
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

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    const animating = shouldAnimate();
    if (animating) {
      sceneTime += dt;
      if (!userInteracted && !reduced && !camTween) {
        cam.az += (dt / MOTION_PERIOD.autoRotate) * TAU;
      }
    }
    stepCameraTween(now);
    stepWeatherTween(now);
    lift.update(sceneTime);
    skiers.update(sceneTime);
    if (flakes.visible) updateFlakes(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || weatherTween) {
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
    maxPointSize.value = QUALITY.flakeMaxPx * renderer.getPixelRatio();
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
      const view = VIEWS[id];
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
    setWeather(next, animate) {
      weather = next;
      canvas.setAttribute('aria-label', canvasLabel(weather));
      const to = next === 'snow' ? 1 : 0;
      if (!animate || reduced || !motion) {
        weatherTween = null;
        snowness = to;
        applyWeather(snowness);
        requestRender();
        return;
      }
      weatherTween = { from: snowness, to, start: performance.now(), duration: durations.weatherShift };
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
        points: renderer.info.render.points,
        trees: trees.count,
        quality,
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
      flakeMap.dispose();
      renderer.dispose();
      canvas.remove();
      markers.forEach((m) => m.el.remove());
    },
  };
}
