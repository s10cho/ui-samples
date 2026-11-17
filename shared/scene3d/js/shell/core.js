/*
 * 3D 화면 틀 공통 부품 — DOM 도우미, 기본 문구, 알림·진행 문구, 배너, 시점 버튼, 포스터, 장면 한살이.
 * shared/scene3d/ 에서 조립 때 복사된다. 샘플에서 고치지 말고 kit 에서 고친다.
 * 명소형 화면은 app.js 가 이것들을 묶어 쓴다. 다른 모양의 화면(박물관)은 필요한 것만 가져다 쓴다.
 */

/* ---------- DOM 도우미 ---------- */

export const root = document.documentElement;
export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
export const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
export const ms = (name) => parseFloat(cssVar(name)) || 0;
/** rem 토큰을 px 로 — 글자 확대를 따라간다 */
export const remPx = (name) => parseFloat(cssVar(name)) * parseFloat(getComputedStyle(root).fontSize);
export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
export const isShown = (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';

const setAriaHidden = (el, hidden) => {
  if (hidden) el.setAttribute('aria-hidden', 'true');
  else el.removeAttribute('aria-hidden');
};

function makeButton(className, label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = label;
  return button;
}

/** 시간 토큰(--ds-motion-*, ms). extra 는 장면이 더 쓰는 값 — 예: { timeShift: '--ds-motion-time-shift' } */
export function readMotion(extra = {}) {
  const motion = { camera: ms('--ds-motion-camera'), cameraStep: ms('--ds-motion-camera-step') };
  Object.entries(extra).forEach(([key, name]) => {
    motion[key] = ms(name);
  });
  return Object.assign(motion, {
    crossfade: ms('--ds-motion-crossfade'),
    loadingDelay: ms('--ds-motion-loading-delay'),
    loadingMin: ms('--ds-motion-loading-min'),
    loadingSlow: ms('--ds-motion-loading-slow'),
    contextRestore: ms('--ds-motion-context-restore'),
    hintHold: ms('--ds-motion-hint-hold'),
  });
}

/** 검수용 주소 값. posterValues 를 주면 ?poster= 는 그 값일 때만 촬영 모드다 */
export function readDebug(params, posterValues) {
  const poster = params.get('poster');
  return {
    state: params.get('state'), // nowebgl · slow(10초 뒤 배너) · lost(준비 뒤 컨텍스트를 잃는다)
    poster: posterValues ? (posterValues.includes(poster) ? poster : null) : poster,
    motion: params.get('motion'),
    quality: ['high', 'low'].includes(params.get('quality')) ? params.get('quality') : undefined,
    size: ['wide', 'medium', 'narrow'].includes(params.get('size')) ? params.get('size') : 'wide',
  };
}

/* ---------- 기본 문구(설계서 7절) — 샘플이 copy 로 바꾸거나 더한다 ---------- */

export const SHELL_COPY = {
  motionStop: '움직임 멈추기',
  motionStart: '움직임 다시 켜기',
  slow: '연결이 느려 3D 장면 파일을 받는 데 시간이 걸려요. 목록은 지금 볼 수 있어요.',
  slowAction: '3D 없이 보기',
  failed: '이 브라우저에서는 3D 장면을 그릴 수 없어요. 목록에서 명소를 고르면 설명을 볼 수 있어요.',
  lost: '3D 장면이 멈췄어요. 다시 그리면 이어서 볼 수 있어요.',
  lostAction: '다시 그리기',
  closeBanner: '알림 닫기',
  viewing: (name) => `${name} 보는 중`,
};

/* ---------- live 영역 — 비어 있어도 렌더링해 둔다(css/shell.css) ---------- */

/** 화면낭독기 알림. 같은 문장도 다시 읽히게 비운 뒤 다음 프레임에 넣는다 */
export function createAnnouncer(el) {
  return function announce(text) {
    el.textContent = '';
    if (text) requestAnimationFrame(() => (el.textContent = text));
  };
}

/** 진행 문구 — 늦어질 때만(delay 뒤) 보이고, 보이면 min 동안 남는다(깜빡임 방지) */
export function createProgress(el, { text, delay, min }) {
  let timer = 0;
  let shownAt = 0;
  return {
    schedule() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        el.textContent = text;
        shownAt = performance.now();
      }, delay);
    },
    async clear() {
      clearTimeout(timer);
      if (shownAt) {
        const remaining = min - (performance.now() - shownAt);
        if (remaining > 0) await wait(remaining);
      }
      el.textContent = '';
      shownAt = 0;
    },
  };
}

