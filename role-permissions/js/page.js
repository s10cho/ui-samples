/*
 * 권한 관리 샘플 — 역할 보기(역할 목록 + 권한 표 + 변경 내역) ↔ 구성원 보기(역할 주기).
 * 가상 데이터는 js/data.js(window.RP_DATA)에만 있다. 서버 요청은 타이머로 흉내 낸다.
 *
 * 상태 쿼리
 *   ?view=members        구성원 보기(역할 보기는 지움)
 *   ?role=<id>           고른 역할(admin·operator·agent·billing·viewer, 운영자는 지움)
 *   ?filter=<id> · ?q=   구성원 거르기 · 찾기
 *   ?state=loading       불러오는 중(멈춰 둔다)
 *   ?state=error         불러오기 실패
 *   ?state=dirty         운영자 권한 표에 저장하지 않은 변경 3곳
 *   ?state=preview       바뀐 곳 미리 보기 대화상자
 *   ?state=confirm       위험한 권한 켜기 확인 대화상자
 *   ?state=leave         저장 안 한 변경이 있는 채로 다른 역할을 고른 모습(떠나기 전 대화상자)
 *   ?state=saving        저장 중(멈춰 둔다)
 *   ?state=save-fail     권한 저장이 막 실패한 모습. 구성원 역할 주기도 첫 시도는 실패한다
 *   ?state=no-permission 보기만 할 수 있는 사람(운영자)으로 본다
 */
