#!/usr/bin/env node
/*
 * 저장소 파일만 읽는 결정적 점검(브라우저 없음). 걸린 것이 있으면 위치(파일:줄)를 찍고 종료 코드 1.
 *
 *   node tools/check-static.mjs              # 점검
 *   node tools/check-static.mjs --allowed    # 허용 목록에 걸려 넘어간 것도 보여 준다
 *
 * 점검 항목(규칙 ID 는 ui-design-wiki 의 static-checks.md 와 같게 쓴다)
 *   PUB          공개 금지 정보 — 로컬 경로, 루프백 주소, 사설 IP, 내부 이름, 회사명. 모든 글자 파일
 *   SLOT         쓰기 훅이 남긴 *.slotfix.* 사본
 *   WRT-FMT-01   한글 수량 표기("두 곳" → "2곳")
 *   WRT-FMT-02   영문·숫자 뒤 조사 띄어쓰기("3D 로" → "3D로")
 *   W1 W2 W3 W9 W10 TRANS-ALL   토큰 밖 값 — hex, 색 함수, px, 숫자 z-index, !important, transition: all
 *   S1 ~ S10     AI 티 신호 — 그라데이션 글자, 보라 그라데이션, 이모지, 튀는 움직임, 한쪽 두꺼운 테두리,
 *                대문자 꼬리표, 화살표, 자리 채움 데이터, 유리 효과, 흔한 기본 글꼴
 *
 * 화면 파일(문구·토큰·AI 티 점검 대상)
 *   - 루트 index.html, samples.json 에 있는 샘플 폴더, shared/ 아래의 .html .js .mjs .css
 *   - vendor/ dist/ tools/ docs/ 와 *.min.js 는 뺀다(외부 코드·조립 결과·도구·문서)
 *   - 주석(HTML·JS·CSS)은 지우고 본다. 그래서 주석 속 "두 개"·"→" 는 걸리지 않는다
 *   - 토큰 밖 값(W*)은 이름에 tokens·theme 이 든 파일과 CSS 변수 선언 줄(--이름: 값)을 뺀다.
 *     그 둘이 토큰을 정의하는 자리다. @media·@container·matchMedia( 조건 줄의 px 도 뺀다(변수를 못 쓴다)
 *
 * 허용 목록(ALLOW)은 이 파일 아래에 둔다. 규칙·파일·줄 모양과 이유를 함께 적는다.
 */
