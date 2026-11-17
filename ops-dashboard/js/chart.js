/*
 * 추세 그래프 — 인라인 SVG 로 직접 그린다(차트 라이브러리 없음). 전역 OpsChart 하나.
 *
 * - 그래프 폭을 재서 viewBox 를 실제 픽셀과 같게 둔다. 글자가 그래프와 함께 줄지 않는다.
 * - 색은 CSS 클래스(ops-c-*)가 토큰으로 칠한다. 테마를 바꿔도 다시 그리지 않는다.
 * - 표시 규격(dataviz): 선 2, 끝점 반지름 4 + 바탕색 테두리 2, 막대 폭 24 이하·위쪽 모서리 4·막대 사이 2,
 *   눈금선은 실선 1(옅게), 목표선만 점선. 이번 기간 끝값 하나만 글자로 붙인다.
 * - 그래프 영역은 role="slider" 다. 화살표 키로 시점을 옮기면 aria-valuetext 가 그 시점 값을 읽힌다.
 *   마우스는 세로 보조선과 툴팁. 툴팁 값은 표 보기에서도 모두 볼 수 있다.
 */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var measureCtx = null;

  function svg(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }

  function remPx() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  }

  // 그래프 글은 고정폭 숫자(tabular-nums)로 그린다. canvas 는 그 기능을 쓰지 않으므로 숫자를 모두 "0"으로 바꿔 잰다
  function textWidth(text, size) {
    if (!measureCtx) measureCtx = document.createElement('canvas').getContext('2d');
    measureCtx.font = size + 'px ' + getComputedStyle(document.body).fontFamily;
    return measureCtx.measureText(String(text).replace(/\d/g, '0')).width;
  }

  function niceStep(range, count) {
    var raw = range / count;
    var mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
    var r = raw / mag;
    var s = r <= 1 ? 1 : r <= 2 ? 2 : r <= 2.5 ? 2.5 : r <= 5 ? 5 : 10;
    return s * mag;
  }

  function lengthToPx(value, rem) {
    var v = parseFloat(value);
    if (!v) return 12 * rem;
    return /rem$/.test(value.trim()) ? v * rem : v;
  }

  // x 축 글을 every 칸마다 놓아 본다. 놓일 자리 기준으로 앞 글과 gap 보다 가까우면 ok=false
  function xLabels(spec, every, x, left, width, fs, gap, compact) {
    var out = [];
    var prevEnd = -Infinity;
    var shown = -1;
    out.ok = true;
    for (var i = 0; i < spec.slots; i += every) {
      var text = spec.xLabel(i, shown, compact);
      var w = textWidth(text, fs);
      var cx = x(i);
      var anchor = 'middle';
      var x0 = cx - w / 2;
      // 첫 글이 y 눈금 자리(왼쪽 여백)로 들어가지 않게 그림 영역 왼쪽 끝에 붙인다
      if (x0 < left) { anchor = 'start'; cx = left; x0 = left; }
      else if (x0 + w > width) { anchor = 'end'; cx = width; x0 = width - w; }
      if (x0 < prevEnd + gap) out.ok = false;
      prevEnd = x0 + w;
      out.push({ text: text, x: cx, anchor: anchor });
      shown = i;
    }
    return out;
  }

  // 글 상자(box)가 선(points: [[x, y], …])과 겹치나 — 상자의 x 구간에서 선의 y 범위를 본다
  function hitsLine(box, points, pad) {
    for (var k = 0; k + 1 < points.length; k++) {
      var p = points[k];
      var q = points[k + 1];
      var a = Math.max(box.x0, Math.min(p[0], q[0]));
      var b = Math.min(box.x1, Math.max(p[0], q[0]));
      if (a > b) continue;
      var at = function (xx) { return q[0] === p[0] ? p[1] : p[1] + (q[1] - p[1]) * (xx - p[0]) / (q[0] - p[0]); };
      var ya = at(a);
      var yb = at(b);
      if (Math.max(ya, yb) >= box.y0 - pad && Math.min(ya, yb) <= box.y1 + pad) return true;
    }
    return false;
  }

  /**
   * new OpsChart(plot, { label })
   * chart.update(spec) — spec:
   *   type: 'line' | 'bar', slots: 칸 수
   *   series: [{ name, kind: 'prev'|'cur', values: [숫자|null] }] — 'cur' 가 이번 기간
   *   target: { value, label } (선택)
   *   xLabel(i, prevShown) — 축 글, tipTitle(i) — 툴팁 제목
   *   tick(v, isTop) — y 눈금 글, value(v) — 값 글, over(v) — 목표를 넘었나(막대 색)
   */
  function OpsChart(plot, opts) {
    this.plot = plot;
    this.opts = opts || {};
    this.index = null;
    this.spec = null;
    this.geo = null;
    this.tip = document.createElement('div');
    this.tip.className = 'ops-tip';
    this.tip.hidden = true;
    this.tip.setAttribute('aria-hidden', 'true');
    plot.appendChild(this.tip);
    this.bind();
    var self = this;
    var frame = 0;
    if ('ResizeObserver' in window) {
      var lastW = 0;
      new ResizeObserver(function () {
        var w = plot.clientWidth;
        if (w === lastW) return;
        lastW = w;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(function () { self.draw(); });
      }).observe(plot);
    } else {
      window.addEventListener('resize', function () { self.draw(); });
    }
  }

  OpsChart.prototype.update = function (spec) {
    this.spec = spec;
    // 툴팁을 보는 중이면(마우스·키보드) 그 시점을 그대로 둔다. 아니면 이번 기간 마지막 값으로
    if (this.tip.hidden || this.index === null || this.index >= spec.slots) this.index = this.lastIndex();
    this.draw();
    this.syncAria();
  };

  OpsChart.prototype.cur = function () {
    return this.spec.series.filter(function (s) { return s.kind === 'cur'; })[0];
  };

  OpsChart.prototype.hasValue = function (i) {
    return this.spec.series.some(function (s) { return s.values[i] !== null && s.values[i] !== undefined; });
  };

  OpsChart.prototype.lastIndex = function () {
    var cur = this.cur();
    for (var i = this.spec.slots - 1; i >= 0; i--) if (cur.values[i] !== null) return i;
    return 0;
  };

  OpsChart.prototype.valueText = function (i) {
    var spec = this.spec;
    var parts = [spec.tipTitle(i)];
    spec.series.slice().reverse().forEach(function (s) {
      var v = s.values[i];
      parts.push(s.name + ' ' + (v === null || v === undefined ? '값 없음' : spec.value(v)));
    });
    var cur = this.cur().values[i];
    if (spec.target && cur !== null && cur !== undefined) parts.push(spec.over(cur) ? '목표 넘음' : '목표 안');
    return parts.join(', ');
  };

  OpsChart.prototype.syncAria = function () {
    var p = this.plot;
    p.setAttribute('aria-valuemin', '1');
    p.setAttribute('aria-valuemax', String(this.spec.slots));
    p.setAttribute('aria-valuenow', String(this.index + 1));
    p.setAttribute('aria-valuetext', this.valueText(this.index));
  };

  /* ---------- 그리기 ---------- */

  OpsChart.prototype.draw = function () {
    var spec = this.spec;
    var plot = this.plot;
    if (!spec) return;
    var width = plot.clientWidth;
    if (!width) return;
    var rem = remPx();
    var fs = rem * 0.75; // caption 글자 크기와 같다
    var plotH = lengthToPx(getComputedStyle(plot).getPropertyValue('--ops-dashboard-chart-h') || '12rem', rem);

    var all = [];
    spec.series.forEach(function (s) { s.values.forEach(function (v) { if (v !== null && v !== undefined) all.push(v); }); });
    var maxV = Math.max.apply(null, all.concat([spec.target ? spec.target.value * 1.25 : 0, 0]));
    if (!maxV) maxV = 1;
    var step = niceStep(maxV, 4);
    var top = Math.ceil(maxV / step) * step;
    var ticks = [];
    for (var t = 0; t <= top + step / 2; t += step) ticks.push(Math.round(t * 1000) / 1000);

    var tickW = Math.max.apply(null, ticks.map(function (v, k) { return textWidth(spec.tick(v, k === ticks.length - 1), fs); }));
    // 위 여백 + 축 글자 띠 = 2.125rem — page.css 의 --ops-dashboard-chart-band 와 같다(자리를 미리 잡아 둔다)
    var padT = Math.round(fs * 0.75);
    var left = Math.ceil(tickW) + rem * 0.5;
    // 이번 기간 끝값 — 선이 끝 칸에서 끝나면 그림 영역 오른쪽에 자리를 잡아 두 선과 겹치지 않게 한다
    var curS = this.cur();
    var li = this.lastIndex();
    var lv = curS.values[li];
    var endText = spec.type !== 'bar' && lv !== null && lv !== undefined ? spec.value(lv) : '';
    var endW = endText ? textWidth(endText, fs) : 0;
    var endOutside = !!endText && li === spec.slots - 1;
    var right = endOutside ? Math.ceil(endW + rem * 0.75) : rem * 0.5;
    var bottom = Math.round(rem * 2.125) - padT;
    var pw = Math.max(rem * 6, width - left - right);
    var height = Math.round(padT + plotH + bottom);
    var slot = pw / spec.slots;
    var x = function (i) { return left + slot * (i + 0.5); };
    var y = function (v) { return padT + plotH - (v / top) * plotH; };
    this.geo = { left: left, pw: pw, slot: slot, x: x, y: y, padT: padT, plotH: plotH, width: width, height: height, fs: fs, rem: rem };

    var old = plot.querySelector('svg');
    var root = svg('svg', {
      'class': 'ops-c', width: String(width), height: String(height), viewBox: '0 0 ' + width + ' ' + height,
      'aria-hidden': 'true', focusable: 'false'
    });

    // 눈금선과 y 눈금 글
    var grid = svg('g', { 'class': 'ops-c-grid' }, root);
    ticks.forEach(function (v, k) {
      var yy = Math.round(y(v)) + 0.5;
      svg('line', { x1: left, x2: left + pw, y1: yy, y2: yy, 'class': k === 0 ? 'ops-c-base' : 'ops-c-gridline' }, grid);
      var label = svg('text', { x: left - rem * 0.375, y: y(v) + fs * 0.35, 'text-anchor': 'end', 'class': 'ops-c-tick' }, grid);
      label.textContent = spec.tick(v, k === ticks.length - 1);
    });

    // x 축 글 — 실제로 놓일 자리(첫 글은 그림 영역 왼쪽에 붙고, 끝 글은 오른쪽 끝에 붙는다)로 간격을 재서
    // 글 사이가 0.5rem 보다 좁으면 더 건너뛴다
    var choices = spec.slots > 23 && spec.slots <= 24 ? [1, 2, 3, 4, 6, 12] : [1, 2, 3, 5, 7, 10, 15, 30];
    // 긴 글(11월 2일)로 두 칸 넘게 못 놓으면 짧은 글(11.2)로 다시 놓아 본다
    var labels = [];
    var placed = false;
    for (var pass = 0; pass < 2 && !placed; pass++) {
      for (var c = 0; c < choices.length; c++) {
        // 간격 0.5rem + 2px — canvas 로 잰 폭이 SVG 글보다 1px 남짓 좁게 나온다
        labels = xLabels(spec, choices[c], x, left, width, fs, rem * 0.5 + 2, pass === 1);
        if (labels.ok && (labels.length > 1 || spec.slots < 2 || pass === 1)) { placed = true; break; }
      }
    }
    var xg = svg('g', { 'class': 'ops-c-xaxis' }, root);
    labels.forEach(function (it) {
      var lab = svg('text', { x: it.x, y: padT + plotH + fs + rem * 0.375, 'text-anchor': it.anchor, 'class': 'ops-c-tick' }, xg);
      lab.textContent = it.text;
    });

    // 막대 칸 강조(마우스·키보드 위치)
    this.band = svg('rect', { 'class': 'ops-c-band', x: 0, y: padT, width: Math.max(1, slot), height: plotH, visibility: 'hidden' }, root);

    var data = svg('g', { 'class': 'ops-c-data' }, root);
    var cur = curS;
    var polys = []; // 끝값 글이 피할 선들

    if (spec.type === 'bar') {
      var barW = Math.min(24, Math.max(2, slot - 2));
      cur.values.forEach(function (v, k) {
        if (v === null || v === undefined || v <= 0) return;
        var bx = x(k) - barW / 2;
        var by = y(v);
        var bh = padT + plotH - by;
        var r = Math.min(4, barW / 2, bh);
        var d = 'M' + bx + ',' + (padT + plotH) + 'V' + (by + r) + 'Q' + bx + ',' + by + ' ' + (bx + r) + ',' + by +
          'H' + (bx + barW - r) + 'Q' + (bx + barW) + ',' + by + ' ' + (bx + barW) + ',' + (by + r) + 'V' + (padT + plotH) + 'Z';
        svg('path', { d: d, 'class': 'ops-c-bar' + (spec.over(v) ? ' ops-c-bar--over' : '') }, data);
      });
    } else {
      // 이번 기간 아래 옅은 면 → 앞 기간 선 → 이번 기간 선
      var runs = function (values) {
        var out = [], run = [];
        values.forEach(function (v, k) {
          if (v === null || v === undefined) { if (run.length) out.push(run); run = []; }
          else run.push([x(k), y(v)]);
        });
        if (run.length) out.push(run);
        return out;
      };
      runs(cur.values).forEach(function (run) {
        if (run.length < 2) return;
        var d = 'M' + run[0][0] + ',' + (padT + plotH) + run.map(function (p) { return 'L' + p[0] + ',' + p[1]; }).join('') +
          'L' + run[run.length - 1][0] + ',' + (padT + plotH) + 'Z';
        svg('path', { d: d, 'class': 'ops-c-wash' }, data);
      });
      spec.series.forEach(function (s) {
        runs(s.values).forEach(function (run) {
          var d = run.map(function (p, k) { return (k ? 'L' : 'M') + p[0] + ',' + p[1]; }).join('');
          svg('path', { d: d, 'class': 'ops-c-line ops-c-line--' + s.kind }, data);
          polys.push(run);
        });
      });
    }

    // 목표선 — 점선과 이름. 막대·선 위에 둔다
    if (spec.target) {
      var ty = Math.round(y(spec.target.value)) + 0.5;
      svg('line', { x1: left, x2: left + pw, y1: ty, y2: ty, 'class': 'ops-c-target' }, root);
      var tl = svg('text', { x: left + rem * 0.25, y: ty - rem * 0.3, 'class': 'ops-c-target-label' }, root);
      tl.textContent = spec.target.label;
    }

    // 이번 기간 끝점과 끝값(선 그래프만). 끝값 글은 두 선·목표선과 겹치지 않는 자리에만 둔다.
    // 놓을 자리가 없으면 글을 빼고 점만 둔다(값은 툴팁·표·요약 문장에 있다)
    if (endText) {
      var lx = x(li);
      var ly = y(lv);
      svg('circle', { cx: lx, cy: ly, r: 4, 'class': 'ops-c-dot' }, root);
      var mid = ly + fs * 0.35;
      var above = ly - rem * 0.5;
      var below = ly + fs + rem * 0.25;
      var cands = endOutside
        ? [{ x: lx + rem * 0.5, y: mid, anchor: 'start', free: true }]
        : [
          { x: lx + rem * 0.5, y: mid, anchor: 'start' },
          { x: lx + rem * 0.5, y: above, anchor: 'start' },
          { x: lx + rem * 0.5, y: below, anchor: 'start' },
          { x: lx - rem * 0.5, y: above, anchor: 'end' },
          { x: lx - rem * 0.5, y: below, anchor: 'end' },
          { x: lx + rem * 0.5, y: above - rem, anchor: 'start' },
          { x: lx + rem * 0.5, y: below + rem, anchor: 'start' },
          { x: lx - rem * 0.5, y: above - rem, anchor: 'end' }
        ];
      var ty0 = spec.target ? y(spec.target.value) : null;
      var pick = null;
      for (var k = 0; k < cands.length && !pick; k++) {
        var cd = cands[k];
        // 글 상자 — 글꼴의 위·아래 여백까지 잡는다(실제 글 상자보다 작게 재면 선이 글에 닿는다)
        var box = {
          x0: (cd.anchor === 'start' ? cd.x : cd.x - endW) - 2,
          x1: (cd.anchor === 'start' ? cd.x + endW : cd.x) + 2,
          y0: cd.y - fs,
          y1: cd.y + fs * 0.35
        };
        if (box.x0 < left || box.x1 > width || box.y0 < 0 || box.y1 > padT + plotH) continue;
        if (!cd.free && polys.some(function (pl) { return hitsLine(box, pl, 4); })) continue;
        if (!cd.free && ty0 !== null && ty0 >= box.y0 - 4 && ty0 <= box.y1 + 4) continue;
        pick = cd;
      }
      if (pick) {
        var et = svg('text', { x: pick.x, y: pick.y, 'text-anchor': pick.anchor, 'class': 'ops-c-endlabel' }, root);
        et.textContent = endText;
      }
    }

    // 보조선과 시점 표시 점(숨겨 둠)
    this.cross = svg('line', { 'class': 'ops-c-cross', x1: 0, x2: 0, y1: padT, y2: padT + plotH, visibility: 'hidden' }, root);
    this.marks = svg('g', { 'class': 'ops-c-marks', visibility: 'hidden' }, root);

    if (old) plot.replaceChild(root, old);
    else plot.insertBefore(root, this.tip);
    if (!this.tip.hidden) this.show(this.index);
  };

  /* ---------- 시점 보이기 ---------- */

  OpsChart.prototype.show = function (i) {
    var spec = this.spec;
    var g = this.geo;
    if (!spec || !g) return;
    this.index = i;
    var cx = g.x(i);
    if (spec.type === 'bar') {
      this.band.setAttribute('x', String(g.left + g.slot * i));
      this.band.setAttribute('visibility', 'visible');
    } else {
      this.cross.setAttribute('x1', String(cx));
      this.cross.setAttribute('x2', String(cx));
      this.cross.setAttribute('visibility', 'visible');
      while (this.marks.firstChild) this.marks.removeChild(this.marks.firstChild);
      var marks = this.marks;
      spec.series.forEach(function (s) {
        var v = s.values[i];
        if (v === null || v === undefined) return;
        svg('circle', { cx: cx, cy: g.y(v), r: 4, 'class': 'ops-c-mark ops-c-mark--' + s.kind }, marks);
      });
      this.marks.setAttribute('visibility', 'visible');
    }

    // 툴팁 — 값이 앞, 이름이 뒤. 글은 textContent 로만 넣는다
    var tip = this.tip;
    tip.textContent = '';
    var title = document.createElement('p');
    title.className = 'ops-tip__title';
    title.textContent = spec.tipTitle(i);
    tip.appendChild(title);
    spec.series.slice().reverse().forEach(function (s) {
      var row = document.createElement('p');
      row.className = 'ops-tip__row';
      var key = document.createElement('span');
      key.className = 'ops-key ops-key--' + (spec.type === 'bar' ? 'bar' : s.kind);
      key.setAttribute('aria-hidden', 'true');
      var val = document.createElement('strong');
      var v = s.values[i];
      val.textContent = v === null || v === undefined ? '—' : spec.value(v);
      var name = document.createElement('span');
      name.textContent = s.name;
      row.appendChild(key);
      row.appendChild(val);
      row.appendChild(name);
      tip.appendChild(row);
    });
    var cv = this.cur().values[i];
    if (spec.target && cv !== null && cv !== undefined) {
      var st = document.createElement('p');
      st.className = 'ops-tip__state';
      st.textContent = spec.over(cv) ? '목표 넘음' : '목표 안';
      tip.appendChild(st);
    }
    tip.hidden = false;
    var tw = tip.offsetWidth;
    var th = tip.offsetHeight;
    var gap = g.rem * 0.75;
    var tx = cx + gap;
    if (tx + tw > g.width) tx = Math.max(0, cx - gap - tw);
    // 세로 — 그래프 위쪽이 머리줄 밑으로 스크롤돼 있으면 보이는 곳까지 내린다. 그래프 아래로는 나가지 않는다
    var ty = g.padT;
    var head = document.querySelector('.ds-app__top');
    var visibleTop = (head ? head.getBoundingClientRect().bottom : 0) + gap;
    var plotTop = this.plot.getBoundingClientRect().top;
    if (plotTop + ty < visibleTop) ty = visibleTop - plotTop;
    ty = Math.max(0, Math.min(ty, g.height - th));
    tip.style.transform = 'translate(' + Math.round(tx) + 'px,' + Math.round(ty) + 'px)';
  };

  OpsChart.prototype.hide = function () {
    if (this.cross) this.cross.setAttribute('visibility', 'hidden');
    if (this.marks) this.marks.setAttribute('visibility', 'hidden');
    if (this.band) this.band.setAttribute('visibility', 'hidden');
    this.tip.hidden = true;
  };

  OpsChart.prototype.indexAt = function (clientX) {
    var g = this.geo;
    var r = this.plot.getBoundingClientRect();
    var i = Math.floor((clientX - r.left - g.left) / g.slot);
    return Math.max(0, Math.min(this.spec.slots - 1, i));
  };

  OpsChart.prototype.move = function (dir, edge) {
    var n = this.spec.slots;
    var i = this.index;
    if (edge) {
      // Home(dir -1)은 첫 칸부터, End(dir 1)는 끝 칸부터 값이 있는 칸을 찾는다
      i = dir < 0 ? 0 : n - 1;
      while (i >= 0 && i < n && !this.hasValue(i)) i -= dir;
    } else {
      var j = i + dir;
      while (j >= 0 && j < n && !this.hasValue(j)) j += dir;
      if (j >= 0 && j < n) i = j;
    }
    this.show(i);
    this.syncAria();
  };

  OpsChart.prototype.bind = function () {
    var self = this;
    var plot = this.plot;
    var focused = false;
    // Esc 로 닫은 툴팁은 마우스가 같은 칸에 있는 동안 다시 띄우지 않는다(WCAG 1.4.13 — 닫을 수 있어야 한다)
    var muted = null;
    plot.addEventListener('pointermove', function (e) {
      if (!self.geo) return;
      var i = self.indexAt(e.clientX);
      if (muted === i) return;
      muted = null;
      self.show(i);
    });
    plot.addEventListener('pointerdown', function (e) {
      if (!self.geo) return;
      muted = null;
      self.show(self.indexAt(e.clientX));
      self.syncAria();
    });
    plot.addEventListener('pointerleave', function () {
      muted = null;
      if (focused) self.show(self.index);
      else self.hide();
    });
    // 마우스로 띄운 툴팁도 포커스와 상관없이 Esc 로 닫는다
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || self.tip.hidden) return;
      muted = self.index;
      self.hide();
    });
    plot.addEventListener('focus', function () {
      focused = true;
      if (self.spec) self.show(self.index);
    });
    plot.addEventListener('blur', function () {
      focused = false;
      self.hide();
    });
    plot.addEventListener('keydown', function (e) {
      if (!self.spec) return;
      var k = e.key;
      if (k === 'ArrowRight' || k === 'ArrowUp') { e.preventDefault(); self.move(1); }
      else if (k === 'ArrowLeft' || k === 'ArrowDown') { e.preventDefault(); self.move(-1); }
      else if (k === 'Home') { e.preventDefault(); self.move(-1, true); }
      else if (k === 'End') { e.preventDefault(); self.move(1, true); }
      else if (k === 'Escape' && !self.tip.hidden) { e.preventDefault(); e.stopPropagation(); muted = self.index; self.hide(); }
    });
  };

  window.OpsChart = OpsChart;
})();
