/*
 * 산 그림의 문구·보는 범위·움직임 — 공용 화면 틀(js/iso2d.js 의 Iso2d.start, shared/iso2d)에 넘기는 설정. 설계서 5·6·7절
 * 일반 스크립트다. index.html 에서 js/iso2d.js · js/iso-geom.js 다음, 맨 끝에 둔다. 그림은 index.html 에 있다(tools/build-scene.mjs).
 * 검수용 주소: ?select=lift(lift · easy · expert · lodge · summit) · ?weather=snow · 나머지는 js/iso2d.js 머리 주석
 */
(function () {
  'use strict';

  const settings = {
    debugName: 'skiMountainIso',

    copy: {
      motionStop: '움직임 멈추기',
      motionStart: '움직임 다시 켜기',
      viewing: (name) => `${name} 보는 중`,
    },

    toggle: {
      key: 'weather',
      values: ['clear', 'snow'],
      label: { clear: '눈 내리게 하기', snow: '눈 그치게 하기' },
      alt: {
        clear: '눈 덮인 산 하나에 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 그림',
        snow: '눈이 내리는 산. 리프트, 초급 슬로프, 상급 슬로프, 산장, 정상 전망대가 있는 그림',
      },
    },

    /** 보는 범위 — 설계서 3-2절 */
    view: {
      focusShare: 0.7, // 명소를 고르면 그 명소가 차지하는 비율(리프트·슬로프처럼 산 높이만큼 긴 명소도 확대가 보이게)
    },

    // 처음 화면을 그대로 두는 값. 공용 기본(세 샘플에서 고친 동작)으로 바꾸면 화면이 달라지므로 따로 검수한다
    labelClearance: false,

    /** 리프트 의자 · 스키어. 눈송이 층은 css/scene.css 가 움직이고, 움직임을 멈추면 html.is-still 로 세운다 */
    scene({ G, root, svg, data, $, $$, setPoints, clamp }) {
      const els = {
        rows: $$('[data-row]', svg).sort((a, b) => a.dataset.row - b.dataset.row),
        chairs: $$('[data-chair]', svg).sort((a, b) => a.dataset.chair - b.dataset.chair),
        skiers: $$('[data-skier]', svg).sort((a, b) => a.dataset.skier - b.dataset.skier),
      };

      /** 앞뒤 줄 — 움직이는 것은 지금 서 있는 줄의 맨 뒤로 옮겨 그린다(뒤 줄 땅보다 앞, 앞 줄 땅보다 뒤) */
      const rowOf = (v) => clamp(Math.floor((v - data.rows.v0) / data.rows.step), 0, data.rows.count - 1);
      function moveToRow(el, v) {
        const row = els.rows[rowOf(v)];
        if (row && el.parentNode !== row) row.appendChild(el);
      }

      const chairs = els.chairs.map((el) => ({ el, up: el.getAttribute('href') === '#cu' }));
      const skiers = els.skiers.map((g) => ({
        g,
        polys: $$('polygon', g),
        head: $('circle', g),
        visible: g.getAttribute('visibility') !== 'hidden',
      }));

      function render(t) {
        G.liftChairs(t).forEach((ch, i) => {
          const c = chairs[i];
          if (!c) return;
          const p = G.project(ch.p);
          c.el.setAttribute('x', p[0].toFixed(1));
          c.el.setAttribute('y', p[1].toFixed(1));
          if (c.up !== ch.up) {
            c.up = ch.up;
            c.el.setAttribute('href', ch.up ? '#cu' : '#cd');
          }
          moveToRow(c.el, G.toUV(ch.p[0], ch.p[2])[1] + 0.4);
        });

        skiers.forEach((s, i) => {
          const pose = G.skierPose(i, t);
          if (pose.visible !== s.visible) {
            s.visible = pose.visible;
            s.g.setAttribute('visibility', pose.visible ? 'visible' : 'hidden');
          }
          if (!pose.visible) return;
          s.polys[0].setAttribute('points', G.pointsAttr(pose.skis));
          setPoints(s.polys, pose.body, 1);
          s.head.setAttribute('cx', pose.head[0].toFixed(1));
          s.head.setAttribute('cy', pose.head[1].toFixed(1));
          moveToRow(s.g, pose.v + 0.4);
        });
      }

      return {
        render,
        // is-still: 눈송이 층을 그 자리에 세운다(css/scene.css)
        onMotion(motion) {
          root.classList.toggle('is-still', !motion);
        },
        onFallback() {
          root.classList.remove('is-still');
        },
      };
    },
  };

  if (window.Iso2d) window.Iso2d.start(settings);
  else document.documentElement.classList.remove('js');
})();
