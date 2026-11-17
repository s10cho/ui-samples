#!/usr/bin/env node
/*
 * dist/app.bundle.js 를 다시 만든다 — 파일을 더블클릭해 file:// 로 열 때 쓰는 한 파일 스크립트.
 *
 * 브라우저는 file:// 에서 ES 모듈(js/main.js 와 그 import)을 막는다. 그래서 js/main.js 부터
 * 장면 모듈·Three.js 까지 모두 일반 스크립트 한 파일(IIFE)로 묶는다.
 * 서버(http·https)로 열 때는 이 파일을 쓰지 않고 js/main.js 모듈을 그대로 쓴다.
 *
 * js/ 아래 코드를 고치면 이 스크립트를 다시 실행한다(안 하면 파일로 열 때 옛 코드가 돈다).
 *
 *   node tools/build-app.mjs
 *
 * 필요한 것: node, npm(임시 폴더에 esbuild 를 받는다. 프로젝트에는 남기지 않는다)
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ESBUILD_VERSION = '0.25.12';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const out = join(root, 'dist', 'app.bundle.js');

const work = mkdtempSync(join(tmpdir(), 'build-app-'));
try {
  writeFileSync(join(work, 'package.json'), '{"private":true}');
  execFileSync('npm', ['install', '--silent', '--no-audit', '--no-fund', `esbuild@${ESBUILD_VERSION}`], {
    cwd: work,
    stdio: 'inherit',
  });
  mkdirSync(join(root, 'dist'), { recursive: true });
  execFileSync(
    join(work, 'node_modules', '.bin', 'esbuild'),
    [
      'js/main.js',
      '--bundle',
      '--format=iife',
      '--minify',
      '--target=es2020',
      '--legal-comments=inline',
      '--alias:three=./vendor/three/three.custom.min.js',
      '--banner:js=/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */',
      `--outfile=${out}`,
    ],
    { cwd: root, stdio: 'inherit' },
  );
  console.log(`${out} (${statSync(out).size} bytes)`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
