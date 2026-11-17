/*
 * 섬 그림의 문구·보는 범위·움직임 — 공용 화면 틀(js/iso2d.js 의 Iso2d.start, shared/iso2d)에 넘기는 설정. 설계서 5·6·7절
 * 일반 스크립트다. index.html 에서 js/iso2d.js · js/iso-geom.js 다음, 맨 끝에 둔다. 그림은 index.html 에 있다(tools/build-scene.mjs).
 * 검수용 주소: ?select=ferris(pier · carousel · ferris · coaster · lighthouse) · ?time=night · 나머지는 js/iso2d.js 머리 주석
 */
(function () {
  'use strict';

  const settings = {
    debugName: 'islandParkIso',

    copy: {
      motionStop: '움직임 멈추기',
      motionStart: '움직임 다시 켜기',
      viewing: (name) => `${name} 보는 중`,
    },

    toggle: {
      key: 'time',
      values: ['day', 'night'],
      label: { day: '밤으로 바꾸기', night: '낮으로 바꾸기' },
      alt: {
        day: '바다 위 섬 하나에 선착장, 회전목마, 대관람차, 롤러코스터, 등대 전망대가 있는 그림',
        night: '밤의 바다 위 섬. 선착장, 회전목마, 대관람차, 롤러코스터, 등대 전망대에 불이 켜진 그림',
      },
    },

    /** 보는 범위 — 설계서 3-2절. 공용 기본값(처음 시점 84% · 명소 50% · 가까이 보기 4번)과 같다 */
    view: {},

    // 처음 화면을 그대로 두는 값. 공용 기본(세 샘플에서 고친 동작)으로 바꾸면 화면이 달라지므로 따로 검수한다
    markerBlockers: 'groups',
    labelClearance: false,
    fitSceneHeight: false,

    /** 놀이기구 움직임 — 대관람차 · 회전목마 · 롤러코스터 · 등대 불빛 · 배 · 물결 */
    scene({ G, svg, $, $$, setPoints }) {
      const els = {
        waves: $('[data-waves]', svg),
        spins: $$('[data-spin]', svg),
        cabins: $$('[data-cabin]', svg),
        horsesBack: $('[data-horses="back"]', svg),
        horsesFront: $('[data-horses="front"]', svg),
        horses: $$('[data-horse]', svg).sort((a, b) => a.dataset.horse - b.dataset.horse),
        cars: $$('[data-car]', svg).sort((a, b) => a.dataset.car - b.dataset.car),
        chunks: $$('[data-chunk]', svg).sort((a, b) => a.dataset.chunk - b.dataset.chunk),
        beams: $$('[data-beam] polygon', svg),
        boat: $('[data-boat]', svg),
      };
      const polysOf = (group) => $$('polygon', group);
      const cabinPolys = els.cabins.map(polysOf);
      const horseParts = els.horses.map((g) => ({ g, line: $('line', g), polys: polysOf(g) }));
      const carPolys = els.cars.map(polysOf);

      function render(t) {
        const deg = (-G.ferrisAngle(t) * 180) / Math.PI;
        els.spins.forEach((g) => g.setAttribute('transform', `rotate(${deg.toFixed(2)})`));

        G.ferrisCabins(t).forEach((faces, i) => setPoints(cabinPolys[i], faces, 0));

        G.carouselHorses(t).forEach((h, i) => {
          const part = horseParts[i];
          const layer = h.front ? els.horsesFront : els.horsesBack;
          if (part.g.parentNode !== layer) layer.appendChild(part.g);
          part.line.setAttribute('x1', h.pole[0][0].toFixed(1));
          part.line.setAttribute('y1', h.pole[0][1].toFixed(1));
          part.line.setAttribute('x2', h.pole[1][0].toFixed(1));
          part.line.setAttribute('y2', h.pole[1][1].toFixed(1));
          setPoints(part.polys, h.faces, 0);
        });

        G.coasterCars(t).forEach((car, i) => {
          const chunk = els.chunks[car.chunk];
          if (chunk && els.cars[i].parentNode !== chunk) chunk.appendChild(els.cars[i]);
          setPoints(carPolys[i], car.body, 0);
          setPoints(carPolys[i], car.seat, 3);
        });

        G.lighthouseBeams(t).forEach((pair, i) => {
          els.beams[i * 2].setAttribute('points', G.pointsAttr(pair[0]));
          els.beams[i * 2 + 1].setAttribute('points', G.pointsAttr(pair[1]));
        });

        els.boat.setAttribute('transform', `translate(0 ${G.boatOffset(t).toFixed(2)})`);
        els.waves.setAttribute('transform', `translate(${G.waveOffset(t).toFixed(2)} 0)`);
      }

      return { render };
    },
  };

  if (window.Iso2d) window.Iso2d.start(settings);
  else document.documentElement.classList.remove('js');
})();
