#!/usr/bin/env node
/*
 * 산 그림(인라인 SVG)과 눈송이 층을 만들어 index.html 에 넣는다 — 설계서 3-1절·4-2절
 *
 *   node tools/build-scene.mjs
 *
 * - 좌표 계산은 js/iso-geom.js 를 그대로 쓴다. 화면 스크립트(js/app.js)와 같은 식이라 움직임이 그림과 맞는다.
 * - index.html 의 <!-- iso-scene:start --> 와 <!-- iso-scene:end --> 사이를 통째로 바꾼다.
 * - 높이 함수·슬로프 길·나무 자리는 3D 판(ski-mountain)과 같은 식·같은 씨앗 난수로 만든다. 그래서 두 판의 배치가 같다.
 * - 땅은 보는 방향에 맞춘 격자를 뒤에서 앞으로 한 줄씩 그린다. 줄마다 땅 → 다진 눈 → 그 줄에 서 있는 것 순서다.
 * - 의존성 없음. Node 18 이상.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const context = vm.createContext({});
vm.runInContext(readFileSync(join(ROOT, 'js/iso-geom.js'), 'utf8'), context);
const G = context.IsoGeom;
const { TAU, SCALE, PEAK, PLAZA, LODGE, LIFT, LIFT_GEOM, RUNS, SUMMIT_Y } = G;
const th = G.terrainHeight;
const fmt = G.fmt;

/** 정적 그림에 쓰는 순간(초) — 3D 판 포스터와 같은 시각. 화면 스크립트가 켜지면 이어서 움직인다 */
const T0 = 7.4;

/** 땅 격자 — 보는 방향 좌표(u 오른쪽, v 앞쪽)로 한 칸 2. 줄(row)은 v 가 같은 칸들이다 */
const GRID = { cell: 2, u0: -34, u1: 34, v0: -34, v1: 30, radius: 33, center: [0, 2] };
const NU = (GRID.u1 - GRID.u0) / GRID.cell;
const NV = (GRID.v1 - GRID.v0) / GRID.cell;
const rowOf = (v) => G.clamp(Math.floor((v - GRID.v0) / GRID.cell), 0, NV - 1);

/* ---------- 범위 재기 ---------- */

class Box {
  constructor() {
    this.b = [Infinity, Infinity, -Infinity, -Infinity];
  }

  ext(p) {
    this.b[0] = Math.min(this.b[0], p[0]);
    this.b[1] = Math.min(this.b[1], p[1]);
    this.b[2] = Math.max(this.b[2], p[0]);
    this.b[3] = Math.max(this.b[3], p[1]);
    return this;
  }

  addBox(o) {
    if (o.b[0] <= o.b[2]) {
      this.ext([o.b[0], o.b[1]]);
      this.ext([o.b[2], o.b[3]]);
    }
    return this;
  }
}

/** 물건 하나의 SVG 조각과 범위 */
class Out {
  constructor() {
    this.parts = [];
    this.box = new Box();
  }

  polys(faces, attrs = '') {
    faces.forEach((f) => {
      f.pts2.forEach((p) => this.box.ext(p));
      this.parts.push(`<polygon class="${f.cls}"${attrs} points="${G.pointsAttr(f.pts2)}"/>`);
    });
    return this;
  }

  flat(points3, cls) {
    const pts2 = points3.map(G.project);
    pts2.forEach((p) => this.box.ext(p));
    this.parts.push(`<polygon class="${cls}" points="${G.pointsAttr(pts2)}"/>`);
    return this;
  }

  line(a, b, cls, width) {
    const p = G.project(a);
    const q = G.project(b);
    this.box.ext(p).ext(q);
    this.parts.push(`<line class="${cls}" x1="${fmt(p[0])}" y1="${fmt(p[1])}" x2="${fmt(q[0])}" y2="${fmt(q[1])}" stroke-width="${width}"/>`);
    return this;
  }

  raw(s, pts2 = []) {
    pts2.forEach((p) => this.box.ext(p));
    this.parts.push(s);
    return this;
  }

  add(other) {
    this.parts.push(other.toString());
    this.box.addBox(other.box);
    return this;
  }

  toString() {
    return this.parts.join('');
  }
}

