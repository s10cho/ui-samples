---
version: alpha
name: "UI 샘플 — 업무 화면"
description: "공개 UI 샘플 저장소의 업무 화면 샘플들이 함께 쓰는 토큰과 부품. 밝은 UI 가 기본이고 어두운 UI 한 벌을 둔다."
colors:
  primary: "#1a6dbc"
  primary-hover: "#145fa5"
  on-primary: "#ffffff"
  background: "#f8f9fa"
  surface: "#ffffff"
  surface-raised: "#ffffff"
  text: "#1d2125"
  text-muted: "#5b5e62"
  border: "#cdd0d3"
  border-subtle: "#d9dcdf"
  focus: "#1a6dbc"
  danger: "#c4202a"
  warning: "#f7ad30"
  warning-subtle: "#fdefd2"
  text-warning: "#834b14"
  success: "#1c803f"
  success-subtle: "#def8e2"
  text-success: "#13632f"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2857
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4286
  label:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4286
  body-sm:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3846
  caption:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3333
rounded:
  badge: "4px"
  control: "6px"
  container: "8px"
  overlay: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "24px"
  xl: "32px"
  page-x: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    height: "32px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.container}"
    padding: "16px"
  list-row:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    height: "40px"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "32px"
  menu:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.container}"
  divider:
    backgroundColor: "{colors.border-subtle}"
    height: "1px"
  field-hint:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
  focus-ring:
    backgroundColor: "{colors.focus}"
    width: "2px"
  badge-warning:
    backgroundColor: "{colors.warning-subtle}"
    textColor: "{colors.text-warning}"
    rounded: "{rounded.badge}"
  badge-success:
    backgroundColor: "{colors.success-subtle}"
    textColor: "{colors.text-success}"
    rounded: "{rounded.badge}"
---

# UI 샘플 — 업무 화면 DESIGN.md

## Overview

이 저장소의 업무 화면 샘플(상담 인박스, 표와 필터, 상세·편집 폼, 설정, 운영 대시보드, 예약 흐름, 칸반, 파일 관리자, 알림 센터, 검색 결과, 권한 관리, 첫 사용 안내 등)은 이 문서의 토큰과 `shared/app/` 의 부품 위에서 만든다.
업무 화면을 쓰는 사람은 하루에 같은 화면을 여러 번 연다. 한 화면에서 더 많은 행을 비교하고, 지금 상태(고른 것·켜진 필터·오류)를 바로 알아보는 것이 꾸밈보다 중요하다.
화면 대부분은 중립 회색이고, 강조색 파랑은 주 행동 하나와 고른 상태에만 쓴다.

| 항목 | 값 |
|---|---|
| 주 사용자 | 업무 화면 샘플을 보는 개발자·디자이너, 샘플을 만드는 에이전트 |
| 주 플랫폼 | 웹(일반 HTML·CSS·JS). 빌드 없이 파일로 열어도 동작한다 |
| 밀도 | compact(본문 14/20) 기본. 터치 화면은 누르는 영역을 44px 로 키운다 — 근거: `PRN-B2B`·`SPC-05`·`SPC-07` |
| 테마 | 밝은 UI 기본 · 어두운 UI 선택(밝게·어둡게·시스템). 장면 때문에 어두운 화면만 예외(Colors 절 끝) |
| 문구 어조 | 해요체 — `WRT-TONE-01` |
| ui-design-wiki 기준 | tokens 2026-11-09 판, 규칙 2026-11-17 확인 |
| 문서 상태 | 2026-11-17 첫 판. 열린 질문은 모두 기본안을 골랐다(맨 끝 절) |

### 파일

| 경로 | 하는 일 |
|---|---|
| `shared/app/css/tokens.css` | 토큰 원본. 이 문서 YAML 과 값이 같다. 값을 바꾸면 둘 다 고친다 |
| `shared/app/css/base.css` | 리셋 · 글자 · 포커스 링 · 건너뛰기 링크 · 화면에서 숨긴 글 · live 영역 |
| `shared/app/css/components.css` | 부품(클래스는 모두 `ds-` 로 시작) |
| `shared/app/js/ds.js` | 부품 동작(일반 스크립트, 전역 `window.DS`) |
| `shared/app/tools/subset-font.py` | 샘플마다 화면 글자만 담은 글꼴(page subset)을 만든다 |
| `design-system/` | 모든 부품과 상태를 한 화면에 모은 부품 모음 샘플 |

조립하면(`docs/platform.md`) kit 파일이 `_site/<slug>/css/…`·`js/…`·`tools/…` 에 놓인다. 샘플 HTML 은 상대 경로로 부른다.

```html
<html lang="ko" data-theme="light">
<head>
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#ffffff">
  <script>
    /* 저장된 테마를 그리기 전에 적용한다. 저장값이 없으면 밝게(CLR-DARK-01) */
    try { var m = new URLSearchParams(location.search).get('theme') || localStorage.getItem('ds-theme') || 'light';
      if (m === 'system') m = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = m === 'dark' ? 'dark' : 'light'; } catch (e) {}
    /* 파일로 열면(file://) 웹 글꼴을 붙이지 않는다. 시스템 한글 글꼴로 그린다 */
    if (location.protocol !== 'file:') { /* vendor/pretendard/pretendard-page-subset.css 와 woff2 preload 를 붙인다 */ }
  </script>
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/page.css">   <!-- 샘플 고유 -->
  <script src="js/ds.js" defer></script>
</head>
```

- 글꼴 순서는 화면 글자만 담은 Pretendard(page subset) → 빠진 글자만 받는 다이나믹 서브셋(`shared/common`) → 시스템 한글 글꼴이다. 다이나믹 서브셋은 `js/ds.js` 가 빠진 글자를 찾았을 때만 붙인다.
- 실제 머리 부분 전체는 `design-system/index.html` 을 본뜬다.

## Colors

화면 대부분은 중립 회색이다. 강조색은 주 버튼 하나, 고른 상태(행·칩·쪽 번호), 포커스 링, 링크에만 쓴다.
의미 색(위험·경고·성공·정보)은 강조색과 따로 두고, 언제나 글자나 아이콘과 함께 쓴다.

