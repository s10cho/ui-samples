# 박물관 층별 안내 — 실내 층별 안내 3D

4층짜리 가상의 박물관 건물 안을 3D로 보여 주는 층별 안내 화면이다. 층을 고르면 그 층이 앞으로 나오고, 그 층의 전시실을 고르면 설명과 가는 길이 나온다.
층을 위아래로 띄운 펼쳐 보기와 실제 높이로 쌓은 쌓아 보기를 바꿀 수 있고, 화장실·엘리베이터·계단·안내 데스크 아이콘을 켜고 끌 수 있다.
실제 박물관을 본뜨지 않은 가상의 건물이다. 서버 코드 없이 정적 파일로 동작한다. 화면 틀은 3D 공용 뼈대(`shared/scene3d/`)를 쓰고, 배포할 때 이 폴더와 합쳐 조립한다.

- 화면 설계서: `docs/ui/museum-floors.md`
- 자체 점검 스크린샷: `docs/ui/review/museum-floors/20261117/self-*.png`
- 바로 보기: https://s10cho.github.io/ui-samples/museum-floors/

## 실행

이 폴더에는 이 화면만의 파일(장면·문구·토큰·고유 스타일)만 있다. 화면 틀(부팅·배너·시점 버튼·포스터 배치 스크립트, 공통 스타일, 도구)은
저장소의 `shared/scene3d/` 에 있고, 조립할 때 이 폴더와 합쳐진다(`docs/platform.md`). 저장소 루트에서 조립한 뒤 `_site/museum-floors/` 를 연다.

```bash
node tools/build-site.mjs --only museum-floors   # _site/museum-floors/ — 공용 뼈대 복사 → 이 폴더 복사 → dist/app.bundle.js 생성
python3 -m http.server 8000 --directory _site
```

| 여는 방법 | 쓰는 스크립트 | 차이 |
|---|---|---|
| `_site/museum-floors/index.html` 더블클릭(`file://`) | `dist/app.bundle.js` — 조립할 때 만든 한 파일 묶음(일반 스크립트) | 브라우저가 파일에서는 ES 모듈과 웹 글꼴을 막는다. 그래서 묶음 스크립트를 쓰고, 글자는 시스템 한글 글꼴로 보인다(콘솔에 글꼴 차단 메시지가 남는다) |
| 정적 서버(http·https) | `js/main.js` — ES 모듈. 3D 파일은 필요할 때 받는다 | 느린 연결 안내·Pretendard 글꼴까지 설계서대로 동작한다 |

서버로 열 때는 브라우저에서 그 서버 주소(포트 8000)의 `/museum-floors/` 를 연다. 파일을 고친 뒤에는 다시 조립하고 강력 새로고침(캐시 무시)을 한다.
조립된 `_site/museum-floors/` 폴더는 혼자 완결된다. 정적 호스팅에는 그 폴더를 그대로 올린다.
화면 스크립트를 받지 못했거나 6초 안에 시작하지 않으면, 동작하지 않는 버튼을 숨기고 층·전시실 설명을 모두 펼친다.

## 상태별 화면 띄우기

여러 개를 `&` 로 이어 쓴다.

| 파라미터 | 보이는 것 |
|---|---|
| `?floor=2` | 층 하나를 고른 상태. `1` · `2` · `3` · `4` |
| `?floor=2&room=pottery` | 전시실까지 고른 상태. `room` 만 줘도 그 전시실의 층으로 맞춘다. 전시실: `lobby` · `shop` · `kids`(1층), `life` · `pottery` · `media`(2층), `paintings` · `special`(3층), `garden` · `cafe`(4층) |
| `?view=stacked` | 쌓아 보기(기본은 펼쳐 보기) |
| `?facilities=off` | 편의시설 아이콘 숨김 |
| `?motion=off` | 움직임 멈춘 상태(엘리베이터·관람객·자동 회전) |
| `?state=nowebgl` | 3D 실패(WebGL 없음) — 포스터 + 배너 + 목록 |
| `?state=slow` | 느린 연결 — 0.3초 뒤 진행 문구, 10초 뒤 "3D 없이 보기" 배너 |
| `?state=lost` | 장면 멈춤 — 준비 0.8초 뒤 컨텍스트를 잃고, 3초 뒤 "다시 그리기" 배너 |
| `?quality=high` · `?quality=low` | 품질 단계 고정(자동 낮춤 끔). 두 단계는 해상도 상한만 다르다 |
| `?poster=1&size=wide` 등 | 포스터 촬영 모드. 장면만 보인다. `size` 는 `wide` · `medium` · `narrow` |
| 잘못된 값(`?floor=9`) | 무시하고 고르기 전 상태로 연다 |

- 주소와 뒤로 가기: 층·전시실을 고르면 방문 기록이 한 단계씩 쌓인다. 브라우저 뒤로 가기와 Esc 는 한 단계 위로 간다(전시실 → 층 → 고르기 전). 같은 단계 안의 이동(다른 층, 같은 층의 다른 전시실)은 기록을 쌓지 않는다. 보는 방식·편의시설은 주소만 바꾼다(설계서 6-1절).
- 움직임 줄이기는 브라우저·OS 설정(`prefers-reduced-motion: reduce`)으로 확인한다.
- 스크린샷은 화면 크기 그대로 찍는다. 전체 페이지 캡처는 창 크기를 바꾸는 순간 캔버스가 지워질 수 있다.
- 헤드리스 크롬은 GPU 없이 소프트웨어로 그린다. 프레임 시간은 실제 기기에서 잰다.
- 검수용 값: 개발자 도구 콘솔에서 `museumFloors.scene.stats()`(그리기 호출·삼각형·보이는 표지), `museumFloors.scene.cameraState()`(시점·빈 영역·가장 가까운 거리).

