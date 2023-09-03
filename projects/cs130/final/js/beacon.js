! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, r.apply(this, arguments)
    };
    t.__esModule = !0;
    var i = n(1),
        o = n(2),
        a = n(3),
        c = n(4);
    ! function() {
        function e(e) {
            var t = "";
            if (t = window.location.origin ? window.location.origin : window.location.protocol + "://" + window.location.host, e && "string" == typeof e)
                if (0 === e.indexOf("/")) t += e;
                else try {
                    var n = new URL(e);
                    return n.protocol + "://" + n.host + n.pathname
                } catch (e) {} else {
                    var r = window.location.pathname;
                    r && r.length > 0 && (t += r)
                }
                return t
        }

        function t(e) {
            if ("function" == typeof performance.getEntriesByType) {
                var t = performance.getEntriesByType("paint").filter(function(t) {
                    return t.name === e
                })[0];
                return t ? t.startTime : 0
            }
            return 0
        }

        function n() {
            var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            if (!e) return !1;
            var t = parseInt(e[2], 10),
                n = navigator.connection;
            return t >= 55 && !!n && "cellular" === n.type && n.downlinkMax <= .115
        }

        function s(e) {
            return null == e ? void 0 : Math.round(1e3 * e) / 1e3
        }

        function u(e, t) {
            for (var n in e) {
                var r = e[n];
                void 0 === t || "number" != typeof r && "string" != typeof r || (t[n] = r)
            }
        }! function() {
            function f() {
                var t = l.timing,
                    n = "";
                try {
                    n = "function" == typeof l.getEntriesByType ? new URL(l.getEntriesByType("navigation")[0].name).pathname : b ? new URL(b).pathname : window.location.pathname
                } catch (e) {}
                var r = {
                    referrer: document.referrer || "",
                    eventType: i.EventType.WebVitalsV2,
                    lcp: {
                        value: -1,
                        path: void 0
                    },
                    cls: {
                        value: -1,
                        path: void 0
                    },
                    fid: {
                        value: -1,
                        path: void 0
                    },
                    si: g ? g.si : 0,
                    versions: {
                        js: "2021.12.0"
                    },
                    pageloadId: v,
                    location: e(),
                    landingPath: n,
                    startTime: l.timeOrigin || (t ? t.navigationStart : 0)
                };
                return g && (g.version && (r.versions.fl = g.version), g.icTag && (r.icTag = g.icTag), r.siteToken = g.token), C && (r.lcp = C.lcp && void 0 !== C.lcp.value ? C.lcp : r.lcp, r.fid = C.fid && void 0 !== C.fid.value ? C.fid : r.fid, r.cls = C.cls && void 0 !== C.cls.value ? C.cls : r.cls), r
            }

            function d(r) {
                var o = l.timing,
                    a = l.memory,
                    c = r || e(),
                    f = document.referrer || "",
                    d = m[2] || m[1] || m[0],
                    p = {
                        memory: {},
                        timings: {},
                        resources: [],
                        tempResources: [],
                        referrer: k && R && d ? d.url : f,
                        documentWriteIntervention: !1,
                        errorCount: 0,
                        eventType: i.EventType.Load,
                        firstPaint: 0,
                        firstContentfulPaint: 0,
                        si: g ? g.si : 0,
                        startTime: l.timeOrigin || (o ? o.navigationStart : 0),
                        versions: {
                            fl: g ? g.version : "",
                            js: "2021.12.0",
                            timings: 1
                        },
                        pageloadId: v,
                        location: c
                    };
                if (void 0 == E) {
                    if ("function" == typeof l.getEntriesByType) {
                        var y = l.getEntriesByType("navigation");
                        y && Array.isArray(y) && y.length > 0 && (p.timingsV2 = {}, p.versions.timings = 2, delete p.timings, u(y[0], p.timingsV2))
                    }
                    1 === p.versions.timings && u(o, p.timings), u(a, p.memory)
                }
                if (p.documentWriteIntervention = n(), p.firstPaint = t("first-paint"), p.firstContentfulPaint = t("first-contentful-paint"), p.errorCount = window.__cfErrCount || 0, g && (g.icTag && (p.icTag = g.icTag), p.siteToken = g.token, R = !0), "function" == typeof l.getEntriesByType) {
                    var h = l.getEntriesByType("resource"),
                        w = 0,
                        T = 0;
                    h.forEach(function(e) {
                        var t = {
                            n: e.name,
                            s: s(e.startTime),
                            d: s(e.duration),
                            i: e.initiatorType,
                            p: e.nextHopProtocol,
                            rs: s(e.redirectStart),
                            re: s(e.redirectEnd),
                            fs: s(e.fetchStart),
                            ds: s(e.domainLookupStart),
                            de: s(e.domainLookupEnd),
                            cs: s(e.connectStart),
                            ce: s(e.connectEnd),
                            qs: s(e.requestStart),
                            ps: s(e.responseStart),
                            pe: s(e.responseEnd),
                            ws: s(e.workerStart),
                            ss: s(e.secureConnectionStart),
                            ts: e.transferSize,
                            ec: e.encodedBodySize,
                            dc: e.decodedBodySize
                        };
                        p.tempResources && void 0 === p.tempResources[T] && (p.tempResources[T] = []);
                        var n = JSON.stringify(t).length;
                        w + n < 62e3 && p.tempResources ? (w += n, p.tempResources[T].push(t)) : (T++, w = 0)
                    })
                }
                return JSON.stringify(p).length >= 64e3 && (p.resources = []), void 0 !== E && (delete p.timings, delete p.memory, delete p.errorCount, delete p.documentWriteIntervention), p
            }
            var l = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
                p = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[data-cf-beacon]") : void 0),
                v = c(),
                m = [],
                g = window.__cfBeacon ? window.__cfBeacon : {};
            if (!g || "single" !== g.load) {
                if (p) {
                    var y = p.getAttribute("data-cf-beacon");
                    if (y) try {
                        g = r(r({}, g), JSON.parse(y))
                    } catch (e) {} else {
                        var h = p.getAttribute("src");
                        if (h && "function" == typeof URLSearchParams) {
                            var w = new URLSearchParams(h.replace(/^[^\?]+\??/, "")),
                                T = w.get("token");
                            T && (g.token = T);
                            var S = w.get("spa");
                            g.spa = null === S || "true" === S
                        }
                    }
                    g && "multi" !== g.load && (g.load = "single"), window.__cfBeacon = g
                }
                if (l && g && g.token) {
                    var E, b, L = !1,
                        R = !1;
                    document.addEventListener("visibilitychange", function() {
                        k && 0 === m.filter(function(e) {
                            return e.id === v
                        }).length && j(), "hidden" === document.visibilityState && !L && R && (L = !0, F(k))
                    });
                    var C = {
                            lcp: void 0,
                            cls: void 0,
                            fid: void 0
                        },
                        O = function(e) {
                            if (!e || 0 === e.length) return null;
                            var t = e.reduce(function(e, t) {
                                return e && e.value > t.value ? e : t
                            });
                            if (t && t.sources && t.sources.length) {
                                var n = t.sources.reduce(function(e, t) {
                                    return e.node && e.previousRect.width * e.previousRect.height > t.previousRect.width * t.previousRect.height ? e : t
                                });
                                if (n) return n
                            }
                        },
                        _ = function(e) {
                            return e && 0 !== e.length ? e[e.length - 1] : null
                        },
                        P = function(e) {
                            if (!e) return "";
                            var t = e.localName;
                            return e.id && e.id.length > 0 && (t += "#" + e.id), e.className && e.className.length > 0 && (t += "." + e.className.split(" ").join(".")), t
                        },
                        B = function(e) {
                            var t = window.location.pathname;
                            if ("CLS" === e.name) {
                                C.cls = {
                                    value: e.value,
                                    path: t
                                };
                                var n = O(e.entries);
                                n && (C.cls.element = P(n.node), C.cls.currentRect = n.currentRect, C.cls.previousRect = n.previousRect)
                            } else if ("FID" === e.name) {
                                C.fid = {
                                    value: e.value,
                                    path: t
                                };
                                var n = _(e.entries);
                                n && (C.fid.element = P(n.target), C.fid.name = n.name)
                            } else if ("LCP" === e.name) {
                                C.lcp = {
                                    value: e.value,
                                    path: t
                                };
                                var n = _(e.entries);
                                n && (C.lcp.element = P(n.element), C.lcp.size = n.size, C.lcp.url = n.url)
                            }
                        };
                    "function" == typeof PerformanceObserver && ((0, a.getLCP)(B, !0), (0, a.getFID)(B), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, a.getCLS)(B, !0));
                    var k = g && (void 0 === g.spa || !0 === g.spa),
                        A = g.send && g.send.to ? g.send.to : void 0 === g.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
                        j = function(e) {
                            var t = function(e, t) {
                                    n.resources = e, 0 != t && (n.bypassTiming = !0), g && (1 === g.r && (n.resources = []), k && 0 === t && (m.push({
                                        id: n.pageloadId,
                                        url: n.location
                                    }), m.length > 3 && m.shift()), (0, o.sendObjectBeacon)("", n, function() {}, !1, A), void 0 !== g.forward && void 0 !== g.forward.url && (0, o.sendObjectBeacon)("", n, function() {}, !1, g.forward.url))
                                },
                                n = d(e);
                            if (n && g) {
                                var r = n.tempResources;
                                if (delete n.tempResources, k && r && 0 === r.length && t([], 0), !r) return;
                                r.forEach(function(e, n) {
                                    t(e, n)
                                })
                            }
                        },
                        F = function(e) {
                            var t = f();
                            e || (t.resources = [], delete t.tempResources), g && (0, o.sendObjectBeacon)("", t, function() {}, !0, A)
                        },
                        I = function() {
                            R = !0;
                            var e = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
                            e ? e.then(j) : j()
                        };
                    "complete" === window.document.readyState ? I() : window.addEventListener("load", function() {
                        window.setTimeout(I)
                    }), k && (b = e(), function(t) {
                        var n = t.pushState;
                        if (n) {
                            var r = function() {
                                v = c(), "function" == typeof l.clearResourceTimings && l.clearResourceTimings()
                            };
                            t.pushState = function(i, o, a) {
                                return E = e(a), 0 === m.filter(function(e) {
                                    return e.id === v
                                }).length && j(e()), r(), n.apply(t, [i, o, a])
                            }, window.addEventListener("popstate", function(t) {
                                0 === m.filter(function(e) {
                                    return e.id === v
                                }).length && j(E), E = e(), r()
                            })
                        }
                    }(window.history))
                }
            }
        }()
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.EventType = void 0;
    ! function(e) {
        e[e.Load = 1] = "Load", e[e.Additional = 2] = "Additional", e[e.WebVitalsV2 = 3] = "WebVitalsV2"
    }(t.EventType || (t.EventType = {}))
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, i) {
        void 0 === r && (r = !1), void 0 === i && (i = null);
        var o = i || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?" + e : "/cdn-cgi/beacon/performance?" + e),
            a = !0;
        if (navigator && "string" == typeof navigator.userAgent) try {
            var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
            c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
        } catch (e) {}
        if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
            t.st = 1;
            var s = JSON.stringify(t),
                u = {
                    type: "application/json"
                };
            navigator.sendBeacon(o, new Blob([s], u))
        } else {
            t.st = 2;
            var s = JSON.stringify(t),
                f = new XMLHttpRequest;
            n && (f.onreadystatechange = function() {
                4 == this.readyState && 204 == this.status && n()
            }), f.open("POST", o, !0), f.setRequestHeader("content-type", "application/json"), f.send(s)
        }
    }
    t.__esModule = !0, t.sendObjectBeacon = void 0, t.sendObjectBeacon = r
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.getTTFB = t.getLCP = t.getFID = t.getFCP = t.getCLS = void 0;
    var r, i, o, a, c = function(e, t) {
            return {
                name: e,
                value: void 0 === t ? -1 : t,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        s = function(e, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                    var n = new PerformanceObserver(function(e) {
                        return e.getEntries().map(t)
                    });
                    return n.observe({
                        type: e,
                        buffered: !0
                    }), n
                }
            } catch (e) {}
        },
        u = function(e, t) {
            var n = function n(r) {
                "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        },
        f = function(e) {
            addEventListener("pageshow", function(t) {
                t.persisted && e(t)
            }, !0)
        },
        d = function(e, t, n) {
            var r;
            return function(i) {
                t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
            }
        },
        l = -1,
        p = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        v = function() {
            u(function(e) {
                var t = e.timeStamp;
                l = t
            }, !0)
        },
        m = function() {
            return l < 0 && (l = p(), v(), f(function() {
                setTimeout(function() {
                    l = p(), v()
                }, 0)
            })), {get firstHiddenTime() {
                    return l
                }
            }
        },
        g = function(e, t) {
            var n, r = m(),
                i = c("FCP"),
                o = function(e) {
                    "first-contentful-paint" === e.name && (u && u.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
                },
                a = performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                u = a ? null : s("paint", o);
            (a || u) && (n = d(e, i, t), a && o(a), f(function(r) {
                i = c("FCP"), n = d(e, i, t), requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        i.value = performance.now() - r.timeStamp, n(!0)
                    })
                })
            }))
        },
        y = !1,
        h = -1,
        w = function(e, t) {
            y || (g(function(e) {
                h = e.value
            }), y = !0);
            var n, r = function(t) {
                    h > -1 && e(t)
                },
                i = c("CLS", 0),
                o = 0,
                a = [],
                l = function(e) {
                    if (!e.hadRecentInput) {
                        var t = a[0],
                            r = a[a.length - 1];
                        o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, a.push(e)) : (o = e.value, a = [e]), o > i.value && (i.value = o, i.entries = a, n())
                    }
                },
                p = s("layout-shift", l);
            p && (n = d(r, i, t), u(function() {
                p.takeRecords().map(l), n(!0)
            }), f(function() {
                o = 0, h = -1, i = c("CLS", 0), n = d(r, i, t)
            }))
        },
        T = {
            passive: !0,
            capture: !0
        },
        S = new Date,
        E = function(e, t) {
            r || (r = t, i = e, o = new Date, R(removeEventListener), b())
        },
        b = function() {
            if (i >= 0 && i < o - S) {
                var e = {
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + i
                };
                a.forEach(function(t) {
                    t(e)
                }), a = []
            }
        },
        L = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            E(e, t), i()
                        },
                        r = function() {
                            i()
                        },
                        i = function() {
                            removeEventListener("pointerup", n, T), removeEventListener("pointercancel", r, T)
                        };
                    addEventListener("pointerup", n, T), addEventListener("pointercancel", r, T)
                }(t, e) : E(t, e)
            }
        },
        R = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                return e(t, L, T)
            })
        },
        C = function(e, t) {
            var n, o = m(),
                l = c("FID"),
                p = function(e) {
                    e.startTime < o.firstHiddenTime && (l.value = e.processingStart - e.startTime, l.entries.push(e), n(!0))
                },
                v = s("first-input", p);
            n = d(e, l, t), v && u(function() {
                v.takeRecords().map(p), v.disconnect()
            }, !0), v && f(function() {
                var o;
                l = c("FID"), n = d(e, l, t), a = [], i = -1, r = null, R(addEventListener), o = p, a.push(o), b()
            })
        },
        O = new Set,
        _ = function(e, t) {
            var n, r = m(),
                i = c("LCP"),
                o = function(e) {
                    var t = e.startTime;
                    t < r.firstHiddenTime && (i.value = t, i.entries.push(e)), n()
                },
                a = s("largest-contentful-paint", o);
            if (a) {
                n = d(e, i, t);
                var l = function() {
                    O.has(i.id) || (a.takeRecords().map(o), a.disconnect(), O.add(i.id), n(!0))
                };
                ["keydown", "click"].forEach(function(e) {
                    addEventListener(e, l, {
                        once: !0,
                        capture: !0
                    })
                }), u(l, !0), f(function(r) {
                    i = c("LCP"), n = d(e, i, t), requestAnimationFrame(function() {
                        requestAnimationFrame(function() {
                            i.value = performance.now() - r.timeStamp, O.add(i.id), n(!0)
                        })
                    })
                })
            }
        },
        P = function(e) {
            var t, n = c("TTFB");
            t = function() {
                try {
                    var t = performance.getEntriesByType("navigation")[0] || function() {
                        var e = performance.timing,
                            t = {
                                entryType: "navigation",
                                startTime: 0
                            };
                        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                        return t
                    }();
                    if (n.value = n.delta = t.responseStart, n.value < 0) return;
                    n.entries = [t], e(n)
                } catch (e) {}
            }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
        };
    t.getFCP = g, t.getCLS = w, t.getFID = C, t.getLCP = _, t.getTTFB = P
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
        var a = e.random || (e.rng || i)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[r + c] = a[c];
        return t || o(a)
    }
    var i = n(5),
        o = n(6);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (r) {
        var i = new Uint8Array(16);
        e.exports = function() {
            return r(i), i
        }
    } else {
        var o = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
            return o
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t || 0,
            r = i;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    for (var i = [], o = 0; o < 256; ++o) i[o] = (o + 256).toString(16).substr(1);
    e.exports = r
}]);