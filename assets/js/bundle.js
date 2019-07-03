! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "assets/js/", e(e.s = 100)
}([function(t, e, n) {
    "use strict";
    (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(50),
            i = n(108),
            o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i),
            s = n(32),
            a = t.env.DEV && t.env.IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
            u = [],
            l = a ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : r.compose,
            c = (0, r.createStore)(o.default, {}, l(s.responsiveStoreEnhancer, r.applyMiddleware.apply(void 0, u)));
        e.default = c
    }).call(e, n(31))
}, function(t, e, n) {
    var r = n(62),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(205),
        u = r(a),
        l = n(18),
        c = r(l),
        p = n(232),
        f = r(p),
        h = n(233),
        d = r(h),
        y = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        v = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        g = n(0),
        m = r(g),
        _ = n(90),
        b = r(_),
        w = n(40),
        x = r(w),
        T = /^(\S+)\s*(.*)$/,
        O = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.handlers = {}, n._events = {}, n._promises = {
                    init: {
                        resolve: null,
                        reject: null
                    },
                    show: {
                        resolve: null,
                        reject: null
                    },
                    hidden: {
                        resolve: null,
                        reject: null
                    }
                }, n._states = {}, n.TL = {}, n.cid = (0, d.default)("component"), n.props = t, n.states = {
                    canUpdate: !1,
                    isInit: !1,
                    isAnimating: !1,
                    isShown: !1
                }, n.el = t.el ? t.el : null, n.$el = t.$el ? t.$el : null, n.template = t.template ? t.template : null, n.data = t.data ? t.data : {}, n.actions = t.actions ? t.actions : {}, n.events = {
                    "click a": function(t) {
                        return n.hyperlink(t)
                    }
                }, n
            }
            return s(e, t), v(e, [{
                key: "events",
                set: function(t) {
                    for (var e in t) this._events[e] = t[e];
                    this.delegateEvents()
                },
                get: function() {
                    return this._events
                }
            }, {
                key: "promises",
                set: function(t) {
                    this._promises || (this._promises = {});
                    for (var e in t) this._promises[e] = t[e]
                },
                get: function() {
                    return this._promises
                }
            }, {
                key: "states",
                set: function(t) {
                    for (var e in t) this._states[e] = t[e]
                },
                get: function() {
                    return this._states
                }
            }]), v(e, [{
                key: "initComponent",
                value: function() {
                    this.render()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    this.setElement(), setTimeout(function() {
                        return t.onRender()
                    }, 0)
                }
            }, {
                key: "setElement",
                value: function() {
                    return null === this.el && null === this.template && (this.el = document.createElement("div")), null !== this.el ? void(this.$el = $(this.el)) : null !== this.$el ? void(this.el = this.$el[0]) : null !== this.template ? void this.renderTemplate() : void 0
                }
            }, {
                key: "renderTemplate",
                value: function() {
                    this.$el = $(this.template({
                        data: this.data,
                        svgs: b.default
                    })), this.el = this.$el[0]
                }
            }, {
                key: "onRender",
                value: function() {
                    var t = this;
                    this.initDOM(), this.setupDOM(), this.initTL(), this.delegateEvents(), setTimeout(function() {
                        return t.onDOMInit()
                    }, 0)
                }
            }, {
                key: "initDOM",
                value: function() {}
            }, {
                key: "setupDOM",
                value: function() {}
            }, {
                key: "initTL",
                value: function() {}
            }, {
                key: "onDOMInit",
                value: function() {
                    this.bindEvents(), this.onInit()
                }
            }, {
                key: "bindEvents",
                value: function() {}
            }, {
                key: "unbindEvents",
                value: function() {}
            }, {
                key: "delegateEvents",
                value: function(t) {
                    if (t || (t = (0, f.default)(this, "events")), !t) return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var n = t[e];
                        if ((0, c.default)(n) || (n = this[n]), n) {
                            var r = e.match(T);
                            this.delegate(r[1], r[2], (0, u.default)(n, this))
                        }
                    }
                    return this
                }
            }, {
                key: "delegate",
                value: function(t, e, n) {
                    return this.$el && this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
                }
            }, {
                key: "undelegateEvents",
                value: function() {
                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                }
            }, {
                key: "undelegate",
                value: function(t, e, n) {
                    return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
                }
            }, {
                key: "update",
                value: function() {
                    this.states.canUpdate && this.onUpdate()
                }
            }, {
                key: "onScroll",
                value: function() {}
            }, {
                key: "onUpdate",
                value: function() {}
            }, {
                key: "onResize",
                value: function() {}
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.promises.show.resolve = e, t.promises.show.reject = n, t.setState({
                            isAnimating: !0,
                            canUpdate: !0
                        }), t.showComponent()
                    })
                }
            }, {
                key: "showComponent",
                value: function() {
                    this.onShown()
                }
            }, {
                key: "onShown",
                value: function() {
                    this.setState({
                        isShown: !0,
                        isAnimating: !1
                    }), this.promises.show.resolve()
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.promises.hidden.resolve = e, t.promises.hidden.reject = n, t.setState({
                            isAnimating: !0
                        }), t.hideComponent()
                    })
                }
            }, {
                key: "hideComponent",
                value: function() {
                    this.onHidden()
                }
            }, {
                key: "onHidden",
                value: function() {
                    this.setState({
                        isAnimating: !1,
                        isShown: !1,
                        canUpdate: !1
                    }), this.promises.hidden.resolve()
                }
            }, {
                key: "navigate",
                value: function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t.indexOf(window.location.origin) >= 0 && (t = t.replace(window.location.origin, ""));
                    var e = new RegExp(/^.*\//),
                        n = e.exec(window.location.href);
                    t.indexOf(n) >= 0 && (t = t.replace(window.location.origin, ""), t = t.replace(n, "")), page(t)
                }
            }, {
                key: "hyperlink",
                value: function(t) {
                    m.default.getState().app.isAnimating && t.preventDefault()
                }
            }, {
                key: "killTL",
                value: function(t) {
                    if (void 0 !== this.TL[t] && null !== this.TL[t]) {
                        var e = this.TL[t];
                        e.stop(), e.kill(), e.clear(), e = null, this.TL[t] = null
                    }
                }
            }, {
                key: "destroyTL",
                value: function() {
                    for (var t in this.TL) this.TL[t] && this.killTL(t);
                    this.TL = {}
                }
            }, {
                key: "dispose",
                value: function() {
                    this.setState({
                        isInit: !1,
                        isShown: !1,
                        canUpdate: !1
                    }), this.unbindEvents(), this.handlers = {}, this.promises = {}, this.undelegateEvents(), this.destroyTL(), this.$el.remove(), this.$el = null, this.$els = {}, this._events = {}, y(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }]), e
        }(x.default);
    e.default = O
}, function(t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        u = n(40),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(u),
        c = function(t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n._component = null, n.Component = null, n.data = null, n.options = null, n.options = t, n.data = t.data ? t.data : null, n.options.actions = t.actions ? t.actions : {}, n.promises = {
                    init: {
                        resolve: null,
                        reject: null
                    },
                    data: {
                        resolve: null,
                        reject: null
                    }
                }, n.states = {
                    canUpdate: !1,
                    isInit: !1,
                    isAnimating: !1,
                    isShown: !1
                }, n
            }
            return o(e, t), s(e, [{
                key: "getComponent",
                value: function() {
                    return this._component
                }
            }, {
                key: "initComponent",
                value: function() {
                    var t = this;
                    this.getData().then(function() {
                        t.initActions(), t.initData(), t.options.data = t.data, t._component = new t.Component(t.options), t._component.init().then(function() {
                            t.onInit()
                        })
                    })
                }
            }, {
                key: "getData",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.promises.data.resolve = e, t.promises.data.reject = n, t.fetchData()
                    })
                }
            }, {
                key: "fetchData",
                value: function() {
                    this.promises.data.resolve()
                }
            }, {
                key: "initData",
                value: function() {}
            }, {
                key: "initActions",
                value: function() {}
            }, {
                key: "resize",
                value: function() {
                    return this._component.resize()
                }
            }, {
                key: "show",
                value: function() {
                    return this._component.show()
                }
            }, {
                key: "hide",
                value: function() {
                    return this._component.hide()
                }
            }, {
                key: "dispose",
                value: function() {
                    this._component.dispose(), this._component = null, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }, {
                key: "reRender",
                value: function() {
                    var t = this;
                    this.hide().then(function() {
                        t.dispose(), t.init().then(function() {
                            t.show()
                        })
                    })
                }
            }]), e
        }(l.default);
    e.default = c
}, function(t, e, n) {
    function r(t, e) {
        var n = o(t, e);
        return i(n) ? n : void 0
    }
    var i = n(132),
        o = n(137);
    t.exports = r
}, function(t, e, n) {
    "use strict";
    (function(r) {
        var i, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        ! function(r, a) {
            var u = {},
                l = r.document,
                c = r.GreenSockGlobals = r.GreenSockGlobals || r;
            if (!c.TweenLite) {
                var p, f, h, d, y, v = function(t) {
                        var e, n = t.split("."),
                            r = c;
                        for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                        return r
                    },
                    g = v("com.greensock"),
                    m = function(t) {
                        var e, n = [],
                            r = t.length;
                        for (e = 0; e !== r; n.push(t[e++]));
                        return n
                    },
                    _ = function() {},
                    b = function() {
                        var t = Object.prototype.toString,
                            e = t.call([]);
                        return function(n) {
                            return null != n && (n instanceof Array || "object" === (void 0 === n ? "undefined" : s(n)) && !!n.push && t.call(n) === e)
                        }
                    }(),
                    w = {},
                    x = function r(s, a, l, p) {
                        this.sc = w[s] ? w[s].sc : [], w[s] = this, this.gsClass = null, this.func = l;
                        var f = [];
                        this.check = function(h) {
                            for (var d, y, g, m, _, b = a.length, x = b; --b > -1;)(d = w[a[b]] || new r(a[b], [])).gsClass ? (f[b] = d.gsClass, x--) : h && d.sc.push(this);
                            if (0 === x && l) {
                                if (y = ("com.greensock." + s).split("."), g = y.pop(), m = v(y.join("."))[g] = this.gsClass = l.apply(l, f), p)
                                    if (c[g] = u[g] = m, !(_ = void 0 !== t && t.exports) && n(239)) i = [], void 0 !== (o = function() {
                                        return m
                                    }.apply(e, i)) && (t.exports = o);
                                    else if (_)
                                    if ("TweenLite" === s) {
                                        t.exports = u.TweenLite = m;
                                        for (b in u) m[b] = u[b]
                                    } else u.TweenLite && (u.TweenLite[g] = m);
                                for (b = 0; b < this.sc.length; b++) this.sc[b].check()
                            }
                        }, this.check(!0)
                    },
                    T = r._gsDefine = function(t, e, n, r) {
                        return new x(t, e, n, r)
                    },
                    O = g._class = function(t, e, n) {
                        return e = e || function() {}, T(t, [], function() {
                            return e
                        }, n), e
                    };
                T.globals = c;
                var k = [0, 0, 1, 1],
                    S = O("easing.Ease", function(t, e, n, r) {
                        this._func = t, this._type = n || 0, this._power = r || 0, this._params = e ? k.concat(e) : k
                    }, !0),
                    P = S.map = {},
                    E = S.register = function(t, e, n, r) {
                        for (var i, o, s, a, u = e.split(","), l = u.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                            for (o = u[l], i = r ? O("easing." + o, null, !0) : g.easing[o] || {}, s = c.length; --s > -1;) a = c[s], P[o + "." + a] = P[a + o] = i[a] = t.getRatio ? t : t[a] || new t
                    };
                for (h = S.prototype, h._calcEnd = !1, h.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            n = this._power,
                            r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
                    }, p = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = p.length; --f > -1;) h = p[f] + ",Power" + f, E(new S(null, null, 1, f), h, "easeOut", !0), E(new S(null, null, 2, f), h, "easeIn" + (0 === f ? ",easeNone" : "")), E(new S(null, null, 3, f), h, "easeInOut");
                P.linear = g.easing.Linear.easeIn, P.swing = g.easing.Quad.easeInOut;
                var j = O("events.EventDispatcher", function(t) {
                    this._listeners = {}, this._eventTarget = t || this
                });
                h = j.prototype, h.addEventListener = function(t, e, n, r, i) {
                    i = i || 0;
                    var o, s, a = this._listeners[t],
                        u = 0;
                    for (this !== d || y || d.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === n ? a.splice(s, 1) : 0 === u && o.pr < i && (u = s + 1);
                    a.splice(u, 0, {
                        c: e,
                        s: n,
                        up: r,
                        pr: i
                    })
                }, h.removeEventListener = function(t, e) {
                    var n, r = this._listeners[t];
                    if (r)
                        for (n = r.length; --n > -1;)
                            if (r[n].c === e) return void r.splice(n, 1)
                }, h.dispatchEvent = function(t) {
                    var e, n, r, i = this._listeners[t];
                    if (i)
                        for (e = i.length, e > 1 && (i = i.slice(0)), n = this._eventTarget; --e > -1;)(r = i[e]) && (r.up ? r.c.call(r.s || n, {
                            type: t,
                            target: n
                        }) : r.c.call(r.s || n))
                };
                var C = r.requestAnimationFrame,
                    A = r.cancelAnimationFrame,
                    M = Date.now || function() {
                        return (new Date).getTime()
                    },
                    I = M();
                for (p = ["ms", "moz", "webkit", "o"], f = p.length; --f > -1 && !C;) C = r[p[f] + "RequestAnimationFrame"], A = r[p[f] + "CancelAnimationFrame"] || r[p[f] + "CancelRequestAnimationFrame"];
                O("Ticker", function(t, e) {
                    var n, r, i, o, s, a = this,
                        u = M(),
                        c = !(!1 === e || !C) && "auto",
                        p = 500,
                        f = 33,
                        h = function t(e) {
                            var l, c, h = M() - I;
                            h > p && (u += h - f), I += h, a.time = (I - u) / 1e3, l = a.time - s, (!n || l > 0 || !0 === e) && (a.frame++, s += l + (l >= o ? .004 : o - l), c = !0), !0 !== e && (i = r(t)), c && a.dispatchEvent("tick")
                        };
                    j.call(a), a.time = a.frame = 0, a.tick = function() {
                        h(!0)
                    }, a.lagSmoothing = function(t, e) {
                        p = t || 1e10, f = Math.min(e, p, 0)
                    }, a.sleep = function() {
                        null != i && (c && A ? A(i) : clearTimeout(i), r = _, i = null, a === d && (y = !1))
                    }, a.wake = function(t) {
                        null !== i ? a.sleep() : t ? u += -I + (I = M()) : a.frame > 10 && (I = M() - p + 5), r = 0 === n ? _ : c && C ? C : function(t) {
                            return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
                        }, a === d && (y = !0), h(2)
                    }, a.fps = function(t) {
                        if (!arguments.length) return n;
                        n = t, o = 1 / (n || 60), s = this.time + o, a.wake()
                    }, a.useRAF = function(t) {
                        if (!arguments.length) return c;
                        a.sleep(), c = t, a.fps(n)
                    }, a.fps(t), setTimeout(function() {
                        "auto" === c && a.frame < 5 && "hidden" !== l.visibilityState && a.useRAF(!1)
                    }, 1500)
                }), h = g.Ticker.prototype = new g.events.EventDispatcher, h.constructor = g.Ticker;
                var N = O("core.Animation", function(t, e) {
                    if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, J) {
                        y || d.wake();
                        var n = this.vars.useFrames ? Q : J;
                        n.add(this, n._time), this.vars.paused && this.paused(!0)
                    }
                });
                d = N.ticker = new g.Ticker, h = N.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
                ! function t() {
                    y && M() - I > 2e3 && d.wake(), setTimeout(t, 2e3)
                }(), h.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, h.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, h.resume = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!1)
                }, h.seek = function(t, e) {
                    return this.totalTime(Number(t), !1 !== e)
                }, h.restart = function(t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                }, h.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, h.render = function(t, e, n) {}, h.invalidate = function() {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, h.isActive = function() {
                    var t, e = this._timeline,
                        n = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale
                }, h._enabled = function(t, e) {
                    return y || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                }, h._kill = function(t, e) {
                    return this._enabled(!1, !1)
                }, h.kill = function(t, e) {
                    return this._kill(t, e), this
                }, h._uncache = function(t) {
                    for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                    return this
                }, h._swapSelfInParams = function(t) {
                    for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
                    return n
                }, h._callback = function(t) {
                    var e = this.vars,
                        n = e[t],
                        r = e[t + "Params"],
                        i = e[t + "Scope"] || e.callbackScope || this;
                    switch (r ? r.length : 0) {
                        case 0:
                            n.call(i);
                            break;
                        case 1:
                            n.call(i, r[0]);
                            break;
                        case 2:
                            n.call(i, r[0], r[1]);
                            break;
                        default:
                            n.apply(i, r)
                    }
                }, h.eventCallback = function(t, e, n, r) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var i = this.vars;
                        if (1 === arguments.length) return i[t];
                        null == e ? delete i[t] : (i[t] = e, i[t + "Params"] = b(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }, h.delay = function(t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                }, h.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, h.totalDuration = function(t) {
                    return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }, h.totalTime = function(t, e, n) {
                    if (y || d.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var r = this._totalDuration,
                                i = this._timeline;
                            if (t > r && !n && (t = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - t : t) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                                for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && tt(), this.render(t, e, !1), z.length && tt())
                    }
                    return this
                }, h.progress = h.totalProgress = function(t, e) {
                    var n = this.duration();
                    return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
                }, h.startTime = function(t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                }, h.endTime = function(t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }, h.timeScale = function(t) {
                    if (!arguments.length) return this._timeScale;
                    if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                        var e = this._pauseTime,
                            n = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = n - (n - this._startTime) * this._timeScale / t
                    }
                    return this._timeScale = t, this._uncache(!1)
                }, h.reversed = function(t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, h.paused = function(t) {
                    if (!arguments.length) return this._paused;
                    var e, n, r = this._timeline;
                    return t != this._paused && r && (y || t || d.wake(), e = r.rawTime(), n = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                };
                var R = O("core.SimpleTimeline", function(t) {
                    N.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                h = R.prototype = new N, h.constructor = R, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(t, e, n, r) {
                    var i, o;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                        for (o = t._startTime; i && i._startTime > o;) i = i._prev;
                    return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
                }, h._remove = function(t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, h.render = function(t, e, n) {
                    var r, i = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; i;) r = i._next, (i._active || t >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = r
                }, h.rawTime = function() {
                    return y || d.wake(), this._totalTime
                };
                var L = O("TweenLite", function(t, e, n) {
                        if (N.call(this, e, n), this.render = L.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : L.selector(t) || t;
                        var i, o, s, a = t.jquery || t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType),
                            u = this.vars.overwrite;
                        if (this._overwrite = u = null == u ? Z[L.defaultOverwrite] : "number" == typeof u ? u >> 0 : Z[u], (a || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                            for (this._targets = s = m(t), this._propLookup = [], this._siblings = [], i = 0; i < s.length; i++) o = s[i], o ? "string" != typeof o ? o.length && o !== r && o[0] && (o[0] === r || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(i--, 1), this._targets = s = s.concat(m(o))) : (this._siblings[i] = et(o, this, !1), 1 === u && this._siblings[i].length > 1 && rt(o, this, null, 1, this._siblings[i])) : "string" == typeof(o = s[i--] = L.selector(o)) && s.splice(i + 1, 1) : s.splice(i--, 1);
                        else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === u && this._siblings.length > 1 && rt(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    D = function(t) {
                        return t && t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    F = function(t, e) {
                        var n, r = {};
                        for (n in t) G[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!W[n] || W[n] && W[n]._autoCSS) || (r[n] = t[n], delete t[n]);
                        t.css = r
                    };
                h = L.prototype = new N, h.constructor = L, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, L.version = "1.19.1", L.defaultEase = h._ease = new S(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = d, L.autoSleep = 120, L.lagSmoothing = function(t, e) {
                    d.lagSmoothing(t, e)
                }, L.selector = r.$ || r.jQuery || function(t) {
                    var e = r.$ || r.jQuery;
                    return e ? (L.selector = e, e(t)) : void 0 === l ? t : l.querySelectorAll ? l.querySelectorAll(t) : l.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                };
                var z = [],
                    $ = {},
                    U = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    H = function(t) {
                        for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m(e, this._target || n.t) : e < 1e-6 && e > -1e-6 && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                    },
                    X = function(t, e, n, r) {
                        var i, o, s, a, u, l, c, p = [],
                            f = 0,
                            h = "",
                            d = 0;
                        for (p.start = t, p.end = e, t = p[0] = t + "", e = p[1] = e + "", n && (n(p), t = p[0], e = p[1]), p.length = 0, i = t.match(U) || [], o = e.match(U) || [], r && (r._next = null, r.blob = 1, p._firstPT = p._applyPT = r), u = o.length, a = 0; a < u; a++) c = o[a], l = e.substr(f, e.indexOf(c, f) - f), h += l || !a ? l : ",", f += l.length, d ? d = (d + 1) % 5 : "rgba(" === l.substr(-5) && (d = 1), c === i[a] || i.length <= a ? h += c : (h && (p.push(h), h = ""), s = parseFloat(i[a]), p.push(s), p._firstPT = {
                            _next: p._firstPT,
                            t: p,
                            p: p.length - 1,
                            s: s,
                            c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                            f: 0,
                            m: d && d < 4 ? Math.round : 0
                        }), f += c.length;
                        return h += e.substr(f), h && p.push(h), p.setRatio = H, p
                    },
                    B = function(t, e, n, r, i, o, a, u, l) {
                        "function" == typeof r && (r = r(l || 0, t));
                        var c, p = s(t[e]),
                            f = "function" !== p ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                            h = "get" !== n ? n : f ? a ? t[f](a) : t[f]() : t[e],
                            d = "string" == typeof r && "=" === r.charAt(1),
                            y = {
                                t: t,
                                p: e,
                                s: h,
                                f: "function" === p,
                                pg: 0,
                                n: i || e,
                                m: o ? "function" == typeof o ? o : Math.round : 0,
                                pr: 0,
                                c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0
                            };
                        if (("number" != typeof h || "number" != typeof r && !d) && (a || isNaN(h) || !d && isNaN(r) || "boolean" == typeof h || "boolean" == typeof r ? (y.fp = a, c = X(h, d ? y.s + y.c : r, u || L.defaultStringFilter, y), y = {
                                t: c,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: i || e,
                                pr: 0,
                                m: 0
                            }) : (y.s = parseFloat(h), d || (y.c = parseFloat(r) - y.s || 0))), y.c) return (y._next = this._firstPT) && (y._next._prev = y), this._firstPT = y, y
                    },
                    Y = L._internals = {
                        isArray: b,
                        isSelector: D,
                        lazyTweens: z,
                        blobDif: X
                    },
                    W = L._plugins = {},
                    V = Y.tweenLookup = {},
                    q = 0,
                    G = Y.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    },
                    Z = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    Q = N._rootFramesTimeline = new R,
                    J = N._rootTimeline = new R,
                    K = 30,
                    tt = Y.lazyRender = function() {
                        var t, e = z.length;
                        for ($ = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        z.length = 0
                    };
                J._startTime = d.time, Q._startTime = d.frame, J._active = Q._active = !0, setTimeout(tt, 1), N._updateRoot = L.render = function() {
                    var t, e, n;
                    if (z.length && tt(), J.render((d.time - J._startTime) * J._timeScale, !1, !1), Q.render((d.frame - Q._startTime) * Q._timeScale, !1, !1), z.length && tt(), d.frame >= K) {
                        K = d.frame + (parseInt(L.autoSleep, 10) || 120);
                        for (n in V) {
                            for (e = V[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete V[n]
                        }
                        if ((!(n = J._first) || n._paused) && L.autoSleep && !Q._first && 1 === d._listeners.tick.length) {
                            for (; n && n._paused;) n = n._next;
                            n || d.sleep()
                        }
                    }
                }, d.addEventListener("tick", N._updateRoot);
                var et = function(t, e, n) {
                        var r, i, o = t._gsTweenID;
                        if (V[o || (t._gsTweenID = o = "t" + q++)] || (V[o] = {
                                target: t,
                                tweens: []
                            }), e && (r = V[o].tweens, r[i = r.length] = e, n))
                            for (; --i > -1;) r[i] === e && r.splice(i, 1);
                        return V[o].tweens
                    },
                    nt = function(t, e, n, r) {
                        var i, o, s = t.vars.onOverwrite;
                        return s && (i = s(t, e, n, r)), s = L.onOverwrite, s && (o = s(t, e, n, r)), !1 !== i && !1 !== o
                    },
                    rt = function(t, e, n, r, i) {
                        var o, s, a, u;
                        if (1 === r || r >= 4) {
                            for (u = i.length, o = 0; o < u; o++)
                                if ((a = i[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                                else if (5 === r) break;
                            return s
                        }
                        var l, c = e._startTime + 1e-10,
                            p = [],
                            f = 0,
                            h = 0 === e._duration;
                        for (o = i.length; --o > -1;)(a = i[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || it(e, 0, h), 0 === it(a, l, h) && (p[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((h || !a._initted) && c - a._startTime <= 2e-10 || (p[f++] = a)));
                        for (o = f; --o > -1;)
                            if (a = p[o], 2 === r && a._kill(n, t, e) && (s = !0), 2 !== r || !a._firstPT && a._initted) {
                                if (2 !== r && !nt(a, e)) continue;
                                a._enabled(!1, !1) && (s = !0)
                            } return s
                    },
                    it = function(t, e, n) {
                        for (var r = t._timeline, i = r._timeScale, o = t._startTime; r._timeline;) {
                            if (o += r._startTime, i *= r._timeScale, r._paused) return -100;
                            r = r._timeline
                        }
                        return o /= i, o > e ? o - e : n && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / i) > e + 1e-10 ? 0 : o - e - 1e-10
                    };
                h._init = function() {
                    var t, e, n, r, i, o, s = this.vars,
                        a = this._overwrittenProps,
                        u = this._duration,
                        l = !!s.immediateRender,
                        c = s.ease;
                    if (s.startAt) {
                        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {};
                        for (r in s.startAt) i[r] = s.startAt[r];
                        if (i.overwrite = !1, i.immediateRender = !0, i.lazy = l && !1 !== s.lazy, i.startAt = i.delay = null, this._startAt = L.to(this.target, 0, i), l)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== u) return
                    } else if (s.runBackwards && 0 !== u)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            0 !== this._time && (l = !1), n = {};
                            for (r in s) G[r] && "autoCSS" !== r || (n[r] = s[r]);
                            if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && !1 !== s.lazy, n.immediateRender = l, this._startAt = L.to(this.target, 0, n), l) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        } if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, s.easeParams) : P[c] || L.defaultEase : L.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                    if (e && L._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                        for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                    this._onUpdate = s.onUpdate, this._initted = !0
                }, h._initProps = function(t, e, n, i, o) {
                    var s, a, u, l, c, p;
                    if (null == t) return !1;
                    $[t._gsTweenID] && tt(), this.vars.css || t.style && t !== r && t.nodeType && W.css && !1 !== this.vars.autoCSS && F(this.vars, t);
                    for (s in this.vars)
                        if (p = this.vars[s], G[s]) p && (p instanceof Array || p.push && b(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[s] = p = this._swapSelfInParams(p, this));
                        else if (W[s] && (l = new W[s])._onInitTween(t, this.vars[s], this, o)) {
                        for (this._firstPT = c = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: s,
                                pg: 1,
                                pr: l._priority,
                                m: 0
                            }, a = l._overwriteProps.length; --a > -1;) e[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (u = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                    } else e[s] = B.call(this, t, s, "get", p, s, 0, null, this.vars.stringFilter, o);
                    return i && this._kill(i, t) ? this._initProps(t, e, n, i, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && rt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, i, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && ($[t._gsTweenID] = !0), u)
                }, h.render = function(t, e, n) {
                    var r, i, o, s, a = this._time,
                        u = this._duration,
                        l = this._rawPrevTime;
                    if (t >= u - 1e-7 && t >= 0) this._totalTime = this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === u && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (l < 0 || t <= 0 && t >= -1e-7 || 1e-10 === l && "isPause" !== this.data) && l !== t && (n = !0, l > 1e-10 && (i = "onReverseComplete")), this._rawPrevTime = s = !e || t || l === t ? t : 1e-10);
                    else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === u && l > 0) && (i = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === u && (this._initted || !this.vars.lazy || n) && (l >= 0 && (1e-10 !== l || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !e || t || l === t ? t : 1e-10)), this._initted || (n = !0);
                    else if (this._totalTime = this._time = t, this._easeType) {
                        var c = t / u,
                            p = this._easeType,
                            f = this._easePower;
                        (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === p ? 1 - c : 2 === p ? c : t / u < .5 ? c / 2 : 1 - c / 2
                    } else this.ratio = this._ease.getRatio(t / u);
                    if (this._time !== a || n) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = l, z.push(this), void(this._lazy = [t, e]);
                            this._time && !r ? this.ratio = this._ease.getRatio(this._time / u) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== u || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, n), e || (this._time !== a || r || n) && this._callback("onUpdate")), i && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[i] && this._callback(i), 0 === u && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
                    }
                }, h._kill = function(t, e, n) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                    var r, i, o, a, u, l, c, p, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                    if ((b(e) || D(e)) && "number" != typeof e[0])
                        for (r = e.length; --r > -1;) this._kill(t, e[r], n) && (l = !0);
                    else {
                        if (this._targets) {
                            for (r = this._targets.length; --r > -1;)
                                if (e === this._targets[r]) {
                                    u = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target) return !1;
                            u = this._propLookup, i = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (u) {
                            if (c = t || u, p = t !== i && "all" !== i && t !== u && ("object" !== (void 0 === t ? "undefined" : s(t)) || !t._tempKill), n && (L.onOverwrite || this.vars.onOverwrite)) {
                                for (o in c) u[o] && (f || (f = []), f.push(o));
                                if ((f || !t) && !nt(this, n, e, f)) return !1
                            }
                            for (o in c)(a = u[o]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(c) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete u[o]), p && (i[o] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
                }, h.invalidate = function() {
                    return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], N.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                }, h._enabled = function(t, e) {
                    if (y || d.wake(), t && this._gc) {
                        var n, r = this._targets;
                        if (r)
                            for (n = r.length; --n > -1;) this._siblings[n] = et(r[n], this, !0);
                        else this._siblings = et(this.target, this, !0)
                    }
                    return N.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }, L.to = function(t, e, n) {
                    return new L(t, e, n)
                }, L.from = function(t, e, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new L(t, e, n)
                }, L.fromTo = function(t, e, n, r) {
                    return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new L(t, e, r)
                }, L.delayedCall = function(t, e, n, r, i) {
                    return new L(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: n,
                        callbackScope: r,
                        onReverseComplete: e,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, L.set = function(t, e) {
                    return new L(t, 0, e)
                }, L.getTweensOf = function(t, e) {
                    if (null == t) return [];
                    t = "string" != typeof t ? t : L.selector(t) || t;
                    var n, r, i, o;
                    if ((b(t) || D(t)) && "number" != typeof t[0]) {
                        for (n = t.length, r = []; --n > -1;) r = r.concat(L.getTweensOf(t[n], e));
                        for (n = r.length; --n > -1;)
                            for (o = r[n], i = n; --i > -1;) o === r[i] && r.splice(n, 1)
                    } else
                        for (r = et(t).concat(), n = r.length; --n > -1;)(r[n]._gc || e && !r[n].isActive()) && r.splice(n, 1);
                    return r
                }, L.killTweensOf = L.killDelayedCallsTo = function(t, e, n) {
                    "object" === (void 0 === e ? "undefined" : s(e)) && (n = e, e = !1);
                    for (var r = L.getTweensOf(t, e), i = r.length; --i > -1;) r[i]._kill(n, t)
                };
                var ot = O("plugins.TweenPlugin", function(t, e) {
                    this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                }, !0);
                if (h = ot.prototype, ot.version = "1.19.0", ot.API = 2, h._firstPT = null, h._addTween = B, h.setRatio = H, h._kill = function(t) {
                        var e, n = this._overwriteProps,
                            r = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
                        for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                        return !1
                    }, h._mod = h._roundProps = function(t) {
                        for (var e, n = this._firstPT; n;) e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
                    }, L._onPluginEvent = function(t, e) {
                        var n, r, i, o, s, a = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; a;) {
                                for (s = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                                (a._prev = r ? r._prev : o) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : o = a, a = s
                            }
                            a = e._firstPT = i
                        }
                        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
                        return n
                    }, ot.activate = function(t) {
                        for (var e = t.length; --e > -1;) t[e].API === ot.API && (W[(new t[e])._propName] = t[e]);
                        return !0
                    }, T.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, n = t.propName,
                            r = t.priority || 0,
                            i = t.overwriteProps,
                            o = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            s = O("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                                ot.call(this, n, r), this._overwriteProps = i || []
                            }, !0 === t.global),
                            a = s.prototype = new ot(n);
                        a.constructor = s, s.API = t.API;
                        for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                        return s.version = t.version, ot.activate([s]), s
                    }, p = r._gsQueue) {
                    for (f = 0; f < p.length; f++) p[f]();
                    for (h in w) w[h].func || r.console.log("GSAP encountered missing dependency: " + h)
                }
                y = !1
            }
        }(void 0 !== t && t.exports && void 0 !== r ? r : window)
    }).call(e, n(8))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SET_CURRENT_PHOTO = "SET_CURRENT_PHOTO", e.SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY", e.SET_PHOTOS = "SET_PHOTOS", e.DEFAULT_COLUMNS = 10, e.MAX_COLUMNS = 24, e.FULLSCREEN = "Fulscreen", e.BORDERS = 200, e.BORDERS_MOBILE_PORTRAIT = 160, e.BORDERS_MOBILE_LANDSCAPE = 80
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            type: y.NAVIGATION,
            location: t,
            params: e
        }
    }

    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return {
            type: y.SET_META,
            meta: t,
            isDefault: e
        }
    }

    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
            type: y.SET_MOBILE,
            isMobile: t
        }
    }

    function s(t) {
        return {
            type: y.SET_ROUTES,
            routes: t
        }
    }

    function a(t) {
        return {
            type: y.SET_ANIMATING,
            isAnimating: t
        }
    }

    function u(t) {
        return {
            type: y.SET_DIRECTION,
            direction: t
        }
    }

    function l(t) {
        return {
            type: y.SET_FIRST_SHOW,
            isFirstShow: t
        }
    }

    function c(t) {
        return {
            type: y.SET_HIDE_NEW_COLLECTION,
            needHideCollection: t
        }
    }

    function p(t) {
        return {
            type: y.SET_SHOW_NEW_COLLECTION,
            needShowCollection: t
        }
    }

    function f(t) {
        return {
            type: y.SET_NEW_COLLECTION,
            isNewCollection: t
        }
    }

    function h(t) {
        return {
            type: y.SET_PAGE,
            page: t
        }
    }

    function d(t) {
        return {
            type: y.SET_OLDPAGE,
            page: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.navigate = r, e.setMeta = i, e.setMobile = o, e.setRoutes = s, e.setAnimating = a, e.setDirection = u, e.setFirstShow = l, e.setHideNewCollection = c, e.setShowNewCollection = p, e.setNewCollection = f, e.setPage = h, e.setOldPage = d;
    var y = n(52)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCurrentPhotoIndex = e.getCurrentPhotoIndexById = e.getCurrentCollectionByPhotoSlug = e.getCurrentCollectionById = e.getCurrentPhotoBySlug = e.getPreviousCollection = e.getNextCollection = e.getPreviousPhoto = e.getNextPhoto = void 0;
    var i = n(119),
        o = r(i),
        s = n(0),
        a = r(s),
        u = (e.getNextPhoto = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = a.default.getState().photos.current_collection,
                n = a.default.getState().photos.current_photo,
                r = (0, o.default)(e.photos, function(t) {
                    return t.slug == n.slug
                });
            if (r + t >= e.photos.length) {
                var i = u(),
                    s = r + t - e.photos.length;
                return i.photos[s]
            }
            return e.photos[r + t]
        }, e.getPreviousPhoto = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = a.default.getState().photos.current_collection,
                n = a.default.getState().photos.current_photo,
                r = (0, o.default)(e.photos, function(t) {
                    return t.slug == n.slug
                });
            if (r + 1 - t <= 0) {
                var i = l();
                return i.photos[i.photos.length - t]
            }
            return e.photos[r - t]
        }, e.getNextCollection = function() {
            var t = a.default.getState().photos.current_collection,
                e = a.default.getState().photos.collections,
                n = (0, o.default)(e, function(e) {
                    return e.id == t.id
                });
            return n + 1 === e.length ? e[0] : e[n + 1]
        }),
        l = e.getPreviousCollection = function() {
            var t = a.default.getState().photos.current_collection,
                e = a.default.getState().photos.collections,
                n = (0, o.default)(e, function(e) {
                    return e.id == t.id
                });
            return 0 === n ? e[e.length - 1] : e[n - 1]
        };
    e.getCurrentPhotoBySlug = function(t) {
        var e = a.default.getState().photos.collections,
            n = t.replace("/", "");
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var i = e[r],
                    o = !0,
                    s = !1,
                    u = void 0;
                try {
                    for (var l, c = i.photos[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                        var p = l.value;
                        if (p.slug === n) return p
                    }
                } catch (t) {
                    s = !0, u = t
                } finally {
                    try {
                        !o && c.return && c.return()
                    } finally {
                        if (s) throw u
                    }
                }
            }
    }, e.getCurrentCollectionById = function(t) {
        var e = a.default.getState().photos.collections;
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (r.id === t) return r
            }
    }, e.getCurrentCollectionByPhotoSlug = function(t) {
        var e = a.default.getState().photos.collections,
            n = t.replace("/", "");
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var i = e[r],
                    o = !0,
                    s = !1,
                    u = void 0;
                try {
                    for (var l, c = i.photos[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                        var p = l.value;
                        if (p.slug === n) return i
                    }
                } catch (t) {
                    s = !0, u = t
                } finally {
                    try {
                        !o && c.return && c.return()
                    } finally {
                        if (s) throw u
                    }
                }
            }
    }, e.getCurrentPhotoIndexById = function(t) {
        var e = a.default.getState().photos.current_collection.photos;
        return (0, o.default)(e, function(e) {
            return e.id == t
        })
    }, e.getCurrentPhotoIndex = function() {
        var t = a.default.getState().photos.current_collection.photos,
            e = a.default.getState().photos.current_photo;
        return (0, o.default)(t, function(t) {
            return t.id == e.id
        })
    }
}, function(t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t || i(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e
    }
    var i = n(24),
        o = 1 / 0;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return null == t ? void 0 === t ? u : a : l && l in Object(t) ? o(t) : s(t)
    }
    var i = n(19),
        o = n(133),
        s = n(134),
        a = "[object Null]",
        u = "[object Undefined]",
        l = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(122),
        o = n(123),
        s = n(124),
        a = n(125),
        u = n(126);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        for (var n = t.length; n--;)
            if (i(t[n][0], e)) return n;
        return -1
    }
    var i = n(61);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if (!o(t)) return !1;
        var e = i(t);
        return e == a || e == u || e == s || e == l
    }
    var i = n(14),
        o = n(4),
        s = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = r
}, function(t, e, n) {
    var r = n(1),
        i = r.Symbol;
    t.exports = i
}, function(t, e, n) {
    var r = n(6),
        i = r(Object, "create");
    t.exports = i
}, function(t, e, n) {
    function r(t, e) {
        var n = t.__data__;
        return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var i = n(146);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        return !!(e = null == e ? r : e) && ("number" == typeof t || i.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var r = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return i(t) ? t : o(t, e) ? [t] : s(a(t))
    }
    var i = n(2),
        o = n(37),
        s = n(186),
        a = n(73);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return "symbol" == typeof t || o(t) && i(t) == s
    }
    var i = n(14),
        o = n(12),
        s = "[object Symbol]";
    t.exports = r
}, function(t, e) {
    function n(t) {
        return t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return new t;
                case 1:
                    return new t(e[0]);
                case 2:
                    return new t(e[0], e[1]);
                case 3:
                    return new t(e[0], e[1], e[2]);
                case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                case 5:
                    return new t(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
            }
            var n = i(t.prototype),
                r = t.apply(n, e);
            return o(r) ? r : n
        }
    }
    var i = n(42),
        o = n(4);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, i = t.length, o = 0, s = []; ++n < i;) {
            var a = t[n];
            a !== e && a !== r || (t[n] = r, s[o++] = n)
        }
        return s
    }
    var r = "__lodash_placeholder__";
    t.exports = n
}, function(t, e, n) {
    "use strict";
    (function(r) {
        var i, o, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            u = void 0 !== t && t.exports && void 0 !== r ? r : window;
        (u._gsQueue || (u._gsQueue = [])).push(function() {
                u._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var n, r, i, o, s = function e() {
                            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio
                        },
                        l = u._gsDefine.globals,
                        c = {},
                        p = s.prototype = new t("css");
                    p.constructor = s, s.version = "1.19.1", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, p = "px", s.suffixMap = {
                        top: p,
                        right: p,
                        bottom: p,
                        left: p,
                        width: p,
                        height: p,
                        fontSize: p,
                        padding: p,
                        margin: p,
                        perspective: p,
                        lineHeight: ""
                    };
                    var f, h, d, y, v, g, m, _, b = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        O = /(?:\d|\-|\+|=|#|\.)*/g,
                        k = /opacity *= *([^)]*)/i,
                        S = /opacity:([^;]*)/i,
                        P = /alpha\(opacity *=.+?\)/i,
                        E = /^(rgb|hsl)/,
                        j = /([A-Z])/g,
                        C = /-([a-z])/gi,
                        A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        M = function(t, e) {
                            return e.toUpperCase()
                        },
                        I = /(?:Left|Right|Width)/i,
                        N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        L = /,(?=[^\)]*(?:\(|$))/gi,
                        D = /[\s,\(]/i,
                        F = Math.PI / 180,
                        z = 180 / Math.PI,
                        $ = {},
                        U = {
                            style: {}
                        },
                        H = u.document || {
                            createElement: function() {
                                return U
                            }
                        },
                        X = function(t, e) {
                            return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
                        },
                        B = X("div"),
                        Y = X("img"),
                        W = s._internals = {
                            _specialProps: c
                        },
                        V = (u.navigator || {}).userAgent || "",
                        q = function() {
                            var t = V.indexOf("Android"),
                                e = X("a");
                            return d = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3), v = d && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, y = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                        }(),
                        G = function(t) {
                            return k.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        Z = function(t) {
                            u.console
                        },
                        Q = "",
                        J = "",
                        K = function(t, e) {
                            e = e || B;
                            var n, r, i = e.style;
                            if (void 0 !== i[t]) return t;
                            for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + t];);
                            return r >= 0 ? (J = 3 === r ? "ms" : n[r], Q = "-" + J.toLowerCase() + "-", J + t) : null
                        },
                        tt = H.defaultView ? H.defaultView.getComputedStyle : function() {},
                        et = s.getStyle = function(t, e, n, r, i) {
                            var o;
                            return q || "opacity" !== e ? (!r && t.style[e] ? o = t.style[e] : (n = n || tt(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(j, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == i || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : i) : G(t)
                        },
                        nt = W.convertToPixels = function(t, n, r, i, o) {
                            if ("px" === i || !i) return r;
                            if ("auto" === i || !r) return 0;
                            var a, u, l, c = I.test(n),
                                p = t,
                                f = B.style,
                                h = r < 0,
                                d = 1 === r;
                            if (h && (r = -r), d && (r *= 100), "%" === i && -1 !== n.indexOf("border")) a = r / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== i && p.appendChild && "v" !== i.charAt(0) && "rem" !== i) f[c ? "borderLeftWidth" : "borderTopWidth"] = r + i;
                                else {
                                    if (p = t.parentNode || H.body, u = p._gsCache, l = e.ticker.frame, u && c && u.time === l) return u.width * r / 100;
                                    f[c ? "width" : "height"] = r + i
                                }
                                p.appendChild(B), a = parseFloat(B[c ? "offsetWidth" : "offsetHeight"]), p.removeChild(B), c && "%" === i && !1 !== s.cacheWidths && (u = p._gsCache = p._gsCache || {}, u.time = l, u.width = a / r * 100), 0 !== a || o || (a = nt(t, n, r, i, !0))
                            }
                            return d && (a /= 100), h ? -a : a
                        },
                        rt = W.calculateOffset = function(t, e, n) {
                            if ("absolute" !== et(t, "position", n)) return 0;
                            var r = "left" === e ? "Left" : "Top",
                                i = et(t, "margin" + r, n);
                            return t["offset" + r] - (nt(t, e, parseFloat(i), i.replace(O, "")) || 0)
                        },
                        it = function(t, e) {
                            var n, r, i, o = {};
                            if (e = e || tt(t, null))
                                if (n = e.length)
                                    for (; --n > -1;) i = e[n], -1 !== i.indexOf("-transform") && At !== i || (o[i.replace(C, M)] = e.getPropertyValue(i));
                                else
                                    for (n in e) - 1 !== n.indexOf("Transform") && Ct !== n || (o[n] = e[n]);
                            else if (e = t.currentStyle || t.style)
                                for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(C, M)] = e[n]);
                            return q || (o.opacity = G(t)), r = Yt(t, e, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, It && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
                        },
                        ot = function(t, e, n, r, i) {
                            var o, s, a, u = {},
                                l = t.style;
                            for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || i && i[s]) && -1 === s.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (u[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(T, "") ? o : 0 : rt(t, s), void 0 !== l[s] && (a = new bt(l, s, l[s], a))));
                            if (r)
                                for (s in r) "className" !== s && (u[s] = r[s]);
                            return {
                                difs: u,
                                firstMPT: a
                            }
                        },
                        st = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        ut = function(t, e, n) {
                            if ("svg" === (t.nodeName + "").toLowerCase()) return (n || tt(t))[e] || 0;
                            if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
                            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                i = st[e],
                                o = i.length;
                            for (n = n || tt(t, null); --o > -1;) r -= parseFloat(et(t, "padding" + i[o], n, !0)) || 0, r -= parseFloat(et(t, "border" + i[o] + "Width", n, !0)) || 0;
                            return r
                        },
                        lt = function t(e, n) {
                            if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                            null != e && "" !== e || (e = "0 0");
                            var r, i = e.split(" "),
                                o = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                                s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                            if (i.length > 3 && !n) {
                                for (i = e.split(", ").join(",").split(","), e = [], r = 0; r < i.length; r++) e.push(t(i[r]));
                                return e.join(",")
                            }
                            return null == s ? s = "center" === o ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === o || isNaN(parseFloat(o)) && -1 === (o + "").indexOf("=")) && (o = "50%"), e = o + " " + s + (i.length > 2 ? " " + i[2] : ""), n && (n.oxp = -1 !== o.indexOf("%"), n.oyp = -1 !== s.indexOf("%"), n.oxr = "=" === o.charAt(1), n.oyr = "=" === s.charAt(1), n.ox = parseFloat(o.replace(T, "")), n.oy = parseFloat(s.replace(T, "")), n.v = e), n || e
                        },
                        ct = function(t, e) {
                            return "function" == typeof t && (t = t(_, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                        },
                        pt = function(t, e) {
                            return "function" == typeof t && (t = t(_, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                        },
                        ft = function(t, e, n, r) {
                            var i, o, s, a, u;
                            return "function" == typeof t && (t = t(_, m)), null == t ? a = e : "number" == typeof t ? a = t : (i = 360, o = t.split("_"), u = "=" === t.charAt(1), s = (u ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (u ? 0 : e), o.length && (r && (r[n] = e + s), -1 !== t.indexOf("short") && (s %= i) !== s % (i / 2) && (s = s < 0 ? s + i : s - i), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * i) % i - (s / i | 0) * i : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * i) % i - (s / i | 0) * i)), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a
                        },
                        ht = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            transparent: [255, 255, 255, 0]
                        },
                        dt = function(t, e, n) {
                            return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                        },
                        yt = s.parseColor = function(t, e) {
                            var n, r, i, o, s, a, u, l, c, p, f;
                            if (t)
                                if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                                else {
                                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) n = ht[t];
                                    else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o), t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (n = f = t.match(b), e) {
                                            if (-1 !== t.indexOf("=")) return t.match(w)
                                        } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, u = Number(n[2]) / 100, i = u <= .5 ? u * (a + 1) : u + a - u * a, r = 2 * u - i, n.length > 3 && (n[3] = Number(t[3])), n[0] = dt(s + 1 / 3, r, i), n[1] = dt(s, r, i), n[2] = dt(s - 1 / 3, r, i);
                                    else n = t.match(b) || ht.transparent;
                                    n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                                }
                            else n = ht.black;
                            return e && !f && (r = n[0] / 255, i = n[1] / 255, o = n[2] / 255, l = Math.max(r, i, o), c = Math.min(r, i, o), u = (l + c) / 2, l === c ? s = a = 0 : (p = l - c, a = u > .5 ? p / (2 - l - c) : p / (l + c), s = l === r ? (i - o) / p + (i < o ? 6 : 0) : l === i ? (o - r) / p + 2 : (r - i) / p + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * u + .5 | 0), n
                        },
                        vt = function(t, e) {
                            var n, r, i, o = t.match(gt) || [],
                                s = 0,
                                a = o.length ? "" : t;
                            for (n = 0; n < o.length; n++) r = o[n], i = t.substr(s, t.indexOf(r, s) - s), s += i.length + r.length, r = yt(r, e), 3 === r.length && r.push(1), a += i + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                            return a + t.substr(s)
                        },
                        gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (p in ht) gt += "|" + p + "\\b";
                    gt = new RegExp(gt + ")", "gi"), s.colorStringFilter = function(t) {
                        var e, n = t[0] + t[1];
                        gt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = vt(t[0], e), t[1] = vt(t[1], e)), gt.lastIndex = 0
                    }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                    var mt = function(t, e, n, r) {
                            if (null == t) return function(t) {
                                return t
                            };
                            var i, o = e ? (t.match(gt) || [""])[0] : "",
                                s = t.split(o).join("").match(x) || [],
                                a = t.substr(0, t.indexOf(s[0])),
                                u = ")" === t.charAt(t.length - 1) ? ")" : "",
                                l = -1 !== t.indexOf(" ") ? " " : ",",
                                c = s.length,
                                p = c > 0 ? s[0].replace(b, "") : "";
                            return c ? i = e ? function(t) {
                                var e, f, h, d;
                                if ("number" == typeof t) t += p;
                                else if (r && L.test(t)) {
                                    for (d = t.replace(L, "|").split("|"), h = 0; h < d.length; h++) d[h] = i(d[h]);
                                    return d.join(",")
                                }
                                if (e = (t.match(gt) || [o])[0], f = t.split(e).join("").match(x) || [], h = f.length, c > h--)
                                    for (; ++h < c;) f[h] = n ? f[(h - 1) / 2 | 0] : s[h];
                                return a + f.join(l) + l + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
                            } : function(t) {
                                var e, o, f;
                                if ("number" == typeof t) t += p;
                                else if (r && L.test(t)) {
                                    for (o = t.replace(L, "|").split("|"), f = 0; f < o.length; f++) o[f] = i(o[f]);
                                    return o.join(",")
                                }
                                if (e = t.match(x) || [], f = e.length, c > f--)
                                    for (; ++f < c;) e[f] = n ? e[(f - 1) / 2 | 0] : s[f];
                                return a + e.join(l) + u
                            } : function(t) {
                                return t
                            }
                        },
                        _t = function(t) {
                            return t = t.split(","),
                                function(e, n, r, i, o, s, a) {
                                    var u, l = (n + "").split(" ");
                                    for (a = {}, u = 0; u < 4; u++) a[t[u]] = l[u] = l[u] || l[(u - 1) / 2 >> 0];
                                    return i.parse(e, a, o, s)
                                }
                        },
                        bt = (W._setPluginRatio = function(t) {
                            this.plugin.setRatio(t);
                            for (var e, n, r, i, o, s = this.data, a = s.proxy, u = s.firstMPT; u;) e = a[u.v], u.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), u.t[u.p] = e, u = u._next;
                            if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                for (u = s.firstMPT, o = 1 === t ? "e" : "b"; u;) {
                                    if (n = u.t, n.type) {
                                        if (1 === n.type) {
                                            for (i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n[o] = i
                                        }
                                    } else n[o] = n.s + n.xs0;
                                    u = u._next
                                }
                        }, function(t, e, n, r, i) {
                            this.t = t, this.p = e, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
                        }),
                        wt = (W._parseToProxy = function(t, e, n, r, i, o) {
                            var s, a, u, l, c, p = r,
                                f = {},
                                h = {},
                                d = n._transform,
                                y = $;
                            for (n._transform = null, $ = e, r = c = n.parse(t, e, r, i), $ = y, o && (n._transform = d, p && (p._prev = null, p._prev && (p._prev._next = null))); r && r !== p;) {
                                if (r.type <= 1 && (a = r.p, h[a] = r.s + r.c, f[a] = r.s, o || (l = new bt(r, "s", a, l, r.r), r.c = 0), 1 === r.type))
                                    for (s = r.l; --s > 0;) u = "xn" + s, a = r.p + "_" + u, h[a] = r.data[u], f[a] = r[u], o || (l = new bt(r, u, a, l, r.rxp[u]));
                                r = r._next
                            }
                            return {
                                proxy: f,
                                end: h,
                                firstMPT: l,
                                pt: c
                            }
                        }, W.CSSPropTween = function(t, e, r, i, s, a, u, l, c, p, f) {
                            this.t = t, this.p = e, this.s = r, this.c = i, this.n = u || e, t instanceof wt || o.push(this.n), this.r = l, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === p ? r : p, this.e = void 0 === f ? r + i : f, s && (this._next = s, s._prev = this)
                        }),
                        xt = function(t, e, n, r, i, o) {
                            var s = new wt(t, e, n, r - n, i, -1, o);
                            return s.b = n, s.e = s.xs0 = r, s
                        },
                        Tt = s.parseComplex = function(t, e, n, r, i, o, a, u, l, c) {
                            n = n || o || "", "function" == typeof r && (r = r(_, m)), a = new wt(t, e, 0, 0, a, c ? 2 : 1, null, !1, u, n, r), r += "", i && gt.test(r + n) && (r = [n, r], s.colorStringFilter(r), n = r[0], r = r[1]);
                            var p, h, d, y, v, g, x, T, O, k, S, P, E, j = n.split(", ").join(",").split(" "),
                                C = r.split(", ").join(",").split(" "),
                                A = j.length,
                                M = !1 !== f;
                            for (-1 === r.indexOf(",") && -1 === n.indexOf(",") || (j = j.join(" ").replace(L, ", ").split(" "), C = C.join(" ").replace(L, ", ").split(" "), A = j.length), A !== C.length && (j = (o || "").split(" "), A = j.length), a.plugin = l, a.setRatio = c, gt.lastIndex = 0, p = 0; p < A; p++)
                                if (y = j[p], v = C[p], (T = parseFloat(y)) || 0 === T) a.appendXtra("", T, ct(v, T), v.replace(w, ""), M && -1 !== v.indexOf("px"), !0);
                                else if (i && gt.test(y)) P = v.indexOf(")") + 1, P = ")" + (P ? v.substr(P) : ""), E = -1 !== v.indexOf("hsl") && q, y = yt(y, E), v = yt(v, E), O = y.length + v.length > 6, O && !q && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(C[p]).join("transparent")) : (q || (O = !1), E ? a.appendXtra(O ? "hsla(" : "hsl(", y[0], ct(v[0], y[0]), ",", !1, !0).appendXtra("", y[1], ct(v[1], y[1]), "%,", !1).appendXtra("", y[2], ct(v[2], y[2]), O ? "%," : "%" + P, !1) : a.appendXtra(O ? "rgba(" : "rgb(", y[0], v[0] - y[0], ",", !0, !0).appendXtra("", y[1], v[1] - y[1], ",", !0).appendXtra("", y[2], v[2] - y[2], O ? "," : P, !0), O && (y = y.length < 4 ? 1 : y[3], a.appendXtra("", y, (v.length < 4 ? 1 : v[3]) - y, P, !1))), gt.lastIndex = 0;
                            else if (g = y.match(b)) {
                                if (!(x = v.match(w)) || x.length !== g.length) return a;
                                for (d = 0, h = 0; h < g.length; h++) S = g[h], k = y.indexOf(S, d), a.appendXtra(y.substr(d, k - d), Number(S), ct(x[h], S), "", M && "px" === y.substr(k + S.length, 2), 0 === h), d = k + S.length;
                                a["xs" + a.l] += y.substr(d)
                            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                            if (-1 !== r.indexOf("=") && a.data) {
                                for (P = a.xs0 + a.data.s, p = 1; p < a.l; p++) P += a["xs" + p] + a.data["xn" + p];
                                a.e = P + a["xs" + p]
                            }
                            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                        },
                        Ot = 9;
                    for (p = wt.prototype, p.l = p.pr = 0; --Ot > 0;) p["xn" + Ot] = 0, p["xs" + Ot] = "";
                    p.xs0 = "", p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null, p.appendXtra = function(t, e, n, r, i, o) {
                        var s = this,
                            a = s.l;
                        return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = r || "", a > 0 ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = i, s["xn" + a] = e, s.plugin || (s.xfirst = new wt(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, i, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                            s: e + n
                        }, s.rxp = {}, s.s = e, s.c = n, s.r = i, s)) : (s["xs" + a] += e + (r || ""), s)
                    };
                    var kt = function(t, e) {
                            e = e || {}, this.p = e.prefix ? K(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                        },
                        St = W._registerComplexSpecialProp = function(t, e, n) {
                            "object" !== (void 0 === e ? "undefined" : a(e)) && (e = {
                                parser: n
                            });
                            var r, i = t.split(","),
                                o = e.defaultValue;
                            for (n = n || [o], r = 0; r < i.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = n[r] || o, new kt(i[r], e)
                        },
                        Pt = W._registerPluginProp = function(t) {
                            if (!c[t]) {
                                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                St(t, {
                                    parser: function(t, n, r, i, o, s, a) {
                                        var u = l.com.greensock.plugins[e];
                                        return u ? (u._cssRegister(), c[r].parse(t, n, r, i, o, s, a)) : (Z(), o)
                                    }
                                })
                            }
                        };
                    p = kt.prototype, p.parseComplex = function(t, e, n, r, i, o) {
                        var s, a, u, l, c, p, f = this.keyword;
                        if (this.multi && (L.test(n) || L.test(e) ? (a = e.replace(L, "|").split("|"), u = n.replace(L, "|").split("|")) : f && (a = [e], u = [n])), u) {
                            for (l = u.length > a.length ? u.length : a.length, s = 0; s < l; s++) e = a[s] = a[s] || this.dflt, n = u[s] = u[s] || this.dflt, f && (c = e.indexOf(f), p = n.indexOf(f), c !== p && (-1 === p ? a[s] = a[s].split(f).join("") : -1 === c && (a[s] += " " + f)));
                            e = a.join(", "), n = u.join(", ")
                        }
                        return Tt(t, this.p, e, n, this.clrs, this.dflt, r, this.pr, i, o)
                    }, p.parse = function(t, e, n, r, o, s, a) {
                        return this.parseComplex(t.style, this.format(et(t, this.p, i, !1, this.dflt)), this.format(e), o, s)
                    }, s.registerSpecialProp = function(t, e, n) {
                        St(t, {
                            parser: function(t, r, i, o, s, a, u) {
                                var l = new wt(t, i, 0, 0, s, 2, i, !1, n);
                                return l.plugin = a, l.setRatio = e(t, r, o._tween, i), l
                            },
                            priority: n
                        })
                    }, s.useSVGTransformAttr = !0;
                    var Et, jt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        Ct = K("transform"),
                        At = Q + "transform",
                        Mt = K("transformOrigin"),
                        It = null !== K("perspective"),
                        Nt = W.Transform = function() {
                            this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !It) && (s.defaultForce3D || "auto")
                        },
                        Rt = u.SVGElement,
                        Lt = function(t, e, n) {
                            var r, i = H.createElementNS("http://www.w3.org/2000/svg", t),
                                o = /([a-z])([A-Z])/g;
                            for (r in n) i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
                            return e.appendChild(i), i
                        },
                        Dt = H.documentElement || {},
                        Ft = function() {
                            var t, e, n, r = g || /Android/i.test(V) && !u.chrome;
                            return H.createElementNS && !r && (t = Lt("svg", Dt), e = Lt("rect", t, {
                                width: 100,
                                height: 50,
                                x: 100
                            }), n = e.getBoundingClientRect().width, e.style[Mt] = "50% 50%", e.style[Ct] = "scaleX(0.5)", r = n === e.getBoundingClientRect().width && !(y && It), Dt.removeChild(t)), r
                        }(),
                        zt = function(t, e, n, r, i, o) {
                            var a, u, l, c, p, f, h, d, y, v, g, m, _, b, w = t._gsTransform,
                                x = Bt(t, !0);
                            w && (_ = w.xOrigin, b = w.yOrigin), (!r || (a = r.split(" ")).length < 2) && (h = t.getBBox(), 0 === h.x && 0 === h.y && h.width + h.height === 0 && (h = {
                                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                width: 0,
                                height: 0
                            }), e = lt(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), n.xOrigin = c = parseFloat(a[0]), n.yOrigin = p = parseFloat(a[1]), r && x !== Xt && (f = x[0], h = x[1], d = x[2], y = x[3], v = x[4], g = x[5], (m = f * y - h * d) && (u = c * (y / m) + p * (-d / m) + (d * g - y * v) / m, l = c * (-h / m) + p * (f / m) - (f * g - h * v) / m, c = n.xOrigin = a[0] = u, p = n.yOrigin = a[1] = l)), w && (o && (n.xOffset = w.xOffset, n.yOffset = w.yOffset, w = n), i || !1 !== i && !1 !== s.defaultSmoothOrigin ? (u = c - _, l = p - b, w.xOffset += u * x[0] + l * x[2] - u, w.yOffset += u * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                        },
                        $t = function t(e) {
                            var n, r = X("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                i = this.parentNode,
                                o = this.nextSibling,
                                s = this.style.cssText;
                            if (Dt.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                                n = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = t
                            } catch (t) {} else this._originalGetBBox && (n = this._originalGetBBox());
                            return o ? i.insertBefore(this, o) : i.appendChild(this), Dt.removeChild(r), this.style.cssText = s, n
                        },
                        Ut = function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return $t.call(t, !0)
                            }
                        },
                        Ht = function(t) {
                            return !(!(Rt && t.getCTM && Ut(t)) || t.parentNode && !t.ownerSVGElement)
                        },
                        Xt = [1, 0, 0, 1, 0, 0],
                        Bt = function(t, e) {
                            var n, r, i, o, s, a, u = t._gsTransform || new Nt,
                                l = t.style;
                            if (Ct ? r = et(t, At, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(N), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, n && Ct && ((a = "none" === tt(t).display) || !t.parentNode) && (a && (o = l.display, l.display = "block"), t.parentNode || (s = 1, Dt.appendChild(t)), r = et(t, At, null, !0), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, o ? l.display = o : a && Gt(l, "display"), s && Dt.removeChild(t)), (u.svg || t.getCTM && Ht(t)) && (n && -1 !== (l[Ct] + "").indexOf("matrix") && (r = l[Ct], n = 0), i = t.getAttribute("transform"), n && i && (-1 !== i.indexOf("matrix") ? (r = i, n = 0) : -1 !== i.indexOf("translate") && (r = "matrix(1,0,0,1," + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Xt;
                            for (i = (r || "").match(b) || [], Ot = i.length; --Ot > -1;) o = Number(i[Ot]), i[Ot] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                            return e && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                        },
                        Yt = W.getTransform = function(t, n, r, i) {
                            if (t._gsTransform && r && !i) return t._gsTransform;
                            var o, a, u, l, c, p, f = r ? t._gsTransform || new Nt : new Nt,
                                h = f.scaleX < 0,
                                d = It ? parseFloat(et(t, Mt, n, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                                y = parseFloat(s.defaultTransformPerspective) || 0;
                            if (f.svg = !(!t.getCTM || !Ht(t)), f.svg && (zt(t, et(t, Mt, n, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Et = s.useSVGTransformAttr || Ft), (o = Bt(t)) !== Xt) {
                                if (16 === o.length) {
                                    var v, g, m, _, b, w = o[0],
                                        x = o[1],
                                        T = o[2],
                                        O = o[3],
                                        k = o[4],
                                        S = o[5],
                                        P = o[6],
                                        E = o[7],
                                        j = o[8],
                                        C = o[9],
                                        A = o[10],
                                        M = o[12],
                                        I = o[13],
                                        N = o[14],
                                        R = o[11],
                                        L = Math.atan2(P, A);
                                    f.zOrigin && (N = -f.zOrigin, M = j * N - o[12], I = C * N - o[13], N = A * N + f.zOrigin - o[14]), f.rotationX = L * z, L && (_ = Math.cos(-L), b = Math.sin(-L), v = k * _ + j * b, g = S * _ + C * b, m = P * _ + A * b, j = k * -b + j * _, C = S * -b + C * _, A = P * -b + A * _, R = E * -b + R * _, k = v, S = g, P = m), L = Math.atan2(-T, A), f.rotationY = L * z, L && (_ = Math.cos(-L), b = Math.sin(-L), v = w * _ - j * b, g = x * _ - C * b, m = T * _ - A * b, C = x * b + C * _, A = T * b + A * _, R = O * b + R * _, w = v, x = g, T = m), L = Math.atan2(x, w), f.rotation = L * z, L && (_ = Math.cos(-L), b = Math.sin(-L), w = w * _ + k * b, g = x * _ + S * b, S = x * -b + S * _, P = T * -b + P * _, x = g), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (1e5 * Math.sqrt(w * w + x * x) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(S * S + C * C) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(P * P + A * A) + .5 | 0) / 1e5, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || S ? Math.atan2(k, S) * z + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (h ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = R ? 1 / (R < 0 ? -R : R) : 0, f.x = M, f.y = I, f.z = N, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * x - f.xOrigin * S))
                                } else if (!It || i || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                                    var D = o.length >= 6,
                                        F = D ? o[0] : 1,
                                        $ = o[1] || 0,
                                        U = o[2] || 0,
                                        H = D ? o[3] : 1;
                                    f.x = o[4] || 0, f.y = o[5] || 0, u = Math.sqrt(F * F + $ * $), l = Math.sqrt(H * H + U * U), c = F || $ ? Math.atan2($, F) * z : f.rotation || 0, p = U || H ? Math.atan2(U, H) * z + c : f.skewX || 0, Math.abs(p) > 90 && Math.abs(p) < 270 && (h ? (u *= -1, p += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (l *= -1, p += p <= 0 ? 180 : -180)), f.scaleX = u, f.scaleY = l, f.rotation = c, f.skewX = p, It && (f.rotationX = f.rotationY = f.z = 0, f.perspective = y, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * F + f.yOrigin * U), f.y -= f.yOrigin - (f.xOrigin * $ + f.yOrigin * H))
                                }
                                f.zOrigin = d;
                                for (a in f) f[a] < 2e-5 && f[a] > -2e-5 && (f[a] = 0)
                            }
                            return r && (t._gsTransform = f, f.svg && (Et && t.style[Ct] ? e.delayedCall(.001, function() {
                                Gt(t.style, Ct)
                            }) : !Et && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                t.removeAttribute("transform")
                            }))), f
                        },
                        Wt = function(t) {
                            var e, n, r = this.data,
                                i = -r.rotation * F,
                                o = i + r.skewX * F,
                                s = (Math.cos(i) * r.scaleX * 1e5 | 0) / 1e5,
                                a = (Math.sin(i) * r.scaleX * 1e5 | 0) / 1e5,
                                u = (Math.sin(o) * -r.scaleY * 1e5 | 0) / 1e5,
                                l = (Math.cos(o) * r.scaleY * 1e5 | 0) / 1e5,
                                c = this.t.style,
                                p = this.t.currentStyle;
                            if (p) {
                                n = a, a = -u, u = -n, e = p.filter, c.filter = "";
                                var f, h, d = this.t.offsetWidth,
                                    y = this.t.offsetHeight,
                                    v = "absolute" !== p.position,
                                    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + u + ", M22=" + l,
                                    _ = r.x + d * r.xPercent / 100,
                                    b = r.y + y * r.yPercent / 100;
                                if (null != r.ox && (f = (r.oxp ? d * r.ox * .01 : r.ox) - d / 2, h = (r.oyp ? y * r.oy * .01 : r.oy) - y / 2, _ += f - (f * s + h * a), b += h - (f * u + h * l)), v ? (f = d / 2, h = y / 2, m += ", Dx=" + (f - (f * s + h * a) + _) + ", Dy=" + (h - (f * u + h * l) + b) + ")") : m += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(R, m) : c.filter = m + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === u && 1 === l && (v && -1 === m.indexOf("Dx=0, Dy=0") || k.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                    var w, x, T, S = g < 8 ? 1 : -1;
                                    for (f = r.ieOffsetX || 0, h = r.ieOffsetY || 0, r.ieOffsetX = Math.round((d - ((s < 0 ? -s : s) * d + (a < 0 ? -a : a) * y)) / 2 + _), r.ieOffsetY = Math.round((y - ((l < 0 ? -l : l) * y + (u < 0 ? -u : u) * d)) / 2 + b), Ot = 0; Ot < 4; Ot++) x = at[Ot], w = p[x], n = -1 !== w.indexOf("px") ? parseFloat(w) : nt(this.t, x, parseFloat(w), w.replace(O, "")) || 0, T = n !== r[x] ? Ot < 2 ? -r.ieOffsetX : -r.ieOffsetY : Ot < 2 ? f - r.ieOffsetX : h - r.ieOffsetY, c[x] = (r[x] = Math.round(n - T * (0 === Ot || 2 === Ot ? 1 : S))) + "px"
                                }
                            }
                        },
                        Vt = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                            var e, n, r, i, o, s, a, u, l, c, p, f, h, d, v, g, m, _, b, w, x, T, O, k = this.data,
                                S = this.t.style,
                                P = k.rotation,
                                E = k.rotationX,
                                j = k.rotationY,
                                C = k.scaleX,
                                A = k.scaleY,
                                M = k.scaleZ,
                                I = k.x,
                                N = k.y,
                                R = k.z,
                                L = k.svg,
                                D = k.perspective,
                                z = k.force3D,
                                $ = k.skewY,
                                U = k.skewX;
                            if ($ && (U += $, P += $), ((1 === t || 0 === t) && "auto" === z && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !z) && !R && !D && !j && !E && 1 === M || Et && L || !It) return void(P || U || L ? (P *= F, T = U * F, O = 1e5, n = Math.cos(P) * C, o = Math.sin(P) * C, r = Math.sin(P - T) * -A, s = Math.cos(P - T) * A, T && "simple" === k.skewType && (e = Math.tan(T - $ * F), e = Math.sqrt(1 + e * e), r *= e, s *= e, $ && (e = Math.tan($ * F), e = Math.sqrt(1 + e * e), n *= e, o *= e)), L && (I += k.xOrigin - (k.xOrigin * n + k.yOrigin * r) + k.xOffset, N += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, Et && (k.xPercent || k.yPercent) && (v = this.t.getBBox(), I += .01 * k.xPercent * v.width, N += .01 * k.yPercent * v.height), v = 1e-6, I < v && I > -v && (I = 0), N < v && N > -v && (N = 0)), b = (n * O | 0) / O + "," + (o * O | 0) / O + "," + (r * O | 0) / O + "," + (s * O | 0) / O + "," + I + "," + N + ")", L && Et ? this.t.setAttribute("transform", "matrix(" + b) : S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + A + "," + I + "," + N + ")");
                            if (y && (v = 1e-4, C < v && C > -v && (C = M = 2e-5), A < v && A > -v && (A = M = 2e-5), !D || k.z || k.rotationX || k.rotationY || (D = 0)), P || U) P *= F, g = n = Math.cos(P), m = o = Math.sin(P), U && (P -= U * F, g = Math.cos(P), m = Math.sin(P), "simple" === k.skewType && (e = Math.tan((U - $) * F), e = Math.sqrt(1 + e * e), g *= e, m *= e, k.skewY && (e = Math.tan($ * F), e = Math.sqrt(1 + e * e), n *= e, o *= e))), r = -m, s = g;
                            else {
                                if (!(j || E || 1 !== M || D || L)) return void(S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + N + "px," + R + "px)" + (1 !== C || 1 !== A ? " scale(" + C + "," + A + ")" : ""));
                                n = s = 1, r = o = 0
                            }
                            c = 1, i = a = u = l = p = f = 0, h = D ? -1 / D : 0, d = k.zOrigin, v = 1e-6, w = ",", x = "0", P = j * F, P && (g = Math.cos(P), m = Math.sin(P), u = -m, p = h * -m, i = n * m, a = o * m, c = g, h *= g, n *= g, o *= g), P = E * F, P && (g = Math.cos(P), m = Math.sin(P), e = r * g + i * m, _ = s * g + a * m, l = c * m, f = h * m, i = r * -m + i * g, a = s * -m + a * g, c *= g, h *= g, r = e, s = _), 1 !== M && (i *= M, a *= M, c *= M, h *= M), 1 !== A && (r *= A, s *= A, l *= A, f *= A), 1 !== C && (n *= C, o *= C, u *= C, p *= C), (d || L) && (d && (I += i * -d, N += a * -d, R += c * -d + d), L && (I += k.xOrigin - (k.xOrigin * n + k.yOrigin * r) + k.xOffset, N += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), I < v && I > -v && (I = x), N < v && N > -v && (N = x), R < v && R > -v && (R = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (n < v && n > -v ? x : n) + w + (o < v && o > -v ? x : o) + w + (u < v && u > -v ? x : u), b += w + (p < v && p > -v ? x : p) + w + (r < v && r > -v ? x : r) + w + (s < v && s > -v ? x : s), E || j || 1 !== M ? (b += w + (l < v && l > -v ? x : l) + w + (f < v && f > -v ? x : f) + w + (i < v && i > -v ? x : i), b += w + (a < v && a > -v ? x : a) + w + (c < v && c > -v ? x : c) + w + (h < v && h > -v ? x : h) + w) : b += ",0,0,0,0,1,0,", b += I + w + N + w + R + w + (D ? 1 + -R / D : 1) + ")", S[Ct] = b
                        };
                    p = Nt.prototype, p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0, p.scaleX = p.scaleY = p.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, n, r, o, u, l) {
                            if (r._lastParsedTransform === l) return o;
                            r._lastParsedTransform = l;
                            var c, p = l.scale && "function" == typeof l.scale ? l.scale : 0;
                            "function" == typeof l[n] && (c = l[n], l[n] = e), p && (l.scale = p(_, t));
                            var f, h, d, y, v, g, b, w, x, T = t._gsTransform,
                                O = t.style,
                                k = jt.length,
                                S = l,
                                P = {},
                                E = Yt(t, i, !0, S.parseTransform),
                                j = S.transform && ("function" == typeof S.transform ? S.transform(_, m) : S.transform);
                            if (r._transform = E, j && "string" == typeof j && Ct) h = B.style, h[Ct] = j, h.display = "block", h.position = "absolute", H.body.appendChild(B), f = Yt(B, null, !1), E.svg && (g = E.xOrigin, b = E.yOrigin, f.x -= E.xOffset, f.y -= E.yOffset, (S.transformOrigin || S.svgOrigin) && (j = {}, zt(t, lt(S.transformOrigin), j, S.svgOrigin, S.smoothOrigin, !0), g = j.xOrigin, b = j.yOrigin, f.x -= j.xOffset - E.xOffset, f.y -= j.yOffset - E.yOffset), (g || b) && (w = Bt(B, !0), f.x -= g - (g * w[0] + b * w[2]), f.y -= b - (g * w[1] + b * w[3]))), H.body.removeChild(B), f.perspective || (f.perspective = E.perspective), null != S.xPercent && (f.xPercent = pt(S.xPercent, E.xPercent)), null != S.yPercent && (f.yPercent = pt(S.yPercent, E.yPercent));
                            else if ("object" === (void 0 === S ? "undefined" : a(S))) {
                                if (f = {
                                        scaleX: pt(null != S.scaleX ? S.scaleX : S.scale, E.scaleX),
                                        scaleY: pt(null != S.scaleY ? S.scaleY : S.scale, E.scaleY),
                                        scaleZ: pt(S.scaleZ, E.scaleZ),
                                        x: pt(S.x, E.x),
                                        y: pt(S.y, E.y),
                                        z: pt(S.z, E.z),
                                        xPercent: pt(S.xPercent, E.xPercent),
                                        yPercent: pt(S.yPercent, E.yPercent),
                                        perspective: pt(S.transformPerspective, E.perspective)
                                    }, null != (v = S.directionalRotation))
                                    if ("object" === (void 0 === v ? "undefined" : a(v)))
                                        for (h in v) S[h] = v[h];
                                    else S.rotation = v;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (f.x = 0, f.xPercent = pt(S.x, E.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (f.y = 0, f.yPercent = pt(S.y, E.yPercent)), f.rotation = ft("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : E.rotation, E.rotation, "rotation", P), It && (f.rotationX = ft("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", P), f.rotationY = ft("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", P)), f.skewX = ft(S.skewX, E.skewX), f.skewY = ft(S.skewY, E.skewY)
                            }
                            for (It && null != S.force3D && (E.force3D = S.force3D, y = !0), E.skewType = S.skewType || E.skewType || s.defaultSkewType, d = E.force3D || E.z || E.rotationX || E.rotationY || f.z || f.rotationX || f.rotationY || f.perspective, d || null == S.scale || (f.scaleZ = 1); --k > -1;) x = jt[k], ((j = f[x] - E[x]) > 1e-6 || j < -1e-6 || null != S[x] || null != $[x]) && (y = !0, o = new wt(E, x, E[x], j, o), x in P && (o.e = P[x]), o.xs0 = 0, o.plugin = u, r._overwriteProps.push(o.n));
                            return j = S.transformOrigin, E.svg && (j || S.svgOrigin) && (g = E.xOffset, b = E.yOffset, zt(t, lt(j), f, S.svgOrigin, S.smoothOrigin), o = xt(E, "xOrigin", (T ? E : f).xOrigin, f.xOrigin, o, "transformOrigin"), o = xt(E, "yOrigin", (T ? E : f).yOrigin, f.yOrigin, o, "transformOrigin"), g === E.xOffset && b === E.yOffset || (o = xt(E, "xOffset", T ? g : E.xOffset, E.xOffset, o, "transformOrigin"), o = xt(E, "yOffset", T ? b : E.yOffset, E.yOffset, o, "transformOrigin")), j = "0px 0px"), (j || It && d && E.zOrigin) && (Ct ? (y = !0, x = Mt, j = (j || et(t, x, i, !1, "50% 50%")) + "", o = new wt(O, x, 0, 0, o, -1, "transformOrigin"), o.b = O[x], o.plugin = u, It ? (h = E.zOrigin, j = j.split(" "), E.zOrigin = (j.length > 2 && (0 === h || "0px" !== j[2]) ? parseFloat(j[2]) : h) || 0, o.xs0 = o.e = j[0] + " " + (j[1] || "50%") + " 0px", o = new wt(E, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = E.zOrigin) : o.xs0 = o.e = j) : lt(j + "", E)), y && (r._transformType = E.svg && Et || !d && 3 !== this._transformType ? 2 : 3), c && (l[n] = c), p && (l.scale = p), o
                        },
                        prefix: !0
                    }), St("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), St("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, n, o, s, a) {
                            e = this.format(e);
                            var u, l, c, p, f, h, d, y, v, g, m, _, b, w, x, T, O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                k = t.style;
                            for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), u = e.split(" "), l = 0; l < O.length; l++) this.p.indexOf("border") && (O[l] = K(O[l])), f = p = et(t, O[l], i, !1, "0px"), -1 !== f.indexOf(" ") && (p = f.split(" "), f = p[0], p = p[1]), h = c = u[l], d = parseFloat(f), _ = f.substr((d + "").length), b = "=" === h.charAt(1), b ? (y = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), y *= parseFloat(h), m = h.substr((y + "").length - (y < 0 ? 1 : 0)) || "") : (y = parseFloat(h), m = h.substr((y + "").length)), "" === m && (m = r[n] || _), m !== _ && (w = nt(t, "borderLeft", d, _), x = nt(t, "borderTop", d, _), "%" === m ? (f = w / v * 100 + "%", p = x / g * 100 + "%") : "em" === m ? (T = nt(t, "borderLeft", 1, "em"), f = w / T + "em", p = x / T + "em") : (f = w + "px", p = x + "px"), b && (h = parseFloat(f) + y + m, c = parseFloat(p) + y + m)), s = Tt(k, O[l], f + " " + p, h + " " + c, !1, "0px", s);
                            return s
                        },
                        prefix: !0,
                        formatter: mt("0px 0px 0px 0px", !1, !0)
                    }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, n, r, o, s) {
                            return Tt(t.style, n, this.format(et(t, n, i, !1, "0px 0px")), this.format(e), !1, "0px", o)
                        },
                        prefix: !0,
                        formatter: mt("0px 0px", !1, !0)
                    }), St("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, n, r, o, s) {
                            var a, u, l, c, p, f, h = "background-position",
                                d = i || tt(t, null),
                                y = this.format((d ? g ? d.getPropertyValue(h + "-x") + " " + d.getPropertyValue(h + "-y") : d.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e);
                            if (-1 !== y.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = et(t, "backgroundImage").replace(A, "")) && "none" !== f) {
                                for (a = y.split(" "), u = v.split(" "), Y.setAttribute("src", f), l = 2; --l > -1;) y = a[l], (c = -1 !== y.indexOf("%")) !== (-1 !== u[l].indexOf("%")) && (p = 0 === l ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[l] = c ? parseFloat(y) / 100 * p + "px" : parseFloat(y) / p * 100 + "%");
                                y = a.join(" ")
                            }
                            return this.parseComplex(t.style, y, v, o, s)
                        },
                        formatter: lt
                    }), St("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(t) {
                            return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                        }
                    }), St("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), St("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), St("transformStyle", {
                        prefix: !0
                    }), St("backfaceVisibility", {
                        prefix: !0
                    }), St("userSelect", {
                        prefix: !0
                    }), St("margin", {
                        parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                    }), St("padding", {
                        parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), St("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(t, e, n, r, o, s) {
                            var a, u, l;
                            return g < 9 ? (u = t.currentStyle, l = g < 8 ? " " : ",", a = "rect(" + u.clipTop + l + u.clipRight + l + u.clipBottom + l + u.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(et(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                        }
                    }), St("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), St("autoRound,strictUnits", {
                        parser: function(t, e, n, r, i) {
                            return i
                        }
                    }), St("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, n, r, o, s) {
                            var a = et(t, "borderTopWidth", i, !1, "0px"),
                                u = this.format(e).split(" "),
                                l = u[0].replace(O, "");
                            return "px" !== l && (a = parseFloat(a) / nt(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", i, !1, "solid") + " " + et(t, "borderTopColor", i, !1, "#000")), u.join(" "), o, s)
                        },
                        color: !0,
                        formatter: function(t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
                        }
                    }), St("borderWidth", {
                        parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), St("float,cssFloat,styleFloat", {
                        parser: function(t, e, n, r, i, o) {
                            var s = t.style,
                                a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                            return new wt(s, a, 0, 0, i, -1, n, !1, 0, s[a], e)
                        }
                    });
                    var qt = function(t) {
                        var e, n = this.t,
                            r = n.filter || et(this.data, "filter") || "",
                            i = this.s + this.c * t | 0;
                        100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), e = !et(this.data, "filter")) : (n.filter = r.replace(P, ""), e = !0)), e || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(k, "opacity=" + i))
                    };
                    St("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, n, r, o, s) {
                            var a = parseFloat(et(t, "opacity", i, !1, "1")),
                                u = t.style,
                                l = "autoAlpha" === n;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === et(t, "visibility", i) && 0 !== e && (a = 0), q ? o = new wt(u, "opacity", a, e - a, o) : (o = new wt(u, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = l ? 1 : 0, u.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = qt), l && (o = new wt(u, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", r._overwriteProps.push(o.n), r._overwriteProps.push(n)), o
                        }
                    });
                    var Gt = function(t, e) {
                            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(j, "-$1").toLowerCase())) : t.removeAttribute(e))
                        },
                        Zt = function(t) {
                            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Gt(n, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    St("className", {
                        parser: function(t, e, r, o, s, a, u) {
                            var l, c, p, f, h, d = t.getAttribute("class") || "",
                                y = t.style.cssText;
                            if (s = o._classNamePT = new wt(t, r, 0, 0, s, 2), s.setRatio = Zt, s.pr = -11, n = !0, s.b = d, c = it(t, i), p = t._gsClassPT) {
                                for (f = {}, h = p.data; h;) f[h.p] = 1, h = h._next;
                                p.setRatio(1)
                            }
                            return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), l = ot(t, c, it(t), u, f), t.setAttribute("class", d), s.data = l.firstMPT, t.style.cssText = y, s = s.xfirst = o.parse(t, l.difs, s, a)
                        }
                    });
                    var Qt = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, n, r, i, o, s = this.t.style,
                                a = c.transform.parse;
                            if ("all" === this.e) s.cssText = "", i = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) n = e[r], c[n] && (c[n].parse === a ? i = !0 : n = "transformOrigin" === n ? Mt : c[n].p), Gt(s, n);
                            i && (Gt(s, Ct), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    };
                    for (St("clearProps", {
                            parser: function(t, e, r, i, o) {
                                return o = new wt(t, r, 0, 0, o, 2), o.setRatio = Qt, o.e = e, o.pr = -10, o.data = i._tween, n = !0, o
                            }
                        }), p = "bezier,throwProps,physicsProps,physics2D".split(","), Ot = p.length; Ot--;) Pt(p[Ot]);
                    p = s.prototype, p._firstPT = p._lastParsedTransform = p._transform = null, p._onInitTween = function(t, e, a, u) {
                        if (!t.nodeType) return !1;
                        this._target = m = t, this._tween = a, this._vars = e, _ = u, f = e.autoRound, n = !1, r = e.suffixMap || s.suffixMap, i = tt(t, ""), o = this._overwriteProps;
                        var l, p, y, g, b, w, x, T, O, k = t.style;
                        if (h && "" === k.zIndex && ("auto" !== (l = et(t, "zIndex", i)) && "" !== l || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (g = k.cssText, l = it(t, i), k.cssText = g + ";" + e, l = ot(t, l, it(t)).difs, !q && S.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, k.cssText = g), e.className ? this._firstPT = p = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                            for (O = 3 === this._transformType, Ct ? d && (h = !0, "" === k.zIndex && ("auto" !== (x = et(t, "zIndex", i)) && "" !== x || this._addLazySet(k, "zIndex", 0)), v && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : k.zoom = 1, y = p; y && y._next;) y = y._next;
                            T = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Ct ? Vt : Wt, T.data = this._transform || Yt(t, i, !0), T.tween = a, T.pr = -1, o.pop()
                        }
                        if (n) {
                            for (; p;) {
                                for (w = p._next, y = g; y && y.pr > p.pr;) y = y._next;
                                (p._prev = y ? y._prev : b) ? p._prev._next = p: g = p, (p._next = y) ? y._prev = p : b = p, p = w
                            }
                            this._firstPT = g
                        }
                        return !0
                    }, p.parse = function(t, e, n, o) {
                        var s, a, u, l, p, h, d, y, v, g, b = t.style;
                        for (s in e) h = e[s], "function" == typeof h && (h = h(_, m)), a = c[s], a ? n = a.parse(t, h, s, this, n, o, e) : (p = et(t, s, i) + "", v = "string" == typeof h, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && E.test(h) ? (v || (h = yt(h), h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), n = Tt(b, s, p, h, !0, "transparent", n, 0, o)) : v && D.test(h) ? n = Tt(b, s, p, h, !0, null, n, 0, o) : (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", "" !== p && "auto" !== p || ("width" === s || "height" === s ? (u = ut(t, s, i), d = "px") : "left" === s || "top" === s ? (u = rt(t, s, i), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), g = v && "=" === h.charAt(1), g ? (l = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), l *= parseFloat(h), y = h.replace(O, "")) : (l = parseFloat(h), y = v ? h.replace(O, "") : ""), "" === y && (y = s in r ? r[s] : d), h = l || 0 === l ? (g ? l + u : l) + y : e[s], d !== y && "" !== y && (l || 0 === l) && u && (u = nt(t, s, u, d), "%" === y ? (u /= nt(t, s, 100, "%") / 100, !0 !== e.strictUnits && (p = u + "%")) : "em" === y || "rem" === y || "vw" === y || "vh" === y ? u /= nt(t, s, 1, y) : "px" !== y && (l = nt(t, s, l, y), y = "px"), g && (l || 0 === l) && (h = l + u + y)), g && (l += u), !u && 0 !== u || !l && 0 !== l ? void 0 !== b[s] && (h || h + "" != "NaN" && null != h) ? (n = new wt(b, s, l || u || 0, 0, n, -1, s, !1, 0, p, h), n.xs0 = "none" !== h || "display" !== s && -1 === s.indexOf("Style") ? h : p) : Z(e[s]) : (n = new wt(b, s, u, l - u, n, 0, s, !1 !== f && ("px" === y || "zIndex" === s), 0, p, h), n.xs0 = y))), o && n && !n.plugin && (n.plugin = o);
                        return n
                    }, p.setRatio = function(t) {
                        var e, n, r, i = this._firstPT;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                for (; i;) {
                                    if (e = i.c * t + i.s, i.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), i.type)
                                        if (1 === i.type)
                                            if (2 === (r = i.l)) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2;
                                            else if (3 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                                    else if (4 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                                    else if (5 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                                    else {
                                        for (n = i.xs0 + e + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                        i.t[i.p] = n
                                    } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(t);
                                    else i.t[i.p] = e + i.xs0;
                                    i = i._next
                                } else
                                    for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(t), i = i._next;
                            else
                                for (; i;) {
                                    if (2 !== i.type)
                                        if (i.r && -1 !== i.type)
                                            if (e = Math.round(i.s + i.c), i.type) {
                                                if (1 === i.type) {
                                                    for (r = i.l, n = i.xs0 + e + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                                    i.t[i.p] = n
                                                }
                                            } else i.t[i.p] = e + i.xs0;
                                    else i.t[i.p] = i.e;
                                    else i.setRatio(t);
                                    i = i._next
                                }
                    }, p._enableTransforms = function(t) {
                        this._transform = this._transform || Yt(this._target, i, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
                    };
                    var Jt = function(t) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    p._addLazySet = function(t, e, n) {
                        var r = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                        r.e = n, r.setRatio = Jt, r.data = this
                    }, p._linkCSSP = function(t, e, n, r) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), n ? n._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
                    }, p._mod = function(t) {
                        for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                    }, p._kill = function(e) {
                        var n, r, i, o = e;
                        if (e.autoAlpha || e.alpha) {
                            o = {};
                            for (r in e) o[r] = e[r];
                            o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                        }
                        for (e.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== r && n.plugin._kill && (n.plugin._kill(e), r = n.plugin), n = n._next;
                        return t.prototype._kill.call(this, o)
                    };
                    var Kt = function t(e, n, r) {
                        var i, o, s, a;
                        if (e.slice)
                            for (o = e.length; --o > -1;) t(e[o], n, r);
                        else
                            for (i = e.childNodes, o = i.length; --o > -1;) s = i[o], a = s.type, s.style && (n.push(it(s)), r && r.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || t(s, n, r)
                    };
                    return s.cascadeTo = function(t, n, r) {
                        var i, o, s, a, u = e.to(t, n, r),
                            l = [u],
                            c = [],
                            p = [],
                            f = [],
                            h = e._internals.reservedProps;
                        for (t = u._targets || u.target, Kt(t, c, f), u.render(n, !0, !0), Kt(t, p), u.render(0, !0, !0), u._enabled(!0), i = f.length; --i > -1;)
                            if (o = ot(f[i], c[i], p[i]), o.firstMPT) {
                                o = o.difs;
                                for (s in r) h[s] && (o[s] = r[s]);
                                a = {};
                                for (s in o) a[s] = c[i][s];
                                l.push(e.fromTo(f[i], n, a, o))
                            } return l
                    }, t.activate([s]), s
                }, !0)
            }), u._gsDefine && u._gsQueue.pop()(),
            function(r) {
                var a = function() {
                    return (u.GreenSockGlobals || u).CSSPlugin
                };
                o = [n(7)], i = a, void 0 !== (s = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = s)
            }()
    }).call(e, n(8))
}, function(t, e, n) {
    (function(t, r) {
        var i, o = function(t) {
                return t.VERSION = "0.8.9", t
            }(o || {}),
            o = function(t) {
                "use strict";

                function e(t, e) {
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return void 0 !== e && null !== e && n === t
                }
                return t.trace = !1, t.debug = !1, t.cache = !0, t.placeholders = {
                    parent: "{{|PARENT|}}"
                }, t.indexOf = function(t, e) {
                    if (Array.prototype.hasOwnProperty("indexOf")) return t.indexOf(e);
                    if (void 0 === t || null === t) throw new TypeError;
                    var n = Object(t),
                        r = n.length >>> 0;
                    if (0 === r) return -1;
                    var i = 0;
                    if (arguments.length > 0 && (i = Number(arguments[1]), i !== i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= r) return -1;
                    for (var o = i >= 0 ? i : Math.max(r - Math.abs(i), 0); o < r; o++)
                        if (o in n && n[o] === e) return o;
                    return t == e ? 0 : -1
                }, t.forEach = function(t, e, n) {
                    if (Array.prototype.forEach) return t.forEach(e, n);
                    var r, i;
                    if (null == t) throw new TypeError(" this is null or not defined");
                    var o = Object(t),
                        s = o.length >>> 0;
                    if ("[object Function]" != {}.toString.call(e)) throw new TypeError(e + " is not a function");
                    for (n && (r = n), i = 0; i < s;) {
                        var a;
                        i in o && (a = o[i], e.call(r, a, i, o)), i++
                    }
                }, t.merge = function(e, n, r) {
                    return t.forEach(Object.keys(n), function(t) {
                        (!r || t in e) && (e[t] = n[t])
                    }), e
                }, t.Error = function(t) {
                    this.message = t, this.name = "TwigException", this.type = "TwigException"
                }, t.Error.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, t.log = {
                    trace: function() {
                        t.trace && console
                    },
                    debug: function() {
                        t.debug && console
                    }
                }, "undefined" != typeof console ? void 0 !== console.error ? t.log.error = function() {} : void 0 !== console.log && (t.log.error = function() {}) : t.log.error = function() {}, t.ChildContext = function(t) {
                    var e = function() {};
                    return e.prototype = t, new e
                }, t.token = {}, t.token.type = {
                    output: "output",
                    logic: "logic",
                    comment: "comment",
                    raw: "raw",
                    output_whitespace_pre: "output_whitespace_pre",
                    output_whitespace_post: "output_whitespace_post",
                    output_whitespace_both: "output_whitespace_both",
                    logic_whitespace_pre: "logic_whitespace_pre",
                    logic_whitespace_post: "logic_whitespace_post",
                    logic_whitespace_both: "logic_whitespace_both"
                }, t.token.definitions = [{
                    type: t.token.type.raw,
                    open: "{% raw %}",
                    close: "{% endraw %}"
                }, {
                    type: t.token.type.raw,
                    open: "{% verbatim %}",
                    close: "{% endverbatim %}"
                }, {
                    type: t.token.type.output_whitespace_pre,
                    open: "{{-",
                    close: "}}"
                }, {
                    type: t.token.type.output_whitespace_post,
                    open: "{{",
                    close: "-}}"
                }, {
                    type: t.token.type.output_whitespace_both,
                    open: "{{-",
                    close: "-}}"
                }, {
                    type: t.token.type.logic_whitespace_pre,
                    open: "{%-",
                    close: "%}"
                }, {
                    type: t.token.type.logic_whitespace_post,
                    open: "{%",
                    close: "-%}"
                }, {
                    type: t.token.type.logic_whitespace_both,
                    open: "{%-",
                    close: "-%}"
                }, {
                    type: t.token.type.output,
                    open: "{{",
                    close: "}}"
                }, {
                    type: t.token.type.logic,
                    open: "{%",
                    close: "%}"
                }, {
                    type: t.token.type.comment,
                    open: "{#",
                    close: "#}"
                }], t.token.strings = ['"', "'"], t.token.findStart = function(e) {
                    var n, r, i, o, s = {
                        position: null,
                        close_position: null,
                        def: null
                    };
                    for (n = 0; n < t.token.definitions.length; n++) r = t.token.definitions[n], i = e.indexOf(r.open), o = e.indexOf(r.close), t.log.trace("Twig.token.findStart: ", "Searching for ", r.open, " found at ", i), i >= 0 && r.open.length !== r.close.length && o < 0 || (i >= 0 && (null === s.position || i < s.position) ? (s.position = i, s.def = r, s.close_position = o) : i >= 0 && null !== s.position && i === s.position && (r.open.length > s.def.open.length ? (s.position = i, s.def = r, s.close_position = o) : r.open.length === s.def.open.length && (r.close.length, s.def.close.length, o >= 0 && o < s.close_position && (s.position = i, s.def = r, s.close_position = o))));
                    return delete s.close_position, s
                }, t.token.findEnd = function(e, n, r) {
                    for (var i, o, s = null, a = !1, u = 0, l = null, c = null, p = null, f = null, h = null, d = null; !a;) {
                        if (l = null, c = null, !((p = e.indexOf(n.close, u)) >= 0)) throw new t.Error("Unable to find closing bracket '" + n.close + "' opened near template position " + r);
                        if (s = p, a = !0, n.type === t.token.type.comment) break;
                        if (n.type === t.token.type.raw) break;
                        for (o = t.token.strings.length, i = 0; i < o; i += 1)(h = e.indexOf(t.token.strings[i], u)) > 0 && h < p && (null === l || h < l) && (l = h, c = t.token.strings[i]);
                        if (null !== l)
                            for (f = l + 1, s = null, a = !1;;) {
                                if ((d = e.indexOf(c, f)) < 0) throw "Unclosed string in template";
                                if ("\\" !== e.substr(d - 1, 1)) {
                                    u = d + 1;
                                    break
                                }
                                f = d + 1
                            }
                    }
                    return s
                }, t.tokenize = function(e) {
                    for (var n = [], r = 0, i = null, o = null; e.length > 0;)
                        if (i = t.token.findStart(e), t.log.trace("Twig.tokenize: ", "Found token: ", i), null !== i.position) {
                            if (i.position > 0 && n.push({
                                    type: t.token.type.raw,
                                    value: e.substring(0, i.position)
                                }), e = e.substr(i.position + i.def.open.length), r += i.position + i.def.open.length, o = t.token.findEnd(e, i.def, r), t.log.trace("Twig.tokenize: ", "Token ends at ", o), n.push({
                                    type: i.def.type,
                                    value: e.substring(0, o).trim()
                                }), "\n" === e.substr(o + i.def.close.length, 1)) switch (i.def.type) {
                                case "logic_whitespace_pre":
                                case "logic_whitespace_post":
                                case "logic_whitespace_both":
                                case "logic":
                                    o += 1
                            }
                            e = e.substr(o + i.def.close.length), r += o + i.def.close.length
                        } else n.push({
                            type: t.token.type.raw,
                            value: e
                        }), e = "";
                    return n
                }, t.compile = function(e) {
                    try {
                        for (var n = [], r = [], i = [], o = null, s = null, a = null, u = null, l = null, c = null, p = null, f = null, h = null, d = null, y = null, v = null, g = function(e) {
                                t.expression.compile.apply(this, [e]), r.length > 0 ? i.push(e) : n.push(e)
                            }, m = function(e) {
                                if (s = t.logic.compile.apply(this, [e]), d = s.type, y = t.logic.handler[d].open, v = t.logic.handler[d].next, t.log.trace("Twig.compile: ", "Compiled logic token to ", s, " next is: ", v, " open is : ", y), void 0 !== y && !y) {
                                    if (u = r.pop(), p = t.logic.handler[u.type], t.indexOf(p.next, d) < 0) throw new Error(d + " not expected after a " + u.type);
                                    u.output = u.output || [], u.output = u.output.concat(i), i = [], h = {
                                        type: t.token.type.logic,
                                        token: u
                                    }, r.length > 0 ? i.push(h) : n.push(h)
                                }
                                void 0 !== v && v.length > 0 ? (t.log.trace("Twig.compile: ", "Pushing ", s, " to logic stack."), r.length > 0 && (u = r.pop(), u.output = u.output || [], u.output = u.output.concat(i), r.push(u), i = []), r.push(s)) : void 0 !== y && y && (h = {
                                    type: t.token.type.logic,
                                    token: s
                                }, r.length > 0 ? i.push(h) : n.push(h))
                            }; e.length > 0;) {
                            switch (o = e.shift(), l = n[n.length - 1], c = i[i.length - 1], f = e[0], t.log.trace("Compiling token ", o), o.type) {
                                case t.token.type.raw:
                                    r.length > 0 ? i.push(o) : n.push(o);
                                    break;
                                case t.token.type.logic:
                                    m.call(this, o);
                                    break;
                                case t.token.type.comment:
                                    break;
                                case t.token.type.output:
                                    g.call(this, o);
                                    break;
                                case t.token.type.logic_whitespace_pre:
                                case t.token.type.logic_whitespace_post:
                                case t.token.type.logic_whitespace_both:
                                case t.token.type.output_whitespace_pre:
                                case t.token.type.output_whitespace_post:
                                case t.token.type.output_whitespace_both:
                                    switch (o.type !== t.token.type.output_whitespace_post && o.type !== t.token.type.logic_whitespace_post && (l && l.type === t.token.type.raw && (n.pop(), null === l.value.match(/^\s*$/) && (l.value = l.value.trim(), n.push(l))), c && c.type === t.token.type.raw && (i.pop(), null === c.value.match(/^\s*$/) && (c.value = c.value.trim(), i.push(c)))), o.type) {
                                        case t.token.type.output_whitespace_pre:
                                        case t.token.type.output_whitespace_post:
                                        case t.token.type.output_whitespace_both:
                                            g.call(this, o);
                                            break;
                                        case t.token.type.logic_whitespace_pre:
                                        case t.token.type.logic_whitespace_post:
                                        case t.token.type.logic_whitespace_both:
                                            m.call(this, o)
                                    }
                                    o.type !== t.token.type.output_whitespace_pre && o.type !== t.token.type.logic_whitespace_pre && f && f.type === t.token.type.raw && (e.shift(), null === f.value.match(/^\s*$/) && (f.value = f.value.trim(), e.unshift(f)))
                            }
                            t.log.trace("Twig.compile: ", " Output: ", n, " Logic Stack: ", r, " Pending Output: ", i)
                        }
                        if (r.length > 0) throw a = r.pop(), new Error("Unable to find an end tag for " + a.type + ", expecting one of " + a.next);
                        return n
                    } catch (e) {
                        if (t.log.error("Error compiling twig template " + this.id + ": "), e.stack ? t.log.error(e.stack) : t.log.error(e.toString()), this.options.rethrow) throw e
                    }
                }, t.parse = function(e, n) {
                    try {
                        var r = [],
                            i = !0,
                            o = this;
                        return t.forEach(e, function(e) {
                            switch (t.log.debug("Twig.parse: ", "Parsing token: ", e), e.type) {
                                case t.token.type.raw:
                                    r.push(t.filters.raw(e.value));
                                    break;
                                case t.token.type.logic:
                                    var s = e.token,
                                        a = t.logic.parse.apply(o, [s, n, i]);
                                    void 0 !== a.chain && (i = a.chain), void 0 !== a.context && (n = a.context), void 0 !== a.output && r.push(a.output);
                                    break;
                                case t.token.type.comment:
                                    break;
                                case t.token.type.output_whitespace_pre:
                                case t.token.type.output_whitespace_post:
                                case t.token.type.output_whitespace_both:
                                case t.token.type.output:
                                    t.log.debug("Twig.parse: ", "Output token: ", e.stack), r.push(t.expression.parse.apply(o, [e.stack, n]))
                            }
                        }), t.output.apply(this, [r])
                    } catch (e) {
                        if (t.log.error("Error parsing twig template " + this.id + ": "), e.stack ? t.log.error(e.stack) : t.log.error(e.toString()), this.options.rethrow) throw e;
                        if (t.debug) return e.toString()
                    }
                }, t.prepare = function(e) {
                    var n, r;
                    return t.log.debug("Twig.prepare: ", "Tokenizing ", e), r = t.tokenize.apply(this, [e]), t.log.debug("Twig.prepare: ", "Compiling ", r), n = t.compile.apply(this, [r]), t.log.debug("Twig.prepare: ", "Compiled ", n), n
                }, t.output = function(e) {
                    if (!this.options.autoescape) return e.join("");
                    var n = "html";
                    "string" == typeof this.options.autoescape && (n = this.options.autoescape);
                    var r = [];
                    return t.forEach(e, function(e) {
                        e && !0 !== e.twig_markup && e.twig_markup != n && (e = t.filters.escape(e, [n])), r.push(e)
                    }), t.Markup(r.join(""))
                }, t.Templates = {
                    loaders: {},
                    parsers: {},
                    registry: {}
                }, t.validateId = function(e) {
                    if ("prototype" === e) throw new t.Error(e + " is not a valid twig identifier");
                    if (t.cache && t.Templates.registry.hasOwnProperty(e)) throw new t.Error("There is already a template with the ID " + e);
                    return !0
                }, t.Templates.registerLoader = function(e, n, r) {
                    if ("function" != typeof n) throw new t.Error("Unable to add loader for " + e + ": Invalid function reference given.");
                    r && (n = n.bind(r)), this.loaders[e] = n
                }, t.Templates.unRegisterLoader = function(t) {
                    this.isRegisteredLoader(t) && delete this.loaders[t]
                }, t.Templates.isRegisteredLoader = function(t) {
                    return this.loaders.hasOwnProperty(t)
                }, t.Templates.registerParser = function(e, n, r) {
                    if ("function" != typeof n) throw new t.Error("Unable to add parser for " + e + ": Invalid function regerence given.");
                    r && (n = n.bind(r)), this.parsers[e] = n
                }, t.Templates.unRegisterParser = function(t) {
                    this.isRegisteredParser(t) && delete this.parsers[t]
                }, t.Templates.isRegisteredParser = function(t) {
                    return this.parsers.hasOwnProperty(t)
                }, t.Templates.save = function(e) {
                    if (void 0 === e.id) throw new t.Error("Unable to save template with no id");
                    t.Templates.registry[e.id] = e
                }, t.Templates.load = function(e) {
                    return t.Templates.registry.hasOwnProperty(e) ? t.Templates.registry[e] : null
                }, t.Templates.loadRemote = function(e, n, r, i) {
                    var o;
                    return void 0 === n.async && (n.async = !0), void 0 === n.id && (n.id = e), t.cache && t.Templates.registry.hasOwnProperty(n.id) ? ("function" == typeof r && r(t.Templates.registry[n.id]), t.Templates.registry[n.id]) : (n.parser = n.parser || "twig", o = this.loaders[n.method] || this.loaders.fs, o.apply(this, arguments))
                }, t.Template = function(n) {
                    var r = n.data,
                        i = n.id,
                        o = n.blocks,
                        s = n.macros || {},
                        a = n.base,
                        u = n.path,
                        l = n.url,
                        c = n.name,
                        p = n.method,
                        f = n.options;
                    this.id = i, this.method = p, this.base = a, this.path = u, this.url = l, this.name = c, this.macros = s, this.options = f, this.reset(o), e("String", r) ? this.tokens = t.prepare.apply(this, [r]) : this.tokens = r, void 0 !== i && t.Templates.save(this)
                }, t.Template.prototype.reset = function(e) {
                    t.log.debug("Twig.Template.reset", "Reseting template " + this.id), this.blocks = {}, this.importedBlocks = [], this.originalBlockTokens = {}, this.child = {
                        blocks: e || {}
                    }, this.extend = null
                }, t.Template.prototype.render = function(e, n) {
                    n = n || {};
                    var r, i;
                    if (this.context = e || {}, this.reset(), n.blocks && (this.blocks = n.blocks), n.macros && (this.macros = n.macros), r = t.parse.apply(this, [this.tokens, this.context]), this.extend) {
                        var o;
                        return this.options.allowInlineIncludes && (o = t.Templates.load(this.extend)) && (o.options = this.options), o || (i = t.path.parsePath(this, this.extend), o = t.Templates.loadRemote(i, {
                            method: this.getLoaderMethod(),
                            base: this.base,
                            async: !1,
                            id: i,
                            options: this.options
                        })), this.parent = o, this.parent.render(this.context, {
                            blocks: this.blocks
                        })
                    }
                    return "blocks" == n.output ? this.blocks : "macros" == n.output ? this.macros : r
                }, t.Template.prototype.importFile = function(e) {
                    var n, r;
                    if (!this.url && this.options.allowInlineIncludes) {
                        if (e = this.path ? this.path + "/" + e : e, !(r = t.Templates.load(e)) && !(r = t.Templates.loadRemote(n, {
                                id: e,
                                method: this.getLoaderMethod(),
                                async: !1,
                                options: this.options
                            }))) throw new t.Error("Unable to find the template " + e);
                        return r.options = this.options, r
                    }
                    return n = t.path.parsePath(this, e), r = t.Templates.loadRemote(n, {
                        method: this.getLoaderMethod(),
                        base: this.base,
                        async: !1,
                        options: this.options,
                        id: n
                    })
                }, t.Template.prototype.importBlocks = function(e, n) {
                    var r = this.importFile(e),
                        i = this.context,
                        o = this;
                    n = n || !1, r.render(i), t.forEach(Object.keys(r.blocks), function(t) {
                        (n || void 0 === o.blocks[t]) && (o.blocks[t] = r.blocks[t], o.importedBlocks.push(t))
                    })
                }, t.Template.prototype.importMacros = function(e) {
                    var n = t.path.parsePath(this, e);
                    return t.Templates.loadRemote(n, {
                        method: this.getLoaderMethod(),
                        async: !1,
                        id: n
                    })
                }, t.Template.prototype.getLoaderMethod = function() {
                    return this.path ? "fs" : this.url ? "ajax" : this.method || "fs"
                }, t.Template.prototype.compile = function(e) {
                    return t.compiler.compile(this, e)
                }, t.Markup = function(t, e) {
                    return void 0 === e && (e = !0), "string" == typeof t && t.length > 0 && (t = new String(t), t.twig_markup = e), t
                }, t
            }(o || {});
        ! function(t) {
            "use strict";
            t.Templates.registerLoader("ajax", function(e, n, r, i) {
                var o, s, a = n.precompiled,
                    u = this.parsers[n.parser] || this.parser.twig;
                if ("undefined" == typeof XMLHttpRequest) throw new t.Error('Unsupported platform: Unable to do ajax requests because there is no "XMLHTTPRequest" implementation');
                return s = new XMLHttpRequest, s.onreadystatechange = function() {
                    var l = null;
                    4 === s.readyState && (200 === s.status || window.cordova && 0 == s.status ? (t.log.debug("Got template ", s.responseText), l = !0 === a ? JSON.parse(s.responseText) : s.responseText, n.url = e, n.data = l, o = u.call(this, n), "function" == typeof r && r(o)) : "function" == typeof i && i(s))
                }, s.open("GET", e, !!n.async), s.send(), !!n.async || o
            })
        }(o),
        function(t) {
            "use strict";
            var e, r;
            try {
                e = n(259), r = n(98)
            } catch (t) {}
            t.Templates.registerLoader("fs", function(n, i, o, s) {
                var a, u = null,
                    l = i.precompiled,
                    c = this.parsers[i.parser] || this.parser.twig;
                if (!e || !r) throw new t.Error('Unsupported platform: Unable to load from file because there is no "fs" or "path" implementation');
                var p = function(t, e) {
                    if (t) return void("function" == typeof s && s(t));
                    !0 === l && (e = JSON.parse(e)), i.data = e, i.path = i.path || n, a = c.call(this, i), "function" == typeof o && o(a)
                };
                if (i.path = i.path || n, i.async) return e.stat(i.path, function(r, o) {
                    if (r || !o.isFile()) throw new t.Error("Unable to find template file " + n);
                    e.readFile(i.path, "utf8", p)
                }), !0;
                if (!e.statSync(i.path).isFile()) throw new t.Error("Unable to find template file " + n);
                return u = e.readFileSync(i.path, "utf8"), p(void 0, u), a
            })
        }(o),
        function(t) {
            "use strict";
            t.Templates.registerParser("source", function(t) {
                return t.data || ""
            })
        }(o),
        function(t) {
            "use strict";
            t.Templates.registerParser("twig", function(e) {
                return new t.Template(e)
            })
        }(o),
        function() {
            "use strict";
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            }), Object.keys || (Object.keys = function(t) {
                if (t !== Object(t)) throw new TypeError("Object.keys called on non-object");
                var e, n = [];
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                return n
            })
        }();
        var o = function(t) {
                t.lib = {};
                var e = function() {
                        function t() {
                            var e = arguments[0],
                                n = t.cache;
                            return n[e] && n.hasOwnProperty(e) || (n[e] = t.parse(e)), t.format.call(null, n[e], arguments)
                        }

                        function e(t) {
                            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
                        }

                        function n(t, e) {
                            return Array(e + 1).join(t)
                        }
                        var r = {
                            not_string: /[^s]/,
                            number: /[diefg]/,
                            json: /[j]/,
                            not_json: /[^j]/,
                            text: /^[^\x25]+/,
                            modulo: /^\x25{2}/,
                            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
                            key: /^([a-z_][a-z_\d]*)/i,
                            key_access: /^\.([a-z_][a-z_\d]*)/i,
                            index_access: /^\[(\d+)\]/,
                            sign: /^[\+\-]/
                        };
                        return t.format = function(i, o) {
                            var s, a, u, l, c, p, f, h = 1,
                                d = i.length,
                                y = "",
                                v = [],
                                g = !0,
                                m = "";
                            for (a = 0; a < d; a++)
                                if ("string" === (y = e(i[a]))) v[v.length] = i[a];
                                else if ("array" === y) {
                                if (l = i[a], l[2])
                                    for (s = o[h], u = 0; u < l[2].length; u++) {
                                        if (!s.hasOwnProperty(l[2][u])) throw new Error(t("[sprintf] property '%s' does not exist", l[2][u]));
                                        s = s[l[2][u]]
                                    } else s = l[1] ? o[l[1]] : o[h++];
                                if ("function" == e(s) && (s = s()), r.not_string.test(l[8]) && r.not_json.test(l[8]) && "number" != e(s) && isNaN(s)) throw new TypeError(t("[sprintf] expecting number but found %s", e(s)));
                                switch (r.number.test(l[8]) && (g = s >= 0), l[8]) {
                                    case "b":
                                        s = s.toString(2);
                                        break;
                                    case "c":
                                        s = String.fromCharCode(s);
                                        break;
                                    case "d":
                                    case "i":
                                        s = parseInt(s, 10);
                                        break;
                                    case "j":
                                        s = JSON.stringify(s, null, l[6] ? parseInt(l[6]) : 0);
                                        break;
                                    case "e":
                                        s = l[7] ? s.toExponential(l[7]) : s.toExponential();
                                        break;
                                    case "f":
                                        s = l[7] ? parseFloat(s).toFixed(l[7]) : parseFloat(s);
                                        break;
                                    case "g":
                                        s = l[7] ? parseFloat(s).toPrecision(l[7]) : parseFloat(s);
                                        break;
                                    case "o":
                                        s = s.toString(8);
                                        break;
                                    case "s":
                                        s = (s = String(s)) && l[7] ? s.substring(0, l[7]) : s;
                                        break;
                                    case "u":
                                        s >>>= 0;
                                        break;
                                    case "x":
                                        s = s.toString(16);
                                        break;
                                    case "X":
                                        s = s.toString(16).toUpperCase()
                                }
                                r.json.test(l[8]) ? v[v.length] = s : (!r.number.test(l[8]) || g && !l[3] ? m = "" : (m = g ? "+" : "-", s = s.toString().replace(r.sign, "")), p = l[4] ? "0" === l[4] ? "0" : l[4].charAt(1) : " ", f = l[6] - (m + s).length, c = l[6] && f > 0 ? n(p, f) : "", v[v.length] = l[5] ? m + s + c : "0" === p ? m + c + s : c + m + s)
                            }
                            return v.join("")
                        }, t.cache = {}, t.parse = function(t) {
                            for (var e = t, n = [], i = [], o = 0; e;) {
                                if (null !== (n = r.text.exec(e))) i[i.length] = n[0];
                                else if (null !== (n = r.modulo.exec(e))) i[i.length] = "%";
                                else {
                                    if (null === (n = r.placeholder.exec(e))) throw new SyntaxError("[sprintf] unexpected placeholder");
                                    if (n[2]) {
                                        o |= 1;
                                        var s = [],
                                            a = n[2],
                                            u = [];
                                        if (null === (u = r.key.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                        for (s[s.length] = u[1];
                                            "" !== (a = a.substring(u[0].length));)
                                            if (null !== (u = r.key_access.exec(a))) s[s.length] = u[1];
                                            else {
                                                if (null === (u = r.index_access.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                                s[s.length] = u[1]
                                            } n[2] = s
                                    } else o |= 2;
                                    if (3 === o) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                    i[i.length] = n
                                }
                                e = e.substring(n[0].length)
                            }
                            return i
                        }, {
                            sprintf: t,
                            vsprintf: function(e, n, r) {
                                return r = (n || []).slice(0), r.splice(0, 0, e), t.apply(null, r)
                            }
                        }
                    }(),
                    n = e.sprintf,
                    r = e.vsprintf;
                return t.lib.sprintf = n, t.lib.vsprintf = r,
                    function() {
                        function e(t) {
                            return (t = Math.abs(t) % 100) % 10 == 1 && 11 != t ? "st" : t % 10 == 2 && 12 != t ? "nd" : t % 10 == 3 && 13 != t ? "rd" : "th"
                        }

                        function n(t) {
                            var e = new Date(t.getFullYear() + 1, 0, 4);
                            return (e - t) / 864e5 < 7 && (t.getDay() + 6) % 7 < (e.getDay() + 6) % 7 ? e.getFullYear() : t.getMonth() > 0 || t.getDate() >= 4 ? t.getFullYear() : t.getFullYear() - ((t.getDay() + 6) % 7 - t.getDate() > 2 ? 1 : 0)
                        }

                        function r(t) {
                            var e = new Date(n(t), 0, 4);
                            return e.setDate(e.getDate() - (e.getDay() + 6) % 7), parseInt((t - e) / 6048e5) + 1
                        }
                        var i = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                            o = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                            s = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                            a = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
                        t.lib.formatDate = function(t, u) {
                            if ("string" != typeof u || /^\s*$/.test(u)) return t + "";
                            var l = new Date(t.getFullYear(), 0, 1),
                                c = t;
                            return u.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g, function(t) {
                                switch (t) {
                                    case "d":
                                        return ("0" + c.getDate()).replace(/^.+(..)$/, "$1");
                                    case "D":
                                        return i[c.getDay()];
                                    case "j":
                                        return c.getDate();
                                    case "l":
                                        return o[c.getDay()];
                                    case "N":
                                        return (c.getDay() + 6) % 7 + 1;
                                    case "S":
                                        return e(c.getDate());
                                    case "w":
                                        return c.getDay();
                                    case "z":
                                        return Math.ceil((l - c) / 864e5);
                                    case "W":
                                        return ("0" + r(c)).replace(/^.(..)$/, "$1");
                                    case "F":
                                        return a[c.getMonth()];
                                    case "m":
                                        return ("0" + (c.getMonth() + 1)).replace(/^.+(..)$/, "$1");
                                    case "M":
                                        return s[c.getMonth()];
                                    case "n":
                                        return c.getMonth() + 1;
                                    case "t":
                                        return new Date(c.getFullYear(), c.getMonth() + 1, -1).getDate();
                                    case "L":
                                        return 29 == new Date(c.getFullYear(), 1, 29).getDate() ? 1 : 0;
                                    case "o":
                                        return n(c);
                                    case "Y":
                                        return c.getFullYear();
                                    case "y":
                                        return (c.getFullYear() + "").replace(/^.+(..)$/, "$1");
                                    case "a":
                                        return c.getHours() < 12 ? "am" : "pm";
                                    case "A":
                                        return c.getHours() < 12 ? "AM" : "PM";
                                    case "B":
                                        return Math.floor(1e3 * ((c.getUTCHours() + 1) % 24 + c.getUTCMinutes() / 60 + c.getUTCSeconds() / 3600) / 24);
                                    case "g":
                                        return c.getHours() % 12 != 0 ? c.getHours() % 12 : 12;
                                    case "G":
                                        return c.getHours();
                                    case "h":
                                        return ("0" + (c.getHours() % 12 != 0 ? c.getHours() % 12 : 12)).replace(/^.+(..)$/, "$1");
                                    case "H":
                                        return ("0" + c.getHours()).replace(/^.+(..)$/, "$1");
                                    case "i":
                                        return ("0" + c.getMinutes()).replace(/^.+(..)$/, "$1");
                                    case "s":
                                        return ("0" + c.getSeconds()).replace(/^.+(..)$/, "$1");
                                    case "u":
                                        return c.getMilliseconds();
                                    case "U":
                                        return c.getTime() / 1e3
                                }
                            })
                        }
                    }(), t.lib.strip_tags = function(t, e) {
                        e = (((e || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
                        var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                            r = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
                        return t.replace(r, "").replace(n, function(t, n) {
                            return e.indexOf("<" + n.toLowerCase() + ">") > -1 ? t : ""
                        })
                    }, t.lib.parseISO8601Date = function(t) {
                        var e = /(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/,
                            n = [];
                        if (!(n = t.match(e))) throw "Couldn't parse ISO 8601 date string '" + t + "'";
                        var r = [1, 2, 3, 4, 5, 6, 10, 11];
                        for (var i in r) n[r[i]] = parseInt(n[r[i]], 10);
                        n[7] = parseFloat(n[7]);
                        var o = Date.UTC(n[1], n[2] - 1, n[3], n[4], n[5], n[6]);
                        if (n[7] > 0 && (o += Math.round(1e3 * n[7])), "Z" != n[8] && n[10]) {
                            var s = 60 * n[10] * 60 * 1e3;
                            n[11] && (s += 60 * n[11] * 1e3), "-" == n[9] ? o -= s : o += s
                        }
                        return new Date(o)
                    }, t.lib.strtotime = function(t, e) {
                        function n(t, e, n) {
                            var r, i = u[e];
                            void 0 !== i && (r = i - a.getDay(), 0 === r ? r = 7 * n : r > 0 && "last" === t ? r -= 7 : r < 0 && "next" === t && (r += 7), a.setDate(a.getDate() + r))
                        }
                        var r, i, o, s, a, u, l, c, p, f, h;
                        if (!t) return !1;
                        if (t = t.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase(), (i = t.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/)) && i[2] === i[4])
                            if (i[1] > 1901) switch (i[2]) {
                                case "-":
                                    return !(i[3] > 12 || i[5] > 31) && new Date(i[1], parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3;
                                case ".":
                                    return !1;
                                case "/":
                                    return !(i[3] > 12 || i[5] > 31) && new Date(i[1], parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3
                            } else if (i[5] > 1901) switch (i[2]) {
                                case "-":
                                case ".":
                                    return !(i[3] > 12 || i[1] > 31) && new Date(i[5], parseInt(i[3], 10) - 1, i[1], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3;
                                case "/":
                                    return !(i[1] > 12 || i[3] > 31) && new Date(i[5], parseInt(i[1], 10) - 1, i[3], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3
                            } else switch (i[2]) {
                                case "-":
                                    return !(i[3] > 12 || i[5] > 31 || i[1] < 70 && i[1] > 38) && (s = i[1] >= 0 && i[1] <= 38 ? +i[1] + 2e3 : i[1], new Date(s, parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3);
                                case ".":
                                    return i[5] >= 70 ? !(i[3] > 12 || i[1] > 31) && new Date(i[5], parseInt(i[3], 10) - 1, i[1], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3 : i[5] < 60 && !i[6] && (!(i[1] > 23 || i[3] > 59) && (o = new Date, new Date(o.getFullYear(), o.getMonth(), o.getDate(), i[1] || 0, i[3] || 0, i[5] || 0, i[9] || 0) / 1e3));
                                case "/":
                                    return !(i[1] > 12 || i[3] > 31 || i[5] < 70 && i[5] > 38) && (s = i[5] >= 0 && i[5] <= 38 ? +i[5] + 2e3 : i[5], new Date(s, parseInt(i[1], 10) - 1, i[3], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3);
                                case ":":
                                    return !(i[1] > 23 || i[3] > 59 || i[5] > 59) && (o = new Date, new Date(o.getFullYear(), o.getMonth(), o.getDate(), i[1] || 0, i[3] || 0, i[5] || 0) / 1e3)
                            }
                        if ("now" === t) return null === e || isNaN(e) ? (new Date).getTime() / 1e3 | 0 : 0 | e;
                        if (!isNaN(r = Date.parse(t))) return r / 1e3 | 0;
                        if ((i = t.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/)) && ("z" == i[4] ? i[4] = "Z" : i[4].match(/^([\+-][0-9]{2})$/) && (i[4] = i[4] + ":00"), !isNaN(r = Date.parse(i[1] + "T" + i[2] + i[4])))) return r / 1e3 | 0;
                        if (a = e ? new Date(1e3 * e) : new Date, u = {
                                sun: 0,
                                mon: 1,
                                tue: 2,
                                wed: 3,
                                thu: 4,
                                fri: 5,
                                sat: 6
                            }, l = {
                                yea: "FullYear",
                                mon: "Month",
                                day: "Date",
                                hou: "Hours",
                                min: "Minutes",
                                sec: "Seconds"
                            }, p = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", f = "([+-]?\\d+\\s" + p + "|(last|next)\\s" + p + ")(\\sago)?", !(i = t.match(new RegExp(f, "gi")))) return !1;
                        for (h = 0, c = i.length; h < c; h++)
                            if (! function(t) {
                                    var e = t.split(" "),
                                        r = e[0],
                                        i = e[1].substring(0, 3),
                                        o = /\d+/.test(r),
                                        s = "ago" === e[2],
                                        u = ("last" === r ? -1 : 1) * (s ? -1 : 1);
                                    if (o && (u *= parseInt(r, 10)), l.hasOwnProperty(i) && !e[1].match(/^mon(day|\.)?$/i)) return a["set" + l[i]](a["get" + l[i]]() + u);
                                    if ("wee" === i) return a.setDate(a.getDate() + 7 * u);
                                    if ("next" === r || "last" === r) n(r, i, u);
                                    else if (!o) return !1;
                                    return !0
                                }(i[h])) return !1;
                        return a.getTime() / 1e3
                    }, t.lib.is = function(t, e) {
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return void 0 !== e && null !== e && n === t
                    }, t.lib.copy = function(t) {
                        var e, n = {};
                        for (e in t) n[e] = t[e];
                        return n
                    }, t.lib.replaceAll = function(t, e, n) {
                        return t.split(e).join(n)
                    }, t.lib.chunkArray = function(e, n) {
                        var r = [],
                            i = 0,
                            o = e.length;
                        if (n < 1 || !t.lib.is("Array", e)) return [];
                        for (; i < o;) r.push(e.slice(i, i += n));
                        return r
                    }, t.lib.round = function(t, e, n) {
                        var r, i, o, s;
                        if (e |= 0, r = Math.pow(10, e), t *= r, s = t > 0 | -(t < 0), o = t % 1 == .5 * s, i = Math.floor(t), o) switch (n) {
                            case "PHP_ROUND_HALF_DOWN":
                                t = i + (s < 0);
                                break;
                            case "PHP_ROUND_HALF_EVEN":
                                t = i + i % 2 * s;
                                break;
                            case "PHP_ROUND_HALF_ODD":
                                t = i + !(i % 2);
                                break;
                            default:
                                t = i + (s > 0)
                        }
                        return (o ? t : Math.round(t)) / r
                    }, t.lib.max = function() {
                        var t, e, n = 0,
                            r = 0,
                            i = arguments,
                            o = i.length,
                            s = function(t) {
                                if ("[object Array]" === Object.prototype.toString.call(t)) return t;
                                var e = [];
                                for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                                return e
                            },
                            a = function(t, e) {
                                var n = 0,
                                    r = 0,
                                    i = 0,
                                    o = 0,
                                    u = 0;
                                if (t === e) return 0;
                                if ("object" == typeof t) {
                                    if ("object" == typeof e) {
                                        if (t = s(t), e = s(e), u = t.length, (o = e.length) > u) return 1;
                                        if (o < u) return -1;
                                        for (n = 0, r = u; n < r; ++n) {
                                            if (1 == (i = a(t[n], e[n]))) return 1;
                                            if (-1 == i) return -1
                                        }
                                        return 0
                                    }
                                    return -1
                                }
                                return "object" == typeof e ? 1 : isNaN(e) && !isNaN(t) ? 0 == t ? 0 : t < 0 ? 1 : -1 : isNaN(t) && !isNaN(e) ? 0 == e ? 0 : e > 0 ? 1 : -1 : e == t ? 0 : e > t ? 1 : -1
                            };
                        if (0 === o) throw new Error("At least one value should be passed to max()");
                        if (1 === o) {
                            if ("object" != typeof i[0]) throw new Error("Wrong parameter count for max()");
                            if (t = s(i[0]), 0 === t.length) throw new Error("Array must contain at least one element for max()")
                        } else t = i;
                        for (e = t[0], n = 1, r = t.length; n < r; ++n) 1 == a(e, t[n]) && (e = t[n]);
                        return e
                    }, t.lib.min = function() {
                        var t, e, n = 0,
                            r = 0,
                            i = arguments,
                            o = i.length,
                            s = function(t) {
                                if ("[object Array]" === Object.prototype.toString.call(t)) return t;
                                var e = [];
                                for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                                return e
                            },
                            a = function(t, e) {
                                var n = 0,
                                    r = 0,
                                    i = 0,
                                    o = 0,
                                    u = 0;
                                if (t === e) return 0;
                                if ("object" == typeof t) {
                                    if ("object" == typeof e) {
                                        if (t = s(t), e = s(e), u = t.length, (o = e.length) > u) return 1;
                                        if (o < u) return -1;
                                        for (n = 0, r = u; n < r; ++n) {
                                            if (1 == (i = a(t[n], e[n]))) return 1;
                                            if (-1 == i) return -1
                                        }
                                        return 0
                                    }
                                    return -1
                                }
                                return "object" == typeof e ? 1 : isNaN(e) && !isNaN(t) ? 0 == t ? 0 : t < 0 ? 1 : -1 : isNaN(t) && !isNaN(e) ? 0 == e ? 0 : e > 0 ? 1 : -1 : e == t ? 0 : e > t ? 1 : -1
                            };
                        if (0 === o) throw new Error("At least one value should be passed to min()");
                        if (1 === o) {
                            if ("object" != typeof i[0]) throw new Error("Wrong parameter count for min()");
                            if (t = s(i[0]), 0 === t.length) throw new Error("Array must contain at least one element for min()")
                        } else t = i;
                        for (e = t[0], n = 1, r = t.length; n < r; ++n) - 1 == a(e, t[n]) && (e = t[n]);
                        return e
                    }, t
            }(o || {}),
            o = function(t) {
                "use strict";
                for (t.logic = {}, t.logic.type = {
                        if_: "Twig.logic.type.if",
                        endif: "Twig.logic.type.endif",
                        for_: "Twig.logic.type.for",
                        endfor: "Twig.logic.type.endfor",
                        else_: "Twig.logic.type.else",
                        elseif: "Twig.logic.type.elseif",
                        set: "Twig.logic.type.set",
                        setcapture: "Twig.logic.type.setcapture",
                        endset: "Twig.logic.type.endset",
                        filter: "Twig.logic.type.filter",
                        endfilter: "Twig.logic.type.endfilter",
                        shortblock: "Twig.logic.type.shortblock",
                        block: "Twig.logic.type.block",
                        endblock: "Twig.logic.type.endblock",
                        extends_: "Twig.logic.type.extends",
                        use: "Twig.logic.type.use",
                        include: "Twig.logic.type.include",
                        spaceless: "Twig.logic.type.spaceless",
                        endspaceless: "Twig.logic.type.endspaceless",
                        macro: "Twig.logic.type.macro",
                        endmacro: "Twig.logic.type.endmacro",
                        import_: "Twig.logic.type.import",
                        from: "Twig.logic.type.from",
                        embed: "Twig.logic.type.embed",
                        endembed: "Twig.logic.type.endembed"
                    }, t.logic.definitions = [{
                        type: t.logic.type.if_,
                        regex: /^if\s+([\s\S]+)$/,
                        next: [t.logic.type.else_, t.logic.type.elseif, t.logic.type.endif],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1];
                            return e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i = "",
                                o = t.expression.parse.apply(this, [e.stack, n]);
                            return r = !0, o && (r = !1, i = t.parse.apply(this, [e.output, n])), {
                                chain: r,
                                output: i
                            }
                        }
                    }, {
                        type: t.logic.type.elseif,
                        regex: /^elseif\s+([^\s].*)$/,
                        next: [t.logic.type.else_, t.logic.type.elseif, t.logic.type.endif],
                        open: !1,
                        compile: function(e) {
                            var n = e.match[1];
                            return e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i = "";
                            return r && !0 === t.expression.parse.apply(this, [e.stack, n]) && (r = !1, i = t.parse.apply(this, [e.output, n])), {
                                chain: r,
                                output: i
                            }
                        }
                    }, {
                        type: t.logic.type.else_,
                        regex: /^else$/,
                        next: [t.logic.type.endif, t.logic.type.endfor],
                        open: !1,
                        parse: function(e, n, r) {
                            var i = "";
                            return r && (i = t.parse.apply(this, [e.output, n])), {
                                chain: r,
                                output: i
                            }
                        }
                    }, {
                        type: t.logic.type.endif,
                        regex: /^endif$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.for_,
                        regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
                        next: [t.logic.type.else_, t.logic.type.endfor],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1],
                                r = e.match[2],
                                i = e.match[3],
                                o = null;
                            if (e.key_var = null, e.value_var = null, n.indexOf(",") >= 0) {
                                if (o = n.split(","), 2 !== o.length) throw new t.Error("Invalid expression in for loop: " + n);
                                e.key_var = o[0].trim(), e.value_var = o[1].trim()
                            } else e.value_var = n;
                            return e.expression = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: r
                            }]).stack, i && (e.conditional = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: i
                            }]).stack), delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i, o, s = t.expression.parse.apply(this, [e.expression, n]),
                                a = [],
                                u = 0,
                                l = this,
                                c = e.conditional,
                                p = function(t, e) {
                                    var r = void 0 !== c;
                                    return {
                                        index: t + 1,
                                        index0: t,
                                        revindex: r ? void 0 : e - t,
                                        revindex0: r ? void 0 : e - t - 1,
                                        first: 0 === t,
                                        last: r ? void 0 : t === e - 1,
                                        length: r ? void 0 : e,
                                        parent: n
                                    }
                                },
                                f = function(r, o) {
                                    var s = t.ChildContext(n);
                                    s[e.value_var] = o, e.key_var && (s[e.key_var] = r), s.loop = p(u, i), (void 0 === c || t.expression.parse.apply(l, [c, s])) && (a.push(t.parse.apply(l, [e.output, s])), u += 1), delete s.loop, delete s[e.value_var], delete s[e.key_var], t.merge(n, s, !0)
                                };
                            return t.lib.is("Array", s) ? (i = s.length, t.forEach(s, function(t) {
                                f(u, t)
                            })) : t.lib.is("Object", s) && (o = void 0 !== s._keys ? s._keys : Object.keys(s), i = o.length, t.forEach(o, function(t) {
                                "_keys" !== t && f(t, s[t])
                            })), r = 0 === a.length, {
                                chain: r,
                                output: t.output.apply(this, [a])
                            }
                        }
                    }, {
                        type: t.logic.type.endfor,
                        regex: /^endfor$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.set,
                        regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1].trim(),
                                r = e.match[2],
                                i = t.expression.compile.apply(this, [{
                                    type: t.expression.type.expression,
                                    value: r
                                }]).stack;
                            return e.key = n, e.expression = i, delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i = t.expression.parse.apply(this, [e.expression, n]);
                            return n[e.key] = i, {
                                chain: r,
                                context: n
                            }
                        }
                    }, {
                        type: t.logic.type.setcapture,
                        regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
                        next: [t.logic.type.endset],
                        open: !0,
                        compile: function(t) {
                            var e = t.match[1].trim();
                            return t.key = e, delete t.match, t
                        },
                        parse: function(e, n, r) {
                            var i = t.parse.apply(this, [e.output, n]),
                                o = e.key;
                            return this.context[o] = i, n[o] = i, {
                                chain: r,
                                context: n
                            }
                        }
                    }, {
                        type: t.logic.type.endset,
                        regex: /^endset$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.filter,
                        regex: /^filter\s+(.+)$/,
                        next: [t.logic.type.endfilter],
                        open: !0,
                        compile: function(e) {
                            var n = "|" + e.match[1].trim();
                            return e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i = t.parse.apply(this, [e.output, n]),
                                o = [{
                                    type: t.expression.type.string,
                                    value: i
                                }].concat(e.stack);
                            return {
                                chain: r,
                                output: t.expression.parse.apply(this, [o, n])
                            }
                        }
                    }, {
                        type: t.logic.type.endfilter,
                        regex: /^endfilter$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.block,
                        regex: /^block\s+([a-zA-Z0-9_]+)$/,
                        next: [t.logic.type.endblock],
                        open: !0,
                        compile: function(t) {
                            return t.block = t.match[1].trim(), delete t.match, t
                        },
                        parse: function(e, n, r) {
                            var i, o, s = t.indexOf(this.importedBlocks, e.block) > -1,
                                a = this.blocks[e.block] && t.indexOf(this.blocks[e.block], t.placeholders.parent) > -1;
                            return (void 0 === this.blocks[e.block] || s || a || n.loop || e.overwrite) && (i = e.expression ? t.expression.parse.apply(this, [{
                                type: t.expression.type.string,
                                value: t.expression.parse.apply(this, [e.output, n])
                            }, n]) : t.expression.parse.apply(this, [{
                                type: t.expression.type.string,
                                value: t.parse.apply(this, [e.output, n])
                            }, n]), s && this.importedBlocks.splice(this.importedBlocks.indexOf(e.block), 1), this.blocks[e.block] = a ? t.Markup(this.blocks[e.block].replace(t.placeholders.parent, i)) : i, this.originalBlockTokens[e.block] = {
                                type: e.type,
                                block: e.block,
                                output: e.output,
                                overwrite: !0
                            }), o = this.child.blocks[e.block] ? this.child.blocks[e.block] : this.blocks[e.block], {
                                chain: r,
                                output: o
                            }
                        }
                    }, {
                        type: t.logic.type.shortblock,
                        regex: /^block\s+([a-zA-Z0-9_]+)\s+(.+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            return e.expression = e.match[2].trim(), e.output = t.expression.compile({
                                type: t.expression.type.expression,
                                value: e.expression
                            }).stack, e.block = e.match[1].trim(), delete e.match, e
                        },
                        parse: function(e, n, r) {
                            return t.logic.handler[t.logic.type.block].parse.apply(this, arguments)
                        }
                    }, {
                        type: t.logic.type.endblock,
                        regex: /^endblock(?:\s+([a-zA-Z0-9_]+))?$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.extends_,
                        regex: /^extends\s+(.+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1].trim();
                            return delete e.match, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, e
                        },
                        parse: function(e, n, r) {
                            var i = t.expression.parse.apply(this, [e.stack, n]);
                            return this.extend = i, {
                                chain: r,
                                output: ""
                            }
                        }
                    }, {
                        type: t.logic.type.use,
                        regex: /^use\s+(.+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1].trim();
                            return delete e.match, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, e
                        },
                        parse: function(e, n, r) {
                            var i = t.expression.parse.apply(this, [e.stack, n]);
                            return this.importBlocks(i), {
                                chain: r,
                                output: ""
                            }
                        }
                    }, {
                        type: t.logic.type.include,
                        regex: /^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+([\S\s]+?))?\s*(only)?$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            var n = e.match,
                                r = void 0 !== n[1],
                                i = n[2].trim(),
                                o = n[3],
                                s = void 0 !== n[4] && n[4].length;
                            return delete e.match, e.only = s, e.includeMissing = r, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: i
                            }]).stack, void 0 !== o && (e.withStack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: o.trim()
                            }]).stack), e
                        },
                        parse: function(e, n, r) {
                            var i, o, s, a = {};
                            if (e.only || (a = t.ChildContext(n)), void 0 !== e.withStack) {
                                i = t.expression.parse.apply(this, [e.withStack, n]);
                                for (o in i) i.hasOwnProperty(o) && (a[o] = i[o])
                            }
                            var u = t.expression.parse.apply(this, [e.stack, a]);
                            return s = u instanceof t.Template ? u : this.importFile(u), {
                                chain: r,
                                output: s.render(a)
                            }
                        }
                    }, {
                        type: t.logic.type.spaceless,
                        regex: /^spaceless$/,
                        next: [t.logic.type.endspaceless],
                        open: !0,
                        parse: function(e, n, r) {
                            var i = t.parse.apply(this, [e.output, n]),
                                o = />\s+</g;
                            return {
                                chain: r,
                                output: i.replace(o, "><").trim()
                            }
                        }
                    }, {
                        type: t.logic.type.endspaceless,
                        regex: /^endspaceless$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.macro,
                        regex: /^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,
                        next: [t.logic.type.endmacro],
                        open: !0,
                        compile: function(e) {
                            for (var n = e.match[1], r = e.match[2].split(/[\s,]+/), i = 0; i < r.length; i++)
                                for (var o = 0; o < r.length; o++)
                                    if (r[i] === r[o] && i !== o) throw new t.Error("Duplicate arguments for parameter: " + r[i]);
                            return e.macroName = n, e.parameters = r, delete e.match, e
                        },
                        parse: function(e, n, r) {
                            var i = this;
                            return this.macros[e.macroName] = function() {
                                for (var n = {
                                        _self: i.macros
                                    }, r = 0; r < e.parameters.length; r++) {
                                    var o = e.parameters[r];
                                    void 0 !== arguments[r] ? n[o] = arguments[r] : n[o] = void 0
                                }
                                return t.parse.apply(i, [e.output, n])
                            }, {
                                chain: r,
                                output: ""
                            }
                        }
                    }, {
                        type: t.logic.type.endmacro,
                        regex: /^endmacro$/,
                        next: [],
                        open: !1
                    }, {
                        type: t.logic.type.import_,
                        regex: /^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            var n = e.match[1].trim(),
                                r = e.match[2].trim();
                            return delete e.match, e.expression = n, e.contextName = r, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, e
                        },
                        parse: function(e, n, r) {
                            if ("_self" !== e.expression) {
                                var i = t.expression.parse.apply(this, [e.stack, n]),
                                    o = this.importFile(i || e.expression);
                                n[e.contextName] = o.render({}, {
                                    output: "macros"
                                })
                            } else n[e.contextName] = this.macros;
                            return {
                                chain: r,
                                output: ""
                            }
                        }
                    }, {
                        type: t.logic.type.from,
                        regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
                        next: [],
                        open: !0,
                        compile: function(e) {
                            for (var n = e.match[1].trim(), r = e.match[2].trim().split(/[ ,]+/), i = {}, o = 0; o < r.length; o++) {
                                var s = r[o],
                                    a = s.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);
                                a ? i[a[1].trim()] = a[2].trim() : s.match(/^([a-zA-Z0-9_]+)$/) && (i[s] = s)
                            }
                            return delete e.match, e.expression = n, e.macroNames = i, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: n
                            }]).stack, e
                        },
                        parse: function(e, n, r) {
                            var i;
                            if ("_self" !== e.expression) {
                                var o = t.expression.parse.apply(this, [e.stack, n]);
                                i = this.importFile(o || e.expression).render({}, {
                                    output: "macros"
                                })
                            } else i = this.macros;
                            for (var s in e.macroNames) i.hasOwnProperty(s) && (n[e.macroNames[s]] = i[s]);
                            return {
                                chain: r,
                                output: ""
                            }
                        }
                    }, {
                        type: t.logic.type.embed,
                        regex: /^embed\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
                        next: [t.logic.type.endembed],
                        open: !0,
                        compile: function(e) {
                            var n = e.match,
                                r = void 0 !== n[1],
                                i = n[2].trim(),
                                o = n[3],
                                s = void 0 !== n[4] && n[4].length;
                            return delete e.match, e.only = s, e.includeMissing = r, e.stack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: i
                            }]).stack, void 0 !== o && (e.withStack = t.expression.compile.apply(this, [{
                                type: t.expression.type.expression,
                                value: o.trim()
                            }]).stack), e
                        },
                        parse: function(e, n, r) {
                            var i, o, s, a = {};
                            if (!e.only)
                                for (o in n) n.hasOwnProperty(o) && (a[o] = n[o]);
                            if (void 0 !== e.withStack) {
                                i = t.expression.parse.apply(this, [e.withStack, n]);
                                for (o in i) i.hasOwnProperty(o) && (a[o] = i[o])
                            }
                            var u = t.expression.parse.apply(this, [e.stack, a]);
                            s = u instanceof t.Template ? u : this.importFile(u), this.blocks = {};
                            t.parse.apply(this, [e.output, a]);
                            return {
                                chain: r,
                                output: s.render(a, {
                                    blocks: this.blocks
                                })
                            }
                        }
                    }, {
                        type: t.logic.type.endembed,
                        regex: /^endembed$/,
                        next: [],
                        open: !1
                    }], t.logic.handler = {}, t.logic.extendType = function(e, n) {
                        n = n || "Twig.logic.type" + e, t.logic.type[e] = n
                    }, t.logic.extend = function(e) {
                        if (!e.type) throw new t.Error("Unable to extend logic definition. No type provided for " + e);
                        t.logic.extendType(e.type), t.logic.handler[e.type] = e
                    }; t.logic.definitions.length > 0;) t.logic.extend(t.logic.definitions.shift());
                return t.logic.compile = function(e) {
                    var n = e.value.trim(),
                        r = t.logic.tokenize.apply(this, [n]),
                        i = t.logic.handler[r.type];
                    return i.compile && (r = i.compile.apply(this, [r]), t.log.trace("Twig.logic.compile: ", "Compiled logic token to ", r)), r
                }, t.logic.tokenize = function(e) {
                    var n = {},
                        r = null,
                        i = null,
                        o = null,
                        s = null,
                        a = null,
                        u = null;
                    e = e.trim();
                    for (r in t.logic.handler)
                        if (t.logic.handler.hasOwnProperty(r))
                            for (i = t.logic.handler[r].type, o = t.logic.handler[r].regex, s = [], o instanceof Array ? s = o : s.push(o); s.length > 0;)
                                if (a = s.shift(), null !== (u = a.exec(e.trim()))) return n.type = i, n.match = u, t.log.trace("Twig.logic.tokenize: ", "Matched a ", i, " regular expression of ", u), n;
                    throw new t.Error("Unable to parse '" + e.trim() + "'")
                }, t.logic.parse = function(e, n, r) {
                    var i, o = "";
                    return n = n || {}, t.log.debug("Twig.logic.parse: ", "Parsing logic token ", e), i = t.logic.handler[e.type], i.parse && (o = i.parse.apply(this, [e, n, r])), o
                }, t
            }(o || {}),
            o = function(t) {
                "use strict";
                t.expression = {}, t.expression.reservedWords = ["true", "false", "null", "TRUE", "FALSE", "NULL", "_context"], t.expression.type = {
                    comma: "Twig.expression.type.comma",
                    operator: {
                        unary: "Twig.expression.type.operator.unary",
                        binary: "Twig.expression.type.operator.binary"
                    },
                    string: "Twig.expression.type.string",
                    bool: "Twig.expression.type.bool",
                    array: {
                        start: "Twig.expression.type.array.start",
                        end: "Twig.expression.type.array.end"
                    },
                    object: {
                        start: "Twig.expression.type.object.start",
                        end: "Twig.expression.type.object.end"
                    },
                    parameter: {
                        start: "Twig.expression.type.parameter.start",
                        end: "Twig.expression.type.parameter.end"
                    },
                    key: {
                        period: "Twig.expression.type.key.period",
                        brackets: "Twig.expression.type.key.brackets"
                    },
                    filter: "Twig.expression.type.filter",
                    _function: "Twig.expression.type._function",
                    variable: "Twig.expression.type.variable",
                    number: "Twig.expression.type.number",
                    _null: "Twig.expression.type.null",
                    context: "Twig.expression.type.context",
                    test: "Twig.expression.type.test"
                }, t.expression.set = {
                    operations: [t.expression.type.filter, t.expression.type.operator.unary, t.expression.type.operator.binary, t.expression.type.array.end, t.expression.type.object.end, t.expression.type.parameter.end, t.expression.type.comma, t.expression.type.test],
                    expressions: [t.expression.type._function, t.expression.type.bool, t.expression.type.string, t.expression.type.variable, t.expression.type.number, t.expression.type._null, t.expression.type.context, t.expression.type.parameter.start, t.expression.type.array.start, t.expression.type.object.start]
                }, t.expression.set.operations_extended = t.expression.set.operations.concat([t.expression.type.key.period, t.expression.type.key.brackets]), t.expression.fn = {
                    compile: {
                        push: function(t, e, n) {
                            n.push(t)
                        },
                        push_both: function(t, e, n) {
                            n.push(t), e.push(t)
                        }
                    },
                    parse: {
                        push: function(t, e, n) {
                            e.push(t)
                        },
                        push_value: function(t, e, n) {
                            e.push(t.value)
                        }
                    }
                }, t.expression.definitions = [{
                    type: t.expression.type.test,
                    regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,
                    next: t.expression.set.operations.concat([t.expression.type.parameter.start]),
                    compile: function(t, e, n) {
                        t.filter = t.match[2], t.modifier = t.match[1], delete t.match, delete t.value, n.push(t)
                    },
                    parse: function(e, n, r) {
                        var i = n.pop(),
                            o = e.params && t.expression.parse.apply(this, [e.params, r]),
                            s = t.test(e.filter, i, o);
                        "not" == e.modifier ? n.push(!s) : n.push(s)
                    }
                }, {
                    type: t.expression.type.comma,
                    regex: /^,/,
                    next: t.expression.set.expressions.concat([t.expression.type.array.end, t.expression.type.object.end]),
                    compile: function(e, n, r) {
                        var i, o = n.length - 1;
                        for (delete e.match, delete e.value; o >= 0; o--) {
                            if (i = n.pop(), i.type === t.expression.type.object.start || i.type === t.expression.type.parameter.start || i.type === t.expression.type.array.start) {
                                n.push(i);
                                break
                            }
                            r.push(i)
                        }
                        r.push(e)
                    }
                }, {
                    type: t.expression.type.operator.binary,
                    regex: /(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,
                    next: t.expression.set.expressions.concat([t.expression.type.operator.unary]),
                    compile: function(e, n, r) {
                        delete e.match, e.value = e.value.trim();
                        var i = e.value,
                            o = t.expression.operator.lookup(i, e);
                        for (t.log.trace("Twig.expression.compile: ", "Operator: ", o, " from ", i); n.length > 0 && (n[n.length - 1].type == t.expression.type.operator.unary || n[n.length - 1].type == t.expression.type.operator.binary) && (o.associativity === t.expression.operator.leftToRight && o.precidence >= n[n.length - 1].precidence || o.associativity === t.expression.operator.rightToLeft && o.precidence > n[n.length - 1].precidence);) {
                            var s = n.pop();
                            r.push(s)
                        }
                        if (":" === i) {
                            if (!n[n.length - 1] || "?" !== n[n.length - 1].value) {
                                var a = r.pop();
                                if (a.type === t.expression.type.string || a.type === t.expression.type.variable) e.key = a.value;
                                else if (a.type === t.expression.type.number) e.key = a.value.toString();
                                else {
                                    if (a.type !== t.expression.type.parameter.end || !a.expression) throw new t.Error("Unexpected value before ':' of " + a.type + " = " + a.value);
                                    e.params = a.params
                                }
                                return void r.push(e)
                            }
                        } else n.push(o)
                    },
                    parse: function(e, n, r) {
                        e.key ? n.push(e) : e.params ? (e.key = t.expression.parse.apply(this, [e.params, r]), n.push(e), delete e.params) : t.expression.operator.parse(e.value, n)
                    }
                }, {
                    type: t.expression.type.operator.unary,
                    regex: /(^not\s+)/,
                    next: t.expression.set.expressions,
                    compile: function(e, n, r) {
                        delete e.match, e.value = e.value.trim();
                        var i = e.value,
                            o = t.expression.operator.lookup(i, e);
                        for (t.log.trace("Twig.expression.compile: ", "Operator: ", o, " from ", i); n.length > 0 && (n[n.length - 1].type == t.expression.type.operator.unary || n[n.length - 1].type == t.expression.type.operator.binary) && (o.associativity === t.expression.operator.leftToRight && o.precidence >= n[n.length - 1].precidence || o.associativity === t.expression.operator.rightToLeft && o.precidence > n[n.length - 1].precidence);) {
                            var s = n.pop();
                            r.push(s)
                        }
                        n.push(o)
                    },
                    parse: function(e, n, r) {
                        t.expression.operator.parse(e.value, n)
                    }
                }, {
                    type: t.expression.type.string,
                    regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
                    next: t.expression.set.operations,
                    compile: function(e, n, r) {
                        var i = e.value;
                        delete e.match, i = '"' === i.substring(0, 1) ? i.replace('\\"', '"') : i.replace("\\'", "'"), e.value = i.substring(1, i.length - 1).replace(/\\n/g, "\n").replace(/\\r/g, "\r"), t.log.trace("Twig.expression.compile: ", "String value: ", e.value), r.push(e)
                    },
                    parse: t.expression.fn.parse.push_value
                }, {
                    type: t.expression.type.parameter.start,
                    regex: /^\(/,
                    next: t.expression.set.expressions.concat([t.expression.type.parameter.end]),
                    compile: t.expression.fn.compile.push_both,
                    parse: t.expression.fn.parse.push
                }, {
                    type: t.expression.type.parameter.end,
                    regex: /^\)/,
                    next: t.expression.set.operations_extended,
                    compile: function(e, n, r) {
                        var i, o = e;
                        for (i = n.pop(); n.length > 0 && i.type != t.expression.type.parameter.start;) r.push(i), i = n.pop();
                        for (var s = []; e.type !== t.expression.type.parameter.start;) s.unshift(e), e = r.pop();
                        s.unshift(e);
                        e = r[r.length - 1], void 0 === e || e.type !== t.expression.type._function && e.type !== t.expression.type.filter && e.type !== t.expression.type.test && e.type !== t.expression.type.key.brackets && e.type !== t.expression.type.key.period ? (o.expression = !0, s.pop(), s.shift(), o.params = s, r.push(o)) : (o.expression = !1, e.params = s)
                    },
                    parse: function(e, n, r) {
                        var i = [],
                            o = !1,
                            s = null;
                        if (e.expression) s = t.expression.parse.apply(this, [e.params, r]), n.push(s);
                        else {
                            for (; n.length > 0;) {
                                if ((s = n.pop()) && s.type && s.type == t.expression.type.parameter.start) {
                                    o = !0;
                                    break
                                }
                                i.unshift(s)
                            }
                            if (!o) throw new t.Error("Expected end of parameter set.");
                            n.push(i)
                        }
                    }
                }, {
                    type: t.expression.type.array.start,
                    regex: /^\[/,
                    next: t.expression.set.expressions.concat([t.expression.type.array.end]),
                    compile: t.expression.fn.compile.push_both,
                    parse: t.expression.fn.parse.push
                }, {
                    type: t.expression.type.array.end,
                    regex: /^\]/,
                    next: t.expression.set.operations_extended,
                    compile: function(e, n, r) {
                        for (var i, o = n.length - 1; o >= 0 && (i = n.pop(), i.type !== t.expression.type.array.start); o--) r.push(i);
                        r.push(e)
                    },
                    parse: function(e, n, r) {
                        for (var i = [], o = !1, s = null; n.length > 0;) {
                            if (s = n.pop(), s.type && s.type == t.expression.type.array.start) {
                                o = !0;
                                break
                            }
                            i.unshift(s)
                        }
                        if (!o) throw new t.Error("Expected end of array.");
                        n.push(i)
                    }
                }, {
                    type: t.expression.type.object.start,
                    regex: /^\{/,
                    next: t.expression.set.expressions.concat([t.expression.type.object.end]),
                    compile: t.expression.fn.compile.push_both,
                    parse: t.expression.fn.parse.push
                }, {
                    type: t.expression.type.object.end,
                    regex: /^\}/,
                    next: t.expression.set.operations_extended,
                    compile: function(e, n, r) {
                        for (var i, o = n.length - 1; o >= 0 && (!(i = n.pop()) || i.type !== t.expression.type.object.start); o--) r.push(i);
                        r.push(e)
                    },
                    parse: function(e, n, r) {
                        for (var i = {}, o = !1, s = null, a = !1, u = null; n.length > 0;) {
                            if ((s = n.pop()) && s.type && s.type === t.expression.type.object.start) {
                                o = !0;
                                break
                            }
                            if (s && s.type && (s.type === t.expression.type.operator.binary || s.type === t.expression.type.operator.unary) && s.key) {
                                if (!a) throw new t.Error("Missing value for key '" + s.key + "' in object definition.");
                                i[s.key] = u, void 0 === i._keys && (i._keys = []), i._keys.unshift(s.key), u = null, a = !1
                            } else a = !0, u = s
                        }
                        if (!o) throw new t.Error("Unexpected end of object.");
                        n.push(i)
                    }
                }, {
                    type: t.expression.type.filter,
                    regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
                    next: t.expression.set.operations_extended.concat([t.expression.type.parameter.start]),
                    compile: function(t, e, n) {
                        t.value = t.match[1], n.push(t)
                    },
                    parse: function(e, n, r) {
                        var i = n.pop(),
                            o = e.params && t.expression.parse.apply(this, [e.params, r]);
                        n.push(t.filter.apply(this, [e.value, i, o]))
                    }
                }, {
                    type: t.expression.type._function,
                    regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
                    next: t.expression.type.parameter.start,
                    transform: function(t, e) {
                        return "("
                    },
                    compile: function(t, e, n) {
                        var r = t.match[1];
                        t.fn = r, delete t.match, delete t.value, n.push(t)
                    },
                    parse: function(e, n, r) {
                        var i, o = e.params && t.expression.parse.apply(this, [e.params, r]),
                            s = e.fn;
                        if (t.functions[s]) i = t.functions[s].apply(this, o);
                        else {
                            if ("function" != typeof r[s]) throw new t.Error(s + " function does not exist and is not defined in the context");
                            i = r[s].apply(r, o)
                        }
                        n.push(i)
                    }
                }, {
                    type: t.expression.type.variable,
                    regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
                    next: t.expression.set.operations_extended.concat([t.expression.type.parameter.start]),
                    compile: t.expression.fn.compile.push,
                    validate: function(e, n) {
                        return t.indexOf(t.expression.reservedWords, e[0]) < 0
                    },
                    parse: function(e, n, r) {
                        var i = t.expression.resolve(r[e.value], r);
                        n.push(i)
                    }
                }, {
                    type: t.expression.type.key.period,
                    regex: /^\.([a-zA-Z0-9_]+)/,
                    next: t.expression.set.operations_extended.concat([t.expression.type.parameter.start]),
                    compile: function(t, e, n) {
                        t.key = t.match[1], delete t.match, delete t.value, n.push(t)
                    },
                    parse: function(e, n, r) {
                        var i, o = e.params && t.expression.parse.apply(this, [e.params, r]),
                            s = e.key,
                            a = n.pop();
                        if (null === a || void 0 === a) {
                            if (this.options.strict_variables) throw new t.Error("Can't access a key " + s + " on an null or undefined object.");
                            return null
                        }
                        var u = function(t) {
                            return t.substr(0, 1).toUpperCase() + t.substr(1)
                        };
                        i = "object" == typeof a && s in a ? a[s] : void 0 !== a["get" + u(s)] ? a["get" + u(s)] : void 0 !== a["is" + u(s)] ? a["is" + u(s)] : void 0, n.push(t.expression.resolve(i, a, o))
                    }
                }, {
                    type: t.expression.type.key.brackets,
                    regex: /^\[([^\]]*)\]/,
                    next: t.expression.set.operations_extended.concat([t.expression.type.parameter.start]),
                    compile: function(e, n, r) {
                        var i = e.match[1];
                        delete e.value, delete e.match, e.stack = t.expression.compile({
                            value: i
                        }).stack, r.push(e)
                    },
                    parse: function(e, n, r) {
                        var i, o = e.params && t.expression.parse.apply(this, [e.params, r]),
                            s = t.expression.parse.apply(this, [e.stack, r]),
                            a = n.pop();
                        if (null === a || void 0 === a) {
                            if (this.options.strict_variables) throw new t.Error("Can't access a key " + s + " on an null or undefined object.");
                            return null
                        }
                        i = "object" == typeof a && s in a ? a[s] : null, n.push(t.expression.resolve(i, a, o))
                    }
                }, {
                    type: t.expression.type._null,
                    regex: /^(null|NULL|none|NONE)/,
                    next: t.expression.set.operations,
                    compile: function(t, e, n) {
                        delete t.match, t.value = null, n.push(t)
                    },
                    parse: t.expression.fn.parse.push_value
                }, {
                    type: t.expression.type.context,
                    regex: /^_context/,
                    next: t.expression.set.operations_extended.concat([t.expression.type.parameter.start]),
                    compile: t.expression.fn.compile.push,
                    parse: function(t, e, n) {
                        e.push(n)
                    }
                }, {
                    type: t.expression.type.number,
                    regex: /^\-?\d+(\.\d+)?/,
                    next: t.expression.set.operations,
                    compile: function(t, e, n) {
                        t.value = Number(t.value), n.push(t)
                    },
                    parse: t.expression.fn.parse.push_value
                }, {
                    type: t.expression.type.bool,
                    regex: /^(true|TRUE|false|FALSE)/,
                    next: t.expression.set.operations,
                    compile: function(t, e, n) {
                        t.value = "true" === t.match[0].toLowerCase(), delete t.match, n.push(t)
                    },
                    parse: t.expression.fn.parse.push_value
                }], t.expression.resolve = function(t, e, n) {
                    return "function" == typeof t ? t.apply(e, n || []) : t
                }, t.expression.handler = {}, t.expression.extendType = function(e) {
                    t.expression.type[e] = "Twig.expression.type." + e
                }, t.expression.extend = function(e) {
                    if (!e.type) throw new t.Error("Unable to extend logic definition. No type provided for " + e);
                    t.expression.handler[e.type] = e
                };
                for (; t.expression.definitions.length > 0;) t.expression.extend(t.expression.definitions.shift());
                return t.expression.tokenize = function(e) {
                    var n, r, i, o, s, a, u = [],
                        l = 0,
                        c = null,
                        p = [];
                    for (a = function() {
                            var e = Array.prototype.slice.apply(arguments);
                            e.pop(), e.pop();
                            return t.log.trace("Twig.expression.tokenize", "Matched a ", n, " regular expression of ", e), c && t.indexOf(c, n) < 0 ? (p.push(n + " cannot follow a " + u[u.length - 1].type + " at template:" + l + " near '" + e[0].substring(0, 20) + "...'"), e[0]) : t.expression.handler[n].validate && !t.expression.handler[n].validate(e, u) ? e[0] : (p = [], u.push({
                                type: n,
                                value: e[0],
                                match: e
                            }), s = !0, c = o, l += e[0].length, t.expression.handler[n].transform ? t.expression.handler[n].transform(e, u) : "")
                        }, t.log.debug("Twig.expression.tokenize", "Tokenizing expression ", e); e.length > 0;) {
                        e = e.trim();
                        for (n in t.expression.handler)
                            if (t.expression.handler.hasOwnProperty(n)) {
                                for (o = t.expression.handler[n].next, r = t.expression.handler[n].regex, i = r instanceof Array ? r : [r], s = !1; i.length > 0;) r = i.pop(), e = e.replace(r, a);
                                if (s) break
                            } if (!s) throw p.length > 0 ? new t.Error(p.join(" OR ")) : new t.Error("Unable to parse '" + e + "' at template position" + l)
                    }
                    return t.log.trace("Twig.expression.tokenize", "Tokenized to ", u), u
                }, t.expression.compile = function(e) {
                    var n = e.value,
                        r = t.expression.tokenize(n),
                        i = null,
                        o = [],
                        s = [],
                        a = null;
                    for (t.log.trace("Twig.expression.compile: ", "Compiling ", n); r.length > 0;) i = r.shift(), a = t.expression.handler[i.type], t.log.trace("Twig.expression.compile: ", "Compiling ", i), a.compile && a.compile(i, s, o), t.log.trace("Twig.expression.compile: ", "Stack is", s), t.log.trace("Twig.expression.compile: ", "Output is", o);
                    for (; s.length > 0;) o.push(s.pop());
                    return t.log.trace("Twig.expression.compile: ", "Final output is", o), e.stack = o, delete e.value, e
                }, t.expression.parse = function(e, n) {
                    var r = this;
                    e instanceof Array || (e = [e]);
                    var i = [],
                        o = null;
                    return t.forEach(e, function(e) {
                        o = t.expression.handler[e.type], o.parse && o.parse.apply(r, [e, i, n])
                    }), i.pop()
                }, t
            }(o || {}),
            o = function(t) {
                "use strict";
                t.expression.operator = {
                    leftToRight: "leftToRight",
                    rightToLeft: "rightToLeft"
                };
                var e = function(t, e) {
                    if (void 0 === e || null === e) return null;
                    if (void 0 !== e.indexOf) return t === e || "" !== t && e.indexOf(t) > -1;
                    var n;
                    for (n in e)
                        if (e.hasOwnProperty(n) && e[n] === t) return !0;
                    return !1
                };
                return t.expression.operator.lookup = function(e, n) {
                    switch (e) {
                        case "..":
                        case "not in":
                        case "in":
                            n.precidence = 20, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case ",":
                            n.precidence = 18, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "?":
                        case ":":
                            n.precidence = 16, n.associativity = t.expression.operator.rightToLeft;
                            break;
                        case "or":
                            n.precidence = 14, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "and":
                            n.precidence = 13, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "==":
                        case "!=":
                            n.precidence = 9, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "<":
                        case "<=":
                        case ">":
                        case ">=":
                            n.precidence = 8, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "~":
                        case "+":
                        case "-":
                            n.precidence = 6, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "//":
                        case "**":
                        case "*":
                        case "/":
                        case "%":
                            n.precidence = 5, n.associativity = t.expression.operator.leftToRight;
                            break;
                        case "not":
                            n.precidence = 3, n.associativity = t.expression.operator.rightToLeft;
                            break;
                        default:
                            throw new t.Error(e + " is an unknown operator.")
                    }
                    return n.operator = e, n
                }, t.expression.operator.parse = function(n, r) {
                    t.log.trace("Twig.expression.operator.parse: ", "Handling ", n);
                    var i, o, s;
                    switch (n) {
                        case ":":
                            break;
                        case "?":
                            s = r.pop(), o = r.pop(), i = r.pop(), i ? r.push(o) : r.push(s);
                            break;
                        case "+":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(i + o);
                            break;
                        case "-":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(i - o);
                            break;
                        case "*":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(i * o);
                            break;
                        case "/":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(i / o);
                            break;
                        case "//":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(parseInt(i / o));
                            break;
                        case "%":
                            o = parseFloat(r.pop()), i = parseFloat(r.pop()), r.push(i % o);
                            break;
                        case "~":
                            o = r.pop(), i = r.pop(), r.push((null != i ? i.toString() : "") + (null != o ? o.toString() : ""));
                            break;
                        case "not":
                        case "!":
                            r.push(!r.pop());
                            break;
                        case "<":
                            o = r.pop(), i = r.pop(), r.push(i < o);
                            break;
                        case "<=":
                            o = r.pop(), i = r.pop(), r.push(i <= o);
                            break;
                        case ">":
                            o = r.pop(), i = r.pop(), r.push(i > o);
                            break;
                        case ">=":
                            o = r.pop(), i = r.pop(), r.push(i >= o);
                            break;
                        case "===":
                            o = r.pop(), i = r.pop(), r.push(i === o);
                            break;
                        case "==":
                            o = r.pop(), i = r.pop(), r.push(i == o);
                            break;
                        case "!==":
                            o = r.pop(), i = r.pop(), r.push(i !== o);
                            break;
                        case "!=":
                            o = r.pop(), i = r.pop(), r.push(i != o);
                            break;
                        case "or":
                            o = r.pop(), i = r.pop(), r.push(i || o);
                            break;
                        case "and":
                            o = r.pop(), i = r.pop(), r.push(i && o);
                            break;
                        case "**":
                            o = r.pop(), i = r.pop(), r.push(Math.pow(i, o));
                            break;
                        case "not in":
                            o = r.pop(), i = r.pop(), r.push(!e(i, o));
                            break;
                        case "in":
                            o = r.pop(), i = r.pop(), r.push(e(i, o));
                            break;
                        case "..":
                            o = r.pop(), i = r.pop(), r.push(t.functions.range(i, o));
                            break;
                        default:
                            throw new t.Error(n + " is an unknown operator.")
                    }
                }, t
            }(o || {}),
            o = function(t) {
                function e(t, e) {
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return void 0 !== e && null !== e && n === t
                }
                return t.filters = {
                    upper: function(t) {
                        return "string" != typeof t ? t : t.toUpperCase()
                    },
                    lower: function(t) {
                        return "string" != typeof t ? t : t.toLowerCase()
                    },
                    capitalize: function(t) {
                        return "string" != typeof t ? t : t.substr(0, 1).toUpperCase() + t.toLowerCase().substr(1)
                    },
                    title: function(t) {
                        return "string" != typeof t ? t : t.toLowerCase().replace(/(^|\s)([a-z])/g, function(t, e, n) {
                            return e + n.toUpperCase()
                        })
                    },
                    length: function(e) {
                        return t.lib.is("Array", e) || "string" == typeof e ? e.length : t.lib.is("Object", e) ? void 0 === e._keys ? Object.keys(e).length : e._keys.length : 0
                    },
                    reverse: function(t) {
                        if (e("Array", t)) return t.reverse();
                        if (e("String", t)) return t.split("").reverse().join("");
                        if (e("Object", t)) {
                            var n = t._keys || Object.keys(t).reverse();
                            return t._keys = n, t
                        }
                    },
                    sort: function(t) {
                        if (e("Array", t)) return t.sort();
                        if (e("Object", t)) {
                            delete t._keys;
                            var n = Object.keys(t),
                                r = n.sort(function(e, n) {
                                    var r;
                                    return t[e] > t[n] == !(t[e] <= t[n]) ? t[e] > t[n] ? 1 : t[e] < t[n] ? -1 : 0 : isNaN(r = parseFloat(t[e])) || isNaN(b1 = parseFloat(t[n])) ? "string" == typeof t[e] ? t[e] > t[n].toString() ? 1 : t[e] < t[n].toString() ? -1 : 0 : "string" == typeof t[n] ? t[e].toString() > t[n] ? 1 : t[e].toString() < t[n] ? -1 : 0 : null : r > b1 ? 1 : r < b1 ? -1 : 0
                                });
                            return t._keys = r, t
                        }
                    },
                    keys: function(e) {
                        if (void 0 !== e && null !== e) {
                            var n = e._keys || Object.keys(e),
                                r = [];
                            return t.forEach(n, function(t) {
                                "_keys" !== t && e.hasOwnProperty(t) && r.push(t)
                            }), r
                        }
                    },
                    url_encode: function(t) {
                        if (void 0 !== t && null !== t) {
                            var e = encodeURIComponent(t);
                            return e = e.replace("'", "%27")
                        }
                    },
                    join: function(n, r) {
                        if (void 0 !== n && null !== n) {
                            var i = "",
                                o = [],
                                s = null;
                            return r && r[0] && (i = r[0]), e("Array", n) ? o = n : (s = n._keys || Object.keys(n), t.forEach(s, function(t) {
                                "_keys" !== t && n.hasOwnProperty(t) && o.push(n[t])
                            })), o.join(i)
                        }
                    },
                    default: function(e, n) {
                        if (void 0 !== n && n.length > 1) throw new t.Error("default filter expects one argument");
                        return void 0 === e || null === e || "" === e ? void 0 === n ? "" : n[0] : e
                    },
                    json_encode: function(n) {
                        if (void 0 === n || null === n) return "null";
                        if ("object" == typeof n && e("Array", n)) return i = [], t.forEach(n, function(e) {
                            i.push(t.filters.json_encode(e))
                        }), "[" + i.join(",") + "]";
                        if ("object" == typeof n) {
                            var r = n._keys || Object.keys(n),
                                i = [];
                            return t.forEach(r, function(e) {
                                i.push(JSON.stringify(e) + ":" + t.filters.json_encode(n[e]))
                            }), "{" + i.join(",") + "}"
                        }
                        return JSON.stringify(n)
                    },
                    merge: function(n, r) {
                        var i = [],
                            o = 0,
                            s = [];
                        if (e("Array", n) ? t.forEach(r, function(t) {
                                e("Array", t) || (i = {})
                            }) : i = {}, e("Array", i) || (i._keys = []), e("Array", n) ? t.forEach(n, function(t) {
                                i._keys && i._keys.push(o), i[o] = t, o++
                            }) : (s = n._keys || Object.keys(n), t.forEach(s, function(t) {
                                i[t] = n[t], i._keys.push(t);
                                var e = parseInt(t, 10);
                                !isNaN(e) && e >= o && (o = e + 1)
                            })), t.forEach(r, function(n) {
                                e("Array", n) ? t.forEach(n, function(t) {
                                    i._keys && i._keys.push(o), i[o] = t, o++
                                }) : (s = n._keys || Object.keys(n), t.forEach(s, function(t) {
                                    i[t] || i._keys.push(t), i[t] = n[t];
                                    var e = parseInt(t, 10);
                                    !isNaN(e) && e >= o && (o = e + 1)
                                }))
                            }), 0 === r.length) throw new t.Error("Filter merge expects at least one parameter");
                        return i
                    },
                    date: function(e, n) {
                        var r = t.functions.date(e),
                            i = n && n.length ? n[0] : "F j, Y H:i";
                        return t.lib.formatDate(r, i)
                    },
                    date_modify: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            if (void 0 === n || 1 !== n.length) throw new t.Error("date_modify filter expects 1 argument");
                            var r, i = n[0];
                            return t.lib.is("Date", e) && (r = t.lib.strtotime(i, e.getTime() / 1e3)), t.lib.is("String", e) && (r = t.lib.strtotime(i, t.lib.strtotime(e))), t.lib.is("Number", e) && (r = t.lib.strtotime(i, e)), new Date(1e3 * r)
                        }
                    },
                    replace: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            var r, i = n[0];
                            for (r in i) i.hasOwnProperty(r) && "_keys" !== r && (e = t.lib.replaceAll(e, r, i[r]));
                            return e
                        }
                    },
                    format: function(e, n) {
                        if (void 0 !== e && null !== e) return t.lib.vsprintf(e, n)
                    },
                    striptags: function(e) {
                        if (void 0 !== e && null !== e) return t.lib.strip_tags(e)
                    },
                    escape: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            var r = "html";
                            if (n && n.length && !0 !== n[0] && (r = n[0]), "html" == r) {
                                var i = e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                                return t.Markup(i, "html")
                            }
                            if ("js" == r) {
                                for (var i = e.toString(), o = "", s = 0; s < i.length; s++)
                                    if (i[s].match(/^[a-zA-Z0-9,\._]$/)) o += i[s];
                                    else {
                                        var a = i.charCodeAt(s);
                                        o += a < 128 ? "\\x" + a.toString(16).toUpperCase() : t.lib.sprintf("\\u%04s", a.toString(16).toUpperCase())
                                    } return t.Markup(o, "js")
                            }
                            if ("css" == r) {
                                for (var i = e.toString(), o = "", s = 0; s < i.length; s++)
                                    if (i[s].match(/^[a-zA-Z0-9]$/)) o += i[s];
                                    else {
                                        var a = i.charCodeAt(s);
                                        o += "\\" + a.toString(16).toUpperCase() + " "
                                    } return t.Markup(o, "css")
                            }
                            if ("url" == r) {
                                var o = t.filters.url_encode(e);
                                return t.Markup(o, "url")
                            }
                            if ("html_attr" == r) {
                                for (var i = e.toString(), o = "", s = 0; s < i.length; s++)
                                    if (i[s].match(/^[a-zA-Z0-9,\.\-_]$/)) o += i[s];
                                    else if (i[s].match(/^[&<>"]$/)) o += i[s].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                                else {
                                    var a = i.charCodeAt(s);
                                    o += a <= 31 && 9 != a && 10 != a && 13 != a ? "&#xFFFD;" : a < 128 ? t.lib.sprintf("&#x%02s;", a.toString(16).toUpperCase()) : t.lib.sprintf("&#x%04s;", a.toString(16).toUpperCase())
                                }
                                return t.Markup(o, "html_attr")
                            }
                            throw new t.Error("escape strategy unsupported")
                        }
                    },
                    e: function(e, n) {
                        return t.filters.escape(e, n)
                    },
                    nl2br: function(e) {
                        if (void 0 !== e && null !== e) {
                            var n = "<br />BACKSLASH_n_replace";
                            return e = t.filters.escape(e).replace(/\r\n/g, n).replace(/\r/g, n).replace(/\n/g, n), e = t.lib.replaceAll(e, "BACKSLASH_n_replace", "\n"), t.Markup(e)
                        }
                    },
                    number_format: function(t, e) {
                        var n = t,
                            r = e && e[0] ? e[0] : void 0,
                            i = e && void 0 !== e[1] ? e[1] : ".",
                            o = e && void 0 !== e[2] ? e[2] : ",";
                        n = (n + "").replace(/[^0-9+\-Ee.]/g, "");
                        var s = isFinite(+n) ? +n : 0,
                            a = isFinite(+r) ? Math.abs(r) : 0,
                            u = "";
                        return u = (a ? function(t, e) {
                            var n = Math.pow(10, e);
                            return "" + Math.round(t * n) / n
                        }(s, a) : "" + Math.round(s)).split("."), u[0].length > 3 && (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)), (u[1] || "").length < a && (u[1] = u[1] || "", u[1] += new Array(a - u[1].length + 1).join("0")), u.join(i)
                    },
                    trim: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            var r, i = t.filters.escape("" + e);
                            r = n && n[0] ? "" + n[0] : " \n\r\t\f\v            ​\u2028\u2029　";
                            for (var o = 0; o < i.length; o++)
                                if (-1 === r.indexOf(i.charAt(o))) {
                                    i = i.substring(o);
                                    break
                                } for (o = i.length - 1; o >= 0; o--)
                                if (-1 === r.indexOf(i.charAt(o))) {
                                    i = i.substring(0, o + 1);
                                    break
                                } return -1 === r.indexOf(i.charAt(0)) ? i : ""
                        }
                    },
                    truncate: function(t, e) {
                        var n = 30,
                            r = !1,
                            i = "...";
                        if (t += "", e && (e[0] && (n = e[0]), e[1] && (r = e[1]), e[2] && (i = e[2])), t.length > n) {
                            if (r && -1 === (n = t.indexOf(" ", n))) return t;
                            t = t.substr(0, n) + i
                        }
                        return t
                    },
                    slice: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            if (void 0 === n || n.length < 1) throw new t.Error("slice filter expects at least 1 argument");
                            var r = n[0] || 0,
                                i = n.length > 1 ? n[1] : e.length,
                                o = r >= 0 ? r : Math.max(e.length + r, 0);
                            if (t.lib.is("Array", e)) {
                                for (var s = [], a = o; a < o + i && a < e.length; a++) s.push(e[a]);
                                return s
                            }
                            if (t.lib.is("String", e)) return e.substr(o, i);
                            throw new t.Error("slice filter expects value to be an array or string")
                        }
                    },
                    abs: function(t) {
                        if (void 0 !== t && null !== t) return Math.abs(t)
                    },
                    first: function(t) {
                        if (e("Array", t)) return t[0];
                        if (e("Object", t)) {
                            if ("_keys" in t) return t[t._keys[0]]
                        } else if ("string" == typeof t) return t.substr(0, 1)
                    },
                    split: function(e, n) {
                        if (void 0 !== e && null !== e) {
                            if (void 0 === n || n.length < 1 || n.length > 2) throw new t.Error("split filter expects 1 or 2 argument");
                            if (t.lib.is("String", e)) {
                                var r = n[0],
                                    i = n[1],
                                    o = e.split(r);
                                if (void 0 === i) return o;
                                if (i < 0) return e.split(r, o.length + i);
                                var s = [];
                                if ("" == r)
                                    for (; o.length > 0;) {
                                        for (var a = "", u = 0; u < i && o.length > 0; u++) a += o.shift();
                                        s.push(a)
                                    } else {
                                        for (var u = 0; u < i - 1 && o.length > 0; u++) s.push(o.shift());
                                        o.length > 0 && s.push(o.join(r))
                                    }
                                return s
                            }
                            throw new t.Error("split filter expects value to be a string")
                        }
                    },
                    last: function(e) {
                        if (t.lib.is("Object", e)) {
                            var n;
                            return n = void 0 === e._keys ? Object.keys(e) : e._keys, e[n[n.length - 1]]
                        }
                        return e[e.length - 1]
                    },
                    raw: function(e) {
                        return t.Markup(e)
                    },
                    batch: function(e, n) {
                        var r, i, o, s = n.shift(),
                            a = n.shift();
                        if (!t.lib.is("Array", e)) throw new t.Error("batch filter expects items to be an array");
                        if (!t.lib.is("Number", s)) throw new t.Error("batch filter expects size to be a number");
                        if (s = Math.ceil(s), r = t.lib.chunkArray(e, s), a && e.length % s != 0) {
                            for (i = r.pop(), o = s - i.length; o--;) i.push(a);
                            r.push(i)
                        }
                        return r
                    },
                    round: function(e, n) {
                        n = n || [];
                        var r = n.length > 0 ? n[0] : 0,
                            i = n.length > 1 ? n[1] : "common";
                        if (e = parseFloat(e), r && !t.lib.is("Number", r)) throw new t.Error("round filter expects precision to be a number");
                        if ("common" === i) return t.lib.round(e, r);
                        if (!t.lib.is("Function", Math[i])) throw new t.Error("round filter expects method to be 'floor', 'ceil', or 'common'");
                        return Math[i](e * Math.pow(10, r)) / Math.pow(10, r)
                    }
                }, t.filter = function(e, n, r) {
                    if (!t.filters[e]) throw "Unable to find filter " + e;
                    return t.filters[e].apply(this, [n, r])
                }, t.filter.extend = function(e, n) {
                    t.filters[e] = n
                }, t
            }(o || {}),
            o = function(e) {
                return e.functions = {
                    range: function(t, e, n) {
                        var r, i, o = [],
                            s = n || 1,
                            a = !1;
                        if (isNaN(t) || isNaN(e) ? isNaN(t) && isNaN(e) ? (a = !0, r = t.charCodeAt(0), i = e.charCodeAt(0)) : (r = isNaN(t) ? 0 : t, i = isNaN(e) ? 0 : e) : (r = parseInt(t, 10), i = parseInt(e, 10)), r > i)
                            for (; r >= i;) o.push(a ? String.fromCharCode(r) : r), r -= s;
                        else
                            for (; r <= i;) o.push(a ? String.fromCharCode(r) : r), r += s;
                        return o
                    },
                    cycle: function(t, e) {
                        return t[e % t.length]
                    },
                    dump: function() {
                        var t = 0,
                            n = "",
                            r = Array.prototype.slice.call(arguments),
                            i = function(t) {
                                for (var e = ""; t > 0;) t--, e += "  ";
                                return e
                            },
                            o = function(e) {
                                n += i(t), "object" == typeof e ? s(e) : "function" == typeof e ? n += "function()\n" : "string" == typeof e ? n += "string(" + e.length + ') "' + e + '"\n' : "number" == typeof e ? n += "number(" + e + ")\n" : "boolean" == typeof e && (n += "bool(" + e + ")\n")
                            },
                            s = function(e) {
                                var r;
                                if (null === e) n += "NULL\n";
                                else if (void 0 === e) n += "undefined\n";
                                else if ("object" == typeof e) {
                                    n += i(t) + typeof e, t++, n += "(" + function(t) {
                                        var e, n = 0;
                                        for (e in t) t.hasOwnProperty(e) && n++;
                                        return n
                                    }(e) + ") {\n";
                                    for (r in e) n += i(t) + "[" + r + "]=> \n", o(e[r]);
                                    t--, n += i(t) + "}\n"
                                } else o(e)
                            };
                        return 0 == r.length && r.push(this.context), e.forEach(r, function(t) {
                            s(t)
                        }), n
                    },
                    date: function(t, n) {
                        var r;
                        if (void 0 === t) r = new Date;
                        else if (e.lib.is("Date", t)) r = t;
                        else if (e.lib.is("String", t)) r = t.match(/^[0-9]+$/) ? new Date(1e3 * t) : new Date(1e3 * e.lib.strtotime(t));
                        else {
                            if (!e.lib.is("Number", t)) throw new e.Error("Unable to parse date " + t);
                            r = new Date(1e3 * t)
                        }
                        return r
                    },
                    block: function(t) {
                        return this.originalBlockTokens[t] ? e.logic.parse.apply(this, [this.originalBlockTokens[t], this.context]).output : this.blocks[t]
                    },
                    parent: function() {
                        return e.placeholders.parent
                    },
                    attribute: function(t, n, r) {
                        return e.lib.is("Object", t) && t.hasOwnProperty(n) ? "function" == typeof t[n] ? t[n].apply(void 0, r) : t[n] : t[n] || void 0
                    },
                    max: function(t) {
                        return e.lib.is("Object", t) ? (delete t._keys, e.lib.max(t)) : e.lib.max.apply(null, arguments)
                    },
                    min: function(t) {
                        return e.lib.is("Object", t) ? (delete t._keys, e.lib.min(t)) : e.lib.min.apply(null, arguments)
                    },
                    template_from_string: function(t) {
                        return void 0 === t && (t = ""), e.Templates.parsers.twig({
                            options: this.options,
                            data: t
                        })
                    },
                    random: function(t) {
                        function n(t) {
                            var e = Math.floor(Math.random() * r),
                                n = [0, t],
                                i = Math.min.apply(null, n),
                                o = Math.max.apply(null, n);
                            return i + Math.floor((o - i + 1) * e / r)
                        }
                        var r = 2147483648;
                        if (e.lib.is("Number", t)) return n(t);
                        if (e.lib.is("String", t)) return t.charAt(n(t.length - 1));
                        if (e.lib.is("Array", t)) return t[n(t.length - 1)];
                        if (e.lib.is("Object", t)) {
                            var i = Object.keys(t);
                            return t[i[n(i.length - 1)]]
                        }
                        return n(r - 1)
                    },
                    source: function(n, i) {
                        var o, s, a, u = !1;
                        void 0 !== r && void 0 !== r.exports && "undefined" == typeof window ? (s = "fs", a = t + "/" + n) : (s = "ajax", a = n);
                        var l = {
                            id: n,
                            path: a,
                            method: s,
                            parser: "source",
                            async: !1,
                            fetchTemplateSource: !0
                        };
                        void 0 === i && (i = !1);
                        try {
                            o = e.Templates.loadRemote(n, l), void 0 === o || null === o ? o = "" : u = !0
                        } catch (t) {
                            e.log.debug("Twig.functions.source: ", "Problem loading template  ", t)
                        }
                        return u || i ? o : 'Template "{name}" is not defined.'.replace("{name}", n)
                    }
                }, e._function = function(t, n, r) {
                    if (!e.functions[t]) throw "Unable to find function " + t;
                    return e.functions[t](n, r)
                }, e._function.extend = function(t, n) {
                    e.functions[t] = n
                }, e
            }(o || {}),
            o = function(t) {
                "use strict";
                return t.path = {}, t.path.parsePath = function(e, n) {
                    var r = null,
                        n = n || "";
                    if ("object" == typeof e && "object" == typeof e.options && (r = e.options.namespaces), "object" == typeof r && n.indexOf("::") > 0 || n.indexOf("@") >= 0) {
                        for (var i in r) r.hasOwnProperty(i) && (n = n.replace(i + "::", r[i]), n = n.replace("@" + i, r[i]));
                        return n
                    }
                    return t.path.relativePath(e, n)
                }, t.path.relativePath = function(e, r) {
                    var i, o, s, a = "/",
                        u = [],
                        r = r || "";
                    if (e.url) i = void 0 !== e.base ? e.base + ("/" === e.base.charAt(e.base.length - 1) ? "" : "/") : e.url;
                    else if (e.path) {
                        var l = n(98),
                            c = l.sep || a,
                            p = new RegExp("^\\.{1,2}" + c.replace("\\", "\\\\"));
                        r = r.replace(/\//g, c), void 0 !== e.base && null == r.match(p) ? (r = r.replace(e.base, ""), i = e.base + c) : i = l.normalize(e.path), i = i.replace(c + c, c), a = c
                    } else {
                        if (!e.name && !e.id || !e.method || "fs" === e.method || "ajax" === e.method) throw new t.Error("Cannot extend an inline template.");
                        i = e.base || e.name || e.id
                    }
                    for (o = i.split(a), o.pop(), o = o.concat(r.split(a)); o.length > 0;) "." == (s = o.shift()) || (".." == s && u.length > 0 && ".." != u[u.length - 1] ? u.pop() : u.push(s));
                    return u.join(a)
                }, t
            }(o || {}),
            o = function(t) {
                "use strict";
                return t.tests = {
                    empty: function(t) {
                        if (null === t || void 0 === t) return !0;
                        if ("number" == typeof t) return !1;
                        if (t.length && t.length > 0) return !1;
                        for (var e in t)
                            if (t.hasOwnProperty(e)) return !1;
                        return !0
                    },
                    odd: function(t) {
                        return t % 2 == 1
                    },
                    even: function(t) {
                        return t % 2 == 0
                    },
                    divisibleby: function(t, e) {
                        return t % e[0] == 0
                    },
                    defined: function(t) {
                        return void 0 !== t
                    },
                    none: function(t) {
                        return null === t
                    },
                    null: function(t) {
                        return this.none(t)
                    },
                    sameas: function(t, e) {
                        return t === e[0]
                    },
                    iterable: function(e) {
                        return e && (t.lib.is("Array", e) || t.lib.is("Object", e))
                    }
                }, t.test = function(e, n, r) {
                    if (!t.tests[e]) throw "Test " + e + " is not defined.";
                    return t.tests[e](n, r)
                }, t.test.extend = function(e, n) {
                    t.tests[e] = n
                }, t
            }(o || {}),
            o = function(t) {
                "use strict";
                return t.exports = {
                    VERSION: t.VERSION
                }, t.exports.twig = function(e) {
                    var n = e.id,
                        r = {
                            strict_variables: e.strict_variables || !1,
                            autoescape: null != e.autoescape && e.autoescape || !1,
                            allowInlineIncludes: e.allowInlineIncludes || !1,
                            rethrow: e.rethrow || !1,
                            namespaces: e.namespaces
                        };
                    if (t.cache && n && t.validateId(n), void 0 !== e.debug && (t.debug = e.debug), void 0 !== e.trace && (t.trace = e.trace), void 0 !== e.data) return t.Templates.parsers.twig({
                        data: e.data,
                        path: e.hasOwnProperty("path") ? e.path : void 0,
                        module: e.module,
                        id: n,
                        options: r
                    });
                    if (void 0 !== e.ref) {
                        if (void 0 !== e.id) throw new t.Error("Both ref and id cannot be set on a twig.js template.");
                        return t.Templates.load(e.ref)
                    }
                    if (void 0 !== e.method) {
                        if (!t.Templates.isRegisteredLoader(e.method)) throw new t.Error('Loader for "' + e.method + '" is not defined.');
                        return t.Templates.loadRemote(e.name || e.href || e.path || n || void 0, {
                            id: n,
                            method: e.method,
                            parser: e.parser || "twig",
                            base: e.base,
                            module: e.module,
                            precompiled: e.precompiled,
                            async: e.async,
                            options: r
                        }, e.load, e.error)
                    }
                    return void 0 !== e.href ? t.Templates.loadRemote(e.href, {
                        id: n,
                        method: "ajax",
                        parser: e.parser || "twig",
                        base: e.base,
                        module: e.module,
                        precompiled: e.precompiled,
                        async: e.async,
                        options: r
                    }, e.load, e.error) : void 0 !== e.path ? t.Templates.loadRemote(e.path, {
                        id: n,
                        method: "fs",
                        parser: e.parser || "twig",
                        base: e.base,
                        module: e.module,
                        precompiled: e.precompiled,
                        async: e.async,
                        options: r
                    }, e.load, e.error) : void 0
                }, t.exports.extendFilter = function(e, n) {
                    t.filter.extend(e, n)
                }, t.exports.extendFunction = function(e, n) {
                    t._function.extend(e, n)
                }, t.exports.extendTest = function(e, n) {
                    t.test.extend(e, n)
                }, t.exports.extendTag = function(e) {
                    t.logic.extend(e)
                }, t.exports.extend = function(e) {
                    e(t)
                }, t.exports.compile = function(e, n) {
                    var r, i = n.filename,
                        o = n.filename;
                    return r = new t.Template({
                            data: e,
                            path: o,
                            id: i,
                            options: n.settings["twig options"]
                        }),
                        function(t) {
                            return r.render(t)
                        }
                }, t.exports.renderFile = function(e, n, r) {
                    "function" == typeof n && (r = n, n = {}), n = n || {};
                    var i = n.settings || {},
                        o = {
                            path: e,
                            base: i.views,
                            load: function(t) {
                                r(null, t.render(n))
                            }
                        },
                        s = i["twig options"];
                    if (s)
                        for (var a in s) s.hasOwnProperty(a) && (o[a] = s[a]);
                    t.exports.twig(o)
                }, t.exports.__express = t.exports.renderFile, t.exports.cache = function(e) {
                    t.cache = e
                }, t.exports.path = t.path, t
            }(o || {}),
            o = function(t) {
                return t.compiler = {
                    module: {}
                }, t.compiler.compile = function(e, n) {
                    var r, i = JSON.stringify(e.tokens),
                        o = e.id;
                    if (n.module) {
                        if (void 0 === t.compiler.module[n.module]) throw new t.Error("Unable to find module type " + n.module);
                        r = t.compiler.module[n.module](o, i, n.twig)
                    } else r = t.compiler.wrap(o, i);
                    return r
                }, t.compiler.module = {
                    amd: function(e, n, r) {
                        return 'define(["' + r + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + t.compiler.wrap(e, n) + "\n\treturn templates;\n});"
                    },
                    node: function(e, n) {
                        return 'var twig = require("twig").twig;\nexports.template = ' + t.compiler.wrap(e, n)
                    },
                    cjs2: function(e, n, r) {
                        return 'module.declare([{ twig: "' + r + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + t.compiler.wrap(e, n) + "\n});"
                    }
                }, t.compiler.wrap = function(t, e) {
                    return 'twig({id:"' + t.replace('"', '\\"') + '", data:' + e + ", precompiled: true});\n"
                }, t
            }(o || {});
        void 0 !== r && r.declare ? r.declare([], function(t, e, n) {
            for (key in o.exports) o.exports.hasOwnProperty(key) && (e[key] = o.exports[key])
        }) : void 0 !== (i = function() {
            return o.exports
        }.call(e, n, e, r)) && (r.exports = i)
    }).call(e, "/", n(15)(t))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = n(101),
        a = r(s),
        u = n(0),
        l = r(u),
        c = n(117),
        p = r(c),
        f = n(10),
        h = n(118),
        d = n(11),
        y = n(38),
        v = n(39),
        g = n(49),
        m = function() {
            function t() {
                i(this, t), this.data, this.oldPhotoIndex = null, this.routesFn = {
                    PHOTO: function(t) {
                        l.default.dispatch((0, f.navigate)(t.path, t.params))
                    },
                    NOT_FOUND: function(t) {
                        l.default.dispatch((0, f.navigate)(y.NOT_FOUND, t.params))
                    }
                }
            }
            return o(t, [{
                key: "preRouting",
                value: function(t, e) {
                    if ("/" === this.getPathFromUrl(t.path)) {
                        var n = l.default.getState().photos.collections[0].photos[0],
                            r = (0, d.getCurrentCollectionByPhotoSlug)(n.slug);
                        l.default.dispatch((0, f.setNewCollection)(!0)), l.default.dispatch((0, h.setCurrentCategory)(r)), l.default.dispatch((0, h.setCurrentPhoto)(n))
                    }
                    e()
                }
            }, {
                key: "preRoutingPhoto",
                value: function(t, e) {
                    var n = this.getPathFromUrl(t.path),
                        r = (0, d.getCurrentPhotoBySlug)(n),
                        i = (0, d.getCurrentCollectionByPhotoSlug)(r.slug),
                        o = l.default.getState().photos.current_collection;
                    !o || o && o.id !== i.id ? l.default.dispatch((0, f.setNewCollection)(!0)) : l.default.dispatch((0, f.setNewCollection)(!1)), l.default.dispatch((0, h.setCurrentCategory)(i)), l.default.dispatch((0, h.setCurrentPhoto)(r));
                    var s = (0, d.getCurrentPhotoIndex)(),
                        a = l.default.getState().photos.current_collection.photos.length,
                        u = 0;
                    null !== this.oldPhotoIndex && (u = 0 === s && this.oldPhotoIndex === o.photos.length - 1 ? 1 : s === a - 1 && 0 === this.oldPhotoIndex ? -1 : s === +this.oldPhotoIndex + 1 ? 1 : s === +this.oldPhotoIndex - 1 ? -1 : 0), l.default.dispatch((0, f.setDirection)(u)), this.oldPhotoIndex = s, e()
                }
            }, {
                key: "loadMainData",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: v.MAIN_ENDPOINT,
                            success: function(n) {
                                t.data = n, e(n)
                            },
                            error: function(t, e) {
                                n()
                            }
                        })
                    })
                }
            }, {
                key: "initRouter",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.loadMainData().then(function(n) {
                            l.default.dispatch((0, f.setRoutes)(p.default)), l.default.dispatch((0, h.setPhotos)(n.collections));
                            for (var r in p.default) {
                                (function(e) {
                                    if (!p.default.hasOwnProperty(e)) return "continue";
                                    var n = p.default[e];
                                    (0, a.default)(n.url, function(e, n) {
                                        return t.preRouting(e, n)
                                    }, function(e) {
                                        t.routesFn[n.id](e)
                                    })
                                })(r)
                            }
                            for (var i in n.collections)
                                if (n.collections.hasOwnProperty(i)) {
                                    var o = n.collections[i],
                                        s = !0,
                                        u = !1,
                                        c = void 0;
                                    try {
                                        for (var d, y = o.photos[Symbol.iterator](); !(s = (d = y.next()).done); s = !0) {
                                            var v = d.value;
                                            (0, a.default)("/" + v.slug, function(e, n) {
                                                return t.preRoutingPhoto(e, n)
                                            }, t.routesFn.PHOTO)
                                        }
                                    } catch (t) {
                                        u = !0, c = t
                                    } finally {
                                        try {
                                            !s && y.return && y.return()
                                        } finally {
                                            if (u) throw c
                                        }
                                    }
                                }(0, a.default)("*", function(e, n) {
                                    return t.preRouting(e, n)
                                }, t.routesFn.NOT_FOUND), e()
                        })
                    })
                }
            }, {
                key: "configureRoute",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return t.base && a.default.base(t.base), a.default
                }
            }, {
                key: "getNavigationDirection",
                value: function(t) {}
            }, {
                key: "getPathFromUrl",
                value: function(t) {
                    return t.split("?")[0]
                }
            }, {
                key: "navigate",
                value: function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!(0, g.isString)(t)) return !1;
                    t.indexOf(window.location.origin) >= 0 && (t = t.replace(window.location.origin, ""));
                    var e = new RegExp(/^.*\//),
                        n = e.exec(window.location.href);
                    t.indexOf(n) >= 0 && (t = t.replace(window.location.origin, ""), t = t.replace(n, "")), window.ga && (ga("set", "page", t), ga("send", "pageview"));
                    this.getNavigationDirection(t);
                    (0, a.default)("/" + t)
                }
            }]), t
        }();
    t.exports = new m
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (p === clearTimeout) return clearTimeout(t);
        if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
        try {
            return p(t)
        } catch (e) {
            try {
                return p.call(null, t)
            } catch (e) {
                return p.call(this, t)
            }
        }
    }

    function s() {
        y && h && (y = !1, h.length ? d = h.concat(d) : v = -1, d.length && a())
    }

    function a() {
        if (!y) {
            var t = i(s);
            y = !0;
            for (var e = d.length; e;) {
                for (h = d, d = []; ++v < e;) h && h[v].run();
                v = -1, e = d.length
            }
            h = null, y = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function l() {}
    var c, p, f = t.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            c = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            p = r
        }
    }();
    var h, d = [],
        y = !1,
        v = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || y || i(a)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = Object.keys(t).sort(function(e, n) {
            var r = t[e],
                i = t[n];
            return "number" == typeof r && "string" == typeof i ? -1 : "number" == typeof i && "string" == typeof r ? 1 : r >= i ? 1 : -1
        });
        return _(t, function(t, n, r) {
            var i = e.indexOf(r); - 1 !== i && (t[r] = i)
        })
    }

    function i(t, e) {
        var n = e[t];
        return _(e, function(t, r, i) {
            "number" == typeof r && e[i] ? t[i] = n < e[i] : t[i] = !1
        })
    }

    function o(t, e) {
        return _(e, function(n, r, i) {
            "number" == typeof r && e[i] ? n[i] = i === t : n[i] = !1
        })
    }

    function s(t, e) {
        var n = e[t];
        return _(e, function(t, r, i) {
            t[i] = "number" == typeof r && n > e[i]
        })
    }

    function a(t, e, n) {
        return void 0 === t ? n : Object.keys(e).reduce(function(n, r) {
            return t(e[r]).matches ? r : n
        }, n)
    }

    function u(t) {
        if (void 0 === t) return m;
        var e = {
            portrait: "(orientation: portrait)",
            landscape: "(orientation: landscape)"
        };
        return Object.keys(e).reduce(function(n, r) {
            return t(e[r]).matches ? r : n
        }, m)
    }

    function l(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function c(t, e) {
        return t.getIn ? t.getIn(e) : e.reduce(function(t, e) {
            return t[e]
        }, t)
    }

    function p(t) {
        return t.keys ? Array.from(t.keys()) : Object.keys(t)
    }

    function f(t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, r = [], i = [r]; i.length > 0;) {
            var o = function() {
                var r = i.shift();
                if (r.length > n) return "continue";
                var o = c(t, r);
                if (o) {
                    if (o[e]) return {
                        v: r
                    };
                    i.push.apply(i, l(p(o).map(function(t) {
                        return r.concat(t)
                    })))
                }
            }();
            switch (o) {
                case "continue":
                    continue;
                default:
                    if ("object" === (void 0 === o ? "undefined" : x(o))) return o.v
            }
        }
        return !1
    }

    function h(t) {
        var e = t.getState(),
            n = f(e, "_responsiveState");
        if (!n) throw new Error("Could not find responsive state reducer. If you are still running into trouble, please open a ticket on github.");
        return c(e, n).breakpoints
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var d = n(51),
        y = n.n(d),
        v = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        g = {
            extraSmall: 480,
            small: 768,
            medium: 992,
            large: 1200
        },
        m = null,
        _ = function(t, e) {
            var n = {};
            return Object.keys(t).forEach(function(r) {
                return e(n, t[r], r)
            }), n
        },
        b = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.initialMediaType,
                l = e.infinity,
                c = void 0 === l ? "infinity" : l,
                p = e.extraFields,
                f = void 0 === p ? function() {
                    return {}
                } : p;
            t || (t = g), t[c] = 1 / 0;
            var h = y.a.asObject(t),
                d = r(t);
            return function(e, r) {
                var l = r.type,
                    p = r.matchMedia;
                if ("redux-responsive/CALCULATE_RESPONSIVE_STATE" === l || void 0 === e) {
                    var y = !e && n ? n : a(p, h, c),
                        g = u(p),
                        m = {
                            _responsiveState: !0,
                            lessThan: i(y, d),
                            greaterThan: s(y, d),
                            is: o(y, t),
                            mediaType: y,
                            orientation: g,
                            breakpoints: t
                        };
                    return v({}, m, f(m))
                }
                return e
            }
        },
        w = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                type: "redux-responsive/CALCULATE_RESPONSIVE_STATE",
                innerWidth: t.innerWidth,
                innerHeight: t.innerHeight,
                matchMedia: t.matchMedia
            }
        },
        x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        T = h,
        O = function(t) {
            var e = t.store,
                n = t.window,
                r = t.calculateInitialState,
                i = function() {
                    return e.dispatch(w(n))
                },
                o = y.a.asObject(T(e));
            Object.keys(o).forEach(function(t) {
                n.matchMedia(o[t]).addListener(function(t) {
                    t.matches && i()
                })
            }), n.addEventListener("orientationchange", i), r && i()
        },
        k = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.calculateInitialState,
                n = void 0 === e || e;
            return function(t) {
                return function() {
                    var e = t.apply(void 0, arguments);
                    return "undefined" != typeof window && void 0 !== window.matchMedia && O({
                        store: e,
                        window: window,
                        calculateInitialState: n
                    }), e
                }
            }
        };
    n.d(e, "createResponsiveStateReducer", function() {
        return S
    }), n.d(e, "createResponsiveStoreEnhancer", function() {
        return P
    }), n.d(e, "responsiveStateReducer", function() {
        return E
    }), n.d(e, "responsiveStoreEnhancer", function() {
        return j
    }), n.d(e, "CALCULATE_RESPONSIVE_STATE", function() {
        return "redux-responsive/CALCULATE_RESPONSIVE_STATE"
    }), n.d(e, "calculateResponsiveState", function() {
        return w
    });
    var S = b,
        P = k,
        E = S(),
        j = P()
}, function(t, e, n) {
    var r = n(6),
        i = n(1),
        o = r(i, "Map");
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(138),
        o = n(145),
        s = n(147),
        a = n(148),
        u = n(149);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function(t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
    var r = 9007199254740991;
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        e = i(e, t);
        for (var n = 0, r = e.length; null != t && n < r;) t = t[o(e[n++])];
        return n && n == r ? t : void 0
    }
    var i = n(23),
        o = n(13);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        if (i(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || (a.test(t) || !s.test(t) || null != e && t in Object(e))
    }
    var i = n(2),
        o = n(24),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PHOTO = "PHOTO", e.REDIRECT = "REDIRECT", e.NOT_FOUND = "NOT_FOUND"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = (e.JSON_ENDPOINTS = "./assets/jsons/", e.MAIN_ENDPOINT = "./assets/jsons/results.json", e.BASE_URL = window.location.origin || window.location.protocol + "//" + window.location.host);
    e.IS_DEV = "http://locadsdlhost:3000" === r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(0),
        u = r(a),
        l = n(76),
        c = r(l),
        p = function() {
            function t() {
                i(this, t), this._promises = {}, this._states = {}, this._storeEvents = {}, this.subscriptions = {}
            }
            return s(t, [{
                key: "promises",
                set: function(t) {
                    this._promises || (this._promises = {});
                    for (var e in t) this._promises[e] = t[e]
                },
                get: function() {
                    return this._promises
                }
            }, {
                key: "states",
                set: function(t) {
                    for (var e in t) this._states[e] = t[e]
                },
                get: function() {
                    return this._states
                }
            }, {
                key: "storeEvents",
                set: function(t) {
                    for (var e in t) t[e] && (this._storeEvents[e] = t[e]);
                    this.subscribe()
                },
                get: function() {
                    return this._storeEvents
                }
            }]), s(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        if (t.promises.init.resolve = e, t.promises.init.reject = n, t.states.isInit) return void t.promises.init.reject();
                        t.initComponent()
                    })
                }
            }, {
                key: "initComponent",
                value: function() {
                    this.onInit()
                }
            }, {
                key: "onInit",
                value: function() {
                    this.setState({
                        isInit: !0,
                        canUpdate: !0
                    }), this.promises.init.resolve()
                }
            }, {
                key: "setState",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("object" === (void 0 === t ? "undefined" : o(t)) || "function" == typeof t || null === t) {
                        for (var r in t) this.states[r] = t[r];
                        e && e(), n && this.render()
                    }
                }
            }, {
                key: "subscribe",
                value: function(t) {
                    if (t) {
                        this.subscriptions[t.path] && this.subscriptions[t.path]();
                        var e = t.cb;
                        if ("function" != typeof e && (e = this[e]), !e) return;
                        this._storeEvents[t.path] = e;
                        var n = (0, c.default)(u.default.getState, t.path);
                        return void(this.subscriptions[t.path] = u.default.subscribe(n(e)))
                    }
                    for (var r in this.storeEvents)
                        if (this.storeEvents[r]) {
                            this.subscriptions[r] && this.subscriptions[r]();
                            var i = this.storeEvents[r];
                            if ("function" != typeof i && (i = this[i]), i) {
                                var o = (0, c.default)(u.default.getState, r);
                                this.subscriptions[r] = u.default.subscribe(o(i))
                            }
                        }
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (t) return void(this.subscriptions[t] && (this.subscriptions[t](), delete this.subscriptions[t]));
                    for (var e in this.subscriptions) this.subscriptions[e] && this.subscriptions[e]();
                    this.subscriptions = {}
                }
            }, {
                key: "dispatch",
                value: function(t) {
                    u.default.dispatch(t)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.unsubscribe()
                }
            }, {
                key: "resize",
                value: function() {}
            }]), t
        }();
    e.default = p
}, function(t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(4),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = s, this.__views__ = []
    }
    var i = n(42),
        o = n(44),
        s = 4294967295;
    r.prototype = i(o.prototype), r.prototype.constructor = r, t.exports = r
}, function(t, e) {
    function n() {}
    t.exports = n
}, function(t, e) {
    function n(t) {
        return t.placeholder
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = function() {
            function t() {
                r(this, t), this._type = "CommonModel", this._eventTypes = [], this._callbackFunctions = [], this._dataObj = {
                    createdAt: new Date,
                    rafCallStack: [],
                    scroll: {
                        targetY: 0,
                        currentY: 0
                    },
                    mouse: {
                        x: 0,
                        y: 0
                    }
                }
            }
            return i(t, [{
                key: "on",
                value: function(t, e) {
                    -1 === this._eventTypes.findIndex(function(e) {
                        return e === t
                    }) && this._eventTypes.push(t), this._callbackFunctions[t] ? this._callbackFunctions[t].push(e) : (this._callbackFunctions[t] = [], this._callbackFunctions[t].push(e))
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (void 0 !== this._callbackFunctions[t])
                        for (var n = 0; n < this._callbackFunctions[t].length; n++) e === this._callbackFunctions[t][n] && this._callbackFunctions[t].splice(n, 1)
                }
            }, {
                key: "offRAF",
                value: function(t) {
                    for (var e = 0; e < this.get("rafCallStack").length; e++) {
                        this.get("rafCallStack")[e] === t && e > -1 && this.get("rafCallStack").splice(e, 1)
                    }
                }
            }, {
                key: "set",
                value: function(t, e, n) {
                    var r = this;
                    if (n) this._dataObj[t] = e;
                    else if (this._dataObj[t] !== e) {
                        var i = this._dataObj[t];
                        this._dataObj[t] = e, this._eventTypes.forEach(function(n, o) {
                            r._callbackFunctions[n].forEach(function(o, s) {
                                n.indexOf("change:") > -1 ? n === "change:" + t && o.call(r, e, i) : o.call(r, e, i)
                            })
                        })
                    }
                }
            }, {
                key: "get",
                value: function(t) {
                    return this._dataObj[t]
                }
            }]), t
        }();
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                n = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], i = 0; i < n;) {
                var o = e[i];
                if (t.call(r, o, i, e)) return i;
                i++
            }
            return -1
        }
    }), e.default = new o
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(3),
        c = r(l),
        p = n(7),
        f = r(p),
        h = n(257),
        d = r(h),
        y = function(t) {
            function e() {
                return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return s(e, t), a(e, [{
                key: "setupDOM",
                value: function() {
                    f.default.set(this.$el, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "initTL",
                value: function() {
                    var t = this;
                    this.TL.show = new d.default({
                        paused: !0,
                        onComplete: function() {
                            return t.onShown()
                        }
                    }), this.TL.show.to(this.$el, .3, {
                        autoAlpha: 1,
                        ease: Cubic.easeOut
                    }), this.TL.hide = new d.default({
                        paused: !0,
                        onComplete: function() {
                            return t.onHidden()
                        }
                    }), this.TL.hide.to(this.$el, .3, {
                        autoAlpha: 0,
                        ease: Cubic.easeOut
                    })
                }
            }, {
                key: "onDOMInit",
                value: function() {
                    document.getElementById("content").appendChild(this.el), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDOMInit", this).call(this)
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.TL.show.play(0)
                    }, 0)
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.TL.hide.play(0)
                    }, 0)
                }
            }]), e
        }(c.default);
    e.default = y
}, function(t, e, n) {
    var r;
    (function() {
        ! function(i, o) {
            void 0 !== (r = function() {
                return o(i)
            }.call(e, n, e, t)) && (t.exports = r)
        }(this, function(t) {
            var e = function() {
                function e(t) {
                    return null == t ? String(t) : G[Z.call(t)] || "object"
                }

                function n(t) {
                    return "function" == e(t)
                }

                function r(t) {
                    return null != t && t == t.window
                }

                function i(t) {
                    return null != t && t.nodeType == t.DOCUMENT_NODE
                }

                function o(t) {
                    return "object" == e(t)
                }

                function s(t) {
                    return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype
                }

                function a(t) {
                    var e = !!t && "length" in t && t.length,
                        n = k.type(t);
                    return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }

                function u(t) {
                    return A.call(t, function(t) {
                        return null != t
                    })
                }

                function l(t) {
                    return t.length > 0 ? k.fn.concat.apply([], t) : t
                }

                function c(t) {
                    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }

                function p(t) {
                    return t in R ? R[t] : R[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
                }

                function f(t, e) {
                    return "number" != typeof e || L[c(t)] ? e : e + "px"
                }

                function h(t) {
                    var e, n;
                    return N[t] || (e = I.createElement(t), I.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), N[t] = n), N[t]
                }

                function d(t) {
                    return "children" in t ? M.call(t.children) : k.map(t.childNodes, function(t) {
                        if (1 == t.nodeType) return t
                    })
                }

                function y(t, e) {
                    var n, r = t ? t.length : 0;
                    for (n = 0; n < r; n++) this[n] = t[n];
                    this.length = r, this.selector = e || ""
                }

                function v(t, e, n) {
                    for (O in e) n && (s(e[O]) || tt(e[O])) ? (s(e[O]) && !s(t[O]) && (t[O] = {}), tt(e[O]) && !tt(t[O]) && (t[O] = []), v(t[O], e[O], n)) : e[O] !== T && (t[O] = e[O])
                }

                function g(t, e) {
                    return null == e ? k(t) : k(t).filter(e)
                }

                function m(t, e, r, i) {
                    return n(e) ? e.call(t, r, i) : e
                }

                function _(t, e, n) {
                    null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
                }

                function b(t, e) {
                    var n = t.className || "",
                        r = n && n.baseVal !== T;
                    if (e === T) return r ? n.baseVal : n;
                    r ? n.baseVal = e : t.className = e
                }

                function w(t) {
                    try {
                        return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t
                    } catch (e) {
                        return t
                    }
                }

                function x(t, e) {
                    e(t);
                    for (var n = 0, r = t.childNodes.length; n < r; n++) x(t.childNodes[n], e)
                }
                var T, O, k, S, P, E, j = [],
                    C = j.concat,
                    A = j.filter,
                    M = j.slice,
                    I = t.document,
                    N = {},
                    R = {},
                    L = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    D = /^\s*<(\w+|!)[^>]*>/,
                    F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    $ = /^(?:body|html)$/i,
                    U = /([A-Z])/g,
                    H = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    X = ["after", "prepend", "before", "append"],
                    B = I.createElement("table"),
                    Y = I.createElement("tr"),
                    W = {
                        tr: I.createElement("tbody"),
                        tbody: B,
                        thead: B,
                        tfoot: B,
                        td: Y,
                        th: Y,
                        "*": I.createElement("div")
                    },
                    V = /complete|loaded|interactive/,
                    q = /^[\w-]*$/,
                    G = {},
                    Z = G.toString,
                    Q = {},
                    J = I.createElement("div"),
                    K = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        for: "htmlFor",
                        class: "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    tt = Array.isArray || function(t) {
                        return t instanceof Array
                    };
                return Q.matches = function(t, e) {
                    if (!e || !t || 1 !== t.nodeType) return !1;
                    var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                    if (n) return n.call(t, e);
                    var r, i = t.parentNode,
                        o = !i;
                    return o && (i = J).appendChild(t), r = ~Q.qsa(i, e).indexOf(t), o && J.removeChild(t), r
                }, P = function(t) {
                    return t.replace(/-+(.)?/g, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }, E = function(t) {
                    return A.call(t, function(e, n) {
                        return t.indexOf(e) == n
                    })
                }, Q.fragment = function(t, e, n) {
                    var r, i, o;
                    return F.test(t) && (r = k(I.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(z, "<$1></$2>")), e === T && (e = D.test(t) && RegExp.$1), e in W || (e = "*"), o = W[e], o.innerHTML = "" + t, r = k.each(M.call(o.childNodes), function() {
                        o.removeChild(this)
                    })), s(n) && (i = k(r), k.each(n, function(t, e) {
                        H.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
                    })), r
                }, Q.Z = function(t, e) {
                    return new y(t, e)
                }, Q.isZ = function(t) {
                    return t instanceof Q.Z
                }, Q.init = function(t, e) {
                    var r;
                    if (!t) return Q.Z();
                    if ("string" == typeof t)
                        if (t = t.trim(), "<" == t[0] && D.test(t)) r = Q.fragment(t, RegExp.$1, e), t = null;
                        else {
                            if (e !== T) return k(e).find(t);
                            r = Q.qsa(I, t)
                        }
                    else {
                        if (n(t)) return k(I).ready(t);
                        if (Q.isZ(t)) return t;
                        if (tt(t)) r = u(t);
                        else if (o(t)) r = [t], t = null;
                        else if (D.test(t)) r = Q.fragment(t.trim(), RegExp.$1, e), t = null;
                        else {
                            if (e !== T) return k(e).find(t);
                            r = Q.qsa(I, t)
                        }
                    }
                    return Q.Z(r, t)
                }, k = function(t, e) {
                    return Q.init(t, e)
                }, k.extend = function(t) {
                    var e, n = M.call(arguments, 1);
                    return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                        v(t, n, e)
                    }), t
                }, Q.qsa = function(t, e) {
                    var n, r = "#" == e[0],
                        i = !r && "." == e[0],
                        o = r || i ? e.slice(1) : e,
                        s = q.test(o);
                    return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : M.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                }, k.contains = I.documentElement.contains ? function(t, e) {
                    return t !== e && t.contains(e)
                } : function(t, e) {
                    for (; e && (e = e.parentNode);)
                        if (e === t) return !0;
                    return !1
                }, k.type = e, k.isFunction = n, k.isWindow = r, k.isArray = tt, k.isPlainObject = s, k.isEmptyObject = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }, k.isNumeric = function(t) {
                    var e = Number(t),
                        n = typeof t;
                    return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
                }, k.inArray = function(t, e, n) {
                    return j.indexOf.call(e, t, n)
                }, k.camelCase = P, k.trim = function(t) {
                    return null == t ? "" : String.prototype.trim.call(t)
                }, k.uuid = 0, k.support = {}, k.expr = {}, k.noop = function() {}, k.map = function(t, e) {
                    var n, r, i, o = [];
                    if (a(t))
                        for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && o.push(n);
                    else
                        for (i in t) null != (n = e(t[i], i)) && o.push(n);
                    return l(o)
                }, k.each = function(t, e) {
                    var n, r;
                    if (a(t)) {
                        for (n = 0; n < t.length; n++)
                            if (!1 === e.call(t[n], n, t[n])) return t
                    } else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r])) return t;
                    return t
                }, k.grep = function(t, e) {
                    return A.call(t, e)
                }, t.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                    G["[object " + e + "]"] = e.toLowerCase()
                }), k.fn = {
                    constructor: Q.Z,
                    length: 0,
                    forEach: j.forEach,
                    reduce: j.reduce,
                    push: j.push,
                    sort: j.sort,
                    splice: j.splice,
                    indexOf: j.indexOf,
                    concat: function() {
                        var t, e, n = [];
                        for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = Q.isZ(e) ? e.toArray() : e;
                        return C.apply(Q.isZ(this) ? this.toArray() : this, n)
                    },
                    map: function(t) {
                        return k(k.map(this, function(e, n) {
                            return t.call(e, n, e)
                        }))
                    },
                    slice: function() {
                        return k(M.apply(this, arguments))
                    },
                    ready: function(t) {
                        return V.test(I.readyState) && I.body ? t(k) : I.addEventListener("DOMContentLoaded", function() {
                            t(k)
                        }, !1), this
                    },
                    get: function(t) {
                        return t === T ? M.call(this) : this[t >= 0 ? t : t + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function(t) {
                        return j.every.call(this, function(e, n) {
                            return !1 !== t.call(e, n, e)
                        }), this
                    },
                    filter: function(t) {
                        return n(t) ? this.not(this.not(t)) : k(A.call(this, function(e) {
                            return Q.matches(e, t)
                        }))
                    },
                    add: function(t, e) {
                        return k(E(this.concat(k(t, e))))
                    },
                    is: function(t) {
                        return this.length > 0 && Q.matches(this[0], t)
                    },
                    not: function(t) {
                        var e = [];
                        if (n(t) && t.call !== T) this.each(function(n) {
                            t.call(this, n) || e.push(this)
                        });
                        else {
                            var r = "string" == typeof t ? this.filter(t) : a(t) && n(t.item) ? M.call(t) : k(t);
                            this.forEach(function(t) {
                                r.indexOf(t) < 0 && e.push(t)
                            })
                        }
                        return k(e)
                    },
                    has: function(t) {
                        return this.filter(function() {
                            return o(t) ? k.contains(this, t) : k(this).find(t).size()
                        })
                    },
                    eq: function(t) {
                        return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                    },
                    first: function() {
                        var t = this[0];
                        return t && !o(t) ? t : k(t)
                    },
                    last: function() {
                        var t = this[this.length - 1];
                        return t && !o(t) ? t : k(t)
                    },
                    find: function(t) {
                        var e = this;
                        return t ? "object" == typeof t ? k(t).filter(function() {
                            var t = this;
                            return j.some.call(e, function(e) {
                                return k.contains(e, t)
                            })
                        }) : 1 == this.length ? k(Q.qsa(this[0], t)) : this.map(function() {
                            return Q.qsa(this, t)
                        }) : k()
                    },
                    closest: function(t, e) {
                        var n = [],
                            r = "object" == typeof t && k(t);
                        return this.each(function(o, s) {
                            for (; s && !(r ? r.indexOf(s) >= 0 : Q.matches(s, t));) s = s !== e && !i(s) && s.parentNode;
                            s && n.indexOf(s) < 0 && n.push(s)
                        }), k(n)
                    },
                    parents: function(t) {
                        for (var e = [], n = this; n.length > 0;) n = k.map(n, function(t) {
                            if ((t = t.parentNode) && !i(t) && e.indexOf(t) < 0) return e.push(t), t
                        });
                        return g(e, t)
                    },
                    parent: function(t) {
                        return g(E(this.pluck("parentNode")), t)
                    },
                    children: function(t) {
                        return g(this.map(function() {
                            return d(this)
                        }), t)
                    },
                    contents: function() {
                        return this.map(function() {
                            return this.contentDocument || M.call(this.childNodes)
                        })
                    },
                    siblings: function(t) {
                        return g(this.map(function(t, e) {
                            return A.call(d(e.parentNode), function(t) {
                                return t !== e
                            })
                        }), t)
                    },
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(t) {
                        return k.map(this, function(e) {
                            return e[t]
                        })
                    },
                    show: function() {
                        return this.each(function() {
                            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                        })
                    },
                    replaceWith: function(t) {
                        return this.before(t).remove()
                    },
                    wrap: function(t) {
                        var e = n(t);
                        if (this[0] && !e) var r = k(t).get(0),
                            i = r.parentNode || this.length > 1;
                        return this.each(function(n) {
                            k(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r)
                        })
                    },
                    wrapAll: function(t) {
                        if (this[0]) {
                            k(this[0]).before(t = k(t));
                            for (var e;
                                (e = t.children()).length;) t = e.first();
                            k(t).append(this)
                        }
                        return this
                    },
                    wrapInner: function(t) {
                        var e = n(t);
                        return this.each(function(n) {
                            var r = k(this),
                                i = r.contents(),
                                o = e ? t.call(this, n) : t;
                            i.length ? i.wrapAll(o) : r.append(o)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            k(this).replaceWith(k(this).children())
                        }), this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(t) {
                        return this.each(function() {
                            var e = k(this);
                            (t === T ? "none" == e.css("display") : t) ? e.show(): e.hide()
                        })
                    },
                    prev: function(t) {
                        return k(this.pluck("previousElementSibling")).filter(t || "*")
                    },
                    next: function(t) {
                        return k(this.pluck("nextElementSibling")).filter(t || "*")
                    },
                    html: function(t) {
                        return 0 in arguments ? this.each(function(e) {
                            var n = this.innerHTML;
                            k(this).empty().append(m(this, t, e, n))
                        }) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function(t) {
                        return 0 in arguments ? this.each(function(e) {
                            var n = m(this, t, e, this.textContent);
                            this.textContent = null == n ? "" : "" + n
                        }) : 0 in this ? this.pluck("textContent").join("") : null
                    },
                    attr: function(t, e) {
                        var n;
                        return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                            if (1 === this.nodeType)
                                if (o(t))
                                    for (O in t) _(this, O, t[O]);
                                else _(this, t, m(this, e, n, this.getAttribute(t)))
                        }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : T
                    },
                    removeAttr: function(t) {
                        return this.each(function() {
                            1 === this.nodeType && t.split(" ").forEach(function(t) {
                                _(this, t)
                            }, this)
                        })
                    },
                    prop: function(t, e) {
                        return t = K[t] || t, 1 in arguments ? this.each(function(n) {
                            this[t] = m(this, e, n, this[t])
                        }) : this[0] && this[0][t]
                    },
                    removeProp: function(t) {
                        return t = K[t] || t, this.each(function() {
                            delete this[t]
                        })
                    },
                    data: function(t, e) {
                        var n = "data-" + t.replace(U, "-$1").toLowerCase(),
                            r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                        return null !== r ? w(r) : T
                    },
                    val: function(t) {
                        return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                            this.value = m(this, t, e, this.value)
                        })) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
                            return this.selected
                        }).pluck("value") : this[0].value)
                    },
                    offset: function(e) {
                        if (e) return this.each(function(t) {
                            var n = k(this),
                                r = m(this, e, t, n.offset()),
                                i = n.offsetParent().offset(),
                                o = {
                                    top: r.top - i.top,
                                    left: r.left - i.left
                                };
                            "static" == n.css("position") && (o.position = "relative"), n.css(o)
                        });
                        if (!this.length) return null;
                        if (I.documentElement !== this[0] && !k.contains(I.documentElement, this[0])) return {
                            top: 0,
                            left: 0
                        };
                        var n = this[0].getBoundingClientRect();
                        return {
                            left: n.left + t.pageXOffset,
                            top: n.top + t.pageYOffset,
                            width: Math.round(n.width),
                            height: Math.round(n.height)
                        }
                    },
                    css: function(t, n) {
                        if (arguments.length < 2) {
                            var r = this[0];
                            if ("string" == typeof t) {
                                if (!r) return;
                                return r.style[P(t)] || getComputedStyle(r, "").getPropertyValue(t)
                            }
                            if (tt(t)) {
                                if (!r) return;
                                var i = {},
                                    o = getComputedStyle(r, "");
                                return k.each(t, function(t, e) {
                                    i[e] = r.style[P(e)] || o.getPropertyValue(e)
                                }), i
                            }
                        }
                        var s = "";
                        if ("string" == e(t)) n || 0 === n ? s = c(t) + ":" + f(t, n) : this.each(function() {
                            this.style.removeProperty(c(t))
                        });
                        else
                            for (O in t) t[O] || 0 === t[O] ? s += c(O) + ":" + f(O, t[O]) + ";" : this.each(function() {
                                this.style.removeProperty(c(O))
                            });
                        return this.each(function() {
                            this.style.cssText += ";" + s
                        })
                    },
                    index: function(t) {
                        return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(t) {
                        return !!t && j.some.call(this, function(t) {
                            return this.test(b(t))
                        }, p(t))
                    },
                    addClass: function(t) {
                        return t ? this.each(function(e) {
                            if ("className" in this) {
                                S = [];
                                var n = b(this);
                                m(this, t, e, n).split(/\s+/g).forEach(function(t) {
                                    k(this).hasClass(t) || S.push(t)
                                }, this), S.length && b(this, n + (n ? " " : "") + S.join(" "))
                            }
                        }) : this
                    },
                    removeClass: function(t) {
                        return this.each(function(e) {
                            if ("className" in this) {
                                if (t === T) return b(this, "");
                                S = b(this), m(this, t, e, S).split(/\s+/g).forEach(function(t) {
                                    S = S.replace(p(t), " ")
                                }), b(this, S.trim())
                            }
                        })
                    },
                    toggleClass: function(t, e) {
                        return t ? this.each(function(n) {
                            var r = k(this);
                            m(this, t, n, b(this)).split(/\s+/g).forEach(function(t) {
                                (e === T ? !r.hasClass(t) : e) ? r.addClass(t): r.removeClass(t)
                            })
                        }) : this
                    },
                    scrollTop: function(t) {
                        if (this.length) {
                            var e = "scrollTop" in this[0];
                            return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                                this.scrollTop = t
                            } : function() {
                                this.scrollTo(this.scrollX, t)
                            })
                        }
                    },
                    scrollLeft: function(t) {
                        if (this.length) {
                            var e = "scrollLeft" in this[0];
                            return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                                this.scrollLeft = t
                            } : function() {
                                this.scrollTo(t, this.scrollY)
                            })
                        }
                    },
                    position: function() {
                        if (this.length) {
                            var t = this[0],
                                e = this.offsetParent(),
                                n = this.offset(),
                                r = $.test(e[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : e.offset();
                            return n.top -= parseFloat(k(t).css("margin-top")) || 0, n.left -= parseFloat(k(t).css("margin-left")) || 0, r.top += parseFloat(k(e[0]).css("border-top-width")) || 0, r.left += parseFloat(k(e[0]).css("border-left-width")) || 0, {
                                top: n.top - r.top,
                                left: n.left - r.left
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var t = this.offsetParent || I.body; t && !$.test(t.nodeName) && "static" == k(t).css("position");) t = t.offsetParent;
                            return t
                        })
                    }
                }, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(t) {
                    var e = t.replace(/./, function(t) {
                        return t[0].toUpperCase()
                    });
                    k.fn[t] = function(n) {
                        var o, s = this[0];
                        return n === T ? r(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                            s = k(this), s.css(t, m(this, n, e, s[t]()))
                        })
                    }
                }), X.forEach(function(n, r) {
                    var i = r % 2;
                    k.fn[n] = function() {
                        var n, o, s = k.map(arguments, function(t) {
                                var r = [];
                                return n = e(t), "array" == n ? (t.forEach(function(t) {
                                    return t.nodeType !== T ? r.push(t) : k.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(Q.fragment(t)))
                                }), r) : "object" == n || null == t ? t : Q.fragment(t)
                            }),
                            a = this.length > 1;
                        return s.length < 1 ? this : this.each(function(e, n) {
                            o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                            var u = k.contains(I.documentElement, o);
                            s.forEach(function(e) {
                                if (a) e = e.cloneNode(!0);
                                else if (!o) return k(e).remove();
                                o.insertBefore(e, n), u && x(e, function(e) {
                                    if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                        var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                        n.eval.call(n, e.innerHTML)
                                    }
                                })
                            })
                        })
                    }, k.fn[i ? n + "To" : "insert" + (r ? "Before" : "After")] = function(t) {
                        return k(t)[n](this), this
                    }
                }), Q.Z.prototype = y.prototype = k.fn, Q.uniq = E, Q.deserializeValue = w, k.zepto = Q, k
            }();
            return t.Zepto = e, void 0 === t.$ && (t.$ = e),
                function(e) {
                    function n(t) {
                        return t._zid || (t._zid = h++)
                    }

                    function r(t, e, r, s) {
                        if (e = i(e), e.ns) var a = o(e.ns);
                        return (g[n(t)] || []).filter(function(t) {
                            return t && (!e.e || t.e == e.e) && (!e.ns || a.test(t.ns)) && (!r || n(t.fn) === n(r)) && (!s || t.sel == s)
                        })
                    }

                    function i(t) {
                        var e = ("" + t).split(".");
                        return {
                            e: e[0],
                            ns: e.slice(1).sort().join(" ")
                        }
                    }

                    function o(t) {
                        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
                    }

                    function s(t, e) {
                        return t.del && !_ && t.e in b || !!e
                    }

                    function a(t) {
                        return w[t] || _ && b[t] || t
                    }

                    function u(t, r, o, u, l, p, h) {
                        var d = n(t),
                            y = g[d] || (g[d] = []);
                        r.split(/\s/).forEach(function(n) {
                            if ("ready" == n) return e(document).ready(o);
                            var r = i(n);
                            r.fn = o, r.sel = l, r.e in w && (o = function(t) {
                                var n = t.relatedTarget;
                                if (!n || n !== this && !e.contains(this, n)) return r.fn.apply(this, arguments)
                            }), r.del = p;
                            var d = p || o;
                            r.proxy = function(e) {
                                if (e = c(e), !e.isImmediatePropagationStopped()) {
                                    e.data = u;
                                    var n = d.apply(t, e._args == f ? [e] : [e].concat(e._args));
                                    return !1 === n && (e.preventDefault(), e.stopPropagation()), n
                                }
                            }, r.i = y.length, y.push(r), "addEventListener" in t && t.addEventListener(a(r.e), r.proxy, s(r, h))
                        })
                    }

                    function l(t, e, i, o, u) {
                        var l = n(t);
                        (e || "").split(/\s/).forEach(function(e) {
                            r(t, e, i, o).forEach(function(e) {
                                delete g[l][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, s(e, u))
                            })
                        })
                    }

                    function c(t, n) {
                        return !n && t.isDefaultPrevented || (n || (n = t), e.each(k, function(e, r) {
                            var i = n[e];
                            t[e] = function() {
                                return this[r] = x, i && i.apply(n, arguments)
                            }, t[r] = T
                        }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = x)), t
                    }

                    function p(t) {
                        var e, n = {
                            originalEvent: t
                        };
                        for (e in t) O.test(e) || t[e] === f || (n[e] = t[e]);
                        return c(n, t)
                    }
                    var f, h = 1,
                        d = Array.prototype.slice,
                        y = e.isFunction,
                        v = function(t) {
                            return "string" == typeof t
                        },
                        g = {},
                        m = {},
                        _ = "onfocusin" in t,
                        b = {
                            focus: "focusin",
                            blur: "focusout"
                        },
                        w = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout"
                        };
                    m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents", e.event = {
                        add: u,
                        remove: l
                    }, e.proxy = function(t, r) {
                        var i = 2 in arguments && d.call(arguments, 2);
                        if (y(t)) {
                            var o = function() {
                                return t.apply(r, i ? i.concat(d.call(arguments)) : arguments)
                            };
                            return o._zid = n(t), o
                        }
                        if (v(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);
                        throw new TypeError("expected function")
                    }, e.fn.bind = function(t, e, n) {
                        return this.on(t, e, n)
                    }, e.fn.unbind = function(t, e) {
                        return this.off(t, e)
                    }, e.fn.one = function(t, e, n, r) {
                        return this.on(t, e, n, r, 1)
                    };
                    var x = function() {
                            return !0
                        },
                        T = function() {
                            return !1
                        },
                        O = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                        k = {
                            preventDefault: "isDefaultPrevented",
                            stopImmediatePropagation: "isImmediatePropagationStopped",
                            stopPropagation: "isPropagationStopped"
                        };
                    e.fn.delegate = function(t, e, n) {
                        return this.on(e, t, n)
                    }, e.fn.undelegate = function(t, e, n) {
                        return this.off(e, t, n)
                    }, e.fn.live = function(t, n) {
                        return e(document.body).delegate(this.selector, t, n), this
                    }, e.fn.die = function(t, n) {
                        return e(document.body).undelegate(this.selector, t, n), this
                    }, e.fn.on = function(t, n, r, i, o) {
                        var s, a, c = this;
                        return t && !v(t) ? (e.each(t, function(t, e) {
                            c.on(t, n, r, e, o)
                        }), c) : (v(n) || y(i) || !1 === i || (i = r, r = n, n = f), i !== f && !1 !== r || (i = r, r = f), !1 === i && (i = T), c.each(function(c, f) {
                            o && (s = function(t) {
                                return l(f, t.type, i), i.apply(this, arguments)
                            }), n && (a = function(t) {
                                var r, o = e(t.target).closest(n, f).get(0);
                                if (o && o !== f) return r = e.extend(p(t), {
                                    currentTarget: o,
                                    liveFired: f
                                }), (s || i).apply(o, [r].concat(d.call(arguments, 1)))
                            }), u(f, t, i, r, n, a || s)
                        }))
                    }, e.fn.off = function(t, n, r) {
                        var i = this;
                        return t && !v(t) ? (e.each(t, function(t, e) {
                            i.off(t, n, e)
                        }), i) : (v(n) || y(r) || !1 === r || (r = n, n = f), !1 === r && (r = T), i.each(function() {
                            l(this, t, r, n)
                        }))
                    }, e.fn.trigger = function(t, n) {
                        return t = v(t) || e.isPlainObject(t) ? e.Event(t) : c(t), t._args = n, this.each(function() {
                            t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                        })
                    }, e.fn.triggerHandler = function(t, n) {
                        var i, o;
                        return this.each(function(s, a) {
                            i = p(v(t) ? e.Event(t) : t), i._args = n, i.target = a, e.each(r(a, t.type || t), function(t, e) {
                                if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1
                            })
                        }), o
                    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                        e.fn[t] = function(e) {
                            return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                        }
                    }), e.Event = function(t, e) {
                        v(t) || (e = t, t = e.type);
                        var n = document.createEvent(m[t] || "Events"),
                            r = !0;
                        if (e)
                            for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                        return n.initEvent(t, r, !0), c(n)
                    }
                }(e),
                function(e) {
                    function n(t, n, r) {
                        var i = e.Event(n);
                        return e(t).trigger(i, r), !i.isDefaultPrevented()
                    }

                    function r(t, e, r, i) {
                        if (t.global) return n(e || b, r, i)
                    }

                    function i(t) {
                        t.global && 0 == e.active++ && r(t, null, "ajaxStart")
                    }

                    function o(t) {
                        t.global && !--e.active && r(t, null, "ajaxStop")
                    }

                    function s(t, e) {
                        var n = e.context;
                        if (!1 === e.beforeSend.call(n, t, e) || !1 === r(e, n, "ajaxBeforeSend", [t, e])) return !1;
                        r(e, n, "ajaxSend", [t, e])
                    }

                    function a(t, e, n, i) {
                        var o = n.context;
                        n.success.call(o, t, "success", e), i && i.resolveWith(o, [t, "success", e]), r(n, o, "ajaxSuccess", [e, n, t]), l("success", e, n)
                    }

                    function u(t, e, n, i, o) {
                        var s = i.context;
                        i.error.call(s, n, e, t), o && o.rejectWith(s, [n, e, t]), r(i, s, "ajaxError", [n, i, t || e]), l(e, n, i)
                    }

                    function l(t, e, n) {
                        var i = n.context;
                        n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), o(n)
                    }

                    function c(t, e, n) {
                        if (n.dataFilter == p) return t;
                        var r = n.context;
                        return n.dataFilter.call(r, t, e)
                    }

                    function p() {}

                    function f(t) {
                        return t && (t = t.split(";", 2)[0]), t && (t == k ? "html" : t == O ? "json" : x.test(t) ? "script" : T.test(t) && "xml") || "text"
                    }

                    function h(t, e) {
                        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                    }

                    function d(t) {
                        t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = h(t.url, t.data), t.data = void 0)
                    }

                    function y(t, n, r, i) {
                        return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                            url: t,
                            data: n,
                            success: r,
                            dataType: i
                        }
                    }

                    function v(t, n, r, i) {
                        var o, s = e.isArray(n),
                            a = e.isPlainObject(n);
                        e.each(n, function(n, u) {
                            o = e.type(u), i && (n = r ? i : i + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !i && s ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? v(t, u, r, n) : t.add(n, u)
                        })
                    }
                    var g, m, _ = +new Date,
                        b = t.document,
                        w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                        x = /^(?:text|application)\/javascript/i,
                        T = /^(?:text|application)\/xml/i,
                        O = "application/json",
                        k = "text/html",
                        S = /^\s*$/,
                        P = b.createElement("a");
                    P.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, r) {
                        if (!("type" in n)) return e.ajax(n);
                        var i, o, l = n.jsonpCallback,
                            c = (e.isFunction(l) ? l() : l) || "Zepto" + _++,
                            p = b.createElement("script"),
                            f = t[c],
                            h = function(t) {
                                e(p).triggerHandler("error", t || "abort")
                            },
                            d = {
                                abort: h
                            };
                        return r && r.promise(d), e(p).on("load error", function(s, l) {
                            clearTimeout(o), e(p).off().remove(), "error" != s.type && i ? a(i[0], d, n, r) : u(null, l || "error", d, n, r), t[c] = f, i && e.isFunction(f) && f(i[0]), f = i = void 0
                        }), !1 === s(d, n) ? (h("abort"), d) : (t[c] = function() {
                            i = arguments
                        }, p.src = n.url.replace(/\?(.+)=\?/, "?$1=" + c), b.head.appendChild(p), n.timeout > 0 && (o = setTimeout(function() {
                            h("timeout")
                        }, n.timeout)), d)
                    }, e.ajaxSettings = {
                        type: "GET",
                        beforeSend: p,
                        success: p,
                        error: p,
                        complete: p,
                        context: null,
                        global: !0,
                        xhr: function() {
                            return new t.XMLHttpRequest
                        },
                        accepts: {
                            script: "text/javascript, application/javascript, application/x-javascript",
                            json: O,
                            xml: "application/xml, text/xml",
                            html: k,
                            text: "text/plain"
                        },
                        crossDomain: !1,
                        timeout: 0,
                        processData: !0,
                        cache: !0,
                        dataFilter: p
                    }, e.ajax = function(n) {
                        var r, o, l = e.extend({}, n || {}),
                            y = e.Deferred && e.Deferred();
                        for (g in e.ajaxSettings) void 0 === l[g] && (l[g] = e.ajaxSettings[g]);
                        i(l), l.crossDomain || (r = b.createElement("a"), r.href = l.url, r.href = r.href, l.crossDomain = P.protocol + "//" + P.host != r.protocol + "//" + r.host), l.url || (l.url = t.location.toString()), (o = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, o)), d(l);
                        var v = l.dataType,
                            _ = /\?.+=\?/.test(l.url);
                        if (_ && (v = "jsonp"), !1 !== l.cache && (n && !0 === n.cache || "script" != v && "jsonp" != v) || (l.url = h(l.url, "_=" + Date.now())), "jsonp" == v) return _ || (l.url = h(l.url, l.jsonp ? l.jsonp + "=?" : !1 === l.jsonp ? "" : "callback=?")), e.ajaxJSONP(l, y);
                        var w, x = l.accepts[v],
                            T = {},
                            O = function(t, e) {
                                T[t.toLowerCase()] = [t, e]
                            },
                            k = /^([\w-]+:)\/\//.test(l.url) ? RegExp.$1 : t.location.protocol,
                            E = l.xhr(),
                            j = E.setRequestHeader;
                        if (y && y.promise(E), l.crossDomain || O("X-Requested-With", "XMLHttpRequest"), O("Accept", x || "*/*"), (x = l.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), E.overrideMimeType && E.overrideMimeType(x)), (l.contentType || !1 !== l.contentType && l.data && "GET" != l.type.toUpperCase()) && O("Content-Type", l.contentType || "application/x-www-form-urlencoded"), l.headers)
                            for (m in l.headers) O(m, l.headers[m]);
                        if (E.setRequestHeader = O, E.onreadystatechange = function() {
                                if (4 == E.readyState) {
                                    E.onreadystatechange = p, clearTimeout(w);
                                    var t, n = !1;
                                    if (E.status >= 200 && E.status < 300 || 304 == E.status || 0 == E.status && "file:" == k) {
                                        if (v = v || f(l.mimeType || E.getResponseHeader("content-type")), "arraybuffer" == E.responseType || "blob" == E.responseType) t = E.response;
                                        else {
                                            t = E.responseText;
                                            try {
                                                t = c(t, v, l), "script" == v ? (0, eval)(t) : "xml" == v ? t = E.responseXML : "json" == v && (t = S.test(t) ? null : e.parseJSON(t))
                                            } catch (t) {
                                                n = t
                                            }
                                            if (n) return u(n, "parsererror", E, l, y)
                                        }
                                        a(t, E, l, y)
                                    } else u(E.statusText || null, E.status ? "error" : "abort", E, l, y)
                                }
                            }, !1 === s(E, l)) return E.abort(), u(null, "abort", E, l, y), E;
                        var C = !("async" in l) || l.async;
                        if (E.open(l.type, l.url, C, l.username, l.password), l.xhrFields)
                            for (m in l.xhrFields) E[m] = l.xhrFields[m];
                        for (m in T) j.apply(E, T[m]);
                        return l.timeout > 0 && (w = setTimeout(function() {
                            E.onreadystatechange = p, E.abort(), u(null, "timeout", E, l, y)
                        }, l.timeout)), E.send(l.data ? l.data : null), E
                    }, e.get = function() {
                        return e.ajax(y.apply(null, arguments))
                    }, e.post = function() {
                        var t = y.apply(null, arguments);
                        return t.type = "POST", e.ajax(t)
                    }, e.getJSON = function() {
                        var t = y.apply(null, arguments);
                        return t.dataType = "json", e.ajax(t)
                    }, e.fn.load = function(t, n, r) {
                        if (!this.length) return this;
                        var i, o = this,
                            s = t.split(/\s/),
                            a = y(t, n, r),
                            u = a.success;
                        return s.length > 1 && (a.url = s[0], i = s[1]), a.success = function(t) {
                            o.html(i ? e("<div>").html(t.replace(w, "")).find(i) : t), u && u.apply(o, arguments)
                        }, e.ajax(a), this
                    };
                    var E = encodeURIComponent;
                    e.param = function(t, n) {
                        var r = [];
                        return r.add = function(t, n) {
                            e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(E(t) + "=" + E(n))
                        }, v(r, t, n), r.join("&").replace(/%20/g, "+")
                    }
                }(e),
                function(t) {
                    t.fn.serializeArray = function() {
                        var e, n, r = [],
                            i = function(t) {
                                if (t.forEach) return t.forEach(i);
                                r.push({
                                    name: e,
                                    value: t
                                })
                            };
                        return this[0] && t.each(this[0].elements, function(r, o) {
                            n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
                        }), r
                    }, t.fn.serialize = function() {
                        var t = [];
                        return this.serializeArray().forEach(function(e) {
                            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                        }), t.join("&")
                    }, t.fn.submit = function(e) {
                        if (0 in arguments) this.bind("submit", e);
                        else if (this.length) {
                            var n = t.Event("submit");
                            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                        }
                        return this
                    }
                }(e),
                function() {
                    try {
                        getComputedStyle(void 0)
                    } catch (n) {
                        var e = getComputedStyle;
                        t.getComputedStyle = function(t, n) {
                            try {
                                return e(t, n)
                            } catch (t) {
                                return null
                            }
                        }
                    }
                }(), e
        })
    }).call(window)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = e + "",
            r = +(n.match(/\d+/) || NaN),
            i = n.match(/^[<>]=?|/)[0];
        return T[i] ? T[i](t, r) : t == r || r !== r
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function(t) {
            return null != t && "object" === (void 0 === t ? "undefined" : i(t)) && "setInterval" in t
        }("object" == ("undefined" == typeof self ? "undefined" : i(self)) && self) && self,
        s = o && o.navigator,
        a = (s && s.appVersion || "").toLowerCase(),
        u = (s && s.userAgent || "").toLowerCase(),
        l = function() {
            return c() || p() || f() || h() || d()
        },
        c = function(t) {
            var e = g() ? null : u.match(/iphone(?:.+?os (\d+))?/);
            return null !== e && r(e[1] || 1, t)
        },
        p = function(t) {
            var e = u.match(/ipod.+?os (\d+)/);
            return null !== e && r(e[1], t)
        },
        f = function() {
            return /android/.test(u) && /mobile/.test(u)
        },
        h = function() {
            return /blackberry/.test(u) || /bb10/.test(u)
        },
        d = function() {
            return y() && /phone/.test(u)
        },
        y = function() {
            return /win/.test(a)
        },
        v = function() {
            return g() || m() || _()
        },
        g = function(t) {
            var e = u.match(/ipad.+?os (\d+)/);
            return null !== e && r(e[1], t)
        },
        m = function() {
            return /android/.test(u) && !/mobile/.test(u)
        },
        _ = function() {
            return y() && !d() && /touch/.test(u)
        },
        b = function() {
            return !!document && ("ontouchstart" in o || "DocumentTouch" in o && document instanceof DocumentTouch)
        },
        w = function() {
            return !l() && !v()
        },
        x = function(t) {
            return "[object String]" === toString.call(t)
        },
        T = {
            "<": function(t, e) {
                return t < e
            },
            "<=": function(t, e) {
                return t <= e
            },
            ">": function(t, e) {
                return t > e
            },
            ">=": function(t, e) {
                return t >= e
            }
        };
    t.exports = {
        isMobile: l,
        isTablet: v,
        isDesktop: w,
        isTouchDevice: b,
        isString: x
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = O.call(t, S),
            n = t[S];
        try {
            t[S] = void 0;
            var r = !0
        } catch (t) {}
        var i = k.call(t);
        return r && (e ? t[S] = n : delete t[S]), i
    }

    function i(t) {
        return j.call(t)
    }

    function o(t) {
        return null == t ? void 0 === t ? M : A : I && I in Object(t) ? P(t) : C(t)
    }

    function s(t, e) {
        return function(n) {
            return t(e(n))
        }
    }

    function a(t) {
        return null != t && "object" == typeof t
    }

    function u(t) {
        if (!F(t) || N(t) != z) return !1;
        var e = D(t);
        if (null === e) return !0;
        var n = X.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && H.call(n) == B
    }

    function l(t, e, n) {
        function r() {
            d === h && (d = h.slice())
        }

        function i() {
            return f
        }

        function o(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return r(), d.push(t),
                function() {
                    if (e) {
                        e = !1, r();
                        var n = d.indexOf(t);
                        d.splice(n, 1)
                    }
                }
        }

        function s(t) {
            if (!Y(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (y) throw new Error("Reducers may not dispatch actions.");
            try {
                y = !0, f = p(f, t)
            } finally {
                y = !1
            }
            for (var e = h = d, n = 0; n < e.length; n++) {
                (0, e[n])()
            }
            return t
        }

        function a(t) {
            if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
            p = t, s({
                type: q.INIT
            })
        }

        function u() {
            var t, e = o;
            return t = {
                subscribe: function(t) {
                    function n() {
                        t.next && t.next(i())
                    }
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            }, t[V.a] = function() {
                return this
            }, t
        }
        var c;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(l)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var p = t,
            f = e,
            h = [],
            d = h,
            y = !1;
        return s({
            type: q.INIT
        }), c = {
            dispatch: s,
            subscribe: o,
            getState: i,
            replaceReducer: a
        }, c[V.a] = u, c
    }

    function c(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function p(t) {
        Object.keys(t).forEach(function(e) {
            var n = t[e];
            if (void 0 === n(void 0, {
                    type: q.INIT
                })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + q.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
        })
    }

    function f(t) {
        for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            "function" == typeof t[i] && (n[i] = t[i])
        }
        var o = Object.keys(n),
            s = void 0;
        try {
            p(n)
        } catch (t) {
            s = t
        }
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            if (s) throw s;
            for (var r = !1, i = {}, a = 0; a < o.length; a++) {
                var u = o[a],
                    l = n[u],
                    p = t[u],
                    f = l(p, e);
                if (void 0 === f) {
                    var h = c(u, e);
                    throw new Error(h)
                }
                i[u] = f, r = r || f !== p
            }
            return r ? i : t
        }
    }

    function h(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function d(t, e) {
        if ("function" == typeof t) return h(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), r = {}, i = 0; i < n.length; i++) {
            var o = n[i],
                s = t[o];
            "function" == typeof s && (r[o] = h(s, e))
        }
        return r
    }

    function y() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return 0 === e.length ? function(t) {
            return t
        } : 1 === e.length ? e[0] : e.reduce(function(t, e) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        })
    }

    function v() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, r, i) {
                var o = t(n, r, i),
                    s = o.dispatch,
                    a = [],
                    u = {
                        getState: o.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return a = e.map(function(t) {
                    return t(u)
                }), s = y.apply(void 0, a)(o.dispatch), G({}, o, {
                    dispatch: s
                })
            }
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var g = n(104),
        m = "object" == typeof self && self && self.Object === Object && self,
        _ = g.a || m || Function("return this")(),
        b = _,
        w = b.Symbol,
        x = w,
        T = Object.prototype,
        O = T.hasOwnProperty,
        k = T.toString,
        S = x ? x.toStringTag : void 0,
        P = r,
        E = Object.prototype,
        j = E.toString,
        C = i,
        A = "[object Null]",
        M = "[object Undefined]",
        I = x ? x.toStringTag : void 0,
        N = o,
        R = s,
        L = R(Object.getPrototypeOf, Object),
        D = L,
        F = a,
        z = "[object Object]",
        $ = Function.prototype,
        U = Object.prototype,
        H = $.toString,
        X = U.hasOwnProperty,
        B = H.call(Object),
        Y = u,
        W = n(105),
        V = n.n(W),
        q = {
            INIT: "@@redux/INIT"
        },
        G = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    n.d(e, "createStore", function() {
        return l
    }), n.d(e, "combineReducers", function() {
        return f
    }), n.d(e, "bindActionCreators", function() {
        return d
    }), n.d(e, "applyMiddleware", function() {
        return v
    }), n.d(e, "compose", function() {
        return y
    })
}, function(t, e, n) {
    t.exports = n(109)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NAVIGATION = "NAVIGATION", e.SET_ROUTES = "SET_ROUTES", e.SET_META = "SET_META", e.SET_MOBILE = "SET_MOBILE", e.SET_ANIMATING = "SET_ANIMATING", e.SET_DIRECTION = "SET_DIRECTION", e.SET_NEW_COLLECTION = "SET_NEW_COLLECTION", e.SET_PAGE = "SET_PAGE", e.SET_OLDPAGE = "SET_OLDPAGE", e.SET_FIRST_SHOW = "SET_FIRST_SHOW", e.SET_HIDE_NEW_COLLECTION = "SET_HIDE_NEW_COLLECTION", e.SET_SHOW_NEW_COLLECTION = "SET_SHOW_NEW_COLLECTION"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SCROLL = "SCROLL", e.SET_ORIENTATION = "SET_ORIENTATION"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.OPEN_INDEX = "OPEN_INDEX", e.CLOSE_INDEX = "CLOSE_INDEX", e.SET_ANIMATING = "SET_ANIMATING_INDEX"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.OPEN_SCREENSAVER = "OPEN_SCREENSAVER", e.CLOSE_SCREENSAVER = "CLOSE_SCREENSAVER", e.SET_ANIMATING = "SET_ANIMATING_SCREENSAVER", e.SET_SHOWN = "SET_SHOWN"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.OPEN_THUMBNAILS = "OPEN_THUMBNAILS", e.CLOSE_THUMBNAILS = "CLOSE_THUMBNAILS", e.SET_ANIMATING = "SET_ANIMATING_THUMBNAILS"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SET_PHOTO_READY = "SET_PHOTO_READY", e.SET_PHOTO_DIMENSIONS = "SET_PHOTO_DIMENSIONS"
}, function(t, e) {
    function n(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return "function" == typeof t ? t : null == t ? s : "object" == typeof t ? a(t) ? o(t[0], t[1]) : i(t) : u(t)
    }
    var i = n(120),
        o = n(184),
        s = n(25),
        a = n(2),
        u = n(194);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__ = new i(t);
        this.size = e.size
    }
    var i = n(16),
        o = n(127),
        s = n(128),
        a = n(129),
        u = n(130),
        l = n(131);
    r.prototype.clear = o, r.prototype.delete = s, r.prototype.get = a, r.prototype.has = u, r.prototype.set = l, t.exports = r
}, function(t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = n
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(8))
}, function(t, e) {
    function n(t) {
        if (null != t) {
            try {
                return i.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
    var r = Function.prototype,
        i = r.toString;
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, s, a) {
        return t === e || (null == t || null == e || !o(t) && !o(e) ? t !== t && e !== e : i(t, e, n, s, r, a))
    }
    var i = n(150),
        o = n(12);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, l, c) {
        var p = n & a,
            f = t.length,
            h = e.length;
        if (f != h && !(p && h > f)) return !1;
        var d = c.get(t);
        if (d && c.get(e)) return d == e;
        var y = -1,
            v = !0,
            g = n & u ? new i : void 0;
        for (c.set(t, e), c.set(e, t); ++y < f;) {
            var m = t[y],
                _ = e[y];
            if (r) var b = p ? r(_, m, y, e, t, c) : r(m, _, y, t, e, c);
            if (void 0 !== b) {
                if (b) continue;
                v = !1;
                break
            }
            if (g) {
                if (!o(e, function(t, e) {
                        if (!s(g, e) && (m === t || l(m, t, n, r, c))) return g.push(e)
                    })) {
                    v = !1;
                    break
                }
            } else if (m !== _ && !l(m, _, n, r, c)) {
                v = !1;
                break
            }
        }
        return c.delete(t), c.delete(e), v
    }
    var i = n(151),
        o = n(154),
        s = n(155),
        a = 1,
        u = 2;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return s(t) ? i(t) : o(t)
    }
    var i = n(167),
        o = n(174),
        s = n(178);
    t.exports = r
}, function(t, e, n) {
    var r = n(169),
        i = n(12),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.propertyIsEnumerable,
        u = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && s.call(t, "callee") && !a.call(t, "callee")
        };
    t.exports = u
}, function(t, e, n) {
    (function(t) {
        var r = n(1),
            i = n(170),
            o = "object" == typeof e && e && !e.nodeType && e,
            s = o && "object" == typeof t && t && !t.nodeType && t,
            a = s && s.exports === o,
            u = a ? r.Buffer : void 0,
            l = u ? u.isBuffer : void 0,
            c = l || i;
        t.exports = c
    }).call(e, n(15)(t))
}, function(t, e, n) {
    var r = n(171),
        i = n(172),
        o = n(173),
        s = o && o.isTypedArray,
        a = s ? i(s) : r;
    t.exports = a
}, function(t, e, n) {
    var r = n(6),
        i = n(1),
        o = r(i, "WeakMap");
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        return t === t && !i(t)
    }
    var i = n(4);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return null == t ? "" : i(t)
    }
    var i = n(189);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = i(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }
    var i = n(197);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return s;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = l.test(t);
        return n || c.test(t) ? p(t.slice(2), n ? 2 : 8) : u.test(t) ? s : +t
    }
    var i = n(4),
        o = n(24),
        s = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        p = parseInt;
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t === e
    }

    function i(t, e, n) {
        n = n || r;
        var i = o(t(), e);
        return function(r) {
            return function() {
                var s = o(t(), e);
                if (!n(i, s)) {
                    var a = i;
                    i = s, r(s, a, e)
                }
            }
        }
    }
    var o = n(199).get;
    t.exports = i
}, function(t, e, n) {
    var r = n(208),
        i = n(78),
        o = i(r);
    t.exports = o
}, function(t, e) {
    function n(t) {
        var e = 0,
            n = 0;
        return function() {
            var s = o(),
                a = i - (s - n);
            if (n = s, a > 0) {
                if (++e >= r) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var r = 800,
        i = 16,
        o = Date.now;
    t.exports = n
}, function(t, e, n) {
    var r = n(25),
        i = n(80),
        o = i ? function(t, e) {
            return i.set(t, e), t
        } : r;
    t.exports = o
}, function(t, e, n) {
    var r = n(70),
        i = r && new r;
    t.exports = i
}, function(t, e, n) {
    function r(t, e, n, _, b, w, x, T, O, k) {
        function S() {
            for (var h = arguments.length, d = Array(h), y = h; y--;) d[y] = arguments[y];
            if (C) var v = l(S),
                g = s(d, v);
            if (_ && (d = i(d, _, b, C)), w && (d = o(d, w, x, C)), h -= g, C && h < k) {
                var m = p(d, v);
                return u(t, e, r, S.placeholder, n, d, m, T, O, k - h)
            }
            var I = E ? n : this,
                N = j ? I[t] : t;
            return h = d.length, T ? d = c(d, T) : A && h > 1 && d.reverse(), P && O < h && (d.length = O), this && this !== f && this instanceof S && (N = M || a(N)), N.apply(I, d)
        }
        var P = e & g,
            E = e & h,
            j = e & d,
            C = e & (y | v),
            A = e & m,
            M = j ? void 0 : a(t);
        return S
    }
    var i = n(82),
        o = n(83),
        s = n(214),
        a = n(26),
        u = n(84),
        l = n(45),
        c = n(229),
        p = n(27),
        f = n(1),
        h = 1,
        d = 2,
        y = 8,
        v = 16,
        g = 128,
        m = 512;
    t.exports = r
}, function(t, e) {
    function n(t, e, n, i) {
        for (var o = -1, s = t.length, a = n.length, u = -1, l = e.length, c = r(s - a, 0), p = Array(l + c), f = !i; ++u < l;) p[u] = e[u];
        for (; ++o < a;)(f || o < s) && (p[n[o]] = t[o]);
        for (; c--;) p[u++] = t[o++];
        return p
    }
    var r = Math.max;
    t.exports = n
}, function(t, e) {
    function n(t, e, n, i) {
        for (var o = -1, s = t.length, a = -1, u = n.length, l = -1, c = e.length, p = r(s - u, 0), f = Array(p + c), h = !i; ++o < p;) f[o] = t[o];
        for (var d = o; ++l < c;) f[d + l] = e[l];
        for (; ++a < u;)(h || o < s) && (f[d + n[a]] = t[o++]);
        return f
    }
    var r = Math.max;
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, h, d, y, v, g, m) {
        var _ = e & c,
            b = _ ? y : void 0,
            w = _ ? void 0 : y,
            x = _ ? d : void 0,
            T = _ ? void 0 : d;
        e |= _ ? p : f, (e &= ~(_ ? f : p)) & l || (e &= ~(a | u));
        var O = [t, e, h, x, b, T, w, v, g, m],
            k = n.apply(void 0, O);
        return i(t) && o(k, O), k.placeholder = r, s(k, t, e)
    }
    var i = n(215),
        o = n(88),
        s = n(89),
        a = 1,
        u = 2,
        l = 4,
        c = 8,
        p = 32,
        f = 64;
    t.exports = r
}, function(t, e, n) {
    var r = n(80),
        i = n(216),
        o = r ? function(t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function(t, e, n) {
    function r(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    var i = n(42),
        o = n(44);
    r.prototype = i(o.prototype), r.prototype.constructor = r, t.exports = r
}, function(t, e) {
    function n(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(79),
        i = n(78),
        o = i(r);
    t.exports = o
}, function(t, e, n) {
    function r(t, e, n) {
        var r = e + "";
        return s(t, o(r, a(i(r), n)))
    }
    var i = n(221),
        o = n(222),
        s = n(77),
        a = n(223);
    t.exports = r
}, function(t, e) {
    t.exports = {
        close: '<svg viewBox="0 0 45 45"><title>Close 1.1</title><path d="M22.5 21.5L44 0l1 1-21.5 21.5L45 44l-1 1-21.5-21.5L1 45l-1-1 21.5-21.5L0 1l1-1z"/><path d="M22.5 21.5L44 0l1 1-21.5 21.5L45 44l-1 1-21.5-21.5L1 45l-1-1 21.5-21.5L0 1l1-1z"/></svg>',
        facebook: '<svg id="Blue" viewBox="0 0 266.9 266.9"><path id="Blue_1_" class="st0" d="M252.2 266.9c8.1 0 14.7-6.6 14.7-14.7V14.7c0-8.1-6.6-14.7-14.7-14.7H14.7C6.6 0 0 6.6 0 14.7v237.4c0 8.1 6.6 14.7 14.7 14.7h237.5z"/><path id="f" class="st1" d="M184.2 266.9V163.5h34.7l5.2-40.3h-39.9V97.5c0-11.7 3.2-19.6 20-19.6h21.3v-36c-3.7-.5-16.4-1.6-31.1-1.6-30.8 0-51.8 18.8-51.8 53.2v29.7h-34.8v40.3h34.8v103.4h41.6z"/></svg>',
        "g-plus": '<svg viewBox="0 0 318 202"><path d="M101 81v40s38.8-.1 54.6-.1c-8.6 26-21.9 40.1-54.6 40.1-33.1 0-59-26.9-59-60s25.9-60 59-60c17.5 0 28.8 6.2 39.2 14.7 8.3-8.3 7.6-9.5 28.8-29.5C151 10 127.2 0 101 0 45.2 0 0 45.2 0 101s45.2 101 101 101c83.4 0 103.8-72.6 97-121h-97zm182 2V48h-25v35h-36v25h36v36h25v-36h35V83h-35z"/></svg>',
        instagram: '<svg viewBox="0 0 512 512"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"/><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"/><circle cx="390.5" cy="121.5" r="30.2"/></svg>',
        twitter: '<svg id="Logo_FIXED" data-name="Logo — FIXED" viewBox="0 0 400 400"><defs/><title>Twitter_Logo_Blue</title><path class="cls-1" d="M0 0h400v400H0z"/><path class="cls-2" d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45 51.34 51.34 0 0 0-87.41 46.78A145.62 145.62 0 0 1 92.4 107.81a51.33 51.33 0 0 0 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65a51.31 51.31 0 0 0 41.15 50.28 51.21 51.21 0 0 1-23.16.88 51.35 51.35 0 0 0 47.92 35.62 102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23"/></svg>'
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        return {
            type: s.OPEN_INDEX
        }
    }

    function i() {
        return {
            type: s.CLOSE_INDEX
        }
    }

    function o(t) {
        return {
            type: s.SET_ANIMATING,
            isAnimating: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.openIndex = r, e.closeIndex = i, e.setAnimating = o;
    var s = n(54)
}, function(t, e, n) {
    "use strict";

    function r() {
        return {
            type: s.OPEN_THUMBNAILS
        }
    }

    function i() {
        return {
            type: s.CLOSE_THUMBNAILS
        }
    }

    function o(t) {
        return {
            type: s.SET_ANIMATING,
            isAnimating: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.openThumbnails = r, e.closeThumbnails = i, e.setAnimating = o;
    var s = n(56)
}, function(t, e, n) {
    "use strict";

    function r() {
        return {
            type: a.OPEN_SCREENSAVER
        }
    }

    function i() {
        return {
            type: a.CLOSE_SCREENSAVER
        }
    }

    function o(t) {
        return {
            type: a.SET_ANIMATING,
            isAnimating: t
        }
    }

    function s(t) {
        return {
            type: a.SET_SHOWN,
            isShown: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.openScreenSaver = r, e.closeScreenSaver = i, e.setAnimating = o, e.setShown = s;
    var a = n(55)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(95),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, t), this.el = n.el, this.container = n.container || this.el, this.url = this.el.dataset.src, this.options = {
                    forceLoad: n.forceLoad || !1,
                    firstPass: void 0 === n.firstPass || n.firstPass,
                    useXHR: n.useXHR || !1,
                    threshold: n.threshold || 0
                }, this.state = {
                    isLoaded: !1,
                    isLoading: !1,
                    isShown: !1
                }, this.handlers = {
                    scroll: function() {
                        return e.scroll()
                    },
                    resize: function() {
                        return e.resize()
                    },
                    update: function() {
                        return e.update()
                    },
                    onImageLoaded: n.onImageLoaded
                }, this.assets = n.assets || null, this.wWidth = n.initialwWidth || null, this.wHeight = n.initialwHeight || null, this.photoWidth = n.photoWidth || null, this.photoHeight = n.photoHeight || null, this.columns = n.columns || null, this.fullScreen = n.fullScreen || !1, this.isMobile = n.isMobile || !1, this.orientation = n.orientation || !1, this.setupListeners = {
                    resize: void 0 !== n.setupListeners && void 0 !== n.setupListeners.resize && n.setupListeners.resize,
                    scroll: void 0 !== n.setupListeners && void 0 !== n.setupListeners.scroll && n.setupListeners.scroll,
                    update: void 0 !== n.setupListeners && void 0 !== n.setupListeners.update && n.setupListeners.update
                }, this.viewport = {
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }, this.xhr = null, this.raf = null, this.scrollY = window.scrollY || window.pageYOffset, this.ticketScroll = !0, this.top = null, this.bindEvents(), this.options.firstPass && this.load(this.options.forceLoad)
            }
            return i(t, [{
                key: "bindEvents",
                value: function() {
                    this.setupListeners.scroll && window.addEventListener("scroll", this.handlers.scroll), this.setupListeners.resize && window.addEventListener("resize", this.handlers.resize), this.setupListeners.update && (this.raf = window.requestAnimationFrame(this.handlers.update))
                }
            }, {
                key: "load",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = !!e || this.inViewport();
                    if (this.debug, !n || this.state.isLoaded || this.state.isLoading) return !1;
                    this.debug, this.loadImage().then(function(e) {
                        return t.onImageLoaded(e)
                    }).catch(function(e) {
                        return t.onImageError(e)
                    })
                }
            }, {
                key: "getUrl",
                value: function() {
                    if (this.assets) {
                        var t = s.default.getCurrentViewportKey(this.assets, this.columns, this.wWidth, this.wHeight, this.photoWidth, this.photoHeight, this.fullScreen, this.isMobile, this.orientation);
                        return this.assets[t].url
                    }
                    return this.url
                }
            }, {
                key: "loadImage",
                value: function() {
                    var t = this;
                    return this.xhr = null, this.state.isLoading = !0, new Promise(function(e, n) {
                        var r = new Image,
                            i = t.getUrl();
                        t.url = i;
                        var o = s.default.isImageCached(i);
                        !1 !== o && e(o), (!/Safari/.test(navigator.userAgent) || !/Apple Computer/.test(navigator.vendor)) && t.options.useXHR && window.URL && window.Blob && window.XMLHttpRequest ? (t.xhr = new XMLHttpRequest, t.xhr.open("GET", i, !0), t.xhr.responseType = "arraybuffer", t.xhr.onerror = function(o) {
                            t.xhr.abort(), t.xhr = null, r.complete && r.height ? e(r) : (r.addEventListener("load", function() {
                                e(r)
                            }), r.addEventListener("onerror", function(t) {
                                n(t)
                            }), r.src = i)
                        }, t.xhr.onload = function(o) {
                            if (4 === t.xhr.readyState)
                                if (200 === t.xhr.status) {
                                    var s = i.split(".").pop();
                                    s = s.split("?")[0].toLowerCase();
                                    var a = new window.Uint8Array(t.xhr.response),
                                        u = new Blob([a], {
                                            type: "image/" + s
                                        }),
                                        l = URL.createObjectURL(u);
                                    r.addEventListener("load", function() {
                                        e(r)
                                    }), r.addEventListener("onerror", function(t) {
                                        n(t)
                                    }), r.src = l
                                } else t.xhr.abort(), t.xhr = null, r.addEventListener("load", function() {
                                    e(r)
                                }), r.addEventListener("onerror", function(t) {
                                    n(t)
                                }), r.src = i
                        }, t.xhr.send()) : r.complete && r.height ? e(r) : (r.addEventListener("load", function() {
                            t.state.isLoaded ? (t.container.removeChild(t.container.querySelector("img")), t.container.appendChild(r)) : e(r)
                        }), r.addEventListener("onerror", function(t) {
                            n(t)
                        }), r.src = i)
                    })
                }
            }, {
                key: "onImageLoaded",
                value: function(t) {
                    this.container.appendChild(t), this.state.isLoaded = !0, this.state.isLoading = !1, window.URL && null !== this.xhr && window.URL.revokeObjectURL(img_.src), null !== this.xhr && (this.xhr = null), this.handlers.onImageLoaded && this.handlers.onImageLoaded(t), this.show()
                }
            }, {
                key: "onImageError",
                value: function(t) {}
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        null !== t.el && (t.el.classList.add("show"), t.el.classList.add("loaded")), t.state.isShown = !0
                    }, 0)
                }
            }, {
                key: "update",
                value: function(t) {
                    if (!this.state.isLoaded) {
                        var e = void 0 !== t ? t : this.ticketScroll;
                        this.ticketScroll = !1, this.debug, e && (this.scrollY = window.scrollY || window.pageYOffset), this.load()
                    }
                }
            }, {
                key: "scroll",
                value: function(t) {
                    return void 0 !== t && "number" == typeof t ? this.scrollY = t : (this.ticketScroll = !0, this.requestTick()), this.debug, this
                }
            }, {
                key: "requestTick",
                value: function() {
                    this.debug, this.ticketScroll && this.setupListeners.update && (this.raf = window.requestAnimationFrame(this.handlers.update))
                }
            }, {
                key: "resizeAsset",
                value: function(t, e) {
                    if (this.state.isLoaded) {
                        this.wWidth = t, this.wHeight = e;
                        this.getUrl() !== this.url && this.loadImage()
                    }
                }
            }, {
                key: "resize",
                value: function(t) {
                    this.viewport = void 0 !== t && "[object Event]" !== t.toString() ? t : {
                        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                    }, this.debug, this.reflow()
                }
            }, {
                key: "reflow",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.state.isLoaded || (t && (this.scrollY = window.scrollY || window.pageYOffset), this.top = this.getOffset(this.el), this.bottom = this.top + this.el.offsetHeight)
                }
            }, {
                key: "getOffset",
                value: function(t) {
                    var e = window.scrollY || window.pageYOffset;
                    return t.getBoundingClientRect().top + e
                }
            }, {
                key: "inViewport",
                value: function(t) {
                    if (this.state.isLoaded || this.state.isLoading) return !0;
                    null !== this.top && null !== this.bottom || this.reflow();
                    var e = this.scrollY,
                        n = e + this.viewport.height,
                        r = this.options.threshold / 100 * this.viewport.height;
                    return this.bottom >= e - r && this.top <= n + r
                }
            }]), t
        }();
    e.default = a
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(9),
        s = n(96),
        a = function() {
            function t() {
                r(this, t), this.imagesLoaded = []
            }
            return i(t, [{
                key: "loadImage",
                value: function(t) {
                    var e = this,
                        n = t.assets,
                        r = t.columns,
                        i = t.wWidth,
                        o = t.wHeight,
                        s = t.photoWidth,
                        a = t.photoHeight,
                        u = t.fullScreen,
                        l = t.isMobile,
                        c = t.orientation,
                        p = this.getCurrentViewportKey(n, r, i, o, s, a, u, l, c),
                        f = this.getUrl(n, p);
                    if (!1 !== this.isImageCached(f)) return !1;
                    var h = new Image;
                    h.onload = function(t) {
                        e.onImageLoaded(h)
                    }, h.src = f
                }
            }, {
                key: "onImageLoaded",
                value: function(t) {
                    this.imagesLoaded.push(t)
                }
            }, {
                key: "getUrl",
                value: function(t, e) {
                    if (t) return t[e].url
                }
            }, {
                key: "getCurrentWidth",
                value: function(t, e, n, r, i, a, u, l) {
                    if (u) return this.getCurrentWidthMobile(t, e, n, r, l);
                    var c = r / n,
                        p = i / o.MAX_COLUMNS * t,
                        f = e - o.BORDERS,
                        h = p * c;
                    if (a) {
                        return (0, s.fitImage)({
                            imageWidth: t,
                            imageHeight: t * c,
                            containerWidth: t,
                            containerHeight: e
                        }).w
                    }
                    if (h >= f) {
                        return Math.round(f / c)
                    }
                    return Math.round(h / c)
                }
            }, {
                key: "getCurrentWidthMobile",
                value: function(t, e, n, r, i) {
                    var s = t - 40,
                        a = "landscape" === i ? o.BORDERS_MOBILE_LANDSCAPE : o.BORDERS_MOBILE_PORTRAIT,
                        u = r / n,
                        l = s,
                        c = e - a,
                        p = l * u;
                    if (p >= c) {
                        return Math.round(c / u)
                    }
                    return Math.round(p / u)
                }
            }, {
                key: "getCurrentViewportKey",
                value: function(t, e, n, r, i, o) {
                    var s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                        a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                        u = arguments[8],
                        l = this.getCurrentWidth(n, r, i, o, e, s, a, u),
                        c = 1;
                    c > 2 && (c = 2);
                    var p = void 0,
                        f = "main";
                    for (var h in t) {
                        var d = t[h].width;
                        d >= l * c && (p ? p > d && (p = t[h].width, f = h) : (p = d, f = h))
                    }
                    return f
                }
            }, {
                key: "isImageCached",
                value: function(t) {
                    for (var e = 0; e < this.imagesLoaded.length; e++) {
                        var n = this.imagesLoaded[e];
                        if (n.src === t) return n
                    }
                    return !1
                }
            }]), t
        }();
    e.default = new a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.fitImage = function(t) {
        var e = t.imageWidth,
            n = t.imageHeight,
            r = e / n,
            i = t.containerWidth,
            o = t.containerHeight,
            s = i / o,
            a = {};
        return r > s ? (a.ratio = o / n, a.w = Math.ceil(e * o / n, a.h = o)) : (a.ratio = i / e, a.w = i, a.h = Math.ceil(n * i / e)), a.top = (o - a.h) / 2, a.left = (i - a.w) / 2, a
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(5),
        c = r(l),
        p = n(0),
        f = r(p),
        h = n(10),
        d = n(39),
        y = function(t) {
            function e(t) {
                return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            }
            return s(e, t), a(e, [{
                key: "fetchData",
                value: function() {
                    var t = this;
                    if (!this.options.endPoint) return void this.promises.data.resolve();
                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: d.JSON_ENDPOINTS + this.options.endPoint,
                        success: function(e) {
                            t.data = e, t.promises.data.resolve()
                        },
                        error: function(e, n) {
                            t.promises.data.reject()
                        }
                    })
                }
            }, {
                key: "loadAssets",
                value: function() {
                    this.promises.data.resolve()
                }
            }, {
                key: "initData",
                value: function() {
                    f.default.dispatch((0, h.setMeta)(this.data.meta))
                }
            }, {
                key: "onInit",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onInit", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = y
}, function(t, e, n) {
    (function(t) {
        function n(t, e) {
            for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var i = t[r];
                "." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
            }
            if (e)
                for (; n--; n) t.unshift("..");
            return t
        }

        function r(t, e) {
            if (t.filter) return t.filter(e);
            for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
            return n
        }
        var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function(t) {
                return i.exec(t).slice(1)
            };
        e.resolve = function() {
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var s = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, i = "/" === s.charAt(0))
            }
            return e = n(r(e.split("/"), function(t) {
                return !!t
            }), !i).join("/"), (i ? "/" : "") + e || "."
        }, e.normalize = function(t) {
            var i = e.isAbsolute(t),
                o = "/" === s(t, -1);
            return t = n(r(t.split("/"), function(t) {
                return !!t
            }), !i).join("/"), t || i || (t = "."), t && o && (t += "/"), (i ? "/" : "") + t
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(r(t, function(t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            }).join("/"))
        }, e.relative = function(t, n) {
            function r(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1)
            }
            t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
            for (var i = r(t.split("/")), o = r(n.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++)
                if (i[u] !== o[u]) {
                    a = u;
                    break
                } for (var l = [], u = a; u < i.length; u++) l.push("..");
            return l = l.concat(o.slice(a)), l.join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            var e = o(t),
                n = e[0],
                r = e[1];
            return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
        }, e.basename = function(t, e) {
            var n = o(t)[2];
            return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
        }, e.extname = function(t) {
            return o(t)[3]
        };
        var s = "b" === "ab".substr(-1) ? function(t, e, n) {
            return t.substr(e, n)
        } : function(t, e, n) {
            return e < 0 && (e = t.length + e), t.substr(e, n)
        }
    }).call(e, n(31))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getRoute = void 0;
    var r = n(0),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    e.getRoute = function(t) {
        var e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i.default.getState().app.routes),
            n = null;
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var o = e[r];
                o.id === t && (n = o)
            } return n
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = n(48),
        a = r(s),
        u = n(49),
        l = n(30),
        c = r(l),
        p = n(198),
        f = r(p),
        h = n(0),
        d = r(h),
        y = n(10),
        v = function() {
            function t() {
                i(this, t), this.app = null
            }
            return o(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    (0, a.default)("#content").focus();
                    var e = c.default.configureRoute();
                    this.app = new f.default;
                    var n = (0, a.default)("html");
                    d.default.dispatch((0, y.setMobile)((0, u.isMobile)())), (0, u.isMobile)() && n.addClass("isMobile"), (0, u.isTablet)() && n.addClass("isTablet"), c.default.initRouter().then(function() {
                        t.app.init().then(function() {
                            e.start()
                        })
                    })
                }
            }]), t
        }(),
        g = t.exports = new v;
    (0, a.default)(document).ready(function() {
        return g.init()
    })
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function r(t, e) {
            if ("function" == typeof t) return r("*", t);
            if ("function" == typeof e)
                for (var n = new a(t), i = 1; i < arguments.length; ++i) r.callbacks.push(n.middleware(arguments[i]));
            else "string" == typeof t ? r["string" == typeof e ? "redirect" : "show"](t, e) : r.start(t)
        }

        function i(t) {
            if (!t.handled) {
                var e;
                e = _ ? m + y.hash.replace("#!", "") : y.pathname + y.search, e !== t.canonicalPath && (r.stop(), t.handled = !1, y.href = t.canonicalPath)
            }
        }

        function o(t) {
            return "string" != typeof t ? t : g ? decodeURIComponent(t.replace(/\+/g, " ")) : t
        }

        function s(t, e) {
            "/" === t[0] && 0 !== t.indexOf(m) && (t = m + (_ ? "#!" : "") + t);
            var n = t.indexOf("?");
            if (this.canonicalPath = t, this.path = t.replace(m, "") || "/", _ && (this.path = this.path.replace("#!", "") || "/"), this.title = document.title, this.state = e || {}, this.state.path = t, this.querystring = ~n ? o(t.slice(n + 1)) : "", this.pathname = o(~n ? t.slice(0, n) : t), this.params = {}, this.hash = "", !_) {
                if (!~this.path.indexOf("#")) return;
                var r = this.path.split("#");
                this.path = r[0], this.hash = o(r[1]) || "", this.querystring = this.querystring.split("#")[0]
            }
        }

        function a(t, e) {
            e = e || {}, this.path = "*" === t ? "(.*)" : t, this.method = "GET", this.regexp = p(this.path, this.keys = [], e)
        }

        function u(t) {
            if (1 === l(t) && !(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented)) {
                for (var n = t.path ? t.path[0] : t.target; n && "A" !== n.nodeName;) n = n.parentNode;
                if (n && "A" === n.nodeName && !n.hasAttribute("download") && "external" !== n.getAttribute("rel")) {
                    var i = n.getAttribute("href");
                    if ((_ || n.pathname !== y.pathname || !n.hash && "#" !== i) && !(i && i.indexOf("mailto:") > -1) && !n.target && c(n.href)) {
                        var o = n.pathname + n.search + (n.hash || "");
                        void 0 !== e && o.match(/^\/[a-zA-Z]:\//) && (o = o.replace(/^\/[a-zA-Z]:\//, "/"));
                        var s = o;
                        0 === o.indexOf(m) && (o = o.substr(m.length)), _ && (o = o.replace("#!", "")), m && s === o || (t.preventDefault(), r.show(s))
                    }
                }
            }
        }

        function l(t) {
            return t = t || window.event, null === t.which ? t.button : t.which
        }

        function c(t) {
            var e = y.protocol + "//" + y.hostname;
            return y.port && (e += ":" + y.port), t && 0 === t.indexOf(e)
        }
        var p = n(102);
        t.exports = r;
        var f, h, d = "undefined" != typeof document && document.ontouchstart ? "touchstart" : "click",
            y = "undefined" != typeof window && (window.history.location || window.location),
            v = !0,
            g = !0,
            m = "",
            _ = !1;
        r.callbacks = [], r.exits = [], r.current = "", r.len = 0, r.base = function(t) {
            if (0 === arguments.length) return m;
            m = t
        }, r.start = function(t) {
            if (t = t || {}, !f && (f = !0, !1 === t.dispatch && (v = !1), !1 === t.decodeURLComponents && (g = !1), !1 !== t.popstate && window.addEventListener("popstate", b, !1), !1 !== t.click && document.addEventListener(d, u, !1), !0 === t.hashbang && (_ = !0), v)) {
                var e = _ && ~y.hash.indexOf("#!") ? y.hash.substr(2) + y.search : y.pathname + y.search + y.hash;
                r.replace(e, null, !0, v)
            }
        }, r.stop = function() {
            f && (r.current = "", r.len = 0, f = !1, document.removeEventListener(d, u, !1), window.removeEventListener("popstate", b, !1))
        }, r.show = function(t, e, n, i) {
            var o = new s(t, e);
            return r.current = o.path, !1 !== n && r.dispatch(o), !1 !== o.handled && !1 !== i && o.pushState(), o
        }, r.back = function(t, e) {
            r.len > 0 ? (history.back(), r.len--) : t ? setTimeout(function() {
                r.show(t, e)
            }) : setTimeout(function() {
                r.show(m, e)
            })
        }, r.redirect = function(t, e) {
            "string" == typeof t && "string" == typeof e && r(t, function(t) {
                setTimeout(function() {
                    r.replace(e)
                }, 0)
            }), "string" == typeof t && void 0 === e && setTimeout(function() {
                r.replace(t)
            }, 0)
        }, r.replace = function(t, e, n, i) {
            var o = new s(t, e);
            return r.current = o.path, o.init = n, o.save(), !1 !== i && r.dispatch(o), o
        }, r.dispatch = function(t) {
            function e() {
                var t = r.exits[a++];
                if (!t) return n();
                t(o, e)
            }

            function n() {
                var e = r.callbacks[s++];
                return t.path !== r.current ? void(t.handled = !1) : e ? void e(t, n) : i(t)
            }
            var o = h,
                s = 0,
                a = 0;
            h = t, o ? e() : n()
        }, r.exit = function(t, e) {
            if ("function" == typeof t) return r.exit("*", t);
            for (var n = new a(t), i = 1; i < arguments.length; ++i) r.exits.push(n.middleware(arguments[i]))
        }, r.Context = s, s.prototype.pushState = function() {
            r.len++, history.pushState(this.state, this.title, _ && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, s.prototype.save = function() {
            history.replaceState(this.state, this.title, _ && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, r.Route = a, a.prototype.middleware = function(t) {
            var e = this;
            return function(n, r) {
                if (e.match(n.path, n.params)) return t(n, r);
                r()
            }
        }, a.prototype.match = function(t, e) {
            var n = this.keys,
                r = t.indexOf("?"),
                i = ~r ? t.slice(0, r) : t,
                s = this.regexp.exec(decodeURIComponent(i));
            if (!s) return !1;
            for (var a = 1, u = s.length; a < u; ++a) {
                var l = n[a - 1],
                    c = o(s[a]);
                void 0 === c && hasOwnProperty.call(e, l.name) || (e[l.name] = c)
            }
            return !0
        };
        var b = function() {
            var t = !1;
            if ("undefined" != typeof window) return "complete" === document.readyState ? t = !0 : window.addEventListener("load", function() {
                    setTimeout(function() {
                        t = !0
                    }, 0)
                }),
                function(e) {
                    if (t)
                        if (e.state) {
                            var n = e.state.path;
                            r.replace(n, e.state)
                        } else r.show(y.pathname + y.hash, void 0, void 0, !1)
                }
        }();
        r.sameOrigin = c
    }).call(e, n(31))
}, function(t, e, n) {
    function r(t) {
        for (var e, n = [], r = 0, i = 0, o = ""; null != (e = v.exec(t));) {
            var s = e[0],
                u = e[1],
                l = e.index;
            if (o += t.slice(i, l), i = l + s.length, u) o += u[1];
            else {
                o && (n.push(o), o = "");
                var c = e[2],
                    p = e[3],
                    f = e[4],
                    h = e[5],
                    d = e[6],
                    y = e[7],
                    g = "+" === d || "*" === d,
                    m = "?" === d || "*" === d,
                    _ = c || "/",
                    b = f || h || (y ? ".*" : "[^" + _ + "]+?");
                n.push({
                    name: p || r++,
                    prefix: c || "",
                    delimiter: _,
                    optional: m,
                    repeat: g,
                    pattern: a(b)
                })
            }
        }
        return i < t.length && (o += t.substr(i)), o && n.push(o), n
    }

    function i(t) {
        return o(r(t))
    }

    function o(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (e[n] = new RegExp("^" + t[n].pattern + "$"));
        return function(n) {
            for (var r = "", i = n || {}, o = 0; o < t.length; o++) {
                var s = t[o];
                if ("string" != typeof s) {
                    var a, u = i[s.name];
                    if (null == u) {
                        if (s.optional) continue;
                        throw new TypeError('Expected "' + s.name + '" to be defined')
                    }
                    if (y(u)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received "' + u + '"');
                        if (0 === u.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var l = 0; l < u.length; l++) {
                            if (a = encodeURIComponent(u[l]), !e[o].test(a)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received "' + a + '"');
                            r += (0 === l ? s.prefix : s.delimiter) + a
                        }
                    } else {
                        if (a = encodeURIComponent(u), !e[o].test(a)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + a + '"');
                        r += s.prefix + a
                    }
                } else r += s
            }
            return r
        }
    }

    function s(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1")
    }

    function a(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1")
    }

    function u(t, e) {
        return t.keys = e, t
    }

    function l(t) {
        return t.sensitive ? "" : "i"
    }

    function c(t, e) {
        var n = t.source.match(/\((?!\?)/g);
        if (n)
            for (var r = 0; r < n.length; r++) e.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
        return u(t, e)
    }

    function p(t, e, n) {
        for (var r = [], i = 0; i < t.length; i++) r.push(d(t[i], e, n).source);
        return u(new RegExp("(?:" + r.join("|") + ")", l(n)), e)
    }

    function f(t, e, n) {
        for (var i = r(t), o = h(i, n), s = 0; s < i.length; s++) "string" != typeof i[s] && e.push(i[s]);
        return u(o, e)
    }

    function h(t, e) {
        e = e || {};
        for (var n = e.strict, r = !1 !== e.end, i = "", o = t[t.length - 1], a = "string" == typeof o && /\/$/.test(o), u = 0; u < t.length; u++) {
            var c = t[u];
            if ("string" == typeof c) i += s(c);
            else {
                var p = s(c.prefix),
                    f = c.pattern;
                c.repeat && (f += "(?:" + p + f + ")*"), f = c.optional ? p ? "(?:" + p + "(" + f + "))?" : "(" + f + ")?" : p + "(" + f + ")", i += f
            }
        }
        return n || (i = (a ? i.slice(0, -2) : i) + "(?:\\/(?=$))?"), i += r ? "$" : n && a ? "" : "(?=\\/|$)", new RegExp("^" + i, l(e))
    }

    function d(t, e, n) {
        return e = e || [], y(e) ? n || (n = {}) : (n = e, e = []), t instanceof RegExp ? c(t, e, n) : y(t) ? p(t, e, n) : f(t, e, n)
    }
    var y = n(103);
    t.exports = d, t.exports.parse = r, t.exports.compile = i, t.exports.tokensToFunction = o, t.exports.tokensToRegExp = h;
    var v = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"), "g")
}, function(t, e) {
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n
    }).call(e, n(8))
}, function(t, e, n) {
    t.exports = n(106)
}, function(t, e, n) {
    "use strict";
    (function(t, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, o = n(107),
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o);
        i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
        var a = (0, s.default)(i);
        e.default = a
    }).call(e, n(8), n(15)(t))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(50),
        o = n(32),
        s = n(110),
        a = r(s),
        u = n(111),
        l = r(u),
        c = n(112),
        p = r(c),
        f = n(113),
        h = r(f),
        d = n(114),
        y = r(d),
        v = n(115),
        g = r(v),
        m = n(116),
        _ = r(m),
        b = (0, i.combineReducers)({
            app: a.default,
            layout: l.default,
            photo: g.default,
            photos: _.default,
            index: p.default,
            screensaver: h.default,
            thumbnails: y.default,
            browser: (0, o.createResponsiveStateReducer)({
                mobile: 480,
                tablet: 960
            }, {
                extraFields: function() {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
            })
        });
    e.default = b
}, function(t, e, n) {
    var r, i, o = {
        asArray: function(t) {
            var e = this.getBreakPoints(t),
                n = this.getCustomQueries(t);
            return this._translate(this._makeSteps(this._toSortedArray(e))).concat(this._objToArr(n))
        },
        asObject: function(t) {
            return this._arrToObj(this.asArray(t))
        },
        getBreakPoints: function(t) {
            return Object.keys(t).reduce(function(e, n) {
                return "number" == typeof t[n] && (e[n] = t[n]), e
            }, {})
        },
        getCustomQueries: function(t) {
            return Object.keys(t).reduce(function(e, n) {
                return "string" == typeof t[n] && (e[n] = t[n]), e
            }, {})
        },
        _toSortedArray: function(t) {
            return Object.keys(t).map(function(e) {
                return [e, t[e]]
            }).sort(function(t, e) {
                return t[1] - e[1]
            })
        },
        _makeSteps: function(t) {
            return t[t.length - 1][1] === 1 / 0 ? t : t.concat([1 / 0])
        },
        _translate: function(t) {
            return t.map(function(e, n) {
                return 0 === n ? [e[0], "screen and (max-width: " + e[1] + "px)"] : n === t.length - 1 ? [e[0] || "default", "screen and (min-width: " + (t[n - 1][1] + 1) + "px)"] : [e[0], "screen and (min-width: " + (t[n - 1][1] + 1) + "px) and (max-width: " + e[1] + "px)"]
            })
        },
        _objToArr: function(t) {
            return Object.keys(t).map(function(e) {
                return [e, t[e]]
            })
        },
        _arrToObj: function(t) {
            return t.reduce(function(t, e) {
                return t[e[0]] = e[1], t
            }, {})
        }
    };
    void 0 !== t && void 0 !== t.exports ? t.exports = o : (r = [], void 0 !== (i = function() {
        return o
    }.apply(e, r)) && (t.exports = i))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.app = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(52),
        o = {
            routes: [],
            params: null,
            location: null,
            isAnimating: !1,
            isFirstShow: !0,
            isNewCollection: !1,
            needHideCollection: !1,
            needShowCollection: !1,
            page: null,
            oldPage: null,
            meta: {},
            direction: 0
        },
        s = e.app = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.SET_META:
                    return r({}, t, {
                        meta: e.meta
                    });
                case i.SET_MOBILE:
                    return Object.assign({}, t, {
                        isMobile: e.isMobile
                    });
                case i.SET_ROUTES:
                    return Object.assign({}, t, {
                        routes: e.routes
                    });
                case i.NAVIGATION:
                    return Object.assign({}, t, {
                        params: e.params,
                        location: e.location
                    });
                case i.SET_ANIMATING:
                    return r({}, t, {
                        isAnimating: e.isAnimating
                    });
                case i.SET_DIRECTION:
                    return r({}, t, {
                        direction: e.direction
                    });
                case i.SET_FIRST_SHOW:
                    return r({}, t, {
                        isFirstShow: e.isFirstShow
                    });
                case i.SET_NEW_COLLECTION:
                    return r({}, t, {
                        isNewCollection: e.isNewCollection
                    });
                case i.SET_HIDE_NEW_COLLECTION:
                    return r({}, t, {
                        needHideCollection: e.needHideCollection
                    });
                case i.SET_SHOW_NEW_COLLECTION:
                    return r({}, t, {
                        needShowCollection: e.needShowCollection
                    });
                case i.SET_PAGE:
                    return r({}, t, {
                        page: e.page
                    });
                case i.SET_OLDPAGE:
                    return r({}, t, {
                        oldPage: e.oldPage
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.layout = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(53),
        o = {
            orientation: null
        },
        s = e.layout = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
            switch (arguments[1].type) {
                case i.SET_ORIENTATION:
                    var e = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
                    return r({}, t, {
                        orientation: e
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.header = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(54),
        o = {
            isActive: !1,
            isAnimating: !1
        },
        s = e.header = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.OPEN_INDEX:
                    return r({}, t, {
                        isActive: !0
                    });
                case i.CLOSE_INDEX:
                    return r({}, t, {
                        isActive: !1
                    });
                case i.SET_ANIMATING:
                    return r({}, t, {
                        isAnimating: e.isAnimating
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.header = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(55),
        o = {
            isActive: !1,
            isAnimating: !1,
            isShown: !1
        },
        s = e.header = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.OPEN_SCREENSAVER:
                    return r({}, t, {
                        isActive: !0
                    });
                case i.CLOSE_SCREENSAVER:
                    return r({}, t, {
                        isActive: !1
                    });
                case i.SET_ANIMATING:
                    return r({}, t, {
                        isAnimating: e.isAnimating
                    });
                case i.SET_SHOWN:
                    return r({}, t, {
                        isShown: e.isShown
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.header = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(56),
        o = {
            isActive: !1,
            isAnimating: !1
        },
        s = e.header = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.OPEN_THUMBNAILS:
                    return r({}, t, {
                        isActive: !0
                    });
                case i.CLOSE_THUMBNAILS:
                    return r({}, t, {
                        isActive: !1
                    });
                case i.SET_ANIMATING:
                    return r({}, t, {
                        isAnimating: e.isAnimating
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.photo = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(57),
        o = {
            is_photo_ready: !1,
            dimensions: {
                x: 0,
                y: 0
            }
        },
        s = e.photo = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.SET_PHOTO_READY:
                    return r({}, t, {
                        is_photo_ready: e.isReady
                    });
                case i.SET_PHOTO_DIMENSIONS:
                    return Object.assign({}, t, {
                        dimensions: e.dimensions
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.photos = void 0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(9),
        o = {
            current_photo: null,
            current_collection: null,
            collections: []
        },
        s = e.photos = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case i.SET_CURRENT_PHOTO:
                    return r({}, t, {
                        current_photo: e.current_photo
                    });
                case i.SET_CURRENT_CATEGORY:
                    return r({}, t, {
                        current_collection: e.current_category
                    });
                case i.SET_PHOTOS:
                    return r({}, t, {
                        collections: e.collections
                    });
                default:
                    return t
            }
        };
    e.default = s
}, function(t, e) {
    t.exports = {
        photo: {
            id: "PHOTO",
            url: "/",
            template: "photo",
            json: "index.json"
        },
        error: {
            id: "NOT_FOUND",
            url: "/error",
            template: "error",
            jsonUrl: "error.json"
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return {
            type: s.SET_CURRENT_PHOTO,
            current_photo: t
        }
    }

    function i(t) {
        return {
            type: s.SET_CURRENT_CATEGORY,
            current_category: t
        }
    }

    function o(t) {
        return {
            type: s.SET_PHOTOS,
            collections: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setCurrentPhoto = r, e.setCurrentCategory = i, e.setPhotos = o;
    var s = n(9)
}, function(t, e, n) {
    function r(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var u = null == n ? 0 : s(n);
        return u < 0 && (u = a(r + u, 0)), i(t, o(e, 3), u)
    }
    var i = n(58),
        o = n(59),
        s = n(74),
        a = Math.max;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = o(t);
        return 1 == e.length && e[0][2] ? s(e[0][0], e[0][1]) : function(n) {
            return n === t || i(n, t, e)
        }
    }
    var i = n(121),
        o = n(183),
        s = n(72);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r) {
        var u = n.length,
            l = u,
            c = !r;
        if (null == t) return !l;
        for (t = Object(t); u--;) {
            var p = n[u];
            if (c && p[2] ? p[1] !== t[p[0]] : !(p[0] in t)) return !1
        }
        for (; ++u < l;) {
            p = n[u];
            var f = p[0],
                h = t[f],
                d = p[1];
            if (c && p[2]) {
                if (void 0 === h && !(f in t)) return !1
            } else {
                var y = new i;
                if (r) var v = r(h, d, f, t, e, y);
                if (!(void 0 === v ? o(d, h, s | a, r, y) : v)) return !1
            }
        }
        return !0
    }
    var i = n(60),
        o = n(64),
        s = 1,
        a = 2;
    t.exports = r
}, function(t, e) {
    function n() {
        this.__data__ = [], this.size = 0
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = i(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : s.call(e, n, 1), --this.size, !0)
    }
    var i = n(17),
        o = Array.prototype,
        s = o.splice;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = i(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var i = n(17);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(this.__data__, t) > -1
    }
    var i = n(17);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__,
            r = i(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }
    var i = n(17);
    t.exports = r
}, function(t, e, n) {
    function r() {
        this.__data__ = new i, this.size = 0
    }
    var i = n(16);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.get(t)
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        if (n instanceof i) {
            var r = n.__data__;
            if (!o || r.length < a - 1) return r.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new s(r)
        }
        return n.set(t, e), this.size = n.size, this
    }
    var i = n(16),
        o = n(33),
        s = n(34),
        a = 200;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return !(!s(t) || o(t)) && (i(t) ? d : l).test(a(t))
    }
    var i = n(18),
        o = n(135),
        s = n(4),
        a = n(63),
        u = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        p = Object.prototype,
        f = c.toString,
        h = p.hasOwnProperty,
        d = RegExp("^" + f.call(h).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = s.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
    var i = n(19),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.toString,
        u = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, e) {
    function n(t) {
        return i.call(t)
    }
    var r = Object.prototype,
        i = r.toString;
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return !!o && o in t
    }
    var i = n(136),
        o = function() {
            var t = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = r
}, function(t, e, n) {
    var r = n(1),
        i = r["__core-js_shared__"];
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = n
}, function(t, e, n) {
    function r() {
        this.size = 0, this.__data__ = {
            hash: new i,
            map: new(s || o),
            string: new i
        }
    }
    var i = n(139),
        o = n(16),
        s = n(33);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(140),
        o = n(141),
        s = n(142),
        a = n(143),
        u = n(144);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function(t, e, n) {
    function r() {
        this.__data__ = i ? i(null) : {}, this.size = 0
    }
    var i = n(20);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        if (i) {
            var n = e[t];
            return n === o ? void 0 : n
        }
        return a.call(e, t) ? e[t] : void 0
    }
    var i = n(20),
        o = "__lodash_hash_undefined__",
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : s.call(e, t)
    }
    var i = n(20),
        o = Object.prototype,
        s = o.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? o : e, this
    }
    var i = n(20),
        o = "__lodash_hash_undefined__";
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = i(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var i = n(21);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return i(this, t).get(t)
    }
    var i = n(21);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(this, t).has(t)
    }
    var i = n(21);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = i(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }
    var i = n(21);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, v, m) {
        var _ = l(t),
            b = l(e),
            w = _ ? d : u(t),
            x = b ? d : u(e);
        w = w == h ? y : w, x = x == h ? y : x;
        var T = w == y,
            O = x == y,
            k = w == x;
        if (k && c(t)) {
            if (!c(e)) return !1;
            _ = !0, T = !1
        }
        if (k && !T) return m || (m = new i), _ || p(t) ? o(t, e, n, r, v, m) : s(t, e, w, n, r, v, m);
        if (!(n & f)) {
            var S = T && g.call(t, "__wrapped__"),
                P = O && g.call(e, "__wrapped__");
            if (S || P) {
                var E = S ? t.value() : t,
                    j = P ? e.value() : e;
                return m || (m = new i), v(E, j, n, r, m)
            }
        }
        return !!k && (m || (m = new i), a(t, e, n, r, v, m))
    }
    var i = n(60),
        o = n(65),
        s = n(156),
        a = n(160),
        u = n(179),
        l = n(2),
        c = n(68),
        p = n(69),
        f = 1,
        h = "[object Arguments]",
        d = "[object Array]",
        y = "[object Object]",
        v = Object.prototype,
        g = v.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new i; ++e < n;) this.add(t[e])
    }
    var i = n(34),
        o = n(152),
        s = n(153);
    r.prototype.add = r.prototype.push = o, r.prototype.has = s, t.exports = r
}, function(t, e) {
    function n(t) {
        return this.__data__.set(t, r), this
    }
    var r = "__lodash_hash_undefined__";
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        return t.has(e)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, i, T, k) {
        switch (n) {
            case x:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case w:
                return !(t.byteLength != e.byteLength || !T(new o(t), new o(e)));
            case f:
            case h:
            case v:
                return s(+t, +e);
            case d:
                return t.name == e.name && t.message == e.message;
            case g:
            case _:
                return t == e + "";
            case y:
                var S = u;
            case m:
                var P = r & c;
                if (S || (S = l), t.size != e.size && !P) return !1;
                var E = k.get(t);
                if (E) return E == e;
                r |= p, k.set(t, e);
                var j = a(S(t), S(e), r, i, T, k);
                return k.delete(t), j;
            case b:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
    var i = n(19),
        o = n(157),
        s = n(61),
        a = n(65),
        u = n(158),
        l = n(159),
        c = 1,
        p = 2,
        f = "[object Boolean]",
        h = "[object Date]",
        d = "[object Error]",
        y = "[object Map]",
        v = "[object Number]",
        g = "[object RegExp]",
        m = "[object Set]",
        _ = "[object String]",
        b = "[object Symbol]",
        w = "[object ArrayBuffer]",
        x = "[object DataView]",
        T = i ? i.prototype : void 0,
        O = T ? T.valueOf : void 0;
    t.exports = r
}, function(t, e, n) {
    var r = n(1),
        i = r.Uint8Array;
    t.exports = i
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, s, u) {
        var l = n & o,
            c = i(t),
            p = c.length;
        if (p != i(e).length && !l) return !1;
        for (var f = p; f--;) {
            var h = c[f];
            if (!(l ? h in e : a.call(e, h))) return !1
        }
        var d = u.get(t);
        if (d && u.get(e)) return d == e;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var v = l; ++f < p;) {
            h = c[f];
            var g = t[h],
                m = e[h];
            if (r) var _ = l ? r(m, g, h, e, t, u) : r(g, m, h, t, e, u);
            if (!(void 0 === _ ? g === m || s(g, m, n, r, u) : _)) {
                y = !1;
                break
            }
            v || (v = "constructor" == h)
        }
        if (y && !v) {
            var b = t.constructor,
                w = e.constructor;
            b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (y = !1)
        }
        return u.delete(t), u.delete(e), y
    }
    var i = n(161),
        o = 1,
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(t, s, o)
    }
    var i = n(162),
        o = n(164),
        s = n(66);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = e(t);
        return o(t) ? r : i(r, n(t))
    }
    var i = n(163),
        o = n(2);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(165),
        i = n(166),
        o = Object.prototype,
        s = o.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return s.call(t, e)
            }))
        } : i;
    t.exports = u
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var s = t[n];
            e(s, n, t) && (o[i++] = s)
        }
        return o
    }
    t.exports = n
}, function(t, e) {
    function n() {
        return []
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        var n = s(t),
            r = !n && o(t),
            c = !n && !r && a(t),
            f = !n && !r && !c && l(t),
            h = n || r || c || f,
            d = h ? i(t.length, String) : [],
            y = d.length;
        for (var v in t) !e && !p.call(t, v) || h && ("length" == v || c && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, y)) || d.push(v);
        return d
    }
    var i = n(168),
        o = n(67),
        s = n(2),
        a = n(68),
        u = n(22),
        l = n(69),
        c = Object.prototype,
        p = c.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return o(t) && i(t) == s
    }
    var i = n(14),
        o = n(12),
        s = "[object Arguments]";
    t.exports = r
}, function(t, e) {
    function n() {
        return !1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return s(t) && o(t.length) && !!a[i(t)]
    }
    var i = n(14),
        o = n(35),
        s = n(12),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = r
}, function(t, e) {
    function n(t) {
        return function(e) {
            return t(e)
        }
    }
    t.exports = n
}, function(t, e, n) {
    (function(t) {
        var r = n(62),
            i = "object" == typeof e && e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s && r.process,
            u = function() {
                try {
                    return a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(e, n(15)(t))
}, function(t, e, n) {
    function r(t) {
        if (!i(t)) return o(t);
        var e = [];
        for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
    var i = n(175),
        o = n(176),
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
    var r = Object.prototype;
    t.exports = n
}, function(t, e, n) {
    var r = n(177),
        i = r(Object.keys, Object);
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return null != t && o(t.length) && !i(t)
    }
    var i = n(18),
        o = n(35);
    t.exports = r
}, function(t, e, n) {
    var r = n(180),
        i = n(33),
        o = n(181),
        s = n(182),
        a = n(70),
        u = n(14),
        l = n(63),
        c = l(r),
        p = l(i),
        f = l(o),
        h = l(s),
        d = l(a),
        y = u;
    (r && "[object DataView]" != y(new r(new ArrayBuffer(1))) || i && "[object Map]" != y(new i) || o && "[object Promise]" != y(o.resolve()) || s && "[object Set]" != y(new s) || a && "[object WeakMap]" != y(new a)) && (y = function(t) {
        var e = u(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? l(n) : "";
        if (r) switch (r) {
            case c:
                return "[object DataView]";
            case p:
                return "[object Map]";
            case f:
                return "[object Promise]";
            case h:
                return "[object Set]";
            case d:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = y
}, function(t, e, n) {
    var r = n(6),
        i = n(1),
        o = r(i, "DataView");
    t.exports = o
}, function(t, e, n) {
    var r = n(6),
        i = n(1),
        o = r(i, "Promise");
    t.exports = o
}, function(t, e, n) {
    var r = n(6),
        i = n(1),
        o = r(i, "Set");
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        for (var e = o(t), n = e.length; n--;) {
            var r = e[n],
                s = t[r];
            e[n] = [r, s, i(s)]
        }
        return e
    }
    var i = n(71),
        o = n(66);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        return a(t) && u(e) ? l(c(t), e) : function(n) {
            var r = o(n, t);
            return void 0 === r && r === e ? s(n, t) : i(e, r, p | f)
        }
    }
    var i = n(64),
        o = n(185),
        s = n(191),
        a = n(37),
        u = n(71),
        l = n(72),
        c = n(13),
        p = 1,
        f = 2;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = null == t ? void 0 : i(t, e);
        return void 0 === r ? n : r
    }
    var i = n(36);
    t.exports = r
}, function(t, e, n) {
    var r = n(187),
        i = /^\./,
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return i.test(t) && e.push(""), t.replace(o, function(t, n, r, i) {
                e.push(r ? i.replace(s, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    function r(t) {
        var e = i(t, function(t) {
                return n.size === o && n.clear(), t
            }),
            n = e.cache;
        return e
    }
    var i = n(188),
        o = 500;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, r);
            return n.cache = o.set(i, s) || o, s
        };
        return n.cache = new(r.Cache || i), n
    }
    var i = n(34),
        o = "Expected a function";
    r.Cache = i, t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return o(t, r) + "";
        if (a(t)) return c ? c.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -u ? "-0" : e
    }
    var i = n(19),
        o = n(190),
        s = n(2),
        a = n(24),
        u = 1 / 0,
        l = i ? i.prototype : void 0,
        c = l ? l.toString : void 0;
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return null != t && o(t, e, i)
    }
    var i = n(192),
        o = n(193);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        return null != t && e in Object(t)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n) {
        e = i(e, t);
        for (var r = -1, c = e.length, p = !1; ++r < c;) {
            var f = l(e[r]);
            if (!(p = null != t && n(t, f))) break;
            t = t[f]
        }
        return p || ++r != c ? p : !!(c = null == t ? 0 : t.length) && u(c) && a(f, c) && (s(t) || o(t))
    }
    var i = n(23),
        o = n(67),
        s = n(2),
        a = n(22),
        u = n(35),
        l = n(13);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return s(t) ? i(a(t)) : o(t)
    }
    var i = n(195),
        o = n(196),
        s = n(37),
        a = n(13);
    t.exports = r
}, function(t, e) {
    function n(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return function(e) {
            return i(e, t)
        }
    }
    var i = n(36);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = i(t)) === o || t === -o) {
            return (t < 0 ? -1 : 1) * s
        }
        return t === t ? t : 0
    }
    var i = n(75),
        o = 1 / 0,
        s = 1.7976931348623157e308;
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(40),
        l = r(u),
        c = n(200),
        p = r(c),
        f = n(255),
        h = r(f),
        d = n(260),
        y = r(d),
        v = n(263),
        g = r(v),
        m = n(267),
        _ = r(m),
        b = n(38),
        w = n(9),
        x = n(99),
        T = n(11),
        O = n(95),
        k = r(O),
        S = n(10),
        P = n(0),
        E = r(P),
        j = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.prevLocation = null, n.location = null, n.layout = null, n.loader = null, n.page = null, n.oldPage = null, n.storeEvents = {
                    "app.location": function(t, e) {
                        return n.onLocationChanged(t, e)
                    },
                    "photos.current_collection": function(t, e) {
                        return n.onCategoryChanged(t, e)
                    }
                }, n
            }
            return s(e, t), a(e, [{
                key: "init",
                value: function() {
                    return this.layout = new p.default, this.layout.init()
                }
            }, {
                key: "onLocationChanged",
                value: function(t, e) {
                    this.prevLocation = e, t !== e && (this.location = t, this.routing(t, !1))
                }
            }, {
                key: "onCategoryChanged",
                value: function() {}
            }, {
                key: "routing",
                value: function(t) {
                    var e = this,
                        n = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], null);
                    switch (t) {
                        case b.HOMEPAGE:
                            n = h.default;
                            break;
                        case b.PHOTO:
                            n = g.default;
                            break;
                        case b.ABOUT:
                            n = y.default;
                            break;
                        case b.NOT_FOUND:
                            n = _.default;
                            break;
                        default:
                            n = g.default
                    }
                    if (null !== n) {
                        E.default.dispatch((0, S.setAnimating)(!0));
                        var r = null;
                        null === this.oldPage && null === this.page && (r = document.getElementsByClassName("page-wrapper")[0]);
                        var i = (0, x.getRoute)(t);
                        this.page && (this.oldPage = this.page, E.default.dispatch((0, S.setOldPage)(this.oldPage))), this.page = new n({
                            el: r || null,
                            endPoint: i && i.json ? i.json : null,
                            data: E.default.getState().photos.current_photo,
                            needRender: !r
                        });
                        var o = E.default.getState().app.direction,
                            s = void 0,
                            a = void 0;
                        0 === o && (s = (0, T.getNextPhoto)(), a = (0, T.getPreviousPhoto)()), 1 === o && (s = (0, T.getNextPhoto)(), a = (0, T.getNextPhoto)(2)), -1 === o && (s = (0, T.getPreviousPhoto)(), a = (0, T.getPreviousPhoto)(2)), this.preloadPhoto(s), this.preloadPhoto(a), E.default.dispatch((0, S.setPage)(this.page)), this.page.init().then(function() {
                            e.layout.triggerResize(), e.oldPage ? e.oldPage.hide().then(function() {
                                e.oldPage.dispose(), e.oldPage = null, e.showPage()
                            }) : (e.layout.show(), e.showPage())
                        })
                    }
                }
            }, {
                key: "showPage",
                value: function() {
                    var t = this;
                    this.page.show().then(function() {
                        E.default.dispatch((0, S.setAnimating)(!1)), E.default.dispatch((0, S.setFirstShow)(!1)), t.oldPage && (t.oldPage.dispose(), t.oldPage = null)
                    })
                }
            }, {
                key: "preloadPhoto",
                value: function(t) {
                    var e = t.cols ? t.cols : w.DEFAULT_COLUMNS;
                    (t.type === w.FULLSCREEN || E.default.getState().browser.lessThan.infinity) && (e = w.MAX_COLUMNS);
                    var n = E.default.getState().browser.width,
                        r = E.default.getState().browser.height,
                        i = t.assets.main.width,
                        o = t.assets.main.height;
                    k.default.loadImage({
                        assets: t.assets,
                        columns: e,
                        wWidth: n,
                        wHeight: r,
                        photoWidth: i,
                        photoHeight: o,
                        fullScreen: "Fullscreen" === t.type,
                        isMobile: E.default.getState().browser.lessThan.infinity,
                        orientation: E.default.getState().layout.orientation
                    })
                }
            }]), e
        }(l.default);
    e.default = j
}, function(t, e, n) {
    var r, i, o;
    ! function(n, s) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = s() : (i = [], r = s, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o))
    }(0, function() {
        "use strict";

        function t(t) {
            if (!t) return !0;
            if (o(t) && 0 === t.length) return !0;
            if (!r(t)) {
                for (var e in t)
                    if (p.call(t, e)) return !1;
                return !0
            }
            return !1
        }

        function e(t) {
            return c.call(t)
        }

        function n(t) {
            return "number" == typeof t || "[object Number]" === e(t)
        }

        function r(t) {
            return "string" == typeof t || "[object String]" === e(t)
        }

        function i(t) {
            return "object" == typeof t && "[object Object]" === e(t)
        }

        function o(t) {
            return "object" == typeof t && "number" == typeof t.length && "[object Array]" === e(t)
        }

        function s(t) {
            return "boolean" == typeof t || "[object Boolean]" === e(t)
        }

        function a(t) {
            var e = parseInt(t);
            return e.toString() === t ? e : t
        }

        function u(e, i, o, s) {
            if (n(i) && (i = [i]), t(i)) return e;
            if (r(i)) return u(e, i.split(".").map(a), o, s);
            var l = i[0];
            if (1 === i.length) {
                var c = e[l];
                return void 0 !== c && s || (e[l] = o), c
            }
            return void 0 === e[l] && (n(i[1]) ? e[l] = [] : e[l] = {}), u(e[l], i.slice(1), o, s)
        }

        function l(e, i) {
            if (n(i) && (i = [i]), !t(e)) {
                if (t(i)) return e;
                if (r(i)) return l(e, i.split("."));
                var s = a(i[0]),
                    u = e[s];
                if (1 === i.length) void 0 !== u && (o(e) ? e.splice(s, 1) : delete e[s]);
                else if (void 0 !== e[s]) return l(e[s], i.slice(1));
                return e
            }
        }
        var c = Object.prototype.toString,
            p = Object.prototype.hasOwnProperty,
            f = function(t) {
                return Object.keys(f).reduce(function(e, n) {
                    return "function" == typeof f[n] && (e[n] = f[n].bind(f, t)), e
                }, {})
            };
        return f.has = function(e, s) {
            if (t(e)) return !1;
            if (n(s) ? s = [s] : r(s) && (s = s.split(".")), t(s) || 0 === s.length) return !1;
            for (var a = 0; a < s.length; a++) {
                var u = s[a];
                if (!i(e) && !o(e) || !p.call(e, u)) return !1;
                e = e[u]
            }
            return !0
        }, f.ensureExists = function(t, e, n) {
            return u(t, e, n, !0)
        }, f.set = function(t, e, n, r) {
            return u(t, e, n, r)
        }, f.insert = function(t, e, n, r) {
            var i = f.get(t, e);
            r = ~~r, o(i) || (i = [], f.set(t, e, i)), i.splice(r, 0, n)
        }, f.empty = function(e, a) {
            if (t(a)) return e;
            if (!t(e)) {
                var u, l;
                if (!(u = f.get(e, a))) return e;
                if (r(u)) return f.set(e, a, "");
                if (s(u)) return f.set(e, a, !1);
                if (n(u)) return f.set(e, a, 0);
                if (o(u)) u.length = 0;
                else {
                    if (!i(u)) return f.set(e, a, null);
                    for (l in u) p.call(u, l) && delete u[l]
                }
            }
        }, f.push = function(t, e) {
            var n = f.get(t, e);
            o(n) || (n = [], f.set(t, e, n)), n.push.apply(n, Array.prototype.slice.call(arguments, 2))
        }, f.coalesce = function(t, e, n) {
            for (var r, i = 0, o = e.length; i < o; i++)
                if (void 0 !== (r = f.get(t, e[i]))) return r;
            return n
        }, f.get = function(e, i, o) {
            if (n(i) && (i = [i]), t(i)) return e;
            if (t(e)) return o;
            if (r(i)) return f.get(e, i.split("."), o);
            var s = a(i[0]);
            return 1 === i.length ? void 0 === e[s] ? o : e[s] : f.get(e[s], i.slice(1), o)
        }, f.del = function(t, e) {
            return l(t, e)
        }, f
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(5),
        l = r(u),
        c = n(32),
        p = n(0),
        f = r(p),
        h = n(201),
        d = r(h),
        y = n(254),
        v = n(93),
        g = function(t) {
            function e() {
                i(this, e);
                var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.Component = d.default, t
            }
            return s(e, t), a(e, [{
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.resize = function(e) {
                        return t.resizeAction(e)
                    }, this.options.actions.setOrientation = function() {
                        return t.setOrientation()
                    }, this.options.actions.showScreenSaver = function() {
                        return t.showScreenSaver()
                    }, this.options.actions.closeScreenSaver = function() {
                        return t.closeScreenSaver()
                    }
                }
            }, {
                key: "resizeAction",
                value: function(t) {
                    f.default.dispatch((0, c.calculateResponsiveState)(t))
                }
            }, {
                key: "setOrientation",
                value: function(t) {
                    f.default.dispatch((0, y.setOrientation)(t))
                }
            }, {
                key: "showScreenSaver",
                value: function() {
                    f.default.dispatch((0, v.openScreenSaver)())
                }
            }, {
                key: "closeScreenSaver",
                value: function() {
                    f.default.dispatch((0, v.closeScreenSaver)())
                }
            }, {
                key: "triggerResize",
                value: function() {
                    this._component.triggerResize()
                }
            }, {
                key: "setMeta",
                value: function() {
                    this._component.setMeta()
                }
            }]), e
        }(l.default);
    e.default = g
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(202),
        u = r(a),
        l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        c = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        p = n(3),
        f = r(p),
        h = n(0),
        d = r(h),
        y = n(76),
        v = r(y),
        g = n(46),
        m = r(g),
        _ = n(234),
        b = r(_),
        w = n(235),
        x = r(w),
        T = n(237),
        O = r(T),
        k = n(240),
        S = r(k),
        P = n(248),
        E = r(P),
        j = n(250),
        C = r(j),
        A = n(251),
        M = r(A),
        I = n(48),
        N = r(I),
        R = n(30),
        L = r(R),
        D = n(11),
        F = n(252),
        z = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                n.scrollTicket = !1, n.header = null, n.intro = null, n.index = null, n.cursor = null, n.el = document.documentElement;
                var r = (0, v.default)(d.default.getState, "app.meta");
                d.default.subscribe(r(function(t, e, r) {
                    return n.setMeta(t, e)
                }));
                var s = (0, v.default)(d.default.getState, "app.location");
                return d.default.subscribe(s(function(t, e, r) {
                    return n.setLocationClass(t)
                })), n.storeEvents = {
                    "app.meta": function(t, e) {
                        return n.setMeta(t, e)
                    },
                    "app.location": function(t, e) {
                        return n.setLocationClass(t)
                    },
                    "photos.current_photo.backgroundColor": function(t, e) {
                        return n.setBackgroundColor(t)
                    }
                }, n
            }
            return s(e, t), l(e, [{
                key: "initDOM",
                value: function() {
                    this.$content = this.$el.find("#content"), this.$title = this.$el.find("head > title"), this.$metaDescription = this.$el.find("head > meta[name=description]")
                }
            }, {
                key: "onDOMInit",
                value: function() {
                    var t = this,
                        n = [];
                    this.header = new x.default({
                        el: document.getElementById("main-header")
                    }), n.push(this.header.init()), this.intro = new M.default({
                        el: document.querySelector(".intro-container")
                    }), n.push(this.intro.init()), this.cursor = new C.default({
                        el: document.querySelector(".custom-cursor-container")
                    }), n.push(this.cursor.init()), this.index = new O.default({
                        el: document.querySelector(".index-container")
                    }), n.push(this.index.init()), this.screenSaver = new S.default({
                        el: document.querySelector(".screensaver-container")
                    }), n.push(this.screenSaver.init()), this.thumbnails = new E.default({
                        el: document.querySelector(".thumbnails-container")
                    }), n.push(this.thumbnails.init()), window.scrollTo(0, 0), this.timer = null, this.handlers.mouseStopped = function() {
                        return t.mouseStopped()
                    }, document.addEventListener("mousemove", (0, u.default)(function() {
                        t.checkScreenSaverDisplay()
                    }, 800)), Promise.all(n).then(function() {
                        t.onUpdate(), t.checkScreenSaverDisplay(), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDOMInit", t).call(t)
                    })
                }
            }, {
                key: "checkScreenSaverDisplay",
                value: function() {
                    d.default.getState().screensaver.isActive && d.default.getState().screensaver.isShown ? this.actions.closeScreenSaver() : (clearTimeout(this.timer), this.timer = setTimeout(this.handlers.mouseStopped, 25e3))
                }
            }, {
                key: "mouseStopped",
                value: function() {
                    this.actions.showScreenSaver()
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    d.default.getState().app.isMobile && (this.actions.setOrientation(window), this.bindMobileEvents()), window.addEventListener("orientationchange", (0, F.debounce)(function() {
                        t.actions.resize(window)
                    }, 100), !1), window.addEventListener("resize", (0, F.debounce)(function() {
                        d.default.getState().app.isMobile && t.actions.setOrientation(window), t.actions.resize(window)
                    }, 100), !1), this.actions.resize(window), window.addEventListener("scroll", function() {
                        t.scrollTicket = !0
                    }, !1), window.addEventListener("mousemove", function(e) {
                        return t.onMouseMove(e)
                    }, !1), this.undelegateEvents(), document.addEventListener("keydown", (0, u.default)(function(e) {
                        t.onKeyDown(e)
                    }, 500))
                }
            }, {
                key: "bindMobileEvents",
                value: function() {
                    var t = this,
                        e = this.$content[0],
                        n = new b.default.Manager(e),
                        r = new b.default.Swipe;
                    n.add(r), n.on("swipe", function(e) {
                        2 === e.direction || 8 === e.direction ? t.updateProject(1) : 4 !== e.direction && 16 !== e.direction || t.updateProject(-1)
                    })
                }
            }, {
                key: "onKeyDown",
                value: function(t) {
                    this.checkScreenSaverDisplay(), 38 !== t.keyCode && 37 !== t.keyCode || this.updateProject(-1), 40 !== t.keyCode && 39 !== t.keyCode || this.updateProject(1)
                }
            }, {
                key: "updateProject",
                value: function(t) {
                    if (d.default.getState().app.isAnimating) return !1;
                    var e = 1 === t ? (0, D.getNextPhoto)() : (0, D.getPreviousPhoto)();
                    L.default.navigate(e.slug)
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    m.default.set("mouse", {
                        x: t.pageX,
                        y: t.pageY
                    })
                }
            }, {
                key: "onUpdate",
                value: function() {
                    for (var t = this, e = 0; e < m.default.get("rafCallStack").length; e++) m.default.get("rafCallStack")[e]();
                    window.requestAnimationFrame(function() {
                        return t.onUpdate()
                    })
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.intro.show(), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "showComponent", t).call(t)
                    }, 0)
                }
            }, {
                key: "triggerResize",
                value: function() {
                    (0, N.default)(window).trigger("resize")
                }
            }, {
                key: "setMeta",
                value: function(t, e) {
                    this.$title.text(t.title), this.$metaDescription.val(t.description)
                }
            }, {
                key: "setLocationClass",
                value: function(t) {
                    this.el.setAttribute("location", t)
                }
            }, {
                key: "setBackgroundColor",
                value: function(t) {
                    this.$content[0].style.backgroundColor = t
                }
            }, {
                key: "resize",
                value: function() {
                    this.states.isShown
                }
            }]), e
        }(f.default);
    e.default = z
}, function(t, e, n) {
    function r(t, e, n) {
        var r = !0,
            a = !0;
        if ("function" != typeof t) throw new TypeError(s);
        return o(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), i(t, e, {
            leading: r,
            maxWait: e,
            trailing: a
        })
    }
    var i = n(203),
        o = n(4),
        s = "Expected a function";
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        function r(e) {
            var n = m,
                r = _;
            return m = _ = void 0, O = e, w = t.apply(r, n)
        }

        function c(t) {
            return O = t, x = setTimeout(h, e), k ? r(t) : w
        }

        function p(t) {
            var n = t - T,
                r = t - O,
                i = e - n;
            return S ? l(i, b - r) : i
        }

        function f(t) {
            var n = t - T,
                r = t - O;
            return void 0 === T || n >= e || n < 0 || S && r >= b
        }

        function h() {
            var t = o();
            if (f(t)) return d(t);
            x = setTimeout(h, p(t))
        }

        function d(t) {
            return x = void 0, P && m ? r(t) : (m = _ = void 0, w)
        }

        function y() {
            void 0 !== x && clearTimeout(x), O = 0, m = T = _ = x = void 0
        }

        function v() {
            return void 0 === x ? w : d(o())
        }

        function g() {
            var t = o(),
                n = f(t);
            if (m = arguments, _ = this, T = t, n) {
                if (void 0 === x) return c(T);
                if (S) return x = setTimeout(h, e), r(T)
            }
            return void 0 === x && (x = setTimeout(h, e)), w
        }
        var m, _, b, w, x, T, O = 0,
            k = !1,
            S = !1,
            P = !0;
        if ("function" != typeof t) throw new TypeError(a);
        return e = s(e) || 0, i(n) && (k = !!n.leading, S = "maxWait" in n, b = S ? u(s(n.maxWait) || 0, e) : b, P = "trailing" in n ? !!n.trailing : P), g.cancel = y, g.flush = v, g
    }
    var i = n(4),
        o = n(204),
        s = n(75),
        a = "Expected a function",
        u = Math.max,
        l = Math.min;
    t.exports = r
}, function(t, e, n) {
    var r = n(1),
        i = function() {
            return r.Date.now()
        };
    t.exports = i
}, function(t, e, n) {
    var r = n(206),
        i = n(211),
        o = n(45),
        s = n(27),
        a = r(function(t, e, n) {
            var r = 1;
            if (n.length) {
                var u = s(n, o(a));
                r |= 32
            }
            return i(t, r, e, n, u)
        });
    a.placeholder = {}, t.exports = a
}, function(t, e, n) {
    function r(t, e) {
        return s(o(t, e, i), t + "")
    }
    var i = n(25),
        o = n(207),
        s = n(77);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        return e = o(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var r = arguments, s = -1, a = o(r.length - e, 0), u = Array(a); ++s < a;) u[s] = r[e + s];
                s = -1;
                for (var l = Array(e + 1); ++s < e;) l[s] = r[s];
                return l[e] = n(u), i(t, this, l)
            }
    }
    var i = n(41),
        o = Math.max;
    t.exports = r
}, function(t, e, n) {
    var r = n(209),
        i = n(210),
        o = n(25),
        s = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = s
}, function(t, e) {
    function n(t) {
        return function() {
            return t
        }
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(6),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e, n) {
    function r(t, e, n, r, x, T, O, k) {
        var S = e & v;
        if (!S && "function" != typeof t) throw new TypeError(d);
        var P = r ? r.length : 0;
        if (P || (e &= ~(_ | b), r = x = void 0), O = void 0 === O ? O : w(h(O), 0), k = void 0 === k ? k : h(k), P -= x ? x.length : 0, e & b) {
            var E = r,
                j = x;
            r = x = void 0
        }
        var C = S ? void 0 : l(t),
            A = [t, e, n, r, x, E, j, T, O, k];
        if (C && c(A, C), t = A[0], e = A[1], n = A[2], r = A[3], x = A[4], k = A[9] = void 0 === A[9] ? S ? 0 : t.length : w(A[9] - P, 0), !k && e & (g | m) && (e &= ~(g | m)), e && e != y) M = e == g || e == m ? s(t, e, k) : e != _ && e != (y | _) || x.length ? a.apply(void 0, A) : u(t, e, n, r);
        else var M = o(t, e, n);
        return f((C ? i : p)(M, A), t, e)
    }
    var i = n(79),
        o = n(212),
        s = n(213),
        a = n(81),
        u = n(230),
        l = n(85),
        c = n(231),
        p = n(88),
        f = n(89),
        h = n(74),
        d = "Expected a function",
        y = 1,
        v = 2,
        g = 8,
        m = 16,
        _ = 32,
        b = 64,
        w = Math.max;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        function r() {
            return (this && this !== o && this instanceof r ? u : t).apply(a ? n : this, arguments)
        }
        var a = e & s,
            u = i(t);
        return r
    }
    var i = n(26),
        o = n(1),
        s = 1;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        function r() {
            for (var o = arguments.length, f = Array(o), h = o, d = u(r); h--;) f[h] = arguments[h];
            var y = o < 3 && f[0] !== d && f[o - 1] !== d ? [] : l(f, d);
            return (o -= y.length) < n ? a(t, e, s, r.placeholder, void 0, f, y, void 0, void 0, n - o) : i(this && this !== c && this instanceof r ? p : t, this, f)
        }
        var p = o(t);
        return r
    }
    var i = n(41),
        o = n(26),
        s = n(81),
        a = n(84),
        u = n(45),
        l = n(27),
        c = n(1);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = t.length, r = 0; n--;) t[n] === e && ++r;
        return r
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = s(t),
            n = a[e];
        if ("function" != typeof n || !(e in i.prototype)) return !1;
        if (t === n) return !0;
        var r = o(n);
        return !!r && t === r[0]
    }
    var i = n(43),
        o = n(85),
        s = n(217),
        a = n(219);
    t.exports = r
}, function(t, e) {
    function n() {}
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        for (var e = t.name + "", n = i[e], r = s.call(i, e) ? n.length : 0; r--;) {
            var o = n[r],
                a = o.func;
            if (null == a || a == t) return o.name
        }
        return e
    }
    var i = n(218),
        o = Object.prototype,
        s = o.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    var n = {};
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        if (u(t) && !a(t) && !(t instanceof i)) {
            if (t instanceof o) return t;
            if (p.call(t, "__wrapped__")) return l(t)
        }
        return new o(t)
    }
    var i = n(43),
        o = n(86),
        s = n(44),
        a = n(2),
        u = n(12),
        l = n(220),
        c = Object.prototype,
        p = c.hasOwnProperty;
    r.prototype = s.prototype, r.prototype.constructor = r, t.exports = r
}, function(t, e, n) {
    function r(t) {
        if (t instanceof i) return t.clone();
        var e = new o(t.__wrapped__, t.__chain__);
        return e.__actions__ = s(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
    var i = n(43),
        o = n(86),
        s = n(87);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = t.match(r);
        return e ? e[1].split(i) : []
    }
    var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
        i = /,? & /;
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        var n = e.length;
        if (!n) return t;
        var i = n - 1;
        return e[i] = (n > 1 ? "& " : "") + e[i], e = e.join(n > 2 ? ", " : " "), t.replace(r, "{\n/* [wrapped with " + e + "] */\n")
    }
    var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return i(s, function(n) {
            var r = "_." + n[0];
            e & n[1] && !o(t, r) && t.push(r)
        }), t.sort()
    }
    var i = n(224),
        o = n(225),
        s = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return !!(null == t ? 0 : t.length) && i(t, e, 0) > -1
    }
    var i = n(226);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        return e === e ? s(t, e, n) : i(t, o, n)
    }
    var i = n(58),
        o = n(227),
        s = n(228);
    t.exports = r
}, function(t, e) {
    function n(t) {
        return t !== t
    }
    t.exports = n
}, function(t, e) {
    function n(t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i;)
            if (t[r] === e) return r;
        return -1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        for (var n = t.length, r = s(e.length, n), a = i(t); r--;) {
            var u = e[r];
            t[r] = o(u, n) ? a[u] : void 0
        }
        return t
    }
    var i = n(87),
        o = n(22),
        s = Math.min;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r) {
        function u() {
            for (var e = -1, o = arguments.length, a = -1, p = r.length, f = Array(p + o), h = this && this !== s && this instanceof u ? c : t; ++a < p;) f[a] = r[a];
            for (; o--;) f[a++] = arguments[++e];
            return i(h, l ? n : this, f)
        }
        var l = e & a,
            c = o(t);
        return u
    }
    var i = n(41),
        o = n(26),
        s = n(1),
        a = 1;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = t[1],
            r = e[1],
            y = n | r,
            v = y < (u | l | f),
            g = r == f && n == p || r == f && n == h && t[7].length <= e[8] || r == (f | h) && e[7].length <= e[8] && n == p;
        if (!v && !g) return t;
        r & u && (t[2] = e[2], y |= n & u ? 0 : c);
        var m = e[3];
        if (m) {
            var _ = t[3];
            t[3] = _ ? i(_, m, e[4]) : m, t[4] = _ ? s(t[3], a) : e[4]
        }
        return m = e[5], m && (_ = t[5], t[5] = _ ? o(_, m, e[6]) : m, t[6] = _ ? s(t[5], a) : e[6]), m = e[7], m && (t[7] = m), r & f && (t[8] = null == t[8] ? e[8] : d(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = y, t
    }
    var i = n(82),
        o = n(83),
        s = n(27),
        a = "__lodash_placeholder__",
        u = 1,
        l = 2,
        c = 4,
        p = 8,
        f = 128,
        h = 256,
        d = Math.min;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        e = i(e, t);
        var r = -1,
            a = e.length;
        for (a || (a = 1, t = void 0); ++r < a;) {
            var u = null == t ? void 0 : t[s(e[r])];
            void 0 === u && (r = a, u = n), t = o(u) ? u.call(t) : u
        }
        return t
    }
    var i = n(23),
        o = n(18),
        s = n(13);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = ++o;
        return i(t) + e
    }
    var i = n(73),
        o = 0;
    t.exports = r
}, function(t, e, n) {
    var r;
    ! function(i, o, s, a) {
        "use strict";

        function u(t, e, n) {
            return setTimeout(h(t, n), e)
        }

        function l(t, e, n) {
            return !!Array.isArray(t) && (c(t, n[e], n), !0)
        }

        function c(t, e, n) {
            var r;
            if (t)
                if (t.forEach) t.forEach(e, n);
                else if (t.length !== a)
                for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
            else
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
        }

        function p(t, e, n) {
            var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
            return function() {
                var e = new Error("get-stack-trace"),
                    n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = i.console && (i.console.warn || i.console.log);
                return o && o.call(i.console, r, n), t.apply(this, arguments)
            }
        }

        function f(t, e, n) {
            var r, i = e.prototype;
            r = t.prototype = Object.create(i), r.constructor = t, r._super = i, n && dt(r, n)
        }

        function h(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function d(t, e) {
            return typeof t == gt ? t.apply(e ? e[0] || a : a, e) : t
        }

        function y(t, e) {
            return t === a ? e : t
        }

        function v(t, e, n) {
            c(b(e), function(e) {
                t.addEventListener(e, n, !1)
            })
        }

        function g(t, e, n) {
            c(b(e), function(e) {
                t.removeEventListener(e, n, !1)
            })
        }

        function m(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function _(t, e) {
            return t.indexOf(e) > -1
        }

        function b(t) {
            return t.trim().split(/\s+/g)
        }

        function w(t, e, n) {
            if (t.indexOf && !n) return t.indexOf(e);
            for (var r = 0; r < t.length;) {
                if (n && t[r][n] == e || !n && t[r] === e) return r;
                r++
            }
            return -1
        }

        function x(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function T(t, e, n) {
            for (var r = [], i = [], o = 0; o < t.length;) {
                var s = e ? t[o][e] : t[o];
                w(i, s) < 0 && r.push(t[o]), i[o] = s, o++
            }
            return n && (r = e ? r.sort(function(t, n) {
                return t[e] > n[e]
            }) : r.sort()), r
        }

        function O(t, e) {
            for (var n, r, i = e[0].toUpperCase() + e.slice(1), o = 0; o < yt.length;) {
                if (n = yt[o], (r = n ? n + i : e) in t) return r;
                o++
            }
            return a
        }

        function k() {
            return Tt++
        }

        function S(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || i
        }

        function P(t, e) {
            var n = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                d(t.options.enable, [t]) && n.handler(e)
            }, this.init()
        }

        function E(t) {
            var e = t.options.inputClass;
            return new(e || (St ? H : Pt ? Y : kt ? V : U))(t, j)
        }

        function j(t, e, n) {
            var r = n.pointers.length,
                i = n.changedPointers.length,
                o = e & jt && r - i == 0,
                s = e & (At | Mt) && r - i == 0;
            n.isFirst = !!o, n.isFinal = !!s, o && (t.session = {}), n.eventType = e, C(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function C(t, e) {
            var n = t.session,
                r = e.pointers,
                i = r.length;
            n.firstInput || (n.firstInput = I(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = I(e) : 1 === i && (n.firstMultiple = !1);
            var o = n.firstInput,
                s = n.firstMultiple,
                a = s ? s.center : o.center,
                u = e.center = N(r);
            e.timeStamp = bt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = F(a, u), e.distance = D(a, u), A(n, e), e.offsetDirection = L(e.deltaX, e.deltaY);
            var l = R(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = _t(l.x) > _t(l.y) ? l.x : l.y, e.scale = s ? $(s.pointers, r) : 1, e.rotation = s ? z(s.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, M(n, e);
            var c = t.element;
            m(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
        }

        function A(t, e) {
            var n = e.center,
                r = t.offsetDelta || {},
                i = t.prevDelta || {},
                o = t.prevInput || {};
            e.eventType !== jt && o.eventType !== At || (i = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, r = t.offsetDelta = {
                x: n.x,
                y: n.y
            }), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y)
        }

        function M(t, e) {
            var n, r, i, o, s = t.lastInterval || e,
                u = e.timeStamp - s.timeStamp;
            if (e.eventType != Mt && (u > Et || s.velocity === a)) {
                var l = e.deltaX - s.deltaX,
                    c = e.deltaY - s.deltaY,
                    p = R(u, l, c);
                r = p.x, i = p.y, n = _t(p.x) > _t(p.y) ? p.x : p.y, o = L(l, c), t.lastInterval = e
            } else n = s.velocity, r = s.velocityX, i = s.velocityY, o = s.direction;
            e.velocity = n, e.velocityX = r, e.velocityY = i, e.direction = o
        }

        function I(t) {
            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                clientX: mt(t.pointers[n].clientX),
                clientY: mt(t.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: bt(),
                pointers: e,
                center: N(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function N(t) {
            var e = t.length;
            if (1 === e) return {
                x: mt(t[0].clientX),
                y: mt(t[0].clientY)
            };
            for (var n = 0, r = 0, i = 0; i < e;) n += t[i].clientX, r += t[i].clientY, i++;
            return {
                x: mt(n / e),
                y: mt(r / e)
            }
        }

        function R(t, e, n) {
            return {
                x: e / t || 0,
                y: n / t || 0
            }
        }

        function L(t, e) {
            return t === e ? It : _t(t) >= _t(e) ? t < 0 ? Nt : Rt : e < 0 ? Lt : Dt
        }

        function D(t, e, n) {
            n || (n = Ut);
            var r = e[n[0]] - t[n[0]],
                i = e[n[1]] - t[n[1]];
            return Math.sqrt(r * r + i * i)
        }

        function F(t, e, n) {
            n || (n = Ut);
            var r = e[n[0]] - t[n[0]],
                i = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(i, r) / Math.PI
        }

        function z(t, e) {
            return F(e[1], e[0], Ht) + F(t[1], t[0], Ht)
        }

        function $(t, e) {
            return D(e[0], e[1], Ht) / D(t[0], t[1], Ht)
        }

        function U() {
            this.evEl = Bt, this.evWin = Yt, this.pressed = !1, P.apply(this, arguments)
        }

        function H() {
            this.evEl = qt, this.evWin = Gt, P.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function X() {
            this.evTarget = Qt, this.evWin = Jt, this.started = !1, P.apply(this, arguments)
        }

        function B(t, e) {
            var n = x(t.touches),
                r = x(t.changedTouches);
            return e & (At | Mt) && (n = T(n.concat(r), "identifier", !0)), [n, r]
        }

        function Y() {
            this.evTarget = te, this.targetIds = {}, P.apply(this, arguments)
        }

        function W(t, e) {
            var n = x(t.touches),
                r = this.targetIds;
            if (e & (jt | Ct) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
            var i, o, s = x(t.changedTouches),
                a = [],
                u = this.target;
            if (o = n.filter(function(t) {
                    return m(t.target, u)
                }), e === jt)
                for (i = 0; i < o.length;) r[o[i].identifier] = !0, i++;
            for (i = 0; i < s.length;) r[s[i].identifier] && a.push(s[i]), e & (At | Mt) && delete r[s[i].identifier], i++;
            return a.length ? [T(o.concat(a), "identifier", !0), a] : void 0
        }

        function V() {
            P.apply(this, arguments);
            var t = h(this.handler, this);
            this.touch = new Y(this.manager, t), this.mouse = new U(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function q(t, e) {
            t & jt ? (this.primaryTouch = e.changedPointers[0].identifier, G.call(this, e)) : t & (At | Mt) && G.call(this, e)
        }

        function G(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var n = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(n);
                var r = this.lastTouches,
                    i = function() {
                        var t = r.indexOf(n);
                        t > -1 && r.splice(t, 1)
                    };
                setTimeout(i, ee)
            }
        }

        function Z(t) {
            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                var i = this.lastTouches[r],
                    o = Math.abs(e - i.x),
                    s = Math.abs(n - i.y);
                if (o <= ne && s <= ne) return !0
            }
            return !1
        }

        function Q(t, e) {
            this.manager = t, this.set(e)
        }

        function J(t) {
            if (_(t, ae)) return ae;
            var e = _(t, ue),
                n = _(t, le);
            return e && n ? ae : e || n ? e ? ue : le : _(t, se) ? se : oe
        }

        function K(t) {
            this.options = dt({}, this.defaults, t || {}), this.id = k(), this.manager = null, this.options.enable = y(this.options.enable, !0), this.state = pe, this.simultaneous = {}, this.requireFail = []
        }

        function tt(t) {
            return t & ve ? "cancel" : t & de ? "end" : t & he ? "move" : t & fe ? "start" : ""
        }

        function et(t) {
            return t == Dt ? "down" : t == Lt ? "up" : t == Nt ? "left" : t == Rt ? "right" : ""
        }

        function nt(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }

        function rt() {
            K.apply(this, arguments)
        }

        function it() {
            rt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ot() {
            rt.apply(this, arguments)
        }

        function st() {
            K.apply(this, arguments), this._timer = null, this._input = null
        }

        function at() {
            rt.apply(this, arguments)
        }

        function ut() {
            rt.apply(this, arguments)
        }

        function lt() {
            K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ct(t, e) {
            return e = e || {}, e.recognizers = y(e.recognizers, ct.defaults.preset), new pt(t, e)
        }

        function pt(t, e) {
            this.options = dt({}, ct.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = E(this), this.touchAction = new Q(this, this.options.touchAction), ft(this, !0), c(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ft(t, e) {
            var n = t.element;
            if (n.style) {
                var r;
                c(t.options.cssProps, function(i, o) {
                    r = O(n.style, o), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function ht(t, e) {
            var n = o.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
        }
        var dt, yt = ["", "webkit", "Moz", "MS", "ms", "o"],
            vt = o.createElement("div"),
            gt = "function",
            mt = Math.round,
            _t = Math.abs,
            bt = Date.now;
        dt = "function" != typeof Object.assign ? function(t) {
            if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== a && null !== r)
                    for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
            }
            return e
        } : Object.assign;
        var wt = p(function(t, e, n) {
                for (var r = Object.keys(e), i = 0; i < r.length;)(!n || n && t[r[i]] === a) && (t[r[i]] = e[r[i]]), i++;
                return t
            }, "extend", "Use `assign`."),
            xt = p(function(t, e) {
                return wt(t, e, !0)
            }, "merge", "Use `assign`."),
            Tt = 1,
            Ot = /mobile|tablet|ip(ad|hone|od)|android/i,
            kt = "ontouchstart" in i,
            St = O(i, "PointerEvent") !== a,
            Pt = kt && Ot.test(navigator.userAgent),
            Et = 25,
            jt = 1,
            Ct = 2,
            At = 4,
            Mt = 8,
            It = 1,
            Nt = 2,
            Rt = 4,
            Lt = 8,
            Dt = 16,
            Ft = Nt | Rt,
            zt = Lt | Dt,
            $t = Ft | zt,
            Ut = ["x", "y"],
            Ht = ["clientX", "clientY"];
        P.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(S(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(S(this.element), this.evWin, this.domHandler)
            }
        };
        var Xt = {
                mousedown: jt,
                mousemove: Ct,
                mouseup: At
            },
            Bt = "mousedown",
            Yt = "mousemove mouseup";
        f(U, P, {
            handler: function(t) {
                var e = Xt[t.type];
                e & jt && 0 === t.button && (this.pressed = !0), e & Ct && 1 !== t.which && (e = At), this.pressed && (e & At && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: "mouse",
                    srcEvent: t
                }))
            }
        });
        var Wt = {
                pointerdown: jt,
                pointermove: Ct,
                pointerup: At,
                pointercancel: Mt,
                pointerout: Mt
            },
            Vt = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            qt = "pointerdown",
            Gt = "pointermove pointerup pointercancel";
        i.MSPointerEvent && !i.PointerEvent && (qt = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), f(H, P, {
            handler: function(t) {
                var e = this.store,
                    n = !1,
                    r = t.type.toLowerCase().replace("ms", ""),
                    i = Wt[r],
                    o = Vt[t.pointerType] || t.pointerType,
                    s = "touch" == o,
                    a = w(e, t.pointerId, "pointerId");
                i & jt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : i & (At | Mt) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, i, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: o,
                    srcEvent: t
                }), n && e.splice(a, 1))
            }
        });
        var Zt = {
                touchstart: jt,
                touchmove: Ct,
                touchend: At,
                touchcancel: Mt
            },
            Qt = "touchstart",
            Jt = "touchstart touchmove touchend touchcancel";
        f(X, P, {
            handler: function(t) {
                var e = Zt[t.type];
                if (e === jt && (this.started = !0), this.started) {
                    var n = B.call(this, t, e);
                    e & (At | Mt) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            }
        });
        var Kt = {
                touchstart: jt,
                touchmove: Ct,
                touchend: At,
                touchcancel: Mt
            },
            te = "touchstart touchmove touchend touchcancel";
        f(Y, P, {
            handler: function(t) {
                var e = Kt[t.type],
                    n = W.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        });
        var ee = 2500,
            ne = 25;
        f(V, P, {
            handler: function(t, e, n) {
                var r = "touch" == n.pointerType,
                    i = "mouse" == n.pointerType;
                if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (r) q.call(this, e, n);
                    else if (i && Z.call(this, n)) return;
                    this.callback(t, e, n)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var re = O(vt.style, "touchAction"),
            ie = re !== a,
            oe = "auto",
            se = "manipulation",
            ae = "none",
            ue = "pan-x",
            le = "pan-y",
            ce = function() {
                if (!ie) return !1;
                var t = {},
                    e = i.CSS && i.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    t[n] = !e || i.CSS.supports("touch-action", n)
                }), t
            }();
        Q.prototype = {
            set: function(t) {
                "compute" == t && (t = this.compute()), ie && this.manager.element.style && ce[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return c(this.manager.recognizers, function(e) {
                    d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), J(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var r = this.actions,
                    i = _(r, ae) && !ce[ae],
                    o = _(r, le) && !ce[le],
                    s = _(r, ue) && !ce[ue];
                if (i) {
                    var a = 1 === t.pointers.length,
                        u = t.distance < 2,
                        l = t.deltaTime < 250;
                    if (a && u && l) return
                }
                return s && o ? void 0 : i || o && n & Ft || s && n & zt ? this.preventSrc(e) : void 0
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var pe = 1,
            fe = 2,
            he = 4,
            de = 8,
            ye = de,
            ve = 16;
        K.prototype = {
            defaults: {},
            set: function(t) {
                return dt(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (l(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = nt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return l(t, "dropRecognizeWith", this) ? this : (t = nt(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (l(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = nt(t, this), -1 === w(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (l(t, "dropRequireFailure", this)) return this;
                t = nt(t, this);
                var e = w(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    n.manager.emit(e, t)
                }
                var n = this,
                    r = this.state;
                r < de && e(n.options.event + tt(r)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), r >= de && e(n.options.event + tt(r))
            },
            tryEmit: function(t) {
                if (this.canEmit()) return this.emit(t);
                this.state = 32
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | pe))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = dt({}, t);
                if (!d(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                this.state & (ye | ve | 32) && (this.state = pe), this.state = this.process(e), this.state & (fe | he | de | ve) && this.tryEmit(e)
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, f(rt, K, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    n = t.eventType,
                    r = e & (fe | he),
                    i = this.attrTest(t);
                return r && (n & Mt || !i) ? e | ve : r || i ? n & At ? e | de : e & fe ? e | he : fe : 32
            }
        }), f(it, rt, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: $t
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & Ft && e.push(le), t & zt && e.push(ue), e
            },
            directionTest: function(t) {
                var e = this.options,
                    n = !0,
                    r = t.distance,
                    i = t.direction,
                    o = t.deltaX,
                    s = t.deltaY;
                return i & e.direction || (e.direction & Ft ? (i = 0 === o ? It : o < 0 ? Nt : Rt, n = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === s ? It : s < 0 ? Lt : Dt, n = s != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction
            },
            attrTest: function(t) {
                return rt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = et(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), f(ot, rt, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ae]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), f(st, K, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [oe]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    i = t.deltaTime > e.time;
                if (this._input = t, !r || !n || t.eventType & (At | Mt) && !i) this.reset();
                else if (t.eventType & jt) this.reset(), this._timer = u(function() {
                    this.state = ye, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & At) return ye;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === ye && (t && t.eventType & At ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = bt(), this.manager.emit(this.options.event, this._input)))
            }
        }), f(at, rt, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ae]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
            }
        }), f(ut, rt, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Ft | zt,
                pointers: 1
            },
            getTouchAction: function() {
                return it.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, n = this.options.direction;
                return n & (Ft | zt) ? e = t.overallVelocity : n & Ft ? e = t.overallVelocityX : n & zt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && _t(e) > this.options.velocity && t.eventType & At
            },
            emit: function(t) {
                var e = et(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), f(lt, K, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [se]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    i = t.deltaTime < e.time;
                if (this.reset(), t.eventType & jt && 0 === this.count) return this.failTimeout();
                if (r && i && n) {
                    if (t.eventType != At) return this.failTimeout();
                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        s = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t;
                    if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = u(function() {
                        this.state = ye, this.tryEmit()
                    }, e.interval, this), fe) : ye
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = u(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ct.VERSION = "2.0.7", ct.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [at, {
                    enable: !1
                }],
                [ot, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ut, {
                    direction: Ft
                }],
                [it, {
                        direction: Ft
                    },
                    ["swipe"]
                ],
                [lt],
                [lt, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [st]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        pt.prototype = {
            set: function(t) {
                return dt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? 2 : 1
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, r = this.recognizers,
                        i = e.curRecognizer;
                    (!i || i && i.state & ye) && (i = e.curRecognizer = null);
                    for (var o = 0; o < r.length;) n = r[o], 2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (fe | he | de) && (i = e.curRecognizer = n), o++
                }
            },
            get: function(t) {
                if (t instanceof K) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t) return e[n];
                return null
            },
            add: function(t) {
                if (l(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (l(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        n = w(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== a && e !== a) {
                    var n = this.handlers;
                    return c(b(t), function(t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== a) {
                    var n = this.handlers;
                    return c(b(t), function(t) {
                        e ? n[t] && n[t].splice(w(n[t], e), 1) : delete n[t]
                    }), this
                }
            },
            emit: function(t, e) {
                this.options.domEvents && ht(t, e);
                var n = this.handlers[t] && this.handlers[t].slice();
                if (n && n.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var r = 0; r < n.length;) n[r](e), r++
                }
            },
            destroy: function() {
                this.element && ft(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, dt(ct, {
            INPUT_START: jt,
            INPUT_MOVE: Ct,
            INPUT_END: At,
            INPUT_CANCEL: Mt,
            STATE_POSSIBLE: pe,
            STATE_BEGAN: fe,
            STATE_CHANGED: he,
            STATE_ENDED: de,
            STATE_RECOGNIZED: ye,
            STATE_CANCELLED: ve,
            STATE_FAILED: 32,
            DIRECTION_NONE: It,
            DIRECTION_LEFT: Nt,
            DIRECTION_RIGHT: Rt,
            DIRECTION_UP: Lt,
            DIRECTION_DOWN: Dt,
            DIRECTION_HORIZONTAL: Ft,
            DIRECTION_VERTICAL: zt,
            DIRECTION_ALL: $t,
            Manager: pt,
            Input: P,
            TouchAction: Q,
            TouchInput: Y,
            MouseInput: U,
            PointerEventInput: H,
            TouchMouseInput: V,
            SingleTouchInput: X,
            Recognizer: K,
            AttrRecognizer: rt,
            Tap: lt,
            Pan: it,
            Swipe: ut,
            Pinch: ot,
            Rotate: at,
            Press: st,
            on: v,
            off: g,
            each: c,
            merge: xt,
            extend: wt,
            assign: dt,
            inherit: f,
            bindFn: h,
            prefixed: O
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = ct, (r = function() {
            return ct
        }.call(e, n, e, t)) !== a && (t.exports = r)
    }(window, document)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(5),
        l = r(u),
        c = n(236),
        p = r(c),
        f = n(0),
        h = r(f),
        d = n(91),
        y = n(92),
        v = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.Component = p.default, n
            }
            return s(e, t), a(e, [{
                key: "initData",
                value: function() {}
            }, {
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.showIndex = function() {
                        return t.showIndex()
                    }, this.options.actions.showThumbnails = function() {
                        return t.showThumbnails()
                    }
                }
            }, {
                key: "showIndex",
                value: function() {
                    h.default.getState().index.isActive || h.default.getState().index.isAnimating || h.default.dispatch((0, d.openIndex)())
                }
            }, {
                key: "showThumbnails",
                value: function() {
                    h.default.getState().thumbnails.isActive || h.default.getState().thumbnails.isAnimating || h.default.dispatch((0, y.openThumbnails)())
                }
            }]), e
        }(l.default);
    e.default = v
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(3),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a),
        l = function(t) {
            function e(t) {
                r(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.events = {
                    "click .index": function() {
                        return n.showIndex()
                    },
                    "click .thumbs": function() {
                        return n.showThumbnails()
                    },
                    "click .screensaver": function() {
                        return n.showScreenSaver()
                    }
                }, n
            }
            return o(e, t), s(e, [{
                key: "showIndex",
                value: function() {
                    this.actions.showIndex()
                }
            }, {
                key: "showScreenSaver",
                value: function() {
                    ! function(t) {
                        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                    }(document.documentElement), this.actions.showScreenSaver()
                }
            }, {
                key: "showThumbnails",
                value: function() {
                    this.actions.showThumbnails()
                }
            }]), e
        }(u.default);
    e.default = l
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(0),
        l = r(u),
        c = n(5),
        p = r(c),
        f = n(238),
        h = r(f),
        d = n(91),
        y = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.storeEvents = {
                    "index.isActive": function(t, e) {
                        return n.onActiveChanged(t, e)
                    }
                }, n.Component = h.default, n
            }
            return s(e, t), a(e, [{
                key: "onActiveChanged",
                value: function(t, e) {
                    !0 === t ? this.show() : this.hide()
                }
            }, {
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.closeIndex = function() {
                        return t.closeIndex()
                    }, this.options.actions.setAnimating = function(e) {
                        return t.setAnimating(e)
                    }
                }
            }, {
                key: "closeIndex",
                value: function() {
                    l.default.getState().index.isActive && !l.default.getState().index.isAnimating && l.default.dispatch((0, d.closeIndex)())
                }
            }, {
                key: "setAnimating",
                value: function(t) {
                    l.default.dispatch((0, d.setAnimating)(t))
                }
            }]), e
        }(p.default);
    e.default = y
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        l = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        c = n(3),
        p = r(c),
        f = n(0),
        h = r(f),
        d = n(11),
        y = n(7),
        v = r(y),
        g = n(28),
        m = (r(g), function(t) {
            function e(t) {
                o(this, e);
                var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.events = {
                    "click .overlay-background": function() {
                        return n.closeIndex()
                    },
                    "click .index-list-wrapper li a": function(t) {
                        return n.onIndexItemClicked(t)
                    },
                    "click .close": function() {
                        return n.closeIndex()
                    }
                }, n.storeEvents = {
                    "photos.current_collection": function(t, e) {
                        return n.onCollectionChanged(t, e)
                    }
                }, n.handlers.onBackgroundEnter = function() {
                    return n.movePanel(!0)
                }, n.handlers.onBackgroundLeave = function() {
                    return n.movePanel(!1)
                }, n.timers = {
                    thumb: null
                }, n
            }
            return a(e, t), u(e, [{
                key: "onCollectionChanged",
                value: function(t) {
                    for (var e = 0; e < this.$items.length; e++) {
                        var n = this.$items[e];
                        n.dataset.id === t.id ? n.classList.add("active") : n.classList.remove("active")
                    }!0 === h.default.getState().index.isActive && this.closeIndex()
                }
            }, {
                key: "initDOM",
                value: function() {
                    this.$background = this.$el.find(".overlay-background"), this.$panel = this.$el.find(".index-content-wrapper"), this.$titlesList = this.$el.find(".index-list-wrapper"), this.$footer = this.$el.find(".index-footer"), this.$items = this.$titlesList.find("li"), this.$thumbnailsContainer = this.$el.find(".index-thumbs")
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    $(document).keyup(function(e) {
                        27 == e.keyCode && !0 === h.default.getState().index.isActive && t.closeIndex()
                    }), [].concat(i(this.$items)).forEach(function(e) {
                        e.addEventListener("mouseenter", function(e) {
                            return t.onItemOver(e)
                        }), e.addEventListener("mouseleave", function(e) {
                            return t.onItemOut(e)
                        })
                    })
                }
            }, {
                key: "onIndexItemClicked",
                value: function(t) {
                    t.currentTarget.parentNode.dataset.id === h.default.getState().photos.current_collection.id && t.preventDefault()
                }
            }, {
                key: "onItemOver",
                value: function(t) {
                    var e = this,
                        n = t,
                        r = n.currentTarget.dataset.id;
                    this.timer = v.default.delayedCall(.075, function() {
                        e.currentCollectionThumbnails = (0, d.getCurrentCollectionById)(r), e.indexThumb = 0, e.showThumb()
                    })
                }
            }, {
                key: "onItemOut",
                value: function() {
                    this.timer && this.timer.kill(), this.hideThumb(), this.timers.thumb && (this.timers.thumb.kill(), this.timers.thumb = null)
                }
            }, {
                key: "updateThumbIndex",
                value: function() {
                    this.indexThumb === this.currentCollectionThumbnails.photos.length - 1 ? this.indexThumb = 0 : this.indexThumb += 1, this.showThumb()
                }
            }, {
                key: "hideThumb",
                value: function() {
                    this.$thumbnailsContainer[0].innerHTML = ""
                }
            }, {
                key: "showThumb",
                value: function() {
                    var t = this,
                        e = new Image,
                        n = this.currentCollectionThumbnails.photos[this.indexThumb].assets.thumbnail.url;
                    e.onload = function() {
                        t.hideThumb(), t.$thumbnailsContainer.append(e)
                    }, e.src = n, this.timers.thumb = v.default.delayedCall(.75, function() {
                        t.updateThumbIndex()
                    })
                }
            }, {
                key: "initTL",
                value: function() {
                    var t = this;
                    this.TL.show = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onShown()
                        }
                    }), this.TL.show.set(this.$el, {
                        autoAlpha: 1
                    }).set(this.$background, {
                        opacity: 0
                    }).set(this.$panel, {
                        x: "100%"
                    }).set(this.$titlesList, {
                        opacity: 0,
                        x: "50%"
                    }).set(this.$footer, {
                        opacity: 0,
                        x: "50%"
                    }).to(this.$background, .8, {
                        autoAlpha: .85,
                        ease: Power2.easeOut
                    }, 0).to(this.$panel, 1, {
                        x: "0%",
                        ease: Quart.easeOut
                    }, .1).to(this.$titlesList, 1, {
                        x: "0%",
                        opacity: 1,
                        ease: Quart.easeOut
                    }, .2).to(this.$footer, 1, {
                        x: "0%",
                        opacity: 1,
                        ease: Quart.easeOut
                    }, .3), this.TL.hide = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onHidden()
                        }
                    }), this.TL.hide.to(this.$background, 1, {
                        autoAlpha: 0,
                        ease: Quart.easeOut
                    }, .2).to(this.$panel, 1, {
                        x: "100%",
                        ease: Quart.easeOut
                    }, 0).to(this.$titlesList, 1, {
                        x: "50%",
                        opacity: 1,
                        ease: Quart.easeOut
                    }, 0).to(this.$footer, 1, {
                        x: "50%",
                        opacity: 1,
                        ease: Quart.easeOut
                    }, 0)
                }
            }, {
                key: "show",
                value: function() {
                    this.el.style.pointerEvents = "auto", this.actions.setAnimating(!0), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this)
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.el.style.display = "block", t.TL.show.play(0)
                    }, 0)
                }
            }, {
                key: "hide",
                value: function() {
                    this.el.style.pointerEvents = "none", $("#content").focus(), this.actions.setAnimating(!0), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this)
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.TL.hide.play(0)
                    }, 0)
                }
            }, {
                key: "onShown",
                value: function() {
                    this.actions.setAnimating(!1), this.$background.on("mouseenter", this.handlers.onBackgroundEnter), this.$background.on("mouseleave", this.handlers.onBackgroundLeave), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", this).call(this)
                }
            }, {
                key: "onHidden",
                value: function() {
                    this.actions.setAnimating(!1), this.el.style.display = "none", this.$background.off("mouseenter", this.handlers.onBackgroundEnter), this.$background.off("mouseleave", this.handlers.onBackgroundLeave), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onHidden", this).call(this)
                }
            }, {
                key: "closeIndex",
                value: function() {
                    this.actions.closeIndex()
                }
            }, {
                key: "movePanel",
                value: function(t) {
                    if (!1 === h.default.getState().index.isActive) return !1;
                    t ? v.default.to(this.$panel, 1, {
                        x: "10%",
                        ease: Cubic.easeOut,
                        force3D: !0
                    }) : v.default.to(this.$panel, 1, {
                        x: "0%",
                        ease: Cubic.easeOut,
                        force3D: !0
                    })
                }
            }]), e
        }(p.default));
    e.default = m
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {})
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(0),
        l = r(u),
        c = n(5),
        p = r(c),
        f = n(241),
        h = r(f),
        d = n(93),
        y = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.storeEvents = {
                    "screensaver.isActive": function(t, e) {
                        return n.onActiveChanged(t, e)
                    }
                }, n.Component = h.default, n
            }
            return s(e, t), a(e, [{
                key: "onActiveChanged",
                value: function(t, e) {
                    !0 === t ? this.show() : this.hide()
                }
            }, {
                key: "initData",
                value: function() {
                    this.data = l.default.getState().photos.collections
                }
            }, {
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.closeScreenSaver = function() {
                        return t.closeScreenSaver()
                    }, this.options.actions.setAnimating = function(e) {
                        return t.setAnimating(e)
                    }, this.options.actions.setShown = function(e) {
                        return t.setShown(e)
                    }
                }
            }, {
                key: "closeScreenSaver",
                value: function() {
                    l.default.dispatch((0, d.closeScreenSaver)())
                }
            }, {
                key: "setAnimating",
                value: function(t) {
                    l.default.dispatch((0, d.setAnimating)(t))
                }
            }, {
                key: "setShown",
                value: function(t) {
                    l.default.dispatch((0, d.setShown)(t))
                }
            }]), e
        }(p.default);
    e.default = y
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = n(242),
        l = r(u),
        c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        p = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        f = n(3),
        h = r(f),
        d = n(0),
        y = r(d),
        v = function(t) {
            function e(t) {
                o(this, e);
                var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.events = {
                    "click .background": function() {
                        return n.closeScreenSaver()
                    }
                }, n.running = !1, n.times = [], n.originalPhotos = [], n.remainingPhotos = [], n.activePhotoObjects = [], n.timers = {
                    engine: null
                }, n
            }
            return a(e, t), c(e, [{
                key: "initDOM",
                value: function() {
                    this.$counter = this.el.querySelector(".counter"), this.display = this.el.querySelector(".counter p"), this.$wrapper = this.$el.find(".screensaver-wrapper"), this.$background = this.$el.find(".background")
                }
            }, {
                key: "initScreenSaver",
                value: function() {
                    var t = this;
                    this.mm = this.el.querySelector(".counter p .mm"), this.ss = this.el.querySelector(".counter p .ss"), this.ms = this.el.querySelector(".counter p .ms"), this.reset(), this.print(this.times), this.start(), this.data.forEach(function(e) {
                        t.originalPhotos = [].concat(i(t.originalPhotos), i(e.photos))
                    }), this.remainingPhotos = this.originalPhotos.slice(0), this.screenSaverLoopEngine()
                }
            }, {
                key: "screenSaverLoopEngine",
                value: function() {
                    var t = this;
                    0 === this.remainingPhotos.length && (this.remainingPhotos = this.originalPhotos.slice(0)), this.createPhoto(), this.timers.engine = TweenLite.delayedCall(3.6, function() {
                        t.screenSaverLoopEngine()
                    })
                }
            }, {
                key: "selectRandomPhoto",
                value: function() {
                    var t = Math.floor(Math.random() * this.remainingPhotos.length),
                        e = this.remainingPhotos[t];
                    return this.remainingPhotos.splice(t, 1), e
                }
            }, {
                key: "createPhoto",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    null === t && (t = this.selectRandomPhoto());
                    var e = Math.round(5 * Math.random() + 3);
                    y.default.getState().browser.lessThan.infinity && (e *= 2);
                    var n = {
                            x: Math.round(Math.random() * (24 - e - 0) + 0),
                            y: Math.round(12 * Math.random() + 0)
                        },
                        r = Math.random() * (1.6 - 1.5) + 1.5,
                        i = {
                            photo: t,
                            position: n,
                            width: e,
                            lifetime: r
                        };
                    this.renderPhoto(i), this.activePhotoObjects.push(i)
                }
            }, {
                key: "renderPhoto",
                value: function(t) {
                    var e = '<div class="photo col-' + t.width + " offset-" + t.position.x + " top-" + t.position.y + '">\n\t\t\t\t<img src="' + t.photo.assets.thumbnail.url + '"></div>\n\t\t\t</div>',
                        n = document.createElement("div");
                    n.innerHTML = e, t.el = n.childNodes[0], this.$wrapper.append(t.el), this.showPhoto(t)
                }
            }, {
                key: "showPhoto",
                value: function(t) {
                    var e = this;
                    TweenLite.to(t.el, .8, {
                        opacity: 1,
                        onComplete: function() {
                            var n = TweenLite.delayedCall(t.lifetime, function() {
                                e.hidePhoto(t)
                            });
                            t.timer = n
                        }
                    })
                }
            }, {
                key: "hidePhoto",
                value: function(t) {
                    var e = this;
                    t.timer && (t.timer.kill(), t.timer = null), TweenLite.to(t.el, .8, {
                        opacity: 0,
                        onComplete: function() {
                            return e.removePhoto(t)
                        }
                    })
                }
            }, {
                key: "removePhoto",
                value: function(t) {
                    (0, l.default)(this.activePhotoObjects, function(e) {
                        return e.photo.id === t.photo.id
                    })
                }
            }, {
                key: "stopEngine",
                value: function() {
                    this.timers.engine && (this.timers.engine.kill(), this.timers.engine = null)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    $(document).keyup(function(e) {
                        27 == e.keyCode && !0 === y.default.getState().screensaver.isActive && t.closeScreenSaver()
                    })
                }
            }, {
                key: "initTL",
                value: function() {
                    var t = this;
                    this.TL.show = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onShown()
                        }
                    }), this.TL.show.set(this.$el, {
                        autoAlpha: 1
                    }).set(this.$background, {
                        y: "100%"
                    }).set(this.$counter, {
                        opacity: 0,
                        y: "100%",
                        ease: Cubic.easeOut
                    }, 0).to(this.$counter, .5, {
                        opacity: 1,
                        y: "0%",
                        ease: Cubic.easeOut
                    }, .5).to(this.$background, 1, {
                        y: "0%",
                        ease: Cubic.easeOut
                    }, 0), this.TL.hide = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onHidden()
                        }
                    }), this.TL.hide.to(this.$counter, .5, {
                        opacity: 0,
                        y: "100%",
                        ease: Cubic.easeOut
                    }, .2).to(this.$background, .8, {
                        y: "100%",
                        ease: Cubic.easeOut
                    }, 0)
                }
            }, {
                key: "show",
                value: function() {
                    p(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this)
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.el.style.display = "block", t.TL.show.play(0)
                    }, 0)
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        if (t.stop(), t.stopEngine(), t.activePhotoObjects.length > 0) {
                            for (var e = 0; e < t.activePhotoObjects.length; e++) {
                                var n = t.activePhotoObjects[e];
                                t.hidePhoto(n)
                            }
                            setTimeout(function() {
                                t.TL.hide.play(0)
                            }, 600)
                        } else t.TL.hide.play(0)
                    }, 0)
                }
            }, {
                key: "onShown",
                value: function() {
                    this.initScreenSaver(), this.actions.setShown(!0), p(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", this).call(this)
                }
            }, {
                key: "onHidden",
                value: function() {
                    this.actions.setShown(!1), this.el.style.display = "none", this.reset(), p(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onHidden", this).call(this)
                }
            }, {
                key: "reset",
                value: function() {
                    this.times = [0, 0, 0], this.print()
                }
            }, {
                key: "start",
                value: function() {
                    this.time || (this.time = performance.now()), this.running || (this.running = !0, requestAnimationFrame(this.step.bind(this)))
                }
            }, {
                key: "stop",
                value: function() {
                    this.running = !1, this.time = null
                }
            }, {
                key: "restart",
                value: function() {
                    this.time || (this.time = performance.now()), this.running || (this.running = !0, requestAnimationFrame(this.step.bind(this))), this.reset()
                }
            }, {
                key: "step",
                value: function(t) {
                    this.running && (this.calculate(t), this.time = t, this.print(), requestAnimationFrame(this.step.bind(this)))
                }
            }, {
                key: "calculate",
                value: function(t) {
                    var e = t - this.time;
                    this.times[2] += e / 10, this.times[2] >= 100 && (this.times[1] += 1, this.times[2] -= 100), this.times[1] >= 60 && (this.times[0] += 1, this.times[1] -= 60)
                }
            }, {
                key: "print",
                value: function() {
                    this.mm.textContent = this.pad0(this.times[0], 2), this.ss.textContent = this.pad0(this.times[1], 2), this.ms.textContent = this.pad0(Math.floor(this.times[2]), 2)
                }
            }, {
                key: "format",
                value: function(t) {
                    return "\t\t" + this.pad0(t[0], 2) + ":\t\t" + this.pad0(t[1], 2) + ":\t\t" + this.pad0(Math.floor(t[2]), 2)
                }
            }, {
                key: "pad0",
                value: function(t, e) {
                    for (var n = t.toString(); n.length < e; --e) n = "0" + n;
                    return n
                }
            }, {
                key: "closeScreenSaver",
                value: function() {
                    this.actions.closeScreenSaver()
                }
            }]), e
        }(h.default);
    e.default = v
}, function(t, e, n) {
    function r(t, e) {
        var n = [];
        if (!t || !t.length) return n;
        var r = -1,
            s = [],
            a = t.length;
        for (e = i(e, 3); ++r < a;) {
            var u = t[r];
            e(u, r, t) && (n.push(u), s.push(r))
        }
        return o(t, s), n
    }
    var i = n(59),
        o = n(243);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        for (var n = t ? e.length : 0, r = n - 1; n--;) {
            var s = e[n];
            if (n == r || s !== u) {
                var u = s;
                o(s) ? a.call(t, s, 1) : i(t, s)
            }
        }
        return t
    }
    var i = n(244),
        o = n(22),
        s = Array.prototype,
        a = s.splice;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        return e = i(e, t), null == (t = s(t, e)) || delete t[a(o(e))]
    }
    var i = n(23),
        o = n(245),
        s = n(246),
        a = n(13);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return e.length < 2 ? t : i(t, o(e, 0, -1))
    }
    var i = n(36),
        o = n(247);
    t.exports = r
}, function(t, e) {
    function n(t, e, n) {
        var r = -1,
            i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var o = Array(i); ++r < i;) o[r] = t[r + e];
        return o
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(0),
        l = r(u),
        c = n(5),
        p = r(c),
        f = n(249),
        h = r(f),
        d = n(92),
        y = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.storeEvents = {
                    "thumbnails.isActive": function(t, e) {
                        return n.onActiveChanged(t, e)
                    }
                }, n.Component = h.default, n
            }
            return s(e, t), a(e, [{
                key: "onActiveChanged",
                value: function(t, e) {
                    !0 === t ? this.show() : this.hide()
                }
            }, {
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.closeThumbnails = function() {
                        return t.closeThumbnails()
                    }, this.options.actions.setAnimating = function(e) {
                        return t.setAnimating(e)
                    }
                }
            }, {
                key: "closeThumbnails",
                value: function() {
                    l.default.getState().thumbnails.isActive && !l.default.getState().thumbnails.isAnimating && l.default.dispatch((0, d.closeThumbnails)())
                }
            }, {
                key: "setAnimating",
                value: function(t) {
                    l.default.dispatch((0, d.setAnimating)(t))
                }
            }]), e
        }(p.default);
    e.default = y
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(3),
        c = r(l),
        p = n(0),
        f = r(p),
        h = n(94),
        d = r(h),
        y = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.storeEvents = {
                    "photos.current_photo": function(t, e) {
                        return n.onPhotoChanged(t, e)
                    }
                }, n.events = {
                    click: function(t) {
                        return n.onClick(t)
                    }
                }, n.collections = [], n.currentCollectionToLoadLength = 0, n.imagesLoaded = 0, n
            }
            return s(e, t), a(e, [{
                key: "onPhotoChanged",
                value: function(t) {
                    !0 === f.default.getState().thumbnails.isActive && this.closeThumbnails()
                }
            }, {
                key: "initDOM",
                value: function() {
                    this.$background = this.$el.find(".background"), this.$thumbnailsWrapper = this.$el.find(".thumbnails-wrapper"), this.$thumbnailsContainer = this.$el.find(".thumbnails-collection-container"), this.$thumbnailsFooterTitle = this.$el.find(".thumbnails-collection-titles h3"), this.$thumbnailsFooter = this.$el.find(".thumbnails-footer"), this.$thumbnailsHeader = this.$el.find(".thumbnails-header");
                    for (var t = 0; t < this.$thumbnailsContainer.length; t++) {
                        for (var e = this.$thumbnailsContainer[t], n = [], r = e.querySelectorAll(".thumbnails"), i = 0; i < r.length; i++) {
                            var o = r[i],
                                s = {
                                    lazy: new d.default({
                                        el: o.querySelector(".lazy-thumb"),
                                        firstPass: !1
                                    }),
                                    id: o.dataset.id
                                };
                            n.push(s)
                        }
                        var a = {
                            el: e,
                            id: e.dataset.id,
                            lazyItems: n
                        };
                        this.collections.push(a)
                    }
                    this.$close = this.$thumbnailsFooterTitle.find(".close")
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    $(document).keyup(function(e) {
                        27 == e.keyCode && !0 === f.default.getState().thumbnails.isActive && t.closeThumbnails()
                    }), this.$close.on("click", function() {
                        return t.closeThumbnails()
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    "img" !== t.target.tagName.toLowerCase() && "a" !== t.target.tagName.toLowerCase() && !0 === f.default.getState().thumbnails.isActive && this.closeThumbnails()
                }
            }, {
                key: "initTL",
                value: function() {
                    var t = this;
                    this.TL.show = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onShown()
                        }
                    }), this.TL.show.set(this.$el, {
                        autoAlpha: 1
                    }).set(this.$background, {
                        y: "100%"
                    }, 0).set(this.$thumbnailsWrapper, {
                        opacity: 1
                    }, 0).to(this.$background, 1, {
                        y: "0%",
                        ease: Quart.easeOut
                    }, 0).to(this.$thumbnailsFooter, .8, {
                        opacity: 1,
                        ease: Quart.easeOut
                    }, .3), f.default.getState().app.isMobile && this.TL.show.to(this.$thumbnailsHeader, .8, {
                        opacity: 1,
                        ease: Quart.easeOut
                    }, .5), this.TL.hide = new TimelineLite({
                        paused: !0,
                        onComplete: function() {
                            return t.onHidden()
                        }
                    }), this.TL.hide.to(this.$background, 1, {
                        y: "100%",
                        ease: Cubic.easeOut
                    }, .6).to(this.$thumbnailsWrapper, .8, {
                        opacity: 0,
                        ease: Quart.easeOut
                    }, .3).to(this.$thumbnailsFooter, .8, {
                        opacity: 0,
                        ease: Quart.easeOut
                    }, .3).set(this.$el, {
                        autoAlpha: 0
                    }), f.default.getState().app.isMobile && this.TL.hide.to(this.$thumbnailsHeader, .8, {
                        opacity: 0,
                        ease: Quart.easeOut
                    }, .1)
                }
            }, {
                key: "show",
                value: function() {
                    this.actions.setAnimating(!0), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this)
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.el.style.display = "block";
                        for (var e = f.default.getState().photos.current_collection, n = 0; n < t.collections.length; n++) {
                            var r = t.collections[n].id,
                                i = t.collections[n].el;
                            e.id === r && (i.style.display = "block", i.style.opacity = 1, t.$currentCollectionGrid = i)
                        }
                        for (var o = 0; o < t.$thumbnailsFooterTitle.length; o++) {
                            var s = t.$thumbnailsFooterTitle[o];
                            e.id === s.dataset.id && (s.style.display = "block", s.style.opacity = 1)
                        }
                        setTimeout(function() {
                            t.showThumbnails()
                        }, 300), t.TL.show.play(0)
                    }, 0)
                }
            }, {
                key: "showThumbnails",
                value: function() {
                    for (var t = f.default.getState().photos.current_collection, e = f.default.getState().photos.current_photo, n = 0; n < this.collections.length; n++) {
                        var r = this.collections[n].id,
                            i = this.collections[n];
                        if (t.id === r)
                            for (var o = i.lazyItems, s = 0; s < o.length; s++) ! function(t) {
                                var n = o[t].lazy,
                                    r = o[t].id === e.id ? 0 : 800 + 1 * Math.random() * 600;
                                !1 === n.state.isLoaded ? setTimeout(function() {
                                    n.load(!0)
                                }, r) : setTimeout(function() {
                                    n.el.classList.add("show")
                                }, r)
                            }(s)
                    }
                }
            }, {
                key: "hideThumbnails",
                value: function() {
                    for (var t = 0; t < this.collections.length; t++)
                        for (var e = this.collections[t], n = e.lazyItems, r = 0; r < n.length; r++) {
                            var i = n[r].lazy;
                            i.el.classList.remove("show")
                        }
                }
            }, {
                key: "hide",
                value: function() {
                    this.actions.setAnimating(!0), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this)
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.TL.hide.play(0)
                    }, 0)
                }
            }, {
                key: "onShown",
                value: function() {
                    this.actions.setAnimating(!1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", this).call(this)
                }
            }, {
                key: "onHidden",
                value: function() {
                    this.actions.setAnimating(!1), this.el.style.display = "none", this.hideThumbnails();
                    for (var t = 0; t < this.$thumbnailsContainer.length; t++) {
                        var n = this.$thumbnailsContainer[t];
                        n.style.display = "none", n.style.opacity = 0
                    }
                    for (var r = 0; r < this.$thumbnailsFooterTitle.length; r++) {
                        var i = this.$thumbnailsFooterTitle[r];
                        i.style.display = "none", i.style.opacity = 0
                    }
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onHidden", this).call(this)
                }
            }, {
                key: "closeThumbnails",
                value: function() {
                    this.actions.closeThumbnails()
                }
            }, {
                key: "movePanel",
                value: function(t) {
                    if (!1 === f.default.getState().index.isActive) return !1;
                    t ? TweenLite.to(this.$panel, 1, {
                        x: "10%",
                        ease: Cubic.easeOut,
                        force3D: !0
                    }) : TweenLite.to(this.$panel, 1, {
                        x: "0%",
                        ease: Cubic.easeOut,
                        force3D: !0
                    })
                }
            }]), e
        }(c.default);
    e.default = y
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(3),
        c = r(l),
        p = n(0),
        f = r(p),
        h = n(46),
        d = r(h),
        y = n(11),
        v = n(10),
        g = n(7),
        m = r(g),
        _ = n(28),
        b = (r(_), n(9)),
        w = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.storeEvents = {
                    "photos.current_photo": function(t, e) {
                        return n.onPhotoChanged(t, e)
                    },
                    "photo.dimensions": function(t, e) {
                        return n.onPhotoDimensionsChanged(t, e)
                    },
                    "app.needHideCollection": function(t, e) {
                        return n.onNeedCollectionChanged(t, e)
                    },
                    "index.isActive": function(t, e) {
                        return n.onIndexActive(t, e)
                    },
                    "layout.orientation": function(t) {
                        return n.onOrientationChanged(t)
                    },
                    browser: function(t, e) {
                        return n.onResize(t, e)
                    }
                }, n.cursorPosX = 0, n.cursorPosY = 0, n.speed = .2, n.canAnimate = !1, n.isTransitioning = !1, n.mobileTitleIsReduced = !1, n.isCursorHidden = !1, n.handlers.onMouseMove = function() {
                    return n.reduceCursor()
                }, n.handlers.onMouseLeave = function() {
                    return n.onMouseLeave()
                }, n.handlers.onMouseEnter = function(t) {
                    return n.onMouseEnter(t)
                }, n.timers = {
                    setMask: null,
                    animateCursor: null,
                    reduceCursor: null,
                    leave: null,
                    enter: null
                }, n.isMobile = f.default.getState().app.isMobile, n.mouseIsInViewport = !0, n
            }
            return s(e, t), a(e, [{
                key: "initDOM",
                value: function() {
                    this.cursorTop = this.el.querySelector(".custom-cursor.mask"), this.cursorTopLabel = this.cursorTop.querySelector("p"), this.cursorTopText = this.cursorTop.querySelector(".text-container")
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    this.isMobile || (this.handlers.update = function() {
                        return t.update()
                    }, d.default.get("rafCallStack").push(this.handlers.update), $("#content").on("mouseleave", this.handlers.onMouseLeave), $("#content").on("mouseenter", this.handlers.onMouseEnter))
                }
            }, {
                key: "initTL",
                value: function() {}
            }, {
                key: "onDOMInit",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDOMInit", this).call(this)
                }
            }, {
                key: "onPhotoChanged",
                value: function(t, e) {
                    var n = f.default.getState().app.isFirstShow,
                        r = f.default.getState().app.isNewCollection;
                    !n && r || this.setCursorText(t), this.timers.animateCursor && (this.timers.animateCursor.kill(), this.timers.animateCursor = null), this.isTransitioning = !1
                }
            }, {
                key: "setCursorText",
                value: function(t) {
                    var e = f.default.getState().photos.current_collection,
                        n = (0, y.getCurrentPhotoIndexById)(t.id),
                        r = e.title;
                    this.isMobile && e.mobile_title && (r = e.mobile_title);
                    var i = r + " - " + (n + 1) + "/" + e.photos.length;
                    this.cursorTopText.textContent = i
                }
            }, {
                key: "onPhotoDimensionsChanged",
                value: function() {
                    f.default.getState().app.isFirstShow && !this.isTransitioning && this.showCursor()
                }
            }, {
                key: "onNeedCollectionChanged",
                value: function(t) {
                    this.canAnimate = !1, !0 === t && this.hideCursor()
                }
            }, {
                key: "hideCursor",
                value: function() {
                    var t = this;
                    this.timers.enter && (this.timers.enter.kill(), this.timers.enter = null), m.default.killTweensOf(this.cursorTopText), this.isCursorHidden = !1, this.canAnimate = !1, this.isTransitioning = !0, m.default.to(this.cursorTopText, .5, {
                        y: -80,
                        opacity: 0,
                        ease: Power2.easeIn,
                        force3D: !0,
                        onComplete: function() {
                            return t.onCursorHidden()
                        }
                    })
                }
            }, {
                key: "onCursorHidden",
                value: function() {
                    f.default.dispatch((0, v.setHideNewCollection)(!1)), this.setCursorText(f.default.getState().photos.current_photo), this.resetCursor(), this.showCursor(), m.default.set(this.cursorTopText, {
                        y: 100,
                        opacity: 0
                    }), m.default.to(this.cursorTopText, 1, {
                        y: 0,
                        opacity: 1,
                        force3D: !0,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "showCursor",
                value: function() {
                    this.canAnimate = !1, this.isTransitioning = !0, this.animateCursor()
                }
            }, {
                key: "resetCursor",
                value: function() {
                    m.default.set(this.cursorTopText, {
                        clearProps: "scale, fontSize"
                    })
                }
            }, {
                key: "animateCursor",
                value: function() {
                    var t = this,
                        e = f.default.getState().app.isFirstShow,
                        n = e ? 3.5 : 2;
                    this.centerTitle(), this.timers.animateCursor = m.default.delayedCall(n, function() {
                        t.isMobile || 0 !== d.default.get("mouse").x || 0 !== d.default.get("mouse").y ? t.reduceCursor() : $("#content").on("mousemove", t.handlers.onMouseMove)
                    })
                }
            }, {
                key: "reduceCursor",
                value: function() {
                    var t = this;
                    if (this.isMobile) return this.reduceCursorMobile(), !1;
                    this.speed = .075, $("#content").off("mousemove", this.handlers.onMouseMove), this.canAnimate = !0, m.default.to(this.cursorTopText, .5, {
                        scale: .5,
                        force3D: !0,
                        ease: Power2.easeOut
                    }), this.timers.reduceCursor && (this.timers.reduceCursor.kill(), this.timers.reduceCursor = null), this.timers.reduceCursor = m.default.delayedCall(.6, function() {
                        m.default.set(t.cursorTopText, {
                            clearProps: "scale",
                            fontSize: "1.4rem"
                        }), t.speed = .2, t.isTransitioning = !1
                    })
                }
            }, {
                key: "reduceCursorMobile",
                value: function() {
                    var t = this;
                    this.timers.reduceCursor && (this.timers.reduceCursor.kill(), this.timers.reduceCursor = null);
                    var e = f.default.getState().layout.orientation,
                        n = "landscape" === e ? b.BORDERS_MOBILE_LANDSCAPE : b.BORDERS_MOBILE_PORTRAIT,
                        r = Math.round(this.windowWidth / 2 - this.cursorWidth * (1.4 / 1.6) / 2),
                        i = this.windowHeight - n / 4 - this.cursorHeight / 2 - 3;
                    m.default.to(this.cursorTopText, .5, {
                        scale: 1.4 / 1.6,
                        force3D: !0,
                        ease: Power2.easeOut
                    }), m.default.to(this.cursorTopLabel, .5, {
                        x: r,
                        y: i,
                        force3D: !0,
                        ease: Power2.easeOut
                    }), this.timers.reduceCursor = m.default.delayedCall(.6, function() {
                        m.default.set(t.cursorTopText, {
                            clearProps: "scale",
                            fontSize: "1.4rem"
                        }), t.isTransitioning = !1, t.mobileTitleIsReduced = !0
                    })
                }
            }, {
                key: "centerTitle",
                value: function() {
                    var t = this;
                    this.onResize(), setTimeout(function() {
                        t.cursorPosX = Math.round(t.windowWidth / 2 - t.cursorWidth / 2), t.cursorPosY = Math.round(t.windowHeight / 2 - t.cursorHeight / 2), m.default.set(t.cursorTopLabel, {
                            x: t.cursorPosX,
                            y: t.cursorPosY,
                            force3D: !0
                        })
                    }, 0)
                }
            }, {
                key: "update",
                value: function() {
                    var t = Math.round(100 * (d.default.get("mouse").x - this.cursorPosX)) / 100,
                        e = Math.round(100 * (d.default.get("mouse").y - this.cursorPosY)) / 100;
                    this.canAnimate && (this.cursorPosX += t * this.speed, this.cursorPosY += e * this.speed, this.cursorTopLabel.style.transform = "translate3d(" + this.cursorPosX + "px, " + this.cursorPosY + "px, 0px)")
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    var t = this;
                    this.mouseIsInViewport = !1, this.timers.enter && (this.timers.enter.kill(), this.timers.enter = null), !this.isCursorHidden && this.canAnimate && (this.timers.leave = m.default.delayedCall(.3, function() {
                        t.setCurserOut()
                    }))
                }
            }, {
                key: "onMouseEnter",
                value: function(t) {
                    var e = this;
                    if (t.stopPropagation(), this.mouseIsInViewport = !0, f.default.getState().app.isAnimating) return !1;
                    this.timers.leave && (this.timers.leave.kill(), this.timers.leave = null), this.isCursorHidden && this.canAnimate && (this.timers.enter = m.default.delayedCall(.2, function() {
                        e.setCursorIn()
                    }))
                }
            }, {
                key: "setCurserOut",
                value: function() {
                    var t = this;
                    if (this.timers.leave && (this.timers.leave.kill(), this.timers.leave = null), this.mouseIsInViewport || !this.canAnimate) return !1;
                    m.default.to(this.cursorTopText, .3, {
                        y: -50,
                        opacity: 0,
                        force3D: !0,
                        onComplete: function() {
                            t.isCursorHidden = !0, t.mouseIsInViewport && t.setCursorIn()
                        }
                    })
                }
            }, {
                key: "setCursorIn",
                value: function() {
                    var t = this;
                    this.timers.enter && (this.timers.enter.kill(), this.timers.enter = null), m.default.set(this.cursorTopText, {
                        clearProps: "scale"
                    }), m.default.set(this.cursorTopText, {
                        y: 50,
                        opacity: 0
                    }), m.default.to(this.cursorTopText, .5, {
                        y: 0,
                        opacity: 1,
                        force3D: !0,
                        onComplete: function() {
                            t.isCursorHidden = !1
                        }
                    })
                }
            }, {
                key: "onIndexActive",
                value: function(t) {}
            }, {
                key: "onResize",
                value: function() {
                    this.windowWidth = f.default.getState().browser.width, this.windowHeight = f.default.getState().browser.height, this.cursorWidth = this.cursorTopLabel.offsetWidth, this.cursorHeight = this.cursorTopLabel.offsetHeight
                }
            }, {
                key: "onOrientationChanged",
                value: function(t) {
                    if (this.mobileTitleIsReduced) {
                        var e = f.default.getState().layout.orientation,
                            n = "landscape" === e ? b.BORDERS_MOBILE_LANDSCAPE : b.BORDERS_MOBILE_PORTRAIT,
                            r = Math.round(this.windowWidth / 2 - this.cursorWidth / 2),
                            i = this.windowHeight - n / 4 - this.cursorHeight / 2 - 3;
                        m.default.to(this.cursorTopLabel, .5, {
                            x: r,
                            y: i,
                            force3D: !0
                        })
                    }
                }
            }]), e
        }(c.default);
    e.default = w
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(3),
        c = r(l),
        p = n(39),
        f = n(7),
        h = r(f),
        d = n(28),
        y = (r(d), function(t) {
            function e(t) {
                return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            }
            return s(e, t), a(e, [{
                key: "initDOM",
                value: function() {
                    this.$title = this.el.querySelector("h1"), this.$subTitle = this.el.querySelector("h2"), this.$background = this.el.querySelector(".background")
                }
            }, {
                key: "onDOMInit",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDOMInit", this).call(this)
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this;
                    if (p.IS_DEV) return this.onShown(), !1;
                    h.default.to(this.$title, 1, {
                        opacity: 1,
                        ease: Power3.easeOut
                    }), h.default.to(this.$subTitle, 1, {
                        opacity: 1,
                        delay: .4,
                        ease: Power3.easeOut,
                        onComplete: function() {
                            t.onShown()
                        }
                    })
                }
            }, {
                key: "onShown",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.hide()
                    }, 300), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", this).call(this)
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    h.default.to(this.$title, 1, {
                        y: -50,
                        opacity: 0,
                        ease: Quart.easeOut
                    }), h.default.to(this.$subTitle, 1, {
                        y: -50,
                        opacity: 0,
                        delay: .3,
                        ease: Quart.easeOut
                    }), h.default.to(this.$background, 1, {
                        y: "-100%",
                        delay: .5,
                        ease: Quart.easeOut,
                        onComplete: function() {
                            t.onHidden()
                        }
                    })
                }
            }, {
                key: "onHidden",
                value: function() {
                    this.el.style.display = "none", u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onHidden", this).call(this)
                }
            }]), e
        }(c.default));
    e.default = y
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.catmullRomFitting = e.debounce = e.fitAsset = e.metersToMiles = e.rad = e.getDate = e.ordinalSuffixOf = e.getAssetByDevice = e.getAssetType = e.getExtension = void 0;
    var r = arguments,
        i = n(253),
        o = e.getExtension = function(t) {
            var e = t.split(".").pop();
            return e = e.split("?")[0].toLowerCase(), i.VIDEO_EXTENSIONS.indexOf(e) > -1 || i.IMAGE_EXTENSIONS.indexOf(e) > -1 ? e : null
        },
        s = e.getAssetType = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e.type) return e.type;
            var n = o(t);
            return i.VIDEO_EXTENSIONS.indexOf(n) > -1 ? i.VIDEO_TYPE : i.IMAGE_EXTENSIONS.indexOf(n) > -1 ? i.IMAGE_TYPE : i.FILE_TYPE
        },
        a = (e.getAssetByDevice = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t) return null;
            var n = null;
            switch (Detectizr.device.type) {
                case "desktop":
                    n = t.lg;
                    break;
                case "tablet":
                    n = t.med;
                    break;
                case "mobile":
                    n = t.sml;
                    break;
                default:
                    n = t.lg
            }
            switch (n.video ? (n.fallback = n.src, n.src = n.video, e.type = i.VIDEO_TYPE) : e.type = i.IMAGE_TYPE, s(n.src, e) === i.VIDEO_TYPE && "desktop" !== Detectizr.device.type && n.fallback && (n.src = n.fallback, n.type = e.type = i.IMAGE_TYPE), n.type = s(n.src, e), n.type) {
                case i.VIDEO_TYPE:
                    n.extension = o(n.src) ? o(n.src) : "mp4", n.isVideo = !0;
                    break;
                case i.IMAGE_TYPE:
                    n.extension = o(n.src) ? o(n.src) : "jpg", Modernizr.webp && (n.extension = "webp"), n.isImage = !0
            }
            if (n.isImage) {
                e.params = e.params ? e.params : {};
                var r = {
                    desktop: {
                        width: t.dimensions.width,
                        height: t.dimensions.height
                    },
                    tablet: {
                        width: e.dimensions_tablet ? e.dimensions_tablet.width : t.dimensions.width,
                        height: e.dimensions_tablet ? e.dimensions_tablet.height : t.dimensions.height
                    },
                    mobile: {
                        width: e.dimensions_mobile ? e.dimensions_mobile.width : t.dimensions.width,
                        height: e.dimensions_mobile ? e.dimensions_mobile.height : t.dimensions.height
                    }
                };
                if (r.desktop.width > 2500 && (r.desktop.height *= 2500 / r.desktop.width, r.desktop.width = 2500), r.tablet.width > 1024 && (r.tablet.height *= 1024 / r.tablet.width, r.tablet.width = 1024), r.mobile.width > 480 && (r.mobile.height *= 480 / r.mobile.width, r.mobile.width = 480), n.dimensions = {}, !e.params.width) switch (Detectizr.device.type) {
                    case "desktop":
                        e.params.width = r.desktop.width, n.dimensions = r.desktop;
                        break;
                    case "tablet":
                        e.params.width = r.tablet.width, n.dimensions = r.tablet;
                        break;
                    case "mobile":
                        e.params.width = r.mobile.width, n.dimensions = r.mobile;
                        break;
                    default:
                        n = t.lg
                }
                window.devicePixelRatio && (e.params.width * window.devicePixelRatio <= 2500 ? e.params.width *= window.devicePixelRatio : e.params.width = 2500);
                var a = "=w" + e.params.width;
                Modernizr.webp && (a += "-rw"), n.src += a
            }
            return n
        }, e.ordinalSuffixOf = function(t) {
            var e = t % 10,
                n = t % 100;
            return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th"
        });
    e.getDate = function(t, e) {
        var n = {},
            r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return -1 === t.indexOf("en-") ? n.day = e.getUTCDate() < 10 ? "0" + e.getUTCDate() : e.getUTCDate() : n.day = a(e.getUTCDate()), n.weekDay = r[e.getUTCDay()], n.nbDay = e.getUTCDate() < 10 ? "0" + e.getUTCDate() : e.getUTCDate(), n.month = i[e.getUTCMonth()], n.nbMonth = parseInt(e.getUTCMonth() + 1, 10) < 10 ? "0" + parseInt(e.getUTCMonth() + 1, 10) : parseInt(e.getUTCMonth() + 1, 10), n.year = e.getFullYear(), n.hour = e.getUTCHours(), n.hour > 12 && (n.hour -= 12), n.minute = e.getMinutes(), n.second = e.getSeconds(), n.UTCHours = e.getUTCHours() + e.getTimezoneOffset() / 60 < 10 ? "0" + e.getUTCHours() + e.getTimezoneOffset() / 60 : e.getUTCHours() + e.getTimezoneOffset() / 60, n.UTCMinutes = e.getUTCMinutes() < 10 ? "0" + e.getUTCMinutes() : e.getUTCMinutes(), n.UTCSeconds = e.getUTCSeconds() < 10 ? "0" + e.getUTCSeconds() : e.getUTCSeconds(), n.tz = "" + n.year + n.nbMonth + n.nbDay + "T" + n.UTCHours + n.UTCMinutes + n.UTCSeconds + "Z", n
    }, e.rad = function(t) {
        return t * Math.PI / 180
    }, e.metersToMiles = function(t) {
        return 62137e-8 * t
    }, e.fitAsset = function(t) {
        var e = t.width,
            n = t.height,
            r = e / n,
            i = t.containerWidth,
            o = t.containerHeight,
            s = i / o,
            a = {};
        return r > s ? (a.ratio = o / n, a.w = Math.ceil(e * o / n, a.h = o)) : (a.ratio = i / e, a.w = i, a.h = Math.ceil(n * i / e)), a.top = (o - a.h) / 2, a.left = (i - a.w) / 2, a
    }, e.debounce = function(t, e, n) {
        var i = null;
        return function() {
            var o = r,
                s = function() {
                    i = null, n || t.apply(void 0, o)
                },
                a = n && !i;
            clearTimeout(i), i = setTimeout(s, e), a && t.apply(void 0, o)
        }
    }, e.catmullRomFitting = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (0 === e || void 0 === e) return !1;
        for (var n = Math.round(t[0].x) + "," + Math.round(t[0].y) + " ", r = t.length, i = 0; i < r - 1; i++) {
            var o = 0 === i ? t[0] : t[i - 1],
                s = t[i],
                a = t[i + 1],
                u = i + 2 < r ? t[i + 2] : a,
                l = Math.sqrt(Math.pow(o.x - s.x, 2) + Math.pow(o.y - s.y, 2)),
                c = Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)),
                p = Math.sqrt(Math.pow(a.x - u.x, 2) + Math.pow(a.y - u.y, 2)),
                f = Math.pow(p, e),
                h = Math.pow(p, 2 * e),
                d = Math.pow(c, e),
                y = Math.pow(c, 2 * e),
                v = Math.pow(l, e),
                g = Math.pow(l, 2 * e),
                m = 2 * g + 3 * v * d + y,
                _ = 2 * h + 3 * f * d + y,
                b = 3 * v * (v + d);
            b > 0 && (b = 1 / b);
            var w = 3 * f * (f + d);
            w > 0 && (w = 1 / w);
            var x = {
                    x: (-y * o.x + m * s.x + g * a.x) * b,
                    y: (-y * o.y + m * s.y + g * a.y) * b
                },
                T = {
                    x: (h * s.x + _ * a.x - y * u.x) * w,
                    y: (h * s.y + _ * a.y - y * u.y) * w
                };
            0 === x.x && 0 === x.y && (x = s), 0 === T.x && 0 === T.y && (T = a), n += "C" + x.x + "," + x.y + " " + T.x + "," + T.y + " " + a.x + "," + a.y + " "
        }
        return n
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.VIDEO_EXTENSIONS = ["mp4", "webm", "ogg"], e.IMAGE_EXTENSIONS = ["jpg", "jpeg", "gif", "png", "webp"], e.VIDEO_TYPE = "VIDEO_TYPE", e.IMAGE_TYPE = "IMAGE_TYPE", e.FILE_TYPE = "FILE_TYPE"
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return {
            type: o.SCROLL,
            scroll: t
        }
    }

    function i(t) {
        return {
            type: o.SET_ORIENTATION,
            window: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.scroll = r, e.setOrientation = i;
    var o = n(53)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(97),
        c = r(l),
        p = n(256),
        f = r(p),
        h = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.Component = f.default, n
            }
            return s(e, t), a(e, [{
                key: "initData",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initData", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = h
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(47),
        c = r(l),
        p = n(258),
        f = r(p),
        h = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.template = f.default, n.states = {
                    isAnimating: !1
                }, n
            }
            return s(e, t), a(e, [{
                key: "dispose",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = h
}, function(t, e, n) {
    "use strict";
    (function(r) {
        var i, o, s, a = void 0 !== t && t.exports && void 0 !== r ? r : window;
        (a._gsQueue || (a._gsQueue = [])).push(function() {
                a._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                    var r = function(t) {
                            e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var n, r, i = this.vars;
                            for (r in i) n = i[r], u(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
                            u(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                        },
                        i = n._internals,
                        o = r._internals = {},
                        s = i.isSelector,
                        u = i.isArray,
                        l = i.lazyTweens,
                        c = i.lazyRender,
                        p = a._gsDefine.globals,
                        f = function(t) {
                            var e, n = {};
                            for (e in t) n[e] = t[e];
                            return n
                        },
                        h = function(t, e, n) {
                            var r, i, o = t.cycle;
                            for (r in o) i = o[r], t[r] = "function" == typeof i ? i(n, e[n]) : i[n % i.length];
                            delete t.cycle
                        },
                        d = o.pauseCallback = function() {},
                        y = function(t) {
                            var e, n = [],
                                r = t.length;
                            for (e = 0; e !== r; n.push(t[e++]));
                            return n
                        },
                        v = r.prototype = new e;
                    return r.version = "1.19.1", v.constructor = r, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function(t, e, r, i) {
                        var o = r.repeat && p.TweenMax || n;
                        return e ? this.add(new o(t, e, r), i) : this.set(t, r, i)
                    }, v.from = function(t, e, r, i) {
                        return this.add((r.repeat && p.TweenMax || n).from(t, e, r), i)
                    }, v.fromTo = function(t, e, r, i, o) {
                        var s = i.repeat && p.TweenMax || n;
                        return e ? this.add(s.fromTo(t, e, r, i), o) : this.set(t, i, o)
                    }, v.staggerTo = function(t, e, i, o, a, u, l, c) {
                        var p, d, v = new r({
                                onComplete: u,
                                onCompleteParams: l,
                                callbackScope: c,
                                smoothChildTiming: this.smoothChildTiming
                            }),
                            g = i.cycle;
                        for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], s(t) && (t = y(t)), o = o || 0, o < 0 && (t = y(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) p = f(i), p.startAt && (p.startAt = f(p.startAt), p.startAt.cycle && h(p.startAt, t, d)), g && (h(p, t, d), null != p.duration && (e = p.duration, delete p.duration)), v.to(t[d], e, p, d * o);
                        return this.add(v, a)
                    }, v.staggerFrom = function(t, e, n, r, i, o, s, a) {
                        return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, r, i, o, s, a)
                    }, v.staggerFromTo = function(t, e, n, r, i, o, s, a, u) {
                        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, r, i, o, s, a, u)
                    }, v.call = function(t, e, r, i) {
                        return this.add(n.delayedCall(0, t, e, r), i)
                    }, v.set = function(t, e, r) {
                        return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new n(t, 0, e), r)
                    }, r.exportRoot = function(t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var i, o, s = new r(t),
                            a = s._timeline;
                        for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, i = a._first; i;) o = i._next, e && i instanceof n && i.target === i.vars.onComplete || s.add(i, i._startTime - i._delay), i = o;
                        return a.add(s, 0), s
                    }, v.add = function(i, o, s, a) {
                        var l, c, p, f, h, d;
                        if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, i)), !(i instanceof t)) {
                            if (i instanceof Array || i && i.push && u(i)) {
                                for (s = s || "normal", a = a || 0, l = o, c = i.length, p = 0; p < c; p++) u(f = i[p]) && (f = new r({
                                    tweens: f
                                })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === s ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), l += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof i) return this.addLabel(i, o);
                            if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                            i = n.delayedCall(0, i)
                        }
                        if (e.prototype.add.call(this, i, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (h = this, d = h.rawTime() > i._startTime; h._timeline;) d && h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0) : h._gc && h._enabled(!0, !1), h = h._timeline;
                        return this
                    }, v.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var n = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : n._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                        }
                        if (e instanceof Array || e && e.push && u(e)) {
                            for (var r = e.length; --r > -1;) this.remove(e[r]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, v._remove = function(t, n) {
                        return e.prototype._remove.call(this, t, n), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, v.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, v.insert = v.insertMultiple = function(t, e, n, r) {
                        return this.add(t, e || 0, n, r)
                    }, v.appendMultiple = function(t, e, n, r) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, r)
                    }, v.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, v.addPause = function(t, e, r, i) {
                        var o = n.delayedCall(0, d, r, i || this);
                        return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                    }, v.removeLabel = function(t) {
                        return delete this._labels[t], this
                    }, v.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, v._parseTimeOrLabel = function(e, n, r, i) {
                        var o;
                        if (i instanceof t && i.timeline === this) this.remove(i);
                        else if (i && (i instanceof Array || i.push && u(i)))
                            for (o = i.length; --o > -1;) i[o] instanceof t && i[o].timeline === this && this.remove(i[o]);
                        if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, r);
                        if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                        else {
                            if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
                            n = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, r) : this.duration()
                        }
                        return Number(e) + n
                    }, v.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }, v.stop = function() {
                        return this.paused(!0)
                    }, v.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }, v.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }, v.render = function(t, e, n) {
                        this._gc && this._enabled(!0, !1);
                        var r, i, o, s, a, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                            h = this._time,
                            d = this._startTime,
                            y = this._timeScale,
                            v = this._paused;
                        if (t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (i = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                        else if (t < 1e-7)
                            if (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", i = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = i = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && i)
                                    for (r = this._first; r && 0 === r._startTime;) r._duration || (i = !1), r = r._next;
                                t = 0, this._initted || (a = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= h)
                                    for (r = this._first; r && r._startTime <= t && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
                                else
                                    for (r = this._last; r && r._startTime >= t && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                                u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== h && this._first || n || a || u) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && t > 0 && (this._active = !0), 0 === h && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (p = this._time) >= h)
                                for (r = this._first; r && (o = r._next, p === this._time && (!this._paused || v));)(r._active || r._startTime <= p && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = o;
                            else
                                for (r = this._last; r && (o = r._prev, p === this._time && (!this._paused || v));) {
                                    if (r._active || r._startTime <= h && !r._paused && !r._gc) {
                                        if (u === r) {
                                            for (u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, n), u = u._prev;
                                            u = null, this.pause()
                                        }
                                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)
                                    }
                                    r = o
                                }
                            this._onUpdate && (e || (l.length && c(), this._callback("onUpdate"))), s && (this._gc || d !== this._startTime && y === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (i && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                        }
                    }, v._hasPausedChild = function() {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                            t = t._next
                        }
                        return !1
                    }, v.getChildren = function(t, e, r, i) {
                        i = i || -9999999999;
                        for (var o = [], s = this._first, a = 0; s;) s._startTime < i || (s instanceof n ? !1 !== e && (o[a++] = s) : (!1 !== r && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, r)), a = o.length))), s = s._next;
                        return o
                    }, v.getTweensOf = function(t, e) {
                        var r, i, o = this._gc,
                            s = [],
                            a = 0;
                        for (o && this._enabled(!0, !0), r = n.getTweensOf(t), i = r.length; --i > -1;)(r[i].timeline === this || e && this._contains(r[i])) && (s[a++] = r[i]);
                        return o && this._enabled(!1, !0), s
                    }, v.recent = function() {
                        return this._recent
                    }, v._contains = function(t) {
                        for (var e = t.timeline; e;) {
                            if (e === this) return !0;
                            e = e.timeline
                        }
                        return !1
                    }, v.shiftChildren = function(t, e, n) {
                        n = n || 0;
                        for (var r, i = this._first, o = this._labels; i;) i._startTime >= n && (i._startTime += t), i = i._next;
                        if (e)
                            for (r in o) o[r] >= n && (o[r] += t);
                        return this._uncache(!0)
                    }, v._kill = function(t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(t, e) && (i = !0);
                        return i
                    }, v.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0),
                            n = e.length;
                        for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0)
                    }, v.invalidate = function() {
                        for (var e = this._first; e;) e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, v._enabled = function(t, n) {
                        if (t === this._gc)
                            for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                        return e.prototype._enabled.call(this, t, n)
                    }, v.totalTime = function(e, n, r) {
                        this._forcingPlayhead = !0;
                        var i = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, i
                    }, v.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, v.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, n, r = 0, i = this._last, o = 999999999999; i;) e = i._prev, i._dirty && i.totalDuration(), i._startTime > o && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : o = i._startTime, i._startTime < 0 && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), o = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = e;
                                this._duration = this._totalDuration = r, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }, v.paused = function(e) {
                        if (!e)
                            for (var n = this._first, r = this._time; n;) n._startTime === r && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, v.usesFrames = function() {
                        for (var e = this._timeline; e._timeline;) e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, v.rawTime = function(t) {
                        return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }, r
                }, !0)
            }), a._gsDefine && a._gsQueue.pop()(),
            function(r) {
                var u = function() {
                    return (a.GreenSockGlobals || a).TimelineLite
                };
                o = [n(7)], i = u, void 0 !== (s = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = s)
            }()
    }).call(e, n(8))
}, function(t, e, n) {
    var r = n(29).twig,
        i = r({
            id: "02045cc35564233f259b47c9ede8ad78b92fa5aef27464c510c2954521622b60df31b0272aebdeb9b290d52232492b8f004d695b063be9968faa4f4182778087",
            data: [{
                type: "raw",
                value: '<section class="page-wrapper" id="homepage">\n\n\t<div class="introduction">\n\t\t\t<h1>Dynamic content: '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "data",
                    match: ["data"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "content"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "title"
                }]
            }, {
                type: "raw",
                value: "</h1>\n\t\t\t<h2>INDEX PAGE Static content</h2>\n\t</div>\n\n</section>"
            }],
            allowInlineIncludes: !0,
            rethrow: !0
        });
    t.exports = function(t) {
        return i.render(t)
    }
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(97),
        c = r(l),
        p = n(261),
        f = r(p),
        h = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.Component = f.default, n
            }
            return s(e, t), a(e, [{
                key: "initData",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initData", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = h
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(47),
        c = r(l),
        p = n(262),
        f = r(p),
        h = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.template = f.default, n.states = {
                    isAnimating: !1
                }, n
            }
            return s(e, t), a(e, [{
                key: "dispose",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = h
}, function(t, e, n) {
    var r = n(29).twig,
        i = r({
            id: "6a3c19c813bc86569352e7f3929a6c063ce1a099eed839e82d596eb49d2bb09744f9e5e70d09396711037793a8986499b1e67e11a693e3dd38ee930be83e9d83",
            data: [{
                type: "raw",
                value: '<section class="page-wrapper" id="homepage">\n\n\t\t<div class="introduction">\n\t\t\t\t<h1>Dynamic content: '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "data",
                    match: ["data"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "content"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "title"
                }]
            }, {
                type: "raw",
                value: "</h1>\n\t\t\t\t<h2>ABOUT PAGE Static content</h2>\n\t\t</div>\n\n\t</section>"
            }],
            allowInlineIncludes: !0,
            rethrow: !0
        });
    t.exports = function(t) {
        return i.render(t)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(5),
        c = r(l),
        p = n(264),
        f = r(p),
        h = n(0),
        d = r(h),
        y = n(266),
        v = n(10),
        g = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.Component = f.default, n
            }
            return s(e, t), a(e, [{
                key: "initData",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initData", this).call(this)
                }
            }, {
                key: "initActions",
                value: function() {
                    var t = this;
                    this.options.actions.setReady = function(e) {
                        return t.setPhotoReady(e)
                    }, this.options.actions.setDimensions = function(e) {
                        return t.setPhotoDimensions(e)
                    }, this.options.actions.needHideCollection = function(e) {
                        return t.setNeedHideCollection(e)
                    }
                }
            }, {
                key: "setPhotoReady",
                value: function(t) {
                    d.default.dispatch((0, y.setPhotoReady)(t))
                }
            }, {
                key: "setPhotoDimensions",
                value: function(t) {
                    d.default.dispatch((0, y.setPhotoDimensions)(t))
                }
            }, {
                key: "setNeedHideCollection",
                value: function(t) {
                    d.default.dispatch((0, v.setHideNewCollection)(t))
                }
            }]), e
        }(c.default);
    e.default = g
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(3),
        c = r(l),
        p = n(265),
        f = r(p),
        h = n(30),
        d = r(h),
        y = n(0),
        v = r(y),
        g = n(94),
        m = r(g),
        _ = n(46),
        b = r(_),
        w = n(9),
        x = n(7),
        T = r(x),
        O = n(28),
        k = (r(O), n(90)),
        S = r(k),
        P = n(96),
        E = n(11),
        j = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.template = f.default, n.events = {
                    "click ": function(t) {
                        return n.onClick(t)
                    }
                }, n.storeEvents = {
                    browser: function(t, e) {
                        return n.onResize(t, e)
                    },
                    "index.isActive": function(t, e) {
                        return n.onIndexActive(t, e)
                    }
                }, n.actions.setReady(!1), n.isFullScreen = !1, n.w2 = 0, n.h2 = 0, n.topOffset = 0, n.leftOffset = 0, n.photoPosX = 0, n.photoPosY = 0, n.speed = .1, n
            }
            return s(e, t), a(e, [{
                key: "renderTemplate",
                value: function() {
                    this.$el = $(this.template({
                        photo: this.data,
                        svgs: S.default
                    })), this.el = this.$el[0]
                }
            }, {
                key: "initDOM",
                value: function() {
                    this.lazyElement = this.el.querySelector(".lazy"), this.mask = this.lazyElement.querySelector(".mask"), this.photo = this.el.querySelector(".photo"), this.photoContainer = this.el.querySelector(".photo-container"), this.isFullScreen = this.photo.classList.contains("fullscreen"), this.mask.style.backgroundColor = this.data.backgroundColor
                }
            }, {
                key: "bindEvents",
                value: function() {}
            }, {
                key: "setupDOM",
                value: function() {
                    this.el.style.opacity = 0
                }
            }, {
                key: "showComponent",
                value: function() {
                    var t = this,
                        n = v.default.getState().app.isNewCollection;
                    if (this.el.style.opacity = 1, !n) return this.mask.style.display = "none", u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", this).call(this);
                    var r = v.default.getState().app.isFirstShow ? 2.5 : 0;
                    T.default.to(this.mask, 1, {
                        y: "-100%",
                        delay: r,
                        ease: Quart.easeOut,
                        onComplete: function() {
                            return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onShown", t).call(t)
                        }
                    })
                }
            }, {
                key: "hideComponent",
                value: function() {
                    var t = this;
                    if (!v.default.getState().app.isNewCollection) return this.mask.style.display = "none", this.onHidden();
                    var e = v.default.getState().photos.current_photo.backgroundColor;
                    this.data.backgroundColor !== e && (this.mask.style.backgroundColor = e), this.actions.needHideCollection(!0), T.default.set(this.mask, {
                        y: "100%"
                    }), this.mask.style.display = "block", T.default.to(this.mask, 1, {
                        delay: .5,
                        y: "0%",
                        ease: Quart.easeOut,
                        onComplete: function() {
                            return t.onHidden()
                        }
                    })
                }
            }, {
                key: "onHidden",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onHidden", this).call(this)
                }
            }, {
                key: "onDOMInit",
                value: function() {
                    var t = v.default.getState().browser.width,
                        n = v.default.getState().browser.height;
                    this.lazy = new m.default({
                        el: this.lazyElement,
                        container: this.lazyElement.querySelector(".lazy-container"),
                        forceLoad: !0,
                        assets: this.data.assets,
                        columns: this.isFullScreen || v.default.getState().browser.lessThan.infinity ? w.MAX_COLUMNS : this.photo.dataset.col,
                        fullScreen: this.isFullScreen,
                        initialwWidth: t,
                        initialwHeight: n,
                        photoWidth: this.lazyElement.dataset.width,
                        photoHeight: this.lazyElement.dataset.height,
                        isMobile: v.default.getState().browser.lessThan.infinity,
                        orientation: v.default.getState().layout.orientation
                    }), this.props.needRender && document.getElementById("content").appendChild(this.el), this.onResize(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDOMInit", this).call(this)
                }
            }, {
                key: "onInit",
                value: function() {
                    this.actions.setReady(!0), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onInit", this).call(this)
                }
            }, {
                key: "onClick",
                value: function(t) {
                    if (v.default.getState().app.isAnimating) return !1;
                    var e = v.default.getState().browser.width,
                        n = t.clientX >= e / 2,
                        r = n ? (0, E.getNextPhoto)() : (0, E.getPreviousPhoto)();
                    d.default.navigate(r.slug)
                }
            }, {
                key: "onIndexActive",
                value: function(t) {
                    !0 === t ? T.default.to(this.el, 1, {
                        x: "-25%",
                        ease: Quart.easeOut,
                        force3D: !0,
                        delay: .2
                    }) : T.default.to(this.el, 1, {
                        x: "0%",
                        force3D: !0,
                        ease: Quart.easeOut,
                        delay: .1
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var t = (b.default.get("mouse").x - this.w2) / this.w2,
                        e = (b.default.get("mouse").y - this.h2) / this.h2,
                        n = -1 * t * this.leftOffset,
                        r = -1 * e * this.topOffset,
                        i = n - this.photoPosX,
                        o = r - this.photoPosY;
                    this.photoPosX += i * this.speed, this.photoPosY += o * this.speed, this.lazyElement.style.transform = "translateX(" + this.photoPosX + "px) translateY(" + this.photoPosY + "px)"
                }
            }, {
                key: "onResize",
                value: function() {
                    if (!0 === v.default.getState().browser.lessThan.infinity) return this.onResizeMobile(), !1;
                    var t = v.default.getState().browser.width,
                        e = v.default.getState().browser.height;
                    if (this.w2 = t / 2, this.h2 = e / 2, this.lazyElement) {
                        var n = this.lazyElement.dataset.height / this.lazyElement.dataset.width,
                            r = this.photo.dataset.col / w.MAX_COLUMNS * t,
                            i = e - w.BORDERS,
                            o = r * n;
                        if (this.isFullScreen) {
                            var s = (0, P.fitImage)({
                                imageWidth: t,
                                imageHeight: t * n,
                                containerWidth: t,
                                containerHeight: e
                            });
                            this.topOffset = Math.abs(s.top), this.leftOffset = Math.abs(s.left), this.lazyElement.style.width = s.w + 2 + "px", this.lazyElement.style.height = s.h + "px", this.lazyElement.style.top = s.top + "px", this.lazyElement.style.left = s.left - 1 + "px"
                        } else if (o >= i) {
                            var a = Math.round(i / n),
                                u = Math.floor((a - 2) * n),
                                l = (r - a) / 2,
                                c = this.photoContainer.classList.contains("justify-center");
                            this.photo.style.width = a + "px", this.lazyElement.querySelector(".lazy-container").style.height = u + "px", c || (this.lazyElement.style.left = l + "px")
                        } else {
                            var p = Math.round(o / n),
                                f = Math.floor((p - 2) * n);
                            this.lazyElement.querySelector(".lazy-container").style.height = f + "px", this.photo.style.width = null, this.lazyElement.style.left = null
                        }
                        if (this.lazy) {
                            this.lazy.resizeAsset(v.default.getState().browser.width, v.default.getState().browser.height);
                            var h = this.lazyElement.getBoundingClientRect();
                            this.actions.setDimensions({
                                width: h.width,
                                height: h.height,
                                left: h.left,
                                top: h.top,
                                right: t - h.right,
                                bottom: e - h.bottom
                            })
                        }
                    }
                }
            }, {
                key: "onResizeMobile",
                value: function() {
                    var t = v.default.getState().browser.width - 40,
                        e = v.default.getState().browser.height,
                        n = v.default.getState().layout.orientation,
                        r = "landscape" === n ? w.BORDERS_MOBILE_LANDSCAPE : w.BORDERS_MOBILE_PORTRAIT;
                    if (this.w2 = t / 2, this.h2 = e / 2, this.lazyElement) {
                        var i = this.lazyElement.dataset.height / this.lazyElement.dataset.width,
                            o = t,
                            s = e - r,
                            a = o * i;
                        if (a >= s) {
                            var u = Math.round(s / i),
                                l = Math.floor((u - 2) * i),
                                c = this.photoContainer.classList.contains("justify-center");
                            this.photo.style.width = u + "px", this.lazyElement.querySelector(".lazy-container").style.height = l + "px", c || (this.photoContainer.classList.add("justify-center"), this.lazyElement.style.left = "0px", this.photo.style.marginLeft = "0px")
                        } else {
                            var p = Math.round(a / i),
                                f = Math.floor((p - 2) * i);
                            this.lazyElement.querySelector(".lazy-container").style.height = f + "px", this.photo.style.width = p + "px";
                            this.photoContainer.classList.contains("justify-center") || (this.photo.style.marginLeft = "20px")
                        }
                        if (this.lazy) {
                            this.lazy.resizeAsset(v.default.getState().browser.width, v.default.getState().browser.height);
                            var h = this.lazyElement.getBoundingClientRect();
                            this.actions.setDimensions({
                                width: h.width,
                                height: h.height,
                                left: h.left,
                                top: h.top,
                                right: t - h.right,
                                bottom: e - h.bottom
                            })
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this.isFullScreen && b.default.offRAF(this.handlers.update), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }]), e
        }(c.default);
    e.default = j
}, function(t, e, n) {
    var r = n(29).twig,
        i = r({
            id: "9bebf1f852c9e20eb45f6fc5531d428c47ff11559ca6dcdf0701c2219f4d1e342564709d0c13685b45c9a17b047e92e06dce05b3a246c630cec7b265942b9b7c",
            data: [{
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "padding",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "assets"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "main"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "height"
                    }, {
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "assets"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "main"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "width"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "/",
                        precidence: 5,
                        associativity: "leftToRight",
                        operator: "/"
                    }, {
                        type: "Twig.expression.type.number",
                        value: 100,
                        match: ["100", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "*",
                        precidence: 5,
                        associativity: "leftToRight",
                        operator: "*"
                    }]
                }
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "columns",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "cols"
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 10,
                            match: ["10", null]
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\n"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "photoClass",
                    expression: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }]
                }
            }, {
                type: "raw",
                value: '\n<section class="page-wrapper" id="photo">\n\n\t<div class="photo-container grid '
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "offset"
                    }, {
                        type: "Twig.expression.type.operator.unary",
                        value: "not",
                        precidence: 3,
                        associativity: "rightToLeft",
                        operator: "not"
                    }],
                    output: [{
                        type: "raw",
                        value: "justify-center"
                    }]
                }
            }, {
                type: "raw",
                value: " "
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "center"
                    }, {
                        type: "Twig.expression.type.operator.unary",
                        value: "not",
                        precidence: 3,
                        associativity: "rightToLeft",
                        operator: "not"
                    }],
                    output: [{
                        type: "raw",
                        value: "align-center"
                    }]
                }
            }, {
                type: "raw",
                value: '">\n\n\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "photo",
                        match: ["photo"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "type"
                    }, {
                        type: "Twig.expression.type.string",
                        value: "Fullscreen"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "==",
                        precidence: 9,
                        associativity: "leftToRight",
                        operator: "=="
                    }],
                    output: [{
                        type: "raw",
                        value: '\t\t\t<div class="photo fullscreen">\n\t\t'
                    }]
                }
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.else",
                    match: ["else"],
                    output: [{
                        type: "raw",
                        value: '\t\t\t<div class="photo col-24 col-md-'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "columns",
                            match: ["columns"]
                        }]
                    }, {
                        type: "raw",
                        value: " "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.if",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "photo",
                                match: ["photo"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "offset"
                            }],
                            output: [{
                                type: "raw",
                                value: "offset-"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "photo",
                                    match: ["photo"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "offset"
                                }]
                            }]
                        }
                    }, {
                        type: "raw",
                        value: '" data-col="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "columns",
                            match: ["columns"]
                        }]
                    }, {
                        type: "raw",
                        value: '">\n\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\n\t\t\t\t<div class="lazy" data-src="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "url"
                }]
            }, {
                type: "raw",
                value: '" style="padding-top:'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "padding",
                    match: ["padding"]
                }]
            }, {
                type: "raw",
                value: '%;" data-width="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "width"
                }]
            }, {
                type: "raw",
                value: '" data-height="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "height"
                }]
            }, {
                type: "raw",
                value: '" >\n\t\t\t\t\t<span class="mask"></span>\n\t\t\t\t\t<div class="lazy-container">\n\t\t\t\t\t\t\t\x3c!-- <span class="overlay" style="background-image: url(\''
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "loading"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "url"
                }]
            }, {
                type: "raw",
                value: '\');"></span> --\x3e\n\t\t\t\t\t</div>\n\t\t\t\t\t<noscript>\n\t\t\t\t\t\t<img src="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "url"
                }]
            }, {
                type: "raw",
                value: '" alt="Mark" width="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "width"
                }]
            }, {
                type: "raw",
                value: '" height="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "photo",
                    match: ["photo"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "assets"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "main"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "height"
                }]
            }, {
                type: "raw",
                value: '" />\n\t\t\t\t\t</noscript>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t</div>\n\n</section>'
            }],
            allowInlineIncludes: !0,
            rethrow: !0
        });
    t.exports = function(t) {
        return i.render(t)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return {
            type: o.SET_PHOTO_READY,
            isReady: t
        }
    }

    function i(t) {
        return {
            type: o.SET_PHOTO_DIMENSIONS,
            dimensions: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setPhotoReady = r, e.setPhotoDimensions = i;
    var o = n(57)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            if (void 0 !== s) return s.call(r)
        },
        l = n(5),
        c = r(l),
        p = n(268),
        f = r(p),
        h = n(99),
        d = n(38),
        y = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.Component = f.default, n
            }
            return s(e, t), a(e, [{
                key: "init",
                value: function() {
                    return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this)
                }
            }, {
                key: "initData",
                value: function() {
                    this.data = {
                        home: (0, h.getRoute)(d.HOMEPAGE)
                    }
                }
            }]), e
        }(c.default);
    e.default = y
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(47),
        u = r(a),
        l = n(269),
        c = r(l),
        p = function(t) {
            function e(t) {
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.template = c.default, n
            }
            return s(e, t), e
        }(u.default);
    e.default = p
}, function(t, e, n) {
    var r = n(29).twig,
        i = r({
            id: "83c06b6b6f32ad463fda993ad91c30a29071d3128915585cdbff21b142a554016d6c3a1a4e8ff5e3b3621b878c59c2fd24c15ad85f7168216ea7148db5e2d7cf",
            data: [{
                type: "raw",
                value: '<section class="page-wrapper" id="error">\n\n\t<div class="introduction">\n\n\t\t\t<h1>Not the page you are lookig for</h1>\n\n\t</div>\n\n</section>'
            }],
            allowInlineIncludes: !0,
            rethrow: !0
        });
    t.exports = function(t) {
        return i.render(t)
    }
}]);