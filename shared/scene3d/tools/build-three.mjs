#!/usr/bin/env node
/*
 * vendor/three/three.custom.min.js 를 다시 만든다.
 *
 * 앱 코드(js/**)가 'three' 에서 가져오는 이름만 모아 한 파일로 묶고 압축한다.
 * 앱 코드는 빌드 없이 돌아가고, 이 스크립트는 Three.js 쪽 파일만 만든다.
 * js/ 에서 'three' 의 새 이름을 가져오면 이 스크립트를 다시 실행한다. 결과물은 샘플 폴더에 넣어 저장소에 둔다.
 *
 *   node shared/scene3d/tools/build-three.mjs <샘플 폴더>   # 저장소 루트에서. 예: ... island-park
 *   node tools/build-three.mjs                             # 조립된 샘플 폴더(_site/<slug>/) 안에서
 *
 * 'three' 를 쓰는 곳은 샘플의 장면 코드(js/scene/)뿐이다. 공용 뼈대(js/shell/)는 three 를 쓰지 않는다.
 * 필요한 것: node, npm(임시 폴더에 three·esbuild 를 받는다. 프로젝트에는 남기지 않는다 — tools/esbuild.mjs)
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { esbuildBin, npmCache } from './esbuild.mjs';

const THREE_VERSION = '0.187.0';

const root = resolve(process.argv[2] ?? fileURLToPath(new URL('..', import.meta.url)));
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

// 받아 둔 폴더 안에 입구 파일을 두어 'three' 를 그 폴더의 node_modules 에서 찾게 한다
const cache = npmCache([`three@${THREE_VERSION}`]);
const entry = `entry-${process.pid}.js`;
try {
  const list = [...names].sort();
  writeFileSync(join(cache, entry), `export { ${list.join(', ')} } from 'three';\n`);
  mkdirSync(join(root, 'vendor', 'three'), { recursive: true });
  execFileSync(
    esbuildBin(),
    [entry, '--bundle', '--format=esm', '--minify', '--legal-comments=inline', `--outfile=${out}`],
    { cwd: cache, stdio: 'inherit' },
  );
  copyFileSync(join(cache, 'node_modules', 'three', 'LICENSE'), join(root, 'vendor', 'three', 'LICENSE'));
  console.log(`three@${THREE_VERSION} → ${out} (${list.length}개 이름)`);
} finally {
  rmSync(join(cache, entry), { force: true });
}
