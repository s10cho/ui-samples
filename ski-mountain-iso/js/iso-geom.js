/*
 * 아이소메트릭 그림의 좌표 계산 — 설계서 3-1절(그림 구성)·3-2절(보는 범위)
 *
 * - tools/build-scene.mjs(정적 그림을 index.html 에 넣는다)와 js/scene.js(움직임)가 같이 쓴다.
 * - 면·원기둥·상자 계산은 공용 뼈대 js/iso2d.js 의 IsoCore 에 있다. 여기에는 투영·햇빛과 산 그림만 둔다.
 * - 산 높이 함수·슬로프 길·명소 자리·리프트·스키어는 3D 판(ski-mountain)의 js/scene/scene.js 와 같은 식·같은 값이다.
 *   세계 좌표: x 는 동쪽, z 는 남쪽, y 는 위쪽.
 * - 일반 스크립트다. 파일을 더블클릭해 열어도(file://) 돌도록 ES 모듈을 쓰지 않는다.
 */
(function (root) {
  'use strict';

  const C = root.IsoCore;
  if (!C) return;
  const { TAU, DEG, clamp, lerp, dot, cross, add, normalize, fmt, pointsAttr, ringPoints, seeded } = C;
  const smoothstep = (e0, e1, x) => {
    const t = clamp((x - e0) / (e1 - e0), 0, 1);
    return t * t * (3 - 2 * t);
  };
  /** 두 값 가운데 큰 쪽을 고르되 이음매를 둥글게 한다(봉우리끼리 붙는 자리) */
  const smoothMax = (a, b, k) => {
    const h = clamp(0.5 + (0.5 * (a - b)) / k, 0, 1);
    return lerp(b, a, h) + k * h * (1 - h);
  };

  /* ---------- 투영 — 원근 없음, 내려보는 각 30°, 남남동쪽(3D 처음 시점과 같은 방위 20°)에서 본다 ---------- */

  /** 세계 1 이 그림에서 차지하는 길이(옆 방향) */
  const SCALE = 20;
  const AZIMUTH = 20 * DEG;
  const ELEVATION = 30 * DEG;
  const CA = Math.cos(AZIMUTH);
  const SA = Math.sin(AZIMUTH);
  const SE = Math.sin(ELEVATION);
  const CE = Math.cos(ELEVATION);
  /** 보는 쪽(그림에서 앞을 향하는 단위 벡터) — 이 방향을 보는 면만 그린다 */
  const VIEW = [CE * SA, SE, CE * CA];
  /** 햇빛이 오는 쪽 — 3D 판의 해 위치(-24, 30, 22)와 같다 */
  const LIGHT = normalize([-24, 30, 22]);

  /** 땅 위 자리 → 보는 방향에 맞춘 좌표 [u 오른쪽, v 앞쪽] */
  function toUV(x, z) {
    return [x * CA - z * SA, x * SA + z * CA];
  }
  function fromUV(u, v) {
    return [u * CA + v * SA, -u * SA + v * CA];
  }

  function project(p) {
    return [(p[0] * CA - p[2] * SA) * SCALE, (p[0] * SA + p[2] * CA) * SCALE * SE - p[1] * SCALE * CE];
  }

  /** 면 계산 — 밝기 경계: 윗면 0.6 · 햇빛 쪽 0.32 · 비스듬한 면 0.1 */
  const { depthOf, toneOf, face, sortFaces, frustum, cone, orientedBox, box } = C.create({
    project,
    view: VIEW,
    light: LIGHT,
    tones: [0.6, 0.32, 0.1],
  });

  /* ---------- 높이 함수 — 3D 판과 같은 식 ---------- */

  function hash2(ix, iz) {
    let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967295;
  }

  /** 격자 값 노이즈 — 결과는 -1~1 */
  function valueNoise(x, z) {
    const ix = Math.floor(x);
    const iz = Math.floor(z);
    const fx = x - ix;
    const fz = z - iz;
    const sx = fx * fx * (3 - 2 * fx);
    const sz = fz * fz * (3 - 2 * fz);
    const a = lerp(hash2(ix, iz), hash2(ix + 1, iz), sx);
    const b = lerp(hash2(ix, iz + 1), hash2(ix + 1, iz + 1), sx);
    return lerp(a, b, sz) * 2 - 1;
  }

  function fbm(x, z, octaves) {
    const n = octaves || 4;
    let sum = 0;
    let amp = 0.5;
    let freq = 1;
    for (let i = 0; i < n; i += 1) {
      sum += amp * valueNoise(x * freq + i * 17.3, z * freq - i * 9.1);
      freq *= 2.03;
      amp *= 0.5;
    }
    return sum;
  }

  /* ---------- 산 크기와 명소 자리 — 3D 판과 같은 값 ---------- */

  const PEAK = { x: 0, z: -6, h: 19 };
  const PLAZA = { x: 0.6, z: 16.6, rx: 10.5, rz: 4.4, y: 0.3 };
  const LODGE = { x: -2.6, z: 17.4, rot: 0.2 };
  const LIFT = { bottom: [2.4, 14.4], top: [0.9, -2.0], towers: 5, chairs: 22, gauge: 0.55 };

  /** 한 바퀴·한 번에 걸리는 시간(초) — 3D 판과 같다 */
  const MOTION_PERIOD = { lift: 60, easyRun: 22, expertRun: 11 };

  /** 점 여러 개를 지나는 부드러운 길(uniform Catmull-Rom)을 촘촘한 꺾은선으로 */
  function sampleCurve(points, perSegment) {
    const p = [points[0]].concat(points, [points[points.length - 1]]);
    const out = [];
    const at = (a, b, c, d, t, k) => {
      const t2 = t * t;
      const t3 = t2 * t;
      return 0.5 * (2 * b[k] + (c[k] - a[k]) * t + (2 * a[k] - 5 * b[k] + 4 * c[k] - d[k]) * t2 + (3 * b[k] - a[k] - 3 * c[k] + d[k]) * t3);
    };
    for (let i = 1; i < p.length - 2; i += 1) {
      for (let s = 0; s < perSegment; s += 1) {
        const t = s / perSegment;
        out.push([at(p[i - 1], p[i], p[i + 1], p[i + 2], t, 0), at(p[i - 1], p[i], p[i + 1], p[i + 2], t, 1)]);
      }
    }
    out.push(points[points.length - 1]);
    return out;
  }

  function distToSegment(px, pz, ax, az, bx, bz) {
    const vx = bx - ax;
    const vz = bz - az;
    const t = clamp(((px - ax) * vx + (pz - az) * vz) / (vx * vx + vz * vz || 1), 0, 1);
    return Math.hypot(px - (ax + vx * t), pz - (az + vz * t));
  }

  /** 꺾은선 — 길이 비율로 자리 찾기, 점까지 거리 */
  function polyline(samples) {
    const cum = [0];
    for (let i = 1; i < samples.length; i += 1) {
      cum.push(cum[i - 1] + Math.hypot(samples[i][0] - samples[i - 1][0], samples[i][1] - samples[i - 1][1]));
    }
    const length = cum[cum.length - 1];
    const xs = samples.map((s) => s[0]);
    const zs = samples.map((s) => s[1]);
    const bbox = { x0: Math.min.apply(null, xs), x1: Math.max.apply(null, xs), z0: Math.min.apply(null, zs), z1: Math.max.apply(null, zs) };
    return {
      samples,
      length,
      /** u(0~1) 자리의 점과 진행 방향 */
      at(u, out) {
        const s = clamp(u, 0, 1) * length;
        let i = 1;
        while (i < cum.length - 1 && cum[i] < s) i += 1;
        const seg = cum[i] - cum[i - 1] || 1;
        const k = (s - cum[i - 1]) / seg;
        const a = samples[i - 1];
        const b = samples[i];
        out.x = lerp(a[0], b[0], k);
        out.z = lerp(a[1], b[1], k);
        out.tx = (b[0] - a[0]) / seg;
        out.tz = (b[1] - a[1]) / seg;
        return out;
      },
      distance(x, z, far) {
        if (x < bbox.x0 - far || x > bbox.x1 + far || z < bbox.z0 - far || z > bbox.z1 + far) return Infinity;
        let d = Infinity;
        for (let i = 1; i < samples.length; i += 1) {
          const a = samples[i - 1];
          const b = samples[i];
          d = Math.min(d, distToSegment(x, z, a[0], a[1], b[0], b[1]));
        }
        return d;
      },
    };
  }

  /** 슬로프 길(위에서 아래로, xz). 같은 길로 땅을 다지고 스키어가 내려온다 */
  const RUNS = {
    easy: {
      half: 1.9,
      line: polyline(sampleCurve([[4.6, -1.4], [8.9, 2.4], [6.2, 6.4], [9.9, 10.2], [6.0, 14.4]], 10)),
    },
    expert: {
      half: 1.35,
      line: polyline(sampleCurve([[-2.6, -3.2], [-5.2, 2.0], [-7.0, 7.8], [-5.4, 14.0]], 10)),
    },
  };
  const RUN_LIST = [RUNS.easy, RUNS.expert];
  const GROOM_FADE = 1.6;

  function massif(x, z) {
    const main = PEAK.h * Math.pow(clamp(1 - Math.hypot(x - PEAK.x, (z - PEAK.z) / 0.92) / 25, 0, 1), 1.7);
    const west = 11.5 * Math.pow(clamp(1 - Math.hypot(x + 13.5, z + 9) / 12.5, 0, 1), 1.5);
    const east = 8.6 * Math.pow(clamp(1 - Math.hypot((x - 12.5) / 1.35, z + 8.5) / 11, 0, 1), 1.4);
    return smoothMax(main, smoothMax(west, east, 1.5), 1.5);
  }

  /** 슬로프 길 위(1)에서 바깥(0)까지 — 다진 눈의 정도 */
  function groomMask(x, z) {
    let g = 0;
    RUN_LIST.forEach((run) => {
      const d = run.line.distance(x, z, run.half + GROOM_FADE);
      if (d < Infinity) g = Math.max(g, 1 - smoothstep(run.half, run.half + GROOM_FADE, d));
    });
    return g;
  }

  function plazaMask(x, z) {
    const d = Math.hypot((x - PLAZA.x) / PLAZA.rx, (z - PLAZA.z) / PLAZA.rz);
    return 1 - smoothstep(0.8, 1.25, d);
  }

  /** 땅 바깥쪽은 골짜기 바닥과 같은 높이·색으로 둥글게 녹인다 */
  const edgeFade = (x, z) => 1 - smoothstep(22, 32, Math.hypot(x, z - 2));

  function rawHeight(x, z) {
    const base = massif(x, z);
    const relief = smoothstep(0.3, 5, base);
    const ridge = 1 - Math.abs(valueNoise(x * 0.07 + 11, z * 0.07 + 5));
    const detail = (fbm(x * 0.11 + 3.1, z * 0.11 - 1.7) * 1.7 + (ridge - 0.5) * 1.5) * (0.5 + base / PEAK.h);
    const g = groomMask(x, z);
    let h = base + relief * detail * (1 - 0.85 * g);
    const bump = (fbm(x * 0.08 - 7, z * 0.08 + 2, 2) + 1) * 0.25 * edgeFade(x, z);
    h = Math.max(h, 0) + bump * (1 - relief);
    return lerp(h, PLAZA.y, plazaMask(x, z));
  }

  const SUMMIT_Y = rawHeight(PEAK.x, PEAK.z);

  /** 땅 높이 — 땅 면·나무·건물·스키어·표지가 모두 이 함수를 쓴다 */
  function terrainHeight(x, z) {
    const h = rawHeight(x, z);
    const top = 1 - smoothstep(1.2, 2.4, Math.hypot(x - PEAK.x, z - PEAK.z));
    return lerp(h, SUMMIT_Y, top);
  }

  const liftDistance = (x, z) => distToSegment(x, z, LIFT.bottom[0], LIFT.bottom[1], LIFT.top[0], LIFT.top[1]);

  /** 나무 선 아래 숲인가 — 땅 색(숲 바닥)과 나무 자리가 같은 조건을 쓴다 */
  function isForest(x, z, h) {
    const treeLine = 8.2 + valueNoise(x * 0.18 + 4, z * 0.18) * 1.6;
    if (h > treeLine) return false;
    const reach = Math.hypot(x / 25, (z - 2.5) / 22) + valueNoise(x * 0.16 - 6, z * 0.16 + 3) * 0.12;
    if (reach > 1) return false;
    if (valueNoise(x * 0.13 - 2, z * 0.13 + 8) < -0.22) return false;
    if (plazaMask(x, z) > 0.02 || groomMask(x, z) > 0.02) return false;
    if (liftDistance(x, z) < 1.8) return false;
    return Math.hypot(x - PEAK.x, z - PEAK.z) > 3;
  }

  /** 명소 표지 자리(세계 좌표) — 3D 판의 표지 자리와 같다 */
  function landmarkAnchors() {
    const run = (key, u) => {
      const p = RUNS[key].line.at(u, {});
      return [p.x, terrainHeight(p.x, p.z), p.z];
    };
    const easyMark = run('easy', 0.42);
    const expertMark = run('expert', 0.5);
    const lodgeY = terrainHeight(LODGE.x, LODGE.z);
    // 리프트 표지는 줄 위쪽(68% 지점)에 단다 — 줄 가운데에 달면 상급 슬로프 표지와 겹친다
    const f = 0.68;
    const lx = lerp(LIFT.bottom[0], LIFT.top[0], f);
    const lz = lerp(LIFT.bottom[1], LIFT.top[1], f);
    const cable = lerp(terrainHeight(LIFT.bottom[0], LIFT.bottom[1]) + 2.0, terrainHeight(LIFT.top[0], LIFT.top[1]) + 2.0, f);
    const liftY = Math.max(terrainHeight(lx, lz) + 2.8, cable) + 1.8;
    return {
      lift: [lx, liftY, lz],
      easy: [easyMark[0], easyMark[1] + 2.0, easyMark[2]],
      expert: [expertMark[0], expertMark[1] + 2.0, expertMark[2]],
      lodge: [LODGE.x, lodgeY + 3.6, LODGE.z],
      summit: [PEAK.x, SUMMIT_Y + 3.4, PEAK.z],
    };
  }

  /* ---------- 리프트 — 줄이 지나는 점과 의자가 도는 고리 ---------- */

  const LIFT_GEOM = (() => {
    const bx = LIFT.bottom[0];
    const bz = LIFT.bottom[1];
    const tx = LIFT.top[0];
    const tz = LIFT.top[1];
    const run = Math.hypot(tx - bx, tz - bz);
    const ux = (tx - bx) / run;
    const uz = (tz - bz) / run;
    const sideX = -uz; // 오르는 줄 쪽(진행 방향의 왼쪽)
    const sideZ = ux;
    const bottomY = terrainHeight(bx, bz) + 2.0;
    const topY = terrainHeight(tx, tz) + 2.0;
    const stops = [{ x: bx, z: bz, y: bottomY, ground: terrainHeight(bx, bz) }];
    for (let i = 1; i <= LIFT.towers; i += 1) {
      const f = i / (LIFT.towers + 1);
      const x = lerp(bx, tx, f);
      const z = lerp(bz, tz, f);
      const ground = terrainHeight(x, z);
      stops.push({ x, z, y: Math.max(lerp(bottomY, topY, f), ground + 2.8), ground, tower: true });
    }
    stops.push({ x: tx, z: tz, y: topY, ground: terrainHeight(tx, tz) });
    const g = LIFT.gauge;
    const loop = stops
      .map((p) => [p.x + sideX * g, p.y, p.z + sideZ * g])
      .concat(
        stops
          .slice()
          .reverse()
          .map((p) => [p.x - sideX * g, p.y, p.z - sideZ * g]),
      );
    loop.push(loop[0]);
    const cum = [0];
    for (let i = 1; i < loop.length; i += 1) {
      cum.push(cum[i - 1] + Math.hypot(loop[i][0] - loop[i - 1][0], loop[i][1] - loop[i - 1][1], loop[i][2] - loop[i - 1][2]));
    }
    return { stops, loop, cum, total: cum[cum.length - 1], ux, uz, sideX, sideZ, yaw: Math.atan2(ux, uz) };
  })();

  /** 시각 t(초)의 의자 22개 — 줄에 매달린 점(세계 좌표)과 오르는 쪽인지 */
  function liftChairs(t) {
    const { loop, cum, total, ux, uz } = LIFT_GEOM;
    const shift = ((t / MOTION_PERIOD.lift) % 1) * total;
    const out = [];
    for (let c = 0; c < LIFT.chairs; c += 1) {
      const s = (shift + (c / LIFT.chairs) * total) % total;
      let i = 1;
      while (i < cum.length - 1 && cum[i] < s) i += 1;
      const k = (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
      const p = loop[i - 1];
      const q = loop[i];
      out.push({
        p: [lerp(p[0], q[0], k), lerp(p[1], q[1], k), lerp(p[2], q[2], k)],
        up: (q[0] - p[0]) * ux + (q[2] - p[2]) * uz >= 0,
      });
    }
    return out;
  }

  /** 의자 모양(오르는 쪽·내려오는 쪽) — 매달린 점을 원점으로 한 면. 3D 판 의자와 같은 크기 */
  function chairFaces(up) {
    const f = up ? [LIFT_GEOM.ux, 0, LIFT_GEOM.uz] : [-LIFT_GEOM.ux, 0, -LIFT_GEOM.uz];
    const side = [f[2], 0, -f[0]];
    const yAxis = [0, 1, 0];
    const at = (lx, ly, lz) => add(add(add([0, 0, 0], side, lx), yAxis, ly), f, lz);
    return {
      hanger: [project([0, 0, 0]), project([0, -0.75, 0])],
      seat: orientedBox(at(0, -0.8, 0.05), side, yAxis, f, [0.31, 0.04, 0.17], 'accent'),
      back: orientedBox(at(0, -0.62, -0.13), side, yAxis, f, [0.31, 0.17, 0.03], 'accent'),
    };
  }

  /* ---------- 스키어 — 3D 판과 같은 길·주기·흔들림 ---------- */

  const SKIERS = [
    { run: 'easy', period: MOTION_PERIOD.easyRun, phase: 0.1, turns: 5, jacket: 'accent' },
    { run: 'easy', period: MOTION_PERIOD.easyRun, phase: 0.6, turns: 4, jacket: 'dark' },
    { run: 'expert', period: MOTION_PERIOD.expertRun, phase: 0.25, turns: 6, jacket: 'dark' },
    { run: 'expert', period: MOTION_PERIOD.expertRun, phase: 0.75, turns: 6, jacket: 'accent' },
  ];

  /** 시각 t(초)의 스키어 하나 — 그릴 면과 앞뒤 자리 */
  function skierPose(index, t) {
    const sk = SKIERS[index];
    const run = RUNS[sk.run];
    const u = (t / sk.period + sk.phase) % 1;
    const p = run.line.at(u, {});
    const wave = u * sk.turns * TAU;
    const amp = run.half * 0.55;
    const lateral = Math.sin(wave) * amp;
    // 옆으로 흔들리는 만큼 진행 방향을 튼다
    const slope = (Math.cos(wave) * amp * sk.turns * TAU) / run.line.length;
    const nx = -p.tz;
    const nz = p.tx;
    const x = p.x + nx * lateral;
    const z = p.z + nz * lateral;
    const dx = p.tx + nx * slope;
    const dz = p.tz + nz * slope;
    const len = Math.hypot(dx, dz) || 1;
    const fwd = [dx / len, 0, dz / len];
    const side = [-fwd[2], 0, fwd[0]];
    const y = terrainHeight(x, z);
    const ski = (a, b) => project([x + fwd[0] * a + side[0] * b, y + 0.04, z + fwd[2] * a + side[2] * b]);
    return {
      visible: u > 0.015 && u < 0.985,
      v: toUV(x, z)[1],
      skis: [ski(0.5, 0.17), ski(0.5, -0.17), ski(-0.5, -0.17), ski(-0.5, 0.17)],
      body: orientedBox([x, y + 0.33, z], side, [0, 1, 0], fwd, [0.15, 0.23, 0.12], sk.jacket),
      head: project([x, y + 0.7, z]),
    };
  }

  root.IsoGeom = {
    TAU,
    DEG,
    SCALE,
    VIEW,
    clamp,
    lerp,
    dot,
    cross,
    add,
    normalize,
    toUV,
    fromUV,
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
    hash2,
    valueNoise,
    massif,
    groomMask,
    plazaMask,
    edgeFade,
    terrainHeight,
    isForest,
    PEAK,
    PLAZA,
    LODGE,
    LIFT,
    LIFT_GEOM,
    RUNS,
    SUMMIT_Y,
    SKIERS,
    MOTION_PERIOD,
    landmarkAnchors,
    liftChairs,
    chairFaces,
    skierPose,
  };
})(typeof window !== 'undefined' ? window : globalThis);
