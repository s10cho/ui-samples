#!/usr/bin/env node
/*
 * 도시 그림(인라인 SVG)을 만들어 index.html 에 넣는다 — 설계서 3-1절·4-2절
 *
 *   node tools/build-scene.mjs
 *
 * - 좌표 계산은 js/iso-geom.js 를 그대로 쓴다. 화면 스크립트(js/scene.js)와 같은 식이라 움직임이 그림과 맞는다.
 * - index.html 의 <!-- iso-scene:start --> 와 <!-- iso-scene:end --> 사이를 통째로 바꾼다.
 * - 건물·나무·차는 3D 판(city-night js/scene/scene.js)과 같은 씨앗 난수를 같은 순서로 뽑아 만든다.
 *   그래서 3D 판이 그리지 않는 블록 밖 건물과 창문 하나하나도 난수를 뽑는 데만 따라 계산한다.
 * - 의존성 없음. Node 18 이상.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const context = vm.createContext({});
// 면 계산(IsoCore)은 공용 뼈대의 js/iso2d.js 를 먼저 넣는다 — 저장소에서는 ../shared/iso2d/js/, 조립된 폴더에서는 js/ 에 있다
const corePath = [join(ROOT, 'js/iso2d.js'), join(ROOT, '../shared/iso2d/js/iso2d.js')].find((p) => existsSync(p));
if (!corePath) throw new Error('js/iso2d.js 를 찾지 못했다 — shared/iso2d/js/iso2d.js 가 있어야 한다');
vm.runInContext(readFileSync(corePath, 'utf8'), context);
vm.runInContext(readFileSync(join(ROOT, 'js/iso-geom.js'), 'utf8'), context);
const G = context.IsoGeom;
const {
  TAU, UNIT, RISE, VIEW, GROUND_MATRIX, RIVER, riverZ, southEdge, northEdge, STREET, LOT_GAP, AVENUE, SOUTH_ROAD, RAIL,
  STATION, PLATFORM, CLOCK, MARKET, ALLEY_Z, PARK, FOUNTAIN, HILL, TOWER, BRIDGE, SLAB, T0,
} = G;

const fmt = G.fmt;
const f2 = (v) => (Math.round(v * 100) / 100).toString();
/** 정적 그림의 점 좌표는 정수로 적는다(그림 단위 1 = 세계 0.05). 전송량을 줄이려는 것이다. 움직이는 면은 화면 스크립트가 소수 한 자리로 다시 쓴다 */
const ri = (v) => Math.round(v).toString();
const pts = (pts2) => pts2.map((p) => ri(p[0]) + ',' + ri(p[1])).join(' ');
const add3 = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
const lerp = G.lerp;

/* ---------- 출력 도우미 — 그린 범위도 함께 잰다 ---------- */

class Out {
  constructor() {
    this.parts = [];
    this.box = [Infinity, Infinity, -Infinity, -Infinity];
  }

  ext(p) {
    this.box[0] = Math.min(this.box[0], p[0]);
    this.box[1] = Math.min(this.box[1], p[1]);
    this.box[2] = Math.max(this.box[2], p[0]);
    this.box[3] = Math.max(this.box[3], p[1]);
  }

  polys(faces, attrs = '') {
    faces.filter(Boolean).forEach((f) => {
      f.pts2.forEach((p) => this.ext(p));
      this.parts.push(`<polygon class="${f.cls}"${attrs} points="${pts(f.pts2)}"/>`);
    });
    return this;
  }

  flat(points3, cls) {
    const pts2 = points3.map(G.project);
    pts2.forEach((p) => this.ext(p));
    this.parts.push(`<polygon class="${cls}" points="${pts(pts2)}"/>`);
    return this;
  }

  line(a, b, cls, width) {
    const p = G.project(a);
    const q = G.project(b);
    this.ext(p);
    this.ext(q);
    this.parts.push(`<line class="${cls}" x1="${ri(p[0])}" y1="${ri(p[1])}" x2="${ri(q[0])}" y2="${ri(q[1])}" stroke-width="${width}"/>`);
    return this;
  }

  polyline(points3, cls, width, extra = '') {
    const pts2 = points3.map(G.project);
    pts2.forEach((p) => this.ext(p));
    this.parts.push(`<polyline class="${cls}" stroke-width="${width}"${extra} points="${pts(pts2)}"/>`);
    return this;
  }

  circle(p3, r, cls, extra = '') {
    const p = G.project(p3);
    this.ext([p[0] - r, p[1] - r]);
    this.ext([p[0] + r, p[1] + r]);
    this.parts.push(`<circle class="${cls}"${extra} cx="${ri(p[0])}" cy="${ri(p[1])}" r="${r}"/>`);
    return this;
  }

  raw(s) {
    this.parts.push(s);
    return this;
  }

  add(other) {
    this.parts.push(other.toString());
    if (Number.isFinite(other.box[0])) {
      this.ext([other.box[0], other.box[1]]);
      this.ext([other.box[2], other.box[3]]);
    }
    return this;
  }

  toString() {
    return this.parts.join('');
  }
}

/* ---------- 3D 판과 같은 배치 규칙 ---------- */

const FAR_FILLER = 46; // 3D 판 QUALITY.fillerRadiusHigh — 블록 밖 건물(그리지 않지만 난수 순서를 맞추려고 계산한다)
const inRect = (x, z, r, x0, x1, z0, z1) => x + r > x0 && x - r < x1 && z + r > z0 && z - r < z1;

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

const inCore = (x, z) => Math.abs(x) <= 15.5 && z >= -16.5 && z <= 17.5;

/* ---------- 3D 판과 같은 순서로 난수를 뽑는다 ---------- */

const rand = G.seeded(11);
const WIN = { colStep: 0.52, floorStep: 0.62, base: 0.42 };

/** 3D 판 addWindows 가 뽑는 난수를 그대로 뽑고, 층 수를 돌려준다 */
function consumeWindows(w, d, h, { skip = 0, base = WIN.base, faces = 'all' } = {}) {
  const sides = [
    { nx: 0, nz: 1, width: w },
    { nx: 0, nz: -1, width: w },
    { nx: 1, nz: 0, width: d },
    { nx: -1, nz: 0, width: d },
  ].filter((s) => faces === 'all' || faces.includes(`${s.nx},${s.nz}`));
  const floors = Math.floor((h - base - 0.42) / WIN.floorStep) + 1;
  if (floors < 1) return 0;
  sides.forEach((s) => {
    const cols = Math.max(1, Math.floor((s.width - 0.24) / WIN.colStep));
    for (let f = 0; f < floors; f += 1) {
      for (let c = 0; c < cols; c += 1) {
        if (rand() < skip) continue;
        rand(); // 창 불빛 색
        rand(); // 켜짐 무리
      }
    }
  });
  return floors;
}

