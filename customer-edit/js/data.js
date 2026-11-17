/*
 * 가상의 샘플 데이터 — 이 화면의 고객·주문·팀·번호는 모두 지어낸 값이다(DESIGN.md 「샘플 데이터」).
 * 가상 데이터는 이 파일 한 곳에만 둔다. 화면 코드(page.js)·HTML 에 직접 쓰지 않는다.
 * 이메일은 example.com, 전화번호는 010-0000-0000 꼴, 주소는 "가상시 예시구"처럼 누가 봐도 가짜인 값만 쓴다.
 */
(function () {
  'use strict';

  window.CE_DATA = {
    /* 샘플 속 오늘 날짜 — 같은 해 날짜는 연도를 빼고 쓴다 */
    today: '2026-11-17',

    /* 지금 화면을 쓰는 사람의 팀 — 저장하면 변경 기록에 이 이름이 남는다 */
    currentTeam: '운영팀',

    /* 기본 고객 */
    customer: {
      id: 'C-0001',
      name: '가나다 상사',
      phone: '010-0000-0000',
      email: 'contact@example.com',
      postcode: '00000',
      address1: '가상시 예시구 샘플로 00',
      address2: '샘플빌딩 3층',
      grade: 'good',
      team: '영업팀',
      createdAt: '2024-03-04',
      updatedAt: '2026-11-15',
      updatedBy: '영업팀',
      memo: '월말에 거래명세서를 함께 보내 달라고 했어요. 배송은 평일 오전에만 받을 수 있어요.'
    },

    /* 모든 주문 수와 최근 주문 5건 */
    orderTotal: 23,
    orders: [
      { id: 'O-0123', date: '2026-11-14', item: '사무용 의자 2개', amount: 258000, status: 'shipping' },
      { id: 'O-0118', date: '2026-11-02', item: '복사 용지 10상자', amount: 54000, status: 'done' },
      { id: 'O-0109', date: '2026-10-21', item: '모니터 받침대', amount: 39000, status: 'done' },
      { id: 'O-0102', date: '2026-10-05', item: '서류 정리함 3개', amount: 27000, status: 'cancelled' },
      { id: 'O-0097', date: '2026-09-18', item: '프린터 토너', amount: 86000, status: 'done' }
    ],

    /* 변경 기록 — 최근 것이 위 */
    history: [
      { text: '등급을 일반에서 우수로 바꿨어요', team: '영업팀', date: '2026-11-15' },
      { text: '메모를 고쳤어요', team: '상담팀', date: '2026-10-02' },
      { text: '휴대 전화번호를 바꿨어요', team: '영업팀', date: '2026-08-21' },
      { text: '고객을 등록했어요', team: '운영팀', date: '2024-03-04' }
    ],

    /* ?state=empty — 메모·주문이 없는 새 고객 */
    emptyCustomer: {
      id: 'C-0002',
      name: '라마바 공방',
      phone: '010-0000-0000',
      email: 'hello@example.com',
      postcode: '00000',
      address1: '가상시 견본구 예시길 00',
      address2: '',
      grade: 'basic',
      team: '영업팀',
      createdAt: '2026-11-16',
      updatedAt: '2026-11-16',
      updatedBy: '운영팀',
      memo: ''
    },
    emptyHistory: [
      { text: '고객을 등록했어요', team: '운영팀', date: '2026-11-16' }
    ],

    /* ?state=stale — 다른 팀이 먼저 바꾼 내용(새로 불러오면 보인다) */
    staleChange: {
      grade: 'best',
      updatedAt: '2026-11-17',
      updatedBy: '영업팀',
      history: { text: '등급을 우수에서 최우수로 바꿨어요', team: '영업팀', date: '2026-11-17' }
    },

    /* ?state=not-found — 주소에 있다고 치는 없는 고객 번호 */
    missingId: 'C-9999',

    /* ?state=invalid — 저장을 눌렀을 때 틀린 값 */
    invalidInput: {
      name: '',
      phone: '010-000',
      email: 'contact@example',
      postcode: '0000'
    }
  };
})();
