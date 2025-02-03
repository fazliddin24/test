(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function yh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var vh = {
        exports: {}
    },
    $l = {},
    gh = {
        exports: {}
    },
    ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro = Symbol.for("react.element"),
    Wy = Symbol.for("react.portal"),
    Vy = Symbol.for("react.fragment"),
    qy = Symbol.for("react.strict_mode"),
    Ky = Symbol.for("react.profiler"),
    Gy = Symbol.for("react.provider"),
    Yy = Symbol.for("react.context"),
    Xy = Symbol.for("react.forward_ref"),
    Jy = Symbol.for("react.suspense"),
    Zy = Symbol.for("react.memo"),
    ev = Symbol.for("react.lazy"),
    cf = Symbol.iterator;

function tv(e) {
    return e === null || typeof e != "object" ? null : (e = cf && e[cf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var wh = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Sh = Object.assign,
    Eh = {};

function Jr(e, t, n) {
    this.props = e, this.context = t, this.refs = Eh, this.updater = n || wh
}
Jr.prototype.isReactComponent = {};
Jr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Jr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ch() {}
Ch.prototype = Jr.prototype;

function Uu(e, t, n) {
    this.props = e, this.context = t, this.refs = Eh, this.updater = n || wh
}
var ju = Uu.prototype = new Ch;
ju.constructor = Uu;
Sh(ju, Jr.prototype);
ju.isPureReactComponent = !0;
var ff = Array.isArray,
    kh = Object.prototype.hasOwnProperty,
    Bu = {
        current: null
    },
    xh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Rh(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) kh.call(t, r) && !xh.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: ro,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Bu.current
    }
}

function nv(e, t) {
    return {
        $$typeof: ro,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Qu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ro
}

function rv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var df = /\/+/g;

function Us(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? rv("" + e.key) : t.toString(36)
}

function bo(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ro:
                case Wy:
                    l = !0
            }
    }
    if (l) return l = e, i = i(l), e = r === "" ? "." + Us(l, 0) : r, ff(i) ? (n = "", e != null && (n = e.replace(df, "$&/") + "/"), bo(i, t, n, "", function(u) {
        return u
    })) : i != null && (Qu(i) && (i = nv(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(df, "$&/") + "/") + e)), t.push(i)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", ff(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var a = r + Us(o, s);
            l += bo(o, t, n, a, i)
        } else if (a = tv(e), typeof a == "function")
            for (e = a.call(e), s = 0; !(o = e.next()).done;) o = o.value, a = r + Us(o, s++), l += bo(o, t, n, a, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function go(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return bo(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function iv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ct = {
        current: null
    },
    Uo = {
        transition: null
    },
    ov = {
        ReactCurrentDispatcher: ct,
        ReactCurrentBatchConfig: Uo,
        ReactCurrentOwner: Bu
    };
ie.Children = {
    map: go,
    forEach: function(e, t, n) {
        go(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return go(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return go(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ie.Component = Jr;
ie.Fragment = Vy;
ie.Profiler = Ky;
ie.PureComponent = Uu;
ie.StrictMode = qy;
ie.Suspense = Jy;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
ie.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sh({}, e.props),
        i = e.key,
        o = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, l = Bu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (a in t) kh.call(t, a) && !xh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: ro,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
};
ie.createContext = function(e) {
    return e = {
        $$typeof: Yy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Gy,
        _context: e
    }, e.Consumer = e
};
ie.createElement = Rh;
ie.createFactory = function(e) {
    var t = Rh.bind(null, e);
    return t.type = e, t
};
ie.createRef = function() {
    return {
        current: null
    }
};
ie.forwardRef = function(e) {
    return {
        $$typeof: Xy,
        render: e
    }
};
ie.isValidElement = Qu;
ie.lazy = function(e) {
    return {
        $$typeof: ev,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: iv
    }
};
ie.memo = function(e, t) {
    return {
        $$typeof: Zy,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ie.startTransition = function(e) {
    var t = Uo.transition;
    Uo.transition = {};
    try {
        e()
    } finally {
        Uo.transition = t
    }
};
ie.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
ie.useCallback = function(e, t) {
    return ct.current.useCallback(e, t)
};
ie.useContext = function(e) {
    return ct.current.useContext(e)
};
ie.useDebugValue = function() {};
ie.useDeferredValue = function(e) {
    return ct.current.useDeferredValue(e)
};
ie.useEffect = function(e, t) {
    return ct.current.useEffect(e, t)
};
ie.useId = function() {
    return ct.current.useId()
};
ie.useImperativeHandle = function(e, t, n) {
    return ct.current.useImperativeHandle(e, t, n)
};
ie.useInsertionEffect = function(e, t) {
    return ct.current.useInsertionEffect(e, t)
};
ie.useLayoutEffect = function(e, t) {
    return ct.current.useLayoutEffect(e, t)
};
ie.useMemo = function(e, t) {
    return ct.current.useMemo(e, t)
};
ie.useReducer = function(e, t, n) {
    return ct.current.useReducer(e, t, n)
};
ie.useRef = function(e) {
    return ct.current.useRef(e)
};
ie.useState = function(e) {
    return ct.current.useState(e)
};
ie.useSyncExternalStore = function(e, t, n) {
    return ct.current.useSyncExternalStore(e, t, n)
};
ie.useTransition = function() {
    return ct.current.useTransition()
};
ie.version = "18.2.0";
gh.exports = ie;
var k = gh.exports;
const ye = yh(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv = k,
    sv = Symbol.for("react.element"),
    av = Symbol.for("react.fragment"),
    uv = Object.prototype.hasOwnProperty,
    cv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    fv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Ph(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) uv.call(t, r) && !fv.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: sv,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: cv.current
    }
}
$l.Fragment = av;
$l.jsx = Ph;
$l.jsxs = Ph;
vh.exports = $l;
var Hu = vh.exports;
const Oh = Hu.Fragment,
    b = Hu.jsx,
    Ce = Hu.jsxs;
var Oa = {},
    Th = {
        exports: {}
    },
    kt = {},
    Nh = {
        exports: {}
    },
    _h = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(L, H) {
        var q = L.length;
        L.push(H);
        e: for (; 0 < q;) {
            var X = q - 1 >>> 1,
                D = L[X];
            if (0 < i(D, H)) L[X] = H, L[q] = D, q = X;
            else break e
        }
    }

    function n(L) {
        return L.length === 0 ? null : L[0]
    }

    function r(L) {
        if (L.length === 0) return null;
        var H = L[0],
            q = L.pop();
        if (q !== H) {
            L[0] = q;
            e: for (var X = 0, D = L.length, I = D >>> 1; X < I;) {
                var $ = 2 * (X + 1) - 1,
                    W = L[$],
                    C = $ + 1,
                    te = L[C];
                if (0 > i(W, q)) C < D && 0 > i(te, W) ? (L[X] = te, L[C] = q, X = C) : (L[X] = W, L[$] = q, X = $);
                else if (C < D && 0 > i(te, q)) L[X] = te, L[C] = q, X = C;
                else break e
            }
        }
        return H
    }

    function i(L, H) {
        var q = L.sortIndex - H.sortIndex;
        return q !== 0 ? q : L.id - H.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date,
            s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var a = [],
        u = [],
        f = 1,
        d = null,
        y = 3,
        g = !1,
        m = !1,
        v = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        c = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(L) {
        for (var H = n(u); H !== null;) {
            if (H.callback === null) r(u);
            else if (H.startTime <= L) r(u), H.sortIndex = H.expirationTime, t(a, H);
            else break;
            H = n(u)
        }
    }

    function S(L) {
        if (v = !1, p(L), !m)
            if (n(a) !== null) m = !0, fe(E);
            else {
                var H = n(u);
                H !== null && ve(S, H.startTime - L)
            }
    }

    function E(L, H) {
        m = !1, v && (v = !1, c(R), R = -1), g = !0;
        var q = y;
        try {
            for (p(H), d = n(a); d !== null && (!(d.expirationTime > H) || L && !le());) {
                var X = d.callback;
                if (typeof X == "function") {
                    d.callback = null, y = d.priorityLevel;
                    var D = X(d.expirationTime <= H);
                    H = e.unstable_now(), typeof D == "function" ? d.callback = D : d === n(a) && r(a), p(H)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var I = !0;
            else {
                var $ = n(u);
                $ !== null && ve(S, $.startTime - H), I = !1
            }
            return I
        } finally {
            d = null, y = q, g = !1
        }
    }
    var P = !1,
        T = null,
        R = -1,
        M = 5,
        j = -1;

    function le() {
        return !(e.unstable_now() - j < M)
    }

    function ee() {
        if (T !== null) {
            var L = e.unstable_now();
            j = L;
            var H = !0;
            try {
                H = T(!0, L)
            } finally {
                H ? oe() : (P = !1, T = null)
            }
        } else P = !1
    }
    var oe;
    if (typeof h == "function") oe = function() {
        h(ee)
    };
    else if (typeof MessageChannel < "u") {
        var se = new MessageChannel,
            ce = se.port2;
        se.port1.onmessage = ee, oe = function() {
            ce.postMessage(null)
        }
    } else oe = function() {
        w(ee, 0)
    };

    function fe(L) {
        T = L, P || (P = !0, oe())
    }

    function ve(L, H) {
        R = w(function() {
            L(e.unstable_now())
        }, H)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
        L.callback = null
    }, e.unstable_continueExecution = function() {
        m || g || (m = !0, fe(E))
    }, e.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < L ? Math.floor(1e3 / L) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return y
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(L) {
        switch (y) {
            case 1:
            case 2:
            case 3:
                var H = 3;
                break;
            default:
                H = y
        }
        var q = y;
        y = H;
        try {
            return L()
        } finally {
            y = q
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(L, H) {
        switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
        }
        var q = y;
        y = L;
        try {
            return H()
        } finally {
            y = q
        }
    }, e.unstable_scheduleCallback = function(L, H, q) {
        var X = e.unstable_now();
        switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? X + q : X) : q = X, L) {
            case 1:
                var D = -1;
                break;
            case 2:
                D = 250;
                break;
            case 5:
                D = 1073741823;
                break;
            case 4:
                D = 1e4;
                break;
            default:
                D = 5e3
        }
        return D = q + D, L = {
            id: f++,
            callback: H,
            priorityLevel: L,
            startTime: q,
            expirationTime: D,
            sortIndex: -1
        }, q > X ? (L.sortIndex = q, t(u, L), n(a) === null && L === n(u) && (v ? (c(R), R = -1) : v = !0, ve(S, q - X))) : (L.sortIndex = D, t(a, L), m || g || (m = !0, fe(E))), L
    }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(L) {
        var H = y;
        return function() {
            var q = y;
            y = H;
            try {
                return L.apply(this, arguments)
            } finally {
                y = q
            }
        }
    }
})(_h);
Nh.exports = _h;
var dv = Nh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah = k,
    Ct = dv;

function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lh = new Set,
    Ii = {};

function fr(e, t) {
    Ur(e, t), Ur(e + "Capture", t)
}

function Ur(e, t) {
    for (Ii[e] = t, e = 0; e < t.length; e++) Lh.add(t[e])
}
var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ta = Object.prototype.hasOwnProperty,
    hv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    hf = {},
    pf = {};

function pv(e) {
    return Ta.call(pf, e) ? !0 : Ta.call(hf, e) ? !1 : hv.test(e) ? pf[e] = !0 : (hf[e] = !0, !1)
}

function mv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function yv(e, t, n, r) {
    if (t === null || typeof t > "u" || mv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ft(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l
}
var tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    tt[e] = new ft(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    tt[t] = new ft(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    tt[e] = new ft(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    tt[e] = new ft(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    tt[e] = new ft(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    tt[e] = new ft(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    tt[e] = new ft(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    tt[e] = new ft(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    tt[e] = new ft(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wu = /[\-:]([a-z])/g;

function Vu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wu, Vu);
    tt[t] = new ft(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wu, Vu);
    tt[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wu, Vu);
    tt[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    tt[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
tt.xlinkHref = new ft("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    tt[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function qu(e, t, n, r) {
    var i = tt.hasOwnProperty(t) ? tt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yv(t, n, i, r) && (n = null), r || i === null ? pv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var gn = Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wo = Symbol.for("react.element"),
    gr = Symbol.for("react.portal"),
    wr = Symbol.for("react.fragment"),
    Ku = Symbol.for("react.strict_mode"),
    Na = Symbol.for("react.profiler"),
    Dh = Symbol.for("react.provider"),
    Fh = Symbol.for("react.context"),
    Gu = Symbol.for("react.forward_ref"),
    _a = Symbol.for("react.suspense"),
    Aa = Symbol.for("react.suspense_list"),
    Yu = Symbol.for("react.memo"),
    Rn = Symbol.for("react.lazy"),
    Mh = Symbol.for("react.offscreen"),
    mf = Symbol.iterator;

function li(e) {
    return e === null || typeof e != "object" ? null : (e = mf && e[mf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var De = Object.assign,
    js;

function vi(e) {
    if (js === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        js = t && t[1] || ""
    }
    return `
` + js + e
}
var Bs = !1;

function Qs(e, t) {
    if (!e || Bs) return "";
    Bs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s];) s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (i[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--, s--, 0 > s || i[l] !== o[s]) {
                                var a = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        Bs = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? vi(e) : ""
}

function vv(e) {
    switch (e.tag) {
        case 5:
            return vi(e.type);
        case 16:
            return vi("Lazy");
        case 13:
            return vi("Suspense");
        case 19:
            return vi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Qs(e.type, !1), e;
        case 11:
            return e = Qs(e.type.render, !1), e;
        case 1:
            return e = Qs(e.type, !0), e;
        default:
            return ""
    }
}

function La(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case wr:
            return "Fragment";
        case gr:
            return "Portal";
        case Na:
            return "Profiler";
        case Ku:
            return "StrictMode";
        case _a:
            return "Suspense";
        case Aa:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Fh:
            return (e.displayName || "Context") + ".Consumer";
        case Dh:
            return (e._context.displayName || "Context") + ".Provider";
        case Gu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Yu:
            return t = e.displayName || null, t !== null ? t : La(e.type) || "Memo";
        case Rn:
            t = e._payload, e = e._init;
            try {
                return La(e(t))
            } catch {}
    }
    return null
}

function gv(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return La(t);
        case 8:
            return t === Ku ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Bn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Ih(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function wv(e) {
    var t = Ih(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l, o.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function So(e) {
    e._valueTracker || (e._valueTracker = wv(e))
}

function $h(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ih(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Da(e, t) {
    var n = t.checked;
    return De({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function yf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Bn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function zh(e, t) {
    t = t.checked, t != null && qu(e, "checked", t, !1)
}

function Fa(e, t) {
    zh(e, t);
    var n = Bn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ma(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ma(e, t.type, Bn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function vf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ma(e, t, n) {
    (t !== "number" || ol(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var gi = Array.isArray;

function Dr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Bn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Ia(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
    return De({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function gf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(A(92));
            if (gi(n)) {
                if (1 < n.length) throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Bn(n)
    }
}

function bh(e, t) {
    var n = Bn(t.value),
        r = Bn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function wf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Uh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function $a(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Eo, jh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Eo = Eo || document.createElement("div"), Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Eo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function $i(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ki = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ki).forEach(function(e) {
    Sv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ki[t] = ki[e]
    })
});

function Bh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ki.hasOwnProperty(e) && ki[e] ? ("" + t).trim() : t + "px"
}

function Qh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Bh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Ev = De({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function za(e, t) {
    if (t) {
        if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(A(62))
    }
}

function ba(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Ua = null;

function Xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ja = null,
    Fr = null,
    Mr = null;

function Sf(e) {
    if (e = lo(e)) {
        if (typeof ja != "function") throw Error(A(280));
        var t = e.stateNode;
        t && (t = Bl(t), ja(e.stateNode, e.type, t))
    }
}

function Hh(e) {
    Fr ? Mr ? Mr.push(e) : Mr = [e] : Fr = e
}

function Wh() {
    if (Fr) {
        var e = Fr,
            t = Mr;
        if (Mr = Fr = null, Sf(e), t)
            for (e = 0; e < t.length; e++) Sf(t[e])
    }
}

function Vh(e, t) {
    return e(t)
}

function qh() {}
var Hs = !1;

function Kh(e, t, n) {
    if (Hs) return e(t, n);
    Hs = !0;
    try {
        return Vh(e, t, n)
    } finally {
        Hs = !1, (Fr !== null || Mr !== null) && (qh(), Wh())
    }
}

function zi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Bl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(A(231, t, typeof n));
    return n
}
var Ba = !1;
if (hn) try {
    var si = {};
    Object.defineProperty(si, "passive", {
        get: function() {
            Ba = !0
        }
    }), window.addEventListener("test", si, si), window.removeEventListener("test", si, si)
} catch {
    Ba = !1
}

function Cv(e, t, n, r, i, o, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var xi = !1,
    ll = null,
    sl = !1,
    Qa = null,
    kv = {
        onError: function(e) {
            xi = !0, ll = e
        }
    };

function xv(e, t, n, r, i, o, l, s, a) {
    xi = !1, ll = null, Cv.apply(kv, arguments)
}

function Rv(e, t, n, r, i, o, l, s, a) {
    if (xv.apply(this, arguments), xi) {
        if (xi) {
            var u = ll;
            xi = !1, ll = null
        } else throw Error(A(198));
        sl || (sl = !0, Qa = u)
    }
}

function dr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Gh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ef(e) {
    if (dr(e) !== e) throw Error(A(188))
}

function Pv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dr(e), t === null) throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Ef(i), e;
                if (o === r) return Ef(i), t;
                o = o.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var l = !1, s = i.child; s;) {
                if (s === n) {
                    l = !0, n = i, r = o;
                    break
                }
                if (s === r) {
                    l = !0, r = i, n = o;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = o.child; s;) {
                    if (s === n) {
                        l = !0, n = o, r = i;
                        break
                    }
                    if (s === r) {
                        l = !0, r = o, n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!l) throw Error(A(189))
            }
        }
        if (n.alternate !== r) throw Error(A(190))
    }
    if (n.tag !== 3) throw Error(A(188));
    return n.stateNode.current === n ? e : t
}

function Yh(e) {
    return e = Pv(e), e !== null ? Xh(e) : null
}

function Xh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Xh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Jh = Ct.unstable_scheduleCallback,
    Cf = Ct.unstable_cancelCallback,
    Ov = Ct.unstable_shouldYield,
    Tv = Ct.unstable_requestPaint,
    Me = Ct.unstable_now,
    Nv = Ct.unstable_getCurrentPriorityLevel,
    Ju = Ct.unstable_ImmediatePriority,
    Zh = Ct.unstable_UserBlockingPriority,
    al = Ct.unstable_NormalPriority,
    _v = Ct.unstable_LowPriority,
    ep = Ct.unstable_IdlePriority,
    zl = null,
    Jt = null;

function Av(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function") try {
        Jt.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : Fv,
    Lv = Math.log,
    Dv = Math.LN2;

function Fv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Lv(e) / Dv | 0) | 0
}
var Co = 64,
    ko = 4194304;

function wi(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ul(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~i;
        s !== 0 ? r = wi(s) : (o &= l, o !== 0 && (r = wi(o)))
    } else l = n & ~i, l !== 0 ? r = wi(l) : o !== 0 && (r = wi(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Mv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Iv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var l = 31 - Wt(o),
            s = 1 << l,
            a = i[l];
        a === -1 ? (!(s & n) || s & r) && (i[l] = Mv(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s
    }
}

function Ha(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function tp() {
    var e = Co;
    return Co <<= 1, !(Co & 4194240) && (Co = 64), e
}

function Ws(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function io(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n
}

function $v(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Wt(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Zu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Wt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var ge = 0;

function np(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var rp, ec, ip, op, lp, Wa = !1,
    xo = [],
    Dn = null,
    Fn = null,
    Mn = null,
    bi = new Map,
    Ui = new Map,
    Tn = [],
    zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function kf(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Dn = null;
            break;
        case "dragenter":
        case "dragleave":
            Fn = null;
            break;
        case "mouseover":
        case "mouseout":
            Mn = null;
            break;
        case "pointerover":
        case "pointerout":
            bi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ui.delete(t.pointerId)
    }
}

function ai(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = lo(t), t !== null && ec(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function bv(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Dn = ai(Dn, e, t, n, r, i), !0;
        case "dragenter":
            return Fn = ai(Fn, e, t, n, r, i), !0;
        case "mouseover":
            return Mn = ai(Mn, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return bi.set(o, ai(bi.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Ui.set(o, ai(Ui.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function sp(e) {
    var t = Jn(e.target);
    if (t !== null) {
        var n = dr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Gh(n), t !== null) {
                    e.blockedOn = t, lp(e.priority, function() {
                        ip(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function jo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ua = r, n.target.dispatchEvent(r), Ua = null
        } else return t = lo(n), t !== null && ec(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function xf(e, t, n) {
    jo(e) && n.delete(t)
}

function Uv() {
    Wa = !1, Dn !== null && jo(Dn) && (Dn = null), Fn !== null && jo(Fn) && (Fn = null), Mn !== null && jo(Mn) && (Mn = null), bi.forEach(xf), Ui.forEach(xf)
}

function ui(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wa || (Wa = !0, Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority, Uv)))
}

function ji(e) {
    function t(i) {
        return ui(i, e)
    }
    if (0 < xo.length) {
        ui(xo[0], e);
        for (var n = 1; n < xo.length; n++) {
            var r = xo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Dn !== null && ui(Dn, e), Fn !== null && ui(Fn, e), Mn !== null && ui(Mn, e), bi.forEach(t), Ui.forEach(t), n = 0; n < Tn.length; n++) r = Tn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tn.length && (n = Tn[0], n.blockedOn === null);) sp(n), n.blockedOn === null && Tn.shift()
}
var Ir = gn.ReactCurrentBatchConfig,
    cl = !0;

function jv(e, t, n, r) {
    var i = ge,
        o = Ir.transition;
    Ir.transition = null;
    try {
        ge = 1, tc(e, t, n, r)
    } finally {
        ge = i, Ir.transition = o
    }
}

function Bv(e, t, n, r) {
    var i = ge,
        o = Ir.transition;
    Ir.transition = null;
    try {
        ge = 4, tc(e, t, n, r)
    } finally {
        ge = i, Ir.transition = o
    }
}

function tc(e, t, n, r) {
    if (cl) {
        var i = Va(e, t, n, r);
        if (i === null) ta(e, t, r, fl, n), kf(e, r);
        else if (bv(i, e, t, n, r)) r.stopPropagation();
        else if (kf(e, r), t & 4 && -1 < zv.indexOf(e)) {
            for (; i !== null;) {
                var o = lo(i);
                if (o !== null && rp(o), o = Va(e, t, n, r), o === null && ta(e, t, r, fl, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else ta(e, t, r, null, n)
    }
}
var fl = null;

function Va(e, t, n, r) {
    if (fl = null, e = Xu(r), e = Jn(e), e !== null)
        if (t = dr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Gh(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return fl = e, null
}

function ap(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Nv()) {
                case Ju:
                    return 1;
                case Zh:
                    return 4;
                case al:
                case _v:
                    return 16;
                case ep:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var _n = null,
    nc = null,
    Bo = null;

function up() {
    if (Bo) return Bo;
    var e, t = nc,
        n = t.length,
        r, i = "value" in _n ? _n.value : _n.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
    return Bo = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Qo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ro() {
    return !0
}

function Rf() {
    return !1
}

function xt(e) {
    function t(n, r, i, o, l) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ro : Rf, this.isPropagationStopped = Rf, this
    }
    return De(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ro)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ro)
        },
        persist: function() {},
        isPersistent: Ro
    }), t
}
var Zr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    rc = xt(Zr),
    oo = De({}, Zr, {
        view: 0,
        detail: 0
    }),
    Qv = xt(oo),
    Vs, qs, ci, bl = De({}, oo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ic,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ci && (ci && e.type === "mousemove" ? (Vs = e.screenX - ci.screenX, qs = e.screenY - ci.screenY) : qs = Vs = 0, ci = e), Vs)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : qs
        }
    }),
    Pf = xt(bl),
    Hv = De({}, bl, {
        dataTransfer: 0
    }),
    Wv = xt(Hv),
    Vv = De({}, oo, {
        relatedTarget: 0
    }),
    Ks = xt(Vv),
    qv = De({}, Zr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Kv = xt(qv),
    Gv = De({}, Zr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Yv = xt(Gv),
    Xv = De({}, Zr, {
        data: 0
    }),
    Of = xt(Xv),
    Jv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Zv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    eg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function tg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = eg[e]) ? !!t[e] : !1
}

function ic() {
    return tg
}
var ng = De({}, oo, {
        key: function(e) {
            if (e.key) {
                var t = Jv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Qo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ic,
        charCode: function(e) {
            return e.type === "keypress" ? Qo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    rg = xt(ng),
    ig = De({}, bl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Tf = xt(ig),
    og = De({}, oo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ic
    }),
    lg = xt(og),
    sg = De({}, Zr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ag = xt(sg),
    ug = De({}, bl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    cg = xt(ug),
    fg = [9, 13, 27, 32],
    oc = hn && "CompositionEvent" in window,
    Ri = null;
hn && "documentMode" in document && (Ri = document.documentMode);
var dg = hn && "TextEvent" in window && !Ri,
    cp = hn && (!oc || Ri && 8 < Ri && 11 >= Ri),
    Nf = String.fromCharCode(32),
    _f = !1;

function fp(e, t) {
    switch (e) {
        case "keyup":
            return fg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function dp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Sr = !1;

function hg(e, t) {
    switch (e) {
        case "compositionend":
            return dp(t);
        case "keypress":
            return t.which !== 32 ? null : (_f = !0, Nf);
        case "textInput":
            return e = t.data, e === Nf && _f ? null : e;
        default:
            return null
    }
}

function pg(e, t) {
    if (Sr) return e === "compositionend" || !oc && fp(e, t) ? (e = up(), Bo = nc = _n = null, Sr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return cp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var mg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mg[e.type] : t === "textarea"
}

function hp(e, t, n, r) {
    Hh(r), t = dl(t, "onChange"), 0 < t.length && (n = new rc("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Pi = null,
    Bi = null;

function yg(e) {
    xp(e, 0)
}

function Ul(e) {
    var t = kr(e);
    if ($h(t)) return e
}

function vg(e, t) {
    if (e === "change") return t
}
var pp = !1;
if (hn) {
    var Gs;
    if (hn) {
        var Ys = "oninput" in document;
        if (!Ys) {
            var Lf = document.createElement("div");
            Lf.setAttribute("oninput", "return;"), Ys = typeof Lf.oninput == "function"
        }
        Gs = Ys
    } else Gs = !1;
    pp = Gs && (!document.documentMode || 9 < document.documentMode)
}

function Df() {
    Pi && (Pi.detachEvent("onpropertychange", mp), Bi = Pi = null)
}

function mp(e) {
    if (e.propertyName === "value" && Ul(Bi)) {
        var t = [];
        hp(t, Bi, e, Xu(e)), Kh(yg, t)
    }
}

function gg(e, t, n) {
    e === "focusin" ? (Df(), Pi = t, Bi = n, Pi.attachEvent("onpropertychange", mp)) : e === "focusout" && Df()
}

function wg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(Bi)
}

function Sg(e, t) {
    if (e === "click") return Ul(t)
}

function Eg(e, t) {
    if (e === "input" || e === "change") return Ul(t)
}

function Cg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qt = typeof Object.is == "function" ? Object.is : Cg;

function Qi(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ta.call(t, i) || !qt(e[i], t[i])) return !1
    }
    return !0
}

function Ff(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Mf(e, t) {
    var n = Ff(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ff(n)
    }
}

function yp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function vp() {
    for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ol(e.document)
    }
    return t
}

function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function kg(e) {
    var t = vp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yp(n.ownerDocument.documentElement, n)) {
        if (r !== null && lc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Mf(n, o);
                var l = Mf(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var xg = hn && "documentMode" in document && 11 >= document.documentMode,
    Er = null,
    qa = null,
    Oi = null,
    Ka = !1;

function If(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ka || Er == null || Er !== ol(r) || (r = Er, "selectionStart" in r && lc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Oi && Qi(Oi, r) || (Oi = r, r = dl(qa, "onSelect"), 0 < r.length && (t = new rc("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Er)))
}

function Po(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Cr = {
        animationend: Po("Animation", "AnimationEnd"),
        animationiteration: Po("Animation", "AnimationIteration"),
        animationstart: Po("Animation", "AnimationStart"),
        transitionend: Po("Transition", "TransitionEnd")
    },
    Xs = {},
    gp = {};
hn && (gp = document.createElement("div").style, "AnimationEvent" in window || (delete Cr.animationend.animation, delete Cr.animationiteration.animation, delete Cr.animationstart.animation), "TransitionEvent" in window || delete Cr.transitionend.transition);

function jl(e) {
    if (Xs[e]) return Xs[e];
    if (!Cr[e]) return e;
    var t = Cr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in gp) return Xs[e] = t[n];
    return e
}
var wp = jl("animationend"),
    Sp = jl("animationiteration"),
    Ep = jl("animationstart"),
    Cp = jl("transitionend"),
    kp = new Map,
    $f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Vn(e, t) {
    kp.set(e, t), fr(t, [e])
}
for (var Js = 0; Js < $f.length; Js++) {
    var Zs = $f[Js],
        Rg = Zs.toLowerCase(),
        Pg = Zs[0].toUpperCase() + Zs.slice(1);
    Vn(Rg, "on" + Pg)
}
Vn(wp, "onAnimationEnd");
Vn(Sp, "onAnimationIteration");
Vn(Ep, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(Cp, "onTransitionEnd");
Ur("onMouseEnter", ["mouseout", "mouseover"]);
Ur("onMouseLeave", ["mouseout", "mouseover"]);
Ur("onPointerEnter", ["pointerout", "pointerover"]);
Ur("onPointerLeave", ["pointerout", "pointerover"]);
fr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Og = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));

function zf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Rv(r, t, void 0, e), e.currentTarget = null
}

function xp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        a = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, a !== o && i.isPropagationStopped()) break e;
                    zf(i, s, u), o = a
                } else
                    for (l = 0; l < r.length; l++) {
                        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped()) break e;
                        zf(i, s, u), o = a
                    }
        }
    }
    if (sl) throw e = Qa, sl = !1, Qa = null, e
}

function Re(e, t) {
    var n = t[Za];
    n === void 0 && (n = t[Za] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rp(t, e, 2, !1), n.add(r))
}

function ea(e, t, n) {
    var r = 0;
    t && (r |= 4), Rp(n, e, r, t)
}
var Oo = "_reactListening" + Math.random().toString(36).slice(2);

function Hi(e) {
    if (!e[Oo]) {
        e[Oo] = !0, Lh.forEach(function(n) {
            n !== "selectionchange" && (Og.has(n) || ea(n, !1, e), ea(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Oo] || (t[Oo] = !0, ea("selectionchange", !1, t))
    }
}

function Rp(e, t, n, r) {
    switch (ap(t)) {
        case 1:
            var i = jv;
            break;
        case 4:
            i = Bv;
            break;
        default:
            i = tc
    }
    n = i.bind(null, t, n, e), i = void 0, !Ba || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function ta(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || s.nodeType === 8 && s.parentNode === i) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var a = l.tag;
                    if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    l = l.return
                }
            for (; s !== null;) {
                if (l = Jn(s), l === null) return;
                if (a = l.tag, a === 5 || a === 6) {
                    r = o = l;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Kh(function() {
        var u = o,
            f = Xu(n),
            d = [];
        e: {
            var y = kp.get(e);
            if (y !== void 0) {
                var g = rc,
                    m = e;
                switch (e) {
                    case "keypress":
                        if (Qo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = rg;
                        break;
                    case "focusin":
                        m = "focus", g = Ks;
                        break;
                    case "focusout":
                        m = "blur", g = Ks;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Ks;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Pf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Wv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = lg;
                        break;
                    case wp:
                    case Sp:
                    case Ep:
                        g = Kv;
                        break;
                    case Cp:
                        g = ag;
                        break;
                    case "scroll":
                        g = Qv;
                        break;
                    case "wheel":
                        g = cg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Yv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Tf
                }
                var v = (t & 4) !== 0,
                    w = !v && e === "scroll",
                    c = v ? y !== null ? y + "Capture" : null : y;
                v = [];
                for (var h = u, p; h !== null;) {
                    p = h;
                    var S = p.stateNode;
                    if (p.tag === 5 && S !== null && (p = S, c !== null && (S = zi(h, c), S != null && v.push(Wi(h, S, p)))), w) break;
                    h = h.return
                }
                0 < v.length && (y = new g(y, m, null, n, f), d.push({
                    event: y,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (y = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", y && n !== Ua && (m = n.relatedTarget || n.fromElement) && (Jn(m) || m[pn])) break e;
                if ((g || y) && (y = f.window === f ? f : (y = f.ownerDocument) ? y.defaultView || y.parentWindow : window, g ? (m = n.relatedTarget || n.toElement, g = u, m = m ? Jn(m) : null, m !== null && (w = dr(m), m !== w || m.tag !== 5 && m.tag !== 6) && (m = null)) : (g = null, m = u), g !== m)) {
                    if (v = Pf, S = "onMouseLeave", c = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Tf, S = "onPointerLeave", c = "onPointerEnter", h = "pointer"), w = g == null ? y : kr(g), p = m == null ? y : kr(m), y = new v(S, h + "leave", g, n, f), y.target = w, y.relatedTarget = p, S = null, Jn(f) === u && (v = new v(c, h + "enter", m, n, f), v.target = p, v.relatedTarget = w, S = v), w = S, g && m) t: {
                        for (v = g, c = m, h = 0, p = v; p; p = vr(p)) h++;
                        for (p = 0, S = c; S; S = vr(S)) p++;
                        for (; 0 < h - p;) v = vr(v),
                        h--;
                        for (; 0 < p - h;) c = vr(c),
                        p--;
                        for (; h--;) {
                            if (v === c || c !== null && v === c.alternate) break t;
                            v = vr(v), c = vr(c)
                        }
                        v = null
                    }
                    else v = null;
                    g !== null && bf(d, y, g, v, !1), m !== null && w !== null && bf(d, w, m, v, !0)
                }
            }
            e: {
                if (y = u ? kr(u) : window, g = y.nodeName && y.nodeName.toLowerCase(), g === "select" || g === "input" && y.type === "file") var E = vg;
                else if (Af(y))
                    if (pp) E = Eg;
                    else {
                        E = wg;
                        var P = gg
                    }
                else(g = y.nodeName) && g.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Sg);
                if (E && (E = E(e, u))) {
                    hp(d, E, n, f);
                    break e
                }
                P && P(e, y, u),
                e === "focusout" && (P = y._wrapperState) && P.controlled && y.type === "number" && Ma(y, "number", y.value)
            }
            switch (P = u ? kr(u) : window, e) {
                case "focusin":
                    (Af(P) || P.contentEditable === "true") && (Er = P, qa = u, Oi = null);
                    break;
                case "focusout":
                    Oi = qa = Er = null;
                    break;
                case "mousedown":
                    Ka = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ka = !1, If(d, n, f);
                    break;
                case "selectionchange":
                    if (xg) break;
                case "keydown":
                case "keyup":
                    If(d, n, f)
            }
            var T;
            if (oc) e: {
                switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            }
            else Sr ? fp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (cp && n.locale !== "ko" && (Sr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Sr && (T = up()) : (_n = f, nc = "value" in _n ? _n.value : _n.textContent, Sr = !0)), P = dl(u, R), 0 < P.length && (R = new Of(R, e, null, n, f), d.push({
                event: R,
                listeners: P
            }), T ? R.data = T : (T = dp(n), T !== null && (R.data = T)))),
            (T = dg ? hg(e, n) : pg(e, n)) && (u = dl(u, "onBeforeInput"), 0 < u.length && (f = new Of("onBeforeInput", "beforeinput", null, n, f), d.push({
                event: f,
                listeners: u
            }), f.data = T))
        }
        xp(d, t)
    })
}

function Wi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function dl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = zi(e, n), o != null && r.unshift(Wi(e, o, i)), o = zi(e, t), o != null && r.push(Wi(e, o, i))), e = e.return
    }
    return r
}

function vr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function bf(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r;) {
        var s = n,
            a = s.alternate,
            u = s.stateNode;
        if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, i ? (a = zi(n, o), a != null && l.unshift(Wi(n, a, s))) : i || (a = zi(n, o), a != null && l.push(Wi(n, a, s)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Tg = /\r\n?/g,
    Ng = /\u0000|\uFFFD/g;

function Uf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tg, `
`).replace(Ng, "")
}

function To(e, t, n) {
    if (t = Uf(t), Uf(e) !== t && n) throw Error(A(425))
}

function hl() {}
var Ga = null,
    Ya = null;

function Xa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ja = typeof setTimeout == "function" ? setTimeout : void 0,
    _g = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jf = typeof Promise == "function" ? Promise : void 0,
    Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof jf < "u" ? function(e) {
        return jf.resolve(null).then(e).catch(Lg)
    } : Ja;

function Lg(e) {
    setTimeout(function() {
        throw e
    })
}

function na(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), ji(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ji(t)
}

function In(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Bf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ei = Math.random().toString(36).slice(2),
    Yt = "__reactFiber$" + ei,
    Vi = "__reactProps$" + ei,
    pn = "__reactContainer$" + ei,
    Za = "__reactEvents$" + ei,
    Dg = "__reactListeners$" + ei,
    Fg = "__reactHandles$" + ei;

function Jn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[pn] || n[Yt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Bf(e); e !== null;) {
                    if (n = e[Yt]) return n;
                    e = Bf(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function lo(e) {
    return e = e[Yt] || e[pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(A(33))
}

function Bl(e) {
    return e[Vi] || null
}
var eu = [],
    xr = -1;

function qn(e) {
    return {
        current: e
    }
}

function Oe(e) {
    0 > xr || (e.current = eu[xr], eu[xr] = null, xr--)
}

function ke(e, t) {
    xr++, eu[xr] = e.current, e.current = t
}
var Qn = {},
    st = qn(Qn),
    mt = qn(!1),
    or = Qn;

function jr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function yt(e) {
    return e = e.childContextTypes, e != null
}

function pl() {
    Oe(mt), Oe(st)
}

function Qf(e, t, n) {
    if (st.current !== Qn) throw Error(A(168));
    ke(st, t), ke(mt, n)
}

function Pp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(A(108, gv(e) || "Unknown", i));
    return De({}, n, r)
}

function ml(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, or = st.current, ke(st, e), ke(mt, mt.current), !0
}

function Hf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(A(169));
    n ? (e = Pp(e, t, or), r.__reactInternalMemoizedMergedChildContext = e, Oe(mt), Oe(st), ke(st, e)) : Oe(mt), ke(mt, n)
}
var sn = null,
    Ql = !1,
    ra = !1;

function Op(e) {
    sn === null ? sn = [e] : sn.push(e)
}

function Mg(e) {
    Ql = !0, Op(e)
}

function Kn() {
    if (!ra && sn !== null) {
        ra = !0;
        var e = 0,
            t = ge;
        try {
            var n = sn;
            for (ge = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            sn = null, Ql = !1
        } catch (i) {
            throw sn !== null && (sn = sn.slice(e + 1)), Jh(Ju, Kn), i
        } finally {
            ge = t, ra = !1
        }
    }
    return null
}
var Rr = [],
    Pr = 0,
    yl = null,
    vl = 0,
    _t = [],
    At = 0,
    lr = null,
    an = 1,
    un = "";

function Gn(e, t) {
    Rr[Pr++] = vl, Rr[Pr++] = yl, yl = e, vl = t
}

function Tp(e, t, n) {
    _t[At++] = an, _t[At++] = un, _t[At++] = lr, lr = e;
    var r = an;
    e = un;
    var i = 32 - Wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Wt(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, an = 1 << 32 - Wt(t) + i | n << i | r, un = o + e
    } else an = 1 << o | n << i | r, un = e
}

function sc(e) {
    e.return !== null && (Gn(e, 1), Tp(e, 1, 0))
}

function ac(e) {
    for (; e === yl;) yl = Rr[--Pr], Rr[Pr] = null, vl = Rr[--Pr], Rr[Pr] = null;
    for (; e === lr;) lr = _t[--At], _t[At] = null, un = _t[--At], _t[At] = null, an = _t[--At], _t[At] = null
}
var Et = null,
    St = null,
    Ne = !1,
    Ht = null;

function Np(e, t) {
    var n = Lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Wf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, St = In(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, St = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? {
                id: an,
                overflow: un
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, St = null, !0) : !1;
        default:
            return !1
    }
}

function tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function nu(e) {
    if (Ne) {
        var t = St;
        if (t) {
            var n = t;
            if (!Wf(e, t)) {
                if (tu(e)) throw Error(A(418));
                t = In(n.nextSibling);
                var r = Et;
                t && Wf(e, t) ? Np(r, n) : (e.flags = e.flags & -4097 | 2, Ne = !1, Et = e)
            }
        } else {
            if (tu(e)) throw Error(A(418));
            e.flags = e.flags & -4097 | 2, Ne = !1, Et = e
        }
    }
}

function Vf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Et = e
}

function No(e) {
    if (e !== Et) return !1;
    if (!Ne) return Vf(e), Ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xa(e.type, e.memoizedProps)), t && (t = St)) {
        if (tu(e)) throw _p(), Error(A(418));
        for (; t;) Np(e, t), t = In(t.nextSibling)
    }
    if (Vf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            St = In(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            St = null
        }
    } else St = Et ? In(e.stateNode.nextSibling) : null;
    return !0
}

function _p() {
    for (var e = St; e;) e = In(e.nextSibling)
}

function Br() {
    St = Et = null, Ne = !1
}

function uc(e) {
    Ht === null ? Ht = [e] : Ht.push(e)
}
var Ig = gn.ReactCurrentBatchConfig;

function jt(e, t) {
    if (e && e.defaultProps) {
        t = De({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var gl = qn(null),
    wl = null,
    Or = null,
    cc = null;

function fc() {
    cc = Or = wl = null
}

function dc(e) {
    var t = gl.current;
    Oe(gl), e._currentValue = t
}

function ru(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function $r(e, t) {
    wl = e, cc = Or = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ht = !0), e.firstContext = null)
}

function Mt(e) {
    var t = e._currentValue;
    if (cc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Or === null) {
            if (wl === null) throw Error(A(308));
            Or = e, wl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Or = Or.next = e;
    return t
}
var Zn = null;

function hc(e) {
    Zn === null ? Zn = [e] : Zn.push(e)
}

function Ap(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, hc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, mn(e, r)
}

function mn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Pn = !1;

function pc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Lp(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function fn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function $n(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, ue & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, mn(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, hc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, mn(e, n)
}

function Ho(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n)
    }
}

function qf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Sl(e, t, n, r) {
    var i = e.updateQueue;
    Pn = !1;
    var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var a = s,
            u = a.next;
        a.next = null, l === null ? o = u : l.next = u, l = a;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== l && (s === null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = a))
    }
    if (o !== null) {
        var d = i.baseState;
        l = 0, f = u = a = null, s = o;
        do {
            var y = s.lane,
                g = s.eventTime;
            if ((r & y) === y) {
                f !== null && (f = f.next = {
                    eventTime: g,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var m = e,
                        v = s;
                    switch (y = t, g = n, v.tag) {
                        case 1:
                            if (m = v.payload, typeof m == "function") {
                                d = m.call(g, d, y);
                                break e
                            }
                            d = m;
                            break e;
                        case 3:
                            m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = v.payload, y = typeof m == "function" ? m.call(g, d, y) : m, y == null) break e;
                            d = De({}, d, y);
                            break e;
                        case 2:
                            Pn = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, y = i.effects, y === null ? i.effects = [s] : y.push(s))
            } else g = {
                eventTime: g,
                lane: y,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, f === null ? (u = f = g, a = d) : f = f.next = g, l |= y;
            if (s = s.next, s === null) {
                if (s = i.shared.pending, s === null) break;
                y = s, s = y.next, y.next = null, i.lastBaseUpdate = y, i.shared.pending = null
            }
        } while (1);
        if (f === null && (a = d), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
            i = t;
            do l |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        ar |= l, e.lanes = l, e.memoizedState = d
    }
}

function Kf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(A(191, i));
                i.call(r)
            }
        }
}
var Dp = new Ah.Component().refs;

function iu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : De({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Hl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ut(),
            i = bn(e),
            o = fn(r, i);
        o.payload = t, n != null && (o.callback = n), t = $n(e, o, i), t !== null && (Vt(t, e, i, r), Ho(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ut(),
            i = bn(e),
            o = fn(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = $n(e, o, i), t !== null && (Vt(t, e, i, r), Ho(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ut(),
            r = bn(e),
            i = fn(n, r);
        i.tag = 2, t != null && (i.callback = t), t = $n(e, i, r), t !== null && (Vt(t, e, r, n), Ho(t, e, r))
    }
};

function Gf(e, t, n, r, i, o, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Qi(n, r) || !Qi(i, o) : !0
}

function Fp(e, t, n) {
    var r = !1,
        i = Qn,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Mt(o) : (i = yt(t) ? or : st.current, r = t.contextTypes, o = (r = r != null) ? jr(e, i) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Yf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null)
}

function ou(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Dp, pc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Mt(o) : (o = yt(t) ? or : st.current, i.context = jr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (iu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Hl.enqueueReplaceState(i, i.state, null), Sl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function fi(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(A(309));
                var r = n.stateNode
            }
            if (!r) throw Error(A(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var s = i.refs;
                s === Dp && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(A(284));
        if (!n._owner) throw Error(A(290, e))
    }
    return e
}

function _o(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Xf(e) {
    var t = e._init;
    return t(e._payload)
}

function Mp(e) {
    function t(c, h) {
        if (e) {
            var p = c.deletions;
            p === null ? (c.deletions = [h], c.flags |= 16) : p.push(h)
        }
    }

    function n(c, h) {
        if (!e) return null;
        for (; h !== null;) t(c, h), h = h.sibling;
        return null
    }

    function r(c, h) {
        for (c = new Map; h !== null;) h.key !== null ? c.set(h.key, h) : c.set(h.index, h), h = h.sibling;
        return c
    }

    function i(c, h) {
        return c = Un(c, h), c.index = 0, c.sibling = null, c
    }

    function o(c, h, p) {
        return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < h ? (c.flags |= 2, h) : p) : (c.flags |= 2, h)) : (c.flags |= 1048576, h)
    }

    function l(c) {
        return e && c.alternate === null && (c.flags |= 2), c
    }

    function s(c, h, p, S) {
        return h === null || h.tag !== 6 ? (h = ca(p, c.mode, S), h.return = c, h) : (h = i(h, p), h.return = c, h)
    }

    function a(c, h, p, S) {
        var E = p.type;
        return E === wr ? f(c, h, p.props.children, S, p.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Rn && Xf(E) === h.type) ? (S = i(h, p.props), S.ref = fi(c, h, p), S.return = c, S) : (S = Yo(p.type, p.key, p.props, null, c.mode, S), S.ref = fi(c, h, p), S.return = c, S)
    }

    function u(c, h, p, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = fa(p, c.mode, S), h.return = c, h) : (h = i(h, p.children || []), h.return = c, h)
    }

    function f(c, h, p, S, E) {
        return h === null || h.tag !== 7 ? (h = ir(p, c.mode, S, E), h.return = c, h) : (h = i(h, p), h.return = c, h)
    }

    function d(c, h, p) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = ca("" + h, c.mode, p), h.return = c, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case wo:
                    return p = Yo(h.type, h.key, h.props, null, c.mode, p), p.ref = fi(c, null, h), p.return = c, p;
                case gr:
                    return h = fa(h, c.mode, p), h.return = c, h;
                case Rn:
                    var S = h._init;
                    return d(c, S(h._payload), p)
            }
            if (gi(h) || li(h)) return h = ir(h, c.mode, p, null), h.return = c, h;
            _o(c, h)
        }
        return null
    }

    function y(c, h, p, S) {
        var E = h !== null ? h.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : s(c, h, "" + p, S);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case wo:
                    return p.key === E ? a(c, h, p, S) : null;
                case gr:
                    return p.key === E ? u(c, h, p, S) : null;
                case Rn:
                    return E = p._init, y(c, h, E(p._payload), S)
            }
            if (gi(p) || li(p)) return E !== null ? null : f(c, h, p, S, null);
            _o(c, p)
        }
        return null
    }

    function g(c, h, p, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return c = c.get(p) || null, s(h, c, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case wo:
                    return c = c.get(S.key === null ? p : S.key) || null, a(h, c, S, E);
                case gr:
                    return c = c.get(S.key === null ? p : S.key) || null, u(h, c, S, E);
                case Rn:
                    var P = S._init;
                    return g(c, h, p, P(S._payload), E)
            }
            if (gi(S) || li(S)) return c = c.get(p) || null, f(h, c, S, E, null);
            _o(h, S)
        }
        return null
    }

    function m(c, h, p, S) {
        for (var E = null, P = null, T = h, R = h = 0, M = null; T !== null && R < p.length; R++) {
            T.index > R ? (M = T, T = null) : M = T.sibling;
            var j = y(c, T, p[R], S);
            if (j === null) {
                T === null && (T = M);
                break
            }
            e && T && j.alternate === null && t(c, T), h = o(j, h, R), P === null ? E = j : P.sibling = j, P = j, T = M
        }
        if (R === p.length) return n(c, T), Ne && Gn(c, R), E;
        if (T === null) {
            for (; R < p.length; R++) T = d(c, p[R], S), T !== null && (h = o(T, h, R), P === null ? E = T : P.sibling = T, P = T);
            return Ne && Gn(c, R), E
        }
        for (T = r(c, T); R < p.length; R++) M = g(T, c, R, p[R], S), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? R : M.key), h = o(M, h, R), P === null ? E = M : P.sibling = M, P = M);
        return e && T.forEach(function(le) {
            return t(c, le)
        }), Ne && Gn(c, R), E
    }

    function v(c, h, p, S) {
        var E = li(p);
        if (typeof E != "function") throw Error(A(150));
        if (p = E.call(p), p == null) throw Error(A(151));
        for (var P = E = null, T = h, R = h = 0, M = null, j = p.next(); T !== null && !j.done; R++, j = p.next()) {
            T.index > R ? (M = T, T = null) : M = T.sibling;
            var le = y(c, T, j.value, S);
            if (le === null) {
                T === null && (T = M);
                break
            }
            e && T && le.alternate === null && t(c, T), h = o(le, h, R), P === null ? E = le : P.sibling = le, P = le, T = M
        }
        if (j.done) return n(c, T), Ne && Gn(c, R), E;
        if (T === null) {
            for (; !j.done; R++, j = p.next()) j = d(c, j.value, S), j !== null && (h = o(j, h, R), P === null ? E = j : P.sibling = j, P = j);
            return Ne && Gn(c, R), E
        }
        for (T = r(c, T); !j.done; R++, j = p.next()) j = g(T, c, R, j.value, S), j !== null && (e && j.alternate !== null && T.delete(j.key === null ? R : j.key), h = o(j, h, R), P === null ? E = j : P.sibling = j, P = j);
        return e && T.forEach(function(ee) {
            return t(c, ee)
        }), Ne && Gn(c, R), E
    }

    function w(c, h, p, S) {
        if (typeof p == "object" && p !== null && p.type === wr && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case wo:
                    e: {
                        for (var E = p.key, P = h; P !== null;) {
                            if (P.key === E) {
                                if (E = p.type, E === wr) {
                                    if (P.tag === 7) {
                                        n(c, P.sibling), h = i(P, p.props.children), h.return = c, c = h;
                                        break e
                                    }
                                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Rn && Xf(E) === P.type) {
                                    n(c, P.sibling), h = i(P, p.props), h.ref = fi(c, P, p), h.return = c, c = h;
                                    break e
                                }
                                n(c, P);
                                break
                            } else t(c, P);
                            P = P.sibling
                        }
                        p.type === wr ? (h = ir(p.props.children, c.mode, S, p.key), h.return = c, c = h) : (S = Yo(p.type, p.key, p.props, null, c.mode, S), S.ref = fi(c, h, p), S.return = c, c = S)
                    }
                    return l(c);
                case gr:
                    e: {
                        for (P = p.key; h !== null;) {
                            if (h.key === P)
                                if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                    n(c, h.sibling), h = i(h, p.children || []), h.return = c, c = h;
                                    break e
                                } else {
                                    n(c, h);
                                    break
                                }
                            else t(c, h);
                            h = h.sibling
                        }
                        h = fa(p, c.mode, S),
                        h.return = c,
                        c = h
                    }
                    return l(c);
                case Rn:
                    return P = p._init, w(c, h, P(p._payload), S)
            }
            if (gi(p)) return m(c, h, p, S);
            if (li(p)) return v(c, h, p, S);
            _o(c, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, h !== null && h.tag === 6 ? (n(c, h.sibling), h = i(h, p), h.return = c, c = h) : (n(c, h), h = ca(p, c.mode, S), h.return = c, c = h), l(c)) : n(c, h)
    }
    return w
}
var Qr = Mp(!0),
    Ip = Mp(!1),
    so = {},
    Zt = qn(so),
    qi = qn(so),
    Ki = qn(so);

function er(e) {
    if (e === so) throw Error(A(174));
    return e
}

function mc(e, t) {
    switch (ke(Ki, t), ke(qi, e), ke(Zt, so), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $a(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $a(t, e)
    }
    Oe(Zt), ke(Zt, t)
}

function Hr() {
    Oe(Zt), Oe(qi), Oe(Ki)
}

function $p(e) {
    er(Ki.current);
    var t = er(Zt.current),
        n = $a(t, e.type);
    t !== n && (ke(qi, e), ke(Zt, n))
}

function yc(e) {
    qi.current === e && (Oe(Zt), Oe(qi))
}
var Ae = qn(0);

function El(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ia = [];

function vc() {
    for (var e = 0; e < ia.length; e++) ia[e]._workInProgressVersionPrimary = null;
    ia.length = 0
}
var Wo = gn.ReactCurrentDispatcher,
    oa = gn.ReactCurrentBatchConfig,
    sr = 0,
    Le = null,
    He = null,
    Ye = null,
    Cl = !1,
    Ti = !1,
    Gi = 0,
    $g = 0;

function it() {
    throw Error(A(321))
}

function gc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!qt(e[n], t[n])) return !1;
    return !0
}

function wc(e, t, n, r, i, o) {
    if (sr = o, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wo.current = e === null || e.memoizedState === null ? jg : Bg, e = n(r, i), Ti) {
        o = 0;
        do {
            if (Ti = !1, Gi = 0, 25 <= o) throw Error(A(301));
            o += 1, Ye = He = null, t.updateQueue = null, Wo.current = Qg, e = n(r, i)
        } while (Ti)
    }
    if (Wo.current = kl, t = He !== null && He.next !== null, sr = 0, Ye = He = Le = null, Cl = !1, t) throw Error(A(300));
    return e
}

function Sc() {
    var e = Gi !== 0;
    return Gi = 0, e
}

function Gt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ye === null ? Le.memoizedState = Ye = e : Ye = Ye.next = e, Ye
}

function It() {
    if (He === null) {
        var e = Le.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = He.next;
    var t = Ye === null ? Le.memoizedState : Ye.next;
    if (t !== null) Ye = t, He = e;
    else {
        if (e === null) throw Error(A(310));
        He = e, e = {
            memoizedState: He.memoizedState,
            baseState: He.baseState,
            baseQueue: He.baseQueue,
            queue: He.queue,
            next: null
        }, Ye === null ? Le.memoizedState = Ye = e : Ye = Ye.next = e
    }
    return Ye
}

function Yi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function la(e) {
    var t = It(),
        n = t.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = He,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next, o.next = l
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var s = l = null,
            a = null,
            u = o;
        do {
            var f = u.lane;
            if ((sr & f) === f) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = d, l = r) : a = a.next = d, Le.lanes |= f, ar |= f
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? l = r : a.next = s, qt(r, t.memoizedState) || (ht = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, Le.lanes |= o, ar |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function sa(e) {
    var t = It(),
        n = t.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do o = e(o, l.action), l = l.next; while (l !== i);
        qt(o, t.memoizedState) || (ht = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function zp() {}

function bp(e, t) {
    var n = Le,
        r = It(),
        i = t(),
        o = !qt(r.memoizedState, i);
    if (o && (r.memoizedState = i, ht = !0), r = r.queue, Ec(Bp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ye !== null && Ye.memoizedState.tag & 1) {
        if (n.flags |= 2048, Xi(9, jp.bind(null, n, r, i, t), void 0, null), Xe === null) throw Error(A(349));
        sr & 30 || Up(n, t, i)
    }
    return i
}

function Up(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function jp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qp(t) && Hp(e)
}

function Bp(e, t, n) {
    return n(function() {
        Qp(t) && Hp(e)
    })
}

function Qp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !qt(e, n)
    } catch {
        return !0
    }
}

function Hp(e) {
    var t = mn(e, 1);
    t !== null && Vt(t, e, 1, -1)
}

function Jf(e) {
    var t = Gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ug.bind(null, Le, e), [t.memoizedState, e]
}

function Xi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Wp() {
    return It().memoizedState
}

function Vo(e, t, n, r) {
    var i = Gt();
    Le.flags |= e, i.memoizedState = Xi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Wl(e, t, n, r) {
    var i = It();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (He !== null) {
        var l = He.memoizedState;
        if (o = l.destroy, r !== null && gc(r, l.deps)) {
            i.memoizedState = Xi(t, n, o, r);
            return
        }
    }
    Le.flags |= e, i.memoizedState = Xi(1 | t, n, o, r)
}

function Zf(e, t) {
    return Vo(8390656, 8, e, t)
}

function Ec(e, t) {
    return Wl(2048, 8, e, t)
}

function Vp(e, t) {
    return Wl(4, 2, e, t)
}

function qp(e, t) {
    return Wl(4, 4, e, t)
}

function Kp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Gp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Wl(4, 4, Kp.bind(null, t, e), n)
}

function Cc() {}

function Yp(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Xp(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Jp(e, t, n) {
    return sr & 21 ? (qt(n, t) || (n = tp(), Le.lanes |= n, ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ht = !0), e.memoizedState = n)
}

function zg(e, t) {
    var n = ge;
    ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = oa.transition;
    oa.transition = {};
    try {
        e(!1), t()
    } finally {
        ge = n, oa.transition = r
    }
}

function Zp() {
    return It().memoizedState
}

function bg(e, t, n) {
    var r = bn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, em(e)) tm(t, n);
    else if (n = Ap(e, t, n, r), n !== null) {
        var i = ut();
        Vt(n, e, r, i), nm(n, t, r)
    }
}

function Ug(e, t, n) {
    var r = bn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (em(e)) tm(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var l = t.lastRenderedState,
                s = o(l, n);
            if (i.hasEagerState = !0, i.eagerState = s, qt(s, l)) {
                var a = t.interleaved;
                a === null ? (i.next = i, hc(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Ap(e, t, i, r), n !== null && (i = ut(), Vt(n, e, r, i), nm(n, t, r))
    }
}

function em(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le
}

function tm(e, t) {
    Ti = Cl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function nm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n)
    }
}
var kl = {
        readContext: Mt,
        useCallback: it,
        useContext: it,
        useEffect: it,
        useImperativeHandle: it,
        useInsertionEffect: it,
        useLayoutEffect: it,
        useMemo: it,
        useReducer: it,
        useRef: it,
        useState: it,
        useDebugValue: it,
        useDeferredValue: it,
        useTransition: it,
        useMutableSource: it,
        useSyncExternalStore: it,
        useId: it,
        unstable_isNewReconciler: !1
    },
    jg = {
        readContext: Mt,
        useCallback: function(e, t) {
            return Gt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Mt,
        useEffect: Zf,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Vo(4194308, 4, Kp.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Vo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Vo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Gt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Gt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = bg.bind(null, Le, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Gt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Jf,
        useDebugValue: Cc,
        useDeferredValue: function(e) {
            return Gt().memoizedState = e
        },
        useTransition: function() {
            var e = Jf(!1),
                t = e[0];
            return e = zg.bind(null, e[1]), Gt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Le,
                i = Gt();
            if (Ne) {
                if (n === void 0) throw Error(A(407));
                n = n()
            } else {
                if (n = t(), Xe === null) throw Error(A(349));
                sr & 30 || Up(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Zf(Bp.bind(null, r, o, e), [e]), r.flags |= 2048, Xi(9, jp.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Gt(),
                t = Xe.identifierPrefix;
            if (Ne) {
                var n = un,
                    r = an;
                n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = $g++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Bg = {
        readContext: Mt,
        useCallback: Yp,
        useContext: Mt,
        useEffect: Ec,
        useImperativeHandle: Gp,
        useInsertionEffect: Vp,
        useLayoutEffect: qp,
        useMemo: Xp,
        useReducer: la,
        useRef: Wp,
        useState: function() {
            return la(Yi)
        },
        useDebugValue: Cc,
        useDeferredValue: function(e) {
            var t = It();
            return Jp(t, He.memoizedState, e)
        },
        useTransition: function() {
            var e = la(Yi)[0],
                t = It().memoizedState;
            return [e, t]
        },
        useMutableSource: zp,
        useSyncExternalStore: bp,
        useId: Zp,
        unstable_isNewReconciler: !1
    },
    Qg = {
        readContext: Mt,
        useCallback: Yp,
        useContext: Mt,
        useEffect: Ec,
        useImperativeHandle: Gp,
        useInsertionEffect: Vp,
        useLayoutEffect: qp,
        useMemo: Xp,
        useReducer: sa,
        useRef: Wp,
        useState: function() {
            return sa(Yi)
        },
        useDebugValue: Cc,
        useDeferredValue: function(e) {
            var t = It();
            return He === null ? t.memoizedState = e : Jp(t, He.memoizedState, e)
        },
        useTransition: function() {
            var e = sa(Yi)[0],
                t = It().memoizedState;
            return [e, t]
        },
        useMutableSource: zp,
        useSyncExternalStore: bp,
        useId: Zp,
        unstable_isNewReconciler: !1
    };

function Wr(e, t) {
    try {
        var n = "",
            r = t;
        do n += vv(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function aa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function lu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Hg = typeof WeakMap == "function" ? WeakMap : Map;

function rm(e, t, n) {
    n = fn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Rl || (Rl = !0, yu = r), lu(e, t)
    }, n
}

function im(e, t, n) {
    n = fn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            lu(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        lu(e, t), typeof r != "function" && (zn === null ? zn = new Set([this]) : zn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function ed(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Hg;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = i0.bind(null, e, t, n), t.then(e, e))
}

function td(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function nd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fn(-1, 1), t.tag = 2, $n(n, t, 1))), n.lanes |= 1), e)
}
var Wg = gn.ReactCurrentOwner,
    ht = !1;

function at(e, t, n, r) {
    t.child = e === null ? Ip(t, null, n, r) : Qr(t, e.child, n, r)
}

function rd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return $r(t, i), r = wc(e, t, n, r, o, i), n = Sc(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yn(e, t, i)) : (Ne && n && sc(t), t.flags |= 1, at(e, t, r, i), t.child)
}

function id(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !_c(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, om(e, t, o, r, i)) : (e = Yo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Qi, n(l, r) && e.ref === t.ref) return yn(e, t, i)
    }
    return t.flags |= 1, e = Un(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function om(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Qi(o, r) && e.ref === t.ref)
            if (ht = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ht = !0);
            else return t.lanes = e.lanes, yn(e, t, i)
    }
    return su(e, t, n, r, i)
}

function lm(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ke(Nr, wt), wt |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ke(Nr, wt), wt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, ke(Nr, wt), wt |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ke(Nr, wt), wt |= r;
    return at(e, t, i, n), t.child
}

function sm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function su(e, t, n, r, i) {
    var o = yt(n) ? or : st.current;
    return o = jr(t, o), $r(t, i), n = wc(e, t, n, r, o, i), r = Sc(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yn(e, t, i)) : (Ne && r && sc(t), t.flags |= 1, at(e, t, n, i), t.child)
}

function od(e, t, n, r, i) {
    if (yt(n)) {
        var o = !0;
        ml(t)
    } else o = !1;
    if ($r(t, i), t.stateNode === null) qo(e, t), Fp(t, n, r), ou(t, n, r, i), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var a = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Mt(u) : (u = yt(n) ? or : st.current, u = jr(t, u));
        var f = n.getDerivedStateFromProps,
            d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && Yf(t, l, r, u), Pn = !1;
        var y = t.memoizedState;
        l.state = y, Sl(t, r, l, i), a = t.memoizedState, s !== r || y !== a || mt.current || Pn ? (typeof f == "function" && (iu(t, n, f, r), a = t.memoizedState), (s = Pn || Gf(t, n, s, r, y, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, Lp(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : jt(t.type, s), l.props = u, d = t.pendingProps, y = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Mt(a) : (a = yt(n) ? or : st.current, a = jr(t, a));
        var g = n.getDerivedStateFromProps;
        (f = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || y !== a) && Yf(t, l, r, a), Pn = !1, y = t.memoizedState, l.state = y, Sl(t, r, l, i);
        var m = t.memoizedState;
        s !== d || y !== m || mt.current || Pn ? (typeof g == "function" && (iu(t, n, g, r), m = t.memoizedState), (u = Pn || Gf(t, n, u, r, y, m, a) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return au(e, t, n, r, o, i)
}

function au(e, t, n, r, i, o) {
    sm(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Hf(t, n, !1), yn(e, t, o);
    r = t.stateNode, Wg.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = Qr(t, e.child, null, o), t.child = Qr(t, null, s, o)) : at(e, t, s, o), t.memoizedState = r.state, i && Hf(t, n, !0), t.child
}

function am(e) {
    var t = e.stateNode;
    t.pendingContext ? Qf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qf(e, t.context, !1), mc(e, t.containerInfo)
}

function ld(e, t, n, r, i) {
    return Br(), uc(i), t.flags |= 256, at(e, t, n, r), t.child
}
var uu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function cu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function um(e, t, n) {
    var r = t.pendingProps,
        i = Ae.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ke(Ae, i & 1), e === null) return nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Kl(l, r, 0, null), e = ir(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = cu(n), t.memoizedState = uu, e) : kc(t, l));
    if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Vg(e, t, l, r, s, i, n);
    if (o) {
        o = r.fallback, l = t.mode, i = e.child, s = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Un(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = Un(s, o) : (o = ir(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? cu(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = uu, r
    }
    return o = e.child, e = o.sibling, r = Un(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function kc(e, t) {
    return t = Kl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ao(e, t, n, r) {
    return r !== null && uc(r), Qr(t, e.child, null, n), e = kc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Vg(e, t, n, r, i, o, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = aa(Error(A(422))), Ao(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Kl({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = ir(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Qr(t, e.child, null, l), t.child.memoizedState = cu(l), t.memoizedState = uu, o);
    if (!(t.mode & 1)) return Ao(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
        return r = s, o = Error(A(419)), r = aa(o, r, void 0), Ao(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0, ht || s) {
        if (r = Xe, r !== null) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, mn(e, i), Vt(r, e, i, -1))
        }
        return Nc(), r = aa(Error(A(421))), Ao(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = o0.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, St = In(i.nextSibling), Et = t, Ne = !0, Ht = null, e !== null && (_t[At++] = an, _t[At++] = un, _t[At++] = lr, an = e.id, un = e.overflow, lr = t), t = kc(t, r.children), t.flags |= 4096, t)
}

function sd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ru(e.return, t, n)
}

function ua(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function cm(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (at(e, t, r.children, n), r = Ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && sd(e, n, t);
            else if (e.tag === 19) sd(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ke(Ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && El(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ua(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && El(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            ua(t, !0, n, null, o);
            break;
        case "together":
            ua(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function qo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function yn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ar |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Un(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function qg(e, t, n) {
    switch (t.tag) {
        case 3:
            am(t), Br();
            break;
        case 5:
            $p(t);
            break;
        case 1:
            yt(t.type) && ml(t);
            break;
        case 4:
            mc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ke(gl, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ke(Ae, Ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? um(e, t, n) : (ke(Ae, Ae.current & 1), e = yn(e, t, n), e !== null ? e.sibling : null);
            ke(Ae, Ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return cm(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ke(Ae, Ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, lm(e, t, n)
    }
    return yn(e, t, n)
}
var fm, fu, dm, hm;
fm = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
fu = function() {};
dm = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, er(Zt.current);
        var o = null;
        switch (n) {
            case "input":
                i = Da(e, i), r = Da(e, r), o = [];
                break;
            case "select":
                i = De({}, i, {
                    value: void 0
                }), r = De({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = Ia(e, i), r = Ia(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hl)
        }
        za(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var s = i[u];
                    for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ii.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l])
                    } else n || (o || (o = []), o.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ii.hasOwnProperty(u) ? (a != null && u === "onScroll" && Re("scroll", e), o || s === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
hm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function di(e, t) {
    if (!Ne) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Kg(e, t, n) {
    var r = t.pendingProps;
    switch (ac(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ot(t), null;
        case 1:
            return yt(t.type) && pl(), ot(t), null;
        case 3:
            return r = t.stateNode, Hr(), Oe(mt), Oe(st), vc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (No(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ht !== null && (wu(Ht), Ht = null))), fu(e, t), ot(t), null;
        case 5:
            yc(t);
            var i = er(Ki.current);
            if (n = t.type, e !== null && t.stateNode != null) dm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(A(166));
                    return ot(t), null
                }
                if (e = er(Zt.current), No(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Yt] = t, r[Vi] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Re("cancel", r), Re("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Re("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Si.length; i++) Re(Si[i], r);
                            break;
                        case "source":
                            Re("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Re("error", r), Re("load", r);
                            break;
                        case "details":
                            Re("toggle", r);
                            break;
                        case "input":
                            yf(r, o), Re("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, Re("invalid", r);
                            break;
                        case "textarea":
                            gf(r, o), Re("invalid", r)
                    }
                    za(n, o), i = null;
                    for (var l in o)
                        if (o.hasOwnProperty(l)) {
                            var s = o[l];
                            l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && To(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && To(r.textContent, s, e), i = ["children", "" + s]) : Ii.hasOwnProperty(l) && s != null && l === "onScroll" && Re("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            So(r), vf(r, o, !0);
                            break;
                        case "textarea":
                            So(r), wf(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = hl)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Yt] = t, e[Vi] = r, fm(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = ba(n, r), n) {
                            case "dialog":
                                Re("cancel", e), Re("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Re("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Si.length; i++) Re(Si[i], e);
                                i = r;
                                break;
                            case "source":
                                Re("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Re("error", e), Re("load", e), i = r;
                                break;
                            case "details":
                                Re("toggle", e), i = r;
                                break;
                            case "input":
                                yf(e, r), i = Da(e, r), Re("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = De({}, r, {
                                    value: void 0
                                }), Re("invalid", e);
                                break;
                            case "textarea":
                                gf(e, r), i = Ia(e, r), Re("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        za(n, i),
                        s = i;
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var a = s[o];
                                o === "style" ? Qh(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && jh(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && $i(e, a) : typeof a == "number" && $i(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ii.hasOwnProperty(o) ? a != null && o === "onScroll" && Re("scroll", e) : a != null && qu(e, o, a, l))
                            }
                        switch (n) {
                            case "input":
                                So(e), vf(e, r, !1);
                                break;
                            case "textarea":
                                So(e), wf(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Bn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Dr(e, !!r.multiple, o, !1) : r.defaultValue != null && Dr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = hl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ot(t), null;
        case 6:
            if (e && t.stateNode != null) hm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
                if (n = er(Ki.current), er(Zt.current), No(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
                        case 3:
                            To(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && To(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r
            }
            return ot(t), null;
        case 13:
            if (Oe(Ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ne && St !== null && t.mode & 1 && !(t.flags & 128)) _p(), Br(), t.flags |= 98560, o = !1;
                else if (o = No(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(A(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(A(317));
                        o[Yt] = t
                    } else Br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ot(t), o = !1
                } else Ht !== null && (wu(Ht), Ht = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ae.current & 1 ? We === 0 && (We = 3) : Nc())), t.updateQueue !== null && (t.flags |= 4), ot(t), null);
        case 4:
            return Hr(), fu(e, t), e === null && Hi(t.stateNode.containerInfo), ot(t), null;
        case 10:
            return dc(t.type._context), ot(t), null;
        case 17:
            return yt(t.type) && pl(), ot(t), null;
        case 19:
            if (Oe(Ae), o = t.memoizedState, o === null) return ot(t), null;
            if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
                if (r) di(o, !1);
                else {
                    if (We !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = El(e), l !== null) {
                                for (t.flags |= 128, di(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ke(Ae, Ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Me() > Vr && (t.flags |= 128, r = !0, di(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = El(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), di(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Ne) return ot(t), null
                    } else 2 * Me() - o.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128, r = !0, di(o, !1), t.lanes = 4194304);
                o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Me(), t.sibling = null, n = Ae.current, ke(Ae, r ? n & 1 | 2 : n & 1), t) : (ot(t), null);
        case 22:
        case 23:
            return Tc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? wt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(A(156, t.tag))
}

function Gg(e, t) {
    switch (ac(t), t.tag) {
        case 1:
            return yt(t.type) && pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Hr(), Oe(mt), Oe(st), vc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return yc(t), null;
        case 13:
            if (Oe(Ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(A(340));
                Br()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Oe(Ae), null;
        case 4:
            return Hr(), null;
        case 10:
            return dc(t.type._context), null;
        case 22:
        case 23:
            return Tc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Lo = !1,
    lt = !1,
    Yg = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function Tr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Fe(e, t, r)
        } else n.current = null
}

function du(e, t, n) {
    try {
        n()
    } catch (r) {
        Fe(e, t, r)
    }
}
var ad = !1;

function Xg(e, t) {
    if (Ga = cl, e = vp(), lc(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    s = -1,
                    a = -1,
                    u = 0,
                    f = 0,
                    d = e,
                    y = null;
                t: for (;;) {
                    for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (s = l + i), d !== o || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (g = d.firstChild) !== null;) y = d, d = g;
                    for (;;) {
                        if (d === e) break t;
                        if (y === n && ++u === i && (s = l), y === o && ++f === r && (a = l), (g = d.nextSibling) !== null) break;
                        d = y, y = d.parentNode
                    }
                    d = g
                }
                n = s === -1 || a === -1 ? null : {
                    start: s,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ya = {
            focusedElem: e,
            selectionRange: n
        }, cl = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var v = m.memoizedProps,
                                    w = m.memoizedState,
                                    c = t.stateNode,
                                    h = c.getSnapshotBeforeUpdate(t.elementType === t.type ? v : jt(t.type, v), w);
                                c.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                    }
                } catch (S) {
                    Fe(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return m = ad, ad = !1, m
}

function Ni(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && du(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function pm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, pm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Vi], delete t[Za], delete t[Dg], delete t[Fg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function mm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ud(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || mm(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (pu(e, t, n), e = e.sibling; e !== null;) pu(e, t, n), e = e.sibling
}

function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (mu(e, t, n), e = e.sibling; e !== null;) mu(e, t, n), e = e.sibling
}
var Ze = null,
    Qt = !1;

function kn(e, t, n) {
    for (n = n.child; n !== null;) ym(e, t, n), n = n.sibling
}

function ym(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function") try {
        Jt.onCommitFiberUnmount(zl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            lt || Tr(n, t);
        case 6:
            var r = Ze,
                i = Qt;
            Ze = null, kn(e, t, n), Ze = r, Qt = i, Ze !== null && (Qt ? (e = Ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ze.removeChild(n.stateNode));
            break;
        case 18:
            Ze !== null && (Qt ? (e = Ze, n = n.stateNode, e.nodeType === 8 ? na(e.parentNode, n) : e.nodeType === 1 && na(e, n), ji(e)) : na(Ze, n.stateNode));
            break;
        case 4:
            r = Ze, i = Qt, Ze = n.stateNode.containerInfo, Qt = !0, kn(e, t, n), Ze = r, Qt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!lt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        l = o.destroy;
                    o = o.tag, l !== void 0 && (o & 2 || o & 4) && du(n, t, l), i = i.next
                } while (i !== r)
            }
            kn(e, t, n);
            break;
        case 1:
            if (!lt && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                Fe(n, t, s)
            }
            kn(e, t, n);
            break;
        case 21:
            kn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (lt = (r = lt) || n.memoizedState !== null, kn(e, t, n), lt = r) : kn(e, t, n);
            break;
        default:
            kn(e, t, n)
    }
}

function cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Yg), t.forEach(function(r) {
            var i = l0.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    l = t,
                    s = l;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            Ze = s.stateNode, Qt = !1;
                            break e;
                        case 3:
                            Ze = s.stateNode.containerInfo, Qt = !0;
                            break e;
                        case 4:
                            Ze = s.stateNode.containerInfo, Qt = !0;
                            break e
                    }
                    s = s.return
                }
                if (Ze === null) throw Error(A(160));
                ym(o, l, i), Ze = null, Qt = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (u) {
                Fe(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) vm(t, e), t = t.sibling
}

function vm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ut(t, e), Kt(e), r & 4) {
                try {
                    Ni(3, e, e.return), Vl(3, e)
                } catch (v) {
                    Fe(e, e.return, v)
                }
                try {
                    Ni(5, e, e.return)
                } catch (v) {
                    Fe(e, e.return, v)
                }
            }
            break;
        case 1:
            Ut(t, e), Kt(e), r & 512 && n !== null && Tr(n, n.return);
            break;
        case 5:
            if (Ut(t, e), Kt(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    $i(i, "")
                } catch (v) {
                    Fe(e, e.return, v)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    s === "input" && o.type === "radio" && o.name != null && zh(i, o), ba(s, l);
                    var u = ba(s, o);
                    for (l = 0; l < a.length; l += 2) {
                        var f = a[l],
                            d = a[l + 1];
                        f === "style" ? Qh(i, d) : f === "dangerouslySetInnerHTML" ? jh(i, d) : f === "children" ? $i(i, d) : qu(i, f, d, u)
                    }
                    switch (s) {
                        case "input":
                            Fa(i, o);
                            break;
                        case "textarea":
                            bh(i, o);
                            break;
                        case "select":
                            var y = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var g = o.value;
                            g != null ? Dr(i, !!o.multiple, g, !1) : y !== !!o.multiple && (o.defaultValue != null ? Dr(i, !!o.multiple, o.defaultValue, !0) : Dr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Vi] = o
                } catch (v) {
                    Fe(e, e.return, v)
                }
            }
            break;
        case 6:
            if (Ut(t, e), Kt(e), r & 4) {
                if (e.stateNode === null) throw Error(A(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (v) {
                    Fe(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ut(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ji(t.containerInfo)
            } catch (v) {
                Fe(e, e.return, v)
            }
            break;
        case 4:
            Ut(t, e), Kt(e);
            break;
        case 13:
            Ut(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Pc = Me())), r & 4 && cd(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (lt = (u = lt) || f, Ut(t, e), lt = u) : Ut(t, e), Kt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                    for (z = e, f = e.child; f !== null;) {
                        for (d = z = f; z !== null;) {
                            switch (y = z, g = y.child, y.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ni(4, y, y.return);
                                    break;
                                case 1:
                                    Tr(y, y.return);
                                    var m = y.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        r = y, n = y.return;
                                        try {
                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                        } catch (v) {
                                            Fe(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    Tr(y, y.return);
                                    break;
                                case 22:
                                    if (y.memoizedState !== null) {
                                        dd(d);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = y, z = g) : dd(d)
                        }
                        f = f.sibling
                    }
                e: for (f = null, d = e;;) {
                    if (d.tag === 5) {
                        if (f === null) {
                            f = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Bh("display", l))
                            } catch (v) {
                                Fe(e, e.return, v)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (f === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (v) {
                            Fe(e, e.return, v)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        f === d && (f = null), d = d.return
                    }
                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Ut(t, e), Kt(e), r & 4 && cd(e);
            break;
        case 21:
            break;
        default:
            Ut(t, e), Kt(e)
    }
}

function Kt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (mm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && ($i(i, ""), r.flags &= -33);
                    var o = ud(e);
                    mu(e, o, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = ud(e);
                    pu(e, s, l);
                    break;
                default:
                    throw Error(A(161))
            }
        }
        catch (a) {
            Fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Jg(e, t, n) {
    z = e, gm(e)
}

function gm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var i = z,
            o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Lo;
            if (!l) {
                var s = i.alternate,
                    a = s !== null && s.memoizedState !== null || lt;
                s = Lo;
                var u = lt;
                if (Lo = l, (lt = a) && !u)
                    for (z = i; z !== null;) l = z, a = l.child, l.tag === 22 && l.memoizedState !== null ? hd(i) : a !== null ? (a.return = l, z = a) : hd(i);
                for (; o !== null;) z = o, gm(o), o = o.sibling;
                z = i, Lo = s, lt = u
            }
            fd(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, z = o) : fd(e)
    }
}

function fd(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        lt || Vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !lt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Kf(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Kf(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && ji(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                }
                lt || t.flags & 512 && hu(t)
            } catch (y) {
                Fe(t, t.return, y)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function dd(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function hd(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Vl(4, t)
                    } catch (a) {
                        Fe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            Fe(t, i, a)
                        }
                    }
                    var o = t.return;
                    try {
                        hu(t)
                    } catch (a) {
                        Fe(t, o, a)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        hu(t)
                    } catch (a) {
                        Fe(t, l, a)
                    }
            }
        } catch (a) {
            Fe(t, t.return, a)
        }
        if (t === e) {
            z = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, z = s;
            break
        }
        z = t.return
    }
}
var Zg = Math.ceil,
    xl = gn.ReactCurrentDispatcher,
    xc = gn.ReactCurrentOwner,
    Dt = gn.ReactCurrentBatchConfig,
    ue = 0,
    Xe = null,
    Be = null,
    et = 0,
    wt = 0,
    Nr = qn(0),
    We = 0,
    Ji = null,
    ar = 0,
    ql = 0,
    Rc = 0,
    _i = null,
    dt = null,
    Pc = 0,
    Vr = 1 / 0,
    on = null,
    Rl = !1,
    yu = null,
    zn = null,
    Do = !1,
    An = null,
    Pl = 0,
    Ai = 0,
    vu = null,
    Ko = -1,
    Go = 0;

function ut() {
    return ue & 6 ? Me() : Ko !== -1 ? Ko : Ko = Me()
}

function bn(e) {
    return e.mode & 1 ? ue & 2 && et !== 0 ? et & -et : Ig.transition !== null ? (Go === 0 && (Go = tp()), Go) : (e = ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ap(e.type)), e) : 1
}

function Vt(e, t, n, r) {
    if (50 < Ai) throw Ai = 0, vu = null, Error(A(185));
    io(e, n, r), (!(ue & 2) || e !== Xe) && (e === Xe && (!(ue & 2) && (ql |= n), We === 4 && Nn(e, et)), vt(e, r), n === 1 && ue === 0 && !(t.mode & 1) && (Vr = Me() + 500, Ql && Kn()))
}

function vt(e, t) {
    var n = e.callbackNode;
    Iv(e, t);
    var r = ul(e, e === Xe ? et : 0);
    if (r === 0) n !== null && Cf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Cf(n), t === 1) e.tag === 0 ? Mg(pd.bind(null, e)) : Op(pd.bind(null, e)), Ag(function() {
            !(ue & 6) && Kn()
        }), n = null;
        else {
            switch (np(r)) {
                case 1:
                    n = Ju;
                    break;
                case 4:
                    n = Zh;
                    break;
                case 16:
                    n = al;
                    break;
                case 536870912:
                    n = ep;
                    break;
                default:
                    n = al
            }
            n = Pm(n, wm.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function wm(e, t) {
    if (Ko = -1, Go = 0, ue & 6) throw Error(A(327));
    var n = e.callbackNode;
    if (zr() && e.callbackNode !== n) return null;
    var r = ul(e, e === Xe ? et : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ol(e, r);
    else {
        t = r;
        var i = ue;
        ue |= 2;
        var o = Em();
        (Xe !== e || et !== t) && (on = null, Vr = Me() + 500, rr(e, t));
        do try {
            n0();
            break
        } catch (s) {
            Sm(e, s)
        }
        while (1);
        fc(), xl.current = o, ue = i, Be !== null ? t = 0 : (Xe = null, et = 0, t = We)
    }
    if (t !== 0) {
        if (t === 2 && (i = Ha(e), i !== 0 && (r = i, t = gu(e, i))), t === 1) throw n = Ji, rr(e, 0), Nn(e, r), vt(e, Me()), n;
        if (t === 6) Nn(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !e0(i) && (t = Ol(e, r), t === 2 && (o = Ha(e), o !== 0 && (r = o, t = gu(e, o))), t === 1)) throw n = Ji, rr(e, 0), Nn(e, r), vt(e, Me()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(A(345));
                case 2:
                    Yn(e, dt, on);
                    break;
                case 3:
                    if (Nn(e, r), (r & 130023424) === r && (t = Pc + 500 - Me(), 10 < t)) {
                        if (ul(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            ut(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ja(Yn.bind(null, e, dt, on), t);
                        break
                    }
                    Yn(e, dt, on);
                    break;
                case 4:
                    if (Nn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var l = 31 - Wt(r);
                        o = 1 << l, l = t[l], l > i && (i = l), r &= ~o
                    }
                    if (r = i, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zg(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ja(Yn.bind(null, e, dt, on), r);
                        break
                    }
                    Yn(e, dt, on);
                    break;
                case 5:
                    Yn(e, dt, on);
                    break;
                default:
                    throw Error(A(329))
            }
        }
    }
    return vt(e, Me()), e.callbackNode === n ? wm.bind(null, e) : null
}

function gu(e, t) {
    var n = _i;
    return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256), e = Ol(e, t), e !== 2 && (t = dt, dt = n, t !== null && wu(t)), e
}

function wu(e) {
    dt === null ? dt = e : dt.push.apply(dt, e)
}

function e0(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!qt(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Nn(e, t) {
    for (t &= ~Rc, t &= ~ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Wt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function pd(e) {
    if (ue & 6) throw Error(A(327));
    zr();
    var t = ul(e, 0);
    if (!(t & 1)) return vt(e, Me()), null;
    var n = Ol(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ha(e);
        r !== 0 && (t = r, n = gu(e, r))
    }
    if (n === 1) throw n = Ji, rr(e, 0), Nn(e, t), vt(e, Me()), n;
    if (n === 6) throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yn(e, dt, on), vt(e, Me()), null
}

function Oc(e, t) {
    var n = ue;
    ue |= 1;
    try {
        return e(t)
    } finally {
        ue = n, ue === 0 && (Vr = Me() + 500, Ql && Kn())
    }
}

function ur(e) {
    An !== null && An.tag === 0 && !(ue & 6) && zr();
    var t = ue;
    ue |= 1;
    var n = Dt.transition,
        r = ge;
    try {
        if (Dt.transition = null, ge = 1, e) return e()
    } finally {
        ge = r, Dt.transition = n, ue = t, !(ue & 6) && Kn()
    }
}

function Tc() {
    wt = Nr.current, Oe(Nr)
}

function rr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _g(n)), Be !== null)
        for (n = Be.return; n !== null;) {
            var r = n;
            switch (ac(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && pl();
                    break;
                case 3:
                    Hr(), Oe(mt), Oe(st), vc();
                    break;
                case 5:
                    yc(r);
                    break;
                case 4:
                    Hr();
                    break;
                case 13:
                    Oe(Ae);
                    break;
                case 19:
                    Oe(Ae);
                    break;
                case 10:
                    dc(r.type._context);
                    break;
                case 22:
                case 23:
                    Tc()
            }
            n = n.return
        }
    if (Xe = e, Be = e = Un(e.current, null), et = wt = t, We = 0, Ji = null, Rc = ql = ar = 0, dt = _i = null, Zn !== null) {
        for (t = 0; t < Zn.length; t++)
            if (n = Zn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i, r.next = l
                }
                n.pending = r
            }
        Zn = null
    }
    return e
}

function Sm(e, t) {
    do {
        var n = Be;
        try {
            if (fc(), Wo.current = kl, Cl) {
                for (var r = Le.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Cl = !1
            }
            if (sr = 0, Ye = He = Le = null, Ti = !1, Gi = 0, xc.current = null, n === null || n.return === null) {
                We = 1, Ji = t, Be = null;
                break
            }
            e: {
                var o = e,
                    l = n.return,
                    s = n,
                    a = t;
                if (t = et, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        f = s,
                        d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var y = f.alternate;
                        y ? (f.updateQueue = y.updateQueue, f.memoizedState = y.memoizedState, f.lanes = y.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var g = td(l);
                    if (g !== null) {
                        g.flags &= -257, nd(g, l, s, o, t), g.mode & 1 && ed(o, u, t), t = g, a = u;
                        var m = t.updateQueue;
                        if (m === null) {
                            var v = new Set;
                            v.add(a), t.updateQueue = v
                        } else m.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ed(o, u, t), Nc();
                            break e
                        }
                        a = Error(A(426))
                    }
                } else if (Ne && s.mode & 1) {
                    var w = td(l);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), nd(w, l, s, o, t), uc(Wr(a, s));
                        break e
                    }
                }
                o = a = Wr(a, s),
                We !== 4 && (We = 2),
                _i === null ? _i = [o] : _i.push(o),
                o = l;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var c = rm(o, a, t);
                            qf(o, c);
                            break e;
                        case 1:
                            s = a;
                            var h = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (zn === null || !zn.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var S = im(o, s, t);
                                qf(o, S);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            km(n)
        } catch (E) {
            t = E, Be === n && n !== null && (Be = n = n.return);
            continue
        }
        break
    } while (1)
}

function Em() {
    var e = xl.current;
    return xl.current = kl, e === null ? kl : e
}

function Nc() {
    (We === 0 || We === 3 || We === 2) && (We = 4), Xe === null || !(ar & 268435455) && !(ql & 268435455) || Nn(Xe, et)
}

function Ol(e, t) {
    var n = ue;
    ue |= 2;
    var r = Em();
    (Xe !== e || et !== t) && (on = null, rr(e, t));
    do try {
        t0();
        break
    } catch (i) {
        Sm(e, i)
    }
    while (1);
    if (fc(), ue = n, xl.current = r, Be !== null) throw Error(A(261));
    return Xe = null, et = 0, We
}

function t0() {
    for (; Be !== null;) Cm(Be)
}

function n0() {
    for (; Be !== null && !Ov();) Cm(Be)
}

function Cm(e) {
    var t = Rm(e.alternate, e, wt);
    e.memoizedProps = e.pendingProps, t === null ? km(e) : Be = t, xc.current = null
}

function km(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Gg(n, t), n !== null) {
                n.flags &= 32767, Be = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                We = 6, Be = null;
                return
            }
        } else if (n = Kg(n, t, wt), n !== null) {
            Be = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Be = t;
            return
        }
        Be = t = e
    } while (t !== null);
    We === 0 && (We = 5)
}

function Yn(e, t, n) {
    var r = ge,
        i = Dt.transition;
    try {
        Dt.transition = null, ge = 1, r0(e, t, n, r)
    } finally {
        Dt.transition = i, ge = r
    }
    return null
}

function r0(e, t, n, r) {
    do zr(); while (An !== null);
    if (ue & 6) throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if ($v(e, o), e === Xe && (Be = Xe = null, et = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Do || (Do = !0, Pm(al, function() {
            return zr(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Dt.transition, Dt.transition = null;
        var l = ge;
        ge = 1;
        var s = ue;
        ue |= 4, xc.current = null, Xg(e, n), vm(n, e), kg(Ya), cl = !!Ga, Ya = Ga = null, e.current = n, Jg(n), Tv(), ue = s, ge = l, Dt.transition = o
    } else e.current = n;
    if (Do && (Do = !1, An = e, Pl = i), o = e.pendingLanes, o === 0 && (zn = null), Av(n.stateNode), vt(e, Me()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Rl) throw Rl = !1, e = yu, yu = null, e;
    return Pl & 1 && e.tag !== 0 && zr(), o = e.pendingLanes, o & 1 ? e === vu ? Ai++ : (Ai = 0, vu = e) : Ai = 0, Kn(), null
}

function zr() {
    if (An !== null) {
        var e = np(Pl),
            t = Dt.transition,
            n = ge;
        try {
            if (Dt.transition = null, ge = 16 > e ? 16 : e, An === null) var r = !1;
            else {
                if (e = An, An = null, Pl = 0, ue & 6) throw Error(A(331));
                var i = ue;
                for (ue |= 4, z = e.current; z !== null;) {
                    var o = z,
                        l = o.child;
                    if (z.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (z = u; z !== null;) {
                                    var f = z;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ni(8, f, o)
                                    }
                                    var d = f.child;
                                    if (d !== null) d.return = f, z = d;
                                    else
                                        for (; z !== null;) {
                                            f = z;
                                            var y = f.sibling,
                                                g = f.return;
                                            if (pm(f), f === u) {
                                                z = null;
                                                break
                                            }
                                            if (y !== null) {
                                                y.return = g, z = y;
                                                break
                                            }
                                            z = g
                                        }
                                }
                            }
                            var m = o.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null, v = w
                                    } while (v !== null)
                                }
                            }
                            z = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null) l.return = o, z = l;
                    else e: for (; z !== null;) {
                        if (o = z, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ni(9, o, o.return)
                        }
                        var c = o.sibling;
                        if (c !== null) {
                            c.return = o.return, z = c;
                            break e
                        }
                        z = o.return
                    }
                }
                var h = e.current;
                for (z = h; z !== null;) {
                    l = z;
                    var p = l.child;
                    if (l.subtreeFlags & 2064 && p !== null) p.return = l, z = p;
                    else e: for (l = h; z !== null;) {
                        if (s = z, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Vl(9, s)
                            }
                        } catch (E) {
                            Fe(s, s.return, E)
                        }
                        if (s === l) {
                            z = null;
                            break e
                        }
                        var S = s.sibling;
                        if (S !== null) {
                            S.return = s.return, z = S;
                            break e
                        }
                        z = s.return
                    }
                }
                if (ue = i, Kn(), Jt && typeof Jt.onPostCommitFiberRoot == "function") try {
                    Jt.onPostCommitFiberRoot(zl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ge = n, Dt.transition = t
        }
    }
    return !1
}

function md(e, t, n) {
    t = Wr(n, t), t = rm(e, t, 1), e = $n(e, t, 1), t = ut(), e !== null && (io(e, 1, t), vt(e, t))
}

function Fe(e, t, n) {
    if (e.tag === 3) md(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                md(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r))) {
                    e = Wr(n, e), e = im(t, e, 1), t = $n(t, e, 1), e = ut(), t !== null && (io(t, 1, e), vt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function i0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (et & n) === n && (We === 4 || We === 3 && (et & 130023424) === et && 500 > Me() - Pc ? rr(e, 0) : Rc |= n), vt(e, t)
}

function xm(e, t) {
    t === 0 && (e.mode & 1 ? (t = ko, ko <<= 1, !(ko & 130023424) && (ko = 4194304)) : t = 1);
    var n = ut();
    e = mn(e, t), e !== null && (io(e, t, n), vt(e, n))
}

function o0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), xm(e, n)
}

function l0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(A(314))
    }
    r !== null && r.delete(t), xm(e, n)
}
var Rm;
Rm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || mt.current) ht = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ht = !1, qg(e, t, n);
            ht = !!(e.flags & 131072)
        }
    else ht = !1, Ne && t.flags & 1048576 && Tp(t, vl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            qo(e, t), e = t.pendingProps;
            var i = jr(t, st.current);
            $r(t, n), i = wc(null, t, r, e, i, n);
            var o = Sc();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (o = !0, ml(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, pc(t), i.updater = Hl, t.stateNode = i, i._reactInternals = t, ou(t, r, e, n), t = au(null, t, r, !0, o, n)) : (t.tag = 0, Ne && o && sc(t), at(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (qo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = a0(r), e = jt(r, e), i) {
                    case 0:
                        t = su(null, t, r, e, n);
                        break e;
                    case 1:
                        t = od(null, t, r, e, n);
                        break e;
                    case 11:
                        t = rd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = id(null, t, r, jt(r.type, e), n);
                        break e
                }
                throw Error(A(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), su(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), od(e, t, r, i, n);
        case 3:
            e: {
                if (am(t), e === null) throw Error(A(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                Lp(e, t),
                Sl(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Wr(Error(A(423)), t), t = ld(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Wr(Error(A(424)), t), t = ld(e, t, r, n, i);
                    break e
                } else
                    for (St = In(t.stateNode.containerInfo.firstChild), Et = t, Ne = !0, Ht = null, n = Ip(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Br(), r === i) {
                        t = yn(e, t, n);
                        break e
                    }
                    at(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $p(t), e === null && nu(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Xa(r, i) ? l = null : o !== null && Xa(r, o) && (t.flags |= 32), sm(e, t), at(e, t, l, n), t.child;
        case 6:
            return e === null && nu(t), null;
        case 13:
            return um(e, t, n);
        case 4:
            return mc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qr(t, null, r, n) : at(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), rd(e, t, r, i, n);
        case 7:
            return at(e, t, t.pendingProps, n), t.child;
        case 8:
            return at(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return at(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ke(gl, r._currentValue), r._currentValue = l, o !== null)
                    if (qt(o.value, l)) {
                        if (o.children === i.children && !mt.current) {
                            t = yn(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var s = o.dependencies;
                            if (s !== null) {
                                l = o.child;
                                for (var a = s.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = fn(-1, n & -n), a.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ru(o.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (l = o.return, l === null) throw Error(A(341));
                                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), ru(l, n, t), l = o.sibling
                            } else l = o.child;
                            if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (o = l.sibling, o !== null) {
                                        o.return = l.return, l = o;
                                        break
                                    }
                                    l = l.return
                                }
                            o = l
                        }
                at(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, $r(t, n), i = Mt(i), r = r(i), t.flags |= 1, at(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = jt(r, t.pendingProps), i = jt(r.type, i), id(e, t, r, i, n);
        case 15:
            return om(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), qo(e, t), t.tag = 1, yt(r) ? (e = !0, ml(t)) : e = !1, $r(t, n), Fp(t, r, i), ou(t, r, i, n), au(null, t, r, !0, e, n);
        case 19:
            return cm(e, t, n);
        case 22:
            return lm(e, t, n)
    }
    throw Error(A(156, t.tag))
};

function Pm(e, t) {
    return Jh(e, t)
}

function s0(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Lt(e, t, n, r) {
    return new s0(e, t, n, r)
}

function _c(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function a0(e) {
    if (typeof e == "function") return _c(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Gu) return 11;
        if (e === Yu) return 14
    }
    return 2
}

function Un(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Yo(e, t, n, r, i, o) {
    var l = 2;
    if (r = e, typeof e == "function") _c(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case wr:
            return ir(n.children, i, o, t);
        case Ku:
            l = 8, i |= 8;
            break;
        case Na:
            return e = Lt(12, n, t, i | 2), e.elementType = Na, e.lanes = o, e;
        case _a:
            return e = Lt(13, n, t, i), e.elementType = _a, e.lanes = o, e;
        case Aa:
            return e = Lt(19, n, t, i), e.elementType = Aa, e.lanes = o, e;
        case Mh:
            return Kl(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Dh:
                    l = 10;
                    break e;
                case Fh:
                    l = 9;
                    break e;
                case Gu:
                    l = 11;
                    break e;
                case Yu:
                    l = 14;
                    break e;
                case Rn:
                    l = 16, r = null;
                    break e
            }
            throw Error(A(130, e == null ? e : typeof e, ""))
    }
    return t = Lt(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function ir(e, t, n, r) {
    return e = Lt(7, e, r, t), e.lanes = n, e
}

function Kl(e, t, n, r) {
    return e = Lt(22, e, r, t), e.elementType = Mh, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ca(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e
}

function fa(e, t, n) {
    return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function u0(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ws(0), this.expirationTimes = Ws(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ws(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Ac(e, t, n, r, i, o, l, s, a) {
    return e = new u0(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pc(o), e
}

function c0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Om(e) {
    if (!e) return Qn;
    e = e._reactInternals;
    e: {
        if (dr(e) !== e || e.tag !== 1) throw Error(A(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (yt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (yt(n)) return Pp(e, n, t)
    }
    return t
}

function Tm(e, t, n, r, i, o, l, s, a) {
    return e = Ac(n, r, !0, e, i, o, l, s, a), e.context = Om(null), n = e.current, r = ut(), i = bn(n), o = fn(r, i), o.callback = t ? ? null, $n(n, o, i), e.current.lanes = i, io(e, i, r), vt(e, r), e
}

function Gl(e, t, n, r) {
    var i = t.current,
        o = ut(),
        l = bn(i);
    return n = Om(n), t.context === null ? t.context = n : t.pendingContext = n, t = fn(o, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $n(i, t, l), e !== null && (Vt(e, i, l, o), Ho(e, i, l)), l
}

function Tl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function yd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Lc(e, t) {
    yd(e, t), (e = e.alternate) && yd(e, t)
}

function f0() {
    return null
}
var Nm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Dc(e) {
    this._internalRoot = e
}
Yl.prototype.render = Dc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(A(409));
    Gl(e, t, null, null)
};
Yl.prototype.unmount = Dc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ur(function() {
            Gl(null, e, null, null)
        }), t[pn] = null
    }
};

function Yl(e) {
    this._internalRoot = e
}
Yl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = op();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tn.length && t !== 0 && t < Tn[n].priority; n++);
        Tn.splice(n, 0, e), n === 0 && sp(e)
    }
};

function Fc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function vd() {}

function d0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Tl(l);
                o.call(u)
            }
        }
        var l = Tm(t, r, e, 0, null, !1, !1, "", vd);
        return e._reactRootContainer = l, e[pn] = l.current, Hi(e.nodeType === 8 ? e.parentNode : e), ur(), l
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = Tl(a);
            s.call(u)
        }
    }
    var a = Ac(e, 0, !1, null, null, !1, !1, "", vd);
    return e._reactRootContainer = a, e[pn] = a.current, Hi(e.nodeType === 8 ? e.parentNode : e), ur(function() {
        Gl(t, a, n, r)
    }), a
}

function Jl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var a = Tl(l);
                s.call(a)
            }
        }
        Gl(t, l, e, i)
    } else l = d0(n, t, e, i, r);
    return Tl(l)
}
rp = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = wi(t.pendingLanes);
                n !== 0 && (Zu(t, n | 1), vt(t, Me()), !(ue & 6) && (Vr = Me() + 500, Kn()))
            }
            break;
        case 13:
            ur(function() {
                var r = mn(e, 1);
                if (r !== null) {
                    var i = ut();
                    Vt(r, e, 1, i)
                }
            }), Lc(e, 1)
    }
};
ec = function(e) {
    if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
            var n = ut();
            Vt(t, e, 134217728, n)
        }
        Lc(e, 134217728)
    }
};
ip = function(e) {
    if (e.tag === 13) {
        var t = bn(e),
            n = mn(e, t);
        if (n !== null) {
            var r = ut();
            Vt(n, e, t, r)
        }
        Lc(e, t)
    }
};
op = function() {
    return ge
};
lp = function(e, t) {
    var n = ge;
    try {
        return ge = e, t()
    } finally {
        ge = n
    }
};
ja = function(e, t, n) {
    switch (t) {
        case "input":
            if (Fa(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Bl(r);
                        if (!i) throw Error(A(90));
                        $h(r), Fa(r, i)
                    }
                }
            }
            break;
        case "textarea":
            bh(e, n);
            break;
        case "select":
            t = n.value, t != null && Dr(e, !!n.multiple, t, !1)
    }
};
Vh = Oc;
qh = ur;
var h0 = {
        usingClientEntryPoint: !1,
        Events: [lo, kr, Bl, Hh, Wh, Oc]
    },
    hi = {
        findFiberByHostInstance: Jn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    p0 = {
        bundleType: hi.bundleType,
        version: hi.version,
        rendererPackageName: hi.rendererPackageName,
        rendererConfig: hi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: gn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Yh(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: hi.findFiberByHostInstance || f0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber) try {
        zl = Fo.inject(p0), Jt = Fo
    } catch {}
}
kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
kt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fc(t)) throw Error(A(200));
    return c0(e, t, null, n)
};
kt.createRoot = function(e, t) {
    if (!Fc(e)) throw Error(A(299));
    var n = !1,
        r = "",
        i = Nm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ac(e, 1, !1, null, null, n, !1, r, i), e[pn] = t.current, Hi(e.nodeType === 8 ? e.parentNode : e), new Dc(t)
};
kt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = Yh(t), e = e === null ? null : e.stateNode, e
};
kt.flushSync = function(e) {
    return ur(e)
};
kt.hydrate = function(e, t, n) {
    if (!Xl(t)) throw Error(A(200));
    return Jl(null, e, t, !0, n)
};
kt.hydrateRoot = function(e, t, n) {
    if (!Fc(e)) throw Error(A(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        l = Nm;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Tm(t, null, e, 1, n ? ? null, i, !1, o, l), e[pn] = t.current, Hi(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Yl(t)
};
kt.render = function(e, t, n) {
    if (!Xl(t)) throw Error(A(200));
    return Jl(null, e, t, !1, n)
};
kt.unmountComponentAtNode = function(e) {
    if (!Xl(e)) throw Error(A(40));
    return e._reactRootContainer ? (ur(function() {
        Jl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[pn] = null
        })
    }), !0) : !1
};
kt.unstable_batchedUpdates = Oc;
kt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xl(n)) throw Error(A(200));
    if (e == null || e._reactInternals === void 0) throw Error(A(38));
    return Jl(e, t, n, !1, r)
};
kt.version = "18.2.0-next-9e3b772b8-20220608";

function _m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m)
    } catch (e) {
        console.error(e)
    }
}
_m(), Th.exports = kt;
var m0 = Th.exports,
    gd = m0;
Oa.createRoot = gd.createRoot, Oa.hydrateRoot = gd.hydrateRoot;
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pe() {
    return pe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, pe.apply(this, arguments)
}
var Ue;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Ue || (Ue = {}));
const wd = "popstate";

function y0(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: l,
            hash: s
        } = r.location;
        return Zi("", {
            pathname: o,
            search: l,
            hash: s
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : Hn(i)
    }
    return g0(t, n, null, e)
}

function Z(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function qr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function v0() {
    return Math.random().toString(36).substr(2, 8)
}

function Sd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Zi(e, t, n, r) {
    return n === void 0 && (n = null), pe({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? wn(t) : t, {
        state: n,
        key: t && t.key || r || v0()
    })
}

function Hn(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function wn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function g0(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, l = i.history, s = Ue.Pop, a = null, u = f();
    u == null && (u = 0, l.replaceState(pe({}, l.state, {
        idx: u
    }), ""));

    function f() {
        return (l.state || {
            idx: null
        }).idx
    }

    function d() {
        s = Ue.Pop;
        let w = f(),
            c = w == null ? null : w - u;
        u = w, a && a({
            action: s,
            location: v.location,
            delta: c
        })
    }

    function y(w, c) {
        s = Ue.Push;
        let h = Zi(v.location, w, c);
        n && n(h, w), u = f() + 1;
        let p = Sd(h, u),
            S = v.createHref(h);
        try {
            l.pushState(p, "", S)
        } catch {
            i.location.assign(S)
        }
        o && a && a({
            action: s,
            location: v.location,
            delta: 1
        })
    }

    function g(w, c) {
        s = Ue.Replace;
        let h = Zi(v.location, w, c);
        n && n(h, w), u = f();
        let p = Sd(h, u),
            S = v.createHref(h);
        l.replaceState(p, "", S), o && a && a({
            action: s,
            location: v.location,
            delta: 0
        })
    }

    function m(w) {
        let c = i.location.origin !== "null" ? i.location.origin : i.location.href,
            h = typeof w == "string" ? w : Hn(w);
        return Z(c, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, c)
    }
    let v = {
        get action() {
            return s
        },
        get location() {
            return e(i, l)
        },
        listen(w) {
            if (a) throw new Error("A history only accepts one active listener");
            return i.addEventListener(wd, d), a = w, () => {
                i.removeEventListener(wd, d), a = null
            }
        },
        createHref(w) {
            return t(i, w)
        },
        createURL: m,
        encodeLocation(w) {
            let c = m(w);
            return {
                pathname: c.pathname,
                search: c.search,
                hash: c.hash
            }
        },
        push: y,
        replace: g,
        go(w) {
            return l.go(w)
        }
    };
    return v
}
var Qe;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Qe || (Qe = {}));
const w0 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function S0(e) {
    return e.index === !0
}

function Su(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, o) => {
        let l = [...n, o],
            s = typeof i.id == "string" ? i.id : l.join("-");
        if (Z(i.index !== !0 || !i.children, "Cannot specify children on an index route"), Z(!r[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`), S0(i)) {
            let a = pe({}, i, t(i), {
                id: s
            });
            return r[s] = a, a
        } else {
            let a = pe({}, i, t(i), {
                id: s,
                children: void 0
            });
            return r[s] = a, i.children && (a.children = Su(i.children, t, l, r)), a
        }
    })
}

function _r(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? wn(t) : t,
        i = Wn(r.pathname || "/", n);
    if (i == null) return null;
    let o = Am(e);
    E0(o);
    let l = null;
    for (let s = 0; l == null && s < o.length; ++s) l = _0(o[s], D0(i));
    return l
}

function Am(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, l, s) => {
        let a = {
            relativePath: s === void 0 ? o.path || "" : s,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        a.relativePath.startsWith("/") && (Z(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = en([r, a.relativePath]),
            f = n.concat(a);
        o.children && o.children.length > 0 && (Z(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Am(o.children, t, f, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: T0(u, o.index),
            routesMeta: f
        })
    };
    return e.forEach((o, l) => {
        var s;
        if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
        else
            for (let a of Lm(o.path)) i(o, l, a)
    }), t
}

function Lm(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let l = Lm(r.join("/")),
        s = [];
    return s.push(...l.map(a => a === "" ? o : [o, a].join("/"))), i && s.push(...l), s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function E0(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : N0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const C0 = /^:\w+$/,
    k0 = 3,
    x0 = 2,
    R0 = 1,
    P0 = 10,
    O0 = -2,
    Ed = e => e === "*";

function T0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ed) && (r += O0), t && (r += x0), n.filter(i => !Ed(i)).reduce((i, o) => i + (C0.test(o) ? k0 : o === "" ? R0 : P0), r)
}

function N0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function _0(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, i = "/", o = [];
    for (let l = 0; l < n.length; ++l) {
        let s = n[l],
            a = l === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            f = A0({
                path: s.relativePath,
                caseSensitive: s.caseSensitive,
                end: a
            }, u);
        if (!f) return null;
        Object.assign(r, f.params);
        let d = s.route;
        o.push({
            params: r,
            pathname: en([i, f.pathname]),
            pathnameBase: $0(en([i, f.pathnameBase])),
            route: d
        }), f.pathnameBase !== "/" && (i = en([i, f.pathnameBase]))
    }
    return o
}

function A0(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = L0(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        l = o.replace(/(.)\/+$/, "$1"),
        s = i.slice(1);
    return {
        params: r.reduce((u, f, d) => {
            if (f === "*") {
                let y = s[d] || "";
                l = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            return u[f] = F0(s[d] || "", f), u
        }, {}),
        pathname: o,
        pathnameBase: l,
        pattern: e
    }
}

function L0(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), qr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function D0(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return qr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function F0(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return qr(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function Wn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function M0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? wn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : I0(n, t) : t,
        search: z0(r),
        hash: b0(i)
    }
}

function I0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function da(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function ao(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Zl(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = wn(e) : (i = pe({}, e), Z(!i.pathname || !i.pathname.includes("?"), da("?", "pathname", "search", i)), Z(!i.pathname || !i.pathname.includes("#"), da("#", "pathname", "hash", i)), Z(!i.search || !i.search.includes("#"), da("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        l = o ? "/" : i.pathname,
        s;
    if (r || l == null) s = n;
    else {
        let d = t.length - 1;
        if (l.startsWith("..")) {
            let y = l.split("/");
            for (; y[0] === "..";) y.shift(), d -= 1;
            i.pathname = y.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let a = M0(i, s),
        u = l && l !== "/" && l.endsWith("/"),
        f = (o || l === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a
}
const en = e => e.join("/").replace(/\/\/+/g, "/"),
    $0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    z0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    b0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e,
    U0 = function(t, n) {
        n === void 0 && (n = 302);
        let r = n;
        typeof r == "number" ? r = {
            status: r
        } : typeof r.status > "u" && (r.status = 302);
        let i = new Headers(r.headers);
        return i.set("Location", t), new Response(null, pe({}, r, {
            headers: i
        }))
    };
class Mc {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function Dm(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Fm = ["post", "put", "patch", "delete"],
    j0 = new Set(Fm),
    B0 = ["get", ...Fm],
    Q0 = new Set(B0),
    H0 = new Set([301, 302, 303, 307, 308]),
    W0 = new Set([307, 308]),
    ha = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
    },
    V0 = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
    },
    Cd = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    Mm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Im = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    q0 = !Im,
    K0 = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    });

function G0(e) {
    Z(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let t;
    if (e.mapRouteProperties) t = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let x = e.detectErrorBoundary;
        t = O => ({
            hasErrorBoundary: x(O)
        })
    } else t = K0;
    let n = {},
        r = Su(e.routes, t, void 0, n),
        i, o = e.basename || "/",
        l = pe({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
        }, e.future),
        s = null,
        a = new Set,
        u = null,
        f = null,
        d = null,
        y = e.hydrationData != null,
        g = _r(r, e.history.location, o),
        m = null;
    if (g == null) {
        let x = Bt(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: O,
                route: _
            } = Nd(r);
        g = O, m = {
            [_.id]: x
        }
    }
    let v = !g.some(x => x.route.lazy) && (!g.some(x => x.route.loader) || e.hydrationData != null),
        w, c = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: g,
            initialized: v,
            navigation: ha,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || m,
            fetchers: new Map,
            blockers: new Map
        },
        h = Ue.Pop,
        p = !1,
        S, E = !1,
        P = !1,
        T = [],
        R = [],
        M = new Map,
        j = 0,
        le = -1,
        ee = new Map,
        oe = new Set,
        se = new Map,
        ce = new Map,
        fe = new Map,
        ve = !1;

    function L() {
        return s = e.history.listen(x => {
            let {
                action: O,
                location: _,
                delta: U
            } = x;
            if (ve) {
                ve = !1;
                return
            }
            qr(fe.size === 0 || U != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let B = G({
                currentLocation: c.location,
                nextLocation: _,
                historyAction: O
            });
            if (B && U != null) {
                ve = !0, e.history.go(U * -1), nt(B, {
                    state: "blocked",
                    location: _,
                    proceed() {
                        nt(B, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: _
                        }), e.history.go(U)
                    },
                    reset() {
                        zt(B), X({
                            blockers: new Map(w.state.blockers)
                        })
                    }
                });
                return
            }
            return W(O, _)
        }), c.initialized || W(Ue.Pop, c.location), w
    }

    function H() {
        s && s(), a.clear(), S && S.abort(), c.fetchers.forEach((x, O) => $e(O)), c.blockers.forEach((x, O) => zt(O))
    }

    function q(x) {
        return a.add(x), () => a.delete(x)
    }

    function X(x) {
        c = pe({}, c, x), a.forEach(O => O(c))
    }

    function D(x, O) {
        var _, U;
        let B = c.actionData != null && c.navigation.formMethod != null && ln(c.navigation.formMethod) && c.navigation.state === "loading" && ((_ = x.state) == null ? void 0 : _._isRedirect) !== !0,
            Y;
        O.actionData ? Object.keys(O.actionData).length > 0 ? Y = O.actionData : Y = null : B ? Y = c.actionData : Y = null;
        let J = O.loaderData ? Td(c.loaderData, O.loaderData, O.matches || [], O.errors) : c.loaderData;
        for (let [Q] of fe) zt(Q);
        let V = p === !0 || c.navigation.formMethod != null && ln(c.navigation.formMethod) && ((U = x.state) == null ? void 0 : U._isRedirect) !== !0;
        i && (r = i, i = void 0), X(pe({}, O, {
            actionData: Y,
            loaderData: J,
            historyAction: h,
            location: x,
            initialized: !0,
            navigation: ha,
            revalidation: "idle",
            restoreScrollPosition: bt(x, O.matches || c.matches),
            preventScrollReset: V,
            blockers: new Map(c.blockers)
        })), E || h === Ue.Pop || (h === Ue.Push ? e.history.push(x, x.state) : h === Ue.Replace && e.history.replace(x, x.state)), h = Ue.Pop, p = !1, E = !1, P = !1, T = [], R = []
    }
    async function I(x, O) {
        if (typeof x == "number") {
            e.history.go(x);
            return
        }
        let _ = Eu(c.location, c.matches, o, l.v7_prependBasename, x, O == null ? void 0 : O.fromRouteId, O == null ? void 0 : O.relative),
            {
                path: U,
                submission: B,
                error: Y
            } = kd(l.v7_normalizeFormMethod, !1, _, O),
            J = c.location,
            V = Zi(c.location, U, O && O.state);
        V = pe({}, V, e.history.encodeLocation(V));
        let Q = O && O.replace != null ? O.replace : void 0,
            he = Ue.Push;
        Q === !0 ? he = Ue.Replace : Q === !1 || B != null && ln(B.formMethod) && B.formAction === c.location.pathname + c.location.search && (he = Ue.Replace);
        let Ee = O && "preventScrollReset" in O ? O.preventScrollReset === !0 : void 0,
            rt = G({
                currentLocation: J,
                nextLocation: V,
                historyAction: he
            });
        if (rt) {
            nt(rt, {
                state: "blocked",
                location: V,
                proceed() {
                    nt(rt, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: V
                    }), I(x, O)
                },
                reset() {
                    zt(rt), X({
                        blockers: new Map(c.blockers)
                    })
                }
            });
            return
        }
        return await W(he, V, {
            submission: B,
            pendingError: Y,
            preventScrollReset: Ee,
            replace: O && O.replace
        })
    }

    function $() {
        if (qe(), X({
                revalidation: "loading"
            }), c.navigation.state !== "submitting") {
            if (c.navigation.state === "idle") {
                W(c.historyAction, c.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            W(h || c.historyAction, c.navigation.location, {
                overrideNavigation: c.navigation
            })
        }
    }
    async function W(x, O, _) {
        S && S.abort(), S = null, h = x, E = (_ && _.startUninterruptedRevalidation) === !0, ii(c.location, c.matches), p = (_ && _.preventScrollReset) === !0;
        let U = i || r,
            B = _ && _.overrideNavigation,
            Y = _r(U, O, o);
        if (!Y) {
            let Ke = Bt(404, {
                    pathname: O.pathname
                }),
                {
                    matches: Ge,
                    route: Pt
                } = Nd(U);
            xe(), D(O, {
                matches: Ge,
                loaderData: {},
                errors: {
                    [Pt.id]: Ke
                }
            });
            return
        }
        if (c.initialized && e1(c.location, O) && !(_ && _.submission && ln(_.submission.formMethod))) {
            D(O, {
                matches: Y
            });
            return
        }
        S = new AbortController;
        let J = mi(e.history, O, S.signal, _ && _.submission),
            V, Q;
        if (_ && _.pendingError) Q = {
            [Ar(Y).route.id]: _.pendingError
        };
        else if (_ && _.submission && ln(_.submission.formMethod)) {
            let Ke = await C(J, O, _.submission, Y, {
                replace: _.replace
            });
            if (Ke.shortCircuited) return;
            V = Ke.pendingActionData, Q = Ke.pendingActionError, B = pe({
                state: "loading",
                location: O
            }, _.submission), J = new Request(J.url, {
                signal: J.signal
            })
        }
        let {
            shortCircuited: he,
            loaderData: Ee,
            errors: rt
        } = await te(J, O, Y, B, _ && _.submission, _ && _.fetcherSubmission, _ && _.replace, V, Q);
        he || (S = null, D(O, pe({
            matches: Y
        }, V ? {
            actionData: V
        } : {}, {
            loaderData: Ee,
            errors: rt
        })))
    }
    async function C(x, O, _, U, B) {
        qe();
        let Y = pe({
            state: "submitting",
            location: O
        }, _);
        X({
            navigation: Y
        });
        let J, V = Cu(U, O);
        if (!V.route.action && !V.route.lazy) J = {
            type: Qe.error,
            error: Bt(405, {
                method: x.method,
                pathname: O.pathname,
                routeId: V.route.id
            })
        };
        else if (J = await pi("action", x, V, U, n, t, o), x.signal.aborted) return {
            shortCircuited: !0
        };
        if (br(J)) {
            let Q;
            return B && B.replace != null ? Q = B.replace : Q = J.location === c.location.pathname + c.location.search, await K(c, J, {
                submission: _,
                replace: Q
            }), {
                shortCircuited: !0
            }
        }
        if (Li(J)) {
            let Q = Ar(U, V.route.id);
            return (B && B.replace) !== !0 && (h = Ue.Push), {
                pendingActionData: {},
                pendingActionError: {
                    [Q.route.id]: J.error
                }
            }
        }
        if (tr(J)) throw Bt(400, {
            type: "defer-action"
        });
        return {
            pendingActionData: {
                [V.route.id]: J.data
            }
        }
    }
    async function te(x, O, _, U, B, Y, J, V, Q) {
        let he = U;
        he || (he = pe({
            state: "loading",
            location: O,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        }, B));
        let Ee = B || Y ? B || Y : he.formMethod && he.formAction && he.formData && he.formEncType ? {
                formMethod: he.formMethod,
                formAction: he.formAction,
                formData: he.formData,
                formEncType: he.formEncType
            } : void 0,
            rt = i || r,
            [Ke, Ge] = xd(e.history, c, _, Ee, O, P, T, R, se, rt, o, V, Q);
        if (xe(_e => !(_ && _.some(Ot => Ot.route.id === _e)) || Ke && Ke.some(Ot => Ot.route.id === _e)), Ke.length === 0 && Ge.length === 0) {
            let _e = En();
            return D(O, pe({
                matches: _,
                loaderData: {},
                errors: Q || null
            }, V ? {
                actionData: V
            } : {}, _e ? {
                fetchers: new Map(c.fetchers)
            } : {})), {
                shortCircuited: !0
            }
        }
        if (!E) {
            Ge.forEach(Ot => {
                let yr = c.fetchers.get(Ot.key),
                    zs = {
                        state: "loading",
                        data: yr && yr.data,
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0,
                        " _hasFetcherDoneAnything ": !0
                    };
                c.fetchers.set(Ot.key, zs)
            });
            let _e = V || c.actionData;
            X(pe({
                navigation: he
            }, _e ? Object.keys(_e).length === 0 ? {
                actionData: null
            } : {
                actionData: _e
            } : {}, Ge.length > 0 ? {
                fetchers: new Map(c.fetchers)
            } : {}))
        }
        le = ++j, Ge.forEach(_e => {
            _e.controller && M.set(_e.key, _e.controller)
        });
        let Pt = () => Ge.forEach(_e => ne(_e.key));
        S && S.signal.addEventListener("abort", Pt);
        let {
            results: oi,
            loaderResults: Fs,
            fetcherResults: mo
        } = await Ie(c.matches, _, Ke, Ge, x);
        if (x.signal.aborted) return {
            shortCircuited: !0
        };
        S && S.signal.removeEventListener("abort", Pt), Ge.forEach(_e => M.delete(_e.key));
        let Cn = _d(oi);
        if (Cn) return await K(c, Cn, {
            replace: J
        }), {
            shortCircuited: !0
        };
        let {
            loaderData: yo,
            errors: Ms
        } = Od(c, _, Ke, Fs, Q, Ge, mo, ce);
        ce.forEach((_e, Ot) => {
            _e.subscribe(yr => {
                (yr || _e.done) && ce.delete(Ot)
            })
        });
        let Is = En(),
            $s = be(le),
            vo = Is || $s || Ge.length > 0;
        return pe({
            loaderData: yo,
            errors: Ms
        }, vo ? {
            fetchers: new Map(c.fetchers)
        } : {})
    }

    function F(x) {
        return c.fetchers.get(x) || V0
    }

    function Te(x, O, _, U) {
        if (q0) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        M.has(x) && ne(x);
        let B = i || r,
            Y = Eu(c.location, c.matches, o, l.v7_prependBasename, _, O, U == null ? void 0 : U.relative),
            J = _r(B, Y, o);
        if (!J) {
            re(x, O, Bt(404, {
                pathname: Y
            }));
            return
        }
        let {
            path: V,
            submission: Q
        } = kd(l.v7_normalizeFormMethod, !0, Y, U), he = Cu(J, V);
        if (p = (U && U.preventScrollReset) === !0, Q && ln(Q.formMethod)) {
            de(x, O, V, he, J, Q);
            return
        }
        se.set(x, {
            routeId: O,
            path: V
        }), me(x, O, V, he, J, Q)
    }
    async function de(x, O, _, U, B, Y) {
        if (qe(), se.delete(x), !U.route.action && !U.route.lazy) {
            let gt = Bt(405, {
                method: Y.formMethod,
                pathname: _,
                routeId: O
            });
            re(x, O, gt);
            return
        }
        let J = c.fetchers.get(x),
            V = pe({
                state: "submitting"
            }, Y, {
                data: J && J.data,
                " _hasFetcherDoneAnything ": !0
            });
        c.fetchers.set(x, V), X({
            fetchers: new Map(c.fetchers)
        });
        let Q = new AbortController,
            he = mi(e.history, _, Q.signal, Y);
        M.set(x, Q);
        let Ee = await pi("action", he, U, B, n, t, o);
        if (he.signal.aborted) {
            M.get(x) === Q && M.delete(x);
            return
        }
        if (br(Ee)) {
            M.delete(x), oe.add(x);
            let gt = pe({
                state: "loading"
            }, Y, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0
            });
            return c.fetchers.set(x, gt), X({
                fetchers: new Map(c.fetchers)
            }), K(c, Ee, {
                submission: Y,
                isFetchActionRedirect: !0
            })
        }
        if (Li(Ee)) {
            re(x, O, Ee.error);
            return
        }
        if (tr(Ee)) throw Bt(400, {
            type: "defer-action"
        });
        let rt = c.navigation.location || c.location,
            Ke = mi(e.history, rt, Q.signal),
            Ge = i || r,
            Pt = c.navigation.state !== "idle" ? _r(Ge, c.navigation.location, o) : c.matches;
        Z(Pt, "Didn't find any matches after fetcher action");
        let oi = ++j;
        ee.set(x, oi);
        let Fs = pe({
            state: "loading",
            data: Ee.data
        }, Y, {
            " _hasFetcherDoneAnything ": !0
        });
        c.fetchers.set(x, Fs);
        let [mo, Cn] = xd(e.history, c, Pt, Y, rt, P, T, R, se, Ge, o, {
            [U.route.id]: Ee.data
        }, void 0);
        Cn.filter(gt => gt.key !== x).forEach(gt => {
            let bs = gt.key,
                uf = c.fetchers.get(bs),
                Hy = {
                    state: "loading",
                    data: uf && uf.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
            c.fetchers.set(bs, Hy), gt.controller && M.set(bs, gt.controller)
        }), X({
            fetchers: new Map(c.fetchers)
        });
        let yo = () => Cn.forEach(gt => ne(gt.key));
        Q.signal.addEventListener("abort", yo);
        let {
            results: Ms,
            loaderResults: Is,
            fetcherResults: $s
        } = await Ie(c.matches, Pt, mo, Cn, Ke);
        if (Q.signal.aborted) return;
        Q.signal.removeEventListener("abort", yo), ee.delete(x), M.delete(x), Cn.forEach(gt => M.delete(gt.key));
        let vo = _d(Ms);
        if (vo) return K(c, vo);
        let {
            loaderData: _e,
            errors: Ot
        } = Od(c, c.matches, mo, Is, void 0, Cn, $s, ce), yr = {
            state: "idle",
            data: Ee.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
        };
        c.fetchers.set(x, yr);
        let zs = be(oi);
        c.navigation.state === "loading" && oi > le ? (Z(h, "Expected pending action"), S && S.abort(), D(c.navigation.location, {
            matches: Pt,
            loaderData: _e,
            errors: Ot,
            fetchers: new Map(c.fetchers)
        })) : (X(pe({
            errors: Ot,
            loaderData: Td(c.loaderData, _e, Pt, Ot)
        }, zs ? {
            fetchers: new Map(c.fetchers)
        } : {})), P = !1)
    }
    async function me(x, O, _, U, B, Y) {
        let J = c.fetchers.get(x),
            V = pe({
                state: "loading",
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            }, Y, {
                data: J && J.data,
                " _hasFetcherDoneAnything ": !0
            });
        c.fetchers.set(x, V), X({
            fetchers: new Map(c.fetchers)
        });
        let Q = new AbortController,
            he = mi(e.history, _, Q.signal);
        M.set(x, Q);
        let Ee = await pi("loader", he, U, B, n, t, o);
        if (tr(Ee) && (Ee = await Um(Ee, he.signal, !0) || Ee), M.get(x) === Q && M.delete(x), he.signal.aborted) return;
        if (br(Ee)) {
            oe.add(x), await K(c, Ee);
            return
        }
        if (Li(Ee)) {
            let Ke = Ar(c.matches, O);
            c.fetchers.delete(x), X({
                fetchers: new Map(c.fetchers),
                errors: {
                    [Ke.route.id]: Ee.error
                }
            });
            return
        }
        Z(!tr(Ee), "Unhandled fetcher deferred data");
        let rt = {
            state: "idle",
            data: Ee.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
        };
        c.fetchers.set(x, rt), X({
            fetchers: new Map(c.fetchers)
        })
    }
    async function K(x, O, _) {
        var U;
        let {
            submission: B,
            replace: Y,
            isFetchActionRedirect: J
        } = _ === void 0 ? {} : _;
        O.revalidate && (P = !0);
        let V = Zi(x.location, O.location, pe({
            _isRedirect: !0
        }, J ? {
            _isFetchActionRedirect: !0
        } : {}));
        if (Z(V, "Expected a location on the redirect navigation"), Mm.test(O.location) && Im && typeof((U = window) == null ? void 0 : U.location) < "u") {
            let Ge = e.history.createURL(O.location),
                Pt = Wn(Ge.pathname, o) == null;
            if (window.location.origin !== Ge.origin || Pt) {
                Y ? window.location.replace(O.location) : window.location.assign(O.location);
                return
            }
        }
        S = null;
        let Q = Y === !0 ? Ue.Replace : Ue.Push,
            {
                formMethod: he,
                formAction: Ee,
                formEncType: rt,
                formData: Ke
            } = x.navigation;
        !B && he && Ee && Ke && rt && (B = {
            formMethod: he,
            formAction: Ee,
            formEncType: rt,
            formData: Ke
        }), W0.has(O.status) && B && ln(B.formMethod) ? await W(Q, V, {
            submission: pe({}, B, {
                formAction: O.location
            }),
            preventScrollReset: p
        }) : J ? await W(Q, V, {
            overrideNavigation: {
                state: "loading",
                location: V,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            },
            fetcherSubmission: B,
            preventScrollReset: p
        }) : await W(Q, V, {
            overrideNavigation: {
                state: "loading",
                location: V,
                formMethod: B ? B.formMethod : void 0,
                formAction: B ? B.formAction : void 0,
                formEncType: B ? B.formEncType : void 0,
                formData: B ? B.formData : void 0
            },
            preventScrollReset: p
        })
    }
    async function Ie(x, O, _, U, B) {
        let Y = await Promise.all([..._.map(Q => pi("loader", B, Q, O, n, t, o)), ...U.map(Q => Q.matches && Q.match && Q.controller ? pi("loader", mi(e.history, Q.path, Q.controller.signal), Q.match, Q.matches, n, t, o) : {
                type: Qe.error,
                error: Bt(404, {
                    pathname: Q.path
                })
            })]),
            J = Y.slice(0, _.length),
            V = Y.slice(_.length);
        return await Promise.all([Ad(x, _, J, J.map(() => B.signal), !1, c.loaderData), Ad(x, U.map(Q => Q.match), V, U.map(Q => Q.controller ? Q.controller.signal : null), !0)]), {
            results: Y,
            loaderResults: J,
            fetcherResults: V
        }
    }

    function qe() {
        P = !0, T.push(...xe()), se.forEach((x, O) => {
            M.has(O) && (R.push(O), ne(O))
        })
    }

    function re(x, O, _) {
        let U = Ar(c.matches, O);
        $e(x), X({
            errors: {
                [U.route.id]: _
            },
            fetchers: new Map(c.fetchers)
        })
    }

    function $e(x) {
        M.has(x) && ne(x), se.delete(x), ee.delete(x), oe.delete(x), c.fetchers.delete(x)
    }

    function ne(x) {
        let O = M.get(x);
        Z(O, "Expected fetch controller: " + x), O.abort(), M.delete(x)
    }

    function ze(x) {
        for (let O of x) {
            let U = {
                state: "idle",
                data: F(O).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            c.fetchers.set(O, U)
        }
    }

    function En() {
        let x = [],
            O = !1;
        for (let _ of oe) {
            let U = c.fetchers.get(_);
            Z(U, "Expected fetcher: " + _), U.state === "loading" && (oe.delete(_), x.push(_), O = !0)
        }
        return ze(x), O
    }

    function be(x) {
        let O = [];
        for (let [_, U] of ee)
            if (U < x) {
                let B = c.fetchers.get(_);
                Z(B, "Expected fetcher: " + _), B.state === "loading" && (ne(_), ee.delete(_), O.push(_))
            }
        return ze(O), O.length > 0
    }

    function mr(x, O) {
        let _ = c.blockers.get(x) || Cd;
        return fe.get(x) !== O && fe.set(x, O), _
    }

    function zt(x) {
        c.blockers.delete(x), fe.delete(x)
    }

    function nt(x, O) {
        let _ = c.blockers.get(x) || Cd;
        Z(_.state === "unblocked" && O.state === "blocked" || _.state === "blocked" && O.state === "blocked" || _.state === "blocked" && O.state === "proceeding" || _.state === "blocked" && O.state === "unblocked" || _.state === "proceeding" && O.state === "unblocked", "Invalid blocker state transition: " + _.state + " -> " + O.state), c.blockers.set(x, O), X({
            blockers: new Map(c.blockers)
        })
    }

    function G(x) {
        let {
            currentLocation: O,
            nextLocation: _,
            historyAction: U
        } = x;
        if (fe.size === 0) return;
        fe.size > 1 && qr(!1, "A router only supports one blocker at a time");
        let B = Array.from(fe.entries()),
            [Y, J] = B[B.length - 1],
            V = c.blockers.get(Y);
        if (!(V && V.state === "proceeding") && J({
                currentLocation: O,
                nextLocation: _,
                historyAction: U
            })) return Y
    }

    function xe(x) {
        let O = [];
        return ce.forEach((_, U) => {
            (!x || x(U)) && (_.cancel(), O.push(U), ce.delete(U))
        }), O
    }

    function ri(x, O, _) {
        if (u = x, d = O, f = _ || (U => U.key), !y && c.navigation === ha) {
            y = !0;
            let U = bt(c.location, c.matches);
            U != null && X({
                restoreScrollPosition: U
            })
        }
        return () => {
            u = null, d = null, f = null
        }
    }

    function ii(x, O) {
        if (u && f && d) {
            let _ = O.map(B => Ld(B, c.loaderData)),
                U = f(x, _) || x.key;
            u[U] = d()
        }
    }

    function bt(x, O) {
        if (u && f && d) {
            let _ = O.map(Y => Ld(Y, c.loaderData)),
                U = f(x, _) || x.key,
                B = u[U];
            if (typeof B == "number") return B
        }
        return null
    }

    function Qy(x) {
        n = {}, i = Su(x, t, void 0, n)
    }
    return w = {
        get basename() {
            return o
        },
        get state() {
            return c
        },
        get routes() {
            return r
        },
        initialize: L,
        subscribe: q,
        enableScrollRestoration: ri,
        navigate: I,
        fetch: Te,
        revalidate: $,
        createHref: x => e.history.createHref(x),
        encodeLocation: x => e.history.encodeLocation(x),
        getFetcher: F,
        deleteFetcher: $e,
        dispose: H,
        getBlocker: mr,
        deleteBlocker: zt,
        _internalFetchControllers: M,
        _internalActiveDeferreds: ce,
        _internalSetRoutes: Qy
    }, w
}

function Y0(e) {
    return e != null && "formData" in e
}

function Eu(e, t, n, r, i, o, l) {
    let s, a;
    if (o != null && l !== "path") {
        s = [];
        for (let f of t)
            if (s.push(f), f.route.id === o) {
                a = f;
                break
            }
    } else s = t, a = t[t.length - 1];
    let u = Zl(i || ".", ao(s).map(f => f.pathnameBase), Wn(e.pathname, n) || e.pathname, l === "path");
    return i == null && (u.search = e.search, u.hash = e.hash), (i == null || i === "" || i === ".") && a && a.route.index && !Ic(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (u.pathname = u.pathname === "/" ? n : en([n, u.pathname])), Hn(u)
}

function kd(e, t, n, r) {
    if (!r || !Y0(r)) return {
        path: n
    };
    if (r.formMethod && !r1(r.formMethod)) return {
        path: n,
        error: Bt(405, {
            method: r.formMethod
        })
    };
    let i;
    if (r.formData) {
        let s = r.formMethod || "get";
        if (i = {
                formMethod: e ? s.toUpperCase() : s.toLowerCase(),
                formAction: bm(n),
                formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
                formData: r.formData
            }, ln(i.formMethod)) return {
            path: n,
            submission: i
        }
    }
    let o = wn(n),
        l = zm(r.formData);
    return t && o.search && Ic(o.search) && l.append("index", ""), o.search = "?" + l, {
        path: Hn(o),
        submission: i
    }
}

function X0(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function xd(e, t, n, r, i, o, l, s, a, u, f, d, y) {
    let g = y ? Object.values(y)[0] : d ? Object.values(d)[0] : void 0,
        m = e.createURL(t.location),
        v = e.createURL(i),
        w = y ? Object.keys(y)[0] : void 0,
        h = X0(n, w).filter((S, E) => {
            if (S.route.lazy) return !0;
            if (S.route.loader == null) return !1;
            if (J0(t.loaderData, t.matches[E], S) || l.some(R => R === S.route.id)) return !0;
            let P = t.matches[E],
                T = S;
            return Rd(S, pe({
                currentUrl: m,
                currentParams: P.params,
                nextUrl: v,
                nextParams: T.params
            }, r, {
                actionResult: g,
                defaultShouldRevalidate: o || m.pathname + m.search === v.pathname + v.search || m.search !== v.search || $m(P, T)
            }))
        }),
        p = [];
    return a.forEach((S, E) => {
        if (!n.some(M => M.route.id === S.routeId)) return;
        let P = _r(u, S.path, f);
        if (!P) {
            p.push({
                key: E,
                routeId: S.routeId,
                path: S.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let T = Cu(P, S.path);
        if (s.includes(E)) {
            p.push({
                key: E,
                routeId: S.routeId,
                path: S.path,
                matches: P,
                match: T,
                controller: new AbortController
            });
            return
        }
        Rd(T, pe({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: v,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: g,
            defaultShouldRevalidate: o
        })) && p.push({
            key: E,
            routeId: S.routeId,
            path: S.path,
            matches: P,
            match: T,
            controller: new AbortController
        })
    }), [h, p]
}

function J0(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0;
    return r || i
}

function $m(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Rd(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function Pd(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    Z(i, "No route found in manifest");
    let o = {};
    for (let l in r) {
        let a = i[l] !== void 0 && l !== "hasErrorBoundary";
        qr(!a, 'Route "' + i.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')), !a && !w0.has(l) && (o[l] = r[l])
    }
    Object.assign(i, o), Object.assign(i, pe({}, t(i), {
        lazy: void 0
    }))
}
async function pi(e, t, n, r, i, o, l, s, a, u) {
    s === void 0 && (s = !1), a === void 0 && (a = !1);
    let f, d, y, g = w => {
        let c, h = new Promise((p, S) => c = S);
        return y = () => c(), t.signal.addEventListener("abort", y), Promise.race([w({
            request: t,
            params: n.params,
            context: u
        }), h])
    };
    try {
        let w = n.route[e];
        if (n.route.lazy)
            if (w) d = (await Promise.all([g(w), Pd(n.route, o, i)]))[0];
            else if (await Pd(n.route, o, i), w = n.route[e], w) d = await g(w);
        else if (e === "action") {
            let c = new URL(t.url),
                h = c.pathname + c.search;
            throw Bt(405, {
                method: t.method,
                pathname: h,
                routeId: n.route.id
            })
        } else return {
            type: Qe.data,
            data: void 0
        };
        else if (w) d = await g(w);
        else {
            let c = new URL(t.url),
                h = c.pathname + c.search;
            throw Bt(404, {
                pathname: h
            })
        }
        Z(d !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (w) {
        f = Qe.error, d = w
    } finally {
        y && t.signal.removeEventListener("abort", y)
    }
    if (n1(d)) {
        let w = d.status;
        if (H0.has(w)) {
            let p = d.headers.get("Location");
            if (Z(p, "Redirects returned/thrown from loaders/actions must have a Location header"), !Mm.test(p)) p = Eu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, p);
            else if (!s) {
                let S = new URL(t.url),
                    E = p.startsWith("//") ? new URL(S.protocol + p) : new URL(p),
                    P = Wn(E.pathname, l) != null;
                E.origin === S.origin && P && (p = E.pathname + E.search + E.hash)
            }
            if (s) throw d.headers.set("Location", p), d;
            return {
                type: Qe.redirect,
                status: w,
                location: p,
                revalidate: d.headers.get("X-Remix-Revalidate") !== null
            }
        }
        if (a) throw {
            type: f || Qe.data,
            response: d
        };
        let c, h = d.headers.get("Content-Type");
        return h && /\bapplication\/json\b/.test(h) ? c = await d.json() : c = await d.text(), f === Qe.error ? {
            type: f,
            error: new Mc(w, d.statusText, c),
            headers: d.headers
        } : {
            type: Qe.data,
            data: c,
            statusCode: d.status,
            headers: d.headers
        }
    }
    if (f === Qe.error) return {
        type: f,
        error: d
    };
    if (t1(d)) {
        var m, v;
        return {
            type: Qe.deferred,
            deferredData: d,
            statusCode: (m = d.init) == null ? void 0 : m.status,
            headers: ((v = d.init) == null ? void 0 : v.headers) && new Headers(d.init.headers)
        }
    }
    return {
        type: Qe.data,
        data: d
    }
}

function mi(e, t, n, r) {
    let i = e.createURL(bm(t)).toString(),
        o = {
            signal: n
        };
    if (r && ln(r.formMethod)) {
        let {
            formMethod: l,
            formEncType: s,
            formData: a
        } = r;
        o.method = l.toUpperCase(), o.body = s === "application/x-www-form-urlencoded" ? zm(a) : a
    }
    return new Request(i, o)
}

function zm(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
    return t
}

function Z0(e, t, n, r, i) {
    let o = {},
        l = null,
        s, a = !1,
        u = {};
    return n.forEach((f, d) => {
        let y = t[d].route.id;
        if (Z(!br(f), "Cannot handle redirect results in processLoaderData"), Li(f)) {
            let g = Ar(e, y),
                m = f.error;
            r && (m = Object.values(r)[0], r = void 0), l = l || {}, l[g.route.id] == null && (l[g.route.id] = m), o[y] = void 0, a || (a = !0, s = Dm(f.error) ? f.error.status : 500), f.headers && (u[y] = f.headers)
        } else tr(f) ? (i.set(y, f.deferredData), o[y] = f.deferredData.data) : o[y] = f.data, f.statusCode != null && f.statusCode !== 200 && !a && (s = f.statusCode), f.headers && (u[y] = f.headers)
    }), r && (l = r, o[Object.keys(r)[0]] = void 0), {
        loaderData: o,
        errors: l,
        statusCode: s || 200,
        loaderHeaders: u
    }
}

function Od(e, t, n, r, i, o, l, s) {
    let {
        loaderData: a,
        errors: u
    } = Z0(t, n, r, i, s);
    for (let f = 0; f < o.length; f++) {
        let {
            key: d,
            match: y,
            controller: g
        } = o[f];
        Z(l !== void 0 && l[f] !== void 0, "Did not find corresponding fetcher result");
        let m = l[f];
        if (!(g && g.signal.aborted))
            if (Li(m)) {
                let v = Ar(e.matches, y == null ? void 0 : y.route.id);
                u && u[v.route.id] || (u = pe({}, u, {
                    [v.route.id]: m.error
                })), e.fetchers.delete(d)
            } else if (br(m)) Z(!1, "Unhandled fetcher revalidation redirect");
        else if (tr(m)) Z(!1, "Unhandled fetcher deferred data");
        else {
            let v = {
                state: "idle",
                data: m.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            e.fetchers.set(d, v)
        }
    }
    return {
        loaderData: a,
        errors: u
    }
}

function Td(e, t, n, r) {
    let i = pe({}, t);
    for (let o of n) {
        let l = o.route.id;
        if (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && o.route.loader && (i[l] = e[l]), r && r.hasOwnProperty(l)) break
    }
    return i
}

function Ar(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function Nd(e) {
    let t = e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Bt(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: i,
        type: o
    } = t === void 0 ? {} : t, l = "Unknown Server Error", s = "Unknown @remix-run/router error";
    return e === 400 ? (l = "Bad Request", i && n && r ? s = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" && (s = "defer() is not supported in actions")) : e === 403 ? (l = "Forbidden", s = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (l = "Not Found", s = 'No route matches URL "' + n + '"') : e === 405 && (l = "Method Not Allowed", i && n && r ? s = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')), new Mc(e || 500, l, new Error(s), !0)
}

function _d(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (br(n)) return n
    }
}

function bm(e) {
    let t = typeof e == "string" ? wn(e) : e;
    return Hn(pe({}, t, {
        hash: ""
    }))
}

function e1(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function tr(e) {
    return e.type === Qe.deferred
}

function Li(e) {
    return e.type === Qe.error
}

function br(e) {
    return (e && e.type) === Qe.redirect
}

function t1(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function n1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function r1(e) {
    return Q0.has(e.toLowerCase())
}

function ln(e) {
    return j0.has(e.toLowerCase())
}
async function Ad(e, t, n, r, i, o) {
    for (let l = 0; l < n.length; l++) {
        let s = n[l],
            a = t[l];
        if (!a) continue;
        let u = e.find(d => d.route.id === a.route.id),
            f = u != null && !$m(u, a) && (o && o[a.route.id]) !== void 0;
        if (tr(s) && (i || f)) {
            let d = r[l];
            Z(d, "Expected an AbortSignal for revalidating fetcher deferred result"), await Um(s, d, i).then(y => {
                y && (n[l] = y || n[l])
            })
        }
    }
}
async function Um(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: Qe.data,
                data: e.deferredData.unwrappedData
            }
        } catch (i) {
            return {
                type: Qe.error,
                error: i
            }
        }
        return {
            type: Qe.data,
            data: e.deferredData.data
        }
    }
}

function Ic(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Ld(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}

function Cu(e, t) {
    let n = typeof t == "string" ? wn(t).search : t.search;
    if (e[e.length - 1].route.index && Ic(n || "")) return e[e.length - 1];
    let r = ao(e);
    return r[r.length - 1]
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nl() {
    return Nl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Nl.apply(this, arguments)
}
const uo = k.createContext(null),
    $c = k.createContext(null),
    Sn = k.createContext(null),
    es = k.createContext(null),
    nn = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    jm = k.createContext(null);

function i1(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    ti() || Z(!1);
    let {
        basename: r,
        navigator: i
    } = k.useContext(Sn), {
        hash: o,
        pathname: l,
        search: s
    } = ts(e, {
        relative: n
    }), a = l;
    return r !== "/" && (a = l === "/" ? r : en([r, l])), i.createHref({
        pathname: a,
        search: s,
        hash: o
    })
}

function ti() {
    return k.useContext(es) != null
}

function hr() {
    return ti() || Z(!1), k.useContext(es).location
}

function Bm(e) {
    k.useContext(Sn).static || k.useLayoutEffect(e)
}

function zc() {
    let {
        isDataRoute: e
    } = k.useContext(nn);
    return e ? v1() : o1()
}

function o1() {
    ti() || Z(!1);
    let e = k.useContext(uo),
        {
            basename: t,
            navigator: n
        } = k.useContext(Sn),
        {
            matches: r
        } = k.useContext(nn),
        {
            pathname: i
        } = hr(),
        o = JSON.stringify(ao(r).map(a => a.pathnameBase)),
        l = k.useRef(!1);
    return Bm(() => {
        l.current = !0
    }), k.useCallback(function(a, u) {
        if (u === void 0 && (u = {}), !l.current) return;
        if (typeof a == "number") {
            n.go(a);
            return
        }
        let f = Zl(a, JSON.parse(o), i, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : en([t, f.pathname])), (u.replace ? n.replace : n.push)(f, u.state, u)
    }, [t, n, o, i, e])
}
const l1 = k.createContext(null);

function s1(e) {
    let t = k.useContext(nn).outlet;
    return t && k.createElement(l1.Provider, {
        value: e
    }, t)
}

function ts(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        matches: r
    } = k.useContext(nn), {
        pathname: i
    } = hr(), o = JSON.stringify(ao(r).map(l => l.pathnameBase));
    return k.useMemo(() => Zl(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}

function a1(e, t, n) {
    ti() || Z(!1);
    let {
        navigator: r
    } = k.useContext(Sn), {
        matches: i
    } = k.useContext(nn), o = i[i.length - 1], l = o ? o.params : {};
    o && o.pathname;
    let s = o ? o.pathnameBase : "/";
    o && o.route;
    let a = hr(),
        u;
    if (t) {
        var f;
        let v = typeof t == "string" ? wn(t) : t;
        s === "/" || (f = v.pathname) != null && f.startsWith(s) || Z(!1), u = v
    } else u = a;
    let d = u.pathname || "/",
        y = s === "/" ? d : d.slice(s.length) || "/",
        g = _r(e, {
            pathname: y
        }),
        m = h1(g && g.map(v => Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: en([s, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase: v.pathnameBase === "/" ? s : en([s, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
        })), i, n);
    return t && m ? k.createElement(es.Provider, {
        value: {
            location: Nl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Ue.Pop
        }
    }, m) : m
}

function u1() {
    let e = jc(),
        t = Dm(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        o = null;
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? k.createElement("pre", {
        style: i
    }, n) : null, o)
}
const c1 = k.createElement(u1, null);
class f1 extends k.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? k.createElement(nn.Provider, {
            value: this.props.routeContext
        }, k.createElement(jm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function d1(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = k.useContext(uo);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(nn.Provider, {
        value: t
    }, r)
}

function h1(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let o = e,
        l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let s = o.findIndex(a => a.route.id && (l == null ? void 0 : l[a.route.id]));
        s >= 0 || Z(!1), o = o.slice(0, Math.min(o.length, s + 1))
    }
    return o.reduceRight((s, a, u) => {
        let f = a.route.id ? l == null ? void 0 : l[a.route.id] : null,
            d = null;
        n && (d = a.route.errorElement || c1);
        let y = t.concat(o.slice(0, u + 1)),
            g = () => {
                let m;
                return f ? m = d : a.route.Component ? m = k.createElement(a.route.Component, null) : a.route.element ? m = a.route.element : m = s, k.createElement(d1, {
                    match: a,
                    routeContext: {
                        outlet: s,
                        matches: y,
                        isDataRoute: n != null
                    },
                    children: m
                })
            };
        return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? k.createElement(f1, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: f,
            children: g(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : g()
    }, null)
}
var ku;
(function(e) {
    e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
})(ku || (ku = {}));
var vn;
(function(e) {
    e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
})(vn || (vn = {}));

function p1(e) {
    let t = k.useContext(uo);
    return t || Z(!1), t
}

function bc(e) {
    let t = k.useContext($c);
    return t || Z(!1), t
}

function m1(e) {
    let t = k.useContext(nn);
    return t || Z(!1), t
}

function ns(e) {
    let t = m1(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Z(!1), n.route.id
}

function y1() {
    return ns(vn.UseRouteId)
}

function Uc() {
    return bc(vn.UseNavigation).navigation
}

function Qm() {
    let e = bc(vn.UseLoaderData),
        t = ns(vn.UseLoaderData);
    if (e.errors && e.errors[t] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
        return
    }
    return e.loaderData[t]
}

function jc() {
    var e;
    let t = k.useContext(jm),
        n = bc(vn.UseRouteError),
        r = ns(vn.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function v1() {
    let {
        router: e
    } = p1(ku.UseNavigateStable), t = ns(vn.UseNavigateStable), n = k.useRef(!1);
    return Bm(() => {
        n.current = !0
    }), k.useCallback(function(i, o) {
        o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Nl({
            fromRouteId: t
        }, o)))
    }, [e, t])
}

function g1(e) {
    let {
        fallbackElement: t,
        router: n
    } = e, [r, i] = k.useState(n.state);
    k.useLayoutEffect(() => n.subscribe(i), [n, i]);
    let o = k.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: a => n.navigate(a),
            push: (a, u, f) => n.navigate(a, {
                state: u,
                preventScrollReset: f == null ? void 0 : f.preventScrollReset
            }),
            replace: (a, u, f) => n.navigate(a, {
                replace: !0,
                state: u,
                preventScrollReset: f == null ? void 0 : f.preventScrollReset
            })
        }), [n]),
        l = n.basename || "/",
        s = k.useMemo(() => ({
            router: n,
            navigator: o,
            static: !1,
            basename: l
        }), [n, o, l]);
    return k.createElement(k.Fragment, null, k.createElement(uo.Provider, {
        value: s
    }, k.createElement($c.Provider, {
        value: r
    }, k.createElement(C1, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: o
    }, n.state.initialized ? k.createElement(w1, {
        routes: n.routes,
        state: r
    }) : t))), null)
}

function w1(e) {
    let {
        routes: t,
        state: n
    } = e;
    return a1(t, void 0, n)
}

function S1(e) {
    let {
        to: t,
        replace: n,
        state: r,
        relative: i
    } = e;
    ti() || Z(!1);
    let {
        matches: o
    } = k.useContext(nn), {
        pathname: l
    } = hr(), s = zc(), a = Zl(t, ao(o).map(f => f.pathnameBase), l, i === "path"), u = JSON.stringify(a);
    return k.useEffect(() => s(JSON.parse(u), {
        replace: n,
        state: r,
        relative: i
    }), [s, u, i, n, r]), null
}

function E1(e) {
    return s1(e.context)
}

function C1(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Ue.Pop,
        navigator: o,
        static: l = !1
    } = e;
    ti() && Z(!1);
    let s = t.replace(/^\/*/, "/"),
        a = k.useMemo(() => ({
            basename: s,
            navigator: o,
            static: l
        }), [s, o, l]);
    typeof r == "string" && (r = wn(r));
    let {
        pathname: u = "/",
        search: f = "",
        hash: d = "",
        state: y = null,
        key: g = "default"
    } = r, m = k.useMemo(() => {
        let v = Wn(u, s);
        return v == null ? null : {
            location: {
                pathname: v,
                search: f,
                hash: d,
                state: y,
                key: g
            },
            navigationType: i
        }
    }, [s, u, f, d, y, g, i]);
    return m == null ? null : k.createElement(Sn.Provider, {
        value: a
    }, k.createElement(es.Provider, {
        children: n,
        value: m
    }))
}
var Dd;
(function(e) {
    e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
})(Dd || (Dd = {}));
new Promise(() => {});

function k1(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tn() {
    return tn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, tn.apply(this, arguments)
}

function Bc(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
const Xo = "get",
    pa = "application/x-www-form-urlencoded";

function rs(e) {
    return e != null && typeof e.tagName == "string"
}

function x1(e) {
    return rs(e) && e.tagName.toLowerCase() === "button"
}

function R1(e) {
    return rs(e) && e.tagName.toLowerCase() === "form"
}

function P1(e) {
    return rs(e) && e.tagName.toLowerCase() === "input"
}

function O1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function T1(e, t) {
    return e.button === 0 && (!t || t === "_self") && !O1(e)
}

function N1(e, t, n) {
    let r, i = null,
        o, l;
    if (R1(e)) {
        let s = t.submissionTrigger;
        if (t.action) i = t.action;
        else {
            let a = e.getAttribute("action");
            i = a ? Wn(a, n) : null
        }
        r = t.method || e.getAttribute("method") || Xo, o = t.encType || e.getAttribute("enctype") || pa, l = new FormData(e), s && s.name && l.append(s.name, s.value)
    } else if (x1(e) || P1(e) && (e.type === "submit" || e.type === "image")) {
        let s = e.form;
        if (s == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        if (t.action) i = t.action;
        else {
            let a = e.getAttribute("formaction") || s.getAttribute("action");
            i = a ? Wn(a, n) : null
        }
        r = t.method || e.getAttribute("formmethod") || s.getAttribute("method") || Xo, o = t.encType || e.getAttribute("formenctype") || s.getAttribute("enctype") || pa, l = new FormData(s), e.name && l.append(e.name, e.value)
    } else {
        if (rs(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        if (r = t.method || Xo, i = t.action || null, o = t.encType || pa, e instanceof FormData) l = e;
        else if (l = new FormData, e instanceof URLSearchParams)
            for (let [s, a] of e) l.append(s, a);
        else if (e != null)
            for (let s of Object.keys(e)) l.append(s, e[s])
    }
    return {
        action: i,
        method: r.toLowerCase(),
        encType: o,
        formData: l
    }
}
const _1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
    A1 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
    L1 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];

function D1(e, t) {
    return G0({
        basename: t == null ? void 0 : t.basename,
        future: tn({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: y0({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || F1(),
        routes: e,
        mapRouteProperties: k1
    }).initialize()
}

function F1() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = tn({}, t, {
        errors: M1(t.errors)
    })), t
}

function M1(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse") n[r] = new Mc(i.status, i.statusText, i.data, i.internal === !0);
        else if (i && i.__type === "Error") {
        let o = new Error(i.message);
        o.stack = "", n[r] = o
    } else n[r] = i;
    return n
}
const I1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    $1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Qc = k.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: o,
            replace: l,
            state: s,
            target: a,
            to: u,
            preventScrollReset: f
        } = t, d = Bc(t, _1), {
            basename: y
        } = k.useContext(Sn), g, m = !1;
        if (typeof u == "string" && $1.test(u) && (g = u, I1)) try {
            let h = new URL(window.location.href),
                p = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
                S = Wn(p.pathname, y);
            p.origin === h.origin && S != null ? u = S + p.search + p.hash : m = !0
        } catch {}
        let v = i1(u, {
                relative: i
            }),
            w = U1(u, {
                replace: l,
                state: s,
                target: a,
                preventScrollReset: f,
                relative: i
            });

        function c(h) {
            r && r(h), h.defaultPrevented || w(h)
        }
        return k.createElement("a", tn({}, d, {
            href: g || v,
            onClick: m || o ? r : c,
            ref: n,
            target: a
        }))
    }),
    ma = k.forwardRef(function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: i = !1,
            className: o = "",
            end: l = !1,
            style: s,
            to: a,
            children: u
        } = t, f = Bc(t, A1), d = ts(a, {
            relative: f.relative
        }), y = hr(), g = k.useContext($c), {
            navigator: m
        } = k.useContext(Sn), v = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, w = y.pathname, c = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        i || (w = w.toLowerCase(), c = c ? c.toLowerCase() : null, v = v.toLowerCase());
        let h = w === v || !l && w.startsWith(v) && w.charAt(v.length) === "/",
            p = c != null && (c === v || !l && c.startsWith(v) && c.charAt(v.length) === "/"),
            S = h ? r : void 0,
            E;
        typeof o == "function" ? E = o({
            isActive: h,
            isPending: p
        }) : E = [o, h ? "active" : null, p ? "pending" : null].filter(Boolean).join(" ");
        let P = typeof s == "function" ? s({
            isActive: h,
            isPending: p
        }) : s;
        return k.createElement(Qc, tn({}, f, {
            "aria-current": S,
            className: E,
            ref: n,
            style: P,
            to: a
        }), typeof u == "function" ? u({
            isActive: h,
            isPending: p
        }) : u)
    }),
    Hm = k.forwardRef((e, t) => k.createElement(z1, tn({}, e, {
        ref: t
    }))),
    z1 = k.forwardRef((e, t) => {
        let {
            reloadDocument: n,
            replace: r,
            method: i = Xo,
            action: o,
            onSubmit: l,
            fetcherKey: s,
            routeId: a,
            relative: u,
            preventScrollReset: f
        } = e, d = Bc(e, L1), y = j1(s, a), g = i.toLowerCase() === "get" ? "get" : "post", m = B1(o, {
            relative: u
        }), v = w => {
            if (l && l(w), w.defaultPrevented) return;
            w.preventDefault();
            let c = w.nativeEvent.submitter,
                h = (c == null ? void 0 : c.getAttribute("formmethod")) || i;
            y(c || w.currentTarget, {
                method: h,
                replace: r,
                relative: u,
                preventScrollReset: f
            })
        };
        return k.createElement("form", tn({
            ref: t,
            method: g,
            action: m,
            onSubmit: n ? l : v
        }, d))
    });
var xu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
})(xu || (xu = {}));
var Fd;
(function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Fd || (Fd = {}));

function b1(e) {
    let t = k.useContext(uo);
    return t || Z(!1), t
}

function U1(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: o,
        relative: l
    } = t === void 0 ? {} : t, s = zc(), a = hr(), u = ts(e, {
        relative: l
    });
    return k.useCallback(f => {
        if (T1(f, n)) {
            f.preventDefault();
            let d = r !== void 0 ? r : Hn(a) === Hn(u);
            s(e, {
                replace: d,
                state: i,
                preventScrollReset: o,
                relative: l
            })
        }
    }, [a, s, u, r, i, n, e, o, l])
}

function j1(e, t) {
    let {
        router: n
    } = b1(xu.UseSubmitImpl), {
        basename: r
    } = k.useContext(Sn), i = y1();
    return k.useCallback(function(o, l) {
        if (l === void 0 && (l = {}), typeof document > "u") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
        let {
            action: s,
            method: a,
            encType: u,
            formData: f
        } = N1(o, l, r), d = {
            preventScrollReset: l.preventScrollReset,
            formData: f,
            formMethod: a,
            formEncType: u
        };
        e ? (t == null && Z(!1), n.fetch(e, t, s, d)) : n.navigate(s, tn({}, d, {
            replace: l.replace,
            fromRouteId: i
        }))
    }, [n, r, e, t, i])
}

function B1(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        basename: r
    } = k.useContext(Sn), i = k.useContext(nn);
    i || Z(!1);
    let [o] = i.matches.slice(-1), l = tn({}, ts(e || ".", {
        relative: n
    })), s = hr();
    if (e == null && (l.search = s.search, l.hash = s.hash, o.route.index)) {
        let a = new URLSearchParams(l.search);
        a.delete("index"), l.search = a.toString() ? "?" + a.toString() : ""
    }
    return (!e || e === ".") && o.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (l.pathname = l.pathname === "/" ? r : en([r, l.pathname])), Hn(l)
}
class co {
    constructor() {
        this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        const n = {
            listener: t
        };
        return this.listeners.add(n), this.onSubscribe(), () => {
            this.listeners.delete(n), this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
const eo = typeof window > "u" || "Deno" in window;

function Tt() {}

function Q1(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ru(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Wm(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Ei(e, t, n) {
    return is(e) ? typeof t == "function" ? { ...n,
        queryKey: e,
        queryFn: t
    } : { ...t,
        queryKey: e
    } : e
}

function On(e, t, n) {
    return is(e) ? [{ ...t,
        queryKey: e
    }, n] : [e || {}, t]
}

function Md(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: i,
        predicate: o,
        queryKey: l,
        stale: s
    } = e;
    if (is(l)) {
        if (r) {
            if (t.queryHash !== Hc(l, t.options)) return !1
        } else if (!_l(t.queryKey, l)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || typeof i < "u" && i !== t.state.fetchStatus || o && !o(t))
}

function Id(e, t) {
    const {
        exact: n,
        fetching: r,
        predicate: i,
        mutationKey: o
    } = e;
    if (is(o)) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (nr(t.options.mutationKey) !== nr(o)) return !1
        } else if (!_l(t.options.mutationKey, o)) return !1
    }
    return !(typeof r == "boolean" && t.state.status === "loading" !== r || i && !i(t))
}

function Hc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || nr)(e)
}

function nr(e) {
    return JSON.stringify(e, (t, n) => Pu(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n)
}

function _l(e, t) {
    return Vm(e, t)
}

function Vm(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Vm(e[n], t[n])) : !1
}

function qm(e, t) {
    if (e === t) return e;
    const n = zd(e) && zd(t);
    if (n || Pu(e) && Pu(t)) {
        const r = n ? e.length : Object.keys(e).length,
            i = n ? t : Object.keys(t),
            o = i.length,
            l = n ? [] : {};
        let s = 0;
        for (let a = 0; a < o; a++) {
            const u = n ? a : i[a];
            l[u] = qm(e[u], t[u]), l[u] === e[u] && s++
        }
        return r === o && s === r ? e : l
    }
    return t
}

function $d(e, t) {
    if (e && !t || t && !e) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function zd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Pu(e) {
    if (!bd(e)) return !1;
    const t = e.constructor;
    if (typeof t > "u") return !0;
    const n = t.prototype;
    return !(!bd(n) || !n.hasOwnProperty("isPrototypeOf"))
}

function bd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function is(e) {
    return Array.isArray(e)
}

function Km(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function Ud(e) {
    Km(0).then(e)
}

function H1() {
    if (typeof AbortController == "function") return new AbortController
}

function Ou(e, t, n) {
    return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? qm(e, t) : t
}
class W1 extends co {
    constructor() {
        super(), this.setup = t => {
            if (!eo && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => {
                    window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n)
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this), this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        })
    }
    setFocused(t) {
        this.focused = t, t && this.onFocus()
    }
    onFocus() {
        this.listeners.forEach(({
            listener: t
        }) => {
            t()
        })
    }
    isFocused() {
        return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
    }
}
const Al = new W1;
class V1 extends co {
    constructor() {
        super(), this.setup = t => {
            if (!eo && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("online", n, !1), window.addEventListener("offline", n, !1), () => {
                    window.removeEventListener("online", n), window.removeEventListener("offline", n)
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this), this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t(r => {
            typeof r == "boolean" ? this.setOnline(r) : this.onOnline()
        })
    }
    setOnline(t) {
        this.online = t, t && this.onOnline()
    }
    onOnline() {
        this.listeners.forEach(({
            listener: t
        }) => {
            t()
        })
    }
    isOnline() {
        return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
    }
}
const Ll = new V1;

function q1(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function os(e) {
    return (e ? ? "online") === "online" ? Ll.isOnline() : !0
}
class Gm {
    constructor(t) {
        this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
}

function Jo(e) {
    return e instanceof Gm
}

function Ym(e) {
    let t = !1,
        n = 0,
        r = !1,
        i, o, l;
    const s = new Promise((w, c) => {
            o = w, l = c
        }),
        a = w => {
            r || (g(new Gm(w)), e.abort == null || e.abort())
        },
        u = () => {
            t = !0
        },
        f = () => {
            t = !1
        },
        d = () => !Al.isFocused() || e.networkMode !== "always" && !Ll.isOnline(),
        y = w => {
            r || (r = !0, e.onSuccess == null || e.onSuccess(w), i == null || i(), o(w))
        },
        g = w => {
            r || (r = !0, e.onError == null || e.onError(w), i == null || i(), l(w))
        },
        m = () => new Promise(w => {
            i = c => {
                const h = r || !d();
                return h && w(c), h
            }, e.onPause == null || e.onPause()
        }).then(() => {
            i = void 0, r || e.onContinue == null || e.onContinue()
        }),
        v = () => {
            if (r) return;
            let w;
            try {
                w = e.fn()
            } catch (c) {
                w = Promise.reject(c)
            }
            Promise.resolve(w).then(y).catch(c => {
                var h, p;
                if (r) return;
                const S = (h = e.retry) != null ? h : 3,
                    E = (p = e.retryDelay) != null ? p : q1,
                    P = typeof E == "function" ? E(n, c) : E,
                    T = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, c);
                if (t || !T) {
                    g(c);
                    return
                }
                n++, e.onFail == null || e.onFail(n, c), Km(P).then(() => {
                    if (d()) return m()
                }).then(() => {
                    t ? g(c) : v()
                })
            })
        };
    return os(e.networkMode) ? v() : m().then(v), {
        promise: s,
        cancel: a,
        continue: () => (i == null ? void 0 : i()) ? s : Promise.resolve(),
        cancelRetry: u,
        continueRetry: f
    }
}
const Wc = console;

function K1() {
    let e = [],
        t = 0,
        n = f => {
            f()
        },
        r = f => {
            f()
        };
    const i = f => {
            let d;
            t++;
            try {
                d = f()
            } finally {
                t--, t || s()
            }
            return d
        },
        o = f => {
            t ? e.push(f) : Ud(() => {
                n(f)
            })
        },
        l = f => (...d) => {
            o(() => {
                f(...d)
            })
        },
        s = () => {
            const f = e;
            e = [], f.length && Ud(() => {
                r(() => {
                    f.forEach(d => {
                        n(d)
                    })
                })
            })
        };
    return {
        batch: i,
        batchCalls: l,
        schedule: o,
        setNotifyFunction: f => {
            n = f
        },
        setBatchNotifyFunction: f => {
            r = f
        }
    }
}
const je = K1();
class Xm {
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), Ru(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
            this.optionalRemove()
        }, this.cacheTime))
    }
    updateCacheTime(t) {
        this.cacheTime = Math.max(this.cacheTime || 0, t ? ? (eo ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
    }
}
class G1 extends Xm {
    constructor(t) {
        super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || Wc, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || Y1(this.options), this.state = this.initialState, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    setOptions(t) {
        this.options = { ...this.defaultOptions,
            ...t
        }, this.updateCacheTime(this.options.cacheTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this)
    }
    setData(t, n) {
        const r = Ou(this.state.data, t, this.options);
        return this.dispatch({
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }), r
    }
    setState(t, n) {
        this.dispatch({
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var n;
        const r = this.promise;
        return (n = this.retryer) == null || n.cancel(t), r ? r.then(Tt).catch(Tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(), this.setState(this.initialState)
    }
    isActive() {
        return this.observers.some(t => t.options.enabled !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
    }
    isStaleByTime(t = 0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !Wm(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
        n && n.refetch({
            cancelRefetch: !1
        }), (t = this.retryer) == null || t.continue()
    }
    onOnline() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnReconnect());
        n && n.refetch({
            cancelRefetch: !1
        }), (t = this.retryer) == null || t.continue()
    }
    addObserver(t) {
        this.observers.indexOf(t) === -1 && (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.indexOf(t) !== -1 && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
        }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.dispatch({
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var r, i;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.promise) {
                var o;
                return (o = this.retryer) == null || o.continueRetry(), this.promise
            }
        }
        if (t && this.setOptions(t), !this.options.queryFn) {
            const g = this.observers.find(m => m.options.queryFn);
            g && this.setOptions(g.options)
        }
        Array.isArray(this.options.queryKey);
        const l = H1(),
            s = {
                queryKey: this.queryKey,
                pageParam: void 0,
                meta: this.meta
            },
            a = g => {
                Object.defineProperty(g, "signal", {
                    enumerable: !0,
                    get: () => {
                        if (l) return this.abortSignalConsumed = !0, l.signal
                    }
                })
            };
        a(s);
        const u = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(s)) : Promise.reject("Missing queryFn"),
            f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: u
            };
        if (a(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
            var d;
            this.dispatch({
                type: "fetch",
                meta: (d = f.fetchOptions) == null ? void 0 : d.meta
            })
        }
        const y = g => {
            if (Jo(g) && g.silent || this.dispatch({
                    type: "error",
                    error: g
                }), !Jo(g)) {
                var m, v, w, c;
                (m = (v = this.cache.config).onError) == null || m.call(v, g, this), (w = (c = this.cache.config).onSettled) == null || w.call(c, this.state.data, g, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
        };
        return this.retryer = Ym({
            fn: f.fetchFn,
            abort: l == null ? void 0 : l.abort.bind(l),
            onSuccess: g => {
                var m, v, w, c;
                if (typeof g > "u") {
                    y(new Error(this.queryHash + " data is undefined"));
                    return
                }
                this.setData(g), (m = (v = this.cache.config).onSuccess) == null || m.call(v, g, this), (w = (c = this.cache.config).onSettled) == null || w.call(c, g, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            },
            onError: y,
            onFail: (g, m) => {
                this.dispatch({
                    type: "failed",
                    failureCount: g,
                    error: m
                })
            },
            onPause: () => {
                this.dispatch({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.dispatch({
                    type: "continue"
                })
            },
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode
        }), this.promise = this.retryer.promise, this.promise
    }
    dispatch(t) {
        const n = r => {
            var i, o;
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: (i = t.meta) != null ? i : null,
                        fetchStatus: os(this.options.networkMode) ? "fetching" : "paused",
                        ...!r.dataUpdatedAt && {
                            error: null,
                            status: "loading"
                        }
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const l = t.error;
                    return Jo(l) && l.revert && this.revertState ? { ...this.revertState
                    } : { ...r,
                        error: l,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: l,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), je.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate(t)
            }), this.cache.notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }
}

function Y1(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = typeof t < "u",
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "loading",
        fetchStatus: "idle"
    }
}
class X1 extends co {
    constructor(t) {
        super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
    }
    build(t, n, r) {
        var i;
        const o = n.queryKey,
            l = (i = n.queryHash) != null ? i : Hc(o, n);
        let s = this.get(l);
        return s || (s = new G1({
            cache: this,
            logger: t.getLogger(),
            queryKey: o,
            queryHash: l,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }), this.add(s)), s
    }
    add(t) {
        this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = this.queriesMap[t.queryHash];
        n && (t.destroy(), this.queries = this.queries.filter(r => r !== t), n === t && delete this.queriesMap[t.queryHash], this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        je.batch(() => {
            this.queries.forEach(t => {
                this.remove(t)
            })
        })
    }
    get(t) {
        return this.queriesMap[t]
    }
    getAll() {
        return this.queries
    }
    find(t, n) {
        const [r] = On(t, n);
        return typeof r.exact > "u" && (r.exact = !0), this.queries.find(i => Md(r, i))
    }
    findAll(t, n) {
        const [r] = On(t, n);
        return Object.keys(r).length > 0 ? this.queries.filter(i => Md(r, i)) : this.queries
    }
    notify(t) {
        je.batch(() => {
            this.listeners.forEach(({
                listener: n
            }) => {
                n(t)
            })
        })
    }
    onFocus() {
        je.batch(() => {
            this.queries.forEach(t => {
                t.onFocus()
            })
        })
    }
    onOnline() {
        je.batch(() => {
            this.queries.forEach(t => {
                t.onOnline()
            })
        })
    }
}
class J1 extends Xm {
    constructor(t) {
        super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || Wc, this.observers = [], this.state = t.state || Z1(), this.setOptions(t.options), this.scheduleGc()
    }
    setOptions(t) {
        this.options = { ...this.defaultOptions,
            ...t
        }, this.updateCacheTime(this.options.cacheTime)
    }
    get meta() {
        return this.options.meta
    }
    setState(t) {
        this.dispatch({
            type: "setState",
            state: t
        })
    }
    addObserver(t) {
        this.observers.indexOf(t) === -1 && (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers = this.observers.filter(n => n !== t), this.scheduleGc(), this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this))
    }
    continue () {
        var t, n;
        return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute()
    }
    async execute() {
        const t = () => {
                var T;
                return this.retryer = Ym({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                    onFail: (R, M) => {
                        this.dispatch({
                            type: "failed",
                            failureCount: R,
                            error: M
                        })
                    },
                    onPause: () => {
                        this.dispatch({
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        this.dispatch({
                            type: "continue"
                        })
                    },
                    retry: (T = this.options.retry) != null ? T : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode
                }), this.retryer.promise
            },
            n = this.state.status === "loading";
        try {
            var r, i, o, l, s, a, u, f;
            if (!n) {
                var d, y, g, m;
                this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }), await ((d = (y = this.mutationCache.config).onMutate) == null ? void 0 : d.call(y, this.state.variables, this));
                const R = await ((g = (m = this.options).onMutate) == null ? void 0 : g.call(m, this.state.variables));
                R !== this.state.context && this.dispatch({
                    type: "loading",
                    context: R,
                    variables: this.state.variables
                })
            }
            const T = await t();
            return await ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, T, this.state.variables, this.state.context, this)), await ((o = (l = this.options).onSuccess) == null ? void 0 : o.call(l, T, this.state.variables, this.state.context)), await ((s = (a = this.mutationCache.config).onSettled) == null ? void 0 : s.call(a, T, null, this.state.variables, this.state.context, this)), await ((u = (f = this.options).onSettled) == null ? void 0 : u.call(f, T, null, this.state.variables, this.state.context)), this.dispatch({
                type: "success",
                data: T
            }), T
        } catch (T) {
            try {
                var v, w, c, h, p, S, E, P;
                throw await ((v = (w = this.mutationCache.config).onError) == null ? void 0 : v.call(w, T, this.state.variables, this.state.context, this)), await ((c = (h = this.options).onError) == null ? void 0 : c.call(h, T, this.state.variables, this.state.context)), await ((p = (S = this.mutationCache.config).onSettled) == null ? void 0 : p.call(S, void 0, T, this.state.variables, this.state.context, this)), await ((E = (P = this.options).onSettled) == null ? void 0 : E.call(P, void 0, T, this.state.variables, this.state.context)), T
            } finally {
                this.dispatch({
                    type: "error",
                    error: T
                })
            }
        }
    }
    dispatch(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "loading":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: !os(this.options.networkMode),
                        status: "loading",
                        variables: t.variables
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), je.batch(() => {
            this.observers.forEach(r => {
                r.onMutationUpdate(t)
            }), this.mutationCache.notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }
}

function Z1() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
class ew extends co {
    constructor(t) {
        super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
    }
    build(t, n, r) {
        const i = new J1({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(n),
            state: r,
            defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0
        });
        return this.add(i), i
    }
    add(t) {
        this.mutations.push(t), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        this.mutations = this.mutations.filter(n => n !== t), this.notify({
            type: "removed",
            mutation: t
        })
    }
    clear() {
        je.batch(() => {
            this.mutations.forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return this.mutations
    }
    find(t) {
        return typeof t.exact > "u" && (t.exact = !0), this.mutations.find(n => Id(t, n))
    }
    findAll(t) {
        return this.mutations.filter(n => Id(t, n))
    }
    notify(t) {
        je.batch(() => {
            this.listeners.forEach(({
                listener: n
            }) => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        var t;
        return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then(() => {
            const n = this.mutations.filter(r => r.state.isPaused);
            return je.batch(() => n.reduce((r, i) => r.then(() => i.continue().catch(Tt)), Promise.resolve()))
        }).then(() => {
            this.resuming = void 0
        }), this.resuming
    }
}

function tw() {
    return {
        onFetch: e => {
            e.fetchFn = () => {
                var t, n, r, i, o, l;
                const s = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage,
                    a = (r = e.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore,
                    u = a == null ? void 0 : a.pageParam,
                    f = (a == null ? void 0 : a.direction) === "forward",
                    d = (a == null ? void 0 : a.direction) === "backward",
                    y = ((o = e.state.data) == null ? void 0 : o.pages) || [],
                    g = ((l = e.state.data) == null ? void 0 : l.pageParams) || [];
                let m = g,
                    v = !1;
                const w = P => {
                        Object.defineProperty(P, "signal", {
                            enumerable: !0,
                            get: () => {
                                var T;
                                if ((T = e.signal) != null && T.aborted) v = !0;
                                else {
                                    var R;
                                    (R = e.signal) == null || R.addEventListener("abort", () => {
                                        v = !0
                                    })
                                }
                                return e.signal
                            }
                        })
                    },
                    c = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
                    h = (P, T, R, M) => (m = M ? [T, ...m] : [...m, T], M ? [R, ...P] : [...P, R]),
                    p = (P, T, R, M) => {
                        if (v) return Promise.reject("Cancelled");
                        if (typeof R > "u" && !T && P.length) return Promise.resolve(P);
                        const j = {
                            queryKey: e.queryKey,
                            pageParam: R,
                            meta: e.options.meta
                        };
                        w(j);
                        const le = c(j);
                        return Promise.resolve(le).then(oe => h(P, R, oe, M))
                    };
                let S;
                if (!y.length) S = p([]);
                else if (f) {
                    const P = typeof u < "u",
                        T = P ? u : jd(e.options, y);
                    S = p(y, P, T)
                } else if (d) {
                    const P = typeof u < "u",
                        T = P ? u : nw(e.options, y);
                    S = p(y, P, T, !0)
                } else {
                    m = [];
                    const P = typeof e.options.getNextPageParam > "u";
                    S = (s && y[0] ? s(y[0], 0, y) : !0) ? p([], P, g[0]) : Promise.resolve(h([], g[0], y[0]));
                    for (let R = 1; R < y.length; R++) S = S.then(M => {
                        if (s && y[R] ? s(y[R], R, y) : !0) {
                            const le = P ? g[R] : jd(e.options, M);
                            return p(M, P, le)
                        }
                        return Promise.resolve(h(M, g[R], y[R]))
                    })
                }
                return S.then(P => ({
                    pages: P,
                    pageParams: m
                }))
            }
        }
    }
}

function jd(e, t) {
    return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}

function nw(e, t) {
    return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
}
class rw {
    constructor(t = {}) {
        this.queryCache = t.queryCache || new X1, this.mutationCache = t.mutationCache || new ew, this.logger = t.logger || Wc, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
    }
    mount() {
        this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Al.subscribe(() => {
            Al.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
        }), this.unsubscribeOnline = Ll.subscribe(() => {
            Ll.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
        }))
    }
    unmount() {
        var t, n;
        this.mountCount--, this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this), this.unsubscribeFocus = void 0, (n = this.unsubscribeOnline) == null || n.call(this), this.unsubscribeOnline = void 0)
    }
    isFetching(t, n) {
        const [r] = On(t, n);
        return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
    }
    isMutating(t) {
        return this.mutationCache.findAll({ ...t,
            fetching: !0
        }).length
    }
    getQueryData(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t, n, r) {
        const i = Ei(t, n, r),
            o = this.getQueryData(i.queryKey);
        return o ? Promise.resolve(o) : this.fetchQuery(i)
    }
    getQueriesData(t) {
        return this.getQueryCache().findAll(t).map(({
            queryKey: n,
            state: r
        }) => {
            const i = r.data;
            return [n, i]
        })
    }
    setQueryData(t, n, r) {
        const i = this.queryCache.find(t),
            o = i == null ? void 0 : i.state.data,
            l = Q1(n, o);
        if (typeof l > "u") return;
        const s = Ei(t),
            a = this.defaultQueryOptions(s);
        return this.queryCache.build(this, a).setData(l, { ...r,
            manual: !0
        })
    }
    setQueriesData(t, n, r) {
        return je.batch(() => this.getQueryCache().findAll(t).map(({
            queryKey: i
        }) => [i, this.setQueryData(i, n, r)]))
    }
    getQueryState(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state
    }
    removeQueries(t, n) {
        const [r] = On(t, n), i = this.queryCache;
        je.batch(() => {
            i.findAll(r).forEach(o => {
                i.remove(o)
            })
        })
    }
    resetQueries(t, n, r) {
        const [i, o] = On(t, n, r), l = this.queryCache, s = {
            type: "active",
            ...i
        };
        return je.batch(() => (l.findAll(i).forEach(a => {
            a.reset()
        }), this.refetchQueries(s, o)))
    }
    cancelQueries(t, n, r) {
        const [i, o = {}] = On(t, n, r);
        typeof o.revert > "u" && (o.revert = !0);
        const l = je.batch(() => this.queryCache.findAll(i).map(s => s.cancel(o)));
        return Promise.all(l).then(Tt).catch(Tt)
    }
    invalidateQueries(t, n, r) {
        const [i, o] = On(t, n, r);
        return je.batch(() => {
            var l, s;
            if (this.queryCache.findAll(i).forEach(u => {
                    u.invalidate()
                }), i.refetchType === "none") return Promise.resolve();
            const a = { ...i,
                type: (l = (s = i.refetchType) != null ? s : i.type) != null ? l : "active"
            };
            return this.refetchQueries(a, o)
        })
    }
    refetchQueries(t, n, r) {
        const [i, o] = On(t, n, r), l = je.batch(() => this.queryCache.findAll(i).filter(a => !a.isDisabled()).map(a => {
            var u;
            return a.fetch(void 0, { ...o,
                cancelRefetch: (u = o == null ? void 0 : o.cancelRefetch) != null ? u : !0,
                meta: {
                    refetchPage: i.refetchPage
                }
            })
        }));
        let s = Promise.all(l).then(Tt);
        return o != null && o.throwOnError || (s = s.catch(Tt)), s
    }
    fetchQuery(t, n, r) {
        const i = Ei(t, n, r),
            o = this.defaultQueryOptions(i);
        typeof o.retry > "u" && (o.retry = !1);
        const l = this.queryCache.build(this, o);
        return l.isStaleByTime(o.staleTime) ? l.fetch(o) : Promise.resolve(l.state.data)
    }
    prefetchQuery(t, n, r) {
        return this.fetchQuery(t, n, r).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(t, n, r) {
        const i = Ei(t, n, r);
        return i.behavior = tw(), this.fetchQuery(i)
    }
    prefetchInfiniteQuery(t, n, r) {
        return this.fetchInfiniteQuery(t, n, r).then(Tt).catch(Tt)
    }
    resumePausedMutations() {
        return this.mutationCache.resumePausedMutations()
    }
    getQueryCache() {
        return this.queryCache
    }
    getMutationCache() {
        return this.mutationCache
    }
    getLogger() {
        return this.logger
    }
    getDefaultOptions() {
        return this.defaultOptions
    }
    setDefaultOptions(t) {
        this.defaultOptions = t
    }
    setQueryDefaults(t, n) {
        const r = this.queryDefaults.find(i => nr(t) === nr(i.queryKey));
        r ? r.defaultOptions = n : this.queryDefaults.push({
            queryKey: t,
            defaultOptions: n
        })
    }
    getQueryDefaults(t) {
        if (!t) return;
        const n = this.queryDefaults.find(r => _l(t, r.queryKey));
        return n == null ? void 0 : n.defaultOptions
    }
    setMutationDefaults(t, n) {
        const r = this.mutationDefaults.find(i => nr(t) === nr(i.mutationKey));
        r ? r.defaultOptions = n : this.mutationDefaults.push({
            mutationKey: t,
            defaultOptions: n
        })
    }
    getMutationDefaults(t) {
        if (!t) return;
        const n = this.mutationDefaults.find(r => _l(t, r.mutationKey));
        return n == null ? void 0 : n.defaultOptions
    }
    defaultQueryOptions(t) {
        if (t != null && t._defaulted) return t;
        const n = { ...this.defaultOptions.queries,
            ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
            ...t,
            _defaulted: !0
        };
        return !n.queryHash && n.queryKey && (n.queryHash = Hc(n.queryKey, n)), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense), n
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : { ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        this.queryCache.clear(), this.mutationCache.clear()
    }
}
class iw extends co {
    constructor(t, n) {
        super(), this.client = t, this.options = n, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(n)
    }
    bindMethods() {
        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.currentQuery.addObserver(this), Bd(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Tu(this.currentQuery, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Tu(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
    }
    setOptions(t, n) {
        const r = this.options,
            i = this.currentQuery;
        if (this.options = this.client.defaultQueryOptions(t), $d(r, this.options) || this.client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.currentQuery,
                observer: this
            }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
        const o = this.hasListeners();
        o && Qd(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(n), o && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
        const l = this.computeRefetchInterval();
        o && (this.currentQuery !== i || this.options.enabled !== r.enabled || l !== this.currentRefetchInterval) && this.updateRefetchInterval(l)
    }
    getOptimisticResult(t) {
        const n = this.client.getQueryCache().build(this.client, t);
        return this.createResult(n, t)
    }
    getCurrentResult() {
        return this.currentResult
    }
    trackResult(t) {
        const n = {};
        return Object.keys(t).forEach(r => {
            Object.defineProperty(n, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), t[r])
            })
        }), n
    }
    getCurrentQuery() {
        return this.currentQuery
    }
    remove() {
        this.client.getQueryCache().remove(this.currentQuery)
    }
    refetch({
        refetchPage: t,
        ...n
    } = {}) {
        return this.fetch({ ...n,
            meta: {
                refetchPage: t
            }
        })
    }
    fetchOptimistic(t) {
        const n = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, n);
        return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n))
    }
    fetch(t) {
        var n;
        return this.executeFetch({ ...t,
            cancelRefetch: (n = t.cancelRefetch) != null ? n : !0
        }).then(() => (this.updateResult(), this.currentResult))
    }
    executeFetch(t) {
        this.updateQuery();
        let n = this.currentQuery.fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(Tt)), n
    }
    updateStaleTimeout() {
        if (this.clearStaleTimeout(), eo || this.currentResult.isStale || !Ru(this.options.staleTime)) return;
        const n = Wm(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
        this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
        }, n)
    }
    computeRefetchInterval() {
        var t;
        return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1
    }
    updateRefetchInterval(t) {
        this.clearRefetchInterval(), this.currentRefetchInterval = t, !(eo || this.options.enabled === !1 || !Ru(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
            (this.options.refetchIntervalInBackground || Al.isFocused()) && this.executeFetch()
        }, this.currentRefetchInterval))
    }
    updateTimers() {
        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
    }
    clearStaleTimeout() {
        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
    }
    clearRefetchInterval() {
        this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
    }
    createResult(t, n) {
        const r = this.currentQuery,
            i = this.options,
            o = this.currentResult,
            l = this.currentResultState,
            s = this.currentResultOptions,
            a = t !== r,
            u = a ? t.state : this.currentQueryInitialState,
            f = a ? this.currentResult : this.previousQueryResult,
            {
                state: d
            } = t;
        let {
            dataUpdatedAt: y,
            error: g,
            errorUpdatedAt: m,
            fetchStatus: v,
            status: w
        } = d, c = !1, h = !1, p;
        if (n._optimisticResults) {
            const R = this.hasListeners(),
                M = !R && Bd(t, n),
                j = R && Qd(t, r, n, i);
            (M || j) && (v = os(t.options.networkMode) ? "fetching" : "paused", y || (w = "loading")), n._optimisticResults === "isRestoring" && (v = "idle")
        }
        if (n.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && w !== "error") p = f.data, y = f.dataUpdatedAt, w = f.status, c = !0;
        else if (n.select && typeof d.data < "u")
            if (o && d.data === (l == null ? void 0 : l.data) && n.select === this.selectFn) p = this.selectResult;
            else try {
                this.selectFn = n.select, p = n.select(d.data), p = Ou(o == null ? void 0 : o.data, p, n), this.selectResult = p, this.selectError = null
            } catch (R) {
                this.selectError = R
            } else p = d.data;
        if (typeof n.placeholderData < "u" && typeof p > "u" && w === "loading") {
            let R;
            if (o != null && o.isPlaceholderData && n.placeholderData === (s == null ? void 0 : s.placeholderData)) R = o.data;
            else if (R = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof R < "u") try {
                R = n.select(R), this.selectError = null
            } catch (M) {
                this.selectError = M
            }
            typeof R < "u" && (w = "success", p = Ou(o == null ? void 0 : o.data, R, n), h = !0)
        }
        this.selectError && (g = this.selectError, p = this.selectResult, m = Date.now(), w = "error");
        const S = v === "fetching",
            E = w === "loading",
            P = w === "error";
        return {
            status: w,
            fetchStatus: v,
            isLoading: E,
            isSuccess: w === "success",
            isError: P,
            isInitialLoading: E && S,
            data: p,
            dataUpdatedAt: y,
            error: g,
            errorUpdatedAt: m,
            failureCount: d.fetchFailureCount,
            failureReason: d.fetchFailureReason,
            errorUpdateCount: d.errorUpdateCount,
            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
            isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
            isFetching: S,
            isRefetching: S && !E,
            isLoadingError: P && d.dataUpdatedAt === 0,
            isPaused: v === "paused",
            isPlaceholderData: h,
            isPreviousData: c,
            isRefetchError: P && d.dataUpdatedAt !== 0,
            isStale: Vc(t, n),
            refetch: this.refetch,
            remove: this.remove
        }
    }
    updateResult(t) {
        const n = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
        if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, $d(r, n)) return;
        this.currentResult = r;
        const i = {
                cache: !0
            },
            o = () => {
                if (!n) return !0;
                const {
                    notifyOnChangeProps: l
                } = this.options;
                if (l === "all" || !l && !this.trackedProps.size) return !0;
                const s = new Set(l ? ? this.trackedProps);
                return this.options.useErrorBoundary && s.add("error"), Object.keys(this.currentResult).some(a => {
                    const u = a;
                    return this.currentResult[u] !== n[u] && s.has(u)
                })
            };
        (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), this.notify({ ...i,
            ...t
        })
    }
    updateQuery() {
        const t = this.client.getQueryCache().build(this.client, this.options);
        if (t === this.currentQuery) return;
        const n = this.currentQuery;
        this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
    }
    onQueryUpdate(t) {
        const n = {};
        t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !Jo(t.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers()
    }
    notify(t) {
        je.batch(() => {
            if (t.onSuccess) {
                var n, r, i, o;
                (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (i = (o = this.options).onSettled) == null || i.call(o, this.currentResult.data, null)
            } else if (t.onError) {
                var l, s, a, u;
                (l = (s = this.options).onError) == null || l.call(s, this.currentResult.error), (a = (u = this.options).onSettled) == null || a.call(u, void 0, this.currentResult.error)
            }
            t.listeners && this.listeners.forEach(({
                listener: f
            }) => {
                f(this.currentResult)
            }), t.cache && this.client.getQueryCache().notify({
                query: this.currentQuery,
                type: "observerResultsUpdated"
            })
        })
    }
}

function ow(e, t) {
    return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1)
}

function Bd(e, t) {
    return ow(e, t) || e.state.dataUpdatedAt > 0 && Tu(e, t, t.refetchOnMount)
}

function Tu(e, t, n) {
    if (t.enabled !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Vc(e, t)
    }
    return !1
}

function Qd(e, t, n, r) {
    return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Vc(e, n)
}

function Vc(e, t) {
    return e.isStaleByTime(t.staleTime)
}
var Jm = {
        exports: {}
    },
    Zm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr = k;

function lw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var sw = typeof Object.is == "function" ? Object.is : lw,
    aw = Kr.useState,
    uw = Kr.useEffect,
    cw = Kr.useLayoutEffect,
    fw = Kr.useDebugValue;

function dw(e, t) {
    var n = t(),
        r = aw({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        o = r[1];
    return cw(function() {
        i.value = n, i.getSnapshot = t, ya(i) && o({
            inst: i
        })
    }, [e, n, t]), uw(function() {
        return ya(i) && o({
            inst: i
        }), e(function() {
            ya(i) && o({
                inst: i
            })
        })
    }, [e]), fw(n), n
}

function ya(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !sw(e, n)
    } catch {
        return !0
    }
}

function hw(e, t) {
    return t()
}
var pw = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? hw : dw;
Zm.useSyncExternalStore = Kr.useSyncExternalStore !== void 0 ? Kr.useSyncExternalStore : pw;
Jm.exports = Zm;
var mw = Jm.exports;
const yw = mw.useSyncExternalStore,
    Hd = k.createContext(void 0),
    ey = k.createContext(!1);

function ty(e, t) {
    return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Hd), window.ReactQueryClientContext) : Hd)
}
const vw = ({
        context: e
    } = {}) => {
        const t = k.useContext(ty(e, k.useContext(ey)));
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    gw = ({
        client: e,
        children: t,
        context: n,
        contextSharing: r = !1
    }) => {
        k.useEffect(() => (e.mount(), () => {
            e.unmount()
        }), [e]);
        const i = ty(n, r);
        return k.createElement(ey.Provider, {
            value: !n && r
        }, k.createElement(i.Provider, {
            value: e
        }, t))
    },
    ny = k.createContext(!1),
    ww = () => k.useContext(ny);
ny.Provider;

function Sw() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
const Ew = k.createContext(Sw()),
    Cw = () => k.useContext(Ew);

function kw(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
const xw = (e, t) => {
        (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1))
    },
    Rw = e => {
        k.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    Pw = ({
        result: e,
        errorResetBoundary: t,
        useErrorBoundary: n,
        query: r
    }) => e.isError && !t.isReset() && !e.isFetching && kw(n, [e.error, r]),
    Ow = e => {
        e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
    },
    Tw = (e, t) => e.isLoading && e.isFetching && !t,
    Nw = (e, t, n) => (e == null ? void 0 : e.suspense) && Tw(t, n),
    _w = (e, t, n) => t.fetchOptimistic(e).then(({
        data: r
    }) => {
        e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null)
    }).catch(r => {
        n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r)
    });

function Aw(e, t) {
    const n = vw({
            context: e.context
        }),
        r = ww(),
        i = Cw(),
        o = n.defaultQueryOptions(e);
    o._optimisticResults = r ? "isRestoring" : "optimistic", o.onError && (o.onError = je.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = je.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = je.batchCalls(o.onSettled)), Ow(o), xw(o, i), Rw(i);
    const [l] = k.useState(() => new t(n, o)), s = l.getOptimisticResult(o);
    if (yw(k.useCallback(a => r ? () => {} : l.subscribe(je.batchCalls(a)), [l, r]), () => l.getCurrentResult(), () => l.getCurrentResult()), k.useEffect(() => {
            l.setOptions(o, {
                listeners: !1
            })
        }, [o, l]), Nw(o, s, r)) throw _w(o, l, i);
    if (Pw({
            result: s,
            errorResetBoundary: i,
            useErrorBoundary: o.useErrorBoundary,
            query: l.getCurrentQuery()
        })) throw s.error;
    return o.notifyOnChangeProps ? s : l.trackResult(s)
}

function ry(e, t, n) {
    const r = Ei(e, t, n);
    return Aw(r, iw)
}
const Lw = function() {
    return null
};

function iy(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: Dw
} = Object.prototype, {
    getPrototypeOf: qc
} = Object, ls = (e => t => {
    const n = Dw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), rn = e => (e = e.toLowerCase(), t => ls(t) === e), ss = e => t => typeof t === e, {
    isArray: ni
} = Array, to = ss("undefined");

function Fw(e) {
    return e !== null && !to(e) && e.constructor !== null && !to(e.constructor) && Ft(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const oy = rn("ArrayBuffer");

function Mw(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && oy(e.buffer), t
}
const Iw = ss("string"),
    Ft = ss("function"),
    ly = ss("number"),
    as = e => e !== null && typeof e == "object",
    $w = e => e === !0 || e === !1,
    Zo = e => {
        if (ls(e) !== "object") return !1;
        const t = qc(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    zw = rn("Date"),
    bw = rn("File"),
    Uw = rn("Blob"),
    jw = rn("FileList"),
    Bw = e => as(e) && Ft(e.pipe),
    Qw = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Ft(e.append) && ((t = ls(e)) === "formdata" || t === "object" && Ft(e.toString) && e.toString() === "[object FormData]"))
    },
    Hw = rn("URLSearchParams"),
    Ww = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function fo(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if (typeof e != "object" && (e = [e]), ni(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = o.length;
        let s;
        for (r = 0; r < l; r++) s = o[r], t.call(null, e[s], s, e)
    }
}

function sy(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
const ay = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    uy = e => !to(e) && e !== ay;

function Nu() {
    const {
        caseless: e
    } = uy(this) && this || {}, t = {}, n = (r, i) => {
        const o = e && sy(t, i) || i;
        Zo(t[o]) && Zo(r) ? t[o] = Nu(t[o], r) : Zo(r) ? t[o] = Nu({}, r) : ni(r) ? t[o] = r.slice() : t[o] = r
    };
    for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && fo(arguments[r], n);
    return t
}
const Vw = (e, t, n, {
        allOwnKeys: r
    } = {}) => (fo(t, (i, o) => {
        n && Ft(i) ? e[o] = iy(i, n) : e[o] = i
    }, {
        allOwnKeys: r
    }), e),
    qw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Kw = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    Gw = (e, t, n, r) => {
        let i, o, l;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) l = i[o], (!r || r(l, e, t)) && !s[l] && (t[l] = e[l], s[l] = !0);
            e = n !== !1 && qc(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    Yw = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    Xw = e => {
        if (!e) return null;
        if (ni(e)) return e;
        let t = e.length;
        if (!ly(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    Jw = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && qc(Uint8Array)),
    Zw = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (;
            (i = r.next()) && !i.done;) {
            const o = i.value;
            t.call(e, o[0], o[1])
        }
    },
    eS = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    tS = rn("HTMLFormElement"),
    nS = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
        return r.toUpperCase() + i
    }),
    Wd = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    rS = rn("RegExp"),
    cy = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        fo(n, (i, o) => {
            t(i, o, e) !== !1 && (r[o] = i)
        }), Object.defineProperties(e, r)
    },
    iS = e => {
        cy(e, (t, n) => {
            if (Ft(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (Ft(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    oS = (e, t) => {
        const n = {},
            r = i => {
                i.forEach(o => {
                    n[o] = !0
                })
            };
        return ni(e) ? r(e) : r(String(e).split(t)), n
    },
    lS = () => {},
    sS = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    va = "abcdefghijklmnopqrstuvwxyz",
    Vd = "0123456789",
    fy = {
        DIGIT: Vd,
        ALPHA: va,
        ALPHA_DIGIT: va + va.toUpperCase() + Vd
    },
    aS = (e = 16, t = fy.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function uS(e) {
    return !!(e && Ft(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const cS = e => {
        const t = new Array(10),
            n = (r, i) => {
                if (as(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const o = ni(r) ? [] : {};
                        return fo(r, (l, s) => {
                            const a = n(l, i + 1);
                            !to(a) && (o[s] = a)
                        }), t[i] = void 0, o
                    }
                }
                return r
            };
        return n(e, 0)
    },
    fS = rn("AsyncFunction"),
    dS = e => e && (as(e) || Ft(e)) && Ft(e.then) && Ft(e.catch),
    N = {
        isArray: ni,
        isArrayBuffer: oy,
        isBuffer: Fw,
        isFormData: Qw,
        isArrayBufferView: Mw,
        isString: Iw,
        isNumber: ly,
        isBoolean: $w,
        isObject: as,
        isPlainObject: Zo,
        isUndefined: to,
        isDate: zw,
        isFile: bw,
        isBlob: Uw,
        isRegExp: rS,
        isFunction: Ft,
        isStream: Bw,
        isURLSearchParams: Hw,
        isTypedArray: Jw,
        isFileList: jw,
        forEach: fo,
        merge: Nu,
        extend: Vw,
        trim: Ww,
        stripBOM: qw,
        inherits: Kw,
        toFlatObject: Gw,
        kindOf: ls,
        kindOfTest: rn,
        endsWith: Yw,
        toArray: Xw,
        forEachEntry: Zw,
        matchAll: eS,
        isHTMLForm: tS,
        hasOwnProperty: Wd,
        hasOwnProp: Wd,
        reduceDescriptors: cy,
        freezeMethods: iS,
        toObjectSet: oS,
        toCamelCase: nS,
        noop: lS,
        toFiniteNumber: sS,
        findKey: sy,
        global: ay,
        isContextDefined: uy,
        ALPHABET: fy,
        generateString: aS,
        isSpecCompliantForm: uS,
        toJSONObject: cS,
        isAsyncFn: fS,
        isThenable: dS
    };

function ae(e, t, n, r, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}
N.inherits(ae, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: N.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const dy = ae.prototype,
    hy = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    hy[e] = {
        value: e
    }
});
Object.defineProperties(ae, hy);
Object.defineProperty(dy, "isAxiosError", {
    value: !0
});
ae.from = (e, t, n, r, i, o) => {
    const l = Object.create(dy);
    return N.toFlatObject(e, l, function(a) {
        return a !== Error.prototype
    }, s => s !== "isAxiosError"), ae.call(l, e.message, t, n, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l
};
const hS = null;

function _u(e) {
    return N.isPlainObject(e) || N.isArray(e)
}

function py(e) {
    return N.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function qd(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = py(i), !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}

function pS(e) {
    return N.isArray(e) && !e.some(_u)
}
const mS = N.toFlatObject(N, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function us(e, t, n) {
    if (!N.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = N.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(v, w) {
        return !N.isUndefined(w[v])
    });
    const r = n.metaTokens,
        i = n.visitor || f,
        o = n.dots,
        l = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
    if (!N.isFunction(i)) throw new TypeError("visitor must be a function");

    function u(m) {
        if (m === null) return "";
        if (N.isDate(m)) return m.toISOString();
        if (!a && N.isBlob(m)) throw new ae("Blob is not supported. Use a Buffer instead.");
        return N.isArrayBuffer(m) || N.isTypedArray(m) ? a && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }

    function f(m, v, w) {
        let c = m;
        if (m && !w && typeof m == "object") {
            if (N.endsWith(v, "{}")) v = r ? v : v.slice(0, -2), m = JSON.stringify(m);
            else if (N.isArray(m) && pS(m) || (N.isFileList(m) || N.endsWith(v, "[]")) && (c = N.toArray(m))) return v = py(v), c.forEach(function(p, S) {
                !(N.isUndefined(p) || p === null) && t.append(l === !0 ? qd([v], S, o) : l === null ? v : v + "[]", u(p))
            }), !1
        }
        return _u(m) ? !0 : (t.append(qd(w, v, o), u(m)), !1)
    }
    const d = [],
        y = Object.assign(mS, {
            defaultVisitor: f,
            convertValue: u,
            isVisitable: _u
        });

    function g(m, v) {
        if (!N.isUndefined(m)) {
            if (d.indexOf(m) !== -1) throw Error("Circular reference detected in " + v.join("."));
            d.push(m), N.forEach(m, function(c, h) {
                (!(N.isUndefined(c) || c === null) && i.call(t, c, N.isString(h) ? h.trim() : h, v, y)) === !0 && g(c, v ? v.concat(h) : [h])
            }), d.pop()
        }
    }
    if (!N.isObject(e)) throw new TypeError("data must be an object");
    return g(e), t
}

function Kd(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function Kc(e, t) {
    this._pairs = [], e && us(e, this, t)
}
const my = Kc.prototype;
my.append = function(t, n) {
    this._pairs.push([t, n])
};
my.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Kd)
    } : Kd;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function yS(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function yy(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || yS,
        i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = N.isURLSearchParams(t) ? t.toString() : new Kc(t, n).toString(r), o) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class vS {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        N.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Gd = vS,
    vy = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    gS = typeof URLSearchParams < "u" ? URLSearchParams : Kc,
    wS = typeof FormData < "u" ? FormData : null,
    SS = typeof Blob < "u" ? Blob : null,
    ES = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    CS = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    Xt = {
        isBrowser: !0,
        classes: {
            URLSearchParams: gS,
            FormData: wS,
            Blob: SS
        },
        isStandardBrowserEnv: ES,
        isStandardBrowserWebWorkerEnv: CS,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function kS(e, t) {
    return us(e, new Xt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Xt.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function xS(e) {
    return N.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function RS(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
    return t
}

function gy(e) {
    function t(n, r, i, o) {
        let l = n[o++];
        const s = Number.isFinite(+l),
            a = o >= n.length;
        return l = !l && N.isArray(i) ? i.length : l, a ? (N.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !s) : ((!i[l] || !N.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && N.isArray(i[l]) && (i[l] = RS(i[l])), !s)
    }
    if (N.isFormData(e) && N.isFunction(e.entries)) {
        const n = {};
        return N.forEachEntry(e, (r, i) => {
            t(xS(r), i, n, 0)
        }), n
    }
    return null
}
const PS = {
    "Content-Type": void 0
};

function OS(e, t, n) {
    if (N.isString(e)) try {
        return (t || JSON.parse)(e), N.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const cs = {
    transitional: vy,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            o = N.isObject(t);
        if (o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)) return i && i ? JSON.stringify(gy(t)) : t;
        if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t)) return t;
        if (N.isArrayBufferView(t)) return t.buffer;
        if (N.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return kS(t, this.formSerializer).toString();
            if ((s = N.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return us(s ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1), OS(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || cs.transitional,
            r = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (t && N.isString(t) && (r && !this.responseType || i)) {
            const l = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (l) throw s.name === "SyntaxError" ? ae.from(s, ae.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Xt.classes.FormData,
        Blob: Xt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
N.forEach(["delete", "get", "head"], function(t) {
    cs.headers[t] = {}
});
N.forEach(["post", "put", "patch"], function(t) {
    cs.headers[t] = N.merge(PS)
});
const Gc = cs,
    TS = N.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    NS = e => {
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(l) {
            i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && TS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Yd = Symbol("internals");

function yi(e) {
    return e && String(e).trim().toLowerCase()
}

function el(e) {
    return e === !1 || e == null ? e : N.isArray(e) ? e.map(el) : String(e)
}

function _S(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const AS = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function ga(e, t, n, r, i) {
    if (N.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), !!N.isString(t)) {
        if (N.isString(r)) return t.indexOf(r) !== -1;
        if (N.isRegExp(r)) return r.test(t)
    }
}

function LS(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function DS(e, t) {
    const n = N.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, l) {
                return this[r].call(this, t, i, o, l)
            },
            configurable: !0
        })
    })
}
class fs {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;

        function o(s, a, u) {
            const f = yi(a);
            if (!f) throw new Error("header name must be a non-empty string");
            const d = N.findKey(i, f);
            (!d || i[d] === void 0 || u === !0 || u === void 0 && i[d] !== !1) && (i[d || a] = el(s))
        }
        const l = (s, a) => N.forEach(s, (u, f) => o(u, f, a));
        return N.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : N.isString(t) && (t = t.trim()) && !AS(t) ? l(NS(t), n) : t != null && o(n, t, r), this
    }
    get(t, n) {
        if (t = yi(t), t) {
            const r = N.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return _S(i);
                if (N.isFunction(n)) return n.call(this, i, r);
                if (N.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = yi(t), t) {
            const r = N.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || ga(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;

        function o(l) {
            if (l = yi(l), l) {
                const s = N.findKey(r, l);
                s && (!n || ga(r, r[s], s, n)) && (delete r[s], i = !0)
            }
        }
        return N.isArray(t) ? t.forEach(o) : o(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--;) {
            const o = n[r];
            (!t || ga(this, this[o], o, t, !0)) && (delete this[o], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            r = {};
        return N.forEach(this, (i, o) => {
            const l = N.findKey(r, o);
            if (l) {
                n[l] = el(i), delete n[o];
                return
            }
            const s = t ? LS(o) : String(o).trim();
            s !== o && delete n[o], n[s] = el(i), r[s] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return N.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && N.isArray(r) ? r.join(", ") : r)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)), r
    }
    static accessor(t) {
        const r = (this[Yd] = this[Yd] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function o(l) {
            const s = yi(l);
            r[s] || (DS(i, l), r[s] = !0)
        }
        return N.isArray(t) ? t.forEach(o) : o(t), this
    }
}
fs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.freezeMethods(fs.prototype);
N.freezeMethods(fs);
const dn = fs;

function wa(e, t) {
    const n = this || Gc,
        r = t || n,
        i = dn.from(r.headers);
    let o = r.data;
    return N.forEach(e, function(s) {
        o = s.call(n, o, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), o
}

function wy(e) {
    return !!(e && e.__CANCEL__)
}

function ho(e, t, n) {
    ae.call(this, e ? ? "canceled", ae.ERR_CANCELED, t, n), this.name = "CanceledError"
}
N.inherits(ho, ae, {
    __CANCEL__: !0
});

function FS(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new ae("Request failed with status code " + n.status, [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const MS = Xt.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, i, o, l, s) {
            const a = [];
            a.push(n + "=" + encodeURIComponent(r)), N.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), N.isString(o) && a.push("path=" + o), N.isString(l) && a.push("domain=" + l), s === !0 && a.push("secure"), document.cookie = a.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function IS(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function $S(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Sy(e, t) {
    return e && !IS(t) ? $S(e, t) : t
}
const zS = Xt.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let r;

    function i(o) {
        let l = o;
        return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
        function(l) {
            const s = N.isString(l) ? i(l) : l;
            return s.protocol === r.protocol && s.host === r.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function bS(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function US(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        o = 0,
        l;
    return t = t !== void 0 ? t : 1e3,
        function(a) {
            const u = Date.now(),
                f = r[o];
            l || (l = u), n[i] = a, r[i] = u;
            let d = o,
                y = 0;
            for (; d !== i;) y += n[d++], d = d % e;
            if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - l < t) return;
            const g = f && u - f;
            return g ? Math.round(y * 1e3 / g) : void 0
        }
}

function Xd(e, t) {
    let n = 0;
    const r = US(50, 250);
    return i => {
        const o = i.loaded,
            l = i.lengthComputable ? i.total : void 0,
            s = o - n,
            a = r(s),
            u = o <= l;
        n = o;
        const f = {
            loaded: o,
            total: l,
            progress: l ? o / l : void 0,
            bytes: s,
            rate: a || void 0,
            estimated: a && l && u ? (l - o) / a : void 0,
            event: i
        };
        f[t ? "download" : "upload"] = !0, e(f)
    }
}
const jS = typeof XMLHttpRequest < "u",
    BS = jS && function(e) {
        return new Promise(function(n, r) {
            let i = e.data;
            const o = dn.from(e.headers).normalize(),
                l = e.responseType;
            let s;

            function a() {
                e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
            }
            N.isFormData(i) && (Xt.isStandardBrowserEnv || Xt.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
            let u = new XMLHttpRequest;
            if (e.auth) {
                const g = e.auth.username || "",
                    m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(g + ":" + m))
            }
            const f = Sy(e.baseURL, e.url);
            u.open(e.method.toUpperCase(), yy(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;

            function d() {
                if (!u) return;
                const g = dn.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                    v = {
                        data: !l || l === "text" || l === "json" ? u.responseText : u.response,
                        status: u.status,
                        statusText: u.statusText,
                        headers: g,
                        config: e,
                        request: u
                    };
                FS(function(c) {
                    n(c), a()
                }, function(c) {
                    r(c), a()
                }, v), u = null
            }
            if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
                    !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d)
                }, u.onabort = function() {
                    u && (r(new ae("Request aborted", ae.ECONNABORTED, e, u)), u = null)
                }, u.onerror = function() {
                    r(new ae("Network Error", ae.ERR_NETWORK, e, u)), u = null
                }, u.ontimeout = function() {
                    let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const v = e.transitional || vy;
                    e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new ae(m, v.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED, e, u)), u = null
                }, Xt.isStandardBrowserEnv) {
                const g = (e.withCredentials || zS(f)) && e.xsrfCookieName && MS.read(e.xsrfCookieName);
                g && o.set(e.xsrfHeaderName, g)
            }
            i === void 0 && o.setContentType(null), "setRequestHeader" in u && N.forEach(o.toJSON(), function(m, v) {
                u.setRequestHeader(v, m)
            }), N.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Xd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Xd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = g => {
                u && (r(!g || g.type ? new ho(null, e, u) : g), u.abort(), u = null)
            }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
            const y = bS(f);
            if (y && Xt.protocols.indexOf(y) === -1) {
                r(new ae("Unsupported protocol " + y + ":", ae.ERR_BAD_REQUEST, e));
                return
            }
            u.send(i || null)
        })
    },
    tl = {
        http: hS,
        xhr: BS
    };
N.forEach(tl, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const QS = {
    getAdapter: e => {
        e = N.isArray(e) ? e : [e];
        const {
            length: t
        } = e;
        let n, r;
        for (let i = 0; i < t && (n = e[i], !(r = N.isString(n) ? tl[n.toLowerCase()] : n)); i++);
        if (!r) throw r === !1 ? new ae(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(N.hasOwnProp(tl, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!N.isFunction(r)) throw new TypeError("adapter is not a function");
        return r
    },
    adapters: tl
};

function Sa(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ho(null, e)
}

function Jd(e) {
    return Sa(e), e.headers = dn.from(e.headers), e.data = wa.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), QS.getAdapter(e.adapter || Gc.adapter)(e).then(function(r) {
        return Sa(e), r.data = wa.call(e, e.transformResponse, r), r.headers = dn.from(r.headers), r
    }, function(r) {
        return wy(r) || (Sa(e), r && r.response && (r.response.data = wa.call(e, e.transformResponse, r.response), r.response.headers = dn.from(r.response.headers))), Promise.reject(r)
    })
}
const Zd = e => e instanceof dn ? e.toJSON() : e;

function Gr(e, t) {
    t = t || {};
    const n = {};

    function r(u, f, d) {
        return N.isPlainObject(u) && N.isPlainObject(f) ? N.merge.call({
            caseless: d
        }, u, f) : N.isPlainObject(f) ? N.merge({}, f) : N.isArray(f) ? f.slice() : f
    }

    function i(u, f, d) {
        if (N.isUndefined(f)) {
            if (!N.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, f, d)
    }

    function o(u, f) {
        if (!N.isUndefined(f)) return r(void 0, f)
    }

    function l(u, f) {
        if (N.isUndefined(f)) {
            if (!N.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, f)
    }

    function s(u, f, d) {
        if (d in t) return r(u, f);
        if (d in e) return r(void 0, u)
    }
    const a = {
        url: o,
        method: o,
        data: o,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (u, f) => i(Zd(u), Zd(f), !0)
    };
    return N.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const d = a[f] || i,
            y = d(e[f], t[f], f);
        N.isUndefined(y) && d !== s || (n[f] = y)
    }), n
}
const Ey = "1.4.0",
    Yc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Yc[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const eh = {};
Yc.transitional = function(t, n, r) {
    function i(o, l) {
        return "[Axios v" + Ey + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "")
    }
    return (o, l, s) => {
        if (t === !1) throw new ae(i(l, " has been removed" + (n ? " in " + n : "")), ae.ERR_DEPRECATED);
        return n && !eh[l] && (eh[l] = !0, console.warn(i(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, l, s) : !0
    }
};

function HS(e, t, n) {
    if (typeof e != "object") throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0;) {
        const o = r[i],
            l = t[o];
        if (l) {
            const s = e[o],
                a = s === void 0 || l(s, o, e);
            if (a !== !0) throw new ae("option " + o + " must be " + a, ae.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new ae("Unknown option " + o, ae.ERR_BAD_OPTION)
    }
}
const Au = {
        assertOptions: HS,
        validators: Yc
    },
    xn = Au.validators;
class Dl {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Gd,
            response: new Gd
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Gr(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: i,
            headers: o
        } = n;
        r !== void 0 && Au.assertOptions(r, {
            silentJSONParsing: xn.transitional(xn.boolean),
            forcedJSONParsing: xn.transitional(xn.boolean),
            clarifyTimeoutError: xn.transitional(xn.boolean)
        }, !1), i != null && (N.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : Au.assertOptions(i, {
            encode: xn.function,
            serialize: xn.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l;
        l = o && N.merge(o.common, o[n.method]), l && N.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete o[m]
        }), n.headers = dn.concat(l, o);
        const s = [];
        let a = !0;
        this.interceptors.request.forEach(function(v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous, s.unshift(v.fulfilled, v.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(v) {
            u.push(v.fulfilled, v.rejected)
        });
        let f, d = 0,
            y;
        if (!a) {
            const m = [Jd.bind(this), void 0];
            for (m.unshift.apply(m, s), m.push.apply(m, u), y = m.length, f = Promise.resolve(n); d < y;) f = f.then(m[d++], m[d++]);
            return f
        }
        y = s.length;
        let g = n;
        for (d = 0; d < y;) {
            const m = s[d++],
                v = s[d++];
            try {
                g = m(g)
            } catch (w) {
                v.call(this, w);
                break
            }
        }
        try {
            f = Jd.call(this, g)
        } catch (m) {
            return Promise.reject(m)
        }
        for (d = 0, y = u.length; d < y;) f = f.then(u[d++], u[d++]);
        return f
    }
    getUri(t) {
        t = Gr(this.defaults, t);
        const n = Sy(t.baseURL, t.url);
        return yy(n, t.params, t.paramsSerializer)
    }
}
N.forEach(["delete", "get", "head", "options"], function(t) {
    Dl.prototype[t] = function(n, r) {
        return this.request(Gr(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
N.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, l, s) {
            return this.request(Gr(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: l
            }))
        }
    }
    Dl.prototype[t] = n(), Dl.prototype[t + "Form"] = n(!0)
});
const nl = Dl;
class Xc {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        });
        const r = this;
        this.promise.then(i => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](i);
            r._listeners = null
        }), this.promise.then = i => {
            let o;
            const l = new Promise(s => {
                r.subscribe(s), o = s
            }).then(i);
            return l.cancel = function() {
                r.unsubscribe(o)
            }, l
        }, t(function(o, l, s) {
            r.reason || (r.reason = new ho(o, l, s), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Xc(function(i) {
                t = i
            }),
            cancel: t
        }
    }
}
const WS = Xc;

function VS(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function qS(e) {
    return N.isObject(e) && e.isAxiosError === !0
}
const Lu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Lu).forEach(([e, t]) => {
    Lu[t] = e
});
const KS = Lu;

function Cy(e) {
    const t = new nl(e),
        n = iy(nl.prototype.request, t);
    return N.extend(n, nl.prototype, t, {
        allOwnKeys: !0
    }), N.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return Cy(Gr(e, i))
    }, n
}
const Ve = Cy(Gc);
Ve.Axios = nl;
Ve.CanceledError = ho;
Ve.CancelToken = WS;
Ve.isCancel = wy;
Ve.VERSION = Ey;
Ve.toFormData = us;
Ve.AxiosError = ae;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
    return Promise.all(t)
};
Ve.spread = VS;
Ve.isAxiosError = qS;
Ve.mergeConfig = Gr;
Ve.AxiosHeaders = dn;
Ve.formToJSON = e => gy(N.isHTMLForm(e) ? new FormData(e) : e);
Ve.HttpStatusCode = KS;
Ve.default = Ve;
const Jc = Ve;
var ky = {
        exports: {}
    },
    we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc = Symbol.for("react.element"),
    ef = Symbol.for("react.portal"),
    ds = Symbol.for("react.fragment"),
    hs = Symbol.for("react.strict_mode"),
    ps = Symbol.for("react.profiler"),
    ms = Symbol.for("react.provider"),
    ys = Symbol.for("react.context"),
    GS = Symbol.for("react.server_context"),
    vs = Symbol.for("react.forward_ref"),
    gs = Symbol.for("react.suspense"),
    ws = Symbol.for("react.suspense_list"),
    Ss = Symbol.for("react.memo"),
    Es = Symbol.for("react.lazy"),
    YS = Symbol.for("react.offscreen"),
    xy;
xy = Symbol.for("react.module.reference");

function $t(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Zc:
                switch (e = e.type, e) {
                    case ds:
                    case ps:
                    case hs:
                    case gs:
                    case ws:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case GS:
                            case ys:
                            case vs:
                            case Es:
                            case Ss:
                            case ms:
                                return e;
                            default:
                                return t
                        }
                }
            case ef:
                return t
        }
    }
}
we.ContextConsumer = ys;
we.ContextProvider = ms;
we.Element = Zc;
we.ForwardRef = vs;
we.Fragment = ds;
we.Lazy = Es;
we.Memo = Ss;
we.Portal = ef;
we.Profiler = ps;
we.StrictMode = hs;
we.Suspense = gs;
we.SuspenseList = ws;
we.isAsyncMode = function() {
    return !1
};
we.isConcurrentMode = function() {
    return !1
};
we.isContextConsumer = function(e) {
    return $t(e) === ys
};
we.isContextProvider = function(e) {
    return $t(e) === ms
};
we.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zc
};
we.isForwardRef = function(e) {
    return $t(e) === vs
};
we.isFragment = function(e) {
    return $t(e) === ds
};
we.isLazy = function(e) {
    return $t(e) === Es
};
we.isMemo = function(e) {
    return $t(e) === Ss
};
we.isPortal = function(e) {
    return $t(e) === ef
};
we.isProfiler = function(e) {
    return $t(e) === ps
};
we.isStrictMode = function(e) {
    return $t(e) === hs
};
we.isSuspense = function(e) {
    return $t(e) === gs
};
we.isSuspenseList = function(e) {
    return $t(e) === ws
};
we.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ds || e === ps || e === hs || e === gs || e === ws || e === YS || typeof e == "object" && e !== null && (e.$$typeof === Es || e.$$typeof === Ss || e.$$typeof === ms || e.$$typeof === ys || e.$$typeof === vs || e.$$typeof === xy || e.getModuleId !== void 0)
};
we.typeOf = $t;
ky.exports = we;
var Ry = ky.exports;

function XS(e) {
    function t(D, I, $, W, C) {
        for (var te = 0, F = 0, Te = 0, de = 0, me, K, Ie = 0, qe = 0, re, $e = re = me = 0, ne = 0, ze = 0, En = 0, be = 0, mr = $.length, zt = mr - 1, nt, G = "", xe = "", ri = "", ii = "", bt; ne < mr;) {
            if (K = $.charCodeAt(ne), ne === zt && F + de + Te + te !== 0 && (F !== 0 && (K = F === 47 ? 10 : 47), de = Te = te = 0, mr++, zt++), F + de + Te + te === 0) {
                if (ne === zt && (0 < ze && (G = G.replace(y, "")), 0 < G.trim().length)) {
                    switch (K) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            G += $.charAt(ne)
                    }
                    K = 59
                }
                switch (K) {
                    case 123:
                        for (G = G.trim(), me = G.charCodeAt(0), re = 1, be = ++ne; ne < mr;) {
                            switch (K = $.charCodeAt(ne)) {
                                case 123:
                                    re++;
                                    break;
                                case 125:
                                    re--;
                                    break;
                                case 47:
                                    switch (K = $.charCodeAt(ne + 1)) {
                                        case 42:
                                        case 47:
                                            e: {
                                                for ($e = ne + 1; $e < zt; ++$e) switch ($.charCodeAt($e)) {
                                                    case 47:
                                                        if (K === 42 && $.charCodeAt($e - 1) === 42 && ne + 2 !== $e) {
                                                            ne = $e + 1;
                                                            break e
                                                        }
                                                        break;
                                                    case 10:
                                                        if (K === 47) {
                                                            ne = $e + 1;
                                                            break e
                                                        }
                                                }
                                                ne = $e
                                            }
                                    }
                                    break;
                                case 91:
                                    K++;
                                case 40:
                                    K++;
                                case 34:
                                case 39:
                                    for (; ne++ < zt && $.charCodeAt(ne) !== K;);
                            }
                            if (re === 0) break;
                            ne++
                        }
                        switch (re = $.substring(be, ne), me === 0 && (me = (G = G.replace(d, "").trim()).charCodeAt(0)), me) {
                            case 64:
                                switch (0 < ze && (G = G.replace(y, "")), K = G.charCodeAt(1), K) {
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        ze = I;
                                        break;
                                    default:
                                        ze = fe
                                }
                                if (re = t(I, ze, re, K, C + 1), be = re.length, 0 < L && (ze = n(fe, G, En), bt = s(3, re, ze, I, oe, ee, be, K, C, W), G = ze.join(""), bt !== void 0 && (be = (re = bt.trim()).length) === 0 && (K = 0, re = "")), 0 < be) switch (K) {
                                    case 115:
                                        G = G.replace(P, l);
                                    case 100:
                                    case 109:
                                    case 45:
                                        re = G + "{" + re + "}";
                                        break;
                                    case 107:
                                        G = G.replace(h, "$1 $2"), re = G + "{" + re + "}", re = ce === 1 || ce === 2 && o("@" + re, 3) ? "@-webkit-" + re + "@" + re : "@" + re;
                                        break;
                                    default:
                                        re = G + re, W === 112 && (re = (xe += re, ""))
                                } else re = "";
                                break;
                            default:
                                re = t(I, n(I, G, En), re, W, C + 1)
                        }
                        ri += re, re = En = ze = $e = me = 0, G = "", K = $.charCodeAt(++ne);
                        break;
                    case 125:
                    case 59:
                        if (G = (0 < ze ? G.replace(y, "") : G).trim(), 1 < (be = G.length)) switch ($e === 0 && (me = G.charCodeAt(0), me === 45 || 96 < me && 123 > me) && (be = (G = G.replace(" ", ":")).length), 0 < L && (bt = s(1, G, I, D, oe, ee, xe.length, W, C, W)) !== void 0 && (be = (G = bt.trim()).length) === 0 && (G = "\0\0"), me = G.charCodeAt(0), K = G.charCodeAt(1), me) {
                            case 0:
                                break;
                            case 64:
                                if (K === 105 || K === 99) {
                                    ii += G + $.charAt(ne);
                                    break
                                }
                            default:
                                G.charCodeAt(be - 1) !== 58 && (xe += i(G, me, K, G.charCodeAt(2)))
                        }
                        En = ze = $e = me = 0, G = "", K = $.charCodeAt(++ne)
                }
            }
            switch (K) {
                case 13:
                case 10:
                    F === 47 ? F = 0 : 1 + me === 0 && W !== 107 && 0 < G.length && (ze = 1, G += "\0"), 0 < L * q && s(0, G, I, D, oe, ee, xe.length, W, C, W), ee = 1, oe++;
                    break;
                case 59:
                case 125:
                    if (F + de + Te + te === 0) {
                        ee++;
                        break
                    }
                default:
                    switch (ee++, nt = $.charAt(ne), K) {
                        case 9:
                        case 32:
                            if (de + te + F === 0) switch (Ie) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    nt = "";
                                    break;
                                default:
                                    K !== 32 && (nt = " ")
                            }
                            break;
                        case 0:
                            nt = "\\0";
                            break;
                        case 12:
                            nt = "\\f";
                            break;
                        case 11:
                            nt = "\\v";
                            break;
                        case 38:
                            de + F + te === 0 && (ze = En = 1, nt = "\f" + nt);
                            break;
                        case 108:
                            if (de + F + te + se === 0 && 0 < $e) switch (ne - $e) {
                                case 2:
                                    Ie === 112 && $.charCodeAt(ne - 3) === 58 && (se = Ie);
                                case 8:
                                    qe === 111 && (se = qe)
                            }
                            break;
                        case 58:
                            de + F + te === 0 && ($e = ne);
                            break;
                        case 44:
                            F + Te + de + te === 0 && (ze = 1, nt += "\r");
                            break;
                        case 34:
                        case 39:
                            F === 0 && (de = de === K ? 0 : de === 0 ? K : de);
                            break;
                        case 91:
                            de + F + Te === 0 && te++;
                            break;
                        case 93:
                            de + F + Te === 0 && te--;
                            break;
                        case 41:
                            de + F + te === 0 && Te--;
                            break;
                        case 40:
                            if (de + F + te === 0) {
                                if (me === 0) switch (2 * Ie + 3 * qe) {
                                    case 533:
                                        break;
                                    default:
                                        me = 1
                                }
                                Te++
                            }
                            break;
                        case 64:
                            F + Te + de + te + $e + re === 0 && (re = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < de + te + Te)) switch (F) {
                                case 0:
                                    switch (2 * K + 3 * $.charCodeAt(ne + 1)) {
                                        case 235:
                                            F = 47;
                                            break;
                                        case 220:
                                            be = ne, F = 42
                                    }
                                    break;
                                case 42:
                                    K === 47 && Ie === 42 && be + 2 !== ne && ($.charCodeAt(be + 2) === 33 && (xe += $.substring(be, ne + 1)), nt = "", F = 0)
                            }
                    }
                    F === 0 && (G += nt)
            }
            qe = Ie, Ie = K, ne++
        }
        if (be = xe.length, 0 < be) {
            if (ze = I, 0 < L && (bt = s(2, xe, ze, D, oe, ee, be, W, C, W), bt !== void 0 && (xe = bt).length === 0)) return ii + xe + ri;
            if (xe = ze.join(",") + "{" + xe + "}", ce * se !== 0) {
                switch (ce !== 2 || o(xe, 2) || (se = 0), se) {
                    case 111:
                        xe = xe.replace(S, ":-moz-$1") + xe;
                        break;
                    case 112:
                        xe = xe.replace(p, "::-webkit-input-$1") + xe.replace(p, "::-moz-$1") + xe.replace(p, ":-ms-input-$1") + xe
                }
                se = 0
            }
        }
        return ii + xe + ri
    }

    function n(D, I, $) {
        var W = I.trim().split(w);
        I = W;
        var C = W.length,
            te = D.length;
        switch (te) {
            case 0:
            case 1:
                var F = 0;
                for (D = te === 0 ? "" : D[0] + " "; F < C; ++F) I[F] = r(D, I[F], $).trim();
                break;
            default:
                var Te = F = 0;
                for (I = []; F < C; ++F)
                    for (var de = 0; de < te; ++de) I[Te++] = r(D[de] + " ", W[F], $).trim()
        }
        return I
    }

    function r(D, I, $) {
        var W = I.charCodeAt(0);
        switch (33 > W && (W = (I = I.trim()).charCodeAt(0)), W) {
            case 38:
                return I.replace(c, "$1" + D.trim());
            case 58:
                return D.trim() + I.replace(c, "$1" + D.trim());
            default:
                if (0 < 1 * $ && 0 < I.indexOf("\f")) return I.replace(c, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim())
        }
        return D + I
    }

    function i(D, I, $, W) {
        var C = D + ";",
            te = 2 * I + 3 * $ + 4 * W;
        if (te === 944) {
            D = C.indexOf(":", 9) + 1;
            var F = C.substring(D, C.length - 1).trim();
            return F = C.substring(0, D).trim() + F + ";", ce === 1 || ce === 2 && o(F, 1) ? "-webkit-" + F + F : F
        }
        if (ce === 0 || ce === 2 && !o(C, 1)) return C;
        switch (te) {
            case 1015:
                return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
            case 951:
                return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
            case 963:
                return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
            case 1009:
                if (C.charCodeAt(4) !== 100) break;
            case 969:
            case 942:
                return "-webkit-" + C + C;
            case 978:
                return "-webkit-" + C + "-moz-" + C + C;
            case 1019:
            case 983:
                return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
            case 883:
                if (C.charCodeAt(8) === 45) return "-webkit-" + C + C;
                if (0 < C.indexOf("image-set(", 11)) return C.replace(le, "$1-webkit-$2") + C;
                break;
            case 932:
                if (C.charCodeAt(4) === 45) switch (C.charCodeAt(5)) {
                    case 103:
                        return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
                    case 115:
                        return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
                    case 98:
                        return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C
                }
                return "-webkit-" + C + "-ms-" + C + C;
            case 964:
                return "-webkit-" + C + "-ms-flex-" + C + C;
            case 1023:
                if (C.charCodeAt(8) !== 99) break;
                return F = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + F + "-webkit-" + C + "-ms-flex-pack" + F + C;
            case 1005:
                return m.test(C) ? C.replace(g, ":-webkit-") + C.replace(g, ":-moz-") + C : C;
            case 1e3:
                switch (F = C.substring(13).trim(), I = F.indexOf("-") + 1, F.charCodeAt(0) + F.charCodeAt(I)) {
                    case 226:
                        F = C.replace(E, "tb");
                        break;
                    case 232:
                        F = C.replace(E, "tb-rl");
                        break;
                    case 220:
                        F = C.replace(E, "lr");
                        break;
                    default:
                        return C
                }
                return "-webkit-" + C + "-ms-" + F + C;
            case 1017:
                if (C.indexOf("sticky", 9) === -1) break;
            case 975:
                switch (I = (C = D).length - 10, F = (C.charCodeAt(I) === 33 ? C.substring(0, I) : C).substring(D.indexOf(":", 7) + 1).trim(), te = F.charCodeAt(0) + (F.charCodeAt(7) | 0)) {
                    case 203:
                        if (111 > F.charCodeAt(8)) break;
                    case 115:
                        C = C.replace(F, "-webkit-" + F) + ";" + C;
                        break;
                    case 207:
                    case 102:
                        C = C.replace(F, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + C.replace(F, "-webkit-" + F) + ";" + C.replace(F, "-ms-" + F + "box") + ";" + C
                }
                return C + ";";
            case 938:
                if (C.charCodeAt(5) === 45) switch (C.charCodeAt(6)) {
                    case 105:
                        return F = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + F + "-ms-flex-" + F + C;
                    case 115:
                        return "-webkit-" + C + "-ms-flex-item-" + C.replace(R, "") + C;
                    default:
                        return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(R, "") + C
                }
                break;
            case 973:
            case 989:
                if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122) break;
            case 931:
            case 953:
                if (j.test(D) === !0) return (F = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(D.replace("stretch", "fill-available"), I, $, W).replace(":fill-available", ":stretch") : C.replace(F, "-webkit-" + F) + C.replace(F, "-moz-" + F.replace("fill-", "")) + C;
                break;
            case 962:
                if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, $ + W === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10)) return C.substring(0, C.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + C
        }
        return C
    }

    function o(D, I) {
        var $ = D.indexOf(I === 1 ? ":" : "{"),
            W = D.substring(0, I !== 3 ? $ : 10);
        return $ = D.substring($ + 1, D.length - 1), H(I !== 2 ? W : W.replace(M, "$1"), $, I)
    }

    function l(D, I) {
        var $ = i(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
        return $ !== I + ";" ? $.replace(T, " or ($1)").substring(4) : "(" + I + ")"
    }

    function s(D, I, $, W, C, te, F, Te, de, me) {
        for (var K = 0, Ie = I, qe; K < L; ++K) switch (qe = ve[K].call(f, D, Ie, $, W, C, te, F, Te, de, me)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                Ie = qe
        }
        if (Ie !== I) return Ie
    }

    function a(D) {
        switch (D) {
            case void 0:
            case null:
                L = ve.length = 0;
                break;
            default:
                if (typeof D == "function") ve[L++] = D;
                else if (typeof D == "object")
                    for (var I = 0, $ = D.length; I < $; ++I) a(D[I]);
                else q = !!D | 0
        }
        return a
    }

    function u(D) {
        return D = D.prefix, D !== void 0 && (H = null, D ? typeof D != "function" ? ce = 1 : (ce = 2, H = D) : ce = 0), u
    }

    function f(D, I) {
        var $ = D;
        if (33 > $.charCodeAt(0) && ($ = $.trim()), X = $, $ = [X], 0 < L) {
            var W = s(-1, I, $, $, oe, ee, 0, 0, 0, 0);
            W !== void 0 && typeof W == "string" && (I = W)
        }
        var C = t(fe, $, I, 0, 0);
        return 0 < L && (W = s(-2, C, $, $, oe, ee, C.length, 0, 0, 0), W !== void 0 && (C = W)), X = "", se = 0, ee = oe = 1, C
    }
    var d = /^\0+/g,
        y = /[\0\r\f]/g,
        g = /: */g,
        m = /zoo|gra/,
        v = /([,: ])(transform)/g,
        w = /,\r+?/g,
        c = /([\t\r\n ])*\f?&/g,
        h = /@(k\w+)\s*(\S*)\s*/,
        p = /::(place)/g,
        S = /:(read-only)/g,
        E = /[svh]\w+-[tblr]{2}/,
        P = /\(\s*(.*)\s*\)/g,
        T = /([\s\S]*?);/g,
        R = /-self|flex-/g,
        M = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        j = /stretch|:\s*\w+\-(?:conte|avail)/,
        le = /([^-])(image-set\()/,
        ee = 1,
        oe = 1,
        se = 0,
        ce = 1,
        fe = [],
        ve = [],
        L = 0,
        H = null,
        q = 0,
        X = "";
    return f.use = a, f.set = u, e !== void 0 && u(e), f
}
var JS = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};

function ZS(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}
var eE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    th = ZS(function(e) {
        return eE.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    }),
    Py = {
        exports: {}
    },
    Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je = typeof Symbol == "function" && Symbol.for,
    tf = Je ? Symbol.for("react.element") : 60103,
    nf = Je ? Symbol.for("react.portal") : 60106,
    Cs = Je ? Symbol.for("react.fragment") : 60107,
    ks = Je ? Symbol.for("react.strict_mode") : 60108,
    xs = Je ? Symbol.for("react.profiler") : 60114,
    Rs = Je ? Symbol.for("react.provider") : 60109,
    Ps = Je ? Symbol.for("react.context") : 60110,
    rf = Je ? Symbol.for("react.async_mode") : 60111,
    Os = Je ? Symbol.for("react.concurrent_mode") : 60111,
    Ts = Je ? Symbol.for("react.forward_ref") : 60112,
    Ns = Je ? Symbol.for("react.suspense") : 60113,
    tE = Je ? Symbol.for("react.suspense_list") : 60120,
    _s = Je ? Symbol.for("react.memo") : 60115,
    As = Je ? Symbol.for("react.lazy") : 60116,
    nE = Je ? Symbol.for("react.block") : 60121,
    rE = Je ? Symbol.for("react.fundamental") : 60117,
    iE = Je ? Symbol.for("react.responder") : 60118,
    oE = Je ? Symbol.for("react.scope") : 60119;

function Rt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case tf:
                switch (e = e.type, e) {
                    case rf:
                    case Os:
                    case Cs:
                    case xs:
                    case ks:
                    case Ns:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Ps:
                            case Ts:
                            case As:
                            case _s:
                            case Rs:
                                return e;
                            default:
                                return t
                        }
                }
            case nf:
                return t
        }
    }
}

function Oy(e) {
    return Rt(e) === Os
}
Se.AsyncMode = rf;
Se.ConcurrentMode = Os;
Se.ContextConsumer = Ps;
Se.ContextProvider = Rs;
Se.Element = tf;
Se.ForwardRef = Ts;
Se.Fragment = Cs;
Se.Lazy = As;
Se.Memo = _s;
Se.Portal = nf;
Se.Profiler = xs;
Se.StrictMode = ks;
Se.Suspense = Ns;
Se.isAsyncMode = function(e) {
    return Oy(e) || Rt(e) === rf
};
Se.isConcurrentMode = Oy;
Se.isContextConsumer = function(e) {
    return Rt(e) === Ps
};
Se.isContextProvider = function(e) {
    return Rt(e) === Rs
};
Se.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === tf
};
Se.isForwardRef = function(e) {
    return Rt(e) === Ts
};
Se.isFragment = function(e) {
    return Rt(e) === Cs
};
Se.isLazy = function(e) {
    return Rt(e) === As
};
Se.isMemo = function(e) {
    return Rt(e) === _s
};
Se.isPortal = function(e) {
    return Rt(e) === nf
};
Se.isProfiler = function(e) {
    return Rt(e) === xs
};
Se.isStrictMode = function(e) {
    return Rt(e) === ks
};
Se.isSuspense = function(e) {
    return Rt(e) === Ns
};
Se.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Cs || e === Os || e === xs || e === ks || e === Ns || e === tE || typeof e == "object" && e !== null && (e.$$typeof === As || e.$$typeof === _s || e.$$typeof === Rs || e.$$typeof === Ps || e.$$typeof === Ts || e.$$typeof === rE || e.$$typeof === iE || e.$$typeof === oE || e.$$typeof === nE)
};
Se.typeOf = Rt;
Py.exports = Se;
var lE = Py.exports,
    of = lE,
    sE = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    aE = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    uE = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    Ty = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    lf = {};
lf[ of .ForwardRef] = uE;
lf[ of .Memo] = Ty;

function nh(e) {
    return of.isMemo(e) ? Ty : lf[e.$$typeof] || sE
}
var cE = Object.defineProperty,
    fE = Object.getOwnPropertyNames,
    rh = Object.getOwnPropertySymbols,
    dE = Object.getOwnPropertyDescriptor,
    hE = Object.getPrototypeOf,
    ih = Object.prototype;

function Ny(e, t, n) {
    if (typeof t != "string") {
        if (ih) {
            var r = hE(t);
            r && r !== ih && Ny(e, r, n)
        }
        var i = fE(t);
        rh && (i = i.concat(rh(t)));
        for (var o = nh(e), l = nh(t), s = 0; s < i.length; ++s) {
            var a = i[s];
            if (!aE[a] && !(n && n[a]) && !(l && l[a]) && !(o && o[a])) {
                var u = dE(t, a);
                try {
                    cE(e, a, u)
                } catch {}
            }
        }
    }
    return e
}
var pE = Ny;
const mE = yh(pE);

function cn() {
    return (cn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var oh = function(e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
        return n
    },
    Du = function(e) {
        return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ry.typeOf(e)
    },
    Fl = Object.freeze([]),
    jn = Object.freeze({});

function no(e) {
    return typeof e == "function"
}

function lh(e) {
    return e.displayName || e.name || "Component"
}

function sf(e) {
    return e && typeof e.styledComponentId == "string"
}
var Yr = typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled",
    af = typeof window < "u" && "HTMLElement" in window,
    yE = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" && {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY));

function po(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var vE = function() {
        function e(n) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n
        }
        var t = e.prototype;
        return t.indexOfGroup = function(n) {
            for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i];
            return r
        }, t.insertRules = function(n, r) {
            if (n >= this.groupSizes.length) {
                for (var i = this.groupSizes, o = i.length, l = o; n >= l;)(l <<= 1) < 0 && po(16, "" + n);
                this.groupSizes = new Uint32Array(l), this.groupSizes.set(i), this.length = l;
                for (var s = o; s < l; s++) this.groupSizes[s] = 0
            }
            for (var a = this.indexOfGroup(n + 1), u = 0, f = r.length; u < f; u++) this.tag.insertRule(a, r[u]) && (this.groupSizes[n]++, a++)
        }, t.clearGroup = function(n) {
            if (n < this.length) {
                var r = this.groupSizes[n],
                    i = this.indexOfGroup(n),
                    o = i + r;
                this.groupSizes[n] = 0;
                for (var l = i; l < o; l++) this.tag.deleteRule(i)
            }
        }, t.getGroup = function(n) {
            var r = "";
            if (n >= this.length || this.groupSizes[n] === 0) return r;
            for (var i = this.groupSizes[n], o = this.indexOfGroup(n), l = o + i, s = o; s < l; s++) r += this.tag.getRule(s) + `/*!sc*/
`;
            return r
        }, e
    }(),
    rl = new Map,
    Ml = new Map,
    Di = 1,
    Mo = function(e) {
        if (rl.has(e)) return rl.get(e);
        for (; Ml.has(Di);) Di++;
        var t = Di++;
        return rl.set(e, t), Ml.set(t, e), t
    },
    gE = function(e) {
        return Ml.get(e)
    },
    wE = function(e, t) {
        t >= Di && (Di = t + 1), rl.set(e, t), Ml.set(t, e)
    },
    SE = "style[" + Yr + '][data-styled-version="5.3.10"]',
    EE = new RegExp("^" + Yr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    CE = function(e, t, n) {
        for (var r, i = n.split(","), o = 0, l = i.length; o < l; o++)(r = i[o]) && e.registerName(t, r)
    },
    kE = function(e, t) {
        for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, o = n.length; i < o; i++) {
            var l = n[i].trim();
            if (l) {
                var s = l.match(EE);
                if (s) {
                    var a = 0 | parseInt(s[1], 10),
                        u = s[2];
                    a !== 0 && (wE(u, a), CE(e, u, s[3]), e.getTag().insertRules(a, r)), r.length = 0
                } else r.push(l)
            }
        }
    },
    xE = function() {
        return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
    },
    _y = function(e) {
        var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            i = function(s) {
                for (var a = s.childNodes, u = a.length; u >= 0; u--) {
                    var f = a[u];
                    if (f && f.nodeType === 1 && f.hasAttribute(Yr)) return f
                }
            }(n),
            o = i !== void 0 ? i.nextSibling : null;
        r.setAttribute(Yr, "active"), r.setAttribute("data-styled-version", "5.3.10");
        var l = xE();
        return l && r.setAttribute("nonce", l), n.insertBefore(r, o), r
    },
    RE = function() {
        function e(n) {
            var r = this.element = _y(n);
            r.appendChild(document.createTextNode("")), this.sheet = function(i) {
                if (i.sheet) return i.sheet;
                for (var o = document.styleSheets, l = 0, s = o.length; l < s; l++) {
                    var a = o[l];
                    if (a.ownerNode === i) return a
                }
                po(17)
            }(r), this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(n, r) {
            try {
                return this.sheet.insertRule(r, n), this.length++, !0
            } catch {
                return !1
            }
        }, t.deleteRule = function(n) {
            this.sheet.deleteRule(n), this.length--
        }, t.getRule = function(n) {
            var r = this.sheet.cssRules[n];
            return r !== void 0 && typeof r.cssText == "string" ? r.cssText : ""
        }, e
    }(),
    PE = function() {
        function e(n) {
            var r = this.element = _y(n);
            this.nodes = r.childNodes, this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(n, r) {
            if (n <= this.length && n >= 0) {
                var i = document.createTextNode(r),
                    o = this.nodes[n];
                return this.element.insertBefore(i, o || null), this.length++, !0
            }
            return !1
        }, t.deleteRule = function(n) {
            this.element.removeChild(this.nodes[n]), this.length--
        }, t.getRule = function(n) {
            return n < this.length ? this.nodes[n].textContent : ""
        }, e
    }(),
    OE = function() {
        function e(n) {
            this.rules = [], this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(n, r) {
            return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        }, t.deleteRule = function(n) {
            this.rules.splice(n, 1), this.length--
        }, t.getRule = function(n) {
            return n < this.length ? this.rules[n] : ""
        }, e
    }(),
    sh = af,
    TE = {
        isServer: !af,
        useCSSOMInjection: !yE
    },
    Ay = function() {
        function e(n, r, i) {
            n === void 0 && (n = jn), r === void 0 && (r = {}), this.options = cn({}, TE, {}, n), this.gs = r, this.names = new Map(i), this.server = !!n.isServer, !this.server && af && sh && (sh = !1, function(o) {
                for (var l = document.querySelectorAll(SE), s = 0, a = l.length; s < a; s++) {
                    var u = l[s];
                    u && u.getAttribute(Yr) !== "active" && (kE(o, u), u.parentNode && u.parentNode.removeChild(u))
                }
            }(this))
        }
        e.registerId = function(n) {
            return Mo(n)
        };
        var t = e.prototype;
        return t.reconstructWithOptions = function(n, r) {
            return r === void 0 && (r = !0), new e(cn({}, this.options, {}, n), this.gs, r && this.names || void 0)
        }, t.allocateGSInstance = function(n) {
            return this.gs[n] = (this.gs[n] || 0) + 1
        }, t.getTag = function() {
            return this.tag || (this.tag = (i = (r = this.options).isServer, o = r.useCSSOMInjection, l = r.target, n = i ? new OE(l) : o ? new RE(l) : new PE(l), new vE(n)));
            var n, r, i, o, l
        }, t.hasNameForId = function(n, r) {
            return this.names.has(n) && this.names.get(n).has(r)
        }, t.registerName = function(n, r) {
            if (Mo(n), this.names.has(n)) this.names.get(n).add(r);
            else {
                var i = new Set;
                i.add(r), this.names.set(n, i)
            }
        }, t.insertRules = function(n, r, i) {
            this.registerName(n, r), this.getTag().insertRules(Mo(n), i)
        }, t.clearNames = function(n) {
            this.names.has(n) && this.names.get(n).clear()
        }, t.clearRules = function(n) {
            this.getTag().clearGroup(Mo(n)), this.clearNames(n)
        }, t.clearTag = function() {
            this.tag = void 0
        }, t.toString = function() {
            return function(n) {
                for (var r = n.getTag(), i = r.length, o = "", l = 0; l < i; l++) {
                    var s = gE(l);
                    if (s !== void 0) {
                        var a = n.names.get(s),
                            u = r.getGroup(l);
                        if (a && u && a.size) {
                            var f = Yr + ".g" + l + '[id="' + s + '"]',
                                d = "";
                            a !== void 0 && a.forEach(function(y) {
                                y.length > 0 && (d += y + ",")
                            }), o += "" + u + f + '{content:"' + d + `"}/*!sc*/
`
                        }
                    }
                }
                return o
            }(this)
        }, e
    }(),
    NE = /(a)(d)/gi,
    ah = function(e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
    };

function Fu(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = ah(t % 52) + n;
    return (ah(t % 52) + n).replace(NE, "$1-$2")
}
var Lr = function(e, t) {
        for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
        return e
    },
    Ly = function(e) {
        return Lr(5381, e)
    };

function _E(e) {
    for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (no(n) && !sf(n)) return !1
    }
    return !0
}
var AE = Ly("5.3.10"),
    LE = function() {
        function e(t, n, r) {
            this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && _E(t), this.componentId = n, this.baseHash = Lr(AE, n), this.baseStyle = r, Ay.registerId(n)
        }
        return e.prototype.generateAndInjectStyles = function(t, n, r) {
            var i = this.componentId,
                o = [];
            if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
                if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId)) o.push(this.staticRulesId);
                else {
                    var l = Xr(this.rules, t, n, r).join(""),
                        s = Fu(Lr(this.baseHash, l) >>> 0);
                    if (!n.hasNameForId(i, s)) {
                        var a = r(l, "." + s, void 0, i);
                        n.insertRules(i, s, a)
                    }
                    o.push(s), this.staticRulesId = s
                }
            else {
                for (var u = this.rules.length, f = Lr(this.baseHash, r.hash), d = "", y = 0; y < u; y++) {
                    var g = this.rules[y];
                    if (typeof g == "string") d += g;
                    else if (g) {
                        var m = Xr(g, t, n, r),
                            v = Array.isArray(m) ? m.join("") : m;
                        f = Lr(f, v + y), d += v
                    }
                }
                if (d) {
                    var w = Fu(f >>> 0);
                    if (!n.hasNameForId(i, w)) {
                        var c = r(d, "." + w, void 0, i);
                        n.insertRules(i, w, c)
                    }
                    o.push(w)
                }
            }
            return o.join(" ")
        }, e
    }(),
    DE = /^\s*\/\/.*$/gm,
    FE = [":", "[", ".", "#"];

function ME(e) {
    var t, n, r, i, o = e === void 0 ? jn : e,
        l = o.options,
        s = l === void 0 ? jn : l,
        a = o.plugins,
        u = a === void 0 ? Fl : a,
        f = new XS(s),
        d = [],
        y = function(v) {
            function w(c) {
                if (c) try {
                    v(c + "}")
                } catch {}
            }
            return function(c, h, p, S, E, P, T, R, M, j) {
                switch (c) {
                    case 1:
                        if (M === 0 && h.charCodeAt(0) === 64) return v(h + ";"), "";
                        break;
                    case 2:
                        if (R === 0) return h + "/*|*/";
                        break;
                    case 3:
                        switch (R) {
                            case 102:
                            case 112:
                                return v(p[0] + h), "";
                            default:
                                return h + (j === 0 ? "/*|*/" : "")
                        }
                    case -2:
                        h.split("/*|*/}").forEach(w)
                }
            }
        }(function(v) {
            d.push(v)
        }),
        g = function(v, w, c) {
            return w === 0 && FE.indexOf(c[n.length]) !== -1 || c.match(i) ? v : "." + t
        };

    function m(v, w, c, h) {
        h === void 0 && (h = "&");
        var p = v.replace(DE, ""),
            S = w && c ? c + " " + w + " { " + p + " }" : p;
        return t = h, n = w, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), f(c || !w ? "" : w, S)
    }
    return f.use([].concat(u, [function(v, w, c) {
        v === 2 && c.length && c[0].lastIndexOf(n) > 0 && (c[0] = c[0].replace(r, g))
    }, y, function(v) {
        if (v === -2) {
            var w = d;
            return d = [], w
        }
    }])), m.hash = u.length ? u.reduce(function(v, w) {
        return w.name || po(15), Lr(v, w.name)
    }, 5381).toString() : "", m
}
var Dy = ye.createContext();
Dy.Consumer;
var Fy = ye.createContext(),
    IE = (Fy.Consumer, new Ay),
    Mu = ME();

function $E() {
    return k.useContext(Dy) || IE
}

function zE() {
    return k.useContext(Fy) || Mu
}
var bE = function() {
        function e(t, n) {
            var r = this;
            this.inject = function(i, o) {
                o === void 0 && (o = Mu);
                var l = r.name + o.hash;
                i.hasNameForId(r.id, l) || i.insertRules(r.id, l, o(r.rules, l, "@keyframes"))
            }, this.toString = function() {
                return po(12, String(r.name))
            }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n
        }
        return e.prototype.getName = function(t) {
            return t === void 0 && (t = Mu), this.name + t.hash
        }, e
    }(),
    UE = /([A-Z])/,
    jE = /([A-Z])/g,
    BE = /^ms-/,
    QE = function(e) {
        return "-" + e.toLowerCase()
    };

function uh(e) {
    return UE.test(e) ? e.replace(jE, QE).replace(BE, "-ms-") : e
}
var ch = function(e) {
    return e == null || e === !1 || e === ""
};

function Xr(e, t, n, r) {
    if (Array.isArray(e)) {
        for (var i, o = [], l = 0, s = e.length; l < s; l += 1)(i = Xr(e[l], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        return o
    }
    if (ch(e)) return "";
    if (sf(e)) return "." + e.styledComponentId;
    if (no(e)) {
        if (typeof(u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t) return e;
        var a = e(t);
        return Xr(a, t, n, r)
    }
    var u;
    return e instanceof bE ? n ? (e.inject(n, r), e.getName(r)) : e : Du(e) ? function f(d, y) {
        var g, m, v = [];
        for (var w in d) d.hasOwnProperty(w) && !ch(d[w]) && (Array.isArray(d[w]) && d[w].isCss || no(d[w]) ? v.push(uh(w) + ":", d[w], ";") : Du(d[w]) ? v.push.apply(v, f(d[w], w)) : v.push(uh(w) + ": " + (g = w, (m = d[w]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || g in JS || g.startsWith("--") ? String(m).trim() : m + "px") + ";"));
        return y ? [y + " {"].concat(v, ["}"]) : v
    }(e) : e.toString()
}
var fh = function(e) {
    return Array.isArray(e) && (e.isCss = !0), e
};

function HE(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return no(e) || Du(e) ? fh(Xr(oh(Fl, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : fh(Xr(oh(e, n)))
}
var WE = function(e, t, n) {
        return n === void 0 && (n = jn), e.theme !== n.theme && e.theme || t || n.theme
    },
    VE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    qE = /(^-|-$)/g;

function Ea(e) {
    return e.replace(VE, "-").replace(qE, "")
}
var KE = function(e) {
    return Fu(Ly(e) >>> 0)
};

function Io(e) {
    return typeof e == "string" && !0
}
var Iu = function(e) {
        return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e)
    },
    GE = function(e) {
        return e !== "__proto__" && e !== "constructor" && e !== "prototype"
    };

function YE(e, t, n) {
    var r = e[n];
    Iu(t) && Iu(r) ? My(r, t) : e[n] = t
}

function My(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    for (var i = 0, o = n; i < o.length; i++) {
        var l = o[i];
        if (Iu(l))
            for (var s in l) GE(s) && YE(e, l[s], s)
    }
    return e
}
var Iy = ye.createContext();
Iy.Consumer;
var Ca = {};

function $y(e, t, n) {
    var r = sf(e),
        i = !Io(e),
        o = t.attrs,
        l = o === void 0 ? Fl : o,
        s = t.componentId,
        a = s === void 0 ? function(h, p) {
            var S = typeof h != "string" ? "sc" : Ea(h);
            Ca[S] = (Ca[S] || 0) + 1;
            var E = S + "-" + KE("5.3.10" + S + Ca[S]);
            return p ? p + "-" + E : E
        }(t.displayName, t.parentComponentId) : s,
        u = t.displayName,
        f = u === void 0 ? function(h) {
            return Io(h) ? "styled." + h : "Styled(" + lh(h) + ")"
        }(e) : u,
        d = t.displayName && t.componentId ? Ea(t.displayName) + "-" + t.componentId : t.componentId || a,
        y = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
        g = t.shouldForwardProp;
    r && e.shouldForwardProp && (g = t.shouldForwardProp ? function(h, p, S) {
        return e.shouldForwardProp(h, p, S) && t.shouldForwardProp(h, p, S)
    } : e.shouldForwardProp);
    var m, v = new LE(n, d, r ? e.componentStyle : void 0),
        w = v.isStatic && l.length === 0,
        c = function(h, p) {
            return function(S, E, P, T) {
                var R = S.attrs,
                    M = S.componentStyle,
                    j = S.defaultProps,
                    le = S.foldedComponentIds,
                    ee = S.shouldForwardProp,
                    oe = S.styledComponentId,
                    se = S.target,
                    ce = function(W, C, te) {
                        W === void 0 && (W = jn);
                        var F = cn({}, C, {
                                theme: W
                            }),
                            Te = {};
                        return te.forEach(function(de) {
                            var me, K, Ie, qe = de;
                            for (me in no(qe) && (qe = qe(F)), qe) F[me] = Te[me] = me === "className" ? (K = Te[me], Ie = qe[me], K && Ie ? K + " " + Ie : K || Ie) : qe[me]
                        }), [F, Te]
                    }(WE(E, k.useContext(Iy), j) || jn, E, R),
                    fe = ce[0],
                    ve = ce[1],
                    L = function(W, C, te, F) {
                        var Te = $E(),
                            de = zE(),
                            me = C ? W.generateAndInjectStyles(jn, Te, de) : W.generateAndInjectStyles(te, Te, de);
                        return me
                    }(M, T, fe),
                    H = P,
                    q = ve.$as || E.$as || ve.as || E.as || se,
                    X = Io(q),
                    D = ve !== E ? cn({}, E, {}, ve) : E,
                    I = {};
                for (var $ in D) $[0] !== "$" && $ !== "as" && ($ === "forwardedAs" ? I.as = D[$] : (ee ? ee($, th, q) : !X || th($)) && (I[$] = D[$]));
                return E.style && ve.style !== E.style && (I.style = cn({}, E.style, {}, ve.style)), I.className = Array.prototype.concat(le, oe, L !== oe ? L : null, E.className, ve.className).filter(Boolean).join(" "), I.ref = H, k.createElement(q, I)
            }(m, h, p, w)
        };
    return c.displayName = f, (m = ye.forwardRef(c)).attrs = y, m.componentStyle = v, m.displayName = f, m.shouldForwardProp = g, m.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Fl, m.styledComponentId = d, m.target = r ? e.target : e, m.withComponent = function(h) {
        var p = t.componentId,
            S = function(P, T) {
                if (P == null) return {};
                var R, M, j = {},
                    le = Object.keys(P);
                for (M = 0; M < le.length; M++) R = le[M], T.indexOf(R) >= 0 || (j[R] = P[R]);
                return j
            }(t, ["componentId"]),
            E = p && p + "-" + (Io(h) ? h : Ea(lh(h)));
        return $y(h, cn({}, S, {
            attrs: y,
            componentId: E
        }), n)
    }, Object.defineProperty(m, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(h) {
            this._foldedDefaultProps = r ? My({}, e.defaultProps, h) : h
        }
    }), Object.defineProperty(m, "toString", {
        value: function() {
            return "." + m.styledComponentId
        }
    }), i && mE(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), m
}
var $u = function(e) {
    return function t(n, r, i) {
        if (i === void 0 && (i = jn), !Ry.isValidElementType(r)) return po(1, String(r));
        var o = function() {
            return n(r, i, HE.apply(void 0, arguments))
        };
        return o.withConfig = function(l) {
            return t(n, r, cn({}, i, {}, l))
        }, o.attrs = function(l) {
            return t(n, r, cn({}, i, {
                attrs: Array.prototype.concat(i.attrs, l).filter(Boolean)
            }))
        }, o
    }($y, e)
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
    $u[e] = $u(e)
});
const pr = $u,
    XE = pr.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,
    JE = pr.article `
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`,
    ZE = ({
        image: e,
        name: t,
        id: n,
        info: r,
        glass: i
    }) => Ce(JE, {
        children: [b("div", {
            className: "img-container",
            children: b("img", {
                src: e,
                alt: t,
                className: "img"
            })
        }), Ce("div", {
            className: "footer",
            children: [b("h4", {
                children: t
            }), b("h5", {
                children: i
            }), b("p", {
                children: r
            }), b(Qc, {
                to: `/cocktail/${n}`,
                className: "btn",
                children: "details"
            })]
        })]
    }),
    eC = ({
        drinks: e
    }) => {
        if (!e) return b("h4", {
            style: {
                textAlign: "center"
            },
            children: "No matching cocktails found..."
        });
        const t = e.map(n => {
            const {
                idDrink: r,
                strDrink: i,
                strDrinkThumb: o,
                strAlcoholic: l,
                strGlass: s
            } = n;
            return {
                id: r,
                name: i,
                image: o,
                info: l,
                glass: s
            }
        });
        return b(XE, {
            children: t.map(n => b(ZE, { ...n
            }, n.id))
        })
    },
    tC = pr.div `
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`,
    nC = ({
        searchTerm: e
    }) => {
        const n = Uc().state === "submitting";
        return b(tC, {
            children: Ce(Hm, {
                className: "form",
                children: [b("input", {
                    type: "search",
                    name: "search",
                    className: "form-input",
                    defaultValue: e
                }), b("button", {
                    type: "submit",
                    className: "btn",
                    disabled: n,
                    children: n ? "searching..." : "search"
                })]
            })
        })
    },
    rC = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    zy = e => ({
        queryKey: ["search", e || "all"],
        queryFn: async () => (e = e || "a", (await Jc.get(`${rC}${e}`)).data.drinks)
    }),
    iC = e => async ({
        request: t
    }) => {
        const r = new URL(t.url).searchParams.get("search") || "";
        return await e.ensureQueryData(zy(r)), {
            searchTerm: r
        }
    },
    oC = () => {
        const {
            searchTerm: e
        } = Qm(), {
            data: t
        } = ry(zy(e));
        return Ce(Oh, {
            children: [b(nC, {
                searchTerm: e
            }), b(eC, {
                drinks: t
            })]
        })
    },
    lC = pr.div `
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`,
    sC = () => Ce(lC, {
        children: [b("h3", {
            children: "About Us"
        }), b("p", {
            children: `Introducing "MixMaster," the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a time, and let the laughter and giggles flow!`
        })]
    }),
    aC = pr.div `
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`,
    uC = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
    by = e => ({
        queryKey: ["cocktail", e],
        queryFn: async () => {
            const {
                data: t
            } = await Jc.get(`${uC}${e}`);
            return t
        }
    }),
    cC = e => async ({
        params: t
    }) => {
        const {
            id: n
        } = t;
        return await e.ensureQueryData(by(n)), {
            id: n
        }
    },
    fC = () => {
        const {
            id: e
        } = Qm(), t = zc(), {
            data: n
        } = ry(by(e));
        if (!n) return b(S1, {
            to: "/"
        });
        const r = n.drinks[0],
            {
                strDrink: i,
                strDrinkThumb: o,
                strAlcoholic: l,
                strCategory: s,
                strGlass: a,
                strInstructions: u
            } = r,
            f = Object.keys(r).filter(d => d.startsWith("strIngredient") && r[d] !== null).map(d => r[d]);
        return Ce(aC, {
            children: [Ce("header", {
                children: [b("button", {
                    className: "btn",
                    onClick: () => t(-1),
                    children: "back home"
                }), b("h3", {
                    children: i
                })]
            }), Ce("div", {
                className: "drink",
                children: [b("img", {
                    src: o,
                    alt: i,
                    className: "img"
                }), Ce("div", {
                    className: "drink-info",
                    children: [Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "name :"
                        }), i]
                    }), Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "category :"
                        }), s]
                    }), Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "info :"
                        }), l]
                    }), Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "glass :"
                        }), a]
                    }), Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "ingredients :"
                        }), f.map((d, y) => Ce("span", {
                            className: "ing",
                            children: [d, y < f.length - 1 ? "," : ""]
                        }, d))]
                    }), Ce("p", {
                        children: [b("span", {
                            className: "drink-data",
                            children: "instructions :"
                        }), u]
                    })]
                })]
            })]
        })
    };

function Uy(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = Uy(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Ln() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Uy(e)) && (r && (r += " "), r += t);
    return r
}
const Fi = e => typeof e == "number" && !isNaN(e),
    cr = e => typeof e == "string",
    pt = e => typeof e == "function",
    il = e => cr(e) || pt(e) ? e : null,
    ka = e => k.isValidElement(e) || cr(e) || pt(e) || Fi(e);

function dC(e, t, n) {
    n === void 0 && (n = 300);
    const {
        scrollHeight: r,
        style: i
    } = e;
    requestAnimationFrame(() => {
        i.minHeight = "initial", i.height = r + "px", i.transition = `all ${n}ms`, requestAnimationFrame(() => {
            i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, n)
        })
    })
}

function Ls(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: i = !0,
        collapseDuration: o = 300
    } = e;
    return function(l) {
        let {
            children: s,
            position: a,
            preventExitTransition: u,
            done: f,
            nodeRef: d,
            isIn: y
        } = l;
        const g = r ? `${t}--${a}` : t,
            m = r ? `${n}--${a}` : n,
            v = k.useRef(0);
        return k.useLayoutEffect(() => {
            const w = d.current,
                c = g.split(" "),
                h = p => {
                    p.target === d.current && (w.dispatchEvent(new Event("d")), w.removeEventListener("animationend", h), w.removeEventListener("animationcancel", h), v.current === 0 && p.type !== "animationcancel" && w.classList.remove(...c))
                };
            w.classList.add(...c), w.addEventListener("animationend", h), w.addEventListener("animationcancel", h)
        }, []), k.useEffect(() => {
            const w = d.current,
                c = () => {
                    w.removeEventListener("animationend", c), i ? dC(w, f, o) : f()
                };
            y || (u ? c() : (v.current = 1, w.className += ` ${m}`, w.addEventListener("animationend", c)))
        }, [y]), ye.createElement(ye.Fragment, null, s)
    }
}

function dh(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const Nt = {
        list: new Map,
        emitQueue: new Map,
        on(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
        },
        off(e, t) {
            if (t) {
                const n = this.list.get(e).filter(r => r !== t);
                return this.list.set(e, n), this
            }
            return this.list.delete(e), this
        },
        cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
        },
        emit(e) {
            this.list.has(e) && this.list.get(e).forEach(t => {
                const n = setTimeout(() => {
                    t(...[].slice.call(arguments, 1))
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n)
            })
        }
    },
    $o = e => {
        let {
            theme: t,
            type: n,
            ...r
        } = e;
        return ye.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
            ...r
        })
    },
    xa = {
        info: function(e) {
            return ye.createElement($o, { ...e
            }, ye.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
            }))
        },
        warning: function(e) {
            return ye.createElement($o, { ...e
            }, ye.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
            }))
        },
        success: function(e) {
            return ye.createElement($o, { ...e
            }, ye.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
            }))
        },
        error: function(e) {
            return ye.createElement($o, { ...e
            }, ye.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
            }))
        },
        spinner: function() {
            return ye.createElement("div", {
                className: "Toastify__spinner"
            })
        }
    };

function hC(e) {
    const [, t] = k.useReducer(g => g + 1, 0), [n, r] = k.useState([]), i = k.useRef(null), o = k.useRef(new Map).current, l = g => n.indexOf(g) !== -1, s = k.useRef({
        toastKey: 1,
        displayedToast: 0,
        count: 0,
        queue: [],
        props: e,
        containerId: null,
        isToastActive: l,
        getToast: g => o.get(g)
    }).current;

    function a(g) {
        let {
            containerId: m
        } = g;
        const {
            limit: v
        } = s.props;
        !v || m && s.containerId !== m || (s.count -= s.queue.length, s.queue = [])
    }

    function u(g) {
        r(m => g == null ? [] : m.filter(v => v !== g))
    }

    function f() {
        const {
            toastContent: g,
            toastProps: m,
            staleId: v
        } = s.queue.shift();
        y(g, m, v)
    }

    function d(g, m) {
        let {
            delay: v,
            staleId: w,
            ...c
        } = m;
        if (!ka(g) || function(ee) {
                return !i.current || s.props.enableMultiContainer && ee.containerId !== s.props.containerId || o.has(ee.toastId) && ee.updateId == null
            }(c)) return;
        const {
            toastId: h,
            updateId: p,
            data: S
        } = c, {
            props: E
        } = s, P = () => u(h), T = p == null;
        T && s.count++;
        const R = { ...E,
            style: E.toastStyle,
            key: s.toastKey++,
            ...Object.fromEntries(Object.entries(c).filter(ee => {
                let [oe, se] = ee;
                return se != null
            })),
            toastId: h,
            updateId: p,
            data: S,
            closeToast: P,
            isIn: !1,
            className: il(c.className || E.toastClassName),
            bodyClassName: il(c.bodyClassName || E.bodyClassName),
            progressClassName: il(c.progressClassName || E.progressClassName),
            autoClose: !c.isLoading && (M = c.autoClose, j = E.autoClose, M === !1 || Fi(M) && M > 0 ? M : j),
            deleteToast() {
                const ee = dh(o.get(h), "removed");
                o.delete(h), Nt.emit(4, ee);
                const oe = s.queue.length;
                if (s.count = h == null ? s.count - s.displayedToast : s.count - 1, s.count < 0 && (s.count = 0), oe > 0) {
                    const se = h == null ? s.props.limit : 1;
                    if (oe === 1 || se === 1) s.displayedToast++, f();
                    else {
                        const ce = se > oe ? oe : se;
                        s.displayedToast = ce;
                        for (let fe = 0; fe < ce; fe++) f()
                    }
                } else t()
            }
        };
        var M, j;
        R.iconOut = function(ee) {
            let {
                theme: oe,
                type: se,
                isLoading: ce,
                icon: fe
            } = ee, ve = null;
            const L = {
                theme: oe,
                type: se
            };
            return fe === !1 || (pt(fe) ? ve = fe(L) : k.isValidElement(fe) ? ve = k.cloneElement(fe, L) : cr(fe) || Fi(fe) ? ve = fe : ce ? ve = xa.spinner() : (H => H in xa)(se) && (ve = xa[se](L))), ve
        }(R), pt(c.onOpen) && (R.onOpen = c.onOpen), pt(c.onClose) && (R.onClose = c.onClose), R.closeButton = E.closeButton, c.closeButton === !1 || ka(c.closeButton) ? R.closeButton = c.closeButton : c.closeButton === !0 && (R.closeButton = !ka(E.closeButton) || E.closeButton);
        let le = g;
        k.isValidElement(g) && !cr(g.type) ? le = k.cloneElement(g, {
            closeToast: P,
            toastProps: R,
            data: S
        }) : pt(g) && (le = g({
            closeToast: P,
            toastProps: R,
            data: S
        })), E.limit && E.limit > 0 && s.count > E.limit && T ? s.queue.push({
            toastContent: le,
            toastProps: R,
            staleId: w
        }) : Fi(v) ? setTimeout(() => {
            y(le, R, w)
        }, v) : y(le, R, w)
    }

    function y(g, m, v) {
        const {
            toastId: w
        } = m;
        v && o.delete(v);
        const c = {
            content: g,
            props: m
        };
        o.set(w, c), r(h => [...h, w].filter(p => p !== v)), Nt.emit(4, dh(c, c.props.updateId == null ? "added" : "updated"))
    }
    return k.useEffect(() => (s.containerId = e.containerId, Nt.cancelEmit(3).on(0, d).on(1, g => i.current && u(g)).on(5, a).emit(2, s), () => {
        o.clear(), Nt.emit(3, s)
    }), []), k.useEffect(() => {
        s.props = e, s.isToastActive = l, s.displayedToast = n.length
    }), {
        getToastToRender: function(g) {
            const m = new Map,
                v = Array.from(o.values());
            return e.newestOnTop && v.reverse(), v.forEach(w => {
                const {
                    position: c
                } = w.props;
                m.has(c) || m.set(c, []), m.get(c).push(w)
            }), Array.from(m, w => g(w[0], w[1]))
        },
        containerRef: i,
        isToastActive: l
    }
}

function hh(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
}

function ph(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
}

function pC(e) {
    const [t, n] = k.useState(!1), [r, i] = k.useState(!1), o = k.useRef(null), l = k.useRef({
        start: 0,
        x: 0,
        y: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        boundingRect: null,
        didMove: !1
    }).current, s = k.useRef(e), {
        autoClose: a,
        pauseOnHover: u,
        closeToast: f,
        onClick: d,
        closeOnClick: y
    } = e;

    function g(S) {
        if (e.draggable) {
            S.nativeEvent.type === "touchstart" && S.nativeEvent.preventDefault(), l.didMove = !1, document.addEventListener("mousemove", c), document.addEventListener("mouseup", h), document.addEventListener("touchmove", c), document.addEventListener("touchend", h);
            const E = o.current;
            l.canCloseOnClick = !0, l.canDrag = !0, l.boundingRect = E.getBoundingClientRect(), E.style.transition = "", l.x = hh(S.nativeEvent), l.y = ph(S.nativeEvent), e.draggableDirection === "x" ? (l.start = l.x, l.removalDistance = E.offsetWidth * (e.draggablePercent / 100)) : (l.start = l.y, l.removalDistance = E.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
        }
    }

    function m(S) {
        if (l.boundingRect) {
            const {
                top: E,
                bottom: P,
                left: T,
                right: R
            } = l.boundingRect;
            S.nativeEvent.type !== "touchend" && e.pauseOnHover && l.x >= T && l.x <= R && l.y >= E && l.y <= P ? w() : v()
        }
    }

    function v() {
        n(!0)
    }

    function w() {
        n(!1)
    }

    function c(S) {
        const E = o.current;
        l.canDrag && E && (l.didMove = !0, t && w(), l.x = hh(S), l.y = ph(S), l.delta = e.draggableDirection === "x" ? l.x - l.start : l.y - l.start, l.start !== l.x && (l.canCloseOnClick = !1), E.style.transform = `translate${e.draggableDirection}(${l.delta}px)`, E.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance)))
    }

    function h() {
        document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h), document.removeEventListener("touchmove", c), document.removeEventListener("touchend", h);
        const S = o.current;
        if (l.canDrag && l.didMove && S) {
            if (l.canDrag = !1, Math.abs(l.delta) > l.removalDistance) return i(!0), void e.closeToast();
            S.style.transition = "transform 0.2s, opacity 0.2s", S.style.transform = `translate${e.draggableDirection}(0)`, S.style.opacity = "1"
        }
    }
    k.useEffect(() => {
        s.current = e
    }), k.useEffect(() => (o.current && o.current.addEventListener("d", v, {
        once: !0
    }), pt(e.onOpen) && e.onOpen(k.isValidElement(e.children) && e.children.props), () => {
        const S = s.current;
        pt(S.onClose) && S.onClose(k.isValidElement(S.children) && S.children.props)
    }), []), k.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || w(), window.addEventListener("focus", v), window.addEventListener("blur", w)), () => {
        e.pauseOnFocusLoss && (window.removeEventListener("focus", v), window.removeEventListener("blur", w))
    }), [e.pauseOnFocusLoss]);
    const p = {
        onMouseDown: g,
        onTouchStart: g,
        onMouseUp: m,
        onTouchEnd: m
    };
    return a && u && (p.onMouseEnter = w, p.onMouseLeave = v), y && (p.onClick = S => {
        d && d(S), l.canCloseOnClick && f()
    }), {
        playToast: v,
        pauseToast: w,
        isRunning: t,
        preventExitTransition: r,
        toastRef: o,
        eventHandlers: p
    }
}

function jy(e) {
    let {
        closeToast: t,
        theme: n,
        ariaLabel: r = "close"
    } = e;
    return ye.createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${n}`,
        type: "button",
        onClick: i => {
            i.stopPropagation(), t(i)
        },
        "aria-label": r
    }, ye.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, ye.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })))
}

function mC(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: i = "default",
        hide: o,
        className: l,
        style: s,
        controlledProgress: a,
        progress: u,
        rtl: f,
        isIn: d,
        theme: y
    } = e;
    const g = o || a && u === 0,
        m = { ...s,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: g ? 0 : 1
        };
    a && (m.transform = `scaleX(${u})`);
    const v = Ln("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${y}`, `Toastify__progress-bar--${i}`, {
            "Toastify__progress-bar--rtl": f
        }),
        w = pt(l) ? l({
            rtl: f,
            type: i,
            defaultClassName: v
        }) : Ln(v, l);
    return ye.createElement("div", {
        role: "progressbar",
        "aria-hidden": g ? "true" : "false",
        "aria-label": "notification timer",
        className: w,
        style: m,
        [a && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && u < 1 ? null : () => {
            d && r()
        }
    })
}
const yC = e => {
        const {
            isRunning: t,
            preventExitTransition: n,
            toastRef: r,
            eventHandlers: i
        } = pC(e), {
            closeButton: o,
            children: l,
            autoClose: s,
            onClick: a,
            type: u,
            hideProgressBar: f,
            closeToast: d,
            transition: y,
            position: g,
            className: m,
            style: v,
            bodyClassName: w,
            bodyStyle: c,
            progressClassName: h,
            progressStyle: p,
            updateId: S,
            role: E,
            progress: P,
            rtl: T,
            toastId: R,
            deleteToast: M,
            isIn: j,
            isLoading: le,
            iconOut: ee,
            closeOnClick: oe,
            theme: se
        } = e, ce = Ln("Toastify__toast", `Toastify__toast-theme--${se}`, `Toastify__toast--${u}`, {
            "Toastify__toast--rtl": T
        }, {
            "Toastify__toast--close-on-click": oe
        }), fe = pt(m) ? m({
            rtl: T,
            position: g,
            type: u,
            defaultClassName: ce
        }) : Ln(ce, m), ve = !!P || !s, L = {
            closeToast: d,
            type: u,
            theme: se
        };
        let H = null;
        return o === !1 || (H = pt(o) ? o(L) : k.isValidElement(o) ? k.cloneElement(o, L) : jy(L)), ye.createElement(y, {
            isIn: j,
            done: M,
            position: g,
            preventExitTransition: n,
            nodeRef: r
        }, ye.createElement("div", {
            id: R,
            onClick: a,
            className: fe,
            ...i,
            style: v,
            ref: r
        }, ye.createElement("div", { ...j && {
                role: E
            },
            className: pt(w) ? w({
                type: u
            }) : Ln("Toastify__toast-body", w),
            style: c
        }, ee != null && ye.createElement("div", {
            className: Ln("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !le
            })
        }, ee), ye.createElement("div", null, l)), H, ye.createElement(mC, { ...S && !ve ? {
                key: `pb-${S}`
            } : {},
            rtl: T,
            theme: se,
            delay: s,
            isRunning: t,
            isIn: j,
            closeToast: d,
            hide: f,
            type: u,
            style: p,
            className: h,
            controlledProgress: ve,
            progress: P || 0
        })))
    },
    Ds = function(e, t) {
        return t === void 0 && (t = !1), {
            enter: `Toastify--animate Toastify__${e}-enter`,
            exit: `Toastify--animate Toastify__${e}-exit`,
            appendPosition: t
        }
    },
    vC = Ls(Ds("bounce", !0));
Ls(Ds("slide", !0));
Ls(Ds("zoom"));
Ls(Ds("flip"));
const zu = k.forwardRef((e, t) => {
    const {
        getToastToRender: n,
        containerRef: r,
        isToastActive: i
    } = hC(e), {
        className: o,
        style: l,
        rtl: s,
        containerId: a
    } = e;

    function u(f) {
        const d = Ln("Toastify__toast-container", `Toastify__toast-container--${f}`, {
            "Toastify__toast-container--rtl": s
        });
        return pt(o) ? o({
            position: f,
            rtl: s,
            defaultClassName: d
        }) : Ln(d, il(o))
    }
    return k.useEffect(() => {
        t && (t.current = r.current)
    }, []), ye.createElement("div", {
        ref: r,
        className: "Toastify",
        id: a
    }, n((f, d) => {
        const y = d.length ? { ...l
        } : { ...l,
            pointerEvents: "none"
        };
        return ye.createElement("div", {
            className: u(f),
            style: y,
            key: `container-${f}`
        }, d.map((g, m) => {
            let {
                content: v,
                props: w
            } = g;
            return ye.createElement(yC, { ...w,
                isIn: i(w.toastId),
                style: { ...w.style,
                    "--nth": m + 1,
                    "--len": d.length
                },
                key: `toast-${w.key}`
            }, v)
        }))
    }))
});
zu.displayName = "ToastContainer", zu.defaultProps = {
    position: "top-right",
    transition: vC,
    autoClose: 5e3,
    closeButton: jy,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
let Ra, Xn = new Map,
    Ci = [],
    gC = 1;

function By() {
    return "" + gC++
}

function wC(e) {
    return e && (cr(e.toastId) || Fi(e.toastId)) ? e.toastId : By()
}

function Mi(e, t) {
    return Xn.size > 0 ? Nt.emit(0, e, t) : Ci.push({
        content: e,
        options: t
    }), t.toastId
}

function Il(e, t) {
    return { ...t,
        type: t && t.type || e,
        toastId: wC(t)
    }
}

function zo(e) {
    return (t, n) => Mi(t, Il(e, n))
}

function Pe(e, t) {
    return Mi(e, Il("default", t))
}
Pe.loading = (e, t) => Mi(e, Il("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})), Pe.promise = function(e, t, n) {
    let r, {
        pending: i,
        error: o,
        success: l
    } = t;
    i && (r = cr(i) ? Pe.loading(i, n) : Pe.loading(i.render, { ...n,
        ...i
    }));
    const s = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        a = (f, d, y) => {
            if (d == null) return void Pe.dismiss(r);
            const g = {
                    type: f,
                    ...s,
                    ...n,
                    data: y
                },
                m = cr(d) ? {
                    render: d
                } : d;
            return r ? Pe.update(r, { ...g,
                ...m
            }) : Pe(m.render, { ...g,
                ...m
            }), y
        },
        u = pt(e) ? e() : e;
    return u.then(f => a("success", l, f)).catch(f => a("error", o, f)), u
}, Pe.success = zo("success"), Pe.info = zo("info"), Pe.error = zo("error"), Pe.warning = zo("warning"), Pe.warn = Pe.warning, Pe.dark = (e, t) => Mi(e, Il("default", {
    theme: "dark",
    ...t
})), Pe.dismiss = e => {
    Xn.size > 0 ? Nt.emit(1, e) : Ci = Ci.filter(t => e != null && t.options.toastId !== e)
}, Pe.clearWaitingQueue = function(e) {
    return e === void 0 && (e = {}), Nt.emit(5, e)
}, Pe.isActive = e => {
    let t = !1;
    return Xn.forEach(n => {
        n.isToastActive && n.isToastActive(e) && (t = !0)
    }), t
}, Pe.update = function(e, t) {
    t === void 0 && (t = {}), setTimeout(() => {
        const n = function(r, i) {
            let {
                containerId: o
            } = i;
            const l = Xn.get(o || Ra);
            return l && l.getToast(r)
        }(e, t);
        if (n) {
            const {
                props: r,
                content: i
            } = n, o = {
                delay: 100,
                ...r,
                ...t,
                toastId: t.toastId || e,
                updateId: By()
            };
            o.toastId !== e && (o.staleId = e);
            const l = o.render || i;
            delete o.render, Mi(l, o)
        }
    }, 0)
}, Pe.done = e => {
    Pe.update(e, {
        progress: 1
    })
}, Pe.onChange = e => (Nt.on(4, e), () => {
    Nt.off(4, e)
}), Pe.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center"
}, Pe.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default"
}, Nt.on(2, e => {
    Ra = e.containerId || e, Xn.set(Ra, e), Ci.forEach(t => {
        Nt.emit(0, t.content, t.options)
    }), Ci = []
}).on(3, e => {
    Xn.delete(e.containerId || e), Xn.size === 0 && Nt.off(0).off(1).off(5)
});
const SC = "https://www.course-api.com/cocktails-newsletter",
    EC = async ({
        request: e
    }) => {
        var r, i;
        const t = await e.formData(),
            n = Object.fromEntries(t);
        try {
            const o = await Jc.post(SC, n);
            return Pe.success(o.data.msg), U0("/")
        } catch (o) {
            return console.log(o), Pe.error((i = (r = o == null ? void 0 : o.response) == null ? void 0 : r.data) == null ? void 0 : i.msg), o
        }
    },
    CC = () => {
        const t = Uc().state === "submitting";
        return Ce(Hm, {
            className: "form",
            method: "POST",
            children: [b("h4", {
                style: {
                    textAlign: "center",
                    marginBottom: "2rem"
                },
                children: "our newsletter"
            }), Ce("div", {
                className: "form-row",
                children: [b("label", {
                    htmlFor: "name",
                    className: "form-label",
                    children: "name"
                }), b("input", {
                    type: "text",
                    className: "form-input",
                    name: "name",
                    id: "name",
                    required: !0
                })]
            }), Ce("div", {
                className: "form-row",
                children: [b("label", {
                    htmlFor: "lastName",
                    className: "form-label",
                    children: "last name"
                }), b("input", {
                    type: "text",
                    className: "form-input",
                    name: "lastName",
                    id: "lastName",
                    required: !0
                })]
            }), Ce("div", {
                className: "form-row",
                children: [b("label", {
                    htmlFor: "email",
                    className: "form-label",
                    children: "email"
                }), b("input", {
                    type: "text",
                    className: "form-input",
                    name: "email",
                    id: "email",
                    defaultValue: "test@test.com",
                    required: !0
                })]
            }), b("button", {
                type: "submit",
                className: "btn btn-block",
                style: {
                    marginTop: "0.5rem"
                },
                disabled: t,
                children: t ? "submitting" : "submit"
            })]
        })
    },
    kC = pr.nav `
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`,
    xC = () => b(kC, {
        children: Ce("div", {
            className: "nav-center",
            children: [b("span", {
                className: "logo",
                children: "MixMaster"
            }), Ce("div", {
                className: "nav-links",
                children: [b(ma, {
                    to: "/",
                    className: "nav-link",
                    children: "Home"
                }), b(ma, {
                    to: "/about",
                    className: "nav-link",
                    children: "About"
                }), b(ma, {
                    to: "/newsletter",
                    className: "nav-link",
                    children: "Newsletter"
                })]
            })]
        })
    }),
    RC = () => {
        const t = Uc().state === "loading";
        return Ce(Oh, {
            children: [b(xC, {}), b("section", {
                className: "page",
                children: t ? b("div", {
                    className: "loading"
                }) : b(E1, {
                    context: {
                        value: "some value"
                    }
                })
            })]
        })
    },
    mh = pr.div `
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,
    PC = "/assets/not-found-076062c6.svg",
    OC = () => {
        const e = jc();
        return console.log(e), e.status === 404 ? b(mh, {
            children: Ce("div", {
                children: [b("img", {
                    src: PC,
                    alt: "not found"
                }), b("h3", {
                    children: "Ohh!"
                }), b("p", {
                    children: "We can't seem to find page you are looking for"
                }), b(Qc, {
                    to: "/",
                    children: "back home"
                })]
            })
        }) : b(mh, {
            children: b("div", {
                children: b("h3", {
                    children: "something went wrong "
                })
            })
        })
    },
    Pa = () => {
        const e = jc();
        return console.log(e), b("h2", {
            children: "there was an error..."
        })
    },
    bu = new rw({
        defaultOptions: {
            queries: {
                staleTime: 1e3 * 60 * 5
            }
        }
    }),
    TC = D1([{
        path: "/",
        element: b(RC, {}),
        errorElement: b(OC, {}),
        children: [{
            index: !0,
            element: b(oC, {}),
            errorElement: b(Pa, {}),
            loader: iC(bu)
        }, {
            path: "cocktail/:id",
            errorElement: b(Pa, {}),
            loader: cC(bu),
            element: b(fC, {})
        }, {
            path: "newsletter",
            element: b(CC, {}),
            action: EC,
            errorElement: b(Pa, {})
        }, {
            path: "about",
            element: b(sC, {})
        }]
    }]),
    NC = () => Ce(gw, {
        client: bu,
        children: [b(g1, {
            router: TC
        }), b(Lw, {
            initialIsOpen: !1
        })]
    });
Oa.createRoot(document.getElementById("root")).render(Ce(ye.StrictMode, {
    children: [b(zu, {
        position: "top-center",
        autoClose: 2e3
    }), b(NC, {})]
}));