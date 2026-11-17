/*
 * 가상 데이터 — 공간 4곳, 예약 현황 만들기, 예시 값. 화면 코드(page.js)와 섞지 않고 이 파일 한 곳에만 둔다
 * (DESIGN.md 「샘플 데이터」). 실존 장소·회사·사람이 아니다.
 *
 * 예약 현황은 서버 대신 날짜와 공간 id 로 정해지는 값을 만든다. 같은 날·같은 공간은 늘 같은 결과다.
 */
(function () {
  'use strict';

  var OPEN = 9;   // 09:00 에 연다
  var CLOSE = 21; // 21:00 에 닫는다 — 마지막 시작은 20:00(1시간)

  var spaces = [
    { id: 'room-s', name: '작은 회의실', floor: '3층', capacity: 4, price: 10000 },
    { id: 'room-l', name: '큰 회의실', floor: '3층', capacity: 10, price: 25000 },
    { id: 'studio', name: '촬영 스튜디오', floor: '5층', capacity: 6, price: 30000 },
    { id: 'hall', name: '세미나실', floor: '5층', capacity: 24, price: 40000 }
  ];

  function hash(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /** 그날 그 공간에서 이미 예약된 시(9~20)의 목록. 6일에 1일꼴로 하루가 다 찬다 */
  function bookedHours(spaceId, dateKey) {
    var h = hash(spaceId + '|' + dateKey);
    var list = [];
    var hour;
    if (h % 6 === 0) {
      for (hour = OPEN; hour < CLOSE; hour++) list.push(hour);
      return list;
    }
    var count = 2 + ((h >>> 4) % 4);
    var x = h;
    for (var i = 0; i < count; i++) {
      x = (Math.imul(x, 1103515245) + 12345) >>> 0;
      hour = OPEN + ((x >>> 8) % (CLOSE - OPEN));
      if (list.indexOf(hour) < 0) list.push(hour);
    }
    return list;
  }

  window.BOOKING_DATA = {
    open: OPEN,
    close: CLOSE,
    spaces: spaces,
    bookedHours: bookedHours,
    hash: hash,
    // 주소로 2·3·4단계를 바로 열었는데 앞 단계 값이 없을 때 채우는 예시 값(검수용).
    // 날짜·시작 시간은 page.js 가 예약 현황에서 빈 곳을 찾아 넣는다.
    sample: {
      space: 'room-l',
      dur: 2,
      people: 4,
      name: '가나다',
      phone: '010-0000-0000',
      email: 'booking@example.com',
      request: '화이트보드 마커를 준비해 주세요.'
    },
    // ?state=sold-out — 이 공간에서 고른 날이 방금 다 찼다
    soldOut: { space: 'studio', dayOffset: 3 }
  };
})();
