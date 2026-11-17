/*
 * 파일 관리자 — 가상의 샘플 데이터(DESIGN.md 「샘플 데이터」).
 * 사람·폴더·파일 이름은 모두 지어낸 것이다. 화면 코드(js/page.js)는 이 파일만 읽는다.
 * 크기는 바이트, 날짜는 데이터 세계의 시각(now = 2026-11-18 10:30)이다.
 */
(function () {
  'use strict';

  var KB = 1024;
  var MB = 1024 * KB;
  var GB = 1024 * MB;

  // type: folder | file · parent: 상위 폴더 id(맨 위는 root) · by: 마지막으로 고친 사람 · readonly: 보기 권한만 있는 폴더
  var items = [
    { id: 'f-design', parent: 'root', type: 'folder', name: '디자인', modified: '2026-11-17T16:40', by: '이하은' },
    { id: 'f-plan', parent: 'root', type: 'folder', name: '기획', modified: '2026-11-12T09:05', by: '최준호' },
    { id: 'f-acct', parent: 'root', type: 'folder', name: '회계팀 공유', modified: '2026-11-03T14:20', by: '정민지', readonly: true },
    { id: 'f-new', parent: 'root', type: 'folder', name: '새 프로젝트', modified: '2026-11-18T09:12', by: '김서윤' },
    { id: 'd-plan26', parent: 'root', type: 'file', name: '2026 업무 계획.xlsx', size: 248 * KB + 310, modified: '2026-11-18T10:12', by: '박도현' },
    { id: 'd-week3', parent: 'root', type: 'file', name: '주간 회의록 11월 3주.docx', size: 36 * KB + 120, modified: '2026-11-17T17:55', by: '김서윤' },
    { id: 'd-week2', parent: 'root', type: 'file', name: '주간 회의록 11월 2주.docx', size: 34 * KB + 902, modified: '2026-11-10T18:02', by: '김서윤' },
    { id: 'd-video', parent: 'root', type: 'file', name: '제품 소개 영상.mp4', size: 128 * MB + 412 * KB, modified: '2026-10-28T11:30', by: '강태윤' },
    { id: 'd-floor', parent: 'root', type: 'file', name: '사무실 배치도.pdf', size: Math.round(1.2 * MB), modified: '2025-12-30T15:00', by: '박도현' },
    { id: 'd-contact', parent: 'root', type: 'file', name: '팀 연락처.csv', size: 820, modified: '2026-09-02T08:45', by: '이하은' },

    { id: 'f-spring', parent: 'f-design', type: 'folder', name: '2026 봄 캠페인', modified: '2026-11-17T16:40', by: '이하은' },
    { id: 'f-logo', parent: 'f-design', type: 'folder', name: '로고 원본', modified: '2026-08-21T13:10', by: '강태윤' },
    { id: 'd-guide', parent: 'f-design', type: 'file', name: '브랜드 가이드 v3.pdf', size: Math.round(18.4 * MB), modified: '2026-11-05T10:00', by: '이하은' },
    { id: 'd-swatch', parent: 'f-design', type: 'file', name: '색상 견본.png', size: 640 * KB + 77, modified: '2026-11-05T10:20', by: '강태윤' },

    { id: 'd-bannerA', parent: 'f-spring', type: 'file', name: '메인 배너 시안 A.png', size: Math.round(2.4 * MB), modified: '2026-11-17T16:40', by: '이하은' },
    { id: 'd-bannerB', parent: 'f-spring', type: 'file', name: '메인 배너 시안 B.png', size: Math.round(2.6 * MB), modified: '2026-11-17T16:38', by: '이하은' },
    { id: 'd-copy', parent: 'f-spring', type: 'file', name: '카피 초안.docx', size: 28 * KB + 400, modified: '2026-11-14T11:15', by: '최준호' },
    { id: 'd-shoot', parent: 'f-spring', type: 'file', name: '촬영 일정.xlsx', size: 52 * KB + 18, modified: '2026-11-11T09:30', by: '강태윤' },

    { id: 'd-logoH', parent: 'f-logo', type: 'file', name: '로고 가로형.svg', size: 12 * KB + 300, modified: '2026-08-21T13:10', by: '강태윤' },
    { id: 'd-logoV', parent: 'f-logo', type: 'file', name: '로고 세로형.svg', size: 11 * KB + 64, modified: '2026-08-21T13:08', by: '강태윤' },
    { id: 'd-guideOld', parent: 'f-logo', type: 'file', name: '브랜드 가이드 v3.pdf', size: Math.round(17.9 * MB), modified: '2026-03-02T16:15', by: '강태윤' },

    { id: 'd-req', parent: 'f-plan', type: 'file', name: '요구사항 정의서.docx', size: 412 * KB + 9, modified: '2026-11-12T09:05', by: '최준호' },
    { id: 'd-sched', parent: 'f-plan', type: 'file', name: '일정표.xlsx', size: 96 * KB + 512, modified: '2026-11-06T15:40', by: '박도현' },
    { id: 'd-inter', parent: 'f-plan', type: 'file', name: '고객 인터뷰 정리.pdf', size: Math.round(2.1 * MB), modified: '2026-10-30T17:20', by: '최준호' },

    { id: 'd-cost11', parent: 'f-acct', type: 'file', name: '11월 비용 정산.xlsx', size: 188 * KB + 40, modified: '2026-11-03T14:20', by: '정민지' },
    { id: 'd-cost10', parent: 'f-acct', type: 'file', name: '10월 비용 정산.xlsx', size: 176 * KB + 610, modified: '2026-10-02T10:05', by: '정민지' },
    { id: 'd-card', parent: 'f-acct', type: 'file', name: '법인카드 사용 기준.pdf', size: 640 * KB + 210, modified: '2026-07-15T10:00', by: '정민지' }
  ];

  var fileBytes = items.reduce(function (sum, it) { return sum + (it.size || 0); }, 0);
  var total = 20 * GB;

  window.FM_DATA = {
    now: '2026-11-18T10:30',
    me: '김서윤',
    rootName: '내 파일',
    items: items,
    storage: {
      total: total,
      // 이 화면 밖 파일이 차지한 공간. 화면의 파일 크기 합과 더해 "썼어요"가 된다
      otherNormal: Math.round(14.6 * GB) - fileBytes,
      // ?state=quota — 남은 공간이 204MB 가 되게
      otherQuota: total - 204 * MB - fileBytes
    },
    // ?state=uploading · upload-error · quota 에서 올리는 가상 파일
    sampleUploads: [
      { name: '현장 사진 1.jpg', size: Math.round(3.1 * MB) },
      { name: '현장 사진 2.jpg', size: Math.round(2.8 * MB) },
      { name: '현장 인터뷰.mov', size: 612 * MB }
    ],
    contact: { readonlyOwner: '정민지' }
  };
})();
