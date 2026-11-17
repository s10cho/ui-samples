/*
 * 화면 동작 — 설계서 5절(상태)·6절(상호작용)·7절(문구)
 *
 * 일반 스크립트다(ES 모듈 아님). 서버로 열어도, 파일을 더블클릭해 열어도(file://) 같은 코드가 돈다.
 * 좌표 계산은 js/iso-geom.js(IsoGeom)를 쓴다. 그림 자체는 index.html 에 들어 있다(tools/build-scene.mjs).
 *
 * 검수용 URL 파라미터(ui-review 가 상태별 화면을 띄울 때 쓴다):
 *   ?select=lift       명소 하나를 고른 상태 (lift · easy · expert · lodge · summit)
 *   ?weather=snow      눈 내림으로 시작
 *   ?motion=off        움직임 멈춘 상태로 시작
 *   ?zoom=max|min      가장 가까이 · 가장 멀리 본 상태(한계 버튼 비활성 확인)
 *   ?state=noscript    화면 스크립트를 쓸 수 없을 때의 화면(스크립트가 스스로 물러난다)
 */
(function () {
  'use strict';

  const root = document.documentElement;
  const params = new URLSearchParams(window.location.search);
  const debug = {
    state: params.get('state'),
    weather: params.get('weather'),
    select: params.get('select'),
    motion: params.get('motion'),
    zoom: params.get('zoom'),
  };

  const G = window.IsoGeom;
  if (!G || debug.state === 'noscript') {
    root.classList.remove('js');
    return;
  }

  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  const svg = $('#iso');
  const els = {
    scene: $('#scene'),
    labels: $('.scene__labels'),
    controls: $('.scene__controls'),
    toggles: $('.scene__toggles'),
    blockers: $$('.scene__toggles .text-btn, .scene__controls .icon-btn'),
    motionBtn: $('[data-action="motion"]'),
    weatherBtn: $('[data-action="weather"]'),
    limitButtons: $$('.scene__controls [data-action]').filter((b) => b.dataset.action !== 'reset'),
    announcer: $('[data-announcer]'),
    bannerRegion: $('.banner-region'),
    backdrop: $('.panel-backdrop'),
    details: $$('[data-detail]'),
    rows: $$('[data-row]', svg).sort((a, b) => a.dataset.row - b.dataset.row),
    chairs: $$('[data-chair]', svg).sort((a, b) => a.dataset.chair - b.dataset.chair),
    skiers: $$('[data-skier]', svg).sort((a, b) => a.dataset.skier - b.dataset.skier),
  };
  const data = JSON.parse($('#iso-data').textContent);
  const staticViewBox = svg.getAttribute('viewBox');

  const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
  const ms = (name) => parseFloat(cssVar(name)) || 0;
  const MOTION = {
    camera: ms('--ds-motion-camera'),
    cameraStep: ms('--ds-motion-camera-step'),
    hintHold: ms('--ds-motion-hint-hold'),
  };

  /** 보는 범위 — 설계서 3-2절 */
  const VIEW = {
    fitShare: 0.84, // 처음 시점: 산 그림이 보이는 자리에서 차지하는 비율
    focusShare: 0.7, // 명소를 고르면 그 명소가 차지하는 비율(리프트·슬로프처럼 산 높이만큼 긴 명소도 확대가 보이게)
    zoomStep: 4 / 3, // 가까이·멀리 버튼 한 번
    zoomMin: Math.pow(3 / 4, 2), // 처음 배율에서 멀리 보기 2번
    zoomMax: Math.pow(4 / 3, 4), // 처음 배율에서 가까이 보기 4번
    panStep: 0.25, // 옮기기 버튼 한 번 — 보이는 폭(높이)의 1/4
  };

  const COPY = {
    motionStop: '움직임 멈추기',
    motionStart: '움직임 다시 켜기',
    toSnow: '눈 내리게 하기',
    toClear: '눈 그치게 하기',
    viewing: (name) => `${name} 보는 중`,
    altClear: '눈 덮인 산 하나에 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 그림',
    altSnow: '눈이 내리는 산. 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 그림',
  };

  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  /** 넓은 폭 경계(CSS px) — css/style.css 의 @media 조건(휠 안내 포함)과 같은 값이어야 한다 */
  const BREAKPOINT_WIDE = 1024;
  const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT_WIDE}px)`);
  /** 가로 휴대폰(높이 480 미만) — css/style.css 의 같은 @media 조건. 그림이 화면 높이에 고정된다 */
  const BREAKPOINT_SHORT = 480;
  const landscapeQuery = window.matchMedia(
    `(max-width: ${BREAKPOINT_WIDE - 0.02}px) and (max-height: ${BREAKPOINT_SHORT - 0.02}px) and (orientation: landscape)`,
  );

  const state = {
    selected: null,
    weather: debug.weather === 'snow' ? 'snow' : 'clear',
    reduced: reducedQuery.matches,
    motion: debug.motion !== 'off' && !reducedQuery.matches,
    view: null, // { cx, cy, r } — r 는 처음 배율 대비 배율
    atHome: true,
    pageVisible: !document.hidden,
    sceneVisible: true,
    rideTime: data.t0,
  };

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  /* ---------- 명소 목록 — 스크립트가 없으면 설명으로 가는 링크, 있으면 명소를 고르는 버튼 ---------- */

  function swapLandmarks(toButtons) {
    return $$('.landmark').map((el) => {
      const next = document.createElement(toButtons ? 'button' : 'a');
      if (toButtons) next.type = 'button';
      else next.href = `#detail-${el.dataset.id}`;
      next.className = el.className;
      next.dataset.id = el.dataset.id;
      while (el.firstChild) next.appendChild(el.firstChild);
      el.replaceWith(next);
      return next;
    });
  }

  let landmarkButtons = [];
  let LANDMARKS = [];
  const nameOf = (id) => (LANDMARKS.find((l) => l.id === id) || {}).name || '';

  /* ---------- 화면낭독기 알림 ---------- */

  function announce(text) {
    els.announcer.textContent = '';
    if (text) requestAnimationFrame(() => (els.announcer.textContent = text));
  }

  /* ---------- 보는 범위(viewBox) ---------- */

  /** 넓은 폭에서 정보 패널이 그림을 가리는 너비(px) */
  function insetLeft() {
    if (!wideQuery.matches) return 0;
    return Math.max(0, els.backdrop.getBoundingClientRect().right - els.scene.getBoundingClientRect().left);
  }

  /**
   * 그림이 보이는 자리 — 패널이 가린 만큼 빼고, 위쪽 토글과 아래쪽 조작 버튼 사이를 쓴다.
   * 그 가운데를 기준점으로 삼는다. 버튼이 너무 커서(글자 확대) 남는 높이가 40% 아래면 전체 높이를 쓴다.
   */
  function frame() {
    const W = Math.max(1, els.scene.clientWidth);
    const H = Math.max(1, els.scene.clientHeight);
    const left = Math.min(insetLeft(), W - 1);
    let top = els.toggles.offsetHeight ? els.toggles.offsetTop + els.toggles.offsetHeight : 0;
    let bottom = els.controls.offsetHeight ? els.controls.offsetTop : H;
    if (bottom - top < H * 0.4) {
      top = 0;
      bottom = H;
    }
    return { W, H, left, w: W - left, h: bottom - top, ax: left + (W - left) / 2, ay: (top + bottom) / 2 };
  }

  function fitScale(box, share, fr) {
    return share * Math.min(fr.w / (box[2] - box[0]), fr.h / (box[3] - box[1]));
  }

  function homeScale(fr) {
    return fitScale(data.bounds, VIEW.fitShare, fr);
  }

  function homeView() {
    const b = data.bounds;
    return { cx: (b[0] + b[2]) / 2, cy: (b[1] + b[3]) / 2, r: 1 };
  }

  /** 명소 하나가 보이는 범위 — 명소 그림과 표지가 함께 들어오게 맞춘다 */
  function landmarkView(id, fr) {
    const item = data.landmarks[id];
    const a = item.anchor;
    const box = [Math.min(item.box[0], a[0]), Math.min(item.box[1], a[1] - 28), Math.max(item.box[2], a[0]), Math.max(item.box[3], a[1])];
    const r = fitScale(box, VIEW.focusShare, fr) / homeScale(fr);
    return clampView({ cx: (box[0] + box[2]) / 2, cy: (box[1] + box[3]) / 2, r: clamp(r, 1, VIEW.zoomMax) });
  }

  /** 가운데는 산 그림 범위 안에서만, 배율은 한계 안에서만 움직인다 */
  function clampView(v) {
    const b = data.bounds;
    return {
      cx: clamp(v.cx, b[0], b[2]),
      cy: clamp(v.cy, b[1], b[3]),
      r: clamp(v.r, VIEW.zoomMin, VIEW.zoomMax),
    };
  }

  function applyView(v) {
    const fr = frame();
    const s = v.r * homeScale(fr);
    const x = v.cx - fr.ax / s;
    const y = v.cy - fr.ay / s;
    svg.setAttribute('viewBox', `${x.toFixed(2)} ${y.toFixed(2)} ${(fr.W / s).toFixed(2)} ${(fr.H / s).toFixed(2)}`);
    state.view = v;
    placeMarkers(fr, s, x, y);
    updateLimits(v);
  }

  /** 화면 점(scene 기준 px) 아래에 있는 그림 좌표 */
  function toDrawing(v, fr, sx, sy) {
    const s = v.r * homeScale(fr);
    return [v.cx + (sx - fr.ax) / s, v.cy + (sy - fr.ay) / s];
  }

  /** 그림 점 p 가 화면 점 (qx, qy) 아래에 오도록 배율 r 의 보는 범위를 만든다 */
  function viewHolding(p, qx, qy, r, fr) {
    const s = r * homeScale(fr);
    return { cx: p[0] - (qx - fr.ax) / s, cy: p[1] - (qy - fr.ay) / s, r };
  }

  /* ---------- 움직임 예약(그리기 고리 하나) ---------- */

  let rafId = 0;
  let lastNow = 0;
  let anim = null;

  const ridesRunning = () => state.motion && state.pageVisible && state.sceneVisible;

  function requestTick() {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function tick(now) {
    rafId = 0;
    const dt = lastNow ? Math.min(0.1, (now - lastNow) / 1000) : 0;
    lastNow = now;
    if (ridesRunning()) {
      state.rideTime += dt;
      renderRides(state.rideTime);
    }
    if (anim) {
      const k = clamp((now - anim.start) / anim.duration, 0, 1);
      const e = easeOut(k);
      applyView({
        cx: anim.from.cx + (anim.to.cx - anim.from.cx) * e,
        cy: anim.from.cy + (anim.to.cy - anim.from.cy) * e,
        r: Math.exp(Math.log(anim.from.r) + (Math.log(anim.to.r) - Math.log(anim.from.r)) * e),
      });
      if (k >= 1) anim = null;
    }
    if (ridesRunning() || anim) rafId = requestAnimationFrame(tick);
    else lastNow = 0;
  }

  function cancelAnim() {
    anim = null;
  }

  function animateTo(target, duration) {
    const to = clampView(target);
    if (!state.view || duration <= 0 || state.reduced) {
      anim = null;
      applyView(to);
      return;
    }
    anim = { from: state.view, to, start: performance.now(), duration };
    requestTick();
  }

  /* ---------- 리프트 의자 · 스키어 ---------- */

  /** 앞뒤 줄 — 움직이는 것은 지금 서 있는 줄의 맨 뒤로 옮겨 그린다(뒤 줄 땅보다 앞, 앞 줄 땅보다 뒤) */
  const rowOf = (v) => clamp(Math.floor((v - data.rows.v0) / data.rows.step), 0, data.rows.count - 1);
  function moveToRow(el, v) {
    const row = els.rows[rowOf(v)];
    if (row && el.parentNode !== row) row.appendChild(el);
  }

  function setPoints(polys, faces, offset) {
    for (let i = 0; i < 3; i += 1) {
      const poly = polys[offset + i];
      const f = faces[i];
      if (!f) {
        poly.setAttribute('points', '');
        continue;
      }
      poly.setAttribute('points', G.pointsAttr(f.pts2));
      if (poly.isoClass !== f.cls) {
        poly.setAttribute('class', f.cls);
        poly.isoClass = f.cls;
      }
    }
  }

  const chairs = els.chairs.map((el) => ({ el, up: el.getAttribute('href') === '#cu' }));
  const skiers = els.skiers.map((g) => ({
    g,
    polys: $$('polygon', g),
    head: $('circle', g),
    visible: g.getAttribute('visibility') !== 'hidden',
  }));

  function renderRides(t) {
    G.liftChairs(t).forEach((ch, i) => {
      const c = chairs[i];
      if (!c) return;
      const p = G.project(ch.p);
      c.el.setAttribute('x', p[0].toFixed(1));
      c.el.setAttribute('y', p[1].toFixed(1));
      if (c.up !== ch.up) {
        c.up = ch.up;
        c.el.setAttribute('href', ch.up ? '#cu' : '#cd');
      }
      moveToRow(c.el, G.toUV(ch.p[0], ch.p[2])[1] + 0.4);
    });

    skiers.forEach((s, i) => {
      const pose = G.skierPose(i, t);
      if (pose.visible !== s.visible) {
        s.visible = pose.visible;
        s.g.setAttribute('visibility', pose.visible ? 'visible' : 'hidden');
      }
      if (!pose.visible) return;
      s.polys[0].setAttribute('points', G.pointsAttr(pose.skis));
      setPoints(s.polys, pose.body, 1);
      s.head.setAttribute('cx', pose.head[0].toFixed(1));
      s.head.setAttribute('cy', pose.head[1].toFixed(1));
      moveToRow(s.g, pose.v + 0.4);
    });
  }

  /* ---------- 명소 표지 ---------- */

  let markers = [];

  function createMarkers() {
    markers = LANDMARKS.map(({ id, name }) => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'marker is-hidden';
      el.tabIndex = -1;
      el.dataset.id = id;
      const pill = document.createElement('span');
      pill.className = 'marker__pill';
      const text = document.createElement('span');
      text.className = 'marker__text';
      text.textContent = name;
      pill.append(text);
      el.append(pill);
      el.addEventListener('click', () => select(id));
      els.labels.append(el);
      return { id, el, anchor: data.landmarks[id].anchor, shown: false, half: null, height: 0, pillW: 0, pillH: 0 };
    });
  }

  function measureMarkers() {
    markers.forEach((m) => {
      m.half = m.el.offsetWidth / 2;
      m.height = m.el.offsetHeight;
      m.pillW = m.el.firstElementChild.offsetWidth;
      m.pillH = m.el.firstElementChild.offsetHeight;
    });
  }

  /**
   * 표지를 명소 위에 띄운다. 고른 표지에 먼저 자리를 주고, 나머지는 앞(화면 아래)에 있는 것부터 준다.
   * 그림 위 버튼 하나하나의 경계 상자나 먼저 놓인 표지와 겹치면 숨긴다(버튼 묶음 전체 상자로 판정하지 않는다).
   * 고른 표지는 버튼을 비켜 위아래로 옮겨 본다.
   */
  function placeMarkers(fr, s, vbX, vbY) {
    if (markers.some((m) => m.half === null)) measureMarkers();
    const base = els.scene.getBoundingClientRect();
    const edge = 4;
    const blocked = els.blockers
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top }));
    const hit = (a, b) => a.l < b.r + edge && a.r > b.l - edge && a.t < b.b + edge && a.b > b.t - edge;
    const pillBox = (m, x, y) => {
      const cy = y - m.height / 2;
      return { l: x - m.pillW / 2, r: x + m.pillW / 2, t: cy - m.pillH / 2, b: cy + m.pillH / 2 };
    };
    const items = markers.map((m) => {
      const rawX = (m.anchor[0] - vbX) * s;
      const rawY = (m.anchor[1] - vbY) * s;
      const onScreen = rawX > fr.left && rawX < fr.W && rawY > 0 && rawY < fr.H + m.height;
      const minX = fr.left + m.half + edge;
      const x = clamp(rawX, minX, Math.max(minX, fr.W - m.half - edge));
      const y = clamp(rawY, m.height + edge, Math.max(m.height + edge, fr.H - edge));
      return { m, x, y, rawY, candidate: onScreen, current: m.id === state.selected };
    });
    items.sort((a, b) => Number(b.current) - Number(a.current) || b.rawY - a.rawY);
    const placed = [];
    items.forEach((it) => {
      let { y } = it;
      let show = it.candidate;
      if (show) {
        let box = pillBox(it.m, it.x, y);
        const block = it.current && blocked.find((r) => hit(box, r));
        if (block) {
          y += block.t > fr.H / 2 ? block.t - edge * 2 - box.b : block.b + edge * 2 - box.t;
          y = clamp(y, it.m.height + edge, Math.max(it.m.height + edge, fr.H - edge));
          box = pillBox(it.m, it.x, y);
        }
        if (blocked.some((r) => hit(box, r)) || placed.some((p) => hit(box, p))) show = false;
        else placed.push(box);
      }
      it.m.el.style.transform = `translate3d(${it.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      it.m.el.classList.toggle('is-current', it.current);
      if (show !== it.m.shown) {
        it.m.shown = show;
        it.m.el.classList.toggle('is-hidden', !show);
      }
    });
  }

  /* ---------- 한계 — 더 갈 수 없는 버튼은 흐리게 하고 이유를 툴팁에 쓴다 ---------- */

  function setLimit(button, atLimit) {
    const tip = $('.tooltip', button);
    const next = atLimit ? 'true' : 'false';
    if (button.getAttribute('aria-disabled') === next) return;
    button.setAttribute('aria-disabled', next);
    tip.textContent = atLimit ? tip.dataset.limit : button.getAttribute('aria-label');
    if (atLimit) button.setAttribute('aria-describedby', tip.id);
    else button.removeAttribute('aria-describedby');
  }

  function updateLimits(v) {
    const b = data.bounds;
    const eps = 0.5;
    const at = {
      'zoom-in': v.r >= VIEW.zoomMax * 0.999,
      'zoom-out': v.r <= VIEW.zoomMin * 1.001,
      'pan-left': v.cx <= b[0] + eps,
      'pan-right': v.cx >= b[2] - eps,
      'pan-up': v.cy <= b[1] + eps,
      'pan-down': v.cy >= b[3] - eps,
    };
    els.limitButtons.forEach((button) => setLimit(button, Boolean(at[button.dataset.action])));
  }

  /* ---------- 명소 선택 ---------- */

  function renderSelection() {
    landmarkButtons.forEach((button) => {
      if (button.dataset.id === state.selected) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
    const current = state.selected || 'intro';
    els.details.forEach((item) => item.classList.toggle('is-current', item.dataset.detail === current));
  }

  /** 고른 명소를 주소에 남긴다 — 새로고침·공유해도 같은 명소가 열린다(PLT-WEB-10) */
  function syncUrl() {
    try {
      const url = new URL(window.location.href);
      if (state.selected) url.searchParams.set('select', state.selected);
      else url.searchParams.delete('select');
      window.history.replaceState(null, '', url);
    } catch (error) {
      // 파일로 연 페이지(file://)에서 주소를 바꾸지 못하는 브라우저가 있다. 선택은 화면에만 남는다.
    }
  }

  function select(id, duration) {
    if (!LANDMARKS.some((l) => l.id === id)) return;
    state.selected = id;
    state.atHome = false;
    renderSelection();
    syncUrl();
    announce(COPY.viewing(nameOf(id)));
    animateTo(landmarkView(id, frame()), duration === undefined ? MOTION.camera : duration);
  }

  function resetView() {
    const hadSelection = state.selected !== null;
    state.selected = null;
    state.atHome = true;
    renderSelection();
    syncUrl();
    animateTo(homeView(), MOTION.camera);
    if (hadSelection) announce('');
  }

  /* ---------- 조작 버튼 ---------- */

  function onControl(action) {
    const v = state.view;
    const fr = frame();
    const s = v.r * homeScale(fr);
    state.atHome = false;
    if (action === 'reset') resetView();
    else if (action === 'zoom-in') animateTo({ cx: v.cx, cy: v.cy, r: v.r * VIEW.zoomStep }, MOTION.cameraStep);
    else if (action === 'zoom-out') animateTo({ cx: v.cx, cy: v.cy, r: v.r / VIEW.zoomStep }, MOTION.cameraStep);
    else if (action === 'pan-left') animateTo({ cx: v.cx - (fr.w * VIEW.panStep) / s, cy: v.cy, r: v.r }, MOTION.cameraStep);
    else if (action === 'pan-right') animateTo({ cx: v.cx + (fr.w * VIEW.panStep) / s, cy: v.cy, r: v.r }, MOTION.cameraStep);
    else if (action === 'pan-up') animateTo({ cx: v.cx, cy: v.cy - (fr.h * VIEW.panStep) / s, r: v.r }, MOTION.cameraStep);
    else if (action === 'pan-down') animateTo({ cx: v.cx, cy: v.cy + (fr.h * VIEW.panStep) / s, r: v.r }, MOTION.cameraStep);
  }

  /** 보이는 툴팁이 있으면 닫는다(WCAG 1.4.13 Dismissible). 닫았으면 true */
  function dismissTooltips() {
    const open = $$('.tooltip', els.controls).some((tip) => getComputedStyle(tip).visibility === 'visible');
    if (!open) return false;
    els.controls.classList.add('is-tip-dismissed');
    $$('.icon-btn.is-tip', els.controls).forEach((button) => button.classList.remove('is-tip'));
    return true;
  }

  /* ---------- 끌기 · 두 손가락 · 휠 ---------- */

  const pointers = new Map();
  let gesture = null;

  function scenePoint(event) {
    const base = els.scene.getBoundingClientRect();
    return [event.clientX - base.left, event.clientY - base.top];
  }

  function startGesture() {
    const pts = Array.from(pointers.values());
    const fr = frame();
    if (pts.length === 1) {
      gesture = { kind: 'drag', fr, last: pts[0] };
    } else if (pts.length >= 2) {
      const mid = [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2];
      gesture = {
        kind: 'pinch',
        fr,
        anchor: toDrawing(state.view, fr, mid[0], mid[1]),
        dist: Math.hypot(pts[0][0] - pts[1][0], pts[0][1] - pts[1][1]) || 1,
        r: state.view.r,
      };
    } else {
      gesture = null;
    }
  }

  function bindPointer() {
    svg.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      cancelAnim();
      state.atHome = false;
      pointers.set(event.pointerId, scenePoint(event));
      try {
        svg.setPointerCapture(event.pointerId);
      } catch (error) {
        // 포인터가 이미 사라졌으면 붙잡지 않는다
      }
      svg.classList.add('is-dragging');
      startGesture();
    });

    svg.addEventListener('pointermove', (event) => {
      if (!pointers.has(event.pointerId) || !gesture) return;
      pointers.set(event.pointerId, scenePoint(event));
      const pts = Array.from(pointers.values());
      const v = state.view;
      if (gesture.kind === 'drag') {
        const p = pts[0];
        const s = v.r * homeScale(gesture.fr);
        applyView(clampView({ cx: v.cx - (p[0] - gesture.last[0]) / s, cy: v.cy - (p[1] - gesture.last[1]) / s, r: v.r }));
        gesture.last = p;
      } else if (pts.length >= 2) {
        const mid = [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2];
        const dist = Math.hypot(pts[0][0] - pts[1][0], pts[0][1] - pts[1][1]) || 1;
        const r = clamp(gesture.r * (dist / gesture.dist), VIEW.zoomMin, VIEW.zoomMax);
        applyView(clampView(viewHolding(gesture.anchor, mid[0], mid[1], r, gesture.fr)));
      }
    });

    const endPointer = (event) => {
      if (!pointers.has(event.pointerId)) return;
      pointers.delete(event.pointerId);
      if (!pointers.size) svg.classList.remove('is-dragging');
      startGesture();
    };
    svg.addEventListener('pointerup', endPointer);
    svg.addEventListener('pointercancel', endPointer);

    // 넓은 폭에서만 휠을 확대에 쓴다. 좁은·중간 폭에서는 휠이 페이지를 스크롤한다(설계서 3절).
    // 휠 안내 문구도 같은 조건(css/style.css 의 .hint--mouse-wide)에서만 보인다.
    svg.addEventListener(
      'wheel',
      (event) => {
        if (!wideQuery.matches) return;
        event.preventDefault();
        cancelAnim();
        state.atHome = false;
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? els.scene.clientHeight : 1;
        const fr = frame();
        const p = scenePoint(event);
        const v = state.view;
        const r = clamp(v.r * Math.exp(-event.deltaY * unit * 0.0015), VIEW.zoomMin, VIEW.zoomMax);
        applyView(clampView(viewHolding(toDrawing(v, fr, p[0], p[1]), p[0], p[1], r, fr)));
      },
      { passive: false },
    );
  }

  /* ---------- 글꼴 — page subset 에 없는 글자가 있을 때만 다이나믹 서브셋을 붙인다 ---------- */

  function parseRanges(text) {
    return text.split(',').map((part) => {
      const [a, b] = part.trim().slice(2).split('-');
      return [parseInt(a, 16), parseInt(b || a, 16)];
    });
  }

  function ensureGlyphs() {
    const link = $('link[href$="pretendard-page-subset.css"]');
    if (!link || !document.fonts) return;
    const check = () => {
      let ranges = null;
      document.fonts.forEach((font) => {
        if (font.family.replace(/["']/g, '') === 'Pretendard Page') ranges = parseRanges(font.unicodeRange);
      });
      if (!ranges) return;
      // 화면에 나올 수 있는 글자: 본문(숨은 설명 포함) + 바뀌는 라벨·대체 텍스트 + 한계 툴팁
      const copy = Object.values(COPY).filter((v) => typeof v === 'string').join('');
      const limits = $$('[data-limit]').map((el) => el.dataset.limit).join('');
      const shown = new Set(document.body.textContent + copy + limits);
      const missing = Array.from(shown).some((ch) => {
        const cp = ch.codePointAt(0);
        return cp > 0x7e && ch.trim() && !ranges.some((r) => cp >= r[0] && cp <= r[1]);
      });
      if (!missing) return;
      const dynamic = document.createElement('link');
      dynamic.rel = 'stylesheet';
      dynamic.href = 'vendor/pretendard/pretendard-dynamic-subset.css';
      document.head.appendChild(dynamic);
    };
    if (link.sheet) check();
    else link.addEventListener('load', check);
  }

  /* ---------- 토글 ---------- */

  function renderMotion() {
    els.motionBtn.textContent = state.motion ? COPY.motionStop : COPY.motionStart;
    // is-still: 눈송이 층을 그 자리에 세운다(css/scene.css). is-instant: 날씨 색을 바로 바꾼다
    root.classList.toggle('is-still', !state.motion);
    root.classList.toggle('is-instant', !state.motion || state.reduced);
    requestTick();
  }

  function renderWeather() {
    root.dataset.weather = state.weather;
    els.weatherBtn.textContent = state.weather === 'snow' ? COPY.toClear : COPY.toSnow;
    svg.setAttribute('aria-label', state.weather === 'snow' ? COPY.altSnow : COPY.altClear);
  }

  /* ---------- 크기가 바뀌면(창·글자 확대·패널 폭) 같은 자리를 다시 맞춘다 ---------- */

  /**
   * 좁은·중간 폭에서 글자를 키워 토글·조작 버튼이 그림의 60% 넘게 차지하면, 그림을 버튼 사이 빈 띠가
   * 다시 40% 가 되는 높이까지 늘린다(버튼이 산을 덮지 않게). 넓은 폭·가로 휴대폰은 그림이 화면 높이에 고정이라 두지 않는다.
   */
  function fitSceneHeight() {
    els.scene.style.minHeight = '';
    if (wideQuery.matches || landscapeQuery.matches) return;
    const H = els.scene.clientHeight;
    const used = els.toggles.offsetTop + els.toggles.offsetHeight + (H - els.controls.offsetTop);
    if (H - used >= H * 0.4) return;
    els.scene.style.minHeight = `${Math.ceil(used / 0.6)}px`;
  }

  function relayout() {
    if (!state.view) return;
    fitSceneHeight();
    cancelAnim();
    markers.forEach((m) => (m.half = null));
    if (state.selected) applyView(landmarkView(state.selected, frame()));
    else if (state.atHome) applyView(homeView());
    else applyView(clampView(state.view));
  }

  /* ---------- 시작 ---------- */

  function boot() {
    landmarkButtons = swapLandmarks(true);
    LANDMARKS = landmarkButtons.map((button) => ({
      id: button.dataset.id,
      name: $('.landmark__name', button).textContent.trim(),
    }));
    createMarkers();

    // 처음 그릴 때는 날씨 색을 전환하지 않고 바로 칠한다
    root.classList.add('is-instant');
    renderWeather();
    renderSelection();
    renderMotion();
    root.classList.add('is-instant');
    renderRides(state.rideTime);

    fitSceneHeight();
    let start = homeView();
    if (debug.zoom === 'max') start = { cx: start.cx, cy: start.cy, r: VIEW.zoomMax };
    else if (debug.zoom === 'min') start = { cx: start.cx, cy: start.cy, r: VIEW.zoomMin };
    if (debug.zoom === 'max' || debug.zoom === 'min') state.atHome = false;
    applyView(clampView(start));
    if (debug.select && LANDMARKS.some((l) => l.id === debug.select)) select(debug.select, 0);

    landmarkButtons.forEach((button) => {
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
    els.weatherBtn.addEventListener('click', () => {
      state.weather = state.weather === 'snow' ? 'clear' : 'snow';
      renderWeather();
    });
    bindPointer();
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
      if (state.reduced) state.motion = false;
      renderMotion();
    });
    document.addEventListener('visibilitychange', () => {
      state.pageVisible = !document.hidden;
      requestTick();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        state.sceneVisible = entries[entries.length - 1].isIntersecting;
        requestTick();
      }).observe(els.scene);
    }
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(relayout);
      observer.observe(els.scene);
      observer.observe(els.backdrop);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);

    // 첫 칠이 끝난 뒤부터 날씨 전환을 보인다(움직임 멈춤·움직임 줄이기면 계속 즉시)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.toggle('is-instant', !state.motion || state.reduced)),
    );
    requestTick();
    ensureGlyphs();
    window.skiMountainIso = { state, view: () => state.view, limits: () => VIEW };
  }

  try {
    boot();
  } catch (error) {
    // 시작하다 실패하면 스크립트 없는 화면으로 물러난다: 그림은 처음 범위로 멈추고, 목록은 설명으로 가는 링크로 되돌리고,
    // 설명을 모두 펼친다. 배너를 다시 넣어 aria-live 자리가 알리게 한다.
    console.error(error);
    cancelAnim();
    if (rafId) cancelAnimationFrame(rafId);
    state.motion = false;
    svg.setAttribute('viewBox', staticViewBox);
    if ($('button.landmark')) swapLandmarks(false);
    markers.forEach((m) => m.el.remove());
    root.classList.remove('js', 'is-still', 'is-instant');
    root.dataset.weather = 'clear';
    const banner = $('.banner--noscript');
    if (banner && els.bannerRegion) {
      banner.remove();
      requestAnimationFrame(() => els.bannerRegion.appendChild(banner));
    }
  }
})();
