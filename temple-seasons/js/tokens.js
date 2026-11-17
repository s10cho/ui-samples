/*
 * JS 토큰 — 설계서 3절(폭 구간)·3-1절(장면)·3-2절(시점)·4-1절(장면 색)·4-2절(예산).
 * UI 색·간격·시간은 css/tokens.css 에 있고, JS 는 그 값을 getComputedStyle 로 읽는다.
 * 여기에는 CSS 가 갖지 않는 값(3D 재질·빛 색, 장면 배치, 움직임 주기)만 둔다.
 */

/** 폭 경계(CSS px). css/style.css 의 @media 조건과 같은 값이어야 한다. */
export const BREAKPOINT = {
  medium: 600,
  wide: 1024,
};

/** 계절 순서와 기본값 — 설계서 3-1절, 열린 질문 4번 */
export const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
export const DEFAULT_SEASON = 'autumn';

/**
 * 계절마다 바뀌는 장면 값 — 설계서 4-1절 장면 색 표.
 * ground·forest·field·path·valley·rock 은 지형 삼각형 종류별 색이다.
 * leaves 는 활엽수 잎 색 후보(나무마다 하나를 고른다), leafScale 은 잎 덩어리 크기.
 * particles 는 입자 종류별 투명도(petal·leaf·snow).
 */
export const SEASON = {
  spring: {
    sky: 0xd3e2ea,
    key: 0xfff2e4,
    keyIntensity: 2.15,
    hemi: 1.35,
    shadow: 0.85,
    fogNear: 40,
    fogFar: 240,
    ground: 0xa3c27f,
    forest: 0x86a867,
    field: 0x9fc0a0,
    path: 0xcbb894,
    valley: 0xa3c27f, // 풀밭과 같은 색 — 지형 끝과 바닥 평면의 경계가 보이지 않게
    rock: 0x7a7b78,
    tile: 0x4b545c,
    thatch: 0xb49a6a,
    pineCap: 0x2e5a45,
    water: 0x7fa9b8,
    leaves: [0xf2b8c6, 0xf6ccd6, 0x9cc46e, 0xb5d58a],
    leafScale: 0.95,
    lotus: 0.35,
    ripple: 1,
    particles: { petal: 0.95, leaf: 0, snow: 0 },
  },
  summer: {
    sky: 0xa9cfe8,
    key: 0xfff8ec,
    keyIntensity: 2.6,
    hemi: 1.1,
    shadow: 1,
    fogNear: 50,
    fogFar: 280,
    ground: 0x5f8f4b,
    forest: 0x4e7a3e,
    field: 0x79a452,
    path: 0xc4b08a,
    valley: 0x5f8f4b, // 풀밭과 같은 색 — 지형 끝과 바닥 평면의 경계가 보이지 않게
    rock: 0x7a7b78,
    tile: 0x4b545c,
    thatch: 0xb49a6a,
    pineCap: 0x2e5a45,
    water: 0x5e8fa0,
    leaves: [0x3e6e3a, 0x4c7d3f, 0x2f5e35, 0x467a3b],
    leafScale: 1.1,
    lotus: 1,
    ripple: 1,
    particles: { petal: 0, leaf: 0, snow: 0 },
  },
  autumn: {
    sky: 0xc5d8e4,
    key: 0xffe2c0,
    keyIntensity: 2.3,
    hemi: 1.2,
    shadow: 1,
    fogNear: 40,
    fogFar: 250,
    ground: 0xa49a6c,
    forest: 0x8c7b56,
    field: 0xd5b85c,
    path: 0xd2c6a6,
    valley: 0xa49a6c, // 풀밭과 같은 색 — 지형 끝과 바닥 평면의 경계가 보이지 않게
    rock: 0x7a7b78,
    tile: 0x4b545c,
    thatch: 0xb49a6a,
    pineCap: 0x2e5a45,
    water: 0x6f95a3,
    leaves: [0xc8432b, 0xd9772e, 0xe3b23c, 0xb5532d],
    leafScale: 1,
    lotus: 0.45,
    ripple: 1,
    particles: { petal: 0, leaf: 0.95, snow: 0 },
  },
  winter: {
    sky: 0xc9d0d9,
    key: 0xdde5ef,
    keyIntensity: 1.1,
    hemi: 2.35,
    shadow: 0.4,
    fogNear: 10,
    fogFar: 170,
    ground: 0xe9eef3,
    forest: 0xdce3e8,
    field: 0xe9eef3,
    path: 0xe2e7ec,
    valley: 0xe9eef3, // 풀밭과 같은 색 — 지형 끝과 바닥 평면의 경계가 보이지 않게
    rock: 0x858a8f,
    tile: 0xe6ecf1,
    thatch: 0xe6ecf1,
    pineCap: 0xf2f5f8,
    water: 0xdce6ec,
    leaves: [0xa39a90, 0x9a9187, 0xaba398, 0x958c82],
    leafScale: 0.62,
    lotus: 0,
    ripple: 0,
    particles: { petal: 0, leaf: 0, snow: 0.95 },
  },
};

