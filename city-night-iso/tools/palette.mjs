#!/usr/bin/env node
/*
 * 그림 색(--iso-*)을 계산해 세 곳에 넣는다 — 설계서 4-1-1절
 *
 *   node tools/palette.mjs
 *
 * - css/tokens.css      /* iso-palette:start *\/ ~ /* iso-palette:end *\/ 사이: 해 질 녘·밤 변수
 * - css/scene.css       같은 표시 사이: 재질 면 클래스(m-<재질>-<밝기>)
 * - docs/ui/city-night-iso.md  <!-- iso-palette:start --> ~ <!-- iso-palette:end --> 사이: 모든 토큰 표
 *
 * 재질 바탕색은 3D 판(city-night) js/tokens.js 의 SCENE_COLOR 와 같다.
 * 면 밝기 4단계: t 윗면 · l 햇빛 쪽 · m 비스듬한 면 · d 그늘 면.
 * 의존성 없음. Node 18 이상.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TONES = ['t', 'l', 'm', 'd'];

const parse = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const hex = (c) => '#' + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
const mix = (a, b, k) => hex(parse(a).map((v, i) => v + (parse(b)[i] - v) * k));

/** 해 질 녘 — 단계마다 채널별 곱. 햇빛 쪽은 노을빛(주황), 그늘 쪽은 하늘빛(푸른 기운)을 받는다 */
const DUSK = {
  t: [1.0, 0.95, 0.9],
  l: [0.97, 0.87, 0.78],
  m: [0.8, 0.77, 0.78],
  d: [0.64, 0.65, 0.74],
};
/** 밤 — 달빛 색 × 단계 밝기 + 밤하늘 색 조금 */
const MOON = [0.28, 0.31, 0.42];
const NIGHT_K = { t: 1.0, l: 0.86, m: 0.74, d: 0.62 };
const NIGHT_SKY = parse('#141C2E');

const duskTone = (base, tone) => hex(parse(base).map((v, i) => v * DUSK[tone][i]));
const nightTone = (base, tone) => hex(parse(base).map((v, i) => v * MOON[i] * NIGHT_K[tone] + NIGHT_SKY[i] * 0.35));

/** 재질 — 3D 판 재질 색 */
const MATERIALS = [
  { id: 'pave', base: '#BDB4A6', use: '땅(보도·광장)·공원 길·승강장 — 3D 판 pavement' },
  { id: 'grass', base: '#7C9B57', use: '공원 풀밭·타워 언덕' },
  { id: 'tree', base: '#557A43', use: '나무 잎' },
  { id: 'stone', base: '#9C958B', use: '둑 벽·모형 판 옆면·기찻길 자갈·가로등 기둥·자갈색 차' },
  { id: 'w1', base: '#D8C8B2', use: '건물 벽 1(3D 판 walls 첫째)' },
  { id: 'w2', base: '#C9B49C', use: '건물 벽 2' },
  { id: 'w3', base: '#B9BEC2', use: '건물 벽 3' },
  { id: 'w4', base: '#CDBFAE', use: '건물 벽 4' },
  { id: 'r1', base: '#8A5D4B', use: '박공지붕 벽돌색' },
  { id: 'r2', base: '#5F6672', use: '박공지붕 석판색·역 지붕·석판색 차' },
  { id: 'white', base: '#EEEAE3', use: '구조물(타워·다리·역·시계탑·분수·기차·배)·흰 차' },
  { id: 'accent', base: '#A84A1A', use: '강조(타워 띠·전망대 지붕·시계탑 지붕·차양·기차 띠·배 띠·멈춤 막이)·강조색 차' },
  { id: 'glass', base: '#2B3240', use: '차 유리·짙은 차·시계 테두리' },
  {
    id: 'lamp',
    base: '#EEEAE3',
    night: { t: '#FFD08A', l: '#FFC46B', m: '#F2B45A', d: '#E0A24A' },
    use: '타워 전망대 둘레 전구 띠(밤에 켜진다)',
  },
];

