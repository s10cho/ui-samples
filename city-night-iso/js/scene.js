/*
 * 도시 그림의 문구·보는 범위·움직임 — 공용 화면 틀(js/iso2d.js 의 Iso2d.start, shared/iso2d)에 넘기는 설정. 설계서 5·6·7절
 * 일반 스크립트다. index.html 에서 js/iso2d.js · js/iso-geom.js 다음, 맨 끝에 둔다. 그림은 index.html 에 있다(tools/build-scene.mjs).
 * 검수용 주소: ?select=bridge(tower · bridge · station · market · fountain) · ?time=night · 나머지는 js/iso2d.js 머리 주석
 */
(function () {
  'use strict';

  const settings = {
    debugName: 'cityNightIso',

    copy: {
      motionStop: '움직임 멈추기',
      motionStart: '움직임 다시 켜기',
      viewing: (name) => `${name} 보는 중`,
    },

    toggle: {
      key: 'time',
      values: ['dusk', 'night'],
      label: { dusk: '밤으로 바꾸기', night: '해 질 녘으로 바꾸기' },
      alt: {
        dusk: '해 질 녘, 강을 낀 작은 도시. 전망 타워, 아치 다리, 시계탑 기차역, 시장 골목, 공원 분수가 있는 그림',
        night: '밤이 된 강가 도시. 창문과 가로등, 아치 다리에 불이 켜지고 전망 타워, 시계탑 기차역, 시장 골목, 공원 분수가 보이는 그림',
      },
    },

    /** 보는 범위 — 설계서 3-2절. 도시가 넓어 가까이 보기를 6번까지 둔다 */
    view: {
      zoomMax: Math.pow(4 / 3, 6), // 처음 배율에서 가까이 보기 6번
    },

    // 처음 화면을 그대로 두는 값. 공용 기본(세 샘플에서 고친 동작)으로 바꾸면 화면이 달라지므로 따로 검수한다
    fitSceneHeight: false,

    /** 차 · 배 · 물결 · 분수 · 타워 불빛 */
    scene({ G, svg, data, state, $, $$, setPoints }) {
      const els = {
        waves: $('[data-waves]', svg),
        cars: $$('[data-car]', svg).sort((a, b) => a.dataset.car - b.dataset.car),
        lanes: $$('[data-lane]', svg).sort((a, b) => a.dataset.lane - b.dataset.lane),
        boat: $('[data-boat]', svg),
        jet: $('[data-jet]', svg),
        spray: $('[data-spray]', svg),
        beacon: $('[data-beacon]', svg),
      };
      const sprayTop0 = parseFloat(els.spray.dataset.top);
      const carParts = els.cars.map((g) => ({ g, polys: $$('polygon', g), head: $('.head', g), tail: $('.tail', g), shown: true }));

      function setDot(circle, p) {
        if (!p) {
          circle.setAttribute('r', '0');
          return;
        }
        circle.setAttribute('cx', p[0].toFixed(1));
        circle.setAttribute('cy', p[1].toFixed(1));
        circle.setAttribute('r', '1.6');
      }

      /** 타워 꼭대기 불빛 — 움직임이 멈추면 켜진 채로 둔다 */
      function setBeacon(level) {
        els.beacon.setAttribute('opacity', level.toFixed(2));
      }

      function render(t) {
        G.carFrames(t, data.cars).forEach((car, i) => {
          const part = carParts[i];
          const lane = els.lanes[car.chunk];
          const show = car.opacity > 0.01;
          if (show !== part.shown) {
            part.shown = show;
            part.g.setAttribute('visibility', show ? 'visible' : 'hidden');
          }
          if (!show) return;
          if (lane && part.g.parentNode !== lane) lane.appendChild(part.g);
          part.g.setAttribute('opacity', car.opacity.toFixed(2));
          setPoints(part.polys, car.body, 0);
          setPoints(part.polys, car.cabin, 3);
          setDot(part.head, car.head);
          setDot(part.tail, car.tail);
        });

        const boat = G.boatFrame(t);
        els.boat.setAttribute('transform', `translate(${boat.dx.toFixed(1)} ${boat.dy.toFixed(1)})`);
        els.boat.setAttribute('opacity', boat.opacity.toFixed(2));

        els.waves.setAttribute('transform', `translate(${G.waveShift(t).toFixed(3)} 0)`);

        const h = G.jetHeight(t);
        els.jet.setAttribute('points', G.pointsAttr(G.jetPoints(h)));
        els.spray.setAttribute('transform', `translate(0 ${(-(0.8 + h - sprayTop0) * G.RISE).toFixed(2)})`);

        setBeacon(state.motion ? G.beaconLevel(t) : 1);
      }

      return {
        render,
        onMotion(motion) {
          if (!motion) setBeacon(1);
        },
      };
    },
  };

  if (window.Iso2d) window.Iso2d.start(settings);
  else document.documentElement.classList.remove('js');
})();
