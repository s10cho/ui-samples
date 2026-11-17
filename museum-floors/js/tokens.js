/*
 * JS 토큰 — 설계서 3절(폭 구간)·3-1절(장면)·3-2절(시점)·4-1절(장면 색)·4-2절(예산).
 * UI 색·간격·시간은 css/tokens.css 에 있고, JS 는 그 값을 getComputedStyle 로 읽는다.
 * 여기에는 CSS 가 갖지 않는 값(3D 재질·빛 색, 건물 크기, 움직임 주기)만 둔다.
 */

/** 폭 경계(CSS px). css/style.css 의 @media 조건과 같은 값이어야 한다. */
export const BREAKPOINT = {
  medium: 600,
  wide: 1024,
};

/** 3D 장면 색 — 설계서 4-1절 장면 색 표 */
export const SCENE_COLOR = {
  bg: 0xdedbd4, // 바탕. css/tokens.css 의 --ds-color-scene-bg 와 같아야 한다(포스터 가장자리가 이어진다)
  plaza: 0xcfcac0,
  plazaPath: 0xc3bdb1,
  slabTop: 0xf3f1ec,
  slabSide: 0xa9a397,
  wall: 0xf7f5f1,
  wallTop: 0xdcd8cf, // 잘린 벽 윗면 — 벽 두께가 읽히게
  partition: 0xe9e6e0,
  glass: 0x8e9aa0, // 쌓아 보기 때 바깥벽 창 띠
  room: {
    lobby: 0xe9e3d7,
    shop: 0xe3e6da,
    kids: 0xe8ddd2,
    life: 0xe6ddcb,
    pottery: 0xdce2e2,
    media: 0xd9dbe0,
    paintings: 0xe4ded3,
    special: 0xdde2da,
    garden: 0xb9c8a0,
    cafe: 0xe6dccd,
  },
  roomSelected: 0xcfe3d8,
  accent: 0x2e6a4f, // UI 강조색과 같다 — 고른 전시실 테두리
  hall: 0xeceae5, // 뒤쪽 복도 바닥
  stairs: 0xc8c2b6,
  restroom: 0xd6dce0,
  shaft: 0x8c928f,
  car: 0x3f4744,
  carFront: 0x6d7773,
  door: 0x5b625f,
  caseGlass: 0xc9d6d8,
  plinth: 0xe9e6e0,
  ink: 0x4f5753, // 진한 물건(조각·계산대 윗면)
  wood: 0xa8875f,
  frame: 0x6b5b4a,
  art: [0xb5833f, 0x6f8b9c, 0x9c5f4e, 0x7e8f6a],
  pot: [0x9c6b4e, 0x6f8b9c, 0xd7cdb8, 0x7a6a58],
  blocks: [0xc98f5a, 0x7f9fb2, 0xb7a35a, 0x8fa37a],
  screen: 0x39413e,
  leaf: 0x6e8f5a,
  trunk: 0x7a644c,
  here: 0x1c2321, // "지금 여기" 원판·기둥
  visitors: [0x4e6177, 0x8a6a55, 0x5f7a5c, 0x9a7b4f, 0x6b6e72],
  instanceBase: 0xffffff,
};

/** 빛 — 설계서 4-1절. 그림자는 계산하지 않는다 */
export const SCENE_LIGHT = {
  hemiSky: 0xffffff,
  hemiGround: 0xb8b2a6,
  hemi: 1.9,
  key: 0xfff6ea,
  keyIntensity: 1.7,
  keyPosition: [-14, 30, 20],
};

/** 고르지 않은 층을 바탕색 쪽으로 섞는 정도(설계서 3-2절) */
export const FADE = 0.75;

/** 건물 크기 — 설계서 3-1·3-2절. 층 바닥은 가로 16 × 세로 10 */
export const BUILDING = {
  floors: 4,
  width: 16,
  depth: 10,
  slab: 0.3,
  wallLow: 0.9, // 잘린 바깥벽 · 칸막이 높이
  wallFull: 2.3, // 쌓아 보기 바깥벽 높이
  gap: { exploded: 6.5, stacked: 2.6 },
  lift: { exploded: 8, stacked: 14 }, // 층을 고르면 위층이 비켜 오르는 높이 — 고른 층을 가리지 않을 만큼
  coreZ: -2.4, // 이보다 북쪽(뒤)은 계단·엘리베이터·화장실 띠
  topContent: 2.6, // 4층 위로 솟은 것(정원 나무)
};

/** 움직임 주기(초) — 설계서 3-1절 */
export const PERIOD = {
  elevatorTravel: 3,
  elevatorDwell: 2,
  visitorSpeed: 0.6,
  visitorDwell: 1.6,
  autoRotate: 90,
};

/** 시점 — 설계서 3-2절. 각도는 도(°). 0 = 남쪽(입구 쪽)에서 본다, 양수 = 동쪽으로 */
export const CAMERA = {
  fov: 30,
  homeAzimuth: 30,
  homeElevation: 30,
  homeDistance: 70, // 처음 시점의 카메라 거리 — 화면 크기와 상관없이 하나
  fitRadius: 9.6, // 처음 시점 맞춤에 쓰는 원기둥 반지름(층 바닥 대각선의 절반 + 여유)
  labelLift: 1.2, // 맨 위 표지 알약이 들어갈 여유 높이
  homeShare: 0.96,
  floorView: { azimuth: 20, elevation: 55, share: 0.92 },
  roomView: { azimuth: 20, elevation: 50, shareW: 0.7, shareH: 0.5 },
  elevationMin: 15,
  elevationMax: 75,
  stepRotate: 30,
  stepZoom: 0.75,
  closestRoom: 5, // "가장 가까이": 가로 5 짜리 전시실이 빈 영역 높이의 절반을 넘지 않는다
  closestShare: 0.5,
  maxDistanceFactor: 1.5, // 처음 시점 거리 대비 가장 먼 거리
};

/**
 * 포스터 이미지(설계서 4절) — 처음 시점과 같은 카메라로, 중심점 둘레의 같은 시야 범위를 찍는다.
 * POSTER_WINDOW 는 중심점에서 본 시야 범위(카메라 방향 기준 tan 값). 폭 구간마다 해상도만 다르다.
 * k 는 시야 tan 1 당 포스터 픽셀 수. width = 2·tx·k, height = 2·ty·k 와 같아야 한다.
 */
export const POSTER_WINDOW = { tx: 0.27, ty: 0.28 };
export const POSTER = {
  wide: { k: 2400, width: 1296, height: 1344 },
  medium: { k: 1600, width: 864, height: 896 },
  narrow: { k: 1100, width: 594, height: 616 },
};

/** 성능 — 설계서 4-2절. 두 품질은 해상도 상한만 다르다(장면 모양이 같아 포스터와 첫 프레임이 같다) */
export const QUALITY = {
  pixelRatioHigh: 2,
  pixelRatioLow: 1.5,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