const wallColor = (warm) => (warm ? [0, 1, 3][Math.floor(rand() * 3)] : Math.floor(rand() * 4));

/** 3D 판 addBuilding 과 같은 순서로 난수를 뽑아 건물 하나를 기록한다 */
function makeBuilding(list, x, z, w, d, h, { color, roof = false, top = false, win = {} }) {
  const b = { x, z, w, d, h, wall: color, roof: null, top: null, win };
  if (roof) b.roof = rand() < 0.6 ? 0 : 1;
  if (top) {
    const tx = x + (rand() - 0.5) * w * 0.3;
    const tz = z + (rand() - 0.5) * d * 0.3;
    b.top = { x: tx, z: tz, sx: w * 0.35, sy: 0.35, sz: d * 0.35 };
  }
  b.floors = consumeWindows(w, d, h, win);
  if (list) list.push(b);
  return b;
}

const core = [];
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
      makeBuilding(core, x, z, w, d, h, { color: wallColor(false), top: rand() < 0.5, win: { early: 0.12, late: 0.56 } });
    } else {
      const h = 1.1 + rand() * 1.4;
      makeBuilding(core, x, z, w, d, h, { color: wallColor(true), roof: rand() < 0.6, top: rand() < 0.3, win: { early: 0.1, late: 0.5, skip: 0.15 } });
    }
  }
}

// 블록 밖 건물 — 그리지 않는다. 난수 순서만 맞춘다
const FSTEP = 3.3;
for (let gx = -FAR_FILLER; gx <= FAR_FILLER; gx += FSTEP) {
  for (let gz = -FAR_FILLER; gz <= FAR_FILLER; gz += FSTEP) {
    const x = gx + (rand() - 0.5) * 0.6;
    const z = gz + (rand() - 0.5) * 0.6;
    const w = 1.4 + rand() * 0.8;
    const d = 1.4 + rand() * 0.8;
    if (inCore(x, z) || Math.hypot(x, z) > FAR_FILLER) continue;
    if (rand() < 0.22 || blockedLot(x, z, Math.max(w, d) / 2)) continue;
    const north = z < riverZ(x);
    const h = north ? 1.4 + rand() * 2.8 : 0.8 + rand() * 1.3;
    makeBuilding(null, x, z, w, d, h, { color: wallColor(!north), roof: !north && rand() < 0.45, win: { early: 0.1, late: 0.5, skip: 0.6 } });
  }
}

// 역·시계탑·기차 창문
const STATION_W = STATION.x1 - STATION.x0;
const STATION_D = STATION.z1 - STATION.z0;
const STATION_CX = (STATION.x0 + STATION.x1) / 2;
const STATION_CZ = (STATION.z0 + STATION.z1) / 2;
const stationFloors = consumeWindows(STATION_W, STATION_D, STATION.h, { base: 0.25 });
const clockFloors = consumeWindows(CLOCK.w, CLOCK.w, CLOCK.h - 1.1, { base: 0.5 });
const TRAIN_Z = (RAIL.rails[0] + RAIL.rails[1]) / 2;
const trains = [0, 1, 2].map((i) => {
  const x = RAIL.end - 1.6 - i * 2.45;
  return { x, floors: consumeWindows(2.3, 0.74, 0.86, { base: 0.36, faces: ['0,1', '0,-1'] }) };
});

// 시장 가게 10채
const SHOP_W = (MARKET.x1 - MARKET.x0) / 5;
const shops = [];
[
  { z0: MARKET.rowN[0], z1: MARKET.rowN[1], side: 1 },
  { z0: MARKET.rowS[0], z1: MARKET.rowS[1], side: -1 },
].forEach((row) => {
  for (let i = 0; i < 5; i += 1) {
    const x = MARKET.x0 + SHOP_W * (i + 0.5);
    const z = (row.z0 + row.z1) / 2;
    const d = row.z1 - row.z0;
    const h = 1.2 + rand() * 0.7;
    const b = makeBuilding(null, x, z, SHOP_W - 0.06, d, h, { color: wallColor(true), roof: true, win: { early: 0.35, late: 0.6, base: 0.9 } });
    b.side = row.side;
    shops.push(b);
  }
});

// 나무 21그루
const trees = [];
const addTree = (x, z, s, y0 = 0) => trees.push({ x, z, s, y0, ry: rand() * TAU });
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

// 가로등 자리(난수 없음)
const lamps = [];
for (let x = -14.4; x <= 14.5; x += 3.2) {
  if (Math.abs(x - BRIDGE.x) >= 1.8) lamps.push([x, southEdge(x) + 0.42]);
  if (Math.abs(x + 1.6 - BRIDGE.x) >= 1.8) lamps.push([x + 1.6, northEdge(x + 1.6) - 0.42]);
}
[3.6, 6.0, 8.4, -5.4, -8.0, -10.6].forEach((z) => {
  lamps.push([AVENUE.x0 - 0.2, z]);
  lamps.push([AVENUE.x1 + 0.2, z]);
});
[
  [-1.6, -1.6],
  [1.6, -1.6],
  [-1.6, 1.6],
  [1.6, 1.6],
].forEach(([dx, dz]) => lamps.push([FOUNTAIN.x + dx * 1.15, FOUNTAIN.z + dz * 0.95]));
[-12, -8, -4.6, 4, 8, 12].forEach((x) => lamps.push([x, SOUTH_ROAD.z0 - 0.25]));

// 차 8대 — 길 위 출발 자리
const carOffsets = [];
G.CAR_PATHS.forEach((path, p) => {
  for (let i = 0; i < G.CARS_PER_PATH; i += 1) carOffsets.push((i + p * 0.37 + rand() * 0.3) / G.CARS_PER_PATH);
});

/* 모든 건물이 모형 판 안에 드는지 확인한다 */
core.forEach((b) => {
  if (b.x - b.w / 2 < SLAB.x0 + 0.2 || b.x + b.w / 2 > SLAB.x1 - 0.2 || b.z - b.d / 2 < SLAB.z0 + 0.2 || b.z + b.d / 2 > SLAB.z1 - 0.2) {
    throw new Error(`모형 판 밖 건물: ${b.x.toFixed(2)}, ${b.z.toFixed(2)}`);
  }
});

/* ---------- 창문 — 면 좌표 transform + 무늬(설계서 4-2절) ---------- */

const TILE = { cols: 11, rows: 7 };
const phase = G.seeded(97);

/**
 * 건물 면 하나의 창문 구역. side: 'S'(남쪽 면) · 'E'(동쪽 면).
 * 층·열·창 간격은 3D 판 addWindows 와 같다. 무늬 시작 칸(k, m)은 면마다 다르다.
 */
