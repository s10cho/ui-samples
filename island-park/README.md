# 바다 위 놀이공원 — 3D 첫 화면

바다 위 섬 하나에 명소 5곳(선착장·회전목마·대관람차·롤러코스터·등대 전망대)이 있는 놀이공원을 3D로 보여 주는 정적 웹 페이지다.
서버 코드 없이 정적 파일로 동작한다. 화면 틀은 3D 공용 뼈대(`shared/scene3d/`)를 쓰고, 배포할 때 이 폴더와 합쳐 조립한다.

- 화면 설계서: `docs/ui/island-park-landmark.md`
- 검수 보고서: `docs/ui/review/island-park-landmark/20261117-report.md`
- 바로 보기: https://s10cho.github.io/ui-samples/island-park/

## 실행

이 폴더에는 이 화면만의 파일(장면·문구·토큰·고유 스타일)만 있다. 화면 틀(부팅·배너·시점 버튼·포스터 배치 스크립트, 공통 스타일, 도구)은
저장소의 `shared/scene3d/` 에 있고, 조립할 때 이 폴더와 합쳐진다(`docs/platform.md`). 저장소 루트에서 조립한 뒤 `_site/island-park/` 를 연다.

```bash
node tools/build-site.mjs --only island-park   # _site/island-park/ — 공용 뼈대 복사 → 이 폴더 복사 → dist/app.bundle.js 생성
python3 -m http.server 8000 --directory _site
```

| 여는 방법 | 쓰는 스크립트 | 차이 |
|---|---|---|
| `_site/island-park/index.html` 더블클릭(`file://`) | `dist/app.bundle.js` — 조립할 때 만든 한 파일 묶음(일반 스크립트) | 브라우저가 파일에서는 ES 모듈과 웹 글꼴을 막는다. 그래서 묶음 스크립트를 쓰고, 글자는 시스템 한글 글꼴로 보인다 |
| 정적 서버(http·https) | `js/main.js` — ES 모듈. 3D 파일은 필요할 때 받는다 | 느린 연결 안내·Pretendard 글꼴까지 설계서대로 동작한다 |

서버로 열 때는 브라우저에서 그 서버 주소(포트 8000)의 `/island-park/` 를 연다. 파일을 고친 뒤에는 다시 조립하고 강력 새로고침(캐시 무시)을 한다.
조립된 `_site/island-park/` 폴더는 혼자 완결된다. 정적 호스팅에는 그 폴더를 그대로 올린다.
화면 스크립트를 받지 못했거나 6초 안에 시작하지 않으면, 동작하지 않는 버튼을 숨기고 명소 설명을 모두 펼친다.

## 상태별 화면 띄우기

검수할 때 아래 쿼리 파라미터로 상태를 바로 띄운다. 여러 개를 `&` 로 이어 쓴다.

| 파라미터 | 보이는 것 |
|---|---|
| `?select=ferris` | 명소 하나를 고른 상태. `pier` · `carousel` · `ferris` · `coaster` · `lighthouse` |
| `?time=night` | 밤 장면 |
| `?motion=off` | 움직임 멈춘 상태 |
| `?state=nowebgl` | 3D 실패(WebGL 없음) — 포스터 + 배너 + 목록 |
| `?state=slow` | 느린 연결 — 0.3초 뒤 진행 문구, 10초 뒤 "3D 없이 보기" 배너 |
| `?state=lost` | 장면 멈춤 — 준비 0.8초 뒤 컨텍스트를 잃고, 3초 뒤 "다시 그리기" 배너 |
| `?quality=high` · `?quality=low` | 품질 단계 고정(자동 낮춤 끔) |
| `?poster=day&size=wide` 등 | 포스터 촬영 모드. 장면만 보인다. `size` 는 `wide` · `medium` · `narrow` |

- 움직임 줄이기는 브라우저·OS 설정(`prefers-reduced-motion: reduce`)으로 확인한다.
- 스크린샷은 화면 크기 그대로 찍는다. 전체 페이지 캡처는 창 크기를 바꾸는 순간 캔버스가 지워져 장면이 빈 하늘로 찍힐 수 있다.
- 헤드리스 크롬은 GPU 없이 소프트웨어로 그린다. 프레임 시간은 실제 기기에서 잰다.

## 파일

