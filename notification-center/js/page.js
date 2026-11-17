/*
 * 알림 센터 — 화면 코드. 가상 데이터는 js/data.js(window.NC_DATA) 에만 있다.
 * 부품 동작(메뉴·칩·묶음 버튼·옆 패널·배너·스켈레톤·live 알림)은 kit 의 js/ds.js(window.DS)를 쓴다.
 *
 * 주소
 *   view   보기: 없음(읽지 않음) · all(전체) — kit 묶음 버튼이 쓴다
 *   kind   종류 거르기: assign,mention,reply,digest,security 중 쉼표 목록
 *   open   옆 패널에 연 알림 id
 *   state  견본 상태: loading · caught-up · zero · error · markall-fail · offline · incoming
 */
(function () {
  'use strict';

  var doc = document;
  var D = window.NC_DATA;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  /* **이름** → 굵은 이름 */
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b class="nc-name">$1</b>'); }
  function plain(s) { return String(s).replace(/\*\*/g, ''); }
  function icon(name, cls) { return '<svg class="ds-icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#ds-i-' + name + '"></use></svg>'; }
  function shown(el) { return !!el && !el.closest('[hidden]') && el.getClientRects().length > 0; }
  function remPx() { return parseFloat(getComputedStyle(doc.documentElement).fontSize) || 16; }

  var STATE = new URLSearchParams(location.search).get('state') || '';
  var KIND = {};
  var KIND_IDS = D.kinds.map(function (k) { KIND[k.id] = k; return k.id; });
  var ROLE = { team: '팀원', customer: '고객' };
  var SYSTEM_ICON = { digest: 'clock', security: 'lock' };
  var GROUPS = [['today', '오늘'], ['yesterday', '어제'], ['week', '이번 주'], ['earlier', '이전']];
  var LOAD_MS = 1200;      // 흉내 불러오기 — 1초를 넘어 스켈레톤을 보인다(STA-01)
  var MARK_MS = 800;       // 모두 읽음 요청 — 낙관적 표시라 회전 표시는 1초를 넘을 때만
  var RECONNECT_MS = 1200; // 다시 연결

  var S = {
    items: [],
    loaded: false,
    error: STATE === 'error',
    offline: STATE === 'offline',
    failMarkAll: STATE === 'markall-fail',
    view: 'unread',
    kinds: [],
    off: {},
    pending: [],   // 도착했지만 아직 목록에 넣지 않은 새 알림
    queued: [],    // 연결이 끊긴 동안 온 새 알림
    openId: null,
    started: Date.now(),
    announceTimer: 0
  };

  var app = $('#app');
  var headActions = $('#head-actions');
  var btnMarkAll = $('#btn-markall');
  var feed = $('#notifications');
  var tools = $('#feed-tools');
  var viewGroup = $('#view');
  var kindsGroup = $('#kinds');
  var btnClear = $('#btn-clear');
  var arrivals = $('#arrivals');
  var btnArrivals = $('#btn-arrivals');
  var body = $('#feed-body');
  var panel = $('#panel');
  var panelBody = $('#panel-body');

  /* ---------- 시각 — 화면의 지금은 data.js 의 now 에서 흐른다 ---------- */

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parseT(t) {
    var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(t);
    return { y: +m[1], mo: +m[2], d: +m[3], h: +m[4], mi: +m[5] };
  }
  function utc(t) { var p = parseT(t); return Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi); }
  var NOW0 = utc(D.now);
  function nowMs() { return NOW0 + (Date.now() - S.started); }
  function stamp(ms) {
    var d = new Date(ms);
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
  }
  function dayNo(ms) { return Math.floor(ms / 86400000); }
  function daysAgo(t) { return dayNo(nowMs()) - dayNo(utc(t)); }
  function hm(p) { return pad(p.h) + ':' + pad(p.mi); }
  function dateText(p) {
    var y = new Date(nowMs()).getUTCFullYear();
    return (p.y === y ? '' : p.y + '년 ') + p.mo + '월 ' + p.d + '일';
  }
  /* 목록 시각: 1분 안 "방금", 1시간 안 "5분 전", 오늘은 시각, 어제는 "어제 15:20", 그 전은 날짜(DESIGN.md) */
  function relTime(t) {
    var p = parseT(t);
    var n = daysAgo(t);
    var mins = Math.floor((nowMs() - utc(t)) / 60000);
    if (n <= 0) return mins < 1 ? '방금' : mins < 60 ? mins + '분 전' : hm(p);
    if (n === 1) return '어제 ' + hm(p);
    return dateText(p);
  }
  function exactTime(t) { var p = parseT(t); return dateText(p) + ' ' + hm(p); }
  function groupOf(t) {
    var n = daysAgo(t);
    if (n <= 0) return 'today';
    if (n === 1) return 'yesterday';
    var sinceMonday = (new Date(nowMs()).getUTCDay() + 6) % 7;
    return n <= sinceMonday ? 'week' : 'earlier';
  }

  /* ---------- 데이터 ---------- */

  function copy(n) {
    var c = JSON.parse(JSON.stringify(n));
    c.keep = false;
    return c;
  }
  function find(id) {
    for (var i = 0; i < S.items.length; i++) if (S.items[i].id === id) return S.items[i];
    return null;
  }
  function byTime(a, b) { return a.at < b.at ? 1 : a.at > b.at ? -1 : 0; }
  function kindMatch(n) { return !S.kinds.length || S.kinds.indexOf(n.kind) >= 0; }
  /* 읽지 않음 보기에서 방금 읽은 알림(keep)은 다음에 다시 그릴 때까지 남긴다(설계서 열린 질문 2) */
  function visible() {
    return S.items.filter(function (n) { return (S.view === 'all' || !n.read || n.keep) && kindMatch(n); }).sort(byTime);
  }
  function unreadCount() { return S.items.filter(function (n) { return !n.read; }).length; }
  function hrefWith(over) {
    var p = new URLSearchParams(location.search);
    Object.keys(over).forEach(function (k) { if (over[k] == null) p.delete(k); else p.set(k, over[k]); });
    var q = p.toString();
    return '?' + q;
  }

  /* ---------- 그리기 ---------- */

  function avatarHTML(n) {
    if (n.from.role === 'system') return '<span class="ds-avatar nc-item__avatar nc-item__avatar--system" aria-hidden="true">' + icon(SYSTEM_ICON[n.kind] || 'bell') + '</span>';
    return '<span class="ds-avatar nc-item__avatar" aria-hidden="true">' + esc(n.from.name.slice(1)) + '</span>';
  }

  function muteLabel(kind) {
    return '‘' + KIND[kind].name + '’ 알림 ' + (S.off[kind] ? '다시 받기' : '끄기');
  }

  function menuHTML(n) {
    var k = KIND[n.kind];
    var name = '‘' + esc(n.target.title) + '’ 알림 동작';
    var mute = k.locked
      ? '<button class="ds-menu__item ds-menu__item--detail" type="button" role="menuitem" aria-disabled="true" data-act="mute">' +
        '<span class="ds-menu__label">' + esc(muteLabel(n.kind)) + '</span><span class="ds-menu__desc">보안 알림은 알림 설정에서만 바꿀 수 있어요</span></button>'
      : '<button class="ds-menu__item" type="button" role="menuitem" data-act="mute" data-kind="' + n.kind + '">' + esc(muteLabel(n.kind)) + '</button>';
    return '<div class="ds-menu-anchor">' +
      '<button class="ds-btn ds-btn--ghost ds-btn--icon nc-more" type="button" id="mb-' + n.id + '" aria-haspopup="menu" aria-controls="mn-' + n.id + '" aria-expanded="false" aria-label="' + name + '" data-ds-tip="알림 동작">' + icon('more') + '</button>' +
      '<div class="ds-menu" id="mn-' + n.id + '" role="menu" aria-label="' + name + '" hidden>' +
        '<button class="ds-menu__item" type="button" role="menuitem" data-act="toggle">' + (n.read ? '읽지 않음으로 표시' : '읽음으로 표시') + '</button>' +
        '<hr class="ds-menu__sep">' + mute +
        '<a class="ds-menu__item" role="menuitem" href="' + esc(D.settingsHref) + '">알림 설정 열기</a>' +
      '</div></div>';
  }

  function itemHTML(n) {
    var k = KIND[n.kind];
    var open = S.openId === n.id;
    return '<li class="nc-item' + (n.read ? '' : ' is-unread') + (open ? ' is-open' : '') + '" data-id="' + n.id + '">' +
      '<span class="nc-item__dot" aria-hidden="true"></span>' +
      avatarHTML(n) +
      '<div class="nc-item__body">' +
        '<p class="nc-item__title"><a class="nc-item__link" id="l-' + n.id + '" href="' + esc(hrefWith({ open: n.id })) + '" aria-describedby="q-' + n.id + ' m-' + n.id + '"' + (open ? ' aria-current="true"' : '') + '>' +
          '<span class="ds-sr-only nc-unread-sr"' + (n.read ? ' hidden' : '') + '>읽지 않음, </span>' + rich(n.text) + '</a></p>' +
        (n.quote ? '<p class="nc-item__quote" id="q-' + n.id + '">' + esc(n.quote) + '</p>' : '') +
      '</div>' +
      '<p class="nc-item__meta" id="m-' + n.id + '"><span>' + esc(k.name) + '</span><span class="nc-item__sep" aria-hidden="true">·</span><span class="ds-sr-only">, </span>' +
        '<time datetime="' + n.at + '">' + esc(relTime(n.at)) + '</time></p>' +
      '<div class="nc-item__actions">' +
        '<button class="ds-btn ds-btn--ghost ds-btn--icon nc-read" type="button" data-act="read" aria-label="‘' + esc(n.target.title) + '’ 알림 읽음으로 표시" data-ds-tip="읽음으로 표시"' + (n.read ? ' hidden' : '') + '>' + icon('success') + '</button>' +
        menuHTML(n) +
      '</div>' +
    '</li>';
  }

  function emptyHTML(type) {
    var settings = '<a class="ds-btn" href="' + esc(D.settingsHref) + '">알림 설정 열기</a>';
    var viewAll = '<button class="ds-btn" type="button" data-act="view-all">전체 알림 보기</button>';
    var C = {
      zero: { icon: 'bell', title: '아직 받은 알림이 없어요', text: '상담이 배정되거나 누가 나를 언급하면 여기에 모여요.', actions: [settings] },
      'caught-up': { icon: 'success', title: '읽지 않은 알림이 없어요', text: '새 알림이 오면 여기에 보여요.', actions: [viewAll] },
      filter: {
        icon: 'filter',
        title: S.view === 'unread' ? '고른 종류의 읽지 않은 알림이 없어요' : '고른 종류의 알림이 없어요',
        text: '다른 종류를 고르거나 거르기를 지우면 더 많은 알림이 보여요.',
        actions: ['<button class="ds-btn" type="button" data-act="clear">거르기 지우기</button>', S.view === 'unread' ? viewAll : '']
      },
      error: {
        icon: 'error', mod: ' ds-empty--error', title: '알림을 불러오지 못했어요',
        text: '연결이 잠시 끊겼어요. 다시 불러오면 이어서 볼 수 있어요.',
        actions: ['<button class="ds-btn" type="button" data-act="reload">다시 불러오기</button>']
      }
    }[type];
    return '<div class="ds-empty nc-empty' + (C.mod || '') + '" data-empty="' + type + '">' +
      icon(C.icon, 'ds-empty__icon') +
      '<h2 class="ds-empty__title" id="empty-title" tabindex="-1">' + C.title + '</h2>' +
      '<p class="ds-empty__text">' + C.text + '</p>' +
      '<div class="ds-empty__actions">' + C.actions.join('') + '</div>' +
    '</div>';
  }

  function emptyType() {
    if (S.error) return 'error';
    if (!S.items.length) return 'zero';
    if (visible().length) return '';
    return S.kinds.length ? 'filter' : 'caught-up';
  }

  function feedHTML() {
    var type = emptyType();
    if (type) return emptyHTML(type);
    var list = visible();
    var by = {};
    list.forEach(function (n) { (by[groupOf(n.at)] = by[groupOf(n.at)] || []).push(n); });
    return GROUPS.filter(function (g) { return by[g[0]]; }).map(function (g) {
      var rows = by[g[0]];
      return '<div class="nc-group">' +
        '<h2 class="nc-group__title" id="g-' + g[0] + '">' + g[1] + ' <span class="nc-group__n">' + rows.length + '건</span></h2>' +
        '<ul class="nc-list">' + rows.map(itemHTML).join('') + '</ul>' +
      '</div>';
    }).join('');
  }

  function render(opts) {
    opts = opts || {};
    if (!opts.keepRead) S.items.forEach(function (n) { n.keep = false; });
    body.innerHTML = feedHTML();
    updateCounts();
    updateTools();
    DS.fonts.ensureText(body.textContent);
    if (opts.announce) {
      var type = emptyType();
      var n = visible().length;
      DS.announce(type ? $('#empty-title').textContent : '알림 ' + n + '건이 보여요');
    }
  }

  function updateCounts() {
    var on = S.loaded && !S.error;
    var counts = { unread: unreadCount(), all: S.items.length };
    $$('[data-count-view]').forEach(function (el) {
      el.textContent = on ? counts[el.getAttribute('data-count-view')] : '';
      el.hidden = !on;
    });
    $$('[data-count-kind]').forEach(function (el) {
      var k = el.getAttribute('data-count-kind');
      el.textContent = on ? S.items.filter(function (n) { return n.kind === k && (S.view === 'all' || !n.read); }).length : '';
      el.hidden = !on;
    });
    // 옆 메뉴 개수는 스켈레톤 밖이라 불러오기가 끝난 뒤에만 보인다. 아직 목록에 넣지 않은 새 알림도 센다
    var nav = $('#nav-count');
    var navN = counts.unread + S.pending.length;
    var navOn = on && S.ready && navN > 0;
    nav.textContent = navOn ? navN : '';
    nav.hidden = !navOn;
    $$('.nc-group').forEach(function (g) {
      var n = $$('.nc-item', g).length;
      $('.nc-group__n', g).textContent = n + '건';
    });
  }

  function updateTools() {
    // 받은 알림이 없으면 거를 것이 없다 — 칩 줄을 숨긴다
    $('#kinds-row').hidden = S.loaded && !S.error && !S.items.length;
    $$('.ds-chip[data-kind]', kindsGroup).forEach(function (chip) {
      var k = chip.getAttribute('data-kind');
      chip.setAttribute('aria-pressed', S.kinds.indexOf(k) >= 0 ? 'true' : 'false');
      $('.nc-chip__off', chip).hidden = !S.off[k];
    });
    // 거르기 결과가 없으면 빈 상태가 같은 버튼을 가진다(같은 버튼을 두 번 두지 않는다)
    btnClear.hidden = !S.kinds.length || emptyType() === 'filter';
    $('#markall-text').textContent = S.kinds.length ? '고른 종류 읽음 표시' : '모두 읽음 표시';
  }

  /* 줄 하나를 다시 그리지 않고 고친다 — 포커스가 줄 안 버튼에 남는다 */
  function patchItem(n) {
    var li = $('.nc-item[data-id="' + n.id + '"]', body);
    if (!li) return;
    li.classList.toggle('is-unread', !n.read);
    $('.nc-unread-sr', li).hidden = n.read;
    $('.nc-read', li).hidden = n.read;
    $('[data-act="toggle"]', li).textContent = n.read ? '읽지 않음으로 표시' : '읽음으로 표시';
  }

  function updateMuteLabels() {
    $$('[data-act="mute"]', body).forEach(function (it) {
      var li = it.closest('.nc-item');
      var n = li && find(li.getAttribute('data-id'));
      if (!n) return;
      ($('.ds-menu__label', it) || it).textContent = muteLabel(n.kind);
    });
  }

  /* ---------- 읽음 표시 ---------- */

  function setRead(n, read) {
    n.read = read;
    if (read) n.keep = true;
    patchItem(n);
    updateCounts();
  }

  function markAll() {
    if (btnMarkAll.hasAttribute('data-ds-pending')) return;
    if (!S.loaded) return;
    if (S.error) { DS.announce('알림을 다시 불러온 뒤에 읽음으로 표시할 수 있어요'); return; }
    var targets = S.items.filter(function (n) { return !n.read && kindMatch(n); });
    if (!targets.length) {
      DS.announce(S.kinds.length ? '고른 종류에 읽지 않은 알림이 없어요' : '읽지 않은 알림이 없어요');
      return;
    }
    // 낙관적 표시 — 바로 읽음으로 바꾸고, 실패하면 되돌린다(STA-11)
    targets.forEach(function (n) { n.read = true; n.keep = true; patchItem(n); });
    updateCounts();
    var old = doc.getElementById('banner-markall');
    if (old) DS.banner.dismiss(old, { focusNext: '#btn-markall' });
    DS.busy(btnMarkAll, true, { delay: 1000 });
    setTimeout(function () {
      var fail = S.failMarkAll && !S.offline;
      S.failMarkAll = false;
      DS.busy(btnMarkAll, false).then(function () {
        if (fail) {
          targets.forEach(function (n) { n.read = false; patchItem(n); });
          updateCounts();
          DS.banner.show({
            id: 'banner-markall', tone: 'danger',
            title: '읽음으로 표시하지 못했어요',
            text: '연결이 잠시 끊겼어요. 알림 ' + targets.length + '건을 읽지 않음으로 되돌렸어요.',
            actions: [{ label: '다시 시도', onClick: function () { setTimeout(markAll, 0); } }],
            focusNext: '#btn-markall'
          });
          return;
        }
        DS.announce('알림 ' + targets.length + '건을 읽음으로 표시했어요');
        if (S.view === 'unread') {
          var inList = body.contains(doc.activeElement);
          render();
          if (inList || doc.activeElement === doc.body) btnMarkAll.focus();
        }
      });
    }, S.offline ? 0 : MARK_MS);
  }

  /* ---------- 알림 끄기 ---------- */

  function toggleMute(kind, moreBtn) {
    if (KIND[kind].locked) return;
    var name = KIND[kind].name;
    if (S.off[kind]) {
      S.off[kind] = false;
      var b = doc.getElementById('banner-mute');
      if (b) DS.banner.dismiss(b);
      DS.announce('‘' + name + '’ 알림을 다시 받아요');
    } else {
      S.off[kind] = true;
      var el = DS.banner.show({
        id: 'banner-mute', tone: 'info',
        title: '앞으로 ‘' + name + '’ 알림을 받지 않아요',
        text: '받은 알림은 그대로 남아요.',
        actions: [{ label: '되돌리기', onClick: function () { S.off[kind] = false; updateTools(); updateMuteLabels(); DS.announce('‘' + name + '’ 알림을 다시 받아요'); } }],
        focusNext: moreBtn ? '#' + moreBtn.id : '#btn-markall',
        scroll: false
      });
      // 알림 설정으로 가는 길 — 버튼이 아니라 링크로 둔다
      var acts = el && $('.ds-banner__actions', el);
      if (acts) {
        var a = doc.createElement('a');
        a.className = 'ds-btn ds-btn--sm';
        a.href = D.settingsHref;
        a.textContent = '알림 설정 열기';
        acts.appendChild(a);
      }
    }
    updateTools();
    updateMuteLabels();
  }

  /* ---------- 옆 패널 — 알림 대상(가상 주소 ?open=<id>) ---------- */

  function panelHTML(n) {
    var k = KIND[n.kind];
    var from = n.from.role === 'system' ? n.from.name : n.from.name + ' · ' + ROLE[n.from.role];
    var rows = [['종류', esc(k.name)], ['보낸 사람', esc(from)], ['받은 시각', '<time datetime="' + n.at + '">' + esc(exactTime(n.at)) + '</time>']]
      .concat((n.facts || []).map(function (f) { return [esc(f[0]), esc(f[1])]; }));
    return '<div class="nc-target">' +
      '<h3 class="nc-target__title">' + esc(n.target.title) + '</h3>' +
      '<p class="nc-target__text">' + rich(n.text) + '</p>' +
      (n.quote ? '<p class="nc-target__quote">' + esc(n.quote) + '</p>' : '') +
      '<div class="ds-cq"><dl class="ds-dl nc-target__facts">' + rows.map(function (r) { return '<dt data-ds-skeleton-keep>' + r[0] + '</dt><dd>' + r[1] + '</dd>'; }).join('') + '</dl></div>' +
      '<p class="nc-target__actions"><a class="ds-btn ds-btn--primary" href="' + esc(n.target.href) + '">' + esc(n.target.label) + '</a></p>' +
    '</div>';
  }

  function markOpenRow() {
    $$('.nc-item', body).forEach(function (li) {
      var on = li.getAttribute('data-id') === S.openId;
      li.classList.toggle('is-open', on);
      var link = $('.nc-item__link', li);
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function openItem(id, opts) {
    opts = opts || {};
    var n = find(id);
    if (!n) return;
    S.openId = id;
    if (!n.read) setRead(n, true);
    panelBody.innerHTML = panelHTML(n);
    DS.fonts.ensureText(panelBody.textContent);
    DS.url.set({ open: id });
    markOpenRow();
    var opener = doc.getElementById('l-' + id);
    if (panel.hidden) DS.panel.open(panel, { opener: opener, focus: opts.focus !== false });
    else if (opts.focus !== false) $('#panel-title').focus();
  }

  function onPanelClose() {
    var id = S.openId;
    S.openId = null;
    DS.url.set({ open: null });
    markOpenRow();
    // 연 줄을 다시 그렸으면 kit 이 잡아 둔 버튼이 없어졌다 — 같은 id 의 새 링크로 돌아간다
    var link = id && doc.getElementById('l-' + id);
    var a = doc.activeElement;
    var lost = !a || a === doc.body || panel.contains(a) || a === $('#page-title') || a === $('#main');
    if (link && shown(link) && lost) link.focus();
  }

  /* ---------- 불러오기 ---------- */

  function regions() {
    var list = [headActions, tools, body];
    if (!panel.hidden) list.push(panelBody);
    return list;
  }

  function fill() {
    if (STATE === 'zero') S.items = [];
    else S.items = D.notifications.map(copy);
    if (STATE === 'caught-up') S.items.forEach(function (n) { n.read = true; });
  }

  /*
   * 불러오기. 스켈레톤은 실제 내용을 그린 뒤 복제한다(DESIGN.md 「스켈레톤」) — 위치 차가 생기지 않는다.
   * 처음 불러올 때는 0.3초 동안 내용 자리를 비워 둔다(자리 크기는 그대로, data-nc-pending).
   */
  function load(opts) {
    opts = opts || {};
    var first = !opts.reload;
    var hadFocus = body.contains(doc.activeElement);
    body.setAttribute('aria-busy', 'true');
    DS.announce('알림을 불러오는 중이에요');
    var showed = false;

    function draw() {
      S.loaded = true;
      S.error = false;
      fill();
      if (S.openId) {
        var n = find(S.openId);
        if (n) { n.read = true; n.keep = true; panelBody.innerHTML = panelHTML(n); }
      }
      render({ keepRead: true });
    }

    if (first) {
      draw();
      regions().forEach(function (r) { r.setAttribute('data-nc-pending', ''); });
    }

    var timer = DS.loadingTimer(function () {
      showed = true;
      if (!first) {
        if (hadFocus) feed.focus();
        draw();
      }
      regions().forEach(function (r) { DS.skeleton.show(r); });
    }, function () {
      regions().forEach(function (r) { DS.skeleton.hide(r); r.removeAttribute('data-nc-pending'); });
      body.setAttribute('aria-busy', 'false');
      if (STATE === 'error' && first) {
        S.error = true;
        render();
        DS.announce('알림을 불러오지 못했어요', { assertive: true });
        return;
      }
      if (!first && !showed) draw();
      S.loaded = true;
      S.ready = true;
      updateCounts();
      DS.fonts.ensureText(body.textContent);
      // 한 번 불러오기에 알림은 한 문장 — 끝나면 "불러오는 중" 문장을 비운다(낡은 문장이 남지 않게).
      // 다시 불러오기는 포커스가 첫 알림으로 가서 그 이름이 읽힌다
      var live = $('#ds-live');
      if (live && /불러오는 중/.test(live.textContent)) live.textContent = '';
      if (!first) {
        var link = $('.nc-item__link', body);
        (link || $('#empty-title') || feed).focus();
      }
      scheduleArrivals();
    });

    if (STATE === 'loading' && first) return;
    setTimeout(function () { timer.stop(); }, LOAD_MS);
  }

  /* ---------- 새 알림 도착 — 목록을 흔들지 않고 버튼만 보인다 ---------- */

  function scheduleArrivals() {
    if (S.scheduled || S.error || !S.items.length) return;
    S.scheduled = true;
    var plan = STATE === 'incoming' ? [2000, 3500] : [20000];
    plan.forEach(function (ms, i) {
      setTimeout(function () { arrive(D.incoming[i]); }, ms);
    });
  }

  function arrive(src) {
    if (!src || find(src.id) || S.pending.some(function (p) { return p.id === src.id; })) return;
    if (S.offline) { S.queued.push(src); return; }
    if (S.off[src.kind]) return;
    var n = copy(src);
    n.at = stamp(nowMs());
    S.pending.push(n);
    btnArrivals.textContent = '새 알림 ' + S.pending.length + '건 보기';
    DS.fonts.ensureText(btnArrivals.textContent);
    if (arrivals.hidden) {
      // 버튼 자리가 화면 위로 지나갔으면 보던 줄이 밀리지 않게 그만큼 스크롤을 맞춘다(스크롤 고정이 없는 브라우저 대비)
      var above = arrivals.getBoundingClientRect().top < 0;
      var before = body.getBoundingClientRect().top;
      arrivals.hidden = false;
      if (above) window.scrollBy(0, body.getBoundingClientRect().top - before);
    }
    updateCounts();
    // 연달아 오면 마지막 도착 뒤 한 번만 알린다
    clearTimeout(S.announceTimer);
    S.announceTimer = setTimeout(function () {
      if (S.pending.length) DS.announce('새 알림 ' + S.pending.length + '건이 왔어요');
    }, 2000);
  }

  function revealArrivals() {
    var news = S.pending.splice(0);
    clearTimeout(S.announceTimer);
    arrivals.hidden = true;
    if (!news.length) return;
    // 늦게 온 것이 위로(같은 분에 와도 도착 순서를 지킨다)
    news.reverse();
    S.items = news.concat(S.items);
    render();
    var shownNew = news.slice().sort(byTime).map(function (n) { return doc.getElementById('l-' + n.id); }).filter(Boolean);
    if (shownNew.length) shownNew[0].focus();
    else {
      $('[role="radio"][aria-checked="true"]', viewGroup).focus();
      DS.announce('새 알림 ' + news.length + '건은 고른 종류에 없어요. 거르기를 지우면 보여요.');
    }
  }

  /* ---------- 연결 ---------- */

  function showOffline() {
    S.offline = true;
    DS.banner.show({
      id: 'banner-offline', tone: 'warning',
      title: '연결이 끊겼어요',
      text: '새 알림을 받지 못하고 있어요. 읽음 표시는 연결되면 보내요.',
      dismissible: false,
      scroll: false,
      actions: [{ label: '다시 연결', close: false, onClick: function (el) { reconnect(el); return false; } }]
    });
  }

  function online(announce) {
    S.offline = false;
    var el = doc.getElementById('banner-offline');
    if (el) DS.banner.dismiss(el, { focusNext: '#btn-markall' });
    if (announce) DS.announce('다시 연결했어요');
    var q = S.queued.splice(0);
    q.forEach(arrive);
  }

  function reconnect(el) {
    var btn = $('.ds-banner__actions .ds-btn', el);
    if (!btn || btn.hasAttribute('data-ds-pending')) return;
    btn.setAttribute('data-busy-label', '연결 중…');
    DS.busy(btn, true);
    setTimeout(function () {
      DS.busy(btn, false).then(function () { online(true); });
    }, RECONNECT_MS);
  }

  /* ---------- 이벤트 ---------- */

  function bind() {
    viewGroup.addEventListener('ds:change', function (e) {
      S.view = e.detail.value === 'all' ? 'all' : 'unread';
      render({ announce: true });
    });

    kindsGroup.addEventListener('ds:toggle', function () {
      S.kinds = $$('.ds-chip[aria-pressed="true"]', kindsGroup).map(function (c) { return c.getAttribute('data-kind'); });
      DS.url.set({ kind: S.kinds.join(',') || null });
      render({ announce: true });
    });

    btnClear.addEventListener('click', clearKinds);
    btnMarkAll.addEventListener('click', markAll);
    btnArrivals.addEventListener('click', revealArrivals);

    body.addEventListener('click', function (e) {
      var t = e.target;
      var link = t.closest('.nc-item__link');
      if (link) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
        e.preventDefault();
        openItem(link.closest('.nc-item').getAttribute('data-id'));
        return;
      }
      var act = t.closest('[data-act]');
      if (!act || act.getAttribute('aria-disabled') === 'true') return;
      var li = act.closest('.nc-item');
      var n = li && find(li.getAttribute('data-id'));
      var a = act.getAttribute('data-act');
      if (a === 'read' && n) {
        setRead(n, true);
        $('.nc-more', li).focus();
        DS.announce('읽음으로 표시했어요');
      } else if (a === 'toggle' && n) {
        setRead(n, !n.read);
        DS.announce(n.read ? '읽음으로 표시했어요' : '읽지 않음으로 표시했어요');
      } else if (a === 'mute' && n) {
        toggleMute(n.kind, $('.nc-more', li));
      } else if (a === 'view-all') {
        DS.radios.select($('[data-value="all"]', viewGroup), { focus: true });
      } else if (a === 'clear') {
        clearKinds();
      } else if (a === 'reload') {
        load({ reload: true });
      }
    });

    // 알림 링크에서 ↑↓ — 앞뒤 알림으로(묶음을 넘어 이어진다)
    body.addEventListener('keydown', function (e) {
      if ((e.key !== 'ArrowDown' && e.key !== 'ArrowUp') || !e.target.classList.contains('nc-item__link')) return;
      var links = $$('.nc-item__link', body);
      var i = links.indexOf(e.target) + (e.key === 'ArrowDown' ? 1 : -1);
      if (links[i]) { e.preventDefault(); links[i].focus(); }
    });

    panel.addEventListener('ds:panel-close', onPanelClose);

    // 글자 크기만 바뀌면(창 크기는 그대로) kit 이 옆 패널을 붙일지 다시 재지 않는다 — resize 를 알려 다시 재게 한다
    if (window.ResizeObserver) {
      var lastRem = remPx();
      new ResizeObserver(function () {
        var r = remPx();
        if (r !== lastRem) { lastRem = r; window.dispatchEvent(new Event('resize')); }
      }).observe($('#main'));
    }

    window.addEventListener('offline', function () { if (!S.offline) showOffline(); });
    window.addEventListener('online', function () { if (S.offline) online(true); });
  }

  function clearKinds() {
    S.kinds = [];
    DS.url.set({ kind: null });
    render({ announce: true });
    $('.ds-chip', kindsGroup).focus();
  }

  /* ---------- 시작 ---------- */

  function start() {
    var checked = $('[role="radio"][aria-checked="true"]', viewGroup);
    S.view = checked && checked.getAttribute('data-value') === 'all' ? 'all' : 'unread';
    var k = (DS.url.get('kind') || '').split(',').filter(function (x) { return KIND_IDS.indexOf(x) >= 0; });
    S.kinds = KIND_IDS.filter(function (x) { return k.indexOf(x) >= 0; });
    DS.url.set({ kind: S.kinds.join(',') || null });

    // 주소의 open 은 보일 대상이 있을 때만 연다(받은 알림이 없거나 불러오기 오류면 지운다)
    var openId = DS.url.get('open');
    var valid = openId && STATE !== 'zero' && STATE !== 'error' && D.notifications.some(function (n) { return n.id === openId; });
    if (openId && !valid) DS.url.set({ open: null });

    bind();
    if (S.offline) showOffline();

    if (valid) {
      S.openId = openId;
      var n = D.notifications.filter(function (x) { return x.id === openId; })[0];
      panelBody.innerHTML = panelHTML(n);
      DS.panel.open(panel, { opener: null, focus: false });
    }
    load();
  }

  DS.ready(start);
})();
