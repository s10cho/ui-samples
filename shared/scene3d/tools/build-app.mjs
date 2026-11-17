#!/usr/bin/env node
/*
 * dist/app.bundle.js 를 만든다 — 파일을 더블클릭해 file:// 로 열 때 쓰는 한 파일 스크립트.
 *
 * 브라우저는 file:// 에서 ES 모듈(js/main.js 와 그 import)을 막는다. 그래서 js/main.js 부터
 * 공용 뼈대(js/shell/)·장면 모듈·Three.js 까지 모두 일반 스크립트 한 파일(IIFE)로 묶는다.
 * 서버(http·https)로 열 때는 이 파일을 쓰지 않고 js/main.js 모듈을 그대로 쓴다.
 *
 * 생성물이라 저장소에 넣지 않는다. 사이트를 조립할 때 만든다(샘플 sample.config.json 의 build).
 *
 *   node tools/build-app.mjs            # 조립된 샘플 폴더(_site/<slug>/) 안에서
 *   node tools/build-app.mjs <폴더>      # 다른 폴더를 묶는다
 *
 * 필요한 것: node, npm(임시 폴더에 esbuild 를 받는다. 프로젝트에는 남기지 않는다 — tools/esbuild.mjs)
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { esbuildBin } from './esbuild.mjs';

const root = resolve(process.argv[2] ?? fileURLToPath(new URL('..', import.meta.url)));
const out = join(root, 'dist', 'app.bundle.js');

mkdirSync(join(root, 'dist'), { recursive: true });
execFileSync(
  esbuildBin(),
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
