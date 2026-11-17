/*
 * 명소형 3D 화면 틀 — 장면 하나, 명소 목록, 장면 갈래 토글 하나(시간대·날씨·계절 등), 움직임 토글, 시점 버튼.
 * 설계서 5절(상태)·6절(상호작용)·7절(문구)의 공통 동작. 샘플 js/main.js 는 설정만 넘긴다.
 *
 * startSceneApp({
 *   name,          전역 이름(window[name] = { scene, state })
 *   breakpoint, posterSizes,   js/tokens.js 의 BREAKPOINT · POSTER
 *   placePoster,   js/framing.js 의 posterPlacement(size, width, height, frame)
 *   frame,         (선택) { option: createScene 이름, measure(ui), watchButtons } — 기본은 정보 패널이 가린 폭(getInsetLeft)
 *   variant: { key, values, default?, labels?, alt, inUrl?, strictPoster? },
 *   copy: { progress, … },     js/shell/core.js 의 SHELL_COPY 를 덮는다
 *   loadScene: () => import('./scene/scene.js'),
 * })
 *
 * variant.key 하나로 상태·주소(?<key>=)·<html data-<key>>·createScene 값·장면 메서드 set<Key>(값, animate)·
 * 시간 토큰 --ds-motion-<key>-shift 를 맞춘다. 토글은 버튼 [data-action="<key>"](값 둘, labels = 지금 값일 때 글자)
 * 또는 라디오 input[name="<key>"] 묶음이다. 움직임 토글에 [data-when="on|off"] 라벨이 있으면 data-motion 으로 하나만 보인다.
 * 검수용 주소: ?select=<명소 id>, ?<key>=<값>, 그 밖은 core.js 의 readDebug.
 */
import {
  $, $$, root, readMotion, readDebug, SHELL_COPY, createAnnouncer, createProgress, createBanner,
  firstShownControl, createViewControls, createPoster, createLifecycle,
} from './core.js';

