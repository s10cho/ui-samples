/*
 * 운영 대시보드 — 화면 동작. 가상 데이터는 js/data.js(OpsData), 그래프는 js/chart.js(OpsChart)가 맡는다.
 *
 * 상태 쿼리(설계서 5절)
 *   ?state=loading   첫 로딩 스켈레톤에서 멈춘다
 *   ?state=empty     기간에 데이터가 없다
 *   ?state=error     첫 불러오기가 실패한다(다시 불러오면 성공)
 *   ?state=stale     데이터가 18분 늦다(지금 다시 불러오면 따라잡는다)
 *   ?state=partial   응답 시간 그래프만 실패한다
 *   ?state=viewer    보기 전용 — 알림을 확인 처리할 수 없다
 *   ?state=ackerror  첫 번째 알림 확인 처리가 실패한다
 *   ?motion=off      자동 새로고침을 멈춘 채 시작한다(움직임 줄이기 설정과 같다)
 * 주소에 남기는 것: range(today·7d·30d·custom), from·to, alerts(open·all), view-orders·view-latency·view-errors(chart·table)
 */
(function () {
  'use strict';

  var D = window.OpsData;
  var DAY = D.DAY;
  // 흉내 요청 시간 — 스켈레톤·회전 표시를 보이는 요청은 1초를 넘긴다(STA-01, DESIGN.md 「샘플 데이터」)
  var DELAY = { load: 1200, auto: 600, action: 700 };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // 글은 늘 textContent 로 넣는다(데이터 문자열을 HTML 로 해석하지 않는다)
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'text') n.textContent = v;
      else if (k === 'class') n.className = v;
      else n.setAttribute(k, v === true ? '' : String(v));
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }

  function icon(name, cls) {
    return DS.iconEl(name, cls);
  }

  // 받침이 있으면 "이에요", 없으면 "예요"("13시예요", "11월 14일이에요")
  function eyo(word) {
    var c = word.charCodeAt(word.length - 1);
    return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 ? '이에요' : '예요';
  }

  /* ---------- 문구 ---------- */

  var COPY = {
    loading: '운영 데이터를 불러오는 중이에요',
    loaded: '운영 데이터를 불러왔어요',
    errorTitle: '운영 데이터를 불러오지 못했어요',
    errorText: '수집 서버가 응답하지 않아요. 잠시 뒤 다시 불러와 주세요.',
    reload: '다시 불러오기',
    hourDesc: '1시간 단위로 그려요.',
    hourDescToday: '1시간 단위로 그려요. 지금 시간대는 끝난 뒤에 그려요.',
    dayDesc: '하루 단위로 그려요.',
    emptyTitle: '이 기간에는 모인 데이터가 없어요',
    emptyText: '수집을 멈췄거나 서비스를 열기 전인 기간이에요. 다른 기간을 골라 보세요.',
    emptyAction: '최근 7일 보기',
    staleTitle: function (m) { return '데이터가 ' + m + '분째 들어오지 않았어요'; },
    staleText: function (t) { return '지표와 그래프는 ' + t + '까지 모인 데이터예요. 그 뒤의 주문과 오류는 아직 빠져 있어요.'; },
    staleAction: '지금 다시 불러오기',
    lagBadge: function (m) { return '데이터 ' + m + '분 늦음'; },
    ackFailTitle: '알림을 확인 처리하지 못했어요',
    ackFailText: '연결이 잠시 끊겼어요. 다시 시도해 주세요.',
    retry: '다시 시도',
    ack: '확인 처리',
    acking: '처리 중…',
    acked: function (left) {
      return '알림 1건을 확인 처리했어요. ' + (left ? '확인 안 함 ' + left + '건이 남았어요.' : '확인할 알림이 더 없어요.');
    },
    viewerTip: '확인할 권한이 없어요',
    openEmptyTitle: '확인하지 않은 알림이 없어요',
    openEmptyText: '새 알림이 오면 이 목록에 들어와요.',
    openEmptyAction: '이 기간 알림 모두 보기',
    allEmptyTitle: '이 기간에 난 알림이 없어요',
    chartFail: '응답 시간 추세를 불러오지 못했어요.',
    chartBack: '응답 시간 추세를 다시 불러왔어요',
    reloading: '불러오는 중…',
    noValue: '값 없음',
    me: '나'
  };

  var SEVERITY = {
    critical: { label: '심각', tone: 'danger' },
    warning: { label: '경고', tone: 'warning' },
    info: { label: '정보', tone: 'info' }
  };
  var RANK = { critical: 0, warning: 1, info: 2 };

  /* ---------- 숫자·날짜 ---------- */

  var NF = new Intl.NumberFormat('ko-KR');
  var NF1 = new Intl.NumberFormat('ko-KR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  var NF2 = new Intl.NumberFormat('ko-KR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var F_TIME = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'UTC' });
  var F_SEC = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZone: 'UTC' });
  var WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

  function ymd(day) {
    var d = new Date(day * DAY);
    return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), w: d.getUTCDay() };
  }
  function dayLabel(day) { var p = ymd(day); return p.m + '월 ' + p.d + '일'; }
  function dayLabelW(day) { var p = ymd(day); return p.m + '월 ' + p.d + '일 (' + WEEKDAYS[p.w] + ')'; }
  function dayLabelFull(day) { var p = ymd(day); return p.y + '년 ' + p.m + '월 ' + p.d + '일'; }
  function isoDay(day) { return new Date(day * DAY).toISOString().slice(0, 10); }
  function isoTime(ms, sec) { return new Date(ms).toISOString().slice(0, sec ? 19 : 16); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function hourRange(i) { return pad2(i) + ':00~' + pad2(i + 1) + ':00'; }
  function clock(ms) { return F_TIME.format(ms); }
  function whenText(ms) {
    var day = Math.floor(ms / DAY);
    return day === D.today ? clock(ms) : dayLabel(day) + ' ' + clock(ms);
  }
  function parseIso(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    if (!m) return null;
    var t = Date.UTC(+m[1], +m[2] - 1, +m[3]);
    if (isNaN(t) || new Date(t).getUTCDate() !== +m[3]) return null;
    return t / DAY;
  }

  // 원 → "4,816만" · "6억 23만"(단위 "원"은 따로 붙인다)
  function won(n) {
    var man = Math.round(n / 10000);
    if (man >= 10000) {
      var eok = Math.floor(man / 10000);
      var rest = man % 10000;
      return NF.format(eok) + '억' + (rest ? ' ' + NF.format(rest) + '만' : '');
    }
    return NF.format(man) + '만';
  }

  /* ---------- 지표·그래프 정의 ---------- */

  var METRICS = [
    { key: 'orders', label: '주문 수', unit: '건', fmt: function (v) { return NF.format(v); }, up: true },
    { key: 'revenue', label: '매출', unit: '원', fmt: won, up: true },
    { key: 'latency', label: '응답 시간(요청 95% 기준)', unit: 'ms', fmt: function (v) { return NF.format(v); }, up: false,
      limit: D.targets.latency, limitText: '목표 ' + NF.format(D.targets.latency) + 'ms 이하' },
    { key: 'errorRate', label: '오류율', unit: '%', fmt: function (v) { return NF2.format(v); }, up: false,
      limit: D.targets.errorRate, limitText: '목표 ' + NF.format(D.targets.errorRate) + '% 이하' }
  ];

  var CHARTS = [
    { id: 'orders', metric: 'orders', type: 'line', unit: '건' },
    { id: 'latency', metric: 'latency', type: 'line', unit: 'ms', target: 'latency' },
    { id: 'errors', metric: 'errorRate', type: 'bar', unit: '%', target: 'errorRate' }
  ];

  /* ---------- 상태 ---------- */

  var STATE = DS.url.get('state', '');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var t0 = performance.now();
  function now() { return D.now + (performance.now() - t0); }

  var S = {
    range: 'today',
    from: null,
    to: null,
    phase: 'idle',          // idle · ready · error
    loading: false,
    result: null,
    lastFetch: 0,
    asOf: 0,
    token: 0,
    timer: null,
    auto: !(reduceMotion || DS.url.get('motion') === 'off'),
    hold: STATE === 'loading',
    empty: STATE === 'empty',
    failFirst: STATE === 'error',
    stale: STATE === 'stale',
    failLatency: STATE === 'partial',
    viewer: STATE === 'viewer',
    failAck: STATE === 'ackerror',
    staleShown: null,
    staleClosed: false,
    acked: {}
  };

  var el = {};

  function period() {
    if (S.range === 'today') return { from: D.today, to: D.today, days: 1, today: true };
    if (S.range === '7d') return { from: D.today - 7, to: D.today - 1, days: 7 };
    if (S.range === '30d') return { from: D.today - 30, to: D.today - 1, days: 30 };
    return { from: S.from, to: S.to, days: S.to - S.from + 1 };
  }

  // 이번 기간·앞 기간의 이름과 비교 문구
  function names() {
    var p = period();
    if (p.today) return { cur: '오늘', prev: '어제', more: '어제 같은 시각보다', same: '어제 같은 시각과' };
    if (p.days === 1) return { cur: '고른 날', prev: '전날', more: '전날보다', same: '전날과' };
    return {
      cur: S.range === 'custom' ? '고른 기간' : '최근 ' + p.days + '일',
      prev: '앞 ' + p.days + '일',
      more: '앞 ' + p.days + '일보다',
      same: '앞 ' + p.days + '일과'
    };
  }

  function rangeText() {
    var p = period();
    if (p.today) return dayLabel(D.today) + ' 0시부터 지금까지';
    if (p.days === 1) return dayLabelW(p.from) + ' 하루';
    return dayLabel(p.from) + ' ~ ' + dayLabel(p.to) + ' (' + p.days + '일)';
  }

  function queryOpts() {
    var p = period();
    if (p.today) return { kind: 'today', asOf: S.asOf };
    return { kind: 'days', from: p.from, to: p.to };
  }

  /* ---------- 불러오기 ---------- */

  function setRefreshing(on, spinner) {
    el.dash.classList.toggle('is-refreshing', on);
    el.busy.hidden = !(on && spinner);
  }

  /**
   * kind: initial · range · refresh · auto · retry · recover
   * - 처음이면 0.3초 뒤 스켈레톤, 이미 그린 화면이면 이전 그림을 옅게 남긴다(DS.loadingTimer).
   * - 불러오기 오류 뒤 다시 불러오기(retry)는 오류 자리의 버튼만 처리 중으로 두고 스켈레톤을 깔지 않는다.
   * - 자동 새로고침(auto)은 조용히 — 흐림·회전 표시·aria-busy 없이 값만 바꾼다.
   */
  function load(kind, done) {
    var token = ++S.token;
    var first = S.phase !== 'ready';
    S.loading = true;
    if (kind === 'auto' && !first) {
      setTimeout(function () { if (token === S.token) finish(kind, done); }, DELAY.auto);
      return;
    }
    var fromError = S.phase === 'error';
    el.dash.setAttribute('aria-busy', 'true');
    if (first && S.hold) {
      showSkeleton();
      DS.announce(COPY.loading, { clearAfter: 0 });
      return;
    }
    var timer = DS.loadingTimer(function () {
      if (token !== S.token) return;
      if (fromError) return;
      if (first) {
        showSkeleton();
        DS.announce(COPY.loading);
        S.loadingSaid = true;
      } else {
        setRefreshing(true, kind !== 'refresh');
      }
    }, function () {
      if (token === S.token) finish(kind, done);
    });
    setTimeout(function () { if (token === S.token) timer.stop(); }, DELAY.load);
  }

  // done(ok) 은 Promise 를 돌려줄 수 있다(DS.busy 를 끄는 버튼). 결과는 그 뒤에 보인다
  function finish(kind, done) {
    S.loading = false;
    setRefreshing(false);
    el.dash.setAttribute('aria-busy', 'false');
    var failed = S.failFirst;
    S.failFirst = false;
    Promise.resolve(done ? done(!failed) : null).then(function () {
      if (failed) {
        S.phase = 'error';
        S.loadingSaid = false;
        showError();
        return;
      }
      var wasError = S.phase === 'error';
      var t = now();
      S.lastFetch = t;
      S.asOf = Math.floor((S.stale ? D.now - D.staleMinutes * 60000 : t) / 60000) * 60000;
      S.result = S.empty ? null : D.query(queryOpts());
      S.phase = 'ready';
      keepFocus(function () { render(kind); });
      // 오류 자리의 버튼이 사라졌으면 제목으로 포커스를 옮긴다
      if (wasError && (document.activeElement === document.body || !document.activeElement)) el.title.focus();
      announceFor(kind);
    });
  }

  // 한 번 불러올 때 알림은 한 문장으로 보낸다(연달아 보내면 앞 문장이 덮인다)
  function announceFor(kind) {
    var p = period();
    var msg = '';
    if (kind === 'initial') {
      // 불러오는 중이라고 알렸으면 끝났다고도 알린다
      if (S.loadingSaid) msg = COPY.loaded + '.';
      S.loadingSaid = false;
    } else if (kind === 'range') {
      var what = p.today ? '오늘' : S.range === 'custom' ? dayLabel(p.from) + '부터 ' + dayLabel(p.to) + '까지' : '최근 ' + p.days + '일';
      msg = what + ' 데이터로 바꿨어요.';
    } else if (kind === 'refresh') {
      msg = F_SEC.format(S.lastFetch) + '에 새로 불러왔어요.';
    } else if (kind === 'retry' || kind === 'recover') {
      msg = '운영 데이터를 다시 불러왔어요.';
    }
    if (S.extraSay) msg = msg ? msg + ' ' + S.extraSay : S.extraSay;
    S.extraSay = '';
    if (msg) DS.announce(msg);
  }

  // 다시 그려도 포커스가 있던 자리(같은 id)로 돌아온다
  function keepFocus(fn) {
    var a = document.activeElement;
    var id = a && a !== document.body && el.dash.contains(a) ? a.id : null;
    fn();
    if (id && document.activeElement !== a) {
      var back = document.getElementById(id);
      if (back) back.focus({ preventScroll: true });
    }
  }

  function dismissBanner(id) {
    var b = document.getElementById(id);
    if (b) DS.banner.dismiss(b);
  }

  /* ---------- 그리기 — 상태별 ---------- */

  function sections(show) {
    el.kpiSec.hidden = !show.kpi;
    el.alerts.hidden = !show.alerts;
    el.trends.hidden = !show.trends;
    el.state.hidden = !show.state;
    // 숨긴 상태 자리는 비운다 — 안의 버튼에 포커스가 남아 사라지지 않게
    if (!show.state) el.state.textContent = '';
    el.dash.classList.toggle('is-blank', !!show.state);
  }

  // 스켈레톤 줄 — 진짜 내용과 같은 글 줄(p) 안에 두어 줄 높이가 같다. 그래서 내용이 들어와도 아래가 밀리지 않는다
  function skel(cls) {
    return h('span', { class: 'ds-skeleton ops-skel-line' + (cls ? ' ' + cls : '') });
  }

  function showSkeleton() {
    sections({ kpi: true, alerts: true, trends: true });
    el.kpis.textContent = '';
    METRICS.forEach(function () {
      el.kpis.appendChild(h('div', { class: 'ops-kpi ds-stat', 'aria-hidden': 'true' }, [
        h('p', { class: 'ds-stat__label' }, [skel()]),
        h('p', { class: 'ds-stat__value' }, [skel()]),
        h('p', { class: 'ds-stat__delta' }, [skel()]),
        h('p', { class: 'ops-kpi__goal' }, [skel('ops-skel-badge')])
      ]));
    });
    [el.panelOpen, el.panelAll].forEach(function (panel) {
      panel.textContent = '';
      var ul = h('ul', { class: 'ds-list', 'aria-hidden': 'true' });
      for (var i = 0; i < 3; i++) {
        ul.appendChild(h('li', { class: 'ds-list__row ops-alert' }, [
          h('div', { class: 'ds-list__main' }, [
            h('p', { class: 'ops-alert__top' }, [skel('ops-skel-badge')]),
            h('p', { class: 'ds-list__title' }, [skel()])
          ]),
          skel('ops-skel-btn')
        ]));
      }
      panel.appendChild(ul);
    });
    el.sum.textContent = '';
    // 불러오기 전에는 개수를 보이지 않는다("0건"으로 읽히지 않게, STA-06)
    el.countOpen.parentNode.hidden = true;
    el.countAll.parentNode.hidden = true;
    // 스켈레톤은 최종 배치의 칸을 모두 그린다 — 요약 문장·범례 자리도 같은 높이로 잡는다
    el.trendsDesc.textContent = trendsDesc();
    CHARTS.forEach(function (c) {
      c.skel.hidden = false;
      c.plot.hidden = true;
      c.table.hidden = true;
      c.fail.hidden = true;
      c.view.hidden = false;
      c.sum.textContent = '';
      var line = skel();
      line.setAttribute('aria-hidden', 'true');
      c.sum.appendChild(line);
      c.legend.textContent = '';
      c.legend.hidden = false;
      c.legend.appendChild(h('li', { 'aria-hidden': 'true' }, [skel('ops-skel-legend')]));
    });
  }

  // 불러오기 오류 — 결과 자리에 오류 상태를 남긴다(닫히는 배너 하나에만 "다시 불러오기"를 두지 않는다, DESIGN.md)
  function showError() {
    sections({ state: true });
    el.state.textContent = '';
    var btn = h('button', { class: 'ds-btn ds-btn--primary', type: 'button', id: 'reload', 'data-busy-label': COPY.reloading, text: COPY.reload });
    btn.addEventListener('click', function () {
      DS.busy(btn, true);
      load('retry', function () { return DS.busy(btn, false); });
    });
    el.state.appendChild(h('div', { class: 'ds-empty ds-empty--error' }, [
      icon('error', 'ds-empty__icon'),
      h('p', { class: 'ds-empty__title', text: COPY.errorTitle }),
      h('p', { class: 'ds-empty__text', text: COPY.errorText }),
      h('div', { class: 'ds-empty__actions' }, [btn])
    ]));
    DS.announce(COPY.errorTitle + '. ' + COPY.errorText, { assertive: true });
  }

  function trendsDesc() {
    var p = period();
    if (p.today) return COPY.hourDescToday;
    return p.days === 1 ? COPY.hourDesc : COPY.dayDesc;
  }

  function render(kind) {
    renderStatus();
    el.rangeText.textContent = rangeText();
    if (S.empty) {
      sections({ alerts: true, state: true });
      renderEmpty();
    } else {
      sections({ kpi: true, alerts: true, trends: true });
      renderKpis();
      renderCharts();
    }
    // 자동 새로고침은 알림을 바꾸지 않는다 — 누르던 버튼을 그대로 둔다
    if (kind !== 'auto') renderAlerts();
  }

  function renderStatus() {
    el.updatedLine.hidden = false;
    el.updated.textContent = F_SEC.format(S.lastFetch);
    el.updated.setAttribute('datetime', isoTime(S.lastFetch, true));
    var lag = Math.floor((S.lastFetch - S.asOf) / 60000);
    if (lag > 5) {
      el.lag.hidden = false;
      el.lagText.textContent = COPY.lagBadge(lag);
      // 사용자가 닫은 지연 배너는 다시 띄우지 않는다. 늦음 배지는 남는다
      if (!S.staleClosed) showStale(lag);
    } else {
      el.lag.hidden = true;
      S.staleShown = null;
      dismissBanner('banner-stale');
      S.staleClosed = false;
    }
  }

  function showStale(lag) {
    var banner = document.getElementById('banner-stale');
    if (banner && (S.staleShown === lag || banner.contains(document.activeElement))) return;
    // 처음 띄울 때는 배너가 따로 낭독하지 않고, 바로 뒤의 완료 알림(announceFor)에 한 문장으로 붙인다.
    // 연달아 보내면 뒤 알림이 앞 문장을 덮는다(STA-12)
    if (!banner) S.extraSay = COPY.staleTitle(lag) + '. ' + COPY.staleText(clock(S.asOf)) + (S.extraSay ? ' ' + S.extraSay : '');
    DS.banner.show({
      id: 'banner-stale',
      tone: 'warning',
      title: COPY.staleTitle(lag),
      text: COPY.staleText(clock(S.asOf)),
      actions: [{ label: COPY.staleAction, onClick: recover }],
      focusNext: '#refresh',
      announce: false
    });
    S.staleShown = lag;
  }

  function recover() {
    S.stale = false;
    load('recover');
  }

  function renderEmpty() {
    el.state.textContent = '';
    var btn = h('button', { class: 'ds-btn ds-btn--primary', type: 'button', text: COPY.emptyAction });
    btn.addEventListener('click', function () {
      var radio = $('#range [data-value="7d"]');
      if (S.range === '7d') {
        S.empty = false;
        DS.url.set({ state: null });
        radio.focus();
        load('range');
      } else {
        DS.radios.select(radio, { focus: true });
      }
    });
    el.state.appendChild(h('div', { class: 'ds-empty' }, [
      icon('calendar', 'ds-empty__icon'),
      h('p', { class: 'ds-empty__title', text: COPY.emptyTitle }),
      h('p', { class: 'ds-empty__text', text: COPY.emptyText }),
      h('div', { class: 'ds-empty__actions' }, [btn])
    ]));
  }

  /* ---------- 지표 띠 ---------- */

  // 앞 기간 대비 — 의미 있는 변화만 색으로 알린다. 작은 변화는 화살표와 글만, 색은 중립
  // 기준: 주문·매출 3% 이상, 응답 시간 10ms 이상, 오류율 0.1%p 이상
  var MEANINGFUL = { orders: 3, revenue: 3, latency: 10, errorRate: 0.1 };

  function delta(m, v, pv, nm) {
    var same = { text: nm.same + ' 같아요', dir: 0 };
    var dir, text, d, size;
    if (m.key === 'orders' || m.key === 'revenue') {
      var pct = pv ? (v - pv) / pv * 100 : 0;
      if (Math.abs(pct) < 0.05) return same;
      dir = pct > 0 ? 1 : -1;
      size = Math.abs(pct);
      text = nm.more + ' ' + NF1.format(size) + '% ' + (dir > 0 ? '늘었어요' : '줄었어요');
    } else if (m.key === 'latency') {
      d = v - pv;
      if (!d) return same;
      dir = d > 0 ? 1 : -1;
      size = Math.abs(d);
      text = nm.more + ' ' + NF.format(size) + 'ms ' + (dir > 0 ? '느려요' : '빨라요');
    } else {
      d = Math.round((v - pv) * 100) / 100;
      if (!d) return same;
      dir = d > 0 ? 1 : -1;
      size = Math.abs(d);
      text = nm.more + ' ' + NF2.format(size) + '%p ' + (dir > 0 ? '높아요' : '낮아요');
    }
    var tone = size >= MEANINGFUL[m.key] ? ((dir > 0) === m.up ? 'good' : 'bad') : null;
    return { text: text, dir: dir, tone: tone };
  }

  function goal(m, v, p, nm) {
    var g = h('p', { class: 'ops-kpi__goal' });
    if (m.limit === undefined) {
      var target = (m.key === 'orders' ? D.targets.ordersPerDay : D.targets.revenuePerDay) * p.days;
      var pct = Math.round(v / target * 100);
      // kit 진행 막대(ds-progress)의 트랙·막대. 장식이라 숨기고, 값은 옆 글이 말한다
      var bar = h('span', { class: 'ds-progress__bar' });
      bar.style.setProperty('--ds-progress', Math.min(100, pct) + '%');
      g.appendChild(h('span', { class: 'ds-progress__track ops-meter', 'aria-hidden': 'true' }, [bar]));
      // 목표 줄은 한 줄로 — 억 단위 목표는 "25.2억 원"처럼 줄여 쓴다(스켈레톤과 높이가 같게)
      var amount = m.key === 'orders' ? NF.format(target) + '건' : (target >= 1e8 ? NF1.format(target / 1e8) + '억' : won(target)) + ' 원';
      g.appendChild(h('span', { text: '목표 ' + amount + '의 ' + pct + '%' }));
    } else {
      var over = v > m.limit;
      g.appendChild(over
        ? h('span', { class: 'ds-badge ds-badge--danger' }, [h('span', { class: 'ds-badge__dot' }), '목표 넘음'])
        : h('span', { class: 'ds-badge', text: '목표 안' }));
      g.appendChild(h('span', { text: m.limitText }));
    }
    return g;
  }

  function renderKpis() {
    var r = S.result;
    var p = period();
    var nm = names();
    el.kpis.textContent = '';
    METRICS.forEach(function (m) {
      var v = r.totals[m.key];
      var pv = r.prevTotals[m.key];
      var id = 'kpi-label-' + m.key;
      var dl = delta(m, v, pv, nm);
      var dEl = h('p', { class: 'ds-stat__delta' + (dl.tone ? ' ds-stat__delta--' + dl.tone : '') });
      if (dl.dir) dEl.appendChild(icon(dl.dir > 0 ? 'arrow-up' : 'arrow-down', 'ds-icon--sm'));
      dEl.appendChild(document.createTextNode(dl.text));
      el.kpis.appendChild(h('div', { class: 'ops-kpi ds-stat', role: 'group', 'aria-labelledby': id }, [
        h('p', { class: 'ds-stat__label', id: id, text: m.label }),
        h('p', { class: 'ds-stat__value' }, [m.fmt(v), h('span', { class: 'ds-stat__unit', text: m.unit })]),
        dEl,
        goal(m, v, p, nm)
      ]));
    });
  }

  /* ---------- 추세 ---------- */

  function specFor(c, r, nm) {
    var hourly = r.unit === 'hour';
    var key = c.metric;
    var pick = function (list) { return list.map(function (b) { return b ? b[key] : null; }); };
    var cur = { name: nm.cur, kind: 'cur', values: pick(r.cur) };
    var series = c.type === 'bar' ? [cur] : [{ name: nm.prev, kind: 'prev', values: pick(r.prev) }, cur];
    var target = c.target ? D.targets[c.target] : null;
    var num = key === 'errorRate' ? function (v) { return NF2.format(v); } : function (v) { return NF.format(v); };
    return {
      type: c.type,
      slots: r.slots,
      unit: r.unit,
      series: series,
      target: target === null ? null : { value: target, label: '목표 ' + NF.format(target) + c.unit, short: NF.format(target) + c.unit },
      xLabel: hourly
        ? function (i) { return i + '시'; }
        : function (i, shown, compact) {
          var day = r.from + i;
          var p = ymd(day);
          if (compact) return p.m + '.' + p.d; // 좁은 폭에서 축 글을 짧게
          if (shown < 0 || p.m !== ymd(r.from + shown).m) return dayLabel(day);
          return p.d + '일';
        },
      tipTitle: hourly ? hourRange : function (i) { return dayLabelW(r.from + i); },
      tick: function (v, top) { return NF.format(v) + (top ? c.unit : ''); },
      value: function (v) { return num(v) + c.unit; },
      num: num,
      over: function (v) { return target !== null && v > target; }
    };
  }

  function summary(c, r, spec) {
    var cur = spec.series[spec.series.length - 1].values;
    var hourly = r.unit === 'hour';
    var at = function (i) { return hourly ? i + '시' : dayLabel(r.from + i); };
    if (c.metric === 'orders') {
      var best = -1;
      cur.forEach(function (v, i) { if (v !== null && (best < 0 || v > cur[best])) best = i; });
      if (best < 0) return '';
      // 괄호 뒤 조사는 괄호 앞 말에 붙는다: "13시(147건)예요", "11월 14일(2,812건)이에요"
      return (hourly ? '가장 많은 때는 ' : '가장 많은 날은 ') + at(best) + '(' + NF.format(cur[best]) + '건)' + eyo(at(best)) + '.';
    }
    var over = [];
    cur.forEach(function (v, i) { if (v !== null && spec.over(v)) over.push(i); });
    if (!over.length) return (hourly ? '모든 시간이 ' : '모든 날이 ') + spec.target.label + ' 안이에요.';
    var list = over.slice(0, 3).map(at).join(', ') + (over.length > 3 ? ' 외 ' + (over.length - 3) + '번' : '');
    return spec.target.label + '를 넘은 ' + (hourly ? '때가 ' : '날이 ') + over.length + '번 있어요: ' + list + '.';
  }

  function renderLegend(c, spec) {
    c.legend.textContent = '';
    // 막대 그래프는 목표를 넘은 막대가 있을 때만 "목표 넘음" 범례를 둔다
    var anyOver = spec.series[0].values.some(function (v) { return v !== null && spec.over(v); });
    var items = c.type === 'bar'
      ? [['bar', '목표 안']].concat(anyOver ? [['over', '목표 넘음']] : [])
      : spec.series.slice().reverse().map(function (s) { return [s.kind, s.name]; });
    items.forEach(function (it) {
      c.legend.appendChild(h('li', null, [h('span', { class: 'ops-key ops-key--' + it[0], 'aria-hidden': 'true' }), it[1]]));
    });
  }

  function renderTable(c, spec, r) {
    var hourly = r.unit === 'hour';
    var cols = [hourly ? '시간' : '날짜'];
    var series = spec.series.slice().reverse();
    series.forEach(function (s) { cols.push(s.name + '(' + c.unit + ')'); });
    if (spec.target) cols.push('목표 대비');
    var headRow = h('tr', null, cols.map(function (txt, k) {
      return h('th', { scope: 'col', class: k > 0 && k <= series.length ? 'ds-num' : null, text: txt });
    }));
    var body = h('tbody');
    for (var i = 0; i < spec.slots; i++) {
      var cells = [h('th', { scope: 'row', text: hourly ? hourRange(i) : dayLabelW(r.from + i) })];
      series.forEach(function (s) {
        var v = s.values[i];
        cells.push(v === null || v === undefined
          ? h('td', { class: 'ds-num' }, [h('span', { 'aria-hidden': 'true', text: '—' }), h('span', { class: 'ds-sr-only', text: COPY.noValue })])
          : h('td', { class: 'ds-num', text: spec.num(v) }));
      });
      if (spec.target) {
        var cv = series[0].values[i];
        cells.push(h('td', null, cv === null || cv === undefined
          ? [h('span', { 'aria-hidden': 'true', text: '—' }), h('span', { class: 'ds-sr-only', text: COPY.noValue })]
          : [spec.over(cv)
            ? h('span', { class: 'ds-badge ds-badge--danger' }, [h('span', { class: 'ds-badge__dot' }), '목표 넘음'])
            : '목표 안']));
      }
      body.appendChild(h('tr', null, cells));
    }
    c.table.textContent = '';
    c.table.appendChild(h('table', { class: 'ds-table' }, [
      h('caption', { class: 'ds-sr-only', text: c.title + ' — ' + rangeText() }),
      h('thead', null, [headRow]),
      body
    ]));
  }

  function viewOf(c) {
    var on = $('[aria-checked="true"]', c.view);
    return on ? on.getAttribute('data-value') : 'chart';
  }

  function applyView(c) {
    if (c.failed || !c.spec) return;
    var table = viewOf(c) === 'table';
    c.table.hidden = !table;
    c.plot.hidden = table;
    c.legend.hidden = table;
  }

  function showChartFail(c) {
    c.failed = true;
    c.view.hidden = true;
    c.plot.hidden = true;
    c.table.hidden = true;
    c.legend.hidden = true;
    c.sum.textContent = '';
    c.fail.textContent = '';
    var btn = h('button', { class: 'ds-btn ds-btn--sm', type: 'button', id: c.id + '-retry', 'data-busy-label': COPY.reloading, text: COPY.reload });
    btn.addEventListener('click', function () {
      DS.busy(btn, true);
      setTimeout(function () {
        DS.busy(btn, false).then(function () {
          S.failLatency = false;
          renderCharts();
          (viewOf(c) === 'table' ? c.table : c.plot).focus();
          DS.announce(COPY.chartBack);
        });
      }, 700);
    });
    c.fail.appendChild(h('p', { class: 'ops-chart__failtext' }, [icon('error'), h('span', { text: COPY.chartFail })]));
    c.fail.appendChild(btn);
    c.fail.hidden = false;
    // 실패는 처음 한 번만 읽힌다(자동 새로고침마다 되풀이하지 않는다). 같은 때 나가는 완료 알림과 한 문장으로 묶는다
    if (!c.failSaid) S.extraSay = S.extraSay ? S.extraSay + ' ' + COPY.chartFail : COPY.chartFail;
    c.failSaid = true;
  }

  function renderCharts() {
    var r = S.result;
    var nm = names();
    el.trendsDesc.textContent = trendsDesc();
    CHARTS.forEach(function (c) {
      c.skel.hidden = true;
      if (c.id === 'latency' && S.failLatency) { showChartFail(c); return; }
      c.failed = false;
      c.failSaid = false;
      c.fail.hidden = true;
      c.view.hidden = false;
      c.spec = specFor(c, r, nm);
      c.sum.textContent = summary(c, r, c.spec);
      renderLegend(c, c.spec);
      renderTable(c, c.spec, r);
      applyView(c);
      c.chart.update(c.spec);
    });
  }

  /* ---------- 알림 ---------- */

  function ackOf(a) {
    return a.ack || S.acked[a.id] || null;
  }

  function alertLists() {
    var all = S.empty ? [] : D.alerts();
    var p = period();
    var open = all.filter(function (a) { return !ackOf(a); }).sort(function (a, b) {
      return RANK[a.severity] - RANK[b.severity] || b.at - a.at;
    });
    var inRange = all.filter(function (a) {
      var d = Math.floor(a.at / DAY);
      return d >= p.from && d <= p.to;
    }).sort(function (a, b) { return b.at - a.at; });
    return { open: open, inRange: inRange };
  }

  function alertRow(a, which) {
    var sev = SEVERITY[a.severity];
    var tid = 'alert-' + which + '-' + a.id;
    var st = ackOf(a);
    var main = h('div', { class: 'ds-list__main' }, [
      h('p', { class: 'ops-alert__top' }, [
        h('span', { class: 'ds-badge ds-badge--' + sev.tone }, [h('span', { class: 'ds-badge__dot' }), sev.label]),
        h('span', { class: 'ds-list__meta' }, [a.area + ' · ', h('time', { datetime: isoTime(a.at), text: whenText(a.at) })])
      ]),
      h('p', { class: 'ds-list__title', id: tid, text: a.text })
    ]);
    if (st) main.appendChild(h('p', { class: 'ds-list__meta', text: '확인함 · ' + whenText(st.at) + ' · ' + st.by }));
    var row = h('li', { class: 'ds-list__row ops-alert' + (st ? '' : ' is-unread'), 'data-id': a.id }, [main]);
    if (!st) {
      var btn = h('button', {
        class: 'ds-btn ds-btn--sm ops-alert__btn', type: 'button', id: 'ack-' + which + '-' + a.id,
        'data-ack': a.id, 'aria-describedby': tid, 'data-busy-label': COPY.acking, text: COPY.ack
      });
      if (S.viewer) {
        btn.setAttribute('aria-disabled', 'true');
        btn.setAttribute('data-ds-tip', COPY.viewerTip);
      }
      row.appendChild(btn);
    }
    return row;
  }

  function fillPanel(panel, list, which, allCount) {
    panel.textContent = '';
    if (!list.length) {
      var box = h('div', { class: 'ds-empty ops-alerts__empty' });
      if (which === 'open') {
        box.appendChild(h('p', { class: 'ds-empty__title', text: COPY.openEmptyTitle }));
        box.appendChild(h('p', { class: 'ds-empty__text', text: COPY.openEmptyText }));
        if (allCount) {
          var b = h('button', { class: 'ds-btn ds-btn--sm', type: 'button', id: 'show-all', text: COPY.openEmptyAction });
          b.addEventListener('click', function () { DS.tabs.select($('#tab-all'), { focus: true }); });
          box.appendChild(h('div', { class: 'ds-empty__actions' }, [b]));
        }
      } else {
        box.appendChild(h('p', { class: 'ds-empty__title', text: COPY.allEmptyTitle }));
      }
      panel.appendChild(box);
      return;
    }
    var ul = h('ul', { class: 'ds-list' });
    list.forEach(function (a) { ul.appendChild(alertRow(a, which)); });
    panel.appendChild(ul);
  }

  function renderAlerts() {
    var L = alertLists();
    el.countOpen.textContent = String(L.open.length);
    el.countAll.textContent = String(L.inRange.length);
    el.countOpen.parentNode.hidden = false;
    el.countAll.parentNode.hidden = false;
    renderAlertSummary(L);
    el.note.hidden = !S.viewer;
    fillPanel(el.panelOpen, L.open, 'open', L.inRange.length);
    fillPanel(el.panelAll, L.inRange, 'all');
  }

  // 지금 고른 탭의 알림을 심각도별로 센다 — 0인 심각도는 숨긴다(PAT-DASH-05)
  function renderAlertSummary(L) {
    L = L || alertLists();
    var all = $('#tab-all').getAttribute('aria-selected') === 'true';
    var list = all ? L.inRange : L.open;
    var parts = ['critical', 'warning', 'info'].map(function (s) {
      var n = list.filter(function (a) { return a.severity === s; }).length;
      return n ? SEVERITY[s].label + ' ' + n : null;
    }).filter(Boolean);
    el.sum.textContent = parts.join(' · ');
    el.sum.hidden = !parts.length;
  }

  // 처리 중 버튼을 다시 누르는 것은 kit 이 막는다(data-ds-pending). 보기 전용이면 버튼이 aria-disabled 라 눌리지 않는다
  function ack(btn) {
    if (!btn || S.viewer) return;
    var id = btn.getAttribute('data-ack');
    var panel = btn.closest('[role="tabpanel"]');
    var which = panel.id === 'panel-open' ? 'open' : 'all';
    var bid = btn.id;
    var fail = S.failAck;
    S.failAck = false;
    DS.busy(btn, true);
    setTimeout(function () {
      DS.busy(btn, false).then(function () {
        if (fail) ackFailed(bid);
        else acked(id, panel, which);
      });
    }, 700);
  }

  function ackFailed(bid) {
    DS.banner.show({
      id: 'banner-ack',
      tone: 'danger',
      title: COPY.ackFailTitle,
      text: COPY.ackFailText,
      actions: [{ label: COPY.retry, onClick: function () { ack(document.getElementById(bid)); } }],
      focusNext: '#' + bid
    });
  }

  function acked(id, panel, which) {
    var order = $$('[data-ack]', panel).map(function (b) { return b.getAttribute('data-ack'); });
    var idx = order.indexOf(id);
    S.acked[id] = { at: now(), by: COPY.me };
    dismissBanner('banner-ack');
    renderAlerts();
    // 포커스 — 다음 행의 버튼, 없으면 앞 행, 그것도 없으면 빈 문장의 버튼이나 목록
    var rest = order.filter(function (x) { return x !== id; });
    var nextId = rest[idx] || rest[idx - 1];
    var target = (nextId && document.getElementById('ack-' + which + '-' + nextId)) || $('#show-all', panel) || panel;
    target.focus();
    DS.announce(COPY.acked(alertLists().open.length));
  }

  /* ---------- 기간 ---------- */

  function validate(f, t) {
    var e = {};
    var out = '고를 수 있는 기간 밖이에요.';
    if (f === null) e.from = '시작일을 골라 주세요.';
    else if (f < D.firstDay || f > D.lastFullDay) e.from = out;
    if (t === null) e.to = '종료일을 골라 주세요.';
    else if (t < D.firstDay || t > D.lastFullDay) e.to = out;
    if (!e.from && !e.to) {
      if (f > t) e.to = '종료일이 시작일보다 빨라요. 날짜를 바꿔 주세요.';
      else if (t - f + 1 > D.maxDays) e.to = '기간은 ' + D.maxDays + '일까지 고를 수 있어요.';
    }
    return e;
  }

  function fieldError(input, box, msg) {
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', 'custom-hint ' + box.id);
      $('span', box).textContent = msg;
      box.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      input.setAttribute('aria-describedby', 'custom-hint');
      box.hidden = true;
    }
  }

  /**
   * 직접 기간 검사(CMP-INPUT-03)
   * - 칸을 떠날 때(blur) 그 칸을 검사한다. 입력을 마치기 전에는 오류를 띄우지 않는다.
   * - 오류가 난 칸이 있으면 두 칸 중 어느 쪽을 고쳐도(input·change) 다시 검사해 맞는 순간 오류를 지운다.
   *   시작일을 고쳐 "종료일이 시작일보다 빨라요"가 풀리는 경우도 여기서 지운다.
   * - "기간 적용"을 누르면 두 칸을 모두 검사한다.
   */
  function checkCustom(mode, field) {
    var errs = validate(parseIso(el.from.value), parseIso(el.to.value));
    var pairs = [[el.from, el.fromError, errs.from], [el.to, el.toError, errs.to]];
    pairs.forEach(function (p) {
      var showing = p[0].getAttribute('aria-invalid') === 'true';
      if (mode === 'submit' || (mode === 'blur' && p[0] === field) || (mode === 'edit' && showing)) {
        fieldError(p[0], p[1], p[2]);
      }
    });
    return errs;
  }

  function syncCustom() {
    var on = S.range === 'custom';
    el.custom.hidden = !on;
    if (!on) return;
    el.from.value = isoDay(S.from);
    el.to.value = isoDay(S.to);
    fieldError(el.from, el.fromError, null);
    fieldError(el.to, el.toError, null);
  }

  function readUrl() {
    var r = DS.url.get('range', 'today');
    S.range = ['today', '7d', '30d', 'custom'].indexOf(r) >= 0 ? r : 'today';
    var f = parseIso(DS.url.get('from'));
    var t = parseIso(DS.url.get('to'));
    var e = validate(f, t);
    if (!e.from && !e.to) {
      S.from = f;
      S.to = t;
    } else if (S.range === 'custom') {
      S.from = D.lastFullDay - 13;
      S.to = D.lastFullDay;
      DS.url.set({ from: isoDay(S.from), to: isoDay(S.to) });
    }
  }

  /* ---------- 자동 새로고침 ---------- */

  function schedule() {
    clearInterval(S.timer);
    S.timer = null;
    if (!S.auto || document.hidden) return;
    S.timer = setInterval(function () {
      if (S.phase === 'ready' && !S.loading) load('auto');
    }, 30000);
  }

  /* ---------- 시작 ---------- */

  DS.ready(function () {
    el = {
      title: $('#page-title'), dash: $('#dash'), kpiSec: $('#kpi'), kpis: $('#kpis'), state: $('#dash-state'), alerts: $('#alerts'), trends: $('#trends'),
      updatedLine: $('#updated-line'), updated: $('#updated'), lag: $('#lag-badge'), lagText: $('#lag-text'), busy: $('#busy'),
      auto: $('#auto'), refresh: $('#refresh'), range: $('#range'), rangeText: $('#range-text'),
      custom: $('#custom'), from: $('#from'), to: $('#to'), fromError: $('#from-error'), toError: $('#to-error'), hint: $('#custom-hint'),
      trendsDesc: $('#trends-desc'), sum: $('#alerts-sum'), note: $('#viewer-note'),
      countOpen: $('#count-open'), countAll: $('#count-all'), panelOpen: $('#panel-open'), panelAll: $('#panel-all')
    };

    CHARTS.forEach(function (c) {
      c.fig = $('#chart-' + c.id);
      c.title = $('#' + c.id + '-title').textContent;
      c.plot = $('#' + c.id + '-plot');
      c.table = $('#' + c.id + '-table');
      c.legend = $('#' + c.id + '-legend');
      c.sum = $('#' + c.id + '-sum');
      c.fail = $('#' + c.id + '-fail');
      c.skel = $('.ops-chart__skel', c.fig);
      c.view = $('.ops-view', c.fig);
      c.chart = new window.OpsChart(c.plot);
      c.view.addEventListener('ds:change', function () { applyView(c); });
    });

    readUrl();
    var minDay = isoDay(D.firstDay);
    var maxDay = isoDay(D.lastFullDay);
    [el.from, el.to].forEach(function (input) { input.min = minDay; input.max = maxDay; });
    el.hint.textContent = dayLabelFull(D.firstDay) + '부터 어제(' + dayLabel(D.lastFullDay) + ')까지, ' + D.maxDays + '일 안에서 골라요.';
    syncCustom();
    el.rangeText.textContent = rangeText();

    el.range.addEventListener('ds:change', function (e) {
      var v = e.detail.value;
      if (v === S.range) return;
      S.range = v;
      if (S.empty || S.hold) {
        S.empty = false;
        S.hold = false;
        DS.url.set({ state: null });
      }
      if (v === 'custom') {
        if (S.from === null) { S.from = D.lastFullDay - 13; S.to = D.lastFullDay; }
        DS.url.set({ from: isoDay(S.from), to: isoDay(S.to) });
      } else {
        DS.url.set({ from: null, to: null });
      }
      syncCustom();
      el.rangeText.textContent = rangeText();
      load('range');
    });

    [el.from, el.to].forEach(function (input) {
      input.addEventListener('blur', function () { if (input.value) checkCustom('blur', input); });
      ['input', 'change'].forEach(function (type) {
        input.addEventListener(type, function () { checkCustom('edit', input); });
      });
    });

    el.custom.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = parseIso(el.from.value);
      var t = parseIso(el.to.value);
      var errs = checkCustom('submit');
      if (errs.from || errs.to) {
        (errs.from ? el.from : el.to).focus();
        return;
      }
      S.from = f;
      S.to = t;
      DS.url.set({ from: isoDay(f), to: isoDay(t) });
      el.rangeText.textContent = rangeText();
      load('range');
    });

    el.auto.checked = S.auto;
    el.auto.addEventListener('change', function () {
      S.auto = el.auto.checked;
      schedule();
    });
    document.addEventListener('visibilitychange', function () {
      schedule();
      // 다시 보이면 30초가 지났을 때 바로 한 번 새로 불러온다
      if (!document.hidden && S.auto && S.phase === 'ready' && !S.loading && now() - S.lastFetch > 30000) load('auto');
    });

    el.refresh.addEventListener('click', function () {
      if (S.hold) {
        S.hold = false;
        DS.url.set({ state: null });
      }
      S.stale = false;
      DS.busy(el.refresh, true);
      load(S.phase === 'ready' ? 'refresh' : 'retry', function () { return DS.busy(el.refresh, false); });
    });

    document.addEventListener('ds:banner-dismiss', function (e) {
      if (e.detail && e.detail.id === 'banner-stale') S.staleClosed = true;
    });

    el.alerts.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-ack]');
      if (btn) ack(btn);
    });
    el.alerts.addEventListener('ds:tabchange', function () {
      if (S.phase === 'ready') renderAlertSummary();
    });

    schedule();
    load('initial');

    // 웹 글꼴이 늦게 붙으면 글자 폭이 바뀐다 — 축 글 자리를 다시 잰다
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        CHARTS.forEach(function (c) { if (c.spec && !c.plot.hidden) c.chart.draw(); });
      });
    }
  });
})();
