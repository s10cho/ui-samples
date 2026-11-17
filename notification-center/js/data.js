/*
 * 가상의 샘플 데이터 — 이 화면의 이름·문장·시각은 모두 지어낸 값이다(DESIGN.md 「샘플 데이터」).
 * 가상 데이터는 이 파일에만 둔다. 화면 HTML·page.js 에는 쓰지 않는다.
 * - 상담 인박스 샘플과 같은 가상 팀(정유진·한지호·오세린·윤태오)과 고객 이름을 쓴다. 대상 링크가 그 샘플의 같은 대화로 이어진다.
 * - 사람 이름은 흔한 성 + 두 음절 이름이다.
 * - 시각은 시간대 없는 날짜·시각 문자열이다. 화면의 "지금"은 now 로 고정한다(2026-11-18 수요일).
 * - text 의 **글** 은 굵게 보이는 이름이다.
 * - kind: assign 배정 · mention 언급 · reply 답장 · digest 요약 · security 보안
 * - from.role: team 팀원 · customer 고객 · system 시스템(아이콘으로 그린다)
 */
window.NC_DATA = {
  now: '2026-11-18T09:40',
  me: '정유진',

  kinds: [
    { id: 'assign', name: '배정' },
    { id: 'mention', name: '언급' },
    { id: 'reply', name: '답장' },
    { id: 'digest', name: '요약' },
    { id: 'security', name: '보안', locked: true }
  ],

  /* 알림 설정 — 설정 샘플의 알림 탭과 보안 탭 */
  settingsHref: '../settings/index.html?tab=notifications',

  notifications: [
    {
      id: 'n01', kind: 'assign', at: '2026-11-18T09:32', read: false,
      from: { name: '한지호', role: 'team' },
      text: '**한지호** 님이 **장도윤 님 상담**을 나에게 배정했어요',
      quote: '배송지 변경 문의예요. 오전 중에 답해 주세요.',
      target: { title: '장도윤 님 상담', href: '../support-inbox/index.html?c=c08', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n02', kind: 'reply', at: '2026-11-18T09:15', read: false,
      from: { name: '김민서', role: 'customer' },
      text: '**김민서** 님이 상담에 답장했어요',
      quote: '오후 6시 전에만 오면 괜찮아요.',
      target: { title: '김민서 님 상담', href: '../support-inbox/index.html?c=c01', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n03', kind: 'mention', at: '2026-11-18T08:50', read: false,
      from: { name: '오세린', role: 'team' },
      text: '**오세린** 님이 **강예린 님 상담** 메모에서 나를 언급했어요',
      quote: '@정유진 첫 주문 고객이에요. 쿠폰 안내를 부탁해요.',
      target: { title: '강예린 님 상담', href: '../support-inbox/index.html?c=c05', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n04', kind: 'digest', at: '2026-11-18T08:00', read: true,
      from: { name: '알림 센터', role: 'system' },
      text: '**아침 요약**이 왔어요',
      quote: '답하지 않은 상담 6건, 오늘 답해야 하는 상담 2건이 있어요.',
      target: { title: '아침 요약', href: '../support-inbox/index.html', label: '상담 인박스 열기' }
    },
    {
      id: 'n05', kind: 'security', at: '2026-11-17T21:12', read: false,
      from: { name: '알림 센터', role: 'system' },
      text: '**새 기기**에서 로그인했어요',
      quote: '내가 로그인한 게 아니면 비밀번호를 바꿔 주세요.',
      facts: [['기기', 'Mac · 크롬'], ['장소', '서울']],
      target: { title: '새 기기 로그인', href: '../settings/index.html?tab=security', label: '보안 설정 열기' }
    },
    {
      id: 'n06', kind: 'mention', at: '2026-11-17T17:40', read: false,
      from: { name: '윤태오', role: 'team' },
      text: '**윤태오** 님이 **윤채원 님 상담** 메모에서 나를 언급했어요',
      quote: '@정유진 수량별 가격표가 최신본인지 봐 주세요.',
      target: { title: '윤채원 님 상담', href: '../support-inbox/index.html?c=c07', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n07', kind: 'reply', at: '2026-11-17T16:05', read: false,
      from: { name: '신우진', role: 'customer' },
      text: '**신우진** 님이 상담에 답장했어요',
      quote: '단체 예약 인원이 2명 늘었어요. 견적을 다시 받을 수 있을까요?',
      target: { title: '신우진 님 상담', href: '../support-inbox/index.html?c=c10', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n08', kind: 'assign', at: '2026-11-17T14:20', read: true,
      from: { name: '한지호', role: 'team' },
      text: '**한지호** 님이 **최현우 님 상담**을 나에게 배정했어요',
      quote: '카드 결제가 두 번 된 건이에요.',
      target: { title: '최현우 님 상담', href: '../support-inbox/index.html?c=c04', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n09', kind: 'reply', at: '2026-11-17T11:02', read: true,
      from: { name: '박지훈', role: 'customer' },
      text: '**박지훈** 님이 상담에 답장했어요',
      quote: '환불 들어오면 다시 알려 주세요.',
      target: { title: '박지훈 님 상담', href: '../support-inbox/index.html?c=c02', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n10', kind: 'mention', at: '2026-11-16T15:30', read: true,
      from: { name: '오세린', role: 'team' },
      text: '**오세린** 님이 **이수아 님 상담** 메모에서 나를 언급했어요',
      quote: '@정유진 공방 주문은 금요일에 마감해요.',
      target: { title: '이수아 님 상담', href: '../support-inbox/index.html?c=c03', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n11', kind: 'assign', at: '2026-11-16T10:10', read: true,
      from: { name: '윤태오', role: 'team' },
      text: '**윤태오** 님이 **서지안 님 상담**을 나에게 배정했어요',
      quote: '교환 문의예요. 사진을 먼저 받아 주세요.',
      target: { title: '서지안 님 상담', href: '../support-inbox/index.html?c=c11', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n12', kind: 'security', at: '2026-11-16T09:02', read: true,
      from: { name: '알림 센터', role: 'system' },
      text: '**비밀번호**를 바꿨어요',
      quote: '내가 바꾼 게 아니면 바로 팀 관리자에게 알려 주세요.',
      facts: [['기기', 'Windows · 엣지'], ['장소', '서울']],
      target: { title: '비밀번호 변경', href: '../settings/index.html?tab=security', label: '보안 설정 열기' }
    },
    {
      id: 'n13', kind: 'digest', at: '2026-11-16T08:00', read: true,
      from: { name: '알림 센터', role: 'system' },
      text: '**아침 요약**이 왔어요',
      quote: '답하지 않은 상담 4건이 있어요.',
      target: { title: '아침 요약', href: '../support-inbox/index.html', label: '상담 인박스 열기' }
    },
    {
      id: 'n14', kind: 'reply', at: '2026-11-13T16:45', read: true,
      from: { name: '이수아', role: 'customer' },
      text: '**이수아** 님이 상담에 답장했어요',
      quote: '주문 수량을 30개로 바꿀게요.',
      target: { title: '이수아 님 상담', href: '../support-inbox/index.html?c=c03', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n15', kind: 'assign', at: '2026-11-12T13:10', read: true,
      from: { name: '한지호', role: 'team' },
      text: '**한지호** 님이 **윤채원 님 상담**을 나에게 배정했어요',
      quote: '대량 주문 견적 문의예요.',
      target: { title: '윤채원 님 상담', href: '../support-inbox/index.html?c=c07', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n16', kind: 'mention', at: '2026-11-11T10:30', read: true,
      from: { name: '윤태오', role: 'team' },
      text: '**윤태오** 님이 **신우진 님 상담** 메모에서 나를 언급했어요',
      quote: '@정유진 단체 예약은 여행 담당과 함께 봐 주세요.',
      target: { title: '신우진 님 상담', href: '../support-inbox/index.html?c=c10', label: '상담 인박스에서 열기' }
    },
    {
      id: 'n17', kind: 'digest', at: '2026-11-09T08:00', read: true,
      from: { name: '알림 센터', role: 'system' },
      text: '**아침 요약**이 왔어요',
      quote: '답하지 않은 상담 3건이 있어요.',
      target: { title: '아침 요약', href: '../support-inbox/index.html', label: '상담 인박스 열기' }
    }
  ],

  /* 새 알림 도착 흉내 — 기본은 20초 뒤 1건, ?state=incoming 은 2초·3.5초 뒤 2건. at 은 도착할 때 정한다 */
  incoming: [
    {
      id: 'a01', kind: 'assign', read: false,
      from: { name: '오세린', role: 'team' },
      text: '**오세린** 님이 **박지훈 님 상담**을 나에게 배정했어요',
      quote: '카드사 확인이 필요한 건이에요.',
      target: { title: '박지훈 님 상담', href: '../support-inbox/index.html?c=c02', label: '상담 인박스에서 열기' }
    },
    {
      id: 'a02', kind: 'mention', read: false,
      from: { name: '한지호', role: 'team' },
      text: '**한지호** 님이 **김민서 님 상담** 메모에서 나를 언급했어요',
      quote: '@정유진 배송 출발 알림을 보냈어요.',
      target: { title: '김민서 님 상담', href: '../support-inbox/index.html?c=c01', label: '상담 인박스에서 열기' }
    }
  ]
};