export function startSceneApp(config) {
  const { variant } = config;
  const { key } = variant;
  const fallbackValue = variant.default ?? variant.values[0];
  const otherValue = variant.values.find((value) => value !== fallbackValue);
  const setter = `set${key[0].toUpperCase()}${key.slice(1)}`;
  const copy = { ...SHELL_COPY, ...config.copy };

  const params = new URLSearchParams(window.location.search);
  const debug = { ...readDebug(params, variant.strictPoster ? variant.values : null), select: params.get('select') };
  const pick = (value) => (variant.values.includes(value) ? value : null);
  /** 라디오(strictPoster)는 촬영 값 → 주소 값 → 기본값. 버튼은 기본이 아닌 값이 주소에 있을 때만 그 값 */
  const initialValue = () =>
    variant.strictPoster
      ? debug.poster || pick(params.get(key)) || fallbackValue
      : params.get(key) === otherValue || debug.poster === otherValue
        ? otherValue
        : fallbackValue;

  const els = {
    scene: $('#scene'),
    labels: $('.scene__labels'),
    poster: $('.scene__poster'),
    progress: $('.scene__progress'),
    controls: $('.scene__controls'),
    toggles: $('.scene__toggles'),
    motionBtn: $('[data-action="motion"]'),
    variantBtn: $(`[data-action="${key}"]`),
    variantInputs: $$(`input[name="${key}"]`),
    bannerRegion: $('.banner-region'),
    landmarksHead: $('#landmarks'),
    announcer: $('[data-announcer]'),
    backdrop: $('.panel-backdrop'),
    landmarkButtons: $$('.landmark'),
    details: $$('[data-detail]'),
  };

  const MOTION = readMotion({ [`${key}Shift`]: `--ds-motion-${key}-shift` });
  const LANDMARKS = els.landmarkButtons.map((button) => ({
    id: button.dataset.id,
    name: $('.landmark__name', button).textContent.trim(),
  }));
  const nameOf = (id) => LANDMARKS.find((l) => l.id === id)?.name ?? '';
  const altOf = (value) => variant.alt[value] ?? variant.alt[fallbackValue];

  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wideQuery = window.matchMedia(`(min-width: ${config.breakpoint.wide}px)`);

  const state = {
    mode: 'loading',
    selected: null,
    [key]: initialValue(),
    reduced: reducedQuery.matches,
    motion: debug.motion !== 'off' && !reducedQuery.matches && !debug.poster,
  };

  /** 넓은 폭에서 정보 패널이 장면을 가리는 너비(px). 포스터 촬영 모드는 중심점을 캔버스 가운데에 둔다 */
  function insetLeft() {
    if (!wideQuery.matches || debug.poster) return 0;
    return els.backdrop.getBoundingClientRect().right - els.scene.getBoundingClientRect().left;
  }

  const ui = { els, debug, wideQuery, insetLeft };
  const frame = config.frame ?? { option: 'getInsetLeft', measure: () => insetLeft() };
  const measureFrame = () => frame.measure(ui);

  const announce = createAnnouncer(els.announcer);
  const progress = createProgress(els.progress, { text: copy.progress, delay: MOTION.loadingDelay, min: MOTION.loadingMin });
  const banner = createBanner({
    region: els.bannerRegion,
    closeLabel: copy.closeBanner,
    // 장면 토글 가운데 보이는 첫 컨트롤로, 없으면 명소 목록 머리(tabindex="-1")로
    focusTarget: () => firstShownControl(els.toggles) ?? els.landmarksHead,
  });
  const poster = createPoster({
    scene: els.scene,
    poster: els.poster,
    sizes: config.posterSizes,
    breakpoint: config.breakpoint,
    shooting: Boolean(debug.poster),
    compute: (size, width, height) => config.placePoster(size, width, height, measureFrame()),
    isReady: () => state.mode === 'ready',
    isReduced: () => state.reduced,
    crossfade: MOTION.crossfade,
  });

  /** 고른 명소(와 갈래)를 주소에 남긴다 — 새로고침·공유해도 같은 화면이 열린다(PLT-WEB-10) */
  function syncUrl() {
    if (variant.inUrl && debug.poster) return;
    const url = new URL(window.location.href);
    if (state.selected) url.searchParams.set('select', state.selected);
    else url.searchParams.delete('select');
    if (variant.inUrl) {
      if (state[key] !== fallbackValue) url.searchParams.set(key, state[key]);
      else url.searchParams.delete(key);
    }
    try {
      window.history.replaceState(null, '', url);
    } catch {
      // file:// 로 연 페이지는 주소를 바꿀 수 없다(브라우저 보안 제한). 선택은 화면에만 남는다.
    }
  }

  function renderSelection() {
    els.landmarkButtons.forEach((button) => {
      if (button.dataset.id === state.selected) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
    const current = state.selected ?? 'intro';
    els.details.forEach((item) => item.classList.toggle('is-current', item.dataset.detail === current));
    life.scene?.setSelected(state.selected);
  }

  function select(id) {
    if (!LANDMARKS.some((l) => l.id === id)) return;
    state.selected = id;
    renderSelection();
    syncUrl();
    announce(copy.viewing(nameOf(id)));
    life.readyScene()?.focus(id);
  }

  function resetView() {
    const hadSelection = state.selected !== null;
    state.selected = null;
    renderSelection();
    syncUrl();
    life.readyScene()?.reset();
    if (hadSelection) announce('');
  }

  /* 라벨 2개를 겹친 움직임 토글은 폭이 고정이라 눌러도 토글 줄이 바뀌지 않는다(버튼 묶음을 재는 맞춤이 그대로) */
  const swapLabels = Boolean($('[data-when]', els.motionBtn));

  function renderMotion() {
    if (swapLabels) els.motionBtn.dataset.motion = state.motion ? 'on' : 'off';
    else els.motionBtn.textContent = state.motion ? copy.motionStop : copy.motionStart;
    life.scene?.setMotion(state.motion);
  }

  function renderVariant(animate) {
    const value = state[key];
    root.dataset[key] = value;
    if (els.variantInputs.length) {
      els.variantInputs.forEach((input) => {
        input.checked = input.value === value;
      });
    } else {
      els.variantBtn.textContent = variant.labels[value];
    }
    poster.show(value, altOf(value));
    life.scene?.[setter](value, animate);
  }

  function changeVariant(next) {
    if (!pick(next) || next === state[key]) return;
    state[key] = next;
    renderVariant(true);
    if (variant.inUrl) syncUrl();
  }

  const controls = createViewControls({
    controls: els.controls,
    announce,
    hintHold: MOTION.hintHold,
    readyScene: () => life.readyScene(),
    onReset: resetView,
  });

  const life = createLifecycle({
    name: config.name,
    state,
    debug,
    sceneEl: els.scene,
    motion: MOTION,
    copy,
    banner,
    progress,
    poster,
    loadScene: config.loadScene,
    sceneOptions: () => ({
      container: els.scene,
      labelLayer: els.labels,
      landmarks: LANDMARKS,
      canvasLabel: altOf,
      [frame.option]: measureFrame,
      durations: MOTION,
      [key]: state[key],
      motion: state.motion,
      reduced: state.reduced,
      poster: Boolean(debug.poster),
      posterSize: debug.size,
      avoid: [els.toggles, els.controls],
      quality: debug.quality,
      onSelect: select,
      onZoomLimits: controls.onZoomLimits,
    }),
    onReady(scene) {
      scene.setSelected(state.selected);
      if (state.selected) scene.focus(state.selected);
    },
  });

  /** 장면·정보 패널(·버튼 묶음) 크기가 바뀌면(창 크기·글자 확대) 포스터 자리와 3D 맞춤을 다시 계산한다 */
  const layoutObserver = new ResizeObserver(() => {
    poster.place();
    life.scene?.relayout();
  });

  /* ---------- 부팅 ---------- */

  life.begin();
  renderSelection();
  renderMotion();
  renderVariant(false);
  poster.place();
  poster.img.addEventListener('load', poster.place);
  layoutObserver.observe(els.scene);
  layoutObserver.observe(els.backdrop);
  if (frame.watchButtons) {
    layoutObserver.observe(els.toggles);
    layoutObserver.observe(els.controls);
  }
  life.watchCanvas();
  if (debug.select) select(debug.select);
  if (variant.inUrl) syncUrl();

  els.landmarkButtons.forEach((button) => {
    button.addEventListener('click', () => select(button.dataset.id));
  });
  controls.bindClick();
  els.motionBtn.addEventListener('click', () => {
    state.motion = !state.motion;
    renderMotion();
  });
  if (els.variantInputs.length) {
    // 네이티브 라디오라 화살표 이동·고르기는 브라우저가 맡는다
    els.variantInputs.forEach((input) => {
      input.addEventListener('change', () => {
        if (input.checked) changeVariant(input.value);
      });
    });
  } else {
    els.variantBtn.addEventListener('click', () => changeVariant(state[key] === otherValue ? fallbackValue : otherValue));
  }
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    // 보이는 툴팁이 있으면 툴팁만 닫는다. 없을 때만 처음 시점으로 간다.
    if (controls.dismissTooltips()) return;
    resetView();
  });
  controls.bindDismissReset();
  reducedQuery.addEventListener('change', () => {
    state.reduced = reducedQuery.matches;
    life.scene?.setReduced(state.reduced);
    if (state.reduced) {
      state.motion = false;
      renderMotion();
    }
  });

  life.start();
}
