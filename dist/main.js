(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => c });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          ':root {\n  --coral: rgb(247, 165, 135);\n  --light-coral: rgb(252, 220, 210);\n  --dark-teal: rgb(0, 37, 25);\n  --light-teal: rgb(1, 82, 41);\n  --light-green: rgb(93, 228, 160);\n  --shadow: rgb(41, 40, 40);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu Condensed", sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  height: 98vh;\n  position: relative;\n}\n\n.projects {\n  background-color: var(--dark-teal);\n  color: white;\n}\n\n.projects-head {\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  min-height: 7vh;\n  box-shadow: 0px 3px 5px var(--shadow);\n  border-right: 2px solid var(--light-teal);\n}\n\n.projects-heading {\n  flex: 1;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  font-family: "Gloria Hallelujah", "Gill Sans", sans-serif;\n  font-size: 2rem;\n  align-self: center;\n  text-shadow: 2px 2px 1px var(--dark-teal);\n}\n\n.add-project {\n  align-self: center;\n  margin-right: 6px;\n  width: 25px;\n  height: 25px;\n}\n\n.add-project:hover {\n  width: 30px;\n  height: 30px;\n  transition: 0.5s ease;\n  cursor: pointer;\n}\n\n.projects-main {\n  font-size: 1.5rem;\n}\n\n.project {\n  padding: 10px 5px 10px 5px;\n}\n\n.project:hover {\n  cursor: pointer;\n  background-color: var(--light-teal);\n}\n\n.main {\n  background-color: var(--coral);\n  display: flex;\n  flex-direction: column;\n}\n\n.main-head {\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(90deg, var(--light-teal), var(--dark-teal));\n  align-items: center;\n  box-shadow: 0px 3px 5px var(--shadow);\n  min-height: 7vh;\n  margin-bottom: 5px;\n}\n\n.main-heading {\n  flex: 1;\n  text-align: center;\n  color: white;\n  font-family: "Gloria Hallelujah", "Gill Sans", sans-serif;\n  font-size: 2rem;\n  padding: 5px;\n  text-shadow: 2px 2px 1px var(--dark-teal);\n}\n\n.edit-project,\n.del-project,\n.add-task {\n  margin: 2px;\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n\n.edit-project:hover,\n.del-project:hover,\n.add-task:hover {\n  width: 25px;\n  height: 25px;\n  transition: 0.5s ease;\n  cursor: pointer;\n}\n\n.add-task {\n  margin-right: 15px;\n}\n\n.tasks {\n  display: grid;\n  grid-template-rows: repeat(auto-fill, minmax(35px, 1fr));\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.2rem;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  min-height: 35px;\n}\n\n.task:hover {\n  cursor: pointer;\n  background-color: var(--light-coral);\n}\n\n.due-date {\n  display: none;\n}\n\ninput[type="checkbox"],\n.edit-task,\n.del-task,\n.priority-image {\n  margin: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.edit-task:hover,\n.del-task:hover,\n.priority-image:hover {\n  width: 25px;\n  height: 25px;\n  transition: 0.5s ease;\n}\n\ninput[type="checkbox"]:checked {\n  accent-color: var(--dark-teal);\n}\n\ninput[type="checkbox"]:checked + p.task-text {\n  text-decoration: line-through;\n}\n\ninput[type="checkbox"]:hover {\n  cursor: pointer;\n  height: 25px;\n  width: 25px;\n}\n\n.task-icons-div {\n  background-color: var(--coral);\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 10px;\n}\n\n.task-text {\n  flex: 1;\n  padding-left: 10px;\n}\n\n.desc-text {\n  font-size: 1.1em;\n  font-style: italic;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  min-height: 35px;\n  display: none;\n  transition: 1s ease;\n}\n\n.new-project,\n.change-project {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 90%;\n  padding: 20px;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  color: white;\n  display: none;\n  grid-template-rows: repeat(2, 1fr);\n  border-radius: 10px;\n  border: 2px solid white;\n  box-shadow: 3px 3px 5px 2px var(--shadow);\n  transform: translate(-50%, -50%);\n}\n\n.error {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  padding: 20px;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  color: white;\n  display: none;\n  grid-template-rows: repeat(2, 1fr);\n  border-radius: 10px;\n  border: 2px solid white;\n  box-shadow: 3px 3px 5px 2px var(--shadow);\n  justify-content: center;\n}\n\n.project-input-div,\n.change-project-input-div {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n  justify-content: space-around;\n  align-items: center;\n}\n\ninput#project-name,\ninput#new-project-name {\n  height: 1.6rem;\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n\n.project-btns-div,\n.change-project-btns-div {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.new-task {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  width: 90%;\n  height: 70%;\n  display: none;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 10px;\n  color: white;\n  font-size: 1.2rem;\n  border: 2px solid white;\n  box-shadow: 3px 3px 5px 2px var(--shadow);\n}\n\n.edit-task-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  width: 90%;\n  height: 70%;\n  display: none;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 10px;\n  color: white;\n  font-size: 1.2rem;\n  border: 2px solid white;\n  box-shadow: 3px 3px 5px 2px var(--shadow);\n}\n\n.form-div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\ninput#name,\ninput#date,\nselect#priority,\ninput#new-name,\ninput#new-date,\nselect#new-priority {\n  height: 1.8rem;\n  font-size: 1.2rem;\n}\n\ntextarea#desc,\ntextarea#new-desc {\n  font-size: 1.2rem;\n}\n\n.form-label {\n  padding: 5px;\n  margin-right: 10px;\n}\n\n.create-project,\n.change-project-btn,\n.create-task,\n.update-task,\n.ok {\n  background-color: var(--coral);\n  font-weight: bold;\n}\n\n.create-project:hover,\n.change-project-btn:hover,\n.create-task:hover,\n.update-task:hover,\n.ok:hover,\n.cancel-project:hover,\n.cancel-task:hover,\n.cancel-update-task:hover,\n.change-cancel-project:hover {\n  background-color: var(--light-green);\n  transition: 1s ease;\n  cursor: pointer;\n}\n\n.cancel-project,\n.cancel-task,\n.cancel-update-task,\n.change-cancel-project {\n  background-color: rgb(245, 55, 22);\n  font-weight: bold;\n}\n\n.create-task,\n.cancel-task,\n.update-task,\n.cancel-update-task,\n.create-project,\n.cancel-project,\n.change-project-btn,\n.change-cancel-project,\n.ok {\n  padding: 3px 6px 3px 6px;\n  margin-left: 6px;\n  margin-right: 6px;\n  border-radius: 9px;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 4px black;\n}\n\n.create-task,\n.cancel-task {\n  padding: 8px 10px 8px 10px;\n}\n\n.create-task {\n  margin-right: 15px;\n}\n\n.form-btns.div {\n  padding: 5px;\n}\n\n@media only screen and (max-width: 396px) {\n  .priority-image,\n  .edit-task,\n  .del-task {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n@media only screen and (min-width: 550px) {\n  .new-project,\n  .edit-task-modal,\n  .change-project,\n  .new-task,\n  .error {\n    width: 500px;\n  }\n\n  .due-date {\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    display: block;\n  }\n\n  .task:hover + .desc-text {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 980px) {\n  .projects-main {\n    padding-left: 10px;\n  }\n\n  .add-project,\n  .edit-project,\n  .del-project,\n  .add-task,\n  .edit-task,\n  .del-task,\n  .priority-image {\n    height: 25px;\n    width: 25px;\n  }\n\n  .projects-heading,\n  .main-heading {\n    font-size: 3rem;\n    padding: 10px;\n  }\n\n  .project {\n    font-size: 2rem;\n  }\n\n  .task-text {\n    font-size: 1.5rem;\n  }\n\n  .due-date {\n    font-size: 1.5rem;\n  }\n\n  .project-input-div {\n    font-size: 1.5rem;\n  }\n\n  .new-task {\n    font-size: 1.5rem;\n  }\n}\n',
          "",
        ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (i[d] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var u = [].concat(e[s]);
                (r && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var d = e[c],
              s = r.base ? d[0] + r.base : d[0],
              u = o[s] || 0,
              l = "".concat(s, " ").concat(u);
            o[s] = u + 1;
            var h = n(l),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== h) t[h].references++, t[h].updater(m);
            else {
              var f = a(m, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: l, updater: f, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = n(o[i]);
              t[c].references--;
            }
            for (var d = r(e, a), s = 0; s < o.length; s++) {
              var u = n(o[s]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            o = d;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.nc = void 0);
  var r = {};
  (() => {
    n.d(r, { D: () => Le });
    var e = n(379),
      t = n.n(e),
      a = n(795),
      o = n.n(a),
      i = n(569),
      c = n.n(i),
      d = n(565),
      s = n.n(d),
      u = n(216),
      l = n.n(u),
      h = n(589),
      m = n.n(h),
      f = n(426),
      p = {};
    function g(e, t) {
      if (t.length < e)
        throw new TypeError(
          e +
            " argument" +
            (e > 1 ? "s" : "") +
            " required, but only " +
            t.length +
            " present"
        );
    }
    function v(e) {
      return (
        (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        v(e)
      );
    }
    function w(e) {
      return (
        (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        w(e)
      );
    }
    function y(e) {
      g(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date || ("object" === w(e) && "[object Date]" === t)
        ? new Date(e.getTime())
        : "number" == typeof e || "[object Number]" === t
        ? new Date(e)
        : (("string" != typeof e && "[object String]" !== t) ||
            "undefined" == typeof console ||
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    function b(e) {
      if (null === e || !0 === e || !1 === e) return NaN;
      var t = Number(e);
      return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
    }
    (p.styleTagTransform = m()),
      (p.setAttributes = s()),
      (p.insert = c().bind(null, "head")),
      (p.domAPI = o()),
      (p.insertStyleElement = l()),
      t()(f.Z, p),
      f.Z && f.Z.locals && f.Z.locals;
    var x = 864e5;
    function k(e) {
      g(1, arguments);
      var t = y(e),
        n = t.getUTCDay(),
        r = (n < 1 ? 7 : 0) + n - 1;
      return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t;
    }
    function T(e) {
      g(1, arguments);
      var t = y(e),
        n = t.getUTCFullYear(),
        r = new Date(0);
      r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
      var a = k(r),
        o = new Date(0);
      o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
      var i = k(o);
      return t.getTime() >= a.getTime()
        ? n + 1
        : t.getTime() >= i.getTime()
        ? n
        : n - 1;
    }
    var S = 6048e5;
    var C = {};
    function j() {
      return C;
    }
    function M(e, t) {
      var n, r, a, o, i, c, d, s;
      g(1, arguments);
      var u = j(),
        l = b(
          null !==
            (n =
              null !==
                (r =
                  null !==
                    (a =
                      null !== (o = null == t ? void 0 : t.weekStartsOn) &&
                      void 0 !== o
                        ? o
                        : null == t ||
                          null === (i = t.locale) ||
                          void 0 === i ||
                          null === (c = i.options) ||
                          void 0 === c
                        ? void 0
                        : c.weekStartsOn) && void 0 !== a
                    ? a
                    : u.weekStartsOn) && void 0 !== r
                ? r
                : null === (d = u.locale) ||
                  void 0 === d ||
                  null === (s = d.options) ||
                  void 0 === s
                ? void 0
                : s.weekStartsOn) && void 0 !== n
            ? n
            : 0
        );
      if (!(l >= 0 && l <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var h = y(e),
        m = h.getUTCDay(),
        f = (m < l ? 7 : 0) + m - l;
      return h.setUTCDate(h.getUTCDate() - f), h.setUTCHours(0, 0, 0, 0), h;
    }
    function E(e, t) {
      var n, r, a, o, i, c, d, s;
      g(1, arguments);
      var u = y(e),
        l = u.getUTCFullYear(),
        h = j(),
        m = b(
          null !==
            (n =
              null !==
                (r =
                  null !==
                    (a =
                      null !==
                        (o = null == t ? void 0 : t.firstWeekContainsDate) &&
                      void 0 !== o
                        ? o
                        : null == t ||
                          null === (i = t.locale) ||
                          void 0 === i ||
                          null === (c = i.options) ||
                          void 0 === c
                        ? void 0
                        : c.firstWeekContainsDate) && void 0 !== a
                    ? a
                    : h.firstWeekContainsDate) && void 0 !== r
                ? r
                : null === (d = h.locale) ||
                  void 0 === d ||
                  null === (s = d.options) ||
                  void 0 === s
                ? void 0
                : s.firstWeekContainsDate) && void 0 !== n
            ? n
            : 1
        );
      if (!(m >= 1 && m <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var f = new Date(0);
      f.setUTCFullYear(l + 1, 0, m), f.setUTCHours(0, 0, 0, 0);
      var p = M(f, t),
        v = new Date(0);
      v.setUTCFullYear(l, 0, m), v.setUTCHours(0, 0, 0, 0);
      var w = M(v, t);
      return u.getTime() >= p.getTime()
        ? l + 1
        : u.getTime() >= w.getTime()
        ? l
        : l - 1;
    }
    var D = 6048e5;
    function P(e, t) {
      for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
        r = "0" + r;
      return n + r;
    }
    const q = function (e, t) {
        var n = e.getUTCFullYear(),
          r = n > 0 ? n : 1 - n;
        return P("yy" === t ? r % 100 : r, t.length);
      },
      U = function (e, t) {
        var n = e.getUTCMonth();
        return "M" === t ? String(n + 1) : P(n + 1, 2);
      },
      N = function (e, t) {
        return P(e.getUTCDate(), t.length);
      },
      L = function (e, t) {
        return P(e.getUTCHours() % 12 || 12, t.length);
      },
      W = function (e, t) {
        return P(e.getUTCHours(), t.length);
      },
      Y = function (e, t) {
        return P(e.getUTCMinutes(), t.length);
      },
      O = function (e, t) {
        return P(e.getUTCSeconds(), t.length);
      },
      z = function (e, t) {
        var n = t.length,
          r = e.getUTCMilliseconds();
        return P(Math.floor(r * Math.pow(10, n - 3)), t.length);
      };
    var B = {
      G: function (e, t, n) {
        var r = e.getUTCFullYear() > 0 ? 1 : 0;
        switch (t) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(r, { width: "abbreviated" });
          case "GGGGG":
            return n.era(r, { width: "narrow" });
          default:
            return n.era(r, { width: "wide" });
        }
      },
      y: function (e, t, n) {
        if ("yo" === t) {
          var r = e.getUTCFullYear(),
            a = r > 0 ? r : 1 - r;
          return n.ordinalNumber(a, { unit: "year" });
        }
        return q(e, t);
      },
      Y: function (e, t, n, r) {
        var a = E(e, r),
          o = a > 0 ? a : 1 - a;
        return "YY" === t
          ? P(o % 100, 2)
          : "Yo" === t
          ? n.ordinalNumber(o, { unit: "year" })
          : P(o, t.length);
      },
      R: function (e, t) {
        return P(T(e), t.length);
      },
      u: function (e, t) {
        return P(e.getUTCFullYear(), t.length);
      },
      Q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
          case "Q":
            return String(r);
          case "QQ":
            return P(r, 2);
          case "Qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "QQQ":
            return n.quarter(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return n.quarter(r, { width: "narrow", context: "formatting" });
          default:
            return n.quarter(r, { width: "wide", context: "formatting" });
        }
      },
      q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
          case "q":
            return String(r);
          case "qq":
            return P(r, 2);
          case "qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "qqq":
            return n.quarter(r, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return n.quarter(r, { width: "narrow", context: "standalone" });
          default:
            return n.quarter(r, { width: "wide", context: "standalone" });
        }
      },
      M: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
          case "M":
          case "MM":
            return U(e, t);
          case "Mo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "MMM":
            return n.month(r, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return n.month(r, { width: "narrow", context: "formatting" });
          default:
            return n.month(r, { width: "wide", context: "formatting" });
        }
      },
      L: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
          case "L":
            return String(r + 1);
          case "LL":
            return P(r + 1, 2);
          case "Lo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "LLL":
            return n.month(r, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return n.month(r, { width: "narrow", context: "standalone" });
          default:
            return n.month(r, { width: "wide", context: "standalone" });
        }
      },
      w: function (e, t, n, r) {
        var a = (function (e, t) {
          g(1, arguments);
          var n = y(e),
            r =
              M(n, t).getTime() -
              (function (e, t) {
                var n, r, a, o, i, c, d, s;
                g(1, arguments);
                var u = j(),
                  l = b(
                    null !==
                      (n =
                        null !==
                          (r =
                            null !==
                              (a =
                                null !==
                                  (o =
                                    null == t
                                      ? void 0
                                      : t.firstWeekContainsDate) && void 0 !== o
                                  ? o
                                  : null == t ||
                                    null === (i = t.locale) ||
                                    void 0 === i ||
                                    null === (c = i.options) ||
                                    void 0 === c
                                  ? void 0
                                  : c.firstWeekContainsDate) && void 0 !== a
                              ? a
                              : u.firstWeekContainsDate) && void 0 !== r
                          ? r
                          : null === (d = u.locale) ||
                            void 0 === d ||
                            null === (s = d.options) ||
                            void 0 === s
                          ? void 0
                          : s.firstWeekContainsDate) && void 0 !== n
                      ? n
                      : 1
                  ),
                  h = E(e, t),
                  m = new Date(0);
                return (
                  m.setUTCFullYear(h, 0, l), m.setUTCHours(0, 0, 0, 0), M(m, t)
                );
              })(n, t).getTime();
          return Math.round(r / D) + 1;
        })(e, r);
        return "wo" === t
          ? n.ordinalNumber(a, { unit: "week" })
          : P(a, t.length);
      },
      I: function (e, t, n) {
        var r = (function (e) {
          g(1, arguments);
          var t = y(e),
            n =
              k(t).getTime() -
              (function (e) {
                g(1, arguments);
                var t = T(e),
                  n = new Date(0);
                return (
                  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), k(n)
                );
              })(t).getTime();
          return Math.round(n / S) + 1;
        })(e);
        return "Io" === t
          ? n.ordinalNumber(r, { unit: "week" })
          : P(r, t.length);
      },
      d: function (e, t, n) {
        return "do" === t
          ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
          : N(e, t);
      },
      D: function (e, t, n) {
        var r = (function (e) {
          g(1, arguments);
          var t = y(e),
            n = t.getTime();
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          var r = n - t.getTime();
          return Math.floor(r / x) + 1;
        })(e);
        return "Do" === t
          ? n.ordinalNumber(r, { unit: "dayOfYear" })
          : P(r, t.length);
      },
      E: function (e, t, n) {
        var r = e.getUTCDay();
        switch (t) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      e: function (e, t, n, r) {
        var a = e.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
          case "e":
            return String(o);
          case "ee":
            return P(o, 2);
          case "eo":
            return n.ordinalNumber(o, { unit: "day" });
          case "eee":
            return n.day(a, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return n.day(a, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return n.day(a, { width: "short", context: "formatting" });
          default:
            return n.day(a, { width: "wide", context: "formatting" });
        }
      },
      c: function (e, t, n, r) {
        var a = e.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
          case "c":
            return String(o);
          case "cc":
            return P(o, t.length);
          case "co":
            return n.ordinalNumber(o, { unit: "day" });
          case "ccc":
            return n.day(a, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return n.day(a, { width: "narrow", context: "standalone" });
          case "cccccc":
            return n.day(a, { width: "short", context: "standalone" });
          default:
            return n.day(a, { width: "wide", context: "standalone" });
        }
      },
      i: function (e, t, n) {
        var r = e.getUTCDay(),
          a = 0 === r ? 7 : r;
        switch (t) {
          case "i":
            return String(a);
          case "ii":
            return P(a, t.length);
          case "io":
            return n.ordinalNumber(a, { unit: "day" });
          case "iii":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      a: function (e, t, n) {
        var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
          case "a":
          case "aa":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaa":
            return n
              .dayPeriod(r, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "aaaaa":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      b: function (e, t, n) {
        var r,
          a = e.getUTCHours();
        switch (
          ((r =
            12 === a
              ? "noon"
              : 0 === a
              ? "midnight"
              : a / 12 >= 1
              ? "pm"
              : "am"),
          t)
        ) {
          case "b":
          case "bb":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbb":
            return n
              .dayPeriod(r, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "bbbbb":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      B: function (e, t, n) {
        var r,
          a = e.getUTCHours();
        switch (
          ((r =
            a >= 17
              ? "evening"
              : a >= 12
              ? "afternoon"
              : a >= 4
              ? "morning"
              : "night"),
          t)
        ) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      h: function (e, t, n) {
        if ("ho" === t) {
          var r = e.getUTCHours() % 12;
          return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
        }
        return L(e, t);
      },
      H: function (e, t, n) {
        return "Ho" === t
          ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
          : W(e, t);
      },
      K: function (e, t, n) {
        var r = e.getUTCHours() % 12;
        return "Ko" === t
          ? n.ordinalNumber(r, { unit: "hour" })
          : P(r, t.length);
      },
      k: function (e, t, n) {
        var r = e.getUTCHours();
        return (
          0 === r && (r = 24),
          "ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : P(r, t.length)
        );
      },
      m: function (e, t, n) {
        return "mo" === t
          ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
          : Y(e, t);
      },
      s: function (e, t, n) {
        return "so" === t
          ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
          : O(e, t);
      },
      S: function (e, t) {
        return z(e, t);
      },
      X: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        if (0 === a) return "Z";
        switch (t) {
          case "X":
            return A(a);
          case "XXXX":
          case "XX":
            return F(a);
          default:
            return F(a, ":");
        }
      },
      x: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "x":
            return A(a);
          case "xxxx":
          case "xx":
            return F(a);
          default:
            return F(a, ":");
        }
      },
      O: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + H(a, ":");
          default:
            return "GMT" + F(a, ":");
        }
      },
      z: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + H(a, ":");
          default:
            return "GMT" + F(a, ":");
        }
      },
      t: function (e, t, n, r) {
        var a = r._originalDate || e;
        return P(Math.floor(a.getTime() / 1e3), t.length);
      },
      T: function (e, t, n, r) {
        return P((r._originalDate || e).getTime(), t.length);
      },
    };
    function H(e, t) {
      var n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = Math.floor(r / 60),
        o = r % 60;
      if (0 === o) return n + String(a);
      var i = t || "";
      return n + String(a) + i + P(o, 2);
    }
    function A(e, t) {
      return e % 60 == 0
        ? (e > 0 ? "-" : "+") + P(Math.abs(e) / 60, 2)
        : F(e, t);
    }
    function F(e, t) {
      var n = t || "",
        r = e > 0 ? "-" : "+",
        a = Math.abs(e);
      return r + P(Math.floor(a / 60), 2) + n + P(a % 60, 2);
    }
    const G = B;
    var I = function (e, t) {
        switch (e) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          default:
            return t.date({ width: "full" });
        }
      },
      Q = function (e, t) {
        switch (e) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          default:
            return t.time({ width: "full" });
        }
      };
    const R = {
      p: Q,
      P: function (e, t) {
        var n,
          r = e.match(/(P+)(p+)?/) || [],
          a = r[1],
          o = r[2];
        if (!o) return I(e, t);
        switch (a) {
          case "P":
            n = t.dateTime({ width: "short" });
            break;
          case "PP":
            n = t.dateTime({ width: "medium" });
            break;
          case "PPP":
            n = t.dateTime({ width: "long" });
            break;
          default:
            n = t.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", I(a, t)).replace("{{time}}", Q(o, t));
      },
    };
    var X = ["D", "DD"],
      J = ["YY", "YYYY"];
    function _(e, t, n) {
      if ("YYYY" === e)
        throw new RangeError(
          "Use `yyyy` instead of `YYYY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(
              n,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if ("YY" === e)
        throw new RangeError(
          "Use `yy` instead of `YY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(
              n,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if ("D" === e)
        throw new RangeError(
          "Use `d` instead of `D` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(
              n,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if ("DD" === e)
        throw new RangeError(
          "Use `dd` instead of `DD` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(
              n,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
    }
    var Z = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
    function $(e) {
      return function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth];
      };
    }
    const V = {
      date: $({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: $({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: $({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    };
    var K = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
    function ee(e) {
      return function (t, n) {
        var r;
        if (
          "formatting" ===
            (null != n && n.context ? String(n.context) : "standalone") &&
          e.formattingValues
        ) {
          var a = e.defaultFormattingWidth || e.defaultWidth,
            o = null != n && n.width ? String(n.width) : a;
          r = e.formattingValues[o] || e.formattingValues[a];
        } else {
          var i = e.defaultWidth,
            c = null != n && n.width ? String(n.width) : e.defaultWidth;
          r = e.values[c] || e.values[i];
        }
        return r[e.argumentCallback ? e.argumentCallback(t) : t];
      };
    }
    const te = {
      ordinalNumber: function (e, t) {
        var n = Number(e),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      era: ee({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        defaultWidth: "wide",
      }),
      quarter: ee({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
          return e - 1;
        },
      }),
      month: ee({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      day: ee({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      dayPeriod: ee({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
    };
    function ne(e) {
      return function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.width,
          a = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          o = t.match(a);
        if (!o) return null;
        var i,
          c = o[0],
          d = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          s = Array.isArray(d)
            ? (function (e, t) {
                for (var n = 0; n < e.length; n++) if (e[n].test(c)) return n;
              })(d)
            : (function (e, t) {
                for (var n in e)
                  if (e.hasOwnProperty(n) && e[n].test(c)) return n;
              })(d);
        return (
          (i = e.valueCallback ? e.valueCallback(s) : s),
          {
            value: (i = n.valueCallback ? n.valueCallback(i) : i),
            rest: t.slice(c.length),
          }
        );
      };
    }
    var re,
      ae = {
        ordinalNumber:
          ((re = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.match(re.matchPattern);
            if (!n) return null;
            var r = n[0],
              a = e.match(re.parsePattern);
            if (!a) return null;
            var o = re.valueCallback ? re.valueCallback(a[0]) : a[0];
            return {
              value: (o = t.valueCallback ? t.valueCallback(o) : o),
              rest: e.slice(r.length),
            };
          }),
        era: ne({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated:
              /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: "any",
        }),
        quarter: ne({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: "any",
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: ne({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [
              /^j/i,
              /^f/i,
              /^m/i,
              /^a/i,
              /^m/i,
              /^j/i,
              /^j/i,
              /^a/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
            any: [
              /^ja/i,
              /^f/i,
              /^mar/i,
              /^ap/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^au/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
          },
          defaultParseWidth: "any",
        }),
        day: ne({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: "any",
        }),
        dayPeriod: ne({
          matchPatterns: {
            narrow:
              /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: "any",
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: "any",
        }),
      };
    const oe = {
      code: "en-US",
      formatDistance: function (e, t, n) {
        var r,
          a = Z[e];
        return (
          (r =
            "string" == typeof a
              ? a
              : 1 === t
              ? a.one
              : a.other.replace("{{count}}", t.toString())),
          null != n && n.addSuffix
            ? n.comparison && n.comparison > 0
              ? "in " + r
              : r + " ago"
            : r
        );
      },
      formatLong: V,
      formatRelative: function (e, t, n, r) {
        return K[e];
      },
      localize: te,
      match: ae,
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
    var ie = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      ce = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      de = /^'([^]*?)'?$/,
      se = /''/g,
      ue = /[a-zA-Z]/;
    function le(e, t, n) {
      var r, a, o, i, c, d, s, u, l, h, m, f, p, w, x, k, T, S;
      g(2, arguments);
      var C = String(t),
        M = j(),
        E =
          null !==
            (r =
              null !== (a = null == n ? void 0 : n.locale) && void 0 !== a
                ? a
                : M.locale) && void 0 !== r
            ? r
            : oe,
        D = b(
          null !==
            (o =
              null !==
                (i =
                  null !==
                    (c =
                      null !==
                        (d = null == n ? void 0 : n.firstWeekContainsDate) &&
                      void 0 !== d
                        ? d
                        : null == n ||
                          null === (s = n.locale) ||
                          void 0 === s ||
                          null === (u = s.options) ||
                          void 0 === u
                        ? void 0
                        : u.firstWeekContainsDate) && void 0 !== c
                    ? c
                    : M.firstWeekContainsDate) && void 0 !== i
                ? i
                : null === (l = M.locale) ||
                  void 0 === l ||
                  null === (h = l.options) ||
                  void 0 === h
                ? void 0
                : h.firstWeekContainsDate) && void 0 !== o
            ? o
            : 1
        );
      if (!(D >= 1 && D <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var P = b(
        null !==
          (m =
            null !==
              (f =
                null !==
                  (p =
                    null !== (w = null == n ? void 0 : n.weekStartsOn) &&
                    void 0 !== w
                      ? w
                      : null == n ||
                        null === (x = n.locale) ||
                        void 0 === x ||
                        null === (k = x.options) ||
                        void 0 === k
                      ? void 0
                      : k.weekStartsOn) && void 0 !== p
                  ? p
                  : M.weekStartsOn) && void 0 !== f
              ? f
              : null === (T = M.locale) ||
                void 0 === T ||
                null === (S = T.options) ||
                void 0 === S
              ? void 0
              : S.weekStartsOn) && void 0 !== m
          ? m
          : 0
      );
      if (!(P >= 0 && P <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if (!E.localize)
        throw new RangeError("locale must contain localize property");
      if (!E.formatLong)
        throw new RangeError("locale must contain formatLong property");
      var q = y(e);
      if (
        !(function (e) {
          if (
            (g(1, arguments),
            !(function (e) {
              return (
                g(1, arguments),
                e instanceof Date ||
                  ("object" === v(e) &&
                    "[object Date]" === Object.prototype.toString.call(e))
              );
            })(e) && "number" != typeof e)
          )
            return !1;
          var t = y(e);
          return !isNaN(Number(t));
        })(q)
      )
        throw new RangeError("Invalid time value");
      var U = (function (e) {
          var t = new Date(
            Date.UTC(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds()
            )
          );
          return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
        })(q),
        N = (function (e, t) {
          return (
            g(2, arguments),
            (function (e, t) {
              g(2, arguments);
              var n = y(e).getTime(),
                r = b(t);
              return new Date(n + r);
            })(e, -b(t))
          );
        })(q, U),
        L = {
          firstWeekContainsDate: D,
          weekStartsOn: P,
          locale: E,
          _originalDate: q,
        };
      return C.match(ce)
        .map(function (e) {
          var t = e[0];
          return "p" === t || "P" === t ? (0, R[t])(e, E.formatLong) : e;
        })
        .join("")
        .match(ie)
        .map(function (r) {
          if ("''" === r) return "'";
          var a,
            o,
            i = r[0];
          if ("'" === i)
            return (o = (a = r).match(de)) ? o[1].replace(se, "'") : a;
          var c,
            d = G[i];
          if (d)
            return (
              (null != n && n.useAdditionalWeekYearTokens) ||
                ((c = r), -1 === J.indexOf(c)) ||
                _(r, t, String(e)),
              (null != n && n.useAdditionalDayOfYearTokens) ||
                !(function (e) {
                  return -1 !== X.indexOf(e);
                })(r) ||
                _(r, t, String(e)),
              d(N, r, E.localize, L)
            );
          if (i.match(ue))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                i +
                "`"
            );
          return r;
        })
        .join("");
    }
    const he = n.p + "e22182244c3c1addd57a.svg",
      me = n.p + "569aa203c0098cc82f17.svg",
      fe = n.p + "993e6dde519523eb3e58.svg",
      pe = n.p + "074b1502494c43b75622.svg",
      ge = n.p + "9f6e383a910482857451.svg",
      ve = document.querySelector(".projects-main"),
      we = document.querySelector(".main-heading"),
      ye = document.querySelector(".tasks"),
      be = document.querySelector(".del-project");
    function xe() {
      (ve.innerHTML = ""),
        Le.forEach((e, t) => {
          const n = document.createElement("div");
          (n.dataset.value = t),
            n.classList.add("project"),
            e.current && n.classList.add("current"),
            (n.textContent = e.name),
            ve.appendChild(n);
        }),
        (function () {
          document.querySelectorAll(".project").forEach((e) =>
            e.addEventListener("click", function (e) {
              var t;
              (t = e.target.dataset.value),
                Me(),
                (Le[t].current = !0),
                xe(),
                ke(),
                Te(),
                Pe.hide(),
                Ue.hide(),
                Ee();
            })
          );
          let e = document.querySelector(".del-project"),
            t = document.querySelector(".main-heading"),
            n = document.querySelector(".tasks");
          e.addEventListener("click", function (e) {
            var r;
            e.stopPropagation(),
              (r = e.target.dataset.value),
              Le.length > 1 && (0 != r ? Le.splice(r, 1) : Le.splice(0, 1)),
              Ee(),
              (t.textContent = ""),
              (n.innerHTML = ""),
              xe();
          });
        })();
    }
    function ke() {
      (we.textContent = je().name),
        (we.dataset.value = Le.findIndex((e) => e.current)),
        (be.dataset.value = Le.findIndex((e) => e.current));
    }
    function Te() {
      (ye.innerHTML = ""),
        je().toDos.forEach((e, t) => {
          const n = document.createElement("div");
          n.classList.add("task"), (n.dataset.value = t);
          const r = document.createElement("input");
          (r.type = "checkbox"), r.classList.add("checkbox"), n.appendChild(r);
          const a = document.createElement("p");
          if (
            (a.classList.add("task-text"),
            (a.textContent = e.name),
            n.appendChild(a),
            e.date)
          ) {
            const t = document.createElement("p");
            t.classList.add("due-date"),
              (t.textContent = le(new Date(e.date), "dd/MM/yy")),
              n.appendChild(t);
          }
          const o = document.createElement("div");
          o.classList.add("task-icons-div"), n.appendChild(o);
          const i = document.createElement("img");
          i.classList.add("priority-image"),
            (i.alt = "Priority level"),
            "high" == e.priority
              ? (i.src = he)
              : "medium" == e.priority
              ? (i.src = me)
              : (i.src = fe),
            o.appendChild(i);
          const c = document.createElement("img");
          c.classList.add("edit-task"),
            (c.alt = "Edit task"),
            (c.src = pe),
            o.appendChild(c);
          const d = document.createElement("img");
          if (
            (d.classList.add("del-task"),
            (d.alt = "Delete task"),
            (d.src = ge),
            o.appendChild(d),
            ye.appendChild(n),
            e.desc)
          ) {
            const t = document.createElement("p");
            t.classList.add("desc-text"),
              (t.textContent = e.desc),
              ye.appendChild(t);
          }
        }),
        (function () {
          document.querySelectorAll(".task-text").forEach((e) =>
            e.addEventListener("click", function (e) {
              qe.show(e.target.parentNode.dataset.value);
            })
          ),
            document.querySelectorAll(".due-date").forEach((e) =>
              e.addEventListener("click", function (e) {
                qe.show(e.target.parentNode.dataset.value);
              })
            ),
            document.querySelectorAll(".priority-image").forEach((e) =>
              e.addEventListener("click", function (e) {
                qe.show(e.target.parentNode.parentNode.dataset.value);
              })
            ),
            document.querySelectorAll(".edit-task").forEach((e) =>
              e.addEventListener("click", function (e) {
                qe.show(e.target.parentNode.parentNode.dataset.value);
              })
            ),
            document.querySelectorAll(".del-task").forEach((e) =>
              e.addEventListener("click", function (e) {
                var t;
                (t = e.target.parentNode.parentNode.dataset.value),
                  je().toDos.splice(t, 1),
                  Te(),
                  Ee();
              })
            );
          let e = document.querySelector(".cancel-update-task");
          e && e.addEventListener("click", qe.hide);
          let t = document.querySelector(".update-task");
          t &&
            t.addEventListener("click", function (e) {
              qe.submit(e.target.parentNode.parentNode.dataset.value);
            });
        })();
    }
    const Se = (e) => {
        Me(),
          Le.push({ name: e, toDos: [], current: !0 }),
          Ce("Example task", "A simple to-do app", "09/03/23", "high"),
          xe(),
          ke(),
          Te();
      },
      Ce = (e, t, n, r) => {
        je().toDos.push({
          name: e,
          desc: t,
          date: n,
          priority: r,
          completed: !1,
        });
      };
    function je() {
      return Le.filter((e) => 1 == e.current)[0];
    }
    function Me() {
      Le.forEach((e) => (e.current = !1));
    }
    function Ee() {
      window.localStorage.setItem("user", JSON.stringify(Le));
    }
    const De = (() => {
        const e = document.querySelector(".add-project"),
          t = document.querySelector(".new-project"),
          n = document.querySelector(".create-project"),
          r = document.querySelector(".cancel-project"),
          a = document.querySelector("#project-name");
        function o() {
          t.style.display = "none";
        }
        return {
          show: function () {
            (a.value = ""), (t.style.display = "grid");
          },
          hide: o,
          addProject: function () {
            "" != a.value ? (Se(a.value), o(), Ee()) : Ne.show();
          },
          addProjectBtn: e,
          createProjectBtn: n,
          cancelProjectBtn: r,
        };
      })(),
      Pe = (() => {
        const e = document.querySelector(".main-heading"),
          t = document.querySelector(".change-project"),
          n = document.querySelector("#new-project-name");
        function r() {
          (t.style.display = "none"), (e.textContent = je().name);
        }
        return {
          show: function () {
            (e.textContent = ""), (t.style.display = "grid");
          },
          hide: r,
          submit: function () {
            (je().name = n.value), r(), xe(), ke(), Ee();
          },
          editProjectIcon: document.querySelector(".edit-project"),
          confirmNewName: document.querySelector(".change-project-btn"),
          cancelNewName: document.querySelector(".change-cancel-project"),
        };
      })(),
      qe = (() => {
        const e = document.querySelector(".edit-task-modal"),
          t = document.querySelector("#new-name"),
          n = document.querySelector("#new-desc"),
          r = document.querySelector("#new-date"),
          a = document.querySelector("#new-priority");
        function o() {
          document.querySelector(".edit-task-modal").style.display = "none";
        }
        return {
          editTaskBtn: document.querySelector(".update-task"),
          cancelEditTaskBtn: document.querySelector(".cancel-update-task"),
          show: function (o) {
            (e.dataset.value = o),
              (e.style.display = "flex"),
              (t.value = je().toDos[o].name),
              (n.value = je().toDos[o].desc),
              (r.value = je().toDos[o].date),
              (a.value = je().toDos[o].priority);
          },
          hide: o,
          submit: function (e) {
            "" == t.value || "" == r.value
              ? Ne.show()
              : ((je().toDos[e].name = t.value),
                (je().toDos[e].desc = n.value),
                (je().toDos[e].date = r.value),
                (je().toDos[e].priority = a.value),
                Te(),
                Ee(),
                o());
          },
        };
      })(),
      Ue = (() => {
        const e = document.querySelector(".new-task"),
          t = document.querySelector(".add-task"),
          n = document.querySelector(".create-task"),
          r = document.querySelector(".cancel-task"),
          a = document.querySelector("#name"),
          o = document.querySelector("#desc"),
          i = document.querySelector("#date"),
          c = document.querySelector("#priority");
        function d() {
          (e.style.display = "none"),
            (t.style.display = "block"),
            (a.value = ""),
            (o.value = ""),
            (i.value = ""),
            (c.value = "");
        }
        return {
          newTaskModal: e,
          addTaskBtn: t,
          createTaskBtn: n,
          cancelTaskBtn: r,
          show: function () {
            (e.style.display = "flex"), (t.style.display = "none");
          },
          hide: d,
          submit: function () {
            "" == a.value || "" == i.value
              ? Ne.show()
              : (Ce(a.value, o.value, i.value, c.value), d(), Te(), Ee());
          },
        };
      })(),
      Ne = (() => {
        const e = document.querySelector(".error");
        return {
          show: function () {
            e.style.display = "grid";
          },
          hide: function () {
            e.style.display = "none";
          },
          okBtn: document.querySelector(".ok"),
        };
      })();
    De.addProjectBtn.addEventListener("click", De.show),
      De.cancelProjectBtn.addEventListener("click", De.hide),
      De.createProjectBtn.addEventListener("click", De.addProject),
      Pe.editProjectIcon.addEventListener("click", Pe.show),
      Pe.confirmNewName.addEventListener("click", Pe.submit),
      Pe.cancelNewName.addEventListener("click", Pe.hide),
      Ue.addTaskBtn.addEventListener("click", Ue.show),
      Ue.cancelTaskBtn.addEventListener("click", Ue.hide),
      Ue.createTaskBtn.addEventListener("click", Ue.submit),
      qe.editTaskBtn.addEventListener("click", qe.submit),
      qe.cancelEditTaskBtn.addEventListener("click", qe.hide),
      Ne.okBtn.addEventListener("click", Ne.hide);
    let Le = [];
    null == localStorage.getItem("user")
      ? (Se("Example Project"),
        Ce("Example task", "Example description", "09/03/23", "high"),
        Te())
      : ((Le = JSON.parse(window.localStorage.getItem("user"))),
        xe(),
        ke(),
        Te());
  })();
})();
