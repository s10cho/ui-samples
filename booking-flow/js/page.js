/*
 * 예약 흐름 — 4단계(공간·시간 → 예약자 정보 → 확인 → 완료).
 * 단계는 주소 ?step= 에 남기고 브라우저 뒤로·앞으로와 맞춘다. 입력은 이 창의 sessionStorage 에 바로 저장한다.
 * 상태 쿼리: ?step=2|3|4 · ?state=loading|error|sold-out|submit-fail
 * 가상 데이터는 js/data.js(window.BOOKING_DATA) 한 곳에 있다. 부품 동작은 kit 의 js/ds.js(window.DS)가 맡는다.
 */
(function () {
  'use strict';

  var D = window.BOOKING_DATA;
  var doc = document;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  var STORE_DRAFT = 'booking-flow:draft';
  var STORE_DONE = 'booking-flow:done';
  var LOAD_MS = 1200;   // 예약 현황 받기 흉내 — 스켈레톤을 보이려면 1초를 넘긴다(STA-01, DESIGN.md 「샘플 데이터」)
  var SUBMIT_MS = 1500; // 예약 확정 흉내

  var TITLES = ['', '공간과 시간 고르기', '예약자 정보 입력', '예약 내용 확인', '예약을 확정했어요'];
  var NEXT_LABEL = ['', '예약자 정보 입력하기', '예약 내용 확인하기'];
  var WEEK = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  var WEEK_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

  var COPY = {
    docTitle: ' — 공간 예약',
    loading: '예약 현황을 불러오는 중이에요',
    loadErrTitle: '예약 현황을 불러오지 못했어요',
    loadErrText: '연결이 잠시 끊겼어요. 다시 불러오면 날짜와 시간을 고를 수 있어요.',
    failTitle: '고른 시간이 방금 마감됐어요',
    failText: '다른 분이 먼저 예약했어요. 다른 시간을 골라도 나머지 입력은 그대로 남아요.',
    pickOther: '다른 시간 고르기',
    reasonPast: '지난 날이에요',
    reasonFull: '예약이 다 찼어요',
    reasonToday: '오늘은 남은 시간이 없어요',
    today: '오늘',
    prevMonth: '이전 달',
    nextMonth: '다음 달',
    prevOff: '이번 달보다 앞은 예약할 수 없어요',
    nextOff: '다음 달까지만 예약할 수 있어요',
    yearMonth: '{y}년 {m}월',
    monthDay: '{m}월 {d}일',
    slotBooked: '예약됨',
    slotPast: '지난 시간',
    slotOverlap: '예약과 겹침',
    pickDateFirst: '날짜를 고르면 시작 시간이 보여요.',
    slotWait: '예약 현황을 불러오면 시작 시간이 보여요.',
    fullTitle: '{d}은 예약이 다 찼어요',
    fullText: '가장 가까운 빈 날로 옮길 수 있어요.',
    fullAction: '가장 가까운 빈 날 고르기',
    picked: '{d}을 골랐어요',
    noFit: '{n}시간을 이어서 쓸 수 있는 시간이 없어요. 이용 시간을 줄이거나 다른 날을 골라 주세요.',
    startCleared: '고른 시작 시간을 쓸 수 없어 비웠어요. 다시 골라 주세요.',
    takenNote: '방금 마감된 시간: ',
    dayNote: '{d}은 {reason}.',
    errDate: '날짜를 골라 주세요.',
    errDateFull: '다른 날을 골라 주세요.',
    errStart: '시작 시간을 골라 주세요.',
    errPeopleMin: '인원은 1명 이상이어야 해요.',
    errPeopleMax: '최대 인원보다 많아요. 인원을 줄이거나 더 큰 공간을 골라 주세요.',
    peopleHint: '이 공간은 최대 {n}명까지 쓸 수 있어요.',
    errName: '이름을 적어 주세요.',
    errPhone: '휴대전화 번호를 적어 주세요.',
    errPhoneFmt: '010으로 시작하는 10~11자리 번호로 적어 주세요.',
    errEmail: '이메일을 적어 주세요.',
    errEmailFmt: '이메일 형식이 아니에요. @ 뒤에 주소까지 적어 주세요.',
    errAgree: '취소 규정에 동의해야 예약할 수 있어요.',
    notChosen: '고르기 전',
    none: '없음',
    backToReview: '바꾼 내용 확인하기',
    copied: '복사했어요',
    copyFail: '복사하지 못했어요. 번호를 직접 골라 복사해 주세요.',
    restart: '새 예약을 시작해요',
    done: ' (끝남)',
    floorCap: '{floor} · 최대 {n}명',
    perHour: '시간당 {p}',
    hours: '{n}시간',
    people: '{n}명',
    priceDetail: '{total} (시간당 {p} × {n}시간)'
  };

  function fill(text, map) {
    return text.replace(/\{(\w+)\}/g, function (all, k) { return map[k] != null ? map[k] : all; });
  }
  function esc(text) {
    return String(text).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  /* ---------- 날짜 ---------- */

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function keyOf(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseKey(k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function monthOf(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
  function ym(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1); }
  function monthDay(k) { var d = parseKey(k); return fill(COPY.monthDay, { m: d.getMonth() + 1, d: d.getDate() }); }
  function dateLabel(k) { return monthDay(k) + ' (' + WEEK_SHORT[parseKey(k).getDay()] + ')'; }
  function monthLabel(d) { return fill(COPY.yearMonth, { y: d.getFullYear(), m: d.getMonth() + 1 }); }
  function hhmm(h) { return pad(h) + ':00'; }
  function range(h, dur) { return hhmm(h) + '–' + hhmm(h + dur); }
  function won(n) { return n.toLocaleString('ko-KR') + '원'; }

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var todayKey = keyOf(today);
  var firstMonth = monthOf(today);
  var lastMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  var lastDay = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  var lastKey = keyOf(lastDay);
  var nowHour = now.getHours();

  /* ---------- 예약 현황 ---------- */

  var override = { full: {}, taken: {} }; // '공간|날짜' — 방금 다 찬 날, 방금 마감된 시간

  function spaceOf(id) {
    for (var i = 0; i < D.spaces.length; i++) if (D.spaces[i].id === id) return D.spaces[i];
    return D.spaces[0];
  }

  function bookedList(spaceId, k) {
    var id = spaceId + '|' + k;
    var list = [];
    var h;
    if (override.full[id]) {
      for (h = D.open; h < D.close; h++) list.push(h);
      return list;
    }
    list = D.bookedHours(spaceId, k).slice();
    (override.taken[id] || []).forEach(function (x) { if (list.indexOf(x) < 0) list.push(x); });
    return list;
  }

  function hourState(k, h, booked) {
    if (k === todayKey && h <= nowHour) return 'past';
    return booked.indexOf(h) >= 0 ? 'booked' : 'free';
  }

  /** ok · past(지난 날) · out(받지 않는 날) · full(다 참) · today(오늘 남은 시간 없음) */
  function dayStatus(spaceId, k) {
    if (k < todayKey) return 'past';
    if (k > lastKey) return 'out';
    var booked = bookedList(spaceId, k);
    for (var h = D.open; h < D.close; h++) if (hourState(k, h, booked) === 'free') return 'ok';
    return k === todayKey && booked.length < D.close - D.open ? 'today' : 'full';
  }

  function startState(spaceId, k, dur, h) {
    var booked = bookedList(spaceId, k);
    var past = false;
    var taken = false;
    var overlap = false;
    for (var i = h; i < h + dur; i++) {
      var s = hourState(k, i, booked);
      if (s === 'past') past = true;
      else if (s === 'booked') { if (i === h) taken = true; else overlap = true; }
    }
    // 지난 시간 · 시작 시가 예약됨 · 시작은 비었지만 이용 시간 안에 예약이 있음
    return past ? 'past' : taken ? 'booked' : overlap ? 'overlap' : 'free';
  }

  function startOptions(spaceId, k, dur) {
    var list = [];
    for (var h = D.open; h + dur <= D.close; h++) list.push({ h: h, state: startState(spaceId, k, dur, h) });
    return list;
  }

  function reasonOf(status) {
    return status === 'past' ? COPY.reasonPast : status === 'today' ? COPY.reasonToday : status === 'ok' ? '' : COPY.reasonFull;
  }

  /* ---------- 입력값(draft) ---------- */

  function blankDraft() {
    return { space: D.spaces[0].id, date: null, dur: 1, start: null, people: 1, name: '', phone: '', email: '', request: '', agree: false };
  }

  function sampleDraft(withPerson) {
    var s = D.sample;
    var d = blankDraft();
    d.space = s.space;
    d.dur = s.dur;
    d.people = s.people;
    for (var i = 2; i < 62; i++) {
      var k = keyOf(addDays(today, i));
      if (k > lastKey) break;
      var free = startOptions(d.space, k, d.dur).filter(function (o) { return o.state === 'free' && o.h >= 10; });
      if (free.length) { d.date = k; d.start = free[0].h; break; }
    }
    if (withPerson) {
      d.name = s.name;
      d.phone = s.phone;
      d.email = s.email;
      d.request = s.request;
    }
    return d;
  }

  function soldOutDraft() {
    var d = blankDraft();
    var k = keyOf(addDays(today, D.soldOut.dayOffset));
    d.space = D.soldOut.space;
    d.date = k;
    override.full[d.space + '|' + k] = true;
    return d;
  }

  function readStore(name) {
    try { var raw = sessionStorage.getItem(name); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function writeStore(name, value) {
    try {
      if (value == null) sessionStorage.removeItem(name);
      else sessionStorage.setItem(name, JSON.stringify(value));
    } catch (e) { /* 저장할 수 없으면 이번 화면에서만 기억한다 */ }
  }

  function loadDraft() {
    var o = readStore(STORE_DRAFT);
    if (!o || typeof o !== 'object') return null;
    var d = blankDraft();
    Object.keys(d).forEach(function (k) { if (o[k] !== undefined && (o[k] === null || typeof o[k] === typeof d[k] || d[k] === null)) d[k] = o[k]; });
    if (!D.spaces.some(function (s) { return s.id === d.space; })) d.space = D.spaces[0].id;
    if ([1, 2, 3, 4].indexOf(d.dur) < 0) d.dur = 1;
    return d;
  }

  function sanitize(d) {
    if (d.date && (d.date < todayKey || d.date > lastKey)) { d.date = null; d.start = null; }
    if (d.date && d.start != null && startState(d.space, d.date, d.dur, d.start) !== 'free') d.start = null;
    return d;
  }

  var draft = blankDraft();
  var booking = null;
  var ui = {
    step: 1,
    loaded: false,
    skeleton: false,
    failLoadOnce: false,
    loadFailed: false,
    loadForever: false,
    view: firstMonth,
    calFocus: null,
    returnToReview: false,
    startCleared: false,
    taken: null,
    failNext: false,
    shown: {},
    dirty: {}
  };

  function save() { writeStore(STORE_DRAFT, draft); }

  /* ---------- 검사 ---------- */

  function step1Errors() {
    var e = {};
    var cap = spaceOf(draft.space).capacity;
    if (!draft.date) e.date = COPY.errDate;
    else if (dayStatus(draft.space, draft.date) !== 'ok') e.date = COPY.errDateFull;
    else if (draft.start == null || startState(draft.space, draft.date, draft.dur, draft.start) !== 'free') e.start = COPY.errStart;
    if (!(draft.people >= 1)) e.people = COPY.errPeopleMin;
    else if (draft.people > cap) e.people = COPY.errPeopleMax;
    return e;
  }

  function phoneDigits(v) { return String(v || '').replace(/\D/g, ''); }
  function fieldError(name) {
    var v = String(draft[name] || '').trim();
    if (name === 'name') return v ? null : COPY.errName;
    if (name === 'phone') {
      if (!v) return COPY.errPhone;
      return /^010\d{7,8}$/.test(phoneDigits(v)) ? null : COPY.errPhoneFmt;
    }
    if (name === 'email') {
      if (!v) return COPY.errEmail;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : COPY.errEmailFmt;
    }
    return null;
  }
  function step2Errors() {
    var e = {};
    ['name', 'phone', 'email'].forEach(function (k) { var m = fieldError(k); if (m) e[k] = m; });
    return e;
  }
  function isEmpty(o) { return !Object.keys(o).length; }

  function firstIncomplete(target) {
    if (target === 4) return booking ? 4 : firstIncomplete(3); // 완료 화면은 확정한 예약만 있으면 된다
    if (target >= 2 && !isEmpty(step1Errors())) return 1;
    if (target >= 3 && !isEmpty(step2Errors())) return 2;
    return target;
  }

  /* ---------- 오류 표시 ---------- */

  var FIELD_INPUT = { name: 'f-name', phone: 'f-phone', email: 'f-email' };

  function setError(errId, msg, control) {
    var el = doc.getElementById(errId);
    if (!el) return;
    el.hidden = !msg;
    $('span', el).textContent = msg || '';
    if (control) {
      if (msg) control.setAttribute('aria-invalid', 'true');
      else control.removeAttribute('aria-invalid');
    }
    if (msg) DS.fonts.ensureText(msg);
  }
  function errorShown(errId) { var el = doc.getElementById(errId); return !!el && !el.hidden; }

  function showFieldError(name, msg) {
    var input = doc.getElementById(FIELD_INPUT[name]);
    setError(input.id + '-error', msg, input);
  }

  /** 1단계 — 보이는 오류만 새로 맞춘다. 건드리지 않은 칸에 새 오류를 띄우지 않는다(PAT-FORM-04) */
  function refreshStep1Errors() {
    var e = step1Errors();
    if (errorShown('date-error')) setError('date-error', e.date);
    if (errorShown('start-error')) setError('start-error', e.start);
    var peopleLive = ui.dirty.people || ui.shown[1];
    if (errorShown('people-error') || (peopleLive && e.people === COPY.errPeopleMax)) setError('people-error', e.people, $('#people'));
  }

  /* ---------- 단계 표시 · 단계 전환 ---------- */

  function renderSteps() {
    $$('#steps .ds-steps__item').forEach(function (li) {
      var n = +li.getAttribute('data-step');
      var mark = $('.ds-steps__mark', li);
      var isDone = n < ui.step;
      if (n === ui.step) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
      if (isDone) li.setAttribute('data-state', 'done');
      else li.removeAttribute('data-state');
      mark.innerHTML = isDone ? DS.icon('check', 'ds-icon--sm') : String(n);
      $('.bf-steps__done', li).textContent = isDone ? COPY.done : '';
    });
  }

  function placeSummary() {
    var aside = $('#summary');
    var form = ui.step <= 2 ? doc.getElementById('form-' + ui.step) : null;
    $$('.bf-form').forEach(function (f) { f.classList.remove('bf-form--aside'); });
    if (!form) { aside.hidden = true; return; }
    form.insertBefore(aside, $('.bf-form__actions', form));
    form.classList.add('bf-form--aside');
    aside.hidden = false;
  }

  function render() {
    [1, 2, 3, 4].forEach(function (n) { doc.getElementById('step-' + n).hidden = n !== ui.step; });
    renderSteps();
    placeSummary();
    doc.title = TITLES[ui.step] + ' (' + ui.step + '/4)' + COPY.docTitle;
    if (ui.step === 1) renderStep1();
    if (ui.step === 2) renderStep2();
    if (ui.step === 3) renderStep3();
    if (ui.step === 4) renderStep4();
    if (ui.step <= 2) {
      renderSummary();
      $('#next-' + ui.step).textContent = ui.returnToReview ? COPY.backToReview : NEXT_LABEL[ui.step];
    }
  }

  function clearBanners() {
    $$('#banner-slot [data-ds-banner]').forEach(function (b) { DS.banner.dismiss(b); });
  }

  function writeUrl(step, push, prev, keepState) {
    var p = new URLSearchParams(location.search);
    if (!keepState) p.delete('state'); // 상태 쿼리는 첫 화면에만 — 다른 단계로 가면 지운다
    p.set('step', String(step));
    var url = location.pathname + '?' + p.toString() + location.hash;
    var state = { bf: true, step: step, prev: push ? prev : (history.state && history.state.bf ? history.state.prev : null) };
    try {
      history[push ? 'pushState' : 'replaceState'](state, '', url);
    } catch (e) { /* 주소를 바꿀 수 없는 환경(파일로 열기 등)이면 화면만 바꾼다 */ }
  }

  function focusTarget(el) {
    if (!el) return;
    if (!el.matches('a[href], button, input, select, textarea, [tabindex]')) el.setAttribute('tabindex', '-1');
    el.focus();
  }

  /**
   * 단계를 옮긴다. 앞 단계가 비어 있으면 그 단계로 보낸다.
   * opts: push(기록 추가) · focus(포커스 둘 요소 또는 함수) · quiet(포커스·스크롤 없음, 첫 화면)
   */
  function go(step, opts) {
    opts = opts || {};
    var target = firstIncomplete(step);
    var prev = ui.step;
    DS.tooltip.hide();
    ui.step = target;
    if (target === 3) ui.returnToReview = false;
    writeUrl(target, !!opts.push, prev, !!opts.quiet);
    render();
    if (opts.quiet) return;
    var el = typeof opts.focus === 'function' ? opts.focus() : opts.focus;
    if (target !== step || !el) el = doc.getElementById('h-step-' + target);
    window.scrollTo(0, 0);
    focusTarget(el);
    clearBanners();
    if (target !== step && target < step) showStepErrors(target, true);
  }

  function showStepErrors(step, focus) {
    if (step === 1) return checkStep1(focus);
    if (step === 2) return checkStep2(focus);
    return true;
  }

  function goBack() {
    var st = history.state;
    if (st && st.bf && st.prev === ui.step - 1) history.back();
    else go(ui.step - 1, { push: false });
  }

  window.addEventListener('popstate', function () {
    var s = Math.min(4, Math.max(1, parseInt(DS.url.get('step'), 10) || 1));
    if (booking && s < 4) {
      startOver(false);
      DS.announce(COPY.restart);
      return;
    }
    go(s, { push: false });
  });

  /* ---------- 1단계 — 공간·날짜·시간·인원 ---------- */

  function renderSpaces() {
    $('#space-list').innerHTML = D.spaces.map(function (s) {
      return '<label class="bf-option"><input class="bf-option__input" type="radio" name="space" value="' + esc(s.id) + '">' +
        '<span class="bf-option__body"><span class="bf-option__title">' + esc(s.name) + '</span>' +
        '<span class="bf-option__meta">' + esc(fill(COPY.floorCap, { floor: s.floor, n: s.capacity })) + '</span>' +
        '<span class="bf-option__meta ds-num">' + esc(fill(COPY.perHour, { p: won(s.price) })) + '</span></span>' +
        DS.icon('check', 'bf-option__check') + '</label>';
    }).join('');
  }

  function renderStep1() {
    $$('#space-list input').forEach(function (r) { r.checked = r.value === draft.space; });
    var dur = $('#dur [data-value="' + draft.dur + '"]');
    if (dur) DS.radios.select(dur, { fromUrl: true, silent: true });
    renderWhen();
    renderPeople();
  }

  function renderWhen() {
    var busy = !ui.loaded && !ui.loadFailed;
    var when = $('#grp-when');
    when.setAttribute('aria-busy', busy ? 'true' : 'false');
    // 스켈레톤은 0.3초가 지나야 보인다(STA-02). 그 전에는 같은 자리만 잡는다
    if (busy && ui.skeleton) when.setAttribute('data-skeleton', '');
    else when.removeAttribute('data-skeleton');
    renderCalendar();
    renderSlots();
  }

  function pickFocusKey() {
    var v = ym(ui.view);
    var inView = function (k) { return k && k.slice(0, 7) === v; };
    if (inView(ui.calFocus)) return ui.calFocus;
    if (inView(draft.date)) return draft.date;
    // 고른 날이 없으면 이 달의 첫 고를 수 있는 날 — 고를 수 없는 오늘로 포커스를 보내지 않는다
    var days = new Date(ui.view.getFullYear(), ui.view.getMonth() + 1, 0).getDate();
    for (var d = 1; d <= days; d++) {
      var k = v + '-' + pad(d);
      if (k >= todayKey && dayStatus(draft.space, k) === 'ok') return k;
    }
    return inView(todayKey) ? todayKey : v + '-01';
  }

  function renderCalendar() {
    var body = $('#cal-body');
    var prev = $('#cal-prev');
    var next = $('#cal-next');
    var hadFocus = body.contains(doc.activeElement);
    $('#cal-month').textContent = monthLabel(ui.view);
    $('#cal-note').hidden = true;

    var y = ui.view.getFullYear();
    var m = ui.view.getMonth();
    var days = new Date(y, m + 1, 0).getDate();
    var offset = new Date(y, m, 1).getDay();

    var sheet = $('#cal-sheet');
    if (!ui.loaded) {
      [prev, next].forEach(function (b) { b.setAttribute('aria-disabled', 'true'); });
      // 받는 동안 — 실제 달력과 같은 표·같은 칸 높이의 스켈레톤(CMP-FB-09). 0.3초 전에는 자리만 잡고 보이지 않는다.
      // 불러오기 오류 — 같은 표·범례 자리는 보이지 않게 남기고 그 위에 오류 상태를 겹친다(자리 높이가 같다)
      body.innerHTML = rows(offset, days, function () {
        return '<td><span class="ds-skeleton bf-skel bf-cal__skel" aria-hidden="true"></span></td>';
      });
      setSheetOff(sheet, ui.loadFailed);
      $('#cal-error').hidden = !ui.loadFailed;
      return;
    }

    $('#cal-error').hidden = true;
    setSheetOff(sheet, false);

    var focusKey = pickFocusKey();
    DS.tooltip.hide();
    body.innerHTML = rows(offset, days, function (d) {
      var k = y + '-' + pad(m + 1) + '-' + pad(d);
      var status = dayStatus(draft.space, k);
      var reason = reasonOf(status);
      // 이름은 보이는 숫자를 그대로 품게 글로 만든다 — "11월 [20]일 금요일, 예약이 다 찼어요"(WCAG 2.5.3)
      var tail = '일 ' + WEEK[(offset + d - 1) % 7] + (k === todayKey && status !== 'today' ? ', ' + COPY.today : '') + (reason ? ', ' + reason : '');
      var label = (m + 1) + '월 ' + d + tail;
      return '<td><button class="bf-cal__day" type="button" data-date="' + k + '"' +
        ' tabindex="' + (k === focusKey ? '0' : '-1') + '"' +
        ' aria-pressed="' + (k === draft.date ? 'true' : 'false') + '"' +
        (k === todayKey ? ' aria-current="date"' : '') +
        (reason ? ' aria-disabled="true" data-status="' + status + '" data-ds-tip="' + esc(label) + '"' : '') +
        '><span class="ds-sr-only">' + (m + 1) + '월 </span>' + d + '<span class="ds-sr-only">' + esc(tail) + '</span></button></td>';
    });

    var atFirst = ui.view.getTime() <= firstMonth.getTime();
    var atLast = ui.view.getTime() >= lastMonth.getTime();
    setNavOff(prev, atFirst, COPY.prevMonth, COPY.prevOff);
    setNavOff(next, atLast, COPY.nextMonth, COPY.nextOff);
    if (hadFocus) focusDay(focusKey);
  }

  /** 달력 몸통 — 빈칸 + 날짜 칸(cell(d)) 을 7칸씩 줄로 묶는다. 로딩 스켈레톤과 실제 달력이 같은 줄 수를 쓴다 */
  function rows(offset, days, cell) {
    var cells = [];
    var i;
    for (i = 0; i < offset; i++) cells.push('<td></td>');
    for (var d = 1; d <= days; d++) cells.push(cell(d));
    while (cells.length % 7) cells.push('<td></td>');
    var html = '';
    for (i = 0; i < cells.length; i += 7) html += '<tr>' + cells.slice(i, i + 7).join('') + '</tr>';
    return html;
  }

  function setSheetOff(sheet, off) {
    sheet.classList.toggle('bf-cal__sheet--off', off);
    sheet.inert = off;
    if (off) sheet.setAttribute('aria-hidden', 'true');
    else sheet.removeAttribute('aria-hidden');
  }

  function setNavOff(btn, off, label, reason) {
    if (off) btn.setAttribute('aria-disabled', 'true');
    else btn.removeAttribute('aria-disabled');
    btn.setAttribute('data-ds-tip', off ? reason : label);
  }

  function focusDay(k) {
    var btn = $('#cal-body [data-date="' + k + '"]');
    if (!btn) return;
    $$('#cal-body .bf-cal__day').forEach(function (b) { b.tabIndex = b === btn ? 0 : -1; });
    btn.focus();
  }

  function moveCalFocus(k) {
    ui.calFocus = k;
    var d = parseKey(k);
    if (ym(d) !== ym(ui.view)) {
      ui.view = monthOf(d);
      renderCalendar();
      DS.announce(monthLabel(ui.view));
    }
    focusDay(k);
  }

  function changeMonth(delta) {
    var v = new Date(ui.view.getFullYear(), ui.view.getMonth() + delta, 1);
    if (v < firstMonth || v > lastMonth) return;
    ui.view = v;
    ui.calFocus = null;
    renderCalendar();
    DS.announce(monthLabel(v));
  }

  function selectDate(k) {
    draft.date = k;
    ui.calFocus = k;
    if (draft.start != null && startState(draft.space, k, draft.dur, draft.start) !== 'free') {
      draft.start = null;
      ui.startCleared = true;
    }
    save();
    renderCalendar();
    renderSlots();
    renderSummary();
    refreshStep1Errors();
  }

  function showDayNote(k, status) {
    var note = $('#cal-note');
    var reason = reasonOf(status);
    DS.tooltip.hide();
    note.textContent = status === 'today' ? reason + '.' : fill(COPY.dayNote, { d: monthDay(k), reason: reason });
    note.hidden = false;
    DS.announce(note.textContent);
  }

  function nearestFree() {
    var base = draft.date ? parseKey(draft.date) : today;
    for (var i = 1; i < 62; i++) {
      var tries = [keyOf(addDays(base, i)), keyOf(addDays(base, -i))];
      for (var j = 0; j < tries.length; j++) {
        if (tries[j] >= todayKey && tries[j] <= lastKey && dayStatus(draft.space, tries[j]) === 'ok') return tries[j];
      }
    }
    return null;
  }

  function slotNote(text, icon) {
    return '<p class="bf-note">' + (icon ? DS.icon('info') : '') + '<span>' + esc(text) + '</span></p>';
  }

  /** 이 이용 시간의 시작 시간 타일 수만큼 칸을 만든다(스켈레톤·자리 잡기 공용) */
  function slotCells(cls) {
    return new Array(D.close - D.open - draft.dur + 2).join('<span class="' + cls + '"></span>');
  }

  /**
   * 날짜가 있을 때의 결과 자리(마감·이어진 시간 없음) — 내용 높이만큼만 둔다.
   * 결과에 따라 시작 시간 자리가 스켈레톤보다 줄어든다(설계서 상태 표의 2회차 결정)
   */
  function slotFrame(inner) {
    // 결과가 마감·이어진 시간 없음이면 내용 높이만큼만 둔다. 타일 격자 높이로 채우면 글자 200% 에서 빈 상자가 1.5화면 남는다(2회차 지적)
    return '<div class="bf-slot-over">' + inner + '</div>';
  }

  function renderSlots() {
    var area = $('#slot-area');
    if (!ui.loaded) {
      // 불러오기 오류 — 오류 상태는 날짜 자리에 한 번만 두고, 여기에는 무엇이 언제 보이는지만 적는다
      if (ui.loadFailed) { area.innerHTML = slotNote(COPY.slotWait); return; }
      // 받는 동안 — 날짜가 없으면 받은 뒤와 같은 안내 글(데이터가 아니다), 있으면 타일 수만큼 스켈레톤
      if (!draft.date) area.innerHTML = slotNote(COPY.pickDateFirst);
      else area.innerHTML = '<div class="bf-options bf-options--slot" aria-hidden="true">' + slotCells('ds-skeleton bf-skel bf-slot-skel') + '</div>';
      return;
    }
    if (!draft.date) { area.innerHTML = slotNote(COPY.pickDateFirst); return; }

    var status = dayStatus(draft.space, draft.date);
    if (status !== 'ok') {
      var title = status === 'today' ? COPY.reasonToday : fill(COPY.fullTitle, { d: monthDay(draft.date) });
      area.innerHTML = slotFrame('<div class="bf-state-box"><div class="ds-empty">' + DS.icon('calendar', 'ds-empty__icon') +
        '<p class="ds-empty__title">' + esc(title) + '</p><p class="ds-empty__text">' + esc(COPY.fullText) + '</p>' +
        '<div class="ds-empty__actions"><button class="ds-btn" type="button" id="nearest">' + esc(COPY.fullAction) + '</button></div></div></div>');
      return;
    }

    var opts = startOptions(draft.space, draft.date, draft.dur);
    var html = '';
    if (ui.startCleared) html += slotNote(COPY.startCleared, true).replace('<p class="bf-note"', '<p class="bf-note" id="start-cleared"');
    if (ui.taken && ui.taken.space === draft.space && ui.taken.date === draft.date) html += slotNote(COPY.takenNote + ui.taken.label, true);
    if (!opts.some(function (o) { return o.state === 'free'; })) {
      area.innerHTML = html + slotFrame(slotNote(fill(COPY.noFit, { n: draft.dur })));
      return;
    }
    html += '<div class="bf-options bf-options--slot">' + opts.map(function (o) {
      var off = o.state !== 'free';
      var checked = !off && o.h === draft.start;
      return '<label class="bf-option bf-option--slot"><input class="bf-option__input" type="radio" name="start" value="' + o.h + '"' +
        (checked ? ' checked' : '') + (off ? ' disabled' : '') + '>' +
        '<span class="bf-option__body"><span class="bf-option__title ds-num">' + hhmm(o.h) + '</span>' +
        (off ? '<span class="bf-option__meta">' + (o.state === 'past' ? COPY.slotPast : o.state === 'overlap' ? COPY.slotOverlap : COPY.slotBooked) + '</span>' : '') +
        '</span>' + DS.icon('check', 'bf-option__check') + '</label>';
    }).join('') + '</div>';
    area.innerHTML = html;
  }

  function firstSlotTarget() {
    return $('#slot-area input[name="start"]:checked') || $('#slot-area input[name="start"]:not(:disabled)') || $('#nearest') || doc.getElementById('grp-start');
  }
  function calTarget() {
    return $('#cal-body [tabindex="0"]') || doc.getElementById('grp-date');
  }

  function renderPeople() {
    var cap = spaceOf(draft.space).capacity;
    var input = $('#people');
    if (doc.activeElement !== input) input.value = draft.people > 0 ? String(draft.people) : '';
    input.max = String(cap);
    $('#people-hint').textContent = fill(COPY.peopleHint, { n: cap });
    toggleOff($('#people-minus'), !(draft.people > 1));
    toggleOff($('#people-plus'), draft.people >= cap);
    refreshStep1Errors();
  }

  function toggleOff(btn, off) {
    if (off) btn.setAttribute('aria-disabled', 'true');
    else btn.removeAttribute('aria-disabled');
  }

  function setPeople(n) {
    draft.people = n;
    ui.dirty.people = true;
    save();
    renderPeople();
    renderSummary();
  }

  function checkStep1(focus) {
    var e = step1Errors();
    ui.shown[1] = true;
    setError('date-error', e.date);
    setError('start-error', e.start);
    setError('people-error', e.people, $('#people'));
    if (focus) {
      if (e.date) focusTarget(calTarget());
      else if (e.start) focusTarget(firstSlotTarget());
      else if (e.people) focusTarget($('#people'));
    }
    return isEmpty(e);
  }

  function initStep1() {
    renderSpaces();

    $('#space-list').addEventListener('change', function (e) {
      if (e.target.name !== 'space') return;
      draft.space = e.target.value;
      if (draft.date && draft.start != null && dayStatus(draft.space, draft.date) === 'ok' &&
        startState(draft.space, draft.date, draft.dur, draft.start) !== 'free') {
        draft.start = null;
        ui.startCleared = true;
      }
      save();
      renderCalendar();
      renderSlots();
      renderPeople();
      renderSummary();
    });

    $('#cal-body').addEventListener('click', function (e) {
      // 칸(td)의 둥근 모서리 바깥을 눌러도 그 날짜로 친다 — 누름 영역 = 칸 전체(SPC-07)
      var cell = e.target.closest('td');
      var btn = e.target.closest('.bf-cal__day') || (cell && $('.bf-cal__day', cell));
      if (!btn) return;
      var k = btn.getAttribute('data-date');
      ui.calFocus = k;
      if (btn.getAttribute('aria-disabled') === 'true') {
        if (k !== draft.date) showDayNote(k, btn.getAttribute('data-status'));
        return;
      }
      selectDate(k);
    });

    $('#cal-body').addEventListener('keydown', function (e) {
      var btn = e.target.closest('.bf-cal__day');
      if (!btn) return;
      var d = parseKey(btn.getAttribute('data-date'));
      var nd = null;
      switch (e.key) {
        case 'ArrowLeft': nd = addDays(d, -1); break;
        case 'ArrowRight': nd = addDays(d, 1); break;
        case 'ArrowUp': nd = addDays(d, -7); break;
        case 'ArrowDown': nd = addDays(d, 7); break;
        case 'Home': nd = addDays(d, -d.getDay()); break;
        case 'End': nd = addDays(d, 6 - d.getDay()); break;
        case 'PageUp':
        case 'PageDown': {
          var dm = e.key === 'PageUp' ? -1 : 1;
          var last = new Date(d.getFullYear(), d.getMonth() + dm + 1, 0).getDate();
          nd = new Date(d.getFullYear(), d.getMonth() + dm, Math.min(d.getDate(), last));
          break;
        }
        default: return;
      }
      e.preventDefault();
      if (nd < firstMonth) nd = firstMonth;
      if (nd > lastDay) nd = lastDay;
      moveCalFocus(keyOf(nd));
    });

    $('#cal-prev').addEventListener('click', function () { changeMonth(-1); });
    $('#reload').addEventListener('click', function () {
      ui.loadFailed = false;
      startLoad();
      focusTarget($('#grp-date')); // 누른 버튼이 사라지므로 날짜 묶음으로 포커스를 옮긴다
    });
    $('#cal-next').addEventListener('click', function () { changeMonth(1); });

    $('#dur').addEventListener('ds:change', function (e) {
      draft.dur = parseInt(e.detail.value, 10) || 1;
      if (draft.date && draft.start != null && startState(draft.space, draft.date, draft.dur, draft.start) !== 'free') {
        draft.start = null;
        ui.startCleared = true;
      }
      save();
      renderSlots();
      renderSummary();
      refreshStep1Errors();
    });

    $('#slot-area').addEventListener('change', function (e) {
      if (e.target.name !== 'start') return;
      draft.start = parseInt(e.target.value, 10);
      ui.startCleared = false;
      var note = $('#start-cleared');
      if (note) note.remove();
      save();
      renderSummary();
      refreshStep1Errors();
    });

    $('#slot-area').addEventListener('click', function (e) {
      if (!e.target.closest('#nearest')) return;
      var k = nearestFree();
      if (!k) return;
      ui.view = monthOf(parseKey(k));
      selectDate(k);
      DS.announce(fill(COPY.picked, { d: monthDay(k) }));
      focusTarget(firstSlotTarget());
    });

    var people = $('#people');
    people.addEventListener('input', function () {
      var v = parseInt(people.value, 10);
      draft.people = isNaN(v) ? 0 : v;
      ui.dirty.people = true;
      save();
      toggleOff($('#people-minus'), !(draft.people > 1));
      toggleOff($('#people-plus'), draft.people >= spaceOf(draft.space).capacity);
      refreshStep1Errors();
      renderSummary();
    });
    people.addEventListener('blur', function () {
      if (ui.dirty.people) setError('people-error', step1Errors().people, people);
      renderPeople();
    });
    $('#people-minus').addEventListener('click', function () { setPeople(Math.max(1, (draft.people || 1) - 1)); });
    $('#people-plus').addEventListener('click', function () {
      setPeople(Math.min(spaceOf(draft.space).capacity, (draft.people || 0) + 1));
    });

    $('#form-1').addEventListener('submit', function (e) {
      e.preventDefault();
      if (!checkStep1(true)) return;
      go(ui.returnToReview ? 3 : 2, { push: true });
    });
  }

  /* ---------- 고른 내용 ---------- */

  function muted(text) { return '<span class="ds-text-muted">' + esc(text) + '</span>'; }

  function renderSummary() {
    var s = spaceOf(draft.space);
    $('#sum-space').textContent = s.name;
    $('#sum-date').innerHTML = draft.date ? esc(dateLabel(draft.date)) : muted(COPY.notChosen);
    $('#sum-time').innerHTML = draft.start != null
      ? esc(range(draft.start, draft.dur) + ' · ' + fill(COPY.hours, { n: draft.dur }))
      : esc(fill(COPY.hours, { n: draft.dur })) + ' · ' + muted(COPY.notChosen);
    $('#sum-people').textContent = draft.people > 0 ? fill(COPY.people, { n: draft.people }) : '';
    $('#sum-price').textContent = won(s.price * draft.dur);
  }

  /* ---------- 2단계 — 예약자 정보 ---------- */

  function renderStep2() {
    Object.keys(FIELD_INPUT).forEach(function (k) { doc.getElementById(FIELD_INPUT[k]).value = draft[k]; });
    $('#f-request').value = draft.request;
    $('#request-count').textContent = String(draft.request.length);
  }

  function formatPhone(v) {
    var d = phoneDigits(v);
    if (!/^010/.test(d)) return v;
    if (d.length === 11) return d.slice(0, 3) + '-' + d.slice(3, 7) + '-' + d.slice(7);
    if (d.length === 10) return d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6);
    return v;
  }

  function checkStep2(focus) {
    var e = step2Errors();
    ui.shown[2] = true;
    Object.keys(FIELD_INPUT).forEach(function (k) { showFieldError(k, e[k] || null); });
    if (focus) {
      var first = ['name', 'phone', 'email'].filter(function (k) { return e[k]; })[0];
      if (first) focusTarget(doc.getElementById(FIELD_INPUT[first]));
    }
    return isEmpty(e);
  }

  function initStep2() {
    Object.keys(FIELD_INPUT).forEach(function (name) {
      var input = doc.getElementById(FIELD_INPUT[name]);
      input.addEventListener('input', function () {
        draft[name] = input.value;
        ui.dirty[name] = true;
        save();
        // 오류가 보이는 칸은 입력마다 다시 본다(PAT-FORM-02). 휴대전화는 11자리를 채우면 바로 본다(PAT-FORM-03)
        if (errorShown(input.id + '-error') || (name === 'phone' && phoneDigits(input.value).length >= 11)) {
          showFieldError(name, fieldError(name));
        }
      });
      input.addEventListener('blur', function () {
        if (!ui.dirty[name]) return;
        var msg = fieldError(name);
        if (name === 'phone' && !msg) {
          input.value = formatPhone(input.value);
          draft.phone = input.value;
          save();
        }
        showFieldError(name, msg);
      });
    });

    var req = $('#f-request');
    req.addEventListener('input', function () {
      draft.request = req.value;
      $('#request-count').textContent = String(req.value.length);
      save();
    });

    $('#form-2').addEventListener('submit', function (e) {
      e.preventDefault();
      // 휴대전화 칸에서 Enter 로 바로 보내도 칸을 떠날 때처럼 010-0000-0000 꼴로 맞춘다
      var phone = $('#f-phone');
      if (!fieldError('phone')) {
        phone.value = formatPhone(phone.value);
        draft.phone = phone.value;
        save();
      }
      if (!checkStep2(true)) return;
      go(3, { push: true });
    });
  }

  /* ---------- 3단계 — 확인 ---------- */

  function renderStep3() {
    var s = spaceOf(draft.space);
    $('#rv-space').textContent = s.name;
    $('#rv-date').textContent = draft.date ? dateLabel(draft.date) : '';
    $('#rv-time').textContent = draft.start != null ? range(draft.start, draft.dur) + ' · ' + fill(COPY.hours, { n: draft.dur }) : '';
    $('#rv-people').textContent = fill(COPY.people, { n: draft.people });
    $('#rv-price').textContent = fill(COPY.priceDetail, { total: won(s.price * draft.dur), p: won(s.price), n: draft.dur });
    $('#rv-name').textContent = draft.name;
    $('#rv-phone').textContent = draft.phone;
    $('#rv-email').textContent = draft.email;
    $('#rv-request').innerHTML = draft.request.trim() ? esc(draft.request) : muted(COPY.none);
    $('#agree').checked = !!draft.agree;
  }

  var EDIT_TARGET = {
    space: function () { return $('#space-list input:checked') || $('#space-list input'); },
    date: calTarget,
    time: firstSlotTarget,
    people: function () { return $('#people'); },
    name: function () { return $('#f-name'); },
    phone: function () { return $('#f-phone'); },
    email: function () { return $('#f-email'); },
    request: function () { return $('#f-request'); }
  };

  function markTaken() {
    var hours = [];
    for (var h = draft.start; h < draft.start + draft.dur; h++) hours.push(h);
    var id = draft.space + '|' + draft.date;
    override.taken[id] = (override.taken[id] || []).concat(hours);
    ui.taken = { space: draft.space, date: draft.date, label: range(draft.start, draft.dur) };
  }

  function showFail() {
    DS.banner.show({
      id: 'bf-fail',
      tone: 'danger',
      title: COPY.failTitle,
      text: COPY.failText,
      focusNext: '#h-step-3',
      actions: [{
        label: COPY.pickOther,
        onClick: function () {
          draft.start = null;
          ui.startCleared = false;
          ui.returnToReview = true; // 시간만 다시 고르고 확인 단계로 바로 돌아온다
          save();
          go(1, { push: true, focus: firstSlotTarget });
          return false;
        }
      }]
    });
  }

  function slotStillFree() {
    return draft.start != null && startState(draft.space, draft.date, draft.dur, draft.start) === 'free';
  }

  function bookingNumber(d) {
    var n = D.hash([d.space, d.date, d.start, d.dur, d.email].join('|')) % 1000;
    return 'BK-' + d.date.slice(5, 7) + d.date.slice(8, 10) + '-' + ('00' + n).slice(-3);
  }

  function makeBooking(d) {
    return { no: bookingNumber(d), space: d.space, date: d.date, start: d.start, dur: d.dur, people: d.people, email: d.email };
  }

  function confirmBooking() {
    var btn = $('#confirm');
    if (!$('#agree').checked) {
      setError('agree-error', COPY.errAgree, $('#agree'));
      focusTarget($('#agree'));
      return;
    }
    if (draft.date && draft.start != null && !slotStillFree() && ui.taken) { showFail(); return; }
    var need = firstIncomplete(3);
    if (need < 3) { go(need, { push: true }); return; }

    // 바로 다시 누르지 못하게 막고(data-ds-pending), 0.3초가 지나도 안 끝나면 "예약하는 중…"을 보인다(kit DS.busy, PAT-FORM-07)
    DS.busy(btn, true);
    setTimeout(function () {
      var fail = ui.failNext || !slotStillFree();
      ui.failNext = false;
      DS.busy(btn, false).then(function () {
        if (fail) {
          markTaken();
          showFail();
          return;
        }
        booking = makeBooking(draft);
        writeStore(STORE_DONE, booking);
        writeStore(STORE_DRAFT, null);
        go(4, { push: false });
      });
    }, SUBMIT_MS);
  }

  function initStep3() {
    $('#step-3').addEventListener('click', function (e) {
      var link = e.target.closest('[data-edit]');
      if (!link) return;
      e.preventDefault();
      var field = link.getAttribute('data-edit');
      var step = ['name', 'phone', 'email', 'request'].indexOf(field) >= 0 ? 2 : 1;
      ui.returnToReview = true;
      go(step, { push: true, focus: EDIT_TARGET[field] });
    });
    $('#agree').addEventListener('change', function () {
      draft.agree = $('#agree').checked;
      save();
      if (draft.agree) setError('agree-error', null, $('#agree'));
    });
    $('#form-3').addEventListener('submit', function (e) {
      e.preventDefault();
      confirmBooking();
    });
  }

  /* ---------- 4단계 — 완료 ---------- */

  function renderStep4() {
    if (!booking) return;
    var s = spaceOf(booking.space);
    $('#done-no').textContent = booking.no;
    $('#done-space').textContent = s.name;
    $('#done-date').textContent = dateLabel(booking.date);
    $('#done-time').textContent = range(booking.start, booking.dur) + ' · ' + fill(COPY.hours, { n: booking.dur });
    $('#done-people').textContent = fill(COPY.people, { n: booking.people });
    $('#done-price').textContent = won(s.price * booking.dur);
    $('#done-email').textContent = booking.email;
    $('#copy-status').textContent = '';
  }

  function startOver(push) {
    booking = null;
    writeStore(STORE_DONE, null);
    draft = blankDraft();
    save();
    ui.returnToReview = false;
    ui.startCleared = false;
    ui.taken = null;
    ui.shown = {};
    ui.dirty = {};
    ui.calFocus = null;
    ui.view = firstMonth;
    ['date-error', 'start-error', 'people-error', 'agree-error', 'f-name-error', 'f-phone-error', 'f-email-error'].forEach(function (id) { setError(id, null); });
    $$('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    go(1, { push: push });
  }

  function initStep4() {
    $('#copy-no').addEventListener('click', function () {
      var status = $('#copy-status');
      var text = booking ? booking.no : '';
      var ok = function () { status.textContent = COPY.copied; DS.announce(COPY.copied); };
      var fail = function () {
        // 클립보드를 못 쓰면 번호 글자를 골라 둔 채로 알린다
        try {
          var r = doc.createRange();
          r.selectNodeContents($('#done-no'));
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(r);
          if (doc.execCommand && doc.execCommand('copy')) { ok(); return; }
        } catch (e) { /* 아래 안내로 */ }
        status.textContent = COPY.copyFail;
        DS.announce(COPY.copyFail);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fail);
      else fail();
    });
    $('#restart').addEventListener('click', function () { startOver(true); });
  }

  /* ---------- 예약 현황 받기(흉내) ---------- */

  // 불러오기 오류는 닫히는 배너가 아니라 날짜 자리에 남긴다(ds-empty--error, DESIGN.md)
  function showLoadError() {
    if (ui.step === 1) DS.announce(COPY.loadErrTitle + ' ' + COPY.loadErrText, { assertive: true });
  }

  function startLoad() {
    ui.loaded = false;
    ui.skeleton = false;
    if (ui.step === 1) renderWhen();
    var ok = true;
    var timer = DS.loadingTimer(function () {
      ui.skeleton = true;
      if (ui.step === 1) renderWhen();
      if (ui.step === 1) DS.announce(COPY.loading); // 다른 단계의 알림(확정 실패 배너 등)을 지우지 않게 1단계에서만
    }, function () {
      ui.skeleton = false;
      ui.loaded = ok;
      ui.loadFailed = !ok;
      if (ui.step === 1) renderWhen();
      if (!ok) showLoadError();
    });
    if (ui.loadForever) return; // ?state=loading — 끝나지 않는 로딩을 멈춰 보인다
    setTimeout(function () {
      if (ui.failLoadOnce) { ui.failLoadOnce = false; ok = false; }
      timer.stop();
    }, LOAD_MS);
  }

  /* ---------- 시작 ---------- */

  function init() {
    var state = DS.url.get('state') || '';
    var step = Math.min(4, Math.max(1, parseInt(DS.url.get('step'), 10) || 1));
    var stored = loadDraft();
    var storedDone = readStore(STORE_DONE);

    draft = sanitize(stored || blankDraft());

    if (state === 'sold-out') {
      draft = soldOutDraft();
      step = 1;
    } else if (state === 'submit-fail') {
      draft = sampleDraft(true);
      draft.agree = true;
      step = 3;
    } else if (state === 'loading') {
      ui.loadForever = true;
      step = 1;
    } else if (state === 'error') {
      ui.failLoadOnce = true;
      step = 1;
    } else if (step === 4) {
      booking = storedDone && storedDone.no ? storedDone : makeBooking(sampleDraft(true));
    } else if (step >= 2 && firstIncomplete(step) < step && !stored) {
      draft = sampleDraft(step >= 3); // 주소로 바로 들어온 검수용 상태 — 앞 단계를 예시 값으로 채운다
    }

    if (draft.date) ui.view = monthOf(parseKey(draft.date));

    initStep1();
    initStep2();
    initStep3();
    initStep4();
    $$('[data-back]').forEach(function (b) { b.addEventListener('click', goBack); });

    go(step, { push: false, quiet: true });
    startLoad();

    if (state === 'submit-fail') {
      // 확정하는 사이 그 시간이 마감된 상태를 멈춰 보인다
      markTaken();
      showFail();
    }
  }

  DS.ready(init);
})();