| YAML 키 | 토큰 | 역할 | 쓰는 곳 | 쓰지 않는 곳 |
|---|---|---|---|---|
| `primary` | `--ds-color-fill-accent` | 강조색 하나 | 주 버튼, 체크, 고른 탭 막대, 포커스 링 | 머리줄·옆 메뉴 바탕, 장식 |
| `background` | `--ds-color-surface-canvas` | 낮은 바탕 | 옆 메뉴, 읽기 전용 입력 | 본문 카드 |
| `surface` | `--ds-color-surface-default` | 본문 바탕 | 본문, 카드, 패널, 입력 | — |
| `surface-raised` | `--ds-color-surface-raised` | 떠 있는 면 | 메뉴, 대화상자 | 화면에 붙은 카드 |
| `text` · `text-muted` | `--ds-color-fg-default` · `--ds-color-fg-muted` | 글자 | 본문 · 설명·메타 | 색 있는 채움 위 |
| `border` | `--ds-color-line-default` | 테두리 | 카드·표·패널 | 행 사이(→ `line-subtle`) |
| `focus` | `--ds-color-line-focus` | 포커스 링 | 모든 포커스 | — |
| `danger` · `warning` · `success` | `--ds-color-fill-danger` 등 | 의미 색 | 오류·경고·완료 | 장식, 강조 |

토큰 묶음(테마마다 이름이 같고 값만 다르다 — `CLR-DARK-03`):

| 묶음 | 토큰 | 밝은 UI | 어두운 UI |
|---|---|---|---|
| 바탕 `surface` | canvas · default · raised · subtle · hover · selected · inverse | `#f8f9fa` · `#ffffff` · `#ffffff` · `#f1f2f4` · `#eaecee` · `#e3e5e7` · `#1d2125` | `#111213` · `#17181a` · `#1e1f21` · `#252729` · `#2c2e30` · `#35373a` · `#eaedf1` |
| 가림막 | `surface-overlay` | 검정 45% | 검정 60% |
| 글자 `fg` | default · muted · disabled · inverse | `#1d2125` · `#5b5e62` · `#b8bbbf` · `#fcfdfe` | `#eaedf1` · `#b7bbc0` · `#575a5d` · `#111213` |
| 글자 `fg` 의미 | accent · danger · success · warning · info | `#115492` · `#971a20` · `#13632f` · `#834b14` · `#135a78` | `#91c2fa` · `#faa39c` · `#89d298` · `#f0be67` · `#6dcaf8` |
| 채움 위 글자 | on-accent · on-danger · on-success · on-warning | 흰색 · 흰색 · 흰색 · `#1d2125` | 모두 `#111213`(밝은 채움 + 어두운 글자, `CLR-DARK-08`) |
| 채움 `fill` | accent · accent-hover · danger · danger-hover · success · warning | `#1a6dbc` · `#145fa5` · `#c4202a` · `#ac1a23` · `#1c803f` · `#f7ad30` | `#64a9f3` · `#7fb9f9` · `#eb827b` · `#f7958d` · `#62bb78` · `#f5ae39` |
| 옅은 채움 | accent · danger · success · warning · info `-subtle` | `#e7f1fe` · `#feebe9` · `#def8e2` · `#fdefd2` · `#e1f3fe` | `#0f243a` · `#371816` · `#0e2915` · `#321e04` · `#052635` |
| 선 `line` | subtle · default · strong · control · focus · danger | `#d9dcdf` · `#cdd0d3` · `#b8bbbf` · `#83868b` · `#1a6dbc` · `#c4202a` | `#35373a` · `#424447` · `#575a5d` · `#7d8085` · `#64a9f3` · `#eb827b` |
| 강조 채움 안 구분선 | `line-on-accent` | 흰색 45% | `#111213` 45% |

- YAML 의 `border` · `warning` · `success` 는 토큰으로만 두고 YAML 부품이 참조하지 않는다. 그래서 `npx @google/design.md lint` 가 `orphaned-tokens` 경고 3건을 낸다(오류 0). 카드·표 테두리(`border`)는 YAML 부품 속성에 테두리가 없어 적을 수 없고, 진한 경고·성공 채움은 지금 부품이 쓰지 않는다(배지는 옅은 채움).
- 대비: 글자 4.5:1, UI 요소 3:1 이상(`CLR-03`·`CLR-04`). 2026-11-17 에 WCAG 2 공식으로 51쌍을 테마마다 계산했고 모두 통과했다. 가장 낮은 쌍은 `line-control` on `surface-subtle` — 밝은 3.26:1, 어두운 3.78:1(기준 3:1). 본문 `fg-default` on `surface-default` 는 16.20:1 · 15.13:1.
- 노랑 채움(`fill-warning`) 위에는 어두운 글자를 쓴다(`CLR-11`).
- 상태는 색만으로 전하지 않는다. 배지는 글자, 고른 행은 체크, 고른 탭은 막대, 켜진 칩은 체크 아이콘을 함께 쓴다(`CLR-05`·`CMP-SEL-04`).
- 웹은 테마에 맞춰 `color-scheme` 을 바꾸고(`tokens.css` 가 한다) `<meta name="theme-color">` 를 본문 바탕과 맞춘다(`js/ds.js` 가 한다, `CLR-DARK-10`).

### 테마 고르기

- 저장값이 없으면 밝게 시작한다. 사용자가 밝게·어둡게·시스템 중 고른다. 저장 키는 `ds-theme` 이다(`CLR-DARK-01`·`CLR-DARK-02`).
- 고르는 곳은 머리줄의 묶음 버튼(`data-ds-theme-control`)이다. 주소의 `?theme=dark` 는 저장하지 않는 미리보기다(검수 화면용).

### 어두운 UI 한 벌만 두는 화면(예외)

장면 자체가 어두운 화면(우주, 야간 관측 등)은 밝은 UI 를 두지 않고 어두운 UI 한 벌만 둘 수 있다. 지금은 `space-station` 이 그렇다.

| 조건 | 방법 |
|---|---|
| 테마를 고정한다 | `<html data-theme="dark" data-theme-lock>`, `<meta name="color-scheme" content="dark">`. 테마 고르기를 두지 않는다 |
| 토큰은 같은 이름 | 이 문서의 어두운 UI 값을 쓴다. 장면 색만 샘플 토큰에 더한다 |
| 지킬 규칙 | `CLR-DARK-02`~`CLR-DARK-11` 을 모두 지킨다: 순수 검정 바탕 금지, 떠 있는 면일수록 밝게, 채도를 낮춘 강조색, 밝은 채움 + 어두운 글자, 테마별 대비 검사, `theme-color` |
| 설계서에 적는다 | 예외를 쓰는 이유(장면이 어둡다)를 설계서 10절(예외)에 적는다 |

## Typography

제목 단계는 셋(`display` · `title` · `title-sm`)만 쓴다. 인접 단계 크기 비는 1.25배 이상이다(`TYP-08`). 강조는 크기보다 굵기와 색으로 한다.
크기는 rem 이라 브라우저 글자 크기 설정을 따르고, 행간은 단위 없는 비율이다(`TYP-04`·`TYP-05`).

