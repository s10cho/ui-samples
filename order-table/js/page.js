/*
 * 주문 목록 — 찾기(검색어·기간·배송 상태), 정렬, 열 고르기, 쪽 나누기, 여러 건 고르기와 일괄 작업.
 * 데이터는 js/data.js 의 가상 주문(window.ORDER_DATA)이다. 서버 요청은 타이머로 흉내 낸다.
 * 부품 동작(알림·배너·대화상자·정렬 머리·툴팁·테마·옆 메뉴)은 kit 의 js/ds.js 가 맡는다.
 *
 * 상태 쿼리
 *   ?state=loading     스켈레톤 행에서 멈춘다
 *   ?state=empty       주문이 한 건도 없다
 *   ?state=error       불러오기 실패 배너
 *   ?state=dialog      주문 몇 건을 고른 채 배송 처리 확인을 연다
 *   ?state=success     배송 처리 결과 배너
 *   ?state=bulk-error  일괄 작업 첫 시도가 실패한다
 *   ?state=readonly    보기 권한만 있다(고르기·일괄 작업 없음)
 *   ?state=filters     좁은 폭에서 필터 서랍을 연다
 *   ?q=없는말          검색 결과 없음
 */
(function () {
  'use strict';

  var doc = document;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var node = doc.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  var DATA = window.ORDER_DATA || { today: '2026-11-17', orders: [] };
  var STATE = new URLSearchParams(location.search).get('state') || '';
  var PER_PAGE = 20;
  // 흉내 지연 — 스켈레톤·회전 표시를 보이는 흉내 로딩은 1초를 넘게 둔다(DESIGN.md 「샘플 데이터」, STA-01)
  var LOAD_MS = 1300;
  var WORK_MS = 1200;
  var SEARCH_WAIT = 250;
  var COLS_KEY = 'order-table-hidden-cols';

  var SHIP = {
    ready: { label: '배송준비', tone: 'warning' }, // 상태 배지에 accent 톤을 쓰지 않는다(DESIGN.md) — 처리할 일이 남은 상태
    shipping: { label: '배송중', tone: 'info' },
    done: { label: '배송완료', tone: 'success' },
    canceled: { label: '취소완료', tone: '' }
  };
  var SHIP_ORDER = ['ready', 'shipping', 'done', 'canceled'];
  var PAY = {
    paid: { label: '결제완료', tone: '' },
    pending: { label: '입금대기', tone: 'warning' },
    refunded: { label: '환불완료', tone: '' },
    void: { label: '결제취소', tone: '' }
  };
  var PERIOD = { all: '전체 기간', today: '오늘', '7d': '최근 7일', '30d': '최근 30일', month: '이번 달', custom: '직접 고르기' };
  var SORT_KEYS = { id: 1, customer: 1, date: 1, items: 1, amount: 1 };
  var DEFAULT_SORT = { key: 'date', dir: 'descending' };
  var DATA_COLS = ['customer', 'date', 'items', 'amount', 'pay', 'ship'];

  var COPY = {
    loading: '주문 목록을 불러오는 중이에요',
    loadingShort: '불러오는 중이에요',
    noneTitle: '아직 들어온 주문이 없어요',
    noneText: '판매 채널에서 주문이 들어오면 여기에 모여요.',
    noneAction: '새 주문 확인',
    noneAgain: '새로 들어온 주문이 없어요',
    filterTitle: '조건에 맞는 주문이 없어요',
    filterText: '걸린 필터를 빼면 더 많은 주문이 보여요.',
    searchText: '주문 번호나 고객 이름을 다시 확인하거나 다른 검색어로 찾아 보세요.',
    clearQuery: '검색어 지우기',
    clearFilters: '필터 모두 지우기',
    clearBoth: '검색어와 필터 지우기',
    pickFirst: '주문을 먼저 골라 주세요',
    noShip: '고른 주문 중 배송 처리할 수 있는 주문이 없어요',
    noCancel: '고른 주문 중 취소할 수 있는 주문이 없어요',
    errorTitle: '주문 목록을 불러오지 못했어요',
    errorText: '연결이 잠시 끊겼어요. 다시 불러오면 걸어 둔 조건 그대로 보여요.',
    reload: '다시 불러오기',
    failText: '연결이 잠시 끊겼어요. 고른 주문은 그대로 있으니 다시 해 보세요.',
    working: '처리가 끝나면 누를 수 있어요',
    readonlyTitle: '보기 권한만 있어요',
    readonlyText: '배송 처리와 주문 취소는 주문 처리 권한이 있어야 해요. 관리자에게 권한을 요청해 주세요.',
    cleared: '필터를 모두 지웠어요',
    unselected: '고른 주문을 모두 풀었어요',
    colsDefault: '열 고르기'
  };

  /* ---------- 상태 ---------- */

  var orders = [];
  var loaded = false;
  var skeleton = false;
  var failed = STATE === 'error';
  var readonly = STATE === 'readonly';
  var failNext = STATE === 'bulk-error';
  var working = false; // 일괄 작업 처리 중
  var filters = { q: '', period: 'all', from: '', to: '', status: [] };
  var sort = { key: DEFAULT_SORT.key, dir: DEFAULT_SORT.dir };
  var page = 1;
  var selected = {};
  var hiddenCols = [];
  var view = [];
  var rangeInvalid = false;
  var announceTimer = 0;
  var searchTimer = 0;

  var ui = {};

  /* ---------- 도우미 ---------- */

  var won = new Intl.NumberFormat('ko-KR');
  function money(n) { return won.format(n) + '원'; }
  function count(n) { return won.format(n) + '건'; }
  function validDate(s) { return /^\d{4}-\d{2}-\d{2}$/.test(s || '') ? s : ''; }
  function shiftDay(iso, days) {
    var p = iso.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]) + days * 86400000);
    return d.toISOString().slice(0, 10);
  }
  function selectedIds() { return Object.keys(selected); }
  function selectedCount() { return selectedIds().length; }
  function byId(id) {
    for (var i = 0; i < orders.length; i++) if (orders[i].id === id) return orders[i];
    return null;
  }
  function norm(s) { return String(s || '').toLowerCase().replace(/[\s-]+/g, ''); }

  function badge(map, key) {
    var info = map[key];
    return el('span', 'ds-badge' + (info.tone ? ' ds-badge--' + info.tone : ''), info.label);
  }

  /* ---------- 조건 — 주소와 맞춘다(CMP-TABLE-09) ---------- */

  function readUrl() {
    filters.q = (DS.url.get('q') || '').trim();
    var p = DS.url.get('period') || 'all';
    filters.period = PERIOD[p] ? p : 'all';
    filters.from = validDate(DS.url.get('from'));
    filters.to = validDate(DS.url.get('to'));
    rangeInvalid = filters.period === 'custom' && !!(filters.from && filters.to && filters.from > filters.to);
    filters.status = (DS.url.get('status') || '').split(',').filter(function (k) { return SHIP[k]; });
    var s = (DS.url.get('sort') || '').split('.');
    if (SORT_KEYS[s[0]]) sort = { key: s[0], dir: s[1] === 'asc' ? 'ascending' : 'descending' };
    var n = parseInt(DS.url.get('page'), 10);
    page = n >= 1 ? n : 1;
  }

  function writeUrl() {
    var custom = filters.period === 'custom';
    DS.url.set({
      q: filters.q || null,
      period: filters.period === 'all' ? null : filters.period,
      from: custom ? filters.from || null : null,
      to: custom ? filters.to || null : null,
      status: filters.status.join(',') || null,
      page: page > 1 ? page : null
    });
  }

  function range() {
    var t = DATA.today;
    switch (filters.period) {
      case 'today': return [t, t];
      case '7d': return [shiftDay(t, -6), t];
      case '30d': return [shiftDay(t, -29), t];
      case 'month': return [t.slice(0, 8) + '01', t];
      case 'custom':
        if (rangeInvalid || (!filters.from && !filters.to)) return null;
        return [filters.from || '0000-00-00', filters.to || '9999-99-99'];
      default: return null;
    }
  }

  function rangeLabel() {
    var r = range();
    if (filters.period === 'custom') {
      if (!r) return '';
      if (filters.from && filters.to) return filters.from + ' ~ ' + filters.to;
      return filters.from ? filters.from + '부터' : filters.to + '까지';
    }
    if (!r) return '';
    var short = function (iso) { return iso.slice(5); };
    return PERIOD[filters.period] + '(' + (r[0] === r[1] ? short(r[0]) : short(r[0]) + ' ~ ' + short(r[1])) + ')';
  }

  function matches(o, ignoreStatus) {
    if (filters.q) {
      var q = norm(filters.q);
      if (norm(o.id).indexOf(q) < 0 && norm(o.customer).indexOf(q) < 0) return false;
    }
    var r = range();
    if (r && (o.date < r[0] || o.date > r[1])) return false;
    if (!ignoreStatus && filters.status.length && filters.status.indexOf(o.ship) < 0) return false;
    return true;
  }

  function hasFilters() {
    return !!(filters.q || range() || filters.status.length);
  }

  function compare(a, b) {
    var k = sort.key;
    var x;
    if (k === 'items' || k === 'amount') x = a[k] - b[k];
    else if (k === 'customer') x = a.customer.localeCompare(b.customer, 'ko');
    else if (k === 'date') x = (a.date + a.time).localeCompare(b.date + b.time);
    else x = a.id.localeCompare(b.id);
    if (sort.dir === 'descending') x = -x;
    if (x === 0) x = -(a.date + a.time).localeCompare(b.date + b.time) || a.id.localeCompare(b.id);
    return x;
  }

  /* ---------- 그리기 ---------- */

  function visibleCols() {
    return DATA_COLS.filter(function (c) { return hiddenCols.indexOf(c) < 0; });
  }

  function columnCount() {
    return (readonly ? 0 : 1) + 1 + visibleCols().length;
  }

  function cell(col, cls) {
    var td = el('td', cls || null);
    if (col) {
      td.setAttribute('data-col', col);
      if (hiddenCols.indexOf(col) >= 0) td.classList.add('ot-col-off');
    }
    return td;
  }

  var LABELS = { customer: '고객', date: '주문일', items: '상품 수', amount: '금액', pay: '결제', ship: '배송 상태' };

  function row(o) {
    var tr = el('tr');
    tr.setAttribute('data-id', o.id);
    // 고른 행 표시는 kit 이 체크된 체크박스로 그린다(tr:has(input:checked)) — 행에 클래스를 붙이지 않는다
    if (!readonly) {
      var sel = cell(null, 'ds-table__select');
      var hit = el('label', 'ds-hit');
      var box = el('input');
      box.type = 'checkbox';
      box.checked = !!selected[o.id];
      box.setAttribute('aria-label', '주문 ' + o.id + ' 고르기');
      box.setAttribute('data-pick', o.id);
      hit.appendChild(box);
      sel.appendChild(hit);
      tr.appendChild(sel);
    }

    tr.appendChild(cell(null, 'ds-table__primary ot-col-id ot-tnum')).textContent = o.id;

    var c = cell('customer');
    c.setAttribute('data-label', LABELS.customer);
    c.textContent = o.customer;
    tr.appendChild(c);

    var d = cell('date', 'ot-tnum');
    d.setAttribute('data-label', LABELS.date);
    var time = el('time', null, o.date + ' ' + o.time);
    time.setAttribute('datetime', o.date + 'T' + o.time);
    d.appendChild(time);
    tr.appendChild(d);

    var it = cell('items', 'ds-num');
    it.setAttribute('data-label', LABELS.items);
    it.textContent = o.items + '개';
    tr.appendChild(it);

    var am = cell('amount', 'ds-num');
    am.setAttribute('data-label', LABELS.amount);
    am.textContent = money(o.amount);
    tr.appendChild(am);

    var pay = cell('pay');
    pay.setAttribute('data-label', LABELS.pay);
    pay.appendChild(badge(PAY, o.pay));
    tr.appendChild(pay);

    var ship = cell('ship');
    ship.setAttribute('data-label', LABELS.ship);
    ship.appendChild(badge(SHIP, o.ship));
    tr.appendChild(ship);
    return tr;
  }

  var SKELETON_WIDTH = { customer: 'ds-skeleton--medium', date: '', items: 'ds-skeleton--short', amount: 'ds-skeleton--medium', pay: 'ds-skeleton--medium', ship: 'ds-skeleton--medium' };

  function skeletonRow() {
    var tr = el('tr', 'ds-table__skeleton');
    tr.setAttribute('aria-hidden', 'true');
    if (!readonly) tr.appendChild(cell(null, 'ds-table__select')).appendChild(el('span', 'ds-skeleton'));
    // 제목 칸은 ds-table__primary — 쌓은 카드에서 kit 이 칸 이름 막대를 그리지 않는다
    tr.appendChild(cell(null, 'ds-table__primary ot-col-id')).appendChild(el('span', 'ds-skeleton'));
    DATA_COLS.forEach(function (col) {
      var td = cell(col, col === 'items' || col === 'amount' ? 'ds-num' : null);
      td.appendChild(el('span', 'ds-skeleton ' + SKELETON_WIDTH[col]));
      tr.appendChild(td);
    });
    return tr;
  }

  function emptyRow(kind) {
    var tr = el('tr', 'ds-table__empty');
    var td = el('td');
    td.colSpan = columnCount();
    var box = el('div', 'ds-empty ds-empty--center' + (kind === 'error' ? ' ds-empty--error' : ''));
    box.insertAdjacentHTML('afterbegin', DS.icon(kind === 'none' ? 'inbox' : kind === 'error' ? 'error' : 'search', 'ds-empty__icon'));
    var title;
    var text;
    var action;
    if (kind === 'error') {
      // 불러오기 오류는 결과 자리에 남긴다(닫히는 배너에만 두지 않는다 — DESIGN.md)
      title = COPY.errorTitle;
      text = COPY.errorText;
      action = COPY.reload;
    } else if (kind === 'none') {
      title = COPY.noneTitle;
      text = COPY.noneText;
      action = COPY.noneAction;
    } else if (filters.q) {
      title = '‘' + filters.q + '’에 맞는 주문이 없어요';
      text = COPY.searchText;
      action = range() || filters.status.length ? COPY.clearBoth : COPY.clearQuery;
    } else {
      title = COPY.filterTitle;
      text = COPY.filterText;
      action = COPY.clearFilters;
    }
    box.appendChild(el('p', 'ds-empty__title', title));
    box.appendChild(el('p', 'ds-empty__text', text));
    var acts = el('div', 'ds-empty__actions');
    var btn = el('button', 'ds-btn', action);
    btn.type = 'button';
    btn.id = kind === 'none' ? 'btn-recheck' : kind === 'error' ? 'btn-reload' : 'btn-empty-clear';
    if (kind === 'error') btn.className = 'ds-btn ds-btn--primary';
    acts.appendChild(btn);
    box.appendChild(acts);
    td.appendChild(box);
    tr.appendChild(td);
    DS.fonts.ensureText(title);
    return tr;
  }

  function renderTable() {
    var body = ui.body;
    body.textContent = '';
    if (failed) { body.appendChild(emptyRow('error')); return; }
    if (skeleton) {
      for (var i = 0; i < 8; i++) body.appendChild(skeletonRow());
      return;
    }
    if (!loaded) return;
    if (!orders.length) { body.appendChild(emptyRow('none')); return; }
    if (!view.length) { body.appendChild(emptyRow('filtered')); return; }
    var start = (page - 1) * PER_PAGE;
    view.slice(start, start + PER_PAGE).forEach(function (o) { body.appendChild(row(o)); });
  }

  function pageRows() {
    var start = (page - 1) * PER_PAGE;
    return loaded ? view.slice(start, start + PER_PAGE) : [];
  }

  function renderHeader() {
    $$('th[data-col]', ui.table).forEach(function (th) {
      th.classList.toggle('ot-col-off', hiddenCols.indexOf(th.getAttribute('data-col')) >= 0);
    });
    if (!readonly) {
      var rows = pageRows();
      var picked = rows.filter(function (o) { return selected[o.id]; }).length;
      ui.selPage.disabled = !rows.length;
      ui.selPage.checked = rows.length > 0 && picked === rows.length;
      ui.selPage.indeterminate = picked > 0 && picked < rows.length;
      ui.selPage.setAttribute('aria-label', rows.length ? '이 쪽 주문 ' + rows.length + '건 모두 고르기' : '이 쪽 주문 모두 고르기');
    }
  }

  function renderChips() {
    var facet = {};
    SHIP_ORDER.forEach(function (k) { facet[k] = 0; });
    if (loaded) orders.forEach(function (o) { if (matches(o, true)) facet[o.ship] += 1; });
    ui.statusChips.forEach(function (chip) {
      var k = chip.getAttribute('data-status');
      chip.setAttribute('aria-pressed', filters.status.indexOf(k) >= 0 ? 'true' : 'false');
      var n = $('[data-count]', chip);
      var sr = $('[data-count-sr]', chip);
      // 불러오는 동안에는 빈 개수 자리를 남겨 칩 폭이 바뀌지 않게 한다. 불러오지 못했으면 개수 자리를 뺀다
      n.textContent = loaded ? String(facet[k]) : '';
      n.hidden = failed;
      sr.textContent = loaded ? ' ' + count(facet[k]) : '';
    });
  }

  function activeItems() {
    var list = [];
    if (filters.q) list.push({ key: 'q', text: '검색: ' + filters.q, name: '검색어 ' + filters.q + ' 빼기' });
    var rl = rangeLabel();
    if (rl) list.push({ key: 'period', text: '기간: ' + rl, name: '기간 ' + rl + ' 빼기' });
    filters.status.forEach(function (k) {
      list.push({ key: 'status:' + k, text: SHIP[k].label, name: SHIP[k].label + ' 필터 빼기' });
    });
    return list;
  }

  function renderActive() {
    var items = activeItems();
    ui.active.hidden = !items.length;
    ui.activeList.textContent = '';
    items.forEach(function (it) {
      var chip = el('span', 'ds-chip ds-chip--input', it.text);
      var x = el('button', 'ds-chip__remove');
      x.type = 'button';
      x.setAttribute('aria-label', it.name);
      x.setAttribute('data-remove', it.key);
      x.insertAdjacentHTML('afterbegin', DS.icon('close', 'ds-icon--sm'));
      chip.appendChild(x);
      ui.activeList.appendChild(chip);
    });
    // "필터" 버튼(서랍)의 개수는 서랍 안 조건(기간·배송 상태)만 센다. 검색어는 서랍 밖에 보인다
    var n = items.filter(function (it) { return it.key !== 'q'; }).length;
    ui.filterN.hidden = !n;
    ui.filterN.textContent = String(n);
    ui.filterNsr.textContent = n ? ' ' + n + '개 걸림' : '';
    DS.fonts.ensureText(ui.activeList.textContent);
  }

  function renderCount() {
    var total = orders.length;
    if (!loaded) {
      ui.title.textContent = '주문';
      ui.countMeta.textContent = failed ? '' : COPY.loadingShort;
      return;
    }
    ui.title.textContent = '주문 ' + count(view.length);
    ui.countMeta.textContent = hasFilters() && orders.length ? '전체 ' + count(total) + ' 중' : '';
  }

  function setDisabled(btn, reason) {
    if (btn.getAttribute('aria-busy') === 'true') return;
    if (reason) {
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('data-ds-tip', reason);
    } else {
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('data-ds-tip');
    }
  }

  /* 좁은 폭에서 화면 아래에 붙은 일괄 작업 줄 — 문서 순서도 화면 순서에 맞춰 결과 영역 끝(쪽 나누기 뒤)으로 옮긴다.
     넓은 폭이나 고른 주문이 없으면 결과 도구 줄의 원래 자리로 돌린다. 줄 안에 포커스가 있었으면 옮긴 뒤 그 자리에 다시 둔다 */
  function placeBulk() {
    if (!ui.bulk || !ui.resultbar) return;
    var bottom = !!(narrow && narrow.matches) && ui.results.classList.contains('ot-results--picked');
    var home = bottom ? ui.results : ui.resultbar;
    if (ui.bulk.parentNode !== home) {
      var active = doc.activeElement;
      var had = ui.bulk.contains(active);
      if (bottom) ui.results.appendChild(ui.bulk);
      else ui.resultbar.insertBefore(ui.bulk, ui.colPick);
      if (had && active.isConnected) active.focus({ preventScroll: true });
    }
    if (bottom) requestAnimationFrame(keepFocusAboveBar);
  }

  /* 붙은 줄의 실제 높이를 스크롤 여백(--order-table-bar-h)에 넘기고, 포커스된 요소가 줄 밑에 있으면 끌어올린다(A11Y-WCAG-06) */
  function keepFocusAboveBar() {
    if (!ui.results.classList.contains('ot-results--picked') || getComputedStyle(ui.bulk).position !== 'fixed') return;
    var bar = ui.bulk.getBoundingClientRect();
    var rem = parseFloat(getComputedStyle(doc.documentElement).fontSize) || 16;
    doc.documentElement.style.setProperty('--order-table-bar-h', (bar.height / rem) + 'rem');
    var active = doc.activeElement;
    if (!active || active === doc.body || ui.bulk.contains(active)) return;
    var r = active.getBoundingClientRect();
    // 포커스 링(두께 + 간격)까지 줄 위에 보여야 한다
    var ring = rem * 0.25;
    if (r.bottom + ring > bar.top) active.scrollIntoView({ block: 'nearest' });
  }

  function renderBulk() {
    if (readonly) return;
    var n = selectedCount();
    ui.picked.hidden = !n;
    ui.picked.textContent = count(n) + ' 고름';
    ui.unselect.hidden = !n;
    // 좁은 폭에서 고른 주문이 있으면 일괄 작업 줄을 화면 아래에 붙인다(page.css)
    ui.results.classList.toggle('ot-results--picked', n > 0);
    placeBulk();
    var ship = plan('ship');
    var cancel = plan('cancel');
    // 처리 중이면 다른 버튼은 이유와 함께 막는다. 처리 중인 버튼은 kit(DS.busy)이 맡는다
    if (working !== 'ship') setDisabled(ui.ship, working ? COPY.working : !n ? COPY.pickFirst : !ship.ok.length ? COPY.noShip : '');
    if (working !== 'cancel') setDisabled(ui.cancel, working ? COPY.working : !n ? COPY.pickFirst : !cancel.ok.length ? COPY.noCancel : '');
    if (doc.activeElement === ui.ship || doc.activeElement === ui.cancel) DS.tooltip.hide();
  }

  function pageLink(n, html, label) {
    var a = el('a', 'ds-pagination__page');
    var p = new URLSearchParams(location.search);
    if (n > 1) p.set('page', String(n)); else p.delete('page');
    var q = p.toString();
    a.href = location.pathname.split('/').pop() + (q ? '?' + q : '');
    a.setAttribute('data-page', String(n));
    if (html) a.innerHTML = html;
    else {
      a.textContent = String(n);
      a.appendChild(el('span', 'ds-sr-only', '쪽'));
    }
    if (label) a.setAttribute('aria-label', label);
    return a;
  }

  function edge(n, enabled, html, label) {
    var li = el('li', 'ds-pagination__edge');
    var node;
    if (enabled) node = pageLink(n, html, label);
    else {
      node = el('a', 'ds-pagination__page');
      node.setAttribute('role', 'link');
      node.setAttribute('aria-disabled', 'true');
      node.innerHTML = html;
    }
    li.appendChild(node);
    return li;
  }

  function pages() { return Math.max(1, Math.ceil(view.length / PER_PAGE)); }

  function renderPagination() {
    var nav = ui.pagination;
    if (!loaded || !view.length) { nav.hidden = true; return; }
    nav.hidden = false;
    var total = pages();
    var start = (page - 1) * PER_PAGE + 1;
    var end = Math.min(page * PER_PAGE, view.length);
    ui.pgSummary.textContent = count(view.length) + ' 중 ' + start + '–' + end;
    var list = ui.pgList;
    list.textContent = '';
    list.appendChild(edge(page - 1, page > 1, DS.icon('chevron-left') + '<span>이전</span>', '이전 쪽'));
    var show = [1, total, page - 1, page, page + 1]
      .filter(function (n, i, a) { return n >= 1 && n <= total && a.indexOf(n) === i; })
      .sort(function (a, b) { return a - b; });
    var last = 0;
    show.forEach(function (n) {
      if (n - last > 1) {
        var gap = el('li', 'ds-pagination__gap', '…');
        gap.setAttribute('aria-hidden', 'true');
        list.appendChild(gap);
      }
      var li = el('li');
      var a = pageLink(n);
      if (n === page) a.setAttribute('aria-current', 'page');
      li.appendChild(a);
      list.appendChild(li);
      last = n;
    });
    list.appendChild(el('li', 'ds-pagination__compact', page + ' / ' + total + '쪽'));
    list.appendChild(edge(page + 1, page < total, '<span>다음</span>' + DS.icon('chevron-right'), '다음 쪽'));
  }

  function renderControls() {
    if (doc.activeElement !== ui.q) ui.q.value = filters.q;
    ui.period.value = filters.period;
    ui.custom.hidden = filters.period !== 'custom';
    ui.from.value = filters.from;
    ui.to.value = filters.to;
    ui.to.setAttribute('aria-invalid', rangeInvalid ? 'true' : 'false');
    ui.toError.hidden = !rangeInvalid;
    ui.drawerDone.textContent = loaded ? '주문 ' + count(view.length) + ' 보기' : '결과 보기';
  }

  function renderCols() {
    $$('input[data-col]', ui.colMenu).forEach(function (box) {
      box.checked = hiddenCols.indexOf(box.getAttribute('data-col')) < 0;
    });
    ui.colsLabel.textContent = hiddenCols.length ? COPY.colsDefault + ' · ' + hiddenCols.length + '개 숨김' : COPY.colsDefault;
  }

  /* 데이터·조건이 바뀌면 모두 다시 그린다. 고르기는 지금 조건에 맞는 주문만 남긴다 */
  function renderAll() {
    view = loaded ? orders.filter(function (o) { return matches(o, false); }).sort(compare) : [];
    if (loaded) {
      var keep = {};
      view.forEach(function (o) { if (selected[o.id]) keep[o.id] = true; });
      selected = keep;
      if (page > pages()) page = pages();
      if (!failed) writeUrl();
    }
    renderControls();
    renderChips();
    renderActive();
    renderCount();
    renderTable();
    renderHeader();
    renderBulk();
    renderPagination();
    renderCols();
  }

  function announceCount() {
    clearTimeout(announceTimer);
    announceTimer = setTimeout(function () {
      if (!loaded) return;
      DS.announce(view.length ? '주문 ' + count(view.length) + '이 보여요' : $('.ds-empty__title', ui.body) ? $('.ds-empty__title', ui.body).textContent : '');
    }, 400);
  }

  /* 조건을 바꿨다 — 1쪽으로 */
  function changed() {
    page = 1;
    renderAll();
    announceCount();
  }

  /* ---------- 불러오기(가짜 요청) ---------- */

  function load(opts) {
    opts = opts || {};
    loaded = false;
    skeleton = false;
    ui.wrap.setAttribute('aria-busy', 'true');
    renderAll();
    if (STATE === 'loading') {
      skeleton = true;
      renderTable();
      DS.announce(COPY.loading);
      return;
    }
    var finish = function () {
      loaded = true;
      skeleton = false;
      ui.wrap.removeAttribute('aria-busy');
      renderAll();
      if (opts.done) opts.done();
      else if (opts.announce !== false) announceCount();
    };
    if (opts.instant) {
      orders = STATE === 'empty' ? [] : DATA.orders.map(function (o) { return Object.assign({}, o); });
      finish();
      return;
    }
    DS.announce(COPY.loading);
    var timer = DS.loadingTimer(function () {
      skeleton = true;
      renderTable();
    }, finish);
    setTimeout(function () {
      orders = STATE === 'empty' ? [] : DATA.orders.map(function (o) { return Object.assign({}, o); });
      timer.stop();
    }, LOAD_MS);
  }

  /* ---------- 일괄 작업 ---------- */

  function plan(kind) {
    var picked = selectedIds().map(byId).filter(Boolean);
    var ok = [];
    var skip = {};
    picked.forEach(function (o) {
      var why = null;
      if (kind === 'ship') {
        if (o.ship === 'canceled') why = '취소한 주문';
        else if (o.ship !== 'ready') why = '이미 배송을 시작했거나 끝난 주문';
        else if (o.pay !== 'paid') why = PAY[o.pay].label;
      } else if (o.ship === 'canceled') why = '이미 취소한 주문';
      else if (o.ship !== 'ready') why = '배송을 시작한 주문';
      if (why) skip[why] = (skip[why] || 0) + 1;
      else ok.push(o);
    });
    var skipped = picked.length - ok.length;
    return { kind: kind, picked: picked, ok: ok, skip: skip, skipped: skipped };
  }

  /* 주문 번호는 줄 중간에서 끊기지 않게 하나씩 감싼다 */
  function idsLine(label, list) {
    var p = el('p', 'ot-dlg-ids', label);
    list.slice(0, 3).forEach(function (o, i) {
      if (i) p.appendChild(doc.createTextNode(', '));
      p.appendChild(el('span', 'ot-tnum', o.id));
    });
    if (list.length > 3) p.appendChild(doc.createTextNode(' 외 ' + count(list.length - 3)));
    return p;
  }

  var pendingKind = null;

  function openConfirm(kind, opener) {
    if (working) return; // 일괄 작업이 처리 중이면 새로 열지 않는다
    var p = plan(kind);
    if (!p.ok.length) return;
    pendingKind = kind;
    ui.dlg.returnValue = '';
    var n = count(p.ok.length);
    var title = kind === 'ship' ? '주문 ' + n + '을 배송 처리할까요?' : '주문 ' + n + '을 취소할까요?';
    ui.dlgTitle.textContent = title;
    var body = ui.dlgBody;
    body.textContent = '';
    if (kind === 'ship') {
      body.appendChild(el('p', null, '배송 상태가 배송중으로 바뀌고 고객에게 배송 시작 알림이 가요.'));
    } else {
      var paid = p.ok.filter(function (o) { return o.pay === 'paid'; }).length;
      body.appendChild(el('p', null, (paid ? '결제한 주문 ' + count(paid) + '은 결제 수단으로 환불돼요. ' : '') + '취소하면 되돌릴 수 없어요.'));
    }
    if (p.skipped) {
      body.appendChild(el('p', null, '고른 주문 ' + count(p.picked.length) + ' 중 ' + count(p.skipped) + '은 건너뛰어요.'));
      var ul = el('ul', 'ot-dlg-list');
      Object.keys(p.skip).forEach(function (why) { ul.appendChild(el('li', null, why + ' ' + count(p.skip[why]))); });
      body.appendChild(ul);
    }
    body.appendChild(idsLine(kind === 'ship' ? '처리할 주문: ' : '취소할 주문: ', p.ok));
    var run = ui.dlgRun;
    run.textContent = kind === 'ship' ? '주문 ' + n + ' 배송 처리' : '주문 ' + n + ' 취소';
    run.className = 'ds-btn ' + (kind === 'ship' ? 'ds-btn--primary' : 'ds-btn--danger');
    DS.dialog.open(ui.dlg, opener);
  }

  function bulkButton(kind) { return kind === 'ship' ? ui.ship : ui.cancel; }

  function run(kind) {
    var btn = bulkButton(kind);
    var p = plan(kind);
    if (!p.ok.length || working) return;
    working = kind;
    renderBulk(); // 다른 버튼은 이유("처리가 끝나면 누를 수 있어요")와 함께 막는다
    DS.busy(btn, true);
    ui.wrap.setAttribute('aria-busy', 'true');
    DS.announce('처리 중이에요');
    setTimeout(function () {
      var fail = failNext;
      failNext = false;
      // 응답을 받았다. 처리 중 표시는 kit 이 0.3초 뒤에 띄우고 0.4초는 남긴다.
      // 결과(표·배너)는 DS.busy 해제가 끝난 뒤(.then) 보인다 — 버튼 글자와 결과가 엇갈리지 않게
      DS.busy(btn, false).then(function () {
        working = false;
        ui.wrap.removeAttribute('aria-busy');
        if (fail) {
          renderAll();
          DS.banner.show({
            id: 'bulk-result', tone: 'danger',
            title: kind === 'ship' ? '배송 처리를 하지 못했어요' : '주문을 취소하지 못했어요',
            text: COPY.failText,
            actions: [{ label: (kind === 'ship' ? '배송 처리' : '주문 취소') + ' 다시 하기', primary: true, onClick: function () { run(kind); } }],
            focusNext: '#' + btn.id
          });
          return;
        }
        done(kind, p);
      });
    }, WORK_MS);
  }

  function done(kind, p) {
    var refunds = 0;
    p.ok.forEach(function (o) {
      if (kind === 'ship') o.ship = 'shipping';
      else {
        o.ship = 'canceled';
        if (o.pay === 'paid') { o.pay = 'refunded'; refunds += 1; } else o.pay = 'void';
      }
      delete selected[o.id];
    });
    renderAll();
    var n = count(p.ok.length);
    var parts = [];
    if (kind === 'cancel' && refunds) parts.push('결제한 주문 ' + count(refunds) + '은 환불을 요청했어요.');
    if (p.skipped) parts.push('건너뛴 주문 ' + count(p.skipped) + '은 고른 채로 두었어요.');
    if (!parts.length) parts.push(kind === 'ship' ? '고객에게 배송 시작 알림을 보냈어요.' : '배송 상태가 취소완료로 바뀌었어요.');
    DS.banner.show({
      id: 'bulk-result', tone: 'success',
      title: kind === 'ship' ? '주문 ' + n + '을 배송 처리했어요' : '주문 ' + n + '을 취소했어요',
      text: parts.join(' '),
      focusNext: '#results-title'
    });
  }

  /* 상태 쿼리용 — 첫 쪽에서 배송 처리할 수 있는 주문과 건너뛸 주문을 섞어 고른다 */
  function preselect() {
    var rows = pageRows();
    var ok = rows.filter(function (o) { return o.ship === 'ready' && o.pay === 'paid'; }).slice(0, 4);
    var waiting = rows.filter(function (o) { return o.ship === 'ready' && o.pay !== 'paid'; }).slice(0, 1);
    var moving = rows.filter(function (o) { return o.ship === 'shipping'; }).slice(0, 1);
    ok.concat(waiting, moving).forEach(function (o) { selected[o.id] = true; });
    renderAll();
  }

  /* ---------- 필터 서랍(767 이하) ---------- */

  // kit 의 쌓기 경계(47.9375rem)와 같게 — 글자를 키우면 함께 바뀐다
  var narrow = window.matchMedia ? matchMedia('(max-width: 47.9375rem)') : null;

  function openDrawer() {
    ui.drawerBody.appendChild(ui.more);
    renderControls();
    DS.dialog.open(ui.drawer, ui.btnFilters);
  }

  function restoreMore() {
    if (ui.more.parentNode !== ui.form) ui.form.insertBefore(ui.more, ui.btnFilters);
  }

  /* ---------- 열 고르기 ---------- */

  function loadCols() {
    try {
      var v = JSON.parse(localStorage.getItem(COLS_KEY) || '[]');
      if (Array.isArray(v)) hiddenCols = v.filter(function (c) { return DATA_COLS.indexOf(c) >= 0; });
    } catch (e) { hiddenCols = []; }
  }

  function saveCols() {
    try { localStorage.setItem(COLS_KEY, JSON.stringify(hiddenCols)); } catch (e) { /* 저장할 수 없으면 이번 화면에만 */ }
  }

  function setColMenu(open, refocus) {
    ui.colMenu.hidden = !open;
    ui.btnCols.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      var first = $('input[data-col]', ui.colMenu);
      if (first) first.focus();
    } else if (refocus) ui.btnCols.focus();
  }

  /* ---------- 걸린 필터 빼기 ---------- */

  function removeFilter(key) {
    if (key === 'q') filters.q = '';
    else if (key === 'period') { filters.period = 'all'; filters.from = ''; filters.to = ''; rangeInvalid = false; }
    else if (key.indexOf('status:') === 0) {
      var k = key.slice(7);
      filters.status = filters.status.filter(function (s) { return s !== k; });
    }
  }

  function clearAll() {
    filters = { q: '', period: 'all', from: '', to: '', status: [] };
    rangeInvalid = false;
    page = 1;
    renderAll();
    DS.announce(COPY.cleared + '. 주문 ' + count(view.length) + '이 보여요');
  }

  /* ---------- 이벤트 ---------- */

  function bind() {
    ui.form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearTimeout(searchTimer);
      filters.q = ui.q.value.trim();
      changed();
    });

    ui.q.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        var v = ui.q.value.trim();
        if (v === filters.q) return;
        filters.q = v;
        changed();
      }, SEARCH_WAIT);
    });

    ui.period.addEventListener('change', function () {
      filters.period = ui.period.value;
      if (filters.period !== 'custom') { filters.from = ''; filters.to = ''; rangeInvalid = false; }
      changed();
      if (filters.period === 'custom') ui.from.focus();
    });

    function onRange() {
      filters.from = validDate(ui.from.value);
      filters.to = validDate(ui.to.value);
      rangeInvalid = !!(filters.from && filters.to && filters.from > filters.to);
      changed();
    }
    ui.from.addEventListener('change', onRange);
    ui.to.addEventListener('change', onRange);

    doc.addEventListener('ds:toggle', function (e) {
      var k = e.target.getAttribute && e.target.getAttribute('data-status');
      if (!k) return;
      filters.status = SHIP_ORDER.filter(function (s) {
        var chip = $('.ds-chip[data-status="' + s + '"]', ui.more);
        return chip && chip.getAttribute('aria-pressed') === 'true';
      });
      changed();
    });

    ui.activeList.addEventListener('click', function (e) {
      var x = e.target.closest('[data-remove]');
      if (!x) return;
      var all = $$('[data-remove]', ui.activeList);
      var i = all.indexOf(x);
      removeFilter(x.getAttribute('data-remove'));
      changed();
      var after = $$('[data-remove]', ui.activeList);
      var target = after[i] || after[i - 1] || ui.q;
      target.focus();
    });

    ui.clearAll.addEventListener('click', function () {
      clearAll();
      ui.q.focus();
    });

    ui.body.addEventListener('change', function (e) {
      var box = e.target;
      var id = box.getAttribute && box.getAttribute('data-pick');
      if (!id) return;
      if (box.checked) selected[id] = true;
      else delete selected[id];
      renderHeader();
      renderBulk();
    });

    ui.body.addEventListener('click', function (e) {
      if (e.target.closest('#btn-empty-clear')) {
        clearAll();
        ui.q.focus();
        return;
      }
      // 다시 불러오는 동안 누른 버튼이 스켈레톤으로 바뀐다 — 포커스를 보이는 결과 제목으로 먼저 옮긴다
      if (e.target.closest('#btn-recheck')) {
        ui.title.focus();
        load({ done: function () { DS.announce(orders.length ? '주문 ' + count(orders.length) + '을 불러왔어요' : COPY.noneAgain); var b = $('#btn-recheck'); if (b) b.focus(); } });
        return;
      }
      if (e.target.closest('#btn-reload')) {
        failed = false;
        STATE = '';
        DS.url.set({ state: null });
        ui.title.focus();
        load();
      }
    });

    if (!readonly) {
      ui.selPage.addEventListener('change', function () {
        var rows = pageRows();
        rows.forEach(function (o) {
          if (ui.selPage.checked) selected[o.id] = true;
          else delete selected[o.id];
        });
        renderTable();
        renderHeader();
        renderBulk();
        DS.announce(ui.selPage.checked ? '이 쪽 주문 ' + count(rows.length) + '을 골랐어요' : '이 쪽 주문 고르기를 풀었어요');
      });

      ui.unselect.addEventListener('click', function () {
        selected = {};
        renderTable();
        renderHeader();
        renderBulk();
        ui.title.focus();
        DS.announce(COPY.unselected);
      });

      ui.ship.addEventListener('click', function () { openConfirm('ship', ui.ship); });
      ui.cancel.addEventListener('click', function () { openConfirm('cancel', ui.cancel); });

      ui.dlg.addEventListener('close', function () {
        var kind = pendingKind;
        pendingKind = null;
        if (ui.dlg.returnValue === 'run' && kind) run(kind);
      });
    }

    ui.table.addEventListener('ds:sort', function (e) {
      sort = { key: e.detail.key, dir: e.detail.dir };
      page = 1;
      renderAll();
    });

    ui.pgList.addEventListener('click', function (e) {
      var a = e.target.closest('a[data-page]');
      if (!a) return;
      e.preventDefault();
      var edgeLi = a.closest('.ds-pagination__edge');
      var which = edgeLi ? (edgeLi === ui.pgList.firstElementChild ? 0 : 1) : -1;
      page = parseInt(a.getAttribute('data-page'), 10) || 1;
      renderAll();
      // 누른 자리 가까이에 포커스를 남긴다 — 번호면 지금 쪽, 이전·다음이면 같은 버튼(끝에 닿으면 반대쪽)
      var edges = $$('.ds-pagination__edge > a', ui.pgList);
      var usable = function (x) { return x && x.hasAttribute('href') && x.offsetParent; };
      var target = which < 0 ? $('[aria-current="page"]', ui.pgList) : edges[which];
      if (!usable(target)) target = edges.filter(usable)[0];
      if (target) target.focus();
      var start = (page - 1) * PER_PAGE + 1;
      DS.announce(page + '쪽이에요. ' + count(view.length) + ' 중 ' + start + '–' + Math.min(page * PER_PAGE, view.length));
    });

    // 열 고르기
    ui.btnCols.addEventListener('click', function () { setColMenu(ui.colMenu.hidden, false); });
    ui.colMenu.addEventListener('change', function (e) {
      var col = e.target.getAttribute('data-col');
      if (!col) return;
      hiddenCols = DATA_COLS.filter(function (c) {
        var box = $('input[data-col="' + c + '"]', ui.colMenu);
        return box && !box.checked;
      });
      saveCols();
      renderAll();
      DS.announce(e.target.checked ? LABELS[col] + ' 열을 보여요' : LABELS[col] + ' 열을 숨겼어요');
    });
    ui.colPick.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !ui.colMenu.hidden) {
        e.preventDefault();
        setColMenu(false, true);
      }
    });
    ui.colPick.addEventListener('focusout', function (e) {
      if (!ui.colMenu.hidden && e.relatedTarget && !ui.colPick.contains(e.relatedTarget)) setColMenu(false, false);
    });
    doc.addEventListener('click', function (e) {
      if (!ui.colMenu.hidden && !ui.colPick.contains(e.target)) setColMenu(false, false);
    });

    // 필터 서랍
    ui.btnFilters.addEventListener('click', openDrawer);
    ui.drawer.addEventListener('close', restoreMore);
    ui.drawerClear.addEventListener('click', function () {
      clearAll();
      ui.period.focus();
    });
    if (narrow) {
      var onWidth = function () {
        if (!narrow.matches && ui.drawer.open) DS.dialog.close(ui.drawer);
        if (!readonly) placeBulk();
      };
      if (narrow.addEventListener) narrow.addEventListener('change', onWidth);
    }
    // 화면 높이·글자 크기가 바뀌면 붙은 줄 높이를 다시 잰다
    window.addEventListener('resize', function () {
      if (!readonly && ui.results.classList.contains('ot-results--picked')) requestAnimationFrame(keepFocusAboveBar);
    });
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    ui = {
      form: $('#filters'),
      q: $('#q'),
      more: $('#filter-more'),
      period: $('#period'),
      custom: $('#custom-range'),
      from: $('#from'),
      to: $('#to'),
      toError: $('#to-error'),
      statusChips: $$('.ds-chip[data-status]'),
      btnFilters: $('#btn-filters'),
      filterN: $('#filter-n'),
      filterNsr: $('#filter-n-sr'),
      active: $('#active'),
      activeList: $('#active-list'),
      clearAll: $('#btn-clear-all'),
      results: $('#results'),
      resultbar: $('.ot-resultbar'),
      title: $('#results-title'),
      countMeta: $('#count-meta'),
      bulk: $('#bulk'),
      picked: $('#picked'),
      unselect: $('#btn-unselect'),
      ship: $('#btn-ship'),
      cancel: $('#btn-cancel'),
      colPick: $('#colpick'),
      btnCols: $('#btn-cols'),
      colsLabel: $('#cols-label'),
      colMenu: $('#col-menu'),
      wrap: $('#table-wrap'),
      table: $('#orders'),
      body: $('#order-body'),
      selPage: $('#sel-page'),
      pagination: $('#pagination'),
      pgSummary: $('#pg-summary'),
      pgList: $('#pg-list'),
      dlg: $('#dlg-bulk'),
      dlgTitle: $('#dlg-bulk-title'),
      dlgBody: $('#dlg-bulk-body'),
      dlgRun: $('#dlg-bulk-run'),
      drawer: $('#filter-drawer'),
      drawerBody: $('#drawer-body'),
      drawerClear: $('#drawer-clear'),
      drawerDone: $('#drawer-done')
    };

    // 자리 표시 글은 가상 데이터에서 예시 값을 가져온다(데이터는 data.js 한 곳에만)
    var sample = DATA.orders[0];
    // 주문 번호 앞 8자리(주문일)만 보인다 — 320 폭에서도 잘리지 않고, 그 날짜의 주문을 찾는 예시가 된다
    if (sample) ui.q.placeholder = '예: ' + sample.id.slice(0, 8) + '…';

    if (readonly) {
      ui.table.classList.add('ot-table--readonly');
      var th = $('#th-select');
      if (th) th.remove();
      ui.bulk.remove();
    }

    readUrl();
    loadCols();
    bind();

    // 정렬 머리 — 주소에 없으면 기본 정렬(주문일 내림차순)을 조용히 표시한다
    DS.sort.apply(ui.table, sort.key, sort.dir, { fromUrl: true, silent: true });

    // 불러오기 오류 — 결과 자리(표 몸통)에 오류 상태와 "다시 불러오기"를 남긴다. 닫히는 배너는 쓰지 않는다
    if (failed) {
      renderAll();
      DS.announce(COPY.errorTitle + '. ' + COPY.errorText, { assertive: true });
      return;
    }

    if (readonly) {
      DS.banner.show({ id: 'readonly', tone: 'info', title: COPY.readonlyTitle, text: COPY.readonlyText, dismissible: false });
    }

    var instant = ['dialog', 'success', 'empty', 'readonly', 'bulk-error', 'filters'].indexOf(STATE) >= 0;
    load({
      instant: instant,
      done: function () {
        if (STATE === 'dialog') {
          preselect();
          openConfirm('ship', ui.ship);
        } else if (STATE === 'success') {
          preselect();
          done('ship', plan('ship'));
        } else if (STATE === 'filters' && narrow && narrow.matches) {
          openDrawer();
        } else {
          announceCount();
        }
      }
    });
  });
})();
