#!/usr/bin/env node
/*
 * 조립된 샘플 폴더(_site/<slug>/)의 업무 화면 kit 파일에서 주석을 지운다 — kit: shared/app
 *
 *   node tools/strip-comments.mjs            # 조립된 샘플 폴더 안에서. shared/app/kit.config.json 의 build 가 부른다
 *   node tools/strip-comments.mjs <파일>…    # 다른 파일을 지정한다(조립된 폴더 기준 경로)
 *
 * - 첫 방문 전송량(업무 화면 예산 150KB)을 줄이려고 배포본에서만 지운다. 저장소 shared/app/ 의 주석은 그대로 둔다.
 * - 대상은 kit 파일 4개(css/tokens.css · base.css · components.css · js/ds.js)뿐이다. 샘플 고유 파일(page.css·page.js)은 건드리지 않는다.
 * - 줄바꿈·들여쓰기는 그대로 두고 주석과 주석만 있던 줄, 빈 줄만 뺀다 — 배포본도 읽을 수 있다.
 * - CSS: 따옴표 문자열 안의 '/*' 는 주석이 아니다. 앞뒤가 붙은 주석은 지우면 낱말이 붙으므로 빈칸으로 바꾼다.
 * - JS: 문자열·템플릿 문자열·정규식 안의 '//'·'/*' 는 건드리지 않는다. 줄바꿈이 든 블록 주석은 줄바꿈으로 바꾼다(세미콜론 자동 삽입이 같다).
 *   정규식과 나눗셈은 앞 낱말로 가른다(괄호·연산자·return 등 뒤면 정규식). 판단할 수 없는 꼴이면 멈춘다.
 * - 필요한 것: node 만(설치하는 패키지 없음).
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const KIT_FILES = ['css/tokens.css', 'css/base.css', 'css/components.css', 'js/ds.js'];

const isSpace = (ch) => ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r';

/* 줄 단위로 모은다 — 빈 줄은 버리고 줄 끝 빈칸을 지운다. 템플릿 문자열 안의 줄바꿈은 그대로 둔다 */
function lineWriter() {
  const lines = [];
  let cur = '';
  return {
    add(text) { cur += text; },
    newline() {
      const line = cur.replace(/[ \t]+$/, '');
      if (line.trim()) lines.push(line);
      cur = '';
    },
    last() { return cur.slice(-1); },
    done() {
      this.newline();
      return lines.join('\n') + '\n';
    },
  };
}

function stripCss(name, src) {
  const w = lineWriter();
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      let j = i + 1;
      while (j < src.length && src[j] !== ch) j += src[j] === '\\' ? 2 : 1;
      w.add(src.slice(i, j + 1));
      i = j + 1;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      if (end < 0) throw new Error(`${name}: 닫히지 않은 주석`);
      const before = w.last();
      const after = src[end + 2] || '';
      if (before && after && !isSpace(before) && !isSpace(after)) w.add(' ');
      i = end + 2;
      continue;
    }
    if (ch === '\n') w.newline();
    else if (ch !== '\r') w.add(ch);
    i += 1;
  }
  return w.done();
}

const REGEX_AFTER = new Set(['', '(', ',', '=', ':', '[', '!', '&', '|', '?', '{', '}', ';', '+', '-', '*', '%', '<', '>', '~', '^']);
const REGEX_AFTER_WORD = new Set(['return', 'typeof', 'case', 'do', 'else', 'in', 'of', 'new', 'delete', 'void', 'throw', 'instanceof', 'yield', 'await']);
const isWordChar = (ch) => /[\w$]/.test(ch) || ch > '\x7f';

