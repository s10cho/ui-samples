#!/usr/bin/env node
/*
 * 목록 페이지 첫 화면의 화면 벽에 쓰는 작은 그림(480×300)을 썸네일에서 만든다.
 *
 *   node tools/make-wall-thumbs.mjs           # 없는 것만 만든다
 *   node tools/make-wall-thumbs.mjs --force   # 모두 다시 만든다
 *
 * 입력: assets/<slug>-day.webp, assets/<slug>-night.webp(있으면)
 * 출력: assets/wall/<slug>-day.webp, assets/wall/<slug>-night.webp
 * cwebp(libwebp)가 필요하다. 자동 검수(CI)는 이 도구를 돌리지 않는다 — 만든 그림을 함께 커밋한다.
 * 그림이 없으면 build-gallery.mjs 는 큰 썸네일을 대신 쓴다.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const force = process.argv.includes('--force');
const data = JSON.parse(readFileSync(join(root, 'samples.json'), 'utf8'));
const out = join(root, 'assets', 'wall');
mkdirSync(out, { recursive: true });

let made = 0;
for (const s of data.samples) {
  for (const state of ['day', 'night']) {
    const src = join(root, 'assets', `${s.slug}-${state}.webp`);
    const dst = join(out, `${s.slug}-${state}.webp`);
    if (!existsSync(src) || (existsSync(dst) && !force)) continue;
    execFileSync('cwebp', ['-quiet', '-q', '70', '-m', '6', '-resize', '480', '300', src, '-o', dst]);
    made++;
  }
}
console.log(`만듦: ${made}개 (${out})`);
