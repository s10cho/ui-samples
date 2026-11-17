#!/usr/bin/env node
/*
 * 조립된 _site/ 를 임시 정적 서버로 띄우고 헤드리스 Chromium(Playwright)으로 화면마다 잰다.
 *
 *   node tools/check-pages.mjs                         # _site/ 전체
 *   node tools/check-pages.mjs --only city-night,index # 샘플 몇 개만(index = 목록 페이지)
 *   node tools/check-pages.mjs --site <dir> --out <dir> --jobs 2 --axe report
 *
 * 대상: 목록 페이지 + samples.json 의 모든 샘플
 *   - 폭: desktop 1280×800, mobile 375×812(터치·모바일, 픽셀 배율 2)
 *   - 상태: <slug>/sample.config.json 의 states 배열(없으면 ["", "?motion=off"]). 목록 페이지는 [""]
 *   - 3D 샘플(<html data-mode>)은 data-mode 가 ready 가 될 때까지 기다린다.
 *     ?state=nowebgl·noscript 이면 fallback, ?state=lost 이면 lost 를 기다린다.
 *
 * 실패 조건(하나라도 있으면 종료 코드 1)
 *   - 콘솔 error·잡히지 않은 예외
 *   - 400 이상 응답(파비콘 포함), 실패한 요청(중단된 요청은 뺀다)
 *   - 가로 넘침(documentElement.scrollWidth > clientWidth)
 *   - 3D 상태가 기대와 다르거나 시간 안에 오지 않음
 *   - 첫 방문 전송량 예산 초과 — states 의 첫 상태에서만 판정한다(빈 캐시로 연다)
 *     예산: 샘플 설정 budgetKB > 묶음 기본값(3d 300 · 2d 100 · 그 밖 300). KB = 1,024바이트
 *     목록 페이지는 재기만 하고 판정하지 않는다
 *     전송량 = 응답 본문(압축된 크기) + 응답 헤더. 서버는 GitHub Pages 처럼 글자 파일을 gzip 으로 보낸다
 *   - axe-core 의 critical·serious 위반(WCAG 2.x A·AA) — --axe report 면 세기만 한다
 *   - 목록 페이지 링크: 사이트 안 링크는 상태 코드, 이 저장소의 GitHub 링크는 저장소 파일이 있는지
 *
 * 결과: <out>/report.md · <out>/report.json · <out>/shots/<화면>/<폭>-<상태>.png
 * GitHub Actions 에서는 report.md 를 실행 요약(GITHUB_STEP_SUMMARY)에도 붙인다.
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync, appendFileSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync, constants as zc } from 'node:zlib';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};
const site = resolve(arg('--site', join(root, '_site')));
const out = resolve(arg('--out', join(root, '_check')));
const only = arg('--only') ? new Set(arg('--only').split(',')) : null;
const jobs = Math.max(1, Number(arg('--jobs', process.env.CHECK_JOBS || 2)));
const axeMode = arg('--axe', 'fail'); // fail | report
const data = JSON.parse(readFileSync(join(root, 'samples.json'), 'utf8'));

const HOST = '127.0.0.1';
const NAV_TIMEOUT = 60_000;
const MODE_TIMEOUT = 150_000; // CI 의 Chromium 은 GPU 없이(SwiftShader) 그려 느리다
const DEFAULT_STATES = ['', '?motion=off'];
const BUDGET_KB = { '3d': 300, '2d': 100 };
const OTHER_BUDGET_KB = 300;
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const VIEWPORTS = [
  { name: 'desktop', options: { viewport: { width: 1280, height: 800 } } },
  { name: 'mobile', options: { viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true } },
];

if (!existsSync(join(site, 'index.html'))) {
  console.error(`조립된 사이트가 없다: ${site} — node tools/build-site.mjs 를 먼저 실행하세요`);
  process.exit(1);
}

/* ---------- 임시 정적 서버(GitHub Pages 흉내: 하위 경로, 폴더 → index.html, 글자 파일 gzip) ---------- */

