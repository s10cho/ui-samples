/*
 * 화면 설정 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 * 동작은 공용 뼈대(js/shell/app.js, 저장소의 shared/scene3d/)가 맡는다. 여기에는 이 화면의 값만 둔다.
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=lift          명소 하나를 고른 상태 (lift · easy · expert · lodge · summit)
 *   ?weather=snow         눈 내림 장면으로 시작
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=clear|snow    포스터 이미지 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { posterPlacement } from './framing.js';
import { startSceneApp } from './shell/app.js';

startSceneApp({
  name: 'skiMountain',
  breakpoint: BREAKPOINT,
  posterSizes: POSTER,
  placePoster: posterPlacement,
  variant: {
    key: 'weather',
    values: ['clear', 'snow'],
    labels: { clear: '눈 내리게 하기', snow: '눈 그치게 하기' },
    alt: {
      clear: '눈 덮인 산 하나에 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 3D 장면',
      snow: '눈이 내리는 산. 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 흐리게 보이는 3D 장면',
    },
  },
  copy: { progress: '산을 그리는 중이에요' },
  loadScene: () => import('./scene/scene.js'),
});
