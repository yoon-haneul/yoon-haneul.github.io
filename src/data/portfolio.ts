export const profile = {
  name: '윤하늘',
  role: 'Backend Developer',
  intro: '만들고 싶은 게 생기면 일단 만들어보는 편입니다. 사용자가 불편함을 느끼지 않는 화면을 만드는 데 관심이 많고, 지금도 공부하는 중입니다.',
  email: 'bm000227@gmail.com',
  github: 'https://github.com/yoon-haneul',
  available: false,
};

export const certifications = [
  { name: 'GTQ 그래픽기술자격 2급', org: '한국생산성본부', date: '2018.01' },
  { name: 'ITQ 한글엑셀 A등급',     org: '한국생산성본부', date: '2022.10' },
  { name: 'ITQ 아래한글 B등급',     org: '한국생산성본부', date: '2022.10' },
  { name: 'FAT 1급',                org: '한국공인회계사회', date: '2023.08' },
];

export const education = [
  {
    name: '한국방송통신대학교',
    detail: '컴퓨터과학과 · 2026.03~ 재학 중',
  },
  {
    name: '이젠아카데미 — 백엔드 웹개발자 부트캠프',
    detail: '자바 · 파이썬 · AI 챗봇 · 2025.06 ~ 2025.12',
  },
];

export const skills = {
  main: ['Java', 'Spring Boot', 'Python', 'FastAPI'],
  also: ['React', 'TypeScript', 'MySQL', 'Docker', 'Git'],
};

export const projects = [
  {
    title: 'BEGA',
    subtitle: 'KBO 야구 팬을 위한 직관 가이드 플랫폼',
    desc: '2025년 KBO 관중 1,200만 돌파 — 야구 입문자를 위한 가이드가 없다는 문제에서 출발했습니다. 경기 일정, 팀 순위, 구장 주변 정보, AI 챗봇까지 한 곳에 모은 서비스입니다.',
    role: '홈 화면의 실시간 팀 순위 조회와 경기 승패 투표(응원 팀 테스트) 기능을 담당했습니다. 투표·변경·취소 흐름과 실시간 현황 표시, 중복 투표 방지 로직을 구현했습니다.',
    what: [
      '실시간 팀 순위 조회 및 화면 구성',
      '경기 승패 투표 — 투표·변경·취소 + 실시간 현황',
      '날짜 기반 리그 타입 자동 판별, 중복 투표 방지',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'FastAPI', 'OpenAI Whisper', 'RAG', 'Supabase', 'Docker', 'AWS'],
    github: 'https://github.com/BegaBaseball',
    demo: null,
    period: '2025',
    color: '#eef2ff',
  },
  {
    title: 'TripMoa',
    subtitle: '여행 스토리 공유 · 여행 메이트 매칭 웹앱',
    desc: '여행 후기를 남기고 함께 떠날 메이트를 구할 수 있는 커뮤니티 서비스입니다. 팀 프로젝트로 진행했고, 저는 여행 스토리 기능 전체를 담당했습니다.',
    role: '자유글·후기 두 가지 형식의 글 작성 페이지, 상세 페이지, 내 글 모음 페이지를 구현했습니다. 실시간 채팅(WebSocket · STOMP)도 연동했습니다.',
    what: [
      '자유글 · 후기 형식 구분 글쓰기 페이지',
      '스토리 상세 페이지 · 내 스토리 모음',
      'WebSocket · STOMP 기반 실시간 채팅 연동',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'MySQL', 'Redis', 'WebSocket', 'STOMP', 'JWT', 'OAuth2', 'Docker'],
    github: 'https://github.com/TripMoa',
    demo: null,
    period: '2025',
    color: '#f0fdf4',
  },
];