(function () {
  'use strict';

  var doc = document;
  var D = window.RP_DATA;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var params = new URLSearchParams(location.search);
  var state = params.get('state') || '';
  var PRESET = /^(dirty|save-fail|preview|leave|saving)$/.test(state);

  /* ---------- 문구 ---------- */

  var COPY = {
    none: '바뀐 곳 없음',
    changed: function (n) { return n + '곳 바뀜'; },
    saved: '방금 저장했어요',
    nothing: '바꾼 내용이 없어요',
    noChanges: '바뀐 곳이 없어요',
    nothingToRevert: '되돌릴 변경이 없어요',
    reverted: function (n) { return '바꾼 ' + n + '곳을 되돌렸어요'; },
    savedAnnounce: function (role, n) { return role + ' 권한을 저장했어요. ' + n + '곳 바뀌었어요.'; },
    saveFail: '권한을 저장하지 못했어요',
    saveFailText: function (n) { return '연결이 잠시 끊겼어요. 바꾼 ' + n + '곳은 그대로 있어요.'; },
    retry: '다시 저장',
    roleFail: '역할을 주지 못했어요',
    loading: '권한 정보를 불러오는 중이에요',
    loaded: '권한 정보를 불러왔어요',
    on: '켬',
    off: '끔',
    created: '역할 만듦',
    me: '나',
    builtin: '기본 역할',
    undo: '되돌리기',
    justNow: '방금',
    yesterday: '어제',
    allRoles: '모든 역할',
    leaveMove: ['변경 버리고 이동', '저장하고 이동'],
    leaveExit: ['변경 버리고 나가기', '저장하고 나가기'],
    noResultText: '이름이나 이메일 일부로 찾아보거나 역할 거르기를 지워 보세요.',
    clear: '찾기·거르기 지우기',
    stateOn: '켜짐',
    stateOff: '꺼짐',
    na: '해당 없음'
  };

  /* 받침에 맞는 조사 — pair 는 [받침 있을 때, 없을 때]. 한글이 아니면 받침 없는 쪽 */
  function josa(word, pair) {
    var s = String(word);
    var c = s.charCodeAt(s.length - 1);
    if (!(c >= 0xac00 && c <= 0xd7a3)) return s + pair[1];
    var jong = (c - 0xac00) % 28;
    if (pair[0] === '으로') return s + (jong === 0 || jong === 8 ? '로' : '으로');
    return s + (jong ? pair[0] : pair[1]);
  }

  /* ---------- 모델 ---------- */

  var ACTIONS = D.actions;
  var FEATURES = D.features;
  var ROLES = D.roles;
  var readOnly = state === 'no-permission';
  var meId = readOnly ? D.noPermissionMe : D.me;

  function roleById(id) {
    for (var i = 0; i < ROLES.length; i++) if (ROLES[i].id === id) return ROLES[i];
    return null;
  }
  function featureById(id) {
    for (var i = 0; i < FEATURES.length; i++) if (FEATURES[i].id === id) return FEATURES[i];
    return null;
  }
  function actionName(id) {
    for (var i = 0; i < ACTIONS.length; i++) if (ACTIONS[i].id === id) return ACTIONS[i].name;
    return id;
  }
  function memberById(id) {
    for (var i = 0; i < D.members.length; i++) if (D.members[i].id === id) return D.members[i];
    return null;
  }
  function applicable(f, a) { return !(f.na && f.na.indexOf(a) >= 0); }
  function isDanger(fId, aId) {
    if (aId === 'view') return false;
    return D.danger.actions.indexOf(aId) >= 0 || D.danger.features.indexOf(fId) >= 0;
  }
  function permLabel(fId, aId) { return featureById(fId).name + ' ' + actionName(aId); }
  function editable(role) { return !readOnly && !role.builtin; }

  /* 역할의 권한 — { 'orders.view': true, … }. 해당 없는 칸은 넣지 않는다 */
  function permMap(role) {
    var m = {};
    FEATURES.forEach(function (f) {
      ACTIONS.forEach(function (a) {
        if (!applicable(f, a.id)) return;
        var on;
        if (role.perms === 'all') on = true;
        else if (role.perms === 'view') on = a.id === 'view';
        else on = !!(role.perms[f.id] && role.perms[f.id].indexOf(a.id) >= 0);
        m[f.id + '.' + a.id] = on;
      });
    });
    return m;
  }
  function copyMap(m) { var o = {}; Object.keys(m).forEach(function (k) { o[k] = m[k]; }); return o; }
  function permCount(roleId) {
    var m = saved[roleId];
    return Object.keys(m).filter(function (k) { return m[k]; }).length;
  }

  var saved = {};
  ROLES.forEach(function (r) { saved[r.id] = permMap(r); });

  var current = roleById(params.get('role')) ? params.get('role') : D.defaultRole;
  var draft = copyMap(saved[current]);
  var justSaved = false;

  /* 저장하지 않은 변경 — 표 순서(행 → 열)대로 */
  function changes() {
    var list = [];
    var base = saved[current];
    FEATURES.forEach(function (f) {
      ACTIONS.forEach(function (a) {
        var k = f.id + '.' + a.id;
        if (k in base && base[k] !== draft[k]) list.push({ f: f.id, a: a.id, on: draft[k] });
      });
    });
    return list;
  }
  function isDirty() { return changes().length > 0; }
  function visible(el) { return !!el && el.getClientRects().length > 0; }

  function membersOf(roleId) { return D.members.filter(function (m) { return m.role === roleId; }); }

  /* ---------- 시각 ---------- */

  function parse(s) {
    var p = s.split(/[-T:]/).map(Number);
    return { y: p[0], mo: p[1], d: p[2], h: p[3] || 0, mi: p[4] || 0, t: Date.UTC(p[0], p[1] - 1, p[2], p[3] || 0, p[4] || 0) };
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var NOW = parse(D.now);

  /* DESIGN.md 「날짜 표기」 — 오늘은 시각만, 어제는 "어제 15:20", 올해는 "11월 17일", 다른 해는 "2025년 3월 2일".
     withTime 이면 날짜 뒤에 시각을 붙인다(변경 내역) */
  function when(s, withTime) {
    var d = parse(s);
    var clock = pad(d.h) + ':' + pad(d.mi);
    var day = Date.UTC(d.y, d.mo - 1, d.d);
    var today = Date.UTC(NOW.y, NOW.mo - 1, NOW.d);
    if (day === today) return clock;
    if (today - day === 86400000) return COPY.yesterday + ' ' + clock;
    var date = (d.y === NOW.y ? '' : d.y + '년 ') + d.mo + '월 ' + d.d + '일';
    return withTime ? date + ' ' + clock : date;
  }
  function timeTag(s, withTime) {
    return '<time datetime="' + s + '">' + esc(when(s, withTime)) + '</time>';
  }

  /* ---------- 서버 흉내 ---------- */

  var failOnce = { save: false, role: state === 'save-fail' };
  var stall = state === 'saving';

  function request(kind, delay) {
    return new Promise(function (resolve, reject) {
      if (stall && kind === 'save') return; // 저장 중에서 멈춰 둔다
      setTimeout(function () {
        if (failOnce[kind]) { failOnce[kind] = false; reject(new Error(kind)); }
        else resolve();
      }, delay);
    });
  }

  /* kit DS.busy — 300ms 뒤 처리 중 글을 보이고, 보였으면 400ms 를 채운다. 돌려준 Promise 는 버튼이 돌아온 뒤 끝난다 */
  function withBusy(btn, promise) {
    DS.busy(btn, true);
    return promise.then(function (v) {
      return DS.busy(btn, false).then(function () { return v; });
    }, function (err) {
      return DS.busy(btn, false).then(function () { throw err; });
    });
  }

  /* 붙어 읽히지 않게 이름 사이에 두는 화면낭독기용 쉼표("주문, 주문 내역·배송") */
  var SEP = '<span class="ds-sr-only">, </span>';

  /* 배너 — kit 은 제목과 글을 띄어쓰기로만 이어 읽으므로 마침표를 넣어 한 알림으로 직접 보낸다 */
  function banner(o) {
    o.announce = false;
    var el = DS.banner.show(o);
    DS.announce(o.title + '. ' + o.text, { assertive: o.tone === 'danger' });
    return el;
  }

  /* ---------- 요소 ---------- */

  var roleListEl = $('#role-list');
  var matrixBody = $('#matrix-body');
  var bar = $('#save-bar');
  var countEl = $('#save-count');
  var btnPreview = $('#btn-preview');
  var btnRevert = $('#btn-revert');
  var btnSave = $('#btn-save');
  var mini = $('#save-mini');
  var btnSaveMini = $('#btn-save-mini');
  var narrowMq = window.matchMedia ? matchMedia('(max-width: 47.9375rem)') : null;
  var tabs = $('#view-tabs');
  var memberBody = $('#member-body');
  var qInput = $('#member-q');
  var filterSel = $('#member-filter');

  /* ---------- 역할 목록 ---------- */

  function renderRoleList() {
    roleListEl.innerHTML = ROLES.map(function (r) {
      var n = membersOf(r.id).length;
      var meta = (r.builtin ? COPY.builtin + ' · ' : '') + n + '명';
      return '<li><button class="rp-role-btn" type="button" data-role="' + r.id + '"' + (r.id === current ? ' aria-current="true"' : '') + '>' +
        '<span class="rp-role-btn__main"><span class="rp-role-btn__name">' + esc(r.name) + '</span>' + SEP +
        '<span class="rp-role-btn__meta">' + esc(meta) + '</span></span></button></li>';
    }).join('');
  }

  /* ---------- 역할 머리 ---------- */

  function renderRoleHead() {
    var r = roleById(current);
    var n = membersOf(r.id).length;
    $('#role-title').textContent = r.name;
    $('#role-builtin').hidden = !r.builtin;
    $('#role-desc').textContent = r.desc;
    var link = $('#role-members-link');
    link.textContent = '구성원 ' + n + '명 보기';
    link.href = '?view=members&filter=' + r.id;
    $('#role-locked').hidden = !(r.builtin && !readOnly);
    bar.hidden = !editable(r);
    // 고칠 수 없는 역할에는 "켤 때 확인" 대신 "위험"의 뜻만
    $('#legend-edit').hidden = !editable(r);
    $('#legend-read').hidden = editable(r);
    bar.setAttribute('aria-label', r.name + ' 권한 저장');
    $('#matrix-wrap').setAttribute('aria-label', r.name + ' 권한 표');
    $('#matrix-caption').textContent = r.name + ' 역할의 권한';
    doc.title = r.name + ' — 권한 관리';
  }

  /* ---------- 권한 표 ---------- */

  function cellHtml(f, a, role) {
    var key = f.id + '.' + a.id;
    if (!applicable(f, a.id)) {
      return '<td class="rp-cell rp-cell--na"><span class="rp-na" aria-hidden="true">—</span><span class="ds-sr-only">' + COPY.na + '</span></td>';
    }
    if (!editable(role)) {
      var on = saved[role.id][key];
      return '<td class="rp-cell"><span class="rp-mark"' + (on ? ' data-on' : '') + '>' + (on ? DS.icon('check') : '') +
        '<span class="ds-sr-only">' + (on ? COPY.stateOn : COPY.stateOff) + '</span></span></td>';
    }
    var danger = isDanger(f.id, a.id);
    return '<td class="rp-cell" data-f="' + f.id + '" data-a="' + a.id + '">' +
      '<label class="ds-hit"><input type="checkbox" id="p-' + f.id + '-' + a.id + '"' + (draft[key] ? ' checked' : '') +
      ' aria-labelledby="f-' + f.id + ' col-' + a.id + '"' + (danger ? ' aria-describedby="note-danger"' : '') + '></label></td>';
  }

  function renderMatrix() {
    var role = roleById(current);
    matrixBody.innerHTML = FEATURES.map(function (f) {
      var dangerRow = D.danger.features.indexOf(f.id) >= 0;
      return '<tr data-f="' + f.id + '"><th scope="row" class="rp-feature">' +
        '<span class="rp-feature__name"><span id="f-' + f.id + '">' + esc(f.name) + '</span>' +
        (dangerRow ? SEP + '<span class="ds-badge ds-badge--warning">위험</span>' : '') + '</span>' +
        SEP + '<span class="ds-table__sub">' + esc(f.sub) + '</span></th>' +
        ACTIONS.map(function (a) { return cellHtml(f, a, role); }).join('') + '</tr>';
    }).join('');
    syncCells();
    if (DS.table) DS.table.syncSticky('#matrix');
  }

  /* 체크 값과 바뀜 표시를 draft 에 맞춘다(다시 그리지 않아 포커스가 남는다) */
  function syncCells() {
    var base = saved[current];
    $$('td[data-f]', matrixBody).forEach(function (td) {
      var key = td.getAttribute('data-f') + '.' + td.getAttribute('data-a');
      var input = $('input', td);
      input.checked = !!draft[key];
      var changed = base[key] !== draft[key];
      td.toggleAttribute('data-changed', changed);
      var desc = [];
      if (isDanger(td.getAttribute('data-f'), td.getAttribute('data-a'))) desc.push('note-danger');
      if (changed) desc.push('note-changed');
      if (desc.length) input.setAttribute('aria-describedby', desc.join(' '));
      else input.removeAttribute('aria-describedby');
    });
  }

  /* 저장 줄 — 바뀐 곳 수, 미리 보기·되돌리기는 바뀐 곳이 없으면 이유를 보이는 비활성. 저장은 늘 누를 수 있다(CMP-BTN-08) */
  function updateBar() {
    var n = changes().length;
    if (n) justSaved = false;
    countEl.setAttribute('data-tone', n ? 'dirty' : (justSaved ? 'saved' : ''));
    countEl.innerHTML = n ? esc(COPY.changed(n)) : (justSaved ? DS.icon('success') + '<span>' + COPY.saved + '</span>' : esc(COPY.none));
    [[btnPreview, COPY.noChanges], [btnRevert, COPY.nothingToRevert]].forEach(function (p) {
      if (n) { p[0].removeAttribute('aria-disabled'); p[0].removeAttribute('data-ds-tip'); }
      else { p[0].setAttribute('aria-disabled', 'true'); p[0].setAttribute('data-ds-tip', p[1]); }
    });
    // 좁은 폭에서 줄이 표 위 제자리에 나타나거나 사라지면 표가 밀린다 — 포커스한 칸이 손가락 밑에 남게 밀린 만큼 되돌린다.
    // 그 다음에 kit 이 줄을 붙이고(제 몫의 밀림은 kit 이 되돌린다) 붙은 줄 밑이면 포커스를 끌어올린다 — 그 끌어올림은 되돌리지 않는다
    var anchor = doc.activeElement && doc.activeElement !== doc.body && !bar.contains(doc.activeElement) ? doc.activeElement : null;
    var before = anchor ? anchor.getBoundingClientRect().top : 0;
    bar.toggleAttribute('data-dirty', n > 0);
    if (anchor && anchor.isConnected) {
      var shift = anchor.getBoundingClientRect().top - before;
      if (Math.abs(shift) >= 0.5) window.scrollBy(0, shift);
    }
    DS.actionbar.set(bar, n > 0 && !bar.hidden);
    syncMini();
  }

  /* 짧은 저장 줄 — 좁은 폭 + 바뀐 곳 있음 + kit 이 전체 줄을 붙이지 않았을 때(붙이면 화면 높이의 20% 를 넘는 화면).
     전체 줄이 표 위 제자리에 남아 화면 밖에 있어도 저장할 수 있게 한다. 나타나는 순간 포커스가 줄 밑이면 끌어올린다 */
  function syncMini() {
    var n = changes().length;
    var want = n > 0 && !bar.hidden && !!(narrowMq && narrowMq.matches) && !bar.hasAttribute('data-docked');
    var was = !mini.hidden;
    if (want) $('#save-mini-count').textContent = COPY.changed(n);
    if (want === was) { if (want) measureMini(); return; }
    var hadFocus = mini.contains(doc.activeElement);
    mini.hidden = !want;
    if (want) measureMini();
    else if (hadFocus) {
      // 줄이 사라지면 결과(변경 내역)로
      $('#h-history').focus();
    }
  }

  function measureMini() {
    var rem = parseFloat(getComputedStyle(doc.documentElement).fontSize) || 16;
    var r = mini.getBoundingClientRect();
    doc.documentElement.style.setProperty('--role-permissions-mini-h', (r.height / rem) + 'rem');
    var a = doc.activeElement;
    if (!a || a === doc.body || mini.contains(a)) return;
    var ar = a.getBoundingClientRect();
    // 포커스 링(굵기 + 간격)까지 줄 위에 보이게
    if (ar.bottom + rem * 0.25 > r.top) a.scrollIntoView({ block: 'nearest' });
  }

  // 창 크기가 바뀌면 kit 이 전체 줄을 다시 놓은 뒤(다음 그림 차례) 짧은 줄도 다시 정한다
  var miniRaf = 0;
  window.addEventListener('resize', function () {
    cancelAnimationFrame(miniRaf);
    miniRaf = requestAnimationFrame(function () { miniRaf = requestAnimationFrame(syncMini); });
  });
  if (narrowMq && narrowMq.addEventListener) narrowMq.addEventListener('change', function () { requestAnimationFrame(syncMini); });

  function setPerm(fId, aId, on) {
    var f = featureById(fId);
    draft[fId + '.' + aId] = on;
    var also = [];
    // 볼 수 없는 것은 고칠 수 없다 — 다른 권한을 켜면 보기도 켜고, 보기를 끄면 나머지도 끈다
    if (on && aId !== 'view' && !draft[fId + '.view']) {
      draft[fId + '.view'] = true;
      also.push('view');
    }
    if (!on && aId === 'view') {
      ACTIONS.forEach(function (a) {
        if (a.id !== 'view' && applicable(f, a.id) && draft[fId + '.' + a.id]) {
          draft[fId + '.' + a.id] = false;
          also.push(a.id);
        }
      });
    }
    syncCells();
    updateBar();
    // 한 번에 한 알림 — 무엇을 했는지 + 함께 바뀐 칸 + 바뀐 곳 수
    var n = changes().length;
    var text = josa(permLabel(fId, aId), ['을', '를']) + (on ? ' 켰어요.' : ' 껐어요.');
    if (also.length) text += ' ' + also.map(actionName).join('·') + '도 함께 ' + (on ? '켰어요.' : '껐어요.');
    DS.announce(text + ' ' + (n ? '바뀐 곳 ' + n + '곳' : COPY.none));
  }

  matrixBody.addEventListener('click', function (e) {
    var input = e.target.closest('input[type="checkbox"]');
    if (!input) return;
    var td = input.closest('td[data-f]');
    if (!td) return;
    var fId = td.getAttribute('data-f');
    var aId = td.getAttribute('data-a');
    // 위험한 권한을 켜려 하면 체크를 그대로 두고 먼저 묻는다(click 기본 동작을 막으면 체크가 돌아간다)
    if (input.checked && isDanger(fId, aId) && !saved[current][fId + '.' + aId]) {
      e.preventDefault();
      askDanger(fId, aId, input);
    }
  });

  matrixBody.addEventListener('change', function (e) {
    var input = e.target.closest('input[type="checkbox"]');
    var td = input && input.closest('td[data-f]');
    if (!td) return;
    setPerm(td.getAttribute('data-f'), td.getAttribute('data-a'), input.checked);
  });

  /* 기본 역할 이유 — 터치로 눌러도 툴팁을 보인다(터치 누르기는 :focus-visible 이 아니라 kit 툴팁이 뜨지 않는다) */
  $('#btn-locked-why').addEventListener('click', function (e) { DS.tooltip.show(e.currentTarget, 'focus'); });

  /* ---------- 위험한 권한 확인 ---------- */

  var dlgDanger = $('#dlg-danger');
  var pendingDanger = null;

  function dangerText(fId, aId, n) {
    var f = featureById(fId).name;
    var reason;
    var can;
    if (aId === 'delete') {
      reason = '지운 ' + josa(f, ['은', '는']) + ' 되살릴 수 없어요.';
      can = josa(f, ['을', '를']) + ' 지울 수 있어요';
    } else if (aId === 'export') {
      reason = '내려받은 파일은 이 서비스 밖으로 나가요.';
      can = f + ' 목록을 파일로 내려받을 수 있어요';
    } else if (aId === 'create') {
      reason = '고객에게 돈을 받는 일이에요.';
      can = '고객에게 결제를 요청할 수 있어요';
    } else {
      reason = '결제를 취소하면 고객에게 돈이 돌아가요.';
      can = '결제를 취소하고 환불할 수 있어요';
    }
    var who = n ? '저장하면 이 역할의 구성원 ' + n + '명이 ' + can + '.' : '지금은 이 역할을 가진 구성원이 없어요.';
    return reason + ' ' + who;
  }

  function askDanger(fId, aId, input) {
    var r = roleById(current);
    pendingDanger = { f: fId, a: aId, input: input };
    $('#dlg-danger-title').textContent = r.name + ' 역할에 ' + permLabel(fId, aId) + ' 권한을 줄까요?';
    $('#dlg-danger-desc').textContent = dangerText(fId, aId, membersOf(r.id).length);
    $('#dlg-danger-go').textContent = actionName(aId) + ' 권한 켜기';
    DS.dialog.open(dlgDanger, input);
  }

  dlgDanger.addEventListener('close', function () {
    var p = pendingDanger;
    pendingDanger = null;
    if (!p || dlgDanger.returnValue !== 'confirm') return;
    if (DS.url.get('state') === 'confirm') DS.url.set({ state: null });
    setPerm(p.f, p.a, true);
    // 확인한 권한 이름을 앞에 둔다(체크 상태는 포커스가 돌아갈 때 화면낭독기가 읽는다)
  });

  /* ---------- 바뀐 곳 미리 보기 ---------- */

  var dlgPreview = $('#dlg-preview');

  function renderPreview() {
    var r = roleById(current);
    var list = changes();
    var n = membersOf(r.id).length;
    $('#dlg-preview-title').textContent = r.name + ' 역할에서 바뀐 ' + list.length + '곳';
    var groups = [[true, '켜는 권한'], [false, '끄는 권한']].map(function (g) {
      var items = list.filter(function (c) { return c.on === g[0]; });
      if (!items.length) return '';
      return '<section class="rp-changes" aria-labelledby="pv-' + (g[0] ? 'on' : 'off') + '">' +
        '<h3 class="rp-changes__title" id="pv-' + (g[0] ? 'on' : 'off') + '">' + g[1] + ' ' + items.length + '곳</h3><ul class="rp-changes__list">' +
        items.map(function (c) {
          return '<li>' + esc(permLabel(c.f, c.a)) + (g[0] && isDanger(c.f, c.a) ? '<span class="ds-badge ds-badge--warning">위험</span>' : '') + '</li>';
        }).join('') + '</ul></section>';
    }).join('');
    var who = n ? '저장하면 구성원 ' + n + '명에게 바로 적용돼요.' : '지금은 이 역할을 가진 구성원이 없어요.';
    $('#dlg-preview-body').innerHTML = groups + '<p class="rp-changes__note">' + esc(who) + '</p>';
  }

  btnPreview.addEventListener('click', function () {
    if (!isDirty()) return;
    renderPreview();
    DS.dialog.open(dlgPreview, btnPreview);
  });

  $('#dlg-preview-save').addEventListener('click', function (e) {
    save(e.currentTarget, function (ok) {
      if (!ok) return;
      DS.dialog.close(dlgPreview);
      // 연 버튼(바뀐 곳 보기)이 좁은 폭에서 사라졌으면 결과(변경 내역)로
      setTimeout(function () { if (doc.activeElement === doc.body || !visible(doc.activeElement)) $('#h-history').focus(); }, 0);
    });
  });

  /* ---------- 저장 · 되돌리기 ---------- */

  function clearPresetState() {
    if (/^(dirty|save-fail|preview|leave|saving|confirm)$/.test(DS.url.get('state') || '') && !isDirty()) DS.url.set({ state: null });
  }

  function save(btn, after) {
    var list = changes();
    var r = roleById(current);
    if (!list.length) {
      countEl.setAttribute('data-tone', '');
      countEl.textContent = COPY.nothing;
      DS.announce(COPY.nothing);
      if (after) after(true);
      return;
    }
    var snapshot = copyMap(draft);
    var roleId = current;
    withBusy(btn || btnSave, request('save', 900)).then(function () {
      saved[roleId] = snapshot;
      (D.history[roleId] = D.history[roleId] || []).unshift({ at: D.now, by: meId, fresh: true, changes: list.map(function (c) { return [c.f, c.a, c.on]; }) });
      DS.banner.dismiss('#banner-save');
      if (roleId === current) {
        justSaved = true;
        syncCells();
        updateBar();
        renderHistory();
        // 좁은 폭에서는 저장 줄이 바뀐 곳이 없으면 사라진다 — 포커스를 결과(변경 내역)로 옮긴다
        if (doc.activeElement === doc.body || !visible(doc.activeElement)) $('#h-history').focus();
      }
      DS.announce(COPY.savedAnnounce(r.name, list.length));
      clearPresetState();
      if (after) after(true);
    }, function () {
      showSaveFail(list.length);
      if (after) after(false);
    });
  }

  function showSaveFail(n) {
    banner({
      id: 'banner-save',
      tone: 'danger',
      title: COPY.saveFail,
      text: COPY.saveFailText(n),
      actions: [{ label: COPY.retry, onClick: function () { setTimeout(function () { save(btnSave); }, 0); } }],
      focusNext: '#btn-save'
    });
  }

  btnSave.addEventListener('click', function () { save(btnSave); });
  btnSaveMini.addEventListener('click', function () { save(btnSaveMini); });

  btnRevert.addEventListener('click', function () {
    var n = changes().length;
    if (!n) return;
    draft = copyMap(saved[current]);
    syncCells();
    updateBar();
    DS.banner.dismiss('#banner-save');
    // 좁은 폭에서는 저장 줄이 사라지므로 표 제목으로
    if (visible(btnSave)) btnSave.focus();
    else $('#h-matrix').focus();
    DS.announce(COPY.reverted(n));
    clearPresetState();
  });

  /* ---------- 변경 내역 ---------- */

  /* 내역 한 줄 — 같은 기능·같은 방향은 묶고("고객 정보 보기·만들기 끔"), 위험한 권한을 켠 묶음을 먼저 둔다. 3묶음 넘으면 "외 n곳" */
  function summary(entry) {
    if (entry.created) return COPY.created;
    var groups = [];
    entry.changes.forEach(function (c) {
      var g = groups.filter(function (x) { return x.f === c[0] && x.on === c[2]; })[0];
      if (!g) { g = { f: c[0], on: c[2], acts: [], danger: false }; groups.push(g); }
      g.acts.push(c[1]);
      if (c[2] && isDanger(c[0], c[1])) g.danger = true;
    });
    groups.sort(function (a, b) { return (b.danger ? 1 : 0) - (a.danger ? 1 : 0); });
    var parts = groups.map(function (g) {
      return featureById(g.f).name + ' ' + g.acts.map(actionName).join('·') + ' ' + (g.on ? COPY.on : COPY.off);
    });
    if (parts.length > 3) {
      var rest = groups.slice(3).reduce(function (n, g) { return n + g.acts.length; }, 0);
      return parts.slice(0, 3).join(', ') + ' 외 ' + rest + '곳';
    }
    return parts.join(', ');
  }
  function hasDangerOn(entry) {
    return !!entry.changes && entry.changes.some(function (c) { return c[2] && isDanger(c[0], c[1]); });
  }

  function renderHistory() {
    var list = D.history[current] || [];
    var el = $('#history-list');
    el.innerHTML = list.slice(0, 4).map(function (h) {
      var who = memberById(h.by);
      var name = who ? who.name : '';
      if (h.by === meId) name += '(' + COPY.me + ')';
      var time = h.fresh ? '<time datetime="' + h.at + '">' + COPY.justNow + '</time>' : timeTag(h.at, true);
      return '<li class="rp-history__item"><span class="rp-history__what">' +
        (hasDangerOn(h) ? '<span class="ds-badge ds-badge--warning">위험</span>' + SEP : '') + '<span>' + esc(summary(h)) + '</span></span>' +
        '<span class="rp-history__meta">' + esc(name) + ' · ' + time + '</span></li>';
    }).join('');
    el.hidden = !list.length;
    $('#history-empty').hidden = !!list.length;
  }

  /* ---------- 역할 고르기 ---------- */

  function setRole(id, opts) {
    opts = opts || {};
    current = id;
    draft = copyMap(saved[id]);
    justSaved = false;
    DS.banner.dismiss('#banner-save');
    $$('.rp-role-btn', roleListEl).forEach(function (b) {
      if (b.getAttribute('data-role') === id) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
    renderRoleHead();
    renderMatrix();
    renderHistory();
    updateBar();
    DS.url.set({ role: id === D.defaultRole ? null : id });
    if (opts.focus) {
      var btn = $('.rp-role-btn[data-role="' + id + '"]', roleListEl);
      if (btn) btn.focus();
    }
    if (!opts.silent) DS.announce(roleById(id).name + ' 역할을 골랐어요');
  }

  roleListEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.rp-role-btn');
    if (!btn) return;
    var id = btn.getAttribute('data-role');
    if (id === current) return;
    if (isDirty()) { askLeave({ type: 'role', role: id }, btn); return; }
    setRole(id);
  });

  /* ---------- 떠나기 전 확인(PAT-FORM-11) ---------- */

  var dlgLeave = $('#dlg-leave');
  var pendingLeave = null;
  var leaving = false;

  function askLeave(p, opener) {
    pendingLeave = p;
    var labels = p.type === 'link' ? COPY.leaveExit : COPY.leaveMove;
    $('#leave-discard').textContent = labels[0];
    $('#leave-save').textContent = labels[1];
    $('#dlg-leave-desc').textContent = roleById(current).name + ' 역할에서 바꾼 ' + changes().length + '곳이 사라져요.';
    DS.dialog.open(dlgLeave, opener);
  }

  function proceed(p) {
    if (p.type === 'role') setRole(p.role, { focus: true });
    else if (p.type === 'tab') DS.tabs.select(p.tab, { focus: true, force: true });
    else if (p.type === 'members') goMembers(p.filter);
    else { leaving = true; location.href = p.href; }
  }

  dlgLeave.addEventListener('close', function () {
    var p = pendingLeave;
    pendingLeave = null;
    if (!p) return;
    var choice = dlgLeave.returnValue;
    if (choice === 'discard') {
      draft = copyMap(saved[current]);
      syncCells();
      updateBar();
      DS.banner.dismiss('#banner-save');
      clearPresetState();
      // 대화상자가 연 요소로 포커스를 돌려준 뒤에 옮긴다
      setTimeout(function () { proceed(p); }, 0);
    } else if (choice === 'save') {
      save(btnSave, function (ok) { if (ok) proceed(p); });
    }
  });

  tabs.addEventListener('ds:tabbeforechange', function (e) {
    if (e.detail.from && e.detail.from.id === 'tab-roles' && isDirty()) {
      e.preventDefault();
      askLeave({ type: 'tab', tab: e.detail.tab }, e.detail.from);
    }
  });

  doc.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || leaving || a.id === 'role-members-link' || a.getAttribute('href').charAt(0) === '#' || a.target === '_blank') return;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || !isDirty()) return;
    e.preventDefault();
    e.stopPropagation();
    askLeave({ type: 'link', href: a.href }, a);
  }, true);

  window.addEventListener('beforeunload', function (e) {
    if (leaving || !isDirty()) return;
    e.preventDefault();
    e.returnValue = '';
  });

  /* ---------- 구성원 ---------- */

  function memberMatches(m, q, f) {
    if (f && m.role !== f) return false;
    if (!q) return true;
    return m.name.toLowerCase().indexOf(q) >= 0 || m.email.toLowerCase().indexOf(q) >= 0;
  }

  function seenValue(s) { return s ? s.replace(/\D/g, '') : '0'; }

  function roleCell(m, isMe) {
    var r = roleById(m.role);
    if (readOnly || isMe) return '<span>' + esc(r.name) + '</span>';
    return '<span class="ds-select rp-role-select"><select id="mr-' + m.id + '" data-member="' + m.id + '" aria-label="' + esc(m.name) + ' 역할">' +
      ROLES.map(function (x) { return '<option value="' + x.id + '"' + (x.id === m.role ? ' selected' : '') + '>' + esc(x.name) + '</option>'; }).join('') +
      '</select></span>';
  }

  function memberRow(m) {
    var isMe = m.id === meId;
    var r = roleById(m.role);
    return '<tr data-id="' + m.id + '">' +
      '<th scope="row" class="ds-table__primary" data-value="' + esc(m.name) + '"><span class="rp-person"><span class="ds-avatar" aria-hidden="true">' + esc(m.name.charAt(0)) + '</span>' +
      '<span class="rp-person__text"><span class="rp-person__name">' + esc(m.name) + (isMe ? SEP + '<span class="ds-badge">' + COPY.me + '</span>' : '') + '</span>' +
      SEP + '<span class="ds-table__sub">' + esc(m.email) + '</span></span></span></th>' +
      '<td data-label="역할" data-value="' + ROLES.indexOf(r) + '">' + roleCell(m, isMe) + '</td>' +
      '<td data-label="마지막 접속" class="rp-seen" data-value="' + seenValue(m.seen) + '">' + timeTag(m.seen) + '</td></tr>';
  }

  function resultText(n, q, f) {
    var base = (f ? roleById(f).name + ' ' : '') + n + '명';
    return q ? '‘' + q + '’ 찾기 결과 ' + base : base;
  }

  var announceTimer = 0;

  function renderMembers(opts) {
    opts = opts || {};
    var qRaw = qInput.value.trim();
    var q = qRaw.toLowerCase();
    var f = filterSel.value;
    var rows = D.members.filter(function (m) { return memberMatches(m, q, f); });
    var emptyTitle = (qRaw ? '‘' + qRaw + '’에 맞는' : (f ? roleById(f).name + ' 역할을 가진' : '조건에 맞는')) + ' 구성원이 없어요';
    if (rows.length) {
      memberBody.innerHTML = rows.map(memberRow).join('');
    } else {
      memberBody.innerHTML = '<tr class="ds-table__empty"><td colspan="3"><div class="ds-empty ds-empty--inline">' +
        '<p class="ds-empty__title">' + esc(emptyTitle) + '</p>' +
        '<p class="ds-empty__text">' + COPY.noResultText + '</p>' +
        '<div class="ds-empty__actions"><button class="ds-btn" type="button" id="btn-clear">' + COPY.clear + '</button></div></div></td></tr>';
    }
    var th = $('th[aria-sort]', $('#member-table'));
    if (th && rows.length) DS.sort.apply('#member-table', $('.ds-sort', th).getAttribute('data-key'), th.getAttribute('aria-sort'), { fromUrl: true, silent: true });
    var text = resultText(rows.length, qRaw, f);
    $('#member-result').textContent = text;
    DS.url.set({ q: qRaw || null, filter: f || null });
    // 결과 수는 입력이 멈춘 뒤 한 번만 읽는다(한 문장)
    clearTimeout(announceTimer);
    if (opts.announce) {
      announceTimer = setTimeout(function () { DS.announce(rows.length ? text + '이에요' : emptyTitle); }, opts.delay || 0);
    }
  }

  function renderFilterOptions() {
    filterSel.innerHTML = '<option value="">' + COPY.allRoles + '</option>' +
      ROLES.map(function (r) { return '<option value="' + r.id + '">' + esc(r.name) + '</option>'; }).join('');
  }

  qInput.addEventListener('input', function () { renderMembers({ announce: true, delay: 600 }); });
  filterSel.addEventListener('change', function () { renderMembers({ announce: true, delay: 150 }); });

  memberBody.addEventListener('click', function (e) {
    if (e.target.closest('#btn-clear')) {
      qInput.value = '';
      filterSel.value = '';
      renderMembers({ announce: true });
      qInput.focus();
    }
  });

  /* 역할 주기 — 바로 적용. 관리자는 먼저 묻고, 권한이 줄면 배너에 되돌리기 */
  var dlgAdmin = $('#dlg-admin');
  var pendingAdmin = null;

  memberBody.addEventListener('change', function (e) {
    var sel = e.target.closest('select[data-member]');
    if (!sel) return;
    var m = memberById(sel.getAttribute('data-member'));
    if (!m) return;
    if (sel.value === 'admin') {
      pendingAdmin = { m: m, select: sel, prev: m.role };
      $('#dlg-admin-title').textContent = m.name + ' 님에게 관리자 역할을 줄까요?';
      DS.dialog.open(dlgAdmin, sel);
      return;
    }
    assignRole(m, sel.value, sel);
  });

  dlgAdmin.addEventListener('close', function () {
    var p = pendingAdmin;
    pendingAdmin = null;
    if (!p) return;
    if (dlgAdmin.returnValue === 'confirm') assignRole(p.m, 'admin', p.select);
    else p.select.value = p.prev;
  });

  function refreshCounts() {
    renderRoleList();
    renderRoleHead();
  }

  function assignRole(m, roleId, select, opts) {
    opts = opts || {};
    var prev = m.role;
    if (prev === roleId) return;
    m.role = roleId;
    refreshCounts();
    request('role', 600).then(function () {
      DS.banner.dismiss('#banner-role');
      var r = roleById(roleId);
      var title = m.name + ' 님에게 ' + r.name + ' 역할을 줬어요';
      if (!opts.undo && permCount(roleId) < permCount(prev)) {
        banner({
          id: 'banner-role',
          tone: 'success',
          title: title,
          text: '권한이 줄었어요. 실수였다면 되돌려 주세요.',
          actions: [{ label: COPY.undo, onClick: function () { undoRole(m, prev); } }],
          focusNext: '#mr-' + m.id,
          scroll: false
        });
      } else {
        DS.announce(opts.undo ? m.name + ' 님의 역할을 다시 ' + josa(r.name, ['으로', '로']) + ' 바꿨어요' : title);
      }
      // 행을 다시 그리지 않는다(고르기 상자의 포커스가 남게). 정렬 값만 맞춘다
      var cell = select && select.closest('td');
      if (cell) cell.setAttribute('data-value', ROLES.indexOf(r));
    }, function () {
      m.role = prev;
      refreshCounts();
      if (select && select.isConnected) select.value = prev;
      banner({
        id: 'banner-role',
        tone: 'danger',
        title: COPY.roleFail,
        text: m.name + ' 님은 그대로 ' + josa(roleById(prev).name, ['이에요', '예요']) + '. 다시 골라 주세요.',
        focusNext: '#mr-' + m.id
      });
    });
  }

  function undoRole(m, prev) {
    setTimeout(function () {
      var sel = doc.getElementById('mr-' + m.id);
      if (sel) { sel.value = prev; sel.focus(); }
      assignRole(m, prev, sel, { undo: true });
    }, 0);
  }

  /* 역할 머리의 "구성원 n명 보기" — 구성원 보기로 옮겨 그 역할로 거른다 */
  function goMembers(roleId) {
    qInput.value = '';
    filterSel.value = roleId;
    DS.tabs.select($('#tab-members'), { force: true });
    renderMembers();
    filterSel.focus();
    DS.announce(resultText(membersOf(roleId).length, '', roleId) + '이에요');
  }

  $('#role-members-link').addEventListener('click', function (e) {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (isDirty()) { askLeave({ type: 'members', filter: current }, e.currentTarget); return; }
    goMembers(current);
  });

  /* ---------- 불러오기 · 불러오기 실패 ---------- */

  var bodies = [$('#roles-body'), $('#members-body')];
  var rpBody = $('#rp-body');

  function setLoading(on) {
    bodies.forEach(function (el) {
      if (on) DS.skeleton.show(el);
      else DS.skeleton.hide(el);
    });
    if (on) rpBody.setAttribute('aria-busy', 'true');
    else rpBody.removeAttribute('aria-busy');
  }

  function showLoadError() {
    bodies.forEach(function (el) { el.hidden = true; });
    $('#load-error').hidden = false;
  }

  $('#btn-reload').addEventListener('click', function (e) {
    var btn = e.currentTarget;
    DS.announce(COPY.loading);
    var timer = DS.loadingTimer(function () {
      $('#load-error').hidden = true;
      setLoading(true);
      $('#view-tabs [aria-selected="true"]').focus();
    }, function () {
      $('#load-error').hidden = true;
      setLoading(false);
      DS.url.set({ state: null });
      DS.announce(COPY.loaded);
    });
    withBusy(btn, request('load', 1300)).then(function () { timer.stop(); });
  });

  /* ---------- 스크롤하는 표 틀 ---------- */

  /* 표 틀은 넘칠 때만 Tab 으로 멈추는 스크롤 영역이 된다(넘치지 않으면 멈출 일이 없다).
     권한 표가 옆으로 넘치면 "옆으로 밀면 … 열까지" 안내를 보인다(넘친 열이 있다는 단서) */
  var scrollWraps = $$('[data-rp-scroll]');
  function syncScrollable() {
    scrollWraps.forEach(function (w) {
      if (!w.getClientRects().length) return;
      var over = w.scrollWidth > w.clientWidth + 1 || w.scrollHeight > w.clientHeight + 1;
      if (over) w.setAttribute('tabindex', '0');
      else if (doc.activeElement !== w) w.removeAttribute('tabindex');
    });
    // 권한 표가 옆으로 넘치면 처음 화면(왼쪽 끝)에서 다 보이지 않는 열 이름을 재서 안내에 넣는다
    var mw = $('#matrix-wrap');
    if (!mw.getClientRects().length) return;
    var over = mw.scrollWidth > mw.clientWidth + 1;
    if (over) {
      var hiddenCols = $$('#matrix thead th', mw).slice(1).filter(function (th) {
        return th.offsetLeft + th.offsetWidth > mw.clientWidth + 1;
      }).map(function (th) { return th.querySelector('[id^="col-"]').textContent; });
      $('#matrix-more-cols').textContent = hiddenCols.join('·');
      over = hiddenCols.length > 0;
    }
    $('#matrix-more').hidden = !over;
  }
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () { syncScrollable(); });
    scrollWraps.forEach(function (w) { ro.observe(w); ro.observe($('table', w)); });
  }
  tabs.addEventListener('ds:tabchange', function () { syncScrollable(); });

  /* ---------- 시작 ---------- */

  function applyPreset() {
    D.dirtyPreset.forEach(function (c) { draft[c[0] + '.' + c[1]] = c[2]; });
    syncCells();
    updateBar();
  }

  DS.ready(function () {
    if (readOnly) {
      var admin = D.members.filter(function (m) { return m.role === 'admin' && m.id !== meId; })[0];
      $('#perm-notice-text').textContent = '역할과 권한을 바꾸려면 관리자 ' + admin.name + ' 님에게 요청해 주세요.';
      $('#perm-notice').hidden = false;
    }

    renderFilterOptions();
    var f = params.get('filter');
    if (f && roleById(f)) filterSel.value = f;
    qInput.value = params.get('q') || '';

    renderRoleList();
    renderRoleHead();
    renderMatrix();
    renderHistory();
    updateBar();
    renderMembers();
    syncScrollable();

    var editableNow = editable(roleById(current));
    if (PRESET && editableNow) applyPreset();
    if (state === 'save-fail' && editableNow && DS.url.get('view') !== 'members') showSaveFail(changes().length);
    if (state === 'preview' && editableNow) btnPreview.click();
    if (state === 'saving' && editableNow) save(btnSave);
    if (state === 'leave' && editableNow) {
      var other = $('.rp-role-btn[data-role="agent"]', roleListEl);
      askLeave({ type: 'role', role: 'agent' }, other);
    }
    if (state === 'confirm' && editableNow) {
      var input = doc.getElementById('p-orders-delete');
      if (input && !input.checked) askDanger('orders', 'delete', input);
    }
    if (state === 'loading') {
      setLoading(true);
      DS.announce(COPY.loading);
    }
    if (state === 'error') showLoadError();

    // 나중에 보일 문구도 page subset 에 있는지 본다
    DS.fonts.ensure(Object.keys(COPY).map(function (k) { return typeof COPY[k] === 'string' ? COPY[k] : ''; }).join(''));
  });
})();