function windowRect(out, side, cx, cz, w, d, base, floors, kind) {
  if (floors < 1) return;
  const width = side === 'S' ? w : d;
  const cols = Math.max(1, Math.floor((width - 0.24) / WIN.colStep));
  const k = Math.floor(phase() * TILE.cols);
  const m = Math.floor(phase() * TILE.rows);
  const oy = base - 0.42 - m * WIN.floorStep;
  let mat;
  if (side === 'S') {
    const zf = cz + d / 2 + 0.01;
    const ox = cx - (cols * WIN.colStep) / 2 - k * WIN.colStep;
    mat = [UNIT, UNIT / 2, 0, -RISE, (ox - zf) * UNIT, ((ox + zf) * UNIT) / 2 - oy * RISE];
  } else {
    const xf = cx + w / 2 + 0.01;
    const oz = cz - (cols * WIN.colStep) / 2 - k * WIN.colStep;
    mat = [-UNIT, UNIT / 2, 0, -RISE, (xf - oz) * UNIT, ((xf + oz) * UNIT) / 2 - oy * RISE];
  }
  const x = k * WIN.colStep;
  const y = 0.42 + m * WIN.floorStep;
  out.raw(
    `<rect class="${kind}" transform="matrix(${f2(mat[0])} ${f2(mat[1])} 0 ${f2(mat[3])} ${fmt(mat[4])} ${fmt(mat[5])})"${x ? ` x="${f2(x)}"` : ''} y="${f2(y)}" width="${f2(cols * WIN.colStep)}" height="${f2(floors * WIN.floorStep)}"/>`,
  );
}

/** 창문 무늬 한 장 — 칸마다 먼저 켜진 창·밤에 켜지는 창·꺼진 창·빈 칸 중 하나 */
function windowPattern(id, seed, early, late, skip) {
  const r = G.seeded(seed);
  const paths = { 'win-early': '', 'win-late': '', 'win-off': '' };
  for (let j = 0; j < TILE.rows; j += 1) {
    for (let i = 0; i < TILE.cols; i += 1) {
      if (r() < skip) continue;
      const k = r();
      const cls = k < early ? 'win-early' : k < early + late ? 'win-late' : 'win-off';
      paths[cls] += `M${f2(0.13 + i * WIN.colStep)} ${f2(0.04 + j * WIN.floorStep)}h.26v.32h-.26z`;
    }
  }
  const body = Object.entries(paths)
    .filter(([, d]) => d)
    .map(([cls, d]) => `<path class="${cls}" d="${d}"/>`)
    .join('');
  return `<pattern id="${id}" patternUnits="userSpaceOnUse" y=".42" width="${f2(TILE.cols * WIN.colStep)}" height="${f2(TILE.rows * WIN.floorStep)}">${body}</pattern>`;
}

/* ---------- 입체 도우미 ---------- */

/** 박공지붕 — 용마루가 alongX 이면 동서, 아니면 남북. 밑변 y, 길이 len, 폭 width, 높이 height */
function gableRoof(x, y, z, alongX, len, width, height, mat) {
  const A = alongX ? [1, 0, 0] : [0, 0, 1];
  const B = alongX ? [0, 0, 1] : [1, 0, 0];
  const P = (a, b, yy) => [x + A[0] * a + B[0] * b, y + yy, z + A[2] * a + B[2] * b];
  const hl = len / 2;
  const hw = width / 2;
  const inside = [x, y + height / 3, z];
  return G.sortFaces([
    G.face([P(-hl, hw, 0), P(hl, hw, 0), P(hl, 0, height), P(-hl, 0, height)], mat, inside),
    G.face([P(-hl, -hw, 0), P(hl, -hw, 0), P(hl, 0, height), P(-hl, 0, height)], mat, inside),
    G.face([P(hl, -hw, 0), P(hl, hw, 0), P(hl, 0, height)], mat, inside),
    G.face([P(-hl, -hw, 0), P(-hl, hw, 0), P(-hl, 0, height)], mat, inside),
  ]);
}

/** 바닥에 누운 원 둘레의 점(세계 좌표) */
function disk(cx, y, cz, rx, rz = rx, segs = 20) {
  const out = [];
  for (let k = 0; k < segs; k += 1) {
    const a = (k / segs) * TAU;
    out.push([cx + Math.cos(a) * rx, y, cz + Math.sin(a) * rz]);
  }
  return out;
}

/** 바닥 좌표(x, z)로 쓰는 원·타원 경로 조각 */
const ellipsePath = (cx, cz, rx, rz) => `M${f2(cx - rx)} ${f2(cz)}a${f2(rx)} ${f2(rz)} 0 1 0 ${f2(rx * 2)} 0a${f2(rx)} ${f2(rz)} 0 1 0 ${f2(-rx * 2)} 0z`;

/** 그림 좌표 점들을 이어 점 전구를 그린다 — 점선의 길이 0 마디 + 둥근 끝 */
function bulbLine(out, points3, count, width) {
  out.polyline(points3, 'bulbs', width, ` pathLength="${count - 1}" stroke-dasharray="0 1"`);
}

/* ---------- 앞뒤 순서 — 땅 위 자리(동서·남북 범위)로 정한다 ---------- */

/**
 * 화면 가로 범위가 겹치는 두 물체만 비교한다. 서쪽에 떨어져 있거나 북쪽에 떨어져 있는 쪽이 먼저(뒤)다.
 * 땅 위 자리가 겹치면 가운데 깊이(x + z)로 정한다.
 */
function paintOrder(items) {
  const n = items.length;
  const E = 0.15;
  const u = items.map((o) => [o.fp[0] - o.fp[3], o.fp[1] - o.fp[2]]);
  const next = Array.from({ length: n }, () => []);
  const indeg = new Array(n).fill(0);
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (u[i][1] <= u[j][0] + 1e-6 || u[j][1] <= u[i][0] + 1e-6) continue;
      const a = items[i].fp;
      const b = items[j].fp;
      let first;
      if (a[1] <= b[0] + E) first = i;
      else if (b[1] <= a[0] + E) first = j;
      else if (a[3] <= b[2] + E) first = i;
      else if (b[3] <= a[2] + E) first = j;
      else first = items[i].key <= items[j].key ? i : j;
      const second = first === i ? j : i;
      next[first].push(second);
      indeg[second] += 1;
    }
  }
  const done = new Array(n).fill(false);
  const order = [];
  for (let step = 0; step < n; step += 1) {
    let pick = -1;
    for (let i = 0; i < n; i += 1) {
      if (done[i] || indeg[i] > 0) continue;
      if (pick < 0 || items[i].key < items[pick].key) pick = i;
    }
    if (pick < 0) {
      // 순환이 생기면 깊이가 가장 얕은 것을 먼저 그린다
      for (let i = 0; i < n; i += 1) if (!done[i] && (pick < 0 || items[i].key < items[pick].key)) pick = i;
    }
    done[pick] = true;
    order.push(items[pick]);
    next[pick].forEach((k) => (indeg[k] -= 1));
  }
  return order;
}

