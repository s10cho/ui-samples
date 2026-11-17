/*
 * 3D 장면 — 바다 위 섬 놀이공원 (설계서 3-1·3-2·4-2절)
 * 모델·텍스처 파일 없이 모두 코드로 만든다. 저폴리 + 납작한 음영.
 */
import {
  AdditiveBlending,
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DodecahedronGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  HemisphereLight,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Raycaster,
  Scene,
  SphereGeometry,
  TorusGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { BREAKPOINT, CAMERA, QUALITY, RIDE_PERIOD, SCENE_COLOR, SCENE_LIGHT } from '../tokens.js';
import { fitDistance, posterDistance } from '../framing.js';

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const UP = new Vector3(0, 1, 0);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/** 같은 섬 모양이 매번 나오도록 고정 씨앗 난수를 쓴다 */
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

/* ---------- 섬 크기와 명소 자리 ---------- */

const ISLAND = { rx: 11, rz: 8.6, top: 0.9, points: 24 };
const HILL = { x: -1.2, z: -4.4, height: 2.0 };
const HILL_TOP = ISLAND.top + HILL.height;
const PLAZA = { x: 0.6, z: 1.4 };
const LIGHTHOUSE = { x: -10.2, z: 0.6 };
const BOOTH = { x: 0.2, z: 7.3 };
const CAFE = { x: -3.6, z: 3.6 };

/** 명소마다 표지 위치와 고를 때의 시점 */
const LANDMARK_3D = {
  pier: { anchor: [1.6, 1.9, 13.4], target: [2.2, 0.9, 12.2], distance: 18, azimuth: 22, elevation: 28 },
  carousel: { anchor: [PLAZA.x, 3.9, PLAZA.z], target: [PLAZA.x, 1.7, PLAZA.z], distance: 14, azimuth: 35, elevation: 30 },
  ferris: { anchor: [HILL.x, HILL_TOP + 7.1, HILL.z], target: [HILL.x, HILL_TOP + 3.4, HILL.z], distance: 24, azimuth: -25, elevation: 22 },
  coaster: { anchor: [14.2, 3.3, 1.1], target: [9.6, 2.4, 0.8], distance: 19, azimuth: 68, elevation: 28 },
  lighthouse: { anchor: [LIGHTHOUSE.x, ISLAND.top + 5.0, LIGHTHOUSE.z], target: [LIGHTHOUSE.x - 0.4, 3.6, LIGHTHOUSE.z], distance: 16, azimuth: -52, elevation: 22 },
};

const HOME_TARGET = new Vector3(0.4, 2.0, 0.6);

function isOnIsland(x, z, scale = 1) {
  return (x / (ISLAND.rx * scale)) ** 2 + (z / (ISLAND.rz * scale)) ** 2 < 1;
}

/* ---------- 도형 도우미 ---------- */

function geometryFrom(positions) {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(positions, 3));
  g.computeVertexNormals();
  return g;
}

function ring(radii, scale, y) {
  const n = radii.length;
  return radii.map((k, i) => {
    const a = (i / n) * TAU;
    return new Vector3(Math.cos(a) * ISLAND.rx * k * scale, y, Math.sin(a) * ISLAND.rz * k * scale);
  });
}

/** 위를 보는 덮개 — 가운데에서 부채꼴로 나눈다 */
function capGeometry(points, y) {
  const out = [];
  const n = points.length;
  for (let i = 0; i < n; i += 1) {
    const a = points[i];
    const b = points[(i + 1) % n];
    out.push(0, y, 0, b.x, b.y, b.z, a.x, a.y, a.z);
  }
  return geometryFrom(out);
}

/** 안쪽 고리와 바깥 고리를 잇는 비탈 */
function stripGeometry(inner, outer) {
  const out = [];
  const n = inner.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const a = inner[i];
    const b = inner[j];
    const c = outer[i];
    const d = outer[j];
    out.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    out.push(b.x, b.y, b.z, d.x, d.y, d.z, c.x, c.y, c.z);
  }
  return geometryFrom(out);
}

/** 두 점을 잇는 원기둥(기둥·바퀴살·다리) */
function beam(from, to, radius, material, segments = 6) {
  const dir = new Vector3().subVectors(to, from);
  const length = dir.length();
  const mesh = new Mesh(new CylinderGeometry(radius, radius, length, segments, 1), material);
  mesh.position.copy(from).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
  return mesh;
}

function box(w, h, d, material) {
  return new Mesh(new BoxGeometry(w, h, d), material);
}

/** 네모뿔 지붕 */
function pyramid(radius, height, material) {
  const mesh = new Mesh(new ConeGeometry(radius, height, 4, 1), material);
  mesh.rotation.y = Math.PI / 4;
  return mesh;
}

/* ---------- 물결 ---------- */

const WAVE = { amp: 0.1, kx: 0.33, kz: 0.27 };

function waveHeight(x, z, t) {
  const w = TAU / RIDE_PERIOD.wave;
  return WAVE.amp * 0.5 * (Math.sin(x * WAVE.kx + t * w) + Math.sin(z * WAVE.kz - t * w * 0.8 + 1.3));
}

/* ---------- 장면 만들기 ---------- */

