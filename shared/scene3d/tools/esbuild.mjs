/*
 * esbuild 실행 파일 경로를 돌려준다 — tools/build-app.mjs · tools/build-three.mjs 가 같이 쓴다.
 *
 * 프로젝트에는 아무것도 설치하지 않는다. 운영체제 임시 폴더에 버전별로 한 번 받아 두고 다시 쓴다.
 * 샘플 여러 개를 이어서 조립할 때(node tools/build-site.mjs) 샘플마다 다시 받지 않는다.
 * 받다가 끊긴 폴더는 쓰지 않는다 — 다 받은 뒤에만 이름을 바꿔 캐시 자리에 놓는다.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** 받을 패키지(이름@버전)를 모두 갖춘 폴더를 돌려준다 */
export function npmCache(packages) {
  const key = packages.join('+').replace(/[^\w.+-]/g, '_');
  const dir = join(tmpdir(), `scene3d-tools-${key}`);
  const done = () => existsSync(join(dir, 'node_modules', '.done'));
  if (done()) return dir;
  const work = mkdtempSync(join(tmpdir(), 'scene3d-tools-'));
  try {
    writeFileSync(join(work, 'package.json'), '{"private":true}');
    execFileSync('npm', ['install', '--silent', '--no-audit', '--no-fund', ...packages], { cwd: work, stdio: 'inherit' });
    writeFileSync(join(work, 'node_modules', '.done'), '');
    rmSync(dir, { recursive: true, force: true }); // 받다가 끊긴 옛 폴더
    renameSync(work, dir);
  } catch (error) {
    rmSync(work, { recursive: true, force: true });
    if (done()) return dir; // 다른 조립이 먼저 받아 놓았다
    throw error;
  }
  return dir;
}

export const ESBUILD_VERSION = '0.25.12';

/** esbuild 실행 파일 */
export function esbuildBin(extra = []) {
  return join(npmCache([`esbuild@${ESBUILD_VERSION}`, ...extra]), 'node_modules', '.bin', 'esbuild');
}
