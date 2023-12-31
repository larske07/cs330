/*!

Holder - client side image placeholders
Version 2.8.0+7srgw
Â© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
! function(e) {
    if (e.document) {
        var t = e.document;
        t.querySelectorAll || (t.querySelectorAll = function(n) {
                var r, i = t.createElement("style"),
                    o = [];
                for (t.documentElement.firstChild.appendChild(i), t._qsa = [], i.styleSheet.cssText = n + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", e.scrollBy(0, 0), i.parentNode.removeChild(i); t._qsa.length;) r = t._qsa.shift(), r.style.removeAttribute("x-qsa"), o.push(r);
                return t._qsa = null, o
            }), t.querySelector || (t.querySelector = function(e) {
                var n = t.querySelectorAll(e);
                return n.length ? n[0] : null
            }), t.getElementsByClassName || (t.getElementsByClassName = function(e) {
                return e = String(e).replace(/^|\s+/g, "."), t.querySelectorAll(e)
            }), Object.keys || (Object.keys = function(e) {
                if (e !== Object(e)) throw TypeError("Object.keys called on non-object");
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }),
            function(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                e.atob = e.atob || function(e) {
                    e = String(e);
                    var n, r = 0,
                        i = [],
                        o = 0,
                        a = 0;
                    if (e = e.replace(/\s/g, ""), e.length % 4 === 0 && (e = e.replace(/=+$/, "")), e.length % 4 === 1) throw Error("InvalidCharacterError");
                    if (/[^+/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");
                    for (; r < e.length;) n = t.indexOf(e.charAt(r)), o = o << 6 | n, a += 6, 24 === a && (i.push(String.fromCharCode(o >> 16 & 255)), i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o)), a = 0, o = 0), r += 1;
                    return 12 === a ? (o >>= 4, i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2, i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o))), i.join("")
                }, e.btoa = e.btoa || function(e) {
                    e = String(e);
                    var n, r, i, o, a, l, s, d = 0,
                        h = [];
                    if (/[^\x00-\xFF]/.test(e)) throw Error("InvalidCharacterError");
                    for (; d < e.length;) n = e.charCodeAt(d++), r = e.charCodeAt(d++), i = e.charCodeAt(d++), o = n >> 2, a = (3 & n) << 4 | r >> 4, l = (15 & r) << 2 | i >> 6, s = 63 & i, d === e.length + 2 ? (l = 64, s = 64) : d === e.length + 1 && (s = 64), h.push(t.charAt(o), t.charAt(a), t.charAt(l), t.charAt(s));
                    return h.join("")
                }
            }(e), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(e) {
                var t = this.__proto__ || this.constructor.prototype;
                return e in this && (!(e in t) || t[e] !== this[e])
            }),
            function() {
                if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function() {
                        return (new Date).getTime()
                    }, "now" in e.performance == !1) {
                    var t = Date.now();
                    performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), e.performance.now = function() {
                        return Date.now() - t
                    }
                }
            }(), e.requestAnimationFrame || (e.webkitRequestAnimationFrame ? ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return webkitRequestAnimationFrame(function() {
                        t(e.performance.now())
                    })
                }, e.cancelAnimationFrame = webkitCancelAnimationFrame
            }(e) : e.mozRequestAnimationFrame ? ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return mozRequestAnimationFrame(function() {
                        t(e.performance.now())
                    })
                }, e.cancelAnimationFrame = mozCancelAnimationFrame
            }(e) : ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }, e.cancelAnimationFrame = e.clearTimeout
            }(e))
    }
}(this),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.Holder = t() : e.Holder = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        e.exports = n(1)
    }, function(e, t, n) {
        (function(t) {
            function r(e, t, n, r) {
                var o = i(n.substr(n.lastIndexOf(e.domain)), e);
                o && a({
                    mode: null,
                    el: r,
                    flags: o,
                    engineSettings: t
                })
            }

            function i(e, t) {
                var n = {
                    theme: C(z.settings.themes.gray, null),
                    stylesheets: t.stylesheets,
                    instanceOptions: t
                };
                return o(e, n)
            }

            function o(e, t) {
                var n = e.split("?"),
                    r = n[0].split("/");
                t.holderURL = e;
                var i = r[1],
                    o = i.match(/([\d]+p?)x([\d]+p?)/);
                if (!o) return !1;
                if (t.fluid = -1 !== i.indexOf("p"), t.dimensions = {
                        width: o[1].replace("p", "%"),
                        height: o[2].replace("p", "%")
                    }, 2 === n.length) {
                    var a = y.parse(n[1]);
                    if (a.bg && (t.theme.background = (-1 === a.bg.indexOf("#") ? "#" : "") + a.bg), a.fg && (t.theme.foreground = (-1 === a.fg.indexOf("#") ? "#" : "") + a.fg), a.bg && !a.fg && (t.autoFg = !0), a.theme && t.instanceOptions.themes.hasOwnProperty(a.theme) && (t.theme = C(t.instanceOptions.themes[a.theme], null)), a.text && (t.text = a.text), a.textmode && (t.textmode = a.textmode), a.size && (t.size = a.size), a.font && (t.font = a.font), a.align && (t.align = a.align), t.nowrap = b.truthy(a.nowrap), t.auto = b.truthy(a.auto), t.outline = b.truthy(a.outline), b.truthy(a.random)) {
                        z.vars.cache.themeKeys = z.vars.cache.themeKeys || Object.keys(t.instanceOptions.themes);
                        var l = z.vars.cache.themeKeys[0 | Math.random() * z.vars.cache.themeKeys.length];
                        t.theme = C(t.instanceOptions.themes[l], null)
                    }
                }
                return t
            }

            function a(e) {
                var t = e.mode,
                    n = e.el,
                    r = e.flags,
                    i = e.engineSettings,
                    o = r.dimensions,
                    a = r.theme,
                    s = o.width + "x" + o.height;
                if (t = null == t ? r.fluid ? "fluid" : "image" : t, null != r.text && (a.text = r.text, "object" === n.nodeName.toLowerCase())) {
                    for (var d = a.text.split("\\n"), c = 0; c < d.length; c++) d[c] = b.encodeHtmlEntity(d[c]);
                    a.text = d.join("\\n")
                }
                var f = r.holderURL,
                    p = C(i, null);
                if (r.font && (a.font = r.font, !p.noFontFallback && "img" === n.nodeName.toLowerCase() && z.setup.supportsCanvas && "svg" === p.renderer && (p = C(p, {
                        renderer: "canvas"
                    }))), r.font && "canvas" == p.renderer && (p.reRender = !0), "background" == t) null == n.getAttribute("data-background-src") && S.setAttr(n, {
                    "data-background-src": f
                });
                else {
                    var g = {};
                    g[z.vars.dataAttr] = f, S.setAttr(n, g)
                }
                r.theme = a, n.holderData = {
                    flags: r,
                    engineSettings: p
                }, ("image" == t || "fluid" == t) && S.setAttr(n, {
                    alt: a.text ? a.text + " [" + s + "]" : s
                });
                var m = {
                    mode: t,
                    el: n,
                    holderSettings: {
                        dimensions: o,
                        theme: a,
                        flags: r
                    },
                    engineSettings: p
                };
                "image" == t ? ("html" != p.renderer && r.auto || (n.style.width = o.width + "px", n.style.height = o.height + "px"), "html" == p.renderer ? n.style.backgroundColor = a.background : (l(m), "exact" == r.textmode && (n.holderData.resizeUpdate = !0, z.vars.resizableImages.push(n), h(n)))) : "background" == t && "html" != p.renderer ? l(m) : "fluid" == t && (n.holderData.resizeUpdate = !0, "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"), "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"), ("inline" == n.style.display || "" === n.style.display || "none" == n.style.display) && (n.style.display = "block"), u(n), "html" == p.renderer ? n.style.backgroundColor = a.background : (z.vars.resizableImages.push(n), h(n)))
            }

            function l(e) {
                function n() {
                    var t = null;
                    switch (l.renderer) {
                        case "canvas":
                            t = j(h, e);
                            break;
                        case "svg":
                            t = L(h, e);
                            break;
                        default:
                            throw "Holder: invalid renderer: " + l.renderer
                    }
                    return t
                }
                var r = null,
                    i = e.mode,
                    o = e.el,
                    a = e.holderSettings,
                    l = e.engineSettings;
                switch (l.renderer) {
                    case "svg":
                        if (!z.setup.supportsSVG) return;
                        break;
                    case "canvas":
                        if (!z.setup.supportsCanvas) return;
                        break;
                    default:
                        return
                }
                var d = {
                        width: a.dimensions.width,
                        height: a.dimensions.height,
                        theme: a.theme,
                        flags: a.flags
                    },
                    h = s(d);
                if (r = n(), null == r) throw "Holder: couldn't render placeholder";
                "background" == i ? (o.style.backgroundImage = "url(" + r + ")", o.style.backgroundSize = d.width + "px " + d.height + "px") : ("img" === o.nodeName.toLowerCase() ? S.setAttr(o, {
                    src: r
                }) : "object" === o.nodeName.toLowerCase() && (S.setAttr(o, {
                    data: r
                }), S.setAttr(o, {
                    type: "image/svg+xml"
                })), l.reRender && t.setTimeout(function() {
                    var e = n();
                    if (null == e) throw "Holder: couldn't render placeholder";
                    "img" === o.nodeName.toLowerCase() ? S.setAttr(o, {
                        src: e
                    }) : "object" === o.nodeName.toLowerCase() && (S.setAttr(o, {
                        data: e
                    }), S.setAttr(o, {
                        type: "image/svg+xml"
                    }))
                }, 150)), S.setAttr(o, {
                    "data-holder-rendered": !0
                })
            }

            function s(e) {
                function t(e, t, n, r) {
                    t.width = n, t.height = r, e.width = Math.max(e.width, t.width), e.height += t.height
                }
                var n = z.defaults.size;
                switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size), e.font = {
                    family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                    size: d(e.width, e.height, n),
                    units: e.theme.units ? e.theme.units : z.defaults.units,
                    weight: e.theme.fontweight ? e.theme.fontweight : "bold"
                }, e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height), e.noWrap = e.theme.nowrap || e.flags.nowrap, e.align = e.theme.align || e.flags.align || "center", e.flags.textmode) {
                    case "literal":
                        e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
                        break;
                    case "exact":
                        if (!e.flags.exactDimensions) break;
                        e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height)
                }
                var r = new w({
                        width: e.width,
                        height: e.height
                    }),
                    i = r.Shape,
                    o = new i.Rect("holderBg", {
                        fill: e.theme.background
                    });
                if (o.resize(e.width, e.height), r.root.add(o), e.flags.outline) {
                    var a = new A(o.properties.fill);
                    a = a.lighten(a.lighterThan("7f7f7f") ? -.1 : .1), o.properties.outline = {
                        fill: a.toHex(!0),
                        width: 2
                    }
                }
                var l = e.theme.foreground;
                if (e.flags.autoFg) {
                    var s = new A(o.properties.fill),
                        h = new A("fff"),
                        u = new A("000", {
                            alpha: .285714
                        });
                    l = s.blendAlpha(s.lighterThan("7f7f7f") ? u : h).toHex(!0)
                }
                var c = new i.Group("holderTextGroup", {
                    text: e.text,
                    align: e.align,
                    font: e.font,
                    fill: l
                });
                c.moveTo(null, null, 1), r.root.add(c);
                var f = c.textPositionData = D(r);
                if (!f) throw "Holder: staging fallback not supported yet.";
                c.properties.leading = f.boundingBox.height;
                var p = null,
                    g = null,
                    m = e.width * z.vars.lineWrapRatio,
                    v = m;
                if (f.lineCount > 1) {
                    var y, b = 0,
                        x = 0,
                        S = 0;
                    g = new i.Group("line" + S), ("left" === e.align || "right" === e.align) && (v = e.width * (1 - 2 * (1 - z.vars.lineWrapRatio)));
                    for (var C = 0; C < f.words.length; C++) {
                        var T = f.words[C];
                        p = new i.Text(T.text);
                        var k = "\\n" == T.text;
                        !e.noWrap && (b + T.width >= v || k === !0) && (t(c, g, b, c.properties.leading), c.add(g), b = 0, x += c.properties.leading, S += 1, g = new i.Group("line" + S), g.y = x), k !== !0 && (p.moveTo(b, 0), b += f.spaceWidth + T.width, g.add(p))
                    }
                    if (t(c, g, b, c.properties.leading), c.add(g), "left" === e.align) c.moveTo(e.width - m, null, null);
                    else if ("right" === e.align) {
                        for (y in c.children) g = c.children[y], g.moveTo(e.width - g.width, null, null);
                        c.moveTo(0 - (e.width - m), null, null)
                    } else {
                        for (y in c.children) g = c.children[y], g.moveTo((c.width - g.width) / 2, null, null);
                        c.moveTo((e.width - c.width) / 2, null, null)
                    }
                    c.moveTo(null, (e.height - c.height) / 2, null), (e.height - c.height) / 2 < 0 && c.moveTo(null, 0, null)
                } else p = new i.Text(e.text), g = new i.Group("line0"), g.add(p), c.add(g), "left" === e.align ? c.moveTo(e.width - m, null, null) : "right" === e.align ? c.moveTo(0 - (e.width - m), null, null) : c.moveTo((e.width - f.boundingBox.width) / 2, null, null), c.moveTo(null, (e.height - f.boundingBox.height) / 2, null);
                return r
            }

            function d(e, t, n) {
                var r = parseInt(e, 10),
                    i = parseInt(t, 10),
                    o = Math.max(r, i),
                    a = Math.min(r, i),
                    l = .8 * Math.min(a, o * z.defaults.scale);
                return Math.round(Math.max(n, l))
            }

            function h(e) {
                var t;
                t = null == e || null == e.nodeType ? z.vars.resizableImages : [e];
                for (var n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    if (i.holderData) {
                        var o = i.holderData.flags,
                            a = T(i);
                        if (a) {
                            if (!i.holderData.resizeUpdate) continue;
                            if (o.fluid && o.auto) {
                                var s = i.holderData.fluidConfig;
                                switch (s.mode) {
                                    case "width":
                                        a.height = a.width / s.ratio;
                                        break;
                                    case "height":
                                        a.width = a.height * s.ratio
                                }
                            }
                            var d = {
                                mode: "image",
                                holderSettings: {
                                    dimensions: a,
                                    theme: o.theme,
                                    flags: o
                                },
                                el: i,
                                engineSettings: i.holderData.engineSettings
                            };
                            "exact" == o.textmode && (o.exactDimensions = a, d.holderSettings.dimensions = o.dimensions), l(d)
                        } else p(i)
                    }
                }
            }

            function u(e) {
                if (e.holderData) {
                    var t = T(e);
                    if (t) {
                        var n = e.holderData.flags,
                            r = {
                                fluidHeight: "%" == n.dimensions.height.slice(-1),
                                fluidWidth: "%" == n.dimensions.width.slice(-1),
                                mode: null,
                                initialDimensions: t
                            };
                        r.fluidWidth && !r.fluidHeight ? (r.mode = "width", r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height", r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height), e.holderData.fluidConfig = r
                    } else p(e)
                }
            }

            function c() {
                for (var e, n = [], r = Object.keys(z.vars.invisibleImages), i = 0, o = r.length; o > i; i++) e = z.vars.invisibleImages[r[i]], T(e) && "img" == e.nodeName.toLowerCase() && (n.push(e), delete z.vars.invisibleImages[r[i]]);
                n.length && O.run({
                    images: n
                }), t.requestAnimationFrame(c)
            }

            function f() {
                z.vars.visibilityCheckStarted || (t.requestAnimationFrame(c), z.vars.visibilityCheckStarted = !0)
            }

            function p(e) {
                e.holderData.invisibleId || (z.vars.invisibleId += 1, z.vars.invisibleImages["i" + z.vars.invisibleId] = e, e.holderData.invisibleId = z.vars.invisibleId)
            }

            function g(e) {
                z.vars.debounceTimer || e.call(this), z.vars.debounceTimer && t.clearTimeout(z.vars.debounceTimer), z.vars.debounceTimer = t.setTimeout(function() {
                    z.vars.debounceTimer = null, e.call(this)
                }, z.setup.debounce)
            }

            function m() {
                g(function() {
                    h(null)
                })
            }
            var v = n(3),
                y = n(2),
                w = n(4),
                b = n(5),
                x = n(6),
                S = n(7),
                A = n(8),
                C = b.extend,
                T = b.dimensionCheck,
                k = "http://www.w3.org/2000/svg",
                E = "2.8.0",
                F = "\nCreated with Holder.js " + E + ".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n",
                O = {
                    version: E,
                    addTheme: function(e, t) {
                        return null != e && null != t && (z.settings.themes[e] = t), delete z.vars.cache.themeKeys, this
                    },
                    addImage: function(e, t) {
                        var n = S.getNodeArray(t);
                        if (n.length)
                            for (var r = 0, i = n.length; i > r; r++) {
                                var o = S.newEl("img"),
                                    a = {};
                                a[z.setup.dataAttr] = e, S.setAttr(o, a), n[r].appendChild(o)
                            }
                        return this
                    },
                    setResizeUpdate: function(e, t) {
                        e.holderData && (e.holderData.resizeUpdate = !!t, e.holderData.resizeUpdate && h(e))
                    },
                    run: function(e) {
                        e = e || {};
                        var n = {},
                            o = C(z.settings, e);
                        z.vars.preempted = !0, z.vars.dataAttr = o.dataAttr || z.setup.dataAttr, z.vars.lineWrapRatio = o.lineWrapRatio || z.setup.lineWrapRatio, n.renderer = o.renderer ? o.renderer : z.setup.renderer, -1 === z.setup.renderers.join(",").indexOf(n.renderer) && (n.renderer = z.setup.supportsSVG ? "svg" : z.setup.supportsCanvas ? "canvas" : "html");
                        var l = S.getNodeArray(o.images),
                            s = S.getNodeArray(o.bgnodes),
                            d = S.getNodeArray(o.stylenodes),
                            h = S.getNodeArray(o.objects);
                        n.stylesheets = [], n.svgXMLStylesheet = !0, n.noFontFallback = o.noFontFallback ? o.noFontFallback : !1;
                        for (var u = 0; u < d.length; u++) {
                            var c = d[u];
                            if (c.attributes.rel && c.attributes.href && "stylesheet" == c.attributes.rel.value) {
                                var f = c.attributes.href.value,
                                    p = S.newEl("a");
                                p.href = f;
                                var g = p.protocol + "//" + p.host + p.pathname + p.search;
                                n.stylesheets.push(g)
                            }
                        }
                        for (u = 0; u < s.length; u++)
                            if (t.getComputedStyle) {
                                var m = t.getComputedStyle(s[u], null).getPropertyValue("background-image"),
                                    v = s[u].getAttribute("data-background-src"),
                                    y = v || m,
                                    w = null,
                                    x = "?" + o.domain + "/";
                                if (0 === y.indexOf(x)) w = y.slice(1);
                                else if (-1 != y.indexOf(x)) {
                                    var A = y.substr(y.indexOf(x)).slice(1),
                                        T = A.match(/([^\"]*)"?\)/);
                                    null != T && (w = T[1])
                                }
                                if (null != w) {
                                    var k = i(w, o);
                                    k && a({
                                        mode: "background",
                                        el: s[u],
                                        flags: k,
                                        engineSettings: n
                                    })
                                }
                            }
                        for (u = 0; u < h.length; u++) {
                            var E = h[u],
                                F = {};
                            try {
                                F.data = E.getAttribute("data"), F.dataSrc = E.getAttribute(z.vars.dataAttr)
                            } catch (O) {}
                            var D = null != F.data && 0 === F.data.indexOf(o.domain),
                                j = null != F.dataSrc && 0 === F.dataSrc.indexOf(o.domain);
                            D ? r(o, n, F.data, E) : j && r(o, n, F.dataSrc, E)
                        }
                        for (u = 0; u < l.length; u++) {
                            var L = l[u],
                                R = {};
                            try {
                                R.src = L.getAttribute("src"), R.dataSrc = L.getAttribute(z.vars.dataAttr), R.rendered = L.getAttribute("data-holder-rendered")
                            } catch (O) {}
                            var M = null != R.src,
                                I = null != R.dataSrc && 0 === R.dataSrc.indexOf(o.domain),
                                N = null != R.rendered && "true" == R.rendered;
                            M ? 0 === R.src.indexOf(o.domain) ? r(o, n, R.src, L) : I && (N ? r(o, n, R.dataSrc, L) : ! function(e, t, n, i, o) {
                                b.imageExists(e, function(e) {
                                    e || r(t, n, i, o)
                                })
                            }(R.src, o, n, R.dataSrc, L)) : I && r(o, n, R.dataSrc, L)
                        }
                        return this
                    }
                },
                z = {
                    settings: {
                        domain: "holder.js",
                        images: "img",
                        objects: "object",
                        bgnodes: "body .holderjs",
                        stylenodes: "head link.holderjs",
                        themes: {
                            gray: {
                                background: "#EEEEEE",
                                foreground: "#AAAAAA"
                            },
                            social: {
                                background: "#3a5a97",
                                foreground: "#FFFFFF"
                            },
                            industrial: {
                                background: "#434A52",
                                foreground: "#C2F200"
                            },
                            sky: {
                                background: "#0D8FDB",
                                foreground: "#FFFFFF"
                            },
                            vine: {
                                background: "#39DBAC",
                                foreground: "#1E292C"
                            },
                            lava: {
                                background: "#F8591A",
                                foreground: "#1C2846"
                            }
                        }
                    },
                    defaults: {
                        size: 10,
                        units: "pt",
                        scale: 1 / 16
                    }
                },
                D = function() {
                    var e = null,
                        t = null,
                        n = null;
                    return function(r) {
                        var i = r.root;
                        if (z.setup.supportsSVG) {
                            var o = !1,
                                a = function(e) {
                                    return document.createTextNode(e)
                                };
                            (null == e || e.parentNode !== document.body) && (o = !0), e = x.initSVG(e, i.properties.width, i.properties.height), e.style.display = "block", o && (t = S.newEl("text", k), n = a(null), S.setAttr(t, {
                                x: 0
                            }), t.appendChild(n), e.appendChild(t), document.body.appendChild(e), e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-100%", e.style.left = "-100%");
                            var l = i.children.holderTextGroup,
                                s = l.properties;
                            S.setAttr(t, {
                                y: s.font.size,
                                style: b.cssProps({
                                    "font-weight": s.font.weight,
                                    "font-size": s.font.size + s.font.units,
                                    "font-family": s.font.family
                                })
                            }), n.nodeValue = s.text;
                            var d = t.getBBox(),
                                h = Math.ceil(d.width / (i.properties.width * z.vars.lineWrapRatio)),
                                u = s.text.split(" "),
                                c = s.text.match(/\\n/g);
                            h += null == c ? 0 : c.length, n.nodeValue = s.text.replace(/[ ]+/g, "");
                            var f = t.getComputedTextLength(),
                                p = d.width - f,
                                g = Math.round(p / Math.max(1, u.length - 1)),
                                m = [];
                            if (h > 1) {
                                n.nodeValue = "";
                                for (var v = 0; v < u.length; v++)
                                    if (0 !== u[v].length) {
                                        n.nodeValue = b.decodeHtmlEntity(u[v]);
                                        var y = t.getBBox();
                                        m.push({
                                            text: u[v],
                                            width: y.width
                                        })
                                    }
                            }
                            return e.style.display = "none", {
                                spaceWidth: g,
                                lineCount: h,
                                boundingBox: d,
                                words: m
                            }
                        }
                        return !1
                    }
                }(),
                j = function() {
                    var e = S.newEl("canvas"),
                        t = null;
                    return function(n) {
                        null == t && (t = e.getContext("2d"));
                        var r = n.root;
                        e.width = z.dpr(r.properties.width), e.height = z.dpr(r.properties.height), t.textBaseline = "middle";
                        var i = r.children.holderBg,
                            o = z.dpr(i.width),
                            a = z.dpr(i.height),
                            l = 2,
                            s = l / 2;
                        t.fillStyle = i.properties.fill, t.fillRect(0, 0, o, a), i.properties.outline && (t.strokeStyle = i.properties.outline.fill, t.lineWidth = i.properties.outline.width, t.moveTo(s, s), t.lineTo(o - s, s), t.lineTo(o - s, a - s), t.lineTo(s, a - s), t.lineTo(s, s), t.moveTo(0, s), t.lineTo(o, a - s), t.moveTo(0, a - s), t.lineTo(o, s), t.stroke()); {
                            var d = r.children.holderTextGroup;
                            d.properties
                        }
                        t.font = d.properties.font.weight + " " + z.dpr(d.properties.font.size) + d.properties.font.units + " " + d.properties.font.family + ", monospace", t.fillStyle = d.properties.fill;
                        for (var h in d.children) {
                            var u = d.children[h];
                            for (var c in u.children) {
                                var f = u.children[c],
                                    p = z.dpr(d.x + u.x + f.x),
                                    g = z.dpr(d.y + u.y + f.y + d.properties.leading / 2);
                                t.fillText(f.properties.text, p, g)
                            }
                        }
                        return e.toDataURL("image/png")
                    }
                }(),
                L = function() {
                    if (t.XMLSerializer) {
                        var e = S.createXML(),
                            n = x.initSVG(null, 0, 0),
                            r = S.newEl("rect", k);
                        return n.appendChild(r),
                            function(t, i) {
                                var o = t.root;
                                x.initSVG(n, o.properties.width, o.properties.height);
                                for (var a = n.querySelectorAll("g"), l = 0; l < a.length; l++) a[l].parentNode.removeChild(a[l]);
                                var s = i.holderSettings.flags.holderURL,
                                    d = "holder_" + (Number(new Date) + 32768 + (0 | 32768 * Math.random())).toString(16),
                                    h = S.newEl("g", k),
                                    u = o.children.holderTextGroup,
                                    c = u.properties,
                                    f = S.newEl("g", k),
                                    p = u.textPositionData,
                                    g = "#" + d + " text { " + b.cssProps({
                                        fill: c.fill,
                                        "font-weight": c.font.weight,
                                        "font-family": c.font.family + ", monospace",
                                        "font-size": c.font.size + c.font.units
                                    }) + " } ",
                                    m = e.createComment("\nSource URL: " + s + F),
                                    v = e.createCDATASection(g),
                                    y = n.querySelector("style"),
                                    w = o.children.holderBg;
                                if (S.setAttr(h, {
                                        id: d
                                    }), n.insertBefore(m, n.firstChild), y.appendChild(v), h.appendChild(r), w.properties.outline) {
                                    var A = S.newEl("path", k),
                                        C = w.properties.outline.width,
                                        T = C / 2;
                                    S.setAttr(A, {
                                        d: ["M", T, T, "H", w.width - T, "V", w.height - T, "H", T, "V", 0, "M", 0, T, "L", w.width, w.height - T, "M", 0, w.height - T, "L", w.width, T].join(" "),
                                        "stroke-width": w.properties.outline.width,
                                        stroke: w.properties.outline.fill,
                                        fill: "none"
                                    }), h.appendChild(A)
                                }
                                h.appendChild(f), n.appendChild(h), S.setAttr(r, {
                                    width: w.width,
                                    height: w.height,
                                    fill: w.properties.fill
                                }), u.y += .8 * p.boundingBox.height;
                                for (var E in u.children) {
                                    var O = u.children[E];
                                    for (var z in O.children) {
                                        var D = O.children[z],
                                            j = u.x + O.x + D.x,
                                            L = u.y + O.y + D.y,
                                            R = S.newEl("text", k),
                                            M = document.createTextNode(null);
                                        S.setAttr(R, {
                                            x: j,
                                            y: L
                                        }), M.nodeValue = D.properties.text, R.appendChild(M), f.appendChild(R)
                                    }
                                }
                                var I = x.svgStringToDataURI(x.serializeSVG(n, i.engineSettings), "background" === i.mode);
                                return I
                            }
                    }
                }();
            for (var R in z.flags) z.flags.hasOwnProperty(R) && (z.flags[R].match = function(e) {
                return e.match(this.regex)
            });
            z.setup = {
                    renderer: "html",
                    debounce: 100,
                    ratio: 1,
                    supportsCanvas: !1,
                    supportsSVG: !1,
                    lineWrapRatio: .9,
                    dataAttr: "data-src",
                    renderers: ["html", "canvas", "svg"]
                }, z.dpr = function(e) {
                    return e * z.setup.ratio
                }, z.vars = {
                    preempted: !1,
                    resizableImages: [],
                    invisibleImages: {},
                    invisibleId: 0,
                    visibilityCheckStarted: !1,
                    debounceTimer: null,
                    cache: {}
                },
                function() {
                    var e = 1,
                        n = 1,
                        r = S.newEl("canvas"),
                        i = null;
                    r.getContext && -1 != r.toDataURL("image/png").indexOf("data:image/png") && (z.setup.renderer = "canvas", i = r.getContext("2d"), z.setup.supportsCanvas = !0), z.setup.supportsCanvas && (e = t.devicePixelRatio || 1, n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1), z.setup.ratio = e / n, document.createElementNS && document.createElementNS(k, "svg").createSVGRect && (z.setup.renderer = "svg", z.setup.supportsSVG = !0)
                }(), f(), v && v(function() {
                    z.vars.preempted || O.run(), t.addEventListener ? (t.addEventListener("resize", m, !1), t.addEventListener("orientationchange", m, !1)) : t.attachEvent("onresize", m), "object" == typeof t.Turbolinks && t.document.addEventListener("page:change", function() {
                        O.run()
                    })
                }), e.exports = O
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        var r = encodeURIComponent,
            i = decodeURIComponent,
            o = n(10),
            a = n(9),
            l = /(\w+)\[(\d+)\]/,
            s = /\w+\.\w+/;
        t.parse = function(e) {
            if ("string" != typeof e) return {};
            if (e = o(e), "" === e) return {};
            "?" === e.charAt(0) && (e = e.slice(1));
            for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
                var a, d, h, u = n[r].split("="),
                    c = i(u[0]);
                if (a = l.exec(c)) t[a[1]] = t[a[1]] || [], t[a[1]][a[2]] = i(u[1]);
                else if (a = s.test(c)) {
                    for (a = c.split("."), d = t; a.length;)
                        if (h = a.shift(), h.length) {
                            if (d[h]) {
                                if (d[h] && "object" != typeof d[h]) break
                            } else d[h] = {};
                            a.length || (d[h] = i(u[1])), d = d[h]
                        }
                } else t[u[0]] = null == u[1] ? "" : i(u[1])
            }
            return t
        }, t.stringify = function(e) {
            if (!e) return "";
            var t = [];
            for (var n in e) {
                var i = e[n];
                if ("array" != a(i)) t.push(r(n) + "=" + r(e[n]));
                else
                    for (var o = 0; o < i.length; ++o) t.push(r(n + "[" + o + "]") + "=" + r(i[o]))
            }
            return t.join("&")
        }
    }, function(e, t, n) {
        function r(e) {
            function t(e) {
                if (!x) {
                    if (!a.body) return i(t);
                    for (x = !0; e = S.shift();) i(e)
                }
            }

            function n(e) {
                (w || e.type === s || a[c] === u) && (r(), t())
            }

            function r() {
                w ? (a[y](m, n, d), e[y](s, n, d)) : (a[p](v, n), e[p](h, n))
            }

            function i(e, t) {
                setTimeout(e, +t >= 0 ? t : 1)
            }

            function o(e) {
                x ? i(e) : S.push(e)
            }
            null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function C() {
                document.removeEventListener("DOMContentLoaded", C, !1), document.readyState = "complete"
            }, !1), document.readyState = "loading");
            var a = e.document,
                l = a.documentElement,
                s = "load",
                d = !1,
                h = "on" + s,
                u = "complete",
                c = "readyState",
                f = "attachEvent",
                p = "detachEvent",
                g = "addEventListener",
                m = "DOMContentLoaded",
                v = "onreadystatechange",
                y = "removeEventListener",
                w = g in a,
                b = d,
                x = d,
                S = [];
            if (a[c] === u) i(t);
            else if (w) a[g](m, n, d), e[g](s, n, d);
            else {
                a[f](v, n), e[f](h, n);
                try {
                    b = null == e.frameElement && l
                } catch (A) {}
                b && b.doScroll && ! function T() {
                    if (!x) {
                        try {
                            b.doScroll("left")
                        } catch (e) {
                            return i(T, 50)
                        }
                        r(), t()
                    }
                }()
            }
            return o.version = "1.4.0", o.isReady = function() {
                return x
            }, o
        }
        e.exports = "undefined" != typeof window && r(window)
    }, function(e, t, n) {
        var r = function(e) {
            function t(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }
            var n = 1,
                r = function(e) {
                    n++, this.parent = null, this.children = {}, this.id = n, this.name = "n" + n, "undefined" != typeof e && (this.name = e), this.x = this.y = this.z = 0, this.width = this.height = 0
                };
            r.prototype.resize = function(e, t) {
                null != e && (this.width = e), null != t && (this.height = t)
            }, r.prototype.moveTo = function(e, t, n) {
                this.x = null != e ? e : this.x, this.y = null != t ? t : this.y, this.z = null != n ? n : this.z
            }, r.prototype.add = function(e) {
                var t = e.name;
                if ("undefined" != typeof this.children[t]) throw "SceneGraph: child already exists: " + t;
                this.children[t] = e, e.parent = this
            };
            var i = function() {
                r.call(this, "root"), this.properties = e
            };
            i.prototype = new r;
            var o = function(e, n) {
                if (r.call(this, e), this.properties = {
                        fill: "#000000"
                    }, "undefined" != typeof n) t(this.properties, n);
                else if ("undefined" != typeof e && "string" != typeof e) throw "SceneGraph: invalid node name"
            };
            o.prototype = new r;
            var a = function() {
                o.apply(this, arguments), this.type = "group"
            };
            a.prototype = new o;
            var l = function() {
                o.apply(this, arguments), this.type = "rect"
            };
            l.prototype = new o;
            var s = function(e) {
                o.call(this), this.type = "text", this.properties.text = e
            };
            s.prototype = new o;
            var d = new i;
            return this.Shape = {
                Rect: l,
                Text: s,
                Group: a
            }, this.root = d, this
        };
        e.exports = r
    }, function(e, t, n) {
        t.extend = function(e, t) {
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
            if (null != t)
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }, t.cssProps = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
            return t.join(";")
        }, t.encodeHtmlEntity = function(e) {
            for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) n = e.charCodeAt(r), t.unshift(n > 128 ? ["&#", n, ";"].join("") : e[r]);
            return t.join("")
        }, t.imageExists = function(e, t) {
            var n = new Image;
            n.onerror = function() {
                t.call(this, !1)
            }, n.onload = function() {
                t.call(this, !0)
            }, n.src = e
        }, t.decodeHtmlEntity = function(e) {
            return e.replace(/&#(\d+);/g, function(e, t) {
                return String.fromCharCode(t)
            })
        }, t.dimensionCheck = function(e) {
            var t = {
                height: e.clientHeight,
                width: e.clientWidth
            };
            return t.height && t.width ? t : !1
        }, t.truthy = function(e) {
            return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "âœ“" === e : !!e
        }
    }, function(e, t, n) {
        (function(e) {
            var r = n(7),
                i = "http://www.w3.org/2000/svg",
                o = 8;
            t.initSVG = function(e, t, n) {
                var a, l, s = !1;
                e && e.querySelector ? (l = e.querySelector("style"), null === l && (s = !0)) : (e = r.newEl("svg", i), s = !0), s && (a = r.newEl("defs", i), l = r.newEl("style", i), r.setAttr(l, {
                    type: "text/css"
                }), a.appendChild(l), e.appendChild(a)), e.webkitMatchesSelector && e.setAttribute("xmlns", i);
                for (var d = 0; d < e.childNodes.length; d++) e.childNodes[d].nodeType === o && e.removeChild(e.childNodes[d]);
                for (; l.childNodes.length;) l.removeChild(l.childNodes[0]);
                return r.setAttr(e, {
                    width: t,
                    height: n,
                    viewBox: "0 0 " + t + " " + n,
                    preserveAspectRatio: "none"
                }), e
            }, t.svgStringToDataURI = function() {
                var e = "data:image/svg+xml;charset=UTF-8,",
                    t = "data:image/svg+xml;charset=UTF-8;base64,";
                return function(n, r) {
                    return r ? t + btoa(unescape(encodeURIComponent(n))) : e + encodeURIComponent(n)
                }
            }(), t.serializeSVG = function(t, n) {
                if (e.XMLSerializer) {
                    var i = new XMLSerializer,
                        o = "",
                        a = n.stylesheets;
                    if (n.svgXMLStylesheet) {
                        for (var l = r.createXML(), s = a.length - 1; s >= 0; s--) {
                            var d = l.createProcessingInstruction("xml-stylesheet", 'href="' + a[s] + '" rel="stylesheet"');
                            l.insertBefore(d, l.firstChild)
                        }
                        l.removeChild(l.documentElement), o = i.serializeToString(l)
                    }
                    var h = i.serializeToString(t);
                    return h = h.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), o + h
                }
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        (function(e) {
            t.newEl = function(t, n) {
                return e.document ? null == n ? document.createElement(t) : document.createElementNS(n, t) : void 0
            }, t.setAttr = function(e, t) {
                for (var n in t) e.setAttribute(n, t[n])
            }, t.createXML = function() {
                return e.DOMParser ? (new DOMParser).parseFromString("<xml />", "application/xml") : void 0
            }, t.getNodeArray = function(t) {
                var n = null;
                return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ? n = t : null === t && (n = []), n
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        function r(e) {
            return this.rgb = {}, this.yuv = {}, this.raw = e, this.rgb.r = (16711680 & e) >> 16, this.rgb.g = (65280 & e) >> 8, this.rgb.b = 255 & e, this.yuv.y = .2126 * this.rgb.r + .7152 * this.rgb.g + .0722 * this.rgb.b, this.yuv.u = -.09991 * this.rgb.r - .33609 * this.rgb.g + .436 * this.rgb.b, this.yuv.v = .615 * this.rgb.r - .55861 * this.rgb.g - .05639 * this.rgb.b, this
        }
        var i = function(e, t) {
            "string" == typeof e && ("#" === e.charAt(0) && (e = e.slice(1)), /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")), 6 === e.length && (this.alpha = 1, t && (this.alpha = t.alpha || this.alpha), r.call(this, parseInt(e, 16)))))
        };
        i.rgbToHex = function(e, t, n) {
            return (((0 | e) << 16) + ((0 | t) << 8) + (0 | n)).toString(16)
        }, i.prototype.lighten = function(e) {
            var t = this.rgb.r,
                n = this.rgb.g,
                r = this.rgb.b,
                o = 255 * e | 0;
            return new i(i.rgbToHex(t + o, n + o, r + o))
        }, i.prototype.toHex = function(e) {
            return (e ? "#" : "") + this.raw.toString(16)
        }, i.prototype.lighterThan = function(e) {
            return e instanceof i || (e = new i(e)), this.yuv.y > e.yuv.y
        }, i.prototype.blendAlpha = function(e) {
            e instanceof i || (e = new i(e));
            var t = e,
                n = this,
                r = t.alpha * t.rgb.r + (1 - t.alpha) * n.rgb.r,
                o = t.alpha * t.rgb.g + (1 - t.alpha) * n.rgb.g,
                a = t.alpha * t.rgb.b + (1 - t.alpha) * n.rgb.b;
            return new i(i.rgbToHex(r, o, a))
        }, e.exports = i
    }, function(e, t, n) {
        var r = Object.prototype.toString;
        e.exports = function(e) {
            switch (r.call(e)) {
                case "[object Date]":
                    return "date";
                case "[object RegExp]":
                    return "regexp";
                case "[object Arguments]":
                    return "arguments";
                case "[object Array]":
                    return "array";
                case "[object Error]":
                    return "error"
            }
            return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" : (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e), typeof e)
        }
    }, function(e, t, n) {
        function r(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        t = e.exports = r, t.left = function(e) {
            return e.replace(/^\s*/, "")
        }, t.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }])
}),
function(e, t) {
    t && (Holder = e.Holder)
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package);