/** 바닥에 누운 원(그림자·광장) */
function disk(cx, y, cz, rx, rz = rx, segs = 20) {
  const out = [];
  for (let k = 0; k < segs; k += 1) {
    const a = (k / segs) * TAU;
    out.push([cx + Math.cos(a) * rx, y, cz + Math.sin(a) * rz]);
  }
  return out;
}

const groundNormal = (x, z) => {
  const e = 0.25;
  return G.normalize([-(th(x + e, z) - th(x - e, z)) / (2 * e), 1, -(th(x, z + e) - th(x, z - e)) / (2 * e)]);
};

/* ---------- 줄 ---------- */

const rows = Array.from({ length: NV }, () => ({ terrain: new Map(), decals: new Map(), objects: [] }));
const pushPath = (map, cls, d) => {
  if (!map.has(cls)) map.set(cls, []);
  map.get(cls).push(d);
};
const ipt = (p) => `${Math.round(p[0])} ${Math.round(p[1])}`;
const landBox = new Box(); // 처음 시점에 맞출 산 그림 범위(골짜기 바닥·안개·먼 산은 뺀다)

/* ---------- 땅 ---------- */

let triangles = 0;
(() => {
  // 엇갈린 세모 격자 — 홀수 줄의 꼭짓점을 반 칸 옆으로 민다. 재질 경계가 가로 계단이 아니라 비스듬한 톱니가 된다
  const H = [];
  for (let j = 0; j <= NV; j += 1) {
    H.push([]);
    for (let i = 0; i <= NU; i += 1) {
      const [x, z] = G.fromUV(GRID.u0 + (i + (j % 2) * 0.5) * GRID.cell, GRID.v0 + j * GRID.cell);
      H[j].push([x, th(x, z), z]);
    }
  }
  const classify = (c, ny) => {
    const [cx, cy, cz] = c;
    // 다진 눈(슬로프·광장)은 땅 세모가 아니라 매끈한 띠로 덮는다(아래 "다진 눈")
    if (G.plazaMask(cx, cz) > 0.5 || G.groomMask(cx, cz) > 0.55) return 'snow';
    if (Math.abs(ny) < 0.78 && cy > 1.5) return 'rock';
    if (cy > 11.5 && G.valueNoise(cx * 0.5, cz * 0.5) > 0.35) return 'rock';
    if (G.isForest(cx, cz, cy)) return 'forest';
    if ((cy < 0.6 && G.massif(cx, cz) < 0.3) || G.edgeFade(cx, cz) < 0.5) return 'valley';
    return 'snow';
  };
  for (let j = 0; j < NV; j += 1) {
    for (let i = 0; i < NU; i += 1) {
      const a = H[j][i];
      const b = H[j][i + 1];
      const c = H[j + 1][i];
      const d = H[j + 1][i + 1];
      const tris = j % 2 === 0 ? [[a, b, c], [b, d, c]] : [[a, d, c], [a, b, d]];
      tris.forEach((tri) => {
        const cen = [(tri[0][0] + tri[1][0] + tri[2][0]) / 3, (tri[0][1] + tri[1][1] + tri[2][1]) / 3, (tri[0][2] + tri[1][2] + tri[2][2]) / 3];
        if (Math.hypot(cen[0] - GRID.center[0], cen[2] - GRID.center[1]) > GRID.radius) return;
        let n = G.normalize(G.cross([tri[1][0] - tri[0][0], tri[1][1] - tri[0][1], tri[1][2] - tri[0][2]], [tri[2][0] - tri[0][0], tri[2][1] - tri[0][1], tri[2][2] - tri[0][2]]));
        if (n[1] < 0) n = [-n[0], -n[1], -n[2]];
        if (G.dot(n, G.VIEW) <= 0) return; // 산 뒤쪽 면
        const mat = classify(cen, n[1]);
        // 골짜기 바닥은 아래에 깔린 판(골짜기 바닥 색) 그대로 둔다. 낮은 둔덕의 면을 그리면 땅 가장자리가 계단처럼 보인다
        if (mat === 'valley') return;
        const tone = G.toneOf(n);
        const pts2 = tri.map(G.project);
        pts2.forEach((p) => landBox.ext(p));
        pushPath(rows[j].terrain, `m-${mat}-${tone}`, `M${pts2.map(ipt).join(' ')}Z`);
        triangles += 1;
      });
    }
  }
})();

/* ---------- 다진 눈·그림자 — 땅에 붙은 판. 줄마다 잘라 그 줄의 땅 위에 둔다 ---------- */