const objects = [];
const landmarkOut = {};
const put = (fp, out, landmark) => {
  objects.push({ fp, key: (fp[0] + fp[1]) / 2 + (fp[2] + fp[3]) / 2, out, landmark });
};

/* ---------- 건물 ---------- */

function drawBuilding(out, b, matWall, winKind) {
  out.polys(G.box(b.x, b.h / 2, b.z, b.w, b.h, b.d, 0, matWall));
  const base = b.win.base ?? WIN.base;
  windowRect(out, 'S', b.x, b.z, b.w, b.d, base, b.floors, winKind);
  windowRect(out, 'E', b.x, b.z, b.w, b.d, base, b.floors, winKind);
  if (b.roof !== null) {
    const alongX = b.w >= b.d;
    out.polys(gableRoof(b.x, b.h, b.z, alongX, (alongX ? b.w : b.d) + 0.12, (alongX ? b.d : b.w) + 0.14, Math.min(b.w, b.d) * 0.42, b.roof === 0 ? 'r1' : 'r2'));
  }
  // 옥상 상자 — 박공지붕이 있으면 3D 판에서도 지붕 안에 묻혀 보이지 않으므로 그리지 않는다
  if (b.top && b.roof === null) out.polys(G.box(b.top.x, b.h + b.top.sy / 2, b.top.z, b.top.sx, b.top.sy, b.top.sz, 0, 'white'));
}

core.forEach((b) => {
  const out = new Out();
  const north = b.z < riverZ(b.x);
  drawBuilding(out, b, `w${b.wall + 1}`, north ? 'wn' : 'ws');
  const o = 0.07;
  put([b.x - b.w / 2 - o, b.x + b.w / 2 + o, b.z - b.d / 2 - o, b.z + b.d / 2 + o], out);
});

/* ---------- 나무 · 가로등 ---------- */

function drawTree(out, t) {
  const { x, z, s, y0 } = t;
  out.line([x, y0, z], [x, y0 + 0.5 * s, z], 's-trunk', fmt(0.16 * s * UNIT));
  out.polys(G.cone(x, z, y0 + 0.38 * s, y0 + 1.68 * s, 0.5 * s, 6, t.ry, 'tree'));
}

const hillTrees = trees.slice(-7);
trees.slice(0, -7).forEach((t) => {
  const out = new Out();
  drawTree(out, t);
  put([t.x - 0.5 * t.s, t.x + 0.5 * t.s, t.z - 0.5 * t.s, t.z + 0.5 * t.s], out);
});

lamps.forEach(([x, z]) => {
  const out = new Out();
  out.line([x, 0, z], [x, 1.15, z], 's-stone', 1.6);
  out.circle([x, 1.2, z], 2.2, 'bulb');
  put([x - 0.12, x + 0.12, z - 0.12, z + 0.12], out);
});

/* ---------- 전망 타워 — 언덕 · 언덕 위 나무 · 탑 ---------- */

(() => {
  const out = new Out();
  out.polys(G.frustum(HILL.x, HILL.z, 0, HILL.h, HILL.r, HILL.r - 1.0, 10, 0.2, 'grass'));
  const base = TOWER.base;
  const { x, z } = TOWER;
  const tower = new Out();
  const legs = [0, 1, 2].map((i) => {
    const a = (i / 3) * TAU + 0.4;
    return { from: [x + Math.cos(a) * 1.1, base, z + Math.sin(a) * 1.1], front: Math.cos(a) + Math.sin(a) > 0 };
  });
  const top = [x, base + 3.2, z];
  legs.filter((l) => !l.front).forEach((l) => tower.line(l.from, top, 's-white', 4.8));
  tower.polys(G.frustum(x, z, base, base + TOWER.deck - 0.4, 0.5, 0.3, 8, 0, 'white'));
  legs.filter((l) => l.front).forEach((l) => tower.line(l.from, top, 's-white', 4.8));
  [3.6, 6.4].forEach((y) => tower.polys(G.frustum(x, z, base + y - 0.16, base + y + 0.16, 0.5 - y * 0.02, 0.47 - y * 0.02, 8, 0, 'accent')));
  tower.polys(G.frustum(x, z, base + TOWER.deck - 0.45, base + TOWER.deck + 0.45, 0.85, 1.15, 12, 0, 'white'));
  tower.polys(G.frustum(x, z, base + TOWER.deck - 0.04, base + TOWER.deck + 0.28, 1.12, 1.17, 12, 0, 'lamp'));
  tower.polys(G.frustum(x, z, base + TOWER.deck + 0.455, base + TOWER.deck + 0.905, 1.0, 0.55, 12, 0, 'accent'));
  tower.line([x, base + TOWER.deck + 0.9, z], [x, base + TOWER.top, z], 's-white', 2.4);
  const beacon = [x, base + TOWER.top + 0.05, z];
  tower.circle(beacon, 12, 'halo');
  tower.raw(`<g data-beacon>`);
  tower.circle(beacon, 3.6, 'beacon');
  tower.raw('</g>');
  const parts = hillTrees.map((t) => {
    const o = new Out();
    drawTree(o, t);
    return { key: t.x + t.z, out: o };
  });
  parts.push({ key: x + z, out: tower });
  parts.sort((a, b) => a.key - b.key).forEach((p) => out.add(p.out));
  put([HILL.x - HILL.r, HILL.x + HILL.r, HILL.z - HILL.r, HILL.z + HILL.r], out, 'tower');
})();

/* ---------- 시계탑 기차역 ---------- */