| 스타일 | 토큰 접두사 | compact(기본) | comfortable | 굵기 | 쓰는 곳 |
|---|---|---|---|---|---|
| `display` | `--ds-text-display-*` | 28 / 1.2857 | 28 / 1.357 | 700 | 대시보드 핵심 지표 숫자 |
| `title` | `--ds-text-title-*` | 20 / 1.4 | 20 / 1.4 | 600 | 화면 제목(h1) |
| `title-sm` | `--ds-text-title-sm-*` | 16 / 1.375 | 17 / 1.4118 | 600 | 묶음·카드·대화상자 제목 |
| `body` | `--ds-text-body-*` | 14 / 1.4286 | 16 / 1.5 | 400 | 본문, 표 칸 |
| `body-reading` | `--ds-text-body-reading-*` | 14 / 1.5714 | 16 / 1.625 | 400 | 여러 줄 읽는 글, 대화상자 본문 |
| `body-sm` | `--ds-text-body-sm-*` | 13 / 1.3846 | 15 / 1.4667 | 400 | 도움말, 메타, 표 머리 |
| `label` | `--ds-text-label-*` | 14 / 1.4286 | 16 / 1.375 | 500 (strong 600) | 버튼, 입력 라벨, 메뉴 |
| `label-sm` | `--ds-text-label-sm-*` | 12 / 1.3333 | 14 / 1.4286 | 500 | 배지, 개수 |
| `caption` | `--ds-text-caption-*` | 12 / 1.3333 | 13 / 1.385 | 400 (strong 600) | 옆 메뉴 묶음 이름, 시각 |

- 이름 규칙은 기존 샘플과 같다: `-size` · `-leading` · `-weight` · `-tracking`.
- 입력 글자는 `--ds-text-input-size` 다. 좁은 폭(767 이하)과 터치 화면에서 16px 로 커진다(`CMP-INPUT-07`).
- 한국어 줄바꿈은 어절 단위다(`:lang(ko) { word-break: keep-all }`, `TYP-KO-01`). 굵기는 400·500·600·700 만 쓴다(`TYP-07`).
- 표·금액·시각처럼 세로로 비교하는 숫자는 고정폭 숫자(`.ds-num`)를 쓴다. 홀로 크게 보이는 지표 숫자는 기본 숫자다(`TYP-KO-05`).

## Layout

왼쪽 옆 메뉴(본문보다 낮은 바탕) + 본문 1열 + 필요할 때 오른쪽 옆 패널(비모달 상세)이다(`LAY-07`). 본문은 최대 1280px 이고 읽는 글은 640px 를 넘지 않는다(`LAY-04`).

| 항목 | 값 |
|---|---|
| 간격 척도 | `--ds-space-N` = N × 4px. 0 · 0-5(2) · 1(4) · 1-5(6) · 2(8) · 3(12) · 4(16) · 5(20) · 6(24) · 8(32) · 10(40) · 12(48) · 16(64). 2·6 은 아이콘·배지 안쪽 보정만(`SPC-02`) |
| 묶음 안 / 묶음 사이 | `--ds-gap-stack`(8) / `--ds-gap-section`(24). 묶음 사이를 더 넓게 둔다(`SPC-04`) |
| 페이지 좌우 여백 | `--ds-gap-page-x`: 24, 767 이하 16 |
| 본문 최대 너비 | `--ds-size-content-max` 1280 · 읽는 글 `--ds-size-reading-max` 640 · 입력 칸 `--ds-size-field-max` 480 |
| 웹 폭 경계 | 480 · 768 · 1024 · 1280 |
| 컨트롤·행 높이 | compact: 28 · 32 · 40, 표·목록 행 40(스켈레톤 행도 40). comfortable: 36 · 48 · 56, 행 56. 터치 화면(compact): 컨트롤 28·32·40 → 모두 44, 표 행 56 |
| 누르는 영역 넓히기 | 작은 체크박스(표 고르기 칸)는 `label.ds-hit` 로 감싼다. 보이는 상자 16, 누르는 영역 24(터치 44). 행 높이는 늘지 않는다 |
| 누르는 영역 | 마우스 24 이상, 터치 44 이상(`SPC-07`·`CMP-BTN-04`) |

앱 틀(`.ds-app`):

| 영역 | 클래스 | 1280 이상 | 1024–1279 | 1023 이하 |
|---|---|---|---|---|
| 머리줄 | `.ds-app__top` + `.ds-topbar` | 위에 붙음 | 위에 붙음 | 위에 붙음, 메뉴 버튼이 보인다 |
| 옆 메뉴 | `.ds-app__nav` + `.ds-sidenav` | 왼쪽 240 | 왼쪽 240 | 서랍(메뉴 버튼으로 연다, 나머지는 `inert`) |
| 본문 | `.ds-app__main` + `.ds-page` | 가운데 | 가운데 | 전체 폭 |
| 옆 패널 | `.ds-app__panel` + `.ds-panel` (열리면 `.ds-app--panel`) | 오른쪽 360 에 붙음(비모달) | 오른쪽 360 으로 덮음(뒤는 `inert` + 가림막) | 768–1023 은 360, 767 이하는 전체 폭으로 덮음 |

- 문서 전체가 스크롤된다. 머리줄·옆 메뉴만 붙어 있다. 그래서 페이지 머리 아래 배너 자리(`.ds-banner-slot`)는 스크롤 영역 안이 아니다.
- 관련 위키: `wiki/foundations/spacing-layout.md`(`SPC`·`LAY`)

## Elevation & Depth

바탕 → 본문·패널 → 메뉴·대화상자 세 단계다. 화면에 붙은 카드·패널·표는 테두리로 나누고, 떠 있는 메뉴·대화상자·서랍만 그림자를 쓴다(`SHP-04`).

| 단계 | 바탕 토큰 | 테두리·그림자 |
|---|---|---|
| 옆 메뉴 | `surface-canvas` | 오른쪽 `line-subtle` 1px |
| 본문·카드·표·패널 | `surface-default` | `line-default` 1px, 그림자 없음 |
| 메뉴 | `surface-raised` | `line-default` 1px + `--ds-shadow-overlay` |
| 대화상자 | `surface-raised` + 가림막 `surface-overlay` | `line-default` 1px + `--ds-shadow-overlay` |
| 덮는 옆 패널(1279 이하) | `surface-default` + 가림막 `surface-overlay` | 왼쪽 `line-default` 1px + `--ds-shadow-overlay` |
| 고른 묶음 버튼 | `surface-default` | `line-control` 1px + `--ds-shadow-raised` |

- 그림자는 2겹이고 반투명 테두리와 함께 쓴다(`SHP-03`). 어두운 UI 는 그림자보다 바탕 밝기로 높이를 보인다(`SHP-08`).
- 관련 위키: `wiki/foundations/shape-elevation.md`(`SHP`)

## Shapes

모서리는 역할 토큰으로 쓴다: 컨트롤 6(`--ds-control-radius`), 카드·패널·표 8(`--ds-container-radius`), 대화상자 12(`--ds-overlay-radius`). 칩·스위치·개수는 알약 모양(`--ds-radius-pill`)이다.

