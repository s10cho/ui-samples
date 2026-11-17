/*
 * 처음 시점의 맞춤 계산 — 3D 장면(js/scene/scene.js)과 포스터 배치(js/main.js)가 같이 쓴다.
 * three.js 없이 돈다. 3D를 받기 전에 포스터를 3D 첫 화면과 같은 배율·중심에 놓으려면
 * 둘이 같은 식을 써야 한다(설계서 5절 초기 로딩, STA-03).
 */
import { CAMERA, POSTER } from './tokens.js';

const DEG = Math.PI / 180;
const TAN_V = Math.tan((CAMERA.fov / 2) * DEG);

/** 장면 폭·높이(px)에서 처음 시점의 카메라 거리. 폭은 정보 패널이 가린 만큼 뺀 값을 넘긴다 */
export function fitDistance(width, height) {
  const tanH = TAN_V * (width / height);
  const dH = CAMERA.fitRadius / (CAMERA.fitShare * tanH);
  const vertical = CAMERA.fitRadius * Math.sin(CAMERA.startElevation * DEG) + 6;
  const dV = vertical / (0.86 * TAN_V);
  return Math.max(dH, dV);
}

/** 중심점 깊이에서 세계 1단위가 화면에 차지하는 px */
function pxPerUnit(height, distance) {
  return height / 2 / TAN_V / distance;
}

/** 포스터를 찍을 때의 카메라 거리 — 캔버스가 커도 섬 배율은 기준 장면과 같다 */
export function posterDistance(size) {
  const p = POSTER[size];
  return fitDistance(p.refWidth, p.refHeight) * (p.height / p.refHeight);
}

/**
 * 포스터를 장면 위에 놓을 자리(px). 포스터 가운데 = 3D 중심점이 그려지는 자리.
 * 포스터가 장면을 다 덮지 못하면 null 을 돌려준다(그때는 CSS 의 object-fit: cover 로 둔다).
 */
export function posterPlacement(size, sceneWidth, sceneHeight, inset) {
  const p = POSTER[size];
  const live = pxPerUnit(sceneHeight, fitDistance(sceneWidth - inset, sceneHeight));
  const ref = pxPerUnit(p.refHeight, fitDistance(p.refWidth, p.refHeight));
  const scale = live / ref;
  const width = p.width * scale;
  const height = p.height * scale;
  const left = (sceneWidth + inset) / 2 - width / 2;
  const top = sceneHeight / 2 - height / 2;
  const covers = left <= 0 && top <= 0 && left + width >= sceneWidth && top + height >= sceneHeight;
  return covers ? { left, top, width, height } : null;
}