/** 재질 색 — 계절과 상관없이 같다(설계서 4-1절 재질 표) */
export const SCENE_COLOR = {
  pillar: 0xa63a2b, // 기둥·문틀(단청 붉은색) — UI 강조와 같은 색
  band: 0x3e6b5e, // 처마 밑 띠(단청 초록)
  plaster: 0xefe9de, // 흰 벽
  timber: 0xb98b5e, // 나무 문살
  granite: 0xb5b0a6, // 석탑·축대·돌다리·계단
  ridge: 0x3b434a, // 용마루
  bell: 0x6f5a3c,
  trunk: 0x6b5442,
  pine: 0x2e5a45,
  farPeak: 0x9fb0bb, // 먼 산(안개가 덮는다)
  pondBed: 0x5d6f62,
  lotus: 0x4f7f3a,
  bird: 0x2f3640,
  smoke: 0xe5e2dc,
  ripple: 0xffffff,
  petal: [0xf7c9d4, 0xfbe3e9, 0xf3b5c4],
  leaf: [0xc8432b, 0xd9772e, 0xe3b23c, 0xb5532d],
  snow: [0xffffff],
  shadow: 0x000000,
};

/**
 * 명소 자리 — 설계서 3-1절. 지형의 단 높이와 같다(높이 함수가 이 값으로 다진다).
 * base: 건물이 서는 높이, top: 표지를 다는 높이(건물 꼭대기 + 여유).
 * framing.js 는 three.js 와 지형 함수 없이 이 값만으로 처음 시점을 맞춘다.
 */
export const LANDMARK = {
  gate: { x: -2.5, z: 5.2, base: 1.0, top: 5.6 },
  hall: { x: 0, z: -9.8, base: 6.4, top: 13.6, priority: 1 }, // 가장 높은 명소 — 표지가 겹치면 먼저 자리를 받는다
  pagoda: { x: -4.2, z: -2.4, base: 4.6, top: 10.4 },
  pond: { x: 6.5, z: 11.5, base: 0.1, top: 3.4 },
  bell: { x: 7.6, z: -3.2, base: 4.6, top: 10.9 },
};

/** 단(평평하게 다진 자리) — 지형과 건물이 같이 쓴다 */
export const TERRACE = {
  yard: { x: 1, z: -2.5, rx: 9.6, rz: 4.0, y: 4.6 }, // 앞마당
  hall: { x: 0, z: -9.6, rx: 8.2, rz: 3.0, y: 6.4 }, // 본당 단
  gate: { x: -2.5, z: 5.4, rx: 4.6, rz: 1.4, y: 1.0 }, // 산문 앞
  village: 0.32, // 마을 평지
};

