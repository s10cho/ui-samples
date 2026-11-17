/*
 * 2D 그림판 공용 뼈대(kit: shared/iso2d) — 일반 스크립트다(file:// 로 열어도 돈다).
 *   IsoCore      면 계산. 샘플 js/iso-geom.js 가 투영·햇빛·밝기 경계를 넘겨 create() 로 쓴다
 *   Iso2d.start  화면 틀(보는 범위·명소·끌기·확대·움직임·주소·live 영역). 샘플 js/scene.js 가 부른다
 * 순서: js/iso2d.js → js/iso-geom.js → js/scene.js
 * 설정: debugName · copy{motionStop, motionStart, viewing} · toggle{key, values, label, alt} · view · scene(ctx)
 * 검수용 주소: ?select=<명소 id> · ?<toggle.key>=<값> · ?motion=off · ?zoom=max|min · ?state=noscript
 */
(function (root) {
  'use strict';

  /* ========== 면 계산 — IsoCore ========== */

  const TAU = Math.PI * 2;
  const DEG = Math.PI / 180;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function add(a, b, k) {
    const s = k === undefined ? 1 : k;
    return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
  }
  function normalize(a) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [a[0] / l, a[1] / l, a[2] / l];
  }

  function fmt(v) {
    return (Math.round(v * 10) / 10).toString();
  }

  function pointsAttr(pts2) {
    return pts2.map((p) => fmt(p[0]) + ',' + fmt(p[1])).join(' ');
  }

  function newellNormal(pts) {
    let nx = 0;
    let ny = 0;
    let nz = 0;
    for (let i = 0; i < pts.length; i += 1) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      nx += (a[1] - b[1]) * (a[2] + b[2]);
      ny += (a[2] - b[2]) * (a[0] + b[0]);
      nz += (a[0] - b[0]) * (a[1] + b[1]);
    }
    return normalize([nx, ny, nz]);
  }

  function centroid(pts) {
    const c = [0, 0, 0];
    pts.forEach((p) => {
      c[0] += p[0];
      c[1] += p[1];
      c[2] += p[2];
    });
    return [c[0] / pts.length, c[1] / pts.length, c[2] / pts.length];
  }

  /** 원 둘레의 점. three.js 원기둥과 같은 각도 규칙(x = sin, z = cos) */
  function ringPoints(cx, y, cz, r, segs, rot) {
    const out = [];
    for (let k = 0; k < segs; k += 1) {
      const a = (rot || 0) + (k / segs) * TAU;
      out.push([cx + r * Math.sin(a), y, cz + r * Math.cos(a)]);
    }
    return out;
  }

  /** 같은 그림이 매번 나오도록 고정 씨앗 난수를 쓴다(3D 판과 같은 식) */
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6d2b79f5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * 그림 하나의 면 계산. project(p): 세계 → 그림 좌표 · view·light: 보는 쪽·햇빛 쪽 단위 벡터
   * tones: 밝기 경계 [윗면, 햇빛 쪽, 비스듬한 면] — 그 밑은 그늘
   */
  function create({ project, view, light, tones }) {
    const VIEW = view;
    const LIGHT = light;
    const [toneT, toneL, toneM] = tones;

    /** 앞뒤 순서 — 클수록 앞(나중에 그린다) */
    function depthOf(p) {
      return dot(p, VIEW);
    }

    /** 면의 밝기 단계 — t(위) · l(햇빛 쪽) · m(비스듬히) · d(그늘) */
    function toneOf(n) {
      const k = dot(n, LIGHT);
      if (k >= toneT) return 't';
      if (k >= toneL) return 'l';
      if (k >= toneM) return 'm';
      return 'd';
    }

    /**
     * 면 하나를 그릴 준비를 한다. 보이지 않는 면은 null.
     * inside 를 주면 면의 바깥쪽을 그 점에서 멀어지는 쪽으로 맞춘다.
     */
    function face(pts, mat, inside, normal) {
      let n = normal || newellNormal(pts);
      const c = centroid(pts);
      if (inside && dot(n, [c[0] - inside[0], c[1] - inside[1], c[2] - inside[2]]) < 0) n = [-n[0], -n[1], -n[2]];
      if (dot(n, VIEW) <= 1e-4) return null;
      return { pts2: pts.map(project), cls: 'm-' + mat + '-' + toneOf(n), depth: depthOf(c), n };
    }

    function sortFaces(faces) {
      return faces.filter(Boolean).sort((a, b) => a.depth - b.depth);
    }

    /** 원뿔대(원기둥 포함) — 옆면 + 윗면(반지름 0 이면 없음) */
    function frustum(cx, cz, y0, y1, r0, r1, segs, rot, mat, topMat) {
      const bottom = ringPoints(cx, y0, cz, r0, segs, rot);
      const top = ringPoints(cx, y1, cz, r1, segs, rot);
      const inside = [cx, (y0 + y1) / 2, cz];
      const faces = [];
      for (let k = 0; k < segs; k += 1) {
        const j = (k + 1) % segs;
        faces.push(face([bottom[k], bottom[j], top[j], top[k]], mat, inside));
      }
      if (r1 > 0.001) faces.push(face(top, topMat || mat, null, [0, 1, 0]));
      return sortFaces(faces);
    }

    /** 원뿔(지붕·나무·먼 산) — 바닥은 위에서 보이지 않으므로 옆면만 */
    function cone(cx, cz, y0, y1, r, segs, rot, mat) {
      const base = ringPoints(cx, y0, cz, r, segs, rot);
      const apex = [cx, y1, cz];
      const inside = [cx, y0, cz];
      const faces = [];
      for (let k = 0; k < segs; k += 1) {
        faces.push(face([base[k], base[(k + 1) % segs], apex], mat, inside));
      }
      return sortFaces(faces);
    }

    /** 방향을 가진 상자. ax·ay·az 단위 축, h 반 길이 */
    function orientedBox(c, ax, ay, az, h, mat, skipTop) {
      const corner = (sx, sy, sz) => add(add(add(c, ax, sx * h[0]), ay, sy * h[1]), az, sz * h[2]);
      const p = {};
      [-1, 1].forEach((sx) => [-1, 1].forEach((sy) => [-1, 1].forEach((sz) => (p[sx + ',' + sy + ',' + sz] = corner(sx, sy, sz)))));
      const q = (a, b, cc, d) => [p[a], p[b], p[cc], p[d]];
      return sortFaces([
        face(q('1,-1,-1', '1,1,-1', '1,1,1', '1,-1,1'), mat, c),
        face(q('-1,-1,-1', '-1,-1,1', '-1,1,1', '-1,1,-1'), mat, c),
        skipTop ? null : face(q('-1,1,-1', '-1,1,1', '1,1,1', '1,1,-1'), mat, c),
        face(q('-1,-1,-1', '1,-1,-1', '1,-1,1', '-1,-1,1'), mat, c),
        face(q('-1,-1,1', '1,-1,1', '1,1,1', '-1,1,1'), mat, c),
        face(q('-1,-1,-1', '-1,1,-1', '1,1,-1', '1,-1,-1'), mat, c),
      ]);
    }

    /** y 축으로 rot 만큼 돈 상자(three.js BoxGeometry·rotation.y 와 같다) */
    function box(cx, cy, cz, w, h, d, rot, mat, skipTop) {
      const r = rot || 0;
      return orientedBox([cx, cy, cz], [Math.cos(r), 0, -Math.sin(r)], [0, 1, 0], [Math.sin(r), 0, Math.cos(r)], [w / 2, h / 2, d / 2], mat, skipTop);
    }

    return { VIEW, LIGHT, project, depthOf, toneOf, face, sortFaces, frustum, cone, orientedBox, box };
  }

  root.IsoCore = {
    TAU,
    DEG,
    clamp,
    lerp,
    dot,
    cross,
    add,
    normalize,
    fmt,
    pointsAttr,
    newellNormal,
    centroid,
    ringPoints,
    seeded,
    create,
  };

  /* ========== 화면 틀 — Iso2d.start(cfg) ========== */

  function start(cfg) {
    const root = document.documentElement;
    const params = new URLSearchParams(window.location.search);
    const G = window.IsoGeom;
    if (!cfg || !G || params.get('state') === 'noscript') {
      root.classList.remove('js');
      return;
    }

    const T = cfg.toggle;
    const debug = {
      toggle: params.get(T.key),
      select: params.get('select'),
      motion: params.get('motion'),
      zoom: params.get('zoom'),
    };

    const $ = (selector, scope) => (scope || document).querySelector(selector);
    const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

    const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
    const ms = (name) => parseFloat(cssVar(name)) || 0;
    const MOTION = {
      camera: ms('--ds-motion-camera'),
      cameraStep: ms('--ds-motion-camera-step'),
      hintHold: ms('--ds-motion-hint-hold'),
    };

    /** 보는 범위 — 설계서 3-2절. 샘플 설정의 view 가 덮는다 */
    const VIEW_DEFAULTS = {
      fitShare: 0.84, // 처음 시점: 그림이 보이는 자리에서 차지하는 비율
      focusShare: 0.5, // 명소를 고르면 그 명소가 차지하는 비율
      zoomStep: 4 / 3, // 가까이·멀리 버튼 한 번
      zoomMin: Math.pow(3 / 4, 2), // 처음 배율에서 멀리 보기 2번
      zoomMax: Math.pow(4 / 3, 4), // 처음 배율에서 가까이 보기 4번
      panStep: 0.25, // 옮기기 버튼 한 번 — 보이는 폭(높이)의 1/4
    };
    const VIEW = Object.assign({}, VIEW_DEFAULTS, cfg.view);
    const COPY = cfg.copy;
    // 기본값은 고친 동작. 'groups' · false 는 옮기기 전 화면을 지키려고 남긴 값
    const OPT = {
      markerBlockers: cfg.markerBlockers === 'groups' ? 'groups' : 'buttons', // 표지 겹침 판정 상자: 버튼 · 버튼 묶음
      labelClearance: cfg.labelClearance !== false, // 처음 시점 위에 표지 한 줄을 비운다
      fitSceneHeight: cfg.fitSceneHeight !== false, // 버튼이 그림을 덮으면 그림을 늘린다
    };

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    /** 넓은 폭 경계(px) — css/style.css 의 @media 와 같은 값 */
    const BREAKPOINT_WIDE = 1024;
    const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT_WIDE}px)`);
    /** 가로 휴대폰(높이 480 미만) — css/style.css 와 같은 조건 */
    const BREAKPOINT_SHORT = 480;
    const landscapeQuery = window.matchMedia(
      `(max-width: ${BREAKPOINT_WIDE - 0.02}px) and (max-height: ${BREAKPOINT_SHORT - 0.02}px) and (orientation: landscape)`,
    );

    const state = {
      selected: null,
      [T.key]: debug.toggle === T.values[1] ? T.values[1] : T.values[0],
      reduced: reducedQuery.matches,
      motion: debug.motion !== 'off' && !reducedQuery.matches,
      view: null, // { cx, cy, r } — r 는 처음 배율 대비 배율
      atHome: true,
      pageVisible: !document.hidden,
      sceneVisible: true,
      sceneTime: 0, // init() 에서 data.t0
    };

    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    /** 움직이는 면(다각형 3개)을 다시 칠한다 */
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

    // init() 에서 찾는다. 실패하면 fallBack()
    let svg = null;
    let els = null;
    let data = null;
    let staticViewBox = null;
    let scene = null;

    function init() {
      svg = $('#iso');
      els = {
        scene: $('#scene'),
        labels: $('.scene__labels'),
        controls: $('.scene__controls'),
        toggles: $('.scene__toggles'),
        motionBtn: $('[data-action="motion"]'),
        toggleBtn: $(`[data-action="${T.key}"]`),
        limitButtons: $$('.scene__controls [data-action]').filter((b) => b.dataset.action !== 'reset'),
        sceneButtons: $$('.scene__toggles .text-btn, .scene__controls .icon-btn'),
        announcer: $('[data-announcer]'),
        backdrop: $('.panel-backdrop'),
        details: $$('[data-detail]'),
      };
      data = JSON.parse($('#iso-data').textContent);
      state.sceneTime = data.t0;
      staticViewBox = svg.getAttribute('viewBox');
      scene = cfg.scene({ G, root, svg, data, state, $, $$, setPoints, clamp });
    }

    /* ---------- 명소 목록 ---------- */

    function swapTag(el, tag) {
      const next = document.createElement(tag);
      Array.from(el.attributes).forEach((a) => {
        if (a.name !== 'href' && a.name !== 'type') next.setAttribute(a.name, a.value);
      });
      if (tag === 'button') next.type = 'button';
      else next.setAttribute('href', `#detail-${el.dataset.id}`);
      while (el.firstChild) next.appendChild(el.firstChild);
      el.replaceWith(next);
      return next;
    }

    let landmarkButtons = [];
    let swapped = []; // 링크에서 바꾼 버튼(물러날 때 되돌린다)
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

    /** 표지 한 줄 높이(px) — labelClearance 일 때 위에 비운다 */
    let labelClear = 0;

    /**
     * 그림이 보이는 자리 — 패널이 가린 만큼 빼고 토글과 조작 버튼 사이를 쓴다.
     * 남는 높이가 40% 아래면(글자 확대) 전체 높이를 쓴다.
     */
    function frame() {
      const W = Math.max(1, els.scene.clientWidth);
      const H = Math.max(1, els.scene.clientHeight);
      const left = Math.min(insetLeft(), W - 1);
      let top = (els.toggles.offsetHeight ? els.toggles.offsetTop + els.toggles.offsetHeight : 0) + labelClear;
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

    /** 가운데는 그림 범위 안에서만, 배율은 한계 안에서만 움직인다 */
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

    const sceneRunning = () => state.motion && state.pageVisible && state.sceneVisible;

    function requestTick() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function tick(now) {
      rafId = 0;
      const dt = lastNow ? Math.min(0.1, (now - lastNow) / 1000) : 0;
      lastNow = now;
      if (sceneRunning()) {
        state.sceneTime += dt;
        scene.render(state.sceneTime);
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
      if (sceneRunning() || anim) rafId = requestAnimationFrame(tick);
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

    /** 표지 알약 위 끝이 표지 자리에서 떨어진 거리(px) */
    function clearance() {
      return Math.max(0, ...markers.map((m) => m.height / 2 + m.pillH / 2)) + 4;
    }

    /** 표지를 명소 위에 띄운다. 고른 것 → 앞 순서로 놓고 버튼·다른 표지와 겹치면 숨긴다 */
    function placeMarkers(fr, s, vbX, vbY) {
      if (markers.some((m) => m.half === null)) measureMarkers();
      const base = els.scene.getBoundingClientRect();
      const edge = 4;
      const blocked = (OPT.markerBlockers === 'groups' ? [els.toggles, els.controls] : els.sceneButtons)
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

    /* ---------- 한계 — 더 갈 수 없으면 흐리게, 이유는 툴팁 ---------- */

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

    /** 고른 명소를 주소에 남긴다(PLT-WEB-10) */
    function syncUrl() {
      try {
        const url = new URL(window.location.href);
        if (state.selected) url.searchParams.set('select', state.selected);
        else url.searchParams.delete('select');
        window.history.replaceState(null, '', url);
      } catch (error) {
        // file:// 에서 주소를 못 바꾸는 브라우저가 있다
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

    function bindGestures() {
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

      // 휠 확대는 넓은 폭에서만(설계서 3절)
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

    /* ---------- 글꼴 — page subset 에 없는 글자가 있을 때만 다이나믹 서브셋 ---------- */

    function parseRanges(text) {
      return text.split(',').map((part) => {
        const [a, b] = part.trim().slice(2).split('-');
        return [parseInt(a, 16), parseInt(b || a, 16)];
      });
    }

    /** 스크립트가 바꿔 넣는 문구 — 움직임 버튼·토글 버튼·그림 대체 텍스트 */
    function changingCopy() {
      const out = [COPY.motionStop, COPY.motionStart];
      T.values.forEach((v) => out.push(T.label[v], T.alt[v]));
      return out.filter((v) => typeof v === 'string').join('');
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
        // 본문 + 바뀌는 문구 + 한계 툴팁
        const limits = $$('[data-limit]').map((el) => el.dataset.limit).join('');
        const shown = new Set(document.body.textContent + changingCopy() + limits);
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
      if (scene.onMotion) scene.onMotion(state.motion);
      root.classList.toggle('is-instant', !state.motion || state.reduced);
      requestTick();
    }

    function renderToggle() {
      const value = state[T.key];
      root.dataset[T.key] = value;
      els.toggleBtn.textContent = T.label[value];
      svg.setAttribute('aria-label', T.alt[value]);
    }

    /* ---------- 크기가 바뀌면 같은 자리를 다시 맞춘다 ---------- */

    /** 버튼이 그림의 60% 넘게 차지하면 그림을 늘린다(좁은·중간 폭) */
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
      if (OPT.fitSceneHeight) fitSceneHeight();
      cancelAnim();
      markers.forEach((m) => (m.half = null));
      if (OPT.labelClearance) {
        measureMarkers();
        labelClear = clearance();
      }
      if (state.selected) applyView(landmarkView(state.selected, frame()));
      else if (state.atHome) applyView(homeView());
      else applyView(clampView(state.view));
    }

    /* ---------- 시작 ---------- */

    function boot() {
      // 목록이 링크(스크립트 없음용)면 같은 모양의 버튼으로 바꾼다
      landmarkButtons = $$('.landmark').map((el) => {
        if (el.tagName !== 'A') return el;
        const button = swapTag(el, 'button');
        swapped.push(button);
        return button;
      });
      LANDMARKS = landmarkButtons.map((button) => ({ id: button.dataset.id, name: $('.landmark__name', button).textContent.trim() }));
      createMarkers();

      // 처음 그릴 때는 토글 색을 전환하지 않고 바로 칠한다
      root.classList.add('is-instant');
      renderToggle();
      renderSelection();
      renderMotion();
      root.classList.add('is-instant');
      scene.render(state.sceneTime);

      if (OPT.fitSceneHeight) fitSceneHeight();
      if (OPT.labelClearance) {
        measureMarkers();
        labelClear = clearance();
      }

      let start = homeView();
      if (debug.zoom === 'max') start = { cx: start.cx, cy: start.cy, r: VIEW.zoomMax };
      else if (debug.zoom === 'min') start = { cx: start.cx, cy: start.cy, r: VIEW.zoomMin };
      if (debug.zoom === 'max' || debug.zoom === 'min') state.atHome = false;
      applyView(clampView(start));
      if (debug.select && LANDMARKS.some((l) => l.id === debug.select)) select(debug.select, 0);

      landmarkButtons.forEach((button) => button.addEventListener('click', () => select(button.dataset.id)));
      bindGestures();
      els.controls.addEventListener('click', (event) => {
        if (event.target.closest('.tooltip')) return;
        const button = event.target.closest('[data-action]');
        if (!button) return;
        if (button.getAttribute('aria-disabled') === 'true') {
          // 터치에는 hover 가 없어 한계 이유를 잠깐 보이고 알린다
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
      els.toggleBtn.addEventListener('click', () => {
        state[T.key] = state[T.key] === T.values[1] ? T.values[0] : T.values[1];
        renderToggle();
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

      // 첫 칠 뒤부터 전환을 보인다
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.toggle('is-instant', !state.motion || state.reduced)),
      );
      requestTick();
      ensureGlyphs();
      if (cfg.debugName) window[cfg.debugName] = { state, view: () => state.view, limits: () => VIEW, frame };
    }

    /** 시작하다 실패하면 스크립트 없는 화면으로 물러난다 */
    function fallBack() {
      cancelAnim();
      if (rafId) cancelAnimationFrame(rafId);
      state.motion = false;
      const art = $('#iso');
      if (art && staticViewBox) art.setAttribute('viewBox', staticViewBox);
      const sceneEl = $('#scene');
      const focusLost = Boolean(sceneEl && sceneEl.contains(document.activeElement));
      swapped.forEach((button) => {
        if (button.isConnected) swapTag(button, 'a');
      });
      const labels = $('.scene__labels');
      if (labels) labels.replaceChildren();
      if (scene && scene.onFallback) {
        try {
          scene.onFallback();
        } catch (error) {
          // 물러나는 중에는 샘플 정리가 실패해도 계속 물러난다
        }
      }
      root.classList.remove('js', 'is-instant');
      root.dataset[T.key] = T.values[0];
      const text = $('.banner-region .banner__text');
      if (text) {
        const copy = text.textContent;
        text.textContent = '';
        requestAnimationFrame(() => (text.textContent = copy));
      }
      const landmarks = $('#landmarks');
      if (focusLost && landmarks) landmarks.focus();
    }

    try {
      init();
      boot();
    } catch (error) {
      console.error(error);
      fallBack();
    }
  }

  root.Iso2d = { start };
})(typeof window !== 'undefined' ? window : globalThis);
