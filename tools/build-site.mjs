#!/usr/bin/env node
/*
 * 배포할 사이트를 _site/ 에 조립한다. GitHub Pages 는 이 폴더를 그대로 내보낸다.
 *
 *   node tools/build-site.mjs            # _site/ 를 새로 만든다
 *   node tools/build-site.mjs --only <slug>[,<slug>]   # 그 샘플만 다시 조립한다
 *
 * 샘플마다(samples.json 순서대로):
 *   1. shared/common/ 를 복사한다(모든 샘플 — 다이나믹 서브셋 글꼴 등)
 *   2. kit 이 있으면 shared/<kit>/ 를 그 위에 복사한다
 *   3. 샘플 폴더를 그 위에 복사한다 — 같은 경로면 샘플 파일이 이긴다
 *   4. build 에 적힌 명령을 _site/<slug>/ 안에서 차례로 실행한다
 * kit·build 는 <slug>/sample.config.json 이 있으면 그 값이 samples.json 보다 이긴다.
 * 그래서 샘플을 공용 뼈대로 옮기는 작업은 samples.json 을 건드리지 않아도 된다.
 *
 * 저장소 루트의 index.html·assets/·LICENSE·LICENSE-CONTENT.md·.nojekyll 도 복사한다.
 * 샘플 폴더 안의 docs/ui/review/ 는 배포하지 않는다(검수 화면은 저장소에서만 본다).
 * 로컬 확인: node tools/build-site.mjs && python3 -m http.server 8000 --directory _site
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const out = join(root, '_site');
const data = JSON.parse(readFileSync(join(root, 'samples.json'), 'utf8'));

const onlyArg = process.argv.indexOf('--only');
const only = onlyArg > 0 ? new Set(process.argv[onlyArg + 1].split(',')) : null;

const skip = (src) => {
  const rel = src.slice(root.length + 1).split(sep);
  if (rel.some((p) => p === '.DS_Store' || p === 'node_modules' || p.includes('.slotfix.') || p === 'sample.config.json')) return false;
  const i = rel.indexOf('review');
  if (i > 1 && rel[i - 1] === 'ui' && rel[i - 2] === 'docs') return false; // <slug>/docs/ui/review/**
  return true;
};
const copy = (from, to) => { if (existsSync(from)) cpSync(from, to, { recursive: true, filter: skip, force: true }); };

if (!only) {
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  for (const f of ['index.html', 'LICENSE', 'LICENSE-CONTENT.md', '.nojekyll']) copy(join(root, f), join(out, f));
  copy(join(root, 'assets'), join(out, 'assets'));
}

for (const base of data.samples) {
  if (only && !only.has(base.slug)) continue;
  const cfgPath = join(root, base.slug, 'sample.config.json');
  const s = existsSync(cfgPath) ? { ...base, ...JSON.parse(readFileSync(cfgPath, 'utf8')) } : base;
  const dest = join(out, s.slug);
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  copy(join(root, 'shared', 'common'), dest);
  if (s.kit) {
    const kit = join(root, 'shared', s.kit);
    if (!existsSync(kit) || !statSync(kit).isDirectory()) throw new Error(`${s.slug}: shared/${s.kit}/ 가 없다`);
    copy(kit, dest);
  }
  copy(join(root, s.slug), dest);
  for (const cmd of s.build ?? []) {
    console.log(`[${s.slug}] ${cmd}`);
    execSync(cmd, { cwd: dest, stdio: 'inherit' });
  }
  console.log(`조립: ${s.slug}${s.kit ? ` (kit ${s.kit})` : ''}`);
}
console.log(`끝: ${out}`);
