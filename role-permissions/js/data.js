/*
 * 권한 관리 샘플의 가상 데이터 — 이 파일 한 곳에만 둔다(DESIGN.md 「샘플 데이터」).
 * 이름·이메일·변경 내역은 모두 지어낸 값이다. 이메일은 @example.com 만 쓴다.
 * 시각은 서울 시간 문자열이다.
 */
window.RP_DATA = {
  // 이 샘플의 "지금" — 마지막 접속·변경 내역을 "오늘·어제"로 읽을 때 기준
  now: '2026-11-18T10:40',

  // 화면을 보는 사람(구성원 id). ?state=no-permission 이면 noPermissionMe 로 바뀐다
  me: 'm1',
  noPermissionMe: 'm3',

  // 권한 표의 열
  actions: [
    { id: 'view', name: '보기' },
    { id: 'create', name: '만들기' },
    { id: 'edit', name: '고치기' },
    { id: 'delete', name: '지우기' },
    { id: 'export', name: '내보내기' }
  ],

  // 권한 표의 행(기능 묶음). na — 이 기능에 없는 권한
  features: [
    { id: 'chats', name: '상담', sub: '대화·메모·태그' },
    { id: 'customers', name: '고객 정보', sub: '연락처·고객 메모' },
    { id: 'orders', name: '주문', sub: '주문 내역·배송' },
    { id: 'payments', name: '결제·환불', sub: '결제 요청·환불', na: ['delete'] },
    { id: 'reports', name: '보고서', sub: '통계·정기 보고서' },
    { id: 'channels', name: '상담 채널', sub: '메신저·이메일 연결', na: ['export'] },
    { id: 'autoreply', name: '자동 응답', sub: '자동 답변 규칙', na: ['export'] },
    { id: 'members', name: '구성원', sub: '초대·팀에서 빼기' },
    { id: 'roles', name: '역할과 권한', sub: '이 화면', na: ['export'] }
  ],

  // 위험한 권한 — 이 열의 권한 전부, 이 행의 보기 밖 권한 전부
  danger: { actions: ['delete', 'export'], features: ['payments'] },

  // 역할. builtin — 서비스가 정한 기본 역할(고칠 수 없다). perms 가 'all' 이면 있는 권한 전부, 'view' 면 보기만
  roles: [
    { id: 'admin', name: '관리자', desc: '모든 기능을 쓰고 역할과 권한을 정해요.', builtin: true, perms: 'all' },
    {
      id: 'operator', name: '운영자', desc: '상담과 주문을 처리하고 상담 채널을 관리해요.',
      perms: {
        chats: ['view', 'create', 'edit', 'delete'],
        customers: ['view', 'create', 'edit'],
        orders: ['view', 'create', 'edit'],
        payments: ['view'],
        reports: ['view', 'create', 'edit'],
        channels: ['view', 'create', 'edit'],
        autoreply: ['view', 'create', 'edit', 'delete'],
        members: ['view'],
        roles: ['view']
      }
    },
    {
      id: 'agent', name: '상담원', desc: '상담에 답하고 고객 정보를 고쳐요.',
      perms: {
        chats: ['view', 'create', 'edit'],
        customers: ['view', 'create', 'edit'],
        orders: ['view'],
        reports: ['view'],
        channels: ['view'],
        autoreply: ['view'],
        members: ['view']
      }
    },
    {
      id: 'billing', name: '정산 담당', desc: '주문과 결제·환불을 맞춰 보고 정산 보고서를 만들어요.',
      perms: {
        chats: ['view'],
        customers: ['view'],
        orders: ['view', 'edit', 'export'],
        payments: ['view', 'create', 'edit', 'export'],
        reports: ['view', 'create', 'export'],
        members: ['view']
      }
    },
    { id: 'viewer', name: '보기만', desc: '모든 기능을 보기만 해요. 아무것도 바꾸지 못해요.', builtin: true, perms: 'view' }
  ],

  // 처음 고른 역할(고칠 수 있는 첫 역할)
  defaultRole: 'operator',

  members: [
    { id: 'm1', name: '한수빈', email: 'subin.han@example.com', role: 'admin', seen: '2026-11-18T10:38' },
    { id: 'm2', name: '오세린', email: 'serin.oh@example.com', role: 'admin', seen: '2026-11-17T18:40' },
    { id: 'm3', name: '박도현', email: 'dohyun.park@example.com', role: 'operator', seen: '2026-11-18T09:12' },
    { id: 'm4', name: '정다은', email: 'daeun.jung@example.com', role: 'operator', seen: '2026-11-18T08:55' },
    { id: 'm5', name: '최민재', email: 'minjae.choi@example.com', role: 'operator', seen: '2026-11-14T16:05' },
    { id: 'm6', name: '윤하린', email: 'harin.yoon@example.com', role: 'operator', seen: '2026-11-17T11:20' },
    { id: 'm7', name: '김서윤', email: 'seoyun.kim@example.com', role: 'agent', seen: '2026-11-18T10:21' },
    { id: 'm8', name: '이준호', email: 'junho.lee@example.com', role: 'agent', seen: '2026-11-18T09:47' },
    { id: 'm9', name: '강지후', email: 'jihu.kang@example.com', role: 'agent', seen: '2026-11-17T20:02' },
    { id: 'm10', name: '조예린', email: 'yerin.cho@example.com', role: 'agent', seen: '2026-11-12T13:30' },
    { id: 'm11', name: '임태오', email: 'taeo.lim@example.com', role: 'agent', seen: '2026-11-18T07:58' },
    { id: 'm12', name: '신유나', email: 'yuna.shin@example.com', role: 'agent', seen: '2025-12-29T09:10' },
    { id: 'm13', name: '송현우', email: 'hyunwoo.song@example.com', role: 'billing', seen: '2026-11-18T10:02' },
    { id: 'm14', name: '배서진', email: 'seojin.bae@example.com', role: 'billing', seen: '2026-11-16T15:44' },
    { id: 'm15', name: '문채원', email: 'chaewon.moon@example.com', role: 'viewer', seen: '2026-11-10T10:15' },
    { id: 'm16', name: '장우진', email: 'woojin.jang@example.com', role: 'viewer', seen: '2026-11-17T09:31' },
    { id: 'm17', name: '노은서', email: 'eunseo.noh@example.com', role: 'viewer', seen: '2026-10-28T17:20' }
  ],

  // 변경 내역 — 역할마다 최근 것이 앞. changes: [기능, 권한, 켬(true)·끔(false)]. created: 역할을 만든 기록
  history: {
    operator: [
      { at: '2026-11-16T17:42', by: 'm1', changes: [['autoreply', 'delete', true]] },
      { at: '2026-11-03T10:15', by: 'm2', changes: [['channels', 'edit', true], ['members', 'create', false]] },
      { at: '2025-12-03T14:08', by: 'm1', created: true }
    ],
    agent: [
      { at: '2026-11-17T16:20', by: 'm2', changes: [['customers', 'create', true]] },
      { at: '2026-10-21T09:40', by: 'm1', changes: [['chats', 'delete', false], ['orders', 'edit', false]] },
      { at: '2025-12-03T14:10', by: 'm1', created: true }
    ],
    billing: [
      { at: '2026-11-12T11:05', by: 'm1', changes: [['payments', 'export', true], ['reports', 'export', true]] },
      { at: '2026-06-02T15:30', by: 'm2', created: true }
    ]
  },

  // ?state=dirty · save-fail · preview · leave · saving 에서 저장하지 않은 채 바꿔 둔 칸(운영자)
  dirtyPreset: [['orders', 'delete', true], ['reports', 'export', true], ['customers', 'edit', false]]
};