/** 맞춤에 쓰는 마을 끝 점(x, y, z) — 명소와 함께 처음 시점 안에 넣는다 */
export const FIT_EXTRA = [
  [-12.5, 1.6, 13.0],
  [13.0, 1.6, 15.0],
]

/** 움직임 주기(초) — 설계서 3-1·3-2절 */
export const MOTION_PERIOD = {
  sway: 60, // 자동으로 둘러보기 한 번 오가는 시간
  smoke: 7, // 연기 한 덩이가 오르는 시간
  ripple: 4.2, // 물결 하나가 번지는 시간
  bird: 18, // 새가 한 바퀴 도는 시간(평균)
};

/** 시점 — 설계서 3-2절. 카메라 자리는 화면 크기와 상관없이 같다 */
export const CAMERA = {
  fov: 35,
  elevationMin: 12,
  elevationMax: 65,
  startElevation: 21,
  startAzimuth: 20, // 남남동쪽에서 본다(0 = 남쪽, 양수 = 동쪽으로)
  homeDistance: 100,
  homeTarget: [0, 9.0, -9.8], // 본당 위 — 자동으로 둘러볼 때 본당 표지가 움직이지 않는다
  swayDegrees: 18,
  stepRotate: 30,
  stepZoom: 0.75,
  fitShare: 0.62, // 맞춤 영역에서 명소·마을 묶음이 차지하는 비율 — 남는 자리로 뒷산·하늘·마을이 보인다
  fitShareMax: 0.92, // 좁은 장면에서 묶음이 커질 수 있는 한도(맞춤 영역 대비)
  fitMinSceneShare: 0.45, // 좁은 장면에서도 묶음 높이를 장면 높이의 이만큼까지는 키운다(맞춤 영역 안에서)
  closestSpan: 9.2, // 가장 가까이에서 본당(화면 세로로 보이는 크기)이 장면 높이의 절반
  maxDistanceFactor: 1.6,
  groundClearance: 1.2,
};

/**
 * 포스터(설계서 4-2절) — 폭 구간마다 1장. 카메라 자리는 3D와 같다.
 * K: 카메라 앞 거리 1 평면에서 1 이 차지하는 px(배율). ax·ay: 회전 중심(본당 위)이 그려지는 자리(캔버스 폭·높이 비율).
 * 그 폭의 흔한 화면 크기(넓은 폭 1024×768~1920×1200, 중간 폭 400~1023, 좁은 폭 320~599, 글자 200% 포함)를 덮도록 정했다.
 * 그보다 크거나 아주 납작한 창(예: 1366×600)은 덮지 못해 가득 채우기(cover)로 둔다. 첫 방문 전송량 예산(300KB) 때문이다.
 * quality 는 그 폭의 기본 품질이다(넓은 폭 high, 좁은·중간 폭 low).
 */
export const POSTER = {
  wide: { width: 1430, height: 858, K: 1300, ax: 0.718, ay: 0.409, quality: 'high' },
  medium: { width: 1134, height: 804, K: 1100, ax: 0.583, ay: 0.479, quality: 'low' },
  narrow: { width: 740, height: 1210, K: 1000, ax: 0.622, ay: 0.512, quality: 'low' },
};

/** 성능 예산 — 설계서 4-2절 */
export const QUALITY = {
  pixelRatioHigh: 2,
  pixelRatioLow: 1.5,
  terrainSegmentsHigh: 88,
  terrainSegmentsLow: 56,
  particles: {
    petal: { high: 1400, low: 500 },
    leaf: { high: 800, low: 300 },
    snow: { high: 2400, low: 900 },
  },
  particleMaxPx: 7, // 카메라 가까이 온 입자가 커다란 점으로 보이지 않게 막는 최대 크기(CSS px)
  shadowMapSize: 2048,
  slowFrameMs: 33,
  sampleWindowMs: 2000,
  warmupMs: 1200,
};