- 안쪽 요소의 반경은 바깥보다 크지 않다(`SHP-02`). 예: 메뉴 8 안의 항목 4.
- 테두리 1px(`--ds-size-hairline`), 강조 선 2px(`--ds-size-border-strong`), 포커스 링 2px + 간격 2px(`--ds-size-focus-ring`·`--ds-size-focus-offset`, `SHP-09`).
- 아이콘: `js/ds.js` 의 선 아이콘 39종(24×24, 선 1.75, 끝 둥글게). 크기 14·16·20(`--ds-icon-size-*`). `DS.icon('search')` 또는 `<svg class="ds-icon"><use href="#ds-i-search"></use></svg>`. 이모지를 아이콘으로 쓰지 않는다.
- 느낌표 아이콘(`error`)은 오류에만 쓴다. 경고 배너는 정보 아이콘(`info`)을 쓰고 제목 글로 경고임을 알린다(`CMP-FB-06`).
- 관련 위키: `wiki/foundations/shape-elevation.md`(`SHP`) · `wiki/foundations/iconography.md`(`ICN`)

## Components

부품은 `shared/app/css/components.css` 와 `shared/app/js/ds.js` 에 있다. 클래스는 `ds-` 로 시작한다. 상태는 클래스보다 ARIA·폼 속성으로 표시한다(`aria-selected`·`aria-pressed`·`aria-current`·`aria-checked`·`disabled`·`aria-invalid`·`aria-busy`).
업무 화면 샘플은 여기 있는 부품을 먼저 쓰고, 없을 때만 샘플 CSS(`css/page.css`)에 같은 토큰으로 만든다.

| 부품 | 클래스 | 변형 | 동작(`js/ds.js`) | 관련 위키 |
|---|---|---|---|---|
| 앱 틀 | `ds-app` `ds-topbar` `ds-sidenav` `ds-nav__link` `ds-panel` | `--panel` | 서랍 `[data-ds-nav-toggle]`, 옆 패널 `[data-ds-panel="id"]` · `DS.panel` | `LAY-07` `CMP-NAV` `CMP-TABLE-05` |
| 페이지 머리 | `ds-page` `ds-page__head` `ds-breadcrumb` `ds-section` `ds-toolbar` | — | — | `CMP-NAV-13` |
| 버튼 | `ds-btn` | `--primary` `--danger` `--ghost` · `--sm` `--lg` `--icon` `--block` | `DS.busy(btn, true)` | `CMP-BTN` |
| 분할 버튼·메뉴 | `ds-split` `ds-menu-anchor` `ds-menu` `ds-menu__item` | `--danger` | `[aria-haspopup="menu"]` 화살표·Esc | `CMP-BTN-02` |
| 입력 | `ds-field` `ds-input` `ds-select` `ds-textarea` `ds-search` | `--wide` | — | `CMP-INPUT` |
| 선택 | `ds-check` `ds-switch` `ds-segmented` `ds-fieldset` `ds-options` | `--row` | 묶음 버튼 화살표 이동 | `CMP-SEL` |
| 표 | `ds-table-wrap` `ds-table` `ds-sort` `ds-table__select` `ds-hit` `ds-num` | 틀 `--scroll`(긴 표: 높이 제한 + 안에서 스크롤, 머리가 틀 위에 붙음) · `--page`(페이지 스크롤: 머리가 머리줄 아래에 붙음, 가로로 넘치지 않는 표만) · 표 `--stack`(767 이하에서 행을 쌓고, 머리는 전체 고르기 + 정렬 버튼 띠로 남긴다) | 정렬 머리 `DS.sort`, 화면에서 정렬 `data-ds-sort-client`, 주소 `data-url-key` | `CMP-TABLE` |
| 탭 | `ds-tabs` `ds-tab` `ds-tabpanel` | — | 화살표·Home·End, 주소 `data-url-key` | `CMP-NAV-12` |
| 배지·개수·칩 | `ds-badge` `ds-count` `ds-chip` | 배지 `--accent` `--info` `--success` `--warning` `--danger` · 칩 `--input` | `.ds-chip[aria-pressed]` 를 누르면 켜고 끄고 `ds:toggle` 을 보낸다 | `CMP-SEL-08` `CMP-SEL-09` |
| 알림 배너 | `ds-banner-slot` `ds-banner` | `--success` `--warning` `--danger` | `DS.banner.show` · `dismiss` | `CMP-FB` `STA-09` |
| 빈 상태 | `ds-empty` | `--center` | — | `STA` |
| 로딩 | `ds-skeleton` `ds-spinner` `ds-progress` `ds-loading` | 스켈레톤 `--short` `--medium` `--title` `--value` `--circle` · 멈춘 견본 `.is-static` | `DS.busy` · `DS.loadingTimer`(둘 다 0.3초 지연·0.4초 유지) | `CMP-FB-07`~`10` `MOT-07` `MOT-14` |
| 대화상자 | `<dialog class="ds-dialog">` | `--sm` | `DS.dialog.open` · `[data-ds-dialog]` · `[data-ds-close]` | `CMP-OVL` |
| 페이지 나누기 | `ds-pagination` | 480 이하 "3 / 13쪽" | — | `CMP-TABLE-09` |
| 툴팁 | `[data-ds-tip="…"]` | — | 마우스 올림·포커스·Esc. 스크롤하면 마우스 툴팁은 닫고 포커스 툴팁은 따라간다 | WCAG 1.4.13 |
| 카드·지표·목록 | `ds-card` `ds-grid` `ds-stat` `ds-list` `ds-dl` `ds-avatar` `ds-steps` | `ds-card--flush` | — | `SHP-06` `CMP-LIST` |

### 스크립트(`js/ds.js`)

일반 스크립트 하나다(`<script src="js/ds.js" defer>`). 전역 이름은 `DS` 하나다. 속성만 달면 저절로 연결되는 것과 샘플 코드가 부르는 함수가 있다.

