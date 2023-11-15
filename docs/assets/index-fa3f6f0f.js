function Kp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
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
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bc = { exports: {} },
  Bo = {},
  Jc = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl = Symbol.for("react.element"),
  Jp = Symbol.for("react.portal"),
  Yp = Symbol.for("react.fragment"),
  Xp = Symbol.for("react.strict_mode"),
  qp = Symbol.for("react.profiler"),
  Gp = Symbol.for("react.provider"),
  Zp = Symbol.for("react.context"),
  eh = Symbol.for("react.forward_ref"),
  th = Symbol.for("react.suspense"),
  nh = Symbol.for("react.memo"),
  rh = Symbol.for("react.lazy"),
  us = Symbol.iterator;
function lh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xc = Object.assign,
  qc = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qc),
    (this.updater = n || Yc);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gc() {}
Gc.prototype = xr.prototype;
function Ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qc),
    (this.updater = n || Yc);
}
var Za = (Ga.prototype = new Gc());
Za.constructor = Ga;
Xc(Za, xr.prototype);
Za.isPureReactComponent = !0;
var ss = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  eu = { current: null },
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function tf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zc.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Sl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: eu.current,
  };
}
function oh(e, t) {
  return {
    $$typeof: Sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sl;
}
function ih(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cs = /\/+/g;
function vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ih("" + e.key)
    : t.toString(36);
}
function ql(e, t, n, r, l) {
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
          case Sl:
          case Jp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + vi(i, 0) : r),
      ss(l)
        ? ((n = ""),
          e != null && (n = e.replace(cs, "$&/") + "/"),
          ql(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (tu(l) &&
            (l = oh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(cs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ss(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + vi(o, a);
      i += ql(o, t, n, u, l);
    }
  else if (((u = lh(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + vi(o, a++)), (i += ql(o, t, n, u, l));
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
function zl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ql(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ah(e) {
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
var He = { current: null },
  Gl = { transition: null },
  uh = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Gl,
    ReactCurrentOwner: eu,
  };
b.Children = {
  map: zl,
  forEach: function (e, t, n) {
    zl(
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
      zl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
b.Component = xr;
b.Fragment = Yp;
b.Profiler = qp;
b.PureComponent = Ga;
b.StrictMode = Xp;
b.Suspense = th;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
b.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = eu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Zc.call(t, u) &&
        !ef.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Sl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
b.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gp, _context: e }),
    (e.Consumer = e)
  );
};
b.createElement = tf;
b.createFactory = function (e) {
  var t = tf.bind(null, e);
  return (t.type = e), t;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (e) {
  return { $$typeof: eh, render: e };
};
b.isValidElement = tu;
b.lazy = function (e) {
  return { $$typeof: rh, _payload: { _status: -1, _result: e }, _init: ah };
};
b.memo = function (e, t) {
  return { $$typeof: nh, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
b.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
b.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
b.useContext = function (e) {
  return He.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
b.useId = function () {
  return He.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
b.useRef = function (e) {
  return He.current.useRef(e);
};
b.useState = function (e) {
  return He.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
  return He.current.useTransition();
};
b.version = "18.2.0";
Jc.exports = b;
var _ = Jc.exports;
const sh = bp(_),
  ch = Kp({ __proto__: null, default: sh }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh = _,
  dh = Symbol.for("react.element"),
  ph = Symbol.for("react.fragment"),
  hh = Object.prototype.hasOwnProperty,
  mh = fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function nf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) hh.call(t, r) && !yh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: dh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mh.current,
  };
}
Bo.Fragment = ph;
Bo.jsx = nf;
Bo.jsxs = nf;
bc.exports = Bo;
var R = bc.exports,
  Xi = {},
  rf = { exports: {} },
  et = {},
  lf = { exports: {} },
  of = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, j) {
    var U = O.length;
    O.push(j);
    e: for (; 0 < U; ) {
      var ne = (U - 1) >>> 1,
        de = O[ne];
      if (0 < l(de, j)) (O[ne] = j), (O[U] = de), (U = ne);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var j = O[0],
      U = O.pop();
    if (U !== j) {
      O[0] = U;
      e: for (var ne = 0, de = O.length, pt = de >>> 1; ne < pt; ) {
        var q = 2 * (ne + 1) - 1,
          Se = O[q],
          Ue = q + 1,
          bt = O[Ue];
        if (0 > l(Se, U))
          Ue < de && 0 > l(bt, Se)
            ? ((O[ne] = bt), (O[Ue] = U), (ne = Ue))
            : ((O[ne] = Se), (O[q] = U), (ne = q));
        else if (Ue < de && 0 > l(bt, U)) (O[ne] = bt), (O[Ue] = U), (ne = Ue);
        else break e;
      }
    }
    return j;
  }
  function l(O, j) {
    var U = O.sortIndex - j.sortIndex;
    return U !== 0 ? U : O.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    h = null,
    m = 3,
    x = !1,
    y = !1,
    g = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= O)
        r(s), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(s);
    }
  }
  function d(O) {
    if (((g = !1), v(O), !y))
      if (n(u) !== null) (y = !0), Pe(k);
      else {
        var j = n(s);
        j !== null && We(d, j.startTime - O);
      }
  }
  function k(O, j) {
    (y = !1), g && ((g = !1), p(D), (D = -1)), (x = !0);
    var U = m;
    try {
      for (
        v(j), h = n(u);
        h !== null && (!(h.expirationTime > j) || (O && !ve()));

      ) {
        var ne = h.callback;
        if (typeof ne == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var de = ne(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof de == "function" ? (h.callback = de) : h === n(u) && r(u),
            v(j);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var pt = !0;
      else {
        var q = n(s);
        q !== null && We(d, q.startTime - j), (pt = !1);
      }
      return pt;
    } finally {
      (h = null), (m = U), (x = !1);
    }
  }
  var L = !1,
    T = null,
    D = -1,
    K = 5,
    B = -1;
  function ve() {
    return !(e.unstable_now() - B < K);
  }
  function Z() {
    if (T !== null) {
      var O = e.unstable_now();
      B = O;
      var j = !0;
      try {
        j = T(!0, O);
      } finally {
        j ? nt() : ((L = !1), (T = null));
      }
    } else L = !1;
  }
  var nt;
  if (typeof f == "function")
    nt = function () {
      f(Z);
    };
  else if (typeof MessageChannel < "u") {
    var Ct = new MessageChannel(),
      rt = Ct.port2;
    (Ct.port1.onmessage = Z),
      (nt = function () {
        rt.postMessage(null);
      });
  } else
    nt = function () {
      P(Z, 0);
    };
  function Pe(O) {
    (T = O), L || ((L = !0), nt());
  }
  function We(O, j) {
    D = P(function () {
      O(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), Pe(k));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var U = m;
      m = j;
      try {
        return O();
      } finally {
        m = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, j) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var U = m;
      m = O;
      try {
        return j();
      } finally {
        m = U;
      }
    }),
    (e.unstable_scheduleCallback = function (O, j, U) {
      var ne = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? ne + U : ne))
          : (U = ne),
        O)
      ) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return (
        (de = U + de),
        (O = {
          id: c++,
          callback: j,
          priorityLevel: O,
          startTime: U,
          expirationTime: de,
          sortIndex: -1,
        }),
        U > ne
          ? ((O.sortIndex = U),
            t(s, O),
            n(u) === null &&
              O === n(s) &&
              (g ? (p(D), (D = -1)) : (g = !0), We(d, U - ne)))
          : ((O.sortIndex = de), t(u, O), y || x || ((y = !0), Pe(k))),
        O
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (O) {
      var j = m;
      return function () {
        var U = m;
        m = j;
        try {
          return O.apply(this, arguments);
        } finally {
          m = U;
        }
      };
    });
})(of);
lf.exports = of;
var vh = lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af = _,
  Ze = vh;
function N(e) {
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
var uf = new Set(),
  tl = {};
function Un(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (tl[e] = t, e = 0; e < t.length; e++) uf.add(t[e]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qi = Object.prototype.hasOwnProperty,
  gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fs = {},
  ds = {};
function wh(e) {
  return qi.call(ds, e)
    ? !0
    : qi.call(fs, e)
    ? !1
    : gh.test(e)
    ? (ds[e] = !0)
    : ((fs[e] = !0), !1);
}
function xh(e, t, n, r) {
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
function Sh(e, t, n, r) {
  if (t === null || typeof t > "u" || xh(e, t, n, r)) return !0;
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
function Ve(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nu = /[\-:]([a-z])/g;
function ru(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nu, ru);
    Le[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nu, ru);
    Le[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nu, ru);
  Le[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lu(e, t, n, r) {
  var l = Le.hasOwnProperty(t) ? Le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sh(t, n, l, r) && (n = null),
    r || l === null
      ? wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ml = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Qn = Symbol.for("react.fragment"),
  ou = Symbol.for("react.strict_mode"),
  Gi = Symbol.for("react.profiler"),
  sf = Symbol.for("react.provider"),
  cf = Symbol.for("react.context"),
  iu = Symbol.for("react.forward_ref"),
  Zi = Symbol.for("react.suspense"),
  ea = Symbol.for("react.suspense_list"),
  au = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  ff = Symbol.for("react.offscreen"),
  ps = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ps && e[ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  gi;
function $r(e) {
  if (gi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gi = (t && t[1]) || "";
    }
  return (
    `
` +
    gi +
    e
  );
}
var wi = !1;
function xi(e, t) {
  if (!e || wi) return "";
  wi = !0;
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (wi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $r(e) : "";
}
function Eh(e) {
  switch (e.tag) {
    case 5:
      return $r(e.type);
    case 16:
      return $r("Lazy");
    case 13:
      return $r("Suspense");
    case 19:
      return $r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xi(e.type, !1)), e;
    case 11:
      return (e = xi(e.type.render, !1)), e;
    case 1:
      return (e = xi(e.type, !0)), e;
    default:
      return "";
  }
}
function ta(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qn:
      return "Fragment";
    case Wn:
      return "Portal";
    case Gi:
      return "Profiler";
    case ou:
      return "StrictMode";
    case Zi:
      return "Suspense";
    case ea:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cf:
        return (e.displayName || "Context") + ".Consumer";
      case sf:
        return (e._context.displayName || "Context") + ".Provider";
      case iu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case au:
        return (
          (t = e.displayName || null), t !== null ? t : ta(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return ta(e(t));
        } catch {}
    }
  return null;
}
function kh(e) {
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
      return ta(t);
    case 8:
      return t === ou ? "StrictMode" : "Mode";
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
function pn(e) {
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
function df(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ch(e) {
  var t = df(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
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
function Fl(e) {
  e._valueTracker || (e._valueTracker = Ch(e));
}
function pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = df(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function po(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function na(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hf(e, t) {
  (t = t.checked), t != null && lu(e, "checked", t, !1);
}
function ra(e, t) {
  hf(e, t);
  var n = pn(t.value),
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
    ? la(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && la(e, t.type, pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ms(e, t, n) {
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
function la(e, t, n) {
  (t !== "number" || po(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pn(n) };
}
function mf(e, t) {
  var n = pn(t.value),
    r = pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Al,
  vf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Al = Al || document.createElement("div"),
          Al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
  Rh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
  Rh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function gf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Nh = fe(
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
function aa(e, t) {
  if (t) {
    if (Nh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ua(e, t) {
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
var sa = null;
function uu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ca = null,
  or = null,
  ir = null;
function gs(e) {
  if ((e = Cl(e))) {
    if (typeof ca != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Qo(t)), ca(e.stateNode, e.type, t));
  }
}
function xf(e) {
  or ? (ir ? ir.push(e) : (ir = [e])) : (or = e);
}
function Sf() {
  if (or) {
    var e = or,
      t = ir;
    if (((ir = or = null), gs(e), t)) for (e = 0; e < t.length; e++) gs(t[e]);
  }
}
function Ef(e, t) {
  return e(t);
}
function kf() {}
var Si = !1;
function Cf(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return Ef(e, t, n);
  } finally {
    (Si = !1), (or !== null || ir !== null) && (kf(), Sf());
  }
}
function rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qo(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var fa = !1;
if ($t)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        fa = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    fa = !1;
  }
function Ph(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Kr = !1,
  ho = null,
  mo = !1,
  da = null,
  _h = {
    onError: function (e) {
      (Kr = !0), (ho = e);
    },
  };
function Th(e, t, n, r, l, o, i, a, u) {
  (Kr = !1), (ho = null), Ph.apply(_h, arguments);
}
function Oh(e, t, n, r, l, o, i, a, u) {
  if ((Th.apply(this, arguments), Kr)) {
    if (Kr) {
      var s = ho;
      (Kr = !1), (ho = null);
    } else throw Error(N(198));
    mo || ((mo = !0), (da = s));
  }
}
function In(e) {
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
function Rf(e) {
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
function ws(e) {
  if (In(e) !== e) throw Error(N(188));
}
function Lh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ws(l), e;
        if (o === r) return ws(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Nf(e) {
  return (e = Lh(e)), e !== null ? Pf(e) : null;
}
function Pf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _f = Ze.unstable_scheduleCallback,
  xs = Ze.unstable_cancelCallback,
  jh = Ze.unstable_shouldYield,
  Dh = Ze.unstable_requestPaint,
  ye = Ze.unstable_now,
  zh = Ze.unstable_getCurrentPriorityLevel,
  su = Ze.unstable_ImmediatePriority,
  Tf = Ze.unstable_UserBlockingPriority,
  yo = Ze.unstable_NormalPriority,
  Mh = Ze.unstable_LowPriority,
  Of = Ze.unstable_IdlePriority,
  $o = null,
  Tt = null;
function Fh(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function")
    try {
      Tt.onCommitFiberRoot($o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : Ih,
  Ah = Math.log,
  Uh = Math.LN2;
function Ih(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ah(e) / Uh) | 0)) | 0;
}
var Ul = 64,
  Il = 4194304;
function Vr(e) {
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
function vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Vr(a)) : ((o &= i), o !== 0 && (r = Vr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Vr(i)) : o !== 0 && (r = Vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bh(e, t) {
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
function $h(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - St(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Bh(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lf() {
  var e = Ul;
  return (Ul <<= 1), !(Ul & 4194240) && (Ul = 64), e;
}
function Ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function El(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Hh(e, t) {
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
    var l = 31 - St(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Df,
  fu,
  zf,
  Mf,
  Ff,
  ha = !1,
  Bl = [],
  ln = null,
  on = null,
  an = null,
  ll = new Map(),
  ol = new Map(),
  en = [],
  Vh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ss(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      ll.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ol.delete(t.pointerId);
  }
}
function Or(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Cl(t)), t !== null && fu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Wh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ln = Or(ln, e, t, n, r, l)), !0;
    case "dragenter":
      return (on = Or(on, e, t, n, r, l)), !0;
    case "mouseover":
      return (an = Or(an, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ll.set(o, Or(ll.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ol.set(o, Or(ol.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Af(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rf(n)), t !== null)) {
          (e.blockedOn = t),
            Ff(e.priority, function () {
              zf(n);
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
function Zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sa = r), n.target.dispatchEvent(r), (sa = null);
    } else return (t = Cl(n)), t !== null && fu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Zl(e) && n.delete(t);
}
function Qh() {
  (ha = !1),
    ln !== null && Zl(ln) && (ln = null),
    on !== null && Zl(on) && (on = null),
    an !== null && Zl(an) && (an = null),
    ll.forEach(Es),
    ol.forEach(Es);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ha ||
      ((ha = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Qh)));
}
function il(e) {
  function t(l) {
    return Lr(l, e);
  }
  if (0 < Bl.length) {
    Lr(Bl[0], e);
    for (var n = 1; n < Bl.length; n++) {
      var r = Bl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && Lr(ln, e),
      on !== null && Lr(on, e),
      an !== null && Lr(an, e),
      ll.forEach(t),
      ol.forEach(t),
      n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    Af(n), n.blockedOn === null && en.shift();
}
var ar = Qt.ReactCurrentBatchConfig,
  go = !0;
function Kh(e, t, n, r) {
  var l = G,
    o = ar.transition;
  ar.transition = null;
  try {
    (G = 1), du(e, t, n, r);
  } finally {
    (G = l), (ar.transition = o);
  }
}
function bh(e, t, n, r) {
  var l = G,
    o = ar.transition;
  ar.transition = null;
  try {
    (G = 4), du(e, t, n, r);
  } finally {
    (G = l), (ar.transition = o);
  }
}
function du(e, t, n, r) {
  if (go) {
    var l = ma(e, t, n, r);
    if (l === null) ji(e, t, r, wo, n), Ss(e, r);
    else if (Wh(l, e, t, n, r)) r.stopPropagation();
    else if ((Ss(e, r), t & 4 && -1 < Vh.indexOf(e))) {
      for (; l !== null; ) {
        var o = Cl(l);
        if (
          (o !== null && Df(o),
          (o = ma(e, t, n, r)),
          o === null && ji(e, t, r, wo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ji(e, t, r, null, n);
  }
}
var wo = null;
function ma(e, t, n, r) {
  if (((wo = null), (e = uu(r)), (e = Nn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wo = e), null;
}
function Uf(e) {
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
      switch (zh()) {
        case su:
          return 1;
        case Tf:
          return 4;
        case yo:
        case Mh:
          return 16;
        case Of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  pu = null,
  eo = null;
function If() {
  if (eo) return eo;
  var e,
    t = pu,
    n = t.length,
    r,
    l = "value" in nn ? nn.value : nn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (eo = l.slice(e, 1 < r ? 1 - r : void 0));
}
function to(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $l() {
  return !0;
}
function ks() {
  return !1;
}
function tt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? $l
        : ks),
      (this.isPropagationStopped = ks),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $l));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $l));
      },
      persist: function () {},
      isPersistent: $l,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hu = tt(Sr),
  kl = fe({}, Sr, { view: 0, detail: 0 }),
  Jh = tt(kl),
  ki,
  Ci,
  jr,
  Ho = fe({}, kl, {
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
    getModifierState: mu,
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
        : (e !== jr &&
            (jr && e.type === "mousemove"
              ? ((ki = e.screenX - jr.screenX), (Ci = e.screenY - jr.screenY))
              : (Ci = ki = 0),
            (jr = e)),
          ki);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ci;
    },
  }),
  Cs = tt(Ho),
  Yh = fe({}, Ho, { dataTransfer: 0 }),
  Xh = tt(Yh),
  qh = fe({}, kl, { relatedTarget: 0 }),
  Ri = tt(qh),
  Gh = fe({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zh = tt(Gh),
  em = fe({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tm = tt(em),
  nm = fe({}, Sr, { data: 0 }),
  Rs = tt(nm),
  rm = {
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
  lm = {
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
  om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function im(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
}
function mu() {
  return im;
}
var am = fe({}, kl, {
    key: function (e) {
      if (e.key) {
        var t = rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = to(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lm[e.keyCode] || "Unidentified"
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
    getModifierState: mu,
    charCode: function (e) {
      return e.type === "keypress" ? to(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? to(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  um = tt(am),
  sm = fe({}, Ho, {
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
  Ns = tt(sm),
  cm = fe({}, kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  fm = tt(cm),
  dm = fe({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = tt(dm),
  hm = fe({}, Ho, {
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
  mm = tt(hm),
  ym = [9, 13, 27, 32],
  yu = $t && "CompositionEvent" in window,
  br = null;
$t && "documentMode" in document && (br = document.documentMode);
var vm = $t && "TextEvent" in window && !br,
  Bf = $t && (!yu || (br && 8 < br && 11 >= br)),
  Ps = String.fromCharCode(32),
  _s = !1;
function $f(e, t) {
  switch (e) {
    case "keyup":
      return ym.indexOf(t.keyCode) !== -1;
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
function Hf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function gm(e, t) {
  switch (e) {
    case "compositionend":
      return Hf(t);
    case "keypress":
      return t.which !== 32 ? null : ((_s = !0), Ps);
    case "textInput":
      return (e = t.data), e === Ps && _s ? null : e;
    default:
      return null;
  }
}
function wm(e, t) {
  if (Kn)
    return e === "compositionend" || (!yu && $f(e, t))
      ? ((e = If()), (eo = pu = nn = null), (Kn = !1), e)
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
      return Bf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xm = {
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
function Ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xm[e.type] : t === "textarea";
}
function Vf(e, t, n, r) {
  xf(r),
    (t = xo(t, "onChange")),
    0 < t.length &&
      ((n = new hu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jr = null,
  al = null;
function Sm(e) {
  ed(e, 0);
}
function Vo(e) {
  var t = Yn(e);
  if (pf(t)) return e;
}
function Em(e, t) {
  if (e === "change") return t;
}
var Wf = !1;
if ($t) {
  var Ni;
  if ($t) {
    var Pi = "oninput" in document;
    if (!Pi) {
      var Os = document.createElement("div");
      Os.setAttribute("oninput", "return;"),
        (Pi = typeof Os.oninput == "function");
    }
    Ni = Pi;
  } else Ni = !1;
  Wf = Ni && (!document.documentMode || 9 < document.documentMode);
}
function Ls() {
  Jr && (Jr.detachEvent("onpropertychange", Qf), (al = Jr = null));
}
function Qf(e) {
  if (e.propertyName === "value" && Vo(al)) {
    var t = [];
    Vf(t, al, e, uu(e)), Cf(Sm, t);
  }
}
function km(e, t, n) {
  e === "focusin"
    ? (Ls(), (Jr = t), (al = n), Jr.attachEvent("onpropertychange", Qf))
    : e === "focusout" && Ls();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vo(al);
}
function Rm(e, t) {
  if (e === "click") return Vo(t);
}
function Nm(e, t) {
  if (e === "input" || e === "change") return Vo(t);
}
function Pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Pm;
function ul(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!qi.call(t, l) || !kt(e[l], t[l])) return !1;
  }
  return !0;
}
function js(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = js(e);
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
    n = js(n);
  }
}
function Kf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bf() {
  for (var e = window, t = po(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = po(e.document);
  }
  return t;
}
function vu(e) {
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
function _m(e) {
  var t = bf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vu(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ds(n, o));
        var i = Ds(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
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
var Tm = $t && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  ya = null,
  Yr = null,
  va = !1;
function zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  va ||
    bn == null ||
    bn !== po(r) ||
    ((r = bn),
    "selectionStart" in r && vu(r)
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
    (Yr && ul(Yr, r)) ||
      ((Yr = r),
      (r = xo(ya, "onSelect")),
      0 < r.length &&
        ((t = new hu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function Hl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jn = {
    animationend: Hl("Animation", "AnimationEnd"),
    animationiteration: Hl("Animation", "AnimationIteration"),
    animationstart: Hl("Animation", "AnimationStart"),
    transitionend: Hl("Transition", "TransitionEnd"),
  },
  _i = {},
  Jf = {};
$t &&
  ((Jf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jn.animationend.animation,
    delete Jn.animationiteration.animation,
    delete Jn.animationstart.animation),
  "TransitionEvent" in window || delete Jn.transitionend.transition);
function Wo(e) {
  if (_i[e]) return _i[e];
  if (!Jn[e]) return e;
  var t = Jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jf) return (_i[e] = t[n]);
  return e;
}
var Yf = Wo("animationend"),
  Xf = Wo("animationiteration"),
  qf = Wo("animationstart"),
  Gf = Wo("transitionend"),
  Zf = new Map(),
  Ms =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Zf.set(e, t), Un(t, [e]);
}
for (var Ti = 0; Ti < Ms.length; Ti++) {
  var Oi = Ms[Ti],
    Om = Oi.toLowerCase(),
    Lm = Oi[0].toUpperCase() + Oi.slice(1);
  mn(Om, "on" + Lm);
}
mn(Yf, "onAnimationEnd");
mn(Xf, "onAnimationIteration");
mn(qf, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Gf, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Fs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Oh(r, t, void 0, e), (e.currentTarget = null);
}
function ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Fs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Fs(l, a, s), (o = u);
        }
    }
  }
  if (mo) throw ((e = da), (mo = !1), (da = null), e);
}
function le(e, t) {
  var n = t[Ea];
  n === void 0 && (n = t[Ea] = new Set());
  var r = e + "__bubble";
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function Li(e, t, n) {
  var r = 0;
  t && (r |= 4), td(n, e, r, t);
}
var Vl = "_reactListening" + Math.random().toString(36).slice(2);
function sl(e) {
  if (!e[Vl]) {
    (e[Vl] = !0),
      uf.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || Li(n, !1, e), Li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vl] || ((t[Vl] = !0), Li("selectionchange", !1, t));
  }
}
function td(e, t, n, r) {
  switch (Uf(t)) {
    case 1:
      var l = Kh;
      break;
    case 4:
      l = bh;
      break;
    default:
      l = du;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !fa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ji(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Nn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Cf(function () {
    var s = o,
      c = uu(n),
      h = [];
    e: {
      var m = Zf.get(e);
      if (m !== void 0) {
        var x = hu,
          y = e;
        switch (e) {
          case "keypress":
            if (to(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = um;
            break;
          case "focusin":
            (y = "focus"), (x = Ri);
            break;
          case "focusout":
            (y = "blur"), (x = Ri);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ri;
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
            x = Cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = fm;
            break;
          case Yf:
          case Xf:
          case qf:
            x = Zh;
            break;
          case Gf:
            x = pm;
            break;
          case "scroll":
            x = Jh;
            break;
          case "wheel":
            x = mm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ns;
        }
        var g = (t & 4) !== 0,
          P = !g && e === "scroll",
          p = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var d = v.stateNode;
          if (
            (v.tag === 5 &&
              d !== null &&
              ((v = d),
              p !== null && ((d = rl(f, p)), d != null && g.push(cl(f, d, v)))),
            P)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new x(m, y, null, n, c)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== sa &&
            (y = n.relatedTarget || n.fromElement) &&
            (Nn(y) || y[Ht]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = s),
              (y = y ? Nn(y) : null),
              y !== null &&
                ((P = In(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = s)),
          x !== y)
        ) {
          if (
            ((g = Cs),
            (d = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ns),
              (d = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (P = x == null ? m : Yn(x)),
            (v = y == null ? m : Yn(y)),
            (m = new g(d, f + "leave", x, n, c)),
            (m.target = P),
            (m.relatedTarget = v),
            (d = null),
            Nn(c) === s &&
              ((g = new g(p, f + "enter", y, n, c)),
              (g.target = v),
              (g.relatedTarget = P),
              (d = g)),
            (P = d),
            x && y)
          )
            t: {
              for (g = x, p = y, f = 0, v = g; v; v = Hn(v)) f++;
              for (v = 0, d = p; d; d = Hn(d)) v++;
              for (; 0 < f - v; ) (g = Hn(g)), f--;
              for (; 0 < v - f; ) (p = Hn(p)), v--;
              for (; f--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Hn(g)), (p = Hn(p));
              }
              g = null;
            }
          else g = null;
          x !== null && As(h, m, x, g, !1),
            y !== null && P !== null && As(h, P, y, g, !0);
        }
      }
      e: {
        if (
          ((m = s ? Yn(s) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var k = Em;
        else if (Ts(m))
          if (Wf) k = Nm;
          else {
            k = Cm;
            var L = km;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Rm);
        if (k && (k = k(e, s))) {
          Vf(h, k, n, c);
          break e;
        }
        L && L(e, m, s),
          e === "focusout" &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === "number" &&
            la(m, "number", m.value);
      }
      switch (((L = s ? Yn(s) : window), e)) {
        case "focusin":
          (Ts(L) || L.contentEditable === "true") &&
            ((bn = L), (ya = s), (Yr = null));
          break;
        case "focusout":
          Yr = ya = bn = null;
          break;
        case "mousedown":
          va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (va = !1), zs(h, n, c);
          break;
        case "selectionchange":
          if (Tm) break;
        case "keydown":
        case "keyup":
          zs(h, n, c);
      }
      var T;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Kn
          ? $f(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Bf &&
          n.locale !== "ko" &&
          (Kn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Kn && (T = If())
            : ((nn = c),
              (pu = "value" in nn ? nn.value : nn.textContent),
              (Kn = !0))),
        (L = xo(s, D)),
        0 < L.length &&
          ((D = new Rs(D, e, null, n, c)),
          h.push({ event: D, listeners: L }),
          T ? (D.data = T) : ((T = Hf(n)), T !== null && (D.data = T)))),
        (T = vm ? gm(e, n) : wm(e, n)) &&
          ((s = xo(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Rs("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: s }),
            (c.data = T)));
    }
    ed(h, t);
  });
}
function cl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = rl(e, n)),
      o != null && r.unshift(cl(e, o, l)),
      (o = rl(e, t)),
      o != null && r.push(cl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function As(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = rl(n, o)), u != null && i.unshift(cl(n, u, a)))
        : l || ((u = rl(n, o)), u != null && i.push(cl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Dm = /\r\n?/g,
  zm = /\u0000|\uFFFD/g;
function Us(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dm,
      `
`
    )
    .replace(zm, "");
}
function Wl(e, t, n) {
  if (((t = Us(t)), Us(e) !== t && n)) throw Error(N(425));
}
function So() {}
var ga = null,
  wa = null;
function xa(e, t) {
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
var Sa = typeof setTimeout == "function" ? setTimeout : void 0,
  Mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Is = typeof Promise == "function" ? Promise : void 0,
  Fm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Is < "u"
      ? function (e) {
          return Is.resolve(null).then(e).catch(Am);
        }
      : Sa;
function Am(e) {
  setTimeout(function () {
    throw e;
  });
}
function Di(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), il(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  il(t);
}
function un(e) {
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
function Bs(e) {
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
var Er = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Er,
  fl = "__reactProps$" + Er,
  Ht = "__reactContainer$" + Er,
  Ea = "__reactEvents$" + Er,
  Um = "__reactListeners$" + Er,
  Im = "__reactHandles$" + Er;
function Nn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bs(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = Bs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cl(e) {
  return (
    (e = e[Pt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Qo(e) {
  return e[fl] || null;
}
var ka = [],
  Xn = -1;
function yn(e) {
  return { current: e };
}
function oe(e) {
  0 > Xn || ((e.current = ka[Xn]), (ka[Xn] = null), Xn--);
}
function re(e, t) {
  Xn++, (ka[Xn] = e.current), (e.current = t);
}
var hn = {},
  Ae = yn(hn),
  be = yn(!1),
  jn = hn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function Eo() {
  oe(be), oe(Ae);
}
function $s(e, t, n) {
  if (Ae.current !== hn) throw Error(N(168));
  re(Ae, t), re(be, n);
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, kh(e) || "Unknown", l));
  return fe({}, n, r);
}
function ko(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (jn = Ae.current),
    re(Ae, e),
    re(be, be.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = nd(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(be),
      oe(Ae),
      re(Ae, e))
    : oe(be),
    re(be, n);
}
var Mt = null,
  Ko = !1,
  zi = !1;
function rd(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function Bm(e) {
  (Ko = !0), rd(e);
}
function vn() {
  if (!zi && Mt !== null) {
    zi = !0;
    var e = 0,
      t = G;
    try {
      var n = Mt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), (Ko = !1);
    } catch (l) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), _f(su, vn), l);
    } finally {
      (G = t), (zi = !1);
    }
  }
  return null;
}
var qn = [],
  Gn = 0,
  Co = null,
  Ro = 0,
  it = [],
  at = 0,
  Dn = null,
  Ft = 1,
  At = "";
function Cn(e, t) {
  (qn[Gn++] = Ro), (qn[Gn++] = Co), (Co = e), (Ro = t);
}
function ld(e, t, n) {
  (it[at++] = Ft), (it[at++] = At), (it[at++] = Dn), (Dn = e);
  var r = Ft;
  e = At;
  var l = 32 - St(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - St(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ft = (1 << (32 - St(t) + l)) | (n << l) | r),
      (At = o + e);
  } else (Ft = (1 << o) | (n << l) | r), (At = e);
}
function gu(e) {
  e.return !== null && (Cn(e, 1), ld(e, 1, 0));
}
function wu(e) {
  for (; e === Co; )
    (Co = qn[--Gn]), (qn[Gn] = null), (Ro = qn[--Gn]), (qn[Gn] = null);
  for (; e === Dn; )
    (Dn = it[--at]),
      (it[at] = null),
      (At = it[--at]),
      (it[at] = null),
      (Ft = it[--at]),
      (it[at] = null);
}
var Ge = null,
  qe = null,
  ie = !1,
  xt = null;
function od(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (qe = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: Ft, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ra(e) {
  if (ie) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Vs(e, t)) {
        if (Ca(e)) throw Error(N(418));
        t = un(n.nextSibling);
        var r = Ge;
        t && Vs(e, t)
          ? od(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e));
      }
    } else {
      if (Ca(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e);
    }
  }
}
function Ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function Ql(e) {
  if (e !== Ge) return !1;
  if (!ie) return Ws(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Ca(e)) throw (id(), Error(N(418)));
    for (; t; ) od(e, t), (t = un(t.nextSibling));
  }
  if ((Ws(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ge ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function id() {
  for (var e = qe; e; ) e = un(e.nextSibling);
}
function pr() {
  (qe = Ge = null), (ie = !1);
}
function xu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var $m = Qt.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var No = yn(null),
  Po = null,
  Zn = null,
  Su = null;
function Eu() {
  Su = Zn = Po = null;
}
function ku(e) {
  var t = No.current;
  oe(No), (e._currentValue = t);
}
function Na(e, t, n) {
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
function ur(e, t) {
  (Po = e),
    (Su = Zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (Su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zn === null)) {
      if (Po === null) throw Error(N(308));
      (Zn = e), (Po.dependencies = { lanes: 0, firstContext: e });
    } else Zn = Zn.next = e;
  return t;
}
var Pn = null;
function Cu(e) {
  Pn === null ? (Pn = [e]) : Pn.push(e);
}
function ad(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Cu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Vt(e, r)
  );
}
function Vt(e, t) {
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
var Gt = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
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
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Vt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Cu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Vt(e, n)
  );
}
function no(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
function Qs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
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
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
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
function _o(e, t, n, r) {
  var l = e.updateQueue;
  Gt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (c = s = u = null), (a = o);
    do {
      var m = a.lane,
        x = a.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((m = t), (x = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                h = y.call(x, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == "function" ? y.call(x, h, m) : y),
                m == null)
              )
                break e;
              h = fe({}, h, m);
              break e;
            case 2:
              Gt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = x), (u = h)) : (c = c.next = x),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Mn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var sd = new af.Component().refs;
function Pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = fn(e),
      o = Ut(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, l)),
      t !== null && (Et(t, e, l, r), no(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = fn(e),
      o = Ut(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, l)),
      t !== null && (Et(t, e, l, r), no(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = fn(e),
      l = Ut(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = sn(e, l, r)),
      t !== null && (Et(t, e, r, n), no(t, e, r));
  },
};
function bs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ul(n, r) || !ul(l, o)
      : !0
  );
}
function cd(e, t, n) {
  var r = !1,
    l = hn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ft(o))
      : ((l = Je(t) ? jn : Ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dr(e, l) : hn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bo.enqueueReplaceState(t, t.state, null);
}
function _a(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = sd), Ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ft(o))
    : ((o = Je(t) ? jn : Ae.current), (l.context = dr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Pa(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && bo.enqueueReplaceState(l, l.state, null),
      _o(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === sd && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ys(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
  function t(p, f) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [f]), (p.flags |= 16)) : v.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = dn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((p.flags |= 2), f) : v)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, v, d) {
    return f === null || f.tag !== 6
      ? ((f = $i(v, p.mode, d)), (f.return = p), f)
      : ((f = l(f, v)), (f.return = p), f);
  }
  function u(p, f, v, d) {
    var k = v.type;
    return k === Qn
      ? c(p, f, v.props.children, d, v.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === qt &&
            Ys(k) === f.type))
      ? ((d = l(f, v.props)), (d.ref = Dr(p, f, v)), (d.return = p), d)
      : ((d = uo(v.type, v.key, v.props, null, p.mode, d)),
        (d.ref = Dr(p, f, v)),
        (d.return = p),
        d);
  }
  function s(p, f, v, d) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Hi(v, p.mode, d)), (f.return = p), f)
      : ((f = l(f, v.children || [])), (f.return = p), f);
  }
  function c(p, f, v, d, k) {
    return f === null || f.tag !== 7
      ? ((f = Ln(v, p.mode, d, k)), (f.return = p), f)
      : ((f = l(f, v)), (f.return = p), f);
  }
  function h(p, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = $i("" + f, p.mode, v)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ml:
          return (
            (v = uo(f.type, f.key, f.props, null, p.mode, v)),
            (v.ref = Dr(p, null, f)),
            (v.return = p),
            v
          );
        case Wn:
          return (f = Hi(f, p.mode, v)), (f.return = p), f;
        case qt:
          var d = f._init;
          return h(p, d(f._payload), v);
      }
      if (Hr(f) || _r(f))
        return (f = Ln(f, p.mode, v, null)), (f.return = p), f;
      Kl(p, f);
    }
    return null;
  }
  function m(p, f, v, d) {
    var k = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : a(p, f, "" + v, d);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ml:
          return v.key === k ? u(p, f, v, d) : null;
        case Wn:
          return v.key === k ? s(p, f, v, d) : null;
        case qt:
          return (k = v._init), m(p, f, k(v._payload), d);
      }
      if (Hr(v) || _r(v)) return k !== null ? null : c(p, f, v, d, null);
      Kl(p, v);
    }
    return null;
  }
  function x(p, f, v, d, k) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (p = p.get(v) || null), a(f, p, "" + d, k);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ml:
          return (p = p.get(d.key === null ? v : d.key) || null), u(f, p, d, k);
        case Wn:
          return (p = p.get(d.key === null ? v : d.key) || null), s(f, p, d, k);
        case qt:
          var L = d._init;
          return x(p, f, v, L(d._payload), k);
      }
      if (Hr(d) || _r(d)) return (p = p.get(v) || null), c(f, p, d, k, null);
      Kl(f, d);
    }
    return null;
  }
  function y(p, f, v, d) {
    for (
      var k = null, L = null, T = f, D = (f = 0), K = null;
      T !== null && D < v.length;
      D++
    ) {
      T.index > D ? ((K = T), (T = null)) : (K = T.sibling);
      var B = m(p, T, v[D], d);
      if (B === null) {
        T === null && (T = K);
        break;
      }
      e && T && B.alternate === null && t(p, T),
        (f = o(B, f, D)),
        L === null ? (k = B) : (L.sibling = B),
        (L = B),
        (T = K);
    }
    if (D === v.length) return n(p, T), ie && Cn(p, D), k;
    if (T === null) {
      for (; D < v.length; D++)
        (T = h(p, v[D], d)),
          T !== null &&
            ((f = o(T, f, D)), L === null ? (k = T) : (L.sibling = T), (L = T));
      return ie && Cn(p, D), k;
    }
    for (T = r(p, T); D < v.length; D++)
      (K = x(T, p, D, v[D], d)),
        K !== null &&
          (e && K.alternate !== null && T.delete(K.key === null ? D : K.key),
          (f = o(K, f, D)),
          L === null ? (k = K) : (L.sibling = K),
          (L = K));
    return (
      e &&
        T.forEach(function (ve) {
          return t(p, ve);
        }),
      ie && Cn(p, D),
      k
    );
  }
  function g(p, f, v, d) {
    var k = _r(v);
    if (typeof k != "function") throw Error(N(150));
    if (((v = k.call(v)), v == null)) throw Error(N(151));
    for (
      var L = (k = null), T = f, D = (f = 0), K = null, B = v.next();
      T !== null && !B.done;
      D++, B = v.next()
    ) {
      T.index > D ? ((K = T), (T = null)) : (K = T.sibling);
      var ve = m(p, T, B.value, d);
      if (ve === null) {
        T === null && (T = K);
        break;
      }
      e && T && ve.alternate === null && t(p, T),
        (f = o(ve, f, D)),
        L === null ? (k = ve) : (L.sibling = ve),
        (L = ve),
        (T = K);
    }
    if (B.done) return n(p, T), ie && Cn(p, D), k;
    if (T === null) {
      for (; !B.done; D++, B = v.next())
        (B = h(p, B.value, d)),
          B !== null &&
            ((f = o(B, f, D)), L === null ? (k = B) : (L.sibling = B), (L = B));
      return ie && Cn(p, D), k;
    }
    for (T = r(p, T); !B.done; D++, B = v.next())
      (B = x(T, p, D, B.value, d)),
        B !== null &&
          (e && B.alternate !== null && T.delete(B.key === null ? D : B.key),
          (f = o(B, f, D)),
          L === null ? (k = B) : (L.sibling = B),
          (L = B));
    return (
      e &&
        T.forEach(function (Z) {
          return t(p, Z);
        }),
      ie && Cn(p, D),
      k
    );
  }
  function P(p, f, v, d) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Qn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ml:
          e: {
            for (var k = v.key, L = f; L !== null; ) {
              if (L.key === k) {
                if (((k = v.type), k === Qn)) {
                  if (L.tag === 7) {
                    n(p, L.sibling),
                      (f = l(L, v.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  L.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === qt &&
                    Ys(k) === L.type)
                ) {
                  n(p, L.sibling),
                    (f = l(L, v.props)),
                    (f.ref = Dr(p, L, v)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            v.type === Qn
              ? ((f = Ln(v.props.children, p.mode, d, v.key)),
                (f.return = p),
                (p = f))
              : ((d = uo(v.type, v.key, v.props, null, p.mode, d)),
                (d.ref = Dr(p, f, v)),
                (d.return = p),
                (p = d));
          }
          return i(p);
        case Wn:
          e: {
            for (L = v.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Hi(v, p.mode, d)), (f.return = p), (p = f);
          }
          return i(p);
        case qt:
          return (L = v._init), P(p, f, L(v._payload), d);
      }
      if (Hr(v)) return y(p, f, v, d);
      if (_r(v)) return g(p, f, v, d);
      Kl(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, v)), (f.return = p), (p = f))
          : (n(p, f), (f = $i(v, p.mode, d)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return P;
}
var hr = fd(!0),
  dd = fd(!1),
  Rl = {},
  Ot = yn(Rl),
  dl = yn(Rl),
  pl = yn(Rl);
function _n(e) {
  if (e === Rl) throw Error(N(174));
  return e;
}
function Nu(e, t) {
  switch ((re(pl, t), re(dl, e), re(Ot, Rl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ia(t, e));
  }
  oe(Ot), re(Ot, t);
}
function mr() {
  oe(Ot), oe(dl), oe(pl);
}
function pd(e) {
  _n(pl.current);
  var t = _n(Ot.current),
    n = ia(t, e.type);
  t !== n && (re(dl, e), re(Ot, n));
}
function Pu(e) {
  dl.current === e && (oe(Ot), oe(dl));
}
var se = yn(0);
function To(e) {
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
var Mi = [];
function _u() {
  for (var e = 0; e < Mi.length; e++)
    Mi[e]._workInProgressVersionPrimary = null;
  Mi.length = 0;
}
var ro = Qt.ReactCurrentDispatcher,
  Fi = Qt.ReactCurrentBatchConfig,
  zn = 0,
  ce = null,
  ke = null,
  Re = null,
  Oo = !1,
  Xr = !1,
  hl = 0,
  Hm = 0;
function ze() {
  throw Error(N(321));
}
function Tu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Ou(e, t, n, r, l, o) {
  if (
    ((zn = o),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ro.current = e === null || e.memoizedState === null ? Km : bm),
    (e = n(r, l)),
    Xr)
  ) {
    o = 0;
    do {
      if (((Xr = !1), (hl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Re = ke = null),
        (t.updateQueue = null),
        (ro.current = Jm),
        (e = n(r, l));
    } while (Xr);
  }
  if (
    ((ro.current = Lo),
    (t = ke !== null && ke.next !== null),
    (zn = 0),
    (Re = ke = ce = null),
    (Oo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Lu() {
  var e = hl !== 0;
  return (hl = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (ce.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function dt() {
  if (ke === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Re === null ? ce.memoizedState : Re.next;
  if (t !== null) (Re = t), (ke = e);
  else {
    if (e === null) throw Error(N(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Re === null ? (ce.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function ml(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ai(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ke,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((zn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
          (ce.lanes |= c),
          (Mn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      kt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ce.lanes |= o), (Mn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ui(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    kt(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function hd() {}
function md(e, t) {
  var n = ce,
    r = dt(),
    l = t(),
    o = !kt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ke = !0)),
    (r = r.queue),
    ju(gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yl(9, vd.bind(null, n, r, l, t), void 0, null),
      Ne === null)
    )
      throw Error(N(349));
    zn & 30 || yd(n, t, l);
  }
  return l;
}
function yd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && xd(e);
}
function gd(e, t, n) {
  return n(function () {
    wd(t) && xd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function xd(e) {
  var t = Vt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Xs(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qm.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function yl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sd() {
  return dt().memoizedState;
}
function lo(e, t, n, r) {
  var l = Nt();
  (ce.flags |= e),
    (l.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Jo(e, t, n, r) {
  var l = dt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ke !== null) {
    var i = ke.memoizedState;
    if (((o = i.destroy), r !== null && Tu(r, i.deps))) {
      l.memoizedState = yl(t, n, o, r);
      return;
    }
  }
  (ce.flags |= e), (l.memoizedState = yl(1 | t, n, o, r));
}
function qs(e, t) {
  return lo(8390656, 8, e, t);
}
function ju(e, t) {
  return Jo(2048, 8, e, t);
}
function Ed(e, t) {
  return Jo(4, 2, e, t);
}
function kd(e, t) {
  return Jo(4, 4, e, t);
}
function Cd(e, t) {
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
function Rd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Jo(4, 4, Cd.bind(null, t, e), n)
  );
}
function Du() {}
function Nd(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pd(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _d(e, t, n) {
  return zn & 21
    ? (kt(n, t) || ((n = Lf()), (ce.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Vm(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fi.transition;
  Fi.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Fi.transition = r);
  }
}
function Td() {
  return dt().memoizedState;
}
function Wm(e, t, n) {
  var r = fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Od(e))
  )
    Ld(t, n);
  else if (((n = ad(e, t, n, r)), n !== null)) {
    var l = $e();
    Et(n, e, r, l), jd(n, t, r);
  }
}
function Qm(e, t, n) {
  var r = fn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Od(e)) Ld(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), kt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Cu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ad(e, t, l, r)),
      n !== null && ((l = $e()), Et(n, e, r, l), jd(n, t, r));
  }
}
function Od(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function Ld(e, t) {
  Xr = Oo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
var Lo = {
    readContext: ft,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: qs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        lo(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return lo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return lo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
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
        (e = e.dispatch = Wm.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xs,
    useDebugValue: Du,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Xs(!1),
        t = e[0];
      return (e = Vm.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        l = Nt();
      if (ie) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(N(349));
        zn & 30 || yd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        qs(gd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        yl(9, vd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = Ne.identifierPrefix;
      if (ie) {
        var n = At,
          r = Ft;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: ft,
    useCallback: Nd,
    useContext: ft,
    useEffect: ju,
    useImperativeHandle: Rd,
    useInsertionEffect: Ed,
    useLayoutEffect: kd,
    useMemo: Pd,
    useReducer: Ai,
    useRef: Sd,
    useState: function () {
      return Ai(ml);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = dt();
      return _d(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Ai(ml)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: md,
    useId: Td,
    unstable_isNewReconciler: !1,
  },
  Jm = {
    readContext: ft,
    useCallback: Nd,
    useContext: ft,
    useEffect: ju,
    useImperativeHandle: Rd,
    useInsertionEffect: Ed,
    useLayoutEffect: kd,
    useMemo: Pd,
    useReducer: Ui,
    useRef: Sd,
    useState: function () {
      return Ui(ml);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = dt();
      return ke === null ? (t.memoizedState = e) : _d(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Ui(ml)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: md,
    useId: Td,
    unstable_isNewReconciler: !1,
  };
function yr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Eh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ta(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ym = typeof WeakMap == "function" ? WeakMap : Map;
function Dd(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Do || ((Do = !0), (Ia = r)), Ta(e, t);
    }),
    n
  );
}
function zd(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ta(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ta(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ym();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sy.bind(null, e, t, n)), t.then(e, e));
}
function Zs(e) {
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
function ec(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xm = Qt.ReactCurrentOwner,
  Ke = !1;
function Be(e, t, n, r) {
  t.child = e === null ? dd(t, null, n, r) : hr(t, e.child, n, r);
}
function tc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ur(t, l),
    (r = Ou(e, t, n, r, o, l)),
    (n = Lu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (ie && n && gu(t), (t.flags |= 1), Be(e, t, r, l), t.child)
  );
}
function nc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$u(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Md(e, t, o, r, l))
      : ((e = uo(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ul), n(i, r) && e.ref === t.ref)
    )
      return Wt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Md(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ul(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Wt(e, t, l);
  }
  return Oa(e, t, n, r, l);
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(tr, Xe),
        (Xe |= n);
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
          re(tr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(tr, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(tr, Xe),
      (Xe |= r);
  return Be(e, t, l, n), t.child;
}
function Ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oa(e, t, n, r, l) {
  var o = Je(n) ? jn : Ae.current;
  return (
    (o = dr(t, o)),
    ur(t, l),
    (n = Ou(e, t, n, r, o, l)),
    (r = Lu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (ie && r && gu(t), (t.flags |= 1), Be(e, t, n, l), t.child)
  );
}
function rc(e, t, n, r, l) {
  if (Je(n)) {
    var o = !0;
    ko(t);
  } else o = !1;
  if ((ur(t, l), t.stateNode === null))
    oo(e, t), cd(t, n, r), _a(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((s = Je(n) ? jn : Ae.current), (s = dr(t, s)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Js(t, i, r, s)),
      (Gt = !1);
    var m = t.memoizedState;
    (i.state = m),
      _o(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || be.current || Gt
        ? (typeof c == "function" && (Pa(t, n, c, r), (u = t.memoizedState)),
          (a = Gt || bs(t, n, a, r, m, u, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ud(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : vt(t.type, a)),
      (i.props = s),
      (h = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ft(u))
        : ((u = Je(n) ? jn : Ae.current), (u = dr(t, u)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== h || m !== u) && Js(t, i, r, u)),
      (Gt = !1),
      (m = t.memoizedState),
      (i.state = m),
      _o(t, r, i, l);
    var y = t.memoizedState;
    a !== h || m !== y || be.current || Gt
      ? (typeof x == "function" && (Pa(t, n, x, r), (y = t.memoizedState)),
        (s = Gt || bs(t, n, s, r, m, y, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return La(e, t, n, r, o, l);
}
function La(e, t, n, r, l, o) {
  Ad(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hs(t, n, !1), Wt(e, t, o);
  (r = t.stateNode), (Xm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hr(t, e.child, null, o)), (t.child = hr(t, null, a, o)))
      : Be(e, t, a, o),
    (t.memoizedState = r.state),
    l && Hs(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $s(e, t.context, !1),
    Nu(e, t.containerInfo);
}
function lc(e, t, n, r, l) {
  return pr(), xu(l), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function Da(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, n) {
  var r = t.pendingProps,
    l = se.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(se, l & 1),
    e === null)
  )
    return (
      Ra(t),
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
                : (o = qo(i, r, 0, null)),
              (e = Ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Da(n)),
              (t.memoizedState = ja),
              e)
            : zu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return qm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = dn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = dn(a, o)) : ((o = Ln(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Da(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ja),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dn(o, { mode: "visible", children: r.children })),
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
function zu(e, t) {
  return (
    (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bl(e, t, n, r) {
  return (
    r !== null && xu(r),
    hr(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ii(Error(N(422)))), bl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = qo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ln(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, i),
        (t.child.memoizedState = Da(i)),
        (t.memoizedState = ja),
        o);
  if (!(t.mode & 1)) return bl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Ii(o, r, void 0)), bl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ke || a)) {
    if (((r = Ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Vt(e, l), Et(r, e, l, -1));
    }
    return Bu(), (r = Ii(Error(N(421)))), bl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cy.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qe = un(l.nextSibling)),
      (Ge = t),
      (ie = !0),
      (xt = null),
      e !== null &&
        ((it[at++] = Ft),
        (it[at++] = At),
        (it[at++] = Dn),
        (Ft = e.id),
        (At = e.overflow),
        (Dn = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Na(e.return, t, n);
}
function Bi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
        else if (e.tag === 19) oc(e, n, t);
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
  if ((re(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && To(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Bi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && To(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Bi(t, !0, n, null, o);
        break;
      case "together":
        Bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gm(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), pr();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      Je(t.type) && ko(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(No, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Id(e, t, n)
          : (re(se, se.current & 1),
            (e = Wt(e, t, n)),
            e !== null ? e.sibling : null);
      re(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Fd(e, t, n);
  }
  return Wt(e, t, n);
}
var $d, za, Hd, Vd;
$d = function (e, t) {
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
za = function () {};
Hd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _n(Ot.current);
    var o = null;
    switch (n) {
      case "input":
        (l = na(e, l)), (r = na(e, r)), (o = []);
        break;
      case "select":
        (l = fe({}, l, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = oa(e, l)), (r = oa(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = So);
    }
    aa(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (tl.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (tl.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && le("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zr(e, t) {
  if (!ie)
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
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zm(e, t, n) {
  var r = t.pendingProps;
  switch ((wu(t), t.tag)) {
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
      return Me(t), null;
    case 1:
      return Je(t.type) && Eo(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        oe(be),
        oe(Ae),
        _u(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ql(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (Ha(xt), (xt = null)))),
        za(e, t),
        Me(t),
        null
      );
    case 5:
      Pu(t);
      var l = _n(pl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Me(t), null;
        }
        if (((e = _n(Ot.current)), Ql(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Pt] = t), (r[fl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Wr.length; l++) le(Wr[l], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              hs(r, o), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              ys(r, o), le("invalid", r);
          }
          aa(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : tl.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              Fl(r), ms(r, o, !0);
              break;
            case "textarea":
              Fl(r), vs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = So);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yf(n)),
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
            (e[Pt] = t),
            (e[fl] = r),
            $d(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ua(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Wr.length; l++) le(Wr[l], e);
                l = r;
                break;
              case "source":
                le("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (l = r);
                break;
              case "details":
                le("toggle", e), (l = r);
                break;
              case "input":
                hs(e, r), (l = na(e, r)), le("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = fe({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                ys(e, r), (l = oa(e, r)), le("invalid", e);
                break;
              default:
                l = r;
            }
            aa(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? wf(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && vf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && nl(e, u)
                    : typeof u == "number" && nl(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (tl.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && le("scroll", e)
                      : u != null && lu(e, o, u, i));
              }
            switch (n) {
              case "input":
                Fl(e), ms(e, r, !1);
                break;
              case "textarea":
                Fl(e), vs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? lr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = So);
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
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = _n(pl.current)), _n(Ot.current), Ql(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (o = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (oe(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && qe !== null && t.mode & 1 && !(t.flags & 128))
          id(), pr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ql(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Pt] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (o = !1);
        } else xt !== null && (Ha(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? Ce === 0 && (Ce = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        mr(), za(e, t), e === null && sl(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return ku(t.type._context), Me(t), null;
    case 17:
      return Je(t.type) && Eo(), Me(t), null;
    case 19:
      if ((oe(se), (o = t.memoizedState), o === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) zr(o, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = To(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    zr(o, !1),
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
                return re(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > vr &&
            ((t.flags |= 128), (r = !0), zr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = To(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ie)
            )
              return Me(t), null;
          } else
            2 * ye() - o.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zr(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = se.current),
          re(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function ey(e, t) {
  switch ((wu(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        oe(be),
        oe(Ae),
        _u(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Pu(t), null;
    case 13:
      if (
        (oe(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(se), null;
    case 4:
      return mr(), null;
    case 10:
      return ku(t.type._context), null;
    case 22:
    case 23:
      return Iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jl = !1,
  Fe = !1,
  ty = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function Ma(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var ic = !1;
function ny(e, t) {
  if (((ga = go), (e = bf()), vu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (m = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++c === r && (u = i),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wa = { focusedElem: e, selectionRange: n }, go = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    P = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : vt(t.type, g),
                      P
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (d) {
          pe(t, t.return, d);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = ic), (ic = !1), y;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ma(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Yo(e, t) {
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
function Fa(e) {
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
function Wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[fl], delete t[Ea], delete t[Um], delete t[Im])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
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
function Aa(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = So));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling);
}
var Te = null,
  gt = !1;
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Kd(e, t, n), (n = n.sibling);
}
function Kd(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function")
    try {
      Tt.onCommitFiberUnmount($o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || er(n, t);
    case 6:
      var r = Te,
        l = gt;
      (Te = null),
        Yt(e, t, n),
        (Te = r),
        (gt = l),
        Te !== null &&
          (gt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (gt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Di(e.parentNode, n)
              : e.nodeType === 1 && Di(e, n),
            il(e))
          : Di(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = gt),
        (Te = n.stateNode.containerInfo),
        (gt = !0),
        Yt(e, t, n),
        (Te = r),
        (gt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ma(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Yt(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(n, t, a);
        }
      Yt(e, t, n);
      break;
    case 21:
      Yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Yt(e, t, n), (Fe = r))
        : Yt(e, t, n);
      break;
    default:
      Yt(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ty()),
      t.forEach(function (r) {
        var l = fy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (gt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(N(160));
        Kd(o, i, l), (Te = null), (gt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        pe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bd(t, e), (t = t.sibling);
}
function bd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Rt(e), r & 4)) {
        try {
          qr(3, e, e.return), Yo(3, e);
        } catch (g) {
          pe(e, e.return, g);
        }
        try {
          qr(5, e, e.return);
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 1:
      yt(t, e), Rt(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Rt(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          nl(l, "");
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && hf(l, o),
              ua(a, i);
            var s = ua(a, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                h = u[i + 1];
              c === "style"
                ? wf(l, h)
                : c === "dangerouslySetInnerHTML"
                ? vf(l, h)
                : c === "children"
                ? nl(l, h)
                : lu(l, c, h, s);
            }
            switch (a) {
              case "input":
                ra(l, o);
                break;
              case "textarea":
                mf(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? lr(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? lr(l, !!o.multiple, o.defaultValue, !0)
                      : lr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[fl] = o;
          } catch (g) {
            pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(t.containerInfo);
        } catch (g) {
          pe(e, e.return, g);
        }
      break;
    case 4:
      yt(t, e), Rt(e);
      break;
    case 13:
      yt(t, e),
        Rt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Au = ye())),
        r & 4 && uc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (s = Fe) || c), yt(t, e), (Fe = s)) : yt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (h = M = c; M !== null; ) {
              switch (((m = M), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, m, m.return);
                  break;
                case 1:
                  er(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      pe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  er(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    cc(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (M = x)) : cc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = gf("display", i)));
              } catch (g) {
                pe(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (g) {
                pe(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Rt(e), r & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (nl(l, ""), (r.flags &= -33));
          var o = ac(e);
          Ua(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ac(e);
          Aa(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      pe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ry(e, t, n) {
  (M = e), Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Jl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Fe;
        a = Jl;
        var s = Fe;
        if (((Jl = i), (Fe = u) && !s))
          for (M = l; M !== null; )
            (i = M),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? fc(l)
                : u !== null
                ? ((u.return = i), (M = u))
                : fc(l);
        for (; o !== null; ) (M = o), Jd(o), (o = o.sibling);
        (M = l), (Jl = a), (Fe = s);
      }
      sc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (M = o)) : sc(e);
  }
}
function sc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || Yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ks(t, o, r);
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
                Ks(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && il(h);
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
              throw Error(N(163));
          }
        Fe || (t.flags & 512 && Fa(t));
      } catch (m) {
        pe(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function cc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function fc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (u) {
            pe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              pe(t, l, u);
            }
          }
          var o = t.return;
          try {
            Fa(t);
          } catch (u) {
            pe(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Fa(t);
          } catch (u) {
            pe(t, i, u);
          }
      }
    } catch (u) {
      pe(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var ly = Math.ceil,
  jo = Qt.ReactCurrentDispatcher,
  Mu = Qt.ReactCurrentOwner,
  st = Qt.ReactCurrentBatchConfig,
  Y = 0,
  Ne = null,
  we = null,
  Oe = 0,
  Xe = 0,
  tr = yn(0),
  Ce = 0,
  vl = null,
  Mn = 0,
  Xo = 0,
  Fu = 0,
  Gr = null,
  Qe = null,
  Au = 0,
  vr = 1 / 0,
  zt = null,
  Do = !1,
  Ia = null,
  cn = null,
  Yl = !1,
  rn = null,
  zo = 0,
  Zr = 0,
  Ba = null,
  io = -1,
  ao = 0;
function $e() {
  return Y & 6 ? ye() : io !== -1 ? io : (io = ye());
}
function fn(e) {
  return e.mode & 1
    ? Y & 2 && Oe !== 0
      ? Oe & -Oe
      : $m.transition !== null
      ? (ao === 0 && (ao = Lf()), ao)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uf(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (Ba = null), Error(N(185)));
  El(e, n, r),
    (!(Y & 2) || e !== Ne) &&
      (e === Ne && (!(Y & 2) && (Xo |= n), Ce === 4 && tn(e, Oe)),
      Ye(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((vr = ye() + 500), Ko && vn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  $h(e, t);
  var r = vo(e, e === Ne ? Oe : 0);
  if (r === 0)
    n !== null && xs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xs(n), t === 1))
      e.tag === 0 ? Bm(dc.bind(null, e)) : rd(dc.bind(null, e)),
        Fm(function () {
          !(Y & 6) && vn();
        }),
        (n = null);
    else {
      switch (jf(r)) {
        case 1:
          n = su;
          break;
        case 4:
          n = Tf;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = Of;
          break;
        default:
          n = yo;
      }
      n = np(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((io = -1), (ao = 0), Y & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = vo(e, e === Ne ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mo(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var o = qd();
    (Ne !== e || Oe !== t) && ((zt = null), (vr = ye() + 500), On(e, t));
    do
      try {
        ay();
        break;
      } catch (a) {
        Xd(e, a);
      }
    while (1);
    Eu(),
      (jo.current = o),
      (Y = l),
      we !== null ? (t = 0) : ((Ne = null), (Oe = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = pa(e)), l !== 0 && ((r = l), (t = $a(e, l)))), t === 1)
    )
      throw ((n = vl), On(e, 0), tn(e, r), Ye(e, ye()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !oy(l) &&
          ((t = Mo(e, r)),
          t === 2 && ((o = pa(e)), o !== 0 && ((r = o), (t = $a(e, o)))),
          t === 1))
      )
        throw ((n = vl), On(e, 0), tn(e, r), Ye(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Rn(e, Qe, zt);
          break;
        case 3:
          if (
            (tn(e, r), (r & 130023424) === r && ((t = Au + 500 - ye()), 10 < t))
          ) {
            if (vo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Sa(Rn.bind(null, e, Qe, zt), t);
            break;
          }
          Rn(e, Qe, zt);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - St(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ye() - r),
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
                : 1960 * ly(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sa(Rn.bind(null, e, Qe, zt), r);
            break;
          }
          Rn(e, Qe, zt);
          break;
        case 5:
          Rn(e, Qe, zt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ye(e, ye()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function $a(e, t) {
  var n = Gr;
  return (
    e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    (e = Mo(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && Ha(t)),
    e
  );
}
function Ha(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function oy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!kt(o(), l)) return !1;
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
function tn(e, t) {
  for (
    t &= ~Fu,
      t &= ~Xo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dc(e) {
  if (Y & 6) throw Error(N(327));
  sr();
  var t = vo(e, 0);
  if (!(t & 1)) return Ye(e, ye()), null;
  var n = Mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pa(e);
    r !== 0 && ((t = r), (n = $a(e, r)));
  }
  if (n === 1) throw ((n = vl), On(e, 0), tn(e, t), Ye(e, ye()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Qe, zt),
    Ye(e, ye()),
    null
  );
}
function Uu(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((vr = ye() + 500), Ko && vn());
  }
}
function Fn(e) {
  rn !== null && rn.tag === 0 && !(Y & 6) && sr();
  var t = Y;
  Y |= 1;
  var n = st.transition,
    r = G;
  try {
    if (((st.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (st.transition = n), (Y = t), !(Y & 6) && vn();
  }
}
function Iu() {
  (Xe = tr.current), oe(tr);
}
function On(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mm(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((wu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Eo();
          break;
        case 3:
          mr(), oe(be), oe(Ae), _u();
          break;
        case 5:
          Pu(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          oe(se);
          break;
        case 19:
          oe(se);
          break;
        case 10:
          ku(r.type._context);
          break;
        case 22:
        case 23:
          Iu();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (we = e = dn(e.current, null)),
    (Oe = Xe = t),
    (Ce = 0),
    (vl = null),
    (Fu = Xo = Mn = 0),
    (Qe = Gr = null),
    Pn !== null)
  ) {
    for (t = 0; t < Pn.length; t++)
      if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Pn = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = we;
    try {
      if ((Eu(), (ro.current = Lo), Oo)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Oo = !1;
      }
      if (
        ((zn = 0),
        (Re = ke = ce = null),
        (Xr = !1),
        (hl = 0),
        (Mu.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (vl = t), (we = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = Zs(i);
          if (x !== null) {
            (x.flags &= -257),
              ec(x, i, a, o, t),
              x.mode & 1 && Gs(o, s, t),
              (t = x),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Gs(o, s, t), Bu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (ie && a.mode & 1) {
          var P = Zs(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ec(P, i, a, o, t),
              xu(yr(u, a));
            break e;
          }
        }
        (o = u = yr(u, a)),
          Ce !== 4 && (Ce = 2),
          Gr === null ? (Gr = [o]) : Gr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Dd(o, u, t);
              Qs(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (cn === null || !cn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var d = zd(o, a, t);
                Qs(o, d);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zd(n);
    } catch (k) {
      (t = k), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qd() {
  var e = jo.current;
  return (jo.current = Lo), e === null ? Lo : e;
}
function Bu() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Ne === null || (!(Mn & 268435455) && !(Xo & 268435455)) || tn(Ne, Oe);
}
function Mo(e, t) {
  var n = Y;
  Y |= 2;
  var r = qd();
  (Ne !== e || Oe !== t) && ((zt = null), On(e, t));
  do
    try {
      iy();
      break;
    } catch (l) {
      Xd(e, l);
    }
  while (1);
  if ((Eu(), (Y = n), (jo.current = r), we !== null)) throw Error(N(261));
  return (Ne = null), (Oe = 0), Ce;
}
function iy() {
  for (; we !== null; ) Gd(we);
}
function ay() {
  for (; we !== null && !jh(); ) Gd(we);
}
function Gd(e) {
  var t = tp(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zd(e) : (we = t),
    (Mu.current = null);
}
function Zd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ey(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (we = null);
        return;
      }
    } else if (((n = Zm(n, t, Xe)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Rn(e, t, n) {
  var r = G,
    l = st.transition;
  try {
    (st.transition = null), (G = 1), uy(e, t, n, r);
  } finally {
    (st.transition = l), (G = r);
  }
  return null;
}
function uy(e, t, n, r) {
  do sr();
  while (rn !== null);
  if (Y & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hh(e, o),
    e === Ne && ((we = Ne = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yl ||
      ((Yl = !0),
      np(yo, function () {
        return sr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = st.transition), (st.transition = null);
    var i = G;
    G = 1;
    var a = Y;
    (Y |= 4),
      (Mu.current = null),
      ny(e, n),
      bd(n, e),
      _m(wa),
      (go = !!ga),
      (wa = ga = null),
      (e.current = n),
      ry(n),
      Dh(),
      (Y = a),
      (G = i),
      (st.transition = o);
  } else e.current = n;
  if (
    (Yl && ((Yl = !1), (rn = e), (zo = l)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    Fh(n.stateNode),
    Ye(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Do) throw ((Do = !1), (e = Ia), (Ia = null), e);
  return (
    zo & 1 && e.tag !== 0 && sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ba ? Zr++ : ((Zr = 0), (Ba = e))) : (Zr = 0),
    vn(),
    null
  );
}
function sr() {
  if (rn !== null) {
    var e = jf(zo),
      t = st.transition,
      n = G;
    try {
      if (((st.transition = null), (G = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (zo = 0), Y & 6)) throw Error(N(331));
        var l = Y;
        for (Y |= 4, M = e.current; M !== null; ) {
          var o = M,
            i = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (M = s; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (M = h);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var m = c.sibling,
                        x = c.return;
                      if ((Wd(c), c === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (M = m);
                        break;
                      }
                      M = x;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var P = g.sibling;
                    (g.sibling = null), (g = P);
                  } while (g !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (M = i);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (M = p);
                break e;
              }
              M = o.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = f; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, a);
                  }
                } catch (k) {
                  pe(a, a.return, k);
                }
              if (a === i) {
                M = null;
                break e;
              }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (M = d);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((Y = l), vn(), Tt && typeof Tt.onPostCommitFiberRoot == "function")
        )
          try {
            Tt.onPostCommitFiberRoot($o, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (st.transition = t);
    }
  }
  return !1;
}
function pc(e, t, n) {
  (t = yr(n, t)),
    (t = Dd(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = $e()),
    e !== null && (El(e, 1, t), Ye(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = yr(n, e)),
            (e = zd(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = $e()),
            t !== null && (El(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Oe & n) === n &&
      (Ce === 4 || (Ce === 3 && (Oe & 130023424) === Oe && 500 > ye() - Au)
        ? On(e, 0)
        : (Fu |= n)),
    Ye(e, t);
}
function ep(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304))
      : (t = 1));
  var n = $e();
  (e = Vt(e, t)), e !== null && (El(e, t, n), Ye(e, n));
}
function cy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function fy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), Gm(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), ie && t.flags & 1048576 && ld(t, Ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      oo(e, t), (e = t.pendingProps);
      var l = dr(t, Ae.current);
      ur(t, n), (l = Ou(null, t, r, e, l, n));
      var o = Lu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((o = !0), ko(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ru(t),
            (l.updater = bo),
            (t.stateNode = l),
            (l._reactInternals = t),
            _a(t, r, e, n),
            (t = La(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && gu(t), Be(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oo(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = py(r)),
          (e = vt(r, e)),
          l)
        ) {
          case 0:
            t = Oa(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : vt(r, l)),
        Oa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : vt(r, l)),
        rc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ud(e, t),
          _o(t, r, null, n);
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
            (l = yr(Error(N(423)), t)), (t = lc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yr(Error(N(424)), t)), (t = lc(e, t, r, n, l));
            break e;
          } else
            for (
              qe = un(t.stateNode.containerInfo.firstChild),
                Ge = t,
                ie = !0,
                xt = null,
                n = dd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === l)) {
            t = Wt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && Ra(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        xa(r, l) ? (i = null) : o !== null && xa(r, o) && (t.flags |= 32),
        Ad(e, t),
        Be(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ra(t), null;
    case 13:
      return Id(e, t, n);
    case 4:
      return (
        Nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : vt(r, l)),
        tc(e, t, r, l, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          re(No, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (kt(o.value, i)) {
            if (o.children === l.children && !be.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ut(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Na(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Na(i, n, t),
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
        Be(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (l = ft(l)),
        (r = r(l)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = vt(r, t.pendingProps)),
        (l = vt(r.type, l)),
        nc(e, t, r, l, n)
      );
    case 15:
      return Md(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : vt(r, l)),
        oo(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), ko(t)) : (e = !1),
        ur(t, n),
        cd(t, r, l),
        _a(t, r, l, n),
        La(null, t, r, !0, e, n)
      );
    case 19:
      return Bd(e, t, n);
    case 22:
      return Fd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function np(e, t) {
  return _f(e, t);
}
function dy(e, t, n, r) {
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
function ut(e, t, n, r) {
  return new dy(e, t, n, r);
}
function $u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function py(e) {
  if (typeof e == "function") return $u(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === iu)) return 11;
    if (e === au) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
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
function uo(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) $u(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qn:
        return Ln(n.children, l, o, t);
      case ou:
        (i = 8), (l |= 8);
        break;
      case Gi:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = Gi), (e.lanes = o), e
        );
      case Zi:
        return (e = ut(13, n, t, l)), (e.elementType = Zi), (e.lanes = o), e;
      case ea:
        return (e = ut(19, n, t, l)), (e.elementType = ea), (e.lanes = o), e;
      case ff:
        return qo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sf:
              i = 10;
              break e;
            case cf:
              i = 9;
              break e;
            case iu:
              i = 11;
              break e;
            case au:
              i = 14;
              break e;
            case qt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ln(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function qo(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = ff),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $i(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Hi(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hy(e, t, n, r, l) {
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
    (this.eventTimes = Ei(0)),
    (this.expirationTimes = Ei(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Hu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new hy(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(o),
    e
  );
}
function my(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rp(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return nd(e, n, t);
  }
  return t;
}
function lp(e, t, n, r, l, o, i, a, u) {
  return (
    (e = Hu(n, r, !0, e, l, o, i, a, u)),
    (e.context = rp(null)),
    (n = e.current),
    (r = $e()),
    (l = fn(n)),
    (o = Ut(r, l)),
    (o.callback = t ?? null),
    sn(n, o, l),
    (e.current.lanes = l),
    El(e, l, r),
    Ye(e, r),
    e
  );
}
function Go(e, t, n, r) {
  var l = t.current,
    o = $e(),
    i = fn(l);
  return (
    (n = rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(l, t, i)),
    e !== null && (Et(e, l, i, o), no(e, l, i)),
    i
  );
}
function Fo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vu(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function yy() {
  return null;
}
var op =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wu(e) {
  this._internalRoot = e;
}
Zo.prototype.render = Wu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Go(e, t, null, null);
};
Zo.prototype.unmount = Wu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fn(function () {
      Go(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function Zo(e) {
  this._internalRoot = e;
}
Zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Mf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Af(e);
  }
};
function Qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ei(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mc() {}
function vy(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Fo(i);
        o.call(s);
      };
    }
    var i = lp(t, r, e, 0, null, !1, !1, "", mc);
    return (
      (e._reactRootContainer = i),
      (e[Ht] = i.current),
      sl(e.nodeType === 8 ? e.parentNode : e),
      Fn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Fo(u);
      a.call(s);
    };
  }
  var u = Hu(e, 0, !1, null, null, !1, !1, "", mc);
  return (
    (e._reactRootContainer = u),
    (e[Ht] = u.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    Fn(function () {
      Go(t, u, n, r);
    }),
    u
  );
}
function ti(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Fo(i);
        a.call(u);
      };
    }
    Go(t, i, e, l);
  } else i = vy(n, t, e, l, r);
  return Fo(i);
}
Df = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (cu(t, n | 1), Ye(t, ye()), !(Y & 6) && ((vr = ye() + 500), vn()));
      }
      break;
    case 13:
      Fn(function () {
        var r = Vt(e, 1);
        if (r !== null) {
          var l = $e();
          Et(r, e, 1, l);
        }
      }),
        Vu(e, 1);
  }
};
fu = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = $e();
      Et(t, e, 134217728, n);
    }
    Vu(e, 134217728);
  }
};
zf = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = Vt(e, t);
    if (n !== null) {
      var r = $e();
      Et(n, e, t, r);
    }
    Vu(e, t);
  }
};
Mf = function () {
  return G;
};
Ff = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
ca = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ra(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Qo(r);
            if (!l) throw Error(N(90));
            pf(r), ra(r, l);
          }
        }
      }
      break;
    case "textarea":
      mf(e, n);
      break;
    case "select":
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
Ef = Uu;
kf = Fn;
var gy = { usingClientEntryPoint: !1, Events: [Cl, Yn, Qo, xf, Sf, Uu] },
  Mr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wy = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || yy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xl.isDisabled && Xl.supportsFiber)
    try {
      ($o = Xl.inject(wy)), (Tt = Xl);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qu(t)) throw Error(N(200));
  return my(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Qu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = op;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Hu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ht] = t.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    new Wu(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Nf(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Fn(e);
};
et.hydrate = function (e, t, n) {
  if (!ei(t)) throw Error(N(200));
  return ti(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Qu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = op;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = lp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ht] = t.current),
    sl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Zo(t);
};
et.render = function (e, t, n) {
  if (!ei(t)) throw Error(N(200));
  return ti(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!ei(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Fn(function () {
        ti(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = Uu;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ei(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ti(e, t, n, !1, r);
};
et.version = "18.2.0-next-9e3b772b8-20220608";
function ip() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip);
    } catch (e) {
      console.error(e);
    }
}
ip(), (rf.exports = et);
var xy = rf.exports,
  yc = xy;
(Xi.createRoot = yc.createRoot), (Xi.hydrateRoot = yc.hydrateRoot);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var ge;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ge || (ge = {}));
const vc = "popstate";
function Sy(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return gl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : An(l);
  }
  return ky(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function gr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ey() {
  return Math.random().toString(36).substr(2, 8);
}
function gc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kt(t) : t,
      { state: n, key: (t && t.key) || r || Ey() }
    )
  );
}
function An(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kt(e) {
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
function ky(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = ge.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState(ue({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    a = ge.Pop;
    let P = c(),
      p = P == null ? null : P - s;
    (s = P), u && u({ action: a, location: g.location, delta: p });
  }
  function m(P, p) {
    a = ge.Push;
    let f = gl(g.location, P, p);
    n && n(f, P), (s = c() + 1);
    let v = gc(f, s),
      d = g.createHref(f);
    try {
      i.pushState(v, "", d);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(d);
    }
    o && u && u({ action: a, location: g.location, delta: 1 });
  }
  function x(P, p) {
    a = ge.Replace;
    let f = gl(g.location, P, p);
    n && n(f, P), (s = c());
    let v = gc(f, s),
      d = g.createHref(f);
    i.replaceState(v, "", d),
      o && u && u({ action: a, location: g.location, delta: 0 });
  }
  function y(P) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof P == "string" ? P : An(P);
    return (
      Q(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(P) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(vc, h),
        (u = P),
        () => {
          l.removeEventListener(vc, h), (u = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: y,
    encodeLocation(P) {
      let p = y(P);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: x,
    go(P) {
      return i.go(P);
    },
  };
  return g;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
const Cy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Ry(e) {
  return e.index === !0;
}
function Va(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Ry(l))
      ) {
        let u = ue({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ue({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Va(l.children, t, i, r)), u
        );
      }
    })
  );
}
function nr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Kt(t) : t,
    l = kr(r.pathname || "/", n);
  if (l == null) return null;
  let o = ap(e);
  Py(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Fy(o[a], Iy(l));
  return i;
}
function Ny(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function ap(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = It([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      ap(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: zy(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of up(o.path)) l(o, i, u);
    }),
    t
  );
}
function up(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = up(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Py(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : My(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _y = /^:\w+$/,
  Ty = 3,
  Oy = 2,
  Ly = 1,
  jy = 10,
  Dy = -2,
  wc = (e) => e === "*";
function zy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(wc) && (r += Dy),
    t && (r += Oy),
    n
      .filter((l) => !wc(l))
      .reduce((l, o) => l + (_y.test(o) ? Ty : o === "" ? Ly : jy), r)
  );
}
function My(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = Ay(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    o.push({
      params: r,
      pathname: It([l, c.pathname]),
      pathnameBase: Vy(It([l, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (l = It([l, c.pathnameBase]));
  }
  return o;
}
function Ay(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Uy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, h) => {
      if (c === "*") {
        let m = a[h] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = By(a[h] || "", c)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Uy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    gr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Iy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      gr(
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
function By(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      gr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function kr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function $y(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Kt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Hy(n, t)) : t,
    search: Wy(r),
    hash: Qy(l),
  };
}
function Hy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Vi(e, t, n, r) {
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
function ni(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ku(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Kt(e))
    : ((l = ue({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        Vi("?", "pathname", "search", l)
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        Vi("#", "pathname", "hash", l)
      ),
      Q(!l.search || !l.search.includes("#"), Vi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      l.pathname = m.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = $y(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class bu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function sp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const cp = ["post", "put", "patch", "delete"],
  Ky = new Set(cp),
  by = ["get", ...cp],
  Jy = new Set(by),
  Yy = new Set([301, 302, 303, 307, 308]),
  Xy = new Set([307, 308]),
  Wi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Fr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  fp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Zy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    l = (S) => ({ hasErrorBoundary: w(S) });
  } else l = Gy;
  let o = {},
    i = Va(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = ue({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    c = null,
    h = new Set(),
    m = null,
    x = null,
    y = null,
    g = e.hydrationData != null,
    P = nr(i, e.history.location, u),
    p = null;
  if (P == null) {
    let w = ot(404, { pathname: e.history.location.pathname }),
      { matches: S, route: C } = Pc(i);
    (P = S), (p = { [C.id]: w });
  }
  let f =
      !P.some((w) => w.route.lazy) &&
      (!P.some((w) => w.route.loader) || e.hydrationData != null),
    v,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: f,
      navigation: Wi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = ge.Pop,
    L = !1,
    T,
    D = !1,
    K = !1,
    B = [],
    ve = [],
    Z = new Map(),
    nt = 0,
    Ct = -1,
    rt = new Map(),
    Pe = new Set(),
    We = new Map(),
    O = new Map(),
    j = new Map(),
    U = !1;
  function ne() {
    return (
      (c = e.history.listen((w) => {
        let { action: S, location: C, delta: z } = w;
        if (U) {
          U = !1;
          return;
        }
        gr(
          j.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let H = ls({
          currentLocation: d.location,
          nextLocation: C,
          historyAction: S,
        });
        if (H && z != null) {
          (U = !0),
            e.history.go(z * -1),
            jl(H, {
              state: "blocked",
              location: C,
              proceed() {
                jl(H, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(z);
              },
              reset() {
                let $ = new Map(d.blockers);
                $.set(H, Fr), q({ blockers: $ });
              },
            });
          return;
        }
        return W(S, C);
      })),
      d.initialized || W(ge.Pop, d.location),
      v
    );
  }
  function de() {
    c && c(),
      h.clear(),
      T && T.abort(),
      d.fetchers.forEach((w, S) => $n(S)),
      d.blockers.forEach((w, S) => rs(S));
  }
  function pt(w) {
    return h.add(w), () => h.delete(w);
  }
  function q(w) {
    (d = ue({}, d, w)), h.forEach((S) => S(d));
  }
  function Se(w, S) {
    var C, z;
    let H =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        wt(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((C = w.state) == null ? void 0 : C._isRedirect) !== !0,
      $;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? ($ = S.actionData)
        : ($ = null)
      : H
      ? ($ = d.actionData)
      : ($ = null);
    let V = S.loaderData
        ? Nc(d.loaderData, S.loaderData, S.matches || [], S.errors)
        : d.loaderData,
      I = d.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((ae, De) => I.set(De, Fr)));
    let A =
      L === !0 ||
      (d.navigation.formMethod != null &&
        wt(d.navigation.formMethod) &&
        ((z = w.state) == null ? void 0 : z._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      D ||
        k === ge.Pop ||
        (k === ge.Push
          ? e.history.push(w, w.state)
          : k === ge.Replace && e.history.replace(w, w.state)),
      q(
        ue({}, S, {
          actionData: $,
          loaderData: V,
          historyAction: k,
          location: w,
          initialized: !0,
          navigation: Wi,
          revalidation: "idle",
          restoreScrollPosition: is(w, S.matches || d.matches),
          preventScrollReset: A,
          blockers: I,
        })
      ),
      (k = ge.Pop),
      (L = !1),
      (D = !1),
      (K = !1),
      (B = []),
      (ve = []);
  }
  async function Ue(w, S) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let C = Wa(
        d.location,
        d.matches,
        u,
        s.v7_prependBasename,
        w,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: z,
        submission: H,
        error: $,
      } = xc(s.v7_normalizeFormMethod, !1, C, S),
      V = d.location,
      I = gl(d.location, z, S && S.state);
    I = ue({}, I, e.history.encodeLocation(I));
    let A = S && S.replace != null ? S.replace : void 0,
      ae = ge.Push;
    A === !0
      ? (ae = ge.Replace)
      : A === !1 ||
        (H != null &&
          wt(H.formMethod) &&
          H.formAction === d.location.pathname + d.location.search &&
          (ae = ge.Replace));
    let De =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      X = ls({ currentLocation: V, nextLocation: I, historyAction: ae });
    if (X) {
      jl(X, {
        state: "blocked",
        location: I,
        proceed() {
          jl(X, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            Ue(w, S);
        },
        reset() {
          let te = new Map(d.blockers);
          te.set(X, Fr), q({ blockers: te });
        },
      });
      return;
    }
    return await W(ae, I, {
      submission: H,
      pendingError: $,
      preventScrollReset: De,
      replace: S && S.replace,
    });
  }
  function bt() {
    if (
      (Bn(),
      q({ revalidation: "loading" }),
      d.navigation.state !== "submitting")
    ) {
      if (d.navigation.state === "idle") {
        W(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      W(k || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function W(w, S, C) {
    T && T.abort(),
      (T = null),
      (k = w),
      (D = (C && C.startUninterruptedRevalidation) === !0),
      Vp(d.location, d.matches),
      (L = (C && C.preventScrollReset) === !0);
    let z = a || i,
      H = C && C.overrideNavigation,
      $ = nr(z, S, u);
    if (!$) {
      let te = ot(404, { pathname: S.pathname }),
        { matches: he, route: Sn } = Pc(z);
      fi(), Se(S, { matches: he, loaderData: {}, errors: { [Sn.id]: te } });
      return;
    }
    if (
      d.initialized &&
      !K &&
      lv(d.location, S) &&
      !(C && C.submission && wt(C.submission.formMethod))
    ) {
      Se(S, { matches: $ });
      return;
    }
    T = new AbortController();
    let V = Ur(e.history, S, T.signal, C && C.submission),
      I,
      A;
    if (C && C.pendingError) A = { [rr($).route.id]: C.pendingError };
    else if (C && C.submission && wt(C.submission.formMethod)) {
      let te = await F(V, S, C.submission, $, { replace: C.replace });
      if (te.shortCircuited) return;
      (I = te.pendingActionData),
        (A = te.pendingActionError),
        (H = Qi(S, C.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: ae,
      loaderData: De,
      errors: X,
    } = await je(
      V,
      S,
      $,
      H,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      I,
      A
    );
    ae ||
      ((T = null),
      Se(
        S,
        ue({ matches: $ }, I ? { actionData: I } : {}, {
          loaderData: De,
          errors: X,
        })
      ));
  }
  async function F(w, S, C, z, H) {
    H === void 0 && (H = {}), Bn();
    let $ = uv(S, C);
    q({ navigation: $ });
    let V,
      I = Ka(z, S);
    if (!I.route.action && !I.route.lazy)
      V = {
        type: me.error,
        error: ot(405, {
          method: w.method,
          pathname: S.pathname,
          routeId: I.route.id,
        }),
      };
    else if (((V = await Ar("action", w, I, z, o, l, u)), w.signal.aborted))
      return { shortCircuited: !0 };
    if (cr(V)) {
      let A;
      return (
        H && H.replace != null
          ? (A = H.replace)
          : (A = V.location === d.location.pathname + d.location.search),
        await lt(d, V, { submission: C, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (el(V)) {
      let A = rr(z, I.route.id);
      return (
        (H && H.replace) !== !0 && (k = ge.Push),
        { pendingActionData: {}, pendingActionError: { [A.route.id]: V.error } }
      );
    }
    if (Tn(V)) throw ot(400, { type: "defer-action" });
    return { pendingActionData: { [I.route.id]: V.data } };
  }
  async function je(w, S, C, z, H, $, V, I, A) {
    let ae = z || Qi(S, H),
      De = H || $ || Oc(ae),
      X = a || i,
      [te, he] = Sc(e.history, d, C, De, S, K, B, ve, We, Pe, X, u, I, A);
    if (
      (fi(
        (ee) =>
          !(C && C.some((mt) => mt.route.id === ee)) ||
          (te && te.some((mt) => mt.route.id === ee))
      ),
      (Ct = ++nt),
      te.length === 0 && he.length === 0)
    ) {
      let ee = ts();
      return (
        Se(
          S,
          ue(
            { matches: C, loaderData: {}, errors: A || null },
            I ? { actionData: I } : {},
            ee ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!D) {
      he.forEach((mt) => {
        let Jt = d.fetchers.get(mt.key),
          yi = Ir(void 0, Jt ? Jt.data : void 0);
        d.fetchers.set(mt.key, yi);
      });
      let ee = I || d.actionData;
      q(
        ue(
          { navigation: ae },
          ee
            ? Object.keys(ee).length === 0
              ? { actionData: null }
              : { actionData: ee }
            : {},
          he.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      );
    }
    he.forEach((ee) => {
      Z.has(ee.key) && ht(ee.key),
        ee.controller && Z.set(ee.key, ee.controller);
    });
    let Sn = () => he.forEach((ee) => ht(ee.key));
    T && T.signal.addEventListener("abort", Sn);
    let {
      results: En,
      loaderResults: Nr,
      fetcherResults: di,
    } = await Ie(d.matches, C, te, he, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", Sn),
      he.forEach((ee) => Z.delete(ee.key));
    let jt = _c(En);
    if (jt) {
      if (jt.idx >= te.length) {
        let ee = he[jt.idx - te.length].key;
        Pe.add(ee);
      }
      return await lt(d, jt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: Dt, errors: Dl } = Rc(d, C, te, Nr, A, he, di, O);
    O.forEach((ee, mt) => {
      ee.subscribe((Jt) => {
        (Jt || ee.done) && O.delete(mt);
      });
    });
    let pi = ts(),
      hi = ns(Ct),
      mi = pi || hi || he.length > 0;
    return ue(
      { loaderData: Dt, errors: Dl },
      mi ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function _e(w) {
    return d.fetchers.get(w) || qy;
  }
  function Tl(w, S, C, z) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Z.has(w) && ht(w);
    let H = a || i,
      $ = Wa(
        d.location,
        d.matches,
        u,
        s.v7_prependBasename,
        C,
        S,
        z == null ? void 0 : z.relative
      ),
      V = nr(H, $, u);
    if (!V) {
      wn(w, S, ot(404, { pathname: $ }));
      return;
    }
    let {
      path: I,
      submission: A,
      error: ae,
    } = xc(s.v7_normalizeFormMethod, !0, $, z);
    if (ae) {
      wn(w, S, ae);
      return;
    }
    let De = Ka(V, I);
    if (((L = (z && z.preventScrollReset) === !0), A && wt(A.formMethod))) {
      Ol(w, S, I, De, V, A);
      return;
    }
    We.set(w, { routeId: S, path: I }), Ll(w, S, I, De, V, A);
  }
  async function Ol(w, S, C, z, H, $) {
    if ((Bn(), We.delete(w), !z.route.action && !z.route.lazy)) {
      let Ee = ot(405, { method: $.formMethod, pathname: C, routeId: S });
      wn(w, S, Ee);
      return;
    }
    let V = d.fetchers.get(w),
      I = sv($, V);
    d.fetchers.set(w, I), q({ fetchers: new Map(d.fetchers) });
    let A = new AbortController(),
      ae = Ur(e.history, C, A.signal, $);
    Z.set(w, A);
    let De = nt,
      X = await Ar("action", ae, z, H, o, l, u);
    if (ae.signal.aborted) {
      Z.get(w) === A && Z.delete(w);
      return;
    }
    if (cr(X))
      if ((Z.delete(w), Ct > De)) {
        let Ee = Vn(void 0);
        d.fetchers.set(w, Ee), q({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        Pe.add(w);
        let Ee = Ir($);
        return (
          d.fetchers.set(w, Ee),
          q({ fetchers: new Map(d.fetchers) }),
          lt(d, X, { fetcherSubmission: $ })
        );
      }
    if (el(X)) {
      wn(w, S, X.error);
      return;
    }
    if (Tn(X)) throw ot(400, { type: "defer-action" });
    let te = d.navigation.location || d.location,
      he = Ur(e.history, te, A.signal),
      Sn = a || i,
      En =
        d.navigation.state !== "idle"
          ? nr(Sn, d.navigation.location, u)
          : d.matches;
    Q(En, "Didn't find any matches after fetcher action");
    let Nr = ++nt;
    rt.set(w, Nr);
    let di = Ir($, X.data);
    d.fetchers.set(w, di);
    let [jt, Dt] = Sc(
      e.history,
      d,
      En,
      $,
      te,
      K,
      B,
      ve,
      We,
      Pe,
      Sn,
      u,
      { [z.route.id]: X.data },
      void 0
    );
    Dt.filter((Ee) => Ee.key !== w).forEach((Ee) => {
      let Pr = Ee.key,
        as = d.fetchers.get(Pr),
        Qp = Ir(void 0, as ? as.data : void 0);
      d.fetchers.set(Pr, Qp),
        Z.has(Pr) && ht(Pr),
        Ee.controller && Z.set(Pr, Ee.controller);
    }),
      q({ fetchers: new Map(d.fetchers) });
    let Dl = () => Dt.forEach((Ee) => ht(Ee.key));
    A.signal.addEventListener("abort", Dl);
    let {
      results: pi,
      loaderResults: hi,
      fetcherResults: mi,
    } = await Ie(d.matches, En, jt, Dt, he);
    if (A.signal.aborted) return;
    A.signal.removeEventListener("abort", Dl),
      rt.delete(w),
      Z.delete(w),
      Dt.forEach((Ee) => Z.delete(Ee.key));
    let ee = _c(pi);
    if (ee) {
      if (ee.idx >= jt.length) {
        let Ee = Dt[ee.idx - jt.length].key;
        Pe.add(Ee);
      }
      return lt(d, ee.result);
    }
    let { loaderData: mt, errors: Jt } = Rc(
      d,
      d.matches,
      jt,
      hi,
      void 0,
      Dt,
      mi,
      O
    );
    if (d.fetchers.has(w)) {
      let Ee = Vn(X.data);
      d.fetchers.set(w, Ee);
    }
    let yi = ns(Nr);
    d.navigation.state === "loading" && Nr > Ct
      ? (Q(k, "Expected pending action"),
        T && T.abort(),
        Se(d.navigation.location, {
          matches: En,
          loaderData: mt,
          errors: Jt,
          fetchers: new Map(d.fetchers),
        }))
      : (q(
          ue(
            { errors: Jt, loaderData: Nc(d.loaderData, mt, En, Jt) },
            yi || Dt.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (K = !1));
  }
  async function Ll(w, S, C, z, H, $) {
    let V = d.fetchers.get(w),
      I = Ir($, V ? V.data : void 0);
    d.fetchers.set(w, I), q({ fetchers: new Map(d.fetchers) });
    let A = new AbortController(),
      ae = Ur(e.history, C, A.signal);
    Z.set(w, A);
    let De = nt,
      X = await Ar("loader", ae, z, H, o, l, u);
    if (
      (Tn(X) && (X = (await hp(X, ae.signal, !0)) || X),
      Z.get(w) === A && Z.delete(w),
      ae.signal.aborted)
    )
      return;
    if (cr(X))
      if (Ct > De) {
        let he = Vn(void 0);
        d.fetchers.set(w, he), q({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        Pe.add(w), await lt(d, X);
        return;
      }
    if (el(X)) {
      let he = rr(d.matches, S);
      d.fetchers.delete(w),
        q({
          fetchers: new Map(d.fetchers),
          errors: { [he.route.id]: X.error },
        });
      return;
    }
    Q(!Tn(X), "Unhandled fetcher deferred data");
    let te = Vn(X.data);
    d.fetchers.set(w, te), q({ fetchers: new Map(d.fetchers) });
  }
  async function lt(w, S, C) {
    let {
      submission: z,
      fetcherSubmission: H,
      replace: $,
    } = C === void 0 ? {} : C;
    S.revalidate && (K = !0);
    let V = gl(w.location, S.location, { _isRedirect: !0 });
    if ((Q(V, "Expected a location on the redirect navigation"), n)) {
      let te = !1;
      if (S.reloadDocument) te = !0;
      else if (fp.test(S.location)) {
        const he = e.history.createURL(S.location);
        te = he.origin !== t.location.origin || kr(he.pathname, u) == null;
      }
      if (te) {
        $ ? t.location.replace(S.location) : t.location.assign(S.location);
        return;
      }
    }
    T = null;
    let I = $ === !0 ? ge.Replace : ge.Push,
      { formMethod: A, formAction: ae, formEncType: De } = w.navigation;
    !z && !H && A && ae && De && (z = Oc(w.navigation));
    let X = z || H;
    if (Xy.has(S.status) && X && wt(X.formMethod))
      await W(I, V, {
        submission: ue({}, X, { formAction: S.location }),
        preventScrollReset: L,
      });
    else {
      let te = Qi(V, z);
      await W(I, V, {
        overrideNavigation: te,
        fetcherSubmission: H,
        preventScrollReset: L,
      });
    }
  }
  async function Ie(w, S, C, z, H) {
    let $ = await Promise.all([
        ...C.map((A) => Ar("loader", H, A, S, o, l, u)),
        ...z.map((A) =>
          A.matches && A.match && A.controller
            ? Ar(
                "loader",
                Ur(e.history, A.path, A.controller.signal),
                A.match,
                A.matches,
                o,
                l,
                u
              )
            : { type: me.error, error: ot(404, { pathname: A.path }) }
        ),
      ]),
      V = $.slice(0, C.length),
      I = $.slice(C.length);
    return (
      await Promise.all([
        Tc(
          w,
          C,
          V,
          V.map(() => H.signal),
          !1,
          d.loaderData
        ),
        Tc(
          w,
          z.map((A) => A.match),
          I,
          z.map((A) => (A.controller ? A.controller.signal : null)),
          !0
        ),
      ]),
      { results: $, loaderResults: V, fetcherResults: I }
    );
  }
  function Bn() {
    (K = !0),
      B.push(...fi()),
      We.forEach((w, S) => {
        Z.has(S) && (ve.push(S), ht(S));
      });
  }
  function wn(w, S, C) {
    let z = rr(d.matches, S);
    $n(w), q({ errors: { [z.route.id]: C }, fetchers: new Map(d.fetchers) });
  }
  function $n(w) {
    let S = d.fetchers.get(w);
    Z.has(w) && !(S && S.state === "loading" && rt.has(w)) && ht(w),
      We.delete(w),
      rt.delete(w),
      Pe.delete(w),
      d.fetchers.delete(w);
  }
  function ht(w) {
    let S = Z.get(w);
    Q(S, "Expected fetch controller: " + w), S.abort(), Z.delete(w);
  }
  function xn(w) {
    for (let S of w) {
      let C = _e(S),
        z = Vn(C.data);
      d.fetchers.set(S, z);
    }
  }
  function ts() {
    let w = [],
      S = !1;
    for (let C of Pe) {
      let z = d.fetchers.get(C);
      Q(z, "Expected fetcher: " + C),
        z.state === "loading" && (Pe.delete(C), w.push(C), (S = !0));
    }
    return xn(w), S;
  }
  function ns(w) {
    let S = [];
    for (let [C, z] of rt)
      if (z < w) {
        let H = d.fetchers.get(C);
        Q(H, "Expected fetcher: " + C),
          H.state === "loading" && (ht(C), rt.delete(C), S.push(C));
      }
    return xn(S), S.length > 0;
  }
  function $p(w, S) {
    let C = d.blockers.get(w) || Fr;
    return j.get(w) !== S && j.set(w, S), C;
  }
  function rs(w) {
    d.blockers.delete(w), j.delete(w);
  }
  function jl(w, S) {
    let C = d.blockers.get(w) || Fr;
    Q(
      (C.state === "unblocked" && S.state === "blocked") ||
        (C.state === "blocked" && S.state === "blocked") ||
        (C.state === "blocked" && S.state === "proceeding") ||
        (C.state === "blocked" && S.state === "unblocked") ||
        (C.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + S.state
    );
    let z = new Map(d.blockers);
    z.set(w, S), q({ blockers: z });
  }
  function ls(w) {
    let { currentLocation: S, nextLocation: C, historyAction: z } = w;
    if (j.size === 0) return;
    j.size > 1 && gr(!1, "A router only supports one blocker at a time");
    let H = Array.from(j.entries()),
      [$, V] = H[H.length - 1],
      I = d.blockers.get($);
    if (
      !(I && I.state === "proceeding") &&
      V({ currentLocation: S, nextLocation: C, historyAction: z })
    )
      return $;
  }
  function fi(w) {
    let S = [];
    return (
      O.forEach((C, z) => {
        (!w || w(z)) && (C.cancel(), S.push(z), O.delete(z));
      }),
      S
    );
  }
  function Hp(w, S, C) {
    if (((m = w), (y = S), (x = C || null), !g && d.navigation === Wi)) {
      g = !0;
      let z = is(d.location, d.matches);
      z != null && q({ restoreScrollPosition: z });
    }
    return () => {
      (m = null), (y = null), (x = null);
    };
  }
  function os(w, S) {
    return (
      (x &&
        x(
          w,
          S.map((z) => Ny(z, d.loaderData))
        )) ||
      w.key
    );
  }
  function Vp(w, S) {
    if (m && y) {
      let C = os(w, S);
      m[C] = y();
    }
  }
  function is(w, S) {
    if (m) {
      let C = os(w, S),
        z = m[C];
      if (typeof z == "number") return z;
    }
    return null;
  }
  function Wp(w) {
    (o = {}), (a = Va(w, l, void 0, o));
  }
  return (
    (v = {
      get basename() {
        return u;
      },
      get state() {
        return d;
      },
      get routes() {
        return i;
      },
      initialize: ne,
      subscribe: pt,
      enableScrollRestoration: Hp,
      navigate: Ue,
      fetch: Tl,
      revalidate: bt,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: _e,
      deleteFetcher: $n,
      dispose: de,
      getBlocker: $p,
      deleteBlocker: rs,
      _internalFetchControllers: Z,
      _internalActiveDeferreds: O,
      _internalSetRoutes: Wp,
    }),
    v
  );
}
function ev(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Wa(e, t, n, r, l, o, i) {
  let a, u;
  if (o != null && i !== "path") {
    a = [];
    for (let c of t)
      if ((a.push(c), c.route.id === o)) {
        u = c;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = Ku(
    l || ".",
    ni(a).map((c) => c.pathnameBase),
    kr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !Ju(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : It([n, s.pathname])),
    An(s)
  );
}
function xc(e, t, n, r) {
  if (!r || !ev(r)) return { path: n };
  if (r.formMethod && !av(r.formMethod))
    return { path: n, error: ot(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: ot(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = pp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!wt(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, y) => {
              let [g, P] = y;
              return (
                "" +
                x +
                g +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!wt(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = Qa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Qa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Cc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Cc(u));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (wt(c.formMethod)) return { path: n, submission: c };
  let h = Kt(n);
  return (
    t && h.search && Ju(h.search) && u.append("index", ""),
    (h.search = "?" + u),
    { path: An(h), submission: c }
  );
}
function tv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Sc(e, t, n, r, l, o, i, a, u, s, c, h, m, x) {
  let y = x ? Object.values(x)[0] : m ? Object.values(m)[0] : void 0,
    g = e.createURL(t.location),
    P = e.createURL(l),
    p = x ? Object.keys(x)[0] : void 0,
    v = tv(n, p).filter((k, L) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (nv(t.loaderData, t.matches[L], k) || i.some((K) => K === k.route.id))
        return !0;
      let T = t.matches[L],
        D = k;
      return Ec(
        k,
        ue(
          {
            currentUrl: g,
            currentParams: T.params,
            nextUrl: P,
            nextParams: D.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              o ||
              g.pathname + g.search === P.pathname + P.search ||
              g.search !== P.search ||
              dp(T, D),
          }
        )
      );
    }),
    d = [];
  return (
    u.forEach((k, L) => {
      if (!n.some((ve) => ve.route.id === k.routeId)) return;
      let T = nr(c, k.path, h);
      if (!T) {
        d.push({
          key: L,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let D = t.fetchers.get(L),
        K = Ka(T, k.path),
        B = !1;
      s.has(L)
        ? (B = !1)
        : a.includes(L)
        ? (B = !0)
        : D && D.state !== "idle" && D.data === void 0
        ? (B = o)
        : (B = Ec(
            K,
            ue(
              {
                currentUrl: g,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: P,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: o }
            )
          )),
        B &&
          d.push({
            key: L,
            routeId: k.routeId,
            path: k.path,
            matches: T,
            match: K,
            controller: new AbortController(),
          });
    }),
    [v, d]
  );
}
function nv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function dp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ec(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function kc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    gr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Cy.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ue({}, t(l), { lazy: void 0 }));
}
async function Ar(e, t, n, r, l, o, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    c,
    h = (y) => {
      let g,
        P = new Promise((p, f) => (g = f));
      return (
        (c = () => g()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          y({ request: t, params: n.params, context: a.requestContext }),
          P,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let g,
          P = await Promise.all([
            h(y).catch((p) => {
              g = p;
            }),
            kc(n.route, o, l),
          ]);
        if (g) throw g;
        s = P[0];
      } else if ((await kc(n.route, o, l), (y = n.route[e]), y)) s = await h(y);
      else if (e === "action") {
        let g = new URL(t.url),
          P = g.pathname + g.search;
        throw ot(405, { method: t.method, pathname: P, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (y) s = await h(y);
    else {
      let g = new URL(t.url),
        P = g.pathname + g.search;
      throw ot(404, { pathname: P });
    }
    Q(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (u = me.error), (s = y);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (iv(s)) {
    let y = s.status;
    if (Yy.has(y)) {
      let p = s.headers.get("Location");
      if (
        (Q(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !fp.test(p))
      )
        p = Wa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, p);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          v = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          d = kr(v.pathname, i) != null;
        v.origin === f.origin && d && (p = v.pathname + v.search + v.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set("Location", p), s);
      return {
        type: me.redirect,
        status: y,
        location: p,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === me.error ? me.error : me.data, response: s };
    let g,
      P = s.headers.get("Content-Type");
    return (
      P && /\bapplication\/json\b/.test(P)
        ? (g = await s.json())
        : (g = await s.text()),
      u === me.error
        ? { type: u, error: new bu(y, s.statusText, g), headers: s.headers }
        : { type: me.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === me.error) return { type: u, error: s };
  if (ov(s)) {
    var m, x;
    return {
      type: me.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((x = s.init) == null ? void 0 : x.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: me.data, data: s };
}
function Ur(e, t, n, r) {
  let l = e.createURL(pp(t)).toString(),
    o = { signal: n };
  if (r && wt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Qa(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Qa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Cc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function rv(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, h) => {
      let m = t[h].route.id;
      if (
        (Q(!cr(c), "Cannot handle redirect results in processLoaderData"),
        el(c))
      ) {
        let x = rr(e, m),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[x.route.id] == null && (i[x.route.id] = y),
          (o[m] = void 0),
          u || ((u = !0), (a = sp(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        Tn(c)
          ? (l.set(m, c.deferredData), (o[m] = c.deferredData.data))
          : (o[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (a = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Rc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = rv(t, n, r, l, a);
  for (let c = 0; c < o.length; c++) {
    let { key: h, match: m, controller: x } = o[c];
    Q(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = i[c];
    if (!(x && x.signal.aborted))
      if (el(y)) {
        let g = rr(e.matches, m == null ? void 0 : m.route.id);
        (s && s[g.route.id]) || (s = ue({}, s, { [g.route.id]: y.error })),
          e.fetchers.delete(h);
      } else if (cr(y)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (Tn(y)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let g = Vn(y.data);
        e.fetchers.set(h, g);
      }
  }
  return { loaderData: u, errors: s };
}
function Nc(e, t, n, r) {
  let l = ue({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function rr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Pc(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ot(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new bu(e || 500, i, new Error(a), !0)
  );
}
function _c(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (cr(n)) return { result: n, idx: t };
  }
}
function pp(e) {
  let t = typeof e == "string" ? Kt(e) : e;
  return An(ue({}, t, { hash: "" }));
}
function lv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Tn(e) {
  return e.type === me.deferred;
}
function el(e) {
  return e.type === me.error;
}
function cr(e) {
  return (e && e.type) === me.redirect;
}
function ov(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function iv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function av(e) {
  return Jy.has(e.toLowerCase());
}
function wt(e) {
  return Ky.has(e.toLowerCase());
}
async function Tc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((h) => h.route.id === u.route.id),
      c = s != null && !dp(s, u) && (o && o[u.route.id]) !== void 0;
    if (Tn(a) && (l || c)) {
      let h = r[i];
      Q(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await hp(a, h, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function hp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: me.error, error: l };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function Ju(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ka(e, t) {
  let n = typeof t == "string" ? Kt(t).search : t.search;
  if (e[e.length - 1].route.index && Ju(n || "")) return e[e.length - 1];
  let r = ni(e);
  return r[r.length - 1];
}
function Oc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Qi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function uv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ir(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function sv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Vn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
const ri = _.createContext(null),
  mp = _.createContext(null),
  Cr = _.createContext(null),
  li = _.createContext(null),
  gn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  yp = _.createContext(null);
function cv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Nl() || Q(!1);
  let { basename: r, navigator: l } = _.useContext(Cr),
    { hash: o, pathname: i, search: a } = gp(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : It([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function Nl() {
  return _.useContext(li) != null;
}
function oi() {
  return Nl() || Q(!1), _.useContext(li).location;
}
function vp(e) {
  _.useContext(Cr).static || _.useLayoutEffect(e);
}
function fv() {
  let { isDataRoute: e } = _.useContext(gn);
  return e ? Rv() : dv();
}
function dv() {
  Nl() || Q(!1);
  let e = _.useContext(ri),
    { basename: t, navigator: n } = _.useContext(Cr),
    { matches: r } = _.useContext(gn),
    { pathname: l } = oi(),
    o = JSON.stringify(ni(r).map((u) => u.pathnameBase)),
    i = _.useRef(!1);
  return (
    vp(() => {
      i.current = !0;
    }),
    _.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let c = Ku(u, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : It([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const pv = _.createContext(null);
function hv(e) {
  let t = _.useContext(gn).outlet;
  return t && _.createElement(pv.Provider, { value: e }, t);
}
function gp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = _.useContext(gn),
    { pathname: l } = oi(),
    o = JSON.stringify(ni(r).map((i) => i.pathnameBase));
  return _.useMemo(() => Ku(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function mv(e, t, n) {
  Nl() || Q(!1);
  let { navigator: r } = _.useContext(Cr),
    { matches: l } = _.useContext(gn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = oi(),
    s;
  if (t) {
    var c;
    let g = typeof t == "string" ? Kt(t) : t;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || Q(!1),
      (s = g);
  } else s = u;
  let h = s.pathname || "/",
    m = a === "/" ? h : h.slice(a.length) || "/",
    x = nr(e, { pathname: m }),
    y = xv(
      x &&
        x.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: It([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : It([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && y
    ? _.createElement(
        li.Provider,
        {
          value: {
            location: Ao(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ge.Pop,
          },
        },
        y
      )
    : y;
}
function yv() {
  let e = Cv(),
    t = sp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    o
  );
}
const vv = _.createElement(yv, null);
class gv extends _.Component {
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
          error: t.error || n.error,
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
    return this.state.error
      ? _.createElement(
          gn.Provider,
          { value: this.props.routeContext },
          _.createElement(yp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function wv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(ri);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(gn.Provider, { value: t }, r)
  );
}
function xv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = o.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
    );
    a >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, u, s) => {
    let c = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      h = null;
    n && (h = u.route.errorElement || vv);
    let m = t.concat(o.slice(0, s + 1)),
      x = () => {
        let y;
        return (
          c
            ? (y = h)
            : u.route.Component
            ? (y = _.createElement(u.route.Component, null))
            : u.route.element
            ? (y = u.route.element)
            : (y = a),
          _.createElement(wv, {
            match: u,
            routeContext: { outlet: a, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? _.createElement(gv, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: c,
          children: x(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var wp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(wp || {}),
  Uo = (function (e) {
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
  })(Uo || {});
function Sv(e) {
  let t = _.useContext(ri);
  return t || Q(!1), t;
}
function Ev(e) {
  let t = _.useContext(mp);
  return t || Q(!1), t;
}
function kv(e) {
  let t = _.useContext(gn);
  return t || Q(!1), t;
}
function xp(e) {
  let t = kv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function Cv() {
  var e;
  let t = _.useContext(yp),
    n = Ev(Uo.UseRouteError),
    r = xp(Uo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Rv() {
  let { router: e } = Sv(wp.UseNavigateStable),
    t = xp(Uo.UseNavigateStable),
    n = _.useRef(!1);
  return (
    vp(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ao({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Nv = "startTransition",
  Lc = ch[Nv];
function Pv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = _.useState(n.state),
    { v7_startTransition: i } = r || {},
    a = _.useCallback(
      (h) => {
        i && Lc ? Lc(() => o(h)) : o(h);
      },
      [o, i]
    );
  _.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let u = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (h) => n.navigate(h),
        push: (h, m, x) =>
          n.navigate(h, {
            state: m,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
        replace: (h, m, x) =>
          n.navigate(h, {
            replace: !0,
            state: m,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/",
    c = _.useMemo(
      () => ({ router: n, navigator: u, static: !1, basename: s }),
      [n, u, s]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      ri.Provider,
      { value: c },
      _.createElement(
        mp.Provider,
        { value: l },
        _.createElement(
          Ov,
          {
            basename: s,
            location: l.location,
            navigationType: l.historyAction,
            navigator: u,
          },
          l.initialized
            ? _.createElement(_v, { routes: n.routes, state: l })
            : t
        )
      )
    ),
    null
  );
}
function _v(e) {
  let { routes: t, state: n } = e;
  return mv(t, void 0, n);
}
function Tv(e) {
  return hv(e.context);
}
function Ov(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ge.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Nl() && Q(!1);
  let a = t.replace(/^\/*/, "/"),
    u = _.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
  typeof r == "string" && (r = Kt(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: h = "",
      state: m = null,
      key: x = "default",
    } = r,
    y = _.useMemo(() => {
      let g = kr(s, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: h, state: m, key: x },
            navigationType: l,
          };
    }, [a, s, c, h, m, x, l]);
  return y == null
    ? null
    : _.createElement(
        Cr.Provider,
        { value: u },
        _.createElement(li.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function Lv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wl() {
  return (
    (wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wl.apply(this, arguments)
  );
}
function jv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Dv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function zv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Dv(e);
}
const Mv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Fv(e, t) {
  return Zy({
    basename: t == null ? void 0 : t.basename,
    future: wl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Sy({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Av(),
    routes: e,
    mapRouteProperties: Lv,
  }).initialize();
}
function Av() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = wl({}, t, { errors: Uv(t.errors) })), t;
}
function Uv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new bu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Iv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Bv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zt = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
      } = t,
      h = jv(t, Mv),
      { basename: m } = _.useContext(Cr),
      x,
      y = !1;
    if (typeof s == "string" && Bv.test(s) && ((x = s), Iv))
      try {
        let f = new URL(window.location.href),
          v = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s),
          d = kr(v.pathname, m);
        v.origin === f.origin && d != null
          ? (s = d + v.search + v.hash)
          : (y = !0);
      } catch {}
    let g = cv(s, { relative: l }),
      P = $v(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
      });
    function p(f) {
      r && r(f), f.defaultPrevented || P(f);
    }
    return _.createElement(
      "a",
      wl({}, h, { href: x || g, onClick: y || o ? r : p, ref: n, target: u })
    );
  });
var jc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(jc || (jc = {}));
var Dc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dc || (Dc = {}));
function $v(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    a = fv(),
    u = oi(),
    s = gp(e, { relative: i });
  return _.useCallback(
    (c) => {
      if (zv(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : An(u) === An(s);
        a(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [u, a, s, r, l, n, e, o, i]
  );
}
function Hv() {
  return R.jsx("footer", {
    className:
      "z-50 bg-head fixed bottom-0 py-[0.25rem] md:py-4 tall:py-[0.25rem] w-screen text-center font-bold",
    children: R.jsx("p", { children: "© Thousand Sunny 2023" }),
  });
}
const zc = "/assets/logo-k-135809f7.png";
function Vv() {
  return R.jsxs("nav", {
    className: "Navbar",
    children: [
      R.jsx("section", {
        className: "navbar-mobile md:hidden",
        children: R.jsxs("div", {
          className:
            "navbar fixed-top w-screen flex flex-row justify-between px-4 py-2 bg-head",
          children: [
            R.jsxs("div", {
              className: "logo-title flex flex-row",
              children: [
                R.jsx("div", {
                  className: "logo-mobile-container",
                  children: R.jsx("img", {
                    className: "logo-mobile h-12",
                    src: zc,
                    alt: "logo",
                  }),
                }),
                R.jsx("div", {
                  className:
                    "navbar-mobile self-center font-bold text-xl  ml-4",
                  children: R.jsx("h2", { children: " Kaamelott " }),
                }),
              ],
            }),
            R.jsxs("ul", {
              className:
                "links-mobile self-center w-1/2 flex flex-row gap-2 justify-around",
              children: [
                R.jsxs("li", {
                  children: [R.jsx(Zt, { to: "/", children: "Home" }), " "],
                }),
                R.jsxs("li", {
                  children: [
                    R.jsx(Zt, { to: "/quiz", children: " Quiz " }),
                    " ",
                  ],
                }),
                R.jsxs("li", {
                  children: [
                    R.jsx(Zt, { to: "/contact", children: " Contact" }),
                    " ",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      R.jsx("section", {
        className: "Navbar-desktop hidden md:flex",
        children: R.jsxs("div", {
          className:
            "navbar-desktop fixed-top w-screen flex flex-row justify-between bg-head h-16",
          children: [
            R.jsx("div", {
              className:
                "navbar-desktop text-2xl flex justify-center first-letter self-center font-bold  ml-4 w-1/3",
              children: R.jsx("h2", { children: " Kaamelott - Le jeu " }),
            }),
            R.jsx("div", {
              className: "logo-desktop-container w-1/3 flex justify-center",
              children: R.jsx("img", {
                className: "logo-mobile h-full",
                src: zc,
                alt: "logo",
              }),
            }),
            R.jsxs("ul", {
              className:
                "links-desktop h-full text-xl w-1/3 flex flex-row gap-2 justify-around",
              children: [
                R.jsx(Zt, {
                  className: " py-4 px-4 h-full hover:bg-black hover:text-head",
                  to: "/",
                  children: "Home",
                }),
                " ",
                R.jsxs(Zt, {
                  className: " py-4 px-4 h-full hover:bg-black hover:text-head",
                  to: "/quiz",
                  children: [" ", "Quiz", " "],
                }),
                " ",
                R.jsxs(Zt, {
                  className: " py-4 px-4 h-full hover:bg-black hover:text-head",
                  to: "/contact",
                  children: [" ", "Contact"],
                }),
                " ",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Wv() {
  return R.jsxs("div", {
    className: "font-amarante",
    children: [
      R.jsx(Vv, {}),
      R.jsx("main", { children: R.jsx(Tv, {}) }),
      R.jsx(Hv, {}),
    ],
  });
}
const Qv = "/assets/kaamelott-26a4a541.mp3";
function Kv() {
  return (
    _.useEffect(() => {
      new Audio(Qv).play();
    }),
    R.jsx("div", {
      className:
        "flex h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] justify-center items-center bg-[url('./assets/Affiche-film.jpg')] md:bg-[url('./assets/fonds.png')] bg-cover bg-no-repeat fixed w-screen bg-center md:bg-top",
      children: R.jsx(Zt, {
        to: "/quiz",
        className:
          "px-24 md:px-40 py-4 md:py-8 bg-label hover:bg-label-hover rounded-[25px] font-bold text-2xl md:text-4xl border-solid border-black border-[1px] md:mt-[30%]",
        children: "Start",
      }),
    })
  );
}
function Sp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: bv } = Object.prototype,
  { getPrototypeOf: Yu } = Object,
  ii = ((e) => (t) => {
    const n = bv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Lt = (e) => ((e = e.toLowerCase()), (t) => ii(t) === e),
  ai = (e) => (t) => typeof t === e,
  { isArray: Rr } = Array,
  xl = ai("undefined");
function Jv(e) {
  return (
    e !== null &&
    !xl(e) &&
    e.constructor !== null &&
    !xl(e.constructor) &&
    ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ep = Lt("ArrayBuffer");
function Yv(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ep(e.buffer)),
    t
  );
}
const Xv = ai("string"),
  ct = ai("function"),
  kp = ai("number"),
  ui = (e) => e !== null && typeof e == "object",
  qv = (e) => e === !0 || e === !1,
  so = (e) => {
    if (ii(e) !== "object") return !1;
    const t = Yu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Gv = Lt("Date"),
  Zv = Lt("File"),
  eg = Lt("Blob"),
  tg = Lt("FileList"),
  ng = (e) => ui(e) && ct(e.pipe),
  rg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ct(e.append) &&
          ((t = ii(e)) === "formdata" ||
            (t === "object" &&
              ct(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lg = Lt("URLSearchParams"),
  og = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Rr(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function Cp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const Rp = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Np = (e) => !xl(e) && e !== Rp;
function ba() {
  const { caseless: e } = (Np(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && Cp(t, l)) || l;
      so(t[o]) && so(r)
        ? (t[o] = ba(t[o], r))
        : so(r)
        ? (t[o] = ba({}, r))
        : Rr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Pl(arguments[r], n);
  return t;
}
const ig = (e, t, n, { allOwnKeys: r } = {}) => (
    Pl(
      t,
      (l, o) => {
        n && ct(l) ? (e[o] = Sp(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ag = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ug = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  sg = (e, t, n, r) => {
    let l, o, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && Yu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  cg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  fg = (e) => {
    if (!e) return null;
    if (Rr(e)) return e;
    let t = e.length;
    if (!kp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  dg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Yu(Uint8Array)),
  pg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  hg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  mg = Lt("HTMLFormElement"),
  yg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  Mc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  vg = Lt("RegExp"),
  Pp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Pl(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  gg = (e) => {
    Pp(e, (t, n) => {
      if (ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ct(r)) {
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
  wg = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Rr(e) ? r(e) : r(String(e).split(t)), n;
  },
  xg = () => {},
  Sg = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ki = "abcdefghijklmnopqrstuvwxyz",
  Fc = "0123456789",
  _p = { DIGIT: Fc, ALPHA: Ki, ALPHA_DIGIT: Ki + Ki.toUpperCase() + Fc },
  Eg = (e = 16, t = _p.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function kg(e) {
  return !!(
    e &&
    ct(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Cg = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (ui(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Rr(r) ? [] : {};
            return (
              Pl(r, (i, a) => {
                const u = n(i, l + 1);
                !xl(u) && (o[a] = u);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Rg = Lt("AsyncFunction"),
  Ng = (e) => e && (ui(e) || ct(e)) && ct(e.then) && ct(e.catch),
  E = {
    isArray: Rr,
    isArrayBuffer: Ep,
    isBuffer: Jv,
    isFormData: rg,
    isArrayBufferView: Yv,
    isString: Xv,
    isNumber: kp,
    isBoolean: qv,
    isObject: ui,
    isPlainObject: so,
    isUndefined: xl,
    isDate: Gv,
    isFile: Zv,
    isBlob: eg,
    isRegExp: vg,
    isFunction: ct,
    isStream: ng,
    isURLSearchParams: lg,
    isTypedArray: dg,
    isFileList: tg,
    forEach: Pl,
    merge: ba,
    extend: ig,
    trim: og,
    stripBOM: ag,
    inherits: ug,
    toFlatObject: sg,
    kindOf: ii,
    kindOfTest: Lt,
    endsWith: cg,
    toArray: fg,
    forEachEntry: pg,
    matchAll: hg,
    isHTMLForm: mg,
    hasOwnProperty: Mc,
    hasOwnProp: Mc,
    reduceDescriptors: Pp,
    freezeMethods: gg,
    toObjectSet: wg,
    toCamelCase: yg,
    noop: xg,
    toFiniteNumber: Sg,
    findKey: Cp,
    global: Rp,
    isContextDefined: Np,
    ALPHABET: _p,
    generateString: Eg,
    isSpecCompliantForm: kg,
    toJSONObject: Cg,
    isAsyncFn: Rg,
    isThenable: Ng,
  };
function J(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
E.inherits(J, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Tp = J.prototype,
  Op = {};
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
  Op[e] = { value: e };
});
Object.defineProperties(J, Op);
Object.defineProperty(Tp, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, l, o) => {
  const i = Object.create(Tp);
  return (
    E.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    J.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Pg = null;
function Ja(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Lp(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ac(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = Lp(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function _g(e) {
  return E.isArray(e) && !e.some(Ja);
}
const Tg = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function si(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, P) {
        return !E.isUndefined(P[g]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(l)) throw new TypeError("visitor must be a function");
  function s(y) {
    if (y === null) return "";
    if (E.isDate(y)) return y.toISOString();
    if (!u && E.isBlob(y))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(y) || E.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, g, P) {
    let p = y;
    if (y && !P && typeof y == "object") {
      if (E.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (E.isArray(y) && _g(y)) ||
        ((E.isFileList(y) || E.endsWith(g, "[]")) && (p = E.toArray(y)))
      )
        return (
          (g = Lp(g)),
          p.forEach(function (v, d) {
            !(E.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? Ac([g], d, o) : i === null ? g : g + "[]",
                s(v)
              );
          }),
          !1
        );
    }
    return Ja(y) ? !0 : (t.append(Ac(P, g, o), s(y)), !1);
  }
  const h = [],
    m = Object.assign(Tg, {
      defaultVisitor: c,
      convertValue: s,
      isVisitable: Ja,
    });
  function x(y, g) {
    if (!E.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(y),
        E.forEach(y, function (p, f) {
          (!(E.isUndefined(p) || p === null) &&
            l.call(t, p, E.isString(f) ? f.trim() : f, g, m)) === !0 &&
            x(p, g ? g.concat(f) : [f]);
        }),
        h.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function Uc(e) {
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
function Xu(e, t) {
  (this._pairs = []), e && si(e, this, t);
}
const jp = Xu.prototype;
jp.append = function (t, n) {
  this._pairs.push([t, n]);
};
jp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Uc);
      }
    : Uc;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function Og(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Dp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Og,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = E.isURLSearchParams(t) ? t.toString() : new Xu(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Lg {
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
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ic = Lg,
  zp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  jg = typeof URLSearchParams < "u" ? URLSearchParams : Xu,
  Dg = typeof FormData < "u" ? FormData : null,
  zg = typeof Blob < "u" ? Blob : null,
  Mg = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Fg = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  _t = {
    isBrowser: !0,
    classes: { URLSearchParams: jg, FormData: Dg, Blob: zg },
    isStandardBrowserEnv: Mg,
    isStandardBrowserWebWorkerEnv: Fg,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Ag(e, t) {
  return si(
    e,
    new _t.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return _t.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ug(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Ig(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Mp(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    const a = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && E.isArray(l) ? l.length : i),
      u
        ? (E.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !a)
        : ((!l[i] || !E.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && E.isArray(l[i]) && (l[i] = Ig(l[i])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, l) => {
        t(Ug(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function Bg(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const qu = {
  transitional: zp,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = E.isObject(t);
      if ((o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return l && l ? JSON.stringify(Mp(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ag(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return si(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), Bg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || qu.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && E.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? J.from(a, J.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
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
  env: { FormData: _t.classes.FormData, Blob: _t.classes.Blob },
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  qu.headers[e] = {};
});
const Gu = qu,
  $g = E.toObjectSet([
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
  Hg = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && $g[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Bc = Symbol("internals");
function Br(e) {
  return e && String(e).trim().toLowerCase();
}
function co(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(co) : String(e);
}
function Vg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Wg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bi(e, t, n, r, l) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function Qg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Kg(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class ci {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(a, u, s) {
      const c = Br(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const h = E.findKey(l, c);
      (!h || l[h] === void 0 || s === !0 || (s === void 0 && l[h] !== !1)) &&
        (l[h || u] = co(a));
    }
    const i = (a, u) => E.forEach(a, (s, c) => o(s, c, u));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : E.isString(t) && (t = t.trim()) && !Wg(t)
        ? i(Hg(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Br(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return Vg(l);
        if (E.isFunction(n)) return n.call(this, l, r);
        if (E.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Br(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = Br(i)), i)) {
        const a = E.findKey(r, i);
        a && (!n || bi(r, r[a], a, n)) && (delete r[a], (l = !0));
      }
    }
    return E.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || bi(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (l, o) => {
        const i = E.findKey(r, o);
        if (i) {
          (n[i] = co(l)), delete n[o];
          return;
        }
        const a = t ? Qg(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = co(l)), (r[a] = !0);
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
      E.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && E.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[Bc] = this[Bc] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const a = Br(i);
      r[a] || (Kg(l, i), (r[a] = !0));
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ci.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(ci.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(ci);
const Bt = ci;
function Ji(e, t) {
  const n = this || Gu,
    r = t || n,
    l = Bt.from(r.headers);
  let o = r.data;
  return (
    E.forEach(e, function (a) {
      o = a.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function Fp(e) {
  return !!(e && e.__CANCEL__);
}
function _l(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(_l, J, { __CANCEL__: !0 });
function bg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Jg = _t.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, o, i, a) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            E.isNumber(l) && u.push("expires=" + new Date(l).toGMTString()),
            E.isString(o) && u.push("path=" + o),
            E.isString(i) && u.push("domain=" + i),
            a === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Yg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xg(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ap(e, t) {
  return e && !Yg(t) ? Xg(e, t) : t;
}
const qg = _t.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(o) {
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
        (r = l(window.location.href)),
        function (i) {
          const a = E.isString(i) ? l(i) : i;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Gg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Zg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const s = Date.now(),
        c = r[o];
      i || (i = s), (n[l] = u), (r[l] = s);
      let h = o,
        m = 0;
      for (; h !== l; ) (m += n[h++]), (h = h % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), s - i < t)) return;
      const x = c && s - c;
      return x ? Math.round((m * 1e3) / x) : void 0;
    }
  );
}
function $c(e, t) {
  let n = 0;
  const r = Zg(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      a = o - n,
      u = r(a),
      s = o <= i;
    n = o;
    const c = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && i && s ? (i - o) / u : void 0,
      event: l,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const e0 = typeof XMLHttpRequest < "u",
  t0 =
    e0 &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const o = Bt.from(e.headers).normalize(),
          i = e.responseType;
        let a;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        let s;
        E.isFormData(l) &&
          (_t.isStandardBrowserEnv || _t.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.getContentType(/^\s*multipart\/form-data/)
            ? E.isString((s = o.getContentType())) &&
              o.setContentType(s.replace(/^\s*(multipart\/form-data);+/, "$1"))
            : o.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(y + ":" + g));
        }
        const h = Ap(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Dp(h, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function m() {
          if (!c) return;
          const y = Bt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            P = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          bg(
            function (f) {
              n(f), u();
            },
            function (f) {
              r(f), u();
            },
            P
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = m)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (c.onabort = function () {
            c &&
              (r(new J("Request aborted", J.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new J("Network Error", J.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const P = e.transitional || zp;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new J(
                  g,
                  P.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          _t.isStandardBrowserEnv)
        ) {
          const y = qg(h) && e.xsrfCookieName && Jg.read(e.xsrfCookieName);
          y && o.set(e.xsrfHeaderName, y);
        }
        l === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            E.forEach(o.toJSON(), function (g, P) {
              c.setRequestHeader(P, g);
            }),
          E.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", $c(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", $c(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (y) => {
              c &&
                (r(!y || y.type ? new _l(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const x = Gg(h);
        if (x && _t.protocols.indexOf(x) === -1) {
          r(new J("Unsupported protocol " + x + ":", J.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(l || null);
      });
    },
  Ya = { http: Pg, xhr: t0 };
E.forEach(Ya, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hc = (e) => `- ${e}`,
  n0 = (e) => E.isFunction(e) || e === null || e === !1,
  Up = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !n0(n) && ((r = Ya[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([a, u]) =>
            `adapter ${a} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Hc).join(`
`)
            : " " + Hc(o[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ya,
  };
function Yi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new _l(null, e);
}
function Vc(e) {
  return (
    Yi(e),
    (e.headers = Bt.from(e.headers)),
    (e.data = Ji.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Up.getAdapter(e.adapter || Gu.adapter)(e).then(
      function (r) {
        return (
          Yi(e),
          (r.data = Ji.call(e, e.transformResponse, r)),
          (r.headers = Bt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Fp(r) ||
            (Yi(e),
            r &&
              r.response &&
              ((r.response.data = Ji.call(e, e.transformResponse, r.response)),
              (r.response.headers = Bt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Wc = (e) => (e instanceof Bt ? e.toJSON() : e);
function wr(e, t) {
  t = t || {};
  const n = {};
  function r(s, c, h) {
    return E.isPlainObject(s) && E.isPlainObject(c)
      ? E.merge.call({ caseless: h }, s, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function l(s, c, h) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(s)) return r(void 0, s, h);
    } else return r(s, c, h);
  }
  function o(s, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function i(s, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(s)) return r(void 0, s);
    } else return r(void 0, c);
  }
  function a(s, c, h) {
    if (h in t) return r(s, c);
    if (h in e) return r(void 0, s);
  }
  const u = {
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
    validateStatus: a,
    headers: (s, c) => l(Wc(s), Wc(c), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = u[c] || l,
        m = h(e[c], t[c], c);
      (E.isUndefined(m) && h !== a) || (n[c] = m);
    }),
    n
  );
}
const Ip = "1.6.0",
  Zu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Zu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Qc = {};
Zu.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Ip +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, a) => {
    if (t === !1)
      throw new J(
        l(i, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !Qc[i] &&
        ((Qc[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, a) : !0
    );
  };
};
function r0(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const a = e[o],
        u = a === void 0 || i(a, o, e);
      if (u !== !0)
        throw new J("option " + o + " must be " + u, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + o, J.ERR_BAD_OPTION);
  }
}
const Xa = { assertOptions: r0, validators: Zu },
  Xt = Xa.validators;
class Io {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ic(), response: new Ic() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = wr(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Xa.assertOptions(
        r,
        {
          silentJSONParsing: Xt.transitional(Xt.boolean),
          forcedJSONParsing: Xt.transitional(Xt.boolean),
          clarifyTimeoutError: Xt.transitional(Xt.boolean),
        },
        !1
      ),
      l != null &&
        (E.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Xa.assertOptions(
              l,
              { encode: Xt.function, serialize: Xt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && E.merge(o.common, o[n.method]);
    o &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        }
      ),
      (n.headers = Bt.concat(i, o));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function (g) {
      s.push(g.fulfilled, g.rejected);
    });
    let c,
      h = 0,
      m;
    if (!u) {
      const y = [Vc.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, s),
          m = y.length,
          c = Promise.resolve(n);
        h < m;

      )
        c = c.then(y[h++], y[h++]);
      return c;
    }
    m = a.length;
    let x = n;
    for (h = 0; h < m; ) {
      const y = a[h++],
        g = a[h++];
      try {
        x = y(x);
      } catch (P) {
        g.call(this, P);
        break;
      }
    }
    try {
      c = Vc.call(this, x);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, m = s.length; h < m; ) c = c.then(s[h++], s[h++]);
    return c;
  }
  getUri(t) {
    t = wr(this.defaults, t);
    const n = Ap(t.baseURL, t.url);
    return Dp(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Io.prototype[t] = function (n, r) {
    return this.request(
      wr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        wr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Io.prototype[t] = n()), (Io.prototype[t + "Form"] = n(!0));
});
const fo = Io;
class es {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, a) {
        r.reason || ((r.reason = new _l(o, i, a)), n(r.reason));
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
  static source() {
    let t;
    return {
      token: new es(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const l0 = es;
function o0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function i0(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const qa = {
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
Object.entries(qa).forEach(([e, t]) => {
  qa[t] = e;
});
const a0 = qa;
function Bp(e) {
  const t = new fo(e),
    n = Sp(fo.prototype.request, t);
  return (
    E.extend(n, fo.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Bp(wr(e, l));
    }),
    n
  );
}
const xe = Bp(Gu);
xe.Axios = fo;
xe.CanceledError = _l;
xe.CancelToken = l0;
xe.isCancel = Fp;
xe.VERSION = Ip;
xe.toFormData = si;
xe.AxiosError = J;
xe.Cancel = xe.CanceledError;
xe.all = function (t) {
  return Promise.all(t);
};
xe.spread = o0;
xe.isAxiosError = i0;
xe.mergeConfig = wr;
xe.AxiosHeaders = Bt;
xe.formToJSON = (e) => Mp(E.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = Up.getAdapter;
xe.HttpStatusCode = a0;
xe.default = xe;
const Kc = xe;
function kn(e) {
  return e[Math.floor(Math.random() * e.length)];
}
const u0 = "/assets/kaamelott-leodagan-a513c2a8.gif",
  s0 = "/assets/kaamelott-yvain-33f7c65d.gif",
  c0 = "/assets/kaamelott-karadoc-97b0ce4c.gif",
  f0 = "/assets/interrogation-f6aba8d3.jpg";
function d0() {
  const e = "https://kaamelott.chaudie.re/api",
    [t, n] = _.useState(0),
    [r, l] = _.useState(0),
    [o, i] = _.useState(0),
    [a, u] = _.useState(""),
    [s, c] = _.useState([]),
    [h, m] = _.useState([]),
    [x, y] = _.useState([]),
    [g, P] = _.useState([]),
    [p, f] = _.useState([]),
    [v, d] = _.useState([]),
    [k, L] = _.useState([]),
    [T, D] = _.useState([]),
    [K, B] = _.useState([]),
    [ve, Z] = _.useState([]),
    [nt, Ct] = _.useState([]),
    rt = [],
    Pe = [],
    We = [],
    O = [],
    [j, U] = _.useState([]);
  function ne() {
    let W = 0;
    c([]), m([]), y([]), P([]), f([]), d([]);
    function F() {
      Kc.get(`${e}/random`)
        .then((je) => {
          je.data.citation.citation.length < 230 &&
            W < 5 &&
            (c((_e) => [..._e, je.data.citation.citation]),
            m((_e) => [..._e, je.data.citation.infos.acteur]),
            f((_e) => [..._e, je.data.citation.infos.episode]),
            y((_e) => [..._e, je.data.citation.infos.personnage]),
            d((_e) => [
              ..._e,
              `${e}/personnage/${je.data.citation.infos.personnage}/pic`,
            ]),
            P((_e) => [..._e, je.data.citation.infos.saison]),
            (W += 1));
        })
        .catch((je) => console.error(`Oups, une erreur est survenu: ${je}`));
    }
    for (let je = 0; je < 50; je += 1) F();
  }
  function de() {
    Kc.get(`${e}/all`)
      .then((W) => {
        W.data.citation.map(
          (F) => (
            rt.indexOf(F.infos.acteur) === -1 && rt.push(F.infos.acteur), null
          )
        ),
          W.data.citation.map(
            (F) => (
              Pe.indexOf(F.infos.personnage) === -1 &&
                Pe.push(F.infos.personnage),
              null
            )
          ),
          W.data.citation.map(
            (F) => (
              We.indexOf(F.infos.saison) === -1 && We.push(F.infos.saison), null
            )
          ),
          W.data.citation.map(
            (F) => (
              O.indexOf(F.infos.episode) === -1 && O.push(F.infos.episode), null
            )
          ),
          D(rt),
          B(Pe),
          Z(We),
          Ct(O);
      })
      .catch((W) => console.error(W));
  }
  _.useEffect(() => {
    de(), ne();
  }, []);
  function pt(W, F, je) {
    const _e = W[je - 1];
    F.splice(F.indexOf(_e), 1);
    const Tl = kn(F);
    F.splice(F.indexOf(Tl), 1);
    const Ol = kn(F);
    F.splice(F.indexOf(Ol), 1);
    const Ll = kn(F);
    F.splice(F.indexOf(Ll), 1);
    const lt = [_e, Tl, Ol, Ll],
      Ie = [0, 1, 2, 3],
      Bn = kn(Ie);
    Ie.splice(Ie.indexOf(Bn), 1);
    const wn = kn(Ie);
    Ie.splice(Ie.indexOf(wn), 1);
    const $n = kn(Ie);
    Ie.splice(Ie.indexOf($n), 1);
    const ht = kn(Ie);
    Ie.splice(Ie.indexOf(ht), 1), L([lt[Bn], lt[wn], lt[$n], lt[ht]]);
    for (let xn = 0; xn < 4; xn += 1) lt[xn] !== void 0 && F.push(lt[xn]);
  }
  function q(W, F) {
    switch (F) {
      case 1:
        pt(x, K, W);
        break;
      case 2:
        pt(h, T, W);
        break;
      case 3:
        pt(g, ve, W);
        break;
      case 4:
        pt(p, nt, W);
        break;
      default:
        console.error(
          "Oups, une erreur est survenu, la sousQuestionId est: ",
          F,
          "."
        );
        break;
    }
  }
  function Se() {
    r < 4
      ? (l((W) => W + 1), q(t, r + 1))
      : setTimeout(() => {
          U([]), n((W) => W + 1), l(1), q(t + 1, 1);
        }, 3e3);
  }
  const Ue = (W) => {
      switch (r) {
        case 1:
          W.target.textContent !== x[t - 1] || W.target.textContent === null
            ? (Se(), U((F) => [...F, !1]))
            : (i((F) => F + 1), Se(), U((F) => [...F, !0]));
          break;
        case 2:
          W.target.textContent !== h[t - 1] || W.target.textContent === null
            ? (Se(), U((F) => [...F, !1]))
            : (i((F) => F + 1), Se(), U((F) => [...F, !0]));
          break;
        case 3:
          W.target.textContent !== g[t - 1] || W.target.textContent === null
            ? (Se(), U((F) => [...F, !1]))
            : (i((F) => F + 1), Se(), U((F) => [...F, !0]));
          break;
        case 4:
          W.target.textContent !== p[t - 1] || W.target.textContent === null
            ? (Se(), U((F) => [...F, !1]))
            : (i((F) => F + 1), Se(), U((F) => [...F, !0]));
          break;
        default:
          Se();
          break;
      }
    },
    bt = (W) => {
      W.preventDefault(), n(1), l(1), q(1, 1), u(W.target.name.value);
    };
  return R.jsxs(R.Fragment, {
    children: [
      t === 0 &&
        R.jsx("div", {
          className:
            "fixed z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center",
          children: R.jsxs("div", {
            className:
              "bg-green w-[80%] md:w-[50%] h-auto py-8 rounded-[10px] flex flex-col items-center",
            children: [
              R.jsx("p", {
                className: "text-label text-4xl",
                children: "Règles:",
              }),
              R.jsx("p", {
                className: "text-center mt-4 md:mt-8 text-label text-xl mx-4",
                children:
                  "En garde ma biquette ! 4 choix possibles et puis c'est tout ! Et secouez vous un peu les miches !",
              }),
              R.jsx("img", {
                src: u0,
                alt: "Gif",
                className:
                  "hidden md:block tall:hidden md:mt-8 md:max-h-[40%] px-4",
              }),
              R.jsxs("form", {
                className: "flex flex-col",
                autoComplete: "off",
                onSubmit: bt,
                children: [
                  R.jsx("input", {
                    className:
                      "rounded-full px-[5%] md:px-20 h-8 mt-8 md:mt-16 text-center text-black text-xl bg-label placeholder:text-black",
                    type: "text",
                    name: "name",
                    id: "name",
                    placeholder: "Entrez votre nom",
                    required: !0,
                  }),
                  R.jsx("div", {
                    className: "flex justify-center",
                    children: R.jsx("button", {
                      type: "submit",
                      className:
                        "bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8",
                      children: "Start",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      t > 0 &&
        t < 6 &&
        R.jsx("div", {
          className:
            "fixed flex-col z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex justify-center",
          children: R.jsxs("div", {
            className:
              "bg-green w-screen h-auto py-8 min-h-[60%] flex flex-col items-center mb-auto",
            children: [
              R.jsx("img", {
                className:
                  "rounded-full w-[20%] md:w-[10%] mb-4 hidden md:block",
                src: r > 2 ? v[t - 1] : f0,
                alt: "Personnage",
              }),
              R.jsxs("p", {
                className: "text-label text-xl md:text-3xl tall:text-xl",
                children: [
                  r === 1 && "Quel personnage a dit cette citation ?",
                  r === 2 && "Quel acteur a dit cette citation ?",
                  r === 3
                    ? "Dans quel saison a été dit cette citation ?"
                    : r === 4 && "Dans quel épisode a été dit cette citation ?",
                ],
              }),
              R.jsx("div", {
                className:
                  "bg-label rounded-[20px] w-[75%] text-center py-4 md:py-16 tall:py-4 mt-4",
                children: R.jsx("p", {
                  className: "text-black text-xs px-2 md:text-2xl tall:text-xl",
                  children: s[t - 1],
                }),
              }),
              R.jsxs("div", {
                className: "grid gap-4 grid-cols-2 text-center pt-4 w-[60%]",
                children: [
                  R.jsx("div", {
                    className: `text-black py-[2px] md:py-2 tall:py-1 ${
                      j[0] === !1 && "bg-[#a41919] text-label"
                    } ${j[0] === void 0 && "bg-label"} ${
                      j[0] === !0 && "bg-[#008000] text-label"
                    }`,
                    children: R.jsx("p", {
                      children: j[0] === void 0 ? "Personnage" : x[t - 1],
                    }),
                  }),
                  R.jsx("div", {
                    className: `text-black py-[2px] md:py-2 tall:py-1 ${
                      j[1] === !1 && "bg-[#a41919] text-label"
                    } ${j[1] === void 0 && "bg-label"} ${
                      j[1] === !0 && "bg-[#008000] text-label"
                    }`,
                    children: R.jsxs("p", {
                      children: [" ", j[1] === void 0 ? "Acteur" : h[t - 1]],
                    }),
                  }),
                  R.jsx("div", {
                    className: `text-black py-[2px] md:py-2 tall:py-1 ${
                      j[2] === !1 && "bg-[#a41919] text-label"
                    } ${j[2] === void 0 && "bg-label"} ${
                      j[2] === !0 && "bg-[#008000] text-label"
                    }`,
                    children: R.jsxs("p", {
                      children: [" ", j[2] === void 0 ? "Saison" : g[t - 1]],
                    }),
                  }),
                  R.jsx("div", {
                    className: `text-black py-[2px] md:py-2 tall:py-1 ${
                      j[3] === !1 && "bg-[#a41919] text-label"
                    } ${j[3] === void 0 && "bg-label"} ${
                      j[3] === !0 && "bg-[#008000] text-label"
                    }`,
                    children: R.jsxs("p", {
                      children: [" ", j[3] === void 0 ? "Episode" : p[t - 1]],
                    }),
                  }),
                ],
              }),
              R.jsxs("div", {
                className: "flex flex-col items-center w-screen",
                children: [
                  R.jsxs("p", {
                    className:
                      "text-label mt-6 mb-2 text-bold text-sm md:text-2xl",
                    children: [
                      r === 1 && "Personnage:",
                      r === 2 && "Acteur:",
                      r === 3 ? "Saison:" : r === 4 && "Episode:",
                    ],
                  }),
                  R.jsxs("div", {
                    className:
                      "flex flex-col items-center md:grid md:gap-4 md:grid-cols-2 md:text-center md:pt-4 w-screen",
                    children: [
                      R.jsx("div", {
                        className:
                          "flex justify-center w-screen md:w-auto md:justify-end",
                        children: R.jsx("button", {
                          type: "button",
                          disabled: (j[3] === !0 || j[3] === !1) && !0,
                          className:
                            "bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8",
                          onClick: Ue,
                          children: k[0],
                        }),
                      }),
                      R.jsx("button", {
                        type: "button",
                        disabled: (j[3] === !0 || j[3] === !1) && !0,
                        className:
                          "bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0",
                        onClick: Ue,
                        children: k[1],
                      }),
                      R.jsx("div", {
                        className:
                          "flex justify-center w-screen md:w-auto md:justify-end",
                        children: R.jsx("button", {
                          type: "button",
                          disabled: (j[3] === !0 || j[3] === !1) && !0,
                          className:
                            "bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0",
                          onClick: Ue,
                          children: k[[2]],
                        }),
                      }),
                      R.jsx("button", {
                        type: "button",
                        disabled: (j[3] === !0 || j[3] === !1) && !0,
                        className:
                          "bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0",
                        onClick: Ue,
                        children: k[3],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      t === 6 &&
        R.jsx("div", {
          className:
            "fixed z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center",
          children: R.jsxs("div", {
            className:
              "bg-green w-[80%] md:w-[50%] h-auto py-8 min-h-[60%] rounded-[10px] flex flex-col items-center",
            children: [
              R.jsx("p", {
                className: "text-label text-4xl",
                children: "Résultat:",
              }),
              R.jsxs("p", {
                children: ["Bravo ", a, " tu as obtenu un score de: ", o],
              }),
              R.jsx("img", {
                src: o < 11 ? c0 : s0,
                alt: "Gif",
                className: "hidden md:block tall:hidden md:mt-8 md:max-h-[40%]",
              }),
              R.jsx("button", {
                type: "button",
                className:
                  "bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8",
                onClick: () => {
                  n(0), ne(), i(0);
                },
                children: "Restart",
              }),
            ],
          }),
        }),
    ],
  });
}
function p0() {
  return R.jsx("div", {
    className:
      "bg-back fixed w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center",
    children: R.jsx("div", {
      className:
        "bg-green flex flex-col h-auto py-8 px-6 w-auto md:w-auto items-center rounded-[10px]",
      children: R.jsxs("form", {
        className: "flex flex-col my-auto",
        onSubmit: (e) => {
          e.preventDefault();
        },
        children: [
          R.jsx("label", {
            htmlFor: "Message",
            className: "text-label",
            children: "Message",
          }),
          R.jsx("input", {
            type: "text",
            id: "Message",
            name: "Message",
            autoComplete: "off",
            required: !0,
            className:
              "h-32 border-2 border-black mb-2 px-2 py-1 content-center bg-label",
          }),
          R.jsx("label", {
            htmlFor: "Username",
            className: "text-label",
            children: "Username",
          }),
          R.jsx("input", {
            type: "text",
            id: "Username",
            name: "Username",
            required: !0,
            className:
              "border-2 border-black mb-2 px-2 py-1 content-center bg-label",
          }),
          R.jsx("label", {
            htmlFor: "Email",
            className: "text-label",
            children: "Email",
          }),
          R.jsx("input", {
            type: "email",
            id: "Email",
            name: "Email",
            required: !0,
            className:
              "border-2 border-black mb-2 px-2 py-1 content-center bg-label",
          }),
          R.jsx("div", {
            className: "flex justify-center",
            children: R.jsx("input", {
              type: "submit",
              value: "Submit",
              className:
                "bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8 ",
            }),
          }),
        ],
      }),
    }),
  });
}
const h0 = "/assets/ca-fait-rien-cassez-vous-9d0957e5.gif",
  m0 = "/assets/javoue-suis-perdue-8550ea8b.gif";
function y0() {
  const e = [h0, m0];
  return R.jsxs("div", {
    className:
      "flex font-amarante font-bold justify-center flex-col items-center h-screen text-black text-6xl md:text-8xl text-center bg-back",
    children: [
      R.jsx("img", {
        className: "h-1/2 mb-16",
        src: `${e[Math.floor(Math.random() * 2)]}`,
        alt: "Gif",
      }),
      R.jsx("h1", { children: "Error 404" }),
      R.jsx("h2", { children: "Page not Found" }),
      R.jsx(Zt, {
        to: "/",
        className:
          " bg-green hover:bg-green-hover p-5 rounded-full text-label text-4xl mt-10 md:mt-20 tall:mt-10 mb-10 md:mb-0 tall:mb-10",
        children: "Return to Home",
      }),
    ],
  });
}
const v0 = Fv([
    {
      element: R.jsx(Wv, {}),
      errorElement: R.jsx(y0, {}),
      children: [
        { path: "/", element: R.jsx(Kv, {}) },
        { path: "/quiz", element: R.jsx(d0, {}) },
        { path: "/contact", element: R.jsx(p0, {}) },
      ],
    },
  ]),
  g0 = Xi.createRoot(document.getElementById("root"));
g0.render(R.jsx(Pv, { router: v0 }));