(() => {
  const out = new Out();
  out.polys(G.box(STATION_CX, STATION.h / 2, STATION_CZ, STATION_W, STATION.h, STATION_D, 0, 'white'));
  windowRect(out, 'S', STATION_CX, STATION_CZ, STATION_W, STATION_D, 0.25, stationFloors, 'wl');
  windowRect(out, 'E', STATION_CX, STATION_CZ, STATION_W, STATION_D, 0.25, stationFloors, 'wl');
  out.polys(gableRoof(STATION_CX, STATION.h, STATION_CZ, true, STATION_W + 0.2, STATION_D + 0.2, 0.9, 'r2'));
  // 승강장 · 기둥 · 지붕
  const pz = (PLATFORM.z0 + PLATFORM.z1) / 2;
  out.polys(G.box(STATION_CX - 0.3, 0.11, pz, STATION_W + 0.6, 0.22, PLATFORM.z1 - PLATFORM.z0, 0, 'pave'));
  let pillars = '';
  for (let x = STATION.x0 + 0.4; x < STATION.x1 - 0.2; x += 1.6) {
    const a = G.project([x, 0.22, PLATFORM.z1 - 0.12]);
    const b = G.project([x, 1.22, PLATFORM.z1 - 0.12]);
    pillars += `M${fmt(a[0])} ${fmt(a[1])}V${fmt(b[1])}`;
  }
  out.raw(`<path class="s-white" stroke-width="1.6" d="${pillars}"/>`);
  out.polys(G.box(STATION_CX - 0.3, 1.25, PLATFORM.z0 + 0.38, STATION_W - 0.6, 0.08, 0.9, 0, 'accent'));
  // 서 있는 기차 한 편성 — 서쪽 칸부터
  trains
    .slice()
    .reverse()
    .forEach((t) => {
      out.polys(G.box(t.x, 0.5, TRAIN_Z, 2.3, 0.72, 0.74, 0, 'white'));
      out.polys(G.box(t.x, 0.36, TRAIN_Z, 2.32, 0.12, 0.76, 0, 'accent', true));
      windowRect(out, 'S', t.x, TRAIN_Z, 2.3, 0.74, 0.36, t.floors, 'wl');
    });
  out.polys(G.box(RAIL.end + 0.1, 0.2, TRAIN_Z, 0.3, 0.4, 0.9, 0, 'accent'));
  put([STATION.x0 - 0.6, RAIL.end + 0.25, STATION.z0 - 0.1, RAIL.z1], out, 'station');

  // 시계탑 — 남쪽·동쪽 시계 판은 면 좌표로 그린다
  const clock = new Out();
  clock.polys(G.box(CLOCK.x, CLOCK.h / 2, CLOCK.z, CLOCK.w, CLOCK.h, CLOCK.w, 0, 'white'));
  windowRect(clock, 'S', CLOCK.x, CLOCK.z, CLOCK.w, CLOCK.w, 0.5, clockFloors, 'wl');
  windowRect(clock, 'E', CLOCK.x, CLOCK.z, CLOCK.w, CLOCK.w, 0.5, clockFloors, 'wl');
  clock.polys(G.cone(CLOCK.x, CLOCK.z, CLOCK.h, CLOCK.h + 1.1, CLOCK.w * 0.82, 4, Math.PI / 4, 'accent'));
  const faceY = CLOCK.h - 0.55;
  const hands = (minutes, flip) => {
    const turn = (m, span) => ((minutes % span) / span) * TAU;
    return [
      { a: turn(0, 720), len: 0.2, width: 0.05 },
      { a: turn(0, 60), len: 0.3, width: 0.035 },
    ]
      .map((h) => {
        const dx = Math.sin(h.a) * flip;
        const dy = Math.cos(h.a);
        return `<line class="s-glass" x1="${f2(-dx * 0.03)}" y1="${f2(-dy * 0.03)}" x2="${f2(dx * (h.len - 0.03))}" y2="${f2(dy * (h.len - 0.03))}" stroke-width="${h.width}"/>`;
      })
      .join('');
  };
  const dial = (flip) =>
    `<circle class="m-glass-t" r=".4"/><circle class="clock" r=".34"/>` +
    `<g class="only-dusk">${hands(18 * 60 + 30, flip)}</g><g class="only-night">${hands(21 * 60, flip)}</g>`;
  const zs = CLOCK.z + CLOCK.w / 2 + 0.01;
  const xs = CLOCK.x + CLOCK.w / 2 + 0.01;
  const south = [UNIT, UNIT / 2, 0, -RISE, (CLOCK.x - zs) * UNIT, ((CLOCK.x + zs) * UNIT) / 2 - faceY * RISE];
  const east = [-UNIT, UNIT / 2, 0, -RISE, (xs - CLOCK.z) * UNIT, ((xs + CLOCK.z) * UNIT) / 2 - faceY * RISE];
  [
    [south, 1],
    [east, -1],
  ].forEach(([m, flip]) => {
    clock.raw(`<g stroke-width=".02" transform="matrix(${f2(m[0])} ${f2(m[1])} 0 ${f2(m[3])} ${fmt(m[4])} ${fmt(m[5])})">${dial(flip)}</g>`);
  });
  const hw = CLOCK.w / 2;
  put([CLOCK.x - hw - 0.1, CLOCK.x + hw + 0.1, CLOCK.z - hw - 0.1, CLOCK.z + hw + 0.1], clock, 'station');
})();

/* ---------- 시장 골목 ---------- */

(() => {
  const out = new Out();
  const shop = (b) => {
    const o = new Out();
    drawBuilding(o, b, `w${b.wall + 1}`, 'wl');
    // 골목 쪽 가게 앞 큰 창 — 북쪽 줄의 남쪽 면만 보인다
    if (b.side > 0) {
      const zf = b.z + b.d / 2 + 0.013;
      o.flat(
        [
          [b.x - 0.468, 0.16, zf],
          [b.x + 0.468, 0.16, zf],
          [b.x + 0.468, 0.48, zf],
          [b.x - 0.468, 0.48, zf],
        ],
        'win-early',
      );
    }
    // 차양 — 3D 판처럼 바깥 끝이 조금 들린다
    const tilt = -b.side * 0.32;
    const ay = [0, Math.cos(tilt), Math.sin(tilt)];
    const az = [0, -Math.sin(tilt), Math.cos(tilt)];
    o.polys(G.orientedBox([b.x, 0.78, b.z + b.side * (b.d / 2 + 0.24)], [1, 0, 0], ay, az, [(SHOP_W - 0.24) / 2, 0.025, 0.275], 'accent'));
    return o;
  };
  shops.filter((b) => b.side > 0).forEach((b) => out.add(shop(b)));
  // 골목 위 전구 줄
  for (let s = 0; s < 5; s += 1) {
    const x0 = MARKET.x0 + 0.5 + s * 1.6;
    const pts = [];
    for (let i = 0; i <= 8; i += 1) {
      const u = i / 8;
      pts.push([x0 + u * 0.9, 1.22 - Math.sin(u * Math.PI) * 0.22, lerp(MARKET.rowN[1], MARKET.rowS[0], u)]);
    }
    bulbLine(out, pts, 9, 2.2);
  }
  shops.filter((b) => b.side < 0).forEach((b) => out.add(shop(b)));
  put([MARKET.x0, MARKET.x1, MARKET.rowN[0], MARKET.rowS[1]], out, 'market');
})();

/* ---------- 공원 분수 ---------- */

