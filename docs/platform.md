# 저장소 구조와 조립 규칙

이 문서는 샘플을 만들고 고치는 사람(과 에이전트)이 지킬 약속이다.
샘플이 늘어도 같은 결함이 복사되지 않게, 공용 코드는 한 곳에 두고 배포할 때 조립한다.

## 폴더

| 경로 | 하는 일 |
|---|---|
| `samples.json` | 샘플 목록의 원본. 이름·설명·묶음·점수·설계서·보고서 경로 |
| `index.html` | 목록 페이지. 샘플 목록 부분은 `tools/build-gallery.mjs` 가 만든다 |
| `assets/` | 목록 썸네일. `<slug>-day.webp`(필수), `<slug>-night.webp`(마우스 올림 때) |
| `DESIGN.md` | 디자인 시스템. 토큰·컴포넌트·허용 목록 |
| `shared/common/` | 모든 샘플에 복사되는 파일(다이나믹 서브셋 글꼴 등) |
| `shared/<kit>/` | 공용 뼈대 묶음. `scene3d`(3D 장면), `iso2d`(2D 그림판), `app`(업무 화면) |
| `<slug>/` | 샘플 하나의 고유 파일. 장면·문구·토큰 값·설계서·검수 보고서 |
| `tools/` | 조립·목록·점검 스크립트 |
| `.github/workflows/` | 자동 검수와 배포 |
| `_site/` | 조립 결과(git 에 넣지 않는다). GitHub Pages 가 이 폴더를 내보낸다 |

## 조립 규칙 — `node tools/build-site.mjs`

샘플마다 아래 순서로 `_site/<slug>/` 를 만든다. 뒤에 복사한 파일이 앞의 같은 경로 파일을 덮는다.

1. `shared/common/`
2. `shared/<kit>/` — 샘플 설정의 `kit` 이 있을 때
3. `<slug>/`
4. kit 설정(`shared/<kit>/kit.config.json`)의 `build` → 샘플 설정의 `build` 순서로 명령을 `_site/<slug>/` 안에서 차례로 실행. kit build 는 그 kit 을 쓰는 샘플 모두에 늘 돈다

- `<slug>/docs/ui/review/` 는 배포하지 않는다.
- 샘플 설정은 `<slug>/sample.config.json` 에 둔다. `samples.json` 의 같은 이름 값보다 이긴다.

```json
{ "kit": "scene3d", "build": ["node tools/build-app.mjs"] }
```

- kit 안의 파일 경로는 **조립된 샘플 폴더 기준 경로**와 같게 둔다.
  - 예: `shared/scene3d/js/shell/banner.js` → `_site/<slug>/js/shell/banner.js`
  - 그래서 샘플 코드는 kit 파일을 `./js/shell/banner.js` 처럼 상대 경로로 부른다.
- 조립된 샘플 폴더는 지금처럼 혼자 완결된다. 폴더만 떼어 가도, 파일로 열어도(`file://`) 동작해야 한다.
- `shared/` 를 고치면 그 kit 을 쓰는 샘플이 모두 바뀐다. 고친 뒤 모든 샘플을 다시 조립하고 자동 검수를 돌린다.

## 로컬에서 보기

```bash
node tools/build-site.mjs                 # 전체 조립
node tools/build-site.mjs --only city-night   # 샘플 하나만 다시 조립
python3 -m http.server 8000 --directory _site
```

- 저장소 폴더를 바로 서버로 열면 공용 파일이 빠져 깨진다. 늘 `_site/` 를 연다.
- 여러 사람이 동시에 작업할 때는 `--only` 를 쓴다. `--only` 없이 돌리면 `_site/` 전체를 지우고 다시 만든다.

## 목록 — `node tools/build-gallery.mjs`

- `samples.json` 을 고친 뒤 실행한다. `index.html` 목록과 `README.md` 샘플 표를 다시 만든다.
- `--check` 는 고칠 것이 있으면 실패한다(자동 검수에서 쓴다).

## 검수 화면 보관

- 새 샘플부터 검수 화면은 **대표 화면 8장 이하, webp** 만 저장소에 둔다. 위치: `<slug>/docs/ui/review/<slug>/<날짜>/`
- 만든 쪽의 자체 점검 화면(`self-*`)은 커밋하지 않는다.
- 나머지 증거 화면은 자동 검수 결과물(GitHub Actions artifact)로 남긴다.

## 문구 규칙(검수에서 자주 걸린 것)

- 수량은 아라비아 숫자로 쓴다: "명소 5곳", "4개 층"(WRT-FMT-01). 제스처 이름("두 손가락으로")은 예외.
- 영문·숫자 뒤 조사는 붙여 쓴다: "3D로 보기".
- 같은 화면에 같은 안내 문장을 두 번 두지 않는다.

## 공개 저장소 규칙

- 로컬 경로(`/Users`, `/private/tmp`), `localhost`·`127.0.0.1`·사설 IP, 회사명, 이메일을 파일에 넣지 않는다.
- 쓰기 훅이 `.md`·`.html` 옆에 만드는 `*.slotfix.*` 사본은 지운다.
- 커밋 작성자는 `s10cho` noreply 주소다.

