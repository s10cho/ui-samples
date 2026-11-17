/*
 * 화면 설정 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 * 동작은 공용 뼈대(js/shell/app.js, 저장소의 shared/scene3d/)가 맡는다. 여기에는 이 화면의 값과 빈 자리 계산만 둔다.
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=dock          명소 하나를 고른 상태 (habitat · lab · solar · dock · window)
 *   ?side=night           지구 밤 쪽 장면으로 시작(기본은 낮 쪽 day)
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=day|night     포스터 이미지 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { posterPlacement } from './framing.js';
import { startSceneApp } from './shell/app.js';

/**
 * 장면에서 정거장을 맞출 빈 자리를 뺀 나머지(px) — 설계서 3절 끝 "처음 시점의 빈 자리".
 * left: 넓은 폭에서 정보 패널이 가리는 너비. top: 장면 토글 묶음의 아래 끝. bottom: 시점 버튼 묶음의 위 끝.
 * 버튼 묶음은 글자를 키우면 두 줄이 되므로 실제 크기를 잰다. 로딩 중에도 자리를 차지한다(visibility).
 */
function sceneInsets({ els, debug, wideQuery }) {
  // 포스터 촬영 모드는 중심점을 캔버스 가운데에 두고 찍는다(js/framing.js)
  if (debug.poster) return { left: 0, top: 0, bottom: 0 };
  const box = els.scene.getBoundingClientRect();
  const toggles = els.toggles.getBoundingClientRect();
  const controls = els.controls.getBoundingClientRect();
  return {
    left: wideQuery.matches ? els.backdrop.getBoundingClientRect().right - box.left : 0,
    top: toggles.height > 0 ? Math.max(0, toggles.bottom - box.top) : 0,
    bottom: controls.height > 0 ? Math.max(0, box.bottom - controls.top) : 0,
  };
}

startSceneApp({
  name: 'spaceStation',
  breakpoint: BREAKPOINT,
  posterSizes: POSTER,
  placePoster: posterPlacement,
  frame: { option: 'getInsets', measure: sceneInsets, watchButtons: true },
  variant: {
    key: 'side',
    values: ['day', 'night'],
    labels: { day: '지구 밤 쪽으로 가기', night: '지구 낮 쪽으로 가기' },
    alt: {
      day: '지구 낮 쪽 위를 도는 작은 정거장. 거주 모듈, 실험실 모듈, 태양 전지판, 도킹 포트, 관측 창이 있는 3D 장면',
      night:
        '지구 밤 쪽 위를 도는 작은 정거장. 아래로 도시 불빛이 보이고 거주 모듈, 실험실 모듈, 태양 전지판, 도킹 포트, 관측 창에 불이 켜진 3D 장면',
    },
  },
  copy: { progress: '정거장을 그리는 중이에요' },
  loadScene: () => import('./scene/scene.js'),
});
