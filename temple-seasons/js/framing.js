/*
 * 처음 시점의 맞춤 계산 — 3D 장면(js/scene/scene.js)과 포스터 배치(js/main.js)가 같이 쓴다.
 * three.js 없이 돈다.
 *
 * 카메라 자리(방향·거리·중심점)는 화면 크기와 상관없이 하나다(설계서 3-2절).
 * 화면 크기에 맞추는 일은 시야 배율(camera.zoom)과 시야 이동(setViewOffset)으로만 한다.
 * 그래서 포스터는 3D 첫 프레임을 늘리고 옮긴 그림과 같고, 원근이 어긋나지 않는다(STA-03).
 *
 * 좌표: u·v 는 카메라 앞 거리 1 인 평면 위 좌표(오른쪽·위가 +). 화면 px = 중심 px + u·K, py = 중심 py − v·K.
 */
import { CAMERA, FIT_EXTRA, LANDMARK, POSTER } from './tokens.js';

const DEG = Math.PI / 180;
const TAN_V = Math.tan((CAMERA.fov / 2) * DEG);

/** 처음 시점 카메라의 위치와 축(오른쪽·위·앞) */
function homeBasis() {
  const az = CAMERA.startAzimuth * DEG;
  const el = CAMERA.startElevation * DEG;
  const [tx, ty, tz] = CAMERA.homeTarget;
  const back = [Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)];
  const pos = [tx + back[0] * CAMERA.homeDistance, ty + back[1] * CAMERA.homeDistance, tz + back[2] * CAMERA.homeDistance];
  const f = [-back[0], -back[1], -back[2]];
  const rl = Math.hypot(f[2], f[0]);
  const r = [-f[2] / rl, 0, f[0] / rl];
  const up = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
  return { pos, f, r, up };
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/** 맞춤에 넣는 점: 명소마다 바닥과 표지 자리, 마을 끝 */
function fitPoints() {
  const points = [];
  Object.values(LANDMARK).forEach((l) => {
    points.push([l.x, l.base, l.z], [l.x, l.top, l.z]);
  });
  return points.concat(FIT_EXTRA);
}

/** 처음 시점에서 명소·마을 묶음이 차지하는 u·v 범위 */
const BOX = (() => {
  const { pos, f, r, up } = homeBasis();
  let u0 = Infinity;
  let u1 = -Infinity;
  let v0 = Infinity;
  let v1 = -Infinity;
  fitPoints().forEach((p) => {
    const d = [p[0] - pos[0], p[1] - pos[1], p[2] - pos[2]];
    const depth = dot(d, f);
    const u = dot(d, r) / depth;
    const v = dot(d, up) / depth;
    u0 = Math.min(u0, u);
    u1 = Math.max(u1, u);
    v0 = Math.min(v0, v);
    v1 = Math.max(v1, v);
  });
  return { u0, u1, v0, v1, cu: (u0 + u1) / 2, cv: (v0 + v1) / 2, w: u1 - u0, h: v1 - v0 };
})();

/**
 * 실시간 장면의 처음 시점. frame = { inset, top, bottom } — 맞춤 영역(px).
 * inset: 왼쪽에서 정보 패널이 가린 폭. top·bottom: 장면 토글 아래 끝 + 표지 높이 ~ 시점 버튼 위 끝.
 * 돌려주는 것: K(u 1 이 차지하는 px), 중심점이 그려지는 px(cx, cy), 카메라 zoom 과 시야 이동(ox, oy).
 */
export function liveView(width, height, frame = {}) {
  const inset = Math.min(frame.inset || 0, width * 0.6);
  const top = Math.max(0, frame.top ?? 0);
  const bottom = Math.min(height, frame.bottom ?? height);
  const usableW = Math.max(1, width - inset);
  // 버튼 묶음이 장면을 많이 덮어 영역이 작아도 그 영역 안에 맞춘다 — 명소가 버튼 아래로 들어가지 않는다
  const usableH = Math.max(40, bottom - top);
  const midY = (top + bottom) / 2;
  // 묶음은 맞춤 영역의 fitShare 를 차지한다. 버튼이 장면을 많이 덮는 좁은 장면에서는
  // 장면 높이의 fitMinSceneShare 까지(맞춤 영역의 fitShareMax 안에서) 키워 명소가 너무 작아지지 않게 한다
  const share = (len, scene) =>
    Math.max(CAMERA.fitShare * len, Math.min(CAMERA.fitShareMax * len, CAMERA.fitMinSceneShare * scene));
  const K = Math.min(share(usableW, width) / BOX.w, share(usableH, height) / BOX.h);
  const cx = inset + usableW / 2 - K * BOX.cu;
  const cy = midY + K * BOX.cv;
  // 명소를 고르면 회전 중심을 맞춤 영역 가운데로 옮긴다(시야 이동만 바꾼다)
  const centerX = inset + usableW / 2;
  return {
    K,
    cx,
    cy,
    zoom: (K * TAN_V) / (height / 2),
    ox: width / 2 - cx,
    oy: height / 2 - cy,
    focusOx: width / 2 - centerX,
    focusOy: height / 2 - midY,
  };
}

/** 포스터를 찍을 때의 시점 — 배율 K 로, 회전 중심을 캔버스의 (ax, ay) 자리에 */
export function posterView(size) {
  const p = POSTER[size];
  const cx = p.ax * p.width;
  const cy = p.ay * p.height;
  const ox = p.width / 2 - cx;
  const oy = p.height / 2 - cy;
  return { K: p.K, cx, cy, zoom: (p.K * TAN_V) / (p.height / 2), ox, oy, focusOx: ox, focusOy: oy };
}

/**
 * 포스터를 장면 위에 놓을 자리(px). 같은 카메라 자리에서 찍었으므로 늘리고 옮기기만 하면 3D 첫 프레임과 겹친다.
 * 포스터가 장면을 다 덮지 못하면 null 을 돌려준다(그때는 CSS 의 object-fit: cover 로 둔다).
 */
export function posterPlacement(size, width, height, frame) {
  const p = POSTER[size];
  const live = liveView(width, height, frame);
  const shot = posterView(size);
  const scale = live.K / shot.K;
  const left = live.cx - shot.cx * scale;
  const top = live.cy - shot.cy * scale;
  const w = p.width * scale;
  const h = p.height * scale;
  const covers = left <= 0.5 && top <= 0.5 && left + w >= width - 0.5 && top + h >= height - 0.5;
  return covers ? { left, top, width: w, height: h } : null;
}

/** 가장 가까운 거리 — 본당이 장면 높이의 절반이 되는 거리(설계서 3-2절). zoom 이 크면 그만큼 멀어진다 */
export function closestDistance(zoom) {
  return (CAMERA.closestSpan * zoom) / TAN_V;
}
