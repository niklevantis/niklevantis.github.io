! function (t) {
    function e(r) {
        if (a[r]) return a[r].exports;
        var n = a[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    var a = {};
    e.m = t, e.c = a, e.d = function (t, a, r) {
        e.o(t, a) || Object.defineProperty(t, a, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(a, "a", a), a
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/dist", e(e.s = 0)
}([function (t, e, a) {
    "use strict";

    function r() {
        d3.select("#loaderWrapper").transition().duration(500).style("display"), d3.select("#mainWrapper").transition().duration(500).style("opacity", 1).style("overflow-y", "none"), d3.select("body").style("overflow-y", "scroll")
    }

    function n(t) {
        d3.select("#loadBar").style("width", Math.round(100 * p.progress) + "vW")
    }

    function o() {
        d3.select("#bgAnimation").attr("width", window.innerWidth).attr("height", window.innerHeight).selectAll("circle").attr("cx", window.innerWidth / 2 + 10).attr("cy", window.innerHeight / 2)
    }

    function i(t) {
        var e = d3.select("#mainWrapper").append("div").attr("id", "audioListContainer"),
            a = [];
        d3.select("#bgAnimation").attr("width", window.innerWidth).attr("height", window.innerHeight).selectAll("circle").data(y).enter().append("circle").attr("r", function (t) {
            return 0
        }).attr("cx", window.innerWidth / 2 + 10).attr("cy", window.innerHeight / 2), Object.keys(t).forEach(function (r) {
            var n = t[r].url,
                o = t[r].id,
                i = t[r].name,
                l = t[r].bgColor,
                u = t[r].circleColorIn,
                p = t[r].circleColorMean,
                y = t[r].circleColorOut,
                f = t[r].fontColor,
                b = t[r].borderColor,
                w = t[r].uiTheme,
                A = e.append("ul"),
                h = n.split("audio/");
            A.append("li").attr("class", "audioControls").append("a").attr("id", "play_" + o).attr("class", "play_dark").on("click", function () {
                v.paused ? (d(v, o, l, u, p, y, f, b, w), d3.select("#mainWrapper").attr("uiTheme", w)) : s(), d3.event.stopPropagation()
            }), A.append("li").attr("class", "audioTime").attr("id", "timeLeft_" + o).html("00:00"), A.append("li").attr("class", "audioTitle").append("a").attr("href", "audio/" + h[1]).attr("download", "audio/" + h[1]).append("span").attr("class", "downloadBtn_dark"), A.select(".audioTitle a").append("p").html(i), A.append("audio").attr("src", n).attr("id", o);
            var v = document.getElementById(o);
            a[o] = m.createMediaElementSource(v), a[o].connect(g), v.onloadedmetadata = function () {
                c(v)
            }
        })
    }

    function d(t, e, a, r, n, o, i, d, u) {
        function p() {
            var t = d3.max(y),
                e = d3.mean(y),
                a = d3.scaleLinear().domain([1, e, t]).range([r, n, o]).interpolate(d3.interpolateRgb),
                i = d3.scaleLinear().domain([1, t]).range([1, .4]);
            g.getByteFrequencyData(y), d3.select("svg").selectAll("circle").data(y).attr("r", function (t) {
                return 1.5 * t
            }).attr("fill", function (t) {
                return a(t)
            }).attr("fill-opacity", function (t) {
                return i(t)
            }), l = requestAnimationFrame(p)
        }
        void 0 !== l && s(), t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2 || (m.resume(), t.currentTime = 0, t.play()), d3.select("#play_" + e).attr("class", "stop_" + u).style("opacity", 1), d3.selectAll(".play_dark").attr("class", "play_" + u).style("opacity", .2), d3.select("body").transition().duration(100).style("background-color", a).style("color", i), d3.selectAll(".audioTitle span").attr("class", "downloadBtn_" + u), d3.selectAll("a").transition().duration(100).style("color", i), d3.selectAll("#audioListContainer ul").transition().duration(100).style("border-color", d), d3.select("svg").selectAll("circle").attr("fill", r), t.addEventListener("timeupdate", function () {
            c(t)
        }, !1), t.addEventListener("ended", function () {
            s()
        }, !1), l = requestAnimationFrame(p)
    }

    function s() {
        for (var t = document.getElementsByTagName("audio"), e = 0; e < t.length; e++) t[e].pause(), t[e].currentTime = 0;
        d3.selectAll('a[id^="play_"]').attr("class", "play_dark").style("opacity", 1), d3.select("body").transition().duration(500).style("background-color", "white").style("color", "#333"), d3.selectAll(".audioTitle span").attr("class", "downloadBtn_dark"), d3.selectAll("a").transition().duration(100).style("color", "#333"), d3.selectAll("#audioListContainer ul").transition().duration(1e3).style("border-color", "rgba(0, 0, 0, 0.2)"), d3.select("svg").selectAll("circle").transition().duration(1e3).attr("r", 0), d3.select("#mainWrapper").attr("uiTheme", "dark"), cancelAnimationFrame(l)
    }

    function c(t) {
        var e = t.id,
            a = t.duration,
            r = t.currentTime,
            a = parseInt(a),
            r = parseInt(r),
            n = a - r,
            o = Math.round(n % 60),
            i = Math.floor(n / 60) % 60;
        o = o < 10 ? "0" + o : o, i = i, d3.select("#timeLeft_" + e).html(i + ":" + o)
    }
    var l, u = a(1),
        p = new createjs.LoadQueue(!0);
    p.loadManifest(u.manifest, !0, "audio/"), p.on("progress", n, void 0), p.on("complete", r, void 0), d3.select("#mainWrapper").style("opacity", 1);
    d3.json("data.json", function (t, e) {
        if (t) return console.warn(t);
        i(e)
    }), d3.select(window).on("resize", o), window.AudioContext = window.webkitAudioContext || window.AudioContext;
    var y = new Uint8Array(40),
        m = new AudioContext,
        g = m.createAnalyser();
    g.connect(m.destination), o()
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.manifest = [{
        src: "nowhere.mp3",
        type: createjs.AbstractLoader.SOUND
    }, {
        src: "changetheworld.mp3",
        type: createjs.AbstractLoader.SOUND
    }, {
        src: "citizen_of_pain.mp3",
        type: createjs.AbstractLoader.SOUND
    }, {
        src: "dystopia.mp3",
        type: createjs.AbstractLoader.SOUND
    }, {
        src: "volunteer.mp3",
        type: createjs.AbstractLoader.SOUND
    }, {
        src: "img/btn-pause_light.svg",
        type: createjs.AbstractLoader.SVG
    }, {
        src: "img/btn-pause_dark.svg",
        type: createjs.AbstractLoader.SVG
    }, {
        src: "img/btn-play_light.svg",
        type: createjs.AbstractLoader.SVG
    }, {
        src: "img/btn-play_dark.svg",
        type: createjs.AbstractLoader.SVG
    }, {
        src: "img/btn-dl_dark.svg",
        type: createjs.AbstractLoader.SVG
    }, {
        src: "img/btn-dl_light.svg",
        type: createjs.AbstractLoader.SVG
    }]
}]);