const basePath = new URL(data.site).pathname.replace(/\/?$/, '/'); // 예: /ui-samples/
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.xml': 'application/xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.glb': 'model/gltf-binary', '.bin': 'application/octet-stream', '.wasm': 'application/wasm',
};
const GZIP = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.txt', '.md', '.xml']);
const gzCache = new Map();

function serve(req, res) {
  let path;
  try { path = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { path = ''; }
  const send = (status, body, headers = {}) => {
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
    res.end(req.method === 'HEAD' ? undefined : body);
  };
  if (`${path}/` === basePath) return send(301, '', { Location: basePath });
  if (!path.startsWith(basePath)) return send(404, 'not found');
  const file = resolve(site, path.slice(basePath.length));
  if (file !== site && !file.startsWith(site + sep)) return send(404, 'not found');
  let target = file;
  if (existsSync(target) && statSync(target).isDirectory()) {
    if (!path.endsWith('/')) return send(301, '', { Location: `${path}/` });
    target = join(target, 'index.html');
  }
  if (!existsSync(target) || !statSync(target).isFile()) return send(404, 'not found');
  const ext = extname(target).toLowerCase();
  const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'max-age=600' };
  if (GZIP.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
    const key = `${target}:${statSync(target).mtimeMs}`;
    if (!gzCache.has(key)) gzCache.set(key, gzipSync(readFileSync(target), { level: zc.Z_BEST_COMPRESSION }));
    const body = gzCache.get(key);
    res.writeHead(200, { ...headers, 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding', 'Content-Length': body.length });
    return res.end(req.method === 'HEAD' ? undefined : body);
  }
  res.writeHead(200, { ...headers, 'Content-Length': statSync(target).size });
  if (req.method === 'HEAD') return res.end();
  createReadStream(target).pipe(res);
}

/* ---------- 할 일 목록 ---------- */

const repo = data.repo.replace(/\/$/, '');
const configOf = (base) => {
  const p = join(root, base.slug, 'sample.config.json');
  return existsSync(p) ? { ...base, ...JSON.parse(readFileSync(p, 'utf8')) } : base;
};
const normState = (s) => (!s ? '' : s.startsWith('?') ? s : `?${s}`);
const stateLabel = (s) => (s ? s.slice(1).replace(/[^\w=-]+/g, '_').replace(/=/g, '-') : 'default');
const expectedMode = (s) => {
  const v = new URLSearchParams(s).get('state');
  return v === 'nowebgl' || v === 'noscript' ? 'fallback' : v === 'lost' ? 'lost' : 'ready';
};

const targets = [];
if (!only || only.has('index')) {
  // 목록 페이지는 샘플이 늘면 썸네일 수만큼 전송량이 는다. 예산을 정하기 전까지는 재기만 한다(budgetKB null).
  targets.push({ id: 'index', name: '(목록)', path: '', states: [''], budgetKB: null, isIndex: true });
}
for (const base of data.samples) {
  if (only && !only.has(base.slug)) continue;
  if (base.draft && !only) continue; // 초안(검수 전)은 --only 로 이름을 줄 때만 잰다
  const s = configOf(base);
  const states = (Array.isArray(s.states) && s.states.length ? s.states : DEFAULT_STATES).map(normState);
  targets.push({
    id: s.slug, name: s.slug, path: `${s.slug}/`, states,
    budgetKB: Number(s.budgetKB) || BUDGET_KB[s.group] || OTHER_BUDGET_KB,
  });
}
const tasks = [];
for (const t of targets) {
  for (const vp of VIEWPORTS) t.states.forEach((state, i) => tasks.push({ t, vp, state, first: i === 0 }));
}

/* ---------- 화면 하나 재기 ---------- */

// 실행마다 브라우저를 새로 띄운다. 한 화면에서 GPU 프로세스가 망가져도(캡처 실패 등) 다음 화면의 WebGL 에 번지지 않는다.
// 헤드리스 셸만 쓴다(창을 띄우지 않는다). GPU 가 있는 컴퓨터에서도 CI 와 같은 SwiftShader 로 그린다.
async function measure(origin, task) {
  const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  try {
    return await measureIn(browser, origin, task);
  } finally {
    await browser.close();
  }
}

async function measureIn(browser, origin, task) {
  const { t, vp, state, first } = task;
  const url = `${origin}${basePath}${t.path}${state}`;
  const r = {
    page: t.name, viewport: vp.name, state: state || '(기본)', url: `${basePath}${t.path}${state}`,
    failures: [], consoleErrors: [], badResponses: [], failedRequests: [],
    mode: null, overflow: null, transfer: null, axe: null, shot: null, ms: 0,
  };
  const t0 = Date.now();
  const context = await browser.newContext({ ...vp.options, locale: 'ko-KR', timezoneId: 'Asia/Seoul', colorScheme: 'light' });
  const page = await context.newPage();
  const finished = [];
  page.on('console', (m) => {
    if (m.type() !== 'error') return;
    const loc = m.location();
    r.consoleErrors.push(`${m.text()}${loc?.url ? ` (${loc.url.replace(origin, '')}:${loc.lineNumber})` : ''}`);
  });
  page.on('pageerror', (e) => r.consoleErrors.push(`잡히지 않은 예외: ${e.message}`));
  page.on('response', (res) => {
    if (res.status() >= 400) r.badResponses.push({ url: res.url().replace(origin, ''), status: res.status() });
  });
  page.on('requestfailed', (req) => {
    const why = req.failure()?.errorText || '';
    if (!/ERR_ABORTED/.test(why)) r.failedRequests.push({ url: req.url().replace(origin, ''), error: why });
  });
  page.on('requestfinished', (req) => finished.push(req));

  try {
    await page.goto(url, { waitUntil: 'load', timeout: NAV_TIMEOUT });

    // 3D 샘플 — data-mode 가 기대한 값이 될 때까지
    const hasMode = await page.evaluate(() => document.documentElement.hasAttribute('data-mode'));
    if (hasMode) {
      const expected = expectedMode(state);
      let timedOut = false;
      await page.waitForFunction((exp) => {
        const m = document.documentElement.dataset.mode;
        if (m === exp) return true;
        if (!m || m === 'loading') return false;
        return !(exp === 'lost' && m === 'ready'); // lost 는 ready 를 거쳐 온다
      }, expected, { timeout: MODE_TIMEOUT, polling: 250 }).catch(() => { timedOut = true; });
      const actual = await page.evaluate(() => document.documentElement.dataset.mode);
      r.mode = { expected, actual, ms: Date.now() - t0 };
      if (timedOut) r.failures.push(`3D 상태가 ${MODE_TIMEOUT / 1000}초 안에 ${expected} 가 되지 않았다(지금 ${actual})`);
      else if (actual !== expected) {
        const gl = await page.evaluate(() => Boolean(document.createElement('canvas').getContext('webgl2')));
        r.failures.push(`3D 상태가 ${expected} 가 아니라 ${actual}${gl ? '' : ' — 이 브라우저에서 WebGL2 를 만들 수 없다(GPU 프로세스 문제)'}`);
      }
      r.modeTimedOut = timedOut;
    }

    // 늦게 받는 파일(다이나믹 서브셋 글꼴 등)과 포스터 → 장면 전환을 기다린다
    await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
    await page.evaluate(() => document.fonts.ready.then(() => true));
    await page.waitForTimeout(hasMode ? 1500 : 500);

    // 전송량 — 지금까지 끝난 요청의 응답 본문(압축 크기) + 헤더
    let body = 0, headers = 0, count = 0;
    for (const req of finished.slice()) {
      if (req.url().startsWith('data:')) continue;
      const sz = await req.sizes().catch(() => null);
      if (!sz) continue;
      body += sz.responseBodySize; headers += sz.responseHeadersSize; count++;
    }
    const total = body + headers;
    r.transfer = { requests: count, body, headers, total, budgetKB: t.budgetKB, judged: first && Boolean(t.budgetKB) };
    if (r.transfer.judged && total > t.budgetKB * 1024) {
      r.failures.push(`첫 방문 전송량 ${(total / 1024).toFixed(1)}KB 가 예산 ${t.budgetKB}KB 를 넘는다`);
    }

    // 파비콘 — 링크가 없으면 브라우저가 /favicon.ico 를 받는다
    const icon = await page.evaluate(() => {
      const l = document.querySelector('link[rel~="icon"]');
      return l ? l.href : new URL('/favicon.ico', location.href).href;
    });
    if (!icon.startsWith('data:')) {
      const res = await context.request.get(icon).catch(() => null);
      const status = res ? res.status() : 0;
      if (status === 0 || status >= 400) r.badResponses.push({ url: `${icon.replace(origin, '')}(파비콘)`, status });
    }

    // 가로 넘침
    r.overflow = await page.evaluate(() => {
      const de = document.documentElement;
      const sw = de.scrollWidth, cw = de.clientWidth;
      const offenders = [];
      if (sw > cw) {
        for (const el of document.body.querySelectorAll('*')) {
          const b = el.getBoundingClientRect();
          if (b.width > 0 && b.right > cw + 0.5) {
            const cls = typeof el.className === 'string' && el.className.trim() ? `.${el.className.trim().split(/\s+/).join('.')}` : '';
            offenders.push(`${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}${cls} 오른쪽 ${Math.round(b.right)}px`);
            if (offenders.length >= 5) break;
          }
        }
      }
      return { scrollWidth: sw, clientWidth: cw, offenders };
    });
    if (r.overflow.scrollWidth > r.overflow.clientWidth) {
      r.failures.push(`가로 넘침 scrollWidth ${r.overflow.scrollWidth} > clientWidth ${r.overflow.clientWidth}`);
    }

    // 화면
    const dir = join(out, 'shots', t.id);
    mkdirSync(dir, { recursive: true });
    const shot = join(dir, `${vp.name}-${stateLabel(state)}.png`);
    // 목록 페이지는 전체를 찍는다. 다만 높이 × 픽셀 배율이 SwiftShader 의 텍스처 한도(8,192px)를 넘으면
    // 캡처가 실패하고, 그 브라우저는 그 뒤로 WebGL2 를 만들지 못한다. 그때는 화면 높이만 찍는다.
    const tall = await page.evaluate(() => document.documentElement.scrollHeight * devicePixelRatio);
    await page.screenshot({ path: shot, fullPage: !!t.isIndex && tall <= 8_000 });
    r.shot = relative(out, shot).split(sep).join('/');

    // axe — critical·serious 만 센다
    const res = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
    r.axe = res.violations
      .filter((v) => v.impact === 'critical' || v.impact === 'serious')
      .map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length, targets: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) }));
    if (axeMode === 'fail' && r.axe.length) {
      r.failures.push(`axe 위반 ${r.axe.map((v) => `${v.id}(${v.impact}, ${v.nodes}곳)`).join(', ')}`);
    }

    // 목록 페이지 링크 — 한 번만(desktop)
    if (t.isIndex && vp.name === 'desktop') r.links = await checkLinks(page, context, origin);
    if (r.links?.broken.length) r.failures.push(`깨진 링크 ${r.links.broken.length}개`);
  } catch (e) {
    r.failures.push(`점검 중 오류: ${e.message.split('\n')[0]}`);
  } finally {
    await context.close();
  }

  if (r.consoleErrors.length) r.failures.push(`콘솔 오류 ${r.consoleErrors.length}건`);
  const seen = new Set();
  r.badResponses = r.badResponses.filter((b) => !seen.has(b.url) && seen.add(b.url));
  if (r.badResponses.length) r.failures.push(`400 이상 응답 ${r.badResponses.length}건`);
  if (r.failedRequests.length) r.failures.push(`실패한 요청 ${r.failedRequests.length}건`);
  r.ms = Date.now() - t0;
  return r;
}

