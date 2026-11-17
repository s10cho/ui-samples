/*
 * 업무 화면 kit 스크립트 — 일반 스크립트(ES 모듈 아님). 파일로 열어도(file://) 동작한다.
 *   <script src="js/ds.js" defer></script>
 * 전역 이름은 window.DS 하나다. 속성만 달면 저절로 연결되는 동작과, 샘플 코드가 부르는 함수가 있다.
 *
 * 맡은 일
 *   DS.announce      live 영역 알림. live 영역은 처음부터 렌더링해 두고 내용만 바꾼다
 *   DS.banner        알림 배너 표시·닫기. 누른 버튼이 사라지면 포커스를 다음 자리로 옮긴다
 *   DS.url           주소(쿼리) 상태 읽기·쓰기 — 필터·탭·정렬·페이지
 *   DS.dialog        <dialog> 열기·닫기, 포커스 가두기, Esc, 연 요소로 포커스 돌려주기
 *   탭·묶음 버튼     role="tablist" · role="radiogroup" 화살표·Home·End 이동
 *   정렬 머리        .ds-sort 버튼 → th[aria-sort], 화면낭독기 알림, (선택) 화면에서 바로 정렬
 *   툴팁             [data-ds-tip] — 마우스 올림·키보드 포커스에 뜨고 Esc 로 닫힌다(WCAG 1.4.13)
 *   메뉴             [aria-haspopup="menu"] — 분할 버튼·행 메뉴
 *   칩               .ds-chip[aria-pressed] — 눌러서 켜고 끈다(ds:toggle)
 *   옆 메뉴 서랍     [data-ds-nav-toggle] — 좁은 폭에서 옆 메뉴 열기·닫기
 *   옆 패널          DS.panel · [data-ds-panel] — 열림을 주소에 남기고, 덮는 폭에서는 뒤를 inert 로
 *   테마             DS.theme — 밝게·어둡게·시스템. 저장값이 없으면 밝게 시작한다
 *   글꼴             DS.fonts — 화면 글자가 page subset 에 없을 때만 다이나믹 서브셋을 붙인다
 *   아이콘           DS.icon(name) — 문서 안 스프라이트(<use href="#ds-i-이름">) · DS.iconEl(name) 은 요소
 *   여러 줄 입력     form 안 textarea 에서 ⌘/Ctrl+Enter 로 제출(data-ds-no-submit-shortcut 로 끈다)
 *   로딩             DS.loadingTimer · DS.busy — 300ms 뒤에 보이고 400ms 는 남는다(둘 다 기본)
 */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var DS = (window.DS = window.DS || {});

  /* ---------- 도우미 ---------- */

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function resolve(x) { return typeof x === 'string' ? $(x) : x; }
  function token(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }
  function ms(name, fallback) {
    var v = parseFloat(token(name));
    return isNaN(v) ? fallback : v;
  }
  function remPx() { return parseFloat(getComputedStyle(root).fontSize) || 16; }
  function make(tag, cls, text) {
    var el = doc.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }
  function emit(target, name, detail) {
    target.dispatchEvent(new CustomEvent(name, { bubbles: true, detail: detail || {} }));
  }
  function reducedMotion() {
    return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  var FOCUSABLE = [
    'a[href]', 'area[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])', 'textarea:not([disabled])', 'summary', 'iframe',
    '[tabindex]:not([tabindex="-1"])', '[contenteditable="true"]'
  ].join(',');

  function isVisible(el) {
    if (!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)) return false;
    return getComputedStyle(el).visibility !== 'hidden';
  }

  function focusables(ctx) {
    return $$(FOCUSABLE, ctx).filter(function (el) {
      if (!isVisible(el) || el.closest('[inert]')) return false;
      // 라디오 묶음은 고른 하나만 Tab 순서에 든다
      if (el.type === 'radio' && el.name && !el.checked) {
        var group = $$('input[type="radio"][name="' + el.name + '"]', el.form || doc);
        return !group.some(function (r) { return r.checked; }) && group[0] === el;
      }
      return true;
    });
  }

  /* 기준 요소 뒤(문서 순서)의 첫 포커스 자리. 없으면 앞의 마지막 자리 */
  function nextFocusable(ref, exclude) {
    var all = focusables(doc).filter(function (el) { return !(exclude && exclude.contains(el)); });
    for (var i = 0; i < all.length; i++) {
      if (ref.compareDocumentPosition(all[i]) & Node.DOCUMENT_POSITION_FOLLOWING) return all[i];
    }
    return all.length ? all[all.length - 1] : null;
  }

  function focusEl(el) {
    if (!el) return;
    if (!el.matches(FOCUSABLE) && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus();
  }

  DS.focusNext = nextFocusable;

  /* ---------- 아이콘 — 문서 안 스프라이트. 24×24, 선 1.75 ---------- */

  var ICONS = {
    menu: '<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-up': '<path d="m6 15 6-6 6 6"/>',
    'chevron-left': '<path d="m15 6-6 6 6 6"/>',
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    'arrow-up': '<path d="M12 19V5M6 11l6-6 6 6"/>',
    'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    more: '<path d="M6 12h.01M12 12h.01M18 12h.01" stroke-width="3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.5h.01" stroke-width="2.5"/>',
    success: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.75 2.75L16 10"/>',
    error: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5"/><path d="M12 16h.01" stroke-width="2.5"/>',
    filter: '<path d="M4 6.5h16M7 12h10M10 17.5h4"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    moon: '<path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z"/>',
    monitor: '<path d="M4 5h16v11H4zM9 20h6M12 16v4"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    folder: '<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
    file: '<path d="M6.5 3.5H14l4 4v13H6.5z"/><path d="M14 3.5v4h4"/>',
    inbox: '<path d="M3.5 13.5 6 5.5h12l2.5 8v5h-17z"/><path d="M3.5 13.5h5l1 2h5l1-2h5"/>',
    chat: '<path d="M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 3.5V17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
    calendar: '<path d="M6 5.5h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2zM4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
    columns: '<path d="M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z"/>',
    home: '<path d="m4 11 8-7 8 7v9h-5v-6H9v6H4z"/>',
    lock: '<path d="M6.5 11h11a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-6A1.5 1.5 0 0 1 6.5 11zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/>',
    trash: '<path d="M5 7h14M10 4h4M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
    edit: '<path d="M15 5l4 4L9 19H5v-4z"/>',
    copy: '<path d="M9 9h10v11H9z"/><path d="M15 9V4H5v11h4"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 15V4M7 9l5-5 5 5M5 20h14"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.5"/><path d="M12 17h.01" stroke-width="2.5"/>'
  };

  DS.icons = Object.keys(ICONS);

  DS.icon = function (name, cls) {
    return '<svg class="ds-icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="#ds-i-' + name + '"></use></svg>';
  };

  function iconEl(name, cls) {
    var wrap = make('span');
    wrap.innerHTML = DS.icon(name, cls);
    return wrap.firstChild;
  }

  /** 아이콘 <svg> 요소를 돌려준다(appendChild 로 바로 붙일 때) */
  DS.iconEl = iconEl;

  function injectSprite() {
    if (doc.getElementById('ds-sprite')) return;
    var symbols = Object.keys(ICONS).map(function (k) {
      return '<symbol id="ds-i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>';
    }).join('');
    doc.body.insertAdjacentHTML('afterbegin',
      '<svg xmlns="http://www.w3.org/2000/svg" id="ds-sprite" class="ds-sprite" aria-hidden="true" focusable="false">' + symbols + '</svg>');
  }

  /* ---------- 1. live 영역 알림 ---------- */

  function liveRegion(assertive) {
    var id = assertive ? 'ds-live-alert' : 'ds-live';
    var el = doc.getElementById(id);
    if (!el) {
      el = make('div', 'ds-live');
      el.id = id;
      el.setAttribute('role', assertive ? 'alert' : 'status');
      doc.body.appendChild(el);
    }
    return el;
  }

  /** 화면낭독기에 한 줄을 읽힌다. 같은 문장을 다시 보내도 다시 읽힌다. */
  var liveTimers = {};

  /**
   * opts: { assertive(기본 false), clearAfter(ms, 기본 7000 · 0 이면 비우지 않음) }
   * 새 알림을 보내면 다른 live 영역의 낡은 문장도 비운다. 보낸 문장은 clearAfter 뒤에 비운다.
   */
  DS.announce = function (text, opts) {
    opts = opts || {};
    var assertive = !!opts.assertive;
    var el = liveRegion(assertive);
    var other = liveRegion(!assertive);
    clearTimeout(liveTimers[other.id]);
    other.textContent = '';
    clearTimeout(liveTimers[el.id]);
    el.textContent = '';
    setTimeout(function () { el.textContent = text; }, 100);
    var keep = typeof opts.clearAfter === 'number' ? opts.clearAfter : 7000;
    if (keep > 0) liveTimers[el.id] = setTimeout(function () { el.textContent = ''; }, keep + 100);
    DS.fonts.ensureText(text);
  };

  /* ---------- 2. 알림 배너 ---------- */

  var BANNER_ICON = { info: 'info', success: 'success', warning: 'info', danger: 'error' };

  function hideReplaced(banner, selector) {
    if (!selector) return;
    var list = $$(selector);
    list.forEach(function (el) { el.hidden = true; });
    banner._dsReplaced = list;
  }

  DS.banner = {
    /**
     * 배너를 띄운다. 같은 id 가 있으면 내용만 바꾼다.
     * { id, tone: info|success|warning|danger, title, text, actions: [{label, primary, onClick, close}],
     *   dismissible(기본 true), closeLabel, slot(기본 '.ds-banner-slot'), focusNext(선택자), replaces(선택자), announce(기본 true) }
     * replaces — 배너가 있는 동안 숨길 같은 뜻의 상시 안내(같은 문장 두 번 금지)
     */
    show: function (o) {
      o = o || {};
      var slot = resolve(o.slot || '.ds-banner-slot');
      if (!slot) return null;
      var el = o.id ? doc.getElementById(o.id) : null;
      if (!el) {
        el = make('div');
        if (o.id) el.id = o.id;
        slot.appendChild(el);
      }
      var tone = BANNER_ICON[o.tone] ? o.tone : 'info';
      el.className = 'ds-banner ds-banner--' + tone;
      el.setAttribute('data-ds-banner', '');
      el.textContent = '';
      el.appendChild(iconEl(BANNER_ICON[tone], 'ds-banner__icon'));

      var body = make('div', 'ds-banner__body');
      if (o.title) body.appendChild(make('p', 'ds-banner__title', o.title));
      if (o.text) body.appendChild(make('p', 'ds-banner__text', o.text));
      if (o.actions && o.actions.length) {
        var acts = make('div', 'ds-banner__actions');
        o.actions.forEach(function (a) {
          var b = make('button', 'ds-btn ds-btn--sm' + (a.primary ? ' ds-btn--primary' : ''), a.label);
          b.type = 'button';
          b.addEventListener('click', function () {
            var keep = a.onClick ? a.onClick(el) === false : false;
            if (!keep && a.close !== false) DS.banner.dismiss(el);
          });
          acts.appendChild(b);
        });
        body.appendChild(acts);
      }
      el.appendChild(body);

      if (o.dismissible !== false) {
        var x = make('button', 'ds-btn ds-btn--ghost ds-btn--icon ds-btn--sm ds-banner__close');
        x.type = 'button';
        x.setAttribute('aria-label', o.closeLabel || '알림 닫기');
        x.setAttribute('data-ds-dismiss', '');
        x.appendChild(iconEl('close'));
        el.appendChild(x);
      }
      if (o.focusNext) el.setAttribute('data-focus-next', o.focusNext);
      hideReplaced(el, o.replaces);

      var line = [o.title, o.text].filter(Boolean).join(' ');
      if (o.announce !== false && line) DS.announce(line, { assertive: tone === 'danger' });
      else DS.fonts.ensureText(line);

      // 배너가 화면 밖이면 보이는 곳까지만 스크롤한다(scroll:false 면 하지 않는다)
      var r = el.getBoundingClientRect();
      if (o.scroll !== false && (r.top < remPx() * 3.5 || r.bottom > window.innerHeight)) {
        el.scrollIntoView({ block: 'nearest', behavior: reducedMotion() ? 'auto' : 'smooth' });
      }
      emit(el, 'ds:banner-show', { id: el.id });
      return el;
    },

    /** 배너를 지운다. 배너 안에 포커스가 있었으면 data-focus-next 나 다음 자리로 옮긴다. */
    dismiss: function (el, opts) {
      el = resolve(el);
      if (!el || !el.isConnected) return;
      var active = doc.activeElement;
      var hadFocus = el.contains(active);
      var sel = (opts && opts.focusNext) || el.getAttribute('data-focus-next');
      var target = sel ? resolve(sel) : null;
      if (!target) target = nextFocusable(el, el);
      var replaced = el._dsReplaced || (el.getAttribute('data-replaces') ? $$(el.getAttribute('data-replaces')) : []);
      replaced.forEach(function (h) { h.hidden = false; });
      var id = el.id;
      var parent = el.parentNode;
      el.remove();
      if (hadFocus || doc.activeElement === doc.body) focusEl(target);
      emit(parent || doc, 'ds:banner-dismiss', { id: id });
    }
  };

  /* ---------- 3. 주소 상태 ---------- */

  DS.url = {
    get: function (key, fallback) {
      var v = new URLSearchParams(location.search).get(key);
      return v === null ? (fallback === undefined ? null : fallback) : v;
    },
    all: function () {
      var o = {};
      new URLSearchParams(location.search).forEach(function (v, k) { o[k] = v; });
      return o;
    },
    /** { key: 값 } 을 주소에 쓴다. 값이 null·''·false 면 지운다. 기본은 기록을 늘리지 않는다(replace). */
    set: function (obj, opts) {
      var p = new URLSearchParams(location.search);
      Object.keys(obj).forEach(function (k) {
        var v = obj[k];
        if (v === null || v === undefined || v === '' || v === false) p.delete(k);
        else p.set(k, String(v));
      });
      var q = p.toString();
      var url = location.pathname + (q ? '?' + q : '') + location.hash;
      try {
        history[opts && opts.push ? 'pushState' : 'replaceState'](history.state, '', url);
      } catch (e) {
        /* 주소를 바꿀 수 없는 환경이면 화면 상태만 바꾼다 */
      }
    },
    onChange: function (fn) {
      window.addEventListener('popstate', function () { fn(DS.url.all()); });
    }
  };

  /* ---------- 4. 대화상자 ---------- */

  var openers = new WeakMap();

  DS.dialog = {
    open: function (dlg, opener) {
      dlg = resolve(dlg);
      if (!dlg || dlg.open) return;
      openers.set(dlg, opener || doc.activeElement);
      dlg.returnValue = '';
      if (typeof dlg.showModal === 'function') dlg.showModal();
      else dlg.setAttribute('open', '');
      var first = $('[data-ds-initial-focus]', dlg) || focusables(dlg)[0] || dlg;
      focusEl(first);
      DS.fonts.ensureText(dlg.textContent);
      emit(dlg, 'ds:dialog-open');
    },
    close: function (dlg, value) {
      dlg = resolve(dlg);
      if (dlg && dlg.open) dlg.close(value || '');
    }
  };

  // 닫히면(Esc 포함) 연 요소로 포커스를 돌려준다(CMP-OVL-10)
  doc.addEventListener('close', function (e) {
    var dlg = e.target;
    if (!(dlg instanceof HTMLElement) || dlg.tagName !== 'DIALOG') return;
    var opener = openers.get(dlg);
    openers.delete(dlg);
    if (opener && opener.isConnected && isVisible(opener)) opener.focus();
    else focusEl(nextFocusable(dlg, dlg));
  }, true);

  function modalDialog() {
    var list = $$('dialog[open]').filter(function (d) {
      try { return d.matches(':modal'); } catch (e) { return true; }
    });
    return list[list.length - 1] || null;
  }

  /* ---------- 5. 화살표 이동 — 탭 · 묶음 버튼 ---------- */

  function arrowTarget(e, items, current, vertical) {
    var i = items.indexOf(current);
    if (i < 0) return null;
    var n = items.length;
    var prev = vertical ? ['ArrowUp'] : ['ArrowLeft'];
    var next = vertical ? ['ArrowDown'] : ['ArrowRight'];
    if (vertical === null) { prev = ['ArrowLeft', 'ArrowUp']; next = ['ArrowRight', 'ArrowDown']; }
    if (e.key === 'Home') return items[0];
    if (e.key === 'End') return items[n - 1];
    if (prev.indexOf(e.key) >= 0) return items[(i - 1 + n) % n];
    if (next.indexOf(e.key) >= 0) return items[(i + 1) % n];
    return null;
  }

  function tabsIn(list) {
    return $$('[role="tab"]', list).filter(function (t) { return t.closest('[role="tablist"]') === list && !t.disabled; });
  }

  // 고른 탭이 탭 줄 밖(가로 스크롤)에 있으면 줄 안으로 옮긴다. 페이지는 스크롤하지 않는다
  function revealTab(list, tab) {
    if (list.scrollWidth <= list.clientWidth) return;
    var lr = list.getBoundingClientRect();
    var tr = tab.getBoundingClientRect();
    var pad = remPx();
    if (tr.left < lr.left) list.scrollLeft -= lr.left - tr.left + pad;
    else if (tr.right > lr.right) list.scrollLeft += tr.right - lr.right + pad;
  }

  DS.tabs = {
    /**
     * 탭을 고른다. 사용자가 바꾸기 전에 취소할 수 있는 ds:tabbeforechange 를 보낸다
     * (detail: { tab, from, value }) — preventDefault() 하면 바꾸지 않고 false 를 돌려준다.
     * opts: { focus, fromUrl, force(이벤트 없이) }
     */
    select: function (tab, opts) {
      tab = resolve(tab);
      opts = opts || {};
      var list = tab.closest('[role="tablist"]');
      var tabs = tabsIn(list);
      var current = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0];
      if (!opts.fromUrl && !opts.force && current && current !== tab) {
        var before = new CustomEvent('ds:tabbeforechange', {
          bubbles: true, cancelable: true,
          detail: { tab: tab, from: current, value: tab.getAttribute('data-value') || tab.id }
        });
        if (!list.dispatchEvent(before)) return false;
      }
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = doc.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (opts.focus) tab.focus();
      revealTab(list, tab);
      var key = list.getAttribute('data-url-key');
      if (key && !opts.fromUrl) {
        var o = {};
        o[key] = tab === tabs[0] ? null : (tab.getAttribute('data-value') || tab.id);
        DS.url.set(o);
      }
      emit(list, 'ds:tabchange', { tab: tab, value: tab.getAttribute('data-value') || tab.id });
      return true;
    }
  };

  function radiosIn(group) {
    return $$('[role="radio"]', group).filter(function (r) {
      return r.closest('[role="radiogroup"]') === group && !r.disabled && r.getAttribute('aria-disabled') !== 'true';
    });
  }

  DS.radios = {
    select: function (radio, opts) {
      radio = resolve(radio);
      opts = opts || {};
      var group = radio.closest('[role="radiogroup"]');
      var items = radiosIn(group);
      items.forEach(function (r) {
        var on = r === radio;
        r.setAttribute('aria-checked', on ? 'true' : 'false');
        r.tabIndex = on ? 0 : -1;
      });
      if (opts.focus) radio.focus();
      var value = radio.getAttribute('data-value');
      var key = group.getAttribute('data-url-key');
      if (key && !opts.fromUrl) {
        var o = {};
        o[key] = radio === items[0] ? null : value;
        DS.url.set(o);
      }
      if (!opts.silent) emit(group, 'ds:change', { value: value, radio: radio });
    }
  };

  function initTabsAndRadios() {
    $$('[role="tablist"]').forEach(function (list) {
      var tabs = tabsIn(list);
      if (!tabs.length) return;
      var key = list.getAttribute('data-url-key');
      var fromUrl = key ? DS.url.get(key) : null;
      var pick = fromUrl && tabs.filter(function (t) { return (t.getAttribute('data-value') || t.id) === fromUrl; })[0];
      pick = pick || tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
      DS.tabs.select(pick, { fromUrl: true });
    });
    $$('[role="radiogroup"]').forEach(function (group) {
      var items = radiosIn(group);
      if (!items.length) return;
      var key = group.getAttribute('data-url-key');
      var fromUrl = key ? DS.url.get(key) : null;
      var pick = fromUrl && items.filter(function (r) { return r.getAttribute('data-value') === fromUrl; })[0];
      pick = pick || items.filter(function (r) { return r.getAttribute('aria-checked') === 'true'; })[0] || items[0];
      DS.radios.select(pick, { fromUrl: true, silent: true });
    });
  }

  /* ---------- 6. 정렬 머리 ---------- */

  var SORT_ICON = '<svg class="ds-sort__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">' +
    '<path class="ds-sort__up" d="M5 6.5 8 3.5l3 3"/><path class="ds-sort__down" d="m5 9.5 3 3 3-3"/></svg>';

  function cellValue(row, index) {
    var cell = row.cells[index];
    if (!cell) return '';
    return cell.hasAttribute('data-value') ? cell.getAttribute('data-value') : cell.textContent.trim();
  }

  function sortRows(table, index, dir) {
    var body = table.tBodies[0];
    if (!body) return;
    var rows = $$(':scope > tr', body).filter(function (r) {
      return !r.classList.contains('ds-table__empty') && !r.classList.contains('ds-table__skeleton');
    });
    var sign = dir === 'descending' ? -1 : 1;
    rows.sort(function (a, b) {
      var x = cellValue(a, index);
      var y = cellValue(b, index);
      var nx = parseFloat(x.replace(/,/g, ''));
      var ny = parseFloat(y.replace(/,/g, ''));
      if (!isNaN(nx) && !isNaN(ny) && /^-?[\d,.]+/.test(x) && /^-?[\d,.]+/.test(y)) return (nx - ny) * sign;
      return x.localeCompare(y, 'ko') * sign;
    });
    rows.forEach(function (r) { body.appendChild(r); });
  }

  DS.sort = {
    /** 표를 key 열로 정렬한 상태로 만든다. dir: ascending|descending */
    apply: function (table, key, dir, opts) {
      table = resolve(table);
      opts = opts || {};
      var btn = $('.ds-sort[data-key="' + key + '"]', table);
      if (!btn) return;
      var th = btn.closest('th');
      $$('th[aria-sort]', table).forEach(function (x) { x.removeAttribute('aria-sort'); });
      th.setAttribute('aria-sort', dir);
      if (table.hasAttribute('data-ds-sort-client')) sortRows(table, th.cellIndex, dir);
      var urlKey = table.getAttribute('data-url-key');
      if (urlKey && !opts.fromUrl) {
        var o = {};
        o[urlKey] = key + '.' + (dir === 'ascending' ? 'asc' : 'desc');
        DS.url.set(o);
      }
      if (!opts.silent) {
        var label = btn.textContent.trim();
        DS.announce(label + ' ' + (dir === 'ascending' ? '오름차순' : '내림차순') + '으로 정렬했어요');
        emit(table, 'ds:sort', { key: key, dir: dir });
      }
    }
  };

  function initSort() {
    $$('.ds-sort').forEach(function (b) {
      if (!$('.ds-sort__icon', b)) b.insertAdjacentHTML('beforeend', SORT_ICON);
    });
    $$('table[data-url-key]').forEach(function (table) {
      var v = DS.url.get(table.getAttribute('data-url-key'));
      if (!v) return;
      var parts = v.split('.');
      DS.sort.apply(table, parts[0], parts[1] === 'desc' ? 'descending' : 'ascending', { fromUrl: true, silent: true });
    });
  }

  /* ---------- 7. 툴팁 ---------- */

  var tip = null;
  var tipTarget = null;
  var tipSource = '';   // 'pointer' | 'focus' — 스크롤 때 마우스 툴팁만 닫고 포커스 툴팁은 다시 배치한다
  var showTimer = 0;
  var hideTimer = 0;

  function ensureTip() {
    if (tip) return tip;
    tip = make('div', 'ds-tooltip');
    tip.id = 'ds-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;
    doc.body.appendChild(tip);
    tip.addEventListener('pointerenter', function () { clearTimeout(hideTimer); });
    tip.addEventListener('pointerleave', scheduleHide);
    return tip;
  }

  function accName(el) {
    return (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function placeTip(el) {
    var r = el.getBoundingClientRect();
    var t = tip.getBoundingClientRect();
    var gap = remPx() * 0.375;
    var edge = remPx() * 0.25;
    var top = r.bottom + gap;
    if (top + t.height > window.innerHeight - edge) top = r.top - gap - t.height;
    var left = r.left + r.width / 2 - t.width / 2;
    left = Math.max(edge, Math.min(left, window.innerWidth - t.width - edge));
    tip.style.transform = 'translate(' + Math.round(left) + 'px, ' + Math.round(top) + 'px)';
  }

  function showTip(el, source) {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    var text = el.getAttribute('data-ds-tip');
    if (!text || !el.isConnected) return;
    if (tipTarget && tipTarget !== el) hideTip();
    ensureTip();
    tip.textContent = text;
    tip.hidden = false;
    tipTarget = el;
    tipSource = source || 'focus';
    if (text !== accName(el)) {
      var ids = (el.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
      if (ids.indexOf('ds-tooltip') < 0) el.setAttribute('aria-describedby', ids.concat('ds-tooltip').join(' '));
    }
    placeTip(el);
  }

  function hideTip() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (!tip || tip.hidden) return;
    tip.hidden = true;
    if (tipTarget) {
      var ids = (tipTarget.getAttribute('aria-describedby') || '').split(/\s+/).filter(function (x) { return x && x !== 'ds-tooltip'; });
      if (ids.length) tipTarget.setAttribute('aria-describedby', ids.join(' '));
      else tipTarget.removeAttribute('aria-describedby');
    }
    tipTarget = null;
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideTip, 150);
  }

  DS.tooltip = { show: showTip, hide: hideTip };

  /* ---------- 8. 메뉴 ---------- */

  var openMenuBtn = null;

  function menuOf(btn) { return doc.getElementById(btn.getAttribute('aria-controls')); }
  function menuItems(menu) {
    return $$('[role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"]', menu).filter(function (i) {
      return !i.disabled && isVisible(i);
    });
  }

  function openMenu(btn, last) {
    if (openMenuBtn && openMenuBtn !== btn) closeMenu(openMenuBtn, false);
    var menu = menuOf(btn);
    if (!menu) return;
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    openMenuBtn = btn;
    var items = menuItems(menu);
    items.forEach(function (i) { i.tabIndex = -1; });
    var first = last ? items[items.length - 1] : items[0];
    if (first) first.focus();
  }

  function closeMenu(btn, refocus) {
    var menu = menuOf(btn);
    if (menu) menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    if (openMenuBtn === btn) openMenuBtn = null;
    if (refocus) btn.focus();
  }

  DS.menu = { open: openMenu, close: closeMenu };

  /* ---------- 9. 옆 메뉴 서랍(좁은 폭) ---------- */

  var wide = window.matchMedia ? matchMedia('(min-width: 64rem)') : null;

  function setNav(app, open, opts) {
    if (!app) return;
    opts = opts || {};
    var nav = $('.ds-app__nav', app);
    var toggle = $('[data-ds-nav-toggle]', app);
    var scrim = $('.ds-app__scrim', app);
    if (!scrim) {
      scrim = make('div', 'ds-app__scrim');
      scrim.setAttribute('aria-hidden', 'true');
      app.appendChild(scrim);
    }
    var others = $$(':scope > .ds-app__top, :scope > .ds-app__main, :scope > .ds-app__panel', app);
    if (open) {
      app.setAttribute('data-nav-open', '');
      others.forEach(function (el) { el.inert = true; });
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      var first = nav && ($('[data-ds-nav-close]', nav) || focusables(nav)[0]);
      // 서랍이 미끄러져 들어온 뒤 포커스를 옮긴다
      setTimeout(function () { focusEl(first); }, 0);
    } else {
      app.removeAttribute('data-nav-open');
      others.forEach(function (el) { el.inert = false; });
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (opts.refocus && toggle && isVisible(toggle)) toggle.focus();
    }
  }

  DS.nav = {
    open: function (app) { setNav(resolve(app) || $('.ds-app'), true); },
    close: function (app) { setNav(resolve(app) || $('.ds-app'), false, { refocus: true }); }
  };

  /* ---------- 9-2. 옆 패널 — 1280 이상은 본문 옆에 붙고(비모달), 그보다 좁으면 덮는다(뒤는 inert) ---------- */

  var docked = window.matchMedia ? matchMedia('(min-width: 80rem)') : null;
  var panelOpeners = new WeakMap();

  function panelControls(panel) {
    return $$('[data-ds-panel="' + panel.id + '"]');
  }

  function syncPanel(panel) {
    var app = panel.closest('.ds-app');
    if (!app) return;
    var open = !panel.hidden;
    var overlay = open && !(docked && docked.matches);
    app.classList.toggle('ds-app--panel', open);
    if (overlay) app.setAttribute('data-panel-overlay', '');
    else app.removeAttribute('data-panel-overlay');
    if (overlay && !$('.ds-app__scrim', app)) {
      var scrim = make('div', 'ds-app__scrim');
      scrim.setAttribute('aria-hidden', 'true');
      app.appendChild(scrim);
    }
    $$(':scope > .ds-app__top, :scope > .ds-app__nav, :scope > .ds-app__main', app).forEach(function (el) {
      el.inert = overlay;
    });
    panelControls(panel).forEach(function (b) { b.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  }

  DS.panel = {
    /** 옆 패널을 연다. opts: { opener, focus(기본 true), fromUrl } */
    open: function (panel, opts) {
      panel = resolve(panel);
      opts = opts || {};
      if (!panel || !panel.hidden) return;
      var opener = opts.opener || doc.activeElement;
      if (!opener || opener === doc.body) opener = panelControls(panel)[0]; // 주소로 열었으면 패널을 여는 버튼으로 돌아간다
      panelOpeners.set(panel, opener);
      panel.hidden = false;
      syncPanel(panel);
      var key = panel.getAttribute('data-url-key');
      if (key && !opts.fromUrl) {
        var o = {};
        o[key] = panel.getAttribute('data-url-value') || 'open';
        DS.url.set(o);
      }
      // 덮는 폭에서는 뒤가 inert 이므로 주소로 열었어도 포커스를 패널 안으로 옮긴다
      var overlayNow = panel.closest('.ds-app') && panel.closest('.ds-app').hasAttribute('data-panel-overlay');
      if (opts.focus !== false || overlayNow) focusEl($('[data-ds-initial-focus]', panel) || $('.ds-panel__title', panel) || focusables(panel)[0] || panel);
      DS.fonts.ensureText(panel.textContent);
      emit(panel, 'ds:panel-open');
    },
    /** 옆 패널을 닫고 연 요소로 포커스를 돌려준다 */
    close: function (panel) {
      panel = resolve(panel);
      if (!panel || panel.hidden) return;
      var hadFocus = panel.contains(doc.activeElement);
      panel.hidden = true;
      syncPanel(panel);
      var key = panel.getAttribute('data-url-key');
      if (key) {
        var o = {};
        o[key] = null;
        DS.url.set(o);
      }
      var opener = panelOpeners.get(panel) || panelControls(panel)[0];
      if (hadFocus || doc.activeElement === doc.body) {
        if (opener && opener.isConnected && isVisible(opener)) opener.focus();
        else focusEl(nextFocusable(panel, panel));
      }
      emit(panel, 'ds:panel-close');
    },
    toggle: function (panel, opts) {
      panel = resolve(panel);
      if (panel && panel.hidden) DS.panel.open(panel, opts);
      else DS.panel.close(panel);
    }
  };

  function initPanels() {
    $$('.ds-app__panel[id]').forEach(function (panel) {
      var key = panel.getAttribute('data-url-key');
      var want = panel.getAttribute('data-url-value') || 'open';
      if (key && DS.url.get(key) === want) DS.panel.open(panel, { fromUrl: true, focus: false });
      else syncPanel(panel);
    });
    if (docked && docked.addEventListener) {
      docked.addEventListener('change', function () {
        $$('.ds-app__panel[id]').forEach(syncPanel);
      });
    }
  }

  /* ---------- 10. 테마 — 밝게(기본) · 어둡게 · 시스템 ---------- */

  var THEME_KEY = 'ds-theme';
  var darkQuery = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;

  function savedMode() {
    try { return localStorage.getItem(THEME_KEY) || 'light'; } catch (e) { return 'light'; }
  }

  function applyTheme(mode) {
    if (root.hasAttribute('data-theme-lock')) return;
    var dark = mode === 'dark' || (mode === 'system' && darkQuery && darkQuery.matches);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    root.setAttribute('data-theme-mode', mode);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', token('--ds-color-surface-default'));
    $$('[data-ds-theme-control]').forEach(function (group) {
      var radio = $('[role="radio"][data-value="' + mode + '"]', group);
      if (radio) DS.radios.select(radio, { fromUrl: true, silent: true });
      if (group.tagName === 'SELECT') group.value = mode;
    });
    emit(doc, 'ds:themechange', { mode: mode, theme: dark ? 'dark' : 'light' });
  }

  DS.theme = {
    get: savedMode,
    /** mode: light | dark | system. save:false 면 저장하지 않는다(?theme= 미리보기) */
    set: function (mode, opts) {
      if (!opts || opts.save !== false) {
        try { localStorage.setItem(THEME_KEY, mode); } catch (e) { /* 저장할 수 없으면 이번 화면에만 적용 */ }
      }
      applyTheme(mode);
    }
  };

  function initTheme() {
    if (root.hasAttribute('data-theme-lock')) return;
    var preview = DS.url.get('theme');
    if (preview === 'dark' || preview === 'light') applyTheme(preview);
    else applyTheme(savedMode());
    if (darkQuery && darkQuery.addEventListener) {
      darkQuery.addEventListener('change', function () {
        if (root.getAttribute('data-theme-mode') === 'system') applyTheme('system');
      });
    }
  }

  /* ---------- 11. 글꼴 — 빠진 글자가 있을 때만 다이나믹 서브셋을 붙인다 ---------- */

  var fontRanges = null;
  var dynamicAdded = false;

  function parseRanges(text) {
    return text.split(',').map(function (part) {
      var ab = part.trim().replace(/^U\+/i, '').split('-');
      return [parseInt(ab[0], 16), parseInt(ab[1] || ab[0], 16)];
    });
  }

  function pageRanges() {
    if (fontRanges || !doc.fonts) return fontRanges;
    doc.fonts.forEach(function (font) {
      if (font.family.replace(/["']/g, '') === 'Pretendard Page') fontRanges = parseRanges(font.unicodeRange);
    });
    return fontRanges;
  }

  function addDynamic() {
    if (dynamicAdded || location.protocol === 'file:') return;
    dynamicAdded = true;
    var link = make('link');
    link.rel = 'stylesheet';
    link.href = 'vendor/pretendard/pretendard-dynamic-subset.css';
    doc.head.appendChild(link);
  }

  function hasMissing(text) {
    var ranges = pageRanges();
    if (!ranges) return false;
    for (var i = 0; i < text.length; i++) {
      var cp = text.codePointAt(i);
      if (cp > 0xffff) i++;
      if (cp <= 0x7e || /\s/.test(text[i])) continue;
      var inside = false;
      for (var j = 0; j < ranges.length; j++) {
        if (cp >= ranges[j][0] && cp <= ranges[j][1]) { inside = true; break; }
      }
      if (!inside) return true;
    }
    return false;
  }

  DS.fonts = {
    /** 이 글이 page subset 에 없는 글자를 담으면 다이나믹 서브셋을 붙인다 */
    ensureText: function (text) {
      if (!text || dynamicAdded || location.protocol === 'file:') return;
      if (!pageRanges()) return;
      if (hasMissing(text)) addDynamic();
    },
    /** 화면 전체 글자를 본다. extra 에 나중에 보일 문구를 넘긴다 */
    ensure: function (extra) {
      if (location.protocol === 'file:') return;
      var link = $('link[href$="pretendard-page-subset.css"]');
      if (!link) { addDynamic(); return; }
      var run = function () {
        var attrs = $$('[placeholder], [data-ds-tip], [data-label]').map(function (el) {
          return (el.getAttribute('placeholder') || '') + (el.getAttribute('data-ds-tip') || '') + (el.getAttribute('data-label') || '');
        }).join('');
        if (!pageRanges()) { addDynamic(); return; }
        if (hasMissing(doc.body.textContent + attrs + (extra || ''))) addDynamic();
      };
      if (link.sheet) run();
      else link.addEventListener('load', run);
    }
  };

  /* ---------- 12. 로딩 — 300ms 뒤에 보이고, 한번 보이면 400ms 는 남는다(CMP-FB-08) ---------- */

  DS.loadingTimer = function (onShow, onHide) {
    var shownAt = 0;
    var stopped = false;
    var timer = setTimeout(function () {
      if (stopped) return;
      shownAt = Date.now();
      onShow();
    }, ms('--ds-motion-loading-delay', 300));
    return {
      stop: function () {
        stopped = true;
        clearTimeout(timer);
        if (!shownAt) { if (onHide) onHide(false); return; }
        var wait = Math.max(0, ms('--ds-motion-loading-min', 400) - (Date.now() - shownAt));
        setTimeout(function () { if (onHide) onHide(true); }, wait);
      }
    };
  };

  function showBusy(btn) {
    btn._dsLabel = Array.prototype.slice.call(btn.childNodes);
    btn._dsAriaDisabled = btn.getAttribute('aria-disabled');
    btn.setAttribute('aria-busy', 'true');
    btn.setAttribute('aria-disabled', 'true');
    btn.textContent = '';
    var spin = make('span', 'ds-spinner');
    spin.setAttribute('aria-hidden', 'true');
    btn.appendChild(spin);
    btn.appendChild(make('span', null, btn.getAttribute('data-busy-label') || '처리 중…'));
  }

  function hideBusy(btn) {
    btn.removeAttribute('aria-busy');
    // 처리 전에 있던 aria-disabled 값으로 되돌린다(없었으면 지운다)
    if (btn._dsAriaDisabled == null) btn.removeAttribute('aria-disabled');
    else btn.setAttribute('aria-disabled', btn._dsAriaDisabled);
    btn._dsAriaDisabled = null;
    if (btn._dsLabel) {
      btn.textContent = '';
      btn._dsLabel.forEach(function (n) { btn.appendChild(n); });
      btn._dsLabel = null;
    }
  }

  /**
   * 버튼을 처리 중으로 바꾼다(CMP-BTN-08·09, MOT-07).
   * - 켜면 바로 다시 누르지 못하게 막고(data-ds-pending), 300ms 가 지나도 안 끝났을 때만 회전 표시와
   *   data-busy-label(없으면 "처리 중…") 글자를 보인다. 그 전에 끝나면 아무것도 보이지 않는다.
   * - 끄면 회전 표시가 보였던 경우 최소 400ms 를 채운 뒤 원래 글자로 돌린다. 돌린 뒤 이어지는 Promise 를 돌려준다.
   * - opts.delay 로 지연을 바꿀 수 있다(0 이면 바로 보인다).
   */
  DS.busy = function (btn, on, opts) {
    btn = resolve(btn);
    if (!btn) return Promise.resolve();
    var st = btn._dsBusy;
    if (on) {
      if (st) return Promise.resolve();
      st = btn._dsBusy = { shownAt: 0 };
      btn.setAttribute('data-ds-pending', '');
      var delay = opts && typeof opts.delay === 'number' ? opts.delay : ms('--ds-motion-loading-delay', 300);
      st.timer = setTimeout(function () {
        st.shownAt = Date.now();
        showBusy(btn);
      }, delay);
      return Promise.resolve();
    }
    if (!st) return Promise.resolve();
    clearTimeout(st.timer);
    btn._dsBusy = null;
    return new Promise(function (done) {
      var finish = function () {
        btn.removeAttribute('data-ds-pending');
        if (st.shownAt) hideBusy(btn);
        done();
      };
      if (!st.shownAt) { finish(); return; }
      setTimeout(finish, Math.max(0, ms('--ds-motion-loading-min', 400) - (Date.now() - st.shownAt)));
    });
  };

  /* ---------- 이벤트 위임 ---------- */

  // aria-disabled 요소와 처리 중인 버튼은 눌러도 동작하지 않는다(포커스·툴팁은 받는다)
  doc.addEventListener('click', function (e) {
    var off = e.target.closest && e.target.closest('[aria-disabled="true"], [data-ds-pending]');
    if (off && !off.closest('[data-ds-allow-disabled]')) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // 처리 중(data-ds-pending · aria-busy)인 제출 버튼이 있는 폼은 Enter 로도 다시 제출되지 않는다
  doc.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.querySelector) return;
    var pending = form.hasAttribute('data-ds-pending') ||
      (e.submitter && e.submitter.matches('[data-ds-pending], [aria-busy="true"]')) ||
      form.querySelector('button[data-ds-pending]:not([type="button"]):not([type="reset"]), input[type="submit"][data-ds-pending], button[aria-busy="true"]:not([type="button"]):not([type="reset"])');
    if (pending) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // 여러 줄 입력에서 ⌘/Ctrl+Enter — 폼을 제출한다(CMP-INPUT-13). Enter 는 줄바꿈으로 둔다.
  // 샘플이 먼저 처리했으면(preventDefault) 건너뛴다 — window 에서 들어 문서·요소의 리스너가 모두 끝난 뒤에 본다.
  // data-ds-no-submit-shortcut 이 칸·폼에 있으면 하지 않는다
  window.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.key !== 'Enter' || !(e.metaKey || e.ctrlKey) || e.isComposing) return;
    var t = e.target;
    if (!t || t.tagName !== 'TEXTAREA' || !t.form || t.closest('[data-ds-no-submit-shortcut]')) return;
    e.preventDefault();
    if (typeof t.form.requestSubmit === 'function') t.form.requestSubmit();
    else t.form.submit();
  });

  doc.addEventListener('click', function (e) {
    var t = e.target;
    if (!t.closest) return;

    // 열린 메뉴 — 항목을 누르면 닫고 메뉴 버튼으로, 바깥을 누르면 그냥 닫는다
    if (openMenuBtn && !openMenuBtn.contains(t)) {
      var openMenuEl = menuOf(openMenuBtn);
      var picked = t.closest('[role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"]');
      if (picked && openMenuEl && openMenuEl.contains(picked)) closeMenu(openMenuBtn, true);
      else if (!openMenuEl || !openMenuEl.contains(t)) closeMenu(openMenuBtn, false);
    }

    var dismiss = t.closest('[data-ds-dismiss]');
    if (dismiss) {
      DS.banner.dismiss(dismiss.closest('[data-ds-banner]'));
      return;
    }

    var opener = t.closest('[data-ds-dialog]');
    if (opener) {
      DS.dialog.open(doc.getElementById(opener.getAttribute('data-ds-dialog')), opener);
      return;
    }

    var closer = t.closest('[data-ds-close]');
    if (closer && closer.closest('dialog')) {
      DS.dialog.close(closer.closest('dialog'), closer.getAttribute('data-ds-close'));
      return;
    }

    // 가림막을 눌러 닫는 대화상자(data-ds-light-dismiss)
    if (t.tagName === 'DIALOG' && t.open && t.hasAttribute('data-ds-light-dismiss')) {
      var r = t.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) DS.dialog.close(t);
      return;
    }

    var tab = t.closest('[role="tab"]');
    if (tab && tab.closest('[role="tablist"]')) {
      DS.tabs.select(tab);
      return;
    }

    // 켜고 끄는 칩(필터) — aria-pressed 를 바꾸고 ds:toggle 을 보낸다
    var chip = t.closest('.ds-chip[aria-pressed]');
    if (chip) {
      var pressed = chip.getAttribute('aria-pressed') !== 'true';
      chip.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      emit(chip, 'ds:toggle', { pressed: pressed });
      return;
    }

    var radio = t.closest('[role="radio"]');
    if (radio && radio.closest('[role="radiogroup"]')) {
      DS.radios.select(radio);
      return;
    }

    var sortBtn = t.closest('.ds-sort');
    if (sortBtn) {
      var th = sortBtn.closest('th');
      var dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
      DS.sort.apply(sortBtn.closest('table'), sortBtn.getAttribute('data-key') || String(th.cellIndex), dir);
      return;
    }

    var menuBtn = t.closest('[aria-haspopup="menu"]');
    if (menuBtn && menuBtn.getAttribute('aria-controls')) {
      if (menuBtn.getAttribute('aria-expanded') === 'true') closeMenu(menuBtn, false);
      else openMenu(menuBtn);
      return;
    }

    var panelBtn = t.closest('[data-ds-panel]');
    if (panelBtn) {
      DS.panel.toggle(doc.getElementById(panelBtn.getAttribute('data-ds-panel')), { opener: panelBtn });
      return;
    }

    var panelClose = t.closest('[data-ds-panel-close]');
    if (panelClose && panelClose.closest('.ds-app__panel')) {
      DS.panel.close(panelClose.closest('.ds-app__panel'));
      return;
    }

    // 가림막 — 서랍이 열렸으면 서랍을, 아니면 덮고 있는 옆 패널을 닫는다
    if (t.classList.contains('ds-app__scrim')) {
      var scrimApp = t.closest('.ds-app');
      if (scrimApp && !scrimApp.hasAttribute('data-nav-open')) {
        var overPanel = $('.ds-app__panel:not([hidden])', scrimApp);
        if (overPanel) { DS.panel.close(overPanel); return; }
      }
    }

    var navToggle = t.closest('[data-ds-nav-toggle]');
    if (navToggle) {
      var app = navToggle.closest('.ds-app') || $('.ds-app');
      setNav(app, !app.hasAttribute('data-nav-open'));
      return;
    }

    var navClose = t.closest('[data-ds-nav-close]') || (t.classList.contains('ds-app__scrim') ? t : null);
    if (navClose) {
      setNav(navClose.closest('.ds-app'), false, { refocus: true });
      return;
    }

    // 서랍 안 링크를 누르면 서랍을 닫는다
    var navLink = t.closest('.ds-app[data-nav-open] .ds-app__nav a[href]');
    if (navLink) setNav(navLink.closest('.ds-app'), false);
  });

  doc.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches && t.matches('select[data-ds-theme-control]')) DS.theme.set(t.value);
  });

  doc.addEventListener('ds:change', function (e) {
    var group = e.target;
    if (group.hasAttribute && group.hasAttribute('data-ds-theme-control')) DS.theme.set(e.detail.value);
  });

  // 사용자가 입력한 글자도 page subset 에 없으면 다이나믹 서브셋을 붙인다
  doc.addEventListener('input', function (e) {
    var t = e.target;
    if (t && typeof t.value === 'string') DS.fonts.ensureText(t.value);
  });

  // Esc 는 툴팁을 먼저 닫는다 — 대화상자까지 닫히지 않게 여기서 멈춘다
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && tip && !tip.hidden) {
      hideTip();
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  doc.addEventListener('keydown', function (e) {
    var t = e.target;
    var key = e.key;

    // 대화상자 안에서 Tab 을 가둔다
    if (key === 'Tab') {
      var dlg = modalDialog();
      if (dlg) {
        var f = focusables(dlg);
        if (!f.length) { e.preventDefault(); return; }
        var first = f[0];
        var last = f[f.length - 1];
        var outside = !dlg.contains(doc.activeElement);
        if (e.shiftKey && (doc.activeElement === first || outside)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (doc.activeElement === last || outside)) { e.preventDefault(); first.focus(); }
      }
      if (openMenuBtn) closeMenu(openMenuBtn, false);
      return;
    }

    if (!t.closest) return;

    // 옆 패널 안에서 Esc — 패널을 닫는다(열린 메뉴가 없을 때)
    if (key === 'Escape' && !openMenuBtn) {
      var inPanel = t.closest('.ds-app__panel:not([hidden])') || $('.ds-app[data-panel-overlay] > .ds-app__panel:not([hidden])');
      if (inPanel) { DS.panel.close(inPanel); return; }
    }

    // 옆 메뉴 서랍은 Esc 로 닫는다(열린 메뉴가 없을 때)
    if (key === 'Escape' && !openMenuBtn) {
      var openApp = $('.ds-app[data-nav-open]');
      if (openApp) { setNav(openApp, false, { refocus: true }); return; }
    }

    // 메뉴
    var menuBtn = t.closest('[aria-haspopup="menu"]');
    if (menuBtn && (key === 'ArrowDown' || key === 'ArrowUp')) {
      e.preventDefault();
      openMenu(menuBtn, key === 'ArrowUp');
      return;
    }
    if (openMenuBtn) {
      var menu = menuOf(openMenuBtn);
      if (menu && menu.contains(t)) {
        if (key === 'Escape') { e.preventDefault(); closeMenu(openMenuBtn, true); return; }
        var target = arrowTarget(e, menuItems(menu), t, true);
        if (target) { e.preventDefault(); target.focus(); }
        return;
      }
      if (key === 'Escape') { closeMenu(openMenuBtn, true); return; }
    }

    // 탭
    var tab = t.closest('[role="tab"]');
    if (tab) {
      var list = tab.closest('[role="tablist"]');
      var vertical = list.getAttribute('aria-orientation') === 'vertical';
      var nextTab = arrowTarget(e, tabsIn(list), tab, vertical);
      if (nextTab) { e.preventDefault(); DS.tabs.select(nextTab, { focus: true }); }
      return;
    }

    // 묶음 버튼(라디오)
    var radio = t.closest('[role="radio"]');
    if (radio && radio.closest('[role="radiogroup"]')) {
      var group = radio.closest('[role="radiogroup"]');
      if (key === ' ') { e.preventDefault(); DS.radios.select(radio); return; }
      var nextRadio = arrowTarget(e, radiosIn(group), radio, null);
      if (nextRadio) { e.preventDefault(); DS.radios.select(nextRadio, { focus: true }); }
    }
  });

  // 툴팁 — 마우스 올림(지연) · 키보드 포커스
  doc.addEventListener('pointerover', function (e) {
    if (e.pointerType === 'touch' || !e.target.closest) return;
    var el = e.target.closest('[data-ds-tip]');
    if (!el) return;
    if (el === tipTarget) { clearTimeout(hideTimer); return; }
    clearTimeout(showTimer);
    showTimer = setTimeout(function () { showTip(el, 'pointer'); }, ms('--ds-motion-tooltip-delay', 400));
  });

  doc.addEventListener('pointerout', function (e) {
    if (!e.target.closest) return;
    var el = e.target.closest('[data-ds-tip]');
    if (!el) return;
    var to = e.relatedTarget;
    if (to && (el.contains(to) || (tip && tip.contains(to)))) return;
    clearTimeout(showTimer);
    if (tipTarget === el) scheduleHide();
  });

  doc.addEventListener('focusin', function (e) {
    var el = e.target.closest && e.target.closest('[data-ds-tip]');
    if (!el) return;
    var keyboard = true;
    try { keyboard = el.matches(':focus-visible'); } catch (err) { keyboard = true; }
    if (keyboard) showTip(el, 'focus');
  });

  doc.addEventListener('focusout', function (e) {
    var el = e.target.closest && e.target.closest('[data-ds-tip]');
    if (el && el === tipTarget) hideTip();
  });

  // 스크롤·창 크기 바뀜 — 마우스로 띄운 툴팁은 닫고, 키보드 포커스로 띄운 툴팁은 남겨 자리만 다시 잡는다(WCAG 1.4.13)
  function onViewportChange() {
    if (!tip || tip.hidden || !tipTarget) return;
    if (tipSource === 'focus' && doc.activeElement === tipTarget) placeTip(tipTarget);
    else hideTip();
  }
  window.addEventListener('scroll', onViewportChange, true);
  window.addEventListener('resize', onViewportChange);

  /* ---------- 시작 ---------- */

  function watchTopbar() {
    var top = $('.ds-app__top');
    if (!top) return;
    var set = function () { root.style.setProperty('--ds-app-top', Math.round(top.getBoundingClientRect().height) + 'px'); };
    set();
    if (window.ResizeObserver) new ResizeObserver(set).observe(top);
    else window.addEventListener('resize', set);
  }

  function init() {
    injectSprite();
    watchTopbar();
    liveRegion(false);
    liveRegion(true);
    initTheme();
    initSort();
    initTabsAndRadios();
    initPanels();
    $$('[data-ds-banner][data-replaces]').forEach(function (b) { hideReplaced(b, b.getAttribute('data-replaces')); });
    if (wide) {
      var onWide = function () {
        var app = $('.ds-app[data-nav-open]');
        if (wide.matches && app) setNav(app, false);
      };
      if (wide.addEventListener) wide.addEventListener('change', onWide);
    }
    DS.fonts.ensure();
    root.classList.add('ds-ready');
    emit(doc, 'ds:ready');
  }

  DS.ready = function (fn) {
    if (root.classList.contains('ds-ready')) fn();
    else doc.addEventListener('ds:ready', function () { fn(); }, { once: true });
  };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
