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

/** 3D 장면 색 — 설계서 4-1절 장면 색 표. [해 질 녘, 밤] 쌍은 시간대에 따라 섞는다 */
export const SCENE_COLOR = {
  dusk: {
    sky: 0xe9c2a3,
    riverDeep: 0x4f6b86,
    riverShallow: 0x6f87a0,
    keyLight: 0xffb37a, // 서쪽 낮은 해
    hemiSky: 0xa7afc4, // 그늘을 푸르게 — 주황 햇빛과 대비
    ground: 0x6b5e57, // 하늘빛의 아래쪽 색
  },
  night: {
    sky: 0x141c2e,
    riverDeep: 0x0f1a2a,
    riverShallow: 0x18283d,
    keyLight: 0x8ea3c8, // 달빛
    hemiSky: 0x8ea3c8,
    ground: 0x1d2433,
  },
  pavement: 0xbdb4a6,
  road: 0x6f6a66,
  grass: 0x7c9b57,
  tree: 0x557a43,
  trunk: 0x6e5a48,
  stone: 0x9c958b, // 둑·기찻길 자갈
  roofs: [0x8a5d4b, 0x5f6672], // 강 남쪽 옛 시가지 지붕 — 벽돌색·석판색
  walls: [0xd8c8b2, 0xc9b49c, 0xb9bec2, 0xcdbfae],
  structure: 0xeeeae3,
  accent: 0xa84a1a,
  carBody: [0xeeeae3, 0x5d6679, 0xa84a1a, 0x8c8f8a, 0x3c4350],
  carGlass: 0x2b3240,
  window: {
    early: [0xe2a468, 0xffc873], // 해 질 녘에 먼저 켜진 창
    late: [0x5d6679, 0xffc873], // 밤에 켜지는 창
    off: [0x4a5262, 0x1d2535], // 꺼진 창
  },
  instanceBase: 0xffffff, // 물체마다 색을 따로 주는 재질의 바탕(instanceColor 를 곱한다)
  windowTints: [0xffffff, 0xfff4e2, 0xffe9c6, 0xfffaf0], // 켜진 창마다 조금씩 다른 불빛
  bulb: 0xffc46b,
  headlight: [0x9c978c, 0xfff1d2],
  taillight: [0x6a3326, 0xe04a2e],
  beacon: 0xff6a4d,
  clockFace: 0xf7f3ea,
  clockGlow: 0xfff1d2,
  fountain: 0xbfd9e8, // 분수 물줄기
  shadow: 0x000000,
};

/** 빛 세기 — 해 질 녘(0)과 밤(1) 사이를 보간한다 */
export const SCENE_LIGHT = {
  dusk: { hemi: 1.5, key: 2.4, bulb: 0, point: 0, pool: 0, riverGlow: 0, beacon: 0.45, clock: 0, fountain: 0 },
  night: { hemi: 0.5, key: 0.5, bulb: 1.7, point: 9, pool: 0.5, riverGlow: 0.34, beacon: 1, clock: 0.9, fountain: 0.45 },
};

/** 움직임 주기(초) — 설계서 3-1절 */
export const PERIOD = {
  wave: 4,
  boat: 45,
  car: 34, // 차 한 대가 길 끝에서 끝까지
  fountain: 3,
  beacon: 2.4,
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
  fitRadius: 14.6, // 처음 시점에서 화면에 담는 블록 반지름
  fitShare: 0.66, // 처음 시점에서 블록이 장면 폭에서 차지하는 비율
  fitLift: 7.5, // 세로 맞춤에 더하는 높이 — 전망 타워
  fitHeightShare: 0.86,
  minDistance: 12,
  maxDistanceFactor: 1.6, // 처음 거리 대비 가장 먼 거리
};

/**
 * 포스터 이미지(설계서 4절) — 폭 구간마다 한 장. 캔버스 크기와, 블록 배율을 정하는 기준 장면 크기.
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
  riverSegmentsHigh: [96, 8],
  riverSegmentsLow: [56, 5],
  fillerRadiusHigh: 46, // 블록 밖 건물을 두는 반지름
  fillerRadiusLow: 32,
  shadowMapSize: 1024,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
