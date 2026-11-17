/*
 * 시점 맞춤 계산 — 3D 장면(js/scene/scene.js)과 포스터 배치(js/main.js)가 같이 쓴다. three.js 없이 돈다.
 *
 * 설계서 3-2절: 처음 시점의 카메라 위치·거리는 화면 크기와 상관없이 하나다.
 * 화면 크기에 맞추는 일은 시야 배율(camera.zoom)과 시야 이동(setViewOffset)으로만 한다.
 * 같은 위치에서 찍은 그림은 확대·이동만으로 서로 겹치므로, 포스터와 3D 첫 프레임이 원근까지 같다(STA-03).
 *
 * 단위: "시야 tan" — 카메라 방향에서 본 기울기(가로 x/깊이, 세로 y/깊이).
 * k = 시야 tan 1 당 화면 px. 중심점은 늘 빈 영역 가운데에 그려진다.
 */
import { BUILDING, CAMERA, POSTER_WINDOW } from './tokens.js';

const DEG = Math.PI / 180;
export const TAN_HALF_FOV = Math.tan((CAMERA.fov / 2) * DEG);

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/** 방위·내려보는 각(라디안)에서 카메라 기준 축. b = 중심점에서 카메라 쪽, r = 화면 오른쪽, u = 화면 위 */
export function basis(az, el) {
  const ca = Math.cos(az);
  const sa = Math.sin(az);
  const ce = Math.cos(el);
  const se = Math.sin(el);
  return { b: [ce * sa, se, ce * ca], r: [ca, 0, -sa], u: [-se * sa, ce, -se * ca] };
}

/** 점들이 화면에서 차지하는 시야 tan 범위 */
function extents(points, target, B, distance) {
  const e = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
  points.forEach((p) => {
    const q = [p[0] - target[0], p[1] - target[1], p[2] - target[2]];
    const depth = distance - dot(q, B.b);
    const x = dot(q, B.r) / depth;
    const y = dot(q, B.u) / depth;
    e.minX = Math.min(e.minX, x);
    e.maxX = Math.max(e.maxX, x);
    e.minY = Math.min(e.minY, y);
    e.maxY = Math.max(e.maxY, y);
  });
  return e;
}

/** 원기둥 둘레의 점 — 처음 시점 맞춤은 원기둥으로 해서 자동 회전 중 어느 방위에서도 건물이 빈 영역 안에 있다 */
function cylinderPoints(radius, y0, y1, n = 32) {
  const out = [];
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    out.push([x, y0, z], [x, y1, z]);
  }
  return out;
}

/** 보는 방식별 건물 높이 범위(층 바닥 아래 ~ 맨 위 물체 + 표지 여유) */
export function buildingHeight(mode) {
  const top = (BUILDING.floors - 1) * BUILDING.gap[mode] + BUILDING.topContent + CAMERA.labelLift;
  return [-BUILDING.slab, top];
}

export function buildingPoints(mode) {
  const [y0, y1] = buildingHeight(mode);
  return cylinderPoints(CAMERA.fitRadius, y0, y1);
}

const HOME_AZ = CAMERA.homeAzimuth * DEG;
const HOME_EL = CAMERA.homeElevation * DEG;
const HOME_BASIS = basis(HOME_AZ, HOME_EL);

/**
 * 처음 시점의 중심점과 그때 건물의 반폭·반높이(시야 tan).
 * 중심점은 원기둥 축 위에 두고, 건물이 화면 위아래로 가운데 오게 높이만 맞춘다(회전해도 축이 안 움직인다).
 */
function homeFrame(mode, distance) {
  const points = buildingPoints(mode);
  const [y0, y1] = buildingHeight(mode);
  let ty = (y0 + y1) / 2;
  for (let i = 0; i < 8; i += 1) {
    const e = extents(points, [0, ty, 0], HOME_BASIS, distance);
    ty += (((e.minY + e.maxY) / 2) * distance) / Math.cos(HOME_EL);
  }
  const e = extents(points, [0, ty, 0], HOME_BASIS, distance);
  return { target: [0, ty, 0], hx: Math.max(-e.minX, e.maxX), hy: Math.max(-e.minY, e.maxY) };
}

