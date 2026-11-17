/*
 * 화면 동작 — 설계서 5절(상태)·6절(상호작용)·6-1절(주소와 뒤로 가기)·7절(문구)
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?floor=2              층 하나를 고른 상태 (1 · 2 · 3 · 4)
 *   ?floor=2&room=pottery 전시실까지 고른 상태. room 만 줘도 그 전시실의 층으로 맞춘다
 *   ?view=stacked         쌓아 보기(기본은 펼쳐 보기)
 *   ?facilities=off       편의시설 아이콘 숨김
 *   ?motion=off           움직임 멈춘 상태로 시작
 *   ?state=nowebgl        3D 실패(WebGL 없음) 화면
 *   ?state=slow           느린 연결 — 10초 뒤 배너가 뜬다
 *   ?state=lost           장면 멈춤 — 준비된 뒤 WebGL 컨텍스트를 일부러 잃는다
 *   ?quality=high|low     품질 단계 고정
 *   ?poster=1&size=wide   포스터 촬영 모드(장면만 보인다). size=wide|medium|narrow
 */
import { BREAKPOINT, POSTER } from './tokens.js';
import { homeScale, posterPlacement } from './framing.js';

const root = document.documentElement;
const params = new URLSearchParams(window.location.search);
const debug = {
  state: params.get('state'),
  poster: params.get('poster'),
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
  progress: $('.scene__progress'),
  toggles: $('.scene__toggles'),
  picker: $('.scene__floors'),
  controls: $('.scene__controls'),
  motionBtn: $('[data-action="motion"]'),
  viewBtn: $('[data-action="view"]'),
  facilitiesBtn: $('[data-action="facilities"]'),
  zoomIn: $('[data-action="zoom-in"]'),
  zoomOut: $('[data-action="zoom-out"]'),
  bannerRegion: $('.banner-region'),
  floorsHead: $('#floors'),
  announcer: $('[data-announcer]'),
  backdrop: $('.panel-backdrop'),
  panel: $('.panel'),
  topbar: $('.topbar'),
  floorGroups: $$('.floor-group'),
  floorButtons: $$('.floor'),
  roomButtons: $$('.room'),
  pickerButtons: $$('.floor-btn'),
  details: $$('[data-detail]'),
};

const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
const ms = (name) => parseFloat(cssVar(name)) || 0;
/** rem 토큰을 px 로 — 글자 확대를 따라간다 */
const remPx = (name) => parseFloat(cssVar(name)) * parseFloat(getComputedStyle(root).fontSize);
const MOTION = {
  camera: ms('--ds-motion-camera'),
  cameraStep: ms('--ds-motion-camera-step'),
  floorShift: ms('--ds-motion-floor-shift'),
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
  toStacked: '쌓아 보기',
  toExploded: '펼쳐 보기',
  facilitiesHide: '편의시설 숨기기',
  facilitiesShow: '편의시설 보기',
  here: '지금 여기',
  progress: '건물을 그리는 중이에요',
  slow: '연결이 느려 3D 장면 파일을 받는 데 시간이 걸려요. 목록은 지금 볼 수 있어요.',
  slowAction: '3D 없이 보기',
  failed: '이 브라우저에서는 3D 장면을 그릴 수 없어요. 목록에서 층과 전시실을 고르면 설명을 볼 수 있어요.',
  lost: '3D 장면이 멈췄어요. 다시 그리면 이어서 볼 수 있어요.',
  lostAction: '다시 그리기',
  closeBanner: '알림 닫기',
  viewing: (name) => `${name} 보는 중`,
  altExploded:
    '4개 층을 위아래로 띄워 펼친 박물관 3D 장면. 1층 로비와 기념품 가게·어린이 체험실, 2층 옛 생활·도자기 전시실과 영상실, 3층 그림·기획 전시실, 4층 옥상 정원과 카페가 보여요.',
  altStacked: '4개 층을 쌓은 박물관 건물 3D 장면. 바깥벽과 창이 보이고, 지붕 위 4층에 옥상 정원과 카페가 있어요.',
};

/* 층·전시실 데이터는 HTML 목록에서 읽는다(스크립트가 꺼져도 목록이 그대로 읽힌다) */
const FLOORS = els.floorButtons
  .map((button) => ({ id: button.dataset.floor, name: $('.floor__name', button).textContent.trim() }))
  .sort((a, b) => Number(a.id) - Number(b.id));