const landmarkBox = {};
const growLandmark = (id, box) => {
  if (!landmarkBox[id]) landmarkBox[id] = new Box();
  landmarkBox[id].addBox(box);
};

function clipBand(poly, v0, v1) {
  const half = (pts, keep, edge) => {
    const out = [];
    for (let i = 0; i < pts.length; i += 1) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const ia = keep(a);
      const ib = keep(b);
      if (ia) out.push(a);
      if (ia !== ib) {
        const t = (edge - a[1]) / (b[1] - a[1]);
        out.push([a[0] + (b[0] - a[0]) * t, edge]);
      }
    }
    return out;
  };
  return half(half(poly, (p) => p[1] >= v0, v0), (p) => p[1] <= v1, v1);
}

/** 땅 위 판(xz 꼭짓점)을 줄마다 잘라 넣는다. cls 가 함수면 조각의 땅 기울기로 고른다 */
function decal(polyXZ, cls, lift = 0.05, landmark) {
  const uv = polyXZ.map(([x, z]) => G.toUV(x, z));
  const vs = uv.map((p) => p[1]);
  const r0 = rowOf(Math.min(...vs));
  const r1 = rowOf(Math.max(...vs));
  for (let r = r0; r <= r1; r += 1) {
    const piece = clipBand(uv, GRID.v0 + r * GRID.cell, GRID.v0 + (r + 1) * GRID.cell);
    if (piece.length < 3) continue;
    const xz = piece.map(([u, v]) => G.fromUV(u, v));
    const pts2 = xz.map(([x, z]) => G.project([x, th(x, z) + lift, z]));
    const cx = xz.reduce((s, p) => s + p[0], 0) / xz.length;
    const cz = xz.reduce((s, p) => s + p[1], 0) / xz.length;
    const name = typeof cls === 'function' ? cls(cx, cz) : cls;
    pushPath(rows[r].decals, name, `M${pts2.map(ipt).join(' ')}Z`);
    const box = new Box();
    pts2.forEach((p) => box.ext(p));
    landBox.addBox(box);
    if (landmark) growLandmark(landmark, box);
  }
}

const groomedTone = (x, z) => `m-groomed-${G.toneOf(groundNormal(x, z))}`;

/** 슬로프 길 띠 — 길 가운데 선에서 양쪽으로 half 만큼 */
function ribbon(run) {
  const s = run.line.samples;
  const left = [];
  const right = [];
  s.forEach((p, i) => {
    const a = s[Math.max(0, i - 1)];
    const b = s[Math.min(s.length - 1, i + 1)];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / l;
    const nz = (b[0] - a[0]) / l;
    left.push([p[0] + nx * run.half, p[1] + nz * run.half]);
    right.push([p[0] - nx * run.half, p[1] - nz * run.half]);
  });
  return left.concat(right.reverse());
}

decal(ribbon(RUNS.easy), groomedTone, 0.05, 'easy');
decal(ribbon(RUNS.expert), groomedTone, 0.05, 'expert');
decal(
  disk(PLAZA.x, 0, PLAZA.z, PLAZA.rx, PLAZA.rz, 32).map((p) => [p[0], p[2]]),
  groomedTone,
  0.04,
);
/** 해 반대쪽(북동쪽)으로 짧게 드리운 그림자 */
const SHADOW_DIR = [0.55, -0.5];
const shadowXZ = (x, z, r, segs = 16) => disk(x + SHADOW_DIR[0] * r * 0.6, 0, z + SHADOW_DIR[1] * r * 0.6, r, r * 0.8, segs).map((p) => [p[0], p[2]]);
decal(shadowXZ(LODGE.x, LODGE.z, 2.3), 'shadow', 0.08);
decal(shadowXZ(LIFT.bottom[0], LIFT.bottom[1], 1.5), 'shadow', 0.08);

/* ---------- 놓이는 것 ---------- */

/** 줄을 정하는 앞 끝(v)과, 줄 안에서의 순서 */
function place(out, frontV, key = frontV, landmark) {
  rows[rowOf(frontV)].objects.push({ key, svg: out.toString() });
  landBox.addBox(out.box);
  if (landmark) growLandmark(landmark, out.box);
}
const vOf = (x, z) => G.toUV(x, z)[1];

const defs = [];

