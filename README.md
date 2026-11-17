# UI 샘플

정적 웹 페이지로 만든 화면 샘플 모음이다. 서버 코드와 빌드 단계 없이 브라우저에서 바로 열린다.

- 공개 주소: https://s10cho.github.io/ui-samples/

## 샘플

| 폴더 | 바로 보기 | 내용 |
|---|---|---|
| `island-park/` | https://s10cho.github.io/ui-samples/island-park/ | 바다 위 섬 놀이공원 3D 첫 화면. Three.js, 낮·밤 전환, 명소 다섯 곳 |

샘플마다 폴더 하나에 코드·화면 설계서·검수 보고서가 함께 있다. 자세한 내용은 각 폴더의 `README.md` 를 본다.

## 구조

| 경로 | 하는 일 |
|---|---|
| `index.html` | 샘플 목록 페이지 |
| `assets/` | 목록 페이지 썸네일(샘플마다 낮·밤 2장, 960×600) |
| `<샘플>/` | 샘플 하나. 폴더 안에서 완결된다 |
| `.nojekyll` | GitHub Pages 의 Jekyll 처리를 끈다. 파일을 그대로 내보낸다 |

## 샘플 추가하기

1. 저장소 루트에 새 폴더를 만든다. 폴더 안의 경로는 모두 상대 경로로 쓴다(`/` 로 시작하지 않는다).
2. 썸네일을 `assets/<폴더>-day.webp`(960×600)로 넣는다. 밤 화면이 없으면 `is-night` 그림 줄을 뺀다.
3. `index.html` 의 `<ol class="samples">` 에 `<li class="sample">` 항목을 하나 더한다.
4. `main` 에 올린다. GitHub Pages 가 1~2분 안에 다시 배포한다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

브라우저에서 그 서버 주소(포트 8000)를 연다.

## 배포

GitHub Pages — `main` 브랜치 루트(`/`)를 그대로 내보낸다. 빌드 단계는 없다.