/** 펼쳐 보기 처음 시점 — 포스터도 이 카메라로 찍는다 */
export const HOME = {
  azimuth: HOME_AZ,
  elevation: HOME_EL,
  distance: CAMERA.homeDistance,
  ...homeFrame('exploded', CAMERA.homeDistance),
};

/** 빈 영역(px)에 펼친 건물이 들어가는 배율 k */
export function homeScale(rect) {
  return Math.min(rect.width / 2 / HOME.hx, rect.height / 2 / HOME.hy) * CAMERA.homeShare;
}

/** k 를 three.js PerspectiveCamera.zoom 으로 바꾼다. height = 캔버스 높이(CSS px) */
export function zoomFor(k, height) {
  return (k * TAN_HALF_FOV) / (height / 2);
}

/**
 * 점들이 빈 영역의 halfW·halfH(px) 안에 들어가는 카메라 거리. 중심점은 빈 영역 가운데에 그려진다.
 * 깊이 = d − q·b 이므로 |q·r| / (d − q·b) ≤ halfW / k 를 d 에 대해 풀면 된다.
 */
export function fitDistance(points, target, az, el, k, halfW, halfH) {
  const B = basis(az, el);
  const ax = halfW / k;
  const ay = halfH / k;
  let d = 0;
  points.forEach((p) => {
    const q = [p[0] - target[0], p[1] - target[1], p[2] - target[2]];
    const back = dot(q, B.b);
    d = Math.max(d, Math.abs(dot(q, B.r)) / ax + back, Math.abs(dot(q, B.u)) / ay + back);
  });
  return d;
}

/** 쌓아 보기 처음 시점 — 펼쳐 보기와 같은 방향·배율에서 건물이 들어가는 거리 */
export function stackedHome(rect, k) {
  const frame = homeFrame('stacked', CAMERA.homeDistance);
  const halfW = (rect.width / 2) * CAMERA.homeShare;
  const halfH = (rect.height / 2) * CAMERA.homeShare;
  const distance = fitDistance(buildingPoints('stacked'), frame.target, HOME_AZ, HOME_EL, k, halfW, halfH);
  return { target: frame.target, distance };
}

/** 상자(가운데·크기)의 꼭짓점 8개 */
export function boxPoints([cx, cy, cz], [w, h, d]) {
  const out = [];
  [-1, 1].forEach((sx) =>
    [-1, 1].forEach((sy) => [-1, 1].forEach((sz) => out.push([cx + (sx * w) / 2, cy + (sy * h) / 2, cz + (sz * d) / 2]))),
  );
  return out;
}

/** "가장 가까이" 거리 — 가로 5 짜리 전시실이 빈 영역 높이의 절반을 넘지 않는다(설계서 3-2절) */
export function closestDistance(k, rect) {
  return (CAMERA.closestRoom * k) / (CAMERA.closestShare * rect.height);
}

/**
 * 포스터를 장면 위에 놓을 자리(px). 포스터는 처음 시점 카메라로 중심점 둘레 POSTER_WINDOW 범위를 찍었다.
 * 그래서 중심점이 그려지는 자리(빈 영역 가운데)에 포스터 가운데를 두고 k 배로 늘이면 3D 첫 프레임과 겹친다.
 * 포스터 밖은 장면 바탕색(포스터 가장자리와 같은 색)이다.
 */
export function posterPlacement(rect, k) {
  const width = 2 * POSTER_WINDOW.tx * k;
  const height = 2 * POSTER_WINDOW.ty * k;
  return { left: rect.cx - width / 2, top: rect.cy - height / 2, width, height };
}

/** 검수용 — 포스터 시야 범위가 마당과 건물을 다 담는지 */
export function homeExtentsOf(points) {
  return extents(points, HOME.target, HOME_BASIS, HOME.distance);
}
