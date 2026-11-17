/*
 * 고객 상세와 편집 — 보기·편집 모드, 칸 검증, 저장(가짜 요청), 떠나기 전 확인, 상태 쿼리.
 *   ?mode=edit                편집 모드로 연다
 *   ?state=loading            불러오기가 끝나지 않는다(스켈레톤)
 *   ?state=error              불러오기 실패 배너 → 다시 불러오기
 *   ?state=empty              메모·주문이 없는 새 고객
 *   ?state=not-found          없는 고객
 *   ?state=no-permission      보기만 가능(고치기 버튼 비활성 + 이유)
 *   ?state=save-fail          첫 저장이 실패한다(두 번째는 성공)
 *   ?state=invalid            틀린 값으로 저장을 누른 편집 모드
 *   ?state=stale              다른 팀이 먼저 고친 낡은 화면
 * 가상 데이터는 js/data.js(window.CE_DATA)에만 있다.
 */
(function () {
  'use strict';

  var doc = document;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  var DATA = window.CE_DATA;
  var STATE = new URLSearchParams(location.search).get('state') || '';

  var GRADES = { basic: '일반', good: '우수', best: '최우수' };
  var ORDER_STATUS = {
    shipping: { label: '배송 중', tone: 'info' },
    done: { label: '배송 완료', tone: 'success' },
    cancelled: { label: '취소', tone: '' }
  };

  var COPY = {
    titleSuffix: ' — 고객 상세',
    pageName: '고객 상세',
    editTitle: ' 정보 고치기',
    gradeBadge: function (g) { return GRADES[g] + ' 고객'; },
    lastEdited: function (team, date) { return withSubject(team) + ' ' + date + '에 마지막으로 고쳤어요.'; },
    lastEditedNow: function (team) { return withSubject(team) + ' 방금 고쳤어요.'; },
    noEmail: '이메일 없음',
    noAddress: '주소 없음',
    ordersDesc: function (total, shown) { return '모든 주문 ' + total + '건 중 최근 ' + shown + '건이에요.'; },
    ordersCaption: function (shown) { return '최근 주문 ' + shown + '건'; },
    justNow: '방금',
    loading: '고객 정보를 불러오는 중이에요',
    loaded: '고객 정보를 불러왔어요',
    loadFailTitle: '고객 정보를 불러오지 못했어요',
    loadFailText: '연결이 잠시 끊겼어요. 다시 불러오면 이어서 볼 수 있어요.',
    reload: '다시 불러오기',
    staleTitle: '다른 팀이 이 고객 정보를 고쳤어요',
    staleText: '새로 불러오면 바뀐 내용을 볼 수 있어요.',
    staleReload: '새로 불러오기',
    staleDone: '바뀐 고객 정보를 불러왔어요',
    notFoundTitle: '고객을 찾을 수 없어요',
    notFoundText: function (id) { return '고객 번호 ' + id + '인 고객이 없어요. 지워졌거나 번호가 바뀌었을 수 있어요.'; },
    noPermTip: '편집 권한이 없어요',
    nameEmpty: '고객 이름을 입력해 주세요.',
    nameLong: '고객 이름은 40자까지 쓸 수 있어요.',
    phoneEmpty: '휴대 전화번호를 입력해 주세요.',
    phoneBad: '휴대 전화번호는 01로 시작하는 숫자 10~11자리로 입력해 주세요.',
    emailBad: '이메일에 @와 도메인을 함께 써 주세요.',
    postBad: '우편번호는 숫자 5자리로 입력해 주세요.',
    addrLong: '주소는 100자까지 쓸 수 있어요.',
    memoLong: function (over) { return '메모가 500자를 넘었어요. ' + over + '자를 줄여 주세요.'; },
    memoCount: function (n) { return n + ' / 500자'; },
    summaryTitle: function (n) { return '저장하려면 칸 ' + n + '개를 고쳐 주세요'; },
    dirty: function (n) { return '저장하지 않은 칸 ' + n + '개'; },
    nothingChanged: '바꾼 칸이 없어서 저장하지 않았어요',
    savedTitle: '고객 정보를 저장했어요',
    savedText: function (n) { return '바꾼 칸 ' + n + '개를 변경 기록에 남겼어요.'; },
    saveFailTitle: '고객 정보를 저장하지 못했어요',
    saveFailText: '연결이 잠시 끊겼어요. 입력한 내용은 그대로 있어요.',
    retrySave: '다시 저장',
    discardText: function (n) { return '저장하지 않은 칸 ' + n + '개가 원래 값으로 돌아가요.'; },
    discard: '고친 내용 버리기',
    discardLeave: '고친 내용 버리고 나가기',
    historyGrade: function (from, to) { return '등급을 ' + from + '에서 ' + withTo(to) + ' 바꿨어요'; },
    historyFew: function (labels) { return withObject(labels.join(', ')) + ' 고쳤어요'; },
    historyMany: function (first, n) { return first + ' 등 칸 ' + n + '개를 고쳤어요'; }
  };

  /* 편집 칸 — 순서가 오류 요약·첫 오류 포커스 순서다 */
  var FIELDS = [
    { key: 'name', id: 'f-name', label: '고객 이름' },
    { key: 'phone', id: 'f-phone', label: '휴대 전화번호', fullAt: 11 },
    { key: 'email', id: 'f-email', label: '이메일' },
    { key: 'postcode', id: 'f-postcode', label: '우편번호', fullAt: 5 },
    { key: 'address1', id: 'f-address1', label: '기본 주소' },
    { key: 'address2', id: 'f-address2', label: '상세 주소' },
    { key: 'grade', label: '등급', radio: true },
    { key: 'memo', id: 'f-memo', label: '메모' }
  ];
  var MEMO_MAX = 500;

  /* ---------- 한국어 조사 ---------- */

  function finalConsonant(word) {
    var c = word.charCodeAt(word.length - 1);
    if (c < 0xac00 || c > 0xd7a3) return -1;
    return (c - 0xac00) % 28;
  }
  function withSubject(w) { return w + (finalConsonant(w) > 0 ? '이' : '가'); }
  function withObject(w) { return w + (finalConsonant(w) > 0 ? '을' : '를'); }
  function withTo(w) { var f = finalConsonant(w); return w + (f > 0 && f !== 8 ? '으로' : '로'); }

  /* ---------- 날짜·숫자 ---------- */

  function proseDate(iso) {
    var p = iso.split('-');
    var sameYear = p[0] === DATA.today.slice(0, 4);
    return (sameYear ? '' : Number(p[0]) + '년 ') + Number(p[1]) + '월 ' + Number(p[2]) + '일';
  }
  var won = window.Intl ? new Intl.NumberFormat('ko-KR') : null;
  function money(n) { return (won ? won.format(n) : String(n)) + '원'; }
  function digits(v) { return String(v || '').replace(/\D/g, ''); }
  function prettyPhone(v) {
    var d = digits(v);
    if (d.length === 11) return d.slice(0, 3) + '-' + d.slice(3, 7) + '-' + d.slice(7);
    if (d.length === 10) return d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6);
    return v;
  }

  /* ---------- 상태 ---------- */

  var customer = null;      // 저장된 값
  var log = [];             // 변경 기록
  var orders = [];
  var orderTotal = 0;
  var loaded = false;
  var editing = false;
  var saving = false;       // 저장 요청 중 — 칸 떠남 검증을 멈추고, 뒤로 가기면 확인을 받는다
  var canEdit = STATE !== 'no-permission';
  var failNextSave = STATE === 'save-fail';
  var errors = {};
  var summaryOn = false;
  var allowLeave = false;   // 확인을 받고 다른 페이지로 갈 때
  var popExit = false;      // history.back() 으로 편집을 끝내는 중
  var afterExit = null;     // 편집을 끝낸 뒤 할 일
  var pending = null;       // 대화상자가 확인을 받는 동작

  var el = {};

  /* ---------- 보기 그리기 ---------- */

  function setTitle(text) { doc.title = text + COPY.titleSuffix; }

  function renderHead() {
    el.title.textContent = customer.name;
    el.badge.textContent = COPY.gradeBadge(customer.grade);
    el.desc.textContent = customer.updatedJustNow
      ? COPY.lastEditedNow(customer.updatedBy)
      : COPY.lastEdited(customer.updatedBy, proseDate(customer.updatedAt));
    setTitle(customer.name + (editing ? COPY.editTitle : ''));
  }

  function renderInfo() {
    var phone = $('#v-phone');
    phone.textContent = customer.phone;
    phone.href = 'tel:' + digits(customer.phone);

    var email = $('#v-email');
    var hasEmail = !!customer.email.trim();
    email.hidden = !hasEmail;
    $('#v-email-none').hidden = hasEmail;
    if (hasEmail) {
      email.textContent = customer.email;
      email.href = 'mailto:' + customer.email.trim();
    } else {
      email.removeAttribute('href');
    }

    var addr = $('#v-address');
    addr.textContent = '';
    var line = [customer.address1, customer.address2].filter(function (s) { return s && s.trim(); }).join(', ');
    if (customer.postcode) {
      var pc = doc.createElement('span');
      pc.className = 'ce-postcode';
      pc.textContent = '(' + customer.postcode + ')';
      addr.appendChild(pc);
    }
    if (line) addr.appendChild(doc.createTextNode(line));
    if (!line && !customer.postcode) {
      var none = doc.createElement('span');
      none.className = 'ce-none';
      none.textContent = COPY.noAddress;
      addr.appendChild(none);
    }

    $('#v-id').textContent = customer.id;
    $('#v-team').textContent = customer.team;
    var created = $('#v-created');
    created.dateTime = customer.createdAt;
    created.textContent = customer.createdAt;
  }

  function renderMemo() {
    var has = !!customer.memo.trim();
    $('#v-memo').hidden = !has;
    $('#v-memo').textContent = customer.memo;
    $('#memo-empty').hidden = has;
    $('#btn-memo-write').hidden = !canEdit;
  }

  function cell(text, cls, label) {
    var td = doc.createElement('td');
    if (cls) td.className = cls;
    if (label) td.setAttribute('data-label', label);
    if (text != null) td.textContent = text;
    return td;
  }

  function renderOrders() {
    var body = $('#orders-body');
    body.textContent = '';
    var has = orders.length > 0;
    $('#orders-wrap').hidden = !has;
    $('#orders-desc').hidden = !has;
    $('#orders-empty').hidden = has;
    if (!has) return;
    $('#orders-desc').textContent = COPY.ordersDesc(orderTotal, orders.length);
    $('#orders-caption').textContent = COPY.ordersCaption(orders.length);
    orders.forEach(function (o) {
      var tr = doc.createElement('tr');
      tr.appendChild(cell(o.id, 'ds-table__primary', '주문 번호'));
      var dateTd = cell(null, '', '주문일');
      var t = doc.createElement('time');
      t.dateTime = o.date;
      t.textContent = o.date;
      dateTd.appendChild(t);
      tr.appendChild(dateTd);
      tr.appendChild(cell(o.item, '', '상품'));
      tr.appendChild(cell(money(o.amount), 'ds-num', '금액'));
      var st = ORDER_STATUS[o.status] || { label: o.status, tone: '' };
      var stTd = cell(null, '', '상태');
      var badge = doc.createElement('span');
      badge.className = 'ds-badge' + (st.tone ? ' ds-badge--' + st.tone : '');
      badge.textContent = st.label;
      stTd.appendChild(badge);
      tr.appendChild(stTd);
      body.appendChild(tr);
    });
  }

  function renderHistory() {
    var list = $('#history-list');
    list.textContent = '';
    log.forEach(function (h) {
      var li = doc.createElement('li');
      li.className = 'ds-list__row';
      var main = doc.createElement('div');
      main.className = 'ds-list__main';
      var title = doc.createElement('span');
      title.className = 'ds-list__title';
      title.textContent = h.text;
      var meta = doc.createElement('span');
      meta.className = 'ds-list__meta';
      meta.textContent = h.team;
      main.appendChild(title);
      main.appendChild(meta);
      var t = doc.createElement('time');
      t.className = 'ds-list__aside';
      t.dateTime = h.now ? new Date().toISOString() : h.date;
      t.textContent = h.now ? COPY.justNow : h.date;
      li.appendChild(main);
      li.appendChild(t);
      list.appendChild(li);
    });
  }

  function renderAll() {
    renderHead();
    renderInfo();
    renderMemo();
    renderOrders();
    renderHistory();
  }

  /* ---------- 권한 ---------- */

  function applyPermission() {
    var btn = el.btnEdit;
    if (canEdit) return;
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('data-ds-tip', COPY.noPermTip);
    btn.setAttribute('aria-describedby', 'perm-note');
    $('#perm-note').hidden = false;
  }

  /* ---------- 편집 폼 ---------- */

  function input(f) { return doc.getElementById(f.id); }

  function fillForm(values) {
    FIELDS.forEach(function (f) {
      if (f.radio) {
        $$('input[name="' + f.key + '"]', el.form).forEach(function (r) { r.checked = r.value === values[f.key]; });
      } else {
        input(f).value = values[f.key] || '';
      }
    });
    updateCounter();
  }

  function formValues() {
    var v = {};
    FIELDS.forEach(function (f) {
      if (f.radio) {
        var picked = $('input[name="' + f.key + '"]:checked', el.form);
        v[f.key] = picked ? picked.value : customer[f.key];
      } else {
        v[f.key] = input(f).value;
      }
    });
    return v;
  }

  function same(key, a, b) {
    if (key === 'phone') return digits(a) === digits(b);
    return (a || '') === (b || '');
  }

  function dirtyKeys() {
    if (!editing) return [];
    var v = formValues();
    return FIELDS.filter(function (f) { return !same(f.key, v[f.key], customer[f.key]); }).map(function (f) { return f.key; });
  }

  function updateDirty() {
    var n = dirtyKeys().length;
    el.dirty.hidden = n === 0;
    el.dirty.textContent = n ? COPY.dirty(n) : '';
  }

  function updateCounter() {
    $('#f-memo-hint').textContent = COPY.memoCount($('#f-memo').value.length);
  }

  function validate(key, value) {
    var v = value || '';
    switch (key) {
      case 'name':
        if (!v.trim()) return COPY.nameEmpty;
        if (v.length > 40) return COPY.nameLong;
        return '';
      case 'phone':
        if (!v.trim()) return COPY.phoneEmpty;
        if (!/^[\d\s\-.()]+$/.test(v) || !/^01\d{8,9}$/.test(digits(v))) return COPY.phoneBad;
        return '';
      case 'email':
        if (!v.trim()) return '';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : COPY.emailBad;
      case 'postcode':
        if (!v.trim()) return '';
        return /^\d{5}$/.test(v.trim()) ? '' : COPY.postBad;
      case 'address1':
      case 'address2':
        return v.length > 100 ? COPY.addrLong : '';
      case 'memo':
        return v.length > MEMO_MAX ? COPY.memoLong(v.length - MEMO_MAX) : '';
      default:
        return '';
    }
  }

  function describe(inp, withError) {
    var ids = (inp.getAttribute('data-describedby') || '').split(/\s+/).filter(Boolean);
    if (withError) ids.push(inp.id + '-error');
    if (ids.length) inp.setAttribute('aria-describedby', ids.join(' '));
    else inp.removeAttribute('aria-describedby');
  }

  function setError(f, msg) {
    var inp = input(f);
    var box = doc.getElementById(f.id + '-error');
    errors[f.key] = msg;
    $('span', box).textContent = msg;
    box.hidden = !msg;
    if (msg) inp.setAttribute('aria-invalid', 'true');
    else inp.removeAttribute('aria-invalid');
    describe(inp, !!msg);
  }

  function check(f) {
    var msg = validate(f.key, input(f).value);
    setError(f, msg);
    if (summaryOn) renderSummary();
    return msg;
  }

  function clearErrors() {
    FIELDS.forEach(function (f) { if (!f.radio) setError(f, ''); });
    summaryOn = false;
    el.summary.hidden = true;
  }

  function renderSummary() {
    var bad = FIELDS.filter(function (f) { return errors[f.key]; });
    if (!bad.length) {
      summaryOn = false;
      el.summary.hidden = true;
      return;
    }
    $('#err-summary-title').textContent = COPY.summaryTitle(bad.length);
    var list = $('#err-list');
    list.textContent = '';
    bad.forEach(function (f) {
      var li = doc.createElement('li');
      var a = doc.createElement('a');
      a.href = '#' + f.id;
      a.textContent = f.label;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        input(f).focus();
      });
      li.appendChild(a);
      list.appendChild(li);
    });
    el.summary.hidden = false;
  }

  function wireFields() {
    FIELDS.forEach(function (f) {
      if (f.radio) {
        $$('input[name="' + f.key + '"]', el.form).forEach(function (r) {
          r.addEventListener('change', updateDirty);
        });
        return;
      }
      var inp = input(f);
      describe(inp, false);
      // 칸을 떠날 때 검사한다(PAT-FORM-01). 건드리지 않은 다른 칸은 보지 않는다(PAT-FORM-04)
      inp.addEventListener('blur', function () {
        if (!editing || saving) return;
        var msg = check(f);
        if (!msg && f.key === 'phone') inp.value = prettyPhone(inp.value);
      });
      inp.addEventListener('input', function () {
        if (f.key === 'memo') updateCounter();
        if (errors[f.key]) check(f);                                   // 오류 칸은 글자마다 다시(PAT-FORM-02)
        else if (f.fullAt && digits(inp.value).length >= f.fullAt) check(f); // 다 채운 순간(PAT-FORM-03)
        updateDirty();
      });
    });
  }

  function setReadOnly(on) {
    // 저장하는 동안 글 칸은 읽기 전용. 라디오는 값을 저장 시작 때 이미 읽어 두었다
    FIELDS.forEach(function (f) { if (!f.radio) input(f).readOnly = on; });
  }

  /* ---------- 모드 바꾸기 ---------- */

  function urlWith(changes) {
    var p = new URLSearchParams(location.search);
    Object.keys(changes).forEach(function (k) {
      if (changes[k] == null) p.delete(k); else p.set(k, changes[k]);
    });
    var q = p.toString();
    return location.pathname + (q ? '?' + q : '') + location.hash;
  }

  function pushEditEntry() {
    try { history_.pushState({ ceEdit: true }, '', urlWith({ mode: 'edit' })); } catch (e) { /* 주소를 못 바꾸는 환경 */ }
  }

  var history_ = window.history;

  function swapNavLinks() {
    $$('#nav-customer [data-edit-href]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute(editing ? 'data-edit-href' : 'data-view-href'));
    });
  }

  function enterEdit(opts) {
    opts = opts || {};
    if (!canEdit || !loaded) return;
    DS.banner.dismiss('#save-banner');
    editing = true;
    clearErrors();
    fillForm(opts.values || customer);
    $('#info').hidden = true;
    $('#memo').hidden = true;
    el.form.hidden = false;
    $('#head-actions').hidden = true;
    swapNavLinks();
    updateDirty();
    renderHead();
    if (opts.push) pushEditEntry();
    if (opts.focus) $(opts.focus).focus();
  }

  function exitEdit() {
    editing = false;
    saving = false;
    clearErrors();
    DS.banner.dismiss('#save-banner');
    el.form.hidden = true;
    $('#info').hidden = false;
    $('#memo').hidden = false;
    $('#head-actions').hidden = false;
    swapNavLinks();
    renderAll();
    var next = afterExit;
    afterExit = null;
    // 뒤로 가기로 끝낸 경우 브라우저가 주소의 #위치로 포커스를 옮길 수 있어, 그 뒤에 포커스를 둔다
    setTimeout(function () {
      if (next) next();
      else el.btnEdit.focus();
    }, 0);
  }

  /** 편집을 끝낸다. 편집에 들어올 때 기록을 하나 늘렸으면 뒤로 가서 지운다 */
  function leaveEdit(then) {
    afterExit = then || null;
    var st = history_.state;
    if (st && st.ceEdit) {
      popExit = true;
      history_.back();
      return;
    }
    try { history_.replaceState(history_.state, '', urlWith({ mode: null })); } catch (e) { /* 그대로 둔다 */ }
    exitEdit();
  }

  window.addEventListener('popstate', function () {
    var wantEdit = new URLSearchParams(location.search).get('mode') === 'edit';
    if (popExit) {
      popExit = false;
      if (editing) exitEdit();
      return;
    }
    if (!wantEdit && editing) {
      if (dirtyKeys().length || saving) {
        // 뒤로 가기를 되돌려 놓고 확인을 받는다
        pushEditEntry();
        askDiscard({ type: 'back' }, null);
      } else {
        exitEdit();
      }
    } else if (wantEdit && !editing && canEdit && loaded) {
      enterEdit({ focus: '#f-name' });
    }
  });

  /* ---------- 떠나기 전 확인 ---------- */

  function askDiscard(action, opener) {
    pending = action;
    var dlg = $('#dlg-discard');
    dlg.returnValue = '';
    $('#dlg-discard-desc').textContent = COPY.discardText(dirtyKeys().length);
    $('#btn-discard').textContent = action.type === 'link' ? COPY.discardLeave : COPY.discard;
    DS.dialog.open(dlg, opener || doc.activeElement);
  }

  function wireLeaveGuard() {
    $('#dlg-discard').addEventListener('close', function (e) {
      var dlg = e.target;
      var act = pending;
      pending = null;
      if (!act || dlg.returnValue !== 'discard') return;
      if (act.type === 'link') {
        allowLeave = true;
        location.href = act.href;
        return;
      }
      leaveEdit();
    });

    // 다른 페이지로 가는 링크 — 고친 칸이 있으면 먼저 묻는다
    doc.addEventListener('click', function (e) {
      if (!editing || allowLeave || e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.getAttribute('href').charAt(0) === '#' || a.target === '_blank') return;
      if (!dirtyKeys().length) return;
      e.preventDefault();
      askDiscard({ type: 'link', href: a.href }, a);
    }, true);

    // 새로고침·창 닫기·주소 입력 — 브라우저 확인 창(문구는 브라우저가 정한다)
    window.addEventListener('beforeunload', function (e) {
      if (!editing || allowLeave || !dirtyKeys().length) return;
      e.preventDefault();
      e.returnValue = '';
    });
  }

  /* ---------- 저장 ---------- */

  // 저장 중 다시 누르기(클릭·Enter)는 kit 의 data-ds-pending 이 막는다
  function submitForm(opts) {
    opts = opts || {};
    FIELDS.forEach(function (f) { if (!f.radio) setError(f, validate(f.key, input(f).value)); });
    var bad = FIELDS.filter(function (f) { return errors[f.key]; });
    if (bad.length) {
      summaryOn = true;
      renderSummary();
      DS.announce(COPY.summaryTitle(bad.length));
      if (opts.focus !== false) input(bad[0]).focus();   // 첫 오류 칸으로(CMP-INPUT-05)
      return;
    }
    var keys = dirtyKeys();
    if (!keys.length) {
      leaveEdit(function () {
        el.btnEdit.focus();
        DS.announce(COPY.nothingChanged);
      });
      return;
    }
    save(keys);
  }

  function save(keys) {
    saving = true;
    var values = formValues();
    var btn = $('#btn-save');
    setReadOnly(true);
    el.form.setAttribute('aria-busy', 'true');
    DS.banner.dismiss('#save-banner');
    // 회전 표시를 늦게 띄우고 잠깐 남기는 일(300ms·400ms)은 kit 의 DS.busy 가 맡는다
    DS.busy(btn, true);
    setTimeout(function () {   // 가짜 저장 요청 — 1.2초 뒤 응답
      DS.busy(btn, false).then(function () {   // 원래 글자로 돌아온 뒤 결과를 보인다
        el.form.removeAttribute('aria-busy');
        setReadOnly(false);
        saving = false;
        if (failNextSave) {
          failNextSave = false;
          showSaveFail();
        } else {
          applySave(values, keys);
        }
      });
    }, 1200);
  }

  function showSaveFail() {
    var banner = DS.banner.show({
      id: 'save-banner', tone: 'danger',
      title: COPY.saveFailTitle, text: COPY.saveFailText,
      actions: [{ label: COPY.retrySave, onClick: function () { submitForm(); } }],
      focusNext: '#btn-save'
    });
    var retry = banner && $('.ds-banner__actions .ds-btn', banner);
    if (retry) retry.focus();
  }

  function historyText(keys, before, values) {
    if (keys.length === 1 && keys[0] === 'grade') return COPY.historyGrade(GRADES[before.grade], GRADES[values.grade]);
    var labels = keys.map(function (k) { return FIELDS.filter(function (f) { return f.key === k; })[0].label; });
    if (labels.length <= 2) return COPY.historyFew(labels);
    return COPY.historyMany(labels[0], labels.length);
  }

  function applySave(values, keys) {
    var before = {};
    FIELDS.forEach(function (f) { before[f.key] = customer[f.key]; customer[f.key] = values[f.key]; });
    customer.phone = prettyPhone(customer.phone);
    customer.updatedBy = DATA.currentTeam;
    customer.updatedJustNow = true;
    log.unshift({ text: historyText(keys, before, values), team: DATA.currentTeam, now: true });
    leaveEdit(function () {
      el.btnEdit.focus();
      DS.banner.show({
        id: 'save-banner', tone: 'success',
        title: COPY.savedTitle, text: COPY.savedText(keys.length),
        focusNext: '#btn-edit'
      });
    });
  }

  /* ---------- 불러오기 ---------- */

  function showLoadedContent() {
    el.head.hidden = false;
    el.badge.hidden = false;
    el.desc.hidden = false;
    $('#head-actions').hidden = false;
    $('#content').hidden = false;
    $('#nav-customer').hidden = false;
    renderAll();
  }

  function pickData() {
    var src = STATE === 'empty' ? DATA.emptyCustomer : DATA.customer;
    customer = JSON.parse(JSON.stringify(src));
    log = JSON.parse(JSON.stringify(STATE === 'empty' ? DATA.emptyHistory : DATA.history));
    orders = STATE === 'empty' ? [] : DATA.orders.slice();
    orderTotal = STATE === 'empty' ? 0 : DATA.orderTotal;
  }

  function load(delay, retried) {
    var main = $('#main');
    main.setAttribute('aria-busy', 'true');
    el.head.hidden = true;
    var timer = DS.loadingTimer(
      function () {
        $('#skeleton').hidden = false;
        DS.announce(COPY.loading);
      },
      function (shown) {
        $('#skeleton').hidden = true;
        main.removeAttribute('aria-busy');
        loadDone(retried, shown);
      });
    if (STATE === 'loading') return; // 끝나지 않는 불러오기
    setTimeout(function () { timer.stop(); }, delay);
  }

  function loadDone(retried, shown) {
    if (STATE === 'error' && !retried) {
      setTitle(COPY.loadFailTitle);
      // 고객 이름을 모르니 화면 이름만 제목으로 둔다. 다시 불러오기 말고는 할 일이 없어 배너는 닫지 않는다
      el.title.textContent = COPY.pageName;
      el.badge.hidden = true;
      el.desc.hidden = true;
      $('#head-actions').hidden = true;
      el.head.hidden = false;
      DS.banner.show({
        id: 'load-banner', tone: 'danger', dismissible: false,
        title: COPY.loadFailTitle, text: COPY.loadFailText,
        actions: [{
          label: COPY.reload, primary: true,
          onClick: function () {
            try { history_.replaceState(history_.state, '', urlWith({ state: null })); } catch (e) { /* 그대로 둔다 */ }
            STATE = '';
            load(900, true);
          }
        }],
        focusNext: '#main'
      });
      return;
    }
    if (STATE === 'not-found') {
      $('#nf-text').textContent = COPY.notFoundText(DATA.missingId);
      $('#not-found').hidden = false;
      setTitle(COPY.notFoundTitle);
      return;
    }

    pickData();
    loaded = true;
    showLoadedContent();
    applyPermission();
    if (shown) DS.announce(COPY.loaded);
    // 다시 불러오기를 누른 뒤면 포커스를 이 화면의 주 행동으로 옮긴다
    if (retried && (doc.activeElement === doc.body || doc.activeElement === $('#main'))) el.btnEdit.focus();

    var wantEdit = new URLSearchParams(location.search).get('mode') === 'edit';
    if (STATE === 'invalid') {
      var bad = JSON.parse(JSON.stringify(customer));
      Object.keys(DATA.invalidInput).forEach(function (k) { bad[k] = DATA.invalidInput[k]; });
      enterEdit({ values: bad });
      submitForm({ focus: false });
    } else if (wantEdit && canEdit) {
      enterEdit();
    } else if (wantEdit) {
      try { history_.replaceState(history_.state, '', urlWith({ mode: null })); } catch (e) { /* 그대로 둔다 */ }
    }

    if (STATE === 'stale') showStale();
  }

  function showStale() {
    DS.banner.show({
      id: 'stale-banner', tone: 'warning',
      title: COPY.staleTitle, text: COPY.staleText,
      actions: [{
        label: COPY.staleReload,
        onClick: function () {
          var c = DATA.staleChange;
          customer.grade = c.grade;
          customer.updatedAt = c.updatedAt;
          customer.updatedBy = c.updatedBy;
          customer.updatedJustNow = false;
          log.unshift(JSON.parse(JSON.stringify(c.history)));
          if (editing) fillForm(customer);
          renderAll();
          DS.announce(COPY.staleDone);
        }
      }],
      focusNext: '#btn-edit'
    });
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    el.head = $('#page-head');
    el.title = $('#page-title');
    el.badge = $('#grade-badge');
    el.desc = $('#page-desc');
    el.btnEdit = $('#btn-edit');
    el.form = $('#edit-form');
    el.summary = $('#err-summary');
    el.dirty = $('#dirty-note');

    wireFields();
    wireLeaveGuard();

    el.btnEdit.addEventListener('click', function () {
      enterEdit({ push: true, focus: '#f-name' });
    });
    $('#btn-memo-write').addEventListener('click', function () {
      enterEdit({ push: true, focus: '#f-memo' });
    });
    $('#btn-close-edit').addEventListener('click', function (e) {
      if (dirtyKeys().length) askDiscard({ type: 'cancel' }, e.currentTarget);
      else leaveEdit();
    });
    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitForm();
    });

    load(200, false);
  });
})();
