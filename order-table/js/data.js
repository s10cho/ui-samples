/*
 * 가상의 샘플 데이터 — 주문 120건. 이 화면의 가상 데이터는 이 파일에만 둔다(DESIGN.md 「샘플 데이터」).
 * 정해진 씨앗값으로 만들어서 새로고침해도 같은 주문이 같은 순서로 나온다.
 * 고객 이름은 누가 봐도 가짜인 "가나다 상사" 꼴만 쓴다. 실존 회사·인물 이름이 아니다.
 *
 *   window.ORDER_DATA = { today: 'YYYY-MM-DD', orders: [{ id, date, time, customer, items, amount, pay, ship }] }
 *   pay  : paid(결제완료) · pending(입금대기) · refunded(환불완료) · void(결제취소)
 *   ship : ready(배송준비) · shipping(배송중) · done(배송완료) · canceled(취소완료)
 */
(function () {
  'use strict';

  var TODAY = '2026-11-17';
  var COUNT = 120;
  var DAYS = 109; // 2026-08-01 ~ 2026-11-17

  var NAMES = ['가나다', '라마바', '사아자', '차카타', '파하가', '나다라', '마바사', '아자차', '카타파', '하가나', '다라마', '바사아', '자차카', '타파하'];
  var KINDS = ['상사', '상점', '마켓', '공방', '상회', '문구', '식품', '꽃집', '서점', '카페', '의류', '철물', '제과', '잡화'];
  var CUSTOMERS = NAMES.map(function (n, i) { return n + ' ' + KINDS[i]; });

  var ITEM_COUNTS = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6];
  var PRICES = [5900, 8900, 12000, 15800, 23000, 34500, 49000];
  var SHIPPING_FEE = 3000;
  var FREE_SHIPPING = 30000;

  // 작은 결정적 난수(mulberry32)
  function seeded(a) {
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var rand = seeded(20261117);
  function pick(list) { return list[Math.floor(rand() * list.length)]; }
  function pad(n, w) { var s = String(n); while (s.length < w) s = '0' + s; return s; }

  var base = Date.UTC(2026, 10, 17);
  function dayString(age) {
    var d = new Date(base - age * 86400000);
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1, 2) + '-' + pad(d.getUTCDate(), 2);
  }

  function status(age) {
    if (age > 0 && rand() < 0.08) return { ship: 'canceled', pay: rand() < 0.8 ? 'refunded' : 'void' };
    if (age <= 1) return { ship: 'ready', pay: rand() < 0.3 ? 'pending' : 'paid' };
    if (age <= 3) {
      if (rand() < 0.5) return { ship: 'ready', pay: rand() < 0.2 ? 'pending' : 'paid' };
      return { ship: 'shipping', pay: 'paid' };
    }
    if (age <= 6) return { ship: rand() < 0.6 ? 'shipping' : 'done', pay: 'paid' };
    return { ship: 'done', pay: 'paid' };
  }

  var list = [];
  for (var i = 0; i < COUNT; i++) {
    var age = Math.floor(Math.pow(rand(), 1.5) * DAYS);
    var minute = 8 * 60 + Math.floor(rand() * 14 * 60);
    var items = pick(ITEM_COUNTS);
    var amount = 0;
    for (var k = 0; k < items; k++) amount += pick(PRICES);
    if (amount < FREE_SHIPPING) amount += SHIPPING_FEE;
    var st = status(age);
    list.push({
      age: age,
      minute: minute,
      date: dayString(age),
      time: pad(Math.floor(minute / 60), 2) + ':' + pad(minute % 60, 2),
      customer: pick(CUSTOMERS),
      items: items,
      amount: amount,
      pay: st.pay,
      ship: st.ship
    });
  }

  // 주문 번호 = 주문일 + 그날 들어온 순번(시각 순)
  list.sort(function (a, b) { return a.age - b.age || a.minute - b.minute; });
  var seq = {};
  list.forEach(function (o) {
    seq[o.date] = (seq[o.date] || 0) + 1;
    o.id = o.date.replace(/-/g, '') + '-' + pad(seq[o.date], 4);
  });
  // 최신 주문이 앞에 오게
  list.sort(function (a, b) { return a.age - b.age || b.minute - a.minute; });

  window.ORDER_DATA = {
    today: TODAY,
    orders: list.map(function (o) {
      return { id: o.id, date: o.date, time: o.time, customer: o.customer, items: o.items, amount: o.amount, pay: o.pay, ship: o.ship };
    })
  };
})();