async function checkLinks(page, context, origin) {
  const hrefs = await page.$$eval('a[href]', (as) => [...new Set(as.map((a) => a.href))]);
  const result = { checked: 0, broken: [], skipped: [] };
  for (const href of hrefs) {
    const u = new URL(href);
    if (u.origin === origin) {
      if (u.pathname === new URL(page.url()).pathname && u.hash) continue; // 같은 페이지 안 이동
      const res = await context.request.get(href).catch(() => null);
      const status = res ? res.status() : 0;
      result.checked++;
      if (status === 0 || status >= 400) result.broken.push({ href: href.replace(origin, ''), status });
      continue;
    }
    if (href === repo || href.startsWith(`${repo}/`)) {
      // GitHub 은 요청이 많으면 막는다. 그래서 저장소 안의 파일이 있는지로 대신 본다.
      const rest = href.slice(repo.length).replace(/[?#].*$/, '').replace(/\/$/, '');
      const m = /^\/(blob|tree)\/main\/(.+)$/.exec(rest);
      if (rest && !m) { result.skipped.push(href); continue; }
      result.checked++;
      if (!rest) continue; // 저장소 첫 화면
      const p = join(root, ...decodeURIComponent(m[2]).split('/'));
      const ok = existsSync(p) && (m[1] === 'blob' ? statSync(p).isFile() : statSync(p).isDirectory());
      if (!ok) result.broken.push({ href, status: '저장소에 없음' });
      continue;
    }
    if (/^https?:/.test(href)) result.skipped.push(href);
  }
  return result;
}

/* ---------- 실행 ---------- */

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const server = createServer(serve);
await new Promise((ok) => server.listen(0, HOST, ok));
const origin = `http://${HOST}:${server.address().port}`;

const started = Date.now();
console.log(`화면 점검: 화면 ${targets.length}개 × 폭 ${VIEWPORTS.length} × 상태 → ${tasks.length}회 · 동시 ${jobs} · axe ${axeMode}`);

const results = new Array(tasks.length);
let next = 0;
await Promise.all(Array.from({ length: Math.min(jobs, tasks.length) }, async () => {
  while (next < tasks.length) {
    const k = next++;
    let r = await measure(origin, tasks[k]);
    if (r.modeTimedOut) { // 3D 가 시간 안에 안 뜬 경우만 한 번 더 연다(CPU 렌더링이 몰릴 때가 있다)
      const again = await measure(origin, tasks[k]);
      again.retried = true;
      r = again;
    }
    results[k] = r;
    const kb = r.transfer ? `${(r.transfer.total / 1024).toFixed(1)}KB${r.transfer.judged ? `/${r.transfer.budgetKB}KB` : ''}` : '-';
    const mode = r.mode ? ` · ${r.mode.actual} ${(r.mode.ms / 1000).toFixed(1)}초` : '';
    console.log(`${r.failures.length ? '실패' : '통과'} ${r.page} ${r.viewport} ${r.state} — ${(r.ms / 1000).toFixed(1)}초${mode} · 전송 ${kb} · axe ${r.axe ? r.axe.length : '-'}${r.retried ? ' · 다시 엶' : ''}`);
    for (const f of r.failures) console.log(`    - ${f}`);
  }
}));

server.close();

/* ---------- 보고 ---------- */

const failed = results.filter((r) => r.failures.length);
const axeTotal = results.reduce((n, r) => n + (r.axe?.length || 0), 0);
const elapsed = ((Date.now() - started) / 1000).toFixed(0);
const kb = (n) => (n / 1024).toFixed(1);
const md = [
  `# 화면 점검 — ${failed.length ? `실패 ${failed.length}건` : '통과'}`,
  '',
  `- 실행 ${results.length}회 · 통과 ${results.length - failed.length} · 실패 ${failed.length} · 걸린 시간 ${elapsed}초 · 동시 ${jobs}`,
  `- axe critical·serious(WCAG 2.x A·AA): 위반 종류 합계 ${axeTotal} — 모드 ${axeMode === 'fail' ? '실패 조건' : '보고만'}`,
  '- 전송량 = 응답 본문(gzip) + 헤더, KB = 1,024바이트. 예산은 상태 목록의 첫 상태에서만 판정한다',
  '',
  '| 화면 | 폭 | 상태 | 결과 | 3D | 콘솔 | 4xx·실패 | 넘침 | axe | 전송량(요청 수) | 시간 |',
  '|---|---|---|---|---|---|---|---|---|---|---|',
  ...results.map((r) => {
    const tr = r.transfer;
    const transfer = tr ? `${kb(tr.total)}KB${tr.judged ? ` / ${tr.budgetKB}KB` : ''} (${tr.requests})` : '-';
    const ov = r.overflow ? (r.overflow.scrollWidth > r.overflow.clientWidth ? `${r.overflow.scrollWidth}>${r.overflow.clientWidth}` : '없음') : '-';
    const mode = r.mode ? `${r.mode.actual}${r.mode.actual !== r.mode.expected ? `(기대 ${r.mode.expected})` : ''} ${(r.mode.ms / 1000).toFixed(1)}초` : '-';
    return `| ${r.page} | ${r.viewport} | ${r.state} | ${r.failures.length ? '**실패**' : '통과'}${r.retried ? ' (다시 엶)' : ''} | ${mode} | ${r.consoleErrors.length} | ${r.badResponses.length + r.failedRequests.length} | ${ov} | ${r.axe ? r.axe.length : '-'} | ${transfer} | ${(r.ms / 1000).toFixed(1)}초 |`;
  }),
  '',
];
if (failed.length) {
  md.push('## 실패 내용', '');
  for (const r of failed) {
    md.push(`### ${r.page} · ${r.viewport} · ${r.state}`, '', `- 주소: \`${r.url}\``, ...r.failures.map((f) => `- ${f}`));
    for (const c of r.consoleErrors.slice(0, 10)) md.push(`  - 콘솔: \`${c.slice(0, 300)}\``);
    for (const b of r.badResponses) md.push(`  - 응답 ${b.status}: \`${b.url}\``);
    for (const f of r.failedRequests) md.push(`  - 요청 실패 ${f.error}: \`${f.url}\``);
    for (const o of r.overflow?.offenders || []) md.push(`  - 넘친 요소: \`${o}\``);
    for (const l of r.links?.broken || []) md.push(`  - 깨진 링크(${l.status}): ${l.href}`);
    if (r.shot) md.push(`  - 화면: \`${r.shot}\``);
    md.push('');
  }
}
const axeRuns = results.filter((r) => r.axe?.length);
if (axeRuns.length) {
  md.push('## axe 위반(critical·serious)', '', '| 화면 | 폭 | 상태 | 규칙 | 영향 | 요소 수 | 예 |', '|---|---|---|---|---|---|---|');
  for (const r of axeRuns) {
    for (const v of r.axe) md.push(`| ${r.page} | ${r.viewport} | ${r.state} | ${v.id} | ${v.impact} | ${v.nodes} | \`${v.targets[0] || ''}\` |`);
  }
  md.push('');
}
const links = results.find((r) => r.links)?.links;
if (links) {
  md.push('## 목록 페이지 링크', '', `- 확인 ${links.checked}개 · 깨짐 ${links.broken.length}개 · 확인 안 함(외부) ${links.skipped.length}개`);
  for (const s of links.skipped) md.push(`  - 확인 안 함: ${s}`);
  md.push('');
}
md.push('화면은 `shots/<화면>/<폭>-<상태>.png` 에 있다.', '');

writeFileSync(join(out, 'report.md'), md.join('\n'));
writeFileSync(join(out, 'report.json'), JSON.stringify({ elapsedSeconds: Number(elapsed), jobs, axeMode, results }, null, 2));
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${md.join('\n')}\n`);

console.log(`\n화면 점검: ${results.length}회 중 실패 ${failed.length} · axe 위반 ${axeTotal} · ${elapsed}초 · 보고서 ${join(out, 'report.md')}`);
process.exit(failed.length ? 1 : 0);
