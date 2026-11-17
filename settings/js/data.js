/*
 * 설정 샘플의 가상 데이터 — 이 파일 한 곳에만 둔다(DESIGN.md 「샘플 데이터」).
 * 이름·이메일·로그인 기록은 모두 지어낸 값이다. 이메일은 @example.com 만 쓴다.
 * 시각은 서울 시간(UTC+09:00) 기준 문자열이다. 화면이 시간대 설정에 맞춰 옮겨 보인다.
 */
window.SETTINGS_DATA = {
  // 이 샘플의 "지금" — 마지막 접속을 "오늘·어제"로 읽을 때 기준
  now: '2026-11-17T14:45',

  team: { name: '운영 1팀' },

  me: { id: 'm1', name: '김서윤', email: 'seoyun.kim@example.com', lang: 'ko', tz: 'Asia/Seoul' },

  // ?state=dirty · ?state=save-fail 에서 저장하지 않은 채 바꿔 둔 값
  dirtyPreset: { name: '김서연', tz: 'Europe/London' },

  notify: {
    assign: { mail: true, app: true, sms: false },
    mention: { mail: false, app: true, sms: false },
    digest: { mail: true, app: false, sms: false },
    security: { mail: true, app: true, sms: true }
  },

  dnd: { enabled: true, start: '22', end: '8', weekend: true },

  tfa: { on: false, since: '' },
  tfaKey: 'ABCD EFGH 2345 WXYZ',

  logins: [
    { id: 'l1', at: '2026-11-17T14:41', device: '데스크톱 브라우저', place: '서울', ok: true, status: 'current' },
    { id: 'l2', at: '2026-11-17T09:12', device: '휴대폰 앱', place: '서울', ok: true, status: 'active' },
    { id: 'l3', at: '2026-11-16T21:05', device: '태블릿 브라우저', place: '부산', ok: true, status: 'active' },
    { id: 'l4', at: '2026-11-16T08:57', device: '데스크톱 브라우저', place: '서울', ok: true, status: 'ended' },
    { id: 'l5', at: '2026-11-15T23:40', device: '데스크톱 브라우저', place: '확인 안 됨', ok: false, reason: '비밀번호가 틀렸어요', status: 'none' },
    { id: 'l6', at: '2026-11-14T10:22', device: '휴대폰 앱', place: '서울', ok: true, status: 'ended' },
    { id: 'l7', at: '2026-11-12T18:03', device: '데스크톱 브라우저', place: '대전', ok: true, status: 'ended' },
    { id: 'l8', at: '2026-11-10T09:30', device: '데스크톱 브라우저', place: '서울', ok: true, status: 'ended' }
  ],

  members: [
    { id: 'm1', name: '김서윤', email: 'seoyun.kim@example.com', role: 'owner', seen: '2026-11-17T14:41' },
    { id: 'm2', name: '박도현', email: 'dohyun.park@example.com', role: 'admin', seen: '2026-11-17T11:20' },
    { id: 'm3', name: '이하은', email: 'haeun.lee@example.com', role: 'editor', seen: '2026-11-16T18:03' },
    { id: 'm4', name: '최준호', email: 'junho.choi@example.com', role: 'editor', seen: '2026-11-14T10:05' },
    { id: 'm5', name: '정민서', email: 'minseo.jung@example.com', role: 'viewer', seen: '2026-11-09T16:40' },
    { id: 'm6', name: '강지우', email: 'jiwoo.kang@example.com', role: 'viewer', seen: '', invited: true }
  ],

  // ?state=no-permission — 나는 편집자, 팀 소유자는 박도현
  noPermission: { roles: { m1: 'editor', m2: 'owner' } }
};
