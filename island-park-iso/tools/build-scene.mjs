#!/usr/bin/env node
/*
 * 섬 그림(인라인 SVG)을 만들어 index.html 에 넣는다 — 설계서 3-1절·4-2절
 *
 *   node tools/build-scene.mjs
 *
 * - 좌표 계산은 js/iso-geom.js 를 그대로 쓴다. 화면 스크립트(js/scene.js)와 같은 식이라 움직임이 그림과 맞는다.
 * - index.html 의 <!-- iso-scene:start --> 와 <!-- iso-scene:end --> 사이를 통째로 바꾼다.
 * - 섬 모양·나무 자리는 3D 판(island-park)과 같은 씨앗 난수로 만든다. 그래서 두 판의 배치가 같다.
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
const { TAU, UNIT, ISLAND, HILL, HILL_TOP, PLAZA, LIGHTHOUSE, BOOTH, CAFE, FERRIS, CAROUSEL, LAMP, BOAT, COASTER } = G;
const TOP = ISLAND.top;

/** 정적 그림에 쓰는 순간(초). 화면 스크립트가 켜지면 이어서 움직인다 */
const T0 = 2.5;

/* ---------- 출력 도우미 — 그린 범위도 함께 잰다 ---------- */

const fmt = G.fmt;

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
    faces.forEach((f) => {
      f.pts2.forEach((p) => this.ext(p));
      this.parts.push(`<polygon class="${f.cls}"${attrs} points="${G.pointsAttr(f.pts2)}"/>`);
    });
    return this;
  }

  flat(points3, cls) {
    const pts2 = points3.map(G.project);
    pts2.forEach((p) => this.ext(p));
    this.parts.push(`<polygon class="${cls}" points="${G.pointsAttr(pts2)}"/>`);
    return this;
  }

  line(a, b, cls, width) {
    const p = G.project(a);
    const q = G.project(b);
    this.ext(p);
    this.ext(q);
    this.parts.push(`<line class="${cls}" x1="${fmt(p[0])}" y1="${fmt(p[1])}" x2="${fmt(q[0])}" y2="${fmt(q[1])}" stroke-width="${width}"/>`);
    return this;
  }

  polyline(points3, cls, width) {
    const pts2 = points3.map(G.project);
    pts2.forEach((p) => this.ext(p));
    this.parts.push(`<polyline class="${cls}" stroke-width="${width}" points="${G.pointsAttr(pts2)}"/>`);
    return this;
  }

  circle(p3, r, cls) {
    const p = G.project(p3);
    this.ext([p[0] - r, p[1] - r]);
    this.ext([p[0] + r, p[1] + r]);
    this.parts.push(`<circle class="${cls}" cx="${fmt(p[0])}" cy="${fmt(p[1])}" r="${r}"/>`);
    return this;
  }

  raw(s) {
    this.parts.push(s);
    return this;
  }

  add(other) {
    this.parts.push(other.toString());
    this.ext([other.box[0], other.box[1]]);
    this.ext([other.box[2], other.box[3]]);
    return this;
  }

  toString() {
    return this.parts.join('');
  }
}

/** 바닥에 누운 원(그림자·불빛 웅덩이·광장) */
function disk(cx, y, cz, r, segs = 20) {
  const out = [];
  for (let k = 0; k < segs; k += 1) {
    const a = (k / segs) * TAU;
    out.push([cx + Math.cos(a) * r, y, cz + Math.sin(a) * r]);
  }
  return out;
}

/** 밤 불빛 웅덩이 — 두 겹으로 겹쳐 가운데가 더 밝다(그라데이션 대신) */
function glowPool(out, x, y, z, r) {
  out.flat(disk(x, y, z, r, 24), 'glow');
  out.flat(disk(x, y, z, r * 0.55, 20), 'glow');
}

/** 움직이는 상자 자리 — 면 3개를 미리 만들어 두고 화면 스크립트가 points 와 class 만 바꾼다 */
function dynBox(out, faces) {
  for (let i = 0; i < 3; i += 1) {
    const f = faces[i];
    if (f) out.polys([f]);
    else out.raw('<polygon points=""/>');
  }
}

/* ---------- 섬 ---------- */

