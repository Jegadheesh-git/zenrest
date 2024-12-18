function Jx(e, t) {
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
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
var Ri =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Wm(e) {
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
var Hm = { exports: {} },
  pl = {},
  qm = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = Symbol.for("react.element"),
  e2 = Symbol.for("react.portal"),
  t2 = Symbol.for("react.fragment"),
  n2 = Symbol.for("react.strict_mode"),
  r2 = Symbol.for("react.profiler"),
  s2 = Symbol.for("react.provider"),
  o2 = Symbol.for("react.context"),
  i2 = Symbol.for("react.forward_ref"),
  a2 = Symbol.for("react.suspense"),
  l2 = Symbol.for("react.memo"),
  c2 = Symbol.for("react.lazy"),
  mp = Symbol.iterator;
function u2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mp && e[mp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Km = Object.assign,
  Zm = {};
function Hs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zm),
    (this.updater = n || Gm);
}
Hs.prototype.isReactComponent = {};
Hs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ym() {}
Ym.prototype = Hs.prototype;
function Pd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zm),
    (this.updater = n || Gm);
}
var Ld = (Pd.prototype = new Ym());
Ld.constructor = Pd;
Km(Ld, Hs.prototype);
Ld.isPureReactComponent = !0;
var gp = Array.isArray,
  Qm = Object.prototype.hasOwnProperty,
  Od = { current: null },
  Xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jm(e, t, n) {
  var r,
    s = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qm.call(t, r) && !Xm.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: oi,
    type: e,
    key: o,
    ref: a,
    props: s,
    _owner: Od.current,
  };
}
function d2(e, t) {
  return {
    $$typeof: oi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oi;
}
function f2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yp = /\/+/g;
function gc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? f2("" + e.key)
    : t.toString(36);
}
function oa(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oi:
          case e2:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + gc(a, 0) : r),
      gp(s)
        ? ((n = ""),
          e != null && (n = e.replace(yp, "$&/") + "/"),
          oa(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Bd(s) &&
            (s = d2(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(yp, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), gp(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var c = r + gc(o, l);
      a += oa(o, t, n, c, s);
    }
  else if (((c = u2(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (c = r + gc(o, l++)), (a += oa(o, t, n, c, s));
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
  return a;
}
function Ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    oa(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function p2(e) {
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
var ut = { current: null },
  ia = { transition: null },
  h2 = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: ia,
    ReactCurrentOwner: Od,
  };
function e1() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: Ai,
  forEach: function (e, t, n) {
    Ai(
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
      Ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Hs;
ee.Fragment = t2;
ee.Profiler = r2;
ee.PureComponent = Pd;
ee.StrictMode = n2;
ee.Suspense = a2;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h2;
ee.act = e1;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Km({}, e.props),
    s = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Od.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      Qm.call(t, c) &&
        !Xm.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: oi, type: e.type, key: s, ref: o, props: r, _owner: a };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: o2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: s2, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Jm;
ee.createFactory = function (e) {
  var t = Jm.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: i2, render: e };
};
ee.isValidElement = Bd;
ee.lazy = function (e) {
  return { $$typeof: c2, _payload: { _status: -1, _result: e }, _init: p2 };
};
ee.memo = function (e, t) {
  return { $$typeof: l2, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = ia.transition;
  ia.transition = {};
  try {
    e();
  } finally {
    ia.transition = t;
  }
};
ee.unstable_act = e1;
ee.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return ut.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
ee.useId = function () {
  return ut.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return ut.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return ut.current.useRef(e);
};
ee.useState = function (e) {
  return ut.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return ut.current.useTransition();
};
ee.version = "18.3.1";
qm.exports = ee;
var E = qm.exports;
const t1 = fl(E),
  iu = Jx({ __proto__: null, default: t1 }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m2 = E,
  g2 = Symbol.for("react.element"),
  y2 = Symbol.for("react.fragment"),
  x2 = Object.prototype.hasOwnProperty,
  v2 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  w2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function n1(e, t, n) {
  var r,
    s = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) x2.call(t, r) && !w2.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: g2,
    type: e,
    key: o,
    ref: a,
    props: s,
    _owner: v2.current,
  };
}
pl.Fragment = y2;
pl.jsx = n1;
pl.jsxs = n1;
Hm.exports = pl;
var i = Hm.exports,
  r1 = { exports: {} },
  Bt = {},
  s1 = { exports: {} },
  o1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, O) {
    var B = _.length;
    _.push(O);
    e: for (; 0 < B; ) {
      var z = (B - 1) >>> 1,
        T = _[z];
      if (0 < s(T, O)) (_[z] = O), (_[B] = T), (B = z);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var O = _[0],
      B = _.pop();
    if (B !== O) {
      _[0] = B;
      e: for (var z = 0, T = _.length, Z = T >>> 1; z < Z; ) {
        var He = 2 * (z + 1) - 1,
          Ue = _[He],
          J = He + 1,
          fe = _[J];
        if (0 > s(Ue, B))
          J < T && 0 > s(fe, Ue)
            ? ((_[z] = fe), (_[J] = B), (z = J))
            : ((_[z] = Ue), (_[He] = B), (z = He));
        else if (J < T && 0 > s(fe, B)) (_[z] = fe), (_[J] = B), (z = J);
        else break e;
      }
    }
    return O;
  }
  function s(_, O) {
    var B = _.sortIndex - O.sortIndex;
    return B !== 0 ? B : _.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var c = [],
    u = [],
    f = 1,
    d = null,
    p = 3,
    y = !1,
    m = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(_) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= _)
        r(u), (O.sortIndex = O.expirationTime), t(c, O);
      else break;
      O = n(u);
    }
  }
  function j(_) {
    if (((g = !1), w(_), !m))
      if (n(c) !== null) (m = !0), $(k);
      else {
        var O = n(u);
        O !== null && L(j, O.startTime - _);
      }
  }
  function k(_, O) {
    (m = !1), g && ((g = !1), h(N), (N = -1)), (y = !0);
    var B = p;
    try {
      for (
        w(O), d = n(c);
        d !== null && (!(d.expirationTime > O) || (_ && !M()));

      ) {
        var z = d.callback;
        if (typeof z == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var T = z(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof T == "function" ? (d.callback = T) : d === n(c) && r(c),
            w(O);
        } else r(c);
        d = n(c);
      }
      if (d !== null) var Z = !0;
      else {
        var He = n(u);
        He !== null && L(j, He.startTime - O), (Z = !1);
      }
      return Z;
    } finally {
      (d = null), (p = B), (y = !1);
    }
  }
  var b = !1,
    C = null,
    N = -1,
    v = 5,
    R = -1;
  function M() {
    return !(e.unstable_now() - R < v);
  }
  function I() {
    if (C !== null) {
      var _ = e.unstable_now();
      R = _;
      var O = !0;
      try {
        O = C(!0, _);
      } finally {
        O ? D() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var D;
  if (typeof x == "function")
    D = function () {
      x(I);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      H = q.port2;
    (q.port1.onmessage = I),
      (D = function () {
        H.postMessage(null);
      });
  } else
    D = function () {
      S(I, 0);
    };
  function $(_) {
    (C = _), b || ((b = !0), D());
  }
  function L(_, O) {
    N = S(function () {
      _(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), $(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (v = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var B = p;
      p = O;
      try {
        return _();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, O) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var B = p;
      p = _;
      try {
        return O();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (_, O, B) {
      var z = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? z + B : z))
          : (B = z),
        _)
      ) {
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
          T = 5e3;
      }
      return (
        (T = B + T),
        (_ = {
          id: f++,
          callback: O,
          priorityLevel: _,
          startTime: B,
          expirationTime: T,
          sortIndex: -1,
        }),
        B > z
          ? ((_.sortIndex = B),
            t(u, _),
            n(c) === null &&
              _ === n(u) &&
              (g ? (h(N), (N = -1)) : (g = !0), L(j, B - z)))
          : ((_.sortIndex = T), t(c, _), m || y || ((m = !0), $(k))),
        _
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (_) {
      var O = p;
      return function () {
        var B = p;
        p = O;
        try {
          return _.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(o1);
s1.exports = o1;
var S2 = s1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C2 = E,
  Ot = S2;
function U(e) {
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
var i1 = new Set(),
  Mo = {};
function Wr(e, t) {
  Ps(e, t), Ps(e + "Capture", t);
}
function Ps(e, t) {
  for (Mo[e] = t, e = 0; e < t.length; e++) i1.add(t[e]);
}
var On = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  au = Object.prototype.hasOwnProperty,
  b2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xp = {},
  vp = {};
function j2(e) {
  return au.call(vp, e)
    ? !0
    : au.call(xp, e)
    ? !1
    : b2.test(e)
    ? (vp[e] = !0)
    : ((xp[e] = !0), !1);
}
function k2(e, t, n, r) {
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
function N2(e, t, n, r) {
  if (t === null || typeof t > "u" || k2(e, t, n, r)) return !0;
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
function dt(e, t, n, r, s, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new dt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Xe[t] = new dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Xe[e] = new dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Xe[e] = new dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Xe[e] = new dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Xe[e] = new dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Xe[e] = new dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Xe[e] = new dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Id = /[\-:]([a-z])/g;
function Ud(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Id, Ud);
    Xe[t] = new dt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Id, Ud);
    Xe[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Id, Ud);
  Xe[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Xe[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Xe[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $d(e, t, n, r) {
  var s = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (N2(t, n, s, r) && (n = null),
    r || s === null
      ? j2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Dn = C2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mi = Symbol.for("react.element"),
  ds = Symbol.for("react.portal"),
  fs = Symbol.for("react.fragment"),
  Fd = Symbol.for("react.strict_mode"),
  lu = Symbol.for("react.profiler"),
  a1 = Symbol.for("react.provider"),
  l1 = Symbol.for("react.context"),
  Dd = Symbol.for("react.forward_ref"),
  cu = Symbol.for("react.suspense"),
  uu = Symbol.for("react.suspense_list"),
  zd = Symbol.for("react.memo"),
  Zn = Symbol.for("react.lazy"),
  c1 = Symbol.for("react.offscreen"),
  wp = Symbol.iterator;
function so(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wp && e[wp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  yc;
function go(e) {
  if (yc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yc = (t && t[1]) || "";
    }
  return (
    `
` +
    yc +
    e
  );
}
var xc = !1;
function vc(e, t) {
  if (!e || xc) return "";
  xc = !0;
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
          a = s.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && s[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (s[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || s[a] !== o[l])) {
                var c =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (xc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? go(e) : "";
}
function E2(e) {
  switch (e.tag) {
    case 5:
      return go(e.type);
    case 16:
      return go("Lazy");
    case 13:
      return go("Suspense");
    case 19:
      return go("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vc(e.type, !1)), e;
    case 11:
      return (e = vc(e.type.render, !1)), e;
    case 1:
      return (e = vc(e.type, !0)), e;
    default:
      return "";
  }
}
function du(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fs:
      return "Fragment";
    case ds:
      return "Portal";
    case lu:
      return "Profiler";
    case Fd:
      return "StrictMode";
    case cu:
      return "Suspense";
    case uu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case l1:
        return (e.displayName || "Context") + ".Consumer";
      case a1:
        return (e._context.displayName || "Context") + ".Provider";
      case Dd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zd:
        return (
          (t = e.displayName || null), t !== null ? t : du(e.type) || "Memo"
        );
      case Zn:
        (t = e._payload), (e = e._init);
        try {
          return du(e(t));
        } catch {}
    }
  return null;
}
function T2(e) {
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
      return du(t);
    case 8:
      return t === Fd ? "StrictMode" : "Mode";
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
function hr(e) {
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
function u1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _2(e) {
  var t = u1(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pi(e) {
  e._valueTracker || (e._valueTracker = _2(e));
}
function d1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = u1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ta(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fu(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Sp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function f1(e, t) {
  (t = t.checked), t != null && $d(e, "checked", t, !1);
}
function pu(e, t) {
  f1(e, t);
  var n = hr(t.value),
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
    ? hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hu(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cp(e, t, n) {
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
function hu(e, t, n) {
  (t !== "number" || Ta(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yo = Array.isArray;
function js(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (yo(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hr(n) };
}
function p1(e, t) {
  var n = hr(t.value),
    r = hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function h1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? h1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Li,
  m1 = (function (e) {
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
        Li = Li || document.createElement("div"),
          Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Li.firstChild;
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
var Co = {
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
  R2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Co).forEach(function (e) {
  R2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Co[t] = Co[e]);
  });
});
function g1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Co.hasOwnProperty(e) && Co[e])
    ? ("" + t).trim()
    : t + "px";
}
function y1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = g1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var A2 = _e(
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
function yu(e, t) {
  if (t) {
    if (A2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function xu(e, t) {
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
var vu = null;
function Vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wu = null,
  ks = null,
  Ns = null;
function kp(e) {
  if ((e = li(e))) {
    if (typeof wu != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = xl(t)), wu(e.stateNode, e.type, t));
  }
}
function x1(e) {
  ks ? (Ns ? Ns.push(e) : (Ns = [e])) : (ks = e);
}
function v1() {
  if (ks) {
    var e = ks,
      t = Ns;
    if (((Ns = ks = null), kp(e), t)) for (e = 0; e < t.length; e++) kp(t[e]);
  }
}
function w1(e, t) {
  return e(t);
}
function S1() {}
var wc = !1;
function C1(e, t, n) {
  if (wc) return e(t, n);
  wc = !0;
  try {
    return w1(e, t, n);
  } finally {
    (wc = !1), (ks !== null || Ns !== null) && (S1(), v1());
  }
}
function Lo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
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
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var Su = !1;
if (On)
  try {
    var oo = {};
    Object.defineProperty(oo, "passive", {
      get: function () {
        Su = !0;
      },
    }),
      window.addEventListener("test", oo, oo),
      window.removeEventListener("test", oo, oo);
  } catch {
    Su = !1;
  }
function M2(e, t, n, r, s, o, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var bo = !1,
  _a = null,
  Ra = !1,
  Cu = null,
  P2 = {
    onError: function (e) {
      (bo = !0), (_a = e);
    },
  };
function L2(e, t, n, r, s, o, a, l, c) {
  (bo = !1), (_a = null), M2.apply(P2, arguments);
}
function O2(e, t, n, r, s, o, a, l, c) {
  if ((L2.apply(this, arguments), bo)) {
    if (bo) {
      var u = _a;
      (bo = !1), (_a = null);
    } else throw Error(U(198));
    Ra || ((Ra = !0), (Cu = u));
  }
}
function Hr(e) {
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
function b1(e) {
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
function Np(e) {
  if (Hr(e) !== e) throw Error(U(188));
}
function B2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(U(188));
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
        if (o === n) return Np(s), e;
        if (o === r) return Np(s), t;
        o = o.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = s), (r = o);
    else {
      for (var a = !1, l = s.child; l; ) {
        if (l === n) {
          (a = !0), (n = s), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = s), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = s);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = s);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function j1(e) {
  return (e = B2(e)), e !== null ? k1(e) : null;
}
function k1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = k1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var N1 = Ot.unstable_scheduleCallback,
  Ep = Ot.unstable_cancelCallback,
  I2 = Ot.unstable_shouldYield,
  U2 = Ot.unstable_requestPaint,
  Oe = Ot.unstable_now,
  $2 = Ot.unstable_getCurrentPriorityLevel,
  Wd = Ot.unstable_ImmediatePriority,
  E1 = Ot.unstable_UserBlockingPriority,
  Aa = Ot.unstable_NormalPriority,
  F2 = Ot.unstable_LowPriority,
  T1 = Ot.unstable_IdlePriority,
  hl = null,
  yn = null;
function D2(e) {
  if (yn && typeof yn.onCommitFiberRoot == "function")
    try {
      yn.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : W2,
  z2 = Math.log,
  V2 = Math.LN2;
function W2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((z2(e) / V2) | 0)) | 0;
}
var Oi = 64,
  Bi = 4194304;
function xo(e) {
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
function Ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~s;
    l !== 0 ? (r = xo(l)) : ((o &= a), o !== 0 && (r = xo(o)));
  } else (a = n & ~s), a !== 0 ? (r = xo(a)) : o !== 0 && (r = xo(o));
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
function H2(e, t) {
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
function q2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - nn(o),
      l = 1 << a,
      c = s[a];
    c === -1
      ? (!(l & n) || l & r) && (s[a] = H2(l, t))
      : c <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function bu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _1() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function Sc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function G2(e, t) {
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
function Hd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var de = 0;
function R1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var A1,
  qd,
  M1,
  P1,
  L1,
  ju = !1,
  Ii = [],
  sr = null,
  or = null,
  ir = null,
  Oo = new Map(),
  Bo = new Map(),
  Xn = [],
  K2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sr = null;
      break;
    case "dragenter":
    case "dragleave":
      or = null;
      break;
    case "mouseover":
    case "mouseout":
      ir = null;
      break;
    case "pointerover":
    case "pointerout":
      Oo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bo.delete(t.pointerId);
  }
}
function io(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = li(t)), t !== null && qd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Z2(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (sr = io(sr, e, t, n, r, s)), !0;
    case "dragenter":
      return (or = io(or, e, t, n, r, s)), !0;
    case "mouseover":
      return (ir = io(ir, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return Oo.set(o, io(Oo.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), Bo.set(o, io(Bo.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function O1(e) {
  var t = Er(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = b1(n)), t !== null)) {
          (e.blockedOn = t),
            L1(e.priority, function () {
              M1(n);
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
function aa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ku(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vu = r), n.target.dispatchEvent(r), (vu = null);
    } else return (t = li(n)), t !== null && qd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _p(e, t, n) {
  aa(e) && n.delete(t);
}
function Y2() {
  (ju = !1),
    sr !== null && aa(sr) && (sr = null),
    or !== null && aa(or) && (or = null),
    ir !== null && aa(ir) && (ir = null),
    Oo.forEach(_p),
    Bo.forEach(_p);
}
function ao(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ju ||
      ((ju = !0),
      Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, Y2)));
}
function Io(e) {
  function t(s) {
    return ao(s, e);
  }
  if (0 < Ii.length) {
    ao(Ii[0], e);
    for (var n = 1; n < Ii.length; n++) {
      var r = Ii[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sr !== null && ao(sr, e),
      or !== null && ao(or, e),
      ir !== null && ao(ir, e),
      Oo.forEach(t),
      Bo.forEach(t),
      n = 0;
    n < Xn.length;
    n++
  )
    (r = Xn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xn.length && ((n = Xn[0]), n.blockedOn === null); )
    O1(n), n.blockedOn === null && Xn.shift();
}
var Es = Dn.ReactCurrentBatchConfig,
  Pa = !0;
function Q2(e, t, n, r) {
  var s = de,
    o = Es.transition;
  Es.transition = null;
  try {
    (de = 1), Gd(e, t, n, r);
  } finally {
    (de = s), (Es.transition = o);
  }
}
function X2(e, t, n, r) {
  var s = de,
    o = Es.transition;
  Es.transition = null;
  try {
    (de = 4), Gd(e, t, n, r);
  } finally {
    (de = s), (Es.transition = o);
  }
}
function Gd(e, t, n, r) {
  if (Pa) {
    var s = ku(e, t, n, r);
    if (s === null) Ac(e, t, r, La, n), Tp(e, r);
    else if (Z2(s, e, t, n, r)) r.stopPropagation();
    else if ((Tp(e, r), t & 4 && -1 < K2.indexOf(e))) {
      for (; s !== null; ) {
        var o = li(s);
        if (
          (o !== null && A1(o),
          (o = ku(e, t, n, r)),
          o === null && Ac(e, t, r, La, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else Ac(e, t, r, null, n);
  }
}
var La = null;
function ku(e, t, n, r) {
  if (((La = null), (e = Vd(r)), (e = Er(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = b1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (La = e), null;
}
function B1(e) {
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
      switch ($2()) {
        case Wd:
          return 1;
        case E1:
          return 4;
        case Aa:
        case F2:
          return 16;
        case T1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tr = null,
  Kd = null,
  la = null;
function I1() {
  if (la) return la;
  var e,
    t = Kd,
    n = t.length,
    r,
    s = "value" in tr ? tr.value : tr.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[o - r]; r++);
  return (la = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ca(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ui() {
  return !0;
}
function Rp() {
  return !1;
}
function It(e) {
  function t(n, r, s, o, a) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ui
        : Rp),
      (this.isPropagationStopped = Rp),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ui));
      },
      persist: function () {},
      isPersistent: Ui,
    }),
    t
  );
}
var qs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zd = It(qs),
  ai = _e({}, qs, { view: 0, detail: 0 }),
  J2 = It(ai),
  Cc,
  bc,
  lo,
  ml = _e({}, ai, {
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
    getModifierState: Yd,
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
        : (e !== lo &&
            (lo && e.type === "mousemove"
              ? ((Cc = e.screenX - lo.screenX), (bc = e.screenY - lo.screenY))
              : (bc = Cc = 0),
            (lo = e)),
          Cc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bc;
    },
  }),
  Ap = It(ml),
  ev = _e({}, ml, { dataTransfer: 0 }),
  tv = It(ev),
  nv = _e({}, ai, { relatedTarget: 0 }),
  jc = It(nv),
  rv = _e({}, qs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = It(rv),
  ov = _e({}, qs, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iv = It(ov),
  av = _e({}, qs, { data: 0 }),
  Mp = It(av),
  lv = {
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
  cv = {
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
  uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uv[e]) ? !!t[e] : !1;
}
function Yd() {
  return dv;
}
var fv = _e({}, ai, {
    key: function (e) {
      if (e.key) {
        var t = lv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ca(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cv[e.keyCode] || "Unidentified"
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
    getModifierState: Yd,
    charCode: function (e) {
      return e.type === "keypress" ? ca(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ca(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pv = It(fv),
  hv = _e({}, ml, {
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
  Pp = It(hv),
  mv = _e({}, ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yd,
  }),
  gv = It(mv),
  yv = _e({}, qs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xv = It(yv),
  vv = _e({}, ml, {
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
  wv = It(vv),
  Sv = [9, 13, 27, 32],
  Qd = On && "CompositionEvent" in window,
  jo = null;
On && "documentMode" in document && (jo = document.documentMode);
var Cv = On && "TextEvent" in window && !jo,
  U1 = On && (!Qd || (jo && 8 < jo && 11 >= jo)),
  Lp = " ",
  Op = !1;
function $1(e, t) {
  switch (e) {
    case "keyup":
      return Sv.indexOf(t.keyCode) !== -1;
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
function F1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ps = !1;
function bv(e, t) {
  switch (e) {
    case "compositionend":
      return F1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Op = !0), Lp);
    case "textInput":
      return (e = t.data), e === Lp && Op ? null : e;
    default:
      return null;
  }
}
function jv(e, t) {
  if (ps)
    return e === "compositionend" || (!Qd && $1(e, t))
      ? ((e = I1()), (la = Kd = tr = null), (ps = !1), e)
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
      return U1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kv = {
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
function Bp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kv[e.type] : t === "textarea";
}
function D1(e, t, n, r) {
  x1(r),
    (t = Oa(t, "onChange")),
    0 < t.length &&
      ((n = new Zd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ko = null,
  Uo = null;
function Nv(e) {
  X1(e, 0);
}
function gl(e) {
  var t = gs(e);
  if (d1(t)) return e;
}
function Ev(e, t) {
  if (e === "change") return t;
}
var z1 = !1;
if (On) {
  var kc;
  if (On) {
    var Nc = "oninput" in document;
    if (!Nc) {
      var Ip = document.createElement("div");
      Ip.setAttribute("oninput", "return;"),
        (Nc = typeof Ip.oninput == "function");
    }
    kc = Nc;
  } else kc = !1;
  z1 = kc && (!document.documentMode || 9 < document.documentMode);
}
function Up() {
  ko && (ko.detachEvent("onpropertychange", V1), (Uo = ko = null));
}
function V1(e) {
  if (e.propertyName === "value" && gl(Uo)) {
    var t = [];
    D1(t, Uo, e, Vd(e)), C1(Nv, t);
  }
}
function Tv(e, t, n) {
  e === "focusin"
    ? (Up(), (ko = t), (Uo = n), ko.attachEvent("onpropertychange", V1))
    : e === "focusout" && Up();
}
function _v(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Uo);
}
function Rv(e, t) {
  if (e === "click") return gl(t);
}
function Av(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Mv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : Mv;
function $o(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!au.call(t, s) || !on(e[s], t[s])) return !1;
  }
  return !0;
}
function $p(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fp(e, t) {
  var n = $p(e);
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
    n = $p(n);
  }
}
function W1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? W1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function H1() {
  for (var e = window, t = Ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ta(e.document);
  }
  return t;
}
function Xd(e) {
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
function Pv(e) {
  var t = H1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    W1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xd(n)) {
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
          (s = Fp(n, o));
        var a = Fp(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var Lv = On && "documentMode" in document && 11 >= document.documentMode,
  hs = null,
  Nu = null,
  No = null,
  Eu = !1;
function Dp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eu ||
    hs == null ||
    hs !== Ta(r) ||
    ((r = hs),
    "selectionStart" in r && Xd(r)
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
    (No && $o(No, r)) ||
      ((No = r),
      (r = Oa(Nu, "onSelect")),
      0 < r.length &&
        ((t = new Zd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = hs))));
}
function $i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ms = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd"),
  },
  Ec = {},
  q1 = {};
On &&
  ((q1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ms.animationend.animation,
    delete ms.animationiteration.animation,
    delete ms.animationstart.animation),
  "TransitionEvent" in window || delete ms.transitionend.transition);
function yl(e) {
  if (Ec[e]) return Ec[e];
  if (!ms[e]) return e;
  var t = ms[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in q1) return (Ec[e] = t[n]);
  return e;
}
var G1 = yl("animationend"),
  K1 = yl("animationiteration"),
  Z1 = yl("animationstart"),
  Y1 = yl("transitionend"),
  Q1 = new Map(),
  zp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vr(e, t) {
  Q1.set(e, t), Wr(t, [e]);
}
for (var Tc = 0; Tc < zp.length; Tc++) {
  var _c = zp[Tc],
    Ov = _c.toLowerCase(),
    Bv = _c[0].toUpperCase() + _c.slice(1);
  vr(Ov, "on" + Bv);
}
vr(G1, "onAnimationEnd");
vr(K1, "onAnimationIteration");
vr(Z1, "onAnimationStart");
vr("dblclick", "onDoubleClick");
vr("focusin", "onFocus");
vr("focusout", "onBlur");
vr(Y1, "onTransitionEnd");
Ps("onMouseEnter", ["mouseout", "mouseover"]);
Ps("onMouseLeave", ["mouseout", "mouseover"]);
Ps("onPointerEnter", ["pointerout", "pointerover"]);
Ps("onPointerLeave", ["pointerout", "pointerover"]);
Wr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Iv = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function Vp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), O2(r, t, void 0, e), (e.currentTarget = null);
}
function X1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== o && s.isPropagationStopped())) break e;
          Vp(s, l, u), (o = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== o && s.isPropagationStopped())
          )
            break e;
          Vp(s, l, u), (o = c);
        }
    }
  }
  if (Ra) throw ((e = Cu), (Ra = !1), (Cu = null), e);
}
function we(e, t) {
  var n = t[Mu];
  n === void 0 && (n = t[Mu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (J1(t, e, 2, !1), n.add(r));
}
function Rc(e, t, n) {
  var r = 0;
  t && (r |= 4), J1(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[Fi]) {
    (e[Fi] = !0),
      i1.forEach(function (n) {
        n !== "selectionchange" && (Iv.has(n) || Rc(n, !1, e), Rc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || ((t[Fi] = !0), Rc("selectionchange", !1, t));
  }
}
function J1(e, t, n, r) {
  switch (B1(t)) {
    case 1:
      var s = Q2;
      break;
    case 4:
      s = X2;
      break;
    default:
      s = Gd;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Su ||
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
function Ac(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Er(l)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  C1(function () {
    var u = o,
      f = Vd(n),
      d = [];
    e: {
      var p = Q1.get(e);
      if (p !== void 0) {
        var y = Zd,
          m = e;
        switch (e) {
          case "keypress":
            if (ca(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = pv;
            break;
          case "focusin":
            (m = "focus"), (y = jc);
            break;
          case "focusout":
            (m = "blur"), (y = jc);
            break;
          case "beforeblur":
          case "afterblur":
            y = jc;
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
            y = Ap;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = tv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = gv;
            break;
          case G1:
          case K1:
          case Z1:
            y = sv;
            break;
          case Y1:
            y = xv;
            break;
          case "scroll":
            y = J2;
            break;
          case "wheel":
            y = wv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Pp;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          h = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var x = u, w; x !== null; ) {
          w = x;
          var j = w.stateNode;
          if (
            (w.tag === 5 &&
              j !== null &&
              ((w = j),
              h !== null && ((j = Lo(x, h)), j != null && g.push(Do(x, j, w)))),
            S)
          )
            break;
          x = x.return;
        }
        0 < g.length &&
          ((p = new y(p, m, null, n, f)), d.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== vu &&
            (m = n.relatedTarget || n.fromElement) &&
            (Er(m) || m[Bn]))
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
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? Er(m) : null),
              m !== null &&
                ((S = Hr(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((g = Ap),
            (j = "onMouseLeave"),
            (h = "onMouseEnter"),
            (x = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Pp),
              (j = "onPointerLeave"),
              (h = "onPointerEnter"),
              (x = "pointer")),
            (S = y == null ? p : gs(y)),
            (w = m == null ? p : gs(m)),
            (p = new g(j, x + "leave", y, n, f)),
            (p.target = S),
            (p.relatedTarget = w),
            (j = null),
            Er(f) === u &&
              ((g = new g(h, x + "enter", m, n, f)),
              (g.target = w),
              (g.relatedTarget = S),
              (j = g)),
            (S = j),
            y && m)
          )
            t: {
              for (g = y, h = m, x = 0, w = g; w; w = os(w)) x++;
              for (w = 0, j = h; j; j = os(j)) w++;
              for (; 0 < x - w; ) (g = os(g)), x--;
              for (; 0 < w - x; ) (h = os(h)), w--;
              for (; x--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = os(g)), (h = os(h));
              }
              g = null;
            }
          else g = null;
          y !== null && Wp(d, p, y, g, !1),
            m !== null && S !== null && Wp(d, S, m, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? gs(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var k = Ev;
        else if (Bp(p))
          if (z1) k = Av;
          else {
            k = _v;
            var b = Tv;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = Rv);
        if (k && (k = k(e, u))) {
          D1(d, k, n, f);
          break e;
        }
        b && b(e, p, u),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            hu(p, "number", p.value);
      }
      switch (((b = u ? gs(u) : window), e)) {
        case "focusin":
          (Bp(b) || b.contentEditable === "true") &&
            ((hs = b), (Nu = u), (No = null));
          break;
        case "focusout":
          No = Nu = hs = null;
          break;
        case "mousedown":
          Eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Eu = !1), Dp(d, n, f);
          break;
        case "selectionchange":
          if (Lv) break;
        case "keydown":
        case "keyup":
          Dp(d, n, f);
      }
      var C;
      if (Qd)
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
        ps
          ? $1(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (U1 &&
          n.locale !== "ko" &&
          (ps || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && ps && (C = I1())
            : ((tr = f),
              (Kd = "value" in tr ? tr.value : tr.textContent),
              (ps = !0))),
        (b = Oa(u, N)),
        0 < b.length &&
          ((N = new Mp(N, e, null, n, f)),
          d.push({ event: N, listeners: b }),
          C ? (N.data = C) : ((C = F1(n)), C !== null && (N.data = C)))),
        (C = Cv ? bv(e, n) : jv(e, n)) &&
          ((u = Oa(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Mp("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = C)));
    }
    X1(d, t);
  });
}
function Do(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = Lo(e, n)),
      o != null && r.unshift(Do(e, o, s)),
      (o = Lo(e, t)),
      o != null && r.push(Do(e, o, s))),
      (e = e.return);
  }
  return r;
}
function os(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wp(e, t, n, r, s) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Lo(n, o)), c != null && a.unshift(Do(n, c, l)))
        : s || ((c = Lo(n, o)), c != null && a.push(Do(n, c, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Uv = /\r\n?/g,
  $v = /\u0000|\uFFFD/g;
function Hp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Uv,
      `
`
    )
    .replace($v, "");
}
function Di(e, t, n) {
  if (((t = Hp(t)), Hp(e) !== t && n)) throw Error(U(425));
}
function Ba() {}
var Tu = null,
  _u = null;
function Ru(e, t) {
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
var Au = typeof setTimeout == "function" ? setTimeout : void 0,
  Fv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qp = typeof Promise == "function" ? Promise : void 0,
  Dv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qp < "u"
      ? function (e) {
          return qp.resolve(null).then(e).catch(zv);
        }
      : Au;
function zv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Mc(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Io(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Io(t);
}
function ar(e) {
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
function Gp(e) {
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
var Gs = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + Gs,
  zo = "__reactProps$" + Gs,
  Bn = "__reactContainer$" + Gs,
  Mu = "__reactEvents$" + Gs,
  Vv = "__reactListeners$" + Gs,
  Wv = "__reactHandles$" + Gs;
function Er(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bn] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gp(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = Gp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function li(e) {
  return (
    (e = e[mn] || e[Bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function xl(e) {
  return e[zo] || null;
}
var Pu = [],
  ys = -1;
function wr(e) {
  return { current: e };
}
function Se(e) {
  0 > ys || ((e.current = Pu[ys]), (Pu[ys] = null), ys--);
}
function xe(e, t) {
  ys++, (Pu[ys] = e.current), (e.current = t);
}
var mr = {},
  st = wr(mr),
  xt = wr(!1),
  Br = mr;
function Ls(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mr;
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
function vt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ia() {
  Se(xt), Se(st);
}
function Kp(e, t, n) {
  if (st.current !== mr) throw Error(U(168));
  xe(st, t), xe(xt, n);
}
function e0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(U(108, T2(e) || "Unknown", s));
  return _e({}, n, r);
}
function Ua(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mr),
    (Br = st.current),
    xe(st, e),
    xe(xt, xt.current),
    !0
  );
}
function Zp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = e0(e, t, Br)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(xt),
      Se(st),
      xe(st, e))
    : Se(xt),
    xe(xt, n);
}
var Rn = null,
  vl = !1,
  Pc = !1;
function t0(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function Hv(e) {
  (vl = !0), t0(e);
}
function Sr() {
  if (!Pc && Rn !== null) {
    Pc = !0;
    var e = 0,
      t = de;
    try {
      var n = Rn;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rn = null), (vl = !1);
    } catch (s) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), N1(Wd, Sr), s);
    } finally {
      (de = t), (Pc = !1);
    }
  }
  return null;
}
var xs = [],
  vs = 0,
  $a = null,
  Fa = 0,
  Dt = [],
  zt = 0,
  Ir = null,
  Mn = 1,
  Pn = "";
function kr(e, t) {
  (xs[vs++] = Fa), (xs[vs++] = $a), ($a = e), (Fa = t);
}
function n0(e, t, n) {
  (Dt[zt++] = Mn), (Dt[zt++] = Pn), (Dt[zt++] = Ir), (Ir = e);
  var r = Mn;
  e = Pn;
  var s = 32 - nn(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - nn(t) + s;
  if (30 < o) {
    var a = s - (s % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (Mn = (1 << (32 - nn(t) + s)) | (n << s) | r),
      (Pn = o + e);
  } else (Mn = (1 << o) | (n << s) | r), (Pn = e);
}
function Jd(e) {
  e.return !== null && (kr(e, 1), n0(e, 1, 0));
}
function ef(e) {
  for (; e === $a; )
    ($a = xs[--vs]), (xs[vs] = null), (Fa = xs[--vs]), (xs[vs] = null);
  for (; e === Ir; )
    (Ir = Dt[--zt]),
      (Dt[zt] = null),
      (Pn = Dt[--zt]),
      (Dt[zt] = null),
      (Mn = Dt[--zt]),
      (Dt[zt] = null);
}
var At = null,
  Rt = null,
  ke = !1,
  tn = null;
function r0(e, t) {
  var n = Wt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (At = e), (Rt = ar(t.firstChild)), !0)
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
          ? ((n = Ir !== null ? { id: Mn, overflow: Pn } : null),
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
function Lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ou(e) {
  if (ke) {
    var t = Rt;
    if (t) {
      var n = t;
      if (!Yp(e, t)) {
        if (Lu(e)) throw Error(U(418));
        t = ar(n.nextSibling);
        var r = At;
        t && Yp(e, t)
          ? r0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (At = e));
      }
    } else {
      if (Lu(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (At = e);
    }
  }
}
function Qp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function zi(e) {
  if (e !== At) return !1;
  if (!ke) return Qp(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ru(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (Lu(e)) throw (s0(), Error(U(418)));
    for (; t; ) r0(e, t), (t = ar(t.nextSibling));
  }
  if ((Qp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Rt = ar(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Rt = null;
    }
  } else Rt = At ? ar(e.stateNode.nextSibling) : null;
  return !0;
}
function s0() {
  for (var e = Rt; e; ) e = ar(e.nextSibling);
}
function Os() {
  (Rt = At = null), (ke = !1);
}
function tf(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
var qv = Dn.ReactCurrentBatchConfig;
function co(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = s.refs;
            a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function Vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xp(e) {
  var t = e._init;
  return t(e._payload);
}
function o0(e) {
  function t(h, x) {
    if (e) {
      var w = h.deletions;
      w === null ? ((h.deletions = [x]), (h.flags |= 16)) : w.push(x);
    }
  }
  function n(h, x) {
    if (!e) return null;
    for (; x !== null; ) t(h, x), (x = x.sibling);
    return null;
  }
  function r(h, x) {
    for (h = new Map(); x !== null; )
      x.key !== null ? h.set(x.key, x) : h.set(x.index, x), (x = x.sibling);
    return h;
  }
  function s(h, x) {
    return (h = dr(h, x)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, x, w) {
    return (
      (h.index = w),
      e
        ? ((w = h.alternate),
          w !== null
            ? ((w = w.index), w < x ? ((h.flags |= 2), x) : w)
            : ((h.flags |= 2), x))
        : ((h.flags |= 1048576), x)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, x, w, j) {
    return x === null || x.tag !== 6
      ? ((x = Fc(w, h.mode, j)), (x.return = h), x)
      : ((x = s(x, w)), (x.return = h), x);
  }
  function c(h, x, w, j) {
    var k = w.type;
    return k === fs
      ? f(h, x, w.props.children, j, w.key)
      : x !== null &&
        (x.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Zn &&
            Xp(k) === x.type))
      ? ((j = s(x, w.props)), (j.ref = co(h, x, w)), (j.return = h), j)
      : ((j = ga(w.type, w.key, w.props, null, h.mode, j)),
        (j.ref = co(h, x, w)),
        (j.return = h),
        j);
  }
  function u(h, x, w, j) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== w.containerInfo ||
      x.stateNode.implementation !== w.implementation
      ? ((x = Dc(w, h.mode, j)), (x.return = h), x)
      : ((x = s(x, w.children || [])), (x.return = h), x);
  }
  function f(h, x, w, j, k) {
    return x === null || x.tag !== 7
      ? ((x = Lr(w, h.mode, j, k)), (x.return = h), x)
      : ((x = s(x, w)), (x.return = h), x);
  }
  function d(h, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = Fc("" + x, h.mode, w)), (x.return = h), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Mi:
          return (
            (w = ga(x.type, x.key, x.props, null, h.mode, w)),
            (w.ref = co(h, null, x)),
            (w.return = h),
            w
          );
        case ds:
          return (x = Dc(x, h.mode, w)), (x.return = h), x;
        case Zn:
          var j = x._init;
          return d(h, j(x._payload), w);
      }
      if (yo(x) || so(x))
        return (x = Lr(x, h.mode, w, null)), (x.return = h), x;
      Vi(h, x);
    }
    return null;
  }
  function p(h, x, w, j) {
    var k = x !== null ? x.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return k !== null ? null : l(h, x, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Mi:
          return w.key === k ? c(h, x, w, j) : null;
        case ds:
          return w.key === k ? u(h, x, w, j) : null;
        case Zn:
          return (k = w._init), p(h, x, k(w._payload), j);
      }
      if (yo(w) || so(w)) return k !== null ? null : f(h, x, w, j, null);
      Vi(h, w);
    }
    return null;
  }
  function y(h, x, w, j, k) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (h = h.get(w) || null), l(x, h, "" + j, k);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Mi:
          return (h = h.get(j.key === null ? w : j.key) || null), c(x, h, j, k);
        case ds:
          return (h = h.get(j.key === null ? w : j.key) || null), u(x, h, j, k);
        case Zn:
          var b = j._init;
          return y(h, x, w, b(j._payload), k);
      }
      if (yo(j) || so(j)) return (h = h.get(w) || null), f(x, h, j, k, null);
      Vi(x, j);
    }
    return null;
  }
  function m(h, x, w, j) {
    for (
      var k = null, b = null, C = x, N = (x = 0), v = null;
      C !== null && N < w.length;
      N++
    ) {
      C.index > N ? ((v = C), (C = null)) : (v = C.sibling);
      var R = p(h, C, w[N], j);
      if (R === null) {
        C === null && (C = v);
        break;
      }
      e && C && R.alternate === null && t(h, C),
        (x = o(R, x, N)),
        b === null ? (k = R) : (b.sibling = R),
        (b = R),
        (C = v);
    }
    if (N === w.length) return n(h, C), ke && kr(h, N), k;
    if (C === null) {
      for (; N < w.length; N++)
        (C = d(h, w[N], j)),
          C !== null &&
            ((x = o(C, x, N)), b === null ? (k = C) : (b.sibling = C), (b = C));
      return ke && kr(h, N), k;
    }
    for (C = r(h, C); N < w.length; N++)
      (v = y(C, h, N, w[N], j)),
        v !== null &&
          (e && v.alternate !== null && C.delete(v.key === null ? N : v.key),
          (x = o(v, x, N)),
          b === null ? (k = v) : (b.sibling = v),
          (b = v));
    return (
      e &&
        C.forEach(function (M) {
          return t(h, M);
        }),
      ke && kr(h, N),
      k
    );
  }
  function g(h, x, w, j) {
    var k = so(w);
    if (typeof k != "function") throw Error(U(150));
    if (((w = k.call(w)), w == null)) throw Error(U(151));
    for (
      var b = (k = null), C = x, N = (x = 0), v = null, R = w.next();
      C !== null && !R.done;
      N++, R = w.next()
    ) {
      C.index > N ? ((v = C), (C = null)) : (v = C.sibling);
      var M = p(h, C, R.value, j);
      if (M === null) {
        C === null && (C = v);
        break;
      }
      e && C && M.alternate === null && t(h, C),
        (x = o(M, x, N)),
        b === null ? (k = M) : (b.sibling = M),
        (b = M),
        (C = v);
    }
    if (R.done) return n(h, C), ke && kr(h, N), k;
    if (C === null) {
      for (; !R.done; N++, R = w.next())
        (R = d(h, R.value, j)),
          R !== null &&
            ((x = o(R, x, N)), b === null ? (k = R) : (b.sibling = R), (b = R));
      return ke && kr(h, N), k;
    }
    for (C = r(h, C); !R.done; N++, R = w.next())
      (R = y(C, h, N, R.value, j)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? N : R.key),
          (x = o(R, x, N)),
          b === null ? (k = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        C.forEach(function (I) {
          return t(h, I);
        }),
      ke && kr(h, N),
      k
    );
  }
  function S(h, x, w, j) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === fs &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Mi:
          e: {
            for (var k = w.key, b = x; b !== null; ) {
              if (b.key === k) {
                if (((k = w.type), k === fs)) {
                  if (b.tag === 7) {
                    n(h, b.sibling),
                      (x = s(b, w.props.children)),
                      (x.return = h),
                      (h = x);
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Zn &&
                    Xp(k) === b.type)
                ) {
                  n(h, b.sibling),
                    (x = s(b, w.props)),
                    (x.ref = co(h, b, w)),
                    (x.return = h),
                    (h = x);
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            w.type === fs
              ? ((x = Lr(w.props.children, h.mode, j, w.key)),
                (x.return = h),
                (h = x))
              : ((j = ga(w.type, w.key, w.props, null, h.mode, j)),
                (j.ref = co(h, x, w)),
                (j.return = h),
                (h = j));
          }
          return a(h);
        case ds:
          e: {
            for (b = w.key; x !== null; ) {
              if (x.key === b)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === w.containerInfo &&
                  x.stateNode.implementation === w.implementation
                ) {
                  n(h, x.sibling),
                    (x = s(x, w.children || [])),
                    (x.return = h),
                    (h = x);
                  break e;
                } else {
                  n(h, x);
                  break;
                }
              else t(h, x);
              x = x.sibling;
            }
            (x = Dc(w, h.mode, j)), (x.return = h), (h = x);
          }
          return a(h);
        case Zn:
          return (b = w._init), S(h, x, b(w._payload), j);
      }
      if (yo(w)) return m(h, x, w, j);
      if (so(w)) return g(h, x, w, j);
      Vi(h, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        x !== null && x.tag === 6
          ? (n(h, x.sibling), (x = s(x, w)), (x.return = h), (h = x))
          : (n(h, x), (x = Fc(w, h.mode, j)), (x.return = h), (h = x)),
        a(h))
      : n(h, x);
  }
  return S;
}
var Bs = o0(!0),
  i0 = o0(!1),
  Da = wr(null),
  za = null,
  ws = null,
  nf = null;
function rf() {
  nf = ws = za = null;
}
function sf(e) {
  var t = Da.current;
  Se(Da), (e._currentValue = t);
}
function Bu(e, t, n) {
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
function Ts(e, t) {
  (za = e),
    (nf = ws = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Gt(e) {
  var t = e._currentValue;
  if (nf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ws === null)) {
      if (za === null) throw Error(U(308));
      (ws = e), (za.dependencies = { lanes: 0, firstContext: e });
    } else ws = ws.next = e;
  return t;
}
var Tr = null;
function of(e) {
  Tr === null ? (Tr = [e]) : Tr.push(e);
}
function a0(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), of(t)) : ((n.next = s.next), (s.next = n)),
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
var Yn = !1;
function af(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function l0(e, t) {
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
function lr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      In(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), of(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    In(e, n)
  );
}
function ua(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hd(e, n);
  }
}
function Jp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (s = o = a) : (o = o.next = a), (n = n.next);
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
function Va(e, t, n, r) {
  var s = e.updateQueue;
  Yn = !1;
  var o = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), a === null ? (o = u) : (a.next = u), (a = c);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = c)));
  }
  if (o !== null) {
    var d = s.baseState;
    (a = 0), (f = u = c = null), (l = o);
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
          var m = e,
            g = l;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                d = m.call(y, d, p);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (p = typeof m == "function" ? m.call(y, d, p) : m),
                p == null)
              )
                break e;
              d = _e({}, d, p);
              break e;
            case 2:
              Yn = !0;
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
          (a |= p);
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
      do (a |= s.lane), (s = s.next);
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    ($r |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function eh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(U(191, s));
        s.call(r);
      }
    }
}
var ci = {},
  xn = wr(ci),
  Vo = wr(ci),
  Wo = wr(ci);
function _r(e) {
  if (e === ci) throw Error(U(174));
  return e;
}
function lf(e, t) {
  switch ((xe(Wo, t), xe(Vo, e), xe(xn, ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gu(t, e));
  }
  Se(xn), xe(xn, t);
}
function Is() {
  Se(xn), Se(Vo), Se(Wo);
}
function c0(e) {
  _r(Wo.current);
  var t = _r(xn.current),
    n = gu(t, e.type);
  t !== n && (xe(Vo, e), xe(xn, n));
}
function cf(e) {
  Vo.current === e && (Se(xn), Se(Vo));
}
var Ee = wr(0);
function Wa(e) {
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
var Lc = [];
function uf() {
  for (var e = 0; e < Lc.length; e++)
    Lc[e]._workInProgressVersionPrimary = null;
  Lc.length = 0;
}
var da = Dn.ReactCurrentDispatcher,
  Oc = Dn.ReactCurrentBatchConfig,
  Ur = 0,
  Te = null,
  Ve = null,
  qe = null,
  Ha = !1,
  Eo = !1,
  Ho = 0,
  Gv = 0;
function et() {
  throw Error(U(321));
}
function df(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function ff(e, t, n, r, s, o) {
  if (
    ((Ur = o),
    (Te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (da.current = e === null || e.memoizedState === null ? Qv : Xv),
    (e = n(r, s)),
    Eo)
  ) {
    o = 0;
    do {
      if (((Eo = !1), (Ho = 0), 25 <= o)) throw Error(U(301));
      (o += 1),
        (qe = Ve = null),
        (t.updateQueue = null),
        (da.current = Jv),
        (e = n(r, s));
    } while (Eo);
  }
  if (
    ((da.current = qa),
    (t = Ve !== null && Ve.next !== null),
    (Ur = 0),
    (qe = Ve = Te = null),
    (Ha = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function pf() {
  var e = Ho !== 0;
  return (Ho = 0), e;
}
function fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return qe === null ? (Te.memoizedState = qe = e) : (qe = qe.next = e), qe;
}
function Kt() {
  if (Ve === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var t = qe === null ? Te.memoizedState : qe.next;
  if (t !== null) (qe = t), (Ve = e);
  else {
    if (e === null) throw Error(U(310));
    (Ve = e),
      (e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null,
      }),
      qe === null ? (Te.memoizedState = qe = e) : (qe = qe.next = e);
  }
  return qe;
}
function qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bc(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = Ve,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var a = s.next;
      (s.next = o.next), (o.next = a);
    }
    (r.baseQueue = s = o), (n.pending = null);
  }
  if (s !== null) {
    (o = s.next), (r = r.baseState);
    var l = (a = null),
      c = null,
      u = o;
    do {
      var f = u.lane;
      if ((Ur & f) === f)
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
        c === null ? ((l = c = d), (a = r)) : (c = c.next = d),
          (Te.lanes |= f),
          ($r |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    c === null ? (a = r) : (c.next = l),
      on(r, t.memoizedState) || (yt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (Te.lanes |= o), ($r |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ic(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== s);
    on(o, t.memoizedState) || (yt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function u0() {}
function d0(e, t) {
  var n = Te,
    r = Kt(),
    s = t(),
    o = !on(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (yt = !0)),
    (r = r.queue),
    hf(h0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (qe !== null && qe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Go(9, p0.bind(null, n, r, s, t), void 0, null),
      Ke === null)
    )
      throw Error(U(349));
    Ur & 30 || f0(n, t, s);
  }
  return s;
}
function f0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function p0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), m0(t) && g0(e);
}
function h0(e, t, n) {
  return n(function () {
    m0(t) && g0(e);
  });
}
function m0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function g0(e) {
  var t = In(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function th(e) {
  var t = fn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yv.bind(null, Te, e)),
    [t.memoizedState, e]
  );
}
function Go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function y0() {
  return Kt().memoizedState;
}
function fa(e, t, n, r) {
  var s = fn();
  (Te.flags |= e),
    (s.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var s = Kt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ve !== null) {
    var a = Ve.memoizedState;
    if (((o = a.destroy), r !== null && df(r, a.deps))) {
      s.memoizedState = Go(t, n, o, r);
      return;
    }
  }
  (Te.flags |= e), (s.memoizedState = Go(1 | t, n, o, r));
}
function nh(e, t) {
  return fa(8390656, 8, e, t);
}
function hf(e, t) {
  return wl(2048, 8, e, t);
}
function x0(e, t) {
  return wl(4, 2, e, t);
}
function v0(e, t) {
  return wl(4, 4, e, t);
}
function w0(e, t) {
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
function S0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, w0.bind(null, t, e), n)
  );
}
function mf() {}
function C0(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function b0(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function j0(e, t, n) {
  return Ur & 21
    ? (on(n, t) || ((n = _1()), (Te.lanes |= n), ($r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function Kv(e, t) {
  var n = de;
  (de = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oc.transition;
  Oc.transition = {};
  try {
    e(!1), t();
  } finally {
    (de = n), (Oc.transition = r);
  }
}
function k0() {
  return Kt().memoizedState;
}
function Zv(e, t, n) {
  var r = ur(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    N0(e))
  )
    E0(t, n);
  else if (((n = a0(e, t, n, r)), n !== null)) {
    var s = ct();
    rn(n, e, r, s), T0(n, t, r);
  }
}
function Yv(e, t, n) {
  var r = ur(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (N0(e)) E0(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), on(l, a))) {
          var c = t.interleaved;
          c === null
            ? ((s.next = s), of(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = a0(e, t, s, r)),
      n !== null && ((s = ct()), rn(n, e, r, s), T0(n, t, r));
  }
}
function N0(e) {
  var t = e.alternate;
  return e === Te || (t !== null && t === Te);
}
function E0(e, t) {
  Eo = Ha = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function T0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hd(e, n);
  }
}
var qa = {
    readContext: Gt,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useInsertionEffect: et,
    useLayoutEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useMutableSource: et,
    useSyncExternalStore: et,
    useId: et,
    unstable_isNewReconciler: !1,
  },
  Qv = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gt,
    useEffect: nh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fa(4194308, 4, w0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fa(4, 2, e, t);
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
        (e = e.dispatch = Zv.bind(null, Te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: th,
    useDebugValue: mf,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e);
    },
    useTransition: function () {
      var e = th(!1),
        t = e[0];
      return (e = Kv.bind(null, e[1])), (fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Te,
        s = fn();
      if (ke) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), Ke === null)) throw Error(U(349));
        Ur & 30 || f0(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        nh(h0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Go(9, p0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fn(),
        t = Ke.identifierPrefix;
      if (ke) {
        var n = Pn,
          r = Mn;
        (n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ho++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xv = {
    readContext: Gt,
    useCallback: C0,
    useContext: Gt,
    useEffect: hf,
    useImperativeHandle: S0,
    useInsertionEffect: x0,
    useLayoutEffect: v0,
    useMemo: b0,
    useReducer: Bc,
    useRef: y0,
    useState: function () {
      return Bc(qo);
    },
    useDebugValue: mf,
    useDeferredValue: function (e) {
      var t = Kt();
      return j0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Bc(qo)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: u0,
    useSyncExternalStore: d0,
    useId: k0,
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: Gt,
    useCallback: C0,
    useContext: Gt,
    useEffect: hf,
    useImperativeHandle: S0,
    useInsertionEffect: x0,
    useLayoutEffect: v0,
    useMemo: b0,
    useReducer: Ic,
    useRef: y0,
    useState: function () {
      return Ic(qo);
    },
    useDebugValue: mf,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ve === null ? (t.memoizedState = e) : j0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ic(qo)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: u0,
    useSyncExternalStore: d0,
    useId: k0,
    unstable_isNewReconciler: !1,
  };
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Iu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ct(),
      s = ur(e),
      o = Ln(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = lr(e, o, s)),
      t !== null && (rn(t, e, s, r), ua(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ct(),
      s = ur(e),
      o = Ln(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = lr(e, o, s)),
      t !== null && (rn(t, e, s, r), ua(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ct(),
      r = ur(e),
      s = Ln(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = lr(e, s, r)),
      t !== null && (rn(t, e, r, n), ua(t, e, r));
  },
};
function rh(e, t, n, r, s, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$o(n, r) || !$o(s, o)
      : !0
  );
}
function _0(e, t, n) {
  var r = !1,
    s = mr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Gt(o))
      : ((s = vt(t) ? Br : st.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ls(e, s) : mr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function sh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function Uu(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), af(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = Gt(o))
    : ((o = vt(t) ? Br : st.current), (s.context = Ls(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Iu(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Sl.enqueueReplaceState(s, s.state, null),
      Va(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Us(e, t) {
  try {
    var n = "",
      r = t;
    do (n += E2(r)), (r = r.return);
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
function Uc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $u(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var e3 = typeof WeakMap == "function" ? WeakMap : Map;
function R0(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ka || ((Ka = !0), (Zu = r)), $u(e, t);
    }),
    n
  );
}
function A0(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        $u(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        $u(e, t),
          typeof r != "function" &&
            (cr === null ? (cr = new Set([this])) : cr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function oh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new e3();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = h3.bind(null, e, t, n)), t.then(e, e));
}
function ih(e) {
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
function ah(e, t, n, r, s) {
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
              : ((t = Ln(-1, 1)), (t.tag = 2), lr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var t3 = Dn.ReactCurrentOwner,
  yt = !1;
function it(e, t, n, r) {
  t.child = e === null ? i0(t, null, n, r) : Bs(t, e.child, n, r);
}
function lh(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    Ts(t, s),
    (r = ff(e, t, n, r, o, s)),
    (n = pf()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Un(e, t, s))
      : (ke && n && Jd(t), (t.flags |= 1), it(e, t, r, s), t.child)
  );
}
function ch(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !bf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), M0(e, t, o, r, s))
      : ((e = ga(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $o), n(a, r) && e.ref === t.ref)
    )
      return Un(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = dr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function M0(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($o(o, r) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), Un(e, t, s);
  }
  return Fu(e, t, n, r, s);
}
function P0(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(Cs, Tt),
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
          xe(Cs, Tt),
          (Tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        xe(Cs, Tt),
        (Tt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      xe(Cs, Tt),
      (Tt |= r);
  return it(e, t, s, n), t.child;
}
function L0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fu(e, t, n, r, s) {
  var o = vt(n) ? Br : st.current;
  return (
    (o = Ls(t, o)),
    Ts(t, s),
    (n = ff(e, t, n, r, o, s)),
    (r = pf()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Un(e, t, s))
      : (ke && r && Jd(t), (t.flags |= 1), it(e, t, n, s), t.child)
  );
}
function uh(e, t, n, r, s) {
  if (vt(n)) {
    var o = !0;
    Ua(t);
  } else o = !1;
  if ((Ts(t, s), t.stateNode === null))
    pa(e, t), _0(t, n, r), Uu(t, n, r, s), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Gt(u))
      : ((u = vt(n) ? Br : st.current), (u = Ls(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && sh(t, a, r, u)),
      (Yn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Va(t, r, a, s),
      (c = t.memoizedState),
      l !== r || p !== c || xt.current || Yn
        ? (typeof f == "function" && (Iu(t, n, f, r), (c = t.memoizedState)),
          (l = Yn || rh(t, n, l, r, p, c, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      l0(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xt(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Gt(c))
        : ((c = vt(n) ? Br : st.current), (c = Ls(t, c)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || p !== c) && sh(t, a, r, c)),
      (Yn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Va(t, r, a, s);
    var m = t.memoizedState;
    l !== d || p !== m || xt.current || Yn
      ? (typeof y == "function" && (Iu(t, n, y, r), (m = t.memoizedState)),
        (u = Yn || rh(t, n, u, r, p, m, c) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, m, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, m, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (a.props = r),
        (a.state = m),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Du(e, t, n, r, o, s);
}
function Du(e, t, n, r, s, o) {
  L0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return s && Zp(t, n, !1), Un(e, t, o);
  (r = t.stateNode), (t3.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Bs(t, e.child, null, o)), (t.child = Bs(t, null, l, o)))
      : it(e, t, l, o),
    (t.memoizedState = r.state),
    s && Zp(t, n, !0),
    t.child
  );
}
function O0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kp(e, t.context, !1),
    lf(e, t.containerInfo);
}
function dh(e, t, n, r, s) {
  return Os(), tf(s), (t.flags |= 256), it(e, t, n, r), t.child;
}
var zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function B0(e, t, n) {
  var r = t.pendingProps,
    s = Ee.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    xe(Ee, s & 1),
    e === null)
  )
    return (
      Ou(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = jl(a, r, 0, null)),
              (e = Lr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Vu(n)),
              (t.memoizedState = zu),
              e)
            : gf(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return n3(e, t, a, r, l, s, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (s = e.child), (l = s.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = dr(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (o = dr(l, o)) : ((o = Lr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Vu(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dr(o, { mode: "visible", children: r.children })),
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
function gf(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wi(e, t, n, r) {
  return (
    r !== null && tf(r),
    Bs(t, e.child, null, n),
    (e = gf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function n3(e, t, n, r, s, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Uc(Error(U(422)))), Wi(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = jl({ mode: "visible", children: r.children }, s, 0, null)),
        (o = Lr(o, s, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Bs(t, e.child, null, a),
        (t.child.memoizedState = Vu(a)),
        (t.memoizedState = zu),
        o);
  if (!(t.mode & 1)) return Wi(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(U(419))), (r = Uc(o, r, void 0)), Wi(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), yt || l)) {
    if (((r = Ke), r !== null)) {
      switch (a & -a) {
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
      (s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), In(e, s), rn(r, e, s, -1));
    }
    return Cf(), (r = Uc(Error(U(421)))), Wi(e, t, a, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = m3.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Rt = ar(s.nextSibling)),
      (At = t),
      (ke = !0),
      (tn = null),
      e !== null &&
        ((Dt[zt++] = Mn),
        (Dt[zt++] = Pn),
        (Dt[zt++] = Ir),
        (Mn = e.id),
        (Pn = e.overflow),
        (Ir = t)),
      (t = gf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bu(e.return, t, n);
}
function $c(e, t, n, r, s) {
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
function I0(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((it(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fh(e, n, t);
        else if (e.tag === 19) fh(e, n, t);
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
  if ((xe(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Wa(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          $c(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Wa(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        $c(t, !0, n, null, o);
        break;
      case "together":
        $c(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function r3(e, t, n) {
  switch (t.tag) {
    case 3:
      O0(t), Os();
      break;
    case 5:
      c0(t);
      break;
    case 1:
      vt(t.type) && Ua(t);
      break;
    case 4:
      lf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      xe(Da, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (xe(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? B0(e, t, n)
          : (xe(Ee, Ee.current & 1),
            (e = Un(e, t, n)),
            e !== null ? e.sibling : null);
      xe(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return I0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        xe(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), P0(e, t, n);
  }
  return Un(e, t, n);
}
var U0, Wu, $0, F0;
U0 = function (e, t) {
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
Wu = function () {};
$0 = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), _r(xn.current);
    var o = null;
    switch (n) {
      case "input":
        (s = fu(e, s)), (r = fu(e, r)), (o = []);
        break;
      case "select":
        (s = _e({}, s, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = mu(e, s)), (r = mu(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ba);
    }
    yu(n, r);
    var a;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mo.hasOwnProperty(u)
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
            for (a in l)
              !l.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                l[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
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
              (Mo.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && we("scroll", e),
                  o || l === c || (o = []))
                : (o = o || []).push(u, c));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
F0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function uo(e, t) {
  if (!ke)
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
function tt(e) {
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
function s3(e, t, n) {
  var r = t.pendingProps;
  switch ((ef(t), t.tag)) {
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
      return tt(t), null;
    case 1:
      return vt(t.type) && Ia(), tt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Is(),
        Se(xt),
        Se(st),
        uf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (Xu(tn), (tn = null)))),
        Wu(e, t),
        tt(t),
        null
      );
    case 5:
      cf(t);
      var s = _r(Wo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $0(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return tt(t), null;
        }
        if (((e = _r(xn.current)), zi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[mn] = t), (r[zo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < vo.length; s++) we(vo[s], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we("error", r), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              Sp(r, o), we("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                we("invalid", r);
              break;
            case "textarea":
              bp(r, o), we("invalid", r);
          }
          yu(n, o), (s = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (s = ["children", "" + l]))
                : Mo.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  we("scroll", r);
            }
          switch (n) {
            case "input":
              Pi(r), Cp(r, o, !0);
              break;
            case "textarea":
              Pi(r), jp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ba);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = h1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[mn] = t),
            (e[zo] = r),
            U0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = xu(n, r)), n)) {
              case "dialog":
                we("cancel", e), we("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < vo.length; s++) we(vo[s], e);
                s = r;
                break;
              case "source":
                we("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                we("error", e), we("load", e), (s = r);
                break;
              case "details":
                we("toggle", e), (s = r);
                break;
              case "input":
                Sp(e, r), (s = fu(e, r)), we("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = _e({}, r, { value: void 0 })),
                  we("invalid", e);
                break;
              case "textarea":
                bp(e, r), (s = mu(e, r)), we("invalid", e);
                break;
              default:
                s = r;
            }
            yu(n, s), (l = s);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var c = l[o];
                o === "style"
                  ? y1(e, c)
                  : o === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && m1(e, c))
                  : o === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Po(e, c)
                    : typeof c == "number" && Po(e, "" + c)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Mo.hasOwnProperty(o)
                      ? c != null && o === "onScroll" && we("scroll", e)
                      : c != null && $d(e, o, c, a));
              }
            switch (n) {
              case "input":
                Pi(e), Cp(e, r, !1);
                break;
              case "textarea":
                Pi(e), jp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? js(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      js(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Ba);
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
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null) F0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = _r(Wo.current)), _r(xn.current), zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (o = r.nodeValue !== n) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return tt(t), null;
    case 13:
      if (
        (Se(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && Rt !== null && t.mode & 1 && !(t.flags & 128))
          s0(), Os(), (t.flags |= 98560), (o = !1);
        else if (((o = zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(U(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(U(317));
            o[mn] = t;
          } else
            Os(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          tt(t), (o = !1);
        } else tn !== null && (Xu(tn), (tn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? We === 0 && (We = 3) : Cf())),
          t.updateQueue !== null && (t.flags |= 4),
          tt(t),
          null);
    case 4:
      return (
        Is(), Wu(e, t), e === null && Fo(t.stateNode.containerInfo), tt(t), null
      );
    case 10:
      return sf(t.type._context), tt(t), null;
    case 17:
      return vt(t.type) && Ia(), tt(t), null;
    case 19:
      if ((Se(Ee), (o = t.memoizedState), o === null)) return tt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) uo(o, !1);
        else {
          if (We !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Wa(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    uo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return xe(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Oe() > $s &&
            ((t.flags |= 128), (r = !0), uo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Wa(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              uo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !ke)
            )
              return tt(t), null;
          } else
            2 * Oe() - o.renderingStartTime > $s &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), uo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Oe()),
          (t.sibling = null),
          (n = Ee.current),
          xe(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (tt(t), null);
    case 22:
    case 23:
      return (
        Sf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Tt & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : tt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function o3(e, t) {
  switch ((ef(t), t.tag)) {
    case 1:
      return (
        vt(t.type) && Ia(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Is(),
        Se(xt),
        Se(st),
        uf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return cf(t), null;
    case 13:
      if (
        (Se(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        Os();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Se(Ee), null;
    case 4:
      return Is(), null;
    case 10:
      return sf(t.type._context), null;
    case 22:
    case 23:
      return Sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hi = !1,
  rt = !1,
  i3 = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Ss(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else n.current = null;
}
function Hu(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var ph = !1;
function a3(e, t) {
  if (((Tu = Pa), (e = H1()), Xd(e))) {
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
          var a = 0,
            l = -1,
            c = -1,
            u = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (s !== 0 && d.nodeType !== 3) || (l = a + s),
                d !== o || (r !== 0 && d.nodeType !== 3) || (c = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (p = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === s && (l = a),
                p === o && ++f === r && (c = a),
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
  for (_u = { focusedElem: e, selectionRange: n }, Pa = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    S = m.memoizedState,
                    h = t.stateNode,
                    x = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Xt(t.type, g),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = x;
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
                throw Error(U(163));
            }
        } catch (j) {
          Me(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (m = ph), (ph = !1), m;
}
function To(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && Hu(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Cl(e, t) {
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
function qu(e) {
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
function D0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), D0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[zo], delete t[Mu], delete t[Vv], delete t[Wv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function z0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || z0(e.return)) return null;
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
function Gu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ba));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gu(e, t, n), e = e.sibling; e !== null; ) Gu(e, t, n), (e = e.sibling);
}
function Ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), (e = e.sibling);
}
var Ze = null,
  en = !1;
function Vn(e, t, n) {
  for (n = n.child; n !== null; ) V0(e, t, n), (n = n.sibling);
}
function V0(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == "function")
    try {
      yn.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      rt || Ss(n, t);
    case 6:
      var r = Ze,
        s = en;
      (Ze = null),
        Vn(e, t, n),
        (Ze = r),
        (en = s),
        Ze !== null &&
          (en
            ? ((e = Ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ze.removeChild(n.stateNode));
      break;
    case 18:
      Ze !== null &&
        (en
          ? ((e = Ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? Mc(e.parentNode, n)
              : e.nodeType === 1 && Mc(e, n),
            Io(e))
          : Mc(Ze, n.stateNode));
      break;
    case 4:
      (r = Ze),
        (s = en),
        (Ze = n.stateNode.containerInfo),
        (en = !0),
        Vn(e, t, n),
        (Ze = r),
        (en = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !rt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Hu(n, t, a),
            (s = s.next);
        } while (s !== r);
      }
      Vn(e, t, n);
      break;
    case 1:
      if (
        !rt &&
        (Ss(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Me(n, t, l);
        }
      Vn(e, t, n);
      break;
    case 21:
      Vn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((rt = (r = rt) || n.memoizedState !== null), Vn(e, t, n), (rt = r))
        : Vn(e, t, n);
      break;
    default:
      Vn(e, t, n);
  }
}
function mh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new i3()),
      t.forEach(function (r) {
        var s = g3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ze = l.stateNode), (en = !1);
              break e;
            case 3:
              (Ze = l.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (Ze = l.stateNode.containerInfo), (en = !0);
              break e;
          }
          l = l.return;
        }
        if (Ze === null) throw Error(U(160));
        V0(o, a, s), (Ze = null), (en = !1);
        var c = s.alternate;
        c !== null && (c.return = null), (s.return = null);
      } catch (u) {
        Me(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) W0(t, e), (t = t.sibling);
}
function W0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), un(e), r & 4)) {
        try {
          To(3, e, e.return), Cl(3, e);
        } catch (g) {
          Me(e, e.return, g);
        }
        try {
          To(5, e, e.return);
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      break;
    case 1:
      Qt(t, e), un(e), r & 512 && n !== null && Ss(n, n.return);
      break;
    case 5:
      if (
        (Qt(t, e),
        un(e),
        r & 512 && n !== null && Ss(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Po(s, "");
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && f1(s, o),
              xu(l, a);
            var u = xu(l, o);
            for (a = 0; a < c.length; a += 2) {
              var f = c[a],
                d = c[a + 1];
              f === "style"
                ? y1(s, d)
                : f === "dangerouslySetInnerHTML"
                ? m1(s, d)
                : f === "children"
                ? Po(s, d)
                : $d(s, f, d, u);
            }
            switch (l) {
              case "input":
                pu(s, o);
                break;
              case "textarea":
                p1(s, o);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? js(s, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? js(s, !!o.multiple, o.defaultValue, !0)
                      : js(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[zo] = o;
          } catch (g) {
            Me(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), un(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Io(t.containerInfo);
        } catch (g) {
          Me(e, e.return, g);
        }
      break;
    case 4:
      Qt(t, e), un(e);
      break;
    case 13:
      Qt(t, e),
        un(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (vf = Oe())),
        r & 4 && mh(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((rt = (u = rt) || f), Qt(t, e), (rt = u)) : Qt(t, e),
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
                  To(4, p, p.return);
                  break;
                case 1:
                  Ss(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      Me(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ss(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    yh(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (W = y)) : yh(d);
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
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = g1("display", a)));
              } catch (g) {
                Me(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Me(e, e.return, g);
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
      Qt(t, e), un(e), r & 4 && mh(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), un(e);
  }
}
function un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (z0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Po(s, ""), (r.flags &= -33));
          var o = hh(e);
          Ku(e, o, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = hh(e);
          Gu(e, l, a);
          break;
        default:
          throw Error(U(161));
      }
    } catch (c) {
      Me(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l3(e, t, n) {
  (W = e), H0(e);
}
function H0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var s = W,
      o = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || Hi;
      if (!a) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || rt;
        l = Hi;
        var u = rt;
        if (((Hi = a), (rt = c) && !u))
          for (W = s; W !== null; )
            (a = W),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? xh(s)
                : c !== null
                ? ((c.return = a), (W = c))
                : xh(s);
        for (; o !== null; ) (W = o), H0(o), (o = o.sibling);
        (W = s), (Hi = l), (rt = u);
      }
      gh(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (W = o)) : gh(e);
  }
}
function gh(e) {
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
              rt || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
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
              o !== null && eh(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                eh(t, a, n);
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
                    d !== null && Io(d);
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
              throw Error(U(163));
          }
        rt || (t.flags & 512 && qu(t));
      } catch (p) {
        Me(t, t.return, p);
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
function yh(e) {
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
function xh(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (c) {
            Me(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Me(t, s, c);
            }
          }
          var o = t.return;
          try {
            qu(t);
          } catch (c) {
            Me(t, o, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            qu(t);
          } catch (c) {
            Me(t, a, c);
          }
      }
    } catch (c) {
      Me(t, t.return, c);
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
var c3 = Math.ceil,
  Ga = Dn.ReactCurrentDispatcher,
  yf = Dn.ReactCurrentOwner,
  Ht = Dn.ReactCurrentBatchConfig,
  ne = 0,
  Ke = null,
  Fe = null,
  Qe = 0,
  Tt = 0,
  Cs = wr(0),
  We = 0,
  Ko = null,
  $r = 0,
  bl = 0,
  xf = 0,
  _o = null,
  gt = null,
  vf = 0,
  $s = 1 / 0,
  Tn = null,
  Ka = !1,
  Zu = null,
  cr = null,
  qi = !1,
  nr = null,
  Za = 0,
  Ro = 0,
  Yu = null,
  ha = -1,
  ma = 0;
function ct() {
  return ne & 6 ? Oe() : ha !== -1 ? ha : (ha = Oe());
}
function ur(e) {
  return e.mode & 1
    ? ne & 2 && Qe !== 0
      ? Qe & -Qe
      : qv.transition !== null
      ? (ma === 0 && (ma = _1()), ma)
      : ((e = de),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : B1(e.type))),
        e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < Ro) throw ((Ro = 0), (Yu = null), Error(U(185)));
  ii(e, n, r),
    (!(ne & 2) || e !== Ke) &&
      (e === Ke && (!(ne & 2) && (bl |= n), We === 4 && Jn(e, Qe)),
      wt(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && (($s = Oe() + 500), vl && Sr()));
}
function wt(e, t) {
  var n = e.callbackNode;
  q2(e, t);
  var r = Ma(e, e === Ke ? Qe : 0);
  if (r === 0)
    n !== null && Ep(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ep(n), t === 1))
      e.tag === 0 ? Hv(vh.bind(null, e)) : t0(vh.bind(null, e)),
        Dv(function () {
          !(ne & 6) && Sr();
        }),
        (n = null);
    else {
      switch (R1(r)) {
        case 1:
          n = Wd;
          break;
        case 4:
          n = E1;
          break;
        case 16:
          n = Aa;
          break;
        case 536870912:
          n = T1;
          break;
        default:
          n = Aa;
      }
      n = J0(n, q0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function q0(e, t) {
  if (((ha = -1), (ma = 0), ne & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (_s() && e.callbackNode !== n) return null;
  var r = Ma(e, e === Ke ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ya(e, r);
  else {
    t = r;
    var s = ne;
    ne |= 2;
    var o = K0();
    (Ke !== e || Qe !== t) && ((Tn = null), ($s = Oe() + 500), Pr(e, t));
    do
      try {
        f3();
        break;
      } catch (l) {
        G0(e, l);
      }
    while (!0);
    rf(),
      (Ga.current = o),
      (ne = s),
      Fe !== null ? (t = 0) : ((Ke = null), (Qe = 0), (t = We));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = bu(e)), s !== 0 && ((r = s), (t = Qu(e, s)))), t === 1)
    )
      throw ((n = Ko), Pr(e, 0), Jn(e, r), wt(e, Oe()), n);
    if (t === 6) Jn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !u3(s) &&
          ((t = Ya(e, r)),
          t === 2 && ((o = bu(e)), o !== 0 && ((r = o), (t = Qu(e, o)))),
          t === 1))
      )
        throw ((n = Ko), Pr(e, 0), Jn(e, r), wt(e, Oe()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Nr(e, gt, Tn);
          break;
        case 3:
          if (
            (Jn(e, r), (r & 130023424) === r && ((t = vf + 500 - Oe()), 10 < t))
          ) {
            if (Ma(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              ct(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Au(Nr.bind(null, e, gt, Tn), t);
            break;
          }
          Nr(e, gt, Tn);
          break;
        case 4:
          if ((Jn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - nn(r);
            (o = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~o);
          }
          if (
            ((r = s),
            (r = Oe() - r),
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
                : 1960 * c3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Au(Nr.bind(null, e, gt, Tn), r);
            break;
          }
          Nr(e, gt, Tn);
          break;
        case 5:
          Nr(e, gt, Tn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return wt(e, Oe()), e.callbackNode === n ? q0.bind(null, e) : null;
}
function Qu(e, t) {
  var n = _o;
  return (
    e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256),
    (e = Ya(e, t)),
    e !== 2 && ((t = gt), (gt = n), t !== null && Xu(t)),
    e
  );
}
function Xu(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e);
}
function u3(e) {
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
function Jn(e, t) {
  for (
    t &= ~xf,
      t &= ~bl,
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
function vh(e) {
  if (ne & 6) throw Error(U(327));
  _s();
  var t = Ma(e, 0);
  if (!(t & 1)) return wt(e, Oe()), null;
  var n = Ya(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bu(e);
    r !== 0 && ((t = r), (n = Qu(e, r)));
  }
  if (n === 1) throw ((n = Ko), Pr(e, 0), Jn(e, t), wt(e, Oe()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nr(e, gt, Tn),
    wt(e, Oe()),
    null
  );
}
function wf(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && (($s = Oe() + 500), vl && Sr());
  }
}
function Fr(e) {
  nr !== null && nr.tag === 0 && !(ne & 6) && _s();
  var t = ne;
  ne |= 1;
  var n = Ht.transition,
    r = de;
  try {
    if (((Ht.transition = null), (de = 1), e)) return e();
  } finally {
    (de = r), (Ht.transition = n), (ne = t), !(ne & 6) && Sr();
  }
}
function Sf() {
  (Tt = Cs.current), Se(Cs);
}
function Pr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fv(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((ef(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ia();
          break;
        case 3:
          Is(), Se(xt), Se(st), uf();
          break;
        case 5:
          cf(r);
          break;
        case 4:
          Is();
          break;
        case 13:
          Se(Ee);
          break;
        case 19:
          Se(Ee);
          break;
        case 10:
          sf(r.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      n = n.return;
    }
  if (
    ((Ke = e),
    (Fe = e = dr(e.current, null)),
    (Qe = Tt = t),
    (We = 0),
    (Ko = null),
    (xf = bl = $r = 0),
    (gt = _o = null),
    Tr !== null)
  ) {
    for (t = 0; t < Tr.length; t++)
      if (((n = Tr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = s), (r.next = a);
        }
        n.pending = r;
      }
    Tr = null;
  }
  return e;
}
function G0(e, t) {
  do {
    var n = Fe;
    try {
      if ((rf(), (da.current = qa), Ha)) {
        for (var r = Te.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Ha = !1;
      }
      if (
        ((Ur = 0),
        (qe = Ve = Te = null),
        (Eo = !1),
        (Ho = 0),
        (yf.current = null),
        n === null || n.return === null)
      ) {
        (We = 1), (Ko = t), (Fe = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
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
          var y = ih(a);
          if (y !== null) {
            (y.flags &= -257),
              ah(y, a, l, o, t),
              y.mode & 1 && oh(o, u, t),
              (t = y),
              (c = u);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(c), (t.updateQueue = g);
            } else m.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              oh(o, u, t), Cf();
              break e;
            }
            c = Error(U(426));
          }
        } else if (ke && l.mode & 1) {
          var S = ih(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ah(S, a, l, o, t),
              tf(Us(c, l));
            break e;
          }
        }
        (o = c = Us(c, l)),
          We !== 4 && (We = 2),
          _o === null ? (_o = [o]) : _o.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = R0(o, c, t);
              Jp(o, h);
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
                    (cr === null || !cr.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var j = A0(o, l, t);
                Jp(o, j);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Y0(n);
    } catch (k) {
      (t = k), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function K0() {
  var e = Ga.current;
  return (Ga.current = qa), e === null ? qa : e;
}
function Cf() {
  (We === 0 || We === 3 || We === 2) && (We = 4),
    Ke === null || (!($r & 268435455) && !(bl & 268435455)) || Jn(Ke, Qe);
}
function Ya(e, t) {
  var n = ne;
  ne |= 2;
  var r = K0();
  (Ke !== e || Qe !== t) && ((Tn = null), Pr(e, t));
  do
    try {
      d3();
      break;
    } catch (s) {
      G0(e, s);
    }
  while (!0);
  if ((rf(), (ne = n), (Ga.current = r), Fe !== null)) throw Error(U(261));
  return (Ke = null), (Qe = 0), We;
}
function d3() {
  for (; Fe !== null; ) Z0(Fe);
}
function f3() {
  for (; Fe !== null && !I2(); ) Z0(Fe);
}
function Z0(e) {
  var t = X0(e.alternate, e, Tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Y0(e) : (Fe = t),
    (yf.current = null);
}
function Y0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o3(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (We = 6), (Fe = null);
        return;
      }
    } else if (((n = s3(n, t, Tt)), n !== null)) {
      Fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  We === 0 && (We = 5);
}
function Nr(e, t, n) {
  var r = de,
    s = Ht.transition;
  try {
    (Ht.transition = null), (de = 1), p3(e, t, n, r);
  } finally {
    (Ht.transition = s), (de = r);
  }
  return null;
}
function p3(e, t, n, r) {
  do _s();
  while (nr !== null);
  if (ne & 6) throw Error(U(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (G2(e, o),
    e === Ke && ((Fe = Ke = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qi ||
      ((qi = !0),
      J0(Aa, function () {
        return _s(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ht.transition), (Ht.transition = null);
    var a = de;
    de = 1;
    var l = ne;
    (ne |= 4),
      (yf.current = null),
      a3(e, n),
      W0(n, e),
      Pv(_u),
      (Pa = !!Tu),
      (_u = Tu = null),
      (e.current = n),
      l3(n),
      U2(),
      (ne = l),
      (de = a),
      (Ht.transition = o);
  } else e.current = n;
  if (
    (qi && ((qi = !1), (nr = e), (Za = s)),
    (o = e.pendingLanes),
    o === 0 && (cr = null),
    D2(n.stateNode),
    wt(e, Oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Ka) throw ((Ka = !1), (e = Zu), (Zu = null), e);
  return (
    Za & 1 && e.tag !== 0 && _s(),
    (o = e.pendingLanes),
    o & 1 ? (e === Yu ? Ro++ : ((Ro = 0), (Yu = e))) : (Ro = 0),
    Sr(),
    null
  );
}
function _s() {
  if (nr !== null) {
    var e = R1(Za),
      t = Ht.transition,
      n = de;
    try {
      if (((Ht.transition = null), (de = 16 > e ? 16 : e), nr === null))
        var r = !1;
      else {
        if (((e = nr), (nr = null), (Za = 0), ne & 6)) throw Error(U(331));
        var s = ne;
        for (ne |= 4, W = e.current; W !== null; ) {
          var o = W,
            a = o.child;
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
                      To(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (W = d);
                  else
                    for (; W !== null; ) {
                      f = W;
                      var p = f.sibling,
                        y = f.return;
                      if ((D0(f), f === u)) {
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
              var m = o.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              W = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (W = a);
          else
            e: for (; W !== null; ) {
              if (((o = W), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    To(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (W = h);
                break e;
              }
              W = o.return;
            }
        }
        var x = e.current;
        for (W = x; W !== null; ) {
          a = W;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (W = w);
          else
            e: for (a = x; W !== null; ) {
              if (((l = W), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, l);
                  }
                } catch (k) {
                  Me(l, l.return, k);
                }
              if (l === a) {
                W = null;
                break e;
              }
              var j = l.sibling;
              if (j !== null) {
                (j.return = l.return), (W = j);
                break e;
              }
              W = l.return;
            }
        }
        if (
          ((ne = s), Sr(), yn && typeof yn.onPostCommitFiberRoot == "function")
        )
          try {
            yn.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (de = n), (Ht.transition = t);
    }
  }
  return !1;
}
function wh(e, t, n) {
  (t = Us(n, t)),
    (t = R0(e, t, 1)),
    (e = lr(e, t, 1)),
    (t = ct()),
    e !== null && (ii(e, 1, t), wt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) wh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cr === null || !cr.has(r)))
        ) {
          (e = Us(n, e)),
            (e = A0(t, e, 1)),
            (t = lr(t, e, 1)),
            (e = ct()),
            t !== null && (ii(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function h3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ct()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ke === e &&
      (Qe & n) === n &&
      (We === 4 || (We === 3 && (Qe & 130023424) === Qe && 500 > Oe() - vf)
        ? Pr(e, 0)
        : (xf |= n)),
    wt(e, t);
}
function Q0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bi), (Bi <<= 1), !(Bi & 130023424) && (Bi = 4194304))
      : (t = 1));
  var n = ct();
  (e = In(e, t)), e !== null && (ii(e, t, n), wt(e, n));
}
function m3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Q0(e, n);
}
function g3(e, t) {
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
      throw Error(U(314));
  }
  r !== null && r.delete(t), Q0(e, n);
}
var X0;
X0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), r3(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), ke && t.flags & 1048576 && n0(t, Fa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pa(e, t), (e = t.pendingProps);
      var s = Ls(t, st.current);
      Ts(t, n), (s = ff(null, t, r, e, s, n));
      var o = pf();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            vt(r) ? ((o = !0), Ua(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            af(t),
            (s.updater = Sl),
            (t.stateNode = s),
            (s._reactInternals = t),
            Uu(t, r, e, n),
            (t = Du(null, t, r, !0, o, n)))
          : ((t.tag = 0), ke && o && Jd(t), it(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pa(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = x3(r)),
          (e = Xt(r, e)),
          s)
        ) {
          case 0:
            t = Fu(null, t, r, e, n);
            break e;
          case 1:
            t = uh(null, t, r, e, n);
            break e;
          case 11:
            t = lh(null, t, r, e, n);
            break e;
          case 14:
            t = ch(null, t, r, Xt(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        Fu(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        uh(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((O0(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          l0(e, t),
          Va(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (s = Us(Error(U(423)), t)), (t = dh(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Us(Error(U(424)), t)), (t = dh(e, t, r, n, s));
            break e;
          } else
            for (
              Rt = ar(t.stateNode.containerInfo.firstChild),
                At = t,
                ke = !0,
                tn = null,
                n = i0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Os(), r === s)) {
            t = Un(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        c0(t),
        e === null && Ou(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = s.children),
        Ru(r, s) ? (a = null) : o !== null && Ru(r, o) && (t.flags |= 32),
        L0(e, t),
        it(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ou(t), null;
    case 13:
      return B0(e, t, n);
    case 4:
      return (
        lf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bs(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        lh(e, t, r, s, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (a = s.value),
          xe(Da, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (on(o.value, a)) {
            if (o.children === s.children && !xt.current) {
              t = Un(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
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
                      Bu(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(U(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Bu(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        it(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Ts(t, n),
        (s = Gt(s)),
        (r = r(s)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Xt(r, t.pendingProps)),
        (s = Xt(r.type, s)),
        ch(e, t, r, s, n)
      );
    case 15:
      return M0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Xt(r, s)),
        pa(e, t),
        (t.tag = 1),
        vt(r) ? ((e = !0), Ua(t)) : (e = !1),
        Ts(t, n),
        _0(t, r, s),
        Uu(t, r, s, n),
        Du(null, t, r, !0, e, n)
      );
    case 19:
      return I0(e, t, n);
    case 22:
      return P0(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function J0(e, t) {
  return N1(e, t);
}
function y3(e, t, n, r) {
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
  return new y3(e, t, n, r);
}
function bf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function x3(e) {
  if (typeof e == "function") return bf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Dd)) return 11;
    if (e === zd) return 14;
  }
  return 2;
}
function dr(e, t) {
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
function ga(e, t, n, r, s, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) bf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case fs:
        return Lr(n.children, s, o, t);
      case Fd:
        (a = 8), (s |= 8);
        break;
      case lu:
        return (
          (e = Wt(12, n, t, s | 2)), (e.elementType = lu), (e.lanes = o), e
        );
      case cu:
        return (e = Wt(13, n, t, s)), (e.elementType = cu), (e.lanes = o), e;
      case uu:
        return (e = Wt(19, n, t, s)), (e.elementType = uu), (e.lanes = o), e;
      case c1:
        return jl(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case a1:
              a = 10;
              break e;
            case l1:
              a = 9;
              break e;
            case Dd:
              a = 11;
              break e;
            case zd:
              a = 14;
              break e;
            case Zn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Wt(a, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lr(e, t, n, r) {
  return (e = Wt(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Wt(22, e, r, t)),
    (e.elementType = c1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fc(e, t, n) {
  return (e = Wt(6, e, null, t)), (e.lanes = n), e;
}
function Dc(e, t, n) {
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
function v3(e, t, n, r, s) {
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
    (this.eventTimes = Sc(0)),
    (this.expirationTimes = Sc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function jf(e, t, n, r, s, o, a, l, c) {
  return (
    (e = new v3(e, t, n, l, c)),
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
    af(o),
    e
  );
}
function w3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ds,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eg(e) {
  if (!e) return mr;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (vt(n)) return e0(e, n, t);
  }
  return t;
}
function tg(e, t, n, r, s, o, a, l, c) {
  return (
    (e = jf(n, r, !0, e, s, o, a, l, c)),
    (e.context = eg(null)),
    (n = e.current),
    (r = ct()),
    (s = ur(n)),
    (o = Ln(r, s)),
    (o.callback = t ?? null),
    lr(n, o, s),
    (e.current.lanes = s),
    ii(e, s, r),
    wt(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var s = t.current,
    o = ct(),
    a = ur(s);
  return (
    (n = eg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ln(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = lr(s, t, a)),
    e !== null && (rn(e, s, a, o), ua(e, s, a)),
    a
  );
}
function Qa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kf(e, t) {
  Sh(e, t), (e = e.alternate) && Sh(e, t);
}
function S3() {
  return null;
}
var ng =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nf(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Nf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  kl(e, t, null, null);
};
Nl.prototype.unmount = Nf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fr(function () {
      kl(null, e, null, null);
    }),
      (t[Bn] = null);
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = P1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xn.length && t !== 0 && t < Xn[n].priority; n++);
    Xn.splice(n, 0, e), n === 0 && O1(e);
  }
};
function Ef(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function El(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ch() {}
function C3(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Qa(a);
        o.call(u);
      };
    }
    var a = tg(t, r, e, 0, null, !1, !1, "", Ch);
    return (
      (e._reactRootContainer = a),
      (e[Bn] = a.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      Fr(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Qa(c);
      l.call(u);
    };
  }
  var c = jf(e, 0, !1, null, null, !1, !1, "", Ch);
  return (
    (e._reactRootContainer = c),
    (e[Bn] = c.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    Fr(function () {
      kl(t, c, n, r);
    }),
    c
  );
}
function Tl(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = Qa(a);
        l.call(c);
      };
    }
    kl(t, a, e, s);
  } else a = C3(n, t, e, s, r);
  return Qa(a);
}
A1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xo(t.pendingLanes);
        n !== 0 &&
          (Hd(t, n | 1), wt(t, Oe()), !(ne & 6) && (($s = Oe() + 500), Sr()));
      }
      break;
    case 13:
      Fr(function () {
        var r = In(e, 1);
        if (r !== null) {
          var s = ct();
          rn(r, e, 1, s);
        }
      }),
        kf(e, 1);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = In(e, 134217728);
    if (t !== null) {
      var n = ct();
      rn(t, e, 134217728, n);
    }
    kf(e, 134217728);
  }
};
M1 = function (e) {
  if (e.tag === 13) {
    var t = ur(e),
      n = In(e, t);
    if (n !== null) {
      var r = ct();
      rn(n, e, t, r);
    }
    kf(e, t);
  }
};
P1 = function () {
  return de;
};
L1 = function (e, t) {
  var n = de;
  try {
    return (de = e), t();
  } finally {
    de = n;
  }
};
wu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = xl(r);
            if (!s) throw Error(U(90));
            d1(r), pu(r, s);
          }
        }
      }
      break;
    case "textarea":
      p1(e, n);
      break;
    case "select":
      (t = n.value), t != null && js(e, !!n.multiple, t, !1);
  }
};
w1 = wf;
S1 = Fr;
var b3 = { usingClientEntryPoint: !1, Events: [li, gs, xl, x1, v1, wf] },
  fo = {
    findFiberByHostInstance: Er,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  j3 = {
    bundleType: fo.bundleType,
    version: fo.version,
    rendererPackageName: fo.rendererPackageName,
    rendererConfig: fo.rendererConfig,
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
      return (e = j1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fo.findFiberByHostInstance || S3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gi.isDisabled && Gi.supportsFiber)
    try {
      (hl = Gi.inject(j3)), (yn = Gi);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b3;
Bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ef(t)) throw Error(U(200));
  return w3(e, t, null, n);
};
Bt.createRoot = function (e, t) {
  if (!Ef(e)) throw Error(U(299));
  var n = !1,
    r = "",
    s = ng;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = jf(e, 1, !1, null, null, n, !1, r, s)),
    (e[Bn] = t.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    new Nf(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = j1(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return Fr(e);
};
Bt.hydrate = function (e, t, n) {
  if (!El(t)) throw Error(U(200));
  return Tl(null, e, t, !0, n);
};
Bt.hydrateRoot = function (e, t, n) {
  if (!Ef(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    a = ng;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = tg(t, null, e, 1, n ?? null, s, !1, o, a)),
    (e[Bn] = t.current),
    Fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Nl(t);
};
Bt.render = function (e, t, n) {
  if (!El(t)) throw Error(U(200));
  return Tl(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function (e) {
  if (!El(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (Fr(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bn] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = wf;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!El(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Tl(e, t, n, !1, r);
};
Bt.version = "18.3.1-next-f1338f8080-20240426";
function rg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rg);
    } catch (e) {
      console.error(e);
    }
}
rg(), (r1.exports = Bt);
var k3 = r1.exports,
  sg,
  bh = k3;
(sg = bh.createRoot), bh.hydrateRoot;
/**
 * @remix-run/router v1.19.2
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
var rr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rr || (rr = {}));
const jh = "popstate";
function N3(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: o, search: a, hash: l } = r.location;
    return Ju(
      "",
      { pathname: o, search: a, hash: l },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Xa(s);
  }
  return T3(t, n, null, e);
}
function De(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function og(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function E3() {
  return Math.random().toString(36).substr(2, 8);
}
function kh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ju(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Zo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ks(t) : t,
      { state: n, key: (t && t.key) || r || E3() }
    )
  );
}
function Xa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ks(e) {
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
function T3(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = r,
    a = s.history,
    l = rr.Pop,
    c = null,
    u = f();
  u == null && ((u = 0), a.replaceState(Zo({}, a.state, { idx: u }), ""));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = rr.Pop;
    let S = f(),
      h = S == null ? null : S - u;
    (u = S), c && c({ action: l, location: g.location, delta: h });
  }
  function p(S, h) {
    l = rr.Push;
    let x = Ju(g.location, S, h);
    u = f() + 1;
    let w = kh(x, u),
      j = g.createHref(x);
    try {
      a.pushState(w, "", j);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      s.location.assign(j);
    }
    o && c && c({ action: l, location: g.location, delta: 1 });
  }
  function y(S, h) {
    l = rr.Replace;
    let x = Ju(g.location, S, h);
    u = f();
    let w = kh(x, u),
      j = g.createHref(x);
    a.replaceState(w, "", j),
      o && c && c({ action: l, location: g.location, delta: 0 });
  }
  function m(S) {
    let h = s.location.origin !== "null" ? s.location.origin : s.location.href,
      x = typeof S == "string" ? S : Xa(S);
    return (
      (x = x.replace(/ $/, "%20")),
      De(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          x
      ),
      new URL(x, h)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(s, a);
    },
    listen(S) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(jh, d),
        (c = S),
        () => {
          s.removeEventListener(jh, d), (c = null);
        }
      );
    },
    createHref(S) {
      return t(s, S);
    },
    createURL: m,
    encodeLocation(S) {
      let h = m(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: y,
    go(S) {
      return a.go(S);
    },
  };
  return g;
}
var Nh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Nh || (Nh = {}));
function _3(e, t, n) {
  return n === void 0 && (n = "/"), R3(e, t, n, !1);
}
function R3(e, t, n, r) {
  let s = typeof t == "string" ? Ks(t) : t,
    o = Tf(s.pathname || "/", n);
  if (o == null) return null;
  let a = ig(e);
  A3(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = z3(o);
    l = F3(a[c], u, r);
  }
  return l;
}
function ig(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, a, l) => {
    let c = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
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
    let u = fr([r, c.relativePath]),
      f = n.concat(c);
    o.children &&
      o.children.length > 0 &&
      (De(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ig(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: U3(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) s(o, a);
      else for (let c of ag(o.path)) s(o, a, c);
    }),
    t
  );
}
function ag(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let a = ag(r.join("/")),
    l = [];
  return (
    l.push(...a.map((c) => (c === "" ? o : [o, c].join("/")))),
    s && l.push(...a),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function A3(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $3(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const M3 = /^:[\w-]+$/,
  P3 = 3,
  L3 = 2,
  O3 = 1,
  B3 = 10,
  I3 = -2,
  Eh = (e) => e === "*";
function U3(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Eh) && (r += I3),
    t && (r += L3),
    n
      .filter((s) => !Eh(s))
      .reduce((s, o) => s + (M3.test(o) ? P3 : o === "" ? O3 : B3), r)
  );
}
function $3(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function F3(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    o = "/",
    a = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      d = Th(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        f
      ),
      p = c.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Th(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(s, d.params),
      a.push({
        params: s,
        pathname: fr([o, d.pathname]),
        pathnameBase: q3(fr([o, d.pathnameBase])),
        route: p,
      }),
      d.pathnameBase !== "/" && (o = fr([o, d.pathnameBase]));
  }
  return a;
}
function Th(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = D3(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let o = s[0],
    a = o.replace(/(.)\/+$/, "$1"),
    l = s.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: p, isOptional: y } = f;
      if (p === "*") {
        let g = l[d] || "";
        a = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const m = l[d];
      return (
        y && !m ? (u[p] = void 0) : (u[p] = (m || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function D3(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    og(
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
          (a, l, c) => (
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
function z3(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      og(
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
function Tf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function V3(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Ks(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : W3(n, t)) : t,
    search: G3(r),
    hash: K3(s),
  };
}
function W3(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function zc(e, t, n, r) {
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
function H3(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function lg(e, t) {
  let n = H3(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function cg(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Ks(e))
    : ((s = Zo({}, e)),
      De(
        !s.pathname || !s.pathname.includes("?"),
        zc("?", "pathname", "search", s)
      ),
      De(
        !s.pathname || !s.pathname.includes("#"),
        zc("#", "pathname", "hash", s)
      ),
      De(!s.search || !s.search.includes("#"), zc("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    a = o ? "/" : s.pathname,
    l;
  if (a == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      s.pathname = p.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let c = V3(s, l),
    u = a && a !== "/" && a.endsWith("/"),
    f = (o || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c;
}
const fr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  q3 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  G3 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  K3 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Z3(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ug = ["post", "put", "patch", "delete"];
new Set(ug);
const Y3 = ["get", ...ug];
new Set(Y3);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yo.apply(this, arguments)
  );
}
const _f = E.createContext(null),
  Q3 = E.createContext(null),
  qr = E.createContext(null),
  _l = E.createContext(null),
  Gr = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  dg = E.createContext(null);
function X3(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ui() || De(!1);
  let { basename: r, navigator: s } = E.useContext(qr),
    { hash: o, pathname: a, search: l } = pg(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : fr([r, a])),
    s.createHref({ pathname: c, search: l, hash: o })
  );
}
function ui() {
  return E.useContext(_l) != null;
}
function Zs() {
  return ui() || De(!1), E.useContext(_l).location;
}
function fg(e) {
  E.useContext(qr).static || E.useLayoutEffect(e);
}
function Ut() {
  let { isDataRoute: e } = E.useContext(Gr);
  return e ? d4() : J3();
}
function J3() {
  ui() || De(!1);
  let e = E.useContext(_f),
    { basename: t, future: n, navigator: r } = E.useContext(qr),
    { matches: s } = E.useContext(Gr),
    { pathname: o } = Zs(),
    a = JSON.stringify(lg(s, n.v7_relativeSplatPath)),
    l = E.useRef(!1);
  return (
    fg(() => {
      l.current = !0;
    }),
    E.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = cg(u, JSON.parse(a), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : fr([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, a, o, e]
    )
  );
}
function pg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(qr),
    { matches: s } = E.useContext(Gr),
    { pathname: o } = Zs(),
    a = JSON.stringify(lg(s, r.v7_relativeSplatPath));
  return E.useMemo(() => cg(e, JSON.parse(a), o, n === "path"), [e, a, o, n]);
}
function e4(e, t) {
  return t4(e, t);
}
function t4(e, t, n, r) {
  ui() || De(!1);
  let { navigator: s } = E.useContext(qr),
    { matches: o } = E.useContext(Gr),
    a = o[o.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Zs(),
    f;
  if (t) {
    var d;
    let S = typeof t == "string" ? Ks(t) : t;
    c === "/" || ((d = S.pathname) != null && d.startsWith(c)) || De(!1),
      (f = S);
  } else f = u;
  let p = f.pathname || "/",
    y = p;
  if (c !== "/") {
    let S = c.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let m = _3(e, { pathname: y }),
    g = i4(
      m &&
        m.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: fr([
              c,
              s.encodeLocation
                ? s.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? c
                : fr([
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
  return t && g
    ? E.createElement(
        _l.Provider,
        {
          value: {
            location: Yo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: rr.Pop,
          },
        },
        g
      )
    : g;
}
function n4() {
  let e = u4(),
    t = Z3(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: s }, n) : null,
    null
  );
}
const r4 = E.createElement(n4, null);
class s4 extends E.Component {
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
      ? E.createElement(
          Gr.Provider,
          { value: this.props.routeContext },
          E.createElement(dg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function o4(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = E.useContext(_f);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Gr.Provider, { value: t }, r)
  );
}
function i4(e, t, n, r) {
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
  let a = e,
    l = (s = n) == null ? void 0 : s.errors;
  if (l != null) {
    let f = a.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    f >= 0 || De(!1), (a = a.slice(0, Math.min(a.length, f + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < a.length; f++) {
      let d = a[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          m =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((f, d, p) => {
    let y,
      m = !1,
      g = null,
      S = null;
    n &&
      ((y = l && d.route.id ? l[d.route.id] : void 0),
      (g = d.route.errorElement || r4),
      c &&
        (u < 0 && p === 0
          ? ((m = !0), (S = null))
          : u === p &&
            ((m = !0), (S = d.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, p + 1)),
      x = () => {
        let w;
        return (
          y
            ? (w = g)
            : m
            ? (w = S)
            : d.route.Component
            ? (w = E.createElement(d.route.Component, null))
            : d.route.element
            ? (w = d.route.element)
            : (w = f),
          E.createElement(o4, {
            match: d,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? E.createElement(s4, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: y,
          children: x(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var hg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hg || {}),
  Ja = (function (e) {
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
  })(Ja || {});
function a4(e) {
  let t = E.useContext(_f);
  return t || De(!1), t;
}
function l4(e) {
  let t = E.useContext(Q3);
  return t || De(!1), t;
}
function c4(e) {
  let t = E.useContext(Gr);
  return t || De(!1), t;
}
function mg(e) {
  let t = c4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || De(!1), n.route.id;
}
function u4() {
  var e;
  let t = E.useContext(dg),
    n = l4(Ja.UseRouteError),
    r = mg(Ja.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function d4() {
  let { router: e } = a4(hg.UseNavigateStable),
    t = mg(Ja.UseNavigateStable),
    n = E.useRef(!1);
  return (
    fg(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Yo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Q(e) {
  De(!1);
}
function f4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = rr.Pop,
    navigator: o,
    static: a = !1,
    future: l,
  } = e;
  ui() && De(!1);
  let c = t.replace(/^\/*/, "/"),
    u = E.useMemo(
      () => ({
        basename: c,
        navigator: o,
        static: a,
        future: Yo({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, o, a]
    );
  typeof r == "string" && (r = Ks(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: p = "",
      state: y = null,
      key: m = "default",
    } = r,
    g = E.useMemo(() => {
      let S = Tf(f, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: p, state: y, key: m },
            navigationType: s,
          };
    }, [c, f, d, p, y, m, s]);
  return g == null
    ? null
    : E.createElement(
        qr.Provider,
        { value: u },
        E.createElement(_l.Provider, { children: n, value: g })
      );
}
function Cn(e) {
  let { children: t, location: n } = e;
  return e4(ed(t), n);
}
new Promise(() => {});
function ed(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, s) => {
      if (!E.isValidElement(r)) return;
      let o = [...t, s];
      if (r.type === E.Fragment) {
        n.push.apply(n, ed(r.props.children, o));
        return;
      }
      r.type !== Q && De(!1), !r.props.index || !r.props.children || De(!1);
      let a = {
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
      r.props.children && (a.children = ed(r.props.children, o)), n.push(a);
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
 */ function td() {
  return (
    (td = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    td.apply(this, arguments)
  );
}
function p4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function h4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function m4(e, t) {
  return e.button === 0 && (!t || t === "_self") && !h4(e);
}
function nd(e) {
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
function g4(e, t) {
  let n = nd(e);
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
const y4 = [
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
  x4 = "6";
try {
  window.__reactRouterVersion = x4;
} catch {}
const v4 = "startTransition",
  _h = iu[v4];
function w4(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    o = E.useRef();
  o.current == null && (o.current = N3({ window: s, v5Compat: !0 }));
  let a = o.current,
    [l, c] = E.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    f = E.useCallback(
      (d) => {
        u && _h ? _h(() => c(d)) : c(d);
      },
      [c, u]
    );
  return (
    E.useLayoutEffect(() => a.listen(f), [a, f]),
    E.createElement(f4, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
const S4 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  C4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ie = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: o,
        replace: a,
        state: l,
        target: c,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      p = p4(t, y4),
      { basename: y } = E.useContext(qr),
      m,
      g = !1;
    if (typeof u == "string" && C4.test(u) && ((m = u), S4))
      try {
        let w = new URL(window.location.href),
          j = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          k = Tf(j.pathname, y);
        j.origin === w.origin && k != null
          ? (u = k + j.search + j.hash)
          : (g = !0);
      } catch {}
    let S = X3(u, { relative: s }),
      h = b4(u, {
        replace: a,
        state: l,
        target: c,
        preventScrollReset: f,
        relative: s,
        unstable_viewTransition: d,
      });
    function x(w) {
      r && r(w), w.defaultPrevented || h(w);
    }
    return E.createElement(
      "a",
      td({}, p, { href: m || S, onClick: g || o ? r : x, ref: n, target: c })
    );
  });
var Rh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Rh || (Rh = {}));
var Ah;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ah || (Ah = {}));
function b4(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Ut(),
    u = Zs(),
    f = pg(e, { relative: a });
  return E.useCallback(
    (d) => {
      if (m4(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : Xa(u) === Xa(f);
        c(e, {
          replace: p,
          state: s,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, c, f, r, s, n, e, o, a, l]
  );
}
function jt(e) {
  let t = E.useRef(nd(e)),
    n = E.useRef(!1),
    r = Zs(),
    s = E.useMemo(() => g4(r.search, n.current ? null : t.current), [r.search]),
    o = Ut(),
    a = E.useCallback(
      (l, c) => {
        const u = nd(typeof l == "function" ? l(s) : l);
        (n.current = !0), o("?" + u, c);
      },
      [o, s]
    );
  return [s, a];
}
const j4 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  Mh = (e) => {
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
            n.forEach((m) => m(t, y));
        }
      },
      s = () => t,
      c = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (f) => (n.add(f), () => n.delete(f)),
        destroy: () => {
          (j4 ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, s, c));
    return c;
  },
  k4 = (e) => (e ? Mh(e) : Mh);
var gg = { exports: {} },
  yg = {},
  xg = { exports: {} },
  vg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fs = E;
function N4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var E4 = typeof Object.is == "function" ? Object.is : N4,
  T4 = Fs.useState,
  _4 = Fs.useEffect,
  R4 = Fs.useLayoutEffect,
  A4 = Fs.useDebugValue;
function M4(e, t) {
  var n = t(),
    r = T4({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    o = r[1];
  return (
    R4(
      function () {
        (s.value = n), (s.getSnapshot = t), Vc(s) && o({ inst: s });
      },
      [e, n, t]
    ),
    _4(
      function () {
        return (
          Vc(s) && o({ inst: s }),
          e(function () {
            Vc(s) && o({ inst: s });
          })
        );
      },
      [e]
    ),
    A4(n),
    n
  );
}
function Vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !E4(e, n);
  } catch {
    return !0;
  }
}
function P4(e, t) {
  return t();
}
var L4 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? P4
    : M4;
vg.useSyncExternalStore =
  Fs.useSyncExternalStore !== void 0 ? Fs.useSyncExternalStore : L4;
xg.exports = vg;
var O4 = xg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rl = E,
  B4 = O4;
function I4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var U4 = typeof Object.is == "function" ? Object.is : I4,
  $4 = B4.useSyncExternalStore,
  F4 = Rl.useRef,
  D4 = Rl.useEffect,
  z4 = Rl.useMemo,
  V4 = Rl.useDebugValue;
yg.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var o = F4(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = z4(
    function () {
      function c(y) {
        if (!u) {
          if (((u = !0), (f = y), (y = r(y)), s !== void 0 && a.hasValue)) {
            var m = a.value;
            if (s(m, y)) return (d = m);
          }
          return (d = y);
        }
        if (((m = d), U4(f, y))) return m;
        var g = r(y);
        return s !== void 0 && s(m, g) ? m : ((f = y), (d = g));
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
  var l = $4(e, o[0], o[1]);
  return (
    D4(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    V4(l),
    l
  );
};
gg.exports = yg;
var W4 = gg.exports;
const H4 = fl(W4),
  Rf = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  { useDebugValue: q4 } = t1,
  { useSyncExternalStoreWithSelector: G4 } = H4;
let Ph = !1;
const K4 = (e) => e;
function Z4(e, t = K4, n) {
  (Rf ? "production" : void 0) !== "production" &&
    n &&
    !Ph &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (Ph = !0));
  const r = G4(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return q4(r), r;
}
const Lh = (e) => {
    (Rf ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? k4(e) : e,
      n = (r, s) => Z4(t, r, s);
    return Object.assign(n, t), n;
  },
  wg = (e) => (e ? Lh(e) : Lh);
var Y4 = (e) => (
  (Rf ? "production" : void 0) !== "production" &&
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    ),
  wg(e)
);
const Al = wg((e) => ({
  isAuthenticated: !!localStorage.getItem("access_token"),
  login: () => e({ isAuthenticated: !0 }),
  logout: () => {
    localStorage.removeItem("access_token"),
      localStorage.removeItem("refresh_token"),
      e({ isAuthenticated: !1 });
  },
}));
function Sg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Q4 } = Object.prototype,
  { getPrototypeOf: Af } = Object,
  Ml = ((e) => (t) => {
    const n = Q4.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ln = (e) => ((e = e.toLowerCase()), (t) => Ml(t) === e),
  Pl = (e) => (t) => typeof t === e,
  { isArray: Ys } = Array,
  Qo = Pl("undefined");
function X4(e) {
  return (
    e !== null &&
    !Qo(e) &&
    e.constructor !== null &&
    !Qo(e.constructor) &&
    Mt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Cg = ln("ArrayBuffer");
function J4(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Cg(e.buffer)),
    t
  );
}
const ew = Pl("string"),
  Mt = Pl("function"),
  bg = Pl("number"),
  Ll = (e) => e !== null && typeof e == "object",
  tw = (e) => e === !0 || e === !1,
  ya = (e) => {
    if (Ml(e) !== "object") return !1;
    const t = Af(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  nw = ln("Date"),
  rw = ln("File"),
  sw = ln("Blob"),
  ow = ln("FileList"),
  iw = (e) => Ll(e) && Mt(e.pipe),
  aw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Mt(e.append) &&
          ((t = Ml(e)) === "formdata" ||
            (t === "object" &&
              Mt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lw = ln("URLSearchParams"),
  [cw, uw, dw, fw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ln
  ),
  pw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function di(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Ys(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = o.length;
    let l;
    for (r = 0; r < a; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function jg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Rr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  kg = (e) => !Qo(e) && e !== Rr;
function rd() {
  const { caseless: e } = (kg(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && jg(t, s)) || s;
      ya(t[o]) && ya(r)
        ? (t[o] = rd(t[o], r))
        : ya(r)
        ? (t[o] = rd({}, r))
        : Ys(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && di(arguments[r], n);
  return t;
}
const hw = (e, t, n, { allOwnKeys: r } = {}) => (
    di(
      t,
      (s, o) => {
        n && Mt(s) ? (e[o] = Sg(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  mw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  gw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  yw = (e, t, n, r) => {
    let s, o, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (a = s[o]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && Af(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  xw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  vw = (e) => {
    if (!e) return null;
    if (Ys(e)) return e;
    let t = e.length;
    if (!bg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ww = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Af(Uint8Array)),
  Sw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Cw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  bw = ln("HTMLFormElement"),
  jw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Oh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  kw = ln("RegExp"),
  Ng = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    di(n, (s, o) => {
      let a;
      (a = t(s, o, e)) !== !1 && (r[o] = a || s);
    }),
      Object.defineProperties(e, r);
  },
  Nw = (e) => {
    Ng(e, (t, n) => {
      if (Mt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Mt(r)) {
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
  Ew = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Ys(e) ? r(e) : r(String(e).split(t)), n;
  },
  Tw = () => {},
  _w = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Wc = "abcdefghijklmnopqrstuvwxyz",
  Bh = "0123456789",
  Eg = { DIGIT: Bh, ALPHA: Wc, ALPHA_DIGIT: Wc + Wc.toUpperCase() + Bh },
  Rw = (e = 16, t = Eg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Aw(e) {
  return !!(
    e &&
    Mt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Mw = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Ll(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Ys(r) ? [] : {};
            return (
              di(r, (a, l) => {
                const c = n(a, s + 1);
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
  Pw = ln("AsyncFunction"),
  Lw = (e) => e && (Ll(e) || Mt(e)) && Mt(e.then) && Mt(e.catch),
  Tg = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Rr.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === Rr && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Rr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Mt(Rr.postMessage)
  ),
  Ow =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Rr)
      : (typeof process < "u" && process.nextTick) || Tg,
  A = {
    isArray: Ys,
    isArrayBuffer: Cg,
    isBuffer: X4,
    isFormData: aw,
    isArrayBufferView: J4,
    isString: ew,
    isNumber: bg,
    isBoolean: tw,
    isObject: Ll,
    isPlainObject: ya,
    isReadableStream: cw,
    isRequest: uw,
    isResponse: dw,
    isHeaders: fw,
    isUndefined: Qo,
    isDate: nw,
    isFile: rw,
    isBlob: sw,
    isRegExp: kw,
    isFunction: Mt,
    isStream: iw,
    isURLSearchParams: lw,
    isTypedArray: ww,
    isFileList: ow,
    forEach: di,
    merge: rd,
    extend: hw,
    trim: pw,
    stripBOM: mw,
    inherits: gw,
    toFlatObject: yw,
    kindOf: Ml,
    kindOfTest: ln,
    endsWith: xw,
    toArray: vw,
    forEachEntry: Sw,
    matchAll: Cw,
    isHTMLForm: bw,
    hasOwnProperty: Oh,
    hasOwnProp: Oh,
    reduceDescriptors: Ng,
    freezeMethods: Nw,
    toObjectSet: Ew,
    toCamelCase: jw,
    noop: Tw,
    toFiniteNumber: _w,
    findKey: jg,
    global: Rr,
    isContextDefined: kg,
    ALPHABET: Eg,
    generateString: Rw,
    isSpecCompliantForm: Aw,
    toJSONObject: Mw,
    isAsyncFn: Pw,
    isThenable: Lw,
    setImmediate: Tg,
    asap: Ow,
  };
function Y(e, t, n, r, s) {
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
A.inherits(Y, Error, {
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
const _g = Y.prototype,
  Rg = {};
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
  Rg[e] = { value: e };
});
Object.defineProperties(Y, Rg);
Object.defineProperty(_g, "isAxiosError", { value: !0 });
Y.from = (e, t, n, r, s, o) => {
  const a = Object.create(_g);
  return (
    A.toFlatObject(
      e,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    Y.call(a, e.message, t, n, r, s),
    (a.cause = e),
    (a.name = e.name),
    o && Object.assign(a, o),
    a
  );
};
const Bw = null;
function sd(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Ag(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ih(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ag(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Iw(e) {
  return A.isArray(e) && !e.some(sd);
}
const Uw = A.toFlatObject(A, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ol(e, t, n) {
  if (!A.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = A.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, S) {
        return !A.isUndefined(S[g]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || f,
    o = n.dots,
    a = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(t);
  if (!A.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (A.isDate(m)) return m.toISOString();
    if (!c && A.isBlob(m))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(m) || A.isTypedArray(m)
      ? c && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function f(m, g, S) {
    let h = m;
    if (m && !S && typeof m == "object") {
      if (A.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (A.isArray(m) && Iw(m)) ||
        ((A.isFileList(m) || A.endsWith(g, "[]")) && (h = A.toArray(m)))
      )
        return (
          (g = Ag(g)),
          h.forEach(function (w, j) {
            !(A.isUndefined(w) || w === null) &&
              t.append(
                a === !0 ? Ih([g], j, o) : a === null ? g : g + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return sd(m) ? !0 : (t.append(Ih(S, g, o), u(m)), !1);
  }
  const d = [],
    p = Object.assign(Uw, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: sd,
    });
  function y(m, g) {
    if (!A.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m),
        A.forEach(m, function (h, x) {
          (!(A.isUndefined(h) || h === null) &&
            s.call(t, h, A.isString(x) ? x.trim() : x, g, p)) === !0 &&
            y(h, g ? g.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!A.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Uh(e) {
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
function Mf(e, t) {
  (this._pairs = []), e && Ol(e, this, t);
}
const Mg = Mf.prototype;
Mg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Mg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Uh);
      }
    : Uh;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function $w(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Pg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || $w,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = A.isURLSearchParams(t) ? t.toString() : new Mf(t, n).toString(r)),
    o)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class $h {
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
const Lg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Fw = typeof URLSearchParams < "u" ? URLSearchParams : Mf,
  Dw = typeof FormData < "u" ? FormData : null,
  zw = typeof Blob < "u" ? Blob : null,
  Vw = {
    isBrowser: !0,
    classes: { URLSearchParams: Fw, FormData: Dw, Blob: zw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Pf = typeof window < "u" && typeof document < "u",
  od = (typeof navigator == "object" && navigator) || void 0,
  Ww =
    Pf &&
    (!od || ["ReactNative", "NativeScript", "NS"].indexOf(od.product) < 0),
  Hw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  qw = (Pf && window.location.href) || "http://localhost",
  Gw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Pf,
        hasStandardBrowserEnv: Ww,
        hasStandardBrowserWebWorkerEnv: Hw,
        navigator: od,
        origin: qw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  St = { ...Gw, ...Vw };
function Kw(e, t) {
  return Ol(
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
function Zw(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Yw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Og(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a),
      c = o >= n.length;
    return (
      (a = !a && A.isArray(s) ? s.length : a),
      c
        ? (A.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !l)
        : ((!s[a] || !A.isObject(s[a])) && (s[a] = []),
          t(n, r, s[a], o) && A.isArray(s[a]) && (s[a] = Yw(s[a])),
          !l)
    );
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return (
      A.forEachEntry(e, (r, s) => {
        t(Zw(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Qw(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const fi = {
  transitional: Lg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = A.isObject(t);
      if ((o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)))
        return s ? JSON.stringify(Og(t)) : t;
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
          return Kw(t, this.formSerializer).toString();
        if ((l = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ol(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Qw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || fi.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (A.isResponse(t) || A.isReadableStream(t)) return t;
      if (t && A.isString(t) && ((r && !this.responseType) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? Y.from(l, Y.ERR_BAD_RESPONSE, this, null, this.response)
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
  fi.headers[e] = {};
});
const Xw = A.toObjectSet([
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
  Jw = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (s = a.indexOf(":")),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (t[n] && Xw[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Fh = Symbol("internals");
function po(e) {
  return e && String(e).trim().toLowerCase();
}
function xa(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(xa) : String(e);
}
function e5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const t5 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Hc(e, t, n, r, s) {
  if (A.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!A.isString(t))) {
    if (A.isString(r)) return t.indexOf(r) !== -1;
    if (A.isRegExp(r)) return r.test(t);
  }
}
function n5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function r5(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, a) {
        return this[r].call(this, t, s, o, a);
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
      const f = po(c);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = A.findKey(s, f);
      (!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
        (s[d || c] = xa(l));
    }
    const a = (l, c) => A.forEach(l, (u, f) => o(u, f, c));
    if (A.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (A.isString(t) && (t = t.trim()) && !t5(t)) a(Jw(t), n);
    else if (A.isHeaders(t)) for (const [l, c] of t.entries()) o(c, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = po(t)), t)) {
      const r = A.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return e5(s);
        if (A.isFunction(n)) return n.call(this, s, r);
        if (A.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = po(t)), t)) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Hc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (((a = po(a)), a)) {
        const l = A.findKey(r, a);
        l && (!n || Hc(r, r[l], l, n)) && (delete r[l], (s = !0));
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
      (!t || Hc(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      A.forEach(this, (s, o) => {
        const a = A.findKey(r, o);
        if (a) {
          (n[a] = xa(s)), delete n[o];
          return;
        }
        const l = t ? n5(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = xa(s)), (r[l] = !0);
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
    const r = (this[Fh] = this[Fh] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(a) {
      const l = po(a);
      r[l] || (r5(s, a), (r[l] = !0));
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
function qc(e, t) {
  const n = this || fi,
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
function Bg(e) {
  return !!(e && e.__CANCEL__);
}
function Qs(e, t, n) {
  Y.call(this, e ?? "canceled", Y.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
A.inherits(Qs, Y, { __CANCEL__: !0 });
function Ig(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Y(
          "Request failed with status code " + n.status,
          [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function s5(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function o5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        f = r[o];
      a || (a = u), (n[s] = c), (r[s] = u);
      let d = o,
        p = 0;
      for (; d !== s; ) (p += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - a < t)) return;
      const y = f && u - f;
      return y ? Math.round((p * 1e3) / y) : void 0;
    }
  );
}
function i5(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const a = (u, f = Date.now()) => {
    (n = f), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const f = Date.now(),
        d = f - n;
      d >= r
        ? a(u, f)
        : ((s = u),
          o ||
            (o = setTimeout(() => {
              (o = null), a(s);
            }, r - d)));
    },
    () => s && a(s),
  ];
}
const el = (e, t, n = 3) => {
    let r = 0;
    const s = o5(50, 250);
    return i5((o) => {
      const a = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        c = a - r,
        u = s(c),
        f = a <= l;
      r = a;
      const d = {
        loaded: a,
        total: l,
        progress: l ? a / l : void 0,
        bytes: c,
        rate: u || void 0,
        estimated: u && l && f ? (l - a) / u : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Dh = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  zh =
    (e) =>
    (...t) =>
      A.asap(() => e(...t)),
  a5 = St.hasStandardBrowserEnv
    ? (function () {
        const t =
            St.navigator && /(msie|trident)/i.test(St.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(o) {
          let a = o;
          return (
            t && (n.setAttribute("href", a), (a = n.href)),
            n.setAttribute("href", a),
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
          function (a) {
            const l = A.isString(a) ? s(a) : a;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  l5 = St.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const a = [e + "=" + encodeURIComponent(t)];
          A.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            A.isString(r) && a.push("path=" + r),
            A.isString(s) && a.push("domain=" + s),
            o === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
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
function c5(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function u5(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ug(e, t) {
  return e && !c5(t) ? u5(e, t) : t;
}
const Vh = (e) => (e instanceof Ct ? { ...e } : e);
function Dr(e, t) {
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
  function a(u, f) {
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
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, f) => s(Vh(u), Vh(f), !0),
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
const $g = (e) => {
    const t = Dr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: a,
      auth: l,
    } = t;
    (t.headers = a = Ct.from(a)),
      (t.url = Pg(Ug(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        a.set(
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
        a.setContentType(void 0);
      else if ((c = a.getContentType()) !== !1) {
        const [u, ...f] = c
          ? c
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        a.setContentType([u || "multipart/form-data", ...f].join("; "));
      }
    }
    if (
      St.hasStandardBrowserEnv &&
      (r && A.isFunction(r) && (r = r(t)), r || (r !== !1 && a5(t.url)))
    ) {
      const u = s && o && l5.read(o);
      u && a.set(s, u);
    }
    return t;
  },
  d5 = typeof XMLHttpRequest < "u",
  f5 =
    d5 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = $g(e);
        let o = s.data;
        const a = Ct.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = s,
          f,
          d,
          p,
          y,
          m;
        function g() {
          y && y(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(f),
            s.signal && s.signal.removeEventListener("abort", f);
        }
        let S = new XMLHttpRequest();
        S.open(s.method.toUpperCase(), s.url, !0), (S.timeout = s.timeout);
        function h() {
          if (!S) return;
          const w = Ct.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders()
            ),
            k = {
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
          Ig(
            function (C) {
              n(C), g();
            },
            function (C) {
              r(C), g();
            },
            k
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = h)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (S.onabort = function () {
            S &&
              (r(new Y("Request aborted", Y.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new Y("Network Error", Y.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let j = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = s.transitional || Lg;
            s.timeoutErrorMessage && (j = s.timeoutErrorMessage),
              r(
                new Y(
                  j,
                  k.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
                  e,
                  S
                )
              ),
              (S = null);
          }),
          o === void 0 && a.setContentType(null),
          "setRequestHeader" in S &&
            A.forEach(a.toJSON(), function (j, k) {
              S.setRequestHeader(k, j);
            }),
          A.isUndefined(s.withCredentials) ||
            (S.withCredentials = !!s.withCredentials),
          l && l !== "json" && (S.responseType = s.responseType),
          u && (([p, m] = el(u, !0)), S.addEventListener("progress", p)),
          c &&
            S.upload &&
            (([d, y] = el(c)),
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
        const x = s5(s.url);
        if (x && St.protocols.indexOf(x) === -1) {
          r(new Y("Unsupported protocol " + x + ":", Y.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(o || null);
      });
    },
  p5 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (u) {
        if (!s) {
          (s = !0), l();
          const f = u instanceof Error ? u : this.reason;
          r.abort(
            f instanceof Y ? f : new Qs(f instanceof Error ? f.message : f)
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), o(new Y(`timeout ${t} of ms exceeded`, Y.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
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
  h5 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  m5 = async function* (e, t) {
    for await (const n of g5(e)) yield* h5(n, t);
  },
  g5 = async function* (e) {
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
  Wh = (e, t, n, r) => {
    const s = m5(e, t);
    let o = 0,
      a,
      l = (c) => {
        a || ((a = !0), r && r(c));
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
  Bl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Fg = Bl && typeof ReadableStream == "function",
  y5 =
    Bl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Dg = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  x5 =
    Fg &&
    Dg(() => {
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
  Hh = 64 * 1024,
  id = Fg && Dg(() => A.isReadableStream(new Response("").body)),
  tl = { stream: id && ((e) => e.body) };
Bl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !tl[t] &&
        (tl[t] = A.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Y(
                `Response type '${t}' is not supported`,
                Y.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const v5 = async (e) => {
    if (e == null) return 0;
    if (A.isBlob(e)) return e.size;
    if (A.isSpecCompliantForm(e))
      return (
        await new Request(St.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(e) || A.isArrayBuffer(e)) return e.byteLength;
    if ((A.isURLSearchParams(e) && (e = e + ""), A.isString(e)))
      return (await y5(e)).byteLength;
  },
  w5 = async (e, t) => {
    const n = A.toFiniteNumber(e.getContentLength());
    return n ?? v5(t);
  },
  S5 =
    Bl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: a,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: u,
        headers: f,
        withCredentials: d = "same-origin",
        fetchOptions: p,
      } = $g(e);
      u = u ? (u + "").toLowerCase() : "text";
      let y = p5([s, o && o.toAbortSignal()], a),
        m;
      const g =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let S;
      try {
        if (
          c &&
          x5 &&
          n !== "get" &&
          n !== "head" &&
          (S = await w5(f, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            b;
          if (
            (A.isFormData(r) &&
              (b = k.headers.get("content-type")) &&
              f.setContentType(b),
            k.body)
          ) {
            const [C, N] = Dh(S, el(zh(c)));
            r = Wh(k.body, Hh, C, N);
          }
        }
        A.isString(d) || (d = d ? "include" : "omit");
        const h = "credentials" in Request.prototype;
        m = new Request(t, {
          ...p,
          signal: y,
          method: n.toUpperCase(),
          headers: f.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: h ? d : void 0,
        });
        let x = await fetch(m);
        const w = id && (u === "stream" || u === "response");
        if (id && (l || (w && g))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((v) => {
            k[v] = x[v];
          });
          const b = A.toFiniteNumber(x.headers.get("content-length")),
            [C, N] = (l && Dh(b, el(zh(l), !0))) || [];
          x = new Response(
            Wh(x.body, Hh, C, () => {
              N && N(), g && g();
            }),
            k
          );
        }
        u = u || "text";
        let j = await tl[A.findKey(tl, u) || "text"](x, e);
        return (
          !w && g && g(),
          await new Promise((k, b) => {
            Ig(k, b, {
              data: j,
              headers: Ct.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (h) {
        throw (
          (g && g(),
          h && h.name === "TypeError" && /fetch/i.test(h.message)
            ? Object.assign(new Y("Network Error", Y.ERR_NETWORK, e, m), {
                cause: h.cause || h,
              })
            : Y.from(h, h && h.code, e, m))
        );
      }
    }),
  ad = { http: Bw, xhr: f5, fetch: S5 };
A.forEach(ad, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qh = (e) => `- ${e}`,
  C5 = (e) => A.isFunction(e) || e === null || e === !1,
  zg = {
    getAdapter: (e) => {
      e = A.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let a;
        if (
          ((r = n),
          !C5(n) && ((r = ad[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Y(`Unknown adapter '${a}'`);
        if (r) break;
        s[a || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? o.length > 1
            ? `since :
` +
              o.map(qh).join(`
`)
            : " " + qh(o[0])
          : "as no adapter specified";
        throw new Y(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ad,
  };
function Gc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Qs(null, e);
}
function Gh(e) {
  return (
    Gc(e),
    (e.headers = Ct.from(e.headers)),
    (e.data = qc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    zg
      .getAdapter(e.adapter || fi.adapter)(e)
      .then(
        function (r) {
          return (
            Gc(e),
            (r.data = qc.call(e, e.transformResponse, r)),
            (r.headers = Ct.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Bg(r) ||
              (Gc(e),
              r &&
                r.response &&
                ((r.response.data = qc.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ct.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Vg = "1.7.7",
  Lf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Lf[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Kh = {};
Lf.transitional = function (t, n, r) {
  function s(o, a) {
    return (
      "[Axios v" +
      Vg +
      "] Transitional option '" +
      o +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (o, a, l) => {
    if (t === !1)
      throw new Y(
        s(a, " has been removed" + (n ? " in " + n : "")),
        Y.ERR_DEPRECATED
      );
    return (
      n &&
        !Kh[a] &&
        ((Kh[a] = !0),
        console.warn(
          s(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, a, l) : !0
    );
  };
};
function b5(e, t, n) {
  if (typeof e != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      a = t[o];
    if (a) {
      const l = e[o],
        c = l === void 0 || a(l, o, e);
      if (c !== !0)
        throw new Y("option " + o + " must be " + c, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Y("Unknown option " + o, Y.ERR_BAD_OPTION);
  }
}
const ld = { assertOptions: b5, validators: Lf },
  Wn = ld.validators;
class Or {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new $h(), response: new $h() });
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
      (n = Dr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ld.assertOptions(
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
          : ld.assertOptions(
              s,
              { encode: Wn.function, serialize: Wn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = o && A.merge(o.common, o[n.method]);
    o &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = Ct.concat(a, o));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((c = c && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let f,
      d = 0,
      p;
    if (!c) {
      const m = [Gh.bind(this), void 0];
      for (
        m.unshift.apply(m, l),
          m.push.apply(m, u),
          p = m.length,
          f = Promise.resolve(n);
        d < p;

      )
        f = f.then(m[d++], m[d++]);
      return f;
    }
    p = l.length;
    let y = n;
    for (d = 0; d < p; ) {
      const m = l[d++],
        g = l[d++];
      try {
        y = m(y);
      } catch (S) {
        g.call(this, S);
        break;
      }
    }
    try {
      f = Gh.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = u.length; d < p; ) f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = Dr(this.defaults, t);
    const n = Ug(t.baseURL, t.url);
    return Pg(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (t) {
  Or.prototype[t] = function (n, r) {
    return this.request(
      Dr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, a, l) {
      return this.request(
        Dr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: a,
        })
      );
    };
  }
  (Or.prototype[t] = n()), (Or.prototype[t + "Form"] = n(!0));
});
class Of {
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
        const a = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (a.cancel = function () {
            r.unsubscribe(o);
          }),
          a
        );
      }),
      t(function (o, a, l) {
        r.reason || ((r.reason = new Qs(o, a, l)), n(r.reason));
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
      token: new Of(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function j5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function k5(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const cd = {
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
Object.entries(cd).forEach(([e, t]) => {
  cd[t] = e;
});
function Wg(e) {
  const t = new Or(e),
    n = Sg(Or.prototype.request, t);
  return (
    A.extend(n, Or.prototype, t, { allOwnKeys: !0 }),
    A.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Wg(Dr(e, s));
    }),
    n
  );
}
const Ne = Wg(fi);
Ne.Axios = Or;
Ne.CanceledError = Qs;
Ne.CancelToken = Of;
Ne.isCancel = Bg;
Ne.VERSION = Vg;
Ne.toFormData = Ol;
Ne.AxiosError = Y;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (t) {
  return Promise.all(t);
};
Ne.spread = j5;
Ne.isAxiosError = k5;
Ne.mergeConfig = Dr;
Ne.AxiosHeaders = Ct;
Ne.formToJSON = (e) => Og(A.isHTMLForm(e) ? new FormData(e) : e);
Ne.getAdapter = zg.getAdapter;
Ne.HttpStatusCode = cd;
Ne.default = Ne;
const ge = Ne.create({ baseURL: "https://zensportstech.com/api" });
ge.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("access_token");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
ge.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const n = localStorage.getItem("refresh_token");
      if (n)
        try {
          const r = await Ne.post(
            "https://zensportstech.com/api/token/refresh/",
            { refresh: n }
          );
          return (
            localStorage.setItem("access_token", r.data.access),
            (t.headers.Authorization = `Bearer ${r.data.access}`),
            Ne(t)
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
const Hg = async ({ setPlans: e }) => {
    try {
      const t = await ge.get("plans/all/");
      console.log(t.data), e(t.data);
    } catch (t) {
      console.log("Error fetching Plans - ", t);
    }
  },
  N5 = async (e) => {
    try {
      console.log("Plan Id ", e.id);
      const t = await ge.post("plans/subscribe/", { plan_id: e.id });
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
function qg(e) {
  if (!An(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = qg(e[n]);
    }),
    t
  );
}
function Pt(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    An(e) &&
      An(t) &&
      Object.keys(t).forEach((s) => {
        An(t[s]) && Object.prototype.hasOwnProperty.call(e, s) && An(e[s])
          ? (r[s] = Pt(e[s], t[s], n))
          : n.clone
          ? (r[s] = An(t[s]) ? qg(t[s]) : t[s])
          : (r[s] = t[s]);
      }),
    r
  );
}
function zr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Ds(e) {
  if (typeof e != "string") throw new Error(zr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ud(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const s = r;
      if (s === "components" || s === "slots") n[s] = { ...e[s], ...n[s] };
      else if (s === "componentsProps" || s === "slotProps") {
        const o = e[s],
          a = t[s];
        if (!a) n[s] = o || {};
        else if (!o) n[s] = a;
        else {
          n[s] = { ...a };
          for (const l in o)
            if (Object.prototype.hasOwnProperty.call(o, l)) {
              const c = l;
              n[s][c] = ud(o[c], a[c]);
            }
        }
      } else n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
function E5(e, t, n = void 0) {
  const r = {};
  for (const s in e) {
    const o = e[s];
    let a = "",
      l = !0;
    for (let c = 0; c < o.length; c += 1) {
      const u = o[c];
      u &&
        ((a += (l === !0 ? "" : " ") + t(u)),
        (l = !1),
        n && n[u] && (a += " " + n[u]));
    }
    r[s] = a;
  }
  return r;
}
const Zh = (e) => e,
  T5 = () => {
    let e = Zh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Zh;
      },
    };
  },
  _5 = T5(),
  R5 = {
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
function Gg(e, t, n = "Mui") {
  const r = R5[t];
  return r ? `${n}-${r}` : `${_5.generate(e)}-${t}`;
}
function A5(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((s) => {
      r[s] = Gg(e, s, n);
    }),
    r
  );
}
function M5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Kg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Kg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function P5() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Kg(e)) && (r && (r += " "), (r += t));
  return r;
}
function Ao(e, t) {
  return t ? Pt(e, t, { clone: !1 }) : e;
}
function L5(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, s) => {
      var a, l;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((a = r.match(o)) == null ? void 0 : a[1]) || 0) -
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
function O5(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function B5(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, s] = n,
    o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(s).up(o);
}
function I5(e) {
  const t = (o, a) => o.replace("@media", a ? `@container ${a}` : "@container");
  function n(o, a) {
    (o.up = (...l) => t(e.breakpoints.up(...l), a)),
      (o.down = (...l) => t(e.breakpoints.down(...l), a)),
      (o.between = (...l) => t(e.breakpoints.between(...l), a)),
      (o.only = (...l) => t(e.breakpoints.only(...l), a)),
      (o.not = (...l) => {
        const c = t(e.breakpoints.not(...l), a);
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
const Il = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Yh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Il[e]}px)`,
  },
  U5 = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : Il[t] || t;
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
    const o = r.breakpoints || Yh;
    return t.reduce((a, l, c) => ((a[o.up(o.keys[c])] = n(t[c])), a), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Yh;
    return Object.keys(t).reduce((a, l) => {
      if (O5(o.keys, l)) {
        const c = B5(r.containerQueries ? r : U5, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(o.values || Il).includes(l)) {
        const c = o.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function $5(e = {}) {
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
function F5(e, t) {
  return e.reduce((n, r) => {
    const s = n[r];
    return (!s || Object.keys(s).length === 0) && delete n[r], n;
  }, t);
}
function Ul(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((s, o) => (s && s[o] ? s[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, s) => (r && r[s] != null ? r[s] : null), e);
}
function nl(e, t, n, r = n) {
  let s;
  return (
    typeof e == "function"
      ? (s = e(n))
      : Array.isArray(e)
      ? (s = e[n] || r)
      : (s = Ul(e, n) || r),
    t && (s = t(s, r, e)),
    s
  );
}
function Ie(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: s } = e,
    o = (a) => {
      if (a[t] == null) return null;
      const l = a[t],
        c = a.theme,
        u = Ul(c, r) || {};
      return $n(a, l, (d) => {
        let p = nl(u, s, d);
        return (
          d === p &&
            typeof d == "string" &&
            (p = nl(u, s, `${t}${d === "default" ? "" : Ds(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function D5(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const z5 = { m: "margin", p: "padding" },
  V5 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Qh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  W5 = D5((e) => {
    if (e.length > 2)
      if (Qh[e]) e = Qh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = z5[t],
      s = V5[n] || "";
    return Array.isArray(s) ? s.map((o) => r + o) : [r + s];
  }),
  Bf = [
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
  If = [
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
[...Bf, ...If];
function pi(e, t, n, r) {
  const s = Ul(e, t, !0) ?? n;
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
        const a = Math.abs(o),
          l = s[a];
        return o >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
      }
    : typeof s == "function"
    ? s
    : () => {};
}
function Uf(e) {
  return pi(e, "spacing", 8);
}
function hi(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function H5(e, t) {
  return (n) => e.reduce((r, s) => ((r[s] = hi(t, n)), r), {});
}
function q5(e, t, n, r) {
  if (!t.includes(n)) return null;
  const s = W5(n),
    o = H5(s, r),
    a = e[n];
  return $n(e, a, o);
}
function Zg(e, t) {
  const n = Uf(e.theme);
  return Object.keys(e)
    .map((r) => q5(e, t, r, n))
    .reduce(Ao, {});
}
function Re(e) {
  return Zg(e, Bf);
}
Re.propTypes = {};
Re.filterProps = Bf;
function Ae(e) {
  return Zg(e, If);
}
Ae.propTypes = {};
Ae.filterProps = If;
function $l(...e) {
  const t = e.reduce(
      (r, s) => (
        s.filterProps.forEach((o) => {
          r[o] = s;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((s, o) => (t[o] ? Ao(s, t[o](r)) : s), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), [])),
    n
  );
}
function Vt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Zt(e, t) {
  return Ie({ prop: e, themeKey: "borders", transform: t });
}
const G5 = Zt("border", Vt),
  K5 = Zt("borderTop", Vt),
  Z5 = Zt("borderRight", Vt),
  Y5 = Zt("borderBottom", Vt),
  Q5 = Zt("borderLeft", Vt),
  X5 = Zt("borderColor"),
  J5 = Zt("borderTopColor"),
  e8 = Zt("borderRightColor"),
  t8 = Zt("borderBottomColor"),
  n8 = Zt("borderLeftColor"),
  r8 = Zt("outline", Vt),
  s8 = Zt("outlineColor"),
  Fl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = pi(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: hi(t, r) });
      return $n(e, e.borderRadius, n);
    }
    return null;
  };
Fl.propTypes = {};
Fl.filterProps = ["borderRadius"];
$l(G5, K5, Z5, Y5, Q5, X5, J5, e8, t8, n8, Fl, r8, s8);
const Dl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = pi(e.theme, "spacing", 8),
      n = (r) => ({ gap: hi(t, r) });
    return $n(e, e.gap, n);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["gap"];
const zl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = pi(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: hi(t, r) });
    return $n(e, e.columnGap, n);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["columnGap"];
const Vl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = pi(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: hi(t, r) });
    return $n(e, e.rowGap, n);
  }
  return null;
};
Vl.propTypes = {};
Vl.filterProps = ["rowGap"];
const o8 = Ie({ prop: "gridColumn" }),
  i8 = Ie({ prop: "gridRow" }),
  a8 = Ie({ prop: "gridAutoFlow" }),
  l8 = Ie({ prop: "gridAutoColumns" }),
  c8 = Ie({ prop: "gridAutoRows" }),
  u8 = Ie({ prop: "gridTemplateColumns" }),
  d8 = Ie({ prop: "gridTemplateRows" }),
  f8 = Ie({ prop: "gridTemplateAreas" }),
  p8 = Ie({ prop: "gridArea" });
$l(Dl, zl, Vl, o8, i8, a8, l8, c8, u8, d8, f8, p8);
function Rs(e, t) {
  return t === "grey" ? t : e;
}
const h8 = Ie({ prop: "color", themeKey: "palette", transform: Rs }),
  m8 = Ie({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Rs,
  }),
  g8 = Ie({ prop: "backgroundColor", themeKey: "palette", transform: Rs });
$l(h8, m8, g8);
function _t(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const y8 = Ie({ prop: "width", transform: _t }),
  $f = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var s, o, a, l, c;
        const r =
          ((a =
            (o = (s = e.theme) == null ? void 0 : s.breakpoints) == null
              ? void 0
              : o.values) == null
            ? void 0
            : a[n]) || Il[n];
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
$f.filterProps = ["maxWidth"];
const x8 = Ie({ prop: "minWidth", transform: _t }),
  v8 = Ie({ prop: "height", transform: _t }),
  w8 = Ie({ prop: "maxHeight", transform: _t }),
  S8 = Ie({ prop: "minHeight", transform: _t });
Ie({ prop: "size", cssProperty: "width", transform: _t });
Ie({ prop: "size", cssProperty: "height", transform: _t });
const C8 = Ie({ prop: "boxSizing" });
$l(y8, $f, x8, v8, w8, S8, C8);
const Wl = {
  border: { themeKey: "borders", transform: Vt },
  borderTop: { themeKey: "borders", transform: Vt },
  borderRight: { themeKey: "borders", transform: Vt },
  borderBottom: { themeKey: "borders", transform: Vt },
  borderLeft: { themeKey: "borders", transform: Vt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Vt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Fl },
  color: { themeKey: "palette", transform: Rs },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Rs,
  },
  backgroundColor: { themeKey: "palette", transform: Rs },
  p: { style: Ae },
  pt: { style: Ae },
  pr: { style: Ae },
  pb: { style: Ae },
  pl: { style: Ae },
  px: { style: Ae },
  py: { style: Ae },
  padding: { style: Ae },
  paddingTop: { style: Ae },
  paddingRight: { style: Ae },
  paddingBottom: { style: Ae },
  paddingLeft: { style: Ae },
  paddingX: { style: Ae },
  paddingY: { style: Ae },
  paddingInline: { style: Ae },
  paddingInlineStart: { style: Ae },
  paddingInlineEnd: { style: Ae },
  paddingBlock: { style: Ae },
  paddingBlockStart: { style: Ae },
  paddingBlockEnd: { style: Ae },
  m: { style: Re },
  mt: { style: Re },
  mr: { style: Re },
  mb: { style: Re },
  ml: { style: Re },
  mx: { style: Re },
  my: { style: Re },
  margin: { style: Re },
  marginTop: { style: Re },
  marginRight: { style: Re },
  marginBottom: { style: Re },
  marginLeft: { style: Re },
  marginX: { style: Re },
  marginY: { style: Re },
  marginInline: { style: Re },
  marginInlineStart: { style: Re },
  marginInlineEnd: { style: Re },
  marginBlock: { style: Re },
  marginBlockStart: { style: Re },
  marginBlockEnd: { style: Re },
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
  gap: { style: Dl },
  rowGap: { style: Vl },
  columnGap: { style: zl },
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
  maxWidth: { style: $f },
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
function b8(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function j8(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function k8() {
  function e(n, r, s, o) {
    const a = { [n]: r, theme: s },
      l = o[n];
    if (!l) return { [n]: r };
    const { cssProperty: c = n, themeKey: u, transform: f, style: d } = l;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = Ul(s, u) || {};
    return d
      ? d(a)
      : $n(a, r, (m) => {
          let g = nl(p, f, m);
          return (
            m === g &&
              typeof m == "string" &&
              (g = nl(p, f, `${n}${m === "default" ? "" : Ds(m)}`, m)),
            c === !1 ? g : { [c]: g }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: s = {} } = n || {};
    if (!r) return null;
    const o = s.unstable_sxConfig ?? Wl;
    function a(l) {
      let c = l;
      if (typeof l == "function") c = l(s);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const u = $5(s.breakpoints),
        f = Object.keys(u);
      let d = u;
      return (
        Object.keys(c).forEach((p) => {
          const y = j8(c[p], s);
          if (y != null)
            if (typeof y == "object")
              if (o[p]) d = Ao(d, e(p, y, s, o));
              else {
                const m = $n({ theme: s }, y, (g) => ({ [p]: g }));
                b8(m, y) ? (d[p] = t({ sx: y, theme: s })) : (d = Ao(d, m));
              }
            else d = Ao(d, e(p, y, s, o));
        }),
        L5(s, F5(f, d))
      );
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const mi = k8();
mi.filterProps = ["sx"];
function dd() {
  return (
    (dd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dd.apply(null, arguments)
  );
}
function Yg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var N8 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  E8 = Yg(function (e) {
    return (
      N8.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  T8 = !1;
function _8(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function R8(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var A8 = (function () {
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
        (this.isSpeedy = n.speedy === void 0 ? !T8 : n.speedy),
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
          this._insertTag(R8(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = _8(s);
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
  nt = "-ms-",
  rl = "-moz-",
  se = "-webkit-",
  Qg = "comm",
  Ff = "rule",
  Df = "decl",
  M8 = "@import",
  Xg = "@keyframes",
  P8 = "@layer",
  L8 = Math.abs,
  Hl = String.fromCharCode,
  O8 = Object.assign;
function B8(e, t) {
  return Ye(e, 0) ^ 45
    ? (((((((t << 2) ^ Ye(e, 0)) << 2) ^ Ye(e, 1)) << 2) ^ Ye(e, 2)) << 2) ^
        Ye(e, 3)
    : 0;
}
function Jg(e) {
  return e.trim();
}
function I8(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, n) {
  return e.replace(t, n);
}
function fd(e, t) {
  return e.indexOf(t);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xo(e, t, n) {
  return e.slice(t, n);
}
function pn(e) {
  return e.length;
}
function zf(e) {
  return e.length;
}
function Ki(e, t) {
  return t.push(e), e;
}
function U8(e, t) {
  return e.map(t).join("");
}
var ql = 1,
  zs = 1,
  ey = 0,
  bt = 0,
  $e = 0,
  Xs = "";
function Gl(e, t, n, r, s, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: s,
    children: o,
    line: ql,
    column: zs,
    length: a,
    return: "",
  };
}
function ho(e, t) {
  return O8(Gl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $8() {
  return $e;
}
function F8() {
  return (
    ($e = bt > 0 ? Ye(Xs, --bt) : 0), zs--, $e === 10 && ((zs = 1), ql--), $e
  );
}
function Lt() {
  return (
    ($e = bt < ey ? Ye(Xs, bt++) : 0), zs++, $e === 10 && ((zs = 1), ql++), $e
  );
}
function vn() {
  return Ye(Xs, bt);
}
function va() {
  return bt;
}
function gi(e, t) {
  return Xo(Xs, e, t);
}
function Jo(e) {
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
function ty(e) {
  return (ql = zs = 1), (ey = pn((Xs = e))), (bt = 0), [];
}
function ny(e) {
  return (Xs = ""), e;
}
function wa(e) {
  return Jg(gi(bt - 1, pd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function D8(e) {
  for (; ($e = vn()) && $e < 33; ) Lt();
  return Jo(e) > 2 || Jo($e) > 3 ? "" : " ";
}
function z8(e, t) {
  for (
    ;
    --t &&
    Lt() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return gi(e, va() + (t < 6 && vn() == 32 && Lt() == 32));
}
function pd(e) {
  for (; Lt(); )
    switch ($e) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pd($e);
        break;
      case 40:
        e === 41 && pd(e);
        break;
      case 92:
        Lt();
        break;
    }
  return bt;
}
function V8(e, t) {
  for (; Lt() && e + $e !== 57; ) if (e + $e === 84 && vn() === 47) break;
  return "/*" + gi(t, bt - 1) + "*" + Hl(e === 47 ? e : Lt());
}
function W8(e) {
  for (; !Jo(vn()); ) Lt();
  return gi(e, bt);
}
function H8(e) {
  return ny(Sa("", null, null, null, [""], (e = ty(e)), 0, [0], e));
}
function Sa(e, t, n, r, s, o, a, l, c) {
  for (
    var u = 0,
      f = 0,
      d = a,
      p = 0,
      y = 0,
      m = 0,
      g = 1,
      S = 1,
      h = 1,
      x = 0,
      w = "",
      j = s,
      k = o,
      b = r,
      C = w;
    S;

  )
    switch (((m = x), (x = Lt()))) {
      case 40:
        if (m != 108 && Ye(C, d - 1) == 58) {
          fd((C += oe(wa(x), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += wa(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += D8(m);
        break;
      case 92:
        C += z8(va() - 1, 7);
        continue;
      case 47:
        switch (vn()) {
          case 42:
          case 47:
            Ki(q8(V8(Lt(), va()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        l[u++] = pn(C) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            h == -1 && (C = oe(C, /\f/g, "")),
              y > 0 &&
                pn(C) - d &&
                Ki(
                  y > 32
                    ? Jh(C + ";", r, n, d - 1)
                    : Jh(oe(C, " ", "") + ";", r, n, d - 2),
                  c
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Ki((b = Xh(C, t, n, u, f, s, l, w, (j = []), (k = []), d)), o),
              x === 123)
            )
              if (f === 0) Sa(C, t, b, b, j, o, d, l, k);
              else
                switch (p === 99 && Ye(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sa(
                      e,
                      b,
                      b,
                      r && Ki(Xh(e, b, b, 0, 0, s, l, w, s, (j = []), d), k),
                      s,
                      k,
                      d,
                      l,
                      r ? j : k
                    );
                    break;
                  default:
                    Sa(C, b, b, b, [""], k, 0, l, k);
                }
        }
        (u = f = y = 0), (g = h = 1), (w = C = ""), (d = a);
        break;
      case 58:
        (d = 1 + pn(C)), (y = m);
      default:
        if (g < 1) {
          if (x == 123) --g;
          else if (x == 125 && g++ == 0 && F8() == 125) continue;
        }
        switch (((C += Hl(x)), x * g)) {
          case 38:
            h = f > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (l[u++] = (pn(C) - 1) * h), (h = 1);
            break;
          case 64:
            vn() === 45 && (C += wa(Lt())),
              (p = vn()),
              (f = d = pn((w = C += W8(va())))),
              x++;
            break;
          case 45:
            m === 45 && pn(C) == 2 && (g = 0);
        }
    }
  return o;
}
function Xh(e, t, n, r, s, o, a, l, c, u, f) {
  for (
    var d = s - 1, p = s === 0 ? o : [""], y = zf(p), m = 0, g = 0, S = 0;
    m < r;
    ++m
  )
    for (var h = 0, x = Xo(e, d + 1, (d = L8((g = a[m])))), w = e; h < y; ++h)
      (w = Jg(g > 0 ? p[h] + " " + x : oe(x, /&\f/g, p[h]))) && (c[S++] = w);
  return Gl(e, t, n, s === 0 ? Ff : l, c, u, f);
}
function q8(e, t, n) {
  return Gl(e, t, n, Qg, Hl($8()), Xo(e, 2, -2), 0);
}
function Jh(e, t, n, r) {
  return Gl(e, t, n, Df, Xo(e, 0, r), Xo(e, r + 1, -1), r);
}
function As(e, t) {
  for (var n = "", r = zf(e), s = 0; s < r; s++) n += t(e[s], s, e, t) || "";
  return n;
}
function G8(e, t, n, r) {
  switch (e.type) {
    case P8:
      if (e.children.length) break;
    case M8:
    case Df:
      return (e.return = e.return || e.value);
    case Qg:
      return "";
    case Xg:
      return (e.return = e.value + "{" + As(e.children, r) + "}");
    case Ff:
      e.value = e.props.join(",");
  }
  return pn((n = As(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function K8(e) {
  var t = zf(e);
  return function (n, r, s, o) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, s, o) || "";
    return a;
  };
}
function Z8(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Y8 = function (t, n, r) {
    for (
      var s = 0, o = 0;
      (s = o), (o = vn()), s === 38 && o === 12 && (n[r] = 1), !Jo(o);

    )
      Lt();
    return gi(t, bt);
  },
  Q8 = function (t, n) {
    var r = -1,
      s = 44;
    do
      switch (Jo(s)) {
        case 0:
          s === 38 && vn() === 12 && (n[r] = 1), (t[r] += Y8(bt - 1, n, r));
          break;
        case 2:
          t[r] += wa(s);
          break;
        case 4:
          if (s === 44) {
            (t[++r] = vn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Hl(s);
      }
    while ((s = Lt()));
    return t;
  },
  X8 = function (t, n) {
    return ny(Q8(ty(t), n));
  },
  em = new WeakMap(),
  J8 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          s = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !em.get(r)) &&
        !s
      ) {
        em.set(t, !0);
        for (
          var o = [], a = X8(n, o), l = r.props, c = 0, u = 0;
          c < a.length;
          c++
        )
          for (var f = 0; f < l.length; f++, u++)
            t.props[u] = o[c] ? a[c].replace(/&\f/g, l[f]) : l[f] + " " + a[c];
      }
    }
  },
  e6 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function ry(e, t) {
  switch (B8(e, t)) {
    case 5103:
      return se + "print-" + e + e;
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
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + rl + e + nt + e + e;
    case 6828:
    case 4268:
      return se + e + nt + e + e;
    case 6165:
      return se + e + nt + "flex-" + e + e;
    case 5187:
      return (
        se + e + oe(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + nt + "flex-$1$2") + e
      );
    case 5443:
      return se + e + nt + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        se +
        e +
        nt +
        "flex-line-pack" +
        oe(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return se + e + nt + oe(e, "shrink", "negative") + e;
    case 5292:
      return se + e + nt + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        se +
        "box-" +
        oe(e, "-grow", "") +
        se +
        e +
        nt +
        oe(e, "grow", "positive") +
        e
      );
    case 4554:
      return se + oe(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return (
        oe(
          oe(oe(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return (
        oe(
          oe(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + nt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        se +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, se + "$1$2") + e;
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
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45) break;
          case 102:
            return (
              oe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  se +
                  "$2-$3$1" +
                  rl +
                  (Ye(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fd(e, "stretch")
              ? ry(oe(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ye(e, t + 1) !== 115) break;
    case 6444:
      switch (Ye(e, pn(e) - 3 - (~fd(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + se) + e;
        case 101:
          return (
            oe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                se +
                (Ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                se +
                "$2$3$1" +
                nt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return se + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + nt + e + e;
  }
  return e;
}
var t6 = function (t, n, r, s) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Df:
          t.return = ry(t.value, t.length);
          break;
        case Xg:
          return As([ho(t, { value: oe(t.value, "@", "@" + se) })], s);
        case Ff:
          if (t.length)
            return U8(t.props, function (o) {
              switch (I8(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return As(
                    [ho(t, { props: [oe(o, /:(read-\w+)/, ":" + rl + "$1")] })],
                    s
                  );
                case "::placeholder":
                  return As(
                    [
                      ho(t, {
                        props: [oe(o, /:(plac\w+)/, ":" + se + "input-$1")],
                      }),
                      ho(t, { props: [oe(o, /:(plac\w+)/, ":" + rl + "$1")] }),
                      ho(t, { props: [oe(o, /:(plac\w+)/, nt + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  n6 = [t6],
  r6 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var s = t.stylisPlugins || n6,
      o = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), h = 1;
            h < S.length;
            h++
          )
            o[S[h]] = !0;
          l.push(g);
        }
      );
    var c,
      u = [J8, e6];
    {
      var f,
        d = [
          G8,
          Z8(function (g) {
            f.insert(g);
          }),
        ],
        p = K8(u.concat(s, d)),
        y = function (S) {
          return As(H8(S), p);
        };
      c = function (S, h, x, w) {
        (f = x),
          y(S ? S + "{" + h.styles + "}" : h.styles),
          w && (m.inserted[h.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new A8({
        key: n,
        container: a,
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
    return m.sheet.hydrate(l), m;
  },
  s6 = !0;
function o6(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (s) {
      e[s] !== void 0 ? t.push(e[s] + ";") : (r += s + " ");
    }),
    r
  );
}
var sy = function (t, n, r) {
    var s = t.key + "-" + n.name;
    (r === !1 || s6 === !1) &&
      t.registered[s] === void 0 &&
      (t.registered[s] = n.styles);
  },
  i6 = function (t, n, r) {
    sy(t, n, r);
    var s = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + s : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function a6(e) {
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
var l6 = {
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
  c6 = !1,
  u6 = /[A-Z]|^ms/g,
  d6 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  oy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  tm = function (t) {
    return t != null && typeof t != "boolean";
  },
  Kc = Yg(function (e) {
    return oy(e) ? e : e.replace(u6, "-$&").toLowerCase();
  }),
  nm = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(d6, function (r, s, o) {
            return (hn = { name: s, styles: o, next: hn }), s;
          });
    }
    return l6[t] !== 1 && !oy(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  f6 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ei(e, t, n) {
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
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (hn = { name: a.name, styles: a.styles, next: hn }), (a = a.next);
        var l = o.styles + ";";
        return l;
      }
      return p6(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = hn,
          u = n(e);
        return (hn = c), ei(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null) return f;
  var d = t[f];
  return d !== void 0 ? d : f;
}
function p6(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++) r += ei(e, t, n[s]) + ";";
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0
          ? (r += o + "{" + t[l] + "}")
          : tm(l) && (r += Kc(o) + ":" + nm(o, l) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && c6) throw new Error(f6);
        if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var c = 0; c < a.length; c++)
            tm(a[c]) && (r += Kc(o) + ":" + nm(o, a[c]) + ";");
        else {
          var u = ei(e, t, a);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Kc(o) + ":" + u + ";";
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
var rm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  hn;
function h6(e, t, n) {
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
  if (o == null || o.raw === void 0) (r = !1), (s += ei(n, t, o));
  else {
    var a = o;
    s += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (((s += ei(n, t, e[l])), r)) {
      var c = o;
      s += c[l];
    }
  rm.lastIndex = 0;
  for (var u = "", f; (f = rm.exec(s)) !== null; ) u += "-" + f[1];
  var d = a6(s) + u;
  return { name: d, styles: s, next: hn };
}
var m6 = function (t) {
    return t();
  },
  g6 = iu.useInsertionEffect ? iu.useInsertionEffect : !1,
  y6 = g6 || m6,
  iy = E.createContext(typeof HTMLElement < "u" ? r6({ key: "css" }) : null);
iy.Provider;
var x6 = function (t) {
    return E.forwardRef(function (n, r) {
      var s = E.useContext(iy);
      return t(n, s, r);
    });
  },
  v6 = E.createContext({}),
  w6 = E8,
  S6 = function (t) {
    return t !== "theme";
  },
  sm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? w6 : S6;
  },
  om = function (t, n, r) {
    var s;
    if (n) {
      var o = n.shouldForwardProp;
      s =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof s != "function" && r && (s = t.__emotion_forwardProp), s;
  },
  C6 = !1,
  b6 = function (t) {
    var n = t.cache,
      r = t.serialized,
      s = t.isStringTag;
    return (
      sy(n, r, s),
      y6(function () {
        return i6(n, r, s);
      }),
      null
    );
  },
  j6 = function e(t, n) {
    var r = t.__emotion_real === t,
      s = (r && t.__emotion_base) || t,
      o,
      a;
    n !== void 0 && ((o = n.label), (a = n.target));
    var l = om(t, n, r),
      c = l || sm(s),
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
      var m = x6(function (g, S, h) {
        var x = (u && g.as) || s,
          w = "",
          j = [],
          k = g;
        if (g.theme == null) {
          k = {};
          for (var b in g) k[b] = g[b];
          k.theme = E.useContext(v6);
        }
        typeof g.className == "string"
          ? (w = o6(S.registered, j, g.className))
          : g.className != null && (w = g.className + " ");
        var C = h6(d.concat(j), S.registered, k);
        (w += S.key + "-" + C.name), a !== void 0 && (w += " " + a);
        var N = u && l === void 0 ? sm(x) : c,
          v = {};
        for (var R in g) (u && R === "as") || (N(R) && (v[R] = g[R]));
        return (
          (v.className = w),
          h && (v.ref = h),
          E.createElement(
            E.Fragment,
            null,
            E.createElement(b6, {
              cache: S,
              serialized: C,
              isStringTag: typeof x == "string",
            }),
            E.createElement(x, v)
          )
        );
      });
      return (
        (m.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = s),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = l),
        Object.defineProperty(m, "toString", {
          value: function () {
            return a === void 0 && C6 ? "NO_COMPONENT_SELECTOR" : "." + a;
          },
        }),
        (m.withComponent = function (g, S) {
          return e(g, dd({}, n, S, { shouldForwardProp: om(m, S, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  k6 = [
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
  hd = j6.bind();
k6.forEach(function (e) {
  hd[e] = hd(e);
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function N6(e, t) {
  return hd(e, t);
}
const E6 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  T6 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
    );
  };
function _6(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...s
    } = e,
    o = T6(t),
    a = Object.keys(o);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, y) {
    const m = a.indexOf(y);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (m !== -1 && typeof t[a[m]] == "number" ? t[a[m]] : y) - r / 100
    }${n})`;
  }
  function f(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function d(p) {
    const y = a.indexOf(p);
    return y === 0
      ? l(a[1])
      : y === a.length - 1
      ? c(a[y])
      : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
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
const R6 = { borderRadius: 4 };
function ay(e = 8, t = Uf({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((o) => {
        const a = t(o);
        return typeof a == "number" ? `${a}px` : a;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function A6(e, t) {
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
function ly(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: s,
      shape: o = {},
      ...a
    } = e,
    l = _6(n),
    c = ay(s);
  let u = Pt(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: c,
      shape: { ...R6, ...o },
    },
    a
  );
  return (
    (u = I5(u)),
    (u.applyStyles = A6),
    (u = t.reduce((f, d) => Pt(f, d), u)),
    (u.unstable_sxConfig = {
      ...Wl,
      ...(a == null ? void 0 : a.unstable_sxConfig),
    }),
    (u.unstable_sx = function (d) {
      return mi({ sx: d, theme: this });
    }),
    u
  );
}
const M6 = ly();
function Zc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function md(e, t, n) {
  return O6(t) ? n : t[e] || t;
}
const Zi = Symbol("mui.processed_props");
function Yi(e, t, n) {
  if (Zi in e) return e[Zi];
  const r = { ...e, theme: md(t, e.theme, n) };
  return (e[Zi] = r), (r[Zi] = r), r;
}
function P6(e) {
  return e ? (t, n) => n[e] : null;
}
function Ca(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n)) return n.flatMap((s) => Ca(s, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const { variants: s, ...o } = n;
    let a = o,
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
      Array.isArray(a) || (a = [a]),
        typeof u.style == "function"
          ? (l ?? (l = { ...t, ...t.ownerState, ownerState: t.ownerState }),
            a.push(u.style(l)))
          : a.push(u.style);
    }
    return a;
  }
  return n;
}
function L6(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = M6,
      rootShouldForwardProp: r = Zc,
      slotShouldForwardProp: s = Zc,
    } = e,
    o = (l) => mi(Yi(l, t, n));
  return (
    (o.__mui_systemSx = !0),
    (l, c = {}) => {
      E6(l, (b) => b.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: u,
          slot: f,
          skipVariantsResolver: d,
          skipSx: p,
          overridesResolver: y = P6(I6(f)),
          ...m
        } = c,
        g = d !== void 0 ? d : (f && f !== "Root" && f !== "root") || !1,
        S = p || !1;
      let h,
        x = Zc;
      f === "Root" || f === "root"
        ? (x = r)
        : f
        ? (x = s)
        : B6(l) && (x = void 0);
      const w = N6(l, { shouldForwardProp: x, label: h, ...m }),
        j = (b) =>
          (typeof b == "function" && b.__emotion_real !== b) || An(b)
            ? (C) => Ca(b, Yi(C, t, n))
            : b,
        k = (b, ...C) => {
          let N = j(b);
          const v = C ? C.map(j) : [];
          u &&
            y &&
            v.push((I) => {
              const D = md(t, I.theme, n);
              if (
                !D.components ||
                !D.components[u] ||
                !D.components[u].styleOverrides
              )
                return null;
              const q = D.components[u].styleOverrides,
                H = {},
                $ = Yi(I, t, n);
              for (const L in q) H[L] = Ca(q[L], $);
              return y(I, H);
            }),
            u &&
              !g &&
              v.push((I) => {
                var H, $;
                const D = md(t, I.theme, n),
                  q =
                    ($ =
                      (H = D == null ? void 0 : D.components) == null
                        ? void 0
                        : H[u]) == null
                      ? void 0
                      : $.variants;
                return q ? Ca({ variants: q }, Yi(I, t, n)) : null;
              }),
            S || v.push(o);
          const R = v.length - C.length;
          if (Array.isArray(b) && R > 0) {
            const I = new Array(R).fill("");
            (N = [...b, ...I]), (N.raw = [...b.raw, ...I]);
          }
          const M = w(N, ...v);
          return l.muiName && (M.muiName = l.muiName), M;
        };
      return w.withConfig && (k.withConfig = w.withConfig), k;
    }
  );
}
function O6(e) {
  for (const t in e) return !1;
  return !0;
}
function B6(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function I6(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Vf(e, t = 0, n = 1) {
  return M5(e, t, n);
}
function U6(e) {
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
function gr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return gr(U6(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(zr(9, e));
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
      throw new Error(zr(10, s));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: s }
  );
}
const $6 = (e) => {
    const t = gr(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  wo = (e, t) => {
    try {
      return $6(e);
    } catch {
      return e;
    }
  };
function Kl(e) {
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
function cy(e) {
  e = gr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    s = t[2] / 100,
    o = r * Math.min(s, 1 - s),
    a = (u, f = (u + n / 30) % 12) =>
      s - o * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), c.push(t[3])), Kl({ type: l, values: c })
  );
}
function gd(e) {
  e = gr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? gr(cy(e)).values : e.values;
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
function F6(e, t) {
  const n = gd(e),
    r = gd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function D6(e, t) {
  return (
    (e = gr(e)),
    (t = Vf(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Kl(e)
  );
}
function Qi(e, t, n) {
  try {
    return D6(e, t);
  } catch {
    return e;
  }
}
function Wf(e, t) {
  if (((e = gr(e)), (t = Vf(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Kl(e);
}
function he(e, t, n) {
  try {
    return Wf(e, t);
  } catch {
    return e;
  }
}
function Hf(e, t) {
  if (((e = gr(e)), (t = Vf(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Kl(e);
}
function me(e, t, n) {
  try {
    return Hf(e, t);
  } catch {
    return e;
  }
}
function z6(e, t = 0.15) {
  return gd(e) > 0.5 ? Wf(e, t) : Hf(e, t);
}
function Xi(e, t, n) {
  try {
    return z6(e, t);
  } catch {
    return e;
  }
}
const V6 = E.createContext(void 0);
function W6(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const s = t.components[n];
  return s.defaultProps
    ? ud(s.defaultProps, r)
    : !s.styleOverrides && !s.variants
    ? ud(s, r)
    : r;
}
function H6({ props: e, name: t }) {
  const n = E.useContext(V6);
  return W6({ props: e, name: t, theme: { components: n } });
}
function q6(e = "") {
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
const im = (e, t, n, r = []) => {
    let s = e;
    t.forEach((o, a) => {
      a === t.length - 1
        ? Array.isArray(s)
          ? (s[Number(o)] = n)
          : s && typeof s == "object" && (s[o] = n)
        : s &&
          typeof s == "object" &&
          (s[o] || (s[o] = r.includes(o) ? [] : {}), (s = s[o]));
    });
  },
  G6 = (e, t, n) => {
    function r(s, o = [], a = []) {
      Object.entries(s).forEach(([l, c]) => {
        (!n || (n && !n([...o, l]))) &&
          c != null &&
          (typeof c == "object" && Object.keys(c).length > 0
            ? r(c, [...o, l], Array.isArray(c) ? [...a, l] : a)
            : t([...o, l], c, a));
      });
    }
    r(e);
  },
  K6 = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
        ? t
        : `${t}px`
      : t;
function Yc(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    s = {},
    o = {},
    a = {};
  return (
    G6(
      e,
      (l, c, u) => {
        if (
          (typeof c == "string" || typeof c == "number") &&
          (!r || !r(l, c))
        ) {
          const f = `--${n ? `${n}-` : ""}${l.join("-")}`,
            d = K6(l, c);
          Object.assign(s, { [f]: d }),
            im(o, l, `var(${f})`, u),
            im(a, l, `var(${f}, ${d})`, u);
        }
      },
      (l) => l[0] === "vars"
    ),
    { css: s, vars: o, varsWithDefaults: a }
  );
}
function Z6(e, t = {}) {
  const {
      getSelector: n = S,
      disableCssColorScheme: r,
      colorSchemeSelector: s,
    } = t,
    {
      colorSchemes: o = {},
      components: a,
      defaultColorScheme: l = "light",
      ...c
    } = e,
    { vars: u, css: f, varsWithDefaults: d } = Yc(c, t);
  let p = d;
  const y = {},
    { [l]: m, ...g } = o;
  if (
    (Object.entries(g || {}).forEach(([w, j]) => {
      const { vars: k, css: b, varsWithDefaults: C } = Yc(j, t);
      (p = Pt(p, C)), (y[w] = { css: b, vars: k });
    }),
    m)
  ) {
    const { css: w, vars: j, varsWithDefaults: k } = Yc(m, t);
    (p = Pt(p, k)), (y[l] = { css: w, vars: j });
  }
  function S(w, j) {
    var b, C;
    let k = s;
    if (
      (s === "class" && (k = ".%s"),
      s === "data" && (k = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (k = `[${s}="%s"]`),
      w)
    ) {
      if (k === "media")
        return e.defaultColorScheme === w
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((C = (b = o[w]) == null ? void 0 : b.palette) == null
                  ? void 0
                  : C.mode) || w
              })`]: { ":root": j },
            };
      if (k)
        return e.defaultColorScheme === w
          ? `:root, ${k.replace("%s", String(w))}`
          : k.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let w = { ...u };
      return (
        Object.entries(y).forEach(([, { vars: j }]) => {
          w = Pt(w, j);
        }),
        w
      );
    },
    generateStyleSheets: () => {
      var N, v;
      const w = [],
        j = e.defaultColorScheme || "light";
      function k(R, M) {
        Object.keys(M).length &&
          w.push(typeof R == "string" ? { [R]: { ...M } } : R);
      }
      k(n(void 0, { ...f }), f);
      const { [j]: b, ...C } = y;
      if (b) {
        const { css: R } = b,
          M =
            (v = (N = o[j]) == null ? void 0 : N.palette) == null
              ? void 0
              : v.mode,
          I = !r && M ? { colorScheme: M, ...R } : { ...R };
        k(n(j, { ...I }), I);
      }
      return (
        Object.entries(C).forEach(([R, { css: M }]) => {
          var q, H;
          const I =
              (H = (q = o[R]) == null ? void 0 : q.palette) == null
                ? void 0
                : H.mode,
            D = !r && I ? { colorScheme: I, ...M } : { ...M };
          k(n(R, { ...D }), D);
        }),
        w
      );
    },
  };
}
function Y6(e) {
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
const ti = { black: "#000", white: "#fff" },
  Q6 = {
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
  is = {
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
  as = {
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
  mo = {
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
  ls = {
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
  cs = {
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
  us = {
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
  am = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ti.white, default: ti.white },
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
  Qc = {
    text: {
      primary: ti.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ti.white,
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
function lm(e, t, n, r) {
  const s = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = Hf(e.main, s))
      : t === "dark" && (e.dark = Wf(e.main, o)));
}
function X6(e = "light") {
  return e === "dark"
    ? { main: ls[200], light: ls[50], dark: ls[400] }
    : { main: ls[700], light: ls[400], dark: ls[800] };
}
function J6(e = "light") {
  return e === "dark"
    ? { main: is[200], light: is[50], dark: is[400] }
    : { main: is[500], light: is[300], dark: is[700] };
}
function e9(e = "light") {
  return e === "dark"
    ? { main: as[500], light: as[300], dark: as[700] }
    : { main: as[700], light: as[400], dark: as[800] };
}
function t9(e = "light") {
  return e === "dark"
    ? { main: cs[400], light: cs[300], dark: cs[700] }
    : { main: cs[700], light: cs[500], dark: cs[900] };
}
function n9(e = "light") {
  return e === "dark"
    ? { main: us[400], light: us[300], dark: us[700] }
    : { main: us[800], light: us[500], dark: us[900] };
}
function r9(e = "light") {
  return e === "dark"
    ? { main: mo[400], light: mo[300], dark: mo[700] }
    : { main: "#ed6c02", light: mo[500], dark: mo[900] };
}
function qf(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...s
    } = e,
    o = e.primary || X6(t),
    a = e.secondary || J6(t),
    l = e.error || e9(t),
    c = e.info || t9(t),
    u = e.success || n9(t),
    f = e.warning || r9(t);
  function d(g) {
    return F6(g, Qc.text.primary) >= n ? Qc.text.primary : am.text.primary;
  }
  const p = ({
      color: g,
      name: S,
      mainShade: h = 500,
      lightShade: x = 300,
      darkShade: w = 700,
    }) => {
      if (
        ((g = { ...g }),
        !g.main && g[h] && (g.main = g[h]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(zr(11, S ? ` (${S})` : "", h));
      if (typeof g.main != "string")
        throw new Error(zr(12, S ? ` (${S})` : "", JSON.stringify(g.main)));
      return (
        lm(g, "light", x, r),
        lm(g, "dark", w, r),
        g.contrastText || (g.contrastText = d(g.main)),
        g
      );
    },
    y = { dark: Qc, light: am };
  return Pt(
    {
      common: { ...ti },
      mode: t,
      primary: p({ color: o, name: "primary" }),
      secondary: p({
        color: a,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      error: p({ color: l, name: "error" }),
      warning: p({ color: f, name: "warning" }),
      info: p({ color: c, name: "info" }),
      success: p({ color: u, name: "success" }),
      grey: Q6,
      contrastThreshold: n,
      getContrastText: d,
      augmentColor: p,
      tonalOffset: r,
      ...y[t],
    },
    s
  );
}
function s9(e) {
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
function o9(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function i9(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cm = { textTransform: "uppercase" },
  um = '"Roboto", "Helvetica", "Arial", sans-serif';
function a9(e, t) {
  const {
      fontFamily: n = um,
      fontSize: r = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: f,
      ...d
    } = typeof t == "function" ? t(e) : t,
    p = r / 14,
    y = f || ((S) => `${(S / c) * p}rem`),
    m = (S, h, x, w, j) => ({
      fontFamily: n,
      fontWeight: S,
      fontSize: y(h),
      lineHeight: x,
      ...(n === um ? { letterSpacing: `${i9(w / h)}em` } : {}),
      ...j,
      ...u,
    }),
    g = {
      h1: m(s, 96, 1.167, -1.5),
      h2: m(s, 60, 1.2, -0.5),
      h3: m(o, 48, 1.167, 0),
      h4: m(o, 34, 1.235, 0.25),
      h5: m(o, 24, 1.334, 0),
      h6: m(a, 20, 1.6, 0.15),
      subtitle1: m(o, 16, 1.75, 0.15),
      subtitle2: m(a, 14, 1.57, 0.1),
      body1: m(o, 16, 1.5, 0.15),
      body2: m(o, 14, 1.43, 0.15),
      button: m(a, 14, 1.75, 0.4, cm),
      caption: m(o, 12, 1.66, 0.4),
      overline: m(o, 12, 2.66, 1, cm),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Pt(
    {
      htmlFontSize: c,
      pxToRem: y,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: s,
      fontWeightRegular: o,
      fontWeightMedium: a,
      fontWeightBold: l,
      ...g,
    },
    d,
    { clone: !1 }
  );
}
const l9 = 0.2,
  c9 = 0.14,
  u9 = 0.12;
function je(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${l9})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${c9})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${u9})`,
  ].join(",");
}
const d9 = [
    "none",
    je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  f9 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  p9 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function dm(e) {
  return `${Math.round(e)}ms`;
}
function h9(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function m9(e) {
  const t = { ...f9, ...e.easing },
    n = { ...p9, ...e.duration };
  return {
    getAutoHeightDuration: h9,
    create: (s = ["all"], o = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = o;
      return (Array.isArray(s) ? s : [s])
        .map(
          (f) =>
            `${f} ${typeof a == "string" ? a : dm(a)} ${l} ${
              typeof c == "string" ? c : dm(c)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const g9 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function yd(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: s,
    palette: o = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars) throw new Error(zr(20));
  const f = qf(o),
    d = ly(e);
  let p = Pt(d, {
    mixins: o9(d.breakpoints, r),
    palette: f,
    shadows: d9.slice(),
    typography: a9(f, l),
    transitions: m9(a),
    zIndex: { ...g9 },
  });
  return (
    (p = Pt(p, u)),
    (p = t.reduce((y, m) => Pt(y, m), p)),
    (p.unstable_sxConfig = {
      ...Wl,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (p.unstable_sx = function (m) {
      return mi({ sx: m, theme: this });
    }),
    p
  );
}
function y9(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const x9 = [...Array(25)].map((e, t) => {
  if (t === 0) return;
  const n = y9(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function uy(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function dy(e) {
  return e === "dark" ? x9 : [];
}
function v9(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...s } = e,
    o = qf(t);
  return {
    palette: o,
    opacity: { ...uy(o.mode), ...n },
    overlays: r || dy(o.mode),
    ...s,
  };
}
function w9(e) {
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
const S9 = (e) => [
    ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  C9 = (e) => (t, n) => {
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
          S9(e.cssVarPrefix).forEach((a) => {
            (o[a] = n[a]), delete n[a];
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
function b9(e) {
  return (
    An(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function j9(e = {}) {
  const t = { ...e };
  function n(r) {
    const s = Object.entries(r);
    for (let o = 0; o < s.length; o++) {
      const [a, l] = s[o];
      !b9(l) || a.startsWith("unstable_")
        ? delete r[a]
        : An(l) && ((r[a] = { ...l }), n(r[a]));
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
function k9(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function So(e) {
  return !e || !e.startsWith("hsl") ? e : cy(e);
}
function kn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = wo(
      So(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function N9(e) {
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
  E9 = (e = "mui") => q6(e);
function Xc(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const s = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = v9({
      ...t,
      palette: { mode: s, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: o, ...a } = yd({
    ...n,
    palette: { mode: s, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: o,
      opacity: { ...uy(s), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || dy(s),
    }),
    a
  );
}
function T9(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: s = !1,
      cssVarPrefix: o = "mui",
      shouldSkipGeneratingVar: a = w9,
      colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
      ...c
    } = e,
    u = Object.keys(n)[0],
    f = r || (n.light && u !== "light" ? "light" : u),
    d = E9(o),
    { [f]: p, light: y, dark: m, ...g } = n,
    S = { ...g };
  let h = p;
  if (
    (((f === "dark" && !("dark" in n)) || (f === "light" && !("light" in n))) &&
      (h = !0),
    !h)
  )
    throw new Error(zr(21, f));
  const x = Xc(S, h, c, f);
  y && !S.light && Xc(S, y, void 0, "light"),
    m && !S.dark && Xc(S, m, void 0, "dark");
  let w = {
    defaultColorScheme: f,
    ...x,
    cssVarPrefix: o,
    colorSchemeSelector: l,
    getCssVar: d,
    colorSchemes: S,
    font: { ...s9(x.typography), ...x.font },
    spacing: N9(c.spacing),
  };
  Object.keys(w.colorSchemes).forEach((N) => {
    const v = w.colorSchemes[N].palette,
      R = (M) => {
        const I = M.split("-"),
          D = I[1],
          q = I[2];
        return d(M, v[D][q]);
      };
    if (
      (v.mode === "light" &&
        (P(v.common, "background", "#fff"),
        P(v.common, "onBackground", "#000")),
      v.mode === "dark" &&
        (P(v.common, "background", "#000"),
        P(v.common, "onBackground", "#fff")),
      k9(v, [
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
      P(v.Alert, "errorColor", he(v.error.light, 0.6)),
        P(v.Alert, "infoColor", he(v.info.light, 0.6)),
        P(v.Alert, "successColor", he(v.success.light, 0.6)),
        P(v.Alert, "warningColor", he(v.warning.light, 0.6)),
        P(v.Alert, "errorFilledBg", R("palette-error-main")),
        P(v.Alert, "infoFilledBg", R("palette-info-main")),
        P(v.Alert, "successFilledBg", R("palette-success-main")),
        P(v.Alert, "warningFilledBg", R("palette-warning-main")),
        P(
          v.Alert,
          "errorFilledColor",
          dn(() => v.getContrastText(v.error.main))
        ),
        P(
          v.Alert,
          "infoFilledColor",
          dn(() => v.getContrastText(v.info.main))
        ),
        P(
          v.Alert,
          "successFilledColor",
          dn(() => v.getContrastText(v.success.main))
        ),
        P(
          v.Alert,
          "warningFilledColor",
          dn(() => v.getContrastText(v.warning.main))
        ),
        P(v.Alert, "errorStandardBg", me(v.error.light, 0.9)),
        P(v.Alert, "infoStandardBg", me(v.info.light, 0.9)),
        P(v.Alert, "successStandardBg", me(v.success.light, 0.9)),
        P(v.Alert, "warningStandardBg", me(v.warning.light, 0.9)),
        P(v.Alert, "errorIconColor", R("palette-error-main")),
        P(v.Alert, "infoIconColor", R("palette-info-main")),
        P(v.Alert, "successIconColor", R("palette-success-main")),
        P(v.Alert, "warningIconColor", R("palette-warning-main")),
        P(v.AppBar, "defaultBg", R("palette-grey-100")),
        P(v.Avatar, "defaultBg", R("palette-grey-400")),
        P(v.Button, "inheritContainedBg", R("palette-grey-300")),
        P(v.Button, "inheritContainedHoverBg", R("palette-grey-A100")),
        P(v.Chip, "defaultBorder", R("palette-grey-400")),
        P(v.Chip, "defaultAvatarColor", R("palette-grey-700")),
        P(v.Chip, "defaultIconColor", R("palette-grey-700")),
        P(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        P(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        P(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        P(v.LinearProgress, "primaryBg", me(v.primary.main, 0.62)),
        P(v.LinearProgress, "secondaryBg", me(v.secondary.main, 0.62)),
        P(v.LinearProgress, "errorBg", me(v.error.main, 0.62)),
        P(v.LinearProgress, "infoBg", me(v.info.main, 0.62)),
        P(v.LinearProgress, "successBg", me(v.success.main, 0.62)),
        P(v.LinearProgress, "warningBg", me(v.warning.main, 0.62)),
        P(v.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`),
        P(v.Slider, "primaryTrack", me(v.primary.main, 0.62)),
        P(v.Slider, "secondaryTrack", me(v.secondary.main, 0.62)),
        P(v.Slider, "errorTrack", me(v.error.main, 0.62)),
        P(v.Slider, "infoTrack", me(v.info.main, 0.62)),
        P(v.Slider, "successTrack", me(v.success.main, 0.62)),
        P(v.Slider, "warningTrack", me(v.warning.main, 0.62));
      const M = Xi(v.background.default, 0.8);
      P(v.SnackbarContent, "bg", M),
        P(
          v.SnackbarContent,
          "color",
          dn(() => v.getContrastText(M))
        ),
        P(v.SpeedDialAction, "fabHoverBg", Xi(v.background.paper, 0.15)),
        P(v.StepConnector, "border", R("palette-grey-400")),
        P(v.StepContent, "border", R("palette-grey-400")),
        P(v.Switch, "defaultColor", R("palette-common-white")),
        P(v.Switch, "defaultDisabledColor", R("palette-grey-100")),
        P(v.Switch, "primaryDisabledColor", me(v.primary.main, 0.62)),
        P(v.Switch, "secondaryDisabledColor", me(v.secondary.main, 0.62)),
        P(v.Switch, "errorDisabledColor", me(v.error.main, 0.62)),
        P(v.Switch, "infoDisabledColor", me(v.info.main, 0.62)),
        P(v.Switch, "successDisabledColor", me(v.success.main, 0.62)),
        P(v.Switch, "warningDisabledColor", me(v.warning.main, 0.62)),
        P(v.TableCell, "border", me(Qi(v.divider, 1), 0.88)),
        P(v.Tooltip, "bg", Qi(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      P(v.Alert, "errorColor", me(v.error.light, 0.6)),
        P(v.Alert, "infoColor", me(v.info.light, 0.6)),
        P(v.Alert, "successColor", me(v.success.light, 0.6)),
        P(v.Alert, "warningColor", me(v.warning.light, 0.6)),
        P(v.Alert, "errorFilledBg", R("palette-error-dark")),
        P(v.Alert, "infoFilledBg", R("palette-info-dark")),
        P(v.Alert, "successFilledBg", R("palette-success-dark")),
        P(v.Alert, "warningFilledBg", R("palette-warning-dark")),
        P(
          v.Alert,
          "errorFilledColor",
          dn(() => v.getContrastText(v.error.dark))
        ),
        P(
          v.Alert,
          "infoFilledColor",
          dn(() => v.getContrastText(v.info.dark))
        ),
        P(
          v.Alert,
          "successFilledColor",
          dn(() => v.getContrastText(v.success.dark))
        ),
        P(
          v.Alert,
          "warningFilledColor",
          dn(() => v.getContrastText(v.warning.dark))
        ),
        P(v.Alert, "errorStandardBg", he(v.error.light, 0.9)),
        P(v.Alert, "infoStandardBg", he(v.info.light, 0.9)),
        P(v.Alert, "successStandardBg", he(v.success.light, 0.9)),
        P(v.Alert, "warningStandardBg", he(v.warning.light, 0.9)),
        P(v.Alert, "errorIconColor", R("palette-error-main")),
        P(v.Alert, "infoIconColor", R("palette-info-main")),
        P(v.Alert, "successIconColor", R("palette-success-main")),
        P(v.Alert, "warningIconColor", R("palette-warning-main")),
        P(v.AppBar, "defaultBg", R("palette-grey-900")),
        P(v.AppBar, "darkBg", R("palette-background-paper")),
        P(v.AppBar, "darkColor", R("palette-text-primary")),
        P(v.Avatar, "defaultBg", R("palette-grey-600")),
        P(v.Button, "inheritContainedBg", R("palette-grey-800")),
        P(v.Button, "inheritContainedHoverBg", R("palette-grey-700")),
        P(v.Chip, "defaultBorder", R("palette-grey-700")),
        P(v.Chip, "defaultAvatarColor", R("palette-grey-300")),
        P(v.Chip, "defaultIconColor", R("palette-grey-300")),
        P(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        P(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        P(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        P(v.LinearProgress, "primaryBg", he(v.primary.main, 0.5)),
        P(v.LinearProgress, "secondaryBg", he(v.secondary.main, 0.5)),
        P(v.LinearProgress, "errorBg", he(v.error.main, 0.5)),
        P(v.LinearProgress, "infoBg", he(v.info.main, 0.5)),
        P(v.LinearProgress, "successBg", he(v.success.main, 0.5)),
        P(v.LinearProgress, "warningBg", he(v.warning.main, 0.5)),
        P(v.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`),
        P(v.Slider, "primaryTrack", he(v.primary.main, 0.5)),
        P(v.Slider, "secondaryTrack", he(v.secondary.main, 0.5)),
        P(v.Slider, "errorTrack", he(v.error.main, 0.5)),
        P(v.Slider, "infoTrack", he(v.info.main, 0.5)),
        P(v.Slider, "successTrack", he(v.success.main, 0.5)),
        P(v.Slider, "warningTrack", he(v.warning.main, 0.5));
      const M = Xi(v.background.default, 0.98);
      P(v.SnackbarContent, "bg", M),
        P(
          v.SnackbarContent,
          "color",
          dn(() => v.getContrastText(M))
        ),
        P(v.SpeedDialAction, "fabHoverBg", Xi(v.background.paper, 0.15)),
        P(v.StepConnector, "border", R("palette-grey-600")),
        P(v.StepContent, "border", R("palette-grey-600")),
        P(v.Switch, "defaultColor", R("palette-grey-300")),
        P(v.Switch, "defaultDisabledColor", R("palette-grey-600")),
        P(v.Switch, "primaryDisabledColor", he(v.primary.main, 0.55)),
        P(v.Switch, "secondaryDisabledColor", he(v.secondary.main, 0.55)),
        P(v.Switch, "errorDisabledColor", he(v.error.main, 0.55)),
        P(v.Switch, "infoDisabledColor", he(v.info.main, 0.55)),
        P(v.Switch, "successDisabledColor", he(v.success.main, 0.55)),
        P(v.Switch, "warningDisabledColor", he(v.warning.main, 0.55)),
        P(v.TableCell, "border", he(Qi(v.divider, 1), 0.68)),
        P(v.Tooltip, "bg", Qi(v.grey[700], 0.92));
    }
    kn(v.background, "default"),
      kn(v.background, "paper"),
      kn(v.common, "background"),
      kn(v.common, "onBackground"),
      kn(v, "divider"),
      Object.keys(v).forEach((M) => {
        const I = v[M];
        I &&
          typeof I == "object" &&
          (I.main && P(v[M], "mainChannel", wo(So(I.main))),
          I.light && P(v[M], "lightChannel", wo(So(I.light))),
          I.dark && P(v[M], "darkChannel", wo(So(I.dark))),
          I.contrastText &&
            P(v[M], "contrastTextChannel", wo(So(I.contrastText))),
          M === "text" && (kn(v[M], "primary"), kn(v[M], "secondary")),
          M === "action" &&
            (I.active && kn(v[M], "active"),
            I.selected && kn(v[M], "selected")));
      });
  }),
    (w = t.reduce((N, v) => Pt(N, v), w));
  const j = {
      prefix: o,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: a,
      getSelector: C9(w),
    },
    { vars: k, generateThemeVars: b, generateStyleSheets: C } = Z6(w, j);
  return (
    (w.vars = k),
    Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([N, v]) => {
      w[N] = v;
    }),
    (w.generateThemeVars = b),
    (w.generateStyleSheets = C),
    (w.generateSpacing = function () {
      return ay(c.spacing, Uf(this));
    }),
    (w.getColorSchemeSelector = Y6(l)),
    (w.spacing = w.generateSpacing()),
    (w.shouldSkipGeneratingVar = a),
    (w.unstable_sxConfig = {
      ...Wl,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (w.unstable_sx = function (v) {
      return mi({ sx: v, theme: this });
    }),
    (w.toRuntimeSource = j9),
    w
  );
}
function fm(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: qf({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function _9(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: s = n ? void 0 : { light: !0 },
      defaultColorScheme: o = n == null ? void 0 : n.mode,
      ...a
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
    if (!("colorSchemes" in e)) return yd(e, ...t);
    let f = n;
    "palette" in e ||
      (u[l] &&
        (u[l] !== !0
          ? (f = u[l].palette)
          : l === "dark" && (f = { mode: "dark" })));
    const d = yd({ ...e, palette: f }, ...t);
    return (
      (d.defaultColorScheme = l),
      (d.colorSchemes = u),
      d.palette.mode === "light" &&
        ((d.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: d.palette,
        }),
        fm(d, "dark", u.dark)),
      d.palette.mode === "dark" &&
        ((d.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: d.palette,
        }),
        fm(d, "light", u.light)),
      d
    );
  }
  return (
    !n && !("light" in u) && l === "light" && (u.light = !0),
    T9(
      {
        ...a,
        colorSchemes: u,
        defaultColorScheme: l,
        ...(typeof r != "boolean" && r),
      },
      ...t
    )
  );
}
const R9 = _9(),
  A9 = "$$material";
function M9(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const P9 = (e) => M9(e) && e !== "classes",
  L9 = L6({ themeId: A9, defaultTheme: R9, rootShouldForwardProp: P9 }),
  pm = { theme: void 0 };
function O9(e) {
  let t, n;
  return (r) => {
    let s = t;
    return (
      (s === void 0 || r.theme !== n) &&
        ((pm.theme = r.theme), (s = e(pm)), (t = s), (n = r.theme)),
      s
    );
  };
}
function B9(e) {
  return H6(e);
}
function I9(e) {
  return Gg("MuiSvgIcon", e);
}
A5("MuiSvgIcon", [
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
const U9 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      s = {
        root: ["root", t !== "inherit" && `color${Ds(t)}`, `fontSize${Ds(n)}`],
      };
    return E5(s, I9, r);
  },
  $9 = L9("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Ds(n.color)}`],
        t[`fontSize${Ds(n.fontSize)}`],
      ];
    },
  })(
    O9(({ theme: e }) => {
      var t, n, r, s, o, a, l, c, u, f, d, p, y, m;
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
          { props: (g) => !g.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((a = (o = e.typography) == null ? void 0 : o.pxToRem) == null
                  ? void 0
                  : a.call(o, 20)) || "1.25rem",
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
            .filter(([, g]) => g && g.main)
            .map(([g]) => {
              var S, h;
              return {
                props: { color: g },
                style: {
                  color:
                    (h = (S = (e.vars ?? e).palette) == null ? void 0 : S[g]) ==
                    null
                      ? void 0
                      : h.main,
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
                (m = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : m.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  Be = E.forwardRef(function (t, n) {
    const r = B9({ props: t, name: "MuiSvgIcon" }),
      {
        children: s,
        className: o,
        color: a = "inherit",
        component: l = "svg",
        fontSize: c = "medium",
        htmlColor: u,
        inheritViewBox: f = !1,
        titleAccess: d,
        viewBox: p = "0 0 24 24",
        ...y
      } = r,
      m = E.isValidElement(s) && s.type === "svg",
      g = {
        ...r,
        color: a,
        component: l,
        fontSize: c,
        instanceFontSize: t.fontSize,
        inheritViewBox: f,
        viewBox: p,
        hasSvgAsChild: m,
      },
      S = {};
    f || (S.viewBox = p);
    const h = U9(g);
    return i.jsxs($9, {
      as: l,
      className: P5(h.root, o),
      focusable: "false",
      color: u,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n,
      ...S,
      ...y,
      ...(m && s.props),
      ownerState: g,
      children: [
        m ? s.props.children : s,
        d ? i.jsx("title", { children: d }) : null,
      ],
    });
  });
Be && (Be.muiName = "SvgIcon");
function ae(e, t) {
  function n(r, s) {
    return i.jsx(Be, { "data-testid": `${t}Icon`, ref: s, ...r, children: e });
  }
  return (n.muiName = Be.muiName), E.memo(E.forwardRef(n));
}
const fy = ae(
    i.jsx("path", {
      d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2",
    }),
    "RocketLaunch"
  ),
  F9 = ae(
    i.jsx("path", {
      d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z",
    }),
    "Telegram"
  ),
  D9 = () =>
    i.jsxs("div", {
      className: "bg-gray-100 text-gray-900 p-16 flex gap-4",
      children: [
        i.jsxs("div", {
          className: "w-1/2",
          children: [
            i.jsx("p", {
              className: "text-3xl",
              children: "Your Partner in Sports Data Collection and Analytics",
            }),
            i.jsx("p", {
              className: "text-lg pt-8 pb-16 leading-7",
              children:
                "Whether you're a coach, player, or academy, our data collection tool provides precise performance tracking across a variety of sports. From player stats to team insights, unlock the power of data today—and get ready for the launch of our AI-powered analytics platform, coming soon!",
            }),
            i.jsxs("div", {
              className:
                "bg-purple-900 w-2/5 text-gray-100 px-4 py-2 text-center rounded font-bold flex gap-4 justify-center",
              children: [
                i.jsx("p", { children: "Discover How It Works" }),
                i.jsx(F9, {}),
              ],
            }),
          ],
        }),
        i.jsx("div", {
          className: "w-1/2 flex justify-center",
          children: i.jsx("img", {
            src: "https://images.pexels.com/photos/6077809/pexels-photo-6077809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "",
            className: "w-2/3 rounded",
          }),
        }),
      ],
    }),
  Hn = ({
    name: e = "Sports",
    description: t = "",
    future: n = "",
    image: r = "",
    colour: s = "bg-yellow-600",
  }) =>
    i.jsx("div", {
      class:
        "bg-neutral-900 drop-shadow-md border-neutral-800/50 relative overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform",
      children: i.jsxs("div", {
        class: "flex items-center gap-4",
        children: [
          i.jsx("img", {
            src: r,
            class:
              "w-24 group-hover:w-24 group-hover:h-24 h-24 object-center object-cover rounded-full transition-all duration-500 delay-500 transform",
          }),
          i.jsxs("div", {
            class: "w-fit transition-all transform duration-500",
            children: [
              i.jsx("h1", {
                class: "text-gray-600 dark:text-gray-200 font-bold text-xl",
                children: e,
              }),
              i.jsxs("p", {
                class: "text-gray-400",
                children: [t, " Future: ", n],
              }),
              i.jsx("a", {
                class:
                  "text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500",
                children: "Explore Now",
              }),
            ],
          }),
        ],
      }),
    }),
  z9 = ae(
    i.jsx("path", {
      d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    }),
    "ArrowForward"
  ),
  V9 = () =>
    i.jsxs("div", {
      className: "p-16 bg-neutral-950",
      children: [
        i.jsx("p", {
          className: "text-3xl text-center",
          children: "Sports We Cover",
        }),
        i.jsx("p", {
          className: "py-4 text-center",
          children:
            "Our platform caters to a wide range of sports, each with tailored data tracking and analytics tools",
        }),
        i.jsxs("div", {
          className: "py-8 grid grid-cols-3 gap-8",
          children: [
            i.jsx(Hn, {
              name: "Cricket",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=400",
            }),
            i.jsx(Hn, {
              name: "Kabaddi",
              description: "Monitor raids, tackles, and team formations.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://img.etimg.com/thumb/width-420,height-315,imgsize-350190,resizemode-75,msid-70301474/news/sports/can-pro-kabaddi-league-with-season-7-starting-today-recapture-the-eyeballs/untitled-7.jpg",
            }),
            i.jsx(Hn, {
              name: "Badminton",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fEJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D",
            }),
            i.jsx(Hn, {
              name: "Kho-Kho",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.hindustantimes.com/img/2022/07/14/1600x900/Players_in_action_during_the_Ultimate_Kho_Kho_exhibition_match_at_the_Balewadi_Stadium_on_Thursday._(1)_1657816249725_1657816255327_1657816255327.jpg",
            }),
            i.jsx(Hn, {
              name: "Basket ball",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.unsplash.com/photo-1561659228-fd2b3e33c10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxiYXNrZXRiYWxsfGVufDB8fDB8fHww",
            }),
            i.jsx(Hn, {
              name: "Volleyball",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.unsplash.com/photo-1728971121068-922f84316429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D",
            }),
            i.jsx(Hn, {
              name: "Field Hockey",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.unsplash.com/photo-1680010090687-6a5e4fe855b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpZWxkJTIwaG9ja2V5fGVufDB8fDB8fHww",
            }),
            i.jsx(Hn, {
              name: "Tennis",
              description:
                "Track runs, wickets, partnerships, and fielding metrics.",
              future: "Predict player performance, optimize team strategies.",
              image:
                "https://images.unsplash.com/photo-1650496760462-cb983aca287d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHx0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
            }),
            i.jsx("div", {
              className: "flex justify-center items-center",
              children: i.jsxs("div", {
                className:
                  "flex hover:scale-105 cursor-pointer transition-all duration-150 ease-linear",
                children: [
                  i.jsx("p", {
                    className: "underline px-4",
                    children: "Learn More About Each Sport",
                  }),
                  " ",
                  i.jsx(z9, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  W9 = ae(i.jsx("path", { d: "m6 18 8.5-6L6 6zM16 6v12h2V6z" }), "SkipNext"),
  H9 = () =>
    i.jsxs("div", {
      className: "px-16 py-16 pb-36 bg-gray-100 text-gray-900",
      children: [
        i.jsx("p", {
          className: "text-5xl text-center",
          children: "From Data Collection to Actionable Insights!",
        }),
        i.jsx("div", {
          className: "flex justify-center items-center py-4",
          children: i.jsxs("div", {
            className:
              "flex gap-2 justify-center items-center text-lg bg-gray-900 text-gray-100 px-4 py-2 rounded",
            children: [i.jsx("p", { children: "Watch a Demo" }), i.jsx(W9, {})],
          }),
        }),
        i.jsxs("div", {
          className: "pt-16 flex gap-4",
          children: [
            i.jsxs("div", {
              className: "flex gap-4 w-1/3 bg-slate-300 rounded-lg shadow-xl",
              children: [
                i.jsx("div", {
                  className:
                    "text-5xl bg-purple-800 text-gray-100 px-4 flex justify-center items-center rounded-l-lg",
                  children: i.jsx("p", { children: "1" }),
                }),
                i.jsxs("div", {
                  className: "py-2",
                  children: [
                    i.jsx("p", {
                      className: "font-bold py-2",
                      children: "Collect Data Efficiently",
                    }),
                    i.jsx("p", {
                      children:
                        "Use our intuitive tool to log match stats, player performance, and team metrics.",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex gap-4 w-1/3 bg-slate-200 rounded-lg shadow-xl",
              children: [
                i.jsx("div", {
                  className:
                    "text-5xl bg-purple-700 text-gray-100 px-4 flex justify-center items-center rounded-l-lg",
                  children: i.jsx("p", { children: "2" }),
                }),
                i.jsxs("div", {
                  className: "py-2",
                  children: [
                    i.jsx("p", {
                      className: "font-bold py-2",
                      children: "Visualize Performance",
                    }),
                    i.jsx("p", {
                      children:
                        "Generate reports, dashboards, and heatmaps tailored to your sport.",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex gap-4 w-1/3 bg-slate-100 rounded-lg shadow-xl",
              children: [
                i.jsx("div", {
                  className:
                    "text-5xl bg-purple-600 text-gray-100 px-4 flex justify-center items-center rounded-l-lg",
                  children: i.jsx("p", { children: "3" }),
                }),
                i.jsxs("div", {
                  className: "py-2",
                  children: [
                    i.jsx("p", {
                      className: "font-bold py-2",
                      children: "Unlock AI Insights (Coming Soon)",
                    }),
                    i.jsx("p", {
                      children:
                        "Get AI-driven recommendations for strategy, player development, and match-winning decisions.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  q9 = () =>
    i.jsxs("div", {
      className: "p-16 pb-36 flex gap-4",
      children: [
        i.jsx("div", {
          className: "w-1/2",
          children: i.jsx("img", {
            src: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "",
            className: "rounded-xl h-96",
          }),
        }),
        i.jsxs("div", {
          className: "w-1/2",
          children: [
            i.jsxs("div", {
              class: "lg:ml-6 lg:col-start-2 lg:max-w-2xl",
              children: [
                i.jsx("p", {
                  class:
                    "text-base font-semibold leading-6 text-purple-500 uppercase",
                  children: "Benefits",
                }),
                i.jsx("h4", {
                  class:
                    "mt-2 text-2xl font-extrabold leading-8 text-gray-200 sm:text-3xl sm:leading-9",
                  children: "Why Choose Us?",
                }),
                i.jsxs("ul", {
                  class: "mt-8 space-y-3 font-medium",
                  children: [
                    i.jsxs("li", {
                      class: "flex items-start lg:col-span-1",
                      children: [
                        i.jsx("div", {
                          class: "flex-shrink-0",
                          children: i.jsx("svg", {
                            class: "w-5 h-5 text-purple-600",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: i.jsx("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                              "clip-rule": "evenodd",
                            }),
                          }),
                        }),
                        i.jsx("p", {
                          class: "ml-3 leading-5 text-gray-100",
                          children:
                            "Multi-Sport Support: Cricket, Kabaddi, Kho-Kho, Basketball, and more",
                        }),
                      ],
                    }),
                    i.jsxs("li", {
                      class: "flex items-start lg:col-span-1",
                      children: [
                        i.jsx("div", {
                          class: "flex-shrink-0",
                          children: i.jsx("svg", {
                            class: "w-5 h-5 text-purple-600",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: i.jsx("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                              "clip-rule": "evenodd",
                            }),
                          }),
                        }),
                        i.jsx("p", {
                          class: "ml-3 leading-5 text-gray-100",
                          children:
                            "User-Friendly Tools: Designed for coaches, players, and academies",
                        }),
                      ],
                    }),
                    i.jsxs("li", {
                      class: "flex items-start lg:col-span-1",
                      children: [
                        i.jsx("div", {
                          class: "flex-shrink-0",
                          children: i.jsx("svg", {
                            class: "w-5 h-5 text-purple-600",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: i.jsx("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                              "clip-rule": "evenodd",
                            }),
                          }),
                        }),
                        i.jsx("p", {
                          class: "ml-3 leading-5 text-gray-100",
                          children:
                            "Future-Proof: Be ready for the AI analytics revolution",
                        }),
                      ],
                    }),
                    i.jsxs("li", {
                      class: "flex items-start lg:col-span-1",
                      children: [
                        i.jsx("div", {
                          class: "flex-shrink-0",
                          children: i.jsx("svg", {
                            class: "w-5 h-5 text-purple-600",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: i.jsx("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                              "clip-rule": "evenodd",
                            }),
                          }),
                        }),
                        i.jsx("p", {
                          class: "ml-3 leading-5 text-gray-100",
                          children:
                            "Affordable Pricing: Flexible plans for individuals and teams",
                        }),
                      ],
                    }),
                    i.jsxs("li", {
                      class: "flex items-start lg:col-span-1",
                      children: [
                        i.jsx("div", {
                          class: "flex-shrink-0",
                          children: i.jsx("svg", {
                            class: "w-5 h-5 text-purple-600",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: i.jsx("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                              "clip-rule": "evenodd",
                            }),
                          }),
                        }),
                        i.jsx("p", {
                          class: "ml-3 leading-5 text-gray-100",
                          children:
                            "Cloud-Based Access: Secure, anytime, anywhere",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              className: "p-8",
              children: i.jsx("div", {
                className: "p-2 w-1/3 bg-purple-500 text-center rounded",
                children: "Explore Pricing",
              }),
            }),
          ],
        }),
      ],
    }),
  G9 = () =>
    i.jsx("div", {
      children: i.jsx("section", {
        class: "w-full bg-white text-gray-900",
        children: i.jsxs("div", {
          class: "w-full md:w-4/5 mx-auto",
          children: [
            i.jsxs("div", {
              class: "w-full flex flex-col text-center pt-12 md:pt-24",
              children: [
                i.jsxs("h1", {
                  class: "text-4xl md:text-5xl font-semibold text-gray-800",
                  children: [
                    "Affordable Plans for",
                    i.jsx("span", {
                      class: "text-purple-600",
                      children: " Every Need",
                    }),
                  ],
                }),
                i.jsxs("p", {
                  class:
                    "w-full px-[12%] text-normal md:text-xl whitespace-pre-line",
                  children: [
                    "Start with our",
                    " ",
                    i.jsx("span", {
                      class: "text-purple-600",
                      children: " data collection tool ",
                    }),
                    ", and be the first to access AI-powered analytics when they launch.",
                    " ",
                    i.jsx("br", { class: "hidden lg:inline" }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              class: "w-full pt-16 flex flex-col md:flex-row items-center",
              children: [
                i.jsxs("div", {
                  class:
                    "rounded-md w-[90%] mx-auto md:w-min-1/3 mx-auto items-center border border-gray-300 py-16 px-4 xl:px-24 mb-4 flex flex-col hover:shadow-lg transition-all duration-100 ease-linear",
                  children: [
                    i.jsx("p", {
                      class: "text-gray-700  text-2xl",
                      children: "Single Sports Plan",
                    }),
                    i.jsxs("div", {
                      className: "flex gap-2 justify-center items-center",
                      children: [
                        i.jsx("h1", {
                          class: "font-semibold text-4xl pt-2 pb-1 ",
                          children: " ",
                        }),
                        i.jsx("p", { class: "text-gray-500" }),
                      ],
                    }),
                    i.jsx("p", {
                      class: "text-gray-400",
                      children: "Enquire for pricing",
                    }),
                    i.jsxs("ul", {
                      class:
                        "mt-10 list-image-[url('./YOU-CAN-SET-HERE-YOUR-ARROW-SVG-OR-IMG')] ",
                      children: [
                        i.jsxs("li", {
                          class: "mb-2",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Access to all Features",
                          ],
                        }),
                        i.jsxs("li", {
                          class: "mb-2",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Customer support",
                          ],
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      class:
                        "mt-6 bg-gray-100 rounded-md py-2 px-4 text-black text-xl",
                      children: "Subscribe",
                    }),
                    i.jsx("small", {
                      class: "text-sm mt-2",
                      children: "View More",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  class:
                    "rounded-md w-[90%] mx-auto md:w-min-1/3 bg-purple-50/50 mx-auto md:!mx-4 items-center border border-gray-300 py-24 px-4 xl:px-24 mb-4 flex flex-col hover:shadow-lg transition-all duration-100 ease-linear",
                  children: [
                    i.jsx("p", {
                      class: "text-gray-700 text-2xl",
                      children: "Multi-Sports Plan",
                    }),
                    i.jsxs("div", {
                      className: "flex gap-2 justify-center items-center",
                      children: [
                        i.jsx("p", { className: "text-lg" }),
                        i.jsx("h1", {
                          class: "font-semibold text-5xl pt-2 pb-1 ",
                        }),
                        i.jsx("p", { class: "text-gray-500" }),
                      ],
                    }),
                    i.jsx("p", {
                      class: "text-gray-400",
                      children: "Enqiure us for pricing",
                    }),
                    i.jsxs("ul", {
                      class:
                        "mt-10 list-image-[url('./YOU-CAN-SET-HERE-YOUR-ARROW-SVG-OR-IMG')]",
                      children: [
                        i.jsxs("li", {
                          class: "mb-2 dark:text-gray-600",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Access to all sports",
                          ],
                        }),
                        i.jsxs("li", {
                          class: "mb-2 dark:text-gray-600",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Customer support",
                          ],
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      class:
                        "mt-6 bg-purple-500 rounded-md py-2 px-4 text-white text-xl",
                      children: "Start Today",
                    }),
                    i.jsx("small", {
                      class: "text-sm mt-2 ",
                      children: "Perfect, all inclusive.",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  class:
                    "rounded-md w-[90%] mx-auto md:w-min-1/3 mx-auto items-center border border-gray-300 py-16 px-4 xl:px-24 mb-4 flex flex-col hover:shadow-lg transition-all duration-100 ease-linear",
                  children: [
                    i.jsx("p", {
                      class: "text-gray-700  text-2xl",
                      children: "Team Plan",
                    }),
                    i.jsx("div", {
                      className: "flex gap-2 justify-center items-center",
                      children: i.jsx("h1", {
                        class: "font-semibold text-4xl pt-2 pb-1 ",
                      }),
                    }),
                    i.jsx("p", {
                      class: "text-gray-400",
                      children: "Enquire us for pricing",
                    }),
                    i.jsxs("ul", {
                      class:
                        "mt-10 list-image-[url('./YOU-CAN-SET-HERE-YOUR-ARROW-SVG-OR-IMG')] ",
                      children: [
                        i.jsxs("li", {
                          class: "mb-2",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Access to all Features",
                          ],
                        }),
                        i.jsxs("li", {
                          class: "mb-2",
                          children: [
                            i.jsx("img", {
                              src: "https://www.svgrepo.com/show/453892/checkmark.svg",
                              class: "inline h-6 w-6 text-gray-500 mr-3 -mt-1",
                            }),
                            " ",
                            "Customer support",
                          ],
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      class:
                        "mt-6 bg-gray-100 rounded-md py-2 px-4 text-black text-xl",
                      children: "Subscribe",
                    }),
                    i.jsx("small", {
                      class: "text-sm mt-2",
                      children: "View More",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  K9 = () =>
    i.jsx("div", {
      class: "bg-neutral-950",
      children: i.jsxs("section", {
        class: "max-w-5xl mx-auto w-full px-10 py-10",
        children: [
          i.jsxs("div", {
            class: "flex items-center justify-center flex-col gap-y-2 py-5",
            children: [
              i.jsxs("h2", {
                class:
                  "text-2xl md:text-3xl lg:text-4xl font-bold max-w-xl mx-auto text-center text-white",
                children: [
                  "What Our",
                  i.jsx("span", {
                    class: "text-purple-500",
                    children: " Users Say",
                  }),
                ],
              }),
              i.jsx("p", {
                class: "text-lg font-medium text-slate-400/70",
                children: "Discover how our service can benefit you",
              }),
            ],
          }),
          i.jsxs("div", {
            class: "grid grid-cols-1 lg:grid-cols-5 gap-5 w-full",
            children: [
              i.jsxs("div", {
                class:
                  "border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between",
                children: [
                  i.jsxs("div", {
                    class: "flex flex-col gap-y-3.5",
                    children: [
                      i.jsx("p", {
                        class: "font-bold text-xl text-white",
                        children: "Efficient customer support",
                      }),
                      i.jsx("p", {
                        class: "font-medium text-white",
                        children:
                          "The customer support team at our service is incredibly responsive and helpful. They went above and beyond to assist me with my issue.",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    class: "flex flex-col",
                    children: [
                      i.jsx("p", {
                        class: "pt-2 text-sm font-semibold text-white",
                        children: "Emily Smith",
                      }),
                      i.jsx("p", {
                        class: "text-sm font-medium text-slate-100/70",
                        children: "Marketing Manager at ABC Company",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                class:
                  "border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between",
                children: [
                  i.jsxs("div", {
                    class: "flex flex-col gap-y-3.5",
                    children: [
                      i.jsx("p", {
                        class: "font-bold text-xl text-white",
                        children: "Excellent product features",
                      }),
                      i.jsx("p", {
                        class: "font-medium text-white",
                        children:
                          "The features offered by our service are outstanding. They have greatly improved our workflow and efficiency.",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    class: "flex flex-col",
                    children: [
                      i.jsx("p", {
                        class: "pt-2 text-sm font-semibold text-white",
                        children: "Michael Johnson",
                      }),
                      i.jsx("p", {
                        class: "text-sm font-medium text-slate-100/70",
                        children: "CEO at XYZ Corporation",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                class:
                  "border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between",
                children: [
                  i.jsxs("div", {
                    class: "flex flex-col gap-y-3.5",
                    children: [
                      i.jsx("p", {
                        class: "font-bold text-xl text-white",
                        children: "Seamless integration process",
                      }),
                      i.jsx("p", {
                        class: "font-medium text-white",
                        children:
                          "Integrating our systems with our service was smooth and hassle-free. The support team guided us through every step of the process.",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    class: "flex flex-col",
                    children: [
                      i.jsx("p", {
                        class: "pt-2 text-sm font-semibold text-white",
                        children: "Sarah Brown",
                      }),
                      i.jsx("p", {
                        class: "text-sm font-medium text-slate-100/70",
                        children: "CTO at XYZ Corporation",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                class:
                  "border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between",
                children: [
                  i.jsxs("div", {
                    class: "flex flex-col gap-y-3.5",
                    children: [
                      i.jsx("p", {
                        class: "font-bold text-xl text-white",
                        children: "Reliable service uptime",
                      }),
                      i.jsx("p", {
                        class: "font-medium text-white",
                        children:
                          "Our service has consistently maintained high uptime, ensuring that our operations run smoothly without any disruptions.",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    class: "flex flex-col",
                    children: [
                      i.jsx("p", {
                        class: "pt-2 text-sm font-semibold text-white",
                        children: "James White",
                      }),
                      i.jsx("p", {
                        class: "text-sm font-medium text-slate-100/70",
                        children: "COO at XYZ Corporation",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Z9 = () =>
    i.jsx("div", {
      className: "bg-white p-16",
      children: i.jsx("div", {
        class: "mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20",
        children: i.jsxs("div", {
          class:
            "relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm",
          children: [
            i.jsx("h2", {
              class:
                "mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
              children: "Our Mission: Data-Driven Sports Excellence",
            }),
            i.jsx("h3", {
              class: "mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500",
              children:
                "At Zenminds, we aim to empower athletes, coaches, and teams with the tools they need to succeed. By starting with data collection and evolving into AI-powered insights, we’re committed to redefining how sports are analyzed and played.",
            }),
            i.jsx("div", {
              class: "mt-8 flex items-center justify-center gap-x-6",
              children: i.jsxs("a", {
                class:
                  "inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                href: "#",
                children: [
                  "Explore the forum",
                  i.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-4 w-4",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: i.jsx("path", {
                      "fill-rule": "evenodd",
                      d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                      "clip-rule": "evenodd",
                    }),
                  }),
                ],
              }),
            }),
            i.jsxs("svg", {
              viewBox: "0 0 1024 1024",
              class:
                "absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]",
              "aria-hidden": "true",
              children: [
                i.jsx("circle", {
                  cx: "512",
                  cy: "512",
                  r: "512",
                  fill: "url(#827591b1-ce8c-4110-b064-7cb85a0b1217)",
                  "fill-opacity": "0.7",
                }),
                i.jsx("defs", {
                  children: i.jsxs("radialGradient", {
                    id: "827591b1-ce8c-4110-b064-7cb85a0b1217",
                    children: [
                      i.jsx("stop", { "stop-color": "#3b82f6" }),
                      i.jsx("stop", { offset: "1", "stop-color": "#1d4ed8" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Y9 = ({ question: e, answer: t }) =>
    i.jsxs("li", {
      className: "text-left mb-10",
      children: [
        i.jsxs("div", {
          className: "flex flex-row items-start mb-5",
          children: [
            i.jsx("div", {
              className:
                "hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold",
              children: i.jsx("svg", {
                width: "30px",
                fill: "white",
                height: "30px",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: i.jsx("g", {
                  "data-name": "Layer 2",
                  children: i.jsxs("g", {
                    "data-name": "menu-arrow",
                    children: [
                      i.jsx("path", {
                        d: "M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z",
                      }),
                      i.jsx("circle", { cx: "12", cy: "19", r: "1" }),
                    ],
                  }),
                }),
              }),
            }),
            i.jsx("div", {
              className: "bg-gray-100 p-5 px-10 w-full flex items-center",
              children: i.jsx("h4", {
                className: "text-md leading-6 font-medium text-gray-900",
                children: e,
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "flex flex-row items-start",
          children: i.jsx("div", {
            className: "bg-indigo-100 p-5 px-10 w-full flex items-center",
            children: i.jsx("p", {
              className: "text-gray-700 text-sm",
              children: t,
            }),
          }),
        }),
      ],
    }),
  Q9 = () => {
    const e = [
      {
        question: "1.	What sports do you currently support?",
        answer:
          "Cricket, Kabaddi, Kho-Kho, Basketball, Volleyball, Badminton, Field Hockey, Tennis.",
      },
      {
        question: "2.	What is the data collection tool?",
        answer:
          "A tool to log and analyze player stats and match data with ease.",
      },
    ];
    return i.jsx("div", {
      className: "py-4 bg-white",
      children: i.jsxs("div", {
        className:
          "max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between",
        children: [
          i.jsxs("div", {
            className: "text-center",
            children: [
              i.jsx("p", {
                className: "mt-4 text-sm leading-7 text-gray-500 font-regular",
                children: "F.A.Q",
              }),
              i.jsxs("h3", {
                className:
                  "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",
                children: [
                  "Frequently Asked ",
                  i.jsx("span", {
                    className: "text-indigo-600",
                    children: "Questions",
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className: "mt-20",
            children: i.jsx("ul", {
              children: e.map((t, n) =>
                i.jsx(Y9, { question: t.question, answer: t.answer }, n)
              ),
            }),
          }),
        ],
      }),
    });
  },
  X9 = () =>
    i.jsx("footer", {
      class: "bg-neutral-950",
      children: i.jsx("div", {
        class: "container mx-auto p-0 md:p-8 xl:px-0",
        children: i.jsxs("div", {
          class: "mx-auto max-w-7xl px-6 pb-10 pt-16",
          children: [
            i.jsxs("div", {
              class: "xl:grid xl:grid-cols-3 xl:gap-8",
              children: [
                i.jsxs("div", {
                  class: "space-y-4",
                  children: [
                    i.jsx("div", {
                      children: i.jsx("a", {
                        href: "/",
                        children: i.jsxs("div", {
                          class:
                            "flex items-center space-x-2 text-2xl font-medium",
                          children: [
                            i.jsx("span", {
                              children: i.jsx("img", {
                                src: "https://media.licdn.com/dms/image/v2/C560BAQFMiBX3iYUtpQ/company-logo_200_200/company-logo_200_200/0/1630603676294?e=2147483647&v=beta&t=0EL8qG282pGN-zuypQFs4dG_At-XHwSCfNT0T-F7vrs",
                                alt: "AI Logo",
                                width: "64",
                                height: "64",
                                class: "w-16 rounded-full",
                              }),
                            }),
                            i.jsx("span", {
                              class: "text-white",
                              children: "Zenminds Sporting Technologies",
                            }),
                          ],
                        }),
                      }),
                    }),
                    i.jsx("div", {
                      class: "max-w-md pr-16 text-md text-gray-200",
                      children:
                        "Empowering sports with analytics, marketing and Branding.",
                    }),
                    i.jsxs("div", {
                      class: "flex space-x-2",
                      children: [
                        i.jsxs("a", {
                          href: "https://www.linkedin.com/company/zenminds-sporting-technologies/?originalSubdomain=in",
                          target: "_blank",
                          class: "text-gray-200 hover:text-gray-200",
                          children: [
                            i.jsx("span", {
                              class: "sr-only",
                              children: "Linkedin",
                            }),
                            i.jsx("svg", {
                              fill: "currentColor",
                              viewBox: "0 0 24 24",
                              class: "h-6 w-6",
                              "aria-hidden": "true",
                              children: i.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z",
                                "clip-rule": "evenodd",
                              }),
                            }),
                          ],
                        }),
                        i.jsxs("a", {
                          href: "https://www.instagram.com/sporting_zenminds/?hl=en",
                          target: "_blank",
                          class: "text-gray-200 hover:text-gray-200",
                          children: [
                            i.jsx("span", {
                              class: "sr-only",
                              children: "Instagram",
                            }),
                            i.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              class: "bi bi-instagram",
                              viewBox: "0 0 16 16",
                              children: i.jsx("path", {
                                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  class: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0",
                  children: [
                    i.jsxs("div", {
                      class: "md:grid md:grid-cols-2 md:gap-8",
                      children: [
                        i.jsxs("div", {
                          children: [
                            i.jsx("h3", {
                              class:
                                "text-md font-semibold leading-6 text-white",
                              children: "Our Solutions",
                            }),
                            i.jsxs("ul", {
                              role: "list",
                              class: "mt-6 space-y-4",
                              children: [
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/aiplatform",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Match Coding Tool",
                                  }),
                                }),
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/aialgorithms",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Analyzer Tool",
                                  }),
                                }),
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/industryapplications",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Future AI Tools",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          class: "mt-10 md:mt-0",
                          children: [
                            i.jsx("h3", {
                              class:
                                "text-md font-semibold leading-6 text-white",
                              children: "Sports",
                            }),
                            i.jsx("ul", {
                              role: "list",
                              class: "mt-6 space-y-4",
                              children: i.jsx("li", {
                                children: i.jsx("a", {
                                  href: "/predictiveanalysis",
                                  class:
                                    "text-md leading-6 text-gray-300 hover:text-gray-50",
                                  children: "Cricket",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      class: "md:grid md:grid-cols-2 md:gap-8",
                      children: [
                        i.jsxs("div", {
                          children: [
                            i.jsx("h3", {
                              class:
                                "text-md font-semibold leading-6 text-white",
                              children: "Resources",
                            }),
                            i.jsxs("ul", {
                              role: "list",
                              class: "mt-6 space-y-4",
                              children: [
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/pricing",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Pricing",
                                  }),
                                }),
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/terms",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Terms of Service",
                                  }),
                                }),
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/privacy",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Privacy Policy",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          class: "mt-10 md:mt-0",
                          children: [
                            i.jsx("h3", {
                              class:
                                "text-md font-semibold leading-6 text-white",
                              children: "Company",
                            }),
                            i.jsxs("ul", {
                              role: "list",
                              class: "mt-6 space-y-4",
                              children: [
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/aboutus",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "About Us",
                                  }),
                                }),
                                i.jsx("li", {
                                  children: i.jsx("a", {
                                    href: "/contactus",
                                    class:
                                      "text-md leading-6 text-gray-300 hover:text-gray-50",
                                    children: "Contact Us",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              class: "mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24",
              children: i.jsx("div", {
                class: "text-md text-center text-white",
                children:
                  "Copyright © 2024 . Crafted  by Zeminds Sporting Technologies",
              }),
            }),
          ],
        }),
      }),
    }),
  J9 = () => {
    const { isAuthenticated: e, logout: t } = Al(),
      n = Ut(),
      [r, s] = E.useState([]);
    E.useEffect(() => {
      Hg({ setPlans: s });
    }, []);
    const o = ({ link: l }) => {
        n(l);
      },
      a = () => {
        t(), n("/login");
      };
    return i.jsxs("div", {
      className: "bg-secondary1000 relative h-screen overflow-auto text-white",
      children: [
        i.jsxs("div", {
          className:
            "bg-primary1000 fixed z-10 w-full text-white flex justify-between p-4 shadow-xl",
          children: [
            i.jsx("p", { className: "font-bold", children: "Zenminds" }),
            i.jsx("div", {
              className: "flex gap-4",
              children: e
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(ie, {
                        to: "/",
                        children: i.jsx("p", {
                          className: "border-b-2 border-blue-900",
                          children: "Home",
                        }),
                      }),
                      i.jsx(ie, { to: "/products", children: "Products" }),
                      i.jsx(ie, {
                        to: "/profile",
                        children: i.jsx("p", { children: "Profile" }),
                      }),
                      i.jsx("p", {
                        onClick: a,
                        className:
                          "cursor-pointer bg-purple-700 px-2 rounded bg-opacity-50",
                        children: "Logout",
                      }),
                    ],
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(ie, { to: "/signup", children: "Signup" }),
                      i.jsx(ie, {
                        to: "/login",
                        className: "bg-primary1000 text-white px-2",
                        children: "Login",
                      }),
                    ],
                  }),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "mt-12",
          children: [
            i.jsx("div", {
              className: "bg-white",
              children: i.jsx("section", {
                class:
                  "pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover",
                children: i.jsxs("div", {
                  class:
                    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center",
                  children: [
                    i.jsxs("div", {
                      class:
                        "border border-purple-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4",
                      children: [
                        i.jsx("span", {
                          class:
                            "font-inter text-xs font-medium text-gray-900 ml-3",
                          children: "Explore our sports categories.",
                        }),
                        i.jsx("a", {
                          href: "javascript:;",
                          class:
                            "w-8 h-8 rounded-full flex justify-center items-center bg-purple-600",
                          children: i.jsx("svg", {
                            width: "17",
                            height: "16",
                            viewBox: "0 0 17 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: i.jsx("path", {
                              d: "M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241",
                              stroke: "white",
                              "stroke-width": "1.6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                          }),
                        }),
                      ],
                    }),
                    i.jsxs("h1", {
                      class:
                        "max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]",
                      children: [
                        "All-in-One Data Collection Tool for",
                        i.jsx("span", {
                          class: "text-purple-600",
                          children: " Sports Analytics ",
                        }),
                      ],
                    }),
                    i.jsx("p", {
                      class:
                        "max-w-lg mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9",
                      children:
                        "Track, Analyze, and Improve Player and Team Performance Across Multiple Sports with Ease.",
                    }),
                    e
                      ? i.jsx("div", {
                          className: "flex justify-center w-full",
                          children: i.jsx("div", {
                            className: "flex flex-wrap gap-4 p-4 ",
                            children:
                              r.length > 0
                                ? r.map((l) =>
                                    l.plans
                                      .filter((c) => c.isSubscribed)
                                      .map((c) =>
                                        i.jsx(
                                          "div",
                                          {
                                            className:
                                              "bg-gradient-to-r from-purple-800 to-black bg-opacity-20 px-4 py-2 shadow-md rounded-lg hover:scale-100 scale-95 transition-all duration-150 ease-linear flex",
                                            children: i.jsxs("div", {
                                              className:
                                                "flex gap-4 justify-end items-center px-4",
                                              children: [
                                                i.jsx("h3", {
                                                  className:
                                                    "text-xl font-bold py-2",
                                                  children: c.name,
                                                }),
                                                i.jsxs("button", {
                                                  className:
                                                    "relative text-white py-2 px-4 rounded  hover:shadow-lg flex gap-4",
                                                  onClick: () => {
                                                    o({ link: c.url });
                                                  },
                                                  children: [
                                                    i.jsxs("span", {
                                                      class:
                                                        "relative z-10 flex gap-4 ",
                                                      children: [
                                                        "Start App",
                                                        i.jsx(fy, {}),
                                                      ],
                                                    }),
                                                    i.jsx("span", {
                                                      class:
                                                        "absolute inset-0 rounded border-2 border-transparent before:content-[''] before:absolute before:inset-0 before:rounded before:border-4 before:border-transparent before:bg-gradient-to-r before:from-gray-600 before:via-purple-800 before:to-gray-600 before:bg-[length:200%_200%] before:animate-borderGlow",
                                                    }),
                                                  ],
                                                }),
                                                i.jsx("p", {
                                                  className:
                                                    "h-3 w-3 rounded-full bg-gradient-to-r from-gray-800 to-purple-800 animate-pulse",
                                                }),
                                              ],
                                            }),
                                          },
                                          c.id
                                        )
                                      )
                                  )
                                : i.jsx("p", {
                                    children: "No plans available",
                                  }),
                          }),
                        })
                      : i.jsx("div", {
                          children: i.jsxs("a", {
                            href: "javascript:;",
                            class:
                              "w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-purple-600 shadow-xs hover:bg-purple-700 transition-all duration-500",
                            children: [
                              "Explore",
                              i.jsx("svg", {
                                class: "ml-2",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: i.jsx("path", {
                                  d: "M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5",
                                  stroke: "white",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              }),
                            ],
                          }),
                        }),
                    i.jsx("div", {
                      class: "flex justify-center",
                      children: i.jsx("img", {
                        src: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "",
                        className: "rounded-xl scale-75",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            i.jsx("div", {
              children: i.jsxs("div", {
                children: [
                  i.jsx(D9, {}),
                  i.jsx(V9, {}),
                  i.jsx(H9, {}),
                  i.jsx(q9, {}),
                  i.jsx(G9, {}),
                  i.jsx(K9, {}),
                  i.jsx(Z9, {}),
                  i.jsx(Q9, {}),
                  i.jsx(X9, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
let e7 = { data: "" },
  t7 = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || e7,
  n7 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  r7 = /\/\*[^]*?\*\/|  +/g,
  hm = /\n+/g,
  er = (e, t) => {
    let n = "",
      r = "",
      s = "";
    for (let o in e) {
      let a = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + a + ";")
          : (r +=
              o[1] == "f"
                ? er(a, o)
                : o + "{" + er(a, o[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
        ? (r += er(
            a,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  o.replace(/(^:.*)|([^,])+/g, (c) =>
                    /&/.test(c) ? c.replace(/&/g, l) : l ? l + " " + c : c
                  )
                )
              : o
          ))
        : a != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (s += er.p ? er.p(o, a) : o + ":" + a + ";"));
    }
    return n + (t && s ? t + "{" + s + "}" : s) + r;
  },
  Nn = {},
  py = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + py(e[n]);
      return t;
    }
    return e;
  },
  s7 = (e, t, n, r, s) => {
    let o = py(e),
      a =
        Nn[o] ||
        (Nn[o] = ((c) => {
          let u = 0,
            f = 11;
          for (; u < c.length; ) f = (101 * f + c.charCodeAt(u++)) >>> 0;
          return "go" + f;
        })(o));
    if (!Nn[a]) {
      let c =
        o !== e
          ? e
          : ((u) => {
              let f,
                d,
                p = [{}];
              for (; (f = n7.exec(u.replace(r7, ""))); )
                f[4]
                  ? p.shift()
                  : f[3]
                  ? ((d = f[3].replace(hm, " ").trim()),
                    p.unshift((p[0][d] = p[0][d] || {})))
                  : (p[0][f[1]] = f[2].replace(hm, " ").trim());
              return p[0];
            })(e);
      Nn[a] = er(s ? { ["@keyframes " + a]: c } : c, n ? "" : "." + a);
    }
    let l = n && Nn.g ? Nn.g : null;
    return (
      n && (Nn.g = Nn[a]),
      ((c, u, f, d) => {
        d
          ? (u.data = u.data.replace(d, c))
          : u.data.indexOf(c) === -1 && (u.data = f ? c + u.data : u.data + c);
      })(Nn[a], t, r, l),
      a
    );
  },
  o7 = (e, t, n) =>
    e.reduce((r, s, o) => {
      let a = t[o];
      if (a && a.call) {
        let l = a(n),
          c = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        a = c
          ? "." + c
          : l && typeof l == "object"
          ? l.props
            ? ""
            : er(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + s + (a ?? "");
    }, "");
function Zl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return s7(
    n.unshift
      ? n.raw
        ? o7(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {})
      : n,
    t7(t.target),
    t.g,
    t.o,
    t.k
  );
}
let hy, xd, vd;
Zl.bind({ g: 1 });
let Fn = Zl.bind({ k: 1 });
function i7(e, t, n, r) {
  (er.p = t), (hy = e), (xd = n), (vd = r);
}
function Cr(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function s(o, a) {
      let l = Object.assign({}, o),
        c = l.className || s.className;
      (n.p = Object.assign({ theme: xd && xd() }, l)),
        (n.o = / *go\d+/.test(c)),
        (l.className = Zl.apply(n, r) + (c ? " " + c : ""));
      let u = e;
      return (
        e[0] && ((u = l.as || e), delete l.as), vd && u[0] && vd(l), hy(u, l)
      );
    }
    return s;
  };
}
var a7 = (e) => typeof e == "function",
  sl = (e, t) => (a7(e) ? e(t) : e),
  l7 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  my = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  c7 = 20,
  ba = new Map(),
  u7 = 1e3,
  mm = (e) => {
    if (ba.has(e)) return;
    let t = setTimeout(() => {
      ba.delete(e), Kr({ type: 4, toastId: e });
    }, u7);
    ba.set(e, t);
  },
  d7 = (e) => {
    let t = ba.get(e);
    t && clearTimeout(t);
  },
  wd = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, c7) };
      case 1:
        return (
          t.toast.id && d7(t.toast.id),
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
          ? wd(e, { type: 1, toast: n })
          : wd(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? mm(r)
            : e.toasts.forEach((o) => {
                mm(o.id);
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
  ja = [],
  ka = { toasts: [], pausedAt: void 0 },
  Kr = (e) => {
    (ka = wd(ka, e)),
      ja.forEach((t) => {
        t(ka);
      });
  },
  f7 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  p7 = (e = {}) => {
    let [t, n] = E.useState(ka);
    E.useEffect(
      () => (
        ja.push(n),
        () => {
          let s = ja.indexOf(n);
          s > -1 && ja.splice(s, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((s) => {
      var o, a;
      return {
        ...e,
        ...e[s.type],
        ...s,
        duration:
          s.duration ||
          ((o = e[s.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          f7[s.type],
        style: {
          ...e.style,
          ...((a = e[s.type]) == null ? void 0 : a.style),
          ...s.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  h7 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || l7(),
  }),
  yi = (e) => (t, n) => {
    let r = h7(t, e, n);
    return Kr({ type: 2, toast: r }), r.id;
  },
  at = (e, t) => yi("blank")(e, t);
at.error = yi("error");
at.success = yi("success");
at.loading = yi("loading");
at.custom = yi("custom");
at.dismiss = (e) => {
  Kr({ type: 3, toastId: e });
};
at.remove = (e) => Kr({ type: 4, toastId: e });
at.promise = (e, t, n) => {
  let r = at.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (s) => (
          at.success(sl(t.success, s), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          s
        )
      )
      .catch((s) => {
        at.error(sl(t.error, s), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var m7 = (e, t) => {
    Kr({ type: 1, toast: { id: e, height: t } });
  },
  g7 = () => {
    Kr({ type: 5, time: Date.now() });
  },
  y7 = (e) => {
    let { toasts: t, pausedAt: n } = p7(e);
    E.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        a = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let c = (l.duration || 0) + l.pauseDuration - (o - l.createdAt);
          if (c < 0) {
            l.visible && at.dismiss(l.id);
            return;
          }
          return setTimeout(() => at.dismiss(l.id), c);
        });
      return () => {
        a.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = E.useCallback(() => {
        n && Kr({ type: 6, time: Date.now() });
      }, [n]),
      s = E.useCallback(
        (o, a) => {
          let {
              reverseOrder: l = !1,
              gutter: c = 8,
              defaultPosition: u,
            } = a || {},
            f = t.filter(
              (y) => (y.position || u) === (o.position || u) && y.height
            ),
            d = f.findIndex((y) => y.id === o.id),
            p = f.filter((y, m) => m < d && y.visible).length;
          return f
            .filter((y) => y.visible)
            .slice(...(l ? [p + 1] : [0, p]))
            .reduce((y, m) => y + (m.height || 0) + c, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: m7,
        startPause: g7,
        endPause: r,
        calculateOffset: s,
      },
    };
  },
  x7 = Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  v7 = Fn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  w7 = Fn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  S7 = Cr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x7} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${v7} 0.15s ease-out forwards;
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
    animation: ${w7} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  C7 = Fn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  b7 = Cr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${C7} 1s linear infinite;
`,
  j7 = Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  k7 = Fn`
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
  N7 = Cr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j7} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${k7} 0.2s ease-out forwards;
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
  E7 = Cr("div")`
  position: absolute;
`,
  T7 = Cr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  _7 = Fn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  R7 = Cr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_7} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  A7 = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? E.createElement(R7, null, t)
        : t
      : n === "blank"
      ? null
      : E.createElement(
          T7,
          null,
          E.createElement(b7, { ...r }),
          n !== "loading" &&
            E.createElement(
              E7,
              null,
              n === "error"
                ? E.createElement(S7, { ...r })
                : E.createElement(N7, { ...r })
            )
        );
  },
  M7 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  P7 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  L7 = "0%{opacity:0;} 100%{opacity:1;}",
  O7 = "0%{opacity:1;} 100%{opacity:0;}",
  B7 = Cr("div")`
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
  I7 = Cr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  U7 = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, s] = my() ? [L7, O7] : [M7(n), P7(n)];
    return {
      animation: t
        ? `${Fn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Fn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  $7 = E.memo(({ toast: e, position: t, style: n, children: r }) => {
    let s = e.height
        ? U7(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = E.createElement(A7, { toast: e }),
      a = E.createElement(I7, { ...e.ariaProps }, sl(e.message, e));
    return E.createElement(
      B7,
      { className: e.className, style: { ...s, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: a })
        : E.createElement(E.Fragment, null, o, a)
    );
  });
i7(E.createElement);
var F7 = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: s,
  }) => {
    let o = E.useCallback(
      (a) => {
        if (a) {
          let l = () => {
            let c = a.getBoundingClientRect().height;
            r(e, c);
          };
          l(),
            new MutationObserver(l).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return E.createElement("div", { ref: o, className: t, style: n }, s);
  },
  D7 = (e, t) => {
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
      transition: my() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...s,
    };
  },
  z7 = Zl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ji = 16,
  V7 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: s,
    containerStyle: o,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: c } = y7(n);
    return E.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Ji,
          left: Ji,
          right: Ji,
          bottom: Ji,
          pointerEvents: "none",
          ...o,
        },
        className: a,
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
          p = D7(f, d);
        return E.createElement(
          F7,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: c.updateHeight,
            className: u.visible ? z7 : "",
            style: p,
          },
          u.type === "custom"
            ? sl(u.message, u)
            : s
            ? s(u)
            : E.createElement($7, { toast: u, position: f })
        );
      })
    );
  },
  X = at;
const gy = async (e, t, n) => {
    const { login: r, logout: s } = Al.getState();
    try {
      const o = await Ne.post("https://zensportstech.com/api/user/login/", {
          email: e,
          password: t,
        }),
        { access: a, refresh: l } = o.data;
      localStorage.setItem("access_token", a),
        localStorage.setItem("refresh_token", l),
        r(),
        n("/");
    } catch (o) {
      console.error("Login failed", o.response),
        alert("Login failed. Please check your credentials and try again.");
    }
  },
  W7 = async (e, t) => {
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
      const r = await Ne.post("https://zensportstech.com/api/user/signup/", n, {
        headers: { "Content-Type": "application/json" },
      });
      return (
        X.success("Signup successful!"),
        await gy(n.email, n.password, t),
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
  qn = ({ title: e, name: t, type: n = "text", inputHandler: r }) =>
    i.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        i.jsx("p", { className: "text-sm", children: e }),
        i.jsx("input", {
          type: n,
          name: t,
          onChange: r,
          className: `\r
          bg-gray-700 focus:bg-gray-800 focus:border-2 \r
          rounded focus:border-purple-600 px-4 py-1`,
        }),
      ],
    }),
  H7 = () => {
    const e = Ut(),
      [t, n] = E.useState({
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
          lastName: a,
          email: l,
          password: c,
          phone: u,
          interestedSport: f,
          organisation: d,
          role: p,
          isAgreed: y,
        } = t;
        if (!o || !a || !l || !c || !u || !f || !d || !p) {
          at.error("Please fill out all Entries!");
          return;
        }
        if (!y) {
          at.error("Please Agree to our T&C and Privacy-policy!");
          return;
        }
        W7(t, e);
      },
      s = (o) => {
        const { name: a, value: l, type: c, checked: u } = o.target;
        n((f) => ({ ...f, [a]: c === "checkbox" ? u : l }));
      };
    return i.jsx("div", {
      className: "bg-gray-900 h-screen flex justify-center text-white",
      children: i.jsxs("div", {
        className: "mt-8 bg-gray-800 w-1/2 mb-16 py-4 px-8 rounded-md",
        children: [
          i.jsx("p", {
            className: "text-center mb-8",
            children: "Start your account today!",
          }),
          i.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              i.jsx(qn, {
                title: "First Name*",
                name: "firstName",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Last Name*",
                name: "lastName",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Email Address*",
                name: "email",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Password*",
                name: "password",
                type: "password",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Phone Number*",
                name: "phone",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Interested Sport*",
                name: "interestedSport",
                inputHandler: s,
              }),
              i.jsx(qn, {
                title: "Organisation*",
                name: "organisation",
                inputHandler: s,
              }),
              i.jsx(qn, { title: "Role*", name: "role", inputHandler: s }),
            ],
          }),
          i.jsxs("div", {
            className: "mt-8 flex flex-col gap-4",
            children: [
              i.jsxs("div", {
                className: "flex gap-2",
                children: [
                  i.jsx("input", {
                    type: "checkbox",
                    name: "isAgreed",
                    checked: t.isAgreed,
                    onChange: s,
                  }),
                  i.jsxs("p", {
                    children: [
                      "I agree to the ",
                      i.jsx("a", {
                        href: "",
                        children: "terms and conditions",
                      }),
                      " &",
                      " ",
                      i.jsx("a", { href: "", children: "Privacy policy" }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "flex gap-2",
                children: [
                  i.jsx("input", {
                    type: "checkbox",
                    name: "isNewsLetter",
                    checked: t.isNewsLetter,
                    onChange: s,
                  }),
                  i.jsxs("p", {
                    children: [
                      "I sign up for ",
                      i.jsx("a", { href: "", children: "News Letter" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className: "flex justify-center mt-8",
            children: i.jsx("button", {
              className: "bg-primary500 w-1/2 py-2 rounded-full",
              onClick: r,
              children: "Create Account",
            }),
          }),
          i.jsx("div", {
            className: "flex justify-center mt-4",
            children: i.jsx(ie, {
              to: "/login",
              children: "Already have an Account? Login Here!",
            }),
          }),
        ],
      }),
    });
  },
  q7 = () => {
    const [e, t] = E.useState(""),
      [n, r] = E.useState(""),
      s = Ut(),
      o = () => {
        gy(e, n, s);
      };
    return i.jsx("div", {
      className: "bg-gray-900 h-screen flex justify-center text-white",
      children: i.jsxs("div", {
        className: "mt-32 bg-gray-800 w-1/4 mb-24 py-4 px-8 rounded-md",
        children: [
          i.jsx("p", {
            className: "text-center",
            children: "Welcome Back, Login to Your account!",
          }),
          i.jsxs("div", {
            className: "mt-16 flex flex-col gap-2 w-full",
            children: [
              i.jsx("p", { children: "Registered Email" }),
              i.jsx("input", {
                type: "text",
                className: "rounded-md bg-gray-900 px-2 py-2",
                onChange: (a) => t(a.target.value),
              }),
            ],
          }),
          i.jsxs("div", {
            className: "mt-8 flex flex-col gap-2 w-full",
            children: [
              i.jsx("p", { children: "Password" }),
              i.jsx("input", {
                type: "password",
                className: "rounded-md bg-gray-900 px-2 py-2",
                onChange: (a) => r(a.target.value),
              }),
            ],
          }),
          i.jsx("button", {
            className: "my-8 px-4 py-2 bg-primary500 rounded-full w-full",
            onClick: o,
            children: "Login",
          }),
          i.jsx(ie, {
            to: "/signup",
            className: "text-center underline",
            children: "Don't have an account? Register Here!",
          }),
        ],
      }),
    });
  },
  G7 = ae(
    i.jsx("path", {
      d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z",
    }),
    "PaymentOutlined"
  ),
  K7 = async ({ userSubscriptionId: e }) => {
    try {
      const t = ge.put(`plans/subscription/update/${e}/`, { isValid: !0 });
      return X.success("Subscription Successfull!"), t;
    } catch {
      X.error("Updating Failed");
    }
  },
  yy = ae(i.jsx("path", { d: "M6 19h4V5H6zm8-14v14h4V5z" }), "Pause"),
  xy = ae(
    i.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  Z7 = () => {
    const { isAuthenticated: e, logout: t } = Al(),
      n = Ut(),
      [r, s] = E.useState([]),
      [o, a] = E.useState({});
    E.useEffect(() => {
      Hg({ setPlans: s });
    }, []),
      E.useEffect(() => {
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
      E.useEffect(() => {
        const d = {};
        r.forEach((p) => {
          p.plans.length > 0 && (d[p.category] = p.plans[0].id);
        }),
          a(d);
      }, [r]);
    const l = () => {
        t(), n("/login");
      },
      c = async ({ planId: d }) => {
        console.log("PID ", d);
        const p = await N5(d);
        var y = {
            key: p.keyId,
            subscription_id: p.subscriptionId,
            name: "Zenminds Sporting Technology",
            description: "Monthly Test Plan",
            handler: function (g) {
              g.razorpay_payment_id
                ? (console.log("Sub data ", p.userSubscription),
                  K7({ userSubscriptionId: p.userSubscription }),
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
          m = new Razorpay(y);
        m.open();
      },
      u = ({ link: d }) => {
        n(d);
      },
      f = (d, p) => {
        a((y) => ({ ...y, [d]: p }));
      };
    return i.jsxs("div", {
      className: "bg-primary1000 h-screen ",
      children: [
        i.jsxs("div", {
          className:
            "text-white bg-secondary200 bg-opacity-30 flex justify-between p-4 shadow-xl",
          children: [
            i.jsx("p", {
              className: "font-bold",
              children: "Zenminds - Subscription Store",
            }),
            i.jsx("div", {
              className: "flex gap-4",
              children: e
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(ie, { to: "/", children: "Home" }),
                      i.jsx(ie, {
                        to: "/products",
                        children: i.jsx("p", {
                          className: "border-b-2 border-blue-900",
                          children: "Products",
                        }),
                      }),
                      i.jsx(ie, {
                        to: "/profile",
                        children: i.jsx("p", { children: "Profile" }),
                      }),
                      i.jsx("p", {
                        onClick: l,
                        className: "cursor-pointer text-red-700",
                        children: "Logout",
                      }),
                    ],
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(ie, { to: "/signup", children: "Signup" }),
                      i.jsx(ie, {
                        to: "/login",
                        className: "bg-primary1000 text-white px-2",
                        children: "Login",
                      }),
                    ],
                  }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "p-4 grid grid-cols-3 gap-24 px-24",
          children:
            r.length > 0
              ? r.map((d) => {
                  const p = o[d.category],
                    y = d.plans.find((m) => m.id === p);
                  return i.jsxs(
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
                        i.jsxs("div", {
                          className: "flex gap-6",
                          children: [
                            i.jsx("h2", {
                              className: "font-bold",
                              children: d.category,
                            }),
                            i.jsx("div", {
                              className: "flex",
                              children: d.plans.map((m) =>
                                i.jsx(
                                  "button",
                                  {
                                    className: `px-4 bg-opacity-40 ${
                                      p === m.id
                                        ? "bg-primary500 text-white"
                                        : "bg-secondary1000 text-gray-100 opacity-70"
                                    }  transition-all duration-150`,
                                    onClick: () => f(d.category, m.id),
                                    children: m.name,
                                  },
                                  m.id
                                )
                              ),
                            }),
                          ],
                        }),
                        y &&
                          i.jsxs("div", {
                            className: "",
                            children: [
                              i.jsx("ul", {
                                className: "list-disc ml-5 py-8",
                                children: y.description
                                  .split(".")
                                  .map(
                                    (m, g) =>
                                      m.trim() &&
                                      i.jsx("li", { children: m.trim() }, g)
                                  ),
                              }),
                              i.jsxs("div", {
                                className: "flex items-end gap-2",
                                children: [
                                  i.jsxs("p", {
                                    className: "font-semibold text-3xl mt-2",
                                    children: ["₹ ", y.price],
                                  }),
                                  i.jsxs("p", {
                                    className: "items-end",
                                    children: ["/ ", y.durationCategory.name],
                                  }),
                                ],
                              }),
                              i.jsx("div", {
                                className:
                                  "flex gap-4 justify-end items-center",
                                children: y.isSubscribed
                                  ? i.jsxs("div", {
                                      className: "flex gap-4 py-8",
                                      children: [
                                        i.jsxs("button", {
                                          className:
                                            " text-white flex gap-2 bg-gray-700 py-1 px-2 rounded opacity-50 hover:opacity-80",
                                          onClick: () => u({ link: y.url }),
                                          children: ["Pause", i.jsx(yy, {})],
                                        }),
                                        i.jsxs("button", {
                                          className:
                                            "flex gap-2 bg-orange-900 py-1 px-2 rounded opacity-80 hover:opacity-100",
                                          children: ["Cancel", i.jsx(xy, {})],
                                        }),
                                      ],
                                    })
                                  : i.jsxs("button", {
                                      className:
                                        "mt-4 bg-purple-800 flex gap-4 text-white py-2 px-4 rounded hover:bg-purple-600 transition-all duration-150 ease-linear hover:shadow-lg",
                                      onClick: () => c({ planId: y }),
                                      children: ["Subscribe", i.jsx(G7, {})],
                                    }),
                              }),
                            ],
                          }),
                      ],
                    },
                    d.category
                  );
                })
              : i.jsx("p", {
                  className: "text-white",
                  children: "No plans available",
                }),
        }),
      ],
    });
  },
  Y7 = async ({ setMyPlans: e }) => {
    try {
      const t = await ge.get("plans/my-subscriptions/");
      console.log(t.data), e(t.data);
    } catch {
      X.error("Something went wrong");
    }
  },
  Q7 = () => {
    const { isAuthenticated: e, logout: t } = Al(),
      [n, r] = E.useState([]),
      s = Ut(),
      o = () => {
        t(), s("/login");
      };
    return (
      E.useEffect(() => {
        Y7({ setMyPlans: r });
      }, []),
      i.jsxs("div", {
        className:
          "bg-secondary1000 relative h-screen overflow-auto text-white",
        children: [
          i.jsxs("div", {
            className:
              "bg-primary1000 fixed z-10 w-full text-white flex justify-between p-4 shadow-xl",
            children: [
              i.jsx("p", { className: "font-bold", children: "Zenminds" }),
              i.jsx("div", {
                className: "flex gap-4",
                children: e
                  ? i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(ie, {
                          to: "/",
                          children: i.jsx("p", { children: "Home" }),
                        }),
                        i.jsx(ie, { to: "/products", children: "Products" }),
                        i.jsx(ie, {
                          to: "/profile",
                          children: i.jsx("p", {
                            className: "border-b-2 border-blue-900",
                            children: "Profile",
                          }),
                        }),
                        i.jsx("p", {
                          onClick: o,
                          className:
                            "cursor-pointer bg-red-700 px-2 rounded bg-opacity-50",
                          children: "Logout",
                        }),
                      ],
                    })
                  : i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(ie, { to: "/signup", children: "Signup" }),
                        i.jsx(ie, {
                          to: "/login",
                          className: "bg-primary1000 text-white px-2",
                          children: "Login",
                        }),
                      ],
                    }),
              }),
            ],
          }),
          i.jsx("div", {
            children:
              n.length > 0
                ? i.jsx("div", {
                    className: "grid grid-cols-3 mt-24 gap-8 px-8",
                    children: n.map((a) =>
                      i.jsxs(
                        "div",
                        {
                          className:
                            "bg-gradient-to-r from-black to-black p-4 shadow-lg rounded-lg",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex gap-4 justify-between items-center px-4",
                              children: [
                                i.jsx("h3", {
                                  className: "text-xl font-bold py-2",
                                  children: a.plan.displayName,
                                }),
                                i.jsxs("button", {
                                  className:
                                    "bg-purple-800 flex gap-4 text-white py-2 px-4 rounded hover:bg-purple-600 transition-all duration-150 ease-linear opacity-70",
                                  onClick: () => handleLaunch({ link: a.url }),
                                  children: ["Launch", i.jsx(fy, {})],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("ul", {
                                  className: "list-disc ml-5 py-8",
                                  children: a.plan.description
                                    .split(".")
                                    .map(
                                      (l, c) =>
                                        l.trim() &&
                                        i.jsx("li", { children: l.trim() }, c)
                                    ),
                                }),
                                i.jsxs("div", {
                                  className: "flex gap-4",
                                  children: [
                                    i.jsx("p", { children: "VALID TILL : " }),
                                    i.jsx("p", { children: a.end_date }),
                                  ],
                                }),
                                i.jsxs("div", {
                                  className: "flex gap-4 pt-8 pb-2 justify-end",
                                  children: [
                                    i.jsxs("button", {
                                      className:
                                        " text-white flex gap-2 bg-gray-700 py-1 px-2 rounded opacity-50 hover:opacity-80",
                                      onClick: () =>
                                        handleLaunch({
                                          link: selectedPlan.url,
                                        }),
                                      children: ["Pause", i.jsx(yy, {})],
                                    }),
                                    i.jsxs("button", {
                                      className:
                                        "flex gap-2 bg-orange-900 py-1 px-2 rounded opacity-80 hover:opacity-100",
                                      children: ["Cancel", i.jsx(xy, {})],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        a.plan.id
                      )
                    ),
                  })
                : i.jsx("p", { children: "No active subscriptions" }),
          }),
        ],
      })
    );
  },
  X7 = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/", element: i.jsx(J9, {}) }),
        i.jsx(Q, { path: "/signup", element: i.jsx(H7, {}) }),
        i.jsx(Q, { path: "/login", element: i.jsx(q7, {}) }),
        i.jsx(Q, { path: "/products", element: i.jsx(Z7, {}) }),
        i.jsx(Q, { path: "/profile", element: i.jsx(Q7, {}) }),
      ],
    }),
  Gf = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M10 7L15 12L10 17",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      }),
    }),
  Gn = ({ text: e, navigateTo: t = "/", children: n, bgColour: r }) =>
    i.jsx(ie, {
      to: t,
      children: i.jsx("div", {
        className: `group border-b-1 border-gray-700
          ${r || ""} 
          hover:border-accent
          hover:shadow-custom-green
          transition-all duration-300 px-4 py-2`,
        children: i.jsxs("div", {
          className:
            "flex justify-between group-hover:scale-110 transition-transform duration-300",
          children: [
            i.jsxs("div", { className: "flex gap-4", children: [n, e] }),
            i.jsx(Gf, {}),
          ],
        }),
      }),
    }),
  J7 = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "mt-1",
        children: [
          i.jsx("path", {
            d: "M6.67754 7.47835L8.35671 6.14085C9.44171 5.27669 9.98421 4.84419 10.3259 5.05752C10.6675 5.27085 10.49 5.93252 10.1359 7.25419L10.1025 7.37919C9.97421 7.85585 9.91088 8.09419 10.0225 8.28419L10.0284 8.29419C10.145 8.48252 10.3934 8.54919 10.8892 8.68169C11.7825 8.92085 12.2292 9.04002 12.3075 9.35169C12.3087 9.35695 12.3098 9.36223 12.3109 9.36752C12.38 9.68085 12.0275 9.96085 11.3234 10.5225L9.64421 11.8592C8.55838 12.7242 8.01588 13.1559 7.67421 12.9425C7.33338 12.7292 7.51088 12.0675 7.86504 10.7459L7.89838 10.6209C8.02588 10.145 8.09004 9.90669 7.97754 9.71585L7.97171 9.70585C7.85504 9.51835 7.60671 9.45169 7.11088 9.31835C6.21754 9.07919 5.77088 8.96002 5.69254 8.64835C5.69136 8.64309 5.69024 8.63781 5.68921 8.63252C5.62005 8.32002 5.97254 8.03919 6.67754 7.47835Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
          i.jsx("path", {
            d: "M0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
        ],
      }),
    }),
  vy = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M11.6453 17.2167L11.589 17.2012L5.78064 15.6096L5.6335 15.5692V15.4167V10.8333V10.6333H5.8335H7.17516H7.21123L7.24503 10.6459L12.095 12.4543L12.0966 12.4549C12.4571 12.5927 12.7002 12.9418 12.7002 13.3333V13.5384L12.4952 13.5333L12.5002 13.3333L12.4951 13.5333L12.4951 13.5333L12.4948 13.5333L12.4939 13.5332L12.4902 13.5332L12.4761 13.5328L12.4224 13.5313C12.3761 13.53 12.3097 13.528 12.2293 13.5254C12.0686 13.5202 11.8515 13.5123 11.6263 13.5019C11.4014 13.4914 11.167 13.4783 10.9722 13.4624C10.8749 13.4544 10.7857 13.4457 10.7116 13.4359C10.6424 13.4269 10.5719 13.4152 10.5205 13.3982L11.6453 17.2167ZM11.6453 17.2167L11.7011 17.1994L16.6428 15.666L16.865 15.5971L16.7635 15.3878C16.5988 15.0482 16.2399 14.8 15.8335 14.8H11.3752C10.9451 14.8 10.5249 14.7363 10.1217 14.6019L10.1215 14.6019L8.32792 14.0065L8.72703 12.8028L10.5203 13.3981L11.6453 17.2167ZM13.9668 13.3333V13.5333H14.1668H15.8335C17.1064 13.5333 18.1335 14.5605 18.1335 15.8333V16.5196L11.6634 18.5415L5.88691 16.9406L5.6335 16.8704V17.1333V18.1333H1.0335V9.36667H7.43904L12.5383 11.2706C12.5384 11.2706 12.5384 11.2707 12.5385 11.2707C13.3937 11.5915 13.9668 12.4168 13.9668 13.3333ZM4.16683 16.8667H4.36683V16.6667V10.8333V10.6333H4.16683H2.50016H2.30016V10.8333V16.6667V16.8667H2.50016H4.16683ZM9.36683 5.83334C9.36683 3.6438 11.144 1.86667 13.3335 1.86667C15.523 1.86667 17.3002 3.6438 17.3002 5.83334C17.3002 8.02288 15.523 9.80001 13.3335 9.80001C11.144 9.80001 9.36683 8.02288 9.36683 5.83334ZM10.6335 5.83334C10.6335 7.32713 11.8397 8.53334 13.3335 8.53334C14.8273 8.53334 16.0335 7.32713 16.0335 5.83334C16.0335 4.33955 14.8273 3.13334 13.3335 3.13334C11.8397 3.13334 10.6335 4.33955 10.6335 5.83334Z",
          fill: "white",
          stroke: "#23232F",
          "stroke-width": "0.4",
        }),
      }),
    }),
  Sd = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsxs("mask", {
            id: "path-1-outside-1_434_411",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "1.5011",
            width: "18",
            height: "17",
            fill: "black",
            children: [
              i.jsx("rect", {
                fill: "white",
                y: "1.5011",
                width: "18",
                height: "17",
              }),
              i.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.90122 7.40216L8 6.50116L5 6.00128L2.60345 3.60532C2.38074 3.38266 2 3.54039 2 3.85532C2 3.94909 2.03726 4.03902 2.10357 4.10532L4.5 6.50116L5.5 9.50042L6.1435 10.1059L8.90122 7.40216ZM10.4141 14.1243L13.1239 11.6238L15.7926 14.2919C16.1833 14.6824 16.1833 15.3157 15.7926 15.7063L14.6859 16.8127C14.3038 17.1948 13.6872 17.2041 13.2936 16.8338L10.4141 14.1243Z",
              }),
            ],
          }),
          i.jsx("path", {
            d: "M8 6.50116L8.84842 5.65253L8.57651 5.38067L8.19723 5.31748L8 6.50116ZM8.90122 7.40216L9.74133 8.25903L10.6068 7.41048L9.74965 6.55353L8.90122 7.40216ZM5 6.00128L4.15158 6.84991L4.42349 7.12176L4.80277 7.18496L5 6.00128ZM2.60345 3.60532L3.45187 2.75669L3.45187 2.75669L2.60345 3.60532ZM2.10357 4.10532L1.25515 4.95395L1.25515 4.95395L2.10357 4.10532ZM4.5 6.50116L5.63839 6.1216L5.54878 5.85283L5.34842 5.65253L4.5 6.50116ZM5.5 9.50042L4.36161 9.87998L4.45731 10.167L4.67767 10.3744L5.5 9.50042ZM6.1435 10.1059L5.32117 10.9799L6.16059 11.7697L6.98361 10.9628L6.1435 10.1059ZM10.4141 14.1243L9.60032 13.2424L8.65388 14.1158L9.59177 14.9983L10.4141 14.1243ZM13.1239 11.6238L13.9723 10.7752L13.1572 9.96026L12.3101 10.7419L13.1239 11.6238ZM15.7926 14.2919L14.9442 15.1405V15.1405L15.7926 14.2919ZM15.7926 15.7063L16.6411 16.5549H16.6411L15.7926 15.7063ZM14.6859 16.8127L15.5343 17.6613L15.5343 17.6613L14.6859 16.8127ZM13.2936 16.8338L12.4713 17.7077V17.7077L13.2936 16.8338ZM7.15158 7.34979L8.0528 8.25079L9.74965 6.55353L8.84842 5.65253L7.15158 7.34979ZM4.80277 7.18496L7.80277 7.68484L8.19723 5.31748L5.19723 4.8176L4.80277 7.18496ZM1.75502 4.45395L4.15158 6.84991L5.84842 5.15265L3.45187 2.75669L1.75502 4.45395ZM3.2 3.85532C3.2 4.60941 2.28831 4.98711 1.75502 4.45395L3.45187 2.75669C2.47316 1.77822 0.8 2.47138 0.8 3.85532H3.2ZM2.952 3.25669C3.11079 3.41544 3.2 3.63078 3.2 3.85532H0.8C0.8 4.2674 0.963722 4.6626 1.25515 4.95395L2.952 3.25669ZM5.34842 5.65253L2.952 3.25669L1.25515 4.95395L3.65158 7.34979L5.34842 5.65253ZM6.63839 9.12087L5.63839 6.1216L3.36161 6.88072L4.36161 9.87998L6.63839 9.12087ZM6.96584 9.23199L6.32233 8.62648L4.67767 10.3744L5.32117 10.9799L6.96584 9.23199ZM8.06112 6.54529L5.3034 9.24906L6.98361 10.9628L9.74133 8.25903L8.06112 6.54529ZM11.2279 15.0062L13.9377 12.5057L12.3101 10.7419L9.60032 13.2424L11.2279 15.0062ZM12.2755 12.4724L14.9442 15.1405L16.6411 13.4433L13.9723 10.7752L12.2755 12.4724ZM14.9442 15.1405C14.8661 15.0624 14.8661 14.9357 14.9442 14.8576L16.6411 16.5549C17.5005 15.6957 17.5005 14.3024 16.6411 13.4432L14.9442 15.1405ZM14.9442 14.8576L13.8375 15.9641L15.5343 17.6613L16.6411 16.5549L14.9442 14.8576ZM13.8375 15.9641C13.9139 15.8877 14.0372 15.8858 14.116 15.9599L12.4713 17.7077C13.3371 18.5224 14.6936 18.5019 15.5343 17.6613L13.8375 15.9641ZM14.116 15.9599L11.2364 13.2504L9.59177 14.9983L12.4713 17.7077L14.116 15.9599Z",
            fill: "#198919",
            mask: "url(#path-1-outside-1_434_411)",
          }),
          i.jsx("path", {
            d: "M11.5 5.9H11.2515L11.0757 6.07574L3.28284 13.8686C2.658 14.4935 2.658 15.5065 3.28284 16.1314L4.38973 17.2383C5.00123 17.8498 5.98795 17.8647 6.61769 17.272L14.4112 9.93692L14.5508 9.80558L14.5883 9.61767L15.0527 7.29581L17.3207 5.02782C17.9214 4.42711 17.496 3.4 16.6464 3.4C16.3935 3.4 16.151 3.50046 15.9722 3.67929L13.7515 5.9H11.5Z",
            stroke: "white",
            "stroke-width": "1.2",
          }),
        ],
      }),
    }),
  wy = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M14.2158 12.9342C14.6056 12.668 15.0628 12.5176 15.5346 12.5004C16.0063 12.4832 16.4733 12.5999 16.8815 12.837C17.2896 13.0741 17.6223 13.422 17.8411 13.8403C18.0598 14.2586 18.1556 14.7303 18.1174 15.2008C17.1176 15.5503 16.0556 15.6863 14.9999 15.6C14.9967 14.6555 14.7247 13.7306 14.2158 12.935C13.764 12.2265 13.1409 11.6434 12.404 11.2396C11.6671 10.8358 10.8402 10.6244 9.99995 10.625C9.15981 10.6246 8.33314 10.836 7.59639 11.2398C6.85964 11.6436 6.23662 12.2266 5.78495 12.935M14.9991 15.5992L14.9999 15.625C14.9999 15.8125 14.9899 15.9975 14.9691 16.18C13.4569 17.0476 11.7434 17.5028 9.99995 17.5C8.19161 17.5 6.49411 17.02 5.03078 16.18C5.00936 15.9871 4.99906 15.7932 4.99995 15.5992M4.99995 15.5992C3.94464 15.6886 2.8832 15.5531 1.88411 15.2017C1.84607 14.7313 1.94194 14.2598 2.16064 13.8416C2.37933 13.4234 2.71192 13.0757 3.11995 12.8386C3.52798 12.6015 3.99478 12.4847 4.46638 12.5018C4.93798 12.5188 5.39512 12.669 5.78495 12.935M4.99995 15.5992C5.00294 14.6548 5.2763 13.7307 5.78495 12.935M12.4999 5.625C12.4999 6.28804 12.2366 6.92393 11.7677 7.39277C11.2989 7.86161 10.663 8.125 9.99995 8.125C9.33691 8.125 8.70102 7.86161 8.23218 7.39277C7.76334 6.92393 7.49995 6.28804 7.49995 5.625C7.49995 4.96196 7.76334 4.32607 8.23218 3.85723C8.70102 3.38839 9.33691 3.125 9.99995 3.125C10.663 3.125 11.2989 3.38839 11.7677 3.85723C12.2366 4.32607 12.4999 4.96196 12.4999 5.625ZM17.4999 8.125C17.4999 8.37123 17.4514 8.61505 17.3572 8.84253C17.263 9.07002 17.1249 9.27672 16.9508 9.45082C16.7767 9.62493 16.57 9.76305 16.3425 9.85727C16.115 9.9515 15.8712 10 15.6249 10C15.3787 10 15.1349 9.9515 14.9074 9.85727C14.6799 9.76305 14.4732 9.62493 14.2991 9.45082C14.125 9.27672 13.9869 9.07002 13.8927 8.84253C13.7984 8.61505 13.7499 8.37123 13.7499 8.125C13.7499 7.62772 13.9475 7.15081 14.2991 6.79917C14.6508 6.44754 15.1277 6.25 15.6249 6.25C16.1222 6.25 16.5991 6.44754 16.9508 6.79917C17.3024 7.15081 17.4999 7.62772 17.4999 8.125ZM6.24995 8.125C6.24995 8.37123 6.20145 8.61505 6.10722 8.84253C6.01299 9.07002 5.87488 9.27672 5.70077 9.45082C5.52666 9.62493 5.31996 9.76305 5.09248 9.85727C4.86499 9.9515 4.62118 10 4.37495 10C4.12872 10 3.8849 9.9515 3.65742 9.85727C3.42993 9.76305 3.22323 9.62493 3.04912 9.45082C2.87501 9.27672 2.7369 9.07002 2.64267 8.84253C2.54845 8.61505 2.49995 8.37123 2.49995 8.125C2.49995 7.62772 2.69749 7.15081 3.04912 6.79917C3.40075 6.44754 3.87767 6.25 4.37495 6.25C4.87223 6.25 5.34914 6.44754 5.70077 6.79917C6.0524 7.15081 6.24995 7.62772 6.24995 8.125Z",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      }),
    }),
  eS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("path", {
            d: "M3.64952 8.5V8.90564C3.64952 8.9811 3.65765 9.0565 3.67628 9.12962C3.92183 10.0933 4.39245 10.691 4.71834 10.9737C4.84219 11.0811 5.00469 11.1245 5.1686 11.1289C5.56665 11.1394 6.15085 11.1503 6.5343 11.1602M3.64952 8.5V4.28929C3.64952 3.23818 5.13677 1.34623 8.18382 1.48638C9.33251 1.48638 11.7024 2.04697 11.9926 4.28929C11.9926 5.86192 11.9926 7.59598 11.9926 8.5M3.64952 8.5H4.91912M11.9926 8.5C11.9926 8.69837 11.9926 8.77922 11.9926 8.83725C11.9926 8.9576 11.9717 9.07675 11.9263 9.18819C11.6489 9.8682 11.0749 10.9926 10.5417 11.1214C10.4163 11.1516 10.159 11.1715 9.81618 11.1836M11.9926 8.5H10.723M5.64461 8.5C5.5237 9.17133 5.49952 10.3588 6.3701 11.1649M5.64461 8.5H4.91912M5.64461 8.5H7.82108M6.3701 11.1649C6.30913 11.1633 6.59421 11.1618 6.5343 11.1602M6.3701 11.1649C6.83929 11.1765 7.33731 11.1865 7.82108 11.1925M9.99754 8.5C10.1185 9.19007 10.1789 10.4094 9.45343 11.193M9.99754 8.5H10.723M9.99754 8.5H7.82108M9.45343 11.193C9.58243 11.1906 9.7039 11.1875 9.81618 11.1836M9.45343 11.193C8.98325 11.2015 8.41284 11.1999 7.82108 11.1925M4.91912 8.5V5.69073C4.91912 5.13844 5.36684 4.69073 5.91912 4.69073H9.72303C10.2753 4.69073 10.723 5.13844 10.723 5.69073V8.5M6.5343 11.1602V11.9973M6.5343 11.9973L3.25485 12.6675C3.15579 12.6877 3.0592 12.7212 2.97618 12.7789C2.53761 13.0838 1.88579 13.8333 2.01717 14.9754C2.01717 15.4194 2.01717 15.9054 2.01717 16.3768M6.5343 11.9973L7.43886 12.968C7.83288 13.3909 8.50229 13.3926 8.89852 12.9718C9.18198 12.6708 9.45446 12.3814 9.81618 11.9973M9.81618 11.9973C10.4208 11.9973 11.8838 12.1374 12.8995 12.698C13.9152 13.2586 14.0482 14.4498 13.9877 14.9754V16.3768M9.81618 11.9973V11.1836M11.8113 18.479H12.9877C13.54 18.479 13.9877 18.0313 13.9877 17.479V16.3768M11.8113 18.479V16.3768M11.8113 18.479H4.19365M11.8113 14.9754V16.3768M11.8113 16.3768H13.9877M4.19365 18.479H3.01717C2.46489 18.479 2.01717 18.0314 2.01717 17.4791C2.01717 17.1426 2.01717 16.7646 2.01717 16.3768M4.19365 18.479V16.3768M4.19365 14.9754V16.3768M4.19365 16.3768H2.01717M7.82108 8.5V11.1925",
            stroke: "white",
            "stroke-linecap": "round",
          }),
          i.jsx("path", {
            d: "M17.7788 14.0892H18C18.5523 14.0892 19 13.6415 19 13.0892V2C19 1.44772 18.5523 1 18 1H16C15.4477 1 15 1.44772 15 2V13.0892C15 13.6415 15.4477 14.0892 16 14.0892H16.1412M17.7788 14.0892V17.1812C17.7788 17.6334 17.4122 18 16.96 18V18C16.5078 18 16.1412 17.6334 16.1412 17.1812V14.0892M17.7788 14.0892H16.1412",
            stroke: "white",
            "stroke-width": "0.8",
          }),
        ],
      }),
    }),
  tS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M5.01274 6.4087V3.58594C5.01274 3.27843 5.2877 3.04379 5.59138 3.09216L7.22896 3.35299C7.27984 3.36109 7.33166 3.36128 7.38259 3.35356L9.13839 3.08722C9.44094 3.04133 9.71338 3.27509 9.71338 3.58111C9.71338 4.09151 9.71338 4.97619 9.71338 6.4087M5.01274 6.4087H1.9172M5.01274 6.4087C5.01274 7.50435 5.01274 9.50087 7.30573 9.69565C8.22293 9.69565 9.71338 9.45217 9.71338 6.4087M5.01274 6.4087H9.71338M9.71338 6.4087H10.8599M16.9363 7.13913V5.81304C16.9363 5.5369 16.7124 5.31304 16.4363 5.31304H12.621C12.3449 5.31304 12.121 5.5369 12.121 5.81304V9.80435C12.121 10.0805 12.3449 10.3043 12.621 10.3043H16.4363C16.7124 10.3043 16.9363 10.0805 16.9363 9.80435V8.47826M16.9363 7.13913L18.1687 6.04867C18.4914 5.76312 19 5.99223 19 6.42312V9.1212C19 9.54409 18.5077 9.77601 18.1816 9.50672L16.9363 8.47826M16.9363 7.13913V8.47826M7.30573 11.0348C5.35669 10.913 1.36688 11.4 1 14.3217C1 15.3806 1 16.0783 1 16.5005C1 16.7766 1.22386 17 1.5 17H12.9968C13.273 17 13.4968 16.7761 13.4968 16.5V14.3217C13.4586 13.1855 12.1669 10.9374 7.30573 11.0348Z",
          stroke: "white",
          "stroke-linecap": "round",
        }),
      }),
    }),
  nS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M6.97702 1.71243C6.72056 1.84685 6.66017 1.97325 6.6414 2.41524C6.6268 2.75874 6.62586 2.76219 6.54109 2.77919C6.41125 2.80527 6.23875 2.93451 6.16395 3.06169C6.1001 3.17029 6.09655 3.23274 6.08739 4.40751L6.07775 5.63945L5.84098 5.41692C5.32021 4.92752 4.71735 4.69796 4.0438 4.73257C3.13716 4.77917 2.33188 5.31328 1.92371 6.13869C1.71491 6.56098 1.66433 6.77882 1.66657 7.24579C1.66827 7.59876 1.6787 7.66643 1.77442 7.94587C2.39361 9.75354 4.56623 10.3004 5.88683 8.98098L6.08071 8.78727V10.7681V12.749L4.61202 14.2142C3.80423 15.02 3.12227 15.7189 3.09655 15.7672C3.0373 15.8786 3.03652 16.0901 3.09486 16.2258C3.12005 16.2843 3.56922 16.7558 4.11332 17.2947C5.167 18.3385 5.19673 18.3606 5.48642 18.3172C5.61333 18.2982 5.67069 18.262 5.85323 18.086C5.97225 17.9712 6.07788 17.8772 6.08795 17.8772C6.09799 17.8772 6.11516 17.9127 6.12605 17.9561C6.15502 18.0714 6.30618 18.2376 6.42849 18.2887C6.55774 18.3426 7.2705 18.3498 7.40666 18.2985C7.54312 18.2471 7.70656 18.0747 7.74297 17.9438C7.76063 17.8803 7.77513 17.4619 7.77523 17.014L7.77543 16.1996L8.32947 15.6467L8.88351 15.0939L8.88403 16.51C8.88458 17.9187 8.88497 17.9268 8.95804 18.0557C8.99924 18.1283 9.08847 18.2175 9.16118 18.2586C9.27736 18.3244 9.33508 18.332 9.71457 18.332C10.0941 18.332 10.1518 18.3244 10.268 18.2586C10.3407 18.2175 10.4299 18.1283 10.4711 18.0557L10.5446 17.9261L10.5451 15.6789L10.5456 13.4318L11.0997 12.879L11.6537 12.3262V15.1027C11.6537 18.1593 11.6433 18.0035 11.86 18.1936C12.0084 18.3237 12.1043 18.3414 12.5891 18.3278C12.9578 18.3174 12.9855 18.3119 13.0985 18.2256C13.351 18.033 13.3311 18.3573 13.3409 14.2791L13.3497 10.6322L14.6329 9.34603C15.3387 8.63862 15.9397 8.01295 15.9685 7.95564C16.0593 7.77489 16.0361 7.58401 15.8876 7.28884L15.7543 7.02398L17.0104 5.76729C17.7013 5.0761 18.2819 4.46934 18.3007 4.41894C18.3503 4.28547 18.3425 4.1152 18.2812 3.99677C18.2026 3.84497 17.5564 3.1685 17.435 3.11093C17.304 3.04883 17.0551 3.04727 16.9399 3.10783C16.8915 3.1333 16.2949 3.71293 15.6142 4.39592L14.3765 5.63776L14.0982 5.50562C13.788 5.35835 13.6508 5.34268 13.4712 5.43415L13.3521 5.49481L13.3421 4.33519C13.3333 3.30933 13.3256 3.16368 13.2757 3.0726C13.2001 2.93448 13.0707 2.83757 12.9015 2.79238L12.7618 2.75503V2.40199C12.7618 2.00011 12.7313 1.91142 12.5444 1.76896L12.4247 1.67772L9.7497 1.66948C7.36977 1.66212 7.06394 1.66688 6.97702 1.71243ZM7.22139 2.48815V2.76128L7.33174 2.78199C7.39245 2.79335 7.50838 2.86092 7.58933 2.93213L7.73655 3.0616L8.33445 3.06124L8.93239 3.06091L9.04467 2.94545C9.1119 2.87635 9.21326 2.81497 9.29725 2.79254L9.43755 2.75503V2.48502V2.21499H8.32947H7.22139V2.48815ZM9.99159 2.48815V2.76128L10.1086 2.78323C10.1782 2.79625 10.282 2.85711 10.3648 2.93337L10.504 3.0616H11.0997H11.6953L11.8345 2.93337C11.9173 2.85711 12.0212 2.79625 12.0908 2.78323L12.2078 2.76128V2.48815V2.21499H11.0997H9.99159V2.48815ZM6.66734 7.74031V12.1612L6.9445 11.8857L7.22165 11.6103L7.21337 7.47431L7.20509 3.33837L6.93622 3.32893L6.66734 3.31945V7.74031ZM9.43755 6.35777V9.39344L9.71457 9.1181L9.99159 8.84276V6.08242V3.32209H9.71457H9.43755V6.35777ZM12.2295 3.34381C12.2175 3.35573 12.2078 4.09905 12.2078 4.99561V6.62568L12.4848 6.35034L12.7618 6.075V4.69855V3.32209H12.5065C12.3661 3.32209 12.2414 3.33186 12.2295 3.34381ZM7.77543 7.33498V11.0548L8.32947 10.502L8.88351 9.94914V6.78214V3.61515H8.32947H7.77543V7.33498ZM10.5456 5.9511V8.28705L11.0997 7.73422L11.6537 7.18139V5.39827V3.61515H11.0997H10.5456V5.9511ZM16.0056 4.80509L14.8367 5.99714L15.1275 6.28769L15.4183 6.57821L16.5998 5.39749L17.7812 4.21673L17.4778 3.91488L17.1745 3.61303L16.0056 4.80509ZM3.75048 5.32416C2.90107 5.51178 2.28365 6.23465 2.21475 7.12212L2.19503 7.37604L3.24161 6.33426C3.81726 5.76127 4.28823 5.28873 4.28823 5.28414C4.28823 5.25946 3.91891 5.28697 3.75048 5.32416ZM3.65744 6.73636L2.39142 8.00159L2.4482 8.1121C2.47942 8.17289 2.52977 8.25446 2.56008 8.29337C2.61464 8.36341 2.62839 8.35091 3.95968 7.0205L5.30414 5.67693L5.1437 5.57404C5.05545 5.51748 4.96976 5.47117 4.95334 5.47117C4.93688 5.47117 4.35374 6.04052 3.65744 6.73636ZM8.64494 10.9798L3.5993 15.9989L3.85412 16.2567C3.99429 16.3985 4.39959 16.7944 4.75476 17.1366L5.40058 17.7587L6.83453 16.3283C7.62323 15.5415 9.88335 13.2743 11.8571 11.2899L15.4456 7.68202L15.3184 7.41505C15.2077 7.18272 15.1341 7.08969 14.7505 6.69748C14.3575 6.29554 14.2791 6.23133 14.0253 6.10323C13.8688 6.02424 13.7295 5.95986 13.7157 5.96015C13.7019 5.96045 11.4201 8.21929 8.64494 10.9798ZM4.33787 7.42413C2.85353 8.90749 2.96254 8.75809 3.24702 8.91921L3.36279 8.98476L4.63978 7.70827L5.91678 6.43175L5.81885 6.2608C5.76498 6.16679 5.71013 6.08985 5.69696 6.08985C5.68379 6.08985 5.0722 6.69029 4.33787 7.42413ZM5.03654 8.12623L4.0116 9.15066H4.20825C4.8792 9.15066 5.58146 8.6974 5.87816 8.07283C5.94963 7.92243 6.02365 7.73341 6.04261 7.65282C6.07941 7.49652 6.10193 7.14218 6.07667 7.11695C6.06833 7.10861 5.60026 7.56278 5.03654 8.12623ZM12.4759 11.5039L12.2078 11.7733V14.7764V17.7795H12.4848H12.7618V14.5071C12.7618 12.7072 12.7578 11.2346 12.7529 11.2346C12.748 11.2346 12.6234 11.3558 12.4759 11.5039ZM9.7057 14.2717L9.43755 14.541V16.1603V17.7795H9.71457H9.99159V15.891C9.99159 14.8522 9.98761 14.0024 9.98272 14.0024C9.97783 14.0024 9.85318 14.1236 9.7057 14.2717ZM6.93622 17.0386L6.66734 17.3088V17.5442V17.7795H6.92908C7.11338 17.7795 7.19564 17.767 7.20705 17.7373C7.21597 17.7141 7.21917 17.4867 7.21418 17.2318L7.20509 16.7685L6.93622 17.0386Z",
          fill: "white",
        }),
      }),
    }),
  rS = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx(Gn, {
          text: "Dashboard",
          bgColour: "bg-accent",
          children: i.jsx(J7, {}),
        }),
        i.jsx(Gn, {
          text: "Match",
          navigateTo: "/match",
          children: i.jsx(Sd, {}),
        }),
        i.jsx(Gn, {
          text: "Competition",
          navigateTo: "/competition",
          children: i.jsx(Sd, {}),
        }),
        i.jsx(Gn, {
          text: "Tournament",
          navigateTo: "/tournament",
          children: i.jsx(vy, {}),
        }),
        i.jsx(Gn, {
          text: "Team",
          navigateTo: "/teams",
          children: i.jsx(wy, {}),
        }),
        i.jsx(Gn, {
          text: "Player",
          navigateTo: "/player",
          children: i.jsx(eS, {}),
        }),
        i.jsx(Gn, {
          text: "Umpire",
          navigateTo: "/umpire",
          children: i.jsx(tS, {}),
        }),
        i.jsx(Gn, {
          text: "Stadium",
          navigateTo: "/stadium",
          children: i.jsx(nS, {}),
        }),
      ],
    }),
  gm = ae(
    i.jsx("path", {
      d: "M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z",
    }),
    "List"
  ),
  ft = ({ children: e }) => {
    const [t, n] = E.useState(!0),
      r = () => {
        n((s) => !s);
      };
    return i.jsxs("div", {
      className: "bg-primary1000 h-screen text-white overflow-x-hidden",
      children: [
        i.jsxs("div", {
          className: `bg-secondary1000 py-4 px-4 flex justify-between shadow-2xl border-b-2 border-gray-800 ${
            t ? "hidden lg:flex" : "static"
          }`,
          children: [
            i.jsxs("div", {
              className: "flex gap-4",
              children: [
                i.jsx("button", { onClick: r, children: i.jsx(gm, {}) }),
                i.jsx(ie, {
                  to: "/",
                  children: i.jsx("p", { children: "METRONICS" }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex gap-4",
              children: [
                i.jsx("p", { children: "Hello!" }),
                i.jsx("img", {
                  src: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "",
                  className: "w-8 h-8 rounded-full",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className: "w-full flex h-screen",
          children: [
            i.jsxs("div", {
              className: `${
                t ? "lg:w-2/12 w-full fixed lg:relative z-10 lg:z-0" : "hidden"
              } bg-secondary1000 flex flex-col gap-4 pt-2`,
              children: [
                i.jsxs("div", {
                  className:
                    "bg-secondary1000 py-4 px-4 flex justify-between shadow-2xl border-b-2 border-gray-800 static lg:hidden",
                  children: [
                    i.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        i.jsx("button", {
                          onClick: r,
                          children: i.jsx(gm, {}),
                        }),
                        i.jsx("p", { children: "METRONICS" }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        i.jsx("p", { children: "Hello Raja!" }),
                        i.jsx("img", {
                          src: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          alt: "",
                          className: "w-8 h-8 rounded-full",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx(rS, {}),
              ],
            }),
            i.jsx("div", {
              className: `${t ? "lg:w-10/12" : "w-full"}`,
              children: i.jsx("div", {
                className: "md:mx-8 md:my-8 mx-2 my-4",
                children: e,
              }),
            }),
          ],
        }),
      ],
    });
  },
  sS = () =>
    i.jsx(ft, {
      children: i.jsx("div", {
        children: i.jsx("p", { children: "Dashboard" }),
      }),
    }),
  oS = () =>
    i.jsx(Cn, {
      children: i.jsx(Q, { path: "/dashboard", element: i.jsx(sS, {}) }),
    });
async function iS({
  setItem: e,
  setLoading: t,
  extendedUrl: n,
  setPrevious: r,
  setNext: s,
}) {
  try {
    t(!0);
    const o = n.startsWith("http") ? n : `/${n}`,
      a = await ge.get(o);
    console.log(a.data), e(a.data.results), r(a.data.previous), s(a.data.next);
  } catch (o) {
    console.error("Error fetching data:", o);
  } finally {
    t(!1);
  }
}
const Sy = ({
    children: e,
    text: t,
    bgcolour: n = "bg-primary500",
    onClick: r,
  }) =>
    i.jsxs("button", {
      className: `${n} opacity-80 hover:opacity-100 px-4 py-1 flex gap-2 rounded-md `,
      onClick: r,
      children: [
        i.jsx("div", { className: "inline-block align-middle", children: e }),
        i.jsx("p", { children: t }),
      ],
    }),
  aS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("g", {
            "clip-path": "url(#clip0_237_6533)",
            children: i.jsx("path", {
              d: "M8 0C3.58175 0 0 3.58175 0 8C0 12.4185 3.58175 16 8 16C12.4185 16 16 12.4185 16 8C16 3.58175 12.4185 0 8 0ZM8 15.0157C4.14025 15.0157 1 11.8597 1 7.99997C1 4.14022 4.14025 0.999969 8 0.999969C11.8597 0.999969 15 4.14023 15 7.99997C15 11.8597 11.8597 15.0157 8 15.0157ZM11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z",
              fill: "white",
            }),
          }),
          i.jsx("defs", {
            children: i.jsx("clipPath", {
              id: "clip0_237_6533",
              children: i.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white",
              }),
            }),
          }),
        ],
      }),
    }),
  lS = ae(
    i.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
    "Search"
  ),
  Cy = ({
    placeholder: e = "",
    searchTerm: t,
    setSearchTerm: n,
    handleSearch: r,
  }) =>
    i.jsxs("div", {
      className:
        "bg-secondary1000 border-gray-700 border-2 rounded flex justify-between",
      children: [
        i.jsx("input", {
          type: "text",
          placeholder: e,
          value: t,
          onChange: (s) => {
            n(s.target.value);
          },
          className: "bg-secondary500 px-4 focus:outline-none w-full",
        }),
        i.jsx("button", {
          className:
            "px-2 hover:opacity-100 opacity-70 cursor-pointer bg-primary500 transition-colors",
          onClick: r,
          children: i.jsx(lS, { fontSize: "small" }),
        }),
      ],
    }),
  Zr = ({ children: e, flexDirection: t }) =>
    i.jsx("div", {
      className: `bg-secondary500 py-1 px-4 mt-2 rounded-t-lg flex ${t} animate-fadeInUp`,
      children: e,
    }),
  Yr = ({ children: e }) =>
    i.jsx("div", {
      className:
        "bg-secondary1000 rounded-b-lg animate-fadeInUp md:px-8 px-1  py-4 ",
      children: e,
    }),
  Kf = ({ children: e, flexDirection: t = "justify-between" }) =>
    i.jsx("div", { className: `flex ${t} animate-fadeInUp`, children: e }),
  Yl = ({ children: e }) =>
    i.jsx("div", {
      className: "bg-secondary250 flex gap-4 px-4 py-2 rounded-t-lg",
      children: e,
    }),
  Ql = ({ children: e }) =>
    i.jsx("div", {
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
    i.jsx("button", {
      className: `border-1 ${r} opacity-80 hover:opacity-100 px-4 py-1 flex gap-4 rounded-md`,
      onClick: s,
      children: i.jsxs("div", {
        className: `flex gap-2 ${o} `,
        children: [e, i.jsx("p", { children: t })],
      }),
    }),
  by = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M14 7L9 12L14 17",
          stroke: "white",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    }),
  cS = ({
    name: e = "",
    buttonText: t = "",
    children: n,
    addButtonLink: r = "",
    count: s = 0,
    previous: o = null,
    next: a = null,
    fetchItem: l = null,
    searchTerm: c,
    setSearchTerm: u,
    handleSearch: f,
  }) =>
    i.jsxs("div", {
      children: [
        i.jsxs(Kf, {
          children: [
            i.jsx("p", { children: e }),
            i.jsx(ie, {
              to: r,
              children: i.jsx(Sy, {
                text: t,
                children: i.jsx(aS, { text_size: "small" }),
              }),
            }),
          ],
        }),
        i.jsx(Zr, {
          children: i.jsx(Cy, {
            placeholder: `Search ${e} `,
            searchTerm: c,
            setSearchTerm: u,
            handleSearch: f,
          }),
        }),
        i.jsxs(Yr, {
          children: [
            i.jsx(Yl, {
              children: i.jsxs("div", {
                className: "flex  justify-between md:px-4 px-1 w-full",
                children: [
                  i.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      i.jsxs("p", { children: [e, " "] }),
                      i.jsx("p", {
                        className:
                          "text-center w-6 h-6 bg-sky-500 rounded-full",
                        children: s,
                      }),
                    ],
                  }),
                  i.jsx("p", { children: "Actions" }),
                ],
              }),
            }),
            i.jsx(Ql, { children: n }),
            i.jsxs("div", {
              className: "py-4 flex gap-4 justify-end",
              children: [
                o &&
                  i.jsx(Vs, {
                    text: "Previous",
                    onClick: () => {
                      l(o);
                    },
                    children: i.jsx(by, {}),
                  }),
                a &&
                  i.jsx(Vs, {
                    text: "Next",
                    onClick: () => {
                      l(a);
                    },
                    flexDirection: "flex-row-reverse",
                    children: i.jsx(Gf, {}),
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
    ordering: a = "-id",
    pagePrefix: l = "item",
  }) => {
    const [c, u] = E.useState([]),
      [f, d] = E.useState(!0),
      [p, y] = E.useState(null),
      [m, g] = E.useState(null),
      [S, h] = E.useState(""),
      x = (j) => {
        const k = S ? `&search=${S}` : "";
        iS({
          setItem: u,
          setLoading: d,
          extendedUrl: j + k,
          setPrevious: y,
          setNext: g,
        });
      };
    E.useEffect(() => {
      x(`${t}?ordering=${a}`), console.log(c);
    }, [t, a]);
    const w = () => {
      x(`${t}?ordering=${a}`);
    };
    return f
      ? i.jsx("div", { children: "Loading..." })
      : i.jsx("div", {
          children: i.jsx(cS, {
            name: e,
            buttonText: s,
            addButtonLink: o,
            count: c.length,
            previous: p,
            next: m,
            fetchItem: x,
            searchTerm: S,
            setSearchTerm: h,
            handleSearch: w,
            pagePrefix: l,
            children: i.jsx("div", {
              children:
                c.length > 0
                  ? c.map((j) => r(j))
                  : i.jsxs("p", {
                      children: ["No ", e.toLowerCase(), " available"],
                    }),
            }),
          }),
        });
  },
  uS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsxs("g", {
            "clip-path": "url(#clip0_237_605)",
            children: [
              i.jsx("path", {
                d: "M5.16699 5.16663H4.50033C4.1467 5.16663 3.80756 5.3071 3.55752 5.55715C3.30747 5.8072 3.16699 6.14634 3.16699 6.49996V12.5C3.16699 12.8536 3.30747 13.1927 3.55752 13.4428C3.80756 13.6928 4.1467 13.8333 4.50033 13.8333H10.5003C10.8539 13.8333 11.1931 13.6928 11.4431 13.4428C11.6932 13.1927 11.8337 12.8536 11.8337 12.5V11.8333",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M14.09 4.88995C14.3526 4.62739 14.5001 4.27127 14.5001 3.89995C14.5001 3.52863 14.3526 3.17251 14.09 2.90995C13.8274 2.64738 13.4713 2.49988 13.1 2.49988C12.7287 2.49988 12.3726 2.64738 12.11 2.90995L6.5 8.49995V10.4999H8.5L14.09 4.88995Z",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M11.167 3.83337L13.167 5.83337",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            ],
          }),
          i.jsx("defs", {
            children: i.jsx("clipPath", {
              id: "clip0_237_605",
              children: i.jsx("rect", {
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
  Zf = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsxs("g", {
            "clip-path": "url(#clip0_237_610)",
            children: [
              i.jsx("path", {
                d: "M3.16699 5.16663H13.8337",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M7.16699 7.83337V11.8334",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M9.83301 7.83337V11.8334",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M3.83301 5.16663L4.49967 13.1666C4.49967 13.5202 4.64015 13.8594 4.8902 14.1094C5.14025 14.3595 5.47939 14.5 5.83301 14.5H11.1663C11.52 14.5 11.8591 14.3595 12.1092 14.1094C12.3592 13.8594 12.4997 13.5202 12.4997 13.1666L13.1663 5.16663",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              i.jsx("path", {
                d: "M6.5 5.16667V3.16667C6.5 2.98986 6.57024 2.82029 6.69526 2.69526C6.82029 2.57024 6.98986 2.5 7.16667 2.5H9.83333C10.0101 2.5 10.1797 2.57024 10.3047 2.69526C10.4298 2.82029 10.5 2.98986 10.5 3.16667V5.16667",
                stroke: "white",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            ],
          }),
          i.jsx("defs", {
            children: i.jsx("clipPath", {
              id: "clip0_237_610",
              children: i.jsx("rect", {
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
  Xr = ({
    id: e = "id",
    name: t = "Name",
    key: n = "",
    prefixName: r = "",
    pagePrefix: s = "",
    children: o,
  }) =>
    i.jsxs("div", {
      className:
        "w-full flex flex-col md:flex-row justify-between px-8 py-2 border-b-1 border-secondary1000 hover:bg-gradient-to-r hover:from-secondary250  hover:shadow-xl group",
      children: [
        i.jsxs("div", {
          className: "flex gap-8 group-hover:scale-105",
          children: [
            i.jsxs("p", { className: "", children: [r, "-", e] }),
            i.jsx("p", { children: t }),
          ],
        }),
        i.jsxs("div", {
          className:
            "flex gap-4 my-6 md:my-0 justify-end group-hover:scale-105",
          children: [
            o,
            i.jsxs("div", {
              className: "flex gap-2 justify-end",
              children: [
                i.jsx(ie, {
                  to: `/update-${s}?id=${e}`,
                  children: i.jsx(uS, {}),
                }),
                i.jsx(ie, {
                  to: `/delete-${s}?id=${e}&name=${t}&prefixname=${r}`,
                  children: i.jsx(Zf, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  dS = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Tournament",
        fetchUrl: "tournament/tournaments/",
        searchPlaceholder: "Search Tournament Name",
        renderItem: (e) =>
          i.jsx(
            Xr,
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
  fS = ae(
    i.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  Xl = ({ text: e = "Back", navigateTo: t = "/" }) =>
    i.jsx(ie, {
      to: t,
      children: i.jsxs("div", {
        className: "flex gap-2 opacity-50 hover:opacity-90",
        children: [
          i.jsx(fS, { fontSize: "small" }),
          i.jsxs("p", { className: "", children: [" ", e] }),
        ],
      }),
    }),
  jy = ({
    backButtonText: e = "Back",
    navigateTo: t = "/",
    text: n = "Add an Entry",
    children: r,
  }) =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx(Kf, { children: i.jsx(Xl, { text: e, navigateTo: t }) }),
        i.jsx(Zr, { children: i.jsx("p", { children: n }) }),
        i.jsx(Yr, { children: r }),
      ],
    });
async function Yf({ id: e, setItem: t, extendedUrl: n = "" }) {
  try {
    const r = await ge.get(`${n}${e}/`);
    console.log("Get Request Success: ", r.data), t(r.data);
  } catch (r) {
    r.response
      ? console.error("Error Response: ", r.response.status, r.response.data)
      : r.request
      ? console.error("No Response: ", r.request)
      : console.error("Error in setting up request: ", r.message);
  }
}
async function Qf({ formData: e, extendedUrl: t }) {
  try {
    return (await ge.post(t, e)).data;
  } catch (n) {
    throw (console.error("Error ", n), n);
  }
}
async function pS({ formData: e, extendedUrl: t = "" }) {
  const { id: n, ...r } = e;
  try {
    const s = await ge.put(`${t}${n}/`, r);
    console.log(s.data);
  } catch (s) {
    throw (console.log("Error: ", s), new Error("Update request failed"));
  }
}
const kt = ({
    initialFormData: e,
    entityId: t = null,
    formComponent: n,
    extendedUrl: r,
    submitButtonText: s,
    navigateTo: o,
    isUpdate: a = !1,
    requiredFields: l = [],
  }) => {
    const [c, u] = E.useState(e),
      f = Ut();
    E.useEffect(() => {
      t && a && Yf({ extendedUrl: r, id: t, setItem: u });
    }, [t, a, r]);
    const d = () => {
        console.log("Form Data - ", c);
        for (const y of l)
          if (!c[y]) return X.error(`Please fill the ${y} field!`), !1;
        return !0;
      },
      p = async () => {
        if (d())
          try {
            a
              ? (await pS({ extendedUrl: r, formData: c }),
                X.success("Updated successfully!"))
              : (await Qf({ formData: c, extendedUrl: r }),
                X.success("Added successfully!")),
              f(o);
          } catch {
            X.error(`Failed to ${a ? "update" : "add"}.`);
          }
      };
    return i.jsx(ft, {
      children: i.jsx(jy, {
        text: s,
        navigateTo: o,
        backButtonText: "Back",
        children: i.jsx(n, {
          formData: c,
          setFormData: u,
          onClick: p,
          buttonText: s,
        }),
      }),
    });
  },
  Pe = ({
    name: e,
    type: t = "text",
    placeholder: n,
    onChange: r = null,
    inputName: s = "",
    value: o = "",
  }) =>
    i.jsxs("div", {
      className: "flex flex-col gap-2 ",
      children: [
        i.jsxs("p", {
          className: "text-sm opacity-50",
          children: [" ", e, " "],
        }),
        i.jsx("input", {
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
  ue = ({
    name: e,
    options: t,
    align: n = "flex-col",
    onChange: r = null,
    value: s = "",
    inputName: o = "",
  }) =>
    i.jsxs("div", {
      className: `flex ${n} gap-2`,
      children: [
        i.jsx("p", { className: "text-sm opacity-50", children: e }),
        i.jsxs("select", {
          name: o,
          className:
            "bg-secondary500 border-2 border-gray-700 rounded-md px-4 py-1 w-full",
          value: s,
          onChange: r,
          children: [
            i.jsxs("option", { value: "", children: ["Select ", e] }),
            t.map((a, l) =>
              i.jsx("option", { value: a.id, children: a.name }, l)
            ),
          ],
        }),
      ],
    }),
  hS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("path", {
            d: "M4.33398 4.66663C4.34198 3.21663 4.40665 2.43129 4.91865 1.91929C5.50465 1.33329 6.44732 1.33329 8.33265 1.33329L8.99932 1.33329C10.8853 1.33329 11.828 1.33329 12.414 1.91929C12.9993 2.50463 12.9993 3.44796 12.9993 5.33329L12.9993 10.6666C12.9993 12.552 12.9993 13.4953 12.414 14.0806C11.8273 14.6666 10.8853 14.6666 8.99932 14.6666L8.33265 14.6666C6.44732 14.6666 5.50465 14.6666 4.91865 14.0806C4.40665 13.5686 4.34198 12.7833 4.33398 11.3333",
            stroke: "#9595AD",
            "stroke-linecap": "round",
          }),
          i.jsx("path", {
            d: "M1.00033 8.00012L9.66699 8.00012M9.66699 8.00012L7.33366 6.00012M9.66699 8.00012L7.33366 10.0001",
            stroke: "#9595AD",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          }),
        ],
      }),
    }),
  cn = ({ text: e = "Submit", onClick: t = null }) =>
    i.jsx(Sy, {
      text: e,
      onClick: t,
      bgcolour:
        "bg-primary500 pl-1 transition-all ease-in-out delay-150 hover:bg-opacity-20 hover:shadow-lg",
      children: i.jsx(hS, { text_size: "small" }),
    }),
  ky = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const s = [
        { id: "International Match", name: "International Match" },
        { id: "International Tournament", name: "International Tournament" },
        { id: "Domestic Match", name: "Domestic Match" },
        { id: "Domestic Tournament", name: "Domestic Tournament" },
        { id: "Club Match", name: "Club Match" },
        { id: "Others", name: "Others" },
      ],
      o = (a) => {
        const { name: l, value: c } = a.target;
        t((u) => ({ ...u, [l]: c }));
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "Tournament Name *",
              placeholder: "Tournament name",
              onChange: o,
              inputName: "name",
              value: e.name,
            }),
            i.jsx(ue, {
              name: "Select Tournament Category",
              onChange: o,
              inputName: "category",
              value: e.category,
              options: s,
            }),
          ],
        }),
        i.jsx("div", {
          className: "mt-4 mx-4",
          children: i.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  mS = () => {
    const e = { name: "", category: "" };
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: ky,
      extendedUrl: "tournament/tournaments/",
      submitButtonText: "Add Tournament",
      navigateTo: "/tournament",
      isUpdate: !1,
      requiredFields: ["name", "category"],
    });
  },
  gS = () => {
    const [e] = jt(),
      t = e.get("id"),
      n = { name: "", category: "" };
    return i.jsx(kt, {
      initialFormData: n,
      entityId: t,
      formComponent: ky,
      extendedUrl: "tournament/tournaments/",
      submitButtonText: "Update Tournament",
      navigateTo: "/tournament",
      isUpdate: !0,
      requiredFields: ["name", "category"],
    });
  },
  Jl = ({
    text: e,
    colour: t = "secondary500",
    text_colour: n = "text-gray-400",
    onClick: r = null,
  }) =>
    i.jsx("button", {
      className: `border-${t} ${n} opacity-70 hover:opacity-100 border px-4 py-1 rounded-md`,
      onClick: r,
      children: i.jsx("p", { children: e }),
    }),
  yS = ({
    navigateTo: e = "/",
    name: t = "",
    id: n = "",
    prefixName: r = "",
    onClick: s = null,
  }) => {
    const [o, a] = E.useState(!0),
      l = () => {
        a((c) => !c);
      };
    return i.jsx(ft, {
      children: i.jsx("div", {
        className: "flex justify-center w-full",
        children: i.jsxs("div", {
          className: "w-full md:w-1/2",
          children: [
            i.jsxs(Zr, {
              flexDirection: "gap-8",
              children: [
                i.jsx(Xl, { text: "Back to All", navigateTo: e }),
                i.jsx("p", { children: "Confirm Deletion" }),
              ],
            }),
            i.jsxs(Yr, {
              children: [
                i.jsx("p", {
                  className: "py-4 text-yellow-500",
                  children: "WARNINGS",
                }),
                i.jsxs("ul", {
                  className: "list-outside list-disc px-4 text-yellow-100",
                  children: [
                    i.jsx("li", {
                      children:
                        "The deletion may result in the deletion of other related entries as well!",
                    }),
                    i.jsx("li", {
                      children:
                        "It's a irreversible process. You cannot bring deleted items back!",
                    }),
                  ],
                }),
                i.jsx("p", {
                  className: "py-4",
                  children:
                    "Do you still want to delete the following entry permanently?",
                }),
                i.jsxs("div", {
                  className: "py-2 flex w-full text-center hover:shadow-xl",
                  children: [
                    i.jsxs("p", {
                      className: "w-1/4 bg-secondary250 py-4",
                      children: [r, " ", n],
                    }),
                    i.jsx("p", {
                      className: "w-3/4 bg-secondary200 py-4",
                      children: t,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex gap-4 py-4",
                  children: [
                    i.jsx("input", { type: "checkbox", onClick: l }),
                    " ",
                    i.jsx("p", {
                      children:
                        "Yes, I Understand the consequences of my act and still want to proceed",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex justify-end w-full gap-4",
                  children: [
                    i.jsx(ie, {
                      to: e,
                      children: i.jsx(Jl, { text: "Cancel" }),
                    }),
                    !o &&
                      i.jsx(Vs, {
                        text: "Delete",
                        text_colour: "text-red-500",
                        disabled: "true",
                        onClick: s,
                        children: i.jsx(Zf, {}),
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
async function xS({ id: e, extendedUrl: t }) {
  try {
    return (await ge.delete(`${t}/${e}/`)).status === 204
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
const Jr = ({ entityName: e, entityUrl: t, navigateTo: n }) => {
    const r = Ut(),
      [s] = jt(),
      o = s.get("id"),
      a = s.get("name"),
      l = s.get("prefixname"),
      c = async () => {
        const u = await xS({ extendedUrl: `${t}`, id: o });
        u.success
          ? (X.success(`${a} deleted successfully!`), r(n))
          : X.error(`Error deleting the ${e}: ${u.error}`);
      };
    return i.jsx(yS, {
      navigateTo: n,
      name: a,
      id: o,
      prefixName: l,
      onClick: c,
    });
  },
  vS = () =>
    i.jsx(Jr, {
      entityName: "Tournament",
      entityUrl: "/tournament/tournaments",
      navigateTo: "/tournament",
    }),
  wS = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/tournament", element: i.jsx(dS, {}) }),
        i.jsx(Q, { path: "/add-tournament", element: i.jsx(mS, {}) }),
        i.jsx(Q, { path: "/update-tournament", element: i.jsx(gS, {}) }),
        i.jsx(Q, { path: "/delete-tournament", element: i.jsx(vS, {}) }),
      ],
    }),
  SS = ae(
    i.jsx("path", {
      d: "M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-9 15-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7z",
    }),
    "Beenhere"
  ),
  CS = ae(
    i.jsx("path", {
      d: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z",
    }),
    "BookmarkBorderOutlined"
  ),
  bS = ae(
    i.jsx("path", {
      d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z",
    }),
    "Cached"
  ),
  jS = ae(
    i.jsx("path", {
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41z",
    }),
    "CloudDone"
  ),
  kS = ae(
    i.jsx("path", {
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z",
    }),
    "CloudUploadOutlined"
  ),
  NS = ae(
    [
      i.jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z" }, "0"),
      i.jsx(
        "path",
        {
          d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10-2.5-1.5L15 12V4h5z",
        },
        "1"
      ),
    ],
    "CollectionsBookmark"
  ),
  Cd = ae(
    i.jsx("path", {
      d: "M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1M3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1m8.01-2.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16z",
    }),
    "EditNoteRounded"
  ),
  Ny = ae(
    i.jsx("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }),
    "ExpandLessOutlined"
  ),
  Ey = ae(
    i.jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
    "ExpandMoreOutlined"
  ),
  ES = ae(
    i.jsx("path", {
      d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z",
    }),
    "History"
  ),
  TS = ae(
    i.jsx("path", {
      d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z",
    }),
    "Lock"
  ),
  _S = ae(
    i.jsx("path", {
      d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02m0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98M12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z",
    }),
    "OfflineBoltOutlined"
  ),
  RS = ae(
    i.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4",
    }),
    "Person"
  ),
  AS = ae(i.jsx("path", { d: "M8 5v14l11-7z" }), "PlayArrow"),
  MS = ae(
    i.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-2.5-3.5 7-4.5-7-4.5z",
    }),
    "PlayCircleOutlined"
  ),
  PS = ae(
    i.jsx("path", {
      d: "M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93",
    }),
    "RotateLeft"
  ),
  LS = ae(
    i.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4-4H8V8h8z",
    }),
    "StopCircleOutlined"
  ),
  OS = ae(
    i.jsx("path", {
      d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z",
    }),
    "TaskAlt"
  ),
  Ty = ae(
    i.jsx("path", { d: "M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z" }),
    "Upload"
  ),
  BS = ae(
    i.jsx("path", {
      d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z",
    }),
    "Videocam"
  ),
  _y = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("rect", {
            width: "16",
            height: "16",
            rx: "8",
            fill: "#198919",
          }),
          i.jsx("path", {
            d: "M5 8L7.57143 10L11 6",
            stroke: "white",
            "stroke-linecap": "round",
          }),
        ],
      }),
    }),
  Ms = ({
    status: e,
    text: t,
    children: n,
    onClickUrl: r,
    bg: s = "bg-primary500",
  }) => (
    console.log(e),
    e == "active"
      ? i.jsx(ie, {
          to: r,
          children: i.jsxs("button", {
            className: `bg-opacity-50 px-2 rounded-lg flex gap-2 ${s}`,
            children: [i.jsx("p", { children: t }), n],
          }),
        })
      : e == "updated"
      ? i.jsx(ie, {
          to: r,
          children: i.jsxs("button", {
            className: "opacity-70 bg-secondary1000 px-2 rounded-lg flex gap-2",
            children: [
              i.jsx("p", { children: t }),
              i.jsx(_y, { text_size: "small" }),
            ],
          }),
        })
      : i.jsxs("button", {
          className:
            "opacity-50 px-2 rounded-md flex gap-2 bg-secondary500 cursor-not-allowed",
          children: [
            i.jsx("p", { children: t }),
            i.jsx(TS, { fontSize: "small" }),
          ],
        })
  ),
  IS = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Competition",
        fetchUrl: "competition/competitions/",
        searchPlaceholder: "Search Competitions",
        buttonText: "Add Competition",
        addButtonLink: "/add-competition",
        renderItem: (e) =>
          i.jsx(
            Xr,
            {
              id: e.id,
              name: e.name,
              prefixName: "CMPT",
              pagePrefix: "competition",
              children: i.jsxs("div", {
                className: "flex flex-col gap-2 lg:flex-row",
                children: [
                  i.jsx(Ms, {
                    text: "Team",
                    onClickUrl: `/add-competition-teams?id=${e.id}`,
                    status: `${e.teams.length != 0 ? "updated" : "active"}`,
                    children: i.jsx(wy, { text_size: "small" }),
                  }),
                  i.jsx(Ms, {
                    text: "Squad",
                    onClickUrl: `/add-competition-squad?id=${e.id}`,
                    status: `${
                      e.hasUpdatedSquad
                        ? "updated"
                        : e.teams.length != 0
                        ? "active"
                        : "locked"
                    }`,
                    children: i.jsx(RS, { fontSize: "small" }),
                  }),
                  i.jsx(Ms, {
                    text: "Matches",
                    status: `${
                      e.hasUpdatedSquad
                        ? "updated"
                        : e.teams.length != 0
                        ? "active"
                        : "locked"
                    }`,
                    children: i.jsx(Sd, { text_size: "small" }),
                  }),
                ],
              }),
            },
            e.id
          ),
      }),
    });
async function ec({ setNationalities: e }) {
  try {
    const t = await ge.get("stadium/nationalities/");
    console.log(t.data), e(t.data);
  } catch (t) {
    console.log("Error fetching Nationalities - ", t);
  }
}
async function US({ setTournaments: e }) {
  try {
    const t = await ge.get("tournament/all-tournaments/");
    e(t.data), console.log(t.data);
  } catch (t) {
    console.log("Error Fetching Tournaments", t);
  }
}
async function Ry({ setMatchTypes: e }) {
  try {
    const t = await ge.get("competition/matchtypes/");
    e(t.data), console.log("mdata ", t);
  } catch (t) {
    console.log("Error fetching match types ", t);
  }
}
const Ay = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = E.useState([]),
      [a, l] = E.useState([]),
      [c, u] = E.useState([]);
    E.useEffect(() => {
      ec({ setNationalities: o }),
        US({ setTournaments: l }),
        Ry({ setMatchTypes: u });
    }, []);
    const f = [
        { id: "Male", name: "Male" },
        { id: "Female", name: "Female" },
        { id: "Third Gender", name: "Third Gender" },
      ],
      d = (p) => {
        const { name: y, value: m } = p.target;
        t((g) => ({ ...g, [y]: m }));
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 lg:pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "Competition Name *",
              placeholder: "Competition Name",
              inputName: "name",
              value: e.name,
              onChange: d,
            }),
            i.jsx(Pe, {
              name: "Display Name *",
              placeholder: "Display Name",
              inputName: "displayName",
              value: e.displayName,
              onChange: d,
            }),
            i.jsx(Pe, {
              name: "Year *",
              placeholder: "YYYY",
              inputName: "year",
              value: e.year,
              onChange: d,
            }),
            i.jsx(ue, {
              name: "Match Type *",
              inputName: "matchType",
              options: c,
              value: e.matchType,
              onChange: d,
            }),
            i.jsx(ue, {
              inputName: "tournament",
              name: "Tournament *",
              options: a,
              value: e.tournament,
              onChange: d,
            }),
            i.jsx(Pe, {
              inputName: "matchCount",
              name: "Total Match Count *",
              placeholder: "Count",
              type: "number",
              value: e.matchCount,
              onChange: d,
            }),
            i.jsx(Pe, {
              inputName: "fromDate",
              name: "Start Date *",
              type: "date",
              value: e.fromDate,
              onChange: d,
            }),
            i.jsx(Pe, {
              inputName: "toDate",
              name: "End Date *",
              type: "date",
              value: e.toDate,
              onChange: d,
            }),
            i.jsx(ue, {
              inputName: "gender",
              name: "Gender *",
              options: f,
              value: e.gender,
              onChange: d,
            }),
            i.jsx(ue, {
              inputName: "hostingNation",
              name: "Hosting Nation",
              options: s,
              value: e.hostingNation,
              onChange: d,
            }),
          ],
        }),
        i.jsx("div", {
          className: "mt-4 flex justify-end",
          children: i.jsx(cn, { text: n, onClick: r }),
        }),
      ],
    });
  },
  $S = () => {
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
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: Ay,
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
  FS = ({ text_size: e = "medium" }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("rect", {
            width: "16",
            height: "16",
            rx: "8",
            fill: "#BF8412",
          }),
          i.jsx("path", {
            d: "M11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z",
            fill: "white",
          }),
        ],
      }),
    }),
  DS = ({ item: e, onClick: t = null }) =>
    i.jsx("div", {
      className:
        "group border-b-1 border-secondary1000 hover:bg-primary1000 hover:bg-opacity-10 hover:shadow-xl cursor-pointer overflow-hidden",
      children: i.jsxs("div", {
        className: "group-hover:scale-105 flex gap-4 py-2 px-8",
        children: [
          e.isSelected
            ? i.jsx(_y, { text_size: "small" })
            : i.jsx("button", {
                onClick: () => {
                  t(e);
                },
                children: i.jsx(FS, { text_size: "small" }),
              }),
          i.jsx("p", { children: e.name }),
        ],
      }),
    }),
  My = ({
    items: e = [],
    handleSearch: t = null,
    searchTerm: n,
    setSearchTerm: r,
    selectItem: s,
  }) =>
    i.jsxs("div", {
      className: "py-4",
      children: [
        i.jsx(Yl, {
          children: i.jsx(Cy, {
            placeholder: "Search",
            handleSearch: t,
            searchTerm: n,
            setSearchTerm: r,
          }),
        }),
        i.jsx(Ql, {
          children: i.jsx("div", {
            children:
              e.length > 0
                ? e.map((o) => i.jsx(DS, { item: o, onClick: s }))
                : i.jsx("p", { children: "No items available" }),
          }),
        }),
      ],
    }),
  zS = ({ text_size: e }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsxs("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("rect", {
            x: "0.333984",
            width: "16",
            height: "16",
            rx: "8",
            fill: "#BF2712",
          }),
          i.jsx("path", {
            d: "M11.1864 10.1393L9.04708 8L11.1864 5.86071C11.3832 5.66389 11.3832 5.34443 11.1864 5.14761C10.9896 4.9508 10.6701 4.9508 10.4733 5.14761L8.33398 7.2869L6.19469 5.14761C5.99788 4.9508 5.67841 4.9508 5.4816 5.14761C5.28478 5.34443 5.28478 5.66389 5.4816 5.86071L7.62089 8L5.4816 10.1393C5.28478 10.3361 5.28478 10.6556 5.4816 10.8524C5.67841 11.0492 5.99788 11.0492 6.19469 10.8524L8.33398 8.7131L10.4733 10.8524C10.6701 11.0492 10.9896 11.0492 11.1864 10.8524C11.3832 10.6556 11.3832 10.3361 11.1864 10.1393Z",
            fill: "white",
          }),
        ],
      }),
    }),
  VS = ({ col1: e, col2: t, col3: n, removeSelectedItem: r }) =>
    i.jsxs("div", {
      className:
        "w-full flex hover:shadow-xl hover:bg-primary500 cursor-pointer hover:bg-opacity-5",
      children: [
        i.jsxs("p", {
          className: "w-2/12 text-center py-2 border-1 border-gray-900",
          children: ["ID-", e],
        }),
        i.jsx("p", {
          className: "w-7/12 px-4 py-2 border-1 border-gray-900",
          children: t,
        }),
        i.jsx("p", {
          className: "w-2/12 text-center py-2 border-1 border-gray-900",
          children: n,
        }),
        i.jsx("div", {
          className: "w-1/12 text-center py-2 border-1 border-gray-900 ",
          children: i.jsx("button", {
            className: "hover:rotate-90 transition-all delay-150 ease-in-out",
            onClick: () => {
              r(e);
            },
            children: i.jsx(zS, { text_size: "small" }),
          }),
        }),
      ],
    }),
  Py = ({ selectedItems: e, removeSelectedItem: t, col3: n }) => {
    const r = e.length;
    return i.jsxs("div", {
      className: "py-4",
      children: [
        i.jsxs(Yl, {
          children: [
            i.jsx("p", { children: "Selected" }),
            i.jsx("p", {
              className: "w-6 h-6 text-center rounded-full font-bold bg-accent",
              children: r,
            }),
          ],
        }),
        i.jsx(Ql, {
          children: e.map((s) =>
            i.jsx(VS, {
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
async function Ly({ setItem: e, setLoading: t, extendedUrl: n }) {
  try {
    t(!0);
    const r = await ge.get(n);
    e(r.data);
  } catch (r) {
    console.error("Error fetching data:", r);
  } finally {
    t(!1);
  }
}
async function Oy({ id: e }) {
  try {
    const t = await ge.get(`competition/competitions/teams/${e}/`);
    return console.log("Get Request Success: ", t.data), t.data;
  } catch (t) {
    t.response
      ? console.error("Error Response: ", t.response.status, t.response.data)
      : t.request
      ? console.error("No Response: ", t.request)
      : console.error("Error in setting up request: ", t.message);
  }
}
const WS = ({
  mainText: e = "",
  submitButtonText: t = "",
  backButtonLink: n = "",
  fetchUrl: r = "team/allteams/",
  handleSubmit: s,
  id: o,
  existingUrl: a = "competition/competitions/",
}) => {
  const [l, c] = E.useState([]),
    [u, f] = E.useState(!0),
    [d, p] = E.useState(""),
    [y, m] = E.useState([]),
    g = (k) => {
      const b = d ? `?search=${d}` : "";
      Ly({
        setItem: (C) => {
          const N = C.map((v) => {
            const R = y.some((M) => M.id === v.id);
            return { ...v, isSelected: R };
          });
          c(N), f(!1);
        },
        setLoading: f,
        extendedUrl: k + b,
      });
    },
    S = () => {
      Oy({ id: o })
        .then((k) => {
          console.log("Competition teams fetched:", k.teams),
            k.teams.forEach((b) => {
              const C = l.find((N) => N.id === b.id);
              C && x(C);
            });
        })
        .catch((k) => console.error("Error fetching data", k));
    };
  E.useEffect(() => {
    g(`${r}`);
  }, [r]),
    E.useEffect(() => {
      !u && l.length > 0 && S();
    }, [u]);
  const h = () => {
      g(`${r}`);
    },
    x = (k) => {
      m((b) => (b.some((C) => C.id === k.id) ? b : [...b, k])),
        c((b) => b.map((C) => (C.id === k.id ? { ...C, isSelected: !0 } : C)));
    },
    w = (k) => {
      console.log(k),
        c((b) => b.map((C) => (C.id === k ? { ...C, isSelected: !1 } : C))),
        m((b) => b.filter((C) => C.id !== k));
    },
    j = () => {
      const k = y.map((b) => b.id);
      s(k);
    };
  return u
    ? i.jsx("div", { children: "Loading..." })
    : i.jsxs(i.Fragment, {
        children: [
          i.jsx(Zr, {
            children: i.jsxs("div", {
              className: "flex justify-between w-full",
              children: [
                i.jsx("p", { className: "py-1", children: e }),
                i.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    i.jsx(ie, {
                      to: n,
                      children: i.jsx(Jl, { text: "Do it Later" }),
                    }),
                    i.jsx(cn, { text: t, onClick: j }),
                  ],
                }),
              ],
            }),
          }),
          i.jsx(Yr, {
            children: i.jsxs("div", {
              className: "flex w-full gap-4",
              children: [
                i.jsx("div", {
                  className: "w-4/12",
                  children: i.jsx(My, {
                    items: l,
                    handleSearch: h,
                    searchTerm: d,
                    setSearchTerm: p,
                    selectItem: x,
                  }),
                }),
                i.jsx("div", {
                  className: "w-8/12",
                  children: i.jsx(Py, {
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
async function HS(e, t) {
  try {
    const n = await ge.patch(`competition/competitions/${e}/`, { teams: t });
    console.log(n.data), X.success("update success");
  } catch (n) {
    throw (
      (console.log("Error: ", n),
      X.error("upadate failed"),
      new Error("Update request failed"))
    );
  }
}
const qS = () => {
    const [e] = jt(),
      t = e.get("id"),
      n = (r) => {
        try {
          HS(t, r);
        } catch (s) {
          console.log(s);
        }
      };
    return i.jsx(ft, {
      children: i.jsx(WS, {
        mainText: "Update Competition Teams",
        submitButtonText: "Update Team",
        backButtonLink: "/competition",
        handleSubmit: n,
        id: t,
      }),
    });
  },
  GS = ({ name: e = "Entity", options: t, setItem: n }) =>
    i.jsxs("select", {
      className: "bg-secondary500 rounded-md px-4  w-full border-1",
      onChange: (r) => {
        n(r.target.value);
      },
      children: [
        i.jsx("option", { value: "", children: "Select Team" }),
        t.map((r, s) =>
          i.jsx("option", { value: r.value, children: r.label }, s)
        ),
      ],
    });
async function By({ competitionId: e, teamId: t }) {
  try {
    const n = await ge.get(`competition/competitions/${e}/teams/${t}/squad/`);
    return console.log("Got squad ", n.data), n.data;
  } catch (n) {
    console.log(n);
  }
}
async function KS({ competitionId: e, teamId: t, playerIds: n }) {
  const r = { player_ids: n };
  try {
    const s = await ge.post(
      `competition/competitions/${e}/teams/${t}/squad/add/`,
      r
    );
    return X.success("Updated!"), s.data;
  } catch (s) {
    console.log(s), X.error("Can't Update!");
  }
}
const ZS = () => {
    const e = "player/allplayers/",
      [t] = jt(),
      n = t.get("id"),
      [r, s] = E.useState(""),
      [o, a] = E.useState(""),
      [l, c] = E.useState([]),
      [u, f] = E.useState(!0),
      [d, p] = E.useState(""),
      [y, m] = E.useState([]),
      g = async () => {
        try {
          await Yf({
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
            await By({ competitionId: r.id, teamId: o }).then((b) => {
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
    E.useEffect(() => {
      g();
    }, [n]),
      E.useEffect(() => {
        r && console.log("Competition data:", r);
      }, [r]);
    const h = (b) => {
      const C = d ? `?search=${d}` : "";
      console.log(b),
        Ly({
          setItem: (N) => {
            console.log("fetched Items", N);
            const v = N.map((R) => {
              const M = y.some((D) => D.id === R.id),
                I = `${R.firstName} ${R.middleName ? R.middleName + " " : ""}${
                  R.lastName ? R.lastName + " " : ""
                }(${R.id})`;
              return { ...R, isSelected: M, name: I };
            });
            c(v), f(!1);
          },
          setLoading: f,
          extendedUrl: b + C,
        });
    };
    E.useEffect(() => {
      h(`${e}`);
    }, [e]),
      E.useEffect(() => {
        m([]);
        const b = l.map((C) => ({ ...C, isSelected: !1 }));
        c(b), console.log("team changed - ", o), S();
      }, [o]),
      E.useEffect(() => {
        d || h(`${e}`);
      }, [d]);
    const x = () => {
        h(`${e}`);
      },
      w = (b) => {
        m((C) => (C.some((N) => N.id === b.id) ? C : [...C, b])),
          c((C) =>
            C.map((N) => (N.id === b.id ? { ...N, isSelected: !0 } : N))
          );
      },
      j = (b) => {
        console.log(b),
          c((C) => C.map((N) => (N.id === b ? { ...N, isSelected: !1 } : N))),
          m((C) => C.filter((N) => N.id !== b));
      },
      k = () => {
        const b = y.map((N) => N.id),
          C = r.matchType.activePlayersPerTeam;
        if (b.length < C) {
          X.error(`Please select Atleast ${C} Players!`);
          return;
        }
        try {
          KS({ competitionId: r.id, teamId: o, playerIds: b });
        } catch (N) {
          console.log("Error updating squad ", N);
        }
      };
    return i.jsxs(ft, {
      children: [
        i.jsx(Zr, {
          children: i.jsxs("div", {
            className: "flex justify-between w-full py-1",
            children: [
              i.jsxs("div", {
                className: "flex gap-4",
                children: [
                  i.jsx("p", { className: "", children: "Sqaud" }),
                  i.jsx(GS, {
                    name: "Team",
                    setItem: a,
                    options: r.teams
                      ? r.teams.map((b) => ({ label: b.name, value: b.id }))
                      : [],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "flex gap-4",
                children: [
                  i.jsx(ie, {
                    to: "/competition",
                    children: i.jsx(Jl, { text: "Do it Later" }),
                  }),
                  i.jsx(cn, { text: "Update Squad", onClick: k }),
                ],
              }),
            ],
          }),
        }),
        i.jsx(Yr, {
          children: o
            ? i.jsxs("div", {
                className: "flex w-full gap-4",
                children: [
                  i.jsx("div", {
                    className: "w-4/12",
                    children: i.jsx(My, {
                      items: l,
                      handleSearch: x,
                      searchTerm: d,
                      setSearchTerm: p,
                      selectItem: w,
                    }),
                  }),
                  i.jsx("div", {
                    className: "w-8/12",
                    children: i.jsx(Py, {
                      selectedItems: y,
                      removeSelectedItem: j,
                      col3: "nickName",
                    }),
                  }),
                ],
              })
            : i.jsx("div", {
                className: "h-96 flex w-full justify-center pt-8",
                children: i.jsx("div", {
                  children: i.jsx("p", {
                    className: "bg-secondary200 animate-pulse rounded p-4",
                    children: "Please Select a Team to Update",
                  }),
                }),
              }),
        }),
      ],
    });
  },
  YS = () => {
    const [e] = jt(),
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
    return i.jsx(kt, {
      initialFormData: n,
      entityId: t,
      formComponent: Ay,
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
  QS = () =>
    i.jsx(Jr, {
      entityName: "Competition",
      entityUrl: "/competition/competitions",
      navigateTo: "/competition",
    }),
  XS = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/competition", element: i.jsx(IS, {}) }),
        i.jsx(Q, { path: "/add-competition", element: i.jsx($S, {}) }),
        i.jsx(Q, { path: "/update-competition", element: i.jsx(YS, {}) }),
        i.jsx(Q, { path: "/delete-competition", element: i.jsx(QS, {}) }),
        i.jsx(Q, { path: "/add-competition-teams", element: i.jsx(qS, {}) }),
        i.jsx(Q, { path: "/add-competition-squad", element: i.jsx(ZS, {}) }),
      ],
    }),
  JS = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Stadiums",
        fetchUrl: "stadium/stadiums",
        renderItem: (e) =>
          i.jsx(
            Xr,
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
  Iy = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const [s, o] = E.useState([]);
    E.useEffect(() => {
      ec({ setNationalities: o });
    }, []);
    const a = (l) => {
      const { name: c, value: u } = l.target;
      t((f) => ({ ...f, [c]: u }));
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "Stadium Name*",
              type: "text",
              placeholder: "Enter Stadium Name",
              value: e.name,
              inputName: "name",
              onChange: a,
            }),
            i.jsx(ue, {
              name: "Nationality *",
              options: s,
              value: e.nationality,
              inputName: "nationality",
              onChange: a,
            }),
            i.jsx("div", {}),
            i.jsx(Pe, {
              name: "City*",
              type: "text",
              inputName: "city",
              value: e.city,
              placeholder: "Enter Stadium's City",
              onChange: a,
            }),
            i.jsx(Pe, {
              name: "Capacity*",
              type: "number",
              inputName: "capacity",
              placeholder: "Enter Stadium Capacity",
              value: e.capacity,
              onChange: a,
            }),
          ],
        }),
        i.jsx("div", {
          className: "mt-4 mx-4",
          children: i.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  eC = () => {
    const e = { name: "", city: "", nationality: "", capacity: "" };
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: Iy,
      extendedUrl: "stadium/stadiums/",
      submitButtonText: "Add Stadium",
      navigateTo: "/stadium",
      isUpdate: !1,
      requiredFields: ["name", "city", "nationality", "capacity"],
    });
  },
  tC = () => {
    const [e] = jt(),
      t = e.get("id"),
      n = { name: "", city: "", nationality: "", capacity: "" };
    return i.jsx(kt, {
      initialFormData: n,
      formComponent: Iy,
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
  nC = () =>
    i.jsx(Jr, {
      entityName: "Stadium",
      entityUrl: "/stadium/stadiums",
      navigateTo: "/stadium",
    }),
  rC = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/stadium", element: i.jsx(JS, {}) }),
        i.jsx(Q, { path: "/add-stadium", element: i.jsx(eC, {}) }),
        i.jsx(Q, { path: "/update-stadium", element: i.jsx(tC, {}) }),
        i.jsx(Q, { path: "/delete-stadium", element: i.jsx(nC, {}) }),
      ],
    }),
  sC = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Umpire",
        fetchUrl: "umpire/umpires",
        renderItem: (e) =>
          i.jsx(
            Xr,
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
  Uy = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const [s, o] = E.useState([]);
    E.useEffect(() => {
      ec({ setNationalities: o });
    }, []);
    const a = (l) => {
      const { name: c, value: u } = l.target;
      t((f) => ({ ...f, [c]: u }));
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "Umpire Name*",
              type: "text",
              placeholder: "Enter Umpire Name",
              value: e.name,
              inputName: "name",
              onChange: a,
            }),
            i.jsx(Pe, {
              name: "Umpire Age*",
              type: "number",
              placeholder: "Enter Umpire's Age",
              value: e.age,
              inputName: "age",
              onChange: a,
            }),
            i.jsx(ue, {
              name: "Nationality *",
              options: s,
              value: e.nationality,
              inputName: "nationality",
              onChange: a,
            }),
          ],
        }),
        i.jsx("div", {
          className: "mt-4 mx-4",
          children: i.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  oC = () => {
    const e = { name: "", age: "", nationality: "" };
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: Uy,
      extendedUrl: "umpire/umpires/",
      submitButtonText: "Add Umpire",
      navigateTo: "/umpire",
      isUpdate: !1,
      requiredFields: ["name", "age", "nationality"],
    });
  },
  iC = () => {
    const [e] = jt(),
      t = e.get("id"),
      n = { name: "", age: "", nationality: "" };
    return i.jsx(kt, {
      initialFormData: n,
      formComponent: Uy,
      extendedUrl: "umpire/umpires/",
      submitButtonText: "Update Umpire",
      navigateTo: "/umpire",
      isUpdate: !0,
      entityId: t,
      requiredFields: ["name", "age", "nationality"],
    });
  },
  aC = () =>
    i.jsx(Jr, {
      entityName: "Umpire",
      entityUrl: "/umpire/umpires",
      navigateTo: "/umpire",
    }),
  lC = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/umpire", element: i.jsx(sC, {}) }),
        i.jsx(Q, { path: "/add-umpire", element: i.jsx(oC, {}) }),
        i.jsx(Q, { path: "/update-umpire", element: i.jsx(iC, {}) }),
        i.jsx(Q, { path: "/delete-umpire", element: i.jsx(aC, {}) }),
      ],
    }),
  cC = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Player",
        fetchUrl: "player/players/",
        searchPlaceholder: "Search Player",
        renderItem: (e) =>
          i.jsx(
            Xr,
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
  uC = ({
    isVisible: e = !1,
    handleStepClick: t,
    formData: n,
    handleChange: r,
  }) => {
    const [s, o] = E.useState([]);
    E.useEffect(() => {
      ec({ setNationalities: o });
    }, []);
    const a = [
        { id: "Male", name: "Male" },
        { id: "Female", name: "Female" },
        { id: "Third Gender", name: "Third Gender" },
      ],
      l = [
        { id: "Tall", name: "Tall" },
        { id: "Medium", name: "Medium" },
        { id: "Short", name: "Short" },
      ];
    return i.jsxs("div", {
      className: `${e ? "block" : "hidden"}`,
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "First Name",
              placeholder: "Enter First Name",
              inputName: "firstName",
              value: n.firstName,
              onChange: r,
            }),
            i.jsx(Pe, {
              name: "Middle Name",
              placeholder: "Enter Middle Name",
              inputName: "middleName",
              value: n.middleName,
              onChange: r,
            }),
            i.jsx(Pe, {
              name: "Last Name",
              placeholder: "Enter Last Name",
              inputName: "lastName",
              value: n.lastName,
              onChange: r,
            }),
            i.jsx(Pe, {
              name: "Nick Name",
              placeholder: "Enter Nick Name",
              inputName: "nickName",
              value: n.nickName,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Nationality",
              options: s,
              inputName: "nationality",
              value: n.nationality,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Gender",
              options: a,
              inputName: "gender",
              value: n.gender,
              onChange: r,
            }),
            i.jsx(Pe, {
              name: "Date Of Birth",
              type: "date",
              inputName: "dob",
              value: n.dob,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Height Type",
              options: l,
              inputName: "heightType",
              value: n.heightType,
              onChange: r,
            }),
            i.jsx("div", {}),
            i.jsx(Pe, {
              name: "Height",
              placeholder: "Enter Height",
              inputName: "height",
              type: "number",
              value: n.height,
              onChange: r,
            }),
            i.jsx(Pe, {
              name: "Weight",
              placeholder: "Enter Weight",
              type: "number",
              inputName: "weight",
              value: n.weight,
              onChange: r,
            }),
          ],
        }),
        i.jsx("div", {
          className:
            "flex justify-end py-4 px-2 bg-secondary500 bg-opacity-50 rounded",
          children: i.jsx(Vs, {
            text: "Proceed to Next step",
            onClick: t,
            flexDirection: "flex-row-reverse",
            children: i.jsx(Gf, {}),
          }),
        }),
      ],
    });
  },
  dC = ({
    isVisible: e = !1,
    handleStepClick: t,
    formData: n,
    handleChange: r,
    buttonText: s,
    onClick: o,
  }) => {
    const a = [
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
    return i.jsxs("div", {
      className: `${e ? "block" : "hidden"}`,
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(ue, {
              name: "Batting Hand",
              options: a,
              inputName: "battingHand",
              value: n.battingHand,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Bowling Hand",
              options: a,
              inputName: "bowlingHand",
              value: n.bowlingHand,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Player Role",
              options: l,
              inputName: "role",
              value: n.role,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Batting",
              options: f,
              inputName: "batting",
              value: n.batting,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Bowling",
              options: f,
              inputName: "bowling",
              value: n.bowling,
              onChange: r,
            }),
            i.jsx("div", {}),
            i.jsx(ue, {
              name: "Fielding",
              options: f,
              inputName: "fielding",
              value: n.fielding,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Wicket Keeping",
              options: f,
              inputName: "wicketKeeping",
              value: n.wicketKeeping,
              onChange: r,
            }),
            i.jsx("div", {}),
            i.jsx(ue, {
              name: "Batting Type",
              options: c,
              inputName: "battingType",
              value: n.battingType,
              onChange: r,
            }),
            i.jsx(ue, {
              name: "Bowling Type",
              options: u,
              inputName: "bowlingType",
              value: n.bowlingType,
              onChange: r,
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "flex flex-col lg:flex-row justify-end gap-8 py-4 px-2 bg-secondary500 bg-opacity-50 rounded",
          children: [
            i.jsx(Vs, {
              text: "Back to Previous Step",
              onClick: t,
              children: i.jsx(by, {}),
            }),
            i.jsx(cn, { text: s, onClick: o }),
          ],
        }),
      ],
    });
  },
  $y = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = E.useState(!0),
      [a, l] = E.useState(!1),
      c = () => {
        o((f) => !f), l((f) => !f);
      },
      u = (f) => {
        const { name: d, value: p } = f.target;
        t((y) => ({ ...y, [d]: p }));
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(uC, {
          isVisible: s,
          handleStepClick: c,
          formData: e,
          handleChange: u,
        }),
        i.jsx(dC, {
          isVisible: a,
          handleStepClick: c,
          formData: e,
          handleChange: u,
          buttonText: n,
          onClick: r,
        }),
      ],
    });
  },
  fC = () => {
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
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: $y,
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
  pC = () => {
    const [e] = jt(),
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
    return i.jsx(kt, {
      initialFormData: n,
      formComponent: $y,
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
  hC = () =>
    i.jsx(Jr, {
      entityName: "Player",
      entityUrl: "/player/players",
      navigateTo: "/player",
    }),
  mC = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/player", element: i.jsx(cC, {}) }),
        i.jsx(Q, { path: "/add-player", element: i.jsx(fC, {}) }),
        i.jsx(Q, { path: "/update-player", element: i.jsx(pC, {}) }),
        i.jsx(Q, { path: "/delete-player", element: i.jsx(hC, {}) }),
      ],
    }),
  gC = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
        entityName: "Team",
        fetchUrl: "team/teams",
        renderItem: (e) =>
          i.jsx(
            Xr,
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
  Fy = ({ formData: e, setFormData: t, onClick: n, buttonText: r }) => {
    const s = (o) => {
      const { name: a, value: l } = o.target;
      t((c) => ({ ...c, [a]: l }));
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 pb-4 px-4",
          children: [
            i.jsx(Pe, {
              name: "Team Name *",
              placeholder: "Enter Team Name",
              onChange: s,
              inputName: "name",
              value: e.name,
            }),
            i.jsx(Pe, {
              name: "Team's Short Name *",
              placeholder: "Enter Short Name",
              onChange: s,
              inputName: "shortName",
              value: e.shortName,
            }),
          ],
        }),
        i.jsx("div", {
          className: "mt-4 mx-4",
          children: i.jsx(cn, { text: r, onClick: n }),
        }),
      ],
    });
  },
  yC = () => {
    const e = { name: "", shortName: "" };
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: Fy,
      extendedUrl: "team/teams/",
      submitButtonText: "Add Team",
      navigateTo: "/teams",
      isUpdate: !1,
      requiredFields: ["name", "shortName"],
    });
  },
  xC = () => {
    const [e] = jt(),
      t = e.get("id"),
      n = { name: "", shortName: "" };
    return i.jsx(kt, {
      initialFormData: n,
      formComponent: Fy,
      extendedUrl: "team/teams/",
      submitButtonText: "Update Team",
      navigateTo: "/teams",
      isUpdate: !0,
      entityId: t,
      requiredFields: ["name", "shortName"],
    });
  },
  vC = () =>
    i.jsx(Jr, {
      entityName: "Team",
      entityUrl: "/team/teams",
      navigateTo: "/teams",
    }),
  wC = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/teams", element: i.jsx(gC, {}) }),
        i.jsx(Q, { path: "/add-team", element: i.jsx(yC, {}) }),
        i.jsx(Q, { path: "/update-team", element: i.jsx(xC, {}) }),
        i.jsx(Q, { path: "/delete-team", element: i.jsx(vC, {}) }),
      ],
    }),
  SC = () =>
    i.jsx(ft, {
      children: i.jsx(Qr, {
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
          return i.jsxs(
            Xr,
            {
              name: `${e.displayName} `,
              prefixName: "MTC",
              id: e.id,
              pagePrefix: "match",
              children: [
                e.matchEnded &&
                  i.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      i.jsx("p", {
                        className:
                          "text-gray-700 opacity-50 bg-white bg-opacity-40 px-4 rounded-sm hover:text-gray-100 hover:bg-gray-800 transition-all duration-150 ease-linear",
                        children: "Ended",
                      }),
                      e.isVideoCaptureEnabled == "yes" &&
                        !e.hasMatchVideosUploadCompleted &&
                        i.jsx(Ms, {
                          text: "Upload",
                          status: t,
                          onClickUrl: `/upload-videos?id=${e.id}`,
                          bg: "bg-gray-500 transition-all duration-500 hover:bg-gray-900 shadow-xl",
                          children: i.jsx(Ty, { fontSize: "small" }),
                        }),
                      e.isVideoCaptureEnabled == "yes" &&
                        e.hasMatchVideosUploadCompleted &&
                        i.jsxs("p", {
                          className:
                            "text-gray-700 opacity-50 bg-white bg-opacity-40 px-4 rounded-sm hover:text-gray-100 hover:bg-gray-800 transition-all duration-150 ease-linear",
                          children: [i.jsx(BS, {}), i.jsx(jS, {})],
                        }),
                    ],
                  }),
                !e.matchEnded &&
                  i.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      i.jsx(Ms, {
                        text: "Toss & Squad",
                        status: n,
                        onClickUrl: `/update-match-toss?id=${e.id}`,
                        children: i.jsx(vy, {
                          text_size: "small",
                          onClickUrl: "/",
                        }),
                      }),
                      i.jsx(Ms, {
                        text: "Ball Code",
                        status: t,
                        onClickUrl: `/ball?id=${e.id}`,
                        bg: "bg-gradient-to-r from-accent to-green-500 transition-all duration-500 hover:from-primary500 hover:to-pink-500 shadow-xl",
                        children: i.jsx(AS, { fontSize: "small" }),
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
  Na = ({
    name: e = "Team 1",
    options: t,
    extraClasses: n = "",
    textWidth: r = "w-1/4",
    inputWidth: s = "w-3/4",
    onChange: o = null,
    value: a = "",
    inputName: l = "",
  }) =>
    i.jsxs("div", {
      className: `flex ${n}`,
      children: [
        i.jsx("p", {
          className: `bg-gray-700 rounded-l-md px-4 py-1 ${r}`,
          children: e,
        }),
        i.jsx("div", {
          className: `bg-secondary500 border-2 border-gray-700 rounded-r-md ${s}`,
          children: i.jsxs("select", {
            name: l,
            id: "",
            className: "bg-secondary500 rounded-r-md px-4 py-1 w-full",
            onChange: o,
            value: a,
            children: [
              i.jsxs("option", { value: "", children: ["Select ", e] }),
              t.map((c, u) =>
                i.jsx("option", { value: c.id, children: c.name }, u)
              ),
            ],
          }),
        }),
      ],
    });
async function ea({ extendedUrl: e, setItems: t, label: n = "Data" }) {
  try {
    const r = await ge.get(e);
    console.log(n, r), t(r.data);
  } catch (r) {
    console.log("Error fetching ", r.response.data);
  }
}
const Dy = ({ formData: e, setFormData: t, buttonText: n, onClick: r }) => {
    const [s, o] = E.useState([]),
      [a, l] = E.useState(""),
      [c, u] = E.useState([]),
      [f, d] = E.useState([]),
      p = [
        { id: "day", name: "Day" },
        { id: "night", name: "Night" },
        { id: "daynight", name: "Day-Night" },
      ],
      [y, m] = E.useState([]),
      [g, S] = E.useState([]),
      [h, x] = E.useState([]),
      w = async (k) => {
        console.log("ID - ", k);
        try {
          const b = await Oy({ id: k });
          console.log("Competition Data - ", b),
            l(b),
            x(b.teams),
            console.log("Teams - ", b.teams);
        } catch (b) {
          console.error("Error fetching competition data:", b);
        }
      };
    E.useEffect(() => {
      Ry({ setMatchTypes: u }),
        ea({ extendedUrl: "competition/competitions/all/", setItems: o }),
        ea({ extendedUrl: "stadium/stadiums/all/", setItems: d }),
        ea({ extendedUrl: "competition/knockouts/", setItems: m }),
        ea({
          extendedUrl: "umpire/umpires/all/",
          setItems: S,
          label: "Umpire",
        }),
        console.log("Umpires - ", g);
    }, []),
      E.useEffect(() => {
        if (e.competition)
          try {
            w(e.competition);
          } catch (k) {
            console.error("Error fetching competition data:", k);
          }
      }, [e.competition]);
    const j = (k) => {
      const { name: b, value: C } = k.target;
      t((N) =>
        (b === "team1" && C === N.team2) || (b === "team2" && C === N.team1)
          ? (X.error("Both Team-1 & Team-2 can't be the same!"),
            { ...N, [b]: "" })
          : { ...N, [b]: C }
      ),
        b === "competition" && w(C);
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-8 lg:pb-4 px-4",
          children: [
            i.jsx(ue, {
              name: "Competition *",
              options: s,
              inputName: "competition",
              value: e.competition,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Stadium *",
              inputName: "stadium",
              options: f,
              value: e.stadium,
              onChange: j,
            }),
            i.jsx(Pe, {
              name: "Date",
              type: "date",
              inputName: "date",
              value: e.date,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Match Type *",
              options: c,
              inputName: "matchType",
              value: e.matchType,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Match Condition *",
              options: p,
              inputName: "matchCondition",
              value: e.matchCondition,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Knock Out *",
              options: y,
              inputName: "knockOut",
              value: e.knockOut,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "First Umpire",
              options: g,
              inputName: "firstUmpire",
              value: e.firstUmpire,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Second Umpire",
              options: g,
              inputName: "secondUmpire",
              value: e.secondUmpire,
              onChange: j,
            }),
            i.jsx(ue, {
              name: "Third Umpire",
              options: g,
              inputName: "thirdUmpire",
              value: e.thirdUmpire,
              onChange: j,
            }),
            i.jsx(Na, {
              name: "Team 1 *",
              options: h || [],
              inputName: "team1",
              value: e.team1,
              onChange: j,
              extraClasses: "mt-4",
            }),
            i.jsx(Na, {
              name: "Team 2 *",
              options: h || [],
              inputName: "team2",
              value: e.team2,
              onChange: j,
              extraClasses: "mt-4",
            }),
            i.jsx(Na, {
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
              onChange: j,
            }),
          ],
        }),
        i.jsx("div", {
          className: "flex justify-end mt-4 mr-4",
          children: i.jsx(cn, { text: n, onClick: r }),
        }),
      ],
    });
  },
  CC = () => {
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
    return i.jsx(kt, {
      initialFormData: e,
      formComponent: Dy,
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
  bC = () => {
    const [e] = jt(),
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
    return i.jsx(kt, {
      initialFormData: n,
      formComponent: Dy,
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
  jC = () =>
    i.jsx(Jr, {
      entityName: "Match",
      entityUrl: "/match/matches",
      navigateTo: "/match",
    });
async function kC({ id: e }) {
  try {
    const t = await ge.get(`match/match-teams/${e}`);
    return console.log("Fetched Match Teams ", t.data), t.data;
  } catch (t) {
    console.log("error ", t);
  }
}
async function NC({ formData: e, extendedUrl: t }) {
  try {
    const n = await ge.patch(t, e);
    X.success("Update Success!");
  } catch (n) {
    console.log("Error ", n), X.error("Update Failed!");
  }
}
const EC = () => {
    const [e] = jt(),
      t = e.get("id"),
      [n, r] = E.useState(null),
      [s, o] = E.useState([]),
      a = Ut(),
      l = [
        { id: "batting", name: "Batting" },
        { id: "bowling", name: "Bowling" },
      ],
      [c, u] = E.useState(""),
      [f, d] = E.useState("");
    async function p() {
      const m = await kC({ id: t });
      m &&
        (console.log("Got Competition Data", m),
        r(m),
        u(m.tossWonBy || ""),
        d(m.optTo || ""),
        o([
          { id: m.team1.id, name: m.team1.name },
          { id: m.team2.id, name: m.team2.name },
        ]));
    }
    E.useEffect(() => {
      p();
    }, []);
    const y = () => {
      !c || !f
        ? X.error("Please fill all Fields!")
        : (NC({
            formData: { id: t, tossWonBy: c, optTo: f },
            extendedUrl: `match/matches/${t}/`,
          }),
          a(`/update-match-playing-squad?id=${t}`, {
            state: { competitionId: n.competition, teams: s },
          }));
    };
    return i.jsx(ft, {
      children: i.jsxs(jy, {
        backButtonText: "All Matches",
        navigateTo: "/match",
        text: "Update Match Toss",
        children: [
          i.jsxs("div", {
            className: "grid grid-cols-3 gap-4 pt-8 pb-4 mb-4",
            children: [
              i.jsx(ue, {
                name: "Toss won by",
                inputName: "tossWonBy",
                options: s,
                value: c,
                onChange: (m) => {
                  u(m.target.value);
                },
              }),
              i.jsx(ue, {
                name: "Toss decision",
                inputName: "tossDecision",
                options: l,
                value: f,
                onChange: (m) => {
                  d(m.target.value);
                },
              }),
            ],
          }),
          i.jsx("div", {
            className: "flex justify-end",
            children: i.jsx(cn, { text: "Update Toss & Continue", onClick: y }),
          }),
        ],
      }),
    });
  },
  Jc = ({ text_size: e }) =>
    i.jsx(Be, {
      fontSize: e,
      children: i.jsx("svg", {
        width: "2",
        height: "1.5",
        viewBox: "0 0 8 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M1 3L3.57143 5L7 1",
          stroke: "white",
          "stroke-linecap": "round",
        }),
      }),
    }),
  TC = ({
    name: e,
    nationality: t,
    onClick: n,
    isSelected: r,
    index: s,
    isWicketKeeper: o,
    isCaptain: a,
    onCaptainClick: l,
    onWicketKeeperClick: c,
  }) =>
    i.jsxs("div", {
      className:
        "flex w-full px-4 py-2 border-b-1 border-secondary1000 hover:shadow-xl hover:bg-gray-400 hover:bg-opacity-10",
      children: [
        i.jsx("button", {
          className: "w-1/12 pt-1",
          onClick: n,
          children: r
            ? i.jsx("div", {
                className: "w-5 h-5 rounded bg-accent",
                children: i.jsx(Jc, { text_size: "small" }),
              })
            : i.jsx("p", { className: "w-5 h-5 rounded border-1" }),
        }),
        i.jsx("div", {
          className: "w-1/12",
          children: i.jsx("div", {
            children: s
              ? i.jsxs("p", {
                  className:
                    "w-6 h-6 rounded-full bg-sky-500 font-extrabold text-center",
                  children: [s || "-", " "],
                })
              : i.jsx("p", {
                  className: "w-6 h-6 rounded-full font-extrabold text-center",
                }),
          }),
        }),
        i.jsx("p", { className: "w-5/12", children: e }),
        i.jsx("p", { className: "w-3/12", children: t }),
        i.jsx("div", {
          className: "w-1/12 flex justify-center",
          children: r
            ? i.jsx("button", {
                className: "w-1/12 pt-1",
                onClick: l,
                children: a
                  ? i.jsx("div", {
                      className: "w-5 h-5 rounded bg-accent",
                      children: i.jsx(Jc, { text_size: "small" }),
                    })
                  : i.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              })
            : i.jsx("button", {
                className: "w-1/12 pt-1",
                children: i.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              }),
        }),
        i.jsx("div", {
          className: "w-1/12 flex justify-center",
          children: r
            ? i.jsx("button", {
                className: "w-1/12 pt-1",
                onClick: c,
                children: o
                  ? i.jsx("div", {
                      className: "w-5 h-5 rounded bg-accent",
                      children: i.jsx(Jc, { text_size: "small" }),
                    })
                  : i.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              })
            : i.jsx("button", {
                className: "w-1/12 pt-1",
                children: i.jsx("p", { className: "w-5 h-5 rounded border-1" }),
              }),
        }),
      ],
    }),
  _C = () => {
    const e = Zs(),
      [t] = jt(),
      n = t.get("id"),
      { competitionId: r, teams: s } = e.state || {},
      [o, a] = E.useState(""),
      [l, c] = E.useState([]),
      [u, f] = E.useState(""),
      [d, p] = E.useState([]),
      [y, m] = E.useState(null),
      [g, S] = E.useState(null),
      h = async () => {
        try {
          await Yf({
            id: r,
            setItem: f,
            extendedUrl: "competition/competitions/teams/",
          });
        } catch (C) {
          console.error("Error fetching competition data:", C);
        }
      };
    E.useEffect(() => {
      h();
    }, []);
    const x = async () => {
      if (o)
        try {
          c([]),
            await By({ competitionId: r, teamId: o }).then((C) => {
              const N = C[0].players;
              console.log("existing ", N),
                N.forEach((v) => {
                  const R = `${v.firstName} ${
                      v.middleName ? v.middleName + " " : ""
                    }${v.lastName ? v.lastName + " " : ""}(${v.id})`,
                    M = "",
                    I = !1,
                    D = !0;
                  c((q) => [...q, { ...v, name: R, playingIndex: M }]),
                    p([]),
                    m(""),
                    S("");
                });
            });
        } catch (C) {
          console.log("Error - ", C);
        }
    };
    E.useEffect(() => {
      x();
    }, [o]);
    const w = (C) => {
        let N = [];
        d.includes(C) ? (N = d.filter((v) => v !== C)) : (N = [...d, C]),
          p(N),
          c((v) =>
            v.map((R) => ({ ...R, playingIndex: N.indexOf(R.id) + 1 || "" }))
          );
      },
      j = (C) => {
        m(C === y ? null : C);
      },
      k = (C) => {
        S(C === g ? null : C);
      },
      b = async () => {
        const C = u.matchType.activePlayersPerTeam;
        if (d.length < C) {
          X.error(`Please select at least ${C} players!`);
          return;
        }
        if (!y || !g) {
          X.error("Please select the Captain & Wicket-keeper");
          return;
        }
        const N = {
          match: n,
          team: o,
          players: d,
          captain: y,
          wicketKeeper: g,
        };
        try {
          (await Qf({
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
    return i.jsxs(ft, {
      children: [
        i.jsx(Kf, {
          children: i.jsx(Xl, { text: "Back", navigateTo: "/match" }),
        }),
        i.jsxs(Zr, {
          flexDirection: "justify-between",
          children: [
            i.jsx("div", {
              className: "flex gap-4",
              children: i.jsx(Na, {
                name: "Team",
                options: s,
                value: o,
                onChange: (C) => {
                  a(C.target.value);
                },
              }),
            }),
            i.jsx(cn, { text: "Update Playing Squad", onClick: b }),
          ],
        }),
        i.jsx(Yr, {
          children: i.jsxs("div", {
            className: "pt-4",
            children: [
              i.jsx(Yl, {
                children: i.jsxs("div", {
                  className: "flex w-full",
                  children: [
                    i.jsx("div", {
                      className: "w-1/12 pt-1",
                      children: i.jsx("p", {
                        className: "w-4 h-4 rounded border-1",
                      }),
                    }),
                    i.jsx("p", { className: "w-1/12" }),
                    i.jsx("p", { className: "w-5/12", children: "Name" }),
                    i.jsx("p", { className: "w-3/12", children: "Player ID" }),
                    i.jsx("p", {
                      className: "w-1/12 text-center",
                      children: "Captain",
                    }),
                    i.jsx("p", {
                      className: "w-1/12 text-center",
                      children: "W.K",
                    }),
                  ],
                }),
              }),
              i.jsx(Ql, {
                children:
                  l.length > 0
                    ? l.map((C) =>
                        i.jsx(
                          TC,
                          {
                            name: C.name,
                            nationality: C.id,
                            onClick: () => w(C.id),
                            isSelected: d.includes(C.id),
                            index: C.playingIndex,
                            isCaptain: y === C.id,
                            isWicketKeeper: g === C.id,
                            onCaptainClick: () => j(C.id),
                            onWicketKeeperClick: () => k(C.id),
                          },
                          C.id
                        )
                      )
                    : i.jsx("p", {
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
async function RC({ matchId: e, formData: t }) {
  try {
    return (
      await ge.post(`match/upload-videos/?matchId=${e}`, t, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  } catch (n) {
    throw (console.error("Error during video upload:", n), n);
  }
}
const AC = ({
    navigateTo: e = "/",
    name: t = "",
    prefixName: n = "",
    onClick: r = null,
  }) => {
    const [s] = jt(),
      o = s.get("id");
    console.log("MId", o);
    const [a, l] = E.useState([]),
      [c, u] = E.useState(!0),
      f = Ut(),
      d = (g) => {
        l(Array.from(g.target.files));
      },
      p = async () => {
        const g = new FormData();
        a.forEach((S, h) => {
          g.append("videos", S),
            console.log(`File added to formData: ${S.name}, size: ${S.size}`);
        }),
          console.log("FormData prepared for upload:", g);
        try {
          (await RC({ matchId: o, formData: g })) &&
            (X.success("Videos uploaded successfully!"), l([]), f("/match"));
        } catch (S) {
          console.error("Error uploading videos:", S),
            X.error("Failed to upload videos. Please try again.");
        }
      },
      y = () => {
        u((g) => !g);
      },
      m = (g) => {
        l((S) => S.filter((h, x) => x !== g));
      };
    return i.jsx(ft, {
      children: i.jsx("div", {
        className: "flex justify-center w-full",
        children: i.jsxs("div", {
          className: "w-full md:w-1/2",
          children: [
            i.jsxs(Zr, {
              flexDirection: "gap-8",
              children: [
                i.jsx(Xl, { text: "Back to All", navigateTo: e }),
                i.jsx("p", { children: "Upload Match Videos" }),
              ],
            }),
            i.jsxs(Yr, {
              children: [
                i.jsx("p", {
                  className: "py-4 text-yellow-500",
                  children: "NOTE",
                }),
                i.jsxs("ul", {
                  className: "list-outside list-disc px-4 text-yellow-100",
                  children: [
                    i.jsx("li", {
                      children:
                        "The Videos are available in your Browser's Default Download Location",
                    }),
                    i.jsx("li", {
                      children:
                        "Only Upload the videos whos file name starts with Current Match ID",
                    }),
                  ],
                }),
                i.jsx("p", {
                  className: "py-4",
                  children: "Please Upload All Match Related Videos",
                }),
                i.jsxs("div", {
                  className: "py-2 flex w-full text-center hover:shadow-xl",
                  children: [
                    i.jsxs("p", {
                      className: "w-1/4 bg-secondary250 py-4",
                      children: ["MATCH ", o],
                    }),
                    i.jsxs("div", {
                      className: "w-3/4 bg-secondary200 py-4",
                      children: [
                        i.jsx("input", {
                          type: "file",
                          multiple: !0,
                          accept: "video/*",
                          onChange: d,
                        }),
                        a.length > 0 &&
                          i.jsx("div", {
                            className: "mx-4 h-24 overflow-y-scroll my-4",
                            children: i.jsx("ul", {
                              className: "mt-2",
                              children: a.map((g, S) =>
                                i.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      g.name,
                                      " - ",
                                      (g.size / 1024 / 1024).toFixed(2),
                                      " ",
                                      "MB",
                                      i.jsx("button", {
                                        onClick: () => m(S),
                                        className: "text-red-500 mx-2",
                                        children: i.jsx(Zf, {}),
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
                i.jsxs("div", {
                  className: "flex gap-4 py-4",
                  children: [
                    i.jsx("input", { type: "checkbox", onClick: y }),
                    " ",
                    i.jsx("p", {
                      children:
                        "I have uploaded the videos and I'm Aware of my Act",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex justify-end w-full gap-4",
                  children: [
                    i.jsx(ie, {
                      to: e,
                      children: i.jsx(Jl, { text: "Cancel" }),
                    }),
                    !c &&
                      i.jsx(Vs, {
                        text: "Upload",
                        text_colour: "text-green-500",
                        onClick: p,
                        children: i.jsx(Ty, { fontSize: "small" }),
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
  MC = () =>
    i.jsxs(Cn, {
      children: [
        i.jsx(Q, { path: "/match", element: i.jsx(SC, {}) }),
        i.jsx(Q, { path: "/add-match", element: i.jsx(CC, {}) }),
        i.jsx(Q, { path: "/update-match", element: i.jsx(bC, {}) }),
        i.jsx(Q, { path: "/upload-videos", element: i.jsx(AC, {}) }),
        i.jsx(Q, { path: "/delete-match", element: i.jsx(jC, {}) }),
        i.jsx(Q, { path: "/update-match-toss", element: i.jsx(EC, {}) }),
        i.jsx(Q, {
          path: "/update-match-playing-squad",
          element: i.jsx(_C, {}),
        }),
      ],
    }),
  PC = ({ children: e }) =>
    i.jsx("div", {
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
    i.jsxs("div", {
      className: "rounded-lg",
      children: [
        i.jsx("p", {
          className: "bg-titlebar text-white px-2 py-1 rounded-tl-lg",
          children: e,
        }),
        i.jsx("div", {
          children: t.map((s, o) =>
            i.jsx(
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
  Ge = Y4((e) => ({
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
    isScorecardModalVisible: !1,
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
    setIsScorecardModalVisible: (t) => e({ isScorecardModalVisible: t }),
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
  LC = () => {
    const {
        deliveryType: e,
        setDeliveryType: t,
        creaseMovement: n,
        setCreaseMovement: r,
        shotConnection: s,
        setShotConnection: o,
        batSubject: a,
        setBatSubject: l,
        stroke: c,
        setStroke: u,
        keeperActivity: f,
        setKeeperActivity: d,
        batsmanActivity: p,
        setBatsmanActivity: y,
        fieldingActivity: m,
        setFieldingActivity: g,
        umpireActivity: S,
        setUmpireActivity: h,
      } = Ge(),
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
      j = [
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
      k = [
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
      R = ["Appeal", "Umpire", "Review", "UnOfficial DRS"];
    return i.jsxs("div", {
      className: "xl:w-5/12 grid grid-cols-2 lg:grid-cols-4",
      children: [
        i.jsx("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: i.jsx(En, {
            title: "Delivery Type",
            options: x,
            selectedOption: e,
            onSelect: (M) => t(M),
          }),
        }),
        i.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            i.jsx(En, {
              title: "Crease Movement",
              options: w,
              selectedOption: n,
              onSelect: (M) => r(M),
            }),
            i.jsx(En, {
              title: "Shot Connection",
              options: j,
              selectedOption: s,
              onSelect: (M) => o(M),
            }),
            i.jsx(En, {
              title: "Bat Subject",
              options: k,
              selectedOption: a,
              onSelect: (M) => l(M),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            i.jsx(En, {
              title: "Stroke",
              options: b,
              selectedOption: c,
              onSelect: (M) => u(M),
            }),
            i.jsx(En, {
              title: "Keeper",
              options: C,
              selectedOption: f,
              onSelect: (M) => d(M),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "border-b-2 border-r-2 border-primary1000",
          children: [
            i.jsx(En, {
              title: "Batsman",
              options: N,
              selectedOption: p,
              onSelect: (M) => y(M),
            }),
            i.jsx(En, {
              title: "Fielding",
              options: v,
              selectedOption: m,
              onSelect: (M) => g(M),
            }),
            i.jsx(En, {
              title: "Umpire",
              options: R,
              selectedOption: S,
              onSelect: (M) => h(M),
            }),
          ],
        }),
      ],
    });
  },
  OC = () => {
    const [e, t] = E.useState(null),
      n = E.useRef(null);
    return (
      E.useEffect(() => {
        navigator.mediaDevices
          .enumerateDevices()
          .then((r) => {
            const s = r.filter((a) => a.kind === "videoinput");
            console.log("Video input devices found:", s);
            const o = s.find((a) => a.label.includes("OBS Virtual Camera"));
            console.log("OBS Virtual Camera detected:", o),
              o
                ? navigator.mediaDevices
                    .getUserMedia({
                      video: { deviceId: { exact: o.deviceId } },
                    })
                    .then((a) => {
                      console.log("Stream obtained successfully:", a), t(a);
                    })
                    .catch((a) => {
                      console.error("Error accessing OBS Virtual Camera:", a);
                    })
                : (console.warn(
                    "OBS Virtual Camera not found. Using default camera."
                  ),
                  navigator.mediaDevices
                    .getUserMedia({ video: !0 })
                    .then((a) => {
                      t(a);
                    })
                    .catch((a) => {
                      console.error("Error accessing default camera:", a);
                    }));
          })
          .catch((r) => {
            console.error("Error fetching video devices:", r);
          });
      }, []),
      E.useEffect(
        () => (
          n.current &&
            e &&
            (console.log("Attaching stream to video element:", e),
            (n.current.srcObject = e)),
          () => {
            e &&
              (e.getTracks().forEach((r) => r.stop()),
              console.log("Video stream stopped."));
          }
        ),
        [e]
      ),
      i.jsx("div", {
        className: "rounded-t-lg overflow-hidden",
        style: {
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, #111, #2A2A35)",
        },
        children: e
          ? i.jsx("video", {
              ref: n,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              style: { width: "100%", height: "100%", objectFit: "contain" },
            })
          : i.jsx("img", {
              src: "https://static.tnn.in/thumb/msid-97269311,thumbsize-2533039,width-1280,height-720,resizemode-75/97269311.jpg?quality=100",
              alt: "OBS Placeholder",
              style: { width: "100%", height: "100%", objectFit: "contain" },
            }),
      })
    );
  };
var zy = {};
const BC = (e) => (t) => {
    const n = e(t);
    return t.add(n), n;
  },
  IC = (e) => (t, n) => (e.set(t, n), n),
  ym =
    Number.MAX_SAFE_INTEGER === void 0
      ? 9007199254740991
      : Number.MAX_SAFE_INTEGER,
  Vy = 536870912,
  xm = Vy * 2,
  UC = (e, t) => (n) => {
    const r = t.get(n);
    let s = r === void 0 ? n.size : r < xm ? r + 1 : 0;
    if (!n.has(s)) return e(n, s);
    if (n.size < Vy) {
      for (; n.has(s); ) s = Math.floor(Math.random() * xm);
      return e(n, s);
    }
    if (n.size > ym)
      throw new Error(
        "Congratulations, you created a collection of unique numbers which uses all available integers!"
      );
    for (; n.has(s); ) s = Math.floor(Math.random() * ym);
    return e(n, s);
  },
  Wy = new WeakMap(),
  $C = IC(Wy),
  Hy = UC($C, Wy),
  FC = BC(Hy),
  DC = (e) => typeof e.start == "function",
  vm = new WeakMap(),
  zC = (e) => ({
    ...e,
    connect:
      ({ call: t }) =>
      async () => {
        const { port1: n, port2: r } = new MessageChannel(),
          s = await t("connect", { port: n }, [n]);
        return vm.set(r, s), r;
      },
    disconnect:
      ({ call: t }) =>
      async (n) => {
        const r = vm.get(n);
        if (r === void 0) throw new Error("The given port is not connected.");
        await t("disconnect", { portId: r });
      },
    isSupported:
      ({ call: t }) =>
      () =>
        t("isSupported"),
  }),
  eu = new WeakMap(),
  VC = (e) => {
    if (eu.has(e)) return eu.get(e);
    const t = new Map();
    return eu.set(e, t), t;
  },
  qy = (e) => {
    const t = zC(e);
    return (n) => {
      const r = VC(n);
      n.addEventListener("message", ({ data: l }) => {
        const { id: c } = l;
        if (c !== null && r.has(c)) {
          const { reject: u, resolve: f } = r.get(c);
          r.delete(c),
            l.error === void 0 ? f(l.result) : u(new Error(l.error.message));
        }
      }),
        DC(n) && n.start();
      const s = (l, c = null, u = []) =>
          new Promise((f, d) => {
            const p = Hy(r);
            r.set(p, { reject: d, resolve: f }),
              c === null
                ? n.postMessage({ id: p, method: l }, u)
                : n.postMessage({ id: p, method: l, params: c }, u);
          }),
        o = (l, c, u = []) => {
          n.postMessage({ id: null, method: l, params: c }, u);
        };
      let a = {};
      for (const [l, c] of Object.entries(t))
        a = { ...a, [l]: c({ call: s, notify: o }) };
      return { ...a };
    };
  },
  wm = new Set(),
  WC = qy({
    deregister:
      ({ call: e }) =>
      (t) =>
        e("deregister", { port: t }, [t]),
    encode:
      ({ call: e }) =>
      async (t, n) => {
        const r = await e("encode", { encoderId: t, timeslice: n });
        return wm.delete(t), r;
      },
    instantiate:
      ({ call: e }) =>
      async (t, n) => {
        const r = FC(wm),
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
  HC = (e) => {
    const t = new Worker(e);
    return WC(t);
  },
  qC = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=a(c,i),d=t(l);e.addUniqueNumber=d,e.generateUniqueNumber=l}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(455);const t=new WeakMap,n=new WeakMap,o=(r=>{const o=(s=r,{...s,connect:e=>{let{call:r}=e;return async()=>{const{port1:e,port2:n}=new MessageChannel,o=await r("connect",{port:e},[e]);return t.set(n,o),n}},disconnect:e=>{let{call:r}=e;return async e=>{const n=t.get(e);if(void 0===n)throw new Error("The given port is not connected.");await r("disconnect",{portId:n})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var s;return t=>{const r=(e=>{if(n.has(e))return n.get(e);const t=new Map;return n.set(e,t),t})(t);t.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(t)&&t.start();const s=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,i)=>{const c=(0,e.generateUniqueNumber)(r);r.set(c,{reject:i,resolve:a}),null===o?t.postMessage({id:c,method:n},s):t.postMessage({id:c,method:n,params:o},s)}))},a=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.postMessage({id:null,method:e,params:r},n)};let i={};for(const[e,t]of Object.entries(o))i={...i,[e]:t({call:s,notify:a})};return{...i}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),s=-32603,a=-32602,i=-32601,c=(e,t)=>Object.assign(new Error(e),{status:t}),l=e=>c('The handler of the method called "'.concat(e,'" returned an unexpected result.'),s),d=(e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const d=t[o];try{if(void 0===d)throw(e=>c('The requested method called "'.concat(e,'" is not supported.'),i))(o);const t=void 0===a?d():d(a);if(void 0===t)throw(e=>c('The handler of the method called "'.concat(e,'" returned no required result.'),s))(o);const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw l(o)}else{if(void 0===r.result)throw l(o);const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}},u=new Map,h=(t,r,n)=>({...r,connect:n=>{let{port:o}=n;o.start();const s=t(o,r),a=(0,e.generateUniqueNumber)(u);return u.set(a,(()=>{s(),o.close(),u.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=u.get(t);if(void 0===r)throw(e=>c('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),a))(t);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=function(e,t){const r=h(f,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0),n=d(e,r);return e.addEventListener("message",n),()=>e.removeEventListener("message",n)},p=e=>{e.onmessage=null,e.close()},w=new Map,m=new WeakMap,g=((e,t)=>r=>{const n=t.get(r);if(void 0===n)throw new Error("There is no encoder stored which wraps this port.");e.delete(n),t.delete(r)})(w,m),v=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(v),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(v,y),E=((e,t)=>r=>{const[n,o,s,a]=t(r);return s?new Promise((t=>{o.onmessage=s=>{let{data:i}=s;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,a,i)}})):n.encode(r,null)})(p,M),b=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(w),T=((e,t,r)=>(n,o,s)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const a=r(o),{port1:i,port2:c}=new MessageChannel,l=[a,i,!0,s];return t.set(n,l),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),l[2]=!1):a.record(n,s,r.map((e=>"number"==typeof e?new Float32Array(e):e)))},c})(p,v,b),I=((e,t,r)=>async n=>{const o=r(n),s=await o.characterize(),a=s.toString();if(e.has(a)||t.has(n))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(a,[s,o]),t.set(n,a),s})(w,m,o),A=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);f(self,{deregister:async e=>{let{port:t}=e;return{result:g(t)}},encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await A(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=T(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await I(t)}}})})()})();`,
  GC = new Blob([qC], { type: "application/javascript; charset=utf-8" }),
  Gy = URL.createObjectURL(GC),
  Xf = HC(Gy),
  ol = Xf.encode,
  Ky = Xf.instantiate,
  KC = Xf.register;
URL.revokeObjectURL(Gy);
const ZC = (e) => (t, n) => {
    if (e === null) {
      const { data: r, ...s } = n,
        o = new Event(t, s);
      return (o.data = r), o;
    }
    return new e(t, n);
  },
  YC = (e, t) => (n, r, s) => {
    const o = [];
    let a = r,
      l = 0;
    for (; l < n.byteLength; )
      if (a === null) {
        const c = t(n, l);
        if (c === null) break;
        const { length: u, type: f } = c;
        (a = f), (l += u);
      } else {
        const c = e(n, l, a, s);
        if (c === null) break;
        const { content: u, length: f } = c;
        (a = null), (l += f), u !== null && o.push(u);
      }
    return { contents: o, currentElementType: a, offset: l };
  },
  QC = (e, t) =>
    class {
      constructor(r = null) {
        (this._listeners = new WeakMap()),
          (this._nativeEventTarget = r === null ? e() : r);
      }
      addEventListener(r, s, o) {
        if (s !== null) {
          let a = this._listeners.get(s);
          a === void 0 &&
            ((a = t(this, s)),
            typeof s == "function" && this._listeners.set(s, a)),
            this._nativeEventTarget.addEventListener(r, a, o);
        }
      }
      dispatchEvent(r) {
        return this._nativeEventTarget.dispatchEvent(r);
      }
      removeEventListener(r, s, o) {
        const a = s === null ? void 0 : this._listeners.get(s);
        this._nativeEventTarget.removeEventListener(
          r,
          a === void 0 ? null : a,
          o
        );
      }
    },
  XC = (e) => () => {
    if (e === null)
      throw new Error("A native EventTarget could not be created.");
    return e.document.createElement("p");
  },
  Jf = (e = "") => {
    try {
      return new DOMException(e, "InvalidModificationError");
    } catch (t) {
      return (
        (t.code = 13), (t.message = e), (t.name = "InvalidModificationError"), t
      );
    }
  },
  JC = () => {
    try {
      return new DOMException("", "InvalidStateError");
    } catch (e) {
      return (e.code = 11), (e.name = "InvalidStateError"), e;
    }
  },
  eb = (e) =>
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
            o.addEventListener("dataavailable", ({ data: a }) =>
              t(a.type === s)
            ),
              o.start(),
              setTimeout(() => o.stop(), 10);
          } catch (o) {
            t(o.name === "NotSupportedError");
          }
        })
      : Promise.resolve(!1),
  tb = (e, t, n, r, s, o, a) =>
    class extends o {
      constructor(c, u = {}) {
        const { mimeType: f } = u;
        if (
          a !== null &&
          (f === void 0 ||
            (a.isTypeSupported !== void 0 && a.isTypeSupported(f)))
        ) {
          const d = e(a, c, u);
          super(d), (this._internalMediaRecorder = d);
        } else if (f !== void 0 && s.some((d) => d.test(f)))
          super(),
            a !== null &&
            a.isTypeSupported !== void 0 &&
            a.isTypeSupported("audio/webm;codecs=pcm")
              ? (this._internalMediaRecorder = r(this, a, c, f))
              : (this._internalMediaRecorder = n(this, c, f));
        else throw (a !== null && e(a, c, u), t());
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
          (a !== null &&
            a.isTypeSupported !== void 0 &&
            a.isTypeSupported(c)) ||
          s.some((u) => u.test(c))
        );
      }
    },
  nb = (e) => (e !== null && e.BlobEvent !== void 0 ? e.BlobEvent : null),
  rb = (e, t) => (n, r, s) => {
    const o = [],
      a = new WeakMap(),
      l = new WeakMap(),
      c = new n(r, s),
      u = new WeakMap();
    let f = !0;
    return (
      (c.addEventListener = ((d) => (p, y, m) => {
        let g = y;
        return (
          typeof y == "function" &&
            (p === "dataavailable"
              ? ((g = (S) => {
                  setTimeout(() => {
                    if (f && c.state === "inactive") o.push(S.data);
                    else {
                      if (o.length > 0) {
                        const h = S.data;
                        Object.defineProperty(S, "data", {
                          value: new Blob([...o, h], { type: h.type }),
                        }),
                          (o.length = 0);
                      }
                      y.call(c, S);
                    }
                  });
                }),
                a.set(y, g))
              : p === "error"
              ? ((g = (S) => {
                  if (S.error === void 0)
                    y.call(c, new ErrorEvent("error", { error: e() }));
                  else if (S.error.name === "UnknownError") {
                    const h = S.error.message;
                    y.call(c, new ErrorEvent("error", { error: e(h) }));
                  } else
                    S instanceof ErrorEvent
                      ? y.call(c, S)
                      : y.call(c, new ErrorEvent("error", { error: S.error }));
                }),
                l.set(y, g))
              : p === "stop" &&
                ((g = (S) => {
                  (f = !1), setTimeout(() => y.call(c, S));
                }),
                u.set(y, g))),
          d.call(c, p, g, m)
        );
      })(c.addEventListener)),
      (c.dispatchEvent = ((d) => (p) => {
        let y;
        setTimeout(() => {
          (y = f), (f = !1);
        });
        const m = d.call(c, p);
        return setTimeout(() => (f = y)), m;
      })(c.dispatchEvent)),
      (c.removeEventListener = ((d) => (p, y, m) => {
        let g = y;
        if (typeof y == "function") {
          if (p === "dataavailable") {
            const S = a.get(y);
            S !== void 0 && (g = S);
          } else if (p === "error") {
            const S = l.get(y);
            S !== void 0 && (g = S);
          } else if (p === "stop") {
            const S = u.get(y);
            S !== void 0 && (g = S);
          }
        }
        return d.call(c, p, g, m);
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
  sb = (e) =>
    e === null || e.MediaRecorder === void 0 ? null : e.MediaRecorder,
  tc = () => {
    try {
      return new DOMException("", "NotSupportedError");
    } catch (e) {
      return (e.code = 9), (e.name = "NotSupportedError"), e;
    }
  },
  ob =
    (e) =>
    (t, n, r, s = 2) => {
      const o = e(t, n);
      if (o === null) return o;
      const { length: a, value: l } = o;
      if (r === "master") return { content: null, length: a };
      if (n + a + l > t.byteLength) return null;
      if (r === "binary") {
        const c = (l / Float32Array.BYTES_PER_ELEMENT - 1) / s,
          u = Array.from({ length: s }, () => new Float32Array(c));
        for (let f = 0; f < c; f += 1) {
          const d = f * s + 1;
          for (let p = 0; p < s; p += 1)
            u[p][f] = t.getFloat32(
              n + a + (d + p) * Float32Array.BYTES_PER_ELEMENT,
              !0
            );
        }
        return { content: u, length: a + l };
      }
      return { content: null, length: a + l };
    },
  ib = (e) => (t, n) => {
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
  ab = (e) => (t, n) => {
    const r = e(t, n);
    if (r === null) return r;
    const s = n + Math.floor((r - 1) / 8);
    if (s + r > t.byteLength) return null;
    let a = t.getUint8(s) & ((1 << (8 - (r % 8))) - 1);
    for (let l = 1; l < r; l += 1) a = (a << 8) + t.getUint8(s + l);
    return { length: r, value: a };
  },
  lb = (e) => (t, n) => (e.set(t, n), n),
  Sm =
    Number.MAX_SAFE_INTEGER === void 0
      ? 9007199254740991
      : Number.MAX_SAFE_INTEGER,
  Zy = 536870912,
  Cm = Zy * 2,
  cb = (e, t) => (n) => {
    const r = t.get(n);
    let s = r === void 0 ? n.size : r < Cm ? r + 1 : 0;
    if (!n.has(s)) return e(n, s);
    if (n.size < Zy) {
      for (; n.has(s); ) s = Math.floor(Math.random() * Cm);
      return e(n, s);
    }
    if (n.size > Sm)
      throw new Error(
        "Congratulations, you created a collection of unique numbers which uses all available integers!"
      );
    for (; n.has(s); ) s = Math.floor(Math.random() * Sm);
    return e(n, s);
  },
  Yy = new WeakMap(),
  ub = lb(Yy),
  db = cb(ub, Yy),
  bm = Symbol.observable || "@@observable";
function fb(e) {
  return (
    Symbol.observable ||
      (typeof e == "function" && e.prototype && e.prototype[Symbol.observable]
        ? ((e.prototype[bm] = e.prototype[Symbol.observable]),
          delete e.prototype[Symbol.observable])
        : ((e[bm] = e[Symbol.observable]), delete e[Symbol.observable])),
    e
  );
}
const ta = () => {},
  jm = (e) => {
    throw e;
  };
function pb(e) {
  return e
    ? e.next && e.error && e.complete
      ? e
      : {
          complete: (e.complete ?? ta).bind(e),
          error: (e.error ?? jm).bind(e),
          next: (e.next ?? ta).bind(e),
        }
    : { complete: ta, error: jm, next: ta };
}
const hb = (e) => (t, n, r) =>
    e((s) => {
      const o = (a) => s.next(a);
      return t.addEventListener(n, o, r), () => t.removeEventListener(n, o, r);
    }),
  mb = (e, t) => {
    const n = () => {},
      r = (s) => typeof s[0] == "function";
    return (s) => {
      const o = (...a) => {
        const l = s(r(a) ? t({ next: a[0] }) : t(...a));
        return l !== void 0 ? l : n;
      };
      return (
        (o[Symbol.observable] = () => ({
          subscribe: (...a) => ({ unsubscribe: o(...a) }),
        })),
        e(o)
      );
    };
  },
  gb = mb(fb, pb),
  Qy = hb(gb);
/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var yb = (e, t) => {
  if (typeof e != "string") throw new TypeError("expected a string");
  return e
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\W/g, (n) => (/[À-ž]/.test(n) ? n : "-"))
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, (n) => (t && t.condense ? "-" : n))
    .toLowerCase();
};
const xb = fl(yb);
var Xy = { exports: {} };
(function (e) {
  var t = function (n) {
    var r,
      s,
      o = /\w+/.exec(n);
    if (o) s = o[0];
    else return "an";
    var a = s.toLowerCase(),
      l = ["honest", "hour", "hono"];
    for (r in l) if (a.indexOf(l[r]) == 0) return "an";
    if (a.length == 1) return "aedhilmnorsx".indexOf(a) >= 0 ? "an" : "a";
    if (
      s.match(
        /(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/
      )
    )
      return "an";
    var c = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
    for (r = 0; r < c.length; r++) if (a.match(c[r])) return "a";
    return s.match(/^U[NK][AIEO]/)
      ? "a"
      : s == s.toUpperCase()
      ? "aedhilmnorsx".indexOf(a[0]) >= 0
        ? "an"
        : "a"
      : "aeiou".indexOf(a[0]) >= 0 ||
        a.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)
      ? "an"
      : "a";
  };
  e.exports = t;
})(Xy);
var vb = Xy.exports;
const wb = fl(vb),
  km = (e, t) =>
    t === void 0
      ? e
      : t.reduce((n, r) => {
          if (r === "capitalize") {
            const s = n.charAt(0).toUpperCase(),
              o = n.slice(1);
            return `${s}${o}`;
          }
          return r === "dashify"
            ? xb(n)
            : r === "prependIndefiniteArticle"
            ? `${wb(n)} ${n}`
            : n;
        }, e),
  Sb = (e) => {
    const t = e.name + e.modifiers.map((n) => `\\.${n}\\(\\)`).join("");
    return new RegExp(`\\$\\{${t}}`, "g");
  },
  Nm = (e, t) => {
    const n = /\${([^.}]+)((\.[^(]+\(\))*)}/g,
      r = [];
    let s = n.exec(e);
    for (; s !== null; ) {
      const a = { modifiers: [], name: s[1] };
      if (s[3] !== void 0) {
        const l = /\.[^(]+\(\)/g;
        let c = l.exec(s[2]);
        for (; c !== null; )
          a.modifiers.push(c[0].slice(1, -2)), (c = l.exec(s[2]));
      }
      r.push(a), (s = n.exec(e));
    }
    const o = r.reduce(
      (a, l) =>
        a
          .map((c) =>
            typeof c == "string"
              ? c
                  .split(Sb(l))
                  .reduce(
                    (u, f, d) =>
                      d === 0
                        ? [f]
                        : l.name in t
                        ? [...u, km(t[l.name], l.modifiers), f]
                        : [...u, (p) => km(p[l.name], l.modifiers), f],
                    []
                  )
              : [c]
          )
          .reduce((c, u) => [...c, ...u], []),
      [e]
    );
    return (a) =>
      o
        .reduce((l, c) => (typeof c == "string" ? [...l, c] : [...l, c(a)]), [])
        .join("");
  },
  nc = (e, t = {}) => {
    const n = e.code === void 0 ? void 0 : Nm(e.code, t),
      r = e.message === void 0 ? void 0 : Nm(e.message, t);
    function s(o = {}, a) {
      const l =
          a === void 0 &&
          (o instanceof Error ||
            (o.code !== void 0 && o.code.slice(-9) === "Exception")),
        { cause: c, missingParameters: u } = l
          ? { cause: o, missingParameters: {} }
          : { cause: a, missingParameters: o },
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
  rc = {
    INTERNAL_ERROR: -32603,
    INVALID_PARAMS: -32602,
    METHOD_NOT_FOUND: -32601,
  };
nc({
  message: 'The requested method called "${method}" is not supported.',
  status: rc.METHOD_NOT_FOUND,
});
nc({
  message:
    'The handler of the method called "${method}" returned no required result.',
  status: rc.INTERNAL_ERROR,
});
nc({
  message:
    'The handler of the method called "${method}" returned an unexpected result.',
  status: rc.INTERNAL_ERROR,
});
nc({
  message:
    'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
  status: rc.INVALID_PARAMS,
});
const Cb = (e, t, n) => async (r) => {
    const s = new e([n], { type: "application/javascript; charset=utf-8" }),
      o = t.createObjectURL(s);
    try {
      await r(o);
    } finally {
      t.revokeObjectURL(o);
    }
  },
  bb =
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
  jb =
    (e) =>
    (t, n) =>
    (r, s = []) =>
      new Promise((o, a) => {
        const l = e(t);
        t.set(l, { reject: a, resolve: o }), n.postMessage({ id: l, ...r }, s);
      }),
  kb =
    (e, t, n, r) =>
    (s, o, a = {}) => {
      const l = new s(o, "recorder-audio-worklet-processor", {
          ...a,
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
  Nb = (e, t) => {
    if (!e.includes(t))
      throw new Error(
        `Expected the state to be ${e
          .map((n) => `"${n}"`)
          .join(" or ")} but it was "${t}".`
      );
  },
  Eb =
    '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();',
  Tb = Cb(Blob, URL, Eb),
  _b = kb(bb, jb(db), Qy, Nb),
  Em = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "exponentialRampToValue",
    value: e,
  }),
  Tm = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "linearRampToValue",
    value: e,
  }),
  bd = (e, t) => ({ startTime: t, type: "setValue", value: e }),
  Jy = (e, t, n) => ({
    duration: n,
    startTime: t,
    type: "setValueCurve",
    values: e,
  }),
  ex = (e, t, { startTime: n, target: r, timeConstant: s }) =>
    r + (t - r) * Math.exp((n - e) / s),
  bs = (e) => e.type === "exponentialRampToValue",
  il = (e) => e.type === "linearRampToValue",
  Qn = (e) => bs(e) || il(e),
  ep = (e) => e.type === "setValue",
  _n = (e) => e.type === "setValueCurve",
  al = (e, t, n, r) => {
    const s = e[t];
    return s === void 0
      ? r
      : Qn(s) || ep(s)
      ? s.value
      : _n(s)
      ? s.values[s.values.length - 1]
      : ex(n, al(e, t - 1, s.startTime, r), s);
  },
  _m = (e, t, n, r, s) =>
    n === void 0
      ? [r.insertTime, s]
      : Qn(n)
      ? [n.endTime, n.value]
      : ep(n)
      ? [n.startTime, n.value]
      : _n(n)
      ? [n.startTime + n.duration, n.values[n.values.length - 1]]
      : [n.startTime, al(e, t - 1, n.startTime, s)],
  jd = (e) => e.type === "cancelAndHold",
  kd = (e) => e.type === "cancelScheduledValues",
  Kn = (e) =>
    jd(e) || kd(e) ? e.cancelTime : bs(e) || il(e) ? e.endTime : e.startTime,
  Rm = (e, t, n, { endTime: r, value: s }) =>
    n === s
      ? s
      : (0 < n && 0 < s) || (n < 0 && s < 0)
      ? n * (s / n) ** ((e - t) / (r - t))
      : 0,
  Am = (e, t, n, { endTime: r, value: s }) => n + ((e - t) / (r - t)) * (s - n),
  Rb = (e, t) => {
    const n = Math.floor(t),
      r = Math.ceil(t);
    return n === r ? e[n] : (1 - (t - n)) * e[n] + (1 - (r - t)) * e[r];
  },
  Ab = (e, { duration: t, startTime: n, values: r }) => {
    const s = ((e - n) / t) * (r.length - 1);
    return Rb(r, s);
  },
  na = (e) => e.type === "setTarget";
class Mb {
  constructor(t) {
    (this._automationEvents = []),
      (this._currenTime = 0),
      (this._defaultValue = t);
  }
  [Symbol.iterator]() {
    return this._automationEvents[Symbol.iterator]();
  }
  add(t) {
    const n = Kn(t);
    if (jd(t) || kd(t)) {
      const r = this._automationEvents.findIndex((o) =>
          kd(t) && _n(o) ? o.startTime + o.duration >= n : Kn(o) >= n
        ),
        s = this._automationEvents[r];
      if (
        (r !== -1 &&
          (this._automationEvents = this._automationEvents.slice(0, r)),
        jd(t))
      ) {
        const o = this._automationEvents[this._automationEvents.length - 1];
        if (s !== void 0 && Qn(s)) {
          if (o !== void 0 && na(o))
            throw new Error("The internal list is malformed.");
          const a =
              o === void 0
                ? s.insertTime
                : _n(o)
                ? o.startTime + o.duration
                : Kn(o),
            l =
              o === void 0
                ? this._defaultValue
                : _n(o)
                ? o.values[o.values.length - 1]
                : o.value,
            c = bs(s) ? Rm(n, a, l, s) : Am(n, a, l, s),
            u = bs(s) ? Em(c, n, this._currenTime) : Tm(c, n, this._currenTime);
          this._automationEvents.push(u);
        }
        if (
          (o !== void 0 &&
            na(o) &&
            this._automationEvents.push(bd(this.getValue(n), n)),
          o !== void 0 && _n(o) && o.startTime + o.duration > n)
        ) {
          const a = n - o.startTime,
            l = (o.values.length - 1) / o.duration,
            c = Math.max(2, 1 + Math.ceil(a * l)),
            u = (a / (c - 1)) * l,
            f = o.values.slice(0, c);
          if (u < 1)
            for (let d = 1; d < c; d += 1) {
              const p = (u * d) % 1;
              f[d] = o.values[d - 1] * (1 - p) + o.values[d] * p;
            }
          this._automationEvents[this._automationEvents.length - 1] = Jy(
            f,
            o.startTime,
            a
          );
        }
      }
    } else {
      const r = this._automationEvents.findIndex((a) => Kn(a) > n),
        s =
          r === -1
            ? this._automationEvents[this._automationEvents.length - 1]
            : this._automationEvents[r - 1];
      if (s !== void 0 && _n(s) && Kn(s) + s.duration > n) return !1;
      const o = bs(t)
        ? Em(t.value, t.endTime, this._currenTime)
        : il(t)
        ? Tm(t.value, n, this._currenTime)
        : t;
      if (r === -1) this._automationEvents.push(o);
      else {
        if (_n(t) && n + t.duration > Kn(this._automationEvents[r])) return !1;
        this._automationEvents.splice(r, 0, o);
      }
    }
    return !0;
  }
  flush(t) {
    const n = this._automationEvents.findIndex((r) => Kn(r) > t);
    if (n > 1) {
      const r = this._automationEvents.slice(n - 1),
        s = r[0];
      na(s) &&
        r.unshift(
          bd(
            al(this._automationEvents, n - 2, s.startTime, this._defaultValue),
            s.startTime
          )
        ),
        (this._automationEvents = r);
    }
  }
  getValue(t) {
    if (this._automationEvents.length === 0) return this._defaultValue;
    const n = this._automationEvents.findIndex((a) => Kn(a) > t),
      r = this._automationEvents[n],
      s = (n === -1 ? this._automationEvents.length : n) - 1,
      o = this._automationEvents[s];
    if (o !== void 0 && na(o) && (r === void 0 || !Qn(r) || r.insertTime > t))
      return ex(
        t,
        al(this._automationEvents, s - 1, o.startTime, this._defaultValue),
        o
      );
    if (o !== void 0 && ep(o) && (r === void 0 || !Qn(r))) return o.value;
    if (
      o !== void 0 &&
      _n(o) &&
      (r === void 0 || !Qn(r) || o.startTime + o.duration > t)
    )
      return t < o.startTime + o.duration
        ? Ab(t, o)
        : o.values[o.values.length - 1];
    if (o !== void 0 && Qn(o) && (r === void 0 || !Qn(r))) return o.value;
    if (r !== void 0 && bs(r)) {
      const [a, l] = _m(this._automationEvents, s, o, r, this._defaultValue);
      return Rm(t, a, l, r);
    }
    if (r !== void 0 && il(r)) {
      const [a, l] = _m(this._automationEvents, s, o, r, this._defaultValue);
      return Am(t, a, l, r);
    }
    return this._defaultValue;
  }
}
const Pb = (e) => ({ cancelTime: e, type: "cancelAndHold" }),
  Lb = (e) => ({ cancelTime: e, type: "cancelScheduledValues" }),
  Ob = (e, t) => ({ endTime: t, type: "exponentialRampToValue", value: e }),
  Bb = (e, t) => ({ endTime: t, type: "linearRampToValue", value: e }),
  Ib = (e, t, n) => ({
    startTime: t,
    target: e,
    timeConstant: n,
    type: "setTarget",
  }),
  Ub = () => new DOMException("", "AbortError"),
  $b =
    (e) =>
    (t, n, [r, s, o], a) => {
      e(t[s], [n, r, o], (l) => l[0] === n && l[1] === r, a);
    },
  Fb = (e) => (t, n, r) => {
    const s = [];
    for (let o = 0; o < r.numberOfInputs; o += 1) s.push(new Set());
    e.set(t, {
      activeInputs: s,
      outputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n,
    });
  },
  Db = (e) => (t, n) => {
    e.set(t, {
      activeInputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n,
    });
  },
  Ws = new WeakSet(),
  tx = new WeakMap(),
  nx = new WeakMap(),
  rx = new WeakMap(),
  sx = new WeakMap(),
  ox = new WeakMap(),
  ix = new WeakMap(),
  Nd = new WeakMap(),
  Ed = new WeakMap(),
  Td = new WeakMap(),
  ax = {
    construct() {
      return ax;
    },
  },
  zb = (e) => {
    try {
      const t = new Proxy(e, ax);
      new t();
    } catch {
      return !1;
    }
    return !0;
  },
  Mm =
    /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
  Pm = (e, t) => {
    const n = [];
    let r = e.replace(/^[\s]+/, ""),
      s = r.match(Mm);
    for (; s !== null; ) {
      const o = s[1].slice(1, -1),
        a = s[0]
          .replace(/([\s]+)?;?$/, "")
          .replace(o, new URL(o, t).toString());
      n.push(a),
        (r = r.slice(s[0].length).replace(/^[\s]+/, "")),
        (s = r.match(Mm));
    }
    return [n.join(";"), r];
  },
  Lm = (e) => {
    if (e !== void 0 && !Array.isArray(e))
      throw new TypeError(
        "The parameterDescriptors property of given value for processorCtor is not an array."
      );
  },
  Om = (e) => {
    if (!zb(e))
      throw new TypeError(
        "The given value for processorCtor should be a constructor."
      );
    if (e.prototype === null || typeof e.prototype != "object")
      throw new TypeError(
        "The given value for processorCtor should have a prototype."
      );
  },
  Vb = (e, t, n, r, s, o, a, l, c, u, f, d, p) => {
    let y = 0;
    return (m, g, S = { credentials: "omit" }) => {
      const h = f.get(m);
      if (h !== void 0 && h.has(g)) return Promise.resolve();
      const x = u.get(m);
      if (x !== void 0) {
        const k = x.get(g);
        if (k !== void 0) return k;
      }
      const w = o(m),
        j =
          w.audioWorklet === void 0
            ? s(g)
                .then(([k, b]) => {
                  const [C, N] = Pm(k, b),
                    v = `${C};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${N}
})})(window,'_AWGS')`;
                  return n(v);
                })
                .then(() => {
                  const k = p._AWGS.pop();
                  if (k === void 0) throw new SyntaxError();
                  r(w.currentTime, w.sampleRate, () =>
                    k(
                      class {},
                      void 0,
                      (b, C) => {
                        if (b.trim() === "") throw t();
                        const N = Ed.get(w);
                        if (N !== void 0) {
                          if (N.has(b)) throw t();
                          Om(C), Lm(C.parameterDescriptors), N.set(b, C);
                        } else
                          Om(C),
                            Lm(C.parameterDescriptors),
                            Ed.set(w, new Map([[b, C]]));
                      },
                      w.sampleRate,
                      void 0,
                      void 0
                    )
                  );
                })
            : Promise.all([s(g), Promise.resolve(e(d, d))]).then(
                ([[k, b], C]) => {
                  const N = y + 1;
                  y = N;
                  const [v, R] = Pm(k, b),
                    q = `${v};((AudioWorkletProcessor,registerProcessor)=>{${R}
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
                    H = new Blob([q], {
                      type: "application/javascript; charset=utf-8",
                    }),
                    $ = URL.createObjectURL(H);
                  return w.audioWorklet
                    .addModule($, S)
                    .then(() => {
                      if (l(w)) return w;
                      const L = a(w);
                      return L.audioWorklet.addModule($, S).then(() => L);
                    })
                    .then((L) => {
                      if (c === null) throw new SyntaxError();
                      try {
                        new c(L, `__sac${N}`);
                      } catch {
                        throw new SyntaxError();
                      }
                    })
                    .finally(() => URL.revokeObjectURL($));
                }
              );
      return (
        x === void 0 ? u.set(m, new Map([[g, j]])) : x.set(g, j),
        j
          .then(() => {
            const k = f.get(m);
            k === void 0 ? f.set(m, new Set([g])) : k.add(g);
          })
          .finally(() => {
            const k = u.get(m);
            k !== void 0 && k.delete(g);
          }),
        j
      );
    };
  },
  an = (e, t) => {
    const n = e.get(t);
    if (n === void 0)
      throw new Error("A value with the given key could not be found.");
    return n;
  },
  sc = (e, t) => {
    const n = Array.from(e).filter(t);
    if (n.length > 1) throw Error("More than one element was found.");
    if (n.length === 0) throw Error("No element was found.");
    const [r] = n;
    return e.delete(r), r;
  },
  lx = (e, t, n, r) => {
    const s = an(e, t),
      o = sc(s, (a) => a[0] === n && a[1] === r);
    return s.size === 0 && e.delete(t), o;
  },
  xi = (e) => an(ix, e),
  ni = (e) => {
    if (Ws.has(e)) throw new Error("The AudioNode is already stored.");
    Ws.add(e), xi(e).forEach((t) => t(!0));
  },
  cx = (e) => "port" in e,
  oc = (e) => {
    if (!Ws.has(e)) throw new Error("The AudioNode is not stored.");
    Ws.delete(e), xi(e).forEach((t) => t(!1));
  },
  _d = (e, t) => {
    !cx(e) && t.every((n) => n.size === 0) && oc(e);
  },
  Wb = (e, t, n, r, s, o, a, l, c, u, f, d, p) => {
    const y = new WeakMap();
    return (m, g, S, h, x) => {
      const { activeInputs: w, passiveInputs: j } = o(g),
        { outputs: k } = o(m),
        b = l(m),
        C = (N) => {
          const v = c(g),
            R = c(m);
          if (N) {
            const M = lx(j, m, S, h);
            e(w, m, M, !1), !x && !d(m) && n(R, v, S, h), p(g) && ni(g);
          } else {
            const M = r(w, m, S, h);
            t(j, h, M, !1), !x && !d(m) && s(R, v, S, h);
            const I = a(g);
            if (I === 0) f(g) && _d(g, w);
            else {
              const D = y.get(g);
              D !== void 0 && clearTimeout(D),
                y.set(
                  g,
                  setTimeout(() => {
                    f(g) && _d(g, w);
                  }, I * 1e3)
                );
            }
          }
        };
      return u(k, [g, S, h], (N) => N[0] === g && N[1] === S && N[2] === h, !0)
        ? (b.add(C), f(m) ? e(w, m, [S, h, C], !0) : t(j, h, [m, S, C], !0), !0)
        : !1;
    };
  },
  Hb =
    (e) =>
    (t, n, [r, s, o], a) => {
      const l = t.get(r);
      l === void 0
        ? t.set(r, new Set([[s, n, o]]))
        : e(l, [s, n, o], (c) => c[0] === s && c[1] === n, a);
    },
  qb = (e) => (t, n) => {
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
  Gb = (e) => (t, n) => {
    e(t).add(n);
  },
  tp = (e, t) => e.context === t,
  Bm = (e) => {
    try {
      e.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return !1;
    }
    return !0;
  },
  es = () => new DOMException("", "IndexSizeError"),
  Kb = (e) => {
    e.getChannelData = ((t) => (n) => {
      try {
        return t.call(e, n);
      } catch (r) {
        throw r.code === 12 ? es() : r;
      }
    })(e.getChannelData);
  },
  Zb = { numberOfChannels: 1 },
  Yb = (e, t, n, r, s, o, a, l) => {
    let c = null;
    return class ux {
      constructor(f) {
        if (s === null)
          throw new Error(
            "Missing the native OfflineAudioContext constructor."
          );
        const {
          length: d,
          numberOfChannels: p,
          sampleRate: y,
        } = { ...Zb, ...f };
        c === null && (c = new s(1, 1, 44100));
        const m =
          r !== null && t(o, o)
            ? new r({ length: d, numberOfChannels: p, sampleRate: y })
            : c.createBuffer(p, d, y);
        if (m.numberOfChannels === 0) throw n();
        return (
          typeof m.copyFromChannel != "function"
            ? (a(m), Kb(m))
            : t(Bm, () => Bm(m)) || l(m),
          e.add(m),
          m
        );
      }
      static [Symbol.hasInstance](f) {
        return (
          (f !== null &&
            typeof f == "object" &&
            Object.getPrototypeOf(f) === ux.prototype) ||
          e.has(f)
        );
      }
    };
  },
  vi = -34028234663852886e22,
  ic = -vi,
  pr = (e) => Ws.has(e),
  Qb = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    loop: !1,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1,
  },
  Xb = (e, t, n, r, s, o, a, l) =>
    class extends e {
      constructor(u, f) {
        const d = o(u),
          p = { ...Qb, ...f },
          y = s(d, p),
          m = a(d),
          g = m ? t() : null;
        super(u, !1, y, g),
          (this._audioBufferSourceNodeRenderer = g),
          (this._isBufferNullified = !1),
          (this._isBufferSet = p.buffer !== null),
          (this._nativeAudioBufferSourceNode = y),
          (this._onended = null),
          (this._playbackRate = n(this, m, y.playbackRate, ic, vi));
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
          ni(this);
          const p = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", p),
              pr(this) && oc(this);
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
  Jb = (e, t, n, r, s) => () => {
    const o = new WeakMap();
    let a = null,
      l = null;
    const c = async (u, f) => {
      let d = n(u);
      const p = tp(d, f);
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
        (d = t(f, y)), a !== null && d.start(...a), l !== null && d.stop(l);
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
        a = u;
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
  ej = (e) => "playbackRate" in e,
  tj = (e) => "frequency" in e && "gain" in e,
  nj = (e) => "offset" in e,
  rj = (e) => !("frequency" in e) && "gain" in e,
  sj = (e) => "detune" in e && "frequency" in e && !("gain" in e),
  oj = (e) => "pan" in e,
  lt = (e) => an(tx, e),
  wi = (e) => an(rx, e),
  Rd = (e, t) => {
    const { activeInputs: n } = lt(e);
    n.forEach((s) =>
      s.forEach(([o]) => {
        t.includes(e) || Rd(o, [...t, e]);
      })
    );
    const r = ej(e)
      ? [e.playbackRate]
      : cx(e)
      ? Array.from(e.parameters.values())
      : tj(e)
      ? [e.Q, e.detune, e.frequency, e.gain]
      : nj(e)
      ? [e.offset]
      : rj(e)
      ? [e.gain]
      : sj(e)
      ? [e.detune, e.frequency]
      : oj(e)
      ? [e.pan]
      : [];
    for (const s of r) {
      const o = wi(s);
      o !== void 0 && o.activeInputs.forEach(([a]) => Rd(a, t));
    }
    pr(e) && oc(e);
  },
  ij = (e) => {
    Rd(e.destination, []);
  },
  aj = (e) =>
    e === void 0 ||
    typeof e == "number" ||
    (typeof e == "string" &&
      (e === "balanced" || e === "interactive" || e === "playback")),
  lj = (e, t, n, r, s, o, a, l) =>
    class extends e {
      constructor(u, f) {
        const d = o(u),
          p = a(d),
          y = s(d, f, p),
          m = p ? t(l) : null;
        super(u, !1, y, m),
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
  cj = (e) => {
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
  uj = (e, t, n, r, s, o, a, l) => (c, u) => {
    const f = u.listener,
      d = () => {
        const k = new Float32Array(1),
          b = t(u, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 9,
          }),
          C = a(u);
        let N = !1,
          v = [0, 0, -1, 0, 1, 0],
          R = [0, 0, 0];
        const M = () => {
            if (N) return;
            N = !0;
            const H = r(u, 256, 9, 0);
            (H.onaudioprocess = ({ inputBuffer: $ }) => {
              const L = [
                o($, k, 0),
                o($, k, 1),
                o($, k, 2),
                o($, k, 3),
                o($, k, 4),
                o($, k, 5),
              ];
              L.some((O, B) => O !== v[B]) && (f.setOrientation(...L), (v = L));
              const _ = [o($, k, 6), o($, k, 7), o($, k, 8)];
              _.some((O, B) => O !== R[B]) && (f.setPosition(..._), (R = _));
            }),
              b.connect(H);
          },
          I = (H) => ($) => {
            $ !== v[H] && ((v[H] = $), f.setOrientation(...v));
          },
          D = (H) => ($) => {
            $ !== R[H] && ((R[H] = $), f.setPosition(...R));
          },
          q = (H, $, L) => {
            const _ = n(u, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              offset: $,
            });
            _.connect(b, 0, H),
              _.start(),
              Object.defineProperty(_.offset, "defaultValue", {
                get() {
                  return $;
                },
              });
            const O = e({ context: c }, C, _.offset, ic, vi);
            return (
              l(
                O,
                "value",
                (B) => () => B.call(O),
                (B) => (z) => {
                  try {
                    B.call(O, z);
                  } catch (T) {
                    if (T.code !== 9) throw T;
                  }
                  M(), C && L(z);
                }
              ),
              (O.cancelAndHoldAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.cancelAndHoldAtTime)),
              (O.cancelScheduledValues = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.cancelScheduledValues)),
              (O.exponentialRampToValueAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.exponentialRampToValueAtTime)),
              (O.linearRampToValueAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.linearRampToValueAtTime)),
              (O.setTargetAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.setTargetAtTime)),
              (O.setValueAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.setValueAtTime)),
              (O.setValueCurveAtTime = ((B) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...z) => {
                      const T = B.apply(O, z);
                      return M(), T;
                    })(O.setValueCurveAtTime)),
              O
            );
          };
        return {
          forwardX: q(0, 0, I(0)),
          forwardY: q(1, 0, I(1)),
          forwardZ: q(2, -1, I(2)),
          positionX: q(6, 0, D(0)),
          positionY: q(7, 0, D(1)),
          positionZ: q(8, 0, D(2)),
          upX: q(3, 0, I(3)),
          upY: q(4, 1, I(4)),
          upZ: q(5, 0, I(5)),
        };
      },
      {
        forwardX: p,
        forwardY: y,
        forwardZ: m,
        positionX: g,
        positionY: S,
        positionZ: h,
        upX: x,
        upY: w,
        upZ: j,
      } = f.forwardX === void 0 ? d() : f;
    return {
      get forwardX() {
        return p;
      },
      get forwardY() {
        return y;
      },
      get forwardZ() {
        return m;
      },
      get positionX() {
        return g;
      },
      get positionY() {
        return S;
      },
      get positionZ() {
        return h;
      },
      get upX() {
        return x;
      },
      get upY() {
        return w;
      },
      get upZ() {
        return j;
      },
    };
  },
  ll = (e) => "context" in e,
  Si = (e) => ll(e[0]),
  ts = (e, t, n, r) => {
    for (const s of e)
      if (n(s)) {
        if (r) return !1;
        throw Error("The set contains at least one similar element.");
      }
    return e.add(t), !0;
  },
  Im = (e, t, [n, r], s) => {
    ts(e, [t, n, r], (o) => o[0] === t && o[1] === n, s);
  },
  Um = (e, [t, n, r], s) => {
    const o = e.get(t);
    o === void 0
      ? e.set(t, new Set([[n, r]]))
      : ts(o, [n, r], (a) => a[0] === n, s);
  },
  dx = (e) => "inputs" in e,
  Ad = (e, t, n, r) => {
    if (dx(t)) {
      const s = t.inputs[r];
      return e.connect(s, n, 0), [s, n, 0];
    }
    return e.connect(t, n, r), [t, n, r];
  },
  fx = (e, t, n) => {
    for (const r of e) if (r[0] === t && r[1] === n) return e.delete(r), r;
    return null;
  },
  dj = (e, t, n) => sc(e, (r) => r[0] === t && r[1] === n),
  px = (e, t) => {
    if (!xi(e).delete(t))
      throw new Error("Missing the expected event listener.");
  },
  hx = (e, t, n) => {
    const r = an(e, t),
      s = sc(r, (o) => o[0] === n);
    return r.size === 0 && e.delete(t), s;
  },
  Md = (e, t, n, r) => {
    dx(t) ? e.disconnect(t.inputs[r], n, 0) : e.disconnect(t, n, r);
  },
  qt = (e) => an(nx, e),
  ri = (e) => an(sx, e),
  Vr = (e) => Nd.has(e),
  Ea = (e) => !Ws.has(e),
  $m = (e, t) =>
    new Promise((n) => {
      if (t !== null) n(!0);
      else {
        const r = e.createScriptProcessor(256, 1, 1),
          s = e.createGain(),
          o = e.createBuffer(1, 2, 44100),
          a = o.getChannelData(0);
        (a[0] = 1), (a[1] = 1);
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
  tu = (e, t) => {
    const n = new Map();
    for (const r of e)
      for (const s of r) {
        const o = n.get(s);
        n.set(s, o === void 0 ? 1 : o + 1);
      }
    n.forEach((r, s) => t(s, r));
  },
  cl = (e) => "context" in e,
  fj = (e) => {
    const t = new Map();
    (e.connect = (
      (n) =>
      (r, s = 0, o = 0) => {
        const a = cl(r) ? n(r, s, o) : n(r, s),
          l = t.get(r);
        return (
          l === void 0
            ? t.set(r, [{ input: o, output: s }])
            : l.every((c) => c.input !== o || c.output !== s) &&
              l.push({ input: o, output: s }),
          a
        );
      }
    )(e.connect.bind(e))),
      (e.disconnect = ((n) => (r, s, o) => {
        if ((n.apply(e), r === void 0)) t.clear();
        else if (typeof r == "number")
          for (const [a, l] of t) {
            const c = l.filter((u) => u.output !== r);
            c.length === 0 ? t.delete(a) : t.set(a, c);
          }
        else if (t.has(r))
          if (s === void 0) t.delete(r);
          else {
            const a = t.get(r);
            if (a !== void 0) {
              const l = a.filter(
                (c) => c.output !== s && (c.input !== o || o === void 0)
              );
              l.length === 0 ? t.delete(r) : t.set(r, l);
            }
          }
        for (const [a, l] of t)
          l.forEach((c) => {
            cl(a) ? e.connect(a, c.output, c.input) : e.connect(a, c.output);
          });
      })(e.disconnect));
  },
  pj = (e, t, n, r) => {
    const { activeInputs: s, passiveInputs: o } = wi(t),
      { outputs: a } = lt(e),
      l = xi(e),
      c = (u) => {
        const f = qt(e),
          d = ri(t);
        if (u) {
          const p = hx(o, e, n);
          Im(s, e, p, !1), !r && !Vr(e) && f.connect(d, n);
        } else {
          const p = dj(s, e, n);
          Um(o, p, !1), !r && !Vr(e) && f.disconnect(d, n);
        }
      };
    return ts(a, [t, n], (u) => u[0] === t && u[1] === n, !0)
      ? (l.add(c), pr(e) ? Im(s, e, [n, c], !0) : Um(o, [e, n, c], !0), !0)
      : !1;
  },
  hj = (e, t, n, r) => {
    const { activeInputs: s, passiveInputs: o } = lt(t),
      a = fx(s[r], e, n);
    return a === null ? [lx(o, e, n, r)[2], !1] : [a[2], !0];
  },
  mj = (e, t, n) => {
    const { activeInputs: r, passiveInputs: s } = wi(t),
      o = fx(r, e, n);
    return o === null ? [hx(s, e, n)[1], !1] : [o[2], !0];
  },
  np = (e, t, n, r, s) => {
    const [o, a] = hj(e, n, r, s);
    if (
      (o !== null && (px(e, o), a && !t && !Vr(e) && Md(qt(e), qt(n), r, s)),
      pr(n))
    ) {
      const { activeInputs: l } = lt(n);
      _d(n, l);
    }
  },
  rp = (e, t, n, r) => {
    const [s, o] = mj(e, n, r);
    s !== null && (px(e, s), o && !t && !Vr(e) && qt(e).disconnect(ri(n), r));
  },
  gj = (e, t) => {
    const n = lt(e),
      r = [];
    for (const s of n.outputs)
      Si(s) ? np(e, t, ...s) : rp(e, t, ...s), r.push(s[0]);
    return n.outputs.clear(), r;
  },
  yj = (e, t, n) => {
    const r = lt(e),
      s = [];
    for (const o of r.outputs)
      o[1] === n &&
        (Si(o) ? np(e, t, ...o) : rp(e, t, ...o),
        s.push(o[0]),
        r.outputs.delete(o));
    return s;
  },
  xj = (e, t, n, r, s) => {
    const o = lt(e);
    return Array.from(o.outputs)
      .filter(
        (a) =>
          a[0] === n &&
          (r === void 0 || a[1] === r) &&
          (s === void 0 || a[2] === s)
      )
      .map(
        (a) => (
          Si(a) ? np(e, t, ...a) : rp(e, t, ...a), o.outputs.delete(a), a[0]
        )
      );
  },
  vj = (e, t, n, r, s, o, a, l, c, u, f, d, p, y, m, g) =>
    class extends u {
      constructor(h, x, w, j) {
        super(w), (this._context = h), (this._nativeAudioNode = w);
        const k = f(h);
        d(k) && n($m, () => $m(k, g)) !== !0 && fj(w),
          nx.set(this, w),
          ix.set(this, new Set()),
          h.state !== "closed" && x && ni(this),
          e(this, j, w);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(h) {
        this._nativeAudioNode.channelCount = h;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(h) {
        this._nativeAudioNode.channelCountMode = h;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(h) {
        this._nativeAudioNode.channelInterpretation = h;
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
      connect(h, x = 0, w = 0) {
        if (x < 0 || x >= this._nativeAudioNode.numberOfOutputs) throw s();
        const j = f(this._context),
          k = m(j);
        if (p(h) || y(h)) throw o();
        if (ll(h)) {
          const N = qt(h);
          try {
            const R = Ad(this._nativeAudioNode, N, x, w),
              M = Ea(this);
            (k || M) && this._nativeAudioNode.disconnect(...R),
              this.context.state !== "closed" && !M && Ea(h) && ni(h);
          } catch (R) {
            throw R.code === 12 ? o() : R;
          }
          if (t(this, h, x, w, k)) {
            const R = c([this], h);
            tu(R, r(k));
          }
          return h;
        }
        const b = ri(h);
        if (b.name === "playbackRate" && b.maxValue === 1024) throw a();
        try {
          this._nativeAudioNode.connect(b, x),
            (k || Ea(this)) && this._nativeAudioNode.disconnect(b, x);
        } catch (N) {
          throw N.code === 12 ? o() : N;
        }
        if (pj(this, h, x, k)) {
          const N = c([this], h);
          tu(N, r(k));
        }
      }
      disconnect(h, x, w) {
        let j;
        const k = f(this._context),
          b = m(k);
        if (h === void 0) j = gj(this, b);
        else if (typeof h == "number") {
          if (h < 0 || h >= this.numberOfOutputs) throw s();
          j = yj(this, b, h);
        } else {
          if (
            (x !== void 0 && (x < 0 || x >= this.numberOfOutputs)) ||
            (ll(h) && w !== void 0 && (w < 0 || w >= h.numberOfInputs))
          )
            throw s();
          if (((j = xj(this, b, h, x, w)), j.length === 0)) throw o();
        }
        for (const C of j) {
          const N = c([this], C);
          tu(N, l);
        }
      }
    },
  wj =
    (e, t, n, r, s, o, a, l, c, u, f, d, p) =>
    (y, m, g, S = null, h = null) => {
      const x = g.value,
        w = new Mb(x),
        j = m ? r(w) : null,
        k = {
          get defaultValue() {
            return x;
          },
          get maxValue() {
            return S === null ? g.maxValue : S;
          },
          get minValue() {
            return h === null ? g.minValue : h;
          },
          get value() {
            return g.value;
          },
          set value(b) {
            (g.value = b), k.setValueAtTime(b, y.context.currentTime);
          },
          cancelAndHoldAtTime(b) {
            if (typeof g.cancelAndHoldAtTime == "function")
              j === null && w.flush(y.context.currentTime),
                w.add(s(b)),
                g.cancelAndHoldAtTime(b);
            else {
              const C = Array.from(w).pop();
              j === null && w.flush(y.context.currentTime), w.add(s(b));
              const N = Array.from(w).pop();
              g.cancelScheduledValues(b),
                C !== N &&
                  N !== void 0 &&
                  (N.type === "exponentialRampToValue"
                    ? g.exponentialRampToValueAtTime(N.value, N.endTime)
                    : N.type === "linearRampToValue"
                    ? g.linearRampToValueAtTime(N.value, N.endTime)
                    : N.type === "setValue"
                    ? g.setValueAtTime(N.value, N.startTime)
                    : N.type === "setValueCurve" &&
                      g.setValueCurveAtTime(N.values, N.startTime, N.duration));
            }
            return k;
          },
          cancelScheduledValues(b) {
            return (
              j === null && w.flush(y.context.currentTime),
              w.add(o(b)),
              g.cancelScheduledValues(b),
              k
            );
          },
          exponentialRampToValueAtTime(b, C) {
            if (b === 0) throw new RangeError();
            if (!Number.isFinite(C) || C < 0) throw new RangeError();
            const N = y.context.currentTime;
            return (
              j === null && w.flush(N),
              Array.from(w).length === 0 &&
                (w.add(u(x, N)), g.setValueAtTime(x, N)),
              w.add(a(b, C)),
              g.exponentialRampToValueAtTime(b, C),
              k
            );
          },
          linearRampToValueAtTime(b, C) {
            const N = y.context.currentTime;
            return (
              j === null && w.flush(N),
              Array.from(w).length === 0 &&
                (w.add(u(x, N)), g.setValueAtTime(x, N)),
              w.add(l(b, C)),
              g.linearRampToValueAtTime(b, C),
              k
            );
          },
          setTargetAtTime(b, C, N) {
            return (
              j === null && w.flush(y.context.currentTime),
              w.add(c(b, C, N)),
              g.setTargetAtTime(b, C, N),
              k
            );
          },
          setValueAtTime(b, C) {
            return (
              j === null && w.flush(y.context.currentTime),
              w.add(u(b, C)),
              g.setValueAtTime(b, C),
              k
            );
          },
          setValueCurveAtTime(b, C, N) {
            const v = b instanceof Float32Array ? b : new Float32Array(b);
            if (d !== null && d.name === "webkitAudioContext") {
              const R = C + N,
                M = y.context.sampleRate,
                I = Math.ceil(C * M),
                D = Math.floor(R * M),
                q = D - I,
                H = new Float32Array(q);
              for (let L = 0; L < q; L += 1) {
                const _ = ((v.length - 1) / N) * ((I + L) / M - C),
                  O = Math.floor(_),
                  B = Math.ceil(_);
                H[L] =
                  O === B ? v[O] : (1 - (_ - O)) * v[O] + (1 - (B - _)) * v[B];
              }
              j === null && w.flush(y.context.currentTime),
                w.add(f(H, C, N)),
                g.setValueCurveAtTime(H, C, N);
              const $ = D / M;
              $ < R && p(k, H[H.length - 1], $), p(k, v[v.length - 1], R);
            } else
              j === null && w.flush(y.context.currentTime),
                w.add(f(v, C, N)),
                g.setValueCurveAtTime(v, C, N);
            return k;
          },
        };
      return n.set(k, g), t.set(k, y), e(k, j), k;
    },
  Sj = (e) => ({
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
class mx {
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
const Cj = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {},
  },
  bj = (e, t, n, r, s, o, a, l, c, u, f, d, p, y) =>
    class extends t {
      constructor(g, S, h) {
        var x;
        const w = l(g),
          j = c(w),
          k = f({ ...Cj, ...h });
        p(k);
        const b = Ed.get(w),
          C = b == null ? void 0 : b.get(S),
          N =
            j || w.state !== "closed"
              ? w
              : (x = a(w)) !== null && x !== void 0
              ? x
              : w,
          v = s(N, j ? null : g.baseLatency, u, S, C, k),
          R = j ? r(S, k, C) : null;
        super(g, !0, v, R);
        const M = [];
        v.parameters.forEach((D, q) => {
          const H = n(this, j, D);
          M.push([q, H]);
        }),
          (this._nativeAudioWorkletNode = v),
          (this._onprocessorerror = null),
          (this._parameters = new mx(M)),
          j && e(w, this);
        const { activeInputs: I } = o(this);
        d(v, I);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(g) {
        const S = typeof g == "function" ? y(this, g) : null;
        this._nativeAudioWorkletNode.onprocessorerror = S;
        const h = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = h !== null && h === S ? g : h;
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
function ul(e, t, n, r, s) {
  if (typeof e.copyFromChannel == "function")
    t[n].byteLength === 0 && (t[n] = new Float32Array(128)),
      e.copyFromChannel(t[n], r, s);
  else {
    const o = e.getChannelData(r);
    if (t[n].byteLength === 0) t[n] = o.slice(s, s + 128);
    else {
      const a = new Float32Array(
        o.buffer,
        s * Float32Array.BYTES_PER_ELEMENT,
        128
      );
      t[n].set(a);
    }
  }
}
const gx = (e, t, n, r, s) => {
    typeof e.copyToChannel == "function"
      ? t[n].byteLength !== 0 && e.copyToChannel(t[n], r, s)
      : t[n].byteLength !== 0 && e.getChannelData(r).set(t[n], s);
  },
  dl = (e, t) => {
    const n = [];
    for (let r = 0; r < e; r += 1) {
      const s = [],
        o = typeof t == "number" ? t : t[r];
      for (let a = 0; a < o; a += 1) s.push(new Float32Array(128));
      n.push(s);
    }
    return n;
  },
  jj = (e, t) => {
    const n = an(Td, e),
      r = qt(t);
    return an(n, r);
  },
  kj = async (e, t, n, r, s, o, a) => {
    const l = t === null ? Math.ceil(e.context.length / 128) * 128 : t.length,
      c = r.channelCount * r.numberOfInputs,
      u = s.reduce((S, h) => S + h, 0),
      f = u === 0 ? null : n.createBuffer(u, l, n.sampleRate);
    if (o === void 0) throw new Error("Missing the processor constructor.");
    const d = lt(e),
      p = await jj(n, e),
      y = dl(r.numberOfInputs, r.channelCount),
      m = dl(r.numberOfOutputs, s),
      g = Array.from(e.parameters.keys()).reduce(
        (S, h) => ({ ...S, [h]: new Float32Array(128) }),
        {}
      );
    for (let S = 0; S < l; S += 128) {
      if (r.numberOfInputs > 0 && t !== null)
        for (let h = 0; h < r.numberOfInputs; h += 1)
          for (let x = 0; x < r.channelCount; x += 1) ul(t, y[h], x, x, S);
      o.parameterDescriptors !== void 0 &&
        t !== null &&
        o.parameterDescriptors.forEach(({ name: h }, x) => {
          ul(t, g, h, c + x, S);
        });
      for (let h = 0; h < r.numberOfInputs; h += 1)
        for (let x = 0; x < s[h]; x += 1)
          m[h][x].byteLength === 0 && (m[h][x] = new Float32Array(128));
      try {
        const h = y.map((w, j) => (d.activeInputs[j].size === 0 ? [] : w)),
          x = a(S / n.sampleRate, n.sampleRate, () => p.process(h, m, g));
        if (f !== null)
          for (let w = 0, j = 0; w < r.numberOfOutputs; w += 1) {
            for (let k = 0; k < s[w]; k += 1) gx(f, m[w], k, j + k, S);
            j += s[w];
          }
        if (!x) break;
      } catch (h) {
        e.dispatchEvent(
          new ErrorEvent("processorerror", {
            colno: h.colno,
            filename: h.filename,
            lineno: h.lineno,
            message: h.message,
          })
        );
        break;
      }
    }
    return f;
  },
  Nj = (e, t, n, r, s, o, a, l, c, u, f, d, p, y, m, g) => (S, h, x) => {
    const w = new WeakMap();
    let j = null;
    const k = async (b, C) => {
      let N = f(b),
        v = null;
      const R = tp(N, C),
        M = Array.isArray(h.outputChannelCount)
          ? h.outputChannelCount
          : Array.from(h.outputChannelCount);
      if (d === null) {
        const I = M.reduce(($, L) => $ + L, 0),
          D = s(C, {
            channelCount: Math.max(1, I),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, I),
          }),
          q = [];
        for (let $ = 0; $ < b.numberOfOutputs; $ += 1)
          q.push(
            r(C, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: M[$],
            })
          );
        const H = a(C, {
          channelCount: h.channelCount,
          channelCountMode: h.channelCountMode,
          channelInterpretation: h.channelInterpretation,
          gain: 1,
        });
        (H.connect = t.bind(null, q)),
          (H.disconnect = c.bind(null, q)),
          (v = [D, q, H]);
      } else R || (N = new d(C, S));
      if ((w.set(C, v === null ? N : v[2]), v !== null)) {
        if (j === null) {
          if (x === void 0)
            throw new Error("Missing the processor constructor.");
          if (p === null)
            throw new Error(
              "Missing the native OfflineAudioContext constructor."
            );
          const L = b.channelCount * b.numberOfInputs,
            _ =
              x.parameterDescriptors === void 0
                ? 0
                : x.parameterDescriptors.length,
            O = L + _;
          j = kj(
            b,
            O === 0
              ? null
              : await (async () => {
                  const z = new p(
                      O,
                      Math.ceil(b.context.length / 128) * 128,
                      C.sampleRate
                    ),
                    T = [],
                    Z = [];
                  for (let J = 0; J < h.numberOfInputs; J += 1)
                    T.push(
                      a(z, {
                        channelCount: h.channelCount,
                        channelCountMode: h.channelCountMode,
                        channelInterpretation: h.channelInterpretation,
                        gain: 1,
                      })
                    ),
                      Z.push(
                        s(z, {
                          channelCount: h.channelCount,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          numberOfOutputs: h.channelCount,
                        })
                      );
                  const He = await Promise.all(
                      Array.from(b.parameters.values()).map(async (J) => {
                        const fe = o(z, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          offset: J.value,
                        });
                        return await y(z, J, fe.offset), fe;
                      })
                    ),
                    Ue = r(z, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "speakers",
                      numberOfInputs: Math.max(1, L + _),
                    });
                  for (let J = 0; J < h.numberOfInputs; J += 1) {
                    T[J].connect(Z[J]);
                    for (let fe = 0; fe < h.channelCount; fe += 1)
                      Z[J].connect(Ue, fe, J * h.channelCount + fe);
                  }
                  for (const [J, fe] of He.entries())
                    fe.connect(Ue, 0, L + J), fe.start(0);
                  return (
                    Ue.connect(z.destination),
                    await Promise.all(T.map((J) => m(b, z, J))),
                    g(z)
                  );
                })(),
            C,
            h,
            M,
            x,
            u
          );
        }
        const I = await j,
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
          [q, H, $] = v;
        I !== null && ((D.buffer = I), D.start(0)), D.connect(q);
        for (let L = 0, _ = 0; L < b.numberOfOutputs; L += 1) {
          const O = H[L];
          for (let B = 0; B < M[L]; B += 1) q.connect(O, _ + B, B);
          _ += M[L];
        }
        return $;
      }
      if (R)
        for (const [I, D] of b.parameters.entries())
          await e(C, D, N.parameters.get(I));
      else
        for (const [I, D] of b.parameters.entries())
          await y(C, D, N.parameters.get(I));
      return await m(b, C, N), N;
    };
    return {
      render(b, C) {
        l(C, b);
        const N = w.get(C);
        return N !== void 0 ? Promise.resolve(N) : k(b, C);
      },
    };
  },
  Ej = (e, t) => (n, r) => {
    const s = t.get(n);
    if (s !== void 0) return s;
    const o = e.get(n);
    if (o !== void 0) return o;
    try {
      const a = r();
      return a instanceof Promise
        ? (e.set(n, a),
          a.catch(() => !1).then((l) => (e.delete(n), t.set(n, l), l)))
        : (t.set(n, a), a);
    } catch {
      return t.set(n, !1), !1;
    }
  },
  Tj = (e) => (t, n, r) => e(n, t, r),
  _j =
    (e) =>
    (t, n, r = 0, s = 0) => {
      const o = t[r];
      if (o === void 0) throw e();
      return cl(n) ? o.connect(n, 0, s) : o.connect(n, 0);
    },
  Rj = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1,
  },
  Aj = (e, t, n, r, s, o, a) =>
    class extends e {
      constructor(c, u) {
        const f = s(c),
          d = { ...Rj, ...u },
          p = r(f, d),
          y = o(f),
          m = y ? n() : null;
        super(c, !1, p, m),
          (this._constantSourceNodeRenderer = m),
          (this._nativeConstantSourceNode = p),
          (this._offset = t(this, y, p.offset, ic, vi)),
          (this._onended = null);
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(c) {
        const u = typeof c == "function" ? a(this, c) : null;
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
          ni(this);
          const u = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", u),
              pr(this) && oc(this);
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
  Mj = (e, t, n, r, s) => () => {
    const o = new WeakMap();
    let a = null,
      l = null;
    const c = async (u, f) => {
      let d = n(u);
      const p = tp(d, f);
      if (!p) {
        const y = {
          channelCount: d.channelCount,
          channelCountMode: d.channelCountMode,
          channelInterpretation: d.channelInterpretation,
          offset: d.offset.value,
        };
        (d = t(f, y)), a !== null && d.start(a), l !== null && d.stop(l);
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
        a = u;
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
  Pj = (e) => (t) => ((e[0] = t), e[0]),
  Lj = (e, t, n, r, s, o, a, l) => (c, u) => {
    const f = t.get(c);
    if (f === void 0) throw new Error("Missing the expected cycle count.");
    const d = o(c.context),
      p = l(d);
    if (f === u) {
      if ((t.delete(c), !p && a(c))) {
        const y = r(c),
          { outputs: m } = n(c);
        for (const g of m)
          if (Si(g)) {
            const S = r(g[0]);
            e(y, S, g[1], g[2]);
          } else {
            const S = s(g[0]);
            y.connect(S, g[1]);
          }
      }
    } else t.set(c, f - u);
  },
  Oj = (e) => (t, n, r, s) => e(t[s], (o) => o[0] === n && o[1] === r),
  Bj = (e) => (t, n) => {
    e(t).delete(n);
  },
  Ij = (e) => "delayTime" in e,
  Uj = (e, t, n) =>
    function r(s, o) {
      const a = ll(o) ? o : n(e, o);
      if (Ij(a)) return [];
      if (s[0] === a) return [s];
      if (s.includes(a)) return [];
      const { outputs: l } = t(a);
      return Array.from(l)
        .map((c) => r([...s, a], c[0]))
        .reduce((c, u) => c.concat(u), []);
    },
  ra = (e, t, n) => {
    const r = t[n];
    if (r === void 0) throw e();
    return r;
  },
  $j =
    (e) =>
    (t, n = void 0, r = void 0, s = 0) =>
      n === void 0
        ? t.forEach((o) => o.disconnect())
        : typeof n == "number"
        ? ra(e, t, n).disconnect()
        : cl(n)
        ? r === void 0
          ? t.forEach((o) => o.disconnect(n))
          : s === void 0
          ? ra(e, t, r).disconnect(n, 0)
          : ra(e, t, r).disconnect(n, 0, s)
        : r === void 0
        ? t.forEach((o) => o.disconnect(n))
        : ra(e, t, r).disconnect(n, 0),
  Fj = (e) => (t) =>
    new Promise((n, r) => {
      if (e === null) {
        r(new SyntaxError());
        return;
      }
      const s = e.document.head;
      if (s === null) r(new SyntaxError());
      else {
        const o = e.document.createElement("script"),
          a = new Blob([t], { type: "application/javascript" }),
          l = URL.createObjectURL(a),
          c = e.onerror,
          u = () => {
            (e.onerror = c), URL.revokeObjectURL(l);
          };
        (e.onerror = (f, d, p, y, m) => {
          if (d === l || (d === e.location.href && p === 1 && y === 1))
            return u(), r(m), !1;
          if (c !== null) return c(f, d, p, y, m);
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
  Dj = (e) =>
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
  zj = (e) => (t, n, r) => {
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
  Vj = (e) => async (t) => {
    try {
      const n = await fetch(t);
      if (n.ok) return [await n.text(), n.url];
    } catch {}
    throw e();
  },
  Wj = (e, t) => (n) => t(e, n),
  Hj = (e) => (t) => {
    const n = e(t);
    if (n.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioNode in the audio graph."
      );
    return n.renderer;
  },
  qj = (e) => (t) => {
    var n;
    return (n = e.get(t)) !== null && n !== void 0 ? n : 0;
  },
  Gj = (e) => (t) => {
    const n = e(t);
    if (n.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioParam in the audio graph."
      );
    return n.renderer;
  },
  Kj = (e) => (t) => e.get(t),
  sn = () => new DOMException("", "InvalidStateError"),
  Zj = (e) => (t) => {
    const n = e.get(t);
    if (n === void 0) throw sn();
    return n;
  },
  Yj = (e, t) => (n) => {
    let r = e.get(n);
    if (r !== void 0) return r;
    if (t === null)
      throw new Error("Missing the native OfflineAudioContext constructor.");
    return (r = new t(1, 1, 44100)), e.set(n, r), r;
  },
  Qj = (e) => (t) => {
    const n = e.get(t);
    if (n === void 0)
      throw new Error("The context has no set of AudioWorkletNodes.");
    return n;
  },
  Xj = () => new DOMException("", "InvalidAccessError"),
  Jj = (e, t, n, r, s, o) => (a) => (l, c) => {
    const u = e.get(l);
    if (u === void 0) {
      if (!a && o(l)) {
        const f = r(l),
          { outputs: d } = n(l);
        for (const p of d)
          if (Si(p)) {
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
  ek = (e) => (t) => e !== null && t instanceof e,
  tk = (e) => (t) =>
    e !== null && typeof e.AudioNode == "function" && t instanceof e.AudioNode,
  nk = (e) => (t) =>
    e !== null &&
    typeof e.AudioParam == "function" &&
    t instanceof e.AudioParam,
  rk = (e) => (t) => e !== null && t instanceof e,
  sk = (e) => e !== null && e.isSecureContext,
  ok = (e, t, n, r) =>
    class extends e {
      constructor(o, a) {
        const l = n(o),
          c = t(l, a);
        if (r(l)) throw new TypeError();
        super(o, !0, c, null), (this._nativeMediaStreamAudioSourceNode = c);
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    },
  ik = (e, t, n, r, s) =>
    class extends r {
      constructor(a = {}) {
        if (s === null)
          throw new Error("Missing the native AudioContext constructor.");
        let l;
        try {
          l = new s(a);
        } catch (f) {
          throw f.code === 12 && f.message === "sampleRate is not in range"
            ? t()
            : f;
        }
        if (l === null) throw n();
        if (!aj(a.latencyHint))
          throw new TypeError(
            `The provided value '${a.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        if (a.sampleRate !== void 0 && l.sampleRate !== a.sampleRate) throw t();
        super(l, 2);
        const { latencyHint: c } = a,
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
                ij(this);
            }));
      }
      resume() {
        return this._state === "suspended"
          ? new Promise((a, l) => {
              const c = () => {
                this._nativeAudioContext.removeEventListener("statechange", c),
                  this._nativeAudioContext.state === "running"
                    ? a()
                    : this.resume().then(a, l);
              };
              this._nativeAudioContext.addEventListener("statechange", c);
            })
          : this._nativeAudioContext.resume().catch((a) => {
              throw a === void 0 || a.code === 15 ? e() : a;
            });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((a) => {
          throw a === void 0 ? e() : a;
        });
      }
    },
  ak = (e, t, n, r, s, o) =>
    class extends n {
      constructor(l, c) {
        super(l),
          (this._nativeContext = l),
          ox.set(this, l),
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
  Fm = (e) => {
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
  lk = (e, t) => (n, r, s) => {
    const o = new Set();
    return (
      (n.connect = (
        (a) =>
        (l, c = 0, u = 0) => {
          const f = o.size === 0;
          if (t(l))
            return (
              a.call(n, l, c, u),
              e(
                o,
                [l, c, u],
                (d) => d[0] === l && d[1] === c && d[2] === u,
                !0
              ),
              f && r(),
              l
            );
          a.call(n, l, c),
            e(o, [l, c], (d) => d[0] === l && d[1] === c, !0),
            f && r();
        }
      )(n.connect)),
      (n.disconnect = ((a) => (l, c, u) => {
        const f = o.size > 0;
        if (l === void 0) a.apply(n), o.clear();
        else if (typeof l == "number") {
          a.call(n, l);
          for (const p of o) p[1] === l && o.delete(p);
        } else {
          t(l) ? a.call(n, l, c, u) : a.call(n, l, c);
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
  Ar = (e, t, n) => {
    const r = t[n];
    r !== void 0 && r !== e[n] && (e[n] = r);
  },
  Ci = (e, t) => {
    Ar(e, t, "channelCount"),
      Ar(e, t, "channelCountMode"),
      Ar(e, t, "channelInterpretation");
  },
  ck = (e) =>
    e === null ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null,
  sp = (e, t, n) => {
    const r = t[n];
    r !== void 0 && r !== e[n].value && (e[n].value = r);
  },
  uk = (e) => {
    e.start = ((t) => {
      let n = !1;
      return (r = 0, s = 0, o) => {
        if (n) throw sn();
        t.call(e, r, s, o), (n = !0);
      };
    })(e.start);
  },
  yx = (e) => {
    e.start = (
      (t) =>
      (n = 0, r = 0, s) => {
        if ((typeof s == "number" && s < 0) || r < 0 || n < 0)
          throw new RangeError("The parameters can't be negative.");
        t.call(e, n, r, s);
      }
    )(e.start);
  },
  xx = (e) => {
    e.stop = (
      (t) =>
      (n = 0) => {
        if (n < 0) throw new RangeError("The parameter can't be negative.");
        t.call(e, n);
      }
    )(e.stop);
  },
  dk = (e, t, n, r, s, o, a, l, c, u, f) => (d, p) => {
    const y = d.createBufferSource();
    return (
      Ci(y, p),
      sp(y, p, "playbackRate"),
      Ar(y, p, "buffer"),
      Ar(y, p, "loop"),
      Ar(y, p, "loopEnd"),
      Ar(y, p, "loopStart"),
      t(n, () => n(d)) || uk(y),
      t(r, () => r(d)) || c(y),
      t(s, () => s(d)) || u(y, d),
      t(o, () => o(d)) || yx(y),
      t(a, () => a(d)) || f(y, d),
      t(l, () => l(d)) || xx(y),
      e(d, y),
      y
    );
  },
  fk = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("AudioContext")
      ? e.AudioContext
      : e.hasOwnProperty("webkitAudioContext")
      ? e.webkitAudioContext
      : null,
  pk = (e, t) => (n, r, s) => {
    const o = n.destination;
    if (o.channelCount !== r)
      try {
        o.channelCount = r;
      } catch {}
    s && o.channelCountMode !== "explicit" && (o.channelCountMode = "explicit"),
      o.maxChannelCount === 0 &&
        Object.defineProperty(o, "maxChannelCount", { value: r });
    const a = e(n, {
      channelCount: r,
      channelCountMode: o.channelCountMode,
      channelInterpretation: o.channelInterpretation,
      gain: 1,
    });
    return (
      t(
        a,
        "channelCount",
        (l) => () => l.call(a),
        (l) => (c) => {
          l.call(a, c);
          try {
            o.channelCount = c;
          } catch (u) {
            if (c > o.maxChannelCount) throw u;
          }
        }
      ),
      t(
        a,
        "channelCountMode",
        (l) => () => l.call(a),
        (l) => (c) => {
          l.call(a, c), (o.channelCountMode = c);
        }
      ),
      t(
        a,
        "channelInterpretation",
        (l) => () => l.call(a),
        (l) => (c) => {
          l.call(a, c), (o.channelInterpretation = c);
        }
      ),
      Object.defineProperty(a, "maxChannelCount", {
        get: () => o.maxChannelCount,
      }),
      a.connect(o),
      a
    );
  },
  hk = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("AudioWorkletNode")
      ? e.AudioWorkletNode
      : null,
  mk = (e) => {
    const { port1: t } = new MessageChannel();
    try {
      t.postMessage(e);
    } finally {
      t.close();
    }
  },
  gk = (e, t, n, r, s) => (o, a, l, c, u, f) => {
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
              set: (m) => {
                typeof y == "function" &&
                  d.removeEventListener("processorerror", y),
                  (y = typeof m == "function" ? m : null),
                  typeof y == "function" &&
                    d.addEventListener("processorerror", y);
              },
            },
          }),
          (d.addEventListener = (
            (m) =>
            (...g) => {
              if (g[0] === "processorerror") {
                const S =
                  typeof g[1] == "function"
                    ? g[1]
                    : typeof g[1] == "object" &&
                      g[1] !== null &&
                      typeof g[1].handleEvent == "function"
                    ? g[1].handleEvent
                    : null;
                if (S !== null) {
                  const h = p.get(g[1]);
                  h !== void 0
                    ? (g[1] = h)
                    : ((g[1] = (x) => {
                        x.type === "error"
                          ? (Object.defineProperties(x, {
                              type: { value: "processorerror" },
                            }),
                            S(x))
                          : S(new ErrorEvent(g[0], { ...x }));
                      }),
                      p.set(S, g[1]));
                }
              }
              return m.call(d, "error", g[1], g[2]), m.call(d, ...g);
            }
          )(d.addEventListener)),
          (d.removeEventListener = (
            (m) =>
            (...g) => {
              if (g[0] === "processorerror") {
                const S = p.get(g[1]);
                S !== void 0 && (p.delete(g[1]), (g[1] = S));
              }
              return (
                m.call(d, "error", g[1], g[2]), m.call(d, g[0], g[1], g[2])
              );
            }
          )(d.removeEventListener)),
          f.numberOfOutputs !== 0)
        ) {
          const m = n(o, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          return (
            d.connect(m).connect(o.destination),
            s(
              d,
              () => m.disconnect(),
              () => m.connect(o.destination)
            )
          );
        }
        return d;
      } catch (d) {
        throw d.code === 11 ? r() : d;
      }
    if (u === void 0) throw r();
    return mk(f), t(o, a, u, f);
  },
  yk = (e, t) =>
    e === null
      ? 512
      : Math.max(
          512,
          Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t))))
        ),
  xk = (e) =>
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
  vk = async (e, t) => {
    const n = await xk(t);
    return new e(n);
  },
  wk = (e, t, n, r) => {
    let s = Td.get(e);
    s === void 0 && ((s = new WeakMap()), Td.set(e, s));
    const o = vk(n, r);
    return s.set(t, o), o;
  },
  Sk = (e, t, n, r, s, o, a, l, c, u, f, d, p) => (y, m, g, S) => {
    if (S.numberOfInputs === 0 && S.numberOfOutputs === 0) throw c();
    const h = Array.isArray(S.outputChannelCount)
      ? S.outputChannelCount
      : Array.from(S.outputChannelCount);
    if (h.some((F) => F < 1)) throw c();
    if (h.length !== S.numberOfOutputs) throw t();
    if (S.channelCountMode !== "explicit") throw c();
    const x = S.channelCount * S.numberOfInputs,
      w = h.reduce((F, K) => F + K, 0),
      j = g.parameterDescriptors === void 0 ? 0 : g.parameterDescriptors.length;
    if (x + j > 6 || w > 6) throw c();
    const k = new MessageChannel(),
      b = [],
      C = [];
    for (let F = 0; F < S.numberOfInputs; F += 1)
      b.push(
        a(y, {
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
    if (g.parameterDescriptors !== void 0)
      for (const {
        defaultValue: F,
        maxValue: K,
        minValue: Ce,
        name: pe,
      } of g.parameterDescriptors) {
        const te = o(y, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          offset:
            S.parameterData[pe] !== void 0
              ? S.parameterData[pe]
              : F === void 0
              ? 0
              : F,
        });
        Object.defineProperties(te.offset, {
          defaultValue: { get: () => (F === void 0 ? 0 : F) },
          maxValue: { get: () => (K === void 0 ? ic : K) },
          minValue: { get: () => (Ce === void 0 ? vi : Ce) },
        }),
          N.push(te);
      }
    const v = r(y, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, x + j),
      }),
      R = yk(m, y.sampleRate),
      M = l(y, R, x + j, Math.max(1, w)),
      I = s(y, {
        channelCount: Math.max(1, w),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, w),
      }),
      D = [];
    for (let F = 0; F < S.numberOfOutputs; F += 1)
      D.push(
        r(y, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: h[F],
        })
      );
    for (let F = 0; F < S.numberOfInputs; F += 1) {
      b[F].connect(C[F]);
      for (let K = 0; K < S.channelCount; K += 1)
        C[F].connect(v, K, F * S.channelCount + K);
    }
    const q = new mx(
      g.parameterDescriptors === void 0
        ? []
        : g.parameterDescriptors.map(({ name: F }, K) => {
            const Ce = N[K];
            return Ce.connect(v, 0, x + K), Ce.start(0), [F, Ce.offset];
          })
    );
    v.connect(M);
    let H = S.channelInterpretation,
      $ = null;
    const L = S.numberOfOutputs === 0 ? [M] : D,
      _ = {
        get bufferSize() {
          return R;
        },
        get channelCount() {
          return S.channelCount;
        },
        set channelCount(F) {
          throw n();
        },
        get channelCountMode() {
          return S.channelCountMode;
        },
        set channelCountMode(F) {
          throw n();
        },
        get channelInterpretation() {
          return H;
        },
        set channelInterpretation(F) {
          for (const K of b) K.channelInterpretation = F;
          H = F;
        },
        get context() {
          return M.context;
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
          return $;
        },
        set onprocessorerror(F) {
          typeof $ == "function" && _.removeEventListener("processorerror", $),
            ($ = typeof F == "function" ? F : null),
            typeof $ == "function" && _.addEventListener("processorerror", $);
        },
        get parameters() {
          return q;
        },
        get port() {
          return k.port2;
        },
        addEventListener(...F) {
          return M.addEventListener(F[0], F[1], F[2]);
        },
        connect: e.bind(null, L),
        disconnect: u.bind(null, L),
        dispatchEvent(...F) {
          return M.dispatchEvent(F[0]);
        },
        removeEventListener(...F) {
          return M.removeEventListener(F[0], F[1], F[2]);
        },
      },
      O = new Map();
    (k.port1.addEventListener = (
      (F) =>
      (...K) => {
        if (K[0] === "message") {
          const Ce =
            typeof K[1] == "function"
              ? K[1]
              : typeof K[1] == "object" &&
                K[1] !== null &&
                typeof K[1].handleEvent == "function"
              ? K[1].handleEvent
              : null;
          if (Ce !== null) {
            const pe = O.get(K[1]);
            pe !== void 0
              ? (K[1] = pe)
              : ((K[1] = (te) => {
                  f(y.currentTime, y.sampleRate, () => Ce(te));
                }),
                O.set(Ce, K[1]));
          }
        }
        return F.call(k.port1, K[0], K[1], K[2]);
      }
    )(k.port1.addEventListener)),
      (k.port1.removeEventListener = (
        (F) =>
        (...K) => {
          if (K[0] === "message") {
            const Ce = O.get(K[1]);
            Ce !== void 0 && (O.delete(K[1]), (K[1] = Ce));
          }
          return F.call(k.port1, K[0], K[1], K[2]);
        }
      )(k.port1.removeEventListener));
    let B = null;
    Object.defineProperty(k.port1, "onmessage", {
      get: () => B,
      set: (F) => {
        typeof B == "function" && k.port1.removeEventListener("message", B),
          (B = typeof F == "function" ? F : null),
          typeof B == "function" &&
            (k.port1.addEventListener("message", B), k.port1.start());
      },
    }),
      (g.prototype.port = k.port1);
    let z = null;
    wk(y, _, g, S).then((F) => (z = F));
    const Z = dl(S.numberOfInputs, S.channelCount),
      He = dl(S.numberOfOutputs, h),
      Ue =
        g.parameterDescriptors === void 0
          ? []
          : g.parameterDescriptors.reduce(
              (F, { name: K }) => ({ ...F, [K]: new Float32Array(128) }),
              {}
            );
    let J = !0;
    const fe = () => {
        S.numberOfOutputs > 0 && M.disconnect(I);
        for (let F = 0, K = 0; F < S.numberOfOutputs; F += 1) {
          const Ce = D[F];
          for (let pe = 0; pe < h[F]; pe += 1) I.disconnect(Ce, K + pe, pe);
          K += h[F];
        }
      },
      pt = new Map();
    M.onaudioprocess = ({ inputBuffer: F, outputBuffer: K }) => {
      if (z !== null) {
        const Ce = d(_);
        for (let pe = 0; pe < R; pe += 128) {
          for (let te = 0; te < S.numberOfInputs; te += 1)
            for (let ve = 0; ve < S.channelCount; ve += 1)
              ul(F, Z[te], ve, ve, pe);
          g.parameterDescriptors !== void 0 &&
            g.parameterDescriptors.forEach(({ name: te }, ve) => {
              ul(F, Ue, te, x + ve, pe);
            });
          for (let te = 0; te < S.numberOfInputs; te += 1)
            for (let ve = 0; ve < h[te]; ve += 1)
              He[te][ve].byteLength === 0 &&
                (He[te][ve] = new Float32Array(128));
          try {
            const te = Z.map((Je, $t) => {
              if (Ce[$t].size > 0) return pt.set($t, R / 128), Je;
              const le = pt.get($t);
              return le === void 0
                ? []
                : (Je.every((Le) => Le.every((Nt) => Nt === 0)) &&
                    (le === 1 ? pt.delete($t) : pt.set($t, le - 1)),
                  Je);
            });
            J = f(y.currentTime + pe / y.sampleRate, y.sampleRate, () =>
              z.process(te, He, Ue)
            );
            for (let Je = 0, $t = 0; Je < S.numberOfOutputs; Je += 1) {
              for (let re = 0; re < h[Je]; re += 1)
                gx(K, He[Je], re, $t + re, pe);
              $t += h[Je];
            }
          } catch (te) {
            (J = !1),
              _.dispatchEvent(
                new ErrorEvent("processorerror", {
                  colno: te.colno,
                  filename: te.filename,
                  lineno: te.lineno,
                  message: te.message,
                })
              );
          }
          if (!J) {
            for (let te = 0; te < S.numberOfInputs; te += 1) {
              b[te].disconnect(C[te]);
              for (let ve = 0; ve < S.channelCount; ve += 1)
                C[pe].disconnect(v, ve, te * S.channelCount + ve);
            }
            if (g.parameterDescriptors !== void 0) {
              const te = g.parameterDescriptors.length;
              for (let ve = 0; ve < te; ve += 1) {
                const Je = N[ve];
                Je.disconnect(v, 0, x + ve), Je.stop();
              }
            }
            v.disconnect(M), (M.onaudioprocess = null), br ? fe() : bn();
            break;
          }
        }
      }
    };
    let br = !1;
    const Yt = a(y, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0,
      }),
      ot = () => M.connect(Yt).connect(y.destination),
      bn = () => {
        M.disconnect(Yt), Yt.disconnect();
      },
      no = () => {
        if (J) {
          bn(), S.numberOfOutputs > 0 && M.connect(I);
          for (let F = 0, K = 0; F < S.numberOfOutputs; F += 1) {
            const Ce = D[F];
            for (let pe = 0; pe < h[F]; pe += 1) I.connect(Ce, K + pe, pe);
            K += h[F];
          }
        }
        br = !0;
      },
      jr = () => {
        J && (ot(), fe()), (br = !1);
      };
    return ot(), p(_, no, jr);
  },
  Ck = (e, t) => (n, r) => {
    const s = n.createChannelMerger(r.numberOfInputs);
    return (
      e !== null && e.name === "webkitAudioContext" && t(n, s), Ci(s, r), s
    );
  },
  bk = (e) => {
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
  vx = (e, t) => {
    const n = e.createChannelSplitter(t.numberOfOutputs);
    return Ci(n, t), bk(n), n;
  },
  jk = (e, t, n, r, s) => (o, a) => {
    if (o.createConstantSource === void 0) return n(o, a);
    const l = o.createConstantSource();
    return (
      Ci(l, a),
      sp(l, a, "offset"),
      t(r, () => r(o)) || yx(l),
      t(s, () => s(o)) || xx(l),
      e(o, l),
      l
    );
  },
  wx = (e, t) => (
    (e.connect = t.connect.bind(t)), (e.disconnect = t.disconnect.bind(t)), e
  ),
  kk =
    (e, t, n, r) =>
    (s, { offset: o, ...a }) => {
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
        u = n(s, { ...a, gain: o }),
        f = l.getChannelData(0);
      (f[0] = 1), (f[1] = 1), (c.buffer = l), (c.loop = !0);
      const d = {
          get bufferSize() {},
          get channelCount() {
            return u.channelCount;
          },
          set channelCount(m) {
            u.channelCount = m;
          },
          get channelCountMode() {
            return u.channelCountMode;
          },
          set channelCountMode(m) {
            u.channelCountMode = m;
          },
          get channelInterpretation() {
            return u.channelInterpretation;
          },
          set channelInterpretation(m) {
            u.channelInterpretation = m;
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
          set onended(m) {
            c.onended = m;
          },
          addEventListener(...m) {
            return c.addEventListener(m[0], m[1], m[2]);
          },
          dispatchEvent(...m) {
            return c.dispatchEvent(m[0]);
          },
          removeEventListener(...m) {
            return c.removeEventListener(m[0], m[1], m[2]);
          },
          start(m = 0) {
            c.start.call(c, m);
          },
          stop(m = 0) {
            c.stop.call(c, m);
          },
        },
        p = () => c.connect(u),
        y = () => c.disconnect(u);
      return e(s, c), r(wx(d, u), p, y);
    },
  yr = (e, t) => {
    const n = e.createGain();
    return Ci(n, t), sp(n, t, "gain"), n;
  },
  Nk = (e, { mediaStream: t }) => {
    const n = t.getAudioTracks();
    n.sort((o, a) => (o.id < a.id ? -1 : o.id > a.id ? 1 : 0));
    const r = n.slice(0, 1),
      s = e.createMediaStreamSource(new MediaStream(r));
    return Object.defineProperty(s, "mediaStream", { value: t }), s;
  },
  Ek = (e) =>
    e === null
      ? null
      : e.hasOwnProperty("OfflineAudioContext")
      ? e.OfflineAudioContext
      : e.hasOwnProperty("webkitOfflineAudioContext")
      ? e.webkitOfflineAudioContext
      : null,
  op = (e, t, n, r) => e.createScriptProcessor(t, n, r),
  ns = () => new DOMException("", "NotSupportedError"),
  Tk = (e, t) => (n, r, s) => (e(r).replay(s), t(r, n, s)),
  _k = (e, t, n) => async (r, s, o) => {
    const a = e(r);
    await Promise.all(
      a.activeInputs
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
  Rk = (e, t, n) => async (r, s, o) => {
    const a = t(r);
    await Promise.all(
      Array.from(a.activeInputs).map(async ([l, c]) => {
        const f = await e(l).render(l, s);
        n(l) || f.connect(o, c);
      })
    );
  },
  Ak = (e, t, n, r) => (s) =>
    e(Fm, () => Fm(s))
      ? Promise.resolve(e(r, r)).then((o) => {
          if (!o) {
            const a = n(s, 512, 0, 1);
            (s.oncomplete = () => {
              (a.onaudioprocess = null), a.disconnect();
            }),
              (a.onaudioprocess = () => s.currentTime),
              a.connect(s.destination);
          }
          return s.startRendering();
        })
      : new Promise((o) => {
          const a = t(s, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          (s.oncomplete = (l) => {
            a.disconnect(), o(l.renderedBuffer);
          }),
            a.connect(s.destination),
            s.startRendering();
        }),
  Mk = (e) => (t, n) => {
    e.set(t, n);
  },
  Pk = (e) => () => {
    if (e === null) return !1;
    try {
      new e({ length: 1, sampleRate: 44100 });
    } catch {
      return !1;
    }
    return !0;
  },
  Lk = (e, t) => async () => {
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
      a = !1;
    try {
      await r.audioWorklet.addModule(s);
      const l = new e(r, "a", { numberOfOutputs: 0 }),
        c = r.createOscillator();
      (l.port.onmessage = () => (o = !0)),
        (l.onprocessorerror = () => (a = !0)),
        c.connect(l),
        c.start(0),
        await r.startRendering(),
        await new Promise((u) => setTimeout(u));
    } catch {
    } finally {
      URL.revokeObjectURL(s);
    }
    return o && !a;
  },
  Ok = (e, t) => () => {
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
  Bk = () => new DOMException("", "UnknownError"),
  Ik = () => (typeof window > "u" ? null : window),
  Uk = (e, t) => (n) => {
    (n.copyFromChannel = (r, s, o = 0) => {
      const a = e(o),
        l = e(s);
      if (l >= n.numberOfChannels) throw t();
      const c = n.length,
        u = n.getChannelData(l),
        f = r.length;
      for (let d = a < 0 ? -a : 0; d + a < c && d < f; d += 1) r[d] = u[d + a];
    }),
      (n.copyToChannel = (r, s, o = 0) => {
        const a = e(o),
          l = e(s);
        if (l >= n.numberOfChannels) throw t();
        const c = n.length,
          u = n.getChannelData(l),
          f = r.length;
        for (let d = a < 0 ? -a : 0; d + a < c && d < f; d += 1)
          u[d + a] = r[d];
      });
  },
  $k = (e) => (t) => {
    (t.copyFromChannel = (
      (n) =>
      (r, s, o = 0) => {
        const a = e(o),
          l = e(s);
        if (a < t.length) return n.call(t, r, l, a);
      }
    )(t.copyFromChannel)),
      (t.copyToChannel = (
        (n) =>
        (r, s, o = 0) => {
          const a = e(o),
            l = e(s);
          if (a < t.length) return n.call(t, r, l, a);
        }
      )(t.copyToChannel));
  },
  Fk = (e) => (t, n) => {
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
  Dk = (e, t) => (n, r) => {
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
  zk = (e, t, n) =>
    e.copyFromChannel === void 0
      ? e.getChannelData(n)[0]
      : (e.copyFromChannel(t, n), t[0]),
  ip = (e, t, n, r) => {
    let s = e;
    for (; !s.hasOwnProperty(t); ) s = Object.getPrototypeOf(s);
    const { get: o, set: a } = Object.getOwnPropertyDescriptor(s, t);
    Object.defineProperty(e, t, { get: n(o), set: r(a) });
  },
  Vk = (e) => ({
    ...e,
    outputChannelCount:
      e.outputChannelCount !== void 0
        ? e.outputChannelCount
        : e.numberOfInputs === 1 && e.numberOfOutputs === 1
        ? [e.channelCount]
        : Array.from({ length: e.numberOfOutputs }, () => 1),
  }),
  Sx = (e, t, n) => {
    try {
      e.setValueAtTime(t, n);
    } catch (r) {
      if (r.code !== 9) throw r;
      Sx(e, t, n + 1e-7);
    }
  },
  Wk = (e) => {
    const t = e.createBufferSource();
    t.start();
    try {
      t.start();
    } catch {
      return !0;
    }
    return !1;
  },
  Hk = (e) => {
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
  qk = (e) => {
    const t = e.createBufferSource();
    t.start();
    try {
      t.stop();
    } catch {
      return !1;
    }
    return !0;
  },
  Cx = (e) => {
    const t = e.createOscillator();
    try {
      t.start(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  Gk = (e) => {
    const t = e.createBuffer(1, 1, 44100),
      n = e.createBufferSource();
    (n.buffer = t), n.start(), n.stop();
    try {
      return n.stop(), !0;
    } catch {
      return !1;
    }
  },
  bx = (e) => {
    const t = e.createOscillator();
    try {
      t.stop(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  Kk = (e) => {
    const { port1: t, port2: n } = new MessageChannel();
    try {
      t.postMessage(e);
    } finally {
      t.close(), n.close();
    }
  },
  Zk = (e) => {
    e.start = (
      (t) =>
      (n = 0, r = 0, s) => {
        const o = e.buffer,
          a = o === null ? r : Math.min(o.duration, r);
        o !== null && a > o.duration - 0.5 / e.context.sampleRate
          ? t.call(e, n, 0, 0)
          : t.call(e, n, a, s);
      }
    )(e.start);
  },
  Yk = (e, t) => {
    const n = t.createGain();
    e.connect(n);
    const r = ((s) => () => {
      s.call(e, n), e.removeEventListener("ended", r);
    })(e.disconnect);
    e.addEventListener("ended", r),
      wx(e, n),
      (e.stop = ((s) => {
        let o = !1;
        return (a = 0) => {
          if (o)
            try {
              s.call(e, a);
            } catch {
              n.gain.setValueAtTime(0, a);
            }
          else s.call(e, a), (o = !0);
        };
      })(e.stop));
  },
  bi = (e, t) => (n) => {
    const r = { value: e };
    return (
      Object.defineProperties(n, { currentTarget: r, target: r }),
      typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    );
  },
  Qk = $b(ts),
  Xk = Hb(ts),
  Jk = Oj(sc),
  eN = new WeakMap(),
  tN = qj(eN),
  Js = Ej(new Map(), new WeakMap()),
  wn = Ik(),
  jx = Hj(lt),
  ac = _k(lt, jx, Vr),
  xr = Zj(ox),
  eo = Ek(wn),
  Sn = rk(eo),
  kx = new WeakMap(),
  Nx = Dj(bi),
  lc = fk(wn),
  nN = ek(lc),
  Ex = tk(wn),
  rN = nk(wn),
  si = hk(wn),
  ji = vj(
    Fb(tx),
    Wb(Qk, Xk, Ad, Jk, Md, lt, tN, xi, qt, ts, pr, Vr, Ea),
    Js,
    Jj(Nd, Md, lt, qt, ri, pr),
    es,
    Xj,
    ns,
    Lj(Ad, Nd, lt, qt, ri, xr, pr, Sn),
    Uj(kx, lt, an),
    Nx,
    xr,
    nN,
    Ex,
    rN,
    Sn,
    si
  ),
  sN = new WeakSet(),
  Dm = ck(wn),
  Tx = Pj(new Uint32Array(1)),
  oN = Uk(Tx, es),
  iN = $k(Tx),
  aN = Yb(sN, Js, ns, Dm, eo, Pk(Dm), oN, iN),
  ap = qb(yr),
  _x = Rk(jx, wi, Vr),
  lp = Tj(_x),
  cc = dk(ap, Js, Wk, Hk, qk, Cx, Gk, bx, Zk, Fk(ip), Yk),
  cp = Tk(Gj(wi), _x),
  lN = Jb(lp, cc, qt, cp, ac),
  uc = wj(Db(rx), kx, sx, Sj, Pb, Lb, Ob, Bb, Ib, bd, Jy, lc, Sx),
  cN = Xb(ji, lN, uc, sn, cc, xr, Sn, bi),
  uN = lj(ji, cj, es, sn, pk(yr, ip), xr, Sn, ac),
  dc = lk(ts, Ex),
  dN = Dk(sn, dc),
  up = Ck(lc, dN),
  fN = kk(ap, cc, yr, dc),
  ki = jk(ap, Js, fN, Cx, bx),
  pN = Mj(lp, ki, qt, cp, ac),
  hN = Aj(ji, uc, pN, ki, xr, Sn, bi),
  mN = Ak(Js, yr, op, Ok(yr, eo)),
  gN = uj(uc, up, ki, op, ns, zk, Sn, ip),
  Rx = new WeakMap(),
  yN = ak(uN, gN, Nx, Sn, Rx, bi),
  Ax = sk(wn),
  dp = zj(wn),
  Mx = new WeakMap(),
  xN = Yj(Mx, eo),
  zm = Ax
    ? Vb(
        Js,
        ns,
        Fj(wn),
        dp,
        Vj(Ub),
        xr,
        xN,
        Sn,
        si,
        new WeakMap(),
        new WeakMap(),
        Lk(si, eo),
        wn
      )
    : void 0,
  vN = ok(ji, Nk, xr, Sn),
  Px = Qj(Rx),
  wN = Gb(Px),
  Lx = _j(es),
  SN = Bj(Px),
  Ox = $j(es),
  Bx = new WeakMap(),
  CN = Wj(Bx, an),
  bN = Sk(Lx, es, sn, up, vx, ki, yr, op, ns, Ox, dp, CN, dc),
  jN = gk(sn, bN, yr, ns, dc),
  kN = Nj(lp, Lx, cc, up, vx, ki, yr, SN, Ox, dp, qt, si, eo, cp, ac, mN),
  NN = Kj(Mx),
  EN = Mk(Bx),
  Vm = Ax ? bj(wN, ji, uc, kN, jN, lt, NN, xr, Sn, si, Vk, EN, Kk, bi) : void 0,
  TN = ik(sn, ns, Bk, yN, lc),
  Ix =
    "Missing AudioWorklet support. Maybe this is not running in a secure context.",
  _N = async (e, t, n, r, s) => {
    const { encoderId: o, port: a } = await Ky(s, t.sampleRate);
    if (Vm === void 0) throw new Error(Ix);
    const l = new cN(t, { buffer: e }),
      c = new vN(t, { mediaStream: r }),
      u = _b(Vm, t, { channelCount: n });
    return {
      audioBufferSourceNode: l,
      encoderId: o,
      mediaStreamAudioSourceNode: c,
      port: a,
      recorderAudioWorkletNode: u,
    };
  },
  RN = (e, t, n, r) => (s, o, a) => {
    var l;
    const c =
        (l = o.getAudioTracks()[0]) === null || l === void 0
          ? void 0
          : l.getSettings().sampleRate,
      u = new TN({ latencyHint: "playback", sampleRate: c }),
      f = Math.max(1024, Math.ceil(u.baseLatency * u.sampleRate)),
      d = new aN({ length: f, sampleRate: u.sampleRate }),
      p = [],
      y = Tb((N) => {
        if (zm === void 0) throw new Error(Ix);
        return zm(u, N);
      });
    let m = null,
      g = null,
      S = null,
      h = null,
      x = !0;
    const w = (N) => {
        s.dispatchEvent(e("dataavailable", { data: new Blob(N, { type: a }) }));
      },
      j = async (N, v) => {
        const R = await ol(N, v);
        S === null ? p.push(...R) : (w(R), (h = j(N, v)));
      },
      k = () => ((x = !0), u.resume()),
      b = () => {
        S !== null &&
          (m !== null &&
            (o.removeEventListener("addtrack", m),
            o.removeEventListener("removetrack", m)),
          g !== null && clearTimeout(g),
          S.then(
            async ({
              constantSourceNode: N,
              encoderId: v,
              mediaStreamAudioSourceNode: R,
              recorderAudioWorkletNode: M,
            }) => {
              h !== null && (h.catch(() => {}), (h = null)),
                await M.stop(),
                R.disconnect(M),
                N.stop();
              const I = await ol(v, null);
              S === null && (await C()),
                w([...p, ...I]),
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
          return a;
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
          x || (k(), s.dispatchEvent(new Event("resume")));
        },
        start(N) {
          var v;
          if (S !== null) throw n();
          if (o.getVideoTracks().length > 0) throw r();
          s.dispatchEvent(new Event("start"));
          const R = o.getAudioTracks(),
            M =
              R.length === 0
                ? 2
                : (v = R[0].getSettings().channelCount) !== null && v !== void 0
                ? v
                : 2;
          S = Promise.all([k(), y.then(() => _N(d, u, M, o, a))]).then(
            async ([
              ,
              {
                audioBufferSourceNode: D,
                encoderId: q,
                mediaStreamAudioSourceNode: H,
                port: $,
                recorderAudioWorkletNode: L,
              },
            ]) => {
              H.connect(L),
                await new Promise((O) => {
                  (D.onended = O),
                    D.connect(L),
                    D.start(u.currentTime + f / u.sampleRate);
                }),
                D.disconnect(L);
              const _ = new hN(u, { offset: 0 });
              return (
                (_.onended = () => _.disconnect()),
                _.connect(u.destination),
                _.start(),
                await L.record($),
                N !== void 0 && (h = j(q, N)),
                {
                  constantSourceNode: _,
                  encoderId: q,
                  mediaStreamAudioSourceNode: H,
                  recorderAudioWorkletNode: L,
                }
              );
            }
          );
          const I = o.getTracks();
          (m = () => {
            b(), s.dispatchEvent(new ErrorEvent("error", { error: t() }));
          }),
            o.addEventListener("addtrack", m),
            o.addEventListener("removetrack", m),
            (g = setInterval(() => {
              const D = o.getTracks();
              (D.length !== I.length || D.some((q, H) => q !== I[H])) &&
                m !== null &&
                m();
            }, 1e3));
        },
        stop: b,
      }
    );
  };
class nu {
  constructor(t, n = 0, r) {
    if (n < 0 || (r !== void 0 && r < 0)) throw new RangeError();
    const s = t.reduce((f, d) => f + d.byteLength, 0);
    if (n > s || (r !== void 0 && n + r > s)) throw new RangeError();
    const o = [],
      a = r === void 0 ? s - n : r,
      l = [];
    let c = 0,
      u = n;
    for (const f of t)
      if (l.length === 0)
        if (f.byteLength > u) {
          c = f.byteLength - u;
          const d = c > a ? a : c;
          o.push(new DataView(f, u, d)), l.push(f);
        } else u -= f.byteLength;
      else if (c < a) {
        c += f.byteLength;
        const d = c > a ? f.byteLength - c + a : f.byteLength;
        o.push(new DataView(f, 0, d)), l.push(f);
      }
    (this._buffers = l),
      (this._byteLength = a),
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
const AN = (e, t, n, r, s) => (o, a, l, c) => {
    const u = l.getAudioTracks(),
      f = [],
      d = u.length === 0 ? void 0 : u[0].getSettings().channelCount,
      p = new a(l, { mimeType: "audio/webm;codecs=pcm" }),
      y = u.length === 0 ? void 0 : u[0].getSettings().sampleRate;
    let m = null,
      g = () => {};
    const S = (w) => {
        o.dispatchEvent(e("dataavailable", { data: new Blob(w, { type: c }) }));
      },
      h = async (w, j) => {
        const k = await ol(w, j);
        p.state === "inactive" ? f.push(...k) : (S(k), (m = h(w, j)));
      },
      x = () => {
        p.state !== "inactive" &&
          (m !== null && (m.catch(() => {}), (m = null)),
          g(),
          (g = () => {}),
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
            let j = !1,
              k = !1,
              b = 0,
              C = Ky(c, y);
            g = () => {
              k = !0;
            };
            const N = Qy(
              p,
              "dataavailable"
            )(({ data: v }) => {
              (b += 1),
                (C = C.then(
                  async ({
                    dataView: R = null,
                    elementType: M = null,
                    encoderId: I,
                    port: D,
                  }) => {
                    const q = await v.arrayBuffer();
                    b -= 1;
                    const H =
                      R === null
                        ? new nu([q])
                        : new nu([...R.buffers, q], R.byteOffset);
                    if (!j && p.state === "recording" && !k) {
                      const B = s(H, 0);
                      if (B === null)
                        return {
                          dataView: H,
                          elementType: M,
                          encoderId: I,
                          port: D,
                        };
                      const { value: z } = B;
                      if (z !== 172351395)
                        return {
                          dataView: R,
                          elementType: M,
                          encoderId: I,
                          port: D,
                        };
                      j = !0;
                    }
                    const {
                        currentElementType: $,
                        offset: L,
                        contents: _,
                      } = r(H, M, d),
                      O =
                        L < H.byteLength
                          ? new nu(H.buffers, H.byteOffset + L)
                          : null;
                    return (
                      _.forEach((B) =>
                        D.postMessage(
                          B,
                          B.map(({ buffer: z }) => z)
                        )
                      ),
                      b === 0 &&
                        (p.state === "inactive" || k) &&
                        (ol(I, null).then((B) => {
                          S([...f, ...B]),
                            (f.length = 0),
                            o.dispatchEvent(new Event("stop"));
                        }),
                        D.postMessage([]),
                        D.close(),
                        N()),
                      { dataView: O, elementType: $, encoderId: I, port: D }
                    );
                  }
                ));
            });
            w !== void 0 && C.then(({ encoderId: v }) => (m = h(v, w)));
          }
          p.start(100);
        },
        stop: x,
      }
    );
  },
  MN = () => (typeof window > "u" ? null : window),
  Ux = (e, t) => {
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
    const r = Ux(e, t + 1);
    return r === null ? null : r + 8;
  },
  PN = (e, t) => (n) => {
    const r = { value: e };
    return (
      Object.defineProperties(n, { currentTarget: r, target: r }),
      typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    );
  },
  $x = [],
  fc = MN(),
  LN = nb(fc),
  Fx = ZC(LN),
  ON = RN(Fx, Jf, JC, tc),
  fp = ab(Ux),
  BN = ob(fp),
  IN = ib(fp),
  UN = YC(BN, IN),
  $N = AN(Fx, Jf, tc, UN, fp),
  FN = XC(fc),
  DN = sb(fc),
  zN = rb(Jf, tc),
  VN = tb(zN, tc, ON, $N, $x, QC(FN, PN), DN),
  WN = () => eb(fc),
  HN = async (e) => {
    $x.push(await KC(e));
  },
  qN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, MediaRecorder: VN, isSupported: WN, register: HN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  GN = Wm(qN),
  KN = qy({
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
  ZN = (e) => {
    const t = new Worker(e);
    return KN(t);
  },
  YN = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,s=536870912,a=2*s,o=function(e,t){return function(r){var o=t.get(r),i=void 0===o?r.size:o<a?o+1:0;if(!r.has(i))return e(r,i);if(r.size<s){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=o(c,i),u=t(l);e.addUniqueNumber=u,e.generateUniqueNumber=l}(t)}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,s=(e,t)=>Object.assign(new Error(e),{status:t}),a=t=>s('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),o=(t,r)=>async({data:{id:o,method:i,params:c}})=>{const l=r[i];try{if(void 0===l)throw(e=>s('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?l():l(c);if(void 0===r)throw(t=>s('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const u=r instanceof Promise?await r:r;if(null===o){if(void 0!==u.result)throw a(i)}else{if(void 0===u.result)throw a(i);const{result:e,transferables:r=[]}=u;t.postMessage({id:o,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:o})}};var i=r(455);const c=new Map,l=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),s=(0,i.generateUniqueNumber)(c);return c.set(s,(()=>{n(),t.close(),c.delete(s)})),{result:s}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>s('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),u=(e,t,r=()=>!0)=>{const n=l(u,t,r),s=o(e,n);return e.addEventListener("message",s),()=>e.removeEventListener("message",s)},d=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let s=0;s<t;s+=1){const t=e[s];void 0===r[s]&&(r[s]=[]);const a=t.shift();if(void 0===a)break e;r[s].push(a),0===s&&(n+=a.length)}}if(n>t){const s=n-t;r.forEach(((t,r)=>{const n=t.pop(),a=n.length-s;t.push(n.subarray(0,a)),e[r].unshift(n.subarray(a))}))}return r},f=new Map,m=(e=>(t,r,n)=>{const s=e.get(t);if(void 0===s){const s={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,s),s}return s.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),s})(f),p=((e,t)=>(r,n,s,a)=>{const o=s>>3,i="subsequent"===n?0:44,c=r.length,l=e(r[0]),u=new ArrayBuffer(l*c*o+i),d=new DataView(u);return"subsequent"!==n&&t(d,s,c,"complete"===n?l:Number.POSITIVE_INFINITY,a),r.forEach(((e,t)=>{let r=i+t*o;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=c*o}}))})),[u]})(d,((e,t,r,n,s)=>{const a=t>>3,o=Math.min(n*r*a,4294967251);e.setUint32(0,1380533830),e.setUint32(4,o+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,s,!0),e.setUint32(28,s*r*a,!0),e.setUint16(32,r*a,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,o,!0)})),v=new Map;u(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:({recordingId:e,timeslice:t})=>{const r=v.get(e);void 0!==r&&(v.delete(e),r.reject(new Error("Another request was made to initiate an encoding.")));const n=f.get(e);if(null!==t){if(void 0===n||d(n.channelDataArrays[0])*(1e3/n.sampleRate)<t)return new Promise(((r,n)=>{v.set(e,{reject:n,resolve:r,timeslice:t})}));const r=h(n.channelDataArrays,Math.ceil(t*(n.sampleRate/1e3))),s=p(r,n.isComplete?"initial":"subsequent",16,n.sampleRate);return n.isComplete=!1,{result:s,transferables:s}}if(void 0!==n){const t=p(n.channelDataArrays,n.isComplete?"complete":"subsequent",16,n.sampleRate);return f.delete(e),{result:t,transferables:t}}return{result:[],transferables:[]}},record:({recordingId:e,sampleRate:t,typedArrays:r})=>{const n=m(e,t,r),s=v.get(e);if(void 0!==s&&d(n.channelDataArrays[0])*(1e3/t)>=s.timeslice){const r=h(n.channelDataArrays,Math.ceil(s.timeslice*(t/1e3))),a=p(r,n.isComplete?"initial":"subsequent",16,t);n.isComplete=!1,v.delete(e),s.resolve({result:a,transferables:a})}return{result:null}}})})()})();`,
  QN = new Blob([YN], { type: "application/javascript; charset=utf-8" }),
  Dx = URL.createObjectURL(QN),
  to = ZN(Dx),
  XN = to.characterize,
  JN = to.connect,
  eE = to.disconnect,
  tE = to.encode,
  nE = to.isSupported,
  rE = to.record;
URL.revokeObjectURL(Dx);
const sE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        characterize: XN,
        connect: JN,
        disconnect: eE,
        encode: tE,
        isSupported: nE,
        record: rE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oE = Wm(sE);
(function (e) {
  var t =
      (Ri && Ri.__awaiter) ||
      function (u, f, d, p) {
        function y(m) {
          return m instanceof d
            ? m
            : new d(function (g) {
                g(m);
              });
        }
        return new (d || (d = Promise))(function (m, g) {
          function S(w) {
            try {
              x(p.next(w));
            } catch (j) {
              g(j);
            }
          }
          function h(w) {
            try {
              x(p.throw(w));
            } catch (j) {
              g(j);
            }
          }
          function x(w) {
            w.done ? m(w.value) : y(w.value).then(S, h);
          }
          x((p = p.apply(u, f || [])).next());
        });
      },
    n =
      (Ri && Ri.__generator) ||
      function (u, f) {
        var d = {
            label: 0,
            sent: function () {
              if (m[0] & 1) throw m[1];
              return m[1];
            },
            trys: [],
            ops: [],
          },
          p,
          y,
          m,
          g;
        return (
          (g = { next: S(0), throw: S(1), return: S(2) }),
          typeof Symbol == "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function S(x) {
          return function (w) {
            return h([x, w]);
          };
        }
        function h(x) {
          if (p) throw new TypeError("Generator is already executing.");
          for (; d; )
            try {
              if (
                ((p = 1),
                y &&
                  (m =
                    x[0] & 2
                      ? y.return
                      : x[0]
                      ? y.throw || ((m = y.return) && m.call(y), 0)
                      : y.next) &&
                  !(m = m.call(y, x[1])).done)
              )
                return m;
              switch (((y = 0), m && (x = [x[0] & 2, m.value]), x[0])) {
                case 0:
                case 1:
                  m = x;
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
                    ((m = d.trys),
                    !(m = m.length > 0 && m[m.length - 1]) &&
                      (x[0] === 6 || x[0] === 2))
                  ) {
                    d = 0;
                    continue;
                  }
                  if (x[0] === 3 && (!m || (x[1] > m[0] && x[1] < m[3]))) {
                    d.label = x[1];
                    break;
                  }
                  if (x[0] === 6 && d.label < m[1]) {
                    (d.label = m[1]), (m = x);
                    break;
                  }
                  if (m && d.label < m[2]) {
                    (d.label = m[2]), d.ops.push(x);
                    break;
                  }
                  m[2] && d.ops.pop(), d.trys.pop();
                  continue;
              }
              x = f.call(u, d);
            } catch (w) {
              (x = [6, w]), (y = 0);
            } finally {
              p = m = 0;
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
  var r = GN,
    s = E,
    o = oE,
    a;
  (function (u) {
    (u.AbortError = "media_aborted"),
      (u.NotAllowedError = "permission_denied"),
      (u.NotFoundError = "no_specified_media_found"),
      (u.NotReadableError = "media_in_use"),
      (u.OverconstrainedError = "invalid_media_constraints"),
      (u.TypeError = "no_constraints"),
      (u.NONE = ""),
      (u.NO_RECORDER = "recorder_error");
  })((a = e.RecorderErrors || (e.RecorderErrors = {})));
  function l(u) {
    var f = this,
      d = u.audio,
      p = d === void 0 ? !0 : d,
      y = u.video,
      m = y === void 0 ? !1 : y,
      g = u.selfBrowserSurface,
      S = g === void 0 ? void 0 : g,
      h = u.onStop,
      x =
        h === void 0
          ? function () {
              return null;
            }
          : h,
      w = u.onStart,
      j =
        w === void 0
          ? function () {
              return null;
            }
          : w,
      k = u.blobPropertyBag,
      b = u.screen,
      C = b === void 0 ? !1 : b,
      N = u.mediaRecorderOptions,
      v = N === void 0 ? void 0 : N,
      R = u.customMediaStream,
      M = R === void 0 ? null : R,
      I = u.stopStreamsOnStop,
      D = I === void 0 ? !0 : I,
      q = u.askPermissionOnMount,
      H = q === void 0 ? !1 : q,
      $ = (0, s.useRef)(null),
      L = (0, s.useRef)([]),
      _ = (0, s.useRef)(null),
      O = (0, s.useState)("idle"),
      B = O[0],
      z = O[1],
      T = (0, s.useState)(!1),
      Z = T[0],
      He = T[1],
      Ue = (0, s.useState)(void 0),
      J = Ue[0],
      fe = Ue[1],
      pt = (0, s.useState)("NONE"),
      br = pt[0],
      Yt = pt[1],
      ot = (0, s.useState)(!1),
      bn = ot[0],
      no = ot[1];
    (0, s.useEffect)(function () {
      if (!bn) {
        var re = function () {
          return t(f, void 0, void 0, function () {
            var le;
            return n(this, function (Le) {
              switch (Le.label) {
                case 0:
                  return (
                    Le.trys.push([0, 3, , 4]),
                    (le = r.register),
                    [4, (0, o.connect)()]
                  );
                case 1:
                  return [4, le.apply(void 0, [Le.sent()])];
                case 2:
                  return Le.sent(), [3, 4];
                case 3:
                  return Le.sent(), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        };
        re(), no(!0);
      }
    }, []);
    var jr = (0, s.useCallback)(
      function () {
        return t(f, void 0, void 0, function () {
          var re, le, Le, Nt, rs;
          return n(this, function (ht) {
            switch (ht.label) {
              case 0:
                z("acquiring_media"),
                  (re = {
                    audio: typeof p == "boolean" ? !!p : p,
                    video: typeof m == "boolean" ? !!m : m,
                  }),
                  (ht.label = 1);
              case 1:
                return (
                  ht.trys.push([1, 9, , 10]),
                  M ? ((_.current = M), [3, 8]) : [3, 2]
                );
              case 2:
                return C
                  ? [
                      4,
                      window.navigator.mediaDevices.getDisplayMedia({
                        video: m || !0,
                        selfBrowserSurface: S,
                      }),
                    ]
                  : [3, 6];
              case 3:
                return (
                  (le = ht.sent()),
                  le.getVideoTracks()[0].addEventListener("ended", function () {
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
                (Le = ht.sent()),
                  Le.getAudioTracks().forEach(function (Ni) {
                    return le.addTrack(Ni);
                  }),
                  (ht.label = 5);
              case 5:
                return (_.current = le), [3, 8];
              case 6:
                return [4, window.navigator.mediaDevices.getUserMedia(re)];
              case 7:
                (Nt = ht.sent()), (_.current = Nt), (ht.label = 8);
              case 8:
                return z("idle"), [3, 10];
              case 9:
                return (rs = ht.sent()), Yt(rs.name), z("idle"), [3, 10];
              case 10:
                return [2];
            }
          });
        });
      },
      [p, m, C]
    );
    (0, s.useEffect)(
      function () {
        if (!window.MediaRecorder) throw new Error("Unsupported Browser");
        if (C && !window.navigator.mediaDevices.getDisplayMedia)
          throw new Error("This browser doesn't support screen capturing");
        var re = function (le) {
          var Le = navigator.mediaDevices.getSupportedConstraints(),
            Nt = Object.keys(le).filter(function (rs) {
              return !Le[rs];
            });
          Nt.length > 0 &&
            console.error(
              "The constraints " +
                Nt.join(",") +
                " doesn't support on this browser. Please check your ReactMediaRecorder component."
            );
        };
        return (
          typeof p == "object" && re(p),
          typeof m == "object" && re(m),
          v &&
            v.mimeType &&
            (MediaRecorder.isTypeSupported(v.mimeType) ||
              console.error(
                "The specified MIME type you supplied for MediaRecorder doesn't support this browser"
              )),
          !_.current && H && jr(),
          function () {
            if (_.current) {
              var le = _.current.getTracks();
              le.forEach(function (Le) {
                return Le.clone().stop();
              });
            }
          }
        );
      },
      [p, C, m, jr, v, H]
    );
    var F = function () {
        return t(f, void 0, void 0, function () {
          var re;
          return n(this, function (le) {
            switch (le.label) {
              case 0:
                return Yt("NONE"), _.current ? [3, 2] : [4, jr()];
              case 1:
                le.sent(), (le.label = 2);
              case 2:
                return _.current
                  ? ((re = _.current.getTracks().some(function (Le) {
                      return Le.readyState === "ended";
                    })),
                    re ? [4, jr()] : [3, 4])
                  : [3, 5];
              case 3:
                le.sent(), (le.label = 4);
              case 4:
                if (!_.current.active) return [2];
                ($.current = new r.MediaRecorder(_.current, v || void 0)),
                  ($.current.ondataavailable = K),
                  ($.current.onstop = pe),
                  ($.current.onstart = Ce),
                  ($.current.onerror = function () {
                    Yt("NO_RECORDER"), z("idle");
                  }),
                  $.current.start(),
                  z("recording"),
                  (le.label = 5);
              case 5:
                return [2];
            }
          });
        });
      },
      K = function (re) {
        var le = re.data;
        L.current.push(le);
      },
      Ce = function () {
        j();
      },
      pe = function () {
        var re = L.current[0],
          le = Object.assign(
            { type: re.type },
            k || (m ? { type: "video/mp4" } : { type: "audio/wav" })
          ),
          Le = new Blob(L.current, le),
          Nt = URL.createObjectURL(Le);
        z("stopped"), fe(Nt), x(Nt, Le);
      },
      te = function (re) {
        He(re),
          _.current &&
            _.current.getAudioTracks().forEach(function (le) {
              return (le.enabled = !re);
            });
      },
      ve = function () {
        $.current &&
          $.current.state === "recording" &&
          (z("paused"), $.current.pause());
      },
      Je = function () {
        $.current &&
          $.current.state === "paused" &&
          (z("recording"), $.current.resume());
      },
      $t = function () {
        $.current &&
          $.current.state !== "inactive" &&
          (z("stopping"),
          $.current.stop(),
          D &&
            _.current &&
            _.current.getTracks().forEach(function (re) {
              return re.stop();
            }),
          (L.current = []));
      };
    return {
      error: a[br],
      muteAudio: function () {
        return te(!0);
      },
      unMuteAudio: function () {
        return te(!1);
      },
      startRecording: F,
      pauseRecording: ve,
      resumeRecording: Je,
      stopRecording: $t,
      mediaBlobUrl: J,
      status: B,
      isAudioMuted: Z,
      previewStream: _.current
        ? new MediaStream(_.current.getVideoTracks())
        : null,
      previewAudioStream: _.current
        ? new MediaStream(_.current.getAudioTracks())
        : null,
      clearBlobUrl: function () {
        J && URL.revokeObjectURL(J), fe(void 0), z("idle");
      },
    };
  }
  e.useReactMediaRecorder = l;
  var c = function (u) {
    return u.render(l(u));
  };
  e.ReactMediaRecorder = c;
})(zy);
var iE = zy;
const Mr = ({
    options: e,
    selectedOption: t,
    onSelect: n,
    classNames: r,
    selectedColor: s,
  }) =>
    i.jsx("div", {
      className: "flex gap-1 mt-1 justify-evenly",
      children: e.map((o, a) =>
        i.jsx(
          "button",
          {
            className: `${r} ${t === o ? s : "bg-gray-900 text-gray-300"}`,
            onClick: () => n(o),
            children: o,
          },
          a
        )
      ),
    }),
  aE = ({ isBoundary: e, setIsBoundary: t }) => {
    const n = () => {
      console.log("Is b ", e), t((r) => !r);
    };
    return i.jsx("button", {
      onClick: n,
      className: "rounded-full bg-opacity-50 bg-gray-900 p-1 shadow-xl",
      children: i.jsx(_S, { color: `${e ? "success" : ""}` }),
    });
  };
async function Jt({
  matchId: e,
  innings: t,
  targetRuns: n,
  leadingTeam: r,
  thirdInningsBattingTeam: s = "",
  thirdInningsBowlingTeam: o = "",
  fourthInningsBattingTeam: a = "",
  fourthInningsBowlingTeam: l = "",
}) {
  const c =
    s && o && a && l
      ? {
          currentInnings: t,
          currentTarget: n,
          currentLeadingTeam: r,
          thirdInningsBattingTeam: s,
          thirdInningsBowlingTeam: o,
          fourthInningsBattingTeam: a,
          fourthInningsBowlingTeam: l,
        }
      : { currentInnings: t, currentTarget: n, currentLeadingTeam: r };
  await X.promise(
    ge.patch(`match/update-innings/${e}/current-innings/`, c),
    {
      loading: "Updating innings...",
      success: "Innings updated!",
      error: "Failed to update match innings. Please try again.",
    },
    { success: { duration: 5e3 } }
  );
}
async function gn({ matchId: e, matchEnded: t, matchResult: n }) {
  try {
    const r = await ge.patch(`match/update-innings/${e}/current-innings/`, {
      matchEnded: t,
      matchResult: n,
    });
    if (r.status === 200 || r.status === 201) return r.data;
    console.error(`Error: Received unexpected status ${r.status}`);
  } catch (r) {
    console.log("Error updating Match Innings ", r);
  }
}
const lE = () => {
    const {
        matchId: e,
        currentInnings: t,
        striker: n,
        nonStriker: r,
        bowler: s,
        matchType: o,
        ballRun: a,
        isBye: l,
        isLegBye: c,
        wideRuns: u,
        noBall: f,
        penaltyRuns: d,
        overThrowRuns: p,
        isShortRuns: y,
        fielder1: m,
        fielder2: g,
        deliveryType: S,
        creaseMovement: h,
        shotConnection: x,
        batSubject: w,
        stroke: j,
        keeperActivity: k,
        batsmanActivity: b,
        fieldingActivity: C,
        umpireActivity: N,
        wicketKeeperPosition: v,
        bowlerReleaseSide: R,
        shotZonePosition: M,
        wagonWheelPosition: I,
        trajectoryBallPosition: D,
        bowlerReleaseBallPosition: q,
        wicketType: H,
        dismissedPlayer: $,
        dismissedBy: L,
        caughtBy: _,
        stumpedBy: O,
        runOutFielder1: B,
        runOutFielder2: z,
        resetAll: T,
        setTeam1Players: Z,
        setTeam2Players: He,
        setStriker: Ue,
        setNonStriker: J,
        setBowler: fe,
        battingTeam: pt,
        setBattingTeam: br,
        bowlingTeam: Yt,
        targetRuns: ot,
        setTargetRuns: bn,
        teamLeadBy: no,
        setTeamLeadBy: jr,
        setInningsToBeUpdated: F,
        setIsSaveMatchModalVisible: K,
        ballNumber: Ce,
        setBallNumber: pe,
      } = Ge(),
      [te, ve] = E.useState("Save"),
      [Je, $t] = E.useState(!1),
      re = Ut(),
      [le, Le] = E.useState([]),
      [Nt, rs] = E.useState(""),
      [ht, Ni] = E.useState(!1),
      [zx, pc] = E.useState(!1),
      [pp, hp] = E.useState(null),
      { startRecording: Vx, stopRecording: Wx } = iE.useReactMediaRecorder({
        video: { deviceId: Nt ? { exact: Nt } : void 0 },
        audio: !1,
        onStop: (V) => {
          hp(V);
        },
      });
    E.useEffect(() => {
      navigator.mediaDevices
        .getUserMedia({ video: !0 })
        .then(() => {
          console.log("Camera access granted."),
            navigator.mediaDevices
              .enumerateDevices()
              .then((V) => {
                console.log("Devices detected:", V);
                const ce = V.filter((G) => G.kind === "videoinput");
                Le(ce), console.log("Video Input Devices:", ce);
                const be = ce.find((G) =>
                  G.label.includes("OBS Virtual Camera")
                );
                be
                  ? (console.log("OBS Virtual Camera found:", be),
                    rs(be.deviceId))
                  : console.warn("OBS Virtual Camera not found.");
              })
              .catch((V) => {
                console.error("Error fetching video devices:", V);
              });
        })
        .catch((V) => {
          console.error(
            "Error requesting camera permission or accessing media devices:",
            V
          );
        });
    }, []);
    const Hx = () => {
        Vx(), Ni(!0), pc(!1);
      },
      qx = () => {
        Wx(), Ni(!1), pc(!0);
      },
      Gx = (V = "match-video.mp4") => {
        if (pp) {
          const ce = document.createElement("a");
          ce.href = pp;
          const be = Date.now(),
            G = Ce + 1,
            ye = t.toString();
          (ce.download =
            e.toString() + "-" + ye + "-" + G.toString() + "-" + be.toString()),
            ce.click(),
            hp(null),
            pc(!1);
        }
      },
      Ei = async ({ newTeamRuns: V }) => {
        Ge.getState().battingTeam,
          o.isLimitedOvers
            ? t % 2 != 0 || (t % 2 == 0 && V == ot)
              ? (bn(V),
                console.log("target runs ", V),
                await Jt({
                  matchId: e,
                  innings: t + 1,
                  targetRuns: V,
                  leadingTeam: pt.id,
                  currentSuperOverCount:
                    t == 1 ? "" : t % 2 == 0 ? t / 2 : (t + 1) / 2,
                }),
                Ue({}),
                J({}),
                fe({}),
                F(t + 1))
              : V > ot
              ? (
                  await gn({
                    matchId: e,
                    matchEnded: !0,
                    matchResult: pt.name + " won the match",
                  })
                ).matchEnded
                ? re("/match")
                : toast.error("Something went wrong, Please try Again!")
              : V < ot &&
                ((
                  await gn({
                    matchId: e,
                    matchEnded: !0,
                    matchResult: Yt.name + " won the match",
                  })
                ).matchEnded
                  ? re("/match")
                  : toast.error("Something went wrong, Please try Again!"))
            : t == 1
            ? (bn(V),
              await Jt({
                matchId: e,
                innings: 2,
                targetRuns: V,
                leadingTeam: pt.id,
              }),
              Ue({}),
              J({}),
              fe({}),
              F(2))
            : t == 2
            ? K(!0)
            : t == 3
            ? (pt.id == no
                ? bn(ot + V)
                : ot > V
                ? (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: Yt.name + " won the match",
                    })
                  ).matchEnded
                  ? re("/match")
                  : toast.error("Something went wrong, Please try Again!")
                : bn(V - ot),
              Jt({ matchId: e, innings: 4, targetRuns: V, leadingTeam: pt.id }),
              Ue({}),
              J({}),
              fe({}),
              F(4))
            : t == 4 &&
              (V > ot
                ? (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: pt.name + " won the match",
                    })
                  ).matchEnded
                  ? re("/match")
                  : toast.error("Something went wrong, Please try Again!")
                : (
                    await gn({
                      matchId: e,
                      matchEnded: !0,
                      matchResult: Yt.name + " won the match",
                    })
                  ).matchEnded
                ? re("/match")
                : toast.error("Something went wrong, Please try Again!"));
      },
      Kx = (V) => {
        const be = Ge.getState().team1Players.map((G) => {
          const { player: ye } = G;
          if (ye.id === V.striker) {
            var ze = G.balls_faced;
            V.wideRuns > 0 || V.noBallRuns > 0 || (ze += 1);
            const mt = G.runs_scored + V.strikerRuns,
              Et = ((mt / ze) * 100).toFixed(2),
              Ft = (Ti, ss) => {
                if (V.dismissedPlayer) {
                  V.dismissedPlayer == Ti
                    ? Ue((mc) => ({ ...mc, isModalVisible: !0 }))
                    : V.dismissedPlayer == ss &&
                      J((mc) => ({ ...mc, isModalVisible: !0 }));
                  const ro = Ge.getState().battingTeam,
                    _i = ro.teamWickets + (V.dismissedPlayer ? 1 : 0),
                    hc = ro.teamRuns + V.teamRuns;
                  (_i >= o.activePlayersPerTeam - 1 ||
                    (o.isLimitedOvers &&
                      t > 2 &&
                      o.superOverActivePlayersPerTeam)) &&
                    Ei({ newTeamRuns: hc });
                }
              },
              jn = (Ge.getState().battingTeam.teamOvers * 10) % 10;
            return (
              (a % 2 != 0 && jn != 5) ||
              (a % 2 == 0 && jn == 5 && u == 0 && V.noBallRuns == 0)
                ? (Ue({ ...r }),
                  J({
                    id: ye.id,
                    name: ye.firstName + " " + ye.lastName,
                    runsScored: mt,
                    ballsFaced: ze,
                    fours: V.strikerRuns === 4 ? G.fours + 1 : G.fours,
                    sixes: V.strikerRuns === 6 ? G.sixes + 1 : G.sixes,
                    strikeRate: Et,
                    oversBowled: G.overs_bowled,
                    runsConceeded: G.runs_conceeded,
                    wicketsTaken: G.wickets_taken,
                    economy: G.economy,
                    isModalVisible: !1,
                  }),
                  Ft(r.id, ye.id))
                : (Ue({
                    id: ye.id,
                    name: ye.firstName + " " + ye.lastName,
                    runsScored: mt,
                    ballsFaced: ze,
                    fours: V.strikerRuns === 4 ? G.fours + 1 : G.fours,
                    sixes: V.strikerRuns === 6 ? G.sixes + 1 : G.sixes,
                    strikeRate: Et,
                    oversBowled: G.overs_bowled,
                    runsConceeded: G.runs_conceeded,
                    wicketsTaken: G.wickets_taken,
                    economy: G.economy,
                    isModalVisible: !1,
                  }),
                  Ft(ye.id, r.id)),
              {
                ...G,
                runs_scored: mt,
                balls_faced: ze,
                strike_rate: Et,
                fours: V.strikerRuns === 4 ? G.fours + 1 : G.fours,
                sixes: V.strikerRuns === 6 ? G.sixes + 1 : G.sixes,
                has_dismissed:
                  V.dismissedPlayer == G.player.id ? 1 : G.has_dismissed,
              }
            );
          }
          return G;
        });
        return Z(be), be;
      },
      Zx = (V) => {
        const be = Ge.getState().team2Players.map((G) => {
          const { player: ye } = G;
          if (ye.id === V.bowler) {
            var ze = G.overs_bowled;
            if (!(V.wideRuns > 0 || V.noBallRuns > 0)) {
              var mt = Math.floor(G.overs_bowled),
                Et = (G.overs_bowled * 10) % 10;
              Et == 5 ? ((mt += 1), (Et = 0)) : (Et += 1), (ze = mt + Et / 10);
            }
            var Ft = G.wickets_taken;
            const zn = G.runs_conceded + V.bowlerRuns,
              jn = (zn / ze).toFixed(2);
            return (
              (V.wicketType == "Caught" ||
                V.wicketType == "Bowled" ||
                V.wicketType == "Stumped" ||
                V.wicketType == "Caught and Bowled" ||
                V.wicketType == "Hit Wicket") &&
                (Ft += 1),
              fe({
                id: ye.id,
                name: ye.firstName + " " + ye.lastName,
                runsScored: G.runs_scored,
                ballsFaced: G.balls_faced,
                fours: G.fours,
                sixes: G.sixes,
                strikeRate: G.strikeRate,
                oversBowled: ze,
                runsConceeded: zn,
                wicketsTaken: Ft,
                economy: jn,
                isModalVisible: !1,
              }),
              {
                ...G,
                runs_conceded: zn,
                overs_bowled: ze,
                wickets_taken: Ft,
                economy: jn,
              }
            );
          }
          return G;
        });
        return He(be), be;
      },
      Yx = (V) => {
        const ce = Ge.getState().battingTeam,
          be = ce.teamRuns + V.teamRuns,
          G = ce.teamWickets + (V.dismissedPlayer ? 1 : 0);
        var ye = ce.teamOvers,
          ze = (ce.teamOvers * 10) % 10;
        if (!(V.wideRuns > 0 || V.noBallRuns > 0)) {
          var mt = Math.floor(ce.teamOvers);
          ze == 5 ? ((mt += 1), (ze = 0)) : (ze += 1), (ye = mt + ze / 10);
        }
        const Et = (ye > 0 ? be / ye : 0).toFixed(2),
          Ft = {
            ...ce,
            teamRuns: be,
            teamWickets: G,
            teamOvers: ye,
            teamRunRate: Et,
          };
        return (
          br(Ft),
          !o.isLimitedOvers && t == 4 && be > ot && Ei({ newTeamRuns: be }),
          o.isLimitedOvers && t % 2 == 0 && be > ot && Ei({ newTeamRuns: be }),
          console.log(o),
          ze === 0 &&
            V.wideRuns === 0 &&
            V.noBallRuns === 0 &&
            (o.isLimitedOvers &&
              (ye >= o.oversPerInnings ||
                (t > 2 && o.superOverActivePlayersPerTeam)) &&
              Ei({ newTeamRuns: be }),
            fe((zn) => ({ ...zn, isModalVisible: !0 }))),
          Ft
        );
      },
      Qx = async (V) => {
        try {
          const ce = await Qf({ formData: V, extendedUrl: "ball/balls/" });
          T();
          const be = await Kx(V),
            G = await Zx(V),
            ye = await Yx(V);
        } catch (ce) {
          console.log("Error Saving Ball ", ce);
        }
      },
      Xx = async () => {
        let V = 0,
          ce = 0,
          be = 0,
          G = parseInt(a, 10) || 0,
          ye = 0,
          ze = 0,
          mt = 0,
          Et = 0;
        const Ft = parseInt(u, 10) || 0,
          zn = parseInt(d, 10) || 0;
        l || c ? (l && (ye += G), c && (ze += G)) : (ce += G),
          f !== "None" &&
            ((mt += o.noBallPenaltyRuns),
            (be += o.noBallPenaltyRuns),
            (V += o.noBallPenaltyRuns)),
          (V += (l || c ? G : 0) + Ft + zn),
          (be += ce + u),
          (Et += ce + V);
        const jn = Ge.getState().battingTeam;
        var Ti = jn.teamOvers,
          ss = (jn.teamOvers * 10) % 10;
        if (!(Ft > 0 || mt > 0)) {
          var ro = Math.floor(jn.teamOvers);
          ss == 5 ? ((ro += 1), (ss = 0)) : (ss += 1), (Ti = ro + ss / 10);
        }
        var _i = Ce + 1;
        pe(_i);
        const hc = {
          match: e,
          innings: t,
          ballOver: Ti,
          ballNumber: _i,
          striker: n.id,
          nonStriker: r.id,
          bowler: s.id,
          strikerRuns: ce,
          bowlerRuns: be,
          extraRuns: V,
          teamRuns: Et,
          wideRuns: u,
          noBallRuns: mt,
          penaltyRuns: d || 0,
          legByeRuns: ze,
          byeRuns: ye,
          noBallType: f,
          isShortRuns: y,
          overThrowRuns: p,
          fielder1: m,
          fielder2: g,
          wicketType: H,
          dismissedPlayer: $,
          dismissedBy: L,
          caughtBy: _,
          stumpedBy: O,
          runOutFielder1: B,
          runOutFielder2: z,
          editLater: !1,
          deliveryType: S,
          creaseMovement: h,
          shotConnection: x,
          batSubject: w,
          stroke: j,
          keeperActivity: k,
          batsmanActivity: b,
          fieldingActivity: C,
          umpireActivity: N,
          shotZoneX: M.x,
          shotZoneY: M.y,
          wagonWheelX: I.x,
          wagonWheelY: I.y,
          ballTrajectoryX: D.x,
          ballTrajectoryY: D.y,
          wicketKeeperPosition: v,
          bowlerReleaseX: q.x,
          bowlerReleaseY: q.y,
          bowlerReleasePosition: R,
        };
        Qx(hc), Gx();
      };
    return i.jsxs("div", {
      className: "flex gap-2 justify-center",
      children: [
        i.jsxs("button", {
          className: `${
            ht ? "bg-gray-500" : "bg-primary500 hover:scale-105"
          } px-2 rounded shadow-xl flex gap-2 items-center bg-opacity-30`,
          onClick: Hx,
          disabled: ht,
          children: ["Start", i.jsx(MS, { fontSize: "small" })],
        }),
        i.jsxs("button", {
          className: `${
            ht ? "bg-primary500 hover:scale-105" : "bg-gray-500"
          }  px-2 rounded shadow-xl flex gap-2 items-center bg-opacity-30`,
          onClick: qx,
          disabled: !ht,
          children: ["Stop", i.jsx(LS, { fontSize: "small" })],
        }),
        i.jsxs("button", {
          className: `${zx ? "bg-opacity-50" : "bg-opacity-10"}
        bg-primary500 px-2 rounded shadow-xl hover:scale-105 flex gap-2 items-center`,
          onClick: Xx,
          disabled: Je,
          children: [te, i.jsx(kS, { fontSize: "small" })],
        }),
      ],
    });
  },
  cE = () => {
    const {
        ballRun: e,
        setBallRun: t,
        isBoundary: n,
        setIsBoundary: r,
        isSaveMatchModalVisible: s,
        setIsSaveMatchModalVisible: o,
      } = Ge(),
      a = [0, 1, 2, 3, 4, 5, 6],
      l = (u) => {
        t(u), u == 4 || u == 6 ? r(!0) : r(!1);
      },
      c = (u) => {
        r(!n), console.log("IsB ", n);
      };
    return i.jsxs("div", {
      className:
        "grid md:grid-cols-2 gap-2 justify-around rounded-b-lg py-2 bg-ball500 p-1",
      children: [
        i.jsxs("div", {
          className: "flex gap-2 justify-center",
          children: [
            i.jsx(Mr, {
              options: a,
              selectedOption: e || 0,
              onSelect: l,
              classNames: "h-6 w-6 text-center p-1 rounded-full",
              selectedColor: "bg-accent text-white",
            }),
            i.jsx(aE, { isBoundary: n || !1, setIsBoundary: c }),
          ],
        }),
        i.jsxs("div", {
          className: "flex gap-2 justify-center",
          children: [
            i.jsx(lE, {}),
            i.jsx("button", {
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
  uE = () =>
    i.jsxs("div", {
      className: "sticky top-0",
      children: [i.jsx(OC, {}), i.jsx(cE, {})],
    }),
  ru = ({ text: e = "title", children: t }) =>
    i.jsxs("div", {
      className: "flex border-2 border-secondary1000 rounded",
      children: [
        i.jsx("p", { className: "bg-secondary1000 pt-1 px-2", children: e }),
        i.jsx("div", { className: " px-2", children: t }),
      ],
    });
function su({
  activeLabel: e = "Active",
  inactiveLabel: t = "Inactive",
  activeColor: n = "bg-blue-700",
  inactiveColor: r = "bg-gray-700",
  isToggled: s,
  setIsToggled: o,
}) {
  const a = () => {
    o(!s);
  };
  return i.jsx("button", {
    onClick: a,
    className: `px-4 my-1 py-1 rounded-xl ${s ? n : r}`,
    children: s ? e : t,
  });
}
const dE = () => {
    const [e, t] = E.useState(!0),
      n = [0, 1, 2, 3, 4, 5, 6],
      r = ["None", "Step", "Height", "Wider", "Other"],
      {
        wideRuns: s,
        setWideRuns: o,
        isBye: a,
        setIsBye: l,
        isLegBye: c,
        setIsLegBye: u,
        noBall: f,
        setNoBall: d,
        overThrowRuns: p,
        setOverThrowRuns: y,
        ballSpeed: m,
        setBallSpeed: g,
        batSpeed: S,
        setBatSpeed: h,
        speedMetric: x,
        setSpeedMetric: w,
        isShortRuns: j,
        setIsShortRuns: k,
        penaltyRuns: b,
        setPenaltyRuns: C,
        fielder1: N,
        setFielder1: v,
        fielder2: R,
        setFielder2: M,
        team2Players: I,
        isWicketModalVisible: D,
        setIsWicketModalVisible: q,
        wicketType: H,
      } = Ge(),
      $ = ["KPH", "MPH"];
    return i.jsxs("div", {
      className: "bg-secondary500 mt-1 rounded",
      children: [
        i.jsxs("div", {
          className: "flex justify-between shadow-md",
          children: [
            i.jsxs("div", {
              className: "flex gap-2 justify-center lg:pl-4 ",
              children: [
                i.jsx(su, {
                  activeLabel: "B",
                  inactiveLabel: "B",
                  activeColor: "bg-primary500 bg-opacity-40",
                  inactiveColor: "bg-secondary1000",
                  isToggled: a,
                  setIsToggled: l,
                }),
                i.jsx(su, {
                  activeLabel: "LB",
                  inactiveLabel: "LB",
                  activeColor: "bg-primary500 bg-opacity-40",
                  inactiveColor: "bg-secondary1000",
                  isToggled: c,
                  setIsToggled: u,
                }),
                i.jsx("button", {
                  className: `${
                    H ? "bg-red-900" : "bg-secondary1000"
                  }  my-1 rounded px-2`,
                  onClick: () => {
                    q(!0);
                  },
                  children: H || "Wicket",
                }),
              ],
            }),
            i.jsxs("button", {
              className: "bg-secondary250 flex justify-between p-1 rounded-t",
              onClick: () => {
                t((L) => !L);
              },
              children: [
                i.jsx("p", { className: "px-4" }),
                e ? i.jsx(Ny, {}) : i.jsx(Ey, {}),
              ],
            }),
          ],
        }),
        e &&
          i.jsxs("div", {
            className: "px-4 py-1 transition-all delay-150",
            children: [
              i.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4",
                children: [
                  i.jsx(ru, {
                    text: "Wide",
                    children: i.jsx(Mr, {
                      options: n,
                      selectedOption: s,
                      onSelect: o,
                      classNames: "h-6 w-6 text-center p-1 rounded-full",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  i.jsxs("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: [
                      i.jsx("input", {
                        type: "number",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md ",
                        placeholder: "Ball speed",
                        onChange: (L) => {
                          g(L.target.value);
                        },
                        value: m,
                      }),
                      i.jsx("input", {
                        type: "number",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md ",
                        placeholder: "Bat speed",
                        onChange: (L) => {
                          h(L.target.value);
                        },
                        value: S,
                      }),
                      i.jsx(Mr, {
                        classNames: "text-center px-2 py-1 rounded-md",
                        options: $,
                        selectedOption: x,
                        onSelect: w,
                        selectedColor: "bg-primary500 bg-opacity-40 text-white",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-1",
                children: [
                  i.jsx(ru, {
                    text: "NB",
                    children: i.jsx(Mr, {
                      options: r,
                      selectedOption: f,
                      onSelect: d,
                      classNames: " text-center p-1 rounded",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  i.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      i.jsx("input", {
                        type: "number",
                        step: "1",
                        min: "0",
                        max: "100",
                        className:
                          "bg-secondary250 text-gray-100 px-2 rounded-md my-1",
                        placeholder: "Pnlty Runs",
                        onChange: (L) => {
                          C(L.target.value);
                        },
                        value: b,
                      }),
                      i.jsx(su, {
                        inactiveLabel: "short runs",
                        activeLabel: "Short Runs",
                        isToggled: j,
                        setIsToggled: k,
                        activeColor: "bg-primary500 bg-opacity-50",
                        inactiveColor: "bg-secondary1000",
                      }),
                      i.jsx("button", {
                        className: "px-2 my-1 bg-secondary1000 rounded-md",
                        children: "Bowler Over",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-1",
                children: [
                  i.jsx(ru, {
                    text: "O-Trw",
                    children: i.jsx(Mr, {
                      options: n,
                      selectedOption: p,
                      onSelect: y,
                      classNames: "h-6 w-6 text-center p-1 rounded-full",
                      selectedColor: "bg-accent text-white bg-opacity-40",
                    }),
                  }),
                  i.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      i.jsxs("select", {
                        name: "fielder1",
                        className: "rounded-md bg-secondary250 px-1 py-1",
                        value: N,
                        onChange: (L) => v(L.target.value),
                        children: [
                          i.jsx("option", { value: "", children: "Fielder 1" }),
                          I.map((L, _) =>
                            i.jsxs(
                              "option",
                              {
                                value: L.player.id,
                                children: [
                                  L.player.firstName,
                                  " ",
                                  L.player.middleName,
                                  " ",
                                  L.player.lastName,
                                ],
                              },
                              _
                            )
                          ),
                        ],
                      }),
                      i.jsxs("select", {
                        name: "fielder2",
                        className: "rounded-md bg-secondary250 px-1 py-1",
                        value: R,
                        onChange: (L) => M(L.target.value),
                        children: [
                          i.jsx("option", { value: "", children: "Fielder 2" }),
                          I.map((L, _) =>
                            i.jsxs(
                              "option",
                              {
                                value: L.player.id,
                                children: [
                                  L.player.firstName,
                                  " ",
                                  L.player.middleName,
                                  " ",
                                  L.player.lastName,
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
            ],
          }),
      ],
    });
  },
  fE = ({ scoreData: e }) =>
    i.jsxs("table", {
      className: "w-full text-center",
      children: [
        i.jsxs("thead", {
          className: "bg-titlebar",
          children: [
            i.jsxs("th", {
              className: "p-1 text-left flex gap-4",
              onClick: e.swapBatters,
              children: [
                "Batter Name",
                i.jsx("button", { children: i.jsx(bS, { fontSize: "small" }) }),
              ],
            }),
            i.jsx("th", { children: "Runs" }),
            i.jsx("th", { children: "Balls" }),
            i.jsx("th", { children: "4s" }),
            i.jsx("th", { children: "6s" }),
            i.jsx("th", { children: "SR" }),
          ],
        }),
        i.jsxs("tbody", {
          children: [
            i.jsxs("tr", {
              className: "border-b-1 border-titlebar rounded",
              children: [
                i.jsxs("td", {
                  className: "p-1 text-left flex gap-4",
                  onClick: e.strikerEdit,
                  children: [
                    e.strikerName,
                    i.jsx("button", {
                      className: "opacity-50",
                      children: i.jsx(Cd, {}),
                    }),
                  ],
                }),
                i.jsx("td", { children: e.strikerRuns }),
                i.jsx("td", { children: e.strikerBalls }),
                i.jsx("td", { children: e.strikerFours }),
                i.jsx("td", { children: e.strikerSixes }),
                i.jsx("td", { children: e.strikerSR }),
              ],
            }),
            i.jsxs("tr", {
              children: [
                i.jsxs("td", {
                  className: "p-1 text-left flex gap-4",
                  onClick: e.nonStrikerEdit,
                  children: [
                    e.nonStrikerName,
                    i.jsx("button", {
                      className: "opacity-50",
                      children: i.jsx(Cd, {}),
                    }),
                  ],
                }),
                i.jsx("td", { children: e.nonStrikerRuns }),
                i.jsx("td", { children: e.nonStrikerBalls }),
                i.jsx("td", { children: e.nonStrikerFours }),
                i.jsx("td", { children: e.nonStrikerSixes }),
                i.jsx("td", { children: e.nonStrikerSR }),
              ],
            }),
          ],
        }),
      ],
    });
function pE({ scoreData: e }) {
  return i.jsxs("div", {
    className: " text-center bg-ball500 rounded-xl p-1",
    children: [
      i.jsx("p", { className: "font-bold", children: e.teamName }),
      i.jsxs("p", {
        className:
          "text-xl border-b-1 border-gray-600 p-1 text-yellow-500 font-bold font-orbitron",
        children: [e.teamScore, " / ", e.teamWickets],
      }),
      i.jsxs("div", {
        className: "flex justify-evenly",
        children: [
          i.jsxs("div", {
            children: [
              i.jsx("p", { children: "Overs" }),
              i.jsx("p", { className: "font-bold", children: e.teamOvers }),
            ],
          }),
          i.jsx("div", { className: "h-full border-l-2 border-gray-500" }),
          i.jsxs("div", {
            children: [
              i.jsx("p", { children: "RR" }),
              i.jsx("p", { className: "font-bold", children: e.teamRunRate }),
            ],
          }),
        ],
      }),
    ],
  });
}
const hE = ({ scoreData: e }) =>
    i.jsxs("table", {
      className: "w-full text-center",
      children: [
        i.jsxs("thead", {
          className: "bg-titlebar",
          children: [
            i.jsx("th", { className: "p-1 text-left", children: "Bowler" }),
            i.jsx("th", { children: "Over" }),
            i.jsx("th", { children: "Run" }),
            i.jsx("th", { children: "WKT" }),
            i.jsx("th", { children: "ECON" }),
          ],
        }),
        i.jsx("tbody", {
          children: i.jsxs("tr", {
            className: "border-b-1 border-titlebar rounded",
            children: [
              i.jsxs("td", {
                className: "p-1 text-left flex gap-4",
                onClick: e.bowlerEdit,
                children: [
                  e.bowlerName,
                  i.jsx("p", {
                    className: "opacity-50",
                    children: i.jsx(Cd, {}),
                  }),
                ],
              }),
              i.jsx("td", { children: e.bowlerOver }),
              i.jsx("td", { children: e.bowlerRun }),
              i.jsx("td", { children: e.bowlerWicket }),
              i.jsx("td", { children: e.bowlerEconomy }),
            ],
          }),
        }),
      ],
    }),
  mE = () => {
    const [e, t] = E.useState(!0),
      [n, r] = E.useState(!1);
    E.useState(!1);
    const {
        striker: s,
        setStriker: o,
        nonStriker: a,
        setNonStriker: l,
        bowler: c,
        setBowler: u,
        battingTeam: f,
        bowlingTeam: d,
        targetRuns: p,
        isScorecardModalVisible: y,
        setIsScorecardModalVisible: m,
      } = Ge(),
      g = () => {
        const h = { ...s };
        o({ ...a }), l({ ...h });
      },
      S = {
        teamName: (f == null ? void 0 : f.shortName) || "Team A",
        bowlingTeamName: (d == null ? void 0 : d.shortName) || "Team B",
        teamScore: (f == null ? void 0 : f.teamRuns) || "0",
        teamWickets: (f == null ? void 0 : f.teamWickets) || "0",
        teamOvers: (f == null ? void 0 : f.teamOvers) || "0",
        teamRunRate: (f == null ? void 0 : f.teamRunRate) || "0",
        swapBatters: g,
        strikerName: (s == null ? void 0 : s.name) || "striker",
        strikerEdit: (h) => {
          o({ ...h, isModalVisible: !0 });
        },
        strikerRuns: (s == null ? void 0 : s.runsScored) || 0,
        strikerBalls: (s == null ? void 0 : s.ballsFaced) || 0,
        strikerFours: (s == null ? void 0 : s.fours) || 0,
        strikerSixes: (s == null ? void 0 : s.sixes) || 0,
        strikerSR: (s == null ? void 0 : s.strikeRate) || 0,
        nonStrikerName: (a == null ? void 0 : a.name) || "Non Striker",
        nonStrikerEdit: (h) => {
          l({ ...h, isModalVisible: !0 });
        },
        nonStrikerRuns: (a == null ? void 0 : a.runsScored) || 0,
        nonStrikerBalls: (a == null ? void 0 : a.ballsFaced) || 0,
        nonStrikerFours: (a == null ? void 0 : a.fours) || 0,
        nonStrikerSixes: (a == null ? void 0 : a.sixes) || 0,
        nonStrikerSR: (a == null ? void 0 : a.strikeRate) || 0,
        bowlerName: (c == null ? void 0 : c.name) || "Bowler",
        bowlerEdit: (h) => {
          u({ ...h, isModalVisible: !0 });
        },
        bowlerOver: (c == null ? void 0 : c.oversBowled) || 0,
        bowlerRun: (c == null ? void 0 : c.runsConceeded) || 0,
        bowlerWicket: (c == null ? void 0 : c.wicketsTaken) || 0,
        bowlerEconomy: (c == null ? void 0 : c.economy) || 0,
      };
    return i.jsxs("div", {
      className: "bg-secondary500 mt-2 rounded",
      children: [
        i.jsxs("div", {
          className: "flex justify-between shadow-md",
          children: [
            i.jsxs("p", {
              className: "p-1 px-4",
              children: [S.teamName, " vs ", S.bowlingTeamName],
            }),
            i.jsxs("p", { children: ["Target: ", p] }),
            i.jsxs("button", {
              className: "bg-secondary250 flex justify-between p-1 rounded-t",
              onClick: () => {
                t((h) => !h);
              },
              children: [
                i.jsx("p", { className: "px-4" }),
                e ? i.jsx(Ny, {}) : i.jsx(Ey, {}),
              ],
            }),
          ],
        }),
        e &&
          i.jsxs("div", {
            children: [
              i.jsxs("div", {
                className: "grid grid-cols-4 gap-2 py-2 px-4",
                children: [
                  i.jsx("div", {
                    className: "col-span-3",
                    children: i.jsx(fE, { scoreData: S }),
                  }),
                  i.jsx("div", {
                    className: "col-span-1",
                    children: i.jsx(pE, { scoreData: S }),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "grid grid-cols-4 gap-2 py-2 px-4",
                children: [
                  i.jsx("div", {
                    className: "col-span-3",
                    children: i.jsx(hE, { scoreData: S }),
                  }),
                  i.jsxs("div", {
                    className: "col-span-1 flex flex-col gap-2",
                    children: [
                      i.jsxs("button", {
                        className: `${
                          n ? "bg-blue-800" : "bg-secondary250"
                        } px-2 py-1 rounded shadow-xl flex justify-between gap-2 items-center bg-opacity-80`,
                        onClick: () => {
                          r((h) => !h);
                        },
                        children: [
                          n ? "Edit This Ball" : "This Ball",
                          i.jsx(CS, { fontSize: "small" }),
                        ],
                      }),
                      i.jsx("button", {
                        className:
                          "bg-secondary250 px-2 py-2 rounded shadow-xl flex justify-between gap-2 items-center bg-opacity-80",
                        onClick: () => {
                          m(!0);
                        },
                        children: "Show Scorecard",
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
  gE = () =>
    i.jsxs("div", {
      className: "xl:w-5/12",
      children: [i.jsx(uE, {}), i.jsx(dE, {}), i.jsx(mE, {})],
    }),
  sa = ({
    imageUrl: e,
    width: t,
    height: n,
    ballSize: r,
    onCoordinateChange: s,
    position: o,
    isWagonWheel: a = !1,
  }) => {
    const [l, c] = E.useState(o || { x: null, y: null }),
      u = E.useRef(null),
      f = E.useRef(null);
    E.useEffect(() => {
      l.x !== null && l.y !== null && a && p();
    }, [l]);
    const d = (y) => {
        const m = y.target.getBoundingClientRect(),
          g = y.clientX - m.left,
          S = y.clientY - m.top,
          h = { x: g, y: S };
        c(h), s(h);
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
      E.useEffect(() => {
        o == null ? c({ x: null, y: null }) : console.log("POS is not null");
      }, [o]),
      i.jsxs("div", {
        className: "relative",
        style: { width: `${t}px`, height: `${n}px` },
        onClick: d,
        children: [
          i.jsx("img", {
            ref: u,
            src: e,
            alt: "Ball Tracking Area",
            style: { width: "100%", height: "100%", objectFit: "cover" },
            className: "rounded-b-lg",
          }),
          i.jsx("canvas", {
            ref: f,
            className: "absolute top-0 left-0",
            width: t,
            height: n,
            style: { pointerEvents: "none" },
          }),
          l.x !== null &&
            l.y !== null &&
            i.jsx("div", {
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
  yE = () => {
    const {
        shotZonePosition: e,
        setShotZonePosition: t,
        wagonWheelPosition: n,
        setWagonWheelPosition: r,
        wicketKeeperPosition: s,
        setWicketKeeperPosition: o,
        bowlerReleaseSide: a,
        setBowlerReleaseSide: l,
        bowlerReleaseBallPosition: c,
        setBowlerReleaseBallPosition: u,
        trajectoryBallPosition: f,
        setTrajectoryBallPosition: d,
      } = Ge(),
      [p, y] = E.useState(!0),
      [m, g] = E.useState(!1),
      S = ["WK UP", "WK BACK"],
      h = ["Around", "Over"],
      x = (N) => {
        console.log("Bowler Release Coordinates:", N), u(N);
      },
      w = (N) => {
        console.log("Trajectory Coordinates:", N), d(N);
      },
      j = (N) => {
        console.log("Shot Zone Coordinates:", N), t(N);
      },
      k = (N) => {
        console.log("Wagon Wheel Coordinates:", N), r(N);
      },
      b = () => {
        y(!0), g(!1);
      },
      C = () => {
        y(!1), g(!0);
      };
    return i.jsxs("div", {
      className:
        "xl:w-2/12 flex gap-4 overflow-x-scroll xl:flex-col xl:gap-0 xl:overflow-x-visible my-4 xl:my-0 justify-around",
      children: [
        i.jsxs("div", {
          className: "my-2 xl:my-0",
          children: [
            i.jsxs("div", {
              className:
                "bg-secondary1000 flex text-center w-2/3 justify-evenly rounded-t-lg",
              children: [
                i.jsx("button", {
                  className: ` ${
                    p ? "bg-primary500" : ""
                  } p-1 w-1/2 rounded-tl-lg`,
                  onClick: b,
                  children: "Shot Zone",
                }),
                i.jsx("button", {
                  className: ` ${
                    m ? "bg-primary500" : ""
                  } p-1 rounded-tr-lg w-1/2`,
                  onClick: C,
                  children: "Wagon Wheel",
                }),
              ],
            }),
            p &&
              i.jsx(sa, {
                imageUrl: "https://i.imgur.com/WeRPvU5.jpeg",
                width: 250,
                height: 250,
                ballSize: 10,
                onCoordinateChange: j,
                position: e,
              }),
            m &&
              i.jsx(sa, {
                imageUrl:
                  "https://analyzesmart.wordpress.com/wp-content/uploads/2015/03/wagonwheel3.png",
                width: 250,
                height: 250,
                ballSize: 10,
                onCoordinateChange: k,
                position: n,
                isWagonWheel: !0,
              }),
          ],
        }),
        i.jsxs("div", {
          className: "xl:mt-2 my-2",
          children: [
            i.jsx("div", {
              className:
                "bg-secondary1000 flex text-center w-full justify-evenly rounded-t-lg py-1",
              children: i.jsx(Mr, {
                classNames: "py-1 px-2 rounded-md",
                options: S,
                selectedOption: s,
                onSelect: o,
                selectedColor: "bg-primary500 text-white",
              }),
            }),
            i.jsx(sa, {
              imageUrl: "https://i.imgur.com/c1RIRh4.jpeg",
              width: 250,
              height: 250,
              ballSize: 10,
              onCoordinateChange: w,
              position: f,
            }),
          ],
        }),
        i.jsxs("div", {
          className: "xl:mt-2 my-2",
          children: [
            i.jsx("div", {
              className:
                "bg-secondary1000 flex text-center w-full justify-evenly rounded-t-lg py-1",
              children: i.jsx(Mr, {
                classNames: "py-1 px-4 rounded-md",
                options: h,
                selectedOption: a,
                onSelect: l,
                selectedColor: "bg-primary500 text-white",
              }),
            }),
            i.jsx(sa, {
              imageUrl: "https://i.imgur.com/EHa8Yfw.jpeg",
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
  ou = ({
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
      ? i.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70",
          children: i.jsxs("div", {
            className:
              "bg-secondary1000 text-gray-100 rounded-lg max-w-2xl w-full",
            children: [
              i.jsx("p", {
                className:
                  "mb-4 font-bold p-2 text-center bg-titlebar rounded-t-lg",
                children: t,
              }),
              i.jsx("div", {
                className: "p-4",
                children: i.jsx("div", {
                  className: "grid grid-cols-3 gap-4",
                  children: n.map((a) =>
                    i.jsxs(
                      "button",
                      {
                        onClick: () => {
                          r({
                            id: a.player.id,
                            name: a.player.firstName + " " + a.player.lastName,
                            runsScored: a.runs_scored,
                            ballsFaced: a.balls_faced,
                            fours: a.fours,
                            sixes: a.sixes,
                            strikeRate: a.strike_rate,
                            oversBowled: a.overs_bowled,
                            runsConceeded: a.runs_conceded,
                            wicketsTaken: a.wickets_taken,
                            economy: a.economy,
                            isModalVisible: !1,
                          });
                        },
                        className: `${
                          a.player.id == s ? "bg-blue-800" : "bg-secondary500"
                        }
                  ${
                    a.has_dismissed > 0 && o == "batsman"
                      ? "text-gray-400 opacity-70 hover:bg-red-500 hover:text-gray-300"
                      : "hover:bg-green-700"
                  }
                  ${a.overs_bowled > 0 && o == "bowler" ? "" : "bg-opacity-50"}
                 py-1 px-2 rounded-lg flex justify-center gap-4 text-gray-300`,
                        children: [
                          i.jsxs("p", {
                            className: "text-sm",
                            children: [
                              a.player.firstName,
                              " ",
                              a.player.middleName,
                              " ",
                              a.player.lastName,
                            ],
                          }),
                          a.balls_faced > 0 &&
                            o == "batsman" &&
                            i.jsxs("p", {
                              className: "text-xs",
                              children: [
                                a.runs_scored,
                                " (",
                                a.balls_faced,
                                ")",
                              ],
                            }),
                          a.overs_bowled > 0 &&
                            o == "bowler" &&
                            i.jsx("p", { children: a.overs_bowled }),
                        ],
                      },
                      a.player.id
                    )
                  ),
                }),
              }),
            ],
          }),
        })
      : null;
async function xE({ id: e }) {
  try {
    return (await ge.get(`match/ultimate-match/${e}`)).data;
  } catch (t) {
    console.log("Error ", t);
  }
}
async function vE({ matchId: e, teamId: t }) {
  try {
    return (await ge.get(`match/squad/${e}/team/${t}`)).data;
  } catch (n) {
    console.log("Error ", n);
  }
}
const wE = ({
  title: e = "Select Wicket",
  options: t = ["Bowled", "Caught & Bowled", "Run Out", "Caught", "Stumped"],
  onSelect: n = null,
}) => {
  const {
      team2Players: r,
      striker: s,
      nonStriker: o,
      bowler: a,
      wicketType: l,
      setWicketType: c,
      isWicketModalVisible: u,
      setIsWicketModalVisible: f,
      dismissedPlayer: d,
      setDismissedPlayer: p,
      dismissedBy: y,
      setDismissedBy: m,
      caughtBy: g,
      setCaughtBy: S,
      stumpedBy: h,
      setStumpedBy: x,
      runOutFielder1: w,
      setRunOutFielder1: j,
      runOutFielder2: k,
      setRunOutFielder2: b,
    } = Ge(),
    C = (v) => l === v,
    N = (v) => {
      c(v),
        d || p(s.id),
        l !== "Caught" && S(""),
        l !== "Run Out" && (j(""), b("")),
        l !== "Stumped By" && x(""),
        l == "Bowled" || l == "Caught and Bowled" || l == "LBW" || l == "Caught"
          ? m(a.id)
          : m("");
    };
  return u
    ? i.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70",
        children: i.jsxs("div", {
          className:
            "bg-secondary1000 bg-opacity-90 text-gray-100 rounded-lg max-w-md w-full",
          children: [
            i.jsx("p", {
              className:
                "mb-4 font-bold p-2 text-center bg-gradient-to-r from-titlebar to-secondary500 rounded-t-lg bg-opacity-90",
              children: e,
            }),
            i.jsx("div", {
              className: "p-4",
              children: i.jsxs("div", {
                className: "container mx-auto p-4 flex flex-col gap-4",
                children: [
                  i.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      i.jsx("p", { children: "Dismissed Player *" }),
                      i.jsxs("select", {
                        name: "dismissedPlayer",
                        id: "",
                        value: d,
                        onChange: (v) => {
                          p(v.target.value);
                        },
                        className:
                          "rounded bg-secondary500 mb-4 transition-all duration-50 ease-linear w-1/2 py-2 px-2",
                        children: [
                          i.jsx("option", {
                            value: s.id,
                            selected: !0,
                            children: s.name,
                          }),
                          i.jsx("option", { value: o.id, children: o.name }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "flex gap-4",
                    children: ["Bowled", "LBW", "Caught and Bowled"].map((v) =>
                      i.jsx(
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
                  i.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      i.jsxs("div", {
                        className: "grid grid-cols-2",
                        children: [
                          i.jsx("p", {
                            className: `px-2 py-1 rounded wicket-div cursor-pointer ${
                              C("Caught") ? "bg-blue-700" : "bg-secondary200"
                            }`,
                            onClick: () => N("Caught"),
                            children: "Caught By",
                          }),
                          i.jsxs("select", {
                            name: "caughtBy",
                            className: `rounded bg-secondary500 px-1 transition-all duration-50 ease-linear ${
                              C("Caught") ? "scale-100" : "scale-0"
                            }`,
                            value: g,
                            onChange: (v) => {
                              S(v.target.value), N("Caught");
                            },
                            children: [
                              i.jsx("option", { value: "", children: "None" }),
                              r.map((v, R) =>
                                i.jsxs(
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
                                  R
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "grid grid-cols-2",
                        children: [
                          i.jsx("p", {
                            className: `px-2 py-1 rounded wicket-div cursor-pointer ${
                              C("Stumped By")
                                ? "bg-blue-700"
                                : "bg-secondary200"
                            }`,
                            onClick: () => N("Stumped By"),
                            children: "Stumped By",
                          }),
                          i.jsxs("select", {
                            name: "stumpedBy",
                            className: `rounded bg-secondary500 px-1 transition-all duration-50 ease-linear ${
                              C("Stumped By") ? "scale-100" : "scale-0"
                            }`,
                            value: h,
                            onChange: (v) => {
                              x(v.target.value), N("Stumped By");
                            },
                            children: [
                              i.jsx("option", { value: "", children: "None" }),
                              r.map((v, R) =>
                                i.jsxs(
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
                                  R
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "flex gap-4",
                    children: [
                      "Retire Hurt",
                      "Retire Out",
                      "Retire Not Out",
                    ].map((v) =>
                      i.jsx(
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
                  i.jsx("div", {
                    className: "flex gap-4",
                    children: ["Absent Hurt", "Obstructing the Field"].map(
                      (v) =>
                        i.jsx(
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
                  i.jsxs("div", {
                    className: "grid grid-cols-2 gap-y-4",
                    children: [
                      i.jsx("p", {
                        className: `px-2 py-1 rounded wicket-div cursor-pointer text-center ${
                          C("Run Out") ? "bg-blue-700" : "bg-secondary200"
                        }`,
                        onClick: () => N("Run Out"),
                        children: "Run Out",
                      }),
                      i.jsxs("select", {
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
                          i.jsx("option", {
                            value: s.id,
                            selected: !0,
                            children: s.name,
                          }),
                          i.jsx("option", { value: o.id, children: o.name }),
                        ],
                      }),
                      i.jsxs("select", {
                        name: "runOutFielder1",
                        className: `rounded bg-secondary500 px-1 py-1 border-r-4 border-secondary1000 transition-all duration-50 ease-linear ${
                          C("Run Out") ? "scale-100" : "scale-0"
                        }`,
                        value: w,
                        onChange: (v) => {
                          j(v.target.value), N("Run Out");
                        },
                        children: [
                          i.jsx("option", { value: "", children: "Fielder 1" }),
                          r.map((v, R) =>
                            i.jsxs(
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
                              R
                            )
                          ),
                        ],
                      }),
                      i.jsxs("select", {
                        name: "runOutFielder2",
                        className: `rounded bg-secondary500 border-r-4 border-secondary1000 px-1 transition-all duration-50 ease-linear ${
                          C("Run Out") ? "scale-100" : "scale-0"
                        }`,
                        value: k,
                        onChange: (v) => {
                          b(v.target.value), N("Run Out");
                        },
                        children: [
                          i.jsx("option", { value: "", children: "Fielder 2" }),
                          r.map((v, R) =>
                            i.jsxs(
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
                              R
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs("div", {
              className: "px-4 pb-4 flex justify-end gap-4",
              children: [
                i.jsxs("button", {
                  className:
                    "bg-gray-700 px-2 py-1 rounded flex gap-2 opacity-70",
                  onClick: () => {
                    c(""), p(""), m(""), S(""), x(""), j(""), b("");
                  },
                  children: ["Reset", i.jsx(PS, { fontSize: "small" })],
                }),
                i.jsxs("button", {
                  className:
                    "bg-primary500 px-2 py-1 rounded flex gap-2 opacity-50",
                  onClick: () => {
                    f(!1);
                  },
                  children: ["Done", i.jsx(OS, { fontSize: "small" })],
                }),
              ],
            }),
          ],
        }),
      })
    : null;
};
function SE({ isVisible: e, onClose: t }) {
  const {
      matchId: n,
      currentInnings: r,
      matchType: s,
      battingTeam: o,
      bowlingTeam: a,
      targetRuns: l,
      setTargetRuns: c,
      setTeamLeadBy: u,
      setStriker: f,
      setNonStriker: d,
      setBowler: p,
      setInningsToBeUpdated: y,
      teamLeadBy: m,
    } = Ge(),
    [g, S] = E.useState(""),
    h = Ut(),
    x = async () => {
      (await gn({ matchId: n, matchEnded: !0, matchResult: "Match Ended" }))
        .matchEnded
        ? h("/match")
        : X.error("Something went wrong, Please try Again!");
    },
    w = async () => {
      const j = Ge.getState().battingTeam;
      if (s.isLimitedOvers)
        r % 2 != 0 || (r % 2 == 0 && j.teamRuns == l)
          ? (c(j.teamRuns),
            console.log("target runs ", j.teamRuns),
            await Jt({
              matchId: n,
              innings: r + 1,
              targetRuns: j.teamRuns,
              leadingTeam: o.id,
              currentSuperOverCount:
                r == 1 ? "" : r % 2 == 0 ? r / 2 : (r + 1) / 2,
            }),
            f({}),
            d({}),
            p({}),
            y(r + 1))
          : j.teamRuns > l
          ? (
              await gn({
                matchId: n,
                matchEnded: !0,
                matchResult: "Match Ended",
              })
            ).matchEnded
            ? h("/match")
            : X.error("Something went wrong, Please try Again!")
          : j.teamRuns < l &&
            ((
              await gn({
                matchId: n,
                matchEnded: !0,
                matchResult: "Match Ended",
              })
            ).matchEnded
              ? h("/match")
              : X.error("Something went wrong, Please try Again!")),
          t();
      else if ((console.log("Leading Team chose To ", g), r == 1))
        c(j.teamRuns),
          await Jt({
            matchId: n,
            innings: 2,
            targetRuns: j.teamRuns,
            leadingTeam: o.id,
          }),
          f({}),
          d({}),
          p({}),
          y(2),
          t();
      else if (r == 2)
        if (!g) X.error("Please select the decision of the Leading Team!");
        else {
          if (j.teamRuns > l) {
            if ((u(o.id), c(j.teamRuns - l), g == "batting")) {
              const k = o.id,
                b = a.id,
                C = a.id,
                N = o.id;
              await Jt({
                matchId: n,
                innings: 3,
                targetRuns: j.teamRuns - l,
                leadingTeam: o.id,
                leadingTeamChoseTo: g,
                thirdInningsBattingTeam: k,
                thirdInningsBowlingTeam: b,
                fourthInningsBattingTeam: C,
                fourthInningsBowlingTeam: N,
              });
            } else if (g == "bowling") {
              const k = a.id,
                b = o.id,
                C = o.id,
                N = a.id;
              await Jt({
                matchId: n,
                innings: 3,
                targetRuns: j.teamRuns - l,
                leadingTeam: o.id,
                leadingTeamChoseTo: g,
                thirdInningsBattingTeam: k,
                thirdInningsBowlingTeam: b,
                fourthInningsBattingTeam: C,
                fourthInningsBowlingTeam: N,
              });
            }
          } else if ((u(a.id), c(l - j.teamRuns), g == "batting")) {
            const k = a.id,
              b = o.id,
              C = o.id,
              N = a.id;
            await Jt({
              matchId: n,
              innings: 3,
              targetRuns: l - j.teamRuns,
              leadingTeam: a.id,
              thirdInningsBattingTeam: k,
              thirdInningsBowlingTeam: b,
              fourthInningsBattingTeam: C,
              fourthInningsBowlingTeam: N,
            });
          } else if (g == "bowling") {
            const k = o.id,
              b = a.id,
              C = a.id,
              N = o.id;
            await Jt({
              matchId: n,
              innings: 3,
              targetRuns: l - j.teamRuns,
              leadingTeam: a.id,
              thirdInningsBattingTeam: k,
              thirdInningsBowlingTeam: b,
              fourthInningsBattingTeam: C,
              fourthInningsBowlingTeam: N,
            });
          }
          f({}), d({}), p({}), y(3), t();
        }
      else
        r == 3
          ? (o.id == m
              ? (c(l + j.teamRuns),
                Jt({
                  matchId: n,
                  innings: 4,
                  targetRuns: l + j.teamRuns,
                  leadingTeam: o.id,
                }))
              : l > j.teamRuns
              ? (
                  await gn({
                    matchId: n,
                    matchEnded: !0,
                    matchResult: "Match Ended",
                  })
                ).matchEnded
                ? h("/match")
                : X.error("Something went wrong, Please try Again!")
              : (c(j.teamRuns - l),
                Jt({
                  matchId: n,
                  innings: 4,
                  targetRuns: j.teamRuns - l,
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
              ? h("/match")
              : X.error("Something went wrong, Please try Again!"),
            t());
    };
  return e
    ? i.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-md",
        children: i.jsxs("div", {
          className:
            "bg-secondary1000 text-gray-100 rounded-lg max-w-md w-full",
          children: [
            i.jsx("p", {
              className:
                "mb-4 font-bold p-2 text-center bg-titlebar rounded-t-lg",
              children: "Match Saving Options",
            }),
            i.jsx("div", {
              className: "p-4",
              children: i.jsxs("div", {
                className: "grid grid-cols-1 gap-4 ",
                children: [
                  i.jsxs("div", {
                    className: "flex flex-col gap-4 ",
                    children: [
                      i.jsx("div", {
                        className:
                          "bg-secondary200 text-center py-2 rounded-md group hover:bg-secondary500",
                        children: i.jsx(ie, {
                          to: "/match",
                          children: i.jsxs("p", {
                            className: "flex gap-2 justify-center",
                            children: [
                              i.jsx(ES, { fontSize: "small" }),
                              "Save & Edit-Later",
                            ],
                          }),
                        }),
                      }),
                      i.jsxs("select", {
                        name: "teamChooseTo",
                        id: "",
                        className: `bg-secondary200 p-2 ${
                          !s.isLimitedOvers && r == 2 ? "" : "hidden"
                        } `,
                        onChange: (j) => {
                          S(j.target.value), console.log(j.target.value);
                        },
                        children: [
                          i.jsx("option", {
                            value: "",
                            children: "Leading Team Choose To",
                          }),
                          i.jsx("option", {
                            value: "batting",
                            children: "Bat",
                          }),
                          i.jsx("option", {
                            value: "bowling",
                            children: "Bowl",
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: w,
                        children: i.jsxs("div", {
                          className:
                            "bg-secondary200 text-center py-2 rounded-md flex gap-2 justify-center hover:bg-secondary500",
                          children: [
                            i.jsx(SS, { fontSize: "small" }),
                            "End Innings",
                          ],
                        }),
                      }),
                    ],
                  }),
                  i.jsx("p", {
                    className: "text-center",
                    children: "Match result",
                  }),
                  i.jsxs("select", {
                    name: "teamChooseTo",
                    id: "",
                    className: "bg-secondary200 p-2 ",
                    children: [
                      i.jsx("option", { value: "", children: "Tied" }),
                      i.jsxs("option", {
                        value: `${o.name} won the match`,
                        children: [o.name, " won"],
                      }),
                      i.jsxs("option", {
                        value: `${a.name} won the match`,
                        children: [a.name, " won"],
                      }),
                    ],
                  }),
                  i.jsx("button", {
                    onClick: x,
                    children: i.jsxs("div", {
                      className:
                        "bg-primary500 text-center py-2 rounded-md flex gap-2 justify-center hover:bg-opacity-70",
                      children: [i.jsx(NS, { fontSize: "small" }), "End Match"],
                    }),
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className: "flex justify-end p-2",
              children: i.jsx("button", {
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
const CE = ({ isVisible: e, onClose: t }) => {
    const {
        striker: n,
        setStriker: r,
        nonStriker: s,
        setNonStriker: o,
        bowler: a,
        setBowler: l,
        battingTeam: c,
        bowlingTeam: u,
        team1Players: f,
        team2Players: d,
        targetRuns: p,
        isScorecardModalVisible: y,
        setIsScorecardModalVisible: m,
        currentInnings: g,
      } = Ge(),
      S = {
        teamName: (c == null ? void 0 : c.shortName) || "Team A",
        bowlingTeamName: (u == null ? void 0 : u.shortName) || "Team B",
        teamScore: (c == null ? void 0 : c.teamRuns) || "0",
        teamWickets: (c == null ? void 0 : c.teamWickets) || "0",
        teamOvers: (c == null ? void 0 : c.teamOvers) || "0",
        teamRunRate: (c == null ? void 0 : c.teamRunRate) || "0",
        strikerName: (n == null ? void 0 : n.name) || "striker",
        strikerEdit: (h) => {
          r({ ...h, isModalVisible: !0 });
        },
        strikerRuns: (n == null ? void 0 : n.runsScored) || 0,
        strikerBalls: (n == null ? void 0 : n.ballsFaced) || 0,
        strikerFours: (n == null ? void 0 : n.fours) || 0,
        strikerSixes: (n == null ? void 0 : n.sixes) || 0,
        strikerSR: (n == null ? void 0 : n.strikeRate) || 0,
        nonStrikerName: (s == null ? void 0 : s.name) || "Non Striker",
        nonStrikerEdit: (h) => {
          o({ ...h, isModalVisible: !0 });
        },
        nonStrikerRuns: (s == null ? void 0 : s.runsScored) || 0,
        nonStrikerBalls: (s == null ? void 0 : s.ballsFaced) || 0,
        nonStrikerFours: (s == null ? void 0 : s.fours) || 0,
        nonStrikerSixes: (s == null ? void 0 : s.sixes) || 0,
        nonStrikerSR: (s == null ? void 0 : s.strikeRate) || 0,
        bowlerName: (a == null ? void 0 : a.name) || "Bowler",
        bowlerEdit: (h) => {
          l({ ...h, isModalVisible: !0 });
        },
        bowlerOver: (a == null ? void 0 : a.oversBowled) || 0,
        bowlerRun: (a == null ? void 0 : a.runsConceeded) || 0,
        bowlerWicket: (a == null ? void 0 : a.wicketsTaken) || 0,
        bowlerEconomy: (a == null ? void 0 : a.economy) || 0,
      };
    return e
      ? i.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-md",
          children: i.jsxs("div", {
            className:
              "bg-secondary1000 text-gray-100 rounded-lg max-w-2xl w-full",
            children: [
              i.jsxs("p", {
                className:
                  "mb-4 font-bold p-2 text-center bg-titlebar rounded-t-lg",
                children: [
                  "Live Scorecard - ",
                  S.teamName,
                  " vs ",
                  S.bowlingTeamName,
                ],
              }),
              i.jsxs("div", {
                className:
                  "py-2 px-4 bg-secondary250 flex justify-between items-center",
                children: [
                  i.jsxs("p", {
                    className: "text-md",
                    children: [S.teamName, " Batting Summary"],
                  }),
                  i.jsxs("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      i.jsx("p", {
                        className: "text-lg",
                        children: S.teamName,
                      }),
                      i.jsxs("p", {
                        className:
                          "text-xl  text-yellow-500 font-bold font-orbitron",
                        children: [S.teamScore, " / ", S.teamWickets],
                      }),
                      i.jsxs("p", { children: ["( ", S.teamOvers, " Ov )"] }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "p-2 px-8",
                children: [
                  i.jsxs("div", {
                    className: "flex w-full bg-secondary200 bg-opacity-50 p-1",
                    children: [
                      i.jsx("p", { className: "w-7/12", children: "Batter" }),
                      i.jsx("p", { className: "w-1/12", children: "R" }),
                      i.jsx("p", { className: "w-1/12", children: "B" }),
                      i.jsx("p", { className: "w-1/12", children: "4s" }),
                      i.jsx("p", { className: "w-1/12", children: "6s" }),
                      i.jsx("p", { className: "w-1/12", children: "SR" }),
                    ],
                  }),
                  i.jsx("div", {
                    children: f.map(
                      (h) =>
                        (h.balls_faced > 0 ||
                          h.player.id == n.id ||
                          h.player.id == s.id) &&
                        i.jsxs("div", {
                          className: `flex w-full p-1 ${
                            h.has_dismissed
                              ? "bg-red-400 bg-opacity-10 opacity-40"
                              : "bg-secondary200 bg-opacity-10"
                          }`,
                          children: [
                            i.jsxs("p", {
                              className: "w-7/12",
                              children: [
                                h.player.firstName,
                                " ",
                                h.player.lastName,
                                " ",
                                h.player.id == n.id ? "*" : "",
                              ],
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.runs_scored,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.balls_faced,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.fours,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.sixes,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: (
                                (h.runs_scored / h.balls_faced) *
                                100
                              ).toFixed(2),
                            }),
                          ],
                        })
                    ),
                  }),
                  i.jsxs("div", {
                    className: "py-4 flex gap-4 opacity-80",
                    children: [
                      i.jsx("p", {
                        className: "w-2/12",
                        children: "Yet To Bat : ",
                      }),
                      i.jsx("div", {
                        className: "w-10/12",
                        children: f.map(
                          (h) =>
                            !h.has_dismissed &&
                            h.player.id != n.id &&
                            h.player.id != s.id &&
                            i.jsxs(i.Fragment, {
                              children: [
                                h.player.firstName,
                                " ",
                                h.player.middleName,
                                " ",
                                h.player.lastName,
                                ",",
                                " ",
                              ],
                            })
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "p-2 px-8",
                children: [
                  i.jsxs("div", {
                    className: "flex w-full bg-secondary200 bg-opacity-50 p-1",
                    children: [
                      i.jsx("p", { className: "w-8/12", children: "Bowler" }),
                      i.jsx("p", { className: "w-1/12", children: "O" }),
                      i.jsx("p", { className: "w-1/12", children: "R" }),
                      i.jsx("p", { className: "w-1/12", children: "W" }),
                      i.jsx("p", { className: "w-1/12", children: "Econ" }),
                    ],
                  }),
                  i.jsx("div", {
                    children: f.map(
                      (h) =>
                        (h.overs_bowled > 0 || h.player.id == a.id) &&
                        i.jsxs("div", {
                          className: `flex w-full p-1 ${
                            h.player.id == a.id
                              ? ""
                              : "bg-secondary200 bg-opacity-10 opacity-50"
                          }`,
                          children: [
                            i.jsxs("p", {
                              className: "w-8/12",
                              children: [
                                h.player.firstName,
                                " ",
                                h.player.lastName,
                                " ",
                                h.player.id == n.id ? "*" : "",
                              ],
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.overs_bowled,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.runs_conceded,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: h.wickets_taken,
                            }),
                            i.jsx("p", {
                              className: "w-1/12",
                              children: (
                                (h.runs_conceded /
                                  (Math.floor(h.overs_bowled) * 6 +
                                    (h.overs_bowled % 1) * 10)) *
                                6
                              ).toFixed(2),
                            }),
                          ],
                        })
                    ),
                  }),
                ],
              }),
              i.jsx("div", {
                className: "p-2 flex justify-end",
                children: i.jsx("button", {
                  onClick: t,
                  className:
                    " px-4 py-2 rounded-lg hover:bg-gray-700 underline",
                  children: "Hide",
                }),
              }),
            ],
          }),
        })
      : null;
  },
  bE = () => {
    const [e] = jt(),
      t = e.get("id"),
      {
        setMatchId: n,
        matchType: r,
        battingTeam: s,
        bowlingTeam: o,
        team1Players: a,
        team2Players: l,
        striker: c,
        nonStriker: u,
        bowler: f,
        setMatchType: d,
        setTeam1Players: p,
        setTeam2Players: y,
        setStriker: m,
        setNonStriker: g,
        setBowler: S,
        setBattingTeam: h,
        setBowlingTeam: x,
        setCurrentInnings: w,
        isSaveMatchModalVisible: j,
        setIsSaveMatchModalVisible: k,
        inningsToBeUpdated: b,
        setTargetRuns: C,
        setBallNumber: N,
        isScorecardModalVisible: v,
        setIsScorecardModalVisible: R,
        resetAll: M,
      } = Ge(),
      I = async ($) => {
        try {
          const L = await vE({ matchId: t, teamId: $ });
          return Array.isArray(L) && L.length > 0 ? L[0].players : [];
        } catch (L) {
          return console.log("Error ", L), [];
        }
      };
    E.useEffect(() => {
      n(t),
        m(""),
        g(""),
        S(""),
        M(),
        k(!1),
        (async () => {
          try {
            const _ = await xE({ id: t });
            if (
              (d(_.matchType),
              w(_.currentInnings),
              console.log("ultimate match data ", _),
              console.log("ballNumber ", _.player_data.ballNumber),
              _.player_data.ballNumber ? N(_.player_data.ballNumber) : N(0),
              C(_.currentTarget),
              _.matchType.isLimitedOvers)
            ) {
              const O = (_.currentInnings - 1) % 4;
              if (O === 0 || O === 3) {
                const B = await I(_.firstInningsBattingTeam.id),
                  z = await I(_.firstInningsBowlingTeam.id);
                p(B), y(z);
                var L = { ..._.firstInningsBattingTeam };
                (L.teamRuns = _.team_stats.total_runs),
                  (L.teamWickets = _.team_stats.wickets_taken),
                  (L.teamOvers = _.team_stats.overs_bowled),
                  (L.teamRunRate = _.team_stats.run_rate),
                  h(L),
                  x({ ..._.firstInningsBowlingTeam }),
                  B.map((T) => {
                    T.player.id == _.player_data.striker &&
                      m({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceeded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      }),
                      T.player.id == _.player_data.non_striker &&
                        g({
                          id: T.player.id,
                          name: T.player.firstName + " " + T.player.lastName,
                          runsScored: T.runs_scored,
                          ballsFaced: T.balls_faced,
                          fours: T.fours,
                          sixes: T.sixes,
                          strikeRate: T.strike_rate,
                          oversBowled: T.overs_bowled,
                          runsConceeded: T.runs_conceeded,
                          wicketsTaken: T.wickets_taken,
                          economy: T.economy,
                          isModalVisible: !1,
                        });
                  }),
                  z.map((T) => {
                    T.player.id == _.player_data.bowler &&
                      S({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      });
                  });
              } else {
                const B = await I(_.secondInningsBattingTeam.id),
                  z = await I(_.secondInningsBowlingTeam.id);
                p(B), y(z);
                var L = { ..._.secondInningsBattingTeam };
                (L.teamRuns = _.team_stats.total_runs),
                  (L.teamWickets = _.team_stats.wickets_taken),
                  (L.teamOvers = _.team_stats.overs_bowled),
                  (L.teamRunRate = _.team_stats.run_rate),
                  h(L),
                  x({ ..._.secondInningsBowlingTeam }),
                  B.map((Z) => {
                    Z.player.id == _.player_data.striker &&
                      m({
                        id: Z.player.id,
                        name: Z.player.firstName + " " + Z.player.lastName,
                        runsScored: Z.runs_scored,
                        ballsFaced: Z.balls_faced,
                        fours: Z.fours,
                        sixes: Z.sixes,
                        strikeRate: Z.strike_rate,
                        oversBowled: Z.overs_bowled,
                        runsConceeded: Z.runs_conceeded,
                        wicketsTaken: Z.wickets_taken,
                        economy: Z.economy,
                        isModalVisible: !1,
                      }),
                      Z.player.id == _.player_data.non_striker &&
                        g({
                          id: Z.player.id,
                          name: Z.player.firstName + " " + Z.player.lastName,
                          runsScored: Z.runs_scored,
                          ballsFaced: Z.balls_faced,
                          fours: Z.fours,
                          sixes: Z.sixes,
                          strikeRate: Z.strike_rate,
                          oversBowled: Z.overs_bowled,
                          runsConceeded: Z.runs_conceeded,
                          wicketsTaken: Z.wickets_taken,
                          economy: Z.economy,
                          isModalVisible: !1,
                        });
                  });
              }
            } else if (_.currentInnings === 1) {
              const O = await I(_.firstInningsBattingTeam.id),
                B = await I(_.firstInningsBowlingTeam.id);
              p(O), y(B);
              var L = { ..._.firstInningsBattingTeam };
              (L.teamRuns = _.team_stats.total_runs),
                (L.teamWickets = _.team_stats.wickets_taken),
                (L.teamOvers = _.team_stats.overs_bowled),
                (L.teamRunRate = _.team_stats.run_rate),
                h(L),
                x({ ..._.firstInningsBowlingTeam }),
                O.map((T) => {
                  T.player.id == _.player_data.striker &&
                    m({
                      id: T.player.id,
                      name: T.player.firstName + " " + T.player.lastName,
                      runsScored: T.runs_scored,
                      ballsFaced: T.balls_faced,
                      fours: T.fours,
                      sixes: T.sixes,
                      strikeRate: T.strike_rate,
                      oversBowled: T.overs_bowled,
                      runsConceeded: T.runs_conceeded,
                      wicketsTaken: T.wickets_taken,
                      economy: T.economy,
                      isModalVisible: !1,
                    }),
                    T.player.id == _.player_data.non_striker &&
                      g({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceeded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      });
                }),
                B.map((T) => {
                  T.player.id == _.player_data.bowler &&
                    S({
                      id: T.player.id,
                      name: T.player.firstName + " " + T.player.lastName,
                      runsScored: T.runs_scored,
                      ballsFaced: T.balls_faced,
                      fours: T.fours,
                      sixes: T.sixes,
                      strikeRate: T.strike_rate,
                      oversBowled: T.overs_bowled,
                      runsConceeded: T.runs_conceded,
                      wicketsTaken: T.wickets_taken,
                      economy: T.economy,
                      isModalVisible: !1,
                    });
                });
            } else if (_.currentInnings === 2) {
              console.log("Setting Innings 2");
              const O = await I(_.secondInningsBattingTeam.id),
                B = await I(_.secondInningsBowlingTeam.id);
              p(O), y(B);
              var L = { ..._.secondInningsBattingTeam };
              (L.teamRuns = _.team_stats.total_runs),
                (L.teamWickets = _.team_stats.wickets_taken),
                (L.teamOvers = _.team_stats.overs_bowled),
                (L.teamRunRate = _.team_stats.run_rate),
                h(L),
                x({ ..._.secondInningsBowlingTeam }),
                O.map((T) => {
                  T.player.id == _.player_data.striker &&
                    m({
                      id: T.player.id,
                      name: T.player.firstName + " " + T.player.lastName,
                      runsScored: T.runs_scored,
                      ballsFaced: T.balls_faced,
                      fours: T.fours,
                      sixes: T.sixes,
                      strikeRate: T.strike_rate,
                      oversBowled: T.overs_bowled,
                      runsConceeded: T.runs_conceeded,
                      wicketsTaken: T.wickets_taken,
                      economy: T.economy,
                      isModalVisible: !1,
                    }),
                    T.player.id == _.player_data.non_striker &&
                      g({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceeded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      });
                });
            } else if (_.currentInnings === 3) {
              const O = await I(_.thirdInningsBattingTeam.id),
                B = await I(_.thirdInningsBowlingTeam.id);
              p(O), y(B);
              var L = { ..._.thirdInningsBattingTeam };
              (L.teamRuns = _.team_stats.total_runs),
                (L.teamWickets = _.team_stats.wickets_taken),
                (L.teamOvers = _.team_stats.overs_bowled),
                (L.teamRunRate = _.team_stats.run_rate),
                h(L),
                x({ ..._.thirdInningsBowlingTeam }),
                O.map((T) => {
                  T.player.id == _.player_data.striker &&
                    m({
                      id: T.player.id,
                      name: T.player.firstName + " " + T.player.lastName,
                      runsScored: T.runs_scored,
                      ballsFaced: T.balls_faced,
                      fours: T.fours,
                      sixes: T.sixes,
                      strikeRate: T.strike_rate,
                      oversBowled: T.overs_bowled,
                      runsConceeded: T.runs_conceeded,
                      wicketsTaken: T.wickets_taken,
                      economy: T.economy,
                      isModalVisible: !1,
                    }),
                    T.player.id == _.player_data.non_striker &&
                      g({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceeded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      });
                });
            } else if (_.currentInnings === 4) {
              const O = await I(_.fourthInningsBattingTeam.id),
                B = await I(_.fourthInningsBowlingTeam.id);
              p(O), y(B);
              var L = { ..._.fourthInningsBattingTeam };
              (L.teamRuns = _.team_stats.total_runs),
                (L.teamWickets = _.team_stats.wickets_taken),
                (L.teamOvers = _.team_stats.overs_bowled),
                (L.teamRunRate = _.team_stats.run_rate),
                h(L),
                x({ ..._.fourthInningsBowlingTeam }),
                O.map((T) => {
                  T.player.id == _.player_data.striker &&
                    m({
                      id: T.player.id,
                      name: T.player.firstName + " " + T.player.lastName,
                      runsScored: T.runs_scored,
                      ballsFaced: T.balls_faced,
                      fours: T.fours,
                      sixes: T.sixes,
                      strikeRate: T.strike_rate,
                      oversBowled: T.overs_bowled,
                      runsConceeded: T.runs_conceeded,
                      wicketsTaken: T.wickets_taken,
                      economy: T.economy,
                      isModalVisible: !1,
                    }),
                    T.player.id == _.player_data.non_striker &&
                      g({
                        id: T.player.id,
                        name: T.player.firstName + " " + T.player.lastName,
                        runsScored: T.runs_scored,
                        ballsFaced: T.balls_faced,
                        fours: T.fours,
                        sixes: T.sixes,
                        strikeRate: T.strike_rate,
                        oversBowled: T.overs_bowled,
                        runsConceeded: T.runs_conceeded,
                        wicketsTaken: T.wickets_taken,
                        economy: T.economy,
                        isModalVisible: !1,
                      });
                });
            }
          } catch (_) {
            console.log("Error ", _);
          }
        })();
    }, [t, d, p, y, b]);
    const D = ($) => {
        u.id === $.id
          ? X.error("Both Striker and Non Striker Can't be same!")
          : m($);
      },
      q = ($) => {
        c.id === $.id
          ? X.error("Both Striker and Non Striker Can't be same!")
          : g($);
      },
      H = ($) => {
        S($);
      };
    return i.jsxs(PC, {
      children: [
        i.jsxs("div", {
          className:
            "xl:flex p-2 xl:gap-8 xl:flex-row flex-col gap-4 text-gray-100 text-xs",
          children: [i.jsx(gE, {}), i.jsx(yE, {}), i.jsx(LC, {})],
        }),
        i.jsx(ou, {
          title: "Select Bowler",
          options: l,
          isVisible: f.name ? f.isModalVisible : "true",
          onSelect: H,
          selectedPlayerId: f.id,
          type: "bowler",
        }),
        i.jsx(ou, {
          title: "Select Non Striker",
          options: a,
          isVisible: u ? u.isModalVisible : "true",
          onSelect: q,
          selectedPlayerId: u.id,
        }),
        i.jsx(ou, {
          title: "Select Striker",
          options: a,
          isVisible: c ? c.isModalVisible : "true",
          onSelect: D,
          selectedPlayerId: c.id,
        }),
        i.jsx(wE, {}),
        i.jsx(SE, {
          isVisible: j,
          onClose: () => {
            k(!1);
          },
        }),
        i.jsx(CE, {
          isVisible: v,
          onClose: () => {
            R(!1);
          },
        }),
      ],
    });
  },
  jE = () =>
    i.jsx(Cn, {
      children: i.jsx(Q, { path: "/ball", element: i.jsx(bE, {}) }),
    }),
  kE = () =>
    i.jsxs(w4, {
      children: [
        i.jsx(V7, { position: "top-right", reverseOrder: !1 }),
        i.jsx(X7, {}),
        i.jsx(oS, {}),
        i.jsx(wS, {}),
        i.jsx(XS, {}),
        i.jsx(rC, {}),
        i.jsx(lC, {}),
        i.jsx(mC, {}),
        i.jsx(wC, {}),
        i.jsx(MC, {}),
        i.jsx(jE, {}),
      ],
    });
sg(document.getElementById("root")).render(
  i.jsx(E.StrictMode, { children: i.jsx(kE, {}) })
);