(() => {
  const { x, z } = FOUNTAIN;
  const out = new Out();
  out.polys(G.frustum(x, z, 0, 0.3, 1.38, 1.3, 18, 0, 'white'));
  out.flat(disk(x, 0.26, z, 1.16, 1.16, 18), 'river-deep');
  const arcs = { back: '', front: '' };
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU + 0.2;
    const p = (r, y) => G.project([x + Math.cos(a) * r, y, z + Math.sin(a) * r]);
    const pts = [p(1.12, 0.3), p(0.95, 0.72), p(0.7, 0.86), p(0.48, 0.62), p(0.36, 0.3)];
    const d = `M${pts.map((q) => `${fmt(q[0])} ${fmt(q[1])}`).join('L')}`;
    arcs[Math.cos(a) + Math.sin(a) > 0 ? 'front' : 'back'] += d;
  }
  out.raw(`<path class="s-jet" stroke-width="1.2" d="${arcs.back}"/>`);
  out.polys(G.frustum(x, z, 0.1, 0.7, 0.22, 0.16, 8, 0, 'white'));
  out.polys(G.frustum(x, z, 0.65, 0.83, 0.2, 0.5, 12, 0, 'white'));
  const h = G.jetHeight(T0);
  const jet = G.jetPoints(h);
  jet.forEach((p) => out.ext(p));
  out.raw(`<polygon class="jet" data-jet points="${G.pointsAttr(jet)}"/>`);
  // 물줄기 끝 우산 — 밑 반지름 0.1, 위 반지름 0.36, 높이 0.3. 화면 스크립트가 물줄기 끝을 따라 옮긴다
  const sprayTop = 0.8 + h;
  const spray = new Out();
  spray.flat(
    [
      [x - 0.1 * Math.SQRT1_2, sprayTop - 0.3, z + 0.1 * Math.SQRT1_2],
      [x + 0.1 * Math.SQRT1_2, sprayTop - 0.3, z - 0.1 * Math.SQRT1_2],
      [x + 0.36 * Math.SQRT1_2, sprayTop, z - 0.36 * Math.SQRT1_2],
      [x - 0.36 * Math.SQRT1_2, sprayTop, z + 0.36 * Math.SQRT1_2],
    ],
    'jet',
  );
  spray.flat(disk(x, sprayTop, z, 0.36, 0.36, 12), 'jet');
  out.raw(`<g data-spray data-top="${f2(sprayTop)}">`).add(spray).raw('</g>');
  out.raw(`<path class="s-jet" stroke-width="1.2" d="${arcs.front}"/>`);
  const ring = disk(x, 0.34, z, 1.34, 1.34, 24);
  ring.push(ring[0]);
  bulbLine(out, ring, 13, 2.4);
  put([x - 1.45, x + 1.45, z - 1.45, z + 1.45], out, 'fountain');
})();

/* ---------- 차가 달리는 길 조각(빈 묶음) ---------- */

const laneOut = G.LANE_CHUNKS.map(() => new Out());
const carsAtT0 = G.carFrames(T0, carOffsets);

function dynBox(out, faces) {
  for (let i = 0; i < 3; i += 1) {
    const f = faces[i];
    if (f) out.polys([f]);
    else out.raw('<polygon points=""/>');
  }
}

carsAtT0.forEach((car, i) => {
  const g = laneOut[car.chunk];
  g.raw(`<g data-car="${i}"${car.opacity < 1 ? ` opacity="${f2(car.opacity)}"` : ''}>`);
  dynBox(g, car.body);
  dynBox(g, car.cabin);
  const dot = (p, cls) => (p ? `<circle class="${cls}" cx="${fmt(p[0])}" cy="${fmt(p[1])}" r="1.6"/>` : `<circle class="${cls}" r="0"/>`);
  g.raw(dot(car.head, 'head') + dot(car.tail, 'tail'));
  g.raw('</g>');
});

const laneGroup = (i) => `<g data-lane="${i}">${laneOut[i]}</g>`;
G.LANE_CHUNKS.forEach((c, i) => {
  if (c.where === 'bridge') return;
  const out = new Out().raw(laneGroup(i));
  objects.push({ fp: [c.x0, c.x1, c.z0, c.z1], key: (c.x0 + c.x1) / 2 + (c.z0 + c.z1) / 2, out, where: c.where });
});

/* ---------- 아치 다리(다리 위 차 포함) ---------- */

const bridgeOut = (() => {
  const out = new Out();
  const { x, deckY, north, south, mid, rise, span } = BRIDGE;
  const z0 = north - 0.6;
  const z1 = south + 0.6;
  out.flat(
    [
      [x - 1.15, deckY, z0],
      [x + 1.15, deckY, z0],
      [x + 1.15, deckY, z1],
      [x - 1.15, deckY, z1],
    ],
    'm-white-t',
  );
  // 다리 동쪽 옆면은 강 위로 드러난 부분만
  out.flat(
    [
      [x + 1.15, deckY, north],
      [x + 1.15, deckY, south],
      [x + 1.15, deckY - 0.3, south],
      [x + 1.15, deckY - 0.3, north],
    ],
    'm-white-d',
  );
  out.flat(
    [
      [AVENUE.x0, deckY + 0.005, z0],
      [AVENUE.x1, deckY + 0.005, z0],
      [AVENUE.x1, deckY + 0.005, z1],
      [AVENUE.x0, deckY + 0.005, z1],
    ],
    'm-road-t',
  );
  // 밤에 다리 위가 전구 불빛으로 밝아진다
  out.raw('<g class="pool">').flat(disk(x, deckY + 0.01, mid, 1.1, 2.6, 20), 'glow').raw('</g>');

  const arch = (ax) => {
    const o = new Out();
    const pts = [];
    for (let i = 0; i <= 20; i += 1) {
      const zz = lerp(north, south, i / 20);
      pts.push([ax, deckY + rise * (1 - ((zz - mid) / span) ** 2), zz]);
    }
    // 다리 줄 — 아치 길이를 8 등분한 자리
    const lens = [0];
    for (let i = 1; i < pts.length; i += 1) lens.push(lens[i - 1] + Math.hypot(pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]));
    const at = (u) => {
      const target = u * lens[lens.length - 1];
      let i = 1;
      while (i < lens.length - 1 && lens[i] < target) i += 1;
      const k = (target - lens[i - 1]) / (lens[i] - lens[i - 1]);
      return [ax, lerp(pts[i - 1][1], pts[i][1], k), lerp(pts[i - 1][2], pts[i][2], k)];
    };
    let d = '';
    for (let i = 1; i < 8; i += 1) {
      const p = at(i / 8);
      const a = G.project([ax, deckY, p[2]]);
      const b = G.project(p);
      d += `M${fmt(a[0])} ${fmt(a[1])}V${fmt(b[1])}`;
    }
    o.raw(`<path class="s-white" stroke-width=".9" d="${d}"/>`);
    o.polyline(pts, 's-white', 3.6);
    bulbLine(
      o,
      pts.map((p) => [p[0], p[1] + 0.1, p[2]]),
      15,
      2.4,
    );
    return o;
  };
  out.add(arch(x - 1.2));
  G.LANE_CHUNKS.forEach((c, i) => {
    if (c.where === 'bridge') out.raw(laneGroup(i));
  });
  out.add(arch(x + 1.2));
  return out;
})();
landmarkOut.bridge = bridgeOut;

