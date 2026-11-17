/*
 * 아이소메트릭 그림의 좌표 계산 — 설계서 3-1절(그림 구성)·3-2절(보는 범위)
 *
 * - tools/build-scene.mjs(정적 그림을 index.html 에 넣는다)와 js/app.js(움직임)가 같이 쓴다.
 * - 섬·명소의 자리와 크기는 3D 판(island-park)의 js/scene/scene.js 와 같은 값이다.
 *   세계 좌표: x 는 동쪽, z 는 남쪽, y 는 위쪽.
 * - 일반 스크립트다. 파일을 더블클릭해 열어도(file://) 돌도록 ES 모듈을 쓰지 않는다.
 */
(function (root) {
  'use strict';

  const TAU = Math.PI * 2;
  const DEG = Math.PI / 180;

  /* ---------- 투영 — 2:1 아이소메트릭, 남동쪽 위에서 내려본다(3D 처음 시점과 같은 쪽) ---------- */

  /** 세계 1 이 그림에서 차지하는 길이 */
  const UNIT = 20;
  /** 높이 1 이 그림에서 차지하는 길이(30° 내려보기) */
  const RISE = UNIT * Math.sqrt(1.5);
  /** 보는 쪽 — 이 방향을 보는 면만 그리고, 이 방향으로 가까운 것을 나중에 그린다 */
  const VIEW = [Math.SQRT1_2 * Math.cos(Math.PI / 6), 0.5, Math.SQRT1_2 * Math.cos(Math.PI / 6)];
  /** 햇빛이 오는 쪽 — 3D 판의 해 위치(-16, 24, 12)와 같다 */
  const LIGHT = normalize([-16, 24, 12]);

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

  function depthOf(p) {
    return dot(p, VIEW);
  }

  /** 면의 밝기 단계 — t(위) · l(햇빛 쪽) · m(비스듬히) · d(그늘) */
  function toneOf(n) {
    const k = dot(n, LIGHT);
    if (k >= 0.6) return 't';
    if (k >= 0.25) return 'l';
    if (k >= -0.1) return 'm';
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
    return { pts2: pts.map(project), cls: 'm-' + mat + '-' + toneOf(n), depth: depthOf(c) };
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
    faces.push(face(top, topMat || mat, null, [0, 1, 0]));
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

  /** 방향을 가진 상자. ax·ay·az 는 단위 축, h 는 반 길이 */
  function orientedBox(c, ax, ay, az, h, mat) {
    const corner = (sx, sy, sz) => add(add(add(c, ax, sx * h[0]), ay, sy * h[1]), az, sz * h[2]);
    const p = {};
    [-1, 1].forEach((sx) => [-1, 1].forEach((sy) => [-1, 1].forEach((sz) => (p[sx + ',' + sy + ',' + sz] = corner(sx, sy, sz)))));
    const q = (a, b, cc, d) => [p[a], p[b], p[cc], p[d]];
    return sortFaces([
      face(q('1,-1,-1', '1,1,-1', '1,1,1', '1,-1,1'), mat, c),
      face(q('-1,-1,-1', '-1,-1,1', '-1,1,1', '-1,1,-1'), mat, c),
      face(q('-1,1,-1', '-1,1,1', '1,1,1', '1,1,-1'), mat, c),
      face(q('-1,-1,-1', '1,-1,-1', '1,-1,1', '-1,-1,1'), mat, c),
      face(q('-1,-1,1', '1,-1,1', '1,1,1', '-1,1,1'), mat, c),
      face(q('-1,-1,-1', '-1,1,-1', '1,1,-1', '1,-1,-1'), mat, c),
    ]);
  }

  /** y 축으로 rot 만큼 돈 상자. 중심 (cx, cy, cz), 크기 w·h·d (three.js BoxGeometry 와 같다) */
  function box(cx, cy, cz, w, h, d, rot, mat) {
    const r = rot || 0;
    return orientedBox([cx, cy, cz], [Math.cos(r), 0, -Math.sin(r)], [0, 1, 0], [Math.sin(r), 0, Math.cos(r)], [w / 2, h / 2, d / 2], mat);
  }

  /* ---------- 섬과 명소 자리 — 3D 판 js/scene/scene.js 와 같은 값 ---------- */

  const ISLAND = { rx: 11, rz: 8.6, top: 0.9, points: 24 };
  const HILL = { x: -1.2, z: -4.4, height: 2.0 };
  const HILL_TOP = ISLAND.top + HILL.height;
  const PLAZA = { x: 0.6, z: 1.4 };
  const LIGHTHOUSE = { x: -10.2, z: 0.6 };
  const BOOTH = { x: 0.2, z: 7.3 };
  const CAFE = { x: -3.6, z: 3.6 };

  /** 놀이기구 한 바퀴에 걸리는 시간(초) — 3D 판과 같다 */
  const RIDE_PERIOD = { wave: 4, ferris: 40, carousel: 20, coaster: 12, beam: 8 };

  /** 명소 표지 자리(세계 좌표) — 3D 판의 표지 자리와 같다 */
  const LANDMARK_ANCHOR = {
    pier: [1.6, 1.9, 13.4],
    carousel: [PLAZA.x, 3.9, PLAZA.z],
    ferris: [HILL.x, HILL_TOP + 7.1, HILL.z],
    coaster: [14.2, 3.3, 1.1],
    lighthouse: [LIGHTHOUSE.x, ISLAND.top + 5.0, LIGHTHOUSE.z],
  };

  const FERRIS = {
    hub: [HILL.x, HILL_TOP + 3.7, HILL.z],
    R: 3.0,
    half: 0.42,
    rot: 5 * DEG,
  };
  FERRIS.u = [Math.cos(FERRIS.rot), 0, -Math.sin(FERRIS.rot)];
  FERRIS.w = [Math.sin(FERRIS.rot), 0, Math.cos(FERRIS.rot)];

  const CAROUSEL = { x: PLAZA.x, z: PLAZA.z, y: ISLAND.top, horseRadius: 1.45, horses: 8 };

  const LAMP = [LIGHTHOUSE.x, ISLAND.top + 4.0, LIGHTHOUSE.z];

  const BOAT = { x: 3.3, z: 13.4, rot: 0.15 };

  const COASTER_POINTS = [
    [4.4, 1.7, -3.2],
    [7.4, 3.4, -4.6],
    [10.4, 2.6, -3.6],
    [14.4, 1.8, -0.6],
    [14.2, 2.6, 2.8],
    [10.8, 4.0, 4.6],
    [7.6, 2.0, 4.4],
    [5.0, 1.6, 2.4],
    [3.9, 2.4, -0.4],
  ];
  const COASTER = { samples: 220, chunk: 22, cars: 3 };

  function isOnIsland(x, z, scale) {
    const s = scale || 1;
    return (x / (ISLAND.rx * s)) ** 2 + (z / (ISLAND.rz * s)) ** 2 < 1;
  }

  /** 같은 섬 모양이 매번 나오도록 고정 씨앗 난수를 쓴다(3D 판과 같은 식) */
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

  /* ---------- 롤러코스터 궤도 — three.js CatmullRomCurve3(닫힘, catmullrom, 0.5)와 같은 식 ---------- */

  function makeCurve(points, tension) {
    const l = points.length;
    function hermite(x0, x1, x2, x3, t) {
      const t0 = tension * (x2 - x0);
      const t1 = tension * (x3 - x1);
      const c2 = -3 * x1 + 3 * x2 - 2 * t0 - t1;
      const c3 = 2 * x1 - 2 * x2 + t0 + t1;
      return x1 + t0 * t + c2 * t * t + c3 * t * t * t;
    }
    function pointT(t) {
      const p = l * (((t % 1) + 1) % 1);
      const i = Math.floor(p);
      const w = p - i;
      const p0 = points[(i - 1 + l) % l];
      const p1 = points[i % l];
      const p2 = points[(i + 1) % l];
      const p3 = points[(i + 2) % l];
      return [0, 1, 2].map((k) => hermite(p0[k], p1[k], p2[k], p3[k], w));
    }
    const divisions = 600;
    const lengths = [0];
    let prev = pointT(0);
    for (let k = 1; k <= divisions; k += 1) {
      const cur = pointT(k / divisions);
      lengths.push(lengths[k - 1] + Math.hypot(cur[0] - prev[0], cur[1] - prev[1], cur[2] - prev[2]));
      prev = cur;
    }
    const total = lengths[divisions];
    function uToT(u) {
      const target = (((u % 1) + 1) % 1) * total;
      let lo = 0;
      let hi = divisions;
      while (lo < hi - 1) {
        const mid = (lo + hi) >> 1;
        if (lengths[mid] <= target) lo = mid;
        else hi = mid;
      }
      const seg = lengths[hi] - lengths[lo] || 1;
      return (lo + (target - lengths[lo]) / seg) / divisions;
    }
    return {
      length: total,
      pointAt: (u) => pointT(uToT(u)),
      tangentAt(u) {
        const t = uToT(u);
        const a = pointT(t - 0.0001);
        const b = pointT(t + 0.0001);
        return normalize([b[0] - a[0], b[1] - a[1], b[2] - a[2]]);
      },
    };
  }

  const coasterCurve = makeCurve(COASTER_POINTS, 0.5);

  /* ---------- 움직이는 부분의 자세 — 시간 t(초)에서 그릴 면 ---------- */

  /** 대관람차 바퀴 각도(라디안, 남쪽에서 보아 시계 방향이 음수) */
  function ferrisAngle(t) {
    return -(t / RIDE_PERIOD.ferris) * TAU;
  }

  /** 대관람차 칸 8개 — 칸마다 보이는 면(뒤에서 앞 순서) */
  function ferrisCabins(t) {
    const phi = ferrisAngle(t);
    const out = [];
    for (let i = 0; i < 8; i += 1) {
      const a = ((i + 0.5) / 8) * TAU + phi;
      const pivot = add(add(FERRIS.hub, FERRIS.u, Math.cos(a) * FERRIS.R), [0, 1, 0], Math.sin(a) * FERRIS.R);
      const c = add(pivot, [0, -0.36, 0]);
      out.push(orientedBox(c, FERRIS.u, [0, 1, 0], FERRIS.w, [0.25, 0.275, 0.25], i % 2 ? 'red' : 'white'));
    }
    return out;
  }

  /** 회전목마 말 8마리 — 말마다 위치·기둥·보이는 면, 앞쪽 반원인지 */
  function carouselHorses(t) {
    const psi = (t / RIDE_PERIOD.carousel) * TAU;
    const out = [];
    for (let i = 0; i < CAROUSEL.horses; i += 1) {
      const a = (i / CAROUSEL.horses) * TAU;
      const lx = Math.cos(a) * CAROUSEL.horseRadius;
      const lz = Math.sin(a) * CAROUSEL.horseRadius;
      const x = CAROUSEL.x + lx * Math.cos(psi) + lz * Math.sin(psi);
      const z = CAROUSEL.z - lx * Math.sin(psi) + lz * Math.cos(psi);
      const y = CAROUSEL.y + 1.0 + Math.sin(t * 2.2 + i * 1.7) * 0.12;
      const th = psi - a;
      const faces = orientedBox([x, y, z], [Math.cos(th), 0, -Math.sin(th)], [0, 1, 0], [Math.sin(th), 0, Math.cos(th)], [0.1, 0.16, 0.3], i % 2 ? 'red' : 'white');
      out.push({
        front: (x - CAROUSEL.x) * VIEW[0] + (z - CAROUSEL.z) * VIEW[2] > 0,
        pole: [project([x, CAROUSEL.y + 0.25, z]), project([x, CAROUSEL.y + 2.26, z])],
        faces,
      });
    }
    return out;
  }

  /** 코스터 차량 3칸 — 칸마다 궤도 조각 번호와 보이는 면(차체 다음에 의자) */
  function coasterCars(t) {
    const u0 = (t / RIDE_PERIOD.coaster) % 1;
    const spacing = 0.82 / coasterCurve.length;
    const out = [];
    for (let i = 0; i < COASTER.cars; i += 1) {
      const u = (u0 - i * spacing + 2) % 1;
      const p = coasterCurve.pointAt(u);
      const fwd = coasterCurve.tangentAt(u);
      const side = normalize(cross([0, 1, 0], fwd));
      const up = cross(fwd, side);
      const body = orientedBox(add(p, up, 0.2), side, up, fwd, [0.31, 0.17, 0.36], 'red');
      const seat = orientedBox(add(add(p, up, 0.42), fwd, -0.12), side, up, fwd, [0.25, 0.08, 0.15], 'white');
      const index = Math.min(COASTER.samples - 1, Math.floor(u * COASTER.samples));
      out.push({ chunk: Math.floor(index / COASTER.chunk), body, seat });
    }
    return out;
  }

  /** 등대 불빛 두 줄기 — 줄기마다 [긴 옅은 면, 짧은 진한 면]의 점 */
  function lighthouseBeams(t) {
    const beta = (t / RIDE_PERIOD.beam) * TAU;
    return [0, Math.PI].map((off) => {
      const b = beta + off;
      const dir = [Math.cos(b), 0, -Math.sin(b)];
      const wide = [Math.sin(b), 0, Math.cos(b)];
      const wedge = (len, half) => [project(LAMP), project(add(add(LAMP, dir, len), wide, half)), project(add(add(LAMP, dir, len), wide, -half))];
      return [wedge(7.5, 0.9), wedge(3.6, 0.45)];
    });
  }

  /** 배가 물결에 흔들리는 높이(그림 단위, 아래가 +) */
  function boatOffset(t) {
    return -Math.sin(t * 1.3) * 0.09 * RISE;
  }

  /** 물결 무늬가 옆으로 밀리는 거리(그림 단위) */
  function waveOffset(t) {
    return Math.sin((t / RIDE_PERIOD.wave) * TAU) * 4;
  }

  root.IsoGeom = {
    TAU,
    DEG,
    UNIT,
    RISE,
    VIEW,
    project,
    depthOf,
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
    isOnIsland,
    ISLAND,
    HILL,
    HILL_TOP,
    PLAZA,
    LIGHTHOUSE,
    BOOTH,
    CAFE,
    RIDE_PERIOD,
    LANDMARK_ANCHOR,
    FERRIS,
    CAROUSEL,
    LAMP,
    BOAT,
    COASTER,
    coasterCurve,
    ferrisAngle,
    ferrisCabins,
    carouselHorses,
    coasterCars,
    lighthouseBeams,
    boatOffset,
    waveOffset,
  };
})(typeof window !== 'undefined' ? window : globalThis);
