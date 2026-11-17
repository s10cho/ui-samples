# UI 샘플

정적 웹 페이지로 만든 화면 샘플 모음이다. 서버 코드와 빌드 단계 없이 브라우저에서 바로 열린다.

- 공개 주소: https://s10cho.github.io/ui-samples/

## 샘플

<!-- samples:start -->
| 폴더 | 바로 보기 | 내용 | 검수 |
|---|---|---|---|
| `island-park/` | https://s10cho.github.io/ui-samples/island-park/ | 바다 위 놀이공원. 바다 위 섬 하나에 놀이공원 명소 5곳을 3D로 보여 줍니다. | 94.5 |
| `city-night/` | https://s10cho.github.io/ui-samples/city-night/ | 강을 낀 작은 도시. 강을 사이에 둔 가상의 작은 도시 한 블록을 3D로 보여 줍니다. | 93.25 |
| `ski-mountain/` | https://s10cho.github.io/ui-samples/ski-mountain/ | 겨울 산 스키장. 눈 덮인 가상의 산에 만든 스키장을 3D로 보여 줍니다. | 89.5 |
| `temple-seasons/` | https://s10cho.github.io/ui-samples/temple-seasons/ | 사계절 산사 마을. 가상의 산속 절과 마을을 3D로 보여 줍니다. | 90 |
| `museum-floors/` | https://s10cho.github.io/ui-samples/museum-floors/ | 박물관 층별 안내. 가상의 4층 박물관을 층별로 펼쳐 보는 안내 화면입니다. | 100 |
| `space-station/` | https://s10cho.github.io/ui-samples/space-station/ | 지구 궤도의 작은 정거장. 지구 궤도를 도는 가상의 정거장을 3D로 보여 줍니다. | 97 |
| `island-park-iso/` | https://s10cho.github.io/ui-samples/island-park-iso/ | 바다 위 놀이공원 — 2D 그림판. 같은 섬과 명소 5곳을 2D 그림으로 다시 그렸습니다. | 90.75 |
| `city-night-iso/` | https://s10cho.github.io/ui-samples/city-night-iso/ | 강을 낀 작은 도시 — 2D 그림판. 3D 판과 같은 건물 배치를 2D 그림으로 다시 그렸습니다. | 93.25 |
| `ski-mountain-iso/` | https://s10cho.github.io/ui-samples/ski-mountain-iso/ | 겨울 산 스키장 — 2D 그림판. 3D 판과 같은 산과 명소를 2D 그림으로 다시 그렸습니다. | 93.25 |
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