/* ---------- 알림 배너 ---------- */

/** 장면 토글 묶음에서 보이는 첫 컨트롤(버튼, 고른 라디오 — 라디오는 묶음이 보이면 보이는 것으로 친다) */
export const firstShownControl = (toggles) =>
  [...toggles.querySelectorAll('button, input:checked')].find(
    (el) => isShown(el) || (el.type === 'radio' && isShown(el.closest('[role="radiogroup"]'))),
  );

/**
 * 3D 실패·느린 연결·장면 멈춤 배너. 배너를 지우거나 바꾸면 그 안의 버튼도 사라지므로,
 * 포커스가 배너 안에 있었으면 focusTarget() 으로 옮긴다. onShow·onHide 는 배너를 넣고·지운 뒤에 부른다.
 */
export function createBanner({ region, closeLabel, focusTarget, onShow, onHide }) {
  function moveFocus() {
    if (region.contains(document.activeElement)) focusTarget().focus();
  }

  function hide() {
    moveFocus();
    region.replaceChildren();
    onHide?.();
  }

  function show({ text, action, onAction }) {
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
    close.setAttribute('aria-label', closeLabel);
    close.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    close.addEventListener('click', hide);
    banner.append(body, close);
    moveFocus();
    region.replaceChildren(banner);
    onShow?.();
  }

  return { show, hide };
}

/* ---------- 시점 버튼(.scene__controls) — 툴팁은 Esc 로 닫힌다(WCAG 1.4.13) ---------- */

/** readyScene: 3D가 준비됐을 때만 장면을 돌려준다. onReset: 처음 시점 버튼 */
export function createViewControls({ controls, announce, hintHold, readyScene, onReset }) {
  const zoomIn = $('[data-action="zoom-in"]', controls);
  const zoomOut = $('[data-action="zoom-out"]', controls);

  function setLimit(button, atLimit) {
    const tip = $('.tooltip', button);
    button.setAttribute('aria-disabled', atLimit ? 'true' : 'false');
    tip.textContent = atLimit ? tip.dataset.limit : button.getAttribute('aria-label');
    if (atLimit) button.setAttribute('aria-describedby', tip.id);
    else button.removeAttribute('aria-describedby');
  }

  function onControl(action) {
    const scene = readyScene();
    if (!scene) return;
    if (action === 'rotate-left') scene.rotateStep(1);
    else if (action === 'rotate-right') scene.rotateStep(-1);
    else if (action === 'zoom-in') scene.zoomStep(1);
    else if (action === 'zoom-out') scene.zoomStep(-1);
    else if (action === 'reset') onReset();
  }

  return {
    /** 장면이 알려 주는 확대 한계 */
    onZoomLimits({ atMin, atMax }) {
      setLimit(zoomIn, atMin);
      setLimit(zoomOut, atMax);
    },
    /** 보이는 툴팁이 있으면 닫는다. 닫았으면 true */
    dismissTooltips() {
      const open = $$('.tooltip', controls).some((tip) => getComputedStyle(tip).visibility === 'visible');
      if (!open) return false;
      controls.classList.add('is-tip-dismissed');
      $$('.icon-btn.is-tip', controls).forEach((button) => button.classList.remove('is-tip'));
      return true;
    },
    bindClick() {
      controls.addEventListener('click', (event) => {
        if (event.target.closest('.tooltip')) return;
        const button = event.target.closest('[data-action]');
        if (!button) return;
        if (button.getAttribute('aria-disabled') === 'true') {
          // 터치에는 hover 툴팁이 없으므로, 한계에서 누르면 이유를 잠깐 보이고 알린다
          const tip = $('.tooltip', button);
          button.classList.add('is-tip');
          announce(tip.textContent);
          clearTimeout(button.tipTimer);
          button.tipTimer = setTimeout(() => button.classList.remove('is-tip'), hintHold);
          return;
        }
        onControl(button.dataset.action);
      });
    },
    /** Esc 로 닫은 툴팁은 포인터가 묶음을 떠나거나 포커스가 옮겨 갈 때까지 숨긴다 */
    bindDismissReset() {
      controls.addEventListener('pointerleave', () => controls.classList.remove('is-tip-dismissed'));
      controls.addEventListener('focusin', () => controls.classList.remove('is-tip-dismissed'));
    },
  };
}