/* 나무 — 3D 판과 같은 씨앗·같은 조건. 크기 세 가지를 한 번 그려 두고 자리만 바꿔 쓴다 */
const TREE_SIZES = [0.85, 1.05, 1.25];
TREE_SIZES.forEach((s, i) => {
  const o = new Out();
  o.flat(disk(SHADOW_DIR[0] * s * 0.7, 0, SHADOW_DIR[1] * s * 0.7, 0.62 * s, 0.5 * s, 12), 'shadow');
  const rot = 0.35;
  o.polys(G.cone(0, 0, 0.045 * s, 1.195 * s, 0.62 * s, 6, rot, 'tree'));
  o.polys(G.cone(0, 0, 0.805 * s, 1.755 * s, 0.46 * s, 6, rot, 'tree'));
  o.polys(G.cone(0, 0, 1.43 * s, 1.89 * s, 0.27 * s, 6, rot, 'tree-snow'));
  defs.push(`<g id="t${i}">${o}</g>`);
});
let treeCount = 0;
(() => {
  const rand = G.seeded(21);
  const spots = [];
  const steep = (x, z) => Math.hypot(th(x + 0.5, z) - th(x - 0.5, z), th(x, z + 0.5) - th(x, z - 0.5));
  const nearBuilding = (x, z) =>
    Math.hypot(x - LODGE.x, z - LODGE.z) < 4.6 ||
    Math.hypot(x - LIFT.bottom[0], z - LIFT.bottom[1]) < 2.6 ||
    Math.hypot(x - LIFT.top[0], z - LIFT.top[1]) < 2.6;
  for (let tries = 0; tries < 6000 && spots.length < 240; tries += 1) {
    const x = (rand() * 2 - 1) * 30;
    const z = (rand() * 2 - 1) * 30;
    const h = th(x, z);
    if (!G.isForest(x, z, h) || steep(x, z) > 1.1 || nearBuilding(x, z)) continue;
    if (spots.some((s) => Math.hypot(x - s.x, z - s.z) < 1.05)) continue;
    spots.push({ x, z, y: h, s: 0.8 + rand() * 0.5, r: rand() * TAU });
  }
  spots.forEach((s) => {
    const size = TREE_SIZES.reduce((best, v, i) => (Math.abs(v - s.s) < Math.abs(TREE_SIZES[best] - s.s) ? i : best), 0);
    const p = G.project([s.x, s.y, s.z]);
    const o = new Out().raw(`<use href="#t${size}" x="${Math.round(p[0])}" y="${Math.round(p[1])}"/>`, [
      [p[0] - 14 * s.s, p[1] - 33 * s.s],
      [p[0] + 14 * s.s, p[1] + 4],
    ]);
    place(o, vOf(s.x, s.z) + 0.62 * s.s, vOf(s.x, s.z));
  });
  treeCount = spots.length;
})();

/* 슬로프 가장자리 막대 */
(() => {
  const top = G.project([0, 0.65, 0]);
  const bottom = G.project([0, -0.05, 0]);
  defs.push(`<g id="pl"><line class="s-accent" x1="0" y1="${fmt(bottom[1])}" x2="0" y2="${fmt(top[1])}" stroke-width="2"/></g>`);
  [RUNS.easy, RUNS.expert].forEach((run) => {
    const q = {};
    const steps = Math.floor(run.line.length / 2.4);
    for (let i = 1; i < steps; i += 1) {
      run.line.at(i / steps, q);
      [1, -1].forEach((side) => {
        const x = q.x - q.tz * (run.half + 0.35) * side;
        const z = q.z + q.tx * (run.half + 0.35) * side;
        const p = G.project([x, th(x, z), z]);
        place(new Out().raw(`<use href="#pl" x="${Math.round(p[0])}" y="${Math.round(p[1])}"/>`, [[p[0], p[1] + bottom[1]], [p[0], p[1] + top[1]]]), vOf(x, z) + 0.1);
      });
    }
  });
})();

