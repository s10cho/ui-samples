# UI 샘플

정적 웹 페이지로 만든 화면 샘플 모음이다. 서버 코드와 빌드 단계 없이 브라우저에서 바로 열린다.

- 공개 주소: https://s10cho.github.io/ui-samples/

## 이 저장소의 목적

이 저장소의 샘플은 디자인 시스템과 디자인 패턴을 분석하는 기준 자료다.

- 화면을 실제로 만들어 UI 요소를 모은다. UI 요소는 부품, 배치, 상태(불러오는 중·빈 화면·오류 등), 문구, 접근성 처리를 말한다.
- 디자인 시스템: 업무 화면은 공용 부품 `shared/app` 을 함께 쓴다. 토큰과 부품 규칙은 `DESIGN.md` 에 있다. 부품 견본은 `design-system/`(부품 모음)에 있다.
- 디자인 패턴: 여러 샘플에 되풀이해 나오는 화면 구성을 패턴으로 묶어 비교한다. 예: 목록과 일괄 처리, 상세와 편집, 단계별 입력, 대시보드.
- 샘플은 세 계열이다. 업무 화면(`app`), 3D 장면(`3d`), 2D 그림판(`2d`). 계열은 `samples.json` 의 `group` 값으로 나뉜다.

### 주기적인 정리

UI 요소는 한 번 모으고 끝내지 않는다. 주기적으로 다시 모아 정리한다.

- 샘플을 더하거나 공용 부품을 고치면, 새로 생긴 부품과 패턴을 `DESIGN.md` 에 반영한다.
- 샘플마다 독립 채점자가 검수한다. 검수 보고서(`<샘플>/docs/ui/review/`)에 두 번 이상 나온 지적은 부품 규칙이나 패턴 규칙의 후보로 올린다.
- 부품 규칙이 바뀌면 부품 모음 샘플도 함께 고치고 다시 검수한다.

## 샘플