/* ---------- 포스터 — 3D 첫 화면과 같은 배율·중심에 놓아 3D로 바뀔 때 튀지 않게 한다(STA-03) ---------- */

/**
 * sizes: js/tokens.js 의 POSTER, breakpoint: BREAKPOINT, shooting: 포스터 촬영 모드(배치하지 않는다).
 * compute(size, width, height): 포스터 자리 { left, top, width, height }(px). 장면을 다 덮지 못하면 null — CSS 의 cover 로 둔다.
 */
export function createPoster({ scene, poster, sizes, breakpoint, shooting, compute, isReady, isReduced, crossfade }) {
  const img = poster.querySelector('img');
  const sources = [...poster.querySelectorAll('source')];
  const wideQuery = window.matchMedia(`(min-width: ${breakpoint.wide}px)`);
  const mediumQuery = window.matchMedia(`(min-width: ${breakpoint.medium}px)`);

  /** 지금 폭 구간 — <picture> 의 source 조건과 같다 */
  const sizeNow = () => (wideQuery.matches ? 'wide' : mediumQuery.matches ? 'medium' : 'narrow');

  function place() {
    if (shooting) return;
    const width = scene.clientWidth;
    const height = scene.clientHeight;
    if (!width || !height) return;
    // 캐시된 옛 포스터처럼 원본 크기가 토큰과 다르면 배율이 틀리므로 배치하지 않는다
    const size = sizeNow();
    if (img.naturalWidth && img.naturalWidth !== sizes[size].width) {
      poster.classList.remove('is-placed');
      return;
    }
    const spot = compute(size, width, height);
    poster.classList.toggle('is-placed', Boolean(spot));
    if (!spot) return;
    Object.entries(spot).forEach(([key, value]) => {
      poster.style.setProperty(`--poster-${key}`, `${value.toFixed(1)}px`);
    });
  }

  /** 장면 갈래에 맞는 포스터 — assets/poster-<갈래>-<폭 구간>.webp */
  function show(value, alt) {
    const path = (size) => `assets/poster-${value}-${size}.webp`;
    sources.forEach((source) => {
      source.srcset = path(source.dataset.size);
    });
    img.src = path('narrow');
    img.alt = alt;
  }

  function showNow() {
    poster.classList.remove('is-fading');
    poster.hidden = false;
  }

  /** 3D 첫 프레임 위에서 포스터를 지운다 */
  function reveal() {
    poster.classList.add('is-fading');
    setTimeout(() => {
      if (isReady()) poster.hidden = true;
    }, isReduced() ? 0 : crossfade);
  }

  return { el: poster, img, place, show, showNow, reveal };
}

/* ---------- 장면 한살이 — 모드(loading · ready · fallback · lost)와 시작·실패·느린 연결·멈춤·다시 그리기 ---------- */

/**
 * name: 전역 이름 — window[name] = { scene, state }(검수 콘솔), window[name + 'Booted'](index.html 의 안전장치).
 * loadScene: () => import('./scene/scene.js') — 3D 파일은 필요할 때 받는다.
 * sceneOptions(): createScene 값(onContextLost·onContextRestored 는 여기서 붙인다). onReady(scene): 준비 직후. onMode(mode): 모드를 바꾼 뒤.
 */