export async function createScene(opts) {
  const {
    container,
    labelLayer,
    landmarks,
    canvasLabel,
    getInsetLeft = () => 0,
    durations,
    onSelect = () => {},
    onInteract = () => {},
    onZoomLimits = () => {},
    onContextLost = () => {},
    onContextRestored = () => {},
  } = opts;

  const poster = Boolean(opts.poster);
  const wideQuery = window.matchMedia(`(min-width: ${BREAKPOINT.wide}px)`);
  const isWide = () => wideQuery.matches;

  let quality = opts.quality || (poster || isWide() ? 'high' : 'low');
  let motion = opts.motion !== false;
  let reduced = Boolean(opts.reduced);
  let time = opts.time === 'night' ? 'night' : 'day';

  /* 렌더러 */
  const canvas = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', canvasLabel(time));
  container.prepend(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    powerPreference: 'high-performance',
  });
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  const fog = new Fog(SCENE_COLOR.day.sky, 60, 200);
  scene.fog = fog;
  scene.background = new Color(SCENE_COLOR.day.sky);

  const camera = new PerspectiveCamera(CAMERA.fov, 1, 0.5, 3000);

  /* 재질 */
  const lambert = (color, extra = {}) => new MeshLambertMaterial({ color, flatShading: true, ...extra });
  const mat = {
    grass: lambert(SCENE_COLOR.grass),
    sand: lambert(SCENE_COLOR.sand),
    rock: lambert(SCENE_COLOR.rock),
    tree: lambert(SCENE_COLOR.tree),
    structure: lambert(SCENE_COLOR.structure),
    accent: lambert(SCENE_COLOR.accent),
    bulb: lambert(SCENE_COLOR.structure, { emissive: SCENE_COLOR.bulb, emissiveIntensity: 0 }),
    sea: new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    farSea: lambert(SCENE_COLOR.day.seaDeep),
    beam: new MeshBasicMaterial({
      color: SCENE_COLOR.beam,
      vertexColors: true,
      transparent: true,
      opacity: SCENE_LIGHT.day.beam,
      blending: AdditiveBlending,
      depthWrite: false,
      side: DoubleSide,
    }),
    blob: new MeshBasicMaterial({ color: SCENE_COLOR.shadow, transparent: true, opacity: 0.16, depthWrite: false }),
  };

  const dummy = new Object3D();
  const bulbGeometry = new SphereGeometry(0.075, 6, 4);
  const occluders = [];
  const blobs = new Group();
  scene.add(blobs);

  const addBlob = (x, y, z, r) => {
    const m = new Mesh(new CircleGeometry(r, 12).rotateX(-Math.PI / 2), mat.blob);
    m.position.set(x, y + 0.03, z);
    blobs.add(m);
  };

  /* ---------- 빛 ---------- */

  const hemi = new HemisphereLight(SCENE_COLOR.day.sky, SCENE_COLOR.sand, SCENE_LIGHT.day.hemi);
  scene.add(hemi);

  const key = new DirectionalLight(SCENE_COLOR.day.keyLight, SCENE_LIGHT.day.key);
  key.position.set(-16, 24, 12);
  key.shadow.mapSize.set(QUALITY.shadowMapSize, QUALITY.shadowMapSize);
  Object.assign(key.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 70 });
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.03;
  scene.add(key);

  const plazaLight = new PointLight(SCENE_COLOR.bulb, 0, 13, 2);
  plazaLight.position.set(PLAZA.x, 3.4, PLAZA.z);
  const ferrisLight = new PointLight(SCENE_COLOR.bulb, 0, 15, 2);
  ferrisLight.position.set(HILL.x, HILL_TOP + 4.0, HILL.z + 1.6);
  scene.add(plazaLight, ferrisLight);

  /* ---------- 섬 ---------- */

  const radii = (() => {
    const rand = seeded(7);
    return Array.from({ length: ISLAND.points }, () => 1 + (rand() * 2 - 1) * 0.09);
  })();

  const top = ring(radii, 1, ISLAND.top);
  const shoulder = ring(radii, 1.07, 0.5);
  const beach = ring(radii, 1.17, 0.3);
  const seabed = ring(radii, 1.32, -1.6);

  const islandParts = [
    new Mesh(capGeometry(top, ISLAND.top), mat.grass),
    new Mesh(stripGeometry(top, shoulder), mat.sand),
    new Mesh(stripGeometry(shoulder, beach), mat.sand),
    new Mesh(stripGeometry(beach, seabed), mat.sand),
  ];
  islandParts.forEach((m) => {
    m.receiveShadow = true;
    scene.add(m);
    occluders.push(m);
  });

  const hill = new Mesh(new CylinderGeometry(1.9, 3.6, HILL.height, 9, 1), mat.grass);
  hill.position.set(HILL.x, ISLAND.top + HILL.height / 2, HILL.z);
  hill.rotation.y = 0.3;
  hill.receiveShadow = true;
  hill.castShadow = true;
  scene.add(hill);
  occluders.push(hill);

  /* 광장과 길 */
  const ground = new Group();
  scene.add(ground);
  const plaza = new Mesh(new CircleGeometry(3.0, 12).rotateX(-Math.PI / 2), mat.sand);
  plaza.position.set(PLAZA.x, ISLAND.top + 0.025, PLAZA.z);
  ground.add(plaza);

  const pathSegments = [
    [PLAZA, { x: 1.6, z: 9.2 }],
    [PLAZA, { x: -0.6, z: -1.2 }],
    [PLAZA, { x: 4.4, z: 0.6 }],
    [PLAZA, { x: LIGHTHOUSE.x + 0.9, z: LIGHTHOUSE.z }],
    [PLAZA, CAFE],
  ];
  pathSegments.forEach(([a, b]) => {
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    const p = box(0.9, 0.04, len, mat.sand);
    p.position.set(a.x + dx / 2, ISLAND.top + 0.02, a.z + dz / 2);
    p.rotation.y = Math.atan2(dx, dz);
    ground.add(p);
  });
  ground.traverse((m) => {
    m.receiveShadow = true;
  });

  const distToSegment = (px, pz, a, b) => {
    const vx = b.x - a.x;
    const vz = b.z - a.z;
    const t = clamp(((px - a.x) * vx + (pz - a.z) * vz) / (vx * vx + vz * vz), 0, 1);
    return Math.hypot(px - (a.x + vx * t), pz - (a.z + vz * t));
  };

  /* ---------- 바다 ---------- */

  const seaSegments = quality === 'high' ? QUALITY.seaSegmentsHigh : QUALITY.seaSegmentsLow;
  const seaGeometry = new PlaneGeometry(130, 130, seaSegments, seaSegments).rotateX(-Math.PI / 2);
  const seaPos = seaGeometry.attributes.position;
  const seaBase = new Float32Array(seaPos.count * 2);
  const seaDepth = new Float32Array(seaPos.count);
  for (let i = 0; i < seaPos.count; i += 1) {
    const x = seaPos.getX(i);
    const z = seaPos.getZ(i);
    seaBase[i * 2] = x;
    seaBase[i * 2 + 1] = z;
    const e = Math.sqrt((x / 13.5) ** 2 + (z / 10.8) ** 2);
    seaDepth[i] = clamp((e - 1) / 1.6, 0, 1);
  }
  seaGeometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(seaPos.count * 3), 3));
  const sea = new Mesh(seaGeometry, mat.sea);
  scene.add(sea);

  const farSea = new Mesh(new PlaneGeometry(3000, 3000).rotateX(-Math.PI / 2), mat.farSea);
  farSea.position.y = -0.14;
  scene.add(farSea);

  const updateWaves = (t) => {
    for (let i = 0; i < seaPos.count; i += 1) {
      seaPos.setY(i, waveHeight(seaBase[i * 2], seaBase[i * 2 + 1], t));
    }
    seaPos.needsUpdate = true;
  };

  /* 밤 불빛이 비친 바다 — 불빛 가까운 물결 색을 데운다(따로 그리는 면이 없다) */
  const glowSpots = [
    [1.6, 14.6, 3.2],
    [14.2, 1.1, 3.6],
    [LIGHTHOUSE.x - 1.2, LIGHTHOUSE.z, 3.0],
  ];
  const seaGlow = new Float32Array(seaPos.count);
  for (let i = 0; i < seaPos.count; i += 1) {
    const x = seaBase[i * 2];
    const z = seaBase[i * 2 + 1];
    let g = 0;
    glowSpots.forEach(([gx, gz, r]) => {
      g += Math.exp(-((x - gx) ** 2 + (z - gz) ** 2) / (r * r));
    });
    seaGlow[i] = Math.min(1, g);
  }

  /* ---------- 대관람차 ---------- */

  const ferris = (() => {
    const g = new Group();
    g.position.set(HILL.x, HILL_TOP, HILL.z);
    g.rotation.y = 5 * DEG;
    const hubY = 3.7;
    const R = 3.0;
    const half = 0.42;
    [-1, 1].forEach((sz) => {
      [-1, 1].forEach((sx) => {
        g.add(beam(new Vector3(sx * 1.7, 0, sz * 0.75), new Vector3(0, hubY, sz * half), 0.09, mat.structure));
      });
    });
    g.add(beam(new Vector3(0, hubY, -half - 0.15), new Vector3(0, hubY, half + 0.15), 0.14, mat.structure));

    const wheel = new Group();
    wheel.position.y = hubY;
    g.add(wheel);
    [-1, 1].forEach((sz) => {
      const rim = new Mesh(new TorusGeometry(R, 0.07, 4, 32), mat.accent);
      rim.position.z = sz * half;
      wheel.add(rim);
      for (let i = 0; i < 8; i += 1) {
        const a = (i / 8) * TAU;
        wheel.add(
          beam(new Vector3(0, 0, sz * half), new Vector3(Math.cos(a) * R, Math.sin(a) * R, sz * half), 0.035, mat.structure, 4),
        );
      }
    });

    const cabinGeometry = new BoxGeometry(0.5, 0.55, 0.5);
    const cabins = [];
    for (let i = 0; i < 8; i += 1) {
      const a = ((i + 0.5) / 8) * TAU;
      const pivot = new Group();
      pivot.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
      const cabin = new Mesh(cabinGeometry, i % 2 ? mat.accent : mat.structure);
      cabin.position.y = -0.36;
      pivot.add(cabin);
      wheel.add(pivot);
      cabins.push(pivot);
    }

    const bulbs = new InstancedMesh(bulbGeometry, mat.bulb, 48);
    let k = 0;
    [-1, 1].forEach((sz) => {
      for (let i = 0; i < 24; i += 1) {
        const a = (i / 24) * TAU;
        dummy.position.set(Math.cos(a) * R, Math.sin(a) * R, sz * (half + 0.09));
        dummy.updateMatrix();
        bulbs.setMatrixAt(k, dummy.matrix);
        k += 1;
      }
    });
    wheel.add(bulbs);
    scene.add(g);
    addBlob(HILL.x, HILL_TOP, HILL.z, 2.0);

    return {
      group: g,
      update(t) {
        wheel.rotation.z = -(t / RIDE_PERIOD.ferris) * TAU;
        cabins.forEach((p) => {
          p.rotation.z = -wheel.rotation.z;
        });
      },
    };
  })();

  /* ---------- 회전목마 ---------- */

  const carousel = (() => {
    const g = new Group();
    g.position.set(PLAZA.x, ISLAND.top, PLAZA.z);
    const spin = new Group();
    g.add(spin);

    const platform = new Mesh(new CylinderGeometry(2.0, 2.05, 0.25, 16), mat.structure);
    platform.position.y = 0.125;
    spin.add(platform);
    const pole = new Mesh(new CylinderGeometry(0.16, 0.16, 2.3, 8), mat.structure);
    pole.position.y = 1.15;
    g.add(pole);
    const rim = new Mesh(new CylinderGeometry(2.3, 2.3, 0.22, 14), mat.structure);
    rim.position.y = 2.36;
    spin.add(rim);
    const roof = new Mesh(new ConeGeometry(2.4, 1.0, 14), mat.accent);
    roof.position.y = 2.97;
    spin.add(roof);
    const finial = new Mesh(new SphereGeometry(0.15, 8, 6), mat.accent);
    finial.position.y = 3.55;
    spin.add(finial);

    const horseGeometry = new BoxGeometry(0.2, 0.32, 0.6);
    const horses = [];
    for (let i = 0; i < 8; i += 1) {
      const a = (i / 8) * TAU;
      const x = Math.cos(a) * 1.45;
      const z = Math.sin(a) * 1.45;
      spin.add(beam(new Vector3(x, 0.25, z), new Vector3(x, 2.26, z), 0.025, mat.structure, 4));
      const horse = new Mesh(horseGeometry, i % 2 ? mat.accent : mat.structure);
      horse.position.set(x, 1.0, z);
      horse.rotation.y = -a;
      spin.add(horse);
      horses.push(horse);
    }

    const bulbs = new InstancedMesh(bulbGeometry, mat.bulb, 18);
    for (let i = 0; i < 18; i += 1) {
      const a = (i / 18) * TAU;
      dummy.position.set(Math.cos(a) * 2.33, 2.25, Math.sin(a) * 2.33);
      dummy.updateMatrix();
      bulbs.setMatrixAt(i, dummy.matrix);
    }
    spin.add(bulbs);
    scene.add(g);
    addBlob(PLAZA.x, ISLAND.top, PLAZA.z, 2.5);

    return {
      group: g,
      update(t) {
        spin.rotation.y = (t / RIDE_PERIOD.carousel) * TAU;
        horses.forEach((h, i) => {
          h.position.y = 1.0 + Math.sin(t * 2.2 + i * 1.7) * 0.12;
        });
      },
    };
  })();

  /* ---------- 롤러코스터 ---------- */

  const coaster = (() => {
    const g = new Group();
    const curve = new CatmullRomCurve3(
      [
        [4.4, 1.7, -3.2],
        [7.4, 3.4, -4.6],
        [10.4, 2.6, -3.6],
        [14.4, 1.8, -0.6],
        [14.2, 2.6, 2.8],
        [10.8, 4.0, 4.6],
        [7.6, 2.0, 4.4],
        [5.0, 1.6, 2.4],
        [3.9, 2.4, -0.4],
      ].map(([x, y, z]) => new Vector3(x, y, z)),
      true,
      'catmullrom',
      0.5,
    );

    const samples = 220;
    const left = [];
    const right = [];
    const p = new Vector3();
    const tan = new Vector3();
    const side = new Vector3();
    const ties = new InstancedMesh(new BoxGeometry(0.66, 0.05, 0.12), mat.structure, samples / 2);
    const bulbs = new InstancedMesh(bulbGeometry, mat.bulb, Math.floor(samples / 6) * 2);
    let tieIndex = 0;
    let bulbIndex = 0;
    for (let i = 0; i < samples; i += 1) {
      const u = i / samples;
      curve.getPointAt(u, p);
      curve.getTangentAt(u, tan);
      side.crossVectors(tan, UP).normalize();
      left.push(p.clone().addScaledVector(side, 0.27));
      right.push(p.clone().addScaledVector(side, -0.27));
      if (i % 2 === 0) {
        dummy.position.copy(p);
        dummy.lookAt(p.clone().add(tan));
        dummy.updateMatrix();
        ties.setMatrixAt(tieIndex, dummy.matrix);
        tieIndex += 1;
      }
      if (i % 6 === 0) {
        [0.36, -0.36].forEach((s) => {
          dummy.position.copy(p).addScaledVector(side, s);
          dummy.position.y += 0.05;
          dummy.rotation.set(0, 0, 0);
          dummy.updateMatrix();
          bulbs.setMatrixAt(bulbIndex, dummy.matrix);
          bulbIndex += 1;
        });
      }
      if (i % 9 === 0) {
        const groundY = isOnIsland(p.x, p.z, 1.04) ? ISLAND.top : -0.8;
        g.add(beam(new Vector3(p.x, groundY, p.z), new Vector3(p.x, p.y - 0.06, p.z), 0.06, mat.structure, 5));
      }
    }
    [left, right].forEach((rail) => {
      g.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(rail, true), samples, 0.07, 5, true), mat.accent));
    });
    g.add(ties, bulbs);

    const carGeometry = new BoxGeometry(0.62, 0.34, 0.72);
    const seatGeometry = new BoxGeometry(0.5, 0.16, 0.3);
    const cars = [];
    for (let i = 0; i < 3; i += 1) {
      const car = new Group();
      const body = new Mesh(carGeometry, mat.accent);
      body.position.y = 0.2;
      const seat = new Mesh(seatGeometry, mat.structure);
      seat.position.set(0, 0.42, -0.12);
      car.add(body, seat);
      g.add(car);
      cars.push(car);
    }
    const spacing = 0.82 / curve.getLength();
    scene.add(g);

    const look = new Vector3();
    return {
      group: g,
      update(t) {
        const u0 = (t / RIDE_PERIOD.coaster) % 1;
        cars.forEach((car, i) => {
          const u = (u0 - i * spacing + 2) % 1;
          curve.getPointAt(u, car.position);
          curve.getTangentAt(u, tan);
          look.copy(car.position).add(tan);
          car.lookAt(look);
        });
      },
    };
  })();

  /* ---------- 등대 전망대 ---------- */

  const lighthouse = (() => {
    const g = new Group();
    g.position.set(LIGHTHOUSE.x, ISLAND.top, LIGHTHOUSE.z);
    const segH = 0.9;
    for (let i = 0; i < 4; i += 1) {
      const rb = lerp(0.72, 0.48, i / 4);
      const rt = lerp(0.72, 0.48, (i + 1) / 4);
      const seg = new Mesh(new CylinderGeometry(rt, rb, segH, 10), i % 2 ? mat.accent : mat.structure);
      seg.position.y = segH * (i + 0.5);
      g.add(seg);
    }
    const gallery = new Mesh(new CylinderGeometry(0.72, 0.72, 0.12, 10), mat.structure);
    gallery.position.y = 3.66;
    const lamp = new Mesh(new CylinderGeometry(0.4, 0.4, 0.55, 10), mat.bulb);
    lamp.position.y = 4.0;
    const roof = new Mesh(new ConeGeometry(0.56, 0.5, 10), mat.accent);
    roof.position.y = 4.52;
    g.add(gallery, lamp, roof);

    const beamGroup = new Group();
    beamGroup.position.y = 4.0;
    [0, Math.PI].forEach((rot) => {
      const coneGeometry = new ConeGeometry(0.9, 7.5, 12, 4, true).rotateZ(Math.PI / 2).translate(3.75, 0, 0);
      const conePos = coneGeometry.attributes.position;
      const fade = new Float32Array(conePos.count * 3);
      for (let i = 0; i < conePos.count; i += 1) {
        const k = Math.pow(1 - clamp(conePos.getX(i) / 7.5, 0, 1), 1.6);
        fade.set([k, k, k], i * 3);
      }
      coneGeometry.setAttribute('color', new Float32BufferAttribute(fade, 3));
      const cone = new Mesh(coneGeometry, mat.beam);
      cone.rotation.y = rot;
      cone.castShadow = false;
      beamGroup.add(cone);
    });
    g.add(beamGroup);

    [
      [-1.6, -0.6, 0.8, 1.1],
      [-1.3, -0.5, -1.0, 0.8],
      [-2.3, -0.8, -0.2, 0.9],
      [-0.6, -0.4, 1.6, 0.6],
    ].forEach(([x, y, z, s]) => {
      const rock = new Mesh(new DodecahedronGeometry(s, 0), mat.rock);
      rock.position.set(x, y, z);
      rock.rotation.set(x, z, s);
      g.add(rock);
    });
    scene.add(g);
    addBlob(LIGHTHOUSE.x, ISLAND.top, LIGHTHOUSE.z, 1.0);

    return {
      group: g,
      beams: beamGroup,
      update(t) {
        beamGroup.rotation.y = (t / RIDE_PERIOD.beam) * TAU;
      },
    };
  })();

  /* ---------- 선착장과 배 ---------- */

  const pier = (() => {
    const g = new Group();
    const deck = box(1.3, 0.14, 5.8, mat.structure);
    deck.position.set(1.6, 0.55, 11.9);
    g.add(deck);
    for (let z = 9.4; z <= 14.7; z += 1.3) {
      [-0.55, 0.55].forEach((dx) => {
        g.add(beam(new Vector3(1.6 + dx, -1.0, z), new Vector3(1.6 + dx, 0.5, z), 0.08, mat.rock, 5));
      });
    }
    [1.0, 2.2].forEach((x) => {
      g.add(beam(new Vector3(x, 0.6, 14.6), new Vector3(x, 1.7, 14.6), 0.05, mat.structure, 5));
      const bulb = new Mesh(new SphereGeometry(0.15, 8, 6), mat.bulb);
      bulb.position.set(x, 1.78, 14.6);
      g.add(bulb);
    });

    const boat = new Group();
    const hull = box(1.1, 0.5, 3.0, mat.structure);
    hull.position.y = 0.15;
    const stripe = box(1.12, 0.12, 3.02, mat.accent);
    stripe.position.y = 0.3;
    const cabin = box(0.8, 0.5, 1.0, mat.structure);
    cabin.position.set(0, 0.65, 0.3);
    const cabinRoof = box(0.9, 0.08, 1.1, mat.accent);
    cabinRoof.position.set(0, 0.94, 0.3);
    boat.add(hull, stripe, cabin, cabinRoof);
    boat.position.set(3.3, 0, 13.4);
    boat.rotation.y = 0.15;
    g.add(boat);

    const booth = new Group();
    const boothBody = box(1.0, 0.9, 1.0, mat.structure);
    boothBody.position.y = 0.45;
    const boothRoof = pyramid(0.85, 0.6, mat.accent);
    boothRoof.position.y = 1.2;
    booth.add(boothBody, boothRoof);
    booth.position.set(BOOTH.x, ISLAND.top, BOOTH.z);
    g.add(booth);
    addBlob(BOOTH.x, ISLAND.top, BOOTH.z, 0.9);

    const cafe = new Group();
    const cafeBody = box(1.6, 1.0, 1.2, mat.structure);
    cafeBody.position.y = 0.5;
    const cafeRoof = pyramid(1.25, 0.7, mat.accent);
    cafeRoof.position.y = 1.35;
    cafe.add(cafeBody, cafeRoof);
    cafe.position.set(CAFE.x, ISLAND.top, CAFE.z);
    cafe.rotation.y = 0.4;
    g.add(cafe);
    addBlob(CAFE.x, ISLAND.top, CAFE.z, 1.2);

    scene.add(g);
    return {
      group: g,
      update(t) {
        boat.position.y = waveHeight(3.3, 13.4, t) * 0.9;
        boat.rotation.z = Math.sin(t * 1.3) * 0.04;
      },
    };
  })();

  /* ---------- 나무 ---------- */

  const trees = (() => {
    const rand = seeded(21);
    const spots = [];
    const blocked = (x, z) => {
      if (!isOnIsland(x, z, 0.88)) return true;
      if (Math.hypot(x - PLAZA.x, z - PLAZA.z) < 3.6) return true;
      if (Math.hypot(x - HILL.x, z - HILL.z) < 3.9) return true;
      if (Math.hypot(x - LIGHTHOUSE.x, z - LIGHTHOUSE.z) < 1.9) return true;
      if (x > 3.3 && Math.abs(z) < 5.4) return true;
      if (Math.hypot(x - BOOTH.x, z - BOOTH.z) < 1.4) return true;
      if (Math.hypot(x - CAFE.x, z - CAFE.z) < 1.7) return true;
      if (pathSegments.some(([a, b]) => distToSegment(x, z, a, b) < 0.9)) return true;
      return spots.some((s) => Math.hypot(x - s.x, z - s.z) < 1.4);
    };
    for (let tries = 0; tries < 900 && spots.length < 30; tries += 1) {
      const x = (rand() * 2 - 1) * ISLAND.rx;
      const z = (rand() * 2 - 1) * ISLAND.rz;
      if (!blocked(x, z)) spots.push({ x, z, s: 0.75 + rand() * 0.45, r: rand() * TAU });
    }
    const crowns = new InstancedMesh(new ConeGeometry(0.6, 1.5, 6), mat.tree, spots.length);
    const trunks = new InstancedMesh(new CylinderGeometry(0.11, 0.13, 0.5, 5), mat.rock, spots.length);
    spots.forEach((s, i) => {
      dummy.rotation.set(0, s.r, 0);
      dummy.scale.setScalar(s.s);
      dummy.position.set(s.x, ISLAND.top + 0.25 * s.s, s.z);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      dummy.position.set(s.x, ISLAND.top + (0.5 + 0.75) * s.s, s.z);
      dummy.updateMatrix();
      crowns.setMatrixAt(i, dummy.matrix);
    });
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    scene.add(crowns, trunks);
    return [crowns, trunks];
  })();

  /* 그림자 설정 */
  [ferris.group, carousel.group, coaster.group, lighthouse.group, pier.group, ...trees].forEach((obj) => {
    obj.traverse((m) => {
      if (m.isMesh && m.material !== mat.beam) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });
  });
  lighthouse.beams.traverse((m) => {
    m.castShadow = false;
    m.receiveShadow = false;
  });

  /* ---------- 낮·밤 ---------- */

  let nightness = time === 'night' ? 1 : 0;
  const tmpA = new Color();
  const tmpB = new Color();
  const colorOf = (dayHex, nightHex, t, target) =>
    target.copy(tmpA.set(dayHex)).lerp(tmpB.set(nightHex), t);
  const seaShallow = new Color();
  const seaDeep = new Color();
  const seaColorAttr = seaGeometry.attributes.color;
  const work = new Color();
  const bulbLinear = new Color(SCENE_COLOR.bulb);

  function applyNightness(t) {
    colorOf(SCENE_COLOR.day.sky, SCENE_COLOR.night.sky, t, scene.background);
    fog.color.copy(scene.background);
    colorOf(SCENE_COLOR.day.sky, SCENE_COLOR.night.keyLight, t, hemi.color);
    hemi.intensity = lerp(SCENE_LIGHT.day.hemi, SCENE_LIGHT.night.hemi, t);
    colorOf(SCENE_COLOR.day.keyLight, SCENE_COLOR.night.keyLight, t, key.color);
    key.intensity = lerp(SCENE_LIGHT.day.key, SCENE_LIGHT.night.key, t);
    plazaLight.intensity = lerp(SCENE_LIGHT.day.point, SCENE_LIGHT.night.point, t);
    ferrisLight.intensity = plazaLight.intensity;
    mat.bulb.emissiveIntensity = lerp(SCENE_LIGHT.day.bulb, SCENE_LIGHT.night.bulb, t);
    mat.beam.opacity = lerp(SCENE_LIGHT.day.beam, SCENE_LIGHT.night.beam, t);
    const glow = lerp(SCENE_LIGHT.day.seaGlow, SCENE_LIGHT.night.seaGlow, t);
    colorOf(SCENE_COLOR.day.seaDeep, SCENE_COLOR.night.seaDeep, t, mat.farSea.color);
    colorOf(SCENE_COLOR.day.seaShallow, SCENE_COLOR.night.seaShallow, t, seaShallow);
    colorOf(SCENE_COLOR.day.seaDeep, SCENE_COLOR.night.seaDeep, t, seaDeep);
    for (let i = 0; i < seaColorAttr.count; i += 1) {
      work.copy(seaShallow).lerp(seaDeep, seaDepth[i]);
      const k = seaGlow[i] * glow;
      seaColorAttr.setXYZ(i, work.r + bulbLinear.r * k, work.g + bulbLinear.g * k, work.b + bulbLinear.b * k);
    }
    seaColorAttr.needsUpdate = true;
  }
  applyNightness(nightness);

  /* ---------- 품질 ---------- */

  function pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (poster) return 1;
    return Math.min(dpr, quality === 'high' ? QUALITY.pixelRatioHigh : QUALITY.pixelRatioLow);
  }

  function applyQuality() {
    key.castShadow = quality === 'high';
    blobs.visible = quality !== 'high';
  }
  applyQuality();

  function setQuality(next) {
    if (next === quality) return;
    quality = next;
    applyQuality();
    resize();
  }

  /* ---------- 시점 ---------- */

  const elMin = CAMERA.elevationMin * DEG;
  const elMax = CAMERA.elevationMax * DEG;
  const cam = {
    az: CAMERA.startAzimuth * DEG,
    el: CAMERA.startElevation * DEG,
    dist: 50,
    target: HOME_TARGET.clone(),
  };
  let homeDist = 50;
  let viewAspect = 1;
  let insetPx = 0;
  let maxDist = 80;
  let atHome = true;
  let userInteracted = false;
  let camTween = null;
  let nightTween = null;
  let lastLimits = '';

  const clampDist = (d) => clamp(d, CAMERA.minDistance, maxDist);

  function reportLimits() {
    const atMin = cam.dist <= CAMERA.minDistance + 0.01;
    const atMax = cam.dist >= maxDist - 0.01;
    const keyStr = `${atMin}|${atMax}`;
    if (keyStr !== lastLimits) {
      lastLimits = keyStr;
      onZoomLimits({ atMin, atMax });
    }
  }

  function applyCamera() {
    const { az, el, dist, target } = cam;
    camera.position.set(
      target.x + dist * Math.cos(el) * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + dist * Math.cos(el) * Math.cos(az),
    );
    camera.lookAt(target);
    fog.near = dist + 18;
    fog.far = dist + 150;
    reportLimits();
  }

  function startCameraTween(goal, duration) {
    const to = {
      az: cam.az + wrapAngle((goal.az ?? cam.az) - cam.az),
      el: clamp(goal.el ?? cam.el, elMin, elMax),
      dist: clampDist(goal.dist ?? cam.dist),
      target: (goal.target ?? cam.target).clone(),
    };
    if (reduced || duration <= 0) {
      cam.az = to.az;
      cam.el = to.el;
      cam.dist = to.dist;
      cam.target.copy(to.target);
      camTween = null;
      requestRender();
      return;
    }
    camTween = {
      from: { az: cam.az, el: cam.el, dist: cam.dist, target: cam.target.clone() },
      to,
      start: performance.now(),
      duration,
    };
    requestRender();
  }

  function stepCameraTween(now) {
    if (!camTween) return;
    const { from, to, start, duration } = camTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    cam.az = lerp(from.az, to.az, k);
    cam.el = lerp(from.el, to.el, k);
    cam.dist = lerp(from.dist, to.dist, k);
    cam.target.lerpVectors(from.target, to.target, k);
    if (k >= 1) camTween = null;
  }

  function stepNightTween(now) {
    if (!nightTween) return;
    const { from, to, start, duration } = nightTween;
    const k = easeOut(clamp((now - start) / duration, 0, 1));
    nightness = lerp(from, to, k);
    applyNightness(nightness);
    if (k >= 1) nightTween = null;
  }

  function interact() {
    camTween = null;
    atHome = false;
    if (!userInteracted) {
      userInteracted = true;
      onInteract();
    }
  }

  /* ---------- 표지 ---------- */

  const markers = landmarks.map(({ id, name }) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'marker is-hidden';
    el.tabIndex = -1;
    el.dataset.id = id;
    const pill = document.createElement('span');
    pill.className = 'marker__pill';
    const text = document.createElement('span');
    text.className = 'marker__text';
    text.textContent = name;
    pill.append(text);
    el.append(pill);
    el.addEventListener('click', () => onSelect(id));
    labelLayer.append(el);
    return {
      id,
      el,
      anchor: new Vector3(...LANDMARK_3D[id].anchor),
      occluded: false,
      shown: false,
      current: false,
      half: null,
      height: 0,
      pillW: 0,
      pillH: 0,
    };
  });

  let labelsEnabled = false;
  const projected = new Vector3();
  const rayDir = new Vector3();
  const raycaster = new Raycaster();
  let lastOcclusion = 0;

  /** 표지가 피해야 할 장면 위 버튼 묶음(토글·시점 버튼) */
  const avoid = opts.avoid || [];

  function updateLabels(now) {
    if (!labelsEnabled) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const checkOcclusion = now - lastOcclusion > 120;
    if (checkOcclusion) lastOcclusion = now;
    // 읽기를 쓰기보다 먼저 몰아서 한다: 표지 크기(바뀔 때만), 장면 위 버튼 묶음 자리(매번)
    markers.forEach((m) => {
      if (m.half === null) {
        m.half = m.el.offsetWidth / 2;
        m.height = m.el.offsetHeight;
        m.pillW = m.el.firstElementChild.offsetWidth;
        m.pillH = m.el.firstElementChild.offsetHeight;
      }
    });
    const base = container.getBoundingClientRect();
    const blocked = avoid
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top }));
    const edge = 4;
    const hit = (a, b) => a.l < b.r + edge && a.r > b.l - edge && a.t < b.b + edge && a.b > b.t - edge;
    // 표지 상자의 아래 끝이 y 이고, 보이는 알약은 상자 세로 가운데에 있다
    const pillBox = (m, x, y) => {
      const cy = y - m.height / 2;
      return { l: x - m.pillW / 2, r: x + m.pillW / 2, t: cy - m.pillH / 2, b: cy + m.pillH / 2 };
    };

    const items = markers.map((m) => {
      if (checkOcclusion) {
        rayDir.subVectors(m.anchor, camera.position);
        const distance = rayDir.length();
        raycaster.set(camera.position, rayDir.normalize());
        raycaster.far = distance;
        const hits = raycaster.intersectObjects(occluders, false);
        m.occluded = hits.length > 0 && hits[0].distance < distance - 0.6;
      }
      projected.copy(m.anchor).project(camera);
      const rawX = (projected.x * 0.5 + 0.5) * w;
      // 넓은 폭에서는 정보 패널 뒤(insetPx 왼쪽)에 있는 표지를 숨긴다
      const onScreen =
        projected.z < 1 && rawX > insetPx && projected.x < 1.02 && projected.y > -1.02 && projected.y < 1.08;
      // 표지가 장면·패널 가장자리에서 잘리지 않게 안쪽으로 당긴다
      const minX = insetPx + m.half + edge;
      const x = clamp(rawX, minX, Math.max(minX, w - m.half - edge));
      const y = clamp((-projected.y * 0.5 + 0.5) * h, m.height + edge, Math.max(m.height + edge, h - edge));
      return { m, x, y, depth: projected.z, candidate: onScreen && !m.occluded };
    });

    // 고른 표지에 먼저 자리를 주고, 나머지는 가까운 것부터 준다.
    // 장면 위 버튼이나 먼저 놓인 표지와 겹치면 숨긴다. 고른 표지는 버튼을 비켜 위아래로 옮겨 본다.
    items.sort((a, b) => Number(b.m.current) - Number(a.m.current) || a.depth - b.depth);
    const placed = [];
    items.forEach((it) => {
      let { y } = it;
      let show = it.candidate;
      if (show) {
        let box = pillBox(it.m, it.x, y);
        const block = it.m.current && blocked.find((r) => hit(box, r));
        if (block) {
          y += block.t > h / 2 ? block.t - edge * 2 - box.b : block.b + edge * 2 - box.t;
          y = clamp(y, it.m.height + edge, Math.max(it.m.height + edge, h - edge));
          box = pillBox(it.m, it.x, y);
        }
        if (blocked.some((r) => hit(box, r)) || placed.some((p) => hit(box, p))) show = false;
        else placed.push(box);
      }
      it.m.el.style.transform = `translate3d(${it.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      if (show !== it.m.shown) {
        it.m.shown = show;
        it.m.el.classList.toggle('is-hidden', !show);
      }
    });
  }

  /* ---------- 그리기 ---------- */

  const POSTER_TIME = 7.4;
  let sceneTime = poster ? POSTER_TIME : 0;
  let raf = 0;
  let last = 0;
  let visible = !document.hidden;
  let inView = true;
  let lost = false;
  let disposed = false;
  const perf = { warmUntil: 0, frames: 0, total: 0, prev: 0 };

  function shouldAnimate() {
    return motion && !poster;
  }

  function requestRender() {
    if (!raf && visible && inView && !lost && !disposed) raf = requestAnimationFrame(frame);
  }

  function samplePerformance(now, continuous) {
    if (!continuous || quality !== 'high' || poster || opts.quality) {
      perf.warmUntil = 0;
      perf.prev = 0;
      return;
    }
    if (!perf.warmUntil) {
      perf.warmUntil = now + QUALITY.warmupMs;
      perf.frames = 0;
      perf.total = 0;
      perf.prev = now;
      return;
    }
    const delta = now - perf.prev;
    perf.prev = now;
    if (now < perf.warmUntil) return;
    perf.frames += 1;
    perf.total += delta;
    if (perf.total >= QUALITY.sampleWindowMs) {
      if (perf.total / perf.frames > QUALITY.slowFrameMs) setQuality('low');
      perf.frames = 0;
      perf.total = 0;
    }
  }

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    const animating = shouldAnimate();
    if (animating) {
      sceneTime += dt;
      if (!userInteracted && !reduced && !camTween) {
        cam.az += (dt / RIDE_PERIOD.autoRotate) * TAU;
      }
    }
    stepCameraTween(now);
    stepNightTween(now);
    ferris.update(sceneTime);
    carousel.update(sceneTime);
    coaster.update(sceneTime);
    lighthouse.update(sceneTime);
    pier.update(sceneTime);
    updateWaves(sceneTime);
    applyCamera();
    renderer.render(scene, camera);
    updateLabels(now);
    samplePerformance(now, animating);
    if (animating || camTween || nightTween) {
      requestRender();
    } else {
      last = 0;
    }
  }

  /* ---------- 크기 ---------- */

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(pixelRatio());
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const inset = Math.min(getInsetLeft(), w * 0.6);
    if (inset > 0) camera.setViewOffset(w, h, -inset / 2, 0, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
    insetPx = inset;
    viewAspect = (w - inset) / h;
    // 포스터 촬영 모드는 캔버스에 여백을 두고 기준 장면과 같은 배율로 찍는다(js/framing.js)
    homeDist = poster ? posterDistance(opts.posterSize || 'wide') : fitDistance(w - inset, h);
    markers.forEach((m) => {
      m.half = null;
    });
    maxDist = homeDist * CAMERA.maxDistanceFactor;
    if (atHome && !camTween) cam.dist = homeDist;
    cam.dist = clampDist(cam.dist);
    last = 0;
    requestRender();
  }

  /* ---------- 입력 ---------- */

  const listeners = new AbortController();
  const { signal } = listeners;
  const pointers = new Map();
  let pinch = null;

  const pinchState = () => {
    const [a, b] = [...pointers.values()];
    return { d: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)), my: (a.y + b.y) / 2 };
  };

  canvas.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      interact();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
      if (e.pointerType === 'mouse') canvas.setPointerCapture(e.pointerId);
      pinch = pointers.size === 2 ? pinchState() : null;
    },
    { signal },
  );

  canvas.addEventListener(
    'pointermove',
    (e) => {
      const p = pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      const speed = Math.PI / Math.max(320, container.clientHeight);
      if (pointers.size === 1) {
        cam.az -= dx * speed * 1.3;
        if (p.type === 'mouse' || isWide()) cam.el = clamp(cam.el + dy * speed, elMin, elMax);
      } else if (pointers.size === 2 && pinch) {
        const s = pinchState();
        cam.dist = clampDist(cam.dist * (pinch.d / s.d));
        cam.el = clamp(cam.el + (s.my - pinch.my) * speed, elMin, elMax);
        pinch = s;
      }
      requestRender();
    },
    { signal },
  );

  const release = (e) => {
    pointers.delete(e.pointerId);
    pinch = pointers.size === 2 ? pinchState() : null;
  };
  canvas.addEventListener('pointerup', release, { signal });
  canvas.addEventListener('pointercancel', release, { signal });

  canvas.addEventListener(
    'wheel',
    (e) => {
      if (!isWide()) return;
      e.preventDefault();
      interact();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      cam.dist = clampDist(cam.dist * Math.exp(delta * 0.0012));
      requestRender();
    },
    { passive: false, signal },
  );

  canvas.addEventListener(
    'webglcontextlost',
    (e) => {
      e.preventDefault();
      lost = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      onContextLost();
    },
    { signal },
  );
  canvas.addEventListener(
    'webglcontextrestored',
    () => {
      lost = false;
      last = 0;
      requestRender();
      onContextRestored();
    },
    { signal },
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      visible = !document.hidden;
      last = 0;
      requestRender();
    },
    { signal },
  );

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(container);
  const viewObserver = new IntersectionObserver((entries) => {
    inView = entries.some((entry) => entry.isIntersecting);
    last = 0;
    requestRender();
  });
  viewObserver.observe(container);
  wideQuery.addEventListener('change', () => resize(), { signal });

  resize();

  /* 첫 프레임을 그린 뒤 돌려준다 */
  await new Promise((resolve) => {
    requestAnimationFrame((now) => {
      frame(now);
      resolve();
    });
  });
  labelsEnabled = true;

  /* ---------- 바깥에서 쓰는 기능 ---------- */

  const goHome = (duration) =>
    startCameraTween(
      { az: CAMERA.startAzimuth * DEG, el: CAMERA.startElevation * DEG, dist: homeDist, target: HOME_TARGET },
      duration,
    );

  return {
    canvas,
    /** 장면 크기는 같아도 정보 패널 폭이 바뀌면(글자 확대 등) 배치를 다시 계산한다 */
    relayout() {
      resize();
    },
    focus(id) {
      const view = LANDMARK_3D[id];
      if (!view) return;
      interact();
      startCameraTween(
        {
          az: view.azimuth * DEG,
          el: view.elevation * DEG,
          // 세로로 긴 장면에서는 같은 명소가 옆으로 넘치지 않게 더 멀리서 본다
          dist: view.distance * clamp(1.25 / viewAspect, 1, 2),
          target: new Vector3(...view.target),
        },
        durations.camera,
      );
    },
    reset() {
      camTween = null;
      goHome(durations.camera);
      atHome = true;
    },
    rotateStep(direction) {
      interact();
      startCameraTween({ az: cam.az + direction * CAMERA.stepRotate * DEG }, durations.cameraStep);
    },
    zoomStep(direction) {
      interact();
      const factor = direction > 0 ? CAMERA.stepZoom : 1 / CAMERA.stepZoom;
      startCameraTween({ dist: cam.dist * factor }, durations.cameraStep);
    },
    setSelected(id) {
      markers.forEach((m) => {
        m.current = m.id === id;
        m.el.classList.toggle('is-current', m.current);
        m.half = null;
      });
      requestRender();
    },
    setTime(next, animate) {
      time = next;
      canvas.setAttribute('aria-label', canvasLabel(time));
      const to = next === 'night' ? 1 : 0;
      if (!animate || reduced || !motion) {
        nightTween = null;
        nightness = to;
        applyNightness(nightness);
        requestRender();
        return;
      }
      nightTween = { from: nightness, to, start: performance.now(), duration: durations.timeShift };
      requestRender();
    },
    setMotion(on) {
      motion = on;
      last = 0;
      requestRender();
    },
    setReduced(on) {
      reduced = on;
      requestRender();
    },
    loseContextForTest() {
      renderer.forceContextLoss();
    },
    get quality() {
      return quality;
    },
    /** 검수용 — 지금 시점 값과 시점 이동 중인지 */
    cameraState() {
      return {
        azimuth: cam.az / DEG,
        elevation: cam.el / DEG,
        distance: cam.dist,
        target: cam.target.toArray(),
        tweening: Boolean(camTween),
      };
    },
    stats() {
      return { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, quality };
    },
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      listeners.abort();
      resizeObserver.disconnect();
      viewObserver.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
      Object.values(mat).forEach((m) => m.dispose());
      renderer.dispose();
      canvas.remove();
      markers.forEach((m) => m.el.remove());
    },
  };
}