| 하는 일 | 속성으로 연결 | 함수·이벤트 |
|---|---|---|
| live 영역 알림 | `#ds-live`(status) · `#ds-live-alert`(alert)를 처음부터 둔다. 없으면 시작할 때 만든다 | `DS.announce(text, { assertive })` |
| 알림 배너 | `.ds-banner-slot`, 닫기 `[data-ds-dismiss]`, 다음 포커스 `data-focus-next`, 겹치는 안내 `data-replaces` | `DS.banner.show({ id, tone, title, text, actions, focusNext, replaces })` · `DS.banner.dismiss(el)` · `ds:banner-dismiss` |
| 주소 상태 | 탭·묶음 버튼·표의 `data-url-key` | `DS.url.get(key)` · `DS.url.set({ key: 값 })`(값이 비면 지움, 기록은 늘리지 않음) · `DS.url.onChange(fn)` |
| 대화상자 | 여는 버튼 `[data-ds-dialog="id"]`, 닫는 버튼 `[data-ds-close="값"]`, 첫 포커스 `[data-ds-initial-focus]`, 가림막 눌러 닫기 `data-ds-light-dismiss` | `DS.dialog.open(dlg, opener)` · `DS.dialog.close(dlg, 값)` — Tab 가두기, Esc, 연 요소로 포커스 |
| 탭·묶음 버튼 | `role="tablist"` + `role="tab"`(`aria-controls`), `role="radiogroup"` + `role="radio"`(`data-value`) | 화살표·Home·End, `ds:tabchange` · `ds:change` |
| 정렬 머리 | `<th><button class="ds-sort" data-key="이름">` | `DS.sort.apply(table, key, dir)` · `ds:sort` — 화면낭독기에 "건수 오름차순으로 정렬했어요" |
| 툴팁 | `data-ds-tip="글"` | 마우스 올림 0.4초 뒤·키보드 포커스에 뜨고, 툴팁 위로 옮겨도 남고, Esc 로 닫힌다. 스크롤·창 크기 바뀜에 마우스로 띄운 툴팁은 닫히고, 키보드 포커스로 띄운 툴팁은 남아 자리만 다시 잡는다 |
| 메뉴 | `aria-haspopup="menu"` + `aria-controls`, 항목 `role="menuitem"` | ↓↑ Home End Esc, 바깥 누르면 닫힘 |
| 옆 메뉴 서랍 | 머리줄 `[data-ds-nav-toggle]`, 서랍 안 `[data-ds-nav-close]` | `DS.nav.open()` · `DS.nav.close()` — 열리면 나머지는 `inert`, Esc 로 닫힘 |
| 옆 패널 | 여는 버튼 `[data-ds-panel="패널 id"]`(+ `aria-controls` · `aria-expanded`), 닫는 버튼 `[data-ds-panel-close]`, 패널 `.ds-app__panel[data-url-key][data-url-value]` | `DS.panel.open(panel, { opener })` · `DS.panel.close(panel)` · `DS.panel.toggle(panel)` · `ds:panel-open` · `ds:panel-close` — 열림을 주소에 남기고(`?panel=값`) 다시 열면 되살린다. 1279 이하에서 덮을 때는 뒤를 `inert` 로 하고 가림막을 깔며 포커스를 패널로 옮긴다. Esc·가림막으로 닫고, 닫으면 연 버튼으로 돌아간다 |
| 테마 | `[data-ds-theme-control]`(묶음 버튼이나 select) | `DS.theme.set('light' 또는 'dark' 또는 'system')` · `ds:themechange` |
| 글꼴 | — | `DS.fonts.ensureText(text)` — page subset 에 없는 글자가 있으면 다이나믹 서브셋을 붙인다(입력 글자도 본다) |
| 로딩 | 버튼 `data-busy-label="저장 중…"` | `DS.busy(btn, true)` 는 바로 다시 누르지 못하게 막고(`data-ds-pending`), 0.3초가 지나도 안 끝났을 때만 회전 표시와 글자를 보인다. `DS.busy(btn, false)` 는 보였던 경우 0.4초를 채운 뒤 되돌리고 Promise 를 돌려준다(`.then(결과 보이기)`). `DS.busy(btn, true, { delay: 0 })` 로 바로 보일 수 있다. 영역 로딩은 `DS.loadingTimer(onShow, onHide)`(같은 지연·유지). 로딩 버튼은 변형 색을 유지한다 |
| 아이콘 | `<svg class="ds-icon"><use href="#ds-i-이름"></use></svg>` | `DS.icon('이름')` · `DS.icons`(이름 목록) |
| 그 밖 | `aria-disabled="true"` 요소는 눌러도 동작하지 않는다(포커스·툴팁은 받는다) | `DS.focusNext(el)` · `DS.ready(fn)` |

- 부품 모음 페이지가 상태를 멈춰 보여 줄 때만 `.is-hover` · `.is-focus` · `.is-selected` · `.is-current` · `.is-disabled` 를 쓴다. 업무 화면 샘플은 쓰지 않는다.

### 상태 지원표

○ 지원 · — 해당 없음. "고대비"는 강제 색 모드에서 선택·켜짐 표시가 남는지다.

| 부품 | 기본 | 마우스 올림 | 포커스 | 비활성 | 오류 | 로딩 | 빈 상태 | 고른·켜진 | 고대비 |
|---|---|---|---|---|---|---|---|---|---|
| 버튼 | ○ | ○ | ○ | ○ `disabled` · `aria-disabled`(고대비에서 GrayText) | — | ○ `aria-busy`(0.3초 지연) | — | — | ○ |
| 분할 버튼·메뉴 | ○ | ○ | ○ | ○ | — | — | — | ○ `aria-expanded` | ○ |
| 글 입력·여러 줄 | ○ | ○ | ○ | ○ | ○ `aria-invalid` | — | — | — | ○ |
| 고르기 상자 | ○ | ○ | ○ | ○ | ○ | — | — | — | ○ |
| 체크박스·라디오 | ○ | ○ | ○ | ○ | ○ | — | — | ○ | ○ |
| 스위치 | ○ | ○ | ○ | ○ | — | — | — | ○ | ○ |
| 묶음 버튼 | ○ | ○ | ○ | ○ | — | — | — | ○ `aria-checked` | ○ |
| 표 | ○ | ○ 행 | ○ | — | — | ○ 스켈레톤 행(높이 같음) | ○ 빈 행 | ○ 고른 행(고르기 칸이 체크되면 저절로, `.is-selected` 도 됨) | ○ |
| 정렬 머리 | ○ | ○ | ○ | — | — | — | — | ○ `aria-sort` | ○ |
| 탭 | ○ | ○ | ○ | — | — | — | — | ○ `aria-selected` | ○ |
| 칩 | ○ | ○ | ○ | ○ | — | — | — | ○ `aria-pressed` | ○ |
| 알림 배너 | ○ | — | ○ 안의 버튼 | — | ○ `--danger` | — | — | — | ○ |
| 페이지 나누기 | ○ | ○ | ○ | ○ | — | — | — | ○ `aria-current` | ○ |
| 옆 메뉴 | ○ | ○ | ○ | — | — | — | — | ○ `aria-current` | ○ |
| 옆 패널 | ○ | — | ○ 연 버튼으로 되돌림 | — | — | — | — | ○ `aria-expanded` · 주소 | ○ |
| 대화상자 | ○ | — | ○ 가두기 | — | — | — | — | — | ○ |
| 툴팁 | ○ | ○ | ○ | — | — | — | — | — | ○ |

### 반복 지적에서 온 부품 규칙