| 경로 | 하는 일 |
|---|---|
| `index.html` | 화면 골격. 명소 설명이 HTML 에 들어 있어 스크립트가 꺼져도 읽힌다 |
| `css/tokens.css` | 디자인 토큰(설계서 4-1절). 화면 코드는 이 변수만 쓴다 |
| `css/style.css` | 이 화면만의 스타일(장면 바탕색 등). 공통 배치·컴포넌트·상태는 공용 뼈대 `css/shell.css`·`css/shell-landmarks.css` |
| `js/tokens.js` | 3D 장면 색·빛·시점·예산 값, 폭 경계 |
| `js/main.js` | 화면 설정 — 장면 갈래 토글 값·문구·처음 시점 맞춤. 부팅·선택·토글·배너·상태 처리·포스터 배치는 공용 뼈대 `js/shell/` |
| `js/framing.js` | 처음 시점 맞춤 계산 — 3D와 포스터가 같은 식을 쓴다(three.js 없이 돈다) |
| `js/scene/scene.js` | 3D 장면(섬·바다·명소·카메라·표지) |
| `assets/poster-*.webp` | 포스터 6장(낮·밤 × 좁은·중간·넓은). 3D 준비 전과 실패 때 보인다 |
| `vendor/three/` | Three.js 0.187.0 중 쓰는 클래스만 묶은 파일(MIT) |
| `vendor/pretendard/` | Pretendard 1.3.9(SIL OFL). 화면 글자 전용 파일. 다이나믹 서브셋(빠진 글자 대비)은 조립 때 `shared/common/` 에서 들어온다 |
| `sample.config.json` | 조립 설정 — 공용 뼈대 이름(`scene3d`), 조립 뒤 실행할 명령, 자동 검수 상태 목록 |
| 공용 뼈대(조립 때 들어온다) | `css/shell.css`·`css/shell-landmarks.css`·`js/shell/`·`tools/` — 저장소의 `shared/scene3d/`. 이 폴더에는 없다 |
| `dist/app.bundle.js`(조립 때 생긴다) | 파일로 열 때(`file://`) 쓰는 한 파일 묶음. 생성물이라 저장소에 넣지 않는다 |

## vendor 파일 다시 만들기

| 언제 | 실행 |
|---|---|
| `js/` 에서 `'three'` 의 새 이름을 가져왔을 때 | 저장소 루트에서 `node shared/scene3d/tools/build-three.mjs island-park` 뒤 다시 조립 |
| `js/` 아래 코드나 공용 뼈대를 고쳤을 때 | 다시 조립한다(`node tools/build-site.mjs --only island-park`). `dist/app.bundle.js` 도 이때 다시 만든다 |
| 화면 문구를 바꿔 새 글자가 생겼을 때 | `pip install fonttools brotli` 뒤 저장소 루트에서 `python3 shared/scene3d/tools/subset-font.py <PretendardVariable.woff2 원본> island-park` — 공용 뼈대의 문구도 같이 모은다. HTML·JS 주석 속 글자는 모으지 않는다 |
| 장면 모양·시점·색을 바꿨을 때 | `?poster=day&size=wide`·`?poster=night&size=wide` 를 2400×1400 창에서, `size=medium` 을 2000×1120, `size=narrow` 를 900×1170 창에서 찍어 `assets/poster-<낮밤>-<size>.webp` 로 바꾼다. 캔버스 크기는 `js/tokens.js` 의 `POSTER` 와 같아야 한다(다르면 배치하지 않고 가득 채우기로 둔다) |

글꼴을 다시 만들지 않아도 화면은 깨지지 않는다. 빠진 글자만 다이나믹 서브셋 조각에서 받는다.

## 예산(설계서 4-2절)

| 항목 | 목표 | 측정(2026-11-17) |
|---|---|---|
| 첫 방문 전송량(압축) | 300KB 이하 | 약 260KB — 넓은 폭 기준, gzip -9 로 계산한 값(실서버 압축 설정에 따라 다르다) |
| 장면 삼각형 수 | 5만 개 이하 | 35,850개 — 높은 품질, 그림자 패스 포함(`islandPark.scene.stats()`) |
| 휴대폰 프레임 시간 | 평균 33ms 이하 | 미측정 — 실제 기기에서 잰다 |
