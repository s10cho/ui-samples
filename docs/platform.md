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
4. 샘플 설정의 `build` 명령을 `_site/<slug>/` 안에서 차례로 실행

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
