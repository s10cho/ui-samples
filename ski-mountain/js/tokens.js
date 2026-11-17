/*
 * JS 토큰 — 설계서 3절(폭 구간)·3-1절(장면)·4-1절(장면 색)·4-2절(예산).
 * UI 색·간격·시간은 css/tokens.css 에 있고, JS 는 그 값을 getComputedStyle 로 읽는다.
 * 여기에는 CSS 가 갖지 않는 값(3D 재질·빛 색, 장면 크기, 움직임 주기)만 둔다.
 */

/** 폭 경계(CSS px). css/style.css 의 @media 조건과 같은 값이어야 한다. */
export const BREAKPOINT = {
  medium: 600,
  wide: 1024,
};

/** 날씨마다 바뀌는 장면 색 — 설계서 4-1절 장면 색 표 */
export const WEATHER_COLOR = {
  clear: {
    sky: 0xbfd9ec,
    keyLight: 0xfff3e2, // 해
  },
  snow: {
    sky: 0xc6cfd9,
    keyLight: 0xdce4ee, // 흐린 날 빛
  },
};

/** 재질 색 — 날씨와 상관없이 같다 */
export const SCENE_COLOR = {
  snowCover: 0xe8eef4, // 눈
  groomed: 0xf8fafc, // 다진 눈(슬로프·광장)
  rock: 0x6e747c,
  forestFloor: 0x9db2a6, // 나무 선 아래 숲 바닥
  valley: 0xe3eaf0, // 골짜기 바닥
  farPeak: 0xd5dee6, // 먼 산
  tree: 0x2e5a45,
  treeSnow: 0xf2f5f8,
  structure: 0xf2f4f6,
  accent: 0xb8431e,
  wood: 0x7a5235,
  jacketDark: 0x26364d,
  flake: 0xffffff,
  shadow: 0x000000,
};

/** 빛 세기·안개 거리·눈 입자 — 맑음(0)과 눈 내림(1) 사이를 보간한다 */
export const WEATHER_LIGHT = {
  clear: { hemi: 1.15, key: 2.3, shadow: 1, fogNear: 40, fogFar: 260, flakes: 0 },
  snow: { hemi: 2.5, key: 1.0, shadow: 0.35, fogNear: 6, fogFar: 150, flakes: 0.95 },
};

/** 움직임 주기(초) — 설계서 3-1절 */
export const MOTION_PERIOD = {
  lift: 60, // 리프트 의자 한 바퀴
  easyRun: 22, // 초급 슬로프를 한 번 내려오는 시간
  expertRun: 11, // 상급 슬로프를 한 번 내려오는 시간
  autoRotate: 90, // 처음 들어왔을 때 자동 회전 한 바퀴
};

/** 시점 제한 — 설계서 3-2절 */
export const CAMERA = {
  fov: 35,
  elevationMin: 12,
  elevationMax: 65,
  startElevation: 24,
  startAzimuth: 20, // 남남동쪽에서 본다(0 = 남쪽, 양수 = 동쪽으로)
  stepRotate: 30,
  stepZoom: 0.75,
  fitRadius: 18.5, // 처음 시점에서 화면에 담는 산 반지름
  fitHeight: 4, // 처음 시점에서 위아래로 더 담는 높이(산이 세로로 솟은 만큼)
  fitShare: 0.66, // 처음 시점에서 산이 장면 폭(또는 높이)에서 차지하는 비율
  minDistance: 10,
  maxDistanceFactor: 1.6, // 처음 거리 대비 가장 먼 거리
  groundClearance: 1.2, // 카메라가 지형 아래로 들어가지 않게 두는 높이
};

/**
 * 포스터 이미지(설계서 4절) — 폭 구간마다 한 장. 캔버스 크기와, 산 배율을 정하는 기준 장면 크기.
 * 3D 첫 화면과 같은 배율·중심에 놓아도 장면을 다 덮도록 캔버스에 여백을 넉넉히 둔다.
 * refWidth 는 정보 패널이 가린 폭을 뺀 값이다(넓은 폭 1440 - 384).
 */
export const POSTER = {
  wide: { width: 2400, height: 1400, refWidth: 1056, refHeight: 810 },
  medium: { width: 2000, height: 1120, refWidth: 1000, refHeight: 800 },
  narrow: { width: 900, height: 1170, refWidth: 600, refHeight: 780 },
};

/** 성능 예산 — 설계서 4-2절 */
export const QUALITY = {
  pixelRatioHigh: 2,
  pixelRatioLow: 1.5,
  terrainSegmentsHigh: 88,
  terrainSegmentsLow: 60,
  flakesHigh: 2400,
  flakesLow: 900,
  flakeMaxPx: 7, // 카메라 가까이 온 눈 입자가 커다란 점으로 보이지 않게 막는 최대 크기(CSS px)
  shadowMapSize: 2048,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