export function createLifecycle(o) {
  const { state, debug, sceneEl, motion, copy, banner, progress, poster } = o;
  let scene = null;
  let sceneModule = null;
  let abandoned = false;
  let lostTimer = 0;
  let lostTested = false;

  /** 장면 그림은 접근성 트리에 하나만 — ready 에서는 캔버스, 그 밖에서는 포스터(대체 텍스트가 같다) */
  function syncSceneImage() {
    const ready = state.mode === 'ready';
    $$('.scene__canvas', sceneEl).forEach((canvas) => setAriaHidden(canvas, !ready));
    setAriaHidden(poster.el, ready);
  }

  function setMode(mode) {
    state.mode = mode;
    root.dataset.mode = mode;
    syncSceneImage();
    o.onMode?.(mode);
  }

  function enterFallback(message) {
    setMode('fallback');
    progress.clear();
    poster.showNow();
    if (message) banner.show({ text: message });
    else banner.hide();
  }

  function skip3D() {
    abandoned = true;
    enterFallback(null);
  }

  function onSlow() {
    if (state.mode !== 'loading') return;
    progress.clear();
    banner.show({ text: copy.slow, action: copy.slowAction, onAction: skip3D });
  }

  function onContextLost() {
    setMode('lost');
    poster.showNow();
    clearTimeout(lostTimer);
    lostTimer = setTimeout(() => {
      banner.show({ text: copy.lost, action: copy.lostAction, onAction: redraw });
    }, motion.contextRestore);
  }

  function onContextRestored() {
    clearTimeout(lostTimer);
    banner.hide();
    setMode('ready');
    poster.reveal();
  }

  async function redraw() {
    banner.hide();
    clearTimeout(lostTimer);
    scene?.dispose();
    scene = null;
    setMode('loading');
    progress.schedule();
    try {
      await startScene();
    } catch (error) {
      console.error(error);
      enterFallback(copy.failed);
    }
  }

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
    sceneModule = sceneModule || (await o.loadScene());
    if (abandoned) return;
    const created = await sceneModule.createScene({ ...o.sceneOptions(), onContextLost, onContextRestored });
    if (abandoned) {
      created.dispose();
      return;
    }
    scene = created;
    window[o.name] = { scene, state };
    await progress.clear();
    banner.hide();
    setMode('ready');
    o.onReady(scene);
    poster.reveal();
    if (debug.poster) root.dataset.posterReady = 'true';
    if (debug.state === 'lost' && !lostTested) {
      lostTested = true;
      setTimeout(() => scene?.loseContextForTest(), 800);
    }
  }

  return {
    get scene() {
      return scene;
    },
    readyScene: () => (scene && state.mode === 'ready' ? scene : null),
    /** 캔버스는 장면을 만들 때 새로 생긴다 */
    watchCanvas: () => new MutationObserver(syncSceneImage).observe(sceneEl, { childList: true }),
    /** 부팅 첫머리 — 안전장치가 먼저 포기했어도(아주 느린 연결) 여기서 화면을 다시 살린다 */
    begin() {
      window[`${o.name}Booted`] = true;
      root.classList.add('js');
      setMode('loading');
      if (debug.poster) root.classList.add('is-poster');
    },
    /** 부팅 끝 — 3D를 시작한다 */
    async start() {
      if (debug.state === 'nowebgl' || !supportsWebGL2()) {
        enterFallback(copy.failed);
        return;
      }
      progress.schedule();
      const slowTimer = setTimeout(onSlow, motion.loadingSlow);
      try {
        if (debug.state === 'slow') await wait(motion.loadingSlow + 30000);
        if (abandoned) return;
        await startScene();
      } catch (error) {
        console.error(error);
        if (!abandoned) enterFallback(copy.failed);
      } finally {
        clearTimeout(slowTimer);
      }
    },
  };
}
