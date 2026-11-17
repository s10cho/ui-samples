/*
 * 화면 설정 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 * 동작은 공용 뼈대(js/shell/app.js, 저장소의 shared/scene3d/)가 맡는다. 여기에는 이 화면의 값과 맞춤 영역 계산만 둔다.
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=hall          명소 하나를 고른 상태 (gate · hall · pagoda · pond · bell)
 *   ?season=spring        그 계절로 시작 (spring · summer · autumn · winter, 기본은 autumn)
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=<계절>        포스터 이미지 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, DEFAULT_SEASON, POSTER, SEASONS } from './tokens.js';
import { posterPlacement } from './framing.js';
import { cssVar, root } from './shell/core.js';
import { startSceneApp } from './shell/app.js';

const LANDMARK_NAMES = '산문, 본당, 석탑, 연못과 돌다리, 종각이 있는 3D 장면';

/**
 * 처음 시점을 맞출 영역(장면 좌표 px) — 설계서 3-2절 "맞춤 영역".
 * 위: 장면 토글 묶음의 실제 아래 끝 + 표지 높이(누르는 영역. 글자를 키우면 같이 커진다)
 * 아래: 시점 버튼 묶음의 실제 위 끝. 묶음이 두 줄이 되거나 글자를 키워도 명소가 버튼에 깔리지 않는다.
 * 토글·버튼은 숨겨도 자리를 지키므로(visibility) 로딩·실패·멈춤에서도 같은 영역이 나온다.
 */
function frameBox({ els, insetLeft }) {
  const base = els.scene.getBoundingClientRect();
  const gap = parseFloat(getComputedStyle(els.toggles).top) || 0;
  // 표지 알약의 윗변은 표지 자리에서 누르는 영역 높이의 약 0.8 만큼 위에 있다(css .marker)
  const touch = parseFloat(cssVar('--ds-size-touch')) * parseFloat(getComputedStyle(root).fontSize) * 0.8;
  const toggles = els.toggles.getBoundingClientRect();
  const controls = els.controls.getBoundingClientRect();
  const top = toggles.height ? toggles.bottom - base.top + touch : 0;
  const bottom = controls.height ? controls.top - base.top - gap : base.height;
  return { inset: insetLeft(), top, bottom };
}

startSceneApp({
  name: 'templeSeasons',
  breakpoint: BREAKPOINT,
  posterSizes: POSTER,
  placePoster: posterPlacement,
  frame: { option: 'getFrame', measure: frameBox, watchButtons: true },
  // 계절은 라디오 묶음(input[name="season"]) — 고른 계절을 주소에 남긴다(PLT-WEB-10)
  variant: {
    key: 'season',
    values: SEASONS,
    default: DEFAULT_SEASON,
    inUrl: true,
    strictPoster: true,
    alt: {
      spring: `봄, 꽃이 핀 산 중턱의 오래된 절과 그 아래 마을. ${LANDMARK_NAMES}`,
      summer: `여름, 짙은 초록 숲에 둘러싸인 산 중턱의 오래된 절과 그 아래 마을. ${LANDMARK_NAMES}`,
      autumn: `가을, 단풍이 든 산 중턱의 오래된 절과 그 아래 마을. ${LANDMARK_NAMES}`,
      winter: `겨울, 눈 덮인 산 중턱의 오래된 절과 그 아래 마을. ${LANDMARK_NAMES}`,
    },
  },
  copy: { progress: '산사를 그리는 중이에요' },
  loadScene: () => import('./scene/scene.js'),
});