## 라이선스

- 코드: MIT(`LICENSE`). 그림·문서: CC BY 4.0(`LICENSE-CONTENT.md`). 외부 라이브러리·글꼴은 원래 라이선스.

## 자동 검수

기계로 잴 수 있는 것은 GitHub Actions 가 올릴 때마다 잰다. 판단이 필요한 루브릭 채점은 검수 에이전트(ui-critic)가 맡는다.

| 워크플로 | 언제 | 하는 일 |
|---|---|---|
| `.github/workflows/deploy.yml` | main 에 올라올 때 | 목록 확인 → 조립 → 정적 점검 → 화면 점검. 모두 통과해야 GitHub Pages 에 배포한다 |
| `.github/workflows/check.yml` | PR, 수동 실행 | 같은 점검만 한다. 배포하지 않는다 |

### 정적 점검 — `tools/check-static.mjs`

저장소 파일만 읽는다(브라우저 없음). 걸리면 `파일:줄: [규칙]` 을 찍고 실패한다.

| 규칙 | 찾는 것 | 대상 |
|---|---|---|
| PUB | 공개 금지 정보 — 로컬 경로, 루프백 주소, 사설 IP, 내부 이름, 회사명 | 글자 파일 전부(`.git`·`.docs`·`node_modules`·`_site`·`_check` 제외) |
| SLOT | `*.slotfix.*` 사본 | 파일 전부 |
| WRT-FMT-01 | 한글 수량("두 곳" → "2곳") | 화면 파일 |
| WRT-FMT-02 | 영문·숫자 뒤 띄운 조사("3D 로" → "3D로") | 화면 파일 |
| W1 W2 W3 W9 W10 TRANS-ALL | 토큰 밖 값 — hex, 색 함수, px, 숫자 z-index, `!important`, `transition: all` | 화면 파일. 토큰 파일(이름에 tokens·theme), CSS 변수 선언 줄, 미디어 조건 줄(`@media`·`@container`·`matchMedia(`)은 뺀다 |
| S1 ~ S10 | AI 티 신호 — 그라데이션 글자, 보라 그라데이션, 이모지, 튀는 움직임, 한쪽 두꺼운 테두리, 대문자 꼬리표, 화살표, 자리 채움 데이터, 유리 효과, 흔한 기본 글꼴 | 화면 파일 |

- 화면 파일은 루트 `index.html`, 샘플 폴더와 `shared/` 의 `.html`·`.js`·`.css` 다. `vendor/`·`dist/`·`tools/`·`docs/` 는 뺀다.
- 주석(HTML·JS·CSS)은 지우고 본다. 주석 속 "두 개"·"→" 는 걸리지 않는다.
- 규칙 ID 는 ui-design-wiki 의 정적 점검 목록과 같다.
- 진짜 예외는 `tools/check-static.mjs` 위쪽의 허용 목록(`ALLOW`)에 규칙·파일·줄 모양·이유를 적는다. 지금 허용한 것은 `<source media>` 조건의 px, `theme-color` meta 의 hex, 이 문서의 공개 저장소 규칙 문장, 화면 점검 서버의 주소다.

### 화면 점검 — `tools/check-pages.mjs`

조립된 `_site/` 를 임시 서버로 띄우고 헤드리스 Chromium(Playwright)으로 연다.

- 대상: 목록 페이지와 `samples.json` 의 모든 샘플
- 폭: desktop 1280×800, mobile 375×812(터치, 픽셀 배율 2)
- 상태: `<slug>/sample.config.json` 의 `states`. 없으면 `["", "?motion=off"]`
- 3D 샘플(`<html data-mode>`)은 `data-mode` 가 `ready` 가 될 때까지 기다린다. `?state=nowebgl`·`?state=noscript` 이면 `fallback`, `?state=lost` 이면 `lost` 를 기다린다. CI 는 GPU 없이 그려 느리므로 150초까지 기다리고, 시간이 넘으면 한 번 더 연다.

| 실패 조건 | 기준 |
|---|---|
| 콘솔 | error·잡히지 않은 예외 0건 |
| 응답 | 400 이상 0건(파비콘 포함), 실패한 요청 0건 |
| 가로 넘침 | `scrollWidth > clientWidth` 가 없다 |
| 3D 상태 | 기대한 `data-mode` 가 된다 |
| 접근성 | axe-core critical·serious 0건(WCAG 2.x A·AA) |
| 첫 방문 전송량 | 3D 300KB, 2D 100KB, 그 밖 300KB. 샘플 설정에 `budgetKB` 가 있으면 그 값. `states` 의 첫 상태에서만 판정한다 |
| 목록 페이지 링크 | 사이트 안 링크는 상태 코드 400 미만. 이 저장소의 GitHub 링크는 저장소에 그 파일·폴더가 있다 |

