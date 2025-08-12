"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [226],
  {
    7403: function (t, e, n) {
      n.d(e, {
        v: function () {
          return c;
        },
      });
      var i = n(9993),
        r = n(3653),
        s = n(4097),
        a = n(6167),
        o = n(2159),
        l = n(9116);
      let u = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (l.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var h = n(7533);
      class c {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: a = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = i.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: r,
              repeatDelay: s,
              repeatType: a,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, r.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = i.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: r,
            velocity: l,
            delay: c,
            onComplete: d,
            onUpdate: f,
            isGenerator: p,
          } = this.options;
          if (
            !p &&
            !(function (t, e, n, i) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                l = u(r, e),
                h = u(s, e);
              return (
                (0, o.K)(
                  l === h,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!l &&
                  !!h &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    (("spring" === n || (0, a.xD)(n)) && i))
              );
            })(t, n, r, l)
          ) {
            if (s.c.current || !c) {
              f && f((0, h.$)(t, this.options, e)),
                d && d(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let m = this.initPlayback(t, e);
          !1 !== m &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...m }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    6733: function (t, e, n) {
      n.d(e, {
        s: function () {
          return W;
        },
        y: function () {
          return j;
        },
      });
      var i = n(6167),
        r = n(4757),
        s = n(3653),
        a = n(1048),
        o = n(1506),
        l = n(5389),
        u = n(9654),
        h = n(3476);
      function c(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, h.R)(n - t(i), e - i);
      }
      let d = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var f = n(2159);
      function p(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let m = ["duration", "bounce"],
        v = ["stiffness", "damping", "mass"];
      function g(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function y(t = d.visualDuration, e = d.bounce) {
        let n;
        let s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: a, restDelta: l } = s,
          u = s.keyframes[0],
          h = s.keyframes[s.keyframes.length - 1],
          y = { done: !1, value: u },
          {
            stiffness: b,
            damping: w,
            mass: A,
            duration: S,
            velocity: x,
            isResolvedFromDuration: T,
          } = (function (t) {
            let e = {
              velocity: d.velocity,
              stiffness: d.stiffness,
              damping: d.damping,
              mass: d.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!g(t, v) && g(t, m)) {
              if (t.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * t.visualDuration),
                  i = n * n,
                  r = 2 * (0, o.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                e = { ...e, mass: d.mass, stiffness: i, damping: r };
              } else {
                let n = (function ({
                  duration: t = d.duration,
                  bounce: e = d.bounce,
                  velocity: n = d.velocity,
                  mass: i = d.mass,
                }) {
                  let s, a;
                  (0, f.K)(
                    t <= (0, r.w)(d.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let l = 1 - e;
                  (l = (0, o.u)(d.minDamping, d.maxDamping, l)),
                    (t = (0, o.u)(d.minDuration, d.maxDuration, (0, r.X)(t))),
                    l < 1
                      ? ((s = (e) => {
                          let i = e * l,
                            r = i * t;
                          return 0.001 - ((i - n) / p(e, l)) * Math.exp(-r);
                        }),
                        (a = (e) => {
                          let i = e * l * t,
                            r = Math.pow(l, 2) * Math.pow(e, 2) * t,
                            a = p(Math.pow(e, 2), l);
                          return (
                            ((i * n + n - r) *
                              Math.exp(-i) *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                        (a = (e) => t * t * (n - e) * Math.exp(-e * t)));
                  let u = (function (t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i;
                  })(s, a, 5 / t);
                  if (((t = (0, r.w)(t)), isNaN(u)))
                    return {
                      stiffness: d.stiffness,
                      damping: d.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(u, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * l * Math.sqrt(i * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...n, mass: d.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...s, velocity: -(0, r.X)(s.velocity || 0) }),
          V = x || 0,
          P = w / (2 * Math.sqrt(b * A)),
          M = h - u,
          C = (0, r.X)(Math.sqrt(b / A)),
          E = 5 > Math.abs(M);
        if (
          (a || (a = E ? d.restSpeed.granular : d.restSpeed.default),
          l || (l = E ? d.restDelta.granular : d.restDelta.default),
          P < 1)
        ) {
          let t = p(C, P);
          n = (e) =>
            h -
            Math.exp(-P * C * e) *
              (((V + P * C * M) / t) * Math.sin(t * e) + M * Math.cos(t * e));
        } else if (1 === P)
          n = (t) => h - Math.exp(-C * t) * (M + (V + C * M) * t);
        else {
          let t = C * Math.sqrt(P * P - 1);
          n = (e) => {
            let n = Math.exp(-P * C * e),
              i = Math.min(t * e, 300);
            return (
              h -
              (n * ((V + P * C * M) * Math.sinh(i) + t * M * Math.cosh(i))) / t
            );
          };
        }
        let F = {
          calculatedDuration: (T && S) || null,
          next: (t) => {
            let e = n(t);
            if (T) y.done = t >= S;
            else {
              let i = 0;
              P < 1 && (i = 0 === t ? (0, r.w)(V) : c(n, t, e));
              let s = Math.abs(i) <= a,
                o = Math.abs(h - e) <= l;
              y.done = s && o;
            }
            return (y.value = y.done ? h : e), y;
          },
          toString: () => {
            let t = Math.min((0, i.iI)(F), i.EO),
              e = (0, i.wk)((e) => F.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return F;
      }
      function b({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, f;
        let p = t[0],
          m = { done: !1, value: p },
          v = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === o
              ? l
              : void 0 === l
              ? o
              : Math.abs(o - t) < Math.abs(l - t)
              ? o
              : l,
          b = n * e,
          w = p + b,
          A = void 0 === a ? w : a(w);
        A !== w && (b = A - p);
        let S = (t) => -b * Math.exp(-t / i),
          x = (t) => A + S(t),
          T = (t) => {
            let e = S(t),
              n = x(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? A : n);
          },
          V = (t) => {
            v(m.value) &&
              ((d = t),
              (f = y({
                keyframes: [m.value, g(m.value)],
                velocity: c(x, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          V(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (f || void 0 !== d || ((e = !0), T(t), V(t)),
              void 0 !== d && t >= d)
                ? f.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      var w = n(3194);
      let A = (0, w._)(0.42, 0, 1, 1),
        S = (0, w._)(0, 0, 0.58, 1),
        x = (0, w._)(0.42, 0, 0.58, 1),
        T = (t) => Array.isArray(t) && "number" != typeof t[0];
      var V = n(5085),
        P = n(9849),
        M = n(5834),
        C = n(8536);
      let E = {
          linear: V.Z,
          easeIn: A,
          easeInOut: x,
          easeOut: S,
          circIn: C.Z7,
          circInOut: C.X7,
          circOut: C.Bn,
          backIn: M.G2,
          backInOut: M.XL,
          backOut: M.CG,
          anticipate: P.L,
        },
        F = (t) => {
          if ((0, i.qE)(t)) {
            (0, f.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return (0, w._)(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, f.k)(void 0 !== E[t], `Invalid easing type '${t}'`), E[t])
            : t;
        };
      var k = n(2548),
        D = n(1038),
        $ = n(5004);
      function I({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = T(i) ? i.map(F) : F(i),
          s = { done: !1, value: e[0] },
          a = (
            n && n.length === e.length
              ? n
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let n = t[t.length - 1];
                      for (let i = 1; i <= e; i++) {
                        let r = (0, D.Y)(0, e, i);
                        t.push((0, $.t)(n, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          o = (0, k.s)(a, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || x).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      var O = n(7403),
        R = n(9993),
        L = n(6219);
      let N = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => L.Wi.update(e, !0),
          stop: () => (0, L.Pn)(e),
          now: () =>
            L.frameData.isProcessing ? L.frameData.timestamp : R.X.now(),
        };
      };
      var K = n(7533);
      let X = { decay: b, inertia: b, tween: I, keyframes: I, spring: y },
        B = (t) => t / 100;
      class W extends O.v {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: n,
              element: i,
              keyframes: r,
            } = this.options,
            a = (null == i ? void 0 : i.KeyframeResolver) || s.e;
          (this.resolver = new a(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, n;
          let {
              type: r = "keyframes",
              repeat: s = 0,
              repeatDelay: a = 0,
              repeatType: o,
              velocity: h = 0,
            } = this.options,
            c = (0, i.xD)(r) ? r : X[r] || I;
          c !== I &&
            "number" != typeof t[0] &&
            ((e = (0, u.z)(B, (0, l.C)(t[0], t[1]))), (t = [0, 100]));
          let d = c({ ...this.options, keyframes: t });
          "mirror" === o &&
            (n = c({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -h,
            })),
            null === d.calculatedDuration &&
              (d.calculatedDuration = (0, i.iI)(d));
          let { calculatedDuration: f } = d,
            p = f + a;
          return {
            generator: d,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: f,
            resolvedDuration: p,
            totalDuration: p * (s + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          a.P.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: p,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let b = this.currentTime,
            w = r;
          if (f) {
            let t = Math.min(this.currentTime, h) / c,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, f + 1)) % 2 &&
                ("reverse" === p
                  ? ((n = 1 - n), m && (n -= m / c))
                  : "mirror" === p && (w = s)),
              (b = (0, o.u)(0, 1, n) * c);
          }
          let A = y ? { done: !1, value: l[0] } : w.next(b);
          a && (A.value = a(A.value));
          let { done: S } = A;
          y ||
            null === u ||
            (S =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            x && void 0 !== i && (A.value = (0, K.$)(l, this.options, i)),
            v && v(A.value),
            x && this.finish(),
            A
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = N, onPlay: e, startTime: n } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            a.P.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function j(t) {
        return new W(t);
      }
    },
    6323: function (t, e, n) {
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    7533: function (t, e, n) {
      n.d(e, {
        $: function () {
          return r;
        },
      });
      let i = (t) => null !== t;
      function r(t, { repeat: e, repeatType: n = "loop" }, r) {
        let s = t.filter(i),
          a = e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
        return a && void 0 !== r ? r : s[a];
      }
    },
    8908: function (t, e, n) {
      n.d(e, {
        v: function () {
          return C;
        },
      });
      var i = n(6167),
        r = n(4757),
        s = n(6219),
        a = n(565),
        o = n(4097),
        l = n(5085),
        u = n(9849),
        h = n(5834),
        c = n(8536),
        d = n(3078),
        f = n(7403),
        p = n(6733),
        m = n(6323),
        v = n(1048),
        g = n(4072),
        y = n(7533);
      let b = (0, n(2474).X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        w = { anticipate: u.L, backInOut: h.XL, circInOut: c.X7 };
      class A extends f.v {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: n,
            element: i,
            keyframes: r,
          } = this.options;
          (this.resolver = new d.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n;
          let {
            duration: r = 300,
            times: s,
            ease: a,
            type: o,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof a && (0, i.Vc)() && a in w && (a = w[a]),
            (n = this.options),
            (0, i.xD)(n.type) || "spring" === n.type || !(0, i.hR)(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: i,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let n = new p.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  r.push((i = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (a = h.ease),
              (o = "keyframes");
          }
          let c = (function (
            t,
            e,
            n,
            {
              delay: r = 0,
              duration: s = 300,
              repeat: a = 0,
              repeatType: o = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let h = { [e]: n };
            u && (h.offset = u);
            let c = (0, i.eB)(l, s);
            Array.isArray(c) && (h.easing = c), g.f.value && v.P.waapi++;
            let d = t.animate(h, {
              delay: r,
              duration: s,
              easing: Array.isArray(c) ? "linear" : c,
              fill: "both",
              iterations: a + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            });
            return (
              g.f.value &&
                d.finished.finally(() => {
                  v.P.waapi--;
                }),
              d
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: a,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, i._F)(c, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set((0, y.$)(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: o,
              ease: a,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, r.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, r.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, r.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.Z;
            let { animation: n } = e;
            (0, i._F)(n, t);
          } else this.pendingTimeline = t;
          return l.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: i,
            type: s,
            ease: a,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              c = new p.s({
                ...h,
                keyframes: n,
                duration: i,
                type: s,
                ease: a,
                times: o,
                isGenerator: !0,
              }),
              d = (0, r.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: s,
            type: a,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
          return (
            b() &&
            n &&
            m.t.has(n) &&
            !o &&
            !l &&
            !i &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      var S = n(6097);
      let x = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        T = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        V = { type: "keyframes", duration: 0.8 },
        P = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        M = (t, { keyframes: e }) =>
          e.length > 2
            ? V
            : S.G.has(t)
            ? t.startsWith("scale")
              ? T(e[1])
              : x
            : P,
        C =
          (t, e, n, l = {}, u, h) =>
          (c) => {
            let d = (0, i.ev)(l, t) || {},
              f = d.delay || l.delay || 0,
              { elapsed: m = 0 } = l;
            m -= (0, r.w)(f);
            let v = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...d,
              delay: -m,
              onUpdate: (t) => {
                e.set(t), d.onUpdate && d.onUpdate(t);
              },
              onComplete: () => {
                c(), d.onComplete && d.onComplete();
              },
              name: t,
              motionValue: e,
              element: h ? void 0 : u,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(d) && (v = { ...v, ...M(t, v) }),
              v.duration && (v.duration = (0, r.w)(v.duration)),
              v.repeatDelay && (v.repeatDelay = (0, r.w)(v.repeatDelay)),
              void 0 !== v.from && (v.keyframes[0] = v.from);
            let g = !1;
            if (
              ((!1 !== v.type && (0 !== v.duration || v.repeatDelay)) ||
                ((v.duration = 0), 0 !== v.delay || (g = !0)),
              (o.c.current || a.c.skipAnimations) &&
                ((g = !0), (v.duration = 0), (v.delay = 0)),
              g && !h && void 0 !== e.get())
            ) {
              let t = (0, y.$)(v.keyframes, d);
              if (void 0 !== t)
                return (
                  s.Wi.update(() => {
                    v.onUpdate(t), v.onComplete();
                  }),
                  new i.sP([])
                );
            }
            return !h && A.supports(v) ? new A(v) : new p.s(v);
          };
    },
    2087: function (t, e, n) {
      n.d(e, {
        s: function () {
          return r;
        },
      });
      var i = n(5908);
      function r(t) {
        return t.props[i.M];
      }
    },
    9849: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(5834);
      let r = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, i.G2)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    5834: function (t, e, n) {
      n.d(e, {
        CG: function () {
          return a;
        },
        G2: function () {
          return o;
        },
        XL: function () {
          return l;
        },
      });
      var i = n(3194),
        r = n(3108),
        s = n(2718);
      let a = (0, i._)(0.33, 1.53, 0.69, 0.99),
        o = (0, s.M)(a),
        l = (0, r.o)(o);
    },
    8536: function (t, e, n) {
      n.d(e, {
        Bn: function () {
          return a;
        },
        X7: function () {
          return o;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(3108),
        r = n(2718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, r.M)(s),
        o = (0, i.o)(s);
    },
    3194: function (t, e, n) {
      n.d(e, {
        _: function () {
          return s;
        },
      });
      var i = n(5085);
      let r = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return i.Z;
        let a = (e) =>
          (function (t, e, n, i, s) {
            let a, o;
            let l = 0;
            do (a = r((o = e + (n - e) / 2), i, s) - t) > 0 ? (n = o) : (e = o);
            while (Math.abs(a) > 1e-7 && ++l < 12);
            return o;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : r(a(t), e, s));
      }
    },
    3108: function (t, e, n) {
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2718: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    3731: function (t, e, n) {
      n.d(e, {
        E: function () {
          return i;
        },
      });
      function i(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
    },
    3280: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return r;
        },
        s: function () {
          return s;
        },
      });
      var i = n(6167);
      function r(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let s = (t) => (e) => (0, i.DJ)(e) && t(e, r(e));
    },
    9993: function (t, e, n) {
      let i;
      n.d(e, {
        X: function () {
          return o;
        },
      });
      var r = n(565),
        s = n(6219);
      function a() {
        i = void 0;
      }
      let o = {
        now: () => (
          void 0 === i &&
            o.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(a);
        },
      };
    },
    847: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i;
        },
      });
      class i {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    9188: function (t, e, n) {
      n.d(e, {
        s: function () {
          return F;
        },
      });
      var i = n(4572),
        r = n(8595);
      function s(t, e, n) {
        let i = t.getProps();
        return (0, r.o)(i, e, void 0 !== n ? n : i.custom, t);
      }
      var a = n(6167),
        o = n(6732),
        l = n(9155),
        u = n(804),
        h = n(9081),
        c = n(2087),
        d = n(8908),
        f = n(6219);
      function p(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        var p;
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: v,
          ...g
        } = e;
        i && (m = i);
        let y = [],
          b = r && t.animationState && t.animationState.getState()[r];
        for (let e in g) {
          let i = t.getValue(
              e,
              null !== (p = t.latestValues[e]) && void 0 !== p ? p : null
            ),
            r = g[e];
          if (
            void 0 === r ||
            (b &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(b, e))
          )
            continue;
          let s = { delay: n, ...(0, a.ev)(m || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let n = (0, c.s)(t);
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, f.Wi);
              null !== t && ((s.startTime = t), (l = !0));
            }
          }
          (0, h.K)(t, e),
            i.start(
              (0, d.v)(
                e,
                i,
                r,
                t.shouldReduceMotion && o.z.has(e) ? { type: !1 } : s,
                t,
                l
              )
            );
          let u = i.animation;
          u && y.push(u);
        }
        return (
          v &&
            Promise.all(y).then(() => {
              f.Wi.update(() => {
                v &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = s(t, e) || {};
                    for (let e in (r = { ...r, ...n })) {
                      let n = (0, l.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, u.BX)(n));
                    }
                  })(t, v);
              });
            }),
          y
        );
      }
      function m(t, e, n = {}) {
        var i;
        let r = s(
            t,
            e,
            "exit" === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: a = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (a = n.transitionOverride);
        let o = r ? () => Promise.all(p(t, r, n)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: o,
                  } = a;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => o - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(v)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              m(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, r + i, s, o, n);
                }
              : () => Promise.resolve(),
          { when: u } = a;
        if (!u) return Promise.all([o(), l(n.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [o, l] : [l, o];
          return t().then(() => e());
        }
      }
      function v(t, e) {
        return t.sortNodePosition(e);
      }
      var g = n(6925);
      function y(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var b = n(6859),
        w = n(3552);
      let A = w.V.length,
        S = [...w.e].reverse(),
        x = w.e.length;
      function T(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function V() {
        return {
          animate: T(!0),
          whileInView: T(),
          whileHover: T(),
          whileTap: T(),
          whileDrag: T(),
          whileFocus: T(),
          exit: T(),
        };
      }
      var P = n(847);
      class M extends P.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => m(t, e, n)));
                          else if ("string" == typeof e) i = m(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? s(t, e, n.custom) : e;
                            i = Promise.all(p(t, r, n));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, n)
                      )
                    ),
                  n = V(),
                  r = !0,
                  a = (e) => (n, i) => {
                    var r;
                    let a = s(
                      t,
                      i,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (a) {
                      let { transition: t, transitionEnd: e, ...i } = a;
                      n = { ...n, ...i, ...e };
                    }
                    return n;
                  };
                function o(o) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < A; t++) {
                          let i = w.V[t],
                            r = e.props[i];
                          ((0, b.$)(r) || !1 === r) && (n[i] = r);
                        }
                        return n;
                      })(t.parent) || {},
                    h = [],
                    c = new Set(),
                    d = {},
                    f = 1 / 0;
                  for (let e = 0; e < x; e++) {
                    var p;
                    let s = S[e],
                      m = n[s],
                      v = void 0 !== l[s] ? l[s] : u[s],
                      w = (0, b.$)(v),
                      A = s === o ? m.isActive : null;
                    !1 === A && (f = e);
                    let x = v === u[s] && v !== l[s] && w;
                    if (
                      (x && r && t.manuallyAnimateOnMount && (x = !1),
                      (m.protectedKeys = { ...d }),
                      (!m.isActive && null === A) ||
                        (!v && !m.prevProp) ||
                        (0, i.H)(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let T =
                        ((p = m.prevProp),
                        "string" == typeof v
                          ? v !== p
                          : !!Array.isArray(v) && !y(v, p)),
                      V =
                        T || (s === o && m.isActive && !x && w) || (e > f && w),
                      P = !1,
                      M = Array.isArray(v) ? v : [v],
                      C = M.reduce(a(s), {});
                    !1 === A && (C = {});
                    let { prevResolvedValues: E = {} } = m,
                      F = { ...E, ...C },
                      k = (e) => {
                        (V = !0),
                          c.has(e) && ((P = !0), c.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in F) {
                      let e = C[t],
                        n = E[t];
                      if (!d.hasOwnProperty(t))
                        ((0, g.C)(e) && (0, g.C)(n) ? y(e, n) : e === n)
                          ? void 0 !== e && c.has(t)
                            ? k(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? k(t)
                          : c.add(t);
                    }
                    (m.prevProp = v),
                      (m.prevResolvedValues = C),
                      m.isActive && (d = { ...d, ...C }),
                      r && t.blockInitialAnimation && (V = !1);
                    let D = !(x && T) || P;
                    V &&
                      D &&
                      h.push(
                        ...M.map((t) => ({
                          animation: t,
                          options: { type: s },
                        }))
                      );
                  }
                  if (c.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let n = s(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      n && n.transition && (e.transition = n.transition);
                    }
                    c.forEach((n) => {
                      let i = t.getBaseTarget(n),
                        r = t.getValue(n);
                      r && (r.liveStyle = !0), (e[n] = null != i ? i : null);
                    }),
                      h.push({ animation: e });
                  }
                  let m = !!h.length;
                  return (
                    r &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (m = !1),
                    (r = !1),
                    m ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, i) {
                    var r;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let s = o(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = V()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, i.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let C = 0;
      class E extends P.L {
        constructor() {
          super(...arguments), (this.id = C++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            i.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let F = { animation: { Feature: M }, exit: { Feature: E } };
    },
    874: function (t, e, n) {
      n.d(e, {
        E: function () {
          return w;
        },
      });
      var i = n(6167),
        r = n(3280),
        s = n(847),
        a = n(6219);
      function o(t, e, n) {
        let { props: i } = t;
        t.animationState &&
          i.whileHover &&
          t.animationState.setActive("whileHover", "Start" === n);
        let s = i["onHover" + n];
        s && a.Wi.postRender(() => s(e, (0, r.Q)(e)));
      }
      class l extends s.L {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, i.Mr)(
              t,
              (t, e) => (
                o(this.node, e, "Start"), (t) => o(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      var u = n(3731),
        h = n(9654);
      class c extends s.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, h.z)(
            (0, u.E)(this.node.current, "focus", () => this.onFocus()),
            (0, u.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function d(t, e, n) {
        let { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          i.whileTap &&
          t.animationState.setActive("whileTap", "Start" === n);
        let s = i["onTap" + ("End" === n ? "" : n)];
        s && a.Wi.postRender(() => s(e, (0, r.Q)(e)));
      }
      class f extends s.L {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, i.OD)(
              t,
              (t, e) => (
                d(this.node, e, "Start"),
                (t, { success: e }) => d(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let p = new WeakMap(),
        m = new WeakMap(),
        v = (t) => {
          let e = p.get(t.target);
          e && e(t);
        },
        g = (t) => {
          t.forEach(v);
        },
        y = { some: 0, all: 1 };
      class b extends s.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : y[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              m.has(n) || m.set(n, {});
              let i = m.get(n),
                r = JSON.stringify(e);
              return (
                i[r] || (i[r] = new IntersectionObserver(g, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              p.set(t, n),
              i.observe(t),
              () => {
                p.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? n : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let w = {
        inView: { Feature: b },
        tap: { Feature: f },
        focus: { Feature: c },
        hover: { Feature: l },
      };
    },
    3005: function (t, e, n) {
      function i({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      }
      n.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return i;
        },
        z2: function () {
          return r;
        },
      });
    },
    6711: function (t, e, n) {
      n.d(e, {
        D2: function () {
          return d;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var i = n(5004),
        r = n(8107);
      function s(t, e, n) {
        return n + e * (t - n);
      }
      function a(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function o(t, e = 0, n = 1, i, r) {
        (t.min = a(t.min, e, n, i, r)), (t.max = a(t.max, e, n, i, r));
      }
      function l(t, { x: e, y: n }) {
        o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, i = !1) {
        let s, a;
        let o = n.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (s = n[u]).projectionDelta;
            let { visualElement: o } = s.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (i &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              i && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, n, r, s = 0.5) {
        let a = (0, i.t)(t.min, t.max, s);
        o(t, e, n, a, r);
      }
      function d(t, e) {
        c(t.x, e.x, e.scaleX, e.scale, e.originX),
          c(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    8250: function (t, e, n) {
      n.d(e, {
        dO: function () {
          return a;
        },
        wc: function () {
          return r;
        },
      });
      let i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: i(), y: i() }),
        s = () => ({ min: 0, max: 0 }),
        a = () => ({ x: s(), y: s() });
    },
    8107: function (t, e, n) {
      function i(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function s(t) {
        return (
          r(t) ||
          a(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function a(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      n.d(e, {
        D_: function () {
          return a;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    7684: function (t, e, n) {
      n.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return a;
        },
      });
      var i = n(3005),
        r = n(6711);
      function s(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function a(t, e, n) {
        let i = s(t, n),
          { scroll: a } = e;
        return a && ((0, r.am)(i.x, a.offset.x), (0, r.am)(i.y, a.offset.y)), i;
      }
    },
    3078: function (t, e, n) {
      n.d(e, {
        s: function () {
          return m;
        },
      });
      var i = n(9102),
        r = n(6732),
        s = n(9116),
        a = n(6450);
      let o = new Set(["auto", "none", "0"]);
      var l = n(3653),
        u = n(2159),
        h = n(4386),
        c = n(1534);
      let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var f = n(5014),
        p = n(3769);
      class m extends l.e {
        constructor(t, e, n, i, r) {
          super(t, e, n, i, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && ((i = i.trim()), (0, c.t)(i))) {
              let r = (function t(e, n, i = 1) {
                (0, u.k)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = d.exec(t);
                  if (!e) return [,];
                  let [, n, i, r] = e;
                  return [`--${null != n ? n : i}`, r];
                })(e);
                if (!r) return;
                let a = window.getComputedStyle(n).getPropertyValue(r);
                if (a) {
                  let t = a.trim();
                  return (0, h.P)(t) ? parseFloat(t) : t;
                }
                return (0, c.t)(s) ? t(s, n, i + 1) : s;
              })(i, e.current);
              void 0 !== r && (t[n] = r),
                n === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !r.z.has(n) || 2 !== t.length))
            return;
          let [i, s] = t,
            a = (0, p.C)(i),
            o = (0, p.C)(s);
          if (a !== o) {
            if ((0, f.mP)(a) && (0, f.mP)(o))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, i.W)(r)) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let i,
                r = 0;
              for (; r < t.length && !i; ) {
                let e = t[r];
                "string" == typeof e &&
                  !o.has(e) &&
                  (0, s.V)(e).values.length &&
                  (i = t[r]),
                  r++;
              }
              if (i && n) for (let r of e) t[r] = (0, a.T)(n, i);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = f.lw[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: i } = this;
          if (!e || !e.current) return;
          let r = e.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            a = i[s];
          (i[s] = f.lw[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    3302: function (t, e, n) {
      n.d(e, {
        b: function () {
          return G;
        },
      });
      var i = n(2265),
        r = n(7684),
        s = n(9993),
        a = n(6317),
        o = n(8250),
        l = n(4386),
        u = n(9102),
        h = n(7282);
      let c = { current: null },
        d = { current: !1 };
      var f = n(2428),
        p = n(804),
        m = n(9116),
        v = n(8322),
        g = n(6450),
        y = n(146),
        b = n(3769),
        w = n(2649);
      let A = [...b.$, y.$, m.P],
        S = (t) => A.find((0, w.l)(t));
      var x = n(6097);
      let T = new WeakMap();
      var V = n(3795),
        P = n(3653),
        M = n(8595),
        C = n(6219);
      let E = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class F {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: a,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = P.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = s.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                C.Wi.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: u, onUpdate: h } = a;
          (this.onUpdate = h),
            (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = u),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, V.G)(e)),
            (this.isVariantNode = (0, V.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== l[t] && (0, v.i)(e) && e.set(l[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            T.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            d.current ||
              (function () {
                if (((d.current = !0), h.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (c.current = t.matches);
                    t.addListener(e), e();
                  } else c.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || c.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, C.Pn)(this.notifyUpdate),
          (0, C.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = x.G.has(t);
          i && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && C.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in a.featureDefinitions) {
            let e = a.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: n, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                n(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, o.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < E.length; e++) {
            let n = E[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let i in e) {
              let r = e[i],
                s = n[i];
              if ((0, v.i)(r)) t.addValue(i, r);
              else if ((0, v.i)(s)) t.addValue(i, (0, p.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, p.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, p.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let i =
            void 0 === this.latestValues[t] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && ((0, l.P)(i) || (0, u.W)(i))
                ? (i = parseFloat(i))
                : !S(i) && m.P.test(e) && (i = (0, g.T)(t, e)),
              this.setBaseTarget(t, (0, v.i)(i) ? i.get() : i)),
            (0, v.i)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = (0, M.o)(
              this.props,
              i,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (n = r[t]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, v.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new f.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var k = n(3078);
      class D extends F {
        constructor() {
          super(...arguments), (this.KeyframeResolver = k.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var $ = n(1534),
        I = n(781),
        O = n(4651),
        R = n(9979),
        L = n(1315);
      class N extends D {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.renderInstance = R.N);
        }
        readValueFromInstance(t, e) {
          if (x.G.has(e)) {
            let t = (0, I.A)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, $.f)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, r.J)(t, e);
        }
        build(t, e, n) {
          (0, O.r)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, L.U)(t, e, n);
        }
      }
      var K = n(1580),
        X = n(2622),
        B = n(2394),
        W = n(5969),
        j = n(8565),
        _ = n(545),
        z = n(875);
      class U extends D {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = o.dO),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                (0, j.g)(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (x.G.has(e)) {
            let t = (0, I.A)(e);
            return (t && t.default) || 0;
          }
          return (e = B.s.has(e) ? e : (0, K.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, z.U)(t, e, n);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            C.Wi.postRender(this.updateDimensions);
        }
        build(t, e, n) {
          (0, X.i)(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          (0, _.K)(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = (0, W.a)(t.tagName)), super.mount(t);
        }
      }
      var q = n(2860);
      let G = (t, e) =>
        (0, q.q)(t)
          ? new U(e)
          : new N(e, { allowProjection: t !== i.Fragment });
    },
    5014: function (t, e, n) {
      n.d(e, {
        Ei: function () {
          return c;
        },
        lw: function () {
          return d;
        },
        mP: function () {
          return a;
        },
      });
      var i = n(783),
        r = n(5480),
        s = n(6097);
      let a = (t) => t === i.Rx || t === r.px,
        o = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/u);
            if (r) return o(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/u);
              return e ? o(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        h = s._.filter((t) => !u.has(t));
      function c(t) {
        let e = [];
        return (
          h.forEach((n) => {
            let i = t.getValue(n);
            void 0 !== i &&
              (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (d.translateX = d.x), (d.translateY = d.y);
    },
    6450: function (t, e, n) {
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var i = n(9116),
        r = n(891),
        s = n(781);
      function a(t, e) {
        let n = (0, s.A)(t);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    781: function (t, e, n) {
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var i = n(146),
        r = n(891);
      let s = {
          ...n(7310).j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        a = (t) => s[t];
    },
    3769: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
        C: function () {
          return o;
        },
      });
      var i = n(783),
        r = n(5480),
        s = n(2649);
      let a = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        o = (t) => a.find((0, s.l)(t));
    },
    2649: function (t, e, n) {
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = (t) => (e) => e.test(t);
    },
    6732: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i;
        },
      });
      let i = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...n(6097)._,
      ]);
    },
    3653: function (t, e, n) {
      n.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var i = n(5014),
        r = n(6219);
      let s = new Set(),
        a = !1,
        o = !1;
      function l() {
        if (o) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (0, i.Ei)(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var i;
                  null === (i = t.getValue(e)) || void 0 === i || i.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (o = !1), (a = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (o = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, n, i, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                a || ((a = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (n && e) {
                  let i = n.readValue(e, s);
                  null != i && (t[0] = i);
                }
                void 0 === t[0] && (t[0] = s), i && void 0 === r && i.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    1048: function (t, e, n) {
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = { layout: 0, mainThread: 0, waapi: 0 };
    },
    8746: function (t, e, n) {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    2548: function (t, e, n) {
      n.d(e, {
        s: function () {
          return u;
        },
      });
      var i = n(5085),
        r = n(2159),
        s = n(1038),
        a = n(1506),
        o = n(5389),
        l = n(9654);
      function u(t, e, { clamp: n = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, r.k)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && e[0] === e[1]) return () => e[1];
        let d = t[0] === t[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let f = (function (t, e, n) {
            let r = [],
              s = n || o.C,
              a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let a = s(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || i.Z : e;
                a = (0, l.z)(t, a);
              }
              r.push(a);
            }
            return r;
          })(e, u, h),
          p = f.length,
          m = (n) => {
            if (d && n < t[0]) return e[0];
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            let r = (0, s.Y)(t[i], t[i + 1], n);
            return f[i](r);
          };
        return n ? (e) => m((0, a.u)(t[0], t[c - 1], e)) : m;
      }
    },
    4386: function (t, e, n) {
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    9102: function (t, e, n) {
      n.d(e, {
        W: function () {
          return i;
        },
      });
      let i = (t) => /^0[^.\s]+$/u.test(t);
    },
    5389: function (t, e, n) {
      n.d(e, {
        C: function () {
          return V;
        },
      });
      var i = n(5004),
        r = n(2159);
      function s(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var a = n(5778),
        o = n(1583),
        l = n(598);
      function u(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      let h = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [a.$, o.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function f(t) {
        let e = d(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === l.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                a = 0,
                o = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - i;
                (r = s(l, i, t + 1 / 3)),
                  (a = s(l, i, t)),
                  (o = s(l, i, t - 1 / 3));
              } else r = a = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * a),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let p = (t, e) => {
        let n = f(t),
          r = f(e);
        if (!n || !r) return u(t, e);
        let s = { ...n };
        return (t) => (
          (s.red = h(n.red, r.red, t)),
          (s.green = h(n.green, r.green, t)),
          (s.blue = h(n.blue, r.blue, t)),
          (s.alpha = (0, i.t)(n.alpha, r.alpha, t)),
          o.m.transform(s)
        );
      };
      var m = n(9654),
        v = n(146),
        g = n(9116),
        y = n(1534);
      let b = new Set(["none", "hidden"]);
      function w(t, e) {
        return (n) => (0, i.t)(t, e, n);
      }
      function A(t) {
        return "number" == typeof t
          ? w
          : "string" == typeof t
          ? (0, y.t)(t)
            ? u
            : v.$.test(t)
            ? p
            : T
          : Array.isArray(t)
          ? S
          : "object" == typeof t
          ? v.$.test(t)
            ? p
            : x
          : u;
      }
      function S(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => A(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function x(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = A(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let T = (t, e) => {
        let n = g.P.createTransformer(e),
          i = (0, g.V)(t),
          s = (0, g.V)(e);
        return i.indexes.var.length === s.indexes.var.length &&
          i.indexes.color.length === s.indexes.color.length &&
          i.indexes.number.length >= s.indexes.number.length
          ? (b.has(t) && !s.values.length) || (b.has(e) && !i.values.length)
            ? b.has(t)
              ? (n) => (n <= 0 ? t : e)
              : (n) => (n >= 1 ? e : t)
            : (0, m.z)(
                S(
                  (function (t, e) {
                    var n;
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let a = e.types[s],
                        o = t.indexes[a][r[a]],
                        l = null !== (n = t.values[o]) && void 0 !== n ? n : 0;
                      (i[s] = l), r[a]++;
                    }
                    return i;
                  })(i, s),
                  s.values
                ),
                n
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function V(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, i.t)(t, e, n)
          : A(t)(t, e);
      }
    },
    5004: function (t, e, n) {
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = (t, e, n) => t + (e - t) * n;
    },
    9654: function (t, e, n) {
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    2428: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    4097: function (t, e, n) {
      n.d(e, {
        c: function () {
          return i;
        },
      });
      let i = { current: !1 };
    },
    3476: function (t, e, n) {
      n.d(e, {
        R: function () {
          return i;
        },
      });
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, n) {
      n.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
        S1: function () {
          return l;
        },
      });
      var i = n(9993),
        r = n(2428),
        s = n(3476),
        a = n(6219);
      let o = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "12.4.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = i.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = i.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = o(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.L());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  a.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = i.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, n) {
      n.d(e, {
        $: function () {
          return r;
        },
      });
      var i = n(1583);
      let r = {
        test: (0, n(9336).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    598: function (t, e, n) {
      n.d(e, {
        J: function () {
          return o;
        },
      });
      var i = n(783),
        r = n(5480),
        s = n(8998),
        a = n(9336);
      let o = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.N)(e)) +
          ", " +
          r.aQ.transform((0, s.N)(n)) +
          ", " +
          (0, s.N)(i.Fq.transform(a)) +
          ")",
      };
    },
    146: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(5778),
        r = n(598),
        s = n(1583);
      let a = {
        test: (t) => s.m.test(t) || i.$.test(t) || r.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : r.J.test(t)
            ? r.J.parse(t)
            : i.$.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.m.transform(t)
            : r.J.transform(t),
      };
    },
    1583: function (t, e, n) {
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(1506),
        r = n(783),
        s = n(8998),
        a = n(9336);
      let o = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.i)("rgb", "red"),
          parse: (0, a.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.N)(r.Fq.transform(i)) +
            ")",
        };
    },
    9336: function (t, e, n) {
      n.d(e, {
        i: function () {
          return s;
        },
        d: function () {
          return a;
        },
      });
      var i = n(1322);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (n) =>
          !!(
            ("string" == typeof n && r.test(n) && n.startsWith(t)) ||
            (e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          ),
        a = (t, e, n) => (r) => {
          if ("string" != typeof r) return r;
          let [s, a, o, l] = r.match(i.K);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    891: function (t, e, n) {
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var i = n(9116),
        r = n(1322);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(r.K) || [];
        if (!i) return t;
        let a = n.replace(i, ""),
          o = s.has(e) ? 1 : 0;
        return i !== n && (o *= 100), e + "(" + o + a + ")";
      }
      let o = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...i.P,
          getAnimatableNone: (t) => {
            let e = t.match(o);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    9116: function (t, e, n) {
      n.d(e, {
        V: function () {
          return h;
        },
        P: function () {
          return p;
        },
      });
      var i = n(146);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = n(1322),
        a = n(8998);
      let o = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          s = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                i.$.test(t)
                  ? (r.color.push(a), s.push(l), n.push(i.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(a), s.push("var"), n.push(t))
                  : (r.number.push(a), s.push(o), n.push(parseFloat(t))),
                ++a,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: h, indexes: r, types: s };
      }
      function c(t) {
        return h(t).values;
      }
      function d(t) {
        let { split: e, types: n } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === o
                ? (s += (0, a.N)(t[u]))
                : e === l
                ? (s += i.$.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let f = (t) => ("number" == typeof t ? 0 : t),
        p = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(s.K)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(r)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function (t) {
            let e = c(t);
            return d(t)(e.map(f));
          },
        };
    },
    1322: function (t, e, n) {
      n.d(e, {
        K: function () {
          return i;
        },
      });
      let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    8998: function (t, e, n) {
      n.d(e, {
        N: function () {
          return i;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5;
    },
    9081: function (t, e, n) {
      n.d(e, {
        K: function () {
          return r;
        },
      });
      var i = n(8322);
      function r(t, e) {
        let n = t.getValue("willChange");
        if ((0, i.i)(n) && n.add) return n.add(e);
      }
    },
    6167: function (t, e, n) {
      n.d(e, {
        sP: function () {
          return a;
        },
        _F: function () {
          return c;
        },
        iI: function () {
          return u;
        },
        wk: function () {
          return v;
        },
        ev: function () {
          return o;
        },
        Mr: function () {
          return x;
        },
        qE: function () {
          return d;
        },
        xD: function () {
          return h;
        },
        DJ: function () {
          return V;
        },
        hR: function () {
          return g;
        },
        eB: function () {
          return function t(e, n) {
            if (e)
              return "function" == typeof e && p()
                ? v(e, n)
                : d(e)
                ? y(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, n) || b.easeOut)
                : b[e];
          };
        },
        EO: function () {
          return l;
        },
        OD: function () {
          return D;
        },
        KV: function () {
          return $;
        },
        Vc: function () {
          return p;
        },
      });
      var i = n(2474);
      let r = (0, i.X)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t, e) {
          let n = this.animations.map((n) =>
            r() && n.attachTimeline
              ? n.attachTimeline(t)
              : "function" == typeof e
              ? e(n)
              : void 0
          );
          return () => {
            n.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class a extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function o(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < l; ) (e += 50), (n = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function h(t) {
        return "function" == typeof t;
      }
      function c(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let d = (t) => Array.isArray(t) && "number" == typeof t[0],
        f = { linearEasing: void 0 },
        p = (function (t, e) {
          let n = (0, i.X)(t);
          return () => {
            var t;
            return null !== (t = f[e]) && void 0 !== t ? t : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = n(1038);
      let v = (t, e, n = 10) => {
        let i = "",
          r = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < r; e++) i += t((0, m.Y)(0, r - 1, e)) + ", ";
        return `linear(${i.substring(0, i.length - 2)})`;
      };
      function g(t) {
        return !!(
          ("function" == typeof t && p()) ||
          !t ||
          ("string" == typeof t && (t in b || p())) ||
          d(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        w = { x: !1, y: !1 };
      function A(t, e) {
        let n = (function (t, e, n) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          i = new AbortController();
        return [n, { passive: !0, ...e, signal: i.signal }, () => i.abort()];
      }
      function S(t) {
        return !("touch" === t.pointerType || w.x || w.y);
      }
      function x(t, e, n = {}) {
        let [i, r, s] = A(t, n),
          a = (t) => {
            if (!S(t)) return;
            let { target: n } = t,
              i = e(n, t);
            if ("function" != typeof i || !n) return;
            let s = (t) => {
              S(t) && (i(t), n.removeEventListener("pointerleave", s));
            };
            n.addEventListener("pointerleave", s, r);
          };
        return (
          i.forEach((t) => {
            t.addEventListener("pointerenter", a, r);
          }),
          s
        );
      }
      let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
        V = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        P = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        M = new WeakSet();
      function C(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function E(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let F = (t, e) => {
        let n = t.currentTarget;
        if (!n) return;
        let i = C(() => {
          if (M.has(n)) return;
          E(n, "down");
          let t = C(() => {
            E(n, "up");
          });
          n.addEventListener("keyup", t, e),
            n.addEventListener("blur", () => E(n, "cancel"), e);
        });
        n.addEventListener("keydown", i, e),
          n.addEventListener(
            "blur",
            () => n.removeEventListener("keydown", i),
            e
          );
      };
      function k(t) {
        return V(t) && !(w.x || w.y);
      }
      function D(t, e, n = {}) {
        let [i, r, s] = A(t, n),
          a = (t) => {
            let i = t.currentTarget;
            if (!k(t) || M.has(i)) return;
            M.add(i);
            let s = e(i, t),
              a = (t, e) => {
                window.removeEventListener("pointerup", o),
                  window.removeEventListener("pointercancel", l),
                  k(t) &&
                    M.has(i) &&
                    (M.delete(i),
                    "function" == typeof s && s(t, { success: e }));
              },
              o = (t) => {
                a(t, n.useGlobalTarget || T(i, t.target));
              },
              l = (t) => {
                a(t, !1);
              };
            window.addEventListener("pointerup", o, r),
              window.addEventListener("pointercancel", l, r);
          };
        return (
          i.forEach((t) => {
            P.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (n.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                a,
                r
              ),
              t.addEventListener("focus", (t) => F(t, r), r);
          }),
          s
        );
      }
      function $(t) {
        return "x" === t || "y" === t
          ? w[t]
            ? null
            : ((w[t] = !0),
              () => {
                w[t] = !1;
              })
          : w.x || w.y
          ? null
          : ((w.x = w.y = !0),
            () => {
              w.x = w.y = !1;
            });
      }
      n(4757), n(5085);
    },
    2159: function (t, e, n) {
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(5085);
      let r = i.Z,
        s = i.Z;
    },
    2474: function (t, e, n) {
      n.d(e, {
        X: function () {
          return i;
        },
      });
      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    1038: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    4757: function (t, e, n) {
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
  },
]);