import { existsSync, readdirSync, readFileSync, statSync, appendFileSync } from 'node:fs';
import { join, relative, resolve, sep, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const showAllowed = process.argv.includes('--allowed');
const samples = JSON.parse(readFileSync(join(root, 'samples.json'), 'utf8')).samples;

/* ---------- 허용 목록 ---------- */

const ALLOW = [
  { rule: 'PUB', file: /^docs\/platform\.md$/, line: /^- 로컬 경로\(/,
    why: '공개 저장소 규칙을 설명하는 문장이다' },
  { rule: 'PUB', file: /^tools\/check-pages\.mjs$/, line: /^const HOST = /,
    why: '점검용 임시 서버의 루프백 주소다. 배포하지 않는 도구 파일이다' },
  { rule: 'W3', file: /(^|\/)index\.html$/, line: /<source\b[^>]*\bmedia="[^"]*"/,
    why: '<source media> 는 미디어 조건이다. 미디어 조건에는 CSS 변수를 쓸 수 없다' },
  { rule: 'W1', file: /(^|\/)index\.html$/, line: /<meta name="theme-color" content="#[0-9a-fA-F]{3,8}">/,
    why: 'theme-color 는 브라우저 주소창 색이다. meta 에는 CSS 변수를 쓸 수 없다' },
  { rule: 'S8', file: /(^|\/)js\/data[\w-]*\.js$/, line: /[\w.+-]+@example\.(com|org|net)\b/i,
    why: '샘플의 가상 데이터는 데이터 파일 한 곳에만 둔다. example.com 은 예시용으로 예약된 도메인이다(DESIGN.md 「샘플 데이터」)' },
  { rule: 'S8', file: /\.html$/, line: /placeholder="[^"]*@example\.(com|org|net)[^"]*"/i,
    why: '이메일 입력 칸의 형식 예시다. 값이 아니라 안내다' },
];

/* ---------- 규칙 ---------- */

// 이 파일이 스스로 걸리지 않게 몇 글자를 [] 로 묶었다(s[y]cho 등).
const PUB = [
  ['로컬 경로', /\/Users\//],
  ['임시 경로', /\/private\/tmp/],
  ['루프백 주소', /\blocal[h]ost\b/i],
  ['루프백 주소', /\b127\.0\.0\.1\b/],
  ['사설 IP', /\b192\.168\.\d{1,3}\b/],
  ['사설 IP', /\b172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}\b/],
  ['사설 IP', /\b10\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/],
  ['내부 이름', /s[y]cho/i],
  ['회사명', /\bs[p]ectra\b/i], // 단어 경계 — preserveAspectRatio 는 걸리지 않는다
];

// 수량 — 앞 글자가 한글이면 낱말의 일부다("모두 개방"). "한 명소"·"한 장면"은 수량이 아니라 뺀다.
// 제스처 이름 "두 손가락"은 단위 목록에 '손'이 없어 걸리지 않는다.
const QTY = /(?<![가-힣])(한|두|세|네|다섯|여섯|일곱|여덟|아홉|열) ?(곳|개|명(?!소)|장(?!면)|층|척|대|가지|칸)/g;
// 조사 — 뒤 글자가 한글이면 조사가 아니라 낱말이다("3D 도시", "3D 가상").
const PARTICLE = /(?<![A-Za-z0-9])(3D|2D) (로|를|가|와|의|에서|는|도)(?![가-힣])/g;

const TOKEN_RULES = [
  // 앞 글자가 href="·url( 이면 색이 아니라 문서 안 위치(#add 등)다.
  ['W1', 'hex 색 — 토큰(CSS 변수)을 쓴다', /(?<=[:'"\s(,])(?<!(?:href|xlink:href)=["']?|url\(["']?)#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![\w-])/g], // 뒤에 - 나 글자가 오면 선택자(#acc-tz)다
  ['W2', '색 함수 리터럴 — 토큰을 쓴다', /\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\(/g],
  ['W3', 'px 리터럴 — 토큰을 쓴다', /\b\d+(?:\.\d+)?px\b/g],
  ['W9', '숫자 z-index — 토큰을 쓴다', /z-index\s*:\s*-?[1-9]\d*/g],
  ['W10', '!important', /!important/g],
  ['TRANS-ALL', 'transition: all — 바뀌는 속성만 적는다', /transition(?:-property)?\s*:\s*all\b/g],
];

const OVERUSED_FONTS = /^(Inter|Roboto|Geist|Space Grotesk|Plus Jakarta Sans|Fraunces)$/i;
const AI_RULES = [
  ['S1', '그라데이션 글자', /bg-clip-text|(?:-webkit-)?background-clip\s*:\s*text/g],
  ['S2', '보라·남보라 그라데이션', /\b(?:from|via|to)-(?:purple|violet|indigo|fuchsia|pink)-\d/g],
  ['S3', '이모지', /\p{Emoji_Presentation}|\p{Extended_Pictographic}️/gu],
  ['S4', '튀는·깜빡이는 움직임', /animate-(?:bounce|pulse|ping)|@keyframes\s+[\w-]*(?:bounce|pulse|ping|blink)/g],
  ['S5', '카드 한쪽 두꺼운 색 테두리', /border-l-(?:[2-9]|\[)|border-(?:left|inline-start)(?:-width)?\s*:\s*(?:[2-9]|\d{2,})px/g],
  ['S6', '대문자 꼬리표', /uppercase.*tracking-|text-transform\s*:\s*uppercase/g],
  ['S7', '화살표 장식', /→|&rarr;/g],
  ['S8', '자리 채움·지어낸 데이터', /lorem|ipsum|john doe|홍길동|010-?1234-?5678|example\.com/gi],
  ['S9', '유리·빛 번짐 효과', /backdrop-blur|backdrop-filter|shadow-\[0_0_/g],
];

/* ---------- 파일 목록 ---------- */

const SKIP_DIRS = new Set(['.git', '.docs', 'node_modules', '_site', '_check']);
const BINARY = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.avif', '.woff', '.woff2', '.ttf', '.otf',
  '.eot', '.pdf', '.zip', '.gz', '.br', '.mp4', '.webm', '.mp3', '.glb', '.bin', '.ktx2']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name) || name === '.DS_Store') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const rel = (p) => relative(root, p).split(sep).join('/');
const all = walk(root).map(rel).sort();

const screenRoots = new Set(['shared', ...samples.map((s) => s.slug)]);
const isScreenFile = (f) => {
  if (!/\.(html|js|mjs|css)$/.test(f) || f.endsWith('.min.js')) return false;
  if (f === 'index.html') return true;
  const parts = f.split('/');
  if (!screenRoots.has(parts[0])) return false;
  return !parts.slice(1, -1).some((p) => ['vendor', 'dist', 'tools', 'docs', 'node_modules'].includes(p));
};
const isTokenFile = (f) => /tokens|theme/i.test(basename(f));

/* ---------- 주석 지우기(줄 번호를 지키려고 줄바꿈은 남긴다) ---------- */

const blankOut = (s) => s.replace(/[^\n]/g, ' ');

function stripJs(src) {
  const out = src.split('');
  const blank = (a, b) => { for (let k = a; k < b; k++) if (out[k] !== '\n') out[k] = ' '; };
  const n = src.length;
  const tpl = []; // 템플릿 문자열 ${ } 안에 들어갈 때 바깥 중괄호 깊이를 쌓는다
  let depth = 0;
  let prev = '';
  let word = '';
  let i = 0;
  const KEYWORDS = /^(return|typeof|case|do|else|in|of|new|delete|void|throw|yield|await|instanceof)$/;
  const regexAllowed = () => {
    if (!prev) return true;
    if (/[\w$]/.test(prev)) return KEYWORDS.test(word);
    return !/[)\]}'"`]/.test(prev);
  };
  const scanTemplate = () => {
    while (i < n) {
      const c = src[i];
      if (c === '\\') { i += 2; continue; }
      if (c === '`') { i++; return false; }
      if (c === '$' && src[i + 1] === '{') { i += 2; return true; }
      i++;
    }
    return false;
  };
  const afterTemplate = (inExpr) => {
    if (inExpr) { tpl.push(depth); depth = 0; prev = '{'; } else prev = '`';
    word = '';
  };
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === '/' && d === '/') {
      const e = src.indexOf('\n', i);
      const end = e < 0 ? n : e;
      blank(i, end); i = end; continue;
    }
    if (c === '/' && d === '*') {
      const e = src.indexOf('*/', i + 2);
      const end = e < 0 ? n : e + 2;
      blank(i, end); i = end; continue;
    }
    if (c === '"' || c === "'") {
      i++;
      while (i < n && src[i] !== c && src[i] !== '\n') { if (src[i] === '\\') i++; i++; }
      i++; prev = c; word = ''; continue;
    }
    if (c === '`') { i++; afterTemplate(scanTemplate()); continue; }
    if (c === '{') { depth++; prev = c; word = ''; i++; continue; }
    if (c === '}') {
      i++;
      if (depth === 0 && tpl.length) { depth = tpl.pop(); afterTemplate(scanTemplate()); continue; }
      depth--; prev = c; word = ''; continue;
    }
    if (c === '/' && regexAllowed()) {
      i++;
      let cls = false;
      while (i < n && src[i] !== '\n') {
        const ch = src[i];
        if (ch === '\\') { i += 2; continue; }
        if (ch === '[') cls = true;
        else if (ch === ']') cls = false;
        else if (ch === '/' && !cls) break;
        i++;
      }
      i++;
      while (i < n && /[a-z]/i.test(src[i])) i++;
      prev = ')'; word = ''; continue;
    }
    if (/\s/.test(c)) { i++; continue; }
    if (/[\w$]/.test(c)) {
      let j = i;
      while (j < n && /[\w$]/.test(src[j])) j++;
      word = src.slice(i, j); prev = src[j - 1]; i = j; continue;
    }
    prev = c; word = ''; i++;
  }
  return out.join('');
}

const stripCss = (src) => src.replace(/\/\*[\s\S]*?\*\//g, blankOut);

function stripHtml(src) {
  let s = src.replace(/<!--[\s\S]*?-->/g, blankOut);
  s = s.replace(/(<script\b([^>]*)>)([\s\S]*?)(<\/script>)/gi, (m, open, attrs, body, close) => {
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    const js = !type || /^(module|text\/javascript|application\/javascript)$/.test(type);
    return open + (js ? stripJs(body) : body) + close;
  });
  s = s.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/gi, (m, open, body, close) => open + stripCss(body) + close);
  return s;
}

function stripComments(file, src) {
  if (file.endsWith('.html')) return stripHtml(src);
  if (file.endsWith('.css')) return stripCss(src);
  return stripJs(src);
}

/* ---------- 점검 ---------- */

const hits = [];
const allowed = [];
const excerpt = (line, at) => {
  const a = Math.max(0, at - 40);
  return (a > 0 ? '…' : '') + line.slice(a, at + 60).trim() + (at + 60 < line.length ? '…' : '');
};
function add(rule, msg, file, lineNo, rawLine, at) {
  const rec = { rule, msg, file, line: lineNo, text: excerpt(rawLine, at) };
  const allow = ALLOW.find((a) => a.rule === rule && a.file.test(file) && a.line.test(rawLine.trim()));
  if (allow) allowed.push({ ...rec, why: allow.why });
  else hits.push(rec);
}
function scan(file, rule, msg, re, lines, rawLines, skipLine) {
  lines.forEach((line, k) => {
    if (skipLine?.(line)) return;
    re.lastIndex = 0;
    for (const m of line.matchAll(re)) add(rule, msg, file, k + 1, rawLines[k], m.index);
  });
}

for (const file of all) {
  const name = basename(file);
  if (name.includes('.slotfix.')) add('SLOT', '쓰기 훅이 남긴 사본 — 지운다', file, 0, '', 0);
  if (BINARY.has(extname(file).toLowerCase())) continue;
  const buf = readFileSync(join(root, file));
  if (buf.subarray(0, 8000).includes(0)) continue; // 글자 파일이 아니다
  const text = buf.toString('utf8');
  const rawLines = text.split('\n');

  for (const [what, re] of PUB) {
    scan(file, 'PUB', `공개 금지 정보(${what})`, new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'), rawLines, rawLines);
  }

  if (!isScreenFile(file)) continue;
  const lines = stripComments(file, text).split('\n');
  scan(file, 'WRT-FMT-01', '수량은 아라비아 숫자로 쓴다("명소 5곳")', QTY, lines, rawLines);
  scan(file, 'WRT-FMT-02', '영문·숫자 뒤 조사는 붙여 쓴다("3D로")', PARTICLE, lines, rawLines);

  if (!isTokenFile(file)) {
    const tokenDecl = (l) => /^\s*--[\w-]+\s*:/.test(l);
    for (const [rule, msg, re] of TOKEN_RULES) {
      // 미디어 조건(CSS @media·@container, JS matchMedia)에는 CSS 변수를 쓸 수 없어 px 를 뺀다.
      const skip = rule === 'W3' ? (l) => tokenDecl(l) || /@(custom-)?media|@container|matchMedia\(/.test(l) : tokenDecl;
      scan(file, rule, msg, re, lines, rawLines, skip);
    }
  }
  for (const [rule, msg, re] of AI_RULES) scan(file, rule, msg, re, lines, rawLines);

  // S2 — 그라데이션 안의 보라 계열 색(이름·hex)
  lines.forEach((line, k) => {
    if (!/-gradient\(/.test(line)) return;
    const purple = /\b(purple|violet|indigo|fuchsia|magenta|orchid|plum|blueviolet|mediumpurple|rebeccapurple)\b/i.test(line)
      || [...line.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)].some((m) => isPurple(m[1]));
    if (purple) add('S2', '보라·남보라 그라데이션', file, k + 1, rawLines[k], line.indexOf('-gradient('));
  });
  // S10 — 글꼴 목록 첫 자리가 흔한 기본 글꼴(앞에 한글 글꼴이 있으면 괜찮다)
  lines.forEach((line, k) => {
    const m = /(?:font-family|--[\w-]*font[\w-]*)\s*:\s*([^;]+)/i.exec(line);
    if (!m) return;
    const first = m[1].split(',')[0].trim().replace(/^['"]|['"]$/g, '');
    if (OVERUSED_FONTS.test(first)) add('S10', `흔한 기본 글꼴이 첫 자리(${first})`, file, k + 1, rawLines[k], m.index);
  });
}

function isPurple(hex) {
  const h = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, c = max - min;
  if (c === 0) return false;
  const s = c / (1 - Math.abs(2 * l - 1));
  let hue = max === r ? ((g - b) / c) % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4;
  hue = (hue * 60 + 360) % 360;
  return hue >= 250 && hue <= 310 && s >= 0.35 && l >= 0.2 && l <= 0.8;
}

/* ---------- 보고 ---------- */

const RULE_ORDER = ['PUB', 'SLOT', 'WRT-FMT-01', 'WRT-FMT-02', 'W1', 'W2', 'W3', 'W9', 'W10', 'TRANS-ALL',
  'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10'];
const count = (list, r) => list.filter((h) => h.rule === r).length;
const loc = (h) => (h.line ? `${h.file}:${h.line}` : h.file);

for (const h of hits) console.log(`${loc(h)}: [${h.rule}] ${h.msg} — ${h.text}`);
if (showAllowed) for (const a of allowed) console.log(`(허용) ${loc(a)}: [${a.rule}] ${a.why} — ${a.text}`);

const screenCount = all.filter(isScreenFile).length;
const summary = RULE_ORDER.map((r) => `${r} ${count(hits, r)}`).join(' · ');
console.log(`\n정적 점검: 파일 ${all.length}개(화면 파일 ${screenCount}개) · 걸림 ${hits.length}건 · 허용 ${allowed.length}건`);
console.log(summary);

if (process.env.GITHUB_STEP_SUMMARY) {
  const rows = RULE_ORDER.map((r) => `| ${r} | ${count(hits, r)} | ${count(allowed, r)} |`);
  const list = hits.slice(0, 50).map((h) => `- \`${loc(h)}\` [${h.rule}] ${h.msg}`);
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, [
    `## 정적 점검 — ${hits.length ? `걸림 ${hits.length}건` : '통과'}`, '',
    '| 규칙 | 걸림 | 허용 |', '|---|---|---|', ...rows, '',
    ...(list.length ? [...list, hits.length > 50 ? `- … 그 밖 ${hits.length - 50}건` : '', ''] : []),
  ].join('\n') + '\n');
}

process.exit(hits.length ? 1 : 0);