/* 리프트 — 정류장 · 철탑 · 줄 · 의자 */
const rotY = (cx, cy, cz, yaw) => (lx, ly, lz) => [cx + lx * Math.cos(yaw) + lz * Math.sin(yaw), cy + ly, cz - lx * Math.sin(yaw) + lz * Math.cos(yaw)];
(() => {
  const { stops, sideX, sideZ, yaw } = LIFT_GEOM;
  [stops[0], stops[stops.length - 1]].forEach((st, i) => {
    const at = rotY(st.x, st.ground, st.z, yaw);
    const o = new Out();
    let c = at(0, 0.45, 0);
    o.polys(G.box(c[0], c[1], c[2], 1.9, 1.3, 1.7, yaw, 'structure'));
    c = at(0, 1.2, 0);
    o.polys(G.box(c[0], c[1], c[2], 2.3, 0.18, 2.1, yaw, 'accent'));
    c = at(0, 2.0, i === 0 ? -0.9 : 0.9);
    o.polys(G.frustum(c[0], c[2], c[1] - 0.05, c[1] + 0.05, LIFT.gauge + 0.05, LIFT.gauge + 0.05, 14, 0, 'rock'));
    place(o, vOf(st.x, st.z) + 1.3, vOf(st.x, st.z), 'lift');
  });
  stops.forEach((st) => {
    if (!st.tower) return;
    const o = new Out();
    o.line([st.x, st.ground - 0.3, st.z], [st.x, st.y + 0.12, st.z], 's-rock', 3.6);
    o.polys(G.box(st.x, st.y + 0.12, st.z, LIFT.gauge * 2 + 0.3, 0.12, 0.14, yaw, 'rock'));
    place(o, vOf(st.x, st.z) + 0.3, vOf(st.x, st.z), 'lift');
  });
  // 줄 두 가닥 — 칸마다 앞쪽 끝의 줄에 둔다
  for (let i = 1; i < stops.length; i += 1) {
    const p = stops[i - 1];
    const q = stops[i];
    const o = new Out();
    [1, -1].forEach((s) => {
      const g = LIFT.gauge * s;
      o.line([p.x + sideX * g, p.y, p.z + sideZ * g], [q.x + sideX * g, q.y, q.z + sideZ * g], 's-rock', 1);
    });
    const front = Math.max(vOf(p.x, p.z), vOf(q.x, q.z));
    place(o, front, front - 0.05, 'lift');
  }
  // 의자 — 오르는 쪽·내려오는 쪽 모양을 한 번 그려 두고 자리만 옮긴다
  [true, false].forEach((up) => {
    const f = G.chairFaces(up);
    const o = new Out();
    o.raw(`<line class="s-rock" x1="${fmt(f.hanger[0][0])}" y1="${fmt(f.hanger[0][1])}" x2="${fmt(f.hanger[1][0])}" y2="${fmt(f.hanger[1][1])}" stroke-width="1"/>`);
    const parts = [f.seat, f.back].sort((a, b) => a[0].depth - b[0].depth);
    parts.forEach((faces) => o.polys(faces));
    defs.push(`<g id="${up ? 'cu' : 'cd'}">${o}</g>`);
  });
  G.liftChairs(T0).forEach((ch, i) => {
    const p = G.project(ch.p);
    const o = new Out().raw(`<use data-chair="${i}" href="#${ch.up ? 'cu' : 'cd'}" x="${fmt(p[0])}" y="${fmt(p[1])}"/>`, [p]);
    place(o, vOf(ch.p[0], ch.p[2]) + 0.4);
  });
})();

/* 산장 — 나무 벽 · 세모 지붕 · 굴뚝 · 문과 창 · 작은 매표소 */
(() => {
  const ground = th(LODGE.x, LODGE.z);
  const r = LODGE.rot;
  const at = rotY(LODGE.x, ground, LODGE.z, r);
  const o = new Out();
  const boxAt = (lx, ly, lz, w, h, d, mat) => {
    const c = at(lx, ly, lz);
    o.polys(G.box(c[0], c[1], c[2], w, h, d, r, mat));
  };
  boxAt(0.9, 2.5, -0.35, 0.36, 0.9, 0.36, 'rock');
  boxAt(0, 0.6, 0, 3.2, 1.3, 2.2, 'wood');
  boxAt(-0.6, 0.45, 1.11, 0.6, 0.9, 0.06, 'dark');
  boxAt(0.35, 0.72, 1.11, 0.5, 0.42, 0.06, 'structure');
  boxAt(1.15, 0.72, 1.11, 0.5, 0.42, 0.06, 'structure');
  // 세모 지붕 — 3D 판의 세 모서리 원기둥(반지름 1.45, 길이 3.7)과 같은 모양
  const R = 1.45;
  const cy = 1.25 + R / 2;
  const tri = (lx) => [at(lx, cy + R, 0), at(lx, cy - R / 2, R * Math.sin(Math.PI / 3)), at(lx, cy - R / 2, -R * Math.sin(Math.PI / 3))];
  const a = tri(-1.85);
  const b = tri(1.85);
  const inside = at(0, cy, 0);
  o.polys(
    G.sortFaces([
      G.face([a[0], b[0], b[1], a[1]], 'accent', inside),
      G.face([a[0], a[2], b[2], b[0]], 'accent', inside),
      G.face(a, 'accent', inside),
      G.face(b, 'accent', inside),
    ]),
  );
  boxAt(3.4, 0.45, 0.6, 1.2, 0.9, 1.0, 'structure');
  boxAt(3.4, 0.97, 0.6, 1.4, 0.14, 1.2, 'accent');
  const front = Math.max(...[at(-1.6, 0, 1.3), at(1.6, 0, 1.3), at(4.1, 0, 1.2)].map((p) => vOf(p[0], p[2])));
  place(o, front, vOf(LODGE.x, LODGE.z), 'lodge');
})();

