(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    a,
    i,
    o,
    p,
    s,
    c,
    d,
    l,
    f,
    u,
    x = {
      426: (n, e, t) => {
        t.d(e, { Z: () => p });
        var r = t(81),
          a = t.n(r),
          i = t(645),
          o = t.n(i)()(a());
        o.push([
          n.id,
          ':root {\n  --coral: rgb(248, 129, 86);\n  --dark-teal: rgb(0, 37, 25);\n  --light-teal: rgb(4, 197, 101);\n  --shadow: rgb(41, 40, 40);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu Condensed", sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  height: 98vh;\n  position: relative;\n}\n\n.projects {\n  background-color: rgb(19, 65, 38);\n  color: white;\n}\n\n.projects-head {\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  height: 7vh;\n  box-shadow: 0px 3px 5px var(--shadow);\n}\n\n.projects-heading {\n  flex: 1;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  font-family: "Barriecito", "Gill Sans", sans-serif;\n  font-size: 2rem;\n  align-self: center;\n  text-shadow: 2px 2px 3px black;\n}\n\n.add-project {\n  align-self: center;\n  margin: 2px;\n  width: 25px;\n  height: 25px;\n}\n\n.projects-main {\n  font-size: 1.5rem;\n}\n\n.project {\n  padding: 10px 5px 10px 5px;\n}\n\n.main {\n  background-color: var(--coral);\n  display: flex;\n  flex-direction: column;\n  border-left: 3px solid white;\n}\n\n.main-head {\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  align-items: center;\n  box-shadow: 0px 3px 5px var(--shadow);\n  min-height: 7vh;\n  margin-bottom: 5px;\n}\n\n.main-heading {\n  flex: 1;\n  text-align: center;\n  color: white;\n  font-family: "Barriecito", "Gill Sans", sans-serif;\n  font-size: 2rem;\n  padding: 5px;\n  text-shadow: 2px 2px 3px black;\n}\n\n.edit-project,\n.del-project,\n.add-task {\n  margin: 2px;\n  width: 20px;\n  height: 20px;\n}\n\n.tasks {\n  display: grid;\n  grid-template-rows: repeat(auto-fill, minmax(35Spx, 1fr));\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.2rem;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  min-height: 35px;\n}\n\ninput[type="checkbox"],\n.edit-task,\n.del-task,\n.priority-image {\n  margin: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.priority-image {\n  stroke: darkred;\n}\n\n.task-text {\n  flex: 1;\n  padding-left: 10px;\n}\n\n.new-project {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px;\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  color: white;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  border-radius: 10px;\n  border: 2px solid white;\n  box-shadow: 3px 3px 5px 2px var(--shadow);\n}\n\n.project-input-div {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n  justify-content: space-around;\n  align-items: center;\n}\n\ninput#project-name {\n  height: 1.6rem;\n  margin-top: 10px;\n}\n\n.project-btns-div {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.new-task {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(90deg, var(--dark-teal), var(--light-teal));\n  width: 90%;\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 10px;\n  color: white;\n  font-size: 1.2rem;\n  border: 2px solid white;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\ninput#name,\ninput#date,\nselect#priority {\n  height: 1.5rem;\n  font-size: 1.2rem;\n}\n\n.form-label {\n  padding: 5px;\n  margin-right: 10px;\n}\n\n.create-project,\n.create-task {\n  background-color: var(--coral);\n  font-weight: bold;\n}\n\n.cancel-project,\n.cancel-task {\n  background-color: rgb(245, 55, 22);\n  font-weight: bold;\n}\n\n.create-task,\n.cancel-task,\n.create-project,\n.cancel-project {\n  padding: 3px 6px 3px 6px;\n  margin-left: 6px;\n  margin-right: 6px;\n  border-radius: 9px;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 4px black;\n}\n\n.create-task,\n.cancel-task {\n  padding: 8px 10px 8px 10px;\n}\n\n.create-task {\n  margin-right: 15px;\n}\n\n.form-btns.div {\n  padding: 5px;\n}\n\n.hidden {\n  display: none;\n}\n',
          "",
        ]);
        const p = o;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, a, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var o = {};
              if (r)
                for (var p = 0; p < this.length; p++) {
                  var s = this[p][0];
                  null != s && (o[s] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var d = [].concat(n[c]);
                (r && o[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, o = [], p = 0; p < n.length; p++) {
            var s = n[p],
              c = r.base ? s[0] + r.base : s[0],
              d = i[c] || 0,
              l = "".concat(c, " ").concat(d);
            i[c] = d + 1;
            var f = t(l),
              u = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(u);
            else {
              var x = a(u, r);
              (r.byIndex = p),
                e.splice(p, 0, { identifier: l, updater: x, references: 1 });
            }
            o.push(l);
          }
          return o;
        }
        function a(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, a) {
          var i = r((n = n || []), (a = a || {}));
          return function (n) {
            n = n || [];
            for (var o = 0; o < i.length; o++) {
              var p = t(i[o]);
              e[p].references--;
            }
            for (var s = r(n, a), c = 0; c < i.length; c++) {
              var d = t(i[c]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    g = {};
  function h(n) {
    var e = g[n];
    if (void 0 !== e) return e.exports;
    var t = (g[n] = { id: n, exports: {} });
    return x[n](t, t.exports, h), t.exports;
  }
  (h.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return h.d(e, { a: e }), e;
  }),
    (h.d = (n, e) => {
      for (var t in e)
        h.o(e, t) &&
          !h.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (h.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (h.nc = void 0),
    (n = h(379)),
    (e = h.n(n)),
    (t = h(795)),
    (r = h.n(t)),
    (a = h(569)),
    (i = h.n(a)),
    (o = h(565)),
    (p = h.n(o)),
    (s = h(216)),
    (c = h.n(s)),
    (d = h(589)),
    (l = h.n(d)),
    (f = h(426)),
    ((u = {}).styleTagTransform = l()),
    (u.setAttributes = p()),
    (u.insert = i().bind(null, "head")),
    (u.domAPI = r()),
    (u.insertStyleElement = c()),
    e()(f.Z, u),
    f.Z && f.Z.locals && f.Z.locals;
})();
