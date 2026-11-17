/*
 * JS 토큰 — 설계서 3절(폭 구간)·3-1절(장면)·3-2절(시점)·4-1절(장면 색)·4-2절(예산).
 * UI 색·간격·시간은 css/tokens.css 에 있고, JS 는 그 값을 getComputedStyle 로 읽는다.
 * 여기에는 CSS 가 갖지 않는 값(3D 재질·빛 색, 장면 크기, 움직임 주기)만 둔다.
 */

/** 폭 경계(CSS px). css/style.css 의 @media 조건과 같은 값이어야 한다. */
export const BREAKPOINT = {
  medium: 600,
  wide: 1024,
};

/** 3D 장면 색 — 설계서 4-1절 장면 색 표. [낮 쪽, 밤 쪽] 쌍은 지구 쪽에 따라 섞는다 */
export const SCENE_COLOR = {
  space: 0x0a0f1c,
  ocean: [
    [0x2f6390, 0x0c1628],
    [0x3d79a6, 0x0f1a2e],
  ],
  land: [
    [0x6e8c55, 0x141e2e],
    [0x8c8a5e, 0x162033],
    [0xa39570, 0x18233a],
  ],
  cloud: [0xeef2f6, 0x2a3446],
  atmosphere: [0x9cc3e6, 0x22385a],
  cityLight: 0xffc46b,
  hull: 0xe6e2d8, // 흰 단열 천
  node: 0xc9cdd3,
  box: 0x8e949c,
  frame: 0x6b7280, // 뼈대·도킹 목
  gold: 0xb8924f, // 금빛 단열 띠 · 전지판 틀
  cell: [0x3e5f8c, 0x141d30],
  glass: [0x34496a, 0xffc873],
  dockLamp: [0x5f6672, 0xffe2a8],
  navRed: 0xe0533d,
  navGreen: 0x5dbb7a,
  stars: [0xffffff, 0xfff4e2, 0xe2eaff],
  keyLight: [0xfff1dc, 0x8ea3c8], // 해 · 달빛
  hemiSky: [0x2a3550, 0x141c2e], // 위(우주)에서 오는 빛
  hemiGround: [0x6f93bc, 0x24324d], // 아래(지구)에서 올라오는 빛
  workLight: 0xffd9a0,
  freighter: 0xd8d4cc,
};

/** 빛 세기·투명도 — 낮 쪽(0)과 밤 쪽(1) 사이를 보간한다 */
export const SCENE_LIGHT = {
  day: { hemi: 1.35, key: 2.5, glow: 0, work: 0, stars: 0.45, cloud: 0.92, atmosphere: 0.38, city: 0, nav: 0.55 },
  night: { hemi: 1.0, key: 0.8, glow: 1, work: 14, stars: 1, cloud: 0.55, atmosphere: 0.45, city: 1, nav: 1 },
};

/** 움직임 주기(초) — 설계서 3-1절 */
export const PERIOD = {
  earth: 3600, // 지구 한 바퀴
  cloud: 1500, // 구름 층 한 바퀴
  panel: 40, // 전지판 각도 한 번 오가기
  freighter: 60, // 화물선 다가오기 · 머물기 · 물러나기 한 바퀴
  nav: 2.4, // 위치 표시등 밝기
  autoRotate: 90,
};

/** 지구 — 설계서 4-2절. 반지름, 정거장 아래 높이, 만드는 윗부분 범위(도) */
export const EARTH = {
  radius: 2000,
  altitude: 110,
  capDeg: 28, // 지구·구름 — 카메라가 가장 높이 올라가도 지평선(약 26°)보다 넓다
  atmosphereCapDeg: 36, // 대기 띠는 지평선 너머 뒷면을 그려야 해서 더 넓다
  detail: 84, // 정이십면체 큰 면 하나를 나누는 단계 — 윗부분에 걸치는 면만 나눈다
  cloudDetail: 120, // 구름 조각은 땅보다 작아 더 잘게 나눈 뒤 구름 면만 남긴다
  atmosphereDetail: 48, // 대기 띠는 지구 가장자리에서만 보여 성기게 만든다
  cloudLift: 7,
  atmosphereLift: 22,
};

/** 시점 제한 — 설계서 3-2절 */
export const CAMERA = {
  fov: 35,
  elevationMin: 8,
  elevationMax: 65,
  startElevation: 24,
  startAzimuth: 35, // 앞 오른쪽에서 본다(0 = 옆(+z), 양수 = 앞(+x)으로)
  stepRotate: 30,
  stepZoom: 0.75,
  fitRadius: 14.2, // 처음 시점에서 빈 자리에 담는 정거장 반지름(날개 끝까지)
  fitShare: 0.7, // 처음 시점에서 정거장이 빈 자리 폭에서 차지하는 비율
  fitLift: 3, // 세로 맞춤에 더하는 높이 — 안테나·실험 상자
  fitHeightShare: 0.86,
  minEffective: 19, // 가장 가까운 실효 거리(카메라 거리 ÷ 렌즈 배율) — 거주 모듈이 장면 높이의 절반을 넘지 않는다
  maxDistanceFactor: 1.6, // 처음 거리 대비 가장 먼 거리
};

/**
 * 포스터 이미지(설계서 4절) — 폭 구간마다 한 장. 캔버스 크기와, 정거장 배율·카메라 거리를 정하는 기준 빈 자리.
 * 기준 빈 자리 = 그 폭 구간의 대표 장면(넓은 1440×900, 중간 768×614, 좁은 375×487)에서
 * 정보 패널·장면 토글·시점 버튼 묶음을 뺀 영역의 비율. 캔버스는 3D 첫 화면과 같은 배율·중심에 놓아도
 * 장면을 다 덮도록 기준보다 넉넉히 크다. 넓힌 만큼은 카메라를 움직이지 않고 시야만 넓혀 찍는다.
 */
export const POSTER = {
  wide: { width: 2400, height: 1400, refWidth: 1056, refHeight: 748 },
  medium: { width: 2000, height: 1120, refWidth: 1000, refHeight: 633 },
  narrow: { width: 900, height: 1170, refWidth: 600, refHeight: 574 },
};

/** 성능 예산 — 설계서 4-2절 */
export const QUALITY = {
  pixelRatioHigh: 2,
  pixelRatioLow: 1.5,
  starsHigh: 1800,
  starsLow: 900,
  cityHigh: 2400,
  cityLow: 1200,
  starPx: 2, // 별 점 크기(기준 장면의 px)
  cityPx: 2,
  shadowMapSize: 1024,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