/* 정상 전망대 — 바위 받침 · 둥근 전망대 · 지붕 · 깃발 */
(() => {
  const { x, z } = PEAK;
  const y = SUMMIT_Y;
  const o = new Out();
  o.polys(G.frustum(x, z, y - 1.3, y + 0.3, 1.5, 1.1, 8, 0, 'rock'));
  o.polys(G.frustum(x, z, y + 0.3, y + 0.46, 1.7, 1.7, 8, 0, 'structure'));
  o.polys(G.frustum(x, z, y + 0.46, y + 1.36, 0.78, 0.72, 8, 0, 'structure'));
  o.polys(G.cone(x, z, y + 1.36, y + 2.06, 1.0, 8, 0, 'accent'));
  o.line([x + 1.3, y + 0.4, z + 0.4], [x + 1.3, y + 2.4, z + 0.4], 's-rock', 0.8);
  o.polys(G.box(x + 1.3, y + 2.2, z + 0.72, 0.06, 0.36, 0.6, 0, 'accent'));
  place(o, vOf(x, z) + 1.8, vOf(x, z), 'summit');
})();

/* 스키어 — 움직이는 면을 미리 만들어 두고 화면 스크립트가 points 와 class 만 바꾼다 */
G.SKIERS.forEach((sk, i) => {
  const pose = G.skierPose(i, T0);
  const o = new Out();
  o.raw(`<g data-skier="${i}"${pose.visible ? '' : ' visibility="hidden"'}>`);
  o.raw(`<polygon class="m-dark-t" points="${G.pointsAttr(pose.skis)}"/>`, pose.skis);
  for (let k = 0; k < 3; k += 1) {
    const f = pose.body[k];
    if (f) o.polys([f]);
    else o.raw('<polygon points=""/>');
  }
  o.raw(`<circle class="m-structure-t" cx="${fmt(pose.head[0])}" cy="${fmt(pose.head[1])}" r="2.6"/>`, [pose.head]);
  o.raw('</g>');
  place(o, pose.v + 0.4, pose.v, sk.run);
});

/* ---------- 바깥 — 골짜기 바닥 · 안개 띠 두 겹 · 먼 산 ---------- */

const far = new Out();
(() => {
  const ring = (r, cls) => {
    const pts = [];
    for (let k = 0; k < 48; k += 1) {
      const a = (k / 48) * TAU;
      const rr = r * (1 + 0.06 * G.valueNoise(Math.cos(a) * 3 + 7, Math.sin(a) * 3 - 2));
      pts.push([GRID.center[0] + Math.cos(a) * rr, 0, GRID.center[1] + Math.sin(a) * rr]);
    }
    far.flat(pts, cls);
  };
  ring(56, 'fog-2');
  ring(45, 'fog-1');
  ring(GRID.radius + 2.5, 'm-valley-t');
  // 먼 산 — 산 뒤쪽(북쪽) 반원에만 둔다. 앞쪽에 두면 평행 투영이라 산을 가린다
  const rand = G.seeded(5);
  const peaks = [];
  for (let i = 0; i < 7; i += 1) {
    const a = (-0.42 + (i / 6) * 0.84) * Math.PI + (rand() - 0.5) * 0.12;
    const dist = 48 + rand() * 6;
    peaks.push({ x: Math.sin(a) * dist, z: GRID.center[1] - Math.cos(a) * dist, h: 2.5 + rand() * 2.5, r: 7 + rand() * 4, rot: rand() * TAU });
  }
  peaks.sort((p, q) => vOf(p.x, p.z) - vOf(q.x, q.z));
  peaks.forEach((p) => far.polys(G.cone(p.x, p.z, -0.2, p.h, p.r, 7, p.rot, 'far')));
})();

