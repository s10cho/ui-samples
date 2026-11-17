/*
 * 칸반 보드 — 가상 샘플 데이터. 화면 코드(js/page.js)와 섞지 않는다(DESIGN.md 「샘플 데이터」).
 * 사람·업무는 모두 지어낸 것이다. 실제 회사·사람과 관계없다.
 * 오늘은 2026-11-18 로 고정한다(마감 지남·오늘 마감·활동 기록 시각을 늘 같게 보이려고).
 * 카드 순서 = 단계 안 순서. 진행 중(최대 4개)에는 일부러 5장을 둬 개수 제한을 넘은 상태를 보인다.
 */
window.KB_DATA = {
  today: '2026-11-18',
  admin: 'park',
  stages: [
    { id: 'todo', name: '할 일', limit: 0 },
    { id: 'doing', name: '진행 중', limit: 4 },
    { id: 'review', name: '검토', limit: 3 },
    { id: 'done', name: '완료', limit: 0 }
  ],
  people: [
    { id: 'kim', name: '김서윤' },
    { id: 'park', name: '박도현' },
    { id: 'lee', name: '이하은' },
    { id: 'jung', name: '정우진' },
    { id: 'han', name: '한소율' }
  ],
  labels: [
    { id: 'pay', name: '결제' },
    { id: 'ship', name: '배송' },
    { id: 'settle', name: '정산' },
    { id: 'cs', name: '고객 문의' },
    { id: 'tool', name: '사내 도구' }
  ],
  cards: [
    { id: 'c01', title: '11월 환불 요청 정리', stage: 'todo', who: 'lee', labels: ['pay'], due: '2026-11-21',
      desc: '이번 달 들어온 환불 요청 32건을 사유별로 묶고, 처리하지 못한 건은 담당자를 정해요.',
      log: [{ at: '2026-11-16T14:10', who: 'lee', text: '카드를 만들었어요' }] },
    { id: 'c02', title: '배송 지연 안내 문구 고치기', stage: 'todo', who: 'han', labels: ['ship', 'cs'], due: '2026-11-24',
      desc: '지역마다 배송 지연 안내가 서로 달라요. 문구 하나로 맞추고 상담 빠른 답변에도 넣어요.',
      log: [{ at: '2026-11-17T09:30', who: 'han', text: '카드를 만들었어요' }] },
    { id: 'c03', title: '12월 정산 일정 공유', stage: 'todo', who: 'park', labels: ['settle'], due: '2026-11-28',
      desc: '판매처별 정산일과 지급일을 표로 만들어 팀에 공유해요.',
      log: [{ at: '2026-11-12T16:40', who: 'park', text: '카드를 만들었어요' }] },
    { id: 'c04', title: '상담 분류 기준 다시 보기', stage: 'todo', who: null, labels: ['cs'], due: null,
      desc: '‘기타’로 분류된 상담이 많아요. 분류 항목을 줄일지 나눌지 정해요.',
      log: [{ at: '2026-11-18T08:50', who: 'lee', text: '카드를 만들었어요' }] },
    { id: 'c05', title: '주문 내보내기 오류 재현', stage: 'todo', who: 'jung', labels: ['tool'], due: '2026-11-20',
      desc: '주문을 1,000건 넘게 내보내면 파일이 비어 있다는 제보가 2건 있어요. 재현 조건을 찾아요.',
      log: [{ at: '2026-11-17T17:05', who: 'jung', text: '카드를 만들었어요' }] },
    { id: 'c06', title: '반품 수거 업체 비교', stage: 'todo', who: 'kim', labels: ['ship'], due: '2026-12-02',
      desc: '수거 업체 3곳의 비용과 수거까지 걸리는 날을 비교해요.',
      log: [{ at: '2026-11-10T11:20', who: 'kim', text: '카드를 만들었어요' }] },

    { id: 'c07', title: '결제 오류 확인', stage: 'doing', who: 'kim', labels: ['pay'], due: '2026-11-17',
      desc: '카드 결제는 승인됐는데 주문이 만들어지지 않은 건이 4건 있어요. 결제 기록과 주문 기록을 맞춰 봐요.',
      log: [{ at: '2026-11-14T10:05', who: 'kim', text: '카드를 만들었어요' },
            { at: '2026-11-17T15:20', who: 'kim', text: '할 일에서 진행 중으로 옮겼어요' }] },
    { id: 'c08', title: '11월 정산 보고서 초안', stage: 'doing', who: 'park', labels: ['settle'], due: '2026-11-19',
      desc: '판매처 12곳의 11월 매출과 수수료를 모아 보고서 초안을 써요.',
      log: [{ at: '2026-11-11T13:00', who: 'park', text: '카드를 만들었어요' },
            { at: '2026-11-16T09:15', who: 'park', text: '할 일에서 진행 중으로 옮겼어요' }] },
    { id: 'c09', title: '자주 묻는 질문 5개 새로 쓰기', stage: 'doing', who: 'lee', labels: ['cs'], due: '2026-11-25',
      desc: '지난달 상담에서 많이 나온 질문 5개를 골라 답을 새로 써요.',
      log: [{ at: '2026-11-13T15:30', who: 'lee', text: '카드를 만들었어요' },
            { at: '2026-11-18T09:40', who: 'lee', text: '할 일에서 진행 중으로 옮겼어요' }] },
    { id: 'c10', title: '택배사 연동 키 바꾸기', stage: 'doing', who: 'jung', labels: ['ship', 'tool'], due: '2026-11-18',
      desc: '택배사 연동 키가 11월 18일에 끝나요. 새 키로 바꾸고 주문 1건으로 확인해요.',
      log: [{ at: '2026-11-15T10:10', who: 'jung', text: '카드를 만들었어요' },
            { at: '2026-11-17T11:45', who: 'jung', text: '할 일에서 진행 중으로 옮겼어요' }] },
    { id: 'c11', title: '부분 환불 화면 점검', stage: 'doing', who: 'han', labels: ['pay', 'tool'], due: '2026-11-26',
      desc: '부분 환불 금액이 주문 금액보다 커도 저장되는지 확인해요.',
      log: [{ at: '2026-11-16T16:25', who: 'han', text: '카드를 만들었어요' },
            { at: '2026-11-18T10:30', who: 'park', text: '할 일에서 진행 중으로 옮겼어요' }] },

    { id: 'c12', title: '카드 결제 실패 안내 메일', stage: 'review', who: 'kim', labels: ['pay', 'cs'], due: '2026-11-19',
      desc: '결제가 실패했을 때 보내는 메일 문구와 다시 결제하는 방법을 고쳤어요. 검토해 주세요.',
      log: [{ at: '2026-11-09T14:00', who: 'kim', text: '카드를 만들었어요' },
            { at: '2026-11-17T18:10', who: 'kim', text: '진행 중에서 검토로 옮겼어요' }] },
    { id: 'c13', title: '정산 금액 자동 확인 규칙', stage: 'review', who: 'park', labels: ['settle', 'tool'], due: '2026-11-22',
      desc: '판매처가 보낸 정산 금액과 우리 기록이 1,000원 넘게 다르면 알림을 보내는 규칙이에요.',
      log: [{ at: '2026-11-05T10:30', who: 'park', text: '카드를 만들었어요' },
            { at: '2026-11-18T08:20', who: 'park', text: '진행 중에서 검토로 옮겼어요' }] },

    { id: 'c14', title: '10월 정산 마감', stage: 'done', who: 'park', labels: ['settle'], due: '2026-11-10',
      desc: '10월 정산을 마감하고 지급 내역을 회계 담당에게 넘겼어요.',
      log: [{ at: '2026-11-10T17:30', who: 'park', text: '검토에서 완료로 옮겼어요' }] },
    { id: 'c15', title: '배송비 정책 공지', stage: 'done', who: 'han', labels: ['ship'], due: '2026-11-12',
      desc: '12월부터 바뀌는 배송비 기준을 공지했어요.',
      log: [{ at: '2026-11-12T13:40', who: 'han', text: '검토에서 완료로 옮겼어요' }] },
    { id: 'c16', title: '상담 대기 시간 보고', stage: 'done', who: 'lee', labels: ['cs'], due: '2026-11-14',
      desc: '10월 상담 대기 시간을 요일·시간대별로 정리했어요.',
      log: [{ at: '2026-11-14T11:00', who: 'lee', text: '검토에서 완료로 옮겼어요' }] },
    { id: 'c17', title: '주문 상태 이름 정리', stage: 'done', who: 'jung', labels: ['tool'], due: '2026-11-13',
      desc: '사내 도구마다 다르던 주문 상태 이름 9개를 하나로 맞췄어요.',
      log: [{ at: '2026-11-13T15:50', who: 'jung', text: '검토에서 완료로 옮겼어요' }] },
    { id: 'c18', title: '결제 수단 추가 검토', stage: 'done', who: 'kim', labels: ['pay'], due: '2026-11-16',
      desc: '간편 결제 2종을 더할지 비용과 수수료를 견줘 봤어요. 다음 분기에 다시 봐요.',
      log: [{ at: '2026-11-16T10:20', who: 'kim', text: '검토에서 완료로 옮겼어요' }] }
  ]
};
