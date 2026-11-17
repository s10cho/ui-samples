/*
 * 가상의 샘플 데이터 — 이 화면의 이름·회사·연락처·메일·메시지는 모두 지어낸 값이다(DESIGN.md 「샘플 데이터」).
 * 가상 데이터는 이 파일에만 둔다. 화면 HTML·page.js 에는 쓰지 않는다.
 * - 사람 이름은 음절을 이어 붙인 누가 봐도 가짜인 이름, 전화는 010-0000-00NN, 메일은 example.com 만 쓴다.
 * - 시각은 시간대 없는 날짜·시각 문자열이다(보는 사람의 시간대와 상관없이 같은 시각으로 보인다).
 * - 화면의 "지금"은 now 로 고정한다. 새로 보낸 메시지는 now 에 연 뒤 지난 시간을 더한다.
 * - from: 'c' 고객 · 'sys' 시스템 · 상담원 id(a1~a4)
 */
window.SI_DATA = {
  now: '2026-11-17T15:00',
  me: 'a1',
  agents: [
    { id: 'a1', name: '김가나' },
    { id: 'a2', name: '이다라' },
    { id: 'a3', name: '박마바' },
    { id: 'a4', name: '최사아' }
  ],
  channels: { web: '웹 채팅', mail: '메일', app: '앱' },

  quickReplies: [
    { title: '인사', text: '안녕하세요, 상담원 김가나예요. 무엇을 도와드릴까요?' },
    { title: '주문 번호 묻기', text: '주문 번호를 알려 주시면 바로 찾아볼게요.' },
    { title: '확인 중', text: '확인해 보고 10분 안에 다시 알려 드릴게요.' },
    { title: '기다려 주셔서 고마워요', text: '기다려 주셔서 고마워요. 지금 바로 확인할게요.' },
    { title: '환불 안내', text: '환불은 3영업일 안에 결제한 카드로 돌아가요.' },
    { title: '마무리', text: '더 궁금한 점이 있으면 이 대화에 남겨 주세요. 좋은 하루 보내세요.' }
  ],

  /* 새 메시지 도착 흉내 — 기본은 20초 뒤 1건, ?state=incoming 은 2초·5초 뒤 2건 */
  incoming: [
    { c: 'c01', text: '오후 6시 전에만 오면 괜찮아요.' },
    { c: 'c02', text: '카드사에 물어보니 아직 안 들어왔대요.' }
  ],

  /* ?state=send-fail 에서 c01 끝에 미리 두는, 보내지 못한 답장 */
  sendFailSample: { c: 'c01', t: '2026-11-17T14:58', text: '택배사에 바로 물어보고 다시 알려 드릴게요.' },

  /* ?state=taken 에서 "내가 맡기"를 누르면 먼저 맡은 상담원 */
  takenBy: 'a2',

  conversations: [
    {
      id: 'c01', status: 'open', who: 'a1', channel: 'web', unread: 2,
      customer: { name: '고자차', company: '가나다 상사', grade: '골드', phone: '010-0000-0001', email: 'gojacha@example.com', no: '1024', since: '2023-05-02',
        history: [{ title: '배송지 변경', date: '2026-10-02' }, { title: '영수증 다시 받기', date: '2026-08-19' }, { title: '대량 주문 가격', date: '2026-06-03' }] },
      messages: [
        { from: 'sys', t: '2026-11-17T14:20', text: '웹 채팅으로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T14:20', text: '주문한 상자가 아직 안 왔어요.' },
        { from: 'a1', t: '2026-11-17T14:24', text: '주문 번호를 알려 주시면 바로 찾아볼게요.' },
        { from: 'c', t: '2026-11-17T14:26', text: '주문 번호는 2026-1117이에요. 주문 내역도 붙여요.', files: [{ name: '주문내역.png', size: '182KB' }] },
        { from: 'a1', t: '2026-11-17T14:31', text: '확인해 보고 10분 안에 다시 알려 드릴게요.' },
        { from: 'c', t: '2026-11-17T14:52', text: '오늘 받기로 했는데 배송 조회가 멈춰 있어요.' },
        { from: 'c', t: '2026-11-17T14:53', text: '내일 행사에 쓸 상자라서 꼭 오늘 받아야 해요.' }
      ]
    },
    {
      id: 'c02', status: 'open', who: null, channel: 'mail', unread: 1,
      customer: { name: '노카타', company: '', grade: '일반', phone: '010-0000-0002', email: 'nokata@example.com', no: '1187', since: '2025-02-11',
        history: [{ title: '결제 오류', date: '2026-09-14' }, { title: '쿠폰 사용', date: '2026-04-22' }] },
      messages: [
        { from: 'sys', t: '2026-11-17T14:40', text: '메일로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T14:40', text: '환불을 요청했는데 언제 돌아오나요? 결제한 카드로 받고 싶어요.' }
      ]
    },
    {
      id: 'c03', status: 'pending', who: 'a2', channel: 'app', unread: 0,
      customer: { name: '도파하', company: '라마바 물산', grade: '실버', phone: '010-0000-0003', email: 'dopaha@example.com', no: '1032', since: '2023-09-18',
        history: [{ title: '세금계산서 발급', date: '2026-10-16' }, { title: '대량 주문 가격', date: '2026-07-07' }, { title: '배송 조회', date: '2026-03-30' }] },
      messages: [
        { from: 'c', t: '2026-11-16T16:10', text: '세금계산서를 받을 수 있나요?' },
        { from: 'a2', t: '2026-11-16T16:22', text: '사업자 번호를 알려 주시면 바로 보내 드릴게요.' },
        { from: 'sys', t: '2026-11-16T16:23', text: '이다라 님이 대화를 대기로 바꿨어요' }
      ]
    },
    {
      id: 'c04', status: 'open', who: 'a1', channel: 'web', unread: 0,
      customer: { name: '로가다', company: '', grade: '일반', phone: '010-0000-0004', email: 'rogada@example.com', no: '1210', since: '2025-06-01',
        history: [{ title: '배송 조회', date: '2026-08-02' }] },
      messages: [
        { from: 'sys', t: '2026-11-17T13:05', text: '웹 채팅으로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T13:05', text: '카드 결제가 두 번 됐어요.', files: [{ name: '결제내역.pdf', size: '96KB' }] },
        { from: 'a1', t: '2026-11-17T13:12', text: '결제 내역을 확인해 볼게요. 잠시만 기다려 주세요.' },
        { from: 'a1', t: '2026-11-17T13:20', text: '두 번째 결제는 오늘 안에 취소돼요. 카드사에 따라 3영업일까지 걸릴 수 있어요.' },
        { from: 'c', t: '2026-11-17T13:22', text: '네, 알겠어요. 고마워요.' }
      ]
    },
    {
      id: 'c05', status: 'open', who: 'a3', channel: 'mail', unread: 1,
      customer: { name: '모나라', company: '', grade: '새 고객', phone: '010-0000-0005', email: 'monara@example.com', no: '1302', since: '2026-11-10', history: [] },
      messages: [
        { from: 'sys', t: '2026-11-17T12:48', text: '메일로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T12:48', text: '받는 주소를 바꾸고 싶어요. 새 주소는 메일 끝에 적었어요.' }
      ]
    },
    {
      id: 'c06', status: 'closed', who: 'a1', channel: 'app', unread: 0,
      customer: { name: '보마사', company: '', grade: '일반', phone: '010-0000-0006', email: 'bomasa@example.com', no: '1145', since: '2024-12-24',
        history: [{ title: '교환 문의', date: '2026-09-01' }, { title: '쿠폰 사용', date: '2026-05-19' }, { title: '로그인 문의', date: '2026-01-08' }] },
      messages: [
        { from: 'c', t: '2026-11-16T11:02', text: '쿠폰이 결제 화면에 안 보여요.' },
        { from: 'a1', t: '2026-11-16T11:10', text: '쿠폰은 3만 원 이상 주문에 쓸 수 있어요.' },
        { from: 'c', t: '2026-11-16T11:15', text: '금액을 바꾸니 보여요. 고마워요.' },
        { from: 'sys', t: '2026-11-16T11:16', text: '김가나 님이 대화를 종료했어요' }
      ]
    },
    {
      id: 'c07', status: 'pending', who: 'a4', channel: 'mail', unread: 0,
      customer: { name: '소바아', company: '사아자 식품', grade: '골드', phone: '010-0000-0007', email: 'sobaa@example.com', no: '1009', since: '2022-11-30',
        history: [{ title: '대량 주문 가격', date: '2026-10-21' }, { title: '거래 명세서', date: '2026-09-09' }, { title: '배송지 변경', date: '2026-06-27' }] },
      messages: [
        { from: 'c', t: '2026-11-17T11:30', text: '상자 200개를 주문하면 가격이 달라지나요?' },
        { from: 'a4', t: '2026-11-17T11:52', text: '수량별 가격표를 메일로 보내 드렸어요.', files: [{ name: '가격표.pdf', size: '64KB' }] },
        { from: 'sys', t: '2026-11-17T11:53', text: '최사아 님이 대화를 대기로 바꿨어요' }
      ]
    },
    {
      id: 'c08', status: 'open', who: null, channel: 'web', unread: 2,
      customer: { name: '오자카', company: '', grade: '새 고객', phone: '010-0000-0008', email: 'ojaka@example.com', no: '1311', since: '2026-11-15', history: [] },
      messages: [
        { from: 'sys', t: '2026-11-17T14:10', text: '웹 채팅으로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T14:10', text: '로그인이 안 돼요.' },
        { from: 'c', t: '2026-11-17T14:11', text: '비밀번호를 바꿨는데도 같은 화면이 나와요.' }
      ]
    },
    {
      id: 'c09', status: 'closed', who: 'a2', channel: 'app', unread: 0,
      customer: { name: '조차타', company: '', grade: '일반', phone: '010-0000-0009', email: 'jochata@example.com', no: '1166', since: '2025-01-05',
        history: [{ title: '배송 조회', date: '2026-07-15' }] },
      messages: [
        { from: 'c', t: '2026-11-14T10:20', text: '크기를 바꿔 교환할 수 있나요?' },
        { from: 'a2', t: '2026-11-14T10:31', text: '받은 날부터 7일 안에 교환할 수 있어요. 교환 신청을 열어 드렸어요.' },
        { from: 'sys', t: '2026-11-14T10:32', text: '이다라 님이 대화를 종료했어요' }
      ]
    },
    {
      id: 'c10', status: 'open', who: 'a1', channel: 'mail', unread: 1,
      customer: { name: '초파하', company: '차카타 여행', grade: '실버', phone: '010-0000-0010', email: 'chopaha@example.com', no: '1077', since: '2024-03-12',
        history: [{ title: '예약 날짜 변경', date: '2026-09-25' }, { title: '영수증 다시 받기', date: '2026-05-02' }] },
      messages: [
        { from: 'sys', t: '2026-11-17T10:15', text: '메일로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T10:15', text: '예약 날짜를 다음 주 금요일로 바꿀 수 있나요?' }
      ]
    },
    {
      id: 'c11', status: 'pending', who: 'a1', channel: 'web', unread: 0,
      customer: { name: '코가나', company: '', grade: '일반', phone: '010-0000-0011', email: 'kogana@example.com', no: '1258', since: '2025-08-20',
        history: [{ title: '결제 오류', date: '2026-10-10' }] },
      messages: [
        { from: 'c', t: '2026-11-17T09:40', text: '영수증을 다시 받고 싶어요.' },
        { from: 'a1', t: '2026-11-17T09:46', text: '영수증을 메일로 다시 보내 드렸어요. 받으셨는지 알려 주세요.' },
        { from: 'sys', t: '2026-11-17T09:47', text: '김가나 님이 대화를 대기로 바꿨어요' }
      ]
    },
    {
      id: 'c12', status: 'open', who: 'a2', channel: 'app', unread: 1,
      customer: { name: '토다라', company: '', grade: '일반', phone: '010-0000-0012', email: 'todara@example.com', no: '1199', since: '2025-03-03',
        history: [{ title: '교환 문의', date: '2026-08-30' }, { title: '배송 조회', date: '2026-02-14' }] },
      messages: [
        { from: 'c', t: '2026-11-17T08:55', text: '상자가 찢어진 채로 왔어요. 사진을 붙여요.', files: [{ name: '파손사진.jpg', size: '1.2MB' }] },
        { from: 'a2', t: '2026-11-17T09:02', text: '불편을 드려 죄송해요. 새 상품을 바로 보내 드릴게요.' },
        { from: 'c', t: '2026-11-17T14:44', text: '새 상품은 언제 오나요?' }
      ]
    },
    {
      id: 'c13', status: 'closed', who: 'a3', channel: 'mail', unread: 0,
      customer: { name: '포마바', company: '파하 문구', grade: '골드', phone: '010-0000-0013', email: 'pomaba@example.com', no: '1015', since: '2023-01-16',
        history: [{ title: '거래 명세서', date: '2026-10-13' }, { title: '대량 주문 가격', date: '2026-08-11' }, { title: '세금계산서 발급', date: '2026-04-09' }] },
      messages: [
        { from: 'c', t: '2026-11-13T15:05', text: '거래 명세서를 보내 주세요.' },
        { from: 'a3', t: '2026-11-13T15:20', text: '명세서를 메일로 보내 드렸어요.', files: [{ name: '거래명세서.pdf', size: '88KB' }] },
        { from: 'sys', t: '2026-11-13T15:21', text: '박마바 님이 대화를 종료했어요' }
      ]
    },
    {
      id: 'c14', status: 'open', who: null, channel: 'web', unread: 1,
      customer: { name: '호사아', company: '', grade: '실버', phone: '010-0000-0014', email: 'hosaa@example.com', no: '1093', since: '2024-07-07',
        history: [{ title: '쿠폰 사용', date: '2026-10-05' }, { title: '회원 등급', date: '2026-03-18' }] },
      messages: [
        { from: 'sys', t: '2026-11-17T13:40', text: '웹 채팅으로 대화를 시작했어요' },
        { from: 'c', t: '2026-11-17T13:40', text: '회원 등급은 언제 바뀌나요?' }
      ]
    },
    {
      id: 'c15', status: 'closed', who: 'a4', channel: 'app', unread: 0,
      customer: { name: '구자차', company: '', grade: '일반', phone: '010-0000-0015', email: 'gujacha@example.com', no: '1240', since: '2025-07-19',
        history: [{ title: '로그인 문의', date: '2026-06-06' }] },
      messages: [
        { from: 'c', t: '2026-11-12T19:12', text: '비밀번호를 바꾸고 싶어요.' },
        { from: 'a4', t: '2026-11-12T19:20', text: '로그인 화면 아래 비밀번호 찾기를 눌러 주세요. 바꾸는 주소를 메일로 보내 드려요.' },
        { from: 'sys', t: '2026-11-12T19:21', text: '최사아 님이 대화를 종료했어요' }
      ]
    },
    {
      id: 'c16', status: 'pending', who: 'a3', channel: 'web', unread: 0,
      customer: { name: '누카타', company: '', grade: '새 고객', phone: '010-0000-0016', email: 'nukata@example.com', no: '1320', since: '2026-11-16', history: [] },
      messages: [
        { from: 'c', t: '2026-11-16T17:20', text: '품절된 상품은 언제 다시 들어오나요?' },
        { from: 'a3', t: '2026-11-16T17:31', text: '다음 주에 들어와요. 들어오면 문자로 알려 드릴게요.' },
        { from: 'sys', t: '2026-11-16T17:32', text: '박마바 님이 대화를 대기로 바꿨어요' }
      ]
    }
  ]
};
