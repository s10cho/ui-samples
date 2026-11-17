#!/usr/bin/env node
/*
 * 목록 페이지(index.html)의 샘플 목록과 README 의 샘플 표를 samples.json 에서 다시 만든다.
 *
 *   node tools/build-gallery.mjs          # 파일을 고친다
 *   node tools/build-gallery.mjs --check  # 고칠 것이 있으면 종료 코드 1 (CI 용)
 *
 * index.html 은 </header> 와 <footer class="foot"> 사이를, README.md 는
 * <!-- samples:start --> 와 <!-- samples:end --> 사이를 바꾼다. 나머지는 손으로 고친다.
 * 썸네일은 assets/<slug>-day.webp(필수)와 assets/<slug>-night.webp(있으면 마우스 올림 때 보임)다.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const check = process.argv.includes('--check');
const data = JSON.parse(readFileSync(join(root, 'samples.json'), 'utf8'));
const G = data.repo;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const bySlug = Object.fromEntries(data.samples.map((s) => [s.slug, s]));

function card(s) {
  const alt = existsSync(join(root, 'assets', `${s.slug}-night.webp`));
  const out = [
    '        <li class="sample">',
    `          <a class="sample__thumb" href="${s.slug}/" tabindex="-1" aria-hidden="true">`,
    `            <img src="assets/${s.slug}-day.webp" width="960" height="600" alt="" loading="lazy">`,
  ];
  if (alt) out.push(`            <img class="is-alt" src="assets/${s.slug}-night.webp" width="960" height="600" alt="" loading="lazy">`);
  out.push(
    '          </a>',
    '          <div class="sample__body">',
    `            <h3 class="sample__name">${esc(s.name)}</h3>`,
    `            <p class="sample__desc">${s.desc.map((d) => `<span>${esc(d)}</span>`).join('')}</p>`,
    '            <dl class="facts">',
    `              <div><dt>전환</dt><dd>${esc(s.switch)}</dd></div>`,
  );
  if (s.pair && bySlug[s.pair]) {
    out.push(`              <div><dt>3D 판</dt><dd><a href="${s.pair}/">${esc(bySlug[s.pair].name)}</a></dd></div>`);
  }
  out.push(
    s.score
      ? `              <div><dt>검수</dt><dd><a href="${G}/blob/main/${s.slug}/${s.report}">독립 검수 ${esc(s.score)}점 · 합격</a></dd></div>`
      : '              <div><dt>검수</dt><dd>검수 중</dd></div>',
    '            </dl>',
    '            <div class="actions">',
    `              <a class="btn" href="${s.slug}/">샘플 열기</a>`,
    `              <a class="link" href="${G}/tree/main/${s.slug}">코드 보기</a>`,
    `              <a class="link" href="${G}/blob/main/${s.slug}/${s.spec}">화면 설계서</a>`,
    '            </div>',
    '          </div>',
    '        </li>',
  );
  return out.join('\n');
}

const blocks = [];
data.groups.forEach((g) => {
  const items = data.samples.filter((s) => s.group === g.id && !s.draft);
  if (!items.length) return;
  const id = `group-${g.id}`;
  blocks.push([
    `    <section class="group" aria-labelledby="${id}">`,
    '      <div class="group__head">',
    `        <h2 id="${id}">${esc(g.title)}</h2>`,
    `        <p>${g.lead.map(esc).join(' ')}</p>`,
    '      </div>',
    '      <ol class="samples">',
    items.map(card).join('\n'),
    '      </ol>',
    '    </section>',
  ].join('\n'));
});

const counts = data.groups
  .map((g) => [g.title, data.samples.filter((s) => s.group === g.id && !s.draft).length])
  .filter(([, n]) => n > 0)
  .map(([t, n]) => `${t} ${n}개`)
  .join(', ');

const changed = [];

// index.html
const indexPath = join(root, 'index.html');
let html = readFileSync(indexPath, 'utf8');
const hEnd = html.indexOf('</header>') + '</header>\n'.length;
const fStart = html.indexOf('    <footer class="foot">');
if (hEnd < 9 || fStart < 0) throw new Error('index.html 에서 </header> 또는 <footer class="foot"> 를 찾지 못했다');
let next = html.slice(0, hEnd) + blocks.join('\n') + '\n\n' + html.slice(fStart);
next = next.replace(/<meta name="description" content="[^"]*">/,
  `<meta name="description" content="정적 웹 페이지로 만든 화면 샘플 모음입니다. ${counts}가 있습니다.">`);
if (next !== html) { changed.push('index.html'); if (!check) writeFileSync(indexPath, next); }

// README.md
const readmePath = join(root, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const A = '<!-- samples:start -->', B = '<!-- samples:end -->';
if (readme.includes(A) && readme.includes(B)) {
  const rows = data.samples.filter((s) => !s.draft).map((s) => `| \`${s.slug}/\` | ${data.site}${s.slug}/ | ${s.name}. ${s.desc[0]} | ${s.score || '검수 중'} |`);
  const table = ['| 폴더 | 바로 보기 | 내용 | 검수 |', '|---|---|---|---|', ...rows].join('\n');
  const nextReadme = readme.slice(0, readme.indexOf(A) + A.length) + '\n' + table + '\n' + readme.slice(readme.indexOf(B));
  if (nextReadme !== readme) { changed.push('README.md'); if (!check) writeFileSync(readmePath, nextReadme); }
}

if (check && changed.length) {
  console.error(`samples.json 과 맞지 않는 파일: ${changed.join(', ')} — node tools/build-gallery.mjs 를 실행하세요`);
  process.exit(1);
}
console.log(changed.length ? `고침: ${changed.join(', ')}` : '바뀐 것 없음');