이번 회차(2026-11-17) 샘플 9개 검수 보고서 10절에서 두 번 넘게 나온 지적을 부품에 넣었다.

| 규칙 | 부품이 하는 일 | 샘플이 할 일 |
|---|---|---|
| live 영역은 늘 렌더링한다(`STA-12`) | `ds.js` 가 시작할 때 `#ds-live`(status)·`#ds-live-alert`(alert)를 만들어 둔다. `.ds-live` 는 `display:none` 이 아니다 | 알림은 `DS.announce(text)` 로만 보낸다. live 영역을 숨기거나 새로 만들지 않는다 |
| 배너 버튼을 누른 뒤 포커스를 다음 자리로 | `DS.banner.dismiss` 가 `data-focus-next`(없으면 문서 순서상 다음 자리)로 포커스를 옮긴다 | 배너를 띄울 때 `focusNext` 로 다음에 할 일 자리를 준다 |
| 스크롤 영역 안에 알림 배너를 두지 않는다 | 배너 자리 `.ds-banner-slot` 은 페이지 머리 아래에 둔다. 화면 밖이면 `DS.banner.show` 가 보이는 곳까지 스크롤한다 | 표·패널·대화상자 몸통 같은 스크롤 영역 안에 배너를 넣지 않는다 |
| 같은 안내 문장 두 번 금지 | `DS.banner.show({ replaces })` 가 배너가 있는 동안 같은 뜻의 상시 안내를 숨긴다 | 화면 안 문장을 한 번만 쓴다. 배너와 상시 안내가 겹치면 `replaces` 를 쓴다 |
| 고대비(강제 색) 모드에서 선택 표시 유지(`CMP-SEL-04`) | 고른 메뉴·묶음 버튼·칩·쪽 번호·목록 행은 `Highlight` 테두리, 고른 탭은 `Highlight` 막대, 고른 행은 `Highlight` 위아래 선, 스위치는 시스템 색 | 고른 상태를 바탕색만으로 만들지 않는다. 새 부품도 `@media (forced-colors: active)` 를 둔다 |
| 수량은 아라비아 숫자(`WRT-FMT-01`) | 부품 문구가 숫자로 쓴다("3 / 13쪽", "248개 중 1–20") | "다섯 곳" 대신 "5곳". 제스처 이름("두 손가락")은 예외 |
| 영문·숫자 뒤 조사는 붙여 쓴다 | — | "PDF로 받기", "3D로 보기"(띄어 쓰지 않는다) |

## Do's and Don'ts

| 한다 | 하지 않는다 |
|---|---|
| 강조색 채움은 영역마다 주 행동 하나에만 쓴다(`CLR-07`·`CMP-BTN-02`) | 머리줄·옆 메뉴 바탕을 강조색으로 칠한다(`CLR-08`) |
| 버튼은 결과를 말하는 동사로 쓴다: "보고서 3개 지우기", "변경 내용 저장" | "확인"·"제출"·질문형 버튼, 버튼 끝 `→`(`CMP-BTN-10`·`SLOP-09`) |
| 대화상자의 보조 버튼은 "닫기"로 쓴다(`CMP-OVL-09`) | 대화상자에 "취소" 버튼 |
| 행 상세·깊은 편집은 옆 패널로 연다(`CMP-TABLE-05`) | 행 편집을 모달로 연다 |
| 실패는 닫을 때까지 남는 배너로 알린다(`STA-09`) | 토스트를 기본 알림으로 쓴다(`CMP-FB-01`) |
| 필터·탭·정렬·쪽 번호를 주소에 남긴다(`CMP-TABLE-09`) | 새로고침하면 필터가 사라진다 |
| 로딩 표시는 300ms 뒤에 보이고 400ms 는 남긴다(`CMP-FB-08`) | 1초 안에 끝나는 일에 회전 표시를 깜빡인다 |
| 빈 화면에 채우는 행동 하나를 둔다 | 빈 표에 머리줄만 남긴다 |
| 이유를 보여야 하는 비활성 버튼은 `aria-disabled="true"` + 툴팁 | `disabled` 버튼에 툴팁(마우스 올림이 오지 않는다) |
| 카드는 테두리로 나눈다 | 카드 안 카드, 카드 한쪽 두꺼운 색 테두리, 얇은 테두리 + 넓게 퍼진 그림자(`SHP-06`·`SHP-07`) |
| 화면 문구는 해요체, 수량은 아라비아 숫자 | 합니다체와 해요체를 섞는다, 지어낸 사람 이름·전화번호(`SLOP-12`) |
| 토큰 변수만 쓴다. 새 값이 필요하면 이 문서와 `tokens.css` 에 먼저 더한다 | hex·px·`rgb()` 를 샘플 CSS 에 쓴다(정적 점검 W1~W3), `!important`, 숫자 z-index |
| 움직임은 `transform`·`opacity` 만 쓴다. 색·너비는 바로 바꾼다(`MOT-05`) | 마우스 올림 색 전환, 진행 막대 너비 애니메이션 |
| 5초 넘게 보이는 회전 표시·스켈레톤 견본은 `.is-static` 으로 멈춘다. 스켈레톤은 4번(4.8초)만 옅어진다(`MOT-14`) | 멈춤 수단 없이 계속 도는 표시 |
| 「필터 초기화」처럼 테두리 없는 글자 버튼(`ds-btn--ghost`)은 도구 줄·표 머리 같은 묶음 안에서만 쓴다 | 본문 한가운데 홀로 둔 ghost 버튼(버튼인지 알아보기 어렵다, `CMP-BTN-12`) |
| 움직임 줄이기 설정에서 위치·크기 움직임을 뺀다(`CMP-OVL-12`) | 보라·남보라 그라데이션, 그라데이션 글자, 튀는 움직임, 반짝이는 스켈레톤(`SLOP-01`·`SLOP-11`·`CMP-FB-10`) |

**허용 목록** — AI 티 검사(`SLOP`)·정적 점검에서 위반으로 세지 않는 이 저장소의 값이다.

| 값 | 이유 |
|---|---|
| `tokens.css` 안의 hex·`rgb()`·px | 토큰 정의 파일이다. 정적 점검은 이 파일을 빼고 센다 |
| `@media` 조건 줄의 px(480·768·1024·1280) | 미디어 쿼리 조건에는 CSS 변수를 쓸 수 없다(static-checks W3 예외) |
| 옆 메뉴 서랍의 `visibility` 전환(0초, 닫힐 때 `transform` 이 끝난 뒤 숨김) | 애니메이션이 아니라 닫힌 서랍을 포커스 순서에서 빼는 시점 맞춤이다. 움직이는 속성은 `transform` 하나다(`MOT-05`) |
| `js/ds.js` 의 `style.transform` 위치 계산(툴팁) | 화면 좌표라 토큰으로 둘 수 없다 |
| 스켈레톤 너비 비율(40%·45%·50%·65%) | 길이가 아니라 줄 모양 비율이다 |
| SVG `stroke-width` 1.5·1.75·2.5·3 | 아이콘 선 굵기(단위 없음)다 |
| 글꼴 Pretendard 의 라틴 글자(Inter 기반) | 글꼴 목록 앞이 한글 글꼴이다(static-checks S10 보정) |