const radii = (() => {
  const rand = G.seeded(7);
  return Array.from({ length: ISLAND.points }, () => 1 + (rand() * 2 - 1) * 0.09);
})();

function ring(scale, y) {
  const n = radii.length;
  return radii.map((k, i) => {
    const a = (i / n) * TAU;
    return [Math.cos(a) * ISLAND.rx * k * scale, y, Math.sin(a) * ISLAND.rz * k * scale];
  });
}

const sea = new Out();
const shore = new Out();
const island = new Out();
const ground = new Out();

shore.flat(ring(1.55, 0), 'sea-mid');
shore.flat(ring(1.32, 0), 'sea-shallow');
// 밤에 불빛이 물에 비친 짧은 선 — 낮에는 보이지 않는다(3D 판의 "가까운 바다가 불빛으로 밝아진다"와 같은 뜻)
(() => {
  const rand = G.seeded(5);
  [
    [1.6, 15.4, 1.2, 7],
    [13.4, 1.0, 2.6, 9],
    [-12.0, 1.4, 1.6, 6],
  ].forEach(([x, z, spread, count]) => {
    for (let k = 0; k < count; k += 1) {
      const gx = x + (rand() * 2 - 1) * spread;
      const gz = z + (rand() * 2 - 1) * spread;
      const len = 0.35 + rand() * 0.5;
      shore.line([gx, 0, gz], [gx + len, 0, gz], 'glint', 1.6);
    }
  });
})();

const rings = [ring(1, TOP), ring(1.07, 0.5), ring(1.17, 0.3), ring(1.25, 0)];
const stripFaces = [];
for (let s = 0; s < rings.length - 1; s += 1) {
  const inner = rings[s];
  const outer = rings[s + 1];
  for (let i = 0; i < inner.length; i += 1) {
    const j = (i + 1) % inner.length;
    stripFaces.push(G.face([inner[i], inner[j], outer[j], outer[i]], 'sand', [0, -20, 0]));
  }
}
island.polys(G.sortFaces(stripFaces));
island.flat(rings[0], 'm-grass-t');

/* ---------- 길·광장·그림자 ---------- */

const pathSegments = [
  [PLAZA, { x: 1.6, z: 9.2 }],
  [PLAZA, { x: -0.6, z: -1.2 }],
  [PLAZA, { x: 4.4, z: 0.6 }],
  [PLAZA, { x: LIGHTHOUSE.x + 0.9, z: LIGHTHOUSE.z }],
  [PLAZA, CAFE],
];

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const distToSegment = (px, pz, a, b) => {
  const vx = b.x - a.x;
  const vz = b.z - a.z;
  const t = clamp(((px - a.x) * vx + (pz - a.z) * vz) / (vx * vx + vz * vz), 0, 1);
  return Math.hypot(px - (a.x + vx * t), pz - (a.z + vz * t));
};

const DECAL = TOP + 0.01;
pathSegments.forEach(([a, b0]) => {
  // 섬 가장자리 밖으로 나가는 길 끝은 덮개 안에서 멈춘다
  const b = { x: b0.x, z: b0.z };
  while (!G.isOnIsland(b.x, b.z, 0.97)) {
    b.x = a.x + (b.x - a.x) * 0.98;
    b.z = a.z + (b.z - a.z) * 0.98;
  }
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const len = Math.hypot(dx, dz);
  const nx = (-dz / len) * 0.45;
  const nz = (dx / len) * 0.45;
  ground.flat(
    [
      [a.x + nx, DECAL, a.z + nz],
      [b.x + nx, DECAL, b.z + nz],
      [b.x - nx, DECAL, b.z - nz],
      [a.x - nx, DECAL, a.z - nz],
    ],
    'm-path-t',
  );
});
ground.flat(G.ringPoints(PLAZA.x, DECAL + 0.005, PLAZA.z, 3.0, 12, 0), 'm-path-t');
[
  [PLAZA.x, PLAZA.z, 2.5],
  [BOOTH.x, BOOTH.z, 0.9],
  [CAFE.x, CAFE.z, 1.2],
  [LIGHTHOUSE.x, LIGHTHOUSE.z, 1.0],
].forEach(([x, z, r]) => ground.flat(disk(x, DECAL + 0.01, z, r), 'shadow'));
// 밤에 광장이 회전목마 불빛으로 밝아진다
glowPool(ground, PLAZA.x, DECAL + 0.01, PLAZA.z, 3.4);