/* ---------- 배 — 물결에 흔들리며 강을 건넌다(화면 스크립트가 옮긴다) ---------- */

const boatOut = (() => {
  const [bx, by, bz] = G.BOAT_HOME;
  const out = new Out();
  const f = G.boatFrame(T0);
  out.raw(`<g data-boat transform="translate(${fmt(f.dx)} ${fmt(f.dy)})" opacity="${f2(f.opacity)}">`);
  out.polys(G.box(bx, by + 0.1, bz, 1.9, 0.3, 0.7, 0, 'white'));
  out.polys(G.box(bx, by + 0.2, bz, 1.92, 0.08, 0.72, 0, 'accent', true));
  out.polys(G.box(bx - 0.2, by + 0.4, bz, 0.8, 0.3, 0.52, 0, 'white'));
  out.circle([bx - 0.2, by + 0.62, bz], 1.6, 'bulb');
  out.raw('</g>');
  return out;
})();

/* ---------- 땅 · 물 · 판 옆면 ---------- */

const XS = [];
for (let x = SLAB.x0; x < SLAB.x1; x += 1.2) XS.push(x);
XS.push(SLAB.x1);
const gp = (x, z) => `${f2(x)},${f2(z)}`;

const slab = new Out();
slab.flat(
  [
    [SLAB.x0, 0, SLAB.z1],
    [SLAB.x1, 0, SLAB.z1],
    [SLAB.x1, SLAB.bottom, SLAB.z1],
    [SLAB.x0, SLAB.bottom, SLAB.z1],
  ],
  'm-stone-l',
);
const nE = northEdge(SLAB.x1);
const sE = southEdge(SLAB.x1);
slab.flat(
  [
    [SLAB.x1, 0, SLAB.z0],
    [SLAB.x1, 0, nE],
    [SLAB.x1, RIVER.water, nE],
    [SLAB.x1, RIVER.water, sE],
    [SLAB.x1, 0, sE],
    [SLAB.x1, 0, SLAB.z1],
    [SLAB.x1, SLAB.bottom, SLAB.z1],
    [SLAB.x1, SLAB.bottom, SLAB.z0],
  ],
  'm-stone-d',
);
slab.flat(
  [
    [SLAB.x1, RIVER.water, nE],
    [SLAB.x1, RIVER.water, sE],
    [SLAB.x1, RIVER.wallBottom, sE],
    [SLAB.x1, RIVER.wallBottom, nE],
  ],
  'river-deep',
);

// 물 — 수면 높이의 바닥 좌표
const water = (() => {
  const band = (off0, off1) => {
    const a = XS.map((x) => gp(x, riverZ(x) + off0));
    const b = XS.slice().reverse().map((x) => gp(x, riverZ(x) + off1));
    return a.concat(b).join(' ');
  };
  let s = `<polygon class="river-shallow" points="${band(-RIVER.half, RIVER.half)}"/>`;
  s += `<polygon class="river-deep" points="${band(-1.4, 1.4)}"/>`;
  // 물결 — 강을 따라 짧은 선
  const r = G.seeded(5);
  let waves = '';
  for (let k = 0; k < 46; k += 1) {
    const x = SLAB.x0 + 0.6 + r() * (SLAB.x1 - SLAB.x0 - 2.4);
    const z = riverZ(x) + (r() * 2 - 1) * (RIVER.half - 0.7);
    waves += `M${f2(x)} ${f2(z)}h${f2(0.5 + r() * 0.6)}`;
  }
  s += `<path class="wave" data-waves stroke-width=".08" d="${waves}"/>`;
  // 밤에 물에 비친 불빛 — 다리·시장 골목·기차역과 북쪽 둑 가까운 물(3D 판 glowSpots)
  let glints = '';
  [
    [BRIDGE.x, BRIDGE.mid, 1.6, 9],
    [7.0, southEdge(7.0) - 0.7, 1.4, 7],
    [-8.0, southEdge(-8.0) - 0.7, 1.2, 6],
    [8.0, northEdge(8.0) + 0.7, 1.2, 5],
    [-10.0, northEdge(-10.0) + 0.7, 1.0, 4],
  ].forEach(([gx, gz, spread, count]) => {
    for (let k = 0; k < count; k += 1) {
      const x = gx + (r() * 2 - 1) * spread * 1.6;
      const z = gz + (r() * 2 - 1) * spread * 0.5;
      glints += `M${f2(x)} ${f2(z)}h${f2(0.3 + r() * 0.5)}`;
    }
  });
  s += `<path class="glint" stroke-width=".09" d="${glints}"/>`;
  return s;
})();

const bankWall = new Out();
bankWall.flat(XS.map((x) => [x, 0, northEdge(x)]).concat(XS.slice().reverse().map((x) => [x, RIVER.water, northEdge(x)])), 'm-stone-l');

// 땅 — 바닥 좌표
const ground = (() => {
  let s = '';
  const south = XS.map((x) => gp(x, southEdge(x))).concat([gp(SLAB.x1, SLAB.z1), gp(SLAB.x0, SLAB.z1)]);
  const north = [gp(SLAB.x0, SLAB.z0), gp(SLAB.x1, SLAB.z0)].concat(XS.slice().reverse().map((x) => gp(x, northEdge(x))));
  s += `<polygon class="m-pave-t" points="${south.join(' ')}"/><polygon class="m-pave-t" points="${north.join(' ')}"/>`;
  const strip = (edge, side) => {
    const a = XS.map((x) => gp(x, edge(x) + side * STREET.promenade));
    const b = XS.slice().reverse().map((x) => gp(x, edge(x) + side * (STREET.promenade + STREET.road)));
    return `<polygon class="m-road-t" points="${a.concat(b).join(' ')}"/>`;
  };
  s += strip(southEdge, 1) + strip(northEdge, -1);
  const rect = (x0, x1, z0, z1, cls) => `<rect class="${cls}" x="${f2(x0)}" y="${f2(z0)}" width="${f2(x1 - x0)}" height="${f2(z1 - z0)}"/>`;
  s += rect(SLAB.x0, SLAB.x1, SOUTH_ROAD.z0, SOUTH_ROAD.z1, 'm-road-t');
  s += rect(AVENUE.x0, AVENUE.x1, southEdge(AVENUE.mid) + STREET.promenade, SOUTH_ROAD.z0, 'm-road-t');
  s += rect(AVENUE.x0, AVENUE.x1, SLAB.z0, northEdge(AVENUE.mid) - STREET.promenade, 'm-road-t');
  s += rect(PARK.x0, PARK.x1, PARK.z0, PARK.z1, 'm-grass-t');
  s += rect(FOUNTAIN.x - 0.5, FOUNTAIN.x + 0.5, PARK.z0, PARK.z1, 'm-pave-t');
  s += rect(PARK.x0, PARK.x1, FOUNTAIN.z - 0.45, FOUNTAIN.z + 0.45, 'm-pave-t');
  s += `<circle class="m-pave-t" cx="${f2(FOUNTAIN.x)}" cy="${f2(FOUNTAIN.z)}" r="2"/>`;
  s += rect(SLAB.x0, RAIL.end, RAIL.z0, RAIL.z1, 'm-stone-t');
  // 밤 불빛 웅덩이 — 원 두 겹(그라데이션 대신). 한 경로로 묶어 겹친 곳이 두 번 칠해지지 않는다
  const pools = [[], []];
  lamps.forEach(([x, z]) => {
    pools[0].push(ellipsePath(x, z, 1.1, 1.1));
    pools[1].push(ellipsePath(x, z, 0.55, 0.55));
  });
  pools[0].push(ellipsePath(7.0, ALLEY_Z, 4.2, 0.75));
  pools[1].push(ellipsePath(7.0, ALLEY_Z, 2.8, 0.45));
  s += `<path class="glow pool" d="${pools[0].join('')}"/><path class="glow pool" d="${pools[1].join('')}"/>`;
  return s;
})();

