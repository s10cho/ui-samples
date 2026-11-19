#!/usr/bin/env node
/*
 * 목록 페이지(index.html)의 샘플 목록과 README 의 샘플 표를 samples.json 에서 다시 만든다.
 *
 *   node tools/build-gallery.mjs          # 파일을 고친다
 *   node tools/build-gallery.mjs --check  # 고칠 것이 있으면 종료 코드 1 (CI 용)
 *
 * index.html 은 </header> 와 <footer class="foot"> 사이(도구 줄·계열 묶음), <!-- wall:… --> 사이(첫 화면 화면 벽),
 * <!-- facts:… --> 사이(요약 줄)를, README.md 는
 * <!-- samples:start --> 와 <!-- samples:end --> 사이를 바꾼다. 나머지는 손으로 고친다.
 * 썸네일은 assets/<slug>-day.webp(필수)와 assets/<slug>-night.webp(있으면 어둡게·마우스 올림 때 보임)다.
 * 화면 벽은 assets/wall/<slug>-<day|night>.webp(작은 그림, tools/make-wall-thumbs.mjs)를 쓰고, 없으면 큰 썸네일을 쓴다.
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

function card(s, i) {
  const alt = existsSync(join(root, 'assets', `${s.slug}-night.webp`));
  const out = [
    `        <li class="sample" style="--i: ${i}">`,
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
      ? `              <div><dt>검수</dt><dd><a href="${G}/blob/main/${s.slug}/${s.report}">독립 검수 ${esc(s.score)}점으로 합격</a></dd></div>`
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

// 계열 탭 — 공개 샘플이 있는 계열만. 링크 + 주소 해시(#group-<id>)라 스크립트가 없어도 그 계열로 이동한다(docs/ui/gallery-tabs.md)
const shown = data.groups
  .map((g) => ({ g, n: data.samples.filter((s) => s.group === g.id && !s.draft).length }))
  .filter((x) => x.n > 0);
const total = shown.reduce((a, x) => a + x.n, 0);
const tab = (href, id, title, n, current) =>
  `            <li><a href="${href}" data-group="${id}" data-title="${esc(title)}" data-count="${n}"${current ? ' aria-current="true"' : ''}>${esc(title)} <span class="tabs__n">${n}</span><span class="sr-only">개</span></a></li>`;
const blocks = [[
  '    <div class="bar-sentinel" aria-hidden="true"></div>',
  '    <div class="bar">',
  '      <div class="bar__in">',
  '        <nav class="tabs" id="tabs" aria-label="샘플 계열">',
  '          <ul>',
  tab('#tabs', '', '전체', total, true),
  ...shown.map((x) => tab(`#group-${x.g.id}`, x.g.id, x.g.title, x.n, false)),
  '          </ul>',
  '          <span class="tabs__bar" aria-hidden="true"></span>',
  '        </nav>',
  '        <div class="theme" role="group" aria-label="화면 색" hidden>',
  '          <button type="button" class="theme__btn" data-theme-value="light" aria-pressed="true">밝게</button>',
  '          <button type="button" class="theme__btn" data-theme-value="dark" aria-pressed="false">어둡게</button>',
  '          <span class="theme__thumb" aria-hidden="true"></span>',
  '        </div>',
  '      </div>',
  '    </div>',
  '    <p class="sr-only" id="tab-status" role="status"></p>',
].join('\n')];
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
    items.map((s, i) => card(s, i)).join('\n'),
    '      </ol>',
    '    </section>',
  ].join('\n'));
});

const counts = data.groups
  .map((g) => [g.title, data.samples.filter((s) => s.group === g.id && !s.draft).length])
  .filter(([, n]) => n > 0)
  .map(([t, n]) => `${t} ${n}개`)
  .join(', ');

// 첫 화면 화면 벽 — 공개 샘플 썸네일을 기둥 4개에 나눠 담는다. 낮·밤 그림을 번갈아 둔다. 장식이라 alt 를 비운다
const pub = data.samples.filter((s) => !s.draft);
const COLS = 4;
const cols = Array.from({ length: COLS }, () => []);
pub.forEach((s, i) => cols[i % COLS].push(s));
const wallImg = (s, k) => {
  const hasNight = existsSync(join(root, 'assets', `${s.slug}-night.webp`));
  const state = hasNight && k % 2 ? 'night' : 'day';
  const small = `assets/wall/${s.slug}-${state}.webp`;
  const src = existsSync(join(root, small)) ? small : `assets/${s.slug}-${state}.webp`;
  return `            <img src="${src}" width="480" height="300" alt="" decoding="async" fetchpriority="low">`;
};
const wall = [
  '<!-- wall:start -->',
  '      <div class="wall" aria-hidden="true">',
  '        <div class="wall__tilt">',
  ...cols.map((c, ci) => [
    `          <div class="wall__col" style="--c: ${ci}">`,
    ...c.map((s, k) => wallImg(s, k + ci)),
    '          </div>',
  ].join('\n')),
  '        </div>',
  '      </div>',
  '      <!-- wall:end -->',
].join('\n');
const avg = (pub.reduce((a, s) => a + (parseFloat(s.score) || 0), 0) / pub.length).toFixed(1).replace(/\.0$/, '');
const allPass = pub.every((s) => s.score);
const passed = pub.filter((s) => s.score).length;
const factText = allPass
  ? `샘플 ${pub.length}개가 모두 독립 검수에 합격했고, 평균 점수는 ${avg}점입니다.`
  : `샘플 ${pub.length}개 중 ${passed}개가 독립 검수에 합격했고, 평균 점수는 ${avg}점입니다.`;
const facts = `<!-- facts:start --><p class="hero__facts">${factText}</p><!-- facts:end -->`;

const changed = [];

// index.html
const indexPath = join(root, 'index.html');
let html = readFileSync(indexPath, 'utf8');
const hEnd = html.indexOf('</header>') + '</header>\n'.length;
const fStart = html.indexOf('    <footer class="foot">');
if (hEnd < 9 || fStart < 0) throw new Error('index.html 에서 </header> 또는 <footer class="foot"> 를 찾지 못했다');
let next = html.slice(0, hEnd) + blocks.join('\n') + '\n\n' + html.slice(fStart);
const swap = (str, a, b, body) => {
  const i = str.indexOf(a), j = str.indexOf(b);
  if (i < 0 || j < 0) throw new Error(`index.html 에서 ${a} 를 찾지 못했다`);
  return str.slice(0, i) + body + str.slice(j + b.length);
};
next = swap(next, '<!-- wall:start -->', '<!-- wall:end -->', wall);
next = swap(next, '<!-- facts:start -->', '<!-- facts:end -->', facts);
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