/* ---------- 물결 무늬 ---------- */

(() => {
  const rand = G.seeded(11);
  for (let k = 0; k < 600 && sea.parts.length < 70; k += 1) {
    const x = (rand() * 2 - 1) * 42;
    const z = (rand() * 2 - 1) * 42;
    const len = 0.5 + rand() * 0.6;
    if (G.isOnIsland(x, z, 1.75) || G.isOnIsland(x - 11, z, 0.9)) continue;
    sea.line([x, 0, z], [x + len, 0, z], 'wave', 1.4);
  }
})();

/* ---------- 놓이는 것들 — 앞뒤 순서로 정렬해 그린다 ---------- */

const objects = [];
const landmarkBox = {};
const keyOf = (x, z) => x + z;

/* 나무 — 3D 판과 같은 씨앗·같은 막힘 규칙 */
(() => {
  const rand = G.seeded(21);
  const spots = [];
  const blocked = (x, z) => {
    if (!G.isOnIsland(x, z, 0.88)) return true;
    if (Math.hypot(x - PLAZA.x, z - PLAZA.z) < 3.6) return true;
    if (Math.hypot(x - HILL.x, z - HILL.z) < 3.9) return true;
    if (Math.hypot(x - LIGHTHOUSE.x, z - LIGHTHOUSE.z) < 1.9) return true;
    if (x > 3.3 && Math.abs(z) < 5.4) return true;
    if (Math.hypot(x - BOOTH.x, z - BOOTH.z) < 1.4) return true;
    if (Math.hypot(x - CAFE.x, z - CAFE.z) < 1.7) return true;
    if (pathSegments.some(([a, b]) => distToSegment(x, z, a, b) < 0.9)) return true;
    return spots.some((s) => Math.hypot(x - s.x, z - s.z) < 1.4);
  };
  for (let tries = 0; tries < 900 && spots.length < 30; tries += 1) {
    const x = (rand() * 2 - 1) * ISLAND.rx;
    const z = (rand() * 2 - 1) * ISLAND.rz;
    if (!blocked(x, z)) spots.push({ x, z, s: 0.75 + rand() * 0.45, r: rand() * TAU });
  }
  spots.forEach((s) => {
    const o = new Out();
    o.flat(disk(s.x + 0.12, DECAL + 0.01, s.z - 0.08, 0.62 * s.s, 12), 'shadow');
    o.polys(G.frustum(s.x, s.z, TOP, TOP + 0.5 * s.s, 0.13 * s.s, 0.11 * s.s, 5, s.r, 'rock'));
    o.polys(G.cone(s.x, s.z, TOP + 0.5 * s.s, TOP + 2.0 * s.s, 0.6 * s.s, 6, s.r, 'tree'));
    objects.push({ key: keyOf(s.x, s.z), out: o });
  });
})();

/* 매표소·카페 — 밤에는 창에 불이 켜진다 */
function windowQuad(center, ax, az, normal, x0, x1, y0, y1, depthOff) {
  const p = (lx, ly) => [center[0] + ax[0] * lx + az[0] * depthOff, ly, center[2] + ax[2] * lx + az[2] * depthOff];
  return G.face([p(x0, y0), p(x1, y0), p(x1, y1), p(x0, y1)], 'window', null, normal);
}

(() => {
  const o = new Out();
  o.polys(G.box(BOOTH.x, TOP + 0.45, BOOTH.z, 1.0, 0.9, 1.0, 0, 'white'));
  o.polys([windowQuad([BOOTH.x, 0, BOOTH.z], [1, 0, 0], [0, 0, 1], [0, 0, 1], -0.22, 0.22, TOP + 0.35, TOP + 0.68, 0.505)].filter(Boolean));
  o.polys(G.cone(BOOTH.x, BOOTH.z, TOP + 0.9, TOP + 1.5, 0.85, 4, Math.PI / 4, 'red'));
  objects.push({ key: keyOf(BOOTH.x, BOOTH.z), out: o });
})();

