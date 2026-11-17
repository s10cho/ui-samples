/*
 * 설정 샘플 — 탭 4개(계정·알림·보안·팀), 저장 안 한 변경 확인, 즉시 적용 스위치, 위험 구역.
 * 가상 데이터는 js/data.js(window.SETTINGS_DATA)에만 있다. 서버 요청은 타이머로 흉내 낸다.
 *
 * 상태 쿼리
 *   ?tab=account|notifications|security|team
 *   ?state=loading       불러오는 중(멈춰 둔다)
 *   ?state=error         불러오기 실패
 *   ?state=dirty         계정 탭에 저장하지 않은 변경 2곳
 *   ?state=save-fail     계정 저장이 막 실패한 모습. 알림 스위치·역할·방해 금지 시간도 첫 시도는 실패한다
 *   ?state=no-permission 팀 탭 읽기 전용
 *   ?state=empty         팀을 삭제한 뒤(속한 팀 없음)
 *   ?state=dialog        팀 삭제 확인 대화상자
 */
(function () {
  'use strict';

  var doc = document;
  var D = window.SETTINGS_DATA;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var params = new URLSearchParams(location.search);
  var state = params.get('state') || '';

  /* ---------- 문구 ---------- */

  var TAB_NAMES = { account: '계정', notifications: '알림', security: '보안', team: '팀' };
  var ZONES = [
    ['Asia/Seoul', '서울 (UTC+09:00)', 9],
    ['Asia/Tokyo', '도쿄 (UTC+09:00)', 9],
    ['Asia/Singapore', '싱가포르 (UTC+08:00)', 8],
    ['Europe/London', '런던 (UTC+00:00)', 0],
    ['America/New_York', '뉴욕 (UTC-05:00)', -5]
  ];
  var ROLES = { owner: '소유자', admin: '관리자', editor: '편집자', viewer: '보기만' };
  var RANK = { viewer: 1, editor: 2, admin: 3, owner: 4 };
  var NOTIFY = { assign: '새 상담 배정', mention: '나를 언급한 메모', digest: '매일 아침 요약', security: '보안 알림' };
  var CHANNEL = { mail: '메일', app: '앱', sms: '문자' };

  var COPY = {
    saved: '방금 저장했어요',
    nothing: '바꾼 내용이 없어요',
    nothingToRevert: '되돌릴 변경이 없어요',
    reloading: '불러오는 중…',
    dirty: function (n) { return '저장 안 한 변경 ' + n + '곳'; },
    reverted: '변경을 되돌렸어요',
    retry: '다시 저장',
    connection: '연결이 잠시 끊겼어요. 바꾼 내용은 그대로 있어요.',
    saveFail: { account: '계정 정보를 저장하지 못했어요', dnd: '방해 금지 시간을 저장하지 못했어요' },
    savedAnnounce: { account: '계정 정보를 저장했어요', dnd: '방해 금지 시간을 저장했어요' },
    nameEmpty: '이름을 입력해 주세요.',
    nameLong: '이름은 20자까지 쓸 수 있어요.',
    emailEmpty: '이메일 주소를 입력해 주세요.',
    emailBad: '이메일 주소에 @와 도메인을 넣어 주세요.',
    emailDup: '이미 팀에 있는 주소예요.',
    sameTime: '시작과 끝 시각이 같아요. 다른 시각을 골라 주세요.',
    codeBad: '숫자 6자리를 입력해 주세요.',
    teamNameBad: '팀 이름이 달라요.',
    leaveMove: ['변경 버리고 이동', '저장하고 이동'],
    leaveExit: ['변경 버리고 나가기', '저장하고 나가기'],
    loading: '설정을 불러오는 중이에요',
    loaded: '설정을 불러왔어요',
    loadFail: '설정을 불러오지 못했어요',
    loadFailText: '연결이 잠시 끊겼어요. 다시 불러오면 이어서 바꿀 수 있어요.',
    reload: '다시 불러오기',
    notifyFail: '알림 설정을 바꾸지 못했어요',
    roleFail: '역할을 바꾸지 못했어요',
    undo: '되돌리기',
    tfaOn: '2단계 인증을 켰어요',
    tfaOff: '2단계 인증을 껐어요',
    noOther: '로그인 중인 다른 기기가 없어요',
    invited: '초대 보냄',
    notYet: '아직 접속 안 함',
    newTeam: '새 팀',
    me: '나'
  };

  /* 받침에 맞는 조사 — 한글이 아니면 받침 없는 쪽(로·를·가·는) */
  function josa(word, pair) {
    var c = String(word).charCodeAt(String(word).length - 1);
    if (!(c >= 0xac00 && c <= 0xd7a3)) return word + pair[1];
    var jong = (c - 0xac00) % 28;
    if (pair[0] === '으로') return word + (jong === 0 || jong === 8 ? '로' : '으로');
    return word + (jong ? pair[0] : pair[1]);
  }

  /* ---------- 서버 흉내 ---------- */

  // ?state=save-fail 이면 종류마다 첫 시도만 실패한다(다시 하면 성공)
  var failOnce = { account: false, dnd: state === 'save-fail', notify: state === 'save-fail', role: state === 'save-fail' };

  function request(kind, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (failOnce[kind]) { failOnce[kind] = false; reject(new Error(kind)); }
        else resolve();
      }, delay);
    });
  }

  /* 버튼 로딩 — kit 의 DS.busy 가 300ms 뒤 "저장 중…"을 보이고, 보였으면 400ms 를 채운다.
     처리 중 다시 누르기·다시 보내기는 kit 이 data-ds-pending 으로 막는다.
     돌려준 Promise 는 버튼이 원래 글자로 돌아온 뒤 끝난다. 결과(글·배너·대화상자 닫기)는 그 뒤에 보인다 */
  function withBusy(btn, promise) {
    DS.busy(btn, true);
    return promise.then(function (v) {
      return DS.busy(btn, false).then(function () { return v; });
    }, function (err) {
      return DS.busy(btn, false).then(function () { throw err; });
    });
  }

  /* ---------- 시각 ---------- */

  function zoneOffset(tz) {
    for (var i = 0; i < ZONES.length; i++) if (ZONES[i][0] === tz) return ZONES[i][2];
    return 9;
  }

  /* 서울 시각 문자열을 지금 고른 시간대로 옮긴다 */
  function shift(s) {
    var p = s.split(/[-T:]/).map(Number);
    var t = Date.UTC(p[0], p[1] - 1, p[2], p[3], p[4]) + (zoneOffset(D.me.tz) - 9) * 3600000;
    return new Date(t);
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function clock(d) {
    var h = d.getUTCHours();
    return (h < 12 ? '오전 ' : '오후 ') + (h % 12 || 12) + ':' + pad(d.getUTCMinutes());
  }
  function day(d) { return (d.getUTCMonth() + 1) + '월 ' + d.getUTCDate() + '일'; }
  function iso(d) { return d.toISOString().slice(0, 16); }

  function relative(s) {
    if (!s) return COPY.notYet;
    var d = shift(s);
    var now = shift(D.now);
    var dayMs = 86400000;
    var a = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    var b = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    if (now - d < 10 * 60000) return '지금';
    if (a === b) return '오늘 ' + clock(d);
    if (b - a === dayMs) return '어제 ' + clock(d);
    return day(d);
  }

  function hourLabel(h) {
    return (h < 12 ? '오전 ' : '오후 ') + (h % 12 || 12) + ':00';
  }

  /* ---------- 공통 요소 ---------- */

  var body = $('#settings-body');
  var tablist = $('#settings-tabs');

  function currentTab() { return $('[role="tab"][aria-selected="true"]', tablist); }
  function tabName(tab) { return TAB_NAMES[tab.getAttribute('data-value')]; }

  function errorEl(input) {
    return doc.getElementById(input.getAttribute('data-error-id') || input.id + '-error');
  }

  function setFieldError(input, text) {
    var err = errorEl(input);
    if (text) {
      input.setAttribute('aria-invalid', 'true');
      if (err) { $('span', err).textContent = text; err.hidden = false; }
    } else {
      input.removeAttribute('aria-invalid');
      if (err) { $('span', err).textContent = ''; err.hidden = true; }
    }
  }

  /* ---------- 저장 폼(계정 · 방해 금지 시간) ---------- */

  var forms = {};

  function FormCtl(form, opts) {
    var self = this;
    this.form = form;
    this.kind = form.getAttribute('data-form');
    this.tab = form.closest('[role="tabpanel"]').id.replace('tp-', '');
    this.opts = opts;
    this.saveBtn = $('[data-save]', form);
    this.resetBtn = $('[data-reset]', form);
    this.status = $('[data-status]', form);
    this.fields = $$('[name]', form);
    this.saved = opts.load();
    this.write(this.saved);
    this.touched = {};

    // 처리 중 다시 보내기는 kit(DS.busy 의 data-ds-pending)이 submit 단계에서 막는다
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      self.save();
    });
    form.addEventListener('input', function (e) { self.onEdit(e.target); });
    form.addEventListener('change', function (e) { self.onEdit(e.target); });
    // 칸을 떠날 때 검사한다(PAT-FORM-01)
    form.addEventListener('focusout', function (e) {
      if (e.target.name && self.touched[e.target.name]) self.check(e.target.name);
    });
    this.resetBtn.addEventListener('click', function () {
      self.discard();
      DS.announce(COPY.reverted);
      self.saveBtn.focus();
    });
  }

  FormCtl.prototype.read = function () {
    var o = {};
    this.fields.forEach(function (el) { o[el.name] = el.type === 'checkbox' ? el.checked : el.value; });
    return o;
  };

  FormCtl.prototype.write = function (values) {
    this.fields.forEach(function (el) {
      if (!(el.name in values)) return;
      if (el.type === 'checkbox') el.checked = !!values[el.name];
      else el.value = values[el.name];
    });
    if (this.opts.sync) this.opts.sync(this);
  };

  FormCtl.prototype.dirtyCount = function () {
    var now = this.read();
    var saved = this.saved;
    return Object.keys(now).filter(function (k) { return String(now[k]) !== String(saved[k]); }).length;
  };

  FormCtl.prototype.setStatus = function (tone, text) {
    this.status.setAttribute('data-tone', tone || '');
    this.status.innerHTML = text ? (tone === 'saved' ? DS.icon('success') : '') + '<span>' + esc(text) + '</span>' : '';
  };

  FormCtl.prototype.refresh = function () {
    var n = this.dirtyCount();
    // "변경 되돌리기"는 늘 자리를 지킨다. 바꾼 것이 없으면 이유를 툴팁으로 보이는 비활성
    if (n) {
      this.resetBtn.removeAttribute('aria-disabled');
      this.resetBtn.removeAttribute('data-ds-tip');
    } else {
      this.resetBtn.setAttribute('aria-disabled', 'true');
      this.resetBtn.setAttribute('data-ds-tip', COPY.nothingToRevert);
    }
    if (n) this.setStatus('dirty', COPY.dirty(n));
    else if (this.status.getAttribute('data-tone') === 'dirty') this.setStatus('', '');
    markTab(this.tab);
  };

  FormCtl.prototype.onEdit = function (el) {
    if (!el.name) return;
    this.touched[el.name] = true;
    if (this.opts.sync) this.opts.sync(this);
    // 오류가 난 칸은 입력할 때마다 다시 검사해 맞으면 지운다(PAT-FORM-02)
    var errNames = this.opts.errorsOf ? this.opts.errorsOf(el.name) : [el.name];
    var self = this;
    errNames.forEach(function (name) {
      var f = self.form.elements[name];
      if (f && f.getAttribute('aria-invalid') === 'true') self.check(name);
    });
    this.refresh();
  };

  /* 칸 하나를 검사한다. 오류가 있으면 포커스를 옮길 칸을 돌려준다.
     r.fields 는 함께 오류가 되는 칸들(방해 금지 시간의 시작·끝) — 오류 글은 묶음 아래 한 곳에 쓴다 */
  FormCtl.prototype.check = function (name) {
    var r = this.opts.validate(this.read(), name);
    if (!r) return null;
    var self = this;
    var targets = (r.fields || [r.field]).map(function (n) { return self.form.elements[n]; });
    targets.forEach(function (t) { setFieldError(t, r.error); });
    return r.error ? targets[0] : null;
  };

  FormCtl.prototype.checkAll = function () {
    var self = this;
    var first = null;
    this.fields.forEach(function (el) {
      var bad = self.check(el.name);
      if (bad && !first) first = bad;
    });
    return first;
  };

  FormCtl.prototype.discard = function () {
    var self = this;
    this.write(this.saved);
    this.fields.forEach(function (el) { if (errorEl(el)) setFieldError(el, ''); });
    this.touched = {};
    this.setStatus('', '');
    DS.banner.dismiss('#banner-' + self.kind);
    this.refresh();
    clearPresetState();
  };

  /* 미리 바꿔 둔 상태(?state=dirty·save-fail)를 사용자가 정리하면 주소에서도 지운다 */
  function clearPresetState() {
    if (/^(dirty|save-fail)$/.test(DS.url.get('state') || '') && !dirtyIn().length) DS.url.set({ state: null });
  }

  /* 저장한다. after(성공 여부) 를 부른다 */
  FormCtl.prototype.save = function (after) {
    var self = this;
    var bad = this.checkAll();
    if (bad) {
      bad.focus();
      if (after) after(false);
      return;
    }
    if (!this.dirtyCount()) {
      this.setStatus('', COPY.nothing);
      DS.announce(COPY.nothing);
      if (after) after(true);
      return;
    }
    var values = this.read();
    withBusy(this.saveBtn, request(this.kind, 800)).then(function () {
      self.saved = values;
      if (self.opts.commit) self.opts.commit(values);
      var banner = doc.getElementById('banner-' + self.kind);
      if (banner) DS.banner.dismiss(banner);
      self.touched = {};
      self.refresh();
      self.setStatus('saved', COPY.saved);
      DS.announce(COPY.savedAnnounce[self.kind]);
      clearPresetState();
      if (after) after(true);
    }, function () {
      showSaveFail(self);
      if (after) after(false);
    });
  };

  function showSaveFail(ctl) {
    DS.banner.show({
      id: 'banner-' + ctl.kind,
      tone: 'danger',
      title: COPY.saveFail[ctl.kind],
      text: COPY.connection,
      actions: [{ label: COPY.retry, onClick: function () { setTimeout(function () { ctl.save(); }, 0); } }],
      focusNext: '#' + ctl.form.id + ' [data-save]'
    });
  }

  /* 탭의 저장 안 한 변경 점(kit .ds-tab__dot) — 점 자리는 늘 두고 보이기만 바꾼다(탭 폭이 밀리지 않게) */
  function markTab(tabKey) {
    var tab = doc.getElementById('tab-' + tabKey);
    if (!$('.ds-tab__dot', tab)) return;
    var dirty = dirtyIn(tabKey).length > 0;
    tab.toggleAttribute('data-dirty', dirty);
    $('[data-dirty-sr]', tab).hidden = !dirty;
  }

  function dirtyIn(tabKey) {
    return Object.keys(forms).map(function (k) { return forms[k]; }).filter(function (c) {
      return (!tabKey || c.tab === tabKey) && c.dirtyCount() > 0;
    });
  }

  /* ---------- 계정 ---------- */

  function setupAccount() {
    var tz = $('#acc-tz');
    tz.innerHTML = ZONES.map(function (z) { return '<option value="' + z[0] + '">' + esc(z[1]) + '</option>'; }).join('');
    forms.account = new FormCtl($('#form-account'), {
      load: function () { return { name: D.me.name, email: D.me.email, lang: D.me.lang, tz: D.me.tz }; },
      validate: function (v, name) {
        if (name === 'name') {
          var n = v.name.trim();
          return { field: 'name', error: !n ? COPY.nameEmpty : (n.length > 20 ? COPY.nameLong : '') };
        }
        if (name === 'email') {
          var e = v.email.trim();
          return { field: 'email', error: !e ? COPY.emailEmpty : (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? '' : COPY.emailBad) };
        }
        return null;
      },
      commit: function (v) {
        var zoneChanged = v.tz !== D.me.tz;
        D.me.name = v.name.trim();
        D.me.email = v.email.trim();
        D.me.lang = v.lang;
        D.me.tz = v.tz;
        var me = memberById(D.me.id);
        if (me) { me.name = D.me.name; me.email = D.me.email; }
        renderMembers();
        if (zoneChanged) renderLogins();
      }
    });
  }

  /* ---------- 알림 ---------- */

  var notifyVersion = {};

  function setupNotify() {
    $$('[data-notify]').forEach(function (input) {
      var k = input.getAttribute('data-notify').split('.');
      input.checked = !!D.notify[k[0]][k[1]];
    });

    $('#notify-table').addEventListener('change', function (e) {
      var input = e.target.closest('[data-notify]');
      if (!input) return;
      var key = input.getAttribute('data-notify');
      var k = key.split('.');
      var on = input.checked;
      var version = (notifyVersion[key] || 0) + 1;
      notifyVersion[key] = version;
      var label = NOTIFY[k[0]] + ' ' + CHANNEL[k[1]] + ' 알림';
      request('notify', 600).then(function () {
        if (notifyVersion[key] !== version) return;
        D.notify[k[0]][k[1]] = on;
        var banner = doc.getElementById('banner-notify');
        if (banner) DS.banner.dismiss(banner);
        DS.announce(josa(label, ['을', '를']) + (on ? ' 켰어요' : ' 껐어요'));
      }, function () {
        if (notifyVersion[key] !== version) return;
        // 즉시 적용이 실패하면 이전 값으로 되돌리고 알린다(PAT-SET-06)
        input.checked = !on;
        DS.banner.show({
          id: 'banner-notify',
          tone: 'danger',
          title: COPY.notifyFail,
          text: josa(label, ['을', '를']) + ' 원래대로 두었어요. 다시 눌러 주세요.',
          focusNext: '[data-notify="' + key + '"]'
        });
      });
    });

    var hours = '';
    for (var h = 0; h < 24; h++) hours += '<option value="' + h + '">' + hourLabel(h) + '</option>';
    $$('[data-time]').forEach(function (s) { s.innerHTML = hours; });

    forms.dnd = new FormCtl($('#form-dnd'), {
      load: function () { return { enabled: D.dnd.enabled, start: D.dnd.start, end: D.dnd.end, weekend: D.dnd.weekend }; },
      // 쓰기를 끄면 시각을 고를 수 없다
      sync: function (ctl) {
        var on = ctl.form.elements.enabled.checked;
        ['start', 'end', 'weekend'].forEach(function (n) { ctl.form.elements[n].disabled = !on; });
        if (!on) { setFieldError(ctl.form.elements.start, ''); setFieldError(ctl.form.elements.end, ''); }
      },
      // 시작·끝은 둘이 함께 맞아야 하는 묶음이다. 오류는 두 칸 모두에 걸고 글은 묶음 아래 한 번 쓴다
      errorsOf: function (name) { return name === 'start' || name === 'end' || name === 'enabled' ? ['start'] : [name]; },
      validate: function (v, name) {
        if (name !== 'start' && name !== 'end') return null;
        return { fields: ['start', 'end'], error: v.enabled && v.start === v.end ? COPY.sameTime : '' };
      },
      commit: function (v) {
        D.dnd = { enabled: v.enabled, start: v.start, end: v.end, weekend: v.weekend };
      }
    });
  }

  /* ---------- 보안 ---------- */

  function renderTfa() {
    var on = D.tfa.on;
    var badge = $('#tfa-badge');
    badge.className = 'ds-badge' + (on ? ' ds-badge--success' : '');
    badge.textContent = on ? '켜짐' : '꺼짐';
    var meta = $('#tfa-meta');
    meta.hidden = !on;
    meta.textContent = on ? day(shift(D.tfa.since)) + '에 켰어요.' : '';
    var btn = $('#btn-tfa');
    btn.className = 'ds-btn' + (on ? '' : ' ds-btn--primary');
    btn.textContent = on ? '2단계 인증 끄기…' : '2단계 인증 켜기…';
  }

  function activeOthers() {
    return D.logins.filter(function (l) { return l.status === 'active'; });
  }

  function renderLogins() {
    $('#login-body').innerHTML = D.logins.map(function (l) {
      var d = shift(l.at);
      // 성공은 글자로만, 눈여겨볼 실패만 배지로(같은 배지가 줄마다 반복되지 않게)
      var result = l.ok
        ? '<span class="settings-muted">성공</span>'
        : '<span class="settings-result"><span class="ds-badge ds-badge--danger">실패</span><span class="ds-table__sub">' + esc(l.reason) + '</span></span>';
      var status = {
        current: '<span class="ds-badge">지금 이 기기</span>',
        active: '<span class="ds-badge ds-badge--info">로그인 중</span>',
        ended: '<span class="settings-muted">로그아웃함</span>',
        none: '<span class="settings-muted" aria-hidden="true">—</span><span class="ds-sr-only">없음</span>'
      }[l.status];
      return '<tr>' +
        '<td data-label="시각" class="settings-when"><time datetime="' + iso(d) + '">' + day(d) + ' ' + clock(d) + '</time></td>' +
        '<td class="ds-table__primary settings-lead" data-label="기기">' + esc(l.device) + '</td>' +
        '<td data-label="위치">' + esc(l.place) + '</td>' +
        '<td data-label="결과">' + result + '</td>' +
        '<td data-label="상태">' + status + '</td>' +
        '</tr>';
    }).join('');

    var others = activeOthers();
    var count = $('#session-count');
    var btn = $('#btn-signout');
    count.innerHTML = others.length ? '로그인 중인 다른 기기 <strong>' + others.length + '곳</strong>' : '';
    count.hidden = !others.length;
    if (others.length) {
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('data-ds-tip');
    } else {
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('data-ds-tip', COPY.noOther);
    }
  }

  function setupSecurity() {
    $('#tfa-key').textContent = D.tfaKey;
    renderTfa();
    renderLogins();

    var dlgOn = $('#dlg-tfa-on');
    var dlgOff = $('#dlg-tfa-off');
    var code = $('#tfa-code');
    var formTfa = $('#form-tfa');

    $('#btn-tfa').addEventListener('click', function (e) {
      if (D.tfa.on) { DS.dialog.open(dlgOff, e.currentTarget); return; }
      formTfa.reset();
      setFieldError(code, '');
      DS.dialog.open(dlgOn, e.currentTarget);
    });

    function codeOk() { return /^\d{6}$/.test(code.value.replace(/\s/g, '')); }
    code.addEventListener('blur', function () { if (code.value) setFieldError(code, codeOk() ? '' : COPY.codeBad); });
    code.addEventListener('input', function () { if (code.getAttribute('aria-invalid') === 'true') setFieldError(code, codeOk() ? '' : COPY.codeBad); });

    formTfa.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = $('[type="submit"]', formTfa);
      if (!codeOk()) { setFieldError(code, COPY.codeBad); code.focus(); return; }
      withBusy(btn, request('tfa', 800)).then(function () {
        D.tfa = { on: true, since: D.now };
        renderTfa();
        DS.dialog.close(dlgOn);
        DS.announce(COPY.tfaOn);
      });
    });

    $('#btn-tfa-off').addEventListener('click', function (e) {
      var btn = e.currentTarget;
      withBusy(btn, request('tfa', 700)).then(function () {
        D.tfa = { on: false, since: '' };
        renderTfa();
        DS.dialog.close(dlgOff);
        DS.announce(COPY.tfaOff);
      });
    });

    // 다른 기기 로그아웃 — 대화상자 문구는 열 때 채운다
    var dlgOut = $('#dlg-signout');
    dlgOut.addEventListener('ds:dialog-open', function () {
      var others = activeOthers();
      $('#dlg-signout-title').textContent = '다른 기기 ' + others.length + '곳에서 로그아웃할까요?';
      $('#dlg-signout-desc').textContent = others.map(function (l) { return l.device; }).join(', ') +
        '에서 로그아웃돼요. 이 기기는 로그인한 채로 남아요.';
    });
    $('#btn-signout-go').addEventListener('click', function (e) {
      var btn = e.currentTarget;
      var n = activeOthers().length;
      withBusy(btn, request('signout', 900)).then(function () {
        D.logins.forEach(function (l) { if (l.status === 'active') l.status = 'ended'; });
        renderLogins();
        DS.dialog.close(dlgOut);
        DS.announce('다른 기기 ' + n + '곳에서 로그아웃했어요');
      });
    });
  }

  /* ---------- 팀 ---------- */

  var readOnly = state === 'no-permission';

  function memberById(id) {
    for (var i = 0; i < D.members.length; i++) if (D.members[i].id === id) return D.members[i];
    return null;
  }

  function renderMembers() {
    undo = null;
    var bodyEl = $('#member-body');
    bodyEl.innerHTML = D.members.map(function (m) {
      var isMe = m.id === D.me.id;
      var name = m.invited && !m.name ? m.email : m.name;
      var person = '<span class="settings-person"><span class="ds-avatar" aria-hidden="true">' + esc(name.charAt(0).toUpperCase()) + '</span>' +
        '<span class="settings-person__text"><span class="settings-person__name">' + esc(name) +
        (isMe ? '<span class="ds-badge">' + COPY.me + '</span>' : '') + '</span>' +
        (m.name ? '<span class="ds-table__sub">' + esc(m.email) + '</span>' : '') + '</span></span>';
      var role;
      if (readOnly || m.role === 'owner' || isMe) {
        role = '<span>' + ROLES[m.role] + '</span>';
      } else {
        role = '<span class="settings-role-cell"><span class="ds-select settings-role"><select id="role-' + m.id + '" data-member="' + m.id + '" aria-label="' + esc(name) + ' 역할">' +
          ['admin', 'editor', 'viewer'].map(function (r) {
            return '<option value="' + r + '"' + (r === m.role ? ' selected' : '') + '>' + ROLES[r] + '</option>';
          }).join('') + '</select></span>' +
          '<button class="ds-btn ds-btn--sm settings-undo" type="button" data-undo="' + m.id + '" aria-label="' + esc(name) + ' 역할 되돌리기">' + COPY.undo + '</button></span>';
      }
      var seen = m.invited ? '<span class="ds-badge ds-badge--info">' + COPY.invited + '</span>' : '<span class="settings-when">' + relative(m.seen) + '</span>';
      return '<tr data-id="' + m.id + '">' +
        '<th scope="row" class="ds-table__primary">' + person + '</th>' +
        '<td data-label="역할">' + role + '</td>' +
        '<td data-label="마지막 접속">' + seen + '</td></tr>';
    }).join('');
    $('#member-count').textContent = D.members.length;
    $('#delete-count').textContent = D.members.length;
  }

  /* 팀 이름이 들어가는 글 — 팀 삭제 대화상자에만 쓴다.
     페이지 설명("내 계정과 알림, 보안, 팀 설정을 바꿔요.")에는 팀 이름을 넣지 않는다:
     불러오는 중·실패·팀 없음과 기준이 하나가 되고, 불러온 뒤 설명 줄 수가 바뀌어 아래가 밀리지 않는다 */
  function teamTexts() {
    var t = D.team ? D.team.name : '';
    if (!t) return;
    $('#dlg-delete-title').textContent = josa(t, ['을', '를']) + ' 삭제할까요?';
    $('#delete-name-hint').textContent = '확인하려면 ' + josa(t, ['을', '를']) + ' 똑같이 입력해 주세요.';
  }

  function showTeam(has) {
    $('#team-content').hidden = !has;
    $('#team-empty').hidden = has;
  }

  /* 팀을 지운 뒤(또는 ?state=empty) — 팀이 없으니 설명에서도 팀 이름을 뺀다 */
  function removeTeam() {
    D.team = null;
    D.members = D.members.filter(function (m) { return m.id === D.me.id; });
    showTeam(false);
    teamTexts();
  }

  /* 권한을 낮추면 그 행에 "되돌리기"를 둔다(PAT-SET-04). 다른 행을 바꾸면 사라진다.
     결과가 바뀐 행 바로 옆에 있어야 해서 배너가 아니라 행 안에 둔다.
     버튼 자리는 늘 잡아 두고(visibility) 보일 때만 data-shown 을 단다 — 나타나도 행이 밀리지 않게 */
  var undo = null; // { id, prev }

  function hideUndo() {
    $$('[data-undo]').forEach(function (b) { b.removeAttribute('data-shown'); });
    undo = null;
  }

  function setRole(m, role, select) {
    var prev = m.role;
    m.role = role;
    hideUndo();
    request('role', 600).then(function () {
      var title = m.name + ' 님의 역할을 ' + josa(ROLES[role], ['으로', '로']) + ' 바꿨어요';
      var fail = doc.getElementById('banner-role');
      if (fail) DS.banner.dismiss(fail);
      if (RANK[role] < RANK[prev]) {
        undo = { id: m.id, prev: prev };
        var btn = $('[data-undo="' + m.id + '"]');
        if (btn) btn.setAttribute('data-shown', '');
        DS.announce(title + '. 권한이 줄었어요. 옆의 되돌리기 버튼으로 되돌릴 수 있어요.');
      } else {
        DS.announce(title);
      }
    }, function () {
      m.role = prev;
      if (select && select.isConnected) select.value = prev;
      DS.banner.show({
        id: 'banner-role',
        tone: 'danger',
        title: COPY.roleFail,
        text: m.name + ' 님은 그대로 ' + ROLES[prev] + '예요. 다시 골라 주세요.',
        focusNext: '#role-' + m.id
      });
    });
  }

  function undoRole() {
    if (!undo) return;
    var m = memberById(undo.id);
    var prev = undo.prev;
    hideUndo();
    if (!m) return;
    m.role = prev;
    var select = doc.getElementById('role-' + m.id);
    if (select) { select.value = prev; select.focus(); }
    DS.announce(m.name + ' 님의 역할을 다시 ' + josa(ROLES[prev], ['으로', '로']) + ' 바꿨어요');
  }

  function setupTeam() {
    if (readOnly) {
      var roles = D.noPermission.roles;
      Object.keys(roles).forEach(function (id) { memberById(id).role = roles[id]; });
      var owner = D.members.filter(function (m) { return m.role === 'owner'; })[0];
      $('#team-notice-text').textContent = '역할을 바꾸거나 구성원을 초대하려면 팀 소유자 ' + owner.name + ' 님에게 요청해 주세요.';
      $('#team-notice').hidden = false;
      $('#btn-invite').hidden = true;
      $('#danger-zone').hidden = true;
      $('#roles-apply').hidden = true;
    }
    teamTexts();
    renderMembers();

    $('#member-body').addEventListener('click', function (e) {
      if (e.target.closest('[data-undo]')) undoRole();
    });
    $('#member-body').addEventListener('change', function (e) {
      var select = e.target.closest('select[data-member]');
      if (!select) return;
      var m = memberById(select.getAttribute('data-member'));
      if (m) setRole(m, select.value, select);
    });

    // 초대
    var dlgInvite = $('#dlg-invite');
    var formInvite = $('#form-invite');
    var email = $('#invite-email');
    $('#btn-invite').addEventListener('click', function () {
      formInvite.reset();
      setFieldError(email, '');
    }, true);
    function emailError() {
      var v = email.value.trim().toLowerCase();
      if (!v) return COPY.emailEmpty;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return COPY.emailBad;
      if (D.members.some(function (m) { return m.email.toLowerCase() === v; })) return COPY.emailDup;
      return '';
    }
    email.addEventListener('blur', function () { if (email.value) setFieldError(email, emailError()); });
    email.addEventListener('input', function () { if (email.getAttribute('aria-invalid') === 'true') setFieldError(email, emailError()); });
    formInvite.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = $('[type="submit"]', formInvite);
      var err = emailError();
      setFieldError(email, err);
      if (err) { email.focus(); return; }
      var address = email.value.trim();
      var role = $('#invite-role').value;
      withBusy(btn, request('invite', 800)).then(function () {
        D.members.push({ id: 'm' + (D.members.length + 1) + '-' + Date.now(), name: '', email: address, role: role, seen: '', invited: true });
        renderMembers();
        DS.dialog.close(dlgInvite);
        DS.announce(ROLES[role] + ' 초대 메일을 보냈어요. 구성원 ' + D.members.length + '명이에요.');
      });
    });

    // 팀 삭제 — 팀 이름을 똑같이 써야 버튼이 동작한다
    var dlgDelete = $('#dlg-delete');
    var formDelete = $('#form-delete');
    var nameInput = $('#delete-name');
    var deleteGo = $('#btn-delete-go');
    var deleted = false;
    function nameMatches() { return !!D.team && nameInput.value.trim() === D.team.name; }
    function syncDelete() {
      if (nameMatches()) deleteGo.removeAttribute('aria-disabled');
      else deleteGo.setAttribute('aria-disabled', 'true');
      if (nameInput.getAttribute('aria-invalid') === 'true' && nameMatches()) setFieldError(nameInput, '');
    }
    dlgDelete.addEventListener('ds:dialog-open', function () {
      formDelete.reset();
      setFieldError(nameInput, '');
      syncDelete();
      deleted = false;
    });
    nameInput.addEventListener('input', syncDelete);
    formDelete.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!nameMatches()) { setFieldError(nameInput, COPY.teamNameBad); nameInput.focus(); return; }
      var teamName = D.team.name;
      withBusy(deleteGo, request('delete', 900)).then(function () {
        deleted = true;
        removeTeam();
        DS.dialog.close(dlgDelete);
        DS.announce(josa(teamName, ['을', '를']) + ' 삭제했어요');
      });
    });
    // 닫힌 뒤 포커스 — kit 이 연 버튼으로 돌려주려다 숨어 있으면 빈 상태의 버튼으로 옮긴다
    dlgDelete.addEventListener('close', function () {
      if (deleted) setTimeout(function () { $('#btn-new-team').focus(); }, 0);
    });

    $('#btn-new-team').addEventListener('click', function () {
      D.team = { name: COPY.newTeam };
      D.members = [{ id: D.me.id, name: D.me.name, email: D.me.email, role: 'owner', seen: D.now }];
      teamTexts();
      renderMembers();
      showTeam(true);
      $('#h-members').focus();
      DS.announce(josa(COPY.newTeam, ['을', '를']) + ' 만들었어요');
    });
  }

  /* ---------- 탭 옮기기 · 나가기 전 확인(PAT-FORM-11) ---------- */

  var dlgLeave = $('#dlg-leave');
  var pending = null; // { type: 'tab'|'link', tab, href, ctls }
  var leaving = false;

  function describeDirty(ctls) {
    return ctls.map(function (c) { return TAB_NAMES[c.tab] + ' 탭에서 바꾼 ' + c.dirtyCount() + '곳'; }).join(', ') + '이 사라져요.';
  }

  function askLeave(p, opener) {
    pending = p;
    var labels = p.type === 'tab' ? COPY.leaveMove : COPY.leaveExit;
    $('#leave-discard').textContent = labels[0];
    $('#leave-save').textContent = labels[1];
    $('#dlg-leave-desc').textContent = describeDirty(p.ctls);
    DS.dialog.open(dlgLeave, opener);
  }

  function proceed(p) {
    if (p.type === 'tab') DS.tabs.select(p.tab, { focus: true, force: true });
    else { leaving = true; location.href = p.href; }
  }

  function saveAll(ctls, done) {
    var list = ctls.slice();
    (function next() {
      var c = list.shift();
      if (!c) { done(true); return; }
      c.save(function (ok) { if (ok) next(); else done(false); });
    })();
  }

  dlgLeave.addEventListener('close', function () {
    var p = pending;
    pending = null;
    if (!p) return;
    var choice = dlgLeave.returnValue;
    if (choice === 'discard') {
      p.ctls.forEach(function (c) { c.discard(); });
      proceed(p);
    } else if (choice === 'save') {
      saveAll(p.ctls, function (ok) { if (ok) proceed(p); });
    }
  });

  function guardTab(target, opener) {
    var cur = currentTab();
    if (!target || target === cur) return false;
    var ctls = dirtyIn(cur.getAttribute('data-value'));
    if (!ctls.length) return false;
    askLeave({ type: 'tab', tab: target, ctls: ctls }, opener || cur);
    return true;
  }

  function setupGuards() {
    // 탭을 바꾸기 전에(클릭·화살표 모두) kit 이 보내는 취소 가능한 이벤트
    tablist.addEventListener('ds:tabbeforechange', function (e) {
      if (guardTab(e.detail.tab, e.detail.from)) e.preventDefault();
    });

    // 옆 메뉴·머리줄 링크로 나갈 때
    doc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || leaving || a.getAttribute('href').charAt(0) === '#' || a.target === '_blank') return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
      var ctls = dirtyIn();
      if (!ctls.length) return;
      e.preventDefault();
      e.stopPropagation();
      askLeave({ type: 'link', href: a.href, ctls: ctls }, a);
    }, true);

    // 창 닫기·새로고침은 브라우저 기본 확인
    window.addEventListener('beforeunload', function (e) {
      if (leaving || !dirtyIn().length) return;
      e.preventDefault();
      e.returnValue = '';
    });
  }

  /* 탭이 바뀌면 문서 제목을 바꾼다(고른 탭을 탭 줄 안으로 끌어오는 일은 kit 이 한다) */
  function onTab(tab) {
    doc.title = tabName(tab) + ' — 설정';
  }

  /* ---------- 불러오기 · 불러오기 실패 ---------- */

  /* 스켈레톤 — 최종 배치의 모든 칸을 그대로 그린다(DESIGN.md "스켈레톤은 최종 배치의 모든 칸").
     탭 패널 내용을 복제해 같은 클래스(ds-table--stack·settings-matrix·ds-card--danger …)를 그대로 쓰고,
     글자는 회색 막대로, 입력·버튼·스위치·배지는 회색 면으로 바꾼다. 그래서 폭마다(쌓은 카드 포함)
     행 수·행 높이·열 위치·도구 줄·위험 구역 한 줄 배치·방해 금지 칸 배치가 내용과 같다.
     복제본은 inert + aria-hidden 이고, id·연결 속성·스크립트 고리를 지워 실제 요소와 겹치지 않는다 */
  var SK_DROP = ['href', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-label',
    'data-ds-tip', 'data-ds-dialog', 'data-notify', 'data-member', 'data-undo', 'data-save', 'data-reset',
    'data-status', 'data-form', 'data-time', 'data-error-id', 'data-busy-label', 'tabindex'];

  function skeletonOf(real) {
    var sk = real.cloneNode(true);
    sk.classList.add('settings-skeleton');
    sk.setAttribute('aria-hidden', 'true');
    sk.inert = true;
    [sk].concat($$('*', sk)).forEach(function (el) {
      SK_DROP.forEach(function (a) { el.removeAttribute(a); });
      // id·for 는 "sk-" 를 붙여 실제 요소와 겹치지 않게 하고 라벨 연결은 남긴다
      if (el.id) el.id = 'sk-' + el.id;
      if (el.htmlFor) el.htmlFor = 'sk-' + el.htmlFor;
    });
    // 글자 마디를 막대로 — 글자 폭만큼 회색, 글자는 투명(줄바꿈 자리도 같다)
    var walker = doc.createTreeWalker(sk, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim() || n.parentNode.closest('select, option, textarea, svg')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    texts.forEach(function (t) {
      var bar = doc.createElement('span');
      bar.className = 'settings-sk-text';
      t.parentNode.replaceChild(bar, t);
      bar.appendChild(t);
    });
    return sk;
  }

  function panelBody(panel) { return $(':scope > .settings-panel__body:not(.settings-skeleton)', panel); }

  function setLoading(on) {
    $$('[role="tabpanel"]', body).forEach(function (panel) {
      var real = panelBody(panel);
      var old = $(':scope > .settings-skeleton', panel);
      if (on && !old) panel.insertBefore(skeletonOf(real), real);
      if (!on && old) old.remove();
      real.hidden = on;
    });
    if (on) body.setAttribute('aria-busy', 'true');
    else body.removeAttribute('aria-busy');
  }

  /* 불러오기 실패 — 닫을 수 없는 배너에 "다시 불러오기". 누르면 버튼을 처리 중으로 바꾸고,
     스켈레톤은 DS.loadingTimer 로(0.3초 뒤 보이고 0.4초 유지) 보인 뒤 내용으로 바꾼다.
     스켈레톤이 보이는 순간 배너를 닫는다 — 스켈레톤과 내용이 같은 자리에 오게(배너가 나중에 닫히며 내용이 밀리지 않게) */
  function showLoadError() {
    body.hidden = true;
    DS.banner.show({
      id: 'banner-load',
      tone: 'danger',
      title: COPY.loadFail,
      text: COPY.loadFailText,
      dismissible: false,
      actions: [{ label: COPY.reload, primary: true, onClick: function (banner) { reload(banner); return false; } }]
    });
  }

  function reload(banner) {
    var btn = $('.ds-banner__actions .ds-btn', banner);
    btn.setAttribute('data-busy-label', COPY.reloading);
    DS.announce(COPY.loading);
    var focusTab = { focusNext: '#settings-tabs [aria-selected="true"]' };
    var timer = DS.loadingTimer(function () {
      body.hidden = false;
      setLoading(true);
      DS.banner.dismiss(banner, focusTab);
    }, function () {
      DS.url.set({ state: null });
      body.hidden = false;
      setLoading(false);
      teamTexts();
      if (banner.isConnected) DS.banner.dismiss(banner, focusTab);
      DS.announce(COPY.loaded);
    });
    withBusy(btn, request('load', 1300)).then(function () { timer.stop(); });
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    setupAccount();
    setupNotify();
    setupSecurity();
    setupTeam();
    setupGuards();

    tablist.addEventListener('ds:tabchange', function (e) { onTab(e.detail.tab); });

    // 팀 탭 상태는 탭을 주지 않아도 팀 탭으로 연다
    if (/^(no-permission|empty|dialog)$/.test(state) && !params.get('tab')) DS.tabs.select($('#tab-team'));
    onTab(currentTab());

    if (state === 'dirty' || state === 'save-fail') {
      var acc = forms.account;
      acc.write({ name: D.dirtyPreset.name, tz: D.dirtyPreset.tz });
      acc.touched = { name: true, tz: true };
      acc.refresh();
      if (state === 'save-fail') showSaveFail(acc);
    }
    if (state === 'empty') removeTeam();
    if (state === 'loading') {
      setLoading(true);
      DS.announce(COPY.loading);
    }
    if (state === 'error') showLoadError();
    if (state === 'dialog') DS.dialog.open($('#dlg-delete'), $('#btn-delete'));

    DS.fonts.ensure(Object.keys(COPY).map(function (k) { return typeof COPY[k] === 'string' ? COPY[k] : ''; }).join(''));
  });
})();
