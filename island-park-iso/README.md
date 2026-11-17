# 바다 위 놀이공원 — 2D 아이소메트릭 첫 화면

3D 판(`../island-park/`)과 같은 섬, 같은 명소 5곳(선착장·회전목마·대관람차·롤러코스터·등대 전망대), 같은 설명 문구를 아이소메트릭 2D 그림(인라인 SVG)으로 다시 만든 정적 웹 페이지다.
두 방식을 견줘 보는 것이 목적이다. 화면 안의 "3D로 보기" 링크로 3D 판에 간다.
서버 코드와 빌드 단계 없이 파일만 올리면 동작한다.

- 화면 설계서: `docs/ui/island-park-iso.md`
- 자체 점검 스크린샷: `docs/ui/review/island-park-iso/20261117/self-*.png`
- 바로 보기: https://s10cho.github.io/ui-samples/island-park-iso/
- 3D 판: https://s10cho.github.io/ui-samples/island-park/

## 3D 판과 다른 점

| 항목 | 3D 판 | 이 판 |
|---|---|---|
| 그리기 | Three.js(WebGL) | 인라인 SVG. 섬 모양·나무 자리는 3D 판과 같은 좌표·씨앗 난수로 계산한다 |
| 첫 화면 | 포스터 이미지 → 3D 장면 | 그림이 HTML 과 함께 바로 보인다. 기다릴 것이 없다 |
| 조작 | 돌리기 · 가까이 · 멀리 · 처음 시점 | 옮기기(왼쪽·위쪽·아래쪽·오른쪽 보기) · 가까이 · 멀리 · 처음 시점. 2D 그림은 보는 방향이 하나라 돌리기 대신 끌기의 버튼 대안을 둔다(설계서 3-2절) |
| 파일로 열기 | 묶음 스크립트로 따로 부팅 | 같은 일반 스크립트 두 개가 그대로 돈다 |
| 첫 방문 전송량(압축) | 약 260KB | 약 90KB |

## 실행

공용 뼈대(`shared/iso2d`)와 합쳐야 돈다. 저장소 루트에서 이 샘플을 조립한 뒤 `_site/` 를 연다(`docs/platform.md`).
저장소의 이 폴더를 바로 열면 `js/iso2d.js`·`css/style.css` 가 없어 화면이 깨진다.

```bash
node tools/build-site.mjs --only island-park-iso
python3 -m http.server 8000 --directory _site
```

| 여는 방법 | 차이 |
|---|---|
| `_site/island-park-iso/index.html` 더블클릭(`file://`) | 브라우저가 파일에서는 웹 글꼴을 막는다. 그래서 글꼴 파일을 아예 요청하지 않고 시스템 한글 글꼴로 보인다(콘솔 오류가 없다) |
| 정적 서버(http·https) | Pretendard 글꼴까지 설계서대로 보인다 |

서버로 열 때는 브라우저에서 그 서버 주소(포트 8000)를 열고 `island-park-iso/` 로 들어간다. 파일을 고친 뒤에는 다시 조립하고 강력 새로고침(캐시 무시)을 한다.
조립된 `_site/island-park-iso/` 폴더는 혼자 완결된다. 정적 호스팅에는 그 폴더를 그대로 올린다.
화면 스크립트를 받지 못하면 조작 버튼을 숨기고 명소 설명을 모두 펼친다. 그림은 HTML 안에 있어 그대로 보인다.

## 상태별 화면 띄우기

검수할 때 아래 쿼리 파라미터로 상태를 바로 띄운다. 여러 개를 `&` 로 이어 쓴다.

| 파라미터 | 보이는 것 |
|---|---|
| `?select=ferris` | 명소 하나를 고른 상태. `pier` · `carousel` · `ferris` · `coaster` · `lighthouse` |
| `?time=night` | 밤 그림 |
| `?motion=off` | 움직임 멈춘 상태 |
| `?zoom=max` · `?zoom=min` | 가장 가까이 · 가장 멀리 본 상태. "가까이 보기"·"멀리 보기"가 비활성이 된다 |
| `?state=noscript` | 화면 스크립트를 쓸 수 없을 때의 화면 — 멈춘 그림 + 안내 배너 + 펼친 설명 |

- 움직임 줄이기는 브라우저·OS 설정(`prefers-reduced-motion: reduce`)으로 확인한다.
- 스크린샷은 화면 크기 그대로 찍는다.

