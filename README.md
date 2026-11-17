# UI 샘플

정적 웹 페이지로 만든 화면 샘플 모음이다. 서버 코드와 빌드 단계 없이 브라우저에서 바로 열린다.

- 공개 주소: https://s10cho.github.io/ui-samples/

## 샘플

| 폴더 | 바로 보기 | 내용 |
|---|---|---|
| `island-park/` | https://s10cho.github.io/ui-samples/island-park/ | 바다 위 섬 놀이공원 3D. 낮·밤 전환, 명소 5곳 |
| `city-night/` | https://s10cho.github.io/ui-samples/city-night/ | 강을 낀 가상 도시 한 블록 3D. 해 질 녘·밤 전환 |
| `ski-mountain/` | https://s10cho.github.io/ui-samples/ski-mountain/ | 눈 덮인 산 스키장 3D. 맑음·눈 내림 전환 |
| `temple-seasons/` | https://s10cho.github.io/ui-samples/temple-seasons/ | 산속 절과 마을 3D. 봄·여름·가을·겨울 4계절 전환(라디오 그룹) |
| `museum-floors/` | https://s10cho.github.io/ui-samples/museum-floors/ | 4층 박물관 층별 안내 3D. 펼쳐 보기·쌓아 보기, 층 → 전시실 두 단계 고르기, 편의시설 표시 |
| `space-station/` | https://s10cho.github.io/ui-samples/space-station/ | 지구 궤도 정거장 3D. 어두운 UI, 지구의 낮 쪽·밤 쪽 전환 |
| `island-park-iso/` | https://s10cho.github.io/ui-samples/island-park-iso/ | island-park 를 2D 그림(SVG)으로 다시 그린 판. 라이브러리 없음, 첫 방문 약 90KB |
| `city-night-iso/` | https://s10cho.github.io/ui-samples/city-night-iso/ | city-night 를 2D 그림으로 다시 그린 판. 첫 방문 약 96KB |
| `ski-mountain-iso/` | https://s10cho.github.io/ui-samples/ski-mountain-iso/ | ski-mountain 을 2D 그림으로 다시 그린 판. 첫 방문 약 95KB |

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