(() => {
  const r = 0.4;
  const ax = [Math.cos(r), 0, -Math.sin(r)];
  const az = [Math.sin(r), 0, Math.cos(r)];
  const o = new Out();
  o.polys(G.box(CAFE.x, TOP + 0.5, CAFE.z, 1.6, 1.0, 1.2, r, 'white'));
  const c = [CAFE.x, 0, CAFE.z];
  o.polys(
    [
      windowQuad(c, ax, az, az, -0.62, -0.18, TOP + 0.42, TOP + 0.76, 0.605),
      windowQuad(c, ax, az, az, 0.08, 0.52, TOP + 0.42, TOP + 0.76, 0.605),
    ].filter(Boolean),
  );
  o.polys(G.cone(CAFE.x, CAFE.z, TOP + 1.0, TOP + 1.7, 1.25, 4, Math.PI / 4 + r, 'red'));
  objects.push({ key: keyOf(CAFE.x, CAFE.z), out: o });
})();

/* 회전목마 — 말은 뒤쪽 반원 · 가운데 기둥 · 앞쪽 반원 순서로 그린다 */
(() => {
  const { x, z, y } = CAROUSEL;
  const o = new Out();
  o.polys(G.frustum(x, z, y, y + 0.25, 2.05, 2.0, 16, 0, 'white'));
  o.flat(disk(x, y + 0.26, z, 1.85, 20), 'glow');
  const horses = G.carouselHorses(T0);
  const horseOut = (h, i) => {
    const g = new Out();
    g.raw(`<g data-horse="${i}">`);
    const [a, b] = h.pole;
    g.ext(a);
    g.ext(b);
    g.raw(`<line class="s-white" x1="${fmt(a[0])}" y1="${fmt(a[1])}" x2="${fmt(b[0])}" y2="${fmt(b[1])}" stroke-width="1"/>`);
    dynBox(g, h.faces);
    g.raw('</g>');
    return g;
  };
  o.raw('<g data-horses="back">');
  horses.forEach((h, i) => !h.front && o.add(horseOut(h, i)));
  o.raw('</g>');
  o.polys(G.frustum(x, z, y, y + 2.3, 0.16, 0.16, 8, 0, 'white'));
  o.raw('<g data-horses="front">');
  horses.forEach((h, i) => h.front && o.add(horseOut(h, i)));
  o.raw('</g>');
  o.polys(G.frustum(x, z, y + 2.25, y + 2.47, 2.3, 2.3, 14, 0, 'white'));
  o.polys(G.cone(x, z, y + 2.47, y + 3.47, 2.4, 14, 0, 'red'));
  o.circle([x, y + 3.55, z], 3, 'm-red-t');
  for (let i = 0; i < 18; i += 1) {
    const a = (i / 18) * TAU;
    const p = [x + Math.cos(a) * 2.33, y + 2.25, z + Math.sin(a) * 2.33];
    if ((p[0] - x) * G.VIEW[0] + (p[2] - z) * G.VIEW[2] > -0.6) o.circle(p, 1.6, 'bulb');
  }
  objects.push({ key: keyOf(x, z), out: o, landmark: 'carousel' });
})();