/* ---------- 눈송이 층 — 작은 원 바둑판 세 겹(설계서 4-1절 눈송이 크기 토큰과 같은 값) ---------- */

const FLAKES = [
  { name: 'far', tile: 110, count: 9, r: 1 },
  { name: 'mid', tile: 140, count: 9, r: 1.5 },
  { name: 'near', tile: 180, count: 7, r: 2 },
];
const snowfall = (() => {
  const rand = G.seeded(91);
  const layers = FLAKES.map((f) => {
    let circles = '';
    for (let k = 0; k < f.count; k += 1) {
      const cx = f.r + rand() * (f.tile - f.r * 2);
      const cy = f.r + rand() * (f.tile - f.r * 2);
      circles += `<circle cx="${fmt(cx)}" cy="${fmt(cy)}" r="${f.r}"/>`;
    }
    return (
      `<svg class="snowfall__layer snowfall__layer--${f.name}" focusable="false">` +
      `<defs><pattern id="flakes-${f.name}" width="${f.tile}" height="${f.tile}" patternUnits="userSpaceOnUse">${circles}</pattern></defs>` +
      `<rect width="100%" height="100%" fill="url(#flakes-${f.name})"/></svg>`
    );
  });
  return `<div class="snowfall" aria-hidden="true">${layers.join('')}</div>`;
})();

/* ---------- 모으기 ---------- */

let rowSvg = '';
rows.forEach((row, j) => {
  let s = '';
  row.terrain.forEach((ds, cls) => (s += `<path class="${cls}" d="${ds.join('')}"/>`));
  row.decals.forEach((ds, cls) => (s += `<path class="${cls}" d="${ds.join('')}"/>`));
  row.objects.sort((a, b) => a.key - b.key).forEach((o) => (s += o.svg));
  rowSvg += `<g data-row="${j}">${s}</g>`;
});

const anchors = G.landmarkAnchors();
const landmarks = {};
Object.entries(anchors).forEach(([id, p]) => {
  const a = G.project(p);
  landBox.ext([a[0], a[1] - 30]);
  landmarks[id] = { anchor: a.map((v) => Math.round(v * 10) / 10), box: landmarkBox[id].b.map((v) => Math.round(v)) };
});
const bounds = landBox.b.map((v) => Math.round(v));

const data = { bounds, landmarks, t0: T0, rows: { v0: GRID.v0, step: GRID.cell, count: NV } };

const pad = 0.06;
const vbW = bounds[2] - bounds[0];
const vbH = bounds[3] - bounds[1];
const viewBox = [bounds[0] - vbW * pad, bounds[1] - vbH * pad, vbW * (1 + pad * 2), vbH * (1 + pad * 2)].map((v) => Math.round(v)).join(' ');

const svg =
  `<svg class="iso" id="iso" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" stroke-width="0.6" role="img" aria-label="눈 덮인 산 하나에 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 그림" focusable="false">` +
  `<defs>${defs.join('')}</defs>` +
  `<g class="iso__far">${far}</g>` +
  `<g class="iso__land">${rowSvg}</g>` +
  `</svg>\n        ${snowfall}\n        <script type="application/json" id="iso-data">${JSON.stringify(data)}</script>`;

const htmlPath = join(ROOT, 'index.html');
const html = readFileSync(htmlPath, 'utf8');
const start = '<!-- iso-scene:start -->';
const end = '<!-- iso-scene:end -->';
const i = html.indexOf(start);
const j = html.indexOf(end);
if (i < 0 || j < 0) throw new Error('index.html 에 iso-scene 표시가 없다');
writeFileSync(htmlPath, html.slice(0, i + start.length) + '\n        ' + svg + '\n        ' + html.slice(j));
const elements = (svg.match(/<(polygon|line|polyline|circle|path|use)\b/g) || []).length;
console.log(`그림 요소 ${elements}개 · 땅 세모 ${triangles}개 · 나무 ${treeCount}그루 · ${(svg.length / 1024).toFixed(1)}KB · 범위 ${bounds.join(' ')}`);