## 파일

공용 뼈대 파일은 저장소의 `shared/iso2d/` 에 있고, 조립할 때 아래 경로로 들어온다. 샘플은 같은 이름의 파일을 두지 않는다(두면 공용 파일을 덮는다).

| 경로 | 어디 | 하는 일 |
|---|---|---|
| `index.html` | 샘플 | 화면 골격 + 섬 그림(SVG, `iso-scene` 표시 사이). 명소 설명이 HTML 에 들어 있어 스크립트가 꺼져도 읽힌다 |
| `css/tokens.css` | 샘플 | 디자인 토큰(설계서 4-1절). UI 토큰은 3D 판과 같고, 그림 색(`--iso-*`)과 밤 색을 더했다 |
| `css/style.css` | 공용 | 배치·컴포넌트·상태 스타일(2D 그림판 공통 화면 틀) |
| `css/scene.css` | 샘플 | 그림 자리 바탕색, 그림 면 클래스 → 그림 색 변수, 처음 화면을 지키는 규칙(live 영역·목록 행) |
| `js/iso2d.js` | 공용 | 면 계산(`IsoCore`)과 화면 틀(`Iso2d.start` — 보는 범위·선택·토글·끌기·확대·움직임·주소·live 영역) |
| `js/iso-geom.js` | 샘플 | 투영·햇빛과 놀이기구 자세 계산(면 계산은 공용 `js/iso2d.js`). 빌드 스크립트와 화면 스크립트가 같이 쓴다 |
| `js/scene.js` | 샘플 | 문구·보는 범위·토글 설정과 놀이기구 움직임. 공용 화면 틀(`Iso2d.start`)에 넘긴다 |
| `sample.config.json` | 샘플 | 조립 설정(공용 뼈대 `iso2d`, 조립 뒤 명령, 자동 검수 상태). 배포하지 않는다 |
| `vendor/pretendard/` | 샘플 + 공용 | Pretendard 1.3.9(SIL OFL). 화면 글자 전용 파일(샘플) + 다이나믹 서브셋·라이선스(`shared/common`, 빠진 글자가 있을 때만 붙는다) |
| `tools/build-scene.mjs` | 샘플 | 섬 그림을 계산해 `index.html` 에 넣는다(Node, 의존성 없음) |
| `tools/subset-font.py` | 공용 | 화면 글자 전용 글꼴을 만든다 |
| `tools/strip-css-comments.mjs` | 공용 | 조립본 `css/*.css` 의 주석을 지운다(첫 방문 전송량). `sample.config.json` 의 `build` 가 부른다. 저장소의 css 는 그대로 둔다 |

## 다시 만들기

| 언제 | 실행 |
|---|---|
| 그림 모양·자리·색 단계를 바꿨을 때(`js/iso-geom.js`·`tools/build-scene.mjs`) | `node tools/build-scene.mjs` |
| 화면 문구를 바꿔 새 글자가 생겼을 때 | `pip install fonttools brotli` 뒤 이 폴더에서 `python3 ../shared/iso2d/tools/subset-font.py <PretendardVariable.woff2 원본>` |

글꼴을 다시 만들지 않아도 화면은 깨지지 않는다. 화면 스크립트가 page subset 에 없는 글자를 찾으면 다이나믹 서브셋을 붙이고 그 조각만 받는다.

## 예산(설계서 4-2절)

| 항목 | 목표 | 측정(2026-11-17) |
|---|---|---|
| 첫 방문 전송량(압축) | 100KB 이하 | 약 90KB(91,806바이트) — 서버로 열 때, gzip -9 로 계산한 값. 글꼴 47KB · HTML(그림 포함) 21KB · 스크립트 15KB · CSS 9KB. 실서버 압축 설정에 따라 다르다 |
| 파일로 열 때 전송량 | — | 약 43KB(글꼴을 받지 않는다) |
| 그림 요소 수 | — | 920개(`node tools/build-scene.mjs` 출력) |
| 매 프레임 바꾸는 요소 | — | 30여 개(관람차 바퀴 2·칸 8·말 8·차량 3·등대 불빛 4·배·물결) |
| 휴대폰 프레임 시간 | 평균 16ms 이하 | 미측정 — 실제 기기에서 잰다 |
