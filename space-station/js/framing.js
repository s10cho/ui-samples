/*
 * 처음 시점의 맞춤 계산 — 3D 장면(js/scene/scene.js)과 포스터 배치(js/main.js)가 같이 쓴다.
 * three.js 없이 돈다. 3D를 받기 전에 포스터를 3D 첫 화면과 같은 배율·중심에 놓으려면
 * 둘이 같은 식을 써야 한다(설계서 3-2절 화면 비율 맞춤, 5절 초기 로딩, STA-03).
 *
 * 카메라 위치는 폭 구간(넓은·중간·좁은)마다 하나로 고정한다(classDistance).
 * 화면 비율·빈 자리 크기가 달라 생기는 차이는 카메라를 움직이지 않고 렌즈 배율(zoom)로만 맞춘다.
 * 그래서 같은 폭 구간 안에서는 원근이 늘 같고, 같은 위치에서 찍은 포스터와 3D 첫 화면이 겹친다.
 *
 * 빈 자리 = 장면에서 정보 패널(넓은 폭 왼쪽)·장면 토글 묶음(위)·시점 버튼 묶음(아래)을 뺀 영역.
 */
import { CAMERA, POSTER } from './tokens.js';

const DEG = Math.PI / 180;
const TAN_V = Math.tan((CAMERA.fov / 2) * DEG);

/** 빈 자리 폭·높이(px)에 정거장을 맞추는 실효 거리(렌즈 배율 1 일 때의 카메라 거리) */
export function fitDistance(width, height) {
  const w = Math.max(1, width);
  const h = Math.max(1, height);
  const tanH = TAN_V * (w / h);
  const dH = CAMERA.fitRadius / (CAMERA.fitShare * tanH);
  // 정거장 둘레가 화면에서 차지하는 높이 + 위로 솟은 안테나·실험 상자 몫
  const vertical = CAMERA.fitRadius * Math.sin(CAMERA.startElevation * DEG) + CAMERA.fitLift;
  const dV = vertical / (CAMERA.fitHeightShare * TAN_V);
  return Math.max(dH, dV);
}

/** 폭 구간의 카메라 거리 — 포스터를 찍은 거리와 같다 */
export function classDistance(size) {
  const p = POSTER[size];
  return fitDistance(p.refWidth, p.refHeight);
}


/** 중심점 깊이에서 세계 1단위가 화면에 차지하는 px(실효 거리 기준) */
function pxPerUnit(height, effectiveDistance) {
  return height / 2 / TAN_V / effectiveDistance;
}

/** 빈 자리의 크기와 가운데(장면 왼쪽 위 기준 px) */
export function freeArea(sceneWidth, sceneHeight, insets) {
  const { left = 0, top = 0, bottom = 0 } = insets || {};
  const width = Math.max(1, sceneWidth - left);
  const height = Math.max(1, sceneHeight - top - bottom);
  return { width, height, cx: left + width / 2, cy: top + height / 2 };
}

/**
 * 장면 캔버스 기준 실효 거리. 빈 자리(free)에 맞춘 거리를 캔버스 높이로 옮긴다:
 * 캔버스 높이 H 에서 1단위 px = H / (2·tan·실효 거리) 가 빈 자리 높이 h 에서의 값과 같아야 한다.
 */
export function effectiveDistance(sceneWidth, sceneHeight, insets) {
  const free = freeArea(sceneWidth, sceneHeight, insets);
  return fitDistance(free.width, free.height) * (Math.max(1, sceneHeight) / free.height);
}

/** 렌즈 배율 — 카메라 거리는 폭 구간마다 고정이고, 빈 자리에 정거장이 맞도록 배율만 바꾼다 */
export function lensZoom(size, sceneWidth, sceneHeight, insets) {
  return classDistance(size) / effectiveDistance(sceneWidth, sceneHeight, insets);
}

/**
 * 포스터를 장면 위에 놓을 자리(px). 포스터 가운데 = 3D 중심점이 그려지는 자리(빈 자리 가운데).
 * 포스터가 장면을 다 덮지 못하면 null 을 돌려준다(그때는 CSS 의 object-fit: cover 로 둔다).
 */
export function posterPlacement(size, sceneWidth, sceneHeight, insets) {
  const p = POSTER[size];
  const free = freeArea(sceneWidth, sceneHeight, insets);
  // 3D의 1단위 px: 장면 높이 × 렌즈 배율 / (2·tan·카메라 거리) = 장면 높이 / (2·tan·실효 거리)
  const live = pxPerUnit(sceneHeight, effectiveDistance(sceneWidth, sceneHeight, insets));
  const ref = pxPerUnit(p.refHeight, classDistance(size));
  const scale = live / ref;
  const width = p.width * scale;
  const height = p.height * scale;
  const left = free.cx - width / 2;
  const top = free.cy - height / 2;
  const covers = left <= 0 && top <= 0 && left + width >= sceneWidth && top + height >= sceneHeight;
  return covers ? { left, top, width, height } : null;
}
