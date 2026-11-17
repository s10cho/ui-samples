/*
 * 화면 동작 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=dock          명소 하나를 고른 상태 (habitat · lab · solar · dock · window)
 *   ?side=night           지구 밤 쪽 장면으로 시작(기본은 낮 쪽 day)
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=day|night     포스터 이미지 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { posterPlacement } from './framing.js';

const root = document.documentElement;
const params = new URLSearchParams(window.location.search);
const debug = {
  state: params.get('state'),
  poster: params.get('poster'),
  side: params.get('side'),
  select: params.get('select'),
  motion: params.get('motion'),
  quality: ['high', 'low'].includes(params.get('quality')) ? params.get('quality') : undefined,
  size: ['wide', 'medium', 'narrow'].includes(params.get('size')) ? params.get('size') : 'wide',
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const els = {
  scene: $('#scene'),
  labels: $('.scene__labels'),
  poster: $('.scene__poster'),
  posterImg: $('.scene__poster img'),
  posterSources: $$('.scene__poster source'),
  progress: $('.scene__progress'),
  controls: $('.scene__controls'),
  toggles: $('.scene__toggles'),
  motionBtn: $('[data-action="motion"]'),
  sideBtn: $('[data-action="side"]'),
  zoomIn: $('[data-action="zoom-in"]'),
  zoomOut: $('[data-action="zoom-out"]'),
  bannerRegion: $('.banner-region'),
  landmarksHead: $('#landmarks'),
  announcer: $('[data-announcer]'),
  backdrop: $('.panel-backdrop'),
  landmarkButtons: $$('.landmark'),
  details: $$('[data-detail]'),
};

const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
const ms = (name) => parseFloat(cssVar(name)) || 0;
const MOTION = {
  camera: ms('--ds-motion-camera'),
  cameraStep: ms('--ds-motion-camera-step'),
  sideShift: ms('--ds-motion-side-shift'),
  crossfade: ms('--ds-motion-crossfade'),
  loadingDelay: ms('--ds-motion-loading-delay'),
  loadingMin: ms('--ds-motion-loading-min'),
  loadingSlow: ms('--ds-motion-loading-slow'),
  contextRestore: ms('--ds-motion-context-restore'),
  hintHold: ms('--ds-motion-hint-hold'),
};

const COPY = {
  motionStop: '움직임 멈추기',
  motionStart: '움직임 다시 켜기',
  toNight: '지구 밤 쪽으로 가기',
  toDay: '지구 낮 쪽으로 가기',
  progress: '정거장을 그리는 중이에요',
  slow: '연결이 느려 3D 장면 파일을 받는 데 시간이 걸려요. 목록은 지금 볼 수 있어요.',
  slowAction: '3D 없이 보기',
  failed: '이 브라우저에서는 3D 장면을 그릴 수 없어요. 목록에서 명소를 고르면 설명을 볼 수 있어요.',
  lost: '3D 장면이 멈췄어요. 다시 그리면 이어서 볼 수 있어요.',
  lostAction: '다시 그리기',
  closeBanner: '알림 닫기',
  viewing: (name) => `${name} 보는 중`,
  altDay: '지구 낮 쪽 위를 도는 작은 정거장. 거주 모듈, 실험실 모듈, 태양 전지판, 도킹 포트, 관측 창이 있는 3D 장면',
  altNight:
    '지구 밤 쪽 위를 도는 작은 정거장. 아래로 도시 불빛이 보이고 거주 모듈, 실험실 모듈, 태양 전지판, 도킹 포트, 관측 창에 불이 켜진 3D 장면',
};
const altOf = (side) => (side === 'night' ? COPY.altNight : COPY.altDay);

const LANDMARKS = els.landmarkButtons.map((button) => ({
  id: button.dataset.id,
  name: $('.landmark__name', button).textContent.trim(),
}));
const nameOf = (id) => LANDMARKS.find((l) => l.id === id)?.name ?? '';

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);

const state = {
  mode: 'loading',
  selected: null,
  side: debug.side === 'night' || debug.poster === 'night' ? 'night' : 'day',
  reduced: reducedQuery.matches,
  motion: debug.motion !== 'off' && !reducedQuery.matches && !debug.poster,
};

let scene = null;
let sceneModule = null;
let abandoned = false;
let lostTimer = 0;
let lostTested = false;
/** 장면·정보 패널·버튼 묶음 크기가 바뀌면(창 크기·글자 확대) 포스터 자리와 빈 자리를 다시 계산한다 */
const layoutObserver = new ResizeObserver(() => {
  placePoster();
  scene?.relayout();
});

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function setMode(mode) {
  state.mode = mode;
  root.dataset.mode = mode;
  syncSceneImage();
}