/* 언덕과 대관람차 — 뒤 다리 · 뒤 바퀴 · 칸 · 앞 바퀴 · 앞 다리 */
(() => {
  const hill = new Out();
  hill.polys(G.frustum(HILL.x, HILL.z, TOP, HILL_TOP, 3.6, 1.9, 9, 0.3, 'grass'));
  hill.flat(disk(HILL.x, HILL_TOP + 0.01, HILL.z, 2.0), 'shadow');
  glowPool(hill, HILL.x, HILL_TOP + 0.02, HILL.z + 0.6, 2.4);
  objects.push({ key: keyOf(HILL.x, HILL.z), out: hill });

  const { hub, R, half, u, w } = FERRIS;
  const base = [HILL.x, HILL_TOP, HILL.z];
  const local = (lx, ly, lz) => [base[0] + u[0] * lx + w[0] * lz, base[1] + ly, base[2] + u[2] * lx + w[2] * lz];
  const legs = (sz) => {
    const g = new Out();
    [-1, 1].forEach((sx) => g.line(local(sx * 1.7, 0, sz * 0.75), local(0, 3.7, sz * half), 's-white', 3));
    return g;
  };
  const rim = (sz) => {
    const g = new Out();
    const c = G.project(local(0, 3.7, sz * half));
    const a = (u[0] - u[2]) * UNIT;
    const b = ((u[0] + u[2]) * UNIT) / 2;
    const r3 = (v) => Math.round(v * 1000) / 1000;
    const m = `matrix(${r3(a)} ${r3(b)} 0 ${r3(G.RISE)} ${fmt(c[0])} ${fmt(c[1])})`;
    // 바퀴는 바퀴 평면의 좌표(세계 1 = 1)로 그린다. 선 굵기도 세계 단위다
    g.raw(`<g data-ferris-rim transform="${m}"><g data-spin transform="rotate(${fmt((-G.ferrisAngle(T0) * 180) / Math.PI)})">`);
    g.raw(`<circle class="s-red" r="${R}" stroke-width="0.16"/>`);
    for (let i = 0; i < 8; i += 1) {
      const t = (i / 8) * TAU;
      g.raw(`<line class="s-white" x2="${r3(Math.cos(t) * R)}" y2="${r3(-Math.sin(t) * R)}" stroke-width="0.07"/>`);
    }
    for (let i = 0; i < 24; i += 1) {
      const t = (i / 24) * TAU;
      g.raw(`<circle class="bulb" cx="${r3(Math.cos(t) * R)}" cy="${r3(-Math.sin(t) * R)}" r="0.09"/>`);
    }
    g.raw('</g>');
    if (sz > 0) g.raw('<circle class="m-white-m" r="0.16"/>');
    g.raw('</g>');
    // 바퀴가 차지하는 범위(돌아도 같은 원)
    [0, 1, 2, 3].forEach((k) => {
      const t = (k / 4) * TAU;
      g.ext(G.project(add3(hub, add3(scale3(u, Math.cos(t) * R), [0, Math.sin(t) * R, 0]))));
    });
    return g;
  };
  const o = new Out();
  o.add(legs(-1));
  o.add(rim(-1));
  o.line(add3(hub, scale3(w, -half - 0.15)), add3(hub, scale3(w, half + 0.15)), 's-white', 4);
  o.raw('<g data-cabins>');
  G.ferrisCabins(T0).forEach((faces) => {
    o.raw('<g data-cabin>');
    dynBox(o, faces);
    o.raw('</g>');
  });
  o.raw('</g>');
  o.add(rim(1));
  o.add(legs(1));
  objects.push({ key: keyOf(HILL.x, HILL.z) + 0.01, out: o, landmark: 'ferris' });
})();

