/*
 * 상담 인박스 — 화면 동작. 일반 스크립트라 파일로 열어도(file://) 동작한다.
 *   <script src="js/ds.js" defer></script> → <script src="js/data.js" defer></script> → 이 파일
 * 가상 데이터(이름·메시지 등)는 js/data.js 에만 있다. 이 파일은 화면 문구와 동작만 둔다.
 *
 * 주소(쿼리)
 *   c       연 대화 id. 대화를 열 때 기록을 남겨 뒤로 가기로 돌아간다
 *   status  상태 필터(open 기본 · pending · closed · all) — 묶음 버튼(data-url-key)이 쓴다
 *   who     담당자 보기(all 기본 · me · none · 상담원 id)
 *   q       검색어
 *   state   견본 상태: loading · empty · zero · error · send-fail · offline · incoming · taken
 *
 * 네트워크는 없다. 불러오기·보내기는 타이머로 흉내 낸다(불러오기 0.25초, 보내기 0.7초).
 */
(function () {
  'use strict';

  var D = window.SI_DATA;
  var doc = document;
  if (!D || !window.DS) return;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function remPx() { return parseFloat(getComputedStyle(doc.documentElement).fontSize) || 16; }
  function shown(el) { return !!el && !el.closest('[hidden]') && el.getClientRects().length > 0; }

  var MODE = new URLSearchParams(location.search).get('state') || '';
  var STATUS = { open: '열림', pending: '대기', closed: '종료' };
  var STATUS_BADGE = { open: 'ds-badge--info', pending: 'ds-badge--warning', closed: '' };
  var VIEW = { all: '모든 대화', me: '내 대화', none: '담당자 없음' };
  var STATUS_DONE = { open: '대화를 다시 열었어요', pending: '대화를 대기로 바꿨어요', closed: '대화를 종료했어요' };

  var agents = {};
  D.agents.forEach(function (a) { agents[a.id] = a; });
  var me = agents[D.me];

  /* 화면에서 바꾸는 값이라 원본을 복사해 쓴다 */
  var convs = JSON.parse(JSON.stringify(D.conversations));
  var uid = 0;
  convs.forEach(function (c) { c.messages.forEach(function (m) { m.id = 'm' + (++uid); }); });

  var S = {
    loaded: false,
    offline: MODE === 'offline',
    status: 'open',
    who: 'all',
    q: '',
    current: null,
    failed: false,
    newFrom: {},
    jump: 0,
    waiting: [],
    arrivalsScheduled: false,
    reloading: false
  };

  /* ---------- 요소 ---------- */

  var app = $('#app');
  var inbox = $('#inbox');
  var split = $('#split');
  var rows = $('#rows');
  var listBody = $('#list-body');
  var listEmpty = $('#list-empty');
  var chat = $('#chat');
  var log = $('#log');
  var msgs = $('#msgs');
  var reply = $('#reply');
  var panel = $('#panel');
  var qInput = $('#q');
  var jump = $('#jump');
  // kit 과 같은 폭 경계(rem — 브라우저 글자 크기를 키우면 덮는 패널·서랍이 된다)
  var mqWide = matchMedia('(min-width: 80rem)');
  var mqNav = matchMedia('(min-width: 64rem)');
  // 화면낭독기용 구분 — 이어 붙은 글(이름·회사·시각)이 한 낱말로 읽히지 않게
  var SEP = '<span class="ds-sr-only">, </span>';
  var coarse = matchMedia('(pointer: coarse)').matches;

  /* ---------- 시각 — 데이터의 "지금"(D.now)에 연 뒤 지난 시간을 더한다 ---------- */

  var started = Date.now();
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parseT(t) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(t);
    return { y: +m[1], mo: +m[2], d: +m[3], h: +(m[4] || 0), mi: +(m[5] || 0) };
  }
  function nowT() {
    var p = parseT(D.now);
    var dt = new Date(p.y, p.mo - 1, p.d, p.h, p.mi + Math.floor((Date.now() - started) / 60000));
    return dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate()) + 'T' + pad(dt.getHours()) + ':' + pad(dt.getMinutes());
  }
  function utc(t) { var p = parseT(t); return Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi); }
  function daysAgo(t) { return Math.round((utc(D.now.slice(0, 10)) - utc(t.slice(0, 10))) / 86400000); }
  function hm(t) { var p = parseT(t); return pad(p.h) + ':' + pad(p.mi); }
  function md(t) { var p = parseT(t); return p.mo + '월 ' + p.d + '일'; }
  function ymd(t) { var p = parseT(t); return p.y + '년 ' + p.mo + '월 ' + p.d + '일'; }
  function dayLabel(t) { var n = daysAgo(t); return n <= 0 ? '오늘' : n === 1 ? '어제' : md(t); }
  function rowTime(t) { var n = daysAgo(t); return n <= 0 ? hm(t) : n === 1 ? '어제' : md(t); }
  function minutesBetween(a, b) { return Math.abs(utc(b) - utc(a)) / 60000; }

  /* ---------- 데이터 도우미 ---------- */

  function find(id) {
    for (var i = 0; i < convs.length; i++) if (convs[i].id === id) return convs[i];
    return null;
  }
  function last(c) {
    for (var i = c.messages.length - 1; i >= 0; i--) if (c.messages[i].from !== 'sys') return c.messages[i];
    return c.messages[c.messages.length - 1];
  }
  function lastT(c) { return c.messages[c.messages.length - 1].t; }
  function agentName(id) { return id && agents[id] ? agents[id].name : ''; }
  function senderName(c, from) { return from === 'c' ? c.customer.name : from === D.me ? '나' : agentName(from); }
  function matchWho(c, who) {
    if (who === 'all') return true;
    if (who === 'me') return c.who === D.me;
    if (who === 'none') return !c.who;
    return c.who === who;
  }
  function matchStatus(c, st) { return st === 'all' || c.status === st; }
  function matchQ(c, q) {
    if (!q) return true;
    var hay = [c.customer.name, c.customer.company].concat(c.messages.map(function (m) { return m.text; })).join(' ').toLowerCase();
    return hay.indexOf(q.toLowerCase()) >= 0;
  }
  function visibleList() {
    return convs.filter(function (c) { return matchWho(c, S.who) && matchStatus(c, S.status) && matchQ(c, S.q); })
      .sort(function (a, b) { var x = lastT(a); var y = lastT(b); return x < y ? 1 : x > y ? -1 : 0; });
  }
  function viewName(who) { return VIEW[who] || agentName(who) + ' 님 대화'; }
  function sysMsg(text) { return { id: 'm' + (++uid), from: 'sys', t: nowT(), text: text }; }

  /* ---------- 주소 ---------- */

  function hrefWith(over) {
    var p = new URLSearchParams(location.search);
    Object.keys(over).forEach(function (k) {
      if (over[k] == null || over[k] === '') p.delete(k); else p.set(k, over[k]);
    });
    var qs = p.toString();
    return location.pathname + (qs ? '?' + qs : '');
  }
  function pushConv(id) {
    try { history.pushState({ si: 'conv' }, '', hrefWith({ c: id })); } catch (e) { DS.url.set({ c: id }); }
  }

  /* ---------- 배치 — 본문 폭이 40rem 이상이면 두 칸(CSS 컨테이너 쿼리와 같은 기준) ---------- */

  // 40rem 을 넘어야 두 칸(글자 200% 의 1280 폭 = 정확히 40rem 은 한 칸). CSS 컨테이너 쿼리 40.0625rem 과 같다
  function isSplit() { return inbox.clientWidth >= 40.0625 * remPx(); }
  function chatShown() { return isSplit() || split.getAttribute('data-view') === 'chat'; }
  /* 패널을 붙이는 폭(80rem). kit DS.panel 과 같은 기준이다 */
  function docked() { return mqWide.matches; }
  /*
   * 첫 방문에 패널을 열어 둘지 — 붙는 폭이고, 뿌리 글자 크기로 잰 창 폭도 80rem 이상일 때만.
   * (붙임·덮음은 kit 이 정한다. 이 판단은 "처음부터 열어 둘지"만 정한다. 뿌리 글자 크기를 키운 화면에서
   *  kit 미디어 쿼리는 바뀌지 않아, 처음부터 열면 본문이 좁아진다)
   */
  function openPanelFirst() { return docked() && window.innerWidth / remPx() >= 80; }
  /* 불러오기에 실패하면 한 칸 배치에서도 목록 칸(다시 불러오기가 있는 곳)을 보인다 */
  function setView() { split.setAttribute('data-view', S.current && !S.failed ? 'chat' : 'list'); }

  /* ---------- 빈 상태 조각 ---------- */

  function emptyHTML(icon, title, text, actions, mod) {
    var acts = (actions || []).filter(Boolean).map(function (a) {
      return '<button class="ds-btn ds-btn--sm" type="button" data-act="' + a[0] + '">' + a[1] + '</button>';
    }).join('');
    return '<div class="ds-empty ds-empty--center' + (mod ? ' ' + mod : '') + '">' + (icon ? DS.icon(icon, 'ds-empty__icon') : '') +
      '<p class="ds-empty__title">' + title + '</p>' + (text ? '<p class="ds-empty__text">' + text + '</p>' : '') +
      (acts ? '<div class="ds-empty__actions">' + acts + '</div>' : '') + '</div>';
  }

  /* ---------- 목록 ---------- */

  function rowHTML(c) {
    var lm = last(c);
    var prefix = lm.from === 'c' || lm.from === 'sys' ? '' : senderName(c, lm.from) + ': ';
    var k = c.customer;
    return '<li><a class="si-row" href="' + esc(hrefWith({ c: c.id })) + '" data-id="' + c.id + '" tabindex="-1" aria-describedby="rows-hint"' +
      (c.id === S.current ? ' aria-current="true"' : '') + (c.unread ? ' data-unread' : '') + '>' +
      '<span class="si-row__top"><span class="si-row__name">' + esc(k.name) +
      (k.company ? SEP + '<span class="si-row__company">' + esc(k.company) + '</span>' : '') + '</span>' + SEP +
      '<time class="si-row__time" datetime="' + lm.t + '">' + rowTime(lm.t) + '</time></span>' + SEP +
      '<span class="si-row__preview">' + esc(prefix + lm.text) + '</span>' + SEP +
      '<span class="si-row__meta"><span class="ds-badge ' + STATUS_BADGE[c.status] + '">' + STATUS[c.status] + '</span>' + SEP +
      '<span>' + esc(D.channels[c.channel]) + '</span>' + SEP +
      '<span>' + (c.who ? '담당 ' + esc(agentName(c.who)) : '담당자 없음') + '</span>' +
      (lm.send === 'failed' ? SEP + '<span class="si-row__fail">' + DS.icon('error', 'ds-icon--sm') + '보내지 못했어요</span>' : '') +
      (c.unread ? '<span class="ds-count ds-count--accent si-row__unread" aria-hidden="true">' + c.unread + '</span>' +
        '<span class="ds-sr-only">, 안 읽은 메시지 ' + c.unread + '건</span>' : '') +
      '</span></a></li>';
  }

  function rowEl(id) { return $('a.si-row[data-id="' + id + '"]', rows); }

  /** 행 하나만 다시 그린다. 그 행에 포커스가 있었으면 새 행으로 옮긴다(목록 전체를 다시 그리지 않는다) */
  function patchRow(c) {
    var old = rowEl(c.id);
    if (!old) return;
    var hadFocus = doc.activeElement === old;
    var tab = old.tabIndex;
    var li = old.parentNode;
    li.insertAdjacentHTML('afterend', rowHTML(c));
    var fresh = li.nextElementSibling.firstElementChild;
    li.remove();
    fresh.tabIndex = tab;
    if (hadFocus) fresh.focus();
  }

  function setRoving(el) {
    var all = $$('a.si-row', rows);
    if (!el) el = $('a.si-row[aria-current="true"]', rows) || all[0];
    all.forEach(function (r) { r.tabIndex = r === el ? 0 : -1; });
  }

  /** 개수는 그 보기·상태를 누르면 보일 건수다(검색어 포함) */
  function updateCounts() {
    $$('[data-count-who]').forEach(function (el) {
      var who = el.getAttribute('data-count-who');
      el.textContent = S.loaded ? convs.filter(function (c) { return matchWho(c, who) && matchStatus(c, S.status) && matchQ(c, S.q); }).length : '';
    });
    $$('[data-count-status]').forEach(function (el) {
      var st = el.getAttribute('data-count-status');
      el.textContent = S.loaded ? convs.filter(function (c) { return matchWho(c, S.who) && matchStatus(c, st) && matchQ(c, S.q); }).length : '';
    });
  }

  function syncNav() {
    $$('a[data-who]').forEach(function (a) {
      var w = a.getAttribute('data-who');
      if (w === S.who) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      // 보기를 바꾸면 고른 대화와 패널 열림은 남기지 않는다(대화 없이 info=open 이 남으면 빈 패널이 열린다)
      a.href = hrefWith({ who: w === 'all' ? null : w, c: null, info: null });
    });
    $('#view-name').textContent = viewName(S.who);
  }

  function renderList(opts) {
    opts = opts || {};
    var list = S.loaded ? visibleList() : [];
    rows.innerHTML = list.map(rowHTML).join('');
    // 보기 이름 옆에는 지금 상태 필터와 건수 — "모든 대화 · 전체 16"이 엇갈려 보이지 않게
    // 화면낭독기용 쉼표는 건수가 있을 때만 — 불러오는 중 제목이 "모든 대화 ,"로 읽히지 않게
    $('#list-count').innerHTML = S.loaded
      ? '<span class="ds-sr-only">, </span>' + (S.status === 'all' ? '' : STATUS[S.status] + ' ') + list.length + '건' : '';
    updateCounts();
    syncNav();
    setRoving();
    if (S.failed) {
      // 불러오기 오류는 결과 자리에 둔다. 닫을 수 있는 배너에만 두면 닫은 뒤 다시 불러올 방법이 없다(STA-06)
      listEmpty.innerHTML = emptyHTML('error', '대화 목록을 불러오지 못했어요', '연결이 잠시 끊겼어요. 다시 불러오면 이어서 볼 수 있어요.',
        [['reload', '다시 불러오기']], 'ds-empty--error');
      listEmpty.hidden = false;
    } else if (!S.loaded || list.length) {
      listEmpty.hidden = true;
      listEmpty.innerHTML = '';
    } else if (!S.q && S.who === 'all' && S.status === 'open') {
      listEmpty.innerHTML = emptyHTML('inbox', '지금 답할 대화가 없어요', '새 대화가 오면 여기에 바로 보여요.', [['show-closed', '종료한 대화 보기']]);
      listEmpty.hidden = false;
    } else {
      listEmpty.innerHTML = emptyHTML('search', '조건에 맞는 대화가 없어요', '검색어를 바꾸거나 필터를 끄면 더 많은 대화가 보여요.', [
        S.q && ['clear-q', '검색어 지우기'],
        (S.status !== 'all' || S.who !== 'all') && ['clear-filters', '필터 모두 끄기']
      ]);
      listEmpty.hidden = false;
    }
    if (opts.announce && S.loaded) DS.announce('대화 ' + list.length + '건이 보여요');
  }

  function focusList() {
    var first = $('a.si-row[tabindex="0"]', rows) || $('a.si-row', rows);
    if (first && shown(first)) first.focus();
    else $('#list-title').focus();
  }

  /* ---------- 대화 ---------- */

  function msgHTML(c, m, prev) {
    if (m.from === 'sys') {
      return '<li class="si-sys" data-mid="' + m.id + '">' + esc(m.text) + '<time datetime="' + m.t + '">' + hm(m.t) + '</time></li>';
    }
    var out = m.from !== 'c';
    var name = senderName(c, m.from);
    var start = !prev || prev.from !== m.from || minutesBetween(prev.t, m.t) > 5;
    var who = start
      ? '<p class="si-msg__who"><span class="si-msg__name">' + esc(name) + '</span><time class="si-msg__time" datetime="' + m.t + '">' + hm(m.t) + '</time></p>'
      : '<span class="ds-sr-only">' + esc(name) + ' ' + hm(m.t) + '</span>';
    var files = (m.files || []).map(function (f) {
      return '<span class="si-file">' + DS.icon('file') + '<span class="si-file__name">' + esc(f.name) + '</span>' +
        '<span class="si-file__size">' + esc(f.size) + '</span><span class="ds-sr-only">첨부</span></span>';
    }).join('');
    var status = '';
    if (m.send === 'pending') status = '<p class="si-msg__status">보내는 중…</p>';
    else if (m.send === 'sent') status = '<p class="si-msg__status">' + DS.icon('check', 'ds-icon--sm') + '보냄</p>';
    else if (m.send === 'failed') {
      status = '<div class="si-msg__fail"><p class="si-msg__status si-msg__status--fail">' + DS.icon('error', 'ds-icon--sm') + '보내지 못했어요</p>' +
        '<button class="ds-btn ds-btn--sm" type="button" data-retry="' + m.id + '">다시 보내기</button></div>';
    }
    return '<li class="si-msg ' + (out ? 'si-msg--out' : 'si-msg--in') + (start ? ' si-msg--start' : '') + '" data-mid="' + m.id + '"' +
      (m.send ? ' data-send="' + m.send + '"' : '') + '>' + who +
      '<div class="si-msg__bubble">' + (m.text ? '<p class="si-msg__text">' + esc(m.text) + '</p>' : '') + files + '</div>' + status + '</li>';
  }

  function prevFor(c, i) {
    var p = c.messages[i - 1];
    if (!p || p.from === 'sys' || p.t.slice(0, 10) !== c.messages[i].t.slice(0, 10) || S.newFrom[c.id] === i) return null;
    return p;
  }

  function renderLog(c) {
    var html = [];
    var day = '';
    c.messages.forEach(function (m, i) {
      if (m.t.slice(0, 10) !== day) {
        day = m.t.slice(0, 10);
        html.push('<li class="si-divider"><span>' + dayLabel(m.t) + '</span></li>');
      }
      if (S.newFrom[c.id] === i) html.push('<li class="si-divider si-divider--new" id="new-divider"><span>새 메시지</span></li>');
      html.push(msgHTML(c, m, prevFor(c, i)));
    });
    msgs.innerHTML = html.join('');
  }

  function appendMsg(c, m) {
    var i = c.messages.indexOf(m);
    var p = c.messages[i - 1];
    var html = '';
    if (!p || p.t.slice(0, 10) !== m.t.slice(0, 10)) html += '<li class="si-divider"><span>' + dayLabel(m.t) + '</span></li>';
    msgs.insertAdjacentHTML('beforeend', html + msgHTML(c, m, prevFor(c, i)));
  }

  /** 말풍선 하나만 다시 그린다. 그 안에 포커스가 있었으면 답장 입력창(없으면 메시지 흐름)으로 옮긴다 */
  function patchMsg(c, m) {
    var li = $('[data-mid="' + m.id + '"]', msgs);
    if (!li) return;
    var hadFocus = li.contains(doc.activeElement);
    li.insertAdjacentHTML('afterend', msgHTML(c, m, prevFor(c, c.messages.indexOf(m))));
    li.remove();
    if (hadFocus) (shown(reply) ? reply : log).focus();
  }

  function atBottom() { return log.scrollHeight - log.scrollTop - log.clientHeight < remPx() * 3; }
  function toBottom() { log.scrollTop = log.scrollHeight; }

  function renderHead(c) {
    var k = c.customer;
    $('#chat-title').innerHTML = esc(k.name) + (k.company ? SEP + '<span class="si-chat__company">' + esc(k.company) + '</span>' : '');
    $('#chat-meta').innerHTML = '<span class="ds-badge ' + STATUS_BADGE[c.status] + '">' + STATUS[c.status] + '</span>' + SEP +
      '<span>' + esc(D.channels[c.channel]) + '</span>' + SEP +
      '<span>' + (c.who ? '담당 ' + esc(agentName(c.who)) : '담당자 없음') + '</span>';
    var canTake = !c.who && c.status !== 'closed';
    $('#btn-take').hidden = !canTake;
    $('#more-take').hidden = !canTake;
    $$('[data-status]', chat).forEach(function (it) {
      it.setAttribute('aria-checked', it.getAttribute('data-status') === c.status ? 'true' : 'false');
    });
    $('#back').href = hrefWith({ c: null, info: null });
  }

  /* 보내기는 늘 누를 수 있다(CMP-BTN-08). 빈 채 누르면 입력창 아래에 안내하고 입력창으로 포커스 */
  function replyError(on) {
    var err = $('#reply-error');
    err.hidden = !on;
    if (on) reply.setAttribute('aria-invalid', 'true');
    else reply.removeAttribute('aria-invalid');
    // 터치 화면에서는 단축키 안내를 숨기므로 설명에서도 뺀다
    var ids = [];
    if (!coarse) ids.push('reply-hint');
    if (on) ids.push('reply-error');
    if (ids.length) reply.setAttribute('aria-describedby', ids.join(' '));
    else reply.removeAttribute('aria-describedby');
  }

  function autosize() {
    reply.style.height = 'auto';
    reply.style.height = reply.scrollHeight + 'px';
  }

  function renderComposer(c, restore) {
    var closed = c.status === 'closed';
    $('#composer').hidden = closed;
    $('#closed-note').hidden = !closed;
    if (restore) { reply.value = c.draft || ''; replyError(false); }
    if (!closed) autosize();
  }

  function chatParts(show) {
    $('#chat-head').hidden = !show;
    $('#logwrap').hidden = !show;
    if (!show) { $('#composer').hidden = true; $('#closed-note').hidden = true; }
    $('#chat-empty').hidden = show;
    if (show) $('#chat-empty').innerHTML = '';
  }

  function renderChat() {
    var c = S.current ? find(S.current) : null;
    chat.removeAttribute('aria-busy');
    if (!c) {
      chatParts(false);
      $('#chat-empty').className = 'si-pane-empty si-pane-empty--chat';
      // 목록에 고를 대화가 있을 때만 "목록에서 고르면" 안내를 둔다. 오류·빈 목록에서는 목록 칸의 안내 한 곳만 말한다
      var canPick = S.loaded && !S.failed && visibleList().length > 0;
      $('#chat-empty').innerHTML = S.current && S.loaded
        ? emptyHTML('search', '대화를 찾지 못했어요', '주소가 바뀌었거나 지운 대화예요.', [['to-list', '목록으로']])
        : emptyHTML(null, '고른 대화가 없어요', canPick ? '목록에서 대화를 고르면 여기에 메시지가 보여요.' : '');
      chat.removeAttribute('aria-labelledby');
      chat.setAttribute('aria-label', '대화');
    } else {
      chatParts(true);
      chat.removeAttribute('aria-label');
      chat.setAttribute('aria-labelledby', 'chat-title');
      renderHead(c);
      renderLog(c);
      renderComposer(c, true);
    }
    renderPanel();
  }

  function scrollToStart(c) {
    var divider = $('#new-divider', msgs);
    if (divider && S.newFrom[c.id] != null) log.scrollTop = Math.max(0, divider.offsetTop - log.offsetTop - remPx());
    else toBottom();
  }

  function saveDraft() {
    var prev = S.current && find(S.current);
    if (prev && !$('#composer').hidden) prev.draft = reply.value;
  }

  /**
   * 대화를 연다. history: 'push'(기록 남김) · 'replace' · 'none'(주소를 이미 바꿈)
   * focus: 'title' 이면 대화 제목으로 포커스(한 칸 배치), 아니면 포커스를 그대로 둔다(두 칸 배치)
   */
  function openConversation(id, opts) {
    opts = opts || {};
    if (S.current !== id) {
      saveDraft();
      if (S.current) delete S.newFrom[S.current];
    }
    var before = S.current;
    S.current = id;
    var c = find(id);
    if (c && c.unread) {
      S.newFrom[id] = c.messages.length - c.unread;
      c.unread = 0;
    }
    if (opts.history === 'push') pushConv(id);
    else if (opts.history === 'replace') DS.url.set({ c: id });
    setView();
    if (before && before !== id) { var b = find(before); if (b) patchRow(b); }
    if (c) patchRow(c);
    setRoving(c ? rowEl(id) : null);
    var row = c && rowEl(id);
    if (row && opts.history !== 'push') row.scrollIntoView({ block: 'nearest' });
    hideJump();
    renderChat();
    if (c) scrollToStart(c);
    if (opts.focus === 'title' && c) $('#chat-title').focus();
    if (opts.focus === 'title' && !c) $('#chat-empty .ds-btn') && $('#chat-empty .ds-btn').focus();
    if (opts.announce && c) DS.announce(c.customer.name + ' 님 대화를 열었어요');
  }

  /** 한 칸 배치에서 목록으로 돌아간다. 포커스는 보던 행 */
  function closeConversation(fromHistory) {
    var prevId = S.current;
    if (!fromHistory) {
      if (history.state && history.state.si === 'conv') { history.back(); return; }
      DS.url.set({ c: null });
    }
    saveDraft();
    if (prevId) delete S.newFrom[prevId];
    S.current = null;
    setView();
    var r = prevId && rowEl(prevId);
    if (r) r.removeAttribute('aria-current');
    hideJump();
    autoOpen();
    if (!S.current) renderChat();
    if (r && shown(r)) { setRoving(r); r.focus(); } else focusList();
  }

  /** 두 칸 배치인데 연 대화가 없으면 목록 맨 위 대화를 연다(기록 없이) */
  function autoOpen() {
    if (!S.loaded || S.current || !isSplit()) return;
    var first = visibleList()[0];
    if (first) openConversation(first.id, { history: 'replace' });
  }

  /* ---------- 보내기 — 보내기 전에 말풍선을 보이고, 실패하면 남긴 채 다시 보내기(PAT-CHAT-04) ---------- */

  function sendMessage(c, text, m) {
    // 말풍선은 바로 보이고, "보내는 중…"은 kit 의 로딩 타이머대로 0.3초 뒤에 보여 0.4초는 남는다(CMP-FB-08)
    if (!m) {
      m = { id: 'm' + (++uid), from: D.me, t: nowT(), text: text, tries: 0 };
      c.messages.push(m);
      m.send = 'queued';
      if (c.id === S.current) appendMsg(c, m);
    } else {
      m.send = 'queued';
      if (c.id === S.current) patchMsg(c, m);
    }
    m.tries += 1;
    if (c.id === S.current) toBottom();
    patchRow(c);
    var result = null;
    var timer = DS.loadingTimer(function () {
      if (result) return;
      m.send = 'pending';
      if (c.id === S.current) patchMsg(c, m);
    }, function () {
      m.send = result;
      if (c.id === S.current) patchMsg(c, m);
      patchRow(c);
      if (result === 'failed') DS.announce('메시지를 보내지 못했어요. 다시 보내기를 눌러 주세요.', { assertive: true });
      else DS.announce('메시지를 보냈어요');
    });
    setTimeout(function () {
      result = S.offline || (MODE === 'send-fail' && m.tries === 1) ? 'failed' : 'sent';
      timer.stop();
    }, 700);
  }

  function submitReply() {
    var c = find(S.current);
    if (!c || c.status === 'closed') return;
    var text = reply.value.trim();
    if (!text) {
      replyError(true);
      reply.focus();
      return;
    }
    reply.value = '';
    c.draft = '';
    autosize();
    replyError(false);
    sendMessage(c, text);
    reply.focus();
  }

  /* ---------- 상태·담당자 ---------- */

  function setStatus(c, st) {
    if (!c || c.status === st) return;
    if (!$('#composer').hidden) c.draft = reply.value;
    var stick = atBottom();
    c.status = st;
    var m = sysMsg(me.name + ' 님이 ' + STATUS_DONE[st]);
    c.messages.push(m);
    appendMsg(c, m);
    if (stick) toBottom();
    renderHead(c);
    renderComposer(c, true);
    patchRow(c);
    updateCounts();
    DS.announce(STATUS_DONE[st]);
  }

  function takeConversation() {
    var c = find(S.current);
    if (!c || c.who) return;
    var stick = atBottom();
    if (MODE === 'taken') {
      var name = agentName(D.takenBy);
      c.who = D.takenBy;
      c.messages.push(sysMsg(name + ' 님이 대화를 맡았어요'));
      DS.banner.show({
        id: 'banner-taken', tone: 'warning',
        title: name + ' 님이 먼저 맡은 대화예요',
        text: '담당자를 바꾸려면 ' + name + ' 님과 먼저 이야기해 주세요.',
        focusNext: shown($('#btn-status')) ? '#btn-status' : '#btn-more'
      });
    } else {
      c.who = D.me;
      c.messages.push(sysMsg(me.name + ' 님이 대화를 맡았어요'));
      DS.announce('대화를 맡았어요');
    }
    appendMsg(c, c.messages[c.messages.length - 1]);
    if (stick) toBottom();
    renderHead(c);
    patchRow(c);
    updateCounts();
    // 누른 "내가 맡기"는 사라진다 — 다음 자리(넓은 폭은 상태 바꾸기, 좁은 폭은 대화 동작 메뉴)로
    var next = $('#btn-status');
    (shown(next) ? next : $('#btn-more')).focus();
  }

  /* ---------- 고객 정보 패널 — 1280 이상은 붙고, 그보다 좁으면 대화 위에 덮는다(비모달) ---------- */

  function customerHTML(c) {
    var k = c.customer;
    var grade = k.grade === '새 고객' ? k.grade : k.grade + ' 등급';
    var hist = k.history.slice(0, 3);
    return '<div class="si-cust"><span class="ds-avatar" aria-hidden="true">' + esc(k.name.charAt(0)) + '</span>' +
      '<div class="si-cust__names"><p class="si-cust__name">' + esc(k.name) + '</p>' +
      (k.company ? '<p class="si-cust__company">' + esc(k.company) + '</p>' : '') + '</div>' +
      '<span class="ds-badge">' + esc(grade) + '</span></div>' +
      '<dl class="ds-dl">' +
      '<dt>연락처</dt><dd class="ds-num">' + esc(k.phone) + '</dd>' +
      '<dt>메일</dt><dd>' + esc(k.email) + '</dd>' +
      '<dt>고객 번호</dt><dd class="ds-num">' + esc(k.no) + '</dd>' +
      '<dt>가입일</dt><dd><time datetime="' + esc(k.since) + '">' + ymd(k.since) + '</time></dd>' +
      '</dl>' +
      '<section aria-labelledby="hist-title"><h3 class="si-panel__sub" id="hist-title">이전 문의<span class="ds-count">' + hist.length + '</span></h3>' +
      (hist.length
        ? '<ol class="si-hist">' + hist.map(function (h) {
          return '<li><span>' + esc(h.title) + '</span><time datetime="' + esc(h.date) + '">' + md(h.date) + '</time></li>';
        }).join('') + '</ol>'
        : '<p class="si-muted">이전 문의가 없어요</p>') +
      '</section>';
  }

  function panelSkeleton() {
    return '<div class="si-cust" aria-hidden="true"><span class="ds-skeleton ds-skeleton--circle"></span>' +
      '<span class="si-cust__names"><span class="ds-skeleton ds-skeleton--medium"></span></span></div>' +
      '<span class="ds-skeleton" aria-hidden="true"></span><span class="ds-skeleton ds-skeleton--medium" aria-hidden="true"></span>' +
      '<span class="ds-skeleton ds-skeleton--short" aria-hidden="true"></span>';
  }

  /**
   * 여닫기·붙임/덮음(80rem)·inert·가림막·Esc·주소(?info=open)는 kit 의 DS.panel 이 맡는다
   * (data-ds-panel · data-ds-panel-close). 이 함수는 내용만 채우고, 보일 대화가 없으면 닫는다.
   * 불러오는 동안은 비워 두고, 스켈레톤은 showSkeleton 이 다른 칸과 함께 그린다.
   */
  function renderPanel() {
    if (!S.loaded && !S.failed) return;
    var c = S.current && S.loaded ? find(S.current) : null;
    if (c) $('#panel-body').innerHTML = customerHTML(c);
    if ((!c || !chatShown()) && !panel.hidden) DS.panel.close(panel);
  }

  /* ---------- 새 메시지 도착 — 포커스를 옮기지 않고, 바뀐 행만 고친다 ---------- */

  function showJump(n) {
    S.jump += n;
    $('#jump-text').textContent = '새 메시지 ' + S.jump + '건 보기';
    jump.hidden = false;
  }
  function hideJump() {
    S.jump = 0;
    jump.hidden = true;
  }

  function arrive(item) {
    if (!item) return;
    if (S.offline || !S.loaded) { S.waiting.push(item); return; }
    var c = find(item.c);
    if (!c) return;
    var open = c.id === S.current && chatShown();
    var stick = open && atBottom();
    var m = { id: 'm' + (++uid), from: 'c', t: nowT(), text: item.text };
    c.messages.push(m);
    if (open) {
      appendMsg(c, m);
      if (stick) toBottom(); else showJump(1);
    } else {
      c.unread = (c.unread || 0) + 1;
    }
    patchRow(c);
    DS.announce(c.customer.name + ' 님 새 메시지: ' + item.text);
  }

  function scheduleArrivals() {
    if (S.arrivalsScheduled) return;
    S.arrivalsScheduled = true;
    if (MODE === 'incoming') {
      setTimeout(function () { arrive(D.incoming[0]); }, 2000);
      setTimeout(function () { arrive(D.incoming[1]); }, 5000);
    } else if (!MODE) {
      setTimeout(function () { arrive(D.incoming[1]); }, 20000);
    }
  }

  /* ---------- 불러오기 · 오류 · 연결 끊김 ---------- */

  function skeletonRows() {
    var one = '<li class="si-row si-row--skeleton" aria-hidden="true"><span class="ds-skeleton ds-skeleton--medium"></span>' +
      '<span class="ds-skeleton"></span><span class="ds-skeleton ds-skeleton--short"></span></li>';
    return new Array(7).join(one);
  }
  /**
   * 대화 칸 스켈레톤 — 최종 배치와 같은 부품 이름(si-chat__head · si-log · si-composer)으로 그려 같은 높이를 차지한다.
   * 머리: 뒤로·동작 메뉴 자리(좁은 폭) 또는 버튼 2개 자리(넓은 폭), 아래: 라벨 줄 + 입력창 + 보내기 자리.
   * 어느 자리가 보일지는 실제 머리와 같은 컨테이너 쿼리가 정한다.
   */
  function skeletonChat() {
    var sk = function (cls) { return '<span class="ds-skeleton ' + cls + '"></span>'; };
    var b = function (out) {
      return '<div class="si-skel-msg' + (out ? ' si-skel-msg--out' : '') + '">' + sk('ds-skeleton--short') + sk('') + '</div>';
    };
    return '<div class="si-skel" aria-hidden="true">' +
      '<div class="si-chat__head">' + sk('si-back si-skel-icon') +
        '<div class="si-chat__titles"><p class="si-chat__title">' + sk('si-skel-inline si-skel-w-title') + '</p>' +
        '<p class="si-chat__meta">' + sk('si-skel-badge') + sk('si-skel-inline si-skel-w-meta') + '</p></div>' +
        sk('si-more si-skel-icon') +
        '<div class="si-chat__actions">' + sk('si-skel-btn si-skel-w-status') + sk('si-skel-btn si-skel-w-info') + '</div>' +
      '</div>' +
      '<div class="si-logwrap"><div class="si-log">' + b(false) + b(true) + b(false) + b(true) + '</div></div>' +
      '<div class="si-composer"><div class="si-composer__bar"><span class="ds-field__label">' + sk('si-skel-inline si-skel-w-label') + '</span>' +
        '<span class="ds-toolbar__spacer"></span>' + sk('si-skel-btn si-skel-w-quick') + '</div>' +
        '<div class="si-composer__row">' + sk('si-reply') + sk('si-skel-send') + '</div></div>' +
      '</div>';
  }

  /** 최종 배치의 모든 칸(목록·대화·열린 패널)을 같은 모양의 스켈레톤으로 그린다(STA-03·CMP-FB-09) */
  function showSkeleton() {
    listBody.setAttribute('aria-busy', 'true');
    chat.setAttribute('aria-busy', 'true');
    listEmpty.hidden = true;
    rows.innerHTML = skeletonRows();
    chatParts(false);
    var box = $('#chat-empty');
    box.className = 'si-pane-empty si-pane-empty--skel';
    box.innerHTML = skeletonChat();
    if (!panel.hidden) $('#panel-body').innerHTML = panelSkeleton();
    DS.announce('대화 목록을 불러오는 중이에요');
  }

  function onLoaded() {
    S.loaded = true;
    S.failed = false;
    listBody.setAttribute('aria-busy', 'false');
    if (S.offline) showOffline();
    setView();
    renderList();
    // 연 대화가 없으면 먼저 맨 위 대화를 열어 본다 — 그 전에 대화 칸을 그리면 "보일 대화 없음"으로 패널이 닫힌다
    if (S.current) openConversation(S.current, { history: 'none' });
    else { autoOpen(); if (!S.current) renderChat(); }
    scheduleArrivals();
  }

  function onLoadFail() {
    S.failed = true;
    listBody.setAttribute('aria-busy', 'false');
    setView();
    renderList();
    renderChat();
    DS.announce('대화 목록을 불러오지 못했어요. 다시 불러오기를 눌러 주세요.', { assertive: true });
  }

  /**
   * 흉내 불러오기. 1초 안에 끝나는 첫 불러오기는 스켈레톤 없이 바로 결과를 보이고(STA-01),
   * 다시 불러오기는 1.2초로 두어 kit 로딩 타이머(0.3초 뒤 표시·0.4초 유지)대로 스켈레톤을 보인다.
   */
  function load(opts) {
    opts = opts || {};
    var fail = opts.fail;
    var timer = DS.loadingTimer(showSkeleton, function () {
      if (fail) onLoadFail(); else onLoaded();
      if (opts.done) opts.done();
    });
    if (MODE === 'loading') return; // 끝나지 않는 로딩(견본)
    setTimeout(function () { timer.stop(); }, opts.ms || 250);
  }

  function reload() {
    if (S.reloading) return;
    S.reloading = true;
    // 누른 버튼은 스켈레톤으로 바뀌므로 포커스를 목록 제목에 맡겨 둔다
    if (listEmpty.contains(doc.activeElement)) $('#list-title').focus();
    load({ ms: 1200, done: function () {
      S.reloading = false;
      focusList();
      DS.announce('대화 ' + visibleList().length + '건을 불러왔어요');
    } });
  }

  /**
   * 배너 버튼을 처리 중으로 바꾸고 ms 뒤에 끈다. 결과는 DS.busy(false) 의 Promise 뒤에 보인다
   * (회전 표시가 떴으면 kit 이 최소 유지 시간을 채운다). 다시 누르는 것은 kit 이 막는다(data-ds-pending).
   */
  function busyAction(el, label, ms, done) {
    var btn = $('.ds-banner__actions .ds-btn', el);
    if (!btn) return;
    btn.setAttribute('data-busy-label', label);
    DS.busy(btn, true);
    setTimeout(function () { DS.busy(btn, false).then(done); }, ms);
  }

  function showOffline() {
    S.offline = true;
    DS.banner.show({
      id: 'banner-offline', tone: 'warning',
      title: '연결이 끊겼어요',
      text: '새 메시지를 받지 못하고 있어요. 다시 연결하면 이어서 받아요.',
      dismissible: false,
      actions: [{ label: '다시 연결', onClick: function (el) { reconnect(el); return false; } }]
    });
  }

  function online(el) {
    S.offline = false;
    if (el && el.isConnected) DS.banner.dismiss(el, { focusNext: shown(reply) ? reply : '#q' });
    DS.announce('다시 연결했어요');
    var waiting = S.waiting.splice(0);
    waiting.forEach(arrive);
  }

  function reconnect(el) {
    busyAction(el, '연결하는 중…', 800, function () { online(el); });
  }

  /* ---------- 이벤트 ---------- */

  function plainClick(e) { return !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0); }

  rows.addEventListener('click', function (e) {
    var a = e.target.closest('a.si-row');
    if (!a || !plainClick(e)) return;
    e.preventDefault();
    var two = isSplit();
    if (a.getAttribute('data-id') === S.current) {
      if (!two) setView();
      return;
    }
    openConversation(a.getAttribute('data-id'), { history: 'push', focus: two ? null : 'title', announce: two });
  });

  // 목록 안에서는 ↑ ↓ Home End 로 옮긴다(Tab 은 목록에 한 번만 멈춘다)
  rows.addEventListener('keydown', function (e) {
    var a = e.target.closest('a.si-row');
    if (!a) return;
    var all = $$('a.si-row', rows);
    var i = all.indexOf(a);
    var t = null;
    if (e.key === 'ArrowDown') t = all[i + 1];
    else if (e.key === 'ArrowUp') t = all[i - 1];
    else if (e.key === 'Home') t = all[0];
    else if (e.key === 'End') t = all[all.length - 1];
    if (t) { e.preventDefault(); setRoving(t); t.focus(); }
  });

  // 빈 상태·대화 칸 안내의 버튼
  doc.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'show-closed') {
      DS.radios.select($('.si-status [data-value="closed"]'));
      focusList();
    } else if (act === 'clear-q') {
      qInput.value = '';
      applyQ();
      qInput.focus();
    } else if (act === 'clear-filters') {
      S.who = 'all';
      DS.url.set({ who: null });
      DS.radios.select($('.si-status [data-value="all"]'));
      focusList();
    } else if (act === 'to-list') {
      closeConversation();
    } else if (act === 'reload') {
      reload();
    }
  });

  /** 거른 뒤 — 두 칸이면 맨 위 대화를 열고, 연 대화가 없으면 대화 칸 안내를 목록 상태에 맞춘다 */
  function afterFilter() {
    renderList({ announce: true });
    autoOpen();
    if (!S.current) renderChat();
  }

  $('.si-status').addEventListener('ds:change', function (e) {
    S.status = e.detail.value;
    afterFilter();
  });

  $('#nav').addEventListener('click', function (e) {
    var a = e.target.closest('a[data-who]');
    if (!a || !plainClick(e)) return;
    e.preventDefault();
    var drawer = !mqNav.matches;
    S.who = a.getAttribute('data-who');
    DS.url.set({ who: S.who === 'all' ? null : S.who });
    if (!isSplit() && S.current) {
      saveDraft();
      DS.url.set({ c: null });
      S.current = null;
      setView();
    }
    afterFilter();
    // 서랍은 kit 이 닫는다. 닫힌 뒤 포커스를 목록으로 옮긴다
    if (drawer) setTimeout(focusList, 0);
  });

  var qTimer = 0;
  function applyQ() {
    S.q = qInput.value.trim();
    DS.url.set({ q: S.q || null });
    afterFilter();
  }
  qInput.addEventListener('input', function () { clearTimeout(qTimer); qTimer = setTimeout(applyQ, 250); });
  qInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && qInput.value) { e.preventDefault(); qInput.value = ''; clearTimeout(qTimer); applyQ(); }
  });

  $('#back').addEventListener('click', function (e) {
    if (!plainClick(e)) return;
    e.preventDefault();
    closeConversation();
  });

  reply.addEventListener('input', function () {
    autosize();
    if (reply.value.trim() && reply.hasAttribute('aria-invalid')) replyError(false);
  });
  // ⌘/Ctrl+Enter 는 kit 이 폼 제출(requestSubmit)로 바꾼다 — 여기서는 제출 한 곳만 듣는다(두 번 보내지 않게)
  $('#composer').addEventListener('submit', function (e) { e.preventDefault(); submitReply(); });

  msgs.addEventListener('click', function (e) {
    var b = e.target.closest('[data-retry]');
    if (!b) return;
    var c = find(S.current);
    if (!c) return;
    var m = null;
    c.messages.forEach(function (x) { if (x.id === b.getAttribute('data-retry')) m = x; });
    if (m) sendMessage(c, m.text, m);
  });

  // 상태 바꾸기 — 넓은 폭의 상태 메뉴와 좁은 폭의 "대화 동작" 메뉴가 같은 처리를 쓴다
  $$('#menu-status, #menu-more').forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      var it = e.target.closest('[data-status]');
      if (it) setStatus(find(S.current), it.getAttribute('data-status'));
    });
  });
  $('#btn-reopen').addEventListener('click', function () {
    setStatus(find(S.current), 'open');
    reply.focus();
  });
  $('#btn-take').addEventListener('click', takeConversation);
  $('#more-take').addEventListener('click', function () {
    // kit 이 메뉴를 닫고 메뉴 버튼으로 포커스를 돌린 뒤에 맡는다
    setTimeout(takeConversation, 0);
  });
  $('#more-info').addEventListener('click', function () {
    setTimeout(function () { DS.panel.open(panel, { opener: $('#btn-more') }); }, 0);
  });

  $('#menu-quick').addEventListener('click', function (e) {
    var it = e.target.closest('[data-quick]');
    if (!it) return;
    var text = D.quickReplies[+it.getAttribute('data-quick')].text;
    var now = reply.value.replace(/\s+$/, '');
    reply.value = now ? now + ' ' + text : text;
    autosize();
    replyError(false);
    // kit 이 메뉴를 닫고 메뉴 버튼으로 포커스를 돌린 뒤, 입력창으로 옮긴다
    setTimeout(function () {
      reply.focus();
      reply.setSelectionRange(reply.value.length, reply.value.length);
    }, 0);
  });

  // 고객 정보 패널 — 여닫기는 kit(data-ds-panel). 열리면 내용을 채운다
  panel.addEventListener('ds:panel-open', renderPanel);

  jump.addEventListener('click', function () {
    toBottom();
    hideJump();
    (shown(reply) ? reply : log).focus();
  });
  // 맨 아래를 보고 있었으면 칸 높이가 바뀌어도(배너가 뜨는 등) 맨 아래에 붙어 있는다
  var stuck = true;
  log.addEventListener('scroll', function () {
    stuck = atBottom();
    if (!jump.hidden && stuck) hideJump();
  });
  if (window.ResizeObserver) new ResizeObserver(function () { if (stuck) toBottom(); }).observe(log);

  // 건너뛰기 링크 — 대상이 지금 없으면 가장 가까운 자리로
  $$('[data-skip]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (a.getAttribute('data-skip') === 'reply') {
        if (shown(reply)) { reply.focus(); return; }
        if (S.current && chatShown()) { $('#chat-title').focus(); return; }
      }
      if (!isSplit() && S.current) { closeConversation(); return; }
      focusList();
    });
  });

  window.addEventListener('popstate', function () {
    var c = DS.url.get('c');
    var st = DS.url.get('status') || 'open';
    var radio = $('.si-status [data-value="' + st + '"]');
    if (radio && st !== S.status) { DS.radios.select(radio, { fromUrl: true, silent: true }); S.status = st; }
    if (c && c !== S.current) {
      renderList();
      openConversation(c, { history: 'none', focus: isSplit() ? null : 'title' });
    } else if (!c && S.current) {
      if (isSplit()) { S.current = null; autoOpen(); } else closeConversation(true);
    }
  });

  window.addEventListener('offline', function () { if (S.loaded && !S.offline) showOffline(); });
  window.addEventListener('online', function () {
    var el = doc.getElementById('banner-offline');
    if (el) online(el);
  });

  // 폭이 바뀌어 두 칸·한 칸이 바뀌면 다시 맞춘다
  var wasSplit = null;
  function onResize() {
    var two = isSplit();
    if (two === wasSplit) return;
    wasSplit = two;
    if (two) autoOpen();
    renderPanel();
  }
  if (window.ResizeObserver) new ResizeObserver(onResize).observe(inbox);
  else window.addEventListener('resize', onResize);

  /* ---------- 시작 ---------- */

  function start() {
    // 팀원 보기(이름은 데이터에서)
    $('#nav-team').innerHTML = D.agents.filter(function (a) { return a.id !== D.me; }).map(function (a) {
      return '<li><a class="ds-nav__link" href="?who=' + a.id + '" data-who="' + a.id + '">' + DS.icon('users') +
        '<span>' + esc(a.name) + '</span><span class="ds-nav__count" data-count-who="' + a.id + '"></span></a></li>';
    }).join('');

    // 빠른 답변 메뉴 — 제목과 글이 한 낱말로 읽히지 않게 구분을 둔다
    $('#menu-quick').innerHTML = D.quickReplies.map(function (r, i) {
      return '<button class="ds-menu__item" type="button" role="menuitem" data-quick="' + i + '">' +
        '<span class="si-quick__title">' + esc(r.title) + '</span><span class="ds-sr-only">: </span>' +
        '<span class="si-quick__text">' + esc(r.text) + '</span></button>';
    }).join('');

    // 보내기 단축키 안내 — 맥은 ⌘
    var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    $('#reply-hint').textContent = (mac ? '⌘+Enter' : 'Ctrl+Enter') + '로 보내요';

    // 주소에서 상태 읽기
    var checked = $('.si-status [aria-checked="true"]');
    S.status = checked ? checked.getAttribute('data-value') : 'open';
    var who = DS.url.get('who') || 'all';
    if (who === D.me) who = 'me';
    S.who = VIEW[who] || agents[who] ? who : 'all';
    S.q = (DS.url.get('q') || '').trim();
    S.current = DS.url.get('c');
    // 주소에 대화도 패널도 없는 첫 방문이면, 패널을 붙일 자리가 있을 때 고객 정보를 열어 둔다
    S.fresh = !S.current && !DS.url.get('info');

    // 견본 상태
    if (MODE === 'empty') {
      S.who = 'me';
      S.q = '택배 분실';
      DS.url.set({ who: 'me', q: S.q });
      DS.radios.select($('.si-status [data-value="pending"]'), { silent: true });
      S.status = 'pending';
    }
    if (MODE === 'zero') {
      convs.forEach(function (c) { if (c.status === 'open') { c.status = 'closed'; c.unread = 0; } });
    }
    if (MODE === 'send-fail') {
      var f = D.sendFailSample;
      var fc = find(f.c);
      if (fc) {
        fc.unread = 0;
        fc.messages.push({ id: 'm' + (++uid), from: D.me, t: f.t, text: f.text, send: 'failed', tries: 1 });
      }
      if (!S.current) { S.current = f.c; DS.url.set({ c: f.c }); }
    }
    if (MODE === 'incoming' && !S.current) {
      S.current = D.incoming[0].c;
      DS.url.set({ c: S.current });
    }
    qInput.value = S.q;
    replyError(false);

    setView();
    syncNav();
    wasSplit = isSplit();
    // 첫 방문이고 패널을 붙이는 폭이면 불러오기 전에 패널을 연다 — 스켈레톤에 패널 자리가 있어
    // 불러온 순간 칸이 움직이지 않는다(STA-03·CMP-FB-09). 목록이 비는 견본(오류·결과 없음·답할 대화 없음)은 열지 않는다
    var listWillBeEmpty = MODE === 'error' || MODE === 'empty' || MODE === 'zero';
    if (S.fresh && openPanelFirst() && isSplit() && !listWillBeEmpty) DS.panel.open(panel, { focus: false });
    S.fresh = false;
    load({ fail: MODE === 'error' });
  }

  DS.ready(start);
})();
