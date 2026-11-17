#!/usr/bin/env node
/*
 * 배포본의 공용 뼈대 파일(js/shell/*.js, css/shell*.css)에서 주석을 뺀다 — 첫 방문 전송량 예산(3D 300KB)을 지키려고.
 * 설명 주석은 저장소의 shared/scene3d/ 원본에 그대로 있다. 코드는 줄 바꿈·들여쓰기를 둔 채 다시 쓰므로 읽을 수 있다.
 * esbuild 로 다시 쓴다(묶지 않고 압축하지 않는다. 한글은 그대로 둔다 — tools/subset-font.py 가 문자열을 읽는다).
 *
 *   node tools/strip-kit.mjs            # 조립된 샘플 폴더(_site/<slug>/) 안에서. 샘플 sample.config.json 의 build 가 부른다
 *   node tools/strip-kit.mjs <폴더>
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { esbuildBin } from './esbuild.mjs';

const root = resolve(process.argv[2] ?? fileURLToPath(new URL('..', import.meta.url)));
const list = (dir, test) => (existsSync(join(root, dir)) ? readdirSync(join(root, dir)).filter(test).map((f) => `${dir}/${f}`) : []);
const js = list('js/shell', (f) => f.endsWith('.js'));
const css = list('css', (f) => /^shell.*\.css$/.test(f));

const run = (files, outdir, extra) => {
  if (!files.length) return;
  execFileSync(
    esbuildBin(),
    [...files, `--outdir=${outdir}`, '--allow-overwrite', '--charset=utf8', '--legal-comments=none', '--log-level=warning', ...extra],
    { cwd: root, stdio: 'inherit' },
  );
};
run(js, 'js/shell', ['--format=esm']);
run(css, 'css', []);
console.log(`주석 뺌: ${[...js, ...css].join(', ')}`);