## Responsive Behavior

| 폭 | 옆 메뉴 | 본문 | 표·목록 | 옆 패널 |
|---|---|---|---|---|
| 320–479 | 서랍 | 1열, 좌우 16 | 가로 스크롤 또는 `ds-table--stack` 쌓기(머리는 정렬 띠, `--scroll` 높이 제한 풀림). 쪽 번호는 "3 / 13쪽" | 전체 폭으로 덮음(뒤 `inert`) |
| 480–767 | 서랍 | 1열, 좌우 16 | 가로 스크롤 또는 쌓기 | 전체 폭으로 덮음(뒤 `inert`) |
| 768–1023 | 서랍 | 1열, 좌우 24 | 표 | 360 으로 덮음(뒤 `inert`) |
| 1024–1279 | 왼쪽 240 | 본문 | 표 | 360 으로 덮음(뒤 `inert`) |
| 1280 이상 | 왼쪽 240 | 본문(최대 1280) | 표 | 오른쪽 360 에 붙음(비모달) |

- 표 머리 고정(`CMP-TABLE-02`): 표 틀(`ds-table-wrap`)은 가로로 넘치면 스크롤하는 영역이라, 머리는 틀 안에서만 붙는다. 행이 많은 표는 `ds-table-wrap--scroll` 로 높이를 제한해 틀 안에서 스크롤하게 한다. 페이지와 함께 스크롤하는 표는 `ds-table-wrap--page` 를 쓴다 — 머리가 머리줄 아래(`--ds-size-topbar`)에 붙지만 넘친 칸은 잘리므로 열이 적은 표에만 쓰고 좁은 폭은 `--stack` 과 함께 쓴다.

- 글자 200%(브라우저 글자 크기 32px)에서 가로로 넘치지 않아야 한다. 크기·간격이 rem 이라 함께 커진다. 표는 표 틀 안에서만 가로로 스크롤한다(`TYP-04`).
- 메뉴 항목은 폭이 바뀌어도 같다. 보이는 모양만 바뀐다(`CMP-NAV-11`).

## Agent Prompt Guide

1. 화면을 만들기 전에 이 파일, `docs/platform.md`, 화면 설계서(`<slug>/docs/ui/<화면>.md`)를 읽는다. 부품은 `design-system/index.html` 에서 고른다.
2. `<slug>/sample.config.json` 에 `"kit": "app"` 을 두고, kit 의 `css/tokens.css` → `base.css` → `components.css` → 샘플 `css/page.css` 순서로 부른다. kit 파일을 샘플 폴더에 복사해 고치지 않는다.
3. 색·간격·글자·반경·움직임·쌓임 순서는 `--ds-*` 변수만 쓴다. 없는 값이 필요하면 샘플 CSS 맨 위 `:root` 에 `--<slug>-*` 로 두고 설계서에 이유를 적는다.
4. 알림은 `DS.announce`·`DS.banner`, 상태는 `DS.url`, 대화상자는 `DS.dialog`, 옆 패널은 `DS.panel`, 로딩은 `DS.busy` 를 쓴다. live 영역·포커스 이동·로딩 지연을 따로 만들지 않는다. 표 고르기 칸은 `label.ds-hit` 로 감싼다.
5. 문구는 해요체·아라비아 숫자·영문 뒤 조사 붙여 쓰기. 같은 안내 문장을 두 번 두지 않는다.

## Wiki Rules

| 규칙 ID | 적용 | 예외 이유 |
|---|---|---|
| `TOK-01` 원본 JSON 하나에서 생성 | 예외 | 이 저장소는 빌드 단계 없이 파일을 복사해 조립한다. `shared/app/css/tokens.css` 하나가 원본이다. 값은 ui-design-wiki DTCG 원본(2026-11-09)에서 옮겼다 |
| `TOK-02` 3계층 | 부분 적용 | 원시 단계(gray-1~12 등)는 이 문서의 색 표와 `tokens.css` 주석에만 둔다. CSS 변수는 semantic 만 있다 |
| `TOK-03` 대상-역할-변형 이름 | 적용 | 색은 `surface`·`fg`·`fill`·`line`. 글자·간격은 기존 샘플 관례(`-size`·`-leading`, `space-N`)를 따른다 |
| `TOK-07` 테마·밀도 이름 같음 | 적용 | — |
| `TOK-10` 대비 검사 | 적용 | 빌드 대신 문서 작성 때 계산(51쌍 × 2테마) |
| `CLR-DARK-01` 라이트 기본 | 적용 | 어두운 UI 한 벌만 두는 화면은 Colors 절 예외 |
| `TYP-02` B2B 웹 14/20 | 적용 | — |
| `SPC-07` 터치 44 | 적용 | `(pointer: coarse)` 에서 컨트롤 높이를 44 로 |
| `CMP-FB-06` 느낌표는 오류만 | 적용 | 경고 배너는 정보 아이콘 |
| `CMP-OVL-09` "닫기" | 적용 | — |
| `CMP-TABLE-02` 머리 고정 | 적용 | `ds-table-wrap--scroll`(틀 안) · `--page`(머리줄 아래) 중 고른다 |
| `MOT-05` transform·opacity 만 | 적용 | 서랍 `visibility` 0초 전환만 허용 목록 |
| `MOT-07` 로딩 0.3초 지연·0.4초 유지 | 적용 | `DS.busy`·`DS.loadingTimer` 기본값 |
| `MOT-14` 5초 넘는 움직임 멈춤 | 적용 | 스켈레톤 4번, 견본은 `.is-static`, 움직임 줄이기에서 회전 표시 멈춤 |
| `WRT-TONE-01` 해요체 | 적용 | 이 문서·설계서는 한다체(사람이 읽는 개발 문서) |
| `WRT-FMT-01` 아라비아 숫자 | 적용 | 제스처 이름 예외 |
| `SLOP-12` 지어낸 이름·주소·번호 금지 | 부분 적용 | 샘플은 데이터 자체가 가상이다. 아래 「샘플 데이터」 규칙을 지키면 허용한다 |

## 샘플 데이터

업무 화면 샘플은 실제 서비스가 아니라 화면 견본이다. 그래서 고객·주문·대화 같은 데이터는 모두 가상이다.
`SLOP-12`(지어낸 이름·주소·번호를 화면에 남기지 않는다)는 실제 서비스 화면에 자리 채움이 남는 것을 막는 규칙이다. 샘플에서는 아래를 지키면 가상 데이터를 허용한다.

