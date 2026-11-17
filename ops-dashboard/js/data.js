/*
 * 가상 데이터 — 가상 쇼핑몰의 운영 지표와 알림.
 * DESIGN.md 「샘플 데이터」: 화면 코드와 섞지 않으려고 가상 데이터와 그 생성 코드를 이 파일 한 곳에만 둔다.
 *
 * - 모든 값은 문자열 시드로 만든 결정적 값이다. 몇 번을 열어도 같은 숫자가 나온다.
 * - 시각은 벽시계 시각을 UTC 숫자로 다룬다. 기계의 시간대와 상관없이 같은 날짜·시각이 나온다.
 * - 화면의 "지금"은 2026년 11월 17일(화) 14:00 이다. 화면을 열어 둔 시간만큼 앞으로 간다(page.js).
 */
(function () {
  'use strict';

  var HOUR = 3600000;
  var DAY = 24 * HOUR;
  var NOW = Date.UTC(2026, 10, 17, 14, 0, 0);
  var TODAY = Math.floor(NOW / DAY);

  /* ---------- 시드 난수 ---------- */

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rand(key) {
    var t = (hash(key) + 0x6d2b79f5) | 0;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  function noise(key, amp) {
    return (rand(key) * 2 - 1) * amp;
  }

  /* ---------- 하루 모양 ---------- */

  // 시간대별 주문 비중(밤에 낮고 점심·저녁에 높다)
  var SHAPE = [22, 14, 9, 7, 6, 8, 14, 24, 36, 46, 52, 56, 62, 64, 58, 54, 52, 50, 50, 56, 64, 68, 58, 40];
  var SHAPE_SUM = SHAPE.reduce(function (a, b) { return a + b; }, 0);
  var SHAPE_MAX = Math.max.apply(null, SHAPE);
  // 요일 비중(0 = 일요일)
  var WEEKDAY = [1.1, 0.95, 0.97, 0.98, 1, 1.06, 1.14];

  // 장애가 있던 때 — [오늘 기준 며칠 전(음수), 시, 응답 시간 더함(ms), 오류율 더함(%p)]
  var INCIDENTS = [
    [0, 10, 115, 0.62],
    [0, 13, 185, 1.18],
    [-3, 20, 150, 0.95],
    [-9, 14, 70, 0.35],
    [-16, 21, 90, 0.85],
    [-24, 19, 160, 1.6],
    [-41, 11, 120, 0.9],
    [-63, 15, 100, 0.7]
  ];
  var incidentAt = {};
  INCIDENTS.forEach(function (x) { incidentAt[(TODAY + x[0]) + ':' + x[1]] = { lat: x[2], err: x[3] }; });

  /* ---------- 한 시간 값 ---------- */

  var hourCache = {};

  function hourData(day, h) {
    var key = day + ':' + h;
    if (hourCache[key]) return hourCache[key];
    var weekday = (day + 4) % 7; // 1970-01-01 은 목요일
    var daily = 2450 * WEEKDAY[weekday] * (1 + (day - TODAY) * 0.0006) * (1 + noise('d' + day, 0.05));
    var orders = Math.max(0, Math.round(daily * SHAPE[h] / SHAPE_SUM * (1 + noise('o' + key, 0.09))));
    var aov = 34000 + noise('v' + key, 1800);
    var requests = Math.round(orders * (36 + noise('q' + key, 3)));
    var inc = incidentAt[key] || { lat: 0, err: 0 };
    var latency = Math.round(190 + 70 * SHAPE[h] / SHAPE_MAX + noise('l' + key, 14) + inc.lat);
    var errorRate = Math.max(0.05, 0.31 + noise('e' + key, 0.07) + inc.err);
    var d = {
      start: day * DAY + h * HOUR,
      orders: orders,
      revenue: Math.round(orders * aov / 100) * 100,
      requests: requests,
      latency: latency,
      errorRate: Math.round(errorRate * 100) / 100
    };
    hourCache[key] = d;
    return d;
  }

  /* ---------- 묶기 ---------- */

  // parts: [{ d: 한 시간 값, f: 비율(0~1) }] — 지표를 합치고, 응답 시간은 요청 수로 가중 평균한다
  function aggregate(parts, start) {
    var o = 0, rev = 0, req = 0, err = 0, lat = 0;
    parts.forEach(function (p) {
      var q = p.d.requests * p.f;
      o += p.d.orders * p.f;
      rev += p.d.revenue * p.f;
      req += q;
      err += q * p.d.errorRate / 100;
      lat += q * p.d.latency;
    });
    if (!req) return null;
    return {
      start: start,
      orders: Math.round(o),
      revenue: Math.round(rev),
      requests: Math.round(req),
      latency: Math.round(lat / req),
      errorRate: Math.round(err / req * 10000) / 100
    };
  }

  function dayParts(day, untilHour, fraction) {
    var parts = [];
    var last = untilHour === undefined ? 24 : untilHour;
    for (var h = 0; h < last; h++) parts.push({ d: hourData(day, h), f: 1 });
    if (fraction) parts.push({ d: hourData(day, last), f: fraction });
    return parts;
  }

  function dayData(day) {
    return aggregate(dayParts(day), day * DAY);
  }

  function hourBucket(day, h) {
    return aggregate([{ d: hourData(day, h), f: 1 }], day * DAY + h * HOUR);
  }

  /**
   * 기간 하나의 값.
   *  { kind: 'today', asOf: 시각(ms) }       — 오늘 0시부터 asOf 까지. 그래프는 끝난 시간만, 합계는 진행 중인 시간까지
   *  { kind: 'days', from: 날 번호, to: 날 번호 } — 하루면 1시간 단위, 이틀 넘으면 하루 단위
   * 돌려주는 것: unit, slots, cur[], prev[](같은 순서의 앞 기간), totals, prevTotals, days
   */
  function query(opts) {
    var cur = [], prev = [], totals, prevTotals, unit, slots, h;
    if (opts.kind === 'today') {
      var mins = Math.max(0, Math.floor((opts.asOf - TODAY * DAY) / 60000));
      var done = Math.min(24, Math.floor(mins / 60));
      var frac = (mins % 60) / 60;
      unit = 'hour';
      slots = 24;
      for (h = 0; h < 24; h++) {
        cur.push(h < done ? hourBucket(TODAY, h) : null);
        prev.push(hourBucket(TODAY - 1, h));
      }
      totals = aggregate(dayParts(TODAY, done, frac), TODAY * DAY);
      prevTotals = aggregate(dayParts(TODAY - 1, done, frac), (TODAY - 1) * DAY);
      return { unit: unit, slots: slots, cur: cur, prev: prev, totals: totals, prevTotals: prevTotals, days: 1, from: TODAY, to: TODAY };
    }

    var n = opts.to - opts.from + 1;
    if (n === 1) {
      unit = 'hour';
      slots = 24;
      for (h = 0; h < 24; h++) {
        cur.push(hourBucket(opts.from, h));
        prev.push(hourBucket(opts.from - 1, h));
      }
      totals = dayData(opts.from);
      prevTotals = dayData(opts.from - 1);
    } else {
      unit = 'day';
      slots = n;
      var all = [], allPrev = [];
      for (var i = 0; i < n; i++) {
        cur.push(dayData(opts.from + i));
        prev.push(dayData(opts.from - n + i));
        all = all.concat(dayParts(opts.from + i));
        allPrev = allPrev.concat(dayParts(opts.from - n + i));
      }
      totals = aggregate(all, opts.from * DAY);
      prevTotals = aggregate(allPrev, (opts.from - n) * DAY);
    }
    return { unit: unit, slots: slots, cur: cur, prev: prev, totals: totals, prevTotals: prevTotals, days: n, from: opts.from, to: opts.to };
  }

  /* ---------- 알림 ---------- */

  // [id, 며칠 전(0 = 오늘), 시각, 심각도, 영역, 내용, 확인 시각, 확인한 곳]
  var ALERTS = [
    ['a1', 0, '13:12', 'critical', '결제', '5분 동안 결제 요청의 2% 넘게 오류가 났어요'],
    ['a2', 0, '13:05', 'warning', '주문 API', '응답 시간(95%)이 400ms를 넘었어요'],
    ['a3', 0, '11:40', 'warning', '상품', '상품 이미지가 1초 넘게 걸리는 요청이 늘었어요'],
    ['a4', 0, '10:02', 'warning', '주문 API', '오류율이 1% 넘게 올랐어요', '10:06', '운영 1팀'],
    ['a5', 0, '09:00', 'info', '배포', '주문 API 2.14.0을 배포했어요', '09:03', '운영 1팀'],
    ['a6', 0, '03:00', 'info', 'DB', '정기 점검을 마쳤어요', '03:10', '운영 2팀'],
    ['a7', -3, '20:11', 'critical', '결제', '5분 동안 결제 요청의 2% 넘게 오류가 났어요', '20:14', '운영 2팀'],
    ['a8', -3, '20:05', 'warning', '주문 API', '응답 시간(95%)이 400ms를 넘었어요', '20:09', '운영 2팀'],
    ['a9', -5, '08:30', 'info', '배포', '검색 5.2.0을 배포했어요', '08:31', '운영 1팀'],
    ['a10', -6, '02:00', 'info', 'DB', '정기 점검을 마쳤어요', '02:12', '운영 2팀'],
    ['a11', -9, '14:20', 'warning', '회원', '로그인 실패가 평소보다 3배 많아요', '14:31', '운영 1팀'],
    ['a12', -16, '21:15', 'warning', '주문 API', '오류율이 1% 넘게 올랐어요', '21:20', '운영 2팀'],
    ['a13', -20, '09:00', 'info', '배포', '주문 API 2.13.0을 배포했어요', '09:04', '운영 1팀'],
    ['a14', -24, '19:40', 'critical', '결제', '결제 대행 연결이 3분 동안 끊겼어요', '19:42', '운영 2팀'],
    ['a15', -28, '03:00', 'info', 'DB', '정기 점검을 마쳤어요', '03:08', '운영 2팀'],
    ['a16', -41, '11:10', 'warning', '주문 API', '오류율이 1% 넘게 올랐어요', '11:16', '운영 1팀'],
    ['a17', -63, '15:05', 'warning', '상품', '상품 이미지가 1초 넘게 걸리는 요청이 늘었어요', '15:20', '운영 1팀']
  ];

  function at(dayOffset, hhmm) {
    var p = hhmm.split(':');
    return (TODAY + dayOffset) * DAY + Number(p[0]) * HOUR + Number(p[1]) * 60000;
  }

  function alerts() {
    return ALERTS.map(function (a) {
      return {
        id: a[0],
        at: at(a[1], a[2]),
        severity: a[3],
        area: a[4],
        text: a[5],
        ack: a[6] ? { at: at(a[1], a[6]), by: a[7] } : null
      };
    });
  }

  window.OpsData = {
    DAY: DAY,
    HOUR: HOUR,
    now: NOW,
    today: TODAY,
    firstDay: TODAY - 90,  // 2026-08-19 — 데이터를 90일 남긴다
    lastFullDay: TODAY - 1, // 어제
    maxDays: 90,
    targets: { ordersPerDay: 2400, revenuePerDay: 84000000, latency: 300, errorRate: 0.5 },
    staleMinutes: 18,       // ?state=stale 에서 데이터가 늦는 시간
    query: query,
    alerts: alerts
  };
})();
