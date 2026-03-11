import ie, { forwardRef as E, cloneElement as ue } from "react";
var j = { exports: {} }, x = {};
var V;
function _e() {
  if (V) return x;
  V = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(i, o, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      l = {};
      for (var d in o)
        d !== "key" && (l[d] = o[d]);
    } else l = o;
    return o = l.ref, {
      $$typeof: t,
      type: i,
      key: m,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return x.Fragment = s, x.jsx = n, x.jsxs = n, x;
}
var v = {};
var B;
function me() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case Q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case te:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case H:
            return "Portal";
          case ee:
            return e.displayName || "Context";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case re:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ae:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case $:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function n(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var c = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), s(e);
      }
    }
    function i(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function c() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function g() {
      var e = t(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, r, c, u, T, A) {
      var _ = c.ref;
      return e = {
        $$typeof: M,
        type: e,
        key: r,
        props: c,
        _owner: u
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function Y(e, r, c, u, T, A) {
      var _ = r.children;
      if (_ !== void 0)
        if (u)
          if (le(_)) {
            for (u = 0; u < _.length; u++)
              F(_[u]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else F(_);
      if (D.call(r, "key")) {
        _ = t(e);
        var b = Object.keys(r).filter(function(ce) {
          return ce !== "key";
        });
        u = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", J[_ + u] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          _,
          b,
          _
        ), J[_ + u] = !0);
      }
      if (_ = null, c !== void 0 && (n(c), _ = "" + c), m(r) && (n(r.key), _ = "" + r.key), "key" in r) {
        c = {};
        for (var P in r)
          P !== "key" && (c[P] = r[P]);
      } else c = r;
      return _ && d(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        _,
        c,
        o(),
        T,
        A
      );
    }
    function F(e) {
      q(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === $ && (e._payload.status === "fulfilled" ? q(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === M;
    }
    var y = ie, M = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), re = /* @__PURE__ */ Symbol.for("react.forward_ref"), te = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), oe = /* @__PURE__ */ Symbol.for("react.client.reference"), O = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, le = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var L, W = {}, z = y.react_stack_bottom_frame.bind(
      y,
      l
    )(), U = S(i(l)), J = {};
    v.Fragment = w, v.jsx = function(e, r, c) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return Y(
        e,
        r,
        c,
        !1,
        u ? Error("react-stack-top-frame") : z,
        u ? S(i(e)) : U
      );
    }, v.jsxs = function(e, r, c) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return Y(
        e,
        r,
        c,
        !0,
        u ? Error("react-stack-top-frame") : z,
        u ? S(i(e)) : U
      );
    };
  })()), v;
}
var G;
function de() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? j.exports = _e() : j.exports = me()), j.exports;
}
var a = de();
const fe = "_button_1su6c_1", pe = "_sm_1su6c_51", be = "_md_1su6c_61", Ee = "_lg_1su6c_71", he = "_primary_1su6c_85", xe = "_secondary_1su6c_107", ve = "_danger_1su6c_131", Re = "_spinner_1su6c_167", ke = "_spin_1su6c_167", N = {
  button: fe,
  sm: pe,
  md: be,
  lg: Ee,
  primary: he,
  secondary: xe,
  danger: ve,
  spinner: Re,
  spin: ke
};
function h(...t) {
  return t.filter(Boolean).join(" ");
}
function _r({
  variant: t = "primary",
  size: s = "md",
  children: n,
  isLoading: i = !1,
  className: o,
  disabled: l,
  ...m
}) {
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      className: h(N.button, N[t], N[s], o),
      disabled: l || i,
      ...m,
      children: [
        i && /* @__PURE__ */ a.jsx("span", { className: N.spinner }),
        n
      ]
    }
  );
}
const ge = "_wrapper_1gais_1", ye = "_input_1gais_17", Te = "_control_1gais_29", je = "_checkmark_1gais_77", Ne = "_label_1gais_91", R = {
  wrapper: ge,
  input: ye,
  control: Te,
  checkmark: je,
  label: Ne
}, we = E(
  ({ label: t, className: s, ...n }, i) => /* @__PURE__ */ a.jsxs("label", { className: R.wrapper, children: [
    /* @__PURE__ */ a.jsx("input", { ref: i, type: "checkbox", className: R.input, ...n }),
    /* @__PURE__ */ a.jsx("span", { className: R.control, children: /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: R.checkmark,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        children: /* @__PURE__ */ a.jsx("polyline", { points: "20 6 9 17 4 12" })
      }
    ) }),
    t && /* @__PURE__ */ a.jsx("span", { className: h(R.label, s), children: t })
  ] })
);
we.displayName = "Checkbox";
const $e = "_error_103i3_1", Oe = {
  error: $e
}, Se = E(
  ({ children: t, id: s, ...n }, i) => t ? /* @__PURE__ */ a.jsx("p", { ref: i, id: s, role: "alert", className: Oe.error, ...n, children: t }) : null
);
Se.displayName = "ErrorMessage";
const Ae = "_wrapper_68gzu_1", Pe = "_description_68gzu_13", Ce = "_error_68gzu_23", C = {
  wrapper: Ae,
  description: Pe,
  error: Ce
}, Ie = "_label_14hl6_1", Ye = {
  label: Ie
}, X = E(
  ({ className: t, ...s }, n) => /* @__PURE__ */ a.jsx("label", { ref: n, className: h(Ye.label, t), ...s })
);
X.displayName = "Label";
function mr({
  label: t,
  description: s,
  error: n,
  id: i,
  children: o
}) {
  const l = i || `field-${Math.random().toString(36).slice(2, 9)}`, m = `${l}-description`, d = `${l}-error`, p = ue(o, {
    id: l,
    "aria-invalid": !!n,
    "aria-describedby": n ? d : s ? m : void 0
  });
  return /* @__PURE__ */ a.jsxs("div", { className: C.wrapper, children: [
    t && /* @__PURE__ */ a.jsx(X, { htmlFor: l, children: t }),
    p,
    s && !n && /* @__PURE__ */ a.jsx("span", { id: m, className: C.description, children: s }),
    n && /* @__PURE__ */ a.jsx("span", { id: d, className: C.error, children: n })
  ] });
}
const Fe = "_wrapper_req80_1", qe = "_label_req80_13", Me = "_input_req80_27", De = "_outline_req80_51", Le = "_filled_req80_73", We = "_sm_req80_97", ze = "_md_req80_107", Ue = "_lg_req80_117", Je = "_error_req80_131", Ve = "_errorMessage_req80_139", k = {
  wrapper: Fe,
  label: qe,
  input: Me,
  outline: De,
  filled: Le,
  sm: We,
  md: ze,
  lg: Ue,
  error: Je,
  errorMessage: Ve
}, Be = E(
  ({ error: t, className: s, variant: n = "outline", sizeVariant: i = "md", ...o }, l) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: l,
        ...o,
        className: h(
          k.input,
          k[n],
          k[i],
          t && k.error,
          s
        )
      }
    ),
    t && /* @__PURE__ */ a.jsx("span", { className: k.errorMessage, children: t })
  ] })
);
Be.displayName = "Input";
const Ge = "_container_17eaa_1", Xe = "_input_17eaa_29", He = "_track_17eaa_43", Ze = "_thumb_17eaa_59", Qe = "_sm_17eaa_85", Ke = "_md_17eaa_109", er = "_lg_17eaa_133", rr = "_label_17eaa_221", f = {
  container: Ge,
  switch: "_switch_17eaa_17",
  input: Xe,
  track: He,
  thumb: Ze,
  sm: Qe,
  md: Ke,
  lg: er,
  label: rr
}, tr = E(
  ({
    id: t,
    label: s,
    size: n = "md",
    checked: i,
    defaultChecked: o,
    disabled: l,
    className: m,
    ...d
  }, g) => {
    const p = i ?? o ?? !1;
    return /* @__PURE__ */ a.jsxs(
      "label",
      {
        htmlFor: t,
        className: h(f.container, f[n], m),
        "data-state": p ? "checked" : "unchecked",
        "aria-disabled": l || void 0,
        children: [
          /* @__PURE__ */ a.jsxs("span", { className: f.switch, children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: g,
                id: t,
                type: "checkbox",
                role: "switch",
                "aria-checked": p,
                checked: i,
                defaultChecked: o,
                disabled: l,
                className: f.input,
                ...d
              }
            ),
            /* @__PURE__ */ a.jsx("span", { className: f.track, children: /* @__PURE__ */ a.jsx("span", { className: f.thumb }) })
          ] }),
          s && /* @__PURE__ */ a.jsx("span", { className: f.label, children: s })
        ]
      }
    );
  }
);
tr.displayName = "Switch";
const nr = "_textarea_1l51m_1", ar = "_outline_1l51m_35", sr = "_filled_1l51m_57", or = "_sm_1l51m_81", lr = "_md_1l51m_91", cr = "_lg_1l51m_101", I = {
  textarea: nr,
  outline: ar,
  filled: sr,
  sm: or,
  md: lr,
  lg: cr
}, ir = E(
  ({ variant: t = "outline", size: s = "md", className: n, ...i }, o) => /* @__PURE__ */ a.jsx(
    "textarea",
    {
      ref: o,
      ...i,
      className: h(
        I.textarea,
        I[t],
        I[s],
        n
      )
    }
  )
);
ir.displayName = "Textarea";
export {
  _r as Button,
  we as Checkbox,
  Se as ErrorMessage,
  mr as FormField,
  Be as Input,
  X as Label,
  tr as Switch,
  ir as Textarea
};
//# sourceMappingURL=index.js.map