function stripJs(name, src) {
  const w = lineWriter();
  let i = 0;
  let last = ''; // 마지막 의미 있는 낱말(정규식·나눗셈 가르기)
  const stack = []; // 템플릿 문자열 ${ … } 안의 괄호
  const fail = (why) => { throw new Error(`${name}:${src.slice(0, i).split('\n').length}: ${why}`); };

  function readQuoted(q) {
    let j = i + 1;
    while (j < src.length && src[j] !== q) {
      if (src[j] === '\n') fail('닫히지 않은 문자열');
      j += src[j] === '\\' ? 2 : 1;
    }
    w.add(src.slice(i, j + 1));
    i = j + 1;
    last = 'lit';
  }

  // 템플릿 문자열 — 끝(`)이나 ${ 까지. ${ 면 코드로 돌아가 짝 } 에서 다시 이어 읽는다
  function readTemplate() {
    let j = i;
    while (j < src.length) {
      if (src[j] === '\\') { j += 2; continue; }
      if (src[j] === '`') { w.add(src.slice(i, j + 1)); i = j + 1; last = 'lit'; return; }
      if (src[j] === '$' && src[j + 1] === '{') { w.add(src.slice(i, j + 2)); i = j + 2; stack.push('tpl'); last = '{'; return; }
      j += 1;
    }
    fail('닫히지 않은 템플릿 문자열');
  }

  function readRegex() {
    let j = i + 1;
    let inClass = false;
    while (j < src.length) {
      const ch = src[j];
      if (ch === '\n') fail('닫히지 않은 정규식');
      if (ch === '\\') { j += 2; continue; }
      if (ch === '[') inClass = true;
      else if (ch === ']') inClass = false;
      else if (ch === '/' && !inClass) break;
      j += 1;
    }
    j += 1;
    while (j < src.length && /[a-z]/i.test(src[j])) j += 1;
    w.add(src.slice(i, j));
    i = j;
    last = 'lit';
  }

  while (i < src.length) {
    const ch = src[i];
    const next = src[i + 1];
    if (ch === '/' && next === '/') {
      const end = src.indexOf('\n', i);
      i = end < 0 ? src.length : end;
      continue;
    }
    if (ch === '/' && next === '*') {
      const end = src.indexOf('*/', i + 2);
      if (end < 0) fail('닫히지 않은 주석');
      if (src.slice(i, end).includes('\n')) w.newline();
      else if (w.last() && !isSpace(w.last()) && src[end + 2] && !isSpace(src[end + 2])) w.add(' ');
      i = end + 2;
      continue;
    }
    if (ch === '"' || ch === "'") { readQuoted(ch); continue; }
    if (ch === '`') { readTemplate(); continue; }
    if (ch === '/') {
      if (REGEX_AFTER.has(last) || REGEX_AFTER_WORD.has(last)) readRegex();
      else { w.add(ch); i += 1; last = ch; }
      continue;
    }
    if (ch === '\n') { w.newline(); i += 1; continue; }
    if (ch === '\r' || ch === ' ' || ch === '\t') { if (ch !== '\r') w.add(ch); i += 1; continue; }
    if (isWordChar(ch)) {
      let j = i;
      while (j < src.length && isWordChar(src[j])) j += 1;
      last = src.slice(i, j);
      w.add(last);
      i = j;
      continue;
    }
    if (ch === '{') stack.push('{');
    if (ch === '}') {
      const top = stack.pop();
      if (top === 'tpl') { w.add('}'); i += 1; readTemplate(); continue; }
    }
    w.add(ch);
    last = ch;
    i += 1;
  }
  if (stack.length) fail('괄호 짝이 맞지 않는다');
  return w.done();
}

const files = process.argv.slice(2).length ? process.argv.slice(2) : KIT_FILES;
let before = 0;
let after = 0;
for (const rel of files) {
  const path = join(process.cwd(), rel);
  if (!existsSync(path)) continue;
  const src = readFileSync(path, 'utf8');
  const out = rel.endsWith('.js') ? stripJs(rel, src) : stripCss(rel, src);
  writeFileSync(path, out);
  before += Buffer.byteLength(src);
  after += Buffer.byteLength(out);
}
console.log(`kit 주석을 지웠다: ${before} → ${after} 바이트`);
