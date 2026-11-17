/*
 * 가상 데이터 — 가입 때 받은 팀 정보, 채널 목록, 검수용 예시 진행. 화면 코드(page.js)와 섞지 않고
 * 이 파일 한 곳에만 둔다(DESIGN.md 「샘플 데이터」). 실존 회사·사람·서비스가 아니다.
 * 이메일은 @example.com 만 쓴다(DESIGN.md 「샘플 데이터」). 작업 공간 주소는 예약 최상위 도메인 .example 아래에 둔다.
 */
(function () {
  'use strict';

  window.ONBOARDING_DATA = {
    // 가입할 때 적은 값 — 1단계 칸에 미리 채우고, 1단계를 건너뛰면 이 값을 쓴다
    signup: { team: '해솔상사', address: 'haesol' },
    domain: '.team.example', // 작업 공간 주소 뒤 고정 글 — 예시용 예약 최상위 도메인(.example)
    emailPlaceholder: '예: name@example.com…',

    // 이미 다른 팀이 쓰는 작업 공간 주소(1단계 주소 검사)
    takenAddresses: ['support', 'admin', 'help', 'team', 'www'],

    sizes: [
      { id: 's', label: '1~10명' },
      { id: 'm', label: '11~50명' },
      { id: 'l', label: '51~200명' },
      { id: 'xl', label: '200명 넘음' }
    ],

    roles: [
      { id: 'member', label: '구성원', desc: '업무를 보고 처리해요' },
      { id: 'admin', label: '관리자', desc: '설정과 구성원도 관리해요' }
    ],

    channels: [
      { id: 'web', icon: 'chat', name: '웹사이트 채팅', desc: '회사 웹사이트에 상담 창을 붙여요.', failReason: '웹사이트에서 답이 오지 않았어요.' },
      { id: 'mail', icon: 'inbox', name: '문의 메일', desc: 'help@example.com으로 온 메일을 받아요.', failReason: '메일 서버가 답하지 않았어요.' },
      { id: 'calendar', icon: 'calendar', name: '팀 캘린더', desc: '팀 일정을 작업 공간에서 함께 봐요.', failReason: '캘린더에서 답이 오지 않았어요.' }
    ],

    // 보내기를 흉내 낼 때 처음 한 번 실패하는 주소(메일 서버가 받지 않음)
    inviteFailOnce: ['jung.minjae@example.com'],

    // 검수용 예시 — 주소로 바로 들어왔고 이 창에 저장한 진행이 없을 때 쓴다
    sample: {
      team: '해솔상사',
      address: 'haesol',
      size: 'm',
      invites: ['kim.seoyun@example.com', 'park.dohyun@example.com', 'lee.haeun@example.com'],
      partialSent: ['kim.seoyun@example.com', 'park.dohyun@example.com'],
      partialFailed: 'jung.minjae@example.com',
      invalidTeam: '',
      invalidAddress: '해솔 상사'
    }
  };
})();