<!-- samples:start -->
| 폴더 | 바로 보기 | 내용 | 검수 |
|---|---|---|---|
| `design-system/` | https://s10cho.github.io/ui-samples/design-system/ | 부품 모음 — 디자인 시스템. 업무 화면 샘플이 함께 쓰는 버튼·입력·표·탭·대화상자 같은 부품을 한 화면에 모았습니다. | 83.25 |
| `support-inbox/` | https://s10cho.github.io/ui-samples/support-inbox/ | 상담 인박스. 고객 대화 목록과 대화창, 고객 정보를 한 화면에서 다룹니다. | 93.75 |
| `order-table/` | https://s10cho.github.io/ui-samples/order-table/ | 주문 목록. 주문을 정렬·필터·검색하고, 여러 건을 골라 한꺼번에 처리합니다. | 94.5 |
| `customer-edit/` | https://s10cho.github.io/ui-samples/customer-edit/ | 고객 상세와 편집. 고객 정보를 보고 편집 모드에서 고칩니다. | 85.75 |
| `settings/` | https://s10cho.github.io/ui-samples/settings/ | 설정. 계정·알림·보안·팀 설정을 탭으로 나눴습니다. | 90.75 |
| `ops-dashboard/` | https://s10cho.github.io/ui-samples/ops-dashboard/ | 운영 대시보드. 지표 카드와 추세 그래프, 알림 목록을 보여 줍니다. | 90 |
| `booking-flow/` | https://s10cho.github.io/ui-samples/booking-flow/ | 예약 흐름. 날짜·시간 고르기부터 정보 입력, 확인, 완료까지 여러 단계로 예약합니다. | 88.25 |
| `island-park/` | https://s10cho.github.io/ui-samples/island-park/ | 바다 위 놀이공원. 바다 위 섬 하나에 놀이공원 명소 5곳을 3D로 보여 줍니다. | 94.5 |
| `city-night/` | https://s10cho.github.io/ui-samples/city-night/ | 강을 낀 작은 도시. 강을 사이에 둔 가상의 작은 도시 한 블록을 3D로 보여 줍니다. | 93.25 |
| `ski-mountain/` | https://s10cho.github.io/ui-samples/ski-mountain/ | 겨울 산 스키장. 눈 덮인 가상의 산에 만든 스키장을 3D로 보여 줍니다. | 89.5 |
| `temple-seasons/` | https://s10cho.github.io/ui-samples/temple-seasons/ | 사계절 산사 마을. 가상의 산속 절과 마을을 3D로 보여 줍니다. | 90 |
| `museum-floors/` | https://s10cho.github.io/ui-samples/museum-floors/ | 박물관 층별 안내. 가상의 4층 박물관을 층별로 펼쳐 보는 안내 화면입니다. | 100 |
| `space-station/` | https://s10cho.github.io/ui-samples/space-station/ | 지구 궤도의 작은 정거장. 지구 궤도를 도는 가상의 정거장을 3D로 보여 줍니다. | 97 |
| `island-park-iso/` | https://s10cho.github.io/ui-samples/island-park-iso/ | 바다 위 놀이공원 — 2D 그림판. 같은 섬과 명소 5곳을 2D 그림으로 다시 그렸습니다. | 90.75 |
| `city-night-iso/` | https://s10cho.github.io/ui-samples/city-night-iso/ | 강을 낀 작은 도시 — 2D 그림판. 3D 판과 같은 건물 배치를 2D 그림으로 다시 그렸습니다. | 93.25 |
| `ski-mountain-iso/` | https://s10cho.github.io/ui-samples/ski-mountain-iso/ | 겨울 산 스키장 — 2D 그림판. 3D 판과 같은 산과 명소를 2D 그림으로 다시 그렸습니다. | 93.25 |
| `kanban-board/` | https://s10cho.github.io/ui-samples/kanban-board/ | 칸반 보드. 업무 카드를 단계별 열로 나눠 보고, 카드를 다른 단계로 옮깁니다. | 82 |
| `file-manager/` | https://s10cho.github.io/ui-samples/file-manager/ | 파일 관리자. 폴더와 파일을 목록·격자로 보고 올리기·이름 바꾸기·옮기기·지우기를 합니다. | 90.75 |
| `notification-center/` | https://s10cho.github.io/ui-samples/notification-center/ | 알림 센터. 읽지 않은 알림을 묶어 보여 주고 읽음 처리와 알림 끄기를 합니다. | 88.25 |
| `search-results/` | https://s10cho.github.io/ui-samples/search-results/ | 검색 결과. 검색어와 필터로 문서·사람·업무를 찾고 결과를 정렬합니다. | 85.75 |
| `role-permissions/` | https://s10cho.github.io/ui-samples/role-permissions/ | 권한 관리. 역할마다 할 수 있는 일을 표로 정하고 구성원에게 역할을 줍니다. | 85.75 |
| `onboarding-setup/` | https://s10cho.github.io/ui-samples/onboarding-setup/ | 첫 사용 안내. 처음 가입한 팀이 작업 공간을 단계별로 꾸립니다. | 88.25 |
<!-- samples:end -->

샘플마다 폴더 하나에 코드·화면 설계서·검수 보고서가 함께 있다. 자세한 내용은 각 폴더의 `README.md` 를 본다.
모든 샘플은 화면 설계서 → 구현 → 독립 검수(만든 쪽과 다른 에이전트가 채점, 80점 이상 합격) 순서로 만들었다.

## 구조

| 경로 | 하는 일 |
|---|---|
| `index.html` | 샘플 목록 페이지 |
| `assets/` | 목록 페이지 썸네일(샘플마다 2장, 960×600). `-day` 는 기본 화면, `-night` 는 마우스를 올렸을 때 보이는 다른 시간대·날씨 |
| `<샘플>/` | 샘플 하나. 폴더 안에서 완결된다 |
| `.nojekyll` | GitHub Pages 의 Jekyll 처리를 끈다. 파일을 그대로 내보낸다 |

## 샘플 추가하기

1. 저장소 루트에 새 폴더를 만든다. 폴더 안의 경로는 모두 상대 경로로 쓴다(`/` 로 시작하지 않는다).
2. 썸네일 두 장을 `assets/<폴더>-day.webp`·`assets/<폴더>-night.webp`(960×600)로 넣는다. 두 번째 화면이 없으면 `is-night` 그림 줄을 뺀다.
3. `index.html` 의 `<ol class="samples">` 에 `<li class="sample">` 항목을 하나 더한다.
4. `main` 에 올린다. GitHub Pages 가 1~2분 안에 다시 배포한다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

브라우저에서 그 서버 주소(포트 8000)를 연다.

## 배포

GitHub Pages — `main` 브랜치 루트(`/`)를 그대로 내보낸다. 빌드 단계는 없다.
