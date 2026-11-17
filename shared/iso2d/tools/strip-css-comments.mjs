#!/usr/bin/env node
/*
 * 조립된 샘플 폴더(_site/<slug>/)의 css/*.css 에서 주석을 지운다. 2D 그림판 공용 도구 — kit: shared/iso2d
 *
 *   sample.config.json: { "build": ["node tools/strip-css-comments.mjs"] }   (tools/build-site.mjs 가 _site/<slug>/ 안에서 부른다)
 *
 * - 첫 방문 전송량(2D 예산 100KB)을 줄이려고 배포본에서만 지운다. 저장소의 css 는 주석을 그대로 둔다.
 * - 주석은 계산된 스타일에 영향이 없다. 화면은 바뀌지 않는다.
 * - 따옴표 문자열 안의 '/*' 는 주석이 아니다. 앞뒤가 공백 없이 붙은 주석(선택자·값 한가운데)은 지우면 뜻이 바뀔 수 있어 멈춘다.
 * - JS 는 지우지 않는다(정규식·문자열 안의 '/' 를 가리려면 문법 분석이 필요하다).
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'css');

function strip(name, src) {
  let out = '';
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      let j = i + 1;
      while (j < src.length && src[j] !== ch) j += src[j] === '\\' ? 2 : 1;
      out += src.slice(i, j + 1);
      i = j + 1;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      if (end < 0) throw new Error(`${name}: 닫히지 않은 주석`);
      const before = out.slice(-1);
      const after = src[end + 2] || '';
      if (before && after && !/\s/.test(before) && !/\s/.test(after)) {
        throw new Error(`${name}: 앞뒤가 붙은 주석 — 지우면 뜻이 바뀔 수 있다(${src.slice(i, i + 40)})`);
      }
      i = end + 2;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '');
}

let before = 0;
let after = 0;
for (const name of readdirSync(dir).filter((n) => n.endsWith('.css')).sort()) {
  const path = join(dir, name);
  const src = readFileSync(path, 'utf8');
  const out = strip(name, src);
  writeFileSync(path, out);
  before += Buffer.byteLength(src);
  after += Buffer.byteLength(out);
}
console.log(`css 주석을 지웠다: ${before} → ${after} 바이트`);
