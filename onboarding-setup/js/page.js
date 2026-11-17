/*
 * 첫 사용 안내 — 작업 공간 꾸리기 4단계(팀 정보 → 구성원 초대 → 채널 연결 → 마치기)와 다 마친 뒤 첫 화면.
 * 단계는 주소 ?step= 에(첫 화면은 ?view=home) 남기고 브라우저 뒤로·앞으로와 맞춘다.
 * 진행은 이 창의 sessionStorage 에 바로 저장한다(떠나기 전 경고 대신 — DESIGN.md PAT-FORM-11 조건부 예외).
 * 상태 쿼리: ?step=1|2|3|4 · ?view=home · ?state=invalid|sending|invite-partial|connect-fail|skipped
 * 가상 데이터는 js/data.js(window.ONBOARDING_DATA) 한 곳에 있다. 부품 동작은 kit 의 js/ds.js(window.DS)가 맡는다.
 */
(function () {
  'use strict';

  var D = window.ONBOARDING_DATA;
  var doc = document;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  var STORE = 'onboarding-setup:flow';
  var SEND_MS = 1500;    // 초대 보내기 흉내
  var CONNECT_MS = 1500; // 채널 연결 흉내
  var MAX_ROWS = 10;

  var STEP_NAMES = ['', '팀 정보', '구성원 초대', '채널 연결', '마치기'];
  var NEXT_LABEL = { 1: '구성원 초대하기' };

  var COPY = {
    docTitle: ' — 첫 사용 안내',
    homeTitle: '{team} 작업 공간',
    stepDone: ' (끝냄)',
    stepSkipped: ' (건너뜀)',
    stepFailed: ' ({n}건 못 보냄)',
    backToReview: '바꾼 내용 확인하기',
    summary1: function (n) { return '계속하려면 칸 ' + n + '개를 고쳐 주세요'; },
    summary2: function (n) { return '초대를 보내려면 칸 ' + n + '개를 고쳐 주세요'; },
    errTeam: '팀 이름을 적어 주세요.',
    errAddrEmpty: '작업 공간 주소를 적어 주세요.',
    errAddrChars: '영문 소문자, 숫자, 하이픈(-)만 쓸 수 있어요.',
    errAddrShort: '3자 이상 적어 주세요.',
    errAddrHyphen: '하이픈(-)으로 시작하거나 끝날 수 없어요.',
    errAddrTaken: '이미 다른 팀이 쓰는 주소예요. 다른 주소를 적어 주세요.',
    labelTeam: '팀 이름',
    labelAddress: '작업 공간 주소',
    rowLabel: '{n}번째 이메일',
    rowRemove: '{n}번째 이메일 칸 지우기',
    rowRemoved: '{n}번째 칸을 지웠어요',
    rowsMax: '칸은 10개까지 둘 수 있어요.',
    sendingWait: '초대를 다 보내면 누를 수 있어요.',
    errNone: '이메일을 1개 이상 적어 주세요.',
    errEmailFmt: '이메일 형식이 아니에요. @ 뒤에 주소까지 적어 주세요.',
    errDup: '위 칸과 같은 주소예요.',
    errSent: '이미 초대를 보낸 주소예요.',
    errSend: '이 주소로 초대 메일을 보내지 못했어요. 주소를 확인하고 다시 보내 주세요.',
    sentTitle: '보낸 초대 {n}건',
    sentBadge: '보냄',
    sentOk: '초대 {n}건을 보냈어요',
    partialTitle: '초대 {total}건 중 {n}건을 보내지 못했어요',
    partialText: '주소를 고쳐 다시 보내거나, 건너뛰고 첫 화면에서 나중에 보낼 수 있어요.',
    connect: '연결하기',
    reconnect: '다시 연결하기',
    disconnect: '연결 끊기',
    connecting: '연결 중…',
    connected: '연결됨',
    connectOk: '{name}{eul} 연결했어요',
    connectFail: '{name}{eul} 연결하지 못했어요. {reason} 잠시 뒤 다시 연결해 주세요.',
    disconnected: '{name} 연결을 끊었어요',
    errNoChannel: '연결한 채널이 없어요. 하나를 연결하거나 ‘건너뛰기’를 눌러 주세요.',
    badgeDone: '끝냄',
    badgeSkipped: '건너뜀',
    badgeTodo: '아직 안 함',
    badgeFailed: '{n}건 못 보냄',
    linkChange: '바꾸기',
    linkNow: '지금 하기',
    linkResend: '다시 보내기',
    teamSkipped: '가입할 때 적은 ‘{team}’을 써요',
    teamSkippedNoBatchim: '가입할 때 적은 ‘{team}’를 써요',
    invitesDone: '{n}명에게 초대를 보냈어요',
    invitesNone: '아직 초대한 사람이 없어요',
    invitesFailed: '{n}건을 보내지 못했어요',
    channelsNone: '연결한 채널이 없어요',
    channelsDone: '{list}{eul} 연결했어요',
    checkTeam: '팀 정보 정하기',
    checkInvite: '구성원 초대하기',
    checkChannel: '채널 연결하기',
    checkResend: '초대 다시 보내기',
    startValue: '{total}개 중 {n}개',
    startText: '{total}개 중 {n}개 끝냈어요',
    itemDone: '(끝냄)',
    itemTodo: '(남음)'
  };

  function fill(text, map) {
    return text.replace(/\{(\w+)\}/g, function (all, k) { return map[k] != null ? map[k] : all; });
  }
  function esc(text) {
    return String(text).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  /** 받침이 있으면 true — 조사 을/를 고르기 */
  function batchim(word) {
    var c = String(word).trim().slice(-1).charCodeAt(0);
    if (c >= 0xac00 && c <= 0xd7a3) return (c - 0xac00) % 28 !== 0;
    return false;
  }
  function eul(word) { return batchim(word) ? '을' : '를'; }

  /* ---------- 진행(flow) ---------- */

  var keySeq = 0;
  function row(email) { keySeq += 1; return { key: 'r' + keySeq, email: email || '', failed: false, err: null, dirty: false }; }

  function blankFlow() {
    return {
      team: { name: D.signup.team, address: D.signup.address, size: '' }, // 1단계 칸의 값(저장 전)
      saved: null,                                                        // 1단계에서 저장한 값
      skipped: { 1: false, 2: false, 3: false },
      rows: [row(), row(), row()],
      sent: [],
      role: 'member',
      channels: { web: null, mail: null, calendar: null },
      tried: [],     // 한 번 보내 본 주소(처음 한 번만 실패하는 흉내)
      finished: false
    };
  }

  /** 검수용 예시 진행 — n 단계까지 끝낸 상태 */
  function sampleFlow(n) {
    var f = blankFlow();
    var s = D.sample;
    if (n >= 1) {
      f.team = { name: s.team, address: s.address, size: s.size };
      f.saved = { name: s.team, address: s.address, size: s.size };
    }
    if (n >= 2) f.sent = s.invites.map(function (e) { return { email: e, role: 'member' }; });
    if (n >= 3) f.channels.web = 'connected';
    return f;
  }

  function readStore() {
    try { var raw = sessionStorage.getItem(STORE); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function save() {
    try { sessionStorage.setItem(STORE, JSON.stringify(flow)); } catch (e) { /* 저장할 수 없으면 이번 화면에서만 기억한다 */ }
  }
  function clearStore() {
    try { sessionStorage.removeItem(STORE); } catch (e) { /* 지울 것이 없다 */ }
  }

  function loadFlow() {
    var o = readStore();
    if (!o || typeof o !== 'object' || !o.team || !Array.isArray(o.rows)) return null;
    var f = blankFlow();
    Object.keys(f).forEach(function (k) { if (o[k] !== undefined) f[k] = o[k]; });
    f.rows = f.rows.filter(function (r) { return r && typeof r.email === 'string'; }).map(function (r) {
      var n = row(r.email);
      n.failed = !!r.failed;
      n.err = r.failed ? COPY.errSend : null;
      return n;
    });
    if (!f.rows.length) f.rows = [row()];
    if (!D.roles.some(function (r) { return r.id === f.role; })) f.role = 'member';
    return f;
  }

  var flow = blankFlow();
  var ui = {
    view: 'flow',
    step: 1,
    returnToReview: false,
    shown: { 1: false, 2: false },
    dirty: {},
    sending: false,
    sendForever: false,
    failOnce: {}
  };

  /* ---------- 단계 상태 ---------- */

  function teamInfo() { return flow.saved || { name: D.signup.team, address: D.signup.address, size: '' }; }
  function connectedList() { return D.channels.filter(function (c) { return flow.channels[c.id] === 'connected'; }); }
  function failedRows() { return flow.rows.filter(function (r) { return r.failed; }); }

  /**
   * 단계 결과 하나 — 단계 표시 · 4단계 결과 · 첫 화면 체크리스트가 모두 이 값만 본다(세 곳이 같은 일을 같게 보인다).
   * 'failed'(못 보낸 초대가 남음) · 'done' · 'skipped' · null(아직 안 함). 못 보낸 초대가 있으면 보낸 초대가 있어도 끝낸 일이 아니다
   */
  function status(n) {
    if (n === 2 && failedRows().length) return 'failed';
    var done = n === 1 ? !!flow.saved : n === 2 ? flow.sent.length > 0 : n === 3 ? connectedList().length > 0 : false;
    if (done) return 'done';
    return flow.skipped[n] ? 'skipped' : null;
  }

  function itemDone(n) { return status(n) === 'done'; }

  /* ---------- 오류 표시 ---------- */

  function setError(errEl, msg, control) {
    if (typeof errEl === 'string') errEl = doc.getElementById(errEl);
    if (!errEl) return;
    errEl.hidden = !msg;
    $('span', errEl).textContent = msg || '';
    if (control) {
      if (msg) control.setAttribute('aria-invalid', 'true');
      else control.removeAttribute('aria-invalid');
    }
  }
  function errorShown(id) { var el = doc.getElementById(id); return !!el && !el.hidden; }

  function focusTarget(el) {
    if (!el) return;
    if (!el.matches('a[href], button, input, select, textarea, [tabindex]')) el.setAttribute('tabindex', '-1');
    el.focus();
  }

  /* ---------- 단계 표시 · 단계 전환 ---------- */

  function renderSteps() {
    $$('#steps .ds-steps__item').forEach(function (li) {
      var n = +li.getAttribute('data-step');
      var st = n < 4 ? status(n) : null;
      var mark = $('.ds-steps__mark', li);
      var current = n === ui.step;
      if (current) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
      // 지금 단계는 번호, 끝낸 단계는 체크, 끝내지 못한 단계(건너뜀·못 보낸 초대가 남음)는 빼기 — 모양으로 나눈다(CLR-05)
      var shape = current || !st ? null : st === 'done' ? 'done' : 'skipped';
      if (shape) li.setAttribute('data-state', shape);
      else li.removeAttribute('data-state');
      mark.innerHTML = shape === 'done' ? DS.icon('check', 'ds-icon--sm') : shape === 'skipped' ? DS.icon('minus', 'ds-icon--sm') : String(n);
      $('.onb-steps__state', li).textContent = current || !st ? ''
        : st === 'done' ? COPY.stepDone
          : st === 'failed' ? fill(COPY.stepFailed, { n: failedRows().length })
            : COPY.stepSkipped;
    });
  }

  function render() {
    var home = ui.view === 'home';
    $('#flow').hidden = home;
    $('#home').hidden = !home;
    $('#restart').hidden = !home;
    if (home) { renderHome(); return; }
    [1, 2, 3, 4].forEach(function (n) { doc.getElementById('step-' + n).hidden = n !== ui.step; });
    $('#later').hidden = ui.step === 4; // 4단계에서는 "작업 공간 열기"가 같은 일이다
    renderSteps();
    doc.title = STEP_NAMES[ui.step] + ' (' + ui.step + '/4)' + COPY.docTitle;
    if (ui.step === 1) renderStep1();
    if (ui.step === 2) renderStep2();
    if (ui.step === 3) renderStep3();
    if (ui.step === 4) renderStep4();
  }

  function clearBanners() {
    $$('#banner-slot [data-ds-banner]').forEach(function (b) { DS.banner.dismiss(b); });
  }

  function writeUrl(params, push) {
    var p = new URLSearchParams(location.search);
    ['state', 'step', 'view'].forEach(function (k) { p.delete(k); });
    Object.keys(params).forEach(function (k) { p.set(k, params[k]); });
    var url = location.pathname + '?' + p.toString() + location.hash;
    var prev = ui.view === 'home' ? 'home' : ui.step;
    var state = { onb: true, at: params.view || +params.step, prev: push ? prev : (history.state && history.state.onb ? history.state.prev : null) };
    try {
      history[push ? 'pushState' : 'replaceState'](state, '', url);
    } catch (e) { /* 주소를 바꿀 수 없는 환경(파일로 열기 등)이면 화면만 바꾼다 */ }
  }

  /**
   * 단계를 옮긴다. opts: push(기록 추가) · focus(포커스 둘 요소) · quiet(포커스·스크롤 없음, 첫 화면) · keepState(?state= 를 남김)
   */
  function go(step, opts) {
    opts = opts || {};
    DS.tooltip.hide();
    if (!opts.quiet) writeUrl({ step: step }, !!opts.push);
    else if (!opts.keepState) writeUrl({ step: step }, false);
    ui.view = 'flow';
    ui.step = step;
    if (step === 4) ui.returnToReview = false;
    clearBanners();
    render();
    if (opts.quiet) return;
    window.scrollTo(0, 0);
    focusTarget(opts.focus || doc.getElementById('h-step-' + step));
  }

  function showHome(opts) {
    opts = opts || {};
    DS.tooltip.hide();
    if (!opts.quiet) writeUrl({ view: 'home' }, !!opts.push);
    ui.view = 'home';
    ui.returnToReview = false;
    clearBanners();
    render();
    if (opts.quiet) return;
    window.scrollTo(0, 0);
    focusTarget($('#home-title'));
  }

  /** 단계를 마쳤거나 건너뛴 뒤 갈 곳 — 4단계에서 고치러 왔으면 4단계로 바로 돌아간다 */
  function next(from) {
    go(ui.returnToReview ? 4 : from + 1, { push: true });
  }

  function goBack() {
    var st = history.state;
    if (st && st.onb && st.prev === ui.step - 1) history.back();
    else go(ui.step - 1, { push: false });
  }

  function skip(n) {
    flow.skipped[n] = true;
    if (n === 1) clearStep1Errors();
    if (n === 2) clearStep2Errors();
    if (n === 3) setError('channel-error', null);
    save();
    next(n);
  }

  window.addEventListener('popstate', function () {
    if (DS.url.get('view') === 'home') { showHome({ push: false, fromHistory: true }); return; }
    var s = Math.min(4, Math.max(1, parseInt(DS.url.get('step'), 10) || 1));
    go(s, { push: false, quiet: false, fromHistory: true });
  });

  /* ---------- 1단계 — 팀 정보 ---------- */

  function teamError(v) { return String(v || '').trim() ? null : COPY.errTeam; }
  function addressError(v) {
    v = String(v || '').trim();
    if (!v) return COPY.errAddrEmpty;
    if (!/^[a-z0-9-]+$/.test(v)) return COPY.errAddrChars;
    if (v.length < 3) return COPY.errAddrShort;
    if (/^-|-$/.test(v)) return COPY.errAddrHyphen;
    if (D.takenAddresses.indexOf(v) >= 0) return COPY.errAddrTaken;
    return null;
  }
  var STEP1_FIELDS = [
    { name: 'name', id: 'f-team', label: COPY.labelTeam, check: teamError },
    { name: 'address', id: 'f-address', label: COPY.labelAddress, check: addressError }
  ];

  function renderStep1() {
    $('#f-team').value = flow.team.name;
    $('#f-address').value = flow.team.address;
    $$('#size-list input').forEach(function (r) { r.checked = r.value === flow.team.size; });
    $('#next-1').textContent = ui.returnToReview ? COPY.backToReview : NEXT_LABEL[1];
  }

  function showStep1Field(f) {
    setError(f.id + '-error', f.check(flow.team[f.name]), doc.getElementById(f.id));
  }

  /** 지금 보이는 오류만으로 요약을 다시 그린다 — 고칠 때마다 줄이 준다 */
  function refreshSummary1(focus) {
    var list = STEP1_FIELDS.filter(function (f) { return errorShown(f.id + '-error'); }).map(function (f) {
      return { id: f.id, label: f.label, text: $('#' + f.id + '-error span').textContent };
    });
    DS.form.summary('#errors-1', list, { title: COPY.summary1, focus: !!focus });
  }

  function checkStep1(focus) {
    ui.shown[1] = true;
    STEP1_FIELDS.forEach(showStep1Field);
    refreshSummary1(focus);
    return STEP1_FIELDS.every(function (f) { return !f.check(flow.team[f.name]); });
  }

  function clearStep1Errors() {
    STEP1_FIELDS.forEach(function (f) { setError(f.id + '-error', null, doc.getElementById(f.id)); });
    DS.form.summary('#errors-1', []);
  }

  function initStep1() {
    $('#size-list').innerHTML = D.sizes.map(function (s) {
      return '<label class="ds-check"><input type="radio" name="size" value="' + esc(s.id) + '"><span>' + esc(s.label) + '</span></label>';
    }).join('');

    STEP1_FIELDS.forEach(function (f) {
      var input = doc.getElementById(f.id);
      input.addEventListener('input', function () {
        flow.team[f.name] = input.value;
        ui.dirty[f.name] = true;
        save();
        // 오류가 보이는 칸은 입력마다 다시 본다 — 맞는 순간 오류와 요약 줄이 사라진다(PAT-FORM-02)
        if (errorShown(f.id + '-error')) {
          showStep1Field(f);
          refreshSummary1(false);
        }
      });
      input.addEventListener('blur', function () {
        if (!ui.dirty[f.name]) return;
        showStep1Field(f);
        if (!$('#errors-1').hidden) refreshSummary1(false);
      });
    });

    $('#size-list').addEventListener('change', function (e) {
      if (e.target.name !== 'size') return;
      flow.team.size = e.target.value;
      save();
    });

    $('#form-1').addEventListener('submit', function (e) {
      e.preventDefault();
      flow.team.name = $('#f-team').value;
      flow.team.address = $('#f-address').value;
      if (!checkStep1(true)) return;
      flow.team.name = flow.team.name.trim();
      flow.team.address = flow.team.address.trim();
      flow.saved = { name: flow.team.name, address: flow.team.address, size: flow.team.size };
      flow.skipped[1] = false;
      save();
      next(1);
    });
  }

  /* ---------- 2단계 — 구성원 초대 ---------- */

  function roleLabel(id) {
    for (var i = 0; i < D.roles.length; i++) if (D.roles[i].id === id) return D.roles[i].label;
    return '';
  }

  function renderSent() {
    var box = $('#sent');
    box.hidden = !flow.sent.length;
    if (!flow.sent.length) return;
    $('#sent-title').textContent = fill(COPY.sentTitle, { n: flow.sent.length });
    $('#sent-list').innerHTML = flow.sent.map(function (s) {
      return '<li class="onb-row onb-row--plain"><div class="onb-row__main">' +
        '<p class="onb-row__title"><span class="onb-break">' + esc(s.email) + '</span>' +
        '<span class="ds-badge ds-badge--success">' + COPY.sentBadge + '</span></p>' +
        '<p class="onb-row__meta">' + esc(roleLabel(s.role)) + '</p></div></li>';
    }).join('');
  }

  function renderRows(focusKey) {
    var many = flow.rows.length > 1;
    $('#invite-rows').innerHTML = flow.rows.map(function (r, i) {
      var n = i + 1;
      var id = 'inv-' + r.key;
      var label = fill(COPY.rowLabel, { n: n });
      return '<li class="onb-invite__row" data-key="' + r.key + '">' +
        // 칸 이름은 보이는 번호로 시작한다 — "1번째 이메일"(WCAG 2.5.3). 숨긴 글을 이어 붙이면 "1 번째"로 띄어 읽힌다
        '<label class="onb-invite__n" for="' + id + '">' + n + '</label>' +
        '<div class="onb-invite__field">' +
        '<input class="ds-input" type="email" id="' + id + '" inputmode="email" autocomplete="off" spellcheck="false" autocapitalize="none" maxlength="80"' +
        ' aria-label="' + esc(label) + '" placeholder="' + esc(D.emailPlaceholder) + '" aria-describedby="' + id + '-error"' + (r.err ? ' aria-invalid="true"' : '') + ' value="' + esc(r.email) + '">' +
        '<p class="ds-field__error" id="' + id + '-error"' + (r.err ? '' : ' hidden') + '>' + DS.icon('error') + '<span>' + esc(r.err || '') + '</span></p>' +
        '</div>' +
        (many ? '<button class="ds-btn ds-btn--ghost ds-btn--icon onb-invite__remove" type="button" data-remove="' + r.key + '" aria-label="' + esc(fill(COPY.rowRemove, { n: n })) + '" data-ds-tip="' + esc(fill(COPY.rowRemove, { n: n })) + '">' + DS.icon('close') + '</button>' : '') +
        '</li>';
    }).join('');
    var add = $('#add-row');
    var full = flow.rows.length >= MAX_ROWS;
    // 못 누르는 이유는 툴팁이 아니라 버튼 옆 글로 보이고 aria-describedby 로 잇는다
    $('#add-row-hint').hidden = !full;
    if (full) { add.setAttribute('aria-disabled', 'true'); add.setAttribute('aria-describedby', 'add-row-hint'); }
    else { add.removeAttribute('aria-disabled'); add.removeAttribute('aria-describedby'); }
    if (focusKey) focusTarget(doc.getElementById('inv-' + focusKey));
  }

  function renderRoles() {
    $$('#role-list input').forEach(function (r) { r.checked = r.value === flow.role; });
  }

  function renderStep2() {
    renderSent();
    renderRows();
    renderRoles();
    setSending(ui.sending);
  }

  function rowIndex(key) {
    for (var i = 0; i < flow.rows.length; i++) if (flow.rows[i].key === key) return i;
    return -1;
  }

  /** 칸 하나의 검사 — 빈 칸은 보내지 않으므로 오류가 아니다 */
  function rowError(i) {
    var v = flow.rows[i].email.trim().toLowerCase();
    if (!v) return null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return COPY.errEmailFmt;
    for (var j = 0; j < i; j++) if (flow.rows[j].email.trim().toLowerCase() === v) return COPY.errDup;
    if (flow.sent.some(function (s) { return s.email.toLowerCase() === v; })) return COPY.errSent;
    return null;
  }

  function showRowError(i) {
    var r = flow.rows[i];
    var input = doc.getElementById('inv-' + r.key);
    setError('inv-' + r.key + '-error', r.err, input);
  }

  function refreshSummary2(focus) {
    var list = [];
    flow.rows.forEach(function (r, i) {
      if (r.err && !r.failed) list.push({ id: 'inv-' + r.key, label: fill(COPY.rowLabel, { n: i + 1 }), text: r.err });
    });
    DS.form.summary('#errors-2', list, { title: COPY.summary2, focus: !!focus });
  }

  function clearStep2Errors() {
    flow.rows.forEach(function (r, i) { if (!r.failed) { r.err = null; showRowError(i); } });
    DS.form.summary('#errors-2', []);
  }

  /**
   * 보내는 동안 칸을 고칠 수 없고, 단계를 떠나는 버튼(이전 단계·건너뛰기·나중에 하기)도 누를 수 없다.
   * 보내는 사이 건너뛰면 "건너뜀"과 "보냄"이 섞인다(1회차 지적). 이유는 툴팁과 숨긴 글(aria-describedby)로 알린다
   */
  function setSending(on) {
    $('#grp-invite').disabled = on;
    $('#grp-role').disabled = on;
    $$('#step-2 [data-back], #step-2 [data-skip], #later').forEach(function (b) {
      if (on) {
        b.setAttribute('aria-disabled', 'true');
        b.setAttribute('data-ds-tip', COPY.sendingWait);
        b.setAttribute('aria-describedby', 'sending-note');
      } else if (b.getAttribute('data-ds-tip') === COPY.sendingWait) {
        b.removeAttribute('aria-disabled');
        b.removeAttribute('data-ds-tip');
        b.removeAttribute('aria-describedby');
      }
    });
    $('#sending-note').textContent = on ? COPY.sendingWait : '';
  }

  function sendInvites() {
    if (ui.sending) return;
    var btn = $('#send');
    var filled = [];
    flow.rows.forEach(function (r, i) {
      if (r.failed) return; // 서버에서 못 보낸 칸은 그대로 다시 보낸다(형식은 이미 맞다)
      r.err = rowError(i);
      showRowError(i);
    });
    flow.rows.forEach(function (r) { if (r.email.trim()) filled.push(r); });
    if (!filled.length) {
      flow.rows[0].err = COPY.errNone;
      showRowError(0);
    }
    ui.shown[2] = true;
    var hasErr = flow.rows.some(function (r) { return r.err && !r.failed; });
    if (hasErr) { refreshSummary2(true); return; }
    DS.form.summary('#errors-2', []);
    clearBanners();

    ui.sending = true;
    setSending(true);
    DS.busy(btn, true, ui.sendForever ? { delay: 0 } : undefined);
    if (ui.sendForever) return; // ?state=sending — 보내는 중을 멈춰 보인다

    setTimeout(function () {
      var ok = [];
      var bad = [];
      filled.forEach(function (r) {
        var email = r.email.trim();
        var failNow = D.inviteFailOnce.indexOf(email.toLowerCase()) >= 0 && flow.tried.indexOf(email.toLowerCase()) < 0;
        if (flow.tried.indexOf(email.toLowerCase()) < 0) flow.tried.push(email.toLowerCase());
        (failNow ? bad : ok).push(r);
      });
      DS.busy(btn, false).then(function () {
        ui.sending = false;
        setSending(false);
        ok.forEach(function (r) { flow.sent.push({ email: r.email.trim(), role: flow.role }); });
        flow.rows = flow.rows.filter(function (r) { return ok.indexOf(r) < 0; });
        bad.forEach(function (r) { r.failed = true; r.err = COPY.errSend; });
        if (!flow.rows.length) flow.rows = [row()];
        if (ok.length) flow.skipped[2] = false;
        save();
        if (ui.view !== 'flow' || ui.step !== 2) return; // 브라우저 뒤로 가기로 떠났으면 보낸 결과만 남긴다
        if (!bad.length) {
          DS.announce(fill(COPY.sentOk, { n: ok.length }));
          next(2);
          return;
        }
        renderStep2();
        showPartial(ok.length + bad.length, bad.length);
        focusTarget(doc.getElementById('inv-' + bad[0].key));
      });
    }, SEND_MS);
  }

  function showPartial(total, n) {
    var first = failedRows()[0];
    DS.banner.show({
      id: 'onb-partial',
      tone: 'danger',
      title: fill(COPY.partialTitle, { total: total, n: n }),
      text: COPY.partialText,
      focusNext: first ? '#inv-' + first.key : '#h-step-2'
    });
  }

  function initStep2() {
    $('#role-list').innerHTML = D.roles.map(function (r) {
      return '<label class="ds-check"><input type="radio" name="role" value="' + esc(r.id) + '"><span><strong class="onb-strong">' + esc(r.label) + '</strong> — ' + esc(r.desc) + '</span></label>';
    }).join('');

    var rows = $('#invite-rows');
    rows.addEventListener('input', function (e) {
      var li = e.target.closest('[data-key]');
      if (!li) return;
      var i = rowIndex(li.getAttribute('data-key'));
      if (i < 0) return;
      var r = flow.rows[i];
      r.email = e.target.value;
      r.dirty = true;
      var hadServerErr = r.failed;
      if (r.failed) { r.failed = false; r.err = null; } // 고치면 "보내지 못함"은 지운다
      // 오류가 보이는 칸은 입력마다 다시 본다(PAT-FORM-02)
      if (r.err || hadServerErr) {
        r.err = rowError(i);
        showRowError(i);
        if (!$('#errors-2').hidden) refreshSummary2(false);
      }
      save();
    });
    rows.addEventListener('focusout', function (e) {
      var li = e.target.closest('[data-key]');
      if (!li || !e.target.matches('input')) return;
      var i = rowIndex(li.getAttribute('data-key'));
      if (i < 0) return;
      var r = flow.rows[i];
      if (!r.dirty || r.failed) return;
      r.err = rowError(i);
      showRowError(i);
      if (!$('#errors-2').hidden) refreshSummary2(false);
    });
    rows.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-remove]');
      if (!btn) return;
      var i = rowIndex(btn.getAttribute('data-remove'));
      if (i < 0 || flow.rows.length < 2) return;
      DS.tooltip.hide();
      flow.rows.splice(i, 1);
      save();
      var target = flow.rows[Math.min(i, flow.rows.length - 1)];
      renderRows(target.key);
      if (!$('#errors-2').hidden) refreshSummary2(false);
      DS.announce(fill(COPY.rowRemoved, { n: i + 1 }));
    });

    $('#add-row').addEventListener('click', function () {
      if (flow.rows.length >= MAX_ROWS) return;
      var r = row();
      flow.rows.push(r);
      save();
      renderRows(r.key);
    });

    $('#role-list').addEventListener('change', function (e) {
      if (e.target.name !== 'role') return;
      flow.role = e.target.value;
      save();
    });

    $('#form-2').addEventListener('submit', function (e) {
      e.preventDefault();
      sendInvites();
    });
  }

  /* ---------- 3단계 — 채널 연결 ---------- */

  function channelOf(id) {
    for (var i = 0; i < D.channels.length; i++) if (D.channels[i].id === id) return D.channels[i];
    return null;
  }

  function initStep3() {
    $('#channel-list').innerHTML = D.channels.map(function (c) {
      return '<li class="onb-row onb-channel" data-channel="' + c.id + '">' +
        '<span class="onb-row__lead">' + DS.icon(c.icon, 'onb-channel__icon') + '</span>' +
        '<div class="onb-row__main">' +
        '<h3 class="onb-row__title"><span id="ch-' + c.id + '-name">' + esc(c.name) + '</span>' +
        '<span class="ds-badge ds-badge--success" data-badge hidden>' + COPY.connected + '</span></h3>' +
        '<p class="onb-row__meta">' + esc(c.desc) + '</p>' +
        '<p class="ds-field__error" id="ch-' + c.id + '-error" hidden>' + DS.icon('error') + '<span></span></p>' +
        '</div>' +
        '<div class="onb-row__action"><button class="ds-btn ds-btn--sm" type="button" data-connect="' + c.id + '" data-busy-label="' + COPY.connecting + '"' +
        ' aria-describedby="ch-' + c.id + '-error"></button></div>' +
        '</li>';
    }).join('');

    $('#channel-list').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-connect]');
      if (!btn || btn.hasAttribute('data-ds-pending')) return;
      var id = btn.getAttribute('data-connect');
      var c = channelOf(id);
      if (flow.channels[id] === 'connected') {
        flow.channels[id] = null;
        save();
        updateChannel(id);
        DS.announce(fill(COPY.disconnected, { name: c.name }));
        return;
      }
      DS.busy(btn, true);
      setTimeout(function () {
        var fail = !!ui.failOnce[id];
        ui.failOnce[id] = false;
        DS.busy(btn, false).then(function () {
          flow.channels[id] = fail ? 'failed' : 'connected';
          if (!fail) { flow.skipped[3] = false; setError('channel-error', null); }
          save();
          updateChannel(id);
          if (fail) DS.announce(failText(c), { assertive: true });
          else DS.announce(fill(COPY.connectOk, { name: c.name, eul: eul(c.name) }));
        });
      }, CONNECT_MS);
    });

    $('#form-3').addEventListener('submit', function (e) {
      e.preventDefault();
      if (!connectedList().length) {
        setError('channel-error', COPY.errNoChannel);
        DS.announce(COPY.errNoChannel, { assertive: true });
        focusTarget($('#channel-list [data-connect]'));
        return;
      }
      setError('channel-error', null);
      next(3);
    });
  }

  function failText(c) {
    return fill(COPY.connectFail, { name: c.name, eul: eul(c.name), reason: c.failReason });
  }

  function updateChannel(id) {
    var li = $('#channel-list [data-channel="' + id + '"]');
    var btn = $('[data-connect]', li);
    var st = flow.channels[id];
    var c = channelOf(id);
    $('[data-badge]', li).hidden = st !== 'connected';
    var err = doc.getElementById('ch-' + id + '-error');
    setError(err, st === 'failed' ? failText(c) : null);
    if (btn.hasAttribute('data-ds-pending')) return; // 처리 중이면 끝난 뒤에 바꾼다
    var label = st === 'connected' ? COPY.disconnect : st === 'failed' ? COPY.reconnect : COPY.connect;
    // 이름은 "웹사이트 채팅 연결하기" — 보이는 글("연결하기")이 이름 안에 그대로 있다
    btn.innerHTML = '<span class="ds-sr-only">' + esc(c.name) + ' </span>' + esc(label);
  }

  function renderStep3() {
    D.channels.forEach(function (c) { updateChannel(c.id); });
  }

  /* ---------- 4단계 — 마치기 ---------- */

  function teamDetail() {
    var t = teamInfo();
    var parts = [t.name, t.address + D.domain];
    var size = D.sizes.filter(function (s) { return s.id === t.size; })[0];
    if (size) parts.push(size.label);
    return parts.join(' · ');
  }
  function teamSkippedText() {
    var t = D.signup.team;
    return fill(batchim(t) ? COPY.teamSkipped : COPY.teamSkippedNoBatchim, { team: t });
  }
  function channelsText() {
    var list = connectedList().map(function (c) { return c.name; });
    if (!list.length) return COPY.channelsNone;
    var joined = list.join(', ');
    return fill(COPY.channelsDone, { list: joined, eul: eul(list[list.length - 1]) });
  }

  /** 단계 결과 한 줄 — 4단계 결과와 첫 화면 체크리스트가 같은 문장을 쓴다 */
  function stepDetail(n) {
    if (n === 1) return status(1) === 'done' ? teamDetail() : teamSkippedText();
    if (n === 2) {
      var failed = failedRows().length;
      var text = flow.sent.length ? fill(COPY.invitesDone, { n: flow.sent.length }) : COPY.invitesNone;
      return failed ? text + ' · ' + fill(COPY.invitesFailed, { n: failed }) : text;
    }
    return channelsText();
  }

  function reviewRow(n) {
    var st = status(n);
    var failed = n === 2 ? failedRows().length : 0;
    var badge = st === 'failed' ? '<span class="ds-badge ds-badge--warning">' + fill(COPY.badgeFailed, { n: failed }) + '</span>'
      : st === 'done' ? '<span class="ds-badge ds-badge--success">' + COPY.badgeDone + '</span>'
        : '<span class="ds-badge">' + (st === 'skipped' ? COPY.badgeSkipped : COPY.badgeTodo) + '</span>';
    var link = st === 'failed' ? COPY.linkResend : st === 'done' ? COPY.linkChange : COPY.linkNow;
    return '<li class="onb-row onb-row--plain">' +
      '<div class="onb-row__main"><h3 class="onb-row__title"><span>' + STEP_NAMES[n] + '</span>' + badge + '</h3>' +
      '<p class="onb-row__meta onb-break">' + esc(stepDetail(n)) + '</p></div>' +
      '<div class="onb-row__action"><a class="onb-link" href="?step=' + n + '" data-edit="' + n + '">' +
      '<span class="ds-sr-only">' + STEP_NAMES[n] + ' </span>' + link + '</a></div></li>';
  }

  function renderStep4() {
    $('#review-list').innerHTML = [1, 2, 3].map(reviewRow).join('');
    $('#review-note').hidden = [1, 2, 3].every(itemDone);
  }

  function initStep4() {
    $('#review-list').addEventListener('click', function (e) {
      var a = e.target.closest('[data-edit]');
      if (!a) return;
      e.preventDefault();
      ui.returnToReview = true;
      go(+a.getAttribute('data-edit'), { push: true });
    });
    $('#open').addEventListener('click', function () {
      flow.finished = true;
      save();
      showHome({ push: true });
    });
  }

  /* ---------- 첫 화면 — 남은 일 체크리스트 ---------- */

  function checkRow(n) {
    var st = status(n);
    var done = st === 'done';
    var failed = n === 2 ? failedRows().length : 0;
    var action = '';
    if (!done) {
      var label = n === 1 ? COPY.checkTeam : n === 2 ? (st === 'failed' ? COPY.checkResend : COPY.checkInvite) : COPY.checkChannel;
      // 단계로 가는 이동이라 링크다(CMP-BTN-03). 모양만 버튼
      action = '<div class="onb-row__action"><a class="ds-btn ds-btn--sm" href="?step=' + n + '" data-goto="' + n + '">' + label + '</a></div>';
    }
    var mark = done ? DS.icon('success', 'onb-check__done') : '<span class="onb-check__todo"></span>';
    var sr = done ? COPY.itemDone : st === 'failed' ? '(' + fill(COPY.badgeFailed, { n: failed }) + ')' : COPY.itemTodo;
    return '<li class="onb-row' + (done ? ' onb-row--done' : '') + '">' +
      '<span class="onb-row__lead" aria-hidden="true">' + mark + '</span>' +
      '<div class="onb-row__main"><h3 class="onb-row__title">' + STEP_NAMES[n] + '<span class="ds-sr-only"> ' + sr + '</span></h3>' +
      '<p class="onb-row__meta onb-break">' + esc(stepDetail(n)) + '</p></div>' + action + '</li>';
  }

  function renderHome() {
    var t = teamInfo();
    var title = fill(COPY.homeTitle, { team: t.name });
    $('#home-title').textContent = title;
    $('#home-address').textContent = t.address + D.domain;
    doc.title = title + COPY.docTitle;
    var n = [1, 2, 3].filter(itemDone).length;
    var pct = Math.round(n / 3 * 100);
    $('#start-value').textContent = fill(COPY.startValue, { total: 3, n: n });
    var track = $('#start-track');
    track.setAttribute('aria-valuenow', String(n));
    track.setAttribute('aria-valuetext', fill(COPY.startText, { total: 3, n: n }));
    $('#start-bar').style.setProperty('--ds-progress', pct + '%');
    $('#start-done').hidden = n < 3;
    $('#check-list').innerHTML = [1, 2, 3].map(checkRow).join('');
  }

  function initHome() {
    $('#check-list').addEventListener('click', function (e) {
      var b = e.target.closest('[data-goto]');
      if (!b) return;
      e.preventDefault();
      ui.returnToReview = true;
      go(+b.getAttribute('data-goto'), { push: true });
    });
    $('#restart').addEventListener('click', function () {
      clearStore();
      flow = blankFlow();
      ui.shown = { 1: false, 2: false };
      ui.dirty = {};
      ui.failOnce = {};
      clearStep1Errors();
      go(1, { push: true });
    });
  }

  /* ---------- 시작 ---------- */

  function init() {
    var state = DS.url.get('state') || '';
    var view = DS.url.get('view');
    var step = Math.min(4, Math.max(1, parseInt(DS.url.get('step'), 10) || 1));
    var stored = loadFlow();
    var s = D.sample;

    flow = stored || blankFlow();

    if (state === 'invalid') {
      flow = blankFlow();
      flow.team.name = s.invalidTeam;
      flow.team.address = s.invalidAddress;
      step = 1;
    } else if (state === 'sending') {
      flow = sampleFlow(1);
      flow.rows = s.invites.map(function (e) { return row(e); });
      ui.sendForever = true;
      step = 2;
    } else if (state === 'invite-partial') {
      flow = sampleFlow(1);
      flow.sent = s.partialSent.map(function (e) { return { email: e, role: 'member' }; });
      var bad = row(s.partialFailed);
      bad.failed = true;
      bad.err = COPY.errSend;
      flow.rows = [bad];
      flow.tried = [s.partialFailed];
      step = 2;
    } else if (state === 'connect-fail') {
      flow = sampleFlow(2);
      flow.channels.web = 'connected';
      flow.channels.mail = 'failed';
      step = 3;
    } else if (state === 'skipped') {
      flow = sampleFlow(1);
      flow.skipped[2] = true;
      flow.skipped[3] = true;
      step = 4;
    } else if (!stored && view === 'home') {
      flow = sampleFlow(2);
      flow.skipped[3] = true;
      flow.finished = true;
    } else if (!stored && step >= 2) {
      flow = sampleFlow(step - 1); // 주소로 바로 들어온 검수용 단계 — 앞 단계를 예시 진행으로 채운다
    }
    if (state) save();

    initStep1();
    initStep2();
    initStep3();
    initStep4();
    initHome();
    $$('[data-back]').forEach(function (b) { b.addEventListener('click', goBack); });
    $$('[data-skip]').forEach(function (b) {
      b.addEventListener('click', function () { skip(ui.step); });
    });
    $('#later').addEventListener('click', function () {
      save();
      showHome({ push: true });
    });

    if (view === 'home' && !state) showHome({ quiet: true });
    else go(step, { quiet: true, keepState: true });

    if (state === 'invalid') checkStep1(false);
    if (state === 'sending') sendInvites();
    if (state === 'invite-partial') showPartial(3, 1);
  }

  DS.ready(init);
})();