| 지킬 것 | 이유 |
|---|---|
| 가상 데이터는 샘플의 `js/data.js`(또는 `js/data-*.js`) 한 곳에만 둔다 | 화면 코드와 섞이지 않게. 자동 점검이 이 파일만 예외로 본다 |
| 화면의 바닥줄이나 머리줄에 "가상의 샘플 데이터입니다"를 한 줄 둔다 | 보는 사람이 실제 정보로 오해하지 않게 |
| 이메일은 `@example.com` 만 쓴다 | 예시용으로 예약된 도메인이다 |
| 전화번호는 `010-0000-0000` 꼴처럼 누가 봐도 가짜인 값만 쓴다 | 실제 번호와 겹치지 않게 |
| 실존 회사·브랜드·인물 이름을 쓰지 않는다 | 사칭으로 읽히지 않게 |
| lorem ipsum, "홍길동", "John Doe" 같은 판에 박힌 자리 채움은 쓰지 않는다 | 이것은 예외가 아니다. `SLOP-12` 그대로 막는다 |

## 기존 샘플과의 관계

기존 3D·2D 샘플 9개는 이 문서보다 먼저 만들어 각자 `css/tokens.css` 에 임시 토큰을 두었다. **기존 샘플은 다음 개정 때 이 문서에 맞춘다.** 이번에는 고치지 않는다.

- 이름이 겹치는 토큰은 뜻과 값이 같다: `--ds-space-1`~`12`, `--ds-radius-md`·`pill`, `--ds-font-family`, `--ds-font-weight-*`, `--ds-easing-enter`·`exit`, `--ds-opacity-disabled`, `--ds-size-hairline`·`focus-ring`·`touch`·`topbar`·`panel`·`tooltip-max`, `--ds-z-base`·`raise`·`panel`·`skip-link`, `--ds-motion-hover`·`crossfade`·`loading-delay`·`loading-min`.
- 글자 토큰(`--ds-text-*-size`·`-leading`·`-weight`·`-tracking`)은 이름이 같고 밀도에 따라 값이 다르다. 기존 샘플 값은 이 문서의 comfortable 값과 같다. 기존 샘플은 맞출 때 `<html data-density="comfortable">` 을 단다.
- 2026-11-17 에 kit 토큰과 기존 샘플 9개의 토큰을 이름으로 대조했다. 같은 이름 372쌍이 값도 같다. 값이 다른 것은 글자 토큰 7개(`--ds-text-body-size`·`-leading`, `--ds-text-label-size`·`-leading`, `--ds-text-caption-size`·`-leading`, `--ds-text-display-leading`)뿐이고, 기존 값은 모두 이 문서의 comfortable 값과 같다.

다음 개정 때 바꿀 이름:

| 기존 샘플 | 이 문서 | 비고 |
|---|---|---|
| `--ds-color-bg-canvas` · `bg-surface` | `--ds-color-surface-canvas` · `surface-default` | |
| `--ds-color-bg-subtle` · `bg-muted` · `bg-subtle-hover` | `--ds-color-surface-subtle` · `surface-subtle` · `surface-hover` | |
| `--ds-color-bg-accent-subtle` | `--ds-color-fill-accent-subtle` | |
| `--ds-color-text-primary` · `text-secondary` · `text-on-accent` | `--ds-color-fg-default` · `fg-muted` · `fg-on-accent` | |
| `--ds-color-accent` | `--ds-color-fill-accent` | 장면마다 다른 강조색은 샘플 토큰에서 같은 이름으로 덮어쓴다 |
| `--ds-color-border-subtle` · `border-strong` | `--ds-color-line-subtle` · `line-control` | |
| `--ds-color-focus-inner` · `focus-outer`, `--ds-shadow-focus` | `--ds-color-line-focus` + `outline` | 장면 위 두 겹 링은 장면 예외로 남긴다 |
| `--ds-color-tooltip-bg` · `tooltip-fg` | `--ds-color-surface-inverse` · `fg-inverse` | |
| `--ds-color-banner-bg` | `--ds-color-fill-info-subtle` 등 배너 종류별 | |
| `--ds-shadow-float` | `--ds-shadow-raised` | |
| `--ds-size-row` · `size-icon` · `size-icon-sm` | `--ds-row-height` · `--ds-icon-size-lg` · `--ds-icon-size-md` | |
| `--ds-motion-label-enter` · `label-exit` | `--ds-motion-enter` · `exit` | |
| `--ds-color-scene-*` · `here-*`, `--ds-z-scene-*`, `--ds-size-scene-*` · `dot` · `badge`, 장면 움직임(`camera`·`time-shift` 등) | 그대로 둔다 | 장면 전용 토큰은 kit 밖, 샘플 토큰에 남긴다 |

## 열린 질문과 기본안

사용자가 열린 질문을 모두 기본안으로 정하라고 맡겼다. 아래는 **기본안 채택(사용자 일괄 위임 2026-11-17)** 이다. 바꾸려면 이 표와 `tokens.css` 를 함께 고친다.

| 질문 | 고른 기본안 | 근거 |
|---|---|---|
| 강조색 | ui-design-wiki 기본 파랑 `#1a6dbc`(어두운 UI `#64a9f3`) | 기존 샘플 강조색은 장면마다 달라 하나로 모이지 않는다. 위키 기본값은 대비 검사를 거쳤다 |
| 밀도 | compact 기본, 터치 화면 44 | 업무 화면 웹(`TYP-02`·`SPC-05`·`SPC-07`) |
| 어두운 UI | 밝게 기본 + 어둡게·시스템 선택, 저장 키 `ds-theme` | `CLR-DARK-01`·`CLR-DARK-02` |
| 토큰 원본 형식 | CSS 파일 하나(`tokens.css`) | 빌드 없는 조립 구조(`docs/platform.md`). `TOK-01` 예외 |
| 스크립트 형식 | 일반 스크립트 하나(`js/ds.js`, 전역 `DS`) | 파일로 열기(`file://`)에서 ES 모듈이 막힌다 |
| 아이콘 | kit 자체 선 아이콘 39종(손으로 그림) | 외부 아이콘 세트 라이선스 표기를 늘리지 않는다 |
| 경고 아이콘 | 정보 아이콘 + 제목 글 | `CMP-FB-06`(느낌표는 오류만) |
| 좁은 폭 표 | 가로 스크롤 기본, `ds-table--stack` 선택 | 열 비교가 중요한 표는 쌓으면 비교가 어렵다 |
| 토스트 | kit 에 두지 않는다 | `CMP-FB-01`. 결과는 화면이나 배너로 보인다 |
| 기존 샘플 이전 시점 | 다음 개정 때 | 이번 작업 범위 밖, 다른 작업자가 동시에 고친다 |
