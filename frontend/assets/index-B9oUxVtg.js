function Y2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o &&
            Object.defineProperty(
              e,
              s,
              o.get ? o : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
var Ti =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Vm(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var zm = { exports: {} },
  dl = {},
  Wm = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
  X2 = Symbol.for("react.portal"),
  J2 = Symbol.for("react.fragment"),
  ev = Symbol.for("react.strict_mode"),
  tv = Symbol.for("react.profiler"),
  nv = Symbol.for("react.provider"),
  rv = Symbol.for("react.context"),
  sv = Symbol.for("react.forward_ref"),
  ov = Symbol.for("react.suspense"),
  iv = Symbol.for("react.memo"),
  av = Symbol.for("react.lazy"),
  pp = Symbol.iterator;
function lv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pp && e[pp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Hm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qm = Object.assign,
  Gm = {};
function Ws(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gm),
    (this.updater = n || Hm);
}
Ws.prototype.isReactComponent = {};
Ws.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ws.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Km() {}
Km.prototype = Ws.prototype;
function Ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gm),
    (this.updater = n || Hm);
}
var Pd = (Ad.prototype = new Km());
Pd.constructor = Ad;
qm(Pd, Ws.prototype);
Pd.isPureReactComponent = !0;
var hp = Array.isArray,
  Zm = Object.prototype.hasOwnProperty,
  Md = { current: null },
  Qm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ym(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zm.call(t, r) && !Qm.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: si,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Md.current,
  };
}
function cv(e, t) {
  return {
    $$typeof: si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ld(e) {
  return typeof e == "object" && e !== null && e.$$typeof === si;
}
function uv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mp = /\/+/g;
function hc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uv("" + e.key)
    : t.toString(36);
}
function ra(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case si:
          case X2:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + hc(i, 0) : r),
      hp(s)
        ? ((n = ""),
          e != null && (n = e.replace(mp, "$&/") + "/"),
          ra(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Ld(s) &&
            (s = cv(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(mp, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), hp(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var c = r + hc(o, l);
      i += ra(o, t, n, c, s);
    }
  else if (((c = lv(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (c = r + hc(o, l++)), (i += ra(o, t, n, c, s));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function _i(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    ra(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function dv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ct = { current: null },
  sa = { transition: null },
  fv = {
    ReactCurrentDispatcher: ct,
    ReactCurrentBatchConfig: sa,
    ReactCurrentOwner: Md,
  };
function Xm() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: _i,
  forEach: function (e, t, n) {
    _i(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _i(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _i(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ld(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = Ws;
J.Fragment = J2;
J.Profiler = tv;
J.PureComponent = Ad;
J.StrictMode = ev;
J.Suspense = ov;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fv;
J.act = Xm;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = qm({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Md.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      Zm.call(t, c) &&
        !Qm.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: si, type: e.type, key: s, ref: o, props: r, _owner: i };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: rv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nv, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Ym;
J.createFactory = function (e) {
  var t = Ym.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: sv, render: e };
};
J.isValidElement = Ld;
J.lazy = function (e) {
  return { $$typeof: av, _payload: { _status: -1, _result: e }, _init: dv };
};
J.memo = function (e, t) {
  return { $$typeof: iv, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = sa.transition;
  sa.transition = {};
  try {
    e();
  } finally {
    sa.transition = t;
  }
};
J.unstable_act = Xm;
J.useCallback = function (e, t) {
  return ct.current.useCallback(e, t);
};
J.useContext = function (e) {
  return ct.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return ct.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return ct.current.useEffect(e, t);
};
J.useId = function () {
  return ct.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return ct.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return ct.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return ct.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return ct.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return ct.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return ct.current.useRef(e);
};
J.useState = function (e) {
  return ct.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return ct.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return ct.current.useTransition();
};
J.version = "18.3.1";
Wm.exports = J;
var T = Wm.exports;
const Jm = ul(T),
  su = Y2({ __proto__: null, default: Jm }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pv = T,
  hv = Symbol.for("react.element"),
  mv = Symbol.for("react.fragment"),
  gv = Object.prototype.hasOwnProperty,
  yv = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vv = { key: !0, ref: !0, __self: !0, __source: !0 };
function e1(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) gv.call(t, r) && !vv.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: hv,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: yv.current,
  };
}
dl.Fragment = mv;
dl.jsx = e1;
dl.jsxs = e1;
zm.exports = dl;
var a = zm.exports,
  t1 = { exports: {} },
  Bt = {},
  n1 = { exports: {} },
  r1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, E) {
    var O = M.length;
    M.push(E);
    e: for (; 0 < O; ) {
      var z = (O - 1) >>> 1,
        K = M[z];
      if (0 < s(K, E)) (M[z] = E), (M[O] = K), (O = z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var E = M[0],
      O = M.pop();
    if (O !== E) {
      M[0] = O;
      e: for (var z = 0, K = M.length, st = K >>> 1; z < st; ) {
        var We = 2 * (z + 1) - 1,
          Ie = M[We],
          Y = We + 1,
          de = M[Y];
        if (0 > s(Ie, O))
          Y < K && 0 > s(de, Ie)
            ? ((M[z] = de), (M[Y] = O), (z = Y))
            : ((M[z] = Ie), (M[We] = O), (z = We));
        else if (Y < K && 0 > s(de, O)) (M[z] = de), (M[Y] = O), (z = Y);
        else break e;
      }
    }
    return E;
  }
  function s(M, E) {
    var O = M.sortIndex - E.sortIndex;
    return O !== 0 ? O : M.id - E.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var c = [],
    u = [],
    f = 1,
    d = null,
    p = 3,
    y = !1,
    h = !1,
    m = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(M) {
    for (var E = n(u); E !== null; ) {
      if (E.callback === null) r(u);
      else if (E.startTime <= M)
        r(u), (E.sortIndex = E.expirationTime), t(c, E);
      else break;
      E = n(u);
    }
  }
  function k(M) {
    if (((m = !1), w(M), !h))
      if (n(c) !== null) (h = !0), F(j);
      else {
        var E = n(u);
        E !== null && $(k, E.startTime - M);
      }
  }
  function j(M, E) {
    (h = !1), m && ((m = !1), g(N), (N = -1)), (y = !0);
    var O = p;
    try {
      for (
        w(E), d = n(c);
        d !== null && (!(d.expirationTime > E) || (M && !P()));

      ) {
        var z = d.callback;
        if (typeof z == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var K = z(d.expirationTime <= E);
          (E = e.unstable_now()),
            typeof K == "function" ? (d.callback = K) : d === n(c) && r(c),
            w(E);
        } else r(c);
        d = n(c);
      }
      if (d !== null) var st = !0;
      else {
        var We = n(u);
        We !== null && $(k, We.startTime - E), (st = !1);
      }
      return st;
    } finally {
      (d = null), (p = O), (y = !1);
    }
  }
  var b = !1,
    C = null,
    N = -1,
    v = 5,
    _ = -1;
  function P() {
    return !(e.unstable_now() - _ < v);
  }
  function U() {
    if (C !== null) {
      var M = e.unstable_now();
      _ = M;
      var E = !0;
      try {
        E = C(!0, M);
      } finally {
        E ? D() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var D;
  if (typeof x == "function")
    D = function () {
      x(U);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      R = B.port2;
    (B.port1.onmessage = U),
      (D = function () {
        R.postMessage(null);
      });
  } else
    D = function () {
      S(U, 0);
    };
  function F(M) {
    (C = M), b || ((b = !0), D());
  }
  function $(M, E) {
    N = S(function () {
      M(e.unstable_now());
    }, E);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || y || ((h = !0), F(j));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (v = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (M) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = p;
      }
      var O = p;
      p = E;
      try {
        return M();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, E) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var O = p;
      p = M;
      try {
        return E();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function (M, E, O) {
      var z = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? z + O : z))
          : (O = z),
        M)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = O + K),
        (M = {
          id: f++,
          callback: E,
          priorityLevel: M,
          startTime: O,
          expirationTime: K,
          sortIndex: -1,
        }),
        O > z
          ? ((M.sortIndex = O),
            t(u, M),
            n(c) === null &&
              M === n(u) &&
              (m ? (g(N), (N = -1)) : (m = !0), $(k, O - z)))
          : ((M.sortIndex = K), t(c, M), h || y || ((h = !0), F(j))),
        M
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (M) {
      var E = p;
      return function () {
        var O = p;
        p = E;
        try {
          return M.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(r1);
n1.exports = r1;
var xv = n1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wv = T,
  Ot = xv;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var s1 = new Set(),
  Ao = {};
function zr(e, t) {
  Ps(e, t), Ps(e + "Capture", t);
}
function Ps(e, t) {
  for (Ao[e] = t, e = 0; e < t.length; e++) s1.add(t[e]);
}
var On = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ou = Object.prototype.hasOwnProperty,
  Sv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gp = {},
  yp = {};
function Cv(e) {
  return ou.call(yp, e)
    ? !0
    : ou.call(gp, e)
    ? !1
    : Sv.test(e)
    ? (yp[e] = !0)
    : ((gp[e] = !0), !1);
}
function bv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kv(e, t, n, r) {
  if (t === null || typeof t > "u" || bv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ut(e, t, n, r, s, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ye[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ye[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ye[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ye[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ye[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ye[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ye[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Od = /[\-:]([a-z])/g;
function Bd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Od, Bd);
    Ye[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Od, Bd);
    Ye[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Od, Bd);
  Ye[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ye[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ye.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ye[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Id(e, t, n, r) {
  var s = Ye.hasOwnProperty(t) ? Ye[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kv(t, n, s, r) && (n = null),
    r || s === null
      ? Cv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dn = wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ri = Symbol.for("react.element"),
  us = Symbol.for("react.portal"),
  ds = Symbol.for("react.fragment"),
  Ud = Symbol.for("react.strict_mode"),
  iu = Symbol.for("react.profiler"),
  o1 = Symbol.for("react.provider"),
  i1 = Symbol.for("react.context"),
  $d = Symbol.for("react.forward_ref"),
  au = Symbol.for("react.suspense"),
  lu = Symbol.for("react.suspense_list"),
  Fd = Symbol.for("react.memo"),
  Kn = Symbol.for("react.lazy"),
  a1 = Symbol.for("react.offscreen"),
  vp = Symbol.iterator;
function ro(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vp && e[vp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  mc;
function mo(e) {
  if (mc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mc = (t && t[1]) || "";
    }
  return (
    `
` +
    mc +
    e
  );
}
var gc = !1;
function yc(e, t) {
  if (!e || gc) return "";
  gc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          o = r.stack.split(`
`),
          i = s.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && s[i] !== o[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (s[i] !== o[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || s[i] !== o[l])) {
                var c =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (gc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mo(e) : "";
}
function jv(e) {
  switch (e.tag) {
    case 5:
      return mo(e.type);
    case 16:
      return mo("Lazy");
    case 13:
      return mo("Suspense");
    case 19:
      return mo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yc(e.type, !1)), e;
    case 11:
      return (e = yc(e.type.render, !1)), e;
    case 1:
      return (e = yc(e.type, !0)), e;
    default:
      return "";
  }
}
function cu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ds:
      return "Fragment";
    case us:
      return "Portal";
    case iu:
      return "Profiler";
    case Ud:
      return "StrictMode";
    case au:
      return "Suspense";
    case lu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case i1:
        return (e.displayName || "Context") + ".Consumer";
      case o1:
        return (e._context.displayName || "Context") + ".Provider";
      case $d:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fd:
        return (
          (t = e.displayName || null), t !== null ? t : cu(e.type) || "Memo"
        );
      case Kn:
        (t = e._payload), (e = e._init);
        try {
          return cu(e(t));
        } catch {}
    }
  return null;
}
function Nv(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return cu(t);
    case 8:
      return t === Ud ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function pr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function l1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ev(e) {
  var t = l1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ai(e) {
  e._valueTracker || (e._valueTracker = Ev(e));
}
function c1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = l1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Na(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uu(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function u1(e, t) {
  (t = t.checked), t != null && Id(e, "checked", t, !1);
}
function du(e, t) {
  u1(e, t);
  var n = pr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fu(e, t.type, pr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fu(e, t, n) {
  (t !== "number" || Na(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var go = Array.isArray;
function bs(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (go(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pr(n) };
}
function d1(e, t) {
  var n = pr(t.value),
    r = pr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Cp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function f1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? f1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pi,
  p1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pi = Pi || document.createElement("div"),
          Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Po(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var So = {
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
    strokeWidth: !0,
  },
  Tv = ["Webkit", "ms", "Moz", "O"];
Object.keys(So).forEach(function (e) {
  Tv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (So[t] = So[e]);
  });
});
function h1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (So.hasOwnProperty(e) && So[e])
    ? ("" + t).trim()
    : t + "px";
}
function m1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = h1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var _v = Ee(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function mu(e, t) {
  if (t) {
    if (_v[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function gu(e, t) {
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
      return !0;
  }
}
var yu = null;
function Dd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vu = null,
  ks = null,
  js = null;
function bp(e) {
  if ((e = ai(e))) {
    if (typeof vu != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = gl(t)), vu(e.stateNode, e.type, t));
  }
}
function g1(e) {
  ks ? (js ? js.push(e) : (js = [e])) : (ks = e);
}
function y1() {
  if (ks) {
    var e = ks,
      t = js;
    if (((js = ks = null), bp(e), t)) for (e = 0; e < t.length; e++) bp(t[e]);
  }
}
function v1(e, t) {
  return e(t);
}
function x1() {}
var vc = !1;
function w1(e, t, n) {
  if (vc) return e(t, n);
  vc = !0;
  try {
    return v1(e, t, n);
  } finally {
    (vc = !1), (ks !== null || js !== null) && (x1(), y1());
  }
}
function Mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var xu = !1;
if (On)
  try {
    var so = {};
    Object.defineProperty(so, "passive", {
      get: function () {
        xu = !0;
      },
    }),
      window.addEventListener("test", so, so),
      window.removeEventListener("test", so, so);
  } catch {
    xu = !1;
  }
function Rv(e, t, n, r, s, o, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Co = !1,
  Ea = null,
  Ta = !1,
  wu = null,
  Av = {
    onError: function (e) {
      (Co = !0), (Ea = e);
    },
  };
function Pv(e, t, n, r, s, o, i, l, c) {
  (Co = !1), (Ea = null), Rv.apply(Av, arguments);
}
function Mv(e, t, n, r, s, o, i, l, c) {
  if ((Pv.apply(this, arguments), Co)) {
    if (Co) {
      var u = Ea;
      (Co = !1), (Ea = null);
    } else throw Error(I(198));
    Ta || ((Ta = !0), (wu = u));
  }
}
function Wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function S1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kp(e) {
  if (Wr(e) !== e) throw Error(I(188));
}
function Lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wr(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === n) return kp(s), e;
        if (o === r) return kp(s), t;
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = s), (r = o);
    else {
      for (var i = !1, l = s.child; l; ) {
        if (l === n) {
          (i = !0), (n = s), (r = o);
          break;
        }
        if (l === r) {
          (i = !0), (r = s), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = o.child; l; ) {
          if (l === n) {
            (i = !0), (n = o), (r = s);
            break;
          }
          if (l === r) {
            (i = !0), (r = o), (n = s);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function C1(e) {
  return (e = Lv(e)), e !== null ? b1(e) : null;
}
function b1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = b1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var k1 = Ot.unstable_scheduleCallback,
  jp = Ot.unstable_cancelCallback,
  Ov = Ot.unstable_shouldYield,
  Bv = Ot.unstable_requestPaint,
  Le = Ot.unstable_now,
  Iv = Ot.unstable_getCurrentPriorityLevel,
  Vd = Ot.unstable_ImmediatePriority,
  j1 = Ot.unstable_UserBlockingPriority,
  _a = Ot.unstable_NormalPriority,
  Uv = Ot.unstable_LowPriority,
  N1 = Ot.unstable_IdlePriority,
  fl = null,
  yn = null;
function $v(e) {
  if (yn && typeof yn.onCommitFiberRoot == "function")
    try {
      yn.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : Vv,
  Fv = Math.log,
  Dv = Math.LN2;
function Vv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fv(e) / Dv) | 0)) | 0;
}
var Mi = 64,
  Li = 4194304;
function yo(e) {
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
      return e;
  }
}
function Ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~s;
    l !== 0 ? (r = yo(l)) : ((o &= i), o !== 0 && (r = yo(o)));
  } else (i = n & ~s), i !== 0 ? (r = yo(i)) : o !== 0 && (r = yo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nn(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function zv(e, t) {
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
      return -1;
  }
}
function Wv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - nn(o),
      l = 1 << i,
      c = s[i];
    c === -1
      ? (!(l & n) || l & r) && (s[i] = zv(l, t))
      : c <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Su(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function E1() {
  var e = Mi;
  return (Mi <<= 1), !(Mi & 4194240) && (Mi = 64), e;
}
function xc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function Hv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - nn(n),
      o = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o);
  }
}
function zd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var le = 0;
function T1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _1,
  Wd,
  R1,
  A1,
  P1,
  Cu = !1,
  Oi = [],
  rr = null,
  sr = null,
  or = null,
  Lo = new Map(),
  Oo = new Map(),
  Yn = [],
  qv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Np(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rr = null;
      break;
    case "dragenter":
    case "dragleave":
      sr = null;
      break;
    case "mouseover":
    case "mouseout":
      or = null;
      break;
    case "pointerover":
    case "pointerout":
      Lo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oo.delete(t.pointerId);
  }
}
function oo(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = ai(t)), t !== null && Wd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Gv(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (rr = oo(rr, e, t, n, r, s)), !0;
    case "dragenter":
      return (sr = oo(sr, e, t, n, r, s)), !0;
    case "mouseover":
      return (or = oo(or, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return Lo.set(o, oo(Lo.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), Oo.set(o, oo(Oo.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function M1(e) {
  var t = Nr(e.target);
  if (t !== null) {
    var n = Wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = S1(n)), t !== null)) {
          (e.blockedOn = t),
            P1(e.priority, function () {
              R1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yu = r), n.target.dispatchEvent(r), (yu = null);
    } else return (t = ai(n)), t !== null && Wd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ep(e, t, n) {
  oa(e) && n.delete(t);
}
function Kv() {
  (Cu = !1),
    rr !== null && oa(rr) && (rr = null),
    sr !== null && oa(sr) && (sr = null),
    or !== null && oa(or) && (or = null),
    Lo.forEach(Ep),
    Oo.forEach(Ep);
}
function io(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cu ||
      ((Cu = !0),
      Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, Kv)));
}
function Bo(e) {
  function t(s) {
    return io(s, e);
  }
  if (0 < Oi.length) {
    io(Oi[0], e);
    for (var n = 1; n < Oi.length; n++) {
      var r = Oi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rr !== null && io(rr, e),
      sr !== null && io(sr, e),
      or !== null && io(or, e),
      Lo.forEach(t),
      Oo.forEach(t),
      n = 0;
    n < Yn.length;
    n++
  )
    (r = Yn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); )
    M1(n), n.blockedOn === null && Yn.shift();
}
var Ns = Dn.ReactCurrentBatchConfig,
  Aa = !0;
function Zv(e, t, n, r) {
  var s = le,
    o = Ns.transition;
  Ns.transition = null;
  try {
    (le = 1), Hd(e, t, n, r);
  } finally {
    (le = s), (Ns.transition = o);
  }
}
function Qv(e, t, n, r) {
  var s = le,
    o = Ns.transition;
  Ns.transition = null;
  try {
    (le = 4), Hd(e, t, n, r);
  } finally {
    (le = s), (Ns.transition = o);
  }
}
function Hd(e, t, n, r) {
  if (Aa) {
    var s = bu(e, t, n, r);
    if (s === null) _c(e, t, r, Pa, n), Np(e, r);
    else if (Gv(s, e, t, n, r)) r.stopPropagation();
    else if ((Np(e, r), t & 4 && -1 < qv.indexOf(e))) {
      for (; s !== null; ) {
        var o = ai(s);
        if (
          (o !== null && _1(o),
          (o = bu(e, t, n, r)),
          o === null && _c(e, t, r, Pa, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else _c(e, t, r, null, n);
  }
}
var Pa = null;
function bu(e, t, n, r) {
  if (((Pa = null), (e = Dd(r)), (e = Nr(e)), e !== null))
    if (((t = Wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = S1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Pa = e), null;
}
function L1(e) {
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
      switch (Iv()) {
        case Vd:
          return 1;
        case j1:
          return 4;
        case _a:
        case Uv:
          return 16;
        case N1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null,
  qd = null,
  ia = null;
function O1() {
  if (ia) return ia;
  var e,
    t = qd,
    n = t.length,
    r,
    s = "value" in er ? er.value : er.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (ia = s.slice(e, 1 < r ? 1 - r : void 0));
}
function aa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bi() {
  return !0;
}
function Tp() {
  return !1;
}
function It(e) {
  function t(n, r, s, o, i) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Bi
        : Tp),
      (this.isPropagationStopped = Tp),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bi));
      },
      persist: function () {},
      isPersistent: Bi,
    }),
    t
  );
}
var Hs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gd = It(Hs),
  ii = Ee({}, Hs, { view: 0, detail: 0 }),
  Yv = It(ii),
  wc,
  Sc,
  ao,
  pl = Ee({}, ii, {
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
    getModifierState: Kd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ao &&
            (ao && e.type === "mousemove"
              ? ((wc = e.screenX - ao.screenX), (Sc = e.screenY - ao.screenY))
              : (Sc = wc = 0),
            (ao = e)),
          wc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sc;
    },
  }),
  _p = It(pl),
  Xv = Ee({}, pl, { dataTransfer: 0 }),
  Jv = It(Xv),
  ex = Ee({}, ii, { relatedTarget: 0 }),
  Cc = It(ex),
  tx = Ee({}, Hs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nx = It(tx),
  rx = Ee({}, Hs, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sx = It(rx),
  ox = Ee({}, Hs, { data: 0 }),
  Rp = It(ox),
  ix = {
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
    MozPrintableKey: "Unidentified",
  },
  ax = {
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
    224: "Meta",
  },
  lx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lx[e]) ? !!t[e] : !1;
}
function Kd() {
  return cx;
}
var ux = Ee({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = ix[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = aa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ax[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kd,
    charCode: function (e) {
      return e.type === "keypress" ? aa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? aa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dx = It(ux),
  fx = Ee({}, pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ap = It(fx),
  px = Ee({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kd,
  }),
  hx = It(px),
  mx = Ee({}, Hs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gx = It(mx),
  yx = Ee({}, pl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vx = It(yx),
  xx = [9, 13, 27, 32],
  Zd = On && "CompositionEvent" in window,
  bo = null;
On && "documentMode" in document && (bo = document.documentMode);
var wx = On && "TextEvent" in window && !bo,
  B1 = On && (!Zd || (bo && 8 < bo && 11 >= bo)),
  Pp = " ",
  Mp = !1;
function I1(e, t) {
  switch (e) {
    case "keyup":
      return xx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function U1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fs = !1;
function Sx(e, t) {
  switch (e) {
    case "compositionend":
      return U1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mp = !0), Pp);
    case "textInput":
      return (e = t.data), e === Pp && Mp ? null : e;
    default:
      return null;
  }
}
function Cx(e, t) {
  if (fs)
    return e === "compositionend" || (!Zd && I1(e, t))
      ? ((e = O1()), (ia = qd = er = null), (fs = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return B1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bx = {
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
  week: !0,
};
function Lp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bx[e.type] : t === "textarea";
}
function $1(e, t, n, r) {
  g1(r),
    (t = Ma(t, "onChange")),
    0 < t.length &&
      ((n = new Gd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ko = null,
  Io = null;
function kx(e) {
  Q1(e, 0);
}
function hl(e) {
  var t = ms(e);
  if (c1(t)) return e;
}
function jx(e, t) {
  if (e === "change") return t;
}
var F1 = !1;
if (On) {
  var bc;
  if (On) {
    var kc = "oninput" in document;
    if (!kc) {
      var Op = document.createElement("div");
      Op.setAttribute("oninput", "return;"),
        (kc = typeof Op.oninput == "function");
    }
    bc = kc;
  } else bc = !1;
  F1 = bc && (!document.documentMode || 9 < document.documentMode);
}
function Bp() {
  ko && (ko.detachEvent("onpropertychange", D1), (Io = ko = null));
}
function D1(e) {
  if (e.propertyName === "value" && hl(Io)) {
    var t = [];
    $1(t, Io, e, Dd(e)), w1(kx, t);
  }
}
function Nx(e, t, n) {
  e === "focusin"
    ? (Bp(), (ko = t), (Io = n), ko.attachEvent("onpropertychange", D1))
    : e === "focusout" && Bp();
}
function Ex(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hl(Io);
}
function Tx(e, t) {
  if (e === "click") return hl(t);
}
function _x(e, t) {
  if (e === "input" || e === "change") return hl(t);
}
function Rx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : Rx;
function Uo(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ou.call(t, s) || !on(e[s], t[s])) return !1;
  }
  return !0;
}
function Ip(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Up(e, t) {
  var n = Ip(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ip(n);
  }
}
function V1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? V1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function z1() {
  for (var e = window, t = Na(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Na(e.document);
  }
  return t;
}
function Qd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ax(e) {
  var t = z1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    V1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        (r = r.end === void 0 ? o : Math.min(r.end, s)),
          !e.extend && o > r && ((s = r), (r = o), (o = s)),
          (s = Up(n, o));
        var i = Up(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Px = On && "documentMode" in document && 11 >= document.documentMode,
  ps = null,
  ku = null,
  jo = null,
  ju = !1;
function $p(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ju ||
    ps == null ||
    ps !== Na(r) ||
    ((r = ps),
    "selectionStart" in r && Qd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jo && Uo(jo, r)) ||
      ((jo = r),
      (r = Ma(ku, "onSelect")),
      0 < r.length &&
        ((t = new Gd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ps))));
}
function Ii(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hs = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd"),
  },
  jc = {},
  W1 = {};
On &&
  ((W1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hs.animationend.animation,
    delete hs.animationiteration.animation,
    delete hs.animationstart.animation),
  "TransitionEvent" in window || delete hs.transitionend.transition);
function ml(e) {
  if (jc[e]) return jc[e];
  if (!hs[e]) return e;
  var t = hs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in W1) return (jc[e] = t[n]);
  return e;
}
var H1 = ml("animationend"),
  q1 = ml("animationiteration"),
  G1 = ml("animationstart"),
  K1 = ml("transitionend"),
  Z1 = new Map(),
  Fp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vr(e, t) {
  Z1.set(e, t), zr(t, [e]);
}
for (var Nc = 0; Nc < Fp.length; Nc++) {
  var Ec = Fp[Nc],
    Mx = Ec.toLowerCase(),
    Lx = Ec[0].toUpperCase() + Ec.slice(1);
  vr(Mx, "on" + Lx);
}
vr(H1, "onAnimationEnd");
vr(q1, "onAnimationIteration");
vr(G1, "onAnimationStart");
vr("dblclick", "onDoubleClick");
vr("focusin", "onFocus");
vr("focusout", "onBlur");
vr(K1, "onTransitionEnd");
Ps("onMouseEnter", ["mouseout", "mouseover"]);
Ps("onMouseLeave", ["mouseout", "mouseover"]);
Ps("onPointerEnter", ["pointerout", "pointerover"]);
Ps("onPointerLeave", ["pointerout", "pointerover"]);
zr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ox = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function Dp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mv(r, t, void 0, e), (e.currentTarget = null);
}
function Q1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== o && s.isPropagationStopped())) break e;
          Dp(s, l, u), (o = c);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== o && s.isPropagationStopped())
          )
            break e;
          Dp(s, l, u), (o = c);
        }
    }
  }
  if (Ta) throw ((e = wu), (Ta = !1), (wu = null), e);
}
function xe(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Y1(t, e, 2, !1), n.add(r));
}
function Tc(e, t, n) {
  var r = 0;
  t && (r |= 4), Y1(n, e, r, t);
}
var Ui = "_reactListening" + Math.random().toString(36).slice(2);
function $o(e) {
  if (!e[Ui]) {
    (e[Ui] = !0),
      s1.forEach(function (n) {
        n !== "selectionchange" && (Ox.has(n) || Tc(n, !1, e), Tc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ui] || ((t[Ui] = !0), Tc("selectionchange", !1, t));
  }
}
function Y1(e, t, n, r) {
  switch (L1(t)) {
    case 1:
      var s = Zv;
      break;
    case 4:
      s = Qv;
      break;
    default:
      s = Hd;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !xu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function _c(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Nr(l)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  w1(function () {
    var u = o,
      f = Dd(n),
      d = [];
    e: {
      var p = Z1.get(e);
      if (p !== void 0) {
        var y = Gd,
          h = e;
        switch (e) {
          case "keypress":
            if (aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = dx;
            break;
          case "focusin":
            (h = "focus"), (y = Cc);
            break;
          case "focusout":
            (h = "blur"), (y = Cc);
            break;
          case "beforeblur":
          case "afterblur":
            y = Cc;
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
            y = _p;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Jv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = hx;
            break;
          case H1:
          case q1:
          case G1:
            y = nx;
            break;
          case K1:
            y = gx;
            break;
          case "scroll":
            y = Yv;
            break;
          case "wheel":
            y = vx;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = sx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ap;
        }
        var m = (t & 4) !== 0,
          S = !m && e === "scroll",
          g = m ? (p !== null ? p + "Capture" : null) : p;
        m = [];
        for (var x = u, w; x !== null; ) {
          w = x;
          var k = w.stateNode;
          if (
            (w.tag === 5 &&
              k !== null &&
              ((w = k),
              g !== null && ((k = Mo(x, g)), k != null && m.push(Fo(x, k, w)))),
            S)
          )
            break;
          x = x.return;
        }
        0 < m.length &&
          ((p = new y(p, h, null, n, f)), d.push({ event: p, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== yu &&
            (h = n.relatedTarget || n.fromElement) &&
            (Nr(h) || h[Bn]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((h = n.relatedTarget || n.toElement),
              (y = u),
              (h = h ? Nr(h) : null),
              h !== null &&
                ((S = Wr(h)), h !== S || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((y = null), (h = u)),
          y !== h)
        ) {
          if (
            ((m = _p),
            (k = "onMouseLeave"),
            (g = "onMouseEnter"),
            (x = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Ap),
              (k = "onPointerLeave"),
              (g = "onPointerEnter"),
              (x = "pointer")),
            (S = y == null ? p : ms(y)),
            (w = h == null ? p : ms(h)),
            (p = new m(k, x + "leave", y, n, f)),
            (p.target = S),
            (p.relatedTarget = w),
            (k = null),
            Nr(f) === u &&
              ((m = new m(g, x + "enter", h, n, f)),
              (m.target = w),
              (m.relatedTarget = S),
              (k = m)),
            (S = k),
            y && h)
          )
            t: {
              for (m = y, g = h, x = 0, w = m; w; w = ss(w)) x++;
              for (w = 0, k = g; k; k = ss(k)) w++;
              for (; 0 < x - w; ) (m = ss(m)), x--;
              for (; 0 < w - x; ) (g = ss(g)), w--;
              for (; x--; ) {
                if (m === g || (g !== null && m === g.alternate)) break t;
                (m = ss(m)), (g = ss(g));
              }
              m = null;
            }
          else m = null;
          y !== null && Vp(d, p, y, m, !1),
            h !== null && S !== null && Vp(d, S, h, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? ms(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var j = jx;
        else if (Lp(p))
          if (F1) j = _x;
          else {
            j = Ex;
            var b = Nx;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (j = Tx);
        if (j && (j = j(e, u))) {
          $1(d, j, n, f);
          break e;
        }
        b && b(e, p, u),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            fu(p, "number", p.value);
      }
      switch (((b = u ? ms(u) : window), e)) {
        case "focusin":
          (Lp(b) || b.contentEditable === "true") &&
            ((ps = b), (ku = u), (jo = null));
          break;
        case "focusout":
          jo = ku = ps = null;
          break;
        case "mousedown":
          ju = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ju = !1), $p(d, n, f);
          break;
        case "selectionchange":
          if (Px) break;
        case "keydown":
        case "keyup":
          $p(d, n, f);
      }
      var C;
      if (Zd)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        fs
          ? I1(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (B1 &&
          n.locale !== "ko" &&
          (fs || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && fs && (C = O1())
            : ((er = f),
              (qd = "value" in er ? er.value : er.textContent),
              (fs = !0))),
        (b = Ma(u, N)),
        0 < b.length &&
          ((N = new Rp(N, e, null, n, f)),
          d.push({ event: N, listeners: b }),
          C ? (N.data = C) : ((C = U1(n)), C !== null && (N.data = C)))),
        (C = wx ? Sx(e, n) : Cx(e, n)) &&
          ((u = Ma(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Rp("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = C)));
    }
    Q1(d, t);
  });
}
function Fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = Mo(e, n)),
      o != null && r.unshift(Fo(e, o, s)),
      (o = Mo(e, t)),
      o != null && r.push(Fo(e, o, s))),
      (e = e.return);
  }
  return r;
}
function ss(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vp(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Mo(n, o)), c != null && i.unshift(Fo(n, c, l)))
        : s || ((c = Mo(n, o)), c != null && i.push(Fo(n, c, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bx = /\r\n?/g,
  Ix = /\u0000|\uFFFD/g;
function zp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bx,
      `
`
    )
    .replace(Ix, "");
}
function $i(e, t, n) {
  if (((t = zp(t)), zp(e) !== t && n)) throw Error(I(425));
}
function La() {}
var Nu = null,
  Eu = null;
function Tu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _u = typeof setTimeout == "function" ? setTimeout : void 0,
  Ux = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wp = typeof Promise == "function" ? Promise : void 0,
  $x =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wp < "u"
      ? function (e) {
          return Wp.resolve(null).then(e).catch(Fx);
        }
      : _u;
function Fx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rc(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Bo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Bo(t);
}
function ir(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qs = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + qs,
  Do = "__reactProps$" + qs,
  Bn = "__reactContainer$" + qs,
  Ru = "__reactEvents$" + qs,
  Dx = "__reactListeners$" + qs,
  Vx = "__reactHandles$" + qs;
function Nr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bn] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hp(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = Hp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ai(e) {
  return (
    (e = e[mn] || e[Bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ms(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function gl(e) {
  return e[Do] || null;
}
var Au = [],
  gs = -1;
function xr(e) {
  return { current: e };
}
function we(e) {
  0 > gs || ((e.current = Au[gs]), (Au[gs] = null), gs--);
}
function ye(e, t) {
  gs++, (Au[gs] = e.current), (e.current = t);
}
var hr = {},
  rt = xr(hr),
  vt = xr(!1),
  Or = hr;
function Ms(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function Oa() {
  we(vt), we(rt);
}
function qp(e, t, n) {
  if (rt.current !== hr) throw Error(I(168));
  ye(rt, t), ye(vt, n);
}
function X1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(I(108, Nv(e) || "Unknown", s));
  return Ee({}, n, r);
}
function Ba(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hr),
    (Or = rt.current),
    ye(rt, e),
    ye(vt, vt.current),
    !0
  );
}
function Gp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = X1(e, t, Or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(vt),
      we(rt),
      ye(rt, e))
    : we(vt),
    ye(vt, n);
}
var Rn = null,
  yl = !1,
  Ac = !1;
function J1(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function zx(e) {
  (yl = !0), J1(e);
}
function wr() {
  if (!Ac && Rn !== null) {
    Ac = !0;
    var e = 0,
      t = le;
    try {
      var n = Rn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rn = null), (yl = !1);
    } catch (s) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), k1(Vd, wr), s);
    } finally {
      (le = t), (Ac = !1);
    }
  }
  return null;
}
var ys = [],
  vs = 0,
  Ia = null,
  Ua = 0,
  Dt = [],
  Vt = 0,
  Br = null,
  Pn = 1,
  Mn = "";
function kr(e, t) {
  (ys[vs++] = Ua), (ys[vs++] = Ia), (Ia = e), (Ua = t);
}
function e0(e, t, n) {
  (Dt[Vt++] = Pn), (Dt[Vt++] = Mn), (Dt[Vt++] = Br), (Br = e);
  var r = Pn;
  e = Mn;
  var s = 32 - nn(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - nn(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (Pn = (1 << (32 - nn(t) + s)) | (n << s) | r),
      (Mn = o + e);
  } else (Pn = (1 << o) | (n << s) | r), (Mn = e);
}
function Yd(e) {
  e.return !== null && (kr(e, 1), e0(e, 1, 0));
}
function Xd(e) {
  for (; e === Ia; )
    (Ia = ys[--vs]), (ys[vs] = null), (Ua = ys[--vs]), (ys[vs] = null);
  for (; e === Br; )
    (Br = Dt[--Vt]),
      (Dt[Vt] = null),
      (Mn = Dt[--Vt]),
      (Dt[Vt] = null),
      (Pn = Dt[--Vt]),
      (Dt[Vt] = null);
}
var At = null,
  Rt = null,
  be = !1,
  tn = null;
function t0(e, t) {
  var n = Wt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (At = e), (Rt = ir(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (At = e), (Rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Br !== null ? { id: Pn, overflow: Mn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Wt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (At = e),
            (Rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mu(e) {
  if (be) {
    var t = Rt;
    if (t) {
      var n = t;
      if (!Kp(e, t)) {
        if (Pu(e)) throw Error(I(418));
        t = ir(n.nextSibling);
        var r = At;
        t && Kp(e, t)
          ? t0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (be = !1), (At = e));
      }
    } else {
      if (Pu(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (be = !1), (At = e);
    }
  }
}
function Zp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function Fi(e) {
  if (e !== At) return !1;
  if (!be) return Zp(e), (be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tu(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (Pu(e)) throw (n0(), Error(I(418)));
    for (; t; ) t0(e, t), (t = ir(t.nextSibling));
  }
  if ((Zp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Rt = ir(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Rt = null;
    }
  } else Rt = At ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function n0() {
  for (var e = Rt; e; ) e = ir(e.nextSibling);
}
function Ls() {
  (Rt = At = null), (be = !1);
}
function Jd(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
var Wx = Dn.ReactCurrentBatchConfig;
function lo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = s.refs;
            i === null ? delete l[o] : (l[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Di(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Qp(e) {
  var t = e._init;
  return t(e._payload);
}
function r0(e) {
  function t(g, x) {
    if (e) {
      var w = g.deletions;
      w === null ? ((g.deletions = [x]), (g.flags |= 16)) : w.push(x);
    }
  }
  function n(g, x) {
    if (!e) return null;
    for (; x !== null; ) t(g, x), (x = x.sibling);
    return null;
  }
  function r(g, x) {
    for (g = new Map(); x !== null; )
      x.key !== null ? g.set(x.key, x) : g.set(x.index, x), (x = x.sibling);
    return g;
  }
  function s(g, x) {
    return (g = ur(g, x)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, x, w) {
    return (
      (g.index = w),
      e
        ? ((w = g.alternate),
          w !== null
            ? ((w = w.index), w < x ? ((g.flags |= 2), x) : w)
            : ((g.flags |= 2), x))
        : ((g.flags |= 1048576), x)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, x, w, k) {
    return x === null || x.tag !== 6
      ? ((x = Uc(w, g.mode, k)), (x.return = g), x)
      : ((x = s(x, w)), (x.return = g), x);
  }
  function c(g, x, w, k) {
    var j = w.type;
    return j === ds
      ? f(g, x, w.props.children, k, w.key)
      : x !== null &&
        (x.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Kn &&
            Qp(j) === x.type))
      ? ((k = s(x, w.props)), (k.ref = lo(g, x, w)), (k.return = g), k)
      : ((k = ha(w.type, w.key, w.props, null, g.mode, k)),
        (k.ref = lo(g, x, w)),
        (k.return = g),
        k);
  }
  function u(g, x, w, k) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== w.containerInfo ||
      x.stateNode.implementation !== w.implementation
      ? ((x = $c(w, g.mode, k)), (x.return = g), x)
      : ((x = s(x, w.children || [])), (x.return = g), x);
  }
  function f(g, x, w, k, j) {
    return x === null || x.tag !== 7
      ? ((x = Mr(w, g.mode, k, j)), (x.return = g), x)
      : ((x = s(x, w)), (x.return = g), x);
  }
  function d(g, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = Uc("" + x, g.mode, w)), (x.return = g), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ri:
          return (
            (w = ha(x.type, x.key, x.props, null, g.mode, w)),
            (w.ref = lo(g, null, x)),
            (w.return = g),
            w
          );
        case us:
          return (x = $c(x, g.mode, w)), (x.return = g), x;
        case Kn:
          var k = x._init;
          return d(g, k(x._payload), w);
      }
      if (go(x) || ro(x))
        return (x = Mr(x, g.mode, w, null)), (x.return = g), x;
      Di(g, x);
    }
    return null;
  }
  function p(g, x, w, k) {
    var j = x !== null ? x.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return j !== null ? null : l(g, x, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ri:
          return w.key === j ? c(g, x, w, k) : null;
        case us:
          return w.key === j ? u(g, x, w, k) : null;
        case Kn:
          return (j = w._init), p(g, x, j(w._payload), k);
      }
      if (go(w) || ro(w)) return j !== null ? null : f(g, x, w, k, null);
      Di(g, w);
    }
    return null;
  }
  function y(g, x, w, k, j) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (g = g.get(w) || null), l(x, g, "" + k, j);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ri:
          return (g = g.get(k.key === null ? w : k.key) || null), c(x, g, k, j);
        case us:
          return (g = g.get(k.key === null ? w : k.key) || null), u(x, g, k, j);
        case Kn:
          var b = k._init;
          return y(g, x, w, b(k._payload), j);
      }
      if (go(k) || ro(k)) return (g = g.get(w) || null), f(x, g, k, j, null);
      Di(x, k);
    }
    return null;
  }
  function h(g, x, w, k) {
    for (
      var j = null, b = null, C = x, N = (x = 0), v = null;
      C !== null && N < w.length;
      N++
    ) {
      C.index > N ? ((v = C), (C = null)) : (v = C.sibling);
      var _ = p(g, C, w[N], k);
      if (_ === null) {
        C === null && (C = v);
        break;
      }
      e && C && _.alternate === null && t(g, C),
        (x = o(_, x, N)),
        b === null ? (j = _) : (b.sibling = _),
        (b = _),
        (C = v);
    }
    if (N === w.length) return n(g, C), be && kr(g, N), j;
    if (C === null) {
      for (; N < w.length; N++)
        (C = d(g, w[N], k)),
          C !== null &&
            ((x = o(C, x, N)), b === null ? (j = C) : (b.sibling = C), (b = C));
      return be && kr(g, N), j;
    }
    for (C = r(g, C); N < w.length; N++)
      (v = y(C, g, N, w[N], k)),
        v !== null &&
          (e && v.alternate !== null && C.delete(v.key === null ? N : v.key),
          (x = o(v, x, N)),
          b === null ? (j = v) : (b.sibling = v),
          (b = v));
    return (
      e &&
        C.forEach(function (P) {
          return t(g, P);
        }),
      be && kr(g, N),
      j
    );
  }
  function m(g, x, w, k) {
    var j = ro(w);
    if (typeof j != "function") throw Error(I(150));
    if (((w = j.call(w)), w == null)) throw Error(I(151));
    for (
      var b = (j = null), C = x, N = (x = 0), v = null, _ = w.next();
      C !== null && !_.done;
      N++, _ = w.next()
    ) {
      C.index > N ? ((v = C), (C = null)) : (v = C.sibling);
      var P = p(g, C, _.value, k);
      if (P === null) {
        C === null && (C = v);
        break;
      }
      e && C && P.alternate === null && t(g, C),
        (x = o(P, x, N)),
        b === null ? (j = P) : (b.sibling = P),
        (b = P),
        (C = v);
    }
    if (_.done) return n(g, C), be && kr(g, N), j;
    if (C === null) {
      for (; !_.done; N++, _ = w.next())
        (_ = d(g, _.value, k)),
          _ !== null &&
            ((x = o(_, x, N)), b === null ? (j = _) : (b.sibling = _), (b = _));
      return be && kr(g, N), j;
    }
    for (C = r(g, C); !_.done; N++, _ = w.next())
      (_ = y(C, g, N, _.value, k)),
        _ !== null &&
          (e && _.alternate !== null && C.delete(_.key === null ? N : _.key),
          (x = o(_, x, N)),
          b === null ? (j = _) : (b.sibling = _),
          (b = _));
    return (
      e &&
        C.forEach(function (U) {
          return t(g, U);
        }),
      be && kr(g, N),
      j
    );
  }
  function S(g, x, w, k) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === ds &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ri:
          e: {
            for (var j = w.key, b = x; b !== null; ) {
              if (b.key === j) {
                if (((j = w.type), j === ds)) {
                  if (b.tag === 7) {
                    n(g, b.sibling),
                      (x = s(b, w.props.children)),
                      (x.return = g),
                      (g = x);
                    break e;
                  }
                } else if (
                  b.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Kn &&
                    Qp(j) === b.type)
                ) {
                  n(g, b.sibling),
                    (x = s(b, w.props)),
                    (x.ref = lo(g, b, w)),
                    (x.return = g),
                    (g = x);
                  break e;
                }
                n(g, b);
                break;
              } else t(g, b);
              b = b.sibling;
            }
            w.type === ds
              ? ((x = Mr(w.props.children, g.mode, k, w.key)),
                (x.return = g),
                (g = x))
              : ((k = ha(w.type, w.key, w.props, null, g.mode, k)),
                (k.ref = lo(g, x, w)),
                (k.return = g),
                (g = k));
          }
          return i(g);
        case us:
          e: {
            for (b = w.key; x !== null; ) {
              if (x.key === b)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === w.containerInfo &&
                  x.stateNode.implementation === w.implementation
                ) {
                  n(g, x.sibling),
                    (x = s(x, w.children || [])),
                    (x.return = g),
                    (g = x);
                  break e;
                } else {
                  n(g, x);
                  break;
                }
              else t(g, x);
              x = x.sibling;
            }
            (x = $c(w, g.mode, k)), (x.return = g), (g = x);
          }
          return i(g);
        case Kn:
          return (b = w._init), S(g, x, b(w._payload), k);
      }
      if (go(w)) return h(g, x, w, k);
      if (ro(w)) return m(g, x, w, k);
      Di(g, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        x !== null && x.tag === 6
          ? (n(g, x.sibling), (x = s(x, w)), (x.return = g), (g = x))
          : (n(g, x), (x = Uc(w, g.mode, k)), (x.return = g), (g = x)),
        i(g))
      : n(g, x);
  }
  return S;
}
var Os = r0(!0),
  s0 = r0(!1),
  $a = xr(null),
  Fa = null,
  xs = null,
  ef = null;
function tf() {
  ef = xs = Fa = null;
}
function nf(e) {
  var t = $a.current;
  we($a), (e._currentValue = t);
}
function Lu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Es(e, t) {
  (Fa = e),
    (ef = xs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Gt(e) {
  var t = e._currentValue;
  if (ef !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xs === null)) {
      if (Fa === null) throw Error(I(308));
      (xs = e), (Fa.dependencies = { lanes: 0, firstContext: e });
    } else xs = xs.next = e;
  return t;
}
var Er = null;
function rf(e) {
  Er === null ? (Er = [e]) : Er.push(e);
}
function o0(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), rf(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    In(e, r)
  );
}
function In(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zn = !1;
function sf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function i0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ln(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ar(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      In(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), rf(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    In(e, n)
  );
}
function la(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zd(e, n);
  }
}
function Yp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (s = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Da(e, t, n, r) {
  var s = e.updateQueue;
  Zn = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), i === null ? (o = u) : (i.next = u), (i = c);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== i &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = c)));
  }
  if (o !== null) {
    var d = s.baseState;
    (i = 0), (f = u = c = null), (l = o);
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            m = l;
          switch (((p = t), (y = n), m.tag)) {
            case 1:
              if (((h = m.payload), typeof h == "function")) {
                d = h.call(y, d, p);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = m.payload),
                (p = typeof h == "function" ? h.call(y, d, p) : h),
                p == null)
              )
                break e;
              d = Ee({}, d, p);
              break e;
            case 2:
              Zn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [l]) : p.push(l));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (c = d)) : (f = f.next = y),
          (i |= p);
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (c = d),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = f),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (i |= s.lane), (s = s.next);
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    (Ur |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Xp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(I(191, s));
        s.call(r);
      }
    }
}
var li = {},
  vn = xr(li),
  Vo = xr(li),
  zo = xr(li);
function Tr(e) {
  if (e === li) throw Error(I(174));
  return e;
}
function of(e, t) {
  switch ((ye(zo, t), ye(Vo, e), ye(vn, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hu(t, e));
  }
  we(vn), ye(vn, t);
}
function Bs() {
  we(vn), we(Vo), we(zo);
}
function a0(e) {
  Tr(zo.current);
  var t = Tr(vn.current),
    n = hu(t, e.type);
  t !== n && (ye(Vo, e), ye(vn, n));
}
function af(e) {
  Vo.current === e && (we(vn), we(Vo));
}
var je = xr(0);
function Va(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pc = [];
function lf() {
  for (var e = 0; e < Pc.length; e++)
    Pc[e]._workInProgressVersionPrimary = null;
  Pc.length = 0;
}
var ca = Dn.ReactCurrentDispatcher,
  Mc = Dn.ReactCurrentBatchConfig,
  Ir = 0,
  Ne = null,
  Ve = null,
  He = null,
  za = !1,
  No = !1,
  Wo = 0,
  Hx = 0;
function Je() {
  throw Error(I(321));
}
function cf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function uf(e, t, n, r, s, o) {
  if (
    ((Ir = o),
    (Ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ca.current = e === null || e.memoizedState === null ? Zx : Qx),
    (e = n(r, s)),
    No)
  ) {
    o = 0;
    do {
      if (((No = !1), (Wo = 0), 25 <= o)) throw Error(I(301));
      (o += 1),
        (He = Ve = null),
        (t.updateQueue = null),
        (ca.current = Yx),
        (e = n(r, s));
    } while (No);
  }
  if (
    ((ca.current = Wa),
    (t = Ve !== null && Ve.next !== null),
    (Ir = 0),
    (He = Ve = Ne = null),
    (za = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function df() {
  var e = Wo !== 0;
  return (Wo = 0), e;
}
function fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return He === null ? (Ne.memoizedState = He = e) : (He = He.next = e), He;
}
function Kt() {
  if (Ve === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var t = He === null ? Ne.memoizedState : He.next;
  if (t !== null) (He = t), (Ve = e);
  else {
    if (e === null) throw Error(I(310));
    (Ve = e),
      (e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null,
      }),
      He === null ? (Ne.memoizedState = He = e) : (He = He.next = e);
  }
  return He;
}
function Ho(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lc(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Ve,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      (s.next = o.next), (o.next = i);
    }
    (r.baseQueue = s = o), (n.pending = null);
  }
  if (s !== null) {
    (o = s.next), (r = r.baseState);
    var l = (i = null),
      c = null,
      u = o;
    do {
      var f = u.lane;
      if ((Ir & f) === f)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((l = c = d), (i = r)) : (c = c.next = d),
          (Ne.lanes |= f),
          (Ur |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    c === null ? (i = r) : (c.next = l),
      on(r, t.memoizedState) || (yt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (Ne.lanes |= o), (Ur |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oc(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== s);
    on(o, t.memoizedState) || (yt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function l0() {}
function c0(e, t) {
  var n = Ne,
    r = Kt(),
    s = t(),
    o = !on(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (yt = !0)),
    (r = r.queue),
    ff(f0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (He !== null && He.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qo(9, d0.bind(null, n, r, s, t), void 0, null),
      Ge === null)
    )
      throw Error(I(349));
    Ir & 30 || u0(n, t, s);
  }
  return s;
}
function u0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function d0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), p0(t) && h0(e);
}
function f0(e, t, n) {
  return n(function () {
    p0(t) && h0(e);
  });
}
function p0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function h0(e) {
  var t = In(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function Jp(e) {
  var t = fn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kx.bind(null, Ne, e)),
    [t.memoizedState, e]
  );
}
function qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function m0() {
  return Kt().memoizedState;
}
function ua(e, t, n, r) {
  var s = fn();
  (Ne.flags |= e),
    (s.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var s = Kt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ve !== null) {
    var i = Ve.memoizedState;
    if (((o = i.destroy), r !== null && cf(r, i.deps))) {
      s.memoizedState = qo(t, n, o, r);
      return;
    }
  }
  (Ne.flags |= e), (s.memoizedState = qo(1 | t, n, o, r));
}
function eh(e, t) {
  return ua(8390656, 8, e, t);
}
function ff(e, t) {
  return vl(2048, 8, e, t);
}
function g0(e, t) {
  return vl(4, 2, e, t);
}
function y0(e, t) {
  return vl(4, 4, e, t);
}
function v0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function x0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, v0.bind(null, t, e), n)
  );
}
function pf() {}
function w0(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function S0(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function C0(e, t, n) {
  return Ir & 21
    ? (on(n, t) || ((n = E1()), (Ne.lanes |= n), (Ur |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function qx(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Mc.transition;
  Mc.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (Mc.transition = r);
  }
}
function b0() {
  return Kt().memoizedState;
}
function Gx(e, t, n) {
  var r = cr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    k0(e))
  )
    j0(t, n);
  else if (((n = o0(e, t, n, r)), n !== null)) {
    var s = lt();
    rn(n, e, r, s), N0(n, t, r);
  }
}
function Kx(e, t, n) {
  var r = cr(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (k0(e)) j0(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = o(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), on(l, i))) {
          var c = t.interleaved;
          c === null
            ? ((s.next = s), rf(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = o0(e, t, s, r)),
      n !== null && ((s = lt()), rn(n, e, r, s), N0(n, t, r));
  }
}
function k0(e) {
  var t = e.alternate;
  return e === Ne || (t !== null && t === Ne);
}
function j0(e, t) {
  No = za = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function N0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zd(e, n);
  }
}
var Wa = {
    readContext: Gt,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  Zx = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gt,
    useEffect: eh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ua(4194308, 4, v0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ua(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ua(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = fn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = fn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gx.bind(null, Ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jp,
    useDebugValue: pf,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e);
    },
    useTransition: function () {
      var e = Jp(!1),
        t = e[0];
      return (e = qx.bind(null, e[1])), (fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ne,
        s = fn();
      if (be) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Ge === null)) throw Error(I(349));
        Ir & 30 || u0(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        eh(f0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        qo(9, d0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fn(),
        t = Ge.identifierPrefix;
      if (be) {
        var n = Mn,
          r = Pn;
        (n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qx = {
    readContext: Gt,
    useCallback: w0,
    useContext: Gt,
    useEffect: ff,
    useImperativeHandle: x0,
    useInsertionEffect: g0,
    useLayoutEffect: y0,
    useMemo: S0,
    useReducer: Lc,
    useRef: m0,
    useState: function () {
      return Lc(Ho);
    },
    useDebugValue: pf,
    useDeferredValue: function (e) {
      var t = Kt();
      return C0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Lc(Ho)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: l0,
    useSyncExternalStore: c0,
    useId: b0,
    unstable_isNewReconciler: !1,
  },
  Yx = {
    readContext: Gt,
    useCallback: w0,
    useContext: Gt,
    useEffect: ff,
    useImperativeHandle: x0,
    useInsertionEffect: g0,
    useLayoutEffect: y0,
    useMemo: S0,
    useReducer: Oc,
    useRef: m0,
    useState: function () {
      return Oc(Ho);
    },
    useDebugValue: pf,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ve === null ? (t.memoizedState = e) : C0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Oc(Ho)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: l0,
    useSyncExternalStore: c0,
    useId: b0,
    unstable_isNewReconciler: !1,
  };
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ou(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      s = cr(e),
      o = Ln(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ar(e, o, s)),
      t !== null && (rn(t, e, s, r), la(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      s = cr(e),
      o = Ln(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ar(e, o, s)),
      t !== null && (rn(t, e, s, r), la(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = lt(),
      r = cr(e),
      s = Ln(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = ar(e, s, r)),
      t !== null && (rn(t, e, r, n), la(t, e, r));
  },
};
function th(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Uo(n, r) || !Uo(s, o)
      : !0
  );
}
function E0(e, t, n) {
  var r = !1,
    s = hr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Gt(o))
      : ((s = xt(t) ? Or : rt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ms(e, s) : hr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function nh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Bu(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), sf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = Gt(o))
    : ((o = xt(t) ? Or : rt.current), (s.context = Ms(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ou(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && xl.enqueueReplaceState(s, s.state, null),
      Da(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Is(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jv(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (o) {
    s =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Bc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xx = typeof WeakMap == "function" ? WeakMap : Map;
function T0(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qa || ((qa = !0), (Gu = r)), Iu(e, t);
    }),
    n
  );
}
function _0(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Iu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Iu(e, t),
          typeof r != "function" &&
            (lr === null ? (lr = new Set([this])) : lr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function rh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xx();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = f3.bind(null, e, t, n)), t.then(e, e));
}
function sh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oh(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ln(-1, 1)), (t.tag = 2), ar(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jx = Dn.ReactCurrentOwner,
  yt = !1;
function ot(e, t, n, r) {
  t.child = e === null ? s0(t, null, n, r) : Os(t, e.child, n, r);
}
function ih(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    Es(t, s),
    (r = uf(e, t, n, r, o, s)),
    (n = df()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Un(e, t, s))
      : (be && n && Yd(t), (t.flags |= 1), ot(e, t, r, s), t.child)
  );
}
function ah(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Sf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), R0(e, t, o, r, s))
      : ((e = ha(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Uo), n(i, r) && e.ref === t.ref)
    )
      return Un(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = ur(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function R0(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Uo(o, r) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), Un(e, t, s);
  }
  return Uu(e, t, n, r, s);
}
function A0(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ye(Ss, Tt),
        (Tt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ye(Ss, Tt),
          (Tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ye(Ss, Tt),
        (Tt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ye(Ss, Tt),
      (Tt |= r);
  return ot(e, t, s, n), t.child;
}
function P0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uu(e, t, n, r, s) {
  var o = xt(n) ? Or : rt.current;
  return (
    (o = Ms(t, o)),
    Es(t, s),
    (n = uf(e, t, n, r, o, s)),
    (r = df()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Un(e, t, s))
      : (be && r && Yd(t), (t.flags |= 1), ot(e, t, n, s), t.child)
  );
}
function lh(e, t, n, r, s) {
  if (xt(n)) {
    var o = !0;
    Ba(t);
  } else o = !1;
  if ((Es(t, s), t.stateNode === null))
    da(e, t), E0(t, n, r), Bu(t, n, r, s), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Gt(u))
      : ((u = xt(n) ? Or : rt.current), (u = Ms(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && nh(t, i, r, u)),
      (Zn = !1);
    var p = t.memoizedState;
    (i.state = p),
      Da(t, r, i, s),
      (c = t.memoizedState),
      l !== r || p !== c || vt.current || Zn
        ? (typeof f == "function" && (Ou(t, n, f, r), (c = t.memoizedState)),
          (l = Zn || th(t, n, l, r, p, c, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      i0(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xt(t.type, l)),
      (i.props = u),
      (d = t.pendingProps),
      (p = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Gt(c))
        : ((c = xt(n) ? Or : rt.current), (c = Ms(t, c)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== d || p !== c) && nh(t, i, r, c)),
      (Zn = !1),
      (p = t.memoizedState),
      (i.state = p),
      Da(t, r, i, s);
    var h = t.memoizedState;
    l !== d || p !== h || vt.current || Zn
      ? (typeof y == "function" && (Ou(t, n, y, r), (h = t.memoizedState)),
        (u = Zn || th(t, n, u, r, p, h, c) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, h, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, h, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (i.props = r),
        (i.state = h),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $u(e, t, n, r, o, s);
}
function $u(e, t, n, r, s, o) {
  P0(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && Gp(t, n, !1), Un(e, t, o);
  (r = t.stateNode), (Jx.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Os(t, e.child, null, o)), (t.child = Os(t, null, l, o)))
      : ot(e, t, l, o),
    (t.memoizedState = r.state),
    s && Gp(t, n, !0),
    t.child
  );
}
function M0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qp(e, t.context, !1),
    of(e, t.containerInfo);
}
function ch(e, t, n, r, s) {
  return Ls(), Jd(s), (t.flags |= 256), ot(e, t, n, r), t.child;
}
var Fu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Du(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function L0(e, t, n) {
  var r = t.pendingProps,
    s = je.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ye(je, s & 1),
    e === null)
  )
    return (
      Mu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Cl(i, r, 0, null)),
              (e = Mr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Du(n)),
              (t.memoizedState = Fu),
              e)
            : hf(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return e3(e, t, i, r, l, s, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (s = e.child), (l = s.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = ur(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (o = ur(l, o)) : ((o = Mr(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Du(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ur(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hf(e, t) {
  return (
    (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vi(e, t, n, r) {
  return (
    r !== null && Jd(r),
    Os(t, e.child, null, n),
    (e = hf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e3(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bc(Error(I(422)))), Vi(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = Cl({ mode: "visible", children: r.children }, s, 0, null)),
        (o = Mr(o, s, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Os(t, e.child, null, i),
        (t.child.memoizedState = Du(i)),
        (t.memoizedState = Fu),
        o);
  if (!(t.mode & 1)) return Vi(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(I(419))), (r = Bc(o, r, void 0)), Vi(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), yt || l)) {
    if (((r = Ge), r !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), In(e, s), rn(r, e, s, -1));
    }
    return wf(), (r = Bc(Error(I(421)))), Vi(e, t, i, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = p3.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Rt = ir(s.nextSibling)),
      (At = t),
      (be = !0),
      (tn = null),
      e !== null &&
        ((Dt[Vt++] = Pn),
        (Dt[Vt++] = Mn),
        (Dt[Vt++] = Br),
        (Pn = e.id),
        (Mn = e.overflow),
        (Br = t)),
      (t = hf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lu(e.return, t, n);
}
function Ic(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = s));
}
function O0(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((ot(e, t, r.children, n), (r = je.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uh(e, n, t);
        else if (e.tag === 19) uh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ye(je, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Va(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ic(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Va(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Ic(t, !0, n, null, o);
        break;
      case "together":
        Ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function da(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ur |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ur(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ur(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function t3(e, t, n) {
  switch (t.tag) {
    case 3:
      M0(t), Ls();
      break;
    case 5:
      a0(t);
      break;
    case 1:
      xt(t.type) && Ba(t);
      break;
    case 4:
      of(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      ye($a, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ye(je, je.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? L0(e, t, n)
          : (ye(je, je.current & 1),
            (e = Un(e, t, n)),
            e !== null ? e.sibling : null);
      ye(je, je.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return O0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ye(je, je.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), A0(e, t, n);
  }
  return Un(e, t, n);
}
var B0, Vu, I0, U0;
B0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vu = function () {};
I0 = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Tr(vn.current);
    var o = null;
    switch (n) {
      case "input":
        (s = uu(e, s)), (r = uu(e, r)), (o = []);
        break;
      case "select":
        (s = Ee({}, s, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = pu(e, s)), (r = pu(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = La);
    }
    mu(n, r);
    var i;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ao.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                l[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else n || (o || (o = []), o.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (o = o || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (o = o || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ao.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && xe("scroll", e),
                  o || l === c || (o = []))
                : (o = o || []).push(u, c));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
U0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function co(e, t) {
  if (!be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n3(e, t, n) {
  var r = t.pendingProps;
  switch ((Xd(t), t.tag)) {
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
      return et(t), null;
    case 1:
      return xt(t.type) && Oa(), et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bs(),
        we(vt),
        we(rt),
        lf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (Qu(tn), (tn = null)))),
        Vu(e, t),
        et(t),
        null
      );
    case 5:
      af(t);
      var s = Tr(zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        I0(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return et(t), null;
        }
        if (((e = Tr(vn.current)), Fi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[mn] = t), (r[Do] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < vo.length; s++) xe(vo[s], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe("error", r), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              xp(r, o), xe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                xe("invalid", r);
              break;
            case "textarea":
              Sp(r, o), xe("invalid", r);
          }
          mu(n, o), (s = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var l = o[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (s = ["children", "" + l]))
                : Ao.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  xe("scroll", r);
            }
          switch (n) {
            case "input":
              Ai(r), wp(r, o, !0);
              break;
            case "textarea":
              Ai(r), Cp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = La);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = f1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[mn] = t),
            (e[Do] = r),
            B0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = gu(n, r)), n)) {
              case "dialog":
                xe("cancel", e), xe("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < vo.length; s++) xe(vo[s], e);
                s = r;
                break;
              case "source":
                xe("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", e), xe("load", e), (s = r);
                break;
              case "details":
                xe("toggle", e), (s = r);
                break;
              case "input":
                xp(e, r), (s = uu(e, r)), xe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = Ee({}, r, { value: void 0 })),
                  xe("invalid", e);
                break;
              case "textarea":
                Sp(e, r), (s = pu(e, r)), xe("invalid", e);
                break;
              default:
                s = r;
            }
            mu(n, s), (l = s);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var c = l[o];
                o === "style"
                  ? m1(e, c)
                  : o === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && p1(e, c))
                  : o === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Po(e, c)
                    : typeof c == "number" && Po(e, "" + c)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ao.hasOwnProperty(o)
                      ? c != null && o === "onScroll" && xe("scroll", e)
                      : c != null && Id(e, o, c, i));
              }
            switch (n) {
              case "input":
                Ai(e), wp(e, r, !1);
                break;
              case "textarea":
                Ai(e), Cp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? bs(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      bs(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = La);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return et(t), null;
    case 6:
      if (e && t.stateNode != null) U0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Tr(zo.current)), Tr(vn.current), Fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (o = r.nodeValue !== n) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                $i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return et(t), null;
    case 13:
      if (
        (we(je),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (be && Rt !== null && t.mode & 1 && !(t.flags & 128))
          n0(), Ls(), (t.flags |= 98560), (o = !1);
        else if (((o = Fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(I(317));
            o[mn] = t;
          } else
            Ls(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          et(t), (o = !1);
        } else tn !== null && (Qu(tn), (tn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || je.current & 1 ? ze === 0 && (ze = 3) : wf())),
          t.updateQueue !== null && (t.flags |= 4),
          et(t),
          null);
    case 4:
      return (
        Bs(), Vu(e, t), e === null && $o(t.stateNode.containerInfo), et(t), null
      );
    case 10:
      return nf(t.type._context), et(t), null;
    case 17:
      return xt(t.type) && Oa(), et(t), null;
    case 19:
      if ((we(je), (o = t.memoizedState), o === null)) return et(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) co(o, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Va(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    co(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ye(je, (je.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Le() > Us &&
            ((t.flags |= 128), (r = !0), co(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Va(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              co(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !be)
            )
              return et(t), null;
          } else
            2 * Le() - o.renderingStartTime > Us &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), co(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Le()),
          (t.sibling = null),
          (n = je.current),
          ye(je, r ? (n & 1) | 2 : n & 1),
          t)
        : (et(t), null);
    case 22:
    case 23:
      return (
        xf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Tt & 1073741824 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function r3(e, t) {
  switch ((Xd(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && Oa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bs(),
        we(vt),
        we(rt),
        lf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return af(t), null;
    case 13:
      if (
        (we(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Ls();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return we(je), null;
    case 4:
      return Bs(), null;
    case 10:
      return nf(t.type._context), null;
    case 22:
    case 23:
      return xf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zi = !1,
  nt = !1,
  s3 = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function ws(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Re(e, t, r);
      }
    else n.current = null;
}
function zu(e, t, n) {
  try {
    n();
  } catch (r) {
    Re(e, t, r);
  }
}
var dh = !1;
function o3(e, t) {
  if (((Nu = Aa), (e = z1()), Qd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            c = -1,
            u = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (s !== 0 && d.nodeType !== 3) || (l = i + s),
                d !== o || (r !== 0 && d.nodeType !== 3) || (c = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (p = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === s && (l = i),
                p === o && ++f === r && (c = i),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = y;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eu = { focusedElem: e, selectionRange: n }, Aa = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var m = h.memoizedProps,
                    S = h.memoizedState,
                    g = t.stateNode,
                    x = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Xt(t.type, m),
                      S
                    );
                  g.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (k) {
          Re(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (h = dh), (dh = !1), h;
}
function Eo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && zu(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function wl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[Do], delete t[Ru], delete t[Dx], delete t[Vx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function F0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || F0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = La));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), (e = e.sibling);
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), (e = e.sibling);
}
var Ke = null,
  en = !1;
function zn(e, t, n) {
  for (n = n.child; n !== null; ) D0(e, t, n), (n = n.sibling);
}
function D0(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == "function")
    try {
      yn.onCommitFiberUnmount(fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      nt || ws(n, t);
    case 6:
      var r = Ke,
        s = en;
      (Ke = null),
        zn(e, t, n),
        (Ke = r),
        (en = s),
        Ke !== null &&
          (en
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ke.removeChild(n.stateNode));
      break;
    case 18:
      Ke !== null &&
        (en
          ? ((e = Ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Rc(e.parentNode, n)
              : e.nodeType === 1 && Rc(e, n),
            Bo(e))
          : Rc(Ke, n.stateNode));
      break;
    case 4:
      (r = Ke),
        (s = en),
        (Ke = n.stateNode.containerInfo),
        (en = !0),
        zn(e, t, n),
        (Ke = r),
        (en = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && zu(n, t, i),
            (s = s.next);
        } while (s !== r);
      }
      zn(e, t, n);
      break;
    case 1:
      if (
        !nt &&
        (ws(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Re(n, t, l);
        }
      zn(e, t, n);
      break;
    case 21:
      zn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((nt = (r = nt) || n.memoizedState !== null), zn(e, t, n), (nt = r))
        : zn(e, t, n);
      break;
    default:
      zn(e, t, n);
  }
}
function ph(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new s3()),
      t.forEach(function (r) {
        var s = h3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ke = l.stateNode), (en = !1);
              break e;
            case 3:
              (Ke = l.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (Ke = l.stateNode.containerInfo), (en = !0);
              break e;
          }
          l = l.return;
        }
        if (Ke === null) throw Error(I(160));
        D0(o, i, s), (Ke = null), (en = !1);
        var c = s.alternate;
        c !== null && (c.return = null), (s.return = null);
      } catch (u) {
        Re(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) V0(t, e), (t = t.sibling);
}
function V0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), un(e), r & 4)) {
        try {
          Eo(3, e, e.return), wl(3, e);
        } catch (m) {
          Re(e, e.return, m);
        }
        try {
          Eo(5, e, e.return);
        } catch (m) {
          Re(e, e.return, m);
        }
      }
      break;
    case 1:
      Yt(t, e), un(e), r & 512 && n !== null && ws(n, n.return);
      break;
    case 5:
      if (
        (Yt(t, e),
        un(e),
        r & 512 && n !== null && ws(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Po(s, "");
        } catch (m) {
          Re(e, e.return, m);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && u1(s, o),
              gu(l, i);
            var u = gu(l, o);
            for (i = 0; i < c.length; i += 2) {
              var f = c[i],
                d = c[i + 1];
              f === "style"
                ? m1(s, d)
                : f === "dangerouslySetInnerHTML"
                ? p1(s, d)
                : f === "children"
                ? Po(s, d)
                : Id(s, f, d, u);
            }
            switch (l) {
              case "input":
                du(s, o);
                break;
              case "textarea":
                d1(s, o);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? bs(s, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? bs(s, !!o.multiple, o.defaultValue, !0)
                      : bs(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Do] = o;
          } catch (m) {
            Re(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), un(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (m) {
          Re(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Yt(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bo(t.containerInfo);
        } catch (m) {
          Re(e, e.return, m);
        }
      break;
    case 4:
      Yt(t, e), un(e);
      break;
    case 13:
      Yt(t, e),
        un(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (yf = Le())),
        r & 4 && ph(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((nt = (u = nt) || f), Yt(t, e), (nt = u)) : Yt(t, e),
        un(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (W = e, f = e.child; f !== null; ) {
            for (d = W = f; W !== null; ) {
              switch (((p = W), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Eo(4, p, p.return);
                  break;
                case 1:
                  ws(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (m) {
                      Re(r, n, m);
                    }
                  }
                  break;
                case 5:
                  ws(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    mh(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (W = y)) : mh(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (s = d.stateNode),
                  u
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (c = d.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = h1("display", i)));
              } catch (m) {
                Re(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                Re(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Yt(t, e), un(e), r & 4 && ph(e);
      break;
    case 21:
      break;
    default:
      Yt(t, e), un(e);
  }
}
function un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (F0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Po(s, ""), (r.flags &= -33));
          var o = fh(e);
          qu(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = fh(e);
          Hu(e, l, i);
          break;
        default:
          throw Error(I(161));
      }
    } catch (c) {
      Re(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function i3(e, t, n) {
  (W = e), z0(e);
}
function z0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var s = W,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || zi;
      if (!i) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || nt;
        l = zi;
        var u = nt;
        if (((zi = i), (nt = c) && !u))
          for (W = s; W !== null; )
            (i = W),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? gh(s)
                : c !== null
                ? ((c.return = i), (W = c))
                : gh(s);
        for (; o !== null; ) (W = o), z0(o), (o = o.sibling);
        (W = s), (zi = l), (nt = u);
      }
      hh(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (W = o)) : hh(e);
  }
}
function hh(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || wl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xp(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xp(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                    d !== null && Bo(d);
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
              throw Error(I(163));
          }
        nt || (t.flags & 512 && Wu(t));
      } catch (p) {
        Re(t, t.return, p);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function mh(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function gh(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t);
          } catch (c) {
            Re(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Re(t, s, c);
            }
          }
          var o = t.return;
          try {
            Wu(t);
          } catch (c) {
            Re(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wu(t);
          } catch (c) {
            Re(t, i, c);
          }
      }
    } catch (c) {
      Re(t, t.return, c);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (W = l);
      break;
    }
    W = t.return;
  }
}
var a3 = Math.ceil,
  Ha = Dn.ReactCurrentDispatcher,
  mf = Dn.ReactCurrentOwner,
  Ht = Dn.ReactCurrentBatchConfig,
  te = 0,
  Ge = null,
  Fe = null,
  Qe = 0,
  Tt = 0,
  Ss = xr(0),
  ze = 0,
  Go = null,
  Ur = 0,
  Sl = 0,
  gf = 0,
  To = null,
  gt = null,
  yf = 0,
  Us = 1 / 0,
  Tn = null,
  qa = !1,
  Gu = null,
  lr = null,
  Wi = !1,
  tr = null,
  Ga = 0,
  _o = 0,
  Ku = null,
  fa = -1,
  pa = 0;
function lt() {
  return te & 6 ? Le() : fa !== -1 ? fa : (fa = Le());
}
function cr(e) {
  return e.mode & 1
    ? te & 2 && Qe !== 0
      ? Qe & -Qe
      : Wx.transition !== null
      ? (pa === 0 && (pa = E1()), pa)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : L1(e.type))),
        e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < _o) throw ((_o = 0), (Ku = null), Error(I(185)));
  oi(e, n, r),
    (!(te & 2) || e !== Ge) &&
      (e === Ge && (!(te & 2) && (Sl |= n), ze === 4 && Xn(e, Qe)),
      wt(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((Us = Le() + 500), yl && wr()));
}
function wt(e, t) {
  var n = e.callbackNode;
  Wv(e, t);
  var r = Ra(e, e === Ge ? Qe : 0);
  if (r === 0)
    n !== null && jp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && jp(n), t === 1))
      e.tag === 0 ? zx(yh.bind(null, e)) : J1(yh.bind(null, e)),
        $x(function () {
          !(te & 6) && wr();
        }),
        (n = null);
    else {
      switch (T1(r)) {
        case 1:
          n = Vd;
          break;
        case 4:
          n = j1;
          break;
        case 16:
          n = _a;
          break;
        case 536870912:
          n = N1;
          break;
        default:
          n = _a;
      }
      n = Y0(n, W0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function W0(e, t) {
  if (((fa = -1), (pa = 0), te & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Ts() && e.callbackNode !== n) return null;
  var r = Ra(e, e === Ge ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ka(e, r);
  else {
    t = r;
    var s = te;
    te |= 2;
    var o = q0();
    (Ge !== e || Qe !== t) && ((Tn = null), (Us = Le() + 500), Pr(e, t));
    do
      try {
        u3();
        break;
      } catch (l) {
        H0(e, l);
      }
    while (!0);
    tf(),
      (Ha.current = o),
      (te = s),
      Fe !== null ? (t = 0) : ((Ge = null), (Qe = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Su(e)), s !== 0 && ((r = s), (t = Zu(e, s)))), t === 1)
    )
      throw ((n = Go), Pr(e, 0), Xn(e, r), wt(e, Le()), n);
    if (t === 6) Xn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !l3(s) &&
          ((t = Ka(e, r)),
          t === 2 && ((o = Su(e)), o !== 0 && ((r = o), (t = Zu(e, o)))),
          t === 1))
      )
        throw ((n = Go), Pr(e, 0), Xn(e, r), wt(e, Le()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          jr(e, gt, Tn);
          break;
        case 3:
          if (
            (Xn(e, r), (r & 130023424) === r && ((t = yf + 500 - Le()), 10 < t))
          ) {
            if (Ra(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              lt(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = _u(jr.bind(null, e, gt, Tn), t);
            break;
          }
          jr(e, gt, Tn);
          break;
        case 4:
          if ((Xn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - nn(r);
            (o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o);
          }
          if (
            ((r = s),
            (r = Le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * a3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _u(jr.bind(null, e, gt, Tn), r);
            break;
          }
          jr(e, gt, Tn);
          break;
        case 5:
          jr(e, gt, Tn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return wt(e, Le()), e.callbackNode === n ? W0.bind(null, e) : null;
}
function Zu(e, t) {
  var n = To;
  return (
    e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256),
    (e = Ka(e, t)),
    e !== 2 && ((t = gt), (gt = n), t !== null && Qu(t)),
    e
  );
}
function Qu(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e);
}
function l3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!on(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xn(e, t) {
  for (
    t &= ~gf,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yh(e) {
  if (te & 6) throw Error(I(327));
  Ts();
  var t = Ra(e, 0);
  if (!(t & 1)) return wt(e, Le()), null;
  var n = Ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Su(e);
    r !== 0 && ((t = r), (n = Zu(e, r)));
  }
  if (n === 1) throw ((n = Go), Pr(e, 0), Xn(e, t), wt(e, Le()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jr(e, gt, Tn),
    wt(e, Le()),
    null
  );
}
function vf(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((Us = Le() + 500), yl && wr());
  }
}
function $r(e) {
  tr !== null && tr.tag === 0 && !(te & 6) && Ts();
  var t = te;
  te |= 1;
  var n = Ht.transition,
    r = le;
  try {
    if (((Ht.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (Ht.transition = n), (te = t), !(te & 6) && wr();
  }
}
function xf() {
  (Tt = Ss.current), we(Ss);
}
function Pr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ux(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((Xd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oa();
          break;
        case 3:
          Bs(), we(vt), we(rt), lf();
          break;
        case 5:
          af(r);
          break;
        case 4:
          Bs();
          break;
        case 13:
          we(je);
          break;
        case 19:
          we(je);
          break;
        case 10:
          nf(r.type._context);
          break;
        case 22:
        case 23:
          xf();
      }
      n = n.return;
    }
  if (
    ((Ge = e),
    (Fe = e = ur(e.current, null)),
    (Qe = Tt = t),
    (ze = 0),
    (Go = null),
    (gf = Sl = Ur = 0),
    (gt = To = null),
    Er !== null)
  ) {
    for (t = 0; t < Er.length; t++)
      if (((n = Er[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = s), (r.next = i);
        }
        n.pending = r;
      }
    Er = null;
  }
  return e;
}
function H0(e, t) {
  do {
    var n = Fe;
    try {
      if ((tf(), (ca.current = Wa), za)) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        za = !1;
      }
      if (
        ((Ir = 0),
        (He = Ve = Ne = null),
        (No = !1),
        (Wo = 0),
        (mf.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (Go = t), (Fe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          l = n,
          c = t;
        if (
          ((t = Qe),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            f = l,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = sh(i);
          if (y !== null) {
            (y.flags &= -257),
              oh(y, i, l, o, t),
              y.mode & 1 && rh(o, u, t),
              (t = y),
              (c = u);
            var h = t.updateQueue;
            if (h === null) {
              var m = new Set();
              m.add(c), (t.updateQueue = m);
            } else h.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              rh(o, u, t), wf();
              break e;
            }
            c = Error(I(426));
          }
        } else if (be && l.mode & 1) {
          var S = sh(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              oh(S, i, l, o, t),
              Jd(Is(c, l));
            break e;
          }
        }
        (o = c = Is(c, l)),
          ze !== 4 && (ze = 2),
          To === null ? (To = [o]) : To.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = T0(o, c, t);
              Yp(o, g);
              break e;
            case 1:
              l = c;
              var x = o.type,
                w = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (lr === null || !lr.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = _0(o, l, t);
                Yp(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      K0(n);
    } catch (j) {
      (t = j), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function q0() {
  var e = Ha.current;
  return (Ha.current = Wa), e === null ? Wa : e;
}
function wf() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Ge === null || (!(Ur & 268435455) && !(Sl & 268435455)) || Xn(Ge, Qe);
}
function Ka(e, t) {
  var n = te;
  te |= 2;
  var r = q0();
  (Ge !== e || Qe !== t) && ((Tn = null), Pr(e, t));
  do
    try {
      c3();
      break;
    } catch (s) {
      H0(e, s);
    }
  while (!0);
  if ((tf(), (te = n), (Ha.current = r), Fe !== null)) throw Error(I(261));
  return (Ge = null), (Qe = 0), ze;
}
function c3() {
  for (; Fe !== null; ) G0(Fe);
}
function u3() {
  for (; Fe !== null && !Ov(); ) G0(Fe);
}
function G0(e) {
  var t = Q0(e.alternate, e, Tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? K0(e) : (Fe = t),
    (mf.current = null);
}
function K0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r3(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (Fe = null);
        return;
      }
    } else if (((n = n3(n, t, Tt)), n !== null)) {
      Fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function jr(e, t, n) {
  var r = le,
    s = Ht.transition;
  try {
    (Ht.transition = null), (le = 1), d3(e, t, n, r);
  } finally {
    (Ht.transition = s), (le = r);
  }
  return null;
}
function d3(e, t, n, r) {
  do Ts();
  while (tr !== null);
  if (te & 6) throw Error(I(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hv(e, o),
    e === Ge && ((Fe = Ge = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wi ||
      ((Wi = !0),
      Y0(_a, function () {
        return Ts(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ht.transition), (Ht.transition = null);
    var i = le;
    le = 1;
    var l = te;
    (te |= 4),
      (mf.current = null),
      o3(e, n),
      V0(n, e),
      Ax(Eu),
      (Aa = !!Nu),
      (Eu = Nu = null),
      (e.current = n),
      i3(n),
      Bv(),
      (te = l),
      (le = i),
      (Ht.transition = o);
  } else e.current = n;
  if (
    (Wi && ((Wi = !1), (tr = e), (Ga = s)),
    (o = e.pendingLanes),
    o === 0 && (lr = null),
    $v(n.stateNode),
    wt(e, Le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (qa) throw ((qa = !1), (e = Gu), (Gu = null), e);
  return (
    Ga & 1 && e.tag !== 0 && Ts(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ku ? _o++ : ((_o = 0), (Ku = e))) : (_o = 0),
    wr(),
    null
  );
}
function Ts() {
  if (tr !== null) {
    var e = T1(Ga),
      t = Ht.transition,
      n = le;
    try {
      if (((Ht.transition = null), (le = 16 > e ? 16 : e), tr === null))
        var r = !1;
      else {
        if (((e = tr), (tr = null), (Ga = 0), te & 6)) throw Error(I(331));
        var s = te;
        for (te |= 4, W = e.current; W !== null; ) {
          var o = W,
            i = o.child;
          if (W.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (W = u; W !== null; ) {
                  var f = W;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (W = d);
                  else
                    for (; W !== null; ) {
                      f = W;
                      var p = f.sibling,
                        y = f.return;
                      if (($0(f), f === u)) {
                        W = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (W = p);
                        break;
                      }
                      W = y;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var m = h.child;
                if (m !== null) {
                  h.child = null;
                  do {
                    var S = m.sibling;
                    (m.sibling = null), (m = S);
                  } while (m !== null);
                }
              }
              W = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (W = i);
          else
            e: for (; W !== null; ) {
              if (((o = W), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Eo(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (W = g);
                break e;
              }
              W = o.return;
            }
        }
        var x = e.current;
        for (W = x; W !== null; ) {
          i = W;
          var w = i.child;
          if (i.subtreeFlags & 2064 && w !== null) (w.return = i), (W = w);
          else
            e: for (i = x; W !== null; ) {
              if (((l = W), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wl(9, l);
                  }
                } catch (j) {
                  Re(l, l.return, j);
                }
              if (l === i) {
                W = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                (k.return = l.return), (W = k);
                break e;
              }
              W = l.return;
            }
        }
        if (
          ((te = s), wr(), yn && typeof yn.onPostCommitFiberRoot == "function")
        )
          try {
            yn.onPostCommitFiberRoot(fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (Ht.transition = t);
    }
  }
  return !1;
}
function vh(e, t, n) {
  (t = Is(n, t)),
    (t = T0(e, t, 1)),
    (e = ar(e, t, 1)),
    (t = lt()),
    e !== null && (oi(e, 1, t), wt(e, t));
}
function Re(e, t, n) {
  if (e.tag === 3) vh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (lr === null || !lr.has(r)))
        ) {
          (e = Is(n, e)),
            (e = _0(t, e, 1)),
            (t = ar(t, e, 1)),
            (e = lt()),
            t !== null && (oi(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function f3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ge === e &&
      (Qe & n) === n &&
      (ze === 4 || (ze === 3 && (Qe & 130023424) === Qe && 500 > Le() - yf)
        ? Pr(e, 0)
        : (gf |= n)),
    wt(e, t);
}
function Z0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Li), (Li <<= 1), !(Li & 130023424) && (Li = 4194304))
      : (t = 1));
  var n = lt();
  (e = In(e, t)), e !== null && (oi(e, t, n), wt(e, n));
}
function p3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Z0(e, n);
}
function h3(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Z0(e, n);
}
var Q0;
Q0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || vt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), t3(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), be && t.flags & 1048576 && e0(t, Ua, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      da(e, t), (e = t.pendingProps);
      var s = Ms(t, rt.current);
      Es(t, n), (s = uf(null, t, r, e, s, n));
      var o = df();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((o = !0), Ba(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            sf(t),
            (s.updater = xl),
            (t.stateNode = s),
            (s._reactInternals = t),
            Bu(t, r, e, n),
            (t = $u(null, t, r, !0, o, n)))
          : ((t.tag = 0), be && o && Yd(t), ot(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (da(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = g3(r)),
          (e = Xt(r, e)),
          s)
        ) {
          case 0:
            t = Uu(null, t, r, e, n);
            break e;
          case 1:
            t = lh(null, t, r, e, n);
            break e;
          case 11:
            t = ih(null, t, r, e, n);
            break e;
          case 14:
            t = ah(null, t, r, Xt(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        Uu(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        lh(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((M0(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          i0(e, t),
          Da(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (s = Is(Error(I(423)), t)), (t = ch(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Is(Error(I(424)), t)), (t = ch(e, t, r, n, s));
            break e;
          } else
            for (
              Rt = ir(t.stateNode.containerInfo.firstChild),
                At = t,
                be = !0,
                tn = null,
                n = s0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ls(), r === s)) {
            t = Un(e, t, n);
            break e;
          }
          ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        a0(t),
        e === null && Mu(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        Tu(r, s) ? (i = null) : o !== null && Tu(r, o) && (t.flags |= 32),
        P0(e, t),
        ot(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Mu(t), null;
    case 13:
      return L0(e, t, n);
    case 4:
      return (
        of(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Os(t, null, r, n)) : ot(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        ih(e, t, r, s, n)
      );
    case 7:
      return ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          ye($a, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (on(o.value, i)) {
            if (o.children === s.children && !vt.current) {
              t = Un(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                i = o.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      (c = Ln(-1, n & -n)), (c.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (c.next = c)
                          : ((c.next = f.next), (f.next = c)),
                          (u.pending = c);
                      }
                    }
                    (o.lanes |= n),
                      (c = o.alternate),
                      c !== null && (c.lanes |= n),
                      Lu(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(I(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Lu(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ot(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Es(t, n),
        (s = Gt(s)),
        (r = r(s)),
        (t.flags |= 1),
        ot(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Xt(r, t.pendingProps)),
        (s = Xt(r.type, s)),
        ah(e, t, r, s, n)
      );
    case 15:
      return R0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        da(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), Ba(t)) : (e = !1),
        Es(t, n),
        E0(t, r, s),
        Bu(t, r, s, n),
        $u(null, t, r, !0, e, n)
      );
    case 19:
      return O0(e, t, n);
    case 22:
      return A0(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Y0(e, t) {
  return k1(e, t);
}
function m3(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Wt(e, t, n, r) {
  return new m3(e, t, n, r);
}
function Sf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function g3(e) {
  if (typeof e == "function") return Sf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $d)) return 11;
    if (e === Fd) return 14;
  }
  return 2;
}
function ur(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Wt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ha(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Sf(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ds:
        return Mr(n.children, s, o, t);
      case Ud:
        (i = 8), (s |= 8);
        break;
      case iu:
        return (
          (e = Wt(12, n, t, s | 2)), (e.elementType = iu), (e.lanes = o), e
        );
      case au:
        return (e = Wt(13, n, t, s)), (e.elementType = au), (e.lanes = o), e;
      case lu:
        return (e = Wt(19, n, t, s)), (e.elementType = lu), (e.lanes = o), e;
      case a1:
        return Cl(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case o1:
              i = 10;
              break e;
            case i1:
              i = 9;
              break e;
            case $d:
              i = 11;
              break e;
            case Fd:
              i = 14;
              break e;
            case Kn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Wt(i, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Mr(e, t, n, r) {
  return (e = Wt(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
  return (
    (e = Wt(22, e, r, t)),
    (e.elementType = a1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Uc(e, t, n) {
  return (e = Wt(6, e, null, t)), (e.lanes = n), e;
}
function $c(e, t, n) {
  return (
    (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y3(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xc(0)),
    (this.expirationTimes = xc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Cf(e, t, n, r, s, o, i, l, c) {
  return (
    (e = new y3(e, t, n, l, c)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Wt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sf(o),
    e
  );
}
function v3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: us,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function X0(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (Wr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return X1(e, n, t);
  }
  return t;
}
function J0(e, t, n, r, s, o, i, l, c) {
  return (
    (e = Cf(n, r, !0, e, s, o, i, l, c)),
    (e.context = X0(null)),
    (n = e.current),
    (r = lt()),
    (s = cr(n)),
    (o = Ln(r, s)),
    (o.callback = t ?? null),
    ar(n, o, s),
    (e.current.lanes = s),
    oi(e, s, r),
    wt(e, r),
    e
  );
}
function bl(e, t, n, r) {
  var s = t.current,
    o = lt(),
    i = cr(s);
  return (
    (n = X0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ln(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ar(s, t, i)),
    e !== null && (rn(e, s, i, o), la(e, s, i)),
    i
  );
}
function Za(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bf(e, t) {
  xh(e, t), (e = e.alternate) && xh(e, t);
}
function x3() {
  return null;
}
var eg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function kf(e) {
  this._internalRoot = e;
}
kl.prototype.render = kf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  bl(e, t, null, null);
};
kl.prototype.unmount = kf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $r(function () {
      bl(null, e, null, null);
    }),
      (t[Bn] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = A1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++);
    Yn.splice(n, 0, e), n === 0 && M1(e);
  }
};
function jf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wh() {}
function w3(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Za(i);
        o.call(u);
      };
    }
    var i = J0(t, r, e, 0, null, !1, !1, "", wh);
    return (
      (e._reactRootContainer = i),
      (e[Bn] = i.current),
      $o(e.nodeType === 8 ? e.parentNode : e),
      $r(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Za(c);
      l.call(u);
    };
  }
  var c = Cf(e, 0, !1, null, null, !1, !1, "", wh);
  return (
    (e._reactRootContainer = c),
    (e[Bn] = c.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    $r(function () {
      bl(t, c, n, r);
    }),
    c
  );
}
function Nl(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = Za(i);
        l.call(c);
      };
    }
    bl(t, i, e, s);
  } else i = w3(n, t, e, s, r);
  return Za(i);
}
_1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yo(t.pendingLanes);
        n !== 0 &&
          (zd(t, n | 1), wt(t, Le()), !(te & 6) && ((Us = Le() + 500), wr()));
      }
      break;
    case 13:
      $r(function () {
        var r = In(e, 1);
        if (r !== null) {
          var s = lt();
          rn(r, e, 1, s);
        }
      }),
        bf(e, 1);
  }
};
Wd = function (e) {
  if (e.tag === 13) {
    var t = In(e, 134217728);
    if (t !== null) {
      var n = lt();
      rn(t, e, 134217728, n);
    }
    bf(e, 134217728);
  }
};
R1 = function (e) {
  if (e.tag === 13) {
    var t = cr(e),
      n = In(e, t);
    if (n !== null) {
      var r = lt();
      rn(n, e, t, r);
    }
    bf(e, t);
  }
};
A1 = function () {
  return le;
};
P1 = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
vu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((du(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = gl(r);
            if (!s) throw Error(I(90));
            c1(r), du(r, s);
          }
        }
      }
      break;
    case "textarea":
      d1(e, n);
      break;
    case "select":
      (t = n.value), t != null && bs(e, !!n.multiple, t, !1);
  }
};
v1 = vf;
x1 = $r;
var S3 = { usingClientEntryPoint: !1, Events: [ai, ms, gl, g1, y1, vf] },
  uo = {
    findFiberByHostInstance: Nr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  C3 = {
    bundleType: uo.bundleType,
    version: uo.version,
    rendererPackageName: uo.rendererPackageName,
    rendererConfig: uo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = C1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: uo.findFiberByHostInstance || x3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hi.isDisabled && Hi.supportsFiber)
    try {
      (fl = Hi.inject(C3)), (yn = Hi);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S3;
Bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jf(t)) throw Error(I(200));
  return v3(e, t, null, n);
};
Bt.createRoot = function (e, t) {
  if (!jf(e)) throw Error(I(299));
  var n = !1,
    r = "",
    s = eg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Cf(e, 1, !1, null, null, n, !1, r, s)),
    (e[Bn] = t.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    new kf(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = C1(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return $r(e);
};
Bt.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(I(200));
  return Nl(null, e, t, !0, n);
};
Bt.hydrateRoot = function (e, t, n) {
  if (!jf(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = eg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = J0(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[Bn] = t.current),
    $o(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new kl(t);
};
Bt.render = function (e, t, n) {
  if (!jl(t)) throw Error(I(200));
  return Nl(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(I(40));
  return e._reactRootContainer
    ? ($r(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bn] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = vf;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Nl(e, t, n, !1, r);
};
Bt.version = "18.3.1-next-f1338f8080-20240426";
function tg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tg);
    } catch (e) {
      console.error(e);
    }
}
tg(), (t1.exports = Bt);
var b3 = t1.exports,
  ng,
  Sh = b3;
(ng = Sh.createRoot), Sh.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ko() {
  return (
    (Ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ko.apply(this, arguments)
  );
}
var nr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nr || (nr = {}));
const Ch = "popstate";
function k3(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: o, search: i, hash: l } = r.location;
    return Yu(
      "",
      { pathname: o, search: i, hash: l },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Qa(s);
  }
  return N3(t, n, null, e);
}
function De(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function j3() {
  return Math.random().toString(36).substr(2, 8);
}
function bh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Yu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ko(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gs(t) : t,
      { state: n, key: (t && t.key) || r || j3() }
    )
  );
}
function Qa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function N3(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = r,
    i = s.history,
    l = nr.Pop,
    c = null,
    u = f();
  u == null && ((u = 0), i.replaceState(Ko({}, i.state, { idx: u }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = nr.Pop;
    let S = f(),
      g = S == null ? null : S - u;
    (u = S), c && c({ action: l, location: m.location, delta: g });
  }
  function p(S, g) {
    l = nr.Push;
    let x = Yu(m.location, S, g);
    u = f() + 1;
    let w = bh(x, u),
      k = m.createHref(x);
    try {
      i.pushState(w, "", k);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      s.location.assign(k);
    }
    o && c && c({ action: l, location: m.location, delta: 1 });
  }
  function y(S, g) {
    l = nr.Replace;
    let x = Yu(m.location, S, g);
    u = f();
    let w = bh(x, u),
      k = m.createHref(x);
    i.replaceState(w, "", k),
      o && c && c({ action: l, location: m.location, delta: 0 });
  }
  function h(S) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      x = typeof S == "string" ? S : Qa(S);
    return (
      (x = x.replace(/ $/, "%20")),
      De(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          x
      ),
      new URL(x, g)
    );
  }
  let m = {
    get action() {
      return l;
    },
    get location() {
      return e(s, i);
    },
    listen(S) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Ch, d),
        (c = S),
        () => {
          s.removeEventListener(Ch, d), (c = null);
        }
      );
    },
    createHref(S) {
      return t(s, S);
    },
    createURL: h,
    encodeLocation(S) {
      let g = h(S);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: p,
    replace: y,
    go(S) {
      return i.go(S);
    },
  };
  return m;
}
var kh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(kh || (kh = {}));
function E3(e, t, n) {
  return n === void 0 && (n = "/"), T3(e, t, n, !1);
}
function T3(e, t, n, r) {
  let s = typeof t == "string" ? Gs(t) : t,
    o = Nf(s.pathname || "/", n);
  if (o == null) return null;
  let i = sg(e);
  _3(i);
  let l = null;
  for (let c = 0; l == null && c < i.length; ++c) {
    let u = F3(o);
    l = U3(i[c], u, r);
  }
  return l;
}
function sg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, i, l) => {
    let c = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    c.relativePath.startsWith("/") &&
      (De(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = dr([r, c.relativePath]),
      f = n.concat(c);
    o.children &&
      o.children.length > 0 &&
      (De(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      sg(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: B3(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) s(o, i);
      else for (let c of og(o.path)) s(o, i, c);
    }),
    t
  );
}
function og(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let i = og(r.join("/")),
    l = [];
  return (
    l.push(...i.map((c) => (c === "" ? o : [o, c].join("/")))),
    s && l.push(...i),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function _3(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : I3(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const R3 = /^:[\w-]+$/,
  A3 = 3,
  P3 = 2,
  M3 = 1,
  L3 = 10,
  O3 = -2,
  jh = (e) => e === "*";
function B3(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(jh) && (r += O3),
    t && (r += P3),
    n
      .filter((s) => !jh(s))
      .reduce((s, o) => s + (R3.test(o) ? A3 : o === "" ? M3 : L3), r)
  );
}
function I3(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function U3(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    o = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      d = Nh(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        f
      ),
      p = c.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Nh(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(s, d.params),
      i.push({
        params: s,
        pathname: dr([o, d.pathname]),
        pathnameBase: W3(dr([o, d.pathnameBase])),
        route: p,
      }),
      d.pathnameBase !== "/" && (o = dr([o, d.pathnameBase]));
  }
  return i;
}
function Nh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $3(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let o = s[0],
    i = o.replace(/(.)\/+$/, "$1"),
    l = s.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: p, isOptional: y } = f;
      if (p === "*") {
        let m = l[d] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const h = l[d];
      return (
        y && !h ? (u[p] = void 0) : (u[p] = (h || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function $3(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function F3(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      rg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Nf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function D3(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Gs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : V3(n, t)) : t,
    search: H3(r),
    hash: q3(s),
  };
}
function V3(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Fc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function z3(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ig(e, t) {
  let n = z3(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ag(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Gs(e))
    : ((s = Ko({}, e)),
      De(
        !s.pathname || !s.pathname.includes("?"),
        Fc("?", "pathname", "search", s)
      ),
      De(
        !s.pathname || !s.pathname.includes("#"),
        Fc("#", "pathname", "hash", s)
      ),
      De(!s.search || !s.search.includes("#"), Fc("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    i = o ? "/" : s.pathname,
    l;
  if (i == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      s.pathname = p.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let c = D3(s, l),
    u = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c;
}
const dr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  W3 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  H3 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  q3 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function G3(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const lg = ["post", "put", "patch", "delete"];
new Set(lg);
const K3 = ["get", ...lg];
new Set(K3);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
const Ef = T.createContext(null),
  Z3 = T.createContext(null),
  Hr = T.createContext(null),
  El = T.createContext(null),
  qr = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cg = T.createContext(null);
function Q3(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ci() || De(!1);
  let { basename: r, navigator: s } = T.useContext(Hr),
    { hash: o, pathname: i, search: l } = dg(e, { relative: n }),
    c = i;
  return (
    r !== "/" && (c = i === "/" ? r : dr([r, i])),
    s.createHref({ pathname: c, search: l, hash: o })
  );
}
function ci() {
  return T.useContext(El) != null;
}
function Ks() {
  return ci() || De(!1), T.useContext(El).location;
}
function ug(e) {
  T.useContext(Hr).static || T.useLayoutEffect(e);
}
function Ut() {
  let { isDataRoute: e } = T.useContext(qr);
  return e ? c5() : Y3();
}
function Y3() {
  ci() || De(!1);
  let e = T.useContext(Ef),
    { basename: t, future: n, navigator: r } = T.useContext(Hr),
    { matches: s } = T.useContext(qr),
    { pathname: o } = Ks(),
    i = JSON.stringify(ig(s, n.v7_relativeSplatPath)),
    l = T.useRef(!1);
  return (
    ug(() => {
      l.current = !0;
    }),
    T.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = ag(u, JSON.parse(i), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : dr([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, i, o, e]
    )
  );
}
function dg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = T.useContext(Hr),
    { matches: s } = T.useContext(qr),
    { pathname: o } = Ks(),
    i = JSON.stringify(ig(s, r.v7_relativeSplatPath));
  return T.useMemo(() => ag(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function X3(e, t) {
  return J3(e, t);
}
function J3(e, t, n, r) {
  ci() || De(!1);
  let { navigator: s } = T.useContext(Hr),
    { matches: o } = T.useContext(qr),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let c = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Ks(),
    f;
  if (t) {
    var d;
    let S = typeof t == "string" ? Gs(t) : t;
    c === "/" || ((d = S.pathname) != null && d.startsWith(c)) || De(!1),
      (f = S);
  } else f = u;
  let p = f.pathname || "/",
    y = p;
  if (c !== "/") {
    let S = c.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let h = E3(e, { pathname: y }),
    m = s5(
      h &&
        h.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: dr([
              c,
              s.encodeLocation
                ? s.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? c
                : dr([
                    c,
                    s.encodeLocation
                      ? s.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && m
    ? T.createElement(
        El.Provider,
        {
          value: {
            location: Zo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: nr.Pop,
          },
        },
        m
      )
    : m;
}
function e5() {
  let e = l5(),
    t = G3(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement("h2", null, "Unexpected Application Error!"),
    T.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? T.createElement("pre", { style: s }, n) : null,
    null
  );
}
const t5 = T.createElement(e5, null);
class n5 extends T.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          qr.Provider,
          { value: this.props.routeContext },
          T.createElement(cg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function r5(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = T.useContext(Ef);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(qr.Provider, { value: t }, r)
  );
}
function s5(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (s = n) == null ? void 0 : s.errors;
  if (l != null) {
    let f = i.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    f >= 0 || De(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let d = i[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          h =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || h) {
          (c = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, d, p) => {
    let y,
      h = !1,
      m = null,
      S = null;
    n &&
      ((y = l && d.route.id ? l[d.route.id] : void 0),
      (m = d.route.errorElement || t5),
      c &&
        (u < 0 && p === 0
          ? ((h = !0), (S = null))
          : u === p &&
            ((h = !0), (S = d.route.hydrateFallbackElement || null))));
    let g = t.concat(i.slice(0, p + 1)),
      x = () => {
        let w;
        return (
          y
            ? (w = m)
            : h
            ? (w = S)
            : d.route.Component
            ? (w = T.createElement(d.route.Component, null))
            : d.route.element
            ? (w = d.route.element)
            : (w = f),
          T.createElement(r5, {
            match: d,
            routeContext: { outlet: f, matches: g, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? T.createElement(n5, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: y,
          children: x(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var fg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(fg || {}),
  Ya = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ya || {});
function o5(e) {
  let t = T.useContext(Ef);
  return t || De(!1), t;
}
function i5(e) {
  let t = T.useContext(Z3);
  return t || De(!1), t;
}
function a5(e) {
  let t = T.useContext(qr);
  return t || De(!1), t;
}
function pg(e) {
  let t = a5(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || De(!1), n.route.id;
}
function l5() {
  var e;
  let t = T.useContext(cg),
    n = i5(Ya.UseRouteError),
    r = pg(Ya.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function c5() {
  let { router: e } = o5(fg.UseNavigateStable),
    t = pg(Ya.UseNavigateStable),
    n = T.useRef(!1);
  return (
    ug(() => {
      n.current = !0;
    }),
    T.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Zo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Q(e) {
  De(!1);
}
function u5(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = nr.Pop,
    navigator: o,
    static: i = !1,
    future: l,
  } = e;
  ci() && De(!1);
  let c = t.replace(/^\/*/, "/"),
    u = T.useMemo(
      () => ({
        basename: c,
        navigator: o,
        static: i,
        future: Zo({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, o, i]
    );
  typeof r == "string" && (r = Gs(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: p = "",
      state: y = null,
      key: h = "default",
    } = r,
    m = T.useMemo(() => {
      let S = Nf(f, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: p, state: y, key: h },
            navigationType: s,
          };
    }, [c, f, d, p, y, h, s]);
  return m == null
    ? null
    : T.createElement(
        Hr.Provider,
        { value: u },
        T.createElement(El.Provider, { children: n, value: m })
      );
}
function Cn(e) {
  let { children: t, location: n } = e;
  return X3(Xu(t), n);
}
new Promise(() => {});
function Xu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    T.Children.forEach(e, (r, s) => {
      if (!T.isValidElement(r)) return;
      let o = [...t, s];
      if (r.type === T.Fragment) {
        n.push.apply(n, Xu(r.props.children, o));
        return;
      }
      r.type !== Q && De(!1), !r.props.index || !r.props.children || De(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Xu(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ju() {
  return (
    (Ju = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ju.apply(this, arguments)
  );
}
function d5(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function f5(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function p5(e, t) {
  return e.button === 0 && (!t || t === "_self") && !f5(e);
}
function ed(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((s) => [n, s]) : [[n, r]]);
          }, [])
    )
  );
}
function h5(e, t) {
  let n = ed(e);
  return (
    t &&
      t.forEach((r, s) => {
        n.has(s) ||
          t.getAll(s).forEach((o) => {
            n.append(s, o);
          });
      }),
    n
  );
}
const m5 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  g5 = "6";
try {
  window.__reactRouterVersion = g5;
} catch {}
const y5 = "startTransition",
  Eh = su[y5];
function v5(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    o = T.useRef();
  o.current == null && (o.current = k3({ window: s, v5Compat: !0 }));
  let i = o.current,
    [l, c] = T.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = T.useCallback(
      (d) => {
        u && Eh ? Eh(() => c(d)) : c(d);
      },
      [c, u]
    );
  return (
    T.useLayoutEffect(() => i.listen(f), [i, f]),
    T.createElement(u5, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const x5 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  w5 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oe = T.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: o,
        replace: i,
        state: l,
        target: c,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      p = d5(t, m5),
      { basename: y } = T.useContext(Hr),
      h,
      m = !1;
    if (typeof u == "string" && w5.test(u) && ((h = u), x5))
      try {
        let w = new URL(window.location.href),
          k = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          j = Nf(k.pathname, y);
        k.origin === w.origin && j != null
          ? (u = j + k.search + k.hash)
          : (m = !0);
      } catch {}
    let S = Q3(u, { relative: s }),
      g = S5(u, {
        replace: i,
        state: l,
        target: c,
        preventScrollReset: f,
        relative: s,
        unstable_viewTransition: d,
      });
    function x(w) {
      r && r(w), w.defaultPrevented || g(w);
    }
    return T.createElement(
      "a",
      Ju({}, p, { href: h || S, onClick: m || o ? r : x, ref: n, target: c })
    );
  });
var Th;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Th || (Th = {}));
var _h;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_h || (_h = {}));
function S5(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Ut(),
    u = Ks(),
    f = dg(e, { relative: i });
  return T.useCallback(
    (d) => {
      if (p5(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : Qa(u) === Qa(f);
        c(e, {
          replace: p,
          state: s,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: l,
        });
      }
    },
    [u, c, f, r, s, n, e, o, i, l]
  );
}
function kt(e) {
  let t = T.useRef(ed(e)),
    n = T.useRef(!1),
    r = Ks(),
    s = T.useMemo(() => h5(r.search, n.current ? null : t.current), [r.search]),
    o = Ut(),
    i = T.useCallback(
      (l, c) => {
        const u = ed(typeof l == "function" ? l(s) : l);
        (n.current = !0), o("?" + u, c);
      },
      [o, s]
    );
  return [s, i];
}
const C5 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  Rh = (e) => {
    let t;
    const n = new Set(),
      r = (f, d) => {
        const p = typeof f == "function" ? f(t) : f;
        if (!Object.is(p, t)) {
          const y = t;
          (t =
            d ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, t, p)),
            n.forEach((h) => h(t, y));
        }
      },
      s = () => t,
      c = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (f) => (n.add(f), () => n.delete(f)),
        destroy: () => {
          (C5 ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, s, c));
    return c;
  },
  b5 = (e) => (e ? Rh(e) : Rh);
var hg = { exports: {} },
  mg = {},
  gg = { exports: {} },
  yg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = T;
function k5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var j5 = typeof Object.is == "function" ? Object.is : k5,
  N5 = $s.useState,
  E5 = $s.useEffect,
  T5 = $s.useLayoutEffect,
  _5 = $s.useDebugValue;
function R5(e, t) {
  var n = t(),
    r = N5({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    o = r[1];
  return (
    T5(
      function () {
        (s.value = n), (s.getSnapshot = t), Dc(s) && o({ inst: s });
      },
      [e, n, t]
    ),
    E5(
      function () {
        return (
          Dc(s) && o({ inst: s }),
          e(function () {
            Dc(s) && o({ inst: s });
          })
        );
      },
      [e]
    ),
    _5(n),
    n
  );
}
function Dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !j5(e, n);
  } catch {
    return !0;
  }
}
function A5(e, t) {
  return t();
}
var P5 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? A5
    : R5;
yg.useSyncExternalStore =
  $s.useSyncExternalStore !== void 0 ? $s.useSyncExternalStore : P5;
gg.exports = yg;
var M5 = gg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tl = T,
  L5 = M5;
function O5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var B5 = typeof Object.is == "function" ? Object.is : O5,
  I5 = L5.useSyncExternalStore,
  U5 = Tl.useRef,
  $5 = Tl.useEffect,
  F5 = Tl.useMemo,
  D5 = Tl.useDebugValue;
mg.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var o = U5(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = F5(
    function () {
      function c(y) {
        if (!u) {
          if (((u = !0), (f = y), (y = r(y)), s !== void 0 && i.hasValue)) {
            var h = i.value;
            if (s(h, y)) return (d = h);
          }
          return (d = y);
        }
        if (((h = d), B5(f, y))) return h;
        var m = r(y);
        return s !== void 0 && s(h, m) ? h : ((f = y), (d = m));
      }
      var u = !1,
        f,
        d,
        p = n === void 0 ? null : n;
      return [
        function () {
          return c(t());
        },
        p === null
          ? void 0
          : function () {
              return c(p());
            },
      ];
    },
    [t, n, r, s]
  );
  var l = I5(e, o[0], o[1]);
  return (
    $5(
      function () {
        (i.hasValue = !0), (i.value = l);
      },
      [l]
    ),
    D5(l),
    l
  );
};
hg.exports = mg;
var V5 = hg.exports;
const z5 = ul(V5),
  Tf = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  { useDebugValue: W5 } = Jm,
  { useSyncExternalStoreWithSelector: H5 } = z5;
let Ah = !1;
const q5 = (e) => e;
function G5(e, t = q5, n) {
  (Tf ? "production" : void 0) !== "production" &&
    n &&
    !Ah &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (Ah = !0));
  const r = H5(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return W5(r), r;
}
const Ph = (e) => {
    (Tf ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? b5(e) : e,
      n = (r, s) => G5(t, r, s);
    return Object.assign(n, t), n;
  },
  vg = (e) => (e ? Ph(e) : Ph);
var K5 = (e) => (
  (Tf ? "production" : void 0) !== "production" &&
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    ),
  vg(e)
);
const _l = vg((e) => ({
  isAuthenticated: !!localStorage.getItem("access_token"),
  login: () => e({ isAuthenticated: !0 }),
  logout: () => {
    localStorage.removeItem("access_token"),
      localStorage.removeItem("refresh_token"),
      e({ isAuthenticated: !1 });
  },
}));
function xg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Z5 } = Object.prototype,
  { getPrototypeOf: _f } = Object,
  Rl = ((e) => (t) => {
    const n = Z5.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ln = (e) => ((e = e.toLowerCase()), (t) => Rl(t) === e),
  Al = (e) => (t) => typeof t === e,
  { isArray: Zs } = Array,
  Qo = Al("undefined");
function Q5(e) {
  return (
    e !== null &&
    !Qo(e) &&
    e.constructor !== null &&
    !Qo(e.constructor) &&
    Pt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const wg = ln("ArrayBuffer");
function Y5(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wg(e.buffer)),
    t
  );
}
const X5 = Al("string"),
  Pt = Al("function"),
  Sg = Al("number"),
  Pl = (e) => e !== null && typeof e == "object",
  J5 = (e) => e === !0 || e === !1,
  ma = (e) => {
    if (Rl(e) !== "object") return !1;
    const t = _f(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ew = ln("Date"),
  tw = ln("File"),
  nw = ln("Blob"),
  rw = ln("FileList"),
  sw = (e) => Pl(e) && Pt(e.pipe),
  ow = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Pt(e.append) &&
          ((t = Rl(e)) === "formdata" ||
            (t === "object" &&
              Pt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  iw = ln("URLSearchParams"),
  [aw, lw, cw, uw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ln
  ),
  dw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ui(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Zs(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Cg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const _r =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  bg = (e) => !Qo(e) && e !== _r;
function td() {
  const { caseless: e } = (bg(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Cg(t, s)) || s;
      ma(t[o]) && ma(r)
        ? (t[o] = td(t[o], r))
        : ma(r)
        ? (t[o] = td({}, r))
        : Zs(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ui(arguments[r], n);
  return t;
}
const fw = (e, t, n, { allOwnKeys: r } = {}) => (
    ui(
      t,
      (s, o) => {
        n && Pt(s) ? (e[o] = xg(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  pw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  hw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  mw = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && _f(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  gw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  yw = (e) => {
    if (!e) return null;
    if (Zs(e)) return e;
    let t = e.length;
    if (!Sg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  vw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && _f(Uint8Array)),
  xw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  ww = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Sw = ln("HTMLFormElement"),
  Cw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Mh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  bw = ln("RegExp"),
  kg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ui(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  kw = (e) => {
    kg(e, (t, n) => {
      if (Pt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Pt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  jw = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Zs(e) ? r(e) : r(String(e).split(t)), n;
  },
  Nw = () => {},
  Ew = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Vc = "abcdefghijklmnopqrstuvwxyz",
  Lh = "0123456789",
  jg = { DIGIT: Lh, ALPHA: Vc, ALPHA_DIGIT: Vc + Vc.toUpperCase() + Lh },
  Tw = (e = 16, t = jg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _w(e) {
  return !!(
    e &&
    Pt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Rw = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Pl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Zs(r) ? [] : {};
            return (
              ui(r, (i, l) => {
                const c = n(i, s + 1);
                !Qo(c) && (o[l] = c);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Aw = ln("AsyncFunction"),
  Pw = (e) => e && (Pl(e) || Pt(e)) && Pt(e.then) && Pt(e.catch),
  Ng = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          _r.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === _r && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), _r.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Pt(_r.postMessage)
  ),
  Mw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(_r)
      : (typeof process < "u" && process.nextTick) || Ng,
  A = {
    isArray: Zs,
    isArrayBuffer: wg,
    isBuffer: Q5,
    isFormData: ow,
    isArrayBufferView: Y5,
    isString: X5,
    isNumber: Sg,
    isBoolean: J5,
    isObject: Pl,
    isPlainObject: ma,
    isReadableStream: aw,
    isRequest: lw,
    isResponse: cw,
    isHeaders: uw,
    isUndefined: Qo,
    isDate: ew,
    isFile: tw,
    isBlob: nw,
    isRegExp: bw,
    isFunction: Pt,
    isStream: sw,
    isURLSearchParams: iw,
    isTypedArray: vw,
    isFileList: rw,
    forEach: ui,
    merge: td,
    extend: fw,
    trim: dw,
    stripBOM: pw,
    inherits: hw,
    toFlatObject: mw,
    kindOf: Rl,
    kindOfTest: ln,
    endsWith: gw,
    toArray: yw,
    forEachEntry: xw,
    matchAll: ww,
    isHTMLForm: Sw,
    hasOwnProperty: Mh,
    hasOwnProp: Mh,
    reduceDescriptors: kg,
    freezeMethods: kw,
    toObjectSet: jw,
    toCamelCase: Cw,
    noop: Nw,
    toFiniteNumber: Ew,
    findKey: Cg,
    global: _r,
    isContextDefined: bg,
    ALPHABET: jg,
    generateString: Tw,
    isSpecCompliantForm: _w,
    toJSONObject: Rw,
    isAsyncFn: Aw,
    isThenable: Pw,
    setImmediate: Ng,
    asap: Mw,
  };
function Z(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
A.inherits(Z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Eg = Z.prototype,
  Tg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Tg[e] = { value: e };
});
Object.defineProperties(Z, Tg);
Object.defineProperty(Eg, "isAxiosError", { value: !0 });
Z.from = (e, t, n, r, s, o) => {
  const i = Object.create(Eg);
  return (
    A.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    Z.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Lw = null;
function nd(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function _g(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = _g(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Ow(e) {
  return A.isArray(e) && !e.some(nd);
}
const Bw = A.toFlatObject(A, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ml(e, t, n) {
  if (!A.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = A.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, S) {
        return !A.isUndefined(S[m]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || f,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(t);
  if (!A.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (A.isDate(h)) return h.toISOString();
    if (!c && A.isBlob(h))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(h) || A.isTypedArray(h)
      ? c && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function f(h, m, S) {
    let g = h;
    if (h && !S && typeof h == "object") {
      if (A.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (A.isArray(h) && Ow(h)) ||
        ((A.isFileList(h) || A.endsWith(m, "[]")) && (g = A.toArray(h)))
      )
        return (
          (m = _g(m)),
          g.forEach(function (w, k) {
            !(A.isUndefined(w) || w === null) &&
              t.append(
                i === !0 ? Oh([m], k, o) : i === null ? m : m + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return nd(h) ? !0 : (t.append(Oh(S, m, o), u(h)), !1);
  }
  const d = [],
    p = Object.assign(Bw, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: nd,
    });
  function y(h, m) {
    if (!A.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h),
        A.forEach(h, function (g, x) {
          (!(A.isUndefined(g) || g === null) &&
            s.call(t, g, A.isString(x) ? x.trim() : x, m, p)) === !0 &&
            y(g, m ? m.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!A.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Bh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Rf(e, t) {
  (this._pairs = []), e && Ml(e, this, t);
}
const Rg = Rf.prototype;
Rg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Rg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Bh);
      }
    : Bh;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Iw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ag(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Iw,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = A.isURLSearchParams(t) ? t.toString() : new Rf(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Ih {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    A.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Pg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Uw = typeof URLSearchParams < "u" ? URLSearchParams : Rf,
  $w = typeof FormData < "u" ? FormData : null,
  Fw = typeof Blob < "u" ? Blob : null,
  Dw = {
    isBrowser: !0,
    classes: { URLSearchParams: Uw, FormData: $w, Blob: Fw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Af = typeof window < "u" && typeof document < "u",
  rd = (typeof navigator == "object" && navigator) || void 0,
  Vw =
    Af &&
    (!rd || ["ReactNative", "NativeScript", "NS"].indexOf(rd.product) < 0),
  zw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Ww = (Af && window.location.href) || "http://localhost",
  Hw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Af,
        hasStandardBrowserEnv: Vw,
        hasStandardBrowserWebWorkerEnv: zw,
        navigator: rd,
        origin: Ww,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  St = { ...Hw, ...Dw };
function qw(e, t) {
  return Ml(
    e,
    new St.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return St.isNode && A.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Gw(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Kw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Mg(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      c = o >= n.length;
    return (
      (i = !i && A.isArray(s) ? s.length : i),
      c
        ? (A.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !A.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && A.isArray(s[i]) && (s[i] = Kw(s[i])),
          !l)
    );
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return (
      A.forEachEntry(e, (r, s) => {
        t(Gw(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Zw(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const di = {
  transitional: Pg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = A.isObject(t);
      if ((o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)))
        return s ? JSON.stringify(Mg(t)) : t;
      if (
        A.isArrayBuffer(t) ||
        A.isBuffer(t) ||
        A.isStream(t) ||
        A.isFile(t) ||
        A.isBlob(t) ||
        A.isReadableStream(t)
      )
        return t;
      if (A.isArrayBufferView(t)) return t.buffer;
      if (A.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return qw(t, this.formSerializer).toString();
        if ((l = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ml(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Zw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || di.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (A.isResponse(t) || A.isReadableStream(t)) return t;
      if (t && A.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? Z.from(l, Z.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: St.classes.FormData, Blob: St.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  di.headers[e] = {};
});
const Qw = A.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Yw = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Qw[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Uh = Symbol("internals");
function fo(e) {
  return e && String(e).trim().toLowerCase();
}
function ga(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(ga) : String(e);
}
function Xw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Jw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zc(e, t, n, r, s) {
  if (A.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!A.isString(t))) {
    if (A.isString(r)) return t.indexOf(r) !== -1;
    if (A.isRegExp(r)) return r.test(t);
  }
}
function e4(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function t4(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class Ct {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, c, u) {
      const f = fo(c);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = A.findKey(s, f);
      (!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
        (s[d || c] = ga(l));
    }
    const i = (l, c) => A.forEach(l, (u, f) => o(u, f, c));
    if (A.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (A.isString(t) && (t = t.trim()) && !Jw(t)) i(Yw(t), n);
    else if (A.isHeaders(t)) for (const [l, c] of t.entries()) o(c, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = fo(t)), t)) {
      const r = A.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Xw(s);
        if (A.isFunction(n)) return n.call(this, s, r);
        if (A.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = fo(t)), t)) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || zc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = fo(i)), i)) {
        const l = A.findKey(r, i);
        l && (!n || zc(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return A.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || zc(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      A.forEach(this, (s, o) => {
        const i = A.findKey(r, o);
        if (i) {
          (n[i] = ga(s)), delete n[o];
          return;
        }
        const l = t ? e4(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = ga(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      A.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && A.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Uh] = this[Uh] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = fo(i);
      r[l] || (t4(s, i), (r[l] = !0));
    }
    return A.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ct.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(Ct.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
A.freezeMethods(Ct);
function Wc(e, t) {
  const n = this || di,
    r = t || n,
    s = Ct.from(r.headers);
  let o = r.data;
  return (
    A.forEach(e, function (l) {
      o = l.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Lg(e) {
  return !!(e && e.__CANCEL__);
}
function Qs(e, t, n) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
A.inherits(Qs, Z, { __CANCEL__: !0 });
function Og(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Z(
          "Request failed with status code " + n.status,
          [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function n4(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function r4(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        f = r[o];
      i || (i = u), (n[s] = c), (r[s] = u);
      let d = o,
        p = 0;
      for (; d !== s; ) (p += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - i < t)) return;
      const y = f && u - f;
      return y ? Math.round((p * 1e3) / y) : void 0;
    }
  );
}
function s4(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (u, f = Date.now()) => {
    (n = f), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const f = Date.now(),
        d = f - n;
      d >= r
        ? i(u, f)
        : ((s = u),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - d)));
    },
    () => s && i(s),
  ];
}
const Xa = (e, t, n = 3) => {
    let r = 0;
    const s = r4(50, 250);
    return s4((o) => {
      const i = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        c = i - r,
        u = s(c),
        f = i <= l;
      r = i;
      const d = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: c,
        rate: u || void 0,
        estimated: u && l && f ? (l - i) / u : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  $h = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Fh =
    (e) =>
    (...t) =>
      A.asap(() => e(...t)),
  o4 = St.hasStandardBrowserEnv
    ? (function () {
        const t =
            St.navigator && /(msie|trident)/i.test(St.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(o) {
          let i = o;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (i) {
            const l = A.isString(i) ? s(i) : i;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  i4 = St.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          A.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            A.isString(r) && i.push("path=" + r),
            A.isString(s) && i.push("domain=" + s),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function a4(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function l4(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bg(e, t) {
  return e && !a4(t) ? l4(e, t) : t;
}
const Dh = (e) => (e instanceof Ct ? { ...e } : e);
function Fr(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, d) {
    return A.isPlainObject(u) && A.isPlainObject(f)
      ? A.merge.call({ caseless: d }, u, f)
      : A.isPlainObject(f)
      ? A.merge({}, f)
      : A.isArray(f)
      ? f.slice()
      : f;
  }
  function s(u, f, d) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, f, d);
  }
  function o(u, f) {
    if (!A.isUndefined(f)) return r(void 0, f);
  }
  function i(u, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function l(u, f, d) {
    if (d in t) return r(u, f);
    if (d in e) return r(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, f) => s(Dh(u), Dh(f), !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = c[f] || s,
        p = d(e[f], t[f], f);
      (A.isUndefined(p) && d !== l) || (n[f] = p);
    }),
    n
  );
}
const Ig = (e) => {
    const t = Fr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Ct.from(i)),
      (t.url = Ag(Bg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let c;
    if (A.isFormData(n)) {
      if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((c = i.getContentType()) !== !1) {
        const [u, ...f] = c
          ? c
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...f].join("; "));
      }
    }
    if (
      St.hasStandardBrowserEnv &&
      (r && A.isFunction(r) && (r = r(t)), r || (r !== !1 && o4(t.url)))
    ) {
      const u = s && o && i4.read(o);
      u && i.set(s, u);
    }
    return t;
  },
  c4 = typeof XMLHttpRequest < "u",
  u4 =
    c4 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Ig(e);
        let o = s.data;
        const i = Ct.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = s,
          f,
          d,
          p,
          y,
          h;
        function m() {
          y && y(),
            h && h(),
            s.cancelToken && s.cancelToken.unsubscribe(f),
            s.signal && s.signal.removeEventListener("abort", f);
        }
        let S = new XMLHttpRequest();
        S.open(s.method.toUpperCase(), s.url, !0), (S.timeout = s.timeout);
        function g() {
          if (!S) return;
          const w = Ct.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders()
            ),
            j = {
              data:
                !l || l === "text" || l === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: w,
              config: e,
              request: S,
            };
          Og(
            function (C) {
              n(C), m();
            },
            function (C) {
              r(C), m();
            },
            j
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = g)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(g);
            }),
          (S.onabort = function () {
            S &&
              (r(new Z("Request aborted", Z.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new Z("Network Error", Z.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let k = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const j = s.transitional || Pg;
            s.timeoutErrorMessage && (k = s.timeoutErrorMessage),
              r(
                new Z(
                  k,
                  j.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
                  e,
                  S
                )
              ),
              (S = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in S &&
            A.forEach(i.toJSON(), function (k, j) {
              S.setRequestHeader(j, k);
            }),
          A.isUndefined(s.withCredentials) ||
            (S.withCredentials = !!s.withCredentials),
          l && l !== "json" && (S.responseType = s.responseType),
          u && (([p, h] = Xa(u, !0)), S.addEventListener("progress", p)),
          c &&
            S.upload &&
            (([d, y] = Xa(c)),
            S.upload.addEventListener("progress", d),
            S.upload.addEventListener("loadend", y)),
          (s.cancelToken || s.signal) &&
            ((f = (w) => {
              S &&
                (r(!w || w.type ? new Qs(null, e, S) : w),
                S.abort(),
                (S = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(f),
            s.signal &&
              (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
        const x = n4(s.url);
        if (x && St.protocols.indexOf(x) === -1) {
          r(new Z("Unsupported protocol " + x + ":", Z.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(o || null);
      });
    },
  d4 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (u) {
        if (!s) {
          (s = !0), l();
          const f = u instanceof Error ? u : this.reason;
          r.abort(
            f instanceof Z ? f : new Qs(f instanceof Error ? f.message : f)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new Z(`timeout ${t} of ms exceeded`, Z.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(o)
              : u.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", o));
      const { signal: c } = r;
      return (c.unsubscribe = () => A.asap(l)), c;
    }
  },
  f4 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  p4 = async function* (e, t) {
    for await (const n of h4(e)) yield* f4(n, t);
  },
  h4 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Vh = (e, t, n, r) => {
    const s = p4(e, t);
    let o = 0,
      i,
      l = (c) => {
        i || ((i = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: u, value: f } = await s.next();
            if (u) {
              l(), c.close();
              return;
            }
            let d = f.byteLength;
            if (n) {
              let p = (o += d);
              n(p);
            }
            c.enqueue(new Uint8Array(f));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(c) {
          return l(c), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ll =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ug = Ll && typeof ReadableStream == "function",
  m4 =
    Ll &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  $g = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  g4 =
    Ug &&
    $g(() => {
      let e = !1;
      const t = new Request(St.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  zh = 64 * 1024,
  sd = Ug && $g(() => A.isReadableStream(new Response("").body)),
  Ja = { stream: sd && ((e) => e.body) };
Ll &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ja[t] &&
        (Ja[t] = A.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Z(
                `Response type '${t}' is not supported`,
                Z.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const y4 = async (e) => {
    if (e == null) return 0;
    if (A.isBlob(e)) return e.size;
    if (A.isSpecCompliantForm(e))
      return (
        await new Request(St.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(e) || A.isArrayBuffer(e)) return e.byteLength;
    if ((A.isURLSearchParams(e) && (e = e + ""), A.isString(e)))
      return (await m4(e)).byteLength;
  },
  v4 = async (e, t) => {
    const n = A.toFiniteNumber(e.getContentLength());
    return n ?? y4(t);
  },
  x4 =
    Ll &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: u,
        headers: f,
        withCredentials: d = "same-origin",
        fetchOptions: p,
      } = Ig(e);
      u = u ? (u + "").toLowerCase() : "text";
      let y = d4([s, o && o.toAbortSignal()], i),
        h;
      const m =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let S;
      try {
        if (
          c &&
          g4 &&
          n !== "get" &&
          n !== "head" &&
          (S = await v4(f, r)) !== 0
        ) {
          let j = new Request(t, { method: "POST", body: r, duplex: "half" }),
            b;
          if (
            (A.isFormData(r) &&
              (b = j.headers.get("content-type")) &&
              f.setContentType(b),
            j.body)
          ) {
            const [C, N] = $h(S, Xa(Fh(c)));
            r = Vh(j.body, zh, C, N);
          }
        }
        A.isString(d) || (d = d ? "include" : "omit");
        const g = "credentials" in Request.prototype;
        h = new Request(t, {
          ...p,
          signal: y,
          method: n.toUpperCase(),
          headers: f.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: g ? d : void 0,
        });
        let x = await fetch(h);
        const w = sd && (u === "stream" || u === "response");
        if (sd && (l || (w && m))) {
          const j = {};
          ["status", "statusText", "headers"].forEach((v) => {
            j[v] = x[v];
          });
          const b = A.toFiniteNumber(x.headers.get("content-length")),
            [C, N] = (l && $h(b, Xa(Fh(l), !0))) || [];
          x = new Response(
            Vh(x.body, zh, C, () => {
              N && N(), m && m();
            }),
            j
          );
        }
        u = u || "text";
        let k = await Ja[A.findKey(Ja, u) || "text"](x, e);
        return (
          !w && m && m(),
          await new Promise((j, b) => {
            Og(j, b, {
              data: k,
              headers: Ct.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: h,
            });
          })
        );
      } catch (g) {
        throw (
          (m && m(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new Z("Network Error", Z.ERR_NETWORK, e, h), {
                cause: g.cause || g,
              })
            : Z.from(g, g && g.code, e, h))
        );
      }
    }),
  od = { http: Lw, xhr: u4, fetch: x4 };
A.forEach(od, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wh = (e) => `- ${e}`,
  w4 = (e) => A.isFunction(e) || e === null || e === !1,
  Fg = {
    getAdapter: (e) => {
      e = A.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !w4(n) && ((r = od[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Z(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Wh).join(`
`)
            : " " + Wh(o[0])
          : "as no adapter specified";
        throw new Z(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: od,
  };
function Hc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Qs(null, e);
}
function Hh(e) {
  return (
    Hc(e),
    (e.headers = Ct.from(e.headers)),
    (e.data = Wc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Fg.getAdapter(e.adapter || di.adapter)(e).then(
      function (r) {
        return (
          Hc(e),
          (r.data = Wc.call(e, e.transformResponse, r)),
          (r.headers = Ct.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Lg(r) ||
            (Hc(e),
            r &&
              r.response &&
              ((r.response.data = Wc.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ct.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Dg = "1.7.7",
  Pf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Pf[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const qh = {};
Pf.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      Dg +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new Z(
        s(i, " has been removed" + (n ? " in " + n : "")),
        Z.ERR_DEPRECATED
      );
    return (
      n &&
        !qh[i] &&
        ((qh[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
function S4(e, t, n) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new Z("option " + o + " must be " + c, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Z("Unknown option " + o, Z.ERR_BAD_OPTION);
  }
}
const id = { assertOptions: S4, validators: Pf },
  Wn = id.validators;
class Lr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ih(), response: new Ih() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Fr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      id.assertOptions(
        r,
        {
          silentJSONParsing: Wn.transitional(Wn.boolean),
          forcedJSONParsing: Wn.transitional(Wn.boolean),
          clarifyTimeoutError: Wn.transitional(Wn.boolean),
        },
        !1
      ),
      s != null &&
        (A.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : id.assertOptions(
              s,
              { encode: Wn.function, serialize: Wn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && A.merge(o.common, o[n.method]);
    o &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete o[h];
        }
      ),
      (n.headers = Ct.concat(i, o));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((c = c && m.synchronous), l.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let f,
      d = 0,
      p;
    if (!c) {
      const h = [Hh.bind(this), void 0];
      for (
        h.unshift.apply(h, l),
          h.push.apply(h, u),
          p = h.length,
          f = Promise.resolve(n);
        d < p;

      )
        f = f.then(h[d++], h[d++]);
      return f;
    }
    p = l.length;
    let y = n;
    for (d = 0; d < p; ) {
      const h = l[d++],
        m = l[d++];
      try {
        y = h(y);
      } catch (S) {
        m.call(this, S);
        break;
      }
    }
    try {
      f = Hh.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, p = u.length; d < p; ) f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = Fr(this.defaults, t);
    const n = Bg(t.baseURL, t.url);
    return Ag(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (t) {
  Lr.prototype[t] = function (n, r) {
    return this.request(
      Fr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(
        Fr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Lr.prototype[t] = n()), (Lr.prototype[t + "Form"] = n(!0));
});
class Mf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        r.reason || ((r.reason = new Qs(o, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Mf(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function C4(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function b4(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const ad = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(ad).forEach(([e, t]) => {
  ad[t] = e;
});
function Vg(e) {
  const t = new Lr(e),
    n = xg(Lr.prototype.request, t);
  return (
    A.extend(n, Lr.prototype, t, { allOwnKeys: !0 }),
    A.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Vg(Fr(e, s));
    }),
    n
  );
}
const ke = Vg(di);
ke.Axios = Lr;
ke.CanceledError = Qs;
ke.CancelToken = Mf;
ke.isCancel = Lg;
ke.VERSION = Dg;
ke.toFormData = Ml;
ke.AxiosError = Z;
ke.Cancel = ke.CanceledError;
ke.all = function (t) {
  return Promise.all(t);
};
ke.spread = C4;
ke.isAxiosError = b4;
ke.mergeConfig = Fr;
ke.AxiosHeaders = Ct;
ke.formToJSON = (e) => Mg(A.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = Fg.getAdapter;
ke.HttpStatusCode = ad;
ke.default = ke;
const me = ke.create({ baseURL: "https://zensportstech.com/api" });
me.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("access_token");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
me.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const n = localStorage.getItem("refresh_token");
      if (n)
        try {
          const r = await ke.post(
            "https://zensportstech.com/api/token/refresh/",
            { refresh: n }
          );
          return (
            localStorage.setItem("access_token", r.data.access),
            (t.headers.Authorization = `Bearer ${r.data.access}`),
            ke(t)
          );
        } catch (r) {
          console.log("Error refreshing token:", r),
            localStorage.removeItem("access_token"),
            localStorage.removeItem("refresh_token"),
            (window.location.href = "/login");
        }
    }
    return Promise.reject(e);
  }
);
const zg = async ({ setPlans: e }) => {
    try {
      const t = await me.get("plans/all/");
      console.log(t.data), e(t.data);
    } catch (t) {
      console.log("Error fetching Plans - ", t);
    }
  },
  k4 = async (e) => {
    try {
      console.log("Plan Id ", e.id);
      const t = await me.post("plans/subscribe/", { plan_id: e.id });
      return console.log(t.data.message), t.data;
    } catch (t) {
      console.error("Subscription failed", t);
    }
  };
function An(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Wg(e) {
  if (!An(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Wg(e[n]);
    }),
    t
  );
}
function Mt(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    An(e) &&
      An(t) &&
      Object.keys(t).forEach((s) => {
        An(t[s]) && Object.prototype.hasOwnProperty.call(e, s) && An(e[s])
          ? (r[s] = Mt(e[s], t[s], n))
          : n.clone
          ? (r[s] = An(t[s]) ? Wg(t[s]) : t[s])
          : (r[s] = t[s]);
      }),
    r
  );
}
function Dr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Fs(e) {
  if (typeof e != "string") throw new Error(Dr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ld(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const s = r;
      if (s === "components" || s === "slots") n[s] = { ...e[s], ...n[s] };
      else if (s === "componentsProps" || s === "slotProps") {
        const o = e[s],
          i = t[s];
        if (!i) n[s] = o || {};
        else if (!o) n[s] = i;
        else {
          n[s] = { ...i };
          for (const l in o)
            if (Object.prototype.hasOwnProperty.call(o, l)) {
              const c = l;
              n[s][c] = ld(o[c], i[c]);
            }
        }
      } else n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
function j4(e, t, n = void 0) {
  const r = {};
  for (const s in e) {
    const o = e[s];
    let i = "",
      l = !0;
    for (let c = 0; c < o.length; c += 1) {
      const u = o[c];
      u &&
        ((i += (l === !0 ? "" : " ") + t(u)),
        (l = !1),
        n && n[u] && (i += " " + n[u]));
    }
    r[s] = i;
  }
  return r;
}
const Gh = (e) => e,
  N4 = () => {
    let e = Gh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Gh;
      },
    };
  },
  E4 = N4(),
  T4 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Hg(e, t, n = "Mui") {
  const r = T4[t];
  return r ? `${n}-${r}` : `${E4.generate(e)}-${t}`;
}
function _4(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((s) => {
      r[s] = Hg(e, s, n);
    }),
    r
  );
}
function R4(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function qg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = qg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function A4() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = qg(e)) && (r && (r += " "), (r += t));
  return r;
}
function Ro(e, t) {
  return t ? Mt(e, t, { clone: !1 }) : e;
}
function P4(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, s) => {
      var i, l;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((i = r.match(o)) == null ? void 0 : i[1]) || 0) -
        +(((l = s.match(o)) == null ? void 0 : l[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, s) => {
          const o = t[s];
          return delete r[s], (r[s] = o), r;
        },
        { ...t }
      )
    : t;
}
function M4(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function L4(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, s] = n,
    o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(s).up(o);
}
function O4(e) {
  const t = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
  function n(o, i) {
    (o.up = (...l) => t(e.breakpoints.up(...l), i)),
      (o.down = (...l) => t(e.breakpoints.down(...l), i)),
      (o.between = (...l) => t(e.breakpoints.between(...l), i)),
      (o.only = (...l) => t(e.breakpoints.only(...l), i)),
      (o.not = (...l) => {
        const c = t(e.breakpoints.not(...l), i);
        return c.includes("not all and")
          ? c
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : c;
      });
  }
  const r = {},
    s = (o) => (n(r, o), r);
  return n(s), { ...e, containerQueries: s };
}
const Ol = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Kh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Ol[e]}px)`,
  },
  B4 = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : Ol[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function $n(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Kh;
    return t.reduce((i, l, c) => ((i[o.up(o.keys[c])] = n(t[c])), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Kh;
    return Object.keys(t).reduce((i, l) => {
      if (M4(o.keys, l)) {
        const c = L4(r.containerQueries ? r : B4, l);
        c && (i[c] = n(t[l], l));
      } else if (Object.keys(o.values || Ol).includes(l)) {
        const c = o.up(l);
        i[c] = n(t[l], l);
      } else {
        const c = l;
        i[c] = t[c];
      }
      return i;
    }, {});
  }
  return n(t);
}
function I4(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, s) => {
          const o = e.up(s);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function U4(e, t) {
  return e.reduce((n, r) => {
    const s = n[r];
    return (!s || Object.keys(s).length === 0) && delete n[r], n;
  }, t);
}
function Bl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((s, o) => (s && s[o] ? s[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, s) => (r && r[s] != null ? r[s] : null), e);
}
function el(e, t, n, r = n) {
  let s;
  return (
    typeof e == "function"
      ? (s = e(n))
      : Array.isArray(e)
      ? (s = e[n] || r)
      : (s = Bl(e, n) || r),
    t && (s = t(s, r, e)),
    s
  );
}
function Be(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: s } = e,
    o = (i) => {
      if (i[t] == null) return null;
      const l = i[t],
        c = i.theme,
        u = Bl(c, r) || {};
      return $n(i, l, (d) => {
        let p = el(u, s, d);
        return (
          d === p &&
            typeof d == "string" &&
            (p = el(u, s, `${t}${d === "default" ? "" : Fs(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function $4(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const F4 = { m: "margin", p: "padding" },
  D4 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Zh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  V4 = $4((e) => {
    if (e.length > 2)
      if (Zh[e]) e = Zh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = F4[t],
      s = D4[n] || "";
    return Array.isArray(s) ? s.map((o) => r + o) : [r + s];
  }),
  Lf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Of = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Lf, ...Of];
function fi(e, t, n, r) {
  const s = Bl(e, t, !0) ?? n;
  return typeof s == "number" || typeof s == "string"
    ? (o) =>
        typeof o == "string"
          ? o
          : typeof s == "string"
          ? `calc(${o} * ${s})`
          : s * o
    : Array.isArray(s)
    ? (o) => {
        if (typeof o == "string") return o;
        const i = Math.abs(o),
          l = s[i];
        return o >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
      }
    : typeof s == "function"
    ? s
    : () => {};
}
function Bf(e) {
  return fi(e, "spacing", 8);
}
function pi(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function z4(e, t) {
  return (n) => e.reduce((r, s) => ((r[s] = pi(t, n)), r), {});
}
function W4(e, t, n, r) {
  if (!t.includes(n)) return null;
  const s = V4(n),
    o = z4(s, r),
    i = e[n];
  return $n(e, i, o);
}
function Gg(e, t) {
  const n = Bf(e.theme);
  return Object.keys(e)
    .map((r) => W4(e, t, r, n))
    .reduce(Ro, {});
}
function Te(e) {
  return Gg(e, Lf);
}
Te.propTypes = {};
Te.filterProps = Lf;
function _e(e) {
  return Gg(e, Of);
}
_e.propTypes = {};
_e.filterProps = Of;
function Il(...e) {
  const t = e.reduce(
      (r, s) => (
        s.filterProps.forEach((o) => {
          r[o] = s;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((s, o) => (t[o] ? Ro(s, t[o](r)) : s), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), [])),
    n
  );
}
function zt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Zt(e, t) {
  return Be({ prop: e, themeKey: "borders", transform: t });
}
const H4 = Zt("border", zt),
  q4 = Zt("borderTop", zt),
  G4 = Zt("borderRight", zt),
  K4 = Zt("borderBottom", zt),
  Z4 = Zt("borderLeft", zt),
  Q4 = Zt("borderColor"),
  Y4 = Zt("borderTopColor"),
  X4 = Zt("borderRightColor"),
  J4 = Zt("borderBottomColor"),
  e8 = Zt("borderLeftColor"),
  t8 = Zt("outline", zt),
  n8 = Zt("outlineColor"),
  Ul = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = fi(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: pi(t, r) });
      return $n(e, e.borderRadius, n);
    }
    return null;
  };
Ul.propTypes = {};
Ul.filterProps = ["borderRadius"];
Il(H4, q4, G4, K4, Z4, Q4, Y4, X4, J4, e8, Ul, t8, n8);
const $l = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = fi(e.theme, "spacing", 8),
      n = (r) => ({ gap: pi(t, r) });
    return $n(e, e.gap, n);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ["gap"];
const Fl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = fi(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: pi(t, r) });
    return $n(e, e.columnGap, n);
  }
  return null;
};
Fl.propTypes = {};
Fl.filterProps = ["columnGap"];
const Dl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = fi(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: pi(t, r) });
    return $n(e, e.rowGap, n);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["rowGap"];
const r8 = Be({ prop: "gridColumn" }),
  s8 = Be({ prop: "gridRow" }),
  o8 = Be({ prop: "gridAutoFlow" }),
  i8 = Be({ prop: "gridAutoColumns" }),
  a8 = Be({ prop: "gridAutoRows" }),
  l8 = Be({ prop: "gridTemplateColumns" }),
  c8 = Be({ prop: "gridTemplateRows" }),
  u8 = Be({ prop: "gridTemplateAreas" }),
  d8 = Be({ prop: "gridArea" });
Il($l, Fl, Dl, r8, s8, o8, i8, a8, l8, c8, u8, d8);
function _s(e, t) {
  return t === "grey" ? t : e;
}
const f8 = Be({ prop: "color", themeKey: "palette", transform: _s }),
  p8 = Be({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: _s,
  }),
  h8 = Be({ prop: "backgroundColor", themeKey: "palette", transform: _s });
Il(f8, p8, h8);
function _t(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const m8 = Be({ prop: "width", transform: _t }),
  If = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var s, o, i, l, c;
        const r =
          ((i =
            (o = (s = e.theme) == null ? void 0 : s.breakpoints) == null
              ? void 0
              : o.values) == null
            ? void 0
            : i[n]) || Ol[n];
        return r
          ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null
              ? void 0
              : c.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: _t(n) };
      };
      return $n(e, e.maxWidth, t);
    }
    return null;
  };
If.filterProps = ["maxWidth"];
const g8 = Be({ prop: "minWidth", transform: _t }),
  y8 = Be({ prop: "height", transform: _t }),
  v8 = Be({ prop: "maxHeight", transform: _t }),
  x8 = Be({ prop: "minHeight", transform: _t });
Be({ prop: "size", cssProperty: "width", transform: _t });
Be({ prop: "size", cssProperty: "height", transform: _t });
const w8 = Be({ prop: "boxSizing" });
Il(m8, If, g8, y8, v8, x8, w8);
const Vl = {
  border: { themeKey: "borders", transform: zt },
  borderTop: { themeKey: "borders", transform: zt },
  borderRight: { themeKey: "borders", transform: zt },
  borderBottom: { themeKey: "borders", transform: zt },
  borderLeft: { themeKey: "borders", transform: zt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: zt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Ul },
  color: { themeKey: "palette", transform: _s },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _s,
  },
  backgroundColor: { themeKey: "palette", transform: _s },
  p: { style: _e },
  pt: { style: _e },
  pr: { style: _e },
  pb: { style: _e },
  pl: { style: _e },
  px: { style: _e },
  py: { style: _e },
  padding: { style: _e },
  paddingTop: { style: _e },
  paddingRight: { style: _e },
  paddingBottom: { style: _e },
  paddingLeft: { style: _e },
  paddingX: { style: _e },
  paddingY: { style: _e },
  paddingInline: { style: _e },
  paddingInlineStart: { style: _e },
  paddingInlineEnd: { style: _e },
  paddingBlock: { style: _e },
  paddingBlockStart: { style: _e },
  paddingBlockEnd: { style: _e },
  m: { style: Te },
  mt: { style: Te },
  mr: { style: Te },
  mb: { style: Te },
  ml: { style: Te },
  mx: { style: Te },
  my: { style: Te },
  margin: { style: Te },
  marginTop: { style: Te },
  marginRight: { style: Te },
  marginBottom: { style: Te },
  marginLeft: { style: Te },
  marginX: { style: Te },
  marginY: { style: Te },
  marginInline: { style: Te },
  marginInlineStart: { style: Te },
  marginInlineEnd: { style: Te },
  marginBlock: { style: Te },
  marginBlockStart: { style: Te },
  marginBlockEnd: { style: Te },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: $l },
  rowGap: { style: Dl },
  columnGap: { style: Fl },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: _t },
  maxWidth: { style: If },
  minWidth: { transform: _t },
  height: { transform: _t },
  maxHeight: { transform: _t },
  minHeight: { transform: _t },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function S8(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function C8(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function b8() {
  function e(n, r, s, o) {
    const i = { [n]: r, theme: s },
      l = o[n];
    if (!l) return { [n]: r };
    const { cssProperty: c = n, themeKey: u, transform: f, style: d } = l;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = Bl(s, u) || {};
    return d
      ? d(i)
      : $n(i, r, (h) => {
          let m = el(p, f, h);
          return (
            h === m &&
              typeof h == "string" &&
              (m = el(p, f, `${n}${h === "default" ? "" : Fs(h)}`, h)),
            c === !1 ? m : { [c]: m }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: s = {} } = n || {};
    if (!r) return null;
    const o = s.unstable_sxConfig ?? Vl;
    function i(l) {
      let c = l;
      if (typeof l == "function") c = l(s);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const u = I4(s.breakpoints),
        f = Object.keys(u);
      let d = u;
      return (
        Object.keys(c).forEach((p) => {
          const y = C8(c[p], s);
          if (y != null)
            if (typeof y == "object")
              if (o[p]) d = Ro(d, e(p, y, s, o));
              else {
                const h = $n({ theme: s }, y, (m) => ({ [p]: m }));
                S8(h, y) ? (d[p] = t({ sx: y, theme: s })) : (d = Ro(d, h));
              }
            else d = Ro(d, e(p, y, s, o));
        }),
        P4(s, U4(f, d))
      );
    }
    return Array.isArray(r) ? r.map(i) : i(r);
  }
  return t;
}
const hi = b8();
hi.filterProps = ["sx"];
function cd() {
  return (
    (cd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cd.apply(null, arguments)
  );
}
function Kg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var k8 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  j8 = Kg(function (e) {
    return (
      k8.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  N8 = !1;
function E8(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function T8(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var _8 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (s) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(s, o),
          r.tags.push(s);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !N8 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(T8(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = E8(s);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var s;
          return (s = r.parentNode) == null ? void 0 : s.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  tt = "-ms-",
  tl = "-moz-",
  re = "-webkit-",
  Zg = "comm",
  Uf = "rule",
  $f = "decl",
  R8 = "@import",
  Qg = "@keyframes",
  A8 = "@layer",
  P8 = Math.abs,
  zl = String.fromCharCode,
  M8 = Object.assign;
function L8(e, t) {
  return Ze(e, 0) ^ 45
    ? (((((((t << 2) ^ Ze(e, 0)) << 2) ^ Ze(e, 1)) << 2) ^ Ze(e, 2)) << 2) ^
        Ze(e, 3)
    : 0;
}
function Yg(e) {
  return e.trim();
}
function O8(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, n) {
  return e.replace(t, n);
}
function ud(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Yo(e, t, n) {
  return e.slice(t, n);
}
function pn(e) {
  return e.length;
}
function Ff(e) {
  return e.length;
}
function qi(e, t) {
  return t.push(e), e;
}
function B8(e, t) {
  return e.map(t).join("");
}
var Wl = 1,
  Ds = 1,
  Xg = 0,
  bt = 0,
  $e = 0,
  Ys = "";
function Hl(e, t, n, r, s, o, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: s,
    children: o,
    line: Wl,
    column: Ds,
    length: i,
    return: "",
  };
}
function po(e, t) {
  return M8(Hl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function I8() {
  return $e;
}
function U8() {
  return (
    ($e = bt > 0 ? Ze(Ys, --bt) : 0), Ds--, $e === 10 && ((Ds = 1), Wl--), $e
  );
}
function Lt() {
  return (
    ($e = bt < Xg ? Ze(Ys, bt++) : 0), Ds++, $e === 10 && ((Ds = 1), Wl++), $e
  );
}
function xn() {
  return Ze(Ys, bt);
}
function ya() {
  return bt;
}
function mi(e, t) {
  return Yo(Ys, e, t);
}
function Xo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Jg(e) {
  return (Wl = Ds = 1), (Xg = pn((Ys = e))), (bt = 0), [];
}
function ey(e) {
  return (Ys = ""), e;
}
function va(e) {
  return Yg(mi(bt - 1, dd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $8(e) {
  for (; ($e = xn()) && $e < 33; ) Lt();
  return Xo(e) > 2 || Xo($e) > 3 ? "" : " ";
}
function F8(e, t) {
  for (
    ;
    --t &&
    Lt() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return mi(e, ya() + (t < 6 && xn() == 32 && Lt() == 32));
}
function dd(e) {
  for (; Lt(); )
    switch ($e) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && dd($e);
        break;
      case 40:
        e === 41 && dd(e);
        break;
      case 92:
        Lt();
        break;
    }
  return bt;
}
function D8(e, t) {
  for (; Lt() && e + $e !== 57; ) if (e + $e === 84 && xn() === 47) break;
  return "/*" + mi(t, bt - 1) + "*" + zl(e === 47 ? e : Lt());
}
function V8(e) {
  for (; !Xo(xn()); ) Lt();
  return mi(e, bt);
}
function z8(e) {
  return ey(xa("", null, null, null, [""], (e = Jg(e)), 0, [0], e));
}
function xa(e, t, n, r, s, o, i, l, c) {
  for (
    var u = 0,
      f = 0,
      d = i,
      p = 0,
      y = 0,
      h = 0,
      m = 1,
      S = 1,
      g = 1,
      x = 0,
      w = "",
      k = s,
      j = o,
      b = r,
      C = w;
    S;

  )
    switch (((h = x), (x = Lt()))) {
      case 40:
        if (h != 108 && Ze(C, d - 1) == 58) {
          ud((C += se(va(x), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += va(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += $8(h);
        break;
      case 92:
        C += F8(ya() - 1, 7);
        continue;
      case 47:
        switch (xn()) {
          case 42:
          case 47:
            qi(W8(D8(Lt(), ya()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        l[u++] = pn(C) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            g == -1 && (C = se(C, /\f/g, "")),
              y > 0 &&
                pn(C) - d &&
                qi(
                  y > 32
                    ? Yh(C + ";", r, n, d - 1)
                    : Yh(se(C, " ", "") + ";", r, n, d - 2),
                  c
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (qi((b = Qh(C, t, n, u, f, s, l, w, (k = []), (j = []), d)), o),
              x === 123)
            )
              if (f === 0) xa(C, t, b, b, k, o, d, l, j);
              else
                switch (p === 99 && Ze(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xa(
                      e,
                      b,
                      b,
                      r && qi(Qh(e, b, b, 0, 0, s, l, w, s, (k = []), d), j),
                      s,
                      j,
                      d,
                      l,
                      r ? k : j
                    );
                    break;
                  default:
                    xa(C, b, b, b, [""], j, 0, l, j);
                }
        }
        (u = f = y = 0), (m = g = 1), (w = C = ""), (d = i);
        break;
      case 58:
        (d = 1 + pn(C)), (y = h);
      default:
        if (m < 1) {
          if (x == 123) --m;
          else if (x == 125 && m++ == 0 && U8() == 125) continue;
        }
        switch (((C += zl(x)), x * m)) {
          case 38:
            g = f > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (l[u++] = (pn(C) - 1) * g), (g = 1);
            break;
          case 64:
            xn() === 45 && (C += va(Lt())),
              (p = xn()),
              (f = d = pn((w = C += V8(ya())))),
              x++;
            break;
          case 45:
            h === 45 && pn(C) == 2 && (m = 0);
        }
    }
  return o;
}
function Qh(e, t, n, r, s, o, i, l, c, u, f) {
  for (
    var d = s - 1, p = s === 0 ? o : [""], y = Ff(p), h = 0, m = 0, S = 0;
    h < r;
    ++h
  )
    for (var g = 0, x = Yo(e, d + 1, (d = P8((m = i[h])))), w = e; g < y; ++g)
      (w = Yg(m > 0 ? p[g] + " " + x : se(x, /&\f/g, p[g]))) && (c[S++] = w);
  return Hl(e, t, n, s === 0 ? Uf : l, c, u, f);
}
function W8(e, t, n) {
  return Hl(e, t, n, Zg, zl(I8()), Yo(e, 2, -2), 0);
}
function Yh(e, t, n, r) {
  return Hl(e, t, n, $f, Yo(e, 0, r), Yo(e, r + 1, -1), r);
}
function Rs(e, t) {
  for (var n = "", r = Ff(e), s = 0; s < r; s++) n += t(e[s], s, e, t) || "";
  return n;
}
function H8(e, t, n, r) {
  switch (e.type) {
    case A8:
      if (e.children.length) break;
    case R8:
    case $f:
      return (e.return = e.return || e.value);
    case Zg:
      return "";
    case Qg:
      return (e.return = e.value + "{" + Rs(e.children, r) + "}");
    case Uf:
      e.value = e.props.join(",");
  }
  return pn((n = Rs(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function q8(e) {
  var t = Ff(e);
  return function (n, r, s, o) {
    for (var i = "", l = 0; l < t; l++) i += e[l](n, r, s, o) || "";
    return i;
  };
}
function G8(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var K8 = function (t, n, r) {
    for (
      var s = 0, o = 0;
      (s = o), (o = xn()), s === 38 && o === 12 && (n[r] = 1), !Xo(o);

    )
      Lt();
    return mi(t, bt);
  },
  Z8 = function (t, n) {
    var r = -1,
      s = 44;
    do
      switch (Xo(s)) {
        case 0:
          s === 38 && xn() === 12 && (n[r] = 1), (t[r] += K8(bt - 1, n, r));
          break;
        case 2:
          t[r] += va(s);
          break;
        case 4:
          if (s === 44) {
            (t[++r] = xn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += zl(s);
      }
    while ((s = Lt()));
    return t;
  },
  Q8 = function (t, n) {
    return ey(Z8(Jg(t), n));
  },
  Xh = new WeakMap(),
  Y8 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          s = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xh.get(r)) &&
        !s
      ) {
        Xh.set(t, !0);
        for (
          var o = [], i = Q8(n, o), l = r.props, c = 0, u = 0;
          c < i.length;
          c++
        )
          for (var f = 0; f < l.length; f++, u++)
            t.props[u] = o[c] ? i[c].replace(/&\f/g, l[f]) : l[f] + " " + i[c];
      }
    }
  },
  X8 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function ty(e, t) {
  switch (L8(e, t)) {
    case 5103:
      return re + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + tl + e + tt + e + e;
    case 6828:
    case 4268:
      return re + e + tt + e + e;
    case 6165:
      return re + e + tt + "flex-" + e + e;
    case 5187:
      return (
        re + e + se(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + tt + "flex-$1$2") + e
      );
    case 5443:
      return re + e + tt + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        re +
        e +
        tt +
        "flex-line-pack" +
        se(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return re + e + tt + se(e, "shrink", "negative") + e;
    case 5292:
      return re + e + tt + se(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        re +
        "box-" +
        se(e, "-grow", "") +
        re +
        e +
        tt +
        se(e, "grow", "positive") +
        e
      );
    case 4554:
      return re + se(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return (
        se(
          se(se(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return (
        se(
          se(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + tt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        re +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, re + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pn(e) - 1 - t > 6)
        switch (Ze(e, t + 1)) {
          case 109:
            if (Ze(e, t + 4) !== 45) break;
          case 102:
            return (
              se(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  re +
                  "$2-$3$1" +
                  tl +
                  (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ud(e, "stretch")
              ? ty(se(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115) break;
    case 6444:
      switch (Ze(e, pn(e) - 3 - (~ud(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + re) + e;
        case 101:
          return (
            se(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                re +
                (Ze(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                re +
                "$2$3$1" +
                tt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ze(e, t + 11)) {
        case 114:
          return re + e + tt + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + tt + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + tt + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + tt + e + e;
  }
  return e;
}
var J8 = function (t, n, r, s) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case $f:
          t.return = ty(t.value, t.length);
          break;
        case Qg:
          return Rs([po(t, { value: se(t.value, "@", "@" + re) })], s);
        case Uf:
          if (t.length)
            return B8(t.props, function (o) {
              switch (O8(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Rs(
                    [po(t, { props: [se(o, /:(read-\w+)/, ":" + tl + "$1")] })],
                    s
                  );
                case "::placeholder":
                  return Rs(
                    [
                      po(t, {
                        props: [se(o, /:(plac\w+)/, ":" + re + "input-$1")],
                      }),
                      po(t, { props: [se(o, /:(plac\w+)/, ":" + tl + "$1")] }),
                      po(t, { props: [se(o, /:(plac\w+)/, tt + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  e6 = [J8],
  t6 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var S = m.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var s = t.stylisPlugins || e6,
      o = {},
      i,
      l = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var S = m.getAttribute("data-emotion").split(" "), g = 1;
            g < S.length;
            g++
          )
            o[S[g]] = !0;
          l.push(m);
        }
      );
    var c,
      u = [Y8, X8];
    {
      var f,
        d = [
          H8,
          G8(function (m) {
            f.insert(m);
          }),
        ],
        p = q8(u.concat(s, d)),
        y = function (S) {
          return Rs(z8(S), p);
        };
      c = function (S, g, x, w) {
        (f = x),
          y(S ? S + "{" + g.styles + "}" : g.styles),
          w && (h.inserted[g.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new _8({
        key: n,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: c,
    };
    return h.sheet.hydrate(l), h;
  },
  n6 = !0;
function r6(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (s) {
      e[s] !== void 0 ? t.push(e[s] + ";") : (r += s + " ");
    }),
    r
  );
}
var ny = function (t, n, r) {
    var s = t.key + "-" + n.name;
    (r === !1 || n6 === !1) &&
      t.registered[s] === void 0 &&
      (t.registered[s] = n.styles);
  },
  s6 = function (t, n, r) {
    ny(t, n, r);
    var s = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + s : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function o6(e) {
  for (var t = 0, n, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var i6 = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
    scale: 1,
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
    strokeWidth: 1,
  },
  a6 = !1,
  l6 = /[A-Z]|^ms/g,
  c6 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ry = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Jh = function (t) {
    return t != null && typeof t != "boolean";
  },
  qc = Kg(function (e) {
    return ry(e) ? e : e.replace(l6, "-$&").toLowerCase();
  }),
  em = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(c6, function (r, s, o) {
            return (hn = { name: s, styles: o, next: hn }), s;
          });
    }
    return i6[t] !== 1 && !ry(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  u6 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Jo(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return (hn = { name: s.name, styles: s.styles, next: hn }), s.name;
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (hn = { name: i.name, styles: i.styles, next: hn }), (i = i.next);
        var l = o.styles + ";";
        return l;
      }
      return d6(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = hn,
          u = n(e);
        return (hn = c), Jo(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null) return f;
  var d = t[f];
  return d !== void 0 ? d : f;
}
function d6(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++) r += Jo(e, t, n[s]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var l = i;
        t != null && t[l] !== void 0
          ? (r += o + "{" + t[l] + "}")
          : Jh(l) && (r += qc(o) + ":" + em(o, l) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && a6) throw new Error(u6);
        if (
          Array.isArray(i) &&
          typeof i[0] == "string" &&
          (t == null || t[i[0]] === void 0)
        )
          for (var c = 0; c < i.length; c++)
            Jh(i[c]) && (r += qc(o) + ":" + em(o, i[c]) + ";");
        else {
          var u = Jo(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += qc(o) + ":" + u + ";";
              break;
            }
            default:
              r += o + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var tm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  hn;
function f6(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    s = "";
  hn = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (r = !1), (s += Jo(n, t, o));
  else {
    var i = o;
    s += i[0];
  }
  for (var l = 1; l < e.length; l++)
    if (((s += Jo(n, t, e[l])), r)) {
      var c = o;
      s += c[l];
    }
  tm.lastIndex = 0;
  for (var u = "", f; (f = tm.exec(s)) !== null; ) u += "-" + f[1];
  var d = o6(s) + u;
  return { name: d, styles: s, next: hn };
}
var p6 = function (t) {
    return t();
  },
  h6 = su.useInsertionEffect ? su.useInsertionEffect : !1,
  m6 = h6 || p6,
  sy = T.createContext(typeof HTMLElement < "u" ? t6({ key: "css" }) : null);
sy.Provider;
var g6 = function (t) {
    return T.forwardRef(function (n, r) {
      var s = T.useContext(sy);
      return t(n, s, r);
    });
  },
  y6 = T.createContext({}),
  v6 = j8,
  x6 = function (t) {
    return t !== "theme";
  },
  nm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? v6 : x6;
  },
  rm = function (t, n, r) {
    var s;
    if (n) {
      var o = n.shouldForwardProp;
      s =
        t.__emotion_forwardProp && o
          ? function (i) {
              return t.__emotion_forwardProp(i) && o(i);
            }
          : o;
    }
    return typeof s != "function" && r && (s = t.__emotion_forwardProp), s;
  },
  w6 = !1,
  S6 = function (t) {
    var n = t.cache,
      r = t.serialized,
      s = t.isStringTag;
    return (
      ny(n, r, s),
      m6(function () {
        return s6(n, r, s);
      }),
      null
    );
  },
  C6 = function e(t, n) {
    var r = t.__emotion_real === t,
      s = (r && t.__emotion_base) || t,
      o,
      i;
    n !== void 0 && ((o = n.label), (i = n.target));
    var l = rm(t, n, r),
      c = l || nm(s),
      u = !c("as");
    return function () {
      var f = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push("label:" + o + ";"),
        f[0] == null || f[0].raw === void 0)
      )
        d.push.apply(d, f);
      else {
        d.push(f[0][0]);
        for (var p = f.length, y = 1; y < p; y++) d.push(f[y], f[0][y]);
      }
      var h = g6(function (m, S, g) {
        var x = (u && m.as) || s,
          w = "",
          k = [],
          j = m;
        if (m.theme == null) {
          j = {};
          for (var b in m) j[b] = m[b];
          j.theme = T.useContext(y6);
        }
        typeof m.className == "string"
          ? (w = r6(S.registered, k, m.className))
          : m.className != null && (w = m.className + " ");
        var C = f6(d.concat(k), S.registered, j);
        (w += S.key + "-" + C.name), i !== void 0 && (w += " " + i);
        var N = u && l === void 0 ? nm(x) : c,
          v = {};
        for (var _ in m) (u && _ === "as") || (N(_) && (v[_] = m[_]));
        return (
          (v.className = w),
          g && (v.ref = g),
          T.createElement(
            T.Fragment,
            null,
            T.createElement(S6, {
              cache: S,
              serialized: C,
              isStringTag: typeof x == "string",
            }),
            T.createElement(x, v)
          )
        );
      });
      return (
        (h.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = s),
        (h.__emotion_styles = d),
        (h.__emotion_forwardProp = l),
        Object.defineProperty(h, "toString", {
          value: function () {
            return i === void 0 && w6 ? "NO_COMPONENT_SELECTOR" : "." + i;
          },
        }),
        (h.withComponent = function (m, S) {
          return e(m, cd({}, n, S, { shouldForwardProp: rm(h, S, !0) })).apply(
            void 0,
            d
          );
        }),
        h
      );
    };
  },
  b6 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  fd = C6.bind();
b6.forEach(function (e) {
  fd[e] = fd(e);
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function k6(e, t) {
  return fd(e, t);
}
const j6 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  N6 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
    );
  };
function E6(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...s
    } = e,
    o = N6(t),
    i = Object.keys(o);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, y) {
    const h = i.indexOf(y);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (h !== -1 && typeof t[i[h]] == "number" ? t[i[h]] : y) - r / 100
    }${n})`;
  }
  function f(p) {
    return i.indexOf(p) + 1 < i.length ? u(p, i[i.indexOf(p) + 1]) : l(p);
  }
  function d(p) {
    const y = i.indexOf(p);
    return y === 0
      ? l(i[1])
      : y === i.length - 1
      ? c(i[y])
      : u(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: o,
    up: l,
    down: c,
    between: u,
    only: f,
    not: d,
    unit: n,
    ...s,
  };
}
const T6 = { borderRadius: 4 };
function oy(e = 8, t = Bf({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((o) => {
        const i = t(o);
        return typeof i == "number" ? `${i}px` : i;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function _6(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let s = n.getColorSchemeSelector(e);
    return s === "&"
      ? t
      : ((s.includes("data-") || s.includes(".")) &&
          (s = `*:where(${s.replace(/\s*&$/, "")}) &`),
        { [s]: t });
  }
  return n.palette.mode === e ? t : {};
}
function iy(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: s,
      shape: o = {},
      ...i
    } = e,
    l = E6(n),
    c = oy(s);
  let u = Mt(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: c,
      shape: { ...T6, ...o },
    },
    i
  );
  return (
    (u = O4(u)),
    (u.applyStyles = _6),
    (u = t.reduce((f, d) => Mt(f, d), u)),
    (u.unstable_sxConfig = {
      ...Vl,
      ...(i == null ? void 0 : i.unstable_sxConfig),
    }),
    (u.unstable_sx = function (d) {
      return hi({ sx: d, theme: this });
    }),
    u
  );
}
const R6 = iy();
function Gc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function pd(e, t, n) {
  return M6(t) ? n : t[e] || t;
}
const Gi = Symbol("mui.processed_props");
function Ki(e, t, n) {
  if (Gi in e) return e[Gi];
  const r = { ...e, theme: pd(t, e.theme, n) };
  return (e[Gi] = r), (r[Gi] = r), r;
}
function A6(e) {
  return e ? (t, n) => n[e] : null;
}
function wa(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n)) return n.flatMap((s) => wa(s, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const { variants: s, ...o } = n;
    let i = o,
      l;
    e: for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      if (typeof u.props == "function") {
        if (
          (l ?? (l = { ...t, ...t.ownerState, ownerState: t.ownerState }),
          !u.props(l))
        )
          continue;
      } else
        for (const f in u.props)
          if (
            t[f] !== u.props[f] &&
            ((r = t.ownerState) == null ? void 0 : r[f]) !== u.props[f]
          )
            continue e;
      Array.isArray(i) || (i = [i]),
        typeof u.style == "function"
          ? (l ?? (l = { ...t, ...t.ownerState, ownerState: t.ownerState }),
            i.push(u.style(l)))
          : i.push(u.style);
    }
    return i;
  }
  return n;
}
function P6(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = R6,
      rootShouldForwardProp: r = Gc,
      slotShouldForwardProp: s = Gc,
    } = e,
    o = (l) => hi(Ki(l, t, n));
  return (
    (o.__mui_systemSx = !0),
    (l, c = {}) => {
      j6(l, (b) => b.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: u,
          slot: f,
          skipVariantsResolver: d,
          skipSx: p,
          overridesResolver: y = A6(O6(f)),
          ...h
        } = c,
        m = d !== void 0 ? d : (f && f !== "Root" && f !== "root") || !1,
        S = p || !1;
      let g,
        x = Gc;
      f === "Root" || f === "root"
        ? (x = r)
        : f
        ? (x = s)
        : L6(l) && (x = void 0);
      const w = k6(l, { shouldForwardProp: x, label: g, ...h }),
        k = (b) =>
          (typeof b == "function" && b.__emotion_real !== b) || An(b)
            ? (C) => wa(b, Ki(C, t, n))
            : b,
        j = (b, ...C) => {
          let N = k(b);
          const v = C ? C.map(k) : [];
          u &&
            y &&
            v.push((U) => {
              const D = pd(t, U.theme, n);
              if (
                !D.components ||
                !D.components[u] ||
                !D.components[u].styleOverrides
              )
                return null;
              const B = D.components[u].styleOverrides,
                R = {},
                F = Ki(U, t, n);
              for (const $ in B) R[$] = wa(B[$], F);
              return y(U, R);
            }),
            u &&
              !m &&
              v.push((U) => {
                var R, F;
                const D = pd(t, U.theme, n),
                  B =
                    (F =
                      (R = D == null ? void 0 : D.components) == null
                        ? void 0
                        : R[u]) == null
                      ? void 0
                      : F.variants;
                return B ? wa({ variants: B }, Ki(U, t, n)) : null;
              }),
            S || v.push(o);
          const _ = v.length - C.length;
          if (Array.isArray(b) && _ > 0) {
            const U = new Array(_).fill("");
            (N = [...b, ...U]), (N.raw = [...b.raw, ...U]);
          }
          const P = w(N, ...v);
          return l.muiName && (P.muiName = l.muiName), P;
        };
      return w.withConfig && (j.withConfig = w.withConfig), j;
    }
  );
}
function M6(e) {
  for (const t in e) return !1;
  return !0;
}
function L6(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function O6(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Df(e, t = 0, n = 1) {
  return R4(e, t, n);
}
function B6(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, s) =>
            s < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function mr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return mr(B6(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Dr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    s;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (s = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        s
      ))
    )
      throw new Error(Dr(10, s));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: s }
  );
}
const I6 = (e) => {
    const t = mr(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  xo = (e, t) => {
    try {
      return I6(e);
    } catch {
      return e;
    }
  };
function ql(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((s, o) => (o < 3 ? parseInt(s, 10) : s)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function ay(e) {
  e = mr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    s = t[2] / 100,
    o = r * Math.min(s, 1 - s),
    i = (u, f = (u + n / 30) % 12) =>
      s - o * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), c.push(t[3])), ql({ type: l, values: c })
  );
}
function hd(e) {
  e = mr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? mr(ay(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function U6(e, t) {
  const n = hd(e),
    r = hd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function $6(e, t) {
  return (
    (e = mr(e)),
    (t = Df(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ql(e)
  );
}
function Zi(e, t, n) {
  try {
    return $6(e, t);
  } catch {
    return e;
  }
}
function Vf(e, t) {
  if (((e = mr(e)), (t = Df(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return ql(e);
}
function pe(e, t, n) {
  try {
    return Vf(e, t);
  } catch {
    return e;
  }
}
function zf(e, t) {
  if (((e = mr(e)), (t = Df(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return ql(e);
}
function he(e, t, n) {
  try {
    return zf(e, t);
  } catch {
    return e;
  }
}
function F6(e, t = 0.15) {
  return hd(e) > 0.5 ? Vf(e, t) : zf(e, t);
}
function Qi(e, t, n) {
  try {
    return F6(e, t);
  } catch {
    return e;
  }
}
const D6 = T.createContext(void 0);
function V6(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const s = t.components[n];
  return s.defaultProps
    ? ld(s.defaultProps, r)
    : !s.styleOverrides && !s.variants
    ? ld(s, r)
    : r;
}
function z6({ props: e, name: t }) {
  const n = T.useContext(D6);
  return V6({ props: e, name: t, theme: { components: n } });
}
function W6(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const s = r[0];
    return typeof s == "string" &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${s}${t(...r.slice(1))})`
      : `, ${s}`;
  }
  return (r, ...s) => `var(--${e ? `${e}-` : ""}${r}${t(...s)})`;
}
const sm = (e, t, n, r = []) => {
    let s = e;
    t.forEach((o, i) => {
      i === t.length - 1
        ? Array.isArray(s)
          ? (s[Number(o)] = n)
          : s && typeof s == "object" && (s[o] = n)
        : s &&
          typeof s == "object" &&
          (s[o] || (s[o] = r.includes(o) ? [] : {}), (s = s[o]));
    });
  },
  H6 = (e, t, n) => {
    function r(s, o = [], i = []) {
      Object.entries(s).forEach(([l, c]) => {
        (!n || (n && !n([...o, l]))) &&
          c != null &&
          (typeof c == "object" && Object.keys(c).length > 0
            ? r(c, [...o, l], Array.isArray(c) ? [...i, l] : i)
            : t([...o, l], c, i));
      });
    }
    r(e);
  },
  q6 = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
        ? t
        : `${t}px`
      : t;
function Kc(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    s = {},
    o = {},
    i = {};
  return (
    H6(
      e,
      (l, c, u) => {
        if (
          (typeof c == "string" || typeof c == "number") &&
          (!r || !r(l, c))
        ) {
          const f = `--${n ? `${n}-` : ""}${l.join("-")}`,
            d = q6(l, c);
          Object.assign(s, { [f]: d }),
            sm(o, l, `var(${f})`, u),
            sm(i, l, `var(${f}, ${d})`, u);
        }
      },
      (l) => l[0] === "vars"
    ),
    { css: s, vars: o, varsWithDefaults: i }
  );
}
function G6(e, t = {}) {
  const {
      getSelector: n = S,
      disableCssColorScheme: r,
      colorSchemeSelector: s,
    } = t,
    {
      colorSchemes: o = {},
      components: i,
      defaultColorScheme: l = "light",
      ...c
    } = e,
    { vars: u, css: f, varsWithDefaults: d } = Kc(c, t);
  let p = d;
  const y = {},
    { [l]: h, ...m } = o;
  if (
    (Object.entries(m || {}).forEach(([w, k]) => {
      const { vars: j, css: b, varsWithDefaults: C } = Kc(k, t);
      (p = Mt(p, C)), (y[w] = { css: b, vars: j });
    }),
    h)
  ) {
    const { css: w, vars: k, varsWithDefaults: j } = Kc(h, t);
    (p = Mt(p, j)), (y[l] = { css: w, vars: k });
  }
  function S(w, k) {
    var b, C;
    let j = s;
    if (
      (s === "class" && (j = ".%s"),
      s === "data" && (j = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (j = `[${s}="%s"]`),
      w)
    ) {
      if (j === "media")
        return e.defaultColorScheme === w
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((C = (b = o[w]) == null ? void 0 : b.palette) == null
                  ? void 0
                  : C.mode) || w
              })`]: { ":root": k },
            };
      if (j)
        return e.defaultColorScheme === w
          ? `:root, ${j.replace("%s", String(w))}`
          : j.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let w = { ...u };
      return (
        Object.entries(y).forEach(([, { vars: k }]) => {
          w = Mt(w, k);
        }),
        w
      );
    },
    generateStyleSheets: () => {
      var N, v;
      const w = [],
        k = e.defaultColorScheme || "light";
      function j(_, P) {
        Object.keys(P).length &&
          w.push(typeof _ == "string" ? { [_]: { ...P } } : _);
      }
      j(n(void 0, { ...f }), f);
      const { [k]: b, ...C } = y;
      if (b) {
        const { css: _ } = b,
          P =
            (v = (N = o[k]) == null ? void 0 : N.palette) == null
              ? void 0
              : v.mode,
          U = !r && P ? { colorScheme: P, ..._ } : { ..._ };
        j(n(k, { ...U }), U);
      }
      return (
        Object.entries(C).forEach(([_, { css: P }]) => {
          var B, R;
          const U =
              (R = (B = o[_]) == null ? void 0 : B.palette) == null
                ? void 0
                : R.mode,
            D = !r && U ? { colorScheme: U, ...P } : { ...P };
          j(n(_, { ...D }), D);
        }),
        w
      );
    },
  };
}
function K6(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${n}"] &`
        : e === "class"
        ? `.${n} &`
        : e === "data"
        ? `[data-${n}] &`
        : `${e.replace("%s", n)} &`
      : "&";
  };
}
const ei = { black: "#000", white: "#fff" },
  Z6 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  os = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  is = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  ho = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  as = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  ls = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  cs = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  om = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ei.white, default: ei.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Zc = {
    text: {
      primary: ei.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ei.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function im(e, t, n, r) {
  const s = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = zf(e.main, s))
      : t === "dark" && (e.dark = Vf(e.main, o)));
}
function Q6(e = "light") {
  return e === "dark"
    ? { main: as[200], light: as[50], dark: as[400] }
    : { main: as[700], light: as[400], dark: as[800] };
}
function Y6(e = "light") {
  return e === "dark"
    ? { main: os[200], light: os[50], dark: os[400] }
    : { main: os[500], light: os[300], dark: os[700] };
}
function X6(e = "light") {
  return e === "dark"
    ? { main: is[500], light: is[300], dark: is[700] }
    : { main: is[700], light: is[400], dark: is[800] };
}
function J6(e = "light") {
  return e === "dark"
    ? { main: ls[400], light: ls[300], dark: ls[700] }
    : { main: ls[700], light: ls[500], dark: ls[900] };
}
function e9(e = "light") {
  return e === "dark"
    ? { main: cs[400], light: cs[300], dark: cs[700] }
    : { main: cs[800], light: cs[500], dark: cs[900] };
}
function t9(e = "light") {
  return e === "dark"
    ? { main: ho[400], light: ho[300], dark: ho[700] }
    : { main: "#ed6c02", light: ho[500], dark: ho[900] };
}
function Wf(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...s
    } = e,
    o = e.primary || Q6(t),
    i = e.secondary || Y6(t),
    l = e.error || X6(t),
    c = e.info || J6(t),
    u = e.success || e9(t),
    f = e.warning || t9(t);
  function d(m) {
    return U6(m, Zc.text.primary) >= n ? Zc.text.primary : om.text.primary;
  }
  const p = ({
      color: m,
      name: S,
      mainShade: g = 500,
      lightShade: x = 300,
      darkShade: w = 700,
    }) => {
      if (
        ((m = { ...m }),
        !m.main && m[g] && (m.main = m[g]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(Dr(11, S ? ` (${S})` : "", g));
      if (typeof m.main != "string")
        throw new Error(Dr(12, S ? ` (${S})` : "", JSON.stringify(m.main)));
      return (
        im(m, "light", x, r),
        im(m, "dark", w, r),
        m.contrastText || (m.contrastText = d(m.main)),
        m
      );
    },
    y = { dark: Zc, light: om };
  return Mt(
    {
      common: { ...ei },
      mode: t,
      primary: p({ color: o, name: "primary" }),
      secondary: p({
        color: i,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      error: p({ color: l, name: "error" }),
      warning: p({ color: f, name: "warning" }),
      info: p({ color: c, name: "info" }),
      success: p({ color: u, name: "success" }),
      grey: Z6,
      contrastThreshold: n,
      getContrastText: d,
      augmentColor: p,
      tonalOffset: r,
      ...y[t],
    },
    s
  );
}
function n9(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [s, o] = r;
      typeof o == "object" &&
        (t[s] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${
          o.fontVariant ? `${o.fontVariant} ` : ""
        }${o.fontWeight ? `${o.fontWeight} ` : ""}${
          o.fontStretch ? `${o.fontStretch} ` : ""
        }${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${
          o.fontFamily || ""
        }`);
    }),
    t
  );
}
function r9(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function s9(e) {
  return Math.round(e * 1e5) / 1e5;
}
const am = { textTransform: "uppercase" },
  lm = '"Roboto", "Helvetica", "Arial", sans-serif';
function o9(e, t) {
  const {
      fontFamily: n = lm,
      fontSize: r = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: i = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: f,
      ...d
    } = typeof t == "function" ? t(e) : t,
    p = r / 14,
    y = f || ((S) => `${(S / c) * p}rem`),
    h = (S, g, x, w, k) => ({
      fontFamily: n,
      fontWeight: S,
      fontSize: y(g),
      lineHeight: x,
      ...(n === lm ? { letterSpacing: `${s9(w / g)}em` } : {}),
      ...k,
      ...u,
    }),
    m = {
      h1: h(s, 96, 1.167, -1.5),
      h2: h(s, 60, 1.2, -0.5),
      h3: h(o, 48, 1.167, 0),
      h4: h(o, 34, 1.235, 0.25),
      h5: h(o, 24, 1.334, 0),
      h6: h(i, 20, 1.6, 0.15),
      subtitle1: h(o, 16, 1.75, 0.15),
      subtitle2: h(i, 14, 1.57, 0.1),
      body1: h(o, 16, 1.5, 0.15),
      body2: h(o, 14, 1.43, 0.15),
      button: h(i, 14, 1.75, 0.4, am),
      caption: h(o, 12, 1.66, 0.4),
      overline: h(o, 12, 2.66, 1, am),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Mt(
    {
      htmlFontSize: c,
      pxToRem: y,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: s,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: l,
      ...m,
    },
    d,
    { clone: !1 }
  );
}
const i9 = 0.2,
  a9 = 0.14,
  l9 = 0.12;
function Ce(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${i9})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${a9})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${l9})`,
  ].join(",");
}
const c9 = [
    "none",
    Ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  u9 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  d9 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function cm(e) {
  return `${Math.round(e)}ms`;
}
function f9(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function p9(e) {
  const t = { ...u9, ...e.easing },
    n = { ...d9, ...e.duration };
  return {
    getAutoHeightDuration: f9,
    create: (s = ["all"], o = {}) => {
      const {
        duration: i = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = o;
      return (Array.isArray(s) ? s : [s])
        .map(
          (f) =>
            `${f} ${typeof i == "string" ? i : cm(i)} ${l} ${
              typeof c == "string" ? c : cm(c)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const h9 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function md(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: s,
    palette: o = {},
    transitions: i = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars) throw new Error(Dr(20));
  const f = Wf(o),
    d = iy(e);
  let p = Mt(d, {
    mixins: r9(d.breakpoints, r),
    palette: f,
    shadows: c9.slice(),
    typography: o9(f, l),
    transitions: p9(i),
    zIndex: { ...h9 },
  });
  return (
    (p = Mt(p, u)),
    (p = t.reduce((y, h) => Mt(y, h), p)),
    (p.unstable_sxConfig = {
      ...Vl,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (p.unstable_sx = function (h) {
      return hi({ sx: h, theme: this });
    }),
    p
  );
}
function m9(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const g9 = [...Array(25)].map((e, t) => {
  if (t === 0) return;
  const n = m9(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ly(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function cy(e) {
  return e === "dark" ? g9 : [];
}
function y9(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...s } = e,
    o = Wf(t);
  return {
    palette: o,
    opacity: { ...ly(o.mode), ...n },
    overlays: r || cy(o.mode),
    ...s,
  };
}
function v9(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const x9 = (e) => [
    ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  w9 = (e) => (t, n) => {
    const r = e.colorSchemeSelector;
    let s = r;
    if (
      (r === "class" && (s = ".%s"),
      r === "data" && (s = "[data-%s]"),
      r != null &&
        r.startsWith("data-") &&
        !r.includes("%s") &&
        (s = `[${r}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const o = {};
        return (
          x9(e.cssVarPrefix).forEach((i) => {
            (o[i] = n[i]), delete n[i];
          }),
          s === "media"
            ? {
                ":root": n,
                "@media (prefers-color-scheme: dark)": { ":root": o },
              }
            : s
            ? { [s.replace("%s", t)]: o, [`:root, ${s.replace("%s", t)}`]: n }
            : { ":root": { ...n, ...o } }
        );
      }
      if (s && s !== "media") return `:root, ${s.replace("%s", String(t))}`;
    } else if (t) {
      if (s === "media")
        return {
          [`@media (prefers-color-scheme: ${String(t)})`]: { ":root": n },
        };
      if (s) return s.replace("%s", String(t));
    }
    return ":root";
  };
function S9(e) {
  return (
    An(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function C9(e = {}) {
  const t = { ...e };
  function n(r) {
    const s = Object.entries(r);
    for (let o = 0; o < s.length; o++) {
      const [i, l] = s[o];
      !S9(l) || i.startsWith("unstable_")
        ? delete r[i]
        : An(l) && ((r[i] = { ...l }), n(r[i]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function b9(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function L(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function wo(e) {
  return !e || !e.startsWith("hsl") ? e : ay(e);
}
function jn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = xo(
      wo(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function k9(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const dn = (e) => {
    try {
      return e();
    } catch {}
  },
  j9 = (e = "mui") => W6(e);
function Qc(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const s = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = y9({
      ...t,
      palette: { mode: s, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: o, ...i } = md({
    ...n,
    palette: { mode: s, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: o,
      opacity: { ...ly(s), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || cy(s),
    }),
    i
  );
}
function N9(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: s = !1,
      cssVarPrefix: o = "mui",
      shouldSkipGeneratingVar: i = v9,
      colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
      ...c
    } = e,
    u = Object.keys(n)[0],
    f = r || (n.light && u !== "light" ? "light" : u),
    d = j9(o),
    { [f]: p, light: y, dark: h, ...m } = n,
    S = { ...m };
  let g = p;
  if (
    (((f === "dark" && !("dark" in n)) || (f === "light" && !("light" in n))) &&
      (g = !0),
    !g)
  )
    throw new Error(Dr(21, f));
  const x = Qc(S, g, c, f);
  y && !S.light && Qc(S, y, void 0, "light"),
    h && !S.dark && Qc(S, h, void 0, "dark");
  let w = {
    defaultColorScheme: f,
    ...x,
    cssVarPrefix: o,
    colorSchemeSelector: l,
    getCssVar: d,
    colorSchemes: S,
    font: { ...n9(x.typography), ...x.font },
    spacing: k9(c.spacing),
  };
  Object.keys(w.colorSchemes).forEach((N) => {
    const v = w.colorSchemes[N].palette,
      _ = (P) => {
        const U = P.split("-"),
          D = U[1],
          B = U[2];
        return d(P, v[D][B]);
      };
    if (
      (v.mode === "light" &&
        (L(v.common, "background", "#fff"),
        L(v.common, "onBackground", "#000")),
      v.mode === "dark" &&
        (L(v.common, "background", "#000"),
        L(v.common, "onBackground", "#fff")),
      b9(v, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      v.mode === "light")
    ) {
      L(v.Alert, "errorColor", pe(v.error.light, 0.6)),
        L(v.Alert, "infoColor", pe(v.info.light, 0.6)),
        L(v.Alert, "successColor", pe(v.success.light, 0.6)),
        L(v.Alert, "warningColor", pe(v.warning.light, 0.6)),
        L(v.Alert, "errorFilledBg", _("palette-error-main")),
        L(v.Alert, "infoFilledBg", _("palette-info-main")),
        L(v.Alert, "successFilledBg", _("palette-success-main")),
        L(v.Alert, "warningFilledBg", _("palette-warning-main")),
        L(
          v.Alert,
          "errorFilledColor",
          dn(() => v.getContrastText(v.error.main))
        ),
        L(
          v.Alert,
          "infoFilledColor",
          dn(() => v.getContrastText(v.info.main))
        ),
        L(
          v.Alert,
          "successFilledColor",
          dn(() => v.getContrastText(v.success.main))
        ),
        L(
          v.Alert,
          "warningFilledColor",
          dn(() => v.getContrastText(v.warning.main))
        ),
        L(v.Alert, "errorStandardBg", he(v.error.light, 0.9)),
        L(v.Alert, "infoStandardBg", he(v.info.light, 0.9)),
        L(v.Alert, "successStandardBg", he(v.success.light, 0.9)),
        L(v.Alert, "warningStandardBg", he(v.warning.light, 0.9)),
        L(v.Alert, "errorIconColor", _("palette-error-main")),
        L(v.Alert, "infoIconColor", _("palette-info-main")),
        L(v.Alert, "successIconColor", _("palette-success-main")),
        L(v.Alert, "warningIconColor", _("palette-warning-main")),
        L(v.AppBar, "defaultBg", _("palette-grey-100")),
        L(v.Avatar, "defaultBg", _("palette-grey-400")),
        L(v.Button, "inheritContainedBg", _("palette-grey-300")),
        L(v.Button, "inheritContainedHoverBg", _("palette-grey-A100")),
        L(v.Chip, "defaultBorder", _("palette-grey-400")),
        L(v.Chip, "defaultAvatarColor", _("palette-grey-700")),
        L(v.Chip, "defaultIconColor", _("palette-grey-700")),
        L(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        L(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        L(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        L(v.LinearProgress, "primaryBg", he(v.primary.main, 0.62)),
        L(v.LinearProgress, "secondaryBg", he(v.secondary.main, 0.62)),
        L(v.LinearProgress, "errorBg", he(v.error.main, 0.62)),
        L(v.LinearProgress, "infoBg", he(v.info.main, 0.62)),
        L(v.LinearProgress, "successBg", he(v.success.main, 0.62)),
        L(v.LinearProgress, "warningBg", he(v.warning.main, 0.62)),
        L(v.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`),
        L(v.Slider, "primaryTrack", he(v.primary.main, 0.62)),
        L(v.Slider, "secondaryTrack", he(v.secondary.main, 0.62)),
        L(v.Slider, "errorTrack", he(v.error.main, 0.62)),
        L(v.Slider, "infoTrack", he(v.info.main, 0.62)),
        L(v.Slider, "successTrack", he(v.success.main, 0.62)),
        L(v.Slider, "warningTrack", he(v.warning.main, 0.62));
      const P = Qi(v.background.default, 0.8);
      L(v.SnackbarContent, "bg", P),
        L(
          v.SnackbarContent,
          "color",
          dn(() => v.getContrastText(P))
        ),
        L(v.SpeedDialAction, "fabHoverBg", Qi(v.background.paper, 0.15)),
        L(v.StepConnector, "border", _("palette-grey-400")),
        L(v.StepContent, "border", _("palette-grey-400")),
        L(v.Switch, "defaultColor", _("palette-common-white")),
        L(v.Switch, "defaultDisabledColor", _("palette-grey-100")),
        L(v.Switch, "primaryDisabledColor", he(v.primary.main, 0.62)),
        L(v.Switch, "secondaryDisabledColor", he(v.secondary.main, 0.62)),
        L(v.Switch, "errorDisabledColor", he(v.error.main, 0.62)),
        L(v.Switch, "infoDisabledColor", he(v.info.main, 0.62)),
        L(v.Switch, "successDisabledColor", he(v.success.main, 0.62)),
        L(v.Switch, "warningDisabledColor", he(v.warning.main, 0.62)),
        L(v.TableCell, "border", he(Zi(v.divider, 1), 0.88)),
        L(v.Tooltip, "bg", Zi(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      L(v.Alert, "errorColor", he(v.error.light, 0.6)),
        L(v.Alert, "infoColor", he(v.info.light, 0.6)),
        L(v.Alert, "successColor", he(v.success.light, 0.6)),
        L(v.Alert, "warningColor", he(v.warning.light, 0.6)),
        L(v.Alert, "errorFilledBg", _("palette-error-dark")),
        L(v.Alert, "infoFilledBg", _("palette-info-dark")),
        L(v.Alert, "successFilledBg", _("palette-success-dark")),
        L(v.Alert, "warningFilledBg", _("palette-warning-dark")),
        L(
          v.Alert,
          "errorFilledColor",
          dn(() => v.getContrastText(v.error.dark))
        ),
        L(
          v.Alert,
          "infoFilledColor",
          dn(() => v.getContrastText(v.info.dark))
        ),
        L(
          v.Alert,
          "successFilledColor",
          dn(() => v.getContrastText(v.success.dark))
        ),
        L(
          v.Alert,
          "warningFilledColor",
          dn(() => v.getContrastText(v.warning.dark))
        ),
        L(v.Alert, "errorStandardBg", pe(v.error.light, 0.9)),
        L(v.Alert, "infoStandardBg", pe(v.info.light, 0.9)),
        L(v.Alert, "successStandardBg", pe(v.success.light, 0.9)),
        L(v.Alert, "warningStandardBg", pe(v.warning.light, 0.9)),
        L(v.Alert, "errorIconColor", _("palette-error-main")),
        L(v.Alert, "infoIconColor", _("palette-info-main")),
        L(v.Alert, "successIconColor", _("palette-success-main")),
        L(v.Alert, "warningIconColor", _("palette-warning-main")),
        L(v.AppBar, "defaultBg", _("palette-grey-900")),
        L(v.AppBar, "darkBg", _("palette-background-paper")),
        L(v.AppBar, "darkColor", _("palette-text-primary")),
        L(v.Avatar, "defaultBg", _("palette-grey-600")),
        L(v.Button, "inheritContainedBg", _("palette-grey-800")),
        L(v.Button, "inheritContainedHoverBg", _("palette-grey-700")),
        L(v.Chip, "defaultBorder", _("palette-grey-700")),
        L(v.Chip, "defaultAvatarColor", _("palette-grey-300")),
        L(v.Chip, "defaultIconColor", _("palette-grey-300")),
        L(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        L(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        L(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        L(v.LinearProgress, "primaryBg", pe(v.primary.main, 0.5)),
        L(v.LinearProgress, "secondaryBg", pe(v.secondary.main, 0.5)),
        L(v.LinearProgress, "errorBg", pe(v.error.main, 0.5)),
        L(v.LinearProgress, "infoBg", pe(v.info.main, 0.5)),
        L(v.LinearProgress, "successBg", pe(v.success.main, 0.5)),
        L(v.LinearProgress, "warningBg", pe(v.warning.main, 0.5)),
        L(v.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`),
        L(v.Slider, "primaryTrack", pe(v.primary.main, 0.5)),
        L(v.Slider, "secondaryTrack", pe(v.secondary.main, 0.5)),
        L(v.Slider, "errorTrack", pe(v.error.main, 0.5)),
        L(v.Slider, "infoTrack", pe(v.info.main, 0.5)),
        L(v.Slider, "successTrack", pe(v.success.main, 0.5)),
        L(v.Slider, "warningTrack", pe(v.warning.main, 0.5));
      const P = Qi(v.background.default, 0.98);
      L(v.SnackbarContent, "bg", P),
        L(
          v.SnackbarContent,
          "color",
          dn(() => v.getContrastText(P))
        ),
        L(v.SpeedDialAction, "fabHoverBg", Qi(v.background.paper, 0.15)),
        L(v.StepConnector, "border", _("palette-grey-600")),
        L(v.StepContent, "border", _("palette-grey-600")),
        L(v.Switch, "defaultColor", _("palette-grey-300")),
        L(v.Switch, "defaultDisabledColor", _("palette-grey-600")),
        L(v.Switch, "primaryDisabledColor", pe(v.primary.main, 0.55)),
        L(v.Switch, "secondaryDisabledColor", pe(v.secondary.main, 0.55)),
        L(v.Switch, "errorDisabledColor", pe(v.error.main, 0.55)),
        L(v.Switch, "infoDisabledColor", pe(v.info.main, 0.55)),
        L(v.Switch, "successDisabledColor", pe(v.success.main, 0.55)),
        L(v.Switch, "warningDisabledColor", pe(v.warning.main, 0.55)),
        L(v.TableCell, "border", pe(Zi(v.divider, 1), 0.68)),
        L(v.Tooltip, "bg", Zi(v.grey[700], 0.92));
    }
    jn(v.background, "default"),
      jn(v.background, "paper"),
      jn(v.common, "background"),
      jn(v.common, "onBackground"),
      jn(v, "divider"),
      Object.keys(v).forEach((P) => {
        const U = v[P];
        U &&
          typeof U == "object" &&
          (U.main && L(v[P], "mainChannel", xo(wo(U.main))),
          U.light && L(v[P], "lightChannel", xo(wo(U.light))),
          U.dark && L(v[P], "darkChannel", xo(wo(U.dark))),
          U.contrastText &&
            L(v[P], "contrastTextChannel", xo(wo(U.contrastText))),
          P === "text" && (jn(v[P], "primary"), jn(v[P], "secondary")),
          P === "action" &&
            (U.active && jn(v[P], "active"),
            U.selected && jn(v[P], "selected")));
      });
  }),
    (w = t.reduce((N, v) => Mt(N, v), w));
  const k = {
      prefix: o,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: i,
      getSelector: w9(w),
    },
    { vars: j, generateThemeVars: b, generateStyleSheets: C } = G6(w, k);
  return (
    (w.vars = j),
    Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([N, v]) => {
      w[N] = v;
    }),
    (w.generateThemeVars = b),
    (w.generateStyleSheets = C),
    (w.generateSpacing = function () {
      return oy(c.spacing, Bf(this));
    }),
    (w.getColorSchemeSelector = K6(l)),
    (w.spacing = w.generateSpacing()),
    (w.shouldSkipGeneratingVar = i),
    (w.unstable_sxConfig = {
      ...Vl,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (w.unstable_sx = function (v) {
      return hi({ sx: v, theme: this });
    }),
    (w.toRuntimeSource = C9),
    w
  );
}
function um(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: Wf({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function E9(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: s = n ? void 0 : { light: !0 },
      defaultColorScheme: o = n == null ? void 0 : n.mode,
      ...i
    } = e,
    l = o || "light",
    c = s == null ? void 0 : s[l],
    u = {
      ...s,
      ...(n
        ? { [l]: { ...(typeof c != "boolean" && c), palette: n } }
        : void 0),
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return md(e, ...t);
    let f = n;
    "palette" in e ||
      (u[l] &&
        (u[l] !== !0
          ? (f = u[l].palette)
          : l === "dark" && (f = { mode: "dark" })));
    const d = md({ ...e, palette: f }, ...t);
    return (
      (d.defaultColorScheme = l),
      (d.colorSchemes = u),
      d.palette.mode === "light" &&
        ((d.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: d.palette,
        }),
        um(d, "dark", u.dark)),
      d.palette.mode === "dark" &&
        ((d.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: d.palette,
        }),
        um(d, "light", u.light)),
      d
    );
  }
  return (
    !n && !("light" in u) && l === "light" && (u.light = !0),
    N9(
      {
        ...i,
        colorSchemes: u,
        defaultColorScheme: l,
        ...(typeof r != "boolean" && r),
      },
      ...t
    )
  );
}
const T9 = E9(),
  _9 = "$$material";
function R9(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const A9 = (e) => R9(e) && e !== "classes",
  P9 = P6({ themeId: _9, defaultTheme: T9, rootShouldForwardProp: A9 }),
  dm = { theme: void 0 };
function M9(e) {
  let t, n;
  return (r) => {
    let s = t;
    return (
      (s === void 0 || r.theme !== n) &&
        ((dm.theme = r.theme), (s = e(dm)), (t = s), (n = r.theme)),
      s
    );
  };
}
function L9(e) {
  return z6(e);
}
function O9(e) {
  return Hg("MuiSvgIcon", e);
}
_4("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const B9 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      s = {
        root: ["root", t !== "inherit" && `color${Fs(t)}`, `fontSize${Fs(n)}`],
      };
    return j4(s, O9, r);
  },
  I9 = P9("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Fs(n.color)}`],
        t[`fontSize${Fs(n.fontSize)}`],
      ];
    },
  })(
    M9(({ theme: e }) => {
      var t, n, r, s, o, i, l, c, u, f, d, p, y, h;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (s = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : s.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (m) => !m.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((i = (o = e.typography) == null ? void 0 : o.pxToRem) == null
                  ? void 0
                  : i.call(o, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null
                  ? void 0
                  : c.call(l, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : f.call(u, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, m]) => m && m.main)
            .map(([m]) => {
              var S, g;
              return {
                props: { color: m },
                style: {
                  color:
                    (g = (S = (e.vars ?? e).palette) == null ? void 0 : S[m]) ==
                    null
                      ? void 0
                      : g.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (p = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) ==
                null
                  ? void 0
                  : p.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (h = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : h.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  Oe = T.forwardRef(function (t, n) {
    const r = L9({ props: t, name: "MuiSvgIcon" }),
      {
        children: s,
        className: o,
        color: i = "inherit",
        component: l = "svg",
        fontSize: c = "medium",
        htmlColor: u,
        inheritViewBox: f = !1,
        titleAccess: d,
        viewBox: p = "0 0 24 24",
        ...y
      } = r,
      h = T.isValidElement(s) && s.type === "svg",
      m = {
        ...r,
        color: i,
        component: l,
        fontSize: c,
        instanceFontSize: t.fontSize,
        inheritViewBox: f,
        viewBox: p,
        hasSvgAsChild: h,
      },
      S = {};
    f || (S.viewBox = p);
    const g = B9(m);
    return a.jsxs(I9, {
      as: l,
      className: A4(g.root, o),
      focusable: "false",
      color: u,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n,
      ...S,
      ...y,
      ...(h && s.props),
      ownerState: m,
      children: [
        h ? s.props.children : s,
        d ? a.jsx("title", { children: d }) : null,
      ],
    });
  });
Oe && (Oe.muiName = "SvgIcon");
function ue(e, t) {
  function n(r, s) {
    return a.jsx(Oe, { "data-testid": `${t}Icon`, ref: s, ...r, children: e });
  }
  return (n.muiName = Oe.muiName), T.memo(T.forwardRef(n));
}
const uy = ue(
    a.jsx("path", {
      d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2",
    }),
    "RocketLaunch"
  ),
  U9 = "/assets/zbg-BHw10o43.png",
  $9 = () => {
    const { isAuthenticated: e, logout: t } = _l(),
      n = Ut(),
      [r, s] = T.useState([]);
    T.useEffect(() => {
      zg({ setPlans: s });
    }, []);
    const o = ({ link: l }) => {
        n(l);
      },
      i = () => {
        t(), n("/login");
      };
    return a.jsxs("div", {
      className: "bg-secondary1000 relative h-screen overflow-auto text-white",
      children: [
        a.jsxs("div", {
          className:
            "bg-primary1000 fixed z-10 w-full text-white flex justify-between p-4 shadow-xl",
          children: [
            a.jsx("p", { className: "font-bold", children: "Zenminds" }),
            a.jsx("div", {
              className: "flex gap-4",
              children: e
                ? a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(oe, {
                        to: "/",
                        children: a.jsx("p", {
                          className: "border-b-2 border-blue-900",
                          children: "Home",
                        }),
                      }),
                      a.jsx(oe, { to: "/products", children: "Products" }),
                      a.jsx(oe, {
                        to: "/profile",
                        children: a.jsx("p", { children: "Profile" }),
                      }),
                      a.jsx("p", {
                        onClick: i,
                        className:
                          "cursor-pointer bg-red-700 px-2 rounded bg-opacity-50",
                        children: "Logout",
                      }),
                    ],
                  })
                : a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(oe, { to: "/signup", children: "Signup" }),
                      a.jsx(oe, {
                        to: "/login",
                        className: "bg-primary1000 text-white px-2",
                        children: "Login",
                      }),
                    ],
                  }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "",
          children: [
            a.jsx("div", {
              className:
                "h-screen w-full bg-custom-image bg-cover bg-center overflow-x-hidden",
              children: a.jsxs("div", {
                className: "flex",
                children: [
                  a.jsx("div", {
                    className: "w-1/2",
                    children: a.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center h-screen",
                      children: [
                        a.jsx("p", {
                          className: "text-3xl py-4",
                          children:
                            "All-in-One Data Collection Tool for Sports Analytics",
                        }),
                        a.jsx("p", {
                          children:
                            "Track, Analyze, and Improve Player and Team Performance Across Multiple Sports with Ease",
                        }),
                        a.jsx("div", {
                          children: a.jsx("div", {
                            className: "flex flex-wrap gap-4 p-4",
                            children:
                              r.length > 0
                                ? r.map((l) =>
                                    l.plans
                                      .filter((c) => c.isSubscribed)
                                      .map((c) =>
                                        a.jsxs(
                                          "div",
                                          {
                                            className:
                                              "bg-gradient-to-r from-purple-800 to-black bg-opacity-20 p-4 shadow-md rounded-lg hover:scale-100 scale-95 transition-all duration-150 ease-linear flex",
                                            children: [
                                              a.jsx("img", {
                                                src: "https://cdn-icons-png.flaticon.com/128/3314/3314372.png",
                                                alt: "",
                                                className: "h-16 opacity-10",
                                              }),
                                              a.jsxs("div", {
                                                className:
                                                  "flex gap-4 justify-end items-center px-4",
                                                children: [
                                                  a.jsx("h3", {
                                                    className:
                                                      "text-xl font-bold py-2",
                                                    children: c.name,
                                                  }),
                                                  a.jsxs("button", {
                                                    className:
                                                      "relative text-white py-2 px-4 rounded  hover:shadow-lg flex gap-4",
                                                    onClick: () => {
                                                      o({ link: c.url });
                                                    },
                                                    children: [
                                                      a.jsxs("span", {
                                                        class:
                                                          "relative z-10 flex gap-4 ",
                                                        children: [
                                                          "Launch",
                                                          a.jsx(uy, {}),
                                                        ],
                                                      }),
                                                      a.jsx("span", {
                                                        class:
                                                          "absolute inset-0 rounded border-2 border-transparent before:content-[''] before:absolute before:inset-0 before:rounded before:border-4 before:border-transparent before:bg-gradient-to-r before:from-yellow-600 before:via-purple-800 before:to-yellow-600 before:bg-[length:200%_200%] before:animate-borderGlow",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsx("p", {
                                                    className:
                                                      "h-3 w-3 rounded-full bg-gradient-to-r from-gray-800 to-purple-800 animate-pulse",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          c.id
                                        )
                                      )
                                  )
                                : a.jsx("p", {
                                    children: "No plans available",
                                  }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", {
                    className:
                      "w-1/2 flex flex-col items-center justify-center h-screen",
                    children: a.jsx("img", {
                      src: U9,
                      alt: "Logo",
                      className: "scale-125",
                    }),
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              children: a.jsxs("div", {
                children: [
                  a.jsx("p", { children: "Cricket" }),
                  a.jsx("p", { children: "FootBall" }),
                  a.jsx("p", { children: "Kabadi" }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
let F9 = { data: "" },
  D9 = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || F9,
  V9 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  z9 = /\/\*[^]*?\*\/|  +/g,
  fm = /\n+/g,
  Jn = (e, t) => {
    let n = "",
      r = "",
      s = "";
    for (let o in e) {
      let i = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + i + ";")
          : (r +=
              o[1] == "f"
                ? Jn(i, o)
                : o + "{" + Jn(i, o[1] == "k" ? "" : t) + "}")
        : typeof i == "object"
        ? (r += Jn(
            i,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  o.replace(/(^:.*)|([^,])+/g, (c) =>
                    /&/.test(c) ? c.replace(/&/g, l) : l ? l + " " + c : c
                  )
                )
              : o
          ))
        : i != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (s += Jn.p ? Jn.p(o, i) : o + ":" + i + ";"));
    }
    return n + (t && s ? t + "{" + s + "}" : s) + r;
  },
  Nn = {},
  dy = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + dy(e[n]);
      return t;
    }
    return e;
  },
  W9 = (e, t, n, r, s) => {
    let o = dy(e),
      i =
        Nn[o] ||
        (Nn[o] = ((c) => {
          let u = 0,
            f = 11;
          for (; u < c.length; ) f = (101 * f + c.charCodeAt(u++)) >>> 0;
          return "go" + f;
        })(o));
    if (!Nn[i]) {
      let c =
        o !== e
          ? e
          : ((u) => {
              let f,
                d,
                p = [{}];
              for (; (f = V9.exec(u.replace(z9, ""))); )
                f[4]
                  ? p.shift()
                  : f[3]
                  ? ((d = f[3].replace(fm, " ").trim()),
                    p.unshift((p[0][d] = p[0][d] || {})))
                  : (p[0][f[1]] = f[2].replace(fm, " ").trim());
              return p[0];
            })(e);
      Nn[i] = Jn(s ? { ["@keyframes " + i]: c } : c, n ? "" : "." + i);
    }
    let l = n && Nn.g ? Nn.g : null;
    return (
      n && (Nn.g = Nn[i]),
      ((c, u, f, d) => {
        d
          ? (u.data = u.data.replace(d, c))
          : u.data.indexOf(c) === -1 && (u.data = f ? c + u.data : u.data + c);
      })(Nn[i], t, r, l),
      i
    );
  },
  H9 = (e, t, n) =>
    e.reduce((r, s, o) => {
      let i = t[o];
      if (i && i.call) {
        let l = i(n),
          c = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        i = c
          ? "." + c
          : l && typeof l == "object"
          ? l.props
            ? ""
            : Jn(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + s + (i ?? "");
    }, "");
function Gl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return W9(
    n.unshift
      ? n.raw
        ? H9(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {})
      : n,
    D9(t.target),
    t.g,
    t.o,
    t.k
  );
}
let fy, gd, yd;
Gl.bind({ g: 1 });
let Fn = Gl.bind({ k: 1 });
function q9(e, t, n, r) {
  (Jn.p = t), (fy = e), (gd = n), (yd = r);
}
function Sr(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function s(o, i) {
      let l = Object.assign({}, o),
        c = l.className || s.className;
      (n.p = Object.assign({ theme: gd && gd() }, l)),
        (n.o = / *go\d+/.test(c)),
        (l.className = Gl.apply(n, r) + (c ? " " + c : ""));
      let u = e;
      return (
        e[0] && ((u = l.as || e), delete l.as), yd && u[0] && yd(l), fy(u, l)
      );
    }
    return s;
  };
}
var G9 = (e) => typeof e == "function",
  nl = (e, t) => (G9(e) ? e(t) : e),
  K9 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  py = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Z9 = 20,
  Sa = new Map(),
  Q9 = 1e3,
  pm = (e) => {
    if (Sa.has(e)) return;
    let t = setTimeout(() => {
      Sa.delete(e), Gr({ type: 4, toastId: e });
    }, Q9);
    Sa.set(e, t);
  },
  Y9 = (e) => {
    let t = Sa.get(e);
    t && clearTimeout(t);
  },
  vd = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Z9) };
      case 1:
        return (
          t.toast.id && Y9(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((o) => o.id === n.id)
          ? vd(e, { type: 1, toast: n })
          : vd(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? pm(r)
            : e.toasts.forEach((o) => {
                pm(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === r || r === void 0 ? { ...o, visible: !1 } : o
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let s = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + s,
          })),
        };
    }
  },
  Ca = [],
  ba = { toasts: [], pausedAt: void 0 },
  Gr = (e) => {
    (ba = vd(ba, e)),
      Ca.forEach((t) => {
        t(ba);
      });
  },
  X9 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  J9 = (e = {}) => {
    let [t, n] = T.useState(ba);
    T.useEffect(
      () => (
        Ca.push(n),
        () => {
          let s = Ca.indexOf(n);
          s > -1 && Ca.splice(s, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((s) => {
      var o, i;
      return {
        ...e,
        ...e[s.type],
        ...s,
        duration:
          s.duration ||
          ((o = e[s.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          X9[s.type],
        style: {
          ...e.style,
          ...((i = e[s.type]) == null ? void 0 : i.style),
          ...s.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  eS = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || K9(),
  }),
  gi = (e) => (t, n) => {
    let r = eS(t, e, n);
    return Gr({ type: 2, toast: r }), r.id;
  },
  it = (e, t) => gi("blank")(e, t);
it.error = gi("error");
it.success = gi("success");
it.loading = gi("loading");
it.custom = gi("custom");
it.dismiss = (e) => {
  Gr({ type: 3, toastId: e });
};
it.remove = (e) => Gr({ type: 4, toastId: e });
it.promise = (e, t, n) => {
  let r = it.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (s) => (
          it.success(nl(t.success, s), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          s
        )
      )
      .catch((s) => {
        it.error(nl(t.error, s), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var tS = (e, t) => {
    Gr({ type: 1, toast: { id: e, height: t } });
  },
  nS = () => {
    Gr({ type: 5, time: Date.now() });
  },
  rS = (e) => {
    let { toasts: t, pausedAt: n } = J9(e);
    T.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        i = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let c = (l.duration || 0) + l.pauseDuration - (o - l.createdAt);
          if (c < 0) {
            l.visible && it.dismiss(l.id);
            return;
          }
          return setTimeout(() => it.dismiss(l.id), c);
        });
      return () => {
        i.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = T.useCallback(() => {
        n && Gr({ type: 6, time: Date.now() });
      }, [n]),
      s = T.useCallback(
        (o, i) => {
          let {
              reverseOrder: l = !1,
              gutter: c = 8,
              defaultPosition: u,
            } = i || {},
            f = t.filter(
              (y) => (y.position || u) === (o.position || u) && y.height
            ),
            d = f.findIndex((y) => y.id === o.id),
            p = f.filter((y, h) => h < d && y.visible).length;
          return f
            .filter((y) => y.visible)
            .slice(...(l ? [p + 1] : [0, p]))
            .reduce((y, h) => y + (h.height || 0) + c, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: tS,
        startPause: nS,
        endPause: r,
        calculateOffset: s,
      },
    };
  },
  sS = Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  oS = Fn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  iS = Fn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  aS = Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${oS} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${iS} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  lS = Fn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  cS = Sr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${lS} 1s linear infinite;
`,
  uS = Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  dS = Fn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  fS = Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${uS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${dS} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  pS = Sr("div")`
  position: absolute;
`,
  hS = Sr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  mS = Fn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  gS = Sr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${mS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  yS = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? T.createElement(gS, null, t)
        : t
      : n === "blank"
      ? null
      : T.createElement(
          hS,
          null,
          T.createElement(cS, { ...r }),
          n !== "loading" &&
            T.createElement(
              pS,
              null,
              n === "error"
                ? T.createElement(aS, { ...r })
                : T.createElement(fS, { ...r })
            )
        );
  },
  vS = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  xS = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  wS = "0%{opacity:0;} 100%{opacity:1;}",
  SS = "0%{opacity:1;} 100%{opacity:0;}",
  CS = Sr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  bS = Sr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  kS = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, s] = py() ? [wS, SS] : [vS(n), xS(n)];
    return {
      animation: t
        ? `${Fn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Fn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  jS = T.memo(({ toast: e, position: t, style: n, children: r }) => {
    let s = e.height
        ? kS(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = T.createElement(yS, { toast: e }),
      i = T.createElement(bS, { ...e.ariaProps }, nl(e.message, e));
    return T.createElement(
      CS,
      { className: e.className, style: { ...s, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: i })
        : T.createElement(T.Fragment, null, o, i)
    );
  });
q9(T.createElement);
var NS = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: s,
  }) => {
    let o = T.useCallback(
      (i) => {
        if (i) {
          let l = () => {
            let c = i.getBoundingClientRect().height;
            r(e, c);
          };
          l(),
            new MutationObserver(l).observe(i, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return T.createElement("div", { ref: o, className: t, style: n }, s);
  },
  ES = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      s = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: py() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...s,
    };
  },
  TS = Gl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Yi = 16,
  _S = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: s,
    containerStyle: o,
    containerClassName: i,
  }) => {
    let { toasts: l, handlers: c } = rS(n);
    return T.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Yi,
          left: Yi,
          right: Yi,
          bottom: Yi,
          pointerEvents: "none",
          ...o,
        },
        className: i,
        onMouseEnter: c.startPause,
        onMouseLeave: c.endPause,
      },
      l.map((u) => {
        let f = u.position || t,
          d = c.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          p = ES(f, d);
        return T.createElement(
          NS,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: c.updateHeight,
            className: u.visible ? TS : "",
            style: p,
          },
          u.type === "custom"
            ? nl(u.message, u)
            : s
            ? s(u)
            : T.createElement(jS, { toast: u, position: f })
        );
      })
    );
  },
  X = it;
const hy = async (e, t, n) => {
    const { login: r, logout: s } = _l.getState();
    try {
      const o = await ke.post("https://zensportstech.com/api/user/login/", {
          email: e,
          password: t,
        }),
        { access: i, refresh: l } = o.data;
      localStorage.setItem("access_token", i),
        localStorage.setItem("refresh_token", l),
        r(),
        n("/");
    } catch (o) {
      console.error("Login failed", o.response),
        alert("Login failed. Please check your credentials and try again.");
    }
  },
  RS = async (e, t) => {
    const n = {
      email: e.email,
      first_name: e.firstName,
      last_name: e.lastName,
      password: e.password,
      company: e.organisation,
      role: e.role,
      favSport: e.interestedSport,
      has_accepted_nl: e.isNewsLetter,
    };
    try {
      const r = await ke.post("https://zensportstech.com/api/user/signup/", n, {
        headers: { "Content-Type": "application/json" },
      });
      return (
        X.success("Signup successful!"),
        await hy(n.email, n.password, t),
        r.data
      );
    } catch (r) {
      if (r.response && r.response.data) {
        const s = r.response.data;
        console.log(s),
          s.email
            ? X.error(s.email[0])
            : s.password
            ? X.error(s.password[0])
            : s.first_name
            ? X.error(s.first_name[0])
            : X.error("Something went wrong");
      } else
        console.log("Something went wrong"), X.error("Something went wrong");
      throw r;
    }
  },
  Hn = ({ title: e, name: t, type: n = "text", inputHandler: r }) =>
    a.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        a.jsx("p", { className: "text-sm", children: e }),
        a.jsx("input", {
          type: n,
          name: t,
          onChange: r,
          className: `\r
          bg-gray-700 focus:bg-gray-800 focus:border-2 \r
          rounded focus:border-purple-600 px-4 py-1`,
        }),
      ],
    }),
  AS = () => {
    const e = Ut(),
      [t, n] = T.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        interestedSport: "",
        organisation: "",
        role: "",
        isAgreed: !1,
        isNewsLetter: !1,
      }),
      r = () => {
        const {
          firstName: o,
          lastName: i,
          email: l,
          password: c,
          phone: u,
          interestedSport: f,
          organisation: d,
          role: p,
          isAgreed: y,
        } = t;
        if (!o || !i || !l || !c || !u || !f || !d || !p) {
          it.error("Please fill out all Entries!");
          return;
        }
        if (!y) {
          it.error("Please Agree to our T&C and Privacy-policy!");
          return;
        }
        RS(t, e);
      },
      s = (o) => {
        const { name: i, value: l, type: c, checked: u } = o.target;
        n((f) => ({ ...f, [i]: c === "checkbox" ? u : l }));
      };
    return a.jsx("div", {
      className: "bg-gray-900 h-screen flex justify-center text-white",
      children: a.jsxs("div", {
        className: "mt-8 bg-gray-800 w-1/2 mb-16 py-4 px-8 rounded-md",
        children: [
          a.jsx("p", {
            className: "text-center mb-8",
            children: "Start your account today!",
          }),
          a.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              a.jsx(Hn, {
                title: "First Name*",
                name: "firstName",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Last Name*",
                name: "lastName",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Email Address*",
                name: "email",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Password*",
                name: "password",
                type: "password",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Phone Number*",
                name: "phone",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Interested Sport*",
                name: "interestedSport",
                inputHandler: s,
              }),
              a.jsx(Hn, {
                title: "Organisation*",
                name: "organisation",
                inputHandler: s,
              }),
              a.jsx(Hn, { title: "Role*", name: "role", inputHandler: s }),
            ],
          }),
          a.jsxs("div", {
            className: "mt-8 flex flex-col gap-4",
            children: [
              a.jsxs("div", {
                className: "flex gap-2",
                children: [
                  a.jsx("input", {
                    type: "checkbox",
                    name: "isAgreed",
                    checked: t.isAgreed,
                    onChange: s,
                  }),
                  a.jsxs("p", {
                    children: [
                      "I agree to the ",
                      a.jsx("a", {
                        href: "",
                        children: "terms and conditions",
                      }),
                      " &",
                      " ",
                      a.jsx("a", { href: "", children: "Privacy policy" }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex gap-2",
                children: [
                  a.jsx("input", {
                    type: "checkbox",
                    name: "isNewsLetter",
                    checked: t.isNewsLetter,
                    onChange: s,
                  }),
                  a.jsxs("p", {
                    children: [
                      "I sign up for ",
                      a.jsx("a", { href: "", children: "News Letter" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className: "flex justify-center mt-8",
            children: a.jsx("button", {
              className: "bg-primary500 w-1/2 py-2 rounded-full",
              onClick: r,
              children: "Create Account",
            }),
          }),
          a.jsx("div", {
            className: "flex justify-center mt-4",
            children: a.jsx(oe, {
              to: "/login",
              children: "Already have an Account? Login Here!",
            }),
          }),
        ],
      }),
    });
  },
  PS = () => {
    const [e, t] = T.useState(""),
      [n, r] = T.useState(""),
      s = Ut(),
      o = () => {
        hy(e, n, s);
      };
    return a.jsx("div", {
      className: "bg-gray-900 h-screen flex justify-center text-white",
      children: a.jsxs("div", {
        className: "mt-32 bg-gray-800 w-1/4 mb-24 py-4 px-8 rounded-md",
        children: [
          a.jsx("p", {
            className: "text-center",
            children: "Welcome Back, Login to Your account!",
          }),
          a.jsxs("div", {
            className: "mt-16 flex flex-col gap-2 w-full",
            children: [
              a.jsx("p", { children: "Registered Email" }),
              a.jsx("input", {
                type: "text",
                className: "rounded-md bg-gray-900 px-2 py-2",
                onChange: (i) => t(i.target.value),
              }),
            ],
          }),
          a.jsxs("div", {
            className: "mt-8 flex flex-col gap-2 w-full",
            children: [
              a.jsx("p", { children: "Password" }),
              a.jsx("input", {
                type: "password",
                className: "rounded-md bg-gray-900 px-2 py-2",
                onChange: (i) => r(i.target.value),
              }),
            ],
          }),
          a.jsx("button", {
            className: "my-8 px-4 py-2 bg-primary500 rounded-full w-full",
            onClick: o,
            children: "Login",
          }),
          a.jsx(oe, {
            to: "/signup",
            className: "text-center underline",
            children: "Don't have an account? Register Here!",
          }),
        ],
      }),
    });
  },
  MS = ue(
    a.jsx("path", {
      d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z",
    }),
    "PaymentOutlined"
  ),
  LS = async ({ userSubscriptionId: e }) => {
    try {
      const t = me.put(`plans/subscription/update/${e}/`, { isValid: !0 });
      return X.success("Subscription Successfull!"), t;
    } catch {
      X.error("Updating Failed");
    }
  },
  my = ue(a.jsx("path", { d: "M6 19h4V5H6zm8-14v14h4V5z" }), "Pause"),
  gy = ue(
    a.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  OS = () => {
    const { isAuthenticated: e, logout: t } = _l(),
      n = Ut(),
      [r, s] = T.useState([]),
      [o, i] = T.useState({});
    T.useEffect(() => {
      zg({ setPlans: s });
    }, []),
      T.useEffect(() => {
        const d = document.createElement("script");
        return (
          (d.src = "https://checkout.razorpay.com/v1/checkout.js"),
          (d.async = !0),
          document.body.appendChild(d),
          () => {
            document.body.removeChild(d);
          }
        );
      }, []),
      T.useEffect(() => {
        const d = {};
        r.forEach((p) => {
          p.plans.length > 0 && (d[p.category] = p.plans[0].id);
        }),
          i(d);
      }, [r]);
    const l = () => {
        t(), n("/login");
      },
      c = async ({ planId: d }) => {
        console.log("PID ", d);
        const p = await k4(d);
        var y = {
            key: p.keyId,
            subscription_id: p.subscriptionId,
            name: "Zenminds Sporting Technology",
            description: "Monthly Test Plan",
            handler: function (m) {
              m.razorpay_payment_id
                ? (console.log("Sub data ", p.userSubscription),
                  LS({ userSubscriptionId: p.userSubscription }),
                  n("/"))
                : X.error("Subscription Failed! Please Try Again!");
            },
            prefill: {
              name: "Zenminds Sporting Technologies",
              email: "support@zenmindsports.com",
              contact: "+919876543210",
            },
            theme: { color: "#A020F0" },
          },
          h = new Razorpay(y);
        h.open();
      },
      u = ({ link: d }) => {
        n(d);
      },
      f = (d, p) => {
        i((y) => ({ ...y, [d]: p }));
      };
    return a.jsxs("div", {
      className: "bg-primary1000 h-screen ",
      children: [
        a.jsxs("div", {
          className:
            "text-white bg-secondary200 bg-opacity-30 flex justify-between p-4 shadow-xl",
          children: [
            a.jsx("p", {
              className: "font-bold",
              children: "Zenminds - Subscription Store",
            }),
            a.jsx("div", {
              className: "flex gap-4",
              children: e
                ? a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(oe, { to: "/", children: "Home" }),
                      a.jsx(oe, {
                        to: "/products",
                        children: a.jsx("p", {
                          className: "border-b-2 border-blue-900",
                          children: "Products",
                        }),
                      }),
                      a.jsx(oe, {
                        to: "/profile",
                        children: a.jsx("p", { children: "Profile" }),
                      }),
                      a.jsx("p", {
                        onClick: l,
                        className: "cursor-pointer text-red-700",
                        children: "Logout",
                      }),
                    ],
                  })
                : a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(oe, { to: "/signup", children: "Signup" }),
                      a.jsx(oe, {
                        to: "/login",
                        className: "bg-primary1000 text-white px-2",
                        children: "Login",
                      }),
                    ],
                  }),
            }),
          ],
        }),
        a.jsx("div", {
          className: "p-4 grid grid-cols-3 gap-24 px-24",
          children:
            r.length > 0
              ? r.map((d) => {
                  const p = o[d.category],
                    y = d.plans.find((h) => h.id === p);
                  return a.jsxs(
                    "div",
                    {
                      className: `
                ${
                  d.category == "Professional"
                    ? "bg-gradient-to-bl from-yellow-700 animate-glow"
                    : "bg-black"
                }
                mb-8 px-8 py-8 rounded-lg hover:border-2 transition-all duration-7 text-white bg-opacity-20`,
                      children: [
                        a.jsxs("div", {
                          className: "flex gap-6",
                          children: [
                            a.jsx("h2", {
                              className: "font-bold",
                              children: d.category,
                            }),
                            a.jsx("div", {
                              className: "flex",
                              children: d.plans.map((h) =>
                                a.jsx(
                                  "button",
                                  {
                                    className: `px-4 bg-opacity-40 ${
                                      p === h.id
                                        ? "bg-primary500 text-white"
                                        : "bg-secondary1000 text-gray-100 opacity-70"
                                    }  transition-all duration-150`,
                                    onClick: () => f(d.category, h.id),
                                    children: h.name,
                                  },
                                  h.id
                                )
                              ),
                            }),
                          ],
                        }),
                        y &&
                          a.jsxs("div", {
                            className: "",
                            children: [
                              a.jsx("ul", {
                                className: "list-disc ml-5 py-8",
                                children: y.description
                                  .split(".")
                                  .map(
                                    (h, m) =>
                                      h.trim() &&
                                      a.jsx("li", { children: h.trim() }, m)
                                  ),
                              }),
                              a.jsxs("div", {
                                className: "flex items-end gap-2",
                                children: [
                                  a.jsxs("p", {
                                    className: "font-semibold text-3xl mt-2",
                                    children: ["₹ ", y.price],
                                  }),
                                  a.jsxs("p", {
                                    className: "items-end",
                                    children: ["/ ", y.durationCategory.name],
                                  }),
                                ],
                              }),
                              a.jsx("div", {
                                className:
                                  "flex gap-4 justify-end items-center",
                                children: y.isSubscribed
                                  ? a.jsxs("div", {
                                      className: "flex gap-4 py-8",
                                      children: [
                                        a.jsxs("button", {
                                          className:
                                            " text-white flex gap-2 bg-gray-700 py-1 px-2 rounded opacity-50 hover:opacity-80",
                                          onClick: () => u({ link: y.url }),
                                          children: ["Pause", a.jsx(my, {})],
                                        }),
                                        a.jsxs("button", {
                                          className:
                                            "flex gap-2 bg-orange-900 py-1 px-2 rounded opacity-80 hover:opacity-100",
                                          children: ["Cancel", a.jsx(gy, {})],
                                        }),
                                      ],
                                    })
                                  : a.jsxs("button", {
                                      className:
                                        "mt-4 bg-purple-800 flex gap-4 text-white py-2 px-4 rounded hover:bg-purple-600 transition-all duration-150 ease-linear hover:shadow-lg",
                                      onClick: () => c({ planId: y }),
                                      children: ["Subscribe", a.jsx(MS, {})],
                                    }),
                              }),
                            ],
                          }),
                      ],
                    },
                    d.category
                  );
                })
              : a.jsx("p", {
                  className: "text-white",
                  children: "No plans available",
                }),
        }),
      ],
    });
  },
  BS = async ({ setMyPlans: e }) => {
    try {
      const t = await me.get("plans/my-subscriptions/");
      console.log(t.data), e(t.data);
    } catch {
      X.error("Something went wrong");
    }
  },
  IS = () => {
    const { isAuthenticated: e, logout: t } = _l(),
      [n, r] = T.useState([]),
      s = Ut(),
      o = () => {
        t(), s("/login");
      };
    return (
      T.useEffect(() => {
        BS({ setMyPlans: r });
      }, []),
      a.jsxs("div", {
        className:
          "bg-secondary1000 relative h-screen overflow-auto text-white",
        children: [
          a.jsxs("div", {
            className:
              "bg-primary1000 fixed z-10 w-full text-white flex justify-between p-4 shadow-xl",
            children: [
              a.jsx("p", { className: "font-bold", children: "Zenminds" }),
              a.jsx("div", {
                className: "flex gap-4",
                children: e
                  ? a.jsxs(a.Fragment, {
                      children: [
                        a.jsx(oe, {
                          to: "/",
                          children: a.jsx("p", { children: "Home" }),
                        }),
                        a.jsx(oe, { to: "/products", children: "Products" }),
                        a.jsx(oe, {
                          to: "/profile",
                          children: a.jsx("p", {
                            className: "border-b-2 border-blue-900",
                            children: "Profile",
                          }),
                        }),
                        a.jsx("p", {
                          onClick: o,
                          className:
                            "cursor-pointer bg-red-700 px-2 rounded bg-opacity-50",
                          children: "Logout",
                        }),
                      ],
                    })
                  : a.jsxs(a.Fragment, {
                      children: [
                        a.jsx(oe, { to: "/signup", children: "Signup" }),
                        a.jsx(oe, {
                          to: "/login",
                          className: "bg-primary1000 text-white px-2",
                          children: "Login",
                        }),
                      ],
                    }),
              }),
            ],
          }),
          a.jsx("div", {
            children:
              n.length > 0
                ? a.jsx("div", {
                    className: "grid grid-cols-3 mt-24 gap-8 px-8",
                    children: n.map((i) =>
                      a.jsxs(
                        "div",
                        {
                          className:
                            "bg-gradient-to-r from-black to-black p-4 shadow-lg rounded-lg",
                          children: [
                            a.jsxs("div", {
                              className:
                                "flex gap-4 justify-between items-center px-4",
                              children: [
                                a.jsx("h3", {
                                  className: "text-xl font-bold py-2",
                                  children: i.plan.displayName,
                                }),
                                a.jsxs("button", {
                                  className:
                                    "bg-purple-800 flex gap-4 text-white py-2 px-4 rounded hover:bg-purple-600 transition-all duration-150 ease-linear opacity-70",
                                  onClick: () => handleLaunch({ link: i.url }),
                                  children: ["Launch", a.jsx(uy, {})],
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("ul", {
                                  className: "list-disc ml-5 py-8",
                                  children: i.plan.description
                                    .split(".")
                                    .map(
                                      (l, c) =>
                                        l.trim() &&
                                        a.jsx("li", { children: l.trim() }, c)
                                    ),
                                }),
                                a.jsxs("div", {
                                  className: "flex gap-4",
                                  children: [
                                    a.jsx("p", { children: "VALID TILL : " }),
                                    a.jsx("p", { children: i.end_date }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "flex gap-4 pt-8 pb-2 justify-end",
                                  children: [
                                    a.jsxs("button", {
                                      className:
                                        " text-white flex gap-2 bg-gray-700 py-1 px-2 rounded opacity-50 hover:opacity-80",
                                      onClick: () =>
                                        handleLaunch({
                                          link: selectedPlan.url,
                                        }),
                                      children: ["Pause", a.jsx(my, {})],
                                    }),
                                    a.jsxs("button", {
                                      className:
                                        "flex gap-2 bg-orange-900 py-1 px-2 rounded opacity-80 hover:opacity-100",
                                      children: ["Cancel", a.jsx(gy, {})],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        i.plan.id
                      )
                    ),
                  })
                : a.jsx("p", { children: "No active subscriptions" }),
          }),
        ],
      })
    );
  },
  US = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/", element: a.jsx($9, {}) }),
        a.jsx(Q, { path: "/signup", element: a.jsx(AS, {}) }),
        a.jsx(Q, { path: "/login", element: a.jsx(PS, {}) }),
        a.jsx(Q, { path: "/products", element: a.jsx(OS, {}) }),
        a.jsx(Q, { path: "/profile", element: a.jsx(IS, {}) }),
      ],
    }),
  Hf = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M10 7L15 12L10 17",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      }),
    }),
  qn = ({ text: e, navigateTo: t = "/", children: n, bgColour: r }) =>
    a.jsx(oe, {
      to: t,
      children: a.jsx("div", {
        className: `group border-b-1 border-gray-700
          ${r || ""} 
          hover:border-accent
          hover:shadow-custom-green
          transition-all duration-300 px-4 py-2`,
        children: a.jsxs("div", {
          className:
            "flex justify-between group-hover:scale-110 transition-transform duration-300",
          children: [
            a.jsxs("div", { className: "flex gap-4", children: [n, e] }),
            a.jsx(Hf, {}),
          ],
        }),
      }),
    }),
  $S = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "mt-1",
        children: [
          a.jsx("path", {
            d: "M6.67754 7.47835L8.35671 6.14085C9.44171 5.27669 9.98421 4.84419 10.3259 5.05752C10.6675 5.27085 10.49 5.93252 10.1359 7.25419L10.1025 7.37919C9.97421 7.85585 9.91088 8.09419 10.0225 8.28419L10.0284 8.29419C10.145 8.48252 10.3934 8.54919 10.8892 8.68169C11.7825 8.92085 12.2292 9.04002 12.3075 9.35169C12.3087 9.35695 12.3098 9.36223 12.3109 9.36752C12.38 9.68085 12.0275 9.96085 11.3234 10.5225L9.64421 11.8592C8.55838 12.7242 8.01588 13.1559 7.67421 12.9425C7.33338 12.7292 7.51088 12.0675 7.86504 10.7459L7.89838 10.6209C8.02588 10.145 8.09004 9.90669 7.97754 9.71585L7.97171 9.70585C7.85504 9.51835 7.60671 9.45169 7.11088 9.31835C6.21754 9.07919 5.77088 8.96002 5.69254 8.64835C5.69136 8.64309 5.69024 8.63781 5.68921 8.63252C5.62005 8.32002 5.97254 8.03919 6.67754 7.47835Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
          a.jsx("path", {
            d: "M0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
        ],
      }),
    }),
  yy = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M11.6453 17.2167L11.589 17.2012L5.78064 15.6096L5.6335 15.5692V15.4167V10.8333V10.6333H5.8335H7.17516H7.21123L7.24503 10.6459L12.095 12.4543L12.0966 12.4549C12.4571 12.5927 12.7002 12.9418 12.7002 13.3333V13.5384L12.4952 13.5333L12.5002 13.3333L12.4951 13.5333L12.4951 13.5333L12.4948 13.5333L12.4939 13.5332L12.4902 13.5332L12.4761 13.5328L12.4224 13.5313C12.3761 13.53 12.3097 13.528 12.2293 13.5254C12.0686 13.5202 11.8515 13.5123 11.6263 13.5019C11.4014 13.4914 11.167 13.4783 10.9722 13.4624C10.8749 13.4544 10.7857 13.4457 10.7116 13.4359C10.6424 13.4269 10.5719 13.4152 10.5205 13.3982L11.6453 17.2167ZM11.6453 17.2167L11.7011 17.1994L16.6428 15.666L16.865 15.5971L16.7635 15.3878C16.5988 15.0482 16.2399 14.8 15.8335 14.8H11.3752C10.9451 14.8 10.5249 14.7363 10.1217 14.6019L10.1215 14.6019L8.32792 14.0065L8.72703 12.8028L10.5203 13.3981L11.6453 17.2167ZM13.9668 13.3333V13.5333H14.1668H15.8335C17.1064 13.5333 18.1335 14.5605 18.1335 15.8333V16.5196L11.6634 18.5415L5.88691 16.9406L5.6335 16.8704V17.1333V18.1333H1.0335V9.36667H7.43904L12.5383 11.2706C12.5384 11.2706 12.5384 11.2707 12.5385 11.2707C13.3937 11.5915 13.9668 12.4168 13.9668 13.3333ZM4.16683 16.8667H4.36683V16.6667V10.8333V10.6333H4.16683H2.50016H2.30016V10.8333V16.6667V16.8667H2.50016H4.16683ZM9.36683 5.83334C9.36683 3.6438 11.144 1.86667 13.3335 1.86667C15.523 1.86667 17.3002 3.6438 17.3002 5.83334C17.3002 8.02288 15.523 9.80001 13.3335 9.80001C11.144 9.80001 9.36683 8.02288 9.36683 5.83334ZM10.6335 5.83334C10.6335 7.32713 11.8397 8.53334 13.3335 8.53334C14.8273 8.53334 16.0335 7.32713 16.0335 5.83334C16.0335 4.33955 14.8273 3.13334 13.3335 3.13334C11.8397 3.13334 10.6335 4.33955 10.6335 5.83334Z",
          fill: "white",
          stroke: "#23232F",
          "stroke-width": "0.4",
        }),
      }),
    }),
  xd = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsxs("mask", {
            id: "path-1-outside-1_434_411",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "1.5011",
            width: "18",
            height: "17",
            fill: "black",
            children: [
              a.jsx("rect", {
                fill: "white",
                y: "1.5011",
                width: "18",
                height: "17",
              }),
              a.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.90122 7.40216L8 6.50116L5 6.00128L2.60345 3.60532C2.38074 3.38266 2 3.54039 2 3.85532C2 3.94909 2.03726 4.03902 2.10357 4.10532L4.5 6.50116L5.5 9.50042L6.1435 10.1059L8.90122 7.40216ZM10.4141 14.1243L13.1239 11.6238L15.7926 14.2919C16.1833 14.6824 16.1833 15.3157 15.7926 15.7063L14.6859 16.8127C14.3038 17.1948 13.6872 17.2041 13.2936 16.8338L10.4141 14.1243Z",
              }),
            ],
          }),
          a.jsx("path", {
            d: "M8 6.50116L8.84842 5.65253L8.57651 5.38067L8.19723 5.31748L8 6.50116ZM8.90122 7.40216L9.74133 8.25903L10.6068 7.41048L9.74965 6.55353L8.90122 7.40216ZM5 6.00128L4.15158 6.84991L4.42349 7.12176L4.80277 7.18496L5 6.00128ZM2.60345 3.60532L3.45187 2.75669L3.45187 2.75669L2.60345 3.60532ZM2.10357 4.10532L1.25515 4.95395L1.25515 4.95395L2.10357 4.10532ZM4.5 6.50116L5.63839 6.1216L5.54878 5.85283L5.34842 5.65253L4.5 6.50116ZM5.5 9.50042L4.36161 9.87998L4.45731 10.167L4.67767 10.3744L5.5 9.50042ZM6.1435 10.1059L5.32117 10.9799L6.16059 11.7697L6.98361 10.9628L6.1435 10.1059ZM10.4141 14.1243L9.60032 13.2424L8.65388 14.1158L9.59177 14.9983L10.4141 14.1243ZM13.1239 11.6238L13.9723 10.7752L13.1572 9.96026L12.3101 10.7419L13.1239 11.6238ZM15.7926 14.2919L14.9442 15.1405V15.1405L15.7926 14.2919ZM15.7926 15.7063L16.6411 16.5549H16.6411L15.7926 15.7063ZM14.6859 16.8127L15.5343 17.6613L15.5343 17.6613L14.6859 16.8127ZM13.2936 16.8338L12.4713 17.7077V17.7077L13.2936 16.8338ZM7.15158 7.34979L8.0528 8.25079L9.74965 6.55353L8.84842 5.65253L7.15158 7.34979ZM4.80277 7.18496L7.80277 7.68484L8.19723 5.31748L5.19723 4.8176L4.80277 7.18496ZM1.75502 4.45395L4.15158 6.84991L5.84842 5.15265L3.45187 2.75669L1.75502 4.45395ZM3.2 3.85532C3.2 4.60941 2.28831 4.98711 1.75502 4.45395L3.45187 2.75669C2.47316 1.77822 0.8 2.47138 0.8 3.85532H3.2ZM2.952 3.25669C3.11079 3.41544 3.2 3.63078 3.2 3.85532H0.8C0.8 4.2674 0.963722 4.6626 1.25515 4.95395L2.952 3.25669ZM5.34842 5.65253L2.952 3.25669L1.25515 4.95395L3.65158 7.34979L5.34842 5.65253ZM6.63839 9.12087L5.63839 6.1216L3.36161 6.88072L4.36161 9.87998L6.63839 9.12087ZM6.96584 9.23199L6.32233 8.62648L4.67767 10.3744L5.32117 10.9799L6.96584 9.23199ZM8.06112 6.54529L5.3034 9.24906L6.98361 10.9628L9.74133 8.25903L8.06112 6.54529ZM11.2279 15.0062L13.9377 12.5057L12.3101 10.7419L9.60032 13.2424L11.2279 15.0062ZM12.2755 12.4724L14.9442 15.1405L16.6411 13.4433L13.9723 10.7752L12.2755 12.4724ZM14.9442 15.1405C14.8661 15.0624 14.8661 14.9357 14.9442 14.8576L16.6411 16.5549C17.5005 15.6957 17.5005 14.3024 16.6411 13.4432L14.9442 15.1405ZM14.9442 14.8576L13.8375 15.9641L15.5343 17.6613L16.6411 16.5549L14.9442 14.8576ZM13.8375 15.9641C13.9139 15.8877 14.0372 15.8858 14.116 15.9599L12.4713 17.7077C13.3371 18.5224 14.6936 18.5019 15.5343 17.6613L13.8375 15.9641ZM14.116 15.9599L11.2364 13.2504L9.59177 14.9983L12.4713 17.7077L14.116 15.9599Z",
            fill: "#198919",
            mask: "url(#path-1-outside-1_434_411)",
          }),
          a.jsx("path", {
            d: "M11.5 5.9H11.2515L11.0757 6.07574L3.28284 13.8686C2.658 14.4935 2.658 15.5065 3.28284 16.1314L4.38973 17.2383C5.00123 17.8498 5.98795 17.8647 6.61769 17.272L14.4112 9.93692L14.5508 9.80558L14.5883 9.61767L15.0527 7.29581L17.3207 5.02782C17.9214 4.42711 17.496 3.4 16.6464 3.4C16.3935 3.4 16.151 3.50046 15.9722 3.67929L13.7515 5.9H11.5Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
        ],
      }),
    }),
  vy = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M14.2158 12.9342C14.6056 12.668 15.0628 12.5176 15.5346 12.5004C16.0063 12.4832 16.4733 12.5999 16.8815 12.837C17.2896 13.0741 17.6223 13.422 17.8411 13.8403C18.0598 14.2586 18.1556 14.7303 18.1174 15.2008C17.1176 15.5503 16.0556 15.6863 14.9999 15.6C14.9967 14.6555 14.7247 13.7306 14.2158 12.935C13.764 12.2265 13.1409 11.6434 12.404 11.2396C11.6671 10.8358 10.8402 10.6244 9.99995 10.625C9.15981 10.6246 8.33314 10.836 7.59639 11.2398C6.85964 11.6436 6.23662 12.2266 5.78495 12.935M14.9991 15.5992L14.9999 15.625C14.9999 15.8125 14.9899 15.9975 14.9691 16.18C13.4569 17.0476 11.7434 17.5028 9.99995 17.5C8.19161 17.5 6.49411 17.02 5.03078 16.18C5.00936 15.9871 4.99906 15.7932 4.99995 15.5992M4.99995 15.5992C3.94464 15.6886 2.8832 15.5531 1.88411 15.2017C1.84607 14.7313 1.94194 14.2598 2.16064 13.8416C2.37933 13.4234 2.71192 13.0757 3.11995 12.8386C3.52798 12.6015 3.99478 12.4847 4.46638 12.5018C4.93798 12.5188 5.39512 12.669 5.78495 12.935M4.99995 15.5992C5.00294 14.6548 5.2763 13.7307 5.78495 12.935M12.4999 5.625C12.4999 6.28804 12.2366 6.92393 11.7677 7.39277C11.2989 7.86161 10.663 8.125 9.99995 8.125C9.33691 8.125 8.70102 7.86161 8.23218 7.39277C7.76334 6.92393 7.49995 6.28804 7.49995 5.625C7.49995 4.96196 7.76334 4.32607 8.23218 3.85723C8.70102 3.38839 9.33691 3.125 9.99995 3.125C10.663 3.125 11.2989 3.38839 11.7677 3.85723C12.2366 4.32607 12.4999 4.96196 12.4999 5.625ZM17.4999 8.125C17.4999 8.37123 17.4514 8.61505 17.3572 8.84253C17.263 9.07002 17.1249 9.27672 16.9508 9.45082C16.7767 9.62493 16.57 9.76305 16.3425 9.85727C16.115 9.9515 15.8712 10 15.6249 10C15.3787 10 15.1349 9.9515 14.9074 9.85727C14.6799 9.76305 14.4732 9.62493 14.2991 9.45082C14.125 9.27672 13.9869 9.07002 13.8927 8.84253C13.7984 8.61505 13.7499 8.37123 13.7499 8.125C13.7499 7.62772 13.9475 7.15081 14.2991 6.79917C14.6508 6.44754 15.1277 6.25 15.6249 6.25C16.1222 6.25 16.5991 6.44754 16.9508 6.79917C17.3024 7.15081 17.4999 7.62772 17.4999 8.125ZM6.24995 8.125C6.24995 8.37123 6.20145 8.61505 6.10722 8.84253C6.01299 9.07002 5.87488 9.27672 5.70077 9.45082C5.52666 9.62493 5.31996 9.76305 5.09248 9.85727C4.86499 9.9515 4.62118 10 4.37495 10C4.12872 10 3.8849 9.9515 3.65742 9.85727C3.42993 9.76305 3.22323 9.62493 3.04912 9.45082C2.87501 9.27672 2.7369 9.07002 2.64267 8.84253C2.54845 8.61505 2.49995 8.37123 2.49995 8.125C2.49995 7.62772 2.69749 7.15081 3.04912 6.79917C3.40075 6.44754 3.87767 6.25 4.37495 6.25C4.87223 6.25 5.34914 6.44754 5.70077 6.79917C6.0524 7.15081 6.24995 7.62772 6.24995 8.125Z",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      }),
    }),
  FS = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("path", {
            d: "M3.64952 8.5V8.90564C3.64952 8.9811 3.65765 9.0565 3.67628 9.12962C3.92183 10.0933 4.39245 10.691 4.71834 10.9737C4.84219 11.0811 5.00469 11.1245 5.1686 11.1289C5.56665 11.1394 6.15085 11.1503 6.5343 11.1602M3.64952 8.5V4.28929C3.64952 3.23818 5.13677 1.34623 8.18382 1.48638C9.33251 1.48638 11.7024 2.04697 11.9926 4.28929C11.9926 5.86192 11.9926 7.59598 11.9926 8.5M3.64952 8.5H4.91912M11.9926 8.5C11.9926 8.69837 11.9926 8.77922 11.9926 8.83725C11.9926 8.9576 11.9717 9.07675 11.9263 9.18819C11.6489 9.8682 11.0749 10.9926 10.5417 11.1214C10.4163 11.1516 10.159 11.1715 9.81618 11.1836M11.9926 8.5H10.723M5.64461 8.5C5.5237 9.17133 5.49952 10.3588 6.3701 11.1649M5.64461 8.5H4.91912M5.64461 8.5H7.82108M6.3701 11.1649C6.30913 11.1633 6.59421 11.1618 6.5343 11.1602M6.3701 11.1649C6.83929 11.1765 7.33731 11.1865 7.82108 11.1925M9.99754 8.5C10.1185 9.19007 10.1789 10.4094 9.45343 11.193M9.99754 8.5H10.723M9.99754 8.5H7.82108M9.45343 11.193C9.58243 11.1906 9.7039 11.1875 9.81618 11.1836M9.45343 11.193C8.98325 11.2015 8.41284 11.1999 7.82108 11.1925M4.91912 8.5V5.69073C4.91912 5.13844 5.36684 4.69073 5.91912 4.69073H9.72303C10.2753 4.69073 10.723 5.13844 10.723 5.69073V8.5M6.5343 11.1602V11.9973M6.5343 11.9973L3.25485 12.6675C3.15579 12.6877 3.0592 12.7212 2.97618 12.7789C2.53761 13.0838 1.88579 13.8333 2.01717 14.9754C2.01717 15.4194 2.01717 15.9054 2.01717 16.3768M6.5343 11.9973L7.43886 12.968C7.83288 13.3909 8.50229 13.3926 8.89852 12.9718C9.18198 12.6708 9.45446 12.3814 9.81618 11.9973M9.81618 11.9973C10.4208 11.9973 11.8838 12.1374 12.8995 12.698C13.9152 13.2586 14.0482 14.4498 13.9877 14.9754V16.3768M9.81618 11.9973V11.1836M11.8113 18.479H12.9877C13.54 18.479 13.9877 18.0313 13.9877 17.479V16.3768M11.8113 18.479V16.3768M11.8113 18.479H4.19365M11.8113 14.9754V16.3768M11.8113 16.3768H13.9877M4.19365 18.479H3.01717C2.46489 18.479 2.01717 18.0314 2.01717 17.4791C2.01717 17.1426 2.01717 16.7646 2.01717 16.3768M4.19365 18.479V16.3768M4.19365 14.9754V16.3768M4.19365 16.3768H2.01717M7.82108 8.5V11.1925",
            stroke: "white",
            "stroke-linecap": "round",
          }),
          a.jsx("path", {
            d: "M17.7788 14.0892H18C18.5523 14.0892 19 13.6415 19 13.0892V2C19 1.44772 18.5523 1 18 1H16C15.4477 1 15 1.44772 15 2V13.0892C15 13.6415 15.4477 14.0892 16 14.0892H16.1412M17.7788 14.0892V17.1812C17.7788 17.6334 17.4122 18 16.96 18V18C16.5078 18 16.1412 17.6334 16.1412 17.1812V14.0892M17.7788 14.0892H16.1412",
            stroke: "white",
            "stroke-width": "0.8",
          }),
        ],
      }),
    }),
  DS = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M5.01274 6.4087V3.58594C5.01274 3.27843 5.2877 3.04379 5.59138 3.09216L7.22896 3.35299C7.27984 3.36109 7.33166 3.36128 7.38259 3.35356L9.13839 3.08722C9.44094 3.04133 9.71338 3.27509 9.71338 3.58111C9.71338 4.09151 9.71338 4.97619 9.71338 6.4087M5.01274 6.4087H1.9172M5.01274 6.4087C5.01274 7.50435 5.01274 9.50087 7.30573 9.69565C8.22293 9.69565 9.71338 9.45217 9.71338 6.4087M5.01274 6.4087H9.71338M9.71338 6.4087H10.8599M16.9363 7.13913V5.81304C16.9363 5.5369 16.7124 5.31304 16.4363 5.31304H12.621C12.3449 5.31304 12.121 5.5369 12.121 5.81304V9.80435C12.121 10.0805 12.3449 10.3043 12.621 10.3043H16.4363C16.7124 10.3043 16.9363 10.0805 16.9363 9.80435V8.47826M16.9363 7.13913L18.1687 6.04867C18.4914 5.76312 19 5.99223 19 6.42312V9.1212C19 9.54409 18.5077 9.77601 18.1816 9.50672L16.9363 8.47826M16.9363 7.13913V8.47826M7.30573 11.0348C5.35669 10.913 1.36688 11.4 1 14.3217C1 15.3806 1 16.0783 1 16.5005C1 16.7766 1.22386 17 1.5 17H12.9968C13.273 17 13.4968 16.7761 13.4968 16.5V14.3217C13.4586 13.1855 12.1669 10.9374 7.30573 11.0348Z",
          stroke: "white",
          "stroke-linecap": "round",
        }),
      }),
    }),
  VS = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M6.97702 1.71243C6.72056 1.84685 6.66017 1.97325 6.6414 2.41524C6.6268 2.75874 6.62586 2.76219 6.54109 2.77919C6.41125 2.80527 6.23875 2.93451 6.16395 3.06169C6.1001 3.17029 6.09655 3.23274 6.08739 4.40751L6.07775 5.63945L5.84098 5.41692C5.32021 4.92752 4.71735 4.69796 4.0438 4.73257C3.13716 4.77917 2.33188 5.31328 1.92371 6.13869C1.71491 6.56098 1.66433 6.77882 1.66657 7.24579C1.66827 7.59876 1.6787 7.66643 1.77442 7.94587C2.39361 9.75354 4.56623 10.3004 5.88683 8.98098L6.08071 8.78727V10.7681V12.749L4.61202 14.2142C3.80423 15.02 3.12227 15.7189 3.09655 15.7672C3.0373 15.8786 3.03652 16.0901 3.09486 16.2258C3.12005 16.2843 3.56922 16.7558 4.11332 17.2947C5.167 18.3385 5.19673 18.3606 5.48642 18.3172C5.61333 18.2982 5.67069 18.262 5.85323 18.086C5.97225 17.9712 6.07788 17.8772 6.08795 17.8772C6.09799 17.8772 6.11516 17.9127 6.12605 17.9561C6.15502 18.0714 6.30618 18.2376 6.42849 18.2887C6.55774 18.3426 7.2705 18.3498 7.40666 18.2985C7.54312 18.2471 7.70656 18.0747 7.74297 17.9438C7.76063 17.8803 7.77513 17.4619 7.77523 17.014L7.77543 16.1996L8.32947 15.6467L8.88351 15.0939L8.88403 16.51C8.88458 17.9187 8.88497 17.9268 8.95804 18.0557C8.99924 18.1283 9.08847 18.2175 9.16118 18.2586C9.27736 18.3244 9.33508 18.332 9.71457 18.332C10.0941 18.332 10.1518 18.3244 10.268 18.2586C10.3407 18.2175 10.4299 18.1283 10.4711 18.0557L10.5446 17.9261L10.5451 15.6789L10.5456 13.4318L11.0997 12.879L11.6537 12.3262V15.1027C11.6537 18.1593 11.6433 18.0035 11.86 18.1936C12.0084 18.3237 12.1043 18.3414 12.5891 18.3278C12.9578 18.3174 12.9855 18.3119 13.0985 18.2256C13.351 18.033 13.3311 18.3573 13.3409 14.2791L13.3497 10.6322L14.6329 9.34603C15.3387 8.63862 15.9397 8.01295 15.9685 7.95564C16.0593 7.77489 16.0361 7.58401 15.8876 7.28884L15.7543 7.02398L17.0104 5.76729C17.7013 5.0761 18.2819 4.46934 18.3007 4.41894C18.3503 4.28547 18.3425 4.1152 18.2812 3.99677C18.2026 3.84497 17.5564 3.1685 17.435 3.11093C17.304 3.04883 17.0551 3.04727 16.9399 3.10783C16.8915 3.1333 16.2949 3.71293 15.6142 4.39592L14.3765 5.63776L14.0982 5.50562C13.788 5.35835 13.6508 5.34268 13.4712 5.43415L13.3521 5.49481L13.3421 4.33519C13.3333 3.30933 13.3256 3.16368 13.2757 3.0726C13.2001 2.93448 13.0707 2.83757 12.9015 2.79238L12.7618 2.75503V2.40199C12.7618 2.00011 12.7313 1.91142 12.5444 1.76896L12.4247 1.67772L9.7497 1.66948C7.36977 1.66212 7.06394 1.66688 6.97702 1.71243ZM7.22139 2.48815V2.76128L7.33174 2.78199C7.39245 2.79335 7.50838 2.86092 7.58933 2.93213L7.73655 3.0616L8.33445 3.06124L8.93239 3.06091L9.04467 2.94545C9.1119 2.87635 9.21326 2.81497 9.29725 2.79254L9.43755 2.75503V2.48502V2.21499H8.32947H7.22139V2.48815ZM9.99159 2.48815V2.76128L10.1086 2.78323C10.1782 2.79625 10.282 2.85711 10.3648 2.93337L10.504 3.0616H11.0997H11.6953L11.8345 2.93337C11.9173 2.85711 12.0212 2.79625 12.0908 2.78323L12.2078 2.76128V2.48815V2.21499H11.0997H9.99159V2.48815ZM6.66734 7.74031V12.1612L6.9445 11.8857L7.22165 11.6103L7.21337 7.47431L7.20509 3.33837L6.93622 3.32893L6.66734 3.31945V7.74031ZM9.43755 6.35777V9.39344L9.71457 9.1181L9.99159 8.84276V6.08242V3.32209H9.71457H9.43755V6.35777ZM12.2295 3.34381C12.2175 3.35573 12.2078 4.09905 12.2078 4.99561V6.62568L12.4848 6.35034L12.7618 6.075V4.69855V3.32209H12.5065C12.3661 3.32209 12.2414 3.33186 12.2295 3.34381ZM7.77543 7.33498V11.0548L8.32947 10.502L8.88351 9.94914V6.78214V3.61515H8.32947H7.77543V7.33498ZM10.5456 5.9511V8.28705L11.0997 7.73422L11.6537 7.18139V5.39827V3.61515H11.0997H10.5456V5.9511ZM16.0056 4.80509L14.8367 5.99714L15.1275 6.28769L15.4183 6.57821L16.5998 5.39749L17.7812 4.21673L17.4778 3.91488L17.1745 3.61303L16.0056 4.80509ZM3.75048 5.32416C2.90107 5.51178 2.28365 6.23465 2.21475 7.12212L2.19503 7.37604L3.24161 6.33426C3.81726 5.76127 4.28823 5.28873 4.28823 5.28414C4.28823 5.25946 3.91891 5.28697 3.75048 5.32416ZM3.65744 6.73636L2.39142 8.00159L2.4482 8.1121C2.47942 8.17289 2.52977 8.25446 2.56008 8.29337C2.61464 8.36341 2.62839 8.35091 3.95968 7.0205L5.30414 5.67693L5.1437 5.57404C5.05545 5.51748 4.96976 5.47117 4.95334 5.47117C4.93688 5.47117 4.35374 6.04052 3.65744 6.73636ZM8.64494 10.9798L3.5993 15.9989L3.85412 16.2567C3.99429 16.3985 4.39959 16.7944 4.75476 17.1366L5.40058 17.7587L6.83453 16.3283C7.62323 15.5415 9.88335 13.2743 11.8571 11.2899L15.4456 7.68202L15.3184 7.41505C15.2077 7.18272 15.1341 7.08969 14.7505 6.69748C14.3575 6.29554 14.2791 6.23133 14.0253 6.10323C13.8688 6.02424 13.7295 5.95986 13.7157 5.96015C13.7019 5.96045 11.4201 8.21929 8.64494 10.9798ZM4.33787 7.42413C2.85353 8.90749 2.96254 8.75809 3.24702 8.91921L3.36279 8.98476L4.63978 7.70827L5.91678 6.43175L5.81885 6.2608C5.76498 6.16679 5.71013 6.08985 5.69696 6.08985C5.68379 6.08985 5.0722 6.69029 4.33787 7.42413ZM5.03654 8.12623L4.0116 9.15066H4.20825C4.8792 9.15066 5.58146 8.6974 5.87816 8.07283C5.94963 7.92243 6.02365 7.73341 6.04261 7.65282C6.07941 7.49652 6.10193 7.14218 6.07667 7.11695C6.06833 7.10861 5.60026 7.56278 5.03654 8.12623ZM12.4759 11.5039L12.2078 11.7733V14.7764V17.7795H12.4848H12.7618V14.5071C12.7618 12.7072 12.7578 11.2346 12.7529 11.2346C12.748 11.2346 12.6234 11.3558 12.4759 11.5039ZM9.7057 14.2717L9.43755 14.541V16.1603V17.7795H9.71457H9.99159V15.891C9.99159 14.8522 9.98761 14.0024 9.98272 14.0024C9.97783 14.0024 9.85318 14.1236 9.7057 14.2717ZM6.93622 17.0386L6.66734 17.3088V17.5442V17.7795H6.92908C7.11338 17.7795 7.19564 17.767 7.20705 17.7373C7.21597 17.7141 7.21917 17.4867 7.21418 17.2318L7.20509 16.7685L6.93622 17.0386Z",
          fill: "white",
        }),
      }),
    }),
  zS = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx(qn, {
          text: "Dashboard",
          bgColour: "bg-accent",
          children: a.jsx($S, {}),
        }),
        a.jsx(qn, {
          text: "Match",
          navigateTo: "/match",
          children: a.jsx(xd, {}),
        }),
        a.jsx(qn, {
          text: "Competition",
          navigateTo: "/competition",
          children: a.jsx(xd, {}),
        }),
        a.jsx(qn, {
          text: "Tournament",
          navigateTo: "/tournament",
          children: a.jsx(yy, {}),
        }),
        a.jsx(qn, {
          text: "Team",
          navigateTo: "/teams",
          children: a.jsx(vy, {}),
        }),
        a.jsx(qn, {
          text: "Player",
          navigateTo: "/player",
          children: a.jsx(FS, {}),
        }),
        a.jsx(qn, {
          text: "Umpire",
          navigateTo: "/umpire",
          children: a.jsx(DS, {}),
        }),
        a.jsx(qn, {
          text: "Stadium",
          navigateTo: "/stadium",
          children: a.jsx(VS, {}),
        }),
      ],
    }),
  hm = ue(
    a.jsx("path", {
      d: "M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z",
    }),
    "List"
  ),
  dt = ({ children: e }) => {
    const [t, n] = T.useState(!0),
      r = () => {
        n((s) => !s);
      };
    return a.jsxs("div", {
      className: "bg-primary1000 h-screen text-white overflow-x-hidden",
      children: [
        a.jsxs("div", {
          className: `bg-secondary1000 py-4 px-4 flex justify-between shadow-2xl border-b-2 border-gray-800 ${
            t ? "hidden lg:flex" : "static"
          }`,
          children: [
            a.jsxs("div", {
              className: "flex gap-4",
              children: [
                a.jsx("button", { onClick: r, children: a.jsx(hm, {}) }),
                a.jsx(oe, {
                  to: "/",
                  children: a.jsx("p", { children: "METRONICS" }),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex gap-4",
              children: [
                a.jsx("p", { children: "Hello!" }),
                a.jsx("img", {
                  src: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "",
                  className: "w-8 h-8 rounded-full",
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "w-full flex h-screen",
          children: [
            a.jsxs("div", {
              className: `${
                t ? "lg:w-2/12 w-full fixed lg:relative z-10 lg:z-0" : "hidden"
              } bg-secondary1000 flex flex-col gap-4 pt-2`,
              children: [
                a.jsxs("div", {
                  className:
                    "bg-secondary1000 py-4 px-4 flex justify-between shadow-2xl border-b-2 border-gray-800 static lg:hidden",
                  children: [
                    a.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        a.jsx("button", {
                          onClick: r,
                          children: a.jsx(hm, {}),
                        }),
                        a.jsx("p", { children: "METRONICS" }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        a.jsx("p", { children: "Hello Raja!" }),
                        a.jsx("img", {
                          src: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          alt: "",
                          className: "w-8 h-8 rounded-full",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx(zS, {}),
              ],
            }),
            a.jsx("div", {
              className: `${t ? "lg:w-10/12" : "w-full"}`,
              children: a.jsx("div", {
                className: "md:mx-8 md:my-8 mx-2 my-4",
                children: e,
              }),
            }),
          ],
        }),
      ],
    });
  },
  WS = () =>
    a.jsx(dt, {
      children: a.jsx("div", {
        children: a.jsx("p", { children: "Dashboard" }),
      }),
    }),
  HS = () =>
    a.jsx(Cn, {
      children: a.jsx(Q, { path: "/dashboard", element: a.jsx(WS, {}) }),
    });
async function qS({
  setItem: e,
  setLoading: t,
  extendedUrl: n,
  setPrevious: r,
  setNext: s,
}) {
  try {
    t(!0);
    const o = n.startsWith("http") ? n : `/${n}`,
      i = await me.get(o);
    console.log(i.data), e(i.data.results), r(i.data.previous), s(i.data.next);
  } catch (o) {
    console.error("Error fetching data:", o);
  } finally {
    t(!1);
  }
}
const xy = ({
    children: e,
    text: t,
    bgcolour: n = "bg-primary500",
    onClick: r,
  }) =>
    a.jsxs("button", {
      className: `${n} opacity-80 hover:opacity-100 px-4 py-1 flex gap-2 rounded-md `,
      onClick: r,
      children: [
        a.jsx("div", { className: "inline-block align-middle", children: e }),
        a.jsx("p", { children: t }),
      ],
    }),
  GS = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("g", {
            "clip-path": "url(#clip0_237_6533)",
            children: a.jsx("path", {
              d: "M8 0C3.58175 0 0 3.58175 0 8C0 12.4185 3.58175 16 8 16C12.4185 16 16 12.4185 16 8C16 3.58175 12.4185 0 8 0ZM8 15.0157C4.14025 15.0157 1 11.8597 1 7.99997C1 4.14022 4.14025 0.999969 8 0.999969C11.8597 0.999969 15 4.14023 15 7.99997C15 11.8597 11.8597 15.0157 8 15.0157ZM11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z",
              fill: "white",
            }),
          }),
          a.jsx("defs", {
            children: a.jsx("clipPath", {
              id: "clip0_237_6533",
              children: a.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white",
              }),
            }),
          }),
        ],
      }),
    }),
  KS = ue(
    a.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
    "Search"
  ),
  wy = ({
    placeholder: e = "",
    searchTerm: t,
    setSearchTerm: n,
    handleSearch: r,
  }) =>
    a.jsxs("div", {
      className:
        "bg-secondary1000 border-gray-700 border-2 rounded flex justify-between",
      children: [
        a.jsx("input", {
          type: "text",
          placeholder: e,
          value: t,
          onChange: (s) => {
            n(s.target.value);
          },
          className: "bg-secondary500 px-4 focus:outline-none w-full",
        }),
        a.jsx("button", {
          className:
            "px-2 hover:opacity-100 opacity-70 cursor-pointer bg-primary500 transition-colors",
          onClick: r,
          children: a.jsx(KS, { fontSize: "small" }),
        }),
      ],
    }),
  Kr = ({ children: e, flexDirection: t }) =>
    a.jsx("div", {
      className: `bg-secondary500 py-1 px-4 mt-2 rounded-t-lg flex ${t} animate-fadeInUp`,
      children: e,
    }),
  Zr = ({ children: e }) =>
    a.jsx("div", {
      className:
        "bg-secondary1000 rounded-b-lg animate-fadeInUp md:px-8 px-1  py-4 ",
      children: e,
    }),
  qf = ({ children: e, flexDirection: t = "justify-between" }) =>
    a.jsx("div", { className: `flex ${t} animate-fadeInUp`, children: e }),
  Kl = ({ children: e }) =>
    a.jsx("div", {
      className: "bg-secondary250 flex gap-4 px-4 py-2 rounded-t-lg",
      children: e,
    }),
  Zl = ({ children: e }) =>
    a.jsx("div", {
      className:
        "bg-secondary200 h-96 overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-800 scrollbar-track-gray-900 rounded-b-lg text-sm",
      children: e,
    }),
  Vs = ({
    children: e,
    text: t,
    bgcolour: n = "bg-primary500",
    text_colour: r = "text-gray-300",
    onClick: s = null,
    flexDirection: o = "flex-row",
  }) =>
    a.jsx("button", {
      className: `border-1 ${r} opacity-80 hover:opacity-100 px-4 py-1 flex gap-4 rounded-md`,
      onClick: s,
      children: a.jsxs("div", {
        className: `flex gap-2 ${o} `,
        children: [e, a.jsx("p", { children: t })],
      }),
    }),
  Sy = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M14 7L9 12L14 17",
          stroke: "white",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    }),
  ZS = ({
    name: e = "",
    buttonText: t = "",
    children: n,
    addButtonLink: r = "",
    count: s = 0,
    previous: o = null,
    next: i = null,
    fetchItem: l = null,
    searchTerm: c,
    setSearchTerm: u,
    handleSearch: f,
  }) =>
    a.jsxs("div", {
      children: [
        a.jsxs(qf, {
          children: [
            a.jsx("p", { children: e }),
            a.jsx(oe, {
              to: r,
              children: a.jsx(xy, {
                text: t,
                children: a.jsx(GS, { text_size: "small" }),
              }),
            }),
          ],
        }),
        a.jsx(Kr, {
          children: a.jsx(wy, {
            placeholder: `Search ${e} `,
            searchTerm: c,
            setSearchTerm: u,
            handleSearch: f,
          }),
        }),
        a.jsxs(Zr, {
          children: [
            a.jsx(Kl, {
              children: a.jsxs("div", {
                className: "flex  justify-between md:px-4 px-1 w-full",
                children: [
                  a.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      a.jsxs("p", { children: [e, " "] }),
                      a.jsx("p", {
                        className:
                          "text-center w-6 h-6 bg-sky-500 rounded-full",
                        children: s,
                      }),
                    ],
                  }),
                  a.jsx("p", { children: "Actions" }),
                ],
              }),
            }),
            a.jsx(Zl, { children: n }),
            a.jsxs("div", {
              className: "py-4 flex gap-4 justify-end",
              children: [
                o &&
                  a.jsx(Vs, {
                    text: "Previous",
                    onClick: () => {
                      l(o);
                    },
                    children: a.jsx(Sy, {}),
                  }),
                i &&
                  a.jsx(Vs, {
                    text: "Next",
                    onClick: () => {
                      l(i);
                    },
                    flexDirection: "flex-row-reverse",
                    children: a.jsx(Hf, {}),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  Qr = ({
    entityName: e = "Items",
    fetchUrl: t,
    searchPlaceholder: n = `Search ${e}`,
    renderItem: r,
    buttonText: s = "Add Item",
    addButtonLink: o = "/",
    ordering: i = "-id",
    pagePrefix: l = "item",
  }) => {
    const [c, u] = T.useState([]),
      [f, d] = T.useState(!0),
      [p, y] = T.useState(null),
      [h, m] = T.useState(null),
      [S, g] = T.useState(""),
      x = (k) => {
        const j = S ? `&search=${S}` : "";
        qS({
          setItem: u,
          setLoading: d,
          extendedUrl: k + j,
          setPrevious: y,
          setNext: m,
        });
      };
    T.useEffect(() => {
      x(`${t}?ordering=${i}`), console.log(c);
    }, [t, i]);
    const w = () => {
      x(`${t}?ordering=${i}`);
    };
    return f
      ? a.jsx("div", { children: "Loading..." })
      : a.jsx("div", {
          children: a.jsx(ZS, {
            name: e,
            buttonText: s,
            addButtonLink: o,
            count: c.length,
            previous: p,
            next: h,
            fetchItem: x,
            searchTerm: S,
            setSearchTerm: g,
            handleSearch: w,
            pagePrefix: l,
            children: a.jsx("div", {
              children:
                c.length > 0
                  ? c.map((k) => r(k))
                  : a.jsxs("p", {
                      children: ["No ", e.toLowerCase(), " available"],
                    }),
            }),
          }),
        });
  },
  QS = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsxs("g", {
            "clip-path": "url(#clip0_237_605)",
            children: [
              a.jsx("path", {
                d: "M5.16699 5.16663H4.50033C4.1467 5.16663 3.80756 5.3071 3.55752 5.55715C3.30747 5.8072 3.16699 6.14634 3.16699 6.49996V12.5C3.16699 12.8536 3.30747 13.1927 3.55752 13.4428C3.80756 13.6928 4.1467 13.8333 4.50033 13.8333H10.5003C10.8539 13.8333 11.1931 13.6928 11.4431 13.4428C11.6932 13.1927 11.8337 12.8536 11.8337 12.5V11.8333",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M14.09 4.88995C14.3526 4.62739 14.5001 4.27127 14.5001 3.89995C14.5001 3.52863 14.3526 3.17251 14.09 2.90995C13.8274 2.64738 13.4713 2.49988 13.1 2.49988C12.7287 2.49988 12.3726 2.64738 12.11 2.90995L6.5 8.49995V10.4999H8.5L14.09 4.88995Z",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M11.167 3.83337L13.167 5.83337",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            ],
          }),
          a.jsx("defs", {
            children: a.jsx("clipPath", {
              id: "clip0_237_605",
              children: a.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white",
                transform: "translate(0.5 0.5)",
              }),
            }),
          }),
        ],
      }),
    }),
  Gf = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsxs("g", {
            "clip-path": "url(#clip0_237_610)",
            children: [
              a.jsx("path", {
                d: "M3.16699 5.16663H13.8337",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M7.16699 7.83337V11.8334",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M9.83301 7.83337V11.8334",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M3.83301 5.16663L4.49967 13.1666C4.49967 13.5202 4.64015 13.8594 4.8902 14.1094C5.14025 14.3595 5.47939 14.5 5.83301 14.5H11.1663C11.52 14.5 11.8591 14.3595 12.1092 14.1094C12.3592 13.8594 12.4997 13.5202 12.4997 13.1666L13.1663 5.16663",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              a.jsx("path", {
                d: "M6.5 5.16667V3.16667C6.5 2.98986 6.57024 2.82029 6.69526 2.69526C6.82029 2.57024 6.98986 2.5 7.16667 2.5H9.83333C10.0101 2.5 10.1797 2.57024 10.3047 2.69526C10.4298 2.82029 10.5 2.98986 10.5 3.16667V5.16667",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            ],
          }),
          a.jsx("defs", {
            children: a.jsx("clipPath", {
              id: "clip0_237_610",
              children: a.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white",
                transform: "translate(0.5 0.5)",
              }),
            }),
          }),
        ],
      }),
    }),
  Yr = ({
    id: e = "id",
    name: t = "Name",
    key: n = "",
    prefixName: r = "",
    pagePrefix: s = "",
    children: o,
  }) =>
    a.jsxs("div", {
      className:
        "w-full flex flex-col md:flex-row justify-between px-8 py-2 border-b-1 border-secondary1000 hover:bg-gradient-to-r hover:from-secondary250  hover:shadow-xl group",
      children: [
        a.jsxs("div", {
          className: "flex gap-8 group-hover:scale-105",
          children: [
            a.jsxs("p", { className: "", children: [r, "-", e] }),
            a.jsx("p", { children: t }),
          ],
        }),
        a.jsxs("div", {
          className:
            "flex gap-4 my-6 md:my-0 justify-end group-hover:scale-105",
          children: [
            o,
            a.jsxs("div", {
              className: "flex gap-2 justify-end",
              children: [
                a.jsx(oe, {
                  to: `/update-${s}?id=${e}`,
                  children: a.jsx(QS, {}),
                }),
                a.jsx(oe, {
                  to: `/delete-${s}?id=${e}&name=${t}&prefixname=${r}`,
                  children: a.jsx(Gf, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  YS = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Tournament",
        fetchUrl: "tournament/tournaments/",
        searchPlaceholder: "Search Tournament Name",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              id: e.id,
              name: e.name,
              prefixName: "TRNMT",
              pagePrefix: "tournament",
            },
            e.id
          ),
        buttonText: "Add Tournament",
        addButtonLink: "/add-tournament",
      }),
    }),
  XS = ue(
    a.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  Ql = ({ text: e = "Back", navigateTo: t = "/" }) =>
    a.jsx(oe, {
      to: t,
      children: a.jsxs("div", {
        className: "flex gap-2 opacity-50 hover:opacity-90",
        children: [
          a.jsx(XS, { fontSize: "small" }),
          a.jsxs("p", { className: "", children: [" ", e] }),
        ],
      }),
    }),
  Cy = ({
    backButtonText: e = "Back",
    navigateTo: t = "/",
    text: n = "Add an Entry",
    children: r,
  }) =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx(qf, { children: a.jsx(Ql, { text: e, navigateTo: t }) }),
        a.jsx(Kr, { children: a.jsx("p", { children: n }) }),
        a.jsx(Zr, { children: r }),
      ],
    });
async function Kf({ id: e, setItem: t, extendedUrl: n = "" }) {
  try {
    const r = await me.get(`${n}${e}/`);
    console.log("Get Request Success: ", r.data), t(r.data);
  } catch (r) {
    r.response
      ? console.error("Error Response: ", r.response.status, r.response.data)
      : r.request
      ? console.error("No Response: ", r.request)
      : console.error("Error in setting up request: ", r.message);
  }
}
async function Zf({ formData: e, extendedUrl: t }) {
  try {
    return (await me.post(t, e)).data;
  } catch (n) {
    throw (console.error("Error ", n), n);
  }
}
async function JS({ formData: e, extendedUrl: t = "" }) {
  const { id: n, ...r } = e;
  try {
    const s = await me.put(`${t}${n}/`, r);
    console.log(s.data);
  } catch (s) {
    throw (console.log("Error: ", s), new Error("Update request failed"));
  }
}
const jt = ({
    initialFormData: e,
    entityId: t = null,
    formComponent: n,
    extendedUrl: r,
    submitButtonText: s,
    navigateTo: o,
    isUpdate: i = !1,
    requiredFields: l = [],
  }) => {
    const [c, u] = T.useState(e),
      f = Ut();
    T.useEffect(() => {
      t && i && Kf({ extendedUrl: r, id: t, setItem: u });
    }, [t, i, r]);
    const d = () => {
        console.log("Form Data - ", c);
        for (const y of l)
          if (!c[y]) return X.error(`Please fill the ${y} field!`), !1;
        return !0;
      },
      p = async () => {
        if (d())
          try {
            i
              ? (await JS({ extendedUrl: r, formData: c }),
                X.success("Updated successfully!"))
              : (await Zf({ formData: c, extendedUrl: r }),
                X.success("Added successfully!")),
              f(o);
          } catch {
            X.error(`Failed to ${i ? "update" : "add"}.`);
          }
      };
    return a.jsx(dt, {
      children: a.jsx(Cy, {
        text: s,
        navigateTo: o,
        backButtonText: "Back",
        children: a.jsx(n, {
          formData: c,
          setFormData: u,
          onClick: p,
          buttonText: s,
        }),
      }),
    });
  },
  Ae = ({
    name: e,
    type: t = "text",
    placeholder: n,
    onChange: r = null,
    inputName: s = "",
    value: o = "",
  }) =>
    a.jsxs("div", {
      className: "flex flex-col gap-2 ",
      children: [
        a.jsxs("p", {
          className: "text-sm opacity-50",
          children: [" ", e, " "],
        }),
        a.jsx("input", {
          name: s,
          value: o,
          type: t,
          placeholder: n,
          onChange: r,
          className:
            "bg-secondary500 border-2 border-gray-700 rounded-md px-4 py-1 w-full",
        }),
      ],
    }),
  ae = ({
    name: e,
    options: t,
    align: n = "flex-col",
    onChange: r = null,
    value: s = "",
    inputName: o = "",
  }) =>
    a.jsxs("div", {
      className: `flex ${n} gap-2`,
      children: [
        a.jsx("p", { className: "text-sm opacity-50", children: e }),
        a.jsxs("select", {
          name: o,
          className:
            "bg-secondary500 border-2 border-gray-700 rounded-md px-4 py-1 w-full",
          value: s,
          onChange: r,
          children: [
            a.jsxs("option", { value: "", children: ["Select ", e] }),
            t.map((i, l) =>
              a.jsx("option", { value: i.id, children: i.name }, l)
            ),
          ],
        }),
      ],
    }),
  e7 = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("path", {
            d: "M4.33398 4.66663C4.34198 3.21663 4.40665 2.43129 4.91865 1.91929C5.50465 1.33329 6.44732 1.33329 8.33265 1.33329L8.99932 1.33329C10.8853 1.33329 11.828 1.33329 12.414 1.91929C12.9993 2.50463 12.9993 3.44796 12.9993 5.33329L12.9993 10.6666C12.9993 12.552 12.9993 13.4953 12.414 14.0806C11.8273 14.6666 10.8853 14.6666 8.99932 14.6666L8.33265 14.6666C6.44732 14.6666 5.50465 14.6666 4.91865 14.0806C4.40665 13.5686 4.34198 12.7833 4.33398 11.3333",
            stroke: "#9595AD",
            "stroke-linecap": "round",
          }),
          a.jsx("path", {
            d: "M1.00033 8.00012L9.66699 8.00012M9.66699 8.00012L7.33366 6.00012M9.66699 8.00012L7.33366 10.0001",
            stroke: "#9595AD",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          }),
        ],
      }),
    }),
  cn = ({ text: e = "Submit", onClick: t = null }) =>
    a.jsx(xy, {
      text: e,
      onClick: t,
      bgcolour:
        "bg-primary500 pl-1 transition-all ease-in-out delay-150 hover:bg-opacity-20 hover:shadow-lg",
      children: a.jsx(e7, { text_size: "small" }),
    }),
  by = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const s = [
        { id: "International Match", name: "International Match" },
        { id: "International Tournament", name: "International Tournament" },
        { id: "Domestic Match", name: "Domestic Match" },
        { id: "Domestic Tournament", name: "Domestic Tournament" },
        { id: "Club Match", name: "Club Match" },
        { id: "Others", name: "Others" },
      ],
      o = (i) => {
        const { name: l, value: c } = i.target;
        t((u) => ({ ...u, [l]: c }));
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "Tournament Name *",
              placeholder: "Tournament name",
              onChange: o,
              inputName: "name",
              value: e.name,
            }),
            a.jsx(ae, {
              name: "Select Tournament Category",
              onChange: o,
              inputName: "category",
              value: e.category,
              options: s,
            }),
          ],
        }),
        a.jsx("div", {
          className: "mt-4 mx-4",
          children: a.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  t7 = () => {
    const e = { name: "", category: "" };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: by,
      extendedUrl: "tournament/tournaments/",
      submitButtonText: "Add Tournament",
      navigateTo: "/tournament",
      isUpdate: !1,
      requiredFields: ["name", "category"],
    });
  },
  n7 = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = { name: "", category: "" };
    return a.jsx(jt, {
      initialFormData: n,
      entityId: t,
      formComponent: by,
      extendedUrl: "tournament/tournaments/",
      submitButtonText: "Update Tournament",
      navigateTo: "/tournament",
      isUpdate: !0,
      requiredFields: ["name", "category"],
    });
  },
  Yl = ({
    text: e,
    colour: t = "secondary500",
    text_colour: n = "text-gray-400",
    onClick: r = null,
  }) =>
    a.jsx("button", {
      className: `border-${t} ${n} opacity-70 hover:opacity-100 border px-4 py-1 rounded-md`,
      onClick: r,
      children: a.jsx("p", { children: e }),
    }),
  r7 = ({
    navigateTo: e = "/",
    name: t = "",
    id: n = "",
    prefixName: r = "",
    onClick: s = null,
  }) => {
    const [o, i] = T.useState(!0),
      l = () => {
        i((c) => !c);
      };
    return a.jsx(dt, {
      children: a.jsx("div", {
        className: "flex justify-center w-full",
        children: a.jsxs("div", {
          className: "w-full md:w-1/2",
          children: [
            a.jsxs(Kr, {
              flexDirection: "gap-8",
              children: [
                a.jsx(Ql, { text: "Back to All", navigateTo: e }),
                a.jsx("p", { children: "Confirm Deletion" }),
              ],
            }),
            a.jsxs(Zr, {
              children: [
                a.jsx("p", {
                  className: "py-4 text-yellow-500",
                  children: "WARNINGS",
                }),
                a.jsxs("ul", {
                  className: "list-outside list-disc px-4 text-yellow-100",
                  children: [
                    a.jsx("li", {
                      children:
                        "The deletion may result in the deletion of other related entries as well!",
                    }),
                    a.jsx("li", {
                      children:
                        "It's a irreversible process. You cannot bring deleted items back!",
                    }),
                  ],
                }),
                a.jsx("p", {
                  className: "py-4",
                  children:
                    "Do you still want to delete the following entry permanently?",
                }),
                a.jsxs("div", {
                  className: "py-2 flex w-full text-center hover:shadow-xl",
                  children: [
                    a.jsxs("p", {
                      className: "w-1/4 bg-secondary250 py-4",
                      children: [r, " ", n],
                    }),
                    a.jsx("p", {
                      className: "w-3/4 bg-secondary200 py-4",
                      children: t,
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex gap-4 py-4",
                  children: [
                    a.jsx("input", { type: "checkbox", onClick: l }),
                    " ",
                    a.jsx("p", {
                      children:
                        "Yes, I Understand the consequences of my act and still want to proceed",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex justify-end w-full gap-4",
                  children: [
                    a.jsx(oe, {
                      to: e,
                      children: a.jsx(Yl, { text: "Cancel" }),
                    }),
                    !o &&
                      a.jsx(Vs, {
                        text: "Delete",
                        text_colour: "text-red-500",
                        disabled: "true",
                        onClick: s,
                        children: a.jsx(Gf, {}),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
async function s7({ id: e, extendedUrl: t }) {
  try {
    return (await me.delete(`${t}/${e}/`)).status === 204
      ? { success: !0 }
      : { success: !1, error: "Unexpected response status" };
  } catch (n) {
    return n.response
      ? (console.error("Server error:", n.response.data),
        { success: !1, error: n.response.data })
      : n.request
      ? (console.error("Network error:", n.request),
        { success: !1, error: "Network error" })
      : (console.error("Error:", n.message), { success: !1, error: n.message });
  }
}
const Xr = ({ entityName: e, entityUrl: t, navigateTo: n }) => {
    const r = Ut(),
      [s] = kt(),
      o = s.get("id"),
      i = s.get("name"),
      l = s.get("prefixname"),
      c = async () => {
        const u = await s7({ extendedUrl: `${t}`, id: o });
        u.success
          ? (X.success(`${i} deleted successfully!`), r(n))
          : X.error(`Error deleting the ${e}: ${u.error}`);
      };
    return a.jsx(r7, {
      navigateTo: n,
      name: i,
      id: o,
      prefixName: l,
      onClick: c,
    });
  },
  o7 = () =>
    a.jsx(Xr, {
      entityName: "Tournament",
      entityUrl: "/tournament/tournaments",
      navigateTo: "/tournament",
    }),
  i7 = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/tournament", element: a.jsx(YS, {}) }),
        a.jsx(Q, { path: "/add-tournament", element: a.jsx(t7, {}) }),
        a.jsx(Q, { path: "/update-tournament", element: a.jsx(n7, {}) }),
        a.jsx(Q, { path: "/delete-tournament", element: a.jsx(o7, {}) }),
      ],
    }),
  a7 = ue(
    a.jsx("path", {
      d: "M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-9 15-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7z",
    }),
    "Beenhere"
  ),
  l7 = ue(
    a.jsx("path", {
      d: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z",
    }),
    "BookmarkBorderOutlined"
  ),
  c7 = ue(
    a.jsx("path", {
      d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z",
    }),
    "Cached"
  ),
  u7 = ue(
    a.jsx("path", {
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41z",
    }),
    "CloudDone"
  ),
  d7 = ue(
    a.jsx("path", {
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z",
    }),
    "CloudUploadOutlined"
  ),
  f7 = ue(
    [
      a.jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z" }, "0"),
      a.jsx(
        "path",
        {
          d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10-2.5-1.5L15 12V4h5z",
        },
        "1"
      ),
    ],
    "CollectionsBookmark"
  ),
  wd = ue(
    a.jsx("path", {
      d: "M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1M3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1m8.01-2.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16z",
    }),
    "EditNoteRounded"
  ),
  ky = ue(
    a.jsx("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }),
    "ExpandLessOutlined"
  ),
  jy = ue(
    a.jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
    "ExpandMoreOutlined"
  ),
  p7 = ue(
    a.jsx("path", {
      d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z",
    }),
    "History"
  ),
  h7 = ue(
    a.jsx("path", {
      d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z",
    }),
    "Lock"
  ),
  m7 = ue(
    a.jsx("path", {
      d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02m0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98M12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z",
    }),
    "OfflineBoltOutlined"
  ),
  g7 = ue(
    a.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4",
    }),
    "Person"
  ),
  y7 = ue(a.jsx("path", { d: "M8 5v14l11-7z" }), "PlayArrow"),
  v7 = ue(
    a.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-2.5-3.5 7-4.5-7-4.5z",
    }),
    "PlayCircleOutlined"
  ),
  x7 = ue(
    a.jsx("path", {
      d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91",
    }),
    "RestartAlt"
  ),
  w7 = ue(
    a.jsx("path", {
      d: "M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93",
    }),
    "RotateLeft"
  ),
  S7 = ue(
    a.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4-4H8V8h8z",
    }),
    "StopCircleOutlined"
  ),
  C7 = ue(
    a.jsx("path", {
      d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z",
    }),
    "TaskAlt"
  ),
  Ny = ue(
    a.jsx("path", { d: "M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z" }),
    "Upload"
  ),
  b7 = ue(
    a.jsx("path", {
      d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z",
    }),
    "Videocam"
  ),
  Ey = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("rect", {
            width: "16",
            height: "16",
            rx: "8",
            fill: "#198919",
          }),
          a.jsx("path", {
            d: "M5 8L7.57143 10L11 6",
            stroke: "white",
            "stroke-linecap": "round",
          }),
        ],
      }),
    }),
  As = ({
    status: e,
    text: t,
    children: n,
    onClickUrl: r,
    bg: s = "bg-primary500",
  }) => (
    console.log(e),
    e == "active"
      ? a.jsx(oe, {
          to: r,
          children: a.jsxs("button", {
            className: `bg-opacity-50 px-2 rounded-lg flex gap-2 ${s}`,
            children: [a.jsx("p", { children: t }), n],
          }),
        })
      : e == "updated"
      ? a.jsx(oe, {
          to: r,
          children: a.jsxs("button", {
            className: "opacity-70 bg-secondary1000 px-2 rounded-lg flex gap-2",
            children: [
              a.jsx("p", { children: t }),
              a.jsx(Ey, { text_size: "small" }),
            ],
          }),
        })
      : a.jsxs("button", {
          className:
            "opacity-50 px-2 rounded-md flex gap-2 bg-secondary500 cursor-not-allowed",
          children: [
            a.jsx("p", { children: t }),
            a.jsx(h7, { fontSize: "small" }),
          ],
        })
  ),
  k7 = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Competition",
        fetchUrl: "competition/competitions/",
        searchPlaceholder: "Search Competitions",
        buttonText: "Add Competition",
        addButtonLink: "/add-competition",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              id: e.id,
              name: e.name,
              prefixName: "CMPT",
              pagePrefix: "competition",
              children: a.jsxs("div", {
                className: "flex flex-col gap-2 lg:flex-row",
                children: [
                  a.jsx(As, {
                    text: "Team",
                    onClickUrl: `/add-competition-teams?id=${e.id}`,
                    status: `${e.teams.length != 0 ? "updated" : "active"}`,
                    children: a.jsx(vy, { text_size: "small" }),
                  }),
                  a.jsx(As, {
                    text: "Squad",
                    onClickUrl: `/add-competition-squad?id=${e.id}`,
                    status: `${
                      e.hasUpdatedSquad
                        ? "updated"
                        : e.teams.length != 0
                        ? "active"
                        : "locked"
                    }`,
                    children: a.jsx(g7, { fontSize: "small" }),
                  }),
                  a.jsx(As, {
                    text: "Matches",
                    status: `${
                      e.hasUpdatedSquad
                        ? "updated"
                        : e.teams.length != 0
                        ? "active"
                        : "locked"
                    }`,
                    children: a.jsx(xd, { text_size: "small" }),
                  }),
                ],
              }),
            },
            e.id
          ),
      }),
    });
async function Xl({ setNationalities: e }) {
  try {
    const t = await me.get("stadium/nationalities/");
    console.log(t.data), e(t.data);
  } catch (t) {
    console.log("Error fetching Nationalities - ", t);
  }
}
async function j7({ setTournaments: e }) {
  try {
    const t = await me.get("tournament/all-tournaments/");
    e(t.data), console.log(t.data);
  } catch (t) {
    console.log("Error Fetching Tournaments", t);
  }
}
async function Ty({ setMatchTypes: e }) {
  try {
    const t = await me.get("competition/matchtypes/");
    e(t.data), console.log("mdata ", t);
  } catch (t) {
    console.log("Error fetching match types ", t);
  }
}
const _y = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = T.useState([]),
      [i, l] = T.useState([]),
      [c, u] = T.useState([]);
    T.useEffect(() => {
      Xl({ setNationalities: o }),
        j7({ setTournaments: l }),
        Ty({ setMatchTypes: u });
    }, []);
    const f = [
        { id: "Male", name: "Male" },
        { id: "Female", name: "Female" },
        { id: "Third Gender", name: "Third Gender" },
      ],
      d = (p) => {
        const { name: y, value: h } = p.target;
        t((m) => ({ ...m, [y]: h }));
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 lg:pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "Competition Name *",
              placeholder: "Competition Name",
              inputName: "name",
              value: e.name,
              onChange: d,
            }),
            a.jsx(Ae, {
              name: "Display Name *",
              placeholder: "Display Name",
              inputName: "displayName",
              value: e.displayName,
              onChange: d,
            }),
            a.jsx(Ae, {
              name: "Year *",
              placeholder: "YYYY",
              inputName: "year",
              value: e.year,
              onChange: d,
            }),
            a.jsx(ae, {
              name: "Match Type *",
              inputName: "matchType",
              options: c,
              value: e.matchType,
              onChange: d,
            }),
            a.jsx(ae, {
              inputName: "tournament",
              name: "Tournament *",
              options: i,
              value: e.tournament,
              onChange: d,
            }),
            a.jsx(Ae, {
              inputName: "matchCount",
              name: "Total Match Count *",
              placeholder: "Count",
              type: "number",
              value: e.matchCount,
              onChange: d,
            }),
            a.jsx(Ae, {
              inputName: "fromDate",
              name: "Start Date *",
              type: "date",
              value: e.fromDate,
              onChange: d,
            }),
            a.jsx(Ae, {
              inputName: "toDate",
              name: "End Date *",
              type: "date",
              value: e.toDate,
              onChange: d,
            }),
            a.jsx(ae, {
              inputName: "gender",
              name: "Gender *",
              options: f,
              value: e.gender,
              onChange: d,
            }),
            a.jsx(ae, {
              inputName: "hostingNation",
              name: "Hosting Nation",
              options: s,
              value: e.hostingNation,
              onChange: d,
            }),
          ],
        }),
        a.jsx("div", {
          className: "mt-4 flex justify-end",
          children: a.jsx(cn, { text: n, onClick: r }),
        }),
      ],
    });
  },
  N7 = () => {
    const e = {
      name: "",
      displayName: "",
      year: "",
      matchType: "",
      tournament: "",
      fromDate: "",
      toDate: "",
      matchCount: "",
      gender: "",
      hostingNation: "",
    };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: _y,
      extendedUrl: "competition/competitions/",
      submitButtonText: "Create Competition",
      navigateTo: "/competition",
      isUpdate: !1,
      requiredFields: [
        "name",
        "year",
        "matchType",
        "tournament",
        "fromDate",
        "toDate",
        "matchCount",
        "gender",
      ],
    });
  },
  E7 = ({ text_size: e = "medium" }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("rect", {
            width: "16",
            height: "16",
            rx: "8",
            fill: "#BF8412",
          }),
          a.jsx("path", {
            d: "M11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z",
            fill: "white",
          }),
        ],
      }),
    }),
  T7 = ({ item: e, onClick: t = null }) =>
    a.jsx("div", {
      className:
        "group border-b-1 border-secondary1000 hover:bg-primary1000 hover:bg-opacity-10 hover:shadow-xl cursor-pointer overflow-hidden",
      children: a.jsxs("div", {
        className: "group-hover:scale-105 flex gap-4 py-2 px-8",
        children: [
          e.isSelected
            ? a.jsx(Ey, { text_size: "small" })
            : a.jsx("button", {
                onClick: () => {
                  t(e);
                },
                children: a.jsx(E7, { text_size: "small" }),
              }),
          a.jsx("p", { children: e.name }),
        ],
      }),
    }),
  Ry = ({
    items: e = [],
    handleSearch: t = null,
    searchTerm: n,
    setSearchTerm: r,
    selectItem: s,
  }) =>
    a.jsxs("div", {
      className: "py-4",
      children: [
        a.jsx(Kl, {
          children: a.jsx(wy, {
            placeholder: "Search",
            handleSearch: t,
            searchTerm: n,
            setSearchTerm: r,
          }),
        }),
        a.jsx(Zl, {
          children: a.jsx("div", {
            children:
              e.length > 0
                ? e.map((o) => a.jsx(T7, { item: o, onClick: s }))
                : a.jsx("p", { children: "No items available" }),
          }),
        }),
      ],
    }),
  _7 = ({ text_size: e }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsxs("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          a.jsx("rect", {
            x: "0.333984",
            width: "16",
            height: "16",
            rx: "8",
            fill: "#BF2712",
          }),
          a.jsx("path", {
            d: "M11.1864 10.1393L9.04708 8L11.1864 5.86071C11.3832 5.66389 11.3832 5.34443 11.1864 5.14761C10.9896 4.9508 10.6701 4.9508 10.4733 5.14761L8.33398 7.2869L6.19469 5.14761C5.99788 4.9508 5.67841 4.9508 5.4816 5.14761C5.28478 5.34443 5.28478 5.66389 5.4816 5.86071L7.62089 8L5.4816 10.1393C5.28478 10.3361 5.28478 10.6556 5.4816 10.8524C5.67841 11.0492 5.99788 11.0492 6.19469 10.8524L8.33398 8.7131L10.4733 10.8524C10.6701 11.0492 10.9896 11.0492 11.1864 10.8524C11.3832 10.6556 11.3832 10.3361 11.1864 10.1393Z",
            fill: "white",
          }),
        ],
      }),
    }),
  R7 = ({ col1: e, col2: t, col3: n, removeSelectedItem: r }) =>
    a.jsxs("div", {
      className:
        "w-full flex hover:shadow-xl hover:bg-primary500 cursor-pointer hover:bg-opacity-5",
      children: [
        a.jsxs("p", {
          className: "w-2/12 text-center py-2 border-1 border-gray-900",
          children: ["ID-", e],
        }),
        a.jsx("p", {
          className: "w-7/12 px-4 py-2 border-1 border-gray-900",
          children: t,
        }),
        a.jsx("p", {
          className: "w-2/12 text-center py-2 border-1 border-gray-900",
          children: n,
        }),
        a.jsx("div", {
          className: "w-1/12 text-center py-2 border-1 border-gray-900 ",
          children: a.jsx("button", {
            className: "hover:rotate-90 transition-all delay-150 ease-in-out",
            onClick: () => {
              r(e);
            },
            children: a.jsx(_7, { text_size: "small" }),
          }),
        }),
      ],
    }),
  Ay = ({ selectedItems: e, removeSelectedItem: t, col3: n }) => {
    const r = e.length;
    return a.jsxs("div", {
      className: "py-4",
      children: [
        a.jsxs(Kl, {
          children: [
            a.jsx("p", { children: "Selected" }),
            a.jsx("p", {
              className: "w-6 h-6 text-center rounded-full font-bold bg-accent",
              children: r,
            }),
          ],
        }),
        a.jsx(Zl, {
          children: e.map((s) =>
            a.jsx(R7, {
              col1: s.id,
              col2: s.name,
              col3: n ? s.shortName : s[n],
              removeSelectedItem: t,
            })
          ),
        }),
      ],
    });
  };
async function Py({ setItem: e, setLoading: t, extendedUrl: n }) {
  try {
    t(!0);
    const r = await me.get(n);
    e(r.data);
  } catch (r) {
    console.error("Error fetching data:", r);
  } finally {
    t(!1);
  }
}
async function My({ id: e }) {
  try {
    const t = await me.get(`competition/competitions/teams/${e}/`);
    return console.log("Get Request Success: ", t.data), t.data;
  } catch (t) {
    t.response
      ? console.error("Error Response: ", t.response.status, t.response.data)
      : t.request
      ? console.error("No Response: ", t.request)
      : console.error("Error in setting up request: ", t.message);
  }
}
const A7 = ({
  mainText: e = "",
  submitButtonText: t = "",
  backButtonLink: n = "",
  fetchUrl: r = "team/allteams/",
  handleSubmit: s,
  id: o,
  existingUrl: i = "competition/competitions/",
}) => {
  const [l, c] = T.useState([]),
    [u, f] = T.useState(!0),
    [d, p] = T.useState(""),
    [y, h] = T.useState([]),
    m = (j) => {
      const b = d ? `?search=${d}` : "";
      Py({
        setItem: (C) => {
          const N = C.map((v) => {
            const _ = y.some((P) => P.id === v.id);
            return { ...v, isSelected: _ };
          });
          c(N), f(!1);
        },
        setLoading: f,
        extendedUrl: j + b,
      });
    },
    S = () => {
      My({ id: o })
        .then((j) => {
          console.log("Competition teams fetched:", j.teams),
            j.teams.forEach((b) => {
              const C = l.find((N) => N.id === b.id);
              C && x(C);
            });
        })
        .catch((j) => console.error("Error fetching data", j));
    };
  T.useEffect(() => {
    m(`${r}`);
  }, [r]),
    T.useEffect(() => {
      !u && l.length > 0 && S();
    }, [u]);
  const g = () => {
      m(`${r}`);
    },
    x = (j) => {
      h((b) => (b.some((C) => C.id === j.id) ? b : [...b, j])),
        c((b) => b.map((C) => (C.id === j.id ? { ...C, isSelected: !0 } : C)));
    },
    w = (j) => {
      console.log(j),
        c((b) => b.map((C) => (C.id === j ? { ...C, isSelected: !1 } : C))),
        h((b) => b.filter((C) => C.id !== j));
    },
    k = () => {
      const j = y.map((b) => b.id);
      s(j);
    };
  return u
    ? a.jsx("div", { children: "Loading..." })
    : a.jsxs(a.Fragment, {
        children: [
          a.jsx(Kr, {
            children: a.jsxs("div", {
              className: "flex justify-between w-full",
              children: [
                a.jsx("p", { className: "py-1", children: e }),
                a.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    a.jsx(oe, {
                      to: n,
                      children: a.jsx(Yl, { text: "Do it Later" }),
                    }),
                    a.jsx(cn, { text: t, onClick: k }),
                  ],
                }),
              ],
            }),
          }),
          a.jsx(Zr, {
            children: a.jsxs("div", {
              className: "flex w-full gap-4",
              children: [
                a.jsx("div", {
                  className: "w-4/12",
                  children: a.jsx(Ry, {
                    items: l,
                    handleSearch: g,
                    searchTerm: d,
                    setSearchTerm: p,
                    selectItem: x,
                  }),
                }),
                a.jsx("div", {
                  className: "w-8/12",
                  children: a.jsx(Ay, {
                    selectedItems: y,
                    removeSelectedItem: w,
                  }),
                }),
              ],
            }),
          }),
        ],
      });
};
async function P7(e, t) {
  try {
    const n = await me.patch(`competition/competitions/${e}/`, { teams: t });
    console.log(n.data), X.success("update success");
  } catch (n) {
    throw (
      (console.log("Error: ", n),
      X.error("upadate failed"),
      new Error("Update request failed"))
    );
  }
}
const M7 = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = (r) => {
        try {
          P7(t, r);
        } catch (s) {
          console.log(s);
        }
      };
    return a.jsx(dt, {
      children: a.jsx(A7, {
        mainText: "Update Competition Teams",
        submitButtonText: "Update Team",
        backButtonLink: "/competition",
        handleSubmit: n,
        id: t,
      }),
    });
  },
  L7 = ({ name: e = "Entity", options: t, setItem: n }) =>
    a.jsxs("select", {
      className: "bg-secondary500 rounded-md px-4  w-full border-1",
      onChange: (r) => {
        n(r.target.value);
      },
      children: [
        a.jsx("option", { value: "", children: "Select Team" }),
        t.map((r, s) =>
          a.jsx("option", { value: r.value, children: r.label }, s)
        ),
      ],
    });
async function Ly({ competitionId: e, teamId: t }) {
  try {
    const n = await me.get(`competition/competitions/${e}/teams/${t}/squad/`);
    return console.log("Got squad ", n.data), n.data;
  } catch (n) {
    console.log(n);
  }
}
async function O7({ competitionId: e, teamId: t, playerIds: n }) {
  const r = { player_ids: n };
  try {
    const s = await me.post(
      `competition/competitions/${e}/teams/${t}/squad/add/`,
      r
    );
    return X.success("Updated!"), s.data;
  } catch (s) {
    console.log(s), X.error("Can't Update!");
  }
}
const B7 = () => {
    const e = "player/allplayers/",
      [t] = kt(),
      n = t.get("id"),
      [r, s] = T.useState(""),
      [o, i] = T.useState(""),
      [l, c] = T.useState([]),
      [u, f] = T.useState(!0),
      [d, p] = T.useState(""),
      [y, h] = T.useState([]),
      m = async () => {
        try {
          await Kf({
            id: n,
            setItem: s,
            extendedUrl: "competition/competitions/teams/",
          });
        } catch (b) {
          console.error("Error fetching competition data:", b);
        }
      },
      S = async () => {
        if (o)
          try {
            await Ly({ competitionId: r.id, teamId: o }).then((b) => {
              b[0].players.forEach((N) => {
                const v = `${N.firstName} ${
                  N.middleName ? N.middleName + " " : ""
                }${N.lastName ? N.lastName + " " : ""}(${N.id})`;
                w({ ...N, name: v });
              });
            });
          } catch (b) {
            console.log("Error - ", b);
          }
      };
    T.useEffect(() => {
      m();
    }, [n]),
      T.useEffect(() => {
        r && console.log("Competition data:", r);
      }, [r]);
    const g = (b) => {
      const C = d ? `?search=${d}` : "";
      console.log(b),
        Py({
          setItem: (N) => {
            console.log("fetched Items", N);
            const v = N.map((_) => {
              const P = y.some((D) => D.id === _.id),
                U = `${_.firstName} ${_.middleName ? _.middleName + " " : ""}${
                  _.lastName ? _.lastName + " " : ""
                }(${_.id})`;
              return { ..._, isSelected: P, name: U };
            });
            c(v), f(!1);
          },
          setLoading: f,
          extendedUrl: b + C,
        });
    };
    T.useEffect(() => {
      g(`${e}`);
    }, [e]),
      T.useEffect(() => {
        h([]);
        const b = l.map((C) => ({ ...C, isSelected: !1 }));
        c(b), console.log("team changed - ", o), S();
      }, [o]),
      T.useEffect(() => {
        d || g(`${e}`);
      }, [d]);
    const x = () => {
        g(`${e}`);
      },
      w = (b) => {
        h((C) => (C.some((N) => N.id === b.id) ? C : [...C, b])),
          c((C) =>
            C.map((N) => (N.id === b.id ? { ...N, isSelected: !0 } : N))
          );
      },
      k = (b) => {
        console.log(b),
          c((C) => C.map((N) => (N.id === b ? { ...N, isSelected: !1 } : N))),
          h((C) => C.filter((N) => N.id !== b));
      },
      j = () => {
        const b = y.map((N) => N.id),
          C = r.matchType.activePlayersPerTeam;
        if (b.length < C) {
          X.error(`Please select Atleast ${C} Players!`);
          return;
        }
        try {
          O7({ competitionId: r.id, teamId: o, playerIds: b });
        } catch (N) {
          console.log("Error updating squad ", N);
        }
      };
    return a.jsxs(dt, {
      children: [
        a.jsx(Kr, {
          children: a.jsxs("div", {
            className: "flex justify-between w-full py-1",
            children: [
              a.jsxs("div", {
                className: "flex gap-4",
                children: [
                  a.jsx("p", { className: "", children: "Sqaud" }),
                  a.jsx(L7, {
                    name: "Team",
                    setItem: i,
                    options: r.teams
                      ? r.teams.map((b) => ({ label: b.name, value: b.id }))
                      : [],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex gap-4",
                children: [
                  a.jsx(oe, {
                    to: "/competition",
                    children: a.jsx(Yl, { text: "Do it Later" }),
                  }),
                  a.jsx(cn, { text: "Update Squad", onClick: j }),
                ],
              }),
            ],
          }),
        }),
        a.jsx(Zr, {
          children: o
            ? a.jsxs("div", {
                className: "flex w-full gap-4",
                children: [
                  a.jsx("div", {
                    className: "w-4/12",
                    children: a.jsx(Ry, {
                      items: l,
                      handleSearch: x,
                      searchTerm: d,
                      setSearchTerm: p,
                      selectItem: w,
                    }),
                  }),
                  a.jsx("div", {
                    className: "w-8/12",
                    children: a.jsx(Ay, {
                      selectedItems: y,
                      removeSelectedItem: k,
                      col3: "nickName",
                    }),
                  }),
                ],
              })
            : a.jsx("div", {
                className: "h-96 flex w-full justify-center pt-8",
                children: a.jsx("div", {
                  children: a.jsx("p", {
                    className: "bg-secondary200 animate-pulse rounded p-4",
                    children: "Please Select a Team to Update",
                  }),
                }),
              }),
        }),
      ],
    });
  },
  I7 = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = {
        name: "",
        displayName: "",
        year: "",
        matchType: "",
        tournament: "",
        fromDate: "",
        toDate: "",
        matchCount: "",
        gender: "",
        hostingNation: "",
      };
    return a.jsx(jt, {
      initialFormData: n,
      entityId: t,
      formComponent: _y,
      extendedUrl: "competition/competitions/",
      submitButtonText: "Update Competition",
      navigateTo: "/competition",
      isUpdate: !0,
      requiredFields: [
        "name",
        "year",
        "matchType",
        "tournament",
        "fromDate",
        "toDate",
        "matchCount",
        "gender",
      ],
    });
  },
  U7 = () =>
    a.jsx(Xr, {
      entityName: "Competition",
      entityUrl: "/competition/competitions",
      navigateTo: "/competition",
    }),
  $7 = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/competition", element: a.jsx(k7, {}) }),
        a.jsx(Q, { path: "/add-competition", element: a.jsx(N7, {}) }),
        a.jsx(Q, { path: "/update-competition", element: a.jsx(I7, {}) }),
        a.jsx(Q, { path: "/delete-competition", element: a.jsx(U7, {}) }),
        a.jsx(Q, { path: "/add-competition-teams", element: a.jsx(M7, {}) }),
        a.jsx(Q, { path: "/add-competition-squad", element: a.jsx(B7, {}) }),
      ],
    }),
  F7 = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Stadiums",
        fetchUrl: "stadium/stadiums",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              name: `${e.name} ( ${e.city} )`,
              prefixName: "STM",
              id: e.id,
              pagePrefix: "stadium",
            },
            e.id
          ),
        buttonText: "Add Stadium",
        addButtonLink: "/add-stadium",
        pagePrefix: "stadium",
      }),
    }),
  Oy = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const [s, o] = T.useState([]);
    T.useEffect(() => {
      Xl({ setNationalities: o });
    }, []);
    const i = (l) => {
      const { name: c, value: u } = l.target;
      t((f) => ({ ...f, [c]: u }));
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "Stadium Name*",
              type: "text",
              placeholder: "Enter Stadium Name",
              value: e.name,
              inputName: "name",
              onChange: i,
            }),
            a.jsx(ae, {
              name: "Nationality *",
              options: s,
              value: e.nationality,
              inputName: "nationality",
              onChange: i,
            }),
            a.jsx("div", {}),
            a.jsx(Ae, {
              name: "City*",
              type: "text",
              inputName: "city",
              value: e.city,
              placeholder: "Enter Stadium's City",
              onChange: i,
            }),
            a.jsx(Ae, {
              name: "Capacity*",
              type: "number",
              inputName: "capacity",
              placeholder: "Enter Stadium Capacity",
              value: e.capacity,
              onChange: i,
            }),
          ],
        }),
        a.jsx("div", {
          className: "mt-4 mx-4",
          children: a.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  D7 = () => {
    const e = { name: "", city: "", nationality: "", capacity: "" };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: Oy,
      extendedUrl: "stadium/stadiums/",
      submitButtonText: "Add Stadium",
      navigateTo: "/stadium",
      isUpdate: !1,
      requiredFields: ["name", "city", "nationality", "capacity"],
    });
  },
  V7 = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = { name: "", city: "", nationality: "", capacity: "" };
    return a.jsx(jt, {
      initialFormData: n,
      formComponent: Oy,
      extendedUrl: "stadium/stadiums/",
      submitButtonText: "Update Stadium",
      navigateTo: "/stadium",
      isUpdate: !0,
      entityId: t,
      requiredFields: [
        "competition",
        "matchType",
        "date",
        "stadium",
        "matchCondition",
        "knockOut",
        "team1",
        "team2",
        "isVideoCaptureEnabled",
      ],
    });
  },
  z7 = () =>
    a.jsx(Xr, {
      entityName: "Stadium",
      entityUrl: "/stadium/stadiums",
      navigateTo: "/stadium",
    }),
  W7 = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/stadium", element: a.jsx(F7, {}) }),
        a.jsx(Q, { path: "/add-stadium", element: a.jsx(D7, {}) }),
        a.jsx(Q, { path: "/update-stadium", element: a.jsx(V7, {}) }),
        a.jsx(Q, { path: "/delete-stadium", element: a.jsx(z7, {}) }),
      ],
    }),
  H7 = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Umpire",
        fetchUrl: "umpire/umpires",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              name: `${e.name}`,
              prefixName: "STM",
              id: e.id,
              pagePrefix: "umpire",
            },
            e.id
          ),
        buttonText: "Add Umpire",
        addButtonLink: "/add-umpire",
        pagePrefix: "umpire",
      }),
    }),
  By = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const [s, o] = T.useState([]);
    T.useEffect(() => {
      Xl({ setNationalities: o });
    }, []);
    const i = (l) => {
      const { name: c, value: u } = l.target;
      t((f) => ({ ...f, [c]: u }));
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "Umpire Name*",
              type: "text",
              placeholder: "Enter Umpire Name",
              value: e.name,
              inputName: "name",
              onChange: i,
            }),
            a.jsx(Ae, {
              name: "Umpire Age*",
              type: "number",
              placeholder: "Enter Umpire's Age",
              value: e.age,
              inputName: "age",
              onChange: i,
            }),
            a.jsx(ae, {
              name: "Nationality *",
              options: s,
              value: e.nationality,
              inputName: "nationality",
              onChange: i,
            }),
          ],
        }),
        a.jsx("div", {
          className: "mt-4 mx-4",
          children: a.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  q7 = () => {
    const e = { name: "", age: "", nationality: "" };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: By,
      extendedUrl: "umpire/umpires/",
      submitButtonText: "Add Umpire",
      navigateTo: "/umpire",
      isUpdate: !1,
      requiredFields: ["name", "age", "nationality"],
    });
  },
  G7 = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = { name: "", age: "", nationality: "" };
    return a.jsx(jt, {
      initialFormData: n,
      formComponent: By,
      extendedUrl: "umpire/umpires/",
      submitButtonText: "Update Umpire",
      navigateTo: "/umpire",
      isUpdate: !0,
      entityId: t,
      requiredFields: ["name", "age", "nationality"],
    });
  },
  K7 = () =>
    a.jsx(Xr, {
      entityName: "Umpire",
      entityUrl: "/umpire/umpires",
      navigateTo: "/umpire",
    }),
  Z7 = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/umpire", element: a.jsx(H7, {}) }),
        a.jsx(Q, { path: "/add-umpire", element: a.jsx(q7, {}) }),
        a.jsx(Q, { path: "/update-umpire", element: a.jsx(G7, {}) }),
        a.jsx(Q, { path: "/delete-umpire", element: a.jsx(K7, {}) }),
      ],
    }),
  Q7 = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Player",
        fetchUrl: "player/players/",
        searchPlaceholder: "Search Player",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              id: e.id,
              name: `${e.firstName} ${e.lastName}`,
              prefixName: "PLYR",
              pagePrefix: "player",
            },
            e.id
          ),
        buttonText: "Add Player",
        addButtonLink: "/add-player",
      }),
    }),
  Y7 = ({
    isVisible: e = !1,
    handleStepClick: t,
    formData: n,
    handleChange: r,
  }) => {
    const [s, o] = T.useState([]);
    T.useEffect(() => {
      Xl({ setNationalities: o });
    }, []);
    const i = [
        { id: "Male", name: "Male" },
        { id: "Female", name: "Female" },
        { id: "Third Gender", name: "Third Gender" },
      ],
      l = [
        { id: "Tall", name: "Tall" },
        { id: "Medium", name: "Medium" },
        { id: "Short", name: "Short" },
      ];
    return a.jsxs("div", {
      className: `${e ? "block" : "hidden"}`,
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "First Name",
              placeholder: "Enter First Name",
              inputName: "firstName",
              value: n.firstName,
              onChange: r,
            }),
            a.jsx(Ae, {
              name: "Middle Name",
              placeholder: "Enter Middle Name",
              inputName: "middleName",
              value: n.middleName,
              onChange: r,
            }),
            a.jsx(Ae, {
              name: "Last Name",
              placeholder: "Enter Last Name",
              inputName: "lastName",
              value: n.lastName,
              onChange: r,
            }),
            a.jsx(Ae, {
              name: "Nick Name",
              placeholder: "Enter Nick Name",
              inputName: "nickName",
              value: n.nickName,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Nationality",
              options: s,
              inputName: "nationality",
              value: n.nationality,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Gender",
              options: i,
              inputName: "gender",
              value: n.gender,
              onChange: r,
            }),
            a.jsx(Ae, {
              name: "Date Of Birth",
              type: "date",
              inputName: "dob",
              value: n.dob,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Height Type",
              options: l,
              inputName: "heightType",
              value: n.heightType,
              onChange: r,
            }),
            a.jsx("div", {}),
            a.jsx(Ae, {
              name: "Height",
              placeholder: "Enter Height",
              inputName: "height",
              type: "number",
              value: n.height,
              onChange: r,
            }),
            a.jsx(Ae, {
              name: "Weight",
              placeholder: "Enter Weight",
              type: "number",
              inputName: "weight",
              value: n.weight,
              onChange: r,
            }),
          ],
        }),
        a.jsx("div", {
          className:
            "flex justify-end py-4 px-2 bg-secondary500 bg-opacity-50 rounded",
          children: a.jsx(Vs, {
            text: "Proceed to Next step",
            onClick: t,
            flexDirection: "flex-row-reverse",
            children: a.jsx(Hf, {}),
          }),
        }),
      ],
    });
  },
  X7 = ({
    isVisible: e = !1,
    handleStepClick: t,
    formData: n,
    handleChange: r,
    buttonText: s,
    onClick: o,
  }) => {
    const i = [
        { id: "Unknown", name: "Unknown" },
        { id: "Right", name: "Right" },
        { id: "Left", name: "Left" },
        { id: "Both", name: "Both" },
      ],
      l = [
        { td: "Unknown", name: "Unknown" },
        { id: "Batsman", name: "Batsman" },
        { id: "Bowler", name: "Bowler" },
        { id: "All Rounder", name: "All Rounder" },
      ],
      c = [
        { id: "Unknown", name: "Unknown" },
        { id: "Top Order", name: "Top Order" },
        { id: "Middle Order", name: "Middle Order" },
        { id: "Finisher", name: "Finisher" },
        { id: "Tail Ender", nane: "Tail Ender" },
      ],
      u = [
        { id: "Unknown", name: "Unknown" },
        { id: "Full Time", name: "Full Time" },
        { id: "Part Time", name: "Part Time" },
        { id: "Not a bowler", name: "Not a bowler" },
      ],
      f = [
        { id: "Unknown", name: "Unknown" },
        { id: "Yes", name: "Yes" },
        { id: "No", name: "No" },
      ];
    return a.jsxs("div", {
      className: `${e ? "block" : "hidden"}`,
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(ae, {
              name: "Batting Hand",
              options: i,
              inputName: "battingHand",
              value: n.battingHand,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Bowling Hand",
              options: i,
              inputName: "bowlingHand",
              value: n.bowlingHand,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Player Role",
              options: l,
              inputName: "role",
              value: n.role,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Batting",
              options: f,
              inputName: "batting",
              value: n.batting,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Bowling",
              options: f,
              inputName: "bowling",
              value: n.bowling,
              onChange: r,
            }),
            a.jsx("div", {}),
            a.jsx(ae, {
              name: "Fielding",
              options: f,
              inputName: "fielding",
              value: n.fielding,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Wicket Keeping",
              options: f,
              inputName: "wicketKeeping",
              value: n.wicketKeeping,
              onChange: r,
            }),
            a.jsx("div", {}),
            a.jsx(ae, {
              name: "Batting Type",
              options: c,
              inputName: "battingType",
              value: n.battingType,
              onChange: r,
            }),
            a.jsx(ae, {
              name: "Bowling Type",
              options: u,
              inputName: "bowlingType",
              value: n.bowlingType,
              onChange: r,
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "flex flex-col lg:flex-row justify-end gap-8 py-4 px-2 bg-secondary500 bg-opacity-50 rounded",
          children: [
            a.jsx(Vs, {
              text: "Back to Previous Step",
              onClick: t,
              children: a.jsx(Sy, {}),
            }),
            a.jsx(cn, { text: s, onClick: o }),
          ],
        }),
      ],
    });
  },
  Iy = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = T.useState(!0),
      [i, l] = T.useState(!1),
      c = () => {
        o((f) => !f), l((f) => !f);
      },
      u = (f) => {
        const { name: d, value: p } = f.target;
        t((y) => ({ ...y, [d]: p }));
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(Y7, {
          isVisible: s,
          handleStepClick: c,
          formData: e,
          handleChange: u,
        }),
        a.jsx(X7, {
          isVisible: i,
          handleStepClick: c,
          formData: e,
          handleChange: u,
          buttonText: n,
          onClick: r,
        }),
      ],
    });
  },
  J7 = () => {
    const e = {
      firstName: "",
      middleName: "",
      lastName: "",
      nickName: "",
      nationality: "",
      dob: "",
      gender: "",
      heightType: "",
      height: "",
      weight: "",
      battingHand: "",
      bowlingHand: "",
      role: "",
      bowling: "",
      batting: "",
      fielding: "",
      wicketKeeping: "",
      bowlingType: "",
      battingType: "",
    };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: Iy,
      extendedUrl: "player/players/",
      submitButtonText: "Add Player",
      navigateTo: "/player",
      isUpdate: !1,
      requiredFields: [
        "firstName",
        "nickName",
        "nationality",
        "gender",
        "heightType",
        "battingHand",
        "bowlingType",
        "role",
        "bowling",
        "batting",
        "fielding",
        "wicketKeeping",
        "bowlingType",
        "battingType",
      ],
    });
  },
  eC = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = {
        firstName: "",
        middleName: "",
        lastName: "",
        nickName: "",
        nationality: "",
        dob: "",
        gender: "",
        heightType: "",
        height: "",
        weight: "",
        battingHand: "",
        bowlingHand: "",
        role: "",
        bowling: "",
        batting: "",
        fielding: "",
        wicketKeeping: "",
        bowlingType: "",
        battingType: "",
      };
    return a.jsx(jt, {
      initialFormData: n,
      formComponent: Iy,
      entityId: t,
      extendedUrl: "player/players/",
      submitButtonText: "Update Player",
      navigateTo: "/player",
      isUpdate: !0,
      requiredFields: [
        "firstName",
        "nickName",
        "nationality",
        "gender",
        "heightType",
        "battingHand",
        "bowlingType",
        "role",
        "bowling",
        "batting",
        "fielding",
        "wicketKeeping",
        "bowlingType",
        "battingType",
      ],
    });
  },
  tC = () =>
    a.jsx(Xr, {
      entityName: "Player",
      entityUrl: "/player/players",
      navigateTo: "/player",
    }),
  nC = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/player", element: a.jsx(Q7, {}) }),
        a.jsx(Q, { path: "/add-player", element: a.jsx(J7, {}) }),
        a.jsx(Q, { path: "/update-player", element: a.jsx(eC, {}) }),
        a.jsx(Q, { path: "/delete-player", element: a.jsx(tC, {}) }),
      ],
    }),
  rC = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Team",
        fetchUrl: "team/teams",
        renderItem: (e) =>
          a.jsx(
            Yr,
            {
              id: e.id,
              name: `${e.name}`,
              prefixName: "TM",
              pagePrefix: "team",
            },
            e.id
          ),
        buttonText: "Add Team",
        addButtonLink: "/add-team",
      }),
    }),
  Uy = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const s = (o) => {
      const { name: i, value: l } = o.target;
      t((c) => ({ ...c, [i]: l }));
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            a.jsx(Ae, {
              name: "Team Name *",
              placeholder: "Enter Team Name",
              onChange: s,
              inputName: "name",
              value: e.name,
            }),
            a.jsx(Ae, {
              name: "Team's Short Name *",
              placeholder: "Enter Short Name",
              onChange: s,
              inputName: "shortName",
              value: e.shortName,
            }),
          ],
        }),
        a.jsx("div", {
          className: "mt-4 mx-4",
          children: a.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  sC = () => {
    const e = { name: "", shortName: "" };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: Uy,
      extendedUrl: "team/teams/",
      submitButtonText: "Add Team",
      navigateTo: "/teams",
      isUpdate: !1,
      requiredFields: ["name", "shortName"],
    });
  },
  oC = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = { name: "", shortName: "" };
    return a.jsx(jt, {
      initialFormData: n,
      formComponent: Uy,
      extendedUrl: "team/teams/",
      submitButtonText: "Update Team",
      navigateTo: "/teams",
      isUpdate: !0,
      entityId: t,
      requiredFields: ["name", "shortName"],
    });
  },
  iC = () =>
    a.jsx(Xr, {
      entityName: "Team",
      entityUrl: "/team/teams",
      navigateTo: "/teams",
    }),
  aC = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/teams", element: a.jsx(rC, {}) }),
        a.jsx(Q, { path: "/add-team", element: a.jsx(sC, {}) }),
        a.jsx(Q, { path: "/update-team", element: a.jsx(oC, {}) }),
        a.jsx(Q, { path: "/delete-team", element: a.jsx(iC, {}) }),
      ],
    }),
  lC = () =>
    a.jsx(dt, {
      children: a.jsx(Qr, {
        entityName: "Matches",
        fetchUrl: "match/matches",
        renderItem: (e) => {
          console.log("M ", e);
          const t =
              e.tossWonBy && e.optTo && e.playingSquadCount == 2
                ? "active"
                : "",
            n =
              e.tossWonBy && e.optTo && e.playingSquadCount == 2
                ? "updated"
                : "active";
          return a.jsxs(
            Yr,
            {
              name: `${e.displayName} `,
              prefixName: "MTC",
              id: e.id,
              pagePrefix: "match",
              children: [
                e.matchEnded &&
                  a.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      a.jsx("p", {
                        className:
                          "text-gray-700 opacity-50 bg-white bg-opacity-40 px-4 rounded-sm hover:text-gray-100 hover:bg-gray-800 transition-all duration-150 ease-linear",
                        children: "Ended",
                      }),
                      e.isVideoCaptureEnabled == "yes" &&
                        !e.hasMatchVideosUploadCompleted &&
                        a.jsx(As, {
                          text: "Upload",
                          status: t,
                          onClickUrl: `/upload-videos?id=${e.id}`,
                          bg: "bg-gray-500 transition-all duration-500 hover:bg-gray-900 shadow-xl",
                          children: a.jsx(Ny, { fontSize: "small" }),
                        }),
                      e.isVideoCaptureEnabled == "yes" &&
                        e.hasMatchVideosUploadCompleted &&
                        a.jsxs("p", {
                          className:
                            "text-gray-700 opacity-50 bg-white bg-opacity-40 px-4 rounded-sm hover:text-gray-100 hover:bg-gray-800 transition-all duration-150 ease-linear",
                          children: [a.jsx(b7, {}), a.jsx(u7, {})],
                        }),
                    ],
                  }),
                !e.matchEnded &&
                  a.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      a.jsx(As, {
                        text: "Toss & Squad",
                        status: n,
                        onClickUrl: `/update-match-toss?id=${e.id}`,
                        children: a.jsx(yy, {
                          text_size: "small",
                          onClickUrl: "/",
                        }),
                      }),
                      a.jsx(As, {
                        text: "Ball Code",
                        status: t,
                        onClickUrl: `/ball?id=${e.id}`,
                        bg: "bg-gradient-to-r from-accent to-green-500 transition-all duration-500 hover:from-primary500 hover:to-pink-500 shadow-xl",
                        children: a.jsx(y7, { fontSize: "small" }),
                      }),
                    ],
                  }),
              ],
            },
            e.id
          );
        },
        buttonText: "Add Match",
        addButtonLink: "/add-match",
        pagePrefix: "match",
      }),
    }),
  ka = ({
    name: e = "Team 1",
    options: t,
    extraClasses: n = "",
    textWidth: r = "w-1/4",
    inputWidth: s = "w-3/4",
    onChange: o = null,
    value: i = "",
    inputName: l = "",
  }) =>
    a.jsxs("div", {
      className: `flex ${n}`,
      children: [
        a.jsx("p", {
          className: `bg-gray-700 rounded-l-md px-4 py-1 ${r}`,
          children: e,
        }),
        a.jsx("div", {
          className: `bg-secondary500 border-2 border-gray-700 rounded-r-md ${s}`,
          children: a.jsxs("select", {
            name: l,
            id: "",
            className: "bg-secondary500 rounded-r-md px-4 py-1 w-full",
            onChange: o,
            value: i,
            children: [
              a.jsxs("option", { value: "", children: ["Select ", e] }),
              t.map((c, u) =>
                a.jsx("option", { value: c.id, children: c.name }, u)
              ),
            ],
          }),
        }),
      ],
    });
async function Xi({ extendedUrl: e, setItems: t, label: n = "Data" }) {
  try {
    const r = await me.get(e);
    console.log(n, r), t(r.data);
  } catch (r) {
    console.log("Error fetching ", r.response.data);
  }
}
const $y = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = T.useState([]),
      [i, l] = T.useState(""),
      [c, u] = T.useState([]),
      [f, d] = T.useState([]),
      p = [
        { id: "day", name: "Day" },
        { id: "night", name: "Night" },
        { id: "daynight", name: "Day-Night" },
      ],
      [y, h] = T.useState([]),
      [m, S] = T.useState([]),
      [g, x] = T.useState([]),
      w = async (j) => {
        console.log("ID - ", j);
        try {
          const b = await My({ id: j });
          console.log("Competition Data - ", b),
            l(b),
            x(b.teams),
            console.log("Teams - ", b.teams);
        } catch (b) {
          console.error("Error fetching competition data:", b);
        }
      };
    T.useEffect(() => {
      Ty({ setMatchTypes: u }),
        Xi({ extendedUrl: "competition/competitions/all/", setItems: o }),
        Xi({ extendedUrl: "stadium/stadiums/all/", setItems: d }),
        Xi({ extendedUrl: "competition/knockouts/", setItems: h }),
        Xi({
          extendedUrl: "umpire/umpires/all/",
          setItems: S,
          label: "Umpire",
        }),
        console.log("Umpires - ", m);
    }, []),
      T.useEffect(() => {
        if (e.competition)
          try {
            w(e.competition);
          } catch (j) {
            console.error("Error fetching competition data:", j);
          }
      }, [e.competition]);
    const k = (j) => {
      const { name: b, value: C } = j.target;
      t((N) =>
        (b === "team1" && C === N.team2) || (b === "team2" && C === N.team1)
          ? (X.error("Both Team-1 & Team-2 can't be the same!"),
            { ...N, [b]: "" })
          : { ...N, [b]: C }
      ),
        b === "competition" && w(C);
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 lg:pb-4 px-4",
          children: [
            a.jsx(ae, {
              name: "Competition *",
              options: s,
              inputName: "competition",
              value: e.competition,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Stadium *",
              inputName: "stadium",
              options: f,
              value: e.stadium,
              onChange: k,
            }),
            a.jsx(Ae, {
              name: "Date",
              type: "date",
              inputName: "date",
              value: e.date,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Match Type *",
              options: c,
              inputName: "matchType",
              value: e.matchType,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Match Condition *",
              options: p,
              inputName: "matchCondition",
              value: e.matchCondition,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Knock Out *",
              options: y,
              inputName: "knockOut",
              value: e.knockOut,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "First Umpire",
              options: m,
              inputName: "firstUmpire",
              value: e.firstUmpire,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Second Umpire",
              options: m,
              inputName: "secondUmpire",
              value: e.secondUmpire,
              onChange: k,
            }),
            a.jsx(ae, {
              name: "Third Umpire",
              options: m,
              inputName: "thirdUmpire",
              value: e.thirdUmpire,
              onChange: k,
            }),
            a.jsx(ka, {
              name: "Team 1 *",
              options: g || [],
              inputName: "team1",
              value: e.team1,
              onChange: k,
              extraClasses: "mt-4",
            }),
            a.jsx(ka, {
              name: "Team 2 *",
              options: g || [],
              inputName: "team2",
              value: e.team2,
              onChange: k,
              extraClasses: "mt-4",
            }),
            a.jsx(ka, {
              name: "Video-Capture *",
              options: [
                { id: "yes", name: "Yes" },
                { id: "no", name: "No" },
              ],
              extraClasses: "mt-4",
              textWidth: "3/4",
              inputWidth: "1/4",
              inputName: "isVideoCaptureEnabled",
              value: e.isVideoCaptureEnabled,
              onChange: k,
            }),
          ],
        }),
        a.jsx("div", {
          className: "flex justify-end mt-4 mr-4",
          children: a.jsx(cn, { text: n, onClick: r }),
        }),
      ],
    });
  },
  cC = () => {
    const e = {
      competition: "",
      date: "",
      matchType: "",
      stadium: "",
      matchCondition: "",
      team1: "",
      team2: "",
      knockOut: "",
      isVideoCaptureEnabled: "",
      firstUmpire: "",
      secondUmpire: "",
      thirdUmpire: "",
    };
    return a.jsx(jt, {
      initialFormData: e,
      formComponent: $y,
      extendedUrl: "match/matches/",
      submitButtonText: "Create Match",
      navigateTo: "/match",
      isUpdate: !1,
      requiredFields: [
        "competition",
        "matchType",
        "date",
        "stadium",
        "matchCondition",
        "knockOut",
        "team1",
        "team2",
        "isVideoCaptureEnabled",
      ],
    });
  },
  uC = () => {
    const [e] = kt(),
      t = e.get("id"),
      n = {
        competition: "",
        date: "",
        matchType: "",
        stadium: "",
        matchCondition: "",
        team1: "",
        team2: "",
        knockOut: "",
        isVideoCaptureEnabled: "",
        firstUmpire: "",
        secondUmpire: "",
        thirdUmpire: "",
      };
    return a.jsx(jt, {
      initialFormData: n,
      formComponent: $y,
      extendedUrl: "match/matches/",
      submitButtonText: "Update Match",
      navigateTo: "/match",
      isUpdate: !0,
      entityId: t,
      requiredFields: [
        "competition",
        "matchType",
        "date",
        "stadium",
        "matchCondition",
        "knockOut",
        "team1",
        "team2",
        "isVideoCaptureEnabled",
      ],
    });
  },
  dC = () =>
    a.jsx(Xr, {
      entityName: "Match",
      entityUrl: "/match/matches",
      navigateTo: "/match",
    });
async function fC({ id: e }) {
  try {
    const t = await me.get(`match/match-teams/${e}`);
    return console.log("Fetched Match Teams ", t.data), t.data;
  } catch (t) {
    console.log("error ", t);
  }
}
async function pC({ formData: e, extendedUrl: t }) {
  try {
    const n = await me.patch(t, e);
    X.success("Update Success!");
  } catch (n) {
    console.log("Error ", n), X.error("Update Failed!");
  }
}
const hC = () => {
    const [e] = kt(),
      t = e.get("id"),
      [n, r] = T.useState(null),
      [s, o] = T.useState([]),
      i = Ut(),
      l = [
        { id: "batting", name: "Batting" },
        { id: "bowling", name: "Bowling" },
      ],
      [c, u] = T.useState(""),
      [f, d] = T.useState("");
    async function p() {
      const h = await fC({ id: t });
      h &&
        (console.log("Got Competition Data", h),
        r(h),
        u(h.tossWonBy || ""),
        d(h.optTo || ""),
        o([
          { id: h.team1.id, name: h.team1.name },
          { id: h.team2.id, name: h.team2.name },
        ]));
    }
    T.useEffect(() => {
      p();
    }, []);
    const y = () => {
      !c || !f
        ? X.error("Please fill all Fields!")
        : (pC({
            formData: { id: t, tossWonBy: c, optTo: f },
            extendedUrl: `match/matches/${t}/`,
          }),
          i(`/update-match-playing-squad?id=${t}`, {
            state: { competitionId: n.competition, teams: s },
          }));
    };
    return a.jsx(dt, {
      children: a.jsxs(Cy, {
        backButtonText: "All Matches",
        navigateTo: "/match",
        text: "Update Match Toss",
        children: [
          a.jsxs("div", {
            className: "grid grid-cols-3 gap-4 pt-8 pb-4 mb-4",
            children: [
              a.jsx(ae, {
                name: "Toss won by",
                inputName: "tossWonBy",
                options: s,
                value: c,
                onChange: (h) => {
                  u(h.target.value);
                },
              }),
              a.jsx(ae, {
                name: "Toss decision",
                inputName: "tossDecision",
                options: l,
                value: f,
                onChange: (h) => {
                  d(h.target.value);
                },
              }),
            ],
          }),
          a.jsx("div", {
            className: "flex justify-end",
            children: a.jsx(cn, { text: "Update Toss & Continue", onClick: y }),
          }),
        ],
      }),
    });
  },
  Yc = ({ text_size: e }) =>
    a.jsx(Oe, {
      fontSize: e,
      children: a.jsx("svg", {
        width: "2",
        height: "1.5",
        viewBox: "0 0 8 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a.jsx("path", {
          d: "M1 3L3.57143 5L7 1",
          stroke: "white",
          "stroke-linecap": "round",
        }),
      }),
    }),
  mC = ({
    name: e,
    nationality: t,
    onClick: n,
    isSelected: r,
    index: s,
    isWicketKeeper: o,
    isCaptain: i,
    onCaptainClick: l,
    onWicketKeeperClick: c,
  }) =>
    a.jsxs("div", {
      className:
        "flex w-full px-4 py-2 border-b-1 border-secondary1000 hover:shadow-xl hover:bg-gray-400 hover:bg-opacity-10",
      children: [
        a.jsx("button", {
          className: "w-1/12 pt-1",
          onClick: n,
          children: r
            ? a.jsx("div", {
                className: "w-5 h-5 rounded bg-accent",
                children: a.jsx(Yc, { text_size: "small" }),
              })
            : a.jsx("p", { className: "w-5 h-5 rounded border-1" }),
        }),
        a.jsx("div", {
          className: "w-1/12",
          children: a.jsx("div", {
            children: s
              ? a.jsxs("p", {
                  className:
                    "w-6 h-6 rounded-full bg-sky-500 font-extrabold text-center",
                  children: [s || "-", " "],
                })
              : a.jsx("p", {
                  className: "w-6 h-6 rounded-full font-extrabold text-center",
                }),
          }),
        }),
        a.jsx("p", { className: "w-5/12", children: e }),
        a.jsx("p", { className: "w-3/12", children: t }),
        a.jsx("div", {
          className: "w-1/12 flex justify-center",
          children: r
            ? a.jsx("button", {
                className: "w-1/12 pt-1",
                onClick: l,
                children: i
                  ? a.jsx("div", {
                      className: "w-5 h-5 rounded bg-accent",
                      children: a.jsx(Yc, { text_size: "small" }),
                    })
                  : a.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              })
            : a.jsx("button", {
                className: "w-1/12 pt-1",
                children: a.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              }),
        }),
        a.jsx("div", {
          className: "w-1/12 flex justify-center",
          children: r
            ? a.jsx("button", {
                className: "w-1/12 pt-1",
                onClick: c,
                children: o
                  ? a.jsx("div", {
                      className: "w-5 h-5 rounded bg-accent",
                      children: a.jsx(Yc, { text_size: "small" }),
                    })
                  : a.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              })
            : a.jsx("button", {
                className: "w-1/12 pt-1",
                children: a.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              }),
        }),
      ],
    }),
  gC = () => {
    const e = Ks(),
      [t] = kt(),
      n = t.get("id"),
      { competitionId: r, teams: s } = e.state || {},
      [o, i] = T.useState(""),
      [l, c] = T.useState([]),
      [u, f] = T.useState(""),
      [d, p] = T.useState([]),
      [y, h] = T.useState(null),
      [m, S] = T.useState(null),
      g = async () => {
        try {
          await Kf({
            id: r,
            setItem: f,
            extendedUrl: "competition/competitions/teams/",
          });
        } catch (C) {
          console.error("Error fetching competition data:", C);
        }
      };
    T.useEffect(() => {
      g();
    }, []);
    const x = async () => {
      if (o)
        try {
          c([]),
            await Ly({ competitionId: r, teamId: o }).then((C) => {
              const N = C[0].players;
              console.log("existing ", N),
                N.forEach((v) => {
                  const _ = `${v.firstName} ${
                      v.middleName ? v.middleName + " " : ""
                    }${v.lastName ? v.lastName + " " : ""}(${v.id})`,
                    P = "",
                    U = !1,
                    D = !0;
                  c((B) => [...B, { ...v, name: _, playingIndex: P }]),
                    p([]),
                    h(""),
                    S("");
                });
            });
        } catch (C) {
          console.log("Error - ", C);
        }
    };
    T.useEffect(() => {
      x();
    }, [o]);
    const w = (C) => {
        let N = [];
        d.includes(C) ? (N = d.filter((v) => v !== C)) : (N = [...d, C]),
          p(N),
          c((v) =>
            v.map((_) => ({ ..._, playingIndex: N.indexOf(_.id) + 1 || "" }))
          );
      },
      k = (C) => {
        h(C === y ? null : C);
      },
      j = (C) => {
        S(C === m ? null : C);
      },
      b = async () => {
        const C = u.matchType.activePlayersPerTeam;
        if (d.length < C) {
          X.error(`Please select at least ${C} players!`);
          return;
        }
        if (!y || !m) {
          X.error("Please select the Captain & Wicket-keeper");
          return;
        }
        const N = {
          match: n,
          team: o,
          players: d,
          captain: y,
          wicketKeeper: m,
        };
        try {
          (await Zf({
            extendedUrl: `match/matches/${n}/team/${o}/`,
            formData: N,
          }))
            ? X.success("Updated Playing Squad!")
            : X.error("Update Failed!");
        } catch (v) {
          console.error("Error during update: ", v),
            X.error("An error occurred while updating the squad!");
        }
      };
    return a.jsxs(dt, {
      children: [
        a.jsx(qf, {
          children: a.jsx(Ql, { text: "Back", navigateTo: "/match" }),
        }),
        a.jsxs(Kr, {
          flexDirection: "justify-between",
          children: [
            a.jsx("div", {
              className: "flex gap-4",
              children: a.jsx(ka, {
                name: "Team",
                options: s,
                value: o,
                onChange: (C) => {
                  i(C.target.value);
                },
              }),
            }),
            a.jsx(cn, { text: "Update Playing Squad", onClick: b }),
          ],
        }),
        a.jsx(Zr, {
          children: a.jsxs("div", {
            className: "pt-4",
            children: [
              a.jsx(Kl, {
                children: a.jsxs("div", {
                  className: "flex w-full",
                  children: [
                    a.jsx("div", {
                      className: "w-1/12 pt-1",
                      children: a.jsx("p", {
                        className: "w-4 h-4 rounded border-1",
                      }),
                    }),
                    a.jsx("p", { className: "w-1/12" }),
                    a.jsx("p", { className: "w-5/12", children: "Name" }),
                    a.jsx("p", { className: "w-3/12", children: "Player ID" }),
                    a.jsx("p", {
                      className: "w-1/12 text-center",
                      children: "Captain",
                    }),
                    a.jsx("p", {
                      className: "w-1/12 text-center",
                      children: "W.K",
                    }),
                  ],
                }),
              }),
              a.jsx(Zl, {
                children:
                  l.length > 0
                    ? l.map((C) =>
                        a.jsx(
                          mC,
                          {
                            name: C.name,
                            nationality: C.id,
                            onClick: () => w(C.id),
                            isSelected: d.includes(C.id),
                            index: C.playingIndex,
                            isCaptain: y === C.id,
                            isWicketKeeper: m === C.id,
                            onCaptainClick: () => k(C.id),
                            onWicketKeeperClick: () => j(C.id),
                          },
                          C.id
                        )
                      )
                    : a.jsx("p", {
                        className: "flex justify-center mt-8",
                        children: "No players available",
                      }),
              }),
            ],
          }),
        }),
      ],
    });
  };
async function yC({ matchId: e, formData: t }) {
  try {
    return (
      await me.post(`match/upload-videos/?matchId=${e}`, t, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  } catch (n) {
    throw (console.error("Error during video upload:", n), n);
  }
}
const vC = ({
    navigateTo: e = "/",
    name: t = "",
    prefixName: n = "",
    onClick: r = null,
  }) => {
    const [s] = kt(),
      o = s.get("id");
    console.log("MId", o);
    const [i, l] = T.useState([]),
      [c, u] = T.useState(!0),
      f = Ut(),
      d = (m) => {
        l(Array.from(m.target.files));
      },
      p = async () => {
        const m = new FormData();
        i.forEach((S, g) => {
          m.append("videos", S),
            console.log(`File added to formData: ${S.name}, size: ${S.size}`);
        }),
          console.log("FormData prepared for upload:", m);
        try {
          (await yC({ matchId: o, formData: m })) &&
            (X.success("Videos uploaded successfully!"), l([]), f("/match"));
        } catch (S) {
          console.error("Error uploading videos:", S),
            X.error("Failed to upload videos. Please try again.");
        }
      },
      y = () => {
        u((m) => !m);
      },
      h = (m) => {
        l((S) => S.filter((g, x) => x !== m));
      };
    return a.jsx(dt, {
      children: a.jsx("div", {
        className: "flex justify-center w-full",
        children: a.jsxs("div", {
          className: "w-full md:w-1/2",
          children: [
            a.jsxs(Kr, {
              flexDirection: "gap-8",
              children: [
                a.jsx(Ql, { text: "Back to All", navigateTo: e }),
                a.jsx("p", { children: "Upload Match Videos" }),
              ],
            }),
            a.jsxs(Zr, {
              children: [
                a.jsx("p", {
                  className: "py-4 text-yellow-500",
                  children: "NOTE",
                }),
                a.jsxs("ul", {
                  className: "list-outside list-disc px-4 text-yellow-100",
                  children: [
                    a.jsx("li", {
                      children:
                        "The Videos are available in your Browser's Default Download Location",
                    }),
                    a.jsx("li", {
                      children:
                        "Only Upload the videos whos file name starts with Current Match ID",
                    }),
                  ],
                }),
                a.jsx("p", {
                  className: "py-4",
                  children: "Please Upload All Match Related Videos",
                }),
                a.jsxs("div", {
                  className: "py-2 flex w-full text-center hover:shadow-xl",
                  children: [
                    a.jsxs("p", {
                      className: "w-1/4 bg-secondary250 py-4",
                      children: ["MATCH ", o],
                    }),
                    a.jsxs("div", {
                      className: "w-3/4 bg-secondary200 py-4",
                      children: [
                        a.jsx("input", {
                          type: "file",
                          multiple: !0,
                          accept: "video/*",
                          onChange: d,
                        }),
                        i.length > 0 &&
                          a.jsx("div", {
                            className: "mx-4 h-24 overflow-y-scroll my-4",
                            children: a.jsx("ul", {
                              className: "mt-2",
                              children: i.map((m, S) =>
                                a.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      m.name,
                                      " - ",
                                      (m.size / 1024 / 1024).toFixed(2),
                                      " ",
                                      "MB",
                                      a.jsx("button", {
                                        onClick: () => h(S),
                                        className: "text-red-500 mx-2",
                                        children: a.jsx(Gf, {}),
                                      }),
                                    ],
                                  },
                                  S
                                )
                              ),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex gap-4 py-4",
                  children: [
                    a.jsx("input", { type: "checkbox", onClick: y }),
                    " ",
                    a.jsx("p", {
                      children:
                        "I have uploaded the videos and I'm Aware of my Act",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex justify-end w-full gap-4",
                  children: [
                    a.jsx(oe, {
                      to: e,
                      children: a.jsx(Yl, { text: "Cancel" }),
                    }),
                    !c &&
                      a.jsx(Vs, {
                        text: "Upload",
                        text_colour: "text-green-500",
                        onClick: p,
                        children: a.jsx(Ny, { fontSize: "small" }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  xC = () =>
    a.jsxs(Cn, {
      children: [
        a.jsx(Q, { path: "/match", element: a.jsx(lC, {}) }),
        a.jsx(Q, { path: "/add-match", element: a.jsx(cC, {}) }),
        a.jsx(Q, { path: "/update-match", element: a.jsx(uC, {}) }),
        a.jsx(Q, { path: "/upload-videos", element: a.jsx(vC, {}) }),
        a.jsx(Q, { path: "/delete-match", element: a.jsx(dC, {}) }),
        a.jsx(Q, { path: "/update-match-toss", element: a.jsx(hC, {}) }),
        a.jsx(Q, {
          path: "/update-match-playing-squad",
          element: a.jsx(gC, {}),
        }),
      ],
    }),
  wC = ({ children: e }) =>
    a.jsx("div", {
      className:
        "bg-primary1000 cursor-pointer text-xs h-screen overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-800 scrollbar-track-gray-900 relative text-white",
      children: e,
    }),
  En = ({
    title: e = "Activity Type",
    options: t = ["Opt 1", "Opt 2", "Opt 3"],
    selectedOption: n = "Opt 1",
    onSelect: r = null,
  }) =>
    a.jsxs("div", {
      className: "rounded-lg",
      children: [
        a.jsx("p", {
          className: "bg-titlebar text-white px-2 py-1 rounded-tl-lg",
          children: e,
        }),
        a.jsx("div", {
          children: t.map((s, o) =>
            a.jsx(
              "p",
              {
                className: `cursor-pointer border-b-2 border-primary1000 px-2 hover:bg-gray-600 text-xs
            ${
              n === s
                ? "bg-accent text-white hover:bg-blue-700"
                : "bg-secondary1000 text-gray-300"
            }`,
                onClick: () => r(s),
                children: s,
              },
              o
            )
          ),
        }),
      ],
    }),
  qe = K5((e) => ({
    matchId: "",
    currentInnings: 0,
    ballNumber: 0,
    matchType: {},
    team1Players: [],
    team2Players: [],
    striker: {},
    nonStriker: {},
    bowler: {},
    battingTeam: {},
    bowlingTeam: {},
    ballRun: 0,
    isBoundary: !1,
    isBye: !1,
    isLegBye: !1,
    wideRuns: 0,
    overThrowRuns: 0,
    noBall: "None",
    ballSpeed: "",
    batSpeed: "",
    speedMetric: "KPH",
    penaltyRuns: "",
    isShortRuns: !1,
    wicketType: "",
    isWicketModalVisible: !1,
    dismissedPlayer: "",
    dismissedBy: "",
    caughtBy: "",
    stumpedBy: "",
    runOutFielder1: "",
    runOutFielder2: "",
    fielder1: "",
    fielder2: "",
    shotZonePosition: "",
    wagonWheelPosition: "",
    wicketKeeperPosition: "",
    trajectoryBallPosition: "",
    bowlerReleaseSide: "",
    bowlerReleaseBallPosition: "",
    deliveryType: "",
    creaseMovement: "",
    shotConnection: "",
    batSubject: "",
    stroke: "",
    keeperActivity: "",
    batsmanActivity: "",
    fieldingActivity: "",
    umpireActivity: "",
    isSaveMatchModalVisible: !1,
    targetRuns: 0,
    teamLeadBy: "",
    inningsToBeUpdated: 1,
    setMatchId: (t) => e({ matchId: t }),
    setCurrentInnings: (t) => e({ currentInnings: t }),
    setBallNumber: (t) => e({ ballNumber: t }),
    setMatchType: (t) => e({ matchType: t }),
    setTeam1Players: (t) => e({ team1Players: t }),
    setTeam2Players: (t) => e({ team2Players: t }),
    setStriker: (t) => e({ striker: t }),
    setNonStriker: (t) => e({ nonStriker: t }),
    setBowler: (t) => e({ bowler: t }),
    setBattingTeam: (t) => e({ battingTeam: t }),
    setBowlingTeam: (t) => e({ bowlingTeam: t }),
    setBallRun: (t) => e({ ballRun: t }),
    setIsBoundary: (t) => e({ isBoundary: t }),
    setIsBye: (t) => e({ isBye: t }),
    setIsLegBye: (t) => e({ isLegBye: t }),
    setWideRuns: (t) => e({ wideRuns: t }),
    setOverThrowRuns: (t) => e({ overThrowRuns: t }),
    setNoBall: (t) => e({ noBall: t }),
    setBallSpeed: (t) => e({ ballSpeed: t }),
    setBatSpeed: (t) => e({ batSpeed: t }),
    setSpeedMetric: (t) => e({ speedMetric: t }),
    setPenaltyRuns: (t) => e({ penaltyRuns: t }),
    setIsShortRuns: (t) => e({ isShortRuns: t }),
    setWicketType: (t) => e({ wicketType: t }),
    setIsWicketModalVisible: (t) => e({ isWicketModalVisible: t }),
    setDismissedPlayer: (t) => e({ dismissedPlayer: t }),
    setDismissedBy: (t) => e({ dismissedBy: t }),
    setCaughtBy: (t) => e({ caughtBy: t }),
    setStumpedBy: (t) => e({ stumpedBy: t }),
    setRunOutFielder1: (t) => e({ runOutFielder1: t }),
    setRunOutFielder2: (t) => e({ runOutFielder2: t }),
    setFielder1: (t) => e({ fielder1: t }),
    setFielder2: (t) => e({ fielder2: t }),
    setShotZonePosition: (t) => e({ shotZonePosition: t }),
    setWagonWheelPosition: (t) => e({ wagonWheelPosition: t }),
    setWicketKeeperPosition: (t) => e({ wicketKeeperPosition: t }),
    setTrajectoryBallPosition: (t) => e({ trajectoryBallPosition: t }),
    setBowlerReleaseSide: (t) => e({ bowlerReleaseSide: t }),
    setBowlerReleaseBallPosition: (t) => e({ bowlerReleaseBallPosition: t }),
    setDeliveryType: (t) => e({ deliveryType: t }),
    setCreaseMovement: (t) => e({ creaseMovement: t }),
    setShotConnection: (t) => e({ shotConnection: t }),
    setBatSubject: (t) => e({ batSubject: t }),
    setStroke: (t) => e({ stroke: t }),
    setKeeperActivity: (t) => e({ keeperActivity: t }),
    setBatsmanActivity: (t) => e({ batsmanActivity: t }),
    setFieldingActivity: (t) => e({ fieldingActivity: t }),
    setUmpireActivity: (t) => e({ umpireActivity: t }),
    setIsSaveMatchModalVisible: (t) => e({ isSaveMatchModalVisible: t }),
    setTargetRuns: (t) => e({ targetRuns: t }),
    setTeamLeadBy: (t) => e({ teamLeadBy: t }),
    setInningsToBeUpdated: (t) => e({ inningsToBeUpdated: t }),
    resetAll: () =>
      e(() => ({
        ballRun: 0,
        isBoundary: !1,
        isBye: !1,
        isLegBye: !1,
        wicketType: "",
        dismissedPlayer: "",
        dismissedBy: "",
        caughtBy: "",
        stumpedBy: "",
        runOutFielder1: "",
        runOutFielder2: "",
        wideRuns: 0,
        overThrowRuns: 0,
        noBall: "None",
        ballSpeed: "",
        batSpeed: "",
        penaltyRuns: "",
        isShortRuns: !1,
        fielder1: "",
        fielder2: "",
        shotZonePosition: "",
        wagonWheelPosition: "",
        wicketKeeperPosition: "",
        trajectoryBallPosition: "",
        bowlerReleaseSide: "",
        bowlerReleaseBallPosition: "",
        deliveryType: "",
        creaseMovement: "",
        shotConnection: "",
        batSubject: "",
        stroke: "",
        keeperActivity: "",
        batsmanActivity: "",
        fieldingActivity: "",
        umpireActivity: "",
      })),
  })),
  SC = () => {
    const {
        deliveryType: e,
        setDeliveryType: t,
        creaseMovement: n,
        setCreaseMovement: r,
        shotConnection: s,
        setShotConnection: o,
        batSubject: i,
        setBatSubject: l,
        stroke: c,
        setStroke: u,
        keeperActivity: f,
        setKeeperActivity: d,
        batsmanActivity: p,
        setBatsmanActivity: y,
        fieldingActivity: h,
        setFieldingActivity: m,
        umpireActivity: S,
        setUmpireActivity: g,
      } = qe(),
      x = [
        "Inswing",
        "Out Swing",
        "Rev.In Swing",
        "Rev.Out Swing",
        "Seamed In",
        "Seamed Out",
        "Angled In",
        "Angled Out",
        "Angled Away",
        "Straight",
        "Full Toss",
        "Rev. Swing",
        "Bouncer",
        "Wide Yorker",
        "Yorker",
        "Slow Ball",
        "Off Cutter",
        "Leg Cut",
        "Back of Hand",
        "Knuckle",
        "Slow Bouncer",
        "Leg Break",
        "Googly",
        "Flipper",
        "Off break",
        "Carrom",
        "Doosra",
        "Orthodox",
        "Arm ball",
        "Top spin",
        "Slider",
      ],
      w = [
        "Front Foot",
        "Back Foot",
        "Charging",
        "Ducked",
        "Walking Across",
        "Creating Room",
        "No Move",
        "Deep Ins. Crease",
        "Outside Off",
        "Late. Move",
        "None",
        "Fend. with FF air",
        "Fend. with BF air",
      ],
      k = [
        "Good Contact",
        "Inside edge",
        "Outside edge",
        "Top edge",
        "Bottom edge",
        "Shoulder of bat",
        "Hit pad",
        "Hit Body",
        "Glove",
        "Open Face",
        "None",
      ],
      j = [
        "Attacking",
        "Defensive",
        "Left Alone",
        "None",
        "Beaten",
        "Rotating",
        "Play missing",
      ],
      b = [
        "FF def",
        "BF def",
        "Push",
        "Steer",
        "Worked",
        "Leg Glance",
        "On drive",
        "Off Drive",
        "Cover Drive",
        "Square Drive",
        "Straight Drive",
        "Square Cut",
        "Late Cut",
        "Upper Cut",
        "Pull Shot",
        "Hook Shot",
        "Sweep Shot",
        "Rev. Sweep",
        "Switch",
        "Paddle Sweep",
        "Paddle Scoop",
        "Flick",
        "PickUp",
        "Slog",
        "Slog Sweep",
        "Inside Out",
        "Defense",
        "Glance",
        "Int. Padding",
        "None",
      ],
      C = ["Gathering", "Poor Gathering", "Collect dwn Leg"],
      N = [
        "In Control",
        "Out Control",
        "Boundary Attempt",
        "Mis Hit",
        "Un Comfortable",
        "Release Shot",
        "Lofted",
        "In the Air",
        "Above Hip",
        "Below Hip",
      ],
      v = [
        "Mis Runs",
        "Save Runs",
        "Wait Ball",
        "Attack Ball",
        "Chase Ball",
        "Dive",
        "Miss Ball",
        "Fumble",
        "Relay Throw",
        "Good Throw",
        "Bad Throw",
        "Dir Hit",
        "Dir Hit Off Target",
        "Bad Field",
        "Good Field",
      ],
      _ = ["Appeal", "Umpire", "Review", "UnOfficial DRS"];
    return a.jsxs("div", {
      className: "xl:w-5/12 grid grid-cols-2 lg:grid-cols-4",
      children: [
        a.jsx("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: a.jsx(En, {
            title: "Delivery Type",
            options: x,
            selectedOption: e,
            onSelect: (P) => t(P),
          }),
        }),
        a.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            a.jsx(En, {
              title: "Crease Movement",
              options: w,
              selectedOption: n,
              onSelect: (P) => r(P),
            }),
            a.jsx(En, {
              title: "Shot Connection",
              options: k,
              selectedOption: s,
              onSelect: (P) => o(P),
            }),
            a.jsx(En, {
              title: "Bat Subject",
              options: j,
              selectedOption: i,
              onSelect: (P) => l(P),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            a.jsx(En, {
              title: "Stroke",
              options: b,
              selectedOption: c,
              onSelect: (P) => u(P),
            }),
            a.jsx(En, {
              title: "Keeper",
              options: C,
              selectedOption: f,
              onSelect: (P) => d(P),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            a.jsx(En, {
              title: "Batsman",
              options: N,
              selectedOption: p,
              onSelect: (P) => y(P),
            }),
            a.jsx(En, {
              title: "Fielding",
              options: v,
              selectedOption: h,
              onSelect: (P) => m(P),
            }),
            a.jsx(En, {
              title: "Umpire",
              options: _,
              selectedOption: S,
              onSelect: (P) => g(P),
            }),
          ],
        }),
      ],
    });
  },
  CC = () => {
    const [e, t] = T.useState(null),
      n = T.useRef(null);
    return (
      T.useEffect(() => {
        navigator.mediaDevices
          .enumerateDevices()
          .then((r) => {
            const o = r
              .filter((i) => i.kind === "videoinput")
              .find((i) => i.label.includes("OBS Virtual Camera"));
            o
              ? navigator.mediaDevices
                  .getUserMedia({ video: { deviceId: { exact: o.deviceId } } })
                  .then((i) => {
                    t(i);
                  })
                  .catch((i) => {
                    console.error("Error accessing OBS Virtual Camera:", i);
                  })
              : console.warn("OBS Virtual Camera not found.");
          })
          .catch((r) => {
            console.error("Error fetching video devices:", r);
          });
      }, []),
      T.useEffect(() => {
        n.current && e && (n.current.srcObject = e);
      }, [e]),
      a.jsx("div", {
        className: "rounded-t-lg overflow-hidden",
        style: {
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, #111, #2A2A35)",
        },
        children: e
          ? a.jsx("video", {
              ref: n,
              autoPlay: !0,
              playsInline: !0,
              style: { width: "100%", height: "100%", objectFit: "contain" },
            })
          : a.jsx("img", {
              src: "https://static.tnn.in/thumb/msid-97269311,thumbsize-2533039,width-1280,height-720,resizemode-75/97269311.jpg?quality=100",
              alt: "OBS Placeholder",
              style: { width: "100%", height: "100%", objectFit: "contain" },
            }),
      })
    );
  };
var Fy = {};
const bC = (e) => (t) => {
    const n = e(t);
    return t.add(n), n;
  },
  kC = (e) => (t, n) => (e.set(t, n), n),
  mm =
    Number.MAX_SAFE_INTEGER === void 0
      ? 9007199254740991
      : Number.MAX_SAFE_INTEGER,
  Dy = 536870912,
  gm = Dy * 2,
  jC = (e, t) => (n) => {
    const r = t.get(n);
    let s = r === void 0 ? n.size : r < gm ? r + 1 : 0;
    if (!n.has(s)) return e(n, s);
    if (n.size < Dy) {
      for (; n.has(s); ) s = Math.floor(Math.random() * gm);
      return e(n, s);
    }
    if (n.size > mm)
      throw new Error(
        "Congratulations, you created a collection of unique numbers which uses all available integers!"
      );
    for (; n.has(s); ) s = Math.floor(Math.random() * mm);
    return e(n, s);
  },
  Vy = new WeakMap(),
  NC = kC(Vy),
  zy = jC(NC, Vy),
  EC = bC(zy),
  TC = (e) => typeof e.start == "function",
  ym = new WeakMap(),
  _C = (e) => ({
    ...e,
    connect:
      ({ call: t }) =>
      async () => {
        const { port1: n, port2: r } = new MessageChannel(),
          s = await t("connect", { port: n }, [n]);
        return ym.set(r, s), r;
      },
    disconnect:
      ({ call: t }) =>
      async (n) => {
        const r = ym.get(n);
        if (r === void 0) throw new Error("The given port is not connected.");
        await t("disconnect", { portId: r });
      },
    isSupported:
      ({ call: t }) =>
      () =>
        t("isSupported"),
  }),
  Xc = new WeakMap(),
  RC = (e) => {
    if (Xc.has(e)) return Xc.get(e);
    const t = new Map();
    return Xc.set(e, t), t;
  },
  Wy = (e) => {
    const t = _C(e);
    return (n) => {
      const r = RC(n);
      n.addEventListener("message", ({ data: l }) => {
        const { id: c } = l;
        if (c !== null && r.has(c)) {
          const { reject: u, resolve: f } = r.get(c);
          r.delete(c),
            l.error === void 0 ? f(l.result) : u(new Error(l.error.message));
        }
      }),
        TC(n) && n.start();
      const s = (l, c = null, u = []) =>
          new Promise((f, d) => {
            const p = zy(r);
            r.set(p, { reject: d, resolve: f }),
              c === null
                ? n.postMessage({ id: p, method: l }, u)
                : n.postMessage({ id: p, method: l, params: c }, u);
          }),
        o = (l, c, u = []) => {
          n.postMessage({ id: null, method: l, params: c }, u);
        };
      let i = {};
      for (const [l, c] of Object.entries(t))
        i = { ...i, [l]: c({ call: s, notify: o }) };
      return { ...i };
    };
  },
  vm = new Set(),
  AC = Wy({
    deregister:
      ({ call: e }) =>
      (t) =>
        e("deregister", { port: t }, [t]),
    encode:
      ({ call: e }) =>
      async (t, n) => {
        const r = await e("encode", { encoderId: t, timeslice: n });
        return vm.delete(t), r;
      },
    instantiate:
      ({ call: e }) =>
      async (t, n) => {
        const r = EC(vm),
          s = await e("instantiate", {
            encoderId: r,
            mimeType: t,
            sampleRate: n,
          });
        return { encoderId: r, port: s };
      },
    register:
      ({ call: e }) =>
      (t) =>
        e("register", { port: t }, [t]),
  }),
  PC = (e) => {
    const t = new Worker(e);
    return AC(t);
  },
  MC = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=a(c,i),d=t(l);e.addUniqueNumber=d,e.generateUniqueNumber=l}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(455);const t=new WeakMap,n=new WeakMap,o=(r=>{const o=(s=r,{...s,connect:e=>{let{call:r}=e;return async()=>{const{port1:e,port2:n}=new MessageChannel,o=await r("connect",{port:e},[e]);return t.set(n,o),n}},disconnect:e=>{let{call:r}=e;return async e=>{const n=t.get(e);if(void 0===n)throw new Error("The given port is not connected.");await r("disconnect",{portId:n})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var s;return t=>{const r=(e=>{if(n.has(e))return n.get(e);const t=new Map;return n.set(e,t),t})(t);t.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(t)&&t.start();const s=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,i)=>{const c=(0,e.generateUniqueNumber)(r);r.set(c,{reject:i,resolve:a}),null===o?t.postMessage({id:c,method:n},s):t.postMessage({id:c,method:n,params:o},s)}))},a=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.postMessage({id:null,method:e,params:r},n)};let i={};for(const[e,t]of Object.entries(o))i={...i,[e]:t({call:s,notify:a})};return{...i}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),s=-32603,a=-32602,i=-32601,c=(e,t)=>Object.assign(new Error(e),{status:t}),l=e=>c('The handler of the method called "'.concat(e,'" returned an unexpected result.'),s),d=(e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const d=t[o];try{if(void 0===d)throw(e=>c('The requested method called "'.concat(e,'" is not supported.'),i))(o);const t=void 0===a?d():d(a);if(void 0===t)throw(e=>c('The handler of the method called "'.concat(e,'" returned no required result.'),s))(o);const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw l(o)}else{if(void 0===r.result)throw l(o);const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}},u=new Map,h=(t,r,n)=>({...r,connect:n=>{let{port:o}=n;o.start();const s=t(o,r),a=(0,e.generateUniqueNumber)(u);return u.set(a,(()=>{s(),o.close(),u.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=u.get(t);if(void 0===r)throw(e=>c('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),a))(t);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=function(e,t){const r=h(f,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0),n=d(e,r);return e.addEventListener("message",n),()=>e.removeEventListener("message",n)},p=e=>{e.onmessage=null,e.close()},w=new Map,m=new WeakMap,g=((e,t)=>r=>{const n=t.get(r);if(void 0===n)throw new Error("There is no encoder stored which wraps this port.");e.delete(n),t.delete(r)})(w,m),v=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(v),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(v,y),E=((e,t)=>r=>{const[n,o,s,a]=t(r);return s?new Promise((t=>{o.onmessage=s=>{let{data:i}=s;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,a,i)}})):n.encode(r,null)})(p,M),b=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(w),T=((e,t,r)=>(n,o,s)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const a=r(o),{port1:i,port2:c}=new MessageChannel,l=[a,i,!0,s];return t.set(n,l),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),l[2]=!1):a.record(n,s,r.map((e=>"number"==typeof e?new Float32Array(e):e)))},c})(p,v,b),I=((e,t,r)=>async n=>{const o=r(n),s=await o.characterize(),a=s.toString();if(e.has(a)||t.has(n))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(a,[s,o]),t.set(n,a),s})(w,m,o),A=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);f(self,{deregister:async e=>{let{port:t}=e;return{result:g(t)}},encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await A(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=T(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await I(t)}}})})()})();`,
  LC = new Blob([MC], { type: "application/javascript; charset=utf-8" }),
  Hy = URL.createObjectURL(LC),
  Qf = PC(Hy),
  rl = Qf.encode,
  qy = Qf.instantiate,
  OC = Qf.register;
URL.revokeObjectURL(Hy);
const BC = (e) => (t, n) => {
    if (e === null) {
      const { data: r, ...s } = n,
        o = new Event(t, s);
      return (o.data = r), o;
    }
    return new e(t, n);
  },
  IC = (e, t) => (n, r, s) => {
    const o = [];
    let i = r,
      l = 0;
    for (; l < n.byteLength; )
      if (i === null) {
        const c = t(n, l);
        if (c === null) break;
        const { length: u, type: f } = c;
        (i = f), (l += u);
      } else {
        const c = e(n, l, i, s);
        if (c === null) break;
        const { content: u, length: f } = c;
        (i = null), (l += f), u !== null && o.push(u);
      }
    return { contents: o, currentElementType: i, offset: l };
  },
  UC = (e, t) =>
    class {
      constructor(r = null) {
        (this._listeners = new WeakMap()),
          (this._nativeEventTarget = r === null ? e() : r);
      }
      addEventListener(r, s, o) {
        if (s !== null) {
          let i = this._listeners.get(s);
          i === void 0 &&
            ((i = t(this, s)),
            typeof s == "function" && this._listeners.set(s, i)),
            this._nativeEventTarget.addEventListener(r, i, o);
        }
      }
      dispatchEvent(r) {
        return this._nativeEventTarget.dispatchEvent(r);
      }
      removeEventListener(r, s, o) {
        const i = s === null ? void 0 : this._listeners.get(s);
        this._nativeEventTarget.removeEventListener(
          r,
          i === void 0 ? null : i,
          o
        );
      }
    },
  $C = (e) => () => {
    if (e === null)
      throw new Error("A native EventTarget could not be created.");
    return e.document.createElement("p");
  },
  Yf = (e = "") => {
    try {
      return new DOMException(e, "InvalidModificationError");
    } catch (t) {
      return (
        (t.code = 13), (t.message = e), (t.name = "InvalidModificationError"), t
      );
    }
  },
  FC = () => {
    try {
      return new DOMException("", "InvalidStateError");
    } catch (e) {
      return (e.code = 11), (e.name = "InvalidStateError"), e;
    }
  },
  DC = (e) =>
    e !== null &&
    e.MediaStream !== void 0 &&
    (e.MediaRecorder === void 0 || e.MediaRecorder.isTypeSupported !== void 0)
      ? new Promise((t) => {
          if (e.MediaRecorder === void 0) return t(!0);
          const n = document.createElement("canvas");
          if ((n.getContext("2d"), typeof n.captureStream != "function"))
            return t(!1);
          const r = n.captureStream(),
            s = "audio/webm";
          try {
            const o = new e.MediaRecorder(r, { mimeType: s });
            o.addEventListener("dataavailable", ({ data: i }) =>
              t(i.type === s)
            ),
              o.start(),
              setTimeout(() => o.stop(), 10);
          } catch (o) {
            t(o.name === "NotSupportedError");
          }
        })
      : Promise.resolve(!1),
  VC = (e, t, n, r, s, o, i) =>
    class extends o {
      constructor(c, u = {}) {
        const { mimeType: f } = u;
        if (
          i !== null &&
          (f === void 0 ||
            (i.isTypeSupported !== void 0 && i.isTypeSupported(f)))
        ) {
          const d = e(i, c, u);
          super(d), (this._internalMediaRecorder = d);
        } else if (f !== void 0 && s.some((d) => d.test(f)))
          super(),
            i !== null &&
            i.isTypeSupported !== void 0 &&
            i.isTypeSupported("audio/webm;codecs=pcm")
              ? (this._internalMediaRecorder = r(this, i, c, f))
              : (this._internalMediaRecorder = n(this, c, f));
        else throw (i !== null && e(i, c, u), t());
        (this._ondataavailable = null),
          (this._onerror = null),
          (this._onpause = null),
          (this._onresume = null),
          (this._onstart = null),
          (this._onstop = null);
      }
      get mimeType() {
        return this._internalMediaRecorder.mimeType;
      }
      get ondataavailable() {
        return this._ondataavailable === null
          ? this._ondataavailable
          : this._ondataavailable[0];
      }
      set ondataavailable(c) {
        if (
          (this._ondataavailable !== null &&
            this.removeEventListener("dataavailable", this._ondataavailable[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("dataavailable", u),
            (this._ondataavailable = [c, u]);
        } else this._ondataavailable = null;
      }
      get onerror() {
        return this._onerror === null ? this._onerror : this._onerror[0];
      }
      set onerror(c) {
        if (
          (this._onerror !== null &&
            this.removeEventListener("error", this._onerror[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("error", u), (this._onerror = [c, u]);
        } else this._onerror = null;
      }
      get onpause() {
        return this._onpause === null ? this._onpause : this._onpause[0];
      }
      set onpause(c) {
        if (
          (this._onpause !== null &&
            this.removeEventListener("pause", this._onpause[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("pause", u), (this._onpause = [c, u]);
        } else this._onpause = null;
      }
      get onresume() {
        return this._onresume === null ? this._onresume : this._onresume[0];
      }
      set onresume(c) {
        if (
          (this._onresume !== null &&
            this.removeEventListener("resume", this._onresume[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("resume", u), (this._onresume = [c, u]);
        } else this._onresume = null;
      }
      get onstart() {
        return this._onstart === null ? this._onstart : this._onstart[0];
      }
      set onstart(c) {
        if (
          (this._onstart !== null &&
            this.removeEventListener("start", this._onstart[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("start", u), (this._onstart = [c, u]);
        } else this._onstart = null;
      }
      get onstop() {
        return this._onstop === null ? this._onstop : this._onstop[0];
      }
      set onstop(c) {
        if (
          (this._onstop !== null &&
            this.removeEventListener("stop", this._onstop[1]),
          typeof c == "function")
        ) {
          const u = c.bind(this);
          this.addEventListener("stop", u), (this._onstop = [c, u]);
        } else this._onstop = null;
      }
      get state() {
        return this._internalMediaRecorder.state;
      }
      pause() {
        return this._internalMediaRecorder.pause();
      }
      resume() {
        return this._internalMediaRecorder.resume();
      }
      start(c) {
        return this._internalMediaRecorder.start(c);
      }
      stop() {
        return this._internalMediaRecorder.stop();
      }
      static isTypeSupported(c) {
        return (
          (i !== null &&
            i.isTypeSupported !== void 0 &&
            i.isTypeSupported(c)) ||
          s.some((u) => u.test(c))
        );
      }
    },
  zC = (e) => (e !== null && e.BlobEvent !== void 0 ? e.BlobEvent : null),
  WC = (e, t) => (n, r, s) => {
    const o = [],
      i = new WeakMap(),
      l = new WeakMap(),
      c = new n(r, s),
      u = new WeakMap();
    let f = !0;
    return (
      (c.addEventListener = ((d) => (p, y, h) => {
        let m = y;
        return (
          typeof y == "function" &&
            (p === "dataavailable"
              ? ((m = (S) => {
                  setTimeout(() => {
                    if (f && c.state === "inactive") o.push(S.data);
                    else {
                      if (o.length > 0) {
                        const g = S.data;
                        Object.defineProperty(S, "data", {
                          value: new Blob([...o, g], { type: g.type }),
                        }),
                          (o.length = 0);
                      }
                      y.call(c, S);
                    }
                  });
                }),
                i.set(y, m))
              : p === "error"
              ? ((m = (S) => {
                  if (S.error === void 0)
                    y.call(c, new ErrorEvent("error", { error: e() }));
                  else if (S.error.name === "UnknownError") {
                    const g = S.error.message;
                    y.call(c, new ErrorEvent("error", { error: e(g) }));
                  } else
                    S instanceof ErrorEvent
                      ? y.call(c, S)
                      : y.call(c, new ErrorEvent("error", { error: S.error }));
                }),
                l.set(y, m))
              : p === "stop" &&
                ((m = (S) => {
                  (f = !1), setTimeout(() => y.call(c, S));
                }),
                u.set(y, m))),
          d.call(c, p, m, h)
        );
      })(c.addEventListener)),
      (c.dispatchEvent = ((d) => (p) => {
        let y;
        setTimeout(() => {
          (y = f), (f = !1);
        });
        const h = d.call(c, p);
        return setTimeout(() => (f = y)), h;
      })(c.dispatchEvent)),
      (c.removeEventListener = ((d) => (p, y, h) => {
        let m = y;
        if (typeof y == "function") {
          if (p === "dataavailable") {
            const S = i.get(y);
            S !== void 0 && (m = S);
          } else if (p === "error") {
            const S = l.get(y);
            S !== void 0 && (m = S);
          } else if (p === "stop") {
            const S = u.get(y);
            S !== void 0 && (m = S);
          }
        }
        return d.call(c, p, m, h);
      })(c.removeEventListener)),
      (c.start = ((d) => (p) => {
        if (
          s.mimeType !== void 0 &&
          s.mimeType.startsWith("audio/") &&
          r.getVideoTracks().length > 0
        )
          throw t();
        return (f = p !== void 0), p === void 0 ? d.call(c) : d.call(c, p);
      })(c.start)),
      c
    );
  },
  HC = (e) =>
    e === null || e.MediaRecorder === void 0 ? null : e.MediaRecorder,
  Jl = () => {
    try {
      return new DOMException("", "NotSupportedError");
    } catch (e) {
      return (e.code = 9), (e.name = "NotSupportedError"), e;
    }
  },
  qC =
    (e) =>
    (t, n, r, s = 2) => {
      const o = e(t, n);
      if (o === null) return o;
      const { length: i, value: l } = o;
      if (r === "master") return { content: null, length: i };
      if (n + i + l > t.byteLength) return null;
      if (r === "binary") {
        const c = (l / Float32Array.BYTES_PER_ELEMENT - 1) / s,
          u = Array.from({ length: s }, () => new Float32Array(c));
        for (let f = 0; f < c; f += 1) {
          const d = f * s + 1;
          for (let p = 0; p < s; p += 1)
            u[p][f] = t.getFloat32(
              n + i + (d + p) * Float32Array.BYTES_PER_ELEMENT,
              !0
            );
        }
        return { content: u, length: i + l };
      }
      return { content: null, length: i + l };
    },
  GC = (e) => (t, n) => {
    const r = e(t, n);
    if (r === null) return r;
    const { length: s, value: o } = r;
    return o === 35
      ? { length: s, type: "binary" }
      : o === 46 ||
        o === 97 ||
        o === 88713574 ||
        o === 106212971 ||
        o === 139690087 ||
        o === 172351395 ||
        o === 256095861
      ? { length: s, type: "master" }
      : { length: s, type: "unknown" };
  },
  KC = (e) => (t, n) => {
    const r = e(t, n);
    if (r === null) return r;
    const s = n + Math.floor((r - 1) / 8);
    if (s + r > t.byteLength) return null;
    let i = t.getUint8(s) & ((1 << (8 - (r % 8))) - 1);
    for (let l = 1; l < r; l += 1) i = (i << 8) + t.getUint8(s + l);
    return { length: r, value: i };
  },
  ZC = (e) => (t, n) => (e.set(t, n), n),
  xm =
    Number.MAX_SAFE_INTEGER === void 0
      ? 9007199254740991
      : Number.MAX_SAFE_INTEGER,
  Gy = 536870912,
  wm = Gy * 2,
  QC = (e, t) => (n) => {
    const r = t.get(n);
    let s = r === void 0 ? n.size : r < wm ? r + 1 : 0;
    if (!n.has(s)) return e(n, s);
    if (n.size < Gy) {
      for (; n.has(s); ) s = Math.floor(Math.random() * wm);
      return e(n, s);
    }
    if (n.size > xm)
      throw new Error(
        "Congratulations, you created a collection of unique numbers which uses all available integers!"
      );
    for (; n.has(s); ) s = Math.floor(Math.random() * xm);
    return e(n, s);
  },
  Ky = new WeakMap(),
  YC = ZC(Ky),
  XC = QC(YC, Ky),
  Sm = Symbol.observable || "@@observable";
function JC(e) {
  return (
    Symbol.observable ||
      (typeof e == "function" && e.prototype && e.prototype[Symbol.observable]
        ? ((e.prototype[Sm] = e.prototype[Symbol.observable]),
          delete e.prototype[Symbol.observable])
        : ((e[Sm] = e[Symbol.observable]), delete e[Symbol.observable])),
    e
  );
}
const Ji = () => {},
  Cm = (e) => {
    throw e;
  };
function eb(e) {
  return e
    ? e.next && e.error && e.complete
      ? e
      : {
          complete: (e.complete ?? Ji).bind(e),
          error: (e.error ?? Cm).bind(e),
          next: (e.next ?? Ji).bind(e),
        }
    : { complete: Ji, error: Cm, next: Ji };
}
const tb = (e) => (t, n, r) =>
    e((s) => {
      const o = (i) => s.next(i);
      return t.addEventListener(n, o, r), () => t.removeEventListener(n, o, r);
    }),
  nb = (e, t) => {
    const n = () => {},
      r = (s) => typeof s[0] == "function";
    return (s) => {
      const o = (...i) => {
        const l = s(r(i) ? t({ next: i[0] }) : t(...i));
        return l !== void 0 ? l : n;
      };
      return (
        (o[Symbol.observable] = () => ({
          subscribe: (...i) => ({ unsubscribe: o(...i) }),
        })),
        e(o)
      );
    };
  },
  rb = nb(JC, eb),
  Zy = tb(rb);
/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var sb = (e, t) => {
  if (typeof e != "string") throw new TypeError("expected a string");
  return e
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\W/g, (n) => (/[À-ž]/.test(n) ? n : "-"))
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, (n) => (t && t.condense ? "-" : n))
    .toLowerCase();
};
const ob = ul(sb);
var Qy = { exports: {} };
(function (e) {
  var t = function (n) {
    var r,
      s,
      o = /\w+/.exec(n);
    if (o) s = o[0];
    else return "an";
    var i = s.toLowerCase(),
      l = ["honest", "hour", "hono"];
    for (r in l) if (i.indexOf(l[r]) == 0) return "an";
    if (i.length == 1) return "aedhilmnorsx".indexOf(i) >= 0 ? "an" : "a";
    if (
      s.match(
        /(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/
      )
    )
      return "an";
    var c = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
    for (r = 0; r < c.length; r++) if (i.match(c[r])) return "a";
    return s.match(/^U[NK][AIEO]/)
      ? "a"
      : s == s.toUpperCase()
      ? "aedhilmnorsx".indexOf(i[0]) >= 0
        ? "an"
        : "a"
      : "aeiou".indexOf(i[0]) >= 0 ||
        i.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)
      ? "an"
      : "a";
  };
  e.exports = t;
})(Qy);
var ib = Qy.exports;
const ab = ul(ib),
  bm = (e, t) =>
    t === void 0
      ? e
      : t.reduce((n, r) => {
          if (r === "capitalize") {
            const s = n.charAt(0).toUpperCase(),
              o = n.slice(1);
            return `${s}${o}`;
          }
          return r === "dashify"
            ? ob(n)
            : r === "prependIndefiniteArticle"
            ? `${ab(n)} ${n}`
            : n;
        }, e),
  lb = (e) => {
    const t = e.name + e.modifiers.map((n) => `\\.${n}\\(\\)`).join("");
    return new RegExp(`\\$\\{${t}}`, "g");
  },
  km = (e, t) => {
    const n = /\${([^.}]+)((\.[^(]+\(\))*)}/g,
      r = [];
    let s = n.exec(e);
    for (; s !== null; ) {
      const i = { modifiers: [], name: s[1] };
      if (s[3] !== void 0) {
        const l = /\.[^(]+\(\)/g;
        let c = l.exec(s[2]);
        for (; c !== null; )
          i.modifiers.push(c[0].slice(1, -2)), (c = l.exec(s[2]));
      }
      r.push(i), (s = n.exec(e));
    }
    const o = r.reduce(
      (i, l) =>
        i
          .map((c) =>
            typeof c == "string"
              ? c
                  .split(lb(l))
                  .reduce(
                    (u, f, d) =>
                      d === 0
                        ? [f]
                        : l.name in t
                        ? [...u, bm(t[l.name], l.modifiers), f]
                        : [...u, (p) => bm(p[l.name], l.modifiers), f],
                    []
                  )
              : [c]
          )
          .reduce((c, u) => [...c, ...u], []),
      [e]
    );
    return (i) =>
      o
        .reduce((l, c) => (typeof c == "string" ? [...l, c] : [...l, c(i)]), [])
        .join("");
  },
  ec = (e, t = {}) => {
    const n = e.code === void 0 ? void 0 : km(e.code, t),
      r = e.message === void 0 ? void 0 : km(e.message, t);
    function s(o = {}, i) {
      const l =
          i === void 0 &&
          (o instanceof Error ||
            (o.code !== void 0 && o.code.slice(-9) === "Exception")),
        { cause: c, missingParameters: u } = l
          ? { cause: o, missingParameters: {} }
          : { cause: i, missingParameters: o },
        f = r === void 0 ? new Error() : new Error(r(u));
      return (
        c !== null && (f.cause = c),
        n !== void 0 && (f.code = n(u)),
        e.status !== void 0 && (f.status = e.status),
        f
      );
    }
    return s;
  },
  tc = {
    INTERNAL_ERROR: -32603,
    INVALID_PARAMS: -32602,
    METHOD_NOT_FOUND: -32601,
  };
ec({
  message: 'The requested method called "${method}" is not supported.',
  status: tc.METHOD_NOT_FOUND,
});
ec({
  message:
    'The handler of the method called "${method}" returned no required result.',
  status: tc.INTERNAL_ERROR,
});
ec({
  message:
    'The handler of the method called "${method}" returned an unexpected result.',
  status: tc.INTERNAL_ERROR,
});
ec({
  message:
    'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
  status: tc.INVALID_PARAMS,
});
const cb = (e, t, n) => async (r) => {
    const s = new e([n], { type: "application/javascript; charset=utf-8" }),
      o = t.createObjectURL(s);
    try {
      await r(o);
    } finally {
      t.revokeObjectURL(o);
    }
  },
  ub =
    (e) =>
    ({ data: t }) => {
      const { id: n } = t;
      if (n !== null) {
        const r = e.get(n);
        if (r !== void 0) {
          const { reject: s, resolve: o } = r;
          e.delete(n),
            t.error === void 0 ? o(t.result) : s(new Error(t.error.message));
        }
      }
    },
  db =
    (e) =>
    (t, n) =>
    (r, s = []) =>
      new Promise((o, i) => {
        const l = e(t);
        t.set(l, { reject: i, resolve: o }), n.postMessage({ id: l, ...r }, s);
      }),
  fb =
    (e, t, n, r) =>
    (s, o, i = {}) => {
      const l = new s(o, "recorder-audio-worklet-processor", {
          ...i,
          channelCountMode: "explicit",
          numberOfInputs: 1,
          numberOfOutputs: 0,
        }),
        c = new Map(),
        u = t(c, l.port),
        f = n(l.port, "message")(e(c));
      l.port.start();
      let d = "inactive";
      return (
        Object.defineProperties(l, {
          pause: {
            get() {
              return async () => (
                r(["recording"], d), (d = "paused"), u({ method: "pause" })
              );
            },
          },
          port: {
            get() {
              throw new Error(
                "The port of a RecorderAudioWorkletNode can't be accessed."
              );
            },
          },
          record: {
            get() {
              return async (p) => (
                r(["inactive"], d),
                (d = "recording"),
                u({ method: "record", params: { encoderPort: p } }, [p])
              );
            },
          },
          resume: {
            get() {
              return async () => (
                r(["paused"], d), (d = "recording"), u({ method: "resume" })
              );
            },
          },
          stop: {
            get() {
              return async () => {
                r(["paused", "recording"], d), (d = "stopped");
                try {
                  await u({ method: "stop" });
                } finally {
                  f();
                }
              };
            },
          },
        }),
        l
      );
    },
  pb = (e, t) => {
    if (!e.includes(t))
      throw new Error(
        `Expected the state to be ${e
          .map((n) => `"${n}"`)
          .join(" or ")} but it was "${t}".`
      );
  },
  hb =
    '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();',
  mb = cb(Blob, URL, hb),
  gb = fb(ub, db(XC), Zy, pb),
  jm = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "exponentialRampToValue",
    value: e,
  }),
  Nm = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "linearRampToValue",
    value: e,
  }),
  Sd = (e, t) => ({ startTime: t, type: "setValue", value: e }),
  Yy = (e, t, n) => ({
    duration: n,
    startTime: t,
    type: "setValueCurve",
    values: e,
  }),
  Xy = (e, t, { startTime: n, target: r, timeConstant: s }) =>
    r + (t - r) * Math.exp((n - e) / s),
  Cs = (e) => e.type === "exponentialRampToValue",
  sl = (e) => e.type === "linearRampToValue",
  Qn = (e) => Cs(e) || sl(e),
  Xf = (e) => e.type === "setValue",
  _n = (e) => e.type === "setValueCurve",
  ol = (e, t, n, r) => {
    const s = e[t];
    return s === void 0
      ? r
      : Qn(s) || Xf(s)
      ? s.value
      : _n(s)
      ? s.values[s.values.length - 1]
      : Xy(n, ol(e, t - 1, s.startTime, r), s);
  },
  Em = (e, t, n, r, s) =>
    n === void 0
      ? [r.insertTime, s]
      : Qn(n)
      ? [n.endTime, n.value]
      : Xf(n)
      ? [n.startTime, n.value]
      : _n(n)
      ? [n.startTime + n.duration, n.values[n.values.length - 1]]
      : [n.startTime, ol(e, t - 1, n.startTime, s)],
  Cd = (e) => e.type === "cancelAndHold",
  bd = (e) => e.type === "cancelScheduledValues",
  Gn = (e) =>
    Cd(e) || bd(e) ? e.cancelTime : Cs(e) || sl(e) ? e.endTime : e.startTime,
  Tm = (e, t, n, { endTime: r, value: s }) =>
    n === s
      ? s
      : (0 < n && 0 < s) || (n < 0 && s < 0)
      ? n * (s / n) ** ((e - t) / (r - t))
      : 0,
  _m = (e, t, n, { endTime: r, value: s }) => n + ((e - t) / (r - t)) * (s - n),
  yb = (e, t) => {
    const n = Math.floor(t),
      r = Math.ceil(t);
    return n === r ? e[n] : (1 - (t - n)) * e[n] + (1 - (r - t)) * e[r];
  },
  vb = (e, { duration: t, startTime: n, values: r }) => {
    const s = ((e - n) / t) * (r.length - 1);
    return yb(r, s);
  },
  ea = (e) => e.type === "setTarget";
class xb {
  constructor(t) {
    (this._automationEvents = []),
      (this._currenTime = 0),
      (this._defaultValue = t);
  }
  [Symbol.iterator]() {
    return this._automationEvents[Symbol.iterator]();
  }
  add(t) {
    const n = Gn(t);
    if (Cd(t) || bd(t)) {
      const r = this._automationEvents.findIndex((o) =>
          bd(t) && _n(o) ? o.startTime + o.duration >= n : Gn(o) >= n
        ),
        s = this._automationEvents[r];
      if (
        (r !== -1 &&
          (this._automationEvents = this._automationEvents.slice(0, r)),
        Cd(t))
      ) {
        const o = this._automationEvents[this._automationEvents.length - 1];
        if (s !== void 0 && Qn(s)) {
          if (o !== void 0 && ea(o))
            throw new Error("The internal list is malformed.");
          const i =
              o === void 0
                ? s.insertTime
                : _n(o)
                ? o.startTime + o.duration
                : Gn(o),
            l =
              o === void 0
                ? this._defaultValue
                : _n(o)
                ? o.values[o.values.length - 1]
                : o.value,
            c = Cs(s) ? Tm(n, i, l, s) : _m(n, i, l, s),
            u = Cs(s) ? jm(c, n, this._currenTime) : Nm(c, n, this._currenTime);
          this._automationEvents.push(u);
        }
        if (
          (o !== void 0 &&
            ea(o) &&
            this._automationEvents.push(Sd(this.getValue(n), n)),
          o !== void 0 && _n(o) && o.startTime + o.duration > n)
        ) {
          const i = n - o.startTime,
            l = (o.values.length - 1) / o.duration,
            c = Math.max(2, 1 + Math.ceil(i * l)),
            u = (i / (c - 1)) * l,
            f = o.values.slice(0, c);
          if (u < 1)
            for (let d = 1; d < c; d += 1) {
              const p = (u * d) % 1;
              f[d] = o.values[d - 1] * (1 - p) + o.values[d] * p;
            }
          this._automationEvents[this._automationEvents.length - 1] = Yy(
            f,
            o.startTime,
            i
          );
        }
      }
    } else {
      const r = this._automationEvents.findIndex((i) => Gn(i) > n),
        s =
          r === -1
            ? this._automationEvents[this._automationEvents.length - 1]
            : this._automationEvents[r - 1];
      if (s !== void 0 && _n(s) && Gn(s) + s.duration > n) return !1;
      const o = Cs(t)
        ? jm(t.value, t.endTime, this._currenTime)
        : sl(t)
        ? Nm(t.value, n, this._currenTime)
        : t;
      if (r === -1) this._automationEvents.push(o);
      else {
        if (_n(t) && n + t.duration > Gn(this._automationEvents[r])) return !1;
        this._automationEvents.splice(r, 0, o);
      }
    }
    return !0;
  }
  flush(t) {
    const n = this._automationEvents.findIndex((r) => Gn(r) > t);
    if (n > 1) {
      const r = this._automationEvents.slice(n - 1),
        s = r[0];
      ea(s) &&
        r.unshift(
          Sd(
            ol(this._automationEvents, n - 2, s.startTime, this._defaultValue),
            s.startTime
          )
        ),
        (this._automationEvents = r);
    }
  }
  getValue(t) {
    if (this._automationEvents.length === 0) return this._defaultValue;
    const n = this._automationEvents.findIndex((i) => Gn(i) > t),
      r = this._automationEvents[n],
      s = (n === -1 ? this._automationEvents.length : n) - 1,
      o = this._automationEvents[s];
    if (o !== void 0 && ea(o) && (r === void 0 || !Qn(r) || r.insertTime > t))
      return Xy(
        t,
        ol(this._automationEvents, s - 1, o.startTime, this._defaultValue),
        o
      );
    if (o !== void 0 && Xf(o) && (r === void 0 || !Qn(r))) return o.value;
    if (
      o !== void 0 &&
      _n(o) &&
      (r === void 0 || !Qn(r) || o.startTime + o.duration > t)
    )
      return t < o.startTime + o.duration
        ? vb(t, o)
        : o.values[o.values.length - 1];
    if (o !== void 0 && Qn(o) && (r === void 0 || !Qn(r))) return o.value;
    if (r !== void 0 && Cs(r)) {
      const [i, l] = Em(this._automationEvents, s, o, r, this._defaultValue);
      return Tm(t, i, l, r);
    }
    if (r !== void 0 && sl(r)) {
      const [i, l] = Em(this._automationEvents, s, o, r, this._defaultValue);
      return _m(t, i, l, r);
    }
    return this._defaultValue;
  }
}
const wb = (e) => ({ cancelTime: e, type: "cancelAndHold" }),
  Sb = (e) => ({ cancelTime: e, type: "cancelScheduledValues" }),
  Cb = (e, t) => ({ endTime: t, type: "exponentialRampToValue", value: e }),
  bb = (e, t) => ({ endTime: t, type: "linearRampToValue", value: e }),
  kb = (e, t, n) => ({
    startTime: t,
    target: e,
    timeConstant: n,
    type: "setTarget",
  }),
  jb = () => new DOMException("", "AbortError"),
  Nb =
    (e) =>
    (t, n, [r, s, o], i) => {
      e(t[s], [n, r, o], (l) => l[0] === n && l[1] === r, i);
    },
  Eb = (e) => (t, n, r) => {
    const s = [];
    for (let o = 0; o < r.numberOfInputs; o += 1) s.push(new Set());
    e.set(t, {
      activeInputs: s,
      outputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n,
    });
  },
  Tb = (e) => (t, n) => {
    e.set(t, {
      activeInputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n,
    });
  },
  zs = new WeakSet(),
  Jy = new WeakMap(),
  e2 = new WeakMap(),
  t2 = new WeakMap(),
  n2 = new WeakMap(),
  r2 = new WeakMap(),
  s2 = new WeakMap(),
  kd = new WeakMap(),
  jd = new WeakMap(),
  Nd = new WeakMap(),
  o2 = {
    construct() {
      return o2;
    },
  },
  _b = (e) => {
    try {
      const t = new Proxy(e, o2);
      new t();
    } catch {
      return !1;
    }
    return !0;
  },
  Rm =
    /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
  Am = (e, t) => {
    const n = [];
    let r = e.replace(/^[\s]+/, ""),
      s = r.match(Rm);
    for (; s !== null; ) {
      const o = s[1].slice(1, -1),
        i = s[0]
          .replace(/([\s]+)?;?$/, "")
          .replace(o, new URL(o, t).toString());
      n.push(i),
        (r = r.slice(s[0].length).replace(/^[\s]+/, "")),
        (s = r.match(Rm));
    }
    return [n.join(";"), r];
  },
  Pm = (e) => {
    if (e !== void 0 && !Array.isArray(e))
      throw new TypeError(
        "The parameterDescriptors property of given value for processorCtor is not an array."
      );
  },
  Mm = (e) => {
    if (!_b(e))
      throw new TypeError(
        "The given value for processorCtor should be a constructor."
      );
    if (e.prototype === null || typeof e.prototype != "object")
      throw new TypeError(
        "The given value for processorCtor should have a prototype."
      );
  },
  Rb = (e, t, n, r, s, o, i, l, c, u, f, d, p) => {
    let y = 0;
    return (h, m, S = { credentials: "omit" }) => {
      const g = f.get(h);
      if (g !== void 0 && g.has(m)) return Promise.resolve();
      const x = u.get(h);
      if (x !== void 0) {
        const j = x.get(m);
        if (j !== void 0) return j;
      }
      const w = o(h),
        k =
          w.audioWorklet === void 0
            ? s(m)
                .then(([j, b]) => {
                  const [C, N] = Am(j, b),
                    v = `${C};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${N}
})})(window,'_AWGS')`;
                  return n(v);
                })
                .then(() => {
                  const j = p._AWGS.pop();
                  if (j === void 0) throw new SyntaxError();
                  r(w.currentTime, w.sampleRate, () =>
                    j(
                      class {},
                      void 0,
                      (b, C) => {
                        if (b.trim() === "") throw t();
                        const N = jd.get(w);
                        if (N !== void 0) {
                          if (N.has(b)) throw t();
                          Mm(C), Pm(C.parameterDescriptors), N.set(b, C);
                        } else
                          Mm(C),
                            Pm(C.parameterDescriptors),
                            jd.set(w, new Map([[b, C]]));
                      },
                      w.sampleRate,
                      void 0,
                      void 0
                    )
                  );
                })
            : Promise.all([s(m), Promise.resolve(e(d, d))]).then(
                ([[j, b], C]) => {
                  const N = y + 1;
                  y = N;
                  const [v, _] = Am(j, b),
                    B = `${v};((AudioWorkletProcessor,registerProcessor)=>{${_}
})(${
                      C
                        ? "AudioWorkletProcessor"
                        : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"
                    },(n,p)=>registerProcessor(n,class extends p{${
                      C
                        ? ""
                        : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"
                    }process(i,o,p){${
                      C
                        ? ""
                        : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"
                    }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${N}',class extends AudioWorkletProcessor{process(){return !1}})`,
                    R = new Blob([B], {
                      type: "application/javascript; charset=utf-8",
                    }),
                    F = URL.createObjectURL(R);
                  return w.audioWorklet
                    .addModule(F, S)
                    .then(() => {
                      if (l(w)) return w;
                      const $ = i(w);
                      return $.audioWorklet.addModule(F, S).then(() => $);
                    })
                    .then(($) => {
                      if (c === null) throw new SyntaxError();
                      try {
                        new c($, `__sac${N}`);
                      } catch {
                        throw new SyntaxError();
                      }
                    })
                    .finally(() => URL.revokeObjectURL(F));
                }
              );
      return (
        x === void 0 ? u.set(h, new Map([[m, k]])) : x.set(m, k),
        k
          .then(() => {
            const j = f.get(h);
            j === void 0 ? f.set(h, new Set([m])) : j.add(m);
          })
          .finally(() => {
            const j = u.get(h);
            j !== void 0 && j.delete(m);
          }),
        k
      );
    };
  },
  an = (e, t) => {
    const n = e.get(t);
    if (n === void 0)
      throw new Error("A value with the given key could not be found.");
    return n;
  },
  nc = (e, t) => {
    const n = Array.from(e).filter(t);
    if (n.length > 1) throw Error("More than one element was found.");
    if (n.length === 0) throw Error("No element was found.");
    const [r] = n;
    return e.delete(r), r;
  },
  i2 = (e, t, n, r) => {
    const s = an(e, t),
      o = nc(s, (i) => i[0] === n && i[1] === r);
    return s.size === 0 && e.delete(t), o;
  },
  yi = (e) => an(s2, e),
  ti = (e) => {
    if (zs.has(e)) throw new Error("The AudioNode is already stored.");
    zs.add(e), yi(e).forEach((t) => t(!0));
  },
  a2 = (e) => "port" in e,
  rc = (e) => {
    if (!zs.has(e)) throw new Error("The AudioNode is not stored.");
    zs.delete(e), yi(e).forEach((t) => t(!1));
  },
  Ed = (e, t) => {
    !a2(e) && t.every((n) => n.size === 0) && rc(e);
  },
  Ab = (e, t, n, r, s, o, i, l, c, u, f, d, p) => {
    const y = new WeakMap();
    return (h, m, S, g, x) => {
      const { activeInputs: w, passiveInputs: k } = o(m),
        { outputs: j } = o(h),
        b = l(h),
        C = (N) => {
          const v = c(m),
            _ = c(h);
          if (N) {
            const P = i2(k, h, S, g);
            e(w, h, P, !1), !x && !d(h) && n(_, v, S, g), p(m) && ti(m);
          } else {
            const P = r(w, h, S, g);
            t(k, g, P, !1), !x && !d(h) && s(_, v, S, g);
            const U = i(m);
            if (U === 0) f(m) && Ed(m, w);
            else {
              const D = y.get(m);
              D !== void 0 && clearTimeout(D),
                y.set(
                  m,
                  setTimeout(() => {
                    f(m) && Ed(m, w);
                  }, U * 1e3)
                );
            }
          }
        };
      return u(j, [m, S, g], (N) => N[0] === m && N[1] === S && N[2] === g, !0)
        ? (b.add(C), f(h) ? e(w, h, [S, g, C], !0) : t(k, g, [h, S, C], !0), !0)
        : !1;
    };
  },
  Pb =
    (e) =>
    (t, n, [r, s, o], i) => {
      const l = t.get(r);
      l === void 0
        ? t.set(r, new Set([[s, n, o]]))
        : e(l, [s, n, o], (c) => c[0] === s && c[1] === n, i);
    },
  Mb = (e) => (t, n) => {
    const r = e(t, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: 0,
    });
    n.connect(r).connect(t.destination);
    const s = () => {
      n.removeEventListener("ended", s), n.disconnect(r), r.disconnect();
    };
    n.addEventListener("ended", s);
  },
  Lb = (e) => (t, n) => {
    e(t).add(n);
  },
  Jf = (e, t) => e.context === t,
  Lm = (e) => {
    try {
      e.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return !1;
    }
    return !0;
  },
  Jr = () => new DOMException("", "IndexSizeError"),
  Ob = (e) => {
    e.getChannelData = ((t) => (n) => {
      try {
        return t.call(e, n);
      } catch (r) {
        throw r.code === 12 ? Jr() : r;
      }
    })(e.getChannelData);
  },
  Bb = { numberOfChannels: 1 },
  Ib = (e, t, n, r, s, o, i, l) => {
    let c = null;
    return class l2 {
      constructor(f) {
        if (s === null)
          throw new Error(
            "Missing the native OfflineAudioContext constructor."
          );
        const {
          length: d,
          numberOfChannels: p,
          sampleRate: y,
        } = { ...Bb, ...f };
        c === null && (c = new s(1, 1, 44100));
        const h =
          r !== null && t(o, o)
            ? new r({ length: d, numberOfChannels: p, sampleRate: y })
            : c.createBuffer(p, d, y);
        if (h.numberOfChannels === 0) throw n();
        return (
          typeof h.copyFromChannel != "function"
            ? (i(h), Ob(h))
            : t(Lm, () => Lm(h)) || l(h),
          e.add(h),
          h
        );
      }
      static [Symbol.hasInstance](f) {
        return (
          (f !== null &&
            typeof f == "object" &&
            Object.getPrototypeOf(f) === l2.prototype) ||
          e.has(f)
        );
      }
    };
  },
  vi = -34028234663852886e22,
  sc = -vi,
  fr = (e) => zs.has(e),
  Ub = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    loop: !1,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1,
  },
  $b = (e, t, n, r, s, o, i, l) =>
    class extends e {
      constructor(u, f) {
        const d = o(u),
          p = { ...Ub, ...f },
          y = s(d, p),
          h = i(d),
          m = h ? t() : null;
        super(u, !1, y, m),
          (this._audioBufferSourceNodeRenderer = m),
          (this._isBufferNullified = !1),
          (this._isBufferSet = p.buffer !== null),
          (this._nativeAudioBufferSourceNode = y),
          (this._onended = null),
          (this._playbackRate = n(this, h, y.playbackRate, sc, vi));
      }
      get buffer() {
        return this._isBufferNullified
          ? null
          : this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(u) {
        if (((this._nativeAudioBufferSourceNode.buffer = u), u !== null)) {
          if (this._isBufferSet) throw r();
          this._isBufferSet = !0;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(u) {
        this._nativeAudioBufferSourceNode.loop = u;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(u) {
        this._nativeAudioBufferSourceNode.loopEnd = u;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(u) {
        this._nativeAudioBufferSourceNode.loopStart = u;
      }
      get onended() {
        return this._onended;
      }
      set onended(u) {
        const f = typeof u == "function" ? l(this, u) : null;
        this._nativeAudioBufferSourceNode.onended = f;
        const d = this._nativeAudioBufferSourceNode.onended;
        this._onended = d !== null && d === f ? u : d;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(u = 0, f = 0, d) {
        if (
          (this._nativeAudioBufferSourceNode.start(u, f, d),
          this._audioBufferSourceNodeRenderer !== null &&
            (this._audioBufferSourceNodeRenderer.start =
              d === void 0 ? [u, f] : [u, f, d]),
          this.context.state !== "closed")
        ) {
          ti(this);
          const p = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", p),
              fr(this) && rc(this);
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", p);
        }
      }
      stop(u = 0) {
        this._nativeAudioBufferSourceNode.stop(u),
          this._audioBufferSourceNodeRenderer !== null &&
            (this._audioBufferSourceNodeRenderer.stop = u);
      }
    },
  Fb = (e, t, n, r, s) => () => {
    const o = new WeakMap();
    let i = null,
      l = null;
    const c = async (u, f) => {
      let d = n(u);
      const p = Jf(d, f);
      if (!p) {
        const y = {
          buffer: d.buffer,
          channelCount: d.channelCount,
          channelCountMode: d.channelCountMode,
          channelInterpretation: d.channelInterpretation,
          loop: d.loop,
          loopEnd: d.loopEnd,
          loopStart: d.loopStart,
          playbackRate: d.playbackRate.value,
        };
        (d = t(f, y)), i !== null && d.start(...i), l !== null && d.stop(l);
      }
      return (
        o.set(f, d),
        p
          ? await e(f, u.playbackRate, d.playbackRate)
          : await r(f, u.playbackRate, d.playbackRate),
        await s(u, f, d),
        d
      );
    };
    return {
      set start(u) {
        i = u;
      },
      set stop(u) {
        l = u;
      },
      render(u, f) {
        const d = o.get(f);
        return d !== void 0 ? Promise.resolve(d) : c(u, f);
      },
    };
  },
  Db = (e) => "playbackRate" in e,
  Vb = (e) => "frequency" in e && "gain" in e,
  zb = (e) => "offset" in e,
  Wb = (e) => !("frequency" in e) && "gain" in e,
  Hb = (e) => "detune" in e && "frequency" in e && !("gain" in e),
  qb = (e) => "pan" in e,
  at = (e) => an(Jy, e),
  xi = (e) => an(t2, e),
  Td = (e, t) => {
    const { activeInputs: n } = at(e);
    n.forEach((s) =>
      s.forEach(([o]) => {
        t.includes(e) || Td(o, [...t, e]);
      })
    );
    const r = Db(e)
      ? [e.playbackRate]
      : a2(e)
      ? Array.from(e.parameters.values())
      : Vb(e)
      ? [e.Q, e.detune, e.frequency, e.gain]
      : zb(e)
      ? [e.offset]
      : Wb(e)
      ? [e.gain]
      : Hb(e)
      ? [e.detune, e.frequency]
      : qb(e)
      ? [e.pan]
      : [];
    for (const s of r) {
      const o = xi(s);
      o !== void 0 && o.activeInputs.forEach(([i]) => Td(i, t));
    }
    fr(e) && rc(e);
  },
  Gb = (e) => {
    Td(e.destination, []);
  },
  Kb = (e) =>
    e === void 0 ||
    typeof e == "number" ||
    (typeof e == "string" &&
      (e === "balanced" || e === "interactive" || e === "playback")),
  Zb = (e, t, n, r, s, o, i, l) =>
    class extends e {
      constructor(u, f) {
        const d = o(u),
          p = i(d),
          y = s(d, f, p),
          h = p ? t(l) : null;
        super(u, !1, y, h),
          (this._isNodeOfNativeOfflineAudioContext = p),
          (this._nativeAudioDestinationNode = y);
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw r();
        if (u > this._nativeAudioDestinationNode.maxChannelCount) throw n();
        this._nativeAudioDestinationNode.channelCount = u;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw r();
        this._nativeAudioDestinationNode.channelCountMode = u;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    },
  Qb = (e) => {
    const t = new WeakMap(),
      n = async (r, s) => {
        const o = s.destination;
        return t.set(s, o), await e(r, s, o), o;
      };
    return {
      render(r, s) {
        const o = t.get(s);
        return o !== void 0 ? Promise.resolve(o) : n(r, s);
      },
    };
  },
  Yb = (e, t, n, r, s, o, i, l) => (c, u) => {
    const f = u.listener,
      d = () => {
        const j = new Float32Array(1),
          b = t(u, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 9,
          }),
          C = i(u);
        let N = !1,
          v = [0, 0, -1, 0, 1, 0],
          _ = [0, 0, 0];
        const P = () => {
            if (N) return;
            N = !0;
            const R = r(u, 256, 9, 0);
            (R.onaudioprocess = ({ inputBuffer: F }) => {
              const $ = [
                o(F, j, 0),
                o(F, j, 1),
                o(F, j, 2),
                o(F, j, 3),
                o(F, j, 4),
                o(F, j, 5),
              ];
              $.some((E, O) => E !== v[O]) && (f.setOrientation(...$), (v = $));
              const M = [o(F, j, 6), o(F, j, 7), o(F, j, 8)];
              M.some((E, O) => E !== _[O]) && (f.setPosition(...M), (_ = M));
            }),
              b.connect(R);
          },
          U = (R) => (F) => {
            F !== v[R] && ((v[R] = F), f.setOrientation(...v));
          },
          D = (R) => (F) => {
            F !== _[R] && ((_[R] = F), f.setPosition(..._));
          },
          B = (R, F, $) => {
            const M = n(u, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              offset: F,
            });
            M.connect(b, 0, R),
              M.start(),
              Object.defineProperty(M.offset, "defaultValue", {
                get() {
                  return F;
                },
              });
            const E = e({ context: c }, C, M.offset, sc, vi);
            return (
              l(
                E,
                "value",
                (O) => () => O.call(E),
                (O) => (z) => {
                  try {
                    O.call(E, z);
                  } catch (K) {
                    if (K.code !== 9) throw K;
                  }
                  P(), C && $(z);
                }
              ),
              (E.cancelAndHoldAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.cancelAndHoldAtTime)),
              (E.cancelScheduledValues = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.cancelScheduledValues)),
              (E.exponentialRampToValueAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.exponentialRampToValueAtTime)),
              (E.linearRampToValueAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.linearRampToValueAtTime)),
              (E.setTargetAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.setTargetAtTime)),
              (E.setValueAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.setValueAtTime)),
              (E.setValueCurveAtTime = ((O) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const K = O.apply(E, z);
                      return P(), K;
                    })(E.setValueCurveAtTime)),
              E
            );
          };
        return {
          forwardX: B(0, 0, U(0)),
          forwardY: B(1, 0, U(1)),
          forwardZ: B(2, -1, U(2)),
          positionX: B(6, 0, D(0)),
          positionY: B(7, 0, D(1)),
          positionZ: B(8, 0, D(2)),
          upX: B(3, 0, U(3)),
          upY: B(4, 1, U(4)),
          upZ: B(5, 0, U(5)),
        };
      },
      {
        forwardX: p,
        forwardY: y,
        forwardZ: h,
        positionX: m,
        positionY: S,
        positionZ: g,
        upX: x,
        upY: w,
        upZ: k,
      } = f.forwardX === void 0 ? d() : f;
    return {
      get forwardX() {
        return p;
      },
      get forwardY() {
        return y;
      },
      get forwardZ() {
        return h;
      },
      get positionX() {
        return m;
      },
      get positionY() {
        return S;
      },
      get positionZ() {
        return g;
      },
      get upX() {
        return x;
      },
      get upY() {
        return w;
      },
      get upZ() {
        return k;
      },
    };
  },
  il = (e) => "context" in e,
  wi = (e) => il(e[0]),
  es = (e, t, n, r) => {
    for (const s of e)
      if (n(s)) {
        if (r) return !1;
        throw Error("The set contains at least one similar element.");
      }
    return e.add(t), !0;
  },
  Om = (e, t, [n, r], s) => {
    es(e, [t, n, r], (o) => o[0] === t && o[1] === n, s);
  },
  Bm = (e, [t, n, r], s) => {
    const o = e.get(t);
    o === void 0
      ? e.set(t, new Set([[n, r]]))
      : es(o, [n, r], (i) => i[0] === n, s);
  },
  c2 = (e) => "inputs" in e,
  _d = (e, t, n, r) => {
    if (c2(t)) {
      const s = t.inputs[r];
      return e.connect(s, n, 0), [s, n, 0];
    }
    return e.connect(t, n, r), [t, n, r];
  },
  u2 = (e, t, n) => {
    for (const r of e) if (r[0] === t && r[1] === n) return e.delete(r), r;
    return null;
  },
  Xb = (e, t, n) => nc(e, (r) => r[0] === t && r[1] === n),
  d2 = (e, t) => {
    if (!yi(e).delete(t))
      throw new Error("Missing the expected event listener.");
  },
  f2 = (e, t, n) => {
    const r = an(e, t),
      s = nc(r, (o) => o[0] === n);
    return r.size === 0 && e.delete(t), s;
  },
  Rd = (e, t, n, r) => {
    c2(t) ? e.disconnect(t.inputs[r], n, 0) : e.disconnect(t, n, r);
  },
  qt = (e) => an(e2, e),
  ni = (e) => an(n2, e),
  Vr = (e) => kd.has(e),
  ja = (e) => !zs.has(e),
  Im = (e, t) =>
    new Promise((n) => {
      if (t !== null) n(!0);
      else {
        const r = e.createScriptProcessor(256, 1, 1),
          s = e.createGain(),
          o = e.createBuffer(1, 2, 44100),
          i = o.getChannelData(0);
        (i[0] = 1), (i[1] = 1);
        const l = e.createBufferSource();
        (l.buffer = o),
          (l.loop = !0),
          l.connect(r).connect(e.destination),
          l.connect(s),
          l.disconnect(s),
          (r.onaudioprocess = (c) => {
            const u = c.inputBuffer.getChannelData(0);
            Array.prototype.some.call(u, (f) => f === 1) ? n(!0) : n(!1),
              l.stop(),
              (r.onaudioprocess = null),
              l.disconnect(r),
              r.disconnect(e.destination);
          }),
          l.start();
      }
    }),
  Jc = (e, t) => {
    const n = new Map();
    for (const r of e)
      for (const s of r) {
        const o = n.get(s);
        n.set(s, o === void 0 ? 1 : o + 1);
      }
    n.forEach((r, s) => t(s, r));
  },
  al = (e) => "context" in e,
  Jb = (e) => {
    const t = new Map();
    (e.connect = (
      (n) =>
      (r, s = 0, o = 0) => {
        const i = al(r) ? n(r, s, o) : n(r, s),
          l = t.get(r);
        return (
          l === void 0
            ? t.set(r, [{ input: o, output: s }])
            : l.every((c) => c.input !== o || c.output !== s) &&
              l.push({ input: o, output: s }),
          i
        );
      }
    )(e.connect.bind(e))),
      (e.disconnect = ((n) => (r, s, o) => {
        if ((n.apply(e), r === void 0)) t.clear();
        else if (typeof r == "number")
          for (const [i, l] of t) {
            const c = l.filter((u) => u.output !== r);
            c.length === 0 ? t.delete(i) : t.set(i, c);
          }
        else if (t.has(r))
          if (s === void 0) t.delete(r);
          else {
            const i = t.get(r);
            if (i !== void 0) {
              const l = i.filter(
                (c) => c.output !== s && (c.input !== o || o === void 0)
              );
              l.length === 0 ? t.delete(r) : t.set(r, l);
            }
          }
        for (const [i, l] of t)
          l.forEach((c) => {
            al(i) ? e.connect(i, c.output, c.input) : e.connect(i, c.output);
          });
      })(e.disconnect));
  },
  ek = (e, t, n, r) => {
    const { activeInputs: s, passiveInputs: o } = xi(t),
      { outputs: i } = at(e),
      l = yi(e),
      c = (u) => {
        const f = qt(e),
          d = ni(t);
        if (u) {
          const p = f2(o, e, n);
          Om(s, e, p, !1), !r && !Vr(e) && f.connect(d, n);
        } else {
          const p = Xb(s, e, n);
          Bm(o, p, !1), !r && !Vr(e) && f.disconnect(d, n);
        }
      };
    return es(i, [t, n], (u) => u[0] === t && u[1] === n, !0)
      ? (l.add(c), fr(e) ? Om(s, e, [n, c], !0) : Bm(o, [e, n, c], !0), !0)
      : !1;
  },
  tk = (e, t, n, r) => {
    const { activeInputs: s, passiveInputs: o } = at(t),
      i = u2(s[r], e, n);
    return i === null ? [i2(o, e, n, r)[2], !1] : [i[2], !0];
  },
  nk = (e, t, n) => {
    const { activeInputs: r, passiveInputs: s } = xi(t),
      o = u2(r, e, n);
    return o === null ? [f2(s, e, n)[1], !1] : [o[2], !0];
  },
  ep = (e, t, n, r, s) => {
    const [o, i] = tk(e, n, r, s);
    if (
      (o !== null && (d2(e, o), i && !t && !Vr(e) && Rd(qt(e), qt(n), r, s)),
      fr(n))
    ) {
      const { activeInputs: l } = at(n);
      Ed(n, l);
    }
  },
  tp = (e, t, n, r) => {
    const [s, o] = nk(e, n, r);
    s !== null && (d2(e, s), o && !t && !Vr(e) && qt(e).disconnect(ni(n), r));
  },
  rk = (e, t) => {
    const n = at(e),
      r = [];
    for (const s of n.outputs)
      wi(s) ? ep(e, t, ...s) : tp(e, t, ...s), r.push(s[0]);
    return n.outputs.clear(), r;
  },
  sk = (e, t, n) => {
    const r = at(e),
      s = [];
    for (const o of r.outputs)
      o[1] === n &&
        (wi(o) ? ep(e, t, ...o) : tp(e, t, ...o),
        s.push(o[0]),
        r.outputs.delete(o));
    return s;
  },
  ok = (e, t, n, r, s) => {
    const o = at(e);
    return Array.from(o.outputs)
      .filter(
        (i) =>
          i[0] === n &&
          (r === void 0 || i[1] === r) &&
          (s === void 0 || i[2] === s)
      )
      .map(
        (i) => (
          wi(i) ? ep(e, t, ...i) : tp(e, t, ...i), o.outputs.delete(i), i[0]
        )
      );
  },
  ik = (e, t, n, r, s, o, i, l, c, u, f, d, p, y, h, m) =>
    class extends u {
      constructor(g, x, w, k) {
        super(w), (this._context = g), (this._nativeAudioNode = w);
        const j = f(g);
        d(j) && n(Im, () => Im(j, m)) !== !0 && Jb(w),
          e2.set(this, w),
          s2.set(this, new Set()),
          g.state !== "closed" && x && ti(this),
          e(this, k, w);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(g) {
        this._nativeAudioNode.channelCount = g;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(g) {
        this._nativeAudioNode.channelCountMode = g;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(g) {
        this._nativeAudioNode.channelInterpretation = g;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      connect(g, x = 0, w = 0) {
        if (x < 0 || x >= this._nativeAudioNode.numberOfOutputs) throw s();
        const k = f(this._context),
          j = h(k);
        if (p(g) || y(g)) throw o();
        if (il(g)) {
          const N = qt(g);
          try {
            const _ = _d(this._nativeAudioNode, N, x, w),
              P = ja(this);
            (j || P) && this._nativeAudioNode.disconnect(..._),
              this.context.state !== "closed" && !P && ja(g) && ti(g);
          } catch (_) {
            throw _.code === 12 ? o() : _;
          }
          if (t(this, g, x, w, j)) {
            const _ = c([this], g);
            Jc(_, r(j));
          }
          return g;
        }
        const b = ni(g);
        if (b.name === "playbackRate" && b.maxValue === 1024) throw i();
        try {
          this._nativeAudioNode.connect(b, x),
            (j || ja(this)) && this._nativeAudioNode.disconnect(b, x);
        } catch (N) {
          throw N.code === 12 ? o() : N;
        }
        if (ek(this, g, x, j)) {
          const N = c([this], g);
          Jc(N, r(j));
        }
      }
      disconnect(g, x, w) {
        let k;
        const j = f(this._context),
          b = h(j);
        if (g === void 0) k = rk(this, b);
        else if (typeof g == "number") {
          if (g < 0 || g >= this.numberOfOutputs) throw s();
          k = sk(this, b, g);
        } else {
          if (
            (x !== void 0 && (x < 0 || x >= this.numberOfOutputs)) ||
            (il(g) && w !== void 0 && (w < 0 || w >= g.numberOfInputs))
          )
            throw s();
          if (((k = ok(this, b, g, x, w)), k.length === 0)) throw o();
        }
        for (const C of k) {
          const N = c([this], C);
          Jc(N, l);
        }
      }
    },
  ak =
    (e, t, n, r, s, o, i, l, c, u, f, d, p) =>
    (y, h, m, S = null, g = null) => {
      const x = m.value,
        w = new xb(x),
        k = h ? r(w) : null,
        j = {
          get defaultValue() {
            return x;
          },
          get maxValue() {
            return S === null ? m.maxValue : S;
          },
          get minValue() {
            return g === null ? m.minValue : g;
          },
          get value() {
            return m.value;
          },
          set value(b) {
            (m.value = b), j.setValueAtTime(b, y.context.currentTime);
          },
          cancelAndHoldAtTime(b) {
            if (typeof m.cancelAndHoldAtTime == "function")
              k === null && w.flush(y.context.currentTime),
                w.add(s(b)),
                m.cancelAndHoldAtTime(b);
            else {
              const C = Array.from(w).pop();
              k === null && w.flush(y.context.currentTime), w.add(s(b));
              const N = Array.from(w).pop();
              m.cancelScheduledValues(b),
                C !== N &&
                  N !== void 0 &&
                  (N.type === "exponentialRampToValue"
                    ? m.exponentialRampToValueAtTime(N.value, N.endTime)
                    : N.type === "linearRampToValue"
                    ? m.linearRampToValueAtTime(N.value, N.endTime)
                    : N.type === "setValue"
                    ? m.setValueAtTime(N.value, N.startTime)
                    : N.type === "setValueCurve" &&
                      m.setValueCurveAtTime(N.values, N.startTime, N.duration));
            }
            return j;
          },
          cancelScheduledValues(b) {
            return (
              k === null && w.flush(y.context.currentTime),
              w.add(o(b)),
              m.cancelScheduledValues(b),
              j
            );
          },
          exponentialRampToValueAtTime(b, C) {
            if (b === 0) throw new RangeError();
            if (!Number.isFinite(C) || C < 0) throw new RangeError();
            const N = y.context.currentTime;
            return (
              k === null && w.flush(N),
              Array.from(w).length === 0 &&
                (w.add(u(x, N)), m.setValueAtTime(x, N)),
              w.add(i(b, C)),
              m.exponentialRampToValueAtTime(b, C),
              j
            );
          },
          linearRampToValueAtTime(b, C) {
            const N = y.context.currentTime;
            return (
              k === null && w.flush(N),
              Array.from(w).length === 0 &&
                (w.add(u(x, N)), m.setValueAtTime(x, N)),
              w.add(l(b, C)),
              m.linearRampToValueAtTime(b, C),
              j
            );
          },
          setTargetAtTime(b, C, N) {
            return (
              k === null && w.flush(y.context.currentTime),
              w.add(c(b, C, N)),
              m.setTargetAtTime(b, C, N),
              j
            );
          },
          setValueAtTime(b, C) {
            return (
              k === null && w.flush(y.context.currentTime),
              w.add(u(b, C)),
              m.setValueAtTime(b, C),
              j
            );
          },
          setValueCurveAtTime(b, C, N) {
            const v = b instanceof Float32Array ? b : new Float32Array(b);
            if (d !== null && d.name === "webkitAudioContext") {
              const _ = C + N,
                P = y.context.sampleRate,
                U = Math.ceil(C * P),
                D = Math.floor(_ * P),
                B = D - U,
                R = new Float32Array(B);
              for (let $ = 0; $ < B; $ += 1) {
                const M = ((v.length - 1) / N) * ((U + $) / P - C),
                  E = Math.floor(M),
                  O = Math.ceil(M);
                R[$] =
                  E === O ? v[E] : (1 - (M - E)) * v[E] + (1 - (O - M)) * v[O];
              }
              k === null && w.flush(y.context.currentTime),
                w.add(f(R, C, N)),
                m.setValueCurveAtTime(R, C, N);
              const F = D / P;
              F < _ && p(j, R[R.length - 1], F), p(j, v[v.length - 1], _);
            } else
              k === null && w.flush(y.context.currentTime),
                w.add(f(v, C, N)),
                m.setValueCurveAtTime(v, C, N);
            return j;
          },
        };
      return n.set(j, m), t.set(j, y), e(j, k), j;
    },
  lk = (e) => ({
    replay(t) {
      for (const n of e)
        if (n.type === "exponentialRampToValue") {
          const { endTime: r, value: s } = n;
          t.exponentialRampToValueAtTime(s, r);
        } else if (n.type === "linearRampToValue") {
          const { endTime: r, value: s } = n;
          t.linearRampToValueAtTime(s, r);
        } else if (n.type === "setTarget") {
          const { startTime: r, target: s, timeConstant: o } = n;
          t.setTargetAtTime(s, r, o);
        } else if (n.type === "setValue") {
          const { startTime: r, value: s } = n;
          t.setValueAtTime(s, r);
        } else if (n.type === "setValueCurve") {
          const { duration: r, startTime: s, values: o } = n;
          t.setValueCurveAtTime(o, s, r);
        } else throw new Error("Can't apply an unknown automation.");
    },
  });
class p2 {
  constructor(t) {
    this._map = new Map(t);
  }
  get size() {
    return this._map.size;
  }
  entries() {
    return this._map.entries();
  }
  forEach(t, n = null) {
    return this._map.forEach((r, s) => t.call(n, r, s, this));
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.values();
  }
}
const ck = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {},
  },
  uk = (e, t, n, r, s, o, i, l, c, u, f, d, p, y) =>
    class extends t {
      constructor(m, S, g) {
        var x;
        const w = l(m),
          k = c(w),
          j = f({ ...ck, ...g });
        p(j);
        const b = jd.get(w),
          C = b == null ? void 0 : b.get(S),
          N =
            k || w.state !== "closed"
              ? w
              : (x = i(w)) !== null && x !== void 0
              ? x
              : w,
          v = s(N, k ? null : m.baseLatency, u, S, C, j),
          _ = k ? r(S, j, C) : null;
        super(m, !0, v, _);
        const P = [];
        v.parameters.forEach((D, B) => {
          const R = n(this, k, D);
          P.push([B, R]);
        }),
          (this._nativeAudioWorkletNode = v),
          (this._onprocessorerror = null),
          (this._parameters = new p2(P)),
          k && e(w, this);
        const { activeInputs: U } = o(this);
        d(v, U);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(m) {
        const S = typeof m == "function" ? y(this, m) : null;
        this._nativeAudioWorkletNode.onprocessorerror = S;
        const g = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = g !== null && g === S ? m : g;
      }
      get parameters() {
        return this._parameters === null
          ? this._nativeAudioWorkletNode.parameters
          : this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
function ll(e, t, n, r, s) {
  if (typeof e.copyFromChannel == "function")
    t[n].byteLength === 0 && (t[n] = new Float32Array(128)),
      e.copyFromChannel(t[n], r, s);
  else {
    const o = e.getChannelData(r);
    if (t[n].byteLength === 0) t[n] = o.slice(s, s + 128);
    else {
      const i = new Float32Array(
        o.buffer,
        s * Float32Array.BYTES_PER_ELEMENT,
        128
      );
      t[n].set(i);
    }
  }
}
const h2 = (e, t, n, r, s) => {
    typeof e.copyToChannel == "function"
      ? t[n].byteLength !== 0 && e.copyToChannel(t[n], r, s)
      : t[n].byteLength !== 0 && e.getChannelData(r).set(t[n], s);
  },
  cl = (e, t) => {
    const n = [];
    for (let r = 0; r < e; r += 1) {
      const s = [],
        o = typeof t == "number" ? t : t[r];
      for (let i = 0; i < o; i += 1) s.push(new Float32Array(128));
      n.push(s);
    }
    return n;
  },
  dk = (e, t) => {
    const n = an(Nd, e),
      r = qt(t);
    return an(n, r);
  },
  fk = async (e, t, n, r, s, o, i) => {
    const l = t === null ? Math.ceil(e.context.length / 128) * 128 : t.length,
      c = r.channelCount * r.numberOfInputs,
      u = s.reduce((S, g) => S + g, 0),
      f = u === 0 ? null : n.createBuffer(u, l, n.sampleRate);
    if (o === void 0) throw new Error("Missing the processor constructor.");
    const d = at(e),
      p = await dk(n, e),
      y = cl(r.numberOfInputs, r.channelCount),
      h = cl(r.numberOfOutputs, s),
      m = Array.from(e.parameters.keys()).reduce(
        (S, g) => ({ ...S, [g]: new Float32Array(128) }),
        {}
      );
    for (let S = 0; S < l; S += 128) {
      if (r.numberOfInputs > 0 && t !== null)
        for (let g = 0; g < r.numberOfInputs; g += 1)
          for (let x = 0; x < r.channelCount; x += 1) ll(t, y[g], x, x, S);
      o.parameterDescriptors !== void 0 &&
        t !== null &&
        o.parameterDescriptors.forEach(({ name: g }, x) => {
          ll(t, m, g, c + x, S);
        });
      for (let g = 0; g < r.numberOfInputs; g += 1)
        for (let x = 0; x < s[g]; x += 1)
          h[g][x].byteLength === 0 && (h[g][x] = new Float32Array(128));
      try {
        const g = y.map((w, k) => (d.activeInputs[k].size === 0 ? [] : w)),
          x = i(S / n.sampleRate, n.sampleRate, () => p.process(g, h, m));
        if (f !== null)
          for (let w = 0, k = 0; w < r.numberOfOutputs; w += 1) {
            for (let j = 0; j < s[w]; j += 1) h2(f, h[w], j, k + j, S);
            k += s[w];
          }
        if (!x) break;
      } catch (g) {
        e.dispatchEvent(
          new ErrorEvent("processorerror", {
            colno: g.colno,
            filename: g.filename,
            lineno: g.lineno,
            message: g.message,
          })
        );
        break;
      }
    }
    return f;
  },
  pk = (e, t, n, r, s, o, i, l, c, u, f, d, p, y, h, m) => (S, g, x) => {
    const w = new WeakMap();
    let k = null;
    const j = async (b, C) => {
      let N = f(b),
        v = null;
      const _ = Jf(N, C),
        P = Array.isArray(g.outputChannelCount)
          ? g.outputChannelCount
          : Array.from(g.outputChannelCount);
      if (d === null) {
        const U = P.reduce((F, $) => F + $, 0),
          D = s(C, {
            channelCount: Math.max(1, U),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, U),
          }),
          B = [];
        for (let F = 0; F < b.numberOfOutputs; F += 1)
          B.push(
            r(C, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: P[F],
            })
          );
        const R = i(C, {
          channelCount: g.channelCount,
          channelCountMode: g.channelCountMode,
          channelInterpretation: g.channelInterpretation,
          gain: 1,
        });
        (R.connect = t.bind(null, B)),
          (R.disconnect = c.bind(null, B)),
          (v = [D, B, R]);
      } else _ || (N = new d(C, S));
      if ((w.set(C, v === null ? N : v[2]), v !== null)) {
        if (k === null) {
          if (x === void 0)
            throw new Error("Missing the processor constructor.");
          if (p === null)
            throw new Error(
              "Missing the native OfflineAudioContext constructor."
            );
          const $ = b.channelCount * b.numberOfInputs,
            M =
              x.parameterDescriptors === void 0
                ? 0
                : x.parameterDescriptors.length,
            E = $ + M;
          k = fk(
            b,
            E === 0
              ? null
              : await (async () => {
                  const z = new p(
                      E,
                      Math.ceil(b.context.length / 128) * 128,
                      C.sampleRate
                    ),
                    K = [],
                    st = [];
                  for (let Y = 0; Y < g.numberOfInputs; Y += 1)
                    K.push(
                      i(z, {
                        channelCount: g.channelCount,
                        channelCountMode: g.channelCountMode,
                        channelInterpretation: g.channelInterpretation,
                        gain: 1,
                      })
                    ),
                      st.push(
                        s(z, {
                          channelCount: g.channelCount,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          numberOfOutputs: g.channelCount,
                        })
                      );
                  const We = await Promise.all(
                      Array.from(b.parameters.values()).map(async (Y) => {
                        const de = o(z, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          offset: Y.value,
                        });
                        return await y(z, Y, de.offset), de;
                      })
                    ),
                    Ie = r(z, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "speakers",
                      numberOfInputs: Math.max(1, $ + M),
                    });
                  for (let Y = 0; Y < g.numberOfInputs; Y += 1) {
                    K[Y].connect(st[Y]);
                    for (let de = 0; de < g.channelCount; de += 1)
                      st[Y].connect(Ie, de, Y * g.channelCount + de);
                  }
                  for (const [Y, de] of We.entries())
                    de.connect(Ie, 0, $ + Y), de.start(0);
                  return (
                    Ie.connect(z.destination),
                    await Promise.all(K.map((Y) => h(b, z, Y))),
                    m(z)
                  );
                })(),
            C,
            g,
            P,
            x,
            u
          );
        }
        const U = await k,
          D = n(C, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1,
          }),
          [B, R, F] = v;
        U !== null && ((D.buffer = U), D.start(0)), D.connect(B);
        for (let $ = 0, M = 0; $ < b.numberOfOutputs; $ += 1) {
          const E = R[$];
          for (let O = 0; O < P[$]; O += 1) B.connect(E, M + O, O);
          M += P[$];
        }
        return F;
      }
      if (_)
        for (const [U, D] of b.parameters.entries())
          await e(C, D, N.parameters.get(U));
      else
        for (const [U, D] of b.parameters.entries())
          await y(C, D, N.parameters.get(U));
      return await h(b, C, N), N;
    };
    return {
      render(b, C) {
        l(C, b);
        const N = w.get(C);
        return N !== void 0 ? Promise.resolve(N) : j(b, C);
      },
    };
  },
  hk = (e, t) => (n, r) => {
    const s = t.get(n);
    if (s !== void 0) return s;
    const o = e.get(n);
    if (o !== void 0) return o;
    try {
      const i = r();
      return i instanceof Promise
        ? (e.set(n, i),
          i.catch(() => !1).then((l) => (e.delete(n), t.set(n, l), l)))
        : (t.set(n, i), i);
    } catch {
      return t.set(n, !1), !1;
    }
  },
  mk = (e) => (t, n, r) => e(n, t, r),
  gk =
    (e) =>
    (t, n, r = 0, s = 0) => {
      const o = t[r];
      if (o === void 0) throw e();
      return al(n) ? o.connect(n, 0, s) : o.connect(n, 0);
    },
  yk = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1,
  },
  vk = (e, t, n, r, s, o, i) =>
    class extends e {
      constructor(c, u) {
        const f = s(c),
          d = { ...yk, ...u },
          p = r(f, d),
          y = o(f),
          h = y ? n() : null;
        super(c, !1, p, h),
          (this._constantSourceNodeRenderer = h),
          (this._nativeConstantSourceNode = p),
          (this._offset = t(this, y, p.offset, sc, vi)),
          (this._onended = null);
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(c) {
        const u = typeof c == "function" ? i(this, c) : null;
        this._nativeConstantSourceNode.onended = u;
        const f = this._nativeConstantSourceNode.onended;
        this._onended = f !== null && f === u ? c : f;
      }
      start(c = 0) {
        if (
          (this._nativeConstantSourceNode.start(c),
          this._constantSourceNodeRenderer !== null &&
            (this._constantSourceNodeRenderer.start = c),
          this.context.state !== "closed")
        ) {
          ti(this);
          const u = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", u),
              fr(this) && rc(this);
          };
          this._nativeConstantSourceNode.addEventListener("ended", u);
        }
      }
      stop(c = 0) {
        this._nativeConstantSourceNode.stop(c),
          this._constantSourceNodeRenderer !== null &&
            (this._constantSourceNodeRenderer.stop = c);
      }
    },
  xk = (e, t, n, r, s) => () => {
    const o = new WeakMap();
    let i = null,
      l = null;
    const c = async (u, f) => {
      let d = n(u);
      const p = Jf(d, f);
      if (!p) {
        const y = {
          channelCount: d.channelCount,
          channelCountMode: d.channelCountMode,
          channelInterpretation: d.channelInterpretation,
          offset: d.offset.value,
        };
        (d = t(f, y)), i !== null && d.start(i), l !== null && d.stop(l);
      }
      return (
        o.set(f, d),
        p ? await e(f, u.offset, d.offset) : await r(f, u.offset, d.offset),
        await s(u, f, d),
        d
      );
    };
    return {
      set start(u) {
        i = u;
      },
      set stop(u) {
        l = u;
      },
      render(u, f) {
        const d = o.get(f);
        return d !== void 0 ? Promise.resolve(d) : c(u, f);
      },
    };
  },
  wk = (e) => (t) => ((e[0] = t), e[0]),
  Sk = (e, t, n, r, s, o, i, l) => (c, u) => {
    const f = t.get(c);
    if (f === void 0) throw new Error("Missing the expected cycle count.");
    const d = o(c.context),
      p = l(d);
    if (f === u) {
      if ((t.delete(c), !p && i(c))) {
        const y = r(c),
          { outputs: h } = n(c);
        for (const m of h)
          if (wi(m)) {
            const S = r(m[0]);
            e(y, S, m[1], m[2]);
          } else {
            const S = s(m[0]);
            y.connect(S, m[1]);
          }
      }
    } else t.set(c, f - u);
  },
  Ck = (e) => (t, n, r, s) => e(t[s], (o) => o[0] === n && o[1] === r),
  bk = (e) => (t, n) => {
    e(t).delete(n);
  },
  kk = (e) => "delayTime" in e,
  jk = (e, t, n) =>
    function r(s, o) {
      const i = il(o) ? o : n(e, o);
      if (kk(i)) return [];
      if (s[0] === i) return [s];
      if (s.includes(i)) return [];
      const { outputs: l } = t(i);
      return Array.from(l)
        .map((c) => r([...s, i], c[0]))
        .reduce((c, u) => c.concat(u), []);
    },
  ta = (e, t, n) => {
    const r = t[n];
    if (r === void 0) throw e();
    return r;
  },
  Nk =
    (e) =>
    (t, n = void 0, r = void 0, s = 0) =>
      n === void 0
        ? t.forEach((o) => o.disconnect())
        : typeof n == "number"
        ? ta(e, t, n).disconnect()
        : al(n)
        ? r === void 0
          ? t.forEach((o) => o.disconnect(n))
          : s === void 0
          ? ta(e, t, r).disconnect(n, 0)
          : ta(e, t, r).disconnect(n, 0, s)
        : r === void 0
        ? t.forEach((o) => o.disconnect(n))
        : ta(e, t, r).disconnect(n, 0),
  Ek = (e) => (t) =>
    new Promise((n, r) => {
      if (e === null) {
        r(new SyntaxError());
        return;
      }
      const s = e.document.head;
      if (s === null) r(new SyntaxError());
      else {
        const o = e.document.createElement("script"),
          i = new Blob([t], { type: "application/javascript" }),
          l = URL.createObjectURL(i),
          c = e.onerror,
          u = () => {
            (e.onerror = c), URL.revokeObjectURL(l);
          };
        (e.onerror = (f, d, p, y, h) => {
          if (d === l || (d === e.location.href && p === 1 && y === 1))
            return u(), r(h), !1;
          if (c !== null) return c(f, d, p, y, h);
        }),
          (o.onerror = () => {
            u(), r(new SyntaxError());
          }),
          (o.onload = () => {
            u(), n();
          }),
          (o.src = l),
          (o.type = "module"),
          s.appendChild(o);
      }
    }),
  Tk = (e) =>
    class {
      constructor(n) {
        (this._nativeEventTarget = n), (this._listeners = new WeakMap());
      }
      addEventListener(n, r, s) {
        if (r !== null) {
          let o = this._listeners.get(r);
          o === void 0 &&
            ((o = e(this, r)),
            typeof r == "function" && this._listeners.set(r, o)),
            this._nativeEventTarget.addEventListener(n, o, s);
        }
      }
      dispatchEvent(n) {
        return this._nativeEventTarget.dispatchEvent(n);
      }
      removeEventListener(n, r, s) {
        const o = r === null ? void 0 : this._listeners.get(r);
        this._nativeEventTarget.removeEventListener(
          n,
          o === void 0 ? null : o,
          s
        );
      }
    },
  _k = (e) => (t, n, r) => {
    Object.defineProperties(e, {
      currentFrame: {
        configurable: !0,
        get() {
          return Math.round(t * n);
        },
      },
      currentTime: {
        configurable: !0,
        get() {
          return t;
        },
      },
    });
    try {
      return r();
    } finally {
      e !== null && (delete e.currentFrame, delete e.currentTime);
    }
  },
  Rk = (e) => async (t) => {
    try {
      const n = await fetch(t);
      if (n.ok) return [await n.text(), n.url];
    } catch {}
    throw e();
  },
  Ak = (e, t) => (n) => t(e, n),
  Pk = (e) => (t) => {
    const n = e(t);
    if (n.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioNode in the audio graph."
      );
    return n.renderer;
  },
  Mk = (e) => (t) => {
    var n;
    return (n = e.get(t)) !== null && n !== void 0 ? n : 0;
  },
  Lk = (e) => (t) => {
    const n = e(t);
    if (n.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioParam in the audio graph."
      );
    return n.renderer;
  },
  Ok = (e) => (t) => e.get(t),
  sn = () => new DOMException("", "InvalidStateError"),
  Bk = (e) => (t) => {
    const n = e.get(t);
    if (n === void 0) throw sn();
    return n;
  },
  Ik = (e, t) => (n) => {
    let r = e.get(n);
    if (r !== void 0) return r;
    if (t === null)
      throw new Error("Missing the native OfflineAudioContext constructor.");
    return (r = new t(1, 1, 44100)), e.set(n, r), r;
  },
  Uk = (e) => (t) => {
    const n = e.get(t);
    if (n === void 0)
      throw new Error("The context has no set of AudioWorkletNodes.");
    return n;
  },
  $k = () => new DOMException("", "InvalidAccessError"),
  Fk = (e, t, n, r, s, o) => (i) => (l, c) => {
    const u = e.get(l);
    if (u === void 0) {
      if (!i && o(l)) {
        const f = r(l),
          { outputs: d } = n(l);
        for (const p of d)
          if (wi(p)) {
            const y = r(p[0]);
            t(f, y, p[1], p[2]);
          } else {
            const y = s(p[0]);
            f.disconnect(y, p[1]);
          }
      }
      e.set(l, c);
    } else e.set(l, u + c);
  },
  Dk = (e) => (t) => e !== null && t instanceof e,
  Vk = (e) => (t) =>
    e !== null && typeof e.AudioNode == "function" && t instanceof e.AudioNode,
  zk = (e) => (t) =>
    e !== null &&
    typeof e.AudioParam == "function" &&
    t instanceof e.AudioParam,
  Wk = (e) => (t) => e !== null && t instanceof e,
  Hk = (e) => e !== null && e.isSecureContext,
  qk = (e, t, n, r) =>
    class extends e {
      constructor(o, i) {
        const l = n(o),
          c = t(l, i);
        if (r(l)) throw new TypeError();
        super(o, !0, c, null), (this._nativeMediaStreamAudioSourceNode = c);
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    },
  Gk = (e, t, n, r, s) =>
    class extends r {
      constructor(i = {}) {
        if (s === null)
          throw new Error("Missing the native AudioContext constructor.");
        let l;
        try {
          l = new s(i);
        } catch (f) {
          throw f.code === 12 && f.message === "sampleRate is not in range"
            ? t()
            : f;
        }
        if (l === null) throw n();
        if (!Kb(i.latencyHint))
          throw new TypeError(
            `The provided value '${i.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        if (i.sampleRate !== void 0 && l.sampleRate !== i.sampleRate) throw t();
        super(l, 2);
        const { latencyHint: c } = i,
          { sampleRate: u } = l;
        if (
          ((this._baseLatency =
            typeof l.baseLatency == "number"
              ? l.baseLatency
              : c === "balanced"
              ? 512 / u
              : c === "interactive" || c === void 0
              ? 256 / u
              : c === "playback"
              ? 1024 / u
              : (Math.max(2, Math.min(128, Math.round((c * u) / 128))) * 128) /
                u),
          (this._nativeAudioContext = l),
          s.name === "webkitAudioContext"
            ? ((this._nativeGainNode = l.createGain()),
              (this._nativeOscillatorNode = l.createOscillator()),
              (this._nativeGainNode.gain.value = 1e-37),
              this._nativeOscillatorNode
                .connect(this._nativeGainNode)
                .connect(l.destination),
              this._nativeOscillatorNode.start())
            : ((this._nativeGainNode = null),
              (this._nativeOscillatorNode = null)),
          (this._state = null),
          l.state === "running")
        ) {
          this._state = "suspended";
          const f = () => {
            this._state === "suspended" && (this._state = null),
              l.removeEventListener("statechange", f);
          };
          l.addEventListener("statechange", f);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null
          ? this._state
          : this._nativeAudioContext.state;
      }
      close() {
        return this.state === "closed"
          ? this._nativeAudioContext.close().then(() => {
              throw e();
            })
          : (this._state === "suspended" && (this._state = null),
            this._nativeAudioContext.close().then(() => {
              this._nativeGainNode !== null &&
                this._nativeOscillatorNode !== null &&
                (this._nativeOscillatorNode.stop(),
                this._nativeGainNode.disconnect(),
                this._nativeOscillatorNode.disconnect()),
                Gb(this);
            }));
      }
      resume() {
        return this._state === "suspended"
          ? new Promise((i, l) => {
              const c = () => {
                this._nativeAudioContext.removeEventListener("statechange", c),
                  this._nativeAudioContext.state === "running"
                    ? i()
                    : this.resume().then(i, l);
              };
              this._nativeAudioContext.addEventListener("statechange", c);
            })
          : this._nativeAudioContext.resume().catch((i) => {
              throw i === void 0 || i.code === 15 ? e() : i;
            });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((i) => {
          throw i === void 0 ? e() : i;
        });
      }
    },
  Kk = (e, t, n, r, s, o) =>
    class extends n {
      constructor(l, c) {
        super(l),
          (this._nativeContext = l),
          r2.set(this, l),
          r(l) && s.set(l, new Set()),
          (this._destination = new e(this, c)),
          (this._listener = t(this, l)),
          (this._onstatechange = null);
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(l) {
        const c = typeof l == "function" ? o(this, l) : null;
        this._nativeContext.onstatechange = c;
        const u = this._nativeContext.onstatechange;
        this._onstatechange = u !== null && u === c ? l : u;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    },
  Um = (e) => {
    const t = new Uint32Array([
      1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580,
      1635017060, 4, 0,
    ]);
    try {
      const n = e.decodeAudioData(t.buffer, () => {});
      return n === void 0 ? !1 : (n.catch(() => {}), !0);
    } catch {}
    return !1;
  },
  Zk = (e, t) => (n, r, s) => {
    const o = new Set();
    return (
      (n.connect = (
        (i) =>
        (l, c = 0, u = 0) => {
          const f = o.size === 0;
          if (t(l))
            return (
              i.call(n, l, c, u),
              e(
                o,
                [l, c, u],
                (d) => d[0] === l && d[1] === c && d[2] === u,
                !0
              ),
              f && r(),
              l
            );
          i.call(n, l, c),
            e(o, [l, c], (d) => d[0] === l && d[1] === c, !0),
            f && r();
        }
      )(n.connect)),
      (n.disconnect = ((i) => (l, c, u) => {
        const f = o.size > 0;
        if (l === void 0) i.apply(n), o.clear();
        else if (typeof l == "number") {
          i.call(n, l);
          for (const p of o) p[1] === l && o.delete(p);
        } else {
          t(l) ? i.call(n, l, c, u) : i.call(n, l, c);
          for (const p of o)
            p[0] === l &&
              (c === void 0 || p[1] === c) &&
              (u === void 0 || p[2] === u) &&
              o.delete(p);
        }
        const d = o.size === 0;
        f && d && s();
      })(n.disconnect)),
      n
    );
  },
  Rr = (e, t, n) => {
    const r = t[n];
    r !== void 0 && r !== e[n] && (e[n] = r);
  },
  Si = (e, t) => {
    Rr(e, t, "channelCount"),
      Rr(e, t, "channelCountMode"),
      Rr(e, t, "channelInterpretation");
  },
  Qk = (e) =>
    e === null ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null,
  np = (e, t, n) => {
    const r = t[n];
    r !== void 0 && r !== e[n].value && (e[n].value = r);
  },
  Yk = (e) => {
    e.start = ((t) => {
      let n = !1;
      return (r = 0, s = 0, o) => {
        if (n) throw sn();
        t.call(e, r, s, o), (n = !0);
      };
    })(e.start);
  },
  m2 = (e) => {
    e.start = (
      (t) =>
      (n = 0, r = 0, s) => {
        if ((typeof s == "number" && s < 0) || r < 0 || n < 0)
          throw new RangeError("The parameters can't be negative.");
        t.call(e, n, r, s);
      }
    )(e.start);
  },
  g2 = (e) => {
    e.stop = (
      (t) =>
      (n = 0) => {
        if (n < 0) throw new RangeError("The parameter can't be negative.");
        t.call(e, n);
      }
    )(e.stop);
  },
  Xk = (e, t, n, r, s, o, i, l, c, u, f) => (d, p) => {
    const y = d.createBufferSource();
    return (
      Si(y, p),
      np(y, p, "playbackRate"),
      Rr(y, p, "buffer"),
      Rr(y, p, "loop"),
      Rr(y, p, "loopEnd"),
      Rr(y, p, "loopStart"),
      t(n, () => n(d)) || Yk(y),
      t(r, () => r(d)) || c(y),
      t(s, () => s(d)) || u(y, d),
      t(o, () => o(d)) || m2(y),
      t(i, () => i(d)) || f(y, d),
      t(l, () => l(d)) || g2(y),
      e(d, y),
      y
    );
  },
  Jk = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("AudioContext")
      ? e.AudioContext
      : e.hasOwnProperty("webkitAudioContext")
      ? e.webkitAudioContext
      : null,
  ej = (e, t) => (n, r, s) => {
    const o = n.destination;
    if (o.channelCount !== r)
      try {
        o.channelCount = r;
      } catch {}
    s && o.channelCountMode !== "explicit" && (o.channelCountMode = "explicit"),
      o.maxChannelCount === 0 &&
        Object.defineProperty(o, "maxChannelCount", { value: r });
    const i = e(n, {
      channelCount: r,
      channelCountMode: o.channelCountMode,
      channelInterpretation: o.channelInterpretation,
      gain: 1,
    });
    return (
      t(
        i,
        "channelCount",
        (l) => () => l.call(i),
        (l) => (c) => {
          l.call(i, c);
          try {
            o.channelCount = c;
          } catch (u) {
            if (c > o.maxChannelCount) throw u;
          }
        }
      ),
      t(
        i,
        "channelCountMode",
        (l) => () => l.call(i),
        (l) => (c) => {
          l.call(i, c), (o.channelCountMode = c);
        }
      ),
      t(
        i,
        "channelInterpretation",
        (l) => () => l.call(i),
        (l) => (c) => {
          l.call(i, c), (o.channelInterpretation = c);
        }
      ),
      Object.defineProperty(i, "maxChannelCount", {
        get: () => o.maxChannelCount,
      }),
      i.connect(o),
      i
    );
  },
  tj = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("AudioWorkletNode")
      ? e.AudioWorkletNode
      : null,
  nj = (e) => {
    const { port1: t } = new MessageChannel();
    try {
      t.postMessage(e);
    } finally {
      t.close();
    }
  },
  rj = (e, t, n, r, s) => (o, i, l, c, u, f) => {
    if (l !== null)
      try {
        const d = new l(o, c, f),
          p = new Map();
        let y = null;
        if (
          (Object.defineProperties(d, {
            channelCount: {
              get: () => f.channelCount,
              set: () => {
                throw e();
              },
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw e();
              },
            },
            onprocessorerror: {
              get: () => y,
              set: (h) => {
                typeof y == "function" &&
                  d.removeEventListener("processorerror", y),
                  (y = typeof h == "function" ? h : null),
                  typeof y == "function" &&
                    d.addEventListener("processorerror", y);
              },
            },
          }),
          (d.addEventListener = (
            (h) =>
            (...m) => {
              if (m[0] === "processorerror") {
                const S =
                  typeof m[1] == "function"
                    ? m[1]
                    : typeof m[1] == "object" &&
                      m[1] !== null &&
                      typeof m[1].handleEvent == "function"
                    ? m[1].handleEvent
                    : null;
                if (S !== null) {
                  const g = p.get(m[1]);
                  g !== void 0
                    ? (m[1] = g)
                    : ((m[1] = (x) => {
                        x.type === "error"
                          ? (Object.defineProperties(x, {
                              type: { value: "processorerror" },
                            }),
                            S(x))
                          : S(new ErrorEvent(m[0], { ...x }));
                      }),
                      p.set(S, m[1]));
                }
              }
              return h.call(d, "error", m[1], m[2]), h.call(d, ...m);
            }
          )(d.addEventListener)),
          (d.removeEventListener = (
            (h) =>
            (...m) => {
              if (m[0] === "processorerror") {
                const S = p.get(m[1]);
                S !== void 0 && (p.delete(m[1]), (m[1] = S));
              }
              return (
                h.call(d, "error", m[1], m[2]), h.call(d, m[0], m[1], m[2])
              );
            }
          )(d.removeEventListener)),
          f.numberOfOutputs !== 0)
        ) {
          const h = n(o, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          return (
            d.connect(h).connect(o.destination),
            s(
              d,
              () => h.disconnect(),
              () => h.connect(o.destination)
            )
          );
        }
        return d;
      } catch (d) {
        throw d.code === 11 ? r() : d;
      }
    if (u === void 0) throw r();
    return nj(f), t(o, i, u, f);
  },
  sj = (e, t) =>
    e === null
      ? 512
      : Math.max(
          512,
          Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t))))
        ),
  oj = (e) =>
    new Promise((t, n) => {
      const { port1: r, port2: s } = new MessageChannel();
      (r.onmessage = ({ data: o }) => {
        r.close(), s.close(), t(o);
      }),
        (r.onmessageerror = ({ data: o }) => {
          r.close(), s.close(), n(o);
        }),
        s.postMessage(e);
    }),
  ij = async (e, t) => {
    const n = await oj(t);
    return new e(n);
  },
  aj = (e, t, n, r) => {
    let s = Nd.get(e);
    s === void 0 && ((s = new WeakMap()), Nd.set(e, s));
    const o = ij(n, r);
    return s.set(t, o), o;
  },
  lj = (e, t, n, r, s, o, i, l, c, u, f, d, p) => (y, h, m, S) => {
    if (S.numberOfInputs === 0 && S.numberOfOutputs === 0) throw c();
    const g = Array.isArray(S.outputChannelCount)
      ? S.outputChannelCount
      : Array.from(S.outputChannelCount);
    if (g.some((V) => V < 1)) throw c();
    if (g.length !== S.numberOfOutputs) throw t();
    if (S.channelCountMode !== "explicit") throw c();
    const x = S.channelCount * S.numberOfInputs,
      w = g.reduce((V, G) => V + G, 0),
      k = m.parameterDescriptors === void 0 ? 0 : m.parameterDescriptors.length;
    if (x + k > 6 || w > 6) throw c();
    const j = new MessageChannel(),
      b = [],
      C = [];
    for (let V = 0; V < S.numberOfInputs; V += 1)
      b.push(
        i(y, {
          channelCount: S.channelCount,
          channelCountMode: S.channelCountMode,
          channelInterpretation: S.channelInterpretation,
          gain: 1,
        })
      ),
        C.push(
          s(y, {
            channelCount: S.channelCount,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: S.channelCount,
          })
        );
    const N = [];
    if (m.parameterDescriptors !== void 0)
      for (const {
        defaultValue: V,
        maxValue: G,
        minValue: Se,
        name: fe,
      } of m.parameterDescriptors) {
        const ee = o(y, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          offset:
            S.parameterData[fe] !== void 0
              ? S.parameterData[fe]
              : V === void 0
              ? 0
              : V,
        });
        Object.defineProperties(ee.offset, {
          defaultValue: { get: () => (V === void 0 ? 0 : V) },
          maxValue: { get: () => (G === void 0 ? sc : G) },
          minValue: { get: () => (Se === void 0 ? vi : Se) },
        }),
          N.push(ee);
      }
    const v = r(y, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, x + k),
      }),
      _ = sj(h, y.sampleRate),
      P = l(y, _, x + k, Math.max(1, w)),
      U = s(y, {
        channelCount: Math.max(1, w),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, w),
      }),
      D = [];
    for (let V = 0; V < S.numberOfOutputs; V += 1)
      D.push(
        r(y, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: g[V],
        })
      );
    for (let V = 0; V < S.numberOfInputs; V += 1) {
      b[V].connect(C[V]);
      for (let G = 0; G < S.channelCount; G += 1)
        C[V].connect(v, G, V * S.channelCount + G);
    }
    const B = new p2(
      m.parameterDescriptors === void 0
        ? []
        : m.parameterDescriptors.map(({ name: V }, G) => {
            const Se = N[G];
            return Se.connect(v, 0, x + G), Se.start(0), [V, Se.offset];
          })
    );
    v.connect(P);
    let R = S.channelInterpretation,
      F = null;
    const $ = S.numberOfOutputs === 0 ? [P] : D,
      M = {
        get bufferSize() {
          return _;
        },
        get channelCount() {
          return S.channelCount;
        },
        set channelCount(V) {
          throw n();
        },
        get channelCountMode() {
          return S.channelCountMode;
        },
        set channelCountMode(V) {
          throw n();
        },
        get channelInterpretation() {
          return R;
        },
        set channelInterpretation(V) {
          for (const G of b) G.channelInterpretation = V;
          R = V;
        },
        get context() {
          return P.context;
        },
        get inputs() {
          return b;
        },
        get numberOfInputs() {
          return S.numberOfInputs;
        },
        get numberOfOutputs() {
          return S.numberOfOutputs;
        },
        get onprocessorerror() {
          return F;
        },
        set onprocessorerror(V) {
          typeof F == "function" && M.removeEventListener("processorerror", F),
            (F = typeof V == "function" ? V : null),
            typeof F == "function" && M.addEventListener("processorerror", F);
        },
        get parameters() {
          return B;
        },
        get port() {
          return j.port2;
        },
        addEventListener(...V) {
          return P.addEventListener(V[0], V[1], V[2]);
        },
        connect: e.bind(null, $),
        disconnect: u.bind(null, $),
        dispatchEvent(...V) {
          return P.dispatchEvent(V[0]);
        },
        removeEventListener(...V) {
          return P.removeEventListener(V[0], V[1], V[2]);
        },
      },
      E = new Map();
    (j.port1.addEventListener = (
      (V) =>
      (...G) => {
        if (G[0] === "message") {
          const Se =
            typeof G[1] == "function"
              ? G[1]
              : typeof G[1] == "object" &&
                G[1] !== null &&
                typeof G[1].handleEvent == "function"
              ? G[1].handleEvent
              : null;
          if (Se !== null) {
            const fe = E.get(G[1]);
            fe !== void 0
              ? (G[1] = fe)
              : ((G[1] = (ee) => {
                  f(y.currentTime, y.sampleRate, () => Se(ee));
                }),
                E.set(Se, G[1]));
          }
        }
        return V.call(j.port1, G[0], G[1], G[2]);
      }
    )(j.port1.addEventListener)),
      (j.port1.removeEventListener = (
        (V) =>
        (...G) => {
          if (G[0] === "message") {
            const Se = E.get(G[1]);
            Se !== void 0 && (E.delete(G[1]), (G[1] = Se));
          }
          return V.call(j.port1, G[0], G[1], G[2]);
        }
      )(j.port1.removeEventListener));
    let O = null;
    Object.defineProperty(j.port1, "onmessage", {
      get: () => O,
      set: (V) => {
        typeof O == "function" && j.port1.removeEventListener("message", O),
          (O = typeof V == "function" ? V : null),
          typeof O == "function" &&
            (j.port1.addEventListener("message", O), j.port1.start());
      },
    }),
      (m.prototype.port = j.port1);
    let z = null;
    aj(y, M, m, S).then((V) => (z = V));
    const st = cl(S.numberOfInputs, S.channelCount),
      We = cl(S.numberOfOutputs, g),
      Ie =
        m.parameterDescriptors === void 0
          ? []
          : m.parameterDescriptors.reduce(
              (V, { name: G }) => ({ ...V, [G]: new Float32Array(128) }),
              {}
            );
    let Y = !0;
    const de = () => {
        S.numberOfOutputs > 0 && P.disconnect(U);
        for (let V = 0, G = 0; V < S.numberOfOutputs; V += 1) {
          const Se = D[V];
          for (let fe = 0; fe < g[V]; fe += 1) U.disconnect(Se, G + fe, fe);
          G += g[V];
        }
      },
      ft = new Map();
    P.onaudioprocess = ({ inputBuffer: V, outputBuffer: G }) => {
      if (z !== null) {
        const Se = d(M);
        for (let fe = 0; fe < _; fe += 128) {
          for (let ee = 0; ee < S.numberOfInputs; ee += 1)
            for (let ve = 0; ve < S.channelCount; ve += 1)
              ll(V, st[ee], ve, ve, fe);
          m.parameterDescriptors !== void 0 &&
            m.parameterDescriptors.forEach(({ name: ee }, ve) => {
              ll(V, Ie, ee, x + ve, fe);
            });
          for (let ee = 0; ee < S.numberOfInputs; ee += 1)
            for (let ve = 0; ve < g[ee]; ve += 1)
              We[ee][ve].byteLength === 0 &&
                (We[ee][ve] = new Float32Array(128));
          try {
            const ee = st.map((Xe, $t) => {
              if (Se[$t].size > 0) return ft.set($t, _ / 128), Xe;
              const ie = ft.get($t);
              return ie === void 0
                ? []
                : (Xe.every((Pe) => Pe.every((Nt) => Nt === 0)) &&
                    (ie === 1 ? ft.delete($t) : ft.set($t, ie - 1)),
                  Xe);
            });
            Y = f(y.currentTime + fe / y.sampleRate, y.sampleRate, () =>
              z.process(ee, We, Ie)
            );
            for (let Xe = 0, $t = 0; Xe < S.numberOfOutputs; Xe += 1) {
              for (let ne = 0; ne < g[Xe]; ne += 1)
                h2(G, We[Xe], ne, $t + ne, fe);
              $t += g[Xe];
            }
          } catch (ee) {
            (Y = !1),
              M.dispatchEvent(
                new ErrorEvent("processorerror", {
                  colno: ee.colno,
                  filename: ee.filename,
                  lineno: ee.lineno,
                  message: ee.message,
                })
              );
          }
          if (!Y) {
            for (let ee = 0; ee < S.numberOfInputs; ee += 1) {
              b[ee].disconnect(C[ee]);
              for (let ve = 0; ve < S.channelCount; ve += 1)
                C[fe].disconnect(v, ve, ee * S.channelCount + ve);
            }
            if (m.parameterDescriptors !== void 0) {
              const ee = m.parameterDescriptors.length;
              for (let ve = 0; ve < ee; ve += 1) {
                const Xe = N[ve];
                Xe.disconnect(v, 0, x + ve), Xe.stop();
              }
            }
            v.disconnect(P), (P.onaudioprocess = null), Cr ? de() : bn();
            break;
          }
        }
      }
    };
    let Cr = !1;
    const Qt = i(y, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0,
      }),
      pt = () => P.connect(Qt).connect(y.destination),
      bn = () => {
        P.disconnect(Qt), Qt.disconnect();
      },
      to = () => {
        if (Y) {
          bn(), S.numberOfOutputs > 0 && P.connect(U);
          for (let V = 0, G = 0; V < S.numberOfOutputs; V += 1) {
            const Se = D[V];
            for (let fe = 0; fe < g[V]; fe += 1) U.connect(Se, G + fe, fe);
            G += g[V];
          }
        }
        Cr = !0;
      },
      br = () => {
        Y && (pt(), de()), (Cr = !1);
      };
    return pt(), p(M, to, br);
  },
  cj = (e, t) => (n, r) => {
    const s = n.createChannelMerger(r.numberOfInputs);
    return (
      e !== null && e.name === "webkitAudioContext" && t(n, s), Si(s, r), s
    );
  },
  uj = (e) => {
    const t = e.numberOfOutputs;
    Object.defineProperty(e, "channelCount", {
      get: () => t,
      set: (n) => {
        if (n !== t) throw sn();
      },
    }),
      Object.defineProperty(e, "channelCountMode", {
        get: () => "explicit",
        set: (n) => {
          if (n !== "explicit") throw sn();
        },
      }),
      Object.defineProperty(e, "channelInterpretation", {
        get: () => "discrete",
        set: (n) => {
          if (n !== "discrete") throw sn();
        },
      });
  },
  y2 = (e, t) => {
    const n = e.createChannelSplitter(t.numberOfOutputs);
    return Si(n, t), uj(n), n;
  },
  dj = (e, t, n, r, s) => (o, i) => {
    if (o.createConstantSource === void 0) return n(o, i);
    const l = o.createConstantSource();
    return (
      Si(l, i),
      np(l, i, "offset"),
      t(r, () => r(o)) || m2(l),
      t(s, () => s(o)) || g2(l),
      e(o, l),
      l
    );
  },
  v2 = (e, t) => (
    (e.connect = t.connect.bind(t)), (e.disconnect = t.disconnect.bind(t)), e
  ),
  fj =
    (e, t, n, r) =>
    (s, { offset: o, ...i }) => {
      const l = s.createBuffer(1, 2, 44100),
        c = t(s, {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1,
        }),
        u = n(s, { ...i, gain: o }),
        f = l.getChannelData(0);
      (f[0] = 1), (f[1] = 1), (c.buffer = l), (c.loop = !0);
      const d = {
          get bufferSize() {},
          get channelCount() {
            return u.channelCount;
          },
          set channelCount(h) {
            u.channelCount = h;
          },
          get channelCountMode() {
            return u.channelCountMode;
          },
          set channelCountMode(h) {
            u.channelCountMode = h;
          },
          get channelInterpretation() {
            return u.channelInterpretation;
          },
          set channelInterpretation(h) {
            u.channelInterpretation = h;
          },
          get context() {
            return u.context;
          },
          get inputs() {
            return [];
          },
          get numberOfInputs() {
            return c.numberOfInputs;
          },
          get numberOfOutputs() {
            return u.numberOfOutputs;
          },
          get offset() {
            return u.gain;
          },
          get onended() {
            return c.onended;
          },
          set onended(h) {
            c.onended = h;
          },
          addEventListener(...h) {
            return c.addEventListener(h[0], h[1], h[2]);
          },
          dispatchEvent(...h) {
            return c.dispatchEvent(h[0]);
          },
          removeEventListener(...h) {
            return c.removeEventListener(h[0], h[1], h[2]);
          },
          start(h = 0) {
            c.start.call(c, h);
          },
          stop(h = 0) {
            c.stop.call(c, h);
          },
        },
        p = () => c.connect(u),
        y = () => c.disconnect(u);
      return e(s, c), r(v2(d, u), p, y);
    },
  gr = (e, t) => {
    const n = e.createGain();
    return Si(n, t), np(n, t, "gain"), n;
  },
  pj = (e, { mediaStream: t }) => {
    const n = t.getAudioTracks();
    n.sort((o, i) => (o.id < i.id ? -1 : o.id > i.id ? 1 : 0));
    const r = n.slice(0, 1),
      s = e.createMediaStreamSource(new MediaStream(r));
    return Object.defineProperty(s, "mediaStream", { value: t }), s;
  },
  hj = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("OfflineAudioContext")
      ? e.OfflineAudioContext
      : e.hasOwnProperty("webkitOfflineAudioContext")
      ? e.webkitOfflineAudioContext
      : null,
  rp = (e, t, n, r) => e.createScriptProcessor(t, n, r),
  ts = () => new DOMException("", "NotSupportedError"),
  mj = (e, t) => (n, r, s) => (e(r).replay(s), t(r, n, s)),
  gj = (e, t, n) => async (r, s, o) => {
    const i = e(r);
    await Promise.all(
      i.activeInputs
        .map((l, c) =>
          Array.from(l).map(async ([u, f]) => {
            const p = await t(u).render(u, s),
              y = r.context.destination;
            !n(u) && (r !== y || !n(r)) && p.connect(o, f, c);
          })
        )
        .reduce((l, c) => [...l, ...c], [])
    );
  },
  yj = (e, t, n) => async (r, s, o) => {
    const i = t(r);
    await Promise.all(
      Array.from(i.activeInputs).map(async ([l, c]) => {
        const f = await e(l).render(l, s);
        n(l) || f.connect(o, c);
      })
    );
  },
  vj = (e, t, n, r) => (s) =>
    e(Um, () => Um(s))
      ? Promise.resolve(e(r, r)).then((o) => {
          if (!o) {
            const i = n(s, 512, 0, 1);
            (s.oncomplete = () => {
              (i.onaudioprocess = null), i.disconnect();
            }),
              (i.onaudioprocess = () => s.currentTime),
              i.connect(s.destination);
          }
          return s.startRendering();
        })
      : new Promise((o) => {
          const i = t(s, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          (s.oncomplete = (l) => {
            i.disconnect(), o(l.renderedBuffer);
          }),
            i.connect(s.destination),
            s.startRendering();
        }),
  xj = (e) => (t, n) => {
    e.set(t, n);
  },
  wj = (e) => () => {
    if (e === null) return !1;
    try {
      new e({ length: 1, sampleRate: 44100 });
    } catch {
      return !1;
    }
    return !0;
  },
  Sj = (e, t) => async () => {
    if (e === null) return !0;
    if (t === null) return !1;
    const n = new Blob(
        [
          'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)',
        ],
        { type: "application/javascript; charset=utf-8" }
      ),
      r = new t(1, 128, 44100),
      s = URL.createObjectURL(n);
    let o = !1,
      i = !1;
    try {
      await r.audioWorklet.addModule(s);
      const l = new e(r, "a", { numberOfOutputs: 0 }),
        c = r.createOscillator();
      (l.port.onmessage = () => (o = !0)),
        (l.onprocessorerror = () => (i = !0)),
        c.connect(l),
        c.start(0),
        await r.startRendering(),
        await new Promise((u) => setTimeout(u));
    } catch {
    } finally {
      URL.revokeObjectURL(s);
    }
    return o && !i;
  },
  Cj = (e, t) => () => {
    if (t === null) return Promise.resolve(!1);
    const n = new t(1, 1, 44100),
      r = e(n, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0,
      });
    return new Promise((s) => {
      (n.oncomplete = () => {
        r.disconnect(), s(n.currentTime !== 0);
      }),
        n.startRendering();
    });
  },
  bj = () => new DOMException("", "UnknownError"),
  kj = () => (typeof window > "u" ? null : window),
  jj = (e, t) => (n) => {
    (n.copyFromChannel = (r, s, o = 0) => {
      const i = e(o),
        l = e(s);
      if (l >= n.numberOfChannels) throw t();
      const c = n.length,
        u = n.getChannelData(l),
        f = r.length;
      for (let d = i < 0 ? -i : 0; d + i < c && d < f; d += 1) r[d] = u[d + i];
    }),
      (n.copyToChannel = (r, s, o = 0) => {
        const i = e(o),
          l = e(s);
        if (l >= n.numberOfChannels) throw t();
        const c = n.length,
          u = n.getChannelData(l),
          f = r.length;
        for (let d = i < 0 ? -i : 0; d + i < c && d < f; d += 1)
          u[d + i] = r[d];
      });
  },
  Nj = (e) => (t) => {
    (t.copyFromChannel = (
      (n) =>
      (r, s, o = 0) => {
        const i = e(o),
          l = e(s);
        if (i < t.length) return n.call(t, r, l, i);
      }
    )(t.copyFromChannel)),
      (t.copyToChannel = (
        (n) =>
        (r, s, o = 0) => {
          const i = e(o),
            l = e(s);
          if (i < t.length) return n.call(t, r, l, i);
        }
      )(t.copyToChannel));
  },
  Ej = (e) => (t, n) => {
    const r = n.createBuffer(1, 1, 44100);
    t.buffer === null && (t.buffer = r),
      e(
        t,
        "buffer",
        (s) => () => {
          const o = s.call(t);
          return o === r ? null : o;
        },
        (s) => (o) => s.call(t, o === null ? r : o)
      );
  },
  Tj = (e, t) => (n, r) => {
    (r.channelCount = 1),
      (r.channelCountMode = "explicit"),
      Object.defineProperty(r, "channelCount", {
        get: () => 1,
        set: () => {
          throw e();
        },
      }),
      Object.defineProperty(r, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw e();
        },
      });
    const s = n.createBufferSource();
    t(
      r,
      () => {
        const l = r.numberOfInputs;
        for (let c = 0; c < l; c += 1) s.connect(r, 0, c);
      },
      () => s.disconnect(r)
    );
  },
  _j = (e, t, n) =>
    e.copyFromChannel === void 0
      ? e.getChannelData(n)[0]
      : (e.copyFromChannel(t, n), t[0]),
  sp = (e, t, n, r) => {
    let s = e;
    for (; !s.hasOwnProperty(t); ) s = Object.getPrototypeOf(s);
    const { get: o, set: i } = Object.getOwnPropertyDescriptor(s, t);
    Object.defineProperty(e, t, { get: n(o), set: r(i) });
  },
  Rj = (e) => ({
    ...e,
    outputChannelCount:
      e.outputChannelCount !== void 0
        ? e.outputChannelCount
        : e.numberOfInputs === 1 && e.numberOfOutputs === 1
        ? [e.channelCount]
        : Array.from({ length: e.numberOfOutputs }, () => 1),
  }),
  x2 = (e, t, n) => {
    try {
      e.setValueAtTime(t, n);
    } catch (r) {
      if (r.code !== 9) throw r;
      x2(e, t, n + 1e-7);
    }
  },
  Aj = (e) => {
    const t = e.createBufferSource();
    t.start();
    try {
      t.start();
    } catch {
      return !0;
    }
    return !1;
  },
  Pj = (e) => {
    const t = e.createBufferSource(),
      n = e.createBuffer(1, 1, 44100);
    t.buffer = n;
    try {
      t.start(0, 1);
    } catch {
      return !1;
    }
    return !0;
  },
  Mj = (e) => {
    const t = e.createBufferSource();
    t.start();
    try {
      t.stop();
    } catch {
      return !1;
    }
    return !0;
  },
  w2 = (e) => {
    const t = e.createOscillator();
    try {
      t.start(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  Lj = (e) => {
    const t = e.createBuffer(1, 1, 44100),
      n = e.createBufferSource();
    (n.buffer = t), n.start(), n.stop();
    try {
      return n.stop(), !0;
    } catch {
      return !1;
    }
  },
  S2 = (e) => {
    const t = e.createOscillator();
    try {
      t.stop(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  Oj = (e) => {
    const { port1: t, port2: n } = new MessageChannel();
    try {
      t.postMessage(e);
    } finally {
      t.close(), n.close();
    }
  },
  Bj = (e) => {
    e.start = (
      (t) =>
      (n = 0, r = 0, s) => {
        const o = e.buffer,
          i = o === null ? r : Math.min(o.duration, r);
        o !== null && i > o.duration - 0.5 / e.context.sampleRate
          ? t.call(e, n, 0, 0)
          : t.call(e, n, i, s);
      }
    )(e.start);
  },
  Ij = (e, t) => {
    const n = t.createGain();
    e.connect(n);
    const r = ((s) => () => {
      s.call(e, n), e.removeEventListener("ended", r);
    })(e.disconnect);
    e.addEventListener("ended", r),
      v2(e, n),
      (e.stop = ((s) => {
        let o = !1;
        return (i = 0) => {
          if (o)
            try {
              s.call(e, i);
            } catch {
              n.gain.setValueAtTime(0, i);
            }
          else s.call(e, i), (o = !0);
        };
      })(e.stop));
  },
  Ci = (e, t) => (n) => {
    const r = { value: e };
    return (
      Object.defineProperties(n, { currentTarget: r, target: r }),
      typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    );
  },
  Uj = Nb(es),
  $j = Pb(es),
  Fj = Ck(nc),
  Dj = new WeakMap(),
  Vj = Mk(Dj),
  Xs = hk(new Map(), new WeakMap()),
  wn = kj(),
  C2 = Pk(at),
  oc = gj(at, C2, Vr),
  yr = Bk(r2),
  Js = hj(wn),
  Sn = Wk(Js),
  b2 = new WeakMap(),
  k2 = Tk(Ci),
  ic = Jk(wn),
  zj = Dk(ic),
  j2 = Vk(wn),
  Wj = zk(wn),
  ri = tj(wn),
  bi = ik(
    Eb(Jy),
    Ab(Uj, $j, _d, Fj, Rd, at, Vj, yi, qt, es, fr, Vr, ja),
    Xs,
    Fk(kd, Rd, at, qt, ni, fr),
    Jr,
    $k,
    ts,
    Sk(_d, kd, at, qt, ni, yr, fr, Sn),
    jk(b2, at, an),
    k2,
    yr,
    zj,
    j2,
    Wj,
    Sn,
    ri
  ),
  Hj = new WeakSet(),
  $m = Qk(wn),
  N2 = wk(new Uint32Array(1)),
  qj = jj(N2, Jr),
  Gj = Nj(N2),
  Kj = Ib(Hj, Xs, ts, $m, Js, wj($m), qj, Gj),
  op = Mb(gr),
  E2 = yj(C2, xi, Vr),
  ip = mk(E2),
  ac = Xk(op, Xs, Aj, Pj, Mj, w2, Lj, S2, Bj, Ej(sp), Ij),
  ap = mj(Lk(xi), E2),
  Zj = Fb(ip, ac, qt, ap, oc),
  lc = ak(Tb(t2), b2, n2, lk, wb, Sb, Cb, bb, kb, Sd, Yy, ic, x2),
  Qj = $b(bi, Zj, lc, sn, ac, yr, Sn, Ci),
  Yj = Zb(bi, Qb, Jr, sn, ej(gr, sp), yr, Sn, oc),
  cc = Zk(es, j2),
  Xj = Tj(sn, cc),
  lp = cj(ic, Xj),
  Jj = fj(op, ac, gr, cc),
  ki = dj(op, Xs, Jj, w2, S2),
  eN = xk(ip, ki, qt, ap, oc),
  tN = vk(bi, lc, eN, ki, yr, Sn, Ci),
  nN = vj(Xs, gr, rp, Cj(gr, Js)),
  rN = Yb(lc, lp, ki, rp, ts, _j, Sn, sp),
  T2 = new WeakMap(),
  sN = Kk(Yj, rN, k2, Sn, T2, Ci),
  _2 = Hk(wn),
  cp = _k(wn),
  R2 = new WeakMap(),
  oN = Ik(R2, Js),
  Fm = _2
    ? Rb(
        Xs,
        ts,
        Ek(wn),
        cp,
        Rk(jb),
        yr,
        oN,
        Sn,
        ri,
        new WeakMap(),
        new WeakMap(),
        Sj(ri, Js),
        wn
      )
    : void 0,
  iN = qk(bi, pj, yr, Sn),
  A2 = Uk(T2),
  aN = Lb(A2),
  P2 = gk(Jr),
  lN = bk(A2),
  M2 = Nk(Jr),
  L2 = new WeakMap(),
  cN = Ak(L2, an),
  uN = lj(P2, Jr, sn, lp, y2, ki, gr, rp, ts, M2, cp, cN, cc),
  dN = rj(sn, uN, gr, ts, cc),
  fN = pk(ip, P2, ac, lp, y2, ki, gr, lN, M2, cp, qt, ri, Js, ap, oc, nN),
  pN = Ok(R2),
  hN = xj(L2),
  Dm = _2 ? uk(aN, bi, lc, fN, dN, at, pN, yr, Sn, ri, Rj, hN, Oj, Ci) : void 0,
  mN = Gk(sn, ts, bj, sN, ic),
  O2 =
    "Missing AudioWorklet support. Maybe this is not running in a secure context.",
  gN = async (e, t, n, r, s) => {
    const { encoderId: o, port: i } = await qy(s, t.sampleRate);
    if (Dm === void 0) throw new Error(O2);
    const l = new Qj(t, { buffer: e }),
      c = new iN(t, { mediaStream: r }),
      u = gb(Dm, t, { channelCount: n });
    return {
      audioBufferSourceNode: l,
      encoderId: o,
      mediaStreamAudioSourceNode: c,
      port: i,
      recorderAudioWorkletNode: u,
    };
  },
  yN = (e, t, n, r) => (s, o, i) => {
    var l;
    const c =
        (l = o.getAudioTracks()[0]) === null || l === void 0
          ? void 0
          : l.getSettings().sampleRate,
      u = new mN({ latencyHint: "playback", sampleRate: c }),
      f = Math.max(1024, Math.ceil(u.baseLatency * u.sampleRate)),
      d = new Kj({ length: f, sampleRate: u.sampleRate }),
      p = [],
      y = mb((N) => {
        if (Fm === void 0) throw new Error(O2);
        return Fm(u, N);
      });
    let h = null,
      m = null,
      S = null,
      g = null,
      x = !0;
    const w = (N) => {
        s.dispatchEvent(e("dataavailable", { data: new Blob(N, { type: i }) }));
      },
      k = async (N, v) => {
        const _ = await rl(N, v);
        S === null ? p.push(..._) : (w(_), (g = k(N, v)));
      },
      j = () => ((x = !0), u.resume()),
      b = () => {
        S !== null &&
          (h !== null &&
            (o.removeEventListener("addtrack", h),
            o.removeEventListener("removetrack", h)),
          m !== null && clearTimeout(m),
          S.then(
            async ({
              constantSourceNode: N,
              encoderId: v,
              mediaStreamAudioSourceNode: _,
              recorderAudioWorkletNode: P,
            }) => {
              g !== null && (g.catch(() => {}), (g = null)),
                await P.stop(),
                _.disconnect(P),
                N.stop();
              const U = await rl(v, null);
              S === null && (await C()),
                w([...p, ...U]),
                (p.length = 0),
                s.dispatchEvent(new Event("stop"));
            }
          ),
          (S = null));
      },
      C = () => ((x = !1), u.suspend());
    return (
      C(),
      {
        get mimeType() {
          return i;
        },
        get state() {
          return S === null ? "inactive" : x ? "recording" : "paused";
        },
        pause() {
          if (S === null) throw n();
          x && (C(), s.dispatchEvent(new Event("pause")));
        },
        resume() {
          if (S === null) throw n();
          x || (j(), s.dispatchEvent(new Event("resume")));
        },
        start(N) {
          var v;
          if (S !== null) throw n();
          if (o.getVideoTracks().length > 0) throw r();
          s.dispatchEvent(new Event("start"));
          const _ = o.getAudioTracks(),
            P =
              _.length === 0
                ? 2
                : (v = _[0].getSettings().channelCount) !== null && v !== void 0
                ? v
                : 2;
          S = Promise.all([j(), y.then(() => gN(d, u, P, o, i))]).then(
            async ([
              ,
              {
                audioBufferSourceNode: D,
                encoderId: B,
                mediaStreamAudioSourceNode: R,
                port: F,
                recorderAudioWorkletNode: $,
              },
            ]) => {
              R.connect($),
                await new Promise((E) => {
                  (D.onended = E),
                    D.connect($),
                    D.start(u.currentTime + f / u.sampleRate);
                }),
                D.disconnect($);
              const M = new tN(u, { offset: 0 });
              return (
                (M.onended = () => M.disconnect()),
                M.connect(u.destination),
                M.start(),
                await $.record(F),
                N !== void 0 && (g = k(B, N)),
                {
                  constantSourceNode: M,
                  encoderId: B,
                  mediaStreamAudioSourceNode: R,
                  recorderAudioWorkletNode: $,
                }
              );
            }
          );
          const U = o.getTracks();
          (h = () => {
            b(), s.dispatchEvent(new ErrorEvent("error", { error: t() }));
          }),
            o.addEventListener("addtrack", h),
            o.addEventListener("removetrack", h),
            (m = setInterval(() => {
              const D = o.getTracks();
              (D.length !== U.length || D.some((B, R) => B !== U[R])) &&
                h !== null &&
                h();
            }, 1e3));
        },
        stop: b,
      }
    );
  };
class eu {
  constructor(t, n = 0, r) {
    if (n < 0 || (r !== void 0 && r < 0)) throw new RangeError();
    const s = t.reduce((f, d) => f + d.byteLength, 0);
    if (n > s || (r !== void 0 && n + r > s)) throw new RangeError();
    const o = [],
      i = r === void 0 ? s - n : r,
      l = [];
    let c = 0,
      u = n;
    for (const f of t)
      if (l.length === 0)
        if (f.byteLength > u) {
          c = f.byteLength - u;
          const d = c > i ? i : c;
          o.push(new DataView(f, u, d)), l.push(f);
        } else u -= f.byteLength;
      else if (c < i) {
        c += f.byteLength;
        const d = c > i ? f.byteLength - c + i : f.byteLength;
        o.push(new DataView(f, 0, d)), l.push(f);
      }
    (this._buffers = l),
      (this._byteLength = i),
      (this._byteOffset = u),
      (this._dataViews = o),
      (this._internalBuffer = new DataView(new ArrayBuffer(8)));
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get byteOffset() {
    return this._byteOffset;
  }
  getFloat32(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
      this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
      this._internalBuffer.getFloat32(0, n)
    );
  }
  getFloat64(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
      this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
      this._internalBuffer.setUint8(4, this.getUint8(t + 4)),
      this._internalBuffer.setUint8(5, this.getUint8(t + 5)),
      this._internalBuffer.setUint8(6, this.getUint8(t + 6)),
      this._internalBuffer.setUint8(7, this.getUint8(t + 7)),
      this._internalBuffer.getFloat64(0, n)
    );
  }
  getInt16(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.getInt16(0, n)
    );
  }
  getInt32(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
      this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
      this._internalBuffer.getInt32(0, n)
    );
  }
  getInt8(t) {
    const [n, r] = this._findDataViewWithOffset(t);
    return n.getInt8(t - r);
  }
  getUint16(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.getUint16(0, n)
    );
  }
  getUint32(t, n) {
    return (
      this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
      this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
      this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
      this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
      this._internalBuffer.getUint32(0, n)
    );
  }
  getUint8(t) {
    const [n, r] = this._findDataViewWithOffset(t);
    return n.getUint8(t - r);
  }
  setFloat32(t, n, r) {
    this._internalBuffer.setFloat32(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
      this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
      this.setUint8(t + 3, this._internalBuffer.getUint8(3));
  }
  setFloat64(t, n, r) {
    this._internalBuffer.setFloat64(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
      this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
      this.setUint8(t + 3, this._internalBuffer.getUint8(3)),
      this.setUint8(t + 4, this._internalBuffer.getUint8(4)),
      this.setUint8(t + 5, this._internalBuffer.getUint8(5)),
      this.setUint8(t + 6, this._internalBuffer.getUint8(6)),
      this.setUint8(t + 7, this._internalBuffer.getUint8(7));
  }
  setInt16(t, n, r) {
    this._internalBuffer.setInt16(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1));
  }
  setInt32(t, n, r) {
    this._internalBuffer.setInt32(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
      this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
      this.setUint8(t + 3, this._internalBuffer.getUint8(3));
  }
  setInt8(t, n) {
    const [r, s] = this._findDataViewWithOffset(t);
    r.setInt8(t - s, n);
  }
  setUint16(t, n, r) {
    this._internalBuffer.setUint16(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1));
  }
  setUint32(t, n, r) {
    this._internalBuffer.setUint32(0, n, r),
      this.setUint8(t, this._internalBuffer.getUint8(0)),
      this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
      this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
      this.setUint8(t + 3, this._internalBuffer.getUint8(3));
  }
  setUint8(t, n) {
    const [r, s] = this._findDataViewWithOffset(t);
    r.setUint8(t - s, n);
  }
  _findDataViewWithOffset(t) {
    let n = 0;
    for (const r of this._dataViews) {
      const s = n + r.byteLength;
      if (t >= n && t < s) return [r, n];
      n = s;
    }
    throw new RangeError();
  }
}
const vN = (e, t, n, r, s) => (o, i, l, c) => {
    const u = l.getAudioTracks(),
      f = [],
      d = u.length === 0 ? void 0 : u[0].getSettings().channelCount,
      p = new i(l, { mimeType: "audio/webm;codecs=pcm" }),
      y = u.length === 0 ? void 0 : u[0].getSettings().sampleRate;
    let h = null,
      m = () => {};
    const S = (w) => {
        o.dispatchEvent(e("dataavailable", { data: new Blob(w, { type: c }) }));
      },
      g = async (w, k) => {
        const j = await rl(w, k);
        p.state === "inactive" ? f.push(...j) : (S(j), (h = g(w, k)));
      },
      x = () => {
        p.state !== "inactive" &&
          (h !== null && (h.catch(() => {}), (h = null)),
          m(),
          (m = () => {}),
          p.stop());
      };
    return (
      p.addEventListener("error", () => {
        x(), o.dispatchEvent(new ErrorEvent("error", { error: t() }));
      }),
      p.addEventListener("start", () => o.dispatchEvent(new Event("start"))),
      {
        get mimeType() {
          return c;
        },
        get state() {
          return p.state;
        },
        pause() {
          return p.pause();
        },
        resume() {
          return p.resume();
        },
        start(w) {
          if (l.getVideoTracks().length > 0) throw n();
          if (p.state === "inactive") {
            if (y === void 0) throw new Error("The sampleRate is not defined.");
            let k = !1,
              j = !1,
              b = 0,
              C = qy(c, y);
            m = () => {
              j = !0;
            };
            const N = Zy(
              p,
              "dataavailable"
            )(({ data: v }) => {
              (b += 1),
                (C = C.then(
                  async ({
                    dataView: _ = null,
                    elementType: P = null,
                    encoderId: U,
                    port: D,
                  }) => {
                    const B = await v.arrayBuffer();
                    b -= 1;
                    const R =
                      _ === null
                        ? new eu([B])
                        : new eu([..._.buffers, B], _.byteOffset);
                    if (!k && p.state === "recording" && !j) {
                      const O = s(R, 0);
                      if (O === null)
                        return {
                          dataView: R,
                          elementType: P,
                          encoderId: U,
                          port: D,
                        };
                      const { value: z } = O;
                      if (z !== 172351395)
                        return {
                          dataView: _,
                          elementType: P,
                          encoderId: U,
                          port: D,
                        };
                      k = !0;
                    }
                    const {
                        currentElementType: F,
                        offset: $,
                        contents: M,
                      } = r(R, P, d),
                      E =
                        $ < R.byteLength
                          ? new eu(R.buffers, R.byteOffset + $)
                          : null;
                    return (
                      M.forEach((O) =>
                        D.postMessage(
                          O,
                          O.map(({ buffer: z }) => z)
                        )
                      ),
                      b === 0 &&
                        (p.state === "inactive" || j) &&
                        (rl(U, null).then((O) => {
                          S([...f, ...O]),
                            (f.length = 0),
                            o.dispatchEvent(new Event("stop"));
                        }),
                        D.postMessage([]),
                        D.close(),
                        N()),
                      { dataView: E, elementType: F, encoderId: U, port: D }
                    );
                  }
                ));
            });
            w !== void 0 && C.then(({ encoderId: v }) => (h = g(v, w)));
          }
          p.start(100);
        },
        stop: x,
      }
    );
  },
  xN = () => (typeof window > "u" ? null : window),
  B2 = (e, t) => {
    if (t >= e.byteLength) return null;
    const n = e.getUint8(t);
    if (n > 127) return 1;
    if (n > 63) return 2;
    if (n > 31) return 3;
    if (n > 15) return 4;
    if (n > 7) return 5;
    if (n > 3) return 6;
    if (n > 1) return 7;
    if (n > 0) return 8;
    const r = B2(e, t + 1);
    return r === null ? null : r + 8;
  },
  wN = (e, t) => (n) => {
    const r = { value: e };
    return (
      Object.defineProperties(n, { currentTarget: r, target: r }),
      typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    );
  },
  I2 = [],
  uc = xN(),
  SN = zC(uc),
  U2 = BC(SN),
  CN = yN(U2, Yf, FC, Jl),
  up = KC(B2),
  bN = qC(up),
  kN = GC(up),
  jN = IC(bN, kN),
  NN = vN(U2, Yf, Jl, jN, up),
  EN = $C(uc),
  TN = HC(uc),
  _N = WC(Yf, Jl),
  RN = VC(_N, Jl, CN, NN, I2, UC(EN, wN), TN),
  AN = () => DC(uc),
  PN = async (e) => {
    I2.push(await OC(e));
  },
  MN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, MediaRecorder: RN, isSupported: AN, register: PN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  LN = Vm(MN),
  ON = Wy({
    characterize:
      ({ call: e }) =>
      () =>
        e("characterize"),
    encode:
      ({ call: e }) =>
      (t, n) =>
        e("encode", { recordingId: t, timeslice: n }),
    record:
      ({ call: e }) =>
      async (t, n, r) => {
        await e(
          "record",
          { recordingId: t, sampleRate: n, typedArrays: r },
          r.map(({ buffer: s }) => s)
        );
      },
  }),
  BN = (e) => {
    const t = new Worker(e);
    return ON(t);
  },
  IN = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,s=536870912,a=2*s,o=function(e,t){return function(r){var o=t.get(r),i=void 0===o?r.size:o<a?o+1:0;if(!r.has(i))return e(r,i);if(r.size<s){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=o(c,i),u=t(l);e.addUniqueNumber=u,e.generateUniqueNumber=l}(t)}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,s=(e,t)=>Object.assign(new Error(e),{status:t}),a=t=>s('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),o=(t,r)=>async({data:{id:o,method:i,params:c}})=>{const l=r[i];try{if(void 0===l)throw(e=>s('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?l():l(c);if(void 0===r)throw(t=>s('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const u=r instanceof Promise?await r:r;if(null===o){if(void 0!==u.result)throw a(i)}else{if(void 0===u.result)throw a(i);const{result:e,transferables:r=[]}=u;t.postMessage({id:o,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:o})}};var i=r(455);const c=new Map,l=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),s=(0,i.generateUniqueNumber)(c);return c.set(s,(()=>{n(),t.close(),c.delete(s)})),{result:s}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>s('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),u=(e,t,r=()=>!0)=>{const n=l(u,t,r),s=o(e,n);return e.addEventListener("message",s),()=>e.removeEventListener("message",s)},d=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let s=0;s<t;s+=1){const t=e[s];void 0===r[s]&&(r[s]=[]);const a=t.shift();if(void 0===a)break e;r[s].push(a),0===s&&(n+=a.length)}}if(n>t){const s=n-t;r.forEach(((t,r)=>{const n=t.pop(),a=n.length-s;t.push(n.subarray(0,a)),e[r].unshift(n.subarray(a))}))}return r},f=new Map,m=(e=>(t,r,n)=>{const s=e.get(t);if(void 0===s){const s={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,s),s}return s.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),s})(f),p=((e,t)=>(r,n,s,a)=>{const o=s>>3,i="subsequent"===n?0:44,c=r.length,l=e(r[0]),u=new ArrayBuffer(l*c*o+i),d=new DataView(u);return"subsequent"!==n&&t(d,s,c,"complete"===n?l:Number.POSITIVE_INFINITY,a),r.forEach(((e,t)=>{let r=i+t*o;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=c*o}}))})),[u]})(d,((e,t,r,n,s)=>{const a=t>>3,o=Math.min(n*r*a,4294967251);e.setUint32(0,1380533830),e.setUint32(4,o+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,s,!0),e.setUint32(28,s*r*a,!0),e.setUint16(32,r*a,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,o,!0)})),v=new Map;u(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:({recordingId:e,timeslice:t})=>{const r=v.get(e);void 0!==r&&(v.delete(e),r.reject(new Error("Another request was made to initiate an encoding.")));const n=f.get(e);if(null!==t){if(void 0===n||d(n.channelDataArrays[0])*(1e3/n.sampleRate)<t)return new Promise(((r,n)=>{v.set(e,{reject:n,resolve:r,timeslice:t})}));const r=h(n.channelDataArrays,Math.ceil(t*(n.sampleRate/1e3))),s=p(r,n.isComplete?"initial":"subsequent",16,n.sampleRate);return n.isComplete=!1,{result:s,transferables:s}}if(void 0!==n){const t=p(n.channelDataArrays,n.isComplete?"complete":"subsequent",16,n.sampleRate);return f.delete(e),{result:t,transferables:t}}return{result:[],transferables:[]}},record:({recordingId:e,sampleRate:t,typedArrays:r})=>{const n=m(e,t,r),s=v.get(e);if(void 0!==s&&d(n.channelDataArrays[0])*(1e3/t)>=s.timeslice){const r=h(n.channelDataArrays,Math.ceil(s.timeslice*(t/1e3))),a=p(r,n.isComplete?"initial":"subsequent",16,t);n.isComplete=!1,v.delete(e),s.resolve({result:a,transferables:a})}return{result:null}}})})()})();`,
  UN = new Blob([IN], { type: "application/javascript; charset=utf-8" }),
  $2 = URL.createObjectURL(UN),
  eo = BN($2),
  $N = eo.characterize,
  FN = eo.connect,
  DN = eo.disconnect,
  VN = eo.encode,
  zN = eo.isSupported,
  WN = eo.record;
URL.revokeObjectURL($2);
const HN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        characterize: $N,
        connect: FN,
        disconnect: DN,
        encode: VN,
        isSupported: zN,
        record: WN,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qN = Vm(HN);
(function (e) {
  var t =
      (Ti && Ti.__awaiter) ||
      function (u, f, d, p) {
        function y(h) {
          return h instanceof d
            ? h
            : new d(function (m) {
                m(h);
              });
        }
        return new (d || (d = Promise))(function (h, m) {
          function S(w) {
            try {
              x(p.next(w));
            } catch (k) {
              m(k);
            }
          }
          function g(w) {
            try {
              x(p.throw(w));
            } catch (k) {
              m(k);
            }
          }
          function x(w) {
            w.done ? h(w.value) : y(w.value).then(S, g);
          }
          x((p = p.apply(u, f || [])).next());
        });
      },
    n =
      (Ti && Ti.__generator) ||
      function (u, f) {
        var d = {
            label: 0,
            sent: function () {
              if (h[0] & 1) throw h[1];
              return h[1];
            },
            trys: [],
            ops: [],
          },
          p,
          y,
          h,
          m;
        return (
          (m = { next: S(0), throw: S(1), return: S(2) }),
          typeof Symbol == "function" &&
            (m[Symbol.iterator] = function () {
              return this;
            }),
          m
        );
        function S(x) {
          return function (w) {
            return g([x, w]);
          };
        }
        function g(x) {
          if (p) throw new TypeError("Generator is already executing.");
          for (; d; )
            try {
              if (
                ((p = 1),
                y &&
                  (h =
                    x[0] & 2
                      ? y.return
                      : x[0]
                      ? y.throw || ((h = y.return) && h.call(y), 0)
                      : y.next) &&
                  !(h = h.call(y, x[1])).done)
              )
                return h;
              switch (((y = 0), h && (x = [x[0] & 2, h.value]), x[0])) {
                case 0:
                case 1:
                  h = x;
                  break;
                case 4:
                  return d.label++, { value: x[1], done: !1 };
                case 5:
                  d.label++, (y = x[1]), (x = [0]);
                  continue;
                case 7:
                  (x = d.ops.pop()), d.trys.pop();
                  continue;
                default:
                  if (
                    ((h = d.trys),
                    !(h = h.length > 0 && h[h.length - 1]) &&
                      (x[0] === 6 || x[0] === 2))
                  ) {
                    d = 0;
                    continue;
                  }
                  if (x[0] === 3 && (!h || (x[1] > h[0] && x[1] < h[3]))) {
                    d.label = x[1];
                    break;
                  }
                  if (x[0] === 6 && d.label < h[1]) {
                    (d.label = h[1]), (h = x);
                    break;
                  }
                  if (h && d.label < h[2]) {
                    (d.label = h[2]), d.ops.push(x);
                    break;
                  }
                  h[2] && d.ops.pop(), d.trys.pop();
                  continue;
              }
              x = f.call(u, d);
            } catch (w) {
              (x = [6, w]), (y = 0);
            } finally {
              p = h = 0;
            }
          if (x[0] & 5) throw x[1];
          return { value: x[0] ? x[1] : void 0, done: !0 };
        }
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.ReactMediaRecorder =
      e.useReactMediaRecorder =
      e.RecorderErrors =
        void 0);
  var r = LN,
    s = T,
    o = qN,
    i;
  (function (u) {
    (u.AbortError = "media_aborted"),
      (u.NotAllowedError = "permission_denied"),
      (u.NotFoundError = "no_specified_media_found"),
      (u.NotReadableError = "media_in_use"),
      (u.OverconstrainedError = "invalid_media_constraints"),
      (u.TypeError = "no_constraints"),
      (u.NONE = ""),
      (u.NO_RECORDER = "recorder_error");
  })((i = e.RecorderErrors || (e.RecorderErrors = {})));
  function l(u) {
    var f = this,
      d = u.audio,
      p = d === void 0 ? !0 : d,
      y = u.video,
      h = y === void 0 ? !1 : y,
      m = u.selfBrowserSurface,
      S = m === void 0 ? void 0 : m,
      g = u.onStop,
      x =
        g === void 0
          ? function () {
              return null;
            }
          : g,
      w = u.onStart,
      k =
        w === void 0
          ? function () {
              return null;
            }
          : w,
      j = u.blobPropertyBag,
      b = u.screen,
      C = b === void 0 ? !1 : b,
      N = u.mediaRecorderOptions,
      v = N === void 0 ? void 0 : N,
      _ = u.customMediaStream,
      P = _ === void 0 ? null : _,
      U = u.stopStreamsOnStop,
      D = U === void 0 ? !0 : U,
      B = u.askPermissionOnMount,
      R = B === void 0 ? !1 : B,
      F = (0, s.useRef)(null),
      $ = (0, s.useRef)([]),
      M = (0, s.useRef)(null),
      E = (0, s.useState)("idle"),
      O = E[0],
      z = E[1],
      K = (0, s.useState)(!1),
      st = K[0],
      We = K[1],
      Ie = (0, s.useState)(void 0),
      Y = Ie[0],
      de = Ie[1],
      ft = (0, s.useState)("NONE"),
      Cr = ft[0],
      Qt = ft[1],
      pt = (0, s.useState)(!1),
      bn = pt[0],
      to = pt[1];
    (0, s.useEffect)(function () {
      if (!bn) {
        var ne = function () {
          return t(f, void 0, void 0, function () {
            var ie;
            return n(this, function (Pe) {
              switch (Pe.label) {
                case 0:
                  return (
                    Pe.trys.push([0, 3, , 4]),
                    (ie = r.register),
                    [4, (0, o.connect)()]
                  );
                case 1:
                  return [4, ie.apply(void 0, [Pe.sent()])];
                case 2:
                  return Pe.sent(), [3, 4];
                case 3:
                  return Pe.sent(), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        };
        ne(), to(!0);
      }
    }, []);
    var br = (0, s.useCallback)(
      function () {
        return t(f, void 0, void 0, function () {
          var ne, ie, Pe, Nt, ns;
          return n(this, function (ht) {
            switch (ht.label) {
              case 0:
                z("acquiring_media"),
                  (ne = {
                    audio: typeof p == "boolean" ? !!p : p,
                    video: typeof h == "boolean" ? !!h : h,
                  }),
                  (ht.label = 1);
              case 1:
                return (
                  ht.trys.push([1, 9, , 10]),
                  P ? ((M.current = P), [3, 8]) : [3, 2]
                );
              case 2:
                return C
                  ? [
                      4,
                      window.navigator.mediaDevices.getDisplayMedia({
                        video: h || !0,
                        selfBrowserSurface: S,
                      }),
                    ]
                  : [3, 6];
              case 3:
                return (
                  (ie = ht.sent()),
                  ie.getVideoTracks()[0].addEventListener("ended", function () {
                    $t();
                  }),
                  p
                    ? [
                        4,
                        window.navigator.mediaDevices.getUserMedia({
                          audio: p,
                        }),
                      ]
                    : [3, 5]
                );
              case 4:
                (Pe = ht.sent()),
                  Pe.getAudioTracks().forEach(function (ji) {
                    return ie.addTrack(ji);
                  }),
                  (ht.label = 5);
              case 5:
                return (M.current = ie), [3, 8];
              case 6:
                return [4, window.navigator.mediaDevices.getUserMedia(ne)];
              case 7:
                (Nt = ht.sent()), (M.current = Nt), (ht.label = 8);
              case 8:
                return z("idle"), [3, 10];
              case 9:
                return (ns = ht.sent()), Qt(ns.name), z("idle"), [3, 10];
              case 10:
                return [2];
            }
          });
        });
      },
      [p, h, C]
    );
    (0, s.useEffect)(
      function () {
        if (!window.MediaRecorder) throw new Error("Unsupported Browser");
        if (C && !window.navigator.mediaDevices.getDisplayMedia)
          throw new Error("This browser doesn't support screen capturing");
        var ne = function (ie) {
          var Pe = navigator.mediaDevices.getSupportedConstraints(),
            Nt = Object.keys(ie).filter(function (ns) {
              return !Pe[ns];
            });
          Nt.length > 0 &&
            console.error(
              "The constraints " +
                Nt.join(",") +
                " doesn't support on this browser. Please check your ReactMediaRecorder component."
            );
        };
        return (
          typeof p == "object" && ne(p),
          typeof h == "object" && ne(h),
          v &&
            v.mimeType &&
            (MediaRecorder.isTypeSupported(v.mimeType) ||
              console.error(
                "The specified MIME type you supplied for MediaRecorder doesn't support this browser"
              )),
          !M.current && R && br(),
          function () {
            if (M.current) {
              var ie = M.current.getTracks();
              ie.forEach(function (Pe) {
                return Pe.clone().stop();
              });
            }
          }
        );
      },
      [p, C, h, br, v, R]
    );
    var V = function () {
        return t(f, void 0, void 0, function () {
          var ne;
          return n(this, function (ie) {
            switch (ie.label) {
              case 0:
                return Qt("NONE"), M.current ? [3, 2] : [4, br()];
              case 1:
                ie.sent(), (ie.label = 2);
              case 2:
                return M.current
                  ? ((ne = M.current.getTracks().some(function (Pe) {
                      return Pe.readyState === "ended";
                    })),
                    ne ? [4, br()] : [3, 4])
                  : [3, 5];
              case 3:
                ie.sent(), (ie.label = 4);
              case 4:
                if (!M.current.active) return [2];
                (F.current = new r.MediaRecorder(M.current, v || void 0)),
                  (F.current.ondataavailable = G),
                  (F.current.onstop = fe),
                  (F.current.onstart = Se),
                  (F.current.onerror = function () {
                    Qt("NO_RECORDER"), z("idle");
                  }),
                  F.current.start(),
                  z("recording"),
                  (ie.label = 5);
              case 5:
                return [2];
            }
          });
        });
      },
      G = function (ne) {
        var ie = ne.data;
        $.current.push(ie);
      },
      Se = function () {
        k();
      },
      fe = function () {
        var ne = $.current[0],
          ie = Object.assign(
            { type: ne.type },
            j || (h ? { type: "video/mp4" } : { type: "audio/wav" })
          ),
          Pe = new Blob($.current, ie),
          Nt = URL.createObjectURL(Pe);
        z("stopped"), de(Nt), x(Nt, Pe);
      },
      ee = function (ne) {
        We(ne),
          M.current &&
            M.current.getAudioTracks().forEach(function (ie) {
              return (ie.enabled = !ne);
            });
      },
      ve = function () {
        F.current &&
          F.current.state === "recording" &&
          (z("paused"), F.current.pause());
      },
      Xe = function () {
        F.current &&
          F.current.state === "paused" &&
          (z("recording"), F.current.resume());
      },
      $t = function () {
        F.current &&
          F.current.state !== "inactive" &&
          (z("stopping"),
          F.current.stop(),
          D &&
            M.current &&
            M.current.getTracks().forEach(function (ne) {
              return ne.stop();
            }),
          ($.current = []));
      };
    return {
      error: i[Cr],
      muteAudio: function () {
        return ee(!0);
      },
      unMuteAudio: function () {
        return ee(!1);
      },
      startRecording: V,
      pauseRecording: ve,
      resumeRecording: Xe,
      stopRecording: $t,
      mediaBlobUrl: Y,
      status: O,
      isAudioMuted: st,
      previewStream: M.current
        ? new MediaStream(M.current.getVideoTracks())
        : null,
      previewAudioStream: M.current
        ? new MediaStream(M.current.getAudioTracks())
        : null,
      clearBlobUrl: function () {
        Y && URL.revokeObjectURL(Y), de(void 0), z("idle");
      },
    };
  }
  e.useReactMediaRecorder = l;
  var c = function (u) {
    return u.render(l(u));
  };
  e.ReactMediaRecorder = c;
})(Fy);
var GN = Fy;
const Ar = ({
    options: e,
    selectedOption: t,
    onSelect: n,
    classNames: r,
    selectedColor: s,
  }) =>
    a.jsx("div", {
      className: "flex gap-1 mt-1 justify-evenly",
      children: e.map((o, i) =>
        a.jsx(
          "button",
          {
            className: `${r} ${t === o ? s : "bg-gray-900 text-gray-300"}`,
            onClick: () => n(o),
            children: o,
          },
          i
        )
      ),
    }),
  KN = ({ isBoundary: e, setIsBoundary: t }) => {
    const n = () => {
      console.log("Is b ", e), t((r) => !r);
    };
    return a.jsx("button", {
      onClick: n,
      className: "rounded-full bg-opacity-50 bg-gray-900 p-1 shadow-xl",
      children: a.jsx(m7, { color: `${e ? "success" : ""}` }),
    });
  };
async function Jt({
  matchId: e,
  innings: t,
  targetRuns: n,
  leadingTeam: r,
  thirdInningsBattingTeam: s = "",
  thirdInningsBowlingTeam: o = "",
  fourthInningsBattingTeam: i = "",
  fourthInningsBowlingTeam: l = "",
}) {
  try {
    const c = await me.patch(`match/update-innings/${e}/current-innings/`, {
      currentInnings: t,
      currentTarget: n,
      currentLeadingTeam: r,
      thirdInningsBattingTeam: s,
      thirdInningsBowlingTeam: o,
      fourthInningsBattingTeam: i,
      fourthInningsBowlingTeam: l,
    });
    console.log("Updated Innings ", c);
  } catch (c) {
    console.log("Error updating Match Innings ", c);
  }
}
async function gn({ matchId: e, matchEnded: t, matchResult: n }) {
  try {
    const r = await me.patch(`match/update-innings/${e}/current-innings/`, {
      matchEnded: t,
      matchResult: n,
    });
    if (r.status === 200 || r.status === 201) return r.data;
    console.error(`Error: Received unexpected status ${r.status}`);
  } catch (r) {
    console.log("Error updating Match Innings ", r);
  }
}
const ZN = () => {
    const {
        matchId: e,
        currentInnings: t,
        striker: n,
        nonStriker: r,
        bowler: s,
        matchType: o,
        ballRun: i,
        isBye: l,
        isLegBye: c,
        wideRuns: u,
        noBall: f,
        penaltyRuns: d,
        overThrowRuns: p,
        isShortRuns: y,
        fielder1: h,
        fielder2: m,
        deliveryType: S,
        creaseMovement: g,
        shotConnection: x,
        batSubject: w,
        stroke: k,
        keeperActivity: j,
        batsmanActivity: b,
        fieldingActivity: C,
        umpireActivity: N,
        wicketKeeperPosition: v,
        bowlerReleaseSide: _,
        shotZonePosition: P,
        wagonWheelPosition: U,
        trajectoryBallPosition: D,
        bowlerReleaseBallPosition: B,
        wicketType: R,
        dismissedPlayer: F,
        dismissedBy: $,
        caughtBy: M,
        stumpedBy: E,
        runOutFielder1: O,
        runOutFielder2: z,
        resetAll: K,
        setTeam1Players: st,
        setTeam2Players: We,
        setStriker: Ie,
        setNonStriker: Y,
        setBowler: de,
        battingTeam: ft,
        setBattingTeam: Cr,
        bowlingTeam: Qt,
        targetRuns: pt,
        setTargetRuns: bn,
        teamLeadBy: to,
        setTeamLeadBy: br,
        setInningsToBeUpdated: V,
        setIsSaveMatchModalVisible: G,
        ballNumber: Se,
        setBallNumber: fe,
      } = qe(),
      [ee, ve] = T.useState("Save"),
      [Xe, $t] = T.useState(!1),
      ne = Ut(),
      [ie, Pe] = T.useState([]),
      [Nt, ns] = T.useState(""),
      [ht, ji] = T.useState(!1),
      [F2, dp] = T.useState(!1),
      {
        startRecording: D2,
        stopRecording: V2,
        mediaBlobUrl: fp,
      } = GN.useReactMediaRecorder({
        video: { deviceId: Nt ? { exact: Nt } : void 0 },
        audio: !1,
      });
    T.useEffect(() => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((H) => {
          const ce = H.filter((q) => q.kind === "videoinput");
          Pe(ce);
          const Ue = ce.find((q) => q.label.includes("OBS Virtual Camera"));
          Ue && ns(Ue.deviceId);
        })
        .catch((H) => {
          console.error("Error fetching video devices:", H);
        });
    }, []);
    const z2 = () => {
        D2(), ji(!0), dp(!1);
      },
      W2 = () => {
        V2(), ji(!1), dp(!0);
      },
      H2 = (H = "match-video.mp4") => {
        if (fp) {
          const ce = document.createElement("a");
          ce.href = fp;
          const q = Date.now().toString(),
            ge = Se + 1,
            Me = t.toString();
          (ce.download =
            e.toString() + "-" + Me + "-" + ge.toString() + "-" + q),
            ce.click();
        }
      },
      dc = async ({ newTeamRuns: H }) => {
        qe.getState().battingTeam,
          o.isLimitedOvers
            ? t % 2 != 0 || (t % 2 == 0 && H == pt)
              ? (bn(H),
                console.log("target runs ", H),
                await Jt({
                  matchId: e,
                  innings: t + 1,
                  targetRuns: H,
                  leadingTeam: ft.id,
                  currentSuperOverCount:
                    t == 1 ? "" : t % 2 == 0 ? t / 2 : (t + 1) / 2,
                }),
                Ie({}),
                Y({}),
                de({}),
                V(t + 1))
              : H > pt
              ? (
                  await gn({
                    matchId: e,
                    matchEnded: !0,
                    matchResult: ft.name + " won the match",
                  })
                ).matchEnded
                ? ne("/match")
                : toast.error("Something went wrong, Please try Again!")
              : H < pt &&
                ((
                  await gn({
                    matchId: e,
                    matchEnded: !0,
                    matchResult: Qt.name + " won the match",
                  })
                ).matchEnded
                  ? ne("/match")
                  : toast.error("Something went wrong, Please try Again!"))
            : t == 1
            ? (bn(H),
              await Jt({
                matchId: e,
                innings: 2,
                targetRuns: H,
                leadingTeam: ft.id,
              }),
              Ie({}),
              Y({}),
              de({}),
              V(2))
            : t == 2
            ? G(!0)
            : t == 3
            ? (ft.id == to
                ? bn(pt + H)
                : pt > H
                ? (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: Qt.name + " won the match",
                    })
                  ).matchEnded
                  ? ne("/match")
                  : toast.error("Something went wrong, Please try Again!")
                : bn(H - pt),
              Jt({ matchId: e, innings: 4, targetRuns: H, leadingTeam: ft.id }),
              Ie({}),
              Y({}),
              de({}),
              V(4))
            : t == 4 &&
              (H > pt
                ? (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: ft.name + " won the match",
                    })
                  ).matchEnded
                  ? ne("/match")
                  : toast.error("Something went wrong, Please try Again!")
                : (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: Qt.name + " won the match",
                    })
                  ).matchEnded
                ? ne("/match")
                : toast.error("Something went wrong, Please try Again!"));
      },
      q2 = (H) => {
        const Ue = qe.getState().team1Players.map((q) => {
          const { player: ge } = q;
          if (ge.id === H.striker) {
            var Me = q.balls_faced;
            H.wideRuns > 0 || H.noBallRuns > 0 || (Me += 1);
            const mt = q.runs_scored + H.strikerRuns,
              Et = ((mt / Me) * 100).toFixed(2),
              Ft = (Ni, rs) => {
                if (H.dismissedPlayer) {
                  H.dismissedPlayer == Ni
                    ? Ie((pc) => ({ ...pc, isModalVisible: !0 }))
                    : H.dismissedPlayer == rs &&
                      Y((pc) => ({ ...pc, isModalVisible: !0 }));
                  const no = qe.getState().battingTeam,
                    Ei = no.teamWickets + (H.dismissedPlayer ? 1 : 0),
                    fc = no.teamRuns + H.teamRuns;
                  (Ei >= 2 ||
                    (o.isLimitedOvers &&
                      t > 2 &&
                      o.superOverActivePlayersPerTeam)) &&
                    dc({ newTeamRuns: fc });
                }
              },
              kn = (qe.getState().battingTeam.teamOvers * 10) % 10;
            return (
              (i % 2 != 0 && kn != 5) ||
              (i % 2 == 0 && kn == 5 && u == 0 && H.noBallRuns == 0)
                ? (Ie({ ...r }),
                  Y({
                    id: ge.id,
                    name: ge.firstName + " " + ge.lastName,
                    runsScored: mt,
                    ballsFaced: Me,
                    fours: H.strikerRuns === 4 ? q.fours + 1 : q.fours,
                    sixes: H.strikerRuns === 6 ? q.sixes + 1 : q.sixes,
                    strikeRate: Et,
                    oversBowled: q.overs_bowled,
                    runsConceeded: q.runs_conceeded,
                    wicketsTaken: q.wickets_taken,
                    economy: q.economy,
                    isModalVisible: !1,
                  }),
                  Ft(r.id, ge.id))
                : (Ie({
                    id: ge.id,
                    name: ge.firstName + " " + ge.lastName,
                    runsScored: mt,
                    ballsFaced: Me,
                    fours: H.strikerRuns === 4 ? q.fours + 1 : q.fours,
                    sixes: H.strikerRuns === 6 ? q.sixes + 1 : q.sixes,
                    strikeRate: Et,
                    oversBowled: q.overs_bowled,
                    runsConceeded: q.runs_conceeded,
                    wicketsTaken: q.wickets_taken,
                    economy: q.economy,
                    isModalVisible: !1,
                  }),
                  Ft(ge.id, r.id)),
              {
                ...q,
                runs_scored: mt,
                balls_faced: Me,
                strike_rate: Et,
                fours: H.strikerRuns === 4 ? q.fours + 1 : q.fours,
                sixes: H.strikerRuns === 6 ? q.sixes + 1 : q.sixes,
                has_dismissed:
                  H.dismissedPlayer == q.player.id ? 1 : q.has_dismissed,
              }
            );
          }
          return q;
        });
        return st(Ue), Ue;
      },
      G2 = (H) => {
        const Ue = qe.getState().team2Players.map((q) => {
          const { player: ge } = q;
          if (ge.id === H.bowler) {
            var Me = q.overs_bowled;
            if (!(H.wideRuns > 0 || H.noBallRuns > 0)) {
              var mt = Math.floor(q.overs_bowled),
                Et = (q.overs_bowled * 10) % 10;
              Et == 5 ? ((mt += 1), (Et = 0)) : (Et += 1), (Me = mt + Et / 10);
            }
            var Ft = q.wickets_taken;
            const Vn = q.runs_conceded + H.bowlerRuns,
              kn = (Vn / Me).toFixed(2);
            return (
              (H.wicketType == "Caught" ||
                H.wicketType == "Bowled" ||
                H.wicketType == "Stumped" ||
                H.wicketType == "Caught and Bowled" ||
                H.wicketType == "Hit Wicket") &&
                (Ft += 1),
              de({
                id: ge.id,
                name: ge.firstName + " " + ge.lastName,
                runsScored: q.runs_scored,
                ballsFaced: q.balls_faced,
                fours: q.fours,
                sixes: q.sixes,
                strikeRate: q.strikeRate,
                oversBowled: Me,
                runsConceeded: Vn,
                wicketsTaken: Ft,
                economy: kn,
                isModalVisible: !1,
              }),
              {
                ...q,
                runs_conceded: Vn,
                overs_bowled: Me,
                wickets_taken: Ft,
                economy: kn,
              }
            );
          }
          return q;
        });
        return We(Ue), Ue;
      },
      K2 = (H) => {
        const ce = qe.getState().battingTeam,
          Ue = ce.teamRuns + H.teamRuns,
          q = ce.teamWickets + (H.dismissedPlayer ? 1 : 0);
        var ge = ce.teamOvers,
          Me = (ce.teamOvers * 10) % 10;
        if (!(H.wideRuns > 0 || H.noBallRuns > 0)) {
          var mt = Math.floor(ce.teamOvers);
          Me == 5 ? ((mt += 1), (Me = 0)) : (Me += 1), (ge = mt + Me / 10);
        }
        const Et = (ge > 0 ? Ue / ge : 0).toFixed(2),
          Ft = {
            ...ce,
            teamRuns: Ue,
            teamWickets: q,
            teamOvers: ge,
            teamRunRate: Et,
          };
        return (
          Cr(Ft),
          o.isLimitedOvers && t % 2 == 0 && Ue > pt && dc({ newTeamRuns: Ue }),
          console.log(o),
          Me === 0 &&
            H.wideRuns === 0 &&
            H.noBallRuns === 0 &&
            (o.isLimitedOvers &&
              (ge >= o.oversPerInnings ||
                (t > 2 && o.superOverActivePlayersPerTeam)) &&
              dc({ newTeamRuns: Ue }),
            de((Vn) => ({ ...Vn, isModalVisible: !0 }))),
          Ft
        );
      },
      Z2 = async (H) => {
        try {
          const ce = await Zf({ formData: H, extendedUrl: "ball/balls/" });
          K();
          const Ue = await q2(H),
            q = await G2(H),
            ge = await K2(H);
        } catch (ce) {
          console.log("Error Saving Ball ", ce);
        }
      },
      Q2 = async () => {
        let H = 0,
          ce = 0,
          Ue = 0,
          q = parseInt(i, 10) || 0,
          ge = 0,
          Me = 0,
          mt = 0,
          Et = 0;
        const Ft = parseInt(u, 10) || 0,
          Vn = parseInt(d, 10) || 0;
        l || c ? (l && (ge += q), c && (Me += q)) : (ce += q),
          f !== "None" &&
            ((mt += o.noBallPenaltyRuns),
            (Ue += o.noBallPenaltyRuns),
            (H += o.noBallPenaltyRuns)),
          (H += (l || c ? q : 0) + Ft + Vn),
          (Ue += ce + u),
          (Et += ce + H);
        const kn = qe.getState().battingTeam;
        var Ni = kn.teamOvers,
          rs = (kn.teamOvers * 10) % 10;
        if (!(Ft > 0 || mt > 0)) {
          var no = Math.floor(kn.teamOvers);
          rs == 5 ? ((no += 1), (rs = 0)) : (rs += 1), (Ni = no + rs / 10);
        }
        var Ei = Se + 1;
        fe(Ei);
        const fc = {
          match: e,
          innings: t,
          ballOver: Ni,
          ballNumber: Ei,
          striker: n.id,
          nonStriker: r.id,
          bowler: s.id,
          strikerRuns: ce,
          bowlerRuns: Ue,
          extraRuns: H,
          teamRuns: Et,
          wideRuns: u,
          noBallRuns: mt,
          penaltyRuns: d || 0,
          legByeRuns: Me,
          byeRuns: ge,
          noBallType: f,
          isShortRuns: y,
          overThrowRuns: p,
          fielder1: h,
          fielder2: m,
          wicketType: R,
          dismissedPlayer: F,
          dismissedBy: $,
          caughtBy: M,
          stumpedBy: E,
          runOutFielder1: O,
          runOutFielder2: z,
          editLater: !1,
          deliveryType: S,
          creaseMovement: g,
          shotConnection: x,
          batSubject: w,
          stroke: k,
          keeperActivity: j,
          batsmanActivity: b,
          fieldingActivity: C,
          umpireActivity: N,
          shotZoneX: P.x,
          shotZoneY: P.y,
          wagonWheelX: U.x,
          wagonWheelY: U.y,
          ballTrajectoryX: D.x,
          ballTrajectoryY: D.y,
          wicketKeeperPosition: v,
          bowlerReleaseX: B.x,
          bowlerReleaseY: B.y,
          bowlerReleasePosition: _,
        };
        Z2(fc), H2();
      };
    return a.jsxs("div", {
      className: "flex gap-2 justify-center",
      children: [
        a.jsxs("button", {
          className: `${
            ht ? "bg-gray-500" : "bg-primary500 hover:scale-105"
          } px-2 rounded shadow-xl flex gap-2 items-center bg-opacity-30`,
          onClick: z2,
          disabled: ht,
          children: ["Start", a.jsx(v7, { fontSize: "small" })],
        }),
        a.jsxs("button", {
          className: `${
            ht ? "bg-primary500 hover:scale-105" : "bg-gray-500"
          }  px-2 rounded shadow-xl flex gap-2 items-center bg-opacity-30`,
          onClick: W2,
          disabled: !ht,
          children: ["Stop", a.jsx(S7, { fontSize: "small" })],
        }),
        a.jsxs("button", {
          className: `${F2 ? "bg-opacity-50" : "bg-opacity-10"}
        bg-primary500 px-2 rounded shadow-xl hover:scale-105 flex gap-2 items-center`,
          onClick: Q2,
          disabled: Xe,
          children: [ee, a.jsx(d7, { fontSize: "small" })],
        }),
      ],
    });
  },
  QN = () => {
    const {
        ballRun: e,
        setBallRun: t,
        isBoundary: n,
        setIsBoundary: r,
        isSaveMatchModalVisible: s,
        setIsSaveMatchModalVisible: o,
      } = qe(),
      i = [0, 1, 2, 3, 4, 5, 6],
      l = (u) => {
        t(u), u == 4 || u == 6 ? r(!0) : r(!1);
      },
      c = (u) => {
        r(!n), console.log("IsB ", n);
      };
    return a.jsxs("div", {
      className:
        "grid md:grid-cols-2 gap-2 justify-around rounded-b-lg py-2 bg-ball500 p-1",
      children: [
        a.jsxs("div", {
          className: "flex gap-2 justify-center",
          children: [
            a.jsx(Ar, {
              options: i,
              selectedOption: e || 0,
              onSelect: l,
              classNames: "h-6 w-6 text-center p-1 rounded-full",
              selectedColor: "bg-accent text-white",
            }),
            a.jsx(KN, { isBoundary: n || !1, setIsBoundary: c }),
          ],
        }),
        a.jsxs("div", {
          className: "flex gap-2 justify-center",
          children: [
            a.jsx(ZN, {}),
            a.jsx("button", {
              className:
                "bg-gray-300 px-2 rounded font-black bg-opacity-50 text-gray-800 hover:bg-red-800 hover:text-gray-100 transition-all duration-150 ease-linear",
              onClick: () => {
                o(!0);
              },
              children: "END",
            }),
          ],
        }),
      ],
    });
  },
  YN = () =>
    a.jsxs("div", {
      className: "sticky top-0",
      children: [a.jsx(CC, {}), a.jsx(QN, {})],
    }),
  tu = ({ text: e = "title", children: t }) =>
    a.jsxs("div", {
      className: "flex border-2 border-secondary1000 rounded",
      children: [
        a.jsx("p", { className: "bg-secondary1000 pt-1 px-2", children: e }),
        a.jsx("div", { className: " px-2", children: t }),
      ],
    });
function nu({
  activeLabel: e = "Active",
  inactiveLabel: t = "Inactive",
  activeColor: n = "bg-blue-700",
  inactiveColor: r = "bg-gray-700",
  isToggled: s,
  setIsToggled: o,
}) {
  const i = () => {
    o(!s);
  };
  return a.jsx("button", {
    onClick: i,
    className: `px-4 my-1 py-1 rounded-xl ${s ? n : r}`,
    children: s ? e : t,
  });
}
const XN = () => {
    const [e, t] = T.useState(!0),
      n = [0, 1, 2, 3, 4, 5, 6],
      r = ["None", "Step", "Height", "Wider", "Other"],
      {
        wideRuns: s,
        setWideRuns: o,
        isBye: i,
        setIsBye: l,
        isLegBye: c,
        setIsLegBye: u,
        noBall: f,
        setNoBall: d,
        overThrowRuns: p,
        setOverThrowRuns: y,
        ballSpeed: h,
        setBallSpeed: m,
        batSpeed: S,
        setBatSpeed: g,
        speedMetric: x,
        setSpeedMetric: w,
        isShortRuns: k,
        setIsShortRuns: j,
        penaltyRuns: b,
        setPenaltyRuns: C,
        fielder1: N,
        setFielder1: v,
        fielder2: _,
        setFielder2: P,
        team2Players: U,
        isWicketModalVisible: D,
        setIsWicketModalVisible: B,
        wicketType: R,
      } = qe(),
      F = ["KPH", "MPH"];
    return a.jsxs("div", {
      className: "bg-secondary500 mt-1 rounded",
      children: [
        a.jsxs("div", {
          className: "flex justify-between shadow-md",
          children: [
            a.jsxs("div", {
              className: "flex gap-2 justify-center lg:pl-4 ",
              children: [
                a.jsx(nu, {
                  activeLabel: "B",
                  inactiveLabel: "B",
                  activeColor: "bg-primary500 bg-opacity-40",
                  inactiveColor: "bg-secondary1000",
                  isToggled: i,
                  setIsToggled: l,
                }),
                a.jsx(nu, {
                  activeLabel: "LB",
                  inactiveLabel: "LB",
                  activeColor: "bg-primary500 bg-opacity-40",
                  inactiveColor: "bg-secondary1000",
                  isToggled: c,
                  setIsToggled: u,
                }),
                a.jsx("button", {
                  className: `${
                    R ? "bg-red-900" : "bg-secondary1000"
                  }  my-1 rounded px-2`,
                  onClick: () => {
                    B(!0);
                  },
                  children: R || "Wicket",
                }),
              ],
            }),
            a.jsxs("button", {
              className: "bg-secondary250 flex justify-between p-1 rounded-t",
              onClick: () => {
                t(($) => !$);
              },
              children: [
                a.jsx("p", { className: "px-4", children: "More Options" }),
                e ? a.jsx(ky, {}) : a.jsx(jy, {}),
              ],
            }),
          ],
        }),
        e &&
          a.jsxs("div", {
            className: "px-4 py-1 transition-all delay-150",
            children: [
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4",
                children: [
                  a.jsx(tu, {
                    text: "Wide",
                    children: a.jsx(Ar, {
                      options: n,
                      selectedOption: s,
                      onSelect: o,
                      classNames: "h-6 w-6 text-center p-1 rounded-full",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: [
                      a.jsx("input", {
                        type: "number",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md ",
                        placeholder: "Ball speed",
                        onChange: ($) => {
                          m($.target.value);
                        },
                        value: h,
                      }),
                      a.jsx("input", {
                        type: "number",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md ",
                        placeholder: "Bat speed",
                        onChange: ($) => {
                          g($.target.value);
                        },
                        value: S,
                      }),
                      a.jsx(Ar, {
                        classNames: "text-center px-2 py-1 rounded-md",
                        options: F,
                        selectedOption: x,
                        onSelect: w,
                        selectedColor: "bg-primary500 bg-opacity-40 text-white",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-1",
                children: [
                  a.jsx(tu, {
                    text: "NB",
                    children: a.jsx(Ar, {
                      options: r,
                      selectedOption: f,
                      onSelect: d,
                      classNames: " text-center p-1 rounded",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  a.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      a.jsx("input", {
                        type: "number",
                        step: "1",
                        min: "0",
                        max: "100",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md my-1",
                        placeholder: "Pnlty Runs",
                        onChange: ($) => {
                          C($.target.value);
                        },
                        value: b,
                      }),
                      a.jsx(nu, {
                        inactiveLabel: "short runs",
                        activeLabel: "Short Runs",
                        isToggled: k,
                        setIsToggled: j,
                        activeColor: "bg-primary500 bg-opacity-50",
                        inactiveColor: "bg-secondary1000",
                      }),
                      a.jsx("button", {
                        className: "px-2 my-1 bg-secondary1000 rounded-md",
                        children: "Bowler Over",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-1",
                children: [
                  a.jsx(tu, {
                    text: "O-Trw",
                    children: a.jsx(Ar, {
                      options: n,
                      selectedOption: p,
                      onSelect: y,
                      classNames: "h-6 w-6 text-center p-1 rounded-full",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      a.jsxs("select", {
                        name: "fielder1",
                        className: "rounded-md bg-secondary250 px-1 py-1",
                        value: N,
                        onChange: ($) => v($.target.value),
                        children: [
                          a.jsx("option", { value: "", children: "Fielder 1" }),
                          U.map(($, M) =>
                            a.jsxs(
                              "option",
                              {
                                value: $.player.id,
                                children: [
                                  $.player.firstName,
                                  " ",
                                  $.player.middleName,
                                  " ",
                                  $.player.lastName,
                                ],
                              },
                              M
                            )
                          ),
                        ],
                      }),
                      a.jsxs("select", {
                        name: "fielder2",
                        className: "rounded-md bg-secondary250 px-1 py-1",
                        value: _,
                        onChange: ($) => P($.target.value),
                        children: [
                          a.jsx("option", { value: "", children: "Fielder 2" }),
                          U.map(($, M) =>
                            a.jsxs(
                              "option",
                              {
                                value: $.player.id,
                                children: [
                                  $.player.firstName,
                                  " ",
                                  $.player.middleName,
                                  " ",
                                  $.player.lastName,
                                ],
                              },
                              M
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  JN = ({ scoreData: e }) =>
    a.jsxs("table", {
      className: "w-full text-center",
      children: [
        a.jsxs("thead", {
          className: "bg-titlebar",
          children: [
            a.jsxs("th", {
              className: "p-1 text-left flex gap-4",
              onClick: e.swapBatters,
              children: [
                "Batter Name",
                a.jsx("button", { children: a.jsx(c7, { fontSize: "small" }) }),
              ],
            }),
            a.jsx("th", { children: "Runs" }),
            a.jsx("th", { children: "Balls" }),
            a.jsx("th", { children: "4s" }),
            a.jsx("th", { children: "6s" }),
            a.jsx("th", { children: "SR" }),
          ],
        }),
        a.jsxs("tbody", {
          children: [
            a.jsxs("tr", {
              className: "border-b-1 border-titlebar rounded",
              children: [
                a.jsxs("td", {
                  className: "p-1 text-left flex gap-4",
                  onClick: e.strikerEdit,
                  children: [
                    e.strikerName,
                    a.jsx("button", {
                      className: "opacity-50",
                      children: a.jsx(wd, {}),
                    }),
                  ],
                }),
                a.jsx("td", { children: e.strikerRuns }),
                a.jsx("td", { children: e.strikerBalls }),
                a.jsx("td", { children: e.strikerFours }),
                a.jsx("td", { children: e.strikerSixes }),
                a.jsx("td", { children: e.strikerSR }),
              ],
            }),
            a.jsxs("tr", {
              children: [
                a.jsxs("td", {
                  className: "p-1 text-left flex gap-4",
                  onClick: e.nonStrikerEdit,
                  children: [
                    e.nonStrikerName,
                    a.jsx("button", {
                      className: "opacity-50",
                      children: a.jsx(wd, {}),
                    }),
                  ],
                }),
                a.jsx("td", { children: e.nonStrikerRuns }),
                a.jsx("td", { children: e.nonStrikerBalls }),
                a.jsx("td", { children: e.nonStrikerFours }),
                a.jsx("td", { children: e.nonStrikerSixes }),
                a.jsx("td", { children: e.nonStrikerSR }),
              ],
            }),
          ],
        }),
      ],
    });
function eE({ scoreData: e }) {
  return a.jsxs("div", {
    className: " text-center bg-ball500 rounded-xl p-1",
    children: [
      a.jsx("p", { className: "font-bold", children: e.teamName }),
      a.jsxs("p", {
        className:
          "text-xl border-b-1 border-gray-600 p-1 text-yellow-500 font-bold font-orbitron",
        children: [e.teamScore, " / ", e.teamWickets],
      }),
      a.jsxs("div", {
        className: "flex justify-evenly",
        children: [
          a.jsxs("div", {
            children: [
              a.jsx("p", { children: "Overs" }),
              a.jsx("p", { className: "font-bold", children: e.teamOvers }),
            ],
          }),
          a.jsx("div", { className: "h-full border-l-2 border-gray-500" }),
          a.jsxs("div", {
            children: [
              a.jsx("p", { children: "RR" }),
              a.jsx("p", { className: "font-bold", children: e.teamRunRate }),
            ],
          }),
        ],
      }),
    ],
  });
}
const tE = ({ scoreData: e }) =>
    a.jsxs("table", {
      className: "w-full text-center",
      children: [
        a.jsxs("thead", {
          className: "bg-titlebar",
          children: [
            a.jsx("th", { className: "p-1 text-left", children: "Bowler" }),
            a.jsx("th", { children: "Over" }),
            a.jsx("th", { children: "Run" }),
            a.jsx("th", { children: "WKT" }),
            a.jsx("th", { children: "ECON" }),
          ],
        }),
        a.jsx("tbody", {
          children: a.jsxs("tr", {
            className: "border-b-1 border-titlebar rounded",
            children: [
              a.jsxs("td", {
                className: "p-1 text-left flex gap-4",
                onClick: e.bowlerEdit,
                children: [
                  e.bowlerName,
                  a.jsx("p", {
                    className: "opacity-50",
                    children: a.jsx(wd, {}),
                  }),
                ],
              }),
              a.jsx("td", { children: e.bowlerOver }),
              a.jsx("td", { children: e.bowlerRun }),
              a.jsx("td", { children: e.bowlerWicket }),
              a.jsx("td", { children: e.bowlerEconomy }),
            ],
          }),
        }),
      ],
    }),
  nE = () => {
    const { resetAll: e } = qe();
    return a.jsxs("button", {
      className:
        "bg-secondary250 px-2 py-1 rounded shadow-xl flex justify-between gap-2 items-center bg-opacity-80 hover:scale-105 hover:bg-secondary200 group",
      onClick: e,
      children: [
        "Reset All",
        a.jsx("div", {
          className:
            "group-hover:rotate-90 transition-all duration-150 ease-linear",
          children: a.jsx(x7, { fontSize: "small" }),
        }),
      ],
    });
  },
  rE = () => {
    const [e, t] = T.useState(!0),
      [n, r] = T.useState(!1);
    T.useState(!1);
    const {
        striker: s,
        setStriker: o,
        nonStriker: i,
        setNonStriker: l,
        bowler: c,
        setBowler: u,
        battingTeam: f,
        targetRuns: d,
      } = qe(),
      p = () => {
        const h = { ...s };
        o({ ...i }), l({ ...h });
      },
      y = {
        teamName: (f == null ? void 0 : f.shortName) || "Team Name",
        teamScore: (f == null ? void 0 : f.teamRuns) || "0",
        teamWickets: (f == null ? void 0 : f.teamWickets) || "0",
        teamOvers: (f == null ? void 0 : f.teamOvers) || "0",
        teamRunRate: (f == null ? void 0 : f.teamRunRate) || "0",
        swapBatters: p,
        strikerName: (s == null ? void 0 : s.name) || "striker",
        strikerEdit: (h) => {
          o({ ...h, isModalVisible: !0 });
        },
        strikerRuns: (s == null ? void 0 : s.runsScored) || 0,
        strikerBalls: (s == null ? void 0 : s.ballsFaced) || 0,
        strikerFours: (s == null ? void 0 : s.fours) || 0,
        strikerSixes: (s == null ? void 0 : s.sixes) || 0,
        strikerSR: (s == null ? void 0 : s.strikeRate) || 0,
        nonStrikerName: (i == null ? void 0 : i.name) || "Non Striker",
        nonStrikerEdit: (h) => {
          l({ ...h, isModalVisible: !0 });
        },
        nonStrikerRuns: (i == null ? void 0 : i.runsScored) || 0,
        nonStrikerBalls: (i == null ? void 0 : i.ballsFaced) || 0,
        nonStrikerFours: (i == null ? void 0 : i.fours) || 0,
        nonStrikerSixes: (i == null ? void 0 : i.sixes) || 0,
        nonStrikerSR: (i == null ? void 0 : i.strikeRate) || 0,
        bowlerName: (c == null ? void 0 : c.name) || "Bowler",
        bowlerEdit: (h) => {
          u({ ...h, isModalVisible: !0 });
        },
        bowlerOver: (c == null ? void 0 : c.oversBowled) || 0,
        bowlerRun: (c == null ? void 0 : c.runsConceeded) || 0,
        bowlerWicket: (c == null ? void 0 : c.wicketsTaken) || 0,
        bowlerEconomy: (c == null ? void 0 : c.economy) || 0,
      };
    return a.jsxs("div", {
      className: "bg-secondary500 mt-2 rounded",
      children: [
        a.jsxs("div", {
          className: "flex justify-between shadow-md",
          children: [
            a.jsx("p", {
              className: "p-1 px-4",
              children: "Newszealand vs India",
            }),
            a.jsxs("p", { children: ["Target: ", d] }),
            a.jsxs("button", {
              className: "bg-secondary250 flex justify-between p-1 rounded-t",
              onClick: () => {
                t((h) => !h);
              },
              children: [
                a.jsx("p", { className: "px-4", children: "Show Score-Card" }),
                e ? a.jsx(ky, {}) : a.jsx(jy, {}),
              ],
            }),
          ],
        }),
        e &&
          a.jsxs("div", {
            children: [
              a.jsxs("div", {
                className: "grid grid-cols-4 gap-2 py-2 px-4",
                children: [
                  a.jsx("div", {
                    className: "col-span-3",
                    children: a.jsx(JN, { scoreData: y }),
                  }),
                  a.jsx("div", {
                    className: "col-span-1",
                    children: a.jsx(eE, { scoreData: y }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-4 gap-2 py-2 px-4",
                children: [
                  a.jsx("div", {
                    className: "col-span-3",
                    children: a.jsx(tE, { scoreData: y }),
                  }),
                  a.jsxs("div", {
                    className: "col-span-1 flex flex-col gap-2",
                    children: [
                      a.jsxs("button", {
                        className: `${
                          n ? "bg-blue-800" : "bg-secondary250"
                        } px-2 py-1 rounded shadow-xl flex justify-between gap-2 items-center bg-opacity-80`,
                        onClick: () => {
                          r((h) => !h);
                        },
                        children: [
                          n ? "Edit This Ball" : "This Ball",
                          a.jsx(l7, { fontSize: "small" }),
                        ],
                      }),
                      a.jsx(nE, {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  sE = () =>
    a.jsxs("div", {
      className: "xl:w-5/12",
      children: [a.jsx(YN, {}), a.jsx(XN, {}), a.jsx(rE, {})],
    }),
  na = ({
    imageUrl: e,
    width: t,
    height: n,
    ballSize: r,
    onCoordinateChange: s,
    position: o,
    isWagonWheel: i = !1,
  }) => {
    const [l, c] = T.useState(o || { x: null, y: null }),
      u = T.useRef(null),
      f = T.useRef(null);
    T.useEffect(() => {
      l.x !== null && l.y !== null && i && p();
    }, [l]);
    const d = (y) => {
        const h = y.target.getBoundingClientRect(),
          m = y.clientX - h.left,
          S = y.clientY - h.top,
          g = { x: m, y: S };
        c(g), s(g);
      },
      p = () => {
        const y = f.current.getContext("2d");
        y.clearRect(0, 0, f.current.width, f.current.height),
          y.beginPath(),
          y.moveTo(t / 2, n / 2),
          y.lineTo(l.x, l.y),
          (y.strokeStyle = "red"),
          (y.lineWidth = 2),
          y.stroke();
      };
    return (
      T.useEffect(() => {
        o == null ? c({ x: null, y: null }) : console.log("POS is not null");
      }, [o]),
      a.jsxs("div", {
        className: "relative",
        style: { width: `${t}px`, height: `${n}px` },
        onClick: d,
        children: [
          a.jsx("img", {
            ref: u,
            src: e,
            alt: "Ball Tracking Area",
            style: { width: "100%", height: "100%", objectFit: "cover" },
            className: "rounded-b-lg",
          }),
          a.jsx("canvas", {
            ref: f,
            className: "absolute top-0 left-0",
            width: t,
            height: n,
            style: { pointerEvents: "none" },
          }),
          l.x !== null &&
            l.y !== null &&
            a.jsx("div", {
              className: "absolute bg-red-500 rounded-full",
              style: {
                width: `${r}px`,
                height: `${r}px`,
                left: `${l.x - r / 2}px`,
                top: `${l.y - r / 2}px`,
                transform: "translate(0, 0)",
              },
            }),
        ],
      })
    );
  },
  oE = () => {
    const {
        shotZonePosition: e,
        setShotZonePosition: t,
        wagonWheelPosition: n,
        setWagonWheelPosition: r,
        wicketKeeperPosition: s,
        setWicketKeeperPosition: o,
        bowlerReleaseSide: i,
        setBowlerReleaseSide: l,
        bowlerReleaseBallPosition: c,
        setBowlerReleaseBallPosition: u,
        trajectoryBallPosition: f,
        setTrajectoryBallPosition: d,
      } = qe(),
      [p, y] = T.useState(!0),
      [h, m] = T.useState(!1),
      S = ["FF", "WK UP", "WK BACK", "IP"],
      g = ["Around", "Over"],
      x = (N) => {
        console.log("Bowler Release Coordinates:", N), u(N);
      },
      w = (N) => {
        console.log("Trajectory Coordinates:", N), d(N);
      },
      k = (N) => {
        console.log("Shot Zone Coordinates:", N), t(N);
      },
      j = (N) => {
        console.log("Wagon Wheel Coordinates:", N), r(N);
      },
      b = () => {
        y(!0), m(!1);
      },
      C = () => {
        y(!1), m(!0);
      };
    return a.jsxs("div", {
      className:
        "xl:w-2/12 flex gap-4 overflow-x-scroll xl:flex-col xl:gap-0 xl:overflow-x-visible my-4 xl:my-0 justify-around",
      children: [
        a.jsxs("div", {
          className: "my-2 xl:my-0",
          children: [
            a.jsxs("div", {
              className:
                "bg-secondary1000 flex text-center w-2/3 justify-evenly rounded-t-lg",
              children: [
                a.jsx("button", {
                  className: ` ${
                    p ? "bg-primary500" : ""
                  } p-1 w-1/2 rounded-tl-lg`,
                  onClick: b,
                  children: "Shot Zone",
                }),
                a.jsx("button", {
                  className: ` ${
                    h ? "bg-primary500" : ""
                  } p-1 rounded-tr-lg w-1/2`,
                  onClick: C,
                  children: "Wagon Wheel",
                }),
              ],
            }),
            p &&
              a.jsx(na, {
                imageUrl:
                  "https://www.wikihow.com/images/thumb/7/77/Be-a-Good-Batsman-Step-1-Version-2.jpg/v4-460px-Be-a-Good-Batsman-Step-1-Version-2.jpg.webp",
                width: 250,
                height: 250,
                ballSize: 10,
                onCoordinateChange: k,
                position: e,
              }),
            h &&
              a.jsx(na, {
                imageUrl:
                  "https://analyzesmart.wordpress.com/wp-content/uploads/2015/03/wagonwheel3.png",
                width: 250,
                height: 250,
                ballSize: 10,
                onCoordinateChange: j,
                position: n,
                isWagonWheel: !0,
              }),
          ],
        }),
        a.jsxs("div", {
          className: "xl:mt-2 my-2",
          children: [
            a.jsx("div", {
              className:
                "bg-secondary1000 flex text-center w-full justify-evenly rounded-t-lg py-1",
              children: a.jsx(Ar, {
                classNames: "py-1 px-2 rounded-md",
                options: S,
                selectedOption: s,
                onSelect: o,
                selectedColor: "bg-primary500 text-white",
              }),
            }),
            a.jsx(na, {
              imageUrl:
                "https://www.kingcricket.co.uk/wp-content/uploads/Miscellaneous/hawkeye2.jpg",
              width: 250,
              height: 150,
              ballSize: 10,
              onCoordinateChange: w,
              position: f,
            }),
          ],
        }),
        a.jsxs("div", {
          className: "xl:mt-2 my-2",
          children: [
            a.jsx("div", {
              className:
                "bg-secondary1000 flex text-center w-full justify-evenly rounded-t-lg py-1",
              children: a.jsx(Ar, {
                classNames: "py-1 px-4 rounded-md",
                options: g,
                selectedOption: i,
                onSelect: l,
                selectedColor: "bg-primary500 text-white",
              }),
            }),
            a.jsx(na, {
              imageUrl:
                "https://blog.cricheroes.com/wp-content/uploads/2023/09/Cricket-Bowling-Techniques.jpg",
              width: 250,
              height: 150,
              ballSize: 10,
              onCoordinateChange: x,
              position: c,
            }),
          ],
        }),
      ],
    });
  },
  ru = ({
    isVisible: e = !0,
    title: t = "Striker Select",
    options: n = [
      { name: "Alpha" },
      { name: "Alpha" },
      { name: "Alpha" },
      { name: "Alpha" },
      { name: "Alpha" },
      { name: "Alpha" },
    ],
    onSelect: r = null,
    selectedPlayerId: s = "",
    type: o = "batsman",
  }) =>
    e
      ? a.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70",
          children: a.jsxs("div", {
            className:
              "bg-secondary1000 text-gray-100 rounded-lg max-w-2xl w-full",
            children: [
              a.jsx("p", {
                className:
                  "mb-4 font-bold p-2 text-center bg-titlebar rounded-t-lg",
                children: t,
              }),
              a.jsx("div", {
                className: "p-4",
                children: a.jsx("div", {
                  className: "grid grid-cols-3 gap-4",
                  children: n.map((i) =>
                    a.jsxs(
                      "button",
                      {
                        onClick: () => {
                          r({
                            id: i.player.id,
                            name: i.player.firstName + " " + i.player.lastName,
                            runsScored: i.runs_scored,
                            ballsFaced: i.balls_faced,
                            fours: i.fours,
                            sixes: i.sixes,
                            strikeRate: i.strike_rate,
                            oversBowled: i.overs_bowled,
                            runsConceeded: i.runs_conceded,
                            wicketsTaken: i.wickets_taken,
                            economy: i.economy,
                            isModalVisible: !1,
                          });
                        },
                        className: `${
                          i.player.id == s ? "bg-blue-800" : "bg-secondary500"
                        }
                  ${
                    i.has_dismissed > 0 && o == "batsman"
                      ? "text-gray-400 opacity-70 hover:bg-red-500 hover:text-gray-300"
                      : "hover:bg-green-700"
                  }
                  ${i.overs_bowled > 0 && o == "bowler" ? "" : "bg-opacity-50"}
                 py-1 px-2 rounded-lg flex justify-center gap-4 text-gray-300`,
                        children: [
                          a.jsxs("p", {
                            className: "text-sm",
                            children: [
                              i.player.firstName,
                              " ",
                              i.player.middleName,
                              " ",
                              i.player.lastName,
                            ],
                          }),
                          i.balls_faced > 0 &&
                            o == "batsman" &&
                            a.jsxs("p", {
                              className: "text-xs",
                              children: [
                                i.runs_scored,
                                " (",
                                i.balls_faced,
                                ")",
                              ],
                            }),
                          i.overs_bowled > 0 &&
                            o == "bowler" &&
                            a.jsx("p", { children: i.overs_bowled }),
                        ],
                      },
                      i.player.id
                    )
                  ),
                }),
              }),
            ],
          }),
        })
      : null;
async function iE({ id: e }) {
  try {
    return (await me.get(`match/ultimate-match/${e}`)).data;
  } catch (t) {
    console.log("Error ", t);
  }
}
async function aE({ matchId: e, teamId: t }) {
  try {
    return (await me.get(`match/squad/${e}/team/${t}`)).data;
  } catch (n) {
    console.log("Error ", n);
  }
}
const lE = ({
  title: e = "Select Wicket",
  options: t = ["Bowled", "Caught & Bowled", "Run Out", "Caught", "Stumped"],
  onSelect: n = null,
}) => {
  const {
      team2Players: r,
      striker: s,
      nonStriker: o,
      bowler: i,
      wicketType: l,
      setWicketType: c,
      isWicketModalVisible: u,
      setIsWicketModalVisible: f,
      dismissedPlayer: d,
      setDismissedPlayer: p,
      dismissedBy: y,
      setDismissedBy: h,
      caughtBy: m,
      setCaughtBy: S,
      stumpedBy: g,
      setStumpedBy: x,
      runOutFielder1: w,
      setRunOutFielder1: k,
      runOutFielder2: j,
      setRunOutFielder2: b,
    } = qe(),
    C = (v) => l === v,
    N = (v) => {
      c(v),
        d || p(s.id),
        l !== "Caught" && S(""),
        l !== "Run Out" && (k(""), b("")),
        l !== "Stumped By" && x(""),
        l == "Bowled" || l == "Caught and Bowled" || l == "LBW" || l == "Caught"
          ? h(i.id)
          : h("");
    };
  return u
    ? a.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70",
        children: a.jsxs("div", {
          className:
            "bg-secondary1000 bg-opacity-90 text-gray-100 rounded-lg max-w-md w-full",
          children: [
            a.jsx("p", {
              className:
                "mb-4 font-bold p-2 text-center bg-gradient-to-r from-titlebar to-secondary500 rounded-t-lg bg-opacity-90",
              children: e,
            }),
            a.jsx("div", {
              className: "p-4",
              children: a.jsxs("div", {
                className: "container mx-auto p-4 flex flex-col gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      a.jsx("p", { children: "Dismissed Player *" }),
                      a.jsxs("select", {
                        name: "dismissedPlayer",
                        id: "",
                        value: d,
                        onChange: (v) => {
                          p(v.target.value);
                        },
                        className:
                          "rounded bg-secondary500 mb-4 transition-all duration-50 ease-linear w-1/2 py-2 px-2",
                        children: [
                          a.jsx("option", {
                            value: s.id,
                            selected: !0,
                            children: s.name,
                          }),
                          a.jsx("option", { value: o.id, children: o.name }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex gap-4",
                    children: ["Bowled", "LBW", "Caught and Bowled"].map((v) =>
                      a.jsx(
                        "p",
                        {
                          className: `rounded px-2 py-1 wicket-div cursor-pointer text-center ${
                            C(v) ? "bg-blue-700" : "bg-secondary200"
                          }`,
                          onClick: () => N(v),
                          children: v,
                        },
                        v
                      )
                    ),
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      a.jsxs("div", {
                        className: "grid grid-cols-2",
                        children: [
                          a.jsx("p", {
                            className: `px-2 py-1 rounded wicket-div cursor-pointer ${
                              C("Caught") ? "bg-blue-700" : "bg-secondary200"
                            }`,
                            onClick: () => N("Caught"),
                            children: "Caught By",
                          }),
                          a.jsxs("select", {
                            name: "caughtBy",
                            className: `rounded bg-secondary500 px-1 transition-all duration-50 ease-linear ${
                              C("Caught") ? "scale-100" : "scale-0"
                            }`,
                            value: m,
                            onChange: (v) => {
                              S(v.target.value), N("Caught");
                            },
                            children: [
                              a.jsx("option", { value: "", children: "None" }),
                              r.map((v, _) =>
                                a.jsxs(
                                  "option",
                                  {
                                    value: v.player.id,
                                    children: [
                                      v.player.firstName,
                                      " ",
                                      v.player.middleName,
                                      " ",
                                      v.player.lastName,
                                    ],
                                  },
                                  _
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "grid grid-cols-2",
                        children: [
                          a.jsx("p", {
                            className: `px-2 py-1 rounded wicket-div cursor-pointer ${
                              C("Stumped By")
                                ? "bg-blue-700"
                                : "bg-secondary200"
                            }`,
                            onClick: () => N("Stumped By"),
                            children: "Stumped By",
                          }),
                          a.jsxs("select", {
                            name: "stumpedBy",
                            className: `rounded bg-secondary500 px-1 transition-all duration-50 ease-linear ${
                              C("Stumped By") ? "scale-100" : "scale-0"
                            }`,
                            value: g,
                            onChange: (v) => {
                              x(v.target.value), N("Stumped By");
                            },
                            children: [
                              a.jsx("option", { value: "", children: "None" }),
                              r.map((v, _) =>
                                a.jsxs(
                                  "option",
                                  {
                                    value: v.player.id,
                                    children: [
                                      v.player.firstName,
                                      " ",
                                      v.player.middleName,
                                      " ",
                                      v.player.lastName,
                                    ],
                                  },
                                  _
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex gap-4",
                    children: [
                      "Retire Hurt",
                      "Retire Out",
                      "Retire Not Out",
                    ].map((v) =>
                      a.jsx(
                        "p",
                        {
                          className: `px-2 rounded py-1 wicket-div cursor-pointer ${
                            C(v) ? "bg-blue-700" : "bg-secondary200"
                          }`,
                          onClick: () => N(v),
                          children: v,
                        },
                        v
                      )
                    ),
                  }),
                  a.jsx("div", {
                    className: "flex gap-4",
                    children: ["Absent Hurt", "Obstructing the Field"].map(
                      (v) =>
                        a.jsx(
                          "p",
                          {
                            className: `px-2 rounded py-1 wicket-div cursor-pointer ${
                              C(v) ? "bg-blue-700" : "bg-secondary200"
                            }`,
                            onClick: () => N(v),
                            children: v,
                          },
                          v
                        )
                    ),
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-y-4",
                    children: [
                      a.jsx("p", {
                        className: `px-2 py-1 rounded wicket-div cursor-pointer text-center ${
                          C("Run Out") ? "bg-blue-700" : "bg-secondary200"
                        }`,
                        onClick: () => N("Run Out"),
                        children: "Run Out",
                      }),
                      a.jsxs("select", {
                        name: "runOutPlayer",
                        id: "",
                        value: d,
                        onChange: (v) => {
                          p(v.target.value), N("Run Out");
                        },
                        className: `rounded bg-secondary500 px-1 transition-all duration-50 ease-linear ${
                          C("Run Out") ? "scale-100" : "scale-0"
                        }`,
                        children: [
                          a.jsx("option", {
                            value: s.id,
                            selected: !0,
                            children: s.name,
                          }),
                          a.jsx("option", { value: o.id, children: o.name }),
                        ],
                      }),
                      a.jsxs("select", {
                        name: "runOutFielder1",
                        className: `rounded bg-secondary500 px-1 py-1 border-r-4 border-secondary1000 transition-all duration-50 ease-linear ${
                          C("Run Out") ? "scale-100" : "scale-0"
                        }`,
                        value: w,
                        onChange: (v) => {
                          k(v.target.value), N("Run Out");
                        },
                        children: [
                          a.jsx("option", { value: "", children: "Fielder 1" }),
                          r.map((v, _) =>
                            a.jsxs(
                              "option",
                              {
                                value: v.player.id,
                                children: [
                                  v.player.firstName,
                                  " ",
                                  v.player.middleName,
                                  " ",
                                  v.player.lastName,
                                ],
                              },
                              _
                            )
                          ),
                        ],
                      }),
                      a.jsxs("select", {
                        name: "runOutFielder2",
                        className: `rounded bg-secondary500 border-r-4 border-secondary1000 px-1 transition-all duration-50 ease-linear ${
                          C("Run Out") ? "scale-100" : "scale-0"
                        }`,
                        value: j,
                        onChange: (v) => {
                          b(v.target.value), N("Run Out");
                        },
                        children: [
                          a.jsx("option", { value: "", children: "Fielder 2" }),
                          r.map((v, _) =>
                            a.jsxs(
                              "option",
                              {
                                value: v.player.id,
                                children: [
                                  v.player.firstName,
                                  " ",
                                  v.player.middleName,
                                  " ",
                                  v.player.lastName,
                                ],
                              },
                              _
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsxs("div", {
              className: "px-4 pb-4 flex justify-end gap-4",
              children: [
                a.jsxs("button", {
                  className:
                    "bg-gray-700 px-2 py-1 rounded flex gap-2 opacity-70",
                  onClick: () => {
                    c(""), p(""), h(""), S(""), x(""), k(""), b("");
                  },
                  children: ["Reset", a.jsx(w7, { fontSize: "small" })],
                }),
                a.jsxs("button", {
                  className:
                    "bg-primary500 px-2 py-1 rounded flex gap-2 opacity-50",
                  onClick: () => {
                    f(!1);
                  },
                  children: ["Done", a.jsx(C7, { fontSize: "small" })],
                }),
              ],
            }),
          ],
        }),
      })
    : null;
};
function cE({ isVisible: e, onClose: t }) {
  const {
      matchId: n,
      currentInnings: r,
      matchType: s,
      battingTeam: o,
      bowlingTeam: i,
      targetRuns: l,
      setTargetRuns: c,
      setTeamLeadBy: u,
      setStriker: f,
      setNonStriker: d,
      setBowler: p,
      setInningsToBeUpdated: y,
      teamLeadBy: h,
    } = qe(),
    [m, S] = T.useState(""),
    g = Ut(),
    x = async () => {
      (await gn({ matchId: n, matchEnded: !0, matchResult: "Match Ended" }))
        .matchEnded
        ? g("/match")
        : X.error("Something went wrong, Please try Again!");
    },
    w = async () => {
      const k = qe.getState().battingTeam;
      if (s.isLimitedOvers)
        r % 2 != 0 || (r % 2 == 0 && k.teamRuns == l)
          ? (c(k.teamRuns),
            console.log("target runs ", k.teamRuns),
            await Jt({
              matchId: n,
              innings: r + 1,
              targetRuns: k.teamRuns,
              leadingTeam: o.id,
              currentSuperOverCount:
                r == 1 ? "" : r % 2 == 0 ? r / 2 : (r + 1) / 2,
            }),
            f({}),
            d({}),
            p({}),
            y(r + 1))
          : k.teamRuns > l
          ? (
              await gn({
                matchId: n,
                matchEnded: !0,
                matchResult: "Match Ended",
              })
            ).matchEnded
            ? g("/match")
            : X.error("Something went wrong, Please try Again!")
          : k.teamRuns < l &&
            ((
              await gn({
                matchId: n,
                matchEnded: !0,
                matchResult: "Match Ended",
              })
            ).matchEnded
              ? g("/match")
              : X.error("Something went wrong, Please try Again!")),
          t();
      else if ((console.log("Leading Team chose To ", m), r == 1))
        c(k.teamRuns),
          await Jt({
            matchId: n,
            innings: 2,
            targetRuns: k.teamRuns,
            leadingTeam: o.id,
          }),
          f({}),
          d({}),
          p({}),
          y(2),
          t();
      else if (r == 2)
        if (!m) X.error("Please select the decision of the Leading Team!");
        else {
          if (k.teamRuns > l) {
            if ((u(o.id), c(k.teamRuns - l), m == "batting")) {
              const j = o.id,
                b = i.id,
                C = i.id,
                N = o.id;
              await Jt({
                matchId: n,
                innings: 3,
                targetRuns: k.teamRuns - l,
                leadingTeam: o.id,
                leadingTeamChoseTo: m,
                thirdInningsBattingTeam: j,
                thirdInningsBowlingTeam: b,
                fourthInningsBattingTeam: C,
                fourthInningsBowlingTeam: N,
              });
            } else if (m == "bowling") {
              const j = i.id,
                b = o.id,
                C = o.id,
                N = i.id;
              await Jt({
                matchId: n,
                innings: 3,
                targetRuns: k.teamRuns - l,
                leadingTeam: o.id,
                leadingTeamChoseTo: m,
                thirdInningsBattingTeam: j,
                thirdInningsBowlingTeam: b,
                fourthInningsBattingTeam: C,
                fourthInningsBowlingTeam: N,
              });
            }
          } else if ((u(i.id), c(l - k.teamRuns), m == "batting")) {
            const j = i.id,
              b = o.id,
              C = o.id,
              N = i.id;
            await Jt({
              matchId: n,
              innings: 3,
              targetRuns: l - k.teamRuns,
              leadingTeam: i.id,
              thirdInningsBattingTeam: j,
              thirdInningsBowlingTeam: b,
              fourthInningsBattingTeam: C,
              fourthInningsBowlingTeam: N,
            });
          } else if (m == "bowling") {
            const j = o.id,
              b = i.id,
              C = i.id,
              N = o.id;
            await Jt({
              matchId: n,
              innings: 3,
              targetRuns: l - k.teamRuns,
              leadingTeam: i.id,
              thirdInningsBattingTeam: j,
              thirdInningsBowlingTeam: b,
              fourthInningsBattingTeam: C,
              fourthInningsBowlingTeam: N,
            });
          }
          f({}), d({}), p({}), y(3), t();
        }
      else
        r == 3
          ? (o.id == h
              ? (c(l + k.teamRuns),
                Jt({
                  matchId: n,
                  innings: 4,
                  targetRuns: l + k.teamRuns,
                  leadingTeam: o.id,
                }))
              : l > k.teamRuns
              ? (
                  await gn({
                    matchId: n,
                    matchEnded: !0,
                    matchResult: "Match Ended",
                  })
                ).matchEnded
                ? g("/match")
                : X.error("Something went wrong, Please try Again!")
              : (c(k.teamRuns - l),
                Jt({
                  matchId: n,
                  innings: 4,
                  targetRuns: k.teamRuns - l,
                  leadingTeam: o.id,
                })),
            f({}),
            d({}),
            p({}),
            y(4),
            t())
          : r == 4 &&
            ((
              await gn({
                matchId: n,
                matchEnded: !0,
                matchResult: "Match Ended",
              })
            ).matchEnded
              ? g("/match")
              : X.error("Something went wrong, Please try Again!"),
            t());
    };
  return e
    ? a.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-md",
        children: a.jsxs("div", {
          className:
            "bg-secondary1000 text-gray-100 rounded-lg max-w-md w-full",
          children: [
            a.jsx("p", {
              className:
                "mb-4 font-bold p-2 text-center bg-titlebar rounded-t-lg",
              children: "Match Saving Options",
            }),
            a.jsx("div", {
              className: "p-4",
              children: a.jsxs("div", {
                className: "grid grid-cols-1 gap-4 ",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col gap-4 ",
                    children: [
                      a.jsx("div", {
                        className:
                          "bg-secondary200 text-center py-2 rounded-md group hover:bg-secondary500",
                        children: a.jsx(oe, {
                          to: "/match",
                          children: a.jsxs("p", {
                            className: "flex gap-2 justify-center",
                            children: [
                              a.jsx(p7, { fontSize: "small" }),
                              "Save & Edit-Later",
                            ],
                          }),
                        }),
                      }),
                      a.jsxs("select", {
                        name: "teamChooseTo",
                        id: "",
                        className: `bg-secondary200 p-2 ${
                          !s.isLimitedOvers && r == 2 ? "" : "hidden"
                        } `,
                        onChange: (k) => {
                          S(k.target.value), console.log(k.target.value);
                        },
                        children: [
                          a.jsx("option", {
                            value: "",
                            children: "Leading Team Choose To",
                          }),
                          a.jsx("option", {
                            value: "batting",
                            children: "Bat",
                          }),
                          a.jsx("option", {
                            value: "bowling",
                            children: "Bowl",
                          }),
                        ],
                      }),
                      a.jsx("button", {
                        onClick: w,
                        children: a.jsxs("div", {
                          className:
                            "bg-secondary200 text-center py-2 rounded-md flex gap-2 justify-center hover:bg-secondary500",
                          children: [
                            a.jsx(a7, { fontSize: "small" }),
                            "End Innings",
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsx("p", {
                    className: "text-center",
                    children: "Match result",
                  }),
                  a.jsxs("select", {
                    name: "teamChooseTo",
                    id: "",
                    className: "bg-secondary200 p-2 ",
                    children: [
                      a.jsx("option", { value: "", children: "Tied" }),
                      a.jsxs("option", {
                        value: `${o.name} won the match`,
                        children: [o.name, " won"],
                      }),
                      a.jsxs("option", {
                        value: `${i.name} won the match`,
                        children: [i.name, " won"],
                      }),
                    ],
                  }),
                  a.jsx("button", {
                    onClick: x,
                    children: a.jsxs("div", {
                      className:
                        "bg-primary500 text-center py-2 rounded-md flex gap-2 justify-center hover:bg-opacity-70",
                      children: [a.jsx(f7, { fontSize: "small" }), "End Match"],
                    }),
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "flex justify-end p-2",
              children: a.jsx("button", {
                onClick: t,
                className: " px-4 py-2 rounded-lg hover:bg-gray-700 underline",
                children: "Cancel",
              }),
            }),
          ],
        }),
      })
    : null;
}
const uE = () => {
    const [e] = kt(),
      t = e.get("id"),
      {
        setMatchId: n,
        matchType: r,
        battingTeam: s,
        bowlingTeam: o,
        team1Players: i,
        team2Players: l,
        striker: c,
        nonStriker: u,
        bowler: f,
        setMatchType: d,
        setTeam1Players: p,
        setTeam2Players: y,
        setStriker: h,
        setNonStriker: m,
        setBowler: S,
        setBattingTeam: g,
        setBowlingTeam: x,
        setCurrentInnings: w,
        isSaveMatchModalVisible: k,
        setIsSaveMatchModalVisible: j,
        inningsToBeUpdated: b,
        setTargetRuns: C,
        setBallNumber: N,
      } = qe(),
      v = async (D) => {
        try {
          const B = await aE({ matchId: t, teamId: D });
          return Array.isArray(B) && B.length > 0 ? B[0].players : [];
        } catch (B) {
          return console.log("Error ", B), [];
        }
      };
    T.useEffect(() => {
      n(t),
        (async () => {
          try {
            const R = await iE({ id: t });
            if (
              (d(R.matchType),
              w(R.currentInnings),
              console.log("ultimate match data ", R),
              console.log("ballNumber ", R.player_data.ballNumber),
              R.player_data.ballNumber ? N(R.player_data.ballNumber) : N(0),
              C(R.currentTarget),
              R.matchType.isLimitedOvers)
            ) {
              const F = (R.currentInnings - 1) % 4;
              if (F === 0 || F === 3) {
                const $ = await v(R.firstInningsBattingTeam.id),
                  M = await v(R.firstInningsBowlingTeam.id);
                p($), y(M);
                var B = { ...R.firstInningsBattingTeam };
                (B.teamRuns = R.team_stats.total_runs),
                  (B.teamWickets = R.team_stats.wickets_taken),
                  (B.teamOvers = R.team_stats.overs_bowled),
                  (B.teamRunRate = R.team_stats.run_rate),
                  g(B),
                  x({ ...R.firstInningsBowlingTeam }),
                  $.map((E) => {
                    E.player.id == R.player_data.striker &&
                      h({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceeded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      }),
                      E.player.id == R.player_data.non_striker &&
                        m({
                          id: E.player.id,
                          name: E.player.firstName + " " + E.player.lastName,
                          runsScored: E.runs_scored,
                          ballsFaced: E.balls_faced,
                          fours: E.fours,
                          sixes: E.sixes,
                          strikeRate: E.strike_rate,
                          oversBowled: E.overs_bowled,
                          runsConceeded: E.runs_conceeded,
                          wicketsTaken: E.wickets_taken,
                          economy: E.economy,
                          isModalVisible: !1,
                        });
                  }),
                  M.map((E) => {
                    E.player.id == R.player_data.bowler &&
                      S({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      });
                  });
              } else {
                const $ = await v(R.secondInningsBattingTeam.id),
                  M = await v(R.secondInningsBowlingTeam.id);
                p($), y(M);
                var B = { ...R.secondInningsBattingTeam };
                (B.teamRuns = R.team_stats.total_runs),
                  (B.teamWickets = R.team_stats.wickets_taken),
                  (B.teamOvers = R.team_stats.overs_bowled),
                  (B.teamRunRate = R.team_stats.run_rate),
                  g(B),
                  x({ ...R.secondInningsBowlingTeam }),
                  $.map((O) => {
                    O.player.id == R.player_data.striker &&
                      h({
                        id: O.player.id,
                        name: O.player.firstName + " " + O.player.lastName,
                        runsScored: O.runs_scored,
                        ballsFaced: O.balls_faced,
                        fours: O.fours,
                        sixes: O.sixes,
                        strikeRate: O.strike_rate,
                        oversBowled: O.overs_bowled,
                        runsConceeded: O.runs_conceeded,
                        wicketsTaken: O.wickets_taken,
                        economy: O.economy,
                        isModalVisible: !1,
                      }),
                      O.player.id == R.player_data.non_striker &&
                        m({
                          id: O.player.id,
                          name: O.player.firstName + " " + O.player.lastName,
                          runsScored: O.runs_scored,
                          ballsFaced: O.balls_faced,
                          fours: O.fours,
                          sixes: O.sixes,
                          strikeRate: O.strike_rate,
                          oversBowled: O.overs_bowled,
                          runsConceeded: O.runs_conceeded,
                          wicketsTaken: O.wickets_taken,
                          economy: O.economy,
                          isModalVisible: !1,
                        });
                  });
              }
            } else if (R.currentInnings === 1) {
              const F = await v(R.firstInningsBattingTeam.id),
                $ = await v(R.firstInningsBowlingTeam.id);
              p(F), y($);
              var B = { ...R.firstInningsBattingTeam };
              (B.teamRuns = R.team_stats.total_runs),
                (B.teamWickets = R.team_stats.wickets_taken),
                (B.teamOvers = R.team_stats.overs_bowled),
                (B.teamRunRate = R.team_stats.run_rate),
                g(B),
                x({ ...R.firstInningsBowlingTeam }),
                F.map((E) => {
                  E.player.id == R.player_data.striker &&
                    h({
                      id: E.player.id,
                      name: E.player.firstName + " " + E.player.lastName,
                      runsScored: E.runs_scored,
                      ballsFaced: E.balls_faced,
                      fours: E.fours,
                      sixes: E.sixes,
                      strikeRate: E.strike_rate,
                      oversBowled: E.overs_bowled,
                      runsConceeded: E.runs_conceeded,
                      wicketsTaken: E.wickets_taken,
                      economy: E.economy,
                      isModalVisible: !1,
                    }),
                    E.player.id == R.player_data.non_striker &&
                      m({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceeded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      });
                }),
                $.map((E) => {
                  E.player.id == R.player_data.bowler &&
                    S({
                      id: E.player.id,
                      name: E.player.firstName + " " + E.player.lastName,
                      runsScored: E.runs_scored,
                      ballsFaced: E.balls_faced,
                      fours: E.fours,
                      sixes: E.sixes,
                      strikeRate: E.strike_rate,
                      oversBowled: E.overs_bowled,
                      runsConceeded: E.runs_conceded,
                      wicketsTaken: E.wickets_taken,
                      economy: E.economy,
                      isModalVisible: !1,
                    });
                });
            } else if (R.currentInnings === 2) {
              const F = await v(R.secondInningsBattingTeam.id),
                $ = await v(R.secondInningsBowlingTeam.id);
              p(F), y($);
              var B = { ...R.secondInningsBattingTeam };
              (B.teamRuns = R.team_stats.total_runs),
                (B.teamWickets = R.team_stats.wickets_taken),
                (B.teamOvers = R.team_stats.overs_bowled),
                (B.teamRunRate = R.team_stats.run_rate),
                g(B),
                x({ ...R.secondInningsBowlingTeam }),
                F.map((E) => {
                  E.player.id == R.player_data.striker &&
                    h({
                      id: E.player.id,
                      name: E.player.firstName + " " + E.player.lastName,
                      runsScored: E.runs_scored,
                      ballsFaced: E.balls_faced,
                      fours: E.fours,
                      sixes: E.sixes,
                      strikeRate: E.strike_rate,
                      oversBowled: E.overs_bowled,
                      runsConceeded: E.runs_conceeded,
                      wicketsTaken: E.wickets_taken,
                      economy: E.economy,
                      isModalVisible: !1,
                    }),
                    E.player.id == R.player_data.non_striker &&
                      m({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceeded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      });
                });
            } else if (R.currentInnings === 3) {
              const F = await v(R.thirdInningsBattingTeam.id),
                $ = await v(R.thirdInningsBowlingTeam.id);
              p(F), y($);
              var B = { ...R.thirdInningsBattingTeam };
              (B.teamRuns = R.team_stats.total_runs),
                (B.teamWickets = R.team_stats.wickets_taken),
                (B.teamOvers = R.team_stats.overs_bowled),
                (B.teamRunRate = R.team_stats.run_rate),
                g(B),
                x({ ...R.thirdInningsBowlingTeam }),
                F.map((E) => {
                  E.player.id == R.player_data.striker &&
                    h({
                      id: E.player.id,
                      name: E.player.firstName + " " + E.player.lastName,
                      runsScored: E.runs_scored,
                      ballsFaced: E.balls_faced,
                      fours: E.fours,
                      sixes: E.sixes,
                      strikeRate: E.strike_rate,
                      oversBowled: E.overs_bowled,
                      runsConceeded: E.runs_conceeded,
                      wicketsTaken: E.wickets_taken,
                      economy: E.economy,
                      isModalVisible: !1,
                    }),
                    E.player.id == R.player_data.non_striker &&
                      m({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceeded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      });
                });
            } else if (R.currentInnings === 4) {
              const F = await v(R.fourthInningsBattingTeam.id),
                $ = await v(R.fourthInningsBowlingTeam.id);
              p(F), y($);
              var B = { ...R.fourthInningsBattingTeam };
              (B.teamRuns = R.team_stats.total_runs),
                (B.teamWickets = R.team_stats.wickets_taken),
                (B.teamOvers = R.team_stats.overs_bowled),
                (B.teamRunRate = R.team_stats.run_rate),
                g(B),
                x({ ...R.fourthInningsBowlingTeam }),
                F.map((E) => {
                  E.player.id == R.player_data.striker &&
                    h({
                      id: E.player.id,
                      name: E.player.firstName + " " + E.player.lastName,
                      runsScored: E.runs_scored,
                      ballsFaced: E.balls_faced,
                      fours: E.fours,
                      sixes: E.sixes,
                      strikeRate: E.strike_rate,
                      oversBowled: E.overs_bowled,
                      runsConceeded: E.runs_conceeded,
                      wicketsTaken: E.wickets_taken,
                      economy: E.economy,
                      isModalVisible: !1,
                    }),
                    E.player.id == R.player_data.non_striker &&
                      m({
                        id: E.player.id,
                        name: E.player.firstName + " " + E.player.lastName,
                        runsScored: E.runs_scored,
                        ballsFaced: E.balls_faced,
                        fours: E.fours,
                        sixes: E.sixes,
                        strikeRate: E.strike_rate,
                        oversBowled: E.overs_bowled,
                        runsConceeded: E.runs_conceeded,
                        wicketsTaken: E.wickets_taken,
                        economy: E.economy,
                        isModalVisible: !1,
                      });
                });
            }
          } catch (R) {
            console.log("Error ", R);
          }
        })();
    }, [t, d, p, y, b]);
    const _ = (D) => {
        u.id === D.id
          ? X.error("Both Striker and Non Striker Can't be same!")
          : h(D);
      },
      P = (D) => {
        c.id === D.id
          ? X.error("Both Striker and Non Striker Can't be same!")
          : m(D);
      },
      U = (D) => {
        S(D);
      };
    return a.jsxs(wC, {
      children: [
        a.jsxs("div", {
          className:
            "xl:flex p-2 xl:gap-8 xl:flex-row flex-col gap-4 text-gray-100 text-xs",
          children: [a.jsx(sE, {}), a.jsx(oE, {}), a.jsx(SC, {})],
        }),
        a.jsx(ru, {
          title: "Select Bowler",
          options: l,
          isVisible: f.name ? f.isModalVisible : "true",
          onSelect: U,
          selectedPlayerId: f.id,
          type: "bowler",
        }),
        a.jsx(ru, {
          title: "Select Non Striker",
          options: i,
          isVisible: u ? u.isModalVisible : "true",
          onSelect: P,
          selectedPlayerId: u.id,
        }),
        a.jsx(ru, {
          title: "Select Striker",
          options: i,
          isVisible: c ? c.isModalVisible : "true",
          onSelect: _,
          selectedPlayerId: c.id,
        }),
        a.jsx(lE, {}),
        a.jsx(cE, {
          isVisible: k,
          onClose: () => {
            j(!1);
          },
        }),
      ],
    });
  },
  dE = () =>
    a.jsx(Cn, {
      children: a.jsx(Q, { path: "/ball", element: a.jsx(uE, {}) }),
    }),
  fE = () =>
    a.jsxs(v5, {
      children: [
        a.jsx(_S, { position: "top-right", reverseOrder: !1 }),
        a.jsx(US, {}),
        a.jsx(HS, {}),
        a.jsx(i7, {}),
        a.jsx($7, {}),
        a.jsx(W7, {}),
        a.jsx(Z7, {}),
        a.jsx(nC, {}),
        a.jsx(aC, {}),
        a.jsx(xC, {}),
        a.jsx(dE, {}),
      ],
    });
ng(document.getElementById("root")).render(
  a.jsx(T.StrictMode, { children: a.jsx(fE, {}) })
);