const ROOMS = Object.fromEntries(
  els.roomButtons.map((button) => [button.dataset.room, { name: $('.room__name', button).textContent.trim(), floor: button.dataset.floor }]),
);
const floorName = (id) => FLOORS.find((f) => f.id === id)?.name ?? '';

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);
const mediumQuery = window.matchMedia(`(min-width: ${BREAKPOINT.medium}px)`);

/** 주소의 층·전시실을 검사한다. 전시실이 있으면 층은 그 전시실의 층으로 맞춘다(설계서 5절 "잘못된 주소") */
function readSelection(search) {
  const p = new URLSearchParams(search);
  const room = ROOMS[p.get('room')] ? p.get('room') : null;
  if (room) return { floor: ROOMS[room].floor, room };
  const floor = FLOORS.some((f) => f.id === p.get('floor')) ? p.get('floor') : null;
  return { floor, room: null };
}

const initial = readSelection(window.location.search);
const state = {
  mode: 'loading',
  floor: initial.floor,
  room: initial.room,
  view: params.get('view') === 'stacked' && !debug.poster ? 'stacked' : 'exploded',
  facilities: params.get('facilities') !== 'off',
  reduced: reducedQuery.matches,
  motion: debug.motion !== 'off' && !reducedQuery.matches && !debug.poster,
};

