/*
 * 검색 결과 — 검색어로 문서·사람·업무를 찾고, 종류 탭·필터·정렬로 좁히고, 미리 보기 옆 패널로 연다.
 * 데이터는 js/data.js 의 가상 데이터(window.SEARCH_DATA)다. 서버 요청은 타이머로 흉내 낸다.
 * 부품 동작(알림·탭·서랍·옆 패널·스켈레톤·로딩·테마·옆 메뉴)은 kit 의 js/ds.js 가 맡는다.
 *
 * 상태 쿼리
 *   (q 없음)                  처음 — 최근 검색어·자주 찾는 말
 *   ?q=정산                   검색 결과
 *   ?q=정산&state=loading     스켈레톤에서 멈춘다
 *   ?q=정살                   결과 없음 + 맞춤법 제안
 *   ?q=정산&state=error       첫 검색이 실패한다(다시 불러오면 된다)
 *   ?q=정                     검색어가 너무 짧다
 *   ?q=정산&team=design&format=pdf   필터 결과 없음
 *   ?q=회의록&type=person      고른 종류에만 결과가 없다
 *   ?q=정산&drawer=filter     좁은 폭에서 필터 서랍을 연다
 *   ?q=정산&preview=d03       미리 보기 패널을 연다
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

  var DATA = window.SEARCH_DATA || { now: '2026-11-18T15:40', teams: [], people: [], docs: [], tasks: [], recent: [], popular: [] };
  var STATE = new URLSearchParams(location.search).get('state') || '';
  // 흉내 지연 — 스켈레톤·회전 표시를 보이는 흉내 로딩은 1초를 넘게 둔다(DESIGN.md 「샘플 데이터」, STA-01)
  var LOAD_MS = 1200;
  var MORE_MS = 1100;
  var PAGE = 10;
  var ALL_N = 3;
  var MIN_LEN = 2;
  var RECENT_KEY = 'search-results-recent';
  var RECENT_MAX = 8;

  var TYPES = ['doc', 'person', 'task'];
  var TABS = ['all', 'doc', 'person', 'task'];
  var TYPE_LABEL = { all: '결과', doc: '문서', person: '사람', task: '업무' };
  var UNIT = { all: '건', doc: '건', person: '명', task: '건' };
  var FORMAT = { doc: '문서', sheet: '표', slide: '발표 자료', pdf: 'PDF' };
  var STATUS = {
    todo: { label: '할 일', tone: '' },
    doing: { label: '진행 중', tone: 'info' }, // 상태 배지에 accent 톤을 쓰지 않는다(DESIGN.md)
    done: { label: '완료', tone: 'success' }
  };
  var PERIOD = { any: '언제든', '7d': '최근 7일', '30d': '최근 30일', year: '올해' };
  // 필터가 걸리는 종류
  var FACET_TYPES = { team: TYPES, period: ['doc', 'task'], format: ['doc'], status: ['task'] };

  var COPY = {
    searching: function (q) { return quote(q) + josa(q, '을', '를') + ' 검색하는 중이에요'; },
    found: function (q, n) { return quote(q) + ' 검색 결과 ' + n + '건이에요'; },
    empty: '검색어를 넣어 주세요.',
    short: '검색어를 2글자 이상 넣어 주세요.',
    noneTitle: function (q) { return quote(q) + '에 맞는 결과가 없어요'; },
    noneText: '철자를 확인하거나 더 짧은 말로 검색해 보세요.',
    suggest: function (s) { return quote(s) + josaRo(s) + ' 검색'; },
    clearQuery: '검색어 지우기',
    errorTitle: '검색 결과를 불러오지 못했어요',
    errorText: '연결이 잠시 끊겼어요. 검색어는 그대로 두었으니 다시 불러와 주세요.',
    reload: '다시 불러오기',
    filterTitle: function (t) { return '조건에 맞는 ' + (t === 'all' ? '결과' : TYPE_LABEL[t]) + josa(TYPE_LABEL[t], '이', '가') + ' 없어요'; },
    filterText: function (q, t, n) { return '필터를 빼면 ' + quote(q) + ' ' + TYPE_LABEL[t] + ' ' + n + UNIT[t] + josa(UNIT[t], '이', '가') + ' 보여요.'; },
    clearFilters: '필터 모두 지우기',
    typeTitle: function (q, t) { return quote(q) + '에 맞는 ' + TYPE_LABEL[t] + josa(TYPE_LABEL[t], '이', '가') + ' 없어요'; },
    typeText: function (n) { return '다른 종류에는 ' + n + '건이 있어요.'; },
    toAll: '전체 결과 보기',
    cleared: '필터를 모두 지웠어요',
    showing: function (t, n) { return TYPE_LABEL[t] + ' ' + n + UNIT[t] + josa(UNIT[t], '이', '가') + ' 보여요'; },
    sorted: { rel: '관련도순으로 정렬했어요', recent: '최신순으로 정렬했어요' },
    moreBtn: function (n) { return '결과 ' + n + '건 더 보기'; },
    moreNote: function (total, shown) { return total + '건 중 ' + shown + '건'; },
    moreDone: function (added, total, shown) {
      return '결과 ' + added + '건을 더 보여요. ' + (shown >= total ? total + '건을 모두 봤어요' : total + '건 중 ' + shown + '건이에요');
    },
    allOf: function (t, n) { return TYPE_LABEL[t] + ' ' + n + UNIT[t] + ' 모두 보기'; },
    recentRemoved: function (w) { return quote(w) + josa(w, '을', '를') + ' 최근 검색어에서 지웠어요'; },
    recentCleared: '최근 검색어를 모두 지웠어요'
  };

  /* ---------- 글자 도우미 ---------- */

  function quote(s) { return '‘' + s + '’'; }
  // 끝 글자 받침 — 한글은 글자 코드로, 숫자는 읽는 소리로. 그 밖(영문 등)은 받침 없음으로 본다
  function lastJong(word) {
    var c = String(word).charCodeAt(String(word).length - 1);
    if (c >= 0xAC00 && c <= 0xD7A3) return (c - 0xAC00) % 28;
    var ch = String(word).slice(-1);
    if (/[013678]/.test(ch)) return ch === '0' || ch === '3' || ch === '6' ? 16 : 8;
    return 0;
  }
  function josa(word, withJong, without) { return lastJong(word) ? withJong : without; }
  function josaRo(word) { var j = lastJong(word); return j && j !== 8 ? '으로' : '로'; }
  function norm(s) { return String(s || '').toLowerCase().replace(/\s+/g, ''); }
  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* ---------- 날짜 — DESIGN.md 「옮기기 · 파일 크기 · 날짜 표기」 ---------- */

  var NOW = DATA.now;
  function parts(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(iso || '');
    return m ? { y: +m[1], mo: +m[2], d: +m[3], hh: m[4] || '', mm: m[5] || '' } : null;
  }
  function dayNum(iso) {
    var p = parts(iso);
    return p ? Date.UTC(p.y, p.mo - 1, p.d) / 86400000 : 0;
  }
  function fmtShort(iso) {
    var p = parts(iso);
    var n = parts(NOW);
    if (!p || !n) return '';
    var diff = dayNum(NOW) - dayNum(iso);
    var time = p.hh ? p.hh + ':' + p.mm : '';
    if (time && diff === 0) return time;
    if (time && diff === 1) return '어제 ' + time;
    if (p.y === n.y) return p.mo + '월 ' + p.d + '일';
    return p.y + '년 ' + p.mo + '월 ' + p.d + '일';
  }
  function fmtDay(iso) {
    var p = parts(iso);
    var n = parts(NOW);
    if (!p) return '';
    return (n && p.y === n.y ? '' : p.y + '년 ') + p.mo + '월 ' + p.d + '일';
  }
  function fmtFull(iso) {
    var p = parts(iso);
    if (!p) return '';
    return p.y + '년 ' + p.mo + '월 ' + p.d + '일' + (p.hh ? ' ' + p.hh + ':' + p.mm : '');
  }
  function timeEl(iso, text) {
    var t = el('time', null, text);
    t.setAttribute('datetime', iso);
    return t;
  }
  function inPeriod(iso, period) {
    if (period === 'any') return true;
    var diff = dayNum(NOW) - dayNum(iso);
    if (period === '7d') return diff >= 0 && diff < 7;
    if (period === '30d') return diff >= 0 && diff < 30;
    if (period === 'year') return parts(iso).y === parts(NOW).y;
    return true;
  }

  /* ---------- 찾을 자료 ---------- */

  var TEAM = {};
  DATA.teams.forEach(function (t) { TEAM[t.id] = t.label; });
  var PEOPLE = {};
  DATA.people.forEach(function (p) { PEOPLE[p.id] = p; });
  function personName(id) { return PEOPLE[id] ? PEOPLE[id].name : ''; }

  var ITEMS = [];
  DATA.docs.forEach(function (d) {
    ITEMS.push({ type: 'doc', id: d.id, title: d.title, body: d.body, team: d.team, date: d.updated, person: d.owner, raw: d,
      extra: [TEAM[d.team], personName(d.owner), FORMAT[d.format]] });
  });
  DATA.people.forEach(function (p) {
    ITEMS.push({ type: 'person', id: p.id, title: p.name, body: p.role, team: p.team, date: p.active, raw: p,
      extra: [TEAM[p.team], p.email] });
  });
  DATA.tasks.forEach(function (t) {
    ITEMS.push({ type: 'task', id: t.id, title: t.title, body: t.body, team: t.team, date: t.updated, person: t.assignee, raw: t,
      extra: [TEAM[t.team], personName(t.assignee), STATUS[t.status].label] });
  });
  ITEMS.forEach(function (it) {
    it.nTitle = norm(it.title);
    it.nBody = norm(it.body);
    it.nExtra = it.extra.map(norm);
  });
  function itemById(id) {
    for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].id === id) return ITEMS[i];
    return null;
  }

  function termsOf(q) { return String(q || '').trim().split(/\s+/).filter(Boolean); }

  // 대소문자·띄어쓰기를 무시하고 낱말 일부만 맞아도 찾는다. 여러 낱말은 모두 들어간 것만(PAT-SEARCH-04)
  function score(it, terms) {
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = norm(terms[i]);
      var s = 0;
      if (it.nTitle.indexOf(t) >= 0) s = it.nTitle.indexOf(t) === 0 ? 12 : 10;
      else if (it.nBody.indexOf(t) >= 0) s = it.type === 'person' ? 6 : 3;
      else if (it.nExtra.some(function (x) { return x.indexOf(t) >= 0; })) s = 1;
      if (!s) return 0;
      total += s;
    }
    return total;
  }

  function compute(q) {
    var terms = termsOf(q);
    var res = { q: q, terms: terms, doc: [], person: [], task: [], total: 0 };
    ITEMS.forEach(function (it) {
      var s = score(it, terms);
      if (s) { res[it.type].push({ it: it, score: s }); res.total++; }
    });
    return res;
  }

  // 맞춤법 제안 — 결과가 없을 때 한 글자 다른 낱말(PAT-SEARCH-11)
  var VOCAB = {};
  ITEMS.forEach(function (it) {
    [it.title, it.type === 'person' ? it.body : ''].concat(it.extra).join(' ').split(/[\s·,()]+/).forEach(function (w) {
      if (w.length >= 2 && /[가-힣]/.test(w)) VOCAB[w] = (VOCAB[w] || 0) + 1;
    });
  });
  function oneEdit(a, b) {
    if (a === b || Math.abs(a.length - b.length) > 1) return false;
    var i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1);
    return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
  }
  function suggest(q) {
    var changed = false;
    var out = termsOf(q).map(function (t) {
      if (compute(t).total) return t;
      var best = null;
      var bestN = 0;
      Object.keys(VOCAB).forEach(function (w) {
        if (VOCAB[w] > bestN && oneEdit(w.toLowerCase(), t.toLowerCase())) { best = w; bestN = VOCAB[w]; }
      });
      if (best) { changed = true; return best; }
      return t;
    });
    if (!changed) return null;
    var s = out.join(' ');
    return compute(s).total ? s : null;
  }

  /* ---------- 상태 ---------- */

  function noFilters() { return { team: [], period: 'any', format: [], status: [] }; }

  var S = { q: '', type: 'all', sort: 'rel', f: noFilters(), show: PAGE };
  var base = null;          // 지금 검색어의 결과(필터 전)
  var view = null;          // 필터·정렬을 건 결과
  var phase = 'start';      // start · loading · ready · none · error
  var failOnce = STATE === 'error';
  var holdLoading = STATE === 'loading';
  var req = 0;
  var load = null;          // { timer, target, shown }
  var announceTimer = 0;
  var syncingTabs = false;
  var previewId = null;
  var ui = {};

  /* ---------- 주소(PAT-LIST-11) ---------- */

  function listParam(key, allowed) {
    return (DS.url.get(key) || '').split(',').filter(function (v, i, a) { return allowed[v] && a.indexOf(v) === i; });
  }

  function readUrl() {
    S.q = (DS.url.get('q') || '').trim();
    var t = DS.url.get('type');
    S.type = TABS.indexOf(t) > 0 ? t : 'all';
    S.sort = DS.url.get('sort') === 'recent' ? 'recent' : 'rel';
    S.f.team = listParam('team', TEAM);
    var p = DS.url.get('period');
    S.f.period = PERIOD[p] ? p : 'any';
    S.f.format = listParam('format', FORMAT);
    S.f.status = listParam('status', STATUS);
    var show = parseInt(DS.url.get('show'), 10);
    S.show = show > PAGE ? Math.min(Math.ceil(show / PAGE) * PAGE, 500) : PAGE;
  }

  function writeUrl(push) {
    DS.url.set({
      q: S.q || null,
      type: S.q && S.type !== 'all' ? S.type : null,
      sort: S.q && S.sort === 'recent' ? 'recent' : null,
      team: S.q ? S.f.team.join(',') : null,
      period: S.q && S.f.period !== 'any' ? S.f.period : null,
      format: S.q ? S.f.format.join(',') : null,
      status: S.q ? S.f.status.join(',') : null,
      show: S.q && S.type !== 'all' && S.show > PAGE ? S.show : null
    }, { push: !!push });
  }

  /* ---------- 거르기·정렬 ---------- */

  function scope() { return S.type === 'all' ? TYPES : [S.type]; }

  function passes(it, f, skip) {
    if (skip !== 'team' && f.team.length && f.team.indexOf(it.team) < 0) return false;
    if (skip !== 'period' && f.period !== 'any' && FACET_TYPES.period.indexOf(it.type) >= 0 && !inPeriod(it.date, f.period)) return false;
    if (skip !== 'format' && f.format.length && it.type === 'doc' && f.format.indexOf(it.raw.format) < 0) return false;
    if (skip !== 'status' && f.status.length && it.type === 'task' && f.status.indexOf(it.raw.status) < 0) return false;
    return true;
  }

  function byOrder(a, b) {
    if (S.sort === 'rel' && b.score !== a.score) return b.score - a.score;
    if (a.it.date !== b.it.date) return a.it.date < b.it.date ? 1 : -1;
    return a.it.id < b.it.id ? -1 : 1;
  }

  function computeView() {
    view = { doc: [], person: [], task: [] };
    TYPES.forEach(function (t) {
      view[t] = base[t].filter(function (r) { return passes(r.it, S.f); }).sort(byOrder);
    });
    view.all = view.doc.length + view.person.length + view.task.length;
  }

  function countOf(t) { return t === 'all' ? view.all : view[t].length; }
  function baseCount(t) { return t === 'all' ? base.total : base[t].length; }

  // 지금 탭에 걸리는 필터(종류 탭에서는 그 종류에 걸리지 않는 필터를 세지 않는다)
  function activeItems() {
    var types = scope();
    var applies = function (key) { return FACET_TYPES[key].some(function (t) { return types.indexOf(t) >= 0; }); };
    var list = [];
    if (applies('team')) S.f.team.forEach(function (v) { list.push({ key: 'team', value: v, text: TEAM[v] }); });
    if (applies('period') && S.f.period !== 'any') list.push({ key: 'period', value: S.f.period, text: PERIOD[S.f.period] });
    if (applies('format')) S.f.format.forEach(function (v) { list.push({ key: 'format', value: v, text: FORMAT[v] }); });
    if (applies('status')) S.f.status.forEach(function (v) { list.push({ key: 'status', value: v, text: STATUS[v].label }); });
    return list;
  }

  /* ---------- 검색어 강조 — <mark>(CMP-SEL-04: 색 + 굵기) ---------- */

  function highlight(text, terms) {
    var frag = doc.createDocumentFragment();
    text = String(text || '');
    var ranges = [];
    (terms || []).forEach(function (t) {
      var chars = norm(t).split('').map(escapeRe);
      if (!chars.length) return;
      var re = new RegExp(chars.join('\\s*'), 'gi');
      var m;
      while ((m = re.exec(text))) {
        if (!m[0].length) { re.lastIndex++; continue; }
        ranges.push([m.index, m.index + m[0].length]);
      }
    });
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [];
    ranges.forEach(function (r) {
      var last = merged[merged.length - 1];
      if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
      else merged.push([r[0], r[1]]);
    });
    var pos = 0;
    merged.forEach(function (r) {
      if (r[0] > pos) frag.appendChild(doc.createTextNode(text.slice(pos, r[0])));
      frag.appendChild(el('mark', null, text.slice(r[0], r[1])));
      pos = r[1];
    });
    if (pos < text.length) frag.appendChild(doc.createTextNode(text.slice(pos)));
    return frag;
  }

  /* ---------- 결과 행 ---------- */

  function metaSpan(content) {
    var s = el('span');
    if (typeof content === 'string') s.textContent = content;
    else s.appendChild(content);
    return s;
  }

  function itemEl(r, terms) {
    var it = r.it;
    var li = el('li', 'sr-item');
    li.setAttribute('data-id', it.id);
    // 아이콘 타일을 두지 않는다(ICN-02) — 종류는 탭·묶음 제목이 알린다. 사람만 이름을 줄인 아바타로 서로를 알아본다
    if (it.type === 'person') {
      var avatar = el('span', 'ds-avatar', it.title.slice(1));
      avatar.setAttribute('aria-hidden', 'true');
      li.appendChild(avatar);
    }

    var main = el('div', 'sr-item__main');
    var btn = el('button', 'sr-item__open');
    btn.type = 'button';
    btn.setAttribute('aria-controls', 'preview');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('data-open', it.id);
    btn.appendChild(highlight(it.title, terms));
    main.appendChild(btn);

    var snip = el('p', 'sr-item__snippet');
    snip.appendChild(highlight(it.body, terms));
    main.appendChild(snip);

    var meta = el('p', 'sr-item__meta');
    if (it.type === 'doc') {
      meta.appendChild(metaSpan(highlight(FORMAT[it.raw.format], terms)));
      meta.appendChild(metaSpan(highlight(TEAM[it.team], terms)));
      meta.appendChild(metaSpan(highlight(personName(it.person), terms)));
      var when = metaSpan(timeEl(it.date, fmtShort(it.date)));
      when.appendChild(doc.createTextNode(' 고침'));
      meta.appendChild(when);
    } else if (it.type === 'person') {
      meta.appendChild(metaSpan(highlight(TEAM[it.team], terms)));
      meta.appendChild(metaSpan(highlight(it.raw.email, terms)));
    } else {
      var st = STATUS[it.raw.status];
      meta.appendChild(el('span', 'ds-badge' + (st.tone ? ' ds-badge--' + st.tone : ''), st.label));
      var who = metaSpan('담당 ');
      who.appendChild(highlight(personName(it.person), terms));
      meta.appendChild(who);
      var due = metaSpan('마감 ');
      due.appendChild(timeEl(it.raw.due, fmtDay(it.raw.due)));
      meta.appendChild(due);
    }
    main.appendChild(meta);
    li.appendChild(main);
    return li;
  }

  function listEl(rows, terms) {
    var ul = el('ul', 'sr-list');
    rows.forEach(function (r) { ul.appendChild(itemEl(r, terms)); });
    return ul;
  }

  function emptyEl(o) {
    var box = el('div', 'ds-empty' + (o.tone === 'error' ? ' ds-empty--error' : '') + (o.inline ? ' ds-empty--inline' : ''));
    box.appendChild(DS.iconEl(o.icon, 'ds-empty__icon'));
    var title = el(o.heading || 'p', 'ds-empty__title', o.title);
    if (o.heading) { title.id = o.id || 'msg-title'; title.tabIndex = -1; }
    box.appendChild(title);
    if (o.text) box.appendChild(el('p', 'ds-empty__text', o.text));
    if (o.actions && o.actions.length) {
      var acts = el('div', 'ds-empty__actions');
      o.actions.forEach(function (a) {
        var b = el('button', 'ds-btn' + (a.primary ? ' ds-btn--primary' : ''), a.label);
        b.type = 'button';
        b.addEventListener('click', a.onClick);
        acts.appendChild(b);
      });
      box.appendChild(acts);
    }
    return box;
  }

  /* ---------- 그리기 ---------- */

  function tabOf(t) { return doc.getElementById('tab-' + t); }
  function panelOf(t) { return doc.getElementById('tp-' + t); }

  function syncTab() {
    var tab = tabOf(S.type);
    if (tab.getAttribute('aria-selected') === 'true') return;
    syncingTabs = true;
    DS.tabs.select(tab, { fromUrl: true });
    syncingTabs = false;
  }

  function renderTabs() {
    TABS.forEach(function (t) {
      var tab = tabOf(t);
      var n = countOf(t);
      $('[data-count]', tab).textContent = String(n);
      $('[data-count-sr]', tab).textContent = ' ' + n + UNIT[t];
    });
  }

  function renderFacets() {
    var types = scope();
    var f = S.f;
    $$('.sr-facet', ui.facets).forEach(function (set) {
      var key = set.getAttribute('data-facet');
      set.hidden = !FACET_TYPES[key].some(function (t) { return types.indexOf(t) >= 0; });
    });
    ui.periodHint.hidden = S.type !== 'all';
    $$('input', ui.facets).forEach(function (input) {
      var key = input.name;
      var v = input.value;
      input.checked = key === 'period' ? f.period === v : f[key].indexOf(v) >= 0;
      var label = input.closest('label');
      var count = $('[data-n]', label);
      if (!count) return;
      var n = 0;
      types.forEach(function (t) {
        if (FACET_TYPES[key].indexOf(t) < 0) return;
        base[t].forEach(function (r) {
          var it = r.it;
          var val = key === 'team' ? it.team : it.raw[key];
          if (val === v && passes(it, f, key)) n++;
        });
      });
      count.textContent = String(n);
      $('[data-n-sr]', label).textContent = ' ' + n + (key === 'team' && S.type === 'person' ? '명' : '건');
    });
  }

  function renderActive() {
    var items = activeItems();
    ui.active.hidden = !items.length;
    ui.activeList.textContent = '';
    items.forEach(function (a) {
      var chip = el('span', 'ds-chip ds-chip--input', a.text);
      var x = el('button', 'ds-chip__remove');
      x.type = 'button';
      x.setAttribute('aria-label', a.text + ' 필터 빼기');
      x.setAttribute('data-key', a.key);
      x.setAttribute('data-value', a.value);
      x.appendChild(DS.iconEl('close', 'ds-icon--sm'));
      chip.appendChild(x);
      ui.activeList.appendChild(chip);
    });
    // "모두 지우기"는 칩 줄 끝에 붙어 칩과 함께 줄바꿈한다(혼자 한 줄에 남지 않게)
    if (items.length) ui.activeList.appendChild(ui.activeClear);
    ui.filterN.hidden = !items.length;
    ui.filterN.textContent = String(items.length);
    ui.filterNsr.textContent = items.length ? ' ' + items.length + '개 걸림' : '';
  }

  function headingText() {
    return quote(S.q) + ' ' + TYPE_LABEL[S.type] + ' ' + countOf(S.type) + UNIT[S.type];
  }

  function renderPanel() {
    var t = S.type;
    var panel = panelOf(t);
    TABS.forEach(function (x) { if (x !== t) panelOf(x).textContent = ''; });
    panel.textContent = '';
    var terms = base.terms;
    var n = countOf(t);

    if (!n) {
      if (baseCount(t) && activeItems().length) {
        panel.appendChild(emptyEl({
          icon: 'filter', title: COPY.filterTitle(t), text: COPY.filterText(S.q, t, baseCount(t)),
          actions: [{ label: COPY.clearFilters, onClick: function () { clearFilters(); focusTitle(); } }]
        }));
      } else {
        panel.appendChild(emptyEl({
          icon: 'search', title: COPY.typeTitle(S.q, t), text: COPY.typeText(base.total - baseCount(t)),
          actions: [{ label: COPY.toAll, onClick: function () { DS.tabs.select(tabOf('all'), { focus: true }); } }]
        }));
      }
      return;
    }

    if (t === 'all') {
      TYPES.forEach(function (type) {
        var rows = view[type];
        if (!rows.length) return;
        var sec = el('section', 'sr-group');
        var h = el('h3', 'sr-group__title');
        h.id = 'group-' + type;
        h.appendChild(el('span', null, TYPE_LABEL[type])).setAttribute('data-ds-skeleton-keep', '');
        h.appendChild(el('span', 'sr-group__n', rows.length + UNIT[type]));
        sec.setAttribute('aria-labelledby', h.id);
        sec.appendChild(h);
        sec.appendChild(listEl(rows.slice(0, ALL_N), terms));
        if (rows.length > ALL_N) {
          var more = el('button', 'ds-btn ds-btn--sm sr-group__more', COPY.allOf(type, rows.length));
          more.type = 'button';
          more.setAttribute('data-goto', type);
          sec.appendChild(more);
        }
        panel.appendChild(sec);
      });
    } else {
      var rows = view[t];
      var shown = Math.min(S.show, rows.length);
      panel.appendChild(listEl(rows.slice(0, shown), terms));
      if (rows.length > shown) {
        var bar = el('div', 'sr-more');
        var btn = el('button', 'ds-btn sr-more__btn', COPY.moreBtn(Math.min(PAGE, rows.length - shown)));
        btn.type = 'button';
        btn.id = 'btn-more';
        btn.setAttribute('data-busy-label', '불러오는 중');
        btn.setAttribute('aria-describedby', 'more-note');
        var note = el('span', 'sr-more__note', COPY.moreNote(rows.length, shown));
        note.id = 'more-note';
        bar.appendChild(btn);
        bar.appendChild(note);
        panel.appendChild(bar);
      }
    }
    markPreview();
  }

  function renderAll() {
    computeView();
    syncTab();
    renderTabs();
    renderFacets();
    renderActive();
    ui.title.textContent = headingText();
    ui.sort.value = S.sort;
    ui.drawerDone.textContent = TYPE_LABEL[S.type] + ' ' + countOf(S.type) + UNIT[S.type] + ' 보기';
    renderPanel();
    DS.fonts.ensureText(ui.title.textContent);
  }

  // 검색 결과 하나를 결과 자리에 그린다(스켈레톤을 복제할 최종 배치)
  function paint(next) {
    base = next;
    ui.start.hidden = true;
    ui.results.hidden = false;
    ui.msg.textContent = '';
    if (next.error) {
      ui.body.hidden = true;
      ui.msg.hidden = false;
      ui.msg.appendChild(emptyEl({
        tone: 'error', icon: 'error', heading: 'h2', title: COPY.errorTitle, text: COPY.errorText,
        actions: [{ label: COPY.reload, onClick: function () { search({ user: true }); } }]
      }));
      return ui.msg;
    }
    if (!next.total) {
      var s = suggest(next.q);
      var acts = [];
      // 강조색 버튼은 검색 줄의 "검색" 하나 — 제안은 기본 버튼(CLR-07)
      if (s) acts.push({ label: COPY.suggest(s), onClick: function () { runQuery(s); } });
      acts.push({ label: COPY.clearQuery, onClick: clearQuery });
      ui.body.hidden = true;
      ui.msg.hidden = false;
      ui.msg.appendChild(emptyEl({ icon: 'search', heading: 'h2', title: COPY.noneTitle(next.q), text: COPY.noneText, actions: acts }));
      DS.fonts.ensureText(ui.msg.textContent);
      return ui.msg;
    }
    ui.msg.hidden = true;
    ui.body.hidden = false;
    renderAll();
    return ui.body;
  }

  /* ---------- 처음(검색 전) ---------- */

  function readRecent() {
    try {
      var raw = localStorage.getItem(RECENT_KEY);
      if (raw === null) return DATA.recent.slice();
      var list = JSON.parse(raw);
      return Array.isArray(list) ? list.filter(function (w) { return typeof w === 'string'; }).slice(0, RECENT_MAX) : [];
    } catch (e) { return DATA.recent.slice(); }
  }
  function writeRecent(list) {
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, RECENT_MAX))); } catch (e) { /* 저장할 수 없으면 넘어간다 */ }
  }
  function addRecent(q) {
    var list = readRecent().filter(function (w) { return norm(w) !== norm(q); });
    list.unshift(q);
    writeRecent(list);
  }

  function renderRecent() {
    var list = readRecent();
    ui.recentList.textContent = '';
    list.forEach(function (w) {
      var li = el('li', 'sr-recent__item');
      var term = el('button', 'sr-recent__term');
      term.type = 'button';
      term.setAttribute('data-term', w);
      term.appendChild(el('span', null, w));
      var x = el('button', 'ds-btn ds-btn--ghost ds-btn--icon ds-btn--sm sr-recent__remove');
      x.type = 'button';
      x.setAttribute('data-remove', w);
      x.setAttribute('aria-label', quote(w) + ' 지우기');
      x.appendChild(DS.iconEl('close'));
      li.appendChild(term);
      li.appendChild(x);
      ui.recentList.appendChild(li);
    });
    ui.recentList.hidden = !list.length;
    ui.recentNone.hidden = !!list.length;
    ui.recentClear.hidden = !list.length;
    DS.fonts.ensureText(ui.recentList.textContent);
  }

  function renderStart() {
    phase = 'start';
    cancelLoading();
    base = null;
    if (!ui.preview.hidden) DS.panel.close(ui.preview);
    ui.results.hidden = true;
    ui.results.removeAttribute('aria-busy');
    ui.start.hidden = false;
    renderRecent();
    ui.popularList.textContent = '';
    DATA.popular.forEach(function (w) {
      var li = el('li');
      var b = el('button', 'ds-chip', w);
      b.type = 'button';
      b.setAttribute('data-term', w);
      li.appendChild(b);
      ui.popularList.appendChild(li);
    });
  }

  /* ---------- 검색 ---------- */

  function cancelLoading() {
    if (!load) return;
    var l = load;
    load = null;
    clearTimeout(l.done);
    l.timer.stop();
    if (l.target) DS.skeleton.hide(l.target);
  }

  function setFieldError(msg) {
    ui.q.setAttribute('aria-invalid', 'true');
    ui.q.setAttribute('aria-describedby', 'q-error');
    ui.qErrorText.textContent = msg;
    ui.qError.hidden = false;
  }
  function clearFieldError() {
    ui.q.removeAttribute('aria-invalid');
    ui.q.removeAttribute('aria-describedby');
    ui.qError.hidden = true;
  }
  function checkField(value) {
    var n = norm(value).length;
    if (!n) return COPY.empty;
    if (n < MIN_LEN) return COPY.short;
    return '';
  }

  // opts.user — 사용자가 누른 버튼(최근 검색어·제안·다시 불러오기)이 결과와 함께 사라지면 결과 제목으로 포커스를 옮긴다
  function search(opts) {
    var user = !!(opts && opts.user);
    var my = ++req;
    cancelLoading();
    if (!ui.preview.hidden) DS.panel.close(ui.preview);
    phase = 'loading';
    var next = failOnce ? { q: S.q, error: true } : compute(S.q);
    failOnce = false;
    var l = load = { target: null, shown: false };
    ui.results.setAttribute('aria-busy', 'true');
    DS.announce(COPY.searching(S.q));
    l.timer = DS.loadingTimer(function () {
      if (load !== l) return;
      l.shown = true;
      l.target = paint(next);
      DS.skeleton.show(l.target);
    }, function () {
      if (load !== l) return;
      if (l.target) DS.skeleton.hide(l.target);
      load = null;
      ui.results.removeAttribute('aria-busy');
      settled(next, user);
    });
    if (holdLoading) { holdLoading = false; return; }
    l.done = setTimeout(function () {
      if (my !== req || load !== l) return;
      if (!l.shown) paint(next);
      l.timer.stop();
    }, LOAD_MS);
  }

  // 결과가 화면에 보인 뒤 — 알림 한 문장, 최근 검색어, 주소로 연 서랍·미리 보기
  function settled(next, user) {
    if (next.error) {
      phase = 'error';
      DS.announce(COPY.errorTitle + '. ' + COPY.errorText, { assertive: true });
    } else if (!next.total) {
      phase = 'none';
      addRecent(next.q);
      DS.announce(COPY.noneTitle(next.q));
    } else {
      phase = 'ready';
      addRecent(next.q);
      DS.announce(COPY.found(next.q, next.total));
    }
    restoreFromUrl();
    var a = doc.activeElement;
    if (user && (!a || a === doc.body)) focusTitle();
  }

  function restoreFromUrl() {
    var wantDrawer = DS.url.get('drawer') === 'filter';
    if (wantDrawer) {
      if (phase === 'ready' && !wide()) DS.drawer.open(ui.drawer, { fromUrl: true, opener: ui.btnFilters });
      else DS.url.set({ drawer: null });
    }
    var pid = DS.url.get('preview');
    if (pid) {
      var found = phase === 'ready' && TYPES.some(function (t) { return base[t].some(function (r) { return r.it.id === pid; }); });
      if (found && !wantDrawer) openPreview(pid, null, true);
      else DS.url.set({ preview: null });
    }
  }

  function focusTitle() {
    var t = phase === 'ready' ? ui.title : $('#msg-title', ui.msg);
    if (t && !t.closest('[hidden]')) t.focus();
  }

  function runQuery(q) {
    clearFieldError();
    ui.q.value = q;
    S.q = q.trim();
    S.type = 'all';
    S.sort = 'rel';
    S.f = noFilters();
    S.show = PAGE;
    writeUrl(true);
    DS.url.set({ drawer: null, preview: null });
    search({ user: true });
  }

  function clearQuery() {
    ui.q.value = '';
    clearFieldError();
    S.q = '';
    S.f = noFilters();
    writeUrl(true);
    renderStart();
    ui.q.focus();
  }

  /* ---------- 필터 ---------- */

  function filtersChanged(opts) {
    S.show = PAGE;
    writeUrl();
    renderAll();
    if (opts && opts.silent) return;
    clearTimeout(announceTimer);
    // 체크를 연달아 바꾸면 마지막 결과만 한 번 알린다
    announceTimer = setTimeout(function () {
      if (phase === 'ready') DS.announce(COPY.showing(S.type, countOf(S.type)));
    }, 400);
  }

  function clearFilters() {
    S.f = noFilters();
    filtersChanged({ silent: true });
    DS.announce(COPY.cleared);
  }

  function readFacets() {
    S.f.team = [];
    S.f.format = [];
    S.f.status = [];
    $$('input', ui.facets).forEach(function (input) {
      if (!input.checked) return;
      if (input.name === 'period') S.f.period = input.value;
      else S.f[input.name].push(input.value);
    });
  }

  function facetOption(type, name, value, label, withCount) {
    var lab = el('label', 'ds-check sr-opt');
    var input = el('input');
    input.type = type;
    input.name = name;
    input.value = value;
    lab.appendChild(input);
    var text = el('span', 'sr-opt__label', label);
    text.setAttribute('data-ds-skeleton-keep', '');
    lab.appendChild(text);
    if (withCount) {
      var n = el('span', 'ds-count');
      n.setAttribute('aria-hidden', 'true');
      n.setAttribute('data-n', '');
      var sr = el('span', 'ds-sr-only');
      sr.setAttribute('data-n-sr', '');
      lab.appendChild(n);
      lab.appendChild(sr);
    }
    return lab;
  }

  function facetGroup(key, legend, type, options, withCount, hint) {
    var set = el('fieldset', 'ds-fieldset sr-facet');
    set.setAttribute('data-facet', key);
    var lg = el('legend', null, legend);
    lg.setAttribute('data-ds-skeleton-keep', '');
    set.appendChild(lg);
    if (hint) set.appendChild(hint);
    var opts = el('div', 'ds-options');
    options.forEach(function (o) { opts.appendChild(facetOption(type, key, o[0], o[1], withCount)); });
    set.appendChild(opts);
    return set;
  }

  function buildFacets() {
    var wrap = el('div', 'sr-facets');
    wrap.id = 'facets';
    var head = el('div', 'sr-facets__head');
    var title = el('h2', 'sr-facets__title', '필터');
    title.id = 'facets-title';
    title.setAttribute('data-ds-skeleton-keep', '');
    head.appendChild(title);
    wrap.appendChild(head);

    wrap.appendChild(facetGroup('team', '팀', 'checkbox', DATA.teams.map(function (t) { return [t.id, t.label]; }), true));
    var hint = el('p', 'ds-field__hint', '문서와 업무에 적용해요.');
    hint.id = 'period-hint';
    hint.setAttribute('data-ds-skeleton-keep', '');
    wrap.appendChild(facetGroup('period', '고친 날', 'radio', Object.keys(PERIOD).map(function (k) { return [k, PERIOD[k]]; }), false, hint));
    wrap.appendChild(facetGroup('format', '문서 형식', 'checkbox', Object.keys(FORMAT).map(function (k) { return [k, FORMAT[k]]; }), true));
    wrap.appendChild(facetGroup('status', '업무 상태', 'checkbox', Object.keys(STATUS).map(function (k) { return [k, STATUS[k].label]; }), true));
    return wrap;
  }

  var wideMq = window.matchMedia ? matchMedia('(min-width: 48rem)') : null;
  function wide() { return !wideMq || wideMq.matches; }

  // 넓은 폭은 옆 열, 좁은 폭은 서랍 — 같은 필터 한 벌을 옮긴다
  function placeFacets() {
    if (wide()) {
      if (ui.drawer.open) {
        // 서랍 안 필터에 포커스가 있었으면, 옆 열로 옮긴 같은 칸으로 돌려준다(kit 는 숨은 "필터" 버튼 대신 본문 제목으로 보낸다)
        var a = doc.activeElement;
        if (a && ui.facets.contains(a)) ui.drawer.addEventListener('close', function () { if (a.isConnected) a.focus(); }, { once: true });
        DS.drawer.close(ui.drawer);
      }
      if (ui.facets.parentNode !== ui.side) ui.side.appendChild(ui.facets);
    } else if (ui.facets.parentNode !== ui.drawerBody) {
      ui.drawerBody.appendChild(ui.facets);
    }
  }

  /* ---------- 미리 보기(옆 패널) ---------- */

  function dlRow(dl, key, value) {
    dl.appendChild(el('dt', null, key));
    var dd = el('dd');
    if (typeof value === 'string') dd.textContent = value;
    else dd.appendChild(value);
    dl.appendChild(dd);
  }

  function fillPreview(it) {
    ui.pvTitle.textContent = it.title;
    var body = ui.pvBody;
    body.textContent = '';
    body.appendChild(el('p', 'sr-preview__kind', TYPE_LABEL[it.type]));
    var dl = el('dl', 'ds-dl');
    if (it.type === 'doc') {
      dlRow(dl, '형식', FORMAT[it.raw.format]);
      dlRow(dl, '팀', TEAM[it.team]);
      dlRow(dl, '작성자', personName(it.person));
      dlRow(dl, '고친 시각', timeEl(it.date, fmtFull(it.date)));
    } else if (it.type === 'person') {
      dlRow(dl, '역할', it.raw.role);
      dlRow(dl, '팀', TEAM[it.team]);
      var mail = el('a', null, it.raw.email);
      mail.href = 'mailto:' + it.raw.email;
      dlRow(dl, '이메일', mail);
      dlRow(dl, '전화', it.raw.phone);
      dlRow(dl, '최근 활동', timeEl(it.date, fmtFull(it.date)));
    } else {
      var st = STATUS[it.raw.status];
      dlRow(dl, '상태', el('span', 'ds-badge' + (st.tone ? ' ds-badge--' + st.tone : ''), st.label));
      dlRow(dl, '담당자', personName(it.person));
      dlRow(dl, '팀', TEAM[it.team]);
      dlRow(dl, '마감일', timeEl(it.raw.due, fmtDay(it.raw.due)));
      dlRow(dl, '고친 시각', timeEl(it.date, fmtFull(it.date)));
    }
    body.appendChild(dl);
    if (it.type !== 'person') body.appendChild(el('p', 'sr-preview__body', it.body));
    DS.fonts.ensureText(ui.preview.textContent);
  }

  function openPreview(id, opener, fromUrl) {
    var it = itemById(id);
    if (!it) return;
    // 다른 결과로 바꾸면 닫고 다시 연다 — 닫을 때 돌아갈 결과를 새로 기억하게
    if (!ui.preview.hidden) DS.panel.close(ui.preview);
    previewId = id;
    fillPreview(it);
    ui.preview.setAttribute('data-url-value', id);
    if (fromUrl) DS.panel.open(ui.preview, { fromUrl: true, focus: false });
    else DS.panel.open(ui.preview, { opener: opener });
    markPreview();
  }

  function markPreview() {
    var open = !ui.preview.hidden;
    $$('.sr-item:not(.ds-skeletonize *)', ui.body).forEach(function (li) {
      var on = open && li.getAttribute('data-id') === previewId;
      if (on) li.setAttribute('aria-current', 'true');
      else li.removeAttribute('aria-current');
      var b = $('.sr-item__open', li);
      if (b) b.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  }

  /* ---------- 더 보기 ---------- */

  function more(btn) {
    if (btn.hasAttribute('data-ds-pending')) return;
    var my = req;
    var type = S.type;
    var before = Math.min(S.show, view[type].length);
    DS.busy(btn, true);
    setTimeout(function () {
      if (my !== req || type !== S.type) { DS.busy(btn, false); return; }
      DS.busy(btn, false).then(function () {
        if (my !== req || type !== S.type) return;
        S.show += PAGE;
        writeUrl();
        renderPanel();
        var total = view[type].length;
        var shown = Math.min(S.show, total);
        var first = $$('.sr-item__open', panelOf(type))[before];
        if (first) first.focus();
        DS.announce(COPY.moreDone(shown - before, total, shown));
      });
    }, MORE_MS);
  }

  /* ---------- 시작 ---------- */

  function bind() {
    ui.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = ui.q.value.trim();
      var err = checkField(v);
      if (err) {
        setFieldError(err);
        DS.announce(err, { assertive: true });
        ui.q.focus();
        return;
      }
      runQuery(v);
    });

    // 오류가 난 칸은 고치는 동안 다시 검사한다(CMP-INPUT-03) — 고치면 오류가 바로 사라진다
    ui.q.addEventListener('input', function () {
      DS.fonts.ensureText(ui.q.value);
      if (ui.q.getAttribute('aria-invalid') !== 'true') return;
      var err = checkField(ui.q.value);
      if (err) ui.qErrorText.textContent = err;
      else clearFieldError();
    });

    ui.start.addEventListener('click', function (e) {
      var rm = e.target.closest('[data-remove]');
      if (rm) {
        var w = rm.getAttribute('data-remove');
        var items = $$('[data-remove]', ui.recentList);
        var i = items.indexOf(rm);
        writeRecent(readRecent().filter(function (x) { return x !== w; }));
        renderRecent();
        var left = $$('[data-remove]', ui.recentList);
        (left[i] || left[i - 1] || ui.recentTitle).focus();
        DS.announce(COPY.recentRemoved(w));
        return;
      }
      var term = e.target.closest('[data-term]');
      if (term) runQuery(term.getAttribute('data-term'));
    });

    ui.recentClear.addEventListener('click', function () {
      writeRecent([]);
      renderRecent();
      ui.recentTitle.focus();
      DS.announce(COPY.recentCleared);
    });

    ui.tabs.addEventListener('ds:tabchange', function (e) {
      if (syncingTabs || !base || base.error) return;
      S.type = e.detail.value;
      S.show = PAGE;
      writeUrl();
      renderAll();
    });

    ui.facets.addEventListener('change', function () {
      readFacets();
      filtersChanged();
    });
    ui.activeClear.addEventListener('click', function () { clearFilters(); focusTitle(); });
    ui.drawerClear.addEventListener('click', function () { clearFilters(); });

    ui.activeList.addEventListener('click', function (e) {
      var x = e.target.closest('.ds-chip__remove');
      if (!x) return;
      var all = $$('.ds-chip__remove', ui.activeList);
      var i = all.indexOf(x);
      var key = x.getAttribute('data-key');
      var v = x.getAttribute('data-value');
      if (key === 'period') S.f.period = 'any';
      else S.f[key] = S.f[key].filter(function (k) { return k !== v; });
      filtersChanged();
      var left = $$('.ds-chip__remove', ui.activeList);
      var next = left[i] || left[i - 1];
      if (next) next.focus();
      else focusTitle();
    });

    ui.sort.addEventListener('change', function () {
      S.sort = ui.sort.value === 'recent' ? 'recent' : 'rel';
      writeUrl();
      renderPanel();
      DS.announce(COPY.sorted[S.sort]);
    });

    ui.body.addEventListener('click', function (e) {
      var open = e.target.closest('.sr-item__open');
      if (open) { openPreview(open.getAttribute('data-open'), open); return; }
      var go = e.target.closest('[data-goto]');
      if (go) { DS.tabs.select(tabOf(go.getAttribute('data-goto')), { focus: true }); return; }
      var m = e.target.closest('#btn-more');
      if (m) more(m);
    });

    // 결과 제목 사이를 ↑↓ 로 오간다(PAT-SEARCH-10)
    ui.body.addEventListener('keydown', function (e) {
      if ((e.key !== 'ArrowDown' && e.key !== 'ArrowUp') || !e.target.classList.contains('sr-item__open')) return;
      var list = $$('.sr-item__open', panelOf(S.type));
      var i = list.indexOf(e.target) + (e.key === 'ArrowDown' ? 1 : -1);
      if (list[i]) { e.preventDefault(); list[i].focus(); }
    });

    ui.preview.addEventListener('ds:panel-close', function () {
      var btn = previewId ? $('.sr-item__open[data-open="' + previewId + '"]', panelOf(S.type)) : null;
      var a = doc.activeElement;
      // 결과를 다시 그려 연 버튼이 바뀌었으면 같은 결과의 새 버튼으로 돌아간다
      if (btn && a && a !== btn && (a === doc.body || a === ui.title || a === ui.main || a.tagName === 'H1')) btn.focus();
      previewId = null;
      markPreview();
    });

    if (wideMq && wideMq.addEventListener) wideMq.addEventListener('change', placeFacets);

    DS.url.onChange(function () {
      var prevQ = S.q;
      readUrl();
      ui.q.value = S.q;
      clearFieldError();
      if (!S.q) { renderStart(); return; }
      if (norm(S.q).length < MIN_LEN) { setFieldError(COPY.short); S.q = ''; renderStart(); return; }
      if (S.q !== prevQ || !base || base.error) { search(); return; }
      if (phase === 'ready') renderAll();
    });
  }

  function init() {
    ui.main = $('#main');
    ui.form = $('#search-form');
    ui.q = $('#q');
    ui.qError = $('#q-error');
    ui.qErrorText = $('#q-error-text');
    ui.start = $('#start');
    ui.recentTitle = $('#recent-title');
    ui.recentList = $('#recent-list');
    ui.recentNone = $('#recent-none');
    ui.recentClear = $('#recent-clear');
    ui.popularList = $('#popular-list');
    ui.results = $('#results');
    ui.body = $('#results-body');
    ui.msg = $('#results-msg');
    ui.tabs = $('#tabs');
    ui.side = $('#facet-side');
    ui.title = $('#results-title');
    ui.sort = $('#sort');
    ui.btnFilters = $('#btn-filters');
    ui.filterN = $('#filter-n');
    ui.filterNsr = $('#filter-n-sr');
    ui.active = $('#active');
    ui.activeList = $('#active-list');
    ui.activeClear = $('#active-clear');
    ui.drawer = $('#filter-drawer');
    ui.drawerBody = $('#drawer-body');
    ui.drawerClear = $('#drawer-clear');
    ui.drawerDone = $('#drawer-done');
    ui.preview = $('#preview');
    ui.pvTitle = $('#preview-title');
    ui.pvBody = $('#preview-body');

    ui.facets = buildFacets();
    ui.periodHint = $('#period-hint', ui.facets);
    ui.side.setAttribute('aria-labelledby', 'facets-title');
    ui.side.removeAttribute('aria-label');
    // 서랍 열림을 주소에 남긴다. 다시 여는 것은 결과가 온 뒤 좁은 폭에서만(restoreFromUrl)
    ui.drawer.setAttribute('data-url-key', 'drawer');
    ui.drawer.setAttribute('data-url-value', 'filter');
    placeFacets();

    bind();
    readUrl();
    ui.q.value = S.q;
    ui.sort.value = S.sort;
    if (wide() && DS.url.get('drawer')) DS.url.set({ drawer: null });

    if (!S.q) { renderStart(); return; }
    var err = checkField(S.q);
    if (err) {
      setFieldError(err);
      S.q = '';
      renderStart();
      return;
    }
    search();
  }

  DS.ready(init);
})();