// 기찻길 — 자갈 위로 조금 올린다
const rails = (() => {
  const tieStart = RAIL.end - 0.2 + 0.07;
  const cz = (RAIL.z0 + RAIL.z1) / 2;
  let s = `<path class="s-trunk ties" stroke-width=".9" stroke-dasharray=".14 .41" d="M${f2(tieStart)} ${f2(cz)}H${f2(SLAB.x0)}"/>`;
  s += `<path class="s-rail" stroke-width=".08" d="${RAIL.rails.map((z) => `M${f2(RAIL.end)} ${f2(z)}H${f2(SLAB.x0)}`).join('')}"/>`;
  return s;
})();

/* ---------- 모으기 — 강 북쪽 물체 · 배 · 다리 · 강 남쪽 물체 ---------- */

const isNorth = (o) => (o.where ? o.where === 'north' : (o.fp[2] + o.fp[3]) / 2 < riverZ((o.fp[0] + o.fp[1]) / 2));
const northObjects = paintOrder(objects.filter(isNorth));
const southObjects = paintOrder(objects.filter((o) => !isNorth(o)));

const objectsOut = new Out();
const collect = (o) => {
  objectsOut.add(o.out);
  if (o.landmark) {
    const box = landmarkOut[o.landmark] ? landmarkOut[o.landmark].box : [Infinity, Infinity, -Infinity, -Infinity];
    landmarkOut[o.landmark] = {
      box: [Math.min(box[0], o.out.box[0]), Math.min(box[1], o.out.box[1]), Math.max(box[2], o.out.box[2]), Math.max(box[3], o.out.box[3])],
    };
  }
};
northObjects.forEach(collect);
objectsOut.add(boatOut);
objectsOut.add(bridgeOut);
southObjects.forEach(collect);

// 그림 범위 — 판 꼭짓점과 물체
const all = new Out();
all.add(slab);
[
  [SLAB.x0, 0, SLAB.z0],
  [SLAB.x1, 0, SLAB.z0],
  [SLAB.x0, 0, SLAB.z1],
  [SLAB.x1, SLAB.bottom, SLAB.z1],
].forEach((p) => all.ext(G.project(p)));
all.add(objectsOut);
Object.values(G.LANDMARK_ANCHOR).forEach((p) => all.ext(G.project(p)));
const bounds = all.box.map((v) => Math.round(v));

const data = {
  bounds,
  landmarks: Object.fromEntries(
    Object.entries(G.LANDMARK_ANCHOR).map(([id, p]) => [
      id,
      { anchor: G.project(p).map((v) => Math.round(v * 10) / 10), box: (landmarkOut[id] || bridgeOut).box.map((v) => Math.round(v)) },
    ]),
  ),
  t0: T0,
  cars: carOffsets.map((v) => Math.round(v * 1e6) / 1e6),
};

const pad = 0.04;
const vbW = bounds[2] - bounds[0];
const vbH = bounds[3] - bounds[1];
const viewBox = [bounds[0] - vbW * pad, bounds[1] - vbH * pad, vbW * (1 + pad * 2), vbH * (1 + pad * 2)].map((v) => Math.round(v)).join(' ');

const defs =
  '<defs>' +
  windowPattern('iso-wn', 31, 0.12, 0.56, 0) +
  windowPattern('iso-ws', 37, 0.1, 0.5, 0.15) +
  windowPattern('iso-wl', 41, 0.45, 0.55, 0) +
  '</defs>';

const svg =
  `<svg class="iso" id="iso" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" stroke-width="0.6" role="img" aria-label="해 질 녘, 강을 낀 작은 도시. 전망 타워, 아치 다리, 시계탑 기차역, 시장 골목, 공원 분수가 있는 그림" focusable="false">` +
  defs +
  `<g class="iso__slab">${slab}</g>` +
  `<g class="iso__water" stroke-width=".03" transform="translate(0 ${fmt(-RIVER.water * RISE)}) ${GROUND_MATRIX}">${water}</g>` +
  `<g class="iso__bank">${bankWall}</g>` +
  `<g class="iso__ground" stroke-width=".03" transform="${GROUND_MATRIX}">${ground}</g>` +
  `<g class="iso__rails" transform="translate(0 ${fmt(-0.08 * RISE)}) ${GROUND_MATRIX}">${rails}</g>` +
  `<g class="iso__objects">${objectsOut}</g>` +
  `</svg>\n        <script type="application/json" id="iso-data">${JSON.stringify(data)}</script>`;

const htmlPath = join(ROOT, 'index.html');
const html = readFileSync(htmlPath, 'utf8');
const start = '<!-- iso-scene:start -->';
const end = '<!-- iso-scene:end -->';
const i = html.indexOf(start);
const j = html.indexOf(end);
if (i < 0 || j < 0) throw new Error('index.html 에 iso-scene 표시가 없다');
writeFileSync(htmlPath, html.slice(0, i + start.length) + '\n        ' + svg + '\n        ' + html.slice(j));
const elements = (svg.match(/<(polygon|line|polyline|circle|rect|path|ellipse)\b/g) || []).length;
console.log(`그림 요소 ${elements}개 · ${(svg.length / 1024).toFixed(1)}KB · 건물 ${core.length + shops.length + 2}채 · 나무 ${trees.length} · 가로등 ${lamps.length} · 범위 ${bounds.join(' ')}`);
