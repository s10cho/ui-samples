/*
 * 칸반 보드 — 화면 코드. 부품 동작(메뉴·탭·옆 패널·배너·알림·스켈레톤)은 kit(js/ds.js, 전역 DS)을 쓰고,
 * 끌어 놓기·옮기기·필터·보기 전환·카드 추가만 여기서 한다. 데이터는 js/data.js(window.KB_DATA) 한 곳.
 *
 * 상태 쿼리(설계서 5절): ?state=loading | empty | empty-col | error | move-fail | readonly
 * 주소 상태: ?view=list · ?stage=review(탭 화면) · ?who=kim,park · ?label=pay · ?card=c07
 */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var DATA = window.KB_DATA;
  var STAGES = DATA.stages;
  var STATE = DS.url.get('state') || '';
  var READONLY = STATE === 'readonly';
  var LOAD_MS = 1300; // 흉내 불러오기 — 스켈레톤을 보이므로 1초를 넘게(DESIGN.md 「샘플 데이터」)
  var SAVE_MS = 1200; // 옮기기 실패 흉내에서 저장 응답까지
  var TABS_REM = 36;  // 보드 자리가 이보다 좁으면 단계 탭(css/page.css 와 같은 경계)

  var COPY = {
    loading: '카드를 불러오는 중이에요',
    errorTitle: '카드를 불러오지 못했어요',
    errorText: '연결이 잠시 끊겼어요. 다시 불러오면 걸어 둔 필터 그대로 보여요.',
    reload: '다시 불러오기',
    emptyTitle: '아직 카드가 없어요',
    emptyText: '할 일을 카드로 만들고 할 일, 진행 중, 검토, 완료 순서로 옮겨요.',
    emptyAction: '첫 카드 추가',
    nomatchTitle: '조건에 맞는 카드가 없어요',
    clearFilters: '필터 모두 지우기',
    emptyCol: { todo: '할 일이 없어요', doing: '진행 중인 카드가 없어요', review: '검토할 카드가 없어요', done: '아직 끝낸 카드가 없어요' },
    emptyColHint: '카드를 끌어 놓거나 ‘옮기기’ 메뉴로 옮겨 오세요.',
    emptyColHintList: '‘옮기기’ 메뉴로 카드를 옮겨 오세요.',
    current: ' (지금 자리)',
    noWip: '개수 제한 없음',
    full: '가득 찼어요',
    cannotDrop: '가득 차서 놓을 수 없어요',
    dragCancel: '옮기기를 그만뒀어요',
    move: '옮기기',
    undo: '되돌리기',
    retry: '다시 옮기기',
    moveFailText: '연결이 잠시 끊겨 원래 자리로 되돌렸어요. 다시 옮겨 보세요.',
    saving: '저장 중',
    noWho: '담당자 없음',
    none: '없음',
    noDesc: '설명이 없어요.',
    me: '나',
    created: '카드를 만들었어요',
    readonlyTitle: '보기 권한만 있어요',
    addWait: '카드를 불러온 뒤 추가할 수 있어요',
    order: { top: '맨 위로', up: '위로', down: '아래로', bottom: '맨 아래로' }
  };

  /* ---------- 도우미 ---------- */

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function sr(text) { return el('span', 'ds-sr-only', text); }
  function remPx() { return parseFloat(getComputedStyle(root).fontSize) || 16; }
  function cssVar(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }
  function cssMs(name, fallback) {
    var v = cssVar(name);
    var n = parseFloat(v);
    if (isNaN(n)) return fallback;
    return /ms$/.test(v) ? n : n * 1000;
  }
  /* 길이 토큰을 px 로 — rem·px 모두 받는다. 없으면 fallback(rem) */
  function cssLen(name, fallback) {
    var v = cssVar(name);
    var n = parseFloat(v);
    if (isNaN(n)) return fallback * remPx();
    return /px$/.test(v) ? n : n * remPx();
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  /* 조사 — 끝 글자 받침으로 고른다(‘결제 오류 확인’을 · ‘정산 보고서’를 · 진행 중으로 · 검토로) */
  function jong(word) {
    var s = String(word).replace(/[\s’'"”)\]]+$/, '');
    var ch = s.charAt(s.length - 1);
    var code = ch.charCodeAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28;
    var digit = { '0': 21, '1': 8, '2': 0, '3': 16, '4': 0, '5': 0, '6': 1, '7': 8, '8': 8, '9': 0 }[ch];
    if (digit !== undefined) return digit;
    if (/[l]/i.test(ch)) return 8;
    return /[mn]/i.test(ch) ? 4 : 0;
  }
  function eul(word) { return word + (jong(word) ? '을' : '를'); }
  function eun(word) { return word + (jong(word) ? '은' : '는'); }
  function ro(word) { var j = jong(word); return word + (j === 0 || j === 8 ? '로' : '으로'); }
  function q(title) { return '‘' + title + '’'; }

  /* 날짜 — DESIGN.md 「옮기기 · 파일 크기 · 날짜 표기」 */
  var TODAY = DATA.today;
  var YESTERDAY = (function () {
    var d = new Date(TODAY + 'T00:00:00');
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  })();
  function fmtDate(iso) {
    var p = iso.split('-');
    var s = Number(p[1]) + '월 ' + Number(p[2]) + '일';
    return p[0] === TODAY.slice(0, 4) ? s : Number(p[0]) + '년 ' + s;
  }
  function fmtStamp(iso) {
    var date = iso.slice(0, 10);
    var time = iso.slice(11, 16);
    if (date === TODAY) return time;
    if (date === YESTERDAY) return '어제 ' + time;
    return fmtDate(date) + ' ' + time;
  }
  function nowStamp() {
    var d = new Date();
    return TODAY + 'T' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  function timeEl(iso, text) {
    var t = el('time', null, text);
    t.setAttribute('datetime', iso);
    return t;
  }

  /* ---------- 상태 ---------- */

  var ui = {};
  var cards = [];
  var phase = 'ready';      // 그릴 내용 — ready | error
  var busy = true;          // 불러오는 중이면 옮기기·추가를 받지 않는다
  var view = 'board';
  var stageTab = 'todo';
  var layoutTabs = false;
  var filters = { who: [], label: [] };
  var openId = null;
  var lastMove = null;      // 되돌리기
  var failNext = STATE === 'move-fail';
  var pending = null;       // 저장 응답을 기다리는 카드 { id, shown }
  var justAdded = {};       // 필터와 맞지 않아도 방금 추가한 카드는 필터를 바꿀 때까지 보인다
  var seq = 0;
  var skeletons = [];

  function stage(id) { return STAGES.filter(function (s) { return s.id === id; })[0]; }
  function byId(id) { return cards.filter(function (c) { return c.id === id; })[0]; }
  function stageCards(id) { return cards.filter(function (c) { return c.stage === id; }); }
  function person(id) { return DATA.people.filter(function (p) { return p.id === id; })[0]; }
  function whoName(id) {
    if (id === 'me') return COPY.me;
    if (id === 'none' || !id) return COPY.noWho;
    var p = person(id);
    return p ? p.name : COPY.noWho;
  }
  function labelName(id) {
    var l = DATA.labels.filter(function (x) { return x.id === id; })[0];
    return l ? l.name : id;
  }
  function hasFilters() { return filters.who.length + filters.label.length > 0; }
  function matches(c) {
    if (justAdded[c.id]) return true;
    if (filters.who.length && filters.who.indexOf(c.who || 'none') < 0) return false;
    if (filters.label.length && !c.labels.some(function (l) { return filters.label.indexOf(l) >= 0; })) return false;
    return true;
  }
  function wip(id) {
    var s = stage(id);
    var n = stageCards(id).length;
    if (!s.limit) return { n: n, limit: 0, kind: 'none' };
    return { n: n, limit: s.limit, kind: n > s.limit ? 'over' : n === s.limit ? 'full' : 'under' };
  }
  function isFull(id) { var k = wip(id).kind; return k === 'full' || k === 'over'; }
  function position(c) {
    var list = stageCards(c.stage);
    return { k: list.indexOf(c) + 1, n: list.length };
  }
  function dueState(c) {
    if (!c.due || c.stage === 'done') return '';
    if (c.due < TODAY) return 'over';
    return c.due === TODAY ? 'today' : '';
  }
  function countText(w) { return w.limit ? w.n + '/' + w.limit : String(w.n); }
  function wipText(w) {
    if (w.kind === 'none') return COPY.noWip;
    if (w.kind === 'over') return '최대 ' + w.limit + '개보다 ' + (w.n - w.limit) + '개 많아요';
    if (w.kind === 'full') return '최대 ' + w.limit + '개 · ' + COPY.full;
    return '최대 ' + w.limit + '개';
  }
  function tabSr(w) {
    var s = '카드 ' + w.n + '개';
    if (w.kind === 'over') s += ', 최대 ' + w.limit + '개보다 많아요';
    else if (w.kind === 'full') s += ', ' + COPY.full;
    return s;
  }

  /* ---------- 주소 ---------- */

  function csv(key, valid) {
    return (DS.url.get(key) || '').split(',').filter(function (v, i, a) { return valid(v) && a.indexOf(v) === i; });
  }
  function readUrl() {
    view = DS.url.get('view') === 'list' ? 'list' : 'board';
    var st = DS.url.get('stage');
    stageTab = stage(st) ? st : 'todo';
    filters.who = csv('who', function (v) { return v === 'none' || !!person(v); });
    filters.label = csv('label', function (v) { return DATA.labels.some(function (l) { return l.id === v; }); });
  }
  function writeFilters() {
    DS.url.set({ who: filters.who.join(','), label: filters.label.join(',') });
  }
  function setStageTab(id) {
    stageTab = id;
    if (layoutTabs) DS.url.set({ stage: id === 'todo' ? null : id });
  }

  /* ---------- 그리기 ---------- */

  function render() {
    renderHead();
    renderArea();
    if (openId && byId(openId)) renderPanel();
  }

  function renderHead() {
    var total = cards.length;
    var vis = cards.filter(matches).length;
    ui.count.textContent = phase === 'error' ? '' : hasFilters() ? total + '개 중 ' + vis + '개' : total + '개';
    [['who', ui.btnWho, ui.menuWho], ['label', ui.btnLabel, ui.menuLabel]].forEach(function (f) {
      var n = filters[f[0]].length;
      var badge = $('.ds-count', f[1]);
      badge.hidden = !n;
      badge.textContent = n ? String(n) : '';
      // 숫자는 화면낭독기에 "2개 고름"으로 한 번만(보이는 개수는 aria-hidden). 버튼 안 칸 사이에는 빈칸이 들어가 쉼표를 앞에 두지 않는다
      $('.ds-sr-only', f[1]).textContent = n ? n + '개 고름' : '';
      $$('[role="menuitemcheckbox"]', f[2]).forEach(function (item) {
        item.setAttribute('aria-checked', filters[f[0]].indexOf(item.getAttribute('data-value')) >= 0 ? 'true' : 'false');
      });
    });
    renderChips();
    var addOff = busy || phase !== 'ready';
    if (addOff) {
      ui.btnAdd.setAttribute('aria-disabled', 'true');
      ui.btnAdd.setAttribute('data-ds-tip', COPY.addWait);
    } else {
      ui.btnAdd.removeAttribute('aria-disabled');
      ui.btnAdd.removeAttribute('data-ds-tip');
    }
  }

  function renderChips() {
    var items = [];
    filters.who.forEach(function (v) {
      items.push({ key: 'who', value: v, text: '담당자: ' + whoName(v), name: '담당자 ' + whoName(v) + ' 빼기' });
    });
    filters.label.forEach(function (v) {
      items.push({ key: 'label', value: v, text: '라벨: ' + labelName(v), name: '라벨 ' + labelName(v) + ' 빼기' });
    });
    ui.active.hidden = !items.length;
    ui.activeList.textContent = '';
    items.forEach(function (it) {
      var chip = el('span', 'ds-chip ds-chip--input', it.text);
      var x = el('button', 'ds-chip__remove');
      x.type = 'button';
      x.setAttribute('aria-label', it.name);
      x.setAttribute('data-remove', it.key + ':' + it.value);
      x.appendChild(DS.iconEl('close', 'ds-icon--sm'));
      chip.appendChild(x);
      ui.activeList.appendChild(chip);
    });
  }

  function renderArea() {
    var area = ui.area;
    area.textContent = '';
    if (phase === 'error') area.appendChild(stateBlock('error'));
    else if (!cards.length) area.appendChild(stateBlock('empty'));
    else if (!cards.some(matches)) area.appendChild(stateBlock('nomatch'));
    else area.appendChild(view === 'list' ? listView() : boardView());
    syncLayout();
  }

  function stateBlock(kind) {
    var box = el('div', 'ds-empty ds-empty--center kb-state' + (kind === 'error' ? ' ds-empty--error' : ''));
    var icons = { error: 'error', empty: 'columns', nomatch: 'filter' };
    box.appendChild(DS.iconEl(icons[kind], 'ds-empty__icon'));
    var title = kind === 'error' ? COPY.errorTitle : kind === 'empty' ? COPY.emptyTitle : COPY.nomatchTitle;
    var text = kind === 'error' ? COPY.errorText : kind === 'empty' ? COPY.emptyText
      : '필터를 빼면 카드 ' + cards.length + '개가 모두 보여요.';
    box.appendChild(el('p', 'ds-empty__title', title));
    box.appendChild(el('p', 'ds-empty__text', text));
    if (kind === 'empty' && READONLY) return box;
    var acts = el('div', 'ds-empty__actions');
    var b = el('button', 'ds-btn' + (kind === 'error' ? ' ds-btn--primary' : ''),
      kind === 'error' ? COPY.reload : kind === 'empty' ? COPY.emptyAction : COPY.clearFilters);
    b.type = 'button';
    b.setAttribute('data-state-action', kind);
    acts.appendChild(b);
    box.appendChild(acts);
    return box;
  }

  function stageHead(s, nameId) {
    var w = wip(s.id);
    var head = el('div', 'kb-stagehead');
    var h = el('h3', 'kb-stagehead__name', s.name);
    h.id = nameId;
    h.setAttribute('data-ds-skeleton-keep', '');
    head.appendChild(h);
    var cnt = el('span', 'ds-count' + (w.kind === 'over' ? ' kb-count--over' : ''), countText(w));
    cnt.setAttribute('aria-hidden', 'true');
    head.appendChild(cnt);
    head.appendChild(sr('카드 ' + w.n + '개'));
    head.appendChild(el('p', 'kb-wip' + (w.kind === 'over' ? ' kb-wip--over' : ''), wipText(w)));
    return head;
  }

  function firstEmptyStage() {
    var s = STAGES.filter(function (x) { return !stageCards(x.id).length; })[0];
    return s ? s.id : null;
  }

  function emptyCol(s, mode) {
    var box = el('div', 'ds-empty ds-empty--inline kb-col__empty');
    box.appendChild(el('p', 'ds-empty__title', COPY.emptyCol[s.id]));
    if (!READONLY && firstEmptyStage() === s.id) {
      box.appendChild(el('p', 'ds-empty__text', mode === 'list' ? COPY.emptyColHintList : COPY.emptyColHint));
    }
    return box;
  }

  function hiddenNote(all, vis) {
    return all > vis ? el('p', 'kb-col__hidden', '필터로 숨긴 카드 ' + (all - vis) + '개') : null;
  }

  function boardView() {
    var wrap = el('div', 'kb-wrap');
    var tabs = el('div', 'ds-tabs kb-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', '단계');
    tabs.setAttribute('data-url-key', 'stage');
    var board = el('div', 'kb-board');
    STAGES.forEach(function (s) {
      var w = wip(s.id);
      var t = el('button', 'ds-tab kb-tab');
      t.type = 'button';
      t.id = 'tab-' + s.id;
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-controls', 'col-' + s.id);
      t.setAttribute('data-value', s.id);
      t.setAttribute('aria-selected', s.id === stageTab ? 'true' : 'false');
      t.tabIndex = s.id === stageTab ? 0 : -1;
      var tabName = el('span', 'kb-tab__name', s.name);
      tabName.setAttribute('data-ds-skeleton-keep', ''); // 단계 이름은 불러오기 전에도 아는 글이라 막대로 그리지 않는다
      t.appendChild(tabName);
      var cnt = el('span', 'ds-count' + (w.kind === 'over' ? ' kb-count--over' : ''), countText(w));
      cnt.setAttribute('aria-hidden', 'true');
      t.appendChild(cnt);
      t.appendChild(sr(tabSr(w)));
      tabs.appendChild(t);
      board.appendChild(column(s));
    });
    wrap.appendChild(tabs);
    wrap.appendChild(board);
    return wrap;
  }

  function column(s) {
    var all = stageCards(s.id);
    var vis = all.filter(matches);
    var col = el('section', 'kb-col');
    col.id = 'col-' + s.id;
    col.setAttribute('data-stage', s.id);
    col.setAttribute('aria-labelledby', 'col-' + s.id + '-name');
    col.appendChild(stageHead(s, 'col-' + s.id + '-name'));
    var list = el('ol', 'kb-list');
    list.setAttribute('aria-labelledby', 'col-' + s.id + '-name');
    vis.forEach(function (c) { list.appendChild(cardEl(c)); });
    list.hidden = !vis.length;
    col.appendChild(list);
    if (!all.length) col.appendChild(emptyCol(s, 'board'));
    var note = hiddenNote(all.length, vis.length);
    if (note) col.appendChild(note);
    return col;
  }

  function labelsEl(c) {
    var wrap = el('span', 'kb-labels');
    wrap.appendChild(sr('라벨: '));
    c.labels.forEach(function (l, i) {
      if (i) wrap.appendChild(doc.createTextNode(' '));
      wrap.appendChild(el('span', 'ds-badge', labelName(l)));
    });
    return wrap;
  }

  function dueEl(c) {
    var wrap = el('span', 'kb-due');
    if (!c.due) return wrap;
    wrap.appendChild(DS.iconEl('calendar', 'ds-icon--sm'));
    wrap.appendChild(sr('마감 '));
    wrap.appendChild(timeEl(c.due, fmtDate(c.due)));
    var st = dueState(c);
    if (st) {
      wrap.appendChild(doc.createTextNode(' '));
      wrap.appendChild(el('span', 'ds-badge ' + (st === 'over' ? 'ds-badge--danger' : 'ds-badge--warning'), st === 'over' ? '마감 지남' : '오늘 마감'));
    }
    return wrap;
  }

  function whoEl(c) {
    if (!c.who) return el('span', 'kb-who kb-who--none', COPY.noWho);
    var wrap = el('span', 'kb-who');
    var name = whoName(c.who);
    var av = el('span', 'ds-avatar kb-avatar', name.charAt(0));
    av.setAttribute('aria-hidden', 'true');
    wrap.appendChild(av);
    wrap.appendChild(sr('담당자: '));
    wrap.appendChild(doc.createTextNode(name));
    return wrap;
  }

  function openButton(c, cls) {
    var b = el('button', cls, c.title);
    b.type = 'button';
    b.id = 'open-' + c.id;
    b.setAttribute('data-open', c.id);
    if (c.id === openId) b.setAttribute('aria-current', 'true');
    return b;
  }

  function cardEl(c) {
    var li = el('li', 'kb-card');
    li.id = 'card-' + c.id;
    li.setAttribute('data-id', c.id);
    li.appendChild(openButton(c, 'kb-card__open'));
    if (c.labels.length || c.due) {
      var meta = el('div', 'kb-card__meta');
      if (c.labels.length) meta.appendChild(labelsEl(c));
      if (c.due) meta.appendChild(dueEl(c));
      li.appendChild(meta);
    }
    var foot = el('div', 'kb-card__foot');
    foot.appendChild(whoEl(c));
    if (pending && pending.id === c.id) {
      li.setAttribute('aria-busy', 'true');
      if (pending.shown) foot.appendChild(savingEl());
    }
    if (!READONLY) foot.appendChild(moveControl(c));
    li.appendChild(foot);
    return li;
  }

  function savingEl() {
    var s = el('span', 'kb-saving');
    var spin = el('span', 'ds-spinner');
    spin.setAttribute('aria-hidden', 'true');
    s.appendChild(spin);
    s.appendChild(doc.createTextNode(COPY.saving));
    return s;
  }

  function listView() {
    var wrap = el('div', 'kb-lwrap');
    STAGES.forEach(function (s) {
      var all = stageCards(s.id);
      var vis = all.filter(matches);
      var g = el('section', 'kb-group');
      g.id = 'grp-' + s.id;
      g.setAttribute('aria-labelledby', 'grp-' + s.id + '-name');
      g.appendChild(stageHead(s, 'grp-' + s.id + '-name'));
      if (vis.length) {
        var ul = el('ul', 'kb-rows');
        ul.setAttribute('aria-labelledby', 'grp-' + s.id + '-name');
        vis.forEach(function (c) { ul.appendChild(rowEl(c)); });
        g.appendChild(ul);
      }
      if (!all.length) g.appendChild(emptyCol(s, 'list'));
      var note = hiddenNote(all.length, vis.length);
      if (note) g.appendChild(note);
      wrap.appendChild(g);
    });
    return wrap;
  }

  function rowEl(c) {
    var li = el('li', 'kb-row');
    li.id = 'row-' + c.id;
    li.setAttribute('data-id', c.id);
    var main = el('div', 'kb-row__main');
    main.appendChild(openButton(c, 'kb-row__open'));
    if (c.labels.length) {
      var sub = el('span', 'kb-row__sub');
      sub.appendChild(sr('라벨: '));
      sub.appendChild(doc.createTextNode(c.labels.map(labelName).join(' · ')));
      main.appendChild(sub);
    }
    li.appendChild(main);
    li.appendChild(whoEl(c));
    li.appendChild(dueEl(c));
    if (pending && pending.id === c.id) {
      li.setAttribute('aria-busy', 'true');
      if (pending.shown) main.appendChild(savingEl());
    }
    if (!READONLY) li.appendChild(moveControl(c));
    return li;
  }

  /* 옮기기 메뉴 — 갈 단계(지금 자리·가득 찬 단계는 aria-disabled) + 순서(맨 위로·위로·아래로·맨 아래로) */
  function moveControl(c) {
    var wrap = el('div', 'ds-menu-anchor kb-move');
    var btn = el('button', 'ds-btn ds-btn--ghost ds-btn--sm kb-move__btn');
    btn.type = 'button';
    btn.id = 'move-' + c.id;
    btn.setAttribute('aria-haspopup', 'menu');
    btn.setAttribute('aria-controls', 'menu-' + c.id);
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', q(c.title) + ' ' + COPY.move);
    btn.appendChild(doc.createTextNode(COPY.move));
    btn.appendChild(DS.iconEl('chevron-down'));
    var menu = el('div', 'ds-menu');
    menu.id = 'menu-' + c.id;
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', q(c.title) + ' ' + COPY.move);
    menu.hidden = true;
    fillMenu(menu, c);
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    return wrap;
  }

  function menuItem(text, act, id, off) {
    var b = el('button', 'ds-menu__item', text);
    b.type = 'button';
    b.setAttribute('role', 'menuitem');
    b.setAttribute('data-act', act);
    b.setAttribute('data-card', id);
    if (off) b.setAttribute('aria-disabled', 'true');
    return b;
  }

  function fillMenu(menu, c) {
    menu.textContent = '';
    STAGES.forEach(function (s) {
      if (s.id === c.stage) { menu.appendChild(menuItem(s.name + COPY.current, 'stage:' + s.id, c.id, true)); return; }
      if (isFull(s.id)) {
        var w = wip(s.id);
        menu.appendChild(menuItem(ro(s.name) + ' (가득 참 ' + w.n + '/' + w.limit + ')', 'stage:' + s.id, c.id, true));
        return;
      }
      menu.appendChild(menuItem(ro(s.name), 'stage:' + s.id, c.id, false));
    });
    var sep = el('div', 'ds-menu__sep');
    sep.setAttribute('role', 'separator');
    menu.appendChild(sep);
    var vis = stageCards(c.stage).filter(matches);
    var i = vis.indexOf(c);
    var first = i <= 0;
    var last = i < 0 || i === vis.length - 1;
    menu.appendChild(menuItem(COPY.order.top, 'order:top', c.id, first));
    menu.appendChild(menuItem(COPY.order.up, 'order:up', c.id, first));
    menu.appendChild(menuItem(COPY.order.down, 'order:down', c.id, last));
    menu.appendChild(menuItem(COPY.order.bottom, 'order:bottom', c.id, last));
  }

  /* 카드 상세(옆 패널) */
  function renderPanel() {
    var c = byId(openId);
    if (!c) return;
    ui.panelTitle.textContent = c.title;
    var body = ui.panelBody;
    body.textContent = '';
    var cq = el('div', 'ds-cq');
    var dl = el('dl', 'ds-dl');
    function row(name, value) {
      dl.appendChild(el('dt', null, name));
      var dd = el('dd');
      if (typeof value === 'string') dd.textContent = value;
      else dd.appendChild(value);
      dl.appendChild(dd);
    }
    var pos = position(c);
    row('단계', stage(c.stage).name + ' · ' + pos.n + '개 중 ' + pos.k + '번째');
    row('담당자', c.who ? whoName(c.who) : COPY.noWho);
    row('라벨', c.labels.length ? labelsEl(c) : COPY.none);
    row('마감일', c.due ? dueEl(c) : COPY.none);
    cq.appendChild(dl);
    body.appendChild(cq);

    var desc = el('section', 'kb-panel__sec');
    desc.setAttribute('aria-labelledby', 'panel-desc');
    var dh = el('h3', 'kb-panel__sec-title', '설명');
    dh.id = 'panel-desc';
    desc.appendChild(dh);
    desc.appendChild(el('p', 'kb-panel__desc', c.desc || COPY.noDesc));
    body.appendChild(desc);

    var logSec = el('section', 'kb-panel__sec');
    logSec.setAttribute('aria-labelledby', 'panel-log');
    var lh = el('h3', 'kb-panel__sec-title', '활동 기록');
    lh.id = 'panel-log';
    logSec.appendChild(lh);
    var ol = el('ol', 'ds-list kb-log');
    c.log.slice().reverse().forEach(function (entry) {
      var li = el('li', 'ds-list__row');
      var main = el('div', 'ds-list__main');
      main.appendChild(el('span', 'ds-list__title', whoName(entry.who)));
      main.appendChild(el('span', 'ds-list__meta', entry.text));
      li.appendChild(main);
      li.appendChild(doc.createTextNode(' '));
      var t = timeEl(entry.at, fmtStamp(entry.at));
      t.className = 'ds-list__aside';
      li.appendChild(t);
      ol.appendChild(li);
    });
    logSec.appendChild(ol);
    body.appendChild(logSec);

    ui.panelFoot.hidden = READONLY;
    if (!READONLY) {
      ui.panelMove.setAttribute('aria-label', q(c.title) + ' ' + COPY.move);
      ui.panelMenu.setAttribute('aria-label', q(c.title) + ' ' + COPY.move);
      fillMenu(ui.panelMenu, c);
    }
    DS.fonts.ensureText(ui.panel.textContent);
  }

  function markCurrent() {
    $$('[data-open]', ui.area).forEach(function (b) {
      if (b.getAttribute('data-open') === openId) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }

  /* ---------- 배치 — 보드 자리 36rem 아래면 단계 탭 ---------- */

  function syncLayout() {
    var w = ui.results.getBoundingClientRect().width;
    var tabs = view === 'board' && w > 0 && w / remPx() < TABS_REM;
    var changed = tabs !== layoutTabs;
    layoutTabs = tabs;
    var sk = ui.area._dsSkeleton;
    ui.area.classList.toggle('kb-area--tabs', tabs);
    STAGES.forEach(function (s) {
      var col = doc.getElementById('col-' + s.id);
      if (!col) return;
      if (tabs) {
        col.setAttribute('role', 'tabpanel');
        col.hidden = s.id !== stageTab;
      } else {
        col.removeAttribute('role');
        col.hidden = false;
      }
    });
    // 스켈레톤이 보이는 동안 배치가 바뀌면 새 배치로 다시 복제한다
    if (changed && sk && sk.isConnected) {
      DS.skeleton.hide(ui.area);
      DS.skeleton.show(ui.area);
    }
  }

  /* ---------- 불러오기 ---------- */

  function initialCards() {
    if (STATE === 'empty') return [];
    var list = clone(DATA.cards);
    if (STATE === 'empty-col') list = list.filter(function (c) { return c.stage !== 'review'; });
    return list;
  }

  function showSkeleton() {
    var targets = [ui.area, ui.count];
    if (!ui.panel.hidden) targets.push(ui.panelTitle, ui.panelBody);
    if (!ui.panel.hidden && !READONLY) targets.push(ui.panelFoot);
    targets.forEach(function (t) { DS.skeleton.show(t); });
    skeletons = targets;
  }

  function hideSkeleton() {
    skeletons.forEach(function (t) { DS.skeleton.hide(t); });
    skeletons = [];
  }

  function canDockPanel() {
    if (!window.matchMedia || !matchMedia('(min-width: 80rem)').matches) return false;
    var main = $('.ds-app__main');
    return main.getBoundingClientRect().width - 22.5 * remPx() >= 40 * remPx();
  }

  function load(retry) {
    busy = true;
    ui.area.setAttribute('aria-busy', 'true');
    DS.announce(COPY.loading);
    // 그릴 자리 — 가상 데이터로 한 번 그린 뒤 복제한다(DESIGN.md 「스켈레톤」). 0.3초 전에는 자리만 잡고 보이지 않는다
    var placeholder = function () {
      cards = clone(DATA.cards);
      phase = 'ready';
      render();
    };
    if (!retry) {
      placeholder();
      ui.area.classList.add('kb-pending');
      ui.count.classList.add('kb-pending');
      // 붙는 폭이면 패널을 먼저 열고 패널도 스켈레톤으로(덮는 폭은 불러온 뒤에 연다)
      if (openId && byId(openId) && canDockPanel()) openCard(openId, { focus: false });
    }
    var after = null;
    var timer = DS.loadingTimer(function () {
      if (retry) {
        if (ui.area.contains(doc.activeElement)) ui.title.focus();
        placeholder();
      }
      ui.area.classList.remove('kb-pending');
      ui.count.classList.remove('kb-pending');
      showSkeleton();
    }, function () {
      hideSkeleton();
      ui.area.classList.remove('kb-pending');
      ui.count.classList.remove('kb-pending');
      ui.area.removeAttribute('aria-busy');
      if (after) after();
    });
    if (STATE === 'loading') return;
    setTimeout(function () {
      var fail = STATE === 'error' && !retry;
      cards = fail ? [] : initialCards();
      phase = fail ? 'error' : 'ready';
      busy = false;
      after = function () { loaded(retry); };
      render();
      timer.stop();
    }, LOAD_MS);
  }

  function loaded(retry) {
    if (phase === 'error') {
      DS.announce(COPY.errorTitle, { assertive: true });
      return;
    }
    if (openId) {
      if (byId(openId)) {
        if (ui.panel.hidden) openCard(openId, { focus: true });
      } else {
        closeCard();
        DS.url.set({ card: null });
      }
    }
    if (retry) ui.title.focus();
    if (!cards.length) DS.announce(COPY.emptyTitle);
    else if (!cards.some(matches)) DS.announce(COPY.nomatchTitle);
    else if (hasFilters()) DS.announce(countSentence());
    else DS.announce('카드 ' + cards.length + '개를 불러왔어요');
  }

  function countSentence() {
    var vis = cards.filter(matches).length;
    if (!vis) return COPY.nomatchTitle;
    return hasFilters() ? '카드 ' + cards.length + '개 중 ' + vis + '개가 보여요' : '카드 ' + cards.length + '개가 보여요';
  }

  var countTimer = 0;
  function announceCountSoon() {
    clearTimeout(countTimer);
    countTimer = setTimeout(function () { if (!busy && phase === 'ready') DS.announce(countSentence()); }, 400);
  }

  /* ---------- 옮기기 ---------- */

  /* 단계 안 자리 — 뒤 카드 id(없으면 단계 끝) */
  function snapshot(c) {
    var list = stageCards(c.stage);
    var next = list[list.indexOf(c) + 1];
    return { stage: c.stage, before: next ? next.id : null };
  }

  function place(c, stageId, beforeId) {
    cards.splice(cards.indexOf(c), 1);
    c.stage = stageId;
    var ref = beforeId ? byId(beforeId) : null;
    if (ref) { cards.splice(cards.indexOf(ref), 0, c); return; }
    var list = stageCards(stageId);
    var last = list[list.length - 1];
    if (last) cards.splice(cards.indexOf(last) + 1, 0, c);
    else cards.push(c);
  }

  function focusCard(id) {
    var b = doc.getElementById('open-' + id);
    if (b) b.focus();
  }

  function blocked(c, stageId) {
    var w = wip(stageId);
    DS.announce(eul(q(c.title)) + ' 옮기지 않았어요. ' + eun(stage(stageId).name) + ' 최대 ' + w.limit + '개예요.');
  }

  /* how: menu | panel | drag | undo | retry · kind: top | up | down | bottom | drag(같은 단계 안) */
  function commitMove(c, stageId, beforeId, how, kind) {
    if (pending || busy) return false;
    var from = snapshot(c);
    var fromName = stage(c.stage).name;
    var crossing = stageId !== c.stage;
    if (crossing && isFull(stageId)) { blocked(c, stageId); return false; }
    if (!crossing && from.before === beforeId) return false; // 제자리
    place(c, stageId, beforeId);
    if (crossing && layoutTabs) setStageTab(stageId);

    if (failNext) {
      // 낙관적 업데이트 — 놓은 자리에 바로 보이고, 저장이 실패하면 원래 자리로 되돌린다(STA-11)
      failNext = false;
      pending = { id: c.id, shown: false };
      render();
      if (how !== 'panel') focusCard(c.id);
      var timer = DS.loadingTimer(function () {
        pending.shown = true;
        var host = doc.getElementById('card-' + c.id) ? $('#card-' + c.id + ' .kb-card__foot') : $('#row-' + c.id + ' .kb-row__main');
        if (host) host.insertBefore(savingEl(), $('.kb-move', host));
      }, null);
      var target = { stage: stageId, before: beforeId };
      setTimeout(function () {
        timer.stop();
        pending = null;
        var hadFocus = ui.area.contains(doc.activeElement) || doc.activeElement === doc.body;
        place(c, from.stage, from.before);
        if (layoutTabs) setStageTab(from.stage);
        render();
        if (hadFocus) focusCard(c.id);
        DS.banner.show({
          id: 'kb-move-banner',
          tone: 'danger',
          title: eul(q(c.title)) + ' 옮기지 못했어요',
          text: COPY.moveFailText,
          scroll: false,
          focusNext: '#open-' + c.id,
          actions: [{ label: COPY.retry, primary: true, onClick: function () {
            var cur = byId(c.id);
            if (cur) commitMove(cur, target.stage, target.stage === cur.stage ? target.before : firstOf(target.stage), 'retry', kind);
            return false;
          } }]
        });
      }, SAVE_MS);
      return true;
    }

    if (crossing) c.log.push({ at: nowStamp(), who: 'me', text: fromName + '에서 ' + ro(stage(stageId).name) + ' 옮겼어요' });
    lastMove = { id: c.id, from: from, fromName: fromName, logged: crossing };
    render();
    if (how !== 'panel') focusCard(c.id);
    var pos = position(c);
    var sentence = crossing
      ? eul(q(c.title)) + ' ' + ro(stage(stageId).name) + ' 옮겼어요'
      : eul(q(c.title)) + ' ' + (COPY.order[kind] || stage(stageId).name + ' 안에서') + ' 옮겼어요';
    DS.banner.show({
      id: 'kb-move-banner',
      tone: 'info',
      title: sentence,
      announce: false,
      scroll: false,
      focusNext: '#open-' + c.id,
      actions: [{ label: COPY.undo, onClick: undo }]
    });
    DS.announce(sentence + '. ' + (crossing ? '' : stage(stageId).name + ' ') + pos.n + '개 중 ' + pos.k + '번째예요');
    return true;
  }

  function firstOf(stageId) {
    var list = stageCards(stageId);
    return list[0] ? list[0].id : null;
  }

  function undo() {
    var m = lastMove;
    if (!m || busy || pending) return;
    var c = byId(m.id);
    if (!c) return;
    var crossing = c.stage !== m.from.stage;
    if (m.logged) c.log.pop();
    // 되돌리기는 원래 있던 자리라 개수 제한을 넘어도 막지 않는다
    place(c, m.from.stage, m.from.before);
    if (crossing && layoutTabs) setStageTab(m.from.stage);
    lastMove = null;
    render();
    focusCard(c.id);
    DS.announce(eul(q(c.title)) + ' ' + (crossing ? ro(m.fromName) : '원래 자리로') + ' 되돌렸어요');
  }

  function reorder(c, kind, how) {
    var vis = stageCards(c.stage).filter(matches);
    var i = vis.indexOf(c);
    if (i < 0) return;
    var full = stageCards(c.stage).filter(function (x) { return x !== c; });
    var before;
    if (kind === 'top') { if (i === 0) return; before = vis[0].id; }
    else if (kind === 'up') { if (i === 0) return; before = vis[i - 1].id; }
    else {
      if (i === vis.length - 1) return;
      var after = kind === 'down' ? vis[i + 1] : vis[vis.length - 1];
      var next = full[full.indexOf(after) + 1];
      before = next ? next.id : null;
    }
    commitMove(c, c.stage, before, how, kind);
  }

  function act(item) {
    var c = byId(item.getAttribute('data-card'));
    if (!c || READONLY) return;
    var how = item.closest('#panel') ? 'panel' : 'menu';
    var a = item.getAttribute('data-act');
    if (a.indexOf('stage:') === 0) {
      var sid = a.slice(6);
      commitMove(c, sid, firstOf(sid), how, 'top');
    } else {
      reorder(c, a.slice(6), how);
    }
  }

  /* ---------- 끌어 놓기 — 마우스는 5px 넘게 끌면, 터치는 길게 누른 뒤 시작한다 ---------- */

  var drag = null;
  var suppressClick = false;

  function onPointerDown(e) {
    if (READONLY || busy || pending || view !== 'board' || phase !== 'ready' || drag) return;
    if (e.button !== 0 || !e.isPrimary) return;
    var card = e.target.closest && e.target.closest('.kb-card');
    if (!card || !ui.area.contains(card) || e.target.closest('.kb-move')) return;
    drag = {
      id: card.getAttribute('data-id'), card: card, pid: e.pointerId,
      x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY,
      touch: e.pointerType !== 'mouse', started: false, cancelled: false, drop: null, vy: 0, raf: 0
    };
    if (drag.touch) drag.hold = setTimeout(function () { if (drag && !drag.started) startDrag(); }, cssMs('--kanban-board-hold', 400));
    doc.addEventListener('pointermove', onPointerMove);
    doc.addEventListener('pointerup', onPointerUp);
    doc.addEventListener('pointercancel', onPointerCancel);
  }

  function onPointerMove(e) {
    if (!drag || e.pointerId !== drag.pid || drag.cancelled) return;
    drag.x = e.clientX;
    drag.y = e.clientY;
    if (!drag.started) {
      var d = Math.sqrt(Math.pow(drag.x - drag.x0, 2) + Math.pow(drag.y - drag.y0, 2));
      if (drag.touch) { if (d > 10) endDrag(); return; } // 길게 누르기 전에 움직이면 화면 스크롤이다
      if (d < 5) return;
      startDrag();
      if (!drag) return;
    }
    e.preventDefault();
    follow();
    hit();
    edgeScroll();
  }

  function startDrag() {
    var card = drag.card;
    if (!card.isConnected) { endDrag(); return; }
    clearTimeout(drag.hold);
    drag.started = true;
    if (doc.activeElement && doc.activeElement.closest && doc.activeElement.closest('.ds-menu')) doc.activeElement.blur();
    var r = card.getBoundingClientRect();
    drag.dx = drag.x0 - r.left;
    drag.dy = drag.y0 - r.top;
    var g = card.cloneNode(true);
    [g].concat($$('[id]', g)).forEach(function (n) { n.removeAttribute('id'); });
    $$('.ds-menu', g).forEach(function (m) { m.remove(); });
    g.classList.add('kb-ghost');
    g.setAttribute('aria-hidden', 'true');
    g.inert = true;
    g.style.width = (r.width / remPx()) + 'rem';
    drag.note = el('p', 'kb-ghost__note', COPY.cannotDrop);
    g.appendChild(drag.note);
    doc.body.appendChild(g);
    drag.ghost = g;
    drag.from = snapshot(byId(drag.id));
    card.setAttribute('data-drag', 'source');
    root.setAttribute('data-kb-drag', '');
    try { card.setPointerCapture(drag.pid); } catch (err) { /* 붙잡지 못해도 문서에서 계속 받는다 */ }
    doc.addEventListener('keydown', onDragKey, true);
    follow();
    hit();
  }

  function follow() {
    var rem = remPx();
    drag.ghost.style.transform = 'translate(' + ((drag.x - drag.dx) / rem) + 'rem, ' + ((drag.y - drag.dy) / rem) + 'rem)';
  }

  function clearMarks() {
    $$('.kb-drop').forEach(function (n) { n.remove(); });
    $$('.kb-tab[data-drop]').forEach(function (n) { n.removeAttribute('data-drop'); });
  }

  function showLine(col, y) {
    var line = el('div', 'kb-drop');
    line.setAttribute('aria-hidden', 'true');
    var top = y - col.getBoundingClientRect().top - cssLen('--ds-size-border-strong', 0.125) / 2;
    line.style.transform = 'translateY(' + (top / remPx()) + 'rem)';
    col.appendChild(line);
  }

  /* 포인터 아래 놓일 자리를 찾는다 — 열(카드 사이) 또는 탭 화면의 단계 탭 */
  function hit() {
    clearMarks();
    var c = byId(drag.id);
    var t = doc.elementFromPoint(drag.x, drag.y);
    var drop = null;
    var tab = t && t.closest ? t.closest('.kb-tab') : null;
    var col = t && t.closest ? t.closest('.kb-col') : null;
    if (tab && ui.area.contains(tab) && layoutTabs) {
      var tid = tab.getAttribute('data-value');
      if (tid !== c.stage) {
        if (isFull(tid)) drop = { blocked: true, stage: tid };
        else { drop = { stage: tid, before: firstOf(tid), viaTab: true }; tab.setAttribute('data-drop', ''); }
      }
    } else if (col && ui.area.contains(col) && !col.hidden) {
      var sid = col.getAttribute('data-stage');
      if (sid !== c.stage && isFull(sid)) drop = { blocked: true, stage: sid };
      else drop = slotIn(col, sid);
    }
    drag.drop = drop;
    var isBlocked = !!(drop && drop.blocked);
    // 떠 있는 카드 아래 안내 — 놓을 수 없을 때, 탭 화면에서 손가락에 가린 단계 탭 위에 있을 때
    var note = isBlocked ? COPY.cannotDrop : drop && drop.viaTab ? ro(stage(drop.stage).name) + ' 옮겨요' : '';
    drag.note.textContent = note;
    if (note) drag.ghost.setAttribute('data-blocked', '');
    else drag.ghost.removeAttribute('data-blocked');
    root.setAttribute('data-kb-drag', isBlocked ? 'blocked' : '');
  }

  function slotIn(col, sid) {
    var items = $$('.kb-list > .kb-card', col).filter(function (li) { return li.getAttribute('data-id') !== drag.id; });
    var half = cssLen('--ds-space-2', 0.5) / 2;
    var before = null;
    for (var i = 0; i < items.length; i++) {
      var r = items[i].getBoundingClientRect();
      if (drag.y < r.top + r.height / 2) { before = items[i]; break; }
    }
    var y;
    if (before) y = before.getBoundingClientRect().top - half;
    else if (items.length) y = items[items.length - 1].getBoundingClientRect().bottom + half;
    else y = $('.kb-stagehead', col).getBoundingClientRect().bottom + half;
    showLine(col, y);
    var full = stageCards(sid).filter(function (x) { return x.id !== drag.id; });
    var beforeId;
    if (before) beforeId = before.getAttribute('data-id');
    else if (items.length) {
      var lastCard = byId(items[items.length - 1].getAttribute('data-id'));
      var next = full[full.indexOf(lastCard) + 1];
      beforeId = next ? next.id : null;
    } else beforeId = full[0] ? full[0].id : null;
    return { stage: sid, before: beforeId };
  }

  /* 화면 위·아래 끝에 가면 화면을 굴린다 */
  function edgeScroll() {
    var edge = cssLen('--kanban-board-edge', 3.5);
    var bar = $('.ds-app__top');
    var top = bar && !$('.ds-app[data-top-static]') ? Math.max(0, bar.getBoundingClientRect().bottom) : 0;
    var v = 0;
    if (drag.y < top + edge) v = -Math.ceil((top + edge - drag.y) / edge * 12);
    else if (drag.y > window.innerHeight - edge) v = Math.ceil((drag.y - (window.innerHeight - edge)) / edge * 12);
    drag.vy = v;
    if (v && !drag.raf) drag.raf = requestAnimationFrame(tick);
  }

  function tick() {
    if (!drag || !drag.started || drag.cancelled) return;
    drag.raf = 0;
    if (!drag.vy) return;
    window.scrollBy(0, drag.vy);
    hit();
    drag.raf = requestAnimationFrame(tick);
  }

  function onPointerUp(e) {
    if (!drag || e.pointerId !== drag.pid) return;
    if (!drag.started) { endDrag(); return; } // 그냥 누름 — 뒤따르는 click 이 카드를 연다
    suppressClick = true;
    setTimeout(function () { suppressClick = false; }, 0);
    if (drag.cancelled) { endDrag(); return; }
    var d = drag.drop;
    var c = byId(drag.id);
    endDrag();
    if (!d || !c) return;
    if (d.blocked) { blocked(c, d.stage); return; }
    commitMove(c, d.stage, d.before, 'drag', 'drag');
  }

  function onPointerCancel(e) {
    if (!drag || e.pointerId !== drag.pid) return;
    endDrag();
  }

  function onDragKey(e) {
    if (e.key !== 'Escape' || !drag || !drag.started || drag.cancelled) return;
    e.preventDefault();
    e.stopPropagation();
    cleanupVisual();
    drag.cancelled = true;
    DS.announce(COPY.dragCancel);
  }

  function cleanupVisual() {
    if (!drag) return;
    clearTimeout(drag.hold);
    cancelAnimationFrame(drag.raf);
    drag.raf = 0;
    if (drag.ghost) drag.ghost.remove();
    drag.ghost = null;
    if (drag.card) drag.card.removeAttribute('data-drag');
    clearMarks();
    root.removeAttribute('data-kb-drag');
    doc.removeEventListener('keydown', onDragKey, true);
  }

  function endDrag() {
    cleanupVisual();
    doc.removeEventListener('pointermove', onPointerMove);
    doc.removeEventListener('pointerup', onPointerUp);
    doc.removeEventListener('pointercancel', onPointerCancel);
    drag = null;
  }

  /* ---------- 카드 상세 ---------- */

  function openCard(id, opts) {
    opts = opts || {};
    if (!byId(id)) return;
    openId = id;
    DS.url.set({ card: id });
    ui.panel.setAttribute('data-ds-panel-return', '#open-' + id);
    renderPanel();
    markCurrent();
    if (ui.panel.hidden) DS.panel.open(ui.panel, { opener: opts.opener, focus: opts.focus === true });
    requestAnimationFrame(syncLayout);
  }

  function closeCard() {
    if (!ui.panel.hidden) DS.panel.close(ui.panel);
  }

  /* ---------- 필터 ---------- */

  function buildFilterMenus() {
    var people = DATA.people.concat([{ id: 'none', name: COPY.noWho }]);
    [[ui.menuWho, people, 'who'], [ui.menuLabel, DATA.labels, 'label']].forEach(function (m) {
      m[1].forEach(function (it) {
        var b = el('button', 'ds-menu__item');
        b.type = 'button';
        b.setAttribute('role', 'menuitemcheckbox');
        b.setAttribute('aria-checked', 'false');
        b.setAttribute('data-value', it.id);
        b.setAttribute('data-filter', m[2]);
        b.appendChild(DS.iconEl('check', 'ds-menu__check'));
        b.appendChild(doc.createTextNode(it.name));
        m[0].appendChild(b);
      });
    });
  }

  function filtersChanged() {
    justAdded = {};
    writeFilters();
    render();
    announceCountSoon();
  }

  function removeFilter(token, btn) {
    var parts = token.split(':');
    var chips = $$('[data-remove]', ui.activeList);
    var i = chips.indexOf(btn);
    filters[parts[0]] = filters[parts[0]].filter(function (v) { return v !== parts[1]; });
    filtersChanged();
    var left = $$('[data-remove]', ui.activeList);
    var next = left[i] || left[i - 1];
    if (next) next.focus();
    else ui.title.focus();
  }

  function clearFilters() {
    filters = { who: [], label: [] };
    filtersChanged();
    ui.title.focus();
  }

  /* ---------- 카드 추가 ---------- */

  function openAdd() {
    if (busy || phase !== 'ready' || READONLY) return;
    ui.addForm.hidden = false;
    ui.btnAdd.setAttribute('aria-expanded', 'true');
    ui.addInput.focus();
  }

  function closeAdd(refocus) {
    ui.addForm.hidden = true;
    ui.btnAdd.setAttribute('aria-expanded', 'false');
    ui.addInput.value = '';
    setAddError(false);
    if (refocus) ui.btnAdd.focus();
  }

  function setAddError(on) {
    ui.addError.hidden = !on;
    if (on) ui.addInput.setAttribute('aria-invalid', 'true');
    else ui.addInput.removeAttribute('aria-invalid');
  }

  function submitAdd(e) {
    e.preventDefault();
    var title = ui.addInput.value.trim();
    if (!title) {
      setAddError(true);
      ui.addInput.focus();
      return;
    }
    if (busy || phase !== 'ready') return;
    seq += 1;
    var c = { id: 'n' + seq, title: title, stage: 'todo', who: null, labels: [], due: null, desc: '',
      log: [{ at: nowStamp(), who: 'me', text: COPY.created }] };
    var first = stageCards('todo')[0];
    cards.splice(first ? cards.indexOf(first) : cards.length, 0, c);
    if (hasFilters()) justAdded[c.id] = true;
    closeAdd(false);
    if (layoutTabs) setStageTab('todo');
    render();
    focusCard(c.id);
    DS.announce(eul(q(title)) + ' 할 일에 추가했어요');
  }

  /* ---------- 이벤트 ---------- */

  function bind() {
    // 끌어 놓은 뒤 따라오는 click 은 카드를 열지 않는다
    doc.addEventListener('click', function (e) {
      if (suppressClick) {
        suppressClick = false;
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    doc.addEventListener('click', function (e) {
      var t = e.target;
      if (!t.closest) return;
      var item = t.closest('[data-act]');
      if (item) { act(item); return; }
      var open = t.closest('[data-open]');
      if (open && ui.area.contains(open)) { openCard(open.getAttribute('data-open'), { opener: open }); return; }
      var stateBtn = t.closest('[data-state-action]');
      if (stateBtn) {
        var k = stateBtn.getAttribute('data-state-action');
        if (k === 'error') load(true);
        else if (k === 'empty') openAdd();
        else clearFilters();
        return;
      }
      var rm = t.closest('[data-remove]');
      if (rm) removeFilter(rm.getAttribute('data-remove'), rm);
    });

    ui.btnClear.addEventListener('click', clearFilters);

    doc.addEventListener('ds:menucheck', function (e) {
      var key = e.target.getAttribute('data-filter');
      if (!key) return;
      filters[key] = $$('[data-filter="' + key + '"]').filter(function (i) {
        return i.getAttribute('aria-checked') === 'true';
      }).map(function (i) { return i.getAttribute('data-value'); });
      filtersChanged();
    });

    ui.view.addEventListener('ds:change', function (e) {
      view = e.detail.value === 'list' ? 'list' : 'board';
      render();
    });

    ui.area.addEventListener('ds:tabchange', function (e) {
      stageTab = e.detail.value;
    });

    ui.panel.addEventListener('ds:panel-close', function () {
      openId = null;
      DS.url.set({ card: null });
      markCurrent();
      requestAnimationFrame(syncLayout);
    });

    ui.btnAdd.addEventListener('click', function () {
      if (ui.addForm.hidden) openAdd();
      else closeAdd(true);
    });
    ui.addClose.addEventListener('click', function () { closeAdd(true); });
    ui.addForm.addEventListener('submit', submitAdd);
    ui.addForm.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeAdd(true); }
    });
    // 오류가 난 칸은 입력마다 다시 검사해 맞는 순간 지운다(CMP-INPUT-03)
    ui.addInput.addEventListener('input', function () {
      if (ui.addInput.getAttribute('aria-invalid') === 'true' && ui.addInput.value.trim()) setAddError(false);
    });

    ui.area.addEventListener('pointerdown', onPointerDown);
    doc.addEventListener('touchmove', function (e) {
      if (drag && drag.started && !drag.cancelled) e.preventDefault();
    }, { passive: false });
    doc.addEventListener('contextmenu', function (e) {
      if (drag && e.target.closest && e.target.closest('.kb-card')) e.preventDefault();
    });

    if (window.ResizeObserver) {
      var raf = 0;
      new ResizeObserver(function () {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(syncLayout);
      }).observe(ui.results);
    } else {
      window.addEventListener('resize', function () { requestAnimationFrame(syncLayout); });
    }
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    ui = {
      results: $('#results'),
      title: $('#results-title'),
      count: $('#count'),
      area: $('#area'),
      btnWho: $('#btn-who'),
      btnLabel: $('#btn-label'),
      menuWho: $('#menu-who'),
      menuLabel: $('#menu-label'),
      active: $('#active'),
      activeList: $('#active-list'),
      btnClear: $('#btn-clear'),
      view: $('#view-switch'),
      btnAdd: $('#btn-add'),
      addForm: $('#add-form'),
      addInput: $('#add-title'),
      addError: $('#add-error'),
      addClose: $('#add-close'),
      panel: $('#panel'),
      panelTitle: $('#panel-title'),
      panelBody: $('#panel-body'),
      panelFoot: $('#panel-foot'),
      panelMove: $('#panel-move'),
      panelMenu: $('#panel-menu')
    };

    readUrl();
    writeFilters();
    var cid = DS.url.get('card');
    if (cid && DATA.cards.some(function (c) { return c.id === cid; })) {
      openId = cid;
      // 탭 화면에서 연 카드가 보이게 그 카드의 단계 탭을 고른다
      stageTab = DATA.cards.filter(function (c) { return c.id === cid; })[0].stage;
    } else if (cid) {
      DS.url.set({ card: null });
    }
    if (READONLY) {
      ui.area.classList.add('kb-readonly');
      ui.btnAdd.hidden = true;
      DS.banner.show({
        id: 'kb-readonly',
        tone: 'info',
        title: COPY.readonlyTitle,
        text: '카드를 옮기거나 추가하려면 편집 권한이 필요해요. 보드 관리자 ' + whoName(DATA.admin) + '에게 요청해 주세요.',
        dismissible: false,
        announce: false,
        scroll: false
      });
    }
    buildFilterMenus();
    bind();
    load(false);
  });
})();
