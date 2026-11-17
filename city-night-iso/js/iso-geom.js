/*
 * 아이소메트릭 그림의 좌표 계산 — 설계서 3-1절(그림 구성)·3-2절(보는 범위)
 *
 * - tools/build-scene.mjs(정적 그림을 index.html 에 넣는다)와 js/app.js(움직임)가 같이 쓴다.
 * - 도시 배치는 3D 판(city-night)의 js/scene/scene.js 와 같은 값이다.
 *   세계 좌표: x 는 동쪽, z 는 남쪽, y 는 위쪽.
 * - 일반 스크립트다. 파일을 더블클릭해 열어도(file://) 돌도록 ES 모듈을 쓰지 않는다.
 */
(function (root) {
  'use strict';

  const TAU = Math.PI * 2;

  /* ---------- 투영 — 2:1 아이소메트릭, 남동쪽 위에서 내려본다(3D 처음 시점과 같은 쪽) ---------- */

  /** 세계 1 이 그림에서 차지하는 길이 */
  const UNIT = 20;
  /** 높이 1 이 그림에서 차지하는 길이(30° 내려보기) */
  const RISE = UNIT * Math.sqrt(1.5);
  /** 보는 쪽 — 이 방향을 보는 면만 그린다 */
  const VIEW = [Math.SQRT1_2 * Math.cos(Math.PI / 6), 0.5, Math.SQRT1_2 * Math.cos(Math.PI / 6)];
  /** 햇빛이 오는 쪽 — 3D 판의 해(서남서, -26·10.5·9)와 같은 방향에서 높이만 올렸다. 윗면이 가장 밝게 읽힌다 */
  const LIGHT = normalize([-2, 2.4, 1.2]);
  /** 바닥(y=0)에 눕는 것을 바닥 좌표(x, z) 그대로 적을 때 쓰는 변환 */
  const GROUND_MATRIX = `matrix(${UNIT} ${UNIT / 2} ${-UNIT} ${UNIT / 2} 0 0)`;

  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function add(a, b, k) {
    const s = k === undefined ? 1 : k;
    return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
  }
  function normalize(a) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [a[0] / l, a[1] / l, a[2] / l];
  }

  function project(p) {
    return [(p[0] - p[2]) * UNIT, ((p[0] + p[2]) * UNIT) / 2 - p[1] * RISE];
  }

  /** 면의 밝기 단계 — t(위) · l(햇빛 쪽) · m(비스듬히) · d(그늘) */
  function toneOf(n) {
    const k = dot(n, LIGHT);
    if (k >= 0.6) return 't';
    if (k >= 0.25) return 'l';
    if (k >= -0.25) return 'm';
    return 'd';
  }

  function fmt(v) {
    return (Math.round(v * 10) / 10).toString();
  }

  function pointsAttr(pts2) {
    return pts2.map((p) => fmt(p[0]) + ',' + fmt(p[1])).join(' ');
  }

  /* ---------- 면 ---------- */

  function newellNormal(pts) {
    let nx = 0;
    let ny = 0;
    let nz = 0;
    for (let i = 0; i < pts.length; i += 1) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      nx += (a[1] - b[1]) * (a[2] + b[2]);
      ny += (a[2] - b[2]) * (a[0] + b[0]);
      nz += (a[0] - b[0]) * (a[1] + b[1]);
    }
    return normalize([nx, ny, nz]);
  }

  function centroid(pts) {
    const c = [0, 0, 0];
    pts.forEach((p) => {
      c[0] += p[0];
      c[1] += p[1];
      c[2] += p[2];
    });
    return [c[0] / pts.length, c[1] / pts.length, c[2] / pts.length];
  }

  /**
   * 면 하나를 그릴 준비를 한다. 보이지 않는 면은 null.
   * inside 를 주면 면의 바깥쪽을 그 점에서 멀어지는 쪽으로 맞춘다.
   */
  function face(pts, mat, inside, normal) {
    let n = normal || newellNormal(pts);
    const c = centroid(pts);
    if (inside && dot(n, [c[0] - inside[0], c[1] - inside[1], c[2] - inside[2]]) < 0) n = [-n[0], -n[1], -n[2]];
    if (dot(n, VIEW) <= 1e-4) return null;
    return { pts2: pts.map(project), cls: 'm-' + mat + '-' + toneOf(n), depth: dot(c, VIEW), n };
  }

  function sortFaces(faces) {
    return faces.filter(Boolean).sort((a, b) => a.depth - b.depth);
  }

  /* ---------- 입체 ---------- */

  /** 원 둘레의 점. three.js 원기둥과 같은 각도 규칙(x = sin, z = cos) */
  function ringPoints(cx, y, cz, r, segs, rot) {
    const out = [];
    for (let k = 0; k < segs; k += 1) {
      const a = (rot || 0) + (k / segs) * TAU;
      out.push([cx + r * Math.sin(a), y, cz + r * Math.cos(a)]);
    }
    return out;
  }

  /** 원뿔대(원기둥 포함) — 옆면 + 윗면 */
  function frustum(cx, cz, y0, y1, r0, r1, segs, rot, mat, topMat) {
    const bottom = ringPoints(cx, y0, cz, r0, segs, rot);
    const top = ringPoints(cx, y1, cz, r1, segs, rot);
    const inside = [cx, (y0 + y1) / 2, cz];
    const faces = [];
    for (let k = 0; k < segs; k += 1) {
      const j = (k + 1) % segs;
      faces.push(face([bottom[k], bottom[j], top[j], top[k]], mat, inside));
    }
    if (r1 > 0.001) faces.push(face(top, topMat || mat, null, [0, 1, 0]));
    return sortFaces(faces);
  }

  /** 원뿔(지붕·나무) — 바닥은 위에서 보이지 않으므로 옆면만 */
  function cone(cx, cz, y0, y1, r, segs, rot, mat) {
    const base = ringPoints(cx, y0, cz, r, segs, rot);
    const apex = [cx, y1, cz];
    const inside = [cx, y0, cz];
    const faces = [];
    for (let k = 0; k < segs; k += 1) {
      faces.push(face([base[k], base[(k + 1) % segs], apex], mat, inside));
    }
    return sortFaces(faces);
  }

  /** 방향을 가진 상자. ax·ay·az 는 단위 축, h 는 반 길이. skipTop 이면 윗면을 그리지 않는다 */
  function orientedBox(c, ax, ay, az, h, mat, skipTop) {
    const corner = (sx, sy, sz) => add(add(add(c, ax, sx * h[0]), ay, sy * h[1]), az, sz * h[2]);
    const p = {};
    [-1, 1].forEach((sx) => [-1, 1].forEach((sy) => [-1, 1].forEach((sz) => (p[sx + ',' + sy + ',' + sz] = corner(sx, sy, sz)))));
    const q = (a, b, cc, d) => [p[a], p[b], p[cc], p[d]];
    return sortFaces([
      face(q('1,-1,-1', '1,1,-1', '1,1,1', '1,-1,1'), mat, c),
      face(q('-1,-1,-1', '-1,-1,1', '-1,1,1', '-1,1,-1'), mat, c),
      skipTop ? null : face(q('-1,1,-1', '-1,1,1', '1,1,1', '1,1,-1'), mat, c),
      face(q('-1,-1,-1', '1,-1,-1', '1,-1,1', '-1,-1,1'), mat, c),
      face(q('-1,-1,1', '1,-1,1', '1,1,1', '-1,1,1'), mat, c),
      face(q('-1,-1,-1', '-1,1,-1', '1,1,-1', '1,-1,-1'), mat, c),
    ]);
  }

  /** y 축으로 rot 만큼 돈 상자. 중심 (cx, cy, cz), 크기 w·h·d (three.js BoxGeometry 와 같다) */
  function box(cx, cy, cz, w, h, d, rot, mat, skipTop) {
    const r = rot || 0;
    return orientedBox([cx, cy, cz], [Math.cos(r), 0, -Math.sin(r)], [0, 1, 0], [Math.sin(r), 0, Math.cos(r)], [w / 2, h / 2, d / 2], mat, skipTop);
  }

  /** 같은 도시 모양이 매번 나오도록 고정 씨앗 난수를 쓴다(3D 판과 같은 식) */
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6d2b79f5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- 도시 배치 — 3D 판 js/scene/scene.js 와 같은 값 ---------- */

  const RIVER = { base: -1.0, amp: 0.7, k: 0.12, phase: 0.4, half: 2.4, water: -1.1, wallBottom: -1.6 };
  const riverZ = (x) => RIVER.base + RIVER.amp * Math.sin(RIVER.k * x + RIVER.phase);
  const southEdge = (x) => riverZ(x) + RIVER.half;
  const northEdge = (x) => riverZ(x) - RIVER.half;
  const STREET = { promenade: 0.8, road: 1.4 };
  const LOT_GAP = STREET.promenade + STREET.road + 0.2;

  const AVENUE = { x0: 0.2, x1: 1.8, mid: 1.0 };
  const SOUTH_ROAD = { z0: 9.0, z1: 10.4 };
  const RAIL = { z0: 7.0, z1: 8.2, rails: [7.35, 7.85], end: -4.4 };
  const STATION = { x0: -11.8, x1: -4.8, z0: 4.1, z1: 6.3, h: 1.7 };
  const PLATFORM = { z0: 6.3, z1: 6.95 };
  const CLOCK = { x: -3.7, z: 4.8, w: 1.0, h: 4.4 };
  const MARKET = { x0: 3.2, x1: 10.8, rowN: [4.4, 5.5], rowS: [6.7, 7.8] };
  const ALLEY_Z = (MARKET.rowN[1] + MARKET.rowS[0]) / 2;
  const PARK = { x0: -2.6, x1: 5.4, z0: 10.9, z1: 16.6 };
  const FOUNTAIN = { x: 1.4, z: 13.35 };
  const HILL = { x: -5.2, z: -11.2, r: 3.4, h: 1.0 };
  const TOWER = { x: HILL.x, z: HILL.z, base: HILL.h, deck: 9.6, top: 13.6 };
  const BRIDGE = {
    x: AVENUE.mid,
    deckY: 0.04,
    south: southEdge(AVENUE.mid),
    north: northEdge(AVENUE.mid),
    mid: riverZ(AVENUE.mid),
    rise: 2.6,
  };
  BRIDGE.span = (BRIDGE.south - BRIDGE.north) / 2;

  /**
   * 모형 판 — 3D 판의 블록(inCore: 동서 ±15.5, 남북 -16.5~17.5)에 건물 반 칸 여유를 더했다.
   * tools/build-scene.mjs 가 건물이 모두 이 안에 드는지 확인한다.
   */
  const SLAB = { x0: -16.8, x1: 16.8, z0: -18.0, z1: 19.0, bottom: -2.2 };

  /** 3D 판의 명소 표지 자리(세계 좌표) */
  const LANDMARK_ANCHOR = {
    tower: [TOWER.x, TOWER.base + TOWER.top + 0.9, TOWER.z],
    bridge: [BRIDGE.x, BRIDGE.rise + 1.0, BRIDGE.mid],
    station: [CLOCK.x, CLOCK.h + 1.7, CLOCK.z],
    market: [7.0, 2.7, ALLEY_Z],
    fountain: [FOUNTAIN.x, 2.4, FOUNTAIN.z],
  };

  /** 움직임 주기(초) — 3D 판 js/tokens.js 의 PERIOD 와 같다. 배는 판을 한 번 건너는 시간이다(설계서 11절 7번) */
  const PERIOD = { wave: 4, boat: 45, car: 34, fountain: 3, beacon: 2.4 };

  /** 정적 그림에 쓰는 장면 시각(초) — 3D 판의 포스터 시각과 같다. 화면 스크립트가 켜지면 이어서 움직인다 */
  const T0 = 7.4;

  /* ---------- 차 — 3D 판과 같은 길·같은 속도 ---------- */

  const LANE = { south: AVENUE.mid - 0.4, north: AVENUE.mid + 0.4, west: SOUTH_ROAD.z0 + 0.35 };
  const CAR_PATHS = [
    [
      [LANE.south, -64],
      [LANE.south, LANE.west],
      [-64, LANE.west],
    ],
    [
      [64, LANE.west],
      [LANE.north, LANE.west],
      [LANE.north, -64],
    ],
  ].map((points) => {
    const segs = [];
    let total = 0;
    for (let i = 0; i < points.length - 1; i += 1) {
      const [ax, az] = points[i];
      const [bx, bz] = points[i + 1];
      const len = Math.hypot(bx - ax, bz - az);
      segs.push({ ax, az, bx, bz, len, start: total });
      total += len;
    }
    return { segs, total };
  });
  const CARS_PER_PATH = 4;
  /** 차 몸체 재질 — 3D 판 carBody 색에 가장 가까운 그림 재질(흰 구조물·석판·강조·자갈·유리) */
  const CAR_MATS = ['white', 'r2', 'accent', 'stone', 'glass'];

  function pointOnPath(path, u) {
    const d = u * path.total;
    const seg = path.segs.find((s) => d <= s.start + s.len) || path.segs[path.segs.length - 1];
    const k = (d - seg.start) / seg.len;
    return { x: lerp(seg.ax, seg.bx, k), z: lerp(seg.az, seg.bz, k), ry: Math.atan2(seg.bx - seg.ax, seg.bz - seg.az) };
  }

  /** 판 가장자리에서 1.5 안쪽까지 옅어진다(3D 판의 안개 대신) */
  function edgeFade(x, z) {
    const d = Math.min(x - SLAB.x0, SLAB.x1 - x, z - SLAB.z0, SLAB.z1 - z);
    return clamp(d / 1.5, 0, 1);
  }

  /**
   * 차가 달리는 길 조각 — 그리는 순서 안에 빈 묶음으로 두고, 차를 지금 달리는 조각으로 옮긴다.
   * where: north(강 북쪽 물체 사이) · bridge(다리 묶음 안) · south(강 남쪽 물체 사이)
   */
  const LANE_CHUNKS = (() => {
    const out = [];
    const deckN = BRIDGE.north - 0.6;
    const deckS = BRIDGE.south + 0.6;
    const split = (a, b, size) => {
      const n = Math.max(1, Math.round((b - a) / size));
      return Array.from({ length: n }, (_, i) => [a + ((b - a) * i) / n, a + ((b - a) * (i + 1)) / n]);
    };
    split(SLAB.z0 - 2, deckN, 2.25).forEach(([z0, z1]) => out.push({ where: 'north', x0: AVENUE.x0, x1: AVENUE.x1, z0, z1 }));
    split(deckN, deckS, 2.0).forEach(([z0, z1]) => out.push({ where: 'bridge', x0: AVENUE.x0, x1: AVENUE.x1, z0, z1 }));
    split(deckS, SOUTH_ROAD.z0, 2.25).forEach(([z0, z1]) => out.push({ where: 'south', x0: AVENUE.x0, x1: AVENUE.x1, z0, z1 }));
    split(SLAB.x0 - 2, SLAB.x1 + 2, 2.25).forEach(([x0, x1]) => out.push({ where: 'south', x0, x1, z0: SOUTH_ROAD.z0, z1: SOUTH_ROAD.z1 }));
    return out;
  })();

  function laneChunkOf(x, z) {
    let best = -1;
    let bestD = Infinity;
    LANE_CHUNKS.forEach((c, i) => {
      const dx = Math.max(c.x0 - x, 0, x - c.x1);
      const dz = Math.max(c.z0 - z, 0, z - c.z1);
      const d = dx + dz;
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    return best;
  }

  /** 차 8대 — 차마다 길 조각, 투명도, 몸체·유리 면, 앞뒤 불빛 자리(보이지 않으면 null) */
  function carFrames(t, offsets) {
    const out = [];
    CAR_PATHS.forEach((path, p) => {
      for (let i = 0; i < CARS_PER_PATH; i += 1) {
        const index = p * CARS_PER_PATH + i;
        const at = pointOnPath(path, (t / PERIOD.car + offsets[index]) % 1);
        const onBridge = Math.abs(at.x - BRIDGE.x) < 1.2 && at.z > BRIDGE.north - 0.6 && at.z < BRIDGE.south + 0.6;
        const y = 0.02 + (onBridge ? BRIDGE.deckY : 0);
        const fwd = [Math.sin(at.ry), 0, Math.cos(at.ry)];
        const side = [Math.cos(at.ry), 0, -Math.sin(at.ry)];
        const up = [0, 1, 0];
        const body = orientedBox([at.x, y + 0.17, at.z], side, up, fwd, [0.21, 0.12, 0.43], CAR_MATS[(i + p * 2) % CAR_MATS.length]);
        const cabin = orientedBox(add([at.x, y + 0.36, at.z], fwd, -0.04), side, up, fwd, [0.18, 0.09, 0.22], 'glass');
        const facing = dot(fwd, VIEW);
        out.push({
          chunk: laneChunkOf(at.x, at.z),
          opacity: edgeFade(at.x, at.z),
          body,
          cabin,
          head: facing > 0.05 ? project(add([at.x, y + 0.18, at.z], fwd, 0.45)) : null,
          tail: facing < -0.05 ? project(add([at.x, y + 0.18, at.z], fwd, -0.45)) : null,
        });
      }
    });
    return out;
  }

  /* ---------- 배 · 분수 · 물결 · 타워 불빛 ---------- */

  const WAVE_AMP = 0.045;
  function waveHeight(x, z, t) {
    const w = TAU / PERIOD.wave;
    return WAVE_AMP * 0.5 * (Math.sin(x * 0.5 + t * w) + Math.sin(z * 0.9 - t * w * 0.8 + 1.3));
  }

  /** 배를 그려 둔 자리(이 자리에서 옮긴다) */
  const BOAT_HOME = [0, RIVER.water, riverZ(0) + 0.7];

  /** 배 — 그려 둔 자리에서 옮길 거리(그림 단위)와 투명도. 판의 서쪽 끝 밖에서 동쪽 끝 밖까지 45초 */
  function boatFrame(t) {
    const x0 = SLAB.x0 - 1.5;
    const x1 = SLAB.x1 + 1.5;
    const x = x0 + ((((t / PERIOD.boat) % 1) + 1) % 1) * (x1 - x0);
    const z = riverZ(x) + 0.7;
    const y = RIVER.water + waveHeight(x, z, t) * 0.8;
    const d = project([x - BOAT_HOME[0], y - BOAT_HOME[1], z - BOAT_HOME[2]]);
    return { dx: d[0], dy: d[1], opacity: edgeFade(x, z) };
  }

  /** 분수 물줄기 높이(세계 단위) — 3D 판 jet.scale.y 와 같다 */
  function jetHeight(t) {
    const k = 0.5 + 0.5 * Math.sin((t / PERIOD.fountain) * TAU);
    return 0.75 + k * 0.5;
  }

  /** 분수 물줄기 기둥 — 밑 반지름 0.05, 위 반지름 0.11, 높이 h(그림 단위 네 점) */
  const JET_BASE = [FOUNTAIN.x, 0.8, FOUNTAIN.z];
  function jetPoints(h) {
    const c = project(JET_BASE);
    const w = Math.SQRT2 * UNIT;
    const top = c[1] - h * RISE;
    return [
      [c[0] - 0.05 * w, c[1]],
      [c[0] + 0.05 * w, c[1]],
      [c[0] + 0.11 * w, top],
      [c[0] - 0.11 * w, top],
    ];
  }

  /** 타워 꼭대기 불빛 밝기 — 번쩍이지 않고 2.4초 주기로 천천히(3D 판과 같은 식). 멈추면 1 */
  function beaconLevel(t) {
    return 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((t / PERIOD.beacon) * TAU));
  }

  /** 물결 무늬가 강을 따라 밀리는 거리(세계 단위) */
  function waveShift(t) {
    return Math.sin((t / PERIOD.wave) * TAU) * 0.25;
  }

  root.IsoGeom = {
    TAU,
    UNIT,
    RISE,
    VIEW,
    LIGHT,
    GROUND_MATRIX,
    dot,
    add,
    normalize,
    project,
    toneOf,
    fmt,
    pointsAttr,
    face,
    sortFaces,
    ringPoints,
    frustum,
    cone,
    box,
    orientedBox,
    seeded,
    clamp,
    lerp,
    RIVER,
    riverZ,
    southEdge,
    northEdge,
    STREET,
    LOT_GAP,
    AVENUE,
    SOUTH_ROAD,
    RAIL,
    STATION,
    PLATFORM,
    CLOCK,
    MARKET,
    ALLEY_Z,
    PARK,
    FOUNTAIN,
    HILL,
    TOWER,
    BRIDGE,
    SLAB,
    LANDMARK_ANCHOR,
    PERIOD,
    T0,
    CAR_PATHS,
    CARS_PER_PATH,
    LANE_CHUNKS,
    laneChunkOf,
    carFrames,
    edgeFade,
    BOAT_HOME,
    boatFrame,
    jetHeight,
    jetPoints,
    beaconLevel,
    waveShift,
  };
})(typeof window !== 'undefined' ? window : globalThis);
