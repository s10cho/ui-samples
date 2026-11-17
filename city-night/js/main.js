/*
 * 화면 설정 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 * 동작은 공용 뼈대(js/shell/app.js, 저장소의 shared/scene3d/)가 맡는다. 여기에는 이 화면의 값만 둔다.
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=bridge        명소 하나를 고른 상태 (tower · bridge · station · market · fountain)
 *   ?time=night           밤 장면으로 시작(기본은 해 질 녘)
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=dusk|night    포스터 이미지 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { posterPlacement } from './framing.js';
import { startSceneApp } from './shell/app.js';

startSceneApp({
  name: 'cityNight',
  breakpoint: BREAKPOINT,
  posterSizes: POSTER,
  placePoster: posterPlacement,
  variant: {
    key: 'time',
    values: ['dusk', 'night'],
    labels: { dusk: '밤으로 바꾸기', night: '해 질 녘으로 바꾸기' },
    alt: {
      dusk: '해 질 녘, 강을 낀 작은 도시. 전망 타워, 아치 다리, 시계탑 기차역, 시장 골목, 공원 분수가 있는 3D 장면',
      night:
        '밤이 된 강가 도시. 창문과 가로등, 아치 다리에 불이 켜지고 전망 타워, 시계탑 기차역, 시장 골목, 공원 분수가 보이는 3D 장면',
    },
  },
  copy: { progress: '도시를 그리는 중이에요' },
  loadScene: () => import('./scene/scene.js'),
});
