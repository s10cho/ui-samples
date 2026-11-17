/*
 * 파일 관리자 — 폴더 오가기(빵부스러기), 목록 ↔ 격자, 정렬, 여러 개 고르기와 작업 줄,
 * 올리기(끌어 놓기 + 버튼, 흉내 진행률), 제자리 이름 바꾸기, 옮기기(폴더 고르기 대화상자), 지우기 → 되돌리기.
 * 데이터는 js/data.js 의 가상 파일(window.FM_DATA)이다. 서버 요청과 올리기는 타이머로 흉내 낸다.
 * 부품 동작(알림·배너·대화상자·정렬 머리·묶음 버튼·툴팁·작업 줄·스켈레톤·테마)은 kit 의 js/ds.js 가 맡는다.
 *
 * 상태 쿼리
 *   ?state=loading       스켈레톤에서 멈춘다
 *   ?state=empty         빈 폴더("새 프로젝트")를 연다
 *   ?state=error         불러오기 실패(결과 자리에 오류 상태)
 *   ?state=uploading     가상 파일 3개를 느리게 올린다
 *   ?state=upload-error  가상 파일 3개 중 1개가 60% 에서 끊긴다
 *   ?state=quota         저장 공간이 거의 찼다. 남은 공간보다 큰 파일은 올리지 못한다
 *   ?state=rename-dup    이름 바꾸기에서 같은 이름 오류를 띄운다
 *   ?state=move          파일 2개를 고른 채 옮기기 대화상자를 연다
 *   ?state=undo          파일 하나를 지우고 되돌리기 배너를 띄운다
 *   ?state=readonly      보기 권한만 있는 폴더("회계팀 공유")를 연다
 *   ?folder=<id>         폴더 · ?view=grid 격자 · ?sort=modified.desc 정렬
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
  function icon(name, cls) { return DS.iconEl(name, cls); }
  function srOnly(text) { return el('span', 'ds-sr-only', text); }

  var DATA = window.FM_DATA || { now: '2026-11-18T10:30', me: '', rootName: '내 파일', items: [], storage: { total: 1, otherNormal: 0, otherQuota: 0 }, sampleUploads: [], contact: {} };
  var STATE = new URLSearchParams(location.search).get('state') || '';
  // 흉내 지연 — 스켈레톤을 보이는 흉내 로딩은 1초를 넘게 둔다(DESIGN.md 「샘플 데이터」, STA-01)
  var LOAD_MS = 1300;
  var TICK_MS = 200;
  var MB = 1024 * 1024;
  var GB = 1024 * MB;
  var TODAY = DATA.now.slice(0, 10);
  var YESTERDAY = shiftDay(TODAY, -1);
  var SORT_KEYS = { name: 1, modified: 1, by: 1, size: 1 };
  var BAD_CHARS = /[\\/:*?"<>|]/;

  var COPY = {
    loading: '파일 목록을 불러오는 중이에요',
    errorTitle: '파일 목록을 불러오지 못했어요',
    errorText: '연결이 잠시 끊겼어요. 다시 불러오면 이 폴더를 그대로 보여 줘요.',
    reload: '다시 불러오기',
    emptyTitle: '이 폴더는 비어 있어요',
    emptyText: '파일을 여기에 끌어 놓거나 파일 올리기를 눌러 채워요.',
    emptyReadonly: '보기 권한만 있어 이 폴더에는 파일을 올릴 수 없어요.',
    upload: '파일 올리기',
    pickFirst: '항목을 먼저 골라 주세요',
    oneAtATime: '이름은 하나씩 바꿀 수 있어요',
    unselected: '고르기를 모두 풀었어요',
    newName: '새 이름',
    renameSave: '바꾸기',
    renameCancel: '취소',
    nameEmpty: '이름을 입력해 주세요.',
    nameBad: '이름에는 \\ / : * ? " < > | 를 쓸 수 없어요.',
    readonlyTitle: '보기 권한만 있어요',
    readonlyText: '이 폴더에 올리기·이름 바꾸기·옮기기·지우기를 하려면 편집 권한이 있어야 해요. 폴더 관리자 ' + (DATA.contact.readonlyOwner || '') + '에게 요청해 주세요.',
    readonlyBadge: '보기만',
    quotaTitle: '저장 공간이 거의 찼어요',
    dropBlocked: '이 폴더에는 올릴 수 없어요',
    moveLegendPick: '옮길 폴더를 골라 주세요.',
    moveRun: '옮기기',
    undo: '되돌리기',
    netFail: '연결이 끊겨 올리지 못했어요',
    quotaFail: '남은 공간보다 커서 올리지 못했어요',
    cancel: '취소',
    retry: '다시 시도',
    remove: '빼기',
    whyHere: '지금 폴더',
    whyPicked: '고른 폴더',
    whyInside: '고른 폴더 안',
    whyReadonly: '보기만 가능'
  };

  /* ---------- 상태 ---------- */

  var items = DATA.items.map(function (it) { return Object.assign({}, it); });
  var folder = 'root';
  var view = 'list';
  var sort = { key: 'name', dir: 'ascending' };
  var loaded = false;
  var failed = false;
  var failNextLoad = STATE === 'error';
  var selected = {};
  var editing = null; // { id, value, error, touched }
  var uploads = [];
  var uploadSeq = 0;
  var ticker = 0;
  var slowUploads = STATE === 'uploading';
  var failOnce = STATE === 'upload-error' && DATA.sampleUploads[1] ? (function () { var o = {}; o[DATA.sampleUploads[1].name] = true; return o; })() : {};
  var storageOther = STATE === 'quota' ? DATA.storage.otherQuota : DATA.storage.otherNormal;
  var lastAction = null;
  var moveIds = [];
  var moveDest = null;
  var dragDepth = 0;
  var firstLoad = true;

  var ui = {};

  /* ---------- 도우미 ---------- */

  var nf = new Intl.NumberFormat('ko-KR');
  var nf1 = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 1 });

  function shiftDay(iso, days) {
    var p = iso.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]) + days * 86400000);
    return d.toISOString().slice(0, 10);
  }

  /* 파일 크기 — 1,024 단위. "512바이트 · 12KB · 2.4MB · 128MB"(DESIGN.md 「파일 크기」) */
  function fmtSize(b) {
    if (b < 1024) return nf.format(b) + '바이트';
    var kb = b / 1024;
    if (Math.round(kb) < 1024) return nf.format(Math.round(kb)) + 'KB';
    var mb = kb / 1024;
    if (mb < 1023.95) return (mb >= 100 ? nf.format(Math.round(mb)) : nf1.format(mb)) + 'MB';
    var gb = mb / 1024;
    return (gb >= 100 ? nf.format(Math.round(gb)) : nf1.format(gb)) + 'GB';
  }

  /* 날짜 — 오늘은 시각만, 어제는 "어제 16:40", 올해는 "11월 3일", 다른 해는 "2025년 12월 30일" */
  function fmtDate(iso) {
    var d = iso.slice(0, 10);
    var t = iso.slice(11, 16);
    if (d === TODAY) return t;
    if (d === YESTERDAY) return '어제 ' + t;
    var p = d.split('-');
    var md = (+p[1]) + '월 ' + (+p[2]) + '일';
    return p[0] === TODAY.slice(0, 4) ? md : p[0] + '년 ' + md;
  }

  function timeEl(iso) {
    var t = el('time', null, fmtDate(iso));
    t.dateTime = iso;
    return t;
  }

  /* 조사 — 마지막 글자(한글 받침, 숫자·영문 읽는 소리)로 고른다. pair: "을/를" "이/가" "으로/로" "과/와" */
  var DIGIT_END = { 0: 'ㅇ', 1: 'ㄹ', 3: 'ㅁ', 6: 'ㄱ', 7: 'ㄹ', 8: 'ㄹ' };
  var LETTER_END = { l: 'ㄹ', m: 'ㅁ', n: 'ㄴ', r: 'ㄹ' };
  function finalSound(word) {
    var s = String(word).replace(/[\s'"’”)\]]+$/, '');
    var ch = s.charAt(s.length - 1);
    var code = ch.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      var jong = (code - 0xAC00) % 28;
      return jong === 0 ? '' : (jong === 8 ? 'ㄹ' : 'x');
    }
    if (/[0-9]/.test(ch)) return DIGIT_END[ch] || '';
    if (/[a-z]/i.test(ch)) return LETTER_END[ch.toLowerCase()] || '';
    return '';
  }
  function josa(word, pair) {
    var p = pair.split('/');
    var f = finalSound(word);
    if (p[0] === '으로') return f && f !== 'ㄹ' ? '으로' : '로';
    return f ? p[0] : p[1];
  }
  function q(name) { return '‘' + name + '’'; }
  function qj(name, pair) { return q(name) + josa(name, pair); }

  function byId(id) {
    for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
    return null;
  }
  function isFolder(id) { return id === 'root' || !!(byId(id) && byId(id).type === 'folder'); }
  function folderName(id) {
    if (id === 'root') return DATA.rootName;
    var f = byId(id);
    return f ? f.name : '';
  }
  function childrenOf(id) { return items.filter(function (it) { return it.parent === id; }); }
  function readonlyFolder(id) { var f = byId(id); return !!(f && f.readonly); }
  function canEdit() { return !readonlyFolder(folder); }
  function pathTo(id) {
    var list = [];
    var cur = id;
    while (cur && cur !== 'root') {
      var f = byId(cur);
      if (!f) break;
      list.unshift(f);
      cur = f.parent;
    }
    return list;
  }
  function descendants(id) {
    var out = [];
    childrenOf(id).forEach(function (c) {
      out.push(c);
      if (c.type === 'folder') out = out.concat(descendants(c.id));
    });
    return out;
  }
  function selectable(it) { return canEdit() && !it.readonly; }
  function selectedIds() { return Object.keys(selected).filter(function (id) { return selected[id]; }); }

  function fileBytes() { return items.reduce(function (s, it) { return s + (it.size || 0); }, 0); }
  function usedBytes() { return storageOther + fileBytes(); }
  function reservedBytes() {
    return uploads.reduce(function (s, u) { return s + (u.status === 'active' ? u.size : 0); }, 0);
  }
  function freeBytes() { return Math.max(0, DATA.storage.total - usedBytes() - reservedBytes()); }

  function countPhrase(list) {
    var f = list.filter(function (it) { return it.type === 'folder'; }).length;
    var g = list.length - f;
    if (f && g) return '폴더 ' + f + '개와 파일 ' + g + '개';
    return f ? '폴더 ' + f + '개' : '파일 ' + g + '개';
  }

  /* 다시 그려도 포커스를 잃지 않게 — data-fkey 가 같은 새 요소로 옮긴다(입력 칸은 커서 자리까지) */
  function keepFocus(fn) {
    var a = doc.activeElement;
    var key = a && a.getAttribute ? a.getAttribute('data-fkey') : null;
    var s = null;
    var e = null;
    if (key && a.tagName === 'INPUT' && a.type === 'text') { s = a.selectionStart; e = a.selectionEnd; }
    fn();
    if (!key) return;
    var b = doc.querySelector('[data-fkey="' + key + '"]');
    if (b && b !== a && b.offsetParent !== null) {
      b.focus({ preventScroll: true });
      if (s != null && b.setSelectionRange) b.setSelectionRange(s, e);
    }
  }

  function focusKey(key) {
    var b = doc.querySelector('[data-fkey="' + key + '"]');
    if (b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: 'nearest' }); return true; }
    return false;
  }

  /* ---------- 주소 ---------- */

  function readUrl() {
    var f = DS.url.get('folder');
    // ?state=empty·readonly 는 그 폴더를 연다. 폴더를 옮기면 주소에서 state 가 빠진다(뒤로 가면 다시 그 폴더)
    var st = DS.url.get('state');
    if (!f) f = st === 'empty' ? 'f-new' : (st === 'readonly' ? 'f-acct' : 'root');
    folder = isFolder(f) ? f : 'root';
    view = DS.url.get('view') === 'grid' ? 'grid' : 'list';
    var s = (DS.url.get('sort') || '').split('.');
    sort = SORT_KEYS[s[0]] ? { key: s[0], dir: s[1] === 'desc' ? 'descending' : 'ascending' } : { key: 'name', dir: 'ascending' };
  }

  /* ---------- 저장 공간 ---------- */

  function renderStorage() {
    var total = DATA.storage.total;
    var used = usedBytes();
    var pct = Math.min(100, used / total * 100);
    var left = Math.max(0, total - used);
    ui.storageValue.textContent = fmtSize(total) + ' 중 ' + fmtSize(used);
    ui.storageLeft.textContent = '남은 공간 ' + fmtSize(left);
    ui.storageTrack.setAttribute('aria-valuenow', String(Math.round(pct)));
    ui.storageTrack.setAttribute('aria-valuetext', fmtSize(total) + ' 중 ' + fmtSize(used) + ' 사용, 남은 공간 ' + fmtSize(left));
    ui.storageBar.style.setProperty('--ds-progress', pct.toFixed(1) + '%');
    ui.storage.toggleAttribute('data-tight', left < GB);
    // 공간이 모자라 실패한 올리기가 있으면 "다시 시도"를 보일지 다시 정한다
    if (uploads.some(function (u) { return u.status === 'failed' && u.reason === 'quota'; })) keepFocus(renderUploads);
    // 저장 공간 경고 배너가 떠 있으면 글만 맞춘다(같으면 다시 그리지 않아 배너 안 포커스를 지킨다)
    var banner = doc.getElementById('fm-quota');
    if (banner && banner.textContent.indexOf(quotaText()) < 0) showQuotaBanner(false);
  }

  function quotaText() {
    var total = DATA.storage.total;
    var used = usedBytes();
    return fmtSize(total) + ' 중 ' + fmtSize(used) + '를 썼어요. 남은 ' + fmtSize(Math.max(0, total - used)) + '보다 큰 파일은 올릴 수 없어요.';
  }

  function showQuotaBanner(announce) {
    DS.banner.show({ id: 'fm-quota', tone: 'warning', title: COPY.quotaTitle, text: quotaText(), focusNext: '#results-title', announce: announce !== false, scroll: false });
  }

  /* ---------- 머리 — 빵부스러기 · 폴더 이름 · 권한 ---------- */

  function renderHead(opts) {
    opts = opts || {};
    var name = folderName(folder);
    var path = pathTo(folder);
    ui.crumbs.textContent = '';
    // 지금 폴더는 아래 제목(h1)이 보인다. 빵부스러기에는 위 폴더만 둔다
    var trail = [{ id: 'root', name: DATA.rootName }].concat(path.slice(0, -1));
    if (folder !== 'root') {
      trail.forEach(function (f) {
        var li = el('li');
        var a = el('a', null, f.name);
        a.href = folderHref(f.id);
        a.setAttribute('data-folder', f.id);
        li.appendChild(a);
        ui.crumbs.appendChild(li);
      });
    }
    ui.crumbNav.hidden = folder === 'root';
    ui.title.textContent = name;
    ui.caption.textContent = q(name) + ' 폴더 항목';
    ui.navRoot.setAttribute('aria-current', folder === 'root' ? 'page' : 'true');
    ui.btnUpload.hidden = !canEdit();
    doc.title = name + ' — 파일 관리자 — 업무 화면 샘플';

    var ro = doc.getElementById('fm-readonly');
    if (!canEdit()) {
      DS.banner.show({ id: 'fm-readonly', tone: 'info', title: COPY.readonlyTitle, text: COPY.readonlyText, dismissible: false, announce: opts.announce !== false, scroll: false });
    } else if (ro) {
      DS.banner.dismiss(ro);
    }
  }

  function folderHref(id) {
    var p = new URLSearchParams();
    if (id !== 'root') p.set('folder', id);
    if (view === 'grid') p.set('view', 'grid');
    var s = DS.url.get('sort');
    if (s) p.set('sort', s);
    var qs = p.toString();
    return 'index.html' + (qs ? '?' + qs : '');
  }

  /* ---------- 목록 ---------- */

  function sortedChildren() {
    var list = childrenOf(folder);
    var sign = sort.dir === 'descending' ? -1 : 1;
    var byName = function (a, b) { return a.name.localeCompare(b.name, 'ko', { numeric: true }); };
    list.sort(function (a, b) {
      if (a.type !== b.type) return a.type === 'folder' ? -1 : 1; // 폴더가 늘 먼저
      var r = 0;
      if (sort.key === 'name') r = byName(a, b);
      else if (sort.key === 'modified') r = a.modified < b.modified ? -1 : (a.modified > b.modified ? 1 : 0);
      else if (sort.key === 'by') r = a.by.localeCompare(b.by, 'ko');
      else if (sort.key === 'size') r = (a.size || 0) - (b.size || 0);
      return r ? r * sign : byName(a, b);
    });
    return list;
  }

  function nameNode(it, cls) {
    if (it.type === 'folder') {
      var a = el('a', cls + '__link', it.name);
      a.href = folderHref(it.id);
      a.setAttribute('data-folder', it.id);
      a.setAttribute('data-fkey', 'open:' + it.id);
      return a;
    }
    return el('span', cls + '__text', it.name);
  }

  function metaNodes(parent, it) {
    if (it.type === 'folder') {
      parent.appendChild(doc.createTextNode('폴더'));
    } else {
      parent.appendChild(doc.createTextNode(fmtSize(it.size)));
    }
    parent.appendChild(srOnly(', '));
    var dot = el('span', null, ' · ');
    dot.setAttribute('aria-hidden', 'true');
    parent.appendChild(dot);
    parent.appendChild(timeEl(it.modified));
  }

  function checkbox(it) {
    var label = el('label', 'ds-hit');
    var input = el('input');
    input.type = 'checkbox';
    input.setAttribute('data-id', it.id);
    input.setAttribute('data-fkey', 'sel:' + it.id);
    input.setAttribute('aria-label', q(it.name) + ' 고르기');
    input.checked = !!selected[it.id];
    label.appendChild(input);
    return label;
  }

  /* 고를 수 없는 항목(보기 권한 폴더) — 고르기 칸 자리에 자물쇠. 뜻은 이름 옆 "보기만" 배지가 글로 전한다 */
  function lockMark(extra) {
    var span = el('span', 'fm-lock' + (extra ? ' ' + extra : ''));
    span.setAttribute('aria-hidden', 'true');
    span.appendChild(icon('lock'));
    return span;
  }

  function renameForm() {
    var form = el('form', 'fm-rename');
    form.noValidate = true;
    form.id = 'rename-form';
    var label = el('label', 'ds-field__label', COPY.newName);
    // 편집 줄이 행 아래(이름 칸 밖)에 있어도 어떤 항목을 고치는지 화면낭독기로 알 수 있게 원래 이름을 이름에 붙인다
    var cur = editing && byId(editing.id);
    if (cur) label.appendChild(el('span', 'ds-sr-only', ' (‘' + cur.name + '’)'));
    label.htmlFor = 'rename-input';
    var row = el('div', 'fm-rename__row');
    var input = el('input', 'ds-input');
    input.type = 'text';
    input.id = 'rename-input';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('enterkeyhint', 'done');
    input.size = 1; // 칸 폭은 CSS(flex)가 정한다 — 기본 20글자 폭이 좁은 표를 밀어내지 않게
    input.setAttribute('data-fkey', 'rename');
    input.value = editing.value;
    var save = el('button', 'ds-btn ds-btn--primary', COPY.renameSave);
    save.type = 'submit';
    save.setAttribute('data-fkey', 'rename-save');
    var cancel = el('button', 'ds-btn', COPY.renameCancel);
    cancel.type = 'button';
    cancel.id = 'rename-cancel';
    cancel.setAttribute('data-fkey', 'rename-cancel');
    row.appendChild(input);
    row.appendChild(save);
    row.appendChild(cancel);
    var err = el('p', 'ds-field__error');
    err.id = 'rename-error';
    err.appendChild(icon('error'));
    err.appendChild(el('span', null, editing.error));
    form.appendChild(label);
    form.appendChild(row);
    form.appendChild(err);
    applyRenameError(input, err, editing.error);
    return form;
  }

  function applyRenameError(input, err, msg) {
    err.hidden = !msg;
    err.lastChild.textContent = msg || '';
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', 'rename-error');
    } else {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }
  }

  function rowFor(it) {
    var tr = el('tr');
    tr.setAttribute('data-id', it.id);
    var tdSel = el('td', 'ds-table__select');
    if (selectable(it)) tdSel.appendChild(checkbox(it));
    else if (it.readonly) tdSel.appendChild(lockMark());
    tr.appendChild(tdSel);

    var th = el('th', 'fm-col-name');
    th.scope = 'row';
    var wrap = el('span', 'fm-name');
    wrap.appendChild(icon(it.type === 'folder' ? 'folder' : 'file'));
    var body = el('span', 'fm-name__body');
    body.appendChild(nameNode(it, 'fm-name'));
    if (it.readonly) body.appendChild(el('span', 'ds-badge', COPY.readonlyBadge));
    var meta = el('span', 'fm-name__meta');
    metaNodes(meta, it);
    body.appendChild(meta);
    wrap.appendChild(body);
    if (editing && editing.id === it.id) tr.classList.add('fm-row--editing');
    th.appendChild(wrap);
    tr.appendChild(th);

    var tdDate = el('td', 'fm-col-date');
    tdDate.appendChild(timeEl(it.modified));
    tr.appendChild(tdDate);
    tr.appendChild(el('td', 'fm-col-by', it.by));
    var tdSize = el('td', 'ds-num fm-col-size');
    tdSize.setAttribute('data-value', String(it.size || 0));
    if (it.type === 'folder') {
      var dash = el('span', null, '—');
      dash.setAttribute('aria-hidden', 'true');
      tdSize.appendChild(dash);
      tdSize.appendChild(srOnly('폴더'));
    } else {
      tdSize.textContent = fmtSize(it.size);
    }
    tr.appendChild(tdSize);
    return tr;
  }

  /* 이름 편집 줄 — 고친 항목 바로 아래 행 전체 폭에 둔다. 이름 칸 안에 두면 좁은 폭·큰 글자에서 버튼이 표 폭을 밀어낸다 */
  function editRowFor() {
    var tr = el('tr', 'fm-editrow');
    var td = el('td');
    td.colSpan = 5;
    td.appendChild(renameForm());
    tr.appendChild(td);
    return tr;
  }

  function cardFor(it) {
    var li = el('li', 'fm-card');
    li.setAttribute('data-id', it.id);
    if (selectable(it)) {
      var c = checkbox(it);
      c.classList.add('fm-card__check');
      li.appendChild(c);
    } else {
      li.appendChild(lockMark('fm-card__check'));
    }
    li.appendChild(icon(it.type === 'folder' ? 'folder' : 'file', 'fm-card__icon'));
    var name = el('div', 'fm-card__name');
    if (editing && editing.id === it.id) {
      name.appendChild(renameForm());
    } else {
      name.appendChild(nameNode(it, 'fm-name'));
      if (it.readonly) name.appendChild(el('span', 'ds-badge', COPY.readonlyBadge));
    }
    li.appendChild(name);
    var meta = el('p', 'fm-card__meta');
    meta.appendChild(el('span', null, it.type === 'folder' ? '폴더' : fmtSize(it.size)));
    meta.appendChild(timeEl(it.modified));
    li.appendChild(meta);
    return li;
  }

  function stateBlock(kind) {
    var box = el('div', 'ds-empty ds-empty--center' + (kind === 'error' ? ' ds-empty--error' : ''));
    box.appendChild(icon(kind === 'error' ? 'error' : 'folder', 'ds-empty__icon'));
    var acts = el('div', 'ds-empty__actions');
    var btn;
    if (kind === 'error') {
      box.appendChild(el('p', 'ds-empty__title', COPY.errorTitle));
      box.appendChild(el('p', 'ds-empty__text', COPY.errorText));
      btn = el('button', 'ds-btn', COPY.reload);
      btn.id = 'btn-reload';
      btn.setAttribute('data-fkey', 'reload');
    } else {
      box.appendChild(el('p', 'ds-empty__title', COPY.emptyTitle));
      box.appendChild(el('p', 'ds-empty__text', canEdit() ? COPY.emptyText : COPY.emptyReadonly));
      if (canEdit()) {
        // 빈 폴더에서는 머리의 "파일 올리기"를 숨기고 이 버튼 하나만 주 버튼으로 둔다(같은 버튼 두 개 금지)
        btn = el('button', 'ds-btn ds-btn--primary');
        btn.id = 'btn-empty-upload';
        btn.setAttribute('data-fkey', 'empty-upload');
        btn.appendChild(icon('upload'));
        btn.appendChild(doc.createTextNode(COPY.upload));
      }
    }
    if (btn) {
      btn.type = 'button';
      acts.appendChild(btn);
      box.appendChild(acts);
    }
    return box;
  }

  function renderList(opts) {
    opts = opts || {};
    var list = failed ? [] : sortedChildren();
    var n = list.length;
    var editable = canEdit();
    ui.results.setAttribute('data-view', view);
    // 보기 권한 표시는 클래스로 — kit 스켈레톤 복제가 data-* 를 지워 속성으로는 복제본에 걸리지 않는다
    ui.table.classList.toggle('fm-table--readonly', !editable);
    ui.selAll.disabled = !editable;

    // 개수
    // 불러오는 동안(스켈레톤 복제용 그리기 제외)과 실패 때는 개수를 쓰지 않는다 — 영역 이름이 "항목"이다
    if (failed || !(loaded || opts.forClone)) {
      ui.countN.textContent = '';
      ui.countMeta.textContent = '';
    } else {
      ui.countN.textContent = ' ' + n + '개';
      var f = list.filter(function (it) { return it.type === 'folder'; }).length;
      var parts = [];
      if (f) parts.push('폴더 ' + f + '개');
      if (n - f) parts.push('파일 ' + (n - f) + '개');
      ui.countMeta.textContent = parts.length > 1 ? parts.join(', ') : '';
    }

    var showState = failed || n === 0;
    ui.btnUpload.hidden = !editable || (!failed && n === 0);
    ui.state.hidden = !showState;
    ui.listView.hidden = showState || view !== 'list';
    ui.gridView.hidden = showState || view !== 'grid';
    ui.pick.hidden = showState;
    ui.selAllTbWrap.hidden = !editable;

    ui.rows.textContent = '';
    ui.gridView.textContent = '';
    ui.state.textContent = '';
    if (showState) {
      ui.state.appendChild(stateBlock(failed ? 'error' : 'empty'));
    } else if (view === 'list') {
      list.forEach(function (it) {
        ui.rows.appendChild(rowFor(it));
        if (editing && editing.id === it.id) ui.rows.appendChild(editRowFor());
      });
    } else {
      list.forEach(function (it) { ui.gridView.appendChild(cardFor(it)); });
    }

    // 지금 폴더에 없는 항목은 고르기에서 뺀다
    var here = {};
    list.forEach(function (it) { if (selectable(it)) here[it.id] = true; });
    Object.keys(selected).forEach(function (id) { if (!here[id]) delete selected[id]; });

    ui.sortSelect.value = sort.key + '.' + (sort.dir === 'descending' ? 'desc' : 'asc');
    ui.bar.hidden = showState || !editable;
    syncSelection();
  }

  function renderAll(opts) {
    renderHead(opts);
    keepFocus(renderList);
  }

  /* ---------- 고르기 · 작업 줄 ---------- */

  function syncSelection() {
    var ids = selectedIds();
    var n = ids.length;
    var boxes = $$('input[type="checkbox"][data-id]', view === 'list' ? ui.rows : ui.gridView);
    var total = boxes.length;
    boxes.forEach(function (b) { b.checked = !!selected[b.getAttribute('data-id')]; });
    [ui.selAll, ui.selAllTb].forEach(function (b) {
      b.checked = total > 0 && n === total;
      b.indeterminate = n > 0 && n < total;
    });

    ui.selCount.hidden = n === 0;
    ui.selCount.textContent = n + '개 고름';
    ui.btnUnselect.hidden = n === 0;
    setBtn(ui.btnRename, n === 1, n === 0 ? COPY.pickFirst : COPY.oneAtATime);
    setBtn(ui.btnMove, n > 0, COPY.pickFirst);
    setBtn(ui.btnDelete, n > 0, COPY.pickFirst);
    if (!ui.bar.hidden) DS.actionbar.set(ui.bar, n > 0);
    else DS.actionbar.set(ui.bar, false);
  }

  function setBtn(btn, on, reason) {
    if (on) {
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('data-ds-tip');
    } else {
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('data-ds-tip', reason);
    }
  }

  function selectAll(on) {
    sortedChildren().forEach(function (it) {
      if (!selectable(it)) return;
      if (on) selected[it.id] = true;
      else delete selected[it.id];
    });
    syncSelection();
    var n = selectedIds().length;
    DS.announce(on ? '항목 ' + n + '개를 모두 골랐어요' : COPY.unselected);
  }

  function clearSelection() {
    selected = {};
    syncSelection();
  }

  /* ---------- 폴더 오가기 ---------- */

  function openFolder(id, opts) {
    opts = opts || {};
    if (!isFolder(id)) id = 'root';
    editing = null;
    selected = {};
    folder = id;
    if (!opts.fromUrl) DS.url.set({ folder: id === 'root' ? null : id, state: null }, { push: true });
    renderHead({ announce: false });
    renderList();
    if (!loaded) return;
    ui.title.focus();
    var n = failed ? 0 : childrenOf(folder).length;
    var line = q(folderName(folder)) + ' 폴더를 열었어요. 항목 ' + n + '개가 있어요';
    if (!canEdit()) line += '. ' + COPY.readonlyTitle;
    DS.announce(line);
  }

  /* ---------- 불러오기 — 복제 스켈레톤(DESIGN.md 「스켈레톤」) ---------- */

  function load(opts) {
    opts = opts || {};
    loaded = false;
    ui.results.setAttribute('aria-busy', 'true');
    DS.announce(COPY.loading);
    // 스켈레톤으로 복제할 모양 — 가상 데이터로 한 번 그린다. 처음 불러올 때는 보이지 않게 자리만 잡고,
    // 다시 불러올 때는 0.3초 동안 지금 화면(오류 상태)을 그대로 둔다
    if (!opts.again) {
      failed = false;
      renderList();
      ui.body.classList.add('fm-pending');
    }
    var timer = DS.loadingTimer(function () {
      failed = false;
      renderList({ forClone: true }); // 복제본에는 개수 자리까지 그린다(내용이 온 뒤와 같은 폭)
      ui.body.classList.remove('fm-pending');
      DS.skeleton.show(ui.body);
      ui.countN.textContent = '';
      ui.countMeta.textContent = '';
    }, function () {
      DS.skeleton.hide(ui.body);
      ui.body.classList.remove('fm-pending');
      ui.results.removeAttribute('aria-busy');
      afterLoad(opts);
    });
    if (STATE === 'loading' && firstLoad) return;
    setTimeout(function () {
      loaded = true;
      failed = failNextLoad;
      failNextLoad = false;
      editing = null;
      renderList();
      timer.stop();
    }, LOAD_MS);
  }

  function afterLoad(opts) {
    var wasFirst = firstLoad;
    firstLoad = false;
    if (failed) {
      DS.announce(COPY.errorTitle, { assertive: true });
    } else {
      DS.announce('항목 ' + childrenOf(folder).length + '개를 불러왔어요');
    }
    if (opts.focusTitle && doc.activeElement === ui.results) {
      (failed ? $('#btn-reload') : ui.countTitle).focus();
    }
    if (wasFirst && !failed) runState();
  }

  /* 상태 쿼리 — 첫 불러오기가 끝난 뒤 그 장면을 만든다 */
  function runState() {
    if (STATE === 'uploading' || STATE === 'upload-error' || STATE === 'quota') {
      startUploads(DATA.sampleUploads.map(function (f) { return { name: f.name, size: f.size }; }));
    } else if (STATE === 'rename-dup') {
      selected = { 'd-week3': true };
      syncSelection();
      startRename('d-week3');
      var dup = byId('d-week2');
      if (dup) {
        ui.renameInput().value = dup.name;
        editing.value = dup.name;
        commitRename();
      }
    } else if (STATE === 'move') {
      selected = { 'd-week2': true, 'd-floor': true };
      syncSelection();
      openMove(ui.btnMove);
    } else if (STATE === 'undo') {
      selected = { 'd-contact': true };
      syncSelection();
      deleteSelected();
    }
  }

  /* ---------- 이름 바꾸기(제자리 편집) ---------- */

  ui.renameInput = function () { return doc.getElementById('rename-input'); };

  function startRename(id) {
    var it = byId(id);
    if (!it) return;
    editing = { id: id, value: it.name, error: '', touched: false };
    keepFocus(renderList);
    var input = ui.renameInput();
    if (!input) return;
    input.focus({ preventScroll: true });
    revealRename();
    var dot = it.name.lastIndexOf('.');
    if (it.type === 'file' && dot > 0) input.setSelectionRange(0, dot);
    else input.select();
  }

  /* 이름 편집 폼 전체(오류 글까지)가 붙은 머리줄·표 머리 아래, 붙은 작업 줄 위에 보이게 스크롤한다(A11Y-WCAG-06) */
  function revealRename() {
    var form = doc.getElementById('rename-form');
    if (!form) return;
    var ring = parseFloat(getComputedStyle(doc.documentElement).fontSize) * 0.25;
    var top = 0;
    var appTop = $('.ds-app__top');
    if (appTop && getComputedStyle(appTop).position === 'sticky') top = appTop.getBoundingClientRect().bottom;
    var head = ui.table.tHead;
    if (view === 'list' && head && head.offsetParent !== null && getComputedStyle(head.rows[0].cells[0]).position === 'sticky') {
      top = Math.max(top, head.getBoundingClientRect().bottom);
    }
    var bottom = ui.bar.hasAttribute('data-docked') ? ui.bar.getBoundingClientRect().top : window.innerHeight;
    var r = form.getBoundingClientRect();
    var dy = 0;
    if (r.bottom + ring > bottom) dy = r.bottom + ring - bottom;
    if (r.top - ring - dy < top) dy = r.top - ring - top; // 폼이 빈 자리보다 길면 위쪽(라벨·칸)을 먼저 보인다
    if (Math.abs(dy) >= 0.5) window.scrollBy(0, dy);
  }

  function validateName(v, id) {
    if (!v) return COPY.nameEmpty;
    if (BAD_CHARS.test(v)) return COPY.nameBad;
    var it = byId(id);
    var low = v.toLowerCase();
    var dup = childrenOf(it.parent).some(function (o) { return o.id !== id && o.name.toLowerCase() === low; });
    if (dup) return '이 폴더에 ' + qj(v, '이/가') + ' 이미 있어요. 다른 이름을 써 주세요.';
    return '';
  }

  function commitRename() {
    if (!editing) return;
    var input = ui.renameInput();
    var it = byId(editing.id);
    var v = input.value.trim();
    var err = validateName(v, editing.id);
    editing.touched = true;
    editing.value = input.value;
    editing.error = err;
    applyRenameError(input, $('#rename-error'), err);
    if (err) {
      DS.announce(err, { assertive: true });
      input.focus({ preventScroll: true });
      revealRename();
      return;
    }
    var id = editing.id;
    var old = it.name;
    editing = null;
    if (v !== old) it.name = v;
    renderList();
    focusKey('sel:' + id);
    if (v !== old) DS.announce(qj(old, '을/를') + ' ' + qj(v, '으로/로') + ' 바꿨어요');
  }

  function cancelRename() {
    if (!editing) return;
    var id = editing.id;
    editing = null;
    renderList();
    focusKey('sel:' + id);
  }

  /* ---------- 지우기 → 되돌리기 ---------- */

  function deleteSelected() {
    var ids = selectedIds();
    if (!ids.length) return;
    var top = ids.map(byId).filter(Boolean);
    var inner = [];
    top.forEach(function (it) { if (it.type === 'folder') inner = inner.concat(descendants(it.id)); });
    var gone = {};
    top.concat(inner).forEach(function (it) { gone[it.id] = true; });
    var removed = items.filter(function (it) { return gone[it.id]; });
    items = items.filter(function (it) { return !gone[it.id]; });
    if (editing && gone[editing.id]) editing = null;
    selected = {};
    lastAction = { type: 'delete', items: removed, topIds: ids, folder: folder };
    renderList();
    renderStorage();
    var title = top.length === 1 ? qj(top[0].name, '을/를') + ' 지웠어요' : countPhrase(top) + '를 지웠어요';
    ui.countTitle.focus();
    DS.banner.show({
      id: 'fm-result',
      tone: 'success',
      title: title,
      text: inner.length ? '폴더 안 항목 ' + inner.length + '개도 함께 지웠어요.' : '',
      actions: [{ label: COPY.undo, onClick: undo }],
      focusNext: '#results-title'
    });
  }

  function undo() {
    var act = lastAction;
    if (!act) return;
    lastAction = null;
    if (act.type === 'delete') items = items.concat(act.items);
    else act.moves.forEach(function (m) { var it = byId(m.id); if (it) it.parent = m.from; });
    var here = act.folder === folder;
    if (here) {
      selected = {};
      act.topIds.forEach(function (id) { selected[id] = true; });
    }
    renderList();
    renderStorage();
    var first = sortedChildren().filter(function (it) { return selected[it.id]; })[0];
    if (!(here && first && focusKey('sel:' + first.id))) ui.countTitle.focus();
    var names = act.topIds.map(byId).filter(Boolean);
    DS.announce(names.length === 1 ? qj(names[0].name, '을/를') + ' 되돌렸어요' : '항목 ' + names.length + '개를 되돌렸어요');
  }

  /* ---------- 옮기기(폴더 고르기 대화상자) ---------- */

  function folderTree() {
    var out = [{ id: 'root', name: DATA.rootName, depth: 0 }];
    function walk(pid, depth) {
      childrenOf(pid).filter(function (c) { return c.type === 'folder'; })
        .sort(function (a, b) { return a.name.localeCompare(b.name, 'ko', { numeric: true }); })
        .forEach(function (f) {
          out.push({ id: f.id, name: f.name, depth: depth, readonly: f.readonly });
          walk(f.id, depth + 1);
        });
    }
    walk('root', 1);
    return out;
  }

  function insidePicked(id) {
    var cur = byId(id);
    while (cur && cur.parent && cur.parent !== 'root') {
      if (moveIds.indexOf(cur.parent) >= 0) return true;
      cur = byId(cur.parent);
    }
    return false;
  }

  function openMove(opener) {
    moveIds = selectedIds();
    if (!moveIds.length) return;
    moveDest = null;
    var first = byId(moveIds[0]);
    ui.moveTitle.textContent = moveIds.length === 1 ? q(first.name) + ' 옮기기' : '항목 ' + moveIds.length + '개 옮기기';
    ui.moveList.textContent = '';
    var firstEnabled = null;
    folderTree().forEach(function (f) {
      var why = '';
      if (f.id === folder) why = COPY.whyHere;
      else if (moveIds.indexOf(f.id) >= 0) why = COPY.whyPicked;
      else if (f.id !== 'root' && insidePicked(f.id)) why = COPY.whyInside;
      else if (f.readonly) why = COPY.whyReadonly;
      var li = el('li', 'fm-tree__item');
      li.style.setProperty('--file-manager-depth', String(f.depth));
      var label = el('label', 'ds-check');
      var input = el('input');
      input.type = 'radio';
      input.name = 'move-dest';
      input.value = f.id;
      input.disabled = !!why;
      if (!why && !firstEnabled) firstEnabled = input;
      var name = el('span', 'fm-tree__name');
      name.appendChild(icon('folder'));
      name.appendChild(el('span', null, f.name));
      if (why) name.appendChild(el('span', 'fm-tree__why', '(' + why + ')'));
      label.appendChild(input);
      label.appendChild(name);
      li.appendChild(label);
      ui.moveList.appendChild(li);
    });
    if (firstEnabled) firstEnabled.setAttribute('data-ds-initial-focus', '');
    setMoveError('');
    ui.moveRun.textContent = COPY.moveRun;
    DS.dialog.open(ui.dlgMove, opener);
  }

  function setMoveError(msg) {
    ui.moveError.hidden = !msg;
    ui.moveErrorText.textContent = msg;
  }

  function runMove() {
    if (!moveDest) {
      setMoveError(COPY.moveLegendPick);
      DS.announce(COPY.moveLegendPick, { assertive: true });
      var r = $('input[name="move-dest"]:not(:disabled)', ui.moveList);
      if (r) r.focus();
      return;
    }
    var names = {};
    childrenOf(moveDest).forEach(function (c) { names[c.name.toLowerCase()] = true; });
    var clash = moveIds.map(byId).filter(function (it) { return it && names[it.name.toLowerCase()]; });
    if (clash.length) {
      var msg = q(folderName(moveDest)) + '에 같은 이름이 있어 옮길 수 없어요: ' + clash.map(function (c) { return c.name; }).join(', ') + '. 이름을 바꾼 뒤 옮겨 주세요.';
      setMoveError(msg);
      DS.announce(msg, { assertive: true });
      return;
    }
    var moves = moveIds.map(function (id) { var it = byId(id); return { id: id, from: it.parent }; });
    moves.forEach(function (m) { byId(m.id).parent = moveDest; });
    var top = moveIds.map(byId);
    var dest = folderName(moveDest);
    lastAction = { type: 'move', moves: moves, topIds: moveIds.slice(), folder: folder };
    if (editing && moveIds.indexOf(editing.id) >= 0) editing = null;
    selected = {};
    DS.dialog.close(ui.dlgMove, 'moved');
    renderList();
    DS.banner.show({
      id: 'fm-result',
      tone: 'success',
      title: (top.length === 1 ? qj(top[0].name, '을/를') : '항목 ' + top.length + '개를') + ' ' + qj(dest, '으로/로') + ' 옮겼어요',
      actions: [{ label: COPY.undo, onClick: undo }],
      focusNext: '#results-title'
    });
  }

  /* ---------- 올리기 — 흉내 진행률 ---------- */

  function uniqueName(parent, name, uid) {
    var taken = {};
    childrenOf(parent).forEach(function (c) { taken[c.name.toLowerCase()] = true; });
    uploads.forEach(function (u) { if (u.uid !== uid && u.folder === parent && u.status === 'active' && u.saveAs) taken[u.saveAs.toLowerCase()] = true; });
    if (!taken[name.toLowerCase()]) return name;
    var dot = name.lastIndexOf('.');
    var base = dot > 0 ? name.slice(0, dot) : name;
    var ext = dot > 0 ? name.slice(dot) : '';
    for (var i = 2; i < 1000; i++) {
      var cand = base + ' (' + i + ')' + ext;
      if (!taken[cand.toLowerCase()]) return cand;
    }
    return name;
  }

  function startUploads(files) {
    if (!files.length) return;
    if (!canEdit()) { DS.announce(COPY.dropBlocked); return; }
    // 앞서 끝난 줄은 비우고(실패한 줄은 남긴다) 새 줄을 더한다
    uploads = uploads.filter(function (u) { return u.status !== 'done'; });
    var batch = files.map(function (f) {
      return { uid: ++uploadSeq, name: f.name, size: f.size, folder: folder, status: 'queued', progress: 0, reason: '', saveAs: '' };
    });
    uploads = uploads.concat(batch);
    ui.uploads.hidden = false;
    batch.forEach(begin);
    renderUploads();
    DS.announce('파일 ' + batch.length + '개를 올리기 시작했어요');
    batch.forEach(function (u) { if (u.status === 'failed') announceFail(u); });
    checkDone();
  }

  function begin(u) {
    u.status = 'queued';
    u.progress = 0;
    u.reason = '';
    // 남은 공간 — 이미 올리는 중인 파일 몫을 뺀다(이 파일은 아직 셈에 들지 않는다)
    if (u.size > freeBytes()) {
      u.status = 'failed';
      u.reason = 'quota';
      u.saveAs = u.saveAs || u.name;
      return;
    }
    u.status = 'active';
    u.saveAs = uniqueName(u.folder, u.name, u.uid);
    var base = Math.min(7000, Math.max(1600, 1600 + u.size / (6 * MB) * 1000));
    u.duration = base * (slowUploads ? 10 : 1);
    u.started = Date.now();
    if (!ticker) ticker = setInterval(tick, TICK_MS);
  }

  function tick() {
    var now = Date.now();
    var any = false;
    uploads.forEach(function (u) {
      if (u.status !== 'active') return;
      var p = Math.min(1, (now - u.started) / u.duration);
      if (failOnce[u.name] && p >= 0.6) {
        delete failOnce[u.name];
        u.progress = 0.6;
        fail(u, 'network');
        return;
      }
      if (p >= 1) { finish(u); return; }
      any = true;
      u.progress = p;
      paintProgress(u);
    });
    if (!any && !uploads.some(function (u) { return u.status === 'active'; })) {
      clearInterval(ticker);
      ticker = 0;
    }
  }

  function paintProgress(u) {
    var li = ui.upList.querySelector('[data-uid="' + u.uid + '"]');
    if (!li) return;
    var pct = Math.floor(u.progress * 100);
    $('.ds-progress__value', li).textContent = pct + '%';
    var track = $('.ds-progress__track', li);
    track.setAttribute('aria-valuenow', String(pct));
    $('.ds-progress__bar', li).style.setProperty('--ds-progress', pct + '%');
  }

  function finish(u) {
    u.status = 'done';
    u.progress = 1;
    items.push({ id: 'up-' + u.uid, parent: u.folder, type: 'file', name: u.saveAs, size: u.size, modified: DATA.now, by: DATA.me });
    if (u.folder === folder && loaded && !failed) keepFocus(renderList);
    renderStorage();
    keepFocus(renderUploads);
    checkDone();
  }

  function fail(u, reason) {
    u.status = 'failed';
    u.reason = reason;
    keepFocus(renderUploads);
    announceFail(u);
    checkDone();
  }

  function announceFail(u) {
    DS.announce(qj(u.saveAs || u.name, '을/를') + ' 올리지 못했어요. ' + (u.reason === 'quota' ? '남은 공간보다 커요' : '연결이 끊겼어요'), { assertive: true });
  }

  function checkDone() {
    var active = uploads.filter(function (u) { return u.status === 'active'; }).length;
    renderUploadHead();
    if (active || !uploads.length) return;
    var done = uploads.filter(function (u) { return u.status === 'done'; }).length;
    var failedN = uploads.length - done;
    if (!failedN) DS.announce('파일 ' + done + '개를 올렸어요');
    else DS.announce(uploads.length + '개 중 ' + done + '개를 올렸어요. ' + failedN + '개는 올리지 못했어요');
  }

  function renderUploadHead() {
    var total = uploads.length;
    var active = uploads.filter(function (u) { return u.status === 'active'; }).length;
    var done = uploads.filter(function (u) { return u.status === 'done'; }).length;
    var failedN = total - active - done;
    var sum;
    if (active) sum = total + '개 중 ' + done + '개 끝남' + (failedN ? ' · ' + failedN + '개 실패' : '');
    else if (!failedN) sum = total + '개를 올렸어요';
    else sum = total + '개 중 ' + done + '개를 올렸어요. ' + failedN + '개는 올리지 못했어요';
    ui.upSum.textContent = sum;
    ui.upCancelAll.hidden = active < 2;
    ui.upClose.hidden = active > 0;
  }

  function uploadButton(text, action, u, sr) {
    var b = el('button', 'ds-btn ds-btn--sm', text);
    b.type = 'button';
    b.setAttribute('data-up', action);
    b.setAttribute('data-uid', String(u.uid));
    b.setAttribute('data-fkey', 'up-' + action + ':' + u.uid);
    b.appendChild(srOnly(sr));
    return b;
  }

  function renderUploads() {
    ui.upList.textContent = '';
    uploads.forEach(function (u) {
      var li = el('li', 'fm-up');
      li.setAttribute('data-uid', String(u.uid));
      li.setAttribute('data-status', u.status);
      var main = el('div', 'fm-up__main');
      var prog = el('div', 'ds-progress');
      var label = el('div', 'ds-progress__label');
      var nameEl = el('span', 'fm-up__name', u.saveAs || u.name);
      nameEl.id = 'up-name-' + u.uid;
      label.appendChild(nameEl);
      var pct = Math.floor(u.progress * 100);
      label.appendChild(el('span', 'ds-progress__value', u.status === 'failed' ? '' : pct + '%'));
      var track = el('div', 'ds-progress__track');
      track.setAttribute('role', 'progressbar');
      track.setAttribute('aria-labelledby', nameEl.id);
      track.setAttribute('aria-valuemin', '0');
      track.setAttribute('aria-valuemax', '100');
      track.setAttribute('aria-valuenow', String(pct));
      var bar = el('div', 'ds-progress__bar');
      bar.style.setProperty('--ds-progress', pct + '%');
      track.appendChild(bar);
      prog.appendChild(label);
      prog.appendChild(track);
      main.appendChild(prog);

      var where = q(folderName(u.folder)) + '에';
      var note = el('p', 'fm-up__note');
      if (u.status === 'failed') {
        note.classList.add('fm-up__note--error');
        note.appendChild(icon('error'));
        note.appendChild(el('span', null, u.reason === 'quota' ? COPY.quotaFail + ' (남은 공간 ' + fmtSize(freeBytes()) + ')' : COPY.netFail));
      } else if (u.status === 'done') {
        note.classList.add('fm-up__note--done');
        note.appendChild(icon('success'));
        var t = fmtSize(u.size) + ' · ' + where + ' 올렸어요';
        if (u.saveAs !== u.name) t += ' · 같은 이름이 있어 이름 끝에 번호를 붙였어요';
        note.appendChild(el('span', null, t));
      } else {
        note.appendChild(el('span', null, fmtSize(u.size) + ' · ' + where + ' 올리는 중'));
      }
      main.appendChild(note);
      li.appendChild(main);

      var acts = el('div', 'fm-up__actions');
      // 화면낭독기에는 어느 파일인지 괄호로 덧붙인다 — "취소 (‘현장 사진 1.jpg’ 올리기)"
      var who = u.saveAs || u.name;
      if (u.status === 'active') acts.appendChild(uploadButton(COPY.cancel, 'cancel', u, '(' + q(who) + ' 올리기)'));
      if (u.status === 'failed') {
        // 남은 공간이 모자라면 다시 해도 실패한다 — 공간이 생길 때까지 "빼기"만 둔다(설계서 5절)
        if (u.reason !== 'quota' || u.size <= freeBytes()) acts.appendChild(uploadButton(COPY.retry, 'retry', u, '(' + q(who) + ')'));
        acts.appendChild(uploadButton(COPY.remove, 'remove', u, '(' + qj(who, '을/를') + ' 목록에서)'));
      }
      if (acts.childNodes.length) li.appendChild(acts);
      ui.upList.appendChild(li);
    });
    renderUploadHead();
    if (!uploads.length) ui.uploads.hidden = true;
  }

  /* 줄을 빼면 포커스를 다음 줄의 버튼 → 앞 줄의 버튼 → 카드 제목으로 */
  function focusAfterRemoval(index) {
    var lis = $$('.fm-up', ui.upList);
    var target = lis[index] || lis[index - 1];
    var btn = target ? $('button', target) : null;
    if (btn) btn.focus();
    else if (!ui.uploads.hidden) ui.upTitle.focus();
    else ui.countTitle.focus();
  }

  function onUploadAction(btn) {
    var uid = +btn.getAttribute('data-uid');
    var action = btn.getAttribute('data-up');
    var index = -1;
    var u = null;
    uploads.forEach(function (x, i) { if (x.uid === uid) { u = x; index = i; } });
    if (!u) return;
    if (action === 'retry') {
      begin(u);
      keepFocus(renderUploads);
      if (u.status === 'failed') {
        announceFail(u);
        focusKey('up-retry:' + u.uid);
      } else {
        DS.announce(qj(u.saveAs, '을/를') + ' 다시 올려요');
        focusKey('up-cancel:' + u.uid);
      }
      return;
    }
    uploads.splice(index, 1);
    renderUploads();
    focusAfterRemoval(index);
    DS.announce(action === 'cancel' ? q(u.saveAs || u.name) + ' 올리기를 취소했어요' : qj(u.saveAs || u.name, '을/를') + ' 목록에서 뺐어요');
    if (action === 'cancel') checkDone();
  }

  function cancelAll() {
    var n = 0;
    uploads = uploads.filter(function (u) { if (u.status === 'active') { n++; return false; } return true; });
    renderUploads();
    DS.announce('남은 올리기 ' + n + '개를 취소했어요');
    if (!ui.uploads.hidden) ui.upTitle.focus();
    else ui.countTitle.focus();
    checkDone();
  }

  function closeUploads() {
    uploads = uploads.filter(function (u) { return u.status === 'active'; });
    renderUploads();
    ui.uploads.hidden = !uploads.length;
    ui.countTitle.focus();
  }

  function filesFrom(list) {
    return Array.prototype.map.call(list || [], function (f) { return { name: f.name, size: f.size }; });
  }

  /* ---------- 끌어 놓기 ---------- */

  function hasFiles(e) {
    var types = e.dataTransfer && e.dataTransfer.types;
    return !!types && Array.prototype.indexOf.call(types, 'Files') >= 0;
  }

  function showDrop() {
    var ok = canEdit();
    ui.drop.hidden = false;
    ui.drop.toggleAttribute('data-blocked', !ok);
    ui.dropText.textContent = ok ? q(folderName(folder)) + '에 올려요' : COPY.dropBlocked;
    ui.drop.querySelector('use').setAttribute('href', ok ? '#ds-i-upload' : '#ds-i-lock');
  }

  function hideDrop() {
    dragDepth = 0;
    ui.drop.hidden = true;
  }

  function bindDrop() {
    ui.results.addEventListener('dragenter', function (e) {
      if (!hasFiles(e)) return;
      e.preventDefault();
      dragDepth++;
      showDrop();
    });
    ui.results.addEventListener('dragleave', function (e) {
      if (!hasFiles(e)) return;
      dragDepth--;
      if (dragDepth <= 0) hideDrop();
    });
    // 영역 밖에 놓아도 브라우저가 파일을 열지 않게 막는다
    doc.addEventListener('dragover', function (e) {
      if (!hasFiles(e)) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = ui.results.contains(e.target) && canEdit() ? 'copy' : 'none';
    });
    doc.addEventListener('drop', function (e) {
      if (!hasFiles(e)) return;
      e.preventDefault();
      var inside = ui.results.contains(e.target);
      hideDrop();
      if (!inside) return;
      if (!canEdit()) { DS.announce(COPY.dropBlocked); return; }
      startUploads(filesFrom(e.dataTransfer.files));
    });
  }

  /* ---------- 시작 ---------- */

  function bind() {
    ui.btnUpload.addEventListener('click', function () { ui.fileInput.click(); });
    ui.fileInput.addEventListener('change', function () {
      var files = filesFrom(ui.fileInput.files);
      ui.fileInput.value = '';
      startUploads(files);
    });

    // 폴더 링크 — 주소를 기록에 더하고 바로 연다(새 탭으로 열기는 그대로 둔다)
    doc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[data-folder]');
      if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      openFolder(a.getAttribute('data-folder'));
    });

    ui.body.addEventListener('change', function (e) {
      var t = e.target;
      if (t === ui.selAll || t === ui.selAllTb) { selectAll(t.checked); return; }
      if (t.matches('input[type="checkbox"][data-id]')) {
        if (t.checked) selected[t.getAttribute('data-id')] = true;
        else delete selected[t.getAttribute('data-id')];
        syncSelection();
      }
    });

    ui.body.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t) return;
      if (t.id === 'btn-reload') {
        if (ui.results.hasAttribute('aria-busy')) return; // 다시 불러오는 중이면 한 번만
        ui.results.focus();
        load({ focusTitle: true, again: true });
      } else if (t.id === 'btn-empty-upload') {
        ui.fileInput.click();
      } else if (t.id === 'rename-cancel') {
        cancelRename();
      }
    });

    ui.body.addEventListener('submit', function (e) {
      if (e.target.id !== 'rename-form') return;
      e.preventDefault();
      commitRename();
    });
    ui.body.addEventListener('input', function (e) {
      if (e.target.id !== 'rename-input' || !editing) return;
      editing.value = e.target.value;
      // 한 번 제출해 오류를 본 뒤에는 고칠 때마다 다시 검사한다(CMP-INPUT-03 — 고치면 오류가 사라진다)
      if (editing.touched) {
        var had = !!editing.error;
        editing.error = validateName(e.target.value.trim(), editing.id);
        applyRenameError(e.target, $('#rename-error'), editing.error);
        if (editing.error && !had) revealRename();
      }
    });
    ui.body.addEventListener('keydown', function (e) {
      if (e.target.id === 'rename-input' && e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        cancelRename();
      }
    });

    ui.btnRename.addEventListener('click', function () {
      var ids = selectedIds();
      if (ids.length === 1) startRename(ids[0]);
    });
    ui.btnMove.addEventListener('click', function () { openMove(ui.btnMove); });
    ui.btnDelete.addEventListener('click', deleteSelected);
    ui.btnUnselect.addEventListener('click', function () {
      clearSelection();
      ui.countTitle.focus();
      DS.announce(COPY.unselected);
    });

    // 보기 — 목록 ↔ 격자(주소 ?view=grid 는 kit 묶음 버튼이 쓴다)
    ui.viewPick.addEventListener('ds:change', function (e) {
      view = e.detail.value === 'grid' ? 'grid' : 'list';
      editing = null;
      keepFocus(renderList);
    });

    // 정렬 — 표 머리(kit DS.sort)와 정렬 고르기가 같은 값을 쓴다
    ui.table.addEventListener('ds:sort', function (e) {
      sort = { key: e.detail.key, dir: e.detail.dir };
      keepFocus(renderList);
    });
    ui.sortSelect.addEventListener('change', function () {
      var p = ui.sortSelect.value.split('.');
      DS.sort.apply(ui.table, p[0], p[1] === 'desc' ? 'descending' : 'ascending');
    });

    ui.upList.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-up]');
      if (b) onUploadAction(b);
    });
    ui.upCancelAll.addEventListener('click', cancelAll);
    ui.upClose.addEventListener('click', closeUploads);

    ui.moveList.addEventListener('change', function (e) {
      if (e.target.name !== 'move-dest') return;
      moveDest = e.target.value;
      setMoveError('');
      ui.moveRun.textContent = qj(folderName(moveDest), '으로/로') + ' 옮기기';
    });
    ui.moveRun.addEventListener('click', runMove);
    // 옮긴 뒤에는 연 버튼(이제 막힌 "옮기기…") 대신 결과 개수 제목으로 — kit 이 연 버튼으로 돌려준 다음에 옮긴다
    ui.dlgMove.addEventListener('close', function () {
      if (ui.dlgMove.returnValue === 'moved') ui.countTitle.focus();
    });

    DS.url.onChange(function () {
      var before = folder;
      readUrl();
      DS.radios.select($('[role="radio"][data-value="' + view + '"]', ui.viewPick), { fromUrl: true, silent: true });
      DS.sort.apply(ui.table, sort.key, sort.dir, { fromUrl: true, silent: true });
      if (before !== folder) openFolder(folder, { fromUrl: true });
      else keepFocus(renderList);
    });

    bindDrop();
  }

  DS.ready(function () {
    ui.app = $('#app');
    ui.results = $('#results');
    ui.results.setAttribute('tabindex', '-1');
    ui.body = $('#results-body');
    ui.crumbNav = $('.fm-crumbs');
    ui.crumbs = $('#crumbs');
    ui.title = $('#folder-title');
    ui.navRoot = $('#nav-root');
    ui.btnUpload = $('#btn-upload');
    ui.fileInput = $('#file-input');
    ui.countTitle = $('#results-title');
    ui.countMeta = $('#count-meta');
    ui.countN = $('#count-n');
    ui.pick = $('#pick-tools');
    ui.selAllTb = $('#sel-all-tb');
    ui.selAllTbWrap = ui.selAllTb.closest('label');
    ui.sortSelect = $('#sort-select');
    ui.bar = $('#actionbar');
    ui.selCount = $('#sel-count');
    ui.btnUnselect = $('#btn-unselect');
    ui.btnRename = $('#btn-rename');
    ui.btnMove = $('#btn-move');
    ui.btnDelete = $('#btn-delete');
    ui.viewPick = $('.fm-viewpick');
    ui.listView = $('#list-view');
    ui.table = $('#file-table');
    ui.caption = $('#table-caption');
    ui.selAll = $('#sel-all');
    ui.rows = $('#file-rows');
    ui.gridView = $('#grid-view');
    ui.state = $('#list-state');
    ui.drop = $('#drop');
    ui.dropText = $('#drop-text');
    ui.uploads = $('#uploads');
    ui.upTitle = $('#up-title');
    ui.upSum = $('#up-sum');
    ui.upList = $('#up-list');
    ui.upCancelAll = $('#up-cancel-all');
    ui.upClose = $('#up-close');
    ui.dlgMove = $('#dlg-move');
    ui.moveTitle = $('#move-title');
    ui.moveList = $('#move-list');
    ui.moveError = $('#move-error');
    ui.moveErrorText = $('#move-error-text');
    ui.moveRun = $('#move-run');
    ui.storage = $('#storage');
    ui.storageValue = $('#storage-value');
    ui.storageLeft = $('#storage-left');
    ui.storageTrack = $('#storage-track');
    ui.storageBar = $('#storage-bar');

    readUrl();
    // 주소에 없던 기본값(폴더·정렬)과 맞춘다 — kit 이 처음 읽은 정렬·보기는 그대로
    DS.sort.apply(ui.table, sort.key, sort.dir, { fromUrl: true, silent: true });
    bind();
    renderStorage();
    renderHead();
    if (STATE === 'quota') showQuotaBanner();
    load();
  });
})();