let scene = null;
let sceneModule = null;
let abandoned = false;
let lostTimer = 0;
let lostTested = false;
/** 장면·정보 패널·버튼 묶음 크기가 바뀌면(창 크기·글자 확대) 포스터 자리와 3D 맞춤을 다시 계산한다 */
const layoutObserver = new ResizeObserver(() => {
  placePoster();
  scene?.relayout();
});

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
const isShown = (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';

function setMode(mode) {
  state.mode = mode;
  root.dataset.mode = mode;
  syncSceneImage();
  placePoster();
}

const setAriaHidden = (el, hidden) => {
  if (hidden) el.setAttribute('aria-hidden', 'true');
  else el.removeAttribute('aria-hidden');
};

/** 장면 그림을 접근성 트리에 하나만 둔다 — ready 에서는 캔버스, 그 밖에서는 포스터(바탕 샘플 공통 수정) */
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

/* ---------- 층·전시실 고르기 ---------- */

const depth = (sel) => (sel.room ? 2 : sel.floor ? 1 : 0);

function renderSelection() {
  els.floorGroups.forEach((group) => group.classList.toggle('is-open', group.dataset.floor === state.floor));
  els.floorButtons.forEach((button) => {
    const open = button.dataset.floor === state.floor;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && !state.room) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  els.roomButtons.forEach((button) => {
    if (button.dataset.room === state.room) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  els.pickerButtons.forEach((button) => {
    if (button.dataset.floor === state.floor) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  const current = state.room ?? (state.floor ? `floor-${state.floor}` : 'intro');
  els.details.forEach((item) => item.classList.toggle('is-current', item.dataset.detail === current));
  // 접힌 목록 안에 포커스가 남아 있으면 그 층 행으로 옮긴다(포커스가 body 로 떨어지지 않게)
  const active = document.activeElement;
  if (active?.classList.contains('room') && !isShown(active)) {
    $(`.floor[data-floor="${active.dataset.floor}"]`)?.focus();
  }
  if (scene && state.mode === 'ready') scene.setSelection(state.floor, state.room);
}

/**
 * 넓은 폭에서는 목록과 설명이 한 패널 안에 있어, 전시실을 펼치면 설명이 패널 아래로 밀려 안 보일 수 있다.
 * 그때 패널만 필요한 만큼(nearest) 굴려 설명을 보인다. 좁은·중간 폭은 페이지를 굴리지 않는다.
 */
function revealDetail(instant = false) {
  if (!wideQuery.matches) return;
  const item = $('.detail__item.is-current');
  item?.scrollIntoView({ block: 'nearest', behavior: instant || state.reduced ? 'auto' : 'smooth' });
  syncPanelEdge();
}

/**
 * 패널이 굴러가 있을 때만 패널 바로 위에 경계선을 보인다(css .is-scrolled).
 * 넓은 폭에서 배너가 있으면 배너 자리가, 없으면 화면 이름이 패널 바로 위다.
 */
function syncPanelEdge() {
  const scrolled = wideQuery.matches && els.panel.scrollTop > 0;
  const bannerShown = els.bannerRegion.childElementCount > 0;
  els.topbar.classList.toggle('is-scrolled', scrolled && !bannerShown);
  els.bannerRegion.classList.toggle('is-scrolled', scrolled && bannerShown);
}

function urlFor(sel) {
  const url = new URL(window.location.href);
  url.searchParams.delete('floor');
  url.searchParams.delete('room');
  if (sel.floor) url.searchParams.set('floor', sel.floor);
  if (sel.room) url.searchParams.set('room', sel.room);
  if (state.view === 'stacked') url.searchParams.set('view', 'stacked');
  else url.searchParams.delete('view');
  if (!state.facilities) url.searchParams.set('facilities', 'off');
  else url.searchParams.delete('facilities');
  return url;
}

/** file:// 로 연 페이지는 주소를 바꿀 수 없다(브라우저 보안 제한). 그때는 화면에만 남는다 */
function writeHistory(kind, sel, idx) {
  try {
    window.history[kind]({ museumFloors: true, idx }, '', urlFor(sel));
  } catch {
    // 주소를 바꾸지 못해도 화면 동작은 그대로다
  }
}

const historyIndex = () => (window.history.state?.museumFloors ? window.history.state.idx : 0);
let pendingUp = null;

function applySelection(sel) {
  const changed = sel.floor !== state.floor || sel.room !== state.room;
  state.floor = sel.floor;
  state.room = sel.room;
  renderSelection();
  if (!changed) return;
  revealDetail();
  if (sel.room) announce(COPY.viewing(ROOMS[sel.room].name));
  else if (sel.floor) announce(COPY.viewing(floorName(sel.floor)));
  else announce('');
}

/**
 * 고르기를 바꾸고 방문 기록을 맞춘다(설계서 6-1절).
 * 더 깊이 가면 기록을 하나 쌓는다. 같은 단계면 지금 기록을 바꾼다.
 * 위로 가면 이 화면이 쌓은 기록이 있으면 그만큼 되돌아가고, 없으면 지금 기록을 바꾼다.
 */
function navigate(next) {
  const from = depth(state);
  const to = depth(next);
  if (next.floor === state.floor && next.room === state.room) return;
  applySelection(next);
  if (to > from) {
    writeHistory('pushState', next, historyIndex() + 1);
    return;
  }
  if (to === from) {
    writeHistory('replaceState', next, historyIndex());
    return;
  }
  const steps = Math.min(from - to, historyIndex());
  if (steps > 0) {
    pendingUp = next;
    window.history.go(-steps);
  } else {
    writeHistory('replaceState', next, historyIndex());
  }
}

function selectFloor(id) {
  if (!FLOORS.some((f) => f.id === id)) return;
  navigate({ floor: id, room: null });
}

function selectRoom(id) {
  if (!ROOMS[id]) return;
  navigate({ floor: ROOMS[id].floor, room: id });
}

/** 한 단계 위로 — 전시실에서 층으로, 층에서 고르기 전으로. 고르기 전이면 처음 시점으로 */
function goUp() {
  if (state.room) navigate({ floor: state.floor, room: null });
  else if (state.floor) navigate({ floor: null, room: null });
  else if (scene && state.mode === 'ready') scene.reset();
}

function resetView() {
  if (state.floor) navigate({ floor: null, room: null });
  else if (scene && state.mode === 'ready') scene.reset();
}

window.addEventListener('popstate', (event) => {
  if (pendingUp) {
    // 위로 가기를 기록 되돌리기로 했다. 화면은 이미 바꿨고, 도착한 기록의 주소만 맞춘다
    const target = pendingUp;
    pendingUp = null;
    writeHistory('replaceState', target, event.state?.museumFloors ? event.state.idx : 0);
    return;
  }
  applySelection(readSelection(window.location.search));
});

/* ---------- 토글 ---------- */

function renderMotion() {
  els.motionBtn.textContent = state.motion ? COPY.motionStop : COPY.motionStart;
  scene?.setMotion(state.motion);
}

function renderView(animate) {
  root.dataset.view = state.view;
  els.viewBtn.textContent = state.view === 'stacked' ? COPY.toExploded : COPY.toStacked;
  if (scene && state.mode === 'ready') scene.setView(state.view, animate);
}

function renderFacilities() {
  root.dataset.facilities = state.facilities ? 'on' : 'off';
  els.facilitiesBtn.textContent = state.facilities ? COPY.facilitiesHide : COPY.facilitiesShow;
  scene?.setFacilities(state.facilities);
}

/** 보는 방식·편의시설은 기록을 쌓지 않고 지금 주소만 바꾼다 */
const replaceUrl = () => writeHistory('replaceState', state, historyIndex());

/* ---------- 포스터 ---------- */

/** 지금 폭 구간의 포스터 — <picture> 의 source 조건과 같다 */
function posterSizeNow() {
  if (wideQuery.matches) return 'wide';
  return mediumQuery.matches ? 'medium' : 'narrow';
}

/** 넓은 폭에서 정보 패널이 장면을 가리는 너비(px) */
function insetLeft() {
  if (!wideQuery.matches || debug.poster) return 0;
  return Math.max(0, els.backdrop.getBoundingClientRect().right - els.scene.getBoundingClientRect().left);
}

/**
 * 장면에서 버튼이 없는 빈 영역(장면 기준 px) — 설계서 3절 끝.
 * 정보 패널(넓은 폭), 장면 토글 묶음의 실제 높이, 층 버튼·시점 버튼 묶음의 실제 폭·높이를 뺀다.
 * 로딩 중에도 버튼 묶음은 자리를 차지한 채 숨어 있어(visibility) 포스터와 3D가 같은 영역을 쓴다.
 */
function freeRect() {
  const s = els.scene.getBoundingClientRect();
  const gap = remPx('--ds-space-3');
  const box = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 ? r : null;
  };
  const inset = insetLeft();
  const toggles = box(els.toggles);
  const picker = box(els.picker);
  const controls = box(els.controls);
  return {
    insetLeft: inset,
    left: inset ? inset + remPx('--ds-space-6') : gap,
    top: toggles ? toggles.bottom - s.top + gap : gap,
    right: picker ? picker.left - s.left - gap : s.width - gap,
    bottom: controls ? controls.top - s.top - gap : s.height - gap,
  };
}

/** 포스터를 3D 첫 화면과 같은 배율·중심에 놓는다(js/framing.js). 포스터 밖은 같은 바탕색이다 */
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
  const r = freeRect();
  const rect = { cx: (r.left + r.right) / 2, cy: (r.top + r.bottom) / 2, width: Math.max(40, r.right - r.left), height: Math.max(40, r.bottom - r.top) };
  const place = posterPlacement(rect, homeScale(rect));
  els.poster.classList.add('is-placed');
  Object.entries(place).forEach(([key, value]) => {
    els.poster.style.setProperty(`--poster-${key}`, `${value.toFixed(1)}px`);
  });
}

/* ---------- 시점 버튼 ---------- */

/** 보이는 툴팁이 있으면 닫는다(WCAG 1.4.13 Dismissible). 닫았으면 true */
function dismissTooltips() {
  const open = $$('.tooltip', els.controls).some((tip) => getComputedStyle(tip).visibility === 'visible');
  if (!open) return false;
  els.controls.classList.add('is-tip-dismissed');
  $$('.icon-btn.is-tip', els.controls).forEach((button) => button.classList.remove('is-tip'));
  return true;
}

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

/**
 * 배너를 지우거나 바꾸기 직전에 부른다(바탕 샘플 공통 수정). 누른 버튼이 배너와 함께 사라지면 포커스가 body 로 떨어진다.
 * 포커스가 배너 안에 있었으면 장면 토글 가운데 보이는 첫 버튼으로, 없으면 목록 머리(tabindex="-1")로 옮긴다.
 */
function moveFocusAfterBanner() {
  if (!els.bannerRegion.contains(document.activeElement)) return;
  const toggle = $$('button', els.toggles).find(isShown);
  (toggle ?? els.floorsHead).focus();
}

function hideBanner() {
  moveFocusAfterBanner();
  els.bannerRegion.replaceChildren();
  syncPanelEdge();
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
  close.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  close.addEventListener('click', hideBanner);
  banner.append(body, close);
  moveFocusAfterBanner();
  els.bannerRegion.replaceChildren(banner);
  // 배너가 들어오면 패널 높이가 줄어든다(넓은 폭) 또는 아래 내용이 밀린다. 고른 곳이 있으면 그 설명이 다시 보이게 굴린다.
  // 배너는 패널의 스크롤 영역 밖에 있어 함께 굴러가지 않는다
  if (state.floor) revealDetail(true);
  syncPanelEdge();
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

async function startScene() {
  sceneModule = sceneModule || (await import('./scene/scene.js'));
  if (abandoned) return;
  const created = await sceneModule.createScene({
    container: els.scene,
    labelLayer: els.labels,
    floors: FLOORS,
    rooms: ROOMS,
    hereLabel: COPY.here,
    canvasLabel: (view) => (view === 'stacked' ? COPY.altStacked : COPY.altExploded),
    getFreeRect: freeRect,
    durations: MOTION,
    motion: state.motion,
    reduced: state.reduced,
    facilities: state.facilities,
    poster: Boolean(debug.poster),
    quality: debug.poster ? (debug.size === 'wide' ? 'high' : 'low') : debug.quality,
    avoid: [els.toggles, els.picker, els.controls],
    onSelectFloor: selectFloor,
    onSelectRoom: selectRoom,
    onZoomLimits,
    onContextLost,
    onContextRestored,
  });
  if (abandoned) {
    created.dispose();
    return;
  }
  scene = created;
  window.museumFloors = { scene, state };
  await clearProgress();
  hideBanner();
  setMode('ready');
  // 첫 프레임은 늘 처음 시점(펼쳐 보기, 고르기 전) — 포스터와 같다. 그 뒤에 주소의 보는 방식·고른 곳으로 옮겨 간다
  scene.setView(state.view, true);
  scene.setSelection(state.floor, state.room, true);
  revealScene();
  if (debug.poster) root.dataset.posterReady = 'true';
  if (debug.state === 'lost' && !lostTested) {
    lostTested = true;
    setTimeout(() => scene?.loseContextForTest(), 800);
  }
}

async function boot() {
  // index.html 의 안전장치가 "스크립트가 시작했다"를 알 수 있게 표시한다.
  window.museumFloorsBooted = true;
  root.classList.add('js');
  setMode('loading');
  if (debug.poster) root.classList.add('is-poster');
  // 들어온 주소를 이 화면의 첫 기록으로 삼는다(주소에 섞인 잘못된 값은 고친다)
  writeHistory('replaceState', state, 0);
  renderSelection();
  // 주소로 층·전시실을 골라 들어왔으면 넓은 폭 패널에서 그 설명이 보이게 한다
  if (state.floor) revealDetail(true);
  renderMotion();
  renderView(false);
  renderFacilities();
  placePoster();
  els.posterImg.addEventListener('load', placePoster);
  els.panel.addEventListener('scroll', syncPanelEdge, { passive: true });
  wideQuery.addEventListener('change', syncPanelEdge);
  [els.scene, els.backdrop, els.toggles, els.picker, els.controls].forEach((el) => layoutObserver.observe(el));
  new MutationObserver(syncSceneImage).observe(els.scene, { childList: true });

  els.floorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.floor;
      // 펼친 층을 다시 누르면 접는다(전시실을 골랐으면 층으로 돌아간다)
      if (state.floor === id) navigate(state.room ? { floor: id, room: null } : { floor: null, room: null });
      else selectFloor(id);
    });
  });
  els.roomButtons.forEach((button) => button.addEventListener('click', () => selectRoom(button.dataset.room)));
  els.pickerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.floor;
      if (state.floor === id && state.room) navigate({ floor: id, room: null });
      else selectFloor(id);
    });
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
  els.viewBtn.addEventListener('click', () => {
    state.view = state.view === 'stacked' ? 'exploded' : 'stacked';
    renderView(true);
    replaceUrl();
  });
  els.facilitiesBtn.addEventListener('click', () => {
    state.facilities = !state.facilities;
    renderFacilities();
    replaceUrl();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    // 보이는 툴팁이 있으면 툴팁만 닫는다. 없을 때만 한 단계 위로 간다
    if (dismissTooltips()) return;
    goUp();
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
