/*
 * 화면 설정 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 * 동작은 공용 뼈대(js/shell/app.js, 저장소의 shared/scene3d/)가 맡는다. 여기에는 이 화면의 값만 둔다.
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=ferris        명소 하나를 고른 상태 (pier · carousel · ferris · coaster · lighthouse)
 *   ?time=night           밤 장면으로 시작
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=day|night     포스터 이미지 촬영 모드(장면만 보인다)
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { posterPlacement } from './framing.js';
import { startSceneApp } from './shell/app.js';

startSceneApp({
  name: 'islandPark',
  breakpoint: BREAKPOINT,
  posterSizes: POSTER,
  placePoster: posterPlacement,
  variant: {
    key: 'time',
    values: ['day', 'night'],
    labels: { day: '밤으로 바꾸기', night: '낮으로 바꾸기' },
    alt: {
      day: '바다 위 섬 하나에 선착장, 회전목마, 대관람차, 롤러코스터, 등대 전망대가 있는 3D 장면',
      night: '밤의 바다 위 섬. 선착장, 회전목마, 대관람차, 롤러코스터, 등대 전망대에 불이 켜진 3D 장면',
    },
  },
  copy: { progress: '섬을 그리는 중이에요' },
  loadScene: () => import('./scene/scene.js'),
});
