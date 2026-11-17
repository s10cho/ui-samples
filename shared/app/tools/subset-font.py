#!/usr/bin/env python3
"""
화면에 쓰는 글자만 담은 Pretendard 글꼴(page subset)을 만든다 — 업무 화면 kit(shared/app) 판.

  python3 tools/subset-font.py <PretendardVariable.woff2 원본 경로> [--out <폴더>]

- 조립된 샘플 폴더(_site/<slug>/) 안의 이 파일을 실행한다. kit 스크립트(js/ds.js)의 문구까지 함께 모은다.
    node tools/build-site.mjs --only <slug>
    python3 _site/<slug>/tools/subset-font.py <원본.woff2> --out <slug>/vendor/pretendard
  --out 을 주면 결과를 저장소의 샘플 폴더에 바로 쓴다. 빼면 이 도구가 있는 샘플 폴더의 vendor/pretendard/ 에 쓴다.
- 글자를 모으는 곳: 샘플 폴더 맨 위의 *.html 전체, js/**/*.js 와 data/**/*.json 의 문자열 안 글자(주석은 빼다).
- 만드는 것: PretendardVariable.page.woff2, pretendard-page-subset.css (unicode-range 포함)
- 문구를 바꿔 새 글자가 생기면 다시 실행한다. 다시 실행하지 않아도 화면은 깨지지 않는다.
  빠진 글자는 js/ds.js 가 알아채고 다이나믹 서브셋(shared/common)에서 그 조각만 받는다.
- 필요한 것: fonttools, brotli (pip install fonttools brotli). 프로젝트 의존성이 아니라 이 스크립트만 쓴다.
- 원본: https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2
"""
import argparse
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

STRING_RE = re.compile(r"'(?:[^'\\\n]|\\.)*'|\"(?:[^\"\\\n]|\\.)*\"|`(?:[^`\\]|\\.)*`")


def collect_chars():
    chars = set(chr(c) for c in range(0x20, 0x7F))  # 기본 라틴 문자는 늘 넣는다
    chars.update("·…‘’“”–—")
    for html in ROOT.glob("*.html"):
        chars.update(html.read_text(encoding="utf-8"))
    for folder, pattern in (("js", "*.js"), ("data", "*.json")):
        base = ROOT / folder
        if not base.exists():
            continue
        for path in base.rglob(pattern):
            for literal in STRING_RE.findall(path.read_text(encoding="utf-8")):
                chars.update(literal)
    return sorted(c for c in chars if ord(c) >= 0x20)


def unicode_range(codepoints):
    ranges = []
    for cp in codepoints:
        if ranges and cp == ranges[-1][1] + 1:
            ranges[-1] = (ranges[-1][0], cp)
        else:
            ranges.append((cp, cp))
    return ", ".join(f"U+{a:X}" if a == b else f"U+{a:X}-{b:X}" for a, b in ranges)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("source", type=Path, help="PretendardVariable.woff2 원본")
    parser.add_argument("--out", type=Path, default=ROOT / "vendor" / "pretendard", help="결과를 쓸 폴더")
    args = parser.parse_args()

    out_dir = args.out.resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    out_font = out_dir / "PretendardVariable.page.woff2"
    out_css = out_dir / "pretendard-page-subset.css"

    chars = collect_chars()
    codepoints = [ord(c) for c in chars]
    subprocess.run(
        [
            "pyftsubset",
            str(args.source),
            "--unicodes=" + ",".join(f"U+{cp:04X}" for cp in codepoints),
            "--flavor=woff2",
            "--layout-features=kern,liga,calt,tnum",
            f"--output-file={out_font}",
        ],
        check=True,
    )
    out_css.write_text(
        "/* 화면에 쓰는 글자만 담은 Pretendard — tools/subset-font.py 가 만든다. 직접 고치지 않는다. */\n"
        "/* Pretendard: SIL Open Font License 1.1 — LICENSE.txt */\n"
        "@font-face {\n"
        "  font-family: 'Pretendard Page';\n"
        "  font-style: normal;\n"
        "  font-display: swap;\n"
        "  font-weight: 45 920;\n"
        "  src: url(./PretendardVariable.page.woff2) format('woff2-variations');\n"
        f"  unicode-range: {unicode_range(codepoints)};\n"
        "}\n",
        encoding="utf-8",
    )
    print(f"글자 {len(chars)}개 → {out_font.name} ({out_font.stat().st_size} bytes), {out_css.name}")


if __name__ == "__main__":
    main()
