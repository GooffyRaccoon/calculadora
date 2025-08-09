(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        o(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const h of d.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && o(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
        c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = u(c);
        fetch(c.href, d)
    }
}
)();
var yr = {
    exports: {}
}
  , il = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function $v() {
    if (Dm)
        return il;
    Dm = 1;
    var i = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function u(o, c, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d),
        c.key !== void 0 && (h = "" + c.key),
        "key"in c) {
            d = {};
            for (var m in c)
                m !== "key" && (d[m] = c[m])
        } else
            d = c;
        return c = d.ref,
        {
            $$typeof: i,
            type: o,
            key: h,
            ref: c !== void 0 ? c : null,
            props: d
        }
    }
    return il.Fragment = l,
    il.jsx = u,
    il.jsxs = u,
    il
}
var Rm;
function Iv() {
    return Rm || (Rm = 1,
    yr.exports = $v()),
    yr.exports
}
var U = Iv()
  , gr = {
    exports: {}
}
  , at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om;
function t1() {
    if (Om)
        return at;
    Om = 1;
    var i = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , S = Symbol.iterator;
    function E(T) {
        return T === null || typeof T != "object" ? null : (T = S && T[S] || T["@@iterator"],
        typeof T == "function" ? T : null)
    }
    var V = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , w = Object.assign
      , L = {};
    function Y(T, j, Z) {
        this.props = T,
        this.context = j,
        this.refs = L,
        this.updater = Z || V
    }
    Y.prototype.isReactComponent = {},
    Y.prototype.setState = function(T, j) {
        if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, j, "setState")
    }
    ,
    Y.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
    function G() {}
    G.prototype = Y.prototype;
    function k(T, j, Z) {
        this.props = T,
        this.context = j,
        this.refs = L,
        this.updater = Z || V
    }
    var H = k.prototype = new G;
    H.constructor = k,
    w(H, Y.prototype),
    H.isPureReactComponent = !0;
    var it = Array.isArray
      , q = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , lt = Object.prototype.hasOwnProperty;
    function ft(T, j, Z, X, P, ht) {
        return Z = ht.ref,
        {
            $$typeof: i,
            type: T,
            key: j,
            ref: Z !== void 0 ? Z : null,
            props: ht
        }
    }
    function W(T, j) {
        return ft(T.type, j, void 0, void 0, void 0, T.props)
    }
    function At(T) {
        return typeof T == "object" && T !== null && T.$$typeof === i
    }
    function wt(T) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(Z) {
            return j[Z]
        })
    }
    var Ft = /\/+/g;
    function Lt(T, j) {
        return typeof T == "object" && T !== null && T.key != null ? wt("" + T.key) : j.toString(36)
    }
    function Je() {}
    function we(T) {
        switch (T.status) {
        case "fulfilled":
            return T.value;
        case "rejected":
            throw T.reason;
        default:
            switch (typeof T.status == "string" ? T.then(Je, Je) : (T.status = "pending",
            T.then(function(j) {
                T.status === "pending" && (T.status = "fulfilled",
                T.value = j)
            }, function(j) {
                T.status === "pending" && (T.status = "rejected",
                T.reason = j)
            })),
            T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason
            }
        }
        throw T
    }
    function Qt(T, j, Z, X, P) {
        var ht = typeof T;
        (ht === "undefined" || ht === "boolean") && (T = null);
        var nt = !1;
        if (T === null)
            nt = !0;
        else
            switch (ht) {
            case "bigint":
            case "string":
            case "number":
                nt = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                case i:
                case l:
                    nt = !0;
                    break;
                case v:
                    return nt = T._init,
                    Qt(nt(T._payload), j, Z, X, P)
                }
            }
        if (nt)
            return P = P(T),
            nt = X === "" ? "." + Lt(T, 0) : X,
            it(P) ? (Z = "",
            nt != null && (Z = nt.replace(Ft, "$&/") + "/"),
            Qt(P, j, Z, "", function(hn) {
                return hn
            })) : P != null && (At(P) && (P = W(P, Z + (P.key == null || T && T.key === P.key ? "" : ("" + P.key).replace(Ft, "$&/") + "/") + nt)),
            j.push(P)),
            1;
        nt = 0;
        var fe = X === "" ? "." : X + ":";
        if (it(T))
            for (var Et = 0; Et < T.length; Et++)
                X = T[Et],
                ht = fe + Lt(X, Et),
                nt += Qt(X, j, Z, ht, P);
        else if (Et = E(T),
        typeof Et == "function")
            for (T = Et.call(T),
            Et = 0; !(X = T.next()).done; )
                X = X.value,
                ht = fe + Lt(X, Et++),
                nt += Qt(X, j, Z, ht, P);
        else if (ht === "object") {
            if (typeof T.then == "function")
                return Qt(we(T), j, Z, X, P);
            throw j = String(T),
            Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.")
        }
        return nt
    }
    function z(T, j, Z) {
        if (T == null)
            return T;
        var X = []
          , P = 0;
        return Qt(T, X, "", "", function(ht) {
            return j.call(Z, ht, P++)
        }),
        X
    }
    function B(T) {
        if (T._status === -1) {
            var j = T._result;
            j = j(),
            j.then(function(Z) {
                (T._status === 0 || T._status === -1) && (T._status = 1,
                T._result = Z)
            }, function(Z) {
                (T._status === 0 || T._status === -1) && (T._status = 2,
                T._result = Z)
            }),
            T._status === -1 && (T._status = 0,
            T._result = j)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var K = typeof reportError == "function" ? reportError : function(T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var j = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(j))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    }
    ;
    function mt() {}
    return at.Children = {
        map: z,
        forEach: function(T, j, Z) {
            z(T, function() {
                j.apply(this, arguments)
            }, Z)
        },
        count: function(T) {
            var j = 0;
            return z(T, function() {
                j++
            }),
            j
        },
        toArray: function(T) {
            return z(T, function(j) {
                return j
            }) || []
        },
        only: function(T) {
            if (!At(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
    at.Component = Y,
    at.Fragment = u,
    at.Profiler = c,
    at.PureComponent = k,
    at.StrictMode = o,
    at.Suspense = g,
    at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q,
    at.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(T) {
            return q.H.useMemoCache(T)
        }
    },
    at.cache = function(T) {
        return function() {
            return T.apply(null, arguments)
        }
    }
    ,
    at.cloneElement = function(T, j, Z) {
        if (T == null)
            throw Error("The argument must be a React element, but you passed " + T + ".");
        var X = w({}, T.props)
          , P = T.key
          , ht = void 0;
        if (j != null)
            for (nt in j.ref !== void 0 && (ht = void 0),
            j.key !== void 0 && (P = "" + j.key),
            j)
                !lt.call(j, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && j.ref === void 0 || (X[nt] = j[nt]);
        var nt = arguments.length - 2;
        if (nt === 1)
            X.children = Z;
        else if (1 < nt) {
            for (var fe = Array(nt), Et = 0; Et < nt; Et++)
                fe[Et] = arguments[Et + 2];
            X.children = fe
        }
        return ft(T.type, P, void 0, void 0, ht, X)
    }
    ,
    at.createContext = function(T) {
        return T = {
            $$typeof: h,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        T.Provider = T,
        T.Consumer = {
            $$typeof: d,
            _context: T
        },
        T
    }
    ,
    at.createElement = function(T, j, Z) {
        var X, P = {}, ht = null;
        if (j != null)
            for (X in j.key !== void 0 && (ht = "" + j.key),
            j)
                lt.call(j, X) && X !== "key" && X !== "__self" && X !== "__source" && (P[X] = j[X]);
        var nt = arguments.length - 2;
        if (nt === 1)
            P.children = Z;
        else if (1 < nt) {
            for (var fe = Array(nt), Et = 0; Et < nt; Et++)
                fe[Et] = arguments[Et + 2];
            P.children = fe
        }
        if (T && T.defaultProps)
            for (X in nt = T.defaultProps,
            nt)
                P[X] === void 0 && (P[X] = nt[X]);
        return ft(T, ht, void 0, void 0, null, P)
    }
    ,
    at.createRef = function() {
        return {
            current: null
        }
    }
    ,
    at.forwardRef = function(T) {
        return {
            $$typeof: m,
            render: T
        }
    }
    ,
    at.isValidElement = At,
    at.lazy = function(T) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: B
        }
    }
    ,
    at.memo = function(T, j) {
        return {
            $$typeof: p,
            type: T,
            compare: j === void 0 ? null : j
        }
    }
    ,
    at.startTransition = function(T) {
        var j = q.T
          , Z = {};
        q.T = Z;
        try {
            var X = T()
              , P = q.S;
            P !== null && P(Z, X),
            typeof X == "object" && X !== null && typeof X.then == "function" && X.then(mt, K)
        } catch (ht) {
            K(ht)
        } finally {
            q.T = j
        }
    }
    ,
    at.unstable_useCacheRefresh = function() {
        return q.H.useCacheRefresh()
    }
    ,
    at.use = function(T) {
        return q.H.use(T)
    }
    ,
    at.useActionState = function(T, j, Z) {
        return q.H.useActionState(T, j, Z)
    }
    ,
    at.useCallback = function(T, j) {
        return q.H.useCallback(T, j)
    }
    ,
    at.useContext = function(T) {
        return q.H.useContext(T)
    }
    ,
    at.useDebugValue = function() {}
    ,
    at.useDeferredValue = function(T, j) {
        return q.H.useDeferredValue(T, j)
    }
    ,
    at.useEffect = function(T, j, Z) {
        var X = q.H;
        if (typeof Z == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return X.useEffect(T, j)
    }
    ,
    at.useId = function() {
        return q.H.useId()
    }
    ,
    at.useImperativeHandle = function(T, j, Z) {
        return q.H.useImperativeHandle(T, j, Z)
    }
    ,
    at.useInsertionEffect = function(T, j) {
        return q.H.useInsertionEffect(T, j)
    }
    ,
    at.useLayoutEffect = function(T, j) {
        return q.H.useLayoutEffect(T, j)
    }
    ,
    at.useMemo = function(T, j) {
        return q.H.useMemo(T, j)
    }
    ,
    at.useOptimistic = function(T, j) {
        return q.H.useOptimistic(T, j)
    }
    ,
    at.useReducer = function(T, j, Z) {
        return q.H.useReducer(T, j, Z)
    }
    ,
    at.useRef = function(T) {
        return q.H.useRef(T)
    }
    ,
    at.useState = function(T) {
        return q.H.useState(T)
    }
    ,
    at.useSyncExternalStore = function(T, j, Z) {
        return q.H.useSyncExternalStore(T, j, Z)
    }
    ,
    at.useTransition = function() {
        return q.H.useTransition()
    }
    ,
    at.version = "19.1.0",
    at
}
var Vm;
function tc() {
    return Vm || (Vm = 1,
    gr.exports = t1()),
    gr.exports
}
var et = tc()
  , vr = {
    exports: {}
}
  , ll = {}
  , br = {
    exports: {}
}
  , Sr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cm;
function e1() {
    return Cm || (Cm = 1,
    function(i) {
        function l(z, B) {
            var K = z.length;
            z.push(B);
            t: for (; 0 < K; ) {
                var mt = K - 1 >>> 1
                  , T = z[mt];
                if (0 < c(T, B))
                    z[mt] = B,
                    z[K] = T,
                    K = mt;
                else
                    break t
            }
        }
        function u(z) {
            return z.length === 0 ? null : z[0]
        }
        function o(z) {
            if (z.length === 0)
                return null;
            var B = z[0]
              , K = z.pop();
            if (K !== B) {
                z[0] = K;
                t: for (var mt = 0, T = z.length, j = T >>> 1; mt < j; ) {
                    var Z = 2 * (mt + 1) - 1
                      , X = z[Z]
                      , P = Z + 1
                      , ht = z[P];
                    if (0 > c(X, K))
                        P < T && 0 > c(ht, X) ? (z[mt] = ht,
                        z[P] = K,
                        mt = P) : (z[mt] = X,
                        z[Z] = K,
                        mt = Z);
                    else if (P < T && 0 > c(ht, K))
                        z[mt] = ht,
                        z[P] = K,
                        mt = P;
                    else
                        break t
                }
            }
            return B
        }
        function c(z, B) {
            var K = z.sortIndex - B.sortIndex;
            return K !== 0 ? K : z.id - B.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            i.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date
              , m = h.now();
            i.unstable_now = function() {
                return h.now() - m
            }
        }
        var g = []
          , p = []
          , v = 1
          , S = null
          , E = 3
          , V = !1
          , w = !1
          , L = !1
          , Y = !1
          , G = typeof setTimeout == "function" ? setTimeout : null
          , k = typeof clearTimeout == "function" ? clearTimeout : null
          , H = typeof setImmediate < "u" ? setImmediate : null;
        function it(z) {
            for (var B = u(p); B !== null; ) {
                if (B.callback === null)
                    o(p);
                else if (B.startTime <= z)
                    o(p),
                    B.sortIndex = B.expirationTime,
                    l(g, B);
                else
                    break;
                B = u(p)
            }
        }
        function q(z) {
            if (L = !1,
            it(z),
            !w)
                if (u(g) !== null)
                    w = !0,
                    lt || (lt = !0,
                    Lt());
                else {
                    var B = u(p);
                    B !== null && Qt(q, B.startTime - z)
                }
        }
        var lt = !1
          , ft = -1
          , W = 5
          , At = -1;
        function wt() {
            return Y ? !0 : !(i.unstable_now() - At < W)
        }
        function Ft() {
            if (Y = !1,
            lt) {
                var z = i.unstable_now();
                At = z;
                var B = !0;
                try {
                    t: {
                        w = !1,
                        L && (L = !1,
                        k(ft),
                        ft = -1),
                        V = !0;
                        var K = E;
                        try {
                            e: {
                                for (it(z),
                                S = u(g); S !== null && !(S.expirationTime > z && wt()); ) {
                                    var mt = S.callback;
                                    if (typeof mt == "function") {
                                        S.callback = null,
                                        E = S.priorityLevel;
                                        var T = mt(S.expirationTime <= z);
                                        if (z = i.unstable_now(),
                                        typeof T == "function") {
                                            S.callback = T,
                                            it(z),
                                            B = !0;
                                            break e
                                        }
                                        S === u(g) && o(g),
                                        it(z)
                                    } else
                                        o(g);
                                    S = u(g)
                                }
                                if (S !== null)
                                    B = !0;
                                else {
                                    var j = u(p);
                                    j !== null && Qt(q, j.startTime - z),
                                    B = !1
                                }
                            }
                            break t
                        } finally {
                            S = null,
                            E = K,
                            V = !1
                        }
                        B = void 0
                    }
                } finally {
                    B ? Lt() : lt = !1
                }
            }
        }
        var Lt;
        if (typeof H == "function")
            Lt = function() {
                H(Ft)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Je = new MessageChannel
              , we = Je.port2;
            Je.port1.onmessage = Ft,
            Lt = function() {
                we.postMessage(null)
            }
        } else
            Lt = function() {
                G(Ft, 0)
            }
            ;
        function Qt(z, B) {
            ft = G(function() {
                z(i.unstable_now())
            }, B)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return E
        }
        ,
        i.unstable_next = function(z) {
            switch (E) {
            case 1:
            case 2:
            case 3:
                var B = 3;
                break;
            default:
                B = E
            }
            var K = E;
            E = B;
            try {
                return z()
            } finally {
                E = K
            }
        }
        ,
        i.unstable_requestPaint = function() {
            Y = !0
        }
        ,
        i.unstable_runWithPriority = function(z, B) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var K = E;
            E = z;
            try {
                return B()
            } finally {
                E = K
            }
        }
        ,
        i.unstable_scheduleCallback = function(z, B, K) {
            var mt = i.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay,
            K = typeof K == "number" && 0 < K ? mt + K : mt) : K = mt,
            z) {
            case 1:
                var T = -1;
                break;
            case 2:
                T = 250;
                break;
            case 5:
                T = 1073741823;
                break;
            case 4:
                T = 1e4;
                break;
            default:
                T = 5e3
            }
            return T = K + T,
            z = {
                id: v++,
                callback: B,
                priorityLevel: z,
                startTime: K,
                expirationTime: T,
                sortIndex: -1
            },
            K > mt ? (z.sortIndex = K,
            l(p, z),
            u(g) === null && z === u(p) && (L ? (k(ft),
            ft = -1) : L = !0,
            Qt(q, K - mt))) : (z.sortIndex = T,
            l(g, z),
            w || V || (w = !0,
            lt || (lt = !0,
            Lt()))),
            z
        }
        ,
        i.unstable_shouldYield = wt,
        i.unstable_wrapCallback = function(z) {
            var B = E;
            return function() {
                var K = E;
                E = B;
                try {
                    return z.apply(this, arguments)
                } finally {
                    E = K
                }
            }
        }
    }(Sr)),
    Sr
}
var zm;
function n1() {
    return zm || (zm = 1,
    br.exports = e1()),
    br.exports
}
var Tr = {
    exports: {}
}
  , It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm;
function a1() {
    if (Nm)
        return It;
    Nm = 1;
    var i = tc();
    function l(g) {
        var p = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                p += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var o = {
        d: {
            f: u,
            r: function() {
                throw Error(l(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function d(g, p, v) {
        var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: S == null ? null : "" + S,
            children: g,
            containerInfo: p,
            implementation: v
        }
    }
    var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(g, p) {
        if (g === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    It.createPortal = function(g, p) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(l(299));
        return d(g, p, null, v)
    }
    ,
    It.flushSync = function(g) {
        var p = h.T
          , v = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            g)
                return g()
        } finally {
            h.T = p,
            o.p = v,
            o.d.f()
        }
    }
    ,
    It.preconnect = function(g, p) {
        typeof g == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        o.d.C(g, p))
    }
    ,
    It.prefetchDNS = function(g) {
        typeof g == "string" && o.d.D(g)
    }
    ,
    It.preinit = function(g, p) {
        if (typeof g == "string" && p && typeof p.as == "string") {
            var v = p.as
              , S = m(v, p.crossOrigin)
              , E = typeof p.integrity == "string" ? p.integrity : void 0
              , V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            v === "style" ? o.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: S,
                integrity: E,
                fetchPriority: V
            }) : v === "script" && o.d.X(g, {
                crossOrigin: S,
                integrity: E,
                fetchPriority: V,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    It.preinitModule = function(g, p) {
        if (typeof g == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var v = m(p.as, p.crossOrigin);
                    o.d.M(g, {
                        crossOrigin: v,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && o.d.M(g)
    }
    ,
    It.preload = function(g, p) {
        if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var v = p.as
              , S = m(v, p.crossOrigin);
            o.d.L(g, v, {
                crossOrigin: S,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    It.preloadModule = function(g, p) {
        if (typeof g == "string")
            if (p) {
                var v = m(p.as, p.crossOrigin);
                o.d.m(g, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: v,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                o.d.m(g)
    }
    ,
    It.requestFormReset = function(g) {
        o.d.r(g)
    }
    ,
    It.unstable_batchedUpdates = function(g, p) {
        return g(p)
    }
    ,
    It.useFormState = function(g, p, v) {
        return h.H.useFormState(g, p, v)
    }
    ,
    It.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    It.version = "19.1.0",
    It
}
var _m;
function i1() {
    if (_m)
        return Tr.exports;
    _m = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (l) {
                console.error(l)
            }
    }
    return i(),
    Tr.exports = a1(),
    Tr.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um;
function l1() {
    if (Um)
        return ll;
    Um = 1;
    var i = n1()
      , l = tc()
      , u = i1();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function d(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function m(t) {
        if (d(t) !== t)
            throw Error(o(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = d(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, a = e; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var r = s.alternate;
            if (r === null) {
                if (a = s.return,
                a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (s.child === r.child) {
                for (r = s.child; r; ) {
                    if (r === n)
                        return m(s),
                        t;
                    if (r === a)
                        return m(s),
                        e;
                    r = r.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== a.return)
                n = s,
                a = r;
            else {
                for (var f = !1, y = s.child; y; ) {
                    if (y === n) {
                        f = !0,
                        n = s,
                        a = r;
                        break
                    }
                    if (y === a) {
                        f = !0,
                        a = s,
                        n = r;
                        break
                    }
                    y = y.sibling
                }
                if (!f) {
                    for (y = r.child; y; ) {
                        if (y === n) {
                            f = !0,
                            n = r,
                            a = s;
                            break
                        }
                        if (y === a) {
                            f = !0,
                            a = r,
                            n = s;
                            break
                        }
                        y = y.sibling
                    }
                    if (!f)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== a)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }
    function p(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = p(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var v = Object.assign
      , S = Symbol.for("react.element")
      , E = Symbol.for("react.transitional.element")
      , V = Symbol.for("react.portal")
      , w = Symbol.for("react.fragment")
      , L = Symbol.for("react.strict_mode")
      , Y = Symbol.for("react.profiler")
      , G = Symbol.for("react.provider")
      , k = Symbol.for("react.consumer")
      , H = Symbol.for("react.context")
      , it = Symbol.for("react.forward_ref")
      , q = Symbol.for("react.suspense")
      , lt = Symbol.for("react.suspense_list")
      , ft = Symbol.for("react.memo")
      , W = Symbol.for("react.lazy")
      , At = Symbol.for("react.activity")
      , wt = Symbol.for("react.memo_cache_sentinel")
      , Ft = Symbol.iterator;
    function Lt(t) {
        return t === null || typeof t != "object" ? null : (t = Ft && t[Ft] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Je = Symbol.for("react.client.reference");
    function we(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Je ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case w:
            return "Fragment";
        case Y:
            return "Profiler";
        case L:
            return "StrictMode";
        case q:
            return "Suspense";
        case lt:
            return "SuspenseList";
        case At:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case V:
                return "Portal";
            case H:
                return (t.displayName || "Context") + ".Provider";
            case k:
                return (t._context.displayName || "Context") + ".Consumer";
            case it:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case ft:
                return e = t.displayName || null,
                e !== null ? e : we(t.type) || "Memo";
            case W:
                e = t._payload,
                t = t._init;
                try {
                    return we(t(e))
                } catch {}
            }
        return null
    }
    var Qt = Array.isArray
      , z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , B = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , K = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , mt = []
      , T = -1;
    function j(t) {
        return {
            current: t
        }
    }
    function Z(t) {
        0 > T || (t.current = mt[T],
        mt[T] = null,
        T--)
    }
    function X(t, e) {
        T++,
        mt[T] = t.current,
        t.current = e
    }
    var P = j(null)
      , ht = j(null)
      , nt = j(null)
      , fe = j(null);
    function Et(t, e) {
        switch (X(nt, e),
        X(ht, t),
        X(P, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? tm(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = tm(e),
                t = em(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        Z(P),
        X(P, t)
    }
    function hn() {
        Z(P),
        Z(ht),
        Z(nt)
    }
    function tu(t) {
        t.memoizedState !== null && X(fe, t);
        var e = P.current
          , n = em(e, t.type);
        e !== n && (X(ht, t),
        X(P, n))
    }
    function El(t) {
        ht.current === t && (Z(P),
        Z(ht)),
        fe.current === t && (Z(fe),
        Ii._currentValue = K)
    }
    var eu = Object.prototype.hasOwnProperty
      , nu = i.unstable_scheduleCallback
      , au = i.unstable_cancelCallback
      , Cg = i.unstable_shouldYield
      , zg = i.unstable_requestPaint
      , Le = i.unstable_now
      , Ng = i.unstable_getCurrentPriorityLevel
      , _c = i.unstable_ImmediatePriority
      , Uc = i.unstable_UserBlockingPriority
      , Ml = i.unstable_NormalPriority
      , _g = i.unstable_LowPriority
      , jc = i.unstable_IdlePriority
      , Ug = i.log
      , jg = i.unstable_setDisableYieldValue
      , ui = null
      , he = null;
    function dn(t) {
        if (typeof Ug == "function" && jg(t),
        he && typeof he.setStrictMode == "function")
            try {
                he.setStrictMode(ui, t)
            } catch {}
    }
    var de = Math.clz32 ? Math.clz32 : Lg
      , Bg = Math.log
      , wg = Math.LN2;
    function Lg(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Bg(t) / wg | 0) | 0
    }
    var Dl = 256
      , Rl = 4194304;
    function Yn(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return 64;
        case 128:
            return 128;
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
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Ol(t, e, n) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var s = 0
          , r = t.suspendedLanes
          , f = t.pingedLanes;
        t = t.warmLanes;
        var y = a & 134217727;
        return y !== 0 ? (a = y & ~r,
        a !== 0 ? s = Yn(a) : (f &= y,
        f !== 0 ? s = Yn(f) : n || (n = y & ~t,
        n !== 0 && (s = Yn(n))))) : (y = a & ~r,
        y !== 0 ? s = Yn(y) : f !== 0 ? s = Yn(f) : n || (n = a & ~t,
        n !== 0 && (s = Yn(n)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & r) === 0 && (r = s & -s,
        n = e & -e,
        r >= n || r === 32 && (n & 4194048) !== 0) ? e : s
    }
    function oi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Hg(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
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
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Bc() {
        var t = Dl;
        return Dl <<= 1,
        (Dl & 4194048) === 0 && (Dl = 256),
        t
    }
    function wc() {
        var t = Rl;
        return Rl <<= 1,
        (Rl & 62914560) === 0 && (Rl = 4194304),
        t
    }
    function iu(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function ri(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function qg(t, e, n, a, s, r) {
        var f = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var y = t.entanglements
          , b = t.expirationTimes
          , D = t.hiddenUpdates;
        for (n = f & ~n; 0 < n; ) {
            var C = 31 - de(n)
              , _ = 1 << C;
            y[C] = 0,
            b[C] = -1;
            var R = D[C];
            if (R !== null)
                for (D[C] = null,
                C = 0; C < R.length; C++) {
                    var O = R[C];
                    O !== null && (O.lane &= -536870913)
                }
            n &= ~_
        }
        a !== 0 && Lc(t, a, 0),
        r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e))
    }
    function Lc(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var a = 31 - de(e);
        t.entangledLanes |= e,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090
    }
    function Hc(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var a = 31 - de(n)
              , s = 1 << a;
            s & e | t[a] & e && (t[a] |= e),
            n &= ~s
        }
    }
    function lu(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function su(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function qc() {
        var t = B.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Sm(t.type))
    }
    function Yg(t, e) {
        var n = B.p;
        try {
            return B.p = t,
            e()
        } finally {
            B.p = n
        }
    }
    var mn = Math.random().toString(36).slice(2)
      , Wt = "__reactFiber$" + mn
      , le = "__reactProps$" + mn
      , ha = "__reactContainer$" + mn
      , uu = "__reactEvents$" + mn
      , Gg = "__reactListeners$" + mn
      , Xg = "__reactHandles$" + mn
      , Yc = "__reactResources$" + mn
      , ci = "__reactMarker$" + mn;
    function ou(t) {
        delete t[Wt],
        delete t[le],
        delete t[uu],
        delete t[Gg],
        delete t[Xg]
    }
    function da(t) {
        var e = t[Wt];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[ha] || n[Wt]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = lm(t); t !== null; ) {
                        if (n = t[Wt])
                            return n;
                        t = lm(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function ma(t) {
        if (t = t[Wt] || t[ha]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function fi(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function pa(t) {
        var e = t[Yc];
        return e || (e = t[Yc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Yt(t) {
        t[ci] = !0
    }
    var Gc = new Set
      , Xc = {};
    function Gn(t, e) {
        ya(t, e),
        ya(t + "Capture", e)
    }
    function ya(t, e) {
        for (Xc[t] = e,
        t = 0; t < e.length; t++)
            Gc.add(e[t])
    }
    var Zg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Zc = {}
      , Qc = {};
    function Qg(t) {
        return eu.call(Qc, t) ? !0 : eu.call(Zc, t) ? !1 : Zg.test(t) ? Qc[t] = !0 : (Zc[t] = !0,
        !1)
    }
    function Vl(t, e, n) {
        if (Qg(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function Cl(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function ke(t, e, n, a) {
        if (a === null)
            t.removeAttribute(n);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + a)
        }
    }
    var ru, Kc;
    function ga(t) {
        if (ru === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                ru = e && e[1] || "",
                Kc = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ru + t + Kc
    }
    var cu = !1;
    function fu(t, e) {
        if (!t || cu)
            return "";
        cu = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var _ = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(_.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(_, [])
                                } catch (O) {
                                    var R = O
                                }
                                Reflect.construct(t, [], _)
                            } else {
                                try {
                                    _.call()
                                } catch (O) {
                                    R = O
                                }
                                t.call(_.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (O) {
                                R = O
                            }
                            (_ = t()) && typeof _.catch == "function" && _.catch(function() {})
                        }
                    } catch (O) {
                        if (O && R && typeof O.stack == "string")
                            return [O.stack, R.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var r = a.DetermineComponentFrameRoot()
              , f = r[0]
              , y = r[1];
            if (f && y) {
                var b = f.split(`
`)
                  , D = y.split(`
`);
                for (s = a = 0; a < b.length && !b[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (a === b.length || s === D.length)
                    for (a = b.length - 1,
                    s = D.length - 1; 1 <= a && 0 <= s && b[a] !== D[s]; )
                        s--;
                for (; 1 <= a && 0 <= s; a--,
                s--)
                    if (b[a] !== D[s]) {
                        if (a !== 1 || s !== 1)
                            do
                                if (a--,
                                s--,
                                0 > s || b[a] !== D[s]) {
                                    var C = `
` + b[a].replace(" at new ", " at ");
                                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)),
                                    C
                                }
                            while (1 <= a && 0 <= s);
                        break
                    }
            }
        } finally {
            cu = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? ga(n) : ""
    }
    function Kg(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return ga(t.type);
        case 16:
            return ga("Lazy");
        case 13:
            return ga("Suspense");
        case 19:
            return ga("SuspenseList");
        case 0:
        case 15:
            return fu(t.type, !1);
        case 11:
            return fu(t.type.render, !1);
        case 1:
            return fu(t.type, !0);
        case 31:
            return ga("Activity");
        default:
            return ""
        }
    }
    function Jc(t) {
        try {
            var e = "";
            do
                e += Kg(t),
                t = t.return;
            while (t);
            return e
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function Te(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function kc(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Jg(t) {
        var e = kc(t) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , a = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var s = n.get
              , r = n.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(f) {
                    a = "" + f,
                    r.call(this, f)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(f) {
                    a = "" + f
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function zl(t) {
        t._valueTracker || (t._valueTracker = Jg(t))
    }
    function Pc(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , a = "";
        return t && (a = kc(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function Nl(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var kg = /[\n"\\]/g;
    function xe(t) {
        return t.replace(kg, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function hu(t, e, n, a, s, r, f, y) {
        t.name = "",
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"),
        e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"),
        e != null ? du(t, f, Te(e)) : n != null ? du(t, f, Te(n)) : a != null && t.removeAttribute("value"),
        s == null && r != null && (t.defaultChecked = !!r),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Te(y) : t.removeAttribute("name")
    }
    function Fc(t, e, n, a, s, r, f, y) {
        if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r),
        e != null || n != null) {
            if (!(r !== "submit" && r !== "reset" || e != null))
                return;
            n = n != null ? "" + Te(n) : "",
            e = e != null ? "" + Te(e) : n,
            y || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        a = a ?? s,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = y ? t.checked : !!a,
        t.defaultChecked = !!a,
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f)
    }
    function du(t, e, n) {
        e === "number" && Nl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function va(t, e, n, a) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < n.length; s++)
                e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++)
                s = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== s && (t[n].selected = s),
                s && a && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + Te(n),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0,
                    a && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Wc(t, e, n) {
        if (e != null && (e = "" + Te(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + Te(n) : ""
    }
    function $c(t, e, n, a) {
        if (e == null) {
            if (a != null) {
                if (n != null)
                    throw Error(o(92));
                if (Qt(a)) {
                    if (1 < a.length)
                        throw Error(o(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""),
            e = n
        }
        n = Te(e),
        t.defaultValue = n,
        a = t.textContent,
        a === n && a !== "" && a !== null && (t.value = a)
    }
    function ba(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Pg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ic(t, e, n) {
        var a = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Pg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function tf(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        n != null) {
            for (var a in n)
                !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var s in e)
                a = e[s],
                e.hasOwnProperty(s) && n[s] !== a && Ic(t, s, a)
        } else
            for (var r in e)
                e.hasOwnProperty(r) && Ic(t, r, e[r])
    }
    function mu(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
    var Fg = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Wg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _l(t) {
        return Wg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var pu = null;
    function yu(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Sa = null
      , Ta = null;
    function ef(t) {
        var e = ma(t);
        if (e && (t = e.stateNode)) {
            var n = t[le] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (hu(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + xe("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var a = n[e];
                        if (a !== t && a.form === t.form) {
                            var s = a[le] || null;
                            if (!s)
                                throw Error(o(90));
                            hu(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        a = n[e],
                        a.form === t.form && Pc(a)
                }
                break t;
            case "textarea":
                Wc(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && va(t, !!n.multiple, e, !1)
            }
        }
    }
    var gu = !1;
    function nf(t, e, n) {
        if (gu)
            return t(e, n);
        gu = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (gu = !1,
            (Sa !== null || Ta !== null) && (vs(),
            Sa && (e = Sa,
            t = Ta,
            Ta = Sa = null,
            ef(e),
            t)))
                for (e = 0; e < t.length; e++)
                    ef(t[e])
        }
    }
    function hi(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var a = n[le] || null;
        if (a === null)
            return null;
        n = a[e];
        t: switch (e) {
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
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, e, typeof n));
        return n
    }
    var Pe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , vu = !1;
    if (Pe)
        try {
            var di = {};
            Object.defineProperty(di, "passive", {
                get: function() {
                    vu = !0
                }
            }),
            window.addEventListener("test", di, di),
            window.removeEventListener("test", di, di)
        } catch {
            vu = !1
        }
    var pn = null
      , bu = null
      , Ul = null;
    function af() {
        if (Ul)
            return Ul;
        var t, e = bu, n = e.length, a, s = "value"in pn ? pn.value : pn.textContent, r = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++)
            ;
        var f = n - t;
        for (a = 1; a <= f && e[n - a] === s[r - a]; a++)
            ;
        return Ul = s.slice(t, 1 < a ? 1 - a : void 0)
    }
    function jl(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Bl() {
        return !0
    }
    function lf() {
        return !1
    }
    function se(t) {
        function e(n, a, s, r, f) {
            this._reactName = n,
            this._targetInst = s,
            this.type = a,
            this.nativeEvent = r,
            this.target = f,
            this.currentTarget = null;
            for (var y in t)
                t.hasOwnProperty(y) && (n = t[y],
                this[y] = n ? n(r) : r[y]);
            return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Bl : lf,
            this.isPropagationStopped = lf,
            this
        }
        return v(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Bl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Bl)
            },
            persist: function() {},
            isPersistent: Bl
        }),
        e
    }
    var Xn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, wl = se(Xn), mi = v({}, Xn, {
        view: 0,
        detail: 0
    }), $g = se(mi), Su, Tu, pi, Ll = v({}, mi, {
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
        getModifierState: Au,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== pi && (pi && t.type === "mousemove" ? (Su = t.screenX - pi.screenX,
            Tu = t.screenY - pi.screenY) : Tu = Su = 0,
            pi = t),
            Su)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Tu
        }
    }), sf = se(Ll), Ig = v({}, Ll, {
        dataTransfer: 0
    }), t0 = se(Ig), e0 = v({}, mi, {
        relatedTarget: 0
    }), xu = se(e0), n0 = v({}, Xn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), a0 = se(n0), i0 = v({}, Xn, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), l0 = se(i0), s0 = v({}, Xn, {
        data: 0
    }), uf = se(s0), u0 = {
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
    }, o0 = {
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
    }, r0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function c0(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = r0[t]) ? !!e[t] : !1
    }
    function Au() {
        return c0
    }
    var f0 = v({}, mi, {
        key: function(t) {
            if (t.key) {
                var e = u0[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = jl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? o0[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Au,
        charCode: function(t) {
            return t.type === "keypress" ? jl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? jl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , h0 = se(f0)
      , d0 = v({}, Ll, {
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
    })
      , of = se(d0)
      , m0 = v({}, mi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Au
    })
      , p0 = se(m0)
      , y0 = v({}, Xn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , g0 = se(y0)
      , v0 = v({}, Ll, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , b0 = se(v0)
      , S0 = v({}, Xn, {
        newState: 0,
        oldState: 0
    })
      , T0 = se(S0)
      , x0 = [9, 13, 27, 32]
      , Eu = Pe && "CompositionEvent"in window
      , yi = null;
    Pe && "documentMode"in document && (yi = document.documentMode);
    var A0 = Pe && "TextEvent"in window && !yi
      , rf = Pe && (!Eu || yi && 8 < yi && 11 >= yi)
      , cf = " "
      , ff = !1;
    function hf(t, e) {
        switch (t) {
        case "keyup":
            return x0.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function df(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var xa = !1;
    function E0(t, e) {
        switch (t) {
        case "compositionend":
            return df(e);
        case "keypress":
            return e.which !== 32 ? null : (ff = !0,
            cf);
        case "textInput":
            return t = e.data,
            t === cf && ff ? null : t;
        default:
            return null
        }
    }
    function M0(t, e) {
        if (xa)
            return t === "compositionend" || !Eu && hf(t, e) ? (t = af(),
            Ul = bu = pn = null,
            xa = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return rf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var D0 = {
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
    function mf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!D0[t.type] : e === "textarea"
    }
    function pf(t, e, n, a) {
        Sa ? Ta ? Ta.push(a) : Ta = [a] : Sa = a,
        e = Es(e, "onChange"),
        0 < e.length && (n = new wl("onChange","change",null,n,a),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var gi = null
      , vi = null;
    function R0(t) {
        Pd(t, 0)
    }
    function Hl(t) {
        var e = fi(t);
        if (Pc(e))
            return t
    }
    function yf(t, e) {
        if (t === "change")
            return e
    }
    var gf = !1;
    if (Pe) {
        var Mu;
        if (Pe) {
            var Du = "oninput"in document;
            if (!Du) {
                var vf = document.createElement("div");
                vf.setAttribute("oninput", "return;"),
                Du = typeof vf.oninput == "function"
            }
            Mu = Du
        } else
            Mu = !1;
        gf = Mu && (!document.documentMode || 9 < document.documentMode)
    }
    function bf() {
        gi && (gi.detachEvent("onpropertychange", Sf),
        vi = gi = null)
    }
    function Sf(t) {
        if (t.propertyName === "value" && Hl(vi)) {
            var e = [];
            pf(e, vi, t, yu(t)),
            nf(R0, e)
        }
    }
    function O0(t, e, n) {
        t === "focusin" ? (bf(),
        gi = e,
        vi = n,
        gi.attachEvent("onpropertychange", Sf)) : t === "focusout" && bf()
    }
    function V0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Hl(vi)
    }
    function C0(t, e) {
        if (t === "click")
            return Hl(e)
    }
    function z0(t, e) {
        if (t === "input" || t === "change")
            return Hl(e)
    }
    function N0(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var me = typeof Object.is == "function" ? Object.is : N0;
    function bi(t, e) {
        if (me(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , a = Object.keys(e);
        if (n.length !== a.length)
            return !1;
        for (a = 0; a < n.length; a++) {
            var s = n[a];
            if (!eu.call(e, s) || !me(t[s], e[s]))
                return !1
        }
        return !0
    }
    function Tf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function xf(t, e) {
        var n = Tf(t);
        t = 0;
        for (var a; n; ) {
            if (n.nodeType === 3) {
                if (a = t + n.textContent.length,
                t <= e && a >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = a
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Tf(n)
        }
    }
    function Af(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Af(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Ef(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Nl(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = Nl(t.document)
        }
        return e
    }
    function Ru(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var _0 = Pe && "documentMode"in document && 11 >= document.documentMode
      , Aa = null
      , Ou = null
      , Si = null
      , Vu = !1;
    function Mf(t, e, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Vu || Aa == null || Aa !== Nl(a) || (a = Aa,
        "selectionStart"in a && Ru(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Si && bi(Si, a) || (Si = a,
        a = Es(Ou, "onSelect"),
        0 < a.length && (e = new wl("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: a
        }),
        e.target = Aa)))
    }
    function Zn(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var Ea = {
        animationend: Zn("Animation", "AnimationEnd"),
        animationiteration: Zn("Animation", "AnimationIteration"),
        animationstart: Zn("Animation", "AnimationStart"),
        transitionrun: Zn("Transition", "TransitionRun"),
        transitionstart: Zn("Transition", "TransitionStart"),
        transitioncancel: Zn("Transition", "TransitionCancel"),
        transitionend: Zn("Transition", "TransitionEnd")
    }
      , Cu = {}
      , Df = {};
    Pe && (Df = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ea.animationend.animation,
    delete Ea.animationiteration.animation,
    delete Ea.animationstart.animation),
    "TransitionEvent"in window || delete Ea.transitionend.transition);
    function Qn(t) {
        if (Cu[t])
            return Cu[t];
        if (!Ea[t])
            return t;
        var e = Ea[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Df)
                return Cu[t] = e[n];
        return t
    }
    var Rf = Qn("animationend")
      , Of = Qn("animationiteration")
      , Vf = Qn("animationstart")
      , U0 = Qn("transitionrun")
      , j0 = Qn("transitionstart")
      , B0 = Qn("transitioncancel")
      , Cf = Qn("transitionend")
      , zf = new Map
      , zu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    zu.push("scrollEnd");
    function _e(t, e) {
        zf.set(t, e),
        Gn(e, [t])
    }
    var Nf = new WeakMap;
    function Ae(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Nf.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: Jc(e)
            },
            Nf.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: Jc(e)
        }
    }
    var Ee = []
      , Ma = 0
      , Nu = 0;
    function ql() {
        for (var t = Ma, e = Nu = Ma = 0; e < t; ) {
            var n = Ee[e];
            Ee[e++] = null;
            var a = Ee[e];
            Ee[e++] = null;
            var s = Ee[e];
            Ee[e++] = null;
            var r = Ee[e];
            if (Ee[e++] = null,
            a !== null && s !== null) {
                var f = a.pending;
                f === null ? s.next = s : (s.next = f.next,
                f.next = s),
                a.pending = s
            }
            r !== 0 && _f(n, s, r)
        }
    }
    function Yl(t, e, n, a) {
        Ee[Ma++] = t,
        Ee[Ma++] = e,
        Ee[Ma++] = n,
        Ee[Ma++] = a,
        Nu |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function _u(t, e, n, a) {
        return Yl(t, e, n, a),
        Gl(t)
    }
    function Da(t, e) {
        return Yl(t, null, null, e),
        Gl(t)
    }
    function _f(t, e, n) {
        t.lanes |= n;
        var a = t.alternate;
        a !== null && (a.lanes |= n);
        for (var s = !1, r = t.return; r !== null; )
            r.childLanes |= n,
            a = r.alternate,
            a !== null && (a.childLanes |= n),
            r.tag === 22 && (t = r.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = r,
            r = r.return;
        return t.tag === 3 ? (r = t.stateNode,
        s && e !== null && (s = 31 - de(n),
        t = r.hiddenUpdates,
        a = t[s],
        a === null ? t[s] = [e] : a.push(e),
        e.lane = n | 536870912),
        r) : null
    }
    function Gl(t) {
        if (50 < Qi)
            throw Qi = 0,
            qo = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ra = {};
    function w0(t, e, n, a) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function pe(t, e, n, a) {
        return new w0(t,e,n,a)
    }
    function Uu(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Fe(t, e) {
        var n = t.alternate;
        return n === null ? (n = pe(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function Uf(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Xl(t, e, n, a, s, r) {
        var f = 0;
        if (a = t,
        typeof t == "function")
            Uu(t) && (f = 1);
        else if (typeof t == "string")
            f = Hv(t, n, P.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case At:
                return t = pe(31, n, e, s),
                t.elementType = At,
                t.lanes = r,
                t;
            case w:
                return Kn(n.children, s, r, e);
            case L:
                f = 8,
                s |= 24;
                break;
            case Y:
                return t = pe(12, n, e, s | 2),
                t.elementType = Y,
                t.lanes = r,
                t;
            case q:
                return t = pe(13, n, e, s),
                t.elementType = q,
                t.lanes = r,
                t;
            case lt:
                return t = pe(19, n, e, s),
                t.elementType = lt,
                t.lanes = r,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case G:
                    case H:
                        f = 10;
                        break t;
                    case k:
                        f = 9;
                        break t;
                    case it:
                        f = 11;
                        break t;
                    case ft:
                        f = 14;
                        break t;
                    case W:
                        f = 16,
                        a = null;
                        break t
                    }
                f = 29,
                n = Error(o(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return e = pe(f, n, e, s),
        e.elementType = t,
        e.type = a,
        e.lanes = r,
        e
    }
    function Kn(t, e, n, a) {
        return t = pe(7, t, a, e),
        t.lanes = n,
        t
    }
    function ju(t, e, n) {
        return t = pe(6, t, null, e),
        t.lanes = n,
        t
    }
    function Bu(t, e, n) {
        return e = pe(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Oa = []
      , Va = 0
      , Zl = null
      , Ql = 0
      , Me = []
      , De = 0
      , Jn = null
      , We = 1
      , $e = "";
    function kn(t, e) {
        Oa[Va++] = Ql,
        Oa[Va++] = Zl,
        Zl = t,
        Ql = e
    }
    function jf(t, e, n) {
        Me[De++] = We,
        Me[De++] = $e,
        Me[De++] = Jn,
        Jn = t;
        var a = We;
        t = $e;
        var s = 32 - de(a) - 1;
        a &= ~(1 << s),
        n += 1;
        var r = 32 - de(e) + s;
        if (30 < r) {
            var f = s - s % 5;
            r = (a & (1 << f) - 1).toString(32),
            a >>= f,
            s -= f,
            We = 1 << 32 - de(e) + s | n << s | a,
            $e = r + t
        } else
            We = 1 << r | n << s | a,
            $e = t
    }
    function wu(t) {
        t.return !== null && (kn(t, 1),
        jf(t, 1, 0))
    }
    function Lu(t) {
        for (; t === Zl; )
            Zl = Oa[--Va],
            Oa[Va] = null,
            Ql = Oa[--Va],
            Oa[Va] = null;
        for (; t === Jn; )
            Jn = Me[--De],
            Me[De] = null,
            $e = Me[--De],
            Me[De] = null,
            We = Me[--De],
            Me[De] = null
    }
    var ne = null
      , Vt = null
      , pt = !1
      , Pn = null
      , He = !1
      , Hu = Error(o(519));
    function Fn(t) {
        var e = Error(o(418, ""));
        throw Ai(Ae(e, t)),
        Hu
    }
    function Bf(t) {
        var e = t.stateNode
          , n = t.type
          , a = t.memoizedProps;
        switch (e[Wt] = t,
        e[le] = a,
        n) {
        case "dialog":
            rt("cancel", e),
            rt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            rt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ji.length; n++)
                rt(Ji[n], e);
            break;
        case "source":
            rt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            rt("error", e),
            rt("load", e);
            break;
        case "details":
            rt("toggle", e);
            break;
        case "input":
            rt("invalid", e),
            Fc(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            zl(e);
            break;
        case "select":
            rt("invalid", e);
            break;
        case "textarea":
            rt("invalid", e),
            $c(e, a.value, a.defaultValue, a.children),
            zl(e)
        }
        n = a.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Id(e.textContent, n) ? (a.popover != null && (rt("beforetoggle", e),
        rt("toggle", e)),
        a.onScroll != null && rt("scroll", e),
        a.onScrollEnd != null && rt("scrollend", e),
        a.onClick != null && (e.onclick = Ms),
        e = !0) : e = !1,
        e || Fn(t)
    }
    function wf(t) {
        for (ne = t.return; ne; )
            switch (ne.tag) {
            case 5:
            case 13:
                He = !1;
                return;
            case 27:
            case 3:
                He = !0;
                return;
            default:
                ne = ne.return
            }
    }
    function Ti(t) {
        if (t !== ne)
            return !1;
        if (!pt)
            return wf(t),
            pt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || nr(t.type, t.memoizedProps)),
        n = !n),
        n && Vt && Fn(t),
        wf(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (n = t.data,
                        n === "/$") {
                            if (e === 0) {
                                Vt = je(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || e++;
                    t = t.nextSibling
                }
                Vt = null
            }
        } else
            e === 27 ? (e = Vt,
            zn(t.type) ? (t = sr,
            sr = null,
            Vt = t) : Vt = e) : Vt = ne ? je(t.stateNode.nextSibling) : null;
        return !0
    }
    function xi() {
        Vt = ne = null,
        pt = !1
    }
    function Lf() {
        var t = Pn;
        return t !== null && (re === null ? re = t : re.push.apply(re, t),
        Pn = null),
        t
    }
    function Ai(t) {
        Pn === null ? Pn = [t] : Pn.push(t)
    }
    var qu = j(null)
      , Wn = null
      , Ie = null;
    function yn(t, e, n) {
        X(qu, e._currentValue),
        e._currentValue = n
    }
    function tn(t) {
        t._currentValue = qu.current,
        Z(qu)
    }
    function Yu(t, e, n) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Gu(t, e, n, a) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var r = s.dependencies;
            if (r !== null) {
                var f = s.child;
                r = r.firstContext;
                t: for (; r !== null; ) {
                    var y = r;
                    r = s;
                    for (var b = 0; b < e.length; b++)
                        if (y.context === e[b]) {
                            r.lanes |= n,
                            y = r.alternate,
                            y !== null && (y.lanes |= n),
                            Yu(r.return, n, t),
                            a || (f = null);
                            break t
                        }
                    r = y.next
                }
            } else if (s.tag === 18) {
                if (f = s.return,
                f === null)
                    throw Error(o(341));
                f.lanes |= n,
                r = f.alternate,
                r !== null && (r.lanes |= n),
                Yu(f, n, t),
                f = null
            } else
                f = s.child;
            if (f !== null)
                f.return = s;
            else
                for (f = s; f !== null; ) {
                    if (f === t) {
                        f = null;
                        break
                    }
                    if (s = f.sibling,
                    s !== null) {
                        s.return = f.return,
                        f = s;
                        break
                    }
                    f = f.return
                }
            s = f
        }
    }
    function Ei(t, e, n, a) {
        t = null;
        for (var s = e, r = !1; s !== null; ) {
            if (!r) {
                if ((s.flags & 524288) !== 0)
                    r = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var f = s.alternate;
                if (f === null)
                    throw Error(o(387));
                if (f = f.memoizedProps,
                f !== null) {
                    var y = s.type;
                    me(s.pendingProps.value, f.value) || (t !== null ? t.push(y) : t = [y])
                }
            } else if (s === fe.current) {
                if (f = s.alternate,
                f === null)
                    throw Error(o(387));
                f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Ii) : t = [Ii])
            }
            s = s.return
        }
        t !== null && Gu(e, t, n, a),
        e.flags |= 262144
    }
    function Kl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!me(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function $n(t) {
        Wn = t,
        Ie = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function $t(t) {
        return Hf(Wn, t)
    }
    function Jl(t, e) {
        return Wn === null && $n(t),
        Hf(t, e)
    }
    function Hf(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        Ie === null) {
            if (t === null)
                throw Error(o(308));
            Ie = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Ie = Ie.next = e;
        return n
    }
    var L0 = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , H0 = i.unstable_scheduleCallback
      , q0 = i.unstable_NormalPriority
      , Ht = {
        $$typeof: H,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Xu() {
        return {
            controller: new L0,
            data: new Map,
            refCount: 0
        }
    }
    function Mi(t) {
        t.refCount--,
        t.refCount === 0 && H0(q0, function() {
            t.controller.abort()
        })
    }
    var Di = null
      , Zu = 0
      , Ca = 0
      , za = null;
    function Y0(t, e) {
        if (Di === null) {
            var n = Di = [];
            Zu = 0,
            Ca = Jo(),
            za = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    n.push(a)
                }
            }
        }
        return Zu++,
        e.then(qf, qf),
        e
    }
    function qf() {
        if (--Zu === 0 && Di !== null) {
            za !== null && (za.status = "fulfilled");
            var t = Di;
            Di = null,
            Ca = 0,
            za = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function G0(t, e) {
        var n = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(e)
        }, function(s) {
            for (a.status = "rejected",
            a.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        a
    }
    var Yf = z.S;
    z.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && Y0(t, e),
        Yf !== null && Yf(t, e)
    }
    ;
    var In = j(null);
    function Qu() {
        var t = In.current;
        return t !== null ? t : xt.pooledCache
    }
    function kl(t, e) {
        e === null ? X(In, In.current) : X(In, e.pool)
    }
    function Gf() {
        var t = Qu();
        return t === null ? null : {
            parent: Ht._currentValue,
            pool: t
        }
    }
    var Ri = Error(o(460))
      , Xf = Error(o(474))
      , Pl = Error(o(542))
      , Ku = {
        then: function() {}
    };
    function Zf(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Fl() {}
    function Qf(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(Fl, Fl),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            Jf(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(Fl, Fl);
            else {
                if (t = xt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(a) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                Jf(t),
                t
            }
            throw Oi = e,
            Ri
        }
    }
    var Oi = null;
    function Kf() {
        if (Oi === null)
            throw Error(o(459));
        var t = Oi;
        return Oi = null,
        t
    }
    function Jf(t) {
        if (t === Ri || t === Pl)
            throw Error(o(483))
    }
    var gn = !1;
    function Ju(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ku(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function vn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function bn(t, e, n) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (yt & 2) !== 0) {
            var s = a.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            a.pending = e,
            e = Gl(t),
            _f(t, null, n),
            e
        }
        return Yl(t, a, e, n),
        Gl(t)
    }
    function Vi(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes,
            n |= a,
            e.lanes = n,
            Hc(t, n)
        }
    }
    function Pu(t, e) {
        var n = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        n === a)) {
            var s = null
              , r = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var f = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    r === null ? s = r = f : r = r.next = f,
                    n = n.next
                } while (n !== null);
                r === null ? s = r = e : r = r.next = e
            } else
                s = r = e;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: r,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var Fu = !1;
    function Ci() {
        if (Fu) {
            var t = za;
            if (t !== null)
                throw t
        }
    }
    function zi(t, e, n, a) {
        Fu = !1;
        var s = t.updateQueue;
        gn = !1;
        var r = s.firstBaseUpdate
          , f = s.lastBaseUpdate
          , y = s.shared.pending;
        if (y !== null) {
            s.shared.pending = null;
            var b = y
              , D = b.next;
            b.next = null,
            f === null ? r = D : f.next = D,
            f = b;
            var C = t.alternate;
            C !== null && (C = C.updateQueue,
            y = C.lastBaseUpdate,
            y !== f && (y === null ? C.firstBaseUpdate = D : y.next = D,
            C.lastBaseUpdate = b))
        }
        if (r !== null) {
            var _ = s.baseState;
            f = 0,
            C = D = b = null,
            y = r;
            do {
                var R = y.lane & -536870913
                  , O = R !== y.lane;
                if (O ? (ct & R) === R : (a & R) === R) {
                    R !== 0 && R === Ca && (Fu = !0),
                    C !== null && (C = C.next = {
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var I = t
                          , F = y;
                        R = e;
                        var St = n;
                        switch (F.tag) {
                        case 1:
                            if (I = F.payload,
                            typeof I == "function") {
                                _ = I.call(St, _, R);
                                break t
                            }
                            _ = I;
                            break t;
                        case 3:
                            I.flags = I.flags & -65537 | 128;
                        case 0:
                            if (I = F.payload,
                            R = typeof I == "function" ? I.call(St, _, R) : I,
                            R == null)
                                break t;
                            _ = v({}, _, R);
                            break t;
                        case 2:
                            gn = !0
                        }
                    }
                    R = y.callback,
                    R !== null && (t.flags |= 64,
                    O && (t.flags |= 8192),
                    O = s.callbacks,
                    O === null ? s.callbacks = [R] : O.push(R))
                } else
                    O = {
                        lane: R,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    },
                    C === null ? (D = C = O,
                    b = _) : C = C.next = O,
                    f |= R;
                if (y = y.next,
                y === null) {
                    if (y = s.shared.pending,
                    y === null)
                        break;
                    O = y,
                    y = O.next,
                    O.next = null,
                    s.lastBaseUpdate = O,
                    s.shared.pending = null
                }
            } while (!0);
            C === null && (b = _),
            s.baseState = b,
            s.firstBaseUpdate = D,
            s.lastBaseUpdate = C,
            r === null && (s.shared.lanes = 0),
            Rn |= f,
            t.lanes = f,
            t.memoizedState = _
        }
    }
    function kf(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function Pf(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                kf(n[t], e)
    }
    var Na = j(null)
      , Wl = j(0);
    function Ff(t, e) {
        t = on,
        X(Wl, t),
        X(Na, e),
        on = t | e.baseLanes
    }
    function Wu() {
        X(Wl, on),
        X(Na, Na.current)
    }
    function $u() {
        on = Wl.current,
        Z(Na),
        Z(Wl)
    }
    var Sn = 0
      , st = null
      , vt = null
      , jt = null
      , $l = !1
      , _a = !1
      , ta = !1
      , Il = 0
      , Ni = 0
      , Ua = null
      , X0 = 0;
    function Nt() {
        throw Error(o(321))
    }
    function Iu(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!me(t[n], e[n]))
                return !1;
        return !0
    }
    function to(t, e, n, a, s, r) {
        return Sn = r,
        st = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        z.H = t === null || t.memoizedState === null ? _h : Uh,
        ta = !1,
        r = n(a, s),
        ta = !1,
        _a && (r = $f(e, n, a, s)),
        Wf(t),
        r
    }
    function Wf(t) {
        z.H = ls;
        var e = vt !== null && vt.next !== null;
        if (Sn = 0,
        jt = vt = st = null,
        $l = !1,
        Ni = 0,
        Ua = null,
        e)
            throw Error(o(300));
        t === null || Gt || (t = t.dependencies,
        t !== null && Kl(t) && (Gt = !0))
    }
    function $f(t, e, n, a) {
        st = t;
        var s = 0;
        do {
            if (_a && (Ua = null),
            Ni = 0,
            _a = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            jt = vt = null,
            t.updateQueue != null) {
                var r = t.updateQueue;
                r.lastEffect = null,
                r.events = null,
                r.stores = null,
                r.memoCache != null && (r.memoCache.index = 0)
            }
            z.H = F0,
            r = e(n, a)
        } while (_a);
        return r
    }
    function Z0() {
        var t = z.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? _i(e) : e,
        t = t.useState()[0],
        (vt !== null ? vt.memoizedState : null) !== t && (st.flags |= 1024),
        e
    }
    function eo() {
        var t = Il !== 0;
        return Il = 0,
        t
    }
    function no(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function ao(t) {
        if ($l) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            $l = !1
        }
        Sn = 0,
        jt = vt = st = null,
        _a = !1,
        Ni = Il = 0,
        Ua = null
    }
    function ue() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return jt === null ? st.memoizedState = jt = t : jt = jt.next = t,
        jt
    }
    function Bt() {
        if (vt === null) {
            var t = st.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = vt.next;
        var e = jt === null ? st.memoizedState : jt.next;
        if (e !== null)
            jt = e,
            vt = t;
        else {
            if (t === null)
                throw st.alternate === null ? Error(o(467)) : Error(o(310));
            vt = t,
            t = {
                memoizedState: vt.memoizedState,
                baseState: vt.baseState,
                baseQueue: vt.baseQueue,
                queue: vt.queue,
                next: null
            },
            jt === null ? st.memoizedState = jt = t : jt = jt.next = t
        }
        return jt
    }
    function io() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function _i(t) {
        var e = Ni;
        return Ni += 1,
        Ua === null && (Ua = []),
        t = Qf(Ua, t, e),
        e = st,
        (jt === null ? e.memoizedState : jt.next) === null && (e = e.alternate,
        z.H = e === null || e.memoizedState === null ? _h : Uh),
        t
    }
    function ts(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return _i(t);
            if (t.$$typeof === H)
                return $t(t)
        }
        throw Error(o(438, String(t)))
    }
    function lo(t) {
        var e = null
          , n = st.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var a = st.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = io(),
        st.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            a = 0; a < t; a++)
                n[a] = wt;
        return e.index++,
        n
    }
    function en(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function es(t) {
        var e = Bt();
        return so(e, vt, t)
    }
    function so(t, e, n) {
        var a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = n;
        var s = t.baseQueue
          , r = a.pending;
        if (r !== null) {
            if (s !== null) {
                var f = s.next;
                s.next = r.next,
                r.next = f
            }
            e.baseQueue = s = r,
            a.pending = null
        }
        if (r = t.baseState,
        s === null)
            t.memoizedState = r;
        else {
            e = s.next;
            var y = f = null
              , b = null
              , D = e
              , C = !1;
            do {
                var _ = D.lane & -536870913;
                if (_ !== D.lane ? (ct & _) === _ : (Sn & _) === _) {
                    var R = D.revertLane;
                    if (R === 0)
                        b !== null && (b = b.next = {
                            lane: 0,
                            revertLane: 0,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        }),
                        _ === Ca && (C = !0);
                    else if ((Sn & R) === R) {
                        D = D.next,
                        R === Ca && (C = !0);
                        continue
                    } else
                        _ = {
                            lane: 0,
                            revertLane: D.revertLane,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        },
                        b === null ? (y = b = _,
                        f = r) : b = b.next = _,
                        st.lanes |= R,
                        Rn |= R;
                    _ = D.action,
                    ta && n(r, _),
                    r = D.hasEagerState ? D.eagerState : n(r, _)
                } else
                    R = {
                        lane: _,
                        revertLane: D.revertLane,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    },
                    b === null ? (y = b = R,
                    f = r) : b = b.next = R,
                    st.lanes |= _,
                    Rn |= _;
                D = D.next
            } while (D !== null && D !== e);
            if (b === null ? f = r : b.next = y,
            !me(r, t.memoizedState) && (Gt = !0,
            C && (n = za,
            n !== null)))
                throw n;
            t.memoizedState = r,
            t.baseState = f,
            t.baseQueue = b,
            a.lastRenderedState = r
        }
        return s === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function uo(t) {
        var e = Bt()
          , n = e.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = t;
        var a = n.dispatch
          , s = n.pending
          , r = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var f = s = s.next;
            do
                r = t(r, f.action),
                f = f.next;
            while (f !== s);
            me(r, e.memoizedState) || (Gt = !0),
            e.memoizedState = r,
            e.baseQueue === null && (e.baseState = r),
            n.lastRenderedState = r
        }
        return [r, a]
    }
    function If(t, e, n) {
        var a = st
          , s = Bt()
          , r = pt;
        if (r) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = e();
        var f = !me((vt || s).memoizedState, n);
        f && (s.memoizedState = n,
        Gt = !0),
        s = s.queue;
        var y = nh.bind(null, a, s, t);
        if (Ui(2048, 8, y, [t]),
        s.getSnapshot !== e || f || jt !== null && jt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            ja(9, ns(), eh.bind(null, a, s, n, e), null),
            xt === null)
                throw Error(o(349));
            r || (Sn & 124) !== 0 || th(a, e, n)
        }
        return n
    }
    function th(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = st.updateQueue,
        e === null ? (e = io(),
        st.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function eh(t, e, n, a) {
        e.value = n,
        e.getSnapshot = a,
        ah(e) && ih(t)
    }
    function nh(t, e, n) {
        return n(function() {
            ah(e) && ih(t)
        })
    }
    function ah(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !me(t, n)
        } catch {
            return !0
        }
    }
    function ih(t) {
        var e = Da(t, 2);
        e !== null && Se(e, t, 2)
    }
    function oo(t) {
        var e = ue();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            ta) {
                dn(!0);
                try {
                    n()
                } finally {
                    dn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: en,
            lastRenderedState: t
        },
        e
    }
    function lh(t, e, n, a) {
        return t.baseState = n,
        so(t, vt, typeof a == "function" ? a : en)
    }
    function Q0(t, e, n, a, s) {
        if (is(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var r = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    r.listeners.push(f)
                }
            };
            z.T !== null ? n(!0) : r.isTransition = !1,
            a(r),
            n = e.pending,
            n === null ? (r.next = e.pending = r,
            sh(e, r)) : (r.next = n.next,
            e.pending = n.next = r)
        }
    }
    function sh(t, e) {
        var n = e.action
          , a = e.payload
          , s = t.state;
        if (e.isTransition) {
            var r = z.T
              , f = {};
            z.T = f;
            try {
                var y = n(s, a)
                  , b = z.S;
                b !== null && b(f, y),
                uh(t, e, y)
            } catch (D) {
                ro(t, e, D)
            } finally {
                z.T = r
            }
        } else
            try {
                r = n(s, a),
                uh(t, e, r)
            } catch (D) {
                ro(t, e, D)
            }
    }
    function uh(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            oh(t, e, a)
        }, function(a) {
            return ro(t, e, a)
        }) : oh(t, e, n)
    }
    function oh(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        rh(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        sh(t, n)))
    }
    function ro(t, e, n) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = n,
                rh(e),
                e = e.next;
            while (e !== a)
        }
        t.action = null
    }
    function rh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function ch(t, e) {
        return e
    }
    function fh(t, e) {
        if (pt) {
            var n = xt.formState;
            if (n !== null) {
                t: {
                    var a = st;
                    if (pt) {
                        if (Vt) {
                            e: {
                                for (var s = Vt, r = He; s.nodeType !== 8; ) {
                                    if (!r) {
                                        s = null;
                                        break e
                                    }
                                    if (s = je(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                r = s.data,
                                s = r === "F!" || r === "F" ? s : null
                            }
                            if (s) {
                                Vt = je(s.nextSibling),
                                a = s.data === "F!";
                                break t
                            }
                        }
                        Fn(a)
                    }
                    a = !1
                }
                a && (e = n[0])
            }
        }
        return n = ue(),
        n.memoizedState = n.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ch,
            lastRenderedState: e
        },
        n.queue = a,
        n = Ch.bind(null, st, a),
        a.dispatch = n,
        a = oo(!1),
        r = po.bind(null, st, !1, a.queue),
        a = ue(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = s,
        n = Q0.bind(null, st, s, r, n),
        s.dispatch = n,
        a.memoizedState = t,
        [e, n, !1]
    }
    function hh(t) {
        var e = Bt();
        return dh(e, vt, t)
    }
    function dh(t, e, n) {
        if (e = so(t, e, ch)[0],
        t = es(en)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = _i(e)
            } catch (f) {
                throw f === Ri ? Pl : f
            }
        else
            a = e;
        e = Bt();
        var s = e.queue
          , r = s.dispatch;
        return n !== e.memoizedState && (st.flags |= 2048,
        ja(9, ns(), K0.bind(null, s, n), null)),
        [a, r, t]
    }
    function K0(t, e) {
        t.action = e
    }
    function mh(t) {
        var e = Bt()
          , n = vt;
        if (n !== null)
            return dh(e, n, t);
        Bt(),
        e = e.memoizedState,
        n = Bt();
        var a = n.queue.dispatch;
        return n.memoizedState = t,
        [e, a, !1]
    }
    function ja(t, e, n, a) {
        return t = {
            tag: t,
            create: n,
            deps: a,
            inst: e,
            next: null
        },
        e = st.updateQueue,
        e === null && (e = io(),
        st.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (a = n.next,
        n.next = t,
        t.next = a,
        e.lastEffect = t),
        t
    }
    function ns() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function ph() {
        return Bt().memoizedState
    }
    function as(t, e, n, a) {
        var s = ue();
        a = a === void 0 ? null : a,
        st.flags |= t,
        s.memoizedState = ja(1 | e, ns(), n, a)
    }
    function Ui(t, e, n, a) {
        var s = Bt();
        a = a === void 0 ? null : a;
        var r = s.memoizedState.inst;
        vt !== null && a !== null && Iu(a, vt.memoizedState.deps) ? s.memoizedState = ja(e, r, n, a) : (st.flags |= t,
        s.memoizedState = ja(1 | e, r, n, a))
    }
    function yh(t, e) {
        as(8390656, 8, t, e)
    }
    function gh(t, e) {
        Ui(2048, 8, t, e)
    }
    function vh(t, e) {
        return Ui(4, 2, t, e)
    }
    function bh(t, e) {
        return Ui(4, 4, t, e)
    }
    function Sh(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Th(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        Ui(4, 4, Sh.bind(null, e, t), n)
    }
    function co() {}
    function xh(t, e) {
        var n = Bt();
        e = e === void 0 ? null : e;
        var a = n.memoizedState;
        return e !== null && Iu(e, a[1]) ? a[0] : (n.memoizedState = [t, e],
        t)
    }
    function Ah(t, e) {
        var n = Bt();
        e = e === void 0 ? null : e;
        var a = n.memoizedState;
        if (e !== null && Iu(e, a[1]))
            return a[0];
        if (a = t(),
        ta) {
            dn(!0);
            try {
                t()
            } finally {
                dn(!1)
            }
        }
        return n.memoizedState = [a, e],
        a
    }
    function fo(t, e, n) {
        return n === void 0 || (Sn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Dd(),
        st.lanes |= t,
        Rn |= t,
        n)
    }
    function Eh(t, e, n, a) {
        return me(n, e) ? n : Na.current !== null ? (t = fo(t, n, a),
        me(t, e) || (Gt = !0),
        t) : (Sn & 42) === 0 ? (Gt = !0,
        t.memoizedState = n) : (t = Dd(),
        st.lanes |= t,
        Rn |= t,
        e)
    }
    function Mh(t, e, n, a, s) {
        var r = B.p;
        B.p = r !== 0 && 8 > r ? r : 8;
        var f = z.T
          , y = {};
        z.T = y,
        po(t, !1, e, n);
        try {
            var b = s()
              , D = z.S;
            if (D !== null && D(y, b),
            b !== null && typeof b == "object" && typeof b.then == "function") {
                var C = G0(b, a);
                ji(t, e, C, be(t))
            } else
                ji(t, e, a, be(t))
        } catch (_) {
            ji(t, e, {
                then: function() {},
                status: "rejected",
                reason: _
            }, be())
        } finally {
            B.p = r,
            z.T = f
        }
    }
    function J0() {}
    function ho(t, e, n, a) {
        if (t.tag !== 5)
            throw Error(o(476));
        var s = Dh(t).queue;
        Mh(t, s, e, K, n === null ? J0 : function() {
            return Rh(t),
            n(a)
        }
        )
    }
    function Dh(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: K,
            baseState: K,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: en,
                lastRenderedState: K
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: en,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Rh(t) {
        var e = Dh(t).next.queue;
        ji(t, e, {}, be())
    }
    function mo() {
        return $t(Ii)
    }
    function Oh() {
        return Bt().memoizedState
    }
    function Vh() {
        return Bt().memoizedState
    }
    function k0(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = be();
                t = vn(n);
                var a = bn(e, t, n);
                a !== null && (Se(a, e, n),
                Vi(a, e, n)),
                e = {
                    cache: Xu()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function P0(t, e, n) {
        var a = be();
        n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        is(t) ? zh(e, n) : (n = _u(t, e, n, a),
        n !== null && (Se(n, t, a),
        Nh(n, e, a)))
    }
    function Ch(t, e, n) {
        var a = be();
        ji(t, e, n, a)
    }
    function ji(t, e, n, a) {
        var s = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (is(t))
            zh(e, s);
        else {
            var r = t.alternate;
            if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer,
            r !== null))
                try {
                    var f = e.lastRenderedState
                      , y = r(f, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = y,
                    me(y, f))
                        return Yl(t, e, s, 0),
                        xt === null && ql(),
                        !1
                } catch {} finally {}
            if (n = _u(t, e, s, a),
            n !== null)
                return Se(n, t, a),
                Nh(n, e, a),
                !0
        }
        return !1
    }
    function po(t, e, n, a) {
        if (a = {
            lane: 2,
            revertLane: Jo(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        is(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = _u(t, n, a, 2),
            e !== null && Se(e, t, 2)
    }
    function is(t) {
        var e = t.alternate;
        return t === st || e !== null && e === st
    }
    function zh(t, e) {
        _a = $l = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Nh(t, e, n) {
        if ((n & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes,
            n |= a,
            e.lanes = n,
            Hc(t, n)
        }
    }
    var ls = {
        readContext: $t,
        use: ts,
        useCallback: Nt,
        useContext: Nt,
        useEffect: Nt,
        useImperativeHandle: Nt,
        useLayoutEffect: Nt,
        useInsertionEffect: Nt,
        useMemo: Nt,
        useReducer: Nt,
        useRef: Nt,
        useState: Nt,
        useDebugValue: Nt,
        useDeferredValue: Nt,
        useTransition: Nt,
        useSyncExternalStore: Nt,
        useId: Nt,
        useHostTransitionStatus: Nt,
        useFormState: Nt,
        useActionState: Nt,
        useOptimistic: Nt,
        useMemoCache: Nt,
        useCacheRefresh: Nt
    }
      , _h = {
        readContext: $t,
        use: ts,
        useCallback: function(t, e) {
            return ue().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: $t,
        useEffect: yh,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            as(4194308, 4, Sh.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return as(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            as(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = ue();
            e = e === void 0 ? null : e;
            var a = t();
            if (ta) {
                dn(!0);
                try {
                    t()
                } finally {
                    dn(!1)
                }
            }
            return n.memoizedState = [a, e],
            a
        },
        useReducer: function(t, e, n) {
            var a = ue();
            if (n !== void 0) {
                var s = n(e);
                if (ta) {
                    dn(!0);
                    try {
                        n(e)
                    } finally {
                        dn(!1)
                    }
                }
            } else
                s = e;
            return a.memoizedState = a.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            a.queue = t,
            t = t.dispatch = P0.bind(null, st, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var e = ue();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = oo(t);
            var e = t.queue
              , n = Ch.bind(null, st, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: co,
        useDeferredValue: function(t, e) {
            var n = ue();
            return fo(n, t, e)
        },
        useTransition: function() {
            var t = oo(!1);
            return t = Mh.bind(null, st, t.queue, !0, !1),
            ue().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var a = st
              , s = ue();
            if (pt) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = e(),
                xt === null)
                    throw Error(o(349));
                (ct & 124) !== 0 || th(a, e, n)
            }
            s.memoizedState = n;
            var r = {
                value: n,
                getSnapshot: e
            };
            return s.queue = r,
            yh(nh.bind(null, a, r, t), [t]),
            a.flags |= 2048,
            ja(9, ns(), eh.bind(null, a, r, n, e), null),
            n
        },
        useId: function() {
            var t = ue()
              , e = xt.identifierPrefix;
            if (pt) {
                var n = $e
                  , a = We;
                n = (a & ~(1 << 32 - de(a) - 1)).toString(32) + n,
                e = "«" + e + "R" + n,
                n = Il++,
                0 < n && (e += "H" + n.toString(32)),
                e += "»"
            } else
                n = X0++,
                e = "«" + e + "r" + n.toString(32) + "»";
            return t.memoizedState = e
        },
        useHostTransitionStatus: mo,
        useFormState: fh,
        useActionState: fh,
        useOptimistic: function(t) {
            var e = ue();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = po.bind(null, st, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: lo,
        useCacheRefresh: function() {
            return ue().memoizedState = k0.bind(null, st)
        }
    }
      , Uh = {
        readContext: $t,
        use: ts,
        useCallback: xh,
        useContext: $t,
        useEffect: gh,
        useImperativeHandle: Th,
        useInsertionEffect: vh,
        useLayoutEffect: bh,
        useMemo: Ah,
        useReducer: es,
        useRef: ph,
        useState: function() {
            return es(en)
        },
        useDebugValue: co,
        useDeferredValue: function(t, e) {
            var n = Bt();
            return Eh(n, vt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = es(en)[0]
              , e = Bt().memoizedState;
            return [typeof t == "boolean" ? t : _i(t), e]
        },
        useSyncExternalStore: If,
        useId: Oh,
        useHostTransitionStatus: mo,
        useFormState: hh,
        useActionState: hh,
        useOptimistic: function(t, e) {
            var n = Bt();
            return lh(n, vt, t, e)
        },
        useMemoCache: lo,
        useCacheRefresh: Vh
    }
      , F0 = {
        readContext: $t,
        use: ts,
        useCallback: xh,
        useContext: $t,
        useEffect: gh,
        useImperativeHandle: Th,
        useInsertionEffect: vh,
        useLayoutEffect: bh,
        useMemo: Ah,
        useReducer: uo,
        useRef: ph,
        useState: function() {
            return uo(en)
        },
        useDebugValue: co,
        useDeferredValue: function(t, e) {
            var n = Bt();
            return vt === null ? fo(n, t, e) : Eh(n, vt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = uo(en)[0]
              , e = Bt().memoizedState;
            return [typeof t == "boolean" ? t : _i(t), e]
        },
        useSyncExternalStore: If,
        useId: Oh,
        useHostTransitionStatus: mo,
        useFormState: mh,
        useActionState: mh,
        useOptimistic: function(t, e) {
            var n = Bt();
            return vt !== null ? lh(n, vt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: lo,
        useCacheRefresh: Vh
    }
      , Ba = null
      , Bi = 0;
    function ss(t) {
        var e = Bi;
        return Bi += 1,
        Ba === null && (Ba = []),
        Qf(Ba, t, e)
    }
    function wi(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function us(t, e) {
        throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function jh(t) {
        var e = t._init;
        return e(t._payload)
    }
    function Bh(t) {
        function e(A, x) {
            if (t) {
                var M = A.deletions;
                M === null ? (A.deletions = [x],
                A.flags |= 16) : M.push(x)
            }
        }
        function n(A, x) {
            if (!t)
                return null;
            for (; x !== null; )
                e(A, x),
                x = x.sibling;
            return null
        }
        function a(A) {
            for (var x = new Map; A !== null; )
                A.key !== null ? x.set(A.key, A) : x.set(A.index, A),
                A = A.sibling;
            return x
        }
        function s(A, x) {
            return A = Fe(A, x),
            A.index = 0,
            A.sibling = null,
            A
        }
        function r(A, x, M) {
            return A.index = M,
            t ? (M = A.alternate,
            M !== null ? (M = M.index,
            M < x ? (A.flags |= 67108866,
            x) : M) : (A.flags |= 67108866,
            x)) : (A.flags |= 1048576,
            x)
        }
        function f(A) {
            return t && A.alternate === null && (A.flags |= 67108866),
            A
        }
        function y(A, x, M, N) {
            return x === null || x.tag !== 6 ? (x = ju(M, A.mode, N),
            x.return = A,
            x) : (x = s(x, M),
            x.return = A,
            x)
        }
        function b(A, x, M, N) {
            var Q = M.type;
            return Q === w ? C(A, x, M.props.children, N, M.key) : x !== null && (x.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === W && jh(Q) === x.type) ? (x = s(x, M.props),
            wi(x, M),
            x.return = A,
            x) : (x = Xl(M.type, M.key, M.props, null, A.mode, N),
            wi(x, M),
            x.return = A,
            x)
        }
        function D(A, x, M, N) {
            return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = Bu(M, A.mode, N),
            x.return = A,
            x) : (x = s(x, M.children || []),
            x.return = A,
            x)
        }
        function C(A, x, M, N, Q) {
            return x === null || x.tag !== 7 ? (x = Kn(M, A.mode, N, Q),
            x.return = A,
            x) : (x = s(x, M),
            x.return = A,
            x)
        }
        function _(A, x, M) {
            if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
                return x = ju("" + x, A.mode, M),
                x.return = A,
                x;
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                case E:
                    return M = Xl(x.type, x.key, x.props, null, A.mode, M),
                    wi(M, x),
                    M.return = A,
                    M;
                case V:
                    return x = Bu(x, A.mode, M),
                    x.return = A,
                    x;
                case W:
                    var N = x._init;
                    return x = N(x._payload),
                    _(A, x, M)
                }
                if (Qt(x) || Lt(x))
                    return x = Kn(x, A.mode, M, null),
                    x.return = A,
                    x;
                if (typeof x.then == "function")
                    return _(A, ss(x), M);
                if (x.$$typeof === H)
                    return _(A, Jl(A, x), M);
                us(A, x)
            }
            return null
        }
        function R(A, x, M, N) {
            var Q = x !== null ? x.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return Q !== null ? null : y(A, x, "" + M, N);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case E:
                    return M.key === Q ? b(A, x, M, N) : null;
                case V:
                    return M.key === Q ? D(A, x, M, N) : null;
                case W:
                    return Q = M._init,
                    M = Q(M._payload),
                    R(A, x, M, N)
                }
                if (Qt(M) || Lt(M))
                    return Q !== null ? null : C(A, x, M, N, null);
                if (typeof M.then == "function")
                    return R(A, x, ss(M), N);
                if (M.$$typeof === H)
                    return R(A, x, Jl(A, M), N);
                us(A, M)
            }
            return null
        }
        function O(A, x, M, N, Q) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return A = A.get(M) || null,
                y(x, A, "" + N, Q);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case E:
                    return A = A.get(N.key === null ? M : N.key) || null,
                    b(x, A, N, Q);
                case V:
                    return A = A.get(N.key === null ? M : N.key) || null,
                    D(x, A, N, Q);
                case W:
                    var ut = N._init;
                    return N = ut(N._payload),
                    O(A, x, M, N, Q)
                }
                if (Qt(N) || Lt(N))
                    return A = A.get(M) || null,
                    C(x, A, N, Q, null);
                if (typeof N.then == "function")
                    return O(A, x, M, ss(N), Q);
                if (N.$$typeof === H)
                    return O(A, x, M, Jl(x, N), Q);
                us(x, N)
            }
            return null
        }
        function I(A, x, M, N) {
            for (var Q = null, ut = null, J = x, $ = x = 0, Zt = null; J !== null && $ < M.length; $++) {
                J.index > $ ? (Zt = J,
                J = null) : Zt = J.sibling;
                var dt = R(A, J, M[$], N);
                if (dt === null) {
                    J === null && (J = Zt);
                    break
                }
                t && J && dt.alternate === null && e(A, J),
                x = r(dt, x, $),
                ut === null ? Q = dt : ut.sibling = dt,
                ut = dt,
                J = Zt
            }
            if ($ === M.length)
                return n(A, J),
                pt && kn(A, $),
                Q;
            if (J === null) {
                for (; $ < M.length; $++)
                    J = _(A, M[$], N),
                    J !== null && (x = r(J, x, $),
                    ut === null ? Q = J : ut.sibling = J,
                    ut = J);
                return pt && kn(A, $),
                Q
            }
            for (J = a(J); $ < M.length; $++)
                Zt = O(J, A, $, M[$], N),
                Zt !== null && (t && Zt.alternate !== null && J.delete(Zt.key === null ? $ : Zt.key),
                x = r(Zt, x, $),
                ut === null ? Q = Zt : ut.sibling = Zt,
                ut = Zt);
            return t && J.forEach(function(Bn) {
                return e(A, Bn)
            }),
            pt && kn(A, $),
            Q
        }
        function F(A, x, M, N) {
            if (M == null)
                throw Error(o(151));
            for (var Q = null, ut = null, J = x, $ = x = 0, Zt = null, dt = M.next(); J !== null && !dt.done; $++,
            dt = M.next()) {
                J.index > $ ? (Zt = J,
                J = null) : Zt = J.sibling;
                var Bn = R(A, J, dt.value, N);
                if (Bn === null) {
                    J === null && (J = Zt);
                    break
                }
                t && J && Bn.alternate === null && e(A, J),
                x = r(Bn, x, $),
                ut === null ? Q = Bn : ut.sibling = Bn,
                ut = Bn,
                J = Zt
            }
            if (dt.done)
                return n(A, J),
                pt && kn(A, $),
                Q;
            if (J === null) {
                for (; !dt.done; $++,
                dt = M.next())
                    dt = _(A, dt.value, N),
                    dt !== null && (x = r(dt, x, $),
                    ut === null ? Q = dt : ut.sibling = dt,
                    ut = dt);
                return pt && kn(A, $),
                Q
            }
            for (J = a(J); !dt.done; $++,
            dt = M.next())
                dt = O(J, A, $, dt.value, N),
                dt !== null && (t && dt.alternate !== null && J.delete(dt.key === null ? $ : dt.key),
                x = r(dt, x, $),
                ut === null ? Q = dt : ut.sibling = dt,
                ut = dt);
            return t && J.forEach(function(Wv) {
                return e(A, Wv)
            }),
            pt && kn(A, $),
            Q
        }
        function St(A, x, M, N) {
            if (typeof M == "object" && M !== null && M.type === w && M.key === null && (M = M.props.children),
            typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case E:
                    t: {
                        for (var Q = M.key; x !== null; ) {
                            if (x.key === Q) {
                                if (Q = M.type,
                                Q === w) {
                                    if (x.tag === 7) {
                                        n(A, x.sibling),
                                        N = s(x, M.props.children),
                                        N.return = A,
                                        A = N;
                                        break t
                                    }
                                } else if (x.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === W && jh(Q) === x.type) {
                                    n(A, x.sibling),
                                    N = s(x, M.props),
                                    wi(N, M),
                                    N.return = A,
                                    A = N;
                                    break t
                                }
                                n(A, x);
                                break
                            } else
                                e(A, x);
                            x = x.sibling
                        }
                        M.type === w ? (N = Kn(M.props.children, A.mode, N, M.key),
                        N.return = A,
                        A = N) : (N = Xl(M.type, M.key, M.props, null, A.mode, N),
                        wi(N, M),
                        N.return = A,
                        A = N)
                    }
                    return f(A);
                case V:
                    t: {
                        for (Q = M.key; x !== null; ) {
                            if (x.key === Q)
                                if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                                    n(A, x.sibling),
                                    N = s(x, M.children || []),
                                    N.return = A,
                                    A = N;
                                    break t
                                } else {
                                    n(A, x);
                                    break
                                }
                            else
                                e(A, x);
                            x = x.sibling
                        }
                        N = Bu(M, A.mode, N),
                        N.return = A,
                        A = N
                    }
                    return f(A);
                case W:
                    return Q = M._init,
                    M = Q(M._payload),
                    St(A, x, M, N)
                }
                if (Qt(M))
                    return I(A, x, M, N);
                if (Lt(M)) {
                    if (Q = Lt(M),
                    typeof Q != "function")
                        throw Error(o(150));
                    return M = Q.call(M),
                    F(A, x, M, N)
                }
                if (typeof M.then == "function")
                    return St(A, x, ss(M), N);
                if (M.$$typeof === H)
                    return St(A, x, Jl(A, M), N);
                us(A, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M,
            x !== null && x.tag === 6 ? (n(A, x.sibling),
            N = s(x, M),
            N.return = A,
            A = N) : (n(A, x),
            N = ju(M, A.mode, N),
            N.return = A,
            A = N),
            f(A)) : n(A, x)
        }
        return function(A, x, M, N) {
            try {
                Bi = 0;
                var Q = St(A, x, M, N);
                return Ba = null,
                Q
            } catch (J) {
                if (J === Ri || J === Pl)
                    throw J;
                var ut = pe(29, J, null, A.mode);
                return ut.lanes = N,
                ut.return = A,
                ut
            } finally {}
        }
    }
    var wa = Bh(!0)
      , wh = Bh(!1)
      , Re = j(null)
      , qe = null;
    function Tn(t) {
        var e = t.alternate;
        X(qt, qt.current & 1),
        X(Re, t),
        qe === null && (e === null || Na.current !== null || e.memoizedState !== null) && (qe = t)
    }
    function Lh(t) {
        if (t.tag === 22) {
            if (X(qt, qt.current),
            X(Re, t),
            qe === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (qe = t)
            }
        } else
            xn()
    }
    function xn() {
        X(qt, qt.current),
        X(Re, Re.current)
    }
    function nn(t) {
        Z(Re),
        qe === t && (qe = null),
        Z(qt)
    }
    var qt = j(0);
    function os(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || lr(n)))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    function yo(t, e, n, a) {
        e = t.memoizedState,
        n = n(a, e),
        n = n == null ? e : v({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var go = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var a = be()
              , s = vn(a);
            s.payload = e,
            n != null && (s.callback = n),
            e = bn(t, s, a),
            e !== null && (Se(e, t, a),
            Vi(e, t, a))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var a = be()
              , s = vn(a);
            s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = bn(t, s, a),
            e !== null && (Se(e, t, a),
            Vi(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = be()
              , a = vn(n);
            a.tag = 2,
            e != null && (a.callback = e),
            e = bn(t, a, n),
            e !== null && (Se(e, t, n),
            Vi(e, t, n))
        }
    };
    function Hh(t, e, n, a, s, r, f) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, f) : e.prototype && e.prototype.isPureReactComponent ? !bi(n, a) || !bi(s, r) : !0
    }
    function qh(t, e, n, a) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a),
        e.state !== t && go.enqueueReplaceState(e, e.state, null)
    }
    function ea(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var a in e)
                a !== "ref" && (n[a] = e[a])
        }
        if (t = t.defaultProps) {
            n === e && (n = v({}, n));
            for (var s in t)
                n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }
    var rs = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function Yh(t) {
        rs(t)
    }
    function Gh(t) {
        console.error(t)
    }
    function Xh(t) {
        rs(t)
    }
    function cs(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Zh(t, e, n) {
        try {
            var a = t.onCaughtError;
            a(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function vo(t, e, n) {
        return n = vn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            cs(t, e)
        }
        ,
        n
    }
    function Qh(t) {
        return t = vn(t),
        t.tag = 3,
        t
    }
    function Kh(t, e, n, a) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var r = a.value;
            t.payload = function() {
                return s(r)
            }
            ,
            t.callback = function() {
                Zh(e, n, a)
            }
        }
        var f = n.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
            Zh(e, n, a),
            typeof s != "function" && (On === null ? On = new Set([this]) : On.add(this));
            var y = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: y !== null ? y : ""
            })
        }
        )
    }
    function W0(t, e, n, a, s) {
        if (n.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = n.alternate,
            e !== null && Ei(e, n, s, !0),
            n = Re.current,
            n !== null) {
                switch (n.tag) {
                case 13:
                    return qe === null ? Go() : n.alternate === null && Ct === 0 && (Ct = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    a === Ku ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([a]) : e.add(a),
                    Zo(t, a, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    a === Ku ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([a]) : n.add(a)),
                    Zo(t, a, s)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return Zo(t, a, s),
            Go(),
            !1
        }
        if (pt)
            return e = Re.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            a !== Hu && (t = Error(o(422), {
                cause: a
            }),
            Ai(Ae(t, n)))) : (a !== Hu && (e = Error(o(423), {
                cause: a
            }),
            Ai(Ae(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            a = Ae(a, n),
            s = vo(t.stateNode, a, s),
            Pu(t, s),
            Ct !== 4 && (Ct = 2)),
            !1;
        var r = Error(o(520), {
            cause: a
        });
        if (r = Ae(r, n),
        Zi === null ? Zi = [r] : Zi.push(r),
        Ct !== 4 && (Ct = 2),
        e === null)
            return !0;
        a = Ae(a, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = s & -s,
                n.lanes |= t,
                t = vo(n.stateNode, a, t),
                Pu(n, t),
                !1;
            case 1:
                if (e = n.type,
                r = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (On === null || !On.has(r))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = Qh(s),
                    Kh(s, t, n, a),
                    Pu(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Jh = Error(o(461))
      , Gt = !1;
    function Kt(t, e, n, a) {
        e.child = t === null ? wh(e, null, n, a) : wa(e, t.child, n, a)
    }
    function kh(t, e, n, a, s) {
        n = n.render;
        var r = e.ref;
        if ("ref"in a) {
            var f = {};
            for (var y in a)
                y !== "ref" && (f[y] = a[y])
        } else
            f = a;
        return $n(e),
        a = to(t, e, n, f, r, s),
        y = eo(),
        t !== null && !Gt ? (no(t, e, s),
        an(t, e, s)) : (pt && y && wu(e),
        e.flags |= 1,
        Kt(t, e, a, s),
        e.child)
    }
    function Ph(t, e, n, a, s) {
        if (t === null) {
            var r = n.type;
            return typeof r == "function" && !Uu(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = r,
            Fh(t, e, r, a, s)) : (t = Xl(n.type, null, a, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (r = t.child,
        !Do(t, s)) {
            var f = r.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : bi,
            n(f, a) && t.ref === e.ref)
                return an(t, e, s)
        }
        return e.flags |= 1,
        t = Fe(r, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function Fh(t, e, n, a, s) {
        if (t !== null) {
            var r = t.memoizedProps;
            if (bi(r, a) && t.ref === e.ref)
                if (Gt = !1,
                e.pendingProps = a = r,
                Do(t, s))
                    (t.flags & 131072) !== 0 && (Gt = !0);
                else
                    return e.lanes = t.lanes,
                    an(t, e, s)
        }
        return bo(t, e, n, a, s)
    }
    function Wh(t, e, n) {
        var a = e.pendingProps
          , s = a.children
          , r = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (a = r !== null ? r.baseLanes | n : n,
                t !== null) {
                    for (s = e.child = t.child,
                    r = 0; s !== null; )
                        r = r | s.lanes | s.childLanes,
                        s = s.sibling;
                    e.childLanes = r & ~a
                } else
                    e.childLanes = 0,
                    e.child = null;
                return $h(t, e, a, n)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && kl(e, r !== null ? r.cachePool : null),
                r !== null ? Ff(e, r) : Wu(),
                Lh(e);
            else
                return e.lanes = e.childLanes = 536870912,
                $h(t, e, r !== null ? r.baseLanes | n : n, n)
        } else
            r !== null ? (kl(e, r.cachePool),
            Ff(e, r),
            xn(),
            e.memoizedState = null) : (t !== null && kl(e, null),
            Wu(),
            xn());
        return Kt(t, e, s, n),
        e.child
    }
    function $h(t, e, n, a) {
        var s = Qu();
        return s = s === null ? null : {
            parent: Ht._currentValue,
            pool: s
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: s
        },
        t !== null && kl(e, null),
        Wu(),
        Lh(e),
        t !== null && Ei(t, e, a, !0),
        null
    }
    function fs(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function bo(t, e, n, a, s) {
        return $n(e),
        n = to(t, e, n, a, void 0, s),
        a = eo(),
        t !== null && !Gt ? (no(t, e, s),
        an(t, e, s)) : (pt && a && wu(e),
        e.flags |= 1,
        Kt(t, e, n, s),
        e.child)
    }
    function Ih(t, e, n, a, s, r) {
        return $n(e),
        e.updateQueue = null,
        n = $f(e, a, n, s),
        Wf(t),
        a = eo(),
        t !== null && !Gt ? (no(t, e, r),
        an(t, e, r)) : (pt && a && wu(e),
        e.flags |= 1,
        Kt(t, e, n, r),
        e.child)
    }
    function td(t, e, n, a, s) {
        if ($n(e),
        e.stateNode === null) {
            var r = Ra
              , f = n.contextType;
            typeof f == "object" && f !== null && (r = $t(f)),
            r = new n(a,r),
            e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
            r.updater = go,
            e.stateNode = r,
            r._reactInternals = e,
            r = e.stateNode,
            r.props = a,
            r.state = e.memoizedState,
            r.refs = {},
            Ju(e),
            f = n.contextType,
            r.context = typeof f == "object" && f !== null ? $t(f) : Ra,
            r.state = e.memoizedState,
            f = n.getDerivedStateFromProps,
            typeof f == "function" && (yo(e, n, f, a),
            r.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state,
            typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
            f !== r.state && go.enqueueReplaceState(r, r.state, null),
            zi(e, a, r, s),
            Ci(),
            r.state = e.memoizedState),
            typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (t === null) {
            r = e.stateNode;
            var y = e.memoizedProps
              , b = ea(n, y);
            r.props = b;
            var D = r.context
              , C = n.contextType;
            f = Ra,
            typeof C == "object" && C !== null && (f = $t(C));
            var _ = n.getDerivedStateFromProps;
            C = typeof _ == "function" || typeof r.getSnapshotBeforeUpdate == "function",
            y = e.pendingProps !== y,
            C || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || D !== f) && qh(e, r, a, f),
            gn = !1;
            var R = e.memoizedState;
            r.state = R,
            zi(e, a, r, s),
            Ci(),
            D = e.memoizedState,
            y || R !== D || gn ? (typeof _ == "function" && (yo(e, n, _, a),
            D = e.memoizedState),
            (b = gn || Hh(e, n, b, a, R, D, f)) ? (C || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()),
            typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = D),
            r.props = a,
            r.state = D,
            r.context = f,
            a = b) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            r = e.stateNode,
            ku(t, e),
            f = e.memoizedProps,
            C = ea(n, f),
            r.props = C,
            _ = e.pendingProps,
            R = r.context,
            D = n.contextType,
            b = Ra,
            typeof D == "object" && D !== null && (b = $t(D)),
            y = n.getDerivedStateFromProps,
            (D = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== _ || R !== b) && qh(e, r, a, b),
            gn = !1,
            R = e.memoizedState,
            r.state = R,
            zi(e, a, r, s),
            Ci();
            var O = e.memoizedState;
            f !== _ || R !== O || gn || t !== null && t.dependencies !== null && Kl(t.dependencies) ? (typeof y == "function" && (yo(e, n, y, a),
            O = e.memoizedState),
            (C = gn || Hh(e, n, C, a, R, O, b) || t !== null && t.dependencies !== null && Kl(t.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, O, b),
            typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, O, b)),
            typeof r.componentDidUpdate == "function" && (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = O),
            r.props = a,
            r.state = O,
            r.context = b,
            a = C) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return r = a,
        fs(t, e),
        a = (e.flags & 128) !== 0,
        r || a ? (r = e.stateNode,
        n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = wa(e, t.child, null, s),
        e.child = wa(e, null, n, s)) : Kt(t, e, n, s),
        e.memoizedState = r.state,
        t = e.child) : t = an(t, e, s),
        t
    }
    function ed(t, e, n, a) {
        return xi(),
        e.flags |= 256,
        Kt(t, e, n, a),
        e.child
    }
    var So = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function To(t) {
        return {
            baseLanes: t,
            cachePool: Gf()
        }
    }
    function xo(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Oe),
        t
    }
    function nd(t, e, n) {
        var a = e.pendingProps, s = !1, r = (e.flags & 128) !== 0, f;
        if ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
        f && (s = !0,
        e.flags &= -129),
        f = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (pt) {
                if (s ? Tn(e) : xn(),
                pt) {
                    var y = Vt, b;
                    if (b = y) {
                        t: {
                            for (b = y,
                            y = He; b.nodeType !== 8; ) {
                                if (!y) {
                                    y = null;
                                    break t
                                }
                                if (b = je(b.nextSibling),
                                b === null) {
                                    y = null;
                                    break t
                                }
                            }
                            y = b
                        }
                        y !== null ? (e.memoizedState = {
                            dehydrated: y,
                            treeContext: Jn !== null ? {
                                id: We,
                                overflow: $e
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        b = pe(18, null, null, 0),
                        b.stateNode = y,
                        b.return = e,
                        e.child = b,
                        ne = e,
                        Vt = null,
                        b = !0) : b = !1
                    }
                    b || Fn(e)
                }
                if (y = e.memoizedState,
                y !== null && (y = y.dehydrated,
                y !== null))
                    return lr(y) ? e.lanes = 32 : e.lanes = 536870912,
                    null;
                nn(e)
            }
            return y = a.children,
            a = a.fallback,
            s ? (xn(),
            s = e.mode,
            y = hs({
                mode: "hidden",
                children: y
            }, s),
            a = Kn(a, s, n, null),
            y.return = e,
            a.return = e,
            y.sibling = a,
            e.child = y,
            s = e.child,
            s.memoizedState = To(n),
            s.childLanes = xo(t, f, n),
            e.memoizedState = So,
            a) : (Tn(e),
            Ao(e, y))
        }
        if (b = t.memoizedState,
        b !== null && (y = b.dehydrated,
        y !== null)) {
            if (r)
                e.flags & 256 ? (Tn(e),
                e.flags &= -257,
                e = Eo(t, e, n)) : e.memoizedState !== null ? (xn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (xn(),
                s = a.fallback,
                y = e.mode,
                a = hs({
                    mode: "visible",
                    children: a.children
                }, y),
                s = Kn(s, y, n, null),
                s.flags |= 2,
                a.return = e,
                s.return = e,
                a.sibling = s,
                e.child = a,
                wa(e, t.child, null, n),
                a = e.child,
                a.memoizedState = To(n),
                a.childLanes = xo(t, f, n),
                e.memoizedState = So,
                e = s);
            else if (Tn(e),
            lr(y)) {
                if (f = y.nextSibling && y.nextSibling.dataset,
                f)
                    var D = f.dgst;
                f = D,
                a = Error(o(419)),
                a.stack = "",
                a.digest = f,
                Ai({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = Eo(t, e, n)
            } else if (Gt || Ei(t, e, n, !1),
            f = (n & t.childLanes) !== 0,
            Gt || f) {
                if (f = xt,
                f !== null && (a = n & -n,
                a = (a & 42) !== 0 ? 1 : lu(a),
                a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a,
                a !== 0 && a !== b.retryLane))
                    throw b.retryLane = a,
                    Da(t, a),
                    Se(f, t, a),
                    Jh;
                y.data === "$?" || Go(),
                e = Eo(t, e, n)
            } else
                y.data === "$?" ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = b.treeContext,
                Vt = je(y.nextSibling),
                ne = e,
                pt = !0,
                Pn = null,
                He = !1,
                t !== null && (Me[De++] = We,
                Me[De++] = $e,
                Me[De++] = Jn,
                We = t.id,
                $e = t.overflow,
                Jn = e),
                e = Ao(e, a.children),
                e.flags |= 4096);
            return e
        }
        return s ? (xn(),
        s = a.fallback,
        y = e.mode,
        b = t.child,
        D = b.sibling,
        a = Fe(b, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = b.subtreeFlags & 65011712,
        D !== null ? s = Fe(D, s) : (s = Kn(s, y, n, null),
        s.flags |= 2),
        s.return = e,
        a.return = e,
        a.sibling = s,
        e.child = a,
        a = s,
        s = e.child,
        y = t.child.memoizedState,
        y === null ? y = To(n) : (b = y.cachePool,
        b !== null ? (D = Ht._currentValue,
        b = b.parent !== D ? {
            parent: D,
            pool: D
        } : b) : b = Gf(),
        y = {
            baseLanes: y.baseLanes | n,
            cachePool: b
        }),
        s.memoizedState = y,
        s.childLanes = xo(t, f, n),
        e.memoizedState = So,
        a) : (Tn(e),
        n = t.child,
        t = n.sibling,
        n = Fe(n, {
            mode: "visible",
            children: a.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (f = e.deletions,
        f === null ? (e.deletions = [t],
        e.flags |= 16) : f.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Ao(t, e) {
        return e = hs({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function hs(t, e) {
        return t = pe(22, t, null, e),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function Eo(t, e, n) {
        return wa(e, t.child, null, n),
        t = Ao(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function ad(t, e, n) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e),
        Yu(t.return, e, n)
    }
    function Mo(t, e, n, a, s) {
        var r = t.memoizedState;
        r === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: s
        } : (r.isBackwards = e,
        r.rendering = null,
        r.renderingStartTime = 0,
        r.last = a,
        r.tail = n,
        r.tailMode = s)
    }
    function id(t, e, n) {
        var a = e.pendingProps
          , s = a.revealOrder
          , r = a.tail;
        if (Kt(t, e, a.children, n),
        a = qt.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && ad(t, n, e);
                    else if (t.tag === 19)
                        ad(t, n, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a &= 1
        }
        switch (X(qt, a),
        s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && os(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            Mo(e, !1, s, n, r);
            break;
        case "backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && os(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            Mo(e, !0, n, null, r);
            break;
        case "together":
            Mo(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function an(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Rn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (Ei(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            n = Fe(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = Fe(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Do(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Kl(t)))
    }
    function $0(t, e, n) {
        switch (e.tag) {
        case 3:
            Et(e, e.stateNode.containerInfo),
            yn(e, Ht, t.memoizedState.cache),
            xi();
            break;
        case 27:
        case 5:
            tu(e);
            break;
        case 4:
            Et(e, e.stateNode.containerInfo);
            break;
        case 10:
            yn(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (Tn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? nd(t, e, n) : (Tn(e),
                t = an(t, e, n),
                t !== null ? t.sibling : null);
            Tn(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (a = (n & e.childLanes) !== 0,
            a || (Ei(t, e, n, !1),
            a = (n & e.childLanes) !== 0),
            s) {
                if (a)
                    return id(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            X(qt, qt.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            Wh(t, e, n);
        case 24:
            yn(e, Ht, t.memoizedState.cache)
        }
        return an(t, e, n)
    }
    function ld(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Gt = !0;
            else {
                if (!Do(t, n) && (e.flags & 128) === 0)
                    return Gt = !1,
                    $0(t, e, n);
                Gt = (t.flags & 131072) !== 0
            }
        else
            Gt = !1,
            pt && (e.flags & 1048576) !== 0 && jf(e, Ql, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var a = e.elementType
                  , s = a._init;
                if (a = s(a._payload),
                e.type = a,
                typeof a == "function")
                    Uu(a) ? (t = ea(a, t),
                    e.tag = 1,
                    e = td(null, e, a, t, n)) : (e.tag = 0,
                    e = bo(null, e, a, t, n));
                else {
                    if (a != null) {
                        if (s = a.$$typeof,
                        s === it) {
                            e.tag = 11,
                            e = kh(null, e, a, t, n);
                            break t
                        } else if (s === ft) {
                            e.tag = 14,
                            e = Ph(null, e, a, t, n);
                            break t
                        }
                    }
                    throw e = we(a) || a,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return bo(t, e, e.type, e.pendingProps, n);
        case 1:
            return a = e.type,
            s = ea(a, e.pendingProps),
            td(t, e, a, s, n);
        case 3:
            t: {
                if (Et(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                a = e.pendingProps;
                var r = e.memoizedState;
                s = r.element,
                ku(t, e),
                zi(e, a, null, n);
                var f = e.memoizedState;
                if (a = f.cache,
                yn(e, Ht, a),
                a !== r.cache && Gu(e, [Ht], n, !0),
                Ci(),
                a = f.element,
                r.isDehydrated)
                    if (r = {
                        element: a,
                        isDehydrated: !1,
                        cache: f.cache
                    },
                    e.updateQueue.baseState = r,
                    e.memoizedState = r,
                    e.flags & 256) {
                        e = ed(t, e, a, n);
                        break t
                    } else if (a !== s) {
                        s = Ae(Error(o(424)), e),
                        Ai(s),
                        e = ed(t, e, a, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Vt = je(t.firstChild),
                        ne = e,
                        pt = !0,
                        Pn = null,
                        He = !0,
                        n = wh(e, null, a, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (xi(),
                    a === s) {
                        e = an(t, e, n);
                        break t
                    }
                    Kt(t, e, a, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return fs(t, e),
            t === null ? (n = rm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : pt || (n = e.type,
            t = e.pendingProps,
            a = Ds(nt.current).createElement(n),
            a[Wt] = e,
            a[le] = t,
            kt(a, n, t),
            Yt(a),
            e.stateNode = a) : e.memoizedState = rm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return tu(e),
            t === null && pt && (a = e.stateNode = sm(e.type, e.pendingProps, nt.current),
            ne = e,
            He = !0,
            s = Vt,
            zn(e.type) ? (sr = s,
            Vt = je(a.firstChild)) : Vt = s),
            Kt(t, e, e.pendingProps.children, n),
            fs(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && pt && ((s = a = Vt) && (a = Dv(a, e.type, e.pendingProps, He),
            a !== null ? (e.stateNode = a,
            ne = e,
            Vt = je(a.firstChild),
            He = !1,
            s = !0) : s = !1),
            s || Fn(e)),
            tu(e),
            s = e.type,
            r = e.pendingProps,
            f = t !== null ? t.memoizedProps : null,
            a = r.children,
            nr(s, r) ? a = null : f !== null && nr(s, f) && (e.flags |= 32),
            e.memoizedState !== null && (s = to(t, e, Z0, null, null, n),
            Ii._currentValue = s),
            fs(t, e),
            Kt(t, e, a, n),
            e.child;
        case 6:
            return t === null && pt && ((t = n = Vt) && (n = Rv(n, e.pendingProps, He),
            n !== null ? (e.stateNode = n,
            ne = e,
            Vt = null,
            t = !0) : t = !1),
            t || Fn(e)),
            null;
        case 13:
            return nd(t, e, n);
        case 4:
            return Et(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            t === null ? e.child = wa(e, null, a, n) : Kt(t, e, a, n),
            e.child;
        case 11:
            return kh(t, e, e.type, e.pendingProps, n);
        case 7:
            return Kt(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return Kt(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return Kt(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return a = e.pendingProps,
            yn(e, e.type, a.value),
            Kt(t, e, a.children, n),
            e.child;
        case 9:
            return s = e.type._context,
            a = e.pendingProps.children,
            $n(e),
            s = $t(s),
            a = a(s),
            e.flags |= 1,
            Kt(t, e, a, n),
            e.child;
        case 14:
            return Ph(t, e, e.type, e.pendingProps, n);
        case 15:
            return Fh(t, e, e.type, e.pendingProps, n);
        case 19:
            return id(t, e, n);
        case 31:
            return a = e.pendingProps,
            n = e.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            t === null ? (n = hs(a, n),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n) : (n = Fe(t.child, a),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n),
            e;
        case 22:
            return Wh(t, e, n);
        case 24:
            return $n(e),
            a = $t(Ht),
            t === null ? (s = Qu(),
            s === null && (s = xt,
            r = Xu(),
            s.pooledCache = r,
            r.refCount++,
            r !== null && (s.pooledCacheLanes |= n),
            s = r),
            e.memoizedState = {
                parent: a,
                cache: s
            },
            Ju(e),
            yn(e, Ht, s)) : ((t.lanes & n) !== 0 && (ku(t, e),
            zi(e, null, null, n),
            Ci()),
            s = t.memoizedState,
            r = e.memoizedState,
            s.parent !== a ? (s = {
                parent: a,
                cache: a
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            yn(e, Ht, a)) : (a = r.cache,
            yn(e, Ht, a),
            a !== s.cache && Gu(e, [Ht], n, !0))),
            Kt(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function ln(t) {
        t.flags |= 4
    }
    function sd(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !mm(e)) {
            if (e = Re.current,
            e !== null && ((ct & 4194048) === ct ? qe !== null : (ct & 62914560) !== ct && (ct & 536870912) === 0 || e !== qe))
                throw Oi = Ku,
                Xf;
            t.flags |= 8192
        }
    }
    function ds(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? wc() : 536870912,
        t.lanes |= e,
        Ya |= e)
    }
    function Li(t, e) {
        if (!pt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var a = null; n !== null; )
                    n.alternate !== null && (a = n),
                    n = n.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function Dt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , a = 0;
        if (e)
            for (var s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                a |= s.subtreeFlags & 65011712,
                a |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                a |= s.subtreeFlags,
                a |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = n,
        e
    }
    function I0(t, e, n) {
        var a = e.pendingProps;
        switch (Lu(e),
        e.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Dt(e),
            null;
        case 1:
            return Dt(e),
            null;
        case 3:
            return n = e.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            tn(Ht),
            hn(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (Ti(e) ? ln(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Lf())),
            Dt(e),
            null;
        case 26:
            return n = e.memoizedState,
            t === null ? (ln(e),
            n !== null ? (Dt(e),
            sd(e, n)) : (Dt(e),
            e.flags &= -16777217)) : n ? n !== t.memoizedState ? (ln(e),
            Dt(e),
            sd(e, n)) : (Dt(e),
            e.flags &= -16777217) : (t.memoizedProps !== a && ln(e),
            Dt(e),
            e.flags &= -16777217),
            null;
        case 27:
            El(e),
            n = nt.current;
            var s = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Dt(e),
                    null
                }
                t = P.current,
                Ti(e) ? Bf(e) : (t = sm(s, a, n),
                e.stateNode = t,
                ln(e))
            }
            return Dt(e),
            null;
        case 5:
            if (El(e),
            n = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Dt(e),
                    null
                }
                if (t = P.current,
                Ti(e))
                    Bf(e);
                else {
                    switch (s = Ds(nt.current),
                    t) {
                    case 1:
                        t = s.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            t = s.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            t = s.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof a.is == "string" ? s.createElement("select", {
                                is: a.is
                            }) : s.createElement("select"),
                            a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                            break;
                        default:
                            t = typeof a.is == "string" ? s.createElement(n, {
                                is: a.is
                            }) : s.createElement(n)
                        }
                    }
                    t[Wt] = e,
                    t[le] = a;
                    t: for (s = e.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            t.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === e)
                            break t;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === e)
                                break t;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    e.stateNode = t;
                    t: switch (kt(t, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!a.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && ln(e)
                }
            }
            return Dt(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = nt.current,
                Ti(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    a = null,
                    s = ne,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            a = s.memoizedProps
                        }
                    t[Wt] = e,
                    t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Id(t.nodeValue, n)),
                    t || Fn(e)
                } else
                    t = Ds(t).createTextNode(a),
                    t[Wt] = e,
                    e.stateNode = t
            }
            return Dt(e),
            null;
        case 13:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = Ti(e),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[Wt] = e
                    } else
                        xi(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Dt(e),
                    s = !1
                } else
                    s = Lf(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (nn(e),
                    e) : (nn(e),
                    null)
            }
            if (nn(e),
            (e.flags & 128) !== 0)
                return e.lanes = n,
                e;
            if (n = a !== null,
            t = t !== null && t.memoizedState !== null,
            n) {
                a = e.child,
                s = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool);
                var r = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool),
                r !== s && (a.flags |= 2048)
            }
            return n !== t && n && (e.child.flags |= 8192),
            ds(e, e.updateQueue),
            Dt(e),
            null;
        case 4:
            return hn(),
            t === null && Wo(e.stateNode.containerInfo),
            Dt(e),
            null;
        case 10:
            return tn(e.type),
            Dt(e),
            null;
        case 19:
            if (Z(qt),
            s = e.memoizedState,
            s === null)
                return Dt(e),
                null;
            if (a = (e.flags & 128) !== 0,
            r = s.rendering,
            r === null)
                if (a)
                    Li(s, !1);
                else {
                    if (Ct !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (r = os(t),
                            r !== null) {
                                for (e.flags |= 128,
                                Li(s, !1),
                                t = r.updateQueue,
                                e.updateQueue = t,
                                ds(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    Uf(n, t),
                                    n = n.sibling;
                                return X(qt, qt.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    s.tail !== null && Le() > ys && (e.flags |= 128,
                    a = !0,
                    Li(s, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!a)
                    if (t = os(r),
                    t !== null) {
                        if (e.flags |= 128,
                        a = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        ds(e, t),
                        Li(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !r.alternate && !pt)
                            return Dt(e),
                            null
                    } else
                        2 * Le() - s.renderingStartTime > ys && n !== 536870912 && (e.flags |= 128,
                        a = !0,
                        Li(s, !1),
                        e.lanes = 4194304);
                s.isBackwards ? (r.sibling = e.child,
                e.child = r) : (t = s.last,
                t !== null ? t.sibling = r : e.child = r,
                s.last = r)
            }
            return s.tail !== null ? (e = s.tail,
            s.rendering = e,
            s.tail = e.sibling,
            s.renderingStartTime = Le(),
            e.sibling = null,
            t = qt.current,
            X(qt, a ? t & 1 | 2 : t & 1),
            e) : (Dt(e),
            null);
        case 22:
        case 23:
            return nn(e),
            $u(),
            a = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Dt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Dt(e),
            n = e.updateQueue,
            n !== null && ds(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== n && (e.flags |= 2048),
            t !== null && Z(In),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            tn(Ht),
            Dt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function tv(t, e) {
        switch (Lu(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return tn(Ht),
            hn(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return El(e),
            null;
        case 13:
            if (nn(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                xi()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return Z(qt),
            null;
        case 4:
            return hn(),
            null;
        case 10:
            return tn(e.type),
            null;
        case 22:
        case 23:
            return nn(e),
            $u(),
            t !== null && Z(In),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return tn(Ht),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function ud(t, e) {
        switch (Lu(e),
        e.tag) {
        case 3:
            tn(Ht),
            hn();
            break;
        case 26:
        case 27:
        case 5:
            El(e);
            break;
        case 4:
            hn();
            break;
        case 13:
            nn(e);
            break;
        case 19:
            Z(qt);
            break;
        case 10:
            tn(e.type);
            break;
        case 22:
        case 23:
            nn(e),
            $u(),
            t !== null && Z(In);
            break;
        case 24:
            tn(Ht)
        }
    }
    function Hi(t, e) {
        try {
            var n = e.updateQueue
              , a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var s = a.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        a = void 0;
                        var r = n.create
                          , f = n.inst;
                        a = r(),
                        f.destroy = a
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (y) {
            Tt(e, e.return, y)
        }
    }
    function An(t, e, n) {
        try {
            var a = e.updateQueue
              , s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var r = s.next;
                a = r;
                do {
                    if ((a.tag & t) === t) {
                        var f = a.inst
                          , y = f.destroy;
                        if (y !== void 0) {
                            f.destroy = void 0,
                            s = e;
                            var b = n
                              , D = y;
                            try {
                                D()
                            } catch (C) {
                                Tt(s, b, C)
                            }
                        }
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (C) {
            Tt(e, e.return, C)
        }
    }
    function od(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                Pf(e, n)
            } catch (a) {
                Tt(t, t.return, a)
            }
        }
    }
    function rd(t, e, n) {
        n.props = ea(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            Tt(t, e, a)
        }
    }
    function qi(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(a) : n.current = a
            }
        } catch (s) {
            Tt(t, e, s)
        }
    }
    function Ye(t, e) {
        var n = t.ref
          , a = t.refCleanup;
        if (n !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (s) {
                    Tt(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    Tt(t, e, s)
                }
            else
                n.current = null
    }
    function cd(t) {
        var e = t.type
          , n = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && a.focus();
                break t;
            case "img":
                n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        } catch (s) {
            Tt(t, t.return, s)
        }
    }
    function Ro(t, e, n) {
        try {
            var a = t.stateNode;
            Tv(a, t.type, n, e),
            a[le] = e
        } catch (s) {
            Tt(t, t.return, s)
        }
    }
    function fd(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && zn(t.type) || t.tag === 4
    }
    function Oo(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || fd(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && zn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Vo(t, e, n) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = Ms));
        else if (a !== 4 && (a === 27 && zn(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Vo(t, e, n),
            t = t.sibling; t !== null; )
                Vo(t, e, n),
                t = t.sibling
    }
    function ms(t, e, n) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (a !== 4 && (a === 27 && zn(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (ms(t, e, n),
            t = t.sibling; t !== null; )
                ms(t, e, n),
                t = t.sibling
    }
    function hd(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var a = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            kt(e, a, n),
            e[Wt] = t,
            e[le] = n
        } catch (r) {
            Tt(t, t.return, r)
        }
    }
    var sn = !1
      , _t = !1
      , Co = !1
      , dd = typeof WeakSet == "function" ? WeakSet : Set
      , Xt = null;
    function ev(t, e) {
        if (t = t.containerInfo,
        tr = Ns,
        t = Ef(t),
        Ru(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var s = a.anchorOffset
                          , r = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType,
                            r.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var f = 0
                          , y = -1
                          , b = -1
                          , D = 0
                          , C = 0
                          , _ = t
                          , R = null;
                        e: for (; ; ) {
                            for (var O; _ !== n || s !== 0 && _.nodeType !== 3 || (y = f + s),
                            _ !== r || a !== 0 && _.nodeType !== 3 || (b = f + a),
                            _.nodeType === 3 && (f += _.nodeValue.length),
                            (O = _.firstChild) !== null; )
                                R = _,
                                _ = O;
                            for (; ; ) {
                                if (_ === t)
                                    break e;
                                if (R === n && ++D === s && (y = f),
                                R === r && ++C === a && (b = f),
                                (O = _.nextSibling) !== null)
                                    break;
                                _ = R,
                                R = _.parentNode
                            }
                            _ = O
                        }
                        n = y === -1 || b === -1 ? null : {
                            start: y,
                            end: b
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (er = {
            focusedElem: t,
            selectionRange: n
        },
        Ns = !1,
        Xt = e; Xt !== null; )
            if (e = Xt,
            t = e.child,
            (e.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = e,
                Xt = t;
            else
                for (; Xt !== null; ) {
                    switch (e = Xt,
                    r = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && r !== null) {
                            t = void 0,
                            n = e,
                            s = r.memoizedProps,
                            r = r.memoizedState,
                            a = n.stateNode;
                            try {
                                var I = ea(n.type, s, n.elementType === n.type);
                                t = a.getSnapshotBeforeUpdate(I, r),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (F) {
                                Tt(n, n.return, F)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                ir(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    ir(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Xt = t;
                        break
                    }
                    Xt = e.return
                }
    }
    function md(t, e, n) {
        var a = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            En(t, n),
            a & 4 && Hi(5, n);
            break;
        case 1:
            if (En(t, n),
            a & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (f) {
                        Tt(n, n.return, f)
                    }
                else {
                    var s = ea(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (f) {
                        Tt(n, n.return, f)
                    }
                }
            a & 64 && od(n),
            a & 512 && qi(n, n.return);
            break;
        case 3:
            if (En(t, n),
            a & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    Pf(t, e)
                } catch (f) {
                    Tt(n, n.return, f)
                }
            }
            break;
        case 27:
            e === null && a & 4 && hd(n);
        case 26:
        case 5:
            En(t, n),
            e === null && a & 4 && cd(n),
            a & 512 && qi(n, n.return);
            break;
        case 12:
            En(t, n);
            break;
        case 13:
            En(t, n),
            a & 4 && gd(t, n),
            a & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = cv.bind(null, n),
            Ov(t, n))));
            break;
        case 22:
            if (a = n.memoizedState !== null || sn,
            !a) {
                e = e !== null && e.memoizedState !== null || _t,
                s = sn;
                var r = _t;
                sn = a,
                (_t = e) && !r ? Mn(t, n, (n.subtreeFlags & 8772) !== 0) : En(t, n),
                sn = s,
                _t = r
            }
            break;
        case 30:
            break;
        default:
            En(t, n)
        }
    }
    function pd(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        pd(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && ou(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Mt = null
      , oe = !1;
    function un(t, e, n) {
        for (n = n.child; n !== null; )
            yd(t, e, n),
            n = n.sibling
    }
    function yd(t, e, n) {
        if (he && typeof he.onCommitFiberUnmount == "function")
            try {
                he.onCommitFiberUnmount(ui, n)
            } catch {}
        switch (n.tag) {
        case 26:
            _t || Ye(n, e),
            un(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            _t || Ye(n, e);
            var a = Mt
              , s = oe;
            zn(n.type) && (Mt = n.stateNode,
            oe = !1),
            un(t, e, n),
            Pi(n.stateNode),
            Mt = a,
            oe = s;
            break;
        case 5:
            _t || Ye(n, e);
        case 6:
            if (a = Mt,
            s = oe,
            Mt = null,
            un(t, e, n),
            Mt = a,
            oe = s,
            Mt !== null)
                if (oe)
                    try {
                        (Mt.nodeType === 9 ? Mt.body : Mt.nodeName === "HTML" ? Mt.ownerDocument.body : Mt).removeChild(n.stateNode)
                    } catch (r) {
                        Tt(n, e, r)
                    }
                else
                    try {
                        Mt.removeChild(n.stateNode)
                    } catch (r) {
                        Tt(n, e, r)
                    }
            break;
        case 18:
            Mt !== null && (oe ? (t = Mt,
            im(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            al(t)) : im(Mt, n.stateNode));
            break;
        case 4:
            a = Mt,
            s = oe,
            Mt = n.stateNode.containerInfo,
            oe = !0,
            un(t, e, n),
            Mt = a,
            oe = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            _t || An(2, n, e),
            _t || An(4, n, e),
            un(t, e, n);
            break;
        case 1:
            _t || (Ye(n, e),
            a = n.stateNode,
            typeof a.componentWillUnmount == "function" && rd(n, e, a)),
            un(t, e, n);
            break;
        case 21:
            un(t, e, n);
            break;
        case 22:
            _t = (a = _t) || n.memoizedState !== null,
            un(t, e, n),
            _t = a;
            break;
        default:
            un(t, e, n)
        }
    }
    function gd(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                al(t)
            } catch (n) {
                Tt(e, e.return, n)
            }
    }
    function nv(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new dd),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new dd),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function zo(t, e) {
        var n = nv(t);
        e.forEach(function(a) {
            var s = fv.bind(null, t, a);
            n.has(a) || (n.add(a),
            a.then(s, s))
        })
    }
    function ye(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var s = n[a]
                  , r = t
                  , f = e
                  , y = f;
                t: for (; y !== null; ) {
                    switch (y.tag) {
                    case 27:
                        if (zn(y.type)) {
                            Mt = y.stateNode,
                            oe = !1;
                            break t
                        }
                        break;
                    case 5:
                        Mt = y.stateNode,
                        oe = !1;
                        break t;
                    case 3:
                    case 4:
                        Mt = y.stateNode.containerInfo,
                        oe = !0;
                        break t
                    }
                    y = y.return
                }
                if (Mt === null)
                    throw Error(o(160));
                yd(r, f, s),
                Mt = null,
                oe = !1,
                r = s.alternate,
                r !== null && (r.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                vd(e, t),
                e = e.sibling
    }
    var Ue = null;
    function vd(t, e) {
        var n = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t),
            ge(t),
            a & 4 && (An(3, t, t.return),
            Hi(3, t),
            An(5, t, t.return));
            break;
        case 1:
            ye(e, t),
            ge(t),
            a & 512 && (_t || n === null || Ye(n, n.return)),
            a & 64 && sn && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
            break;
        case 26:
            var s = Ue;
            if (ye(e, t),
            ge(t),
            a & 512 && (_t || n === null || Ye(n, n.return)),
            a & 4) {
                var r = n !== null ? n.memoizedState : null;
                if (a = t.memoizedState,
                n === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                n = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (a) {
                                case "title":
                                    r = s.getElementsByTagName("title")[0],
                                    (!r || r[ci] || r[Wt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(a),
                                    s.head.insertBefore(r, s.querySelector("head > title"))),
                                    kt(r, a, n),
                                    r[Wt] = t,
                                    Yt(r),
                                    a = r;
                                    break t;
                                case "link":
                                    var f = hm("link", "href", s).get(a + (n.href || ""));
                                    if (f) {
                                        for (var y = 0; y < f.length; y++)
                                            if (r = f[y],
                                            r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                f.splice(y, 1);
                                                break e
                                            }
                                    }
                                    r = s.createElement(a),
                                    kt(r, a, n),
                                    s.head.appendChild(r);
                                    break;
                                case "meta":
                                    if (f = hm("meta", "content", s).get(a + (n.content || ""))) {
                                        for (y = 0; y < f.length; y++)
                                            if (r = f[y],
                                            r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                f.splice(y, 1);
                                                break e
                                            }
                                    }
                                    r = s.createElement(a),
                                    kt(r, a, n),
                                    s.head.appendChild(r);
                                    break;
                                default:
                                    throw Error(o(468, a))
                                }
                                r[Wt] = t,
                                Yt(r),
                                a = r
                            }
                            t.stateNode = a
                        } else
                            dm(s, t.type, t.stateNode);
                    else
                        t.stateNode = fm(s, a, t.memoizedProps);
                else
                    r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : r.count--,
                    a === null ? dm(s, t.type, t.stateNode) : fm(s, a, t.memoizedProps)) : a === null && t.stateNode !== null && Ro(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            ye(e, t),
            ge(t),
            a & 512 && (_t || n === null || Ye(n, n.return)),
            n !== null && a & 4 && Ro(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ye(e, t),
            ge(t),
            a & 512 && (_t || n === null || Ye(n, n.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    ba(s, "")
                } catch (O) {
                    Tt(t, t.return, O)
                }
            }
            a & 4 && t.stateNode != null && (s = t.memoizedProps,
            Ro(t, s, n !== null ? n.memoizedProps : s)),
            a & 1024 && (Co = !0);
            break;
        case 6:
            if (ye(e, t),
            ge(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                a = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = a
                } catch (O) {
                    Tt(t, t.return, O)
                }
            }
            break;
        case 3:
            if (Vs = null,
            s = Ue,
            Ue = Rs(e.containerInfo),
            ye(e, t),
            Ue = s,
            ge(t),
            a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    al(e.containerInfo)
                } catch (O) {
                    Tt(t, t.return, O)
                }
            Co && (Co = !1,
            bd(t));
            break;
        case 4:
            a = Ue,
            Ue = Rs(t.stateNode.containerInfo),
            ye(e, t),
            ge(t),
            Ue = a;
            break;
        case 12:
            ye(e, t),
            ge(t);
            break;
        case 13:
            ye(e, t),
            ge(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (wo = Le()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            zo(t, a)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var b = n !== null && n.memoizedState !== null
              , D = sn
              , C = _t;
            if (sn = D || s,
            _t = C || b,
            ye(e, t),
            _t = C,
            sn = D,
            ge(t),
            a & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || b || sn || _t || na(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            b = n = e;
                            try {
                                if (r = b.stateNode,
                                s)
                                    f = r.style,
                                    typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    y = b.stateNode;
                                    var _ = b.memoizedProps.style
                                      , R = _ != null && _.hasOwnProperty("display") ? _.display : null;
                                    y.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim()
                                }
                            } catch (O) {
                                Tt(b, b.return, O)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            b = e;
                            try {
                                b.stateNode.nodeValue = s ? "" : b.memoizedProps
                            } catch (O) {
                                Tt(b, b.return, O)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (n = a.retryQueue,
            n !== null && (a.retryQueue = null,
            zo(t, n))));
            break;
        case 19:
            ye(e, t),
            ge(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            zo(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ye(e, t),
            ge(t)
        }
    }
    function ge(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, a = t.return; a !== null; ) {
                    if (fd(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , r = Oo(t);
                    ms(t, r, s);
                    break;
                case 5:
                    var f = n.stateNode;
                    n.flags & 32 && (ba(f, ""),
                    n.flags &= -33);
                    var y = Oo(t);
                    ms(t, y, f);
                    break;
                case 3:
                case 4:
                    var b = n.stateNode.containerInfo
                      , D = Oo(t);
                    Vo(t, D, b);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (C) {
                Tt(t, t.return, C)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function bd(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                bd(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function En(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                md(t, e.alternate, e),
                e = e.sibling
    }
    function na(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                An(4, e, e.return),
                na(e);
                break;
            case 1:
                Ye(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && rd(e, e.return, n),
                na(e);
                break;
            case 27:
                Pi(e.stateNode);
            case 26:
            case 5:
                Ye(e, e.return),
                na(e);
                break;
            case 22:
                e.memoizedState === null && na(e);
                break;
            case 30:
                na(e);
                break;
            default:
                na(e)
            }
            t = t.sibling
        }
    }
    function Mn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , s = t
              , r = e
              , f = r.flags;
            switch (r.tag) {
            case 0:
            case 11:
            case 15:
                Mn(s, r, n),
                Hi(4, r);
                break;
            case 1:
                if (Mn(s, r, n),
                a = r,
                s = a.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (D) {
                        Tt(a, a.return, D)
                    }
                if (a = r,
                s = a.updateQueue,
                s !== null) {
                    var y = a.stateNode;
                    try {
                        var b = s.shared.hiddenCallbacks;
                        if (b !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < b.length; s++)
                                kf(b[s], y)
                    } catch (D) {
                        Tt(a, a.return, D)
                    }
                }
                n && f & 64 && od(r),
                qi(r, r.return);
                break;
            case 27:
                hd(r);
            case 26:
            case 5:
                Mn(s, r, n),
                n && a === null && f & 4 && cd(r),
                qi(r, r.return);
                break;
            case 12:
                Mn(s, r, n);
                break;
            case 13:
                Mn(s, r, n),
                n && f & 4 && gd(s, r);
                break;
            case 22:
                r.memoizedState === null && Mn(s, r, n),
                qi(r, r.return);
                break;
            case 30:
                break;
            default:
                Mn(s, r, n)
            }
            e = e.sibling
        }
    }
    function No(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && Mi(n))
    }
    function _o(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && Mi(t))
    }
    function Ge(t, e, n, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Sd(t, e, n, a),
                e = e.sibling
    }
    function Sd(t, e, n, a) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ge(t, e, n, a),
            s & 2048 && Hi(9, e);
            break;
        case 1:
            Ge(t, e, n, a);
            break;
        case 3:
            Ge(t, e, n, a),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && Mi(t)));
            break;
        case 12:
            if (s & 2048) {
                Ge(t, e, n, a),
                t = e.stateNode;
                try {
                    var r = e.memoizedProps
                      , f = r.id
                      , y = r.onPostCommit;
                    typeof y == "function" && y(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (b) {
                    Tt(e, e.return, b)
                }
            } else
                Ge(t, e, n, a);
            break;
        case 13:
            Ge(t, e, n, a);
            break;
        case 23:
            break;
        case 22:
            r = e.stateNode,
            f = e.alternate,
            e.memoizedState !== null ? r._visibility & 2 ? Ge(t, e, n, a) : Yi(t, e) : r._visibility & 2 ? Ge(t, e, n, a) : (r._visibility |= 2,
            La(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
            s & 2048 && No(f, e);
            break;
        case 24:
            Ge(t, e, n, a),
            s & 2048 && _o(e.alternate, e);
            break;
        default:
            Ge(t, e, n, a)
        }
    }
    function La(t, e, n, a, s) {
        for (s = s && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var r = t
              , f = e
              , y = n
              , b = a
              , D = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                La(r, f, y, b, s),
                Hi(8, f);
                break;
            case 23:
                break;
            case 22:
                var C = f.stateNode;
                f.memoizedState !== null ? C._visibility & 2 ? La(r, f, y, b, s) : Yi(r, f) : (C._visibility |= 2,
                La(r, f, y, b, s)),
                s && D & 2048 && No(f.alternate, f);
                break;
            case 24:
                La(r, f, y, b, s),
                s && D & 2048 && _o(f.alternate, f);
                break;
            default:
                La(r, f, y, b, s)
            }
            e = e.sibling
        }
    }
    function Yi(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , a = e
                  , s = a.flags;
                switch (a.tag) {
                case 22:
                    Yi(n, a),
                    s & 2048 && No(a.alternate, a);
                    break;
                case 24:
                    Yi(n, a),
                    s & 2048 && _o(a.alternate, a);
                    break;
                default:
                    Yi(n, a)
                }
                e = e.sibling
            }
    }
    var Gi = 8192;
    function Ha(t) {
        if (t.subtreeFlags & Gi)
            for (t = t.child; t !== null; )
                Td(t),
                t = t.sibling
    }
    function Td(t) {
        switch (t.tag) {
        case 26:
            Ha(t),
            t.flags & Gi && t.memoizedState !== null && Yv(Ue, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Ha(t);
            break;
        case 3:
        case 4:
            var e = Ue;
            Ue = Rs(t.stateNode.containerInfo),
            Ha(t),
            Ue = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = Gi,
            Gi = 16777216,
            Ha(t),
            Gi = e) : Ha(t));
            break;
        default:
            Ha(t)
        }
    }
    function xd(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Xi(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    Xt = a,
                    Ed(a, t)
                }
            xd(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Ad(t),
                t = t.sibling
    }
    function Ad(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Xi(t),
            t.flags & 2048 && An(9, t, t.return);
            break;
        case 3:
            Xi(t);
            break;
        case 12:
            Xi(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            ps(t)) : Xi(t);
            break;
        default:
            Xi(t)
        }
    }
    function ps(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    Xt = a,
                    Ed(a, t)
                }
            xd(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                An(8, e, e.return),
                ps(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                ps(e));
                break;
            default:
                ps(e)
            }
            t = t.sibling
        }
    }
    function Ed(t, e) {
        for (; Xt !== null; ) {
            var n = Xt;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                An(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var a = n.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Mi(n.memoizedState.cache)
            }
            if (a = n.child,
            a !== null)
                a.return = n,
                Xt = a;
            else
                t: for (n = t; Xt !== null; ) {
                    a = Xt;
                    var s = a.sibling
                      , r = a.return;
                    if (pd(a),
                    a === n) {
                        Xt = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = r,
                        Xt = s;
                        break t
                    }
                    Xt = r
                }
        }
    }
    var av = {
        getCacheForType: function(t) {
            var e = $t(Ht)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        }
    }
      , iv = typeof WeakMap == "function" ? WeakMap : Map
      , yt = 0
      , xt = null
      , ot = null
      , ct = 0
      , gt = 0
      , ve = null
      , Dn = !1
      , qa = !1
      , Uo = !1
      , on = 0
      , Ct = 0
      , Rn = 0
      , aa = 0
      , jo = 0
      , Oe = 0
      , Ya = 0
      , Zi = null
      , re = null
      , Bo = !1
      , wo = 0
      , ys = 1 / 0
      , gs = null
      , On = null
      , Jt = 0
      , Vn = null
      , Ga = null
      , Xa = 0
      , Lo = 0
      , Ho = null
      , Md = null
      , Qi = 0
      , qo = null;
    function be() {
        if ((yt & 2) !== 0 && ct !== 0)
            return ct & -ct;
        if (z.T !== null) {
            var t = Ca;
            return t !== 0 ? t : Jo()
        }
        return qc()
    }
    function Dd() {
        Oe === 0 && (Oe = (ct & 536870912) === 0 || pt ? Bc() : 536870912);
        var t = Re.current;
        return t !== null && (t.flags |= 32),
        Oe
    }
    function Se(t, e, n) {
        (t === xt && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (Za(t, 0),
        Cn(t, ct, Oe, !1)),
        ri(t, n),
        ((yt & 2) === 0 || t !== xt) && (t === xt && ((yt & 2) === 0 && (aa |= n),
        Ct === 4 && Cn(t, ct, Oe, !1)),
        Xe(t))
    }
    function Rd(t, e, n) {
        if ((yt & 6) !== 0)
            throw Error(o(327));
        var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || oi(t, e)
          , s = a ? uv(t, e) : Xo(t, e, !0)
          , r = a;
        do {
            if (s === 0) {
                qa && !a && Cn(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                r && !lv(n)) {
                    s = Xo(t, e, !1),
                    r = !1;
                    continue
                }
                if (s === 2) {
                    if (r = e,
                    t.errorRecoveryDisabledLanes & r)
                        var f = 0;
                    else
                        f = t.pendingLanes & -536870913,
                        f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        e = f;
                        t: {
                            var y = t;
                            s = Zi;
                            var b = y.current.memoizedState.isDehydrated;
                            if (b && (Za(y, f).flags |= 256),
                            f = Xo(y, f, !1),
                            f !== 2) {
                                if (Uo && !b) {
                                    y.errorRecoveryDisabledLanes |= r,
                                    aa |= r,
                                    s = 4;
                                    break t
                                }
                                r = re,
                                re = s,
                                r !== null && (re === null ? re = r : re.push.apply(re, r))
                            }
                            s = f
                        }
                        if (r = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Za(t, 0),
                    Cn(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    r = s,
                    r) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Cn(a, e, Oe, !Dn);
                        break t;
                    case 2:
                        re = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (s = wo + 300 - Le(),
                    10 < s)) {
                        if (Cn(a, e, Oe, !Dn),
                        Ol(a, 0, !0) !== 0)
                            break t;
                        a.timeoutHandle = nm(Od.bind(null, a, n, re, gs, Bo, e, Oe, aa, Ya, Dn, r, 2, -0, 0), s);
                        break t
                    }
                    Od(a, n, re, gs, Bo, e, Oe, aa, Ya, Dn, r, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Xe(t)
    }
    function Od(t, e, n, a, s, r, f, y, b, D, C, _, R, O) {
        if (t.timeoutHandle = -1,
        _ = e.subtreeFlags,
        (_ & 8192 || (_ & 16785408) === 16785408) && ($i = {
            stylesheets: null,
            count: 0,
            unsuspend: qv
        },
        Td(e),
        _ = Gv(),
        _ !== null)) {
            t.cancelPendingCommit = _(jd.bind(null, t, e, r, n, a, s, f, y, b, C, 1, R, O)),
            Cn(t, r, f, !D);
            return
        }
        jd(t, e, r, n, a, s, f, y, b)
    }
    function lv(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var s = n[a]
                      , r = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!me(r(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Cn(t, e, n, a) {
        e &= ~jo,
        e &= ~aa,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        a && (t.warmLanes |= e),
        a = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var r = 31 - de(s)
              , f = 1 << r;
            a[r] = -1,
            s &= ~f
        }
        n !== 0 && Lc(t, n, e)
    }
    function vs() {
        return (yt & 6) === 0 ? (Ki(0),
        !1) : !0
    }
    function Yo() {
        if (ot !== null) {
            if (gt === 0)
                var t = ot.return;
            else
                t = ot,
                Ie = Wn = null,
                ao(t),
                Ba = null,
                Bi = 0,
                t = ot;
            for (; t !== null; )
                ud(t.alternate, t),
                t = t.return;
            ot = null
        }
    }
    function Za(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        Av(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        Yo(),
        xt = t,
        ot = n = Fe(t.current, null),
        ct = e,
        gt = 0,
        ve = null,
        Dn = !1,
        qa = oi(t, e),
        Uo = !1,
        Ya = Oe = jo = aa = Rn = Ct = 0,
        re = Zi = null,
        Bo = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= e; 0 < a; ) {
                var s = 31 - de(a)
                  , r = 1 << s;
                e |= t[s],
                a &= ~r
            }
        return on = e,
        ql(),
        n
    }
    function Vd(t, e) {
        st = null,
        z.H = ls,
        e === Ri || e === Pl ? (e = Kf(),
        gt = 3) : e === Xf ? (e = Kf(),
        gt = 4) : gt = e === Jh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        ve = e,
        ot === null && (Ct = 1,
        cs(t, Ae(e, t.current)))
    }
    function Cd() {
        var t = z.H;
        return z.H = ls,
        t === null ? ls : t
    }
    function zd() {
        var t = z.A;
        return z.A = av,
        t
    }
    function Go() {
        Ct = 4,
        Dn || (ct & 4194048) !== ct && Re.current !== null || (qa = !0),
        (Rn & 134217727) === 0 && (aa & 134217727) === 0 || xt === null || Cn(xt, ct, Oe, !1)
    }
    function Xo(t, e, n) {
        var a = yt;
        yt |= 2;
        var s = Cd()
          , r = zd();
        (xt !== t || ct !== e) && (gs = null,
        Za(t, e)),
        e = !1;
        var f = Ct;
        t: do
            try {
                if (gt !== 0 && ot !== null) {
                    var y = ot
                      , b = ve;
                    switch (gt) {
                    case 8:
                        Yo(),
                        f = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Re.current === null && (e = !0);
                        var D = gt;
                        if (gt = 0,
                        ve = null,
                        Qa(t, y, b, D),
                        n && qa) {
                            f = 0;
                            break t
                        }
                        break;
                    default:
                        D = gt,
                        gt = 0,
                        ve = null,
                        Qa(t, y, b, D)
                    }
                }
                sv(),
                f = Ct;
                break
            } catch (C) {
                Vd(t, C)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Ie = Wn = null,
        yt = a,
        z.H = s,
        z.A = r,
        ot === null && (xt = null,
        ct = 0,
        ql()),
        f
    }
    function sv() {
        for (; ot !== null; )
            Nd(ot)
    }
    function uv(t, e) {
        var n = yt;
        yt |= 2;
        var a = Cd()
          , s = zd();
        xt !== t || ct !== e ? (gs = null,
        ys = Le() + 500,
        Za(t, e)) : qa = oi(t, e);
        t: do
            try {
                if (gt !== 0 && ot !== null) {
                    e = ot;
                    var r = ve;
                    e: switch (gt) {
                    case 1:
                        gt = 0,
                        ve = null,
                        Qa(t, e, r, 1);
                        break;
                    case 2:
                    case 9:
                        if (Zf(r)) {
                            gt = 0,
                            ve = null,
                            _d(e);
                            break
                        }
                        e = function() {
                            gt !== 2 && gt !== 9 || xt !== t || (gt = 7),
                            Xe(t)
                        }
                        ,
                        r.then(e, e);
                        break t;
                    case 3:
                        gt = 7;
                        break t;
                    case 4:
                        gt = 5;
                        break t;
                    case 7:
                        Zf(r) ? (gt = 0,
                        ve = null,
                        _d(e)) : (gt = 0,
                        ve = null,
                        Qa(t, e, r, 7));
                        break;
                    case 5:
                        var f = null;
                        switch (ot.tag) {
                        case 26:
                            f = ot.memoizedState;
                        case 5:
                        case 27:
                            var y = ot;
                            if (!f || mm(f)) {
                                gt = 0,
                                ve = null;
                                var b = y.sibling;
                                if (b !== null)
                                    ot = b;
                                else {
                                    var D = y.return;
                                    D !== null ? (ot = D,
                                    bs(D)) : ot = null
                                }
                                break e
                            }
                        }
                        gt = 0,
                        ve = null,
                        Qa(t, e, r, 5);
                        break;
                    case 6:
                        gt = 0,
                        ve = null,
                        Qa(t, e, r, 6);
                        break;
                    case 8:
                        Yo(),
                        Ct = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                ov();
                break
            } catch (C) {
                Vd(t, C)
            }
        while (!0);
        return Ie = Wn = null,
        z.H = a,
        z.A = s,
        yt = n,
        ot !== null ? 0 : (xt = null,
        ct = 0,
        ql(),
        Ct)
    }
    function ov() {
        for (; ot !== null && !Cg(); )
            Nd(ot)
    }
    function Nd(t) {
        var e = ld(t.alternate, t, on);
        t.memoizedProps = t.pendingProps,
        e === null ? bs(t) : ot = e
    }
    function _d(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = Ih(n, e, e.pendingProps, e.type, void 0, ct);
            break;
        case 11:
            e = Ih(n, e, e.pendingProps, e.type.render, e.ref, ct);
            break;
        case 5:
            ao(e);
        default:
            ud(n, e),
            e = ot = Uf(e, on),
            e = ld(n, e, on)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? bs(t) : ot = e
    }
    function Qa(t, e, n, a) {
        Ie = Wn = null,
        ao(e),
        Ba = null,
        Bi = 0;
        var s = e.return;
        try {
            if (W0(t, s, e, n, ct)) {
                Ct = 1,
                cs(t, Ae(n, t.current)),
                ot = null;
                return
            }
        } catch (r) {
            if (s !== null)
                throw ot = s,
                r;
            Ct = 1,
            cs(t, Ae(n, t.current)),
            ot = null;
            return
        }
        e.flags & 32768 ? (pt || a === 1 ? t = !0 : qa || (ct & 536870912) !== 0 ? t = !1 : (Dn = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = Re.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ud(e, t)) : bs(e)
    }
    function bs(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Ud(e, Dn);
                return
            }
            t = e.return;
            var n = I0(e.alternate, e, on);
            if (n !== null) {
                ot = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ot = e;
                return
            }
            ot = e = t
        } while (e !== null);
        Ct === 0 && (Ct = 5)
    }
    function Ud(t, e) {
        do {
            var n = tv(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                ot = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ot = t;
                return
            }
            ot = t = n
        } while (t !== null);
        Ct = 6,
        ot = null
    }
    function jd(t, e, n, a, s, r, f, y, b) {
        t.cancelPendingCommit = null;
        do
            Ss();
        while (Jt !== 0);
        if ((yt & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (r = e.lanes | e.childLanes,
            r |= Nu,
            qg(t, n, r, f, y, b),
            t === xt && (ot = xt = null,
            ct = 0),
            Ga = e,
            Vn = t,
            Xa = n,
            Lo = r,
            Ho = s,
            Md = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            hv(Ml, function() {
                return qd(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = z.T,
                z.T = null,
                s = B.p,
                B.p = 2,
                f = yt,
                yt |= 4;
                try {
                    ev(t, e, n)
                } finally {
                    yt = f,
                    B.p = s,
                    z.T = a
                }
            }
            Jt = 1,
            Bd(),
            wd(),
            Ld()
        }
    }
    function Bd() {
        if (Jt === 1) {
            Jt = 0;
            var t = Vn
              , e = Ga
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = z.T,
                z.T = null;
                var a = B.p;
                B.p = 2;
                var s = yt;
                yt |= 4;
                try {
                    vd(e, t);
                    var r = er
                      , f = Ef(t.containerInfo)
                      , y = r.focusedElem
                      , b = r.selectionRange;
                    if (f !== y && y && y.ownerDocument && Af(y.ownerDocument.documentElement, y)) {
                        if (b !== null && Ru(y)) {
                            var D = b.start
                              , C = b.end;
                            if (C === void 0 && (C = D),
                            "selectionStart"in y)
                                y.selectionStart = D,
                                y.selectionEnd = Math.min(C, y.value.length);
                            else {
                                var _ = y.ownerDocument || document
                                  , R = _ && _.defaultView || window;
                                if (R.getSelection) {
                                    var O = R.getSelection()
                                      , I = y.textContent.length
                                      , F = Math.min(b.start, I)
                                      , St = b.end === void 0 ? F : Math.min(b.end, I);
                                    !O.extend && F > St && (f = St,
                                    St = F,
                                    F = f);
                                    var A = xf(y, F)
                                      , x = xf(y, St);
                                    if (A && x && (O.rangeCount !== 1 || O.anchorNode !== A.node || O.anchorOffset !== A.offset || O.focusNode !== x.node || O.focusOffset !== x.offset)) {
                                        var M = _.createRange();
                                        M.setStart(A.node, A.offset),
                                        O.removeAllRanges(),
                                        F > St ? (O.addRange(M),
                                        O.extend(x.node, x.offset)) : (M.setEnd(x.node, x.offset),
                                        O.addRange(M))
                                    }
                                }
                            }
                        }
                        for (_ = [],
                        O = y; O = O.parentNode; )
                            O.nodeType === 1 && _.push({
                                element: O,
                                left: O.scrollLeft,
                                top: O.scrollTop
                            });
                        for (typeof y.focus == "function" && y.focus(),
                        y = 0; y < _.length; y++) {
                            var N = _[y];
                            N.element.scrollLeft = N.left,
                            N.element.scrollTop = N.top
                        }
                    }
                    Ns = !!tr,
                    er = tr = null
                } finally {
                    yt = s,
                    B.p = a,
                    z.T = n
                }
            }
            t.current = e,
            Jt = 2
        }
    }
    function wd() {
        if (Jt === 2) {
            Jt = 0;
            var t = Vn
              , e = Ga
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = z.T,
                z.T = null;
                var a = B.p;
                B.p = 2;
                var s = yt;
                yt |= 4;
                try {
                    md(t, e.alternate, e)
                } finally {
                    yt = s,
                    B.p = a,
                    z.T = n
                }
            }
            Jt = 3
        }
    }
    function Ld() {
        if (Jt === 4 || Jt === 3) {
            Jt = 0,
            zg();
            var t = Vn
              , e = Ga
              , n = Xa
              , a = Md;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Jt = 5 : (Jt = 0,
            Ga = Vn = null,
            Hd(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (On = null),
            su(n),
            e = e.stateNode,
            he && typeof he.onCommitFiberRoot == "function")
                try {
                    he.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = z.T,
                s = B.p,
                B.p = 2,
                z.T = null;
                try {
                    for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
                        var y = a[f];
                        r(y.value, {
                            componentStack: y.stack
                        })
                    }
                } finally {
                    z.T = e,
                    B.p = s
                }
            }
            (Xa & 3) !== 0 && Ss(),
            Xe(t),
            s = t.pendingLanes,
            (n & 4194090) !== 0 && (s & 42) !== 0 ? t === qo ? Qi++ : (Qi = 0,
            qo = t) : Qi = 0,
            Ki(0)
        }
    }
    function Hd(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        Mi(e)))
    }
    function Ss(t) {
        return Bd(),
        wd(),
        Ld(),
        qd()
    }
    function qd() {
        if (Jt !== 5)
            return !1;
        var t = Vn
          , e = Lo;
        Lo = 0;
        var n = su(Xa)
          , a = z.T
          , s = B.p;
        try {
            B.p = 32 > n ? 32 : n,
            z.T = null,
            n = Ho,
            Ho = null;
            var r = Vn
              , f = Xa;
            if (Jt = 0,
            Ga = Vn = null,
            Xa = 0,
            (yt & 6) !== 0)
                throw Error(o(331));
            var y = yt;
            if (yt |= 4,
            Ad(r.current),
            Sd(r, r.current, f, n),
            yt = y,
            Ki(0, !1),
            he && typeof he.onPostCommitFiberRoot == "function")
                try {
                    he.onPostCommitFiberRoot(ui, r)
                } catch {}
            return !0
        } finally {
            B.p = s,
            z.T = a,
            Hd(t, e)
        }
    }
    function Yd(t, e, n) {
        e = Ae(n, e),
        e = vo(t.stateNode, e, 2),
        t = bn(t, e, 2),
        t !== null && (ri(t, 2),
        Xe(t))
    }
    function Tt(t, e, n) {
        if (t.tag === 3)
            Yd(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    Yd(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (On === null || !On.has(a))) {
                        t = Ae(n, t),
                        n = Qh(2),
                        a = bn(e, n, 2),
                        a !== null && (Kh(n, a, e, t),
                        ri(a, 2),
                        Xe(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function Zo(t, e, n) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new iv;
            var s = new Set;
            a.set(e, s)
        } else
            s = a.get(e),
            s === void 0 && (s = new Set,
            a.set(e, s));
        s.has(n) || (Uo = !0,
        s.add(n),
        t = rv.bind(null, t, e, n),
        e.then(t, t))
    }
    function rv(t, e, n) {
        var a = t.pingCache;
        a !== null && a.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        xt === t && (ct & n) === n && (Ct === 4 || Ct === 3 && (ct & 62914560) === ct && 300 > Le() - wo ? (yt & 2) === 0 && Za(t, 0) : jo |= n,
        Ya === ct && (Ya = 0)),
        Xe(t)
    }
    function Gd(t, e) {
        e === 0 && (e = wc()),
        t = Da(t, e),
        t !== null && (ri(t, e),
        Xe(t))
    }
    function cv(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        Gd(t, n)
    }
    function fv(t, e) {
        var n = 0;
        switch (t.tag) {
        case 13:
            var a = t.stateNode
              , s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        a !== null && a.delete(e),
        Gd(t, n)
    }
    function hv(t, e) {
        return nu(t, e)
    }
    var Ts = null
      , Ka = null
      , Qo = !1
      , xs = !1
      , Ko = !1
      , ia = 0;
    function Xe(t) {
        t !== Ka && t.next === null && (Ka === null ? Ts = Ka = t : Ka = Ka.next = t),
        xs = !0,
        Qo || (Qo = !0,
        mv())
    }
    function Ki(t, e) {
        if (!Ko && xs) {
            Ko = !0;
            do
                for (var n = !1, a = Ts; a !== null; ) {
                    if (t !== 0) {
                        var s = a.pendingLanes;
                        if (s === 0)
                            var r = 0;
                        else {
                            var f = a.suspendedLanes
                              , y = a.pingedLanes;
                            r = (1 << 31 - de(42 | t) + 1) - 1,
                            r &= s & ~(f & ~y),
                            r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0
                        }
                        r !== 0 && (n = !0,
                        Kd(a, r))
                    } else
                        r = ct,
                        r = Ol(a, a === xt ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (r & 3) === 0 || oi(a, r) || (n = !0,
                        Kd(a, r));
                    a = a.next
                }
            while (n);
            Ko = !1
        }
    }
    function dv() {
        Xd()
    }
    function Xd() {
        xs = Qo = !1;
        var t = 0;
        ia !== 0 && (xv() && (t = ia),
        ia = 0);
        for (var e = Le(), n = null, a = Ts; a !== null; ) {
            var s = a.next
              , r = Zd(a, e);
            r === 0 ? (a.next = null,
            n === null ? Ts = s : n.next = s,
            s === null && (Ka = n)) : (n = a,
            (t !== 0 || (r & 3) !== 0) && (xs = !0)),
            a = s
        }
        Ki(t)
    }
    function Zd(t, e) {
        for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
            var f = 31 - de(r)
              , y = 1 << f
              , b = s[f];
            b === -1 ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = Hg(y, e)) : b <= e && (t.expiredLanes |= y),
            r &= ~y
        }
        if (e = xt,
        n = ct,
        n = Ol(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        n === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && au(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || oi(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (a !== null && au(a),
            su(n)) {
            case 2:
            case 8:
                n = Uc;
                break;
            case 32:
                n = Ml;
                break;
            case 268435456:
                n = jc;
                break;
            default:
                n = Ml
            }
            return a = Qd.bind(null, t),
            n = nu(n, a),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return a !== null && a !== null && au(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Qd(t, e) {
        if (Jt !== 0 && Jt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (Ss() && t.callbackNode !== n)
            return null;
        var a = ct;
        return a = Ol(t, t === xt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (Rd(t, a, e),
        Zd(t, Le()),
        t.callbackNode != null && t.callbackNode === n ? Qd.bind(null, t) : null)
    }
    function Kd(t, e) {
        if (Ss())
            return null;
        Rd(t, e, !0)
    }
    function mv() {
        Ev(function() {
            (yt & 6) !== 0 ? nu(_c, dv) : Xd()
        })
    }
    function Jo() {
        return ia === 0 && (ia = Bc()),
        ia
    }
    function Jd(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _l("" + t)
    }
    function kd(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function pv(t, e, n, a, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var r = Jd((s[le] || null).action)
              , f = a.submitter;
            f && (e = (e = f[le] || null) ? Jd(e.formAction) : f.getAttribute("formAction"),
            e !== null && (r = e,
            f = null));
            var y = new wl("action","action",null,a,s);
            t.push({
                event: y,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (ia !== 0) {
                                var b = f ? kd(s, f) : new FormData(s);
                                ho(n, {
                                    pending: !0,
                                    data: b,
                                    method: s.method,
                                    action: r
                                }, null, b)
                            }
                        } else
                            typeof r == "function" && (y.preventDefault(),
                            b = f ? kd(s, f) : new FormData(s),
                            ho(n, {
                                pending: !0,
                                data: b,
                                method: s.method,
                                action: r
                            }, r, b))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var ko = 0; ko < zu.length; ko++) {
        var Po = zu[ko]
          , yv = Po.toLowerCase()
          , gv = Po[0].toUpperCase() + Po.slice(1);
        _e(yv, "on" + gv)
    }
    _e(Rf, "onAnimationEnd"),
    _e(Of, "onAnimationIteration"),
    _e(Vf, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(U0, "onTransitionRun"),
    _e(j0, "onTransitionStart"),
    _e(B0, "onTransitionCancel"),
    _e(Cf, "onTransitionEnd"),
    ya("onMouseEnter", ["mouseout", "mouseover"]),
    ya("onMouseLeave", ["mouseout", "mouseover"]),
    ya("onPointerEnter", ["pointerout", "pointerover"]),
    ya("onPointerLeave", ["pointerout", "pointerover"]),
    Gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , vv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ji));
    function Pd(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var a = t[n]
              , s = a.event;
            a = a.listeners;
            t: {
                var r = void 0;
                if (e)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var y = a[f]
                          , b = y.instance
                          , D = y.currentTarget;
                        if (y = y.listener,
                        b !== r && s.isPropagationStopped())
                            break t;
                        r = y,
                        s.currentTarget = D;
                        try {
                            r(s)
                        } catch (C) {
                            rs(C)
                        }
                        s.currentTarget = null,
                        r = b
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (y = a[f],
                        b = y.instance,
                        D = y.currentTarget,
                        y = y.listener,
                        b !== r && s.isPropagationStopped())
                            break t;
                        r = y,
                        s.currentTarget = D;
                        try {
                            r(s)
                        } catch (C) {
                            rs(C)
                        }
                        s.currentTarget = null,
                        r = b
                    }
            }
        }
    }
    function rt(t, e) {
        var n = e[uu];
        n === void 0 && (n = e[uu] = new Set);
        var a = t + "__bubble";
        n.has(a) || (Fd(e, t, 2, !1),
        n.add(a))
    }
    function Fo(t, e, n) {
        var a = 0;
        e && (a |= 4),
        Fd(n, t, a, e)
    }
    var As = "_reactListening" + Math.random().toString(36).slice(2);
    function Wo(t) {
        if (!t[As]) {
            t[As] = !0,
            Gc.forEach(function(n) {
                n !== "selectionchange" && (vv.has(n) || Fo(n, !1, t),
                Fo(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[As] || (e[As] = !0,
            Fo("selectionchange", !1, e))
        }
    }
    function Fd(t, e, n, a) {
        switch (Sm(e)) {
        case 2:
            var s = Qv;
            break;
        case 8:
            s = Kv;
            break;
        default:
            s = fr
        }
        n = s.bind(null, e, n, t),
        s = void 0,
        !vu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        a ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }
    function $o(t, e, n, a, s) {
        var r = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var y = a.stateNode.containerInfo;
                    if (y === s)
                        break;
                    if (f === 4)
                        for (f = a.return; f !== null; ) {
                            var b = f.tag;
                            if ((b === 3 || b === 4) && f.stateNode.containerInfo === s)
                                return;
                            f = f.return
                        }
                    for (; y !== null; ) {
                        if (f = da(y),
                        f === null)
                            return;
                        if (b = f.tag,
                        b === 5 || b === 6 || b === 26 || b === 27) {
                            a = r = f;
                            continue t
                        }
                        y = y.parentNode
                    }
                }
                a = a.return
            }
        nf(function() {
            var D = r
              , C = yu(n)
              , _ = [];
            t: {
                var R = zf.get(t);
                if (R !== void 0) {
                    var O = wl
                      , I = t;
                    switch (t) {
                    case "keypress":
                        if (jl(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        O = h0;
                        break;
                    case "focusin":
                        I = "focus",
                        O = xu;
                        break;
                    case "focusout":
                        I = "blur",
                        O = xu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        O = xu;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        O = sf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        O = t0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        O = p0;
                        break;
                    case Rf:
                    case Of:
                    case Vf:
                        O = a0;
                        break;
                    case Cf:
                        O = g0;
                        break;
                    case "scroll":
                    case "scrollend":
                        O = $g;
                        break;
                    case "wheel":
                        O = b0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        O = l0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        O = of;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        O = T0
                    }
                    var F = (e & 4) !== 0
                      , St = !F && (t === "scroll" || t === "scrollend")
                      , A = F ? R !== null ? R + "Capture" : null : R;
                    F = [];
                    for (var x = D, M; x !== null; ) {
                        var N = x;
                        if (M = N.stateNode,
                        N = N.tag,
                        N !== 5 && N !== 26 && N !== 27 || M === null || A === null || (N = hi(x, A),
                        N != null && F.push(ki(x, N, M))),
                        St)
                            break;
                        x = x.return
                    }
                    0 < F.length && (R = new O(R,I,null,n,C),
                    _.push({
                        event: R,
                        listeners: F
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (R = t === "mouseover" || t === "pointerover",
                    O = t === "mouseout" || t === "pointerout",
                    R && n !== pu && (I = n.relatedTarget || n.fromElement) && (da(I) || I[ha]))
                        break t;
                    if ((O || R) && (R = C.window === C ? C : (R = C.ownerDocument) ? R.defaultView || R.parentWindow : window,
                    O ? (I = n.relatedTarget || n.toElement,
                    O = D,
                    I = I ? da(I) : null,
                    I !== null && (St = d(I),
                    F = I.tag,
                    I !== St || F !== 5 && F !== 27 && F !== 6) && (I = null)) : (O = null,
                    I = D),
                    O !== I)) {
                        if (F = sf,
                        N = "onMouseLeave",
                        A = "onMouseEnter",
                        x = "mouse",
                        (t === "pointerout" || t === "pointerover") && (F = of,
                        N = "onPointerLeave",
                        A = "onPointerEnter",
                        x = "pointer"),
                        St = O == null ? R : fi(O),
                        M = I == null ? R : fi(I),
                        R = new F(N,x + "leave",O,n,C),
                        R.target = St,
                        R.relatedTarget = M,
                        N = null,
                        da(C) === D && (F = new F(A,x + "enter",I,n,C),
                        F.target = M,
                        F.relatedTarget = St,
                        N = F),
                        St = N,
                        O && I)
                            e: {
                                for (F = O,
                                A = I,
                                x = 0,
                                M = F; M; M = Ja(M))
                                    x++;
                                for (M = 0,
                                N = A; N; N = Ja(N))
                                    M++;
                                for (; 0 < x - M; )
                                    F = Ja(F),
                                    x--;
                                for (; 0 < M - x; )
                                    A = Ja(A),
                                    M--;
                                for (; x--; ) {
                                    if (F === A || A !== null && F === A.alternate)
                                        break e;
                                    F = Ja(F),
                                    A = Ja(A)
                                }
                                F = null
                            }
                        else
                            F = null;
                        O !== null && Wd(_, R, O, F, !1),
                        I !== null && St !== null && Wd(_, St, I, F, !0)
                    }
                }
                t: {
                    if (R = D ? fi(D) : window,
                    O = R.nodeName && R.nodeName.toLowerCase(),
                    O === "select" || O === "input" && R.type === "file")
                        var Q = yf;
                    else if (mf(R))
                        if (gf)
                            Q = z0;
                        else {
                            Q = V0;
                            var ut = O0
                        }
                    else
                        O = R.nodeName,
                        !O || O.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? D && mu(D.elementType) && (Q = yf) : Q = C0;
                    if (Q && (Q = Q(t, D))) {
                        pf(_, Q, n, C);
                        break t
                    }
                    ut && ut(t, R, D),
                    t === "focusout" && D && R.type === "number" && D.memoizedProps.value != null && du(R, "number", R.value)
                }
                switch (ut = D ? fi(D) : window,
                t) {
                case "focusin":
                    (mf(ut) || ut.contentEditable === "true") && (Aa = ut,
                    Ou = D,
                    Si = null);
                    break;
                case "focusout":
                    Si = Ou = Aa = null;
                    break;
                case "mousedown":
                    Vu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Vu = !1,
                    Mf(_, n, C);
                    break;
                case "selectionchange":
                    if (_0)
                        break;
                case "keydown":
                case "keyup":
                    Mf(_, n, C)
                }
                var J;
                if (Eu)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var $ = "onCompositionStart";
                            break t;
                        case "compositionend":
                            $ = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            $ = "onCompositionUpdate";
                            break t
                        }
                        $ = void 0
                    }
                else
                    xa ? hf(t, n) && ($ = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
                $ && (rf && n.locale !== "ko" && (xa || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && xa && (J = af()) : (pn = C,
                bu = "value"in pn ? pn.value : pn.textContent,
                xa = !0)),
                ut = Es(D, $),
                0 < ut.length && ($ = new uf($,t,null,n,C),
                _.push({
                    event: $,
                    listeners: ut
                }),
                J ? $.data = J : (J = df(n),
                J !== null && ($.data = J)))),
                (J = A0 ? E0(t, n) : M0(t, n)) && ($ = Es(D, "onBeforeInput"),
                0 < $.length && (ut = new uf("onBeforeInput","beforeinput",null,n,C),
                _.push({
                    event: ut,
                    listeners: $
                }),
                ut.data = J)),
                pv(_, t, D, n, C)
            }
            Pd(_, e)
        })
    }
    function ki(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function Es(t, e) {
        for (var n = e + "Capture", a = []; t !== null; ) {
            var s = t
              , r = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || r === null || (s = hi(t, n),
            s != null && a.unshift(ki(t, s, r)),
            s = hi(t, e),
            s != null && a.push(ki(t, s, r))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Ja(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Wd(t, e, n, a, s) {
        for (var r = e._reactName, f = []; n !== null && n !== a; ) {
            var y = n
              , b = y.alternate
              , D = y.stateNode;
            if (y = y.tag,
            b !== null && b === a)
                break;
            y !== 5 && y !== 26 && y !== 27 || D === null || (b = D,
            s ? (D = hi(n, r),
            D != null && f.unshift(ki(n, D, b))) : s || (D = hi(n, r),
            D != null && f.push(ki(n, D, b)))),
            n = n.return
        }
        f.length !== 0 && t.push({
            event: e,
            listeners: f
        })
    }
    var bv = /\r\n?/g
      , Sv = /\u0000|\uFFFD/g;
    function $d(t) {
        return (typeof t == "string" ? t : "" + t).replace(bv, `
`).replace(Sv, "")
    }
    function Id(t, e) {
        return e = $d(e),
        $d(t) === e
    }
    function Ms() {}
    function bt(t, e, n, a, s, r) {
        switch (n) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ba(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ba(t, "" + a);
            break;
        case "className":
            Cl(t, "class", a);
            break;
        case "tabIndex":
            Cl(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Cl(t, n, a);
            break;
        case "style":
            tf(t, a, r);
            break;
        case "data":
            if (e !== "object") {
                Cl(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break
            }
            a = _l("" + a),
            t.setAttribute(n, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof r == "function" && (n === "formAction" ? (e !== "input" && bt(t, e, "name", s.name, s, null),
                bt(t, e, "formEncType", s.formEncType, s, null),
                bt(t, e, "formMethod", s.formMethod, s, null),
                bt(t, e, "formTarget", s.formTarget, s, null)) : (bt(t, e, "encType", s.encType, s, null),
                bt(t, e, "method", s.method, s, null),
                bt(t, e, "target", s.target, s, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break
            }
            a = _l("" + a),
            t.setAttribute(n, a);
            break;
        case "onClick":
            a != null && (t.onclick = Ms);
            break;
        case "onScroll":
            a != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && rt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(o(61));
                if (n = a.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = _l("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
            break;
        case "popover":
            rt("beforetoggle", t),
            rt("toggle", t),
            Vl(t, "popover", a);
            break;
        case "xlinkActuate":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Vl(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fg.get(n) || n,
            Vl(t, n, a))
        }
    }
    function Io(t, e, n, a, s, r) {
        switch (n) {
        case "style":
            tf(t, a, r);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(o(61));
                if (n = a.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof a == "string" ? ba(t, a) : (typeof a == "number" || typeof a == "bigint") && ba(t, "" + a);
            break;
        case "onScroll":
            a != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && rt("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Ms);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Xc.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    e = n.slice(2, s ? n.length - 7 : void 0),
                    r = t[le] || null,
                    r = r != null ? r[n] : null,
                    typeof r == "function" && t.removeEventListener(e, r, s),
                    typeof a == "function")) {
                        typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, a, s);
                        break t
                    }
                    n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Vl(t, n, a)
                }
        }
    }
    function kt(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            rt("error", t),
            rt("load", t);
            var a = !1, s = !1, r;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var f = n[r];
                    if (f != null)
                        switch (r) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            bt(t, e, r, f, n, null)
                        }
                }
            s && bt(t, e, "srcSet", n.srcSet, n, null),
            a && bt(t, e, "src", n.src, n, null);
            return;
        case "input":
            rt("invalid", t);
            var y = r = f = s = null
              , b = null
              , D = null;
            for (a in n)
                if (n.hasOwnProperty(a)) {
                    var C = n[a];
                    if (C != null)
                        switch (a) {
                        case "name":
                            s = C;
                            break;
                        case "type":
                            f = C;
                            break;
                        case "checked":
                            b = C;
                            break;
                        case "defaultChecked":
                            D = C;
                            break;
                        case "value":
                            r = C;
                            break;
                        case "defaultValue":
                            y = C;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            bt(t, e, a, C, n, null)
                        }
                }
            Fc(t, r, y, b, D, f, s, !1),
            zl(t);
            return;
        case "select":
            rt("invalid", t),
            a = f = r = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (y = n[s],
                y != null))
                    switch (s) {
                    case "value":
                        r = y;
                        break;
                    case "defaultValue":
                        f = y;
                        break;
                    case "multiple":
                        a = y;
                    default:
                        bt(t, e, s, y, n, null)
                    }
            e = r,
            n = f,
            t.multiple = !!a,
            e != null ? va(t, !!a, e, !1) : n != null && va(t, !!a, n, !0);
            return;
        case "textarea":
            rt("invalid", t),
            r = s = a = null;
            for (f in n)
                if (n.hasOwnProperty(f) && (y = n[f],
                y != null))
                    switch (f) {
                    case "value":
                        a = y;
                        break;
                    case "defaultValue":
                        s = y;
                        break;
                    case "children":
                        r = y;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(o(91));
                        break;
                    default:
                        bt(t, e, f, y, n, null)
                    }
            $c(t, a, s, r),
            zl(t);
            return;
        case "option":
            for (b in n)
                if (n.hasOwnProperty(b) && (a = n[b],
                a != null))
                    switch (b) {
                    case "selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        bt(t, e, b, a, n, null)
                    }
            return;
        case "dialog":
            rt("beforetoggle", t),
            rt("toggle", t),
            rt("cancel", t),
            rt("close", t);
            break;
        case "iframe":
        case "object":
            rt("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Ji.length; a++)
                rt(Ji[a], t);
            break;
        case "image":
            rt("error", t),
            rt("load", t);
            break;
        case "details":
            rt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            rt("error", t),
            rt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (D in n)
                if (n.hasOwnProperty(D) && (a = n[D],
                a != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        bt(t, e, D, a, n, null)
                    }
            return;
        default:
            if (mu(e)) {
                for (C in n)
                    n.hasOwnProperty(C) && (a = n[C],
                    a !== void 0 && Io(t, e, C, a, n, void 0));
                return
            }
        }
        for (y in n)
            n.hasOwnProperty(y) && (a = n[y],
            a != null && bt(t, e, y, a, n, null))
    }
    function Tv(t, e, n, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , r = null
              , f = null
              , y = null
              , b = null
              , D = null
              , C = null;
            for (O in n) {
                var _ = n[O];
                if (n.hasOwnProperty(O) && _ != null)
                    switch (O) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        b = _;
                    default:
                        a.hasOwnProperty(O) || bt(t, e, O, null, a, _)
                    }
            }
            for (var R in a) {
                var O = a[R];
                if (_ = n[R],
                a.hasOwnProperty(R) && (O != null || _ != null))
                    switch (R) {
                    case "type":
                        r = O;
                        break;
                    case "name":
                        s = O;
                        break;
                    case "checked":
                        D = O;
                        break;
                    case "defaultChecked":
                        C = O;
                        break;
                    case "value":
                        f = O;
                        break;
                    case "defaultValue":
                        y = O;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (O != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        O !== _ && bt(t, e, R, O, a, _)
                    }
            }
            hu(t, f, y, b, D, C, r, s);
            return;
        case "select":
            O = f = y = R = null;
            for (r in n)
                if (b = n[r],
                n.hasOwnProperty(r) && b != null)
                    switch (r) {
                    case "value":
                        break;
                    case "multiple":
                        O = b;
                    default:
                        a.hasOwnProperty(r) || bt(t, e, r, null, a, b)
                    }
            for (s in a)
                if (r = a[s],
                b = n[s],
                a.hasOwnProperty(s) && (r != null || b != null))
                    switch (s) {
                    case "value":
                        R = r;
                        break;
                    case "defaultValue":
                        y = r;
                        break;
                    case "multiple":
                        f = r;
                    default:
                        r !== b && bt(t, e, s, r, a, b)
                    }
            e = y,
            n = f,
            a = O,
            R != null ? va(t, !!n, R, !1) : !!a != !!n && (e != null ? va(t, !!n, e, !0) : va(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            O = R = null;
            for (y in n)
                if (s = n[y],
                n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
                    switch (y) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        bt(t, e, y, null, a, s)
                    }
            for (f in a)
                if (s = a[f],
                r = n[f],
                a.hasOwnProperty(f) && (s != null || r != null))
                    switch (f) {
                    case "value":
                        R = s;
                        break;
                    case "defaultValue":
                        O = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== r && bt(t, e, f, s, a, r)
                    }
            Wc(t, R, O);
            return;
        case "option":
            for (var I in n)
                if (R = n[I],
                n.hasOwnProperty(I) && R != null && !a.hasOwnProperty(I))
                    switch (I) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        bt(t, e, I, null, a, R)
                    }
            for (b in a)
                if (R = a[b],
                O = n[b],
                a.hasOwnProperty(b) && R !== O && (R != null || O != null))
                    switch (b) {
                    case "selected":
                        t.selected = R && typeof R != "function" && typeof R != "symbol";
                        break;
                    default:
                        bt(t, e, b, R, a, O)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var F in n)
                R = n[F],
                n.hasOwnProperty(F) && R != null && !a.hasOwnProperty(F) && bt(t, e, F, null, a, R);
            for (D in a)
                if (R = a[D],
                O = n[D],
                a.hasOwnProperty(D) && R !== O && (R != null || O != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        bt(t, e, D, R, a, O)
                    }
            return;
        default:
            if (mu(e)) {
                for (var St in n)
                    R = n[St],
                    n.hasOwnProperty(St) && R !== void 0 && !a.hasOwnProperty(St) && Io(t, e, St, void 0, a, R);
                for (C in a)
                    R = a[C],
                    O = n[C],
                    !a.hasOwnProperty(C) || R === O || R === void 0 && O === void 0 || Io(t, e, C, R, a, O);
                return
            }
        }
        for (var A in n)
            R = n[A],
            n.hasOwnProperty(A) && R != null && !a.hasOwnProperty(A) && bt(t, e, A, null, a, R);
        for (_ in a)
            R = a[_],
            O = n[_],
            !a.hasOwnProperty(_) || R === O || R == null && O == null || bt(t, e, _, R, a, O)
    }
    var tr = null
      , er = null;
    function Ds(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function tm(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function em(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function nr(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var ar = null;
    function xv() {
        var t = window.event;
        return t && t.type === "popstate" ? t === ar ? !1 : (ar = t,
        !0) : (ar = null,
        !1)
    }
    var nm = typeof setTimeout == "function" ? setTimeout : void 0
      , Av = typeof clearTimeout == "function" ? clearTimeout : void 0
      , am = typeof Promise == "function" ? Promise : void 0
      , Ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof am < "u" ? function(t) {
        return am.resolve(null).then(t).catch(Mv)
    }
    : nm;
    function Mv(t) {
        setTimeout(function() {
            throw t
        })
    }
    function zn(t) {
        return t === "head"
    }
    function im(t, e) {
        var n = e
          , a = 0
          , s = 0;
        do {
            var r = n.nextSibling;
            if (t.removeChild(n),
            r && r.nodeType === 8)
                if (n = r.data,
                n === "/$") {
                    if (0 < a && 8 > a) {
                        n = a;
                        var f = t.ownerDocument;
                        if (n & 1 && Pi(f.documentElement),
                        n & 2 && Pi(f.body),
                        n & 4)
                            for (n = f.head,
                            Pi(n),
                            f = n.firstChild; f; ) {
                                var y = f.nextSibling
                                  , b = f.nodeName;
                                f[ci] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f),
                                f = y
                            }
                    }
                    if (s === 0) {
                        t.removeChild(r),
                        al(e);
                        return
                    }
                    s--
                } else
                    n === "$" || n === "$?" || n === "$!" ? s++ : a = n.charCodeAt(0) - 48;
            else
                a = 0;
            n = r
        } while (n);
        al(e)
    }
    function ir(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                ir(n),
                ou(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function Dv(t, e, n, a) {
        for (; t.nodeType === 1; ) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[ci])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (r = t.getAttribute("rel"),
                        r === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (r !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (r = t.getAttribute("src"),
                        (r !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var r = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === r)
                    return t
            } else
                return t;
            if (t = je(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function Rv(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = je(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function lr(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function Ov(t, e) {
        var n = t.ownerDocument;
        if (t.data !== "$?" || n.readyState === "complete")
            e();
        else {
            var a = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", a)
            };
            n.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function je(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    var sr = null;
    function lm(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function sm(t, e, n) {
        switch (e = Ds(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function Pi(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        ou(t)
    }
    var Ve = new Map
      , um = new Set;
    function Rs(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var rn = B.d;
    B.d = {
        f: Vv,
        r: Cv,
        D: zv,
        C: Nv,
        L: _v,
        m: Uv,
        X: Bv,
        S: jv,
        M: wv
    };
    function Vv() {
        var t = rn.f()
          , e = vs();
        return t || e
    }
    function Cv(t) {
        var e = ma(t);
        e !== null && e.tag === 5 && e.type === "form" ? Rh(e) : rn.r(t)
    }
    var ka = typeof document > "u" ? null : document;
    function om(t, e, n) {
        var a = ka;
        if (a && typeof e == "string" && e) {
            var s = xe(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            um.has(s) || (um.add(s),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            a.querySelector(s) === null && (e = a.createElement("link"),
            kt(e, "link", t),
            Yt(e),
            a.head.appendChild(e)))
        }
    }
    function zv(t) {
        rn.D(t),
        om("dns-prefetch", t, null)
    }
    function Nv(t, e) {
        rn.C(t, e),
        om("preconnect", t, e)
    }
    function _v(t, e, n) {
        rn.L(t, e, n);
        var a = ka;
        if (a && t && e) {
            var s = 'link[rel="preload"][as="' + xe(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + xe(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + xe(n.imageSizes) + '"]')) : s += '[href="' + xe(t) + '"]';
            var r = s;
            switch (e) {
            case "style":
                r = Pa(t);
                break;
            case "script":
                r = Fa(t)
            }
            Ve.has(r) || (t = v({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Ve.set(r, t),
            a.querySelector(s) !== null || e === "style" && a.querySelector(Fi(r)) || e === "script" && a.querySelector(Wi(r)) || (e = a.createElement("link"),
            kt(e, "link", t),
            Yt(e),
            a.head.appendChild(e)))
        }
    }
    function Uv(t, e) {
        rn.m(t, e);
        var n = ka;
        if (n && t) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + xe(a) + '"][href="' + xe(t) + '"]'
              , r = s;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                r = Fa(t)
            }
            if (!Ve.has(r) && (t = v({
                rel: "modulepreload",
                href: t
            }, e),
            Ve.set(r, t),
            n.querySelector(s) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Wi(r)))
                        return
                }
                a = n.createElement("link"),
                kt(a, "link", t),
                Yt(a),
                n.head.appendChild(a)
            }
        }
    }
    function jv(t, e, n) {
        rn.S(t, e, n);
        var a = ka;
        if (a && t) {
            var s = pa(a).hoistableStyles
              , r = Pa(t);
            e = e || "default";
            var f = s.get(r);
            if (!f) {
                var y = {
                    loading: 0,
                    preload: null
                };
                if (f = a.querySelector(Fi(r)))
                    y.loading = 5;
                else {
                    t = v({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Ve.get(r)) && ur(t, n);
                    var b = f = a.createElement("link");
                    Yt(b),
                    kt(b, "link", t),
                    b._p = new Promise(function(D, C) {
                        b.onload = D,
                        b.onerror = C
                    }
                    ),
                    b.addEventListener("load", function() {
                        y.loading |= 1
                    }),
                    b.addEventListener("error", function() {
                        y.loading |= 2
                    }),
                    y.loading |= 4,
                    Os(f, e, a)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: y
                },
                s.set(r, f)
            }
        }
    }
    function Bv(t, e) {
        rn.X(t, e);
        var n = ka;
        if (n && t) {
            var a = pa(n).hoistableScripts
              , s = Fa(t)
              , r = a.get(s);
            r || (r = n.querySelector(Wi(s)),
            r || (t = v({
                src: t,
                async: !0
            }, e),
            (e = Ve.get(s)) && or(t, e),
            r = n.createElement("script"),
            Yt(r),
            kt(r, "link", t),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            a.set(s, r))
        }
    }
    function wv(t, e) {
        rn.M(t, e);
        var n = ka;
        if (n && t) {
            var a = pa(n).hoistableScripts
              , s = Fa(t)
              , r = a.get(s);
            r || (r = n.querySelector(Wi(s)),
            r || (t = v({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ve.get(s)) && or(t, e),
            r = n.createElement("script"),
            Yt(r),
            kt(r, "link", t),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            a.set(s, r))
        }
    }
    function rm(t, e, n, a) {
        var s = (s = nt.current) ? Rs(s) : null;
        if (!s)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Pa(n.href),
            n = pa(s).hoistableStyles,
            a = n.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = Pa(n.href);
                var r = pa(s).hoistableStyles
                  , f = r.get(t);
                if (f || (s = s.ownerDocument || s,
                f = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                r.set(t, f),
                (r = s.querySelector(Fi(t))) && !r._p && (f.instance = r,
                f.state.loading = 5),
                Ve.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Ve.set(t, n),
                r || Lv(s, t, n, f.state))),
                e && a === null)
                    throw Error(o(528, ""));
                return f
            }
            if (e && a !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Fa(n),
            n = pa(s).hoistableScripts,
            a = n.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function Pa(t) {
        return 'href="' + xe(t) + '"'
    }
    function Fi(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function cm(t) {
        return v({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Lv(t, e, n, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        kt(e, "link", n),
        Yt(e),
        t.head.appendChild(e))
    }
    function Fa(t) {
        return '[src="' + xe(t) + '"]'
    }
    function Wi(t) {
        return "script[async]" + t
    }
    function fm(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + xe(n.href) + '"]');
                if (a)
                    return e.instance = a,
                    Yt(a),
                    a;
                var s = v({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                Yt(a),
                kt(a, "style", s),
                Os(a, n.precedence, t),
                e.instance = a;
            case "stylesheet":
                s = Pa(n.href);
                var r = t.querySelector(Fi(s));
                if (r)
                    return e.state.loading |= 4,
                    e.instance = r,
                    Yt(r),
                    r;
                a = cm(n),
                (s = Ve.get(s)) && ur(a, s),
                r = (t.ownerDocument || t).createElement("link"),
                Yt(r);
                var f = r;
                return f._p = new Promise(function(y, b) {
                    f.onload = y,
                    f.onerror = b
                }
                ),
                kt(r, "link", a),
                e.state.loading |= 4,
                Os(r, n.precedence, t),
                e.instance = r;
            case "script":
                return r = Fa(n.src),
                (s = t.querySelector(Wi(r))) ? (e.instance = s,
                Yt(s),
                s) : (a = n,
                (s = Ve.get(r)) && (a = v({}, n),
                or(a, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                Yt(s),
                kt(s, "link", a),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Os(a, n.precedence, t));
        return e.instance
    }
    function Os(t, e, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = a.length ? a[a.length - 1] : null, r = s, f = 0; f < a.length; f++) {
            var y = a[f];
            if (y.dataset.precedence === e)
                r = y;
            else if (r !== s)
                break
        }
        r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function ur(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function or(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Vs = null;
    function hm(t, e, n) {
        if (Vs === null) {
            var a = new Map
              , s = Vs = new Map;
            s.set(n, a)
        } else
            s = Vs,
            a = s.get(n),
            a || (a = new Map,
            s.set(n, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        n = n.getElementsByTagName(t),
        s = 0; s < n.length; s++) {
            var r = n[s];
            if (!(r[ci] || r[Wt] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = r.getAttribute(e) || "";
                f = t + f;
                var y = a.get(f);
                y ? y.push(r) : a.set(f, [r])
            }
        }
        return a
    }
    function dm(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function Hv(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function mm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var $i = null;
    function qv() {}
    function Yv(t, e, n) {
        if ($i === null)
            throw Error(o(475));
        var a = $i;
        if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var s = Pa(n.href)
                  , r = t.querySelector(Fi(s));
                if (r) {
                    t = r._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++,
                    a = Cs.bind(a),
                    t.then(a, a)),
                    e.state.loading |= 4,
                    e.instance = r,
                    Yt(r);
                    return
                }
                r = t.ownerDocument || t,
                n = cm(n),
                (s = Ve.get(s)) && ur(n, s),
                r = r.createElement("link"),
                Yt(r);
                var f = r;
                f._p = new Promise(function(y, b) {
                    f.onload = y,
                    f.onerror = b
                }
                ),
                kt(r, "link", n),
                e.instance = r
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++,
            e = Cs.bind(a),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function Gv() {
        if ($i === null)
            throw Error(o(475));
        var t = $i;
        return t.stylesheets && t.count === 0 && rr(t, t.stylesheets),
        0 < t.count ? function(e) {
            var n = setTimeout(function() {
                if (t.stylesheets && rr(t, t.stylesheets),
                t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null,
                    a()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(n)
            }
        }
        : null
    }
    function Cs() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                rr(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var zs = null;
    function rr(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        zs = new Map,
        e.forEach(Xv, t),
        zs = null,
        Cs.call(t))
    }
    function Xv(t, e) {
        if (!(e.state.loading & 4)) {
            var n = zs.get(t);
            if (n)
                var a = n.get(null);
            else {
                n = new Map,
                zs.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < s.length; r++) {
                    var f = s[r];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f),
                    a = f)
                }
                a && n.set(null, a)
            }
            s = e.instance,
            f = s.getAttribute("data-precedence"),
            r = n.get(f) || a,
            r === a && n.set(null, s),
            n.set(f, s),
            this.count++,
            a = Cs.bind(this),
            s.addEventListener("load", a),
            s.addEventListener("error", a),
            r ? r.parentNode.insertBefore(s, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Ii = {
        $$typeof: H,
        Provider: null,
        Consumer: null,
        _currentValue: K,
        _currentValue2: K,
        _threadCount: 0
    };
    function Zv(t, e, n, a, s, r, f, y) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = iu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = iu(0),
        this.hiddenUpdates = iu(null),
        this.identifierPrefix = a,
        this.onUncaughtError = s,
        this.onCaughtError = r,
        this.onRecoverableError = f,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = y,
        this.incompleteTransitions = new Map
    }
    function pm(t, e, n, a, s, r, f, y, b, D, C, _) {
        return t = new Zv(t,e,n,f,y,b,D,_),
        e = 1,
        r === !0 && (e |= 24),
        r = pe(3, null, null, e),
        t.current = r,
        r.stateNode = t,
        e = Xu(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        r.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: e
        },
        Ju(r),
        t
    }
    function ym(t) {
        return t ? (t = Ra,
        t) : Ra
    }
    function gm(t, e, n, a, s, r) {
        s = ym(s),
        a.context === null ? a.context = s : a.pendingContext = s,
        a = vn(e),
        a.payload = {
            element: n
        },
        r = r === void 0 ? null : r,
        r !== null && (a.callback = r),
        n = bn(t, a, e),
        n !== null && (Se(n, t, e),
        Vi(n, t, e))
    }
    function vm(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function cr(t, e) {
        vm(t, e),
        (t = t.alternate) && vm(t, e)
    }
    function bm(t) {
        if (t.tag === 13) {
            var e = Da(t, 67108864);
            e !== null && Se(e, t, 67108864),
            cr(t, 67108864)
        }
    }
    var Ns = !0;
    function Qv(t, e, n, a) {
        var s = z.T;
        z.T = null;
        var r = B.p;
        try {
            B.p = 2,
            fr(t, e, n, a)
        } finally {
            B.p = r,
            z.T = s
        }
    }
    function Kv(t, e, n, a) {
        var s = z.T;
        z.T = null;
        var r = B.p;
        try {
            B.p = 8,
            fr(t, e, n, a)
        } finally {
            B.p = r,
            z.T = s
        }
    }
    function fr(t, e, n, a) {
        if (Ns) {
            var s = hr(a);
            if (s === null)
                $o(t, e, a, _s, n),
                Tm(t, a);
            else if (kv(s, t, e, n, a))
                a.stopPropagation();
            else if (Tm(t, a),
            e & 4 && -1 < Jv.indexOf(t)) {
                for (; s !== null; ) {
                    var r = ma(s);
                    if (r !== null)
                        switch (r.tag) {
                        case 3:
                            if (r = r.stateNode,
                            r.current.memoizedState.isDehydrated) {
                                var f = Yn(r.pendingLanes);
                                if (f !== 0) {
                                    var y = r;
                                    for (y.pendingLanes |= 2,
                                    y.entangledLanes |= 2; f; ) {
                                        var b = 1 << 31 - de(f);
                                        y.entanglements[1] |= b,
                                        f &= ~b
                                    }
                                    Xe(r),
                                    (yt & 6) === 0 && (ys = Le() + 500,
                                    Ki(0))
                                }
                            }
                            break;
                        case 13:
                            y = Da(r, 2),
                            y !== null && Se(y, r, 2),
                            vs(),
                            cr(r, 2)
                        }
                    if (r = hr(a),
                    r === null && $o(t, e, a, _s, n),
                    r === s)
                        break;
                    s = r
                }
                s !== null && a.stopPropagation()
            } else
                $o(t, e, a, null, n)
        }
    }
    function hr(t) {
        return t = yu(t),
        dr(t)
    }
    var _s = null;
    function dr(t) {
        if (_s = null,
        t = da(t),
        t !== null) {
            var e = d(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return _s = t,
        null
    }
    function Sm(t) {
        switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ng()) {
            case _c:
                return 2;
            case Uc:
                return 8;
            case Ml:
            case _g:
                return 32;
            case jc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var mr = !1
      , Nn = null
      , _n = null
      , Un = null
      , tl = new Map
      , el = new Map
      , jn = []
      , Jv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Tm(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Nn = null;
            break;
        case "dragenter":
        case "dragleave":
            _n = null;
            break;
        case "mouseover":
        case "mouseout":
            Un = null;
            break;
        case "pointerover":
        case "pointerout":
            tl.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            el.delete(e.pointerId)
        }
    }
    function nl(t, e, n, a, s, r) {
        return t === null || t.nativeEvent !== r ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: r,
            targetContainers: [s]
        },
        e !== null && (e = ma(e),
        e !== null && bm(e)),
        t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function kv(t, e, n, a, s) {
        switch (e) {
        case "focusin":
            return Nn = nl(Nn, t, e, n, a, s),
            !0;
        case "dragenter":
            return _n = nl(_n, t, e, n, a, s),
            !0;
        case "mouseover":
            return Un = nl(Un, t, e, n, a, s),
            !0;
        case "pointerover":
            var r = s.pointerId;
            return tl.set(r, nl(tl.get(r) || null, t, e, n, a, s)),
            !0;
        case "gotpointercapture":
            return r = s.pointerId,
            el.set(r, nl(el.get(r) || null, t, e, n, a, s)),
            !0
        }
        return !1
    }
    function xm(t) {
        var e = da(t.target);
        if (e !== null) {
            var n = d(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = h(n),
                    e !== null) {
                        t.blockedOn = e,
                        Yg(t.priority, function() {
                            if (n.tag === 13) {
                                var a = be();
                                a = lu(a);
                                var s = Da(n, a);
                                s !== null && Se(s, n, a),
                                cr(n, a)
                            }
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Us(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = hr(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var a = new n.constructor(n.type,n);
                pu = a,
                n.target.dispatchEvent(a),
                pu = null
            } else
                return e = ma(n),
                e !== null && bm(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Am(t, e, n) {
        Us(t) && n.delete(e)
    }
    function Pv() {
        mr = !1,
        Nn !== null && Us(Nn) && (Nn = null),
        _n !== null && Us(_n) && (_n = null),
        Un !== null && Us(Un) && (Un = null),
        tl.forEach(Am),
        el.forEach(Am)
    }
    function js(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        mr || (mr = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Pv)))
    }
    var Bs = null;
    function Em(t) {
        Bs !== t && (Bs = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Bs === t && (Bs = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , a = t[e + 1]
                  , s = t[e + 2];
                if (typeof a != "function") {
                    if (dr(a || n) === null)
                        continue;
                    break
                }
                var r = ma(n);
                r !== null && (t.splice(e, 3),
                e -= 3,
                ho(r, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: a
                }, a, s))
            }
        }))
    }
    function al(t) {
        function e(b) {
            return js(b, t)
        }
        Nn !== null && js(Nn, t),
        _n !== null && js(_n, t),
        Un !== null && js(Un, t),
        tl.forEach(e),
        el.forEach(e);
        for (var n = 0; n < jn.length; n++) {
            var a = jn[n];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < jn.length && (n = jn[0],
        n.blockedOn === null); )
            xm(n),
            n.blockedOn === null && jn.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (a = 0; a < n.length; a += 3) {
                var s = n[a]
                  , r = n[a + 1]
                  , f = s[le] || null;
                if (typeof r == "function")
                    f || Em(n);
                else if (f) {
                    var y = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (s = r,
                        f = r[le] || null)
                            y = f.formAction;
                        else if (dr(s) !== null)
                            continue
                    } else
                        y = f.action;
                    typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3),
                    a -= 3),
                    Em(n)
                }
            }
    }
    function pr(t) {
        this._internalRoot = t
    }
    ws.prototype.render = pr.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var n = e.current
          , a = be();
        gm(n, a, t, e, null, null)
    }
    ,
    ws.prototype.unmount = pr.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            gm(t.current, 2, null, t, null, null),
            vs(),
            e[ha] = null
        }
    }
    ;
    function ws(t) {
        this._internalRoot = t
    }
    ws.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = qc();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++)
                ;
            jn.splice(n, 0, t),
            n === 0 && xm(t)
        }
    }
    ;
    var Mm = l.version;
    if (Mm !== "19.1.0")
        throw Error(o(527, Mm, "19.1.0"));
    B.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = g(e),
        t = t !== null ? p(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var Fv = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ls.isDisabled && Ls.supportsFiber)
            try {
                ui = Ls.inject(Fv),
                he = Ls
            } catch {}
    }
    return ll.createRoot = function(t, e) {
        if (!c(t))
            throw Error(o(299));
        var n = !1
          , a = ""
          , s = Yh
          , r = Gh
          , f = Xh
          , y = null;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (r = e.onCaughtError),
        e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (y = e.unstable_transitionCallbacks)),
        e = pm(t, 1, !1, null, null, n, a, s, r, f, y, null),
        t[ha] = e.current,
        Wo(t),
        new pr(e)
    }
    ,
    ll.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(o(299));
        var a = !1
          , s = ""
          , r = Yh
          , f = Gh
          , y = Xh
          , b = null
          , D = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
        n.onCaughtError !== void 0 && (f = n.onCaughtError),
        n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (b = n.unstable_transitionCallbacks),
        n.formState !== void 0 && (D = n.formState)),
        e = pm(t, 1, !0, e, n ?? null, a, s, r, f, y, b, D),
        e.context = ym(null),
        n = e.current,
        a = be(),
        a = lu(a),
        s = vn(a),
        s.callback = null,
        bn(n, s, a),
        n = a,
        e.current.lanes = n,
        ri(e, n),
        Xe(e),
        t[ha] = e.current,
        Wo(t),
        new ws(e)
    }
    ,
    ll.version = "19.1.0",
    ll
}
var jm;
function s1() {
    if (jm)
        return vr.exports;
    jm = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (l) {
                console.error(l)
            }
    }
    return i(),
    vr.exports = l1(),
    vr.exports
}
var u1 = s1();
const $p = et.createContext({});
function o1(i) {
    const l = et.useRef(null);
    return l.current === null && (l.current = i()),
    l.current
}
const ec = typeof window < "u"
  , r1 = ec ? et.useLayoutEffect : et.useEffect
  , nc = et.createContext(null);
function ac(i, l) {
    i.indexOf(l) === -1 && i.push(l)
}
function ic(i, l) {
    const u = i.indexOf(l);
    u > -1 && i.splice(u, 1)
}
const cn = (i, l, u) => u > l ? l : u < i ? i : u;
let lc = () => {}
;
const fn = {}
  , Ip = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function ty(i) {
    return typeof i == "object" && i !== null
}
const ey = i => /^0[^.\s]+$/u.test(i);
function sc(i) {
    let l;
    return () => (l === void 0 && (l = i()),
    l)
}
const Ne = i => i
  , c1 = (i, l) => u => l(i(u))
  , Sl = (...i) => i.reduce(c1)
  , dl = (i, l, u) => {
    const o = l - i;
    return o === 0 ? 1 : (u - i) / o
}
;
class uc {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return ac(this.subscriptions, l),
        () => ic(this.subscriptions, l)
    }
    notify(l, u, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](l, u, o);
            else
                for (let d = 0; d < c; d++) {
                    const h = this.subscriptions[d];
                    h && h(l, u, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ze = i => i * 1e3
  , Qe = i => i / 1e3;
function ny(i, l) {
    return l ? i * (1e3 / l) : 0
}
const ay = (i, l, u) => (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i
  , f1 = 1e-7
  , h1 = 12;
function d1(i, l, u, o, c) {
    let d, h, m = 0;
    do
        h = l + (u - l) / 2,
        d = ay(h, o, c) - i,
        d > 0 ? u = h : l = h;
    while (Math.abs(d) > f1 && ++m < h1);
    return h
}
function Tl(i, l, u, o) {
    if (i === l && u === o)
        return Ne;
    const c = d => d1(d, 0, 1, i, u);
    return d => d === 0 || d === 1 ? d : ay(c(d), l, o)
}
const iy = i => l => l <= .5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2
  , ly = i => l => 1 - i(1 - l)
  , sy = Tl(.33, 1.53, .69, .99)
  , oc = ly(sy)
  , uy = iy(oc)
  , oy = i => (i *= 2) < 1 ? .5 * oc(i) : .5 * (2 - Math.pow(2, -10 * (i - 1)))
  , rc = i => 1 - Math.sin(Math.acos(i))
  , ry = ly(rc)
  , cy = iy(rc)
  , m1 = Tl(.42, 0, 1, 1)
  , p1 = Tl(0, 0, .58, 1)
  , fy = Tl(.42, 0, .58, 1)
  , y1 = i => Array.isArray(i) && typeof i[0] != "number"
  , hy = i => Array.isArray(i) && typeof i[0] == "number"
  , g1 = {
    linear: Ne,
    easeIn: m1,
    easeInOut: fy,
    easeOut: p1,
    circIn: rc,
    circInOut: cy,
    circOut: ry,
    backIn: oc,
    backInOut: uy,
    backOut: sy,
    anticipate: oy
}
  , v1 = i => typeof i == "string"
  , Bm = i => {
    if (hy(i)) {
        lc(i.length === 4);
        const [l,u,o,c] = i;
        return Tl(l, u, o, c)
    } else if (v1(i))
        return g1[i];
    return i
}
  , Hs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , wm = {
    value: null
};
function b1(i, l) {
    let u = new Set
      , o = new Set
      , c = !1
      , d = !1;
    const h = new WeakSet;
    let m = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , g = 0;
    function p(S) {
        h.has(S) && (v.schedule(S),
        i()),
        g++,
        S(m)
    }
    const v = {
        schedule: (S, E=!1, V=!1) => {
            const L = V && c ? u : o;
            return E && h.add(S),
            L.has(S) || L.add(S),
            S
        }
        ,
        cancel: S => {
            o.delete(S),
            h.delete(S)
        }
        ,
        process: S => {
            if (m = S,
            c) {
                d = !0;
                return
            }
            c = !0,
            [u,o] = [o, u],
            u.forEach(p),
            l && wm.value && wm.value.frameloop[l].push(g),
            g = 0,
            u.clear(),
            c = !1,
            d && (d = !1,
            v.process(S))
        }
    };
    return v
}
const S1 = 40;
function dy(i, l) {
    let u = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , d = () => u = !0
      , h = Hs.reduce( (H, it) => (H[it] = b1(d, l ? it : void 0),
    H), {})
      , {setup: m, read: g, resolveKeyframes: p, preUpdate: v, update: S, preRender: E, render: V, postRender: w} = h
      , L = () => {
        const H = fn.useManualTiming ? c.timestamp : performance.now();
        u = !1,
        fn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(H - c.timestamp, S1), 1)),
        c.timestamp = H,
        c.isProcessing = !0,
        m.process(c),
        g.process(c),
        p.process(c),
        v.process(c),
        S.process(c),
        E.process(c),
        V.process(c),
        w.process(c),
        c.isProcessing = !1,
        u && l && (o = !1,
        i(L))
    }
      , Y = () => {
        u = !0,
        o = !0,
        c.isProcessing || i(L)
    }
    ;
    return {
        schedule: Hs.reduce( (H, it) => {
            const q = h[it];
            return H[it] = (lt, ft=!1, W=!1) => (u || Y(),
            q.schedule(lt, ft, W)),
            H
        }
        , {}),
        cancel: H => {
            for (let it = 0; it < Hs.length; it++)
                h[Hs[it]].cancel(H)
        }
        ,
        state: c,
        steps: h
    }
}
const {schedule: Ot, cancel: Ln, state: Pt, steps: xr} = dy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0);
let Gs;
function T1() {
    Gs = void 0
}
const ce = {
    now: () => (Gs === void 0 && ce.set(Pt.isProcessing || fn.useManualTiming ? Pt.timestamp : performance.now()),
    Gs),
    set: i => {
        Gs = i,
        queueMicrotask(T1)
    }
}
  , my = i => l => typeof l == "string" && l.startsWith(i)
  , cc = my("--")
  , x1 = my("var(--")
  , fc = i => x1(i) ? A1.test(i.split("/*")[0].trim()) : !1
  , A1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , ii = {
    test: i => typeof i == "number",
    parse: parseFloat,
    transform: i => i
}
  , ml = {
    ...ii,
    transform: i => cn(0, 1, i)
}
  , qs = {
    ...ii,
    default: 1
}
  , ol = i => Math.round(i * 1e5) / 1e5
  , hc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function E1(i) {
    return i == null
}
const M1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , dc = (i, l) => u => !!(typeof u == "string" && M1.test(u) && u.startsWith(i) || l && !E1(u) && Object.prototype.hasOwnProperty.call(u, l))
  , py = (i, l, u) => o => {
    if (typeof o != "string")
        return o;
    const [c,d,h,m] = o.match(hc);
    return {
        [i]: parseFloat(c),
        [l]: parseFloat(d),
        [u]: parseFloat(h),
        alpha: m !== void 0 ? parseFloat(m) : 1
    }
}
  , D1 = i => cn(0, 255, i)
  , Ar = {
    ...ii,
    transform: i => Math.round(D1(i))
}
  , ua = {
    test: dc("rgb", "red"),
    parse: py("red", "green", "blue"),
    transform: ({red: i, green: l, blue: u, alpha: o=1}) => "rgba(" + Ar.transform(i) + ", " + Ar.transform(l) + ", " + Ar.transform(u) + ", " + ol(ml.transform(o)) + ")"
};
function R1(i) {
    let l = ""
      , u = ""
      , o = ""
      , c = "";
    return i.length > 5 ? (l = i.substring(1, 3),
    u = i.substring(3, 5),
    o = i.substring(5, 7),
    c = i.substring(7, 9)) : (l = i.substring(1, 2),
    u = i.substring(2, 3),
    o = i.substring(3, 4),
    c = i.substring(4, 5),
    l += l,
    u += u,
    o += o,
    c += c),
    {
        red: parseInt(l, 16),
        green: parseInt(u, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Ur = {
    test: dc("#"),
    parse: R1,
    transform: ua.transform
}
  , xl = i => ({
    test: l => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${i}`
})
  , wn = xl("deg")
  , Ke = xl("%")
  , tt = xl("px")
  , O1 = xl("vh")
  , V1 = xl("vw")
  , Lm = {
    ...Ke,
    parse: i => Ke.parse(i) / 100,
    transform: i => Ke.transform(i * 100)
}
  , Wa = {
    test: dc("hsl", "hue"),
    parse: py("hue", "saturation", "lightness"),
    transform: ({hue: i, saturation: l, lightness: u, alpha: o=1}) => "hsla(" + Math.round(i) + ", " + Ke.transform(ol(l)) + ", " + Ke.transform(ol(u)) + ", " + ol(ml.transform(o)) + ")"
}
  , te = {
    test: i => ua.test(i) || Ur.test(i) || Wa.test(i),
    parse: i => ua.test(i) ? ua.parse(i) : Wa.test(i) ? Wa.parse(i) : Ur.parse(i),
    transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? ua.transform(i) : Wa.transform(i)
}
  , C1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function z1(i) {
    var l, u;
    return isNaN(i) && typeof i == "string" && (((l = i.match(hc)) == null ? void 0 : l.length) || 0) + (((u = i.match(C1)) == null ? void 0 : u.length) || 0) > 0
}
const yy = "number"
  , gy = "color"
  , N1 = "var"
  , _1 = "var("
  , Hm = "${}"
  , U1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pl(i) {
    const l = i.toString()
      , u = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let d = 0;
    const m = l.replace(U1, g => (te.test(g) ? (o.color.push(d),
    c.push(gy),
    u.push(te.parse(g))) : g.startsWith(_1) ? (o.var.push(d),
    c.push(N1),
    u.push(g)) : (o.number.push(d),
    c.push(yy),
    u.push(parseFloat(g))),
    ++d,
    Hm)).split(Hm);
    return {
        values: u,
        split: m,
        indexes: o,
        types: c
    }
}
function vy(i) {
    return pl(i).values
}
function by(i) {
    const {split: l, types: u} = pl(i)
      , o = l.length;
    return c => {
        let d = "";
        for (let h = 0; h < o; h++)
            if (d += l[h],
            c[h] !== void 0) {
                const m = u[h];
                m === yy ? d += ol(c[h]) : m === gy ? d += te.transform(c[h]) : d += c[h]
            }
        return d
    }
}
const j1 = i => typeof i == "number" ? 0 : i;
function B1(i) {
    const l = vy(i);
    return by(i)(l.map(j1))
}
const Hn = {
    test: z1,
    parse: vy,
    createTransformer: by,
    getAnimatableNone: B1
};
function Er(i, l, u) {
    return u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6 ? i + (l - i) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i
}
function w1({hue: i, saturation: l, lightness: u, alpha: o}) {
    i /= 360,
    l /= 100,
    u /= 100;
    let c = 0
      , d = 0
      , h = 0;
    if (!l)
        c = d = h = u;
    else {
        const m = u < .5 ? u * (1 + l) : u + l - u * l
          , g = 2 * u - m;
        c = Er(g, m, i + 1 / 3),
        d = Er(g, m, i),
        h = Er(g, m, i - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(h * 255),
        alpha: o
    }
}
function Ks(i, l) {
    return u => u > 0 ? l : i
}
const Rt = (i, l, u) => i + (l - i) * u
  , Mr = (i, l, u) => {
    const o = i * i
      , c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , L1 = [Ur, ua, Wa]
  , H1 = i => L1.find(l => l.test(i));
function qm(i) {
    const l = H1(i);
    if (!l)
        return !1;
    let u = l.parse(i);
    return l === Wa && (u = w1(u)),
    u
}
const Ym = (i, l) => {
    const u = qm(i)
      , o = qm(l);
    if (!u || !o)
        return Ks(i, l);
    const c = {
        ...u
    };
    return d => (c.red = Mr(u.red, o.red, d),
    c.green = Mr(u.green, o.green, d),
    c.blue = Mr(u.blue, o.blue, d),
    c.alpha = Rt(u.alpha, o.alpha, d),
    ua.transform(c))
}
  , jr = new Set(["none", "hidden"]);
function q1(i, l) {
    return jr.has(i) ? u => u <= 0 ? i : l : u => u >= 1 ? l : i
}
function Y1(i, l) {
    return u => Rt(i, l, u)
}
function mc(i) {
    return typeof i == "number" ? Y1 : typeof i == "string" ? fc(i) ? Ks : te.test(i) ? Ym : Z1 : Array.isArray(i) ? Sy : typeof i == "object" ? te.test(i) ? Ym : G1 : Ks
}
function Sy(i, l) {
    const u = [...i]
      , o = u.length
      , c = i.map( (d, h) => mc(d)(d, l[h]));
    return d => {
        for (let h = 0; h < o; h++)
            u[h] = c[h](d);
        return u
    }
}
function G1(i, l) {
    const u = {
        ...i,
        ...l
    }
      , o = {};
    for (const c in u)
        i[c] !== void 0 && l[c] !== void 0 && (o[c] = mc(i[c])(i[c], l[c]));
    return c => {
        for (const d in o)
            u[d] = o[d](c);
        return u
    }
}
function X1(i, l) {
    const u = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < l.values.length; c++) {
        const d = l.types[c]
          , h = i.indexes[d][o[d]]
          , m = i.values[h] ?? 0;
        u[c] = m,
        o[d]++
    }
    return u
}
const Z1 = (i, l) => {
    const u = Hn.createTransformer(l)
      , o = pl(i)
      , c = pl(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? jr.has(i) && !c.values.length || jr.has(l) && !o.values.length ? q1(i, l) : Sl(Sy(X1(o, c), c.values), u) : Ks(i, l)
}
;
function Ty(i, l, u) {
    return typeof i == "number" && typeof l == "number" && typeof u == "number" ? Rt(i, l, u) : mc(i)(i, l)
}
const Q1 = i => {
    const l = ({timestamp: u}) => i(u);
    return {
        start: (u=!0) => Ot.update(l, u),
        stop: () => Ln(l),
        now: () => Pt.isProcessing ? Pt.timestamp : ce.now()
    }
}
  , xy = (i, l, u=10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++)
        o += i(d / (c - 1)) + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Js = 2e4;
function pc(i) {
    let l = 0;
    const u = 50;
    let o = i.next(l);
    for (; !o.done && l < Js; )
        l += u,
        o = i.next(l);
    return l >= Js ? 1 / 0 : l
}
function K1(i, l=100, u) {
    const o = u({
        ...i,
        keyframes: [0, l]
    })
      , c = Math.min(pc(o), Js);
    return {
        type: "keyframes",
        ease: d => o.next(c * d).value / l,
        duration: Qe(c)
    }
}
const J1 = 5;
function Ay(i, l, u) {
    const o = Math.max(l - J1, 0);
    return ny(u - i(o), l - o)
}
const zt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Gm = .001;
function k1({duration: i=zt.duration, bounce: l=zt.bounce, velocity: u=zt.velocity, mass: o=zt.mass}) {
    let c, d, h = 1 - l;
    h = cn(zt.minDamping, zt.maxDamping, h),
    i = cn(zt.minDuration, zt.maxDuration, Qe(i)),
    h < 1 ? (c = p => {
        const v = p * h
          , S = v * i
          , E = v - u
          , V = Br(p, h)
          , w = Math.exp(-S);
        return Gm - E / V * w
    }
    ,
    d = p => {
        const S = p * h * i
          , E = S * u + u
          , V = Math.pow(h, 2) * Math.pow(p, 2) * i
          , w = Math.exp(-S)
          , L = Br(Math.pow(p, 2), h);
        return (-c(p) + Gm > 0 ? -1 : 1) * ((E - V) * w) / L
    }
    ) : (c = p => {
        const v = Math.exp(-p * i)
          , S = (p - u) * i + 1;
        return -.001 + v * S
    }
    ,
    d = p => {
        const v = Math.exp(-p * i)
          , S = (u - p) * (i * i);
        return v * S
    }
    );
    const m = 5 / i
      , g = F1(c, d, m);
    if (i = Ze(i),
    isNaN(g))
        return {
            stiffness: zt.stiffness,
            damping: zt.damping,
            duration: i
        };
    {
        const p = Math.pow(g, 2) * o;
        return {
            stiffness: p,
            damping: h * 2 * Math.sqrt(o * p),
            duration: i
        }
    }
}
const P1 = 12;
function F1(i, l, u) {
    let o = u;
    for (let c = 1; c < P1; c++)
        o = o - i(o) / l(o);
    return o
}
function Br(i, l) {
    return i * Math.sqrt(1 - l * l)
}
const W1 = ["duration", "bounce"]
  , $1 = ["stiffness", "damping", "mass"];
function Xm(i, l) {
    return l.some(u => i[u] !== void 0)
}
function I1(i) {
    let l = {
        velocity: zt.velocity,
        stiffness: zt.stiffness,
        damping: zt.damping,
        mass: zt.mass,
        isResolvedFromDuration: !1,
        ...i
    };
    if (!Xm(i, $1) && Xm(i, W1))
        if (i.visualDuration) {
            const u = i.visualDuration
              , o = 2 * Math.PI / (u * 1.2)
              , c = o * o
              , d = 2 * cn(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: zt.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const u = k1(i);
            l = {
                ...l,
                ...u,
                mass: zt.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function ks(i=zt.visualDuration, l=zt.bounce) {
    const u = typeof i != "object" ? {
        visualDuration: i,
        keyframes: [0, 1],
        bounce: l
    } : i;
    let {restSpeed: o, restDelta: c} = u;
    const d = u.keyframes[0]
      , h = u.keyframes[u.keyframes.length - 1]
      , m = {
        done: !1,
        value: d
    }
      , {stiffness: g, damping: p, mass: v, duration: S, velocity: E, isResolvedFromDuration: V} = I1({
        ...u,
        velocity: -Qe(u.velocity || 0)
    })
      , w = E || 0
      , L = p / (2 * Math.sqrt(g * v))
      , Y = h - d
      , G = Qe(Math.sqrt(g / v))
      , k = Math.abs(Y) < 5;
    o || (o = k ? zt.restSpeed.granular : zt.restSpeed.default),
    c || (c = k ? zt.restDelta.granular : zt.restDelta.default);
    let H;
    if (L < 1) {
        const q = Br(G, L);
        H = lt => {
            const ft = Math.exp(-L * G * lt);
            return h - ft * ((w + L * G * Y) / q * Math.sin(q * lt) + Y * Math.cos(q * lt))
        }
    } else if (L === 1)
        H = q => h - Math.exp(-G * q) * (Y + (w + G * Y) * q);
    else {
        const q = G * Math.sqrt(L * L - 1);
        H = lt => {
            const ft = Math.exp(-L * G * lt)
              , W = Math.min(q * lt, 300);
            return h - ft * ((w + L * G * Y) * Math.sinh(W) + q * Y * Math.cosh(W)) / q
        }
    }
    const it = {
        calculatedDuration: V && S || null,
        next: q => {
            const lt = H(q);
            if (V)
                m.done = q >= S;
            else {
                let ft = q === 0 ? w : 0;
                L < 1 && (ft = q === 0 ? Ze(w) : Ay(H, q, lt));
                const W = Math.abs(ft) <= o
                  , At = Math.abs(h - lt) <= c;
                m.done = W && At
            }
            return m.value = m.done ? h : lt,
            m
        }
        ,
        toString: () => {
            const q = Math.min(pc(it), Js)
              , lt = xy(ft => it.next(q * ft).value, q, 30);
            return q + "ms " + lt
        }
        ,
        toTransition: () => {}
    };
    return it
}
ks.applyToOptions = i => {
    const l = K1(i, 100, ks);
    return i.ease = l.ease,
    i.duration = Ze(l.duration),
    i.type = "keyframes",
    i
}
;
function wr({keyframes: i, velocity: l=0, power: u=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: d=500, modifyTarget: h, min: m, max: g, restDelta: p=.5, restSpeed: v}) {
    const S = i[0]
      , E = {
        done: !1,
        value: S
    }
      , V = W => m !== void 0 && W < m || g !== void 0 && W > g
      , w = W => m === void 0 ? g : g === void 0 || Math.abs(m - W) < Math.abs(g - W) ? m : g;
    let L = u * l;
    const Y = S + L
      , G = h === void 0 ? Y : h(Y);
    G !== Y && (L = G - S);
    const k = W => -L * Math.exp(-W / o)
      , H = W => G + k(W)
      , it = W => {
        const At = k(W)
          , wt = H(W);
        E.done = Math.abs(At) <= p,
        E.value = E.done ? G : wt
    }
    ;
    let q, lt;
    const ft = W => {
        V(E.value) && (q = W,
        lt = ks({
            keyframes: [E.value, w(E.value)],
            velocity: Ay(H, W, E.value),
            damping: c,
            stiffness: d,
            restDelta: p,
            restSpeed: v
        }))
    }
    ;
    return ft(0),
    {
        calculatedDuration: null,
        next: W => {
            let At = !1;
            return !lt && q === void 0 && (At = !0,
            it(W),
            ft(W)),
            q !== void 0 && W >= q ? lt.next(W - q) : (!At && it(W),
            E)
        }
    }
}
function tb(i, l, u) {
    const o = []
      , c = u || fn.mix || Ty
      , d = i.length - 1;
    for (let h = 0; h < d; h++) {
        let m = c(i[h], i[h + 1]);
        if (l) {
            const g = Array.isArray(l) ? l[h] || Ne : l;
            m = Sl(g, m)
        }
        o.push(m)
    }
    return o
}
function eb(i, l, {clamp: u=!0, ease: o, mixer: c}={}) {
    const d = i.length;
    if (lc(d === l.length),
    d === 1)
        return () => l[0];
    if (d === 2 && l[0] === l[1])
        return () => l[1];
    const h = i[0] === i[1];
    i[0] > i[d - 1] && (i = [...i].reverse(),
    l = [...l].reverse());
    const m = tb(l, o, c)
      , g = m.length
      , p = v => {
        if (h && v < i[0])
            return l[0];
        let S = 0;
        if (g > 1)
            for (; S < i.length - 2 && !(v < i[S + 1]); S++)
                ;
        const E = dl(i[S], i[S + 1], v);
        return m[S](E)
    }
    ;
    return u ? v => p(cn(i[0], i[d - 1], v)) : p
}
function nb(i, l) {
    const u = i[i.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = dl(0, l, o);
        i.push(Rt(u, 1, c))
    }
}
function ab(i) {
    const l = [0];
    return nb(l, i.length - 1),
    l
}
function ib(i, l) {
    return i.map(u => u * l)
}
function lb(i, l) {
    return i.map( () => l || fy).splice(0, i.length - 1)
}
function rl({duration: i=300, keyframes: l, times: u, ease: o="easeInOut"}) {
    const c = y1(o) ? o.map(Bm) : Bm(o)
      , d = {
        done: !1,
        value: l[0]
    }
      , h = ib(u && u.length === l.length ? u : ab(l), i)
      , m = eb(h, l, {
        ease: Array.isArray(c) ? c : lb(l, c)
    });
    return {
        calculatedDuration: i,
        next: g => (d.value = m(g),
        d.done = g >= i,
        d)
    }
}
const sb = i => i !== null;
function yc(i, {repeat: l, repeatType: u="loop"}, o, c=1) {
    const d = i.filter(sb)
      , m = c < 0 || l && u !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
    return !m || o === void 0 ? d[m] : o
}
const ub = {
    decay: wr,
    inertia: wr,
    tween: rl,
    keyframes: rl,
    spring: ks
};
function Ey(i) {
    typeof i.type == "string" && (i.type = ub[i.type])
}
class gc {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(l => {
            this.resolve = l
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(l, u) {
        return this.finished.then(l, u)
    }
}
const ob = i => i / 100;
class vc extends gc {
    constructor(l) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var o, c;
            const {motionValue: u} = this.options;
            u && u.updatedAt !== ce.now() && this.tick(ce.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o))
        }
        ,
        this.options = l,
        this.initAnimation(),
        this.play(),
        l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: l} = this;
        Ey(l);
        const {type: u=rl, repeat: o=0, repeatDelay: c=0, repeatType: d, velocity: h=0} = l;
        let {keyframes: m} = l;
        const g = u || rl;
        g !== rl && typeof m[0] != "number" && (this.mixKeyframes = Sl(ob, Ty(m[0], m[1])),
        m = [0, 100]);
        const p = g({
            ...l,
            keyframes: m
        });
        d === "mirror" && (this.mirroredGenerator = g({
            ...l,
            keyframes: [...m].reverse(),
            velocity: -h
        })),
        p.calculatedDuration === null && (p.calculatedDuration = pc(p));
        const {calculatedDuration: v} = p;
        this.calculatedDuration = v,
        this.resolvedDuration = v + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = p
    }
    updateTime(l) {
        const u = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = u
    }
    tick(l, u=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: m, calculatedDuration: g} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: p=0, keyframes: v, repeat: S, repeatType: E, repeatDelay: V, type: w, onUpdate: L, finalKeyframe: Y} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        u ? this.currentTime = l : this.updateTime(l);
        const G = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1)
          , k = this.playbackSpeed >= 0 ? G < 0 : G > c;
        this.currentTime = Math.max(G, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let H = this.currentTime
          , it = o;
        if (S) {
            const W = Math.min(this.currentTime, c) / m;
            let At = Math.floor(W)
              , wt = W % 1;
            !wt && W >= 1 && (wt = 1),
            wt === 1 && At--,
            At = Math.min(At, S + 1),
            !!(At % 2) && (E === "reverse" ? (wt = 1 - wt,
            V && (wt -= V / m)) : E === "mirror" && (it = h)),
            H = cn(0, 1, wt) * m
        }
        const q = k ? {
            done: !1,
            value: v[0]
        } : it.next(H);
        d && (q.value = d(q.value));
        let {done: lt} = q;
        !k && g !== null && (lt = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const ft = this.holdTime === null && (this.state === "finished" || this.state === "running" && lt);
        return ft && w !== wr && (q.value = yc(v, this.options, Y, this.speed)),
        L && L(q.value),
        ft && this.finish(),
        q
    }
    then(l, u) {
        return this.finished.then(l, u)
    }
    get duration() {
        return Qe(this.calculatedDuration)
    }
    get time() {
        return Qe(this.currentTime)
    }
    set time(l) {
        var u;
        l = Ze(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (u = this.driver) == null || u.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(ce.now());
        const u = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        u && (this.time = Qe(this.currentTime))
    }
    play() {
        var c, d;
        if (this.isStopped)
            return;
        const {driver: l=Q1, startTime: u} = this.options;
        this.driver || (this.driver = l(h => this.tick(h))),
        (d = (c = this.options).onPlay) == null || d.call(c);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = u ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(ce.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var l, u;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (u = (l = this.options).onComplete) == null || u.call(l)
    }
    cancel() {
        var l, u;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (u = (l = this.options).onCancel) == null || u.call(l)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(l) {
        return this.startTime = 0,
        this.tick(l, !0)
    }
    attachTimeline(l) {
        var u;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (u = this.driver) == null || u.stop(),
        l.observe(this)
    }
}
function rb(i) {
    for (let l = 1; l < i.length; l++)
        i[l] ?? (i[l] = i[l - 1])
}
const oa = i => i * 180 / Math.PI
  , Lr = i => {
    const l = oa(Math.atan2(i[1], i[0]));
    return Hr(l)
}
  , cb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Lr,
    rotateZ: Lr,
    skewX: i => oa(Math.atan(i[1])),
    skewY: i => oa(Math.atan(i[2])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}
  , Hr = i => (i = i % 360,
i < 0 && (i += 360),
i)
  , Zm = Lr
  , Qm = i => Math.sqrt(i[0] * i[0] + i[1] * i[1])
  , Km = i => Math.sqrt(i[4] * i[4] + i[5] * i[5])
  , fb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Qm,
    scaleY: Km,
    scale: i => (Qm(i) + Km(i)) / 2,
    rotateX: i => Hr(oa(Math.atan2(i[6], i[5]))),
    rotateY: i => Hr(oa(Math.atan2(-i[2], i[0]))),
    rotateZ: Zm,
    rotate: Zm,
    skewX: i => oa(Math.atan(i[4])),
    skewY: i => oa(Math.atan(i[1])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function qr(i) {
    return i.includes("scale") ? 1 : 0
}
function Yr(i, l) {
    if (!i || i === "none")
        return qr(l);
    const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (u)
        o = fb,
        c = u;
    else {
        const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = cb,
        c = m
    }
    if (!c)
        return qr(l);
    const d = o[l]
      , h = c[1].split(",").map(db);
    return typeof d == "function" ? d(h) : h[d]
}
const hb = (i, l) => {
    const {transform: u="none"} = getComputedStyle(i);
    return Yr(u, l)
}
;
function db(i) {
    return parseFloat(i.trim())
}
const li = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , si = new Set(li)
  , Jm = i => i === ii || i === tt
  , mb = new Set(["x", "y", "z"])
  , pb = li.filter(i => !mb.has(i));
function yb(i) {
    const l = [];
    return pb.forEach(u => {
        const o = i.getValue(u);
        o !== void 0 && (l.push([u, o.get()]),
        o.set(u.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const ra = {
    width: ({x: i}, {paddingLeft: l="0", paddingRight: u="0"}) => i.max - i.min - parseFloat(l) - parseFloat(u),
    height: ({y: i}, {paddingTop: l="0", paddingBottom: u="0"}) => i.max - i.min - parseFloat(l) - parseFloat(u),
    top: (i, {top: l}) => parseFloat(l),
    left: (i, {left: l}) => parseFloat(l),
    bottom: ({y: i}, {top: l}) => parseFloat(l) + (i.max - i.min),
    right: ({x: i}, {left: l}) => parseFloat(l) + (i.max - i.min),
    x: (i, {transform: l}) => Yr(l, "x"),
    y: (i, {transform: l}) => Yr(l, "y")
};
ra.translateX = ra.x;
ra.translateY = ra.y;
const ca = new Set;
let Gr = !1
  , Xr = !1
  , Zr = !1;
function My() {
    if (Xr) {
        const i = Array.from(ca).filter(o => o.needsMeasurement)
          , l = new Set(i.map(o => o.element))
          , u = new Map;
        l.forEach(o => {
            const c = yb(o);
            c.length && (u.set(o, c),
            o.render())
        }
        ),
        i.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const c = u.get(o);
            c && c.forEach( ([d,h]) => {
                var m;
                (m = o.getValue(d)) == null || m.set(h)
            }
            )
        }
        ),
        i.forEach(o => o.measureEndState()),
        i.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Xr = !1,
    Gr = !1,
    ca.forEach(i => i.complete(Zr)),
    ca.clear()
}
function Dy() {
    ca.forEach(i => {
        i.readKeyframes(),
        i.needsMeasurement && (Xr = !0)
    }
    )
}
function gb() {
    Zr = !0,
    Dy(),
    My(),
    Zr = !1
}
class bc {
    constructor(l, u, o, c, d, h=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = u,
        this.name = o,
        this.motionValue = c,
        this.element = d,
        this.isAsync = h
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (ca.add(this),
        Gr || (Gr = !0,
        Ot.read(Dy),
        Ot.resolveKeyframes(My))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: u, element: o, motionValue: c} = this;
        if (l[0] === null) {
            const d = c == null ? void 0 : c.get()
              , h = l[l.length - 1];
            if (d !== void 0)
                l[0] = d;
            else if (o && u) {
                const m = o.readValue(u, h);
                m != null && (l[0] = m)
            }
            l[0] === void 0 && (l[0] = h),
            c && d === void 0 && c.set(l[0])
        }
        rb(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        ca.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ca.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const vb = i => i.startsWith("--");
function bb(i, l, u) {
    vb(l) ? i.style.setProperty(l, u) : i.style[l] = u
}
const Sb = sc( () => window.ScrollTimeline !== void 0)
  , Tb = {};
function xb(i, l) {
    const u = sc(i);
    return () => Tb[l] ?? u()
}
const Ry = xb( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , ul = ([i,l,u,o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`
  , km = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ul([0, .65, .55, 1]),
    circOut: ul([.55, 0, 1, .45]),
    backIn: ul([.31, .01, .66, -.59]),
    backOut: ul([.33, 1.53, .69, .99])
};
function Oy(i, l) {
    if (i)
        return typeof i == "function" ? Ry() ? xy(i, l) : "ease-out" : hy(i) ? ul(i) : Array.isArray(i) ? i.map(u => Oy(u, l) || km.easeOut) : km[i]
}
function Ab(i, l, u, {delay: o=0, duration: c=300, repeat: d=0, repeatType: h="loop", ease: m="easeOut", times: g}={}, p=void 0) {
    const v = {
        [l]: u
    };
    g && (v.offset = g);
    const S = Oy(m, c);
    Array.isArray(S) && (v.easing = S);
    const E = {
        delay: o,
        duration: c,
        easing: Array.isArray(S) ? "linear" : S,
        fill: "both",
        iterations: d + 1,
        direction: h === "reverse" ? "alternate" : "normal"
    };
    return p && (E.pseudoElement = p),
    i.animate(v, E)
}
function Vy(i) {
    return typeof i == "function" && "applyToOptions"in i
}
function Eb({type: i, ...l}) {
    return Vy(i) && Ry() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class Mb extends gc {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: u, name: o, keyframes: c, pseudoElement: d, allowFlatten: h=!1, finalKeyframe: m, onComplete: g} = l;
        this.isPseudoElement = !!d,
        this.allowFlatten = h,
        this.options = l,
        lc(typeof l.type != "string");
        const p = Eb(l);
        this.animation = Ab(u, o, c, p, d),
        p.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !d) {
                const v = yc(c, this.options, m, this.speed);
                this.updateMotionValue ? this.updateMotionValue(v) : bb(u, o, v),
                this.animation.cancel()
            }
            g == null || g(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var l, u;
        (u = (l = this.animation).finish) == null || u.call(l)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: l} = this;
        l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var l, u;
        this.isPseudoElement || (u = (l = this.animation).commitStyles) == null || u.call(l)
    }
    get duration() {
        var u, o;
        const l = ((o = (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) == null ? void 0 : o.call(u).duration) || 0;
        return Qe(Number(l))
    }
    get time() {
        return Qe(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = Ze(l)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(l) {
        l < 0 && (this.finishedTime = null),
        this.animation.playbackRate = l
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(l) {
        this.animation.startTime = l
    }
    attachTimeline({timeline: l, observe: u}) {
        var o;
        return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        l && Sb() ? (this.animation.timeline = l,
        Ne) : u(this)
    }
}
const Cy = {
    anticipate: oy,
    backInOut: uy,
    circInOut: cy
};
function Db(i) {
    return i in Cy
}
function Rb(i) {
    typeof i.ease == "string" && Db(i.ease) && (i.ease = Cy[i.ease])
}
const Pm = 10;
class Ob extends Mb {
    constructor(l) {
        Rb(l),
        Ey(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: u, onUpdate: o, onComplete: c, element: d, ...h} = this.options;
        if (!u)
            return;
        if (l !== void 0) {
            u.set(l);
            return
        }
        const m = new vc({
            ...h,
            autoplay: !1
        })
          , g = Ze(this.finishedTime ?? this.time);
        u.setWithVelocity(m.sample(g - Pm).value, m.sample(g).value, Pm),
        m.stop()
    }
}
const Fm = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Hn.test(i) || i === "0") && !i.startsWith("url("));
function Vb(i) {
    const l = i[0];
    if (i.length === 1)
        return !0;
    for (let u = 0; u < i.length; u++)
        if (i[u] !== l)
            return !0
}
function Cb(i, l, u, o) {
    const c = i[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const d = i[i.length - 1]
      , h = Fm(c, l)
      , m = Fm(d, l);
    return !h || !m ? !1 : Vb(i) || (u === "spring" || Vy(u)) && o
}
function zy(i) {
    return ty(i) && "offsetHeight"in i
}
const zb = new Set(["opacity", "clipPath", "filter", "transform"])
  , Nb = sc( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _b(i) {
    var p;
    const {motionValue: l, name: u, repeatDelay: o, repeatType: c, damping: d, type: h} = i;
    if (!zy((p = l == null ? void 0 : l.owner) == null ? void 0 : p.current))
        return !1;
    const {onUpdate: m, transformTemplate: g} = l.owner.getProps();
    return Nb() && u && zb.has(u) && (u !== "transform" || !g) && !m && !o && c !== "mirror" && d !== 0 && h !== "inertia"
}
const Ub = 40;
class jb extends gc {
    constructor({autoplay: l=!0, delay: u=0, type: o="keyframes", repeat: c=0, repeatDelay: d=0, repeatType: h="loop", keyframes: m, name: g, motionValue: p, element: v, ...S}) {
        var w;
        super(),
        this.stop = () => {
            var L, Y;
            this._animation && (this._animation.stop(),
            (L = this.stopTimeline) == null || L.call(this)),
            (Y = this.keyframeResolver) == null || Y.cancel()
        }
        ,
        this.createdAt = ce.now();
        const E = {
            autoplay: l,
            delay: u,
            type: o,
            repeat: c,
            repeatDelay: d,
            repeatType: h,
            name: g,
            motionValue: p,
            element: v,
            ...S
        }
          , V = (v == null ? void 0 : v.KeyframeResolver) || bc;
        this.keyframeResolver = new V(m, (L, Y, G) => this.onKeyframesResolved(L, Y, E, !G),g,p,v),
        (w = this.keyframeResolver) == null || w.scheduleResolve()
    }
    onKeyframesResolved(l, u, o, c) {
        this.keyframeResolver = void 0;
        const {name: d, type: h, velocity: m, delay: g, isHandoff: p, onUpdate: v} = o;
        this.resolvedAt = ce.now(),
        Cb(l, d, h, m) || ((fn.instantAnimations || !g) && (v == null || v(yc(l, o, u))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const E = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > Ub ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: u,
            ...o,
            keyframes: l
        }
          , V = !p && _b(E) ? new Ob({
            ...E,
            element: E.motionValue.owner.current
        }) : new vc(E);
        V.finished.then( () => this.notifyFinished()).catch(Ne),
        this.pendingTimeline && (this.stopTimeline = V.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = V
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, u) {
        return this.finished.finally(l).then( () => {}
        )
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(),
        gb()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(l) {
        this.animation.time = l
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(l) {
        this.animation.speed = l
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(l) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var l;
        this._animation && this.animation.cancel(),
        (l = this.keyframeResolver) == null || l.cancel()
    }
}
const Bb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function wb(i) {
    const l = Bb.exec(i);
    if (!l)
        return [, ];
    const [,u,o,c] = l;
    return [`--${u ?? o}`, c]
}
function Ny(i, l, u=1) {
    const [o,c] = wb(i);
    if (!o)
        return;
    const d = window.getComputedStyle(l).getPropertyValue(o);
    if (d) {
        const h = d.trim();
        return Ip(h) ? parseFloat(h) : h
    }
    return fc(c) ? Ny(c, l, u + 1) : c
}
function Sc(i, l) {
    return (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i
}
const _y = new Set(["width", "height", "top", "left", "right", "bottom", ...li])
  , Lb = {
    test: i => i === "auto",
    parse: i => i
}
  , Uy = i => l => l.test(i)
  , jy = [ii, tt, Ke, wn, V1, O1, Lb]
  , Wm = i => jy.find(Uy(i));
function Hb(i) {
    return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || ey(i) : !0
}
const qb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yb(i) {
    const [l,u] = i.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return i;
    const [o] = u.match(hc) || [];
    if (!o)
        return i;
    const c = u.replace(o, "");
    let d = qb.has(l) ? 1 : 0;
    return o !== u && (d *= 100),
    l + "(" + d + c + ")"
}
const Gb = /\b([a-z-]*)\(.*?\)/gu
  , Qr = {
    ...Hn,
    getAnimatableNone: i => {
        const l = i.match(Gb);
        return l ? l.map(Yb).join(" ") : i
    }
}
  , $m = {
    ...ii,
    transform: Math.round
}
  , Xb = {
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: qs,
    scaleX: qs,
    scaleY: qs,
    scaleZ: qs,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: tt,
    translateX: tt,
    translateY: tt,
    translateZ: tt,
    x: tt,
    y: tt,
    z: tt,
    perspective: tt,
    transformPerspective: tt,
    opacity: ml,
    originX: Lm,
    originY: Lm,
    originZ: tt
}
  , Tc = {
    borderWidth: tt,
    borderTopWidth: tt,
    borderRightWidth: tt,
    borderBottomWidth: tt,
    borderLeftWidth: tt,
    borderRadius: tt,
    radius: tt,
    borderTopLeftRadius: tt,
    borderTopRightRadius: tt,
    borderBottomRightRadius: tt,
    borderBottomLeftRadius: tt,
    width: tt,
    maxWidth: tt,
    height: tt,
    maxHeight: tt,
    top: tt,
    right: tt,
    bottom: tt,
    left: tt,
    padding: tt,
    paddingTop: tt,
    paddingRight: tt,
    paddingBottom: tt,
    paddingLeft: tt,
    margin: tt,
    marginTop: tt,
    marginRight: tt,
    marginBottom: tt,
    marginLeft: tt,
    backgroundPositionX: tt,
    backgroundPositionY: tt,
    ...Xb,
    zIndex: $m,
    fillOpacity: ml,
    strokeOpacity: ml,
    numOctaves: $m
}
  , Zb = {
    ...Tc,
    color: te,
    backgroundColor: te,
    outlineColor: te,
    fill: te,
    stroke: te,
    borderColor: te,
    borderTopColor: te,
    borderRightColor: te,
    borderBottomColor: te,
    borderLeftColor: te,
    filter: Qr,
    WebkitFilter: Qr
}
  , By = i => Zb[i];
function wy(i, l) {
    let u = By(i);
    return u !== Qr && (u = Hn),
    u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
}
const Qb = new Set(["auto", "none", "0"]);
function Kb(i, l, u) {
    let o = 0, c;
    for (; o < i.length && !c; ) {
        const d = i[o];
        typeof d == "string" && !Qb.has(d) && pl(d).values.length && (c = i[o]),
        o++
    }
    if (c && u)
        for (const d of l)
            i[d] = wy(u, c)
}
class Jb extends bc {
    constructor(l, u, o, c, d) {
        super(l, u, o, c, d, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: u, name: o} = this;
        if (!u || !u.current)
            return;
        super.readKeyframes();
        for (let g = 0; g < l.length; g++) {
            let p = l[g];
            if (typeof p == "string" && (p = p.trim(),
            fc(p))) {
                const v = Ny(p, u.current);
                v !== void 0 && (l[g] = v),
                g === l.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !_y.has(o) || l.length !== 2)
            return;
        const [c,d] = l
          , h = Wm(c)
          , m = Wm(d);
        if (h !== m)
            if (Jm(h) && Jm(m))
                for (let g = 0; g < l.length; g++) {
                    const p = l[g];
                    typeof p == "string" && (l[g] = parseFloat(p))
                }
            else
                ra[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: u} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || Hb(l[c])) && o.push(c);
        o.length && Kb(l, o, u)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: u, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ra[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        u[0] = this.measuredOrigin;
        const c = u[u.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var m;
        const {element: l, name: u, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const c = l.getValue(u);
        c && c.jump(this.measuredOrigin, !1);
        const d = o.length - 1
          , h = o[d];
        o[d] = ra[u](l.measureViewportBox(), window.getComputedStyle(l.current)),
        h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
        (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach( ([g,p]) => {
            l.getValue(g).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function kb(i, l, u) {
    if (i instanceof EventTarget)
        return [i];
    if (typeof i == "string") {
        let o = document;
        const c = (u == null ? void 0 : u[i]) ?? o.querySelectorAll(i);
        return c ? Array.from(c) : []
    }
    return Array.from(i)
}
const Ly = (i, l) => l && typeof i == "number" ? l.transform(i) : i
  , Im = 30
  , Pb = i => !isNaN(parseFloat(i));
class Fb {
    constructor(l, u={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, c=!0) => {
            var h, m;
            const d = ce.now();
            if (this.updatedAt !== d && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((h = this.events.change) == null || h.notify(this.current),
            this.dependents))
                for (const g of this.dependents)
                    g.dirty();
            c && ((m = this.events.renderRequest) == null || m.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = u.owner
    }
    setCurrent(l) {
        this.current = l,
        this.updatedAt = ce.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Pb(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, u) {
        this.events[l] || (this.events[l] = new uc);
        const o = this.events[l].add(u);
        return l === "change" ? () => {
            o(),
            Ot.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const l in this.events)
            this.events[l].clear()
    }
    attach(l, u) {
        this.passiveEffect = l,
        this.stopPassiveEffect = u
    }
    set(l, u=!0) {
        !u || !this.passiveEffect ? this.updateAndNotify(l, u) : this.passiveEffect(l, this.updateAndNotify)
    }
    setWithVelocity(l, u, o) {
        this.set(u),
        this.prev = void 0,
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(l, u=!0) {
        this.updateAndNotify(l),
        this.prev = l,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        u && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var l;
        (l = this.events.change) == null || l.notify(this.current)
    }
    addDependent(l) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(l)
    }
    removeDependent(l) {
        this.dependents && this.dependents.delete(l)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const l = ce.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Im)
            return 0;
        const u = Math.min(this.updatedAt - this.prevUpdatedAt, Im);
        return ny(parseFloat(this.current) - parseFloat(this.prevFrameValue), u)
    }
    start(l) {
        return this.stop(),
        new Promise(u => {
            this.hasAnimated = !0,
            this.animation = l(u),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var l, u;
        (l = this.dependents) == null || l.clear(),
        (u = this.events.destroy) == null || u.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ni(i, l) {
    return new Fb(i,l)
}
const {schedule: xc} = dy(queueMicrotask, !1)
  , Be = {
    x: !1,
    y: !1
};
function Hy() {
    return Be.x || Be.y
}
function Wb(i) {
    return i === "x" || i === "y" ? Be[i] ? null : (Be[i] = !0,
    () => {
        Be[i] = !1
    }
    ) : Be.x || Be.y ? null : (Be.x = Be.y = !0,
    () => {
        Be.x = Be.y = !1
    }
    )
}
function qy(i, l) {
    const u = kb(i)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [u, c, () => o.abort()]
}
function tp(i) {
    return !(i.pointerType === "touch" || Hy())
}
function $b(i, l, u={}) {
    const [o,c,d] = qy(i, u)
      , h = m => {
        if (!tp(m))
            return;
        const {target: g} = m
          , p = l(g, m);
        if (typeof p != "function" || !g)
            return;
        const v = S => {
            tp(S) && (p(S),
            g.removeEventListener("pointerleave", v))
        }
        ;
        g.addEventListener("pointerleave", v, c)
    }
    ;
    return o.forEach(m => {
        m.addEventListener("pointerenter", h, c)
    }
    ),
    d
}
const Yy = (i, l) => l ? i === l ? !0 : Yy(i, l.parentElement) : !1
  , Ac = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1
  , Ib = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function tS(i) {
    return Ib.has(i.tagName) || i.tabIndex !== -1
}
const Xs = new WeakSet;
function ep(i) {
    return l => {
        l.key === "Enter" && i(l)
    }
}
function Dr(i, l) {
    i.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const eS = (i, l) => {
    const u = i.currentTarget;
    if (!u)
        return;
    const o = ep( () => {
        if (Xs.has(u))
            return;
        Dr(u, "down");
        const c = ep( () => {
            Dr(u, "up")
        }
        )
          , d = () => Dr(u, "cancel");
        u.addEventListener("keyup", c, l),
        u.addEventListener("blur", d, l)
    }
    );
    u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l)
}
;
function np(i) {
    return Ac(i) && !Hy()
}
function nS(i, l, u={}) {
    const [o,c,d] = qy(i, u)
      , h = m => {
        const g = m.currentTarget;
        if (!np(m))
            return;
        Xs.add(g);
        const p = l(g, m)
          , v = (V, w) => {
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", E),
            Xs.has(g) && Xs.delete(g),
            np(V) && typeof p == "function" && p(V, {
                success: w
            })
        }
          , S = V => {
            v(V, g === window || g === document || u.useGlobalTarget || Yy(g, V.target))
        }
          , E = V => {
            v(V, !1)
        }
        ;
        window.addEventListener("pointerup", S, c),
        window.addEventListener("pointercancel", E, c)
    }
    ;
    return o.forEach(m => {
        (u.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        zy(m) && (m.addEventListener("focus", p => eS(p, c)),
        !tS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
    }
    ),
    d
}
function Gy(i) {
    return ty(i) && "ownerSVGElement"in i
}
function aS(i) {
    return Gy(i) && i.tagName === "svg"
}
const ee = i => !!(i && i.getVelocity)
  , iS = [...jy, te, Hn]
  , lS = i => iS.find(Uy(i))
  , Xy = et.createContext({
    transformPagePoint: i => i,
    isStatic: !1,
    reducedMotion: "never"
});
function sS(i=!0) {
    const l = et.useContext(nc);
    if (l === null)
        return [!0, null];
    const {isPresent: u, onExitComplete: o, register: c} = l
      , d = et.useId();
    et.useEffect( () => {
        if (i)
            return c(d)
    }
    , [i]);
    const h = et.useCallback( () => i && o && o(d), [d, o, i]);
    return !u && o ? [!1, h] : [!0]
}
const Zy = et.createContext({
    strict: !1
})
  , ap = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ai = {};
for (const i in ap)
    ai[i] = {
        isEnabled: l => ap[i].some(u => !!l[u])
    };
function uS(i) {
    for (const l in i)
        ai[l] = {
            ...ai[l],
            ...i[l]
        }
}
const oS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ps(i) {
    return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || oS.has(i)
}
let Qy = i => !Ps(i);
function rS(i) {
    i && (Qy = l => l.startsWith("on") ? !Ps(l) : i(l))
}
try {
    rS(require("@emotion/is-prop-valid").default)
} catch {}
function cS(i, l, u) {
    const o = {};
    for (const c in i)
        c === "values" && typeof i.values == "object" || (Qy(c) || u === !0 && Ps(c) || !l && !Ps(c) || i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]);
    return o
}
function fS(i) {
    if (typeof Proxy > "u")
        return i;
    const l = new Map
      , u = (...o) => i(...o);
    return new Proxy(u,{
        get: (o, c) => c === "create" ? i : (l.has(c) || l.set(c, i(c)),
        l.get(c))
    })
}
const Ws = et.createContext({});
function $s(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function"
}
function yl(i) {
    return typeof i == "string" || Array.isArray(i)
}
const Ec = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Mc = ["initial", ...Ec];
function Is(i) {
    return $s(i.animate) || Mc.some(l => yl(i[l]))
}
function Ky(i) {
    return !!(Is(i) || i.variants)
}
function hS(i, l) {
    if (Is(i)) {
        const {initial: u, animate: o} = i;
        return {
            initial: u === !1 || yl(u) ? u : void 0,
            animate: yl(o) ? o : void 0
        }
    }
    return i.inherit !== !1 ? l : {}
}
function dS(i) {
    const {initial: l, animate: u} = hS(i, et.useContext(Ws));
    return et.useMemo( () => ({
        initial: l,
        animate: u
    }), [ip(l), ip(u)])
}
function ip(i) {
    return Array.isArray(i) ? i.join(" ") : i
}
const mS = Symbol.for("motionComponentSymbol");
function $a(i) {
    return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}
function pS(i, l, u) {
    return et.useCallback(o => {
        o && i.onMount && i.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        u && (typeof u == "function" ? u(o) : $a(u) && (u.current = o))
    }
    , [l])
}
const Dc = i => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , yS = "framerAppearId"
  , Jy = "data-" + Dc(yS)
  , ky = et.createContext({});
function gS(i, l, u, o, c) {
    var L, Y;
    const {visualElement: d} = et.useContext(Ws)
      , h = et.useContext(Zy)
      , m = et.useContext(nc)
      , g = et.useContext(Xy).reducedMotion
      , p = et.useRef(null);
    o = o || h.renderer,
    !p.current && o && (p.current = o(i, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const v = p.current
      , S = et.useContext(ky);
    v && !v.projection && c && (v.type === "html" || v.type === "svg") && vS(p.current, u, c, S);
    const E = et.useRef(!1);
    et.useInsertionEffect( () => {
        v && E.current && v.update(u, m)
    }
    );
    const V = u[Jy]
      , w = et.useRef(!!V && !((L = window.MotionHandoffIsComplete) != null && L.call(window, V)) && ((Y = window.MotionHasOptimisedAnimation) == null ? void 0 : Y.call(window, V)));
    return r1( () => {
        v && (E.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        xc.render(v.render),
        w.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    et.useEffect( () => {
        v && (!w.current && v.animationState && v.animationState.animateChanges(),
        w.current && (queueMicrotask( () => {
            var G;
            (G = window.MotionHandoffMarkAsComplete) == null || G.call(window, V)
        }
        ),
        w.current = !1))
    }
    ),
    v
}
function vS(i, l, u, o) {
    const {layoutId: c, layout: d, drag: h, dragConstraints: m, layoutScroll: g, layoutRoot: p, layoutCrossfade: v} = l;
    i.projection = new u(i.latestValues,l["data-framer-portal-id"] ? void 0 : Py(i.parent)),
    i.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!h || m && $a(m),
        visualElement: i,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: v,
        layoutScroll: g,
        layoutRoot: p
    })
}
function Py(i) {
    if (i)
        return i.options.allowProjection !== !1 ? i.projection : Py(i.parent)
}
function bS({preloadedFeatures: i, createVisualElement: l, useRender: u, useVisualState: o, Component: c}) {
    i && uS(i);
    function d(m, g) {
        let p;
        const v = {
            ...et.useContext(Xy),
            ...m,
            layoutId: SS(m)
        }
          , {isStatic: S} = v
          , E = dS(m)
          , V = o(m, S);
        if (!S && ec) {
            TS();
            const w = xS(v);
            p = w.MeasureLayout,
            E.visualElement = gS(c, V, v, l, w.ProjectionNode)
        }
        return U.jsxs(Ws.Provider, {
            value: E,
            children: [p && E.visualElement ? U.jsx(p, {
                visualElement: E.visualElement,
                ...v
            }) : null, u(c, m, pS(V, E.visualElement, g), V, S, E.visualElement)]
        })
    }
    d.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const h = et.forwardRef(d);
    return h[mS] = c,
    h
}
function SS({layoutId: i}) {
    const l = et.useContext($p).id;
    return l && i !== void 0 ? l + "-" + i : i
}
function TS(i, l) {
    et.useContext(Zy).strict
}
function xS(i) {
    const {drag: l, layout: u} = ai;
    if (!l && !u)
        return {};
    const o = {
        ...l,
        ...u
    };
    return {
        MeasureLayout: l != null && l.isEnabled(i) || u != null && u.isEnabled(i) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const gl = {};
function AS(i) {
    for (const l in i)
        gl[l] = i[l],
        cc(l) && (gl[l].isCSSVariable = !0)
}
function Fy(i, {layout: l, layoutId: u}) {
    return si.has(i) || i.startsWith("origin") || (l || u !== void 0) && (!!gl[i] || i === "opacity")
}
const ES = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , MS = li.length;
function DS(i, l, u) {
    let o = ""
      , c = !0;
    for (let d = 0; d < MS; d++) {
        const h = li[d]
          , m = i[h];
        if (m === void 0)
            continue;
        let g = !0;
        if (typeof m == "number" ? g = m === (h.startsWith("scale") ? 1 : 0) : g = parseFloat(m) === 0,
        !g || u) {
            const p = Ly(m, Tc[h]);
            if (!g) {
                c = !1;
                const v = ES[h] || h;
                o += `${v}(${p}) `
            }
            u && (l[h] = p)
        }
    }
    return o = o.trim(),
    u ? o = u(l, c ? "" : o) : c && (o = "none"),
    o
}
function Rc(i, l, u) {
    const {style: o, vars: c, transformOrigin: d} = i;
    let h = !1
      , m = !1;
    for (const g in l) {
        const p = l[g];
        if (si.has(g)) {
            h = !0;
            continue
        } else if (cc(g)) {
            c[g] = p;
            continue
        } else {
            const v = Ly(p, Tc[g]);
            g.startsWith("origin") ? (m = !0,
            d[g] = v) : o[g] = v
        }
    }
    if (l.transform || (h || u ? o.transform = DS(l, i.transform, u) : o.transform && (o.transform = "none")),
    m) {
        const {originX: g="50%", originY: p="50%", originZ: v=0} = d;
        o.transformOrigin = `${g} ${p} ${v}`
    }
}
const Oc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Wy(i, l, u) {
    for (const o in l)
        !ee(l[o]) && !Fy(o, u) && (i[o] = l[o])
}
function RS({transformTemplate: i}, l) {
    return et.useMemo( () => {
        const u = Oc();
        return Rc(u, l, i),
        Object.assign({}, u.vars, u.style)
    }
    , [l])
}
function OS(i, l) {
    const u = i.style || {}
      , o = {};
    return Wy(o, u, i),
    Object.assign(o, RS(i, l)),
    o
}
function VS(i, l) {
    const u = {}
      , o = OS(i, l);
    return i.drag && i.dragListener !== !1 && (u.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (u.tabIndex = 0),
    u.style = o,
    u
}
const CS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , zS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function NS(i, l, u=1, o=0, c=!0) {
    i.pathLength = 1;
    const d = c ? CS : zS;
    i[d.offset] = tt.transform(-o);
    const h = tt.transform(l)
      , m = tt.transform(u);
    i[d.array] = `${h} ${m}`
}
function $y(i, {attrX: l, attrY: u, attrScale: o, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...m}, g, p, v) {
    if (Rc(i, m, p),
    g) {
        i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
        return
    }
    i.attrs = i.style,
    i.style = {};
    const {attrs: S, style: E} = i;
    S.transform && (E.transform = S.transform,
    delete S.transform),
    (E.transform || S.transformOrigin) && (E.transformOrigin = S.transformOrigin ?? "50% 50%",
    delete S.transformOrigin),
    E.transform && (E.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box",
    delete S.transformBox),
    l !== void 0 && (S.x = l),
    u !== void 0 && (S.y = u),
    o !== void 0 && (S.scale = o),
    c !== void 0 && NS(S, c, d, h, !1)
}
const Iy = () => ({
    ...Oc(),
    attrs: {}
})
  , tg = i => typeof i == "string" && i.toLowerCase() === "svg";
function _S(i, l, u, o) {
    const c = et.useMemo( () => {
        const d = Iy();
        return $y(d, l, tg(o), i.transformTemplate, i.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
    , [l]);
    if (i.style) {
        const d = {};
        Wy(d, i.style, i),
        c.style = {
            ...d,
            ...c.style
        }
    }
    return c
}
const US = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Vc(i) {
    return typeof i != "string" || i.includes("-") ? !1 : !!(US.indexOf(i) > -1 || /[A-Z]/u.test(i))
}
function jS(i=!1) {
    return (u, o, c, {latestValues: d}, h) => {
        const g = (Vc(u) ? _S : VS)(o, d, h, u)
          , p = cS(o, typeof u == "string", i)
          , v = u !== et.Fragment ? {
            ...p,
            ...g,
            ref: c
        } : {}
          , {children: S} = o
          , E = et.useMemo( () => ee(S) ? S.get() : S, [S]);
        return et.createElement(u, {
            ...v,
            children: E
        })
    }
}
function lp(i) {
    const l = [{}, {}];
    return i == null || i.values.forEach( (u, o) => {
        l[0][o] = u.get(),
        l[1][o] = u.getVelocity()
    }
    ),
    l
}
function Cc(i, l, u, o) {
    if (typeof l == "function") {
        const [c,d] = lp(o);
        l = l(u !== void 0 ? u : i.custom, c, d)
    }
    if (typeof l == "string" && (l = i.variants && i.variants[l]),
    typeof l == "function") {
        const [c,d] = lp(o);
        l = l(u !== void 0 ? u : i.custom, c, d)
    }
    return l
}
function Zs(i) {
    return ee(i) ? i.get() : i
}
function BS({scrapeMotionValuesFromProps: i, createRenderState: l}, u, o, c) {
    return {
        latestValues: wS(u, o, c, i),
        renderState: l()
    }
}
const eg = i => (l, u) => {
    const o = et.useContext(Ws)
      , c = et.useContext(nc)
      , d = () => BS(i, l, o, c);
    return u ? d() : o1(d)
}
;
function wS(i, l, u, o) {
    const c = {}
      , d = o(i, {});
    for (const E in d)
        c[E] = Zs(d[E]);
    let {initial: h, animate: m} = i;
    const g = Is(i)
      , p = Ky(i);
    l && p && !g && i.inherit !== !1 && (h === void 0 && (h = l.initial),
    m === void 0 && (m = l.animate));
    let v = u ? u.initial === !1 : !1;
    v = v || h === !1;
    const S = v ? m : h;
    if (S && typeof S != "boolean" && !$s(S)) {
        const E = Array.isArray(S) ? S : [S];
        for (let V = 0; V < E.length; V++) {
            const w = Cc(i, E[V]);
            if (w) {
                const {transitionEnd: L, transition: Y, ...G} = w;
                for (const k in G) {
                    let H = G[k];
                    if (Array.isArray(H)) {
                        const it = v ? H.length - 1 : 0;
                        H = H[it]
                    }
                    H !== null && (c[k] = H)
                }
                for (const k in L)
                    c[k] = L[k]
            }
        }
    }
    return c
}
function zc(i, l, u) {
    var d;
    const {style: o} = i
      , c = {};
    for (const h in o)
        (ee(o[h]) || l.style && ee(l.style[h]) || Fy(h, i) || ((d = u == null ? void 0 : u.getValue(h)) == null ? void 0 : d.liveStyle) !== void 0) && (c[h] = o[h]);
    return c
}
const LS = {
    useVisualState: eg({
        scrapeMotionValuesFromProps: zc,
        createRenderState: Oc
    })
};
function ng(i, l, u) {
    const o = zc(i, l, u);
    for (const c in i)
        if (ee(i[c]) || ee(l[c])) {
            const d = li.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[d] = i[c]
        }
    return o
}
const HS = {
    useVisualState: eg({
        scrapeMotionValuesFromProps: ng,
        createRenderState: Iy
    })
};
function qS(i, l) {
    return function(o, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const h = {
            ...Vc(o) ? HS : LS,
            preloadedFeatures: i,
            useRender: jS(c),
            createVisualElement: l,
            Component: o
        };
        return bS(h)
    }
}
function vl(i, l, u) {
    const o = i.getProps();
    return Cc(o, l, u !== void 0 ? u : o.custom, i)
}
const Kr = i => Array.isArray(i);
function YS(i, l, u) {
    i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, ni(u))
}
function GS(i) {
    return Kr(i) ? i[i.length - 1] || 0 : i
}
function XS(i, l) {
    const u = vl(i, l);
    let {transitionEnd: o={}, transition: c={}, ...d} = u || {};
    d = {
        ...d,
        ...o
    };
    for (const h in d) {
        const m = GS(d[h]);
        YS(i, h, m)
    }
}
function ZS(i) {
    return !!(ee(i) && i.add)
}
function Jr(i, l) {
    const u = i.getValue("willChange");
    if (ZS(u))
        return u.add(l);
    if (!u && fn.WillChange) {
        const o = new fn.WillChange("auto");
        i.addValue("willChange", o),
        o.add(l)
    }
}
function ag(i) {
    return i.props[Jy]
}
const QS = i => i !== null;
function KS(i, {repeat: l, repeatType: u="loop"}, o) {
    const c = i.filter(QS)
      , d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[d]
}
const JS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , kS = i => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , PS = {
    type: "keyframes",
    duration: .8
}
  , FS = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , WS = (i, {keyframes: l}) => l.length > 2 ? PS : si.has(i) ? i.startsWith("scale") ? kS(l[1]) : JS : FS;
function $S({when: i, delay: l, delayChildren: u, staggerChildren: o, staggerDirection: c, repeat: d, repeatType: h, repeatDelay: m, from: g, elapsed: p, ...v}) {
    return !!Object.keys(v).length
}
const Nc = (i, l, u, o={}, c, d) => h => {
    const m = Sc(o, i) || {}
      , g = m.delay || o.delay || 0;
    let {elapsed: p=0} = o;
    p = p - Ze(g);
    const v = {
        keyframes: Array.isArray(u) ? u : [null, u],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -p,
        onUpdate: E => {
            l.set(E),
            m.onUpdate && m.onUpdate(E)
        }
        ,
        onComplete: () => {
            h(),
            m.onComplete && m.onComplete()
        }
        ,
        name: i,
        motionValue: l,
        element: d ? void 0 : c
    };
    $S(m) || Object.assign(v, WS(i, v)),
    v.duration && (v.duration = Ze(v.duration)),
    v.repeatDelay && (v.repeatDelay = Ze(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let S = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0,
    v.delay === 0 && (S = !0)),
    (fn.instantAnimations || fn.skipAnimations) && (S = !0,
    v.duration = 0,
    v.delay = 0),
    v.allowFlatten = !m.type && !m.ease,
    S && !d && l.get() !== void 0) {
        const E = KS(v.keyframes, m);
        if (E !== void 0) {
            Ot.update( () => {
                v.onUpdate(E),
                v.onComplete()
            }
            );
            return
        }
    }
    return m.isSync ? new vc(v) : new jb(v)
}
;
function IS({protectedKeys: i, needsAnimating: l}, u) {
    const o = i.hasOwnProperty(u) && l[u] !== !0;
    return l[u] = !1,
    o
}
function ig(i, l, {delay: u=0, transitionOverride: o, type: c}={}) {
    let {transition: d=i.getDefaultTransition(), transitionEnd: h, ...m} = l;
    o && (d = o);
    const g = []
      , p = c && i.animationState && i.animationState.getState()[c];
    for (const v in m) {
        const S = i.getValue(v, i.latestValues[v] ?? null)
          , E = m[v];
        if (E === void 0 || p && IS(p, v))
            continue;
        const V = {
            delay: u,
            ...Sc(d || {}, v)
        }
          , w = S.get();
        if (w !== void 0 && !S.isAnimating && !Array.isArray(E) && E === w && !V.velocity)
            continue;
        let L = !1;
        if (window.MotionHandoffAnimation) {
            const G = ag(i);
            if (G) {
                const k = window.MotionHandoffAnimation(G, v, Ot);
                k !== null && (V.startTime = k,
                L = !0)
            }
        }
        Jr(i, v),
        S.start(Nc(v, S, E, i.shouldReduceMotion && _y.has(v) ? {
            type: !1
        } : V, i, L));
        const Y = S.animation;
        Y && g.push(Y)
    }
    return h && Promise.all(g).then( () => {
        Ot.update( () => {
            h && XS(i, h)
        }
        )
    }
    ),
    g
}
function kr(i, l, u={}) {
    var g;
    const o = vl(i, l, u.type === "exit" ? (g = i.presenceContext) == null ? void 0 : g.custom : void 0);
    let {transition: c=i.getDefaultTransition() || {}} = o || {};
    u.transitionOverride && (c = u.transitionOverride);
    const d = o ? () => Promise.all(ig(i, o, u)) : () => Promise.resolve()
      , h = i.variantChildren && i.variantChildren.size ? (p=0) => {
        const {delayChildren: v=0, staggerChildren: S, staggerDirection: E} = c;
        return tT(i, l, v + p, S, E, u)
    }
    : () => Promise.resolve()
      , {when: m} = c;
    if (m) {
        const [p,v] = m === "beforeChildren" ? [d, h] : [h, d];
        return p().then( () => v())
    } else
        return Promise.all([d(), h(u.delay)])
}
function tT(i, l, u=0, o=0, c=1, d) {
    const h = []
      , m = (i.variantChildren.size - 1) * o
      , g = c === 1 ? (p=0) => p * o : (p=0) => m - p * o;
    return Array.from(i.variantChildren).sort(eT).forEach( (p, v) => {
        p.notify("AnimationStart", l),
        h.push(kr(p, l, {
            ...d,
            delay: u + g(v)
        }).then( () => p.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(h)
}
function eT(i, l) {
    return i.sortNodePosition(l)
}
function nT(i, l, u={}) {
    i.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(d => kr(i, d, u));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = kr(i, l, u);
    else {
        const c = typeof l == "function" ? vl(i, l, u.custom) : l;
        o = Promise.all(ig(i, c, u))
    }
    return o.then( () => {
        i.notify("AnimationComplete", l)
    }
    )
}
function lg(i, l) {
    if (!Array.isArray(l))
        return !1;
    const u = l.length;
    if (u !== i.length)
        return !1;
    for (let o = 0; o < u; o++)
        if (l[o] !== i[o])
            return !1;
    return !0
}
const aT = Mc.length;
function sg(i) {
    if (!i)
        return;
    if (!i.isControllingVariants) {
        const u = i.parent ? sg(i.parent) || {} : {};
        return i.props.initial !== void 0 && (u.initial = i.props.initial),
        u
    }
    const l = {};
    for (let u = 0; u < aT; u++) {
        const o = Mc[u]
          , c = i.props[o];
        (yl(c) || c === !1) && (l[o] = c)
    }
    return l
}
const iT = [...Ec].reverse()
  , lT = Ec.length;
function sT(i) {
    return l => Promise.all(l.map( ({animation: u, options: o}) => nT(i, u, o)))
}
function uT(i) {
    let l = sT(i)
      , u = sp()
      , o = !0;
    const c = g => (p, v) => {
        var E;
        const S = vl(i, v, g === "exit" ? (E = i.presenceContext) == null ? void 0 : E.custom : void 0);
        if (S) {
            const {transition: V, transitionEnd: w, ...L} = S;
            p = {
                ...p,
                ...L,
                ...w
            }
        }
        return p
    }
    ;
    function d(g) {
        l = g(i)
    }
    function h(g) {
        const {props: p} = i
          , v = sg(i.parent) || {}
          , S = []
          , E = new Set;
        let V = {}
          , w = 1 / 0;
        for (let Y = 0; Y < lT; Y++) {
            const G = iT[Y]
              , k = u[G]
              , H = p[G] !== void 0 ? p[G] : v[G]
              , it = yl(H)
              , q = G === g ? k.isActive : null;
            q === !1 && (w = Y);
            let lt = H === v[G] && H !== p[G] && it;
            if (lt && o && i.manuallyAnimateOnMount && (lt = !1),
            k.protectedKeys = {
                ...V
            },
            !k.isActive && q === null || !H && !k.prevProp || $s(H) || typeof H == "boolean")
                continue;
            const ft = oT(k.prevProp, H);
            let W = ft || G === g && k.isActive && !lt && it || Y > w && it
              , At = !1;
            const wt = Array.isArray(H) ? H : [H];
            let Ft = wt.reduce(c(G), {});
            q === !1 && (Ft = {});
            const {prevResolvedValues: Lt={}} = k
              , Je = {
                ...Lt,
                ...Ft
            }
              , we = B => {
                W = !0,
                E.has(B) && (At = !0,
                E.delete(B)),
                k.needsAnimating[B] = !0;
                const K = i.getValue(B);
                K && (K.liveStyle = !1)
            }
            ;
            for (const B in Je) {
                const K = Ft[B]
                  , mt = Lt[B];
                if (V.hasOwnProperty(B))
                    continue;
                let T = !1;
                Kr(K) && Kr(mt) ? T = !lg(K, mt) : T = K !== mt,
                T ? K != null ? we(B) : E.add(B) : K !== void 0 && E.has(B) ? we(B) : k.protectedKeys[B] = !0
            }
            k.prevProp = H,
            k.prevResolvedValues = Ft,
            k.isActive && (V = {
                ...V,
                ...Ft
            }),
            o && i.blockInitialAnimation && (W = !1),
            W && (!(lt && ft) || At) && S.push(...wt.map(B => ({
                animation: B,
                options: {
                    type: G
                }
            })))
        }
        if (E.size) {
            const Y = {};
            if (typeof p.initial != "boolean") {
                const G = vl(i, Array.isArray(p.initial) ? p.initial[0] : p.initial);
                G && G.transition && (Y.transition = G.transition)
            }
            E.forEach(G => {
                const k = i.getBaseTarget(G)
                  , H = i.getValue(G);
                H && (H.liveStyle = !0),
                Y[G] = k ?? null
            }
            ),
            S.push({
                animation: Y
            })
        }
        let L = !!S.length;
        return o && (p.initial === !1 || p.initial === p.animate) && !i.manuallyAnimateOnMount && (L = !1),
        o = !1,
        L ? l(S) : Promise.resolve()
    }
    function m(g, p) {
        var S;
        if (u[g].isActive === p)
            return Promise.resolve();
        (S = i.variantChildren) == null || S.forEach(E => {
            var V;
            return (V = E.animationState) == null ? void 0 : V.setActive(g, p)
        }
        ),
        u[g].isActive = p;
        const v = h(g);
        for (const E in u)
            u[E].protectedKeys = {};
        return v
    }
    return {
        animateChanges: h,
        setActive: m,
        setAnimateFunction: d,
        getState: () => u,
        reset: () => {
            u = sp(),
            o = !0
        }
    }
}
function oT(i, l) {
    return typeof l == "string" ? l !== i : Array.isArray(l) ? !lg(l, i) : !1
}
function la(i=!1) {
    return {
        isActive: i,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sp() {
    return {
        animate: la(!0),
        whileInView: la(),
        whileHover: la(),
        whileTap: la(),
        whileDrag: la(),
        whileFocus: la(),
        exit: la()
    }
}
class qn {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class rT extends qn {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = uT(l))
    }
    updateAnimationControlsSubscription() {
        const {animate: l} = this.node.getProps();
        $s(l) && (this.unmountControls = l.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: l} = this.node.getProps()
          , {animate: u} = this.node.prevProps || {};
        l !== u && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(),
        (l = this.unmountControls) == null || l.call(this)
    }
}
let cT = 0;
class fT extends qn {
    constructor() {
        super(...arguments),
        this.id = cT++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: l, onExitComplete: u} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o)
            return;
        const c = this.node.animationState.setActive("exit", !l);
        u && !l && c.then( () => {
            u(this.id)
        }
        )
    }
    mount() {
        const {register: l, onExitComplete: u} = this.node.presenceContext || {};
        u && u(this.id),
        l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const hT = {
    animation: {
        Feature: rT
    },
    exit: {
        Feature: fT
    }
};
function bl(i, l, u, o={
    passive: !0
}) {
    return i.addEventListener(l, u, o),
    () => i.removeEventListener(l, u)
}
function Al(i) {
    return {
        point: {
            x: i.pageX,
            y: i.pageY
        }
    }
}
const dT = i => l => Ac(l) && i(l, Al(l));
function cl(i, l, u, o) {
    return bl(i, l, dT(u), o)
}
function ug({top: i, left: l, right: u, bottom: o}) {
    return {
        x: {
            min: l,
            max: u
        },
        y: {
            min: i,
            max: o
        }
    }
}
function mT({x: i, y: l}) {
    return {
        top: l.min,
        right: i.max,
        bottom: l.max,
        left: i.min
    }
}
function pT(i, l) {
    if (!l)
        return i;
    const u = l({
        x: i.left,
        y: i.top
    })
      , o = l({
        x: i.right,
        y: i.bottom
    });
    return {
        top: u.y,
        left: u.x,
        bottom: o.y,
        right: o.x
    }
}
const og = 1e-4
  , yT = 1 - og
  , gT = 1 + og
  , rg = .01
  , vT = 0 - rg
  , bT = 0 + rg;
function ie(i) {
    return i.max - i.min
}
function ST(i, l, u) {
    return Math.abs(i - l) <= u
}
function up(i, l, u, o=.5) {
    i.origin = o,
    i.originPoint = Rt(l.min, l.max, i.origin),
    i.scale = ie(u) / ie(l),
    i.translate = Rt(u.min, u.max, i.origin) - i.originPoint,
    (i.scale >= yT && i.scale <= gT || isNaN(i.scale)) && (i.scale = 1),
    (i.translate >= vT && i.translate <= bT || isNaN(i.translate)) && (i.translate = 0)
}
function fl(i, l, u, o) {
    up(i.x, l.x, u.x, o ? o.originX : void 0),
    up(i.y, l.y, u.y, o ? o.originY : void 0)
}
function op(i, l, u) {
    i.min = u.min + l.min,
    i.max = i.min + ie(l)
}
function TT(i, l, u) {
    op(i.x, l.x, u.x),
    op(i.y, l.y, u.y)
}
function rp(i, l, u) {
    i.min = l.min - u.min,
    i.max = i.min + ie(l)
}
function hl(i, l, u) {
    rp(i.x, l.x, u.x),
    rp(i.y, l.y, u.y)
}
const cp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ia = () => ({
    x: cp(),
    y: cp()
})
  , fp = () => ({
    min: 0,
    max: 0
})
  , Ut = () => ({
    x: fp(),
    y: fp()
});
function ze(i) {
    return [i("x"), i("y")]
}
function Rr(i) {
    return i === void 0 || i === 1
}
function Pr({scale: i, scaleX: l, scaleY: u}) {
    return !Rr(i) || !Rr(l) || !Rr(u)
}
function sa(i) {
    return Pr(i) || cg(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}
function cg(i) {
    return hp(i.x) || hp(i.y)
}
function hp(i) {
    return i && i !== "0%"
}
function Fs(i, l, u) {
    const o = i - u
      , c = l * o;
    return u + c
}
function dp(i, l, u, o, c) {
    return c !== void 0 && (i = Fs(i, c, o)),
    Fs(i, u, o) + l
}
function Fr(i, l=0, u=1, o, c) {
    i.min = dp(i.min, l, u, o, c),
    i.max = dp(i.max, l, u, o, c)
}
function fg(i, {x: l, y: u}) {
    Fr(i.x, l.translate, l.scale, l.originPoint),
    Fr(i.y, u.translate, u.scale, u.originPoint)
}
const mp = .999999999999
  , pp = 1.0000000000001;
function xT(i, l, u, o=!1) {
    const c = u.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let d, h;
    for (let m = 0; m < c; m++) {
        d = u[m],
        h = d.projectionDelta;
        const {visualElement: g} = d.options;
        g && g.props.style && g.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && ei(i, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }),
        h && (l.x *= h.x.scale,
        l.y *= h.y.scale,
        fg(i, h)),
        o && sa(d.latestValues) && ei(i, d.latestValues))
    }
    l.x < pp && l.x > mp && (l.x = 1),
    l.y < pp && l.y > mp && (l.y = 1)
}
function ti(i, l) {
    i.min = i.min + l,
    i.max = i.max + l
}
function yp(i, l, u, o, c=.5) {
    const d = Rt(i.min, i.max, c);
    Fr(i, l, u, d, o)
}
function ei(i, l) {
    yp(i.x, l.x, l.scaleX, l.scale, l.originX),
    yp(i.y, l.y, l.scaleY, l.scale, l.originY)
}
function hg(i, l) {
    return ug(pT(i.getBoundingClientRect(), l))
}
function AT(i, l, u) {
    const o = hg(i, u)
      , {scroll: c} = l;
    return c && (ti(o.x, c.offset.x),
    ti(o.y, c.offset.y)),
    o
}
const dg = ({current: i}) => i ? i.ownerDocument.defaultView : null
  , gp = (i, l) => Math.abs(i - l);
function ET(i, l) {
    const u = gp(i.x, l.x)
      , o = gp(i.y, l.y);
    return Math.sqrt(u ** 2 + o ** 2)
}
class mg {
    constructor(l, u, {transformPagePoint: o, contextWindow: c, dragSnapToOrigin: d=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Vr(this.lastMoveEventInfo, this.history)
              , E = this.startEvent !== null
              , V = ET(S.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!E && !V)
                return;
            const {point: w} = S
              , {timestamp: L} = Pt;
            this.history.push({
                ...w,
                timestamp: L
            });
            const {onStart: Y, onMove: G} = this.handlers;
            E || (Y && Y(this.lastMoveEvent, S),
            this.startEvent = this.lastMoveEvent),
            G && G(this.lastMoveEvent, S)
        }
        ,
        this.handlePointerMove = (S, E) => {
            this.lastMoveEvent = S,
            this.lastMoveEventInfo = Or(E, this.transformPagePoint),
            Ot.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (S, E) => {
            this.end();
            const {onEnd: V, onSessionEnd: w, resumeAnimation: L} = this.handlers;
            if (this.dragSnapToOrigin && L && L(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const Y = Vr(S.type === "pointercancel" ? this.lastMoveEventInfo : Or(E, this.transformPagePoint), this.history);
            this.startEvent && V && V(S, Y),
            w && w(S, Y)
        }
        ,
        !Ac(l))
            return;
        this.dragSnapToOrigin = d,
        this.handlers = u,
        this.transformPagePoint = o,
        this.contextWindow = c || window;
        const h = Al(l)
          , m = Or(h, this.transformPagePoint)
          , {point: g} = m
          , {timestamp: p} = Pt;
        this.history = [{
            ...g,
            timestamp: p
        }];
        const {onSessionStart: v} = u;
        v && v(l, Vr(m, this.history)),
        this.removeListeners = Sl(cl(this.contextWindow, "pointermove", this.handlePointerMove), cl(this.contextWindow, "pointerup", this.handlePointerUp), cl(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Ln(this.updatePoint)
    }
}
function Or(i, l) {
    return l ? {
        point: l(i.point)
    } : i
}
function vp(i, l) {
    return {
        x: i.x - l.x,
        y: i.y - l.y
    }
}
function Vr({point: i}, l) {
    return {
        point: i,
        delta: vp(i, pg(l)),
        offset: vp(i, MT(l)),
        velocity: DT(l, .1)
    }
}
function MT(i) {
    return i[0]
}
function pg(i) {
    return i[i.length - 1]
}
function DT(i, l) {
    if (i.length < 2)
        return {
            x: 0,
            y: 0
        };
    let u = i.length - 1
      , o = null;
    const c = pg(i);
    for (; u >= 0 && (o = i[u],
    !(c.timestamp - o.timestamp > Ze(l))); )
        u--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const d = Qe(c.timestamp - o.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const h = {
        x: (c.x - o.x) / d,
        y: (c.y - o.y) / d
    };
    return h.x === 1 / 0 && (h.x = 0),
    h.y === 1 / 0 && (h.y = 0),
    h
}
function RT(i, {min: l, max: u}, o) {
    return l !== void 0 && i < l ? i = o ? Rt(l, i, o.min) : Math.max(i, l) : u !== void 0 && i > u && (i = o ? Rt(u, i, o.max) : Math.min(i, u)),
    i
}
function bp(i, l, u) {
    return {
        min: l !== void 0 ? i.min + l : void 0,
        max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0
    }
}
function OT(i, {top: l, left: u, bottom: o, right: c}) {
    return {
        x: bp(i.x, u, c),
        y: bp(i.y, l, o)
    }
}
function Sp(i, l) {
    let u = l.min - i.min
      , o = l.max - i.max;
    return l.max - l.min < i.max - i.min && ([u,o] = [o, u]),
    {
        min: u,
        max: o
    }
}
function VT(i, l) {
    return {
        x: Sp(i.x, l.x),
        y: Sp(i.y, l.y)
    }
}
function CT(i, l) {
    let u = .5;
    const o = ie(i)
      , c = ie(l);
    return c > o ? u = dl(l.min, l.max - o, i.min) : o > c && (u = dl(i.min, i.max - c, l.min)),
    cn(0, 1, u)
}
function zT(i, l) {
    const u = {};
    return l.min !== void 0 && (u.min = l.min - i.min),
    l.max !== void 0 && (u.max = l.max - i.min),
    u
}
const Wr = .35;
function NT(i=Wr) {
    return i === !1 ? i = 0 : i === !0 && (i = Wr),
    {
        x: Tp(i, "left", "right"),
        y: Tp(i, "top", "bottom")
    }
}
function Tp(i, l, u) {
    return {
        min: xp(i, l),
        max: xp(i, u)
    }
}
function xp(i, l) {
    return typeof i == "number" ? i : i[l] || 0
}
const _T = new WeakMap;
class UT {
    constructor(l) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ut(),
        this.visualElement = l
    }
    start(l, {snapToCursor: u=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: S} = this.getProps();
            S ? this.pauseAnimation() : this.stopAnimation(),
            u && this.snapToCursor(Al(v).point)
        }
          , d = (v, S) => {
            const {drag: E, dragPropagation: V, onDragStart: w} = this.getProps();
            if (E && !V && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Wb(E),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            ze(Y => {
                let G = this.getAxisMotionValue(Y).get() || 0;
                if (Ke.test(G)) {
                    const {projection: k} = this.visualElement;
                    if (k && k.layout) {
                        const H = k.layout.layoutBox[Y];
                        H && (G = ie(H) * (parseFloat(G) / 100))
                    }
                }
                this.originPoint[Y] = G
            }
            ),
            w && Ot.postRender( () => w(v, S)),
            Jr(this.visualElement, "transform");
            const {animationState: L} = this.visualElement;
            L && L.setActive("whileDrag", !0)
        }
          , h = (v, S) => {
            const {dragPropagation: E, dragDirectionLock: V, onDirectionLock: w, onDrag: L} = this.getProps();
            if (!E && !this.openDragLock)
                return;
            const {offset: Y} = S;
            if (V && this.currentDirection === null) {
                this.currentDirection = jT(Y),
                this.currentDirection !== null && w && w(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, Y),
            this.updateAxis("y", S.point, Y),
            this.visualElement.render(),
            L && L(v, S)
        }
          , m = (v, S) => this.stop(v, S)
          , g = () => ze(v => {
            var S;
            return this.getAnimationState(v) === "paused" && ((S = this.getAxisMotionValue(v).animation) == null ? void 0 : S.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new mg(l,{
            onSessionStart: c,
            onStart: d,
            onMove: h,
            onSessionEnd: m,
            resumeAnimation: g
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: dg(this.visualElement)
        })
    }
    stop(l, u) {
        const o = this.isDragging;
        if (this.cancel(),
        !o)
            return;
        const {velocity: c} = u;
        this.startAnimation(c);
        const {onDragEnd: d} = this.getProps();
        d && Ot.postRender( () => d(l, u))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: l, animationState: u} = this.visualElement;
        l && (l.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        u && u.setActive("whileDrag", !1)
    }
    updateAxis(l, u, o) {
        const {drag: c} = this.getProps();
        if (!o || !Ys(l, c, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(l);
        let h = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (h = RT(h, this.constraints[l], this.elastic[l])),
        d.set(h)
    }
    resolveConstraints() {
        var d;
        const {dragConstraints: l, dragElastic: u} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout
          , c = this.constraints;
        l && $a(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = OT(o.layoutBox, l) : this.constraints = !1,
        this.elastic = NT(u),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ze(h => {
            this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = zT(o.layoutBox[h], this.constraints[h]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: u} = this.getProps();
        if (!l || !$a(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const d = AT(o, c.root, this.visualElement.getTransformPagePoint());
        let h = VT(c.layout.layoutBox, d);
        if (u) {
            const m = u(mT(h));
            this.hasMutatedConstraints = !!m,
            m && (h = ug(m))
        }
        return h
    }
    startAnimation(l) {
        const {drag: u, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: m} = this.getProps()
          , g = this.constraints || {}
          , p = ze(v => {
            if (!Ys(v, u, this.currentDirection))
                return;
            let S = g && g[v] || {};
            h && (S = {
                min: 0,
                max: 0
            });
            const E = c ? 200 : 1e6
              , V = c ? 40 : 1e7
              , w = {
                type: "inertia",
                velocity: o ? l[v] : 0,
                bounceStiffness: E,
                bounceDamping: V,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...d,
                ...S
            };
            return this.startAxisValueAnimation(v, w)
        }
        );
        return Promise.all(p).then(m)
    }
    startAxisValueAnimation(l, u) {
        const o = this.getAxisMotionValue(l);
        return Jr(this.visualElement, l),
        o.start(Nc(l, o, 0, u, this.visualElement, !1))
    }
    stopAnimation() {
        ze(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        ze(l => {
            var u;
            return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.pause()
        }
        )
    }
    getAnimationState(l) {
        var u;
        return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.state
    }
    getAxisMotionValue(l) {
        const u = `_drag${l.toUpperCase()}`
          , o = this.visualElement.getProps()
          , c = o[u];
        return c || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        ze(u => {
            const {drag: o} = this.getProps();
            if (!Ys(u, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , d = this.getAxisMotionValue(u);
            if (c && c.layout) {
                const {min: h, max: m} = c.layout.layoutBox[u];
                d.set(l[u] - Rt(h, m, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: u} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!$a(u) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        ze(h => {
            const m = this.getAxisMotionValue(h);
            if (m && this.constraints !== !1) {
                const g = m.get();
                c[h] = CT({
                    min: g,
                    max: g
                }, this.constraints[h])
            }
        }
        );
        const {transformTemplate: d} = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        ze(h => {
            if (!Ys(h, l, null))
                return;
            const m = this.getAxisMotionValue(h)
              , {min: g, max: p} = this.constraints[h];
            m.set(Rt(g, p, c[h]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        _T.set(this.visualElement, this);
        const l = this.visualElement.current
          , u = cl(l, "pointerdown", g => {
            const {drag: p, dragListener: v=!0} = this.getProps();
            p && v && this.start(g)
        }
        )
          , o = () => {
            const {dragConstraints: g} = this.getProps();
            $a(g) && g.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , d = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        Ot.read(o);
        const h = bl(window, "resize", () => this.scalePositionWithinConstraints())
          , m = c.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: p}) => {
            this.isDragging && p && (ze(v => {
                const S = this.getAxisMotionValue(v);
                S && (this.originPoint[v] += g[v].translate,
                S.set(S.get() + g[v].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            h(),
            u(),
            d(),
            m && m()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: u=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: d=!1, dragElastic: h=Wr, dragMomentum: m=!0} = l;
        return {
            ...l,
            drag: u,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: h,
            dragMomentum: m
        }
    }
}
function Ys(i, l, u) {
    return (l === !0 || l === i) && (u === null || u === i)
}
function jT(i, l=10) {
    let u = null;
    return Math.abs(i.y) > l ? u = "y" : Math.abs(i.x) > l && (u = "x"),
    u
}
class BT extends qn {
    constructor(l) {
        super(l),
        this.removeGroupControls = Ne,
        this.removeListeners = Ne,
        this.controls = new UT(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ne
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Ap = i => (l, u) => {
    i && Ot.postRender( () => i(l, u))
}
;
class wT extends qn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ne
    }
    onPointerDown(l) {
        this.session = new mg(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: dg(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: u, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: Ap(l),
            onStart: Ap(u),
            onMove: o,
            onEnd: (d, h) => {
                delete this.session,
                c && Ot.postRender( () => c(d, h))
            }
        }
    }
    mount() {
        this.removePointerDownListener = cl(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Qs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Ep(i, l) {
    return l.max === l.min ? 0 : i / (l.max - l.min) * 100
}
const sl = {
    correct: (i, l) => {
        if (!l.target)
            return i;
        if (typeof i == "string")
            if (tt.test(i))
                i = parseFloat(i);
            else
                return i;
        const u = Ep(i, l.target.x)
          , o = Ep(i, l.target.y);
        return `${u}% ${o}%`
    }
}
  , LT = {
    correct: (i, {treeScale: l, projectionDelta: u}) => {
        const o = i
          , c = Hn.parse(i);
        if (c.length > 5)
            return o;
        const d = Hn.createTransformer(i)
          , h = typeof c[0] != "number" ? 1 : 0
          , m = u.x.scale * l.x
          , g = u.y.scale * l.y;
        c[0 + h] /= m,
        c[1 + h] /= g;
        const p = Rt(m, g, .5);
        return typeof c[2 + h] == "number" && (c[2 + h] /= p),
        typeof c[3 + h] == "number" && (c[3 + h] /= p),
        d(c)
    }
};
class HT extends et.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: u, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: d} = l;
        AS(qT),
        d && (u.group && u.group.add(d),
        o && o.register && c && o.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        d.setOptions({
            ...d.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Qs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: u, visualElement: o, drag: c, isPresent: d} = this.props
          , {projection: h} = o;
        return h && (h.isPresent = d,
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(),
        l.isPresent !== d && (d ? h.promote() : h.relegate() || Ot.postRender( () => {
            const m = h.getStack();
            (!m || !m.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        xc.postRender( () => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: l, layoutGroup: u, switchLayoutGroup: o} = this.props
          , {projection: c} = l;
        c && (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        o && o.deregister && o.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: l} = this.props;
        l && l()
    }
    render() {
        return null
    }
}
function yg(i) {
    const [l,u] = sS()
      , o = et.useContext($p);
    return U.jsx(HT, {
        ...i,
        layoutGroup: o,
        switchLayoutGroup: et.useContext(ky),
        isPresent: l,
        safeToRemove: u
    })
}
const qT = {
    borderRadius: {
        ...sl,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: sl,
    borderTopRightRadius: sl,
    borderBottomLeftRadius: sl,
    borderBottomRightRadius: sl,
    boxShadow: LT
};
function YT(i, l, u) {
    const o = ee(i) ? i : ni(i);
    return o.start(Nc("", o, l, u)),
    o.animation
}
const GT = (i, l) => i.depth - l.depth;
class XT {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        ac(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        ic(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(GT),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function ZT(i, l) {
    const u = ce.now()
      , o = ({timestamp: c}) => {
        const d = c - u;
        d >= l && (Ln(o),
        i(d - l))
    }
    ;
    return Ot.setup(o, !0),
    () => Ln(o)
}
const gg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , QT = gg.length
  , Mp = i => typeof i == "string" ? parseFloat(i) : i
  , Dp = i => typeof i == "number" || tt.test(i);
function KT(i, l, u, o, c, d) {
    c ? (i.opacity = Rt(0, u.opacity ?? 1, JT(o)),
    i.opacityExit = Rt(l.opacity ?? 1, 0, kT(o))) : d && (i.opacity = Rt(l.opacity ?? 1, u.opacity ?? 1, o));
    for (let h = 0; h < QT; h++) {
        const m = `border${gg[h]}Radius`;
        let g = Rp(l, m)
          , p = Rp(u, m);
        if (g === void 0 && p === void 0)
            continue;
        g || (g = 0),
        p || (p = 0),
        g === 0 || p === 0 || Dp(g) === Dp(p) ? (i[m] = Math.max(Rt(Mp(g), Mp(p), o), 0),
        (Ke.test(p) || Ke.test(g)) && (i[m] += "%")) : i[m] = p
    }
    (l.rotate || u.rotate) && (i.rotate = Rt(l.rotate || 0, u.rotate || 0, o))
}
function Rp(i, l) {
    return i[l] !== void 0 ? i[l] : i.borderRadius
}
const JT = vg(0, .5, ry)
  , kT = vg(.5, .95, Ne);
function vg(i, l, u) {
    return o => o < i ? 0 : o > l ? 1 : u(dl(i, l, o))
}
function Op(i, l) {
    i.min = l.min,
    i.max = l.max
}
function Ce(i, l) {
    Op(i.x, l.x),
    Op(i.y, l.y)
}
function Vp(i, l) {
    i.translate = l.translate,
    i.scale = l.scale,
    i.originPoint = l.originPoint,
    i.origin = l.origin
}
function Cp(i, l, u, o, c) {
    return i -= l,
    i = Fs(i, 1 / u, o),
    c !== void 0 && (i = Fs(i, 1 / c, o)),
    i
}
function PT(i, l=0, u=1, o=.5, c, d=i, h=i) {
    if (Ke.test(l) && (l = parseFloat(l),
    l = Rt(h.min, h.max, l / 100) - h.min),
    typeof l != "number")
        return;
    let m = Rt(d.min, d.max, o);
    i === d && (m -= l),
    i.min = Cp(i.min, l, u, m, c),
    i.max = Cp(i.max, l, u, m, c)
}
function zp(i, l, [u,o,c], d, h) {
    PT(i, l[u], l[o], l[c], l.scale, d, h)
}
const FT = ["x", "scaleX", "originX"]
  , WT = ["y", "scaleY", "originY"];
function Np(i, l, u, o) {
    zp(i.x, l, FT, u ? u.x : void 0, o ? o.x : void 0),
    zp(i.y, l, WT, u ? u.y : void 0, o ? o.y : void 0)
}
function _p(i) {
    return i.translate === 0 && i.scale === 1
}
function bg(i) {
    return _p(i.x) && _p(i.y)
}
function Up(i, l) {
    return i.min === l.min && i.max === l.max
}
function $T(i, l) {
    return Up(i.x, l.x) && Up(i.y, l.y)
}
function jp(i, l) {
    return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max)
}
function Sg(i, l) {
    return jp(i.x, l.x) && jp(i.y, l.y)
}
function Bp(i) {
    return ie(i.x) / ie(i.y)
}
function wp(i, l) {
    return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint
}
class IT {
    constructor() {
        this.members = []
    }
    add(l) {
        ac(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (ic(this.members, l),
        l === this.prevLead && (this.prevLead = void 0),
        l === this.lead) {
            const u = this.members[this.members.length - 1];
            u && this.promote(u)
        }
    }
    relegate(l) {
        const u = this.members.findIndex(c => l === c);
        if (u === 0)
            return !1;
        let o;
        for (let c = u; c >= 0; c--) {
            const d = this.members[c];
            if (d.isPresent !== !1) {
                o = d;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(l, u) {
        const o = this.lead;
        if (l !== o && (this.prevLead = o,
        this.lead = l,
        l.show(),
        o)) {
            o.instance && o.scheduleRender(),
            l.scheduleRender(),
            l.resumeFrom = o,
            u && (l.resumeFrom.preserveOpacity = !0),
            o.snapshot && (l.snapshot = o.snapshot,
            l.snapshot.latestValues = o.animationValues || o.latestValues),
            l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
            const {crossfade: c} = l.options;
            c === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            const {options: u, resumingFrom: o} = l;
            u.onExitComplete && u.onExitComplete(),
            o && o.options.onExitComplete && o.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(l => {
            l.instance && l.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function tx(i, l, u) {
    let o = "";
    const c = i.x.translate / l.x
      , d = i.y.translate / l.y
      , h = (u == null ? void 0 : u.z) || 0;
    if ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u) {
        const {transformPerspective: p, rotate: v, rotateX: S, rotateY: E, skewX: V, skewY: w} = u;
        p && (o = `perspective(${p}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        S && (o += `rotateX(${S}deg) `),
        E && (o += `rotateY(${E}deg) `),
        V && (o += `skewX(${V}deg) `),
        w && (o += `skewY(${w}deg) `)
    }
    const m = i.x.scale * l.x
      , g = i.y.scale * l.y;
    return (m !== 1 || g !== 1) && (o += `scale(${m}, ${g})`),
    o || "none"
}
const Cr = ["", "X", "Y", "Z"]
  , ex = {
    visibility: "hidden"
}
  , nx = 1e3;
let ax = 0;
function zr(i, l, u, o) {
    const {latestValues: c} = l;
    c[i] && (u[i] = c[i],
    l.setStaticValue(i, 0),
    o && (o[i] = 0))
}
function Tg(i) {
    if (i.hasCheckedOptimisedAppear = !0,
    i.root === i)
        return;
    const {visualElement: l} = i.options;
    if (!l)
        return;
    const u = ag(l);
    if (window.MotionHasOptimisedAnimation(u, "transform")) {
        const {layout: c, layoutId: d} = i.options;
        window.MotionCancelOptimisedAnimation(u, "transform", Ot, !(c || d))
    }
    const {parent: o} = i;
    o && !o.hasCheckedOptimisedAppear && Tg(o)
}
function xg({attachResizeListener: i, defaultParent: l, measureScroll: u, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(h={}, m=l == null ? void 0 : l()) {
            this.id = ax++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(sx),
                this.nodes.forEach(fx),
                this.nodes.forEach(hx),
                this.nodes.forEach(ux)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = h,
            this.root = m ? m.root || m : this,
            this.path = m ? [...m.path, m] : [],
            this.parent = m,
            this.depth = m ? m.depth + 1 : 0;
            for (let g = 0; g < this.path.length; g++)
                this.path[g].shouldResetTransform = !0;
            this.root === this && (this.nodes = new XT)
        }
        addEventListener(h, m) {
            return this.eventHandlers.has(h) || this.eventHandlers.set(h, new uc),
            this.eventHandlers.get(h).add(m)
        }
        notifyListeners(h, ...m) {
            const g = this.eventHandlers.get(h);
            g && g.notify(...m)
        }
        hasListeners(h) {
            return this.eventHandlers.has(h)
        }
        mount(h) {
            if (this.instance)
                return;
            this.isSVG = Gy(h) && !aS(h),
            this.instance = h;
            const {layoutId: m, layout: g, visualElement: p} = this.options;
            if (p && !p.current && p.mount(h),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
            i) {
                let v;
                const S = () => this.root.updateBlockedByResize = !1;
                i(h, () => {
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = ZT(S, 250),
                    Qs.hasAnimatedSinceResize && (Qs.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Hp))
                }
                )
            }
            m && this.root.registerSharedNode(m, this),
            this.options.animate !== !1 && p && (m || g) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: S, hasRelativeLayoutChanged: E, layout: V}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || p.getDefaultTransition() || gx
                  , {onLayoutAnimationStart: L, onLayoutAnimationComplete: Y} = p.getProps()
                  , G = !this.targetLayout || !Sg(this.targetLayout, V)
                  , k = !S && E;
                if (this.options.layoutRoot || this.resumeFrom || k || S && (G || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const H = {
                        ...Sc(w, "layout"),
                        onPlay: L,
                        onComplete: Y
                    };
                    (p.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0,
                    H.type = !1),
                    this.startAnimation(H),
                    this.setAnimationOrigin(v, k)
                } else
                    S || Hp(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = V
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const h = this.getStack();
            h && h.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Ln(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(dx),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: h} = this.options;
            return h && h.getProps().transformTemplate
        }
        willUpdate(h=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tg(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const S = this.path[v];
                S.shouldResetTransform = !0,
                S.updateScroll("snapshot"),
                S.options.layoutRoot && S.willUpdate(!1)
            }
            const {layoutId: m, layout: g} = this.options;
            if (m === void 0 && !g)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            h && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Lp);
                return
            }
            this.isUpdating || this.nodes.forEach(rx),
            this.isUpdating = !1,
            this.nodes.forEach(cx),
            this.nodes.forEach(ix),
            this.nodes.forEach(lx),
            this.clearAllSnapshots();
            const m = ce.now();
            Pt.delta = cn(0, 1e3 / 60, m - Pt.timestamp),
            Pt.timestamp = m,
            Pt.isProcessing = !0,
            xr.update.process(Pt),
            xr.preRender.process(Pt),
            xr.render.process(Pt),
            Pt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            xc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(ox),
            this.sharedNodes.forEach(mx)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ot.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ot.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !ie(this.snapshot.measuredBox.x) && !ie(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let g = 0; g < this.path.length; g++)
                    this.path[g].updateScroll();
            const h = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ut(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: m} = this.options;
            m && m.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0)
        }
        updateScroll(h="measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (m = !1),
            m && this.instance) {
                const g = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: h,
                    isRoot: g,
                    offset: u(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : g
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , m = this.projectionDelta && !bg(this.projectionDelta)
              , g = this.getTransformTemplate()
              , p = g ? g(this.latestValues, "") : void 0
              , v = p !== this.prevTransformTemplateValue;
            h && this.instance && (m || sa(this.latestValues) || v) && (c(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(h=!0) {
            const m = this.measurePageBox();
            let g = this.removeElementScroll(m);
            return h && (g = this.removeTransform(g)),
            vx(g),
            {
                animationId: this.root.animationId,
                measuredBox: m,
                layoutBox: g,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var p;
            const {visualElement: h} = this.options;
            if (!h)
                return Ut();
            const m = h.measureViewportBox();
            if (!(((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(bx))) {
                const {scroll: v} = this.root;
                v && (ti(m.x, v.offset.x),
                ti(m.y, v.offset.y))
            }
            return m
        }
        removeElementScroll(h) {
            var g;
            const m = Ut();
            if (Ce(m, h),
            (g = this.scroll) != null && g.wasRoot)
                return m;
            for (let p = 0; p < this.path.length; p++) {
                const v = this.path[p]
                  , {scroll: S, options: E} = v;
                v !== this.root && S && E.layoutScroll && (S.wasRoot && Ce(m, h),
                ti(m.x, S.offset.x),
                ti(m.y, S.offset.y))
            }
            return m
        }
        applyTransform(h, m=!1) {
            const g = Ut();
            Ce(g, h);
            for (let p = 0; p < this.path.length; p++) {
                const v = this.path[p];
                !m && v.options.layoutScroll && v.scroll && v !== v.root && ei(g, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                sa(v.latestValues) && ei(g, v.latestValues)
            }
            return sa(this.latestValues) && ei(g, this.latestValues),
            g
        }
        removeTransform(h) {
            const m = Ut();
            Ce(m, h);
            for (let g = 0; g < this.path.length; g++) {
                const p = this.path[g];
                if (!p.instance || !sa(p.latestValues))
                    continue;
                Pr(p.latestValues) && p.updateSnapshot();
                const v = Ut()
                  , S = p.measurePageBox();
                Ce(v, S),
                Np(m, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v)
            }
            return sa(this.latestValues) && Np(m, this.latestValues),
            m
        }
        setTargetDelta(h) {
            this.targetDelta = h,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(h) {
            this.options = {
                ...this.options,
                ...h,
                crossfade: h.crossfade !== void 0 ? h.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(h=!1) {
            var E;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== m;
            if (!(h || g && this.isSharedProjectionDirty || this.isProjectionDirty || (E = this.parent) != null && E.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: S} = this.options;
            if (!(!this.layout || !(v || S))) {
                if (this.resolvedRelativeTargetAt = Pt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const V = this.getClosestProjectingParent();
                    V && V.layout && this.animationProgress !== 1 ? (this.relativeParent = V,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ut(),
                    this.relativeTargetOrigin = Ut(),
                    hl(this.relativeTargetOrigin, this.layout.layoutBox, V.layout.layoutBox),
                    Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ut(),
                this.targetWithTransforms = Ut()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                TT(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ce(this.target, this.layout.layoutBox),
                fg(this.target, this.targetDelta)) : Ce(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const V = this.getClosestProjectingParent();
                    V && !!V.resumingFrom == !!this.resumingFrom && !V.options.layoutScroll && V.target && this.animationProgress !== 1 ? (this.relativeParent = V,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ut(),
                    this.relativeTargetOrigin = Ut(),
                    hl(this.relativeTargetOrigin, this.target, V.target),
                    Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pr(this.parent.latestValues) || cg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var w;
            const h = this.getLead()
              , m = !!this.resumingFrom || this !== h;
            let g = !0;
            if ((this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty) && (g = !1),
            m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
            this.resolvedRelativeTargetAt === Pt.timestamp && (g = !1),
            g)
                return;
            const {layout: p, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(p || v))
                return;
            Ce(this.layoutCorrected, this.layout.layoutBox);
            const S = this.treeScale.x
              , E = this.treeScale.y;
            xT(this.layoutCorrected, this.treeScale, this.path, m),
            h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox,
            h.targetWithTransforms = Ut());
            const {target: V} = h;
            if (!V) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Vp(this.prevProjectionDelta.x, this.projectionDelta.x),
            Vp(this.prevProjectionDelta.y, this.projectionDelta.y)),
            fl(this.projectionDelta, this.layoutCorrected, V, this.latestValues),
            (this.treeScale.x !== S || this.treeScale.y !== E || !wp(this.projectionDelta.x, this.prevProjectionDelta.x) || !wp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", V))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(h=!0) {
            var m;
            if ((m = this.options.visualElement) == null || m.scheduleRender(),
            h) {
                const g = this.getStack();
                g && g.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ia(),
            this.projectionDelta = Ia(),
            this.projectionDeltaWithTransform = Ia()
        }
        setAnimationOrigin(h, m=!1) {
            const g = this.snapshot
              , p = g ? g.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , S = Ia();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !m;
            const E = Ut()
              , V = g ? g.source : void 0
              , w = this.layout ? this.layout.source : void 0
              , L = V !== w
              , Y = this.getStack()
              , G = !Y || Y.members.length <= 1
              , k = !!(L && !G && this.options.crossfade === !0 && !this.path.some(yx));
            this.animationProgress = 0;
            let H;
            this.mixTargetDelta = it => {
                const q = it / 1e3;
                qp(S.x, h.x, q),
                qp(S.y, h.y, q),
                this.setTargetDelta(S),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (hl(E, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                px(this.relativeTarget, this.relativeTargetOrigin, E, q),
                H && $T(this.relativeTarget, H) && (this.isProjectionDirty = !1),
                H || (H = Ut()),
                Ce(H, this.relativeTarget)),
                L && (this.animationValues = v,
                KT(v, p, this.latestValues, q, k, G)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = q
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(h) {
            var m, g, p;
            this.notifyListeners("animationStart"),
            (m = this.currentAnimation) == null || m.stop(),
            (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || p.stop(),
            this.pendingAnimation && (Ln(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ot.update( () => {
                Qs.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = ni(0)),
                this.currentAnimation = YT(this.motionValue, [0, 1e3], {
                    ...h,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        h.onUpdate && h.onUpdate(v)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        h.onComplete && h.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const h = this.getStack();
            h && h.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nx),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const h = this.getLead();
            let {targetWithTransforms: m, target: g, layout: p, latestValues: v} = h;
            if (!(!m || !g || !p)) {
                if (this !== h && this.layout && p && Ag(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    g = this.target || Ut();
                    const S = ie(this.layout.layoutBox.x);
                    g.x.min = h.target.x.min,
                    g.x.max = g.x.min + S;
                    const E = ie(this.layout.layoutBox.y);
                    g.y.min = h.target.y.min,
                    g.y.max = g.y.min + E
                }
                Ce(m, g),
                ei(m, v),
                fl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v)
            }
        }
        registerSharedNode(h, m) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new IT),
            this.sharedNodes.get(h).add(m);
            const p = m.options.initialPromotionConfig;
            m.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(m) : void 0
            })
        }
        isLead() {
            const h = this.getStack();
            return h ? h.lead === this : !0
        }
        getLead() {
            var m;
            const {layoutId: h} = this.options;
            return h ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this
        }
        getPrevLead() {
            var m;
            const {layoutId: h} = this.options;
            return h ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0
        }
        getStack() {
            const {layoutId: h} = this.options;
            if (h)
                return this.root.sharedNodes.get(h)
        }
        promote({needsReset: h, transition: m, preserveFollowOpacity: g}={}) {
            const p = this.getStack();
            p && p.promote(this, g),
            h && (this.projectionDelta = void 0,
            this.needsReset = !0),
            m && this.setOptions({
                transition: m
            })
        }
        relegate() {
            const h = this.getStack();
            return h ? h.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: h} = this.options;
            if (!h)
                return;
            let m = !1;
            const {latestValues: g} = h;
            if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (m = !0),
            !m)
                return;
            const p = {};
            g.z && zr("z", h, p, this.animationValues);
            for (let v = 0; v < Cr.length; v++)
                zr(`rotate${Cr[v]}`, h, p, this.animationValues),
                zr(`skew${Cr[v]}`, h, p, this.animationValues);
            h.render();
            for (const v in p)
                h.setStaticValue(v, p[v]),
                this.animationValues && (this.animationValues[v] = p[v]);
            h.scheduleRender()
        }
        getProjectionStyles(h) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return ex;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = Zs(h == null ? void 0 : h.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const p = this.getLead();
            if (!this.projectionDelta || !this.layout || !p.target) {
                const V = {};
                return this.options.layoutId && (V.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                V.pointerEvents = Zs(h == null ? void 0 : h.pointerEvents) || ""),
                this.hasProjected && !sa(this.latestValues) && (V.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                V
            }
            const v = p.animationValues || p.latestValues;
            this.applyTransformsToTarget(),
            m.transform = tx(this.projectionDeltaWithTransform, this.treeScale, v),
            g && (m.transform = g(v, m.transform));
            const {x: S, y: E} = this.projectionDelta;
            m.transformOrigin = `${S.origin * 100}% ${E.origin * 100}% 0`,
            p.animationValues ? m.opacity = p === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : m.opacity = p === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const V in gl) {
                if (v[V] === void 0)
                    continue;
                const {correct: w, applyTo: L, isCSSVariable: Y} = gl[V]
                  , G = m.transform === "none" ? v[V] : w(v[V], p);
                if (L) {
                    const k = L.length;
                    for (let H = 0; H < k; H++)
                        m[L[H]] = G
                } else
                    Y ? this.options.visualElement.renderState.vars[V] = G : m[V] = G
            }
            return this.options.layoutId && (m.pointerEvents = p === this ? Zs(h == null ? void 0 : h.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(h => {
                var m;
                return (m = h.currentAnimation) == null ? void 0 : m.stop()
            }
            ),
            this.root.nodes.forEach(Lp),
            this.root.sharedNodes.clear()
        }
    }
}
function ix(i) {
    i.updateLayout()
}
function lx(i) {
    var u;
    const l = ((u = i.resumeFrom) == null ? void 0 : u.snapshot) || i.snapshot;
    if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = i.layout
          , {animationType: d} = i.options
          , h = l.source !== i.layout.source;
        d === "size" ? ze(S => {
            const E = h ? l.measuredBox[S] : l.layoutBox[S]
              , V = ie(E);
            E.min = o[S].min,
            E.max = E.min + V
        }
        ) : Ag(d, l.layoutBox, o) && ze(S => {
            const E = h ? l.measuredBox[S] : l.layoutBox[S]
              , V = ie(o[S]);
            E.max = E.min + V,
            i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0,
            i.relativeTarget[S].max = i.relativeTarget[S].min + V)
        }
        );
        const m = Ia();
        fl(m, o, l.layoutBox);
        const g = Ia();
        h ? fl(g, i.applyTransform(c, !0), l.measuredBox) : fl(g, o, l.layoutBox);
        const p = !bg(m);
        let v = !1;
        if (!i.resumeFrom) {
            const S = i.getClosestProjectingParent();
            if (S && !S.resumeFrom) {
                const {snapshot: E, layout: V} = S;
                if (E && V) {
                    const w = Ut();
                    hl(w, l.layoutBox, E.layoutBox);
                    const L = Ut();
                    hl(L, o, V.layoutBox),
                    Sg(w, L) || (v = !0),
                    S.options.layoutRoot && (i.relativeTarget = L,
                    i.relativeTargetOrigin = w,
                    i.relativeParent = S)
                }
            }
        }
        i.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: g,
            layoutDelta: m,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: v
        })
    } else if (i.isLead()) {
        const {onExitComplete: o} = i.options;
        o && o()
    }
    i.options.transition = void 0
}
function sx(i) {
    i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}
function ux(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}
function ox(i) {
    i.clearSnapshot()
}
function Lp(i) {
    i.clearMeasurements()
}
function rx(i) {
    i.isLayoutDirty = !1
}
function cx(i) {
    const {visualElement: l} = i.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    i.resetTransform()
}
function Hp(i) {
    i.finishAnimation(),
    i.targetDelta = i.relativeTarget = i.target = void 0,
    i.isProjectionDirty = !0
}
function fx(i) {
    i.resolveTargetDelta()
}
function hx(i) {
    i.calcProjection()
}
function dx(i) {
    i.resetSkewAndRotation()
}
function mx(i) {
    i.removeLeadSnapshot()
}
function qp(i, l, u) {
    i.translate = Rt(l.translate, 0, u),
    i.scale = Rt(l.scale, 1, u),
    i.origin = l.origin,
    i.originPoint = l.originPoint
}
function Yp(i, l, u, o) {
    i.min = Rt(l.min, u.min, o),
    i.max = Rt(l.max, u.max, o)
}
function px(i, l, u, o) {
    Yp(i.x, l.x, u.x, o),
    Yp(i.y, l.y, u.y, o)
}
function yx(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0
}
const gx = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Gp = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i)
  , Xp = Gp("applewebkit/") && !Gp("chrome/") ? Math.round : Ne;
function Zp(i) {
    i.min = Xp(i.min),
    i.max = Xp(i.max)
}
function vx(i) {
    Zp(i.x),
    Zp(i.y)
}
function Ag(i, l, u) {
    return i === "position" || i === "preserve-aspect" && !ST(Bp(l), Bp(u), .2)
}
function bx(i) {
    var l;
    return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot)
}
const Sx = xg({
    attachResizeListener: (i, l) => bl(i, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Nr = {
    current: void 0
}
  , Eg = xg({
    measureScroll: i => ({
        x: i.scrollLeft,
        y: i.scrollTop
    }),
    defaultParent: () => {
        if (!Nr.current) {
            const i = new Sx({});
            i.mount(window),
            i.setOptions({
                layoutScroll: !0
            }),
            Nr.current = i
        }
        return Nr.current
    }
    ,
    resetTransform: (i, l) => {
        i.style.transform = l !== void 0 ? l : "none"
    }
    ,
    checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
})
  , Tx = {
    pan: {
        Feature: wT
    },
    drag: {
        Feature: BT,
        ProjectionNode: Eg,
        MeasureLayout: yg
    }
};
function Qp(i, l, u) {
    const {props: o} = i;
    i.animationState && o.whileHover && i.animationState.setActive("whileHover", u === "Start");
    const c = "onHover" + u
      , d = o[c];
    d && Ot.postRender( () => d(l, Al(l)))
}
class xx extends qn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = $b(l, (u, o) => (Qp(this.node, o, "Start"),
        c => Qp(this.node, c, "End"))))
    }
    unmount() {}
}
class Ax extends qn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let l = !1;
        try {
            l = this.node.current.matches(":focus-visible")
        } catch {
            l = !0
        }
        !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Sl(bl(this.node.current, "focus", () => this.onFocus()), bl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Kp(i, l, u) {
    const {props: o} = i;
    if (i.current instanceof HTMLButtonElement && i.current.disabled)
        return;
    i.animationState && o.whileTap && i.animationState.setActive("whileTap", u === "Start");
    const c = "onTap" + (u === "End" ? "" : u)
      , d = o[c];
    d && Ot.postRender( () => d(l, Al(l)))
}
class Ex extends qn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = nS(l, (u, o) => (Kp(this.node, o, "Start"),
        (c, {success: d}) => Kp(this.node, c, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const $r = new WeakMap
  , _r = new WeakMap
  , Mx = i => {
    const l = $r.get(i.target);
    l && l(i)
}
  , Dx = i => {
    i.forEach(Mx)
}
;
function Rx({root: i, ...l}) {
    const u = i || document;
    _r.has(u) || _r.set(u, {});
    const o = _r.get(u)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(Dx,{
        root: i,
        ...l
    })),
    o[c]
}
function Ox(i, l, u) {
    const o = Rx(l);
    return $r.set(i, u),
    o.observe(i),
    () => {
        $r.delete(i),
        o.unobserve(i)
    }
}
const Vx = {
    some: 0,
    all: 1
};
class Cx extends qn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: u, margin: o, amount: c="some", once: d} = l
          , h = {
            root: u ? u.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : Vx[c]
        }
          , m = g => {
            const {isIntersecting: p} = g;
            if (this.isInView === p || (this.isInView = p,
            d && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: v, onViewportLeave: S} = this.node.getProps()
              , E = p ? v : S;
            E && E(g)
        }
        ;
        return Ox(this.node.current, h, m)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: u} = this.node;
        ["amount", "margin", "root"].some(zx(l, u)) && this.startObserver()
    }
    unmount() {}
}
function zx({viewport: i={}}, {viewport: l={}}={}) {
    return u => i[u] !== l[u]
}
const Nx = {
    inView: {
        Feature: Cx
    },
    tap: {
        Feature: Ex
    },
    focus: {
        Feature: Ax
    },
    hover: {
        Feature: xx
    }
}
  , _x = {
    layout: {
        ProjectionNode: Eg,
        MeasureLayout: yg
    }
}
  , Ir = {
    current: null
}
  , Mg = {
    current: !1
};
function Ux() {
    if (Mg.current = !0,
    !!ec)
        if (window.matchMedia) {
            const i = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Ir.current = i.matches;
            i.addListener(l),
            l()
        } else
            Ir.current = !1
}
const jx = new WeakMap;
function Bx(i, l, u) {
    for (const o in l) {
        const c = l[o]
          , d = u[o];
        if (ee(c))
            i.addValue(o, c);
        else if (ee(d))
            i.addValue(o, ni(c, {
                owner: i
            }));
        else if (d !== c)
            if (i.hasValue(o)) {
                const h = i.getValue(o);
                h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c)
            } else {
                const h = i.getStaticValue(o);
                i.addValue(o, ni(h !== void 0 ? h : c, {
                    owner: i
                }))
            }
    }
    for (const o in u)
        l[o] === void 0 && i.removeValue(o);
    return l
}
const Jp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class wx {
    scrapeMotionValuesFromProps(l, u, o) {
        return {}
    }
    constructor({parent: l, props: u, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: d, visualState: h}, m={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = bc,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const E = ce.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E,
            Ot.render(this.render, !1, !0))
        }
        ;
        const {latestValues: g, renderState: p} = h;
        this.latestValues = g,
        this.baseTarget = {
            ...g
        },
        this.initialValues = u.initial ? {
            ...g
        } : {},
        this.renderState = p,
        this.parent = l,
        this.props = u,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = m,
        this.blockInitialAnimation = !!d,
        this.isControllingVariants = Is(u),
        this.isVariantNode = Ky(u),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: v, ...S} = this.scrapeMotionValuesFromProps(u, {}, this);
        for (const E in S) {
            const V = S[E];
            g[E] !== void 0 && ee(V) && V.set(g[E], !1)
        }
    }
    mount(l) {
        this.current = l,
        jx.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (u, o) => this.bindToMotionValue(o, u)),
        Mg.current || Ux(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ir.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Ln(this.notifyUpdate),
        Ln(this.render),
        this.valueSubscriptions.forEach(l => l()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const l in this.events)
            this.events[l].clear();
        for (const l in this.features) {
            const u = this.features[l];
            u && (u.unmount(),
            u.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(l, u) {
        this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
        const o = si.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = u.on("change", m => {
            this.latestValues[l] = m,
            this.props.onUpdate && Ot.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , d = u.on("renderRequest", this.scheduleRender);
        let h;
        window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, u)),
        this.valueSubscriptions.set(l, () => {
            c(),
            d(),
            h && h(),
            u.owner && u.stop()
        }
        )
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in ai) {
            const u = ai[l];
            if (!u)
                continue;
            const {isEnabled: o, Feature: c} = u;
            if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)),
            this.features[l]) {
                const d = this.features[l];
                d.isMounted ? d.update() : (d.mount(),
                d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ut()
    }
    getStaticValue(l) {
        return this.latestValues[l]
    }
    setStaticValue(l, u) {
        this.latestValues[l] = u
    }
    update(l, u) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = l,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = u;
        for (let o = 0; o < Jp.length; o++) {
            const c = Jp[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const d = "on" + c
              , h = l[d];
            h && (this.propEventSubscriptions[c] = this.on(c, h))
        }
        this.prevMotionValues = Bx(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(l) {
        return this.props.variants ? this.props.variants[l] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(l) {
        const u = this.getClosestVariantNode();
        if (u)
            return u.variantChildren && u.variantChildren.add(l),
            () => u.variantChildren.delete(l)
    }
    addValue(l, u) {
        const o = this.values.get(l);
        u !== o && (o && this.removeValue(l),
        this.bindToMotionValue(l, u),
        this.values.set(l, u),
        this.latestValues[l] = u.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const u = this.valueSubscriptions.get(l);
        u && (u(),
        this.valueSubscriptions.delete(l)),
        delete this.latestValues[l],
        this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, u) {
        if (this.props.values && this.props.values[l])
            return this.props.values[l];
        let o = this.values.get(l);
        return o === void 0 && u !== void 0 && (o = ni(u === null ? void 0 : u, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, u) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Ip(o) || ey(o)) ? o = parseFloat(o) : !lS(o) && Hn.test(u) && (o = wy(l, u)),
        this.setBaseTarget(l, ee(o) ? o.get() : o)),
        ee(o) ? o.get() : o
    }
    setBaseTarget(l, u) {
        this.baseTarget[l] = u
    }
    getBaseTarget(l) {
        var d;
        const {initial: u} = this.props;
        let o;
        if (typeof u == "string" || typeof u == "object") {
            const h = Cc(this.props, u, (d = this.presenceContext) == null ? void 0 : d.custom);
            h && (o = h[l])
        }
        if (u && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !ee(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, u) {
        return this.events[l] || (this.events[l] = new uc),
        this.events[l].add(u)
    }
    notify(l, ...u) {
        this.events[l] && this.events[l].notify(...u)
    }
}
class Dg extends wx {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Jb
    }
    sortInstanceNodePosition(l, u) {
        return l.compareDocumentPosition(u) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, u) {
        return l.style ? l.style[u] : void 0
    }
    removeValueFromRenderState(l, {vars: u, style: o}) {
        delete u[l],
        delete o[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: l} = this.props;
        ee(l) && (this.childSubscription = l.on("change", u => {
            this.current && (this.current.textContent = `${u}`)
        }
        ))
    }
}
function Rg(i, {style: l, vars: u}, o, c) {
    Object.assign(i.style, l, c && c.getProjectionStyles(o));
    for (const d in u)
        i.style.setProperty(d, u[d])
}
function Lx(i) {
    return window.getComputedStyle(i)
}
class Hx extends Dg {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Rg
    }
    readValueFromInstance(l, u) {
        var o;
        if (si.has(u))
            return (o = this.projection) != null && o.isProjecting ? qr(u) : hb(l, u);
        {
            const c = Lx(l)
              , d = (cc(u) ? c.getPropertyValue(u) : c[u]) || 0;
            return typeof d == "string" ? d.trim() : d
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: u}) {
        return hg(l, u)
    }
    build(l, u, o) {
        Rc(l, u, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, u, o) {
        return zc(l, u, o)
    }
}
const Og = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function qx(i, l, u, o) {
    Rg(i, l, void 0, o);
    for (const c in l.attrs)
        i.setAttribute(Og.has(c) ? c : Dc(c), l.attrs[c])
}
class Yx extends Dg {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ut
    }
    getBaseTargetFromProps(l, u) {
        return l[u]
    }
    readValueFromInstance(l, u) {
        if (si.has(u)) {
            const o = By(u);
            return o && o.default || 0
        }
        return u = Og.has(u) ? u : Dc(u),
        l.getAttribute(u)
    }
    scrapeMotionValuesFromProps(l, u, o) {
        return ng(l, u, o)
    }
    build(l, u, o) {
        $y(l, u, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, u, o, c) {
        qx(l, u, o, c)
    }
    mount(l) {
        this.isSVGTag = tg(l.tagName),
        super.mount(l)
    }
}
const Gx = (i, l) => Vc(i) ? new Yx(l) : new Hx(l,{
    allowProjection: i !== et.Fragment
})
  , Xx = qS({
    ...hT,
    ...Nx,
    ...Tx,
    ..._x
}, Gx)
  , ae = fS(Xx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Qx = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, o) => o ? o.toUpperCase() : u.toLowerCase())
  , kp = i => {
    const l = Qx(i);
    return l.charAt(0).toUpperCase() + l.slice(1)
}
  , Vg = (...i) => i.filter( (l, u, o) => !!l && l.trim() !== "" && o.indexOf(l) === u).join(" ").trim()
  , Kx = i => {
    for (const l in i)
        if (l.startsWith("aria-") || l === "role" || l === "title")
            return !0
}
;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = et.forwardRef( ({color: i="currentColor", size: l=24, strokeWidth: u=2, absoluteStrokeWidth: o, className: c="", children: d, iconNode: h, ...m}, g) => et.createElement("svg", {
    ref: g,
    ...Jx,
    width: l,
    height: l,
    stroke: i,
    strokeWidth: o ? Number(u) * 24 / Number(l) : u,
    className: Vg("lucide", c),
    ...!d && !Kx(m) && {
        "aria-hidden": "true"
    },
    ...m
}, [...h.map( ([p,v]) => et.createElement(p, v)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = (i, l) => {
    const u = et.forwardRef( ({className: o, ...c}, d) => et.createElement(kx, {
        ref: d,
        iconNode: l,
        className: Vg(`lucide-${Zx(kp(i))}`, `lucide-${i}`, o),
        ...c
    }));
    return u.displayName = kp(i),
    u
}
;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , Pp = fa("briefcase", Px);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]
  , Wx = fa("code", Fx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]
  , Ix = fa("house", $x);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , e2 = fa("mail", t2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]
  , Fp = fa("message-circle", n2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , i2 = fa("phone", a2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]
  , Wp = fa("user", l2)
  , s2 = "/assets/leticia_avatar_dark-DWc0PmQR.png";
function u2() {
    const [i,l] = et.useState("home")
      , u = c => {
        l(c);
        const d = document.getElementById(c);
        d && d.scrollIntoView({
            behavior: "smooth"
        })
    }
      , o = [{
        id: 1,
        name: "EcoTrack - Monitoramento de Resíduos",
        description: "Aplicativo móvel e plataforma web para gestão e monitoramento de resíduos sólidos. Permite registrar tipos e quantidades de lixo, receber dicas de reciclagem e encontrar pontos de coleta próximos.",
        technologies: ["React", "Node.js", "MongoDB", "Geolocalização"],
        participants: ["Leticia de Brito Ferreira (UI/UX, Frontend)", "João Silva (Backend)", "Maria Oliveira (Banco de Dados)"],
        learned: "Design de interface intuitiva, integração de APIs de geolocalização e desenvolvimento de banco de dados para armazenamento de informações de resíduos."
    }, {
        id: 2,
        name: "SafePet - Plataforma de Adoção de Animais",
        description: "Plataforma online que conecta abrigos de animais e protetores independentes a pessoas interessadas em adoção responsável. Inclui perfis detalhados para animais, filtros de busca avançados e sistema de comunicação.",
        technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
        participants: ["Leticia de Brito Ferreira (UI/UX, Gerenciamento de Conteúdo)", "Pedro Santos (Fullstack)"],
        learned: "Design responsivo, gerenciamento de conteúdo e experiência do usuário em plataformas de grande volume de dados."
    }, {
        id: 3,
        name: "FitFlow - Gerenciador de Treinos Personalizados",
        description: "Aplicativo web que oferece planos de treino personalizados e acompanhamento de progresso. Inclui criação de rotinas, registro de atividades, monitoramento de calorias e gráficos interativos.",
        technologies: ["React", "Chart.js", "Firebase", "PWA"],
        participants: ["Leticia de Brito Ferreira (UI/UX, Visualização de Dados)", "Ana Costa (Frontend)", "Carlos Mendes (Backend)"],
        learned: "Visualização de dados, lógica de personalização de conteúdo e otimização de performance para aplicações web complexas."
    }];
    return U.jsxs("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [U.jsx("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border",
            children: U.jsx("div", {
                className: "container mx-auto px-6 py-4",
                children: U.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [U.jsx(ae.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "text-xl font-bold text-primary",
                        children: "Leticia Ferreira"
                    }), U.jsx("div", {
                        className: "hidden md:flex space-x-8",
                        children: [{
                            id: "home",
                            label: "Home",
                            icon: Ix
                        }, {
                            id: "about",
                            label: "Sobre",
                            icon: Wp
                        }, {
                            id: "projects",
                            label: "Projetos",
                            icon: Pp
                        }, {
                            id: "contact",
                            label: "Contato",
                            icon: e2
                        }].map( ({id: c, label: d, icon: h}) => U.jsxs("button", {
                            onClick: () => u(c),
                            className: `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${i === c ? "bg-primary text-primary-foreground" : ""}`,
                            children: [U.jsx(h, {
                                size: 16
                            }), U.jsx("span", {
                                children: d
                            })]
                        }, c))
                    })]
                })
            })
        }), U.jsx("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center pt-20",
            children: U.jsx("div", {
                className: "container mx-auto px-6",
                children: U.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [U.jsxs(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        children: [U.jsxs("h1", {
                            className: "text-5xl md:text-6xl font-bold mb-6",
                            children: ["Olá, eu sou", U.jsx("span", {
                                className: "text-primary block",
                                children: "Leticia de Brito Ferreira"
                            })]
                        }), U.jsx("p", {
                            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
                            children: "Tenho 17 anos e estou cursando o Ensino Médio técnico em Análise e Desenvolvimento de Sistemas no Colégio Estadual Professor Julio Szymanki. Apaixonada por tecnologia e design, pretendo me formar e trabalhar na área de tecnologia."
                        }), U.jsxs("div", {
                            className: "bg-card p-6 rounded-lg border border-border mb-8",
                            children: [U.jsx("h3", {
                                className: "text-lg font-semibold text-primary mb-3",
                                children: "Experiência Profissional"
                            }), U.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Já atuei na área financeira, emitindo boletos, notas fiscais e desenvolvendo orçamentos, o que me proporcionou experiência valiosa em organização e atenção aos detalhes."
                            })]
                        }), U.jsx(ae.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            onClick: () => u("about"),
                            className: "bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors",
                            children: "Saiba Mais"
                        })]
                    }), U.jsx(ae.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        className: "flex justify-center",
                        children: U.jsxs("div", {
                            className: "relative",
                            children: [U.jsx("div", {
                                className: "absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                            }), U.jsx("img", {
                                src: s2,
                                alt: "Leticia de Brito Ferreira",
                                className: "relative w-80 h-80 rounded-full object-cover border-4 border-primary/30"
                            })]
                        })
                    })]
                })
            })
        }), U.jsx("section", {
            id: "about",
            className: "py-20 bg-card/30",
            children: U.jsxs("div", {
                className: "container mx-auto px-6",
                children: [U.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [U.jsx("h2", {
                        className: "text-4xl font-bold mb-4",
                        children: "Sobre Mim"
                    }), U.jsx("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Conheça mais sobre minha paixão pela tecnologia"
                    })]
                }), U.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [U.jsxs(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-card p-8 rounded-lg border border-border",
                        children: [U.jsx("div", {
                            className: "w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6",
                            children: U.jsx(Wx, {
                                className: "w-8 h-8 text-primary"
                            })
                        }), U.jsx("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Área de Interesse"
                        }), U.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Gosto mais da área de design, onde posso usar minha imaginação para criar algo bem elaborado e visualmente atrativo."
                        })]
                    }), U.jsxs(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-card p-8 rounded-lg border border-border",
                        children: [U.jsx("div", {
                            className: "w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6",
                            children: U.jsx(Wp, {
                                className: "w-8 h-8 text-primary"
                            })
                        }), U.jsx("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Pontos Fortes"
                        }), U.jsxs("ul", {
                            className: "text-muted-foreground space-y-2",
                            children: [U.jsx("li", {
                                children: "• Boa imaginação"
                            }), U.jsx("li", {
                                children: "• Criatividade"
                            }), U.jsx("li", {
                                children: "• Bom gosto estético"
                            }), U.jsx("li", {
                                children: "• Atenção aos detalhes"
                            })]
                        })]
                    }), U.jsxs(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-card p-8 rounded-lg border border-border",
                        children: [U.jsx("div", {
                            className: "w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6",
                            children: U.jsx(Pp, {
                                className: "w-8 h-8 text-primary"
                            })
                        }), U.jsx("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Tecnologias"
                        }), U.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Domino o uso de computadores e dispositivos móveis, com foco em design e desenvolvimento de interfaces."
                        })]
                    })]
                })]
            })
        }), U.jsx("section", {
            id: "projects",
            className: "py-20",
            children: U.jsxs("div", {
                className: "container mx-auto px-6",
                children: [U.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [U.jsx("h2", {
                        className: "text-4xl font-bold mb-4",
                        children: "Meus Projetos"
                    }), U.jsx("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Alguns dos projetos que desenvolvi"
                    })]
                }), U.jsx("div", {
                    className: "grid gap-8",
                    children: o.map( (c, d) => U.jsx(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: d * .1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300",
                        children: U.jsxs("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: [U.jsxs("div", {
                                className: "md:col-span-2",
                                children: [U.jsx("h3", {
                                    className: "text-2xl font-bold mb-4 text-primary",
                                    children: c.name
                                }), U.jsx("p", {
                                    className: "text-muted-foreground mb-6 leading-relaxed",
                                    children: c.description
                                }), U.jsxs("div", {
                                    className: "mb-4",
                                    children: [U.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: "O que aprendi:"
                                    }), U.jsx("p", {
                                        className: "text-muted-foreground text-sm",
                                        children: c.learned
                                    })]
                                }), U.jsxs("div", {
                                    className: "mb-4",
                                    children: [U.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: "Participantes:"
                                    }), U.jsx("ul", {
                                        className: "text-muted-foreground text-sm space-y-1",
                                        children: c.participants.map( (h, m) => U.jsxs("li", {
                                            children: ["• ", h]
                                        }, m))
                                    })]
                                })]
                            }), U.jsxs("div", {
                                children: [U.jsx("h4", {
                                    className: "font-semibold mb-3",
                                    children: "Tecnologias:"
                                }), U.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: c.technologies.map( (h, m) => U.jsx("span", {
                                        className: "px-3 py-1 bg-primary/20 text-primary rounded-full text-sm",
                                        children: h
                                    }, m))
                                })]
                            })]
                        })
                    }, c.id))
                })]
            })
        }), U.jsx("section", {
            id: "contact",
            className: "py-20 bg-card/30",
            children: U.jsxs("div", {
                className: "container mx-auto px-6",
                children: [U.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [U.jsx("h2", {
                        className: "text-4xl font-bold mb-4",
                        children: "Entre em Contato"
                    }), U.jsx("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Vamos conversar sobre oportunidades"
                    })]
                }), U.jsxs("div", {
                    className: "max-w-2xl mx-auto",
                    children: [U.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: [U.jsx(ae.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8
                            },
                            viewport: {
                                once: !0
                            },
                            className: "bg-card p-8 rounded-lg border border-border",
                            children: U.jsxs("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: [U.jsx("div", {
                                    className: "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center",
                                    children: U.jsx(i2, {
                                        className: "w-6 h-6 text-primary"
                                    })
                                }), U.jsxs("div", {
                                    children: [U.jsx("h3", {
                                        className: "font-semibold",
                                        children: "Telefone"
                                    }), U.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "(41) 99695-8314"
                                    })]
                                })]
                            })
                        }), U.jsx(ae.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8
                            },
                            viewport: {
                                once: !0
                            },
                            className: "bg-card p-8 rounded-lg border border-border",
                            children: U.jsxs("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: [U.jsx("div", {
                                    className: "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center",
                                    children: U.jsx(Fp, {
                                        className: "w-6 h-6 text-primary"
                                    })
                                }), U.jsxs("div", {
                                    children: [U.jsx("h3", {
                                        className: "font-semibold",
                                        children: "WhatsApp"
                                    }), U.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Mensagem direta"
                                    })]
                                })]
                            })
                        })]
                    }), U.jsx(ae.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-center mt-8",
                        children: U.jsxs(ae.a, {
                            href: "https://wa.me/qr/O7MQYRL752D6J1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            className: "inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors",
                            children: [U.jsx(Fp, {
                                className: "w-5 h-5"
                            }), U.jsx("span", {
                                children: "Conversar no WhatsApp"
                            })]
                        })
                    })]
                })]
            })
        }), U.jsx("footer", {
            className: "py-8 border-t border-border",
            children: U.jsx("div", {
                className: "container mx-auto px-6 text-center",
                children: U.jsx("p", {
                    className: "text-muted-foreground",
                    children: "© 2025 Leticia de Brito Ferreira. Todos os direitos reservados."
                })
            })
        })]
    })
}
u1.createRoot(document.getElementById("root")).render(U.jsx(et.StrictMode, {
    children: U.jsx(u2, {})
}));