function add3(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function scale3(a, k) {
  return [a[0] * k, a[1] * k, a[2] * k];
}

/* 등대 전망대 — 바위 · 탑 · 돌아가는 불빛 */
(() => {
  const { x, z } = LIGHTHOUSE;
  const parts = [];
  [
    [-1.6, -0.6, 0.8, 1.1, 0.4],
    [-1.3, -0.5, -1.0, 0.8, 1.3],
    [-2.3, -0.8, -0.2, 0.9, 2.1],
    [-0.6, -0.4, 1.6, 0.6, 0.9],
  ].forEach(([lx, ly, lz, s, rot]) => {
    const cy = TOP + ly;
    const g = new Out();
    g.polys(G.frustum(x + lx, z + lz, Math.max(0, cy - s * 0.55), cy + s * 0.75, s, s * 0.55, 5, rot, 'rock'));
    parts.push({ key: keyOf(x + lx, z + lz), out: g });
  });
  const tower = new Out();
  const segH = 0.9;
  for (let i = 0; i < 4; i += 1) {
    const rb = 0.72 + (0.48 - 0.72) * (i / 4);
    const rt = 0.72 + (0.48 - 0.72) * ((i + 1) / 4);
    tower.polys(G.frustum(x, z, TOP + segH * i, TOP + segH * (i + 1), rb, rt, 10, 0, i % 2 ? 'red' : 'white'));
  }
  tower.polys(G.frustum(x, z, TOP + 3.6, TOP + 3.72, 0.72, 0.72, 10, 0, 'white'));
  tower.polys(G.frustum(x, z, TOP + 3.725, TOP + 4.275, 0.4, 0.4, 10, 0, 'lamp'));
  tower.polys(G.cone(x, z, TOP + 4.27, TOP + 4.77, 0.56, 10, 0, 'red'));
  tower.circle(LAMP, 14, 'glow-dot');
  tower.raw('<g data-beam>');
  G.lighthouseBeams(T0).forEach(([far, near]) => {
    tower.raw(`<polygon class="beam-far" points="${G.pointsAttr(far)}"/>`);
    tower.raw(`<polygon class="beam-near" points="${G.pointsAttr(near)}"/>`);
  });
  tower.raw('</g>');
  parts.push({ key: keyOf(x, z), out: tower });
  parts.sort((a, b) => a.key - b.key);
  const o = new Out();
  parts.forEach((p) => o.add(p.out));
  objects.push({ key: keyOf(x, z), out: o, landmark: 'lighthouse' });
})();

/* 선착장 — 기둥 · 판자길 · 가로등 */
(() => {
  const o = new Out();
  for (let z = 9.4; z <= 14.7; z += 1.3) {
    [-0.55, 0.55].forEach((dx) => o.line([1.6 + dx, 0, z], [1.6 + dx, 0.5, z], 's-rock', 2.4));
  }
  o.polys(G.box(1.6, 0.55, 11.9, 1.3, 0.14, 5.8, 0, 'white'));
  [1.0, 2.2].forEach((x) => {
    o.line([x, 0.6, 14.6], [x, 1.7, 14.6], 's-white', 1.6);
    o.circle([x, 1.78, 14.6], 8, 'glow-dot');
    o.circle([x, 1.78, 14.6], 3, 'bulb');
  });
  objects.push({ key: keyOf(1.6, 11.9), out: o, landmark: 'pier' });
})();

/* 배 — 물결에 흔들린다(화면 스크립트가 위아래로 옮긴다) */
(() => {
  const r = BOAT.rot;
  const at = (lx, ly, lz) => [BOAT.x + lx * Math.cos(r) + lz * Math.sin(r), ly, BOAT.z - lx * Math.sin(r) + lz * Math.cos(r)];
  const o = new Out();
  const dy = G.boatOffset(T0);
  o.raw(`<g data-boat transform="translate(0 ${fmt(dy)})">`);
  o.polys(G.box(BOAT.x, 0.2, BOAT.z, 1.1, 0.4, 3.0, r, 'white'));
  o.polys(G.box(BOAT.x, 0.3, BOAT.z, 1.12, 0.12, 3.02, r, 'red'));
  const c = at(0, 0.65, 0.3);
  o.polys(G.box(c[0], c[1], c[2], 0.8, 0.5, 1.0, r, 'white'));
  const roof = at(0, 0.94, 0.3);
  o.polys(G.box(roof[0], roof[1], roof[2], 0.9, 0.08, 1.1, r, 'red'));
  o.raw('</g>');
  objects.push({ key: keyOf(BOAT.x, BOAT.z), out: o, landmark: 'pier' });
})();

/* 롤러코스터 — 궤도를 조각으로 나눠 앞뒤를 정렬한다. 차량은 지금 달리는 조각 안에 둔다 */
(() => {
  const n = COASTER.samples;
  const samples = [];
  for (let i = 0; i <= n; i += 1) {
    const u = (i % n) / n;
    const p = G.coasterCurve.pointAt(u);
    const tan = G.coasterCurve.tangentAt(u);
    const side = norm3([tan[1] * 0 - tan[2] * 1, tan[2] * 0 - tan[0] * 0, tan[0] * 1 - tan[1] * 0]);
    samples.push({ p, side });
  }
  const cars = G.coasterCars(T0);
  for (let c = 0; c * COASTER.chunk < n; c += 1) {
    const from = c * COASTER.chunk;
    const to = Math.min(n, from + COASTER.chunk);
    const o = new Out();
    o.raw(`<g data-chunk="${c}">`);
    let kx = 0;
    let kz = 0;
    for (let i = from; i < to; i += 1) {
      const { p } = samples[i];
      kx += p[0];
      kz += p[2];
      if (i % 9 === 0) {
        const groundY = G.isOnIsland(p[0], p[2], 1.04) ? TOP : 0;
        o.line([p[0], groundY, p[2]], [p[0], p[1] - 0.06, p[2]], 's-white', 2.2);
      }
    }
    for (let i = from; i < to; i += 1) {
      if (i % 2) continue;
      const { p, side } = samples[i];
      o.line(add3(p, scale3(side, 0.33)), add3(p, scale3(side, -0.33)), 's-white', 2.2);
    }
    [0.27, -0.27].forEach((s) => {
      const pts = [];
      for (let i = from; i <= to; i += 1) pts.push(add3(samples[i].p, scale3(samples[i].side, s)));
      o.polyline(pts, 's-red', 2.6);
    });
    for (let i = from; i < to; i += 1) {
      if (i % 6) continue;
      const { p, side } = samples[i];
      [0.36, -0.36].forEach((s) => o.circle(add3(add3(p, scale3(side, s)), [0, 0.05, 0]), 1.6, 'bulb'));
    }
    cars.forEach((car, i) => {
      if (car.chunk !== c) return;
      const g = new Out();
      g.raw(`<g data-car="${i}">`);
      dynBox(g, car.body);
      dynBox(g, car.seat);
      g.raw('</g>');
      o.add(g);
    });
    o.raw('</g>');
    const count = to - from;
    objects.push({ key: keyOf(kx / count, kz / count), out: o, landmark: 'coaster' });
  }
})();

function norm3(a) {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}

/* ---------- 모으기 ---------- */

objects.sort((a, b) => a.key - b.key);
const objectsOut = new Out();
objects.forEach((o) => {
  objectsOut.add(o.out);
  if (o.landmark) {
    const box = landmarkBox[o.landmark] || [Infinity, Infinity, -Infinity, -Infinity];
    box[0] = Math.min(box[0], o.out.box[0]);
    box[1] = Math.min(box[1], o.out.box[1]);
    box[2] = Math.max(box[2], o.out.box[2]);
    box[3] = Math.max(box[3], o.out.box[3]);
    landmarkBox[o.landmark] = box;
  }
});

const all = new Out();
all.add(island);
all.add(objectsOut);
const bounds = all.box.map((v) => Math.round(v));

// 등대 불빛 줄기는 명소 범위에 넣지 않는다(돌면서 길이가 바뀐다). 탑 주변만 쓴다
const lampP = G.project(LAMP);
landmarkBox.lighthouse = [lampP[0] - 70, lampP[1] - 20, lampP[0] + 70, G.project([LIGHTHOUSE.x, TOP, LIGHTHOUSE.z])[1] + 40];

const data = {
  bounds,
  landmarks: Object.fromEntries(
    Object.entries(G.LANDMARK_ANCHOR).map(([id, p]) => [
      id,
      { anchor: G.project(p).map((v) => Math.round(v * 10) / 10), box: landmarkBox[id].map((v) => Math.round(v)) },
    ]),
  ),
  t0: T0,
};

const pad = 0.1;
const vbW = bounds[2] - bounds[0];
const vbH = bounds[3] - bounds[1];
const viewBox = [bounds[0] - vbW * pad, bounds[1] - vbH * pad, vbW * (1 + pad * 2), vbH * (1 + pad * 2)].map((v) => Math.round(v)).join(' ');

const svg =
  `<svg class="iso" id="iso" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" stroke-width="0.6" role="img" aria-label="바다 위 섬 하나에 선착장, 회전목마, 대관람차, 롤러코스터, 등대 전망대가 있는 그림" focusable="false">` +
  `<g class="iso__sea" data-waves>${sea}</g>` +
  `<g class="iso__shore">${shore}</g>` +
  `<g class="iso__island">${island}${ground}</g>` +
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
const elements = (svg.match(/<(polygon|line|polyline|circle)\b/g) || []).length;
console.log(`그림 요소 ${elements}개 · ${(svg.length / 1024).toFixed(1)}KB · 범위 ${bounds.join(' ')}`);
