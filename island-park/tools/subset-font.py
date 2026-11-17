#!/usr/bin/env python3
"""
화면에 쓰는 글자만 담은 Pretendard 글꼴을 만든다.

  python3 tools/subset-font.py <PretendardVariable.woff2 원본 경로>

- 글자를 모으는 곳: index.html 전체, js/**/*.js 의 문자열 안 글자(주석은 빼다).
- 만드는 것: vendor/pretendard/PretendardVariable.page.woff2
            vendor/pretendard/pretendard-page-subset.css (unicode-range 포함)
- 문구를 바꿔 새 글자가 생기면 다시 실행한다. 다시 실행하지 않아도 화면은 깨지지 않는다.
  빠진 글자는 css 의 다음 글꼴(Pretendard 다이나믹 서브셋)에서 그 조각만 받는다.
- 필요한 것: fonttools, brotli (pip install fonttools brotli). 프로젝트 의존성이 아니라 이 스크립트만 쓴다.
- 원본: https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_FONT = ROOT / "vendor" / "pretendard" / "PretendardVariable.page.woff2"
OUT_CSS = ROOT / "vendor" / "pretendard" / "pretendard-page-subset.css"

STRING_RE = re.compile(r"'(?:[^'\\\n]|\\.)*'|\"(?:[^\"\\\n]|\\.)*\"|`(?:[^`\\]|\\.)*`")


def collect_chars():
    chars = set(chr(c) for c in range(0x20, 0x7F))  # 기본 라틴 문자는 늘 넣는다
    chars.update("·…‘’“”")
    chars.update((ROOT / "index.html").read_text(encoding="utf-8"))
    for js in (ROOT / "js").rglob("*.js"):
        for literal in STRING_RE.findall(js.read_text(encoding="utf-8")):
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
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    source = Path(sys.argv[1])
    chars = collect_chars()
    codepoints = [ord(c) for c in chars]
    subprocess.run(
        [
            "pyftsubset",
            str(source),
            "--unicodes=" + ",".join(f"U+{cp:04X}" for cp in codepoints),
            "--flavor=woff2",
            "--layout-features=kern,liga,calt,tnum",
            f"--output-file={OUT_FONT}",
        ],
        check=True,
    )
    OUT_CSS.write_text(
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
    print(f"글자 {len(chars)}개 → {OUT_FONT.relative_to(ROOT)} ({OUT_FONT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