const setAriaHidden = (el, hidden) => {
  if (hidden) el.setAttribute('aria-hidden', 'true');
  else el.removeAttribute('aria-hidden');
};

/**
 * 장면 그림을 접근성 트리에 하나만 둔다 — 캔버스(role=img)와 포스터 img 는 대체 텍스트가 같다.
 * 3D가 보이는 ready 에서는 캔버스를, 그 밖(loading·lost·fallback)에서는 포스터를 남긴다.
 * 캔버스는 장면을 만들 때 새로 생기므로 boot() 의 MutationObserver 도 이 함수를 부른다.
 */
function syncSceneImage() {
  const ready = state.mode === 'ready';
  $$('.scene__canvas', els.scene).forEach((canvas) => setAriaHidden(canvas, !ready));
  setAriaHidden(els.poster, ready);
}

/* ---------- 화면낭독기 알림 ---------- */

function announce(text) {
  els.announcer.textContent = '';
  if (text) requestAnimationFrame(() => (els.announcer.textContent = text));
}

/* ---------- 명소 선택 ---------- */

function renderSelection() {
  els.landmarkButtons.forEach((button) => {
    if (button.dataset.id === state.selected) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  const current = state.selected ?? 'intro';
  els.details.forEach((item) => item.classList.toggle('is-current', item.dataset.detail === current));
  scene?.setSelected(state.selected);
}

/** 고른 명소를 주소에 남긴다 — 새로고침·공유해도 같은 명소가 열린다(PLT-WEB-10) */
function syncUrl() {
  const url = new URL(window.location.href);
  if (state.selected) url.searchParams.set('select', state.selected);
  else url.searchParams.delete('select');
  try {
    window.history.replaceState(null, '', url);
  } catch {
    // file:// 로 연 페이지는 주소를 바꿀 수 없다(브라우저 보안 제한). 선택은 화면에만 남는다.
  }
}

function select(id) {
  if (!LANDMARKS.some((l) => l.id === id)) return;
  state.selected = id;
  renderSelection();
  syncUrl();
  announce(COPY.viewing(nameOf(id)));
  if (scene && state.mode === 'ready') scene.focus(id);
}

function resetView() {
  const hadSelection = state.selected !== null;
  state.selected = null;
  renderSelection();
  syncUrl();
  if (scene && state.mode === 'ready') scene.reset();
  if (hadSelection) announce('');
}

/* ---------- 토글 ---------- */

function renderMotion() {
  els.motionBtn.textContent = state.motion ? COPY.motionStop : COPY.motionStart;
  scene?.setMotion(state.motion);
}

function posterPath(side, size) {
  return `assets/poster-${side}-${size}.webp`;
}

function renderPoster() {
  els.posterSources.forEach((source) => {
    source.srcset = posterPath(state.side, source.dataset.size);
  });
  els.posterImg.src = posterPath(state.side, 'narrow');
  els.posterImg.alt = altOf(state.side);
}

const mediumQuery = window.matchMedia(`(min-width: ${BREAKPOINT.medium}px)`);

/** 지금 폭 구간의 포스터 — <picture> 의 source 조건과 같다 */
function posterSizeNow() {
  if (wideQuery.matches) return 'wide';
  return mediumQuery.matches ? 'medium' : 'narrow';
}

/** 포스터를 3D 첫 화면과 같은 배율·중심에 놓는다. 다 덮지 못하면 CSS 의 cover 로 둔다 */
function placePoster() {
  if (debug.poster) return;
  const width = els.scene.clientWidth;
  const height = els.scene.clientHeight;
  if (!width || !height) return;
  // 캐시된 옛 포스터처럼 원본 크기가 토큰과 다르면 배율이 틀리므로 배치하지 않는다
  const size = posterSizeNow();
  const img = els.posterImg;
  if (img.naturalWidth && img.naturalWidth !== POSTER[size].width) {
    els.poster.classList.remove('is-placed');
    return;
  }
  const place = posterPlacement(size, width, height, sceneInsets());
  els.poster.classList.toggle('is-placed', Boolean(place));
  if (!place) return;
  Object.entries(place).forEach(([key, value]) => {
    els.poster.style.setProperty(`--poster-${key}`, `${value.toFixed(1)}px`);
  });
}

/** 보이는 툴팁이 있으면 닫는다(WCAG 1.4.13 Dismissible). 닫았으면 true */
function dismissTooltips() {
  const open = $$('.tooltip', els.controls).some((tip) => getComputedStyle(tip).visibility === 'visible');
  if (!open) return false;
  els.controls.classList.add('is-tip-dismissed');
  $$('.icon-btn.is-tip', els.controls).forEach((button) => button.classList.remove('is-tip'));
  return true;
}

function renderSide(animate) {
  root.dataset.side = state.side;
  els.sideBtn.textContent = state.side === 'night' ? COPY.toDay : COPY.toNight;
  renderPoster();
  scene?.setSide(state.side, animate);
}

/* ---------- 시점 버튼 ---------- */

function setLimit(button, atLimit) {
  const tip = $('.tooltip', button);
  button.setAttribute('aria-disabled', atLimit ? 'true' : 'false');
  tip.textContent = atLimit ? tip.dataset.limit : button.getAttribute('aria-label');
  if (atLimit) button.setAttribute('aria-describedby', tip.id);
  else button.removeAttribute('aria-describedby');
}

function onZoomLimits({ atMin, atMax }) {
  setLimit(els.zoomIn, atMin);
  setLimit(els.zoomOut, atMax);
}

function onControl(action) {
  if (!scene || state.mode !== 'ready') return;
  if (action === 'rotate-left') scene.rotateStep(1);
  else if (action === 'rotate-right') scene.rotateStep(-1);
  else if (action === 'zoom-in') scene.zoomStep(1);
  else if (action === 'zoom-out') scene.zoomStep(-1);
  else if (action === 'reset') resetView();
}

/* ---------- 배너 · 진행 문구 ---------- */

function makeButton(className, label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = label;
  return button;
}

const isShown = (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';

/**
 * 배너를 지우거나 바꾸기 직전에 부른다. 누른 버튼이 배너와 함께 사라지면 포커스가 body 로 떨어진다.
 * 포커스가 배너 안에 있었으면 장면 토글 가운데 보이는 첫 버튼으로, 그런 버튼이 없으면 명소 목록 머리(tabindex="-1")로 옮긴다.
 */
function moveFocusAfterBanner() {
  if (!els.bannerRegion.contains(document.activeElement)) return;
  const toggle = $$('button', els.toggles).find(isShown);
  (toggle ?? els.landmarksHead).focus();
}

function hideBanner() {
  moveFocusAfterBanner();
  els.bannerRegion.replaceChildren();
}

function showBanner({ text, action, onAction }) {
  const banner = document.createElement('div');
  banner.className = 'banner';
  const body = document.createElement('div');
  body.className = 'banner__body';
  const message = document.createElement('p');
  message.className = 'banner__text';
  message.textContent = text;
  body.append(message);
  if (action) {
    const actionButton = makeButton('btn', action);
    actionButton.addEventListener('click', onAction);
    body.append(actionButton);
  }
  const close = makeButton('icon-btn icon-btn--plain banner__close', '');
  close.setAttribute('aria-label', COPY.closeBanner);
  close.innerHTML =
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  close.addEventListener('click', hideBanner);
  banner.append(body, close);
  moveFocusAfterBanner();
  els.bannerRegion.replaceChildren(banner);
}

let progressTimer = 0;
let progressShownAt = 0;

function scheduleProgress() {
  clearTimeout(progressTimer);
  progressTimer = setTimeout(() => {
    els.progress.textContent = COPY.progress;
    progressShownAt = performance.now();
  }, MOTION.loadingDelay);
}

async function clearProgress() {
  clearTimeout(progressTimer);
  if (progressShownAt) {
    const remaining = MOTION.loadingMin - (performance.now() - progressShownAt);
    if (remaining > 0) await wait(remaining);
  }
  els.progress.textContent = '';
  progressShownAt = 0;
}

/* ---------- 포스터와 장면 교체 ---------- */

function showPosterNow() {
  els.poster.classList.remove('is-fading');
  els.poster.hidden = false;
}

function revealScene() {
  els.poster.classList.add('is-fading');
  setTimeout(() => {
    if (state.mode === 'ready') els.poster.hidden = true;
  }, state.reduced ? 0 : MOTION.crossfade);
}

/* ---------- 3D 없음 · 장면 멈춤 ---------- */

function enterFallback(message) {
  setMode('fallback');
  clearProgress();
  showPosterNow();
  if (message) showBanner({ text: message });
  else hideBanner();
}

function skip3D() {
  abandoned = true;
  enterFallback(null);
}

function onSlow() {
  if (state.mode !== 'loading') return;
  clearProgress();
  showBanner({ text: COPY.slow, action: COPY.slowAction, onAction: skip3D });
}

function onContextLost() {
  setMode('lost');
  showPosterNow();
  clearTimeout(lostTimer);
  lostTimer = setTimeout(() => {
    showBanner({ text: COPY.lost, action: COPY.lostAction, onAction: redraw });
  }, MOTION.contextRestore);
}

function onContextRestored() {
  clearTimeout(lostTimer);
  hideBanner();
  setMode('ready');
  revealScene();
}

async function redraw() {
  hideBanner();
  clearTimeout(lostTimer);
  scene?.dispose();
  scene = null;
  setMode('loading');
  scheduleProgress();
  try {
    await startScene();
  } catch (error) {
    console.error(error);
    enterFallback(COPY.failed);
  }
}

/* ---------- 장면 시작 ---------- */

function supportsWebGL2() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return Boolean(gl);
  } catch {
    return false;
  }
}

/**
 * 장면에서 정거장을 맞출 빈 자리를 뺀 나머지(px) — 설계서 3절 끝 "처음 시점의 빈 자리".
 * left: 넓은 폭에서 정보 패널이 가리는 너비. top: 장면 토글 묶음의 아래 끝. bottom: 시점 버튼 묶음의 위 끝.
 * 버튼 묶음은 글자를 키우면 두 줄이 되므로 실제 크기를 잰다. 로딩 중에도 자리를 차지한다(visibility).
 */
function sceneInsets() {
  // 포스터 촬영 모드는 중심점을 캔버스 가운데에 두고 찍는다(js/framing.js)
  if (debug.poster) return { left: 0, top: 0, bottom: 0 };
  const box = els.scene.getBoundingClientRect();
  const toggles = els.toggles.getBoundingClientRect();
  const controls = els.controls.getBoundingClientRect();
  return {
    left: wideQuery.matches ? els.backdrop.getBoundingClientRect().right - box.left : 0,
    top: toggles.height > 0 ? Math.max(0, toggles.bottom - box.top) : 0,
    bottom: controls.height > 0 ? Math.max(0, box.bottom - controls.top) : 0,
  };
}

async function startScene() {
  sceneModule = sceneModule || (await import('./scene/scene.js'));
  if (abandoned) return;
  const created = await sceneModule.createScene({
    container: els.scene,
    labelLayer: els.labels,
    landmarks: LANDMARKS,
    canvasLabel: altOf,
    getInsets: sceneInsets,
    durations: MOTION,
    side: state.side,
    motion: state.motion,
    reduced: state.reduced,
    poster: Boolean(debug.poster),
    posterSize: debug.size,
    avoid: [els.toggles, els.controls],
    quality: debug.quality,
    onSelect: select,
    onZoomLimits,
    onContextLost,
    onContextRestored,
  });
  if (abandoned) {
    created.dispose();
    return;
  }
  scene = created;
  window.spaceStation = { scene, state };
  await clearProgress();
  hideBanner();
  setMode('ready');
  scene.setSelected(state.selected);
  if (state.selected) scene.focus(state.selected);
  revealScene();
  if (debug.poster) root.dataset.posterReady = 'true';
  if (debug.state === 'lost' && !lostTested) {
    lostTested = true;
    setTimeout(() => scene?.loseContextForTest(), 800);
  }
}

async function boot() {
  // index.html 의 안전장치가 "스크립트가 시작했다"를 알 수 있게 표시한다.
  // 안전장치가 먼저 포기했어도(아주 느린 연결) 여기서 화면을 다시 살린다.
  window.spaceStationBooted = true;
  root.classList.add('js');
  setMode('loading');
  if (debug.poster) root.classList.add('is-poster');
  renderSelection();
  renderMotion();
  renderSide(false);
  placePoster();
  els.posterImg.addEventListener('load', placePoster);
  layoutObserver.observe(els.scene);
  layoutObserver.observe(els.backdrop);
  layoutObserver.observe(els.toggles);
  layoutObserver.observe(els.controls);
  new MutationObserver(syncSceneImage).observe(els.scene, { childList: true });
  if (debug.select) select(debug.select);

  els.landmarkButtons.forEach((button) => {
    button.addEventListener('click', () => select(button.dataset.id));
  });
  els.controls.addEventListener('click', (event) => {
    if (event.target.closest('.tooltip')) return;
    const button = event.target.closest('[data-action]');
    if (!button) return;
    if (button.getAttribute('aria-disabled') === 'true') {
      // 터치에는 hover 툴팁이 없으므로, 한계에서 누르면 이유를 잠깐 보이고 알린다
      const tip = $('.tooltip', button);
      button.classList.add('is-tip');
      announce(tip.textContent);
      clearTimeout(button.tipTimer);
      button.tipTimer = setTimeout(() => button.classList.remove('is-tip'), MOTION.hintHold);
      return;
    }
    onControl(button.dataset.action);
  });
  els.motionBtn.addEventListener('click', () => {
    state.motion = !state.motion;
    renderMotion();
  });
  els.sideBtn.addEventListener('click', () => {
    state.side = state.side === 'night' ? 'day' : 'night';
    renderSide(true);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    // 보이는 툴팁이 있으면 툴팁만 닫는다. 없을 때만 처음 시점으로 간다.
    if (dismissTooltips()) return;
    resetView();
  });
  els.controls.addEventListener('pointerleave', () => els.controls.classList.remove('is-tip-dismissed'));
  els.controls.addEventListener('focusin', () => els.controls.classList.remove('is-tip-dismissed'));
  reducedQuery.addEventListener('change', () => {
    state.reduced = reducedQuery.matches;
    scene?.setReduced(state.reduced);
    if (state.reduced) {
      state.motion = false;
      renderMotion();
    }
  });

  if (debug.state === 'nowebgl' || !supportsWebGL2()) {
    enterFallback(COPY.failed);
    return;
  }

  scheduleProgress();
  const slowTimer = setTimeout(onSlow, MOTION.loadingSlow);
  try {
    if (debug.state === 'slow') await wait(MOTION.loadingSlow + 30000);
    if (abandoned) return;
    await startScene();
  } catch (error) {
    console.error(error);
    if (!abandoned) enterFallback(COPY.failed);
  } finally {
    clearTimeout(slowTimer);
  }
}

boot();
