(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [706], {
        92: function() {},
        8770: function() {},
        933: function() {},
        797: function(e, t, s) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return n(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return n(e, t);
                        var s = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? n(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            s.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        719: function(e, t, s) {
            "use strict";
            s.d(t, {
                tq: function() {
                    return C
                },
                o5: function() {
                    return S
                }
            });
            var n = s(7294),
                i = s(1911);

            function a(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function r(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : r(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function l(e = {}) {
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e = "") {
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
            const u = (e, t) => {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
                        n = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    n && n.slidesPerView && (s = n.slidesPerView)
                }
                let n = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return n += t.loopAdditionalSlides, n > e.length && t.loopedSlidesLimit && (n = e.length), n
            };

            function f(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function h(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    f(e) ? t.push(e) : e.props && e.props.children && h(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function m(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (f(e)) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = h(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function g({
                swiper: e,
                slides: t,
                passedParams: s,
                changedParams: n,
                nextEl: i,
                prevEl: l,
                scrollbarEl: o,
                paginationEl: d
            }) {
                const c = n.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: p,
                        pagination: u,
                        navigation: f,
                        scrollbar: h,
                        virtual: m,
                        thumbs: g
                    } = e;
                let v, b, w, y, C;
                n.includes("thumbs") && s.thumbs && s.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (v = !0), n.includes("controller") && s.controller && s.controller.control && p.controller && !p.controller.control && (b = !0), n.includes("pagination") && s.pagination && (s.pagination.el || d) && (p.pagination || !1 === p.pagination) && u && !u.el && (w = !0), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (p.scrollbar || !1 === p.scrollbar) && h && !h.el && (y = !0), n.includes("navigation") && s.navigation && (s.navigation.prevEl || l) && (s.navigation.nextEl || i) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (C = !0);
                if (c.forEach((t => {
                        if (a(p[t]) && a(s[t])) r(p[t], s[t]);
                        else {
                            const i = s[t];
                            !0 !== i && !1 !== i || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? p[t] = s[t] : !1 === i && e[n = t] && (e[n].destroy(), "navigation" === n ? (p[n].prevEl = void 0, p[n].nextEl = void 0, e[n].prevEl = void 0, e[n].nextEl = void 0) : (p[n].el = void 0, e[n].el = void 0))
                        }
                        var n
                    })), c.includes("controller") && !b && e.controller && e.controller.control && p.controller && p.controller.control && (e.controller.control = p.controller.control), n.includes("children") && t && m && p.virtual.enabled ? (m.slides = t, m.update(!0)) : n.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), v) {
                    g.init() && g.update(!0)
                }
                b && (e.controller.control = p.controller.control), w && (d && (p.pagination.el = d), u.init(), u.render(), u.update()), y && (o && (p.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()), C && (i && (p.navigation.nextEl = i), l && (p.navigation.prevEl = l), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, !1), e.update()
            }

            function v(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const b = (0, n.createContext)(null),
                w = (0, n.createContext)(null);

            function y() {
                return y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, y.apply(this, arguments)
            }
            const C = (0, n.forwardRef)((function(e, t) {
                let {
                    className: s,
                    tag: f = "div",
                    wrapperTag: h = "div",
                    children: b,
                    onSwiper: C,
                    ...E
                } = void 0 === e ? {} : e, S = !1;
                const [T, x] = (0, n.useState)("swiper"), [$, k] = (0, n.useState)(null), [M, P] = (0, n.useState)(!1), O = (0, n.useRef)(!1), L = (0, n.useRef)(null), z = (0, n.useRef)(null), _ = (0, n.useRef)(null), A = (0, n.useRef)(null), I = (0, n.useRef)(null), D = (0, n.useRef)(null), N = (0, n.useRef)(null), G = (0, n.useRef)(null), {
                    params: B,
                    passedParams: j,
                    rest: H,
                    events: F
                } = function(e = {}, t = !0) {
                    const s = {
                            on: {}
                        },
                        n = {},
                        l = {};
                    r(s, i.ZP.defaults), r(s, i.ZP.extendedDefaults), s._emitClasses = !0, s.init = !1;
                    const o = {},
                        d = p.map((e => e.replace(/_/, ""))),
                        c = Object.assign({}, e);
                    return Object.keys(c).forEach((i => {
                        "undefined" !== typeof e[i] && (d.indexOf(i) >= 0 ? a(e[i]) ? (s[i] = {}, l[i] = {}, r(s[i], e[i]), r(l[i], e[i])) : (s[i] = e[i], l[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i] ? t ? n[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : s.on[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : o[i] = e[i])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                    })), {
                        params: s,
                        passedParams: l,
                        rest: o,
                        events: n
                    }
                }(E), {
                    slides: R,
                    slots: V
                } = m(b), W = () => {
                    P(!M)
                };
                Object.assign(B.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                const q = () => {
                    if (Object.assign(B.on, F), S = !0, z.current = new i.ZP(B), z.current.loopCreate = () => {}, z.current.loopDestroy = () => {}, B.loop && (z.current.loopedSlides = u(R, B)), z.current.virtual && z.current.params.virtual.enabled) {
                        z.current.virtual.slides = R;
                        const e = {
                            cache: !1,
                            slides: R,
                            renderExternal: k,
                            renderExternalUpdate: !1
                        };
                        r(z.current.params.virtual, e), r(z.current.originalParams.virtual, e)
                    }
                };
                L.current || q(), z.current && z.current.on("_beforeBreakpoint", W);
                return (0, n.useEffect)((() => () => {
                    z.current && z.current.off("_beforeBreakpoint", W)
                })), (0, n.useEffect)((() => {
                    !O.current && z.current && (z.current.emitSlidesClasses(), O.current = !0)
                })), v((() => {
                    if (t && (t.current = L.current), L.current) return z.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: s,
                            paginationEl: n,
                            scrollbarEl: i,
                            swiper: a
                        }, r) {
                            l(r) && t && s && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = s, a.originalParams.navigation.prevEl = s), o(r) && n && (a.params.pagination.el = n, a.originalParams.pagination.el = n), d(r) && i && (a.params.scrollbar.el = i, a.originalParams.scrollbar.el = i), a.init(e)
                        }({
                            el: L.current,
                            nextEl: I.current,
                            prevEl: D.current,
                            paginationEl: N.current,
                            scrollbarEl: G.current,
                            swiper: z.current
                        }, B), C && C(z.current), () => {
                            z.current && !z.current.destroyed && z.current.destroy(!0, !1)
                        }
                }), []), v((() => {
                    !S && F && z.current && Object.keys(F).forEach((e => {
                        z.current.on(e, F[e])
                    }));
                    const e = function(e, t, s, n, i) {
                        const r = [];
                        if (!t) return r;
                        const l = e => {
                            r.indexOf(e) < 0 && r.push(e)
                        };
                        if (s && n) {
                            const e = n.map(i),
                                t = s.map(i);
                            e.join("") !== t.join("") && l("children"), n.length !== s.length && l("children")
                        }
                        return p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (a(e[s]) && a(t[s])) {
                                    const n = Object.keys(e[s]),
                                        i = Object.keys(t[s]);
                                    n.length !== i.length ? l(s) : (n.forEach((n => {
                                        e[s][n] !== t[s][n] && l(s)
                                    })), i.forEach((n => {
                                        e[s][n] !== t[s][n] && l(s)
                                    })))
                                } else e[s] !== t[s] && l(s)
                        })), r
                    }(j, _.current, R, A.current, (e => e.key));
                    return _.current = j, A.current = R, e.length && z.current && !z.current.destroyed && g({
                        swiper: z.current,
                        slides: R,
                        passedParams: j,
                        changedParams: e,
                        nextEl: I.current,
                        prevEl: D.current,
                        scrollbarEl: G.current,
                        paginationEl: N.current
                    }), () => {
                        F && z.current && Object.keys(F).forEach((e => {
                            z.current.off(e, F[e])
                        }))
                    }
                })), v((() => {
                    var e;
                    !(e = z.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [$]), n.createElement(f, y({
                    ref: L,
                    className: c(`${T}${s?` ${s}`:""}`)
                }, H), n.createElement(w.Provider, {
                    value: z.current
                }, V["container-start"], n.createElement(h, {
                    className: "swiper-wrapper"
                }, V["wrapper-start"], B.virtual ? function(e, t, s) {
                    if (!s) return null;
                    const i = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => n.cloneElement(t, {
                        swiper: e,
                        style: i
                    })))
                }(z.current, R, $) : !B.loop || z.current && z.current.destroyed ? R.map((e => n.cloneElement(e, {
                    swiper: z.current
                }))) : function(e, t, s) {
                    const i = t.map(((t, s) => n.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function a(e, t, i) {
                        return n.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${i}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - i.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = n.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                i.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = i.length);
                    const r = u(i, s),
                        l = [],
                        o = [];
                    for (let n = 0; n < r; n += 1) {
                        const e = n - Math.floor(n / i.length) * i.length;
                        o.push(a(i[e], n, "append")), l.unshift(a(i[i.length - e - 1], n, "prepend"))
                    }
                    return e && (e.loopedSlides = r), [...l, ...i, ...o]
                }(z.current, R, B), V["wrapper-end"]), l(B) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: I,
                    className: "swiper-button-next"
                })), d(B) && n.createElement("div", {
                    ref: G,
                    className: "swiper-scrollbar"
                }), o(B) && n.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), V["container-end"]))
            }));

            function E() {
                return E = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, E.apply(this, arguments)
            }
            C.displayName = "Swiper";
            const S = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: s = "div",
                    children: i,
                    className: a = "",
                    swiper: r,
                    zoom: l,
                    virtualIndex: o,
                    ...d
                } = void 0 === e ? {} : e;
                const p = (0, n.useRef)(null),
                    [u, f] = (0, n.useState)("swiper-slide");

                function h(e, t, s) {
                    t === p.current && f(s)
                }
                v((() => {
                    if (t && (t.current = p.current), p.current && r) {
                        if (!r.destroyed) return r.on("_slideClass", h), () => {
                            r && r.off("_slideClass", h)
                        };
                        "swiper-slide" !== u && f("swiper-slide")
                    }
                })), v((() => {
                    r && p.current && !r.destroyed && f(r.getSlideClasses(p.current))
                }), [r]);
                const m = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    g = () => "function" === typeof i ? i(m) : i;
                return n.createElement(s, E({
                    ref: p,
                    className: c(`${u}${a?` ${a}`:""}`),
                    "data-swiper-slide-index": o
                }, d), n.createElement(b.Provider, {
                    value: m
                }, l ? n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof l ? l : void 0
                }, g()) : g()))
            }));
            S.displayName = "SwiperSlide"
        },
        1911: function(e, t, s) {
            "use strict";

            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
                }))
            }
            s.d(t, {
                s5: function() {
                    return le
                },
                pt: function() {
                    return oe
                },
                Qr: function() {
                    return re
                },
                W_: function() {
                    return se
                },
                tl: function() {
                    return ie
                },
                LW: function() {
                    return ae
                },
                ZP: function() {
                    return ee
                }
            });
            const a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function r() {
                const e = "undefined" !== typeof document ? document : {};
                return i(e, a), e
            }
            const l = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return i(e, l), e
            }
            class d extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function c(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...c(e)) : t.push(e)
                })), t
            }

            function p(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function u(e, t) {
                const s = o(),
                    n = r();
                let i = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(i);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = n.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) i.push(t.childNodes[s])
                    } else i = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            n = t.querySelectorAll(e);
                        for (let i = 0; i < n.length; i += 1) s.push(n[i]);
                        return s
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === s || e === n) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    i = e
                }
                return new d(function(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(i))
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, s, n, i] = e;

                    function a(e) {
                        const t = e.target;
                        if (!t) return;
                        const i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), u(t).is(s)) n.apply(t, i);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && n.apply(e[t], i)
                        }
                    }

                    function r(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const l = t.split(" ");
                    let o;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (o = 0; o < l.length; o += 1) {
                                const t = l[o];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: n,
                                    proxyListener: a
                                }), e.addEventListener(t, a, i)
                            } else
                                for (o = 0; o < l.length; o += 1) {
                                    const t = l[o];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: n,
                                        proxyListener: r
                                    }), e.addEventListener(t, r, i)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, s, n, i] = e;
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const a = t.split(" ");
                    for (let r = 0; r < a.length; r += 1) {
                        const e = a[r];
                        for (let t = 0; t < this.length; t += 1) {
                            const a = this[t];
                            let r;
                            if (!s && a.dom7Listeners ? r = a.dom7Listeners[e] : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[e]), r && r.length)
                                for (let t = r.length - 1; t >= 0; t -= 1) {
                                    const s = r[t];
                                    n && s.listener === n || n && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === n ? (a.removeEventListener(e, s.proxyListener, i), r.splice(t, 1)) : n || (a.removeEventListener(e, s.proxyListener, i), r.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = o(),
                        s = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < s.length; i += 1) {
                        const a = s[i];
                        for (let s = 0; s < this.length; s += 1) {
                            const i = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(a, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = o();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = o(),
                            t = r(),
                            s = this[0],
                            n = s.getBoundingClientRect(),
                            i = t.body,
                            a = s.clientTop || i.clientTop || 0,
                            l = s.clientLeft || i.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: n.top + d - a,
                            left: n.left + c - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const s = o();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (const t in e) this[n].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = o(),
                        s = r(),
                        n = this[0];
                    let i, a;
                    if (!n || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (i = u(e), a = 0; a < i.length; a += 1)
                            if (i[a] === n) return !0;
                        return !1
                    }
                    if (e === s) return n === s;
                    if (e === t) return n === t;
                    if (e.nodeType || e instanceof d) {
                        for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1)
                            if (i[a] === n) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]])
                    }
                    return u([this[e]])
                },
                append: function(...e) {
                    let t;
                    const s = r();
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const n = s.createElement("div");
                                for (n.innerHTML = t; n.firstChild;) this[e].appendChild(n.firstChild)
                            } else if (t instanceof d)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = r();
                    let s, n;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const i = t.createElement("div");
                            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[s].insertBefore(i.childNodes[n], this[s].childNodes[0])
                        } else if (e instanceof d)
                        for (n = 0; n < e.length; n += 1) this[s].insertBefore(e[n], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const n = s.nextElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
                    }
                    return u([])
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const n = s.previousElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let n = this[s].parentNode;
                        for (; n;) e ? u(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return u(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return u(t)
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].children;
                        for (let s = 0; s < n.length; s += 1) e && !u(n[s]).is(e) || t.push(n[s])
                    }
                    return u(t)
                },
                filter: function(e) {
                    return u(p(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(u.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var g = u;

            function v(e, t = 0) {
                return setTimeout(e, t)
            }

            function b() {
                return Date.now()
            }

            function w(e, t = "x") {
                const s = o();
                let n, i, a;
                const r = function(e) {
                    const t = o();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = s.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function y(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function C(...e) {
                const t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < e.length; i += 1) {
                    const a = e[i];
                    if (void 0 !== a && null !== a && (n = a, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                        const e = Object.keys(Object(a)).filter((e => s.indexOf(e) < 0));
                        for (let s = 0, n = e.length; s < n; s += 1) {
                            const n = e[s],
                                i = Object.getOwnPropertyDescriptor(a, n);
                            void 0 !== i && i.enumerable && (y(t[n]) && y(a[n]) ? a[n].__swiper__ ? t[n] = a[n] : C(t[n], a[n]) : !y(t[n]) && y(a[n]) ? (t[n] = {}, a[n].__swiper__ ? t[n] = a[n] : C(t[n], a[n])) : t[n] = a[n])
                        }
                    }
                }
                var n;
                return t
            }

            function E(e, t, s) {
                e.style.setProperty(t, s)
            }

            function S({
                swiper: e,
                targetPosition: t,
                side: s
            }) {
                const n = o(),
                    i = -e.translate;
                let a, r = null;
                const l = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
                const d = t > i ? "next" : "prev",
                    c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    p = () => {
                        a = (new Date).getTime(), null === r && (r = a);
                        const o = Math.max(Math.min((a - r) / l, 1), 0),
                            d = .5 - Math.cos(o * Math.PI) / 2;
                        let u = i + d * (t - i);
                        if (c(u, t) && (u = t), e.wrapperEl.scrollTo({
                                [s]: u
                            }), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                [s]: u
                            })
                        })), void n.cancelAnimationFrame(e.cssModeFrameID);
                        e.cssModeFrameID = n.requestAnimationFrame(p)
                    };
                p()
            }
            let T, x, $;

            function k() {
                return T || (T = function() {
                    const e = o(),
                        t = r();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), T
            }

            function M(e = {}) {
                return x || (x = function({
                    userAgent: e
                } = {}) {
                    const t = k(),
                        s = o(),
                        n = s.navigator.platform,
                        i = e || s.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1
                        },
                        r = s.screen.width,
                        l = s.screen.height,
                        d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = i.match(/(iPad).*OS\s([\d_]+)/);
                    const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === n;
                    let h = "MacIntel" === n;
                    return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${r}x${l}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), d && !f && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a
                }(e)), x
            }

            function P() {
                return $ || ($ = function() {
                    const e = o();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), $
            }
            var O = {
                on(e, t, s) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;
                    const i = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
                    })), n
                },
                once(e, t, s) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;

                    function i(...s) {
                        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, s)
                    }
                    return i.__emitterProxy = t, n.on(e, i, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const n = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((n, i) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                        }))
                    })), s) : s
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsListeners) return t;
                    let s, n, i;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? (s = e[0], n = e.slice(1, e.length), i = t) : (s = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i);
                    return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(i, [e, ...n])
                        })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                            e.apply(i, n)
                        }))
                    })), t
                }
            };
            var L = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const n = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), s = s - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const n = e.params,
                        {
                            $wrapperEl: i,
                            size: a,
                            rtlTranslate: r,
                            wrongRTL: l
                        } = e,
                        o = e.virtual && n.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        c = i.children(`.${e.params.slideClass}`),
                        p = o ? e.virtual.slides.length : c.length;
                    let u = [];
                    const f = [],
                        h = [];
                    let m = n.slidesOffsetBefore;
                    "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
                    let g = n.slidesOffsetAfter;
                    "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let w = n.spaceBetween,
                        y = -m,
                        C = 0,
                        S = 0;
                    if ("undefined" === typeof a) return;
                    "string" === typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * a), e.virtualSize = -w, r ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), n.centeredSlides && n.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const T = n.grid && n.grid.rows > 1 && e.grid;
                    let x;
                    T && e.grid.initSlides(p);
                    const $ = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                    for (let E = 0; E < p; E += 1) {
                        x = 0;
                        const i = c.eq(E);
                        if (T && e.grid.updateSlide(E, i, p, t), "none" !== i.css("display")) {
                            if ("auto" === n.slidesPerView) {
                                $ && (c[E].style[t("width")] = "");
                                const a = getComputedStyle(i[0]),
                                    r = i[0].style.transform,
                                    l = i[0].style.webkitTransform;
                                if (r && (i[0].style.transform = "none"), l && (i[0].style.webkitTransform = "none"), n.roundLengths) x = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                                else {
                                    const e = s(a, "width"),
                                        t = s(a, "padding-left"),
                                        n = s(a, "padding-right"),
                                        r = s(a, "margin-left"),
                                        l = s(a, "margin-right"),
                                        o = a.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) x = e + r + l;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: a
                                        } = i[0];
                                        x = e + t + n + r + l + (a - s)
                                    }
                                }
                                r && (i[0].style.transform = r), l && (i[0].style.webkitTransform = l), n.roundLengths && (x = Math.floor(x))
                            } else x = (a - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (x = Math.floor(x)), c[E] && (c[E].style[t("width")] = `${x}px`);
                            c[E] && (c[E].swiperSlideSize = x), h.push(x), n.centeredSlides ? (y = y + x / 2 + C / 2 + w, 0 === C && 0 !== E && (y = y - a / 2 - w), 0 === E && (y = y - a / 2 - w), Math.abs(y) < .001 && (y = 0), n.roundLengths && (y = Math.floor(y)), S % n.slidesPerGroup === 0 && u.push(y), f.push(y)) : (n.roundLengths && (y = Math.floor(y)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), y = y + x + w), e.virtualSize += x + w, C = x, S += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + g, r && l && ("slide" === n.effect || "coverflow" === n.effect) && i.css({
                            width: `${e.virtualSize+n.spaceBetween}px`
                        }), n.setWrapperSize && i.css({
                            [t("width")]: `${e.virtualSize+n.spaceBetween}px`
                        }), T && e.grid.updateWrapperSize(x, u, t), !n.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            n.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - a && t.push(i)
                        }
                        u = t, Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - a)
                    }
                    if (0 === u.length && (u = [0]), 0 !== n.spaceBetween) {
                        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !n.cssMode || t !== c.length - 1)).css({
                            [s]: `${w}px`
                        })
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (n.spaceBetween ? n.spaceBetween : 0)
                        })), e -= n.spaceBetween;
                        const t = e - a;
                        u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (n.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (n.spaceBetween ? n.spaceBetween : 0)
                            })), e -= n.spaceBetween, e < a) {
                            const t = (a - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), f.forEach(((e, s) => {
                                f[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                        E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !o && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                        const t = `${n.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= n.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        n = t.virtual && t.params.virtual.enabled;
                    let i, a = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const r = e => n ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !n) break;
                                s.push(r(e))
                            } else s.push(r(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if ("undefined" !== typeof s[i]) {
                            const e = s[i].offsetHeight;
                            a = e > a ? e : a
                        }(a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        s = t.params,
                        {
                            slides: n,
                            rtlTranslate: i,
                            snapGrid: a
                        } = t;
                    if (0 === n.length) return;
                    "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                    let r = -e;
                    i && (r = e), n.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let l = 0; l < n.length; l += 1) {
                        const e = n[l];
                        let o = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (o -= n[0].swiperSlideOffset);
                        const d = (r + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                            c = (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                            p = -(r - o),
                            u = p + t.slidesSizesGrid[l];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l), n.eq(l).addClass(s.slideVisibleClass)), e.progress = i ? -d : d, e.originalProgress = i ? -c : c
                    }
                    t.visibleSlides = g(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        n = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: a,
                        isEnd: r
                    } = t;
                    const l = a,
                        o = r;
                    0 === n ? (i = 0, a = !0, r = !0) : (i = (e - t.minTranslate()) / n, a = i <= 0, r = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: a,
                        isEnd: r
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !a || o && !r) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: n,
                            activeIndex: i,
                            realIndex: a
                        } = e,
                        r = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: n,
                            snapGrid: i,
                            params: a,
                            activeIndex: r,
                            realIndex: l,
                            snapIndex: o
                        } = t;
                    let d, c = e;
                    if ("undefined" === typeof c) {
                        for (let e = 0; e < n.length; e += 1) "undefined" !== typeof n[e + 1] ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2 ? c = e : s >= n[e] && s < n[e + 1] && (c = e + 1) : s >= n[e] && (c = e);
                        a.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (i.indexOf(s) >= 0) d = i.indexOf(s);
                    else {
                        const e = Math.min(a.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / a.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1), c === r) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: r,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        s = t.params,
                        n = g(e).closest(`.${s.slideClass}`)[0];
                    let i, a = !1;
                    if (n)
                        for (let r = 0; r < t.slides.length; r += 1)
                            if (t.slides[r] === n) {
                                a = !0, i = r;
                                break
                            }
                    if (!n || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var z = {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: n,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -n : n;
                    if (t.cssMode) return n;
                    let a = w(i[0], e);
                    return s && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: n,
                            params: i,
                            $wrapperEl: a,
                            wrapperEl: r,
                            progress: l
                        } = s;
                    let o, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = n ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || a.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, s = !0, n = !0, i) {
                    const a = this,
                        {
                            params: r,
                            wrapperEl: l
                        } = a;
                    if (a.animating && r.preventInteractionOnTransition) return !1;
                    const o = a.minTranslate(),
                        d = a.maxTranslate();
                    let c;
                    if (c = n && e > o ? o : n && e < d ? d : e, a.updateProgress(c), r.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!a.support.smoothScroll) return S({
                                swiper: a,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function _({
                swiper: e,
                runCallbacks: t,
                direction: s,
                step: n
            }) {
                const {
                    activeIndex: i,
                    previousIndex: a
                } = e;
                let r = s;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), e.emit(`transition${n}`), t && i !== a) {
                    if ("reset" === r) return void e.emit(`slideResetTransition${n}`);
                    e.emit(`slideChangeTransition${n}`), "next" === r ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
                }
            }
            var A = {
                slideTo: function(e = 0, t = this.params.speed, s = !0, n, i) {
                    if ("number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const a = this;
                    let r = e;
                    r < 0 && (r = 0);
                    const {
                        params: l,
                        snapGrid: o,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: f,
                        enabled: h
                    } = a;
                    if (a.animating && l.preventInteractionOnTransition || !h && !n && !i) return !1;
                    const m = Math.min(a.params.slidesPerGroupSkip, r);
                    let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1);
                    const v = -o[g];
                    if (l.normalizeSlideIndex)
                        for (let w = 0; w < d.length; w += 1) {
                            const e = -Math.floor(100 * v),
                                t = Math.floor(100 * d[w]),
                                s = Math.floor(100 * d[w + 1]);
                            "undefined" !== typeof d[w + 1] ? e >= t && e < s - (s - t) / 2 ? r = w : e >= t && e < s && (r = w + 1) : e >= t && (r = w)
                        }
                    if (a.initialized && r !== p) {
                        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (p || 0) !== r) return !1
                    }
                    let b;
                    if (r !== (c || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(v), b = r > p ? "next" : r < p ? "prev" : "reset", u && -v === a.translate || !u && v === a.translate) return a.updateActiveIndex(r), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(v), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = a.isHorizontal(),
                            s = u ? v : -v;
                        if (0 === t) {
                            const t = a.virtual && a.params.virtual.enabled;
                            t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!a.support.smoothScroll) return S({
                                swiper: a,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, s = !0, n) {
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const i = this;
                    let a = e;
                    return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, s, n)
                },
                slideNext: function(e = this.params.speed, t = !0, s) {
                    const n = this,
                        {
                            animating: i,
                            enabled: a,
                            params: r
                        } = n;
                    if (!a) return n;
                    let l = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    const o = n.activeIndex < r.slidesPerGroupSkip ? 1 : l;
                    if (r.loop) {
                        if (i && r.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return r.rewind && n.isEnd ? n.slideTo(0, e, t, s) : n.slideTo(n.activeIndex + o, e, t, s)
                },
                slidePrev: function(e = this.params.speed, t = !0, s) {
                    const n = this,
                        {
                            params: i,
                            animating: a,
                            snapGrid: r,
                            slidesGrid: l,
                            rtlTranslate: o,
                            enabled: d
                        } = n;
                    if (!d) return n;
                    if (i.loop) {
                        if (a && i.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(o ? n.translate : -n.translate),
                        u = r.map((e => c(e)));
                    let f = r[u.indexOf(p) - 1];
                    if ("undefined" === typeof f && i.cssMode) {
                        let e;
                        r.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), "undefined" !== typeof e && (f = r[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = l.indexOf(f), h < 0 && (h = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && n.isBeginning) {
                        const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(i, e, t, s)
                    }
                    return n.slideTo(h, e, t, s)
                },
                slideReset: function(e = this.params.speed, t = !0, s) {
                    return this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e = this.params.speed, t = !0, s, n = .5) {
                    const i = this;
                    let a = i.activeIndex;
                    const r = Math.min(i.params.slidesPerGroupSkip, a),
                        l = r + Math.floor((a - r) / i.params.slidesPerGroup),
                        o = i.rtlTranslate ? i.translate : -i.translate;
                    if (o >= i.snapGrid[l]) {
                        const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * n && (a += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * n && (a -= i.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, a = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            };
            var I = {
                loopCreate: function() {
                    const e = this,
                        t = r(),
                        {
                            params: s,
                            $wrapperEl: n
                        } = e,
                        i = n.children().length > 0 ? g(n.children()[0].parentNode) : n;
                    i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let a = i.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - a.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let n = 0; n < e; n += 1) {
                                const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                i.append(e)
                            }
                            a = i.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                    const l = [],
                        o = [];
                    a.each(((e, t) => {
                        g(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let r = 0; r < e.loopedSlides; r += 1) {
                        const e = r - Math.floor(r / a.length) * a.length;
                        o.push(a.eq(e)[0]), l.unshift(a.eq(a.length - e - 1)[0])
                    }
                    for (let r = 0; r < o.length; r += 1) i.append(g(o[r].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let r = l.length - 1; r >= 0; r -= 1) i.prepend(g(l[r].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: n,
                        allowSlidePrev: i,
                        allowSlideNext: a,
                        snapGrid: r,
                        rtlTranslate: l
                    } = e;
                    let o;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -r[t] - e.getTranslate();
                    if (t < n) {
                        o = s.length - 3 * n + t, o += n;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - n) {
                        o = -s.length + t + n, o += n;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = i, e.allowSlideNext = a, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            };

            function D(e) {
                const t = this,
                    s = r(),
                    n = o(),
                    i = t.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        enabled: d
                    } = t;
                if (!d) return;
                if (t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = g(c.target);
                if ("wrapper" === a.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
                if (i.isTouchEvent = "touchstart" === c.type, !i.isTouchEvent && "which" in c && 3 === c.which) return;
                if (!i.isTouchEvent && "button" in c && c.button > 0) return;
                if (i.isTouched && i.isMoved) return;
                const u = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    f = e.composedPath ? e.composedPath() : e.path;
                u && c.target && c.target.shadowRoot && f && (p = g(f[0]));
                const h = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    m = !(!c.target || !c.target.shadowRoot);
                if (a.noSwiping && (m ? function(e, t = this) {
                        return function t(s) {
                            if (!s || s === r() || s === o()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            const n = s.closest(e);
                            return n || s.getRootNode ? n || t(s.getRootNode().host) : null
                        }(t)
                    }(h, p[0]) : p.closest(h)[0])) return void(t.allowClick = !0);
                if (a.swipeHandler && !p.closest(a.swipeHandler)[0]) return;
                l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                const v = l.currentX,
                    w = l.currentY,
                    y = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    C = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (y && (v <= C || v >= n.innerWidth - C)) {
                    if ("prevent" !== y) return;
                    e.preventDefault()
                }
                if (Object.assign(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = v, l.startY = w, i.touchStartTime = b(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== c.type) {
                    let e = !0;
                    p.is(i.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (i.isTouched = !1)), s.activeElement && g(s.activeElement).is(i.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
                    const n = e && t.allowTouchMove && a.touchStartPreventDefault;
                    !a.touchStartForcePreventDefault && !n || p[0].isContentEditable || c.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
            }

            function N(e) {
                const t = r(),
                    s = this,
                    n = s.touchEventsData,
                    {
                        params: i,
                        touches: a,
                        rtlTranslate: l,
                        enabled: o
                    } = s;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
                if (n.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    p = "touchmove" === d.type ? c.pageX : d.pageX,
                    u = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return a.startX = p, void(a.startY = u);
                if (!s.allowTouchMove) return g(d.target).is(n.focusableElements) || (s.allowClick = !1), void(n.isTouched && (Object.assign(a, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), n.touchStartTime = b()));
                if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (s.isVertical()) {
                        if (u < a.startY && s.translate <= s.maxTranslate() || u > a.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (p < a.startX && s.translate <= s.maxTranslate() || p > a.startX && s.translate >= s.minTranslate()) return;
                if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
                if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                a.currentX = p, a.currentY = u;
                const f = a.currentX - a.startX,
                    h = a.currentY - a.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                }
                if (n.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                s.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && s.loopFix(), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), n.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                a.diff = m, m *= i.touchRatio, l && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
                let v = !0,
                    w = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (w = 0), m > 0 && n.currentTranslate > s.minTranslate() ? (v = !1, i.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + m) ** w)) : m < 0 && n.currentTranslate < s.maxTranslate() && (v = !1, i.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - m) ** w)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
                    if (!(Math.abs(m) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, void(a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                }
                i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
            }

            function G(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: n,
                        touches: i,
                        rtlTranslate: a,
                        slidesGrid: r,
                        enabled: l
                    } = t;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = b(),
                    c = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = o.path || o.composedPath && o.composedPath();
                    t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
                }
                if (s.lastClickTime = b(), v((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = n.followFinger ? a ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
                if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let v = 0; v < r.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof r[v + e] ? p >= r[v] && p < r[v + e] && (u = v, f = r[v + e] - r[v]) : p >= r[v] && (u = v, f = r[r.length - 1] - r[r.length - 2])
                }
                let h = null,
                    m = null;
                n.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const g = (p - r[u]) / f,
                    w = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (c > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (g >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? h : u + w) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - n.longSwipesRatio ? t.slideTo(u + w) : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio ? t.slideTo(m) : t.slideTo(u))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(u + w) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + w), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u))
                }
            }

            function B() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: i,
                    snapGrid: a
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function j(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function H() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: n
                    } = e;
                if (!n) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const a = e.maxTranslate() - e.minTranslate();
                i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let F = !1;

            function R() {}
            const V = (e, t) => {
                const s = r(),
                    {
                        params: n,
                        touchEvents: i,
                        el: a,
                        wrapperEl: l,
                        device: o,
                        support: d
                    } = e,
                    c = !!n.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== i.start || !d.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a[p](i.start, e.onTouchStart, t), a[p](i.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), a[p](i.end, e.onTouchEnd, t), i.cancel && a[p](i.cancel, e.onTouchEnd, t)
                } else a[p](i.start, e.onTouchStart, !1), s[p](i.move, e.onTouchMove, c), s[p](i.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && a[p]("click", e.onClick, !0), n.cssMode && l[p]("scroll", e.onScroll), n.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B, !0) : e[u]("observerUpdate", B, !0)
            };
            var W = {
                attachEvents: function() {
                    const e = this,
                        t = r(),
                        {
                            params: s,
                            support: n
                        } = e;
                    e.onTouchStart = D.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = G.bind(e), s.cssMode && (e.onScroll = H.bind(e)), e.onClick = j.bind(e), n.touch && !F && (t.addEventListener("touchstart", R), F = !0), V(e, "on")
                },
                detachEvents: function() {
                    V(this, "off")
                }
            };
            const q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var X = {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: n = 0,
                            params: i,
                            $el: a
                        } = e,
                        r = i.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in r ? r[l] : void 0) || e.originalParams,
                        d = q(e, i),
                        c = q(e, o),
                        p = i.enabled;
                    d && !c ? (a.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (a.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && a.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = i[t] && i[t].enabled,
                            n = o[t] && o[t].enabled;
                        s && !n && e[t].disable(), !s && n && e[t].enable()
                    }));
                    const u = o.direction && o.direction !== i.direction,
                        f = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), C(e.params, o);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t = "window", s) {
                    if (!e || "container" === t && !s) return;
                    let n = !1;
                    const i = o(),
                        a = "window" === t ? i.innerHeight : s.clientHeight,
                        r = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: a * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    r.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let l = 0; l < r.length; l += 1) {
                        const {
                            point: e,
                            value: a
                        } = r[l];
                        "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = e) : a <= s.clientWidth && (n = e)
                    }
                    return n || "max"
                }
            };
            var Y = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: n,
                            $el: i,
                            device: a,
                            support: r
                        } = e,
                        l = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((n => {
                                    e[n] && s.push(t + n)
                                })) : "string" === typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !r.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: n
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: a.android
                        }, {
                            ios: a.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            var U = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function Z(e, t) {
                return function(s = {}) {
                    const n = Object.keys(s)[0],
                        i = s[n];
                    "object" === typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), C(t, s)) : C(t, s)) : C(t, s)
                }
            }
            const K = {
                    eventsEmitter: O,
                    update: L,
                    translate: z,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            const s = this,
                                {
                                    params: n
                                } = s;
                            n.cssMode || (n.autoHeight && s.updateAutoHeight(), _({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            const s = this,
                                {
                                    params: n
                                } = s;
                            s.animating = !1, n.cssMode || (s.setTransition(0), _({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: A,
                    loop: I,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: W,
                    breakpoints: X,
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = s;
                            if (n) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: Y,
                    images: {
                        loadImage: function(e, t, s, n, i, a) {
                            const r = o();
                            let l;

                            function d() {
                                a && a()
                            }
                            g(e).parent("picture")[0] || e.complete && i ? d() : t ? (l = new r.Image, l.onload = d, l.onerror = d, n && (l.sizes = n), s && (l.srcset = s), t && (l.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const n = e.imagesToLoad[s];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Q = {};
            class J {
                constructor(...e) {
                    let t, s;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = C({}, s), t && !s.el && (s.el = t), s.el && g(s.el).length > 1) {
                        const e = [];
                        return g(s.el).each((t => {
                            const n = C({}, s, {
                                el: t
                            });
                            e.push(new J(n))
                        })), e
                    }
                    const n = this;
                    n.__swiper__ = !0, n.support = k(), n.device = M({
                        userAgent: s.userAgent
                    }), n.browser = P(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
                    const i = {};
                    n.modules.forEach((e => {
                        e({
                            swiper: n,
                            extendParams: Z(s, i),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        })
                    }));
                    const a = C({}, U, i);
                    return n.params = C({}, a, Q, s), n.originalParams = C({}, n.params), n.passedParams = C({}, s), n.params && n.params.on && Object.keys(n.params.on).forEach((e => {
                        n.on(e, n.params.on[e])
                    })), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = g, Object.assign(n, {
                        enabled: n.params.enabled,
                        el: t,
                        classNames: [],
                        slides: g(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return n.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, n.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: b(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = s.minTranslate(),
                        i = (s.maxTranslate() - n) * e + n;
                    s.translateTo(i, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const n = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: n
                        }), e.emit("_slideClass", s, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    const {
                        params: s,
                        slides: n,
                        slidesGrid: i,
                        slidesSizesGrid: a,
                        size: r,
                        activeIndex: l
                    } = this;
                    let o = 1;
                    if (s.centeredSlides) {
                        let e, t = n[l].swiperSlideSize;
                        for (let s = l + 1; s < n.length; s += 1) n[s] && !e && (t += n[s].swiperSlideSize, o += 1, t > r && (e = !0));
                        for (let s = l - 1; s >= 0; s -= 1) n[s] && !e && (t += n[s].swiperSlideSize, o += 1, t > r && (e = !0))
                    } else if ("current" === e)
                        for (let d = l + 1; d < n.length; d += 1) {
                            (t ? i[d] + a[d] - i[l] < r : i[d] - i[l] < r) && (o += 1)
                        } else
                            for (let d = l - 1; d >= 0; d -= 1) {
                                i[l] - i[d] < r && (o += 1)
                            }
                    return o
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let i;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || n()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const s = this,
                        n = s.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${n}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let i = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(n()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children ? s.children(n()) : g(s).children(n())
                    })();
                    if (0 === i.length && t.params.createElements) {
                        const e = r().createElement("div");
                        i = g(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            i.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        {
                            params: n,
                            $el: i,
                            $wrapperEl: a,
                            slides: r
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (s) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    C(Q, e)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return U
                }
                static installModule(e) {
                    J.prototype.__modules__ || (J.prototype.__modules__ = []);
                    const t = J.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => J.installModule(e))), J) : (J.installModule(e), J)
                }
            }
            Object.keys(K).forEach((e => {
                Object.keys(K[e]).forEach((t => {
                    J.prototype[t] = K[e][t]
                }))
            })), J.use([function({
                swiper: e,
                on: t,
                emit: s
            }) {
                const n = o();
                let i = null,
                    a = null;
                const r = () => {
                        e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
                    },
                    l = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    };
                t("init", (() => {
                    e.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                        a = n.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: n
                            } = e;
                            let i = s,
                                a = n;
                            t.forEach((({
                                contentBoxSize: t,
                                contentRect: s,
                                target: n
                            }) => {
                                n && n !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, a = s ? s.height : (t[0] || t).blockSize)
                            })), i === s && a === n || r()
                        }))
                    })), i.observe(e.el)) : (n.addEventListener("resize", r), n.addEventListener("orientationchange", l))
                })), t("destroy", (() => {
                    a && n.cancelAnimationFrame(a), i && i.unobserve && e.el && (i.unobserve(e.el), i = null), n.removeEventListener("resize", r), n.removeEventListener("orientationchange", l)
                }))
            }, function({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = [],
                    a = o(),
                    r = (e, t = {}) => {
                        const s = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void n("observerUpdate", e[0]);
                            const t = function() {
                                n("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), i.push(s)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", (() => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let e = 0; e < t.length; e += 1) r(t[e])
                        }
                        r(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), r(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), s("destroy", (() => {
                    i.forEach((e => {
                        e.disconnect()
                    })), i.splice(0, i.length)
                }))
            }]);
            var ee = J;

            function te(e, t, s, n) {
                const i = r();
                return e.params.createElements && Object.keys(n).forEach((a => {
                    if (!s[a] && !0 === s.auto) {
                        let r = e.$el.children(`.${n[a]}`)[0];
                        r || (r = i.createElement("div"), r.className = n[a], e.$el.append(r)), s[a] = r, t[a] = r
                    }
                })), s
            }

            function se({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                function i(t) {
                    let s;
                    return t && (s = g(t), e.params.uniqueNavElements && "string" === typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
                }

                function a(t, s) {
                    const n = e.params.navigation;
                    t && t.length > 0 && (t[s ? "addClass" : "removeClass"](n.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](n.lockClass))
                }

                function r() {
                    if (e.params.loop) return;
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    a(s, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
                }

                function l(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), n("navigationPrev"))
                }

                function o(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), n("navigationNext"))
                }

                function d() {
                    const t = e.params.navigation;
                    if (e.params.navigation = te(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !t.nextEl && !t.prevEl) return;
                    const s = i(t.nextEl),
                        n = i(t.prevEl);
                    s && s.length > 0 && s.on("click", o), n && n.length > 0 && n.on("click", l), Object.assign(e.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: n,
                        prevEl: n && n[0]
                    }), e.enabled || (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass))
                }

                function c() {
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass))
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, s("init", (() => {
                    !1 === e.params.navigation.enabled ? p() : (d(), r())
                })), s("toEdge fromEdge lock unlock", (() => {
                    r()
                })), s("destroy", (() => {
                    c()
                })), s("enable disable", (() => {
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                })), s("click", ((t, s) => {
                    const {
                        $nextEl: i,
                        $prevEl: a
                    } = e.navigation, r = s.target;
                    if (e.params.navigation.hideOnClick && !g(r).is(a) && !g(r).is(i)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                        let t;
                        i ? t = i.hasClass(e.params.navigation.hiddenClass) : a && (t = a.hasClass(e.params.navigation.hiddenClass)), n(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                    }
                }));
                const p = () => {
                    e.$el.addClass(e.params.navigation.navigationDisabledClass), c()
                };
                Object.assign(e.navigation, {
                    enable: () => {
                        e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), r()
                    },
                    disable: p,
                    update: r,
                    init: d,
                    destroy: c
                })
            }

            function ne(e = "") {
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function ie({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = "swiper-pagination";
                let a;
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${i}-bullet`,
                        bulletActiveClass: `${i}-bullet-active`,
                        modifierClass: `${i}-`,
                        currentClass: `${i}-current`,
                        totalClass: `${i}-total`,
                        hiddenClass: `${i}-hidden`,
                        progressbarFillClass: `${i}-progressbar-fill`,
                        progressbarOppositeClass: `${i}-progressbar-opposite`,
                        clickableClass: `${i}-clickable`,
                        lockClass: `${i}-lock`,
                        horizontalClass: `${i}-horizontal`,
                        verticalClass: `${i}-vertical`,
                        paginationDisabledClass: `${i}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let r = 0;

                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function o(t, s) {
                    const {
                        bulletActiveClass: n
                    } = e.params.pagination;
                    t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`)
                }

                function d() {
                    const t = e.rtl,
                        s = e.params.pagination;
                    if (l()) return;
                    const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        d = e.pagination.$el;
                    let c;
                    const p = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== e.params.paginationType && (c = p + c)) : c = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const n = e.pagination.bullets;
                        let i, l, p;
                        if (s.dynamicBullets && (a = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", a * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (r += c - (e.previousIndex - e.loopedSlides || 0), r > s.dynamicMainBullets - 1 ? r = s.dynamicMainBullets - 1 : r < 0 && (r = 0)), i = Math.max(c - r, 0), l = i + (Math.min(n.length, s.dynamicMainBullets) - 1), p = (l + i) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), d.length > 1) n.each((e => {
                            const t = g(e),
                                n = t.index();
                            n === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (n >= i && n <= l && t.addClass(`${s.bulletActiveClass}-main`), n === i && o(t, "prev"), n === l && o(t, "next"))
                        }));
                        else {
                            const t = n.eq(c),
                                a = t.index();
                            if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                const t = n.eq(i),
                                    r = n.eq(l);
                                for (let e = i; e <= l; e += 1) n.eq(e).addClass(`${s.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (a >= n.length) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        n.eq(n.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                    } else o(t, "prev"), o(r, "next");
                                else o(t, "prev"), o(r, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(n.length, s.dynamicMainBullets + 4),
                                r = (a * i - a) / 2 - p * a,
                                l = t ? "right" : "left";
                            n.css(e.isHorizontal() ? l : "top", `${r}px`)
                        }
                    }
                    if ("fraction" === s.type && (d.find(ne(s.currentClass)).text(s.formatFractionCurrent(c + 1)), d.find(ne(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
                        let t;
                        t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const n = (c + 1) / p;
                        let i = 1,
                            a = 1;
                        "horizontal" === t ? i = n : a = n, d.find(ne(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`).transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0])) : n("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }

                function c() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el;
                    let a = "";
                    if ("bullets" === t.type) {
                        let n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > s && (n = s);
                        for (let s = 0; s < n; s += 1) t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        i.html(a), e.pagination.bullets = i.find(ne(t.bulletClass))
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(a)), "custom" !== t.type && n("paginationRender", e.pagination.$el[0])
                }

                function p() {
                    e.params.pagination = te(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const t = e.params.pagination;
                    if (!t.el) return;
                    let s = g(t.el);
                    0 !== s.length && (e.params.uniqueNavElements && "string" === typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => g(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), r = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", ne(t.bulletClass), (function(t) {
                        t.preventDefault();
                        let s = g(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (s += e.loopedSlides), e.slideTo(s)
                    })), Object.assign(e.pagination, {
                        $el: s,
                        el: s[0]
                    }), e.enabled || s.addClass(t.lockClass))
                }

                function u() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.pagination.$el;
                    s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", ne(t.bulletClass))
                }
                s("init", (() => {
                    !1 === e.params.pagination.enabled ? f() : (p(), c(), d())
                })), s("activeIndexChange", (() => {
                    (e.params.loop || "undefined" === typeof e.snapIndex) && d()
                })), s("snapIndexChange", (() => {
                    e.params.loop || d()
                })), s("slidesLengthChange", (() => {
                    e.params.loop && (c(), d())
                })), s("snapGridLengthChange", (() => {
                    e.params.loop || (c(), d())
                })), s("destroy", (() => {
                    u()
                })), s("enable disable", (() => {
                    const {
                        $el: t
                    } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                })), s("lock unlock", (() => {
                    d()
                })), s("click", ((t, s) => {
                    const i = s.target,
                        {
                            $el: a
                        } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !g(i).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                        const t = a.hasClass(e.params.pagination.hiddenClass);
                        n(!0 === t ? "paginationShow" : "paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
                    }
                }));
                const f = () => {
                    e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), u()
                };
                Object.assign(e.pagination, {
                    enable: () => {
                        e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), p(), c(), d()
                    },
                    disable: f,
                    render: c,
                    update: d,
                    init: p,
                    destroy: u
                })
            }

            function ae({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = r();
                let a, l, o, d, c = !1,
                    p = null,
                    u = null;

                function f() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        rtlTranslate: s,
                        progress: n
                    } = e, {
                        $dragEl: i,
                        $el: a
                    } = t, r = e.params.scrollbar;
                    let d = l,
                        c = (o - l) * n;
                    s ? (c = -c, c > 0 ? (d = l - c, c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c, c = 0) : c + l > o && (d = o - c), e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`), i[0].style.height = `${d}px`), r.hide && (clearTimeout(p), a[0].style.opacity = 1, p = setTimeout((() => {
                        a[0].style.opacity = 0, a.transition(400)
                    }), 1e3))
                }

                function h() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t
                    } = e, {
                        $dragEl: s,
                        $el: n
                    } = t;
                    s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, d = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * d : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, n[0].style.display = d >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }

                function m(t) {
                    return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
                }

                function b(t) {
                    const {
                        scrollbar: s,
                        rtlTranslate: n
                    } = e, {
                        $el: i
                    } = s;
                    let r;
                    r = (m(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== a ? a : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), n && (r = 1 - r);
                    const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                    e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                function w(t) {
                    const s = e.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: r
                        } = e,
                        {
                            $el: l,
                            $dragEl: o
                        } = i;
                    c = !0, a = t.target === o[0] || t.target === o ? m(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), b(t), clearTimeout(u), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), n("scrollbarDragStart", t)
                }

                function y(t) {
                    const {
                        scrollbar: s,
                        $wrapperEl: i
                    } = e, {
                        $el: a,
                        $dragEl: r
                    } = s;
                    c && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, b(t), i.transition(0), a.transition(0), r.transition(0), n("scrollbarDragMove", t))
                }

                function C(t) {
                    const s = e.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: a
                        } = e,
                        {
                            $el: r
                        } = i;
                    c && (c = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), s.hide && (clearTimeout(u), u = v((() => {
                        r.css("opacity", 0), r.transition(400)
                    }), 1e3)), n("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest())
                }

                function E(t) {
                    const {
                        scrollbar: s,
                        touchEventsTouch: n,
                        touchEventsDesktop: a,
                        params: r,
                        support: l
                    } = e, o = s.$el;
                    if (!o) return;
                    const d = o[0],
                        c = !(!l.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        p = !(!l.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    if (!d) return;
                    const u = "on" === t ? "addEventListener" : "removeEventListener";
                    l.touch ? (d[u](n.start, w, c), d[u](n.move, y, c), d[u](n.end, C, p)) : (d[u](a.start, w, c), i[u](a.move, y, c), i[u](a.end, C, p))
                }

                function S() {
                    const {
                        scrollbar: t,
                        $el: s
                    } = e;
                    e.params.scrollbar = te(e, e.originalParams.scrollbar, e.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const n = e.params.scrollbar;
                    if (!n.el) return;
                    let i = g(n.el);
                    e.params.uniqueNavElements && "string" === typeof n.el && i.length > 1 && 1 === s.find(n.el).length && (i = s.find(n.el)), i.addClass(e.isHorizontal() ? n.horizontalClass : n.verticalClass);
                    let a = i.find(`.${e.params.scrollbar.dragClass}`);
                    0 === a.length && (a = g(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(a)), Object.assign(t, {
                        $el: i,
                        el: i[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), n.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                }

                function T() {
                    const t = e.params.scrollbar,
                        s = e.scrollbar.$el;
                    s && s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && E("off")
                }
                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), e.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, s("init", (() => {
                    !1 === e.params.scrollbar.enabled ? x() : (S(), h(), f())
                })), s("update resize observerUpdate lock unlock", (() => {
                    h()
                })), s("setTranslate", (() => {
                    f()
                })), s("setTransition", ((t, s) => {
                    ! function(t) {
                        e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
                    }(s)
                })), s("enable disable", (() => {
                    const {
                        $el: t
                    } = e.scrollbar;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                })), s("destroy", (() => {
                    T()
                }));
                const x = () => {
                    e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), T()
                };
                Object.assign(e.scrollbar, {
                    enable: () => {
                        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), S(), h(), f()
                    },
                    disable: x,
                    updateSize: h,
                    setTranslate: f,
                    init: S,
                    destroy: T
                })
            }

            function re({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                function n(e, t) {
                    const s = function() {
                        let e, t, s;
                        return (n, i) => {
                            for (t = -1, e = n.length; e - t > 1;) s = e + t >> 1, n[s] <= i ? t = s : e = s;
                            return e
                        }
                    }();
                    let n, i;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (i = s(this.x, e), n = i - 1, (e - this.x[n]) * (this.y[i] - this.y[n]) / (this.x[i] - this.x[n]) + this.y[n]) : 0
                    }, this
                }

                function i() {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                }
                t({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }), e.controller = {
                    control: void 0
                }, s("beforeInit", (() => {
                    e.controller.control = e.params.controller.control
                })), s("update", (() => {
                    i()
                })), s("resize", (() => {
                    i()
                })), s("observerUpdate", (() => {
                    i()
                })), s("setTranslate", ((t, s, n) => {
                    e.controller.control && e.controller.setTranslate(s, n)
                })), s("setTransition", ((t, s, n) => {
                    e.controller.control && e.controller.setTransition(s, n)
                })), Object.assign(e.controller, {
                    setTranslate: function(t, s) {
                        const i = e.controller.control;
                        let a, r;
                        const l = e.constructor;

                        function o(t) {
                            const s = e.rtlTranslate ? -e.translate : e.translate;
                            "slide" === e.params.controller.by && (! function(t) {
                                e.controller.spline || (e.controller.spline = e.params.loop ? new n(e.slidesGrid, t.slidesGrid) : new n(e.snapGrid, t.snapGrid))
                            }(t), r = -e.controller.spline.interpolate(-s)), r && "container" !== e.params.controller.by || (a = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), r = (s - e.minTranslate()) * a + t.minTranslate()), e.params.controller.inverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setTranslate(r, e), t.updateActiveIndex(), t.updateSlidesClasses()
                        }
                        if (Array.isArray(i))
                            for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof l && o(i[e]);
                        else i instanceof l && s !== i && o(i)
                    },
                    setTransition: function(t, s) {
                        const n = e.constructor,
                            i = e.controller.control;
                        let a;

                        function r(s) {
                            s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && v((() => {
                                s.updateAutoHeight()
                            })), s.$wrapperEl.transitionEnd((() => {
                                i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd())
                            })))
                        }
                        if (Array.isArray(i))
                            for (a = 0; a < i.length; a += 1) i[a] !== s && i[a] instanceof n && r(i[a]);
                        else i instanceof n && s !== i && r(i)
                    }
                })
            }

            function le({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }), e.a11y = {
                    clicked: !1
                };
                let n = null;

                function i(e) {
                    const t = n;
                    0 !== t.length && (t.html(""), t.html(e))
                }

                function a(e) {
                    e.attr("tabIndex", "0")
                }

                function r(e) {
                    e.attr("tabIndex", "-1")
                }

                function l(e, t) {
                    e.attr("role", t)
                }

                function o(e, t) {
                    e.attr("aria-roledescription", t)
                }

                function d(e, t) {
                    e.attr("aria-label", t)
                }

                function c(e) {
                    e.attr("aria-disabled", !0)
                }

                function p(e) {
                    e.attr("aria-disabled", !1)
                }

                function u(t) {
                    if (13 !== t.keyCode && 32 !== t.keyCode) return;
                    const s = e.params.a11y,
                        n = g(t.target);
                    e.navigation && e.navigation.$nextEl && n.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)), e.navigation && e.navigation.$prevEl && n.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)), e.pagination && n.is(ne(e.params.pagination.bulletClass)) && n[0].click()
                }

                function f() {
                    return e.pagination && e.pagination.bullets && e.pagination.bullets.length
                }

                function h() {
                    return f() && e.params.pagination.clickable
                }
                const m = (e, t, s) => {
                        a(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", u)), d(e, s),
                            function(e, t) {
                                e.attr("aria-controls", t)
                            }(e, t)
                    },
                    v = () => {
                        e.a11y.clicked = !0
                    },
                    b = () => {
                        requestAnimationFrame((() => {
                            requestAnimationFrame((() => {
                                e.destroyed || (e.a11y.clicked = !1)
                            }))
                        }))
                    },
                    w = t => {
                        if (e.a11y.clicked) return;
                        const s = t.target.closest(`.${e.params.slideClass}`);
                        if (!s || !e.slides.includes(s)) return;
                        const n = e.slides.indexOf(s) === e.activeIndex,
                            i = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(s);
                        n || i || t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(s), 0))
                    },
                    y = () => {
                        const t = e.params.a11y;
                        t.itemRoleDescriptionMessage && o(g(e.slides), t.itemRoleDescriptionMessage), t.slideRole && l(g(e.slides), t.slideRole);
                        const s = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
                        t.slideLabelMessage && e.slides.each(((n, i) => {
                            const a = g(n),
                                r = e.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : i;
                            d(a, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                        }))
                    },
                    C = () => {
                        const t = e.params.a11y;
                        e.$el.append(n);
                        const s = e.$el;
                        t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && d(s, t.containerMessage);
                        const i = e.$wrapperEl,
                            a = t.id || i.attr("id") || `swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,
                            r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                        var l;
                        let c, p;
                        l = a, i.attr("id", l),
                            function(e, t) {
                                e.attr("aria-live", t)
                            }(i, r), y(), e.navigation && e.navigation.$nextEl && (c = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (p = e.navigation.$prevEl), c && c.length && m(c, a, t.nextSlideMessage), p && p.length && m(p, a, t.prevSlideMessage), h() && e.pagination.$el.on("keydown", ne(e.params.pagination.bulletClass), u), e.$el.on("focus", w, !0), e.$el.on("pointerdown", v, !0), e.$el.on("pointerup", b, !0)
                    };
                s("beforeInit", (() => {
                    n = g(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                })), s("afterInit", (() => {
                    e.params.a11y.enabled && C()
                })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                    e.params.a11y.enabled && y()
                })), s("fromEdge toEdge afterInit lock unlock", (() => {
                    e.params.a11y.enabled && function() {
                        if (e.params.loop || e.params.rewind || !e.navigation) return;
                        const {
                            $nextEl: t,
                            $prevEl: s
                        } = e.navigation;
                        s && s.length > 0 && (e.isBeginning ? (c(s), r(s)) : (p(s), a(s))), t && t.length > 0 && (e.isEnd ? (c(t), r(t)) : (p(t), a(t)))
                    }()
                })), s("paginationUpdate", (() => {
                    e.params.a11y.enabled && function() {
                        const t = e.params.a11y;
                        f() && e.pagination.bullets.each((s => {
                            const n = g(s);
                            e.params.pagination.clickable && (a(n), e.params.pagination.renderBullet || (l(n, "button"), d(n, t.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))), n.is(`.${e.params.pagination.bulletActiveClass}`) ? n.attr("aria-current", "true") : n.removeAttr("aria-current")
                        }))
                    }()
                })), s("destroy", (() => {
                    e.params.a11y.enabled && function() {
                        let t, s;
                        n && n.length > 0 && n.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", u), s && s.off("keydown", u), h() && e.pagination.$el.off("keydown", ne(e.params.pagination.bulletClass), u), e.$el.off("focus", w, !0), e.$el.off("pointerdown", v, !0), e.$el.off("pointerup", b, !0)
                    }()
                }))
            }

            function oe({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                let i;

                function a() {
                    if (!e.size) return e.autoplay.running = !1, void(e.autoplay.paused = !1);
                    const t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(i), i = v((() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), n("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), n("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), n("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), n("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && a()
                    }), s)
                }

                function l() {
                    return "undefined" === typeof i && (!e.autoplay.running && (e.autoplay.running = !0, n("autoplayStart"), a(), !0))
                }

                function o() {
                    return !!e.autoplay.running && ("undefined" !== typeof i && (i && (clearTimeout(i), i = void 0), e.autoplay.running = !1, n("autoplayStop"), !0))
                }

                function d(t) {
                    e.autoplay.running && (e.autoplay.paused || (i && clearTimeout(i), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].addEventListener(t, p)
                    })) : (e.autoplay.paused = !1, a())))
                }

                function c() {
                    const t = r();
                    "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (a(), e.autoplay.paused = !1)
                }

                function p(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, p)
                    })), e.autoplay.paused = !1, e.autoplay.running ? a() : o())
                }

                function u() {
                    e.params.autoplay.disableOnInteraction ? o() : (n("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, p)
                    }))
                }

                function f() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n("autoplayResume"), a())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), s("init", (() => {
                    if (e.params.autoplay.enabled) {
                        l();
                        r().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", u), e.$el.on("mouseleave", f))
                    }
                })), s("beforeTransitionStart", ((t, s, n) => {
                    e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
                })), s("sliderFirstMove", (() => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
                })), s("touchEnd", (() => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
                })), s("destroy", (() => {
                    e.$el.off("mouseenter", u), e.$el.off("mouseleave", f), e.autoplay.running && o();
                    r().removeEventListener("visibilitychange", c)
                })), Object.assign(e.autoplay, {
                    pause: d,
                    run: a,
                    start: l,
                    stop: o
                })
            }
        }
    }
]);