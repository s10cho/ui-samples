/*
 * JS 토큰 — 설계서 3절(폭 구간)·3-1절(장면)·4-1절(장면 색)·4-2절(예산).
 * UI 색·간격·시간은 css/tokens.css 에 있고, JS 는 그 값을 getComputedStyle 로 읽는다.
 * 여기에는 CSS 가 갖지 않는 값(3D 재질·빛 색, 장면 크기, 놀이기구 주기)만 둔다.
 */

/** 폭 경계(CSS px). css/style.css 의 @media 조건과 같은 값이어야 한다. */
export const BREAKPOINT = {
  medium: 600,
  wide: 1024,
};

/** 3D 장면 색 — 설계서 4-1절 장면 색 표 */
export const SCENE_COLOR = {
  day: {
    sky: 0xcfe6f2,
    seaDeep: 0x2f6f96,
    seaShallow: 0x4f9cbf,
    keyLight: 0xfff4e0, // 햇빛
  },
  night: {
    sky: 0x18263d,
    seaDeep: 0x13304a,
    seaShallow: 0x1e4560,
    keyLight: 0x9db4d6, // 달빛
  },
  sand: 0xe6d5ae,
  grass: 0x86ae5c,
  tree: 0x5e8f48,
  rock: 0x8c8f8a,
  structure: 0xf4f2ee,
  accent: 0xc43d22,
  bulb: 0xffc46b,
  beam: 0xffe3a3,
  shadow: 0x000000,
};

/** 빛 세기 — 낮(0)과 밤(1) 사이를 보간한다 */
export const SCENE_LIGHT = {
  day: { hemi: 1.9, key: 2.6, bulb: 0, point: 0, beam: 0.05, seaGlow: 0 },
  night: { hemi: 0.55, key: 0.55, bulb: 1.6, point: 26, beam: 0.3, seaGlow: 0.32 },
};

/** 놀이기구 한 바퀴에 걸리는 시간(초) — 설계서 3-1절 */
export const RIDE_PERIOD = {
  wave: 4,
  ferris: 40,
  carousel: 20,
  coaster: 12,
  beam: 8,
  autoRotate: 90,
};

/** 시점 제한 — 설계서 3-2절 */
export const CAMERA = {
  fov: 35,
  elevationMin: 15,
  elevationMax: 70,
  startElevation: 35,
  startAzimuth: 35, // 남동쪽에서 본다(0 = 남쪽, 양수 = 동쪽으로)
  stepRotate: 30,
  stepZoom: 0.75,
  fitRadius: 13.2, // 처음 시점에서 화면에 담는 섬 반지름
  fitShare: 0.66, // 처음 시점에서 섬이 장면 폭(또는 높이)에서 차지하는 비율
  minDistance: 12,
  maxDistanceFactor: 1.6, // 처음 거리 대비 가장 먼 거리
};

/**
 * 포스터 이미지(설계서 4-2절) — 폭 구간마다 한 장. 캔버스 크기와, 섬 배율을 정하는 기준 장면 크기.
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
  seaSegmentsHigh: 56,
  seaSegmentsLow: 36,
  shadowMapSize: 1024,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
