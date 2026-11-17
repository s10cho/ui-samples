/*
 * 부품 모음 페이지 — 견본 그리기, 눌러 보기 예시, 상태 쿼리(?state=loading|empty|error|dialog).
 * 부품 동작(알림·배너·대화상자·탭·정렬·툴팁·메뉴·테마)은 kit 의 js/ds.js 가 맡는다.
 */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  var COPY = {
    saved: '방금 저장했어요',
    teamAdded: '팀을 추가했어요',
    chipRemoved: '필터를 뺐어요',
    teamRemoved: '팀을 뺐어요',
    loadingTasks: '작업 목록을 불러오는 중이에요',
    loadingShort: '불러오는 중이에요',
    allShown: '모든 작업이 보여요',
    emptyTitle: '조건에 맞는 작업이 없어요',
    emptyText: '켜 둔 필터를 끄면 모든 작업이 보여요.',
    clearFilter: '필터 모두 끄기',
    exportTip: '내보낼 작업을 먼저 골라 주세요',
    exportBusy: '내보내는 중…',
    exportText: '예시라서 파일은 만들지 않았어요.',
    archiveTitle: '작업 3개를 보관했어요',
    archiveText: '보관함에서 언제든 다시 꺼낼 수 있어요.',
    undo: '되돌리기',
    undone: '보관을 되돌렸어요',
    deleted: '보고서 3개를 휴지통으로 옮겼어요',
    errorTitle: '작업 목록을 불러오지 못했어요',
    errorText: '연결이 잠시 끊겼어요. 다시 불러오면 이어서 볼 수 있어요.',
    reload: '다시 불러오기',
    prev: '이전',
    next: '다음',
    removeTeam: ' 빼기',
    stale: '작업 6개 · 마지막으로 불러온 내용이에요',
    unselected: '고르기를 모두 풀었어요',
    teamsUnpicked: '고른 팀이 없어요',
    colShown: ' 열을 보여요',
    colHidden: ' 열을 숨겼어요',
    quickPicked: '빠른 답변을 골랐어요: ',
    drawerApplied: '필터를 적용했어요',
    drawerCleared: '필터를 모두 지웠어요',
    contactSaved: '담당자를 저장했어요',
    contactTitle: function (n) { return '저장하려면 칸 ' + n + '개를 고쳐 주세요'; },
    skLoading: '팀 요약을 불러오는 중이에요',
    skLoaded: '팀 요약을 새로 불러왔어요'
  };

  // 예시 작업 시간 — 1초를 넘는 일이라 0.3초 뒤에 회전 표시가 보인다(CMP-FB-07·08)
  var WORK_MS = 1500;

  var SWATCHES = [
    ['바탕', ['surface-canvas', 'surface-default', 'surface-raised', 'surface-subtle', 'surface-hover', 'surface-selected', 'surface-inverse']],
    ['글자', ['fg-default', 'fg-muted', 'fg-disabled', 'fg-accent', 'fg-danger', 'fg-success', 'fg-warning', 'fg-info']],
    ['채움', ['fill-accent', 'fill-accent-hover', 'fill-accent-subtle', 'fill-danger', 'fill-danger-subtle', 'fill-success', 'fill-success-subtle', 'fill-warning', 'fill-warning-subtle', 'fill-info-subtle']],
    ['선', ['line-subtle', 'line-default', 'line-strong', 'line-control', 'line-focus', 'line-danger']],
    ['그래프', ['series-1', 'series-2', 'series-3', 'series-4', 'series-5', 'series-6']]
  ];

  var state = new URLSearchParams(location.search).get('state') || '';

  function el(tag, cls, text) {
    var node = doc.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- 색 견본 · 아이콘 격자 ---------- */

  function renderSwatches() {
    var box = $('#swatches');
    SWATCHES.forEach(function (group) {
      var wrap = el('div');
      wrap.appendChild(el('h3', 'dsx-sub', group[0]));
      var list = el('ul', 'dsx-swatches');
      group[1].forEach(function (name) {
        var item = el('li', 'dsx-swatch');
        var chip = el('span', 'dsx-swatch__chip');
        chip.style.setProperty('--c', 'var(--ds-color-' + name + ')');
        item.appendChild(chip);
        item.appendChild(el('code', null, name));
        var value = el('span', 'dsx-swatch__value');
        value.setAttribute('data-token', '--ds-color-' + name);
        item.appendChild(value);
        list.appendChild(item);
      });
      wrap.appendChild(list);
      box.appendChild(wrap);
    });
    fillSwatchValues();
  }

  function fillSwatchValues() {
    var style = getComputedStyle(root);
    $$('[data-token]').forEach(function (node) {
      node.textContent = style.getPropertyValue(node.getAttribute('data-token')).trim();
    });
  }

  function renderIcons() {
    var grid = $('#icon-grid');
    DS.icons.forEach(function (name) {
      var item = el('li');
      item.innerHTML = DS.icon(name, 'ds-icon--lg');
      item.appendChild(el('code', null, name));
      grid.appendChild(item);
    });
  }

  /* ---------- 버튼 — 저장해 보기 ---------- */

  function initSave() {
    var btn = $('#btn-save');
    var status = $('#save-status');
    var saving = false;
    btn.addEventListener('click', function () {
      if (saving) return;
      saving = true;
      status.textContent = '';
      DS.busy(btn, true);
      setTimeout(function () {
        DS.busy(btn, false).then(function () {
          saving = false;
          status.textContent = COPY.saved;
          DS.announce(COPY.saved);
        });
      }, WORK_MS);
    });
  }

  /* ---------- 입력 — 팀 추가 폼 ---------- */

  function inputChip(label, removeLabel) {
    var chip = el('span', 'ds-chip ds-chip--input', label);
    var remove = el('button', 'ds-chip__remove');
    remove.type = 'button';
    remove.setAttribute('aria-label', removeLabel);
    remove.innerHTML = DS.icon('close', 'ds-icon--sm');
    chip.appendChild(remove);
    return chip;
  }

  function initTeamForm() {
    var form = $('#team-form');
    var input = $('#team-name');
    var error = $('#team-name-error');
    var list = $('#team-list');

    function setError(on) {
      if (on) {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', error.id);
      } else {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
      }
      error.hidden = !on;
    }

    setError(false);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      if (!value) {
        setError(true);
        input.focus();
        return;
      }
      setError(false);
      list.appendChild(inputChip(value, value + COPY.removeTeam));
      input.value = '';
      DS.announce(COPY.teamAdded);
    });
    // 오류가 난 칸은 입력마다 다시 보고, 맞는 순간 오류를 지운다(CMP-INPUT-03)
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && input.value.trim()) setError(false);
    });
  }

  // 칩 빼기 — 누른 버튼이 사라지면 옆 칩으로, 없으면 다음 자리로 포커스를 옮긴다
  function initChipRemove() {
    doc.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.ds-chip__remove');
      if (!btn) return;
      var chip = btn.closest('.ds-chip');
      var box = chip.parentNode;
      var sibling = chip.nextElementSibling || chip.previousElementSibling;
      chip.remove();
      var target = sibling && $('.ds-chip__remove', sibling);
      if (target) target.focus();
      else {
        var next = DS.focusNext(box, box);
        if (next) next.focus();
      }
      DS.announce(box.id === 'team-list' ? COPY.teamRemoved : COPY.chipRemoved);
    });
  }

  /* ---------- 표 — 필터 · 고르기 · 빈 상태 · 로딩 ---------- */

  function initTable() {
    var body = $('#task-body');
    var wrap = $('#task-wrap');
    var selAll = $('#sel-all');
    var exportBtn = $('#btn-export');
    var selCount = $('#sel-count');
    var bar = $('#task-bar');
    var unselect = $('#btn-unselect');
    var summary = $('#task-summary');
    var chips = $$('.ds-chip[data-status]');
    var emptyRow = null;

    function rows() { return $$('tr[data-status]', body); }
    function shownRows() { return rows().filter(function (r) { return !r.hidden; }); }
    function box(r) { return $('input[type="checkbox"]', r); }

    function updateSelection() {
      var shown = shownRows();
      var picked = shown.filter(function (r) { return box(r).checked; }).length;
      selAll.checked = picked > 0 && picked === shown.length;
      selAll.indeterminate = picked > 0 && picked < shown.length;
      selAll.disabled = shown.length === 0;
      selCount.hidden = picked === 0;
      selCount.textContent = picked + '개 고름';
      unselect.hidden = picked === 0;
      // 좁은 폭에서 고른 작업이 있으면 작업 줄이 화면 아래에 붙는다
      DS.actionbar.set(bar, picked > 0);
      if (picked) {
        exportBtn.removeAttribute('aria-disabled');
        exportBtn.removeAttribute('data-ds-tip');
        DS.tooltip.hide();
      } else {
        exportBtn.setAttribute('aria-disabled', 'true');
        exportBtn.setAttribute('data-ds-tip', COPY.exportTip);
      }
    }

    function toggleEmpty(show) {
      if (show && !emptyRow) {
        emptyRow = el('tr', 'ds-table__empty');
        var cell = el('td');
        cell.colSpan = 7;
        cell.innerHTML = '<div class="ds-empty ds-empty--center">' + DS.icon('search', 'ds-empty__icon') +
          '<p class="ds-empty__title"></p><p class="ds-empty__text"></p>' +
          '<div class="ds-empty__actions"><button class="ds-btn" type="button" id="btn-clear-filter"></button></div></div>';
        $('.ds-empty__title', cell).textContent = COPY.emptyTitle;
        $('.ds-empty__text', cell).textContent = COPY.emptyText;
        $('#btn-clear-filter', cell).textContent = COPY.clearFilter;
        emptyRow.appendChild(cell);
        body.appendChild(emptyRow);
      } else if (!show && emptyRow) {
        emptyRow.remove();
        emptyRow = null;
      }
    }

    function applyFilter(quiet) {
      var on = chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; })
        .map(function (c) { return c.getAttribute('data-status'); });
      rows().forEach(function (r) {
        r.hidden = on.length > 0 && on.indexOf(r.getAttribute('data-status')) < 0;
        if (r.hidden && box(r).checked) {
          box(r).checked = false;
          r.classList.remove('is-selected');
        }
      });
      var total = rows().length;
      var shown = shownRows().length;
      toggleEmpty(shown === 0);
      summary.textContent = on.length ? '작업 ' + total + '개 중 ' + shown + '개' : '작업 ' + total + '개';
      updateSelection();
      if (!quiet) {
        DS.url.set({ status: on.join(',') || null });
        DS.announce(!on.length ? COPY.allShown : shown ? '작업 ' + shown + '개가 보여요' : COPY.emptyTitle);
      }
    }

    doc.addEventListener('ds:toggle', function (e) {
      if (e.target.hasAttribute('data-status')) applyFilter(false);
    });

    body.addEventListener('change', function (e) {
      var t = e.target;
      if (t.type !== 'checkbox') return;
      t.closest('tr').classList.toggle('is-selected', t.checked);
      updateSelection();
    });

    selAll.addEventListener('change', function () {
      shownRows().forEach(function (r) {
        box(r).checked = selAll.checked;
        r.classList.toggle('is-selected', selAll.checked);
      });
      updateSelection();
    });

    unselect.addEventListener('click', function () {
      rows().forEach(function (r) {
        box(r).checked = false;
        r.classList.remove('is-selected');
      });
      updateSelection();
      DS.announce(COPY.unselected);
      selAll.focus();
    });

    body.addEventListener('click', function (e) {
      if (!e.target.closest('#btn-clear-filter')) return;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      applyFilter(false);
      chips[0].focus();
    });

    exportBtn.addEventListener('click', function () {
      if (exportBtn.getAttribute('aria-disabled') === 'true') return;
      var n = shownRows().filter(function (r) { return box(r).checked; }).length;
      exportBtn.setAttribute('data-busy-label', COPY.exportBusy);
      DS.busy(exportBtn, true);
      setTimeout(function () {
        DS.busy(exportBtn, false).then(function () {
          DS.banner.show({
            id: 'export-banner', tone: 'success',
            title: '작업 ' + n + '개를 내보냈어요', text: COPY.exportText,
            focusNext: '#btn-export'
          });
        });
      }, WORK_MS);
    });

    // 주소에 남은 필터를 되살린다
    var fromUrl = (DS.url.get('status') || '').split(',').filter(Boolean);
    if (state === 'empty') fromUrl = ['rejected'];
    chips.forEach(function (c) {
      c.setAttribute('aria-pressed', fromUrl.indexOf(c.getAttribute('data-status')) >= 0 ? 'true' : 'false');
    });
    applyFilter(true);

    if (state === 'loading') {
      wrap.setAttribute('aria-busy', 'true');
      rows().forEach(function (r) { r.hidden = true; });
      var cells = '<td class="ds-table__select"><span class="ds-skeleton"></span></td><td><span class="ds-skeleton"></span></td>' +
        '<td><span class="ds-skeleton ds-skeleton--medium"></span></td><td><span class="ds-skeleton ds-skeleton--short"></span></td>' +
        '<td class="ds-num"><span class="ds-skeleton ds-skeleton--short"></span></td><td><span class="ds-skeleton ds-skeleton--medium"></span></td>' +
        '<td class="ds-table__actions"></td>';
      for (var i = 0; i < 5; i++) body.insertAdjacentHTML('beforeend', '<tr class="ds-table__skeleton" aria-hidden="true">' + cells + '</tr>');
      summary.textContent = COPY.loadingShort;
      selAll.disabled = true;
      var stats = $('#stats');
      stats.setAttribute('aria-busy', 'true');
      $$('.ds-stat__value, .ds-stat__delta', stats).forEach(function (p) {
        p.innerHTML = '<span class="ds-skeleton ' + (p.classList.contains('ds-stat__value') ? 'ds-skeleton--value' : 'ds-skeleton--medium') + '" aria-hidden="true"></span>';
      });
      DS.announce(COPY.loadingTasks);
    }
  }

  /* ---------- 첫 열 고정 표 · 체크 메뉴(보일 열) ---------- */

  function initMonthTable() {
    var table = $('#month-table');
    var all = $('#month-all');
    var boxes = function () { return $$('tbody input[type="checkbox"]', table); };
    all.addEventListener('change', function () {
      boxes().forEach(function (b) { b.checked = all.checked; });
    });
    table.addEventListener('change', function (e) {
      if (e.target === all) return;
      var on = boxes().filter(function (b) { return b.checked; }).length;
      all.checked = on === boxes().length;
      all.indeterminate = on > 0 && on < boxes().length;
    });
    // 체크 메뉴 — 켜고 끌 때마다 그 열을 보이고 숨긴다. 메뉴는 열려 있다
    doc.addEventListener('ds:menucheck', function (e) {
      var col = e.detail.value;
      var th = $('th[data-col="' + col + '"]', table);
      if (!th) return;
      var index = th.cellIndex;
      $$('tr', table).forEach(function (tr) { if (tr.cells[index]) tr.cells[index].hidden = !e.detail.checked; });
      DS.table.syncSticky(table);
      DS.announce(th.textContent + (e.detail.checked ? COPY.colShown : COPY.colHidden));
    });
  }

  /* ---------- 위로 여는 메뉴(빠른 답변) ---------- */

  function initQuickMenu() {
    $('#menu-quick').addEventListener('click', function (e) {
      var item = e.target.closest('[role="menuitem"]');
      if (!item) return;
      var label = $('.ds-menu__label', item).textContent;
      $('#quick-status').textContent = COPY.quickPicked + label;
    });
  }

  /* ---------- 오른쪽 서랍 ---------- */

  function initDrawer() {
    var dlg = $('#drawer-filter');
    var status = $('#drawer-status');
    var initial = status.innerHTML;
    $('#drawer-clear').addEventListener('click', function () {
      $$('input[type="checkbox"]', dlg).forEach(function (b) { b.checked = false; });
      $('#df-team').selectedIndex = 0;
      DS.announce(COPY.drawerCleared);
    });
    dlg.addEventListener('ds:drawer-close', function () {
      if (dlg.returnValue !== 'apply') { status.innerHTML = initial; return; }
      var on = $$('input[type="checkbox"]:checked', dlg).map(function (b) { return b.parentNode.textContent.trim(); });
      status.textContent = COPY.drawerApplied + ' — ' + (on.join(' · ') || '상태 전체') + ' · ' + $('#df-team').value;
      DS.announce(COPY.drawerApplied);
    });
  }

  /* ---------- 오류 요약 ---------- */

  function initContactForm() {
    var form = $('#contact-form');
    var fields = [
      { id: 'ct-name', label: '담당자 이름', text: '담당자 이름을 입력해 주세요' },
      { id: 'ct-team', label: '담당 팀', text: '담당 팀을 골라 주세요' }
    ];
    function check(f) {
      var input = $('#' + f.id);
      var bad = !input.value.trim();
      input.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad) input.setAttribute('aria-describedby', f.id + '-error');
      else input.removeAttribute('aria-describedby');
      $('#' + f.id + '-error').hidden = !bad;
      return bad;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = fields.filter(check);
      DS.form.summary('#contact-errors', bad, { title: COPY.contactTitle, focus: true });
      $('#contact-status').textContent = bad.length ? '' : COPY.contactSaved;
      if (!bad.length) DS.announce(COPY.contactSaved);
    });
    // 고친 칸은 바로 요약에서 뺀다(요약이 보일 때만)
    form.addEventListener('input', function (e) {
      var f = fields.filter(function (x) { return x.id === e.target.id; })[0];
      if (!f || $('#contact-errors').hidden) return;
      check(f);
      DS.form.summary('#contact-errors', fields.filter(function (x) { return $('#' + x.id).getAttribute('aria-invalid') === 'true'; }), { title: COPY.contactTitle });
    });
  }

  /* ---------- 복제 스켈레톤 ---------- */

  function initSkeletonDemo() {
    var target = $('#sk-target');
    var btn = $('#btn-sk-reload');
    if (state === 'loading') {
      target.setAttribute('aria-busy', 'true');
      DS.skeleton.show(target);
      btn.setAttribute('aria-disabled', 'true');
      return;
    }
    btn.addEventListener('click', function () {
      DS.busy(btn, true);
      target.setAttribute('aria-busy', 'true');
      // 0.3초 안에 끝나면 아무것도 보이지 않고, 보이면 0.4초는 남는다(DS.loadingTimer).
      // announce 로 보낸 "불러오는 중" 문장은 끝나면 live 영역에서 지워진다
      var timer = DS.loadingTimer(function () { DS.skeleton.show(target); }, function () {
        DS.skeleton.hide(target);
        target.removeAttribute('aria-busy');
      }, { announce: COPY.skLoading });
      setTimeout(function () {
        timer.stop();
        DS.busy(btn, false).then(function () { DS.announce(COPY.skLoaded); });
      }, WORK_MS);
    });
  }

  /* ---------- 배너 띄워 보기 ---------- */

  function initBannerDemo() {
    $('#btn-banner-demo').addEventListener('click', function () {
      DS.banner.show({
        id: 'demo-banner', tone: 'success',
        title: COPY.archiveTitle, text: COPY.archiveText,
        actions: [{ label: COPY.undo, onClick: function () { DS.announce(COPY.undone); } }],
        focusNext: '#btn-banner-demo'
      });
    });
  }

  /* ---------- 대화상자 ---------- */

  function initDialog() {
    var dlg = $('#dlg-delete');
    dlg.addEventListener('close', function () {
      if (dlg.returnValue !== 'delete') return;
      $('#delete-status').textContent = COPY.deleted;
      DS.announce(COPY.deleted);
    });
    if (state === 'dialog') DS.dialog.open(dlg, $('[data-ds-dialog="dlg-delete"]'));
  }

  /* ---------- 페이지 나누기 — 주소의 ?page= 와 맞춘다 ---------- */

  var TOTAL = 248;
  var PER_PAGE = 20;
  var PAGES = Math.ceil(TOTAL / PER_PAGE);
  var DEFAULT_PAGE = 3;

  function pageLink(n, label, cls) {
    var a = el('a', 'ds-pagination__page' + (cls ? ' ' + cls : ''));
    a.href = '?page=' + n + '#pagination';
    a.setAttribute('data-page', String(n));
    if (label) a.innerHTML = label;
    else {
      a.textContent = String(n);
      a.appendChild(el('span', 'ds-sr-only', '쪽'));
    }
    return a;
  }

  function edge(n, enabled, html) {
    var li = el('li', 'ds-pagination__edge');
    var node;
    if (enabled) node = pageLink(n, html);
    else {
      node = el('a', 'ds-pagination__page');
      node.setAttribute('role', 'link');
      node.setAttribute('aria-disabled', 'true');
      node.innerHTML = html;
    }
    li.appendChild(node);
    return li;
  }

  function renderPages(p) {
    var list = $('#pg-list');
    list.textContent = '';
    list.appendChild(edge(p - 1, p > 1, DS.icon('chevron-left') + '<span>' + COPY.prev + '</span>'));
    var show = [1, PAGES, p - 1, p, p + 1].filter(function (n, i, a) { return n >= 1 && n <= PAGES && a.indexOf(n) === i; })
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
      if (n === p) a.setAttribute('aria-current', 'page');
      li.appendChild(a);
      list.appendChild(li);
      last = n;
    });
    list.appendChild(el('li', 'ds-pagination__compact', p + ' / ' + PAGES + '쪽'));
    list.appendChild(edge(p + 1, p < PAGES, '<span>' + COPY.next + '</span>' + DS.icon('chevron-right')));
    $('#pg-summary').textContent = TOTAL + '개 중 ' + ((p - 1) * PER_PAGE + 1) + '–' + Math.min(p * PER_PAGE, TOTAL);
  }

  function initPagination() {
    var p = parseInt(DS.url.get('page'), 10);
    if (!(p >= 1 && p <= PAGES)) p = DEFAULT_PAGE;
    renderPages(p);
    $('#pg-list').addEventListener('click', function (e) {
      var a = e.target.closest('a[data-page]');
      if (!a) return;
      e.preventDefault();
      var n = parseInt(a.getAttribute('data-page'), 10);
      DS.url.set({ page: n === DEFAULT_PAGE ? null : n });
      renderPages(n);
      var current = $('#pg-list [aria-current="page"]');
      if (current) current.focus();
    });
  }

  /* ---------- 옆 패널 ---------- */

  /* ---------- 옆 메뉴 — 지금 보는 묶음 ---------- */

  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    var links = $$('.ds-nav__link[href^="#"]');
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-15% 0% -70% 0%' });
    var sections = $$('.ds-page > .ds-section');
    sections.forEach(function (s) { io.observe(s); });
    // 맨 아래까지 내리면 마지막 묶음이 지금 위치다(위쪽 경계에 닿지 못해도)
    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY < root.scrollHeight - 2) return;
      var last = byId[sections[sections.length - 1].id];
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      if (last) last.setAttribute('aria-current', 'true');
    }, { passive: true });
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    renderSwatches();
    renderIcons();
    var some = $('#ch-all');
    if (some) some.indeterminate = true;
    initSave();
    initTeamForm();
    initChipRemove();
    initTable();
    initMonthTable();
    initQuickMenu();
    initDrawer();
    initContactForm();
    initSkeletonDemo();
    initBannerDemo();
    initDialog();
    initPagination();
    initScrollSpy();
    doc.addEventListener('ds:themechange', fillSwatchValues);

    if (state === 'error') {
      DS.banner.show({
        id: 'load-error', tone: 'danger', dismissible: false,
        title: COPY.errorTitle, text: COPY.errorText,
        actions: [{ label: COPY.reload, primary: true, onClick: function () { DS.url.set({ state: null }); location.reload(); } }],
        focusNext: '#h-colors'
      });
      // 표에는 마지막으로 불러온 내용이 남아 있음을 밝힌다
      $('#task-summary').textContent = COPY.stale;
    }
  });
})();