- 전송량은 응답 본문(압축 크기)과 응답 헤더를 더한 값이다. KB 는 1,024바이트다.
- 점검 서버는 GitHub Pages 처럼 글자 파일(html·css·js·json·svg)을 gzip 으로 보내고, 사이트를 `/ui-samples/` 아래에 둔다. 실제 Pages 는 응답 헤더가 길어 몇 KB 더 나온다.
- 목록 페이지의 전송량은 재기만 하고 판정하지 않는다. 썸네일 수만큼 늘기 때문이다.
- GPU 가 있는 컴퓨터에서도 SwiftShader(CPU 렌더링)로 그린다. CI 와 같은 조건으로 보려는 것이다.

샘플 설정 예:

```json
{ "kit": "scene3d", "states": ["", "?motion=off", "?state=nowebgl"], "budgetKB": 300 }
```

### 로컬에서 돌리기

```bash
npm ci
npx playwright install chromium     # 처음 한 번
node tools/build-site.mjs
npm run check                       # check:static + check:pages
node tools/check-pages.mjs --only city-night,index   # 일부만(index = 목록 페이지)
node tools/check-pages.mjs --axe report               # axe 는 세기만
```

- 결과는 `_check/` 에 생긴다: `report.md`, `report.json`, `shots/<화면>/<폭>-<상태>.png`
- 다른 사람이 `_site/` 를 쓰는 중이면 `--site <폴더> --out <폴더>` 로 다른 폴더를 본다.

### 실패했을 때 보는 곳

1. Actions 실행 화면의 Summary — 정적 점검의 규칙별 건수와 화면 점검 표가 붙는다.
2. 실패한 단계의 로그 — 정적 점검은 `파일:줄: [규칙]`, 화면 점검은 `실패 <화면> <폭> <상태>` 아래에 이유가 있다.
3. artifact `check-report` — `report.md`, `report.json`, 화면 캡처. 14일 보관한다.

| 실패 | 할 일 |
|---|---|
| 목록이 samples.json 과 맞지 않음 | `node tools/build-gallery.mjs` 를 돌려 함께 커밋한다 |
| 정적 점검 | 로그의 파일:줄을 고친다. 진짜 예외면 `ALLOW` 에 이유와 함께 넣는다 |
| 3D 상태가 ready 가 아님 | 같은 화면의 콘솔 오류를 본다. "WebGL2 를 만들 수 없다"가 붙어 있으면 점검 환경 문제다 |
| 전송량 | `report.json` 의 `transfer`(요청 수·본문·헤더)를 본다 |
| axe | `report.md` 의 axe 표에서 규칙과 요소를 본다 |

## 초안 표시

- `samples.json` 에서 `"draft": true` 인 샘플은 검수 전 초안이다.
- 조립(`build-site.mjs`)·목록(`build-gallery.mjs`)·화면 점검(`check-pages.mjs`)은 초안을 건너뛴다. `--only <slug>` 로 이름을 주면 조립·점검한다.
- 독립 검수에 합격하면 `draft` 를 지우고 `score` 를 적는다. 그 뒤 올리면 배포된다.

## 공용 뼈대별 규칙

| kit | 샘플 | 샘플이 부르는 순서 | 샘플에 남기는 것 | build |
|---|---|---|---|---|
| `scene3d` | 3D 장면 6개 | CSS: `tokens.css` → `shell.css` → `shell-landmarks.css`(명소형만) → `style.css`. JS: `js/shell/core.js`·`js/shell/app.js` 의 `startSceneApp(설정)` | 설정 객체, `js/scene/`, `js/tokens.js`, 샘플 CSS·토큰, 포스터, `vendor/three`, page subset 글꼴 | `node tools/build-app.mjs`(file:// 묶음), `node tools/strip-kit.mjs`(배포본 kit 주석 제거) |
| `iso2d` | 2D 그림판 3개 | JS: `js/iso2d.js` → `js/iso-geom.js` → `js/scene.js`(`Iso2d.start(설정)`). 일반 스크립트라 파일로 열어도 된다 | 그림 데이터(`index.html` 안), `tools/build-scene.mjs`, `css/scene.css`, 토큰, 설정 | `node tools/strip-css-comments.mjs` |
| `app` | 업무 화면 | CSS: `tokens.css` → `base.css` → `components.css` → `page.css`. JS: `js/ds.js`(defer, 전역 `DS`) | 화면 코드, `js/data.js`(가상 데이터), `css/page.css`, page subset 글꼴 | 샘플은 없음. kit build `node tools/strip-comments.mjs`(배포본 kit 파일 4개의 주석 제거, `shared/app/kit.config.json`) |

- kit 파일을 샘플에서 같은 이름으로 덮는 것은 최소로 한다. 덮으면 kit 을 고쳐도 그 샘플에는 반영되지 않는다.
- `scene3d`·`iso2d` 의 몇 샘플은 옮기기 전 화면을 그대로 지키려고 "옛 모양 유지" 설정을 켜 두었다. 끄면 화면이 바뀌므로 다시 검수한다.
- kit 을 고치면 그 kit 을 쓰는 샘플을 모두 다시 조립하고, 자동 검수와 검수 에이전트로 다시 본다.
- 도구 실행 위치: 글꼴 page subset 은 조립본 안의 `tools/subset-font.py` 로 만든다(예: `python3 _site/<slug>/tools/subset-font.py <원본> ...`). 자세한 인자는 각 kit 의 도구 파일 머리 주석을 본다.