/** 한 가지 색만 쓰는 재질과 불빛·물·하늘 */
const SINGLES = [
  { name: 'road-t', dusk: duskTone('#6F6A66', 't'), night: nightTone('#6F6A66', 't'), use: '차도(큰길·남쪽 도로·강변 도로·다리 차로) — 3D 판 road `#6F6A66` 의 윗면' },
  { name: 'trunk', dusk: duskTone('#6E5A48', 'd'), night: nightTone('#6E5A48', 'd'), use: '나무 줄기·기찻길 침목 — 3D 판 trunk `#6E5A48`' },
  { name: 'sky', dusk: '#E9C2A3', night: '#141C2E', use: '그림 바탕(하늘) — 3D 판 하늘·안개와 같다' },
  { name: 'river-deep', dusk: '#4F6B86', night: '#0F1A2A', use: '강 가운데·분수 연못·판 옆면의 물길 자국' },
  { name: 'river-shallow', dusk: '#6F87A0', night: '#18283D', use: '둑 가까운 강물' },
  { name: 'wave', dusk: mix('#6F87A0', '#FFFFFF', 0.22), night: mix('#18283D', '#FFFFFF', 0.08), use: '강 물결 무늬' },
  { name: 'glow', dusk: '#FFC46B', night: '#FFC46B', use: '밤 불빛(가로등 아래 빛·골목·다리 위 빛·물에 비친 불빛) — 3D 판 bulb' },
  { name: 'glint-opacity', dusk: '0', night: '0.7', use: '물에 비친 불빛(짧은 선)의 투명도' },
  { name: 'pool-opacity', dusk: '0', night: '0.16', use: '불빛 웅덩이 원 한 겹의 투명도. 두 겹이 겹친 가운데는 약 0.29' },
  { name: 'halo-opacity', dusk: '0', night: '0.3', use: '타워 꼭대기·가로등 머리 둘레 빛 원의 투명도' },
  { name: 'bulb', dusk: '#EEEAE3', night: '#FFC46B', use: '전구(다리 아치·골목 전구 줄·분수 둘레·가로등 머리·배 불빛)' },
  { name: 'win-early', dusk: '#E2A468', night: '#FFC873', use: '먼저 켜진 창·가게 앞 큰 창' },
  { name: 'win-late', dusk: '#5D6679', night: '#FFB95A', use: '밤에 켜지는 창(밤 색은 3D 판 창 색 `#FFC873` 에 따뜻한 빛 `#FFE9C6` 을 곱했다)' },
  { name: 'win-off', dusk: '#4A5262', night: '#1D2535', use: '꺼진 창' },
  { name: 'jet', dusk: '#BFD9E8', night: '#A9B8C6', use: '분수 물줄기' },
  { name: 'jet-opacity', dusk: '0.7', night: '0.7', use: '분수 물줄기 투명도(3D 판과 같다)' },
  { name: 'beacon', dusk: '#FF6A4D', night: '#FF6A4D', use: '타워 꼭대기 불빛' },
  { name: 'beacon-opacity', dusk: '0.5', night: '1', use: '타워 꼭대기 불빛 투명도(해 질 녘에는 약하게). 움직임이 켜져 있으면 여기에 0.55~1 을 곱한다' },
  { name: 'head', dusk: '#9C978C', night: '#FFF1D2', use: '차 앞 불빛' },
  { name: 'tail', dusk: '#6A3326', night: '#E04A2E', use: '차 뒤 불빛' },
  { name: 'clock', dusk: '#F7F3EA', night: '#FFF1D2', use: '시계 판' },
];

function tokens() {
  const rows = [];
  MATERIALS.forEach((m) => {
    TONES.forEach((t) => {
      rows.push({
        name: `${m.id}-${t}`,
        dusk: duskTone(m.base, t),
        night: m.night ? m.night[t] : nightTone(m.base, t),
        use: `${m.use} — ${{ t: '윗면', l: '햇빛 쪽', m: '비스듬한 면', d: '그늘 면' }[t]}`,
        base: m.base,
      });
    });
  });
  SINGLES.forEach((s) => rows.push(s));
  return rows;
}

function replaceBetween(text, start, end, body) {
  const i = text.indexOf(start);
  const j = text.indexOf(end);
  if (i < 0 || j < 0) throw new Error(`표시가 없다: ${start}`);
  return text.slice(0, i + start.length) + '\n' + body + text.slice(j);
}

const rows = tokens();

/* css/tokens.css */
const cssDusk = rows.map((r) => `  --iso-${r.name}: ${r.dusk};`).join('\n');
const cssNight = rows.filter((r) => r.night !== r.dusk).map((r) => `  --iso-${r.name}: ${r.night};`).join('\n');
const tokensPath = join(ROOT, 'css/tokens.css');
writeFileSync(
  tokensPath,
  replaceBetween(
    readFileSync(tokensPath, 'utf8'),
    '/* iso-palette:start */',
    '/* iso-palette:end */',
    `:root {\n${cssDusk}\n}\n\n/* 밤 — 모양은 같고 색만 바뀐다. 불빛은 따뜻한 노란색 하나가 중심(SLOP-01) */\n[data-time="night"] {\n${cssNight}\n}\n`,
  ),
);

/* css/scene.css */
const classes = MATERIALS.flatMap((m) => TONES.map((t) => `.m-${m.id}-${t} { fill: var(--iso-${m.id}-${t}); stroke: var(--iso-${m.id}-${t}); }`));
classes.push('.m-road-t { fill: var(--iso-road-t); stroke: var(--iso-road-t); }');
const scenePath = join(ROOT, 'css/scene.css');
writeFileSync(scenePath, replaceBetween(readFileSync(scenePath, 'utf8'), '/* iso-palette:start */', '/* iso-palette:end */', classes.join('\n') + '\n'));

/* 설계서 표 */
const table = [
  '| 토큰 | 해 질 녘 | 밤 | 쓰는 곳 |',
  '|---|---|---|---|',
  ...rows.map((r) => `| \`--iso-${r.name}\` | \`${r.dusk}\` | \`${r.night}\`${r.night === r.dusk ? '(같음)' : ''} | ${r.use} |`),
].join('\n');
const docPath = join(ROOT, 'docs/ui/city-night-iso.md');
writeFileSync(docPath, replaceBetween(readFileSync(docPath, 'utf8'), '<!-- iso-palette:start -->', '<!-- iso-palette:end -->', table + '\n'));

console.log(`그림 색 토큰 ${rows.length}개 · 재질 클래스 ${classes.length}개`);
