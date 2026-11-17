#!/usr/bin/env node
/*
 * vendor/three/three.custom.min.js 를 다시 만든다.
 *
 * 앱 코드(js/**)가 'three' 에서 가져오는 이름만 모아 한 파일로 묶고 압축한다.
 * 앱 코드는 빌드 없이 돌아가고, 이 스크립트는 Three.js 쪽 파일만 만든다.
 * js/ 에서 'three' 의 새 이름을 가져오면 이 스크립트를 다시 실행한다.
 *
 *   node tools/build-three.mjs
 *
 * 필요한 것: node, npm(임시 폴더에 three·esbuild 를 받는다. 프로젝트에는 남기지 않는다)
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const THREE_VERSION = '0.187.0';
const ESBUILD_VERSION = '0.25.12';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const out = join(root, 'vendor', 'three', 'three.custom.min.js');

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.js') ? [path] : [];
  });
}

const names = new Set();
for (const file of walk(join(root, 'js'))) {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(/import\s*\{([^}]*)\}\s*from\s*['"]three['"]/g)) {
    match[1]
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean)
      .forEach((name) => names.add(name));
  }
}
if (!names.size) throw new Error("js/ 에서 'three' 를 가져오는 import 를 찾지 못했어요.");

const work = mkdtempSync(join(tmpdir(), 'build-three-'));
try {
  const run = (cmd, args) => execFileSync(cmd, args, { cwd: work, stdio: 'inherit' });
  writeFileSync(join(work, 'package.json'), '{"private":true}');
  run('npm', ['install', '--silent', '--no-audit', '--no-fund', `three@${THREE_VERSION}`, `esbuild@${ESBUILD_VERSION}`]);
  const list = [...names].sort();
  writeFileSync(join(work, 'entry.js'), `export { ${list.join(', ')} } from 'three';\n`);
  run(join(work, 'node_modules', '.bin', 'esbuild'), [
    'entry.js',
    '--bundle',
    '--format=esm',
    '--minify',
    '--legal-comments=inline',
    `--outfile=${out}`,
  ]);
  copyFileSync(join(work, 'node_modules', 'three', 'LICENSE'), join(root, 'vendor', 'three', 'LICENSE'));
  console.log(`three@${THREE_VERSION} → ${out} (${list.length}개 이름)`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