## 파일

| 경로 | 하는 일 |
|---|---|
| `index.html` | 화면 골격. 층·전시실 이름과 설명, 편의시설 아이콘 한 벌(SVG)이 HTML 에 들어 있어 스크립트가 꺼져도 읽힌다 |
| `css/tokens.css` | 디자인 토큰(설계서 4-1절). 화면 코드는 이 변수만 쓴다 |
| `css/style.css` | 이 화면만의 스타일 — 층·전시실 목록, 층 버튼, 편의시설, 배치. 공통 스타일은 공용 뼈대 `css/shell.css` |
| `js/tokens.js` | 3D 장면 색·빛·건물 크기·시점·움직임 주기·예산 값, 폭 경계 |
| `js/main.js` | 고르기·주소와 뒤로 가기·토글·빈 영역 계산. 배너·진행 문구·시점 버튼·포스터 배치·장면 한살이는 공용 뼈대 `js/shell/core.js` |
| `js/framing.js` | 시점 맞춤 계산. 처음 시점의 카메라 위치는 하나로 두고, 화면 크기는 시야 배율·시야 이동으로만 맞춘다. 3D와 포스터가 같은 식을 쓴다(three.js 없이 돈다) |
| `js/scene/layout.js` | 층 배치 — 전시실·칸막이·시설 자리·관람객이 도는 길 |
| `js/scene/scene.js` | 3D 장면(층·전시실·엘리베이터·관람객·표지·시점·입력). 층 하나의 움직이지 않는 물체는 도형 하나로 합쳐 층마다 한 번에 그린다 |
| `assets/poster-*.webp` | 포스터 3장(좁은·중간·넓은). 처음 시점과 같은 카메라로 찍은 같은 장면을 해상도만 달리했다. 3D 준비 전과 실패 때 보인다 |
| `vendor/three/` | Three.js 0.187.0 중 쓰는 클래스 19개만 묶은 파일(MIT) |
| `vendor/pretendard/` | Pretendard 1.3.9(SIL OFL). 화면 글자 전용 파일(글자 342개). 다이나믹 서브셋(빠진 글자 대비)은 조립 때 `shared/common/` 에서 들어온다 |
| `sample.config.json` | 조립 설정 — 공용 뼈대 이름(`scene3d`), 조립 뒤 실행할 명령, 자동 검수 상태 목록 |
| 공용 뼈대(조립 때 들어온다) | `css/shell.css`·`js/shell/`·`tools/` — 저장소의 `shared/scene3d/`. 이 폴더에는 없다 |
| `dist/app.bundle.js`(조립 때 생긴다) | 파일로 열 때(`file://`) 쓰는 한 파일 묶음. 생성물이라 저장소에 넣지 않는다 |

## vendor 파일 다시 만들기

| 언제 | 실행 |
|---|---|
| `js/` 에서 `'three'` 의 새 이름을 가져왔을 때 | 저장소 루트에서 `node shared/scene3d/tools/build-three.mjs museum-floors` 뒤 다시 조립 |
| `js/` 아래 코드나 공용 뼈대를 고쳤을 때 | 다시 조립한다(`node tools/build-site.mjs --only museum-floors`). `dist/app.bundle.js` 도 이때 다시 만든다 |
| 화면 문구를 바꿔 새 글자가 생겼을 때 | `pip install fonttools brotli` 뒤 저장소 루트에서 `python3 shared/scene3d/tools/subset-font.py <PretendardVariable.woff2 원본> museum-floors` — 공용 뼈대의 문구도 같이 모은다. HTML·JS 주석 속 글자는 모으지 않는다(`pyftsubset` 이 PATH 에 있어야 한다) |
| 장면 모양·처음 시점·색을 바꿨을 때 | 포스터를 다시 찍는다. `?poster=1&size=wide` 를 1296×1344, `size=medium` 을 864×896, `size=narrow` 를 594×616 화면(기기 배율 1)에서 찍어 `assets/poster-<size>.webp` 로 바꾼다. 화면 크기는 `js/tokens.js` 의 `POSTER` 와 같아야 한다(다르면 배치하지 않는다) |

- 포스터는 전송량 예산 때문에 목표 용량으로 줄였다: `cwebp -size <바이트> -pass 6 -m 6 -sharp_yuv`. 넓은 36,000 · 중간 28,000 · 좁은 15,000 바이트 목표.
- 포스터 가장자리는 장면 바탕색(`#DEDBD4`)이다. 포스터가 장면을 다 덮지 않아도 바깥이 같은 색이라 경계가 보이지 않는다.

## 예산(설계서 4-2절)

| 항목 | 목표 | 측정(2026-11-17) |
|---|---|---|
| 첫 방문 전송량(압축) | 300KB 이하 | 넓은 폭 292,800 바이트(286KiB) · 중간 폭 285,486 · 좁은 폭 272,360. 텍스트 파일은 gzip -9 로 계산, 글꼴·포스터는 파일 크기 그대로(실서버 압축 설정에 따라 다르다). 받는 파일은 페이지 포함 13개 — 다이나믹 서브셋 조각은 받지 않는다. 가장 큰 것은 Three.js 135,139 · 글꼴 64,380 · 넓은 포스터 35,384 |
| 장면 삼각형 수 | 5만 개 이하 | 펼쳐 보기 4,470개 · 쌓아 보기 4,902개(바깥벽 위쪽 포함). 그림자 계산이 없어 그림자 패스가 없다. `museumFloors.scene.stats()` |
| 그리기 호출 | — | 펼쳐 보기 24번 · 쌓아 보기 27번 |
| 휴대폰 프레임 시간 | 평균 33ms 이하 | 미측정 — 실제 기기에서 잰다 |
