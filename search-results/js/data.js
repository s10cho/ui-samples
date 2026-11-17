/*
 * 검색 결과 샘플의 가상 데이터(DESIGN.md 「샘플 데이터」). 실제 사람·회사·문서가 아니다.
 * 이름은 흔한 성 + 두 음절, 이메일은 example.com, 전화는 010-0000-0000 꼴만 쓴다.
 * 데이터 세계의 오늘은 2026-11-18 15:40 으로 고정한다(날짜 표기·고친 날 필터가 늘 같게).
 */
window.SEARCH_DATA = {
  now: '2026-11-18T15:40',

  teams: [
    { id: 'ops', label: '운영팀' },
    { id: 'sales', label: '영업팀' },
    { id: 'dev', label: '개발팀' },
    { id: 'design', label: '디자인팀' },
    { id: 'finance', label: '재무팀' }
  ],

  // 처음 방문하면 보이는 최근 검색어(이 브라우저에 저장한 것이 없을 때)
  recent: ['정산 보고서', '김서윤', '온보딩'],
  // 자주 찾는 말
  popular: ['정산', '회의록', '온보딩', '디자인 시스템'],

  people: [
    { id: 'p01', name: '김서윤', role: '정산 담당', team: 'finance', email: 'seoyun.kim@example.com', phone: '010-0000-0101', active: '2026-11-18T15:12' },
    { id: 'p02', name: '박도현', role: '재무 팀장', team: 'finance', email: 'dohyun.park@example.com', phone: '010-0000-0102', active: '2026-11-18T11:30' },
    { id: 'p03', name: '이하은', role: '운영 매니저', team: 'ops', email: 'haeun.lee@example.com', phone: '010-0000-0103', active: '2026-11-18T14:02' },
    { id: 'p04', name: '최민준', role: '백엔드 개발', team: 'dev', email: 'minjun.choi@example.com', phone: '010-0000-0104', active: '2026-11-17T19:45' },
    { id: 'p05', name: '정지우', role: '제품 디자이너', team: 'design', email: 'jiwoo.jung@example.com', phone: '010-0000-0105', active: '2026-11-18T10:05' },
    { id: 'p06', name: '강예린', role: '영업 매니저', team: 'sales', email: 'yerin.kang@example.com', phone: '010-0000-0106', active: '2026-11-16T17:20' },
    { id: 'p07', name: '윤서진', role: '고객 지원', team: 'ops', email: 'seojin.yoon@example.com', phone: '010-0000-0107', active: '2026-11-18T09:48' },
    { id: 'p08', name: '장현우', role: '프런트엔드 개발', team: 'dev', email: 'hyunwoo.jang@example.com', phone: '010-0000-0108', active: '2026-11-18T13:37' },
    { id: 'p09', name: '임수아', role: '세무 담당', team: 'finance', email: 'sua.lim@example.com', phone: '010-0000-0109', active: '2026-11-17T16:50' },
    { id: 'p10', name: '한지호', role: '파트너 정산 담당', team: 'sales', email: 'jiho.han@example.com', phone: '010-0000-0110', active: '2026-11-18T12:15' },
    { id: 'p11', name: '오유나', role: '디자인 시스템 담당', team: 'design', email: 'yuna.oh@example.com', phone: '010-0000-0111', active: '2026-11-15T18:00' },
    { id: 'p12', name: '서준혁', role: '개발 팀장', team: 'dev', email: 'junhyuk.seo@example.com', phone: '010-0000-0112', active: '2026-11-18T08:55' },
    { id: 'p13', name: '신다은', role: '채용·온보딩 담당', team: 'ops', email: 'daeun.shin@example.com', phone: '010-0000-0113', active: '2026-11-17T10:20' },
    { id: 'p14', name: '권태윤', role: '영업 팀장', team: 'sales', email: 'taeyun.kwon@example.com', phone: '010-0000-0114', active: '2026-11-14T15:30' }
  ],

  // format: doc(문서) · sheet(표) · slide(발표 자료) · pdf
  docs: [
    { id: 'd01', title: '11월 정산 보고서', format: 'sheet', team: 'finance', owner: 'p01', updated: '2026-11-18T10:20', body: '11월 매출과 비용을 거래처별로 모았어요. 정산 마감 전에 금액을 한 번 더 확인해 주세요.' },
    { id: 'd02', title: '3분기 정산 결과 요약', format: 'slide', team: 'finance', owner: 'p02', updated: '2026-10-08T14:00', body: '3분기 정산 결과와 지난 분기와의 차이를 정리한 발표 자료예요.' },
    { id: 'd03', title: '파트너 정산 기준 안내', format: 'doc', team: 'sales', owner: 'p10', updated: '2026-11-12T16:30', body: '파트너사 수수료를 언제, 어떤 기준으로 정산하는지 정리했어요. 정산 주기는 매월 말일이에요.' },
    { id: 'd04', title: '정산 마감 체크리스트', format: 'doc', team: 'finance', owner: 'p01', updated: '2026-11-17T09:10', body: '월말 정산 마감 때 확인할 항목을 순서대로 적었어요. 세금계산서 발행 여부부터 봐 주세요.' },
    { id: 'd05', title: '10월 정산 보고서', format: 'sheet', team: 'finance', owner: 'p01', updated: '2026-11-03T11:00', body: '10월 매출과 비용을 거래처별로 모았어요. 확정한 판이에요.' },
    { id: 'd06', title: '경비 정산 규정', format: 'pdf', team: 'finance', owner: 'p09', updated: '2026-03-02T10:00', body: '출장비·식비·교통비를 정산하는 방법과 한도를 정리한 규정이에요.' },
    { id: 'd07', title: '정산 자동화 개발 계획', format: 'doc', team: 'dev', owner: 'p04', updated: '2026-11-14T13:40', body: '손으로 맞추던 정산 대사를 자동으로 돌리는 계획이에요. 1차 범위는 카드 매출이에요.' },
    { id: 'd08', title: '정산 내역 화면 개선 시안', format: 'slide', team: 'design', owner: 'p05', updated: '2026-11-10T17:20', body: '정산 내역 표를 읽기 쉽게 바꾼 시안이에요. 금액 열을 오른쪽에 맞췄어요.' },
    { id: 'd09', title: '거래처별 미수금 현황', format: 'sheet', team: 'finance', owner: 'p09', updated: '2026-11-16T15:00', body: '정산이 끝나지 않은 거래처와 남은 금액을 모았어요.' },
    { id: 'd10', title: '2025년 연간 정산 보고서', format: 'pdf', team: 'finance', owner: 'p02', updated: '2025-12-30T18:00', body: '2025년 한 해의 정산 결과를 감사용으로 정리했어요.' },
    { id: 'd11', title: '카드 매출 정산 대사표', format: 'sheet', team: 'finance', owner: 'p01', updated: '2026-11-18T14:55', body: '카드사 입금액과 주문 금액을 하루 단위로 맞춰 봐요.' },
    { id: 'd12', title: '영업 수수료 정산표', format: 'sheet', team: 'sales', owner: 'p10', updated: '2026-11-11T10:30', body: '영업 담당자별 10월 수수료를 정산한 표예요.' },
    { id: 'd13', title: '정산 오류 대응 절차', format: 'doc', team: 'ops', owner: 'p03', updated: '2026-09-21T11:20', body: '정산 금액이 맞지 않을 때 누구에게 알리고 어떻게 고치는지 정리했어요.' },
    { id: 'd14', title: '세금계산서 발행 일정', format: 'doc', team: 'finance', owner: 'p09', updated: '2026-11-17T16:45', body: '이번 달 정산과 함께 발행할 세금계산서 일정이에요.' },
    { id: 'd15', title: '주간 운영 회의록', format: 'doc', team: 'ops', owner: 'p03', updated: '2026-11-17T11:00', body: '이번 주 고객 문의 흐름과 정산이 늦어진 주문을 함께 봤어요.' },
    { id: 'd16', title: '디자인 리뷰 회의록', format: 'doc', team: 'design', owner: 'p11', updated: '2026-11-13T15:30', body: '버튼과 표 부품 바꾼 안을 함께 봤어요. 다음 리뷰는 2주 뒤예요.' },
    { id: 'd17', title: '개발 주간 회의록', format: 'doc', team: 'dev', owner: 'p12', updated: '2026-11-14T10:00', body: '배포 일정과 남은 결함을 정리했어요.' },
    { id: 'd18', title: '영업 회의록 11월 2주', format: 'doc', team: 'sales', owner: 'p14', updated: '2026-11-12T09:30', body: '새 거래처 3곳과 계약 진행 상황을 나눴어요.' },
    { id: 'd19', title: '신규 입사자 온보딩 안내', format: 'doc', team: 'ops', owner: 'p13', updated: '2026-11-05T14:00', body: '첫 주에 할 일, 계정 신청 방법, 팀 소개를 모았어요.' },
    { id: 'd20', title: '11월 입사자 온보딩 일정표', format: 'sheet', team: 'ops', owner: 'p13', updated: '2026-11-10T09:00', body: '11월 입사자의 첫 2주 일정을 날짜별로 정리했어요.' },
    { id: 'd21', title: '디자인 시스템 사용 안내', format: 'pdf', team: 'design', owner: 'p11', updated: '2026-10-28T16:00', body: '버튼·입력·표 같은 부품을 언제 쓰는지 정리했어요.' },
    { id: 'd22', title: '고객 문의 유형 분석', format: 'slide', team: 'ops', owner: 'p07', updated: '2026-11-06T13:20', body: '지난달 문의를 유형별로 나눠 자주 묻는 질문을 정리했어요.' },
    { id: 'd23', title: '2027년 채용 계획', format: 'slide', team: 'ops', owner: 'p13', updated: '2026-11-15T10:40', body: '내년 상반기 팀별 채용 인원과 일정이에요.' },
    { id: 'd24', title: '주문 연동 API 설명서', format: 'pdf', team: 'dev', owner: 'p04', updated: '2026-08-19T11:00', body: '외부 서비스와 주문 정보를 주고받는 방법이에요.' },
    { id: 'd25', title: '3분기 영업 실적', format: 'slide', team: 'sales', owner: 'p06', updated: '2026-10-05T15:00', body: '3분기 거래처별 실적과 다음 분기 목표예요.' }
  ],

  // status: todo(할 일) · doing(진행 중) · done(완료)
  tasks: [
    { id: 't01', title: '11월 정산 마감', status: 'doing', team: 'finance', assignee: 'p01', due: '2026-11-25', updated: '2026-11-18T09:30', body: '거래처 대사를 끝내고 정산 보고서를 확정해요.' },
    { id: 't02', title: '파트너 정산 금액 확인', status: 'todo', team: 'sales', assignee: 'p10', due: '2026-11-20', updated: '2026-11-17T17:10', body: '파트너사 3곳의 10월 수수료 정산 금액을 확인해요.' },
    { id: 't03', title: '정산 자동화 1차 개발', status: 'doing', team: 'dev', assignee: 'p04', due: '2026-12-12', updated: '2026-11-16T18:20', body: '카드 매출 정산 대사를 자동으로 돌리는 기능을 만들어요.' },
    { id: 't04', title: '경비 정산 규정 개정', status: 'todo', team: 'finance', assignee: 'p09', due: '2026-12-01', updated: '2026-11-10T11:00', body: '출장비 한도를 올해 물가에 맞춰 고쳐요.' },
    { id: 't05', title: '10월 정산 마감', status: 'done', team: 'finance', assignee: 'p01', due: '2026-10-27', updated: '2026-10-27T16:00', body: '10월 정산 보고서를 확정했어요.' },
    { id: 't06', title: '정산 오류 3건 처리', status: 'doing', team: 'ops', assignee: 'p03', due: '2026-11-19', updated: '2026-11-18T13:05', body: '금액이 맞지 않은 주문 3건을 재무팀과 함께 고쳐요.' },
    { id: 't07', title: '세금계산서 발행', status: 'todo', team: 'finance', assignee: 'p09', due: '2026-11-28', updated: '2026-11-14T10:00', body: '11월 정산이 끝난 거래처에 세금계산서를 발행해요.' },
    { id: 't08', title: '영업 수수료 정산', status: 'done', team: 'sales', assignee: 'p10', due: '2026-11-10', updated: '2026-11-10T15:30', body: '10월 영업 수수료를 정산했어요.' },
    { id: 't09', title: '정산 보고서 양식 바꾸기', status: 'todo', team: 'finance', assignee: 'p02', due: '2026-12-15', updated: '2026-11-05T09:00', body: '보고서 맨 위에 요약 표를 넣어요.' },
    { id: 't10', title: '온보딩 자료 고치기', status: 'doing', team: 'ops', assignee: 'p13', due: '2026-11-21', updated: '2026-11-15T14:10', body: '계정 신청 순서가 바뀐 것을 온보딩 안내에 반영해요.' },
    { id: 't11', title: '디자인 리뷰 회의록 나누기', status: 'done', team: 'design', assignee: 'p11', due: '2026-11-14', updated: '2026-11-14T16:00', body: '리뷰에서 정한 것을 팀 채널에 올려요.' },
    { id: 't12', title: '버튼 부품 접근성 점검', status: 'doing', team: 'design', assignee: 'p05', due: '2026-11-26', updated: '2026-11-17T11:40', body: '포커스 링과 누르는 영역 크기를 확인해요.' },
    { id: 't13', title: '12월 배포 일정 확정', status: 'todo', team: 'dev', assignee: 'p12', due: '2026-11-24', updated: '2026-11-16T09:20', body: '남은 결함을 보고 배포 날짜를 정해요.' },
    { id: 't14', title: '새 거래처 계약서 검토', status: 'doing', team: 'sales', assignee: 'p06', due: '2026-11-22', updated: '2026-11-18T10:50', body: '계약 조건과 수수료율을 확인해요.' },
    { id: 't15', title: '고객 문의 답변 양식 정리', status: 'todo', team: 'ops', assignee: 'p07', due: '2026-12-03', updated: '2026-11-12T15:15', body: '자주 묻는 질문 10개의 답변 양식을 만들어요.' },
    { id: 't16', title: '11월 입사자 계정 만들기', status: 'done', team: 'ops', assignee: 'p13', due: '2026-11-03', updated: '2026-11-03T10:00', body: '메일·메신저·문서 계정을 만들고 온보딩 안내를 보냈어요.' }
  ]
};
